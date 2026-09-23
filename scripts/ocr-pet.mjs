import fs from 'fs'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, ImageData } = require('@napi-rs/canvas')
const { createWorker } = require('tesseract.js')

const base = 'D:/workspace_sunny/PET全真模拟试题（8套）/'
const file = base + 'PET8套全真模拟试题.pdf'

async function renderPageToCanvas(pdf, pageNum, scale = 2) {
  const page = await pdf.getPage(pageNum)
  const viewport = page.getViewport({ scale })
  const canvas = createCanvas(Math.floor(viewport.width), Math.floor(viewport.height))
  const context = canvas.getContext('2d')
  await page.render({ canvasContext: context, viewport }).promise
  return canvas
}

const dataBuffer = new Uint8Array(fs.readFileSync(file))
const loadingTask = pdfjsLib.getDocument({ data: dataBuffer })
const pdf = await loadingTask.promise
console.log('Total pages:', pdf.numPages)

// Render pages 8-15 to find where Test 1 starts
const worker = await createWorker('eng')

for (let p = 8; p <= 15; p++) {
  const canvas = await renderPageToCanvas(pdf, p, 2)
  const pngBuffer = canvas.toBuffer('image/png')
  const { data } = await worker.recognize(pngBuffer)
  const text = data.text.trim()
  console.log(`\n===== PAGE ${p} =====`)
  console.log(text.slice(0, 600))
}

await worker.terminate()
