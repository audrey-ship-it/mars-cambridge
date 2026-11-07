// localStorage 统一封装：所有 CET 进度数据使用 mars_cet4_* / mars_cet6_* 前缀
// 纯本地设计，不做跨设备同步

export function loadJSON(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key)
    if (raw == null) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function removeKey(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // ignore
  }
}

// ---- CET-4 存储约定 ----
export const CET4_KEYS = {
  readingProgress: 'mars_cet4_reading_progress', // { [setId]: { answers, score, doneAt } }
  listeningProgress: 'mars_cet4_listening_progress', // { [setId]: { answers, score, doneAt } }
  wrongBook: 'mars_cet4_wrong_book', // [{setId, part, key, userAnswer, count, lastAt}]
}

// ---- CET-6 存储约定 ----
export const CET6_KEYS = {
  readingProgress: 'mars_cet6_reading_progress',
  listeningProgress: 'mars_cet6_listening_progress',
  wrongBook: 'mars_cet6_wrong_book',
}
