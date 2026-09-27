// 临时工具：OCR Trainer 1 PDF 指定页（扫描件无文字层）
// 用法: node scripts/ocr-trainer1.mjs <startPage> <endPage> [scale] [outDir]
import fs from 'fs'
import path from 'path'
import * as mupdf from 'mupdf'
import { createWorker } from 'tesseract.js'

const file = 'D:/workspace_sunny/8. PET官方刷题材料（官方真题+模拟题等）/PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf'
const [, , startArg, endArg, scaleArg, outArg] = process.argv
const start = parseInt(startArg, 10)
const end = parseInt(endArg, 10)
const scale = scaleArg ? parseFloat(scaleArg) : 2.5
const outDir = outArg || 'C:/Users/Huawei/AppData/Local/Temp/trainer1-ocr'
fs.mkdirSync(outDir, { recursive: true })

const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
console.log('total pages:', doc.countPages())

const worker = await createWorker('eng')

for (let p = start; p <= Math.min(end, doc.countPages()); p++) {
  try {
    const page = doc.loadPage(p - 1)
    const pixmap = page.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true)
    const { data } = await worker.recognize(Buffer.from(pixmap.asPNG()))
    pixmap.destroy()
    const out = path.join(outDir, `p${String(p).padStart(3, '0')}.txt`)
    fs.writeFileSync(out, data.text, 'utf8')
    console.log(`done p${p} (${data.text.length} chars)`)
  } catch (e) {
    console.log(`FAIL p${p}: ${e.message}`)
    fs.writeFileSync(path.join(outDir, `p${String(p).padStart(3, '0')}.txt`), `[OCR FAILED] ${e.message}`, 'utf8')
  }
}
await worker.terminate()
console.log('ALL DONE')
