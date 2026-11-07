// 临时脚本：把扫描版 PDF 页渲染为 PNG（供人工读图核对答案）
// 用法: node scripts/pdf-to-png.mjs <pdf路径> <输出目录> [起始页] [结束页]
import fs from 'node:fs'
import { pdf } from 'pdf-to-img'

const [src, outDir, from, to] = process.argv.slice(2)
if (!src) {
  console.error('用法: node scripts/pdf-to-png.mjs <pdf路径> <输出目录> [起始页] [结束页]')
  process.exit(1)
}
fs.mkdirSync(outDir, { recursive: true })
const start = parseInt(from || '1', 10)
const end = parseInt(to || String(start), 10)
const doc = await pdf(src, { scale: 2 })
let i = 0
for await (const image of doc) {
  i++
  if (i < start) continue
  fs.writeFileSync(`${outDir}/p${String(i).padStart(2, '0')}.png`, image)
  console.log('写出', `${outDir}/p${String(i).padStart(2, '0')}.png`)
  if (i >= end) break
}
