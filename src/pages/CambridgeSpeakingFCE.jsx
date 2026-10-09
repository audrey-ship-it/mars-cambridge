import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { fceSpeakingTests } from '../data/fceSpeakingTests'
import { fceExamPapers, fceExamTitle, FCE_EDITIONS } from '../data/fceTestRegistry'

// ========== 倒计时器（可暂停/重置，到点提示） ==========

function Countdown({ seconds, label }) {
  const [left, setLeft] = useState(seconds)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!running) return undefined
    timerRef.current = setInterval(() => {
      setLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          setRunning(false)
          setDone(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [running])

  function reset() {
    clearInterval(timerRef.current)
    setRunning(false)
    setDone(false)
    setLeft(seconds)
  }

  const mm = String(Math.floor(left / 60)).padStart(2, '0')
  const ss = String(left % 60).padStart(2, '0')
  const urgent = left <= 10 && left > 0

  return (
    <div className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 ${done ? 'border-emerald-300 bg-emerald-50' : urgent ? 'border-rose-300 bg-rose-50' : 'border-sky-200 bg-sky-50'}`}>
      <span className="text-xs font-extrabold text-slate-600">⏱ {label}</span>
      <span className={`font-mono text-lg font-extrabold tabular-nums ${done ? 'text-emerald-600' : urgent ? 'text-rose-600' : 'text-sky-700'}`}>
        {mm}:{ss}
      </span>
      {done && <span className="text-xs font-extrabold text-emerald-600">时间到！</span>}
      <button onClick={() => setRunning(r => !r)} disabled={done}
        className="rounded-lg bg-sky-500 px-2.5 py-1 text-xs font-extrabold text-white transition hover:bg-sky-600 disabled:opacity-50">
        {running ? '暂停' : left < seconds && left > 0 ? '继续' : '开始'}
      </button>
      <button onClick={reset}
        className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-extrabold text-slate-500 transition hover:border-sky-300">
        重置
      </button>
    </div>
  )
}

// ========== Part 1 · Interview（说明卡） ==========

function Part1Panel({ part }) {
  return (
    <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        ℹ️ {part.note}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{part.instruction}</p>
      {part.categories && (
        <div className="mt-4 space-y-2">
          <div className="text-xs font-extrabold tracking-wide text-sky-700">官方备选题库（考官酌情选用）</div>
          {part.categories.map(c => (
            <div key={c.name} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <div className="text-xs font-extrabold text-slate-500">{c.name}</div>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-5 text-slate-600">
                {c.questions.map(q => <li key={q}>{q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/60 p-4">
        <strong className="text-xs font-extrabold tracking-wide text-sky-700">练习建议</strong>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-5 text-slate-600">
          <li>与同伴互相提问：家乡、学校/工作、爱好、周末安排、未来计划等</li>
          <li>每题回答 2–3 句：直接回答 + 一个理由 + 一个例子或细节（B2 层级要求）</li>
          <li>不要背稿；听不清可以请考官重复：Could you repeat that, please?</li>
        </ul>
      </div>
      <div className="mt-4">
        <Countdown seconds={120} label="Part 1 时长约 2 分钟" />
      </div>
    </div>
  )
}

// ========== Part 2 · Long turn（Candidate A / B 两卡） ==========

function Part2Panel({ part }) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs text-sky-800">
        💡 每位考生就一组图片独白约 1 分钟（含 15 秒构思时间）。图片为版权扫描件，请翻书对照（页码已标注）。作答时描述要点 + 回答问题 + 给出理由。
      </div>
      {part.tasks.map(t => (
        <div key={t.task} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-lg px-2.5 py-1 text-xs font-extrabold text-white ${t.candidate === 'A' ? 'bg-sky-500' : 'bg-indigo-400'}`}>
              Candidate {t.candidate}
            </span>
            <span className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-extrabold text-slate-500">Task {t.task}</span>
            <span className="text-xs text-slate-400">图片：{t.imagesPage || '见书末彩色插页'}（共 {t.images} 张）</span>
          </div>
          <p className="mt-3 text-lg font-extrabold leading-7 text-slate-900">{t.q}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs leading-5 text-slate-500">
            <li>先花 15 秒看图构思：每张图找一个切入角度</li>
            <li>用比较结构串联两图（Both pictures show… / While the first…, the second…）</li>
            <li>结尾回扣问题，给出个人观点</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <Countdown seconds={15} label={`Task ${t.task} 构思`} />
            <Countdown seconds={60} label={`Task ${t.task} 独白`} />
          </div>
        </div>
      ))}
    </div>
  )
}

// ========== Part 3 · Collaborative（脚本 + 思维导图 + 双阶段） ==========

function Part3Panel({ part }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-sky-500 px-2.5 py-1 text-xs font-extrabold text-white">话题</span>
          <strong className="text-lg font-extrabold text-slate-900">{part.topic}</strong>
          <span className="text-xs text-slate-400">{part.timing}</span>
        </div>
        <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <div className="text-xs font-extrabold tracking-wide text-slate-500">INTERLOCUTOR 脚本（原文）</div>
          <p className="mt-2 text-sm italic leading-6 text-slate-700">{part.script}</p>
        </div>
      </div>

      {part.mindmap ? (
        <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-wide text-sky-700">PART 3 BOOKLET · 思维导图</div>
          <div className="mt-3 flex justify-center">
            <div className="max-w-sm rounded-full border-2 border-sky-400 bg-sky-50 px-6 py-5 text-center text-sm font-extrabold leading-6 text-sky-900">
              {part.mindmap.centre}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {part.mindmap.branches.map(b => (
              <div key={b} className="rounded-xl border border-sky-200 bg-sky-50/60 px-3 py-2 text-center text-xs font-bold text-slate-700">
                {b}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-wide text-amber-700">PART 3 BOOKLET · 思维导图</div>
          <p className="mt-2 text-sm leading-6 text-amber-800">
            本套真题扫描件缺该页任务卡（书末彩色插页缺页），思维导图暂缺，待补扫描后补充。请对照纸质书完成本 Part 的讨论。
          </p>
        </div>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 rounded bg-emerald-100 px-2 py-0.5 text-xs font-extrabold text-emerald-700">讨论 2 分钟</span>
            <p className="text-sm leading-6 text-slate-700">Talk to each other about <strong>{part.discuss}</strong>.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 rounded bg-violet-100 px-2 py-0.5 text-xs font-extrabold text-violet-700">决定 1 分钟</span>
            <p className="text-sm leading-6 text-slate-700">Now decide <strong>{part.decide}</strong>.</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Countdown seconds={120} label="讨论阶段" />
          <Countdown seconds={60} label="决定阶段" />
        </div>
      </div>
    </div>
  )
}

// ========== Part 4 · Discussion（逐题讨论） ==========

function Part4Panel({ part }) {
  const [spoken, setSpoken] = useState({}) // 已练过的题标记

  function toggle(i) {
    setSpoken(s => ({ ...s, [i]: !s[i] }))
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs text-sky-800">
        💡 考官按顺序逐题提问（{part.timing}）。回答策略：直接回答 + 理由 + 例子/对比。考官可随时追问提示框内的问题。
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-xs font-extrabold tracking-wide text-slate-500">{part.leadIn}</div>
        <ol className="mt-3 space-y-2">
          {part.questions.map((q, i) => (
            <li key={i}>
              <button onClick={() => toggle(i)}
                className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${spoken[i] ? 'border-emerald-300 bg-emerald-50/60' : 'border-slate-200 hover:border-sky-300'}`}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="flex-1 text-sm font-bold leading-6 text-slate-800">{q}</span>
                {spoken[i] && <span className="text-xs font-extrabold text-emerald-600">已练 ✓</span>}
              </button>
            </li>
          ))}
        </ol>
        <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50 p-3">
          <div className="text-xs font-extrabold tracking-wide text-violet-700">考官追问提示框</div>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {part.prompts.map(p => (
              <span key={p} className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-violet-800 shadow-sm">“{p}”</span>
            ))}
          </div>
        </div>
        <p className="mt-3 text-center text-xs italic text-slate-400">{part.closing}</p>
        <div className="mt-3 flex justify-center">
          <Countdown seconds={240} label="Part 4 总时长" />
        </div>
      </div>
    </div>
  )
}

// ========== 主组件 ==========

export default function CambridgeSpeakingFCE() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [testIdx, setTestIdx] = useState(() => {
    const t = Number(searchParams.get('test'))
    return Number.isInteger(t) && t >= 1 && t <= fceSpeakingTests.length ? t - 1 : 0
  })
  const [partId, setPartId] = useState(() => {
    const p = Number(searchParams.get('part'))
    return [1, 2, 3, 4].includes(p) ? p : 2
  })

  // ?exam=fce-standard-1-test2 优先；否则 ?test=N 走全真模拟（旧入口）
  const examParam = searchParams.get('exam')
  const parsedExam = examParam ? fceExamPapers(examParam) : null
  const test = (parsedExam && parsedExam.speaking) || fceSpeakingTests[testIdx] || null
  const part = test?.parts?.[partId] || null

  function goto(idx, pid) {
    setTestIdx(idx)
    setPartId(pid)
    setSearchParams({ test: String(idx + 1), part: String(pid) })
  }
  function gotoExam(examId, pid) {
    setPartId(pid)
    setSearchParams({ exam: examId, part: String(pid) })
  }
  function goPart(pid) {
    setPartId(pid)
    setSearchParams(examParam
      ? { exam: examParam, part: String(pid) }
      : { test: String(testIdx + 1), part: String(pid) })
  }

  const PART_LABELS = {
    1: 'Part 1 · 面试问答',
    2: 'Part 2 · 图片长描述',
    3: 'Part 3 · 合作讨论',
    4: 'Part 4 · 深入讨论',
  }
  const stateKey = examParam || `mock-${testIdx + 1}`

  return (
    <CambridgeLayout activeModule="speaking" level="FCE">
      {/* 顶栏 */}
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <span className="mr-1 rounded-xl border border-sky-500 bg-sky-500 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm">
            FCE 口语中心
          </span>
          {[1, 2, 3, 4].map(pid => (
            <button
              key={pid}
              onClick={() => goPart(pid)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                partId === pid
                  ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-600'
              }`}
            >
              {PART_LABELS[pid]}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 py-7 sm:px-6">
        {/* 标题 */}
        <div>
          <div className="text-[11px] font-extrabold tracking-[.18em] text-sky-600">FCE SPEAKING · PAPER 4</div>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {parsedExam ? fceExamTitle(examParam) : (test?.title || 'FCE 口语')} · {PART_LABELS[partId]}
          </h1>
          {part?.instruction && <p className="mt-2 text-sm text-slate-500">{part.instruction}</p>}
        </div>

        {/* 套题选择 */}
        <section className="mt-5 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <strong className="text-sm text-slate-700">选择套题</strong>
            <span className="text-xs text-slate-400">
              当前为 {test ? (parsedExam ? fceExamTitle(examParam) : test.title) : '—'} · 两人结对练习效果最佳
            </span>
          </div>
          <div className="space-y-2">
            {FCE_EDITIONS.map(ed => {
              const chips = ed.books.flatMap(b => {
                if (ed.edition === 'mock') {
                  const t = fceSpeakingTests[b.book - 1]
                  return t ? [{ key: b.examId, label: `Test ${b.book}`, examId: b.examId }] : []
                }
                return [1, 2, 3, 4].map(t => {
                  const examId = `${b.examId}-test${t}`
                  return fceExamPapers(examId)?.speaking
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

        {/* 题型面板 */}
        <section className="mt-5">
          {partId === 1 && part && <Part1Panel key={`p1-${stateKey}`} part={part} />}
          {partId === 2 && part && <Part2Panel key={`p2-${stateKey}`} part={part} />}
          {partId === 3 && part && <Part3Panel key={`p3-${stateKey}`} part={part} />}
          {partId === 4 && part && <Part4Panel key={`p4-${stateKey}`} part={part} />}
          {!part && (
            <div className="rounded-[24px] border border-dashed border-sky-200 bg-sky-50/40 p-10 text-center">
              <p className="text-sm font-extrabold text-sky-600">本套口语卷正在录入中…</p>
              <p className="mt-1 text-xs text-slate-400">数据核对完成后将自动开放练习</p>
            </div>
          )}
        </section>

        {test && (
          <p className="mt-6 text-center text-xs text-slate-400">
            题面来源 {test.meta.source} · 书内页 {test.meta.pages} · {test.meta.answerSource}
          </p>
        )}
      </main>
    </CambridgeLayout>
  )
}
