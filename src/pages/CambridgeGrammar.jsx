import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { readGrammarMistakes } from '../utils/grammarMistakes'
import { CambridgeLayout } from './CambridgeApp'
import { GRAMMAR_QUESTIONS } from '../data/grammarQuestions'

/* ── KET 语法考点数据 ── */
export const GRAMMAR_POINTS = [
  {
    id: 1, title: '名词', color: 'bg-emerald-500', light: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    units: [
      { n: 1,  title: '普通名词和专有名词',      available: true },
      { n: 2,  title: '可数名词和不可数名词',    available: true },
      { n: 3,  title: '名词复数的规则变化',      available: true },
      { n: 4,  title: '名词复数的不规则变化',    available: true },
      { n: 5,  title: '不可数名词的量',          available: true },
      { n: 6,  title: '复合名词',                available: true },
    ],
  },
  {
    id: 2, title: '冠词', color: 'bg-blue-500', light: 'bg-blue-50 text-blue-700 border-blue-200',
    units: [
      { n: 7,  title: 'a 和 an 的用法',          available: true  },
      { n: 8,  title: 'the 的用法',              available: true  },
      { n: 9,  title: '零冠词用法总结',          available: true  },
    ],
  },
  {
    id: 3, title: '代词及所有格', color: 'bg-violet-500', light: 'bg-violet-50 text-violet-700 border-violet-200',
    units: [
      { n: 10, title: '人称代词',                available: true  },
      { n: 11, title: '物主代词',                available: true },
      { n: 12, title: "用 's 表示名词所有格",    available: true },
      { n: 13, title: '指示代词',                available: true },
      { n: 14, title: '不定代词',                available: true },
      { n: 15, title: '复合不定代词',            available: true },
    ],
  },
  {
    id: 4, title: '介词', color: 'bg-orange-500', light: 'bg-orange-50 text-orange-700 border-orange-200',
    units: [
      { n: 16, title: '表示时间的介词',          available: true },
      { n: 17, title: '表示空间的介词',          available: true },
      { n: 18, title: '常用的介词短语',          available: true },
    ],
  },
  {
    id: 5, title: '形容词', color: 'bg-pink-500', light: 'bg-pink-50 text-pink-700 border-pink-200',
    units: [
      { n: 19, title: '形容词修饰名词',          available: true },
      { n: 20, title: '系动词 + 形容词',         available: true },
      { n: 21, title: '形容词的比较级和最高级',  available: true },
      { n: 22, title: '形容词比较级用法',        available: true },
      { n: 23, title: '形容词最高级用法',        available: true },
    ],
  },
  {
    id: 6, title: '副词', color: 'bg-teal-500', light: 'bg-teal-50 text-teal-700 border-teal-200',
    units: [
      { n: 24, title: '形容词和副词',            available: true },
      { n: 25, title: '频率副词',                available: true },
    ],
  },
  {
    id: 7, title: '助动词', color: 'bg-cyan-500', light: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    units: [
      { n: 26, title: 'be 动词',                 available: true },
      { n: 27, title: '助动词 do 和 have',       available: true },
    ],
  },
  {
    id: 8, title: '动词及时态', color: 'bg-indigo-500', light: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    units: [
      { n: 28, title: '动词的第三人称单数',      available: true },
      { n: 29, title: '一般现在时',              available: true  },
      { n: 30, title: '现在进行时',              available: true  },
      { n: 31, title: '现在完成时',              available: true  },
      { n: 32, title: '规则动词的过去式',        available: true },
      { n: 33, title: '不规则动词的过去式（1）', available: true },
      { n: 34, title: '不规则动词的过去式（2）', available: true },
      { n: 35, title: '一般过去时',              available: true  },
      { n: 36, title: '过去进行时',              available: true  },
      { n: 37, title: '一般将来时',              available: true  },
      { n: 38, title: 'to do 和 doing',          available: true },
    ],
  },
  {
    id: 9, title: '情态动词', color: 'bg-rose-500', light: 'bg-rose-50 text-rose-700 border-rose-200',
    units: [
      { n: 39, title: '情态动词 can 和 could',   available: true },
      { n: 40, title: '情态动词表示可能性',      available: true },
      { n: 41, title: '情态动词表示应该',        available: true },
      { n: 42, title: '情态动词表示建议、意愿',  available: true },
    ],
  },
  {
    id: 10, title: '基础句型', color: 'bg-amber-500', light: 'bg-amber-50 text-amber-700 border-amber-200',
    units: [
      { n: 43, title: 'There be 句型',           available: true  },
      { n: 44, title: '简单句',                  available: true },
      { n: 45, title: '陈述句',                  available: true },
      { n: 46, title: '一般疑问句',              available: true  },
      { n: 47, title: '特殊疑问句',              available: true },
      { n: 48, title: '祈使句和感叹句',          available: true },
      { n: 49, title: '被动语态',                available: true },
    ],
  },
  {
    id: 11, title: '复合句', color: 'bg-lime-600', light: 'bg-lime-50 text-lime-700 border-lime-200',
    units: [
      { n: 50, title: '并列连词',                available: true },
      { n: 57, title: '主语从句和表语从句',        available: true },
      { n: 51, title: '宾语从句',                available: true },
      { n: 52, title: '定语从句',                available: true },
      { n: 53, title: 'if 引导的真实条件状语从句', available: true },
    ],
  },
  {
    id: 12, title: '数词', color: 'bg-slate-500', light: 'bg-slate-50 text-slate-700 border-slate-200',
    units: [
      { n: 54, title: '基数词',                  available: true },
      { n: 55, title: '序数词',                  available: true },
    ],
  },
  {
    id: 13, title: '反义疑问句', color: 'bg-yellow-600', light: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    units: [
      { n: 56, title: '反义疑问句',              available: true },
    ],
  },
]

export const GRAMMAR_GROUPS = [
  { id: 'tenses', number: '01', title: '高频时态', desc: '六大 KET 高频时态及过去式变化，辨清用途、结构和时间标志词', unitNums: [29, 30, 37, 35, 31, 36, 32, 33, 34], icon: 'T', featured: true },
  { id: 'word-grammar', number: '02', title: '核心词法', desc: '名词、冠词、代词、介词、连词和数词', unitNums: [...Array.from({ length: 28 }, (_, i) => i + 1), 50, 54, 55], icon: 'Aa' },
  { id: 'sentence-patterns', number: '03', title: '常用句型', desc: 'There be、疑问句、祈使句和常用表达结构', unitNums: [43, 44, 45, 46, 47, 48, 56], icon: 'S' },
  { id: 'clauses', number: '04', title: '从句', desc: '主语从句、表语从句、宾语从句、定语从句和条件状语从句', unitNums: [57, 51, 52, 53], icon: 'if' },
  { id: 'passive-review', number: '05', title: '被动语态与综合语法', desc: '被动语态、情态动词、非谓语和综合巩固', unitNums: [38, 39, 40, 41, 42, 49], icon: '↻' },
]

const hasChinese = value => /[\u3400-\u9fff]/.test(String(value || ''))

// 学生端只开放题目、中文题意和中文解析均已完整校对的单元。
export function isGrammarUnitReady(unit) {
  if (!unit?.available) return false
  const content = GRAMMAR_QUESTIONS[unit.n]
  if (!content) return false

  const questionTypes = [
    ['questions', 'qZh'],
    ['blanks', 'sentenceZh'],
    ['corrections', 'sentenceZh'],
  ]

  return questionTypes.every(([type, translationKey]) => {
    const items = content[type]
    return Array.isArray(items) && items.length >= 15 && items.every(item =>
      hasChinese(item[translationKey]) && hasChinese(item.expZh || item.exp)
    )
  })
}

export default function CambridgeGrammar() {
  const navigate = useNavigate()
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })

  const totalUnits    = GRAMMAR_POINTS.reduce((s, p) => s + p.units.length, 0)
  const storedProgress = (() => {
    try { return JSON.parse(localStorage.getItem('mars_grammar_progress_v1') || '{}') } catch { return {} }
  })()
  const completedUnits = Object.values(storedProgress).filter(Boolean).length
  const lastAccuracy = (() => {
    try { return JSON.parse(localStorage.getItem('mars_grammar_last_result') || 'null')?.accuracy ?? null } catch { return null }
  })()
  const mistakeCount = Object.keys(readGrammarMistakes()).length

  function unitsForGroup(group) {
    return group.unitNums.map(unitNum => GRAMMAR_POINTS.flatMap(point => point.units).find(unit => unit.n === unitNum)).filter(Boolean)
  }

  return (
    <CambridgeLayout activeModule="grammar" level={level} setLevel={setLevel}>
      <div className="max-w-7xl mx-auto px-6 lg:px-9 py-5 lg:py-6 min-h-full">

        {/* ── 页头 ── */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">KET GRAMMAR</div>
            <div className="mt-1 flex items-baseline gap-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-950">我的语法中心</h1>
              <p className="hidden md:block text-base text-gray-500">按考点理解规则，通过练习掌握语法。</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:w-[350px]">
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
              <span className="text-xs text-gray-500">已完成单元</span><strong className="text-xl text-gray-950">{completedUnits}/{totalUnits}</strong>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
              <span className="text-xs text-gray-500">最近正确率</span><strong className="text-xl text-gray-950">{lastAccuracy === null ? '—' : `${lastAccuracy}%`}</strong>
            </div>
          </div>
        </div>

        {/* ── 五个学习入口 ── */}
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {GRAMMAR_GROUPS.map((group, index) => {
            const units = unitsForGroup(group)
            const available = units.filter(isGrammarUnitReady).length
            return (
              <motion.button key={group.id}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}
                onClick={() => navigate(`/cambridge/grammar/category/${group.id}`)}
                className={`relative min-h-[215px] overflow-hidden rounded-[22px] border p-6 text-left flex flex-col transition-all ${
                  group.featured ? 'bg-emerald-50/40 border-emerald-500 hover:-translate-y-0.5 hover:shadow-md' :
                  'bg-white border-gray-200 hover:border-emerald-300 hover:-translate-y-0.5 hover:shadow-md'
                }`}>
                {group.featured && <div className="absolute top-0 inset-x-0 h-1.5 bg-[#064e3b]" />}
                <div className="flex items-start justify-between">
                  <span className={`w-12 h-12 rounded-2xl grid place-items-center text-lg font-extrabold ${group.featured ? 'bg-[#064e3b] text-white' : 'bg-emerald-50 text-emerald-700'}`}>{group.icon}</span>
                  <span className="text-[11px] font-extrabold tracking-[.14em] text-gray-300">{group.number}</span>
                </div>
                <h2 className="mt-5 text-2xl font-extrabold text-gray-950">{group.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{group.desc}</p>
                <div className="mt-auto pt-5 flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-500">{`${units.length} 单元 · ${available} 已可练`}</span>
                  <span className="font-extrabold text-emerald-700">查看单元 →</span>
                </div>
              </motion.button>
            )
          })}
          <motion.button
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: GRAMMAR_GROUPS.length * 0.04 }}
            onClick={() => navigate('/cambridge/grammar/mistakes')}
            className="relative min-h-[215px] overflow-hidden rounded-[22px] border border-[#e7c65f] bg-[#fff9e9] p-6 text-left flex flex-col transition-all hover:-translate-y-0.5 hover:border-[#d9aa28] hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f4c95d] text-xl font-extrabold text-[#604800]">↻</span>
              <div className="flex items-center gap-2"><span className="text-[11px] font-extrabold tracking-[.14em] text-[#b78a19]">06</span>{mistakeCount > 0 && <span className="rounded-full bg-[#f4c95d] px-2.5 py-1 text-[10px] font-extrabold text-[#604800]">{mistakeCount} 题</span>}</div>
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-gray-950">语法错题本</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">集中复习选择题、填空题和改错题中的错误，连续答对两次后自动移出。</p>
            <div className="mt-auto pt-5 flex items-center justify-between text-sm">
              <span className="font-medium text-gray-500">{mistakeCount ? `${mistakeCount} 道待复习` : '暂无错题'}</span>
              <span className="font-extrabold text-[#8a6500]">{mistakeCount ? '开始复习 →' : '查看错题本 →'}</span>
            </div>
          </motion.button>
        </div>

      </div>
    </CambridgeLayout>
  )
}
