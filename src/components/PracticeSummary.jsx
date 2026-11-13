import { useEffect, useRef, useState } from 'react'
import { LOG_EVENT, KIND_LABEL, fmtDuration, loadLog, streakDays } from '../utils/practiceLog.js'
import { examVars } from '../utils/examTheme.js'
import { saveShareImage } from '../utils/shareImage.js'
import { loadPlan, planLine } from '../utils/examPlan.js'

const TOAST_MS = 6000

function brief(e) {
  if (e.correct != null) return `本次 ${e.answered} 题 · 对 ${e.correct} 题 · 用时 ${fmtDuration(e.seconds)}`
  const w = e.words != null ? `${e.words} 词 · ` : ''
  return `本次${KIND_LABEL[e.kind] || '练习'} · ${w}用时 ${fmtDuration(e.seconds)}`
}

/* 全局：练习结束离开时在底部给一条小提示，不弹窗，几秒后自己收起；点「看总结」打开本次总结 */
export default function PracticeSummary() {
  const [entry, setEntry] = useState(null)
  const [open, setOpen] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const onLog = (ev) => {
      setEntry(ev.detail)
      setOpen(false)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setEntry(null), TOAST_MS)
    }
    window.addEventListener(LOG_EVENT, onLog)
    return () => {
      window.removeEventListener(LOG_EVENT, onLog)
      clearTimeout(timer.current)
    }
  }, [])

  if (!entry) return null
  const close = () => {
    clearTimeout(timer.current)
    setEntry(null)
    setOpen(false)
  }
  const level = entry.level === 'cet6' ? 'cet6' : 'cet4'

  return (
    <div style={examVars(level)}>
      {!open && (
        <div
          role="status"
          className="fixed z-50 left-3 right-3 bottom-3 md:left-[248px] md:right-6 mx-auto max-w-xl overflow-hidden rounded-xl bg-[var(--accent-deep)] text-white shadow-xl px-4 py-3 flex items-center gap-3 text-sm"
        >
          <span className="flex-1">{brief(entry)}</span>
          <button
            type="button"
            onClick={() => {
              clearTimeout(timer.current)
              setOpen(true)
            }}
            className="shrink-0 rounded-lg bg-[var(--hl)] px-3 py-1.5 text-xs font-bold text-[var(--accent-deep)]"
          >
            看总结
          </button>
          <button type="button" onClick={close} aria-label="关闭" className="shrink-0 text-white/60 hover:text-white text-lg leading-none">×</button>
          <span
            className="absolute left-0 bottom-0 h-[3px] bg-[var(--hl)]"
            style={{ animation: `practiceToastBar ${TOAST_MS}ms linear forwards` }}
          />
          <style>{'@keyframes practiceToastBar{from{width:100%}to{width:0}}'}</style>
        </div>
      )}
      {open && <SummaryModal entry={entry} onClose={close} />}
    </div>
  )
}

function SummaryModal({ entry, onClose }) {
  const streak = streakDays(loadLog())
  const rate = entry.correct != null && entry.answered > 0 ? Math.round((entry.correct / entry.answered) * 100) : null
  const wrong = entry.correct != null ? entry.answered - entry.correct : null
  const kind = KIND_LABEL[entry.kind] || '练习'
  const cards = [
    { v: fmtDuration(entry.seconds), l: '用时' },
    { v: entry.answered, l: entry.kind === 'writing' || entry.kind === 'translation' ? '篇数' : '做题数' },
    rate != null ? { v: `${rate}%`, l: '正确率' } : { v: entry.words ?? '—', l: '词数' },
    wrong != null ? { v: wrong, l: '错题数' } : { v: `${streak} 天`, l: '连续打卡' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl bg-white border-t-[6px] border-t-[var(--hl)] shadow-2xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-[var(--hl)] px-2 py-0.5 text-xs font-bold text-[var(--accent-deep)]">本次总结</span>
          <span className="text-sm text-gray-500 truncate">{kind}{entry.title ? ` · ${entry.title}` : ''}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {cards.map((c) => (
            <div key={c.l} className="rounded-xl bg-[var(--accent-soft)] py-3 text-center">
              <div className="text-xl font-extrabold text-[var(--accent-deep)]">{c.v}</div>
              <div className="text-[11px] text-gray-500">{c.l}</div>
            </div>
          ))}
        </div>
        {streak > 0 && <p className="mt-3 text-xs text-gray-500">已连续打卡 {streak} 天</p>}
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={() => saveShareImage(entry, streak, planLine(loadPlan()))}
            className="flex-1 rounded-xl bg-[var(--accent-deep)] py-2.5 text-sm font-bold text-white hover:bg-[var(--accent-hover)]"
          >
            保存图片
          </button>
          <button type="button" onClick={onClose} className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600">
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}
