import express from 'express'
import crypto from 'node:crypto'
import db, { addMembershipDays, getMembership, generateCodes } from './db.js'

const app = express()
app.use(express.json())
app.use((req, res, next) => {  // CORS：允许前端本地/线上跨域调用
  res.set('Access-Control-Allow-Origin', req.headers.origin || '*')
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Key')
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

const ADMIN_KEY = process.env.ADMIN_KEY || 'mars-admin-dev'
const DEV_SMS_CODE = process.env.DEV_SMS_CODE || '888888'   // 内测期固定验证码，接短信服务商后替换
const DEV_SMS = process.env.DEV_SMS !== 'false'             // true = 不发真实短信，固定码

/* ── 认证 ── */

app.post('/auth/request-code', (req, res) => {
  const phone = String(req.body?.phone || '').replace(/\D/g, '')
  if (!/^1\d{10}$/.test(phone)) return res.status(400).json({ error: '手机号格式不对' })
  if (DEV_SMS) console.log(`[DEV SMS] ${phone} 的验证码: ${DEV_SMS_CODE}`)
  // TODO: 接入短信服务商后在此发送真实验证码
  res.json({ ok: true, devCode: DEV_SMS ? DEV_SMS_CODE : undefined })
})

app.post('/auth/login', (req, res) => {
  const phone = String(req.body?.phone || '').replace(/\D/g, '')
  const code = String(req.body?.code || '')
  if (!/^1\d{10}$/.test(phone)) return res.status(400).json({ error: '手机号格式不对' })
  if (code !== DEV_SMS_CODE) return res.status(401).json({ error: '验证码错误' })

  let user = db.prepare('SELECT id, phone FROM users WHERE phone = ?').get(phone)
  if (!user) {
    const info = db.prepare('INSERT INTO users (phone) VALUES (?)').run(phone)
    user = { id: info.lastInsertRowid, phone }
  }
  const token = crypto.randomBytes(24).toString('hex')
  db.prepare('INSERT INTO sessions (token, user_id) VALUES (?, ?)').run(token, user.id)
  res.json({ token, user: { phone: user.phone }, membership: getMembership(user.id) })
})

/* ── 当前用户 ── */

function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '')
  const row = db.prepare(`SELECT u.id, u.phone FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ?`).get(token)
  if (!row) return res.status(401).json({ error: '请先登录' })
  req.user = row
  next()
}

app.get('/me', auth, (req, res) => {
  res.json({ phone: req.user.phone, membership: getMembership(req.user.id) })
})

/* ── 兑换码 ── */

app.post('/redeem', auth, (req, res) => {
  const code = String(req.body?.code || '').trim().toUpperCase()
  const row = db.prepare('SELECT * FROM codes WHERE code = ?').get(code)
  if (!row) return res.status(404).json({ error: '兑换码不存在' })
  if (row.status === 'redeemed') return res.status(409).json({ error: '该兑换码已被使用' })
  if (row.status === 'disabled') return res.status(409).json({ error: '该兑换码已失效' })

  const endsAt = addMembershipDays(req.user.id, row.days)
  db.prepare(`UPDATE codes SET status = 'redeemed', redeemed_by = ?, redeemed_at = datetime('now') WHERE code = ?`)
    .run(req.user.id, code)
  res.json({ ok: true, days: row.days, membership: getMembership(req.user.id), endsAt })
})

/* ── 管理端（X-Admin-Key）── */

function adminOnly(req, res, next) {
  if (req.headers['x-admin-key'] !== ADMIN_KEY) return res.status(401).json({ error: '管理密钥错误' })
  next()
}

app.post('/admin/codes', adminOnly, (req, res) => {
  const days = Number(req.body?.days)
  const count = Math.min(Number(req.body?.count) || 1, 200)
  const batch = String(req.body?.batch || 'default')
  if (![7, 30, 90, 365].includes(days)) return res.status(400).json({ error: '时长仅支持 7/30/90/365 天' })
  res.json({ batch, days, codes: generateCodes(days, count, batch) })
})

app.get('/admin/codes', adminOnly, (req, res) => {
  const rows = db.prepare(`SELECT code, days, batch, status, redeemed_by, redeemed_at FROM codes ORDER BY rowid DESC LIMIT 500`).all()
  res.json({ codes: rows })
})

app.get('/admin/users', adminOnly, (req, res) => {
  const rows = db.prepare(`
    SELECT u.id, u.phone, u.created_at, m.ends_at,
           CASE WHEN m.ends_at IS NULL THEN 'none'
                WHEN m.ends_at > datetime('now') THEN 'active' ELSE 'expired' END AS membership
    FROM users u LEFT JOIN memberships m ON m.user_id = u.id ORDER BY u.id DESC LIMIT 500`).all()
  res.json({ users: rows })
})

const PORT = process.env.PORT || 8788
app.listen(PORT, () => console.log(`mars-cambridge server listening on :${PORT} (DEV_SMS=${DEV_SMS})`))
