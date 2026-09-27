// 临时工具：抽取 Trainer 1 PDF 指定页文本，检查文字层质量
// 用法: node scripts/extract-trainer1-text.mjs <startPage> <endPage> [outFile]
import fs from 'fs'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs'

const file = 'D:/workspace_sunny/8. PET官方刷题材料（官方真题+模拟题等）/PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf'
const [, , startArg, endArg, outArg] = process.argv
const start = parseInt(startArg, 10)
const end = parseInt(endArg, 10)

const dataBuffer = new Uint8Array(fs.readFileSync(file))
const pdf = await pdfjsLib.getDocument({ data: dataBuffer }).promise

let out = ''
for (let p = start; p <= Math.min(end, pdf.numPages); p++) {
  const page = await pdf.getPage(p)
  const tc = await page.getTextContent()
  // 按行拼接：用 y 坐标分组
  const items = tc.items.map(it => ({ str: it.str, x: it.transform[4], y: it.transform[5] }))
  const lines = []
  let cur = null
  for (const it of items) {
    if (!cur || Math.abs(it.y - cur.y) > 3) {
      cur = { y: it.y, parts: [it.str], x: it.x }
      lines.push(cur)
    } else {
      cur.parts.push(it.str)
    }
  }
  out += `\n===== PDF PAGE ${p} =====\n` + lines.map(l => l.parts.join(' ').replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n') + '\n'
}

if (outArg) {
  fs.writeFileSync(outArg, out, 'utf8')
  console.log('written', outArg, out.length, 'chars')
} else {
  console.log(out)
}
