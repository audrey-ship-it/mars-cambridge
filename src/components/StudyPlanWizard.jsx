import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { stageLibraries, examLibraries, colorMap as libColors } from '../data/libraries'

/* ── 动画 ── */
const slide = {
  enter: (d) => ({ x: d > 0 ? 72 : -72, opacity: 0 }),
  center:{ x: 0, opacity: 1, transition:{ duration: 0.28, ease:'easeOut' } },
  exit:  (d) => ({ x: d > 0 ? -72 : 72, opacity: 0, transition:{ duration: 0.2 } }),
}

/* ── 每日词数快速预设 ── */
const PRESETS = [30, 50, 100, 150, 200]

/* ── 话题分类（与 ieltsWords 对应） ── */
const TOPICS = ['全部', '综合', '教育与学术', '社会与行为', '社会与人文', '日常生活', '自然与环境', '身体与健康', '科学与技术', '商业与经济', '情感与心理']

/* ── 出题顺序选项 ── */
const ORDER_MODES = [
  { val: 'freq',       label: '⭐ 高频优先', desc: '从最常考的词开始' },
  { val: 'topic',      label: '🗂️ 类别顺序', desc: '按话题归类练习' },
  { val: 'alpha',      label: '🔤 字母顺序', desc: '从 A 到 Z 练习' },
  { val: 'shuffle',    label: '🔀 随机乱序', desc: '每次随机打乱' },
]

/* ── 目标分级 ── */
const TARGET_BANDS = [
  { val: 6, label: '目标 6 分', desc: '2167 个核心高频词', color: 'emerald' },
  { val: 7, label: '目标 7 分', desc: '6533 个词（含6分）', color: 'blue' },
  { val: 8, label: '目标 8 分', desc: '全部 9388 个词', color: 'violet' },
]

/* ── 显示模式配置 ── */
const DISPLAY_MODES = [
  {
    key: 'chinese',
    emoji: '🇨🇳',
    title: '显示中文 + 词性',
    desc: '看中文意思，拼写英文单词',
    tag: '适合入门 · 日常学习',
    tagColor: 'text-emerald-600 bg-emerald-50',
  },
  {
    key: 'english',
    emoji: '🔤',
    title: '仅英文释义 + 词性',
    desc: '看英文释义，拼写英文单词',
    tag: '模拟考试 · 强化记忆',
    tagColor: 'text-blue-600 bg-blue-50',
  },
]

/* ── 返回按钮 ── */
function BackBtn({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 transition-colors mb-5 group">
      <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
      </svg>
      返回上一步
    </button>
  )
}

/* ── 保存计划到 localStorage ── */
function savePlan(exam, dailyWords, displayMode, orderMode, topic, targetBand) {
  const plan = {
    exam,
    dailyWords,
    displayMode,
    orderMode,
    topic,
    targetBand,
    totalDays: Math.ceil(exam.words / dailyWords),
    savedAt: Date.now(),
  }
  localStorage.setItem('ws_study_plan', JSON.stringify(plan))
}

/* ── 主组件 ── */
// postAuth=true  → 注册/付费后引导，完成后跳转 /dashboard
// postAuth=false → landing page，完成后 CTA 跳转 /login
// initialExam    → 预选词库（从 Navbar 或 Hero 点击进入），直接从 Step 1 开始
export default function StudyPlanWizard({ postAuth = false, initialExam = null }) {
  const navigate = useNavigate()
  const [step, setStep]           = useState(initialExam ? 1 : 0)
  const [dir, setDir]             = useState(1)
  const [exam, setExam]           = useState(initialExam)
  const [dailyWords, setDailyWords] = useState(50)
  const [displayMode, setDisplayMode] = useState(null)
  const [orderMode, setOrderMode] = useState('freq')
  const [topic, setTopic]         = useState('全部')
  const [targetBand, setTargetBand] = useState(7)
  const [libTab, setLibTab]       = useState('exam')

  function go(next) { setDir(next > step ? 1 : -1); setStep(next) }

  /* 天数 / 月数计算 */
  const totalDays   = exam ? Math.ceil(exam.words / dailyWords) : 0
  const totalMonths = (totalDays / 30).toFixed(1)

  /* 预估每日分钟（每词约 1.8 分钟） */
  const minsPerDay  = Math.round(dailyWords * 1.8)

  function handleFinish() {
    if (!exam || !displayMode) return
    savePlan(exam, dailyWords, displayMode, orderMode, topic, targetBand)
    if (postAuth) navigate('/dashboard')
  }

  const totalSteps = initialExam ? 3 : 4   // 预选时少一步
  const progressStep = initialExam ? step - 1 : step  // 进度条偏移

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">

      {/* 进度条 */}
      {step < (initialExam ? 4 : 4) && (
        <div className="px-8 pt-7 pb-5 border-b border-gray-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">制定学习计划</span>
            <span className="text-xs text-gray-400 tabular-nums">
              {progressStep + 1} / {totalSteps}
            </span>
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className={`h-1 rounded-full flex-1 transition-all duration-500 ${i <= progressStep ? 'bg-blue-500' : 'bg-gray-100'}`} />
            ))}
          </div>
        </div>
      )}

      <div className="px-8 py-7">
        <AnimatePresence custom={dir} mode="wait">

          {/* ── Step 0：选词库（无预选时显示）── */}
          {step === 0 && (
            <motion.div key="s0" custom={dir} variants={slide} initial="enter" animate="center" exit="exit">
              <h3 className="text-xl font-bold text-gray-900 mb-1">你的学习目标是？</h3>
              <p className="text-sm text-gray-400 mb-4">根据词库规模，自动计算每日单词任务量</p>

              {/* Tab */}
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-4">
                {[{ key: 'exam', label: '按考试目标' }, { key: 'stage', label: '按学习阶段' }].map(t => (
                  <button key={t.key} onClick={() => setLibTab(t.key)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${libTab === t.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                    {t.label}
                  </button>
                ))}
              </div>

              <div className={`grid gap-2 ${libTab === 'stage' ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {(libTab === 'exam' ? examLibraries : stageLibraries).map(e => {
                  const c = libColors[e.color]
                  const sel = exam?.name === e.name
                  return (
                    <button key={e.name} onClick={() => { setExam(e); go(1) }}
                      className={`relative flex flex-col items-center gap-1 p-3 rounded-2xl border-2 transition-all duration-150 ${sel ? c.sel : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'}`}>
                      <span className="text-2xl leading-none">{e.emoji}</span>
                      <span className="text-sm font-bold text-gray-900">{e.name}</span>
                      <span className="text-[10px] text-gray-400 leading-none">{e.words.toLocaleString()} 词</span>
                      {e.free && <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 rounded-full">免费</span>}
                      {sel && (
                        <div className={`absolute top-1.5 right-1.5 w-4 h-4 rounded-full ${c.dot} flex items-center justify-center`}>
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* ── Step 1：每日词数 + 天数计算 ── */}
          {step === 1 && (
            <motion.div key="s1" custom={dir} variants={slide} initial="enter" animate="center" exit="exit">
              {!initialExam && <BackBtn onClick={() => go(0)} />}

              {/* 词库信息卡 */}
              <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3 mb-6">
                <span className="text-2xl">{exam?.emoji}</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{exam?.name} · {exam?.sub}</div>
                  <div className="text-xs text-gray-400">共 {exam?.words.toLocaleString()} 个核心词</div>
                </div>
                {!initialExam && (
                  <button onClick={() => go(0)} className="ml-auto text-xs text-blue-500 hover:underline flex-shrink-0">更换</button>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">每天计划背多少个词？</h3>
              <p className="text-sm text-gray-400 mb-5">系统会根据这个目标，每天为你安排词汇练习</p>

              {/* 滑块 */}
              <div className="mb-4">
                <div className="flex items-end justify-between mb-2">
                  <span className="text-4xl font-bold text-blue-600 tabular-nums">{dailyWords}</span>
                  <span className="text-sm text-gray-400 pb-1">词 / 天</span>
                </div>
                <input
                  type="range" min="10" max="300" step="10"
                  value={dailyWords}
                  onChange={e => setDailyWords(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-600 bg-gray-200"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>10</span><span>150</span><span>300</span>
                </div>
              </div>

              {/* 预设快速选择 */}
              <div className="flex gap-2 flex-wrap mb-6">
                {PRESETS.map(n => (
                  <button key={n} onClick={() => setDailyWords(n)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${dailyWords === n ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-300'}`}>
                    {n} 词
                  </button>
                ))}
              </div>

              {/* 计算结果 */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700 tabular-nums">{exam?.words.toLocaleString()}</div>
                    <div className="text-xs text-blue-400 mt-0.5">总词数</div>
                  </div>
                  <div className="text-gray-300 text-xl">÷</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700 tabular-nums">{dailyWords}</div>
                    <div className="text-xs text-blue-400 mt-0.5">词/天</div>
                  </div>
                  <div className="text-gray-300 text-xl">=</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 tabular-nums">{totalDays}</div>
                    <div className="text-xs text-gray-400 mt-0.5">天完成</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-blue-100 flex justify-between text-xs text-blue-500">
                  <span>约 {totalMonths} 个月</span>
                  <span>每次约 {minsPerDay} 分钟</span>
                </div>
              </div>

              <button onClick={() => go(2)}
                className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-colors text-sm">
                确认，下一步 →
              </button>
            </motion.div>
          )}

          {/* ── Step 2：显示模式 ── */}
          {step === 2 && (
            <motion.div key="s2" custom={dir} variants={slide} initial="enter" animate="center" exit="exit">
              <BackBtn onClick={() => go(1)} />
              <h3 className="text-xl font-bold text-gray-900 mb-1">练习时显示什么？</h3>
              <p className="text-sm text-gray-400 mb-5">
                每天背 <span className="font-semibold text-blue-600">{dailyWords} 词</span>，
                <span className="font-semibold text-gray-700"> {totalDays} 天</span>后完成 {exam?.name} 词库
              </p>

              <div className="flex flex-col gap-3 mb-6">
                {DISPLAY_MODES.map(m => {
                  const sel = displayMode === m.key
                  return (
                    <button key={m.key} onClick={() => setDisplayMode(m.key)}
                      className={`flex items-start gap-4 px-5 py-4 rounded-2xl border-2 text-left transition-all ${sel ? 'border-blue-400 bg-blue-50' : 'border-gray-100 hover:border-blue-200 hover:bg-blue-50/30'}`}>
                      <span className="text-2xl mt-0.5 flex-shrink-0">{m.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-gray-900 text-sm">{m.title}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${m.tagColor}`}>{m.tag}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{m.desc}</p>
                      </div>
                      {sel && (
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              <button onClick={() => go(3)} disabled={!displayMode}
                className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                确认，下一步 →
              </button>
            </motion.div>
          )}

          {/* ── Step 3：目标分 + 出题顺序 + 话题分类 ── */}
          {step === 3 && (
            <motion.div key="s3" custom={dir} variants={slide} initial="enter" animate="center" exit="exit">
              <BackBtn onClick={() => go(2)} />
              <h3 className="text-xl font-bold text-gray-900 mb-1">练习怎么安排？</h3>
              <p className="text-sm text-gray-400 mb-5">这些设置会保存下来，每次练习都按这个来</p>

              {/* 目标分级 */}
              <div className="mb-5">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">目标分数</div>
                <div className="grid grid-cols-3 gap-2">
                  {TARGET_BANDS.map(b => (
                    <button key={b.val} onClick={() => setTargetBand(b.val)}
                      className={`py-3 px-2 rounded-2xl border-2 text-center transition-all ${
                        targetBand === b.val ? 'border-blue-400 bg-blue-50' : 'border-gray-100 hover:border-gray-200'
                      }`}>
                      <div className="text-base font-bold text-gray-900">{b.label}</div>
                      <div className="text-xs text-gray-400 mt-0.5 leading-tight">{b.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 出题顺序 */}
              <div className="mb-5">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">出题顺序</div>
                <div className="grid grid-cols-2 gap-2">
                  {ORDER_MODES.map(o => (
                    <button key={o.val} onClick={() => setOrderMode(o.val)}
                      className={`py-3 px-3 rounded-2xl border-2 text-left transition-all ${
                        orderMode === o.val ? 'border-blue-400 bg-blue-50' : 'border-gray-100 hover:border-gray-200'
                      }`}>
                      <div className="text-sm font-bold text-gray-900">{o.label}</div>
                      <div className="text-xs text-gray-400 mt-0.5 leading-tight">{o.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 话题分类 */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">话题分类</div>
                <div className="flex flex-wrap gap-2">
                  {TOPICS.map(t => (
                    <button key={t} onClick={() => setTopic(t)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                        topic === t ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                      }`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {postAuth ? (
                <button onClick={handleFinish}
                  className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-200/60">
                  保存计划，开始学习 →
                </button>
              ) : (
                <Link to="/login"
                  onClick={() => savePlan(exam, dailyWords, displayMode, orderMode, topic, targetBand)}
                  className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-2xl text-sm text-center block hover:bg-blue-700 transition-all shadow-lg shadow-blue-200/60">
                  免费注册，按计划学习 →
                </Link>
              )}
              <button
                onClick={() => { setExam(null); setDailyWords(50); setDisplayMode(null); setOrderMode('freq'); setTargetBand(7); setTopic('全部'); go(0) }}
                className="w-full mt-2.5 py-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
              >
                重新调整
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
