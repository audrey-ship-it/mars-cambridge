// FCE 整套模考运行器 —— 体验对齐 PET 模考：按 Part 顺序作答、可暂停计时、交卷统一出分、
// 分 Part 得分、错题查看、只重做错题、刷新恢复。数据来自 fceTestRegistry（全真模拟/标准版/校园版通用）。
// 入口：/cambridge/exams/fce-xxx(-testN)?tab=reading|listening|writing|speaking
// 作答中只记录不评分（模考模式）；每个 Part 提交后静默同步总览进度（recordFcePart）与错题本（setFceWrongBatch）。

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CambridgeLayout } from './CambridgeApp'
import { useTTS } from './CambridgeExam'
import { fceExamPapers, fceExamTitle } from '../data/fceTestRegistry'
import { recordFcePart } from '../data/fceExamProgress'
import { setFceWrongBatch } from '../data/fceWrongBook'

const DURATION_LABEL = totalSeconds => `${String(Math.floor(totalSeconds / 60)).padStart(2, '0')}:${String(totalSeconds % 60).padStart(2, '0')}`
const ABCD = ['A', 'B', 'C', 'D']
const ABC = ['A', 'B', 'C']

const SECTION_META = {
  reading: { icon: '📖', label: '阅读与英语运用模考', minutes: 75 },
  listening: { icon: '🎧', label: '听力模考', minutes: 40 },
  writing: { icon: '✍️', label: '写作模考', minutes: 80 },
  speaking: { icon: '🎤', label: '口语模考', minutes: 14 },
}

/* ══════════════════════════════
   判分工具（口径与专项练习页一致；模考作答中不即时反馈）
══════════════════════════════ */

// trim + 空格折叠 + 大小写不敏感
function normalizeFceAnswer(v) {
  return String(v ?? '').trim().toLowerCase().replace(/\s+/g, ' ')
}

// 单题正误判定：1/5 按选项索引；2/3 变体等值；4 变体包含（与专项页一致）；6/7 及听力字母按字母比对
function fceAnswerIsCorrect(partId, item, ua) {
  if (partId === 1 || partId === 5) return ua != null && ua === item.answer
  if (partId === 2 || partId === 3) {
    const u = normalizeFceAnswer(ua)
    if (!u) return false
    return (item.answer || []).some(a => normalizeFceAnswer(a) === u)
  }
  if (partId === 4) {
    const u = normalizeFceAnswer(ua)
    if (!u) return false
    return (item.answer || []).some(a => {
      const n = normalizeFceAnswer(a)
      return n === u || n.includes(u) || u.includes(n)
    })
  }
  // Part 6/7 字母匹配
  return normalizeFceAnswer(ua).toUpperCase() === String(item.answer ?? '').trim().toUpperCase()
}

// 错题本展示值：索引类存字母（与专项页一致），其余存原文
function fceWrongDisplay(partId, item, ua) {
  if (partId === 1 || partId === 5) {
    return ua != null && ua >= 0 && ua < 26 ? String.fromCharCode(65 + ua) : ''
  }
  return ua == null ? '' : String(ua)
}

// 某 Part 的错题集合 { 题号: 用户作答展示值 }
function wrongMapOf(part, answers) {
  const map = {}
  ;(part.items || []).forEach((item, i) => {
    const ua = answers?.[i]
    if (!fceAnswerIsCorrect(part.part, item, ua)) map[item.q] = fceWrongDisplay(part.part, item, ua)
  })
  return map
}

function scoreFceReadingPart(part, answers) {
  const items = part.items || []
  const results = items.map((item, i) => fceAnswerIsCorrect(part.part, item, answers?.[i]))
  return { correct: results.filter(Boolean).length, total: items.length, results }
}

// 听力判定：1/4 按选项索引；2 变体等值；3 字母匹配（错题本 key 与专项页一致，用 items 下标）
function fceListeningIsCorrect(part, item, ua) {
  if (part.type === 'mcq_situation' || part.type === 'mcq') return ua != null && ua === item.answer
  if (part.type === 'blanks') {
    const u = normalizeFceAnswer(ua)
    return !!u && (item.answer || []).some(a => normalizeFceAnswer(a) === u)
  }
  return normalizeFceAnswer(ua).toUpperCase() === String(item.answer ?? '').trim().toUpperCase()
}

function scoreFceListeningPart(part, answers) {
  const items = part.items || []
  const results = items.map((item, i) => fceListeningIsCorrect(part, item, answers?.[i]))
  return { correct: results.filter(Boolean).length, total: items.length, results }
}

function listeningWrongMapOf(part, answers) {
  const map = {}
  ;(part.items || []).forEach((item, i) => {
    const ua = answers?.[i]
    if (!fceListeningIsCorrect(part, item, ua)) {
      map[i] = (part.type === 'mcq_situation' || part.type === 'mcq')
        ? (ua != null && ua >= 0 && ua < 26 ? String.fromCharCode(65 + ua) : '')
        : String(ua ?? '')
    }
  })
  return map
}

/* ══════════════════════════════
   共享外壳（sky 主题：返回总览 + 徽章 + Part 进度 chips + 可暂停计时器）
══════════════════════════════ */

function FceExamShell({ examId, section, parts, partIndex, allAnswers, isDone, onReset, timerSeconds, timerPaused, onToggleTimer, totalMinutes, children }) {
  const meta = SECTION_META[section] || SECTION_META.reading
  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <header className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <Link to={`/cambridge/exams/${examId}`} className="group mr-2 flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-extrabold text-sky-800">
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>试卷总览</span>
          </Link>
          <div className="mr-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-extrabold text-white">
            {meta.icon} {meta.label} · {totalMinutes || meta.minutes}分钟
          </div>
          {parts.map((p, index) => {
            const finished = allAnswers[index] !== undefined
            return (
              <span key={p.part} className={`rounded-xl border px-3 py-2.5 text-sm font-extrabold sm:px-4 ${index === partIndex && !isDone ? 'border-sky-600 bg-sky-600 text-white' : finished || isDone ? 'border-sky-200 bg-sky-50 text-sky-700' : 'border-slate-200 bg-white text-slate-400'}`}>
                Part {p.part}{finished || isDone ? ' ✓' : ''}
              </span>
            )
          })}
          {onToggleTimer ? (
            <button type="button" onClick={onToggleTimer} className={`ml-auto rounded-xl px-4 py-2.5 font-mono text-sm font-extrabold ${timerPaused ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>
              ⏱ {DURATION_LABEL(timerSeconds)} / {totalMinutes || meta.minutes}:00 · {timerPaused ? '继续计时' : '暂停计时'}
            </button>
          ) : <div className="ml-auto w-20" />}
        </div>
        {onReset && !isDone && Object.keys(allAnswers).length > 0 && (
          <div className="mx-auto mt-2 max-w-6xl text-right">
            <button onClick={onReset} className="text-xs font-semibold text-slate-400 hover:text-red-500">重新开始本套</button>
          </div>
        )}
      </header>
      <main className="mx-auto max-w-5xl px-4 py-7 sm:px-6">{children}</main>
    </CambridgeLayout>
  )
}

/* ══════════════════════════════
   阅读题干渲染工具
══════════════════════════════ */

// 把含 "(N) ......" 空位标记的题干拆成 [文本, {q}, 文本, ...] 序列
function splitFcePassage(passage) {
  const src = String(passage || '')
  const segments = []
  const re = /\((\d+)\)\s*\.{2,}/g
  let last = 0
  let m
  while ((m = re.exec(src))) {
    if (m.index > last) segments.push({ text: src.slice(last, m.index) })
    segments.push({ q: Number(m[1]) })
    last = re.lastIndex
  }
  if (last < src.length) segments.push({ text: src.slice(last) })
  return segments
}

// 带空位标记的题干：gapNode(qn) 返回空位处的内联节点
function FcePassageWithGaps({ passage, gapNode }) {
  const segments = useMemo(() => splitFcePassage(passage), [passage])
  return (
    <div className="rounded-2xl bg-slate-50 px-5 py-4 text-[15px] leading-7 text-slate-800 whitespace-pre-line">
      {segments.map((seg, i) => seg.q == null
        ? <span key={i}>{seg.text}</span>
        : <span key={i}>{gapNode(seg.q)}</span>)}
    </div>
  )
}

function PartHeader({ part }) {
  return (
    <div className="mb-4 rounded-2xl border border-sky-100 bg-sky-50/60 px-5 py-3">
      <div className="text-sm font-extrabold text-sky-800">{part.title}</div>
      <p className="mt-1 text-xs leading-5 text-slate-500">{part.instruction}</p>
    </div>
  )
}

function PartSubmitBar({ visibleIndexes, answers, isLast, onDone }) {
  const unanswered = visibleIndexes.some(i => answers[i] == null || String(answers[i]).trim() === '')
  return (
    <div className="mt-6 text-right">
      <button type="button" disabled={unanswered} onClick={onDone}
        className="rounded-xl bg-sky-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
        {isLast ? '完成阅读模考 →' : '完成本 Part →'}
      </button>
    </div>
  )
}

/* ══════════════════════════════
   阅读 Part 1 · 选择填空（mcq_cloze，8 题，4 选 1）
══════════════════════════════ */

function FcePart1McqCloze({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const visibleIndexes = useMemo(() => items.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null), [items, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => (initialAnswers ? [...initialAnswers] : Array(items.length).fill(null)))
  const qToIdx = useMemo(() => Object.fromEntries(items.map((it, i) => [it.q, i])), [items])

  function pick(i, idx) { setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }

  const gapNode = qn => {
    const idx = qToIdx[qn]
    if (idx == null) return <span className="text-slate-400">({qn}) ..........</span>
    const picked = answers[idx]
    return (
      <span className="inline-block align-baseline">
        <span className="font-bold text-sky-700">({qn})</span>
        {picked != null && <span className="ml-1 rounded bg-sky-100 px-1.5 py-0.5 text-xs font-bold text-sky-700">{ABCD[picked]}</span>}
      </span>
    )
  }

  return (
    <div>
      <PartHeader part={part} />
      <div className="grid items-start gap-5 lg:grid-cols-2">
        <div className="min-w-0">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">文章（8 处空缺）</div>
          <FcePassageWithGaps passage={part.passage} gapNode={gapNode} />
        </div>
        <div className="space-y-3">
          {items.map((item, i) => {
            if (!visibleIndexes.includes(i)) return null
            return (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-2 text-sm font-extrabold text-slate-700">第 {item.q} 题</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {item.opts.map((opt, oi) => {
                    const selected = answers[i] === oi
                    return (
                      <button key={oi} type="button" onClick={() => pick(i, oi)}
                        className={`rounded-xl border-2 px-3 py-2 text-left text-[15px] font-semibold leading-6 transition ${selected ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-slate-200 text-slate-700 hover:border-sky-300'}`}>
                        <strong className="mr-1">{ABCD[oi]}.</strong>{opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <PartSubmitBar visibleIndexes={visibleIndexes} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* ══════════════════════════════
   阅读 Part 2 · 完形填空（open_cloze，每空一词）
══════════════════════════════ */

function FcePart2OpenCloze({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const visibleIndexes = useMemo(() => items.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [items, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => (initialAnswers ? [...initialAnswers] : Array(items.length).fill('')))
  const qToIdx = useMemo(() => Object.fromEntries(items.map((it, i) => [it.q, i])), [items])

  function set(i, v) { setAnswers(a => { const n = [...a]; n[i] = v; return n }) }

  const gapNode = qn => {
    const idx = qToIdx[qn]
    if (idx == null) return <span className="text-slate-400">({qn}) ..........</span>
    const picked = answers[idx]
    return (
      <span className="inline-block align-baseline">
        <span className="font-bold text-sky-700">({qn})</span>
        {picked ? <span className="ml-1 rounded bg-sky-100 px-1.5 py-0.5 text-xs font-bold uppercase text-sky-700">{picked}</span> : null}
      </span>
    )
  }

  return (
    <div>
      <PartHeader part={part} />
      <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">文章（8 处空缺，每空一词）</div>
      <FcePassageWithGaps passage={part.passage} gapNode={gapNode} />
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item, i) => {
          if (!visibleIndexes.includes(i)) return null
          return (
            <div key={i} className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-sky-400">
              <span className="w-10 shrink-0 text-xs font-extrabold text-sky-600">({item.q})</span>
              <input type="text" value={answers[i] ?? ''} onChange={e => set(i, e.target.value)}
                className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-center text-base font-semibold uppercase focus:outline-none"
                placeholder="填一个词…" />
            </div>
          )
        })}
      </div>
      <PartSubmitBar visibleIndexes={visibleIndexes} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* ══════════════════════════════
   阅读 Part 3 · 词形变换（word_formation，题干空位后附提示词）
══════════════════════════════ */

function FcePart3WordFormation({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const visibleIndexes = useMemo(() => items.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [items, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => (initialAnswers ? [...initialAnswers] : Array(items.length).fill('')))
  const qToIdx = useMemo(() => Object.fromEntries(items.map((it, i) => [it.q, i])), [items])

  function set(i, v) { setAnswers(a => { const n = [...a]; n[i] = v; return n }) }

  const gapNode = qn => {
    const idx = qToIdx[qn]
    if (idx == null) return <span className="text-slate-400">({qn}) ..........</span>
    const picked = answers[idx]
    return (
      <span className="inline-block align-baseline">
        <span className="font-bold text-sky-700">({qn})</span>
        {picked ? <span className="ml-1 rounded bg-sky-100 px-1.5 py-0.5 text-xs font-bold uppercase text-sky-700">{picked}</span> : null}
      </span>
    )
  }

  return (
    <div>
      <PartHeader part={part} />
      <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">文章（空位后的斜体大写词为提示词，用其正确形式填空）</div>
      <FcePassageWithGaps passage={part.passage} gapNode={gapNode} />
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item, i) => {
          if (!visibleIndexes.includes(i)) return null
          return (
            <div key={i} className="rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-sky-400">
              <div className="flex items-center gap-2">
                <span className="w-10 shrink-0 text-xs font-extrabold text-sky-600">({item.q})</span>
                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-extrabold text-amber-800">{item.given}</span>
                <input type="text" value={answers[i] ?? ''} onChange={e => set(i, e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-center text-base font-semibold uppercase focus:outline-none"
                  placeholder="正确形式…" />
              </div>
            </div>
          )
        })}
      </div>
      <PartSubmitBar visibleIndexes={visibleIndexes} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* ══════════════════════════════
   阅读 Part 4 · 句子转换（key_word_transformation，2–5 词含关键词）
══════════════════════════════ */

function FcePart4Transformation({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const visibleIndexes = useMemo(() => items.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [items, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => (initialAnswers ? [...initialAnswers] : Array(items.length).fill('')))

  function set(i, v) { setAnswers(a => { const n = [...a]; n[i] = v; return n }) }

  return (
    <div>
      <PartHeader part={part} />
      <div className="space-y-3">
        {items.map((item, i) => {
          if (!visibleIndexes.includes(i)) return null
          return (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{item.q}</span>
                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-extrabold text-amber-800">关键词 {item.key}</span>
              </div>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-800">{item.stem}</p>
              <input type="text" value={answers[i] ?? ''} onChange={e => set(i, e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold focus:border-sky-400 focus:outline-none"
                placeholder={`用 ${item.key} 补全第二句（2–5 词）…`} />
            </div>
          )
        })}
      </div>
      <PartSubmitBar visibleIndexes={visibleIndexes} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* ══════════════════════════════
   阅读 Part 5 · 阅读选择（reading_mcq，6 题 4 选 1）
══════════════════════════════ */

function FcePart5ReadingMcq({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const visibleIndexes = useMemo(() => items.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null), [items, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => (initialAnswers ? [...initialAnswers] : Array(items.length).fill(null)))

  function pick(i, idx) { setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }

  return (
    <div>
      <PartHeader part={part} />
      <div className="grid items-start gap-5 lg:grid-cols-2">
        <div className="min-w-0">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">文章</div>
          <div className="rounded-2xl bg-slate-50 px-5 py-4 text-[15px] leading-7 text-slate-800 whitespace-pre-line">{part.passage}</div>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => {
            if (!visibleIndexes.includes(i)) return null
            return (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-2">
                  <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{item.q}</span>
                  <p className="min-w-0 flex-1 text-sm font-bold leading-6 text-slate-800">{item.q_text}</p>
                </div>
                <div className="mt-2 space-y-1.5">
                  {item.opts.map((opt, oi) => {
                    const selected = answers[i] === oi
                    return (
                      <button key={oi} type="button" onClick={() => pick(i, oi)}
                        className={`flex w-full items-start gap-2 rounded-lg border p-2.5 text-left text-sm transition ${selected ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-slate-200 text-slate-700 hover:border-sky-300'}`}>
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-extrabold ${selected ? 'border-sky-500 bg-sky-500 text-white' : 'border-current'}`}>
                          {ABCD[oi]}
                        </span>
                        <span className="leading-5">{opt}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <PartSubmitBar visibleIndexes={visibleIndexes} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* ══════════════════════════════
   阅读 Part 6 · 段落还原（paragraph_matching，A–G 六选一余三项干扰）
══════════════════════════════ */

function FcePart6GappedText({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const options = useMemo(() => part.options || [], [part.options])
  const visibleIndexes = useMemo(() => items.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null), [items, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => (initialAnswers ? [...initialAnswers] : Array(items.length).fill(null)))
  const qToIdx = useMemo(() => Object.fromEntries(items.map((it, i) => [it.q, i])), [items])

  function pick(i, label) { setAnswers(a => { const n = [...a]; n[i] = label; return n }) }

  const gapNode = qn => {
    const idx = qToIdx[qn]
    if (idx == null) return <span className="text-slate-400">({qn}) ..........</span>
    const picked = answers[idx]
    return (
      <span className="inline-block align-baseline">
        <span className="font-bold text-sky-700">({qn})</span>
        {picked && <span className="ml-1 rounded bg-sky-100 px-1.5 py-0.5 text-xs font-bold text-sky-700">{picked}</span>}
      </span>
    )
  }

  return (
    <div>
      <PartHeader part={part} />
      <div className="grid items-start gap-5 lg:grid-cols-2">
        <div className="min-w-0">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">文章（6 处空缺）</div>
          <FcePassageWithGaps passage={part.passage} gapNode={gapNode} />
        </div>
        <div className="space-y-2">
          <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">选项 A–G（其中 1 个为干扰项）</div>
          {options.map(o => (
            <div key={o.label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-600 text-sm font-extrabold text-white">{o.label}</span>
                <p className="min-w-0 flex-1 text-[15px] leading-6 text-slate-700">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <div className="text-xs font-bold uppercase tracking-wide text-slate-500">答题</div>
        {items.map((item, i) => {
          if (!visibleIndexes.includes(i)) return null
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="w-16 shrink-0 text-xs font-bold text-slate-600">第 {item.q} 题</span>
              <div className="grid min-w-0 flex-1 grid-cols-7 gap-1.5">
                {options.map(o => {
                  const selected = answers[i] === o.label
                  return (
                    <button key={o.label} type="button" onClick={() => pick(i, o.label)}
                      className={`h-10 w-full rounded-lg border-2 text-sm font-bold transition ${selected ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-slate-200 text-slate-600 hover:border-sky-300'}`}>
                      {o.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <PartSubmitBar visibleIndexes={visibleIndexes} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* ══════════════════════════════
   阅读 Part 7 · 多文本匹配（multiple_matching，四段文本 A–D）
══════════════════════════════ */

function FcePart7MultiMatch({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const sections = part.sections || []
  const visibleIndexes = useMemo(() => items.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null), [items, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => (initialAnswers ? [...initialAnswers] : Array(items.length).fill(null)))

  function pick(i, label) { setAnswers(a => { const n = [...a]; n[i] = label; return n }) }

  return (
    <div>
      <PartHeader part={part} />
      <div className="grid items-start gap-5 lg:grid-cols-2">
        <div className="min-w-0 space-y-3">
          {sections.map(s => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-600 text-sm font-extrabold text-white">{s.label}</span>
                <span className="text-sm font-extrabold text-slate-800">{s.name}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {items.map((item, i) => {
            if (!visibleIndexes.includes(i)) return null
            return (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-2">
                  <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{item.q}</span>
                  <p className="min-w-0 flex-1 text-sm font-bold leading-6 text-slate-800">{item.q_text}</p>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-1.5">
                  {sections.map(s => {
                    const selected = answers[i] === s.label
                    return (
                      <button key={s.label} type="button" onClick={() => pick(i, s.label)}
                        className={`h-10 rounded-lg border-2 text-sm font-bold transition ${selected ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-slate-200 text-slate-600 hover:border-sky-300'}`}>
                        {s.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <PartSubmitBar visibleIndexes={visibleIndexes} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

function FceReadingPartRouter({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const shared = { part, initialAnswers, redoOnly, isLast, onDone }
  if (part.type === 'mcq_cloze') return <FcePart1McqCloze {...shared} />
  if (part.type === 'open_cloze') return <FcePart2OpenCloze {...shared} />
  if (part.type === 'word_formation') return <FcePart3WordFormation {...shared} />
  if (part.type === 'key_word_transformation') return <FcePart4Transformation {...shared} />
  if (part.type === 'reading_mcq') return <FcePart5ReadingMcq {...shared} />
  if (part.type === 'paragraph_matching') return <FcePart6GappedText {...shared} />
  if (part.type === 'multiple_matching') return <FcePart7MultiMatch {...shared} />
  return null
}

/* ══════════════════════════════
   FCE 阅读运行器 —— 计时/进度保存/交卷出分/错题查看/只重做错题/刷新恢复
══════════════════════════════ */

export function FceReadingExam({ examId }) {
  const papers = fceExamPapers(examId)
  const parts = useMemo(() => {
    const src = papers?.reading?.parts || {}
    return [1, 2, 3, 4, 5, 6, 7]
      .map(n => (src[String(n)] ? { part: n, ...src[String(n)] } : null))
      .filter(Boolean)
  }, [papers])
  const TOTAL_MINUTES = 75
  const progressKey = `mars_fce_mock_progress_v1:${examId}:reading`

  const [savedProgress] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem(progressKey) || 'null')
      return value && typeof value === 'object' ? value : {}
    } catch { return {} }
  })
  const [partIndex, setPartIndex] = useState(() => Math.min(savedProgress.partIndex || 0, Math.max(0, parts.length - 1)))
  const [allAnswers, setAllAnswers] = useState(() => savedProgress.allAnswers || {})
  const [done, setDone] = useState(() => savedProgress.done === true)
  const [startedAt, setStartedAt] = useState(() => savedProgress.startedAt || Date.now())
  const [pausedAt, setPausedAt] = useState(() => savedProgress.pausedAt || null)
  const [totalPausedMs, setTotalPausedMs] = useState(() => savedProgress.totalPausedMs || 0)
  const [redoOnly, setRedoOnly] = useState(() => savedProgress.redo === true)
  const [timerSeconds, setTimerSeconds] = useState(() => {
    const endpoint = savedProgress.finishedAt || savedProgress.pausedAt || Date.now()
    return Math.max(0, Math.floor((endpoint - (savedProgress.startedAt || Date.now()) - (savedProgress.totalPausedMs || 0)) / 1000))
  })

  useEffect(() => {
    if (done || pausedAt) return undefined
    const timer = window.setInterval(() => setTimerSeconds(Math.max(0, Math.floor((Date.now() - startedAt - totalPausedMs) / 1000))), 1000)
    return () => window.clearInterval(timer)
  }, [done, pausedAt, startedAt, totalPausedMs])

  function saveProgress(next) {
    try { localStorage.setItem(progressKey, JSON.stringify({ startedAt, pausedAt, totalPausedMs, redo: redoOnly, ...next, savedAt: new Date().toISOString() })) } catch { /* storage unavailable */ }
  }

  function toggleTimer() {
    const now = Date.now()
    if (pausedAt) {
      const nextTotal = totalPausedMs + now - pausedAt
      setPausedAt(null)
      setTotalPausedMs(nextTotal)
      try { localStorage.setItem(progressKey, JSON.stringify({ ...savedProgress, partIndex, allAnswers, done, redo: redoOnly, startedAt, pausedAt: null, totalPausedMs: nextTotal })) } catch { /* storage unavailable */ }
    } else {
      setPausedAt(now)
      try { localStorage.setItem(progressKey, JSON.stringify({ ...savedProgress, partIndex, allAnswers, done, redo: redoOnly, startedAt, pausedAt: now, totalPausedMs })) } catch { /* storage unavailable */ }
    }
  }

  function resetReading() {
    try { localStorage.removeItem(progressKey) } catch { /* storage unavailable */ }
    const now = Date.now()
    setStartedAt(now)
    setPausedAt(null)
    setTotalPausedMs(0)
    setTimerSeconds(0)
    setRedoOnly(false)
    setPartIndex(0)
    setAllAnswers({})
    setDone(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 只重做错题：清空错题作答（选择类置 null，填空类置 ''），从第一个含错题的 Part 开始
  function redoMistakes() {
    const nextAnswers = { ...allAnswers }
    let firstWrongPart = null
    parts.forEach((part, index) => {
      const answers = [...(allAnswers[index] || [])]
      let hasWrong = false
      ;(part.items || []).forEach((item, i) => {
        if (!fceAnswerIsCorrect(part.part, item, answers[i])) {
          answers[i] = part.part === 2 || part.part === 3 || part.part === 4 ? '' : null
          hasWrong = true
        }
      })
      nextAnswers[index] = answers
      if (hasWrong && firstWrongPart === null) firstWrongPart = index
    })
    if (firstWrongPart === null) return
    const now = Date.now()
    setAllAnswers(nextAnswers)
    setPartIndex(firstWrongPart)
    setDone(false)
    setRedoOnly(true)
    setStartedAt(now)
    setPausedAt(null)
    setTotalPausedMs(0)
    setTimerSeconds(0)
    try { localStorage.setItem(progressKey, JSON.stringify({ partIndex: firstWrongPart, allAnswers: nextAnswers, done: false, redo: true, startedAt: now, pausedAt: null, totalPausedMs: 0 })) } catch { /* storage unavailable */ }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handlePartDone(answers) {
    const updated = { ...allAnswers, [partIndex]: answers }
    const part = parts[partIndex]
    setAllAnswers(updated)
    // 静默同步：总览进度 + 错题本（覆盖式，重做全对自动移出）
    const answeredCount = (part.items || []).filter((_, i) => {
      const v = answers?.[i]
      return v != null && String(v).trim() !== ''
    }).length
    recordFcePart('reading', examId, part.part, answeredCount, (part.items || []).length)
    setFceWrongBatch('reading', examId, part.part, wrongMapOf(part, answers))
    // 找下一个还有未答题的 Part（重做模式下被清空的题也算未答）
    const nextPartIndex = parts.findIndex((candidate, index) => index > partIndex && (candidate.items || []).some((_, qi) => {
      const v = updated[index]?.[qi]
      return v == null || String(v).trim() === ''
    }))
    if (nextPartIndex === -1) {
      const finishedAt = Date.now()
      const finalPausedMs = totalPausedMs + (pausedAt ? finishedAt - pausedAt : 0)
      setTimerSeconds(Math.max(0, Math.floor((finishedAt - startedAt - finalPausedMs) / 1000)))
      setDone(true)
      saveProgress({ partIndex, allAnswers: updated, done: true, finishedAt, pausedAt: null, totalPausedMs: finalPausedMs })
    } else {
      setPartIndex(nextPartIndex)
      saveProgress({ partIndex: nextPartIndex, allAnswers: updated, done: false })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (done) {
    return (
      <FceReadingFinalResult
        examId={examId}
        parts={parts}
        allAnswers={allAnswers}
        elapsed={timerSeconds}
        onRestart={resetReading}
        onRedoWrong={redoMistakes}
      />
    )
  }

  const part = parts[partIndex]
  if (!part) return null
  const isLast = redoOnly
    ? !parts.some((candidate, index) => index > partIndex && (candidate.items || []).some((_, qi) => {
      const v = allAnswers[index]?.[qi]
      return v == null || String(v).trim() === ''
    }))
    : partIndex + 1 >= parts.length

  return (
    <FceExamShell examId={examId} section="reading" parts={parts} partIndex={partIndex} allAnswers={allAnswers}
      onReset={resetReading} timerSeconds={timerSeconds} timerPaused={Boolean(pausedAt)} onToggleTimer={toggleTimer} totalMinutes={TOTAL_MINUTES}>
      <AnimatePresence mode="wait">
        <motion.div key={partIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          {redoOnly && <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm font-extrabold text-amber-800">错题重做模式 · 本页只显示上次答错的题</div>}
          <FceReadingPartRouter part={part} initialAnswers={allAnswers[partIndex]} redoOnly={redoOnly} isLast={isLast} onDone={handlePartDone} />
        </motion.div>
      </AnimatePresence>
    </FceExamShell>
  )
}

/* ══════════════════════════════
   阅读模考最终结果 —— 总分 / 各 Part 得分 / 错题 review / 重做错题
══════════════════════════════ */

const fceReviewLetter = idx => (idx != null && idx >= 0 && idx < 26) ? String.fromCharCode(65 + idx) : '—'

// 按题型生成 review 展示条目
function fceReviewEntry(part, item, ua) {
  const partId = part.part
  if (partId === 1) {
    return { question: `Gap (${item.q}) · 选择填空`, userAns: ua != null ? fceReviewLetter(ua) : '—', correctAns: `${fceReviewLetter(item.answer)} · ${item.opts?.[item.answer] ?? ''}`, exp: item.explanation }
  }
  if (partId === 2) {
    return { question: `Gap (${item.q}) · 完形填空`, userAns: String(ua ?? '') || '—', correctAns: item.show || (item.answer || [])[0] || '', exp: item.explanation }
  }
  if (partId === 3) {
    return { question: `Gap (${item.q}) · ${item.given || '词形变换'}`, userAns: String(ua ?? '') || '—', correctAns: item.show || (item.answer || [])[0] || '', exp: item.explanation }
  }
  if (partId === 4) {
    return { question: item.stem, keyWord: item.key, userAns: String(ua ?? '') || '—', correctAns: item.show || (item.answer || [])[0] || '', exp: item.explanation }
  }
  if (partId === 5) {
    return { question: item.q_text, userAns: ua != null ? fceReviewLetter(ua) : '—', correctAns: `${fceReviewLetter(item.answer)} · ${item.opts?.[item.answer] ?? ''}`, exp: item.explanation }
  }
  if (partId === 6) {
    return { question: `Gap (${item.q}) · 段落还原`, userAns: String(ua ?? '') || '—', correctAns: item.answer, exp: item.explanation }
  }
  return { question: item.q_text, userAns: String(ua ?? '') || '—', correctAns: item.answer, exp: item.explanation }
}

function FceReadingFinalResult({ examId, parts, allAnswers, elapsed, onRestart, onRedoWrong }) {
  const [showReview, setShowReview] = useState(false)

  const partScores = parts.map((part, pi) => {
    const ans = allAnswers[pi] || []
    const { correct, total, results } = scoreFceReadingPart(part, ans)
    const review = (part.items || []).map((item, i) => ({ n: item.q, ...fceReviewEntry(part, item, ans[i]), isRight: results[i] }))
    return { part, correct, total, review }
  })
  const total = partScores.reduce((s, p) => s + p.total, 0)
  const correct = partScores.reduce((s, p) => s + p.correct, 0)
  const pct = total ? Math.round(correct / total * 100) : 0
  const wrongAnswers = partScores.flatMap(({ part, review }) => review.filter(item => !item.isRight).map(item => ({ part, ...item })))

  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="rounded-[28px] border border-sky-200 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="text-5xl">📖</div>
            <div className="mt-4 text-xs font-extrabold tracking-[.18em] text-sky-700">FCE READING & USE OF ENGLISH RESULT</div>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">阅读模考完成</h1>
            <div className="mt-1 text-sm font-bold text-slate-400">{fceExamTitle(examId)}</div>
            <div className="mt-3 text-sm font-bold text-slate-500">用时 {DURATION_LABEL(elapsed)}</div>
            <div className="mt-6 text-6xl font-black text-sky-700">{correct}<span className="text-2xl text-slate-400"> / {total}</span></div>
            <div className="mt-2 text-sm font-extrabold text-slate-500">阅读客观题正确率 {pct}%</div>
            <div className="mx-auto mt-7 grid max-w-3xl grid-cols-4 gap-2 sm:grid-cols-7">
              {partScores.map(({ part, correct: score, total: partTotal }) => (
                <div key={part.part} className="rounded-xl bg-slate-50 px-2 py-3">
                  <div className="text-xs text-slate-400">Part {part.part}</div>
                  <strong className="mt-1 block text-lg text-slate-800">{score}/{partTotal}</strong>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={() => setShowReview(v => !v)} className="rounded-xl bg-amber-400 px-5 py-3 font-extrabold text-amber-900">{showReview ? '收起错题解析' : `查看错题与答案（${wrongAnswers.length}）`}</button>
              {wrongAnswers.length > 0 && <button type="button" onClick={onRedoWrong} className="rounded-xl border border-sky-600 bg-sky-50 px-5 py-3 font-extrabold text-sky-800">重做错题（{wrongAnswers.length}）</button>}
              <button type="button" onClick={onRestart} className="rounded-xl border border-slate-200 px-5 py-3 font-extrabold text-slate-600">重新作答</button>
              <Link to={`/cambridge/exams/${examId}`} className="rounded-xl bg-sky-600 px-5 py-3 font-extrabold text-white">返回总览</Link>
            </div>
          </div>
          {showReview && (
            <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="text-xs font-extrabold tracking-[.16em] text-sky-700">WRONG ANSWER REVIEW</div>
              <h2 className="mt-1 text-2xl font-extrabold text-slate-950">错题与正确答案</h2>
              <p className="mt-2 text-sm text-slate-500">共 {wrongAnswers.length} 道错题，按照 Part 和题号排列。</p>
              <div className="mt-6 space-y-4">
                {wrongAnswers.map((item, index) => (
                  <article key={`${item.part.part}-${item.n}-${index}`} className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-extrabold text-rose-700">Part {item.part.part} · 第 {item.n} 题</span>
                      <strong className="text-base text-slate-900">{item.question}</strong>
                      {item.keyWord && <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-extrabold text-amber-800">关键词 {item.keyWord}</span>}
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-rose-200 bg-white p-4"><div className="text-xs font-bold text-slate-400">你的答案</div><strong className="mt-1 block break-words text-rose-700">{item.userAns}</strong></div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"><div className="text-xs font-bold text-emerald-600">正确答案</div><strong className="mt-1 block break-words text-emerald-800">{item.correctAns}</strong></div>
                    </div>
                    {item.exp && <p className="mt-3 text-xs leading-5 text-slate-500">解析：{item.exp}</p>}
                  </article>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </main>
    </CambridgeLayout>
  )
}

/* ══════════════════════════════
   FCE 听力模考 —— 音频驱动、不计时、不持久化（对齐 PET）；交卷统一出分
══════════════════════════════ */

const FCE_SPEEDS = [0.75, 1.0, 1.25, 1.5]

// 音频播放器（sky 主题，含倍速）
function FceAudioPlayer({ src, compact }) {
  const [speed, setSpeed] = useState(1)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const a = ref.current
    if (!a) return
    a.playbackRate = speed
  }, [speed])

  useEffect(() => {
    const a = ref.current
    if (!a) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onTime = () => setProgress(a.currentTime / (a.duration || 1))
    a.addEventListener('play', onPlay); a.addEventListener('pause', onPause); a.addEventListener('timeupdate', onTime)
    return () => { a.removeEventListener('play', onPlay); a.removeEventListener('pause', onPause); a.removeEventListener('timeupdate', onTime) }
  }, [])

  function toggle() {
    const a = ref.current
    if (!a) return
    if (playing) { a.pause() } else { a.play().catch(() => {}) }
  }

  return (
    <div className={`rounded-2xl border border-sky-200 bg-sky-50 ${compact ? 'p-2.5' : 'p-4'}`}>
      <audio ref={ref} src={src} preload="metadata" />
      <div className="flex items-center gap-3">
        <button type="button" onClick={toggle}
          className={`grid shrink-0 place-items-center rounded-full bg-sky-600 text-white shadow-sm hover:bg-sky-700 ${compact ? 'h-9 w-9 text-sm' : 'h-12 w-12'}`}>
          {playing ? '⏸' : '▶'}
        </button>
        <div className="min-w-0 flex-1">
          <div className="h-1.5 overflow-hidden rounded-full bg-sky-100">
            <div className="h-full bg-sky-500" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
        <div className="flex shrink-0 gap-1">
          {FCE_SPEEDS.map(s => (
            <button key={s} type="button" onClick={() => setSpeed(s)}
              className={`rounded-lg px-2 py-1 text-xs font-bold ${speed === s ? 'bg-sky-600 text-white' : 'bg-white text-sky-700 hover:bg-sky-100'}`}>
              {s}×
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* 听力 Part 1 · 情景选择（mcq_situation；官方真题整段 Part 一条音频，全真模拟每题独立音频） */

function FceListenSituation({ part, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const [answers, setAnswers] = useState(() => Array(items.length).fill(null))

  function pick(i, idx) { setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }

  return (
    <div>
      <PartHeader part={part} />
      {part.audio && <FceAudioPlayer src={part.audio} />}
      <div className="mt-4 space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start gap-2">
              <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{item.q ?? i + 1}</span>
              {item.scenario && <span className="text-xs italic text-slate-500">{item.scenario}</span>}
            </div>
            {!part.audio && item.audio && <div className="mt-2"><FceAudioPlayer src={item.audio} compact /></div>}
            <p className="mt-2 text-sm font-bold text-slate-800">{item.q}</p>
            <div className="mt-2 space-y-1.5">
              {(item.opts || []).map((opt, oi) => {
                const selected = answers[i] === oi
                return (
                  <button key={oi} type="button" onClick={() => pick(i, oi)}
                    className={`flex w-full items-center gap-2 rounded-lg border p-2.5 text-left text-sm transition ${selected ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-slate-200 text-slate-700 hover:border-sky-300'}`}>
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-extrabold ${selected ? 'border-sky-500 bg-sky-500 text-white' : 'border-current'}`}>
                      {ABC[oi]}
                    </span>
                    <span className="leading-5">{opt}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <PartSubmitBar visibleIndexes={items.map((_, i) => i)} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* 听力 Part 2 · 填空（blanks，1–3 词） */

function FceListenBlanks({ part, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const [answers, setAnswers] = useState(() => Array(items.length).fill(''))

  function set(i, v) { setAnswers(a => { const n = [...a]; n[i] = v; return n }) }

  return (
    <div>
      <PartHeader part={part} />
      <FceAudioPlayer src={part.audio} />
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-3 focus-within:border-sky-400">
            <div className="flex items-center gap-2 text-xs font-extrabold">
              <span className="rounded bg-sky-500 px-2 py-0.5 text-white">Q{item.q ?? i + 1}</span>
              <span className="min-w-0 flex-1 text-slate-700">{item.q}</span>
            </div>
            <input type="text" value={answers[i] ?? ''} onChange={e => set(i, e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-semibold focus:border-sky-400 focus:outline-none"
              placeholder="填入听到的词…" />
          </div>
        ))}
      </div>
      <PartSubmitBar visibleIndexes={items.map((_, i) => i)} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* 听力 Part 3 · 匹配（matching，说话者 → A–H，含多余选项） */

function FceListenMatch({ part, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const options = useMemo(() => part.options || [], [part.options])
  const [answers, setAnswers] = useState(() => Array(items.length).fill(null))

  function pick(i, label) { setAnswers(a => { const n = [...a]; n[i] = label; return n }) }

  return (
    <div>
      <PartHeader part={part} />
      <FceAudioPlayer src={part.audio} />
      <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50/60 p-3">
        <div className="mb-1 text-xs font-extrabold tracking-wide text-sky-700">选项（含多余选项）</div>
        <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 sm:grid-cols-2">
          {options.map(o => (
            <li key={o.label}><span className="font-extrabold text-sky-700">{o.label}.</span> {o.text}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold text-slate-800">Speaker {i + 1}{item.speaker ? ` — ${item.speaker}` : ''}</span>
              <div className="flex flex-wrap gap-1">
                {options.map(o => {
                  const selected = answers[i] === o.label
                  return (
                    <button key={o.label} type="button" onClick={() => pick(i, o.label)}
                      className={`h-8 w-8 rounded-lg text-xs font-extrabold transition ${selected ? 'bg-sky-600 text-white' : 'border border-slate-200 text-slate-500 hover:border-sky-300'}`}>
                      {o.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PartSubmitBar visibleIndexes={items.map((_, i) => i)} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

/* 听力 Part 4 · 选择（mcq，7 题 3 选 1） */

function FceListenMcq({ part, isLast, onDone }) {
  const items = useMemo(() => part.items || [], [part.items])
  const [answers, setAnswers] = useState(() => Array(items.length).fill(null))

  function pick(i, idx) { setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }

  return (
    <div>
      <PartHeader part={part} />
      <FceAudioPlayer src={part.audio} />
      <div className="mt-4 space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start gap-2">
              <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{item.q ?? i + 1}</span>
              <p className="min-w-0 flex-1 text-sm font-bold leading-6 text-slate-800">{item.q}</p>
            </div>
            <div className="mt-2 space-y-1.5">
              {(item.opts || []).map((opt, oi) => {
                const selected = answers[i] === oi
                return (
                  <button key={oi} type="button" onClick={() => pick(i, oi)}
                    className={`flex w-full items-center gap-2 rounded-lg border p-2.5 text-left text-sm transition ${selected ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-slate-200 text-slate-700 hover:border-sky-300'}`}>
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-extrabold ${selected ? 'border-sky-500 bg-sky-500 text-white' : 'border-current'}`}>
                      {ABC[oi]}
                    </span>
                    <span className="leading-5">{opt}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <PartSubmitBar visibleIndexes={items.map((_, i) => i)} answers={answers} isLast={isLast} onDone={() => onDone(answers)} />
    </div>
  )
}

function FceListeningPartRouter({ part, isLast, onDone }) {
  if (part.type === 'mcq_situation') return <FceListenSituation part={part} isLast={isLast} onDone={onDone} />
  if (part.type === 'blanks') return <FceListenBlanks part={part} isLast={isLast} onDone={onDone} />
  if (part.type === 'matching') return <FceListenMatch part={part} isLast={isLast} onDone={onDone} />
  if (part.type === 'mcq') return <FceListenMcq part={part} isLast={isLast} onDone={onDone} />
  return null
}

export function FceListeningExam({ examId }) {
  const papers = fceExamPapers(examId)
  const parts = useMemo(() => {
    const src = papers?.listening?.parts || {}
    return [1, 2, 3, 4].map(n => (src[String(n)] ? { part: n, ...src[String(n)] } : null)).filter(Boolean)
  }, [papers])
  const [partIndex, setPartIndex] = useState(0)
  const [allAnswers, setAllAnswers] = useState({})
  const [done, setDone] = useState(false)
  const part = parts[partIndex]

  function handlePartDone(answers) {
    const updated = { ...allAnswers, [partIndex]: answers }
    setAllAnswers(updated)
    // 静默同步：总览进度 + 错题本
    const answeredCount = (part.items || []).filter((_, i) => {
      const v = answers?.[i]
      return v != null && String(v).trim() !== ''
    }).length
    recordFcePart('listening', examId, part.part, answeredCount, (part.items || []).length)
    setFceWrongBatch('listening', examId, part.part, listeningWrongMapOf(part, answers))
    if (partIndex + 1 >= parts.length) {
      setDone(true)
    } else {
      setPartIndex(i => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function restart() {
    setPartIndex(0)
    setAllAnswers({})
    setDone(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (done) return <FceListeningFinalResult examId={examId} parts={parts} allAnswers={allAnswers} onRestart={restart} />

  const isLast = partIndex + 1 >= parts.length
  return (
    <FceExamShell examId={examId} section="listening" parts={parts} partIndex={partIndex} allAnswers={allAnswers}>
      <AnimatePresence mode="wait">
        <motion.div key={partIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <FceListeningPartRouter part={part} isLast={isLast} onDone={handlePartDone} />
        </motion.div>
      </AnimatePresence>
    </FceExamShell>
  )
}

/* 听力模考最终结果 */

function FceListeningFinalResult({ examId, parts, allAnswers, onRestart }) {
  const [showReview, setShowReview] = useState(false)

  const partScores = parts.map((part, pi) => {
    const ans = allAnswers[pi] || []
    const { correct, total, results } = scoreFceListeningPart(part, ans)
    const review = (part.items || []).map((item, i) => {
      const ua = ans[i]
      const isRight = results[i]
      if (part.type === 'mcq_situation' || part.type === 'mcq') {
        return {
          n: item.q ?? i + 1,
          question: item.scenario ? `${item.scenario} — ${item.q}` : item.q,
          userAns: ua != null && ua < 26 ? ABC[ua] : '—',
          correctAns: `${ABC[item.answer]} · ${item.opts?.[item.answer] ?? ''}`,
          isRight,
          exp: item.explanation,
        }
      }
      if (part.type === 'blanks') {
        return {
          n: item.q ?? i + 1,
          question: item.q,
          userAns: String(ua ?? '') || '—',
          correctAns: item.show || (item.answer || [])[0] || '',
          isRight,
          exp: item.explanation,
        }
      }
      return {
        n: i + 1,
        question: `Speaker ${i + 1}${item.speaker ? ` — ${item.speaker}` : ''}`,
        userAns: String(ua ?? '') || '—',
        correctAns: item.answer,
        isRight,
        exp: item.explanation,
      }
    })
    return { part, correct, total, review }
  })

  const total = partScores.reduce((s, p) => s + p.total, 0)
  const correct = partScores.reduce((s, p) => s + p.correct, 0)
  const pct = total ? Math.round(correct / total * 100) : 0
  const wrongAnswers = partScores.flatMap(({ part, review }) => review.filter(item => !item.isRight).map(item => ({ part, ...item })))

  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="rounded-[28px] border border-sky-200 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="text-5xl">{pct >= 90 ? '🏆' : pct >= 75 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
            <div className="mt-4 text-xs font-extrabold tracking-[.18em] text-sky-700">FCE LISTENING RESULT</div>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">听力模考完成</h1>
            <div className="mt-1 text-sm font-bold text-slate-400">{fceExamTitle(examId)}</div>
            <div className="mt-6 text-6xl font-black text-sky-700">{correct}<span className="text-2xl text-slate-400"> / {total}</span></div>
            <div className="mt-2 text-sm font-extrabold text-slate-500">正确率 {pct}%</div>
            <div className="mt-3 inline-block rounded-xl bg-slate-50 px-4 py-2 text-xs text-slate-400">FCE 听力满分 30 分 · 通过线约 18 分（近 60%）</div>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={() => setShowReview(v => !v)} className="rounded-xl bg-amber-400 px-5 py-3 font-extrabold text-amber-900">{showReview ? '收起错题解析' : `查看错题与答案（${wrongAnswers.length}）`}</button>
              <button type="button" onClick={onRestart} className="rounded-xl border border-slate-200 px-5 py-3 font-extrabold text-slate-600">再听一遍</button>
              <Link to={`/cambridge/exams/${examId}`} className="rounded-xl bg-sky-600 px-5 py-3 font-extrabold text-white">返回总览</Link>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">各 Part 得分</div>
            <div className="space-y-2.5">
              {partScores.map(({ part, correct: c, total: t }, i) => {
                const pp = t > 0 ? Math.round(c / t * 100) : 0
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-14 shrink-0 text-xs font-bold text-slate-500">Part {part.part}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${pp}%` }} transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={`h-full rounded-full ${pp >= 80 ? 'bg-emerald-400' : pp >= 60 ? 'bg-amber-400' : 'bg-rose-400'}`} />
                    </div>
                    <span className="w-10 shrink-0 text-right text-xs font-bold text-slate-600">{c}/{t}</span>
                  </div>
                )
              })}
            </div>
          </div>
          {showReview && (
            <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="text-xs font-extrabold tracking-[.16em] text-sky-700">WRONG ANSWER REVIEW</div>
              <h2 className="mt-1 text-2xl font-extrabold text-slate-950">错题与正确答案</h2>
              <p className="mt-2 text-sm text-slate-500">共 {wrongAnswers.length} 道错题，已同步到错题本。</p>
              <div className="mt-6 space-y-4">
                {wrongAnswers.map((item, index) => (
                  <article key={`${item.part.part}-${item.n}-${index}`} className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-extrabold text-rose-700">Part {item.part.part} · 第 {item.n} 题</span>
                      <strong className="text-base text-slate-900">{item.question}</strong>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-rose-200 bg-white p-4"><div className="text-xs font-bold text-slate-400">你的答案</div><strong className="mt-1 block break-words text-rose-700">{item.userAns}</strong></div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"><div className="text-xs font-bold text-emerald-600">正确答案</div><strong className="mt-1 block break-words text-emerald-800">{item.correctAns}</strong></div>
                    </div>
                    {item.exp && <p className="mt-3 text-xs leading-5 text-slate-500">解析：{item.exp}</p>}
                  </article>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </main>
    </CambridgeLayout>
  )
}

/* ══════════════════════════════
   FCE 写作模考 —— Part 1 议论文 + Part 2 三/四选一，80 分钟计时；
   无自动判分，草稿 key 与专项练习页共用（fce-writing-draft:{metaId}:p1 / :p2q{q}）
══════════════════════════════ */

const FCE_GENRE_LABEL = {
  article: '文章 Article', review: '评论 Review', story: '故事 Story',
  letter: '书信 Letter', email: '邮件 Email', essay: '作文 Essay', report: '报告 Report',
}

function fceCountWords(text) {
  const t = String(text || '').trim()
  return t ? t.split(/\s+/).filter(Boolean).length : 0
}

// 写作题面卡（字段读法与专项页 TaskBrief 一致）
function FceTaskBrief({ task, partType }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="rounded-lg bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">Q{task.q ?? 1}</span>
        {task.genre && <span className="rounded-lg border border-amber-300 bg-amber-100 px-2 py-0.5 text-xs font-extrabold text-amber-800">{FCE_GENRE_LABEL[task.genre]}</span>}
      </div>
      <p className="mt-3 text-sm text-slate-500">{task.context}</p>
      <div className="mt-3 rounded-xl border-2 border-slate-300 bg-slate-50 p-4">
        {task.boxTitle && <div className="mb-1 text-center text-base font-extrabold tracking-wide text-slate-800">{task.boxTitle}</div>}
        {task.boxHeading && <div className="mb-2 text-center text-sm font-extrabold text-sky-600">{task.boxHeading}</div>}
        <div className="whitespace-pre-line text-center text-sm leading-6 text-slate-700">{task.prompt}</div>
        {task.begin && <div className="mt-3 rounded-lg border border-sky-200 bg-white p-3 text-sm font-bold italic leading-6 text-sky-800">首句（必须以此开头）：{task.begin}</div>}
        {task.mustInclude && (
          <ul className="mt-2 list-disc pl-6 text-sm text-slate-700">
            {task.mustInclude.map(item => <li key={item}>{item}</li>)}
          </ul>
        )}
      </div>
      {partType === 'essay' && task.notes && (
        <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50/60 p-4">
          <div className="text-center text-base font-extrabold leading-7 text-slate-800">{task.prompt}</div>
          <div className="mt-2 text-center text-xs font-extrabold tracking-[.15em] text-sky-500">NOTES · 写作要点</div>
          <ol className="mt-1 list-decimal pl-6 text-sm leading-6 text-slate-700">
            {task.notes.map(n => <li key={n}>{n}</li>)}
          </ol>
        </div>
      )}
      {task.taskLine && <p className="mt-3 text-sm font-bold text-slate-600">{task.taskLine}</p>}
    </div>
  )
}

// 写作编辑器：草稿存共享 key（与专项页互通），保存时同步总览进度
function FceWritingEditor({ storageKey, examId, partId, modelAnswer, genreLabel, isLast, onDone }) {
  const [text, setText] = useState(() => {
    try { return localStorage.getItem(storageKey) || '' } catch { return '' }
  })
  const [savedAt, setSavedAt] = useState(null)
  const [showModel, setShowModel] = useState(false)
  const words = fceCountWords(text)
  const inRange = words >= 140 && words <= 190

  function persist() {
    try { localStorage.setItem(storageKey, text) } catch { /* storage unavailable */ }
    setSavedAt(new Date())
    recordFcePart('writing', examId, partId, 1, 1)
  }

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
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
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button type="button" onClick={persist} className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-600">
            保存草稿
          </button>
          {savedAt && <span className="text-xs font-bold text-emerald-600">✓ 已保存到本机 {savedAt.toLocaleTimeString()}</span>}
          <button type="button" disabled={words === 0}
            onClick={() => { persist(); onDone(text) }}
            className="ml-auto rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-700 disabled:bg-slate-200 disabled:text-slate-400">
            {isLast ? '完成写作模考 →' : '完成本 Part →'}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <strong className="text-sm text-slate-700">官方范文（Model answer）</strong>
          {modelAnswer && (
            <button type="button" onClick={() => setShowModel(s => !s)}
              className="rounded-xl border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-extrabold text-sky-600 transition hover:border-sky-400">
              {showModel ? '收起范文' : '查看范文'}
            </button>
          )}
        </div>
        {!modelAnswer ? (
          <div className="flex h-[46vh] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 text-center">
            <span className="text-3xl">📕</span>
            <p className="max-w-60 text-xs leading-5 text-slate-400">本套官方真题未附范文（答案区仅含评分量表）。建议写完保存草稿后，与老师或语伴对照批改。</p>
          </div>
        ) : showModel ? (
          <div className="h-[46vh] overflow-y-auto whitespace-pre-line rounded-xl border border-sky-100 bg-sky-50/50 p-4 text-sm leading-7 text-slate-700">{modelAnswer}</div>
        ) : (
          <div className="flex h-[46vh] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 text-center">
            <span className="text-3xl">📝</span>
            <p className="max-w-60 text-xs leading-5 text-slate-400">模考模式下建议先自己写完并保存草稿，交卷后再对照官方范文。范文逐字转录自答案页。</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function FceWritingExam({ examId }) {
  const papers = fceExamPapers(examId)
  const writing = useMemo(() => papers?.writing || null, [papers])
  const TOTAL_MINUTES = 80
  const [partIndex, setPartIndex] = useState(0)
  const [p2Q, setP2Q] = useState(() => writing?.parts?.[2]?.tasks?.[0]?.q ?? 2)
  const [allTexts, setAllTexts] = useState({})
  const [done, setDone] = useState(false)
  const [startedAt] = useState(() => Date.now())
  const [pausedAt, setPausedAt] = useState(null)
  const [totalPausedMs, setTotalPausedMs] = useState(0)
  const [timerSeconds, setTimerSeconds] = useState(0)

  useEffect(() => {
    if (done || pausedAt) return undefined
    const timer = window.setInterval(() => setTimerSeconds(Math.max(0, Math.floor((Date.now() - startedAt - totalPausedMs) / 1000))), 1000)
    return () => window.clearInterval(timer)
  }, [done, pausedAt, startedAt, totalPausedMs])

  function toggleTimer() {
    if (pausedAt) {
      setTotalPausedMs(ms => ms + Date.now() - pausedAt)
      setPausedAt(null)
    } else {
      setPausedAt(Date.now())
    }
  }

  if (!writing) return null
  const part1 = writing.parts?.[1] || null
  const part2 = writing.parts?.[2] || null
  const shellParts = [part1 && { part: 1 }, part2 && { part: 2 }].filter(Boolean)
  const p2Task = part2?.tasks?.find(t => t.q === p2Q) || part2?.tasks?.[0] || null

  function handleDone(partNo, text) {
    const slot = partNo === 1 ? 0 : 1
    const updated = { ...allTexts, [slot]: text }
    setAllTexts(updated)
    if (partNo === 1 && part2 && (part2.tasks || []).length) {
      setPartIndex(1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setDone(true)
    }
  }

  function backToEdit() {
    setDone(false)
    setPartIndex(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (done) {
    return (
      <FceWritingFinalResult
        examId={examId}
        part1={part1}
        p2Task={p2Task}
        texts={allTexts}
        elapsed={timerSeconds}
        onBackToEdit={backToEdit}
      />
    )
  }

  return (
    <FceExamShell examId={examId} section="writing" parts={shellParts} partIndex={partIndex} allAnswers={allTexts}
      timerSeconds={timerSeconds} timerPaused={Boolean(pausedAt)} onToggleTimer={toggleTimer} totalMinutes={TOTAL_MINUTES}>
      <AnimatePresence mode="wait">
        <motion.div key={partIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          {partIndex === 0 && part1 && (
            <div>
              <PartHeader part={part1} />
              <FceTaskBrief task={part1} partType="essay" />
              <FceWritingEditor
                key={`${writing.meta.id}:p1`}
                storageKey={`fce-writing-draft:${writing.meta.id}:p1`}
                examId={examId}
                partId={1}
                modelAnswer={part1.modelAnswer}
                genreLabel="议论文"
                isLast={!part2 || !(part2.tasks || []).length}
                onDone={text => handleDone(1, text)}
              />
            </div>
          )}
          {partIndex === 1 && part2 && (
            <div>
              <PartHeader part={part2} />
              {!(part2.tasks || []).length ? (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800">
                  ⚠️ 本套 Part 2 题面未录入{part2.note ? `（${part2.note}）` : ''}。请返回 Part 1 完成写作。
                </div>
              ) : (
                <>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-extrabold tracking-[.15em] text-slate-400">选做一题：</span>
                    {part2.tasks.map(t => (
                      <button key={t.q} type="button" onClick={() => setP2Q(t.q)}
                        className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${p2Q === t.q ? 'border-sky-500 bg-sky-500 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-600'}`}>
                        Q{t.q} · {FCE_GENRE_LABEL[t.genre]}
                      </button>
                    ))}
                  </div>
                  {p2Task && (
                    <div className="space-y-5">
                      <FceTaskBrief task={p2Task} partType={part2.type} />
                      <FceWritingEditor
                        key={`${writing.meta.id}:p2q${p2Task.q}`}
                        storageKey={`fce-writing-draft:${writing.meta.id}:p2q${p2Task.q}`}
                        examId={examId}
                        partId={2}
                        modelAnswer={p2Task.modelAnswer}
                        genreLabel={FCE_GENRE_LABEL[p2Task.genre] || '写作'}
                        isLast
                        onDone={text => handleDone(2, text)}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </FceExamShell>
  )
}

/* 写作模考结果页 —— 字数统计 + 草稿/范文对照 + B2 自评提示（无自动判分） */

function FceWritingDraftCard({ title, text, modelAnswer, meta }) {
  const [showModel, setShowModel] = useState(false)
  const [showMine, setShowMine] = useState(true)
  const words = fceCountWords(text)
  const inRange = words >= 140 && words <= 190
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <strong className="text-sm font-extrabold text-slate-800">{title}</strong>
        <span className={`text-xs font-bold ${inRange ? 'text-emerald-600' : 'text-amber-600'}`}>{words} 词 · 目标 140–190</span>
      </div>
      {meta && <div className="mt-1 text-xs text-slate-400">{meta}</div>}
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => setShowMine(v => !v)} className="rounded-xl border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-extrabold text-sky-600">{showMine ? '收起我的草稿' : '查看我的草稿'}</button>
        {modelAnswer && (
          <button type="button" onClick={() => setShowModel(v => !v)} className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-extrabold text-slate-600">{showModel ? '收起官方范文' : '对照官方范文'}</button>
        )}
      </div>
      {showMine && (
        <div className="mt-3 max-h-80 overflow-y-auto whitespace-pre-line rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          {text || '（未保存草稿）'}
        </div>
      )}
      {showModel && modelAnswer && (
        <div className="mt-3 max-h-80 overflow-y-auto whitespace-pre-line rounded-xl border border-sky-100 bg-sky-50/50 p-4 text-sm leading-7 text-slate-700">{modelAnswer}</div>
      )}
    </div>
  )
}

function FceWritingFinalResult({ examId, part1, p2Task, texts, elapsed, onBackToEdit }) {
  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <div className="rounded-[28px] border border-sky-200 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="text-5xl">✍️</div>
            <div className="mt-4 text-xs font-extrabold tracking-[.18em] text-sky-700">FCE WRITING RESULT</div>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">写作模考完成</h1>
            <div className="mt-1 text-sm font-bold text-slate-400">{fceExamTitle(examId)}</div>
            <div className="mt-3 text-sm font-bold text-slate-500">用时 {DURATION_LABEL(elapsed)}</div>
            <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-slate-400">
              FCE 写作为人工评分（内容、交际、组织、语言四项量表，每项 0–5 分）。请对照官方范文与下方 B2 自评要点批改草稿。
            </p>
          </div>

          <FceWritingDraftCard title="Part 1 · 必答议论文" text={texts[0]} modelAnswer={part1?.modelAnswer} meta={part1?.prompt} />
          {p2Task && (
            <FceWritingDraftCard
              title={`Part 2 · Q${p2Task.q} ${FCE_GENRE_LABEL[p2Task.genre] || ''}`}
              text={texts[1]}
              modelAnswer={p2Task.modelAnswer}
              meta={p2Task.prompt}
            />
          )}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-extrabold text-slate-800">B2 自评要点</div>
            <ul className="mt-2 list-disc space-y-1.5 pl-6 text-sm leading-6 text-slate-600">
              <li><strong>内容 Content</strong>：是否覆盖题目全部要点（含自己的观点/例子）？</li>
              <li><strong>交际 Communicative</strong>：文体是否匹配（文章/书信/故事的语气与开头结尾）？</li>
              <li><strong>组织 Organisation</strong>：是否有清晰段落（开头—展开—结尾）与衔接词？</li>
              <li><strong>语言 Language</strong>：词汇与语法是否有 B2 水平的变化？有无影响理解的错误？</li>
            </ul>
          </div>

          <div className="flex gap-3 pb-4">
            <button type="button" onClick={onBackToEdit} className="flex-1 rounded-2xl border border-slate-200 bg-white py-3.5 text-sm font-bold text-slate-600 transition hover:border-slate-300">返回修改草稿</button>
            <Link to={`/cambridge/exams/${examId}`} className="flex-1 rounded-2xl bg-sky-600 py-3.5 text-center text-sm font-bold text-white transition hover:bg-sky-700">返回总览 →</Link>
          </div>
        </motion.div>
      </main>
    </CambridgeLayout>
  )
}

/* ══════════════════════════════
   口语模考（Paper 4）—— 4 Part 自由切换 + TTS 朗读 + 练习计时器。
   官方无标准答案（书内明确说明），故不出分、不进错题本、不记录进度；练习模式。
══════════════════════════════ */

const FCE_SPEAKING_TABS = [
  { id: 1, label: 'Part 1 · 面试问答' },
  { id: 2, label: 'Part 2 · 图片长描述' },
  { id: 3, label: 'Part 3 · 合作讨论' },
  { id: 4, label: 'Part 4 · 深入讨论' },
]

// TTS 朗读按钮（英式发音；朗读中高亮，再点停止）
function FceSpeakButton({ id, text, tts }) {
  const active = tts.speaking === id
  return (
    <button
      type="button"
      onClick={() => tts.speak(id, text)}
      className={`inline-flex shrink-0 items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-extrabold transition ${
        active ? 'border-sky-500 bg-sky-500 text-white' : 'border-sky-200 bg-sky-50 text-sky-700 hover:border-sky-400'
      }`}
    >
      {active ? '🔊 朗读中…' : '🔈 朗读'}
    </button>
  )
}

// 练习倒计时（可暂停/重置，到点提示；照专项页 Countdown）
function FceCountdown({ seconds, label }) {
  const [left, setLeft] = useState(seconds)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!running) return undefined
    timerRef.current = window.setInterval(() => {
      setLeft(prev => {
        if (prev <= 1) {
          window.clearInterval(timerRef.current)
          setRunning(false)
          setFinished(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => window.clearInterval(timerRef.current)
  }, [running])

  function reset() {
    window.clearInterval(timerRef.current)
    setRunning(false)
    setFinished(false)
    setLeft(seconds)
  }

  return (
    <div className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 ${finished ? 'border-emerald-300 bg-emerald-50' : left <= 10 && left > 0 ? 'border-rose-300 bg-rose-50' : 'border-sky-200 bg-sky-50'}`}>
      <span className="text-xs font-extrabold text-slate-600">⏱ {label}</span>
      <span className={`font-mono text-lg font-extrabold tabular-nums ${finished ? 'text-emerald-600' : left <= 10 && left > 0 ? 'text-rose-600' : 'text-sky-700'}`}>
        {DURATION_LABEL(left)}
      </span>
      {finished && <span className="text-xs font-extrabold text-emerald-600">时间到！</span>}
      <button type="button" onClick={() => setRunning(r => !r)} disabled={finished}
        className="rounded-lg bg-sky-500 px-2.5 py-1 text-xs font-extrabold text-white transition hover:bg-sky-600 disabled:opacity-50">
        {running ? '暂停' : left < seconds && left > 0 ? '继续' : '开始'}
      </button>
      <button type="button" onClick={reset}
        className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-extrabold text-slate-500 transition hover:border-sky-300">
        重置
      </button>
    </div>
  )
}

// Part 1 · 面试问答：说明卡 + 官方备选题库（各版本数据形状不同，均防御式渲染）
function FceSpeakingP1({ part, tts }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {part.note && <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">ℹ️ {part.note}</div>}
      <p className="mt-4 text-sm leading-6 text-slate-600">{part.instruction}</p>
      {!!part.categories?.length && (
        <div className="mt-4 space-y-2">
          <div className="text-xs font-extrabold tracking-wide text-sky-700">官方备选题库（考官酌情选用）</div>
          {part.categories.map(c => (
            <div key={c.name} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-extrabold text-slate-500">{c.name}</div>
                <FceSpeakButton id={`cat-${c.name}`} text={c.questions.join(' ')} tts={tts} />
              </div>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-5 text-slate-600">
                {c.questions.map(q => <li key={q}>{q}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
      <ul className="mt-4 list-disc space-y-1 pl-5 text-xs leading-5 text-slate-600">
        <li>与同伴互相提问：家乡、学校/工作、爱好、周末安排、未来计划等</li>
        <li>每题回答 2–3 句：直接回答 + 一个理由 + 一个例子或细节（B2 层级要求）</li>
        <li>不要背稿；听不清可以请考官重复：Could you repeat that, please?</li>
      </ul>
      <div className="mt-4"><FceCountdown seconds={120} label="Part 1 时长约 2 分钟" /></div>
    </div>
  )
}

// Part 2 · Long turn：Candidate A / B 两卡（图片为版权扫描件，只给书内页码）
function FceSpeakingP2({ part, tts }) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs leading-5 text-sky-800">
        💡 每位考生就一组图片独白约 1 分钟（含 15 秒构思时间）。图片为版权扫描件，请翻书对照（页码已标注）。作答时描述要点 + 回答问题 + 给出理由。
      </div>
      {(part.tasks || []).map(t => (
        <div key={t.task} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-lg px-2.5 py-1 text-xs font-extrabold text-white ${t.candidate === 'A' ? 'bg-sky-500' : 'bg-indigo-400'}`}>
              Candidate {t.candidate}
            </span>
            <span className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-extrabold text-slate-500">Task {t.task}</span>
            <span className="text-xs text-slate-400">图片：{t.imagesPage || '见书末彩色插页'}（共 {t.images} 张）</span>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <p className="flex-1 text-lg font-extrabold leading-7 text-slate-900">{t.q}</p>
            <FceSpeakButton id={`task-${t.task}`} text={t.q} tts={tts} />
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs leading-5 text-slate-500">
            <li>先花 15 秒看图构思：每张图找一个切入角度</li>
            <li>用比较结构串联两图（Both pictures show… / While the first…, the second…）</li>
            <li>结尾回扣问题，给出个人观点</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <FceCountdown seconds={15} label={`Task ${t.task} 构思`} />
            <FceCountdown seconds={60} label={`Task ${t.task} 独白`} />
          </div>
        </div>
      ))}
    </div>
  )
}

// Part 3 · Collaborative：脚本（可朗读）+ 思维导图 + 讨论/决定双阶段
function FceSpeakingP3({ part, tts }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-sky-500 px-2.5 py-1 text-xs font-extrabold text-white">话题</span>
          <strong className="text-lg font-extrabold text-slate-900">{part.topic}</strong>
          <span className="text-xs text-slate-400">{part.timing}</span>
        </div>
        <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs font-extrabold tracking-wide text-slate-500">INTERLOCUTOR 脚本（原文）</div>
            <FceSpeakButton id="p3-script" text={part.script} tts={tts} />
          </div>
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
            本套真题扫描件缺该页任务卡，思维导图暂缺，待补扫描后补充。请对照纸质书完成本 Part 的讨论。
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
          <FceCountdown seconds={120} label="讨论阶段" />
          <FceCountdown seconds={60} label="决定阶段" />
        </div>
      </div>
    </div>
  )
}

// Part 4 · Discussion：逐题讨论（可朗读 + 标记已练）+ 考官追问提示框
function FceSpeakingP4({ part, tts }) {
  const [spoken, setSpoken] = useState({})
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs leading-5 text-sky-800">
        💡 考官按顺序逐题提问（{part.timing}）。回答策略：直接回答 + 理由 + 例子/对比。考官可随时追问提示框内的问题。
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-xs font-extrabold tracking-wide text-slate-500">{part.leadIn}</div>
        <ol className="mt-3 space-y-2">
          {(part.questions || []).map((q, i) => (
            <li key={i} className={`flex flex-wrap items-start gap-3 rounded-xl border p-3 transition ${spoken[i] ? 'border-emerald-300 bg-emerald-50/60' : 'border-slate-200'}`}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs font-extrabold text-white">
                {i + 1}
              </span>
              <span className="min-w-40 flex-1 text-sm font-bold leading-6 text-slate-800">{q}</span>
              <FceSpeakButton id={`p4-${i}`} text={q} tts={tts} />
              <button type="button" onClick={() => setSpoken(s => ({ ...s, [i]: !s[i] }))}
                className={`shrink-0 rounded-lg border px-2.5 py-1 text-xs font-extrabold transition ${
                  spoken[i] ? 'border-emerald-300 bg-white text-emerald-600' : 'border-slate-200 bg-white text-slate-400 hover:border-emerald-300 hover:text-emerald-600'
                }`}>
                {spoken[i] ? '已练 ✓' : '标记已练'}
              </button>
            </li>
          ))}
        </ol>
        <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50 p-3">
          <div className="text-xs font-extrabold tracking-wide text-violet-700">考官追问提示框</div>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {(part.prompts || []).map(p => (
              <span key={p} className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-violet-800 shadow-sm">“{p}”</span>
            ))}
          </div>
        </div>
        <p className="mt-3 text-center text-xs italic text-slate-400">{part.closing}</p>
        <div className="mt-3 flex justify-center">
          <FceCountdown seconds={240} label="Part 4 总时长" />
        </div>
      </div>
    </div>
  )
}

export function FceSpeakingExam({ examId }) {
  const papers = fceExamPapers(examId)
  const speaking = useMemo(() => papers?.speaking || null, [papers])
  const [partId, setPartId] = useState(1)
  const tts = useTTS()

  // 卸载时停止朗读
  useEffect(() => () => { window.speechSynthesis?.cancel() }, [])

  function switchPart(p) { tts.stop(); setPartId(p) }

  if (!speaking) return null
  const part = speaking.parts?.[partId] || null

  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <header className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <Link to={`/cambridge/exams/${examId}`} className="group mr-2 flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-extrabold text-sky-800">
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>试卷总览</span>
          </Link>
          <div className="mr-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-extrabold text-white">🎤 口语模考 · 约14分钟</div>
          {FCE_SPEAKING_TABS.map(tab => (
            <button key={tab.id} type="button" onClick={() => switchPart(tab.id)}
              className={`rounded-xl border px-3 py-2.5 text-sm font-extrabold transition sm:px-4 ${partId === tab.id ? 'border-sky-600 bg-sky-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-700'}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-7 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div key={partId} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {partId === 1 && part && <FceSpeakingP1 part={part} tts={tts} />}
            {partId === 2 && part && <FceSpeakingP2 part={part} tts={tts} />}
            {partId === 3 && part && <FceSpeakingP3 part={part} tts={tts} />}
            {partId === 4 && part && <FceSpeakingP4 part={part} tts={tts} />}
          </motion.div>
        </AnimatePresence>
        <p className="mt-6 text-center text-xs text-slate-400">
          题面来源 {speaking.meta?.source} · 书内页 {speaking.meta?.pages} · {speaking.meta?.answerSource}
        </p>
      </main>
    </CambridgeLayout>
  )
}
