import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { resolveExamLevel, setExamLevel, withExamParam } from '../utils/examLevel.js'
import { examVars } from '../utils/examTheme.js'
import { fmtDuration, loadLog, streakDays, dayOf } from '../utils/practiceLog.js'
import { sum, entriesOnDay, lastNDays, kindRates, weakest, daysOfMonth, totals } from '../utils/practiceStats.js'
import { clearPlan, daysLeft, loadPlan, planLine, savePlan, upcomingSessions } from '../utils/examPlan.js'
import { saveShareImage } from '../utils/shareImage.js'

const KIND_PATH = { reading: '/reading', listening: '/listening', grammar: '/grammar', mock: '/mock', translation: '/translation', writing: '/writing' }

export default function Me() {
  const [searchParams, setSearchParams] = useSearchParams()
  const level = resolveExamLevel(searchParams)
  const [plan, setPlan] = useState(() => loadPlan())
  const [dlg, setDlg] = useState(() => loadPlan() == null) // 首次进入且未设置/未跳过：弹选择框
  const [showWeek, setShowWeek] = useState(false)
  const log = useMemo(() => loadLog(), [])
  const now = new Date()
  const today = dayOf(now.getTime())
  const todayEntries = entriesOnDay(log, today)
  const t = sum(todayEntries)
  const streak = streakDays(log)
  const week = lastNDays(log, 7)
  const weekEntries = log.filter((e) => e.day >= week[0].day)
  const w = sum(weekEntries)
  const rates = kindRates(log, 30)
  const weak = weakest(rates)
  const all = totals(log)
  const maxBar = Math.max(1, ...week.map((x) => x.answered))
  const cal = daysOfMonth(log, now.getFullYear(), now.getMonth() + 1)
  const n = daysLeft(plan)
  const hasPlan = plan && plan.date && n != null && n >= 0
  const expired = plan && plan.date && n != null && n < 0

  const choose = (p) => {
    savePlan(p)
    setPlan(p)
    setDlg(false)
    if (p.level) {
      setExamLevel(p.level)
      setSearchParams({ exam: p.level })
    }
  }
  const skip = () => {
    savePlan({ skipped: true })
    setPlan({ skipped: true })
    setDlg(false)
  }
  const saveToday = () => {
    const judged = t.judged > 0
    saveShareImage(
      {
        ts: now.getTime(),
        level,
        kind: 'reading',
        heading: '今日学习累计',
        title: `今天练了 ${t.sessions} 次`,
        answered: t.answered,
        correct: judged ? t.correct : null,
        words: null,
        seconds: t.seconds,
      },
      streak,
      planLine(plan),
    )
  }

  const card = 'rounded-2xl bg-white border border-gray-200 border-t-[6px] border-t-[var(--hl)] p-5'

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-8" style={examVars(level)}>
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-2xl font-extrabold text-gray-900">我的学习</h1>
          <p className="text-xs text-gray-500 mt-1">学习记录保存在本机浏览器；换设备或清缓存会丢失。</p>
        </div>
        {hasPlan ? (
          <div className="flex items-center gap-3 rounded-2xl bg-[var(--accent-deep)] text-white px-4 py-3 flex-1 min-w-[240px]">
            <div className="text-xs text-white/70">
              距 {plan.date.slice(5, 7).replace(/^0/, '')} 月{plan.level === 'cet6' ? '六级' : '四级'}考试{plan.estimated ? '（预计 ' : '（'}
              {Number(plan.date.slice(5, 7))}月{Number(plan.date.slice(8))}日）还有
              <div><b className="text-3xl text-[var(--hl)] leading-none">{n}</b> <span className="text-sm">天</span></div>
            </div>
            <button type="button" onClick={() => setDlg(true)} className="ml-auto text-xs text-white/80 underline">修改</button>
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-2xl bg-white border border-dashed border-gray-300 px-4 py-3 flex-1 min-w-[240px]">
            <div>
              <div className="font-bold text-[var(--accent-deep)] text-sm">{expired ? '这次考试已结束' : '设置考试时间'}</div>
              <div className="text-xs text-gray-500">{expired ? '要设置下一次考试吗？' : '显示倒计时，安排每日练习量'}</div>
            </div>
            <button type="button" onClick={() => setDlg(true)} className="ml-auto rounded-lg bg-[var(--accent-deep)] px-3 py-1.5 text-xs font-bold text-white">
              {expired ? '重新设置' : '去设置'}
            </button>
          </div>
        )}
      </div>

      <div className={card + ' mb-4'}>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="rounded-md bg-[var(--hl)] px-2 py-0.5 text-xs font-bold text-[var(--accent-deep)]">今日累计</span>
          <span className="text-xs text-gray-500">{now.getMonth() + 1}月{now.getDate()}日 · 练了 {t.sessions} 次</span>
          {streak > 0 && <span className="text-xs text-gray-500">· 连续打卡 {streak} 天</span>}
          <button
            type="button"
            disabled={t.sessions === 0}
            onClick={saveToday}
            className="ml-auto rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-600 disabled:opacity-40"
          >
            保存图片
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
          {[
            [fmtDuration(t.seconds), '净学习时长'],
            [t.answered, '做题数'],
            [t.rate != null ? `${t.rate}%` : '—', '正确率'],
            [t.judged ? t.wrong : '—', '错题数'],
          ].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-[var(--accent-soft)] py-3 text-center">
              <div className="text-xl font-extrabold text-[var(--accent-deep)]">{v}</div>
              <div className="text-[11px] text-gray-500">{l}</div>
            </div>
          ))}
        </div>
        {t.sessions === 0 && <p className="mt-3 text-sm text-gray-500">今天还没有练习记录，去做几道题吧。</p>}
        {weak && (
          <div className="mt-3 rounded-lg bg-[var(--hl-soft)] px-3 py-2 text-sm text-[var(--accent-deep)]">
            近 30 天「{weak.label}」正确率最低（{weak.rate}%），建议先去复习{' '}
            <Link to={withExamParam(KIND_PATH[weak.kind] || '/')} className="font-bold underline">去练习 →</Link>
          </div>
        )}
        <div className="flex gap-2 mt-3 flex-wrap">
          <Link to={withExamParam('/mock/wrong')} className="rounded-xl bg-[var(--accent-deep)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--accent-hover)]">错题重做</Link>
          <button type="button" onClick={() => setShowWeek((v) => !v)} className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-600">
            {showWeek ? '收起本周总结' : '查看本周总结'}
          </button>
        </div>
        {showWeek && (
          <div className="mt-4 rounded-xl border border-gray-200 p-4 text-sm text-gray-700">
            <div className="font-bold text-gray-900 mb-1">近 7 天总结</div>
            练习 {w.sessions} 次 · 学习 {fmtDuration(w.seconds)} · 做题 {w.answered} 道
            {w.rate != null && <> · 正确率 {w.rate}%</>}
            {w.sessions === 0 && <div className="text-gray-400 mt-1">本周还没有练习记录。</div>}
            {rates.length > 0 && (
              <ul className="mt-2 text-xs text-gray-500 space-y-0.5">
                {rates.map((r) => <li key={r.kind}>{r.label}：{r.answered} 题，正确率 {r.rate}%</li>)}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <div className={card}>
          <div className="text-sm font-bold text-gray-900">近 7 天做题数</div>
          <div className="flex items-end gap-2 h-24 mt-4 mb-6">
            {week.map((x) => (
              <div key={x.day} className="flex-1 relative rounded-t" style={{ height: `${Math.max(4, (x.answered / maxBar) * 100)}%`, background: x.isToday ? 'var(--accent-deep)' : 'var(--hl)' }}>
                <span className="absolute -bottom-5 inset-x-0 text-center text-[10px] text-gray-400">{x.label}</span>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500">累计学习 {all.days} 天 · 总时长 {fmtDuration(all.seconds)} · 共 {all.answered} 题</div>
        </div>
        <div className={card}>
          <div className="text-sm font-bold text-gray-900">各题型正确率（近 30 天）</div>
          {rates.length === 0 && <p className="mt-3 text-sm text-gray-400">做几道阅读、听力或语法题后，这里会显示各题型的正确率。</p>}
          {rates.map((r) => (
            <div key={r.kind} className="flex items-center gap-2 mt-3 text-sm">
              <span className="w-12 shrink-0">{r.label}</span>
              <span className="flex-1 h-2 rounded bg-gray-100 overflow-hidden">
                <span className="block h-full" style={{ width: `${r.rate}%`, background: weak && weak.kind === r.kind ? '#ef4444' : 'var(--accent)' }} />
              </span>
              <span className="w-10 text-right font-bold">{r.rate}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <div className="flex items-center">
          <div className="text-sm font-bold text-gray-900">学习日历 · {now.getMonth() + 1}月</div>
          <div className="ml-auto text-xs text-gray-500">连续打卡 {streak} 天</div>
        </div>
        <div className="grid grid-cols-7 gap-1.5 mt-3 text-[11px] text-center">
          {cal.map((c) => (
            <span
              key={c.d}
              className={'aspect-square rounded-md flex items-center justify-center ' + (c.d === now.getDate() ? 'bg-[var(--accent-deep)] text-white' : c.on ? 'bg-[var(--hl)] text-[var(--accent-deep)] font-bold' : 'bg-gray-100 text-gray-400')}
            >
              {c.d}
            </span>
          ))}
        </div>
      </div>

      {dlg && <ExamPlanDialog level={level} plan={plan} onSave={choose} onSkip={skip} onClear={() => { clearPlan(); setPlan(null); setDlg(false) }} onClose={() => setDlg(false)} />}
    </div>
  )
}

function ExamPlanDialog({ level, plan, onSave, onSkip, onClear, onClose }) {
  const sessions = useMemo(() => upcomingSessions(2), [])
  const [lv, setLv] = useState(plan?.level || level)
  const [pick, setPick] = useState(plan?.date ? 'custom' : 0)
  const [date, setDate] = useState(plan?.date || sessions[0]?.date || '')
  const [estimated, setEstimated] = useState(plan?.date ? !!plan.estimated : true)

  const pickSession = (i) => {
    setPick(i)
    setDate(sessions[i].date)
    setEstimated(true)
  }
  const chip = (on) => 'rounded-xl border px-4 py-2 text-sm cursor-pointer ' + (on ? 'bg-[var(--accent-deep)] text-white border-[var(--accent-deep)]' : 'bg-white border-gray-200 text-gray-700')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={onClose}>
      <div className="w-full max-w-sm rounded-2xl bg-white border-t-[6px] border-t-[var(--hl)] p-5 shadow-2xl" style={examVars(lv)} onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-extrabold text-gray-900">你准备哪次考试？</h3>
        <p className="text-sm text-gray-500 mt-1">选好后会显示倒计时，也可以先跳过，之后在「我的」页再设置。</p>
        <div className="text-sm font-bold mt-4 mb-2">考试级别</div>
        <div className="flex gap-2">
          {[['cet4', '四级'], ['cet6', '六级']].map(([v, l]) => (
            <button key={v} type="button" onClick={() => setLv(v)} className={chip(lv === v)}>{l}</button>
          ))}
        </div>
        <div className="text-sm font-bold mt-4 mb-2">考试时间</div>
        <div className="flex gap-2 flex-wrap">
          {sessions.map((s, i) => (
            <button key={s.date} type="button" onClick={() => pickSession(i)} className={chip(pick === i)}>{s.year}年{s.month}月</button>
          ))}
          <button type="button" onClick={() => setPick('custom')} className={chip(pick === 'custom')}>自己选日期</button>
        </div>
        <input
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); setPick('custom'); setEstimated(false) }}
          className="mt-3 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
        />
        <p className="text-xs text-gray-500 mt-1.5">{estimated ? '预计日期，' : ''}具体以教育部考试中心公布为准，可自行修改。</p>
        <div className="flex gap-2 mt-5">
          <button
            type="button"
            disabled={!date}
            onClick={() => onSave({ level: lv, date, estimated })}
            className="flex-1 rounded-xl bg-[var(--accent-deep)] py-2.5 text-sm font-bold text-white disabled:opacity-40"
          >
            确定
          </button>
          <button type="button" onClick={onSkip} className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600">跳过</button>
        </div>
        {plan?.date && <button type="button" onClick={onClear} className="mt-3 text-xs text-gray-400 underline">清除考试设置</button>}
      </div>
    </div>
  )
}

