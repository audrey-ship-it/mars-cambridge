import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CambridgeLayout } from './CambridgeApp'
import { ALL_KET_READING_TESTS } from '../data/ketReadingCatalog'
import { ketPart5Sets, PART5_GROUPS } from '../data/ketPart5Extras'

const PART_LABELS = { 1: 'Part 1', 2: 'Part 2', 3: 'Part 3', 4: 'Part 4', 5: 'Part 5' }
const PART_DESC   = { 1: '短文选义', 2: '人物配对', 3: '长文阅读', 4: '选词填空', 5: '语法填词' }
const PART_HELP   = {
  1: '阅读六则短通知、信息或告示，从 A、B、C 中选择正确含义。',
  2: '阅读三段人物或地点介绍，根据题目选择 A、B 或 C。',
  3: '阅读一篇较长文章，根据文章内容完成五道选择题。',
  4: '阅读短文，为每个空选择最恰当的单词。',
  5: '根据上下文，在每个空中填写一个正确的单词。'
}
function HighlightableText({ text, storageKey, className = '' }) {
  const boxRef = useRef(null)
  const [marks, setMarks] = useState([])
  const [selection, setSelection] = useState(null)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`ket_read_highlights_${storageKey}`) || '[]')
      setMarks(Array.isArray(saved) ? saved : [])
    } catch {
      setMarks([])
    }
    setSelection(null)
  }, [storageKey])

  function save(next) {
    setMarks(next)
    try { localStorage.setItem(`ket_read_highlights_${storageKey}`, JSON.stringify(next)) } catch { /* storage unavailable */ }
  }

  function captureSelection() {
    const selected = window.getSelection()
    const container = boxRef.current
    if (!selected || selected.rangeCount === 0 || !container) return
    const range = selected.getRangeAt(0)
    if (range.collapsed || !container.contains(range.commonAncestorContainer)) return

    const before = range.cloneRange()
    before.selectNodeContents(container)
    before.setEnd(range.startContainer, range.startOffset)
    const start = before.toString().length
    const end = start + range.toString().length
    if (end > start) setSelection({ start, end })
  }

  function addMark() {
    if (!selection) return
    const merged = [...marks, selection]
      .sort((a, b) => a.start - b.start)
      .reduce((list, mark) => {
        const last = list[list.length - 1]
        if (last && mark.start <= last.end) last.end = Math.max(last.end, mark.end)
        else list.push({ ...mark })
        return list
      }, [])
    save(merged)
    setSelection(null)
    window.getSelection()?.removeAllRanges()
  }

  function removeMark(index) {
    save(marks.filter((_, i) => i !== index))
  }

  const pieces = []
  let cursor = 0
  marks.forEach((mark, index) => {
    if (cursor < mark.start) pieces.push(<span key={`text-${cursor}`}>{text.slice(cursor, mark.start)}</span>)
    pieces.push(
      <mark key={`mark-${index}`} onClick={() => removeMark(index)} title="点击取消标黄"
        className="cursor-pointer rounded-sm bg-yellow-200 px-0.5 text-inherit decoration-transparent hover:bg-yellow-300">
        {text.slice(mark.start, mark.end)}
      </mark>
    )
    cursor = mark.end
  })
  if (cursor < text.length) pieces.push(<span key={`text-${cursor}`}>{text.slice(cursor)}</span>)

  return (
    <div className="relative">
      {selection && (
        <button onMouseDown={e => e.preventDefault()} onClick={addMark}
          className="absolute -top-10 right-0 z-10 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-bold text-white shadow-lg hover:bg-slate-700">
          🖍 标黄
        </button>
      )}
      <p ref={boxRef} onMouseUp={captureSelection} className={className}>{pieces}</p>
    </div>
  )
}

// Build one batch per official test and preserve source-scan page metadata.
function buildBatches(partId) {
  return ALL_KET_READING_TESTS.map((t, ti) => {
    const p = t[`part${partId}`]
    if (!p) return null
    return { ...p, testTitle: t.title, source: t.source, questions: (p.questions || []).map(q => ({ ...q, _key: `${ti}_${q.id}` })) }
  }).filter(Boolean)
}

export default function CambridgeReading() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const [partId,       setPartId]       = useState(() => {
    const requested = Number(searchParams.get('part'))
    return Number.isInteger(requested) && requested >= 1 && requested <= 5 ? requested : 1
  })
  const [part5Mode,    setPart5Mode]    = useState('official')
  const [part5Id,      setPart5Id]      = useState(1)
  const [batchIdx,     setBatchIdx]     = useState(0)
  const [answers,      setAnswers]      = useState({})
  const [batchChecked, setBatchChecked] = useState(false)
  const [retrying,     setRetrying]     = useState({})  // _key → true
  const [showAns,      setShowAns]      = useState({})  // _key → true
  // Part 5 only
  const [p5Checked,    setP5Checked]    = useState(false)
  const [p5Score,      setP5Score]      = useState(null)
  // Timer
  const [timer,    setTimer]   = useState(60 * 60)
  const [timerOn,  setTimerOn] = useState(false)
  const timerRef = useRef(null)

  const isPart5 = partId === 5

  // ── Batches for Parts 1-4 ──────────────────────────────
  const batches      = isPart5 ? [] : buildBatches(partId)
  const currentBatch = batches[batchIdx] || null

  // ── Part 5 data ────────────────────────────────────────
  const verifiedTests = ALL_KET_READING_TESTS.filter(test => test.part5 && (test.source?.verified || test.source?.verifiedParts?.includes(5)))
  const officialP5Test = verifiedTests.find(test => test.id === part5Id)
  const p5Set  = part5Mode === 'official'
    ? (officialP5Test ? { ...officialP5Test.part5, source: officialP5Test.title } : null)
    : ketPart5Sets.find(s => s.id === part5Id)
  const p5Part = p5Set ? {
    instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
    example: p5Set.example, passages: p5Set.passages, questions: p5Set.questions,
    scanPages: p5Set.scanPages,
  } : null

  // ── Timer ──────────────────────────────────────────────
  useEffect(() => {
    if (timerOn && timer > 0) {
      timerRef.current = setInterval(() => setTimer(t => t - 1), 1000)
    } else { clearInterval(timerRef.current) }
    return () => clearInterval(timerRef.current)
  }, [timerOn, timer])

  const fmtTime = s =>
    `${String(Math.floor(s / 60)).padStart(2,'0')}:${String(s % 60).padStart(2,'0')}`

  // ── Reset on part / batch / p5 set change ─────────────
  useEffect(() => {
    setAnswers({})
    setBatchChecked(false)
    setRetrying({})
    setShowAns({})
  }, [partId, batchIdx])

  useEffect(() => {
    setP5Checked(false)
    setP5Score(null)
    setAnswers({})
  }, [part5Id, part5Mode])

  // ── Helpers ────────────────────────────────────────────
  function isCorrect14(q) {
    const ua = (answers[q._key] || '').trim().toLowerCase()
    return ua === (q.answer || '').toLowerCase()
  }

  function isWrong14(q) {
    return batchChecked && !retrying[q._key] && answers[q._key] && !isCorrect14(q)
  }

  function handleRetry(key) {
    setAnswers(a => { const n = { ...a }; delete n[key]; return n })
    setRetrying(r => ({ ...r, [key]: true }))
    setShowAns(s => { const n = { ...s }; delete n[key]; return n })
  }

  // Batch submit
  function handleBatchCheck() {
    setBatchChecked(true)
    setRetrying({})
  }

  function handleNextBatch() {
    setBatchIdx(i => i + 1)
  }

  function handleResetBatch() {
    setAnswers({})
    setBatchChecked(false)
    setRetrying({})
    setShowAns({})
  }

  // Part 5 submit
  function handleP5Submit() {
    if (!p5Part) return
    let correct = 0, total = 0
    p5Part.questions.forEach(q => {
      total++
      const ua = (answers[q.id] || '').trim().toLowerCase()
      if (q.answers.map(a => a.toLowerCase()).includes(ua)) correct++
    })
    setP5Score({ correct, total })
    setP5Checked(true)
  }

  function isP5Correct(q) {
    const ua = (answers[q.id] || '').trim().toLowerCase()
    return q.answers.map(a => a.toLowerCase()).includes(ua)
  }

  // ── Batch stats ────────────────────────────────────────
  const batchQs       = currentBatch?.questions || []
  const batchAnswered = batchQs.filter(q => answers[q._key] && !retrying[q._key]).length
  const batchCorrect  = batchChecked ? batchQs.filter(q => isCorrect14(q)).length : 0
  const batchPct      = batchQs.length ? Math.round(batchCorrect / batchQs.length * 100) : 0

  // ── Part 5 stats ───────────────────────────────────────
  const p5Qs       = p5Part?.questions || []
  const p5Answered = p5Qs.filter(q => answers[q.id] !== undefined && answers[q.id] !== '').length
  const p5Pct      = p5Score ? Math.round(p5Score.correct / p5Score.total * 100) : 0

  // ── Stimulus type icons ────────────────────────────────
  // ── Components ─────────────────────────────────────────

  function MCOption({ q, opt, label, exam = false, large = false }) {
    const key      = q._key
    const isRetry  = retrying[key]
    const effChk   = batchChecked && !isRetry
    const selected = answers[key] === label
    const right    = effChk && label === q.answer
    const wrong    = effChk && selected && label !== q.answer

    let cls = 'border-slate-200 bg-white hover:border-sky-400 hover:bg-sky-50'
    if (selected && !effChk) cls = 'border-sky-500 bg-sky-50'
    if (effChk) {
      if (right)        cls = 'border-emerald-500 bg-emerald-50'
      else if (wrong)   cls = 'border-red-400 bg-red-50'
      else              cls = 'border-gray-100 bg-white opacity-40'
    }

    function handleClick() {
      if (window.getSelection()?.toString().trim()) return
      if (isRetry) {
        setAnswers(a => ({ ...a, [key]: label }))
        setRetrying(r => { const n = { ...r }; delete n[key]; return n })
      } else if (!effChk) {
        setAnswers(a => ({ ...a, [key]: label }))
      }
    }

    if (exam) {
      return (
        <button
          data-word-select
          aria-disabled={effChk && !isRetry}
          onClick={handleClick}
          className={`flex items-center gap-3 sm:gap-5 w-full text-left py-2 transition-all ${effChk && !right && !wrong ? 'opacity-45' : ''}`}
        >
          <span className={`w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 border-2 shadow-sm transition-colors ${
            right ? 'border-emerald-500 bg-emerald-50' : wrong ? 'border-red-400 bg-red-50' : selected ? 'border-sky-500 bg-sky-50' : 'border-sky-500 bg-sky-50 hover:bg-sky-100'
          } flex items-center justify-center font-bold text-sm ${right ? 'text-emerald-600' : wrong ? 'text-red-500' : 'text-sky-600'}`}>
            {(right || (selected && !effChk)) ? label : ''}
          </span>
          <span className="select-text cursor-text text-[15px] sm:text-[18px] leading-snug text-[#30284d]">{opt}</span>
        </button>
      )
    }

    return (
      <button
        data-word-select
        aria-disabled={effChk && !isRetry}
        onClick={handleClick}
        className={`flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-xl border-2 transition-all ${cls}`}
      >
        <span className={`font-bold text-sm w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 ${
          right ? 'text-emerald-600 border-emerald-300 bg-emerald-50' : wrong ? 'text-red-500 border-red-300 bg-red-50' : selected ? 'text-sky-600 border-sky-300 bg-sky-50' : 'text-slate-400 border-slate-200'
        }`}>{label}</span>
        {wrong && <span className="text-red-500 text-sm flex-shrink-0">✕</span>}
        <span className={`${large ? 'text-[19px]' : 'text-[15px]'} select-text cursor-text text-slate-700 leading-snug`}>{opt}</span>
      </button>
    )
  }

  function WrongActions({ q }) {
    const key = q._key
    if (!batchChecked || !answers[key] || retrying[key] || isCorrect14(q)) return null
    if (showAns[key]) return (
      <div className="mt-2 px-3 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-700">✓ 正确答案：{q.answer}</span>
        </div>
        {q.explanation && (
          <p className="text-xs text-gray-600 leading-relaxed">{q.explanation}</p>
        )}
      </div>
    )
    return (
      <div className="mt-2 flex gap-2">
        <button onClick={() => handleRetry(key)}
          className="text-xs px-3 py-1.5 rounded-lg border border-violet-200 text-violet-600 hover:bg-violet-50 font-medium transition-all">
          再试一次
        </button>
        <button onClick={() => setShowAns(s => ({ ...s, [key]: true }))}
          className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 font-medium transition-all">
          看答案解析
        </button>
      </div>
    )
  }

  function Part1Stimulus({ q }) {
    const text = (
      <HighlightableText
        text={q.content}
        storageKey={`part1-${q._key}`}
        className="text-[18px] text-slate-900 whitespace-pre-line leading-8"
      />
    )

    if (q.type === 'email') return (
      <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-[0_14px_35px_rgba(15,23,42,.09)]">
        <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-[11px] font-bold uppercase tracking-[.16em] text-slate-400">Email</span>
        </div>
        <div className="border-b border-slate-100 px-3 sm:px-5 py-3 text-sm leading-6 text-slate-500">
          {q.from && <p><span className="inline-block w-12 text-slate-400">From</span><strong className="text-slate-800">{q.from}</strong></p>}
          {q.to && <p><span className="inline-block w-12 text-slate-400">To</span><strong className="text-slate-800">{q.to}</strong></p>}
        </div>
        <div className="px-4 sm:px-6 py-5 sm:py-7">{text}</div>
      </div>
    )

    if (q.type === 'text') return (
      <div className="mx-auto max-w-[330px] rounded-[30px] border-[7px] border-slate-800 bg-slate-50 px-4 pb-7 pt-3 shadow-[0_16px_35px_rgba(15,23,42,.15)]">
        <div className="mx-auto mb-7 h-1.5 w-16 rounded-full bg-slate-600" />
        <div className="mb-3 text-center text-xs font-bold text-slate-500">{q.from || 'Message'}</div>
        <div className="rounded-[20px_20px_6px_20px] bg-sky-100 px-5 py-5 text-left shadow-sm">{text}</div>
      </div>
    )

    if (q.type === 'ad') return (
      <div className="relative overflow-hidden rounded-2xl border-2 border-rose-300 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-100 px-7 py-10 text-center shadow-[0_14px_35px_rgba(190,24,93,.10)]">
        <span className="absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">Advertisement</span>
        <div className="pt-4 font-semibold">{text}</div>
      </div>
    )

    if (q.type === 'sign') return (
      <div className="rounded-xl border-[5px] border-slate-700 bg-slate-900 px-7 py-9 text-center shadow-[0_14px_30px_rgba(15,23,42,.18)] [&_*]:!text-white">
        {text}
      </div>
    )

    return (
      <div className="relative rounded-xl bg-[#e7d8af] p-3 sm:p-5 shadow-[0_14px_35px_rgba(71,55,25,.12)]">
        <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-red-500 shadow" />
        <div className="min-h-[220px] border border-amber-200 bg-[#fffdf6] px-3 sm:px-7 py-7 sm:py-10 text-center shadow-[0_5px_14px_rgba(71,55,25,.14)] flex items-center justify-center">
          <div>{text}</div>
        </div>
      </div>
    )
  }

  // ── Part 5 helpers ─────────────────────────────────────
  function renderPart5Passage(content) {
    return content.split(/\[(\d+)\]/).map((seg, i) => {
      if (i % 2 === 1) {
        const qId = parseInt(seg)
        const q   = p5Part?.questions.find(x => x.id === qId)
        const ua  = answers[qId] || ''
        const ok  = p5Checked ? isP5Correct(q) : null
        return (
          <span key={i} className="inline-block mx-1 align-baseline">
            {p5Checked ? (
              <span className={`px-2 py-0.5 rounded-md font-bold text-sm border ${
                ok ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                   : 'bg-red-50 border-red-400 text-red-600'
              }`}>
                {ua || '___'}
                {!ok && <span className="ml-1 text-emerald-600 font-normal">({q?.answers[0]})</span>}
              </span>
            ) : (
              <input type="text" value={ua}
                onChange={e => setAnswers(a => ({ ...a, [qId]: e.target.value }))}
                className="w-20 border-b-2 border-violet-400 bg-transparent text-center text-violet-700 font-medium focus:outline-none focus:border-violet-600 text-sm"
                placeholder={`(${qId})`}
              />
            )}
          </span>
        )
      }
      return <span key={i}>{seg}</span>
    })
  }

  function renderPart4Passage(batch) {
    return (batch.passage_segments || []).flatMap((seg, i) => {
      const q = batch.questions[i]
      const text = <span key={`text-${i}`} style={{ whiteSpace: 'pre-wrap' }}>{seg}</span>
      if (!q) return [text]
      const ua = answers[q?._key] || ''
      const ok = batchChecked ? isCorrect14(q) : null
      const gap = (
        <span key={`gap-${i}`} className="inline-block mx-1.5 align-baseline">
          <span className="font-bold text-violet-600 text-base">({q.id})</span>
          {batchChecked && (
            <span className={`ml-1 px-1.5 py-0.5 rounded text-xs font-medium ${
              ok ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'
            }`}>
              {ua || '—'}
              {!ok && <span className="ml-1 text-emerald-600">→{q?.answer}</span>}
            </span>
          )}
        </span>
      )
      return [text, gap]
    })
  }

  // ── Render ─────────────────────────────────────────────
  if (searchParams.get('view') === 'center') return (
    <CambridgeLayout activeModule="reading" level={level} setLevel={setLevel}>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="text-xs font-extrabold tracking-[.18em] text-sky-700">KET READING PRACTICE</div>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">我的阅读中心</h1>
        <p className="mt-3 text-slate-500">按题型选择专项练习；同一套题也可以在真题模考中完成。</p>
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map(pid => (
            <button key={pid} type="button" onClick={() => { setPartId(pid); setBatchIdx(0); setSearchParams({ part: String(pid) }) }}
              className="group flex min-h-44 flex-col rounded-[22px] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md">
              <span className="text-xs font-extrabold tracking-widest text-sky-700">PART {pid}</span>
              <h2 className="mt-3 text-xl font-extrabold text-slate-900">{PART_DESC[pid]}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{PART_HELP[pid]}</p>
              <span className="mt-auto pt-4 text-right text-sm font-extrabold text-sky-700">开始练习 →</span>
            </button>
          ))}
        </section>
        <Link to="/cambridge/exams" className="mt-8 inline-flex rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-extrabold text-emerald-800 hover:border-emerald-400">进入真题模考 →</Link>
      </main>
    </CambridgeLayout>
  )

  return (
    <CambridgeLayout activeModule="reading" level={level} setLevel={setLevel}>
      <nav className="border-b border-slate-100 bg-white px-4 sm:px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <Link to="/cambridge/reading?view=center" className="mr-1 rounded-xl border border-sky-300 bg-sky-50 px-4 py-2.5 text-sm font-extrabold text-sky-800">
            ← 我的阅读中心
          </Link>
          <span className="mr-1 text-slate-300">›</span>
          {[1,2,3,4,5].map(pid => (
            <button key={pid} onClick={() => { setPartId(pid); setBatchIdx(0) }}
              aria-current={partId === pid ? 'page' : undefined}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                partId === pid
                  ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-700'
              }`}
            >Part {pid}</button>
          ))}
        </div>
      </nav>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-sky-700">KET READING</div>
            <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold">{PART_LABELS[partId]} {PART_DESC[partId]}</h1>
            <p className="mt-2 text-slate-500">{PART_HELP[partId]}</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3">
            <button onClick={() => setTimerOn(t => !t)}
              className={`rounded-xl px-4 py-2 font-mono text-sm font-bold transition ${timerOn ? 'bg-sky-500 text-white' : 'bg-white text-slate-600 shadow-sm'}`}>
              ⏱ {fmtTime(timer)}
            </button>
            <div className="min-w-20 text-right text-xs text-slate-500">
              <div className="font-bold text-slate-700">{isPart5 ? p5Answered : batchAnswered} / {isPart5 ? p5Qs.length : batchQs.length}</div>
              <div>完成进度</div>
            </div>
          </div>
        </div>

        {!isPart5 && batches.length > 1 && (
          <section className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <strong className="text-sm text-slate-700">选择练习</strong>
              <span className="text-xs text-slate-400">共 {batches.length} 套 · 当前为练习{batchIdx + 1}</span>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
              {batches.map((_, i) => (
                <button key={i} onClick={() => setBatchIdx(i)}
                  aria-current={batchIdx === i ? 'page' : undefined}
                  className={`rounded-xl border px-3 py-3 text-sm font-extrabold transition ${
                    batchIdx === i
                      ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                      : 'border-sky-100 bg-sky-50 text-sky-800 hover:border-sky-300'
                  }`}
                >{i + 1}</button>
              ))}
            </div>
          </section>
        )}

        {isPart5 && (
          <section className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <strong className="text-sm text-slate-700">选择练习</strong>
              <span className="text-xs text-slate-400">共 {verifiedTests.length} 套 · 当前为练习{part5Id}</span>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
              {verifiedTests.map(test => (
                <button key={test.id} onClick={() => { setPart5Mode('official'); setPart5Id(test.id) }}
                  aria-current={part5Mode === 'official' && part5Id === test.id ? 'page' : undefined}
                  className={`rounded-xl border px-3 py-3 text-sm font-extrabold transition ${
                    part5Mode === 'official' && part5Id === test.id
                      ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                      : 'border-sky-100 bg-sky-50 text-sky-800 hover:border-sky-300'
                  }`}
                >{test.id}</button>
              ))}
            </div>
          </section>
        )}

      <div className="mt-6 flex gap-7">

        {/* Sidebar */}
        <aside className="hidden w-52 flex-shrink-0 space-y-4">

          {/* Timer */}
          <div className="bg-white rounded-[22px] border border-slate-200 shadow-sm p-4">
            <p className="text-[11px] font-bold text-slate-400 tracking-widest mb-2">计时器</p>
            <button onClick={() => setTimerOn(t => !t)}
              className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-xl font-mono font-bold text-sm transition-all ${
                timerOn ? timer < 300 ? 'bg-red-100 text-red-600' : 'bg-sky-100 text-sky-700'
                        : 'bg-slate-50 text-slate-500 hover:bg-sky-50 hover:text-sky-700'
              }`}>
              ⏱ {fmtTime(timer)}
            </button>
            {!isPart5 && batchQs.length > 0 && (
              <div className="mt-2.5">
                <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                  <span>进度</span>
                  <span>{batchAnswered}/{batchQs.length}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full transition-all"
                    style={{ width: batchQs.length ? `${batchAnswered/batchQs.length*100}%` : '0%' }} />
                </div>
              </div>
            )}
          </div>

          {/* Part 5 set selector */}
          {isPart5 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 space-y-3 max-h-[50vh] overflow-y-auto">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">选择套题</p>
              <div>
                <p className="text-[9px] font-bold text-emerald-600 uppercase mb-1 tracking-wider">已核验官方真题</p>
                <div className="flex flex-wrap gap-1">
                  {verifiedTests.map(test => (
                    <button key={test.id} onClick={() => { setPart5Mode('official'); setPart5Id(test.id) }}
                      className={`min-w-8 h-8 px-2 rounded-lg text-xs font-bold transition-all ${
                        part5Mode === 'official' && part5Id === test.id
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                      }`}
                    >真题 {test.id}</button>
                  ))}
                </div>
              </div>
              <p className="border-t border-gray-100 pt-2 text-[9px] font-bold text-gray-400 uppercase tracking-wider">Part 5 专项题库</p>
              {PART5_GROUPS.map(grp => (
                <div key={grp.label}>
                  <p className="text-[9px] font-bold text-gray-300 uppercase mb-1 tracking-wider truncate">{grp.label}</p>
                  <div className="flex flex-wrap gap-1">
                    {grp.ids.map(id => (
                      <button key={id} onClick={() => { setPart5Mode('practice'); setPart5Id(id) }}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                          part5Mode === 'practice' && part5Id === id
                            ? 'bg-violet-600 text-white shadow-sm'
                            : 'bg-gray-50 text-gray-500 hover:bg-violet-50 hover:text-violet-600'
                        }`}
                      >{id}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Score / progress */}
          {isPart5 ? (
            p5Score ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className={`rounded-2xl border p-4 text-center shadow-sm ${
                  p5Pct >= 80 ? 'bg-emerald-50 border-emerald-200' : p5Pct >= 50 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'
                }`}
              >
                <div className={`text-4xl font-extrabold ${p5Pct >= 80 ? 'text-emerald-600' : p5Pct >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
                  {p5Score.correct}<span className="text-xl text-gray-300 font-normal">/{p5Score.total}</span>
                </div>
                <div className="text-xs mt-1 font-semibold text-gray-500">
                  {p5Pct >= 80 ? '🎉 优秀！' : p5Pct >= 50 ? '👍 不错' : '💪 加油'}
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                <div className="text-2xl font-extrabold text-violet-600">{p5Answered}</div>
                <div className="text-xs text-gray-400 mt-0.5">/ {p5Qs.length} 已答</div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full transition-all"
                    style={{ width: p5Qs.length ? `${p5Answered/p5Qs.length*100}%` : '0%' }} />
                </div>
              </div>
            )
          ) : (
            batchChecked ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className={`rounded-2xl border p-4 text-center shadow-sm ${
                  batchPct >= 80 ? 'bg-emerald-50 border-emerald-200' : batchPct >= 50 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'
                }`}
              >
                <div className={`text-4xl font-extrabold ${batchPct >= 80 ? 'text-emerald-600' : batchPct >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
                  {batchCorrect}<span className="text-xl text-gray-300 font-normal">/{batchQs.length}</span>
                </div>
                <div className="text-xs mt-1 font-semibold text-gray-500">
                  {batchPct >= 80 ? '🎉 优秀！' : batchPct >= 50 ? '👍 不错' : '💪 加油'}
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                <div className="text-2xl font-extrabold text-violet-600">{batchAnswered}</div>
                <div className="text-xs text-gray-400 mt-0.5">/ {batchQs.length} 已答</div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full transition-all"
                    style={{ width: batchQs.length ? `${batchAnswered/batchQs.length*100}%` : '0%' }} />
                </div>
              </div>
            )
          )}
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div key={isPart5 ? `p5-${part5Mode}-${part5Id}` : `${partId}-${batchIdx}`}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}
              className="bg-white rounded-[24px] border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Part content */}
              <div className="p-4 sm:p-8">

                {/* Official source-scan layout: original paper on the left, answer sheet on the right. */}
                {partId < 5 && currentBatch?.scanPages && (
                  <div>
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm">
                      <strong className="text-emerald-900">{currentBatch.testTitle}</strong>
                      <span className="text-emerald-700">已按原书页面核验 · 左侧可放大查看</span>
                    </div>
                    <div className="space-y-8">
                      {currentBatch.scanPages.map((src, pageIndex) => {
                        const pageQuestions = partId === 1
                          ? currentBatch.questions.slice(pageIndex * 3, pageIndex * 3 + 3)
                          : pageIndex === 0 ? currentBatch.questions : []
                        return (
                        <div key={src} className="grid grid-cols-1 gap-5 border-b border-slate-200 pb-8 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,.55fr)] lg:items-start">
                          <a href={src} target="_blank" rel="noreferrer"
                            className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                            <img src={src} alt={`${currentBatch.testTitle} Part ${partId} 第 ${pageIndex + 1} 页`}
                              className="h-auto w-full" />
                          </a>
                          {pageQuestions.length > 0 && <div className="space-y-3 lg:sticky lg:top-5">
                          {pageQuestions.map(q => (
                          <div key={q._key} className={`rounded-xl border p-4 ${
                            batchChecked ? isCorrect14(q) ? 'border-emerald-300 bg-emerald-50' : 'border-red-300 bg-red-50' : 'border-slate-200'
                          }`}>
                            <div className="mb-3 flex items-center justify-between">
                              <strong className="text-slate-700">第 {q.id} 题</strong>
                              {batchChecked && <span className={`text-xs font-bold ${isCorrect14(q) ? 'text-emerald-600' : 'text-red-500'}`}>{isCorrect14(q) ? '正确' : `答案 ${q.answer}`}</span>}
                            </div>
                            <div className="flex gap-2">
                              {['A','B','C'].map(label => {
                                const selected = answers[q._key] === label
                                const correct = batchChecked && q.answer === label
                                return (
                                  <button key={label} disabled={batchChecked} onClick={() => setAnswers(a => ({ ...a, [q._key]: label }))}
                                    className={`h-11 flex-1 rounded-lg border-2 text-base font-extrabold transition ${
                                      correct ? 'border-emerald-500 bg-emerald-100 text-emerald-800'
                                        : batchChecked && selected ? 'border-red-400 bg-red-100 text-red-700'
                                        : selected ? 'border-sky-500 bg-sky-50 text-sky-700'
                                        : 'border-slate-200 text-slate-500 hover:border-sky-300'
                                    }`}>{label}</button>
                                )
                              })}
                            </div>
                          </div>
                          ))}
                          </div>}
                        </div>
                      )})}
                      {partId !== 1 && currentBatch.scanPages.length > 1 && (
                        <p className="text-center text-xs text-slate-400">答题卡固定在第一张材料页旁；向上滚动可继续作答。</p>
                      )}
                    </div>
                  </div>
                )}

                {/* ── PART 1 ── */}
                {partId === 1 && currentBatch && !currentBatch.scanPages && (
                  <div className="space-y-0">
                    {currentBatch.questions.map((q, qi) => (
                      <motion.div key={q._key}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: qi * 0.04 }}
                        className="grid grid-cols-1 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] gap-4 lg:gap-8 py-8 sm:py-10 border-b border-slate-300 last:border-b-0 items-center"
                      >
                        {/* Left: numbered stimulus box */}
                        <div className="min-w-0 w-full flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold transition-colors ${
                              batchChecked && !retrying[q._key]
                                ? isCorrect14(q) ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                                : answers[q._key] ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-700'
                            }`}>{q.id}</span>
                          </div>
                          <Part1Stimulus q={q} />
                        </div>

                        {/* Right: options + wrong actions */}
                        <div className="min-w-0 flex flex-col justify-center space-y-3">
                          <h3 className="text-[20px] font-extrabold text-[#30284d]">{q.question || 'Choose the correct answer.'}</h3>
                          {Object.entries(q.options).map(([label, opt]) => (
                            <MCOption key={label} q={q} opt={opt} label={label} exam />
                          ))}
                          <WrongActions q={q} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* ── PART 2 ── */}
                {partId === 2 && currentBatch && !currentBatch.scanPages && (
                  <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(400px,.75fr)] gap-8 items-start">
                    <div className="max-h-[125vh] space-y-4 overflow-y-auto pr-2 sticky top-5">
                      {(currentBatch.people || []).map(p => (
                        <div key={p.name} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="w-9 h-9 bg-violet-600 text-white text-base font-extrabold rounded-full flex items-center justify-center flex-shrink-0">{p.label}</span>
                            <span className="font-bold text-slate-800 text-xl">{p.name}</span>
                          </div>
                          <HighlightableText text={p.text} storageKey={`part2-${currentBatch.title}-${p.label}`}
                            className="text-[17px] text-slate-700 leading-8" />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3 sticky top-5">
                      {currentBatch.questions.map((q, qi) => (
                        <motion.div key={q._key}
                          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: qi * 0.03 }}
                          className="border border-slate-200 rounded-xl px-5 py-4 flex items-start gap-4 hover:bg-slate-50/70 transition-colors"
                        >
                          <span className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold transition-colors ${
                            batchChecked && !retrying[q._key]
                              ? isCorrect14(q) ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                              : answers[q._key] ? 'bg-violet-600 text-white' : 'bg-violet-100 text-violet-600'
                          }`}>{q.id}</span>
                          <div className="min-w-0 flex-1">
                            <p className="text-[16px] leading-6 text-slate-700">{q.text}</p>
                            <div className="mt-4 flex gap-2">
                              {(currentBatch.people || []).map(p => {
                              const sel = answers[q._key] === p.label
                              const effChk = batchChecked && !retrying[q._key]
                              let cls = 'border-gray-200 text-gray-400 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50'
                              if (sel && !effChk) cls = 'border-violet-500 bg-violet-50 text-violet-700'
                              if (effChk) {
                                if (p.label === q.answer) cls = 'border-emerald-500 bg-emerald-50 text-emerald-700'
                                else if (sel)             cls = 'border-red-400 bg-red-50 text-red-600'
                                else                      cls = 'border-gray-100 text-gray-300'
                              }
                                return (
                                  <button key={p.label} disabled={effChk && !retrying[q._key]}
                                    onClick={() => {
                                      if (retrying[q._key]) {
                                        setAnswers(a => ({ ...a, [q._key]: p.label }))
                                        setRetrying(r => { const n = { ...r }; delete n[q._key]; return n })
                                      } else if (!effChk) {
                                        setAnswers(a => ({ ...a, [q._key]: p.label }))
                                      }
                                    }}
                                    className={`w-10 h-10 rounded-lg border-2 font-bold text-base transition-all ${cls}`}
                                  >{p.label}</button>
                                )
                              })}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── PART 3 ── */}
                {partId === 3 && currentBatch && !currentBatch.scanPages && (
                  <div className="grid grid-cols-2 gap-5">
                    <div className="min-w-0 bg-gray-50 rounded-xl border border-gray-100 p-5 overflow-y-auto"
                      style={{ maxHeight: '70vh' }}>
                      {currentBatch.title && (
                        <h3 className="mb-2 text-center text-2xl font-extrabold text-gray-900">
                          {currentBatch.title}
                        </h3>
                      )}
                      {currentBatch.author && (
                        <p className="mb-5 text-center text-sm italic text-gray-500">
                          {currentBatch.author}
                        </p>
                      )}
                      <HighlightableText text={currentBatch.passage} storageKey={`part3-${batchIdx}`}
                        className="text-[19px] text-gray-700 leading-9 whitespace-pre-line" />
                    </div>
                    <div className="min-w-0 space-y-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
                      {currentBatch.questions.map((q, qi) => (
                        <motion.div key={q._key}
                          initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: qi * 0.05 }}
                        >
                          <div className="flex items-start gap-2 mb-2">
                            <span className={`w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold ${
                              batchChecked && !retrying[q._key]
                                ? isCorrect14(q) ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                                : answers[q._key] ? 'bg-violet-600 text-white' : 'bg-violet-100 text-violet-600'
                            }`}>{q.id}</span>
                            <p className="text-[19px] font-extrabold text-gray-700 leading-7">{q.text}</p>
                          </div>
                          <div className="pl-8 space-y-1.5">
                            {Object.entries(q.options).map(([label, opt]) => (
                              <MCOption key={label} q={q} opt={opt} label={label} large />
                            ))}
                            <WrongActions q={q} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── PART 4 ── */}
                {partId === 4 && currentBatch && !currentBatch.scanPages && (
                  <div className="grid grid-cols-2 gap-5">
                    <div className="min-w-0 max-h-[70vh] overflow-y-auto bg-gray-50 rounded-xl border border-gray-100 p-6 text-gray-700">
                      {currentBatch.title && (
                        <h3 className="mb-5 text-center text-2xl font-extrabold text-gray-900">
                          {currentBatch.title}
                        </h3>
                      )}
                      <div className="leading-9 text-[18px]">
                        {renderPart4Passage(currentBatch)}
                      </div>
                    </div>
                    <div className="min-w-0 max-h-[70vh] space-y-3 overflow-y-auto pr-1">
                      {currentBatch.questions.map((q, qi) => (
                        <motion.div key={q._key}
                          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: qi * 0.04 }}
                          className={`border rounded-xl p-4 transition-colors ${
                            batchChecked && !retrying[q._key]
                              ? isCorrect14(q) ? 'border-emerald-200 bg-emerald-50/40' : 'border-red-200 bg-red-50/40'
                              : 'border-gray-100'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`text-sm font-extrabold ${
                              batchChecked && !retrying[q._key]
                                ? isCorrect14(q) ? 'text-emerald-600' : 'text-red-500'
                                : 'text-violet-600'
                            }`}>({q.id})</span>
                          </div>
                          <div className="space-y-2">
                            {Object.entries(q.options).map(([label, opt]) => (
                              <MCOption key={label} q={q} opt={opt} label={label} />
                            ))}
                            <WrongActions q={q} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── PART 5 ── */}
                {partId === 5 && p5Part?.scanPages && (
                  <div>
                    <div className="mb-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-900">
                      官方原题页在左侧，答案填写区在右侧。
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
                      <div className="space-y-4">
                        {p5Part.scanPages.map(src => (
                          <a key={src} href={src} target="_blank" rel="noreferrer"
                            className="block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                            <img src={src} alt="官方真题 Part 5 原页" className="h-auto w-full" />
                          </a>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:sticky lg:top-5">
                        {p5Part.questions.map(q => {
                          const ua = answers[q.id] || ''
                          const ok = p5Checked ? isP5Correct(q) : null
                          return (
                            <label key={q.id} className={`rounded-xl border p-4 ${
                              !p5Checked ? 'border-slate-200' : ok ? 'border-emerald-300 bg-emerald-50' : 'border-red-300 bg-red-50'
                            }`}>
                              <span className="mb-2 block text-sm font-extrabold text-slate-600">第 {q.id} 题</span>
                              <div className="flex items-center gap-2">
                                <input value={ua} disabled={p5Checked} onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                                  className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-sky-400" placeholder="填写一个单词" />
                                {p5Checked && !ok && <span className="text-xs font-bold text-emerald-700">{q.answers[0]}</span>}
                              </div>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {partId === 5 && p5Part && !p5Part.scanPages && (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
                    <div className="min-w-0 space-y-4">
                      {p5Part.example && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-xl">
                          <span className="font-semibold">Example:</span>
                          <span className="bg-white px-2 py-0.5 rounded font-mono border border-gray-200">({p5Part.example.number})</span>
                          <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-medium">{p5Part.example.answer}</span>
                        </div>
                      )}
                      {(p5Part.passages || []).map((p, i) => (
                        <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                          {(p.from || p.to) && (
                            <div className="flex gap-3 mb-3 text-sm text-gray-500 pb-2 border-b border-gray-200">
                              {p.from && <span>📧 <span className="font-bold text-gray-700">{p.from}</span></span>}
                              {p.to   && <span>→ <span className="font-bold text-gray-700">{p.to}</span></span>}
                            </div>
                          )}
                          <p className="text-[18px] text-gray-700 leading-9 whitespace-pre-line">{renderPart5Passage(p.content)}</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:sticky xl:top-5">
                      {p5Part.questions.map(q => {
                        const ua = answers[q.id] || ''
                        const ok = p5Checked ? isP5Correct(q) : null
                        return (
                          <div key={q.id} className={`flex items-center gap-2 border rounded-xl px-3 py-2.5 transition-all ${
                            !p5Checked ? 'border-gray-200 focus-within:border-violet-400'
                            : ok       ? 'border-emerald-300 bg-emerald-50'
                                       : 'border-red-300 bg-red-50'
                          }`}>
                            <span className={`text-xs font-extrabold w-7 flex-shrink-0 ${
                              p5Checked ? ok ? 'text-emerald-600' : 'text-red-500' : 'text-violet-600'
                            }`}>({q.id})</span>
                            <input type="text" disabled={p5Checked} value={ua}
                              onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                            className="min-w-0 flex-1 bg-transparent text-base focus:outline-none text-gray-700 placeholder:text-gray-300"
                              placeholder="填词…"
                            />
                            {p5Checked && !ok && (
                              <span className="text-xs text-emerald-600 font-semibold flex-shrink-0">{q.answers[0]}</span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
                {isPart5 ? (
                  <>
                    {p5Checked ? (
                      <div className="flex items-center gap-4">
                        <span className={`text-xl font-extrabold ${p5Pct >= 80 ? 'text-emerald-600' : p5Pct >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
                          {p5Score.correct}/{p5Score.total}<span className="text-sm font-medium text-gray-400 ml-1">分</span>
                        </span>
                        <button onClick={() => { setP5Checked(false); setP5Score(null); setAnswers({}) }}
                          className="text-sm text-violet-600 hover:text-violet-800 font-semibold border border-violet-200 px-4 py-1.5 rounded-lg hover:bg-violet-50 transition-all">
                          重新练习
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400">已答 <span className="font-bold text-gray-600">{p5Answered}</span>/{p5Qs.length} 题</p>
                    )}
                    {!p5Checked && (
                      <button onClick={handleP5Submit} disabled={p5Answered === 0}
                        className={`px-7 py-2.5 rounded-xl font-bold text-sm transition-all ${
                          p5Answered > 0 ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-200/60' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}>
                        提交答案 ✓
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {batchChecked ? (
                      <div className="flex items-center gap-3">
                        <span className={`text-xl font-extrabold ${batchPct >= 80 ? 'text-emerald-600' : batchPct >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
                          {batchCorrect}/{batchQs.length}<span className="text-sm font-medium text-gray-400 ml-1">分</span>
                        </span>
                        <button onClick={handleResetBatch}
                          className="text-sm text-gray-500 hover:text-gray-700 font-semibold border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all">
                          重做本批
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400">
                        已答 <span className="font-bold text-gray-600">{batchAnswered}</span>/{batchQs.length} 题
                      </p>
                    )}
                    <div className="flex gap-2">
                      {!batchChecked && (
                        <button onClick={handleBatchCheck}
                          disabled={batchAnswered < batchQs.length}
                          className={`px-7 py-2.5 rounded-xl font-bold text-sm transition-all ${
                            batchAnswered >= batchQs.length
                              ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-200/60'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}>
                          检测答案 ✓
                        </button>
                      )}
                      {batchChecked && batchIdx < batches.length - 1 && (
                        <button onClick={handleNextBatch}
                          className="px-7 py-2.5 rounded-xl font-bold text-sm bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-200/60 transition-all">
                          下一批 →
                        </button>
                      )}
                      {batchChecked && batchIdx === batches.length - 1 && (
                        <span className="text-sm text-emerald-600 font-semibold px-4 py-2.5">🎉 全部完成！</span>
                      )}
                    </div>
                  </>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </main>
    </CambridgeLayout>
  )
}
