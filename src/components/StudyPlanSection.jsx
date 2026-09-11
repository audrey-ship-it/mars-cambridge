import { motion } from 'framer-motion'
import StudyPlanWizard from './StudyPlanWizard'

export default function StudyPlanSection() {
  return (
    <section id="plan" className="py-24 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 左侧文案 */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
            >
              个人学习计划
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight"
            >
              3 步制定专属计划<br />
              <span className="text-blue-600">坚持才能看见结果</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-500 leading-relaxed"
            >
              大多数人背单词失败，不是因为不努力，而是没有计划。告诉我们你的考试、时间和每日可用分钟数——我们帮你算清楚每天要背多少，能不能完成，要不要调整节奏。
            </motion.p>

            {/* 特点列表 */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 space-y-3"
            >
              {[
                { icon: '🎯', text: '根据词库规模精准计算每日任务量' },
                { icon: '⚡', text: '可行性评估，避免计划过重放弃' },
                { icon: '📅', text: '注册后自动保存，每天提醒你完成' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-lg leading-none mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* 右侧向导 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <StudyPlanWizard postAuth={false} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
