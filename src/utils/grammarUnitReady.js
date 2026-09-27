import { GRAMMAR_QUESTIONS } from '../data/grammarQuestions'
import { PET_GRAMMAR_QUESTIONS } from '../data/petGrammarQuestions'

export const hasChinese = value => /[㐀-鿿]/.test(String(value || ''))

// 学生端只开放题目、中文题意和中文解析均已完整校对的单元。
export function grammarUnitReadyFor(unit, questionMap) {
  if (!unit?.available) return false
  const content = questionMap[unit.n]
  if (!content) return false

  const questionTypes = [
    ['questions', 'qZh'],
    ['blanks', 'sentenceZh'],
    ['corrections', 'sentenceZh'],
  ]

  return questionTypes.every(([type, translationKey]) => {
    const items = content[type]
    return Array.isArray(items) && items.length >= 15 && items.every(item =>
      hasChinese(item[translationKey]) && hasChinese(item.expZh || item.exp)
    )
  })
}

export function isGrammarUnitReady(unit) {
  return grammarUnitReadyFor(unit, GRAMMAR_QUESTIONS)
}

export function isPetGrammarUnitReady(unit) {
  return grammarUnitReadyFor(unit, PET_GRAMMAR_QUESTIONS)
}
