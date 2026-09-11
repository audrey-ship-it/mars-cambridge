const KEY = 'mars_grammar_progress_v1'
export const GRAMMAR_MODES = ['questions', 'blanks', 'corrections']

function normalizeRecord(value) {
  if (value === true) return { started: [...GRAMMAR_MODES], completed: [...GRAMMAR_MODES] }
  if (!value || typeof value !== 'object') return { started: [], completed: [] }
  const completed = GRAMMAR_MODES.filter(mode => value.completed?.includes?.(mode) || value[mode] === true)
  const started = GRAMMAR_MODES.filter(mode => value.started?.includes?.(mode) || completed.includes(mode))
  return { ...value, started, completed }
}

export function readGrammarProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '{}')
    return Object.fromEntries(Object.entries(raw).map(([unit, value]) => [unit, normalizeRecord(value)]))
  } catch { return {} }
}

export function grammarUnitStatus(progress, unitNum) {
  const record = normalizeRecord(progress?.[unitNum])
  const completedCount = record.completed.length
  const started = record.started.length > 0
  return {
    completedCount,
    started,
    complete: completedCount === GRAMMAR_MODES.length,
    percent: Math.round(completedCount / GRAMMAR_MODES.length * 100),
  }
}

function updateMode(unitNum, mode, complete) {
  if (!GRAMMAR_MODES.includes(mode)) return
  try {
    const progress = readGrammarProgress()
    const record = normalizeRecord(progress[unitNum])
    const started = [...new Set([...record.started, mode])]
    const completed = complete ? [...new Set([...record.completed, mode])] : record.completed
    progress[unitNum] = { started, completed, updatedAt: new Date().toISOString() }
    localStorage.setItem(KEY, JSON.stringify(progress))
  } catch { /* local storage may be unavailable */ }
}

export function markGrammarModeStarted(unitNum, mode) {
  updateMode(unitNum, mode, false)
}

export function markGrammarModeCompleted(unitNum, mode) {
  updateMode(unitNum, mode, true)
}
