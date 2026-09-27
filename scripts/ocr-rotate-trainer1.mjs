// 一次性工具：把指定页旋转后重新 OCR（处理扫描件倒置页）
// 用法: node scripts/ocr-rotate-trainer1.mjs <page> <deg(0/90/180/270)> [scale]
import fs from 'fs'
import path from 'path'
import * as mupdf from 'mupdf'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')
const { createWorker } = require('tesseract.js')

const file = 'D:/workspace_sunny/8. PET官方刷题材料（官方真题+模拟题等）/PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf'
const [, , pageArg, degArg, scaleArg] = process.argv
const pageNum = parseInt(pageArg, 10)
const deg = parseInt(degArg, 10) || 0
const scale = scaleArg ? parseFloat(scaleArg) : 2.5

const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
const page = doc.loadPage(pageNum - 1)
const pixmap = page.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true)
const png = Buffer.from(pixmap.asPNG())
pixmap.destroy()

let out = png
if (deg !== 0) {
  const img = await loadImage(png)
  const w = deg % 180 === 0 ? img.width : img.height
  const h = deg % 180 === 0 ? img.height : img.width
  const canvas = createCanvas(w, h)
  const ctx = canvas.getContext('2d')
  ctx.translate(w / 2, h / 2)
  ctx.rotate((deg * Math.PI) / 180)
  ctx.drawImage(img, -img.width / 2, -img.height / 2)
  out = canvas.toBuffer('image/png')
}

const worker = await createWorker('eng')
const { data } = await worker.recognize(out)
await worker.terminate()
const outFile = `C:/Users/Huawei/AppData/Local/Temp/trainer1-ocr/p${String(pageNum).padStart(3, '0')}.r${deg}.txt`
fs.writeFileSync(outFile, data.text, 'utf8')
console.log('written', outFile, data.text.length, 'chars')
console.log('--- head ---')
console.log(data.text.slice(0, 400))
