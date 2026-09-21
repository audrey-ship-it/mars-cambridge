import { readdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import { findWordMeaning } from '../src/utils/savedWords.js'

const included = /^(grammar.+Questions|ket(?:Collocations|DictationData|ExamData|ExamTest\d+|ListeningData|Part5Extras|ProductiveExamData|ReadingCatalog|ReadingData|SpeakingTopicBank|StandardReadingData|StandardWritingData)|listeningGapData)\.js$/
const ignored = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'id', 'url', 'pdf', 'mp3', 'jpg', 'jpeg', 'png', 'svg', 'ket', 'test', 'part'])
const counts = new Map()
const titleCasePhrases = new Set()

function collect(value) {
  if (typeof value === 'string') {
    for (const match of value.matchAll(/\b[A-Z][A-Za-z'-]*(?:[ \t]+[A-Z][A-Za-z'-]*){1,3}\b/g)) {
      const phrase = match[0]
      const key = phrase.toLowerCase()
      titleCasePhrases.add(key)
      counts.set(key, (counts.get(key) || 0) + 1)
    }
    for (const match of value.matchAll(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g)) {
      const word = match[0].replace('’', "'")
      const key = word.toLowerCase()
      if (word.length > 1 && !ignored.has(key)) counts.set(key, (counts.get(key) || 0) + 1)
    }
    return
  }
  if (Array.isArray(value)) return value.forEach(collect)
  if (value && typeof value === 'object') Object.values(value).forEach(collect)
}

const files = (await readdir(resolve('src/data'))).filter(file => included.test(file)).sort()
for (const file of files) collect(await import(pathToFileURL(resolve('src/data', file))))

const missing = [...counts]
  .filter(([word]) => {
    const selection = titleCasePhrases.has(word) ? word.replace(/\b[a-z]/g, letter => letter.toUpperCase()) : word
    return !findWordMeaning(selection)?.chinese
  })
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

console.log(`划词词义审计：扫描 ${files.length} 个题库文件，发现 ${counts.size} 个不同英文词。`)
if (missing.length) {
  console.error(`未收录 ${missing.length} 个：`)
  console.error(missing.map(([word, count]) => `${word}(${count})`).join(', '))
  process.exitCode = 1
} else {
  console.log('通过：所有题目单词均可显示中文词义。')
}
