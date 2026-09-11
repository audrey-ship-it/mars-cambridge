import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: '选择词库',
    desc: '从 9 大考试词库中选择适合自己的级别，KET 免费体验，Pro 及年度会员解锁全部词库。',
    icon: '📚',
  },
  {
    num: '02',
    title: '主动听写拼写',
    desc: '看中文意思，按单词字母数逐格填写。语音不自动播放——需主动点击，模拟真实考场听力环境。卡住时可按需查看英文释义、挖空例句、音标或播放语音，四种提示自由选。',
    icon: '🎧',
  },
  {
    num: '03',
    title: '错词强制复习',
    desc: '拼错的词自动记入错词本，并按出错次数排序。下次开始新词练习前，系统会弹出提醒，要求先复习错词，确保薄弱单词不被跳过。',
    icon: '📝',
  },
  {
    num: '04',
    title: '成绩报告 & 分享',
    desc: '每轮结束显示正确率、错误数、用时与上次对比，一键生成成绩卡片分享给朋友，打卡天数让坚持看得见。',
    icon: '🏆',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
          >
            使用流程
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            四步完成闭环学习
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-500"
          >
            科学的学习路径，让每个单词都真正进入长期记忆。
          </motion.p>
        </div>

        <div className="relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-100" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-blue-100 shadow-md flex items-center justify-center text-3xl mb-5 hover:border-blue-400 transition-colors">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
