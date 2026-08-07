import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '单词超人和普通背单词 App 有什么区别？',
    a: '单词超人核心是"听写"而非"认读"。研究表明，主动输出（拼写）的记忆效果是被动认读的 3-5 倍。我们结合语音听写 + 默写练习 + 错词循环复习，形成完整的主动记忆闭环。',
  },
  {
    q: '支持哪些词库？',
    a: '目前包含 KET 核心词库（500+词），以及雅思、托福高频词库。Pro 会员可解锁全部词库，免费用户可使用 KET 演示词库体验完整功能。',
  },
  {
    q: '每天需要练多长时间？',
    a: '建议每天 15-30 分钟。单词超人的练习节奏紧凑高效，配合错词复习机制，每天少量练习就能保持稳定进步。重要的是坚持，而不是一次练很长时间。',
  },
  {
    q: '免费版和 Pro 版有什么区别？',
    a: '免费版每日限 10 次听写，仅含 KET 演示词库。Pro 版无限练习次数，解锁全部词库、默写模式、完整错词本、学习进度报告等功能。',
  },
  {
    q: '可以退款吗？',
    a: '可以。购买 Pro 会员后 7 天内如不满意，无条件全额退款。我们对产品质量有信心，但也尊重每位用户的选择。',
  },
  {
    q: '支持手机使用吗？',
    a: '完全支持。单词超人是响应式网页应用，手机、平板、电脑均可流畅使用。无需下载 App，打开浏览器即可练习。',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 text-lg font-light"
        >
          +
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
          >
            常见问题
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            你可能想知道
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
