// 临时工具：用 mupdf 把 KET Trainer 2 学生用书 PDF 指定页渲染为 PNG（支持 JPEG2000，pdfjs 不行）
// 用法: node scripts/render-trainer2-pages.mjs <startPage> <endPage> [scale] [outDir]
import fs from 'fs'
import path from 'path'
import * as mupdf from 'mupdf'

const file = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）/2-KET Trainer2（共6套）/1.Trainer2学生用书/Trainer2学生用书.pdf'
const [, , startArg, endArg, scaleArg, outArg] = process.argv
const start = parseInt(startArg, 10)
const end = parseInt(endArg, 10)
const scale = scaleArg ? parseFloat(scaleArg) : 2
const outDir = outArg || 'scripts/_trainer2_pages'

const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
console.log('total pages:', doc.countPages())
fs.mkdirSync(outDir, { recursive: true })

for (let p = start; p <= Math.min(end, doc.countPages()); p++) {
  const page = doc.loadPage(p - 1)
  const pixmap = page.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true)
  const out = path.join(outDir, `page-${String(p).padStart(3, '0')}.png`)
  fs.writeFileSync(out, Buffer.from(pixmap.asPNG()))
  pixmap.destroy()
  console.log('saved', out)
}
