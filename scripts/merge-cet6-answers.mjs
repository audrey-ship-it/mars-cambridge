// 合并「脚本自动提取」与「代理读图核对」结果，做结构校验，产出 scripts/answers-final.json
import fs from 'node:fs'
import path from 'node:path'

const DIR = 'src/data/generated'
const VIS = 'scripts/answers-visual'
const SHARED = {
  'cet6-2021-12-s3': 'cet6-2021-12-s2',
  'cet6-2022-06-s3': 'cet6-2022-06-s2',
  'cet6-2022-09-s2': 'cet6-2022-09-s1',
  'cet6-2022-09-s3': 'cet6-2022-09-s1',
  'cet6-2023-03-s2': 'cet6-2023-03-s1',
  'cet6-2023-03-s3': 'cet6-2023-03-s1',
}

const report = JSON.parse(fs.readFileSync('scripts/answers-report.json', 'utf8'))
const visual = {}
if (fs.existsSync(VIS)) {
  for (const f of fs.readdirSync(VIS).filter((x) => x.endsWith('.json'))) {
    try {
      visual[f.replace(/\.json$/, '')] = JSON.parse(fs.readFileSync(path.join(VIS, f), 'utf8'))
    } catch (e) {
      console.log('视觉结果解析失败:', f, String(e).slice(0, 60))
    }
  }
}

const files = fs.readdirSync(DIR).filter((f) => /^cet6-\d{4}-\d{2}-s\d\.json$/.test(f)).sort()
const final = {}
const problems = []

for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'))
  const id = j.id
  const src = SHARED[id] || id
  const auto = report[id] && !report[id].error ? report[id] : { banked: {}, matching: {}, careful: {} }
  const vis = visual[src] || {}
  const vB = vis.banked || {}
  const vM = vis.matching || {}
  const vC = vis.careful || {}

  const banked = []
  const missing = []
  const srcLetters = (j.reading.banked.options || []).map((o) => o.letter)
  for (let n = 26; n <= 35; n++) {
    const v = vB[n] || vB[String(n)] || (auto.banked[n] && auto.banked[n].letter)
    if (v) banked.push(v)
    else missing.push(n)
  }
  const matchLetters = (j.reading.matching.paragraphs || []).map((p) => p.label)
  const matching = []
  for (let n = 36; n <= 45; n++) {
    const v = vM[n] || vM[String(n)] || auto.matching[n]
    if (v) matching.push(v)
    else missing.push(n)
  }
  const careful = {}
  for (let n = 46; n <= 55; n++) {
    const v = vC[n] || vC[String(n)] || auto.careful[n]
    if (v) careful[n] = v
    else missing.push(n)
  }

  // 校验
  const bad = []
  const warn = []
  banked.forEach((l, i) => {
    if (!srcLetters.includes(l)) bad.push(`26-35[${i}] 非法字母 ${l}`)
  })
  matching.forEach((l, i) => {
    if (!matchLetters.includes(l)) bad.push(`36-45[${i}] 非法字母 ${l}`)
  })
  Object.entries(careful).forEach(([n, l]) => {
    if (!['A', 'B', 'C', 'D'].includes(l)) bad.push(`${n} 非法字母 ${l}`)
  })
  if (banked.length === 10 && new Set(banked).size !== 10) bad.push('26-35 存在重复答案（选词填空单词不可复用）')
  if (matching.length === 10 && new Set(matching).size !== 10) warn.push('36-45 存在重复段落（该题型允许重复，仅供参考）')

  final[id] = { src, banked, matching, careful, missing, bad, warn }
  if (missing.length || bad.length) problems.push(`${id} missing=${missing.join(',') || '-'} ${bad.join('; ')}`)
}

fs.writeFileSync('scripts/answers-final.json', JSON.stringify(final, null, 2))
let ok = 0
for (const [id, v] of Object.entries(final)) {
  if (!v.missing.length && !v.bad.length) ok++
  if (!v.missing.length && !v.bad.length && !v.warn.length) continue
  console.log(
    `${id.padEnd(16)} missing=[${v.missing.join(',')}] ${v.bad.join('; ')} ${v.warn.join('; ')}`,
  )
}
console.log(`\n完整且校验通过: ${ok}/${Object.keys(final).length}；视觉结果文件: ${Object.keys(visual).length}`)
