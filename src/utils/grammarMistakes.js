export const GRAMMAR_MISTAKES_KEY = 'mars_grammar_mistakes_v1'
const PET_MISTAKES_KEY = 'mars_grammar_mistakes_pet_v1'
const storageKey = level => (level === 'PET' ? PET_MISTAKES_KEY : GRAMMAR_MISTAKES_KEY)

export function readGrammarMistakes(level = 'KET') {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey(level)) || '{}')
    return value && typeof value === 'object' ? value : {}
  } catch {
    return {}
  }
}

function writeGrammarMistakes(value, level = 'KET') {
  try {
    localStorage.setItem(storageKey(level), JSON.stringify(value))
    window.dispatchEvent(new CustomEvent('mars-grammar-mistakes-updated'))
  } catch {
    // 原型阶段在浏览器不允许存储时静默降级。
  }
}

export function grammarMistakeId(unitNum, type, index) {
  return `${unitNum}:${type}:${index}`
}

export function recordGrammarMistake(entry, level = 'KET') {
  const mistakes = readGrammarMistakes(level)
  const previous = mistakes[entry.id]
  mistakes[entry.id] = {
    ...previous,
    ...entry,
    level,
    wrongCount: (previous?.wrongCount || 0) + 1,
    correctStreak: 0,
    firstWrongAt: previous?.firstWrongAt || Date.now(),
    lastWrongAt: Date.now(),
  }
  writeGrammarMistakes(mistakes, level)
}

export function markGrammarMistakeCorrect(id, level = 'KET') {
  const mistakes = readGrammarMistakes(level)
  if (!mistakes[id]) return
  const streak = (mistakes[id].correctStreak || 0) + 1
  if (streak >= 2) delete mistakes[id]
  else mistakes[id] = { ...mistakes[id], correctStreak: streak, lastCorrectAt: Date.now() }
  writeGrammarMistakes(mistakes, level)
}

