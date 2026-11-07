// 快速检查 PDF 文字层长度 + 是否含关键节标题
import fs from 'node:fs'
import { PDFParse } from 'pdf-parse'

const pdf = process.argv[2]
const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(pdf)) })
const r = await parser.getText()
await parser.destroy()
const t = r.text
console.log('pages:', r.numpages, 'textLen:', t.length)
const hits = ['Part III', 'Section A', 'Section B', 'Section C', 'ten blanks', 'ten statements', 'Passage One', 'Reading Comprehension']
for (const h of hits) if (t.includes(h)) console.log('  has:', h)
console.log('--- head ---')
console.log(t.slice(0, 400).replace(/\n+/g, ' | '))
