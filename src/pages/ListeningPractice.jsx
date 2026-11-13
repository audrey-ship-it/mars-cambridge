// 听力专项练习页面
// 路由：#/listening 列表页，#/listening/:setId 练习页
// 布局：左侧题目 + 原文（粘性独立滚动），右侧音频播放器 + 分段导航

import { useMemo, useState, useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { getListeningSet, listeningSets } from '../data/listeningSets.js'
import { getListeningSet6, listeningSets6 } from '../data/listeningSets6.js'
import { CET4_KEYS, CET6_KEYS, loadJSON, saveJSON, removeKey } from '../utils/storage.js'
import { examVars } from '../utils/examTheme.js'
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js'
import SectionAudio from '../components/listening/SectionAudio.jsx'
import { usePracticeSession, titleOfSet } from '../utils/practiceLog.js'
import WordLookup from '../components/WordLookup.jsx'

const EMPTY_ANSWERS = {} // { [q.n]: 'A' }

/* ── 列表页 ── */
export function ListeningList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const sets = isCet6 ? listeningSets6 : listeningSets
  const prefix = isCet6 ? CET6_KEYS.listeningProgress : CET4_KEYS.listeningProgress

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-8" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <header className="mb-6">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-800 mb-3 inline-block">← 返回首页</Link>
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-extrabold text-gray-900">{isCet6 ? 'CET-6' : 'CET-4'} 听力专项</h1>
          <div className="flex gap-1.5">
            {[{ code: 'cet4', label: 'CET-4' }, { code: 'cet6', label: 'CET-6' }].map((e) => {
              const active = (e.code === 'cet6') === isCet6
              return (
                <button
                  key={e.code}
                  onClick={() => {
                    setExamLevel(e.code)
                    setSearchParams(e.code === 'cet6' ? { exam: 'cet6' } : { exam: 'cet4' })
                  }}
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
        <p className="text-sm text-gray-500 mt-1">
          {isCet6
            ? 'Section A 长对话 · Section B 听力篇章 · Section C 讲座/讲话'
            : 'Section A 短篇新闻 · Section B 长对话 · Section C 听力篇章'}
        </p>
      </header>
      <div className="space-y-3">
        {sets.map((s) => {
          const saved = loadJSON(`${prefix}:${s.id}`)
          return (
            <Link key={s.id} to={`/listening/${s.id}${isCet6 ? '?exam=cet6' : ''}`}
              className="flex items-center justify-between rounded-2xl bg-white border border-gray-200 p-4 hover:border-[var(--accent-border)] hover:shadow transition-all group"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">{s.meta.year}年{s.meta.month}月 第{s.meta.set}套</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {saved?.submitted && (
                  <span className="text-xs text-gray-500">得分 {saved.score} / 25</span>
                )}
                <span className="text-gray-400 group-hover:text-[var(--accent)] transition-colors">→</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

/* ── 练习页 ── */
export function ListeningPractice() {
  const { setId } = useParams()
  const [searchParams] = useSearchParams()
  const isCet6 = resolveExamLevel(searchParams) === 'cet6'
  const set = useMemo(() => (isCet6 ? getListeningSet6(setId) : getListeningSet(setId)), [setId, isCet6])
  if (!set) {
    return (
      <div className="min-h-screen max-w-3xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-600 mb-3">未找到该套听力数据。</p>
        <Link to={isCet6 ? '/listening?exam=cet6' : '/listening'} className="text-sm text-[var(--accent)] font-bold">返回列表</Link>
      </div>
    )
  }
  return <PracticeRunner key={setId} setId={setId} set={set} isCet6={isCet6} />
}

/* 把三个 section 合成块级视图，每块显示 transcript + questions */
function buildSectionGroups(set) {
  return set.meta.level === 'CET6'
    ? [
        { key: 'a', label: 'Section A · 长对话', items: set.sections.a },
        { key: 'b', label: 'Section B · 听力篇章', items: set.sections.b },
        { key: 'c', label: 'Section C · 讲座/讲话', items: set.sections.c },
      ]
    : [
        { key: 'news', label: 'Section A · 短篇新闻', items: set.sections.news },
        { key: 'conv', label: 'Section B · 长对话', items: set.sections.conversations },
        { key: 'pass', label: 'Section C · 听力篇章', items: set.sections.passages },
      ]
}

/* 评分前提示：列出每个 Section 还有几题未答 */
function unansweredDetail(set, answers) {
  return buildSectionGroups(set)
    .map((g) => {
      const qs = g.items.flatMap((item) => item.questions)
      return { label: g.label.split(' · ')[0], left: qs.filter((q) => !answers[q.n]).length }
    })
    .filter((x) => x.left > 0)
    .map((x) => `${x.label} 还有 ${x.left} 题`)
    .join('、')
}

function PracticeRunner({ setId, set, isCet6 }) {
  const progressKey = `${isCet6 ? CET6_KEYS.listeningProgress : CET4_KEYS.listeningProgress}:${setId}`
  const saved = loadJSON(progressKey)
  const [answers, setAnswers] = useState(saved?.answers || EMPTY_ANSWERS)
  const [submitted, setSubmitted] = useState(!!saved?.submitted)
  const [activeSection, setActiveSection] = useState(0) // A=0, B=1, C=2

  // 自动保存进度（无论是否已提交，都保存当前答案）
  useEffect(() => {
    const cur = loadJSON(progressKey) || {}
    saveJSON(progressKey, { ...cur, answers })
  }, [answers, progressKey])

  // 把三个 section 合成一个"块级视图"，每块显示 transcript + questions
  const sectionGroups = buildSectionGroups(set)

  // 每部分题量与已答数：用于标签进度、右侧分部分进度和「下一部分」按钮
  const sectionStats = sectionGroups.map((g) => {
    const qs = g.items.flatMap((item) => item.questions)
    return { key: g.key, label: g.label, total: qs.length, done: qs.filter((q) => answers[q.n]).length }
  })
  const isLastSection = activeSection === sectionGroups.length - 1
  const nextGroup = isLastSection ? null : sectionGroups[activeSection + 1]
  function goNext() {
    if (!nextGroup) return
    setActiveSection(activeSection + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function setKey(n, v) {
    setAnswers((a) => ({ ...a, [n]: v }))
  }

  function handleSubmit() {
    const allAnswers = collectAllAnswers(set, answers)
    const unanswered = Object.keys(allAnswers).filter((k) => !allAnswers[k]).length
    if (unanswered > 0) {
      const detail = unansweredDetail(set, allAnswers)
      const ok = confirm(`有题目未作答：${detail}。确定评分吗？`)
      if (!ok) return
    }
    let right = 0
    Object.entries(allAnswers).forEach(([n, v]) => {
      const sec = findQuestionSection(set, parseInt(n, 10))
      const q = findQuestionInSection(sec, parseInt(n, 10))
      if (q && q.answer && v === q.answer) right++
    })
    const score = right
    const payload = { answers: allAnswers, score, submitted: true, doneAt: Date.now() }
    saveJSON(progressKey, payload)
    setAnswers(allAnswers)
    setSubmitted(true)
  }

  // 交卷后重做当前 Section：只清空本部分作答，其余保留，重新评分后统一计分
  function redoSection() {
    const g = sectionGroups[activeSection]
    if (!confirm(`重做「${g.label.split(' · ')[0]}」？本部分的作答将清空，需要重新评分。`)) return
    const next = { ...answers }
    g.items.forEach((item) => item.questions.forEach((q) => { delete next[q.n] }))
    saveJSON(progressKey, { answers: next })
    setAnswers(next)
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleReset() {
    if (!confirm('确定重置本套听力的所有作答？')) return
    setAnswers({})
    setSubmitted(false)
    setActiveSection(0)
    removeKey(progressKey)
  }

  usePracticeSession({
    kind: 'listening',
    setId,
    level: isCet6 ? 'cet6' : 'cet4',
    title: titleOfSet(setId),
    getStats: () => {
      const all = collectAllAnswers(set, answers)
      let right = 0
      Object.entries(all).forEach(([n, v]) => {
        if (!v) return
        const q = findQuestionInSection(findQuestionSection(set, parseInt(n, 10)), parseInt(n, 10))
        if (q && q.answer && v === q.answer) right++
      })
      return { answered: Object.values(all).filter(Boolean).length, correct: right }
    },
  })

  function countAnswered() {
    return Object.values(collectAllAnswers(set, answers)).filter(Boolean).length
  }

  function countRight() {
    if (!submitted) return 0
    let r = 0
    Object.entries(answers).forEach(([n, v]) => {
      const sec = findQuestionSection(set, parseInt(n, 10))
      const q = findQuestionInSection(sec, parseInt(n, 10))
      if (q && q.answer && v === q.answer) r++
    })
    return r
  }

  const total = 25
  const answered = countAnswered()

  return (
    <div className="min-h-screen bg-[#f7f8f5]" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      {/* 音频播放器 */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3 flex items-center gap-4">
          <Link to={isCet6 ? '/listening?exam=cet6' : '/listening'} className="text-sm text-gray-500 hover:text-gray-800 shrink-0">← 返回 {isCet6 ? 'CET-6' : 'CET-4'} 听力真题列表</Link>
          <div className="text-sm font-bold text-gray-900 truncate">{isCet6 ? 'CET-6' : 'CET-4'} · {set.meta.year}年{set.meta.month}月 第{set.meta.set}套</div>
          <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-gray-500 shrink-0">
            <span>{answered}/{total} 已答</span>
            {submitted && <span className="text-[var(--accent)] font-bold">得分 {countRight()}/{total}</span>}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
        {/* Section 导航 */}
        <div className="flex gap-2 mb-6">
          {sectionGroups.map((g, i) => (
            <button key={g.key}
              onClick={() => setActiveSection(i)}
              className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${activeSection === i ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
            >
              {g.label}
              <span className="ml-1.5 tabular-nums opacity-80">
                {sectionStats[i].done >= sectionStats[i].total ? '✓' : `${sectionStats[i].done}/${sectionStats[i].total}`}
              </span>
            </button>
          ))}
        </div>

        {/* 主内容：左题目 + 原文，右操作栏 */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-4">
          {/* 左：文章 + 题目 */}
          <WordLookup isCet6={isCet6} className="lg:col-span-9 space-y-5"><div className="space-y-5">
            {sectionGroups[activeSection].items.map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 text-xs font-bold text-gray-600">
                  {item.title}
                </div>
                {/* 篇章级音频播放器（FCE 风格） */}
                {item.audio && (
                  <div className="px-4 pt-3">
                    <SectionAudio key={item.audio} src={item.audio} />
                  </div>
                )}
                {/* Transcript：默认隐藏，点按钮展开；提交答案后荧光笔标出答案依据 */}
                <TranscriptBlock text={item.transcript} quotes={item.questions.map((q) => q.n)} answerQuotes={set.answerQuotes} highlight={submitted} />
                {/* Questions */}
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
                              <label key={opt.letter}
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
                                <input type="radio" name={`listen-${q.n}`}
                                  checked={checked}
                                  onChange={() => setKey(q.n, opt.letter)}
                                  className="mt-1 shrink-0" />
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
          </div></WordLookup>

          {/* 右：操作栏 */}
          <div className="lg:col-span-3 mt-5 lg:mt-0 lg:sticky lg:top-[80px] self-start space-y-3">
            <div className="rounded-2xl bg-white border border-gray-200 p-4">
              <div className="text-xs font-bold text-gray-500 mb-3">进度</div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">已答</span>
                <span className="font-bold">{answered} / {total}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--accent)] transition-all" style={{ width: `${(answered / total) * 100}%` }} />
              </div>
              <ul className="mt-4 space-y-1">
                {sectionStats.map((st, i) => {
                  const complete = st.done >= st.total
                  return (
                    <li key={st.key}>
                      <button
                        onClick={() => setActiveSection(i)}
                        className={'w-full flex items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-left transition-colors ' + (activeSection === i ? 'bg-[var(--accent-soft)] font-bold text-[var(--accent-deep)]' : 'text-gray-600 hover:bg-gray-50')}
                      >
                        <span>{st.label.split(' · ')[0]}</span>
                        <span className={'tabular-nums ' + (complete ? 'text-green-700 font-bold' : submitted ? 'text-gray-500' : 'px-1.5 rounded bg-[var(--hl-soft)] text-[var(--accent-deep)] font-bold')}>
                          {complete ? '✓' : `${st.done}/${st.total}`}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
              {submitted && (
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-500 mb-1">得分</div>
                  <div className="text-3xl font-extrabold text-[var(--accent)]">{countRight()}<span className="text-base text-gray-400">/{total}</span></div>
                </div>
              )}
            </div>

            {!submitted && nextGroup ? (
              <button onClick={goNext}
                className="w-full py-3 rounded-2xl bg-[var(--accent)] text-white font-bold hover:bg-[var(--accent-deep)] transition-colors"
              >下一部分：{nextGroup.label.split(' · ')[0]} →</button>
            ) : !submitted ? (
              <button onClick={handleSubmit}
                className="w-full py-3 rounded-2xl bg-[var(--accent)] text-white font-bold hover:bg-[var(--accent-deep)] transition-colors"
              >评分</button>
            ) : (
              <div className="space-y-2">
                <button onClick={handleSubmit}
                  className="w-full py-3 rounded-2xl bg-[var(--accent)] text-white font-bold hover:bg-[var(--accent-deep)] transition-colors"
                >重新评分</button>
                <button onClick={redoSection}
                  className="w-full py-2 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm"
                >↺ 重做本部分</button>
                <button onClick={handleReset}
                  className="w-full py-2 rounded-2xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors text-sm"
                >↺ 重置所有作答</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── 工具函数 ── */

// 原文折叠块：默认隐藏，点击展开/收起；提交后用荧光笔标出答案依据
function TranscriptBlock({ text, quotes = [], answerQuotes = {}, highlight = false }) {
  const [open, setOpen] = useState(false)
  if (!text) return null

  // 把当前篇章题号对应的 answerQuote 在 text 中找出来，用 <mark> 包裹
  // 忽略大小写和标点空格差异做匹配，但渲染时用 text 里的原片段
  function renderHighlighted() {
    if (!highlight) return text

    // 收集所有要高亮的 quote，按长度倒序（先匹配长的避免短 quote 抢位置）
    const needles = []
    for (const n of quotes) {
      const arr = answerQuotes[n] || answerQuotes[String(n)]
      if (Array.isArray(arr)) for (const q of arr) if (q) needles.push(q)
    }
    needles.sort((a, b) => b.length - a.length)

    // 宽松匹配：同时容忍 quote 和 text 的空格/标点差异
    const ranges = [] // [{start, end}]
    const lowerText = text.toLowerCase()
    const tNorm = (s) => s.toLowerCase().replace(/[.,;:!?'"'']/g, '').replace(/\s+/g, ' ')
    for (const q of needles) {
      // 先精确 lower-case 找
      let idx = lowerText.indexOf(q.toLowerCase())
      if (idx < 0) {
        // 再用宽松归一化匹配（容忍标点/空格差异）
        const normNeedle = tNorm(q)
        const normText = tNorm(text)
        const nIdx = normText.indexOf(normNeedle)
        if (nIdx >= 0) {
          // 在原 text 里定位：从 nIdx 开始，跳过前面若干字符
          let acc = 0, rawIdx = 0
          for (; rawIdx < text.length && acc < nIdx; rawIdx++) {
            const c = text[rawIdx]
            if (!/[.,;:!?'"'']/.test(c) && !/\s/.test(c)) acc++
            else if (/\s/.test(c) && (rawIdx === 0 || !/\s/.test(text[rawIdx - 1]))) acc++
          }
          idx = rawIdx
          let acc2 = 0, rawEnd = idx
          for (; rawEnd < text.length && acc2 < normNeedle.length; rawEnd++) {
            const c = text[rawEnd]
            if (!/[.,;:!?'"'']/.test(c) && !/\s/.test(c)) acc2++
            else if (/\s/.test(c) && (rawEnd === 0 || !/\s/.test(text[rawEnd - 1]))) acc2++
          }
          ranges.push({ start: idx, end: rawEnd })
        }
      } else {
        ranges.push({ start: idx, end: idx + q.length })
      }
    }

    // 去重叠：按 start 排序，重叠段取并集
    ranges.sort((a, b) => a.start - b.start)
    const merged = []
    for (const r of ranges) {
      if (!merged.length || r.start > merged[merged.length - 1].end) merged.push({ ...r })
      else merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, r.end)
    }
    if (!merged.length) return text

    // 按 range 切分 text 成 [..., {type:'text', s}, {type:'mark', s}, ...]
    const parts = []
    let cursor = 0
    for (const r of merged) {
      if (r.start > cursor) parts.push({ type: 'text', s: text.slice(cursor, r.start) })
      parts.push({ type: 'mark', s: text.slice(r.start, r.end) })
      cursor = r.end
    }
    if (cursor < text.length) parts.push({ type: 'text', s: text.slice(cursor) })

    return parts.map((p, i) =>
      p.type === 'mark'
        ? <mark key={i} className="bg-yellow-200 text-gray-900 px-0.5 rounded">{p.s}</mark>
        : <span key={i}>{p.s}</span>
    )
  }

  return (
    <div className="bg-[var(--accent-softer)] border-b border-gray-100">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full px-4 py-2.5 flex items-center gap-2 text-left text-xs font-bold text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
      >
        <span>{open ? '▼' : '▶'}</span>
        <span className="uppercase tracking-wider">Transcript 原文</span>
        <span className="font-normal text-[var(--accent)]/70">{open ? '点击隐藏' : '点击查看'}</span>
        {highlight && <span className="ml-auto font-normal text-[10px] text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full">荧光笔已标记答案句</span>}
      </button>
      {open && (
        <div className="px-4 pb-4 text-[21px] leading-[1.7] text-gray-700">{renderHighlighted()}</div>
      )}
    </div>
  )
}

function collectAllAnswers(set, answers) {
  const out = {}
  Object.values(set.sections).forEach((items) => items.forEach((item) => item.questions.forEach((q) => { out[q.n] = answers[q.n] || '' })))
  return out
}

function findQuestionSection(set, n) {
  for (const items of Object.values(set.sections)) {
    for (const item of items) if (item.questions.find((q) => q.n === n)) return item
  }
  return null
}
function findQuestionInSection(sec, n) {
  return sec?.questions?.find((q) => q.n === n) || null
}
