// 用 mupdf 渲染 PDF + tesseract OCR（支持 JPEG2000，pdfjs 不行）
// 用法: node scripts/render-ocr-pdf.mjs <pdfPath> <outFile> [startPage] [endPage] [scale]
import fs from 'fs'
import path from 'path'
import * as mupdf from 'mupdf'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createWorker } = require('tesseract.js')

const [pdfPath, outFile, startArg, endArg, scaleArg] = process.argv.slice(2)
if (!pdfPath || !outFile) { console.error('usage: node render-ocr-pdf.mjs <pdfPath> <outFile> [startPage] [endPage] [scale]'); process.exit(1) }

const scale = scaleArg ? parseFloat(scaleArg) : 2
const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(pdfPath)), 'application/pdf')
const total = doc.countPages()
const start = startArg ? Number(startArg) : 1
const end = endArg ? Number(endArg) : total
console.log(`PDF: ${pdfPath} total=${total} ocr ${start}-${end} scale=${scale} → ${outFile}`)

const worker = await createWorker('eng')
let allText = ''
for (let p = start; p <= Math.min(end, total); p++) {
  try {
    const page = doc.loadPage(p - 1)
    const pixmap = page.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true)
    const pngBuf = Buffer.from(pixmap.asPNG())
    const { data } = await worker.recognize(pngBuf)
    allText += `\n\n===== PAGE ${p} =====\n${data.text}`
    pixmap.destroy()
    console.log(`page ${p}/${end}: ${data.text.length} chars`)
    if (p % 5 === 0 || p === end || p === start) fs.writeFileSync(outFile, allText, 'utf-8')
  } catch (e) {
    console.error(`page ${p} error:`, e.message)
    allText += `\n\n===== PAGE ${p} (ERROR) =====\n${e.message}\n`
  }
}
fs.writeFileSync(outFile, allText, 'utf-8')
console.log('Done. length:', allText.length)
await worker.terminate()
