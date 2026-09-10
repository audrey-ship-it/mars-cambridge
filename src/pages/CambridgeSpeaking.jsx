import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { KET_EXAMS } from '../data/ketExamData'

const SPEAKING_SETS = [1, 2, 3].flatMap(book => [1, 2, 3, 4].map(test => {
  const exam = KET_EXAMS.find(item => item.id === `ket-${book}-test${test}`)
  return exam ? { exam, book, test } : null
})).filter(Boolean)

const PART_INFO = {
  1: { label: 'Part 1 · 个人问答', title: 'Part 1 个人问答', help: '听考官提问，用完整句子回答，并补充理由或细节。' },
  2: { label: 'Part 2 · 图片讨论', title: 'Part 2 图片讨论', help: '观察官方话题图卡，围绕图片表达观点并进行比较。' },
}

const partOnePool = KET_EXAMS.flatMap(exam => exam.speaking?.parts?.find(item => item.part === 1)?.topics || [])

function fallbackPartOne(setIndex) {
  if (!partOnePool.length) return []
  return Array.from({ length: 3 }, (_, index) => {
    const source = partOnePool[(setIndex * 3 + index) % partOnePool.length]
    return { ...source, id: `practice-${setIndex + 1}-${index + 1}` }
  })
}

function ReferenceAnswer({ topic }) {
  return (
    <div>
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="mb-3 text-xs font-extrabold tracking-wide text-emerald-700">参考答案</div>
        <p className="text-base leading-8 text-slate-700">{topic.modelAnswer}</p>
      </div>
      {!!topic.phrases?.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {topic.phrases.map((phrase, index) => (
            <span key={index} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">💬 {phrase}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function CambridgeSpeaking() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialPart = searchParams.get('part') === '2' ? 2 : 1
  const initialSet = Math.min(12, Math.max(1, Number(searchParams.get('set')) || 1))
  const [level, setLevel] = useState('KET')
  const [part, setPart] = useState(initialPart)
  const [setIndex, setSetIndex] = useState(initialSet - 1)
  const [questionIndex, setQuestionIndex] = useState(0)
  const selected = SPEAKING_SETS[setIndex]
  const sourcePart = selected?.exam.speaking?.parts?.find(item => item.part === part)
  const topics = useMemo(() => {
    if (part === 1) return sourcePart?.topics?.length ? sourcePart.topics : fallbackPartOne(setIndex)
    return sourcePart?.topics || []
  }, [part, setIndex, sourcePart])
  const topic = topics[Math.min(questionIndex, Math.max(0, topics.length - 1))]
  const topicImage = topic?.imageSrc || (part === 2
    ? `/images/ket/productive/b${selected.book}/test-${selected.test}-speaking.jpg`
    : '')

  useEffect(() => {
    setSearchParams({ part: String(part), set: String(setIndex + 1) }, { replace: true })
  }, [part, setIndex, setSearchParams])

  useEffect(() => setQuestionIndex(0), [part, setIndex])

  return (
    <CambridgeLayout activeModule="speaking" level={level} setLevel={setLevel}>
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <div className="mr-1 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-sm font-extrabold text-emerald-800">我的口语中心</div>
          <span className="mr-1 text-slate-300">›</span>
          {[1, 2].map(partId => (
            <button key={partId} type="button" onClick={() => setPart(partId)} aria-current={part === partId ? 'page' : undefined}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${part === partId ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:border-emerald-300 hover:text-emerald-700'}`}>
              {PART_INFO[partId].label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">KET SPEAKING</div>
        <h1 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">{PART_INFO[part].title}</h1>
        <p className="mt-2 text-slate-500">{PART_INFO[part].help}</p>

        <section className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <strong className="text-sm text-slate-700">选择练习</strong>
            <span className="text-xs text-slate-400">共 {SPEAKING_SETS.length} 套 · 当前为练习{setIndex + 1}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
            {SPEAKING_SETS.map((item, index) => (
              <button key={item.exam.id} type="button" onClick={() => setSetIndex(index)} aria-current={setIndex === index ? 'page' : undefined}
                title={`${item.exam.label} · ${PART_INFO[part].label}`}
                className={`rounded-xl border px-3 py-3 text-sm font-extrabold transition ${setIndex === index ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm' : 'border-emerald-100 bg-emerald-50 text-emerald-800 hover:border-emerald-300'}`}>
                {index + 1}
              </button>
            ))}
          </div>
        </section>

        {topic && part === 1 && (
          <section className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
              <span className="text-xs font-semibold text-slate-400">练习 {setIndex + 1} · 问题 {questionIndex + 1}/{topics.length}</span>
              <div className="flex gap-2">
                {topics.map((_, index) => <button key={index} onClick={() => setQuestionIndex(index)} className={`grid h-8 w-8 place-items-center rounded-lg text-xs font-extrabold ${questionIndex === index ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>{index + 1}</button>)}
              </div>
            </div>
            <div>
              <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
                <div className="text-xs font-extrabold tracking-wide text-emerald-700">考官提问</div>
                <h2 className="mt-3 text-2xl font-extrabold leading-snug text-slate-900">{topic.question}</h2>
                <p className="mt-3 text-sm text-slate-500">回答思路：{topic.chineseHint}</p>
              </div>
              <div className="px-6 py-5 sm:px-8"><ReferenceAnswer topic={topic} /></div>
            </div>
          </section>
        )}

        {topic && part === 2 && (
          <section className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4 text-xs font-semibold text-slate-400">练习 {setIndex + 1} · {selected.exam.label}</div>
            <div className="grid items-start lg:grid-cols-2">
              <div className="border-b border-slate-100 bg-slate-50 p-5 lg:sticky lg:top-4 lg:border-b-0 lg:border-r">
                <div className="mb-3 flex items-center justify-between"><strong className="text-lg text-slate-900">{topic.theme}</strong><span className="text-xs text-slate-400">{topic.themeZh}</span></div>
                {topicImage ? <img src={topicImage} alt={`${topic.theme} speaking card`} className="max-h-[620px] w-full rounded-2xl border border-slate-200 bg-white object-contain" /> : <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-400">图片材料</div>}
              </div>
              <div className="p-6">
                <div className="text-xs font-extrabold tracking-wide text-emerald-700">讨论问题</div>
                <ol className="mt-4 space-y-3">
                  {topic.cardPrompts.map((question, index) => <li key={index} className="flex gap-3 rounded-xl border border-slate-200 p-3 text-sm leading-6 text-slate-700"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs font-extrabold text-emerald-700">{index + 1}</span>{question}</li>)}
                </ol>
                <div className="mt-5"><ReferenceAnswer topic={topic} /></div>
              </div>
            </div>
          </section>
        )}
      </main>
    </CambridgeLayout>
  )
}
