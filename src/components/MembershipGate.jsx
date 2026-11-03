import { useEffect, useState } from 'react'
import { getAuth, requestCode, login, redeem, logout, onAuthChanged, refreshMe } from '../utils/membership.js'

function fmtDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function MembershipGate() {
  const [auth, setAuthState] = useState(getAuth())
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('login')           // login | redeem
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [redeemCode, setRedeemCode] = useState('')
  const [msg, setMsg] = useState(null)                 // {ok, text}
  const [busy, setBusy] = useState(false)

  useEffect(() => onAuthChanged(() => setAuthState(getAuth())), [])
  useEffect(() => { if (auth?.token) refreshMe().catch(() => {}) }, [])   // eslint-disable-line react-hooks/exhaustive-deps -- 进站时只刷新一次

  const m = auth?.membership || { active: false, endsAt: null }

  const chip = !auth?.token
    ? { text: '登录', cls: 'bg-[#064e3b] text-white hover:bg-[#065f46]' }
    : m.active
      ? { text: `会员至 ${fmtDate(m.endsAt)}`, cls: 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:border-emerald-400' }
      : { text: '会员已到期', cls: 'bg-amber-50 text-amber-800 border border-amber-200 hover:border-amber-400' }

  function openModal(nextMode) {
    setMode(nextMode); setMsg(null); setOpen(true)
    if (nextMode === 'login' && !auth?.token) setCode('')
  }

  async function sendSms() {
    if (busy) return
    setBusy(true); setMsg(null)
    try {
      const r = await requestCode(phone)
      setMsg({ ok: true, text: r.devCode ? `内测验证码：${r.devCode}` : '验证码已发送' })
    } catch (e) { setMsg({ ok: false, text: e.message }) }
    setBusy(false)
  }

  async function doLogin() {
    if (busy) return
    setBusy(true); setMsg(null)
    try { await login(phone, code); setMsg({ ok: true, text: '登录成功' }) }
    catch (e) { setMsg({ ok: false, text: e.message }) }
    setBusy(false)
  }

  async function doRedeem() {
    if (busy) return
    setBusy(true); setMsg(null)
    try {
      const r = await redeem(redeemCode.trim())
      setMsg({ ok: true, text: `兑换成功！会员延长至 ${fmtDate(r.endsAt)}` })
      setRedeemCode('')
    } catch (e) { setMsg({ ok: false, text: e.message }) }
    setBusy(false)
  }

  return (
    <>
      <button
        onClick={() => openModal(auth?.token && !m.active ? 'redeem' : 'login')}
        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${chip.cls}`}
      >{chip.text}</button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-extrabold text-gray-900">{mode === 'login' ? '登录 火星剑桥' : '输入兑换码'}</h3>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700 text-xl leading-none">×</button>
            </div>

            {mode === 'login' ? (
              <>
                <p className="text-xs text-gray-500 mb-3">手机号登录，学习进度和会员跟着账号走。</p>
                <div className="flex gap-2 mb-2">
                  <input
                    value={phone} onChange={e => setPhone(e.target.value)} type="tel" maxLength={11}
                    placeholder="手机号" inputMode="numeric"
                    className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#064e3b]"
                  />
                  <button onClick={sendSms} disabled={busy || !/^1\d{10}$/.test(phone)}
                    className="px-3 py-2 rounded-lg border border-emerald-200 bg-emerald-50 text-xs font-bold text-emerald-800 disabled:opacity-40">
                    发验证码
                  </button>
                </div>
                <input
                  value={code} onChange={e => setCode(e.target.value)} placeholder="验证码" inputMode="numeric"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm mb-2 focus:outline-none focus:border-[#064e3b]"
                />
                {msg && <p className={`text-xs mb-2 ${msg.ok ? 'text-emerald-700' : 'text-red-600'}`}>{msg.text}</p>}
                <button onClick={doLogin} disabled={busy || !/^1\d{10}$/.test(phone) || !code}
                  className="w-full py-2.5 rounded-lg bg-[#064e3b] text-white text-sm font-bold hover:bg-[#065f46] disabled:opacity-40">
                  登录
                </button>
                {auth?.token && (
                  <button onClick={() => { logout(); setOpen(false) }} className="w-full mt-2 py-2 text-xs text-gray-400 hover:text-gray-700">
                    退出当前账号
                  </button>
                )}
              </>
            ) : (
              <>
                <p className="text-xs text-gray-500 mb-3">
                  {auth?.token
                    ? <>当前账号：{auth.user?.phone}，会员{m.active ? `至 ${fmtDate(m.endsAt)}` : '已到期'}。兑换后时长自动叠加。</>
                    : <>请先登录再兑换。</>}
                </p>
                <input
                  value={redeemCode} onChange={e => setRedeemCode(e.target.value)} placeholder="例如 MC-XXXX-XXXX"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm mb-2 uppercase focus:outline-none focus:border-[#064e3b]"
                />
                {msg && <p className={`text-xs mb-2 ${msg.ok ? 'text-emerald-700' : 'text-red-600'}`}>{msg.text}</p>}
                <button onClick={doRedeem} disabled={busy || !auth?.token || !redeemCode.trim()}
                  className="w-full py-2.5 rounded-lg bg-[#064e3b] text-white text-sm font-bold hover:bg-[#065f46] disabled:opacity-40">
                  兑换
                </button>
                {!auth?.token && (
                  <button onClick={() => { setMode('login'); setMsg(null) }} className="w-full mt-2 py-2 text-xs text-emerald-700 hover:underline">
                    去登录
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
