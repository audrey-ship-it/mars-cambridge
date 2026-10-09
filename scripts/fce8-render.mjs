// 通用 PDF 页面渲染工具（mupdf，稳定不崩）
// 用法: node scripts/fce8-render.mjs <pdf路径> <起始页> <结束页> <输出目录> [scale=2]
// 页码从 1 开始。输出文件名: page-NNN.png
import fs from 'fs'
import path from 'path'
import * as mupdf from 'mupdf'

const file = process.argv[2]
const start = Number(process.argv[3] || 1)
const end = Number(process.argv[4] || start)
const outDir = process.argv[5]
const scale = Number(process.argv[6] || 2)

if (!file || !outDir) {
  console.error('usage: node scripts/fce8-render.mjs <pdf> <start> <end> <outDir> [scale]')
  process.exit(1)
}

const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
console.log('total pages:', doc.countPages())
fs.mkdirSync(outDir, { recursive: true })

for (let p = start; p <= Math.min(end, doc.countPages()); p++) {
  const page = doc.loadPage(p - 1)
  const pixmap = page.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true)
  const out = path.join(outDir, `page-${String(p).padStart(3, '0')}.png`)
  fs.writeFileSync(out, Buffer.from(pixmap.asPNG()))
  pixmap.destroy()
  page.destroy()
  console.log('saved', out)
}
