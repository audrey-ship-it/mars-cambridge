import { useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GRAMMAR_QUESTIONS } from '../data/grammarQuestions'
import { CambridgeLayout } from './CambridgeApp'

const LABELS = ['A', 'B', 'C', 'D']

const MODES = [
  { id: 'questions',   label: '单选题',   icon: '📝' },
  { id: 'blanks',      label: '挖空练习', icon: '✏️' },
  { id: 'corrections', label: '改错题',   icon: '🔍' },
]

export default function CambridgeGrammarUnit() {
  const { unit } = useParams()
  const unitNum = parseInt(unit)
  const data = GRAMMAR_QUESTIONS[unitNum]
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const [mode, setMode] = useState('questions')

  if (!data) {
    return (
      <CambridgeLayout activeModule="grammar" level={level} setLevel={setLevel}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">该单元暂未开放</h2>
            <p className="text-gray-400 text-sm mb-6">题目正在制作中，敬请期待</p>
            <Link to="/cambridge/grammar"
              className="px-5 py-2.5 bg-[#064e3b] text-white text-sm font-semibold rounded-xl hover:bg-[#065f46] transition-colors">
              返回语法列表
            </Link>
          </div>
        </div>
      </CambridgeLayout>
    )
  }

  return (
    <CambridgeLayout activeModule="grammar" level={level} setLevel={setLevel}>

      {/* 模式切换 Tab */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-xl mx-auto px-6">
          <div className="flex">
            {MODES.map(m => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  mode === m.id
                    ? 'border-[#064e3b] text-[#064e3b]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                <span>{m.icon}</span>
                <span>{m.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 语法要点卡 */}
      <div className="max-w-xl mx-auto px-6 pt-6">
        <div className="bg-[#064e3b]/5 border border-[#064e3b]/10 rounded-2xl px-5 py-4 mb-6">
          <div className="text-[10px] font-bold text-[#064e3b] uppercase tracking-widest mb-1">语法要点</div>
          <p className="text-sm text-gray-700 leading-relaxed">{data.intro}</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mode === 'questions' && (
          <motion.div key="questions"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}>
            <MCQSection data={data} unitNum={unitNum} />
          </motion.div>
        )}
        {mode === 'blanks' && (
          <motion.div key="blanks"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}>
            <BlanksSection data={data} unitNum={unitNum} />
          </motion.div>
        )}
        {mode === 'corrections' && (
          <motion.div key="corrections"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}>
            <CorrectionsSection data={data} unitNum={unitNum} />
          </motion.div>
        )}
      </AnimatePresence>
    </CambridgeLayout>
  )
}

/* ───────── MCQ ───────── */
function MCQSection({ data, unitNum }) {
  const [index, setIndex]       = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [results, setResults]   = useState([])
  const [done, setDone]         = useState(false)

  const questions = data.questions
  const total     = questions.length
  const q         = questions[index]
  const correct   = results.filter(Boolean).length

  function confirm() { if (selected !== null) setConfirmed(true) }

  function next() {
    const isRight = selected === q.ans
    const updated = [...results, isRight]
    if (index + 1 >= total) { setResults(updated); setDone(true) }
    else { setResults(updated); setIndex(i => i + 1); setSelected(null); setConfirmed(false) }
  }

  function restart() { setIndex(0); setSelected(null); setConfirmed(false); setResults([]); setDone(false) }

  if (done) return <ResultScreen results={results} total={total} correct={correct}
    questions={questions.map(q => ({ text: q.q, correctLabel: `${LABELS[q.ans]}. ${q.opts[q.ans]}`, exp: q.exp }))}
    onRestart={restart} unitNum={unitNum} title={data.title} mode="单选题" />

  return (
    <div className="max-w-xl mx-auto px-6 pb-10">
      <ProgressDots index={index} total={total} results={results} />

      {/* 进度条 */}
      <div className="h-1 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-[#064e3b] rounded-full"
          animate={{ width: `${(index / total) * 100}%` }} transition={{ duration: 0.35 }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={index}
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.18 }}>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <p className="text-base font-semibold text-gray-900 leading-relaxed mb-5">{q.q}</p>
            <div className="space-y-2.5">
              {q.opts.map((opt, oi) => {
                let style = 'border-gray-200 bg-white hover:border-[#064e3b]/40 hover:bg-gray-50/50 cursor-pointer'
                if (confirmed) {
                  if (oi === q.ans)              style = 'border-emerald-400 bg-emerald-50 cursor-default'
                  else if (oi === selected)      style = 'border-red-300 bg-red-50 cursor-default'
                  else                           style = 'border-gray-100 bg-white opacity-50 cursor-default'
                } else if (oi === selected) {
                  style = 'border-[#064e3b] bg-[#064e3b]/5 cursor-pointer'
                }
                return (
                  <button key={oi}
                    onClick={() => !confirmed && setSelected(oi)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${style}`}>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                      confirmed && oi === q.ans                        ? 'bg-emerald-500 text-white'
                      : confirmed && oi === selected && oi !== q.ans  ? 'bg-red-400 text-white'
                      : oi === selected                                ? 'bg-[#064e3b] text-white'
                      : 'bg-gray-100 text-gray-500'}`}>
                      {LABELS[oi]}
                    </span>
                    <span className="text-sm text-gray-800 font-medium">{opt}</span>
                    {confirmed && oi === q.ans         && <span className="ml-auto text-emerald-500 text-base">✓</span>}
                    {confirmed && oi === selected && oi !== q.ans && <span className="ml-auto text-red-400 text-base">✗</span>}
                  </button>
                )
              })}
            </div>
          </div>

          <ExplanationBox show={confirmed} correct={selected === q.ans} exp={q.exp} />

          {!confirmed
            ? <button onClick={confirm} disabled={selected === null}
                className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] transition-all disabled:opacity-30 text-base">
                确认答案
              </button>
            : <button onClick={next}
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base">
                {index + 1 < total ? '下一题 →' : '查看结果 →'}
              </button>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ───────── Fill-in-blank ───────── */
function BlanksSection({ data, unitNum }) {
  const [index, setIndex]         = useState(0)
  const [input, setInput]         = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [results, setResults]     = useState([])
  const [done, setDone]           = useState(false)
  const inputRef = useRef(null)

  const blanks = data.blanks
  const total  = blanks.length
  const b      = blanks[index]

  function isCorrect(val) {
    return b.ans.some(a => a.trim().toLowerCase() === val.trim().toLowerCase())
  }

  function confirm() {
    if (!input.trim()) return
    setConfirmed(true)
    setTimeout(() => inputRef.current?.blur(), 0)
  }

  function next() {
    const correct = isCorrect(input)
    const updated = [...results, correct]
    if (index + 1 >= total) { setResults(updated); setDone(true) }
    else { setResults(updated); setIndex(i => i + 1); setInput(''); setConfirmed(false); setTimeout(() => inputRef.current?.focus(), 100) }
  }

  function restart() { setIndex(0); setInput(''); setConfirmed(false); setResults([]); setDone(false) }

  // Split sentence on ___ to render blank placeholder
  function renderSentence(sentence) {
    const parts = sentence.split('___')
    return parts.map((part, i) => (
      <span key={i}>
        {part}
        {i < parts.length - 1 && (
          <span className={`inline-block min-w-[60px] border-b-2 text-center font-bold px-1 ${
            confirmed ? (isCorrect(input) ? 'border-emerald-500 text-emerald-700' : 'border-red-400 text-red-600') : 'border-[#064e3b] text-[#064e3b]'
          }`}>
            {confirmed ? input || '___' : (input || '      ')}
          </span>
        )}
      </span>
    ))
  }

  if (done) {
    const correct = results.filter(Boolean).length
    return <ResultScreen results={results} total={total} correct={correct}
      questions={blanks.map(b => ({ text: b.sentence.replace('___', '___'), correctLabel: b.ans[0], exp: b.exp }))}
      onRestart={restart} unitNum={unitNum} title={data.title} mode="挖空练习" />
  }

  const correct = confirmed ? isCorrect(input) : null

  return (
    <div className="max-w-xl mx-auto px-6 pb-10">
      <ProgressDots index={index} total={total} results={results} />

      <div className="h-1 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-[#064e3b] rounded-full"
          animate={{ width: `${(index / total) * 100}%` }} transition={{ duration: 0.35 }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={index}
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.18 }}>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <div className="text-xs font-bold text-gray-400 mb-3">题目 {index + 1} / {total} · 填入正确答案</div>
            <p className="text-base font-semibold text-gray-800 leading-relaxed mb-5">
              {renderSentence(b.sentence)}
            </p>

            <input
              ref={inputRef}
              value={input}
              onChange={e => !confirmed && setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') confirmed ? next() : confirm() }}
              disabled={confirmed}
              placeholder="在此输入答案…"
              className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all ${
                confirmed
                  ? correct
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                    : 'border-red-300 bg-red-50 text-red-700'
                  : 'border-gray-200 bg-gray-50 focus:border-[#064e3b] focus:bg-white'
              }`}
            />

            {confirmed && !correct && (
              <div className="mt-2 text-xs text-gray-500">
                正确答案：<span className="font-bold text-emerald-700">{b.ans.join(' / ')}</span>
              </div>
            )}
          </div>

          <ExplanationBox show={confirmed} correct={correct} exp={b.exp} />

          {!confirmed
            ? <button onClick={confirm} disabled={!input.trim()}
                className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] transition-all disabled:opacity-30 text-base">
                确认答案
              </button>
            : <button onClick={next}
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base">
                {index + 1 < total ? '下一题 →' : '查看结果 →'}
              </button>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ───────── Error Correction ───────── */
function CorrectionsSection({ data, unitNum }) {
  const [index, setIndex]         = useState(0)
  const [input, setInput]         = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [results, setResults]     = useState([])
  const [done, setDone]           = useState(false)
  const inputRef = useRef(null)

  const corrections = data.corrections
  const total       = corrections.length
  const c           = corrections[index]

  function isCorrect(val) {
    return val.trim().toLowerCase() === c.correct.trim().toLowerCase()
  }

  function confirm() {
    if (!input.trim()) return
    setConfirmed(true)
    setTimeout(() => inputRef.current?.blur(), 0)
  }

  function next() {
    const correct = isCorrect(input)
    const updated = [...results, correct]
    if (index + 1 >= total) { setResults(updated); setDone(true) }
    else { setResults(updated); setIndex(i => i + 1); setInput(''); setConfirmed(false); setTimeout(() => inputRef.current?.focus(), 100) }
  }

  function restart() { setIndex(0); setInput(''); setConfirmed(false); setResults([]); setDone(false) }

  // Highlight the error word in the sentence
  function renderSentenceWithError(sentence, error) {
    const idx = sentence.indexOf(error)
    if (idx === -1) return <span>{sentence}</span>
    return (
      <>
        <span>{sentence.slice(0, idx)}</span>
        <span className="underline decoration-red-400 decoration-2 text-red-500 font-bold">{error}</span>
        <span>{sentence.slice(idx + error.length)}</span>
      </>
    )
  }

  if (done) {
    const correct = results.filter(Boolean).length
    return <ResultScreen results={results} total={total} correct={correct}
      questions={corrections.map(c => ({ text: c.sentence, correctLabel: `${c.error} → ${c.correct}`, exp: c.exp }))}
      onRestart={restart} unitNum={unitNum} title={data.title} mode="改错题" />
  }

  const correct = confirmed ? isCorrect(input) : null

  return (
    <div className="max-w-xl mx-auto px-6 pb-10">
      <ProgressDots index={index} total={total} results={results} />

      <div className="h-1 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-[#064e3b] rounded-full"
          animate={{ width: `${(index / total) * 100}%` }} transition={{ duration: 0.35 }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={index}
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.18 }}>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <div className="text-xs font-bold text-gray-400 mb-1">题目 {index + 1} / {total}</div>
            <div className="text-xs text-gray-400 mb-3">找出划线错误，在下方输入正确形式</div>
            <p className="text-base font-semibold text-gray-800 leading-relaxed mb-5">
              {renderSentenceWithError(c.sentence, c.error)}
            </p>

            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-red-400 font-bold line-through">{c.error}</span>
              <span className="text-gray-300">→</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => !confirmed && setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') confirmed ? next() : confirm() }}
                disabled={confirmed}
                placeholder="输入正确形式…"
                className={`flex-1 px-3 py-2 rounded-xl border text-sm font-medium outline-none transition-all ${
                  confirmed
                    ? correct
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                      : 'border-red-300 bg-red-50 text-red-700'
                    : 'border-gray-200 bg-gray-50 focus:border-[#064e3b] focus:bg-white'
                }`}
              />
            </div>

            {confirmed && !correct && (
              <div className="mt-2 text-xs text-gray-500 ml-1">
                正确答案：<span className="font-bold text-emerald-700">{c.correct}</span>
              </div>
            )}
          </div>

          <ExplanationBox show={confirmed} correct={correct} exp={c.exp} />

          {!confirmed
            ? <button onClick={confirm} disabled={!input.trim()}
                className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] transition-all disabled:opacity-30 text-base">
                确认答案
              </button>
            : <button onClick={next}
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base">
                {index + 1 < total ? '下一题 →' : '查看结果 →'}
              </button>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ───────── Shared sub-components ───────── */

function ProgressDots({ index, total, results }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-bold text-gray-400">题目 {index + 1} / {total}</span>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${
            i < index ? (results[i] ? 'bg-emerald-400' : 'bg-red-400')
            : i === index ? 'bg-[#064e3b]'
            : 'bg-gray-200'
          }`} />
        ))}
      </div>
    </div>
  )
}

function ExplanationBox({ show, correct, exp }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`rounded-2xl px-5 py-4 mb-4 border text-sm leading-relaxed overflow-hidden ${
            correct
              ? 'bg-emerald-50 border-emerald-100 text-emerald-800'
              : 'bg-red-50 border-red-100 text-red-800'
          }`}
        >
          <span className="font-bold mr-1">{correct ? '✓ 正确！' : '✗ 解析：'}</span>
          {exp}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ResultScreen({ results, total, correct, questions, onRestart, unitNum, title, mode }) {
  const pct = Math.round(correct / total * 100)
  return (
    <div className="max-w-xl mx-auto px-6 py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center mb-5">
        <div className="text-5xl mb-3">
          {pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}
        </div>
        <div className="text-6xl font-extrabold text-gray-900 mb-1">
          {correct}<span className="text-3xl text-gray-300 font-normal"> / {total}</span>
        </div>
        <div className={`text-xl font-bold mt-2 ${pct===100?'text-emerald-600':pct>=60?'text-[#064e3b]':'text-orange-500'}`}>
          正确率 {pct}%
        </div>
        <div className="text-xs text-gray-400 mt-1">Unit {unitNum} · {title} · {mode}</div>
      </motion.div>

      <div className="space-y-3 mb-6">
        {questions.map((q, i) => (
          <div key={i} className={`rounded-2xl border p-4 ${results[i] ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
            <div className="flex items-start gap-2 mb-2">
              <span className={`text-sm font-extrabold mt-0.5 flex-shrink-0 ${results[i] ? 'text-emerald-500' : 'text-red-400'}`}>
                {results[i] ? '✓' : '✗'}
              </span>
              <span className="text-sm font-medium text-gray-800 flex-1">{q.text}</span>
            </div>
            <div className={`text-xs font-semibold ml-5 ${results[i] ? 'text-emerald-700' : 'text-red-600'}`}>
              正确答案：{q.correctLabel}
            </div>
            <div className="text-xs text-gray-500 ml-5 mt-1 leading-relaxed">{q.exp}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={onRestart}
          className="flex-1 py-3.5 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] transition-colors text-sm">
          再练一次 →
        </button>
        <Link to="/cambridge/grammar"
          className="flex-1 py-3.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-2xl hover:border-gray-300 transition-colors text-sm text-center">
          返回列表
        </Link>
      </div>
    </div>
  )
}

