// 由练习日志汇总出「我的」页要用的统计
import { dayOf, KIND_LABEL } from './practiceLog.js'

export function sum(entries) {
  let seconds = 0
  let answered = 0
  let correct = 0
  let judged = 0 // 有判分的题数（写作/翻译无）
  entries.forEach((e) => {
    seconds += e.seconds || 0
    if (e.correct != null) {
      answered += e.answered
      judged += e.answered
      correct += e.correct
    } else if (e.kind !== 'writing' && e.kind !== 'translation') {
      answered += e.answered
    }
  })
  return { seconds, answered, correct, judged, sessions: entries.length, wrong: judged - correct, rate: judged ? Math.round((correct / judged) * 100) : null }
}

export function entriesOnDay(log, day) {
  return log.filter((e) => e.day === day)
}

export function lastNDays(log, n) {
  const out = []
  const names = ['日', '一', '二', '三', '四', '五', '六']
  for (let i = n - 1; i >= 0; i -= 1) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const day = dayOf(d.getTime())
    const es = entriesOnDay(log, day)
    out.push({ day, label: i === 0 ? '今' : names[d.getDay()], answered: sum(es).answered, seconds: sum(es).seconds, isToday: i === 0 })
  }
  return out
}

// 各题型正确率（有判分的题型），按最近 days 天
export function kindRates(log, days = 30) {
  const since = new Date()
  since.setDate(since.getDate() - days + 1)
  const from = dayOf(since.getTime())
  const map = {}
  log.filter((e) => e.day >= from && e.correct != null).forEach((e) => {
    const m = (map[e.kind] ||= { kind: e.kind, answered: 0, correct: 0 })
    m.answered += e.answered
    m.correct += e.correct
  })
  return Object.values(map)
    .map((m) => ({ ...m, label: KIND_LABEL[m.kind] || m.kind, rate: Math.round((m.correct / m.answered) * 100) }))
    .sort((a, b) => b.answered - a.answered)
}

// 最弱题型：至少做过 5 题里正确率最低的
export function weakest(rates) {
  const ok = rates.filter((r) => r.answered >= 5)
  if (!ok.length) return null
  return ok.reduce((a, b) => (b.rate < a.rate ? b : a))
}

export function daysOfMonth(log, year, month) {
  const set = new Set(log.map((e) => e.day))
  const n = new Date(year, month, 0).getDate()
  const p = (x) => String(x).padStart(2, '0')
  return Array.from({ length: n }, (_, i) => ({ d: i + 1, on: set.has(`${year}-${p(month)}-${p(i + 1)}`) }))
}

export function totals(log) {
  const days = new Set(log.map((e) => e.day)).size
  const s = sum(log)
  return { days, seconds: s.seconds, answered: s.answered }
}
