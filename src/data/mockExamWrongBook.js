// CET-4 / CET-6 模考错题本 — 仅存本机 localStorage，不跨设备同步（与 mars-cambridge/mockWrongBook.js 同构）
// 两级分别使用 mars_cet4_mock_wrong_book / mars_cet6_mock_wrong_book，由 examRef 前缀自动判定
// 收录阅读与听力中答错的题；重新答对（原地或错题本重做）即移出（进入“已掌握”）。
// 结构: { reading: { [id]: entry }, listening: { [id]: entry } }
// id = `${examRef}-${partId}-${key}`；entry = { paper, examRef, partId, key, userAnswer, count, lastAt }
// examRef 为完整 setId（如 'cet4-2024-06-s1'）。
// key 为题在该 Part 内的相对序号（0 起），展示层回查原始题目后按原始题号显示。
// 写作/翻译为主观题，不进错题本。

const KEYS = {
  cet4: 'mars_cet4_mock_wrong_book',
  cet6: 'mars_cet6_mock_wrong_book',
}

function keyFor(level) {
  return KEYS[level] || KEYS.cet4
}

// 由 examRef 前缀判断级别（cet6-* / cet4-*），保证两套材料互不污染
function levelOf(examRef) {
  return String(examRef ?? '').startsWith('cet6') ? 'cet6' : 'cet4'
}

function readAll(level) {
  try {
    return JSON.parse(localStorage.getItem(keyFor(level)) || '{}')
  } catch {
    return {}
  }
}

function writeAll(level, all) {
  try {
    localStorage.setItem(keyFor(level), JSON.stringify(all))
  } catch { /* storage may be unavailable */ }
}

// 覆盖式记录某个 Part 的错题集合：wrongMap = { key: userAnswer }
// 不在本次集合中的该 Part 旧错题 = 已在原地重新答对 → 自动移出
export function setMockWrongBatch(examRef, paper, partId, wrongMap) {
  if (!wrongMap || typeof wrongMap !== 'object') return
  const ref = String(examRef ?? '')
  if (!ref || (paper !== 'reading' && paper !== 'listening')) return
  try {
    const level = levelOf(ref)
    const all = readAll(level)
    const bucket = (all[paper] = all[paper] || {})
    const prefix = `${ref}-${partId}-`
    // 移除该 Part 中本次答对的旧错题
    Object.keys(bucket).forEach(id => {
      if (id.startsWith(prefix) && !(String(id.slice(prefix.length)) in wrongMap)) delete bucket[id]
    })
    // 收录/累计本次错题
    Object.entries(wrongMap).forEach(([k, userAnswer]) => {
      const id = prefix + k
      const prev = bucket[id]
      bucket[id] = {
        paper, examRef: ref, partId, key: k,
        userAnswer: userAnswer == null ? '' : String(userAnswer),
        count: (prev?.count || 0) + 1,
        lastAt: Date.now(),
      }
    })
    writeAll(level, all)
  } catch { /* ignore */ }
}

// 重做答对后移出该错题
export function resolveMockWrong(examRef, paper, partId, key) {
  try {
    const level = levelOf(examRef)
    const all = readAll(level)
    if (all[paper]) delete all[paper][`${String(examRef ?? '')}-${partId}-${key}`]
    writeAll(level, all)
  } catch { /* ignore */ }
}

// 列出指定级别的全部错题（按最近错误时间倒序）；level: 'cet4' | 'cet6'
export function listMockWrong(level = 'cet4') {
  const entries = []
  const all = readAll(level)
  ;['reading', 'listening'].forEach(paper => {
    if (all[paper]) Object.values(all[paper]).forEach(e => entries.push(e))
  })
  return entries.sort((a, b) => b.lastAt - a.lastAt)
}

export function clearMockWrong(level = 'cet4') {
  try {
    localStorage.removeItem(keyFor(level))
  } catch { /* ignore */ }
}
