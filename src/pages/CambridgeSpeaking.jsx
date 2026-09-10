import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { KET_EXAMS } from '../data/ketExamData'
import { KET_SPEAKING_PART1_TOPICS } from '../data/ketSpeakingTopicBank'

const SPEAKING_SETS = [1, 2, 3].flatMap(book => [1, 2, 3, 4].map(test => {
  const exam = KET_EXAMS.find(item => item.id === `ket-${book}-test${test}`)
  return exam ? { exam, book, test } : null
})).filter(Boolean)

const PART_INFO = {
  1: { label: 'Part 1 · 个人问答', title: 'Part 1 个人问答', help: '按15个常考主题练习考官问答，用完整句子回答，并补充理由或细节。' },
  2: { label: 'Part 2 · 图片讨论', title: 'Part 2 图片讨论', help: '观察官方话题图卡，围绕图片表达观点并进行比较。' },
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
  const initialPart = searchParams.get('part') === '2' ? 2 : searchParams.get('part') === '1' ? 1 : 0
  const initialSet = Math.min(12, Math.max(1, Number(searchParams.get('set')) || 1))
  const initialTopic = Math.max(0, KET_SPEAKING_PART1_TOPICS.findIndex(item => item.id === searchParams.get('topic')))
  const [level, setLevel] = useState('KET')
  const [part, setPart] = useState(initialPart)
  const [setIndex, setSetIndex] = useState(initialSet - 1)
  const [topicIndex, setTopicIndex] = useState(initialTopic)
  const [questionIndex, setQuestionIndex] = useState(0)
  const selected = SPEAKING_SETS[setIndex]
  const sourcePart = selected?.exam.speaking?.parts?.find(item => item.part === 2)
  const selectedTopic = KET_SPEAKING_PART1_TOPICS[topicIndex]
  const topics = useMemo(() => {
    if (part === 1) return selectedTopic?.questions || []
    return sourcePart?.topics || []
  }, [part, selectedTopic, sourcePart])
  const topic = topics[Math.min(questionIndex, Math.max(0, topics.length - 1))]
  const topicImage = topic?.imageSrc || (part === 2
    ? `/images/ket/productive/b${selected.book}/test-${selected.test}-speaking.jpg`
    : '')

  useEffect(() => {
    const nextParams = part === 0
      ? {}
      : part === 1
      ? { part: '1', topic: selectedTopic.id }
      : { part: '2', set: String(setIndex + 1) }
    setSearchParams(nextParams, { replace: true })
  }, [part, setIndex, selectedTopic, setSearchParams])

  useEffect(() => setQuestionIndex(0), [part, setIndex, topicIndex])

  return (
    <CambridgeLayout activeModule="speaking" level={level} setLevel={setLevel}>
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <button type="button" onClick={() => setPart(0)} aria-current={part === 0 ? 'page' : undefined}
            className={`mr-1 rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${part === 0 ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm' : 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'}`}>
            我的口语中心
          </button>
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
        {part === 0 ? (
          <>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">KET SPEAKING</div>
            <h1 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">我的口语中心</h1>
            <p className="mt-2 text-slate-500">选择一种练习，熟悉 KET 口语考试的提问方式与表达方法。</p>

            <section className="mt-7 grid gap-5 md:grid-cols-2">
              <button type="button" onClick={() => setPart(1)} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
                <div className="grid h-56 place-items-center bg-gradient-to-br from-emerald-50 to-cyan-50 p-6">
                  <svg viewBox="0 0 420 210" role="img" aria-label="考官与考生进行个人问答" className="h-full w-full max-w-md">
                    <rect x="25" y="20" width="370" height="165" rx="24" fill="#fff" stroke="#a7f3d0" strokeWidth="3" />
                    <circle cx="125" cy="84" r="30" fill="#6ee7b7" /><path d="M76 157c5-37 24-55 49-55s44 18 49 55" fill="#059669" />
                    <circle cx="295" cy="84" r="30" fill="#bae6fd" /><path d="M246 157c5-37 24-55 49-55s44 18 49 55" fill="#0284c7" />
                    <path d="M166 55h72c12 0 22 10 22 22v25c0 12-10 22-22 22h-20l-15 15v-15h-37c-12 0-22-10-22-22V77c0-12 10-22 22-22Z" fill="#fff" stroke="#10b981" strokeWidth="3" />
                    <circle cx="180" cy="90" r="5" fill="#10b981" /><circle cx="202" cy="90" r="5" fill="#10b981" /><circle cx="224" cy="90" r="5" fill="#10b981" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs font-extrabold tracking-widest text-emerald-600">PART 1</div>
                  <h2 className="mt-1 text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700">个人问答</h2>
                  <p className="mt-2 leading-7 text-slate-500">围绕个人信息、家庭、学校、兴趣等 15 个常考主题，练习用完整句子自然作答。</p>
                  <span className="mt-5 inline-flex items-center font-bold text-emerald-700">进入主题练习 <span className="ml-2">→</span></span>
                </div>
              </button>

              <button type="button" onClick={() => setPart(2)} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
                <div className="grid h-56 place-items-center bg-gradient-to-br from-emerald-50 to-cyan-50 p-6">
                  <svg viewBox="0 0 420 210" role="img" aria-label="两位考生讨论图片卡" className="h-full w-full max-w-md">
                    <rect x="25" y="20" width="370" height="165" rx="24" fill="#fff" stroke="#a7f3d0" strokeWidth="3" />
                    <rect x="137" y="43" width="146" height="91" rx="12" fill="#ecfdf5" stroke="#10b981" strokeWidth="3" />
                    <circle cx="174" cy="76" r="15" fill="#7dd3fc" />
                    <path d="m147 121 34-31 23 21 20-17 48 27Z" fill="#6ee7b7" />
                    <circle cx="91" cy="105" r="25" fill="#6ee7b7" /><path d="M53 164c4-31 18-47 38-47s34 16 38 47" fill="#059669" />
                    <circle cx="329" cy="105" r="25" fill="#bae6fd" /><path d="M291 164c4-31 18-47 38-47s34 16 38 47" fill="#0284c7" />
                    <path d="M119 90h24M277 90h24" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
                    <path d="m131 81 12 9-12 9M289 81l-12 9 12 9" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs font-extrabold tracking-widest text-emerald-600">PART 2</div>
                  <h2 className="mt-1 text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700">图片讨论</h2>
                  <p className="mt-2 leading-7 text-slate-500">观察官方话题图卡，练习描述图片、比较选择、表达观点，并与同伴展开讨论。</p>
                  <span className="mt-5 inline-flex items-center font-bold text-emerald-700">进入图片练习 <span className="ml-2">→</span></span>
                </div>
              </button>
            </section>
          </>
        ) : (
          <>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">KET SPEAKING</div>
            <h1 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">{PART_INFO[part].title}</h1>
            <p className="mt-2 text-slate-500">{PART_INFO[part].help}</p>
          </>
        )}

        {part !== 0 && <section className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <strong className="text-sm text-slate-700">{part === 1 ? '选择主题' : '选择练习'}</strong>
            <span className="text-xs text-slate-400">{part === 1 ? `共15个主题 · 当前：${selectedTopic.label}` : `共 ${SPEAKING_SETS.length} 套 · 当前为练习${setIndex + 1}`}</span>
          </div>
          {part === 1 ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {KET_SPEAKING_PART1_TOPICS.map((item, index) => (
                <button key={item.id} type="button" onClick={() => setTopicIndex(index)} aria-current={topicIndex === index ? 'page' : undefined}
                  className={`rounded-xl border px-3 py-3 text-left transition ${topicIndex === index ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm' : 'border-emerald-100 bg-emerald-50 text-emerald-800 hover:border-emerald-300'}`}>
                  <span className="block text-sm font-extrabold">{index + 1}. {item.label}</span>
                  <span className={`mt-0.5 block text-[11px] ${topicIndex === index ? 'text-emerald-100' : 'text-emerald-600'}`}>{item.en}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
              {SPEAKING_SETS.map((item, index) => (
                <button key={item.exam.id} type="button" onClick={() => setSetIndex(index)} aria-current={setIndex === index ? 'page' : undefined}
                  title={`${item.exam.label} · ${PART_INFO[part].label}`}
                  className={`rounded-xl border px-3 py-3 text-sm font-extrabold transition ${setIndex === index ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm' : 'border-emerald-100 bg-emerald-50 text-emerald-800 hover:border-emerald-300'}`}>
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </section>}

        {topic && part === 1 && (
          <section className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
              <span className="text-xs font-semibold text-slate-400">主题：{selectedTopic.label} · 问题 {questionIndex + 1}/{topics.length}</span>
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
