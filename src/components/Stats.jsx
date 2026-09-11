import { motion } from 'framer-motion'

const stats = [
  { value: '12,000+', label: '活跃学生', sub: '每月持续增长' },
  { value: '98%', label: '用户满意度', sub: '基于真实评价' },
  { value: '3×', label: '记忆效率提升', sub: '对比传统方法' },
  { value: '17大', label: '词库覆盖', sub: '中考 · 高考 · 雅思 · SAT/GRE…' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50/50 transition-colors group"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 mt-1">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
