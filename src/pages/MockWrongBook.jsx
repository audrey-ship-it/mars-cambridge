// 模考错题本 — 路由 /mock/wrong（CET-6 带 ?exam=cet6）
// 仿 CambridgeWrongBookMock.jsx 的 WrongCard/isRedoCorrect 模式
// listMockWrong(level) 加载对应级别错题，按 examRef/paper/partId/key 回查原题
// 重做答对调 resolveMockWrong 移出（错题只在重新答对后进「已掌握」）
// 支持全部/阅读/听力过滤、清空；CET-4 与 CET-6 错题分别存储互不污染

import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { listMockWrong, resolveMockWrong, clearMockWrong } from '../data/mockExamWrongBook.js'
import { getMockExam } from '../data/mockExamCatalog.js'
import { getMockExam6 } from '../data/mockExamCatalog6.js'
import { examVars } from '../utils/examTheme.js'
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js'

// 按 entry 回查原始题目；CET-6 听力分组为 a/b/c
function lookupQuestion(exam, entry, isCet6) {
  const k = parseInt(entry.key, 10)
  if (entry.paper === 'reading') {
    if (entry.partId === 'r1') {
      const sec = exam.reading.sections.banked
      if (!sec || k >= sec.answers.length) return null
      return { type: 'banked', questionNo: 26 + k, correct: sec.answers[k], options: sec.options, passage: sec.passage }
    }
    if (entry.partId === 'r2') {
      const sec = exam.reading.sections.matching
      if (!sec || k >= sec.questions.length) return null
      const q = sec.questions[k]
      return {
        type: 'matching', questionNo: q.n, text: q.text, correct: sec.answers[k],
        options: sec.paragraphs.map((p) => ({ letter: p.label, text: p.text.slice(0, 60) + (p.text.length > 60 ? '…' : '') })),
      }
    }
    if (entry.partId === 'r3') {
      const allQs = []
      exam.reading.sections.careful.forEach((p) => {
        p.questions.forEach((q) => allQs.push({ q, passage: p.passage }))
      })
      if (k >= allQs.length) return null
      const { q, passage } = allQs[k]
      return { type: 'careful', questionNo: q.n, text: q.text, correct: q.answer, options: q.options, passage }
    }
  }
  if (entry.paper === 'listening') {
    const groupMap = isCet6
      ? { l1: 'a', l2: 'b', l3: 'c' }
      : { l1: 'news', l2: 'conversations', l3: 'passages' }
    const gKey = groupMap[entry.partId]
    if (!gKey) return null
    const allQs = []
    exam.listening.sections[gKey].forEach((item) => {
      item.questions.forEach((q) => allQs.push({ q, transcript: item.transcript, title: item.title }))
    })
    if (k >= allQs.length) return null
    const { q, transcript, title } = allQs[k]
    return { type: 'listening', questionNo: q.n, text: q.text, correct: q.answer, options: q.options, transcript, title }
  }
  return null
}

const FILTERS = [
  { id: 'all', label: '全部' },
  { id: 'reading', label: '阅读' },
  { id: 'listening', label: '听力' },
]

export default function MockWrongBook() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  return (
    <WrongBookInner
      key={isCet6 ? 'cet6' : 'cet4'}
      isCet6={isCet6}
      onSwitch={(cet6) => {
        setExamLevel(cet6 ? 'cet6' : 'cet4')
        setSearchParams(cet6 ? { exam: 'cet6' } : { exam: 'cet4' })
      }}
    />
  )
}

function WrongBookInner({ isCet6, onSwitch }) {
  const level = isCet6 ? 'cet6' : 'cet4'
  const [entries, setEntries] = useState(() => listMockWrong(level))
  const [filter, setFilter] = useState('all')
  const [redoAnswers, setRedoAnswers] = useState({}) // { entryKey: 'A' }
  const [redoResults, setRedoResults] = useState({}) // { entryKey: 'correct' | 'wrong' }

  const filtered = useMemo(
    () => entries.filter((e) => filter === 'all' || e.paper === filter),
    [entries, filter]
  )

  function entryKey(e) {
    return `${e.examRef}-${e.paper}-${e.partId}-${e.key}`
  }

  function handleRedo(e, answer) {
    const ek = entryKey(e)
    setRedoAnswers((prev) => ({ ...prev, [ek]: answer }))
    const exam = isCet6 ? getMockExam6(e.examRef) : getMockExam(e.examRef)
    if (!exam) return
    const q = lookupQuestion(exam, e, isCet6)
    if (!q) return
    if (answer === q.correct) {
      // 答对 → 移出错题本
      resolveMockWrong(e.examRef, e.paper, e.partId, e.key)
      setRedoResults((prev) => ({ ...prev, [ek]: 'correct' }))
      // 从列表中移除
      setTimeout(() => {
        setEntries((prev) => prev.filter((x) => entryKey(x) !== ek))
        setRedoAnswers((prev) => { const n = { ...prev }; delete n[ek]; return n })
        setRedoResults((prev) => { const n = { ...prev }; delete n[ek]; return n })
      }, 1200)
    } else {
      setRedoResults((prev) => ({ ...prev, [ek]: 'wrong' }))
    }
  }

  function handleClear() {
    if (!window.confirm('确认清空全部错题？此操作不可撤销。')) return
    clearMockWrong(level)
    setEntries([])
    setRedoAnswers({})
    setRedoResults({})
  }

  const backTo = isCet6 ? '/mock?exam=cet6' : '/mock'

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 lg:px-6 py-8" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <header className="mb-6">
        <Link to={backTo} className="text-sm text-gray-500 hover:text-gray-800 mb-3 inline-block">← 返回真题中心</Link>
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-extrabold text-gray-900">{isCet6 ? 'CET-6' : 'CET-4'} 模考错题本</h1>
          <div className="flex gap-1.5">
            {[{ code: 'cet4', label: 'CET-4' }, { code: 'cet6', label: 'CET-6' }].map((e) => {
              const active = (e.code === 'cet6') === isCet6
              return (
                <button
                  key={e.code}
                  onClick={() => onSwitch(e.code === 'cet6')}
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
        <p className="text-sm text-gray-500 mt-1">重新答对后自动移出错题本（进入「已掌握」）</p>
      </header>

      <div className="flex items-center gap-2 mb-4">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={
              'rounded-xl px-4 py-2 text-sm font-bold border transition ' +
              (filter === f.id
                ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300')
            }
          >
            {f.label}
            {f.id !== 'all' && (
              <span className="ml-1 text-xs opacity-70">
                ({entries.filter((e) => e.paper === f.id).length})
              </span>
            )}
          </button>
        ))}
        {entries.length > 0 && (
          <button
            onClick={handleClear}
            className="ml-auto rounded-xl border border-gray-200 px-3 py-2 text-xs font-bold text-gray-500 hover:border-red-300 hover:text-red-500 transition"
          >
            清空
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white border border-dashed border-gray-200 p-8 text-center">
          <div className="text-4xl mb-3">🎉</div>
          <p className="text-sm text-gray-500">
            {entries.length === 0 ? '暂无错题，去模考吧！' : '当前筛选下无错题'}
          </p>
          <Link to={backTo} className="inline-block mt-4 text-sm text-[var(--accent)] font-bold">
            去模考 →
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((e) => {
            const exam = isCet6 ? getMockExam6(e.examRef) : getMockExam(e.examRef)
            const q = exam ? lookupQuestion(exam, e, isCet6) : null
            const ek = entryKey(e)
            const redoAns = redoAnswers[ek] || ''
            const redoRes = redoResults[ek]
            const paperLabel = e.paper === 'reading' ? '阅读' : '听力'
            const partLabel = e.partId.toUpperCase()

            if (!q) {
              return (
                <div key={ek} className="rounded-2xl bg-white border border-dashed border-red-200 p-4">
                  <div className="text-sm text-red-500 font-bold">题目回查失败</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {paperLabel} {partLabel} key={e.key} · 原题可能已被重命名或移除
                  </div>
                  <button
                    onClick={() => {
                      resolveMockWrong(e.examRef, e.paper, e.partId, e.key)
                      setEntries((prev) => prev.filter((x) => entryKey(x) !== ek))
                    }}
                    className="mt-2 text-xs text-gray-500 hover:text-red-500"
                  >
                    移除该孤儿条目
                  </button>
                </div>
              )
            }

            return (
              <div key={ek} className="rounded-2xl bg-white border border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {paperLabel} · {partLabel}
                  </span>
                  <span className="text-xs text-gray-400">第 {q.questionNo} 题</span>
                  {e.count > 1 && (
                    <span className="text-xs text-red-400">错 {e.count} 次</span>
                  )}
                  {redoRes === 'correct' && (
                    <span className="ml-auto text-xs font-bold text-green-700">✓ 答对，已移出</span>
                  )}
                </div>

                {/* 题干 */}
                {q.text && (
                  <div className="text-sm text-gray-800 mb-3">{q.text}</div>
                )}

                {/* banked 选词：显示空位号 */}
                {q.type === 'banked' && (
                  <div className="text-xs text-gray-400 mb-2">选词填空 Q{q.questionNo}（从下方选项中选择）</div>
                )}

                {/* 选项 */}
                <div className="space-y-1.5">
                  {[...q.options].sort((a, b) => a.letter.localeCompare(b.letter)).map((opt) => {
                    const letter = opt.letter
                    const checked = redoAns === letter
                    const showRight = redoRes === 'wrong' && letter === q.correct
                    const showWrong = redoRes === 'wrong' && checked && letter !== q.correct
                    return (
                      <label
                        key={letter}
                        className={
                          'flex items-start gap-2 rounded-lg px-2.5 py-1.5 text-sm cursor-pointer transition border ' +
                          (redoRes === 'correct'
                            ? 'border-transparent opacity-50'
                            : showRight
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                              : showWrong
                                ? 'bg-red-50 border-red-300 text-red-700'
                                : checked
                                  ? 'bg-[var(--accent-soft)] border-[var(--accent-border)]'
                                  : 'border-transparent hover:bg-gray-50')
                        }
                      >
                        <input
                          type="radio"
                          name={`redo-${ek}`}
                          checked={checked}
                          onChange={() => handleRedo(e, letter)}
                          disabled={redoRes === 'correct'}
                          className="mt-1 shrink-0"
                        />
                        <span>
                          <span className="font-bold mr-1">{letter})</span>
                          {opt.word || opt.text}
                        </span>
                      </label>
                    )
                  })}
                </div>

                {/* 你之前的错误答案 */}
                {e.userAnswer && !redoRes && (
                  <div className="mt-2 text-xs text-gray-400">
                    你之前的答案：{e.userAnswer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
