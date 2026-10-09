import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CambridgeLayout } from './CambridgeApp'
import { fceReadingTests } from '../data/fceReadingTests'
import { fceExamPapers, fceExamTitle, FCE_EDITIONS } from '../data/fceTestRegistry'
import { recordFcePart } from '../data/fceExamProgress'
import { setFceWrongBatch } from '../data/fceWrongBook'

const PART_META_FCE = {
  count: 7,
  labels: { 1: 'Part 1', 2: 'Part 2', 3: 'Part 3', 4: 'Part 4', 5: 'Part 5', 6: 'Part 6', 7: 'Part 7' },
  desc: {
    1: '选择填空',   2: '完形填空',   3: '词形变换',
    4: '句子转换',   5: '阅读选择',   6: '段落匹配', 7: '多文本匹配',
  },
  help: {
    1: '阅读短文，为每个空从 A、B、C、D 中选择最恰当的单词。',
    2: '阅读短文，为每个空填写一个最恰当的单词（有提示词）。',
    3: '阅读短文，根据括号内的词根词缀变换成正确的词形。',
    4: '根据关键词改写句子，保持原意不变，2-5 个词。',
    5: '阅读长文，回答 6 道阅读理解选择题（A/B/C/D）。',
    6: '阅读被抽走 6 个句子的文章，从 A–G 中选择正确句子填空。',
    7: '阅读 A–D 四段人物/地区介绍，为每道题选择最匹配的段落。',
  },
}

const ACCENT = {
  solid: 'bg-sky-500',
  solidBorder: 'border-sky-500',
  text: 'text-sky-500',
  strongText: 'text-sky-600',
  cardHover: 'hover:border-sky-300 hover:bg-sky-50',
  optionIdle: 'border-slate-200 bg-white hover:border-sky-400 hover:bg-sky-50',
  optionSel: 'border-sky-500 bg-sky-50',
  pillActive: 'border-sky-500 bg-sky-500 text-white shadow-sm',
  pillIdle: 'border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-600',
  chipActive: 'border-sky-500 bg-sky-500 text-white shadow-sm',
  chipIdle: 'border-sky-100 bg-sky-50 text-sky-700 hover:border-sky-300',
  timerBox: 'border-sky-200 bg-sky-50',
  timerOn: 'bg-sky-500 text-white',
  timerOff: 'bg-white text-sky-500 shadow-sm',
}

function renderPassageWithGaps(passage, answers, onAnswer, gapColor = ACCENT.text) {
  if (!passage) return null
  // 匹配 "(1)....." 或 "(1)\u00A0\u00A0\u00A0..." 或 "(1) " 这样的空位标记
  const regex = /\((\d+)\)[\s.··]+/g
  const parts = []
  let lastIndex = 0
  let m
  while ((m = regex.exec(passage)) !== null) {
    // 空位前的文本
    if (m.index > lastIndex) {
      parts.push(<span key={`t-${m.index}`}>{passage.slice(lastIndex, m.index)}</span>)
    }
    const qNum = Number(m[1])
    const val = answers[qNum] || ''
    parts.push(
      <input
        key={`g-${qNum}`}
        value={val}
        onChange={e => onAnswer(qNum, e.target.value)}
        className={`mx-1 inline-block w-20 border-b-2 bg-transparent text-center font-semibold uppercase outline-none transition-colors ${
          val ? `${gapColor} border-sky-400` : 'text-slate-400 border-slate-300'
        } focus:border-sky-500`}
        maxLength={12}
        style={{ fontSize: '0.9em' }}
      />,
    )
    lastIndex = m.index + m[0].length
  }
  if (lastIndex < passage.length) {
    parts.push(<span key="t-end">{passage.slice(lastIndex)}</span>)
  }
  return parts
}

export default function CambridgeReadingFCE() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [partId, setPartId] = useState(() => {
    const requested = Number(searchParams.get('part'))
    return Number.isInteger(requested) && requested >= 1 && requested <= 7 ? requested : 1
  })
  const [batchIdx, setBatchIdx] = useState(() => {
    const requestedTest = Number(searchParams.get('test'))
    return Number.isInteger(requestedTest) && requestedTest >= 1 ? requestedTest - 1 : 0
  })
  const [answers, setAnswers] = useState({})
  const [batchChecked, setBatchChecked] = useState(false)
  const [showAns, setShowAns] = useState({})
  const [timerOn, setTimerOn] = useState(false)
  const [timer, setTimer] = useState(0)
  const timerRef = useRef(null)

  // ?exam=fce-standard-1-test2 优先；否则 ?test=N 走全真模拟（旧入口）
  const examParam = searchParams.get('exam')
  const parsedExam = examParam ? fceExamPapers(examParam) : null
  const examRef = parsedExam ? examParam : batchIdx + 1
  const test = (parsedExam && parsedExam.reading) || fceReadingTests[batchIdx] || null
  const currentPart = test?.parts?.[partId] || null

  useEffect(() => {
    if (timerOn && timer > 0) {
      timerRef.current = setInterval(() => setTimer(t => t - 1), 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [timerOn, timer])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnswers({})
    setBatchChecked(false)
    setShowAns({})
    setTimer(0)
  }, [partId, batchIdx, examParam])

  function setAnswer(qKey, val) {
    setAnswers(prev => ({ ...prev, [qKey]: val }))
  }
  function checkBatch() {
    setBatchChecked(true)
    if (currentPart?.items?.length) {
      recordFcePart('reading', examRef, partId, Object.keys(answers).length, currentPart.items.length)
    }
  }

  // 错题收集：提交后按与渲染一致的判定口径重算，答对过的旧错题自动移出
  useEffect(() => {
    if (!batchChecked) return
    const items = currentPart?.items || []
    const wrongMap = {}
    items.forEach(item => {
      const ua = answers[item.q]
      const qKey = item.q
      let correct
      let display = ua == null ? '' : String(ua)
      if (partId === 1 || partId === 5) {
        correct = ua === item.answer
        display = ua != null && ua >= 0 && ua < 26 ? String.fromCharCode(65 + ua) : ''
      } else if (partId === 2 || partId === 3) {
        correct = (item.answer || []).map(a => a.toUpperCase()).includes(String(ua || '').trim().toUpperCase())
      } else if (partId === 4) {
        const userNorm = String(ua || '').trim().toLowerCase()
        correct = (item.answer || []).map(a => a.trim().toLowerCase()).some(a => userNorm.includes(a) || a.includes(userNorm))
      } else {
        correct = String(ua || '').toUpperCase() === item.answer
      }
      if (!correct) wrongMap[qKey] = display
    })
    setFceWrongBatch('reading', examRef, partId, wrongMap)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [batchChecked])
  function resetBatch() {
    setAnswers({})
    setBatchChecked(false)
    setShowAns({})
  }
  function toggleShowAns(qKey) {
    setShowAns(prev => ({ ...prev, [qKey]: !prev[qKey] }))
  }

  const fmtTime = s =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  // ── 渲染 Part 1 / Part 5 多选题 ──
  function renderMCQItems(items, answerKeyFn, optsKeyFn) {
    return items.map((item, qi) => {
      const qKey = answerKeyFn(item)
      const opts = optsKeyFn(item)
      const userAns = answers[qKey] ?? null
      const correctAns = item.answer
      const isCorrect = userAns === correctAns
      const showThis = showAns[qKey]
      const isMCQ = partId === 1 || partId === 5

      return (
        <motion.div key={qKey}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: qi * 0.04 }}
          className={`border rounded-xl p-4 mb-3 transition-colors ${
            batchChecked
              ? isCorrect
                ? 'border-emerald-200 bg-emerald-50/40'
                : 'border-red-200 bg-red-50/40'
              : 'border-slate-200 bg-white'
          }`}
        >
          {/* 题干 */}
          <div className="flex items-start gap-2 mb-3">
            <span className={`w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold ${
              batchChecked
                ? isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                : userAns !== null ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-600'
            }`}>{item.q}</span>
            {item.q_text && (
              <p className="text-base font-extrabold text-slate-700 leading-7">{item.q_text}</p>
            )}
          </div>
          {/* 选项 */}
          {isMCQ && opts.map((optLabel, oi) => {
            const selected = userAns === oi
            const cls = selected
              ? ACCENT.optionSel
              : ACCENT.optionIdle
            return (
              <button key={oi}
                onClick={() => setAnswers(prev => ({ ...prev, [qKey]: oi }))}
                className={`w-full text-left border rounded-lg p-2.5 mb-1.5 text-sm font-medium transition-all ${cls}`}
              >
                <span className="mr-2 inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-slate-300 text-xs font-bold">
                  {String.fromCharCode(65 + oi)}
                </span>
                {optLabel}
                {batchChecked && selected && isCorrect && (
                  <span className="ml-2 text-emerald-600 font-bold">✓</span>
                )}
                {batchChecked && selected && !isCorrect && (
                  <span className="ml-2 text-red-500 font-bold">✗</span>
                )}
              </button>
            )
          })}
          {/* 正确答案提示 */}
          {batchChecked && !isCorrect && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-600">正确答案：{String.fromCharCode(65 + correctAns)}</span>
              <button onClick={() => toggleShowAns(qKey)}
                className="text-xs font-bold text-sky-600 underline">
                {showThis ? '收起解析' : '查看解析'}
              </button>
            </div>
          )}
          {showThis && item.explanation && (
            <div className="mt-2 rounded-lg bg-sky-50 border border-sky-200 p-3 text-sm text-sky-800 leading-6">
              <strong className="font-bold">解析：</strong>{item.explanation}
            </div>
          )}
        </motion.div>
      )
    })
  }

  // ── 渲染 Part 2 / Part 3 填空题 ──
  function renderOpenCloze() {
    const items = currentPart.items || []
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="min-w-0 bg-gray-50 rounded-xl border border-gray-100 p-5 overflow-y-auto" style={{ maxHeight: '70vh' }}>
          <div className="text-[19px] text-gray-700 leading-9 whitespace-pre-line">
            {renderPassageWithGaps(currentPart.passage, answers, setAnswer)}
          </div>
        </div>
        <div className="min-w-0 space-y-3 overflow-y-auto pr-1" style={{ maxHeight: '70vh' }}>
          {items.map((item, qi) => {
            const qKey = item.q
            const userAns = (answers[qKey] || '').trim().toUpperCase()
            const correctAccepted = (item.answer || []).map(a => a.toUpperCase())
            const isCorrect = correctAccepted.includes(userAns)
            const showThis = showAns[qKey]
            return (
              <motion.div key={qKey}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: qi * 0.04 }}
                className={`border rounded-xl p-4 transition-colors ${
                  batchChecked
                    ? isCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-red-200 bg-red-50/40'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                    batchChecked
                      ? isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                      : userAns ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-600'
                  }`}>{item.q}</span>
                  {item.given && <span className="text-xs font-bold text-slate-400">({item.given})</span>}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    value={answers[qKey] || ''}
                    onChange={e => setAnswer(qKey, e.target.value)}
                    placeholder="填入答案"
                    className={`flex-1 border rounded-lg px-3 py-2 text-sm font-semibold uppercase outline-none transition-colors ${
                      batchChecked
                        ? isCorrect ? 'border-emerald-300 bg-emerald-50 text-emerald-700' : 'border-red-300 bg-red-50 text-red-700'
                        : 'border-slate-200 bg-white text-slate-700 focus:border-sky-400'
                    }`}
                  />
                  {batchChecked && !isCorrect && (
                    <span className="text-xs font-bold text-emerald-600">
                      正确：{item.show || correctAccepted.join(' / ')}
                    </span>
                  )}
                </div>
                {batchChecked && !isCorrect && (
                  <div className="mt-2">
                    <button onClick={() => toggleShowAns(qKey)}
                      className="text-xs font-bold text-sky-600 underline">
                      {showThis ? '收起解析' : '查看解析'}
                    </button>
                  </div>
                )}
                {showThis && item.explanation && (
                  <div className="mt-2 rounded-lg bg-sky-50 border border-sky-200 p-3 text-sm text-sky-800 leading-6">
                    <strong className="font-bold">解析：</strong>{item.explanation}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }

  // ── 渲染 Part 4 句子转换 ──
  function renderKeyWordTransformation() {
    const items = currentPart.items || []
    return (
      <div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, qi) => {
          const qKey = item.q
          const userAns = (answers[qKey] || '').trim()
          const correctAccepted = (item.answer || []).map(a => a.trim().toLowerCase())
          const userNorm = userAns.toLowerCase()
          const isCorrect = correctAccepted.some(a => userNorm.includes(a) || a.includes(userNorm))
          const showThis = showAns[qKey]
          return (
            <motion.div key={qKey}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: qi * 0.04 }}
              className={`border rounded-xl p-5 transition-colors ${
                batchChecked
                  ? isCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-red-200 bg-red-50/40'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                  batchChecked
                    ? isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                    : userAns ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-600'
                }`}>{item.q}</span>
                <span className="rounded-lg bg-amber-100 border border-amber-300 px-2 py-0.5 text-xs font-extrabold text-amber-800 uppercase tracking-wide">
                  {item.key}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-1 font-medium">{item.stem}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-slate-400 font-bold text-lg">→</span>
                <input
                  value={answers[qKey] || ''}
                  onChange={e => setAnswer(qKey, e.target.value)}
                  placeholder="填写改写后的句子（2-5 词）"
                  className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-sky-400"
                />
              </div>
              {batchChecked && (
                <div className="mt-3">
                  {!isCorrect && (
                    <p className="text-xs font-bold text-emerald-600">参考答案：{item.show || correctAccepted.join(' / ')}</p>
                  )}
                  <button onClick={() => toggleShowAns(qKey)}
                    className="text-xs font-bold text-sky-600 underline mt-1">
                    {showThis ? '收起解析' : '查看解析'}
                  </button>
                  {showThis && item.explanation && (
                    <div className="mt-2 rounded-lg bg-sky-50 border border-sky-200 p-3 text-sm text-sky-800 leading-6">
                      <strong className="font-bold">解析：</strong>{item.explanation}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    )
  }

  // ── 渲染 Part 6 段落匹配 ──
  function renderParagraphMatching() {
    const items = currentPart.items || []
    const options = currentPart.options || []
    return (
      <div className="space-y-5">
        {/* 选项区 */}
        <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-5">
          <div className="text-xs font-extrabold tracking-[.18em] text-sky-600 mb-3">可选择的句子（A–G）</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {options.map(opt => (
              <div key={opt.label} className="rounded-lg bg-white border border-slate-200 p-3 flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sky-500 text-white font-bold text-sm flex items-center justify-center">{opt.label}</span>
                <p className="text-sm text-slate-700 leading-6">{opt.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* 文章区 */}
        <div className="rounded-xl border border-slate-200 bg-gray-50 p-6">
          <div className="text-[17px] text-gray-700 leading-9 whitespace-pre-line">
            {renderPassageWithGaps(currentPart.passage, answers, setAnswer)}
          </div>
        </div>
        {/* 答案对比 */}
        {batchChecked && (
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="text-xs font-extrabold tracking-[.18em] text-slate-500 mb-3">答案对照</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {items.map(item => {
                const qKey = item.q
                const userAns = (answers[qKey] || '').toUpperCase()
                const isCorrect = userAns === item.answer
                return (
                  <div key={qKey} className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                    isCorrect ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {qKey}. 你选: {userAns || '—'} / 正确: {item.answer}
                    {!isCorrect && (
                      <p className="text-xs text-slate-500 mt-1 font-normal">{item.explanation}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── 渲染 Part 7 多文本匹配 ──
  function renderMultipleMatching() {
    const sections = currentPart.sections || []
    const items = currentPart.items || []
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* 左：题目 */}
        <div className="space-y-3">
          {items.map((item, qi) => {
            const qKey = item.q
            const userAns = (answers[qKey] || '').toUpperCase()
            const isCorrect = userAns === item.answer
            return (
              <motion.div key={qKey}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: qi * 0.04 }}
                className={`border rounded-xl p-4 transition-colors ${
                  batchChecked
                    ? isCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-red-200 bg-red-50/40'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-start gap-2 mb-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold ${
                    batchChecked
                      ? isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                      : userAns ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-600'
                  }`}>{item.q}</span>
                  <p className="text-sm font-semibold text-slate-700 leading-6">{item.q_text}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['A', 'B', 'C', 'D'].map(label => (
                    <button key={label}
                      onClick={() => setAnswers(prev => ({ ...prev, [qKey]: label }))}
                      className={`w-9 h-9 rounded-lg border font-bold text-sm transition-all ${
                        userAns === label
                          ? ACCENT.optionSel
                          : ACCENT.optionIdle
                      }`}
                    >{label}</button>
                  ))}
                </div>
                {batchChecked && !isCorrect && (
                  <p className="mt-2 text-xs font-bold text-slate-500">解析：{item.explanation}</p>
                )}
              </motion.div>
            )
          })}
        </div>
        {/* 右：四篇文章 */}
        <div className="space-y-3 overflow-y-auto" style={{ maxHeight: '70vh' }}>
          {sections.map(sec => (
            <div key={sec.label} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-sky-500 text-white font-bold text-sm flex items-center justify-center">{sec.label}</span>
                <span className="text-sm font-bold text-slate-700">{sec.name}</span>
              </div>
              <p className="text-[14px] text-slate-600 leading-7 whitespace-pre-line">{sec.text}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── 主渲染 ──
  if (!test) return (
    <CambridgeLayout activeModule="reading" level="FCE">
      <div className="p-8 text-center text-slate-500">暂无可用的 FCE 真题</div>
    </CambridgeLayout>
  )

  const totalItems = currentPart?.items?.length || 0
  const answeredCount = Object.keys(answers).filter(k => answers[k] !== '').length

  // Part 1 和 Part 5 用多选渲染器
  function renderMCQPart() {
    if (!currentPart?.items) return null
    // Part 1: opts 是字符串数组，answer 是索引
    // Part 5: opts 是字符串数组，answer 是索引
    const partType = currentPart.type
    if (partType === 'mcq_cloze') {
      // Part 1：带空位的 passage + 右侧多选
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="min-w-0 bg-gray-50 rounded-xl border border-gray-100 p-5 overflow-y-auto" style={{ maxHeight: '70vh' }}>
            <div className="text-center text-xl font-extrabold text-gray-900 mb-2">{currentPart.title}</div>
            <div className="text-[19px] text-gray-700 leading-9 whitespace-pre-line">
              {renderPassageWithGaps(currentPart.passage, answers, setAnswer)}
            </div>
          </div>
          <div className="min-w-0 space-y-3 overflow-y-auto pr-1" style={{ maxHeight: '70vh' }}>
            {renderMCQItems(
              currentPart.items,
              item => item.q,
              item => item.opts,
            )}
          </div>
        </div>
      )
    }
    if (partType === 'reading_mcq') {
      // Part 5：纯 passage + 右侧多选
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="min-w-0 bg-gray-50 rounded-xl border border-gray-100 p-5 overflow-y-auto" style={{ maxHeight: '70vh' }}>
            <div className="text-center text-xl font-extrabold text-gray-900 mb-2">{currentPart.title}</div>
            <div className="text-[17px] text-gray-700 leading-9 whitespace-pre-line">
              {currentPart.passage}
            </div>
          </div>
          <div className="min-w-0 space-y-3 overflow-y-auto pr-1" style={{ maxHeight: '70vh' }}>
            {renderMCQItems(
              currentPart.items,
              item => item.q,
              item => item.opts,
            )}
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <CambridgeLayout activeModule="reading" level="FCE">
      {/* 顶栏：Part 导航 */}
      <nav className="border-b border-slate-100 bg-white px-4 sm:px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
          <span className={`mr-1 rounded-xl border ${ACCENT.solidBorder} ${ACCENT.solid} px-4 py-2.5 text-sm font-extrabold text-white shadow-sm`}>
            FCE 阅读中心
          </span>
          <Link to="/cambridge/wrong/fce" className="rounded-xl border border-sky-200 bg-white px-3 py-2.5 text-sm font-extrabold text-sky-700 transition hover:border-sky-400">✗ 错题本</Link>
          {Array.from({ length: 7 }, (_, i) => i + 1).map(pid => (
            <button key={pid}
              onClick={() => { setPartId(pid); setBatchIdx(0); setSearchParams(examParam ? { part: String(pid), exam: examParam } : { part: String(pid) }) }}
              aria-current={partId === pid ? 'page' : undefined}
              className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
                partId === pid ? ACCENT.pillActive : ACCENT.pillIdle
              }`}
            >Part {pid}</button>
          ))}
        </div>
      </nav>

      {/* 主区域 */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-7">
        {/* 标题 + 计时器 */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className={`text-[11px] font-extrabold tracking-[.18em] ${ACCENT.strongText}`}>FCE READING</div>
            <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900">
              {PART_META_FCE.labels[partId]} · {PART_META_FCE.desc[partId]}
            </h1>
            <p className="mt-2 text-slate-500">{PART_META_FCE.help[partId]}</p>
          </div>
          <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${ACCENT.timerBox}`}>
            <button onClick={() => setTimerOn(t => !t)}
              className={`rounded-xl px-4 py-2 font-mono text-sm font-bold transition ${timerOn ? ACCENT.timerOn : ACCENT.timerOff}`}>
              ⏱ {fmtTime(timer)}
            </button>
            <div className="min-w-20 text-right text-xs text-slate-500">
              <div className="font-bold text-slate-700">{answeredCount} / {totalItems}</div>
              <div>完成进度</div>
            </div>
          </div>
        </div>

        {/* 套题选择 */}
        <section className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <strong className="text-sm text-slate-700">选择练习</strong>
            <span className="text-xs text-slate-400">
              当前为 {test ? (parsedExam ? fceExamTitle(examParam) : test.title) : '—'}
            </span>
          </div>
          <div className="space-y-2">
            {FCE_EDITIONS.map(ed => {
              const chips = ed.books.flatMap(b => {
                if (ed.edition === 'mock') {
                  const t = fceReadingTests[b.book - 1]
                  return t ? [{ key: b.examId, label: `Test ${b.book}`, examId: b.examId }] : []
                }
                return [1, 2, 3, 4].map(t => {
                  const examId = `${b.examId}-test${t}`
                  return fceExamPapers(examId)?.reading ? { key: examId, label: `${ed.label === '标准版真题' ? '标准' : '校园'}${b.book}·T${t}`, examId } : []
                })
              })
              if (!chips.length) return null
              return (
                <div key={ed.edition} className="flex flex-wrap items-center gap-2">
                  <span className="w-20 flex-shrink-0 text-[11px] font-extrabold text-slate-400">{ed.label}</span>
                  {chips.map(chip => {
                    const active = parsedExam ? examParam === chip.examId : chip.examId === `fce-mock-${batchIdx + 1}`
                    return (
                      <button key={chip.key}
                        onClick={() => {
                          if (ed.edition === 'mock') { setBatchIdx(Number(chip.examId.slice(9)) - 1); setSearchParams({ test: String(Number(chip.examId.slice(9))) }) }
                          else setSearchParams({ exam: chip.examId })
                        }}
                        className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                          active ? ACCENT.chipActive : ACCENT.chipIdle
                        }`}
                      >{chip.label}</button>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </section>

        {/* 提交/重置按钮 */}
        <div className="mt-6 flex gap-3">
          {!batchChecked && (
            <button onClick={checkBatch}
              className={`rounded-xl px-5 py-2.5 text-sm font-extrabold text-white transition ${ACCENT.solid} hover:opacity-90 shadow-sm`}>
              提交答案
            </button>
          )}
          {batchChecked && (
            <button onClick={resetBatch}
              className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-extrabold text-slate-600 hover:border-sky-400 hover:text-sky-600 transition">
              重做此套
            </button>
          )}
        </div>

        {/* Part 渲染区 */}
        <section className="mt-6">
          {partId === 1 || partId === 5 ? renderMCQPart() : null}
          {partId === 2 || partId === 3 ? renderOpenCloze() : null}
          {partId === 4 ? renderKeyWordTransformation() : null}
          {partId === 6 ? renderParagraphMatching() : null}
          {partId === 7 ? renderMultipleMatching() : null}
        </section>
      </main>
    </CambridgeLayout>
  )
}
