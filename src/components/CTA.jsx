import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 md:p-16 text-center"
        >
          {/* background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-10 translate-y-10" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              免费试用 · 无需信用卡
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              今天开始，
              <br />
              让单词真正记住
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              每天 15 分钟，三个月掌握考试核心词汇。
              <br />
              从今天起，告别死记硬背。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dictation"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5 text-base"
              >
                免费开始练习 →
              </Link>
              <Link
                to="/login"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all border border-white/20 text-base"
              >
                查看所有功能
              </Link>
            </div>

            <p className="mt-8 text-blue-200/70 text-xs">
              已有 12,000+ 学生正在使用 · 7 天免费退款保障
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
