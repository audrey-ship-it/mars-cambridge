import { createReadStream } from 'node:fs'
import { readdir, writeFile } from 'node:fs/promises'
import { createInterface } from 'node:readline'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const source = process.argv[2]
if (!source) throw new Error('用法：node scripts/build-site-dictionary.mjs /path/to/ecdict.csv')

const included = /^(grammar.+Questions|ket(?:Collocations|DictationData|ExamData|ExamTest\d+|ListeningData|Part5Extras|ProductiveExamData|ReadingCatalog|ReadingData|SpeakingTopicBank|StandardReadingData|StandardWritingData)|listeningGapData)\.js$/
const ignored = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'id', 'url', 'pdf', 'mp3', 'jpg', 'jpeg', 'png', 'svg', 'ket', 'test', 'part'])
const wanted = new Set()

function collect(value) {
  if (typeof value === 'string') {
    for (const match of value.matchAll(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g)) {
      const word = match[0].replace('’', "'").toLowerCase()
      if (word.length > 1 && !ignored.has(word)) wanted.add(word)
    }
    return
  }
  if (Array.isArray(value)) return value.forEach(collect)
  if (value && typeof value === 'object') Object.values(value).forEach(collect)
}

function parseCsvLine(line) {
  const fields = []
  let value = ''
  let quoted = false
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index]
    if (char === '"') {
      if (quoted && line[index + 1] === '"') { value += '"'; index += 1 }
      else quoted = !quoted
    } else if (char === ',' && !quoted) {
      fields.push(value); value = ''
    } else value += char
  }
  fields.push(value)
  return fields
}

function cleanTranslation(value) {
  return String(value || '')
    .replace(/\\n/g, '；')
    .replace(/\[(?:网络|专业|医|化学|计算机|贸易)[^\]]*\][^；]*/g, '')
    .replace(/\s+/g, ' ')
    .replace(/；{2,}/g, '；')
    .replace(/^[；\s]+|[；\s]+$/g, '')
}

const files = (await readdir(resolve('src/data'))).filter(file => included.test(file)).sort()
for (const file of files) collect(await import(pathToFileURL(resolve('src/data', file))))

const meanings = {}
const input = createInterface({ input: createReadStream(source), crlfDelay: Infinity })
let first = true
for await (const line of input) {
  if (first) { first = false; continue }
  const fields = parseCsvLine(line)
  const word = String(fields[0] || '').toLowerCase()
  if (!wanted.has(word) || meanings[word]) continue
  const chinese = cleanTranslation(fields[3])
  if (chinese) meanings[word] = { chinese, phonetic: fields[1] || '', part: fields[4] || '' }
}

const header = `// Generated from skywind3000/ECDICT (MIT License).\n// Contains only entries used by this site's exercise content.\nexport const SITE_WORD_MEANINGS = `
await writeFile(resolve('src/data/siteWordMeanings.js'), `${header}${JSON.stringify(meanings, null, 2)}\n`)
console.log(`已从 ${wanted.size} 个题库词中生成 ${Object.keys(meanings).length} 个离线英汉词条。`)
