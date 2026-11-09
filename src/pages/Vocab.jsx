// CET-4 / CET-6 单词模块 — 顶部 tab 导航 + 必默词汇按话题编排 + 阅读高频 + 综合词表
// 练习流程为 KET 风格拼写：看中文释义 → 字母格拼写 → 即时反馈 → 结果页
// localStorage（按级别隔离）：mars_{level}_vocab_mastery_v1（掌握）、mars_{level}_vocab_mistakes_v1（错词本）、mars_{level}_vocab_last_result（最近练习统计）

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { vocabLists, VOCAB_META } from '../data/generated/cet4-vocab-full.js'
import { READING_FREQ, READING_FREQ_META } from '../data/generated/cet4-reading-freq.js'
import { vocabLists6, VOCAB_META6 } from '../data/generated/cet6-vocab-full.js'
import { READING_FREQ6, READING_FREQ6_META } from '../data/generated/cet6-reading-freq.js'
import { CET4_TOPICS } from '../data/cet4VocabTopics.js'
import { CET6_TOPICS } from '../data/cet6VocabTopics.js'
import { loadJSON, saveJSON } from '../utils/storage.js'
import { examVars } from '../utils/examTheme.js'
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js'

const READING_CHUNK = 50

function datasetFor(isCet6) {
  return isCet6
    ? { topics: CET6_TOPICS, freq: READING_FREQ6, freqMeta: READING_FREQ6_META, lists: vocabLists6, meta: VOCAB_META6, label: 'CET-6' }
    : { topics: CET4_TOPICS, freq: READING_FREQ, freqMeta: READING_FREQ_META, lists: vocabLists, meta: VOCAB_META, label: 'CET-4' }
}

function keysFor(isCet6) {
  const lv = isCet6 ? 'cet6' : 'cet4'
  return {
    mastery: `mars_${lv}_vocab_mastery_v1`,
    wrong: `mars_${lv}_vocab_mistakes_v1`,
    lastResult: `mars_${lv}_vocab_last_result`,
  }
}

function useMastery(keys) {
  const [mastery, setMastery] = useState(() => loadJSON(keys.mastery, {}))
  const mark = (word, known) => setMastery((prev) => {
    const next = { ...prev }
    if (known) next[word] = { known: true, at: Date.now() }
    else delete next[word]
    saveJSON(keys.mastery, next)
    return next
  })
  return [mastery, mark]
}

function recordWrong(keys, word) {
  const cur = loadJSON(keys.wrong, {})
  saveJSON(keys.wrong, { ...cur, [word]: { ...(cur[word] || {}), right: 0, count: (cur[word]?.count || 0) + 1, lastAt: Date.now() } })
}

// ---- 顶部 tab 导航 ----

function VocabTabs({ active, isCet6 }) {
  const q = isCet6 ? '?exam=cet6' : ''
  const tabs = [
    { id: 'home', label: '我的词汇中心', to: `/words${q}` },
    { id: 'must', label: '必默词汇', to: `/words/must${q}` },
    { id: 'reading', label: '阅读高频', to: `/words/reading${q}` },
    { id: 'official', label: '综合词表', to: `/words/official${q}` },
  ]
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map((t) => (
        <Link
          key={t.id}
          to={t.to}
          className={
            'rounded-xl px-4 py-2 text-sm font-bold transition ' +
            (active === t.id
              ? 'bg-[var(--accent-deep)] text-white'
              : 'bg-[var(--accent-soft)] text-[var(--accent)] hover:bg-[var(--accent-border)]')
          }
        >
          {t.label}
        </Link>
      ))}
    </div>
  )
}

// ---- KET 风格拼写练习（话题 / 阅读高频 / 综合 List / 错词本共用） ----

function speakWord(word) {
  try {
    if (!window.speechSynthesis) return
    const utter = new SpeechSynthesisUtterance(word)
    utter.lang = 'en-US'
    utter.rate = 0.9
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
  } catch {
    /* 浏览器不支持朗读时忽略 */
  }
}

function SpeakerIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5 6.5 9H3v6h3.5L11 19V5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  )
}

/* 取第一个义项作为大字提示，完整释义放在提示面板 */
function primaryZh(zh = '') {
  const firstSense = zh.split(/[；;]/)[0] || ''
  const firstPart = firstSense.split(/[，,]/)[0].trim()
  return firstPart.length > 28 ? `${firstPart.slice(0, 28)}…` : firstPart
}

function spellHintText(word, level) {
  const letters = [...word]
  if (!letters.length) return ''
  if (level === 1) return `${letters[0].toUpperCase()} ${letters.slice(1).map(() => '_').join(' ')}`
  if (level === 2) return `${letters[0].toUpperCase()} ${letters.slice(1, -1).map(() => '_').join(' ')} ${letters[letters.length - 1].toUpperCase()}`
  return letters.map((c, i) => (i === 0 || i === letters.length - 1 || i % 2 === 0 ? c.toUpperCase() : '_')).join(' ')
}

function SpellPractice({ words, title, subtitle, centerTo, backTo, backLabel, keys, reviewMode = false }) {
  const [mastery, mark] = useMastery(keys)
  const [sessionWords, setSessionWords] = useState(words)
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [firstWrongAnswer, setFirstWrongAnswer] = useState('')
  const [results, setResults] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [activePanel, setActivePanel] = useState('tips')
  const [openHints, setOpenHints] = useState(() => new Set())
  const [wrongMap, setWrongMap] = useState(() => loadJSON(keys.wrong, {}))
  const inputRef = useRef(null)

  const total = sessionWords.length
  const item = sessionWords[Math.min(index, total - 1)] || { w: '', ipa: '', zh: '' }
  const progress = total ? Math.round((index / total) * 100) : 0
  const correctCount = results.filter((r) => r.correct).length
  const wrongCount = results.filter((r) => !r.correct).length
  const knownCount = sessionWords.filter((x) => mastery[x.w]?.known).length
  const learnedCount = sessionWords.filter((x) => mastery[x.w]?.known || wrongMap[x.w]).length
  const reviewCount = sessionWords.filter((x) => wrongMap[x.w]).length
  const masteryPercent = total ? Math.round((knownCount / total) * 100) : 0

  const wordLen = item.w.length
  const letterTextSize = wordLen <= 6 ? 'text-3xl sm:text-4xl' : wordLen <= 9 ? 'text-2xl sm:text-3xl' : wordLen <= 12 ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
  const letterBoxWidth = wordLen <= 6 ? 'w-8 sm:w-10' : wordLen <= 9 ? 'w-7 sm:w-9' : wordLen <= 12 ? 'w-6 sm:w-8' : 'w-5 sm:w-7'
  const answerLetters = answer.replace(/\s/g, '')
  const spellHintLevel = openHints.has('partial') ? 3 : openHints.has('lastLetter') ? 2 : openHints.has('firstLetter') ? 1 : 0

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 80)
    return () => clearTimeout(t)
  }, [index, showResult])

  useEffect(() => {
    if (checked) inputRef.current?.focus()
  }, [checked])

  const markWrong = (word) => {
    recordWrong(keys, word)
    setWrongMap(loadJSON(keys.wrong, {}))
  }

  const markRightStreak = (word) => {
    const cur = wrongMap[word] || {}
    const streak = (cur.right || 0) + 1
    const next = { ...wrongMap }
    if (streak >= 2) {
      delete next[word]
      mark(word, true)
    } else {
      next[word] = { ...cur, right: streak, lastAt: Date.now() }
    }
    setWrongMap(next)
    saveJSON(keys.wrong, next)
  }

  const toggleHint = (key) => {
    setOpenHints((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const revealSpellHint = () => {
    if (!openHints.has('firstLetter')) toggleHint('firstLetter')
    else if (!openHints.has('lastLetter')) toggleHint('lastLetter')
    else if (!openHints.has('partial')) toggleHint('partial')
  }

  const resetSession = (nextWords = words) => {
    setSessionWords(nextWords)
    setIndex(0)
    setAnswer('')
    setChecked(false)
    setCorrect(false)
    setWrongAttempts(0)
    setFirstWrongAnswer('')
    setResults([])
    setShowResult(false)
    setActivePanel('tips')
    setOpenHints(new Set())
  }

  const finish = (list) => {
    const right = list.filter((r) => r.correct).length
    saveJSON(keys.lastResult, {
      total: list.length,
      correct: right,
      accuracy: list.length ? Math.round((right / list.length) * 100) : 0,
      at: Date.now(),
    })
    setShowResult(true)
  }

  const nextWordState = () => {
    setIndex((i) => i + 1)
    setAnswer('')
    setChecked(false)
    setCorrect(false)
    setWrongAttempts(0)
    setFirstWrongAnswer('')
    setOpenHints(new Set())
  }

  const handleCheck = () => {
    if (!answer.trim() || !item.w) return
    const normalize = (value) => value.toLowerCase().replace(/\s+/g, '')
    const isCorrect = normalize(answer.trim()) === normalize(item.w)
    if (!isCorrect) {
      if (wrongAttempts === 0) {
        markWrong(item.w)
        setWrongAttempts(1)
        setFirstWrongAnswer(answer.trim())
        setOpenHints((prev) => new Set([...prev, 'firstLetter']))
        setAnswer('')
        setTimeout(() => inputRef.current?.focus(), 0)
        return
      }
      setWrongAttempts((n) => n + 1)
    }
    setCorrect(isCorrect)
    setChecked(true)
    if (isCorrect && reviewMode) markRightStreak(item.w)
  }

  const handleNext = () => {
    const usedHint = openHints.size > 0
    const cleanCorrect = correct && wrongAttempts === 0 && !usedHint
    const updated = [...results, {
      word: item.w,
      zh: item.zh,
      ipa: item.ipa,
      answer: correct ? answer.trim() : (firstWrongAnswer || answer.trim()),
      correct,
      usedHint,
    }]
    setResults(updated)
    if (cleanCorrect) mark(item.w, true)
    if (index + 1 >= total) finish(updated)
    else nextWordState()
  }

  const handleSkip = () => {
    const updated = [...results, {
      word: item.w,
      zh: item.zh,
      ipa: item.ipa,
      answer: firstWrongAnswer || answer.trim(),
      correct: false,
      usedHint: openHints.size > 0,
    }]
    markWrong(item.w)
    setResults(updated)
    if (index + 1 >= total) finish(updated)
    else nextWordState()
  }

  const reviewWrongWords = () => {
    const wrongWords = new Set(results.filter((r) => !r.correct).map((r) => r.word))
    const items = sessionWords.filter((w) => wrongWords.has(w.w))
    if (items.length) resetSession(items)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      if (!checked) handleCheck()
      else handleNext()
    }
    if ((e.key === 'h' || e.key === 'H') && !checked) toggleHint('phonetic')
  }

  // ---- 结果页 ----
  if (showResult) {
    const score = correctCount
    const pct = results.length ? Math.round((score / results.length) * 100) : 0
    const wrongList = results.filter((r) => !r.correct)
    return (
      <div className="max-w-xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center mb-4">
          <div className="text-5xl mb-3">{pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
          <div className="text-6xl font-extrabold text-gray-900 mb-1">
            {score}<span className="text-3xl text-gray-300 font-normal"> / {results.length}</span>
          </div>
          <div className={`text-xl font-bold mt-2 ${pct === 100 ? 'text-emerald-600' : pct >= 60 ? 'text-blue-600' : 'text-orange-500'}`}>
            正确率 {pct}%
          </div>
          <div className="text-sm text-gray-400 mt-1">{title} · {total} 词</div>
          <div className="mt-4 rounded-xl px-4 py-3 text-sm font-bold bg-[var(--accent-soft)] text-[var(--accent-deep)]">
            本组 {total} 个词已完成一轮。
          </div>
        </div>

        {wrongList.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-gray-800">需要加强</span>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">{wrongList.length} 词</span>
            </div>
            <div className="space-y-2">
              {wrongList.map((r, i) => (
                <div key={`${r.word}-${i}`} className="flex items-center gap-3 bg-red-50 rounded-xl px-4 py-2.5">
                  <button onClick={() => speakWord(r.word)} className="text-gray-400 hover:text-[var(--accent)] transition-colors flex-shrink-0" aria-label={`播放 ${r.word} 的发音`}>
                    <SpeakerIcon />
                  </button>
                  <span className="text-sm font-bold text-gray-900 tracking-wide">{r.word}</span>
                  <span className="text-xs text-gray-400 truncate">{primaryZh(r.zh)}</span>
                  <span className="text-xs text-red-400 font-mono ml-auto line-through">{r.answer || '（空）'}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => resetSession()}
          className="w-full py-4 bg-[var(--accent)] text-white font-bold rounded-2xl hover:bg-[var(--accent-deep)] transition-colors text-base mb-2"
        >
          {reviewMode ? '再练一次 →' : '重新学习本组 →'}
        </button>
        {wrongList.length > 0 && (
          <button
            onClick={reviewWrongWords}
            className="w-full py-4 border border-amber-300 bg-amber-50 text-amber-900 font-bold rounded-2xl hover:bg-amber-100 transition-colors text-base mb-2"
          >
            复习本轮错词（{wrongList.length}）→
          </button>
        )}
        <Link
          to={centerTo}
          className="block w-full text-center py-4 border border-gray-200 text-gray-600 font-bold rounded-2xl hover:border-gray-300 hover:text-gray-800 transition-colors text-base"
        >
          ← 返回我的词汇中心
        </Link>
      </div>
    )
  }

  // ---- 练习页 ----
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
      {/* 顶部进度条 */}
      <div className="h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-[var(--accent)] transition-all" style={{ width: `${progress}%` }} />
      </div>

      {/* 面包屑 */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm mb-4 flex-wrap" aria-label="词汇学习路径">
        <Link to={centerTo} className="font-bold text-gray-500 hover:text-[var(--accent)] transition-colors">我的词汇中心</Link>
        <span className="text-gray-300" aria-hidden="true">›</span>
        <Link to={backTo} className="font-extrabold text-gray-800 hover:text-[var(--accent)] transition-colors">{backLabel}</Link>
        <span className="text-gray-300" aria-hidden="true">›</span>
        <span className="font-medium text-gray-400">本次练习</span>
      </nav>

      {/* 当前词库掌握概览 */}
      <div className="bg-white border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 flex flex-wrap items-center gap-4 shadow-sm mb-5">
        <div className="min-w-[110px] sm:pr-4 sm:border-r sm:border-gray-100">
          <div className="text-[10px] font-extrabold tracking-[.13em] text-[var(--accent)]">当前词库</div>
          <div className="mt-1 text-sm font-extrabold text-gray-900 truncate max-w-[200px]">{title}</div>
        </div>
        <div className="grid grid-cols-4 gap-3 sm:gap-5 flex-1 min-w-[220px]">
          {[
            ['总词数', total],
            ['已学习', learnedCount],
            ['已掌握', knownCount],
            ['待复习', reviewCount],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="text-[10px] text-gray-400">{label}</div>
              <div className="mt-0.5 text-lg font-extrabold text-gray-900">{value}</div>
            </div>
          ))}
        </div>
        <div className="hidden xl:block w-36">
          <div className="flex justify-between text-[10px] text-gray-400 mb-1.5">
            <span>整体掌握</span>
            <strong className="text-[var(--accent)]">{masteryPercent}%</strong>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[var(--accent)] rounded-full transition-all" style={{ width: `${masteryPercent}%` }} />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* 主练习区 */}
        <div className="flex-1 min-w-0 w-full">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-400">本组 {index + 1} / {total}</span>
              {subtitle && <span className="hidden sm:inline text-xs text-gray-300">· {subtitle}</span>}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => speakWord(item.w)}
                className="w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-[var(--accent)] hover:border-[var(--accent-border)] grid place-items-center transition-colors"
                title="播放发音"
                aria-label="播放当前单词发音"
              >
                <SpeakerIcon />
              </button>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                拼写练习
              </span>
            </div>
          </div>

          {/* 主卡片 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-4 overflow-hidden">
            <div className="px-5 sm:px-6 pt-7 pb-4 text-center">
              {subtitle && <div className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">{subtitle}</div>}
              <div className={`font-extrabold text-gray-900 leading-snug ${primaryZh(item.zh).length > 16 ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}>
                {primaryZh(item.zh) || '？'}
              </div>
              {item.ipa && (
                <div className="text-sm text-gray-400 font-mono mt-2 tracking-wide">
                  {openHints.has('phonetic') ? (
                    <span className="text-[var(--accent)] font-medium">{item.ipa}</span>
                  ) : (
                    <button onClick={() => toggleHint('phonetic')} className="text-gray-300 hover:text-[var(--accent)] transition-colors text-xs">
                      [H] 显示音标
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* 字母格 */}
            <div className="border-t border-gray-50 px-2 sm:px-6 pb-5 cursor-text" onClick={() => inputRef.current?.focus()}>
              <div className="flex justify-center gap-1 sm:gap-2 flex-wrap pt-4">
                {item.w.split('').map((letter, i) => {
                  if (letter === ' ') return <div key={i} className="w-4 sm:w-6 flex-shrink-0" aria-label="单词间空格" />
                  const nonSpaceIndex = item.w.slice(0, i).replace(/\s/g, '').length
                  const typed = answerLetters[nonSpaceIndex] || ''
                  const isRight = checked && typed && typed.toLowerCase() === letter.toLowerCase()
                  const isWrong = checked && typed && !isRight
                  const letterColor = !checked && typed ? 'text-[var(--accent)]'
                    : isRight ? 'text-emerald-600'
                      : isWrong ? 'text-red-500'
                        : checked ? 'text-emerald-600'
                          : 'text-transparent'
                  const lineColor = isRight || (checked && correct) ? 'bg-emerald-400'
                    : isWrong ? 'bg-red-400'
                      : typed ? 'bg-[var(--accent-border)]' : 'bg-gray-200'
                  return (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span className={`font-bold text-center leading-none transition-all ${letterColor} ${letterTextSize} ${letterBoxWidth}`}>
                        {typed || (checked ? letter : ' ')}
                      </span>
                      <div className={`h-[3px] rounded-full transition-all ${lineColor} ${letterBoxWidth}`} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 隐藏输入 */}
          <input
            ref={inputRef}
            type="text"
            value={answer}
            onChange={(e) => !checked && setAnswer(e.target.value.slice(0, item.w.length))}
            onKeyDown={handleKey}
            className="sr-only"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          {/* 反馈 */}
          {checked && (
            <div className={`flex flex-wrap items-center justify-center gap-3 py-3.5 px-4 rounded-2xl mb-4 font-semibold text-base ${
              correct ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-red-50 border border-red-200 text-red-700'
            }`}>
              {correct ? (
                <>
                  <span className="text-emerald-500 text-xl">✓</span>
                  <span>{wrongAttempts > 0 ? '这次拼对了；错词已保留，稍后再复习一次。' : '正确！'}</span>
                </>
              ) : (
                <>
                  <span className="text-red-400 text-xl">✗</span>
                  <span>正确答案：<span className="font-extrabold tracking-widest ml-1">{item.w}</span></span>
                  <span className="text-xs">已加入错词本</span>
                  <button onClick={() => speakWord(item.w)} className="text-red-400 hover:text-red-600 transition-colors ml-1" aria-label="播放正确答案发音">
                    <SpeakerIcon />
                  </button>
                </>
              )}
            </div>
          )}

          {wrongAttempts === 1 && !checked && (
            <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-semibold text-amber-900" role="status">
              第一次拼写不正确，已加入错词本。右侧提示面板已显示首字母，可以再试一次。
              <button type="button" onClick={() => { setCorrect(false); setChecked(true) }} className="ml-2 font-extrabold underline underline-offset-2">直接查看答案</button>
            </div>
          )}

          {/* 按钮 */}
          {!checked ? (
            <div className="flex gap-2">
              <button
                onClick={handleCheck}
                disabled={!answer.trim()}
                className="flex-1 py-4 bg-[var(--accent)] text-white font-bold rounded-2xl hover:bg-[var(--accent-deep)] transition-all disabled:opacity-30 text-base"
              >
                确认拼写
              </button>
              <button
                onClick={handleSkip}
                title="跳过这个词（计为错误）"
                className="px-4 py-4 bg-gray-100 text-gray-500 font-semibold rounded-2xl hover:bg-gray-200 transition-all text-sm"
              >
                跳过
              </button>
            </div>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base"
            >
              {index + 1 < total ? '下一题 →' : '查看结果 →'}
            </button>
          )}

          <p className="text-center text-xs text-gray-300 mt-3">
            <kbd className="bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded text-[10px] font-mono">Enter</kbd>
            {' '}确认 · 继续 &nbsp;
            <kbd className="bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded text-[10px] font-mono">H</kbd>
            {' '}显示音标
          </p>

          {/* 移动端提示 */}
          <div className="lg:hidden mt-4 bg-white border border-gray-200 rounded-2xl p-4">
            <div className="text-xs font-bold text-gray-400 mb-3">提示</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => toggleHint('phonetic')}
                className="rounded-xl border border-gray-200 px-3 py-2 text-xs font-bold text-gray-600 hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition"
              >
                音标
              </button>
              <button
                onClick={revealSpellHint}
                className="rounded-xl border border-gray-200 px-3 py-2 text-xs font-bold text-gray-600 hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition"
              >
                拼写提示
              </button>
            </div>
            {openHints.has('phonetic') && (
              <div className="mt-3 font-mono text-sm text-gray-700">{item.ipa || '暂无音标数据'}</div>
            )}
            {openHints.has('firstLetter') && (
              <div className="mt-3 font-mono font-extrabold tracking-[.2em] text-gray-800">{spellHintText(item.w, spellHintLevel)}</div>
            )}
            <div className="mt-3 text-xs text-gray-500 leading-relaxed">{item.zh}</div>
          </div>
        </div>

        {/* 右侧提示面板 */}
        <aside className="hidden lg:flex w-80 xl:w-[360px] flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden flex-shrink-0 lg:sticky lg:top-6">
          <div className="grid grid-cols-3 border-b border-gray-100">
            {[
              { id: 'tips', label: '提示', icon: '提' },
              { id: 'progress', label: '进度', icon: '进' },
              { id: 'library', label: '词库', icon: '词' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePanel(tab.id)}
                className={`flex flex-col items-center gap-1 py-4 text-sm font-extrabold transition-colors border-b-2 ${
                  activePanel === tab.id
                    ? 'border-[var(--accent)] text-[var(--accent)]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                <span className="w-8 h-8 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-xs font-extrabold">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 p-5 overflow-y-auto">
            {activePanel === 'tips' && (
              <div className="space-y-3">
                <div className="text-sm font-extrabold text-gray-700 tracking-wide mb-4">需要时再打开提示</div>

                <button
                  onClick={() => toggleHint('phonetic')}
                  className={`w-full rounded-2xl border text-left transition-all overflow-hidden ${
                    openHints.has('phonetic') ? 'border-[var(--accent-border)] bg-white' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between px-4 py-4">
                    <span className="flex items-center gap-3 text-sm font-extrabold text-gray-800">
                      <span className="w-8 h-8 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-xs font-extrabold">音</span>
                      音标
                    </span>
                    <span className="text-xs font-bold text-gray-400">{openHints.has('phonetic') ? '收起' : '显示'}</span>
                  </div>
                  {openHints.has('phonetic') && (
                    <div className="px-4 py-4 border-t border-gray-100 bg-gray-50/60 font-mono text-gray-800">
                      {item.ipa || '暂无音标数据'}
                    </div>
                  )}
                </button>

                <button
                  onClick={() => toggleHint('meaning')}
                  className={`w-full rounded-2xl border text-left transition-all overflow-hidden ${
                    openHints.has('meaning') ? 'border-[var(--accent-border)] bg-white' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between px-4 py-4">
                    <span className="flex items-center gap-3 text-sm font-extrabold text-gray-800">
                      <span className="w-8 h-8 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-xs font-extrabold">释</span>
                      完整释义
                    </span>
                    <span className="text-xs font-bold text-gray-400">{openHints.has('meaning') ? '收起' : '显示'}</span>
                  </div>
                  {openHints.has('meaning') && (
                    <div className="px-4 py-4 border-t border-gray-100 bg-gray-50/60 text-xs text-gray-600 leading-relaxed">{item.zh}</div>
                  )}
                </button>

                <button
                  onClick={revealSpellHint}
                  disabled={openHints.has('partial')}
                  className="w-full rounded-2xl border border-gray-200 bg-white hover:border-gray-300 disabled:hover:border-gray-200 text-left transition-all overflow-hidden"
                >
                  <div className="flex items-center justify-between px-4 py-4 gap-2">
                    <span className="flex items-center gap-3 text-sm font-extrabold text-gray-800">
                      <span className="w-8 h-8 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center text-xs font-extrabold">拼</span>
                      拼写提示
                    </span>
                    <span className={`rounded-full border px-3 py-1.5 text-xs font-extrabold ${
                      openHints.has('partial') ? 'bg-gray-100 border-gray-200 text-gray-500' : 'bg-[var(--accent-soft)] border-[var(--accent-border)] text-[var(--accent)]'
                    }`}>
                      {openHints.has('partial') ? '提示已全部显示' : openHints.has('lastLetter') ? '显示部分字母 →' : openHints.has('firstLetter') ? '显示首尾字母 →' : '显示首字母 →'}
                    </span>
                  </div>
                  {openHints.has('firstLetter') && (
                    <div className="px-4 py-5 text-lg font-extrabold text-gray-800 font-mono tracking-[.2em] border-t border-gray-100 bg-gray-50/60">
                      {spellHintText(item.w, spellHintLevel)}
                    </div>
                  )}
                </button>

                {item.count > 0 && (
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 mt-4">
                    <div className="text-xs font-bold text-gray-600 mb-1.5">真题词频</div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${Math.min(100, (item.count / 30) * 100)}%` }} />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">阅读原文出现 {item.count} 次</div>
                  </div>
                )}
              </div>
            )}

            {activePanel === 'progress' && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">本次练习</div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>本次练习</span>
                    <span className="font-bold text-gray-800">{index + 1} / {total}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--accent)] rounded-full transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <div className="text-2xl font-extrabold text-emerald-600">{correctCount}</div>
                    <div className="text-xs text-emerald-600 mt-0.5">正确</div>
                  </div>
                  <div className="bg-red-50 rounded-xl p-3 text-center">
                    <div className="text-2xl font-extrabold text-red-500">{wrongCount}</div>
                    <div className="text-xs text-red-500 mt-0.5">错误</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-xs text-gray-500 mb-1">已完成</div>
                  <div className="text-sm font-bold text-gray-800">
                    {results.length} <span className="text-gray-400 font-normal">/ {total} 词</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{title}</div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>词库整体掌握</span>
                    <strong className="text-[var(--accent)]">{masteryPercent}%</strong>
                  </div>
                  <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--accent)] rounded-full transition-all" style={{ width: `${masteryPercent}%` }} />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1 text-center">
                    <div><strong className="block text-gray-900">{learnedCount}</strong><span className="text-[10px] text-gray-400">已学习</span></div>
                    <div><strong className="block text-[var(--accent)]">{knownCount}</strong><span className="text-[10px] text-gray-400">已掌握</span></div>
                    <div><strong className="block text-amber-600">{reviewCount}</strong><span className="text-[10px] text-gray-400">待复习</span></div>
                  </div>
                </div>
              </div>
            )}

            {activePanel === 'library' && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">词库掌握</div>
                <div className="rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-border)] p-4">
                  <div className="text-sm font-extrabold text-gray-900">{title}</div>
                  <div className="mt-3 text-3xl font-extrabold text-[var(--accent)]">
                    {knownCount}<span className="text-base font-medium text-gray-400"> / {total}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">词汇已经掌握</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-gray-50 p-3">
                    <div className="text-xl font-extrabold">{learnedCount}</div>
                    <div className="text-[10px] text-gray-400 mt-1">已经学习</div>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-3">
                    <div className="text-xl font-extrabold text-amber-700">{reviewCount}</div>
                    <div className="text-[10px] text-gray-400 mt-1">等待复习</div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">第一次拼写正确且未使用提示，计为“已掌握”；拼错的词会进入错词本。</p>
                <div className="border-t border-gray-100 pt-4">
                  <Link to={centerTo} className="block text-center rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-bold text-gray-600 hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition">
                    ← 返回我的词汇中心
                  </Link>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

// ---- 词汇中心（tab 容器） ----

export function VocabPage({ tab = 'home' }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const ds = datasetFor(isCet6)
  const keys = keysFor(isCet6)

  const toggleExam = (next) => {
    setExamLevel(next)
    setSearchParams(next === 'cet6' ? { exam: 'cet6' } : { exam: 'cet4' })
  }

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-8" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <h1 className="text-2xl font-extrabold text-gray-900">{ds.label} 词汇</h1>
        <div className="flex gap-1.5">
          {[{ code: 'cet4', label: 'CET-4' }, { code: 'cet6', label: 'CET-6' }].map((e) => {
            const active = (e.code === 'cet6') === isCet6
            return (
              <button
                key={e.code}
                onClick={() => toggleExam(e.code)}
                className={
                  'px-3 py-1 rounded-full text-xs font-bold border transition-colors ' +
                  (active
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300')
                }
              >
                {e.label}
              </button>
            )
          })}
        </div>
      </div>
      <VocabTabs active={tab} isCet6={isCet6} />
      {/* key 按级别重挂，切换 CET-4/CET-6 时重新读取对应级别的掌握与错词数据 */}
      {tab === 'home' && <HomeContent key={ds.label} ds={ds} keys={keys} isCet6={isCet6} />}
      {tab === 'must' && <TopicChooser key={ds.label} ds={ds} isCet6={isCet6} />}
      {tab === 'reading' && <ReadingChooser key={ds.label} ds={ds} isCet6={isCet6} keys={keys} />}
      {tab === 'official' && <ListGrid key={ds.label} ds={ds} isCet6={isCet6} keys={keys} />}
    </div>
  )
}

// ---- 我的词汇中心（首页卡片） ----

function HomeContent({ ds, keys, isCet6 }) {
  const navigate = useNavigate()
  const q = isCet6 ? '?exam=cet6' : ''
  const [wrong] = useState(() => loadJSON(keys.wrong, {}))
  const [lastResult] = useState(() => loadJSON(keys.lastResult, null))

  const wrongCount = Object.keys(wrong).length
  const practiced = lastResult?.total || 0
  const accuracy = lastResult?.accuracy ?? 0
  const mustCount = ds.topics.reduce((s, t) => s + t.items.length, 0)

  const cards = [
    {
      id: 'must', title: '必默词汇', count: mustCount,
      desc: `按 ${ds.topics.length} 个高频话题编排的${isCet6 ? '六级' : '四级'}核心必默词，背记拼写逐词过关。`,
      featured: true, action: () => navigate(`/words/must${q}`),
    },
    {
      id: 'reading', title: '阅读高频', count: ds.freq.length,
      desc: '摘自已录入真题阅读原文的高频词，带音标与释义，结合语境记忆。',
      action: () => navigate(`/words/reading${q}`),
    },
    {
      id: 'official', title: '综合词表', count: ds.meta.total,
      desc: `覆盖 ${ds.label} 级别的完整大纲词汇，按 50 词一组分 ${ds.lists.length} 个 List 系统学习。`,
      action: () => navigate(`/words/official${q}`),
    },
    {
      id: 'review', title: '生词 · 错词复习',
      subtitle: wrongCount ? `${wrongCount} 个待复习` : '暂无错词',
      desc: wrongCount ? '集中复习拼写中拼错的单词，答对 2 次后自动移出错词本。' : '拼写中拼错的单词会自动收集到这里。',
      gold: true, disabled: !wrongCount, action: () => wrongCount && navigate(`/words/wrong${q}`),
    },
  ]

  return (
    <>
      {/* 头部：标题 + 统计 */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <div className="text-[11px] font-extrabold tracking-[.18em] text-[var(--accent)]">{ds.label} VOCABULARY</div>
          <div className="mt-1 flex items-baseline gap-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-950">我的词汇中心</h1>
            <p className="hidden md:block text-base text-gray-500">选择一个类别，开始今天的背记拼写训练。</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:w-[320px]">
          {[
            ['最近练习', `${practiced}`],
            ['最近正确率', lastResult ? `${accuracy}%` : '—'],
          ].map(([label, value]) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center justify-between gap-3">
              <span className="text-[11px] text-gray-400">{label}</span>
              <strong className="text-lg text-gray-950">{value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* 卡片网格 */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {cards.map((card, i) => {
          const featured = Boolean(card.featured)
          const gold = Boolean(card.gold)
          const cardBorder = featured
            ? 'bg-[var(--accent-soft)] border-[var(--accent)]'
            : gold
              ? `bg-[#fffaf0] border-[#e8cf88] ${card.disabled ? 'cursor-default' : 'hover:-translate-y-0.5 hover:shadow-md'}`
              : 'bg-white border-gray-200 hover:-translate-y-0.5 hover:shadow-md'
          const iconBox = featured
            ? 'bg-[var(--accent)] text-white'
            : gold ? 'bg-[#f4c95d] text-[#684d00]' : 'bg-[var(--accent-soft)] text-[var(--accent)]'
          return (
            <div key={card.id} className="relative">
              <button
                onClick={card.action}
                disabled={card.disabled}
                className={`relative overflow-hidden w-full h-full group text-left rounded-[22px] border p-5 lg:p-6 min-h-[190px] flex flex-col transition-all ${cardBorder} ${featured ? 'hover:-translate-y-0.5 hover:shadow-md' : ''}`}
              >
                {featured && <div className="absolute top-0 inset-x-0 h-1.5 bg-[var(--accent)]" />}
                <div className="relative flex items-start justify-between">
                  <span className={`w-11 h-11 rounded-2xl grid place-items-center text-xl ${iconBox}`}>
                    {featured ? '📝' : gold ? '🔁' : card.id === 'reading' ? '📄' : '📚'}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-extrabold tracking-[.14em] ${gold ? 'text-[#b78a19]' : 'text-gray-300'}`}>0{i + 1}</span>
                    {featured && <span className="rounded-full bg-[#f4c95d] text-[#604800] px-2.5 py-1 text-[10px] font-extrabold">今日推荐</span>}
                    {gold && wrongCount > 0 && <span className="rounded-full bg-[#f4c95d] text-[#604800] px-2.5 py-1 text-[10px] font-extrabold">{wrongCount} 词</span>}
                  </div>
                </div>
                <div className="relative mt-4">
                  <h2 className="font-extrabold text-2xl text-gray-950">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed line-clamp-2 text-gray-500">{card.desc}</p>
                </div>
                <div className="relative mt-auto pt-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-500">{card.count ? `${card.count} 词` : card.subtitle}</span>
                  <span className={`font-extrabold ${featured ? 'bg-[var(--accent)] text-white rounded-xl px-3 py-2' : gold ? (card.disabled ? 'text-[#b8a779]' : 'text-[#8a6500]') : 'text-[var(--accent)]'}`}>
                    {featured ? (card.id === 'must' ? '选择话题 →' : '进入 →') : gold ? (card.disabled ? '暂无错词' : '开始复习 →') : '进入 →'}
                  </span>
                </div>
              </button>
              {featured && (
                <span className="hidden lg:grid absolute -right-[13px] top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#f4c95d] text-[var(--accent-deep)] place-items-center text-sm font-extrabold shadow-sm">→</span>
              )}
            </div>
          )
        })}
      </div>

      <p className="mt-4 text-xs text-gray-400">
        必默词汇为原创话题编排，词条均取自官方{isCet6 ? '六级' : '四级'}词表；阅读高频词摘自已录入真题阅读原文。
      </p>
    </>
  )
}

// ---- 必默词汇 · 选择话题（KET 话题卡格式） ----

function TopicChooser({ ds, isCet6 }) {
  const q = isCet6 ? '?exam=cet6' : ''
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-extrabold text-gray-900 mb-1">选择话题</h2>
      <p className="text-sm text-gray-400 mb-5">专项突破，每次专注一个主题</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {ds.topics.map((t) => (
          <Link
            key={t.id}
            to={`/words/must/${t.id}${q}`}
            className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 hover:border-[var(--accent)] hover:shadow-sm transition"
          >
            <span className="text-2xl shrink-0">{t.emoji}</span>
            <div className="min-w-0">
              <div className="font-bold text-gray-900 text-sm">{t.zh}</div>
              <div className="text-xs text-gray-400 truncate">{t.en} · {t.items.length} 词</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ---- 必默词汇 · 话题背记拼写 ----

export function TopicStudy() {
  const { topicId } = useParams()
  const [searchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const ds = datasetFor(isCet6)
  const keys = keysFor(isCet6)
  const q = isCet6 ? '?exam=cet6' : ''
  const topic = ds.topics.find((t) => t.id === topicId)
  if (!topic) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-500">
        话题不存在。<Link to={`/words/must${q}`} className="text-[var(--accent)] font-bold">返回选择话题</Link>
      </div>
    )
  }
  return (
    <div style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <SpellPractice
        key={`${isCet6 ? 'cet6' : 'cet4'}-${topic.id}`}
        words={topic.items}
        title={`${topic.emoji} ${topic.zh}`}
        subtitle={`${topic.en} · ${topic.items.length} 词`}
        centerTo={`/words${q}`}
        backTo={`/words/must${q}`}
        backLabel="必默词汇"
        keys={keys}
      />
    </div>
  )
}

// ---- 阅读高频（分组 + 背记拼写） ----

function ReadingChooser({ ds, isCet6, keys }) {
  const [mastery] = useMastery(keys)
  const q = isCet6 ? '?exam=cet6' : ''
  const chunks = []
  for (let i = 0; i < ds.freq.length; i += READING_CHUNK) chunks.push(ds.freq.slice(i, i + READING_CHUNK))

  return (
    <div>
      <div className="flex items-baseline gap-3 mb-1">
        <h2 className="text-xl font-extrabold text-gray-900">阅读高频词</h2>
        <span className="text-sm text-gray-400">{ds.freq.length} 词 · 每组 {READING_CHUNK} 词</span>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        {ds.freqMeta.note ? `${ds.freqMeta.note}，` : ''}词频 ≥ {ds.freqMeta.minFreq}，按出现次数排序。
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {chunks.map((chunk, ci) => {
          const known = chunk.filter((x) => mastery[x.w]?.known).length
          const pct = Math.round((known / chunk.length) * 100)
          return (
            <Link key={ci} to={`/words/reading/${ci}${q}`} className="rounded-2xl border border-gray-200 bg-white p-4 hover:border-[var(--accent)] transition">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">Group {ci + 1}</span>
                <span className={`text-xs font-bold ${pct === 100 ? 'text-[var(--accent)]' : 'text-gray-400'}`}>{known}/{chunk.length}</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${pct}%` }} />
              </div>
              <div className="mt-2 text-xs text-gray-400 truncate">{chunk[0].w} … {chunk[chunk.length - 1].w}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function ReadingStudy() {
  const { chunkId } = useParams()
  const [searchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const ds = datasetFor(isCet6)
  const keys = keysFor(isCet6)
  const q = isCet6 ? '?exam=cet6' : ''
  const ci = Number(chunkId)
  const chunk = ds.freq.slice(ci * READING_CHUNK, ci * READING_CHUNK + READING_CHUNK)
  if (!chunk.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-500">
        分组不存在。<Link to={`/words/reading${q}`} className="text-[var(--accent)] font-bold">返回阅读高频</Link>
      </div>
    )
  }
  return (
    <div style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <SpellPractice
        key={`reading-${isCet6 ? 'cet6' : 'cet4'}-${ci}`}
        words={chunk}
        title={`阅读高频 · Group ${ci + 1}`}
        subtitle={`${ds.freqMeta.total || chunk.length} 个真题阅读高频词`}
        centerTo={`/words${q}`}
        backTo={`/words/reading${q}`}
        backLabel="阅读高频"
        keys={keys}
      />
    </div>
  )
}

// ---- 综合词表（List 网格 + 背记拼写） ----

function ListGrid({ ds, isCet6, keys }) {
  const [mastery] = useMastery(keys)
  const q = isCet6 ? '?exam=cet6' : ''
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-1">
        <h2 className="text-xl font-extrabold text-gray-900">综合词表</h2>
        <span className="text-sm text-gray-400">{ds.meta.total} 词 · {ds.lists.length} 个 List</span>
      </div>
      <p className="text-sm text-gray-500 mb-5">每 List 50 词，背记拼写模式逐词过关；答错的词自动进入错词本循环。</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {ds.lists.map((list, li) => {
          const known = list.filter((x) => mastery[x.w]?.known).length
          const pct = Math.round((known / list.length) * 100)
          return (
            <Link key={li} to={`/words/${li}${q}`} className="rounded-2xl border border-gray-200 bg-white p-4 hover:border-[var(--accent)] transition">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">List {li + 1}</span>
                <span className={`text-xs font-bold ${pct === 100 ? 'text-[var(--accent)]' : 'text-gray-400'}`}>{known}/{list.length}</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${pct}%` }} />
              </div>
              <div className="mt-2 text-xs text-gray-400 truncate">{list[0].w} … {list[list.length - 1].w}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function VocabListPage() {
  const { listId } = useParams()
  const [searchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const ds = datasetFor(isCet6)
  const keys = keysFor(isCet6)
  const q = isCet6 ? '?exam=cet6' : ''
  const li = Number(listId)
  const list = ds.lists[li]
  if (!list) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-500">
        List 不存在。<Link to={`/words/official${q}`} className="text-[var(--accent)] font-bold">返回综合词表</Link>
      </div>
    )
  }
  return (
    <div style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <SpellPractice
        key={`list-${isCet6 ? 'cet6' : 'cet4'}-${li}`}
        words={list}
        title={`List ${li + 1}`}
        subtitle={`${ds.label} 官方词表 · 50 词`}
        centerTo={`/words${q}`}
        backTo={`/words/official${q}`}
        backLabel="综合词表"
        keys={keys}
      />
    </div>
  )
}

// ---- 错词本循环（KET 风格拼写练习） ----

export function VocabWrongBook() {
  const [searchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const ds = datasetFor(isCet6)
  const keys = keysFor(isCet6)
  const q = isCet6 ? '?exam=cet6' : ''
  const [wrong] = useState(() => loadJSON(keys.wrong, {}))
  const entries = useMemo(() => Object.entries(wrong).sort((a, b) => a[1].lastAt - b[1].lastAt), [wrong])
  const { lists, freq, topics } = ds
  const items = useMemo(() => {
    const map = new Map()
    lists.flat().forEach((x) => map.set(x.w, x))
    freq.forEach((x) => { if (!map.has(x.w)) map.set(x.w, x) })
    topics.forEach((t) => t.items.forEach((x) => { if (!map.has(x.w)) map.set(x.w, x) }))
    return entries.map(([w]) => ({ w, ipa: map.get(w)?.ipa || '', zh: map.get(w)?.zh || '（自己加入的生词，暂无释义）' }))
  }, [entries, lists, freq, topics])

  if (entries.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
        <p className="text-4xl mb-3">🎉</p>
        <p className="text-gray-600 mb-6">错词本是空的——去必默词汇、阅读高频或综合词表做拼写练习，答错的词会出现在这里。</p>
        <Link to={`/words${q}`} className="text-[var(--accent)] font-bold">← 返回词汇中心</Link>
      </div>
    )
  }

  return (
    <div style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <SpellPractice
        key={`wrong-${isCet6 ? 'cet6' : 'cet4'}`}
        words={items}
        title="生词 · 错词复习"
        subtitle={`${items.length} 个错词 · 答对 2 次移出`}
        centerTo={`/words${q}`}
        backTo={`/words${q}`}
        backLabel="错词本"
        keys={keys}
        reviewMode
      />
    </div>
  )
}
