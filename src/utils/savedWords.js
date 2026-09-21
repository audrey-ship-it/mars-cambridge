import { cambridgeWordsByLevel } from '../data/cambridgeWords.js'
import { IRREGULAR_VERBS, mustSpell500, READING_FREQ_288 } from '../data/ketVocabSets.js'
import { SITE_WORD_MEANINGS } from '../data/siteWordMeanings.js'

export const SAVED_WORDS_KEY = 'mars_saved_words_v1'
export const SAVED_WORDS_EVENT = 'mars:saved-words-changed'

const dictionary = new Map()
const catalog = [...Object.values(cambridgeWordsByLevel).flat(), ...mustSpell500, ...READING_FREQ_288]
catalog.forEach(item => {
  const key = String(item.word || '').trim().toLowerCase()
  if (key && item.chinese && !dictionary.has(key)) dictionary.set(key, item)
})
Object.entries(SITE_WORD_MEANINGS).forEach(([word, item]) => {
  if (!dictionary.has(word)) dictionary.set(word, { word, ...item })
})

const phraseOverrides = [
  { word: 'bring it round', part: 'phrase', chinese: '把它带过来；拿过来' },
  { word: 'Los Angeles', part: 'proper noun', chinese: '洛杉矶（美国加利福尼亚州城市）' },
  { word: 'in the US', part: 'phrase', chinese: '在美国' },
  { word: 'the US', part: 'proper noun', chinese: '美国' },
]
phraseOverrides.forEach(item => dictionary.set(item.word.toLowerCase(), item))

const caseSensitiveMeanings = {
  US: { word: 'US', part: 'abbr.', chinese: '美国（United States）' },
  USA: { word: 'USA', part: 'abbr.', chinese: '美国（United States of America）' },
  UK: { word: 'UK', part: 'abbr.', chinese: '英国（United Kingdom）' },
}

const irregularForms = new Map()
IRREGULAR_VERBS.forEach(verb => {
  const base = verb.base.replace(/\(.+\)/, '')
  const forms = new Map()
  if (verb.past && verb.past !== '/' && verb.past !== base) forms.set(verb.past.toLowerCase(), '过去式')
  if (verb.pp && verb.pp !== '/' && verb.pp !== base) {
    const key = verb.pp.toLowerCase()
    forms.set(key, forms.has(key) ? '过去式和过去分词' : '过去分词')
  }
  forms.forEach((formLabel, form) => {
    if (!irregularForms.has(form)) irregularForms.set(form, { base, formLabel, chinese: verb.chinese })
  })
})

const formAlternatives = {
  found: '作为动词原形还可表示：建立；创办',
}

const specialMeanings = {
  th: '序数词词尾，表示“第……”', sth: 'something 的缩写：某事；某物', sb: 'somebody 的缩写：某人',
  mcq: '选择题（multiple-choice question）', km: '千米；公里', kg: '千克；公斤', pt: '部分；要点（缩写）',
  'listening-gap': '听力填空', 'source-scan': '原卷扫描', 'ket-standard': 'KET 标准题',
  'story-page': '故事页面', 'story-strip': '连环故事', 'in-app': '应用内的',
  "she'll": 'she will / she shall：她将会', "there'll": 'there will：将会有', "that'll": 'that will：那将会',
  "who'd": 'who would / who had：谁会；谁已经', "who've": 'who have：哪些人已经',
  er: '表示犹豫的语气词：呃', yt: 'YouTube 的缩写',
}

const spellingCorrections = {
  runned: 'ran', twelveth: 'twelfth', beginned: 'began', bigest: 'biggest', difficulter: 'more difficult',
  easyer: 'easier', eightth: 'eighth', fiveth: 'fifth', 'fourty-three': 'forty-three', getted: 'got',
  happyest: 'happiest', heavyer: 'heavier', hoter: 'hotter', hotest: 'hottest', nineth: 'ninth',
  openned: 'opened', playd: 'played', schoolsbag: 'schoolbag', smallly: 'small', swimmed: 'swam',
  teethbrush: 'toothbrush', threety: 'thirty', visitted: 'visited', washd: 'washed', workt: 'worked',
  busyest: 'busiest', cleand: 'cleaned', comfortabler: 'more comfortable', funnyest: 'funniest',
  interestingest: 'most interesting', threeth: 'third', twoth: 'second', beautifulest: 'most beautiful',
  difficultest: 'most difficult', expensiver: 'more expensive', famousest: 'most famous', farest: 'farthest',
  fourst: 'fourth', goodest: 'best', interestinger: 'more interesting', manyer: 'more', manyest: 'most',
  muchest: 'most', oneth: 'first', photoies: 'photos', sandwichies: 'sandwiches', tenst: 'tenth',
  twentyth: 'twentieth', wellly: 'well', leavs: 'leaves', likies: 'likes', walkins: 'walk-ins',
}

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
  if (caseSensitiveMeanings[word]) return { ...caseSensitiveMeanings[word], lemma: word, phonetic: '' }
  const irregular = irregularForms.get(word.toLowerCase())
  if (irregular) {
    return {
      word,
      lemma: word.toLowerCase(),
      baseForm: irregular.base,
      formNote: `${irregular.base} 的${irregular.formLabel}`,
      alternative: formAlternatives[word.toLowerCase()] || '',
      chinese: irregular.chinese,
      part: 'v.',
      phonetic: '',
    }
  }
  const value = word.toLowerCase()
  for (const key of lookupCandidates(word)) {
    const entry = dictionary.get(key)
    if (entry) {
      let formLabel = ''
      if (key !== value) {
        if (value.endsWith('ing')) formLabel = '现在分词'
        else if (value.endsWith('ed')) formLabel = '过去式或过去分词'
        else if (value.endsWith('s')) formLabel = String(entry.part || '').startsWith('v') ? '第三人称单数形式' : '复数形式'
        else formLabel = '词形变化'
      }
      return {
        word,
        lemma: entry.word,
        chinese: entry.chinese,
        part: entry.part || '',
        phonetic: entry.phonetic || '',
        baseForm: formLabel ? entry.word : '',
        formNote: formLabel ? `${entry.word} 的${formLabel}` : '',
      }
    }
  }
  return null
}

function fallbackEntry(word) {
  const key = word.toLowerCase()
  if (specialMeanings[key]) return { word, lemma: key, chinese: specialMeanings[key], part: 'abbr.', phonetic: '' }
  if (spellingCorrections[key]) {
    return { word, lemma: key, chinese: `错误拼写；正确形式：${spellingCorrections[key]}`, part: 'spelling', phonetic: '' }
  }
  if (key.includes('-')) {
    const parts = key.split('-').filter(Boolean).map(dictionaryEntry).filter(Boolean)
    if (parts.length >= 2) {
      return { word, lemma: key, chinese: `复合表达：${parts.map(item => item.chinese).join(' + ')}`, part: 'compound', phonetic: '' }
    }
  }
  if (key.endsWith("'s")) {
    const base = key.slice(0, -2)
    const entry = dictionaryEntry(base)
    if (entry) return { word, lemma: key, chinese: `${entry.chinese}的（所有格）`, part: entry.part, phonetic: '' }
  }
  if (/^[A-Z]/.test(word)) return { word, lemma: key, chinese: '专有名词（人名、地名或名称）', part: 'proper noun', phonetic: '' }
  return { word, lemma: key, chinese: '题目中的特殊拼写或名称', part: 'special term', phonetic: '', fallback: true }
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
  const titleCaseName = words.length > 1 && words.every(word => /^[A-Z][A-Za-z'-]*$/.test(word))
  if (titleCaseName) {
    return { word: clean, lemma: clean, chinese: '专有名词（地名、机构名或名称）', part: 'proper noun', phonetic: '', kind: 'phrase', tokens: [] }
  }

  const seen = new Set()
  const tokens = words.map(word => dictionaryEntry(word) || fallbackEntry(word)).filter(Boolean).filter(token => {
    const key = token.lemma.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  const isSingleWord = words.length === 1
  const isPhrase = words.length > 1 && words.length <= 6
  const composedChinese = isPhrase && tokens.length === words.length ? composePhraseChinese(tokens) : ''
  const result = {
    word: clean,
    lemma: clean.toLowerCase(),
    chinese: composedChinese,
    part: isSingleWord ? '' : isPhrase ? 'phrase' : 'sentence',
    phonetic: '',
    kind: isSingleWord ? 'word' : isPhrase ? 'phrase' : 'sentence',
    tokens,
    composed: Boolean(composedChinese),
  }
  return isSingleWord && !result.chinese ? fallbackEntry(clean) : result
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
