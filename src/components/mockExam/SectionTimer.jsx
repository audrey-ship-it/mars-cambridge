// 模考计时器：仅展示剩余时间 + 暂停/继续按钮（倒计时逻辑在父组件）
// seconds: 剩余秒数；running: 是否正在倒计时；onTogglePause: 切换暂停/继续

export default function SectionTimer({ seconds, running, onTogglePause, notStarted }) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  const isLow = seconds <= 300 // 最后 5 分钟变红

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => { if (!running) onTogglePause() }}
        title={running ? '' : '点击开始计时'}
        className={
          'flex items-center gap-2.5 rounded-2xl border px-3 py-1.5 transition hover:brightness-95 ' +
          (isLow ? 'bg-red-50 border-red-200' : 'bg-[var(--hl-soft)] border-[var(--accent-border)]')
        }
      >
        <svg viewBox="0 0 40 40" width="34" height="34" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="22" cy="23" r="14" fill={isLow ? '#fca5a5' : 'var(--hl, #ffcd1f)'} />
          <circle cx="19" cy="20" r="14" fill="#fff" stroke={isLow ? '#b91c1c' : '#1b1c44'} strokeWidth="2.4" />
          <path d="M19 11.5V20l5.5 3.5" stroke={isLow ? '#b91c1c' : '#1b1c44'} strokeWidth="2.4" />
          <path d="M14 4.5h10" stroke={isLow ? '#b91c1c' : '#1b1c44'} strokeWidth="2.4" />
        </svg>
        <span className={'text-2xl font-extrabold tabular-nums leading-none ' + (isLow ? 'text-red-600' : 'text-gray-900')}>
          {mm}:{ss}
        </span>
        {!running && (
          <span className="text-xs font-bold text-gray-600 whitespace-nowrap">{notStarted ? '▶ 点击开始' : '已暂停'}</span>
        )}
      </button>
      {running && (
        <button
          onClick={onTogglePause}
          className="rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-500 hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
        >
          ⏸ 暂停
        </button>
      )}
    </div>
  )
}
