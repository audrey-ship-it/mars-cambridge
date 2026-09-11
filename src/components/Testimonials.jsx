import { motion } from 'framer-motion'

const testimonials = [
  {
    name: '王小雨',
    role: '雅思备考生',
    avatar: '🧑‍🎓',
    rating: 5,
    text: '用了两个月，雅思词汇量从 5000 提升到 8000+。听写 + 错词本的组合真的太有效了，再也不用死记硬背了！',
  },
  {
    name: '李思远',
    role: 'KET 备考家长',
    avatar: '👩‍👦',
    rating: 5,
    text: '给孩子用，每天练 15 分钟，两个月后 KET 单词全都掌握了。界面简洁好用，小朋友也很喜欢。',
  },
  {
    name: '张梓涵',
    role: '大学英语四级',
    avatar: '👩‍💻',
    rating: 5,
    text: '四级前两周冲刺，每天刷高频词，错词本帮我发现了很多拼写盲点。考试比预期分数高了 30 分！',
  },
  {
    name: '陈明轩',
    role: '托福备考生',
    avatar: '👨‍💼',
    rating: 5,
    text: '托福单词量大，但单词超人让我在通勤时也能练习。语音质量很好，完全模拟真实考试听写。',
  },
  {
    name: '刘雅琪',
    role: '初中英语老师',
    avatar: '👩‍🏫',
    rating: 5,
    text: '推荐给学生用，反馈都很好。特别喜欢错词循环复习功能，比传统听写本高效多了。',
  },
  {
    name: '赵浩然',
    role: '高中生',
    avatar: '🧑‍🎓',
    rating: 5,
    text: '高考英语单词量太大，靠这个每天坚持刷，三个月掌握了 2000+ 单词。真的比 app 好用！',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
          >
            用户评价
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            12,000+ 学生的真实反馈
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
