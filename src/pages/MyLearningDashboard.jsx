import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const modules = [
  { id: 'words', icon: '📖', title: '词汇', progress: 68, note: '已掌握 1,020 / 1,500 词', path: '/cambridge/words', tone: 'emerald' },
  { id: 'grammar', icon: '📐', title: '语法', progress: 42, note: '已完成 23 / 55 单元', path: '/cambridge/grammar', tone: 'blue' },
  { id: 'reading', icon: '📄', title: '阅读', progress: 54, note: '最近正确率 76%', path: '/cambridge-reading', tone: 'violet' },
  { id: 'listening', icon: '🎧', title: '听力', progress: 36, note: '最近正确率 68%', path: '/cambridge/listening', tone: 'cyan' },
  { id: 'dictation', icon: '⌨️', title: '听写', progress: 61, note: '本周完成 4 次', path: '/cambridge/dictation', tone: 'amber' },
  { id: 'writing', icon: '✍️', title: '写作', progress: 25, note: 'Part 6 邮件写作', path: '/cambridge/exams/ket-3-test1?tab=writing&part=6', tone: 'rose', ai: true },
  { id: 'speaking', icon: '🎙️', title: '口语', progress: 18, note: 'Part 1 个人问答', path: '/cambridge/exams/ket-3-test1?tab=speaking', tone: 'orange', ai: true },
]

const tones = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  violet: 'bg-violet-50 text-violet-700 border-violet-100',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  rose: 'bg-rose-50 text-rose-700 border-rose-100',
  orange: 'bg-orange-50 text-orange-700 border-orange-100',
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
  { id: 1, title: '复习高频词汇', detail: '20 词 · 预计 8 分钟', path: '/cambridge/words', color: 'bg-emerald-500', done: true },
  { id: 2, title: '阅读 Part 3', detail: '1 组练习 · 预计 12 分钟', path: '/cambridge-reading', color: 'bg-violet-500', done: false },
  { id: 3, title: '听力 Part 2', detail: '1 组练习 · 预计 10 分钟', path: '/cambridge/listening', color: 'bg-cyan-500', done: false },
]

function readTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem('mars_today_tasks') || 'null')
    return Array.isArray(saved) ? saved : initialTasks
  } catch { return initialTasks }
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

function MiniBars() {
  const values = [42, 68, 35, 82, 56, 90, 64]
  const labels = ['一', '二', '三', '四', '五', '六', '日']
  return (
    <div className="flex items-end justify-between gap-2 h-28 pt-3">
      {values.map((v, i) => (
        <div key={labels[i]} className="flex-1 h-full flex flex-col justify-end items-center gap-2">
          <div className="w-full max-w-7 bg-emerald-100 rounded-t-md relative overflow-hidden" style={{ height: `${v}%` }}>
            <div className="absolute inset-x-0 bottom-0 bg-[#0d7656] rounded-t-md" style={{ height: `${Math.max(30, v - 12)}%` }} />
          </div>
          <span className={`text-[10px] ${i === 6 ? 'font-bold text-emerald-700' : 'text-gray-400'}`}>{labels[i]}</span>
        </div>
      ))}
    </div>
  )
}

export default function MyLearningDashboard() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState(readTasks)
  const [panel, setPanel] = useState(null)
  const [toast, setToast] = useState('')
  const completed = tasks.filter(t => t.done).length
  const todayProgress = Math.round(completed / tasks.length * 100)
  const examDays = 46

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
            <div className="w-9 h-9 rounded-full bg-[#f4c95d] text-[#083f32] grid place-items-center font-extrabold">王</div>
            <div className="min-w-0"><div className="text-sm font-bold">王同学</div><div className="text-[10px] text-white/45">A2 Key 备考中</div></div>
          </div>
        </div>
      </aside>

      <main className="flex-1 lg:ml-[230px] min-w-0">
        <header className="h-16 bg-white/90 backdrop-blur border-b border-gray-200/70 sticky top-0 z-30 px-4 sm:px-7 flex items-center">
          <Link aria-label="返回 Mars Cambridge 首页" to="/" className="lg:hidden w-9 h-9 rounded-xl bg-[#083f32] text-white grid place-items-center font-extrabold mr-3">M</Link>
          <div><div className="font-extrabold text-base">我的学习</div><div className="text-[11px] text-gray-400 hidden sm:block">专注 KET，每天进步一点点</div></div>
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold"><span className="w-2 h-2 rounded-full bg-emerald-500" />A2 Key (KET)</div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500"><span>🔥</span><strong className="text-gray-900">7</strong> 天连续</div>
            <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 grid place-items-center font-extrabold text-sm">王</div>
          </div>
        </header>

        <div className="max-w-[1280px] mx-auto p-4 sm:p-7">
          <section className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div><p className="text-sm text-emerald-700 font-bold mb-1">{greeting}，王同学 👋</p><h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">今天也继续向 KET 目标前进</h1></div>
            <div className="flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-xl px-3 py-2"><span>📅</span>距离模拟考还有 <strong className="text-rose-600 text-base">{examDays}</strong> 天</div>
          </section>

          <div className="grid xl:grid-cols-[minmax(0,1fr)_320px] gap-6">
            <div className="space-y-6 min-w-0">
              <section className="rounded-3xl bg-white border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="p-5 sm:p-6 flex flex-col md:flex-row gap-6 md:items-center">
                  <ProgressRing value={todayProgress} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1"><h2 className="text-lg font-extrabold">今日学习任务</h2><span className="text-xs text-gray-400">已完成 {completed}/{tasks.length}</span></div>
                    <p className="text-sm text-gray-500 mb-4">大约还需 22 分钟，完成后今日计划就达标了。</p>
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
                  <div><div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-widest uppercase bg-white/10 rounded-full px-2.5 py-1 mb-3">继续上次学习</div><h2 className="text-xl sm:text-2xl font-extrabold mb-2">阅读 Part 3 · 长文理解</h2><p className="text-white/60 text-sm">上次做到第 4 题，还剩 3 题，预计 6 分钟完成。</p><div className="mt-4 max-w-md"><div className="flex justify-between text-[10px] text-white/50 mb-1.5"><span>学习进度</span><span>4 / 7</span></div><div className="h-2 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-[57%] bg-[#f4c95d] rounded-full" /></div></div></div>
                  <button onClick={() => navigate('/cambridge-reading')} className="relative px-5 py-3 rounded-xl bg-[#f4c95d] text-[#083f32] font-extrabold text-sm hover:bg-amber-300 shadow-lg">继续学习 →</button>
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-3xl p-5"><div className="flex items-center justify-between"><div><h2 className="font-extrabold">最近练习</h2><p className="text-xs text-gray-400 mt-1">看看最近的状态</p></div><button onClick={() => setPanel('history')} className="text-xs font-bold text-emerald-700">全部记录 →</button></div><div className="mt-4 space-y-3">{[
                  ['阅读 Part 2', '82%', '昨天'], ['词汇听写', '18/20', '8月5日'], ['听力 Part 1', '72%', '8月4日']
                ].map(row => <div key={row[0]} className="flex items-center gap-3 py-2 border-b last:border-0 border-gray-100"><span className="w-2 h-2 rounded-full bg-emerald-500" /><span className="text-sm font-bold flex-1">{row[0]}</span><span className="text-sm font-extrabold text-emerald-700">{row[1]}</span><span className="text-[10px] text-gray-400 w-12 text-right">{row[2]}</span></div>)}</div></div>
                <div className="bg-white border border-gray-200 rounded-3xl p-5"><div className="flex items-center justify-between"><div><h2 className="font-extrabold">本周学习</h2><p className="text-xs text-gray-400 mt-1">3.8 小时 · 12 个任务</p></div><span className="text-xs font-bold text-emerald-700">比上周 +18%</span></div><MiniBars /></div>
              </section>

              <section>
                <div className="flex items-end justify-between mb-4"><div><h2 className="text-lg font-extrabold">KET 专项学习</h2><p className="text-xs text-gray-400 mt-1">按自己的节奏稳步提升每项能力</p></div></div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {modules.map(module => (
                    <motion.button key={module.id} whileHover={{ y: -3 }} onClick={() => navigate(module.path)} className="text-left bg-white border border-gray-200/80 rounded-2xl p-4 hover:shadow-md hover:border-gray-300 transition-all">
                      <div className="flex items-start justify-between mb-4"><span className={`w-10 h-10 rounded-xl border grid place-items-center text-lg ${tones[module.tone]}`}>{module.icon}</span>{module.ai && <span className="text-[9px] font-extrabold px-2 py-1 rounded-full bg-amber-100 text-amber-800">AI 体验版</span>}</div>
                      <div className="flex items-center justify-between"><h3 className="font-extrabold">{module.title}</h3><span className="text-xs font-bold text-gray-500">{module.progress}%</span></div>
                      <p className="text-[11px] text-gray-400 mt-1 mb-3">{module.note}</p>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full rounded-full bg-[#0d7656]" style={{ width: `${module.progress}%` }} /></div>
                    </motion.button>
                  ))}
                  <motion.button whileHover={{ y: -3 }} onClick={() => navigate('/cambridge/exams')} className="text-left bg-[#fffaf0] border border-amber-200 rounded-2xl p-4 hover:shadow-md transition-all sm:col-span-2 lg:col-span-2">
                    <div className="flex items-center gap-4"><span className="w-12 h-12 rounded-2xl bg-amber-100 grid place-items-center text-2xl">📝</span><div className="flex-1"><div className="flex items-center gap-2"><h3 className="font-extrabold">KET 模拟考试</h3><span className="text-[9px] font-extrabold text-amber-800 bg-amber-200/70 rounded px-2 py-0.5">模拟训练</span></div><p className="text-xs text-gray-500 mt-1">Reading & Writing · Listening · Speaking</p></div><span className="text-amber-700 font-extrabold">→</span></div>
                  </motion.button>
                </div>
              </section>

            </div>

            <aside className="space-y-4">
              <section className="bg-white border border-gray-200 rounded-3xl p-5"><div className="flex items-center justify-between"><h2 className="font-extrabold">推荐下一步</h2><span className="text-lg">🎯</span></div><div className="mt-4 rounded-2xl bg-[#fff7ed] border border-orange-200 p-4"><span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider text-orange-700"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" />需要加强</span><h3 className="font-extrabold mt-1">听力 Part 2 配对题</h3><p className="text-xs leading-relaxed text-gray-500 mt-2">最近正确率 58%，人名和地点信息容易混淆。建议完成 10 分钟专项练习。</p><button onClick={() => navigate('/cambridge/listening')} className="mt-4 w-full py-2.5 bg-[#e97824] text-white rounded-xl font-bold text-sm hover:bg-[#cf6117] shadow-sm shadow-orange-200">开始针对练习</button></div></section>
              <section className="bg-white border border-gray-200 rounded-3xl p-5"><div className="flex items-center justify-between"><h2 className="font-extrabold">错题提醒</h2><button onClick={() => setPanel('mistakes')} className="text-xs font-bold text-emerald-700">查看错题本</button></div><div className="mt-4 flex items-center gap-4"><div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 grid place-items-center text-2xl font-extrabold">12</div><div><div className="text-sm font-bold">12 道错题待复习</div><p className="text-[11px] text-gray-400 mt-1">其中 5 道已经错过两次</p></div></div><button onClick={() => notify('已生成 8 道错题复习任务')} className="mt-4 w-full py-2.5 border border-amber-200 text-amber-800 bg-amber-50 rounded-xl text-sm font-bold">复习今日错题</button></section>
              <section className="bg-[#162b25] text-white rounded-3xl p-5 overflow-hidden relative"><div className="absolute -right-8 -bottom-10 w-32 h-32 rounded-full bg-white/5" /><div className="relative"><div className="flex items-center justify-between"><h2 className="font-extrabold">学习计划</h2><span>🗓️</span></div><p className="text-xs text-white/50 mt-1">KET 8 周稳步提升计划</p><div className="mt-4 flex justify-between text-xs"><span>第 3 周</span><span className="font-bold">12 / 18 任务</span></div><div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden"><div className="w-2/3 h-full rounded-full bg-[#f4c95d]" /></div><button onClick={() => setPanel('plan')} className="mt-4 text-xs font-bold text-[#f4c95d]">查看本周计划 →</button></div></section>
            </aside>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {panel && <motion.div className="fixed inset-0 z-50 bg-black/35 backdrop-blur-sm flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPanel(null)}>
          <motion.div initial={{ scale: .96, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 12 }} onClick={e => e.stopPropagation()} className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-start"><div><span className="text-xs font-bold text-emerald-700">学习管理</span><h2 className="text-xl font-extrabold mt-1">{panel === 'mistakes' ? '错题本' : panel === 'plan' ? '学习计划' : '历史成绩'}</h2></div><button onClick={() => setPanel(null)} className="w-8 h-8 rounded-full bg-gray-100 text-gray-500">×</button></div>
            <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600 leading-relaxed">{panel === 'mistakes' ? '当前有 12 道错题待复习，主要集中在阅读 Part 3 和听力 Part 2。后续阶段会把已有错词数据和各题型错题统一到这里。' : panel === 'plan' ? '你正在进行“KET 8 周稳步提升计划”，当前是第 3 周。本周重点是阅读长文、听力配对和邮件写作。' : '最近三次练习表现稳步上升。阅读 82%、词汇听写 90%、听力 72%。所有结果均为学习模拟数据，不代表官方考试评分。'}</div>
            <button onClick={() => setPanel(null)} className="mt-5 w-full py-3 rounded-xl bg-[#0d7656] text-white font-bold">知道了</button>
          </motion.div>
        </motion.div>}
      </AnimatePresence>

      <AnimatePresence>{toast && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed z-[60] bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-xl px-4 py-3 text-sm shadow-xl">{toast}</motion.div>}</AnimatePresence>
    </div>
  )
}
