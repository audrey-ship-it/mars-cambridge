export const GRAMMAR_MISTAKES_KEY = 'mars_grammar_mistakes_v1'

export function readGrammarMistakes() {
  try {
    const value = JSON.parse(localStorage.getItem(GRAMMAR_MISTAKES_KEY) || '{}')
    return value && typeof value === 'object' ? value : {}
  } catch {
    return {}
  }
}

function writeGrammarMistakes(value) {
  try {
    localStorage.setItem(GRAMMAR_MISTAKES_KEY, JSON.stringify(value))
    window.dispatchEvent(new CustomEvent('mars-grammar-mistakes-updated'))
  } catch {
    // 原型阶段在浏览器不允许存储时静默降级。
  }
}

export function grammarMistakeId(unitNum, type, index) {
  return `${unitNum}:${type}:${index}`
}

export function recordGrammarMistake(entry) {
  const mistakes = readGrammarMistakes()
  const previous = mistakes[entry.id]
  mistakes[entry.id] = {
    ...previous,
    ...entry,
    wrongCount: (previous?.wrongCount || 0) + 1,
    correctStreak: 0,
    firstWrongAt: previous?.firstWrongAt || Date.now(),
    lastWrongAt: Date.now(),
  }
  writeGrammarMistakes(mistakes)
}

export function markGrammarMistakeCorrect(id) {
  const mistakes = readGrammarMistakes()
  if (!mistakes[id]) return
  const streak = (mistakes[id].correctStreak || 0) + 1
  if (streak >= 2) delete mistakes[id]
  else mistakes[id] = { ...mistakes[id], correctStreak: streak, lastCorrectAt: Date.now() }
  writeGrammarMistakes(mistakes)
}

