// KET / PET 模考错题本 — 仅存本机 localStorage，不跨设备同步（与 fceWrongBook.js 同构）
// 收录阅读与听力中答错的题；重新答对（原地或错题本重做）即移出（进入"已掌握"）。
// 结构: { reading: { [id]: entry }, listening: { [id]: entry } }
// id = `${examRef}-${partId}-${key}`；entry = { paper, testN(examRef), partId, key, userAnswer, count, lastAt }
// examRef 为完整 examId（'ket-1-test1' / 'ket-standard-2-test3' / 'pet-mock-13' 等）。
// key 为题在 Part 内的序号（0 起），展示层回查原始题目后按原始题号显示。

const KEYS = { ket: 'ket-mock-wrong-book', pet: 'pet-mock-wrong-book' }

function readAll(level) {
  try {
    return JSON.parse(localStorage.getItem(KEYS[level]) || '{}')
  } catch {
    return {}
  }
}

// 覆盖式记录某个 Part 的错题集合：wrongMap = { key: userAnswer }
// 不在本次集合中的该 Part 旧错题 = 已在原地重新答对 → 自动移出
export function setMockWrongBatch(level, paper, examRef, partId, wrongMap) {
  if (!wrongMap || typeof wrongMap !== 'object') return
  const testN = String(examRef ?? '')
  if (!testN || !KEYS[level]) return
  try {
    const all = readAll(level)
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
    localStorage.setItem(KEYS[level], JSON.stringify(all))
  } catch { /* storage may be unavailable */ }
}

export function resolveMockWrong(level, paper, examRef, partId, key) {
  try {
    const all = readAll(level)
    if (all[paper]) delete all[paper][`${String(examRef ?? '')}-${partId}-${key}`]
    if (KEYS[level]) localStorage.setItem(KEYS[level], JSON.stringify(all))
  } catch { /* ignore */ }
}

export function listMockWrong(level) {
  const entries = []
  const all = readAll(level)
  Object.values(all).forEach(bucket => {
    Object.values(bucket).forEach(e => entries.push(e))
  })
  return entries.sort((a, b) => b.lastAt - a.lastAt)
}

export function clearMockWrong(level) {
  try {
    if (KEYS[level]) localStorage.removeItem(KEYS[level])
  } catch { /* ignore */ }
}
