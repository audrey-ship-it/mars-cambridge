// 批量渲染解析 PDF 的指定页到 PNG（供读图核对答案）
// 用法: node scripts/render-range.mjs <id> <起始页> <结束页> [scale]
import fs from 'node:fs'
import path from 'node:path'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createCanvas } from '@napi-rs/canvas'

const ROOT = 'D:\\workspace_sunny\\题库\\cet\\CET-6\\六级真题'
const base = 'node_modules/pdf-to-img/node_modules/pdfjs-dist/'
const [id, a, b, scaleArg] = process.argv.slice(2)
const scale = Number(scaleArg || '2')
const sources = JSON.parse(fs.readFileSync('scripts/answer-sources.json', 'utf8'))
const src = path.join(ROOT, sources[id] || '')
if (!fs.existsSync(src)) {
  console.error('未找到解析 PDF:', src)
  process.exit(1)
}
fs.mkdirSync('scripts/pages', { recursive: true })
const doc = await pdfjs.getDocument({
  data: new Uint8Array(fs.readFileSync(src)),
  wasmUrl: base + 'wasm/',
  standardFontDataUrl: base + 'standard_fonts/',
  cMapUrl: base + 'cmaps/',
  cMapPacked: true,
  isEvalSupported: false,
}).promise
const from = Number(a)
const to = Math.min(Number(b), doc.numPages)
for (let n = from; n <= to; n++) {
  const page = await doc.getPage(n)
  const viewport = page.getViewport({ scale })
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height))
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  await page.render({ canvasContext: ctx, viewport, canvas }).promise
  const out = path.join('scripts/pages', `${id}-p${n}.png`)
  fs.writeFileSync(out, canvas.toBuffer('image/png'))
  console.log('写出', out, canvas.width + 'x' + canvas.height)
  page.cleanup()
}
