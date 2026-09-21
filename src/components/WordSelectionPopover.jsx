import { useEffect, useRef, useState } from 'react'
import { findWordMeaning, isWordSaved, removeSavedWord, saveWord } from '../utils/savedWords'

export default function WordSelectionPopover({ source = '学习页面' }) {
  const [popup, setPopup] = useState(null)
  const [saved, setSaved] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    function inspectSelection() {
      window.setTimeout(() => {
        const selection = window.getSelection()
        if (!selection || selection.isCollapsed) return
        const node = selection.anchorNode?.parentElement
        if (!node || node.closest('input, textarea, button, [contenteditable="true"], [data-no-word-select]')) return
        const entry = findWordMeaning(selection.toString())
        if (!entry) return
        const rect = selection.getRangeAt(0).getBoundingClientRect()
        const width = 320
        const left = Math.min(Math.max(12, rect.left + rect.width / 2 - width / 2), window.innerWidth - width - 12)
        const top = Math.min(window.innerHeight - 190, Math.max(12, rect.bottom + 10))
        setSaved(isWordSaved(entry.lemma))
        setPopup({ entry, left, top })
      }, 0)
    }
    function close(event) {
      if (!rootRef.current?.contains(event.target)) setPopup(null)
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
  return (
    <div ref={rootRef} data-no-word-select style={{ left, top }} className="fixed z-[100] w-80 rounded-2xl border border-emerald-200 bg-white p-4 shadow-2xl shadow-emerald-950/15">
      <div className="flex items-start justify-between gap-3">
        <div><div className="text-xl font-extrabold text-gray-950">{entry.word}</div>{entry.part && <div className="mt-0.5 text-xs font-semibold uppercase text-gray-400">{entry.part}</div>}</div>
        <button onClick={() => setPopup(null)} className="grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-gray-500" aria-label="关闭">×</button>
      </div>
      <div className="mt-3 rounded-xl bg-emerald-50 px-3.5 py-3">
        <div className="text-[10px] font-extrabold tracking-widest text-emerald-700">中文翻译</div>
        <div className="mt-1 text-base font-bold text-gray-800">{entry.chinese || '词库暂未收录该词'}</div>
      </div>
      <button disabled={!entry.chinese} onClick={() => {
        if (saved) removeSavedWord(entry.lemma)
        else saveWord(entry, source)
        setSaved(!saved)
      }} className={`mt-3 w-full rounded-xl py-2.5 text-sm font-extrabold transition ${!entry.chinese ? 'cursor-not-allowed bg-gray-100 text-gray-400' : saved ? 'border border-emerald-300 bg-white text-emerald-800' : 'bg-[#086348] text-white hover:bg-[#064e3b]'}`}>
        {!entry.chinese ? '暂不可加入' : saved ? '✓ 已加入 · 点击移除' : '+ 加入我的生词库'}
      </button>
    </div>
  )
}
