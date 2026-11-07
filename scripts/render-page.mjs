// 渲染单页 PDF 为 PNG（支持 JBIG2 扫描页，pdf-to-img 无法解码时用）
// 用法: node scripts/render-page.mjs <pdf> <页码(1起)> <输出png> [scale]
import fs from 'node:fs'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createCanvas } from '@napi-rs/canvas'

const [src, pageNo, out, scaleArg] = process.argv.slice(2)
const scale = Number(scaleArg || '2')
const base = 'node_modules/pdf-to-img/node_modules/pdfjs-dist/'

const doc = await pdfjs.getDocument({
  data: new Uint8Array(fs.readFileSync(src)),
  wasmUrl: base + 'wasm/',
  standardFontDataUrl: base + 'standard_fonts/',
  cMapUrl: base + 'cmaps/',
  cMapPacked: true,
  isEvalSupported: false,
}).promise

const page = await doc.getPage(Number(pageNo))
const viewport = page.getViewport({ scale })
const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height))
const ctx = canvas.getContext('2d')
ctx.fillStyle = '#fff'
ctx.fillRect(0, 0, canvas.width, canvas.height)
await page.render({ canvasContext: ctx, viewport, canvas }).promise
fs.writeFileSync(out, canvas.toBuffer('image/png'))
console.log('写出', out, canvas.width + 'x' + canvas.height)
