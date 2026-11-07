// 生成联系表：把 PDF 的若干页渲染成一张网格 PNG，便于快速定位答案页
// 用法: node scripts/contact-sheet.mjs <pdf> <out.png> <pages,逗号分隔> [scale]
import fs from 'node:fs'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createCanvas } from '@napi-rs/canvas'

const [src, out, pagesArg, scaleArg] = process.argv.slice(2)
const scale = Number(scaleArg || '1.1')
const base = 'node_modules/pdf-to-img/node_modules/pdfjs-dist/'

const doc = await pdfjs.getDocument({
  data: new Uint8Array(fs.readFileSync(src)),
  wasmUrl: base + 'wasm/',
  standardFontDataUrl: base + 'standard_fonts/',
  cMapUrl: base + 'cmaps/',
  cMapPacked: true,
  isEvalSupported: false,
}).promise

let pages = pagesArg
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
  .map(Number)
pages = pages.filter((n) => n >= 1 && n <= doc.numPages)
if (!pages.length) pages = [1]

const imgs = []
for (const n of pages) {
  const page = await doc.getPage(n)
  const vp = page.getViewport({ scale })
  const c = createCanvas(Math.ceil(vp.width), Math.ceil(vp.height))
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, c.width, c.height)
  await page.render({ canvasContext: ctx, viewport: vp }).promise
  imgs.push({ n, canvas: c, w: c.width, h: c.height })
  page.cleanup()
}

const cols = imgs.length <= 2 ? 1 : 2
const rows = Math.ceil(imgs.length / cols)
const cw = Math.max(...imgs.map((i) => i.w))
const ch = Math.max(...imgs.map((i) => i.h))
const labelH = 28
const sheet = createCanvas(cw * cols, (ch + labelH) * rows)
const sctx = sheet.getContext('2d')
sctx.fillStyle = '#ddd'
sctx.fillRect(0, 0, sheet.width, sheet.height)
for (let k = 0; k < imgs.length; k++) {
  const { n, canvas, w, h } = imgs[k]
  const x = (k % cols) * cw
  const y = Math.floor(k / cols) * (ch + labelH)
  const image = null
  sctx.fillStyle = '#f00'
  sctx.font = '20px sans-serif'
  sctx.fillText(`PAGE ${n}`, x + 8, y + 21)
  sctx.drawImage(canvas, x, y + labelH, w, h)
}
fs.writeFileSync(out, await sheet.encode('png'))
console.log('pages', doc.numPages, '->', out)
