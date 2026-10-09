// PET 模考（按 KET 模式）—— 含听力/阅读/写作/口语四个 Section 组件
// 复用 KET 的 WritingCard / useTTS；数据源来自 petListeningTests / petReadingTests / petWritingTests / petSpeakingTests
// 入口：CambridgeExam.jsx 默认导出在 ?tab=xxx 时分流到对应组件，testN 由路由参数解析

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CambridgeLayout } from './CambridgeApp'
import { WritingCard, useTTS } from './CambridgeExam'
import { petListeningTests } from '../data/petListeningData'
import { petReadingTests } from '../data/petReadingData'
import { petWritingTests } from '../data/petWritingData'
import { petSpeakingTests } from '../data/petSpeakingData'
import { PET_LISTENING_SAMPLES } from '../data/petListeningSamples'
import { PET_READING_SAMPLES } from '../data/petReadingSamples'
import { PET_WRITING_SAMPLES } from '../data/petWritingSamples'
import { PET_SPEAKING_SAMPLES } from '../data/petSpeakingSamples'
import { PET_LISTENING_STANDARD } from '../data/petListeningStandard'
import { PET_READING_STANDARD } from '../data/petReadingStandard'
import { PET_WRITING_STANDARD } from '../data/petWritingStandard'
import { PET_SPEAKING_STANDARD } from '../data/petSpeakingStandard'
import { PET_TRAINER1_LISTENING } from '../data/petTrainer1Listening'
import { PET_READING_TRAINER1 } from '../data/petReadingTrainer1'
import { PET_WRITING_TRAINER1 } from '../data/petWritingTrainer1'
import { PET_SPEAKING_TRAINER1 } from '../data/petSpeakingTrainer1'
import { PET_TRAINER2_LISTENING } from '../data/petTrainer2Listening'
import { PET_READING_TRAINER2 } from '../data/petReadingTrainer2'
import { PET_WRITING_TRAINER2 } from '../data/petWritingTrainer2'
import { PET_SPEAKING_TRAINER2 } from '../data/petSpeakingTrainer2'
import { setMockWrongBatch } from '../data/mockWrongBook'

// 试卷类型：mock=模拟题（pet-mock-N），sample=官方样题（pet-sample-N），standard=标准版真题（pet-standard-N），trainer1=Trainer 1（pet-trainer1-N），trainer2=Trainer 2（pet-trainer2-N）
// eslint-disable-next-line react-refresh/only-export-components -- 供错题本页面复用的试卷定位函数
export const paperId = (kind, n) => (kind === 'sample' ? `pet-sample-${n}` : kind === 'standard' ? `pet-standard-${n}` : kind === 'trainer1' ? `pet-trainer1-${n}` : kind === 'trainer2' ? `pet-trainer2-${n}` : `pet-mock-${n}`)
// eslint-disable-next-line react-refresh/only-export-components -- 供错题本页面复用的试卷定位函数
export const resolvePetPaper = (kind, skill, n) => {
  if (kind === 'sample') {
    return { listening: PET_LISTENING_SAMPLES, reading: PET_READING_SAMPLES, writing: PET_WRITING_SAMPLES, speaking: PET_SPEAKING_SAMPLES }[skill][n - 1]
  }
  if (kind === 'standard') {
    return { listening: PET_LISTENING_STANDARD, reading: PET_READING_STANDARD, writing: PET_WRITING_STANDARD, speaking: PET_SPEAKING_STANDARD }[skill][n - 1]
  }
  if (kind === 'trainer1') {
    return { listening: PET_TRAINER1_LISTENING, reading: PET_READING_TRAINER1, writing: PET_WRITING_TRAINER1, speaking: PET_SPEAKING_TRAINER1 }[skill][n - 1]
  }
  if (kind === 'trainer2') {
    return { listening: PET_TRAINER2_LISTENING, reading: PET_READING_TRAINER2, writing: PET_WRITING_TRAINER2, speaking: PET_SPEAKING_TRAINER2 }[skill][n - 1]
  }
  return { listening: petListeningTests, reading: petReadingTests, writing: petWritingTests, speaking: petSpeakingTests }[skill][n - 1]
}

const DURATION_LABEL = totalSeconds => `${String(Math.floor(totalSeconds / 60)).padStart(2, '0')}:${String(totalSeconds % 60).padStart(2, '0')}`
const ABCD = ['A', 'B', 'C', 'D']
const ABC = ['A', 'B', 'C']

/* ══════════════════════════════
   PET ExamShell —— 共享外壳（紫色主题，含返回总览、Part 进度、计时器）
══════════════════════════════ */
function PetExamShell({ testN, kind = 'mock', section, parts, partIndex, allAnswers, isDone, onReset, timerSeconds, timerPaused, onToggleTimer, totalMinutes, children }) {
  const [level, setLevel] = useExamLevel()
  return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <header className="border-b border-slate-100 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <Link to={`/cambridge/exams/${paperId(kind, testN)}`} className="group mr-2 flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-extrabold text-violet-800">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>试卷总览</span>
          </Link>
          <div className="mr-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-extrabold text-white">
            {section === 'reading' ? `📖 阅读与写作模考 · ${totalMinutes || 45}分钟` : section === 'listening' ? '🎧 听力模考 · 约30分钟' : section === 'writing' ? '✍️ 写作模考 · 45分钟' : '🎤 口语模考 · 12–17分钟'}
          </div>
          {parts.map((p, index) => {
            const finished = allAnswers[index] !== undefined
            return <span key={p.part} className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold ${index === partIndex && !isDone ? 'border-violet-600 bg-violet-600 text-white' : finished || isDone ? 'border-violet-200 bg-violet-50 text-violet-700' : 'border-slate-200 bg-white text-slate-400'}`}>Part {p.part}{finished || isDone ? ' ✓' : ''}</span>
          })}
          {onToggleTimer ? (
            <button type="button" onClick={onToggleTimer} className={`ml-auto rounded-xl px-4 py-2.5 font-mono text-sm font-extrabold ${timerPaused ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>
              ⏱ {DURATION_LABEL(timerSeconds)}{section === 'reading' ? ` / ${totalMinutes || 45}:00` : ''} · {timerPaused ? '继续计时' : '暂停计时'}
            </button>
          ) : <div className="ml-auto w-20" />}
        </div>
        {onReset && !isDone && Object.keys(allAnswers).length > 0 && <div className="mx-auto mt-2 max-w-6xl text-right"><button onClick={onReset} className="text-xs font-semibold text-slate-400 hover:text-red-500">重新开始本套</button></div>}
      </header>
      <main className="mx-auto max-w-5xl px-6 py-7">{children}</main>
    </CambridgeLayout>
  )
}

/* useExamLevel hook —— 复用 KET 实现（level 来自 localStorage，PET 时显示 PET 中心） */
function useExamLevel() {
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  useEffect(() => { try { localStorage.setItem('cambridge_level', level) } catch { /* storage unavailable */ } }, [level])
  return [level, setLevel]
}

/* ══════════════════════════════
   PET 听力 Part 渲染组件
══════════════════════════════ */

/* Part 1 · 图片选择 (image_mcq, 3 options A/B/C, answer 为索引)
   KET 模式：作答中只记录选择，不即时评分；交卷后统一在最终结果页出分 */
function PetListeningPictureMCQ({ part, isLast, onDone }) {
  const [answers, setAnswers] = useState(() => Array(part.items.length).fill(null))

  function pick(i, idx) { setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }

  return (
    <div>
      <div className="space-y-5">
        {part.items.map((item, i) => (
          <div key={i} className="rounded-[22px] border border-slate-200 bg-white p-5 md:p-6">
            <div className="flex items-start gap-4 mb-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100 text-base font-extrabold text-violet-700">{i + 1}</span>
              <p className="min-w-0 flex-1 text-lg font-extrabold leading-7 text-slate-900">{item.q}</p>
            </div>
            {/* 题目整图（含 A/B/C 三幅图）只渲染一次，铺满宽度，与 KET 一致 */}
            <div className="mx-auto max-w-[720px] overflow-hidden rounded-2xl border border-slate-200 bg-[#fafafa] p-2">
              <img src={item.image} alt={`第 ${i + 1} 题选项图`} className="w-full rounded-xl bg-white object-contain" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {ABC.map((label, idx) => {
                const selected = answers[i] === idx
                return (
                  <button key={label} type="button" onClick={() => pick(i, idx)}
                    className={`h-11 rounded-xl border-2 text-base font-extrabold transition ${selected ? 'border-violet-600 bg-violet-50 text-violet-700' : 'border-slate-200 text-slate-500 hover:border-violet-300 hover:text-violet-600'}`}>
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={answers.some(a => a === null)} onClick={() => onDone(answers)}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '提交答卷 →' : `完成并进入 Part ${part.part + 1} →`}
        </button>
      </div>
    </div>
  )
}

/* Part 2/4 · 三选一 MCQ (mcq, 3 options, answer 为索引)
   KET 模式：作答中只记录选择，不即时评分；交卷后统一在最终结果页出分 */
function PetListeningMCQ({ part, isLast, onDone }) {
  const [answers, setAnswers] = useState(() => Array(part.items.length).fill(null))

  function pick(i, idx) { setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }

  return (
    <div>
      <div className="space-y-4">
        {part.items.map((item, i) => (
          <div key={i} className="rounded-[22px] border border-slate-200 bg-white p-5 md:p-6">
            <div className="flex items-start gap-4 mb-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100 text-base font-extrabold text-violet-700">{i + 1}</span>
              <p className="min-w-0 flex-1 text-lg font-extrabold leading-7 text-slate-900">{item.q}</p>
            </div>
            <div className="grid gap-2">
              {item.opts.map((opt, idx) => {
                const selected = answers[i] === idx
                return (
                  <button key={idx} type="button" onClick={() => pick(i, idx)}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left font-bold transition ${selected ? 'border-violet-500 bg-violet-50 text-violet-800' : 'border-slate-200 text-slate-700 hover:border-violet-300'}`}>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${selected ? 'bg-violet-600 text-white' : 'bg-violet-100 text-violet-700'}`}>
                      {ABC[idx]}
                    </span>
                    <span className="text-sm font-medium text-slate-800">{opt}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={answers.some(a => a === null)} onClick={() => onDone(answers)}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '提交答卷 →' : `完成并进入 Part ${part.part + 1} →`}
        </button>
      </div>
    </div>
  )
}

/* Part 3 · 笔记填空 (blanks, answer 为接受答案数组)
   KET 模式：作答中只记录输入，不即时评分；交卷后统一在最终结果页出分 */
function PetListeningBlanks({ part, isLast, onDone }) {
  const [answers, setAnswers] = useState(() => Array(part.items.length).fill(''))

  function set(i, v) { setAnswers(a => { const n = [...a]; n[i] = v; return n }) }

  return (
    <div>
      <div className="space-y-3">
        {part.items.map((item, i) => (
          <div key={i} className="rounded-[22px] border border-slate-200 bg-white p-5 md:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100 text-base font-extrabold text-violet-700">{i + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="text-lg font-extrabold leading-7 text-slate-900">{item.q}</p>
                <input type="text" value={answers[i]} onChange={e => set(i, e.target.value)}
                  className="mt-4 h-12 w-full rounded-xl border border-slate-200 px-4 text-lg font-bold text-slate-800 focus:border-violet-500 focus:outline-none" placeholder="输入听到的信息（1-2 个词或数字）" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={answers.some(a => !a.trim())} onClick={() => onDone(answers)}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '提交答卷 →' : `完成并进入 Part ${part.part + 1} →`}
        </button>
      </div>
    </div>
  )
}

/* PetListeningPartRouter —— 按 part.type 分流 */
function PetListeningPartRouter({ part, isLast, onDone }) {
  if (part.type === 'image_mcq') return <PetListeningPictureMCQ part={part} isLast={isLast} onDone={onDone} />
  if (part.type === 'mcq')        return <PetListeningMCQ part={part} isLast={isLast} onDone={onDone} />
  if (part.type === 'blanks')     return <PetListeningBlanks part={part} isLast={isLast} onDone={onDone} />
  return null
}

/* 音频播放器（可调速度）—— 借鉴 KET SpeedAudioPlayer */
const PET_SPEEDS = [0.75, 1.0, 1.25, 1.5]
function PetAudioPlayer({ src }) {
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
    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
      <audio ref={ref} src={src} preload="metadata" />
      <div className="flex items-center gap-3">
        <button type="button" onClick={toggle}
          className="grid h-12 w-12 place-items-center rounded-full bg-violet-600 text-white shadow-sm hover:bg-violet-700">
          {playing ? '⏸' : '▶'}
        </button>
        <div className="flex-1">
          <div className="h-1.5 rounded-full bg-violet-100 overflow-hidden">
            <div className="h-full bg-violet-500 transition-none" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
        <div className="flex gap-1">
          {PET_SPEEDS.map(s => (
            <button key={s} type="button" onClick={() => setSpeed(s)}
              className={`rounded-lg px-2 py-1 text-xs font-bold ${speed === s ? 'bg-violet-600 text-white' : 'bg-white text-violet-700 hover:bg-violet-100'}`}>
              {s}×
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════
   PET 听力模考主组件
══════════════════════════════ */
export function PetListeningExam({ testN, kind = 'mock' }) {
  const test = resolvePetPaper(kind, 'listening', testN)
  const parts = [1, 2, 3, 4].map(n => ({ part: n, ...test.parts[n] }))
  const [partIndex, setPartIndex] = useState(0)
  const [allAnswers, setAllAnswers] = useState({})
  const [done, setDone] = useState(false)
  const part = parts[partIndex]

  function handlePartDone(answers) {
    const updated = { ...allAnswers, [partIndex]: answers }
    setAllAnswers(updated)
    if (partIndex + 1 >= parts.length) {
      syncPetWrongBook(kind, testN, 'listening', parts, updated, petListeningWrongMap)
      setDone(true)
    } else {
      setPartIndex(i => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (done) return <PetListeningFinalResult parts={parts} allAnswers={allAnswers} testN={testN} kind={kind} />

  return (
    <PetExamShell testN={testN} kind={kind} section="listening" parts={parts} partIndex={partIndex} allAnswers={allAnswers}>
      <AnimatePresence mode="wait">
        <motion.div key={partIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          <div className="mb-5">
            <PetAudioPlayer src={part.audio} />
          </div>
          <PetListeningPartRouter part={part} isLast={partIndex + 1 >= parts.length} onDone={handlePartDone} />
        </motion.div>
      </AnimatePresence>
    </PetExamShell>
  )
}

/* PET 听力最终结果 */
function PetListeningFinalResult({ parts, allAnswers, testN, kind = 'mock' }) {
  const [level, setLevel] = useExamLevel()

  const partScores = parts.map((part, pi) => {
    const ans = allAnswers[pi] || []
    if (part.type === 'image_mcq' || part.type === 'mcq') {
      const results = part.items.map((item, i) => ans[i] === item.answer)
      const review = part.items.map((item, i) => ({
        n: i + 1, question: item.q,
        userAns: ans[i] != null ? (part.type === 'image_mcq' ? ABC[ans[i]] : ABC[ans[i]]) : '—',
        correctAns: part.type === 'image_mcq' ? ABC[item.answer] : ABC[item.answer],
        isRight: results[i], exp: item.explanation,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }
    if (part.type === 'blanks') {
      const results = part.items.map((item, i) => (item.answer || []).some(a => a.trim().toLowerCase() === String(ans[i] || '').trim().toLowerCase()))
      const review = part.items.map((item, i) => ({
        n: i + 1, question: item.q, userAns: ans[i] || '—', correctAns: item.show || item.answer[0],
        isRight: results[i], exp: item.explanation,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }
    return { part, correct: 0, total: 0, review: [] }
  })

  const total = partScores.reduce((s, p) => s + p.total, 0)
  const correct = partScores.reduce((s, p) => s + p.correct, 0)
  const pct = total ? Math.round(correct / total * 100) : 0

  return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <div className="rounded-[28px] border border-violet-200 bg-white p-8 text-center shadow-sm">
            <div className="text-5xl">{pct >= 90 ? '🏆' : pct >= 75 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
            <div className="mt-3 text-xs font-extrabold tracking-[.18em] text-violet-700">PET LISTENING RESULT</div>
            <h1 className="mt-2 text-4xl font-extrabold text-slate-950">听力模考完成</h1>
            <div className="mt-6 text-6xl font-black text-violet-700">{correct}<span className="text-2xl text-slate-400"> / {total}</span></div>
            <div className="mt-2 text-sm font-extrabold text-slate-500">正确率 {pct}%</div>
            <div className="mt-3 text-xs text-slate-400 bg-slate-50 rounded-xl px-4 py-2 inline-block">PET 听力满分 25 分 · 通过线约 12 分（近 50%）</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wide">各 Part 得分</div>
            <div className="space-y-2.5">
              {partScores.map(({ part, correct: c, total: t }, i) => {
                const pp = t > 0 ? Math.round(c / t * 100) : 0
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-500 w-14 flex-shrink-0">Part {part.part}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${pp}%` }} transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={`h-full rounded-full ${pp >= 80 ? 'bg-emerald-400' : pp >= 60 ? 'bg-amber-400' : 'bg-rose-400'}`} />
                    </div>
                    <span className="text-xs font-bold text-slate-600 w-10 text-right flex-shrink-0">{c}/{t}</span>
                  </div>
                )
              })}
            </div>
          </div>
          {partScores.map(({ part, correct: c, total: t, review }, pi) => (
            <div key={pi} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-violet-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-extrabold text-xs">{part.part}</span>
                </div>
                <span className="font-bold text-slate-800 text-sm">{part.title}</span>
                <span className={`ml-auto text-xs font-bold px-2.5 py-0.5 rounded-full ${c === t ? 'bg-emerald-100 text-emerald-700' : c >= t * 0.6 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-600'}`}>{c}/{t}</span>
              </div>
              <div className="divide-y divide-slate-50">
                {review.map((r, ri) => (
                  <div key={ri} className={`px-5 py-3.5 ${r.isRight ? '' : 'bg-rose-50/40'}`}>
                    <div className="flex items-start gap-2.5">
                      <span className={`text-sm font-extrabold mt-0.5 flex-shrink-0 w-4 ${r.isRight ? 'text-emerald-500' : 'text-rose-400'}`}>{r.isRight ? '✓' : '✗'}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-600 mb-1.5 leading-relaxed">
                          <span className="font-bold text-slate-800 mr-1">{r.n}.</span>{r.question}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {!r.isRight && <span className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-lg font-semibold">你的答案：{r.userAns}</span>}
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg font-bold">正确：{r.correctAns}</span>
                        </div>
                        {!r.isRight && r.exp && <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{r.exp}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex gap-3 pb-4">
            <Link to={`/cambridge/exams/${paperId(kind, testN)}`} className="flex-1 py-3.5 bg-violet-700 text-white font-bold rounded-2xl hover:bg-violet-800 text-sm text-center transition-colors">
              返回总览 →
            </Link>
            <Link to="/cambridge/exams" className="flex-1 py-3.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:border-slate-300 text-sm text-center transition-colors">
              返回列表
            </Link>
          </div>
        </motion.div>
      </main>
    </CambridgeLayout>
  )
}

/* ══════════════════════════════
   PET 写作模考（复用 WritingCard）
══════════════════════════════ */
const PET_WRITING_TABS = [
  { id: 0, label: 'Part 1 · 邮件' },
  { id: 1, label: 'Part 2 · 文章' },
  { id: 2, label: 'Part 2 · 故事' },
]

export function PetWritingExam({ testN, kind = 'mock' }) {
  const [tabId, setTabId] = useState(0)
  const test = resolvePetPaper(kind, 'writing', testN)
  const item = test.items[tabId]
  const [level, setLevel] = useExamLevel()
  const draftKeyPrefix = kind === 'sample' ? 'mars_pet_sample_writing_v1' : kind === 'standard' ? 'mars_pet_standard_writing_v1' : kind === 'trainer1' ? 'mars_pet_trainer1_writing_v1' : kind === 'trainer2' ? 'mars_pet_trainer2_writing_v1' : 'mars_pet_exam_writing_v1'

  return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <header className="border-b border-slate-100 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <Link to={`/cambridge/exams/${paperId(kind, testN)}`} className="group mr-2 flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-extrabold text-violet-800">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>试卷总览</span>
          </Link>
          <div className="mr-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-extrabold text-white">✍️ 写作模考 · 45分钟</div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <div>
          <div className="text-[11px] font-extrabold tracking-[.18em] text-violet-700">PET WRITING MOCK</div>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">{item.title}</h1>
          <p className="mt-2 text-slate-500">
            {tabId === 0
              ? '阅读情境邮件和旁批，写一封约 100 词的回信，必须用上全部四个旁批。'
              : tabId === 1
                ? 'Part 2 二选一：为杂志写一篇约 100 词的文章，回答题目中的问题。'
                : 'Part 2 二选一：以给定句子开头，写一篇约 100 词的故事。'}
          </p>
        </div>
        <div className="mb-5 mt-6 flex gap-2 overflow-x-auto">
          {PET_WRITING_TABS.map(tab => (
            <button key={tab.id} type="button" onClick={() => setTabId(tab.id)}
              className={`whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${tabId === tab.id ? 'border-violet-600 bg-violet-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:border-violet-300 hover:text-violet-700'}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <section className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4 text-xs font-semibold text-slate-400">Test {testN} · {test.meta.collection}</div>
          <WritingCard key={`${test.meta.id}-${tabId}`} w={item} wi={0} storageKey={`${draftKeyPrefix}:test${testN}:item${tabId}:draft`} />
        </section>
      </main>
    </CambridgeLayout>
  )
}

/* ══════════════════════════════
   PET 口语模考（复用 useTTS，按 Part 切换）
══════════════════════════════ */
const PET_SPEAKING_TABS = [
  { id: 1, label: 'Part 1 · 个人问答' },
  { id: 2, label: 'Part 2 · 图片描述' },
  { id: 3, label: 'Part 3 · 协作讨论' },
  { id: 4, label: 'Part 4 · 深入讨论' },
]

function PetSpeakingReference({ text }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-3">
      <button type="button" onClick={() => setOpen(v => !v)} className="text-xs font-extrabold text-violet-700 hover:text-violet-900">
        {open ? '▾ 收起参考答案' : '▸ 查看参考答案'}
      </button>
      {open && (
        <div className="mt-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
          <div className="mb-1 text-[10px] font-extrabold uppercase tracking-wider text-violet-700">参考回答之一</div>
          <p className="text-sm leading-7 text-slate-700">{text}</p>
        </div>
      )}
    </div>
  )
}

export function PetSpeakingExam({ testN, kind = 'mock' }) {
  const [partId, setPartId] = useState(1)
  const test = resolvePetPaper(kind, 'speaking', testN)
  const part = test.parts[partId]
  const [level, setLevel] = useExamLevel()
  const { stop } = useTTS()

  function switchPart(p) { stop(); setPartId(p) }

  return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <header className="border-b border-slate-100 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <Link to={`/cambridge/exams/${paperId(kind, testN)}`} className="group mr-2 flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-extrabold text-violet-800">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>试卷总览</span>
          </Link>
          <div className="mr-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-extrabold text-white">🎤 口语模考 · 12–17分钟</div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <div>
          <div className="text-[11px] font-extrabold tracking-[.18em] text-violet-700">PET SPEAKING MOCK</div>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">{PET_SPEAKING_TABS.find(tab => tab.id === partId)?.label}</h1>
          {(part.duration || part.instruction) && (
            <p className="mt-2 text-slate-500">
              {part.duration && <span className="mr-2 rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-bold text-violet-700">{part.duration}</span>}
              {part.instruction}
            </p>
          )}
        </div>
        <div className="mb-5 mt-6 flex gap-2 overflow-x-auto">
          {PET_SPEAKING_TABS.map(tab => (
            <button key={tab.id} type="button" onClick={() => switchPart(tab.id)}
              className={`whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${partId === tab.id ? 'border-violet-600 bg-violet-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:border-violet-300 hover:text-violet-700'}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={partId} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
            <PetSpeakingPart part={part} partId={partId} />
          </motion.div>
        </AnimatePresence>
      </main>
    </CambridgeLayout>
  )
}

function PetSpeakingQA({ q, index }) {
  return (
    <li className="rounded-xl border border-slate-200 p-4">
      <div className="flex gap-3">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet-100 text-xs font-extrabold text-violet-700">{index + 1}</span>
        <strong className="text-base font-semibold leading-7 text-slate-800">{q.q}</strong>
      </div>
      <div className="ml-9"><PetSpeakingReference text={q.modelAnswer} /></div>
    </li>
  )
}

function PetSpeakingPart({ part, partId }) {
  if (partId === 1) {
    return (
      <div className="space-y-6">
        {!!part.phase1?.length && (
          <section className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-extrabold text-slate-900">第一阶段 · 固定问题</h2>
            <p className="mt-1 text-xs text-slate-500">两位考生都会被问到，回答要自然完整。</p>
            <ol className="mt-4 space-y-3">
              {part.phase1.map((q, i) => <PetSpeakingQA key={i} q={q} index={i} />)}
            </ol>
          </section>
        )}
        {!!part.phase2?.length && (
          <section className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-extrabold text-slate-900">第二阶段 · 个性化问题</h2>
            <p className="mt-1 text-xs text-slate-500">考官分别向两位考生提问，回答中补充理由和例子。</p>
            <ol className="mt-4 space-y-3">
              {part.phase2.map((q, i) => <PetSpeakingQA key={i} q={q} index={i} />)}
            </ol>
          </section>
        )}
      </div>
    )
  }
  if (partId === 2) {
    return (
      <div className="grid gap-6 lg:grid-cols-2">
        {part.photos.map((p, i) => (
          <section key={i} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <div className="bg-slate-50 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-extrabold text-violet-700">考生 {i === 0 ? 'A' : 'B'}</span>
                <span className="text-xs text-slate-400">主题：{p.topic}</span>
              </div>
              <img src={p.image} alt={`Photo ${i === 0 ? 'A' : 'B'}`} className="max-h-[380px] w-full rounded-2xl border border-slate-200 bg-white object-contain" />
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {p.points?.map((pt, j) => (
                  <span key={j} className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">{pt}</span>
                ))}
              </div>
              <PetSpeakingReference text={p.modelAnswer} />
            </div>
          </section>
        ))}
      </div>
    )
  }
  if (partId === 4) {
    return (
      <section className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <ol className="space-y-3">
          {part.questions.map((q, i) => <PetSpeakingQA key={i} q={q} index={i} />)}
        </ol>
      </section>
    )
  }
  if (partId === 3) {
    return (
      <section className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
        <div className="grid items-start lg:grid-cols-2">
          {part.image && (
            <div className="border-b border-slate-100 bg-slate-50 p-5 lg:border-b-0 lg:border-r">
              <img src={part.image} alt="Task" className="max-h-[620px] w-full rounded-2xl border border-slate-200 bg-white object-contain" />
            </div>
          )}
          <div className="p-6">
            <div className="rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
              情境：{part.situation}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{part.instruction}</p>
            {part.options && (
              <div className="mt-3 flex flex-wrap gap-2">
                {part.options.map((o, i) => (
                  <span key={i} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">{o}</span>
                ))}
              </div>
            )}
            {part.modelDialogue && (
              <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50 p-4">
                <div className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-violet-700">示范对话</div>
                <p className="whitespace-pre-line text-sm leading-7 text-slate-700">{part.modelDialogue}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
  return null
}

/* ══════════════════════════════
   PET 阅读模考 —— 含计时/进度保存/交卷/分 Part 得分/错题查看/只重做错题/刷新恢复
══════════════════════════════ */

/* 把 petReadingTests 数据结构转换为 KET 风格的 parts 数组（含 part 标号、type、questions 等） */
// eslint-disable-next-line react-refresh/only-export-components -- 供错题本页面复用的数据装配函数
export function adaptPetReadingTest(test) {
  const parts = []
  // Part 1: 5 题 notice/text/ad，options {A,B,C}, answer (A/B/C 字母)
  parts.push({
    part: 1, type: 'pet_notice_mcq', title: 'Part 1 · 短文本理解', instructions: test.part1.instructions,
    questions: test.part1.questions.map(q => ({ n: q.id, content: q.content, from: q.from, to: q.to, type: q.type, opts: [q.options.A, q.options.B, q.options.C], ans: 'ABC'.indexOf(q.answer) })),
  })
  // Part 2: 5 person matching 8 options A-H
  parts.push({
    part: 2, type: 'pet_person_match', title: `Part 2 · ${test.part2.title}`, instructions: test.part2.instructions,
    people: test.part2.people.map(p => ({ n: Number(p.label), name: p.name, text: p.text })),
    options: test.part2.options.map(o => ({ label: o.label, name: o.name, text: o.text })),
    questions: test.part2.questions.map(q => ({ n: q.id, person: q.person, ans: q.answer })),
  })
  // Part 3: 5 MCQ 4 options A-D (long article)
  parts.push({
    part: 3, type: 'pet_article_mcq', title: `Part 3 · ${test.part3.title}`, instructions: test.part3.instructions,
    author: test.part3.author, passage: test.part3.passage,
    questions: test.part3.questions.map(q => ({ n: q.id, text: q.text, opts: [q.options.A, q.options.B, q.options.C, q.options.D], ans: 'ABCD'.indexOf(q.answer) })),
  })
  // Part 4: 5 gap fill 8 sentences A-H (gapped text)
  parts.push({
    part: 4, type: 'pet_gapped_text', title: `Part 4 · ${test.part4.title}`, instructions: test.part4.instructions,
    author: test.part4.author, passage_segments: test.part4.passage_segments,
    options: test.part4.options.map(o => ({ label: o.label, text: o.text })),
    questions: test.part4.questions.map(q => ({ n: q.id, ans: q.answer })),
  })
  // Part 5: 6 MCQ cloze 4 options A-D
  parts.push({
    part: 5, type: 'pet_cloze_mcq', title: `Part 5 · ${test.part5.title}`, instructions: test.part5.instructions,
    passage_segments: test.part5.passage_segments,
    questions: test.part5.questions.map(q => ({ n: q.id, opts: [q.options.A, q.options.B, q.options.C, q.options.D], ans: 'ABCD'.indexOf(q.answer) })),
  })
  // Part 6: 6 open cloze 1 word
  parts.push({
    part: 6, type: 'pet_open_cloze', title: `Part 6 · ${test.part6.title}`, instructions: test.part6.instructions,
    passage_segments: test.part6.passage_segments,
    questions: test.part6.questions.map(q => ({ n: q.id, ans: Array.isArray(q.answer) ? q.answer : [q.answer] })),
  })
  return parts
}

/* 计算每个 part 的错题数 */
function countPetReadingMistakes(part, answers = []) {
  if (part.type === 'pet_notice_mcq' || part.type === 'pet_article_mcq' || part.type === 'pet_cloze_mcq') {
    return part.questions.reduce((count, q, i) => count + (answers[i] !== q.ans ? 1 : 0), 0)
  }
  if (part.type === 'pet_person_match' || part.type === 'pet_gapped_text') {
    return part.questions.reduce((count, q, i) => count + (answers[i] !== q.ans ? 1 : 0), 0)
  }
  if (part.type === 'pet_open_cloze') {
    return part.questions.reduce((count, q, i) => {
      const v = String(answers[i] || '').trim().toLowerCase()
      return count + ((q.ans || []).some(a => a.trim().toLowerCase() === v) ? 0 : 1)
    }, 0)
  }
  return 0
}

/* 交卷时生成某 Part 的错题集合（key = 题在 Part 内的序号，value = 用户答案展示文本） */
function petReadingWrongMap(part, answers = []) {
  const wrong = {}
  part.questions.forEach((q, i) => {
    const value = answers[i]
    const isRight = part.type === 'pet_open_cloze'
      ? (q.ans || []).some(a => a.trim().toLowerCase() === String(value || '').trim().toLowerCase())
      : value === q.ans
    if (isRight) return
    let userAnswer
    if (part.type === 'pet_notice_mcq') userAnswer = value != null ? ABC[value] : '—'
    else if (part.type === 'pet_article_mcq' || part.type === 'pet_cloze_mcq') userAnswer = value != null ? ABCD[value] : '—'
    else if (part.type === 'pet_person_match' || part.type === 'pet_gapped_text') userAnswer = value || '—'
    else userAnswer = String(value || '').trim() || '—'
    wrong[String(i)] = userAnswer
  })
  return wrong
}

/* 交卷时生成听力某 Part 的错题集合 */
function petListeningWrongMap(part, answers = []) {
  const wrong = {}
  if (part.type === 'image_mcq' || part.type === 'mcq') {
    part.items.forEach((item, i) => {
      if (answers[i] === item.answer) return
      wrong[String(i)] = answers[i] != null ? ABC[answers[i]] : '—'
    })
  } else if (part.type === 'blanks') {
    part.items.forEach((item, i) => {
      const value = String(answers[i] || '').trim().toLowerCase()
      if ((item.answer || []).some(a => String(a).trim().toLowerCase() === value)) return
      wrong[String(i)] = String(answers[i] || '').trim() || '—'
    })
  }
  return wrong
}

/* 整套交卷时同步错题本（覆盖式：本次答对的旧错题自动移出） */
function syncPetWrongBook(kind, testN, paper, parts, allAnswers, wrongMapOf) {
  const examRef = paperId(kind, testN)
  parts.forEach((part, index) => {
    setMockWrongBatch('pet', paper, examRef, String(part.part), wrongMapOf(part, allAnswers[index] || []))
  })
}

/* ── Part 1 渲染：短文本 MCQ（版式与阅读专项一致：左刺激卡 + 右方格选项行） ── */
function PetP1Stimulus({ q }) {
  const text = <p className="text-[18px] text-slate-900 whitespace-pre-line leading-8">{q.content}</p>
  if (q.type === 'text') return (
    <div className="mx-auto max-w-[330px] rounded-[30px] border-[7px] border-slate-800 bg-slate-50 px-4 pb-7 pt-3 shadow-[0_16px_35px_rgba(15,23,42,.15)]">
      <div className="mx-auto mb-7 h-1.5 w-16 rounded-full bg-slate-600" />
      <div className="mb-3 text-center text-xs font-bold text-slate-500">{q.from || 'Message'}</div>
      <div className="rounded-[20px_20px_6px_20px] bg-violet-50 px-5 py-5 text-left shadow-sm">{text}</div>
    </div>
  )
  if (q.type === 'ad') return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-rose-300 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-100 px-7 py-10 text-center shadow-[0_14px_35px_rgba(190,24,93,.10)]">
      <span className="absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">Advertisement</span>
      <div className="pt-4 font-semibold">{text}</div>
    </div>
  )
  return (
    <div className="relative rounded-xl bg-[#e7d8af] p-3 sm:p-5 shadow-[0_14px_35px_rgba(71,55,25,.12)]">
      <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-red-500 shadow" />
      <div className="min-h-[220px] border border-amber-200 bg-[#fffdf6] px-3 sm:px-7 py-7 sm:py-10 text-center shadow-[0_5px_14px_rgba(71,55,25,.14)] flex items-center justify-center">
        <div>
          {q.from && q.to && <div className="mb-2 text-xs font-semibold text-slate-500">From: {q.from} · To: {q.to}</div>}
          {text}
        </div>
      </div>
    </div>
  )
}

function PetPart1Notice({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const visibleIndexes = useMemo(() => part.questions.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [part.questions, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => initialAnswers ? [...initialAnswers] : Array(part.questions.length).fill(null))
  const [checked, setChecked] = useState(false)

  function pick(i, idx) { if (checked) return; setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }
  function submit() { setChecked(true); onDone(answers) }

  return (
    <div>
      <div>
        {part.questions.map((q, i) => {
          if (!visibleIndexes.includes(i)) return null
          const correct = checked && answers[i] === q.ans
          return (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-4 lg:gap-8 py-8 sm:py-10 border-b border-slate-300 last:border-b-0 items-center">
              {/* 左：题号 + 刺激卡（与专项同款视觉） */}
              <div className="min-w-0 w-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold transition-colors ${checked ? (correct ? 'bg-emerald-500 text-white' : 'bg-rose-400 text-white') : answers[i] != null ? 'bg-violet-600 text-white' : 'bg-violet-100 text-violet-700'}`}>{q.n || i + 1}</span>
                </div>
                <PetP1Stimulus q={q} />
              </div>
              {/* 右：方格选项行 */}
              <div className="min-w-0 flex flex-col justify-center space-y-3">
                <h3 className="text-[20px] font-extrabold text-[#30284d]">Choose the correct answer.</h3>
                {q.opts.map((opt, idx) => {
                  const selected = answers[i] === idx
                  const right = checked && q.ans === idx
                  const wrong = checked && selected && q.ans !== idx
                  return (
                    <button key={idx} type="button" disabled={checked} onClick={() => pick(i, idx)}
                      className={`flex items-center gap-3 sm:gap-5 w-full text-left py-2 transition-all ${checked && !right && !wrong ? 'opacity-45' : ''}`}>
                      <span className={`w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 border-2 shadow-sm transition-colors ${right ? 'border-emerald-500 bg-emerald-50 text-emerald-600' : wrong ? 'border-rose-400 bg-rose-50 text-rose-500' : selected ? 'border-violet-500 bg-violet-50 text-violet-700' : 'border-slate-200 bg-white'} flex items-center justify-center font-bold text-sm`}>
                        {(right || (selected && !checked)) ? ABC[idx] : ''}
                      </span>
                      <span className="select-text cursor-text text-[15px] sm:text-[18px] leading-snug text-[#30284d]">{opt}</span>
                    </button>
                  )
                })}
                {checked && !correct && <p className="text-xs text-rose-600">正确：{ABC[q.ans]}</p>}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={visibleIndexes.some(i => answers[i] === null)} onClick={submit}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '完成阅读模考 →' : '完成本 Part →'}
        </button>
      </div>
    </div>
  )
}

/* ── Part 2 渲染：人物-选项匹配 ── */
function PetPart2PersonMatch({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const visibleIndexes = useMemo(() => part.questions.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [part.questions, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => initialAnswers ? [...initialAnswers] : Array(part.questions.length).fill(null))
  const [checked, setChecked] = useState(false)

  function pick(i, label) { if (checked) return; setAnswers(a => { const n = [...a]; n[i] = label; return n }) }
  function submit() { setChecked(true); onDone(answers) }

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(400px,.75fr)] items-start">
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">课程选项 A-H</div>
          <div className="space-y-4 lg:max-h-[125vh] lg:overflow-y-auto lg:pr-2 lg:sticky lg:top-5">
            {part.options.map(o => (
              <div key={o.label} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 bg-violet-600 text-white text-base font-extrabold rounded-full flex items-center justify-center flex-shrink-0">{o.label}</span>
                  <span className="font-bold text-slate-800 text-xl">{o.name}</span>
                </div>
                <p className="text-[17px] text-slate-700 leading-8">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">人物 Q6-10</div>
          <div className="space-y-4 lg:sticky lg:top-5">
            {part.questions.map((q, i) => {
              if (!visibleIndexes.includes(i)) return null
              const person = part.people.find(p => p.n === q.n) || part.people[i]
              const correct = checked && answers[i] === q.ans
              return (
                <div key={i} className={`rounded-xl border px-5 py-4 ${checked ? correct ? 'border-emerald-300 bg-emerald-50' : 'border-rose-300 bg-rose-50' : 'border-slate-200'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold transition-colors ${checked ? correct ? 'bg-emerald-500 text-white' : 'bg-rose-400 text-white' : answers[i] ? 'bg-violet-600 text-white' : 'bg-violet-100 text-violet-700'}`}>{q.n}</span>
                    <span className="font-bold text-slate-800 text-lg">{person?.name}</span>
                  </div>
                  <p className="text-[15px] leading-6 text-slate-700 mb-4">{person?.text}</p>
                  <div className="grid grid-cols-8 gap-1.5">
                    {part.options.map(o => {
                      const selected = answers[i] === o.label
                      let cls = 'border-slate-200 text-slate-600 hover:border-violet-300'
                      if (selected && !checked) cls = 'border-violet-500 bg-violet-50 text-violet-700'
                      if (checked) {
                        if (q.ans === o.label) cls = 'border-emerald-500 bg-emerald-100 text-emerald-800'
                        else if (selected) cls = 'border-rose-400 bg-rose-100 text-rose-700'
                        else cls = 'border-slate-100 text-slate-300'
                      }
                      return (
                        <button key={o.label} type="button" disabled={checked} onClick={() => pick(i, o.label)}
                          className={`w-full aspect-square min-w-0 rounded-lg border-2 font-bold text-sm transition-all ${cls}`}>
                          {o.label}
                        </button>
                      )
                    })}
                  </div>
                  {checked && !correct && <p className="mt-2 text-xs text-rose-600">正确：{q.ans}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={visibleIndexes.some(i => answers[i] === null)} onClick={submit}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '完成阅读模考 →' : '完成本 Part →'}
        </button>
      </div>
    </div>
  )
}

/* ── Part 3 渲染：长文章 MCQ 4 选项 ── */
function PetPart3ArticleMCQ({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const visibleIndexes = useMemo(() => part.questions.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [part.questions, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => initialAnswers ? [...initialAnswers] : Array(part.questions.length).fill(null))
  const [checked, setChecked] = useState(false)

  function pick(i, idx) { if (checked) return; setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }
  function submit() { setChecked(true); onDone(answers) }

  return (
    <div>
      {part.author && <div className="mb-2 text-xs font-semibold text-slate-500">作者：{part.author}</div>}
      <div className="rounded-2xl bg-slate-50 px-6 py-5 mb-5 whitespace-pre-line text-[17px] leading-8 text-slate-800">{part.passage}</div>
      <div className="space-y-4">
        {part.questions.map((q, i) => {
          if (!visibleIndexes.includes(i)) return null
          const correct = checked && answers[i] === q.ans
          return (
            <div key={i} className={`rounded-[22px] border bg-white p-5 md:p-6 ${checked ? correct ? 'border-emerald-300 bg-emerald-50' : 'border-rose-300 bg-rose-50' : 'border-slate-200'}`}>
              <div className="flex items-start gap-3 mb-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-600 text-sm font-extrabold text-white">{q.n}</span>
                <p className="min-w-0 flex-1 text-[15px] font-bold leading-7 text-slate-900">{q.text}</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {q.opts.map((opt, idx) => {
                  const selected = answers[i] === idx
                  return (
                    <button key={idx} type="button" disabled={checked} onClick={() => pick(i, idx)}
                      className={`rounded-xl border-2 px-3 py-2.5 text-left text-[15px] font-semibold leading-6 transition ${checked && q.ans === idx ? 'border-emerald-500 bg-emerald-100 text-emerald-800' : checked && selected ? 'border-rose-400 bg-rose-100 text-rose-700' : selected ? 'border-violet-500 bg-violet-50 text-violet-800' : 'border-slate-200 text-slate-700 hover:border-violet-300'}`}>
                      <strong className="mr-1">{ABCD[idx]}.</strong>{opt}
                    </button>
                  )
                })}
              </div>
              {checked && !correct && <p className="mt-2 text-xs text-rose-600">正确：{ABCD[q.ans]}</p>}
            </div>
          )
        })}
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={visibleIndexes.some(i => answers[i] === null)} onClick={submit}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '完成阅读模考 →' : '完成本 Part →'}
        </button>
      </div>
    </div>
  )
}

/* ── Part 4 渲染：gapped text（8 句选 5 填空） ── */
function PetPart4GappedText({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const visibleIndexes = useMemo(() => part.questions.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [part.questions, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => initialAnswers ? [...initialAnswers] : Array(part.questions.length).fill(null))
  const [checked, setChecked] = useState(false)

  function pick(i, label) { if (checked) return; setAnswers(a => { const n = [...a]; n[i] = label; return n }) }
  function submit() { setChecked(true); onDone(answers) }

  return (
    <div>
      {part.author && <div className="mb-2 text-xs font-semibold text-slate-500">作者：{part.author}</div>}
      <div className="grid gap-5 lg:grid-cols-2 items-start">
        <div className="min-w-0">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">文章（5 处空缺）</div>
          <div className="rounded-2xl bg-slate-50 px-6 py-5 text-[17px] leading-8 text-slate-800">
            {(part.passage_segments || []).flatMap((seg, i) => {
              const q = part.questions[i]
              const text = <span key={`seg-${i}`} style={{ whiteSpace: 'pre-wrap' }}>{seg}</span>
              if (!q) return [text]
              const ua = answers[i]
              const gap = (
                <span key={`gap-${i}`} className="inline-block mx-1.5 align-baseline">
                  <span className="font-bold text-violet-600 text-base">({q.n})</span>
                  {ua && !checked && (
                    <span className="ml-1 px-1.5 py-0.5 rounded bg-violet-100 text-violet-700 text-xs font-bold align-baseline">{ua}</span>
                  )}
                  {checked && (
                    <span className={`ml-1 px-1.5 py-0.5 rounded text-xs font-medium align-baseline ${ua === q.ans ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
                      {ua || '—'}
                      {ua !== q.ans && <span className="ml-1 text-emerald-600">→{q.ans}</span>}
                    </span>
                  )}
                </span>
              )
              return [text, gap]
            })}
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">选项 A-H（其中 3 个为干扰项）</div>
          <div className="space-y-2">
            {part.options.map(o => (
              <div key={o.label} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid w-8 h-8 shrink-0 place-items-center rounded-full bg-violet-600 text-sm font-extrabold text-white">{o.label}</span>
                  <p className="min-w-0 flex-1 text-[15px] leading-7 text-slate-700">{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">答题</div>
        {part.questions.map((q, i) => {
          if (!visibleIndexes.includes(i)) return null
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-600 w-16 flex-shrink-0">第 {q.n} 题</span>
              <div className="grid flex-1 grid-cols-8 gap-1.5 min-w-0">
                {part.options.map(o => {
                  const selected = answers[i] === o.label
                  return (
                    <button key={o.label} type="button" disabled={checked} onClick={() => pick(i, o.label)}
                      className={`w-full h-9 sm:h-10 min-w-0 rounded-lg border-2 font-bold text-sm transition ${checked && q.ans === o.label ? 'border-emerald-500 bg-emerald-100 text-emerald-800' : checked && selected ? 'border-rose-400 bg-rose-100 text-rose-700' : selected ? 'border-violet-500 bg-violet-50 text-violet-800' : 'border-slate-200 text-slate-600 hover:border-violet-300'}`}>
                      {o.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={visibleIndexes.some(i => answers[i] === null)} onClick={submit}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '完成阅读模考 →' : '完成本 Part →'}
        </button>
      </div>
    </div>
  )
}

/* ── Part 5 渲染：完型填空 MCQ 4 选项 ── */
function PetPart5ClozeMCQ({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const visibleIndexes = useMemo(() => part.questions.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [part.questions, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => initialAnswers ? [...initialAnswers] : Array(part.questions.length).fill(null))
  const [checked, setChecked] = useState(false)

  function pick(i, idx) { if (checked) return; setAnswers(a => { const n = [...a]; n[i] = idx; return n }) }
  function submit() { setChecked(true); onDone(answers) }

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2 items-start">
        <div className="min-w-0">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">文章（6 处空缺）</div>
          <div className="rounded-2xl bg-slate-50 px-6 py-5 text-[17px] leading-8 text-slate-800 whitespace-pre-line">
            {(part.passage_segments || []).join('\n')}
          </div>
        </div>
        <div className="space-y-3">
          {part.questions.map((q, i) => {
            if (!visibleIndexes.includes(i)) return null
            return (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-extrabold text-slate-700 mb-2">第 {q.n} 题</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {q.opts.map((opt, idx) => {
                    const selected = answers[i] === idx
                    return (
                      <button key={idx} type="button" disabled={checked} onClick={() => pick(i, idx)}
                        className={`rounded-xl border-2 px-3 py-2 text-left text-[15px] font-semibold leading-6 transition ${checked && q.ans === idx ? 'border-emerald-500 bg-emerald-100 text-emerald-800' : checked && selected ? 'border-rose-400 bg-rose-100 text-rose-700' : selected ? 'border-violet-500 bg-violet-50 text-violet-800' : 'border-slate-200 text-slate-700 hover:border-violet-300'}`}>
                        <strong className="mr-1">{ABCD[idx]}.</strong>{opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={visibleIndexes.some(i => answers[i] === null)} onClick={submit}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '完成阅读模考 →' : '完成本 Part →'}
        </button>
      </div>
    </div>
  )
}

/* ── Part 6 渲染：开放完型填空（1 词） ── */
function PetPart6OpenCloze({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const visibleIndexes = useMemo(() => part.questions.map((_, i) => i).filter(i => !redoOnly || initialAnswers?.[i] == null || String(initialAnswers[i]).trim() === ''), [part.questions, redoOnly, initialAnswers])
  const [answers, setAnswers] = useState(() => initialAnswers ? [...initialAnswers] : Array(part.questions.length).fill(''))
  const [checked, setChecked] = useState(false)

  function set(i, v) { if (checked) return; setAnswers(a => { const n = [...a]; n[i] = v; return n }) }
  function submit() { setChecked(true); onDone(answers) }

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2 items-start">
        <div className="min-w-0">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">文章（6 处空缺）</div>
          <div className="rounded-2xl bg-slate-50 px-6 py-5 text-[17px] leading-8 text-slate-800 whitespace-pre-line">
            {(part.passage_segments || []).join('\n')}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {part.questions.map((q, i) => {
            if (!visibleIndexes.includes(i)) return null
            const userAns = (answers[i] || '').trim()
            const correct = checked && (q.ans || []).some(a => a.trim().toLowerCase() === userAns.toLowerCase())
            return (
              <div key={i} className={`flex items-center gap-2 border rounded-xl px-3 py-2.5 ${!checked ? 'border-slate-200 focus-within:border-violet-400' : correct ? 'border-emerald-300 bg-emerald-50' : 'border-rose-300 bg-rose-50'}`}>
                <span className={`text-xs font-extrabold w-8 flex-shrink-0 ${checked ? correct ? 'text-emerald-600' : 'text-rose-500' : 'text-violet-600'}`}>({q.n})</span>
                <input type="text" disabled={checked} value={answers[i]} onChange={e => set(i, e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-1 text-base font-semibold text-center focus:outline-none focus:border-violet-500" placeholder="填词…" />
                {checked && !correct && <span className="text-xs text-emerald-600 font-semibold flex-shrink-0">{q.ans[0]}</span>}
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-6 text-right">
        <button type="button" disabled={visibleIndexes.some(i => !answers[i]?.trim())} onClick={submit}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-extrabold text-white disabled:bg-slate-200 disabled:text-slate-400">
          {isLast ? '完成阅读模考 →' : '完成本 Part →'}
        </button>
      </div>
    </div>
  )
}

/* PetReadingPartRouter —— 按 part.type 分流 */
function PetReadingPartRouter({ part, initialAnswers, redoOnly, isLast, onDone }) {
  const shared = { part, initialAnswers, redoOnly, isLast, onDone }
  if (part.type === 'pet_notice_mcq')  return <PetPart1Notice {...shared} />
  if (part.type === 'pet_person_match') return <PetPart2PersonMatch {...shared} />
  if (part.type === 'pet_article_mcq') return <PetPart3ArticleMCQ {...shared} />
  if (part.type === 'pet_gapped_text') return <PetPart4GappedText {...shared} />
  if (part.type === 'pet_cloze_mcq')   return <PetPart5ClozeMCQ {...shared} />
  if (part.type === 'pet_open_cloze')  return <PetPart6OpenCloze {...shared} />
  return null
}

/* PetReadingExam —— 含计时/进度保存/交卷/分 Part 得分/错题查看/只重做错题/刷新恢复 */
export function PetReadingExam({ testN, kind = 'mock' }) {
  const test = resolvePetPaper(kind, 'reading', testN)
  const parts = useMemo(() => adaptPetReadingTest(test), [test])
  const TOTAL_MINUTES = 45
  const progressKey = kind === 'sample'
    ? `mars_pet_sample_progress_v1:test${testN}:reading`
    : kind === 'standard'
      ? `mars_pet_standard_progress_v1:test${testN}:reading`
      : kind === 'trainer1'
        ? `mars_pet_trainer1_progress_v1:test${testN}:reading`
        : kind === 'trainer2'
          ? `mars_pet_trainer2_progress_v1:test${testN}:reading`
          : `mars_pet_exam_progress_v1:test${testN}:reading`
  const [savedProgress] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem(progressKey) || 'null')
      return value && typeof value === 'object' ? value : {}
    } catch { return {} }
  })
  const [partIndex, setPartIndex] = useState(() => Math.min(savedProgress.partIndex || 0, parts.length - 1))
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

  function redoMistakes() {
    const nextAnswers = { ...allAnswers }
    let firstWrongPart = null
    parts.forEach((part, index) => {
      const answers = [...(allAnswers[index] || [])]
      let hasWrong = false
      part.questions.forEach((q, questionIndex) => {
        const value = answers[questionIndex]
        let isRight
        if (part.type === 'pet_open_cloze') {
          isRight = (q.ans || []).some(a => a.trim().toLowerCase() === String(value || '').trim().toLowerCase())
        } else {
          isRight = value === q.ans
        }
        if (!isRight) {
          answers[questionIndex] = part.type === 'pet_open_cloze' ? '' : null
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
    const wrongCounts = Object.fromEntries(Object.entries(updated).map(([index, values]) => [index, countPetReadingMistakes(parts[Number(index)], values)]))
    const nextPartIndex = parts.findIndex((candidate, index) => index > partIndex && (!redoOnly || index < parts.length) && (
      !updated[index] || candidate.questions.some((_, questionIndex) => {
        const v = updated[index][questionIndex]
        return v === null || v === undefined || String(v).trim() === ''
      })
    ))
    setAllAnswers(updated)
    if (nextPartIndex === -1) {
      const finishedAt = Date.now()
      const finalPausedMs = totalPausedMs + (pausedAt ? finishedAt - pausedAt : 0)
      setTimerSeconds(Math.max(0, Math.floor((finishedAt - startedAt - finalPausedMs) / 1000)))
      syncPetWrongBook(kind, testN, 'reading', parts, updated, petReadingWrongMap)
      setDone(true)
      saveProgress({ partIndex, allAnswers: updated, wrongCounts, done: true, finishedAt, pausedAt: null, totalPausedMs: finalPausedMs })
    } else {
      setPartIndex(nextPartIndex)
      saveProgress({ partIndex: nextPartIndex, allAnswers: updated, wrongCounts, done: false })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (done) return <PetReadingFinalResult parts={parts} allAnswers={allAnswers} elapsed={timerSeconds} onRestart={resetReading} onRedoWrong={redoMistakes} testN={testN} kind={kind} />

  const part = parts[partIndex]
  return (
    <PetExamShell testN={testN} section="reading" kind={kind} parts={parts} partIndex={partIndex} allAnswers={allAnswers}
      onReset={resetReading} timerSeconds={timerSeconds} timerPaused={Boolean(pausedAt)} onToggleTimer={toggleTimer} totalMinutes={TOTAL_MINUTES}>
      <AnimatePresence mode="wait">
        <motion.div key={partIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          {redoOnly && <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm font-extrabold text-amber-800">错题重做模式 · 本页只显示上次答错的题</div>}
          <PetReadingPartRouter part={part} initialAnswers={allAnswers[partIndex]} redoOnly={redoOnly} isLast={redoOnly ? !parts.some((cand, index) => index > partIndex && cand.questions.some((_, qi) => { const v = allAnswers[index]?.[qi]; return v === null || v === undefined || String(v).trim() === '' })) : partIndex + 1 >= parts.length} onDone={handlePartDone} />
        </motion.div>
      </AnimatePresence>
    </PetExamShell>
  )
}

/* PetReadingFinalResult —— 阅读模考最终结果 */
function PetReadingFinalResult({ parts, allAnswers, elapsed, onRestart, onRedoWrong, testN, kind = 'mock' }) {
  const [level, setLevel] = useExamLevel()
  const [showReview, setShowReview] = useState(false)

  const partScores = parts.map((part, pi) => {
    const ans = allAnswers[pi] || []
    if (part.type === 'pet_notice_mcq' || part.type === 'pet_article_mcq' || part.type === 'pet_cloze_mcq') {
      const results = part.questions.map((q, i) => ans[i] === q.ans)
      const review = part.questions.map((q, i) => ({
        n: q.n, question: part.type === 'pet_notice_mcq' ? q.content.slice(0, 60) : q.text,
        userAns: ans[i] != null ? (part.type === 'pet_article_mcq' || part.type === 'pet_cloze_mcq' ? ABCD[ans[i]] : ABC[ans[i]]) : '—',
        correctAns: part.type === 'pet_article_mcq' || part.type === 'pet_cloze_mcq' ? ABCD[q.ans] : ABC[q.ans],
        isRight: results[i],
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }
    if (part.type === 'pet_person_match' || part.type === 'pet_gapped_text') {
      const results = part.questions.map((q, i) => ans[i] === q.ans)
      const review = part.questions.map((q, i) => ({
        n: q.n, question: part.type === 'pet_person_match' ? (part.people.find(p => p.n === q.n)?.name || q.person) : `Gap [${q.n}]`,
        userAns: ans[i] || '—', correctAns: q.ans,
        isRight: results[i],
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }
    if (part.type === 'pet_open_cloze') {
      const results = part.questions.map((q, i) => (q.ans || []).some(a => a.trim().toLowerCase() === (ans[i] || '').trim().toLowerCase()))
      const review = part.questions.map((q, i) => ({
        n: q.n, question: `Gap (${q.n})`,
        userAns: ans[i] || '—', correctAns: q.ans[0],
        correctFull: q.ans.length > 1 ? `也可以: ${q.ans.slice(1).join(' / ')}` : null,
        isRight: results[i],
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }
    return { part, correct: 0, total: 0, review: [] }
  })

  const total = partScores.reduce((s, p) => s + p.total, 0)
  const correct = partScores.reduce((s, p) => s + p.correct, 0)
  const pct = total ? Math.round(correct / total * 100) : 0
  const wrongAnswers = partScores.flatMap(({ part, review }) => review.filter(item => !item.isRight).map(item => ({ part, ...item })))

  return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="rounded-[28px] border border-violet-200 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="text-5xl">📖</div>
            <div className="mt-4 text-xs font-extrabold tracking-[.18em] text-violet-700">PET READING RESULT</div>
            <h1 className="mt-2 text-4xl font-extrabold text-slate-950">阅读模考完成</h1>
            <div className="mt-3 text-sm font-bold text-slate-500">用时 {DURATION_LABEL(elapsed)}</div>
            <div className="mt-6 text-6xl font-black text-violet-700">{correct}<span className="text-2xl text-slate-400"> / {total}</span></div>
            <div className="mt-2 text-sm font-extrabold text-slate-500">阅读客观题正确率 {pct}%</div>
            <div className="mx-auto mt-7 grid max-w-3xl grid-cols-3 sm:grid-cols-6 gap-2">
              {partScores.map(({ part, correct: score, total: partTotal }) => (
                <div key={part.part} className="rounded-xl bg-slate-50 px-2 py-3">
                  <div className="text-xs text-slate-400">Part {part.part}</div>
                  <strong className="mt-1 block text-lg text-slate-800">{score}/{partTotal}</strong>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={() => setShowReview(v => !v)} className="rounded-xl bg-amber-400 px-5 py-3 font-extrabold text-amber-900">{showReview ? '收起错题解析' : `查看错题与答案（${wrongAnswers.length}）`}</button>
              {wrongAnswers.length > 0 && <button type="button" onClick={onRedoWrong} className="rounded-xl border border-violet-700 bg-violet-50 px-5 py-3 font-extrabold text-violet-800">重做错题（{wrongAnswers.length}）</button>}
              <button type="button" onClick={onRestart} className="rounded-xl border border-slate-200 px-5 py-3 font-extrabold text-slate-600">重新作答</button>
              <Link to={`/cambridge/exams/${paperId(kind, testN)}`} className="rounded-xl bg-violet-700 px-5 py-3 font-extrabold text-white">返回总览</Link>
            </div>
          </div>
          {showReview && (
            <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="text-xs font-extrabold tracking-[.16em] text-violet-700">WRONG ANSWER REVIEW</div>
              <h2 className="mt-1 text-2xl font-extrabold text-slate-950">错题与正确答案</h2>
              <p className="mt-2 text-sm text-slate-500">共 {wrongAnswers.length} 道错题，按照 Part 和题号排列。</p>
              <div className="mt-6 space-y-4">
                {wrongAnswers.map((item, index) => (
                  <article key={`${item.part.part}-${item.n}-${index}`} className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-extrabold text-rose-700">Part {item.part.part} · 第 {item.n} 题</span>
                      <strong className="text-base text-slate-900">{item.question}</strong>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-rose-200 bg-white p-4"><div className="text-xs font-bold text-slate-400">你的答案</div><strong className="mt-1 block text-rose-700">{item.userAns}</strong></div>
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"><div className="text-xs font-bold text-emerald-600">正确答案</div><strong className="mt-1 block text-emerald-800">{item.correctAns}{item.correctFull ? ` · ${item.correctFull}` : ''}</strong></div>
                    </div>
                  </article>
                ))}
                {wrongAnswers.length === 0 && <div className="rounded-2xl bg-emerald-50 p-6 text-center font-extrabold text-emerald-700">全部答对，没有错题 🎉</div>}
              </div>
            </section>
          )}
        </motion.div>
      </main>
    </CambridgeLayout>
  )
}
