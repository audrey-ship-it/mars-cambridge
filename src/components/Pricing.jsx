import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: '免费版',
    price: '¥0',
    period: '永久免费',
    desc: '适合初次体验',
    features: [
      '每日 10 次听写',
      'KET 演示词库（100词）',
      '四重提示（英文/例句/音标/语音）',
      '基础错词本',
    ],
    cta: '免费开始',
    href: '/login',
    highlight: false,
  },
  {
    name: 'Pro 会员',
    price: '¥19',
    period: '/ 月',
    desc: '适合认真备考',
    features: [
      '无限次听写练习',
      'KET 完整版 · 高中 · 四级词库',
      '错词强制复习 + 循环系统',
      '成绩报告 + 分享功能',
      '连续打卡 + 进度追踪',
      '优先客服支持',
    ],
    cta: '立即升级',
    href: '/login',
    highlight: true,
    badge: '最受欢迎',
  },
  {
    name: '年度会员',
    price: '¥99',
    period: '/ 年',
    desc: '节省超 57%',
    features: [
      'Pro 全部功能',
      '雅思 · 托福 · 六级 · 考研词库',
      '全部 9 大考试词库解锁',
      '多设备同步',
    ],
    cta: '年付优惠',
    href: '/login',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
          >
            定价方案
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            简单透明的定价
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-500"
          >
            免费试用，满意再升级。没有套路，随时可取消。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-300/40 scale-105'
                  : 'bg-gray-50 border border-gray-100'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm pb-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlight ? 'bg-white/20' : 'bg-blue-100'
                    }`}>
                      <svg className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={plan.highlight ? 'text-blue-50' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.href}
                className={`w-full py-3.5 rounded-2xl font-semibold text-center text-sm transition-all hover:-translate-y-0.5 block ${
                  plan.highlight
                    ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg shadow-white/20'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          所有方案均支持 7 天无理由退款 · 无自动续费提醒
        </motion.p>
      </div>
    </section>
  )
}
