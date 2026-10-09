import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { adaptReadingTest, examSetNumber } from './CambridgeExam'
import { resolvePetPaper, adaptPetReadingTest } from './PetExam'
import { mockListeningData } from './CambridgeListening'
import { getKetReadingTest } from '../data/ketReadingCatalog'
import { listMockWrong, resolveMockWrong, clearMockWrong } from '../data/mockWrongBook'

// KET / PET 模考错题本：收录阅读/听力答错的题；重新答对（原地或此处重做）即移出队列。
// 写作以范文对照为主、口语为练习模式，均不进错题本。
// entry.testN 存完整 examId；entry.partId 为 Part 号；entry.key 为题在 Part 内的序号（0 起）。

const PAPER_LABEL = { reading: '📖 阅读', listening: '🎧 听力' }
const ABC = ['A', 'B', 'C']
const ABCD = ['A', 'B', 'C', 'D']

const THEME = {
  KET: {
    badge: 'border-emerald-600 bg-emerald-600',
    tabActive: 'border-emerald-600 bg-emerald-600',
    tabIdle: 'border-slate-200 bg-white text-slate-500 hover:border-emerald-300 hover:text-emerald-700',
    eyebrow: 'text-emerald-600',
    chip: 'bg-emerald-600',
    primaryBtn: 'bg-emerald-600 hover:bg-emerald-700',
    linkBtn: 'border-emerald-200 text-emerald-700 hover:border-emerald-400',
    emptyBtn: 'bg-emerald-600',
    explain: 'text-emerald-900',
  },
  PET: {
    badge: 'border-violet-600 bg-violet-600',
    tabActive: 'border-violet-600 bg-violet-600',
    tabIdle: 'border-slate-200 bg-white text-slate-500 hover:border-violet-300 hover:text-violet-700',
    eyebrow: 'text-violet-700',
    chip: 'bg-violet-700',
    primaryBtn: 'bg-violet-600 hover:bg-violet-700',
    linkBtn: 'border-violet-200 text-violet-700 hover:border-violet-400',
    emptyBtn: 'bg-violet-700',
    explain: 'text-violet-900',
  },
}

const truncate = (text, n = 80) => {
  const s = String(text || '').trim()
  return s.length > n ? `${s.slice(0, n)}…` : s
}
const letter = i => String.fromCharCode(65 + Number(i))

/* examRef → 展示标题 */
function examLabel(level, examRef) {
  const id = String(examRef || '')
  if (level === 'KET') {
    const [, book, test] = id.match(/^ket-standard-(\d+)-test(\d+)$/) || []
    if (book) return `标准版真题 ${book} · Test ${test}`
    const [, b, t] = id.match(/^ket-(\d+)-test(\d+)$/) || []
    if (b) return `真题 ${(Number(b) - 1) * 4 + Number(t)}`
    return id
  }
  const [, kind, nStr] = id.match(/^pet-(mock|sample|standard|trainer1|trainer2)-(\d+)$/) || []
  if (!kind) return id
  const n = Number(nStr)
  if (kind === 'sample') return `官方样题 ${n}`
  if (kind === 'standard') return `标准版真题 ${n > 4 ? 2 : 1} · Test ${n > 4 ? n - 4 : n}`
  if (kind === 'trainer1') return `Trainer 1 · Test ${n}`
  if (kind === 'trainer2') return `Trainer 2 · Test ${n}`
  if (n <= 8) return `模拟题 ${n}`
  if (n <= 12) return `青少版真题3 · Test ${n - 8}`
  if (n <= 16) return `青少版真题1 · Test ${n - 12}`
  return `青少版真题2 · Test ${n - 16}`
}

/* ── PET 回查 ── */
function lookupPetReading(e) {
  const [, kind, nStr] = String(e.testN).match(/^pet-(mock|sample|standard|trainer1|trainer2)-(\d+)$/) || []
  if (!kind) return null
  const parts = adaptPetReadingTest(resolvePetPaper(kind, 'reading', Number(nStr)))
  const part = parts.find(p => String(p.part) === String(e.partId))
  if (!part) return null
  const q = part.questions[Number(e.key)]
  if (!q) return null

  if (part.type === 'pet_notice_mcq' || part.type === 'pet_article_mcq' || part.type === 'pet_cloze_mcq') {
    const labels = part.type === 'pet_notice_mcq' ? ABC : ABCD
    return {
      qNum: q.n, stem: part.type === 'pet_notice_mcq' ? truncate(q.content, 60) : q.text,
      mode: 'choice', choices: q.opts.map((t, i) => ({ label: labels[i], text: t })),
      correctLabel: labels[q.ans], correctText: q.opts[q.ans], explanation: q.exp,
    }
  }
  if (part.type === 'pet_person_match') {
    const name = part.people.find(p => p.n === q.n)?.name || q.person
    return {
      qNum: q.n, stem: `人物配对 · ${name}`,
      mode: 'choice', choices: part.options.map(o => ({ label: o.label, text: o.name })),
      correctLabel: q.ans, correctText: part.options.find(o => o.label === q.ans)?.name || q.ans, explanation: q.exp,
    }
  }
  if (part.type === 'pet_gapped_text') {
    return {
      qNum: q.n, stem: `Gap [${q.n}]`,
      mode: 'choice', choices: part.options.map(o => ({ label: o.label, text: truncate(o.text, 60) })),
      correctLabel: q.ans, correctText: q.ans, explanation: q.exp,
    }
  }
  return {
    qNum: q.n, stem: `Gap (${q.n})`, mode: 'text',
    accepted: q.ans || [], correctText: (q.ans || [])[0],
    extraText: (q.ans || []).length > 1 ? `也可以: ${q.ans.slice(1).join(' / ')}` : null, explanation: q.exp,
  }
}

function lookupPetListening(e) {
  const [, kind, nStr] = String(e.testN).match(/^pet-(mock|sample|standard|trainer1|trainer2)-(\d+)$/) || []
  if (!kind) return null
  const part = resolvePetPaper(kind, 'listening', Number(nStr))?.parts?.[Number(e.partId)]
  if (!part) return null
  const item = part.items?.[Number(e.key)]
  if (!item) return null

  if (part.type === 'image_mcq' || part.type === 'mcq') {
    return {
      qNum: Number(e.key) + 1, stem: item.q, mode: 'choice',
      choices: item.opts ? item.opts.map((t, i) => ({ label: ABC[i], text: t })) : ABC.map(l => ({ label: l, text: l })),
      correctLabel: ABC[item.answer], correctText: item.opts ? item.opts[item.answer] : ABC[item.answer], explanation: item.explanation,
    }
  }
  return {
    qNum: Number(e.key) + 1, stem: item.q, mode: 'text',
    accepted: item.answer || [], correctText: item.show || (item.answer || [])[0], explanation: item.explanation,
  }
}

/* ── KET 回查 ── */
function lookupKetReading(e) {
  const test = getKetReadingTest(e.testN)
  if (!test) return null
  const part = adaptReadingTest(test).find(p => String(p.part) === String(e.partId))
  if (!part) return null
  const q = part.questions[Number(e.key)]
  if (!q) return null

  if (part.type === 'text_mcq' || part.type === 'article_mcq' || part.type === 'gap_fill_mcq') {
    return {
      qNum: q.n,
      stem: part.type === 'text_mcq' ? (q.question || truncate(q.content, 60)) : part.type === 'article_mcq' ? q.text : `Gap [${q.n}]`,
      mode: 'choice', choices: q.opts.map((t, i) => ({ label: ABC[i], text: t })),
      correctLabel: ABC[q.ans], correctText: `${ABC[q.ans]}. ${q.opts[q.ans]}`, explanation: q.exp,
    }
  }
  if (part.type === 'multiple_matching') {
    return {
      qNum: q.n, stem: q.text, mode: 'choice',
      choices: part.passages.map(p => ({ label: p.label, text: p.name })),
      correctLabel: q.ans, correctText: `${q.ans}. ${part.passages.find(p => p.label === q.ans)?.name || ''}`, explanation: q.exp,
    }
  }
  return {
    qNum: q.n, stem: `Gap (${q.n})`, mode: 'text',
    accepted: q.ans || [], correctText: (q.ans || [])[0],
    extraText: (q.ans || []).length > 1 ? `也可以: ${q.ans.slice(1).join(' / ')}` : null, explanation: q.exp,
  }
}

function lookupKetListening(e) {
  const setId = examSetNumber({ id: e.testN })
  if (!setId) return null
  const data = mockListeningData(setId, Number(e.partId))
  if (!data) return null
  const item = data.items?.[Number(e.key)]
  if (!item) return null

  if (data.type === 'picture') {
    return {
      qNum: Number(e.key) + 1, stem: item.question, mode: 'choice',
      choices: ABC.map(l => ({ label: l, text: l })),
      correctLabel: letter(item.answer), correctText: letter(item.answer), explanation: item.explanation,
    }
  }
  if (data.type === 'mcq') {
    return {
      qNum: Number(e.key) + 1, stem: item.q, mode: 'choice',
      choices: item.opts.map((t, i) => ({ label: ABC[i], text: t })),
      correctLabel: letter(item.answer), correctText: `${letter(item.answer)}. ${item.opts[item.answer]}`, explanation: item.explanation,
    }
  }
  if (data.type === 'match') {
    return {
      qNum: Number(e.key) + 1, stem: item.q, mode: 'choice',
      choices: (data.options || []).map((t, i) => ({ label: letter(i), text: t })),
      correctLabel: letter(item.answer), correctText: `${letter(item.answer)}. ${data.options?.[item.answer]}`, explanation: item.explanation,
    }
  }
  return {
    qNum: Number(e.key) + 1, stem: item.q, mode: 'text',
    accepted: item.answer || [], correctText: item.show || (item.answer || []).join(' / '), explanation: item.explanation,
  }
}

function lookupEntry(level, e) {
  try {
    if (level === 'PET') return e.paper === 'reading' ? lookupPetReading(e) : lookupPetListening(e)
    return e.paper === 'reading' ? lookupKetReading(e) : lookupKetListening(e)
  } catch {
    return null
  }
}

function isRedoCorrect(ref, sel) {
  if (ref.mode === 'choice') return String(sel || '').toUpperCase() === String(ref.correctLabel).toUpperCase()
  const val = String(sel || '').trim().toLowerCase()
  return (ref.accepted || []).some(a => String(a).trim().toLowerCase() === val)
}

function WrongCard({ level, theme, entry, onRemove }) {
  const ref = lookupEntry(level, entry)
  const [sel, setSel] = useState('')
  const [text, setText] = useState('')
  const [judged, setJudged] = useState(null) // 'right' | 'wrong'

  if (!ref) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-400">
        该题引用的数据不存在（可能已调整），<button onClick={() => onRemove(entry)} className="font-bold text-red-400 underline">从错题本移除</button>
      </div>
    )
  }

  function submitRedo() {
    const ok = isRedoCorrect(ref, ref.mode === 'choice' ? sel : text)
    setJudged(ok ? 'right' : 'wrong')
    if (ok) {
      resolveMockWrong(level.toLowerCase(), entry.paper, entry.testN, entry.partId, entry.key)
      setTimeout(() => onRemove(entry), 1200)
    }
  }

  return (
    <div className={`rounded-2xl border p-4 shadow-sm transition-colors ${
      judged === 'right' ? 'border-emerald-300 bg-emerald-50' : judged === 'wrong' ? 'border-red-300 bg-red-50/60' : 'border-slate-200 bg-white'
    }`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-lg px-2 py-0.5 text-xs font-extrabold text-white ${theme.chip}`}>{PAPER_LABEL[entry.paper]}</span>
        <span className="text-xs font-extrabold text-slate-500">{examLabel(level, entry.testN)} · Part {entry.partId} · Q{ref.qNum}</span>
        <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">错 {entry.count} 次</span>
        {judged === 'right' && <span className="text-xs font-extrabold text-emerald-600">✓ 答对！已移出错题本</span>}
        {judged === 'wrong' && <span className="text-xs font-extrabold text-red-500">仍未答对，继续加油</span>}
      </div>

      <p className="mt-2 text-sm font-bold leading-6 text-slate-800">{ref.stem}</p>

      <div className="mt-2 text-xs leading-5 text-slate-500">
        <span className="text-red-500">你的答案：</span>{entry.userAnswer || '（未作答）'}
        <span className="mx-2 text-slate-300">|</span>
        <span className="text-emerald-600">正确答案：</span><strong>{ref.correctText}</strong>{ref.extraText ? <span className="text-slate-400">（{ref.extraText}）</span> : null}
      </div>
      {ref.explanation && (
        <p className={`mt-1.5 text-xs leading-5 ${theme.explain}`}><strong>解析：</strong>{ref.explanation}</p>
      )}

      {/* 重做 */}
      {judged !== 'right' && (
        <div className="mt-3 border-t border-dashed border-slate-200 pt-3">
          <div className="text-xs font-extrabold text-slate-400">重新作答</div>
          {ref.mode === 'choice' ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {ref.choices.map(c => (
                <button key={c.label} onClick={() => setSel(c.label)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                    sel === c.label ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300'
                  }`}>
                  {c.label}. {c.text.length > 40 ? `${c.text.slice(0, 40)}…` : c.text}
                </button>
              ))}
            </div>
          ) : (
            <input value={text} onChange={e => setText(e.target.value)} placeholder="输入你的答案"
              className="mt-2 w-full max-w-sm rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400" />
          )}
          <button onClick={submitRedo} disabled={ref.mode === 'choice' ? !sel : !text.trim()}
            className={`mt-2 rounded-lg px-4 py-1.5 text-xs font-extrabold text-white transition disabled:opacity-40 ${theme.primaryBtn}`}>
            提交重做
          </button>
        </div>
      )}
    </div>
  )
}

export default function CambridgeWrongBookMock({ level = 'KET' }) {
  const lc = level.toLowerCase()
  const theme = THEME[level] || THEME.KET
  const [entries, setEntries] = useState(() => listMockWrong(lc))
  const [filter, setFilter] = useState('all')
  const [cleared, setCleared] = useState(false)

  const shown = entries.filter(e => filter === 'all' || e.paper === filter)

  function removeEntry(entry) {
    setEntries(list => list.filter(x => !(x.paper === entry.paper && x.testN === entry.testN && x.partId === entry.partId && String(x.key) === String(entry.key))))
  }

  function handleClear() {
    if (!window.confirm('确定清空全部错题记录吗？')) return
    clearMockWrong(lc)
    setEntries([])
    setCleared(true)
  }

  const readingCount = entries.filter(e => e.paper === 'reading').length
  const listeningCount = entries.filter(e => e.paper === 'listening').length

  return (
    <CambridgeLayout activeModule="exams" level={level}>
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <span className={`mr-1 rounded-xl border px-4 py-2.5 text-sm font-extrabold text-white shadow-sm ${theme.badge}`}>{level} 错题本</span>
          {[['all', `全部 ${entries.length}`], ['reading', `阅读 ${readingCount}`], ['listening', `听力 ${listeningCount}`]].map(([id, label]) => (
            <button key={id} onClick={() => setFilter(id)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                filter === id ? `${theme.tabActive} text-white shadow-sm` : theme.tabIdle
              }`}>
              {label}
            </button>
          ))}
          {entries.length > 0 && (
            <button onClick={handleClear} className="ml-auto rounded-xl border border-rose-200 px-3 py-2 text-xs font-bold text-rose-500 transition hover:bg-rose-50">
              清空错题本
            </button>
          )}
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 py-7 sm:px-6">
        <div className={`text-[11px] font-extrabold tracking-[.18em] ${theme.eyebrow}`}>{level} MOCK EXAM · WRONG BOOK</div>
        <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">错题复习</h1>
        <p className="mt-2 text-sm text-slate-500">
          模考阅读与听力中答错的题自动收录；<strong className="text-slate-700">重新答对（原地或此处重做）即移出错题本</strong>。记录仅保存在本机浏览器。
        </p>

        {shown.length === 0 ? (
          <section className="mt-6 rounded-[24px] border border-slate-200 bg-white px-6 py-16 text-center">
            <div className="text-4xl">{cleared ? '🎉' : '✓'}</div>
            <h2 className="mt-3 text-xl font-extrabold text-slate-900">{cleared ? '已清空错题本' : '这里暂时没有错题'}</h2>
            <p className="mt-2 text-sm text-slate-500">完成整套阅读或听力模考并交卷后，答错的题会自动出现在这里。</p>
            <div className="mt-5 flex justify-center gap-3">
              <Link to="/cambridge/exams" className={`rounded-xl px-5 py-3 text-sm font-extrabold text-white ${theme.emptyBtn}`}>去做模考 →</Link>
            </div>
          </section>
        ) : (
          <div className="mt-6 space-y-4">
            {shown.map(e => (
              <WrongCard key={`${e.paper}-${e.testN}-${e.partId}-${e.key}`} level={level} theme={theme} entry={e} onRemove={removeEntry} />
            ))}
          </div>
        )}
      </main>
    </CambridgeLayout>
  )
}
