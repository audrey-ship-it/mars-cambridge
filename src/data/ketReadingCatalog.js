import { ketTests } from './ketReadingData.js'
import { ketStandardReadingTests } from './ketStandardReadingData.js'

// One canonical set of reading questions serves the specialty and mock views.
export const ALL_KET_READING_TESTS = [...ketTests, ...ketStandardReadingTests]

export function getKetReadingTest(examId) {
  if (examId.startsWith('ket-standard-')) {
    return ketStandardReadingTests.find(test => test.id === examId) || null
  }
  const [, book, test] = examId.match(/^ket-(\d+)-test(\d+)$/) || []
  if (!book || !test) return null
  return ketTests[(Number(book) - 1) * 4 + Number(test) - 1] || null
}

export function hasCompleteKetReadingPaper(test) {
  return Boolean(test && [1, 2, 3, 4, 5].every(part => test[`part${part}`]?.questions?.length))
}
