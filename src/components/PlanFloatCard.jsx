import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function PlanFloatCard() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 480 && !dismissed) setVisible(true)
      else if (window.scrollY <= 480) setVisible(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40 w-72 bg-white rounded-2xl shadow-2xl shadow-gray-300/50 border border-gray-100 overflow-hidden"
        >
          {/* 顶部渐变条 */}
          <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

          <div className="p-4">
            {/* 头部 */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">📅</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">还没有学习计划？</p>
                  <p className="text-xs text-gray-400">有计划，完成率提升 3 倍</p>
                </div>
              </div>
              <button
                onClick={() => setDismissed(true)}
                className="text-gray-300 hover:text-gray-500 transition-colors p-0.5 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 说明 */}
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">
              告诉我们你的考试和时间，我们帮你算出每天要背多少词，以及能否按时完成。
            </p>

            {/* CTA */}
            <button
              onClick={() => { setDismissed(true); navigate('/plan') }}
              className="w-full py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              花 30 秒制定我的计划 →
            </button>

            <button
              onClick={() => setDismissed(true)}
              className="w-full mt-2 py-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              稍后再说
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
