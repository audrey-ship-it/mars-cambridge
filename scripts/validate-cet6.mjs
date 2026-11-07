// 校验所有 cet6-*.json 结构，重算 meta.warnings / meta.verified
import fs from 'node:fs'
import path from 'node:path'

const dir = 'src/data/generated'
const files = fs
  .readdirSync(dir)
  .filter((f) => /^cet6-\d{4}-\d{2}-s\d\.json$/.test(f))
  .sort()

let ok = 0
const bad = []
for (const f of files) {
  const p = path.join(dir, f)
  const j = JSON.parse(fs.readFileSync(p, 'utf8'))
  const w = []
  const b = j.reading?.banked || {}
  const blanks = (b.passage || '').match(/\{\{\d+\}\}/g) || []
  if (!b.passage || b.passage.length < 500 || (b.options || []).length < 14 || blanks.length !== 10) {
    w.push(`banked: passage=${(b.passage || '').length}, opts=${(b.options || []).length}, blanks=${blanks.length}`)
  }
  const m = j.reading?.matching || {}
  if (!m.paragraphs || m.paragraphs.length < 10 || (m.questions || []).length !== 10) {
    w.push(`matching: paras=${(m.paragraphs || []).length}, qs=${(m.questions || []).length}`)
  }
  const c = j.reading?.careful || []
  const cq = c.reduce((s, x) => s + (x.questions || []).length, 0)
  if (c.length !== 2 || cq !== 10) {
    w.push(`careful: passages=${c.length}, qs=${c.map((x) => x.questions.length).join('+') || '0'}`)
  }
  j.meta.warnings = w
  j.meta.verified = w.length === 0
  fs.writeFileSync(p, JSON.stringify(j, null, 2))
  if (w.length === 0) ok++
  else bad.push([j.id, w.join(' | ')])
}

console.log(`verified ${ok} / ${files.length}`)
for (const [id, w] of bad) console.log('  ' + id.padEnd(16) + w)
