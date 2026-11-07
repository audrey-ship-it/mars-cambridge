// 从已录入真题阅读原文统计高频词，与官方四级词表取交集，生成阅读高频词数据
// 用法: node scripts/reading-freq.mjs
// 输出: src/data/generated/cet4-reading-freq.js
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const GEN_DIR = join(ROOT, 'src/data/generated')

// 官方词表（自包含数据文件，Node 可直接 import）
const full = await import(new URL('../src/data/generated/cet4-vocab-full.js', import.meta.url).href)
const INDEX = new Map(full.vocabLists.flat().map((x) => [x.w.toLowerCase(), x]))

const STOPWORDS = new Set('the a an and or but if of to in on at by for with about as is are was were be been being am do does did have has had he she it they them his her its their we you i me my our us this that these those there here what which who whom whose when where why how not no nor so than then too very can will would could should may might must shall from into onto over under up down out off again further once all any both each few more most other some such only own same just also get got like way thing things lot lots'.split(' '))

// 简单词形还原：原形 → 词表内基形
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

// 收集所有已录入阅读真题 JSON 的原文
const sources = []
for (const f of readdirSync(GEN_DIR)) {
  if (!f.endsWith('.json')) continue
  const p = join(GEN_DIR, f)
  try {
    const set = JSON.parse(readFileSync(p, 'utf8'))
    const texts = []
    const s = set.reading || set.sections || {}
    if (s.banked?.passage) texts.push(s.banked.passage)
    ;(s.matching?.paragraphs || []).forEach((x) => x.text && texts.push(x.text))
    ;(s.careful || []).forEach((x) => x.passage && texts.push(x.passage))
    if (texts.length) sources.push({ file: f, texts })
  } catch { /* skip non-set json */ }
}

if (!sources.length) {
  console.error('未找到含阅读原文的真题 JSON')
  process.exit(1)
}

// 词频统计
const freq = new Map()
for (const { texts } of sources) {
  for (const text of texts) {
    const tokens = text.toLowerCase().match(/[a-z][a-z'-]{1,}/g) || []
    for (const raw of tokens) {
      const w = raw.replace(/[''-]$/, '')
      if (w.length < 3 || STOPWORDS.has(w)) continue
      const base = lemmatize(w)
      if (!base) continue
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
  source: sources.map((s) => s.file).join(', ') + ' 阅读原文（banked/matching/careful）',
  generatedAt: new Date().toISOString().slice(0, 10),
  minFreq: 2,
  total: words.length,
}

const out = `// 自动生成：scripts/reading-freq.mjs — 勿手改
// 摘自已录入真题阅读原文的高频词（词频含简单词形还原），仅收录官方词表内的词
export const READING_FREQ_META = ${JSON.stringify(meta, null, 2)}

export const READING_FREQ = ${JSON.stringify(words, null, 0)}
`

writeFileSync(join(GEN_DIR, 'cet4-reading-freq.js'), out)
console.log(`生成 ${words.length} 个阅读高频词，来源：${meta.source}`)
console.log('前 10 个：', words.slice(0, 10).map((x) => `${x.w}(${x.count})`).join(' '))
