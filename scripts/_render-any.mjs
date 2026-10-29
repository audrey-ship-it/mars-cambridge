// 通用 PDF 渲染：node scripts/_render-any.mjs <pdf路径> <输出目录> [起始页] [结束页] [scale]
import fs from 'fs'
import path from 'path'
import * as mupdf from 'mupdf'

const [file, outDir, startArg, endArg, scaleArg] = process.argv.slice(2)
if (!file || !outDir) { console.error('usage: node _render-any.mjs <pdf> <outDir> [start] [end] [scale]'); process.exit(1) }
fs.mkdirSync(outDir, { recursive: true })
const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
const total = doc.countPages()
const start = Number(startArg || 1)
const end = Math.min(Number(endArg || total), total)
const scale = Number(scaleArg || 2)
for (let p = start; p <= end; p++) {
  const pixmap = doc.loadPage(p - 1).toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true)
  const out = path.join(outDir, `page-${String(p).padStart(3, '0')}.png`)
  fs.writeFileSync(out, pixmap.asPNG())
  console.log('saved', out)
}
