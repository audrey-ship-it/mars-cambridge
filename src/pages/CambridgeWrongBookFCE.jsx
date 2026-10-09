import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { fceExamPapers, fceExamTitle } from '../data/fceTestRegistry'
import { listFceWrong, resolveFceWrong, clearFceWrong, resolveFceWrongExamId } from '../data/fceWrongBook'

// FCE 错题本：收录阅读/听力答错的题；重新答对（原地或此处重做）即移出队列。
// 口语为练习模式、写作以范文对照为主，均不进错题本。
// entry.testN 为存储侧 examKey（旧数据纯数字、新数据 'fce-standard-1-test2' 等），展示/取数前统一解析成 examId。

const PAPER_LABEL = { reading: '📖 阅读', listening: '🎧 听力' }

function lookupEntry(e) {
  try {
    const papers = fceExamPapers(resolveFceWrongExamId(e.testN))
    if (!papers) return null
    if (e.paper === 'reading') {
      const item = papers.reading?.parts?.[e.partId]?.items
        ?.find(it => String(it.q) === String(e.key))
      if (!item) return null
      const mcq = Array.isArray(item.opts)
      return {
        item,
        mcq,
        stem: item.q_text || item.stem || (item.given ? `词形变换（${item.given}）` : '原文填空题，可在阅读专项页回看原文'),
        correctText: mcq ? item.opts[item.answer] : (item.show || (Array.isArray(item.answer) ? item.answer.join(' / ') : String(item.answer))),
      }
    }
    const items = papers.listening?.parts?.[e.partId]?.items || []
    const item = items[Number(e.key)]
    if (!item) return null
    const mcq = Array.isArray(item.opts)
    return {
      item,
      mcq,
      stem: item.scenario ? `${item.scenario} — ${item.q || ''}` : (item.q || '听力填空题，可在听力专项页回听音频'),
      correctText: mcq ? item.opts[item.answer] : (Array.isArray(item.answer) ? item.answer.join(' / ') : String(item.answer)),
    }
  } catch {
    return null
  }
}

function entryExamLabel(e) {
  const id = resolveFceWrongExamId(e.testN)
  return id ? fceExamTitle(id) : `Test ${e.testN}`
}

function isRedoCorrect(entry, item, sel) {
  const a = item.answer
  if (entry.mcq) {
    const correctLetter = typeof a === 'number' ? String.fromCharCode(65 + a) : String(a).toUpperCase()
    return String(sel).toUpperCase() === correctLetter
  }
  const val = String(sel || '').trim().toLowerCase()
  const accepted = Array.isArray(a) ? a : [a]
  return accepted.some(acc => String(acc).trim().toLowerCase() === val)
}

function WrongCard({ entry, onRemove }) {
  const ref = lookupEntry(entry)
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

  const { item, mcq, stem, correctText } = ref

  function submitRedo() {
    const ok = isRedoCorrect(entry, item, mcq ? sel : text)
    setJudged(ok ? 'right' : 'wrong')
    if (ok) {
      resolveFceWrong(entry.paper, entry.testN, entry.partId, entry.key)
      setTimeout(() => onRemove(entry), 1200)
    }
  }

  return (
    <div className={`rounded-2xl border p-4 shadow-sm transition-colors ${
      judged === 'right' ? 'border-emerald-300 bg-emerald-50' : judged === 'wrong' ? 'border-red-300 bg-red-50/60' : 'border-slate-200 bg-white'
    }`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-lg bg-sky-500 px-2 py-0.5 text-xs font-extrabold text-white">{PAPER_LABEL[entry.paper]}</span>
        <span className="text-xs font-extrabold text-slate-500">{entryExamLabel(entry)} · Part {entry.partId} · Q{entry.key}</span>
        <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-600">错 {entry.count} 次</span>
        {judged === 'right' && <span className="text-xs font-extrabold text-emerald-600">✓ 答对！已移出错题本</span>}
        {judged === 'wrong' && <span className="text-xs font-extrabold text-red-500">仍未答对，继续加油</span>}
      </div>

      <p className="mt-2 text-sm font-bold leading-6 text-slate-800">{stem}</p>

      <div className="mt-2 text-xs leading-5 text-slate-500">
        <span className="text-red-500">你的答案：</span>{entry.userAnswer || '（未作答）'}
        <span className="mx-2 text-slate-300">|</span>
        <span className="text-emerald-600">正确答案：</span><strong>{correctText}</strong>
      </div>
      {item.explanation && (
        <p className="mt-1.5 text-xs leading-5 text-sky-800"><strong>解析：</strong>{item.explanation}</p>
      )}

      {/* 重做 */}
      {judged !== 'right' && (
        <div className="mt-3 border-t border-dashed border-slate-200 pt-3">
          <div className="text-xs font-extrabold text-slate-400">重新作答</div>
          {mcq ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.opts.map((opt, oi) => {
                const label = String.fromCharCode(65 + oi)
                return (
                  <button key={oi} onClick={() => setSel(label)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                      sel === label ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300'
                    }`}>
                    {label}. {opt.length > 40 ? `${opt.slice(0, 40)}…` : opt}
                  </button>
                )
              })}
            </div>
          ) : (
            <input value={text} onChange={e => setText(e.target.value)} placeholder="输入你的答案"
              className="mt-2 w-full max-w-sm rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400" />
          )}
          <button onClick={submitRedo} disabled={mcq ? !sel : !text.trim()}
            className="mt-2 rounded-lg bg-sky-500 px-4 py-1.5 text-xs font-extrabold text-white transition hover:bg-sky-600 disabled:opacity-40">
            提交重做
          </button>
        </div>
      )}
    </div>
  )
}

export default function CambridgeWrongBookFCE() {
  const [entries, setEntries] = useState(() => listFceWrong())
  const [filter, setFilter] = useState('all')
  const [cleared, setCleared] = useState(false)

  const shown = entries.filter(e => filter === 'all' || e.paper === filter)

  function removeEntry(entry) {
    setEntries(list => list.filter(x => !(x.paper === entry.paper && x.testN === entry.testN && x.partId === entry.partId && String(x.key) === String(entry.key))))
  }

  function handleClear() {
    if (!window.confirm('确定清空全部错题记录吗？')) return
    clearFceWrong()
    setEntries([])
    setCleared(true)
  }

  const readingCount = entries.filter(e => e.paper === 'reading').length
  const listeningCount = entries.filter(e => e.paper === 'listening').length

  return (
    <CambridgeLayout activeModule="exams" level="FCE">
      <nav className="border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <span className="mr-1 rounded-xl border border-sky-500 bg-sky-500 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm">FCE 错题本</span>
          {[['all', `全部 ${entries.length}`], ['reading', `阅读 ${readingCount}`], ['listening', `听力 ${listeningCount}`]].map(([id, label]) => (
            <button key={id} onClick={() => setFilter(id)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                filter === id ? 'border-sky-500 bg-sky-500 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-600'
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
        <div className="text-[11px] font-extrabold tracking-[.18em] text-sky-600">FCE REVIEW · WRONG BOOK</div>
        <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">错题复习</h1>
        <p className="mt-2 text-sm text-slate-500">
          阅读与听力中答错的题自动收录；<strong className="text-slate-700">重新答对（原地或此处重做）即移出错题本</strong>。记录仅保存在本机浏览器。
        </p>

        {shown.length === 0 ? (
          <section className="mt-6 rounded-[24px] border border-slate-200 bg-white px-6 py-16 text-center">
            <div className="text-4xl">{cleared ? '🎉' : '✓'}</div>
            <h2 className="mt-3 text-xl font-extrabold text-slate-900">{cleared ? '已清空错题本' : '这里暂时没有错题'}</h2>
            <p className="mt-2 text-sm text-slate-500">在阅读或听力专项页提交答案后，答错的题会自动出现在这里。</p>
            <div className="mt-5 flex justify-center gap-3">
              <Link to="/cambridge/reading/fce" className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-extrabold text-white">去练阅读 →</Link>
              <Link to="/cambridge/listening/fce" className="rounded-xl border border-sky-200 px-5 py-3 text-sm font-extrabold text-sky-700">去练听力 →</Link>
            </div>
          </section>
        ) : (
          <div className="mt-6 space-y-4">
            {shown.map(e => (
              <WrongCard key={`${e.paper}-${e.testN}-${e.partId}-${e.key}`} entry={e} onRemove={removeEntry} />
            ))}
          </div>
        )}
      </main>
    </CambridgeLayout>
  )
}
