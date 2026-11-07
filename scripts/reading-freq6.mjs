// 从已录入的 CET-6 真题阅读原文统计高频词，与六级官方词表取交集
// 用法: node scripts/reading-freq6.mjs
// 输出: src/data/generated/cet6-reading-freq.js
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const GEN_DIR = join(ROOT, 'src/data/generated')

const full = await import(new URL('../src/data/generated/cet6-vocab-full.js', import.meta.url).href)
const INDEX = new Map(full.vocabLists6.flat().map((x) => [x.w.toLowerCase(), x]))
// 排除四级词表内的基础词，只保留六级专有/进阶词
const cet4 = await import(new URL('../src/data/generated/cet4-vocab-full.js', import.meta.url).href)
const CET4_SET = new Set(cet4.vocabLists.flat().map((x) => x.w.toLowerCase()))

const STOPWORDS = new Set('the a an and or but if of to in on at by for with about as is are was were be been being am do does did have has had he she it they them his her its their we you i me my our us this that these those there here what which who whom whose when where why how not no nor so than then too very can will would could should may might must shall from into onto over under up down out off again further once all any both each few more most other some such only own same just also get got like way thing things lot lots'.split(' '))

function lemmatize(w) {
  if (INDEX.has(w)) return w
  const tries = []
  if (w.endsWith('ies')) tries.push(w.slice(0, -3) + 'y')
  if (w.endsWith('es')) tries.push(w.slice(0, -2))
  if (w.endsWith('s')) tries.push(w.slice(0, -1))
  if (w.endsWith('ing')) { tries.push(w.slice(0, -3), w.slice(0, -3) + 'e') }
  if (w.endsWith('ed')) { tries.push(w.slice(0, -1), w.slice(0, -2), w.slice(0, -2) + 'e') }
  if (w.endsWith('d')) tries.push(w.slice(0, -1))
  for (const t of tries) if (INDEX.has(t)) return t
  return null
}

const sources = []
for (const f of readdirSync(GEN_DIR)) {
  if (!/^cet6-\d{4}-\d{2}-s\d\.json$/.test(f)) continue
  const set = JSON.parse(readFileSync(join(GEN_DIR, f), 'utf8'))
  const s = set.reading || set.sections || {}
  const texts = []
  if (s.banked?.passage) texts.push(s.banked.passage)
  ;(s.matching?.paragraphs || []).forEach((x) => x.text && texts.push(x.text))
  ;(s.careful || []).forEach((x) => x.passage && texts.push(x.passage))
  if (texts.length) sources.push({ file: f, texts })
}

if (!sources.length) {
  console.error('未找到含阅读原文的 CET-6 真题 JSON')
  process.exit(1)
}

const freq = new Map()
for (const { texts } of sources) {
  for (const text of texts) {
    const tokens = text.toLowerCase().match(/[a-z][a-z'-]{1,}/g) || []
    for (const raw of tokens) {
      const w = raw.replace(/[''-]$/, '')
      if (w.length < 3 || STOPWORDS.has(w)) continue
      const base = lemmatize(w)
      if (!base || CET4_SET.has(base)) continue
      freq.set(base, (freq.get(base) || 0) + 1)
    }
  }
}

const words = [...freq.entries()]
  .filter(([, c]) => c >= 2)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, 300)
  .map(([w, count]) => {
    const e = INDEX.get(w)
    return { w: e.w, ipa: e.ipa, zh: e.zh, count }
  })

const meta = {
  source: `${sources.length} 套 CET-6 真题阅读原文（banked/matching/careful）`,
  generatedAt: new Date().toISOString().slice(0, 10),
  minFreq: 2,
  total: words.length,
  note: '已排除四级词表内的基础词，仅保留六级进阶词',
}

const out = `// 自动生成：scripts/reading-freq6.mjs — 勿手改
// 摘自已录入 CET-6 真题阅读原文的高频词（词频含简单词形还原），仅收录官方六级词表内的词
export const READING_FREQ6_META = ${JSON.stringify(meta, null, 2)}

export const READING_FREQ6 = ${JSON.stringify(words, null, 0)}
`

writeFileSync(join(GEN_DIR, 'cet6-reading-freq.js'), out)
console.log(`生成 ${words.length} 个阅读高频词，来源：${meta.source}`)
console.log('前 10 个：', words.slice(0, 10).map((x) => `${x.w}(${x.count})`).join(' '))
