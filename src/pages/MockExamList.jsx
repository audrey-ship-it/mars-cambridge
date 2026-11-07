// 模考真题中心 — 路由 /mock，CET-4 / CET-6 通过 ?exam=cet6 切换
// 49 套真题列表，全部可点击进模考；已去除 2020.07
// 读 localStorage 进度显示「开始/继续/已完成」，两级别使用独立存储键

import { Link, useSearchParams } from 'react-router-dom'
import { listMockExams } from '../data/mockExamCatalog.js'
import { listMockExams6 } from '../data/mockExamCatalog6.js'
import { loadJSON } from '../utils/storage.js'
import { examVars } from '../utils/examTheme.js'
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js'

function progressKey(id, isCet6) {
  return `mars_${isCet6 ? 'cet6' : 'cet4'}_mock_progress_${id}`
}

export default function MockExamList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const exams = isCet6 ? listMockExams6() : listMockExams()

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 lg:px-6 py-8" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <header className="mb-6">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-800 mb-3 inline-block">← 返回首页</Link>
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-extrabold text-gray-900">{isCet6 ? 'CET-6' : 'CET-4'} 模考真题</h1>
          <div className="flex gap-1.5">
            {[{ code: 'cet4', label: 'CET-4' }, { code: 'cet6', label: 'CET-6' }].map((e) => {
              const active = (e.code === 'cet6') === isCet6
              return (
                <button
                  key={e.code}
                  onClick={() => {
                    setExamLevel(e.code)
                    setSearchParams(e.code === 'cet6' ? { exam: 'cet6' } : { exam: 'cet4' })
                  }}
                  className={
                    'px-3 py-1 rounded-full text-xs font-bold border transition-colors ' +
                    (active
                      ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                      : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300')
                  }
                >
                  {e.label}
                </button>
              )
            })}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          按考试顺序完整模考：写作 30min → 听力 {isCet6 ? '30' : '25'}min → 阅读 40min → 翻译 30min
        </p>
        <Link to={isCet6 ? '/mock/wrong?exam=cet6' : '/mock/wrong'} className="text-xs text-[var(--accent)] font-bold mt-2 inline-block">
          查看模考错题本 →
        </Link>
      </header>

      <div className="space-y-3">
        {exams.map((e) => {
          const saved = loadJSON(progressKey(e.id, isCet6))
          const isDone = saved?.submitted && Object.values(saved.submitted).every(Boolean)
          const isStarted = saved && !isDone
          const verified = e.meta.verified

          if (!verified) {
            return (
              <div
                key={e.id}
                className="flex items-center justify-between rounded-2xl bg-white border border-dashed border-gray-200 p-4 opacity-60"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-400">{e.meta.year}年{e.meta.month}月 第{e.meta.set}套</span>
                    <span className="text-[10px] font-bold bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">整理中</span>
                  </div>
                </div>
                <span className="text-gray-300 text-sm">待录入</span>
              </div>
            )
          }

          return (
            <Link
              key={e.id}
              to={`/mock/${e.id}${isCet6 ? '?exam=cet6' : ''}`}
              className="flex items-center justify-between rounded-2xl bg-white border border-gray-200 p-4 hover:border-[var(--accent)] hover:shadow transition-all group"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">{e.meta.year}年{e.meta.month}月 第{e.meta.set}套</span>
                  <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full">已核对</span>
                  {isDone && (
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">已完成</span>
                  )}
                  {isStarted && (
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full">进行中</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {isDone ? (
                  <span className="text-xs text-gray-500">查看结果</span>
                ) : isStarted ? (
                  <span className="text-xs text-amber-600 font-bold">继续模考</span>
                ) : (
                  <span className="text-xs text-[var(--accent)] font-bold">开始模考</span>
                )}
                <span className="text-gray-300 group-hover:text-[var(--accent)] transition-colors">→</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
