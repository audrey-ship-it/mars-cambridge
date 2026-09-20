import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { WritingCard } from './CambridgeExam'
import { KET_EXAMS } from '../data/ketExamData'
import { KET_STANDARD_WRITING } from '../data/ketStandardWritingData'

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

export default function CambridgeWriting() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialPart = searchParams.get('part') === '7' ? 7 : 6
  const initialSet = Math.min(WRITING_SETS.length, Math.max(1, Number(searchParams.get('set')) || 1))
  const [level, setLevel] = useState('KET')
  const [part, setPart] = useState(initialPart)
  const [setIndex, setSetIndex] = useState(initialSet - 1)
  const selected = WRITING_SETS[setIndex]
  const writing = useMemo(
    () => selected?.exam.reading.writing.find(item => item.part === part),
    [selected, part],
  )

  useEffect(() => {
    setSearchParams({ part: String(part), set: String(setIndex + 1) }, { replace: true })
  }, [part, setIndex, setSearchParams])

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
