// 临时工具：检测 Trainer 1 阅读 Part 4 页面上的灰色挖空框位置，
// 并裁出每个挖空上下的文字条带，纵向拼成一张小图供人工核对。
// 用法: node scripts/detect-part4-gaps.mjs <pagePng> <outPng> [xMinRatio] [xMaxRatio]
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')

const [, , srcArg, outArg, xMinArg, xMaxArg] = process.argv
const src = srcArg
const out = outArg
const X_MIN_RATIO = xMinArg ? parseFloat(xMinArg) : 0.06
const X_MAX_RATIO = xMaxArg ? parseFloat(xMaxArg) : 0.96

const img = await loadImage(fs.readFileSync(src))
const W = img.width
const H = img.height
const c = createCanvas(W, H)
c.getContext('2d').drawImage(img, 0, 0)
const data = c.getContext('2d').getImageData(0, 0, W, H).data

const isBoxish = (x, y) => {
  const i = (y * W + x) * 4
  const r = data[i], g = data[i + 1], b = data[i + 2]
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  return min >= 185 && max <= 250 && (max - min) < 22
}

// 每行统计文本列内“连续灰色长段”的像素数
const x0 = Math.floor(W * X_MIN_RATIO)
const x1 = Math.floor(W * X_MAX_RATIO)
const rowHits = new Array(H).fill(0)
const rowLongest = new Array(H).fill(0)
for (let y = 0; y < H; y++) {
  let run = 0, best = 0
  for (let x = x0; x < x1; x++) {
    if (isBoxish(x, y)) { run++; if (run > best) best = run } else run = 0
  }
  rowHits[y] = best
}

// 找连续条带：一行内最长灰色连续段 >= 55px 视为疑似挖空框行
const TH = 55
const bands = []
let start = -1
for (let y = 0; y < H; y++) {
  if (rowHits[y] >= TH) { if (start < 0) start = y }
  else if (start >= 0) {
    if (y - start >= 8) bands.push({ top: start, bottom: y - 1, peak: Math.max(...rowHits.slice(start, y)) })
    start = -1
  }
}
if (start >= 0 && H - start >= 8) bands.push({ top: start, bottom: H - 1, peak: Math.max(...rowHits.slice(start)) })

console.log(`page ${path.basename(src)} ${W}x${H}, bands: ${bands.length}`)
bands.forEach((b, i) => console.log(`  band${i}: y=${b.top}-${b.bottom} h=${b.bottom - b.top + 1} longestRun=${b.peak}`))

// 裁条带：每个 band 上下各扩 78px，纵向拼接（带 6px 黑色分隔线）
const PAD = 78
const strips = bands.map(b => ({
  top: Math.max(0, b.top - PAD),
  bottom: Math.min(H - 1, b.bottom + PAD),
}))
const stripH = strips.reduce((s, r) => s + (r.bottom - r.top + 1), 0) + strips.length * 6
const outW = Math.floor(W * 0.86)
const outC = createCanvas(outW, stripH)
const ctx = outC.getContext('2d')
ctx.fillStyle = '#ffffff'
ctx.fillRect(0, 0, outW, stripH)
let cy = 0
for (const r of strips) {
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, cy, outW, 3)
  cy += 3
  const sx = Math.floor(W * 0.05)
  const sw = Math.floor(W * 0.9)
  const sh = r.bottom - r.top + 1
  // drawImage 9 参形式直接从原图取样
  ctx.drawImage(c, sx, r.top, sw, sh, 0, cy, Math.floor(sw * (outW / sw)), Math.floor(sh * (outW / sw)))
  cy += Math.floor(sh * (outW / sw))
}
fs.writeFileSync(out, outC.toBuffer('image/png'))
console.log('saved', out, `${outW}x${stripH} (缩放到 900 宽上传更稳)`)
