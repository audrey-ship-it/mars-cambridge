// 查词：基于站内 CET-4 / CET-6 词表（含音标、释义），带简单词形还原。
import { vocabLists } from '../data/generated/cet4-vocab-full.js'
import { vocabLists6 } from '../data/generated/cet6-vocab-full.js'
import { loadJSON, saveJSON } from './storage.js'

const cache = {}

function buildDict(isCet6) {
  const key = isCet6 ? 'cet6' : 'cet4'
  if (cache[key]) return cache[key]
  const map = new Map()
  const add = (lists) => lists.flat().forEach((x) => {
    const k = String(x.w || '').toLowerCase()
    if (k && !map.has(k)) map.set(k, x)
  })
  // 当前级别优先，另一级别兜底
  add(isCet6 ? vocabLists6 : vocabLists)
  add(isCet6 ? vocabLists : vocabLists6)
  cache[key] = map
  return map
}

function candidates(w) {
  const c = [w]
  if (w.endsWith("'s")) c.push(w.slice(0, -2))
  if (w.endsWith('ies')) c.push(w.slice(0, -3) + 'y')
  if (w.endsWith('es')) c.push(w.slice(0, -2))
  if (w.endsWith('s')) c.push(w.slice(0, -1))
  if (w.endsWith('ied')) c.push(w.slice(0, -3) + 'y')
  if (w.endsWith('ed')) {
    c.push(w.slice(0, -2), w.slice(0, -1))
    if (/(.)\1ed$/.test(w)) c.push(w.slice(0, -3))
  }
  if (w.endsWith('ing')) {
    c.push(w.slice(0, -3), w.slice(0, -3) + 'e')
    if (/(.)\1ing$/.test(w)) c.push(w.slice(0, -4))
  }
  if (w.endsWith('ly')) c.push(w.slice(0, -2))
  if (w.endsWith('er')) c.push(w.slice(0, -2), w.slice(0, -1))
  if (w.endsWith('est')) c.push(w.slice(0, -3), w.slice(0, -2))
  return c
}

// 返回 { word, entry|null }；word 为小写形式，entry 为词表条目（含原形 w）
export function lookupWord(raw, isCet6) {
  const word = String(raw || '').toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, '')
  if (!word) return null
  const dict = buildDict(isCet6)
  for (const c of candidates(word)) {
    const e = dict.get(c)
    if (e) return { word, entry: e }
  }
  return { word, entry: null }
}

const wrongKey = (isCet6) => `mars_${isCet6 ? 'cet6' : 'cet4'}_vocab_mistakes_v1`

export function inWordBook(headword, isCet6) {
  return Boolean(loadJSON(wrongKey(isCet6), {})[headword])
}

// 加入生词本（与单词「错词本」共用同一份数据）
export function addToWordBook(headword, isCet6) {
  const k = wrongKey(isCet6)
  const cur = loadJSON(k, {})
  saveJSON(k, { ...cur, [headword]: { ...(cur[headword] || {}), right: 0, count: (cur[headword]?.count || 0) + 1, lastAt: Date.now() } })
}
