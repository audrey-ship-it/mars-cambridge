// FCE 模考进度记录 — 仅存本机 localStorage，不跨设备同步
// 结构: { [examKey]: { reading: { [partId]: { done, total, at } }, listening: {...}, writing: {...} } }
// examKey: 全真模拟 1–8 用纯数字（历史兼容）；标准版/校园版用 'standard-<册>-test<套>' / 'schools-<册>-test<套>'
// 口语为练习模式（无对错提交），不计入百分比。

const KEY = 'fce-exam-progress'
const PART_TOTALS = { reading: 7, listening: 4, writing: 2 }

// 兼容三种入参: 数字(旧 mock)、'fce-mock-3'、'fce-standard-1-test2' → 存储 key
function progressKey(examRef) {
  if (examRef == null) return ''
  const s = String(examRef)
  if (/^\d+$/.test(s)) return s
  if (/^fce-mock-\d+$/.test(s)) return s.slice('fce-mock-'.length)
  return s.replace(/^fce-/, '')
}

export function recordFcePart(paper, examRef, partId, done, total) {
  const key = progressKey(examRef)
  if (!key || !PART_TOTALS[paper] || !total) return
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}')
    const t = (all[key] = all[key] || {})
    const p = (t[paper] = t[paper] || {})
    p[partId] = { done: Math.max(done || 0, 0), total, at: Date.now() }
    localStorage.setItem(KEY, JSON.stringify(all))
  } catch { /* storage may be unavailable */ }
}

// 返回 { readingPct, listeningPct, writingPct, overallPct }，均为 0-100 整数
export function readFceProgress(examRef) {
  const empty = { readingPct: 0, listeningPct: 0, writingPct: 0, overallPct: 0 }
  const key = progressKey(examRef)
  if (!key) return empty
  try {
    const t = (JSON.parse(localStorage.getItem(KEY) || '{}'))[key] || {}
    const pct = paper => {
      const parts = t[paper] || {}
      const totalParts = PART_TOTALS[paper]
      let sum = 0
      for (let pid = 1; pid <= totalParts; pid++) {
        const rec = parts[pid]
        if (rec && rec.total > 0) sum += Math.min(1, rec.done / rec.total)
      }
      return Math.round((sum / totalParts) * 100)
    }
    const readingPct = pct('reading')
    const listeningPct = pct('listening')
    const writingPct = pct('writing')
    const overallPct = Math.round((readingPct + listeningPct + writingPct) / 3)
    return { readingPct, listeningPct, writingPct, overallPct }
  } catch {
    return empty
  }
}

export function fceProgressStatus(pct) {
  return pct >= 100 ? '已完成' : pct > 0 ? '进行中' : '未开始'
}
