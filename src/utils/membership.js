// 会员/账号 API 客户端：登录、查询、兑换
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8788'
const STORAGE_KEY = 'mc_auth'
const EVENT = 'mc-auth-changed'

export function getAuth() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null } catch { return null }
}

export function setAuth(data) {
  if (!data) localStorage.removeItem(STORAGE_KEY)
  else localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  window.dispatchEvent(new Event(EVENT))
}

export function onAuthChanged(fn) {
  window.addEventListener(EVENT, fn)
  return () => window.removeEventListener(EVENT, fn)
}

async function api(path, { method = 'GET', body, headers = {} } = {}) {
  const auth = getAuth()
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(auth?.token ? { Authorization: `Bearer ${auth.token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `请求失败 (${res.status})`)
  return data
}

export function requestCode(phone) { return api('/auth/request-code', { method: 'POST', body: { phone } }) }

export async function login(phone, code) {
  const data = await api('/auth/login', { method: 'POST', body: { phone, code } })
  setAuth(data)
  return data
}

export async function refreshMe() {
  if (!getAuth()?.token) return null
  const data = await api('/me')
  setAuth({ ...getAuth(), membership: data.membership, user: { phone: data.phone } })
  return data
}

export function redeem(code) { return api('/redeem', { method: 'POST', body: { code } }) }

export function logout() { setAuth(null) }

/** 生成兑换码（管理用） */
export function adminGenerateCodes(days, count, batch) {
  return api('/admin/codes', { method: 'POST', body: { days, count, batch }, headers: { 'X-Admin-Key': 'mars-admin-dev' } })
}
