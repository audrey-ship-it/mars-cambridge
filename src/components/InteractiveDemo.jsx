import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { demoWords } from '../data/words'

function speak(word) {
  const u = new SpeechSynthesisUtterance(word)
  u.lang = 'en-US'
  u.rate = 0.85
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(u)
}

export default function InteractiveDemo() {
  const [started, setStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const inputRef = useRef(null)

  const current = demoWords[index]
  const progress = ((index) / demoWords.length) * 100

  function startDemo() {
    setStarted(true)
    setTimeout(() => {
      speak(demoWords[0].word)
      inputRef.current?.focus()
    }, 300)
  }

  function handleCheck() {
    if (!answer.trim()) return
    const isCorrect = answer.trim().toLowerCase() === current.word.toLowerCase()
    setCorrect(isCorrect)
    setChecked(true)
    if (isCorrect) setScore(s => s + 1)
  }

  function handleNext() {
    const nextIndex = index + 1
    if (nextIndex >= demoWords.length) {
      setDone(true)
    } else {
      setIndex(nextIndex)
      setAnswer('')
      setChecked(false)
      setCorrect(false)
      setTimeout(() => {
        speak(demoWords[nextIndex].word)
        inputRef.current?.focus()
      }, 200)
    }
  }

  function handleRestart() {
    setStarted(false)
    setIndex(0)
    setAnswer('')
    setChecked(false)
    setCorrect(false)
    setScore(0)
    setDone(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if (!checked) handleCheck()
      else handleNext()
    }
  }

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
          >
            Interactive Demo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            立刻体验听写
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-500"
          >
            听语音，拼写单词，实时反馈。无需注册。
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 border border-gray-100 overflow-hidden">
            {/* top bar */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <span className="text-white text-sm font-semibold">单词超人</span>
              </div>
              {started && !done && (
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <span>{index + 1} / {demoWords.length}</span>
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              {!started && (
                <motion.div
                  key="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">听写演示</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    共 {demoWords.length} 个单词 · 听语音拼写 · 实时判对错<br />
                    支持中文提示 + 词性标注
                  </p>
                  <button
                    onClick={startDemo}
                    className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-200"
                  >
                    开始体验 →
                  </button>
                </motion.div>
              )}

              {started && !done && (
                <motion.div
                  key={`word-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="p-6"
                >
                  {/* progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>进度</span>
                      <span>{index}/{demoWords.length} 完成</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* hint */}
                  <div className="bg-blue-50 rounded-2xl p-4 mb-5 text-center">
                    <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">中文提示</span>
                    <div className="mt-2 text-2xl font-bold text-blue-700">{current.chinese}</div>
                    <div className="mt-1 text-xs text-blue-400 font-medium">{current.part}</div>
                  </div>

                  {/* speaker */}
                  <div className="flex justify-center mb-5">
                    <button
                      onClick={() => speak(current.word)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-blue-100 text-blue-600 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all font-medium text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m0 0l-3-3m3 3l3-3M6.343 6.343A8 8 0 1017.657 17.657" />
                      </svg>
                      播放语音
                    </button>
                  </div>

                  {/* input */}
                  <div className="relative mb-4">
                    <input
                      ref={inputRef}
                      type="text"
                      value={answer}
                      onChange={e => setAnswer(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={checked}
                      placeholder="在这里拼写单词..."
                      className={`w-full px-4 py-3.5 rounded-2xl border-2 text-center text-lg font-semibold tracking-wider outline-none transition-all ${
                        !checked
                          ? 'border-gray-200 focus:border-blue-400 bg-white'
                          : correct
                          ? 'border-green-400 bg-green-50 text-green-700'
                          : 'border-red-300 bg-red-50 text-red-700'
                      }`}
                    />
                    {checked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center ${
                          correct ? 'bg-green-500' : 'bg-red-400'
                        }`}
                      >
                        <span className="text-white text-xs font-bold">{correct ? '✓' : '✗'}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* feedback */}
                  {checked && !correct && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center mb-4 text-sm text-gray-500"
                    >
                      正确答案：<span className="font-bold text-gray-800">{current.word}</span>
                    </motion.div>
                  )}
                  {checked && correct && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center mb-4 text-sm text-green-600 font-medium"
                    >
                      太棒了！拼写正确 🎉
                    </motion.div>
                  )}

                  {/* action btn */}
                  {!checked ? (
                    <button
                      onClick={handleCheck}
                      disabled={!answer.trim()}
                      className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      确认拼写
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="w-full py-3.5 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all"
                    >
                      {index + 1 < demoWords.length ? '下一个 →' : '查看结果 →'}
                    </button>
                  )}
                </motion.div>
              )}

              {done && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl ${
                    score === demoWords.length ? 'bg-green-100' : score >= demoWords.length / 2 ? 'bg-yellow-100' : 'bg-red-50'
                  }`}>
                    {score === demoWords.length ? '🏆' : score >= demoWords.length / 2 ? '👍' : '💪'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {score} / {demoWords.length} 正确
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {score === demoWords.length
                      ? '全部正确！你太厉害了！'
                      : `还有 ${demoWords.length - score} 个单词需要加强练习`}
                  </p>
                  <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(score / demoWords.length) * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleRestart}
                      className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all"
                    >
                      再练一次
                    </button>
                    <a
                      href="/login"
                      className="w-full py-3.5 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all block"
                    >
                      注册解锁完整词库 →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
