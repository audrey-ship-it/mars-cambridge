import { ketTests } from './ketReadingData.js'
import { ketStandardReadingTests } from './ketStandardReadingData.js'
import { petReadingTests } from './petReadingData.js'
import { PET_READING_SAMPLES } from './petReadingSamples.js'
import { PET_READING_STANDARD } from './petReadingStandard.js'
import { PET_READING_TRAINER1 } from './petReadingTrainer1.js'
import { PET_READING_TRAINER2 } from './petReadingTrainer2.js'

// One canonical set of reading questions serves the specialty and mock views.
export const ALL_KET_READING_TESTS = [...ketTests, ...ketStandardReadingTests]

// Level-aware reading catalog. Specialty practice and mock exam both read from here.
export const READING_TESTS_BY_LEVEL = {
  KET: ALL_KET_READING_TESTS,
  PET: [...petReadingTests, ...PET_READING_SAMPLES, ...PET_READING_STANDARD, ...PET_READING_TRAINER1, ...PET_READING_TRAINER2],
  FCE: [],
  CAE: [],
  CPE: [],
}

export function getReadingTestsByLevel(level) {
  return READING_TESTS_BY_LEVEL[level] || ALL_KET_READING_TESTS
}

export function getKetReadingTest(examId) {
  if (examId.startsWith('ket-standard-')) {
    return ketStandardReadingTests.find(test => test.id === examId) || null
  }
  const [, book, test] = examId.match(/^ket-(\d+)-test(\d+)$/) || []
  if (!book || !test) return null
  return ketTests[(Number(book) - 1) * 4 + Number(test) - 1] || null
}

export function getReadingTest(level, examId) {
  const tests = READING_TESTS_BY_LEVEL[level] || ALL_KET_READING_TESTS
  return tests.find(test => test.id === examId) || null
}

export function hasCompleteKetReadingPaper(test) {
  return Boolean(test && [1, 2, 3, 4, 5].every(part => test[`part${part}`]?.questions?.length))
}

// PET reading has 6 parts (1-6); KET has 5 (1-5).
export function hasCompleteReadingPaper(level, test) {
  const partCount = level === 'PET' ? 6 : 5
  return Boolean(test && Array.from({ length: partCount }, (_, i) => i + 1).every(part => test[`part${part}`]?.questions?.length))
}
