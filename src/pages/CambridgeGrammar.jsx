import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CambridgeLayout } from './CambridgeApp'

/* ── KET 语法考点数据 ── */
const GRAMMAR_POINTS = [
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
      { n: 11, title: '物主代词',                available: false },
      { n: 12, title: "用 's 表示名词所有格",    available: false },
      { n: 13, title: '指示代词',                available: false },
      { n: 14, title: '不定代词',                available: false },
      { n: 15, title: '复合不定代词',            available: false },
    ],
  },
  {
    id: 4, title: '介词', color: 'bg-orange-500', light: 'bg-orange-50 text-orange-700 border-orange-200',
    units: [
      { n: 16, title: '表示时间的介词',          available: false },
      { n: 17, title: '表示空间的介词',          available: false },
      { n: 18, title: '常用的介词短语',          available: false },
    ],
  },
  {
    id: 5, title: '形容词', color: 'bg-pink-500', light: 'bg-pink-50 text-pink-700 border-pink-200',
    units: [
      { n: 19, title: '形容词修饰名词',          available: false },
      { n: 20, title: '系动词 + 形容词',         available: false },
      { n: 21, title: '形容词的比较级和最高级',  available: false },
      { n: 22, title: '形容词比较级用法',        available: false },
      { n: 23, title: '形容词最高级用法',        available: false },
    ],
  },
  {
    id: 6, title: '副词', color: 'bg-teal-500', light: 'bg-teal-50 text-teal-700 border-teal-200',
    units: [
      { n: 24, title: '形容词和副词',            available: false },
      { n: 25, title: '频率副词',                available: false },
    ],
  },
  {
    id: 7, title: '助动词', color: 'bg-cyan-500', light: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    units: [
      { n: 26, title: 'be 动词',                 available: false },
      { n: 27, title: '助动词 do 和 have',       available: false },
    ],
  },
  {
    id: 8, title: '动词及时态', color: 'bg-indigo-500', light: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    units: [
      { n: 28, title: '动词的第三人称单数',      available: false },
      { n: 29, title: '一般现在时',              available: true  },
      { n: 30, title: '现在进行时',              available: true  },
      { n: 31, title: '现在完成时',              available: true  },
      { n: 32, title: '规则动词的过去式',        available: false },
      { n: 33, title: '不规则动词的过去式（1）', available: false },
      { n: 34, title: '不规则动词的过去式（2）', available: false },
      { n: 35, title: '一般过去时',              available: true  },
      { n: 36, title: '过去进行时',              available: true  },
      { n: 37, title: '一般将来时',              available: true  },
      { n: 38, title: 'to do 和 doing',          available: false },
    ],
  },
  {
    id: 9, title: '情态动词', color: 'bg-rose-500', light: 'bg-rose-50 text-rose-700 border-rose-200',
    units: [
      { n: 39, title: '情态动词 can 和 could',   available: false },
      { n: 40, title: '情态动词表示可能性',      available: false },
      { n: 41, title: '情态动词表示应该',        available: false },
      { n: 42, title: '情态动词表示建议、意愿',  available: false },
    ],
  },
  {
    id: 10, title: '基础句型', color: 'bg-amber-500', light: 'bg-amber-50 text-amber-700 border-amber-200',
    units: [
      { n: 43, title: 'There be 句型',           available: true  },
      { n: 44, title: '简单句',                  available: false },
      { n: 45, title: '陈述句',                  available: false },
      { n: 46, title: '一般疑问句',              available: true  },
      { n: 47, title: '特殊疑问句',              available: false },
      { n: 48, title: '祈使句和感叹句',          available: false },
      { n: 49, title: '被动语态',                available: false },
    ],
  },
  {
    id: 11, title: '复合句', color: 'bg-lime-600', light: 'bg-lime-50 text-lime-700 border-lime-200',
    units: [
      { n: 50, title: '并列连词',                available: false },
      { n: 51, title: '宾语从句',                available: false },
      { n: 52, title: '定语从句',                available: false },
      { n: 53, title: 'if 引导的真实条件状语从句', available: false },
    ],
  },
  {
    id: 12, title: '数词', color: 'bg-slate-500', light: 'bg-slate-50 text-slate-700 border-slate-200',
    units: [
      { n: 54, title: '基数词',                  available: false },
      { n: 55, title: '序数词',                  available: false },
    ],
  },
]

export default function CambridgeGrammar() {
  const navigate = useNavigate()
  const [openPoints, setOpenPoints] = useState(new Set([1]))
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })

  function togglePoint(id) {
    setOpenPoints(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const totalUnits    = GRAMMAR_POINTS.reduce((s, p) => s + p.units.length, 0)
  const availUnits    = GRAMMAR_POINTS.reduce((s, p) => s + p.units.filter(u => u.available).length, 0)

  return (
    <CambridgeLayout activeModule="grammar" level={level} setLevel={setLevel}>
      <div className="max-w-3xl mx-auto px-6 py-8">

        {/* ── 页头 ── */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 font-medium">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-bold">A2 KET</span>
            <span>·</span>
            <span>语法训练</span>
          </div>
          <h1 className="font-sans text-3xl font-bold text-gray-900 mb-2">KET 语法考点</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            12 大考点 · {totalUnits} 个语法单元，覆盖 KET 全部语法知识点，逐一击破。
          </p>
          {/* 总进度 */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#064e3b] rounded-full transition-all"
                style={{ width: `${Math.round(availUnits / totalUnits * 100)}%` }} />
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {availUnits} / {totalUnits} 单元已开放
            </span>
          </div>
        </div>

        {/* ── 考点列表 ── */}
        <div className="space-y-3">
          {GRAMMAR_POINTS.map((point, pi) => {
            const isOpen      = openPoints.has(point.id)
            const pointAvail  = point.units.filter(u => u.available).length

            return (
              <motion.div key={point.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: pi * 0.04 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                {/* 考点头部 */}
                <button
                  onClick={() => togglePoint(point.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50/50 transition-colors"
                >
                  {/* 序号徽章 */}
                  <div className={`w-9 h-9 rounded-xl ${point.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-extrabold text-sm">{point.id}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">考点 {point.id}：{point.title}</span>
                      {pointAvail > 0 && (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">
                          {pointAvail} 可练
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {point.units.length} 个单元
                      {pointAvail === 0 && <span className="ml-1 text-gray-300">· 即将开放</span>}
                    </div>
                  </div>

                  {/* 小进度条 */}
                  <div className="hidden sm:flex items-center gap-2 w-24">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${point.color} rounded-full`}
                        style={{ width: `${Math.round(pointAvail / point.units.length * 100)}%` }} />
                    </div>
                    <span className="text-[10px] text-gray-400 w-6 text-right">{pointAvail}/{point.units.length}</span>
                  </div>

                  <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* 单元列表 */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-5 py-4 grid sm:grid-cols-2 gap-2">
                        {point.units.map(unit => (
                          <button key={unit.n}
                            onClick={() => unit.available && navigate(`/cambridge/grammar/${unit.n}`)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                              unit.available
                                ? `${point.light} border hover:shadow-sm cursor-pointer`
                                : 'bg-gray-50 border-gray-100 text-gray-400 cursor-default'
                            }`}
                          >
                            <span className={`text-xs font-extrabold w-8 flex-shrink-0 ${
                              unit.available ? '' : 'text-gray-300'
                            }`}>
                              U{unit.n}
                            </span>
                            <span className="text-sm font-medium flex-1 leading-tight">{unit.title}</span>
                            {unit.available ? (
                              <span className="text-xs font-bold text-[#064e3b] flex-shrink-0">开始 →</span>
                            ) : (
                              <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* ── 底部提示 ── */}
        <div className="mt-8 bg-[#064e3b]/5 border border-[#064e3b]/10 rounded-2xl px-6 py-5 text-center">
          <div className="text-2xl mb-2">🚀</div>
          <div className="font-bold text-gray-800 mb-1">更多语法练习即将上线</div>
          <p className="text-xs text-gray-500 leading-relaxed">
            已开放：名词、冠词、一般现在时、现在进行时、现在完成时、一般过去时、过去进行时、一般将来时等。<br />
            每个单元包含讲解 + 选择题 + 填空题 + 改错题，即时反馈。
          </p>
        </div>

      </div>
    </CambridgeLayout>
  )
}
