import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { readGrammarMistakes } from '../utils/grammarMistakes'

const TYPE_LABELS = { questions: '选择题', blanks: '挖空练习', corrections: '改错题' }

export default function CambridgeGrammarMistakes() {
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const [filter, setFilter] = useState('all')
  const mistakes = useMemo(() => Object.values(readGrammarMistakes()).sort((a, b) => b.lastWrongAt - a.lastWrongAt), [])
  const visible = filter === 'all' ? mistakes : mistakes.filter(item => item.type === filter)

  return (
    <CambridgeLayout activeModule="grammar" level={level} setLevel={setLevel}>
      <nav className="w-full border-b border-gray-100 bg-white px-6 py-4 flex items-center gap-3 text-sm" aria-label="语法学习路径">
        <Link to="/cambridge/grammar" className="inline-flex items-center gap-2 rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 font-extrabold text-[#735500] hover:bg-[#fbe9ad]">
          <span>←</span>我的语法中心
        </Link>
        <span className="text-gray-300">›</span><span className="font-extrabold text-gray-700">语法错题本</span>
      </nav>
      <main className="mx-auto max-w-6xl px-6 py-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div><div className="text-[11px] font-extrabold tracking-[.18em] text-amber-700">GRAMMAR REVIEW</div><h1 className="mt-1 text-4xl font-extrabold text-gray-950">语法错题本</h1><p className="mt-2 text-gray-500">错题自动收录；同一道题连续答对两次后移出待复习列表。</p></div>
          <div className="rounded-2xl border border-amber-300 bg-[#fff4cf] px-6 py-4"><span className="text-sm font-bold text-amber-900">待复习</span><strong className="ml-4 text-3xl text-[#735500]">{mistakes.length}</strong></div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {[['all','全部'],['questions','选择题'],['blanks','挖空练习'],['corrections','改错题']].map(([id,label]) => <button key={id} onClick={() => setFilter(id)} className={`rounded-xl px-4 py-2.5 text-sm font-extrabold ${filter === id ? 'bg-[#f4c95d] text-[#143f35]' : 'border border-gray-200 bg-white text-gray-500'}`}>{label}</button>)}
        </div>
        {visible.length === 0 ? (
          <section className="mt-6 rounded-[24px] border border-gray-200 bg-white px-6 py-16 text-center"><div className="text-4xl">✓</div><h2 className="mt-3 text-xl font-extrabold text-gray-900">这里暂时没有错题</h2><p className="mt-2 text-sm text-gray-500">继续练习，答错的题会自动出现在这里。</p><Link to="/cambridge/grammar" className="mt-5 inline-flex rounded-xl bg-[#064e3b] px-5 py-3 text-sm font-extrabold text-white">选择语法单元 →</Link></section>
        ) : (
          <div className="mt-6 space-y-3">{visible.map(item => <article key={item.id} className="rounded-[20px] border border-gray-200 bg-white p-5 shadow-sm"><div className="flex flex-col gap-4 md:flex-row md:items-start"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-extrabold text-amber-800">{TYPE_LABELS[item.type]}</span><span className="text-xs font-bold text-gray-400">U{item.unitNum} · {item.unitTitle}</span>{item.correctStreak === 1 && <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">已答对 1 次</span>}</div><h2 className="mt-3 text-base font-extrabold leading-relaxed text-gray-900">{item.prompt}</h2>{item.promptZh && <p className="mt-1 text-sm text-gray-500">{item.promptZh}</p>}<p className="mt-3 text-sm font-bold text-emerald-800">正确答案：{item.correctAnswer}</p><p className="mt-1 text-sm leading-relaxed text-gray-500">{item.explanation}</p><p className="mt-3 text-xs text-gray-400">累计答错 {item.wrongCount} 次</p></div><Link to={`/cambridge/grammar/${item.unitNum}?mode=${item.type}`} className="shrink-0 rounded-xl bg-[#064e3b] px-5 py-3 text-center text-sm font-extrabold text-white">重新练习 →</Link></div></article>)}</div>
        )}
      </main>
    </CambridgeLayout>
  )
}
