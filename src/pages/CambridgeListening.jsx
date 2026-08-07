import { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { KET_LISTENING_DATA } from '../data/ketListeningData'
import { CambridgeLayout } from './CambridgeApp'

const PART_COLORS = {
  1: 'bg-cyan-500',
  2: 'bg-indigo-500',
  3: 'bg-violet-500',
  4: 'bg-teal-500',
  5: 'bg-rose-500',
}

/* ══════════════════════════════
   TTS hook
══════════════════════════════ */
function useTTS(maxPlays = 2) {
  const [playing, setPlaying]     = useState(false)
  const [playCount, setPlayCount] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const utterRef   = useRef(null)
  const seekingRef = useRef(false)

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setPlaying(false)
  }, [])

  const playFrom = useCallback((script, rate, fromChar) => {
    window.speechSynthesis.cancel()
    const text = script.slice(fromChar)
    if (!text.trim()) return

    const utter = new SpeechSynthesisUtterance(text)
    const voices = window.speechSynthesis.getVoices()
    const voice  = voices.find(v => v.lang === 'en-GB' && v.name.toLowerCase().includes('female'))
      || voices.find(v => v.lang === 'en-GB')
      || voices.find(v => v.lang.startsWith('en-'))
    if (voice) utter.voice = voice
    utter.lang  = 'en-GB'
    utter.rate  = rate
    utter.pitch = 1

    utter.onboundary = e => setCharIndex(fromChar + (e.charIndex || 0))
    utter.onstart    = () => setPlaying(true)
    utter.onend      = () => {
      setPlaying(false)
      setCharIndex(0)
      if (!seekingRef.current) setPlayCount(c => c + 1)
    }
    utter.onerror = () => setPlaying(false)

    utterRef.current = utter
    window.speechSynthesis.speak(utter)
  }, [])

  const play = useCallback((script, rate = 0.88) => {
    if (playing) { stop(); return }
    setCharIndex(0)
    playFrom(script, rate, 0)
  }, [playing, stop, playFrom])

  const seek = useCallback((script, rate, targetPct) => {
    const rawChar = Math.floor((targetPct / 100) * script.length)
    // snap to nearest word boundary
    const spaceIdx = script.lastIndexOf(' ', rawChar)
    const fromChar = spaceIdx > 0 ? spaceIdx + 1 : rawChar
    seekingRef.current = true
    stop()
    setCharIndex(fromChar)
    setTimeout(() => { seekingRef.current = false; playFrom(script, rate, fromChar) }, 60)
  }, [stop, playFrom])

  const reset = useCallback(() => {
    window.speechSynthesis.cancel()
    setPlaying(false)
    setPlayCount(0)
    setCharIndex(0)
  }, [])

  useEffect(() => () => window.speechSynthesis.cancel(), [])

  return { playing, playCount, charIndex, canPlay: playCount < maxPlays, play, seek, stop, reset }
}

/* ══════════════════════════════
   Audio Player UI
══════════════════════════════ */
const PLAYER_SPEEDS = [0.75, 1, 1.25, 1.5]

function AudioPlayer({ script, tts, label = '播放录音' }) {
  const { playing, playCount, charIndex, canPlay, stop } = tts
  const maxPlays = 2
  const remaining = maxPlays - playCount
  const [speed, setSpeed] = useState(1)
  const isDragging = useRef(false)

  const scriptLen = script?.length || 1
  const progress = playing
    ? Math.min(99, (charIndex / scriptLen) * 100)
    : playCount > 0 ? 100 : 0

  function handlePlay() {
    if (playing) stop()
    else tts.play(script, speed * 0.88)
  }

  function handleSpeedChange(s) {
    setSpeed(s)
    if (playing) tts.seek(script, s * 0.88, (charIndex / scriptLen) * 100)
  }

  function handleSeekChange(e) {
    isDragging.current = true
    tts.seek(script, speed * 0.88, Number(e.target.value))
  }

  function handleSeekEnd() {
    isDragging.current = false
  }


  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 mb-6">
      <div className="flex items-center gap-4">
        {/* Play / Stop button */}
        <button
          onClick={handlePlay}
          disabled={!canPlay && !playing}
          className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
            playing
              ? 'bg-red-500 hover:bg-red-600 shadow-md'
              : canPlay
              ? 'bg-[#064e3b] hover:bg-[#065f46] shadow-md hover:shadow-lg'
              : 'bg-gray-200 cursor-not-allowed'
          }`}
        >
          {playing ? (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Middle: label + progress bar + controls row */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-700 truncate flex-1">{label}</span>
            {/* Speed buttons */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {PLAYER_SPEEDS.map(s => (
                <button key={s} onClick={() => handleSpeedChange(s)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all ${
                    speed === s ? 'bg-[#064e3b] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}>
                  {s}x
                </button>
              ))}
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
              remaining === 0 ? 'bg-gray-100 text-gray-400' : 'bg-[#064e3b]/10 text-[#064e3b]'
            }`}>
              {remaining === 0 ? '已达上限' : `×${remaining}`}
            </span>
          </div>
          {/* Seekable progress bar */}
          <div className="relative h-4 flex items-center">
            {/* Track */}
            <div className="absolute w-full h-1.5 bg-gray-100 rounded-full overflow-hidden pointer-events-none">
              <div className="h-full bg-[#064e3b] rounded-full transition-none"
                style={{ width: `${progress}%` }} />
            </div>
            {/* Thumb */}
            {progress > 0 && (
              <div className="absolute h-3 w-3 rounded-full bg-[#064e3b] shadow pointer-events-none z-10"
                style={{ left: `calc(${progress}% - 6px)` }} />
            )}
            {/* Invisible range input on top for interaction */}
            <input
              type="range" min="0" max="100" step="1"
              value={Math.round(progress)}
              onChange={handleSeekChange}
              onMouseUp={handleSeekEnd}
              onTouchEnd={handleSeekEnd}
              disabled={playCount === 0 && !playing}
              className="absolute w-full h-4 opacity-0 cursor-pointer disabled:cursor-default"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════
   Sequential MCQ (Parts 1 & 4)
══════════════════════════════ */
const LABELS = ['A', 'B', 'C']

function SequentialMCQ({ data, onDone }) {
  const [index, setIndex]         = useState(0)
  const [selected, setSelected]   = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [results, setResults]     = useState([])
  const tts = useTTS(2)

  const items = data.items
  const item  = items[index]
  const total = items.length

  // Reset TTS when moving to next question
  useEffect(() => { tts.reset() }, [index]) // eslint-disable-line

  function confirm() { if (selected !== null) setConfirmed(true) }

  function next() {
    const isRight = selected === item.ans
    const updated = [...results, isRight]
    if (index + 1 >= total) { onDone(updated) }
    else { setResults(updated); setIndex(i => i + 1); setSelected(null); setConfirmed(false) }
  }

  return (
    <div>
      {/* Progress dots */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-gray-400">题目 {index + 1} / {total}</span>
        <div className="flex gap-1">
          {items.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${
              i < index ? (results[i] ? 'bg-emerald-400' : 'bg-red-400')
              : i === index ? 'bg-[#064e3b]' : 'bg-gray-200'
            }`} />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-[#064e3b] rounded-full"
          animate={{ width: `${(index / total) * 100}%` }} transition={{ duration: 0.3 }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={index}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.18 }}>

          {/* TTS Player */}
          <AudioPlayer script={item.script} tts={tts} label={`对话 ${item.n} · 点击收听`} />

          {/* Question */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <p className="text-base font-semibold text-gray-900 mb-5 leading-relaxed">{item.question}</p>
            <div className="space-y-2.5">
              {item.opts.map((opt, oi) => {
                let style = 'border-gray-200 bg-white hover:border-[#064e3b]/40 hover:bg-gray-50 cursor-pointer'
                if (confirmed) {
                  if (oi === item.ans)               style = 'border-emerald-400 bg-emerald-50 cursor-default'
                  else if (oi === selected)           style = 'border-red-300 bg-red-50 cursor-default'
                  else                               style = 'border-gray-100 opacity-50 cursor-default'
                } else if (oi === selected) {
                  style = 'border-[#064e3b] bg-[#064e3b]/5 cursor-pointer'
                }
                return (
                  <button key={oi} onClick={() => !confirmed && setSelected(oi)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${style}`}>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                      confirmed && oi === item.ans                        ? 'bg-emerald-500 text-white'
                      : confirmed && oi === selected && oi !== item.ans  ? 'bg-red-400 text-white'
                      : oi === selected                                   ? 'bg-[#064e3b] text-white'
                      : 'bg-gray-100 text-gray-500'
                    }`}>{LABELS[oi]}</span>
                    <span className="text-sm font-medium text-gray-800">{opt}</span>
                    {confirmed && oi === item.ans        && <span className="ml-auto text-emerald-500">✓</span>}
                    {confirmed && oi === selected && oi !== item.ans && <span className="ml-auto text-red-400">✗</span>}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {confirmed && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`rounded-2xl px-5 py-4 mb-4 border text-sm leading-relaxed overflow-hidden ${
                  selected === item.ans
                    ? 'bg-emerald-50 border-emerald-100 text-emerald-800'
                    : 'bg-red-50 border-red-100 text-red-800'
                }`}>
                <span className="font-bold mr-1">{selected === item.ans ? '✓ 正确！' : '✗ 解析：'}</span>
                {item.exp}
              </motion.div>
            )}
          </AnimatePresence>

          {!confirmed
            ? <button onClick={confirm} disabled={selected === null}
                className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
                确认答案
              </button>
            : <button onClick={next}
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base">
                {index + 1 < total ? '下一题 →' : '查看结果 →'}
              </button>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ══════════════════════════════
   Matching (Parts 2 & 5)
══════════════════════════════ */
function MatchingSection({ data, onDone }) {
  const [selections, setSelections] = useState(Array(data.items.length).fill(null))
  const [submitted, setSubmitted]   = useState(false)
  const tts = useTTS(2)

  const allSelected = selections.every(s => s !== null)

  function select(itemIdx, optIdx) {
    if (submitted) return
    setSelections(prev => prev.map((v, i) => i === itemIdx ? optIdx : v))
  }

  function submit() { if (allSelected) setSubmitted(true) }

  function handleDone() {
    const results = selections.map((sel, i) => sel === data.ans[i])
    onDone(results)
  }

  return (
    <div>
      <AudioPlayer script={data.script} tts={tts} label="点击收听 — 仔细听每个人说什么" />

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
        {/* Options legend */}
        <div className="mb-5">
          <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">选项</div>
          <div className="grid grid-cols-2 gap-1.5">
            {data.options.map((opt, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                <span className="text-xs font-extrabold text-[#064e3b] w-4">{opt.letter}</span>
                <span className="text-sm text-gray-700">{opt.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Matching items */}
        <div className="space-y-2.5">
          {data.items.map((person, i) => {
            const sel    = selections[i]
            const isRight = submitted && sel === data.ans[i]
            const isWrong = submitted && sel !== data.ans[i]
            return (
              <div key={i}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold text-gray-400 w-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-sm font-semibold text-gray-800 w-20 flex-shrink-0">{person}</span>
                  <div className="flex-1 flex gap-1.5 flex-wrap">
                    {data.options.map((opt, oi) => (
                      <button key={oi}
                        onClick={() => select(i, oi)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all ${
                          submitted
                            ? oi === data.ans[i]
                              ? 'bg-emerald-500 text-white border-emerald-500'
                              : oi === sel && isWrong
                              ? 'bg-red-400 text-white border-red-400'
                              : 'bg-gray-50 border-gray-100 text-gray-300'
                            : oi === sel
                            ? 'bg-[#064e3b] text-white border-[#064e3b]'
                            : 'bg-white border-gray-200 text-gray-500 hover:border-[#064e3b]/40'
                        }`}>
                        {opt.letter}
                      </button>
                    ))}
                  </div>
                  {submitted && (
                    <span className={`text-base flex-shrink-0 ${isRight ? 'text-emerald-500' : 'text-red-400'}`}>
                      {isRight ? '✓' : '✗'}
                    </span>
                  )}
                </div>
                {submitted && isWrong && (
                  <div className="text-xs text-red-600 ml-7 mt-1 leading-snug">
                    {data.exps[i]}
                  </div>
                )}
                {submitted && isRight && (
                  <div className="text-xs text-emerald-700 ml-7 mt-1 leading-snug">
                    {data.exps[i]}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {!submitted
        ? <button onClick={submit} disabled={!allSelected}
            className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
            提交答案
          </button>
        : <button onClick={handleDone}
            className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base">
            查看结果 →
          </button>
      }
    </div>
  )
}

/* ══════════════════════════════
   Blanks — Part 3
══════════════════════════════ */
function BlanksSection({ data, onDone }) {
  const [inputs, setInputs]       = useState(Array(data.items.length).fill(''))
  const [submitted, setSubmitted] = useState(false)
  const tts = useTTS(2)

  const allFilled = inputs.every(v => v.trim())

  function check(val, ans) {
    return ans.some(a => a.trim().toLowerCase() === val.trim().toLowerCase())
  }

  function submit() { if (allFilled) setSubmitted(true) }

  function handleDone() {
    const results = inputs.map((v, i) => check(v, data.items[i].ans))
    onDone(results)
  }

  return (
    <div>
      <AudioPlayer script={data.script} tts={tts} label="点击收听 — 注意关键信息" />

      {/* Form context */}
      <div className="text-center text-sm font-bold text-gray-700 mb-3">{data.context}</div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4 space-y-3">
        {data.items.map((item, i) => {
          const isRight = submitted && check(inputs[i], item.ans)
          const isWrong = submitted && !check(inputs[i], item.ans)
          return (
            <div key={i}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold text-gray-400 w-4 flex-shrink-0">{i + 1}</span>
                <span className="text-sm text-gray-600 w-36 flex-shrink-0">{item.label}</span>
                <input
                  value={inputs[i]}
                  onChange={e => !submitted && setInputs(prev => prev.map((v, j) => j === i ? e.target.value : v))}
                  disabled={submitted}
                  placeholder="填写答案…"
                  className={`flex-1 px-3 py-2 rounded-xl border text-sm font-medium outline-none transition-all ${
                    submitted
                      ? isRight
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                        : 'border-red-300 bg-red-50 text-red-700'
                      : 'border-gray-200 bg-gray-50 focus:border-[#064e3b] focus:bg-white'
                  }`}
                />
                {submitted && <span className={`text-base flex-shrink-0 ${isRight ? 'text-emerald-500' : 'text-red-400'}`}>{isRight ? '✓' : '✗'}</span>}
              </div>
              {submitted && isWrong && (
                <div className="text-xs ml-7 mt-1 text-red-600">
                  正确答案：<span className="font-bold">{item.ans[0]}</span>　{item.exp}
                </div>
              )}
              {submitted && isRight && (
                <div className="text-xs ml-7 mt-1 text-emerald-700">{item.exp}</div>
              )}
            </div>
          )
        })}
      </div>

      {!submitted
        ? <button onClick={submit} disabled={!allFilled}
            className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
            提交答案
          </button>
        : <button onClick={handleDone}
            className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base">
            查看结果 →
          </button>
      }
    </div>
  )
}

/* ══════════════════════════════
   Result Screen
══════════════════════════════ */
function ResultScreen({ part, results, onRestart, onBack }) {
  const total   = results.length
  const correct = results.filter(Boolean).length
  const pct     = Math.round(correct / total * 100)

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center mb-5">
        <div className="text-5xl mb-3">
          {pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}
        </div>
        <div className="text-6xl font-extrabold text-gray-900 mb-1">
          {correct}<span className="text-3xl text-gray-300 font-normal"> / {total}</span>
        </div>
        <div className={`text-xl font-bold mt-2 ${pct===100?'text-emerald-600':pct>=60?'text-[#064e3b]':'text-orange-500'}`}>
          正确率 {pct}%
        </div>
        <div className="text-xs text-gray-400 mt-1">KET 听力 · Part {part}</div>
      </div>

      {/* Per-question result dots */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
        <div className="text-xs font-bold text-gray-400 mb-3">逐题情况</div>
        <div className="flex gap-2 flex-wrap">
          {results.map((r, i) => (
            <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold ${
              r ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-500'
            }`}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={onRestart}
          className="flex-1 py-3.5 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] text-sm transition-colors">
          再练一次 →
        </button>
        <button onClick={onBack}
          className="flex-1 py-3.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-2xl hover:border-gray-300 text-sm transition-colors">
          换一个 Part
        </button>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════
   Main Page
══════════════════════════════ */
export default function CambridgeListening() {
  const navigate = useNavigate()
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const [activePart, setActivePart] = useState(1)
  const [results, setResults]       = useState(null)
  const [key, setKey]               = useState(0) // force remount to reset

  const data = KET_LISTENING_DATA[activePart]

  function handlePartChange(part) {
    setActivePart(part)
    setResults(null)
    setKey(k => k + 1)
  }

  function handleDone(res) { setResults(res) }

  function handleRestart() { setResults(null); setKey(k => k + 1) }

  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>

      {/* Part Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-xl mx-auto px-6">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(p => (
              <button key={p}
                onClick={() => handlePartChange(p)}
                className={`flex-1 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activePart === p
                    ? 'border-[#064e3b] text-[#064e3b]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}>
                Part {p}
              </button>
            ))}
            <button
              onClick={() => navigate('/cambridge/dictation')}
              className="flex-1 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-400 hover:text-gray-600 transition-colors">
              听写专项
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 py-6">

        {/* Part header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-9 h-9 rounded-xl ${PART_COLORS[activePart]} flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-extrabold text-sm">{activePart}</span>
          </div>
          <div>
            <div className="font-bold text-gray-900">{data.title}</div>
            <div className="text-xs text-gray-400">{data.items.length} 题</div>
          </div>
          <div className="ml-auto">
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">A2 KET</span>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-[#064e3b]/5 border border-[#064e3b]/10 rounded-2xl px-5 py-4 mb-6">
          <div className="text-[10px] font-bold text-[#064e3b] uppercase tracking-widest mb-1">题目说明</div>
          <p className="text-sm text-gray-700 leading-relaxed">{data.instructions}</p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {results ? (
            <motion.div key="results"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <ResultScreen part={activePart} results={results}
                onRestart={handleRestart}
                onBack={() => { setResults(null); setKey(k => k + 1) }} />
            </motion.div>
          ) : (
            <motion.div key={`part-${activePart}-${key}`}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {data.type === 'sequential_mcq' && (
                <SequentialMCQ key={key} data={data} onDone={handleDone} />
              )}
              {data.type === 'matching' && (
                <MatchingSection key={key} data={data} onDone={handleDone} />
              )}
              {data.type === 'blanks' && (
                <BlanksSection key={key} data={data} onDone={handleDone} />
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </CambridgeLayout>
  )
}
