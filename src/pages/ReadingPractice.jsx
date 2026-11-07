import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getReadingSet } from '../data/readingSets.js'
import { getReadingSet6 } from '../data/readingSets6.js'
import { CET4_KEYS, CET6_KEYS, loadJSON, saveJSON, removeKey } from '../utils/storage.js'
import BankedCloze from '../components/reading/BankedCloze.jsx'
import ParagraphMatching from '../components/reading/ParagraphMatching.jsx'
import CarefulReading from '../components/reading/CarefulReading.jsx'

const SECTIONS = [
  { id: 'banked', label: 'A 选词填空' },
  { id: 'matching', label: 'B 长篇阅读' },
  { id: 'careful', label: 'C 仔细阅读' },
]

const EMPTY_ANSWERS = { banked: {}, matching: {}, careful: {} }

function loadProgress(setId, keys) {
  const saved = loadJSON(`${keys.readingProgress}:${setId}`)
  if (saved && saved.answers) {
    return { answers: { ...EMPTY_ANSWERS, ...saved.answers }, submitted: !!saved.submitted }
  }
  return { answers: EMPTY_ANSWERS, submitted: false }
}

export default function ReadingPractice() {
  const { setId } = useParams()
  const isCET6 = setId.startsWith('cet6-')
  const set = useMemo(() => (isCET6 ? getReadingSet6(setId) : getReadingSet(setId)), [setId, isCET6])
  if (!set) {
    return (
      <div className="min-h-screen max-w-3xl mx-auto px-4 py-8">
        <div className="rounded-2xl bg-white border border-dashed border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-3">未找到该套阅读数据。</p>
          <Link
            to={isCET6 ? '/reading?exam=cet6' : '/reading'}
            className="text-sm text-blue-600 font-bold"
          >
            返回阅读列表
          </Link>
        </div>
      </div>
    )
  }
  // key=setId：换套题时整组件重挂，进度在挂载时从 localStorage 惰性恢复
  return (
    <PracticeRunner
      key={setId}
      setId={setId}
      set={set}
      keys={isCET6 ? CET6_KEYS : CET4_KEYS}
    />
  )
}

function PracticeRunner({ setId, set, keys }) {
  const initial = useMemo(() => loadProgress(setId, keys), [setId, keys])
  const [tab, setTab] = useState('banked')
  const [answers, setAnswers] = useState(initial.answers)
  const [submitted, setSubmitted] = useState(initial.submitted)

  const setKey = (sec, n, val) => {
    setAnswers((prev) => {
      const next = { ...prev, [sec]: { ...prev[sec], [n]: val } }
      saveJSON(`${keys.readingProgress}:${setId}`, { answers: next, submitted })
      return next
    })
  }

  const totalQuestions =
    set.sections.banked.answers.length +
    set.sections.matching.answers.length +
    set.sections.careful.reduce((sum, p) => sum + p.questions.length, 0)

  const answeredCount =
    Object.keys(answers.banked).filter(Boolean).length +
    Object.keys(answers.matching).filter(Boolean).length +
    Object.keys(answers.careful).filter(Boolean).length

  const submit = () => {
    if (submitted) return
    if (answeredCount < totalQuestions) {
      const ok = window.confirm(`还有 ${totalQuestions - answeredCount} 题未作答，确认交卷？`)
      if (!ok) return
    }
    setSubmitted(true)
    saveJSON(`${keys.readingProgress}:${setId}`, { answers, submitted: true })
  }

  const reset = () => {
    if (!window.confirm('确认重置本套练习？将清空全部作答和得分。')) return
    removeKey(`${keys.readingProgress}:${setId}`)
    setAnswers({ banked: {}, matching: {}, careful: {} })
    setSubmitted(false)
  }

  const scoreOf = () => {
    let right = 0
    set.sections.banked.answers.forEach((ans, i) => {
      if (answers.banked[26 + i] === ans) right++
    })
    set.sections.matching.answers.forEach((ans, i) => {
      if (answers.matching[set.sections.matching.questions[i]?.n] === ans) right++
    })
    set.sections.careful.forEach((p) => {
      p.questions.forEach((q) => {
        if (answers.careful[q.n] === q.answer) right++
      })
    })
    return right
  }

  const renderSection = () => {
    if (tab === 'banked')
      return set.sections.banked.passage ? (
        <BankedCloze section={set.sections.banked} answers={answers.banked} onChange={(n, v) => setKey('banked', n, v)} submitted={submitted} />
      ) : (
        <EmptyHint text="选词填空数据未录入" />
      )
    if (tab === 'matching')
      return set.sections.matching.paragraphs.length ? (
        <ParagraphMatching section={set.sections.matching} answers={answers.matching} onChange={(n, v) => setKey('matching', n, v)} submitted={submitted} />
      ) : (
        <EmptyHint text="长篇阅读数据未录入" />
      )
    // careful 内可有 2 篇，顺序渲染；题号全局连续，共享一套 answers
    const list = set.sections.careful.filter((p) => p.passage)
    if (list.length === 0) return <EmptyHint text="仔细阅读数据未录入" />
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
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-8">
      <header className="mb-4">
        <div className="flex items-center justify-between">
          <Link to={`/reading${set.meta.level === 'CET6' ? '?exam=cet6' : ''}`} className="text-sm text-blue-600 font-bold">
            ← 返回列表
          </Link>
          <button
            onClick={reset}
            className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:border-red-300 hover:text-red-500"
          >
            ↺ 重置练习
          </button>
        </div>
        <h1 className="text-xl font-bold mt-2">
          {set.meta.level === 'CET6' ? 'CET-6 ' : ''}
          {set.meta.year}年{set.meta.month}月 第{set.meta.set}套 · 阅读
        </h1>
        {!set.meta.verified && (
          <p className="text-xs text-amber-600 mt-1">数据待人工核对，暂不代表官方</p>
        )}
      </header>

      <div className="sticky top-0 z-10 bg-gray-50 py-2 mb-3">
        <div className="flex gap-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setTab(s.id)}
              className={
                'rounded-xl px-3 py-1.5 text-sm font-bold border transition ' +
                (tab === s.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300')
              }
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {renderSection()}

      <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-4 flex items-center justify-between sticky bottom-3">
        <div className="text-sm text-gray-500">
          已答 <span className="font-bold text-blue-600">{answeredCount}</span> / {totalQuestions}
          {submitted && (
            <span className="ml-3">
              得分 <span className="font-bold text-green-600">{scoreOf()}</span> / {totalQuestions}
            </span>
          )}
        </div>
        <button
          onClick={submit}
          disabled={submitted}
          className={
            'rounded-xl px-5 py-2 text-sm font-bold ' +
            (submitted
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700')
          }
        >
          {submitted ? '已交卷' : '交卷'}
        </button>
      </div>
    </div>
  )
}

function EmptyHint({ text }) {
  return (
    <div className="rounded-2xl bg-white border border-dashed border-gray-200 p-6 text-sm text-gray-500">
      {text}
    </div>
  )
}
