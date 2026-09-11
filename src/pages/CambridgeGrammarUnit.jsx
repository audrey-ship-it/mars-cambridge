import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GRAMMAR_QUESTIONS } from '../data/grammarQuestions'
import { CambridgeLayout } from './CambridgeApp'
import { GRAMMAR_GROUPS } from './CambridgeGrammar'
import { grammarMistakeId, markGrammarMistakeCorrect, recordGrammarMistake } from '../utils/grammarMistakes'
import { markGrammarModeCompleted, markGrammarModeStarted } from '../utils/grammarProgress'

const LABELS = ['A', 'B', 'C', 'D']

const MODES = [
  { id: 'questions',   number: '01', label: '选择题' },
  { id: 'blanks',      number: '02', label: '挖空练习' },
  { id: 'corrections', number: '03', label: '改错题' },
]

const containsChinese = value => /[\u3400-\u9fff]/.test(String(value || ''))

function questionChinese(item, type) {
  if (item.qZh || item.sentenceZh) return item.qZh || item.sentenceZh
  if (type === 'questions') return '中文题意待补充。'
  if (type === 'blanks') return '中文题意待补充。'
  return '中文题意待补充。'
}

function chineseExplanation(item, correctLabel) {
  const explanation = item.expZh || item.exp
  if (containsChinese(explanation)) return explanation
  return `正确答案是“${correctLabel}”。请结合上方语法要点，注意该英文形式在句子中的正确用法。`
}

export default function CambridgeGrammarUnit() {
  const { unit } = useParams()
  const [searchParams] = useSearchParams()
  const unitNum = parseInt(unit)
  const data = GRAMMAR_QUESTIONS[unitNum]
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const requestedMode = searchParams.get('mode')
  const [mode, setMode] = useState(MODES.some(item => item.id === requestedMode) ? requestedMode : 'questions')
  const group = GRAMMAR_GROUPS.find(item => item.unitNums.includes(unitNum))

  useEffect(() => {
    if (data) markGrammarModeStarted(unitNum, mode)
  }, [data, mode, unitNum])

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

      <nav className="w-full border-b border-gray-100 bg-white px-6 py-4 flex items-center gap-3 text-sm" aria-label="语法学习路径">
        <Link to="/cambridge/grammar"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 font-extrabold text-[#735500] hover:bg-[#fbe9ad] transition-colors">
          <span aria-hidden="true">←</span>我的语法中心
        </Link>
        <span className="text-gray-300" aria-hidden="true">›</span>
        {group ? (
          <Link to={`/cambridge/grammar/category/${group.id}`} aria-label={`返回${group.title}`}
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 font-extrabold text-emerald-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-100 hover:shadow-md">
            <span aria-hidden="true">↩</span><span>{group.title}</span><span className="hidden text-[10px] font-bold text-emerald-600 sm:inline">返回上一级</span>
          </Link>
        ) : (
          <span className="font-extrabold text-gray-700">语法单元</span>
        )}
        <span className="text-gray-300" aria-hidden="true">›</span>
        <span className="min-w-0 truncate font-semibold text-gray-400">{data.title}</span>
      </nav>

      {/* 模式切换 Tab */}
      <div className="border-b border-[#ead795] bg-white py-4">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-3 gap-3 rounded-[22px] border border-[#ead795] bg-[#fffaf0] p-2">
            {MODES.map(m => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`flex min-h-[68px] items-center justify-center gap-3 rounded-2xl px-4 py-3 text-lg font-extrabold transition-all ${
                  mode === m.id
                    ? 'bg-[#f4c95d] text-[#143f35] shadow-sm'
                    : 'bg-white text-gray-500 hover:bg-[#fff1bd] hover:text-[#684d00]'
                }`}
              >
                <span className={`text-xs font-extrabold tracking-[.12em] ${mode === m.id ? 'text-[#735500]' : 'text-gray-300'}`}>{m.number}</span>
                <span>{m.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 统一知识讲解区 */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        {data.guide ? (
          <section className="mb-7 overflow-hidden rounded-[24px] border border-emerald-200 bg-white shadow-sm">
            <div className="border-b border-emerald-100 bg-emerald-50/60 px-6 py-5">
              <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-700">GRAMMAR GUIDE</div>
              <h1 className="mt-1 text-2xl font-extrabold text-gray-950">{data.title}</h1>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{data.intro}</p>
            </div>
            <div className="grid gap-px bg-gray-100 md:grid-cols-3">
              <GuideBlock number="01" title="什么时候用" items={data.guide.uses} />
              <GuideBlock number="02" title="基本结构" items={data.guide.structures} />
              <GuideBlock number="03" title="判断线索" items={data.guide.signals} tags />
            </div>
            <div className="border-t border-amber-100 bg-amber-50 px-6 py-4 text-sm leading-relaxed text-amber-950">
              <strong className="mr-2">易错提醒</strong>{data.guide.warning}
            </div>
          </section>
        ) : (
          <div className="bg-[#064e3b]/5 border border-[#064e3b]/10 rounded-2xl px-5 py-4 mb-6">
            <div className="text-[10px] font-bold text-[#064e3b] uppercase tracking-widest mb-1">语法要点</div>
            <p className="text-sm text-gray-700 leading-relaxed">{data.intro}</p>
          </div>
        )}
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

function GuideBlock({ number, title, items = [], tags = false }) {
  return (
    <div className="bg-white px-6 py-5">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-extrabold text-emerald-600">{number}</span>
        <h2 className="text-sm font-extrabold text-gray-900">{title}</h2>
      </div>
      {tags ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map(item => <span key={item} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800">{item}</span>)}
        </div>
      ) : (
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
          {items.map(item => <li key={item} className="flex gap-2"><span className="text-emerald-500">•</span><span>{item}</span></li>)}
        </ul>
      )}
    </div>
  )
}

/* ───────── MCQ ───────── */
function MCQSection({ data, unitNum }) {
  const questions = data.questions
  const [selected, setSelected] = useState(() => questions.map(() => []))
  const [feedback, setFeedback] = useState(() => questions.map(() => null))

  function answerIndexes(item) {
    return Array.isArray(item.ans) ? item.ans : [item.ans]
  }

  function isRight(item, selectedAnswers) {
    const correctAnswers = answerIndexes(item)
    return selectedAnswers.length === correctAnswers.length && selectedAnswers.every(value => correctAnswers.includes(value))
  }

  function choose(itemIndex, optionIndex) {
    if (feedback[itemIndex] === 'correct') return
    const multiple = answerIndexes(questions[itemIndex]).length > 1
    const nextSelection = multiple
      ? selected[itemIndex].includes(optionIndex) ? selected[itemIndex].filter(value => value !== optionIndex) : [...selected[itemIndex], optionIndex]
      : [optionIndex]
    setSelected(current => current.map((value, index) => index === itemIndex ? nextSelection : value))
    if (!multiple) saveQuestionAttempt(questions[itemIndex], itemIndex, isRight(questions[itemIndex], nextSelection))
    setFeedback(current => current.map((value, index) => index === itemIndex ? (multiple ? null : (isRight(questions[itemIndex], nextSelection) ? 'correct' : 'wrong')) : value))
  }

  function checkMultiple(itemIndex) {
    if (!selected[itemIndex].length) return
    saveQuestionAttempt(questions[itemIndex], itemIndex, isRight(questions[itemIndex], selected[itemIndex]))
    setFeedback(current => current.map((value, index) => index === itemIndex ? (isRight(questions[itemIndex], selected[itemIndex]) ? 'correct' : 'wrong') : value))
  }

  function saveQuestionAttempt(item, index, correct) {
    const id = grammarMistakeId(unitNum, 'questions', index)
    if (correct) return markGrammarMistakeCorrect(id)
    const answerIndexesValue = answerIndexes(item)
    recordGrammarMistake({ id, unitNum, unitTitle: data.title, type: 'questions', index, prompt: item.q, promptZh: questionChinese(item, 'questions'), correctAnswer: answerIndexesValue.map(answer => item.opts[answer]).join('；'), explanation: chineseExplanation(item, answerIndexesValue.map(answer => item.opts[answer]).join('；')) })
  }

  const completed = feedback.filter(value => value === 'correct').length

  useEffect(() => {
    if (completed === questions.length) markGrammarModeCompleted(unitNum, 'questions')
  }, [completed, questions.length, unitNum])

  return (
    <div className="max-w-4xl mx-auto px-6 pb-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div><h2 className="text-xl font-extrabold text-gray-950">{data.title}选择题</h2><p className="mt-1 text-sm text-gray-500">从上到下完成15题，每题作答后立即获得反馈。</p></div>
        <span className="text-sm font-bold text-emerald-700">{completed}/{questions.length} 已掌握</span>
      </div>
      {completed === questions.length && <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 font-extrabold text-emerald-800">🎉 太棒了！15道题已全部答对。</div>}
      <div className="space-y-4">
        {questions.map((item, itemIndex) => {
          const answers = answerIndexes(item)
          const multiple = answers.length > 1
          return (
            <section key={item.q} className={`rounded-[22px] border bg-white p-5 shadow-sm ${feedback[itemIndex] === 'correct' ? 'border-emerald-300' : feedback[itemIndex] === 'wrong' ? 'border-amber-200' : 'border-gray-200'}`}>
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-sm font-extrabold text-emerald-700">{itemIndex + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className={`mb-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-extrabold ${multiple ? 'bg-amber-100 text-amber-800' : 'bg-emerald-50 text-emerald-700'}`}>{multiple ? '多选题 · 选择所有正确答案' : '单选题'}</div>
                  <p className="text-base font-bold leading-relaxed text-gray-900">{item.q}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-gray-500">{questionChinese(item, 'questions')}</p>
                  <div className="mt-4 grid gap-2 md:grid-cols-2">
                    {item.opts.map((option, optionIndex) => {
                      const chosen = selected[itemIndex].includes(optionIndex)
                      const locked = feedback[itemIndex] === 'correct'
                      const style = locked && answers.includes(optionIndex) ? 'border-emerald-400 bg-emerald-50 text-emerald-900' : feedback[itemIndex] === 'wrong' && chosen ? 'border-amber-300 bg-amber-50 text-amber-900' : chosen ? 'border-[#064e3b] bg-emerald-50 text-[#064e3b]' : 'border-gray-200 bg-white text-gray-800 hover:border-emerald-400'
                      return <button key={optionIndex} disabled={locked} onClick={() => choose(itemIndex, optionIndex)} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${style}`}><span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-extrabold ${chosen || (locked && answers.includes(optionIndex)) ? 'bg-[#064e3b] text-white' : 'bg-gray-100 text-gray-500'}`}>{LABELS[optionIndex]}</span>{option}</button>
                    })}
                  </div>
                  {multiple && feedback[itemIndex] !== 'correct' && <button onClick={() => checkMultiple(itemIndex)} disabled={!selected[itemIndex].length} className="mt-3 rounded-xl bg-[#064e3b] px-5 py-2.5 text-sm font-extrabold text-white disabled:opacity-30">检查答案</button>}
                  {feedback[itemIndex] === 'correct' && <div className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-800"><strong>✓ 回答正确！</strong><span className="ml-2">{chineseExplanation(item, answers.map(answer => item.opts[answer]).join('；'))}</span></div>}
                  {feedback[itemIndex] === 'wrong' && <div className="mt-3 rounded-xl bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900"><strong>还差一点，再试一次。</strong><span className="ml-2">请结合题目中的时间线索、主语和动词结构重新判断。</span></div>}
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

/* ───────── Fill-in-blank ───────── */
function BlanksSection({ data, unitNum }) {
  const blanks = data.blanks
  const [inputs, setInputs] = useState(() => blanks.map(() => ''))
  const [submitted, setSubmitted] = useState(false)

  function isCorrect(item, value) {
    return item.ans.some(answer => answer.trim().toLowerCase() === value.trim().toLowerCase())
  }

  function updateInput(index, value) {
    setInputs(current => current.map((item, itemIndex) => itemIndex === index ? value : item))
  }

  function submitAll() {
    if (inputs.some(value => !value.trim())) return
    blanks.forEach((item, index) => {
      const id = grammarMistakeId(unitNum, 'blanks', index)
      if (isCorrect(item, inputs[index])) markGrammarMistakeCorrect(id)
      else recordGrammarMistake({ id, unitNum, unitTitle: data.title, type: 'blanks', index, prompt: item.sentence, promptZh: questionChinese(item, 'blanks'), correctAnswer: item.ans[0], explanation: chineseExplanation(item, item.ans[0]) })
    })
    setSubmitted(true)
    markGrammarModeCompleted(unitNum, 'blanks')
  }

  function restart() {
    setInputs(blanks.map(() => ''))
    setSubmitted(false)
  }

  const results = blanks.map((item, index) => isCorrect(item, inputs[index]))
  const correct = results.filter(Boolean).length

  if (submitted) return <ResultScreen results={results} total={blanks.length} correct={correct}
    questions={blanks.map(item => ({ text: item.sentence, textZh: questionChinese(item, 'blanks'), correctLabel: item.ans[0], exp: chineseExplanation(item, item.ans[0]) }))}
    onRestart={restart} unitNum={unitNum} title={data.title} mode="挖空练习" />

  return (
    <div className="max-w-4xl mx-auto px-6 pb-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div><h2 className="text-xl font-extrabold text-gray-950">{data.title}填空</h2><p className="mt-1 text-sm text-gray-500">完成全部 {blanks.length} 题后统一提交。（根据句意及括号提示填写正确答案）</p></div>
        <span className="text-sm font-bold text-emerald-700">{inputs.filter(value => value.trim()).length}/{blanks.length} 已填写</span>
      </div>
      <div className="overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-sm">
        {blanks.map((item, index) => {
          const parts = item.sentence.split('___')
          return (
            <div key={item.sentence} className="grid gap-3 border-b border-gray-100 px-5 py-5 last:border-b-0 md:grid-cols-[44px_1fr]">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-sm font-extrabold text-emerald-700">{index + 1}</span>
              <div>
                <div className="flex flex-wrap items-end gap-x-2 gap-y-3 text-base font-semibold leading-relaxed text-gray-800">
                  {parts.map((part, partIndex) => <span key={partIndex} className="contents"><span>{part}</span>{partIndex < parts.length - 1 && <input value={inputs[index]} onChange={event => updateInput(index, event.target.value)} placeholder="填写答案" className="min-w-[150px] flex-1 border-0 border-b-2 border-emerald-400 bg-transparent px-2 py-1 font-bold text-emerald-800 outline-none placeholder:text-gray-300" />}</span>)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <button onClick={submitAll} disabled={inputs.some(value => !value.trim())} className="mt-5 w-full rounded-2xl bg-[#064e3b] py-4 text-base font-bold text-white transition-colors hover:bg-[#065f46] disabled:opacity-30">提交全部答案</button>
    </div>
  )
}

/* ───────── Error Correction ───────── */
function CorrectionsSection({ data, unitNum }) {
  const corrections = data.corrections
  const [selectedParts, setSelectedParts] = useState(() => corrections.map(() => null))
  const [selectionFeedback, setSelectionFeedback] = useState(() => corrections.map(() => null))
  const [answers, setAnswers] = useState(() => corrections.map(() => ''))
  const [answerFeedback, setAnswerFeedback] = useState(() => corrections.map(() => null))
  const [submitted, setSubmitted] = useState(false)

  function normalize(value) {
    return String(value).trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ')
  }

  function comparableWord(value) {
    return String(value).replace(/[’‘]/g, "'").replace(/^["“‘]|[.,!?;:"”’]$/g, '')
  }

  function changedSegment(item) {
    const errorWords = String(item.error).trim().split(/\s+/).filter(Boolean)
    const correctWords = String(item.correct).trim().split(/\s+/).filter(Boolean)
    let prefix = 0
    while (prefix < errorWords.length && prefix < correctWords.length && comparableWord(errorWords[prefix]) === comparableWord(correctWords[prefix])) prefix += 1
    let suffix = 0
    while (
      suffix < errorWords.length - prefix &&
      suffix < correctWords.length - prefix &&
      comparableWord(errorWords[errorWords.length - 1 - suffix]) === comparableWord(correctWords[correctWords.length - 1 - suffix])
    ) suffix += 1
    const errorEnd = errorWords.length - suffix
    const correctEnd = correctWords.length - suffix
    return {
      errorStart: prefix,
      errorEnd: errorEnd > prefix ? errorEnd : Math.min(prefix + 1, errorWords.length),
      errorText: errorWords.slice(prefix, errorEnd).join(' ') || errorWords[0] || item.error,
      correctText: correctWords.slice(prefix, correctEnd).join(' ') || '删除',
    }
  }

  function expectedCorrection(item) {
    return unitNum === 6 ? String(item.correct) : changedSegment(item).correctText
  }

  function correctionLabel(item) {
    if (unitNum === 6) return `${item.error} → ${item.correct}`
    const changed = changedSegment(item)
    return `${changed.errorText} → ${changed.correctText}`
  }

  function partsFor(item) {
    const errorStart = item.sentence.indexOf(item.error)
    if (errorStart < 0) return [...item.sentence.matchAll(/\S+/g)].map((match, index) => ({ text: match[0], index, isError: false }))
    if (unitNum !== 6) {
      const errorEnd = errorStart + item.error.length
      const changed = changedSegment(item)
      let errorWordIndex = 0
      return [...item.sentence.matchAll(/\S+/g)].map((match, index) => {
        const tokenStart = match.index
        const tokenEnd = tokenStart + match[0].length
        const insideErrorPhrase = tokenStart < errorEnd && tokenEnd > errorStart
        const currentErrorWordIndex = insideErrorPhrase ? errorWordIndex++ : -1
        return {
          text: match[0],
          index,
          isError: insideErrorPhrase && currentErrorWordIndex >= changed.errorStart && currentErrorWordIndex < changed.errorEnd,
        }
      })
    }
    const before = item.sentence.slice(0, errorStart).trim().split(/\s+/).filter(Boolean)
    const after = item.sentence.slice(errorStart + item.error.length).trim().split(/\s+/).filter(Boolean)
    return [
      ...before.map(text => ({ text, isError: false })),
      { text: item.error, isError: true },
      ...after.map(text => ({ text, isError: false })),
    ].map((part, index) => ({ ...part, index }))
  }

  function resultFor(item, index) {
    const foundError = selectionFeedback[index] === 'correct'
    const correctedPart = [expectedCorrection(item), item.correct].some(value => normalize(answers[index]) === normalize(value))
    return { foundError, correctedPart, correct: foundError && correctedPart }
  }

  const results = corrections.map(resultFor)
  const completed = answerFeedback.filter(value => value === 'correct').length

  function selectPart(itemIndex, part) {
    if (selectionFeedback[itemIndex] === 'correct') return
    setSelectedParts(current => current.map((value, index) => index === itemIndex ? part.index : value))
    setSelectionFeedback(current => current.map((value, index) => index === itemIndex ? (part.isError ? 'correct' : 'wrong') : value))
    if (!part.isError) saveCorrectionMistake(corrections[itemIndex], itemIndex)
  }

  function checkCorrection(item, itemIndex) {
    if (!answers[itemIndex].trim()) return
    const correct = [expectedCorrection(item), item.correct].some(value => normalize(answers[itemIndex]) === normalize(value))
    const id = grammarMistakeId(unitNum, 'corrections', itemIndex)
    if (correct) markGrammarMistakeCorrect(id)
    else saveCorrectionMistake(item, itemIndex)
    setAnswerFeedback(current => current.map((value, index) => index === itemIndex ? (correct ? 'correct' : 'wrong') : value))
  }

  function saveCorrectionMistake(item, index) {
    const id = grammarMistakeId(unitNum, 'corrections', index)
    recordGrammarMistake({ id, unitNum, unitTitle: data.title, type: 'corrections', index, prompt: item.sentence, promptZh: questionChinese(item, 'corrections'), correctAnswer: correctionLabel(item), explanation: chineseExplanation(item, correctionLabel(item)) })
  }

  function correctionHint(item) {
    const expected = expectedCorrection(item)
    const lower = expected.toLowerCase()
    if (/^(do|does|don’t|doesn’t|don't|doesn't)$/.test(lower)) return '想一想：这个主语是第三人称单数，还是I、you或复数主语？'
    if (/^(do|does)\s/.test(lower)) return '想一想：一般现在时疑问句需要哪个助动词？助动词后使用动词原形。'
    if (lower.split(' ').length > 1) return `提示：正确部分包含 ${lower.split(' ').length} 个单词，请检查助动词和动词形式。`
    if (expected === '删除') return '提示：这个词是多余的，请输入“删除”。'
    return `提示：正确答案以“${expected.charAt(0)}”开头，请检查主语和动词的搭配。`
  }

  function restart() {
    setSelectedParts(corrections.map(() => null))
    setSelectionFeedback(corrections.map(() => null))
    setAnswers(corrections.map(() => ''))
    setAnswerFeedback(corrections.map(() => null))
    setSubmitted(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pb-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div><h2 className="text-xl font-extrabold text-gray-950">{data.title}改错</h2><p className="mt-1 text-sm text-gray-500">先点击错误部分，再输入改正后的部分。</p></div>
        <span className="text-sm font-bold text-emerald-700">{completed}/{corrections.length} 已完成</span>
      </div>
      {submitted && (
        <div className="mb-4 flex items-center justify-between rounded-2xl bg-emerald-50 px-5 py-4 text-emerald-900">
          <span className="font-bold">本次答对 {results.filter(result => result.correct).length} / {corrections.length} 题</span>
          <button onClick={restart} className="text-sm font-extrabold text-emerald-700">重新练习 →</button>
        </div>
      )}
      <div className="space-y-3">
        {corrections.map((item, index) => {
          const result = results[index]
          return (
            <section key={item.sentence} className={`rounded-[20px] border bg-white p-5 ${answerFeedback[index] === 'correct' ? 'border-emerald-300' : 'border-gray-200'}`}>
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-sm font-extrabold text-emerald-700">{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="mb-3 text-xs font-bold text-gray-400">点击你认为有错误的部分</p>
                  <div className="flex flex-wrap gap-2">
                    {partsFor(item).map(part => {
                      const selected = selectedParts[index] === part.index
                      const style = submitted
                        ? part.isError ? 'border-emerald-400 bg-emerald-50 text-emerald-800' : selected ? 'border-red-300 bg-red-50 text-red-700' : 'border-gray-100 bg-white text-gray-500'
                        : selectionFeedback[index] === 'correct' && part.isError ? 'border-emerald-400 bg-emerald-50 text-emerald-800' : selected && selectionFeedback[index] === 'wrong' ? 'border-red-300 bg-red-50 text-red-700' : 'border-gray-200 bg-white text-gray-800 hover:border-emerald-400'
                      return <button key={part.index} disabled={submitted || selectionFeedback[index] === 'correct'} onClick={() => selectPart(index, part)} className={`rounded-lg border px-2.5 py-1.5 text-base font-semibold transition-colors ${style}`}>{part.text}</button>
                    })}
                  </div>
                  {selectionFeedback[index] === 'wrong' && <p className="mt-3 text-sm font-bold text-red-500">这里不是错误，再试一下。</p>}
                  {selectionFeedback[index] === 'correct' && <p className="mt-3 text-sm font-bold text-emerald-700">✓ 找对了！请在下方输入改正后的部分。</p>}
                  {selectionFeedback[index] === 'correct' && (
                    <div className="mt-3 flex gap-2">
                      <input disabled={submitted || answerFeedback[index] === 'correct'} value={answers[index]} onChange={event => { setAnswers(current => current.map((value, itemIndex) => itemIndex === index ? event.target.value : value)); setAnswerFeedback(current => current.map((value, itemIndex) => itemIndex === index ? null : value)) }} onKeyDown={event => { if (event.key === 'Enter') checkCorrection(item, index) }} placeholder={expectedCorrection(item) === '删除' ? '输入“删除”' : '输入改正后的单词'} className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 outline-none focus:border-emerald-500 focus:bg-white disabled:opacity-70" />
                      {answerFeedback[index] !== 'correct' && <button onClick={() => checkCorrection(item, index)} disabled={!answers[index].trim()} className="shrink-0 rounded-xl bg-[#064e3b] px-5 py-3 text-sm font-extrabold text-white disabled:opacity-30">检查答案</button>}
                    </div>
                  )}
                  {answerFeedback[index] === 'correct' && (
                    <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-800">
                      <p className="font-extrabold">✓ 太棒了，修改正确！</p>
                      <p className="mt-1">{chineseExplanation(item, correctionLabel(item))}</p>
                    </div>
                  )}
                  {answerFeedback[index] === 'wrong' && (
                    <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
                      <p className="font-extrabold">还差一点，再试一次。</p>
                      <p className="mt-1">{correctionHint(item)}</p>
                    </div>
                  )}
                  {submitted && (
                    <div className="mt-3 space-y-1 text-sm">
                      <p className={result.foundError ? 'text-emerald-700' : 'text-red-600'}>{result.foundError ? '✓ 已找对错误位置' : `✗ 错误位置应为：${unitNum === 6 ? item.error : changedSegment(item).errorText}`}</p>
                      <p className={result.correctedPart ? 'text-emerald-700' : 'text-red-600'}>{result.correctedPart ? '✓ 改正后的部分填写正确' : `✗ 正确答案：${expectedCorrection(item)}`}</p>
                      <p className="pt-1 leading-relaxed text-gray-500">{chineseExplanation(item, correctionLabel(item))}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )
        })}
      </div>
      {!submitted && <button onClick={() => { setSubmitted(true); markGrammarModeCompleted(unitNum, 'corrections') }} disabled={completed !== corrections.length} className="mt-5 w-full rounded-2xl bg-[#064e3b] py-4 text-base font-bold text-white hover:bg-[#065f46] disabled:opacity-30">完成练习</button>}
    </div>
  )
}

/* ───────── Shared sub-components ───────── */

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
            {q.textZh && <div className="text-xs text-gray-500 ml-5 mb-2 leading-relaxed">{q.textZh}</div>}
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
