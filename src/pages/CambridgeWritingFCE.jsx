import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { fceWritingTests } from '../data/fceWritingTests'
import { fceExamPapers, fceExamTitle, FCE_EDITIONS } from '../data/fceTestRegistry'
import { recordFcePart } from '../data/fceExamProgress'

const GENRE_LABEL = {
  article: '文章 Article',
  review: '评论 Review',
  story: '故事 Story',
  letter: '书信 Letter',
  email: '邮件 Email',
  essay: '作文 Essay',
  report: '报告 Report',
}

function countWords(text) {
  return text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0
}

function draftKey(metaId, partId, q) {
  return partId === 1 ? `fce-writing-draft:${metaId}:p1` : `fce-writing-draft:${metaId}:p2q${q}`
}

// 单题编辑器：key 变化时重新挂载，草稿从 localStorage 惰性初始化
function WritingEditor({ storageKey, examRef, modelAnswer, genreLabel }) {
  const [text, setText] = useState(() => localStorage.getItem(storageKey) || '')
  const [savedAt, setSavedAt] = useState(null)
  const [showModel, setShowModel] = useState(false)
  const words = countWords(text)
  const inRange = words >= 140 && words <= 190

  function saveDraft() {
    localStorage.setItem(storageKey, text)
    setSavedAt(new Date())
    recordFcePart('writing', examRef, storageKey.endsWith(':p1') ? 1 : 2, 1, 1)
  }

  return (
    <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
      {/* 答题区 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <strong className="text-sm text-slate-700">你的{genreLabel}草稿</strong>
          <span className={`text-xs font-bold ${inRange ? 'text-emerald-600' : words > 0 ? 'text-amber-600' : 'text-slate-400'}`}>
            {words} 词 · 目标 140–190
          </span>
        </div>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="在此直接作答，草稿将保存在本机浏览器（localStorage），不会跨设备同步…"
          className="h-[46vh] w-full resize-y rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-6 text-slate-800 outline-none focus:border-sky-400 focus:bg-white"
        />
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={saveDraft}
            className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:opacity-90"
          >
            保存草稿
          </button>
          {savedAt && (
            <span className="text-xs text-emerald-600 font-bold">
              ✓ 已保存到本机 {savedAt.toLocaleTimeString()}
            </span>
          )}
        </div>
      </div>

      {/* 范文对照区 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <strong className="text-sm text-slate-700">官方范文（Model answer）</strong>
          {modelAnswer && (
            <button
              onClick={() => setShowModel(s => !s)}
              className="rounded-xl border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-extrabold text-sky-600 transition hover:border-sky-400"
            >
              {showModel ? '收起范文' : '查看范文'}
            </button>
          )}
        </div>
        {!modelAnswer ? (
          <div className="flex h-[46vh] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 text-center">
            <span className="text-3xl">📕</span>
            <p className="max-w-60 text-xs leading-5 text-slate-400">
              本册官方真题未附范文（答案区仅含评分量表）。建议先写完并保存草稿，再与老师或语伴对照批改。
            </p>
          </div>
        ) : showModel ? (
          <div className="h-[46vh] overflow-y-auto whitespace-pre-line rounded-xl border border-sky-100 bg-sky-50/50 p-4 text-sm leading-7 text-slate-700">
            {modelAnswer}
          </div>
        ) : (
          <div className="flex h-[46vh] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 text-center">
            <span className="text-3xl">📝</span>
            <p className="max-w-60 text-xs leading-5 text-slate-400">
              建议先自己写完并保存草稿，再对照官方范文。范文逐字转录自答案页。
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// 题面卡
function TaskBrief({ task, partType }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="rounded-lg bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{task.q}</span>
        <span className="rounded-lg border border-amber-300 bg-amber-100 px-2 py-0.5 text-xs font-extrabold text-amber-800">
          {GENRE_LABEL[task.genre]}
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-500">{task.context}</p>
      <div className="mt-3 rounded-xl border-2 border-slate-300 bg-slate-50 p-4">
        {task.boxTitle && (
          <div className="mb-1 text-center text-base font-extrabold tracking-wide text-slate-800">{task.boxTitle}</div>
        )}
        {task.boxHeading && (
          <div className="mb-2 text-center text-sm font-extrabold text-sky-600">{task.boxHeading}</div>
        )}
        <div className="whitespace-pre-line text-center text-sm leading-6 text-slate-700">{task.prompt}</div>
        {task.begin && (
          <div className="mt-3 rounded-lg border border-sky-200 bg-white p-3 text-sm font-bold italic leading-6 text-sky-800">
            首句（必须以此开头）：{task.begin}
          </div>
        )}
        {task.mustInclude && (
          <ul className="mt-2 list-disc pl-6 text-sm text-slate-700">
            {task.mustInclude.map(item => <li key={item}>{item}</li>)}
          </ul>
        )}
      </div>
      {partType === 'essay' && (
        <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50/60 p-4">
          <div className="text-center text-base font-extrabold leading-7 text-slate-800">{task.prompt}</div>
          <div className="mt-2 text-center text-xs font-extrabold tracking-[.15em] text-sky-500">NOTES · 写作要点</div>
          <ol className="mt-1 list-decimal pl-6 text-sm leading-6 text-slate-700">
            {task.notes.map(n => <li key={n}>{n}</li>)}
          </ol>
        </div>
      )}
      <p className="mt-3 text-sm font-bold text-slate-600">{task.taskLine}</p>
    </div>
  )
}

export default function CambridgeWritingFCE() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [testIdx, setTestIdx] = useState(() => {
    const t = Number(searchParams.get('test'))
    return Number.isInteger(t) && t >= 1 && t <= fceWritingTests.length ? t - 1 : 0
  })
  const [partId, setPartId] = useState(() => {
    const p = Number(searchParams.get('part'))
    return p === 2 ? 2 : 1
  })
  const [qSel, setQSel] = useState(() => {
    const q = Number(searchParams.get('q'))
    return [2, 3, 4].includes(q) ? q : 2
  })

  // ?exam=fce-standard-1-test2 优先；否则 ?test=N 走全真模拟（旧入口）
  const examParam = searchParams.get('exam')
  const parsedExam = examParam ? fceExamPapers(examParam) : null
  const examRef = parsedExam ? examParam : testIdx + 1
  const test = (parsedExam && parsedExam.writing) || fceWritingTests[testIdx] || null
  const part = test?.parts?.[partId] || null
  const task = partId === 1 ? part : part?.tasks?.find(t => t.q === qSel) || null
  const key = test && task ? draftKey(test.meta.id, partId, qSel) : null

  function goto(idx, pid, q) {
    setTestIdx(idx)
    setPartId(pid)
    if (pid === 2) setQSel(q || qSel)
    setSearchParams({ test: String(idx + 1), part: String(pid), ...(pid === 2 ? { q: String(q || qSel) } : {}) })
  }
  function gotoExam(examId, pid, q) {
    setPartId(pid)
    if (pid === 2) setQSel(q || qSel)
    setSearchParams({ exam: examId, part: String(pid), ...(pid === 2 ? { q: String(q || qSel) } : {}) })
  }
  function goPart(pid) {
    if (examParam) gotoExam(examParam, pid)
    else goto(testIdx, pid)
  }
  function goQ(q) {
    if (examParam) gotoExam(examParam, 2, q)
    else goto(testIdx, 2, q)
  }

  return (
    <CambridgeLayout activeModule="writing" level="FCE">
      {/* 顶栏 */}
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <span className="mr-1 rounded-xl border border-sky-500 bg-sky-500 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm">
            FCE 写作中心
          </span>
          {[1, 2].map(pid => (
            <button
              key={pid}
              onClick={() => goPart(pid)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                partId === pid
                  ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-600'
              }`}
            >
              Part {pid} · {pid === 1 ? '必答议论文' : '三选一'}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        {/* 标题 */}
        <div>
          <div className="text-[11px] font-extrabold tracking-[.18em] text-sky-600">FCE WRITING · PAPER 2</div>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {parsedExam ? fceExamTitle(examParam) : (test?.title || 'FCE 写作')} · Part {partId}
          </h1>
          {part?.instruction && <p className="mt-2 text-sm text-slate-500">{part.instruction}</p>}
        </div>

        {/* 套题选择 */}
        <section className="mt-5 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <strong className="text-sm text-slate-700">选择套题</strong>
            <span className="text-xs text-slate-400">
              当前为 {test ? (parsedExam ? fceExamTitle(examParam) : test.title) : '—'}
            </span>
          </div>
          <div className="space-y-2">
            {FCE_EDITIONS.map(ed => {
              const chips = ed.books.flatMap(b => {
                if (ed.edition === 'mock') {
                  const t = fceWritingTests[b.book - 1]
                  return t ? [{ key: b.examId, label: `Test ${b.book}`, examId: b.examId }] : []
                }
                return [1, 2, 3, 4].map(t => {
                  const examId = `${b.examId}-test${t}`
                  return fceExamPapers(examId)?.writing
                    ? { key: examId, label: `${ed.edition === 'standard' ? '标准' : '校园'}${b.book}·T${t}`, examId }
                    : []
                })
              })
              if (!chips.length) return null
              return (
                <div key={ed.edition} className="flex flex-wrap items-center gap-2">
                  <span className="w-20 flex-shrink-0 text-[11px] font-extrabold text-slate-400">{ed.label}</span>
                  {chips.map(chip => {
                    const active = parsedExam ? examParam === chip.examId : chip.examId === `fce-mock-${testIdx + 1}`
                    return (
                      <button key={chip.key}
                        onClick={() => (ed.edition === 'mock' ? goto(Number(chip.examId.slice(9)) - 1, partId) : gotoExam(chip.examId, partId))}
                        className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                          active
                            ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                            : 'border-sky-100 bg-sky-50 text-sky-700 hover:border-sky-300'
                        }`}
                      >{chip.label}</button>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </section>

        {/* Part 2 子题选择 */}
        {partId === 2 && part && (
          <section className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold tracking-[.15em] text-slate-400">三选一：</span>
            {part.tasks.map(t => (
              <button
                key={t.q}
                onClick={() => goQ(t.q)}
                className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                  qSel === t.q
                    ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-600'
                }`}
              >
                Q{t.q} · {GENRE_LABEL[t.genre]}
              </button>
            ))}
          </section>
        )}

        {/* 题面 */}
        {task && (
          <section className="mt-5">
            <TaskBrief task={task} partType={part.type} />
          </section>
        )}

        {/* 编辑器 + 范文（key 变化时重挂载，自动加载对应草稿） */}
        {key && (
          <WritingEditor
            key={key}
            storageKey={key}
            examRef={examRef}
            modelAnswer={task.modelAnswer}
            genreLabel={GENRE_LABEL[task.genre]}
          />
        )}

        {!task && (
          <div className="mt-5 rounded-[24px] border border-dashed border-sky-200 bg-sky-50/40 p-10 text-center">
            <p className="text-sm font-extrabold text-sky-600">本套写作卷正在录入中…</p>
            <p className="mt-1 text-xs text-slate-400">数据核对完成后将自动开放练习</p>
          </div>
        )}

        {test && (
          <p className="mt-6 text-center text-xs text-slate-400">
            题面逐字转录自 {test.source}（{test.pages} 页 · {test.answerSource}）
          </p>
        )}
      </main>
    </CambridgeLayout>
  )
}
