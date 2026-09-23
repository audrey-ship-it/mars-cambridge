import assert from 'node:assert/strict'
import { createServer } from 'vite'

const records = new Map()
globalThis.localStorage = {
  getItem: key => records.get(key) ?? null,
  setItem: (key, value) => records.set(key, String(value)),
}
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { loadMistakes, submitMistakeRedo } = await server.ssrLoadModule('/src/pages/CambridgeMistakes.jsx')
  const { getKetReadingTest } = await server.ssrLoadModule('/src/data/ketReadingCatalog.js')
  const { GRAMMAR_QUESTIONS } = await server.ssrLoadModule('/src/data/grammarQuestions.js')
  const { mockListeningData } = await server.ssrLoadModule('/src/pages/CambridgeListening.jsx')
  const { LISTENING_GAP_EXERCISES } = await server.ssrLoadModule('/src/data/listeningGapData.js')

  assert.deepEqual(Object.values(loadMistakes()).map(items => items.length), [0, 0, 0, 0, 0])
  save('mars_vocab_review_queue_v1', [{ word: 'found', chinese: '发现', lastAnswer: 'fond' }])
  const grammarQuestion = GRAMMAR_QUESTIONS[1].questions[0]
  save('mars_grammar_mistakes_v1', { '1:questions:0': { id: '1:questions:0', unitNum: 1, unitTitle: GRAMMAR_QUESTIONS[1].title, type: 'questions', index: 0, prompt: grammarQuestion.q, correctAnswer: grammarQuestion.ans.map(index => grammarQuestion.opts[index]).join('；'), wrongCount: 1, correctStreak: 0 } })

  const reading = getKetReadingTest('ket-1-test1')
  const allAnswers = Object.fromEntries(Array.from({ length: 5 }, (_, index) => [index, reading[`part${index + 1}`].questions.map(question =>
    index === 1 ? question.answer : index === 4 ? question.answers[0] : 'ABC'.indexOf(question.answer),
  )]))
  allAnswers[0][0] = (allAnswers[0][0] + 1) % 3
  save('mars_ket_exam_progress_v1:ket-1-test1:reading', { done: true, allAnswers })

  const parts = Object.fromEntries(Array.from({ length: 5 }, (_, index) => [index + 1, mockListeningData(1, index + 1).items.map(item => item.answer?.[0] && Array.isArray(item.answer) ? item.answer[0] : item.answer)]))
  parts[1][0] = (parts[1][0] + 1) % 3
  save('mars_ket_mock_listening_v2:set-1', { completed: true, parts })

  const exercise = LISTENING_GAP_EXERCISES[0]
  const responses = Object.fromEntries(exercise.cloze.flatMap((question, questionIndex) => question.lines.flatMap((line, lineIndex) => line.parts.flatMap((part, partIndex) =>
    typeof part === 'object' ? [[`${questionIndex}-${lineIndex}-${partIndex}`, part.answer]] : [],
  ))))
  const firstKey = Object.keys(responses)[0]
  const correctDictation = responses[firstKey]
  responses[firstKey] = 'incorrect'
  save('mars_ket_gap_progress_v1:exercise-1', { submitted: true, responses })

  const mistakes = loadMistakes()
  assert.deepEqual(Object.values(mistakes).map(items => items.length), [1, 1, 1, 1, 1])
  assert.equal(mistakes.words[0].answer, '发现')
  assert.equal(submitMistakeRedo(mistakes.grammar[0].redo, [2]), false)
  assert.equal(loadMistakes().grammar.length, 1)
  assert.equal(submitMistakeRedo(mistakes.grammar[0].redo, grammarQuestion.ans), true)
  assert.equal(loadMistakes().grammar.length, 1)
  assert.equal(submitMistakeRedo(mistakes.grammar[0].redo, grammarQuestion.ans), true)
  assert.equal(loadMistakes().grammar.length, 0)
  assert.equal(mistakes.reading[0].answer, reading.part1.questions[0].answer)
  assert.equal(mistakes.listening[0].answer, 'ABCDEFGH'[mockListeningData(1, 1).items[0].answer])
  assert.equal(mistakes.dictation[0].answer, correctDictation)

  const specialty = mockListeningData(1, 2)
  const specialtyAnswers = specialty.items.map(item => Array.isArray(item.answer) ? item.answer[0] : item.answer)
  specialtyAnswers[0] = 'incorrect'
  save('mars_ket_listening_progress_v1:set-1:part-2', { answers: specialtyAnswers, checked: [true, false, false, false, false], wrongCount: 1 })
  assert.equal(loadMistakes().listening.length, 2)
  assert.match(loadMistakes().listening[0].source, /专项练习/)
  assert.equal(submitMistakeRedo(loadMistakes().listening[0].redo, 'incorrect'), false)
  assert.equal(loadMistakes().listening.length, 2)
  assert.equal(submitMistakeRedo(loadMistakes().listening[0].redo, specialty.items[0].answer[0]), true)
  assert.equal(loadMistakes().listening.length, 1)
  assert.equal(submitMistakeRedo(loadMistakes().dictation[0].redo, 'incorrect'), false)
  assert.equal(loadMistakes().dictation.length, 1)
  assert.equal(submitMistakeRedo(loadMistakes().dictation[0].redo, correctDictation), true)
  assert.equal(loadMistakes().dictation.length, 0)

  allAnswers[0][0] = 'ABC'.indexOf(reading.part1.questions[0].answer)
  parts[1][0] = mockListeningData(1, 1).items[0].answer
  responses[firstKey] = correctDictation
  save('mars_ket_exam_progress_v1:ket-1-test1:reading', { done: true, allAnswers })
  save('mars_ket_mock_listening_v2:set-1', { completed: true, parts })
  save('mars_ket_gap_progress_v1:exercise-1', { submitted: true, responses })
  save('mars_vocab_review_queue_v1', [])
  save('mars_grammar_mistakes_v1', {})
  assert.deepEqual(Object.values(loadMistakes()).map(items => items.length), [0, 0, 0, 0, 0])
  console.log('Five categories: wrong records displayed, correct answers matched, corrected records removed; browser data untouched.')
} finally {
  await server.close()
}
