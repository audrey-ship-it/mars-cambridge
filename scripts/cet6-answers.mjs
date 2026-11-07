// 从 OCR/文字层解析文本中提取 CET-6 阅读答案，生成报告（不写回 JSON）
// 用法: node scripts/cet6-answers.mjs
import fs from 'node:fs'
import path from 'node:path'

const DIR = 'src/data/generated'
const OCR = 'scripts/ocr'

// 共享套：阅读内容与源套相同
const SHARED = {
  'cet6-2021-12-s3': 'cet6-2021-12-s2',
  'cet6-2022-06-s3': 'cet6-2022-06-s2',
  'cet6-2022-09-s2': 'cet6-2022-09-s1',
  'cet6-2022-09-s3': 'cet6-2022-09-s1',
  'cet6-2023-03-s2': 'cet6-2023-03-s1',
  'cet6-2023-03-s3': 'cet6-2023-03-s1',
}

const norm = (s) =>
  (s || '')
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .trim()

// 去掉所有空白，规避 OCR 在汉字/字母之间插入空格
const flat = (s) =>
  (s || '')
    .replace(/[\s\u200b\u200e\ufeff]/g, '')
    // OCR 常见「答案」形近误识
    .replace(/(?:莹|荅|苔|筲|莹)案/g, '答案')

function editDist(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 99
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)])
  for (let j = 0; j <= b.length; j++) dp[0][j] = j
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      )
    }
  }
  return dp[a.length][b.length]
}

// 把文本切成以题号开头的块（行首题号）
function splitBlocks(text) {
  const re =
    /(?:^|\n)\s*(2[6-9]|3[0-5]|3[6-9]|4[0-5]|4[6-9]|5[0-5])\s*(?:[\.．、,，。:：]\s*)?(?=[\[【A-Za-z\u4e00-\u9fa5])/g
  const hits = []
  let m
  while ((m = re.exec(text)) !== null) {
    hits.push({ n: Number(m[1]), pos: m.index + m[0].indexOf(m[1]) })
  }
  const blocks = {}
  for (let k = 0; k < hits.length; k++) {
    const { n, pos } = hits[k]
    const end = k + 1 < hits.length ? hits[k + 1].pos : text.length
    const body = text.slice(pos, end)
    if (!blocks[n]) blocks[n] = []
    blocks[n].push(body)
  }
  return blocks
}

// —— 通用答案标记（选项/段落字母均可）——
// 返回候选 [{letter, score, pos}]，score 越大越可信
function candidates(block, allowed) {
  const f = flat(block)
  const out = []
  const push = (letter, score, pos) => {
    if (letter && allowed.includes(letter)) out.push({ letter, score, pos })
  }

  // 1) [答案]C)  /  [答案精析]C)。  /  答案C  /  答案为C
  let re = /\[?答案(?:精析|详解|为|是)?\]?[\[【]?([A-O])(?![A-Za-z])/g
  let m
  while ((m = re.exec(f)) !== null) push(m[1], 10, m.index)

  // 2) 锁定答案 后 80 字内的 X项 / X) / X体现 / X正确
  const lock = f.search(/\[?锁定答案/)
  if (lock >= 0) {
    const seg = f.slice(lock, lock + 160)
    const mm = seg.match(/([A-D])(?:项|[\)）]|正确|符合|表述|体现|吻合|复现)/)
    if (mm) push(mm[1], 8, lock + mm.index)
  }

  // 3) 故(选)X / X项正确 / X符合(题意) / X表述正确 / X)正确 / X体现
  re = /故(?:选项|选)?([A-O])(?:项)?(?:为|是)?(?:正确|最佳)/g
  while ((m = re.exec(f)) !== null) push(m[1], 9, m.index)

  re = /([A-O])项?(?:正确|符合题意|符合文意|表\s*述\s*正确)/g
  while ((m = re.exec(f)) !== null) push(m[1], 6, m.index)

  re = /([A-D])[\)）]正确/g
  while ((m = re.exec(f)) !== null) push(m[1], 7, m.index)

  re = /([A-D])体现/g
  while ((m = re.exec(f)) !== null) push(m[1], 6, m.index)

  // 4) X为正确答案
  re = /([A-O])(?:项)?(?:为|是)正确答案/g
  while ((m = re.exec(f)) !== null) push(m[1], 9, m.index)

  // 5) 引导字母 C)【精析】/【语法判断】/【考点】
  re = /([A-O]{1,3})[\)）]?[\[【](?:精析|语法|考点|精讲)/g
  while ((m = re.exec(f)) !== null) push(m[1].slice(-1), 7, m.index)

  // 6) 信息匹配：定位至 Q 段 / 出自 Q 段 / Q 段第
  re = /(?:定位|线索|答案|出处|依据)(?:词)?(?:定位)?至?([A-O])段/g
  while ((m = re.exec(f)) !== null) push(m[1], 8, m.index)

  return out
}

// 选词填空专属
function bankedCandidates(block, options) {
  const f = flat(block)
  const out = []
  const push = (letter, score, pos, via) => {
    if (letter && options.some((o) => o.letter === letter)) out.push({ letter, score, pos, via })
  }

  // 26.G)detrimental
  let m = f.match(/^(?:2[6-9]|3[0-5])[\.．、]?([A-O])[\)）]/)
  if (m) push(m[1], 9, 0, 'head')

  // 两空分别选 D)、I)
  m = f.match(/两空分别选([A-O])[\)）]?[、,，]([A-O])/)
  if (m) {
    push(m[1], 9, 0, 'two')
    out.push({ letter: m[2], score: 9, pos: 0, via: 'two', pair: m[1] })
  }

  // 引导字母 X)【语法判断】
  m = f.match(/([A-O]{1,3})[\)）]?[\[【](?:语法|精析|考点)/)
  if (m) push(m[1].slice(-1), 7, 0, 'lead')

  // X正确 / 故为答案
  const res = []
  let re = /([A-O])项?(?:正确|符合)/g
  while ((m = re.exec(f)) !== null) res.push([m[1], 6, m.index])
  re = /故([A-O])为答案/g
  while ((m = re.exec(f)) !== null) res.push([m[1], 8, m.index])
  for (const [l, s, p] of res) push(l, s, p, 'right')

  // 「字母) 选项词」
  for (const o of options) {
    const w = norm(o.word)
    if (w.length < 3) continue
    const re2 = new RegExp(`\\b${o.letter}[\)）][^\\n]{0,8}?${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i')
    if (re2.test(block)) push(o.letter, 4, 0, 'pair')
  }

  // 选项词唯一出现（容错 1）
  const tokens = block.toLowerCase().replace(/[^a-z]+/g, ' ').split(' ').filter(Boolean)
  for (const o of options) {
    const w = norm(o.word)
    if (w.length < 4) continue
    let hit = 0
    for (const t of tokens) {
      if (t === w) hit = Math.max(hit, 3)
      else if (w.length >= 5 && editDist(t, w) <= 1) hit = Math.max(hit, 2)
    }
    if (hit) push(o.letter, hit, 0, 'word')
  }
  return out
}

// 全文直扫「题号+字母+）」：修复 OCR 把两题粘连（如 27.J)indulging28.E)deficits）导致的漏检
function directScan(text, min, max, allowed) {
  const map = new Map()
  const re = new RegExp(`(?:^|[^\\d])(${min === max ? min : `${min === 26 ? '2[6-9]' : '3[0-5]'}|3[6-9]|4[0-5]|4[6-9]|5[0-5]`})[\\.．、]?([A-O])[\\)）]`, 'g')
  let m
  while ((m = re.exec(text)) !== null) {
    const n = Number(m[1])
    if (n < min || n > max) continue
    const l = m[2]
    if (!allowed.includes(l)) continue
    if (!map.has(n)) map.set(n, [])
    map.get(n).push(l)
  }
  const out = {}
  for (const [n, arr] of map) {
    const counts = {}
    for (const l of arr) counts[l] = (counts[l] || 0) + 1
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
    if (sorted.length === 1 || sorted[0][1] > sorted[1][1]) out[n] = sorted[0][0]
  }
  return out
}

const files = fs
  .readdirSync(DIR)
  .filter((f) => /^cet6-\d{4}-\d{2}-s\d\.json$/.test(f))
  .sort()

const report = {}
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'))
  const id = j.id
  const src = SHARED[id] || id
  const cache = path.join(OCR, `${src}.txt`)
  if (!fs.existsSync(cache)) {
    report[id] = { src, error: 'NO_OCR' }
    continue
  }
  const text = fs.readFileSync(cache, 'utf8')
  const blocks = splitBlocks(text)
  const bankedOpts = j.reading.banked.options || []
  const matchLetters = (j.reading.matching.paragraphs || []).map((p) => p.label)
  const carefulLetters = ['A', 'B', 'C', 'D']

  const res = { src, banked: {}, matching: {}, careful: {}, missing: [], ambiguous: [] }

  // 汇总所有 occurrence 的候选，按字母累计分数后取最高
  const pick = (arr, fn) => {
    const tally = new Map()
    for (const b of arr || []) {
      for (const c of fn(b) || []) {
        const cur = tally.get(c.letter) || { score: 0, via: c.via, pair: c.pair }
        cur.score += c.score
        if (c.via) cur.via = c.via
        if (c.pair) cur.pair = c.pair
        tally.set(c.letter, cur)
      }
    }
    if (!tally.size) return null
    const sorted = [...tally.entries()].sort((a, b) => b[1].score - a[1].score)
    const best = { letter: sorted[0][0], ...sorted[0][1] }
    if (sorted.length > 1) best.amb = sorted.map(([l, v]) => `${l}(${v.score})`)
    return best
  }

  for (let n = 26; n <= 35; n++) {
    if (!blocks[n]) {
      res.missing.push(n)
      continue
    }
    const a = pick(blocks[n], (b) => bankedCandidates(b, bankedOpts))
    if (a) {
      res.banked[n] = { letter: a.letter, via: a.via }
      if (a.amb) res.ambiguous.push(n)
      if (a.via === 'two' && a.pair) {
        // 双空共享：不影响其他空
      }
    } else res.missing.push(n)
  }
  for (let n = 36; n <= 55; n++) {
    if (!blocks[n]) {
      res.missing.push(n)
      continue
    }
    const allowed = n <= 45 ? matchLetters : carefulLetters
    const a = pick(blocks[n], (b) => candidates(b, allowed))
    if (a) {
      res[n <= 45 ? 'matching' : 'careful'][n] = a.letter
      if (a.amb) res.ambiguous.push(n)
    } else res.missing.push(n)
  }
  // 直扫兜底：补齐被 OCR 粘连/分栏截断而漏检的题号
  for (const [n, l] of Object.entries(directScan(text, 26, 35, bankedOpts.map((o) => o.letter))))
    if (!res.banked[n]) res.banked[n] = { letter: l, via: 'direct' }
  for (const [n, l] of Object.entries(directScan(text, 36, 45, matchLetters)))
    if (!res.matching[n]) res.matching[n] = l
  for (const [n, l] of Object.entries(directScan(text, 46, 55, ['A', 'B', 'C', 'D'])))
    if (!res.careful[n]) res.careful[n] = l
  res.missing = res.missing.filter((n) => !res.banked[n] && !res.matching[n] && !res.careful[n])

  report[id] = res
  if (process.env.DBG === id) {
    const out = []
    for (const n of res.missing)
      out.push(
        `\n########## ${n} ##########\n${(blocks[n] || []).join('\n--- next occurrence ---\n') || '(NO BLOCK)'}`,
      )
    fs.writeFileSync('scripts/_dbg-missing.txt', out.join('\n'))
  }
}

fs.writeFileSync('scripts/answers-report.json', JSON.stringify(report, null, 2))

let tot = 0
let got = 0
for (const [id, r] of Object.entries(report)) {
  if (r.error) {
    console.log(`${id.padEnd(16)} ${r.error}`)
    continue
  }
  tot += 30
  got += Object.keys(r.banked).length + Object.keys(r.matching).length + Object.keys(r.careful).length
  const b = Object.entries(r.banked).map(([k, v]) => `${k}:${v.letter}`).join(' ')
  const m = Object.entries(r.matching).map(([k, v]) => `${k}:${v}`).join(' ')
  const c = Object.entries(r.careful).map(([k, v]) => `${k}:${v}`).join(' ')
  console.log(`\n${id} (src=${r.src}) missing=${r.missing.join(',') || '-'} amb=${r.ambiguous.join(',') || '-'}`)
  console.log(`  banked  ${b}`)
  console.log(`  matching ${m}`)
  console.log(`  careful ${c}`)
}
console.log(`\n==== 覆盖率 ${got}/${tot} = ${((got / tot) * 100).toFixed(1)}% ====`)
