import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { EXAM_CONFIGS, getExamGrade } from '../data/cambridgeScoreTables'
import MyLearningDashboard from './MyLearningDashboard'

/* ── 侧栏模块 ── */
const SIDEBAR_MODULES = [
  { id: 'words',    icon: '📖', label: '单词',  path: 'words'   },
  { id: 'grammar',  icon: '📐', label: '语法',  path: 'grammar' },
  { id: 'listening',icon: '🎧', label: '听力',  path: 'listening'},
  { id: 'reading',  icon: '📄', label: '阅读',  path: 'reading' },
  { id: 'writing',  icon: '✍️', label: '写作',  path: 'writing' },
  { id: 'speaking', icon: '🎙️', label: '口语',  path: 'speaking'},
  { id: 'exams',    icon: '📝', label: '模考',  path: 'exams'   },
]

const LEVELS = [
  { code: 'A2', abbr: 'KET', color: 'bg-emerald-500', light: 'text-emerald-600 bg-emerald-50' },
  { code: 'B1', abbr: 'PET', color: 'bg-blue-500',    light: 'text-blue-600 bg-blue-50'       },
  { code: 'B2', abbr: 'FCE', color: 'bg-indigo-500',  light: 'text-indigo-600 bg-indigo-50'   },
  { code: 'C1', abbr: 'CAE', color: 'bg-violet-500',  light: 'text-violet-600 bg-violet-50'   },
  { code: 'C2', abbr: 'CPE', color: 'bg-rose-500',    light: 'text-rose-600 bg-rose-50'       },
]

/* ── App 外壳（左侧栏 + 顶栏）── */
export function CambridgeLayout({ children, activeModule, level, setLevel }) {
  const navigate = useNavigate()
  const current = LEVELS.find(l => l.abbr === level) || LEVELS[0]
  const [showLevelMenu, setShowLevelMenu] = useState(false)

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* 左侧图标栏 */}
      <aside className="w-24 bg-[#064e3b] flex flex-col items-center py-4 gap-1 flex-shrink-0">
        {/* Logo → 回仪表盘 */}
        <Link to="/cambridge" title="返回仪表盘" className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4 flex-shrink-0 hover:bg-white/25 transition-colors">
          <span className="text-white font-extrabold text-base">火</span>
        </Link>
        {/* 模块图标 */}
        {SIDEBAR_MODULES.map(m => (
          <button key={m.id}
            onClick={() => navigate(m.id === 'grammar' ? '/cambridge/grammar' : m.id === 'listening' ? '/cambridge/listening' : m.id === 'exams' ? '/cambridge/exams' : `/cambridge/${m.path}`)}
            title={m.label}
            className={`w-[78px] h-14 rounded-xl flex flex-col items-center justify-center gap-1 transition-all group ${
              activeModule === m.id
                ? 'bg-white/20 text-white'
                : 'text-white/85 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="text-xl leading-none">{m.icon}</span>
            <span className="text-xs font-semibold leading-none opacity-80">{m.label}</span>
          </button>
        ))}

        {/* 底部 */}
        <div className="mt-auto flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:bg-white/30 transition-colors">
            王
          </div>
        </div>
      </aside>

      {/* 主区域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶栏 */}
        <header className="h-14 border-b border-gray-100 flex items-center px-6 gap-4 flex-shrink-0 bg-white">
          {/* 级别选择 */}
          <div className="relative">
            <button
              onClick={() => setShowLevelMenu(o => !o)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#064e3b]/40 transition-colors text-sm font-semibold text-gray-800"
            >
              <span className={`w-2 h-2 rounded-full ${current.color}`} />
              {current.code} {current.abbr}
              <svg className={`w-3 h-3 text-gray-400 transition-transform ${showLevelMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showLevelMenu && (
              <div className="absolute top-full mt-1.5 left-0 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 min-w-[160px] z-50">
                {LEVELS.map(l => (
                  <button key={l.abbr}
                    onClick={() => { setLevel(l.abbr); setShowLevelMenu(false) }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${level === l.abbr ? 'bg-[#064e3b]/8' : ''}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${l.color}`} />
                    <span className="font-semibold text-gray-800">{l.code} {l.abbr}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="text-gray-300 text-sm">|</span>
          <span className="text-sm font-semibold text-gray-600">
            {SIDEBAR_MODULES.find(m => m.id === activeModule)?.label} 练习
          </span>

          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <span>🔥</span>
              <span className="font-semibold text-gray-800">7</span>
              <span>天连续</span>
            </div>
            <Link to="/cambridge" className="px-3 py-1.5 bg-[#064e3b] text-white text-xs font-bold rounded-lg hover:bg-[#065f46] transition-colors">
              返回我的学习
            </Link>
          </div>
        </header>

        {/* 内容区 */}
        <main className="flex-1 overflow-y-auto bg-gray-50/50">
          {children}
        </main>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   单词练习页
════════════════════════════════════════════ */

import { cambridgeWordsByLevel, LEVEL_WORD_COUNTS } from '../data/cambridgeWords'
import { VOCAB_SETS, MUST_SPELL_TOPICS, mustSpell500, READING_FREQ_288, irregularVerbWords } from '../data/ketVocabSets'
import { COLLOCATION_BATCHES } from '../data/ketCollocations'

function speak(word) {
  const u = new SpeechSynthesisUtterance(word)
  u.lang = 'en-GB'; u.rate = 0.85
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(u)
}

function playCorrect() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    ;[523.25, 659.25, 783.99].forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain()
      o.connect(g); g.connect(ctx.destination)
      o.type = 'sine'; o.frequency.value = f
      const t = ctx.currentTime + i * 0.12
      g.gain.setValueAtTime(0, t)
      g.gain.linearRampToValueAtTime(0.22, t + 0.02)
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.22)
      o.start(t); o.stop(t + 0.25)
    })
  } catch {}
}

function playWrong() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    ;[246.94, 196.00].forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain()
      o.connect(g); g.connect(ctx.destination)
      o.type = 'sawtooth'; o.frequency.value = f
      const t = ctx.currentTime + i * 0.15
      g.gain.setValueAtTime(0, t)
      g.gain.linearRampToValueAtTime(0.15, t + 0.02)
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.28)
      o.start(t); o.stop(t + 0.3)
    })
  } catch {}
}


const DAILY_OPTIONS = [10, 20, 30, 50]

/* ── 话题选择器 (for 必默500词 topic mode) ── */
function TopicChooser({ onSelect, onBack }) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 mb-6 transition-colors">
        ← 返回
      </button>
      <h2 className="text-xl font-bold text-gray-900 mb-1">选择话题</h2>
      <p className="text-sm text-gray-400 mb-6">专项突破，每次专注一个主题</p>
      <div className="grid grid-cols-2 gap-3">
        {MUST_SPELL_TOPICS.map(t => (
          <button key={t.id} onClick={() => onSelect(t)}
            className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3.5 hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-sm transition-all text-left group">
            <span className="text-2xl">{t.emoji}</span>
            <div className="min-w-0">
              <div className="font-bold text-gray-900 text-sm leading-tight">{t.titleZh}</div>
              <div className="text-xs text-gray-400 mt-0.5">{t.title} · {t.words.length} 词</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── 词汇集选择器 ── */
function VocabPathIcon({ id }) {
  const paths = {
    must500: <><path d="M5 4h6a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Z"/><path d="M19 4h-2a3 3 0 0 0-3 3v13h2a3 3 0 0 1 3 3V4Z"/></>,
    reading288: <><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/></>,
    official: <><path d="M7 3h10v4H7z"/><path d="M5 6h14v15H5z"/><path d="M8 11h8M8 15h6"/></>,
    topic: <><path d="M3 7h7l2 2h9v11H3z"/><path d="M7 13h10"/></>,
    irregular: <><path d="M20 7h-6V1"/><path d="M20 7a9 9 0 1 0 1 9"/><path d="m8 12 3 3 5-6"/></>,
    collocations: <><path d="m9 15-2 2a4 4 0 0 1-6-6l3-3a4 4 0 0 1 6 0"/><path d="m15 9 2-2a4 4 0 0 1 6 6l-3 3a4 4 0 0 1-6 0"/><path d="m8 16 8-8"/></>,
  }
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[id]}</svg>
}

function VocabSetChooser({ onSelect, onCollocation }) {
  const [showTopics, setShowTopics] = useState(false)
  const [lastResult] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mars_vocab_last_result') || 'null') } catch { return null }
  })

  if (showTopics) {
    return (
      <TopicChooser
        onBack={() => setShowTopics(false)}
        onSelect={(topic) => onSelect({ mode: 'topic', topic })}
      />
    )
  }

  const practiced = lastResult?.total || 0
  const accuracy = lastResult?.accuracy ?? 0
  const wrongCount = lastResult?.wrongCount || 0

  function openSet(vs) {
    if (vs.mode === 'topic') setShowTopics(true)
    else onSelect({ mode: vs.mode })
  }

  const cards = [
    ...VOCAB_SETS.map(vs => ({ ...vs, action: () => openSet(vs) })),
    { id: 'collocations', emoji: '🔗', title: '固定搭配专项', subtitle: '270 个词组', desc: '通过填空练习掌握常见搭配，帮助阅读理解和写作表达。', action: onCollocation },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-9 py-5 lg:py-6 min-h-full flex flex-col">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">KET VOCABULARY</div>
          <div className="mt-1 flex items-baseline gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-950">词汇学习</h1>
            <p className="hidden md:block text-sm text-gray-400">选择一个类别，开始今天的拼写与复习训练。</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 lg:w-[470px]">
          {[
            ['今日完成', `${practiced}/20`],
            ['最近正确率', lastResult ? `${accuracy}%` : '—'],
            ['待复习错词', `${wrongCount}`],
          ].map(([label,value]) => <div key={label} className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center justify-between gap-3"><span className="text-[11px] text-gray-400">{label}</span><strong className="text-lg text-gray-950">{value}</strong></div>)}
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 flex-1">
        {cards.map((card, i) => {
          const featured = i === 0
          const gold = card.id === 'collocations'
          const hasArrow = i === 0 || i === 1 || i === 3 || i === 4
          return <div key={card.id} className="relative">
          <button onClick={card.action} className={`relative overflow-hidden w-full h-full group text-left rounded-[22px] border p-5 lg:p-6 min-h-[190px] flex flex-col hover:-translate-y-0.5 hover:shadow-md transition-all ${featured ? 'bg-emerald-50/40 border-emerald-500' : gold ? 'bg-[#fffaf0] border-[#e8cf88]' : 'bg-white border-gray-200 hover:border-emerald-300'}`}>
            {featured && <div className="absolute top-0 inset-x-0 h-1.5 bg-[#064e3b]" />}
            <div className="relative flex items-start justify-between">
              <span className={`w-11 h-11 rounded-2xl grid place-items-center ${featured ? 'bg-[#064e3b] text-white' : gold ? 'bg-[#f4c95d] text-[#684d00]' : 'bg-emerald-50 text-emerald-700'}`}><VocabPathIcon id={card.id}/></span>
              <div className="flex items-center gap-2"><span className={`text-[10px] font-extrabold tracking-[.14em] ${gold ? 'text-[#b78a19]' : 'text-gray-300'}`}>0{i + 1}</span>{featured && <span className="rounded-full bg-[#f4c95d] text-[#604800] px-2.5 py-1 text-[10px] font-extrabold">今日推荐</span>}</div>
            </div>
            <div className="relative mt-4">
              <h2 className="font-extrabold text-xl text-gray-950">{card.title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed line-clamp-2 text-gray-400">{card.desc}</p>
            </div>
            <div className="relative mt-auto pt-4 flex items-center justify-between text-xs">
              <span className="text-gray-400">{featured ? '本组 20 词 · 约 8 分钟' : card.count ? `${card.count} 词` : card.subtitle}</span>
              <span className={`font-extrabold ${featured ? 'bg-[#064e3b] text-white rounded-xl px-3 py-2' : gold ? 'text-[#8a6500]' : 'text-emerald-700'}`}>{featured ? '开始练习 →' : '进入 →'}</span>
            </div>
          </button>
          {hasArrow && <span className="hidden lg:grid absolute -right-[13px] top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#f4c95d] text-[#064e3b] place-items-center text-sm font-extrabold shadow-sm">→</span>}
          </div>
        })}
      </div>
    </div>
  )
}

/* ── 固定搭配练习 ── */
function CollocationsContent({ onBack }) {
  const [colBatch,   setColBatch]   = useState(0)
  const [colAnswers, setColAnswers] = useState({})
  const [colChecked, setColChecked] = useState(false)
  const [colScore,   setColScore]   = useState(null)

  const currentBatch = COLLOCATION_BATCHES[colBatch]

  function handleSubmit() {
    let correct = 0
    currentBatch.items.forEach(item => {
      if ((colAnswers[item.id] || '').trim().toLowerCase() === item.answer.toLowerCase()) correct++
    })
    setColScore({ correct, total: currentBatch.items.length })
    setColChecked(true)
  }

  function reset() {
    setColAnswers({})
    setColChecked(false)
    setColScore(null)
  }

  function switchBatch(idx) {
    setColBatch(idx)
    setColAnswers({})
    setColChecked(false)
    setColScore(null)
  }

  function isCorrect(item) {
    return (colAnswers[item.id] || '').trim().toLowerCase() === item.answer.toLowerCase()
  }

  const pct = colScore ? colScore.correct / colScore.total : 0

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors">
          ← 返回
        </button>
        <div className="w-px h-4 bg-gray-200" />
        <h2 className="text-xl font-bold text-gray-900">🔗 固定搭配专项</h2>
        <span className="text-xs bg-teal-50 text-teal-700 border border-teal-100 font-semibold px-3 py-1 rounded-full">270 词组 · 填空</span>
      </div>

      <div className="flex gap-4">
        {/* Batch selector sidebar */}
        <div className="w-28 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">批次</p>
            <div className="space-y-1 max-h-[420px] overflow-y-auto">
              {COLLOCATION_BATCHES.map((b, i) => (
                <button key={i} onClick={() => switchBatch(i)}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-all ${
                    colBatch === i ? 'bg-teal-50 text-teal-700 font-bold ring-1 ring-teal-200' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-bold">{b.label}</div>
                  <div className="text-[10px] text-gray-400">{b.range}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Score in sidebar */}
          {colScore && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className={`mt-3 rounded-2xl border p-4 text-center shadow-sm ${
                pct >= 0.8 ? 'bg-emerald-50 border-emerald-200' : pct >= 0.5 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'
              }`}
            >
              <div className={`text-3xl font-extrabold ${pct >= 0.8 ? 'text-emerald-600' : pct >= 0.5 ? 'text-amber-600' : 'text-red-500'}`}>
                {colScore.correct}
                <span className="text-base text-gray-300 font-normal">/{colScore.total}</span>
              </div>
              <div className="text-xs mt-1 font-semibold text-gray-500">
                {pct >= 0.8 ? '🎉 优秀！' : pct >= 0.5 ? '👍 不错' : '💪 加油'}
              </div>
            </motion.div>
          )}
        </div>

        {/* Main card */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Card header */}
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
              <div>
                <div className="font-extrabold text-gray-900">{currentBatch.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">第 {currentBatch.range} 个 · 共 270 个固定搭配</div>
              </div>
            </div>

            {/* Questions */}
            <div className="p-5 space-y-3">
              {currentBatch.items.map((item, qi) => {
                const ua    = colAnswers[item.id] || ''
                const ok    = colChecked ? isCorrect(item) : null
                const parts = item.sentence.split('___')
                return (
                  <motion.div key={item.id}
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: qi * 0.02 }}
                    className={`flex items-start gap-3 px-4 py-3 rounded-xl border transition-all ${
                      colChecked
                        ? ok ? 'border-emerald-200 bg-emerald-50/40' : 'border-red-200 bg-red-50/40'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <span className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold mt-0.5 ${
                      colChecked
                        ? ok ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                        : ua ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'
                    }`}>{qi + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {parts[0]}
                        {colChecked ? (
                          <span className={`mx-1 px-2 py-0.5 rounded font-bold text-sm border ${
                            ok ? 'bg-emerald-100 border-emerald-300 text-emerald-700'
                               : 'bg-red-100 border-red-300 text-red-600'
                          }`}>
                            {ua || '___'}
                            {!ok && <span className="ml-1.5 text-emerald-600 font-normal">({item.answer})</span>}
                          </span>
                        ) : (
                          <input type="text" value={ua}
                            onChange={e => setColAnswers(a => ({ ...a, [item.id]: e.target.value }))}
                            className="inline-block mx-1 w-24 border-b-2 border-teal-400 bg-transparent text-center text-teal-700 font-medium focus:outline-none focus:border-teal-600 text-sm"
                            placeholder=""
                          />
                        )}
                        {parts[1]}
                      </p>
                      {colChecked && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-gray-400 font-mono">{item.phrase}</span>
                          <span className="text-[10px] text-gray-300">·</span>
                          <span className="text-[10px] text-gray-400">{item.chinese}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
              {colChecked ? (
                <div className="flex items-center gap-3">
                  <span className={`text-xl font-extrabold ${pct >= 0.8 ? 'text-emerald-600' : pct >= 0.5 ? 'text-amber-600' : 'text-red-500'}`}>
                    {colScore.correct}/{colScore.total}
                    <span className="text-sm font-medium text-gray-400 ml-1">分</span>
                  </span>
                  <button onClick={reset}
                    className="text-sm text-teal-600 hover:text-teal-800 font-semibold border border-teal-200 px-4 py-1.5 rounded-lg hover:bg-teal-50 transition-all">
                    重新练习
                  </button>
                  {colBatch < COLLOCATION_BATCHES.length - 1 && (
                    <button onClick={() => switchBatch(colBatch + 1)}
                      className="text-sm text-white bg-teal-600 hover:bg-teal-700 font-semibold px-4 py-1.5 rounded-lg transition-all">
                      下一批 →
                    </button>
                  )}
                </div>
              ) : (
                <p className="text-xs text-gray-400">
                  已答 <span className="font-bold text-gray-600">
                    {currentBatch.items.filter(item => colAnswers[item.id]).length}
                  </span>/{currentBatch.items.length} 题
                </p>
              )}
              {!colChecked && (
                <button onClick={handleSubmit}
                  disabled={currentBatch.items.filter(item => colAnswers[item.id]).length === 0}
                  className={`px-7 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    currentBatch.items.filter(item => colAnswers[item.id]).length > 0
                      ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-sm shadow-teal-200/60'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}>
                  提交答案 ✓
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WordsContent({ level }) {
  const [view, setView] = useState('choose') // 'choose' | 'words' | 'collocation'
  const [vocabChoice, setVocabChoice] = useState(null)

  if (view === 'collocation') {
    return <CollocationsContent onBack={() => setView('choose')} />
  }
  if (view === 'words' && vocabChoice) {
    return <WordsPractice level={level} vocabChoice={vocabChoice} onBack={() => { setVocabChoice(null); setView('choose') }} />
  }
  return (
    <VocabSetChooser
      onSelect={choice => { setVocabChoice(choice); setView('words') }}
      onCollocation={() => setView('collocation')}
    />
  )
}

function WordsPractice({ level, vocabChoice, onBack }) {
  // Build word list based on choice
  function buildWordList() {
    if (vocabChoice.mode === 'must500') {
      return mustSpell500.map(w => ({
        word: w.word, part: w.part, chinese: w.chinese,
        phonetic: '', english: w.sentence, sentence: w.sentence,
        topic: w.topicTitleZh,
      }))
    }
    if (vocabChoice.mode === 'reading288') {
      return READING_FREQ_288.map(w => ({
        word: w.word, part: w.part, chinese: w.chinese,
        phonetic: w.phonetic, english: w.sentence, sentence: w.sentence,
        topic: '阅读高频词',
      }))
    }
    if (vocabChoice.mode === 'topic') {
      const t = vocabChoice.topic
      return t.words.map(w => ({
        word: w.word, part: w.part, chinese: w.chinese,
        phonetic: '', english: w.sentence, sentence: w.sentence,
        topic: t.titleZh,
      }))
    }
    if (vocabChoice.mode === 'irregular') {
      return irregularVerbWords
    }
    // official / default
    return (cambridgeWordsByLevel[level] || cambridgeWordsByLevel.KET)
      .filter(w => w.word && (w.chinese || w.english))
  }

  const allWords = buildWordList()

  const [dailyCount, setDailyCount] = useState(() => {
    try { return parseInt(localStorage.getItem('cambridge_daily') || '20') } catch { return 20 }
  })
  const [index, setIndex]         = useState(0)
  const [answer, setAnswer]       = useState('')
  const [checked, setChecked]     = useState(false)
  const [correct, setCorrect]     = useState(false)
  const [results, setResults]     = useState([])
  const [showResult, setShowResult] = useState(false)
  const [activePanel, setActivePanel] = useState('tips')
  const [openHints, setOpenHints] = useState(new Set())
  const [masteryRecords, setMasteryRecords] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mars_vocab_mastery_v1') || '{}') } catch { return {} }
  })
  const inputRef = useRef(null)
  const startRef = useRef(Date.now())

  const words   = allWords.slice(0, dailyCount)
  const current = words[index]
  const progress = (index / words.length) * 100
  const levelInfo = LEVELS.find(l => l.abbr === level) || LEVELS[0]
  const libraryName = vocabChoice.mode === 'topic' ? vocabChoice.topic.titleZh
    : vocabChoice.mode === 'must500' ? 'KET 核心词汇'
    : vocabChoice.mode === 'reading288' ? '阅读常用词'
    : vocabChoice.mode === 'irregular' ? '不规则动词'
    : 'A2 综合词表'
  const libraryRecords = allWords.map(w => masteryRecords[w.word.toLowerCase()]).filter(Boolean)
  const learnedCount = libraryRecords.length
  const masteredCount = libraryRecords.filter(r => r.mastered).length
  const reviewCount = libraryRecords.filter(r => r.needsReview).length
  const masteryPercent = allWords.length ? Math.round(masteredCount / allWords.length * 100) : 0

  // Focus input on new word
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 80)
    return () => clearTimeout(t)
  }, [index])

  // Re-focus after check
  useEffect(() => {
    if (checked) inputRef.current?.focus()
  }, [checked])

  function handleCheck() {
    if (!answer.trim()) return
    const isCorrect = answer.trim().toLowerCase() === current.word.toLowerCase()
    setCorrect(isCorrect); setChecked(true)
    if (isCorrect) playCorrect(); else playWrong()
  }

  function handleNext() {
    const usedHint = openHints.size > 0
    const updated = [...results, { word: current.word, chinese: current.chinese, answer, correct, usedHint }]
    recordMastery(current.word, correct, usedHint)
    setResults(updated)
    if (index + 1 >= words.length) {
      try { localStorage.setItem('mars_vocab_last_result', JSON.stringify({ total: updated.length, accuracy: Math.round(updated.filter(r => r.correct).length / updated.length * 100), wrongCount: updated.filter(r => !r.correct).length, completedAt: new Date().toISOString() })) } catch { /* local storage may be unavailable */ }
      setShowResult(true)
    } else {
      setIndex(i => i + 1)
      setAnswer(''); setChecked(false); setCorrect(false); setOpenHints(new Set())
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter') { if (!checked) handleCheck(); else handleNext() }
    // H key = toggle phonetic hint
    if ((e.key === 'h' || e.key === 'H') && !checked) toggleHint('phonetic')
  }

  function toggleHint(key) {
    setOpenHints(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  function revealSpellHint() {
    if (!openHints.has('firstLetter')) toggleHint('firstLetter')
    else if (!openHints.has('lastLetter')) toggleHint('lastLetter')
    else if (!openHints.has('partial')) toggleHint('partial')
  }

  function recordMastery(word, isCorrect, usedHint) {
    const key = word.toLowerCase()
    setMasteryRecords(prev => {
      const old = prev[key] || { attempts: 0, streak: 0, mastered: false, needsReview: false }
      const cleanCorrect = isCorrect && !usedHint
      const streak = cleanCorrect ? old.streak + 1 : 0
      const next = {
        ...prev,
        [key]: {
          attempts: old.attempts + 1,
          streak,
          mastered: streak >= 2,
          needsReview: !cleanCorrect,
          lastSeen: new Date().toISOString(),
        },
      }
      try { localStorage.setItem('mars_vocab_mastery_v1', JSON.stringify(next)) } catch { /* local storage may be unavailable */ }
      return next
    })
  }

  function changeDailyCount(n) {
    setDailyCount(n)
    try { localStorage.setItem('cambridge_daily', String(n)) } catch {}
  }

  function restart() {
    setIndex(0); setAnswer(''); setChecked(false); setCorrect(false)
    setResults([]); setShowResult(false); setActivePanel('tips'); setOpenHints(new Set())
    startRef.current = Date.now()
  }

  // ── Result screen ──
  if (showResult) {
    const score = results.filter(r => r.correct).length
    const pct   = Math.round((score / results.length) * 100)
    const wrong = results.filter(r => !r.correct)
    return (
      <div className="max-w-xl mx-auto px-6 py-10">
        {/* Score header */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center mb-4">
          <div className="text-5xl mb-3">{pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
          <div className="text-6xl font-extrabold text-gray-900 mb-1">
            {score}<span className="text-3xl text-gray-300 font-normal"> / {results.length}</span>
          </div>
          <div className={`text-xl font-bold mt-2 ${pct===100?'text-emerald-600':pct>=60?'text-blue-600':'text-orange-500'}`}>
            正确率 {pct}%
          </div>
          <div className="text-sm text-gray-400 mt-1">{
            vocabChoice.mode === 'topic' ? vocabChoice.topic.titleZh :
            vocabChoice.mode === 'must500' ? 'KET 核心词汇' :
            vocabChoice.mode === 'reading288' ? '阅读高频词' :
            vocabChoice.mode === 'irregular' ? '不规则动词' : 'A2 综合词表'
          } · {words.length} 词</div>
        </div>

        {/* Wrong words */}
        {wrong.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-gray-800">需要加强</span>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">{wrong.length} 词</span>
            </div>
            <div className="space-y-2">
              {wrong.map((r, i) => (
                <div key={i} className="flex items-center gap-3 bg-red-50 rounded-xl px-4 py-2.5">
                  <button onClick={() => speak(r.word)} className="text-gray-400 hover:text-blue-500 transition-colors flex-shrink-0">🔊</button>
                  <span className="text-sm font-bold text-gray-900 tracking-wide">{r.word}</span>
                  <span className="text-xs text-gray-400">{r.chinese}</span>
                  <span className="text-xs text-red-400 font-mono ml-auto line-through">{r.answer || '（空）'}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button onClick={restart}
          className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] transition-colors text-base mb-2">
          再练一次 →
        </button>
        <button onClick={onBack}
          className="w-full py-3 bg-white border border-gray-200 text-gray-600 font-semibold rounded-2xl hover:bg-gray-50 transition-colors text-sm">
          换个词汇集
        </button>
        <p className="text-center text-xs text-gray-400 mt-3">或切换左侧其他模块继续练习</p>
      </div>
    )
  }

  // ── Practice screen ──
  const wordLen = current.word.length
  const letterSize = wordLen <= 6 ? 'text-4xl w-10' : wordLen <= 9 ? 'text-3xl w-9' : wordLen <= 12 ? 'text-2xl w-8' : 'text-xl w-7'

  return (
    <div className="flex h-full">
      {/* 主练习区 */}
      <div className="flex-1 flex flex-col">
        {/* 进度条 */}
        <div className="h-1 bg-gray-100">
          <motion.div className="h-full bg-[#064e3b]" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
        </div>

        {/* 当前词库掌握概览 */}
        <div className="mx-6 mt-4 bg-white border border-gray-200 rounded-2xl px-5 py-3 flex items-center gap-5 shadow-sm">
          <div className="min-w-[145px] pr-5 border-r border-gray-100">
            <div className="text-[10px] font-extrabold tracking-[.13em] text-emerald-700">当前词库</div>
            <div className="mt-1 text-sm font-extrabold text-gray-900 truncate">{libraryName}</div>
          </div>
          <div className="grid grid-cols-4 gap-5 flex-1">
            {[
              ['总词数', allWords.length],
              ['已学习', learnedCount],
              ['已掌握', masteredCount],
              ['待复习', reviewCount],
            ].map(([label,value]) => <div key={label}><div className="text-[10px] text-gray-400">{label}</div><div className="mt-0.5 text-lg font-extrabold text-gray-900">{value}</div></div>)}
          </div>
          <div className="w-36 hidden xl:block">
            <div className="flex justify-between text-[10px] text-gray-400 mb-1.5"><span>整体掌握</span><strong className="text-emerald-700">{masteryPercent}%</strong></div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-600 rounded-full transition-all" style={{width:`${masteryPercent}%`}} /></div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-8 py-4">
          <AnimatePresence mode="wait">
            <motion.div key={index}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-lg"
            >
              {/* 题号 + set badge + back */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <button onClick={onBack} className="text-gray-300 hover:text-gray-600 transition-colors text-xs" title="换词汇集">← 换词汇集</button>
                  <span className="text-sm font-bold text-gray-400">{index + 1} / {words.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => speak(current.word)}
                    className="text-gray-300 hover:text-blue-500 transition-colors text-lg" title="播放发音">
                    🔊
                  </button>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${levelInfo.light}`}>
                    {levelInfo.code} {level}
                  </span>
                </div>
              </div>

              {/* 主卡片 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-4 overflow-hidden">
                <div className="px-6 pt-7 pb-4 text-center">
                  {/* 词性 */}
                  <div className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">{current.part}</div>

                  {/* 中文主提示 */}
                  <div className={`font-extrabold text-gray-900 leading-tight mb-1 ${
                    (current.chinese || '').length > 10 ? 'text-3xl' : 'text-4xl'
                  }`}>
                    {current.chinese || current.english || '？'}
                  </div>

                  {/* 音标 — 始终显示（如有）*/}
                  {current.phonetic && (
                    <div className="text-sm text-gray-400 font-mono mt-2 tracking-wide">
                      {openHints.has('phonetic') ? (
                        <span className="text-violet-600 font-medium">{current.phonetic}</span>
                      ) : (
                        <button onClick={() => toggleHint('phonetic')}
                          className="text-gray-300 hover:text-violet-500 transition-colors text-xs">
                          [H] 显示音标
                        </button>
                      )}
                    </div>
                  )}

                  {/* 英文释义展开 */}
                  <AnimatePresence>
                  {openHints.has('english') && current.english && (
                    <motion.div key="english"
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 py-3 px-4 bg-blue-50 rounded-xl text-blue-700 text-sm leading-relaxed text-left">
                        <span className="text-[10px] font-extrabold tracking-[.12em] text-blue-400 mr-2">例句</span>
                        {current.sentence || current.english}
                      </motion.div>
                  )}
                  </AnimatePresence>
                </div>

                {/* 字母格 */}
                <div className="border-t border-gray-50 px-6 pb-5 cursor-text"
                  onClick={() => inputRef.current?.focus()}>
                  <div className="flex justify-center gap-2 flex-wrap pt-4">
                    {current.word.split('').map((letter, i) => {
                      const typed = answer[i] || ''
                      const isRight = checked && typed.toLowerCase() === letter.toLowerCase()
                      const isWrong = checked && !isRight && typed
                      const letterColor = !checked && typed ? 'text-blue-600'
                        : isRight ? 'text-emerald-600'
                        : isWrong ? 'text-red-500'
                        : checked ? 'text-emerald-600'
                        : 'text-transparent'
                      const lineColor = isRight || (checked && correct) ? 'bg-emerald-400'
                        : isWrong ? 'bg-red-400'
                        : typed ? 'bg-blue-400' : 'bg-gray-200'
                      return (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <span className={`font-bold text-center leading-none transition-all ${letterColor} ${letterSize}`}>
                            {typed || (checked && !typed ? letter : ' ')}
                          </span>
                          <div className={`h-[3px] rounded-full transition-all ${lineColor} ${
                            wordLen <= 6 ? 'w-10' : wordLen <= 9 ? 'w-9' : wordLen <= 12 ? 'w-8' : 'w-7'
                          }`} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* 隐藏 input */}
              <input ref={inputRef} type="text" value={answer}
                onChange={e => !checked && setAnswer(e.target.value.slice(0, current.word.length))}
                onKeyDown={handleKey}
                className="sr-only" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
              />

              {/* 答对/错反馈 */}
              <AnimatePresence>
                {checked && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl mb-4 font-semibold text-base ${
                      correct
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                        : 'bg-red-50 border border-red-200 text-red-700'
                    }`}
                  >
                    {correct ? (
                      <>
                        <span className="text-emerald-500 text-xl">✓</span>
                        <span>正确！</span>
                      </>
                    ) : (
                      <>
                        <span className="text-red-400 text-xl">✗</span>
                        <span>正确答案：<span className="font-extrabold tracking-widest ml-1">{current.word}</span></span>
                        <button onClick={() => speak(current.word)}
                          className="text-red-400 hover:text-red-600 transition-colors ml-1">🔊</button>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 按钮 */}
              {!checked ? (
                <div className="flex gap-2">
                  <button onClick={handleCheck} disabled={!answer}
                    className="flex-1 py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] transition-all disabled:opacity-30 text-base">
                    确认拼写
                  </button>
                  <button
                    onClick={() => {
                      // Skip: record as wrong without showing answer screen
                      const updated = [...results, { word: current.word, chinese: current.chinese, answer: '', correct: false, usedHint: openHints.size > 0 }]
                      setResults(updated)
                      recordMastery(current.word, false, openHints.size > 0)
                      if (index + 1 >= words.length) {
                        try { localStorage.setItem('mars_vocab_last_result', JSON.stringify({ total: updated.length, accuracy: Math.round(updated.filter(r => r.correct).length / updated.length * 100), wrongCount: updated.filter(r => !r.correct).length, completedAt: new Date().toISOString() })) } catch { /* local storage may be unavailable */ }
                        setShowResult(true)
                      } else {
                        setIndex(i => i + 1)
                        setAnswer(''); setChecked(false); setCorrect(false); setOpenHints(new Set())
                      }
                      playWrong()
                    }}
                    title="跳过这个词（计为错误）"
                    className="px-4 py-4 bg-gray-100 text-gray-500 font-semibold rounded-2xl hover:bg-gray-200 transition-all text-sm"
                  >
                    跳过
                  </button>
                </div>
              ) : (
                <button onClick={handleNext}
                  className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base">
                  {index + 1 < words.length ? '下一题 →' : '查看结果 →'}
                </button>
              )}

              <p className="text-center text-xs text-gray-300 mt-3">
                <kbd className="bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded text-[10px] font-mono">Enter</kbd>
                {' '}确认 · 继续 &nbsp;
                <kbd className="bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded text-[10px] font-mono">H</kbd>
                {' '}显示音标
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 右侧面板 */}
      <aside className="w-64 border-l border-gray-100 flex flex-col bg-white flex-shrink-0">
        {/* 标签 */}
        <div className="grid grid-cols-3 border-b border-gray-100">
          {[
            { id: 'tips',     label: '提示', icon: '💡' },
            { id: 'progress', label: '进度', icon: '📊' },
            { id: 'library',  label: '词库', icon: '▤' },
          ].map(tab => (
            <button key={tab.id}
              onClick={() => setActivePanel(tab.id)}
              className={`flex flex-col items-center gap-0.5 py-3 text-xs font-semibold transition-colors border-b-2 ${
                activePanel === tab.id
                  ? 'border-[#064e3b] text-[#064e3b]'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className="text-base leading-none">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* 面板内容 */}
        <div className="flex-1 p-4 overflow-y-auto">

          {/* TIPS */}
          {activePanel === 'tips' && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">提示</div>

              {/* 音标 */}
              <button
                onClick={() => toggleHint('phonetic')}
                className={`w-full rounded-lg border text-left transition-all overflow-hidden ${
                  openHints.has('phonetic')
                    ? 'border-gray-300 bg-white'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between px-3 py-2.5">
                  <span className="text-sm font-semibold text-gray-700">🔤 音标</span>
                  <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform ${openHints.has('phonetic') ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
                {openHints.has('phonetic') && (
                  <div className="px-3 py-3 text-sm border-t border-gray-100">
                    {current.phonetic ? <span className="font-mono text-gray-800">{current.phonetic}</span> : <span className="text-xs text-amber-700">音标数据待校对</span>}
                  </div>
                )}
              </button>

              {/* 英文例句 */}
              {(current.sentence || current.english) && (
                <button
                  onClick={() => toggleHint('english')}
                  className={`w-full rounded-lg border text-left transition-all overflow-hidden ${
                    openHints.has('english')
                      ? 'border-gray-300 bg-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between px-3 py-2.5">
                    <span className="text-sm font-semibold text-gray-700">📖 英文例句</span>
                    <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform ${openHints.has('english') ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  {openHints.has('english') && (
                    <div className="px-3 py-3 text-xs text-gray-600 leading-relaxed border-t border-gray-100">{current.sentence || current.english}</div>
                  )}
                </button>
              )}

              {/* 分级拼写提示 */}
              <button
                onClick={revealSpellHint}
                disabled={openHints.has('partial')}
                className="w-full rounded-lg border border-gray-200 bg-white hover:border-gray-300 disabled:hover:border-gray-200 text-left transition-all overflow-hidden"
              >
                <div className="flex items-center justify-between px-3 py-2.5">
                  <span className="text-sm font-semibold text-gray-700">🔡 拼写提示</span>
                  <span className="text-[10px] text-gray-400">{openHints.has('partial') ? '已显示三级' : openHints.has('lastLetter') ? '显示更多' : openHints.has('firstLetter') ? '显示首尾' : '逐级显示'}</span>
                </div>
                {openHints.has('firstLetter') && (
                  <div className="px-3 py-3 text-lg font-extrabold text-gray-800 font-mono tracking-[.2em] border-t border-gray-100">
                    {openHints.has('partial')
                      ? current.word.split('').map((letter, i) => i === 0 || i === current.word.length - 1 || i % 2 === 0 ? letter.toUpperCase() : '_').join(' ')
                      : openHints.has('lastLetter')
                        ? `${current.word[0].toUpperCase()} ${Array(Math.max(0,current.word.length-2)).fill('_').join(' ')} ${current.word[current.word.length-1].toUpperCase()}`
                        : `${current.word[0].toUpperCase()} ${Array(Math.max(0,current.word.length-1)).fill('_').join(' ')}`}
                  </div>
                )}
              </button>

              {/* 词频 */}
              {current.freq > 0 && (
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 mt-4">
                  <div className="text-xs font-bold text-gray-600 mb-1.5">词频排名</div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#064e3b] rounded-full"
                      style={{ width: `${Math.min(100, Math.log10(current.freq / 1e-7) / Math.log10(1e6) * 100)}%` }} />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {current.freq > 1e-3 ? '超高频' : current.freq > 1e-4 ? '高频' : current.freq > 1e-5 ? '中频' : '低频'}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* PROGRESS */}
          {activePanel === 'progress' && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">本次练习</div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>本次练习</span>
                  <span className="font-bold text-gray-800">{index + 1} / {words.length}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#064e3b] rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-emerald-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-emerald-600">{results.filter(r => r.correct).length}</div>
                  <div className="text-xs text-emerald-600 mt-0.5">正确</div>
                </div>
                <div className="bg-red-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-red-500">{results.filter(r => !r.correct).length}</div>
                  <div className="text-xs text-red-500 mt-0.5">错误</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-gray-500 mb-1">已完成</div>
                <div className="text-sm font-bold text-gray-800">
                  {results.length} <span className="text-gray-400 font-normal">/ {words.length} 词</span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{libraryName}</div>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between text-xs text-gray-500"><span>词库整体掌握</span><strong className="text-emerald-700">{masteryPercent}%</strong></div>
                <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-600 rounded-full" style={{width:`${masteryPercent}%`}} /></div>
                <div className="mt-3 grid grid-cols-3 gap-1 text-center"><div><strong className="block text-gray-900">{learnedCount}</strong><span className="text-[10px] text-gray-400">已学习</span></div><div><strong className="block text-emerald-700">{masteredCount}</strong><span className="text-[10px] text-gray-400">已掌握</span></div><div><strong className="block text-amber-600">{reviewCount}</strong><span className="text-[10px] text-gray-400">待复习</span></div></div>
              </div>
            </div>
          )}

          {/* LIBRARY */}
          {activePanel === 'library' && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">词库掌握</div>
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                <div className="text-sm font-extrabold text-gray-900">{libraryName}</div>
                <div className="mt-3 text-3xl font-extrabold text-emerald-700">{masteredCount}<span className="text-base font-medium text-gray-400"> / {allWords.length}</span></div>
                <div className="text-xs text-gray-500 mt-1">词汇已经掌握</div>
              </div>
              <div className="grid grid-cols-2 gap-2"><div className="rounded-xl bg-gray-50 p-3"><div className="text-xl font-extrabold">{learnedCount}</div><div className="text-[10px] text-gray-400 mt-1">已经学习</div></div><div className="rounded-xl bg-amber-50 p-3"><div className="text-xl font-extrabold text-amber-700">{reviewCount}</div><div className="text-[10px] text-gray-400 mt-1">等待复习</div></div></div>
              <p className="text-[11px] text-gray-400 leading-relaxed">同一个词在不同练习中连续两次答对且未使用提示，计为“已掌握”。</p>
              <div className="border-t border-gray-100 pt-4">
              <div>
                <div className="text-xs font-bold text-gray-700 mb-2">每次练习词数</div>
                <div className="grid grid-cols-2 gap-2">
                  {DAILY_OPTIONS.map(n => (
                    <button key={n} onClick={() => changeDailyCount(n)}
                      className={`py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        dailyCount === n
                          ? 'bg-[#064e3b] text-white'
                          : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-[#064e3b]/40'
                      }`}
                    >
                      {n} 词
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">更改后下次开始生效</p>
              </div>
                <button onClick={onBack} className="mt-3 w-full py-2 text-xs text-[#064e3b] font-semibold border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-colors">
                  换个词汇集
                </button>
              </div>
            </div>
          )}

        </div>
      </aside>
    </div>
  )
}

/* ════════════════════════════════════════════
   级别仪表盘（首屏，无侧栏）
════════════════════════════════════════════ */

const LEVEL_FULL = [
  { code: 'A2', abbr: 'KET', name: 'Key',         from: '#064e3b', to: '#0d7a5c', accent: '#10b981', dot: 'bg-emerald-500', textColor: 'text-emerald-600', lightBg: 'bg-emerald-50' },
  { code: 'B1', abbr: 'PET', name: 'Preliminary', from: '#0c2a48', to: '#144270', accent: '#3b82f6', dot: 'bg-blue-500',    textColor: 'text-blue-600',    lightBg: 'bg-blue-50'    },
  { code: 'B2', abbr: 'FCE', name: 'First',       from: '#18164a', to: '#252065', accent: '#6366f1', dot: 'bg-indigo-500', textColor: 'text-indigo-600',  lightBg: 'bg-indigo-50'  },
  { code: 'C1', abbr: 'CAE', name: 'Advanced',    from: '#28104e', to: '#3e1872', accent: '#8b5cf6', dot: 'bg-violet-500', textColor: 'text-violet-600',  lightBg: 'bg-violet-50'  },
  { code: 'C2', abbr: 'CPE', name: 'Proficiency', from: '#18060e', to: '#2e0d1e', accent: '#f43f5e', dot: 'bg-rose-500',   textColor: 'text-rose-600',    lightBg: 'bg-rose-50'    },
]

const LEVEL_INFO = {
  KET: {
    headline: 'A2 Key — 剑桥英语入门',
    desc: 'KET 是剑桥英语考试体系的入门级别，证明你能在简单的日常场合中读写和理解英语。通过 KET 标志着英语学习的重要第一步，建立自信、打好基础。',
    words: '1,500', target: '初学者 / 小学高年级', skills: '听力 · 阅读 · 写作 · 口语',
  },
  PET: {
    headline: 'B1 Preliminary — 初级水平',
    desc: 'PET 证明你能在工作、学习或旅行中自信地处理日常英语。适合已有一定英语基础、希望进一步提升的学习者。',
    words: '3,500', target: '初中生 / 基础提升', skills: '听力 · 阅读 · 写作 · 口语',
  },
  FCE: {
    headline: 'B2 First — 独立使用英语',
    desc: 'FCE 证明你具备独立使用英语的能力，被全球众多大学和企业认可，是留学申请的重要资质。',
    words: '5,000', target: '高中生 / 出国申请', skills: '听力 · 阅读 · 写作 · 口语',
  },
  CAE: {
    headline: 'C1 Advanced — 高级水平',
    desc: 'CAE 证明你能流利、自信地使用英语，满足高水平学术和专业场合的需求，受到数千家院校和企业认可。',
    words: '7,500', target: '大学生 / 职场申请', skills: '听力 · 阅读 · 写作 · 口语',
  },
  CPE: {
    headline: 'C2 Proficiency — 精通英语',
    desc: 'CPE 是剑桥英语考试最高级别，代表接近英语母语者水平，适用于最高要求的学术研究和专业认证场合。',
    words: '10,000+', target: '学术研究 / 语言认证', skills: '听力 · 阅读 · 写作 · 口语',
  },
}

const DASH_SECTIONS = [
  {
    id: 'words', icon: '📖', title: '单词练习',
    parts: [
      { label: '立即开始', fullWidth: true, available: true, link: () => '/cambridge/words' },
    ],
  },
  {
    id: 'grammar', icon: '📐', title: '语法训练', onlyKET: true,
    parts: [
      { label: '名词',     available: true,  link: () => '/cambridge/grammar' },
      { label: '冠词',     available: false },
      { label: '代词',     available: false },
      { label: '介词',     available: false },
      { label: '形容词',   available: false },
      { label: '副词',     available: false },
      { label: '动词时态', available: false },
      { label: '情态动词', available: false },
    ],
  },
  {
    id: 'reading', icon: '📄', title: '阅读练习', onlyKET: true,
    parts: [
      { label: 'Part 1', available: true,  link: () => '/cambridge-reading' },
      { label: 'Part 2', available: true,  link: () => '/cambridge-reading' },
      { label: 'Part 3', available: true,  link: () => '/cambridge-reading' },
      { label: 'Part 4', available: true,  link: () => '/cambridge-reading' },
      { label: 'Part 5', available: true,  link: () => '/cambridge-reading', fullWidth: true },
    ],
  },
  {
    id: 'listening', icon: '🎧', title: '听力练习',
    parts: [
      { label: 'Part 1 · 图片选择', available: true,  link: () => '/cambridge/listening' },
      { label: 'Part 2 · 配对题',   available: true,  link: () => '/cambridge/listening' },
      { label: 'Part 3 · 填空题',   available: true,  link: () => '/cambridge/listening' },
      { label: 'Part 4 · 单选题',   available: true,  link: () => '/cambridge/listening' },
      { label: 'Part 5 · 配对题',   available: true,  link: () => '/cambridge/listening', fullWidth: true },
      { label: '✍️ 听写专项练习', available: true,  link: () => '/cambridge/dictation', fullWidth: true },
    ],
  },
  {
    id: 'writing', icon: '✍️', title: '写作练习',
    parts: [
      { label: 'Part 6 · 写邮件', available: true, link: () => '/cambridge/exams/ket-3-test1?tab=writing&part=6' },
      { label: 'Part 7 · 看图写故事', available: true, link: () => '/cambridge/exams/ket-3-test1?tab=writing&part=7' },
    ],
  },
  {
    id: 'speaking', icon: '🎙️', title: '口语练习',
    parts: [
      { label: 'Part 1 · 个人问答', available: true, link: () => '/cambridge/exams/ket-3-test1?tab=speaking' },
      { label: 'Part 2 · 话题讨论', available: true, link: () => '/cambridge/exams/ket-3-test1?tab=speaking&part=2' },
    ],
  },
  {
    id: 'exams', icon: '📝', title: '真题练习',
    parts: [
      { label: 'KET 3 · Test 1', available: true, link: () => '/cambridge/exams/ket-3-test1' },
      { label: 'KET 3 · Test 2', available: false },
      { label: 'KET 3 · Test 3', available: false },
      { label: 'KET 3 · Test 4', available: false },
    ],
  },
]

// Legacy multi-level dashboard retained temporarily while the KET learning home is validated.
// eslint-disable-next-line no-unused-vars
function LevelDashboard({ level, setLevel }) {
  const navigate  = useNavigate()
  const cur       = LEVEL_FULL.find(l => l.abbr === level) || LEVEL_FULL[0]
  const info      = LEVEL_INFO[level] || LEVEL_INFO.KET

  return (
    <div className="min-h-screen bg-[#f8f9fc]">

      {/* ── 顶栏 ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors group">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">首页</span>
          </Link>
          <span className="font-sans font-bold text-gray-900">火星<span className="text-[#064e3b]">剑桥</span></span>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-400 hover:text-gray-700 font-medium transition-colors">登录</button>
            <button className="px-4 py-1.5 bg-[#064e3b] text-white text-sm font-semibold rounded-lg hover:bg-[#065f46] transition-colors">
              免费注册
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">

        {/* ── 级别选择 tabs ── */}
        <div className="flex gap-2 mb-7 overflow-x-auto pb-1">
          {LEVEL_FULL.map(l => (
            <motion.button key={l.abbr}
              whileTap={{ scale: 0.96 }}
              onClick={() => setLevel(l.abbr)}
              style={level === l.abbr ? { background: `linear-gradient(135deg, ${l.from}, ${l.to})` } : {}}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                level === l.abbr
                  ? 'text-white border-transparent shadow-md'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full"
                style={{ background: level === l.abbr ? 'rgba(255,255,255,0.5)' : l.accent }} />
              {l.code} {l.abbr}
            </motion.button>
          ))}
        </div>

        {/* ── 级别简介卡 ── */}
        <AnimatePresence mode="wait">
          <motion.div key={level}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{ background: `linear-gradient(135deg, ${cur.from} 0%, ${cur.to} 100%)` }}
            className="relative rounded-2xl overflow-hidden mb-8 text-white shadow-xl"
          >
            {/* subtle grid texture overlay */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)' }} />

            <div className="relative px-7 pt-7 pb-5">
              {/* top row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-white/40 mb-2">
                    Cambridge English
                  </div>
                  <h1 className="font-sans italic text-[1.75rem] font-bold leading-tight tracking-tight">
                    {info.headline}
                  </h1>
                </div>
                <span className="text-[72px] font-extrabold leading-none text-white/[0.07] select-none hidden sm:block -mt-1 -mr-1 tracking-widest">
                  {cur.abbr}
                </span>
              </div>

              {/* desc */}
              <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-2xl font-sans">
                {info.desc}
              </p>

              {/* thin divider */}
              <div className="border-t border-white/10 mb-5" />

              {/* stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '核心词汇', value: info.words + ' 词' },
                  { label: '考试科目', value: info.skills },
                  { label: '适合人群', value: info.target },
                ].map((s, i) => (
                  <div key={i} className="bg-white/[0.08] border border-white/[0.10] rounded-xl px-4 py-3">
                    <div className="text-white/40 text-[9px] font-semibold uppercase tracking-widest mb-1.5 font-sans">{s.label}</div>
                    <div className="text-white/90 font-bold text-sm leading-snug font-sans">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── 专项练习分区 ── */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {DASH_SECTIONS.map((sec, si) => {
            const sectionAvail = !sec.onlyKET || level === 'KET'
            return (
              <motion.div key={sec.id}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.05 }}
                className={`px-6 py-5 ${si < DASH_SECTIONS.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                {/* 标题行 */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{sec.icon}</span>
                  <span className="font-bold text-gray-900 text-base">{sec.title}</span>
                  <div className="flex-1 flex items-center gap-2 ml-2">
                    <span className="text-xs text-gray-400">0%</span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#064e3b] rounded-full" style={{ width: '0%' }} />
                    </div>
                    <span className="text-xs text-gray-400">100%</span>
                  </div>
                </div>

                {/* Parts 按钮 */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {sec.parts.map((part, pi) => {
                    const partAvail = sectionAvail && part.available
                    const dest = partAvail && part.link ? part.link(level) : null
                    return (
                      <button key={pi}
                        onClick={() => dest && navigate(dest)}
                        className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                          part.fullWidth ? 'w-full' : 'flex-1 min-w-[80px]'
                        } ${
                          partAvail
                            ? 'bg-[#064e3b] text-white hover:bg-[#065f46] cursor-pointer'
                            : 'bg-gray-100 text-gray-400 cursor-default'
                        }`}
                      >
                        {part.label}
                      </button>
                    )
                  })}
                </div>

                {/* 得分行 */}
                <div className="flex justify-end gap-4 text-xs text-gray-400">
                  <span>Level: <strong className="text-gray-600">N/A</strong></span>
                  <span>Score: <strong className="text-gray-600">N/A</strong></span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── 分数换算计算器 ── */}
        <ScoreCalculator level={level} />

      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   成绩换算计算器（支持全部五级）
════════════════════════════════════════════ */

function ScoreCalculator({ level }) {
  const [raw, setRaw] = useState({ reading: '', writing: '', listening: '', speaking: '' })
  const cfg = EXAM_CONFIGS[level] || EXAM_CONFIGS['KET']

  // Reset inputs when switching levels
  useEffect(() => {
    setRaw({ reading: '', writing: '', listening: '', speaking: '' })
  }, [level])

  const converted = {}
  cfg.sections.forEach(s => { converted[s.key] = cfg.convert(s.key, raw[s.key]) })

  const validScores = Object.values(converted).filter(v => v !== null)
  const finalScore = validScores.length === 4 ? Math.round(validScores.reduce((a, b) => a + b, 0) / 4) : null
  const finalGrade = finalScore !== null ? getExamGrade(finalScore, level) : null
  const hasAny = Object.values(raw).some(v => v !== '')

  function barPct(val) {
    if (val === null) return 0
    return Math.max(0, Math.min(100, Math.round((val - cfg.scaleMin) / (cfg.scaleMax - cfg.scaleMin) * 100)))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      className="mt-4 bg-white rounded-2xl border border-gray-100 overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">🎯</span>
          <div>
            <div className="font-bold text-gray-900 text-base">成绩换算计算器</div>
            <div className="text-xs text-gray-400 mt-0.5">输入各科卷面分，自动换算标准分和最终成绩</div>
          </div>
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${cfg.exact ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
          {cfg.exact ? '官方精确换算' : '近似换算'}
        </span>
      </div>

      <div className="px-6 py-5">
        {/* Section inputs */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {cfg.sections.map(s => {
            const std = converted[s.key]
            const grade = std !== null ? getExamGrade(std, level) : null
            const invalid = raw[s.key] !== '' && std === null
            const pct = barPct(std)
            return (
              <div key={s.key} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{s.emoji}</span>
                    <span className="font-bold text-gray-800 text-sm">{s.label}</span>
                    <span className="text-[10px] text-gray-400">{s.note}</span>
                  </div>
                  {grade && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: grade.bg, color: grade.color }}>
                      {grade.label}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input type="number" min={0} max={s.max}
                      value={raw[s.key]}
                      onChange={e => setRaw(prev => ({ ...prev, [s.key]: e.target.value }))}
                      placeholder="0"
                      className={`w-full px-3 py-2 rounded-lg border text-sm font-bold text-center focus:outline-none transition-colors ${
                        invalid ? 'border-red-300 bg-red-50 text-red-500' :
                        std !== null ? 'border-emerald-300 bg-white text-gray-900' :
                        'border-gray-200 bg-white text-gray-700'
                      }`}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-300 font-normal">/{s.max}</span>
                  </div>
                  <div className="text-right min-w-[52px]">
                    {std !== null ? (
                      <div className="text-xl font-extrabold" style={{ color: grade?.color }}>{std}</div>
                    ) : (
                      <div className="text-xl font-extrabold text-gray-200">—</div>
                    )}
                    <div className="text-[9px] text-gray-400">标准分</div>
                  </div>
                </div>

                {std !== null && (
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
                    <motion.div className="h-full rounded-full"
                      style={{ background: grade?.color || '#d1d5db' }}
                      initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                )}
                {invalid && <p className="text-[10px] text-red-400 mt-1">低于最低有效分</p>}
              </div>
            )
          })}
        </div>

        {/* Final score */}
        <div className={`rounded-xl p-5 flex items-center justify-between transition-all ${
          finalScore !== null ? 'border-2' : 'bg-gray-50 border border-gray-100'
        }`}
          style={finalScore !== null ? { background: finalGrade.bg, borderColor: finalGrade.color + '40' } : {}}
        >
          <div>
            <div className="text-xs font-semibold text-gray-500 mb-0.5">最终标准分</div>
            <div className="text-[10px] text-gray-400">= (阅读 + 写作 + 听力 + 口语) ÷ 4</div>
            {finalScore !== null && (
              <div className="mt-2 text-xs" style={{ color: finalGrade.color }}>
                ({validScores.join(' + ')}) ÷ 4 = <strong>{finalScore}</strong>
              </div>
            )}
            {finalGrade && (
              <div className="mt-1 text-xs text-gray-500">{finalGrade.note}</div>
            )}
          </div>
          <div className="text-right">
            {finalScore !== null ? (
              <>
                <div className="text-4xl font-extrabold" style={{ color: finalGrade.color }}>{finalScore}</div>
                <div className="text-sm font-bold mt-0.5" style={{ color: finalGrade.color }}>{finalGrade.label}</div>
              </>
            ) : (
              <div className="text-3xl font-extrabold text-gray-200">?</div>
            )}
          </div>
        </div>

        {/* Grade legend */}
        <div className="flex flex-wrap gap-2 mt-4">
          {cfg.grades.map((g, i) => (
            <span key={g.label} className="flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full"
              style={{ background: g.bg, color: g.color }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: g.color }} />
              {g.label}{i < cfg.grades.length - 1 ? ` ≥${g.min}` : ''}
            </span>
          ))}
        </div>

        {hasAny && (
          <button onClick={() => setRaw({ reading: '', writing: '', listening: '', speaking: '' })}
            className="mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors underline-offset-2 hover:underline">
            清除重置
          </button>
        )}
      </div>
    </motion.div>
  )
}

/* ── Coming Soon 页面（其他模块）── */
function ComingSoon({ module }) {
  const m = SIDEBAR_MODULES.find(m => m.id === module)
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xs"
      >
        <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center mx-auto mb-5 text-4xl">
          {m?.icon}
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{m?.label}练习</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          该模块正在紧张开发中，即将上线 🚀<br />
          先去练习单词或阅读吧
        </p>
        <div className="flex gap-2 justify-center">
          <Link to="/cambridge/words"
            className="px-4 py-2 bg-[#064e3b] text-white text-sm font-semibold rounded-xl hover:bg-[#065f46] transition-colors">
            单词练习
          </Link>
          <Link to="/cambridge-reading"
            className="px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:border-[#064e3b]/40 hover:text-[#064e3b] transition-colors">
            阅读练习
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

// 级别 slug → abbr 映射
const LEVEL_SLUGS = { ket: 'KET', pet: 'PET', fce: 'FCE', cae: 'CAE', cpe: 'CPE' }

/* ── 主入口组件 ── */
export default function CambridgeApp() {
  const { module } = useParams()

  const [level, setLevel] = useState(() => {
    try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' }
  })

  useEffect(() => {
    try { localStorage.setItem('cambridge_level', level) } catch {}
  }, [level])

  // module 是级别 slug（ket/pet/fce/cae/cpe）→ 显示该级别仪表盘
  const levelFromSlug = module ? LEVEL_SLUGS[module.toLowerCase()] : null
  if (!module || levelFromSlug) {
    return <MyLearningDashboard />
  }

  const content = module === 'words'
    ? <WordsContent level={level} />
    : <ComingSoon module={module} />

  return (
    <CambridgeLayout activeModule={module} level={level} setLevel={setLevel}>
      {content}
    </CambridgeLayout>
  )
}
