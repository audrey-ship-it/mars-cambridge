// 找出某套真题 PDF 中 Section A 所在页码：node scripts/find-page.mjs <setId>
import fs from 'node:fs'
import { PDFParse } from 'pdf-parse'

const id = process.argv[2]
const cfg = JSON.parse(fs.readFileSync('scripts/batches/cet6-batch.json', 'utf8'))
const hit = cfg.find(
  (c) => `cet6-${c.year}-${String(c.month).padStart(2, '0')}-s${c.set}` === id,
)
if (!hit) {
  console.error('未找到', id)
  process.exit(1)
}
const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(hit.zt)) })
const r = await parser.getText()
await parser.destroy()
console.log('PDF:', hit.zt, 'pages:', r.pages.length)
r.pages.forEach((p, i) => {
  const t = p.text || ''
  const marks = []
  if (/ten\s+blanks/i.test(t)) marks.push('TEN_BLANKS')
  if (/Section\s*A/.test(t)) marks.push('SectionA')
  if (/ten\s{0,3}statements/i.test(t)) marks.push('TEN_STATEMENTS')
  if (/Passage\s+One/i.test(t)) marks.push('PassageOne')
  if (t.length > 50) marks.push('len=' + t.length)
  if (marks.length) console.log('  page', i + 1, marks.join(' , '))
})
