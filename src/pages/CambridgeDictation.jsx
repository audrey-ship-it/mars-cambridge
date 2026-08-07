import React, { useState, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ketDictationTracks } from '../data/ketDictationData'
import { CambridgeLayout } from './CambridgeApp'

// ── AudioPlayer component ─────────────────────────────────────────────
// pre-generate stable waveform heights per sentence key
const waveCache = {}
function getWave(key) {
  if (!waveCache[key]) {
    waveCache[key] = Array.from({ length: 38 }, () => Math.random() * 24 + 8)
  }
  return waveCache[key]
}

function AudioPlayer({ sKey, isPlaying, onPlay, clipDuration }) {
  const bars = getWave(sKey)
  return (
    <div
      className="flex items-center gap-4 rounded-2xl px-5 py-3.5 shadow-md select-none"
      style={{ background: 'linear-gradient(135deg, #064e3b 0%, #065f46 60%, #047857 100%)' }}
    >
      {/* Play / Stop button */}
      <button
        onClick={onPlay}
        className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg hover:scale-105 active:scale-95 transition-transform"
      >
        {isPlaying ? (
          /* Stop / pause icon */
          <svg className="w-4 h-4 text-[#064e3b]" fill="currentColor" viewBox="0 0 20 20">
            <rect x="5" y="4" width="3" height="12" rx="1" />
            <rect x="12" y="4" width="3" height="12" rx="1" />
          </svg>
        ) : (
          /* Play icon */
          <svg className="w-4 h-4 text-[#064e3b]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.5 5.5l8 4.5-8 4.5V5.5z" />
          </svg>
        )}
      </button>

      {/* Waveform */}
      <div className="flex-1 flex items-center gap-[3px] overflow-hidden" style={{ height: 40 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-[3px] shrink-0 rounded-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
            animate={
              isPlaying
                ? {
                    height: [`${h * 0.25}px`, `${h}px`, `${h * 0.4}px`, `${h * 0.85}px`, `${h * 0.3}px`],
                    opacity: [0.5, 1, 0.65, 1, 0.55],
                  }
                : { height: `${Math.max(h * 0.38, 4)}px`, opacity: 0.4 }
            }
            transition={
              isPlaying
                ? { duration: 0.55 + (i % 7) * 0.13, repeat: Infinity, ease: 'easeInOut', delay: i * 0.028 }
                : { duration: 0.35 }
            }
            initial={{ height: `${Math.max(h * 0.38, 4)}px`, opacity: 0.4 }}
          />
        ))}
      </div>

      {/* Duration */}
      <span className="text-white/60 text-xs font-mono shrink-0 tabular-nums">
        {clipDuration.toFixed(1)}s
      </span>
    </div>
  )
}

// ── helpers ───────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
function norm(w) { return w.toLowerCase().replace(/[^a-z]/g, '') }

function initState(sentence) {
  return {
    userWords:      sentence.words.map(() => ''),
    dictChecked:    false,
    available:      shuffle(sentence.chunksChinese.map((_, i) => i)),
    selected:       [],
    chineseChecked: false,
  }
}

function initAll() {
  const m = {}
  ketDictationTracks.forEach(t =>
    t.sentences.forEach(s => { m[`${t.id}-${s.id}`] = initState(s) })
  )
  return m
}

const SPEEDS = [0.75, 1.0, 1.25, 1.5]

// ── SentenceBlock ─────────────────────────────────────────────────────
function SentenceBlock({ track, sentence, sKey, state, onUpdate, audioRefs, playingKey, setPlayingKey, speed }) {
  const { userWords, dictChecked, available, selected, chineseChecked } = state

  const allFilled = userWords.every(w => w.trim() !== '')
  function isOk(i)  { return norm(userWords[i] ?? '') === norm(sentence.words[i]) }
  const allRight    = sentence.words.every((_, i) => isOk(i))
  const chineseRight =
    selected.length === sentence.chunksChinese.length &&
    selected.every((ci, pos) => ci === pos)

  // ── audio ────────────────────────────────────────────────────────────
  const stopTimer = useRef(null)
  function playClip() {
    // stop any playing
    clearTimeout(stopTimer.current)
    Object.values(audioRefs.current).forEach(a => { try { a.pause() } catch {} })
    setPlayingKey(null)

    if (!audioRefs.current[track.id]) {
      audioRefs.current[track.id] = new Audio(track.audio)
    }
    const audio = audioRefs.current[track.id]
    audio.playbackRate = speed
    audio.currentTime  = sentence.startTime
    audio.play().catch(() => {})
    setPlayingKey(sKey)

    function onTick() {
      if (audio.currentTime >= sentence.endTime) {
        audio.pause()
        setPlayingKey(null)
        audio.removeEventListener('timeupdate', onTick)
        clearTimeout(stopTimer.current)
      }
    }
    audio.addEventListener('timeupdate', onTick)
    stopTimer.current = setTimeout(() => {
      audio.removeEventListener('timeupdate', onTick)
      try { audio.pause() } catch {}
      setPlayingKey(null)
    }, (sentence.endTime - sentence.startTime + 1) * 1000)
  }

  const isPlaying = playingKey === sKey

  // ── typing ────────────────────────────────────────────────────────────
  function handleChange(i, val) {
    const next = [...userWords]
    next[i] = val.replace(/[^a-zA-Z']/g, '')
    onUpdate({ userWords: next })
  }
  function handleKeyDown(e, i) {
    if ((e.key === ' ' || e.key === 'Enter') && i < sentence.words.length - 1) {
      e.preventDefault()
      document.querySelector(`[data-sk="${sKey}"][data-wi="${i + 1}"]`)?.focus()
    }
    if (e.key === 'Backspace' && !userWords[i] && i > 0) {
      e.preventDefault()
      document.querySelector(`[data-sk="${sKey}"][data-wi="${i - 1}"]`)?.focus()
    }
  }

  // ── chinese ───────────────────────────────────────────────────────────
  function selectChunk(ci) {
    onUpdate({ available: available.filter(i => i !== ci), selected: [...selected, ci] })
  }
  function deselectChunk(pos) {
    const ci = selected[pos]
    onUpdate({ available: [...available, ci], selected: selected.filter((_, i) => i !== pos) })
  }
  function resetChinese() {
    onUpdate({
      available: shuffle(sentence.chunksChinese.map((_, i) => i)),
      selected: [],
      chineseChecked: false,
    })
  }

  const done = dictChecked && chineseChecked

  return (
    <div className="space-y-4">

      {/* ── Row 1: Audio ─────────────────────────────────────────────── */}
      <AudioPlayer
        sKey={sKey}
        isPlaying={isPlaying}
        onPlay={() => {
          if (isPlaying) {
            clearTimeout(stopTimer.current)
            Object.values(audioRefs.current).forEach(a => { try { a.pause() } catch {} })
            setPlayingKey(null)
          } else {
            playClip()
          }
        }}
        clipDuration={sentence.endTime - sentence.startTime}
      />

      {/* ── Row 2: Word inputs ───────────────────────────────────────── */}
      <div className="flex flex-wrap items-end gap-x-5 gap-y-5">
        {sentence.words.map((word, i) => {
          const ok  = dictChecked && isOk(i)
          const bad = dictChecked && !isOk(i)
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <input
                data-sk={sKey}
                data-wi={i}
                value={userWords[i] ?? ''}
                onChange={e => handleChange(i, e.target.value)}
                onKeyDown={e => handleKeyDown(e, i)}
                disabled={dictChecked && ok}
                maxLength={word.length + 3}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                className={`bg-transparent outline-none text-center font-mono text-[15px] border-0 border-b-2 pb-0.5 transition-colors
                  ${bad ? 'border-red-400 text-red-500'
                  : ok  ? 'border-emerald-500 text-emerald-700'
                        : 'border-gray-400 focus:border-[#064e3b] text-gray-800'}`}
                style={{ width: `${Math.max(word.length * 12, 34)}px` }}
              />
              {bad && <span className="text-[10px] text-emerald-600 font-semibold">{word}</span>}
              {ok  && <span className="text-[10px] text-emerald-400">✓</span>}
            </div>
          )
        })}

        {/* Check button */}
        {!dictChecked && (
          <button
            onClick={() => onUpdate({ dictChecked: true })}
            disabled={!allFilled}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all mb-0.5
              ${allFilled
                ? 'bg-[#064e3b] text-white hover:bg-emerald-800 active:scale-95'
                : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
          >
            检查
          </button>
        )}
      </div>

      {/* ── Row 2b: Error hint ───────────────────────────────────────── */}
      {dictChecked && !allRight && (
        <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
          <span className="text-amber-500 text-sm mt-0.5">⚠</span>
          <div>
            <p className="text-xs text-amber-600 font-medium mb-0.5">答案</p>
            <p className="text-sm text-gray-700 font-medium">{sentence.english}</p>
          </div>
        </div>
      )}
      {dictChecked && allRight && (
        <p className="text-sm text-emerald-600 font-medium">🎉 全对！</p>
      )}

      {/* ── Row 3: Chinese ordering ──────────────────────────────────── */}
      <div className="pl-0 space-y-3">
        <p className="text-xs text-gray-400 font-medium">中文排序</p>

        {/* Answer zone */}
        <div className={`min-h-[44px] rounded-xl border-2 border-dashed p-2.5 flex flex-wrap gap-2 transition-colors
          ${selected.length > 0 ? 'border-emerald-200 bg-emerald-50/40' : 'border-gray-200'}`}>
          {selected.length === 0
            ? <span className="text-gray-300 text-xs self-center mx-auto">点击下方词块添加…</span>
            : selected.map((ci, pos) => {
                const ok  = chineseChecked && ci === pos
                const bad = chineseChecked && ci !== pos
                return (
                  <button key={pos}
                    onClick={() => !chineseChecked && deselectChunk(pos)}
                    disabled={chineseChecked}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                      ${chineseChecked
                        ? ok  ? 'bg-emerald-100 text-emerald-700 border border-emerald-400'
                              : 'bg-red-100 text-red-600 border border-red-300'
                        : 'bg-[#064e3b] text-white hover:bg-emerald-800 active:scale-95 cursor-pointer'}`}>
                    {sentence.chunksChinese[ci]}
                  </button>
                )
              })
          }
        </div>

        {/* Available chips */}
        {!chineseChecked && available.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {available.map(ci => (
              <button key={ci} onClick={() => selectChunk(ci)}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-all active:scale-95">
                {sentence.chunksChinese[ci]}
              </button>
            ))}
          </div>
        )}

        {/* Result */}
        {chineseChecked && (
          <div className={`px-3 py-2 rounded-xl text-sm font-medium border
            ${chineseRight ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                           : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
            {chineseRight ? `🎉 正确！${sentence.chineseFull}` : `正确顺序：${sentence.chineseFull}`}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          {!chineseChecked ? (
            <>
              <button
                onClick={() => onUpdate({ chineseChecked: true })}
                disabled={selected.length !== sentence.chunksChinese.length}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all
                  ${selected.length === sentence.chunksChinese.length
                    ? 'bg-[#064e3b] text-white hover:bg-emerald-800 active:scale-95'
                    : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}>
                检查排序 ✓
              </button>
              {selected.length > 0 && (
                <button onClick={resetChinese} className="text-xs text-gray-400 hover:text-gray-600">重置</button>
              )}
            </>
          ) : !chineseRight && (
            <button onClick={resetChinese} className="text-xs text-[#064e3b] hover:underline font-medium">再试一次</button>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────
export default function CambridgeDictation() {
  const navigate    = useNavigate()
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const [states, setStates]         = useState(initAll)
  const [playingKey, setPlayingKey] = useState(null)
  const [speed, setSpeed]           = useState(1.0)
  const audioRefs   = useRef({})

  const total = ketDictationTracks.reduce((s, t) => s + t.sentences.length, 0)
  const done  = Object.values(states).filter(s => s.chineseChecked).length

  function upd(key, updates) {
    setStates(prev => ({ ...prev, [key]: { ...prev[key], ...updates } }))
  }

  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      {/* ── Subheader: speed + progress ── */}
      <div className="bg-white border-b border-gray-100 px-6 py-2.5 flex items-center gap-3 sticky top-0 z-10">
        <span className="text-xs font-semibold text-gray-400">倍速</span>
        <div className="flex items-center gap-1">
          {SPEEDS.map(s => (
            <button key={s} onClick={() => setSpeed(s)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all
                ${speed === s ? 'bg-[#064e3b] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
              {s}x
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2 text-sm">
          <div className="w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div className="h-full bg-emerald-500 rounded-full"
              animate={{ width: `${(done / total) * 100}%` }} transition={{ duration: 0.4 }} />
          </div>
          <span className="font-bold text-emerald-600">{done}</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400">{total}</span>
        </div>
      </div>

      {/* ── All sentences ──────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-5 py-8">
        {ketDictationTracks.map((track, ti) => (
          <div key={track.id}>
            {/* Track divider */}
            <div className="flex items-center gap-3 mb-8 mt-4">
              {ti > 0 && <div className="flex-1 h-px bg-gray-200" />}
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 shrink-0">
                {track.partLabel} · {track.title}
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Sentences */}
            <div className="space-y-0">
              {track.sentences.map((sentence, si) => {
                const sKey = `${track.id}-${sentence.id}`
                return (
                  <div key={sKey}>
                    {/* Sentence number label */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center font-semibold shrink-0">
                        {si + 1}
                      </span>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>

                    <SentenceBlock
                      track={track}
                      sentence={sentence}
                      sKey={sKey}
                      state={states[sKey]}
                      onUpdate={u => upd(sKey, u)}
                      audioRefs={audioRefs}
                      playingKey={playingKey}
                      setPlayingKey={setPlayingKey}
                      speed={speed}
                    />

                    {/* Sentence separator */}
                    {si < track.sentences.length - 1 && (
                      <div className="my-8 h-px bg-gray-100" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
        <div className="h-16" />
      </div>
    </CambridgeLayout>
  )
}
