// 诊断：node scripts/diag-cet6.mjs <setId> [from] [to]
// setId 形如 cet6-2019-12-s3；也支持直接传 pdf 路径
import fs from 'node:fs'
import { PDFParse } from 'pdf-parse'

const arg = process.argv[2]
let pdf = arg
if (/^cet6-/.test(arg)) {
  const cfg = JSON.parse(fs.readFileSync('scripts/batches/cet6-batch.json', 'utf8'))
  const hit = cfg.find(
    (c) => `cet6-${c.year}-${String(c.month).padStart(2, '0')}-s${c.set}` === arg,
  )
  if (!hit) {
    console.error('未在批次配置中找到', arg)
    process.exit(1)
  }
  pdf = hit.zt
}
const from = Number(process.argv[3] || 0)
const to = Number(process.argv[4] || 1e9)

const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(pdf)) })
const r = await parser.getText()
await parser.destroy()
const lines = r.text.split(/\n+/).map((s) => s.trim()).filter(Boolean)
console.log('PDF:', pdf)
console.log('total lines:', lines.length)
for (let i = from; i < Math.min(to, lines.length); i++) console.log(i, JSON.stringify(lines[i]))
