import { useEffect, useRef, useState } from 'react'
import { LOG_EVENT, KIND_LABEL, fmtDuration, loadLog, streakDays } from '../utils/practiceLog.js'
import { examVars } from '../utils/examTheme.js'

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
            onClick={() => saveImage(entry, streak)}
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

/* 用 Canvas 直接画分享图（不依赖第三方库） */
function drawShareCanvas(entry, streak) {
  const W = 750
  const H = 900
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const g = c.getContext('2d')
  const navy = '#1b1c44'
  const hl = entry.level === 'cet6' ? '#2dd4bf' : '#ffcd1f'
  const font = '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif'
  const rr = (x, y, w, h, r, fill) => {
    g.beginPath()
    g.roundRect(x, y, w, h, r)
    g.fillStyle = fill
    g.fill()
  }
  g.fillStyle = '#f6f7fb'
  g.fillRect(0, 0, W, H)
  rr(40, 40, W - 80, H - 80, 36, '#ffffff')
  // 头部
  g.save()
  g.beginPath()
  g.roundRect(40, 40, W - 80, 250, [36, 36, 0, 0])
  g.clip()
  g.fillStyle = navy
  g.fillRect(40, 40, W - 80, 250)
  g.fillStyle = hl
  g.fillRect(40, 40, W - 80, 10)
  g.restore()
  g.textBaseline = 'alphabetic'
  g.fillStyle = hl
  g.font = `bold 28px ${font}`
  g.fillText(`Mars CET 四六级 · ${entry.level === 'cet6' ? 'CET-6' : 'CET-4'}`, 80, 120)
  g.fillStyle = '#ffffff'
  g.font = `bold 46px ${font}`
  const kind = KIND_LABEL[entry.kind] || '练习'
  g.fillText(`本次${kind}练习完成`, 80, 195)
  g.fillStyle = 'rgba(255,255,255,.75)'
  g.font = `28px ${font}`
  g.fillText(entry.title || kind, 80, 245)

  const rate = entry.correct != null && entry.answered > 0 ? Math.round((entry.correct / entry.answered) * 100) : null
  const wrong = entry.correct != null ? entry.answered - entry.correct : null
  const cells = [
    [fmtDuration(entry.seconds), '用时'],
    [String(entry.answered), entry.kind === 'writing' || entry.kind === 'translation' ? '篇数' : '做题数'],
    rate != null ? [`${rate}%`, '正确率'] : [String(entry.words ?? '—'), '词数'],
    wrong != null ? [String(wrong), '错题数'] : [`${streak} 天`, '连续打卡'],
  ]
  const cw = (W - 80 - 80 - 24) / 2
  cells.forEach(([v, l], i) => {
    const x = 80 + (i % 2) * (cw + 24)
    const y = 340 + Math.floor(i / 2) * 190
    rr(x, y, cw, 160, 24, 'rgba(27,28,68,.06)')
    g.textAlign = 'center'
    g.fillStyle = navy
    g.font = `bold 60px ${font}`
    g.fillText(v, x + cw / 2, y + 85)
    g.fillStyle = '#6b7280'
    g.font = `26px ${font}`
    g.fillText(l, x + cw / 2, y + 128)
  })
  g.textAlign = 'left'
  if (streak > 0) {
    rr(80, 730, W - 160, 70, 18, hl + '55')
    g.fillStyle = navy
    g.font = `bold 30px ${font}`
    g.textAlign = 'center'
    g.fillText(`已连续打卡 ${streak} 天，继续加油`, W / 2, 775)
    g.textAlign = 'left'
  }
  // 底栏
  g.fillStyle = '#9ca3af'
  g.font = `24px ${font}`
  const d = new Date(entry.ts)
  g.fillText(`${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`, 80, 850)
  g.textAlign = 'right'
  g.fillText('小红书：（账号待补）', W - 80, 850)

  return c
}

function saveImage(entry, streak) {
  const c = drawShareCanvas(entry, streak)
  const d = new Date(entry.ts)
  c.toBlob((blob) => {
    if (!blob) return
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `练习总结-${d.getMonth() + 1}月${d.getDate()}日.png`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 2000)
  }, 'image/png')
}
