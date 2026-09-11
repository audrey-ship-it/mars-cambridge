import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { EXAM_CONFIGS, EXAM_LIST, getExamGrade } from '../data/cambridgeScoreTables'

/* ── 剑桥五级（从高到低，匹配截图顺序）── */
const LEVELS = [
  { code: 'C2', name: 'Proficiency', abbr: 'CPE', hex: '#e11d48', dot: 'bg-rose-500',    btn: 'bg-rose-500    hover:bg-rose-600'    },
  { code: 'C1', name: 'Advanced',    abbr: 'CAE', hex: '#7c3aed', dot: 'bg-violet-500',  btn: 'bg-violet-500  hover:bg-violet-600'  },
  { code: 'B2', name: 'First',       abbr: 'FCE', hex: '#4338ca', dot: 'bg-indigo-500',  btn: 'bg-indigo-500  hover:bg-indigo-600'  },
  { code: 'B1', name: 'Preliminary', abbr: 'PET', hex: '#2563eb', dot: 'bg-blue-500',    btn: 'bg-blue-500    hover:bg-blue-600'    },
  { code: 'A2', name: 'Key',         abbr: 'KET', hex: '#059669', dot: 'bg-emerald-500', btn: 'bg-emerald-500 hover:bg-emerald-600', isNew: true },
]

/* ── 六大模块（用于下方展示）── */
const MODULES = [
  { icon: '📖', title: '单词练习', desc: '听写模式强化记忆，高频词优先，艾宾浩斯复习提醒', tags: ['听写', '词频排序', '错词本'],       color: 'blue',   link: '/cambridge/words',   ready: true },
  { icon: '📐', title: '语法训练', desc: '12大考点 · 55个单元，逐一讲解 + 即时练习',       tags: ['考点分类', '单元练习', '即时反馈'], color: 'teal',   link: '/cambridge/grammar', ready: true },
  { icon: '📄', title: '阅读练习', desc: 'KET官方真题4套，Part 1–5全题型，即时评分解析',   tags: ['真题选择', '填词练习', '即时评分'], color: 'emerald',link: '/cambridge-reading', ready: true },
  { icon: '🎧', title: '听力练习', desc: 'KET听力5个Part全题型，TTS朗读 · 真实考试体验',  tags: ['图片选择', '配对题', '填空题'],     color: 'cyan',   link: '/cambridge/listening', ready: true },
  { icon: '✍️', title: '写作练习', desc: '分步骤引导写作，AI 智能评分，提供范文对比',      tags: ['AI评分', '分步引导', '范文参考'],   color: 'amber',  link: null, badge: 'AI' },
  { icon: '🎙️', title: '口语跟读', desc: '高分范文跟读，影子练习法，逐句评测发音',         tags: ['范文跟读', '影子练习', '发音评测'], color: 'orange', link: null, badge: 'AI' },
  { icon: '📝', title: '真题练习', desc: '剑桥历年真题，模拟考试模式，详细解析每道题',     tags: ['历年真题', '计时模拟', '题目解析'], color: 'rose',   link: null },
]
const colorMap = {
  blue:    { bg: 'bg-blue-50',    icon: 'bg-blue-100 text-blue-600',      tag: 'bg-blue-50 text-blue-600',      border: 'border-blue-100'    },
  cyan:    { bg: 'bg-cyan-50',    icon: 'bg-cyan-100 text-cyan-600',      tag: 'bg-cyan-50 text-cyan-600',      border: 'border-cyan-100'    },
  teal:    { bg: 'bg-teal-50',    icon: 'bg-teal-100 text-teal-600',      tag: 'bg-teal-50 text-teal-600',      border: 'border-teal-100'    },
  emerald: { bg: 'bg-emerald-50', icon: 'bg-emerald-100 text-emerald-600',tag: 'bg-emerald-50 text-emerald-600',border: 'border-emerald-100' },
  amber:   { bg: 'bg-amber-50',   icon: 'bg-amber-100 text-amber-600',    tag: 'bg-amber-50 text-amber-600',    border: 'border-amber-100'   },
  orange:  { bg: 'bg-orange-50',  icon: 'bg-orange-100 text-orange-600',  tag: 'bg-orange-50 text-orange-600',  border: 'border-orange-100'  },
  rose:    { bg: 'bg-rose-50',    icon: 'bg-rose-100 text-rose-600',      tag: 'bg-rose-50 text-rose-600',      border: 'border-rose-100'    },
}

/* ── London Skyline SVG ── 竖版全屏构图 */
export function LondonSkyline({ className = '' }) {
  const BG = '#064e3b'
  const spokes = [0,30,60,90,120,150,180,210,240,270,300,330]
  return (
    <svg viewBox="0 0 560 780" xmlns="http://www.w3.org/2000/svg"
      className={className} preserveAspectRatio="xMidYMax slice">


      {/* ═══ 星星（顶部点缀）═══ */}
      {[[55,30],[130,18],[220,42],[310,14],[400,28],[480,50],[60,72],[195,80],[350,66],[500,58],[90,105],[280,98]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={i%3===0?2.5:1.8} fill="white" opacity={i%2===0?0.45:0.28}/>
      ))}

      {/* ═══ BIG BEN / ELIZABETH TOWER ═══ */}
      {/* 底座 */}
      <rect x="232" y="668" width="96" height="42" fill="white"/>
      <rect x="220" y="698" width="120" height="22" fill="white"/>
      {/* 主轴 */}
      <rect x="252" y="278" width="56" height="390" fill="white"/>
      {/* 钟楼层（更宽）*/}
      <rect x="228" y="420" width="104" height="190" fill="white"/>
      {/* 钟楼角小塔 */}
      <polygon points="228,420 232,406 236,420" fill="white"/>
      <polygon points="324,420 328,406 332,420" fill="white"/>
      <polygon points="228,608 232,596 236,608" fill="white"/>
      <polygon points="324,608 328,596 332,608" fill="white"/>
      {/* 钟面（镂空）*/}
      <circle cx="280" cy="515" r="44" fill={BG}/>
      <circle cx="280" cy="515" r="44" fill="none" stroke="white" strokeWidth="6"/>
      <line x1="280" y1="515" x2="280" y2="477" stroke="white" strokeWidth="5"/>
      <line x1="280" y1="515" x2="312" y2="515" stroke="white" strokeWidth="4"/>
      {/* 灯笼层 */}
      <rect x="246" y="280" width="68" height="142" fill="white"/>
      {/* 尖塔 */}
      <polygon points="246,284 280,148 314,284" fill="white"/>
      {/* 顶端小球 */}
      <circle cx="280" cy="144" r="6" fill="white"/>

      {/* ═══ 伦敦眼（左侧中部）═══ */}
      <polygon points="68,752 86,630 96,630 74,752" fill="white"/>
      <polygon points="128,752 118,630 128,630 138,752" fill="white"/>
      <rect x="72" y="746" width="30" height="10" rx="3" fill="white"/>
      <circle cx="100" cy="618" r="110" fill="none" stroke="white" strokeWidth="7"/>
      {spokes.map(deg => {
        const r = deg * Math.PI / 180
        return <line key={deg} x1="100" y1="618"
          x2={+(100 + 102 * Math.sin(r)).toFixed(1)}
          y2={+(618 - 102 * Math.cos(r)).toFixed(1)}
          stroke="white" strokeWidth="2"/>
      })}
      <circle cx="100" cy="618" r="13" fill="white"/>
      {spokes.map(deg => {
        const r = deg * Math.PI / 180
        return <rect key={deg}
          x={+(100 + 108 * Math.sin(r) - 7).toFixed(1)}
          y={+(618 - 108 * Math.cos(r) - 5).toFixed(1)}
          width="14" height="10" rx="3" fill="white"/>
      })}

      {/* ═══ 国会大厦（右侧）═══ */}
      <rect x="336" y="626" width="210" height="94" fill="white"/>
      {Array.from({length:15}, (_, i) => {
        const x = 338 + i * 14
        return <polygon key={i} points={`${x},626 ${x+7},608 ${x+14},626`} fill="white"/>
      })}
      {/* 维多利亚塔 */}
      <rect x="480" y="510" width="66" height="116" fill="white"/>
      <polygon points="480,510 513,470 546,510" fill="white"/>
      <polygon points="499,470 513,448 527,470" fill="white"/>
      <rect x="505" y="444" width="16" height="8" fill="white"/>
      {[488,506].map(wx => [524,546,566].map(wy =>
        <rect key={`${wx}-${wy}`} x={wx} y={wy} width="11" height="15" rx="3" fill={BG}/>
      ))}

      {/* ═══ 中间小楼群 ═══ */}
      <rect x="185" y="660" width="30" height="60" fill="white"/>
      <polygon points="185,660 200,642 215,660" fill="white"/>
      <rect x="218" y="672" width="22" height="48" fill="white"/>

      {/* ═══ 塔桥（右下角，部分入镜）═══ */}
      {/* 左塔 */}
      <rect x="388" y="490" width="56" height="230" fill="white"/>
      <polygon points="388,490 416,450 444,490" fill="white"/>
      <polygon points="403,450 416,424 429,450" fill="white"/>
      <polygon points="388,490 392,476 396,490" fill="white"/>
      <polygon points="436,490 440,476 444,490" fill="white"/>
      <rect x="397" y="506" width="13" height="18" rx="4" fill={BG}/>
      <rect x="416" y="506" width="13" height="18" rx="4" fill={BG}/>
      <rect x="397" y="534" width="13" height="18" rx="4" fill={BG}/>
      <rect x="416" y="534" width="13" height="18" rx="4" fill={BG}/>
      {/* 桥面 */}
      <rect x="340" y="620" width="220" height="14" fill="white"/>
      {/* 悬索（左侧）*/}
      <line x1="416" y1="424" x2="340" y2="620" stroke="white" strokeWidth="3"/>
      <line x1="416" y1="424" x2="390" y2="620" stroke="white" strokeWidth="3"/>
      {/* 高架人行道 */}
      <rect x="442" y="468" width="70" height="10" fill="white"/>

      {/* ═══ 夏德大厦（右侧）═══ */}
      <polygon points="490,720 514,720 542,580 526,200 510,580" fill="white"/>
      <line x1="526" y1="200" x2="510" y2="720" stroke={BG} strokeWidth="2"/>

      {/* ═══ 泰晤士河 ═══ */}
      <rect x="0" y="752" width="560" height="28" fill="white" opacity="0.1"/>
      <path d="M0,754 Q70,746 140,754 Q210,762 280,754 Q350,746 420,754 Q490,762 560,754"
        fill="none" stroke="white" strokeWidth="3" opacity="0.3"/>
      <path d="M0,766 Q140,758 280,766 Q420,774 560,766"
        fill="none" stroke="white" strokeWidth="1.5" opacity="0.18"/>
    </svg>
  )
}

/* ── Level test modal ── */
export function LevelTestModal({ onClose }) {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()
  const QS = [
    { q: '你学英语多少年了？', opts: ['刚开始学', '1-3年', '3-6年', '6年以上'] },
    { q: '你能看懂英文菜单吗？', opts: ['完全看不懂', '认识一些单词', '基本能看懂', '完全没问题'] },
    { q: '英语听力对你来说怎么样？', opts: ['完全听不懂', '慢速能懂一些', '日常对话能理解', '能听懂新闻电影'] },
    { q: '你能写一封英文邮件吗？', opts: ['不行', '简单的可以', '日常邮件没问题', '正式场合都能写'] },
    { q: '你的英语学习目标是？', opts: ['通过KET考试', '通过PET考试', '通过FCE/CAE', '专业/学术用途'] },
  ]
  const [answers, setAnswers] = useState([])
  function handleOpt(i) {
    const next = [...answers, i]
    if (step < QS.length - 1) { setAnswers(next); setStep(s => s + 1) }
    else {
      const avg = next.reduce((a, b) => a + b, 0) / next.length
      const rec = avg < 1 ? 'KET' : avg < 2 ? 'PET' : avg < 3 ? 'FCE' : 'CAE'
      try { localStorage.setItem('cambridge_level', rec) } catch {}
      navigate(`/cambridge/${rec.toLowerCase()}`)
      onClose()
    }
  }

  return (
    <motion.div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8"
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Progress */}
        <div className="flex gap-1.5 mb-6">
          {QS.map((_, i) => (
            <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${i <= step ? 'bg-blue-500' : 'bg-gray-100'}`} />
          ))}
        </div>
        <p className="text-xs text-gray-400 mb-3">第 {step+1} / {QS.length} 题</p>
        <h3 className="text-xl font-extrabold text-gray-900 mb-6 leading-snug">{QS[step].q}</h3>
        <div className="space-y-2">
          {QS[step].opts.map((opt, i) => (
            <button key={i} onClick={() => handleOpt(i)}
              className="w-full text-left px-5 py-3.5 rounded-xl border-2 border-gray-100 hover:border-blue-400 hover:bg-blue-50 text-sm font-semibold text-gray-700 transition-all">
              {opt}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="mt-5 text-xs text-gray-400 hover:text-gray-600 w-full text-center">
          取消
        </button>
      </motion.div>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════════
   首页成绩换算计算器
════════════════════════════════════════════════════════════════ */
function LandingScoreCalc() {
  const [activeExam, setActiveExam] = useState('KET')
  const [raw, setRaw] = useState({ reading: '', writing: '', listening: '', speaking: '' })

  const cfg = EXAM_CONFIGS[activeExam]

  function switchExam(abbr) {
    setActiveExam(abbr)
    setRaw({ reading: '', writing: '', listening: '', speaking: '' })
  }

  const converted = {}
  cfg.sections.forEach(s => { converted[s.key] = cfg.convert(s.key, raw[s.key]) })
  const validScores = Object.values(converted).filter(v => v !== null)
  const finalScore = validScores.length === 4 ? Math.round(validScores.reduce((a, b) => a + b, 0) / 4) : null
  const finalGrade = finalScore !== null ? getExamGrade(finalScore, activeExam) : null
  const hasAny = Object.values(raw).some(v => v !== '')

  function barPct(val) {
    if (val === null) return 0
    return Math.max(0, Math.min(100, Math.round((val - cfg.scaleMin) / (cfg.scaleMax - cfg.scaleMin) * 100)))
  }

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-100 mb-4">
            🎯 成绩换算工具
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">剑桥英语成绩换算计算器</h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            输入各科卷面分，即时换算剑桥英语量表（CES）标准分和等级
          </p>
        </div>

        {/* Exam tabs */}
        <div className="flex gap-2 mb-8 justify-center flex-wrap">
          {EXAM_LIST.map(abbr => {
            const c = EXAM_CONFIGS[abbr]
            const isActive = abbr === activeExam
            return (
              <button key={abbr} onClick={() => switchExam(abbr)}
                style={isActive ? { background: c.color, borderColor: c.color } : {}}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border-2 ${
                  isActive ? 'text-white shadow-lg' : 'border-gray-200 text-gray-500 hover:border-gray-300 bg-white'
                }`}
              >
                {abbr}
                <span className={`ml-1.5 text-[11px] font-medium ${isActive ? 'opacity-75' : 'text-gray-400'}`}>
                  {c.cefr}
                </span>
              </button>
            )
          })}
        </div>

        {/* Calculator card */}
        <motion.div key={activeExam}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-3xl p-6 border border-gray-100"
        >
          {/* Info bar */}
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-extrabold"
                style={{ background: cfg.color }}>
                {cfg.cefr}
              </div>
              <div>
                <div className="font-bold text-gray-900">{cfg.name}</div>
                <div className="text-[11px] text-gray-400">剑桥英语量表：{cfg.scaleMin}–{cfg.scaleMax} 分</div>
              </div>
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${cfg.exact ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              {cfg.exact ? '官方精确换算' : '近似换算'}
            </span>
          </div>

          {/* Section inputs */}
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {cfg.sections.map(s => {
              const std = converted[s.key]
              const grade = std !== null ? getExamGrade(std, activeExam) : null
              const invalid = raw[s.key] !== '' && std === null
              const pct = barPct(std)
              return (
                <div key={s.key} className="bg-white rounded-2xl p-4 border border-gray-100">
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
                          std !== null ? 'border-emerald-300 bg-white' : 'border-gray-200 bg-white'
                        }`}
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-300">/{s.max}</span>
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
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2">
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
          <div className={`rounded-2xl p-5 flex items-center justify-between transition-all ${
            finalScore !== null ? 'border-2' : 'bg-white border border-gray-100'
          }`}
            style={finalScore !== null ? { background: finalGrade.bg, borderColor: finalGrade.color + '40' } : {}}
          >
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-0.5">最终标准分</div>
              <div className="text-[10px] text-gray-400">= (阅读 + 写作 + 听力 + 口语) ÷ 4</div>
              {finalScore !== null && (
                <div className="mt-1.5 text-xs" style={{ color: finalGrade.color }}>
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
              <span key={g.label}
                className="flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full"
                style={{ background: g.bg, color: g.color }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: g.color }} />
                {g.label}{i < cfg.grades.length - 1 ? ` ≥${g.min}` : ''}
              </span>
            ))}
          </div>

          {hasAny && (
            <button onClick={() => setRaw({ reading: '', writing: '', listening: '', speaking: '' })}
              className="mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors hover:underline underline-offset-2">
              清除重置
            </button>
          )}
        </motion.div>

      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   主组件
════════════════════════════════════════════════════════════════ */
export default function CambridgeLanding() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [hoveredLevel, setHoveredLevel] = useState(null)
  const modulesRef = { current: null }

  function selectLevel(abbr) {
    try { localStorage.setItem('cambridge_level', abbr) } catch {}
    navigate(`/cambridge/${abbr.toLowerCase()}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ═══════════════════════════════════════════════════════════
          Hero: Full-viewport split
      ═══════════════════════════════════════════════════════════ */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* ── Left panel (blue) ── */}
        <div className="lg:w-[44%] relative bg-[#064e3b] flex flex-col justify-between overflow-hidden min-h-[40vh] lg:min-h-screen">

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)', backgroundSize: '40px 40px' }}
          />

          {/* London skyline — 全面板覆盖，竖版构图 */}
          <div className="absolute inset-0" style={{ opacity: 0.46 }}>
            <LondonSkyline className="w-full h-full" />
          </div>

          {/* 顶部极窄渐变，仅保证 logo 可读性 */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#064e3b] to-transparent pointer-events-none" />

          {/* Logo — top left */}
          <div className="relative z-10 px-10 pt-10">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                <span className="text-white font-extrabold text-sm">火</span>
              </div>
              <span className="text-white font-extrabold text-lg">火星<span className="text-blue-200">剑桥</span></span>
            </Link>
          </div>

          {/* Centre text */}
          <div className="relative z-10 flex-1 flex items-center justify-center px-10 py-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white/90 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7">
                🇬🇧 Cambridge English Official Exams
              </div>
              <h1 className="font-sans text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.15] mb-5">
                不确定<br />你的级别？
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-9 max-w-[280px] mx-auto">
                做一个 5 分钟快速测试，<br />找到最适合你的剑桥英语考试
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#064e3b] font-bold rounded-2xl hover:bg-emerald-50 transition-colors shadow-xl text-sm"
              >
                开始级别测试
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom stats */}
          <div className="relative z-10 px-10 pb-8 flex items-center gap-6 text-white/55 text-xs">
            <span><span className="text-white font-bold text-sm">200</span> 在线学员</span>
            <span className="text-white/25">·</span>
            <span><span className="text-white font-bold text-sm">13,468</span> 注册用户</span>
          </div>
        </div>

        {/* ── Right panel (white) ── */}
        <div className="flex-1 flex items-center justify-center bg-white px-8 lg:px-16 xl:px-24 py-16">
          <div className="w-full max-w-[420px]">

            {/* Right panel header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <h2 className="font-sans text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                Select your exam
              </h2>
              <p className="text-gray-400 text-sm font-sans">点击级别，直接开始练习</p>
            </motion.div>

            {/* Level rows */}
            <div className="divide-y divide-gray-100">
              {LEVELS.map((lv, i) => (
                <motion.div key={lv.abbr}
                  initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07 }}
                  onMouseEnter={() => setHoveredLevel(lv.abbr)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  className="flex items-center justify-between py-5 cursor-pointer group"
                  onClick={() => selectLevel(lv.abbr)}
                >
                  {/* Name */}
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${lv.dot} transition-transform duration-200 ${hoveredLevel === lv.abbr ? 'scale-150' : ''}`} />
                    <span className="font-sans text-lg font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">
                      {lv.code} {lv.name} ({lv.abbr})
                    </span>
                    {lv.isNew && (
                      <span className="text-[9px] font-extrabold bg-emerald-500 text-white px-2 py-0.5 rounded-full tracking-wide">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Select button — 统一深绿色 */}
                  <motion.button
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                    className="px-6 py-2 rounded-lg text-sm font-bold text-white bg-[#064e3b] hover:bg-[#065f46] transition-all shadow-sm"
                    onClick={e => { e.stopPropagation(); selectLevel(lv.abbr) }}
                  >
                    选 择
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Help link */}
            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-xs text-gray-400 italic font-sans">
                不确定哪个级别适合你？{' '}
                <button
                  onClick={() => setShowModal(true)}
                  className="text-[#064e3b] hover:text-[#065f46] not-italic font-semibold underline underline-offset-2 transition-colors"
                >
                  做一个 5 分钟测试
                </button>
              </p>
            </div>

            {/* Right panel nav */}
            <div className="mt-8 flex items-center gap-3">
              <button className="text-sm text-gray-400 hover:text-gray-700 font-medium transition-colors">登录</button>
              <span className="text-gray-200">|</span>
              <button className="text-sm font-bold text-[#064e3b] hover:text-[#065f46] transition-colors">免费注册</button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          六大模块（二屏）
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100 mb-4">
              六大训练模块
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">全方位覆盖，一个都不少</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">每个模块独立完整，按薄弱项针对练习</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((mod, i) => {
              const c = colorMap[mod.color]
              const inner = (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className={`bg-white rounded-2xl p-6 border ${c.border} hover:shadow-md transition-all h-full ${mod.link ? 'cursor-pointer hover:scale-[1.015]' : 'opacity-75'} group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl`}>
                      {mod.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {mod.badge && (
                        <span className="text-[10px] font-bold bg-gradient-to-r from-violet-500 to-blue-500 text-white px-2 py-0.5 rounded-full">
                          {mod.badge}
                        </span>
                      )}
                      {mod.ready && (
                        <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full">可用</span>
                      )}
                      {!mod.link && (
                        <span className="text-[10px] font-bold bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">即将推出</span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{mod.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{mod.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.tags.map(tag => (
                      <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.tag}`}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              )
              return mod.link
                ? <Link key={mod.title} to={mod.link}>{inner}</Link>
                : <div key={mod.title}>{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          成绩换算计算器（五级）
      ═══════════════════════════════════════════════════════════ */}
      <LandingScoreCalc />

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#064e3b] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-4">今天就开始备考</h2>
          <p className="text-blue-200 text-lg mb-8">免费注册，立即体验全部基础功能</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => selectLevel('KET')}
              className="px-10 py-4 bg-white text-[#064e3b] font-bold rounded-2xl hover:bg-emerald-50 transition-all text-base shadow-lg">
              免费开始练习 →
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-white/15 text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/25 transition-all text-base">
              先测级别
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-lg">火星</span>
            <span className="font-extrabold text-blue-400 text-lg">剑桥</span>
            <span className="text-gray-500 text-sm ml-1">备考平台</span>
          </div>
          <div className="text-sm text-gray-500">© 2025 火星剑桥备考 · 专注剑桥英语考试训练</div>
        </div>
      </footer>

      {/* ── Level test modal ── */}
      <AnimatePresence>
        {showModal && <LevelTestModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  )
}
