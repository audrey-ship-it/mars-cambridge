import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { markGrammarMistakeCorrect, readGrammarMistakes, recordGrammarMistake } from '../utils/grammarMistakes'
import { GRAMMAR_QUESTIONS } from '../data/grammarQuestions'
import { getKetReadingTest } from '../data/ketReadingCatalog'
import { LISTENING_GAP_EXERCISES } from '../data/listeningGapData'
import { officialListeningAudio } from '../data/officialListeningManifest'
import { mockListeningData, isMockAnswerRight } from './CambridgeListening'

const CATEGORIES = [
  { id: 'words', label: '词汇错题', icon: '📖' },
  { id: 'grammar', label: '语法错题', icon: '📐' },
  { id: 'reading', label: '阅读错题', icon: '📄' },
  { id: 'listening', label: '听力错题', icon: '🎧' },
  { id: 'dictation', label: '听写错题', icon: '⌨️' },
]

function stored(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
}

function examIdFor(setId) {
  if (setId > 12) return `ket-standard-${Math.floor((setId - 13) / 4) + 1}-test${((setId - 13) % 4) + 1}`
  return `ket-${Math.floor((setId - 1) / 4) + 1}-test${((setId - 1) % 4) + 1}`
}

function readingMistakes() {
  const results = []
  for (let setId = 1; setId <= 20; setId += 1) {
    const examId = examIdFor(setId)
    const progress = stored(`mars_ket_exam_progress_v1:${examId}:reading`, null)
    const test = getKetReadingTest(examId)
    if (!progress?.allAnswers || !test) continue
    for (let part = 1; part <= 5; part += 1) {
      const values = progress.allAnswers[part - 1]
      const questions = test[`part${part}`]?.questions || []
      if (!Array.isArray(values)) continue
      questions.forEach((question, index) => {
        const value = values[index]
        if (!progress.done && (value === null || value === undefined || String(value).trim() === '')) return
        const correct = part === 5
          ? (question.answers || [question.answer]).some(answer => String(answer).trim().toLowerCase() === String(value).trim().toLowerCase())
          : part === 2 ? value === question.answer : value === 'ABC'.indexOf(question.answer)
        if (correct) return
        results.push({
          id: `${examId}-${part}-${index}`,
          source: `标准版/青少版真题 ${setId} · Part ${part} · 第 ${question.id} 题`,
          prompt: question.question || question.text || question.content || `第 ${question.id} 题`,
          answer: part === 5 ? (question.answers || [question.answer]).join(' / ') : question.answer,
          response: value === null || value === undefined || String(value).trim() === '' ? '未作答' : part === 2 || part === 5 ? String(value) : 'ABC'[value] || String(value),
          path: progress.done ? `/cambridge/exams/${examId}?tab=reading&review=1` : null,
        })
      })
    }
  }
  return results
}

function listeningMistakes() {
  const results = []
  for (let setId = 1; setId <= 20; setId += 1) {
    const examId = examIdFor(setId)
    for (let part = 1; part <= 5; part += 1) {
      const saved = stored(`mars_ket_listening_progress_v1:set-${setId}:part-${part}`, null)
      const data = mockListeningData(setId, part)
      if (!data || !Array.isArray(saved?.answers)) continue
      data.items.forEach((item, index) => {
        const value = saved.answers[index]
        const checked = Array.isArray(saved.checked) ? saved.checked[index] : value !== null && value !== undefined && String(value).trim() !== ''
        if (!checked || isMockAnswerRight(data, item, value)) return
        results.push({
          id: `practice-${setId}-${part}-${index}`,
          source: `听力专项练习 ${setId} · Part ${part} · 第 ${(part - 1) * 5 + index + 1} 题`,
          prompt: item.q || item.question || `第 ${index + 1} 题`,
          answer: data.type === 'blanks' ? item.answer.join(' / ') : 'ABCDEFGH'[item.answer],
          response: data.type === 'blanks' ? String(value || '未作答') : 'ABCDEFGH'[value] || String(value),
          redo: { kind: 'listening', setId, part, index },
        })
      })
    }
    const mock = stored(`mars_ket_mock_listening_v2:set-${setId}`, null)
    if (mock?.parts) {
      for (let part = 1; part <= 5; part += 1) {
        const data = mockListeningData(setId, part)
        const values = mock.parts[part]
        if (!data || !Array.isArray(values)) continue
        data.items.forEach((item, index) => {
          const value = values[index]
          if ((!mock.completed && (value === null || value === undefined || String(value).trim() === '')) || isMockAnswerRight(data, item, value)) return
          const label = input => data.type === 'blanks' ? String(input) : 'ABCDEFGH'[input] || String(input)
          results.push({
            id: `mock-${setId}-${part}-${index}`,
            source: `真题 ${setId} · Part ${part} · 第 ${(part - 1) * 5 + index + 1} 题`,
            prompt: item.q || item.question,
            answer: data.type === 'blanks' ? item.answer.join(' / ') : label(item.answer),
            response: value === null || value === undefined || String(value).trim() === '' ? '未作答' : label(value),
            path: mock.completed ? `/cambridge/listening?mode=mock&exam=${examId}&part=5&set=${setId}&review=1` : null,
          })
        })
      }
    }
  }
  return results
}

function dictationMistakes() {
  const results = []
  LISTENING_GAP_EXERCISES.forEach(exercise => {
    const progress = stored(`mars_ket_gap_progress_v1:exercise-${exercise.exerciseNumber}`, null)
    if (!progress?.submitted || !exercise.cloze) return
    exercise.cloze.forEach((question, questionIndex) => question.lines.forEach((line, lineIndex) => line.parts.forEach((part, partIndex) => {
      if (typeof part !== 'object') return
      const key = `${questionIndex}-${lineIndex}-${partIndex}`
      const value = progress.responses?.[key] || ''
      const normalise = text => String(text).toLowerCase().replace(/[^a-z0-9]/g, '')
      if (normalise(value) === normalise(part.answer)) return
      results.push({
        id: `gap-${exercise.exerciseNumber}-${key}`,
        source: `听写练习 ${exercise.exerciseNumber} · ${question.title}`,
        prompt: line.parts.filter(text => typeof text === 'string').join(' ___ '),
        answer: part.answer,
        response: value || '未填写',
        redo: { kind: 'dictation', exerciseNumber: exercise.exerciseNumber, key },
      })
    })))
  })
  return results
}

// Exported for isolated fixture tests; the route component remains the default export.
// eslint-disable-next-line react-refresh/only-export-components
export function loadMistakes() {
  const words = stored('mars_vocab_review_queue_v1', [])
  const grammar = Object.values(readGrammarMistakes())
  return {
    words: (Array.isArray(words) ? words : []).map((item, index) => ({ id: `word-${index}`, source: '词汇复习', prompt: item.word || item.english || '待复习单词', answer: item.chinese || item.meaning || item.translation || '', response: item.lastAnswer || '', path: '/cambridge/words?mode=review' })),
    grammar: grammar.map(item => ({ id: item.id, source: `语法单元 ${item.unitNum} · ${item.unitTitle}`, prompt: item.prompt, answer: item.correctAnswer, response: '', path: '/cambridge/grammar/mistakes', redo: { kind: 'grammar', id: item.id, unitNum: item.unitNum, type: item.type, index: item.index } })),
    reading: readingMistakes(),
    listening: listeningMistakes(),
    dictation: dictationMistakes(),
  }
}

function normaliseAnswer(value) {
  return String(value ?? '').toLowerCase().replace(/[^a-z0-9]/g, '')
}

// Keep a mistake until the learner supplies the correct answer in this focused redo.
// eslint-disable-next-line react-refresh/only-export-components
export function submitMistakeRedo(redo, answer) {
  if (redo.kind === 'grammar') {
    const record = readGrammarMistakes()[redo.id]
    const data = GRAMMAR_QUESTIONS[redo.unitNum]
    const item = data?.[redo.type]?.[redo.index]
    if (!record || !item) return false
    const correct = redo.type === 'questions'
      ? Array.isArray(answer) && answer.length === (Array.isArray(item.ans) ? item.ans.length : 1) && answer.every(value => (Array.isArray(item.ans) ? item.ans : [item.ans]).includes(value))
      : redo.type === 'blanks' ? item.ans.some(value => String(value).trim().toLowerCase() === String(answer).trim().toLowerCase())
        : [String(record.correctAnswer || '').split('→').pop().trim(), item.correct].some(value => String(value).trim().toLowerCase() === String(answer).trim().toLowerCase())
    if (!correct) { recordGrammarMistake(record); return false }
    markGrammarMistakeCorrect(redo.id)
    return true
  }
  if (redo.kind === 'listening') {
    const data = mockListeningData(redo.setId, redo.part)
    const item = data?.items[redo.index]
    if (!item || !isMockAnswerRight(data, item, answer)) return false
    const key = `mars_ket_listening_progress_v1:set-${redo.setId}:part-${redo.part}`
    const saved = stored(key, null)
    if (!Array.isArray(saved?.answers)) return false
    const answers = [...saved.answers]
    answers[redo.index] = answer
    const checked = Array.isArray(saved.checked) ? [...saved.checked] : null
    if (checked) checked[redo.index] = true
    const wrongCount = data.items.reduce((count, question, index) => {
      const attempted = checked ? checked[index] : answers[index] !== null && answers[index] !== undefined && String(answers[index]).trim() !== ''
      return count + (attempted && !isMockAnswerRight(data, question, answers[index]) ? 1 : 0)
    }, 0)
    try { localStorage.setItem(key, JSON.stringify({ ...saved, answers, ...(checked ? { checked } : {}), wrongCount, updatedAt: new Date().toISOString() })) } catch { return false }
    return true
  }
  if (redo.kind === 'dictation') {
    const exercise = LISTENING_GAP_EXERCISES.find(item => item.exerciseNumber === redo.exerciseNumber)
    const key = `mars_ket_gap_progress_v1:exercise-${redo.exerciseNumber}`
    const saved = stored(key, null)
    if (!exercise?.cloze || !saved?.submitted) return false
    const blanks = exercise.cloze.flatMap((question, questionIndex) => question.lines.flatMap((line, lineIndex) => line.parts.flatMap((part, partIndex) => typeof part === 'object' ? [{ key: `${questionIndex}-${lineIndex}-${partIndex}`, answer: part.answer }] : [])))
    const target = blanks.find(item => item.key === redo.key)
    if (!target || normaliseAnswer(answer) !== normaliseAnswer(target.answer)) return false
    const responses = { ...saved.responses, [redo.key]: answer }
    const wrongCount = blanks.filter(item => normaliseAnswer(responses[item.key]) !== normaliseAnswer(item.answer)).length
    try { localStorage.setItem(key, JSON.stringify({ ...saved, responses, wrongCount, updatedAt: new Date().toISOString() })) } catch { return false }
    return true
  }
  return false
}

function MistakeRedo({ redo, onCorrect }) {
  const [answer, setAnswer] = useState('')
  const [selected, setSelected] = useState([])
  const [feedback, setFeedback] = useState('')
  const grammar = redo.kind === 'grammar' ? GRAMMAR_QUESTIONS[redo.unitNum]?.[redo.type]?.[redo.index] : null
  const data = redo.kind === 'listening' ? mockListeningData(redo.setId, redo.part) : null
  const item = data?.items[redo.index]
  const exercise = redo.kind === 'dictation' ? LISTENING_GAP_EXERCISES.find(value => value.exerciseNumber === redo.exerciseNumber) : null
  const choices = grammar?.opts || (data?.type === 'picture' ? ['A', 'B', 'C'] : data?.type === 'match' ? data.options : item?.opts)
  const audio = data ? officialListeningAudio(redo.setId, redo.part) : exercise?.audio

  function submit(value = answer) {
    if (Array.isArray(value) ? value.length === 0 : String(value).trim() === '') return
    if (submitMistakeRedo(redo, value)) {
      onCorrect()
      if (redo.kind === 'grammar' && readGrammarMistakes()[redo.id]) {
        setSelected([])
        setAnswer('')
        setFeedback('答对一次；再答对一次后移出错题本。')
      }
    }
    else setFeedback(redo.kind === 'grammar' ? '还不对，请检查选项或填写内容后重试。' : '还不对，再听一遍并修改答案。')
  }

  return <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
    <div className="text-sm font-extrabold text-amber-900">只重做这道错题</div>
    {audio && <audio controls preload="metadata" src={audio} className="mt-3 w-full" />}
    {data?.type === 'picture' && item?.image && <img src={item.image} alt="本题 A、B、C 图片选项" className="mt-3 max-h-64 rounded-lg object-contain" />}
    {choices ? <><div className="mt-3 grid gap-2 sm:grid-cols-3">{choices.map((choice, index) => <button key={index} type="button" onClick={() => grammar ? (setSelected(values => values.includes(index) ? values.filter(value => value !== index) : [...values, index]), setFeedback('')) : submit(index)} className={`rounded-lg border px-3 py-2 text-left text-sm font-bold hover:border-emerald-500 ${selected.includes(index) ? 'border-emerald-600 bg-emerald-50' : 'border-amber-300 bg-white'}`}>{String.fromCharCode(65 + index)}. {data?.type === 'picture' ? '图片选项' : choice}</button>)}</div>{grammar && <button type="button" onClick={() => submit(selected)} className="mt-3 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-bold text-white">提交选择</button>}</>
      : <div className="mt-3 flex gap-2"><input value={answer} onChange={event => { setAnswer(event.target.value); setFeedback('') }} onKeyDown={event => { if (event.key === 'Enter') submit() }} aria-label="重做答案" className="min-w-0 flex-1 rounded-lg border border-amber-300 bg-white px-3 py-2" /><button type="button" onClick={() => submit()} className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-bold text-white">提交答案</button></div>}
    {feedback && <p role="status" className="mt-2 text-sm font-bold text-rose-700">{feedback}</p>}
  </div>
}

export default function CambridgeMistakes() {
  const [searchParams] = useSearchParams()
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const [mistakes, setMistakes] = useState(loadMistakes)
  const type = CATEGORIES.some(item => item.id === searchParams.get('type')) ? searchParams.get('type') : 'words'
  const current = CATEGORIES.find(item => item.id === type)
  const items = mistakes[type]

  return <CambridgeLayout activeModule={type === 'dictation' ? 'listening' : type} level={level} setLevel={setLevel}>
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link to="/cambridge" className="text-sm font-extrabold text-emerald-700 hover:text-emerald-900">← 返回我的学习</Link>
      <div className="mt-6 text-xs font-extrabold tracking-[.18em] text-amber-700">MISTAKE REVIEW</div>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">错题本 · {current.label}</h1>
      <p className="mt-3 text-slate-500">只显示已保存的错题，不混入专项练习中的正确题。</p>
      <nav className="mt-7 flex flex-wrap gap-2" aria-label="错题分类">
        {CATEGORIES.map(category => <Link key={category.id} to={`/cambridge/mistakes?type=${category.id}`} aria-current={category.id === type ? 'page' : undefined}
          className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold ${category.id === type ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300'}`}>
          {category.icon} {category.label} · {mistakes[category.id].length}
        </Link>)}
      </nav>
      {items.length === 0 ? <section className="mt-7 rounded-[24px] border border-slate-200 bg-white px-6 py-16 text-center shadow-sm"><div className="text-4xl">✓</div><h2 className="mt-3 text-xl font-extrabold text-slate-900">这里暂时没有错题</h2><p className="mt-2 text-sm text-slate-500">答错的内容收录后会显示在此分类。</p></section> :
        <section className="mt-7 space-y-4">{items.map(item => <article key={item.id} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="text-xs font-extrabold text-amber-700">{item.source}</div>
          <h2 className="mt-2 whitespace-pre-wrap text-lg font-extrabold leading-7 text-slate-900">{item.prompt}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {item.response && <div className="rounded-xl bg-rose-50 p-4"><div className="text-xs font-bold text-rose-600">上次作答</div><p className="mt-1 font-bold text-slate-800">{item.response}</p></div>}
            <div className="rounded-xl bg-emerald-50 p-4"><div className="text-xs font-bold text-emerald-700">正确答案</div><p className="mt-1 font-bold text-slate-800">{item.answer || '查看原题解析'}</p></div>
          </div>
          {item.path && <Link to={item.path} className="mt-4 inline-flex rounded-xl border border-emerald-200 px-4 py-2.5 text-sm font-extrabold text-emerald-800">查看原题解析 →</Link>}
          {item.redo && <MistakeRedo key={item.id} redo={item.redo} onCorrect={() => setMistakes(loadMistakes())} />}
        </article>)}</section>}
    </main>
  </CambridgeLayout>
}
