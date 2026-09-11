import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { allLibraries } from '../data/libraries'

export default function ExitIntentModal() {
  const [show, setShow] = useState(false)
  const [fired, setFired] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // 只在用户滚动超过 200px 后才监听（确保他们真的看过页面）
    let scrolled = false
    const onScroll = () => { if (window.scrollY > 200) scrolled = true }
    window.addEventListener('scroll', onScroll, { passive: true })

    const onMouseLeave = (e) => {
      if (e.clientY < 8 && scrolled && !fired) {
        setShow(true)
        setFired(true)
      }
    }
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [fired])

  function choose(exam) {
    setShow(false)
    navigate('/plan', { state: { exam } })
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* 遮罩 */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* 弹窗 */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[12%] md:inset-auto md:left-1/2 md:-translate-x-1/2 md:top-[12%] md:w-[520px] z-50 bg-white rounded-3xl shadow-2xl shadow-gray-400/30 overflow-hidden"
          >
            {/* 顶部彩色条 */}
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

            <div className="p-8">
              {/* 关闭按钮 */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-5 right-5 text-gray-300 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 头部 */}
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">⏳</div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">别走！先制定你的学习计划</h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  没有计划的单词学习，80% 的人会在两周内放弃。<br />
                  选一个你的备考目标，30 秒制定专属计划——免费的。
                </p>
              </div>

              {/* 考试选择 */}
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">选择你的备考目标</p>
              <div className="grid grid-cols-4 gap-2 mb-5">
                {allLibraries.map(e => (
                  <button
                    key={e.name}
                    onClick={() => choose(e)}
                    className="flex flex-col items-center gap-1 py-3 rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                  >
                    <span className="text-xl">{e.emoji}</span>
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">{e.name}</span>
                    <span className="text-[10px] text-gray-400">{e.words.toLocaleString()} 词</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShow(false)}
                className="w-full py-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                我知道了，直接离开
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
