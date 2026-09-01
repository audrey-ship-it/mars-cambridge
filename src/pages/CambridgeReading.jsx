import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CambridgeLayout } from './CambridgeApp'
import { ketTests } from '../data/ketReadingData'
import { ketPart5Sets, PART5_GROUPS } from '../data/ketPart5Extras'

const PART_LABELS = { 1: 'Part 1', 2: 'Part 2', 3: 'Part 3', 4: 'Part 4', 5: 'Part 5' }
const PART_DESC   = { 1: '短文选义', 2: '人物配对', 3: '长文阅读', 4: '选词填空', 5: '语法填词' }
const PART_ICONS  = { 1: '📄', 2: '👥', 3: '📖', 4: '🔤', 5: '✏️' }

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

// Build batches for Parts 1-4: each question gets a unique _key
function buildBatches(partId) {
  if (partId === 1) {
    const allQ = ketTests.flatMap((t, ti) =>
      (t.part1?.questions || []).map(q => ({ ...q, _key: `${ti}_${q.id}` }))
    )
    const batches = []
    for (let i = 0; i < allQ.length; i += 6)
      batches.push({ questions: allQ.slice(i, i + 6) })
    return batches
  }
  // Parts 2/3/4: one batch per test (context-dependent)
  return ketTests.map((t, ti) => {
    const p = t[`part${partId}`]
    if (!p) return null
    return { ...p, questions: (p.questions || []).map(q => ({ ...q, _key: `${ti}_${q.id}` })) }
  }).filter(Boolean)
}

export default function CambridgeReading() {
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const [partId,       setPartId]       = useState(1)
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
  const p5Set  = ketPart5Sets.find(s => s.id === part5Id)
  const p5Part = p5Set ? {
    instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
    example: p5Set.example, passages: p5Set.passages, questions: p5Set.questions,
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
  }, [part5Id])

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
  const TYPE_ICON = { email: '📧', text: '💬', notice: '📋', ad: '📢', note: '📝', sign: '🪧' }

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
          disabled={effChk && !isRetry}
          onClick={handleClick}
          className={`flex items-center gap-6 w-full text-left py-2 transition-all ${effChk && !right && !wrong ? 'opacity-45' : ''}`}
        >
          <span className={`w-11 h-11 flex-shrink-0 border-2 shadow-sm transition-colors ${
            right ? 'border-emerald-500 bg-emerald-50' : wrong ? 'border-red-400 bg-red-50' : selected ? 'border-sky-500 bg-sky-50' : 'border-sky-500 bg-sky-50 hover:bg-sky-100'
          } flex items-center justify-center font-bold text-sm ${right ? 'text-emerald-600' : wrong ? 'text-red-500' : 'text-sky-600'}`}>
            {(right || (selected && !effChk)) ? label : ''}
          </span>
          <span className="text-[18px] leading-snug text-[#30284d]">{opt}</span>
        </button>
      )
    }

    return (
      <button
        disabled={effChk && !isRetry}
        onClick={handleClick}
        className={`flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-xl border-2 transition-all ${cls}`}
      >
        <span className={`font-bold text-sm w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 ${
          right ? 'text-emerald-600 border-emerald-300 bg-emerald-50' : wrong ? 'text-red-500 border-red-300 bg-red-50' : selected ? 'text-sky-600 border-sky-300 bg-sky-50' : 'text-slate-400 border-slate-200'
        }`}>{label}</span>
        {wrong && <span className="text-red-500 text-sm flex-shrink-0">✕</span>}
        <span className={`${large ? 'text-[19px]' : 'text-[15px]'} text-slate-700 leading-snug`}>{opt}</span>
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
  return (
    <CambridgeLayout activeModule="reading" level={level} setLevel={setLevel}>
      <div className="max-w-[1440px] mx-auto px-5 py-8 flex gap-7">

        {/* Sidebar */}
        <aside className="w-52 flex-shrink-0 space-y-4">

          {/* Part selector */}
          <div className="bg-white rounded-[22px] border border-slate-200 shadow-sm p-4">
            <p className="text-[11px] font-bold text-slate-400 tracking-widest mb-3">阅读题型</p>
            <div className="space-y-1">
              {[1,2,3,4,5].map(pid => (
                <button key={pid} onClick={() => { setPartId(pid); setBatchIdx(0) }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center gap-2 ${
                    partId === pid
                      ? 'bg-sky-50 text-sky-600 font-bold ring-1 ring-sky-200'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                    <span className="text-base">{PART_ICONS[pid]}</span>
                  <div>
                    <div className="font-bold">{PART_LABELS[pid]}</div>
                    <div className={`text-[10px] ${partId === pid ? 'text-violet-400' : 'text-gray-400'}`}>
                      {pid === 5 ? '语法填词' : PART_DESC[pid]}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

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

          {/* Batch navigator (Parts 1-4) */}
          {!isPart5 && batches.length > 1 && (
            <div className="bg-white rounded-[22px] border border-slate-200 shadow-sm p-4">
              <p className="text-[11px] font-bold text-slate-400 tracking-widest mb-2">练习批次</p>
              <div className="flex flex-wrap gap-1">
                {batches.map((_, i) => (
                  <button key={i} onClick={() => setBatchIdx(i)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                      batchIdx === i
                        ? 'bg-sky-500 text-white shadow-sm'
                        : 'bg-slate-50 text-slate-500 hover:bg-sky-50 hover:text-sky-700'
                    }`}
                  >{i + 1}</button>
                ))}
              </div>
            </div>
          )}

          {/* Part 5 set selector */}
          {isPart5 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 space-y-3 max-h-[50vh] overflow-y-auto">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">选择套题</p>
              {PART5_GROUPS.map(grp => (
                <div key={grp.label}>
                  <p className="text-[9px] font-bold text-gray-300 uppercase mb-1 tracking-wider truncate">{grp.label}</p>
                  <div className="flex flex-wrap gap-1">
                    {grp.ids.map(id => (
                      <button key={id} onClick={() => setPart5Id(id)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                          part5Id === id
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
            <motion.div key={isPart5 ? `p5-${part5Id}` : `${partId}-${batchIdx}`}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}
              className="bg-white rounded-[24px] border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Card header */}
              <div className="px-8 py-6 border-b-2 border-slate-800 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-lg">{PART_ICONS[partId]}</span>
                    <h2 className="font-extrabold text-slate-900 text-[26px] tracking-tight">
                      {isPart5
                        ? <>{p5Set?.source} <span className="text-violet-600">· Part 5</span></>
                        : <><span className="text-slate-900">Reading:</span> <span className="text-sky-500">{PART_LABELS[partId]}</span></>
                      }
                    </h2>
                    <span className="text-xs text-slate-500 font-medium bg-sky-50 px-2.5 py-1 rounded-full">
                      {PART_DESC[partId]}
                    </span>
                    {!isPart5 && (
                      <span className="text-xs font-bold text-slate-500 ml-1">练习 {batchIdx + 1} / {batches.length}</span>
                    )}
                  </div>
                  {!isPart5 && currentBatch?.instructions && (
                    <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mt-4 bg-sky-50 border border-sky-100 px-4 py-3 rounded-xl">💡 {currentBatch.instructions}</p>
                  )}
                  {isPart5 && p5Part?.instructions && (
                    <p className="text-xs text-gray-400 leading-relaxed max-w-lg">{p5Part.instructions}</p>
                  )}
                </div>
                {!isPart5 && currentBatch?.title && (
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-sm font-semibold text-gray-700">{currentBatch.title}</p>
                    {currentBatch.author && <p className="text-xs text-gray-400 mt-0.5">{currentBatch.author}</p>}
                  </div>
                )}
              </div>

              {/* Part content */}
              <div className="p-8">

                {/* ── PART 1 ── */}
                {partId === 1 && currentBatch && (
                  <div className="space-y-0">
                    {currentBatch.questions.map((q, qi) => (
                      <motion.div key={q._key}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: qi * 0.04 }}
                        className="grid grid-cols-[360px_1fr] gap-14 py-12 border-b border-slate-300 last:border-b-0"
                      >
                        {/* Left: numbered stimulus box */}
                        <div className="min-w-0 flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold transition-colors ${
                              batchChecked && !retrying[q._key]
                                ? isCorrect14(q) ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                                : answers[q._key] ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-700'
                            }`}>{qi + 1 + batchIdx * 6}</span>
                          </div>
                          <div className="flex-1 border-2 border-slate-300 p-5 bg-white flex flex-col justify-center shadow-[0_1px_0_rgba(15,23,42,.04)]">
                            {(q.from || q.title) && (
                              <div className="flex flex-wrap gap-x-3 mb-2 text-xs text-gray-500 font-medium">
                                {q.from && <span>{TYPE_ICON[q.type]||'📄'} From: <span className="text-gray-800 font-bold">{q.from}</span></span>}
                                {q.to   && <span>To: <span className="text-gray-800 font-bold">{q.to}</span></span>}
                                {!q.from && q.title && <span className="font-bold text-gray-800">{TYPE_ICON[q.type]||'📄'} {q.title}</span>}
                              </div>
                            )}
                            <HighlightableText
                              text={q.content}
                              storageKey={`part1-${q._key}`}
                              className={`text-[18px] text-slate-900 whitespace-pre-line leading-8 text-center ${q.type === 'notice' || q.type === 'ad' ? 'bg-[#dbc6ff] px-5 py-7' : ''}`}
                            />
                            {q.question && <p className="mt-3 text-sm font-semibold text-gray-800 border-t border-gray-200 pt-3">{q.question}</p>}
                          </div>
                        </div>

                        {/* Right: options + wrong actions */}
                        <div className="min-w-0 flex flex-col justify-center space-y-4">
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
                {partId === 2 && currentBatch && (
                  <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(400px,.75fr)] gap-8 items-start">
                    <div className="space-y-4">
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
                {partId === 3 && currentBatch && (
                  <div className="grid grid-cols-2 gap-5">
                    <div className="min-w-0 bg-gray-50 rounded-xl border border-gray-100 p-5 overflow-y-auto"
                      style={{ maxHeight: '70vh' }}>
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
                {partId === 4 && currentBatch && (
                  <div className="grid grid-cols-2 gap-5">
                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 leading-9 text-[18px] text-gray-700">
                      {renderPart4Passage(currentBatch)}
                    </div>
                    <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
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
                {partId === 5 && p5Part && (
                  <div className="space-y-5">
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
                          <div className="flex gap-3 mb-3 text-xs text-gray-500 pb-2 border-b border-gray-200">
                            {p.from && <span>📧 <span className="font-bold text-gray-700">{p.from}</span></span>}
                            {p.to   && <span>→ <span className="font-bold text-gray-700">{p.to}</span></span>}
                          </div>
                        )}
                        <p className="text-sm text-gray-700 leading-loose">{renderPart5Passage(p.content)}</p>
                      </div>
                    ))}
                    <div className="grid grid-cols-3 gap-2">
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
                              className="flex-1 bg-transparent text-sm focus:outline-none text-gray-700 placeholder:text-gray-300"
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
    </CambridgeLayout>
  )
}
