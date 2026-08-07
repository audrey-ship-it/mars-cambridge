import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { stageLibraries, examLibraries, colorMap } from '../data/libraries'

function LibCard({ lib, i }) {
  const c = colorMap[lib.color]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className={`relative bg-white rounded-2xl border ${c.border} p-4 hover:shadow-md transition-all group`}
    >
      {lib.free && (
        <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
          免费
        </div>
      )}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.from} ${c.to} flex items-center justify-center shadow-sm text-lg`}>
          {lib.emoji}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-gray-900 text-sm leading-tight">{lib.name}</div>
          <div className="text-xs text-gray-400 truncate">{lib.sub}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className={`text-xs font-semibold ${c.text} ${c.bg} px-2 py-0.5 rounded-full`}>
          {lib.level}
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-gray-900">{lib.words.toLocaleString()}</div>
          <div className="text-[10px] text-gray-400">核心词</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function WordLibrary() {
  return (
    <section id="word-library" className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-6">

        {/* 标题 */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
          >
            词库覆盖
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            17 大词库，覆盖所有学段与考试
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-500 max-w-xl mx-auto"
          >
            从小学到 SAT/GRE，覆盖中考、高考、四六级、雅思、托福全部场景，按需精选，不背无用词。
          </motion.p>
        </div>

        {/* ── 按学段 ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">按学段</span>
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">4 个词库</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stageLibraries.map((lib, i) => (
              <LibCard key={lib.name} lib={lib} i={i} />
            ))}
          </div>
        </motion.div>

        {/* ── 按考试 ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4 mt-8">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">按备考目标</span>
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">13 个词库</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {examLibraries.map((lib, i) => (
              <LibCard key={lib.name} lib={lib} i={i} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-400 mb-4">
            免费版可体验 KET 演示词库 · Pro 解锁小学至四级 · 年度会员解锁全部 15 大词库
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-sm"
          >
            免费开始练习 →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
