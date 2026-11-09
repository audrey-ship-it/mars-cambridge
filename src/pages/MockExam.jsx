// 模考运行器 — 按 写作→听力→阅读→翻译 顺序，四 Section 独立计时
// 路由：/mock/:setId（CET-6 需带 ?exam=cet6）
// 进度持久化 key：mars_cet4_/mars_cet6_mock_progress_${setId}（格式不兼容整份丢弃）
// 阅读/听力交卷写错题本（覆盖式），写作/翻译只存草稿不判分

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { getMockExam } from '../data/mockExamCatalog.js'
import { getMockExam6 } from '../data/mockExamCatalog6.js'
import { examVars } from '../utils/examTheme.js'
import { resolveExamLevel } from '../utils/examLevel.js'
import { setMockWrongBatch } from '../data/mockExamWrongBook.js'
import { loadJSON, saveJSON, removeKey } from '../utils/storage.js'
import SectionAudio from '../components/listening/SectionAudio.jsx'
import SectionTimer from '../components/mockExam/SectionTimer.jsx'
import BankedCloze from '../components/reading/BankedCloze.jsx'
import ParagraphMatching from '../components/reading/ParagraphMatching.jsx'
import CarefulReading from '../components/reading/CarefulReading.jsx'

const SECTIONS = [
  { id: 'writing', label: '写作', duration: 1800 },
  { id: 'listening', label: '听力', duration: 1500 },
  { id: 'reading', label: '阅读', duration: 2400 },
  { id: 'translation', label: '翻译', duration: 1800 },
]

const DEFAULT_TIMERS = {
  writing: 1800,
  listening: 1500,
  reading: 2400,
  translation: 1800,
}

// CET-6：听力 30 分钟（四级 25 分钟），其余时长一致
const CET6_DEFAULT_TIMERS = {
  ...DEFAULT_TIMERS,
  listening: 1800,
}

const EMPTY_ANSWERS = {
  reading: { banked: {}, matching: {}, careful: {} },
  listening: {},
}

const READING_TABS = [
  { id: 'banked', label: 'A 选词填空' },
  { id: 'matching', label: 'B 长篇阅读' },
  { id: 'careful', label: 'C 仔细阅读' },
]

const LISTENING_GROUPS = [
  { key: 'news', label: 'Section A · 短篇新闻' },
  { key: 'conversations', label: 'Section B · 长对话' },
  { key: 'passages', label: 'Section C · 听力篇章' },
]

// CET-6 听力按 A/B/C 三组：A 长对话 8 题、B 听力篇章 7 题、C 讲座/讲话 10 题
const CET6_LISTENING_GROUPS = [
  { key: 'a', label: 'Section A · 长对话' },
  { key: 'b', label: 'Section B · 听力篇章' },
  { key: 'c', label: 'Section C · 讲座/讲话' },
]

function progressKey(setId, isCet6) {
  return `mars_${isCet6 ? 'cet6' : 'cet4'}_mock_progress_${setId}`
}

function writingDraftKey(setId, isCet6) {
  return `mars_${isCet6 ? 'cet6' : 'cet4'}_writing_draft:${setId}`
}

function translationDraftKey(setId, isCet6) {
  return `mars_${isCet6 ? 'cet6' : 'cet4'}_translation_draft:${setId}`
}

function loadProgress(setId, isCet6) {
  const saved = loadJSON(progressKey(setId, isCet6))
  if (!saved) return null
  if (saved.activeIndex == null || !saved.timers || !saved.submitted) return null
  const idx = Math.max(0, Math.min(SECTIONS.length - 1, saved.activeIndex))
  return { ...saved, activeIndex: idx }
}

// ---- 错题收集 ----

function collectReadingWrong(exam, readingAnswers) {
  const wrong = { r1: {}, r2: {}, r3: {} }

  // r1: 选词填空 Q26-35，key 0-9
  exam.reading.sections.banked.answers.forEach((correct, i) => {
    const userAns = readingAnswers.banked[26 + i] || ''
    if (userAns !== correct) wrong.r1[i] = userAns
  })

  // r2: 长篇匹配 Q36-45，key 0-9
  exam.reading.sections.matching.answers.forEach((correct, i) => {
    const q = exam.reading.sections.matching.questions[i]
    const userAns = q ? (readingAnswers.matching[q.n] || '') : ''
    if (userAns !== correct) wrong.r2[i] = userAns
  })

  // r3: 仔细阅读 Q46-55，key 0-9（跨两篇连续编号）
  let keyIdx = 0
  exam.reading.sections.careful.forEach((p) => {
    p.questions.forEach((q) => {
      const userAns = readingAnswers.careful[q.n] || ''
      if (userAns !== q.answer) wrong.r3[keyIdx] = userAns
      keyIdx++
    })
  })

  return wrong
}

// groups 为当前级别的听力分组（CET-4: news/conversations/passages，CET-6: a/b/c）
function collectListeningWrong(exam, listeningAnswers, groups) {
  const wrong = { l1: {}, l2: {}, l3: {} }

  groups.forEach((g, gi) => {
    let keyIdx = 0
    exam.listening.sections[g.key].forEach((item) => {
      item.questions.forEach((q) => {
        const userAns = listeningAnswers[q.n] || ''
        if (userAns !== q.answer) wrong[`l${gi + 1}`][keyIdx] = userAns
        keyIdx++
      })
    })
  })

  return wrong
}

function scoreReading(exam, readingAnswers) {
  let right = 0
  exam.reading.sections.banked.answers.forEach((ans, i) => {
    if (readingAnswers.banked[26 + i] === ans) right++
  })
  exam.reading.sections.matching.answers.forEach((ans, i) => {
    const q = exam.reading.sections.matching.questions[i]
    if (q && readingAnswers.matching[q.n] === ans) right++
  })
  exam.reading.sections.careful.forEach((p) => {
    p.questions.forEach((q) => {
      if (readingAnswers.careful[q.n] === q.answer) right++
    })
  })
  return right
}

function scoreListening(exam, listeningAnswers, groups) {
  let right = 0
  groups.forEach((g) => {
    exam.listening.sections[g.key].forEach((item) => {
      item.questions.forEach((q) => {
        if (listeningAnswers[q.n] === q.answer) right++
      })
    })
  })
  return right
}

// ---- 主组件 ----

export default function MockExam() {
  const { setId } = useParams()
  const [searchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const exam = useMemo(() => (isCet6 ? getMockExam6(setId) : getMockExam(setId)), [setId, isCet6])
  const backTo = isCet6 ? '/mock?exam=cet6' : '/mock'

  if (!exam) {
    return (
      <div className="min-h-screen max-w-3xl mx-auto px-4 py-8">
        <div className="rounded-2xl bg-white border border-dashed border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-3">该套模考数据未就绪或未人工核对。</p>
          <Link to={backTo} className="text-sm text-[var(--accent)] font-bold">← 返回真题中心</Link>
        </div>
      </div>
    )
  }

  return <MockExamRunner key={`${setId}-${isCet6}`} exam={exam} setId={setId} isCet6={isCet6} />
}

function MockExamRunner({ exam, setId, isCet6 }) {
  const groups = isCet6 ? CET6_LISTENING_GROUPS : LISTENING_GROUPS
  const timers0 = isCet6 ? CET6_DEFAULT_TIMERS : DEFAULT_TIMERS
  const backToList = isCet6 ? '/mock?exam=cet6' : '/mock'

  const initial = useMemo(() => loadProgress(setId, isCet6), [setId, isCet6])
  const [activeIndex, setActiveIndex] = useState(initial?.activeIndex ?? 0)
  const [timers, setTimers] = useState(initial?.timers ?? timers0)
  const [answers, setAnswers] = useState(initial?.answers ?? EMPTY_ANSWERS)
  const [submitted, setSubmitted] = useState(
    initial?.submitted ?? { writing: false, listening: false, reading: false, translation: false }
  )
  const [paused, setPaused] = useState(false)
  const [remountAt, setRemountAt] = useState(0)

  const activeSection = SECTIONS[activeIndex].id
  const allSubmitted = SECTIONS.every((s) => submitted[s.id])
  const [startedAt] = useState(() => initial?.startedAt ?? Date.now())

  // 持久化进度
  useEffect(() => {
    saveJSON(progressKey(setId, isCet6), {
      activeIndex,
      timers,
      answers,
      submitted,
      startedAt,
      finishedAt: allSubmitted ? Date.now() : null,
    })
  }, [activeIndex, timers, answers, submitted, setId, isCet6, allSubmitted, startedAt])

  // 计时器：仅 active section 跑 interval，切 section 时自动回写剩余秒
  useEffect(() => {
    if (paused || submitted[activeSection] || allSubmitted) return
    const t = setInterval(() => {
      setTimers((prev) => {
        const next = prev[activeSection] - 1
        return { ...prev, [activeSection]: Math.max(0, next) }
      })
    }, 1000)
    return () => clearInterval(t)
  }, [paused, activeSection, submitted, allSubmitted])

  // 超时自动交卷：用 ref 避免闭包过期
  const submitRef = useRef(null)
  useEffect(() => {
    submitRef.current = handleSubmitSection
  })

  useEffect(() => {
    if (timers[activeSection] <= 0 && !submitted[activeSection]) {
      submitRef.current(activeSection)
    }
  }, [timers, activeSection, submitted])

  function handleSubmitSection(sectionId) {
    if (submitted[sectionId]) return
    if (sectionId === 'reading') {
      const wrong = collectReadingWrong(exam, answers.reading)
      setMockWrongBatch(setId, 'reading', 'r1', wrong.r1)
      setMockWrongBatch(setId, 'reading', 'r2', wrong.r2)
      setMockWrongBatch(setId, 'reading', 'r3', wrong.r3)
    } else if (sectionId === 'listening') {
      const wrong = collectListeningWrong(exam, answers.listening, groups)
      setMockWrongBatch(setId, 'listening', 'l1', wrong.l1)
      setMockWrongBatch(setId, 'listening', 'l2', wrong.l2)
      setMockWrongBatch(setId, 'listening', 'l3', wrong.l3)
    }

    setSubmitted((prev) => ({ ...prev, [sectionId]: true }))

    const idx = SECTIONS.findIndex((s) => s.id === sectionId)
    if (idx < SECTIONS.length - 1) {
      setActiveIndex(idx + 1)
      setPaused(false)
    }
  }

  function handleReset() {
    if (!window.confirm('确认重置本套模考？将清空全部作答、计时和已交进度。')) return
    removeKey(progressKey(setId, isCet6))
    removeKey(writingDraftKey(setId, isCet6))
    removeKey(translationDraftKey(setId, isCet6))
    setActiveIndex(0)
    setTimers(timers0)
    setAnswers(EMPTY_ANSWERS)
    setSubmitted({ writing: false, listening: false, reading: false, translation: false })
    setPaused(false)
    setRemountAt((n) => n + 1)
  }

  // ---- 结果页 ----
  if (allSubmitted) {
    return <ResultsPage exam={exam} answers={answers} onReset={handleReset} isCet6={isCet6} groups={groups} />
  }

  return (
    <div className="min-h-screen bg-[#f7f8f5]" key={remountAt} style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      {/* 顶部 sticky 栏 */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 py-3 flex items-center gap-3 flex-wrap">
          <Link to={backToList} className="text-sm text-gray-500 hover:text-gray-800 shrink-0">← 真题</Link>
          <div className="text-sm font-bold text-gray-900 shrink-0">
            {exam.meta.year}年{exam.meta.month}月 第{exam.meta.set}套
          </div>
          {/* Section tabs */}
          <div className="flex gap-1.5">
            {SECTIONS.map((s, i) => {
              const isActive = i === activeIndex
              const isSubmitted = submitted[s.id]
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveIndex(i)}
                  className={
                    'px-2.5 py-1 rounded-lg text-xs font-bold border transition ' +
                    (isActive
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                      : isSubmitted
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300')
                  }
                >
                  {isSubmitted && '✓ '}{s.label}
                </button>
              )
            })}
          </div>
          {/* 计时器 */}
          <div className="ml-auto flex items-center gap-3">
            <SectionTimer
              seconds={timers[activeSection]}
              running={!paused && !submitted[activeSection]}
              onTogglePause={() => setPaused((p) => !p)}
            />
            <button
              onClick={handleReset}
              className="rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-500 hover:border-red-300 hover:text-red-500 transition"
            >
              ↺ 重置
            </button>
          </div>
        </div>
      </div>

      {/* 各 Section 内容 */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6">
        {activeSection === 'writing' && (
          <WritingSection
            exam={exam}
            setId={setId}
            isCet6={isCet6}
            submitted={submitted.writing}
            onSubmit={() => handleSubmitSection('writing')}
          />
        )}
        {activeSection === 'listening' && (
          <ListeningSection
            exam={exam}
            groups={groups}
            answers={answers.listening}
            setAnswers={(updater) =>
              setAnswers((prev) => ({ ...prev, listening: updater(prev.listening) }))
            }
            submitted={submitted.listening}
            onSubmit={() => handleSubmitSection('listening')}
          />
        )}
        {activeSection === 'reading' && (
          <ReadingSection
            exam={exam}
            answers={answers.reading}
            setAnswers={(updater) =>
              setAnswers((prev) => ({ ...prev, reading: updater(prev.reading) }))
            }
            submitted={submitted.reading}
            onSubmit={() => handleSubmitSection('reading')}
          />
        )}
        {activeSection === 'translation' && (
          <TranslationSection
            exam={exam}
            setId={setId}
            isCet6={isCet6}
            submitted={submitted.translation}
            onSubmit={() => handleSubmitSection('translation')}
          />
        )}
      </div>
    </div>
  )
}

// ---- 写作 Section ----

function WritingSection({ exam, setId, isCet6, submitted, onSubmit }) {
  const w = exam.writing
  const dKey = writingDraftKey(setId, isCet6)
  const saved = useMemo(() => loadJSON(dKey, null), [dKey])
  const [text, setText] = useState(saved?.text ?? '')
  const [userShowModel, setUserShowModel] = useState(false)
  const saveTimer = useRef(null)
  const showModel = submitted || userShowModel

  const wordCount = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0
  const countColor =
    wordCount === 0 ? 'text-gray-400'
      : wordCount < w.minWords ? 'text-amber-500'
        : wordCount > w.maxWords ? 'text-red-500'
          : 'text-[var(--accent)]'

  function onInput(v) {
    setText(v)
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      const cur = loadJSON(dKey, {}) || {}
      saveJSON(dKey, { ...cur, text: v })
    }, 400)
  }

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <div className="text-xs font-bold text-gray-400 mb-2">PART I WRITING · 30 min</div>
        <p className="text-[21px] leading-[1.7] text-gray-800">{w.directions}</p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <textarea
          value={text}
          onChange={(e) => onInput(e.target.value)}
          disabled={submitted}
          placeholder="Write your essay here……（草稿自动保存）"
          className="w-full h-80 rounded-xl border border-gray-200 p-4 text-[21px] leading-[1.7] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--accent-border)] resize-y disabled:bg-gray-50"
        />
        <div className="flex items-center gap-2 mt-3 text-xs">
          <span className={countColor}>词数 {wordCount}（要求 {w.minWords}–{w.maxWords}）</span>
          <span className="text-gray-300">·</span>
          <span className="text-gray-400">草稿实时保存，刷新不丢失</span>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        {!submitted && (
          <button
            onClick={() => setUserShowModel((v) => !v)}
            className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {userShowModel ? '隐藏审题思路与范文' : '查看审题思路与范文'}
          </button>
        )}
        {showModel && (
          <div className="mt-4">
            <div className="text-lg font-bold text-gray-900 mb-3">参考范文</div>
            <div className="rounded-xl bg-[var(--accent-softer)] border border-[var(--accent-border)] p-4 text-[21px] leading-[1.7] text-gray-800 whitespace-pre-line">
              {w.model}
            </div>
            <div className="text-lg font-bold text-gray-900 mt-4 mb-2">范文译文</div>
            <div className="rounded-xl bg-gray-50 p-4 text-[21px] leading-[1.7] text-gray-600 whitespace-pre-line">
              {w.modelZh}
            </div>
            {w.points?.length > 0 && (
              <>
                <div className="text-lg font-bold text-gray-900 mt-4 mb-2">范文点评</div>
                <ol className="list-decimal pl-5 space-y-2 text-[21px] leading-[1.7] text-gray-600">
                  {w.points.map((p, i) => <li key={i}>{p}</li>)}
                </ol>
              </>
            )}
          </div>
        )}
      </div>

      {!submitted && (
        <div className="sticky bottom-3 rounded-2xl bg-white border border-gray-200 p-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className={countColor}>词数 {wordCount}</span> / 要求 {w.minWords}–{w.maxWords}
          </div>
          <button
            onClick={onSubmit}
            className="rounded-xl bg-[var(--accent)] px-5 py-2 text-sm font-bold text-white hover:bg-[var(--accent-hover)] transition"
          >
            交卷
          </button>
        </div>
      )}
    </div>
  )
}

// ---- 听力 Section ----

function TranscriptBlock({ text }) {
  const [open, setOpen] = useState(false)
  if (!text) return null

  return (
    <div className="bg-[var(--accent-softer)] border-b border-gray-100">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full px-4 py-2.5 flex items-center gap-2 text-left text-xs font-bold text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
      >
        <span>{open ? '▼' : '▶'}</span>
        <span className="uppercase tracking-wider">Transcript 原文</span>
        <span className="font-normal text-[var(--accent)]/70">{open ? '点击隐藏' : '点击查看'}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-[21px] leading-[1.7] text-gray-700 whitespace-pre-line">{text}</div>
      )}
    </div>
  )
}

function ListeningSection({ exam, groups, answers, setAnswers, submitted, onSubmit }) {
  const [activeGroup, setActiveGroup] = useState(0)
  const total = 25

  function setKey(n, v) {
    setAnswers((prev) => ({ ...prev, [n]: v }))
  }

  const answered = Object.values(answers).filter(Boolean).length
  let right = 0
  if (submitted) {
    groups.forEach((g) => {
      exam.listening.sections[g.key].forEach((item) => {
        item.questions.forEach((q) => {
          if (answers[q.n] === q.answer) right++
        })
      })
    })
  }

  const group = groups[activeGroup]
  const items = exam.listening.sections[group.key]

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {groups.map((g, i) => (
          <button
            key={g.key}
            onClick={() => setActiveGroup(i)}
            className={
              'px-4 py-2 rounded-xl text-xs font-bold border transition ' +
              (activeGroup === i
                ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300')
            }
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 text-xs font-bold text-gray-600">
              {item.title}
            </div>
            {item.audio && (
              <div className="px-4 pt-3">
                <SectionAudio key={item.audio} src={item.audio} />
              </div>
            )}
            <TranscriptBlock text={item.transcript} />
            <div className="p-4 space-y-4">
              {item.questions.map((q) => {
                const v = answers[q.n] || ''
                const showRight = submitted && q.answer
                return (
                  <div key={q.n} className="rounded-xl border border-gray-200 p-4">
                    <div className="flex items-start gap-2 text-[21px] font-bold text-gray-900 mb-2">
                      <span className="w-8 shrink-0">{q.n}.</span>
                      <span>{q.text}</span>
                    </div>
                    <div className="space-y-1.5">
                      {[...q.options].sort((a, b) => a.letter.localeCompare(b.letter)).map((opt) => {
                        const checked = v === opt.letter
                        const shouldHighlightRight = showRight && opt.letter === q.answer
                        return (
                          <label
                            key={opt.letter}
                            className={
                              'flex items-start gap-2 rounded-lg px-2.5 py-1.5 text-[21px] cursor-pointer transition border ' +
                              (showRight
                                ? shouldHighlightRight
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                  : checked
                                    ? 'bg-red-50 border-red-300 text-red-700'
                                    : 'border-transparent text-gray-600'
                                : checked
                                  ? 'bg-[var(--accent-soft)] border-[var(--accent-border)]'
                                  : 'border-transparent hover:bg-gray-50')
                            }
                          >
                            <input
                              type="radio"
                              name={`mock-listen-${q.n}`}
                              checked={checked}
                              onChange={() => setKey(q.n, opt.letter)}
                              disabled={submitted}
                              className="mt-1 shrink-0"
                            />
                            <span>
                              <span className="font-bold mr-1">{opt.letter})</span>{opt.text}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-4 flex items-center justify-between sticky bottom-3">
        <div className="text-sm text-gray-500">
          已答 <span className="font-bold text-[var(--accent)]">{answered}</span> / {total}
          {submitted && (
            <span className="ml-3">得分 <span className="font-bold text-green-700">{right}</span> / {total}</span>
          )}
        </div>
        {!submitted ? (
          <button
            onClick={onSubmit}
            className="rounded-xl bg-[var(--accent)] px-5 py-2 text-sm font-bold text-white hover:bg-[var(--accent-hover)] transition"
          >
            交卷
          </button>
        ) : (
          <span className="text-sm font-bold text-gray-400">已交卷</span>
        )}
      </div>
    </div>
  )
}

// ---- 阅读 Section ----

function ReadingSection({ exam, answers, setAnswers, submitted, onSubmit }) {
  const [tab, setTab] = useState('banked')
  const set = exam.reading.sections

  function setKey(sec, n, val) {
    setAnswers((prev) => ({ ...prev, [sec]: { ...prev[sec], [n]: val } }))
  }

  const totalQuestions =
    set.banked.answers.length +
    set.matching.answers.length +
    set.careful.reduce((sum, p) => sum + p.questions.length, 0)

  const answeredCount =
    Object.keys(answers.banked).filter(Boolean).length +
    Object.keys(answers.matching).filter(Boolean).length +
    Object.keys(answers.careful).filter(Boolean).length

  let right = 0
  if (submitted) right = scoreReading(exam, answers)

  function renderTab() {
    if (tab === 'banked')
      return set.banked.passage ? (
        <BankedCloze section={set.banked} answers={answers.banked} onChange={(n, v) => setKey('banked', n, v)} submitted={submitted} />
      ) : (
        <div className="rounded-xl bg-white border border-dashed border-gray-200 p-6 text-sm text-gray-500">选词填空数据未录入</div>
      )
    if (tab === 'matching')
      return set.matching.paragraphs.length ? (
        <ParagraphMatching section={set.matching} answers={answers.matching} onChange={(n, v) => setKey('matching', n, v)} submitted={submitted} />
      ) : (
        <div className="rounded-xl bg-white border border-dashed border-gray-200 p-6 text-sm text-gray-500">长篇阅读数据未录入</div>
      )
    const list = set.careful.filter((p) => p.passage)
    if (list.length === 0) return <div className="rounded-xl bg-white border border-dashed border-gray-200 p-6 text-sm text-gray-500">仔细阅读数据未录入</div>
    return (
      <div className="space-y-6">
        {list.map((p, i) => (
          <div key={i}>
            <div className="text-xs font-bold text-gray-400 mb-2">Passage {i + 1}</div>
            <CarefulReading passage={p} answers={answers.careful} onChange={(n, v) => setKey('careful', n, v)} submitted={submitted} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="sticky top-[60px] z-10 bg-[#f7f8f5] py-2 mb-3">
        <div className="flex gap-2">
          {READING_TABS.map((s) => (
            <button
              key={s.id}
              onClick={() => setTab(s.id)}
              className={
                'rounded-xl px-3 py-1.5 text-sm font-bold border transition ' +
                (tab === s.id
                  ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300')
              }
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {renderTab()}

      <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-4 flex items-center justify-between sticky bottom-3">
        <div className="text-sm text-gray-500">
          已答 <span className="font-bold text-[var(--accent)]">{answeredCount}</span> / {totalQuestions}
          {submitted && (
            <span className="ml-3">得分 <span className="font-bold text-green-700">{right}</span> / {totalQuestions}</span>
          )}
        </div>
        {!submitted ? (
          <button
            onClick={onSubmit}
            className="rounded-xl bg-[var(--accent)] px-5 py-2 text-sm font-bold text-white hover:bg-[var(--accent-hover)] transition"
          >
            交卷
          </button>
        ) : (
          <span className="text-sm font-bold text-gray-400">已交卷</span>
        )}
      </div>
    </div>
  )
}

// ---- 翻译 Section ----

function TranslationSection({ exam, setId, isCet6, submitted, onSubmit }) {
  const t = exam.translation
  const dKey = translationDraftKey(setId, isCet6)
  const saved = useMemo(() => loadJSON(dKey, null), [dKey])
  const [text, setText] = useState(saved?.text ?? '')
  const [userShowRef, setUserShowRef] = useState(false)
  const [userShowNotes, setUserShowNotes] = useState(false)
  const saveTimer = useRef(null)
  const showRef = submitted || userShowRef
  const showNotes = submitted || userShowNotes

  const wordCount = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0

  function onInput(v) {
    setText(v)
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      const cur = loadJSON(dKey, {}) || {}
      saveJSON(dKey, { ...cur, text: v })
    }, 400)
  }

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <div className="text-xs font-bold text-gray-400 mb-2">PART IV TRANSLATION · 30 min</div>
        <p className="text-lg leading-[1.7] text-gray-500 mb-4">{t.directions}</p>
        <div className="rounded-xl bg-gray-50 p-4 text-[21px] leading-[1.7] text-gray-800">{t.passage}</div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <textarea
          value={text}
          onChange={(e) => onInput(e.target.value)}
          disabled={submitted}
          placeholder="在这里写下你的英文翻译……（草稿自动保存）"
          className="w-full h-72 rounded-xl border border-gray-200 p-4 text-[21px] leading-[1.7] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--accent-border)] resize-y disabled:bg-gray-50"
        />
        <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
          <span>词数 {wordCount}</span>
          <span>·</span>
          <span>草稿实时保存，刷新不丢失</span>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        {!submitted && (
          <button
            onClick={() => setUserShowRef((v) => !v)}
            className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {userShowRef ? '隐藏参考译文' : '查看参考译文'}
          </button>
        )}
        {showRef && (
          <div className="mt-4">
            <div className="rounded-xl bg-[var(--accent-softer)] border border-[var(--accent-border)] p-4 text-[21px] leading-[1.7] text-gray-800">
              {t.reference}
            </div>
            {t.points?.length > 0 && (
              <div className="mt-4">
                <div className="text-lg font-bold text-gray-900 mb-2">译点精析</div>
                <ol className="list-decimal pl-5 space-y-2 text-[21px] leading-[1.7] text-gray-600">
                  {t.points.map((p, i) => <li key={i}>{p}</li>)}
                </ol>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        {!submitted && (
          <button
            onClick={() => setUserShowNotes((v) => !v)}
            className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {userShowNotes ? '隐藏难词注释' : '查看难词注释'}
          </button>
        )}
        {showNotes && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {t.notes.map(([zh, en]) => (
              <div key={zh} className="flex items-baseline gap-2 rounded-lg bg-gray-50 px-3 py-2">
                <span className="text-lg text-gray-800">{zh}</span>
                <span className="text-lg text-[var(--accent)] font-semibold">{en}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {!submitted && (
        <div className="sticky bottom-3 rounded-2xl bg-white border border-gray-200 p-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">词数 {wordCount}</div>
          <button
            onClick={onSubmit}
            className="rounded-xl bg-[var(--accent)] px-5 py-2 text-sm font-bold text-white hover:bg-[var(--accent-hover)] transition"
          >
            交卷
          </button>
        </div>
      )}
    </div>
  )
}

// ---- 结果页 ----

function ResultsPage({ exam, answers, onReset, isCet6, groups }) {
  const readingScore = scoreReading(exam, answers.reading)
  const listeningScore = scoreListening(exam, answers.listening, groups)
  const readingTotal = exam.reading.sections.banked.answers.length +
    exam.reading.sections.matching.answers.length +
    exam.reading.sections.careful.reduce((s, p) => s + p.questions.length, 0)
  const listeningTotal = 25

  return (
    <div className="min-h-screen bg-[#f7f8f5]" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <div className="max-w-2xl mx-auto px-4 lg:px-6 py-8">
        <div className="text-center mb-6">
          <div className="text-xs font-bold text-gray-400 mb-1">{isCet6 ? 'CET-6' : 'CET-4'} 模考完成</div>
          <h1 className="text-2xl font-extrabold text-gray-900">
            {exam.meta.year}年{exam.meta.month}月 第{exam.meta.set}套
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-5 text-center">
            <div className="text-xs font-bold text-gray-400 mb-1">写作</div>
            <div className="text-2xl font-extrabold text-gray-700">已交</div>
            <div className="text-xs text-gray-400 mt-1">查看范文</div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-5 text-center">
            <div className="text-xs font-bold text-gray-400 mb-1">听力</div>
            <div className="text-2xl font-extrabold text-[var(--accent)]">{listeningScore}</div>
            <div className="text-xs text-gray-400 mt-1">/ {listeningTotal}</div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-5 text-center">
            <div className="text-xs font-bold text-gray-400 mb-1">阅读</div>
            <div className="text-2xl font-extrabold text-[var(--accent)]">{readingScore}</div>
            <div className="text-xs text-gray-400 mt-1">/ {readingTotal}</div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-5 text-center">
            <div className="text-xs font-bold text-gray-400 mb-1">翻译</div>
            <div className="text-2xl font-extrabold text-gray-700">已交</div>
            <div className="text-xs text-gray-400 mt-1">查看译文</div>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            to={isCet6 ? '/mock/wrong?exam=cet6' : '/mock/wrong'}
            className="block rounded-2xl bg-[var(--accent)] text-white p-4 text-center font-bold hover:bg-[var(--accent-hover)] transition"
          >
            只重做错题 →
          </Link>
          <Link
            to={isCet6 ? '/mock?exam=cet6' : '/mock'}
            className="block rounded-2xl bg-white border border-gray-200 p-4 text-center font-bold text-gray-600 hover:border-gray-300 transition"
          >
            返回真题中心
          </Link>
          <button
            onClick={onReset}
            className="w-full rounded-2xl border border-gray-200 p-4 text-center font-bold text-gray-400 hover:border-red-300 hover:text-red-500 transition"
          >
            ↺ 重置本套模考
          </button>
        </div>
      </div>
    </div>
  )
}
