import { useState, useRef, useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { KET_EXAMS } from '../data/ketExamData'

/* ══════════════════════════════
   Exam List Page  /cambridge/exams
══════════════════════════════ */
function readExamListProgress(exam) {
  const officialSetId = ['ket-3-test1', 'ket-3-test2', 'ket-3-test3', 'ket-3-test4'].indexOf(exam.id) + 9
  const listeningParts = officialSetId >= 9 ? 5 : 0
  const readingParts = exam.reading?.parts?.length || 0
  const writingParts = exam.reading?.writing?.length || 0
  const speakingTopics = exam.speaking?.parts?.flatMap(part => part.topics || []) || []
  const total = listeningParts + readingParts + writingParts + speakingTopics.length
  let completed = 0
  let started = false
  let latest = null
  let continuePath = exam.reading?.parts?.length
    ? `/cambridge/exams/${exam.id}?tab=reading`
    : `/cambridge/exams/${exam.id}?tab=writing`

  try {
    if (listeningParts) {
      for (let part = 1; part <= listeningParts; part += 1) {
        const listening = JSON.parse(localStorage.getItem(`mars_ket_listening_progress_v1:set-${officialSetId}:part-${part}`) || 'null')
        if (!listening) continue
        started = true
        if (listening.completed) completed += 1
        if (!latest || String(listening.updatedAt) > String(latest)) {
          latest = listening.updatedAt
          continuePath = `/cambridge/listening?part=${part}&set=${officialSetId}`
        }
      }
    }

    const reading = JSON.parse(localStorage.getItem(`mars_ket_exam_progress_v1:${exam.id}:reading`) || 'null')
    if (reading) {
      started = true
      const finishedParts = reading.done ? readingParts : Math.max(0, Math.min(readingParts, reading.partIndex || 0))
      completed += finishedParts
      latest = reading.savedAt || latest
      continuePath = `/cambridge/exams/${exam.id}?tab=reading`
    }

    let writingStarted = false
    exam.reading?.writing?.forEach(part => {
      const draft = localStorage.getItem(`mars_ket_exam_progress_v1:${exam.id}:writing:part${part.part}:draft`) || ''
      if (draft.trim()) {
        writingStarted = true
        completed += 1
      }
    })
    if (writingStarted) {
      started = true
      const lastPart = Number(localStorage.getItem(`mars_ket_exam_progress_v1:${exam.id}:writing:lastPart`)) || 0
      continuePath = `/cambridge/exams/${exam.id}?tab=writing&part=${exam.reading.writing[lastPart]?.part || 6}`
    }

    speakingTopics.forEach(topic => {
      const rating = JSON.parse(localStorage.getItem(`mars_ket_speaking_progress_v1:${exam.id}:${topic.id}`) || 'null')
      if (!rating) return
      started = true
      completed += 1
      if (!latest || String(rating.updatedAt) > String(latest)) {
        latest = rating.updatedAt
        continuePath = `/cambridge/exams/${exam.id}?tab=speaking`
      }
    })
  } catch { /* storage may be unavailable */ }

  const percent = total ? Math.min(100, Math.round(completed / total * 100)) : 0
  return {
    percent,
    status: percent === 100 ? '已完成' : started ? '进行中' : '未开始',
    continuePath,
    completed,
    total,
  }
}

export function ExamList() {
  const sectionSummary = (exam) => [
    exam.listening && '听力 25题',
    exam.reading?.parts?.length && '阅读 30题',
    exam.reading?.writing?.length && '写作 2题',
    exam.speaking && `口语 ${exam.speaking.parts.length}部分`,
  ].filter(Boolean).join(' · ')

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/cambridge/ket" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors group">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">返回</span>
          </Link>
          <span className="font-bold text-gray-900">火星<span className="text-[#064e3b]">剑桥</span> <span className="text-gray-400 font-normal text-sm">真题练习</span></span>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="mb-6">
          <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">A2 KET</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-1">KET 官方真题</h1>
          <p className="text-sm text-gray-500">阅读、写作与口语真题训练；完整听力套题请前往“我的听力中心”</p>
        </div>

        <div className="space-y-3">
          {KET_EXAMS.map(exam => {
            const progress = readExamListProgress(exam)
            return (
            <Link key={exam.id} to={progress.continuePath}
              className="block bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 hover:shadow-md hover:border-[#064e3b]/20 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#064e3b] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📝</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 group-hover:text-[#064e3b] transition-colors">{exam.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{exam.label} · {sectionSummary(exam)}</div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-[#0d7656]" style={{ width: `${progress.percent}%` }} />
                    </div>
                    <span className="whitespace-nowrap text-[11px] font-bold text-gray-500">{progress.completed} / {progress.total} 项</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${progress.status === '已完成' ? 'bg-emerald-100 text-emerald-700' : progress.status === '进行中' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-500'}`}>{progress.status}</span>
                  <span className="text-xs font-bold text-[#0d7656]">{progress.status === '未开始' ? '开始练习 →' : '继续练习 →'}</span>
                </div>
              </div>
            </Link>
          )})}

        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════
   Root Exam Page — section switcher
══════════════════════════════ */
export default function CambridgeExam() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const exam = KET_EXAMS.find(e => e.id === id)
  const requestedTab = searchParams.get('tab')
  const initialTab = requestedTab
    || (exam?.listening ? 'listening' : exam?.reading?.parts?.length ? 'reading' : exam?.reading?.writing?.length ? 'writing' : 'speaking')
  const [section, setSection] = useState(initialTab)

  if (!exam) return (
    <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🔒</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">找不到该试卷</h2>
        <Link to="/cambridge/exams" className="text-[#064e3b] text-sm font-semibold hover:underline">返回真题列表</Link>
      </div>
    </div>
  )

  if (section === 'listening') return <ListeningExam exam={exam} section={section} onSection={setSection} />
  if (section === 'speaking')  return <SpeakingExam  exam={exam} section={section} onSection={setSection} />
  if (section === 'writing')   return <WritingExam   exam={exam} section={section} onSection={setSection} />
  return <ReadingExam exam={exam} section={section} onSection={setSection} />
}

/* ══════════════════════════════
   Shared Section Tabs
══════════════════════════════ */
function SectionTabs({ exam, section, onSection }) {
  const tabs = [
    exam?.listening && ['listening','🎧 听力'],
    exam?.reading?.parts?.length && ['reading','📖 阅读'],
    exam?.reading?.writing?.length && ['writing','✍️ 写作'],
    exam?.speaking && ['speaking','🎤 口语'],
  ].filter(Boolean)
  return (
    <div className="flex gap-1 px-4 py-2">
      {tabs.map(([key,label]) => (
        <button key={key} onClick={() => onSection(key)}
          className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
            section === key
              ? 'bg-[#064e3b] text-white shadow-sm'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}>
          {label}
        </button>
      ))}
    </div>
  )
}

/* ══════════════════════════════
   Listening Exam Flow
══════════════════════════════ */
function ListeningExam({ exam, section, onSection }) {
  const [partIndex, setPartIndex] = useState(0)
  const [allAnswers, setAllAnswers] = useState({})
  const [done, setDone] = useState(false)

  const parts = exam.listening.parts
  const part  = parts[partIndex]

  function handlePartDone(answers) {
    const updated = { ...allAnswers, [partIndex]: answers }
    setAllAnswers(updated)
    if (partIndex + 1 >= parts.length) {
      setDone(true)
    } else {
      setPartIndex(i => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (done) return (
    <ExamShell exam={exam} section={section} onSection={onSection}
      parts={parts} partIndex={partIndex} allAnswers={allAnswers} isDone>
      <ListeningFinalResult exam={exam} allAnswers={allAnswers} />
    </ExamShell>
  )

  return (
    <ExamShell exam={exam} section={section} onSection={onSection}
      parts={parts} partIndex={partIndex} allAnswers={allAnswers}>
      <AnimatePresence mode="wait">
        <motion.div key={partIndex}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}>
          <ListeningPartRouter
            part={part}
            audioBase={exam.listening.audioBase}
            isLast={partIndex + 1 >= parts.length}
            onDone={handlePartDone}
          />
        </motion.div>
      </AnimatePresence>
    </ExamShell>
  )
}

/* ══════════════════════════════
   Shared Exam Shell (listening or reading)
══════════════════════════════ */
function ExamShell({ exam, section, onSection, parts, partIndex, allAnswers, isDone, onReset, children }) {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link to="/cambridge/exams" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors group">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">真题列表</span>
          </Link>
          <div className="text-center">
            <div className="text-[11px] font-bold text-gray-800 leading-tight">{exam.label}</div>
          </div>
          <div className="w-20" />
        </div>

        {/* Section tabs */}
        <div className="max-w-2xl mx-auto">
          <SectionTabs exam={exam} section={section} onSection={onSection} />
        </div>

        {/* Part progress */}
        <div className="max-w-2xl mx-auto px-6 pb-2.5">
          <div className="flex gap-1 mb-1">
            {parts.map((p, i) => (
              <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${
                isDone ? 'bg-emerald-400'
                : allAnswers[i] !== undefined ? 'bg-[#064e3b]/60'
                : i === partIndex ? 'bg-[#064e3b]'
                : 'bg-gray-100'
              }`} />
            ))}
          </div>
          <div className="flex gap-1 text-[10px] font-medium">
            {parts.map((p, i) => (
              <div key={i} className={`flex-1 text-center ${
                i === partIndex && !isDone ? 'text-[#064e3b] font-bold' : 'text-gray-400'
              }`}>
                {p.part}
                {allAnswers[i] !== undefined && !isDone && <span className="ml-0.5 opacity-60">✓</span>}
              </div>
            ))}
          </div>
          {onReset && !isDone && Object.keys(allAnswers).length > 0 && (
            <div className="mt-1.5 text-right">
              <button onClick={onReset} className="text-[10px] font-semibold text-gray-400 hover:text-red-500 transition-colors">重新开始本套</button>
            </div>
          )}
        </div>
      </header>
      <div className="max-w-2xl mx-auto px-6 py-6">{children}</div>
    </div>
  )
}

/* ══════════════════════════════
   Listening Part Router
══════════════════════════════ */
function ListeningPartRouter({ part, audioBase, isLast, onDone }) {
  const audioSrc    = `${audioBase}${part.track}.mp3`
  const sharedProps = { part, audioSrc, isLast, onDone }

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-[#064e3b] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-extrabold text-sm">{part.part}</span>
        </div>
        <div>
          <div className="font-bold text-gray-900">{part.title}</div>
          {part.preContext && <div className="text-xs text-gray-500 mt-0.5 leading-snug">{part.preContext}</div>}
        </div>
      </div>
      <div className="bg-[#064e3b]/5 border border-[#064e3b]/10 rounded-2xl px-5 py-3 mb-5">
        <p className="text-sm text-gray-700">{part.instructions}</p>
      </div>
      {part.type === 'picture_mcq' && <PictureMCQ {...sharedProps} />}
      {part.type === 'blanks'      && <FormBlanks {...sharedProps} />}
      {part.type === 'mcq'         && <StandardMCQ {...sharedProps} />}
      {part.type === 'matching'    && <MatchingPart {...sharedProps} />}
    </div>
  )
}

/* ══════════════════════════════
   Audio Player (draggable + speed)
══════════════════════════════ */
const SPEEDS = [0.75, 1.0, 1.25, 1.5, 2.0]

function AudioPlayer({ src, label = '播放录音' }) {
  const audioRef  = useRef(null)
  const trackRef  = useRef(null)
  const dragging  = useRef(false)

  const [playing, setPlaying]         = useState(false)
  const [progress, setProgress]       = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [playCount, setPlayCount]     = useState(0)
  const [duration, setDuration]       = useState(0)
  const [speed, setSpeed]             = useState(1.0)
  const [showSpeeds, setShowSpeeds]   = useState(false)
  const maxPlays = 2

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause() }
    else { if (playCount >= maxPlays) return; a.play() }
  }

  useEffect(() => { if (audioRef.current) audioRef.current.playbackRate = speed }, [speed])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onPlay  = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnded = () => {
      setPlaying(false); setPlayCount(c => c + 1)
      setProgress(0); setCurrentTime(0); a.currentTime = 0
    }
    const onTime = () => {
      if (!dragging.current && a.duration) {
        setProgress(a.currentTime / a.duration * 100)
        setCurrentTime(a.currentTime)
      }
    }
    const onMeta = () => setDuration(a.duration)
    a.addEventListener('play', onPlay); a.addEventListener('pause', onPause)
    a.addEventListener('ended', onEnded); a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    return () => {
      a.removeEventListener('play', onPlay); a.removeEventListener('pause', onPause)
      a.removeEventListener('ended', onEnded); a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
    }
  }, [])

  function getPct(e) {
    const rect = trackRef.current.getBoundingClientRect()
    const cx = e.touches ? e.touches[0].clientX : e.clientX
    return Math.max(0, Math.min(1, (cx - rect.left) / rect.width))
  }
  function seekTo(pct) {
    const a = audioRef.current
    if (!a || !duration) return
    a.currentTime = pct * duration
    setProgress(pct * 100); setCurrentTime(pct * duration)
  }
  function onTrackDown(e) {
    e.preventDefault(); dragging.current = true
    setProgress(getPct(e) * 100)
    const onMove = ev => { if (dragging.current) setProgress(getPct(ev) * 100) }
    const onUp   = ev => {
      dragging.current = false; seekTo(getPct(ev))
      window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onUp)
    }
    window.addEventListener('mousemove', onMove); window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false }); window.addEventListener('touchend', onUp)
  }

  const remaining = maxPlays - playCount
  const canPlay   = remaining > 0 || playing
  const fmtTime   = s => !s || isNaN(s) ? '0:00' : `${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,'0')}`

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 mb-6">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-3 mb-3">
        <button onClick={toggle} disabled={!canPlay}
          className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
            playing   ? 'bg-red-500 hover:bg-red-600 shadow-md'
            : canPlay ? 'bg-[#064e3b] hover:bg-[#065f46] shadow-md'
            :           'bg-gray-200 cursor-not-allowed'
          }`}>
          {playing
            ? <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            : <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}
        </button>
        <span className="text-sm font-semibold text-gray-700 flex-1">{label}</span>
        <div className="relative">
          <button onClick={() => setShowSpeeds(s => !s)}
            className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-600 transition-colors min-w-[46px] text-center">
            {speed === 1.0 ? '1×' : `${speed}×`}
          </button>
          {showSpeeds && (
            <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 min-w-[64px]">
              {SPEEDS.map(s => (
                <button key={s} onClick={() => { setSpeed(s); setShowSpeeds(false) }}
                  className={`w-full px-3 py-1.5 text-xs font-bold text-left transition-colors ${
                    speed === s ? 'bg-[#064e3b]/10 text-[#064e3b]' : 'text-gray-600 hover:bg-gray-50'
                  }`}>{s === 1.0 ? '1× 正常' : `${s}×`}</button>
              ))}
            </div>
          )}
        </div>
        <div className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${
          remaining === 0 ? 'bg-gray-100 text-gray-400' : 'bg-[#064e3b]/10 text-[#064e3b]'
        }`}>{remaining === 0 ? '已达上限' : `还可播放 ${remaining} 次`}</div>
      </div>
      <div ref={trackRef} onMouseDown={onTrackDown} onTouchStart={onTrackDown}
        className="group relative h-4 flex items-center cursor-pointer select-none">
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#064e3b] rounded-full transition-none" style={{ width: `${progress}%` }} />
        </div>
        <div className="absolute h-3.5 w-3.5 rounded-full bg-[#064e3b] shadow border-2 border-white -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ left: `${progress}%` }} />
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-medium">
        <span>{fmtTime(currentTime)}</span><span>{fmtTime(duration)}</span>
      </div>
    </div>
  )
}

/* ══════════════════════════════
   Listening Part Components
══════════════════════════════ */
const ABC = ['A', 'B', 'C']

function PictureMCQ({ part, audioSrc, isLast, onDone }) {
  const [sel, setSel] = useState(Array(part.items.length).fill(null))
  const allDone = sel.every(s => s !== null)
  return (
    <div>
      <AudioPlayer src={audioSrc} label="收听录音 · Part 1（共5段对话）" />
      <div className="space-y-5 mb-6">
        {part.items.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            {!item.imageSrc && (
              <p className="text-sm font-semibold text-gray-800 mb-3">
                <span className="text-gray-400 font-normal mr-1.5">{item.n}.</span>{item.question}
              </p>
            )}
            {item.imageSrc ? (
              <>
                <img
                  src={item.imageSrc}
                  alt={`Question ${item.n} picture options A B C`}
                  className="w-full rounded-xl border border-gray-100 mb-4 select-none"
                  draggable={false}
                />
                <div className="grid grid-cols-3 gap-3">
                  {item.opts.map((opt, oi) => (
                    <button key={oi} onClick={() => setSel(prev => prev.map((v, k) => k===i ? oi : v))}
                      className={`py-3 rounded-2xl border-2 font-extrabold text-xl transition-all ${
                        sel[i]===oi
                          ? 'border-[#064e3b] bg-[#064e3b] text-white shadow-md'
                          : 'border-gray-200 bg-white text-gray-500 hover:border-[#064e3b]/40 hover:bg-emerald-50'
                      }`}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {item.opts.map((opt, oi) => (
                  <button key={oi} onClick={() => setSel(prev => prev.map((v, k) => k===i ? oi : v))}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                      sel[i]===oi ? 'border-[#064e3b] bg-[#064e3b]/5' : 'border-gray-200 bg-white hover:border-[#064e3b]/30 hover:bg-gray-50'
                    }`}>
                    <span className="text-xs text-gray-600 leading-tight text-center">{opt.desc}</span>
                    <span className={`text-xs font-extrabold rounded-full w-6 h-6 flex items-center justify-center ${
                      sel[i]===oi ? 'bg-[#064e3b] text-white' : 'bg-gray-100 text-gray-500'
                    }`}>{opt.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => onDone(sel)} disabled={!allDone}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '提交答卷 →' : 'Part 2 →'}
      </button>
    </div>
  )
}

function FormBlanks({ part, audioSrc, isLast, onDone }) {
  const ansFields = part.fields.filter(f => !f.isExample)
  const [inputs, setInputs] = useState(Array(ansFields.length).fill(''))
  const allFilled = inputs.every(v => v.trim())
  let ai = 0
  return (
    <div>
      <AudioPlayer src={audioSrc} label="收听录音 · Part 2（电话留言）" />
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div className="bg-gray-50 border-b border-gray-100 px-6 py-3 text-center font-bold text-gray-800">{part.context}</div>
        <div className="divide-y divide-gray-50">
          {part.fields.map((f, fi) => {
            const isEx = f.isExample
            const idx  = isEx ? -1 : ai++
            return (
              <div key={fi} className="flex items-center gap-4 px-5 py-3.5">
                <span className="text-sm text-gray-600 w-52 flex-shrink-0">{f.label}</span>
                {isEx ? (
                  <span className="text-sm font-semibold text-gray-500 italic">{f.value} <span className="text-xs text-gray-400">(example)</span></span>
                ) : (
                  <div className="flex-1 flex items-center gap-2">
                    {f.prefix && <span className="text-sm text-gray-500">{f.prefix}</span>}
                    <input value={inputs[idx]} onChange={e => setInputs(prev => prev.map((v,j) => j===idx ? e.target.value : v))}
                      placeholder={`(${f.n})`}
                      className="flex-1 px-3 py-1.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#064e3b] focus:bg-white text-sm font-medium outline-none transition-all" />
                    {f.suffix && <span className="text-sm text-gray-500">{f.suffix}</span>}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <button onClick={() => onDone(inputs)} disabled={!allFilled}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '提交答卷 →' : 'Part 3 →'}
      </button>
    </div>
  )
}

function StandardMCQ({ part, audioSrc, isLast, onDone }) {
  const [sel, setSel] = useState(Array(part.items.length).fill(null))
  const allDone = sel.every(s => s !== null)
  return (
    <div>
      <AudioPlayer src={audioSrc} label={`收听录音 · Part ${part.part}`} />
      <div className="space-y-4 mb-6">
        {part.items.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-sm font-semibold text-gray-900 mb-3 leading-relaxed whitespace-pre-line">
              <span className="text-gray-400 font-normal mr-1">{item.n}.</span>{item.question}
            </p>
            <div className="space-y-2">
              {item.opts.map((opt, j) => (
                <button key={j} onClick={() => setSel(prev => prev.map((v,k) => k===i ? j : v))}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left transition-all ${
                    sel[i]===j ? 'border-[#064e3b] bg-[#064e3b]/5' : 'border-gray-200 bg-white hover:border-[#064e3b]/30 hover:bg-gray-50'
                  }`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                    sel[i]===j ? 'bg-[#064e3b] text-white' : 'bg-gray-100 text-gray-500'
                  }`}>{ABC[j]}</span>
                  <span className="text-sm text-gray-800">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => onDone(sel)} disabled={!allDone}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '提交答卷 →' : `Part ${part.part + 1} →`}
      </button>
    </div>
  )
}

function MatchingPart({ part, audioSrc, isLast, onDone }) {
  const [sel, setSel] = useState(Array(part.people.length).fill(null))
  const allDone = sel.every(s => s !== null)
  return (
    <div>
      <AudioPlayer src={audioSrc} label="收听录音 · Part 5（配对题）" />
      <div className="bg-gray-50 rounded-xl border border-gray-100 px-4 py-2 mb-4 text-sm">
        <span className="font-bold text-gray-400 mr-1">Example:</span>
        <span className="font-semibold text-gray-700">0. {part.example.person}</span>
        <span className="ml-2 px-2 py-0.5 bg-gray-200 text-gray-600 rounded font-bold text-xs">{part.example.ans}</span>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4">
        <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Jobs</div>
        <div className="grid grid-cols-2 gap-1.5">
          {part.jobs.map(job => (
            <div key={job.letter} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
              <span className="text-xs font-extrabold text-[#064e3b] w-4">{job.letter}</span>
              <span className="text-sm text-gray-700">{job.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">Friends</div>
        <div className="space-y-3">
          {part.people.map((person, pi) => (
            <div key={pi} className="flex items-center gap-3">
              <span className="text-xs font-extrabold text-gray-400 w-5">{person.n}</span>
              <span className="text-sm font-semibold text-gray-800 w-14">{person.name}</span>
              <div className="flex gap-1.5 flex-wrap">
                {part.jobs.map(job => (
                  <button key={job.letter} onClick={() => setSel(prev => prev.map((v,i) => i===pi ? job.letter : v))}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all ${
                      sel[pi]===job.letter ? 'bg-[#064e3b] text-white border-[#064e3b]' : 'bg-white border-gray-200 text-gray-500 hover:border-[#064e3b]/40'
                    }`}>{job.letter}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => onDone(sel)} disabled={!allDone}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '提交答卷 →' : 'Next →'}
      </button>
    </div>
  )
}

/* ══════════════════════════════
   Listening Final Result
══════════════════════════════ */
function ListeningFinalResult({ exam, allAnswers }) {
  const parts = exam.listening.parts

  const partScores = parts.map((part, pi) => {
    const ans = allAnswers[pi] || []
    if (part.type === 'picture_mcq' || part.type === 'mcq') {
      const results = part.items.map((item, i) => ans[i] === item.ans)
      const review  = part.items.map((item, i) => ({
        n: item.n, question: item.question,
        userAns: ans[i] != null ? (part.type === 'picture_mcq' ? item.opts[ans[i]]?.label : ABC[ans[i]]) : '—',
        correctAns: part.type === 'picture_mcq' ? item.opts[item.ans]?.label : ABC[item.ans],
        correctFull: part.type === 'picture_mcq' ? item.opts[item.ans]?.desc : item.opts[item.ans],
        isRight: results[i], exp: item.exp,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }
    if (part.type === 'blanks') {
      const fields  = part.fields.filter(f => !f.isExample)
      const results = fields.map((f, i) => (f.ans||[]).some(a => a.trim().toLowerCase() === (ans[i]||'').trim().toLowerCase()))
      const review  = fields.map((f, i) => ({
        n: f.n, question: f.label, userAns: ans[i]||'—', correctAns: f.ans[0], isRight: results[i], exp: f.exp,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }
    if (part.type === 'matching') {
      const results = part.people.map((_, i) => ans[i] === part.ans[i])
      const review  = part.people.map((person, i) => ({
        n: person.n, question: person.name, userAns: ans[i]||'—', correctAns: part.ans[i],
        correctFull: part.jobs.find(j => j.letter === part.ans[i])?.text, isRight: results[i], exp: part.exps[i],
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }
    return { part, correct: 0, total: 0, review: [] }
  })

  const total   = partScores.reduce((s, p) => s + p.total, 0)
  const correct = partScores.reduce((s, p) => s + p.correct, 0)
  const pct     = Math.round(correct / total * 100)

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="text-5xl mb-3">{pct >= 90 ? '🏆' : pct >= 75 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
        <div className="text-6xl font-extrabold text-gray-900 mb-1">{correct}<span className="text-3xl text-gray-300 font-normal"> / {total}</span></div>
        <div className={`text-xl font-bold mt-2 ${pct>=90?'text-emerald-600':pct>=60?'text-[#064e3b]':'text-orange-500'}`}>正确率 {pct}%</div>
        <div className="text-xs text-gray-400 mt-1">KET 听力 · {exam.label}</div>
        <div className="mt-3 text-xs text-gray-400 bg-gray-50 rounded-xl px-4 py-2 inline-block">KET 听力满分 25 分，通过线约 16 分（64%）</div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">各 Part 得分</div>
        <div className="space-y-2.5">
          {partScores.map(({ part, correct: c, total: t }, i) => {
            const pp = t > 0 ? Math.round(c / t * 100) : 0
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">Part {part.part}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${pp}%` }} transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`h-full rounded-full ${pp>=80?'bg-emerald-400':pp>=60?'bg-amber-400':'bg-red-400'}`} />
                </div>
                <span className="text-xs font-bold text-gray-600 w-10 text-right flex-shrink-0">{c}/{t}</span>
              </div>
            )
          })}
        </div>
      </div>
      {partScores.map(({ part, correct: c, total: t, review }, pi) => (
        <div key={pi} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-gray-50 border-b border-gray-100">
            <div className="w-7 h-7 rounded-lg bg-[#064e3b] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-extrabold text-xs">{part.part}</span>
            </div>
            <span className="font-bold text-gray-800 text-sm">{part.title}</span>
            <span className={`ml-auto text-xs font-bold px-2.5 py-0.5 rounded-full ${c===t?'bg-emerald-100 text-emerald-700':c>=t*0.6?'bg-amber-100 text-amber-700':'bg-red-100 text-red-600'}`}>{c}/{t}</span>
          </div>
          <div className="divide-y divide-gray-50">
            {review.map((r, ri) => (
              <div key={ri} className={`px-5 py-3.5 ${r.isRight ? '' : 'bg-red-50/40'}`}>
                <div className="flex items-start gap-2.5">
                  <span className={`text-sm font-extrabold mt-0.5 flex-shrink-0 w-4 ${r.isRight ? 'text-emerald-500' : 'text-red-400'}`}>{r.isRight ? '✓' : '✗'}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-600 mb-1.5 leading-relaxed">
                      <span className="font-bold text-gray-800 mr-1">{r.n}.</span>{r.question}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {!r.isRight && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-lg font-semibold">你的答案：{r.userAns}</span>}
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg font-bold">正确：{r.correctAns}{r.correctFull ? ` · ${r.correctFull}` : ''}</span>
                    </div>
                    {!r.isRight && r.exp && <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{r.exp}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex gap-3 pb-4">
        <Link to={`/cambridge/exams/${exam.id}`} onClick={() => window.location.reload()}
          className="flex-1 py-3.5 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] text-sm text-center transition-colors">
          重新测试 →
        </Link>
        <Link to="/cambridge/exams"
          className="flex-1 py-3.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-2xl hover:border-gray-300 text-sm text-center transition-colors">
          返回列表
        </Link>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════════════
   READING EXAM
══════════════════════════════════════════════════════════ */

function countReadingMistakes(part, answers = []) {
  if (['text_mcq', 'multiple_matching', 'article_mcq', 'gap_fill_mcq'].includes(part.type)) {
    return part.questions.reduce((count, question, index) => count + (answers[index] !== question.ans ? 1 : 0), 0)
  }
  if (part.type === 'open_gap_fill') {
    return part.questions.reduce((count, question, index) => {
      const value = String(answers[index] || '').trim().toLowerCase()
      return count + ((question.ans || []).some(answer => answer.trim().toLowerCase() === value) ? 0 : 1)
    }, 0)
  }
  return 0
}

function ReadingExam({ exam, section, onSection }) {
  const parts = exam.reading.parts
  const progressKey = `mars_ket_exam_progress_v1:${exam.id}:reading`
  const [savedProgress] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem(progressKey) || 'null')
      return value && typeof value === 'object' ? value : {}
    } catch { return {} }
  })
  const [partIndex, setPartIndex] = useState(() => Math.min(savedProgress.partIndex || 0, parts.length - 1))
  const [allAnswers, setAllAnswers] = useState(() => savedProgress.allAnswers || {})
  const [done, setDone] = useState(() => savedProgress.done === true)

  function saveProgress(next) {
    try {
      localStorage.setItem(progressKey, JSON.stringify({ ...next, savedAt: new Date().toISOString() }))
    } catch { /* local storage may be unavailable */ }
  }

  function restartReading() {
    try { localStorage.removeItem(progressKey) } catch { /* local storage may be unavailable */ }
  }

  function resetReading() {
    restartReading()
    setPartIndex(0)
    setAllAnswers({})
    setDone(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handlePartDone(answers) {
    const updated = { ...allAnswers, [partIndex]: answers }
    const wrongCounts = Object.fromEntries(Object.entries(updated).map(([index, values]) => [index, countReadingMistakes(parts[Number(index)], values)]))
    setAllAnswers(updated)
    if (partIndex + 1 >= parts.length) {
      setDone(true)
      saveProgress({ partIndex, allAnswers: updated, wrongCounts, done: true })
    } else {
      const nextPartIndex = partIndex + 1
      setPartIndex(nextPartIndex)
      saveProgress({ partIndex: nextPartIndex, allAnswers: updated, wrongCounts, done: false })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (done) return (
    <ExamShell exam={exam} section={section} onSection={onSection}
      parts={parts} partIndex={partIndex} allAnswers={allAnswers} isDone>
      <ReadingFinalResult exam={exam} allAnswers={allAnswers} onRestart={restartReading} />
    </ExamShell>
  )

  const part = parts[partIndex]
  return (
    <ExamShell exam={exam} section={section} onSection={onSection}
      parts={parts} partIndex={partIndex} allAnswers={allAnswers} onReset={resetReading}>
      <AnimatePresence mode="wait">
        <motion.div key={partIndex}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}>
          <ReadingPartRouter part={part} isLast={partIndex + 1 >= parts.length} onDone={handlePartDone} />
        </motion.div>
      </AnimatePresence>
    </ExamShell>
  )
}

/* ══════════════════════════════
   Reading Part Router
══════════════════════════════ */
function ReadingPartRouter({ part, isLast, onDone }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-[#064e3b] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-extrabold text-sm">{part.part}</span>
        </div>
        <div>
          <div className="font-bold text-gray-900">{part.title}</div>
          {part.preContext && <div className="text-xs text-gray-500 mt-0.5 leading-snug">{part.preContext}</div>}
        </div>
      </div>
      <div className="bg-[#064e3b]/5 border border-[#064e3b]/10 rounded-2xl px-5 py-3 mb-5">
        <p className="text-sm text-gray-700">{part.instructions}</p>
      </div>
      {part.type === 'text_mcq'          && <TextMCQPart          part={part} isLast={isLast} onDone={onDone} />}
      {part.type === 'multiple_matching'  && <MultipleMatchingPart part={part} isLast={isLast} onDone={onDone} />}
      {part.type === 'article_mcq'        && <ArticleMCQPart       part={part} isLast={isLast} onDone={onDone} />}
      {part.type === 'gap_fill_mcq'       && <GapFillMCQPart       part={part} isLast={isLast} onDone={onDone} />}
      {part.type === 'open_gap_fill'      && <OpenGapFillPart      part={part} isLast={isLast} onDone={onDone} />}
    </div>
  )
}

/* ── Part 1: Short-text MCQ ── */
function TextMCQPart({ part, isLast, onDone }) {
  const [sel, setSel] = useState(Array(part.questions.length).fill(null))
  const allDone = sel.every(s => s !== null)

  return (
    <div>
      <div className="space-y-4 mb-6">
        {part.questions.map((q, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Text source */}
            <div className="bg-gray-50 border-b border-gray-100 px-5 py-3">
              {q.type === 'message' || q.type === 'email' ? (
                <div className="text-xs text-gray-400 mb-1">
                  {q.type === 'message' ? '📱 Message' : '✉️ Email'}
                  {q.from && <> • From: <strong>{q.from}</strong>{q.to && <> to <strong>{q.to}</strong></>}</>}
                </div>
              ) : (
                <div className="text-xs text-gray-400 mb-1">📋 {q.label || 'Notice'}</div>
              )}
              <p className="text-sm text-gray-800 italic leading-relaxed whitespace-pre-line">"{q.content}"</p>
            </div>
            {/* Question & options */}
            <div className="p-5">
              <p className="text-sm font-semibold text-gray-800 mb-3">
                <span className="text-[#064e3b] font-bold mr-1">{q.n}.</span>
                {q.question || `What does this ${q.from ? 'message' : 'notice'} mean?`}
              </p>
              <div className="space-y-2">
                {q.opts.map((opt, j) => (
                  <button key={j} onClick={() => setSel(prev => prev.map((v,k) => k===i ? j : v))}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left transition-all ${
                      sel[i]===j ? 'border-[#064e3b] bg-[#064e3b]/5' : 'border-gray-200 bg-white hover:border-[#064e3b]/30 hover:bg-gray-50'
                    }`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                      sel[i]===j ? 'bg-[#064e3b] text-white' : 'bg-gray-100 text-gray-500'
                    }`}>{ABC[j]}</span>
                    <span className="text-sm text-gray-800">{opt}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => onDone(sel)} disabled={!allDone}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '提交答卷 →' : 'Part 2 →'}
      </button>
    </div>
  )
}

/* ── Part 2: Multiple matching ── */
function MultipleMatchingPart({ part, isLast, onDone }) {
  const [sel, setSel] = useState(Array(part.questions.length).fill(null))
  const [expandedPassage, setExpandedPassage] = useState(null)
  const allDone = sel.every(s => s !== null)

  return (
    <div>
      {/* Passages (collapsible) */}
      <div className="space-y-2 mb-5">
        {part.passages.map((p, pi) => (
          <div key={pi} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button onClick={() => setExpandedPassage(expandedPassage === pi ? null : pi)}
              className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-gray-50 transition-colors">
              <span className="w-7 h-7 rounded-lg bg-[#064e3b] flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0">{p.label}</span>
              <span className="font-semibold text-gray-800 text-sm flex-1">{p.name}</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedPassage===pi ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedPassage === pi && (
              <div className="px-5 pb-4 border-t border-gray-50">
                <p className="text-sm text-gray-700 leading-relaxed pt-3">{p.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Questions */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="space-y-3">
          {part.questions.map((q, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xs font-extrabold text-gray-400 mt-2.5 w-5 flex-shrink-0">{q.n}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-800 mb-2">{q.text}</p>
                <div className="flex gap-2">
                  {part.passages.map(p => (
                    <button key={p.label} onClick={() => setSel(prev => prev.map((v,k) => k===i ? p.label : v))}
                      className={`px-4 py-1.5 rounded-xl text-sm font-bold border transition-all ${
                        sel[i]===p.label ? 'bg-[#064e3b] text-white border-[#064e3b]' : 'bg-white border-gray-200 text-gray-500 hover:border-[#064e3b]/40'
                      }`}>{p.label}</button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => onDone(sel)} disabled={!allDone}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '提交答卷 →' : 'Part 3 →'}
      </button>
    </div>
  )
}

/* ── Part 3: Article MCQ ── */
function ArticleMCQPart({ part, isLast, onDone }) {
  const [sel, setSel] = useState(Array(part.questions.length).fill(null))
  const [showArticle, setShowArticle] = useState(true)
  const allDone = sel.every(s => s !== null)

  return (
    <div>
      {/* Article */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-5">
        <button onClick={() => setShowArticle(v => !v)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-100 text-left hover:bg-gray-100 transition-colors">
          <div>
            <div className="font-bold text-gray-900 text-sm">{part.articleTitle}</div>
            {part.author && <div className="text-xs text-gray-500 mt-0.5">{part.author}</div>}
          </div>
          <svg className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${showArticle ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showArticle && (
          <div className="px-5 py-4 max-h-72 overflow-y-auto">
            {part.passage.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed mb-3 last:mb-0">{para}</p>
            ))}
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="space-y-4 mb-6">
        {part.questions.map((q, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-sm font-semibold text-gray-900 mb-3">
              <span className="text-gray-400 font-normal mr-1">{q.n}.</span>{q.text}
            </p>
            <div className="space-y-2">
              {q.opts.map((opt, j) => (
                <button key={j} onClick={() => setSel(prev => prev.map((v,k) => k===i ? j : v))}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left transition-all ${
                    sel[i]===j ? 'border-[#064e3b] bg-[#064e3b]/5' : 'border-gray-200 bg-white hover:border-[#064e3b]/30 hover:bg-gray-50'
                  }`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                    sel[i]===j ? 'bg-[#064e3b] text-white' : 'bg-gray-100 text-gray-500'
                  }`}>{ABC[j]}</span>
                  <span className="text-sm text-gray-800">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => onDone(sel)} disabled={!allDone}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '提交答卷 →' : 'Part 4 →'}
      </button>
    </div>
  )
}

/* ── Part 4: Gap-fill MCQ ── */
function GapFillMCQPart({ part, isLast, onDone }) {
  const [sel, setSel] = useState(Array(part.questions.length).fill(null))
  const allDone = sel.every(s => s !== null)

  // Parse passage into segments split on [19], [20] etc.
  function renderPassage() {
    const segments = part.passage.split(/(\[\d+\])/g)
    return segments.map((seg, si) => {
      const match = seg.match(/\[(\d+)\]/)
      if (!match) return <span key={si} className="text-sm text-gray-800">{seg}</span>
      const n = parseInt(match[1])
      const qi = part.questions.findIndex(q => q.n === n)
      const chosen = qi >= 0 ? sel[qi] : null
      return (
        <span key={si} className="inline-flex items-center gap-1 mx-1">
          <span className="text-[10px] text-gray-400 font-bold">[{n}]</span>
          <span className={`px-2 py-0.5 rounded-lg border text-sm font-semibold ${
            chosen !== null ? 'bg-[#064e3b] text-white border-[#064e3b]' : 'bg-yellow-50 border-yellow-300 text-yellow-700 min-w-[40px] text-center'
          }`}>
            {chosen !== null ? part.questions[qi].opts[chosen] : '___'}
          </span>
        </span>
      )
    })
  }

  return (
    <div>
      {/* Article title */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-5">
        <div className="bg-gray-50 border-b border-gray-100 px-5 py-3">
          <div className="font-bold text-gray-900 text-sm">{part.articleTitle}</div>
        </div>
        <div className="px-5 py-4">
          <p className="leading-loose">{renderPassage()}</p>
        </div>
      </div>

      {/* Option selectors */}
      <div className="space-y-3 mb-6">
        {part.questions.map((q, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
            <span className="text-xs font-extrabold text-gray-400 w-7 flex-shrink-0">[{q.n}]</span>
            <div className="flex gap-2 flex-wrap">
              {q.opts.map((opt, j) => (
                <button key={j} onClick={() => setSel(prev => prev.map((v,k) => k===i ? j : v))}
                  className={`px-3 py-1.5 rounded-xl text-sm font-semibold border transition-all ${
                    sel[i]===j ? 'bg-[#064e3b] text-white border-[#064e3b]' : 'bg-white border-gray-200 text-gray-600 hover:border-[#064e3b]/40'
                  }`}>{ABC[j]} {opt}</button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => onDone(sel)} disabled={!allDone}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '提交答卷 →' : 'Part 5 →'}
      </button>
    </div>
  )
}

/* ── Part 5: Open gap fill ── */
function OpenGapFillPart({ part, isLast, onDone }) {
  const [inputs, setInputs] = useState(Array(part.questions.length).fill(''))
  const allFilled = inputs.every(v => v.trim())

  function renderPassage(text) {
    const segs = text.split(/(\[\d+\])/g)
    return segs.map((seg, si) => {
      const match = seg.match(/\[(\d+)\]/)
      if (!match) return <span key={si} className="text-sm text-gray-800">{seg}</span>
      const n  = parseInt(match[1])
      const qi = part.questions.findIndex(q => q.n === n)
      return (
        <span key={si} className="inline-flex items-center gap-0.5 mx-0.5">
          <span className="text-[10px] text-[#064e3b] font-bold">({n})</span>
          <input
            value={inputs[qi] || ''}
            onChange={e => setInputs(prev => prev.map((v,k) => k===qi ? e.target.value : v))}
            placeholder="___"
            className="w-20 px-2 py-0.5 text-sm font-medium border-b-2 border-[#064e3b]/30 focus:border-[#064e3b] bg-transparent outline-none text-center transition-colors"
          />
        </span>
      )
    })
  }

  return (
    <div>
      {/* Example */}
      {part.example && (
        <div className="bg-gray-50 rounded-xl border border-gray-100 px-4 py-3 mb-5 text-sm">
          <span className="font-bold text-gray-400 mr-1.5">Example [0]:</span>
          <span className="text-gray-600">{part.example.hint}</span>
          <span className="ml-2 font-bold text-[#064e3b]">→ "{part.example.ans}"</span>
        </div>
      )}

      {/* Passages with inline inputs */}
      <div className="space-y-4 mb-6">
        {part.passages.map((p, pi) => (
          <div key={pi} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-100 px-5 py-2.5 text-xs text-gray-500 font-semibold">
              {p.from ? `✉️ ${p.from} → ${p.to}` : `📝 ${p.label || 'Passage'}`}
            </div>
            <div className="px-5 py-4">
              <p className="leading-loose">{renderPassage(p.text)}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => onDone(inputs)} disabled={!allFilled}
        className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base">
        {isLast ? '查看结果 →' : 'Next →'}
      </button>
    </div>
  )
}

/* ══════════════════════════════
   Reading Final Result
══════════════════════════════ */
/* ══════════════════════════════
   WritingCard — self-contained writing + grading
══════════════════════════════ */
function scoreWriting(text, w) {
  const words = text.trim().split(/\s+/).filter(Boolean)
  const wc = words.length
  const minWords = w.type === 'story_writing' ? 35 : 25

  // ── 1. Word count (0–5)
  const wcScore = wc === 0 ? 0 : wc < minWords ? Math.round((wc / minWords) * 3) : wc >= minWords * 2.5 ? 5 : Math.min(5, 3 + Math.round(((wc - minWords) / (minWords * 1.5)) * 2))

  // ── 2. Sentence variety (0–5)
  const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 3)
  const sc = sentences.length
  let varScore = 0
  if (sc >= 2) {
    const lens = sentences.map(s => s.split(/\s+/).filter(Boolean).length)
    const mean = lens.reduce((a, b) => a + b, 0) / lens.length
    const variance = lens.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / lens.length
    const starters = new Set(sentences.map(s => s.trim().split(/\s+/)[0]?.toLowerCase()))
    const connectives = (text.match(/\b(however|although|because|therefore|meanwhile|suddenly|finally|moreover|furthermore|after|before|when|while|so|but|and then)\b/gi) || []).length
    varScore = Math.min(5, Math.round((Math.min(variance, 25) / 25) * 2 + (starters.size / sc) * 2 + Math.min(connectives, 3) / 3))
  }

  // ── 3. Spelling heuristic (0–5): detect common errors
  const errors = []
  if (/ i /i.test(text.replace(/^i /i, ''))) errors.push('代词"I"需大写')
  if (/\bim\b|\bdont\b|\bcant\b|\bwont\b|\bisnt\b|\barent\b/i.test(text)) errors.push('缺少撇号（I\'m / don\'t）')
  if (/  /.test(text)) errors.push('双空格')
  const sentList = text.split(/(?<=[.!?])\s+/)
  const badCaps = sentList.filter(s => s && s[0] === s[0].toLowerCase() && /[a-z]/.test(s[0])).length
  if (badCaps > 0) errors.push('句首需大写')
  if (wc > 5 && !/[.!?]$/.test(text.trim())) errors.push('结尾缺少标点')
  const spelScore = Math.max(0, 5 - errors.length)

  // ── 4. Content coverage (0–5)
  const lower = text.toLowerCase()
  const kw = w.type === 'guided_writing'
    ? ['cinema', 'film', 'movie', 'saturday', 'weekend', 'invite', 'join', 'enjoy', 'like', 'watch', 'dear', 'hi', 'best', 'wishes']
    : ['suddenly', 'then', 'after', 'finally', 'so', 'but', 'was', 'were', 'walked', 'ran', 'fell', 'looked', 'climbed', 'kicked', 'park', 'ball', 'tree', 'girl']
  const hits = kw.filter(k => lower.includes(k)).length
  const covScore = Math.min(5, Math.round((hits / (kw.length * 0.5)) * 5))

  const total = wcScore + varScore + spelScore + covScore  // max 20
  return { wcScore, varScore, spelScore, covScore, total, errors, wc, sc }
}

function ScoreDots({ n, max = 5 }) {
  return (
    <span className="inline-flex gap-1 ml-1">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`w-2.5 h-2.5 rounded-full ${i < n ? 'bg-[#064e3b]' : 'bg-gray-200'}`} />
      ))}
    </span>
  )
}

export function WritingCard({ w, wi, storageKey }) {
  const [text, setText] = useState(() => {
    if (!storageKey) return ''
    try { return localStorage.getItem(storageKey) || '' } catch { return '' }
  })
  const [graded, setGraded] = useState(null)
  const [showModel, setShowModel] = useState(false)

  useEffect(() => {
    if (!storageKey) return
    try { localStorage.setItem(storageKey, text) } catch { /* local storage may be unavailable */ }
  }, [storageKey, text])

  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minWords = w.type === 'story_writing' ? 35 : 25
  const canGrade = words >= 5

  function handleGrade() {
    setGraded(scoreWriting(text, w))
  }

  return (
    <div className={`px-5 py-5 ${wi > 0 ? 'border-t border-gray-100' : ''}`}>
      {/* Title */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-6 h-6 rounded-lg bg-[#064e3b] flex items-center justify-center text-white text-xs font-extrabold">{w.part}</span>
        <span className="font-bold text-gray-800 text-sm">{w.title}</span>
      </div>

      {/* Prompt */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 px-4 py-3 mb-3">
        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed mb-3">{w.prompt}</pre>
        {w.imageSrc && (
          <img src={w.imageSrc} alt="Story pictures" className="w-full rounded-xl border border-gray-200 select-none" draggable={false} />
        )}
      </div>

      {/* Tips */}
      <div className="flex gap-1.5 flex-wrap mb-3">
        {w.tips.map((tip, ti) => (
          <span key={ti} className="text-xs bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded-full">💡 {tip}</span>
        ))}
      </div>

      {/* Textarea */}
      <div className="relative">
        <textarea
          value={text}
          onChange={e => { setText(e.target.value); setGraded(null) }}
          placeholder="在这里写作..."
          rows={7}
          spellCheck
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-gray-800 bg-white focus:border-[#064e3b] outline-none resize-none transition-all leading-relaxed"
        />
        {/* Live stats bar */}
        <div className="flex items-center gap-3 mt-1.5 mb-3">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#064e3b] rounded-full transition-all"
              style={{ width: `${Math.min(100, (words / (minWords * 2)) * 100)}%` }} />
          </div>
          <span className={`text-xs font-bold tabular-nums ${words < minWords ? 'text-amber-500' : 'text-emerald-600'}`}>
            {words} / {minWords}+ words
          </span>
          <span className="text-xs text-gray-400">
            {text.split(/[.!?]+/).filter(s => s.trim().length > 3).length} 句
          </span>
          {storageKey && <span className="text-[10px] text-emerald-600 font-semibold">已自动保存</span>}
        </div>
      </div>

      {/* Grade button */}
      {!graded && (
        <button onClick={handleGrade} disabled={!canGrade}
          className="w-full py-3 bg-[#064e3b] text-white font-bold rounded-xl disabled:opacity-30 hover:bg-[#065f46] transition-all text-sm mb-3">
          ✨ 智能评分
        </button>
      )}

      {/* Score card */}
      {graded && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-4 mb-3">
          {/* Total */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-2xl font-extrabold text-[#064e3b]">{graded.total} <span className="text-base font-normal text-gray-400">/ 20</span></div>
              <div className="text-xs text-gray-500 mt-0.5">
                {graded.total >= 17 ? '🌟 优秀！' : graded.total >= 13 ? '👍 良好，继续加油' : graded.total >= 9 ? '💪 还需练习' : '📖 多写多练'}
              </div>
            </div>
            <button onClick={() => { setText(''); setGraded(null) }}
              className="text-xs text-gray-400 hover:text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors">
              重新写 ↺
            </button>
          </div>

          {/* Dimension rows */}
          {[
            { label: '字数达标', icon: '📝', score: graded.wcScore, note: `${graded.wc} 词 ${graded.wc >= minWords ? '✓' : `（至少 ${minWords} 词）`}` },
            { label: '句型多样性', icon: '🔄', score: graded.varScore, note: `${graded.sc} 个句子` },
            { label: '拼写与标点', icon: '🔤', score: graded.spelScore, note: graded.errors.length === 0 ? '未发现常见错误 ✓' : graded.errors.join('、') },
            { label: '内容覆盖', icon: '🎯', score: graded.covScore, note: graded.covScore >= 4 ? '覆盖了主要要点' : '可以更全面地覆盖要点' },
          ].map(({ label, icon, score, note }) => (
            <div key={label} className="flex items-start gap-3 py-2 border-t border-emerald-100 first:border-0">
              <span className="text-base w-5 flex-shrink-0">{icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{label}</span>
                  <span className="flex items-center gap-1">
                    <ScoreDots n={score} />
                    <span className="text-xs text-gray-400 ml-1 tabular-nums">{score}/5</span>
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{note}</div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Model answer */}
      <button onClick={() => setShowModel(v => !v)}
        className="text-xs text-[#064e3b] font-semibold hover:underline">
        {showModel ? '隐藏参考答案 ▲' : '查看参考答案 ▼'}
      </button>
      {showModel && (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
          <div className="text-xs font-bold text-emerald-700 mb-1.5">参考答案</div>
          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">{w.modelAnswer}</pre>
        </motion.div>
      )}
    </div>
  )
}

function ReadingFinalResult({ exam, allAnswers, onRestart }) {
  const parts    = exam.reading.parts
  const writings = exam.reading.writing

  const partScores = parts.map((part, pi) => {
    const ans = allAnswers[pi] || []

    if (part.type === 'text_mcq') {
      const results = part.questions.map((q, i) => ans[i] === q.ans)
      const review  = part.questions.map((q, i) => ({
        n: q.n, question: q.question || `"${q.content.slice(0, 60)}${q.content.length>60?'…':''}"`,
        userAns: ans[i] != null ? ABC[ans[i]] : '—',
        correctAns: ABC[q.ans], correctFull: q.opts[q.ans],
        isRight: results[i], exp: q.exp,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }

    if (part.type === 'multiple_matching') {
      const results = part.questions.map((q, i) => ans[i] === q.ans)
      const review  = part.questions.map((q, i) => ({
        n: q.n, question: q.text,
        userAns: ans[i] || '—', correctAns: q.ans,
        correctFull: part.passages.find(p => p.label === q.ans)?.name,
        isRight: results[i], exp: q.exp,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }

    if (part.type === 'article_mcq') {
      const results = part.questions.map((q, i) => ans[i] === q.ans)
      const review  = part.questions.map((q, i) => ({
        n: q.n, question: q.text,
        userAns: ans[i] != null ? ABC[ans[i]] : '—',
        correctAns: ABC[q.ans], correctFull: q.opts[q.ans],
        isRight: results[i], exp: q.exp,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }

    if (part.type === 'gap_fill_mcq') {
      const results = part.questions.map((q, i) => ans[i] === q.ans)
      const review  = part.questions.map((q, i) => ({
        n: q.n, question: `Gap [${q.n}]`,
        userAns: ans[i] != null ? `${ABC[ans[i]]} ${q.opts[ans[i]]}` : '—',
        correctAns: `${ABC[q.ans]} ${q.opts[q.ans]}`,
        isRight: results[i], exp: q.exp,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }

    if (part.type === 'open_gap_fill') {
      const results = part.questions.map((q, i) =>
        (q.ans || []).some(a => a.trim().toLowerCase() === (ans[i] || '').trim().toLowerCase())
      )
      const review = part.questions.map((q, i) => ({
        n: q.n, question: `Gap (${q.n})`,
        userAns: ans[i] || '—', correctAns: q.ans[0],
        correctFull: q.ans.length > 1 ? `也可以: ${q.ans.slice(1).join(' / ')}` : null,
        isRight: results[i], exp: q.exp,
      }))
      return { part, correct: results.filter(Boolean).length, total: results.length, review }
    }

    return { part, correct: 0, total: 0, review: [] }
  })

  const total   = partScores.reduce((s, p) => s + p.total, 0)
  const correct = partScores.reduce((s, p) => s + p.correct, 0)
  const pct     = Math.round(correct / total * 100)

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

      {/* Score card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="text-5xl mb-3">{pct >= 90 ? '🏆' : pct >= 75 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
        <div className="text-6xl font-extrabold text-gray-900 mb-1">{correct}<span className="text-3xl text-gray-300 font-normal"> / {total}</span></div>
        <div className={`text-xl font-bold mt-2 ${pct>=90?'text-emerald-600':pct>=60?'text-[#064e3b]':'text-orange-500'}`}>正确率 {pct}%</div>
        <div className="text-xs text-gray-400 mt-1">KET 阅读 · {exam.label}</div>
        <div className="mt-3 text-xs text-gray-400 bg-gray-50 rounded-xl px-4 py-2 inline-block">KET 阅读满分 30 分，通过线约 18 分（60%）</div>
      </div>

      {/* Part breakdown */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">各 Part 得分</div>
        <div className="space-y-2.5">
          {partScores.map(({ part, correct: c, total: t }, i) => {
            const pp = t > 0 ? Math.round(c / t * 100) : 0
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">Part {part.part}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${pp}%` }} transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`h-full rounded-full ${pp>=80?'bg-emerald-400':pp>=60?'bg-amber-400':'bg-red-400'}`} />
                </div>
                <span className="text-xs font-bold text-gray-600 w-10 text-right flex-shrink-0">{c}/{t}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Per-part review */}
      {partScores.map(({ part, correct: c, total: t, review }, pi) => (
        <div key={pi} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-gray-50 border-b border-gray-100">
            <div className="w-7 h-7 rounded-lg bg-[#064e3b] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-extrabold text-xs">{part.part}</span>
            </div>
            <span className="font-bold text-gray-800 text-sm">{part.title}</span>
            <span className={`ml-auto text-xs font-bold px-2.5 py-0.5 rounded-full ${c===t?'bg-emerald-100 text-emerald-700':c>=t*0.6?'bg-amber-100 text-amber-700':'bg-red-100 text-red-600'}`}>{c}/{t}</span>
          </div>
          <div className="divide-y divide-gray-50">
            {review.map((r, ri) => (
              <div key={ri} className={`px-5 py-3.5 ${r.isRight ? '' : 'bg-red-50/40'}`}>
                <div className="flex items-start gap-2.5">
                  <span className={`text-sm font-extrabold mt-0.5 flex-shrink-0 w-4 ${r.isRight ? 'text-emerald-500' : 'text-red-400'}`}>{r.isRight ? '✓' : '✗'}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-600 mb-1.5 leading-relaxed">
                      <span className="font-bold text-gray-800 mr-1">{r.n}.</span>{r.question}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {!r.isRight && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-lg font-semibold">你的答案：{r.userAns}</span>}
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg font-bold">正确：{r.correctAns}{r.correctFull ? ` · ${r.correctFull}` : ''}</span>
                    </div>
                    {!r.isRight && r.exp && <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{r.exp}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Writing section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-3.5 bg-emerald-50 border-b border-emerald-100">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm">✍️</span>
          </div>
          <span className="font-bold text-gray-800 text-sm">Writing 写作练习</span>
          <span className="ml-auto text-xs text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full">AI 评分</span>
        </div>
        {writings.map((w, wi) => (
          <WritingCard key={wi} w={w} wi={wi} />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pb-4">
        <Link to={`/cambridge/exams/${exam.id}?tab=reading`} onClick={onRestart}
          className="flex-1 py-3.5 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] text-sm text-center transition-colors">
          重新测试 →
        </Link>
        <Link to="/cambridge/exams"
          className="flex-1 py-3.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-2xl hover:border-gray-300 text-sm text-center transition-colors">
          返回列表
        </Link>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════
   Writing Exam (standalone)
══════════════════════════════ */
function WritingExam({ exam, section, onSection }) {
  const writings = exam.reading.writing
  const [searchParams] = useSearchParams()
  const writingBaseKey = `mars_ket_exam_progress_v1:${exam.id}:writing`
  const requestedPart = searchParams.get('part')
  const initialPart = requestedPart === '7' ? 1 : requestedPart === '6' ? 0 : (() => {
    try { return Number(localStorage.getItem(`${writingBaseKey}:lastPart`)) || 0 } catch { return 0 }
  })()
  const [partIndex, setPartIndex] = useState(initialPart)
  const w = writings[partIndex]

  function selectWritingPart(index) {
    setPartIndex(index)
    try { localStorage.setItem(`${writingBaseKey}:lastPart`, String(index)) } catch { /* local storage may be unavailable */ }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link to="/cambridge/exams" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors group">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">真题列表</span>
          </Link>
          <span className="font-bold text-gray-900 text-sm">{exam.label}</span>
          <div className="w-16" />
        </div>
        <SectionTabs exam={exam} section={section} onSection={onSection} />
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">

        {/* Part switcher */}
        <div className="flex gap-2">
          {writings.map((wt, i) => (
            <button key={i} onClick={() => selectWritingPart(i)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                partIndex === i
                  ? 'bg-[#064e3b] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-500 hover:border-[#064e3b]/30'
              }`}>
              Part {wt.part}
            </button>
          ))}
        </div>

        {/* Header card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-extrabold text-sm">{w.part}</span>
            </div>
            <div className="font-bold text-gray-900">{w.title}</div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {w.type === 'guided_writing' ? '按提示写一封25词以上的电子邮件' : '看三幅图，写35词以上的故事'}
          </p>
        </div>

        {/* Writing card */}
        <AnimatePresence mode="wait">
          <motion.div key={partIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <WritingCard w={w} wi={partIndex} storageKey={`${writingBaseKey}:part${w.part}:draft`} />
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}

/* ══════════════════════════════
   Speaking Exam
══════════════════════════════ */
function useTTS() {
  const [speaking, setSpeaking] = useState(null)

  function speak(id, text) {
    window.speechSynthesis.cancel()
    if (speaking === id) { setSpeaking(null); return }

    const utt = new SpeechSynthesisUtterance(text)
    utt.lang = 'en-GB'
    utt.rate = 0.9
    utt.pitch = 1.05

    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v => v.lang.startsWith('en') && /female|samantha|karen|victoria|moira|tessa|fiona/i.test(v.name))
      || voices.find(v => v.lang.startsWith('en-GB'))
      || voices.find(v => v.lang.startsWith('en'))
    if (preferred) utt.voice = preferred

    utt.onstart = () => setSpeaking(id)
    utt.onend   = () => setSpeaking(null)
    utt.onerror = () => setSpeaking(null)
    window.speechSynthesis.speak(utt)
  }

  function stop() { window.speechSynthesis.cancel(); setSpeaking(null) }

  return { speaking, speak, stop }
}

function SpeakingExam({ exam, section, onSection }) {
  const [searchParams] = useSearchParams()
  const initialPart = searchParams.get('part') === '2' ? 1 : 0
  const [partIndex, setPartIndex] = useState(initialPart)
  const sp = exam.speaking
  const part = sp.parts[partIndex]
  const { speaking, speak, stop } = useTTS()

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link to="/cambridge/exams" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors group">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">真题列表</span>
          </Link>
          <span className="font-bold text-gray-900 text-sm">{exam.label}</span>
          <div className="w-16" />
        </div>
        <SectionTabs exam={exam} section={section} onSection={s => { stop(); onSection(s) }} />
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">

        {/* Part switcher */}
        <div className="flex gap-2">
          {sp.parts.map((p, i) => (
            <button key={i} onClick={() => { stop(); setPartIndex(i) }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                partIndex === i
                  ? 'bg-[#064e3b] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-500 hover:border-[#064e3b]/30'
              }`}>
              Part {p.part}
            </button>
          ))}
        </div>

        {/* Part header */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-[#064e3b] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-extrabold text-sm">{part.part}</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">{part.title}</div>
              <div className="text-xs text-gray-400">{part.duration}</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{part.description}</p>
        </div>

        {/* Topic cards */}
        <AnimatePresence mode="wait">
          <motion.div key={partIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            {part.topics.map((topic) => (
              <SpeakingTopicCard key={topic.id} topic={topic} part={part.part}
                examId={exam.id}
                isSpeaking={speaking === topic.id}
                onSpeak={() => speak(topic.id, topic.modelAnswer)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}

function SpeakingTopicCard({ topic, part, examId, isSpeaking, onSpeak }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <motion.div layout className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

      {topic.theme && (
        <div className="bg-[#064e3b] px-5 py-2.5 flex items-center gap-2">
          <span className="text-white font-bold text-sm">{topic.theme}</span>
          <span className="text-emerald-300 text-xs">· {topic.themeZh}</span>
        </div>
      )}

      <div className="px-5 py-4">
        {part === 1 ? (
          <>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1.5">考官提问</div>
            <p className="text-base font-semibold text-gray-900 leading-snug mb-1">{topic.question}</p>
            <p className="text-xs text-gray-400 mb-4">{topic.chineseHint}</p>
          </>
        ) : (
          <>
            {topic.imageSrc && (
              <img src={topic.imageSrc} alt={`${topic.theme} speaking card`}
                className="w-full rounded-xl border border-gray-200 mb-4 bg-white" draggable={false} />
            )}
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">话题问题</div>
            <ul className="space-y-1.5 mb-4">
              {topic.cardPrompts.map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                  <span className="text-sm text-gray-800">{q}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Listen button */}
        <button onClick={onSpeak}
          className={`w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-bold text-sm transition-all mb-3 ${
            isSpeaking
              ? 'bg-emerald-500 text-white shadow-md scale-[0.99]'
              : 'bg-[#064e3b] text-white hover:bg-[#065f46] active:scale-[0.99]'
          }`}>
          {isSpeaking ? (
            <>
              <SpeakingWave />
              <span>正在播放… 点击停止</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
              <span>🎧 听范例答案</span>
            </>
          )}
        </button>

        {/* Model answer toggle */}
        <button onClick={() => setShowAnswer(v => !v)}
          className="text-xs text-[#064e3b] font-semibold hover:underline">
          {showAnswer ? '隐藏范例答案 ▲' : '查看范例答案 ▼'}
        </button>

        {showAnswer && (
          <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
            className="mt-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
            <div className="text-xs font-bold text-emerald-700 mb-2">🗣 范例答案</div>
            <p className="text-sm text-gray-800 leading-relaxed">{topic.modelAnswer}</p>
          </motion.div>
        )}

        {/* Phrase chips */}
        {topic.phrases && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {topic.phrases.map((ph, i) => (
              <span key={i} className="text-xs bg-blue-50 border border-blue-200 text-blue-700 px-2.5 py-1 rounded-full font-medium">
                💬 {ph}
              </span>
            ))}
          </div>
        )}

        <SpeakingRecordingPractice examId={examId} topic={topic} />
      </div>
    </motion.div>
  )
}

function SpeakingRecordingPractice({ examId, topic }) {
  const recorderRef = useRef(null)
  const streamRef = useRef(null)
  const chunksRef = useRef([])
  const audioUrlRef = useRef(null)
  const [recording, setRecording] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [audioUrl, setAudioUrl] = useState(null)
  const [message, setMessage] = useState('')
  const assessmentKey = `mars_ket_speaking_progress_v1:${examId}:${topic.id}`
  const [assessment, setAssessment] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(assessmentKey) || 'null') || {
        fluency: 0,
        pronunciation: 0,
        content: 0,
      }
    } catch {
      return { fluency: 0, pronunciation: 0, content: 0 }
    }
  })

  useEffect(() => {
    if (!recording) return undefined
    const timer = window.setInterval(() => setSeconds(value => value + 1), 1000)
    return () => window.clearInterval(timer)
  }, [recording])

  useEffect(() => () => {
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current)
    streamRef.current?.getTracks().forEach(track => track.stop())
  }, [])

  async function startRecording() {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setMessage('当前浏览器不支持录音，请使用最新版 Chrome 或 Safari。')
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      streamRef.current = stream
      recorderRef.current = recorder
      chunksRef.current = []
      setSeconds(0)
      setMessage('')
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current)
        audioUrlRef.current = null
        setAudioUrl(null)
      }
      recorder.ondataavailable = event => {
        if (event.data.size > 0) chunksRef.current.push(event.data)
      }
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' })
        const nextAudioUrl = URL.createObjectURL(blob)
        audioUrlRef.current = nextAudioUrl
        setAudioUrl(nextAudioUrl)
        stream.getTracks().forEach(track => track.stop())
        streamRef.current = null
      }
      recorder.start()
      setRecording(true)
    } catch {
      setMessage('没有获得麦克风权限。请允许使用麦克风后再试一次。')
    }
  }

  function stopRecording() {
    if (recorderRef.current?.state === 'recording') recorderRef.current.stop()
    setRecording(false)
  }

  function updateAssessment(key, value) {
    const next = { ...assessment, [key]: value, updatedAt: new Date().toISOString() }
    setAssessment(next)
    try {
      localStorage.setItem(assessmentKey, JSON.stringify(next))
    } catch {
      // Self-assessment remains usable if storage is unavailable.
    }
  }

  const assessmentItems = [
    ['fluency', '流利度'],
    ['pronunciation', '发音清晰度'],
    ['content', '内容完整度'],
  ]

  return (
    <section className="mt-4 rounded-2xl border border-[#ead58f] bg-[#fffaf0] p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-extrabold tracking-wide text-[#8a6500]">轮到你回答</div>
          <p className="mt-1 text-sm text-gray-600">先独立作答并录音，再回放检查。录音只保留在当前页面。</p>
        </div>
        <button
          type="button"
          onClick={recording ? stopRecording : startRecording}
          className={`min-w-[138px] rounded-xl px-4 py-3 text-sm font-extrabold text-white transition ${recording ? 'bg-rose-500 hover:bg-rose-600' : 'bg-[#064e3b] hover:bg-[#065f46]'}`}
        >
          {recording ? `■ 停止录音 ${seconds}s` : '● 开始录音'}
        </button>
      </div>

      {message && <p className="mt-3 rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-700">{message}</p>}

      {audioUrl && (
        <div className="mt-3 rounded-xl border border-gray-200 bg-white p-3">
          <div className="mb-2 flex items-center justify-between text-xs font-bold text-gray-500">
            <span>回放我的回答</span>
            <span>{seconds} 秒</span>
          </div>
          <audio controls src={audioUrl} className="h-10 w-full" />
        </div>
      )}

      <div className="mt-4 border-t border-[#ead58f] pt-4">
        <div className="mb-3 text-xs font-extrabold text-gray-700">完成回放后自评</div>
        <div className="grid gap-3 sm:grid-cols-3">
          {assessmentItems.map(([key, label]) => (
            <div key={key} className="rounded-xl bg-white p-3">
              <div className="text-xs font-bold text-gray-600">{label}</div>
              <div className="mt-2 flex gap-1.5">
                {[1, 2, 3].map(value => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => updateAssessment(key, value)}
                    aria-label={`${label} ${value}分`}
                    className={`grid h-9 flex-1 place-items-center rounded-lg text-sm font-extrabold transition ${assessment[key] === value ? 'bg-[#f7cd60] text-[#4c3a00]' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-400">1＝需要加强　2＝基本完成　3＝表现良好</p>
      </div>
    </section>
  )
}

function SpeakingWave() {
  return (
    <span className="flex items-end gap-0.5 h-4">
      {[12, 7, 14, 6].map((h, i) => (
        <span key={i} className="w-1 bg-white rounded-full animate-pulse"
          style={{ height: `${h}px`, animationDelay: `${i * 0.12}s` }} />
      ))}
    </span>
  )
}
