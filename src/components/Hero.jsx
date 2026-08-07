import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { allLibraries } from '../data/libraries'

const demoSteps = [
  {
    phase: 'listen',
    label: '① 听语音',
    word: 'beautiful',
    chinese: '美丽的',
    part: 'adj.',
    input: '',
    status: null,
  },
  {
    phase: 'type',
    label: '② 拼写单词',
    word: 'beautiful',
    chinese: '美丽的',
    part: 'adj.',
    input: 'beau',
    status: null,
  },
  {
    phase: 'correct',
    label: '③ 实时反馈',
    word: 'beautiful',
    chinese: '美丽的',
    part: 'adj.',
    input: 'beautiful',
    status: 'correct',
  },
  {
    phase: 'wrong',
    label: '④ 错词收录',
    word: 'necessary',
    chinese: '必要的',
    part: 'adj.',
    input: 'necesary',
    status: 'wrong',
  },
  {
    phase: 'wrongbook',
    label: '⑤ 错词本复习',
    word: null,
    chinese: null,
    part: null,
    input: null,
    status: 'wrongbook',
  },
]

function DemoCard({ step }) {
  if (step.status === 'wrongbook') {
    return (
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-500 text-xs">📝</span>
          </div>
          <span className="text-sm font-semibold text-gray-700">错词本</span>
          <span className="ml-auto text-xs text-red-400 font-medium bg-red-50 px-2 py-0.5 rounded-full">3 个待复习</span>
        </div>
        <div className="space-y-2">
          {[
            { word: 'necessary', cn: '必要的', n: 2 },
            { word: 'environment', cn: '环境', n: 1 },
            { word: 'government', cn: '政府', n: 1 },
          ].map((w, i) => (
            <motion.div
              key={w.word}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className="flex items-center justify-between bg-orange-50 rounded-xl px-3 py-2.5"
            >
              <div>
                <span className="text-sm font-bold text-gray-900">{w.word}</span>
                <span className="text-xs text-gray-400 ml-2">{w.cn}</span>
              </div>
              <span className="text-xs text-orange-500 font-medium">错 {w.n} 次</span>
            </motion.div>
          ))}
        </div>
        <button className="w-full mt-4 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl">
          开始复习 →
        </button>
      </div>
    )
  }

  return (
    <div className="p-5">
      {/* hint */}
      <div className="bg-blue-50 rounded-2xl p-3 mb-4 text-center">
        <div className="text-xs text-blue-400 font-medium mb-1">中文提示</div>
        <div className="text-xl font-bold text-blue-700">{step.chinese}</div>
        <div className="text-xs text-blue-400 mt-0.5">{step.part}</div>
      </div>

      {/* speaker button */}
      <div className="flex justify-center mb-4">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all ${
          step.phase === 'listen'
            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
            : 'bg-white text-blue-500 border-blue-100'
        }`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072M12 6v12m0 0l-3-3m3 3l3-3" />
          </svg>
          {step.phase === 'listen' ? '正在播放...' : '播放语音'}
        </div>
      </div>

      {/* input */}
      <div className={`w-full px-4 py-3 rounded-2xl border-2 text-center text-lg font-bold tracking-widest mb-3 transition-all ${
        step.status === 'correct'
          ? 'border-green-400 bg-green-50 text-green-700'
          : step.status === 'wrong'
          ? 'border-red-300 bg-red-50 text-red-600'
          : step.phase === 'type'
          ? 'border-blue-400 bg-white text-gray-800'
          : 'border-gray-200 bg-white text-gray-300'
      }`}>
        {step.phase === 'listen'
          ? <span className="text-gray-300 text-sm font-normal">在这里拼写单词...</span>
          : step.input || <span className="text-gray-300 text-sm font-normal">在这里拼写单词...</span>}
        {step.phase === 'type' && (
          <span className="inline-block w-0.5 h-5 bg-blue-500 ml-0.5 animate-pulse align-middle" />
        )}
      </div>

      {/* feedback */}
      {step.status === 'correct' && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm font-medium text-green-600 bg-green-50 rounded-xl py-2 mb-3">
          ✓ 拼写正确！太棒了 🎉
        </motion.div>
      )}
      {step.status === 'wrong' && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-red-600 bg-red-50 rounded-xl py-2 mb-3">
          ✗ 正确答案：<span className="font-bold">{step.word}</span> · 已加入错词本
        </motion.div>
      )}

      <button className={`w-full py-2.5 text-white text-sm font-semibold rounded-xl ${
        step.status ? 'bg-gray-800' : 'bg-blue-600'
      }`}>
        {step.status ? '下一个 →' : '确认拼写'}
      </button>
    </div>
  )
}

export default function Hero() {
  const navigate = useNavigate()
  const [stepIdx, setStepIdx] = useState(0)

  useEffect(() => {
    const durations = [2000, 2200, 2000, 2500, 2800]
    const timer = setTimeout(() => {
      setStepIdx(i => (i + 1) % demoSteps.length)
    }, durations[stepIdx])
    return () => clearTimeout(timer)
  }, [stepIdx])

  const step = demoSteps[stepIdx]

  return (
    <section className="relative bg-white pt-14 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-blue-100">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              雅思 · 托福 · KET · 四六级
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-5">
              AI 单词听写，
              <br />
              <span className="text-blue-600">三步记住单词</span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              听写 · 默写 · 错词复习，科学闭环。
            </p>

            <ul className="space-y-3 mb-8">
              {[
                { icon: '🎧', text: '原声英语语音朗读，模拟真实考试听写' },
                { icon: '✏️', text: '实时拼写反馈，精准定位薄弱单词' },
                { icon: '🔁', text: '错词自动收录，按遗忘曲线安排复习' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/dictation"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 text-sm text-center"
              >
                免费开始练习 →
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200 text-sm text-center"
              >
                注册账号
              </Link>
            </div>

            {/* ── 考试快速入口 ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 pt-5 border-t border-gray-100"
            >
              <p className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                <span>⚡</span>
                快速开始：选择你的备考目标，一键生成学习计划
              </p>
              <div className="flex flex-wrap gap-2">
                {allLibraries.map((e) => (
                  <button
                    key={e.name}
                    onClick={() => navigate('/plan', { state: { exam: e } })}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium"
                  >
                    <span className="text-sm leading-none">{e.emoji}</span>
                    {e.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* social proof */}
            <div className="flex items-center gap-4 mt-8 text-xs text-gray-400">
              <div className="flex -space-x-1.5">
                {['🧑‍🎓','👩‍💼','👨‍💻','👩‍🏫'].map((e, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs">{e}</div>
                ))}
              </div>
              <span>12,000+ 学生正在使用</span>
              <span className="text-yellow-400">★★★★★</span>
              <span>4.9 分</span>
            </div>
          </motion.div>

          {/* RIGHT: looping demo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm">
              {/* browser chrome mockup */}
              <div className="bg-gray-100 rounded-t-2xl px-4 py-3 flex items-center gap-2 border border-gray-200 border-b-0">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 text-center border border-gray-200">
                  word-superman.com
                </div>
              </div>

              {/* app window */}
              <div className="bg-white rounded-b-2xl border border-gray-200 shadow-2xl shadow-blue-100/40 overflow-hidden">
                {/* app header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">W</span>
                    </div>
                    <span className="text-white text-sm font-semibold">单词超人</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={stepIdx}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="text-blue-100 text-xs font-medium"
                      >
                        {step.label}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* progress bar */}
                <div className="h-1 bg-gray-100">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    animate={{ width: `${((stepIdx + 1) / demoSteps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* card content */}
                <div className="min-h-[280px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={stepIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DemoCard step={step} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* step dots */}
                <div className="flex justify-center gap-1.5 pb-4">
                  {demoSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setStepIdx(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === stepIdx ? 'w-4 h-1.5 bg-blue-500' : 'w-1.5 h-1.5 bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
