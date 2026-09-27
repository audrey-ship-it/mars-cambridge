// 临时工具：检测 Part 4 页面“深灰挖空编号方块”的位置，并用 OCR 行文本标出其上下文
// 用法: node scripts/detect-dark-gaps.mjs <pagePng> <yStartRatio>
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')
const { createWorker } = require('tesseract.js')

const [, , srcArg, yStartArg] = process.argv
const yStart = yStartArg ? parseFloat(yStartArg) : 0.45

const img = await loadImage(fs.readFileSync(srcArg))
const W = img.width, H = img.height
const c = createCanvas(W, H)
const ctx = c.getContext('2d')
ctx.drawImage(img, 0, 0)
const data = ctx.getImageData(0, 0, W, H).data

// 挖空框灰：亮度 160-218，通道差小（背景 ~240-250，文字 <150 但笔画细不成段）
const isDarkGray = (x, y) => {
  const i = (y * W + x) * 4
  const r = data[i], g = data[i + 1], b = data[i + 2]
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b)
  const lum = (r + g + b) / 3
  return mx - mn < 28 && lum > 160 && lum < 218
}

const y0 = Math.floor(H * yStart)
const bands = []
for (let y = y0; y < H; y++) {
  let run = 0, best = 0, bestX = 0
  for (let x = Math.floor(W * 0.05); x < Math.floor(W * 0.97); x++) {
    if (isDarkGray(x, y)) {
      run++
      if (run > best) { best = run; bestX = x - run + 1 }
    } else run = 0
  }
  if (best >= 16) {
    const last = bands[bands.length - 1]
    if (last && y - last.bottom <= 3) { last.bottom = y; last.peak = Math.max(last.peak, best); if (best === last.peak) last.x = bestX }
    else bands.push({ top: y, bottom: y, peak: best, x: bestX })
  }
}
// 过滤太扁/太高的（编号方块高约 18-40px @scale2）
const boxes = bands.filter(b => {
  const h = b.bottom - b.top + 1
  return h >= 10 && h <= 55 && b.peak >= 16
})
console.log(`page ${path.basename(srcArg)} ${W}x${H}，检测到 ${boxes.length} 个深灰方块候选：`)
boxes.forEach((b, i) => console.log(`  box${i}: y=${b.top}-${b.bottom} h=${b.bottom - b.top + 1} longestRun=${b.peak} x≈${b.x}`))

// OCR 行聚类，输出每个方块的上下文行
const worker = await createWorker('eng')
const { data: ocr } = await worker.recognize(fs.readFileSync(srcArg), {}, { blocks: true })
await worker.terminate()
const words = []
const walk = nodes => { for (const n of nodes || []) { if (n.words) words.push(...n.words); if (n.lines) walk(n.lines); else if (n.paragraphs) walk(n.paragraphs); else if (n.blocks) walk(n.blocks) } }
walk(ocr.blocks)
const lines = []
for (const w of words) {
  const yc = (w.bbox.y0 + w.bbox.y1) / 2
  const line = lines.find(l => Math.abs(l.y - yc) < 18)
  if (line) { line.items.push(w); line.y = (line.y * (line.items.length - 1) + yc) / line.items.length }
  else lines.push({ y: yc, items: [w] })
}
lines.sort((a, b) => a.y - b.y)
const lineText = l => (l?.items || []).map(w => w.text).join(' ')
console.log('\n—— 方块上下文 ——')
for (const b of boxes) {
  const yc = (b.top + b.bottom) / 2
  const above = [...lines].reverse().find(l => l.y < b.top - 4)
  const below = lines.find(l => l.y > b.bottom + 4)
  console.log(`y≈${Math.round(yc)}:`)
  console.log(`  上行: ${lineText(above).slice(-80)}`)
  console.log(`  下行: ${lineText(below).slice(0, 80)}`)
}
