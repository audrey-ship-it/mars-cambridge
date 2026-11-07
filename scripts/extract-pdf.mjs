// 临时脚本：提取解析 PDF 文本，供人工核对答案
// 用法: node scripts/extract-pdf.mjs <pdf路径> <输出txt>
import fs from 'node:fs'
import { PDFParse } from 'pdf-parse'

const [src, out] = process.argv.slice(2)
if (!src) {
  console.error('用法: node scripts/extract-pdf.mjs <pdf路径> [输出txt]')
  process.exit(1)
}
const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(src)) })
const result = await parser.getText()
const text = result.text
await parser.destroy()
if (out) fs.writeFileSync(out, text, 'utf8')
console.log('LEN', text.length, 'PAGES', result.numpages ?? result.pages?.length ?? '?')
