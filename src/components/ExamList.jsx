import { Link } from 'react-router-dom'
import Icon from './Icons.jsx'

/* 列表页共用：页头 + CET-4/6 分段切换 + 按考试月份分组的套题列表 */

export function LevelSwitch({ isCet6, onChange, prominent = false }) {
  return (
    <div
      className={'inline-flex p-0.5 rounded-lg ' + (prominent ? 'bg-gray-200/80 p-1' : 'bg-gray-200/70')}
      role="tablist"
      aria-label="考试级别"
    >
      {[{ code: 'cet4', label: 'CET-4' }, { code: 'cet6', label: 'CET-6' }].map((e) => {
        const active = (e.code === 'cet6') === isCet6
        return (
          <button
            key={e.code}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(e.code)}
            className={
              (prominent ? 'px-5 py-2 rounded-md text-base font-bold transition-colors ' : 'px-4 py-1.5 rounded-md text-sm font-bold transition-colors ') +
              (active
                ? prominent
                  ? 'bg-[var(--accent-deep)] text-white shadow-sm'
                  : 'bg-white text-[var(--accent)] shadow-sm'
                : 'text-gray-500 hover:text-gray-800')
            }
          >
            {e.label}
          </button>
        )
      })}
    </div>
  )
}

export function ListHeader({ title, subtitle, isCet6, onLevelChange, extra }) {
  return (
    <header className="mb-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-4">
        <Icon name="arrow" className="w-3.5 h-3.5 rotate-180" />
        返回首页
      </Link>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="text-2xl sm:text-[1.65rem] font-extrabold tracking-tight text-gray-900">{title}</h1>
        <LevelSwitch isCet6={isCet6} onChange={onLevelChange} />
      </div>
      {subtitle && <p className="text-base text-gray-600 mt-2 leading-relaxed">{subtitle}</p>}
      {extra}
    </header>
  )
}

/* items: [{ id, year, month, set, to, verified, state?: 'done' | 'started' }]，保持传入顺序分组 */
export function SetGroups({ items }) {
  const groups = []
  for (const it of items) {
    const key = `${it.year}年${it.month}月`
    let g = groups[groups.length - 1]
    if (!g || g.key !== key) {
      g = { key, rows: [] }
      groups.push(g)
    }
    g.rows.push(it)
  }

  return (
    <div className="space-y-7">
      {groups.map((g) => (
        <section key={g.key}>
          <div className="flex items-baseline gap-2 mb-2.5 px-1">
            <h2 className="text-[17px] font-extrabold text-gray-900">{g.key}</h2>
            <span className="text-sm text-gray-400">{g.rows.length} 套</span>
          </div>
          <ul className="rounded-xl bg-white border border-[#e3e8e2] divide-y divide-[#eef1ed] overflow-hidden">
            {g.rows.map((it) => (
              <li key={it.id}>
                <SetRow item={it} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

function Status({ item }) {
  if (item.state === 'done') {
    return <span className="text-sm font-bold text-[var(--accent)] bg-[var(--accent-soft)] px-2 py-0.5 rounded-md">已完成</span>
  }
  if (item.state === 'started') {
    return <span className="text-sm font-bold text-[var(--accent-deep)] bg-[var(--hl-soft)] px-2 py-0.5 rounded-md">进行中</span>
  }
  return null
}

function SetRow({ item }) {
  const label = `第${item.set}套`
  if (!item.verified) {
    return (
      <div className="flex items-center justify-between px-5 py-4 text-gray-400 cursor-default">
        <span className="font-bold">{label}</span>
        <span className="text-xs">{item.pendingText || '整理中'}</span>
      </div>
    )
  }
  return (
    <Link
      to={item.to}
      className="group flex items-center justify-between gap-3 px-5 py-4 hover:bg-[var(--accent-softer)] transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-bold text-[17px] text-gray-900">{label}</span>
        {item.title && <span className="text-sm text-gray-500 truncate">{item.title}</span>}
        <Status item={item} />
      </div>
      <div className="flex items-center gap-3 shrink-0">
        {item.actionText && <span className="hidden sm:inline text-sm font-bold text-[var(--accent)]">{item.actionText}</span>}
        <Icon name="arrow" className="w-4 h-4 text-gray-300 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  )
}
