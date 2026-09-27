// 提取 PET 词汇练习会用到的全部唯一单词，供英英释义编写使用
import fs from 'fs'
import { petWords } from '../src/data/cambridgeWords.js'
import { PET_MUST_SPELL_TOPICS, PET_READING_FREQ, petIrregularVerbWords } from '../src/data/petVocabSets.js'

const norm = (w) => String(w || '').trim().toLowerCase()
const map = new Map()
const add = (w, src, zh) => {
  const k = norm(w)
  if (!k) return
  if (!map.has(k)) map.set(k, { word: k, sources: [] })
  if (!map.get(k).sources.includes(src)) map.get(k).sources.push(src)
  const item = map.get(k)
  if (!item.chinese && zh) item.chinese = zh
}
for (const w of petWords) add(w.word, 'official', w.chinese)
for (const t of PET_MUST_SPELL_TOPICS) for (const w of t.words) add(w.word, 'mustSpell', w.chinese)
for (const w of PET_READING_FREQ) add(w.word, 'readingFreq', w.chinese)
for (const w of petIrregularVerbWords) add(w.word, 'irregular', w.chinese)

const list = [...map.values()].sort((a, b) => a.word.localeCompare(b.word))
fs.writeFileSync(new URL('./pet-vocab-words.json', import.meta.url), JSON.stringify(list, null, 1))
console.log('unique words:', list.length)
console.log('by source:', {
  official: list.filter(x => x.sources.includes('official')).length,
  mustSpell: list.filter(x => x.sources.includes('mustSpell')).length,
  readingFreq: list.filter(x => x.sources.includes('readingFreq')).length,
  irregular: list.filter(x => x.sources.includes('irregular')).length,
})
