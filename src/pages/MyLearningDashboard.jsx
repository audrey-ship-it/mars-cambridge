import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const EXAM_IDS = ['ket-3-test1', 'ket-3-test2', 'ket-3-test3', 'ket-3-test4']

function safeJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null')
    return value ?? fallback
  } catch { return fallback }
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Math.round(value || 0)))
}

function readLearningSnapshot() {
  const mastery = safeJson('mars_vocab_mastery_v1', {})
  const masteredWords = Object.values(mastery).filter(record => record && !record.needsReview).length
  const grammarProgress = safeJson('mars_grammar_progress_v1', {})
  const grammarDone = Object.values(grammarProgress).filter(Boolean).length
  const grammarMistakes = safeJson('mars_grammar_mistakes_v1', {})
  const vocabMistakes = safeJson('mars_vocab_review_queue_v1', [])
  const records = []

  let listeningDone = 0
  let listeningMistakeCount = 0
  for (let setId = 1; setId <= 12; setId += 1) {
    for (let part = 1; part <= 5; part += 1) {
      const item = safeJson(`mars_ket_listening_progress_v1:set-${setId}:part-${part}`, null)
      if (!item) continue
      if (item.completed) listeningDone += 1
      listeningMistakeCount += Number(item.wrongCount || 0)
      records.push({
        title: `听力练习${setId} · Part ${part}`,
        detail: item.completed ? '已完成' : '进行中',
        time: item.updatedAt,
        path: `/cambridge/listening?part=${part}&set=${setId}`,
        progress: item.completed ? 100 : 40,
      })
    }
  }

  let gapCompleted = 0
  let gapMistakeCount = 0
  for (let exercise = 1; exercise <= 15; exercise += 1) {
    const item = safeJson(`mars_ket_gap_progress_v1:exercise-${exercise}`, null)
    const hasResponse = item && Object.values(item.responses || {}).some(value => String(value || '').trim())
    if (!item || (!item.completed && !hasResponse)) continue
    if (item.completed) gapCompleted += 1
    gapMistakeCount += Number(item.wrongCount || 0)
    records.push({
      title: `听力挖空 · 练习${exercise}`,
      detail: item.completed ? '已完成' : '继续填写',
      time: item.updatedAt,
      path: '/cambridge/dictation',
      progress: item.completed ? 100 : 40,
    })
  }

  let readingUnits = 0
  let readingCompleted = 0
  let readingMistakeCount = 0
  let writingDrafts = 0
  EXAM_IDS.forEach((examId, index) => {
    const reading = safeJson(`mars_ket_exam_progress_v1:${examId}:reading`, null)
    if (reading) {
      readingMistakeCount += Object.values(reading.wrongCounts || {}).reduce((sum, value) => sum + Number(value || 0), 0)
      const partNumber = Math.min(5, (reading.partIndex || 0) + 1)
      readingUnits += reading.done ? 5 : Math.max(0, partNumber - 1)
      if (reading.done) readingCompleted += 1
      records.push({
        title: `阅读第${index + 1}套 · Part ${partNumber}`,
        detail: reading.done ? '整套已完成' : '继续答题',
        time: reading.savedAt,
        path: `/cambridge/exams/${examId}?tab=reading`,
        progress: reading.done ? 100 : clampPercent((partNumber - 1) / 5 * 100),
      })
    }
    ;[6, 7].forEach(part => {
      try {
        const draft = localStorage.getItem(`mars_ket_exam_progress_v1:${examId}:writing:part${part}:draft`) || ''
        if (draft.trim()) writingDrafts += 1
      } catch { /* storage may be unavailable */ }
    })
  })

  let speakingRatings = 0
  let latestSpeaking = null
  try {
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index)
      if (!key?.startsWith('mars_ket_speaking_progress_v1:')) continue
      const value = safeJson(key, null)
      if (!value) continue
      speakingRatings += 1
      if (!latestSpeaking || String(value.updatedAt) > String(latestSpeaking.updatedAt)) latestSpeaking = value
    }
  } catch { /* storage may be unavailable */ }

  const lastListening = safeJson('mars_ket_listening_progress_v1:last', null)
  if (lastListening && !records.some(record => record.time === lastListening.updatedAt)) {
    records.push({
      title: `听力练习${lastListening.setId} · Part ${lastListening.part}`,
      detail: '继续练习',
      time: lastListening.updatedAt,
      path: `/cambridge/listening?part=${lastListening.part}&set=${lastListening.setId}`,
      progress: 0,
    })
  }
  records.sort((a, b) => String(b.time || '').localeCompare(String(a.time || '')))
  const today = new Date()
  const dayKeys = Array.from({ length: 7 }, (_, offset) => {
    const date = new Date(today)
    date.setHours(0, 0, 0, 0)
    date.setDate(date.getDate() - (6 - offset))
    return date.toISOString().slice(0, 10)
  })
  const recordDays = records.map(record => String(record.time || '').slice(0, 10)).filter(Boolean)
  const weeklyValues = dayKeys.map(day => recordDays.filter(value => value === day).length)
  const activeDays = new Set(recordDays)
  let streak = 0
  const cursor = new Date(today)
  cursor.setHours(0, 0, 0, 0)
  while (activeDays.has(cursor.toISOString().slice(0, 10))) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }

  return {
    records,
    continueItem: records[0] || null,
    mistakeCount: Object.keys(grammarMistakes).length + (Array.isArray(vocabMistakes) ? vocabMistakes.length : 0) + readingMistakeCount + listeningMistakeCount + gapMistakeCount,
    grammarMistakeCount: Object.keys(grammarMistakes).length,
    vocabMistakeCount: Array.isArray(vocabMistakes) ? vocabMistakes.length : 0,
    readingMistakeCount,
    listeningMistakeCount,
    gapMistakeCount,
    speakingRatings,
    weeklyValues,
    weeklyCount: weeklyValues.reduce((sum, value) => sum + value, 0),
    streak,
  }
}

const navGroups = [
  { label: '', items: [{ id: 'home', icon: '⌂', label: '我的学习' }] },
  { label: '专项学习', items: [
    { id: 'words', icon: '📖', label: '词汇', path: '/cambridge/words' },
    { id: 'grammar', icon: '📐', label: '语法', path: '/cambridge/grammar' },
    { id: 'reading', icon: '📄', label: '阅读', path: '/cambridge-reading' },
    { id: 'listening', icon: '🎧', label: '听力', path: '/cambridge/listening' },
    { id: 'dictation', icon: '⌨️', label: '听写', path: '/cambridge/dictation' },
    { id: 'writing', icon: '✍️', label: '写作', path: '/cambridge/exams/ket-3-test1?tab=writing&part=6', badge: 'AI' },
    { id: 'speaking', icon: '🎙️', label: '口语', path: '/cambridge/exams/ket-3-test1?tab=speaking', badge: 'AI' },
  ] },
  { label: '模拟考试', items: [{ id: 'exam', icon: '📝', label: 'KET 模考', path: '/cambridge/exams' }] },
  { label: '学习管理', items: [
    { id: 'mistakes', icon: '◎', label: '错题本', action: 'mistakes' },
    { id: 'plan', icon: '🗓', label: '学习计划', action: 'plan' },
    { id: 'history', icon: '📈', label: '历史成绩', action: 'history' },
  ] },
]

const initialTasks = [
  { id: 1, title: '复习高频词汇', detail: '20 词 · 预计 8 分钟', path: '/cambridge/words', color: 'bg-emerald-500', done: false },
  { id: 2, title: '阅读 Part 3', detail: '1 组练习 · 预计 12 分钟', path: '/cambridge-reading', color: 'bg-violet-500', done: false },
  { id: 3, title: '听力 Part 2', detail: '1 组练习 · 预计 10 分钟', path: '/cambridge/listening', color: 'bg-cyan-500', done: false },
]

function readTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem('mars_today_tasks') || 'null')
    return Array.isArray(saved) ? saved : initialTasks
  } catch { return initialTasks }
}

function readStudyPlan() {
  try {
    return JSON.parse(localStorage.getItem('mars_ket_study_plan_v1') || 'null') || {
      examDate: '',
      daysPerWeek: 5,
      minutesPerDay: 30,
    }
  } catch {
    return { examDate: '', daysPerWeek: 5, minutesPerDay: 30 }
  }
}

const weeklyTaskTemplates = [
  { title: '高频词汇复习', path: '/cambridge/words', color: 'bg-emerald-500', focus: '核心词汇' },
  { title: '语法专项练习', path: '/cambridge/grammar', color: 'bg-blue-500', focus: '1 个语法单元' },
  { title: '听力真题训练', path: '/cambridge/listening', color: 'bg-cyan-500', focus: '1 个听力 Part' },
  { title: '阅读真题训练', path: '/cambridge/reading', color: 'bg-violet-500', focus: '1 个阅读 Part' },
  { title: '写作输出练习', path: '/cambridge/exams/ket-3-test1?tab=writing&part=6', color: 'bg-rose-500', focus: '1 篇短写作' },
  { title: '口语表达练习', path: '/cambridge/exams/ket-3-test1?tab=speaking', color: 'bg-orange-500', focus: '录音与自评' },
  { title: '错题集中复习', path: '/cambridge/grammar/mistakes', color: 'bg-amber-500', focus: '本周错题' },
]

function generateWeeklyPlan(plan) {
  const taskMinutes = Math.max(10, Math.round(Number(plan.minutesPerDay || 30) / 2))
  return weeklyTaskTemplates.slice(0, Number(plan.daysPerWeek || 5)).map((task, index) => ({
    ...task,
    id: index + 1,
    day: `第 ${index + 1} 天`,
    detail: `${task.focus} · 约 ${taskMinutes} 分钟`,
    done: false,
  }))
}

function readWeeklyPlan(studyPlan) {
  try {
    const saved = JSON.parse(localStorage.getItem('mars_ket_weekly_plan_v1') || 'null')
    if (Array.isArray(saved) && saved.length) return saved
  } catch { /* storage may be unavailable */ }
  return studyPlan.examDate ? generateWeeklyPlan(studyPlan) : []
}

function formatExamDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(`${value}T12:00:00`))
}

function ProgressRing({ value }) {
  const circumference = 2 * Math.PI * 38
  return (
    <div className="relative w-24 h-24 flex-shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="38" fill="none" stroke="#e7eee9" strokeWidth="8" />
        <circle cx="48" cy="48" r="38" fill="none" stroke="#0d7656" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={circumference * (1 - value / 100)} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-extrabold text-gray-900">{value}%</span>
        <span className="text-[10px] text-gray-400">今日</span>
      </div>
    </div>
  )
}

export default function MyLearningDashboard() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState(readTasks)
  const [panel, setPanel] = useState(null)
  const [toast, setToast] = useState('')
  const [studyPlan, setStudyPlan] = useState(readStudyPlan)
  const [weeklyPlan, setWeeklyPlan] = useState(() => readWeeklyPlan(readStudyPlan()))
  const completed = tasks.filter(t => t.done).length
  const todayProgress = Math.round(completed / tasks.length * 100)
  const [learning] = useState(readLearningSnapshot)
  const continueItem = learning.continueItem

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    return hour < 11 ? '早上好' : hour < 18 ? '下午好' : '晚上好'
  }, [])

  function toggleTask(id) {
    const next = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task)
    setTasks(next)
    localStorage.setItem('mars_today_tasks', JSON.stringify(next))
  }

  function handleNav(item) {
    if (item.path) navigate(item.path)
    else if (item.action) setPanel(item.action)
  }

  function notify(message) {
    setToast(message)
    window.setTimeout(() => setToast(''), 2200)
  }

  function saveStudyPlan() {
    if (!studyPlan.examDate) {
      notify('请先选择模拟考日期')
      return
    }
    const nextPlan = { ...studyPlan, savedAt: new Date().toISOString() }
    const nextWeeklyPlan = generateWeeklyPlan(nextPlan)
    const nextTodayTasks = nextWeeklyPlan.slice(0, Math.min(3, nextWeeklyPlan.length))
    try {
      localStorage.setItem('mars_ket_study_plan_v1', JSON.stringify(nextPlan))
      localStorage.setItem('mars_ket_weekly_plan_v1', JSON.stringify(nextWeeklyPlan))
      localStorage.setItem('mars_today_tasks', JSON.stringify(nextTodayTasks))
    } catch { /* storage may be unavailable */ }
    setStudyPlan(nextPlan)
    setWeeklyPlan(nextWeeklyPlan)
    setTasks(nextTodayTasks)
    setPanel(null)
    notify('学习计划已保存，本周任务已生成')
  }

  const planDaysLeft = studyPlan.examDate
    ? Math.max(0, Math.ceil((new Date(`${studyPlan.examDate}T23:59:59`) - new Date()) / 86400000))
    : null

  return (
    <div className="min-h-screen bg-[#f5f7f4] text-gray-900 flex">
      <aside className="hidden lg:flex w-[230px] bg-[#083f32] text-white flex-col fixed inset-y-0 left-0 z-40">
        <Link aria-label="返回 Mars Cambridge 首页" to="/" className="h-20 px-6 flex items-center gap-3 border-b border-white/10 text-left hover:bg-white/[.04] transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-[#f4c95d] text-[#083f32] grid place-items-center font-extrabold text-lg shadow-lg shadow-black/10">M</div>
          <div><div className="font-extrabold tracking-tight">Mars Cambridge</div><div className="text-[10px] text-white/45 tracking-[0.18em] uppercase">KET Learning</div></div>
        </Link>
        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-5">
          {navGroups.map((group, index) => (
            <div key={index}>
              {group.label && <div className="px-3 mb-2 text-[10px] uppercase tracking-[0.2em] text-white/35 font-bold">{group.label}</div>}
              <div className="space-y-1">
                {group.items.map(item => (
                  <button key={item.id} onClick={() => handleNav(item)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${item.id === 'home' ? 'bg-white text-[#083f32] font-bold shadow-sm' : 'text-white/72 hover:bg-white/10 hover:text-white'}`}>
                    <span className="w-5 text-center">{item.icon}</span><span>{item.label}</span>
                    {item.badge && <span className="ml-auto text-[9px] font-extrabold bg-amber-300 text-amber-950 rounded px-1.5 py-0.5">{item.badge}</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="rounded-2xl bg-white/8 p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#f4c95d] text-[#083f32] grid place-items-center font-extrabold">学</div>
            <div className="min-w-0"><div className="text-sm font-bold">学习者</div><div className="text-[10px] text-white/45">A2 Key 备考中</div></div>
          </div>
        </div>
      </aside>

      <main className="flex-1 lg:ml-[230px] min-w-0">
        <header className="h-16 bg-white/90 backdrop-blur border-b border-gray-200/70 sticky top-0 z-30 px-4 sm:px-7 flex items-center">
          <Link aria-label="返回 Mars Cambridge 首页" to="/" className="lg:hidden w-9 h-9 rounded-xl bg-[#083f32] text-white grid place-items-center font-extrabold mr-3">M</Link>
          <div><div className="font-extrabold text-base">我的学习</div><div className="text-[11px] text-gray-400 hidden sm:block">专注 KET，每天进步一点点</div></div>
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold"><span className="w-2 h-2 rounded-full bg-emerald-500" />A2 Key (KET)</div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500"><span>🔥</span><strong className="text-gray-900">{learning.streak}</strong> 天连续</div>
            <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 grid place-items-center font-extrabold text-sm">学</div>
          </div>
        </header>

        <div className="max-w-[1280px] mx-auto p-4 sm:p-7">
          <section className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div><p className="text-sm text-emerald-700 font-bold mb-1">{greeting}，同学 👋</p><h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">今天也继续向 KET 目标前进</h1></div>
            <button onClick={() => setPanel('plan')} className="flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-xl px-3 py-2"><span>📅</span>设置模拟考日期与学习计划</button>
          </section>

          <section className="relative mb-6 overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50/80 p-5 text-gray-900 shadow-sm sm:p-6">
            <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-emerald-200/35" />
            <div className="relative">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🗓️</span>
                  <h2 className="text-xl font-extrabold">学习计划</h2>
                </div>
                <p className="mt-2 text-sm text-gray-500">{studyPlan.examDate ? `模拟考日期：${formatExamDate(studyPlan.examDate)}` : '设置模拟考日期和学习节奏，系统会自动生成本周任务。'}</p>
                {studyPlan.examDate ? <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="rounded-2xl border border-emerald-200 bg-white/75 px-3 py-3"><strong className="block text-lg text-emerald-800">{planDaysLeft}</strong><span className="text-[11px] text-gray-500">剩余天数</span></div>
                  <div className="rounded-2xl border border-emerald-200 bg-white/75 px-3 py-3"><strong className="block text-lg text-emerald-800">{studyPlan.daysPerWeek} 天</strong><span className="text-[11px] text-gray-500">每周学习</span></div>
                  <div className="rounded-2xl border border-emerald-200 bg-white/75 px-3 py-3"><strong className="block text-lg text-emerald-800">{studyPlan.minutesPerDay} 分钟</strong><span className="text-[11px] text-gray-500">每天学习</span></div>
                </div> : <div className="mt-4 text-sm font-bold text-emerald-800">尚未设置专属学习计划</div>}
              </div>
              <button onClick={() => setPanel('plan')} className="shrink-0 rounded-xl bg-[#f4c95d] px-6 py-3 text-sm font-extrabold text-[#083f32] shadow-md transition hover:bg-amber-300">{studyPlan.examDate ? '调整计划 →' : '设置学习计划 →'}</button>
              </div>
              {weeklyPlan.length > 0 && <div className="mt-5 border-t border-emerald-200/80 pt-4">
                <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-extrabold text-emerald-900">本周安排</h3><span className="text-[11px] text-gray-500">按顺序完成即可</span></div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {weeklyPlan.map(task => <button key={task.id} onClick={() => navigate(task.path)} className="rounded-xl border border-emerald-100 bg-white/80 p-3 text-left transition hover:border-emerald-300 hover:bg-white">
                    <span className="text-[10px] font-bold text-emerald-600">{task.day}</span>
                    <strong className="mt-1 block text-xs text-gray-800">{task.title}</strong>
                  </button>)}
                </div>
              </div>}
            </div>
          </section>

          <div className="space-y-6 min-w-0">
              <section className="rounded-3xl bg-white border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="p-5 sm:p-6 flex flex-col md:flex-row gap-6 md:items-center">
                  <ProgressRing value={todayProgress} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1"><h2 className="text-lg font-extrabold">今日学习任务</h2><span className="text-xs text-gray-400">已完成 {completed}/{tasks.length}</span></div>
                    <p className="text-sm text-gray-500 mb-4">完成三项推荐练习，保持稳定的学习节奏。</p>
                    <div className="grid md:grid-cols-3 gap-3">
                      {tasks.map(task => (
                        <div key={task.id} className={`rounded-2xl border p-3.5 transition-all ${task.done ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-200 hover:border-emerald-300 hover:shadow-sm'}`}>
                          <div className="flex items-start gap-3">
                            <button aria-label={`切换${task.title}完成状态`} onClick={() => toggleTask(task.id)} className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center flex-shrink-0 ${task.done ? 'bg-emerald-500 text-white' : 'border-2 border-gray-300'}`}>{task.done && '✓'}</button>
                            <div className="min-w-0"><div className={`text-sm font-bold ${task.done ? 'line-through text-gray-400' : 'text-gray-900'}`}>{task.title}</div><div className="text-[11px] text-gray-400 mt-1">{task.detail}</div></div>
                          </div>
                          {!task.done && <button onClick={() => navigate(task.path)} className="mt-3 w-full py-2 rounded-lg bg-[#0d7656] text-white text-xs font-bold hover:bg-[#095f46]">开始任务 →</button>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c5e48] to-[#083f32] text-white p-6 sm:p-7 shadow-lg shadow-emerald-950/10">
                <div className="absolute -right-10 -top-16 w-64 h-64 rounded-full border-[42px] border-white/5" />
                <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-5">
                  <div><div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-widest uppercase bg-white/10 rounded-full px-2.5 py-1 mb-3">{continueItem ? '继续上次学习' : '开始第一次练习'}</div><h2 className="text-xl sm:text-2xl font-extrabold mb-2">{continueItem?.title || '选择一个 KET 专项开始学习'}</h2><p className="text-white/60 text-sm">{continueItem?.detail || '完成练习后，这里会自动显示最近的学习位置。'}</p>{continueItem && <div className="mt-4 max-w-md"><div className="flex justify-between text-[10px] text-white/50 mb-1.5"><span>学习进度</span><span>{continueItem.progress}%</span></div><div className="h-2 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-[#f4c95d] rounded-full" style={{ width: `${continueItem.progress}%` }} /></div></div>}</div>
                  <button onClick={() => navigate(continueItem?.path || '/cambridge/words')} className="relative px-5 py-3 rounded-xl bg-[#f4c95d] text-[#083f32] font-extrabold text-sm hover:bg-amber-300 shadow-lg">{continueItem ? '继续学习 →' : '开始学习 →'}</button>
                </div>
              </section>

              <section className="rounded-3xl border border-gray-200/80 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div><div className="text-[10px] font-extrabold tracking-[.18em] text-amber-700">MISTAKE REVIEW</div><h2 className="mt-1 text-lg font-extrabold">错题学习</h2><p className="mt-1 text-xs text-gray-400">按类别集中复习答错的内容，掌握后自动移出错题本。</p></div>
                  <span className="text-xs font-bold text-amber-700">共 {learning.mistakeCount} 道待复习</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                  <button onClick={() => navigate('/cambridge/words?mode=review')} className="group rounded-2xl border border-amber-200 bg-amber-50/60 p-4 text-left transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-sm">
                    <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4c95d] text-lg">📖</span><span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-amber-800">{learning.vocabMistakeCount} 词</span></div>
                    <h3 className="mt-4 font-extrabold text-gray-900">词汇错题</h3>
                    <div className="mt-1 flex items-end justify-between gap-3"><p className="text-xs leading-relaxed text-gray-500">复习拼错或跳过的单词，答对后移出错词列表。</p><span className="shrink-0 font-extrabold text-amber-800 transition group-hover:translate-x-1">进入 →</span></div>
                  </button>
                  <button onClick={() => navigate('/cambridge/grammar/mistakes')} className="group rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 text-left transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-sm">
                    <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-lg">📐</span><span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-emerald-800">{learning.grammarMistakeCount} 题</span></div>
                    <h3 className="mt-4 font-extrabold text-gray-900">语法错题</h3>
                    <div className="mt-1 flex items-end justify-between gap-3"><p className="text-xs leading-relaxed text-gray-500">分类复习选择题、挖空练习和改错题中的错误。</p><span className="shrink-0 font-extrabold text-emerald-800 transition group-hover:translate-x-1">进入 →</span></div>
                  </button>
                  <button onClick={() => navigate('/cambridge/reading')} className="group rounded-2xl border border-violet-200 bg-violet-50/60 p-4 text-left transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-sm">
                    <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 text-lg">📄</span><span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-violet-800">{learning.readingMistakeCount} 题</span></div>
                    <h3 className="mt-4 font-extrabold text-gray-900">阅读错题</h3><div className="mt-1 flex items-end justify-between gap-2"><p className="text-xs leading-relaxed text-gray-500">复习真题阅读中答错的题目。</p><span className="shrink-0 font-extrabold text-violet-800 transition group-hover:translate-x-1">进入 →</span></div>
                  </button>
                  <button onClick={() => navigate('/cambridge/listening')} className="group rounded-2xl border border-cyan-200 bg-cyan-50/60 p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-sm">
                    <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-600 text-lg">🎧</span><span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-cyan-800">{learning.listeningMistakeCount} 题</span></div>
                    <h3 className="mt-4 font-extrabold text-gray-900">听力错题</h3><div className="mt-1 flex items-end justify-between gap-2"><p className="text-xs leading-relaxed text-gray-500">回顾各 Part 中听辨错误的题目。</p><span className="shrink-0 font-extrabold text-cyan-800 transition group-hover:translate-x-1">进入 →</span></div>
                  </button>
                  <button onClick={() => navigate('/cambridge/dictation')} className="group rounded-2xl border border-rose-200 bg-rose-50/60 p-4 text-left transition hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-sm">
                    <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-rose-500 text-lg">⌨️</span><span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-rose-800">{learning.gapMistakeCount} 处</span></div>
                    <h3 className="mt-4 font-extrabold text-gray-900">听写错题</h3><div className="mt-1 flex items-end justify-between gap-2"><p className="text-xs leading-relaxed text-gray-500">重听并改正漏填、拼写错误。</p><span className="shrink-0 font-extrabold text-rose-800 transition group-hover:translate-x-1">进入 →</span></div>
                  </button>
                </div>
              </section>

          </div>
        </div>
      </main>

      <AnimatePresence>
        {panel && <motion.div className="fixed inset-0 z-50 bg-black/35 backdrop-blur-sm flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPanel(null)}>
          <motion.div initial={{ scale: .96, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 12 }} onClick={e => e.stopPropagation()} className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-start"><div><span className="text-xs font-bold text-emerald-700">学习管理</span><h2 className="text-xl font-extrabold mt-1">{panel === 'mistakes' ? '错题本' : panel === 'plan' ? '学习计划' : '历史成绩'}</h2></div><button onClick={() => setPanel(null)} className="w-8 h-8 rounded-full bg-gray-100 text-gray-500">×</button></div>
            {panel === 'plan' ? (
              <div className="mt-5 space-y-4">
                <label className="block"><span className="mb-1.5 block text-sm font-bold text-gray-700">模拟考日期</span><input type="date" min={new Date().toISOString().slice(0, 10)} value={studyPlan.examDate} onChange={event => setStudyPlan(value => ({ ...value, examDate: event.target.value }))} className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 font-bold text-gray-800 outline-none focus:border-emerald-500" /></label>
                <label className="block"><span className="mb-1.5 block text-sm font-bold text-gray-700">每周学习天数</span><select value={studyPlan.daysPerWeek} onChange={event => setStudyPlan(value => ({ ...value, daysPerWeek: Number(event.target.value) }))} className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 font-bold text-gray-800 outline-none focus:border-emerald-500">{[3,4,5,6,7].map(value => <option key={value} value={value}>每周 {value} 天</option>)}</select></label>
                <label className="block"><span className="mb-1.5 block text-sm font-bold text-gray-700">每天学习时长</span><select value={studyPlan.minutesPerDay} onChange={event => setStudyPlan(value => ({ ...value, minutesPerDay: Number(event.target.value) }))} className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 font-bold text-gray-800 outline-none focus:border-emerald-500">{[20,30,45,60,90].map(value => <option key={value} value={value}>每天 {value} 分钟</option>)}</select></label>
                <p className="rounded-xl bg-emerald-50 px-4 py-3 text-xs leading-relaxed text-emerald-800">保存后会根据学习天数生成本周安排，并同步更新首页的今日任务。</p>
                <button onClick={saveStudyPlan} className="w-full rounded-xl bg-[#0d7656] py-3 font-bold text-white">保存计划</button>
              </div>
            ) : panel === 'mistakes' ? (
              <div className="mt-5"><div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-600">当前共有 <strong className="text-gray-900">{learning.mistakeCount}</strong> 道待复习错题，其中词汇 {learning.vocabMistakeCount} 道、语法 {learning.grammarMistakeCount} 道。</div><button onClick={() => { setPanel(null); navigate(learning.grammarMistakeCount ? '/cambridge/grammar/mistakes' : '/cambridge/words') }} disabled={!learning.mistakeCount} className="mt-4 w-full rounded-xl bg-[#0d7656] py-3 font-bold text-white disabled:bg-gray-200">{learning.mistakeCount ? '进入错题复习' : '暂时没有错题'}</button></div>
            ) : (
              <div className="mt-5"><div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-600">{learning.records.length ? `当前设备已保存 ${learning.records.length} 条练习记录。` : '当前还没有练习记录，完成练习后会自动显示。'}</div><button onClick={() => setPanel(null)} className="mt-4 w-full rounded-xl bg-[#0d7656] py-3 font-bold text-white">关闭</button></div>
            )}
          </motion.div>
        </motion.div>}
      </AnimatePresence>

      <AnimatePresence>{toast && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed z-[60] bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-xl px-4 py-3 text-sm shadow-xl">{toast}</motion.div>}</AnimatePresence>
    </div>
  )
}
