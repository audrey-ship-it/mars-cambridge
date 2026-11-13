// 考试计划：学生选一个考试日期 + 四级/六级，用于倒计时。可跳过。本地存储。
import { loadJSON, saveJSON } from './storage.js'

const KEY = 'mars_exam_plan_v1'

// { level: 'cet4'|'cet6', date: 'YYYY-MM-DD', estimated: boolean } 或 { skipped: true } 或 null
export function loadPlan() {
  return loadJSON(KEY, null)
}

export function savePlan(plan) {
  saveJSON(KEY, plan)
}

export function clearPlan() {
  saveJSON(KEY, null)
}

// 距考试天数：考试当天为 0，已过为负数
export function daysLeft(plan) {
  if (!plan || !plan.date) return null
  const [y, m, d] = plan.date.split('-').map(Number)
  const target = new Date(y, m - 1, d)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((target - today) / 86400000)
}

// 选月份后的预计日期：当月 10 日及之后的第一个周六（接近往年中旬的考试周末）
export function estimateDate(year, month) {
  const d = new Date(year, month - 1, 10)
  while (d.getDay() !== 6) d.setDate(d.getDate() + 1)
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

// 接下来的 6 月 / 12 月考试月份，供选择框快捷选项
export function upcomingSessions(count = 2) {
  const now = new Date()
  const out = []
  let y = now.getFullYear()
  for (let i = 0; i < 4 && out.length < count; i += 1) {
    for (const m of [6, 12]) {
      const est = estimateDate(y, m)
      const [ey, em, ed] = est.split('-').map(Number)
      if (new Date(ey, em - 1, ed) >= new Date(now.getFullYear(), now.getMonth(), now.getDate()) && out.length < count) {
        out.push({ year: y, month: m, date: est })
      }
    }
    y += 1
  }
  return out
}

export function planLine(plan) {
  const n = daysLeft(plan)
  if (n == null || n < 0) return ''
  const lv = plan.level === 'cet6' ? '六级' : '四级'
  return n === 0 ? `今天是${lv}考试日` : `距${lv}考试还有 ${n} 天`
}
