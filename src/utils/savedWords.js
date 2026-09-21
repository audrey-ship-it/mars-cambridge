import { cambridgeWordsByLevel } from '../data/cambridgeWords'
import { mustSpell500, READING_FREQ_288 } from '../data/ketVocabSets'

export const SAVED_WORDS_KEY = 'mars_saved_words_v1'
export const SAVED_WORDS_EVENT = 'mars:saved-words-changed'

const dictionary = new Map()
const catalog = [...Object.values(cambridgeWordsByLevel).flat(), ...mustSpell500, ...READING_FREQ_288]
catalog.forEach(item => {
  const key = String(item.word || '').trim().toLowerCase()
  if (key && item.chinese && !dictionary.has(key)) dictionary.set(key, item)
})

const phraseOverrides = [
  { word: 'bring it round', part: 'phrase', chinese: '把它带过来；拿过来' },
]
phraseOverrides.forEach(item => dictionary.set(item.word.toLowerCase(), item))

export function normalizeSelection(value) {
  return String(value || '')
    .normalize('NFKC')
    .replace(/[‘’]/g, "'")
    .replace(/^[^A-Za-z]+|[^A-Za-z'-]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function lookupCandidates(word) {
  const value = word.toLowerCase()
  const candidates = [value]
  if (value.endsWith("'s")) candidates.push(value.slice(0, -2))
  if (value.endsWith('ies')) candidates.push(`${value.slice(0, -3)}y`)
  if (value.endsWith('es')) candidates.push(value.slice(0, -2))
  if (value.endsWith('s')) candidates.push(value.slice(0, -1))
  if (value.endsWith('ing')) {
    const stem = value.slice(0, -3)
    candidates.push(stem, `${stem}e`)
    if (stem.length > 2 && stem.at(-1) === stem.at(-2)) candidates.push(stem.slice(0, -1))
  }
  if (value.endsWith('ed')) candidates.push(value.slice(0, -2), value.slice(0, -1))
  return [...new Set(candidates)]
}

function dictionaryEntry(word) {
  for (const key of lookupCandidates(word)) {
    const entry = dictionary.get(key)
    if (entry) return { word, lemma: entry.word, chinese: entry.chinese, part: entry.part || '', phonetic: entry.phonetic || '' }
  }
  return null
}

function shortMeaning(value) {
  return String(value || '').split(/[，；、（(]/)[0].replace(/……为止/g, '').trim()
}

function composePhraseChinese(tokens) {
  const first = tokens[0]?.lemma.toLowerCase()
  if (first === 'until' && tokens.length >= 2) {
    return `直到${tokens.slice(1).map(token => shortMeaning(token.chinese)).join('')}`
  }
  return ''
}

export function findWordMeaning(selection) {
  const clean = normalizeSelection(selection)
  if (!clean || clean.length > 220 || !/^[A-Za-z][A-Za-z'-]*(?:\s+[A-Za-z][A-Za-z'-]*){0,19}$/.test(clean)) return null
  const exact = dictionaryEntry(clean)
  const words = clean.split(' ')
  if (exact) return { ...exact, word: clean, kind: words.length === 1 ? 'word' : 'phrase', tokens: [] }

  const seen = new Set()
  const tokens = words.map(dictionaryEntry).filter(Boolean).filter(token => {
    const key = token.lemma.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  const isPhrase = words.length <= 6
  const composedChinese = isPhrase && tokens.length === words.length ? composePhraseChinese(tokens) : ''
  return {
    word: clean,
    lemma: clean.toLowerCase(),
    chinese: composedChinese,
    part: isPhrase ? 'phrase' : 'sentence',
    phonetic: '',
    kind: isPhrase ? 'phrase' : 'sentence',
    tokens,
    composed: Boolean(composedChinese),
  }
}

export function readSavedWords() {
  try {
    const value = JSON.parse(localStorage.getItem(SAVED_WORDS_KEY) || '[]')
    return Array.isArray(value) ? value : []
  } catch { return [] }
}

function commit(words) {
  localStorage.setItem(SAVED_WORDS_KEY, JSON.stringify(words))
  window.dispatchEvent(new CustomEvent(SAVED_WORDS_EVENT, { detail: words }))
  return words
}

export function saveWord(entry, source = '学习页面') {
  const words = readSavedWords()
  const key = entry.lemma.toLowerCase()
  if (words.some(item => item.lemma.toLowerCase() === key)) return words
  return commit([{ ...entry, source, status: 'learning', addedAt: new Date().toISOString() }, ...words])
}

export function removeSavedWord(lemma) {
  return commit(readSavedWords().filter(item => item.lemma.toLowerCase() !== lemma.toLowerCase()))
}

export function updateSavedWord(lemma, changes) {
  return commit(readSavedWords().map(item => item.lemma.toLowerCase() === lemma.toLowerCase() ? { ...item, ...changes } : item))
}

export function isWordSaved(lemma) {
  return readSavedWords().some(item => item.lemma.toLowerCase() === lemma.toLowerCase())
}
