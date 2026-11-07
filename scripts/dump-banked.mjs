// 分析 Section A 空位标记：打印某个 setId 的候选空位上下文
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
const lines = r.text.split(/\n+/).map((s) => s.trim()).filter(Boolean)
const start = lines.findIndex((s) => /ten\s+blanks/i.test(s))
const end = lines.findIndex((s, i) => i > start && /^A[\)）]/.test(s))
console.log('lines', start, '→', end)
for (let i = start; i < end; i++) console.log(i, JSON.stringify(lines[i]))
