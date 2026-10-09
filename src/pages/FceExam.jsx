import { Link } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { fceExamPapers, fceExamTitle, parseFceExamId, FCE_EDITIONS } from '../data/fceTestRegistry'
import { readFceProgress, fceProgressStatus } from '../data/fceExamProgress'

// FCE 模考总览页：一套试题 = 四张试卷入口，点击进入对应专项练习页（带 exam 参数）。
// 时长为剑桥 B2 First 公开考试规格；题量从已录入数据实时计算；进度存本机 localStorage。
// examId 规范: fce-mock-N / fce-standard-<册>-test<套> / fce-schools-<册>-test<套>

export function FceExamOverview({ examId }) {
  const parsed = parseFceExamId(examId)
  const papers = fceExamPapers(examId)
  if (!parsed || !papers) return <FceMissing />

  const { reading, writing, listening, speaking } = papers
  const qCount = (obj, field) => obj ? Object.values(obj.parts || {}).reduce((sum, p) => sum + ((p.items?.length) || p[field]?.length || 0), 0) : 0
  const readingQs = qCount(reading, 'tasks')
  const writingQs = qCount(writing, 'tasks')
  const listeningQs = qCount(listening, 'tasks')
  const speakingQs = qCount(speaking, 'questions')
  const prog = readFceProgress(examId)
  const ready = { reading: !!reading, writing: !!writing, listening: !!listening, speaking: !!speaking }
  const meta = reading || listening || writing || speaking

  const sections = [
    { icon: '🎧', title: '听力', en: 'Listening', detail: `约 40 分钟 · 4 个 Part${listeningQs ? ' · ' + listeningQs + ' 道题' : ''}${ready.listening ? ' · 音频已就绪' : ' · 录入中'}`, href: ready.listening ? `/cambridge/exams/${examId}?tab=listening` : undefined, pct: prog.listeningPct },
    { icon: '📖', title: '阅读与英语运用', en: 'Reading & Use of English', detail: `1 小时 15 分 · 7 个 Part${readingQs ? ' · ' + readingQs + ' 道题' : ''}${ready.reading ? '' : ' · 录入中'}`, href: ready.reading ? `/cambridge/exams/${examId}?tab=reading` : undefined, pct: prog.readingPct },
    { icon: '✍️', title: '写作', en: 'Writing', detail: `1 小时 20 分 · 2 个 Part${writingQs ? ' · ' + writingQs + ' 道题' : ''}${ready.writing ? ' · 含官方范文/评分说明' : ' · 录入中'}`, href: ready.writing ? `/cambridge/exams/${examId}?tab=writing` : undefined, pct: prog.writingPct },
    { icon: '🎙️', title: '口语', en: 'Speaking', detail: `14 分钟 · 4 个 Part${speakingQs ? ' · ' + speakingQs + ' 个任务' : ''}${ready.speaking ? '' : ' · 录入中'}`, href: ready.speaking ? `/cambridge/exams/${examId}?tab=speaking` : undefined, pct: null },
  ]

  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Link to={parsed.edition === 'mock' ? '/cambridge/exams' : `/cambridge/exams/${parsed.edition === 'standard' ? 'fce-standard' : 'fce-schools'}-${parsed.book}`} className="text-sm font-bold text-sky-700 hover:text-sky-900">← 返回试卷列表</Link>

        <div className="mt-3 rounded-[22px] border border-sky-200 bg-gradient-to-r from-sky-900 to-sky-700 p-6 text-white shadow-sm">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-bold">B2 FCE</span>
          <h1 className="mt-2 text-2xl font-extrabold">{fceExamTitle(examId)}</h1>
          <p className="mt-1 text-sm text-sky-100">
            {meta ? <>书内页 {meta.pages} · 来源 {meta.source} · </> : null}四份试卷
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-2 w-48 overflow-hidden rounded-full bg-white/20">
              <div className="h-full rounded-full bg-white transition-all" style={{ width: `${prog.overallPct}%` }} />
            </div>
            <span className="text-sm font-extrabold text-white">总进度 {prog.overallPct}%</span>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {sections.map(s => {
            const open = s.href !== undefined && !!s.href
            const Card = open ? Link : 'div'
            return (
              <Card key={s.title} {...(open ? { to: s.href } : {})}
                className={`group rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm ${open ? 'transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md' : 'opacity-65'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-2xl text-white">{s.icon}</div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${!open ? 'bg-gray-100 text-gray-500' : s.pct === null ? 'bg-sky-50 text-sky-700' : s.pct >= 100 ? 'bg-emerald-50 text-emerald-700' : s.pct > 0 ? 'bg-amber-50 text-amber-700' : 'bg-slate-50 text-slate-500'}`}>
                    {!open ? '录入中' : s.pct === null ? '模考模式' : fceProgressStatus(s.pct)}
                  </span>
                </div>
                <div className="mt-4 text-xl font-extrabold text-slate-900 group-hover:text-sky-800">{s.title}</div>
                <div className="text-sm font-semibold text-slate-400">{s.en}</div>
                <div className="mt-2 text-sm text-slate-500">{s.detail}</div>
                {open && s.pct !== null && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-sky-500 transition-all" style={{ width: `${s.pct}%` }} />
                    </div>
                    <span className="w-10 text-right text-xs font-extrabold text-sky-700">{s.pct}%</span>
                  </div>
                )}
                <div className="mt-4 text-right text-sm font-extrabold text-sky-700">{open ? '开始 →' : '核对中'}</div>
              </Card>
            )
          })}
        </div>

        <div className="mt-4 text-center">
          <Link to="/cambridge/wrong/fce" className="inline-flex rounded-xl border border-sky-200 bg-white px-5 py-2.5 text-sm font-extrabold text-sky-700 shadow-sm transition hover:border-sky-400">
            ✗ 错题本（阅读 · 听力）
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          {meta?.answerSource ? <>答案核对：{meta.answerSource} · </> : null}数据来自用户提供的官方真题原件，逐题人工核对后录入
        </p>
      </main>
    </CambridgeLayout>
  )
}

// 一本书（标准版/校园版某册）的 Test 1–4 列表
export function FceBookOverview({ edition, book }) {
  const editionDef = FCE_EDITIONS.find(e => e.edition === edition)
  const bookDef = editionDef?.books.find(b => b.book === Number(book))
  if (!editionDef || !bookDef) return <FceMissing />

  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Link to="/cambridge/exams" className="text-sm font-bold text-sky-700 hover:text-sky-900">← 返回试卷列表</Link>

        <div className="mt-3 rounded-[22px] border border-sky-200 bg-gradient-to-r from-sky-900 to-sky-700 p-6 text-white shadow-sm">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-bold">B2 FCE · {editionDef.label}</span>
          <h1 className="mt-2 text-2xl font-extrabold">{bookDef.title}</h1>
          <p className="mt-1 text-sm text-sky-100">{bookDef.sub} · 4 套全真试题 · 听力 4 Part · 阅读 7 Part · 写作 2 Part · 口语 4 Part</p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map(t => {
            const examId = `${bookDef.examId}-test${t}`
            const papers = fceExamPapers(examId)
            const readyCount = ['reading', 'writing', 'listening', 'speaking'].filter(k => papers?.[k]).length
            const open = readyCount > 0
            const pct = open ? readFceProgress(examId).overallPct : 0
            const firstPaper = papers?.reading || papers?.listening || papers?.writing || papers?.speaking
            const Card = open ? Link : 'div'
            return (
              <Card key={examId} {...(open ? { to: `/cambridge/exams/${examId}` } : {})}
                className={`group block rounded-[22px] border border-gray-200 bg-white p-5 shadow-sm ${open ? 'transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md' : 'opacity-75'}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500">
                    <span className="text-xl text-white">📝</span>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${pct >= 100 ? 'bg-sky-100 text-sky-700' : pct > 0 ? 'bg-amber-100 text-amber-800' : open ? 'bg-gray-100 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
                    {!open ? '录入中' : fceProgressStatus(pct)}{pct > 0 ? ` ${pct}%` : ''}
                  </span>
                </div>
                <div className="mt-5">
                  <div className="text-xl font-extrabold leading-snug text-gray-900 transition-colors group-hover:text-sky-800">Test {t}</div>
                  <div className="mt-2 text-sm text-gray-400">{firstPaper ? firstPaper.source : bookDef.source}</div>
                  <div className="mt-1 text-sm text-gray-400">听力 4 Part · 阅读 7 Part · 写作 2 Part · 口语 4 Part{open && readyCount < 4 ? ` · 已上线 ${readyCount}/4 卷` : ''}</div>
                </div>
                <div className="mt-auto pt-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-gray-400">练习进度</span>
                    <span className="whitespace-nowrap text-xs font-bold text-gray-500">{open ? `${pct}%` : '尚未开放'}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full bg-sky-600" style={{ width: `${pct}%` }} />
                  </div>
                  <div className={`mt-4 text-right text-sm font-extrabold ${open ? 'text-sky-700' : 'text-gray-400'}`}>{open ? '进入试卷 →' : '录入中'}</div>
                </div>
              </Card>
            )
          })}
        </div>
      </main>
    </CambridgeLayout>
  )
}

function FceMissing() {
  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <main className="mx-auto max-w-6xl px-4 py-16 text-center">
        <div className="text-4xl">🔒</div>
        <h2 className="mt-3 text-xl font-bold text-gray-800">找不到该试卷</h2>
        <Link to="/cambridge/exams" className="mt-2 inline-block text-sm font-semibold text-sky-700 hover:underline">返回试卷列表</Link>
      </main>
    </CambridgeLayout>
  )
}
