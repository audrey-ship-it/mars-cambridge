import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { lookupWord, addToWordBook, inWordBook } from '../utils/wordLookup.js'
import { examVars } from '../utils/examTheme.js'

// 取鼠标位置下的英文单词
function wordAtPoint(x, y) {
  let node, offset
  if (document.caretPositionFromPoint) {
    const p = document.caretPositionFromPoint(x, y)
    if (p) { node = p.offsetNode; offset = p.offset }
  } else if (document.caretRangeFromPoint) {
    const r = document.caretRangeFromPoint(x, y)
    if (r) { node = r.startContainer; offset = r.startOffset }
  }
  if (!node || node.nodeType !== 3) return null
  const text = node.textContent
  const isW = (ch) => /[A-Za-z'’-]/.test(ch || '')
  let s = offset, e = offset
  while (s > 0 && isW(text[s - 1])) s--
  while (e < text.length && isW(text[e])) e++
  const word = text.slice(s, e).replace(/^['’-]+|['’-]+$/g, '').replace(/’/g, "'")
  if (!/[A-Za-z]{2,}/.test(word)) return null
  // 确认鼠标确实落在该词的文字范围内
  const range = document.createRange()
  range.setStart(node, s)
  range.setEnd(node, e)
  const hit = Array.from(range.getClientRects()).some((r) => x >= r.left - 2 && x <= r.right + 2 && y >= r.top - 2 && y <= r.bottom + 2)
  return hit ? word : null
}

// 在内容外包一层：右键 / 双击英文单词弹出释义卡，可加入生词本
export default function WordLookup({ isCet6, children, className }) {
  const [card, setCard] = useState(null) // { x, y, res }
  const [added, setAdded] = useState(false)
  const ref = useRef(null)

  const open = (e, word) => {
    const res = lookupWord(word, isCet6)
    if (!res) return
    const head = res.entry ? res.entry.w : res.word
    setAdded(inWordBook(head, isCet6))
    setCard({ x: Math.min(e.clientX, window.innerWidth - 300), y: Math.min(e.clientY + 14, window.innerHeight - 190), res, head })
  }

  const skip = (t) => t.closest && t.closest('select,button,input,textarea,label,a')

  const onContextMenu = (e) => {
    if (skip(e.target)) return
    const w = wordAtPoint(e.clientX, e.clientY)
    if (!w) return
    e.preventDefault()
    open(e, w)
  }
  const onDoubleClick = (e) => {
    if (skip(e.target)) return
    const w = wordAtPoint(e.clientX, e.clientY)
    if (w) open(e, w)
  }

  useEffect(() => {
    if (!card) return undefined
    const close = () => setCard(null)
    const onKey = (e) => e.key === 'Escape' && close()
    const onDown = (e) => { if (!e.target.closest?.('[data-word-card]')) close() }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    window.addEventListener('scroll', close, true)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
      window.removeEventListener('scroll', close, true)
    }
  }, [card])

  return (
    <div ref={ref} className={className} onContextMenu={onContextMenu} onDoubleClick={onDoubleClick}>
      {children}
      {card &&
        createPortal(
          <div
            data-word-card
            style={{ ...examVars(isCet6 ? 'cet6' : 'cet4'), position: 'fixed', left: card.x, top: card.y, width: 280, zIndex: 80 }}
            className="rounded-2xl bg-white border border-gray-200 shadow-xl p-4"
          >
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-xl font-extrabold text-gray-900">{card.res.entry ? card.res.entry.w : card.res.word}</span>
              {card.res.entry?.ipa && <span className="text-sm text-gray-500">{card.res.entry.ipa}</span>}
            </div>
            <p className={'mt-1.5 text-[15px] leading-relaxed ' + (card.res.entry ? 'text-gray-700' : 'text-gray-400')}>
              {card.res.entry ? card.res.entry.zh : '暂无释义'}
            </p>
            <button
              type="button"
              disabled={added}
              onClick={() => { addToWordBook(card.head, isCet6); setAdded(true) }}
              className={
                'mt-3 w-full rounded-xl py-2 text-sm font-bold ' +
                (added ? 'bg-[var(--hl-soft)] text-[var(--accent-deep)] cursor-default' : 'bg-[var(--accent-deep)] text-white hover:bg-[var(--accent-hover)]')
              }
            >
              {added ? '已加入生词本 ✓' : '加入生词本'}
            </button>
            <p className="mt-2 text-[11px] text-gray-400">可在 单词 →「生词 · 错词复习」里拼写复习</p>
          </div>,
          document.body,
        )}
    </div>
  )
}
