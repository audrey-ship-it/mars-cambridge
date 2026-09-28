import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { WritingCard } from './CambridgeExam'
import { KET_EXAMS } from '../data/ketExamData'
import { KET_STANDARD_WRITING } from '../data/ketStandardWritingData'
import { petWritingTests } from '../data/petWritingData'
import { PET_WRITING_SAMPLES } from '../data/petWritingSamples'
import { PET_WRITING_STANDARD } from '../data/petWritingStandard'
import { PET_WRITING_TRAINER1 } from '../data/petWritingTrainer1'
import { PET_WRITING_TRAINER2 } from '../data/petWritingTrainer2'

// PET 写作扁平序列：主20 + 样题3 + 标准8 + Trainer1 6 + Trainer2 6 = 43
const PET_WRITING_FLAT = [
  { source: 'pet',          list: petWritingTests },
  { source: 'pet-sample',   list: PET_WRITING_SAMPLES },
  { source: 'pet-standard', list: PET_WRITING_STANDARD },
  { source: 'pet-trainer1', list: PET_WRITING_TRAINER1 },
  { source: 'pet-trainer2', list: PET_WRITING_TRAINER2 },
].flatMap(g => g.list.map((_, i) => ({ source: g.source, testN: i + 1 })))

const PET_WRITING_SOURCE_LABELS = {
  'pet': '官方真题',
  'pet-sample': '官方样题',
  'pet-standard': '标准版真题',
  'pet-trainer1': 'Trainer 1',
  'pet-trainer2': 'Trainer 2',
}

const WRITING_SETS = [1, 2, 3].flatMap(book => [1, 2, 3, 4].map(test => {
  const exam = KET_EXAMS.find(item => item.id === `ket-${book}-test${test}`)
  return exam ? { exam, book, test } : null
})).filter(Boolean).concat(Object.entries(KET_STANDARD_WRITING).map(([id, writing]) => ({
  exam: { id, label: '标准版真题 1', reading: { writing } },
  book: 'standard',
  test: 1,
})))

const PART_INFO = {
  6: {
    label: 'Part 6 · Email',
    title: 'Part 6 Email 邮件写作',
    help: '阅读情境和三个写作要点，完成一封25词以上的电子邮件。',
  },
  7: {
    label: 'Part 7 · 看图写话',
    title: 'Part 7 看图写话',
    help: '观察三幅连续图片，完成一篇35词以上的故事。',
  },
}

const PET_TABS = [
  { id: 0, label: 'Part 1 · 邮件' },
  { id: 1, label: 'Part 2 · 文章' },
  { id: 2, label: 'Part 2 · 故事' },
]

const PET_PART_INFO = {
  0: { title: 'Part 1 邮件写作', help: '阅读情境邮件和旁批，写一封约 100 词的回信，必须用上全部四个旁批。' },
  1: { title: 'Part 2 文章写作', help: 'Part 2 二选一：为杂志写一篇约 100 词的文章，回答题目中的问题。' },
  2: { title: 'Part 2 故事写作', help: 'Part 2 二选一：以给定句子开头，写一篇约 100 词的故事。' },
}

/* PET 写作中心：与 KET 写作中心同构，Part 标签 + Test 选择器 + WritingCard */
function PetWritingCentre({ level, setLevel }) {
  const [flatIdx, setFlatIdx] = useState(0)
  const [petTab, setPetTab] = useState(0)
  const entry = PET_WRITING_FLAT[flatIdx] || PET_WRITING_FLAT[0]
  const activeList =
    entry.source === 'pet-sample'   ? PET_WRITING_SAMPLES
  : entry.source === 'pet-standard' ? PET_WRITING_STANDARD
  : entry.source === 'pet-trainer1' ? PET_WRITING_TRAINER1
  : entry.source === 'pet-trainer2' ? PET_WRITING_TRAINER2
  : petWritingTests
  const test = activeList[entry.testN - 1]
  const item = test.items[petTab]
  const sourceLabel = PET_WRITING_SOURCE_LABELS[entry.source] || '官方真题'
  const currentN = flatIdx + 1

  return (
    <CambridgeLayout activeModule="writing" level={level} setLevel={setLevel}>
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <div className="mr-1 rounded-xl border border-violet-300 bg-violet-50 px-4 py-2.5 text-sm font-extrabold text-violet-800">
            我的写作中心
          </div>
          <span className="mr-1 text-slate-300">›</span>
          {PET_TABS.map(tab => (
            <button key={tab.id} type="button" onClick={() => setPetTab(tab.id)}
              aria-current={petTab === tab.id ? 'page' : undefined}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                petTab === tab.id
                  ? 'border-violet-600 bg-violet-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-violet-300 hover:text-violet-700'
              }`}>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <div>
          <div className="text-[11px] font-extrabold tracking-[.18em] text-violet-700">B1 PET WRITING</div>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">{PET_PART_INFO[petTab].title}</h1>
          <p className="mt-2 text-slate-500">{PET_PART_INFO[petTab].help}</p>
        </div>

        <section className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <strong className="text-sm text-slate-700">选择练习</strong>
            <span className="text-xs text-slate-400">共 {PET_WRITING_FLAT.length} 套 · 当前为练习{currentN} · {sourceLabel}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
            {PET_WRITING_FLAT.map((it, i) => {
              const n = i + 1
              const active = i === flatIdx
              return (
                <button key={n} type="button" onClick={() => setFlatIdx(i)}
                  aria-current={active ? 'page' : undefined}
                  title={`${PET_WRITING_SOURCE_LABELS[it.source] || ''} · Test ${it.testN}`}
                  className={`rounded-xl border px-3 py-3 text-sm font-extrabold transition ${
                    active
                      ? 'border-violet-600 bg-violet-600 text-white shadow-sm'
                      : 'border-violet-100 bg-violet-50 text-violet-800 hover:border-violet-300'
                  }`}>
                  {n}
                </button>
              )
            })}
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4 text-xs font-semibold text-slate-400">
            {sourceLabel} · Test {entry.testN} · {test.meta.collection}
          </div>
          <WritingCard
            key={`${test.meta.id}-${petTab}`}
            w={item}
            wi={0}
            storageKey={`mars_pet_writing_v1:${entry.source}:test${entry.testN}:item${petTab}:draft`}
          />
        </section>
      </main>
    </CambridgeLayout>
  )
}

function PetWritingPractice({ level, setLevel }) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const source = searchParams.get('source') || 'pet'
  const activeList =
    source === 'pet-sample'   ? PET_WRITING_SAMPLES
  : source === 'pet-standard' ? PET_WRITING_STANDARD
  : source === 'pet-trainer1' ? PET_WRITING_TRAINER1
  : source === 'pet-trainer2' ? PET_WRITING_TRAINER2
  : petWritingTests
  const maxTest = activeList.length
  const testN = Math.min(maxTest, Math.max(1, Number(searchParams.get('petTest')) || 1))
  const tabId = Math.min(2, Math.max(0, Number(searchParams.get('petTab')) || 0))
  const test = activeList[testN - 1]
  const item = test.items[tabId]

  // 扁平全局序号
  const flatIdx = PET_WRITING_FLAT.findIndex(f => f.source === source && f.testN === testN)
  const currentN = flatIdx >= 0 ? flatIdx + 1 : 1
  const sourceLabel = PET_WRITING_SOURCE_LABELS[source] || '官方真题'

  function setParam(key, value) {
    const next = new URLSearchParams(searchParams)
    next.set(key, String(value))
    setSearchParams(next, { replace: true })
  }

  return (
    <CambridgeLayout activeModule="writing" level={level} setLevel={setLevel}>
      <nav className="flex flex-wrap items-center gap-3 border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => navigate('/cambridge/writing')}
          className="rounded-xl border border-violet-300 bg-violet-50 px-4 py-2.5 text-sm font-extrabold text-violet-800">
          ← 我的写作中心
        </button>
        <span className="text-slate-300">›</span>
        <span className="text-sm font-extrabold text-slate-600">PET 写作 · 练习{currentN}</span>
      </nav>

      {/* Test selector - 连续 1-43 网格 */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-3.5 sm:px-6">
          <div className="mb-2 flex items-center justify-between gap-3">
            <strong className="text-sm text-slate-700">选择练习</strong>
            <span className="text-xs text-slate-400">
              共 {PET_WRITING_FLAT.length} 套 · 当前为练习{currentN} · {sourceLabel}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
            {PET_WRITING_FLAT.map((it, i) => {
              const n = i + 1
              const active = it.source === source && it.testN === testN
              return (
                <button
                  key={n}
                  onClick={() => {
                    const next = new URLSearchParams(searchParams)
                    next.set('source', it.source)
                    next.set('petTest', it.testN)
                    setSearchParams(next, { replace: true })
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-xl border px-3 py-3 text-sm font-extrabold transition ${
                    active
                      ? 'border-violet-600 bg-violet-600 text-white shadow-sm'
                      : 'border-violet-100 bg-violet-50 text-violet-800 hover:border-violet-300'
                  }`}>
                  {n}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3">
            {PET_TABS.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setParam('petTab', tab.id)}
                className={`whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                  tab.id === tabId
                    ? 'border-violet-600 bg-violet-600 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-violet-300 hover:text-violet-700'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-violet-700">PET WRITING</div>
        <h1 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">{item.title}</h1>
        <p className="mt-2 text-slate-500">
          {tabId === 0
            ? '阅读情境邮件和旁批，写一封约 100 词的回信，必须用上全部四个旁批。'
            : tabId === 1
              ? 'Part 2 二选一：为杂志写一篇约 100 词的文章，回答题目中的问题。'
              : 'Part 2 二选一：以给定句子开头，写一篇约 100 词的故事。'}
        </p>

        <section className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4 text-xs font-semibold text-slate-400">
            {sourceLabel} · Test {testN} · {test.meta.collection}
          </div>
          <WritingCard
            key={`${test.meta.id}-${tabId}`}
            w={item}
            wi={0}
            storageKey={`mars_pet_writing_v1:test${testN}:item${tabId}:draft`}
          />
        </section>
      </main>
    </CambridgeLayout>
  )
}

export default function CambridgeWriting() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialPart = searchParams.get('part') === '7' ? 7 : 6
  const initialSet = Math.min(WRITING_SETS.length, Math.max(1, Number(searchParams.get('set')) || 1))
  const [level, setLevel] = useState(() => {
    try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' }
  })
  useEffect(() => { try { localStorage.setItem('cambridge_level', level) } catch { /* storage unavailable */ } }, [level])
  const [part, setPart] = useState(initialPart)
  const [setIndex, setSetIndex] = useState(initialSet - 1)
  const selected = WRITING_SETS[setIndex]
  const writing = useMemo(
    () => selected?.exam.reading.writing.find(item => item.part === part),
    [selected, part],
  )

  useEffect(() => {
    if (searchParams.get('view') === 'pet') return
    setSearchParams({ part: String(part), set: String(setIndex + 1) }, { replace: true })
  }, [part, setIndex, setSearchParams, searchParams])

  if (searchParams.get('view') === 'pet') return <PetWritingPractice level={level} setLevel={setLevel} />
  if (level === 'PET') return <PetWritingCentre level={level} setLevel={setLevel} />

  return (
    <CambridgeLayout activeModule="writing" level={level} setLevel={setLevel}>
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <div className="mr-1 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-sm font-extrabold text-emerald-800">
            我的写作中心
          </div>
          <span className="mr-1 text-slate-300">›</span>
          {[6, 7].map(partId => (
            <button key={partId} type="button" onClick={() => setPart(partId)}
              aria-current={part === partId ? 'page' : undefined}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                part === partId
                  ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-emerald-300 hover:text-emerald-700'
              }`}>
              {PART_INFO[partId].label}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <div>
          <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">KET WRITING</div>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">{PART_INFO[part].title}</h1>
          <p className="mt-2 text-slate-500">{PART_INFO[part].help}</p>
        </div>

        <section className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <strong className="text-sm text-slate-700">选择练习</strong>
            <span className="text-xs text-slate-400">共 {WRITING_SETS.length} 套 · 当前为练习{setIndex + 1}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
            {WRITING_SETS.map((item, index) => (
              <button key={item.exam.id} type="button" onClick={() => setSetIndex(index)}
                aria-current={setIndex === index ? 'page' : undefined}
                title={`${item.exam.label} · ${PART_INFO[part].label}`}
                className={`rounded-xl border px-3 py-3 text-sm font-extrabold transition ${
                  setIndex === index
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                    : 'border-emerald-100 bg-emerald-50 text-emerald-800 hover:border-emerald-300'
                }`}>
                {index + 1}
              </button>
            ))}
          </div>
        </section>

        {writing && (
          <section className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4 text-xs font-semibold text-slate-400">
              练习 {setIndex + 1} · {selected.exam.label}
            </div>
            <WritingCard
              key={`${selected.exam.id}-${part}`}
              w={writing}
              wi={0}
              storageKey={`mars_ket_writing_center_v1:${selected.exam.id}:part${part}:draft`}
            />
          </section>
        )}
      </main>
    </CambridgeLayout>
  )
}
