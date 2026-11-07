// 诊断 Section A 区域原始行（用于分析解析失败原因）
import fs from 'node:fs'
import { PDFParse } from 'pdf-parse'

const pdf = process.argv[2]
const from = Number(process.argv[3] || 0)
const to = Number(process.argv[4] || 200)
const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(pdf)) })
const r = await parser.getText()
await parser.destroy()
const lines = r.text.split(/\n+/).map((s) => s.trim()).filter(Boolean)
console.log('total', lines.length)
for (let i = from; i < Math.min(to, lines.length); i++) console.log(i, JSON.stringify(lines[i]))
