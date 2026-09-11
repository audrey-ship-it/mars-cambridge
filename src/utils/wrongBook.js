const KEY = 'ws_wrong_words'

export function getWrongWords() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

export function addWrongWords(wrongResults, wordList) {
  const existing = getWrongWords()
  const updated = [...existing]
  wrongResults.forEach(r => {
    const meta = wordList.find(w => w.word === r.word)
    const idx = updated.findIndex(u => u.word === r.word)
    if (idx >= 0) {
      updated[idx].wrong += 1
      updated[idx].lastWrong = today()
    } else {
      updated.push({
        word: r.word,
        chinese: meta?.chinese || '',
        part: meta?.part || '',
        wrong: 1,
        lastWrong: today(),
      })
    }
  })
  localStorage.setItem(KEY, JSON.stringify(updated))
}

export function removeWrongWord(word) {
  const updated = getWrongWords().filter(w => w.word !== word)
  localStorage.setItem(KEY, JSON.stringify(updated))
}

function today() {
  return new Date().toISOString().split('T')[0]
}
