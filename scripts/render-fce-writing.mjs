// 临时工具：渲染 FCE 答案页区间
import fs from 'fs'
import path from 'path'
import * as mupdf from 'mupdf'

const file = 'D:/workspace_sunny/FCE/1.真题/FCE 8套全真模拟试题/FCE 8套全真模拟试题.pdf'
const pages = process.argv.slice(2).map(Number)
const scale = 2
const outDir = 'C:/Users/Huawei/AppData/Local/Temp/fce-read'

const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
fs.mkdirSync(outDir, { recursive: true })

for (const p of pages) {
  const page = doc.loadPage(p - 1)
  const pixmap = page.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true)
  const out = path.join(outDir, `page-${String(p).padStart(3, '0')}.png`)
  fs.writeFileSync(out, Buffer.from(pixmap.asPNG()))
  pixmap.destroy()
  page.destroy()
  console.log('saved', out)
}
