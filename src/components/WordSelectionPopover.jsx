import { useEffect, useRef, useState } from 'react'
import { findWordMeaning, isWordSaved, removeSavedWord, saveWord } from '../utils/savedWords'

const WORD_CHARACTER = /[A-Za-z'-]/

function blocksWordSelection(node) {
  if (!node?.closest) return true
  if (node.closest('input, textarea, [contenteditable="true"], [data-no-word-select]')) return true
  return Boolean(node.closest('button') && !node.closest('[data-word-select]'))
}

function expandToWholeWord(range) {
  if (!range || range.startContainer !== range.endContainer || range.startContainer.nodeType !== Node.TEXT_NODE) return range
  const text = range.startContainer.textContent || ''
  let start = range.startOffset
  let end = range.endOffset
  const selected = text.slice(start, end)
  if (selected && /\s/.test(selected)) return range

  if (start === end && !WORD_CHARACTER.test(text[start] || '')) {
    if (start > 0 && WORD_CHARACTER.test(text[start - 1])) start -= 1
    else return null
    end = start + 1
  }
  while (start > 0 && WORD_CHARACTER.test(text[start - 1])) start -= 1
  while (end < text.length && WORD_CHARACTER.test(text[end])) end += 1
  if (start === end) return null

  const expanded = document.createRange()
  expanded.setStart(range.startContainer, start)
  expanded.setEnd(range.endContainer, end)
  return expanded
}

export default function WordSelectionPopover({ source = '学习页面' }) {
  const [popup, setPopup] = useState(null)
  const [savedKeys, setSavedKeys] = useState(() => new Set())
  const rootRef = useRef(null)
  const suppressSelectionUntil = useRef(0)

  function dismiss() {
    suppressSelectionUntil.current = Date.now() + 250
    window.getSelection()?.removeAllRanges()
    setPopup(null)
  }

  useEffect(() => {
    function inspectSelection(event) {
      const eventTarget = event.target
      window.setTimeout(() => {
        if (Date.now() < suppressSelectionUntil.current) return
        if (blocksWordSelection(eventTarget)) return
        const selection = window.getSelection()
        if (!selection || selection.isCollapsed) return
        let range = selection.getRangeAt(0).cloneRange()
        range = expandToWholeWord(range)
        if (!range) return
        const node = range.commonAncestorContainer.nodeType === Node.TEXT_NODE ? range.commonAncestorContainer.parentElement : range.commonAncestorContainer
        if (!node || blocksWordSelection(node)) return
        const entry = findWordMeaning(range.toString())
        if (!entry) return
        const rect = range.getBoundingClientRect()
        const width = entry.tokens?.length ? 384 : 320
        const left = Math.min(Math.max(12, rect.left + rect.width / 2 - width / 2), window.innerWidth - width - 12)
        const top = Math.min(window.innerHeight - (entry.tokens?.length ? 390 : 190), Math.max(12, rect.bottom + 10))
        setSavedKeys(new Set([entry, ...(entry.tokens || [])].filter(item => isWordSaved(item.lemma)).map(item => item.lemma.toLowerCase())))
        setPopup({ entry, left, top })
        selection?.removeAllRanges()
      }, 0)
    }
    function close(event) {
      if (!rootRef.current?.contains(event.target)) {
        window.getSelection()?.removeAllRanges()
        setPopup(null)
      }
    }
    document.addEventListener('mouseup', inspectSelection)
    document.addEventListener('touchend', inspectSelection)
    document.addEventListener('mousedown', close)
    return () => {
      document.removeEventListener('mouseup', inspectSelection)
      document.removeEventListener('touchend', inspectSelection)
      document.removeEventListener('mousedown', close)
    }
  }, [])

  if (!popup) return null
  const { entry, left, top } = popup
  const saved = savedKeys.has(entry.lemma.toLowerCase())

  function toggleSaved(item) {
    const key = item.lemma.toLowerCase()
    if (savedKeys.has(key)) removeSavedWord(item.lemma)
    else saveWord(item, source)
    setSavedKeys(current => {
      const next = new Set(current)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div ref={rootRef} data-no-word-select style={{ left, top, width: entry.tokens?.length ? 384 : 320 }} className="fixed z-[100] max-h-[min(520px,calc(100vh-24px))] overflow-y-auto rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl shadow-emerald-950/15">
      <div className="flex items-start justify-between gap-3">
        <div><div className="text-xl font-extrabold text-gray-950">{entry.word}</div>{entry.part && <div className="mt-0.5 text-xs font-semibold uppercase text-gray-400">{entry.part}</div>}</div>
        <button onMouseDown={event => event.preventDefault()} onClick={dismiss} className="grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-gray-500" aria-label="关闭">×</button>
      </div>
      <div className="mt-3 rounded-xl bg-emerald-50 px-3.5 py-3">
        <div className="text-[10px] font-extrabold tracking-widest text-emerald-700">{entry.composed ? '组合释义' : entry.kind === 'sentence' ? '句子重点词' : entry.kind === 'phrase' ? '短语释义' : '中文翻译'}</div>
        <div className="mt-1 text-base font-bold text-gray-800">{entry.chinese || (entry.kind === 'phrase' && entry.tokens?.length ? '暂未收录完整短语，请查看下方单词释义' : entry.tokens?.length ? '可选择下面的重点词加入生词库' : '词库暂未收录该词')}</div>
        {entry.formNote && <div className="mt-2 text-xs font-bold text-emerald-700">原形：{entry.baseForm} · {entry.formNote}</div>}
        {entry.alternative && <div className="mt-1 text-xs leading-relaxed text-gray-500">{entry.alternative}</div>}
      </div>
      {entry.tokens?.length > 0 && <div className="mt-3 space-y-2">
        {entry.tokens.map(token => {
          const tokenSaved = savedKeys.has(token.lemma.toLowerCase())
          return <button key={token.lemma} onClick={() => toggleSaved(token)} className={`flex w-full items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-left transition ${tokenSaved ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'}`}>
            <span><strong className="text-sm text-gray-900">{token.word}</strong><span className="ml-2 text-xs text-gray-500">{token.chinese}</span></span><span className={`shrink-0 text-xs font-extrabold ${tokenSaved ? 'text-emerald-700' : 'text-gray-400'}`}>{tokenSaved ? '✓ 已加入' : '+ 加入'}</span>
          </button>
        })}
      </div>}
      {entry.kind !== 'sentence' && <button disabled={!entry.chinese} onClick={() => toggleSaved(entry)} className={`mt-3 w-full rounded-xl py-2.5 text-sm font-extrabold transition ${!entry.chinese ? 'cursor-not-allowed bg-gray-100 text-gray-400' : saved ? 'border border-emerald-300 bg-white text-emerald-800' : 'bg-[#086348] text-white hover:bg-[#064e3b]'}`}>
        {!entry.chinese ? '请选择上方单词加入' : saved ? `✓ 已加入${entry.kind === 'phrase' ? '短语' : ''} · 点击移除` : `+ 加入${entry.kind === 'phrase' ? '短语' : '我的生词库'}`}
      </button>}
    </div>
  )
}
