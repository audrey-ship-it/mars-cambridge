import { useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { fceListeningTests } from '../data/fceListeningTests'
import { fceExamPapers, fceExamTitle, FCE_EDITIONS } from '../data/fceTestRegistry'
import { recordFcePart } from '../data/fceExamProgress'
import { setFceWrongBatch } from '../data/fceWrongBook'

// ========== 通用小组件 ==========

function AudioBar({ src }) {
  const ref = useRef(null)
  return (
    <div className="flex items-center gap-3 rounded-xl border border-sky-200 bg-sky-50/60 p-3">
      <span className="rounded-lg bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">▶ 音频</span>
      <audio ref={ref} controls src={src} className="flex-1 h-8" preload="none" />
    </div>
  )
}

function CorrectBadge({ correct }) {
  if (correct == null) return null
  return (
    <span className={`ml-1 rounded px-1.5 py-0.5 text-[10px] font-extrabold ${correct ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
      {correct ? '✓' : '✗'}
    </span>
  )
}

function ExplanationBox({ text }) {
  if (!text) return null
  return (
    <div className="mt-2 rounded-lg border border-sky-100 bg-sky-50 p-3 text-xs leading-5 text-sky-900">
      <span className="font-extrabold text-sky-700">解析：</span>{text}
    </div>
  )
}

// ========== Part 1 · MCQ Situation（8 题）==========
// 全真模拟：每题独立音频（it.audio）；官方真题：整 Part 一条音频（part.audio）

function Part1Panel({ part, onSubmit, examRef }) {
  const items = part.items
  const [answers, setAnswers] = useState({}) // { qIdx: 0|1|2 }
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState({})
  const [revealExplanation, setRevealExplanation] = useState({})

  function select(qIdx, optIdx) {
    if (checked) return
    setAnswers(a => ({ ...a, [qIdx]: optIdx }))
  }

  function submit() {
    const res = {}
    items.forEach((it, i) => {
      const a = answers[i]
      res[i] = a != null && a === it.answer
    })
    setCorrect(res)
    setChecked(true)
    recordFcePart('listening', examRef, 1, Object.keys(answers).length, items.length)
    const wrongMap = {}
    Object.entries(res).forEach(([i, ok]) => { if (!ok) wrongMap[i] = answers[i] != null ? String.fromCharCode(65 + answers[i]) : '' })
    setFceWrongBatch('listening', examRef, 1, wrongMap)
    onSubmit?.(res)
  }

  return (
    <div>
      <div className="mb-3 rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs text-sky-800">
        💡 {part.audio ? '本 Part 共一段完整录音，播放两次。建议先全部做完再统一对答案。' : '每题一段独立短录音，播放两次。建议先全部做完再统一对答案。'}
      </div>
      {part.audio && <AudioBar src={part.audio} />}
      <div className="space-y-4">
        {items.map((it, i) => {
          const a = answers[i]
          const c = correct[i]
          const rev = revealExplanation[i]
          return (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{i + 1}</span>
                  <span className="ml-2 text-xs italic text-slate-500">{it.scenario}</span>
                </div>
                {checked && <CorrectBadge correct={c} />}
              </div>
              {it.audio && <AudioBar src={it.audio} />}
              <p className="mt-2 text-sm font-bold text-slate-800">{it.q}</p>
              <div className="mt-2 space-y-1.5">
                {it.opts.map((opt, oi) => {
                  const picked = a === oi
                  const isAns = oi === it.answer
                  const cls = !checked
                    ? picked ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-slate-200 hover:border-sky-300'
                    : isAns ? 'border-emerald-400 bg-emerald-50 text-emerald-800'
                      : picked && !c ? 'border-rose-400 bg-rose-50 text-rose-800'
                        : 'border-slate-200 text-slate-500'
                  return (
                    <button key={oi} onClick={() => select(i, oi)}
                      className={`flex w-full items-center gap-2 rounded-lg border p-2.5 text-left text-sm transition ${cls}`}>
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-extrabold">
                        {String.fromCharCode(65 + oi)}
                      </span>
                      {opt}
                    </button>
                  )
                })}
              </div>
              {checked && (
                <button onClick={() => setRevealExplanation(r => ({ ...r, [i]: !r[i] }))}
                  className="mt-2 text-xs font-extrabold text-sky-600 hover:underline">
                  {rev ? '收起解析' : '查看解析'}
                </button>
              )}
              {rev && <ExplanationBox text={it.explanation} />}
            </div>
          )
        })}
      </div>
      <div className="mt-5 text-center">
        <button onClick={submit} disabled={checked}
          className="rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-600 disabled:opacity-50">
          {checked ? '已提交' : '提交答案'}
        </button>
        {checked && (
          <div className="mt-2 text-sm font-bold text-sky-700">
            ✓ {Object.values(correct).filter(Boolean).length} / {items.length}
          </div>
        )}
      </div>
    </div>
  )
}

// ========== Part 2 · Blanks（填空）==========

function Part2Panel({ part, examRef }) {
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState({})

  function submit() {
    const res = {}
    part.items.forEach((it, i) => {
      const usr = (answers[i] || '').trim().toLowerCase()
      res[i] = it.answer.some(acc => acc.toLowerCase() === usr)
    })
    setCorrect(res)
    setChecked(true)
    recordFcePart('listening', examRef, 2, Object.values(answers).filter(v => String(v).trim()).length, part.items.length)
    const wrongMap = {}
    Object.entries(res).forEach(([i, ok]) => { if (!ok) wrongMap[i] = String(answers[i] || '') })
    setFceWrongBatch('listening', examRef, 2, wrongMap)
  }

  return (
    <div>
      <div className="mb-3 rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs text-sky-800">
        💡 听一段独白，填空（1–3 个词）。先听全文再作答。
      </div>
      <AudioBar src={part.audio} />
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {part.items.map((it, i) => {
          const usr = answers[i] || ''
          const c = correct[i]
          const showAns = it.show || it.answer[0]
          return (
            <div key={i} className={`rounded-xl border p-3 ${checked ? (c ? 'border-emerald-300 bg-emerald-50/60' : 'border-rose-300 bg-rose-50/60') : 'border-slate-200 bg-white'}`}>
              <div className="flex items-center gap-2 text-xs font-extrabold">
                <span className="rounded bg-sky-500 px-2 py-0.5 text-white">Q{i + 1}</span>
                <span className="text-slate-700">{it.q.replace('____', '______')}</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <input
                  value={usr}
                  disabled={checked}
                  onChange={e => setAnswers(a => ({ ...a, [i]: e.target.value }))}
                  placeholder="填入听到的词…"
                  className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm outline-none focus:border-sky-400 disabled:text-slate-600"
                />
                {checked && <span className={`text-xs font-extrabold ${c ? 'text-emerald-600' : 'text-rose-600'}`}>{c ? '✓' : '✗'}</span>}
              </div>
              {checked && !c && (
                <div className="mt-1 text-xs text-slate-600">
                  正确答案：<span className="font-extrabold text-emerald-700">{showAns}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="mt-5 text-center">
        <button onClick={submit} disabled={checked}
          className="rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-600 disabled:opacity-50">
          {checked ? '已提交' : '提交答案'}
        </button>
        {checked && (
          <div className="mt-2 text-sm font-bold text-sky-700">
            ✓ {Object.values(correct).filter(Boolean).length} / {part.items.length}
          </div>
        )}
      </div>
    </div>
  )
}

// ========== Part 3 · Matching（5 speakers → A–H）==========

function Part3Panel({ part, examRef }) {
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState({})

  function submit() {
    const res = {}
    part.items.forEach((it, i) => {
      res[i] = answers[i] === it.answer
    })
    setCorrect(res)
    setChecked(true)
    recordFcePart('listening', examRef, 3, Object.keys(answers).length, part.items.length)
    const wrongMap = {}
    Object.entries(res).forEach(([i, ok]) => { if (!ok) wrongMap[i] = String(answers[i] || '') })
    setFceWrongBatch('listening', examRef, 3, wrongMap)
  }

  return (
    <div>
      <div className="mb-3 rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs text-sky-800">
        💡 听 5 位说话者独白，从 A–H 中选出最匹配的选项。有 3 个多余选项。
      </div>
      <AudioBar src={part.audio} />
      <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50/60 p-3">
        <div className="mb-1 text-xs font-extrabold tracking-wide text-sky-700">选项 A–H</div>
        <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 sm:grid-cols-2">
          {part.options.map(o => (
            <li key={o.label}><span className="font-extrabold text-sky-700">{o.label}.</span> {o.text}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 space-y-2">
        {part.items.map((it, i) => {
          const picked = answers[i]
          const c = correct[i]
          return (
            <div key={i} className={`rounded-xl border p-3 ${checked ? (c ? 'border-emerald-300 bg-emerald-50/60' : 'border-rose-300 bg-rose-50/60') : 'border-slate-200 bg-white'}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-slate-800">Speaker {i + 1} — {it.speaker}</span>
                <div className="flex gap-1">
                  {part.options.map(o => {
                    const isPicked = picked === o.label
                    const isAns = o.label === it.answer
                    const cls = !checked
                      ? isPicked ? 'bg-sky-500 text-white' : 'border border-slate-200 text-slate-500 hover:border-sky-300'
                      : isAns ? 'bg-emerald-500 text-white'
                        : isPicked && !c ? 'bg-rose-500 text-white'
                          : 'border border-slate-200 text-slate-400'
                    return (
                      <button key={o.label} disabled={checked}
                        onClick={() => setAnswers(a => ({ ...a, [i]: o.label }))}
                        className={`h-8 w-8 rounded-lg text-xs font-extrabold transition ${cls}`}>
                        {o.label}
                      </button>
                    )
                  })}
                </div>
              </div>
              {checked && !c && (
                <div className="mt-1 text-xs text-slate-600">
                  正确答案：<span className="font-extrabold text-emerald-700">{it.answer}</span> — {it.explanation}
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="mt-5 text-center">
        <button onClick={submit} disabled={checked}
          className="rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-600 disabled:opacity-50">
          {checked ? '已提交' : '提交答案'}
        </button>
        {checked && (
          <div className="mt-2 text-sm font-bold text-sky-700">
            ✓ {Object.values(correct).filter(Boolean).length} / {part.items.length}
          </div>
        )}
      </div>
    </div>
  )
}

// ========== Part 4 · MCQ（7 题，同一段长录音）==========

function Part4Panel({ part, examRef }) {
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState({})

  function select(qIdx, optIdx) {
    if (checked) return
    setAnswers(a => ({ ...a, [qIdx]: optIdx }))
  }

  function submit() {
    const res = {}
    part.items.forEach((it, i) => {
      const a = answers[i]
      res[i] = a != null && a === it.answer
    })
    setCorrect(res)
    setChecked(true)
    recordFcePart('listening', examRef, 4, Object.keys(answers).length, part.items.length)
    const wrongMap = {}
    Object.entries(res).forEach(([i, ok]) => { if (!ok) wrongMap[i] = answers[i] != null ? String.fromCharCode(65 + answers[i]) : '' })
    setFceWrongBatch('listening', examRef, 4, wrongMap)
  }

  return (
    <div>
      <div className="mb-3 rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs text-sky-800">
        💡 听一段长对话/独白，回答 7 道选择题。
      </div>
      <AudioBar src={part.audio} />
      <div className="mt-4 space-y-3">
        {part.items.map((it, i) => {
          const a = answers[i]
          const c = correct[i]
          return (
            <div key={i} className={`rounded-xl border p-3 ${checked ? (c ? 'border-emerald-300 bg-emerald-50/60' : 'border-rose-300 bg-rose-50/60') : 'border-slate-200 bg-white'}`}>
              <div className="flex items-center gap-2">
                <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{i + 1}</span>
                <span className="text-sm font-bold text-slate-800">{it.q}</span>
                {checked && <CorrectBadge correct={c} />}
              </div>
              <div className="mt-2 space-y-1">
                {it.opts.map((opt, oi) => {
                  const picked = a === oi
                  const isAns = oi === it.answer
                  const cls = !checked
                    ? picked ? 'border-sky-500 bg-sky-50' : 'border-slate-200 hover:border-sky-300'
                    : isAns ? 'border-emerald-400 bg-emerald-50'
                      : picked && !c ? 'border-rose-400 bg-rose-50'
                        : 'border-slate-200 text-slate-400'
                  return (
                    <button key={oi} onClick={() => select(i, oi)}
                      className={`flex w-full items-center gap-2 rounded-lg border px-3 py-1.5 text-left text-xs transition ${cls}`}>
                      <span className="font-extrabold text-sky-700">{String.fromCharCode(65 + oi)}.</span>
                      {opt}
                    </button>
                  )
                })}
              </div>
              {checked && <ExplanationBox text={it.explanation} />}
            </div>
          )
        })}
      </div>
      <div className="mt-5 text-center">
        <button onClick={submit} disabled={checked}
          className="rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-600 disabled:opacity-50">
          {checked ? '已提交' : '提交答案'}
        </button>
        {checked && (
          <div className="mt-2 text-sm font-bold text-sky-700">
            ✓ {Object.values(correct).filter(Boolean).length} / {part.items.length}
          </div>
        )}
      </div>
    </div>
  )
}

// ========== 主组件 ==========

export default function CambridgeListeningFCE() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [testIdx, setTestIdx] = useState(() => {
    const t = Number(searchParams.get('test'))
    return Number.isInteger(t) && t >= 1 && t <= fceListeningTests.length ? t - 1 : 0
  })
  const [partId, setPartId] = useState(() => {
    const p = Number(searchParams.get('part'))
    return [1, 2, 3, 4].includes(p) ? p : 1
  })

  // ?exam=fce-standard-1-test2 优先；否则 ?test=N 走全真模拟（旧入口）
  const examParam = searchParams.get('exam')
  const parsedExam = examParam ? fceExamPapers(examParam) : null
  const examRef = parsedExam ? examParam : testIdx + 1
  const test = (parsedExam && parsedExam.listening) || fceListeningTests[testIdx] || null
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
    1: 'Part 1 · 情境选择 (8题)',
    2: 'Part 2 · 填空 (10题)',
    3: 'Part 3 · 匹配 (5题)',
    4: 'Part 4 · 长对话 (7题)',
  }
  const stateKey = examParam || `mock-${testIdx + 1}`

  return (
    <CambridgeLayout activeModule="listening" level="FCE">
      {/* 顶栏 */}
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <span className="mr-1 rounded-xl border border-sky-500 bg-sky-500 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm">
            FCE 听力中心
          </span>
          <Link to="/cambridge/wrong/fce" className="rounded-xl border border-sky-200 bg-white px-3 py-2.5 text-sm font-extrabold text-sky-700 transition hover:border-sky-400">✗ 错题本</Link>
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
          <div className="text-[11px] font-extrabold tracking-[.18em] text-sky-600">FCE LISTENING · PAPER 3</div>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {parsedExam ? fceExamTitle(examParam) : (test?.title || 'FCE 听力')} · {PART_LABELS[partId]}
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
                  const t = fceListeningTests[b.book - 1]
                  return t ? [{ key: b.examId, label: `Test ${b.book}`, examId: b.examId }] : []
                }
                return [1, 2, 3, 4].map(t => {
                  const examId = `${b.examId}-test${t}`
                  return fceExamPapers(examId)?.listening
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
          {partId === 1 && part && <Part1Panel key={`p1-${stateKey}`} part={part} examRef={examRef} />}
          {partId === 2 && part && <Part2Panel key={`p2-${stateKey}`} part={part} examRef={examRef} />}
          {partId === 3 && part && <Part3Panel key={`p3-${stateKey}`} part={part} examRef={examRef} />}
          {partId === 4 && part && <Part4Panel key={`p4-${stateKey}`} part={part} examRef={examRef} />}
          {!part && (
            <div className="rounded-[24px] border border-dashed border-sky-200 bg-sky-50/40 p-10 text-center">
              <p className="text-sm font-extrabold text-sky-600">本套听力卷正在录入中…</p>
              <p className="mt-1 text-xs text-slate-400">数据核对完成后将自动开放练习</p>
            </div>
          )}
        </section>

        {test && (
          <p className="mt-6 text-center text-xs text-slate-400">
            音频来源 {test.source} · 答案 {test.answerSource} · 题面 pages {test.pages}
          </p>
        )}
      </main>
    </CambridgeLayout>
  )
}
