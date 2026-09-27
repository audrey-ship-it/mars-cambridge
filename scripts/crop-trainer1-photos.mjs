// 自动裁剪 Trainer 1 口语照片 v2：C1-C6 每页上下两张照片，C11-C16 任务卡
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')

const PAGES = 'C:/Users/Huawei/AppData/Local/Temp/trainer1-pages'
const OUT = 'd:/workspace_sunny/mars-cambridge/public/images/pet/speaking/trainer1'
fs.mkdirSync(OUT, { recursive: true })

const photoPages = [
  { page: 225, tests: [1, 2], slot: 'a' },
  { page: 226, tests: [1, 2], slot: 'b' },
  { page: 227, tests: [3, 4], slot: 'a' },
  { page: 228, tests: [3, 4], slot: 'b' },
  { page: 229, tests: [5, 6], slot: 'a' },
  { page: 230, tests: [5, 6], slot: 'b' },
]
const taskPages = [
  { page: 235, test: 1 }, { page: 236, test: 2 }, { page: 237, test: 3 },
  { page: 238, test: 4 }, { page: 239, test: 5 }, { page: 240, test: 6 },
]

async function loadGray(pngPath) {
  const img = await loadImage(pngPath)
  const w = img.width, h = img.height
  const canvas = createCanvas(w, h)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const data = ctx.getImageData(0, 0, w, h).data
  const dark = new Uint8Array(w * h)
  for (let i = 0, p = 0; p < w * h; i += 4, p++) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const max = Math.max(r, g, b), min = Math.min(r, g, b)
    if (max < 225 || (max - min) > 25) dark[p] = 1
  }
  return { img, w, h, dark }
}

function rowStats(dark, w, h) {
  const dens = new Float32Array(h)
  for (let y = 0; y < h; y++) {
    let d = 0
    for (let x = 0; x < w; x += 4) d += dark[y * w + x]
    dens[y] = d / (w / 4)
  }
  return dens
}
function colStats(dark, w, h, y0, y1) {
  const dens = new Float32Array(w)
  for (let x = 0; x < w; x++) {
    let d = 0
    for (let y = y0; y < y1; y += 4) d += dark[y * w + x]
    dens[x] = d / ((y1 - y0) / 4)
  }
  return dens
}
function bbox(dens, thr) {
  let a = -1, b = -1
  for (let i = 0; i < dens.length; i++) { if (dens[i] > thr) { if (a < 0) a = i; b = i } }
  return [a, b]
}

async function crop(img, box, outFile, maxW = 900) {
  const cw = Math.round(box.w), ch = Math.round(box.h)
  const w2 = Math.min(cw, maxW), h2 = Math.round((w2 * ch) / cw)
  const canvas = createCanvas(w2, h2)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, box.x, box.y, box.w, box.h, 0, 0, w2, h2)
  fs.writeFileSync(outFile, canvas.toBuffer('image/png'))
  console.log('saved', outFile, `${w2}x${h2}`)
}

// ── 照片页 ──
for (const { page, tests, slot } of photoPages) {
  const f = path.join(PAGES, `p${String(page).padStart(3, '0')}.png`)
  const { img, w, h, dark } = await loadGray(f)
  const dens = rowStats(dark, w, h)
  // 找 >0.45 的连续带（照片区域），最短 15% 页高
  const bands = []
  let s = -1
  for (let y = 0; y < h; y++) {
    if (dens[y] > 0.45) { if (s < 0) s = y }
    else if (s >= 0) { if (y - s > h * 0.15) bands.push([s, y]); s = -1 }
  }
  if (s >= 0 && h - s > h * 0.15) bands.push([s, h])
  console.log(`page ${page}: ${bands.length} bands`, bands.map(b => `${Math.round(b[0] / h * 100)}-${Math.round(b[1] / h * 100)}%`).join(', '))
  if (bands.length !== 2) { console.log('SKIP', page); continue }
  for (let i = 0; i < 2; i++) {
    const [ry0, ry1] = bands[i]
    const cd = colStats(dark, w, h, ry0, ry1)
    const [cx0, cx1] = bbox(cd, 0.5)
    if (cx0 < 0) { console.log('SKIP col', page, i); continue }
    const box = { x: Math.max(0, cx0 - 6), y: Math.max(0, ry0 - 6), w: Math.min(w, cx1 + 6) - Math.max(0, cx0 - 6), h: ry1 - ry0 + 12 }
    const dir = path.join(OUT, `test-${tests[i]}`)
    fs.mkdirSync(dir, { recursive: true })
    await crop(img, box, path.join(dir, `photo-${slot}.png`))
  }
}

// ── 任务卡页（包围盒） ──
for (const { page, test } of taskPages) {
  const f = path.join(PAGES, `p${String(page).padStart(3, '0')}.png`)
  const { img, w, h, dark } = await loadGray(f)
  const dens = rowStats(dark, w, h)
  const [ry0, ry1] = bbox(dens, 0.02)
  const cd = colStats(dark, w, h, ry0, ry1)
  const [cx0, cx1] = bbox(cd, 0.02)
  const pad = 12
  const box = { x: Math.max(0, cx0 - pad), y: Math.max(0, ry0 - pad), w: Math.min(w, cx1 + pad) - Math.max(0, cx0 - pad), h: Math.min(h, ry1 + pad) - Math.max(0, ry0 - pad) }
  const dir = path.join(OUT, `test-${test}`)
  fs.mkdirSync(dir, { recursive: true })
  await crop(img, box, path.join(dir, 'task.png'))
}
console.log('DONE')
