// FCE 错题本 — 仅存本机 localStorage，不跨设备同步
// 收录阅读与听力中答错的题；重新答对（原地或错题本重做）即移出（进入"已掌握"）。
// 结构: { reading: { [id]: entry }, listening: { [id]: entry } }
// id = `${examKey}-${partId}-${key}`；entry = { paper, testN(examKey), partId, key, userAnswer, count, lastAt }
// examKey: 旧数据为纯数字（全真模拟 1–8，读取时按 mock 解析）；新数据为 'fce-standard-1-test2' 等完整 examId。

const KEY = 'fce-wrong-book'

function readAll() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}

// examRef: 数字(旧 mock) 或 examId('fce-standard-1-test2')；存储侧原样保留，展示层用 resolveFceWrongExamId 解释
function examKeyOf(examRef) {
  return String(examRef ?? '')
}

// 覆盖式记录某个 Part 的错题集合：wrongMap = { key: userAnswer }
// 不在本次集合中的该 Part 旧错题 = 已在原地重新答对 → 自动移出
export function setFceWrongBatch(paper, examRef, partId, wrongMap) {
  if (!wrongMap || typeof wrongMap !== 'object') return
  const testN = examKeyOf(examRef)
  if (!testN) return
  try {
    const all = readAll()
    const bucket = (all[paper] = all[paper] || {})
    const prefix = `${testN}-${partId}-`
    // 移除该 Part 中本次答对的旧错题
    Object.keys(bucket).forEach(id => {
      if (id.startsWith(prefix) && !(String(id.slice(prefix.length)) in wrongMap)) delete bucket[id]
    })
    // 收录/累计本次错题
    Object.entries(wrongMap).forEach(([k, userAnswer]) => {
      const id = prefix + k
      const prev = bucket[id]
      bucket[id] = {
        paper, testN, partId, key: k,
        userAnswer: userAnswer == null ? '' : String(userAnswer),
        count: (prev?.count || 0) + 1,
        lastAt: Date.now(),
      }
    })
    localStorage.setItem(KEY, JSON.stringify(all))
  } catch { /* storage may be unavailable */ }
}

export function resolveFceWrong(paper, examRef, partId, key) {
  try {
    const all = readAll()
    if (all[paper]) delete all[paper][`${examKeyOf(examRef)}-${partId}-${key}`]
    localStorage.setItem(KEY, JSON.stringify(all))
  } catch { /* ignore */ }
}

export function listFceWrong() {
  const entries = []
  const all = readAll()
  Object.values(all).forEach(bucket => {
    Object.values(bucket).forEach(e => entries.push(e))
  })
  return entries.sort((a, b) => b.lastAt - a.lastAt)
}

// entry.testN → 完整 examId（'fce-mock-3' / 'fce-standard-1-test2'），供展示层定位数据
export function resolveFceWrongExamId(testN) {
  const s = String(testN ?? '')
  if (/^\d+$/.test(s)) return `fce-mock-${s}`
  if (s.startsWith('fce-')) return s
  if (s.startsWith('mock-')) return `fce-${s}`
  return s ? `fce-${s}` : ''
}

export function countFceWrong() {
  return listFceWrong().length
}

export function clearFceWrong() {
  try { localStorage.removeItem(KEY) } catch { /* ignore */ }
}
