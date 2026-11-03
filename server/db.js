import Database from 'better-sqlite3'

const db = new Database(new URL('./data.db', import.meta.url).pathname)
db.pragma('journal_mode = WAL')

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  phone TEXT UNIQUE NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS codes (
  code TEXT PRIMARY KEY,
  days INTEGER NOT NULL,
  batch TEXT NOT NULL DEFAULT 'default',
  status TEXT NOT NULL DEFAULT 'unused',        -- unused | redeemed | disabled
  redeemed_by INTEGER REFERENCES users(id),
  redeemed_at TEXT
);
CREATE TABLE IF NOT EXISTS memberships (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  ends_at TEXT NOT NULL                          -- ISO 字符串，UTC
);
`)

const DAY_MS = 24 * 60 * 60 * 1000

/** 按时长叠加会员：未到期则叠加，已过期则从当前时间起算 */
export function addMembershipDays(userId, days) {
  const row = db.prepare('SELECT ends_at FROM memberships WHERE user_id = ?').get(userId)
  const now = Date.now()
  const base = row ? Math.max(now, new Date(row.ends_at).getTime()) : now
  const endsAt = new Date(base + days * DAY_MS).toISOString()
  db.prepare(`INSERT INTO memberships (user_id, ends_at) VALUES (?, ?)
              ON CONFLICT(user_id) DO UPDATE SET ends_at = excluded.ends_at`).run(userId, endsAt)
  return endsAt
}

export function getMembership(userId) {
  const row = db.prepare('SELECT ends_at FROM memberships WHERE user_id = ?').get(userId)
  if (!row) return { active: false, endsAt: null }
  const active = new Date(row.ends_at).getTime() > Date.now()
  return { active, endsAt: row.ends_at }
}

/** 生成兑换码：MC-XXXX-XXXX，去除易混字符 */
export function generateCodes(days, count, batch) {
  const alphabet = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'
  const rand = (n) => Array.from({ length: n }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('')
  const insert = db.prepare('INSERT INTO codes (code, days, batch) VALUES (?, ?, ?)')
  const codes = []
  const run = db.transaction(() => {
    while (codes.length < count) {
      const code = `MC-${rand(4)}-${rand(4)}`
      try { insert.run(code, days, batch); codes.push(code) } catch { /* 重码重试 */ }
    }
  })
  run()
  return codes
}

export default db
