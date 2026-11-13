// FCE 风格篇章级音频播放器：大圆 Play 按钮 + 可点击进度条 + 变速按钮组
import { useEffect, useRef, useState } from 'react'

const RATES = [0.75, 1, 1.25, 1.5]

function fmt(s) {
  if (!Number.isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const ss = Math.floor(s % 60)
  return `${m}:${String(ss).padStart(2, '0')}`
}

export default function SectionAudio({ src }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [cur, setCur] = useState(0)
  const [dur, setDur] = useState(0)
  const [rate, setRate] = useState(1)

  useEffect(() => {
    const a = ref.current
    if (!a) return
    const onTime = () => setCur(a.currentTime)
    const onMeta = () => setDur(a.duration)
    const onEnd = () => setPlaying(false)
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('ended', onEnd)
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('ended', onEnd)
    }
  }, [src])

  // 切换 src 由父组件用 key 重挂本组件实现，无需 effect 重置

  function toggle() {
    const a = ref.current
    if (!a) return
    if (playing) {
      a.pause()
      setPlaying(false)
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  function seek(e) {
    const a = ref.current
    if (!a || !dur) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    a.currentTime = ratio * dur
    setCur(a.currentTime)
  }

  function changeRate(r) {
    const a = ref.current
    setRate(r)
    if (a) a.playbackRate = r
  }

  const pct = dur ? (cur / dur) * 100 : 0

  return (
    <div className="flex items-center gap-3 bg-[var(--accent-softer)] rounded-xl px-3 py-2.5">
      <audio ref={ref} src={src} preload="metadata" />
      <button
        onClick={toggle}
        aria-label={playing ? '暂停' : '播放'}
        className="w-9 h-9 shrink-0 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white flex items-center justify-center transition-colors"
      >
        {playing ? (
          <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="0" width="3.5" height="12" rx="1" /><rect x="7.5" y="0" width="3.5" height="12" rx="1" /></svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 12 12" fill="currentColor"><path d="M2.5 1.2c0-.8.9-1.3 1.6-.9l7 4.3c.7.4.7 1.4 0 1.8l-7 4.3c-.7.4-1.6-.1-1.6-.9V1.2z" /></svg>
        )}
      </button>

      <div
        onClick={seek}
        className="flex-1 h-2 bg-[var(--accent-soft)] rounded-full cursor-pointer relative overflow-hidden"
        role="slider"
        aria-label="进度"
        aria-valuenow={Math.round(pct)}
      >
        <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${pct}%` }} />
      </div>

      <span className="text-xs text-gray-500 tabular-nums shrink-0 w-16 text-center">
        {fmt(cur)}/{fmt(dur)}
      </span>

      <div className="flex items-center gap-1 shrink-0">
        {RATES.map((r) => (
          <button
            key={r}
            onClick={() => changeRate(r)}
            className={
              'px-1.5 py-0.5 rounded text-[11px] font-bold transition-colors ' +
              (rate === r ? 'bg-[var(--accent)] text-white' : 'text-gray-400 hover:text-[var(--accent)]')
            }
          >
            {r}x
          </button>
        ))}
      </div>
    </div>
  )
}
