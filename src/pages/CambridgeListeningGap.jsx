import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { LISTENING_GAP_EXERCISES } from '../data/listeningGapData'

export default function CambridgeListeningGap() {
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const [exerciseNumber, setExerciseNumber] = useState(() => {
    try { return Number(localStorage.getItem('mars_ket_gap_progress_v1:last')) || 1 } catch { return 1 }
  })
  const [rate, setRate] = useState(1)
  const [responses, setResponses] = useState(Array(5).fill(''))
  const [checked, setChecked] = useState(Array(5).fill(false))
  const [submitted, setSubmitted] = useState(false)
  const [clozeResponses, setClozeResponses] = useState({})
  const [clozeSubmitted, setClozeSubmitted] = useState(false)
  const [completedExercises, setCompletedExercises] = useState(() => {
    const values = new Set()
    try {
      for (let number = 1; number <= 15; number += 1) {
        const item = JSON.parse(localStorage.getItem(`mars_ket_gap_progress_v1:exercise-${number}`) || 'null')
        if (item?.completed) values.add(number)
      }
    } catch { /* storage may be unavailable */ }
    return values
  })
  const audioRef = useRef(null)
  const hydratedRef = useRef(false)
  const current = useMemo(() => LISTENING_GAP_EXERCISES.find(item => item.exerciseNumber === exerciseNumber), [exerciseNumber])

  useEffect(() => {
    hydratedRef.current = false
    let saved = null
    try { saved = JSON.parse(localStorage.getItem(`mars_ket_gap_progress_v1:exercise-${exerciseNumber}`) || 'null') } catch { /* storage may be unavailable */ }
    setResponses(Array(5).fill(''))
    setChecked(Array(5).fill(false))
    setSubmitted(false)
    setClozeResponses(saved?.responses || {})
    setClozeSubmitted(saved?.submitted === true)
    try { localStorage.setItem('mars_ket_gap_progress_v1:last', String(exerciseNumber)) } catch { /* storage may be unavailable */ }
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0 }
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const ready = window.setTimeout(() => { hydratedRef.current = true }, 0)
    return () => window.clearTimeout(ready)
  }, [exerciseNumber])

  useEffect(() => {
    if (!hydratedRef.current) return
    try {
      localStorage.setItem(`mars_ket_gap_progress_v1:exercise-${exerciseNumber}`, JSON.stringify({
        responses: clozeResponses,
        submitted: clozeSubmitted,
        completed: clozeSubmitted,
        updatedAt: new Date().toISOString(),
      }))
    } catch { /* storage may be unavailable */ }
  }, [clozeResponses, clozeSubmitted, exerciseNumber])

  useEffect(() => { if (audioRef.current) audioRef.current.playbackRate = rate }, [rate, current])

  function normalise(value) { return String(value).toLowerCase().replace(/[^a-z0-9]/g, '') }
  function isCorrect(index) {
    const accepted = Array.isArray(current.answers[index]) ? current.answers[index] : [current.answers[index]]
    return accepted.some(answer => normalise(answer) === normalise(responses[index]))
  }
  function updateResponse(index, value) {
    setResponses(items => items.map((item, itemIndex) => itemIndex === index ? value : item))
    setChecked(items => items.map((item, itemIndex) => itemIndex === index ? false : item))
    setSubmitted(false)
  }
  function checkOne(index) {
    if (!responses[index].trim()) return
    setChecked(items => items.map((item, itemIndex) => itemIndex === index ? true : item))
  }
  function submitAll() { setChecked(Array(5).fill(true)); setSubmitted(true) }
  const clozeAnswers = useMemo(() => current.cloze ? current.cloze.flatMap((question, questionIndex) => question.lines.flatMap((line, lineIndex) => line.parts.flatMap((part, partIndex) => typeof part === 'object' ? [{ key: `${questionIndex}-${lineIndex}-${partIndex}`, answer: part.answer }] : []))) : [], [current])
  function clozeIsCorrect(item) { return normalise(clozeResponses[item.key] || '') === normalise(item.answer) }
  function submitCloze() {
    setClozeSubmitted(true)
    setCompletedExercises(values => new Set([...values, exerciseNumber]))
  }

  function resetExercise() {
    try { localStorage.removeItem(`mars_ket_gap_progress_v1:exercise-${exerciseNumber}`) } catch { /* storage may be unavailable */ }
    setClozeResponses({})
    setClozeSubmitted(false)
    setCompletedExercises(values => {
      const next = new Set(values)
      next.delete(exerciseNumber)
      return next
    })
  }

  function nextTask() {
    setExerciseNumber(number => number < 15 ? number + 1 : 1)
  }

  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <nav className="flex items-center gap-3 border-b border-gray-100 bg-white px-6 py-3 text-sm">
        <Link to="/cambridge/listening" className="rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 font-extrabold text-[#735500] hover:bg-[#fff2c9]">← 我的听力中心</Link>
        <span className="text-gray-300">›</span><span className="font-extrabold text-gray-700">听力挖空练习</span>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-7 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div><div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">KET LISTENING GAP PRACTICE</div><h1 className="mt-1 text-4xl font-extrabold tracking-tight text-gray-950">听力挖空练习</h1><p className="mt-2 text-base text-gray-500">听完整录音，在原文空格中输入内容；提交后在每个空格旁核对正确答案。</p></div>
          <div className="flex gap-2"><span className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700">15 套练习</span><span className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700">15 组音频</span></div>
        </div>

        <section className="mt-6 rounded-[22px] border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-3 text-xs font-extrabold tracking-wider text-gray-400">选择练习</div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-8">{LISTENING_GAP_EXERCISES.map(item => <button key={item.exerciseNumber} onClick={() => setExerciseNumber(item.exerciseNumber)} className={`rounded-xl border px-3 py-2.5 text-sm font-extrabold transition ${exerciseNumber === item.exerciseNumber ? 'border-[#e4b83f] bg-[#f7cd60] text-[#4c3a00] shadow-sm' : completedExercises.has(item.exerciseNumber) ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-gray-200 bg-white text-gray-600 hover:border-[#e4b83f] hover:bg-[#fffaf0]'}`}>{completedExercises.has(item.exerciseNumber) ? '✓ ' : ''}{item.label}</button>)}</div>
        </section>

        <section className="sticky top-3 z-40 mt-5 rounded-[20px] border border-white/10 bg-[#064e3b]/[.97] p-3 text-white shadow-[0_12px_35px_rgba(6,78,59,.22)] backdrop-blur-md lg:px-5 lg:py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center"><div className="flex min-w-[120px] items-center gap-3 md:block"><div className="text-[10px] font-bold tracking-wider text-[#f7cd60]">LISTENING</div><h2 className="text-lg font-extrabold md:mt-0.5">练习{exerciseNumber}</h2></div><audio ref={audioRef} key={current.audio} controls preload="metadata" className="h-10 w-full flex-1" src={current.audio} /><div className="flex shrink-0 gap-1.5">{[0.75,1,1.25].map(value => <button key={value} onClick={() => setRate(value)} className={`rounded-lg px-2.5 py-2 text-xs font-bold ${rate === value ? 'bg-[#f7cd60] text-[#4c3a00]' : 'bg-white/10 text-white hover:bg-white/20'}`}>{value}×</button>)}</div></div>
          <p className="mt-2 hidden border-t border-white/10 pt-2 text-xs leading-relaxed text-white/65 lg:block">随页面固定 · 可随时暂停、拖动进度或调整播放速度</p>
        </section>

        {current.cloze ? <section className="mt-5 overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm">
          <div className="flex items-start justify-between border-b border-gray-100 px-6 py-5"><div><div className="text-xs font-extrabold tracking-wider text-emerald-700">边听边填写</div><h3 className="mt-1 text-2xl font-extrabold text-gray-950">练习{exerciseNumber}</h3><p className="mt-2 text-sm text-gray-500">播放上方音频，在对话中的空格里直接输入听到的内容。</p></div><span className="rounded-full bg-[#fff4cf] px-3 py-1 text-xs font-extrabold text-[#7a5900]">{clozeAnswers.length} 个空格</span></div>
          <div className="divide-y divide-gray-100">{current.cloze.map((question, questionIndex) => <article key={question.title} className="px-6 py-6"><h4 className="text-xl font-extrabold text-rose-600 underline decoration-2 underline-offset-4">{questionIndex + 1}. {question.title}</h4><div className="mt-5 space-y-4">{question.lines.map((line, lineIndex) => <div key={lineIndex} className={`grid gap-2 ${line.speaker ? 'sm:grid-cols-[100px_1fr]' : 'sm:grid-cols-1'}`}>{line.speaker && <strong className="pt-2 text-lg text-gray-900">{line.speaker}:</strong>}<p className="flex flex-wrap items-center gap-x-2 gap-y-2 text-lg leading-[2.5] text-gray-800">{line.parts.map((part, partIndex) => { if (typeof part === 'string') return <span key={partIndex}>{part}</span>; const key = `${questionIndex}-${lineIndex}-${partIndex}`; const item = { key, answer: part.answer }; const done = clozeSubmitted; const right = done && clozeIsCorrect(item); return <span key={key} className="inline-flex flex-row flex-wrap items-center gap-2"><input value={clozeResponses[key] || ''} onChange={event => { setClozeResponses(values => ({ ...values, [key]: event.target.value })); setClozeSubmitted(false) }} aria-label={`第${questionIndex + 1}题空格`} className={`h-11 min-w-[150px] rounded-lg border-0 border-b-[3px] bg-gray-50 px-3 text-lg font-bold outline-none transition focus:bg-emerald-50 ${done ? right ? 'border-emerald-500 text-emerald-800' : 'border-rose-400 text-rose-700' : 'border-emerald-500 text-gray-900'}`} />{done && <span className={`rounded-lg px-2.5 py-1 text-sm font-extrabold leading-normal ${right ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>正确答案：{part.answer}</span>}</span> })}</p></div>)}</div></article>)}</div>
          <div className="border-t border-gray-100 p-5"><div className="flex flex-col gap-3 sm:flex-row"><button onClick={submitCloze} disabled={clozeAnswers.some(item => !(clozeResponses[item.key] || '').trim())} className="flex-1 rounded-xl bg-[#064e3b] px-5 py-4 text-lg font-extrabold text-white transition hover:bg-[#07634b] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400">提交全部填空</button><button onClick={resetExercise} className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-extrabold text-gray-500 hover:border-rose-200 hover:text-rose-600">重新开始</button></div>{clozeSubmitted && <div className="mt-3 rounded-xl bg-[#fff8e7] px-4 py-3 text-center"><strong className="text-xl text-[#735500]">{clozeAnswers.filter(clozeIsCorrect).length} / {clozeAnswers.length}</strong><div className="mt-0.5 text-xs font-bold text-[#8a6a19]">本组填写正确的空格</div></div>}</div>
        </section> : <section className="mt-5 rounded-[24px] border border-amber-200 bg-[#fffaf0] px-6 py-12 text-center shadow-sm"><div className="text-sm font-extrabold tracking-wider text-[#987000]">正在按 PDF 原文校对</div><h3 className="mt-2 text-2xl font-extrabold text-gray-950">练习{exerciseNumber} 暂不展示</h3><p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-gray-600">旧版简化题目已经删除。本练习将在完整原文、所有挖空位置和对应答案逐项核对后开放。</p></section>}

        <div className="mt-6 flex items-center justify-between rounded-[22px] border border-gray-200 bg-white p-4"><div><div className="text-xs font-bold text-gray-400">当前进度</div><div className="mt-1 font-extrabold text-gray-800">练习 {exerciseNumber} / 15</div></div><button onClick={nextTask} className="rounded-xl bg-[#064e3b] px-6 py-3 font-extrabold text-white hover:bg-[#07634b]">下一套练习 →</button></div>
      </main>
    </CambridgeLayout>
  )
}
