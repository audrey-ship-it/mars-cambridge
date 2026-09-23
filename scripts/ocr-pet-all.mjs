import fs from 'fs'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas } = require('@napi-rs/canvas')
const { createWorker } = require('tesseract.js')

const base = 'D:/workspace_sunny/PET全真模拟试题（8套）/'
const file = base + 'PET8套全真模拟试题.pdf'
const outFile = 'd:/workspace_sunny/mars-cambridge/pet_question_ocr.txt'

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

const worker = await createWorker('eng')
let allText = ''

for (let p = 1; p <= pdf.numPages; p++) {
  const canvas = await renderPageToCanvas(pdf, p, 2)
  const pngBuffer = canvas.toBuffer('image/png')
  const { data } = await worker.recognize(pngBuffer)
  allText += `\n\n===== PAGE ${p} =====\n${data.text}`
  if (p % 10 === 0) {
    console.log(`Processed ${p}/${pdf.numPages} pages`)
    fs.writeFileSync(outFile, allText, 'utf-8')
  }
}

fs.writeFileSync(outFile, allText, 'utf-8')
console.log('Done! Saved to', outFile, 'Total length:', allText.length)
await worker.terminate()
