// 模考计时器：仅展示剩余时间 + 暂停/继续按钮（倒计时逻辑在父组件）
// seconds: 剩余秒数；running: 是否正在倒计时；onTogglePause: 切换暂停/继续

export default function SectionTimer({ seconds, running, onTogglePause }) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  const isLow = seconds <= 300 // 最后 5 分钟变红

  return (
    <div className="flex items-center gap-2">
      <span
        className={
          'text-lg font-bold tabular-nums ' + (isLow ? 'text-red-600' : 'text-gray-800')
        }
      >
        {mm}:{ss}
      </span>
      <button
        onClick={onTogglePause}
        className="rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-500 hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
      >
        {running ? '⏸ 暂停' : '▶ 继续'}
      </button>
    </div>
  )
}
