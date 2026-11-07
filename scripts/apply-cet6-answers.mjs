// 将 scripts/answers-final.json 的答案写入题库 JSON（可选 scripts/answers-fix.json 人工修正）
import fs from 'node:fs'
import path from 'node:path'

const DIR = 'src/data/generated'
const final = JSON.parse(fs.readFileSync('scripts/answers-final.json', 'utf8'))
const fix = fs.existsSync('scripts/answers-fix.json')
  ? JSON.parse(fs.readFileSync('scripts/answers-fix.json', 'utf8'))
  : {}

let done = 0
const skipped = []

for (const [id, r] of Object.entries(final)) {
  const f = fix[id] || {}
  const banked = Array.from({ length: 10 }, (_, i) => {
    const n = 26 + i
    return (f.banked && f.banked[n]) || r.banked[i]
  })
  const matching = Array.from({ length: 10 }, (_, i) => {
    const n = 36 + i
    return (f.matching && f.matching[n]) || r.matching[i]
  })
  const careful = {}
  for (let n = 46; n <= 55; n++) {
    careful[n] = (f.careful && f.careful[n]) || r.careful[n]
  }
  if (banked.some((x) => !x) || matching.some((x) => !x) || Object.values(careful).some((x) => !x)) {
    skipped.push(id)
    continue
  }
  const p = path.join(DIR, `${id}.json`)
  const j = JSON.parse(fs.readFileSync(p, 'utf8'))
  j.reading.banked.answers = banked
  j.reading.matching.answers = matching
  let mapped = 0
  j.reading.careful.forEach((sec) => {
    sec.questions.forEach((q) => {
      if (careful[q.n]) {
        q.answer = careful[q.n]
        mapped++
      }
    })
  })
  if (mapped !== 10) {
    skipped.push(`${id} careful 只匹配 ${mapped} 题`)
    continue
  }
  j.meta.answerSource = '解析书答案逐题核对（文字层/OCR + 读图）'
  j.meta.verified = true
  fs.writeFileSync(p, JSON.stringify(j, null, 2))
  done++
}

console.log(`applied ${done}`)
if (skipped.length) {
  console.log('未写入（答案不完整）:')
  skipped.forEach((s) => console.log('  ' + s))
}
