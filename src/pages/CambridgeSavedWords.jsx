import { useEffect, useMemo, useState } from 'react'
import { CambridgeLayout } from './CambridgeApp'
import { readSavedWords, removeSavedWord, SAVED_WORDS_EVENT, updateSavedWord } from '../utils/savedWords'

export default function CambridgeSavedWords() {
  const [level, setLevel] = useState('KET')
  const [words, setWords] = useState(readSavedWords)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [printMode, setPrintMode] = useState(null)

  useEffect(() => {
    const refresh = event => setWords(event.detail || readSavedWords())
    window.addEventListener(SAVED_WORDS_EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => { window.removeEventListener(SAVED_WORDS_EVENT, refresh); window.removeEventListener('storage', refresh) }
  }, [])

  const filtered = useMemo(() => words.filter(item => {
    const matchesFilter = filter === 'all' || item.status === filter
    const term = query.trim().toLowerCase()
    return matchesFilter && (!term || item.word.toLowerCase().includes(term) || item.chinese.includes(term))
  }), [words, query, filter])

  function print(version) {
    setPrintMode(version)
    window.setTimeout(() => window.print(), 80)
  }

  return (
    <CambridgeLayout activeModule="words" level={level} setLevel={setLevel}>
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-9">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div><div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">MY WORD BANK</div><h1 className="mt-1 text-4xl font-extrabold tracking-tight text-gray-950">我的生词库</h1><p className="mt-2 text-sm text-gray-500">在学习页面选中英文单词，查看中文翻译并加入这里。</p></div>
          <div className="flex flex-wrap gap-2" data-no-word-select>
            <button onClick={() => print('bilingual')} disabled={!words.length} className="rounded-xl border border-emerald-300 bg-white px-4 py-2.5 text-sm font-extrabold text-emerald-800 disabled:opacity-40">打印中英文版</button>
            <button onClick={() => print('dictation')} disabled={!words.length} className="rounded-xl bg-[#f4c95d] px-4 py-2.5 text-sm font-extrabold text-[#574100] disabled:opacity-40">打印默写版</button>
          </div>
        </div>

        <div className="mt-7 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" data-no-word-select>
            <div className="flex gap-2">{[['all','全部'],['learning','学习中'],['mastered','已掌握']].map(([id,label]) => <button key={id} onClick={() => setFilter(id)} className={`rounded-xl px-3.5 py-2 text-xs font-extrabold ${filter === id ? 'bg-[#086348] text-white' : 'bg-gray-100 text-gray-500'}`}>{label}</button>)}</div>
            <div className="flex items-center gap-3"><span className="text-xs font-bold text-gray-400">共 {words.length} 个生词</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="搜索单词或中文" className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-emerald-400 sm:w-56" /></div>
          </div>

          {!filtered.length ? <div className="py-20 text-center"><div className="text-5xl">📖</div><h2 className="mt-4 text-lg font-extrabold text-gray-800">{words.length ? '没有符合条件的生词' : '生词库还是空的'}</h2><p className="mt-2 text-sm text-gray-400">在阅读、听力题目或其他学习页面中选中英文单词即可添加。</p></div> : <div className="mt-5 grid gap-3 md:grid-cols-2">
            {filtered.map(item => <article key={item.lemma} className="rounded-2xl border border-gray-200 p-4 transition hover:border-emerald-300">
              <div className="flex items-start justify-between gap-3"><div><div className="flex items-baseline gap-2"><h2 className="text-xl font-extrabold text-gray-950">{item.lemma}</h2>{item.part && <span className="text-[10px] font-bold uppercase text-gray-400">{item.part}</span>}</div><p className="mt-1 font-semibold text-emerald-800">{item.chinese}</p></div><button data-no-word-select onClick={() => removeSavedWord(item.lemma)} className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-bold text-gray-500 hover:bg-rose-50 hover:text-rose-600">移除</button></div>
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3"><span className="text-[11px] text-gray-400">来自：{item.source}</span><button data-no-word-select onClick={() => updateSavedWord(item.lemma, { status: item.status === 'mastered' ? 'learning' : 'mastered' })} className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${item.status === 'mastered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-50 text-amber-700'}`}>{item.status === 'mastered' ? '✓ 已掌握' : '标记已掌握'}</button></div>
            </article>)}
          </div>}
        </div>
      </div>

      <section className="saved-word-print-sheet" aria-hidden="true">
        <h1>我的生词库 · {printMode === 'dictation' ? '默写版' : '中英文版'}</h1>
        <p>姓名：________________ / 日期：________________</p>
        <table><thead><tr><th>序号</th><th>{printMode === 'dictation' ? '英文默写' : 'English'}</th><th>中文</th></tr></thead><tbody>{words.map((item,index) => <tr key={item.lemma}><td>{index + 1}</td><td>{printMode === 'dictation' ? '________________________' : item.lemma}</td><td>{item.chinese}</td></tr>)}</tbody></table>
      </section>
    </CambridgeLayout>
  )
}
