// 模考真题中心 — 路由 /mock，CET-4 / CET-6 通过 ?exam=cet6 切换
// 49 套真题列表，全部可点击进模考；已去除 2020.07
// 读 localStorage 进度显示「开始/继续/已完成」，两级别使用独立存储键

import { Link, useSearchParams } from 'react-router-dom'
import { listMockExams } from '../data/mockExamCatalog.js'
import { listMockExams6 } from '../data/mockExamCatalog6.js'
import { loadJSON } from '../utils/storage.js'
import { examVars } from '../utils/examTheme.js'
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js'
import { ListHeader, SetGroups } from '../components/ExamList.jsx'

function progressKey(id, isCet6) {
  return `mars_${isCet6 ? 'cet6' : 'cet4'}_mock_progress_${id}`
}

export default function MockExamList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const exams = isCet6 ? listMockExams6() : listMockExams()

  const items = exams.map((e) => {
    const saved = loadJSON(progressKey(e.id, isCet6))
    const isDone = saved?.submitted && Object.values(saved.submitted).every(Boolean)
    const isStarted = saved && !isDone
    return {
      id: e.id,
      year: e.meta.year,
      month: e.meta.month,
      set: e.meta.set,
      to: `/mock/${e.id}${isCet6 ? '?exam=cet6' : ''}`,
      verified: e.meta.verified,
      pendingText: '待录入',
      state: isDone ? 'done' : isStarted ? 'started' : undefined,
      actionText: isDone ? '查看结果' : isStarted ? '继续模考' : '开始模考',
    }
  })

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-5 lg:px-8 py-10" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <ListHeader
        title={`${isCet6 ? 'CET-6' : 'CET-4'} 模考真题`}
        subtitle={`按考试顺序完整模考：写作 30min → 听力 ${isCet6 ? '30' : '25'}min → 阅读 40min → 翻译 30min`}
        isCet6={isCet6}
        onLevelChange={(code) => {
          setExamLevel(code)
          setSearchParams(code === 'cet6' ? { exam: 'cet6' } : { exam: 'cet4' })
        }}
        extra={
          <Link to={isCet6 ? '/mock/wrong?exam=cet6' : '/mock/wrong'} className="text-sm text-[var(--accent)] font-bold mt-3 inline-block hover:underline">
            查看模考错题本 →
          </Link>
        }
      />
      <p className="mb-5 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-softer)] px-4 py-2.5 text-sm text-gray-700">
        模考按真实考试条件进行，<b>不支持查词</b>；每部分点击钟表后才开始计时。
      </p>
      <SetGroups items={items} />
    </div>
  )
}
