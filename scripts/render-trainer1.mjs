// 临时工具：用 mupdf 把 Trainer 1 PDF 指定页渲染为 PNG（支持 JPEG2000，pdfjs 不行）
// 用法: node scripts/render-trainer1.mjs <startPage> <endPage> [scale] [outDir]
import fs from 'fs'
import path from 'path'
import * as mupdf from 'mupdf'

const file = 'D:/workspace_sunny/8. PET官方刷题材料（官方真题+模拟题等）/PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf'
const [, , startArg, endArg, scaleArg, outArg] = process.argv
const start = parseInt(startArg, 10)
const end = parseInt(endArg, 10)
const scale = scaleArg ? parseFloat(scaleArg) : 2
const outDir = outArg || 'C:/Users/Huawei/AppData/Local/Temp/trainer1-pages'

const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
console.log('total pages:', doc.countPages())
fs.mkdirSync(outDir, { recursive: true })

for (let p = start; p <= Math.min(end, doc.countPages()); p++) {
  const page = doc.loadPage(p - 1)
  const pixmap = page.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true)
  const out = path.join(outDir, `p${String(p).padStart(3, '0')}.png`)
  fs.writeFileSync(out, Buffer.from(pixmap.asPNG()))
  pixmap.destroy()
  console.log('saved', out)
}
