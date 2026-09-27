// 自动裁剪 Trainer 2 听力 Part 1 题图：6 套 × 7 题 = 42 张
// 惯例与 Trainer 1 一致：三图横排 + A/B/C 字母，不含题干文字
// 输入: C:/Users/Huawei/AppData/Local/Temp/trainer2-pages/pNNN.png（PDF 页 = 书页 + 1）
// 输出: public/images/pet/listening/trainer2/tN-qM.png
//
// 算法（先验位置方案）：本书印刷版式统一，每页各图片带的顶边位置固定（下方 PAGE_PRIORS 实测）。
// 在先验 ±3.5% 窗口内用"三列窗口行检测"找边框横线行（图片边框在 3 个固定列窗口内
// dark 率同时高；页眉黑条/标题文字/TIP 框/题干/字母行均无法三窗同中），
// 顶边簇向下 7–13% 页高内的下一个边框行簇即底边，列方向用边框竖线 argmax 精确定位。
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')

const PAGES = 'C:/Users/Huawei/AppData/Local/Temp/trainer2-pages'
const OUT = 'd:/workspace_sunny/mars-cambridge/public/images/pet/listening/trainer2'
fs.mkdirSync(OUT, { recursive: true })

// 每套 Test 听力 Part 1 的两页 PDF 页码
const TESTS = [
  { test: 1, pages: [37, 38] },
  { test: 2, pages: [79, 80] },
  { test: 3, pages: [107, 108] },
  { test: 4, pages: [125, 126] },
  { test: 5, pages: [143, 144] },
  { test: 6, pages: [161, 162] },
]

// 每页各图片带顶边先验（% 页高，实测本书版式；页内从上到下）
const PAGE_PRIORS = {
  37: [26.5, 42.3, 58.3],
  38: [14.7, 30.6, 46.5, 61.7],
  79: [27.1, 44.3, 61.6],
  80: [15.1, 31.0, 46.9, 62.8],
  107: [27.2, 43.7, 59.6],
  108: [19.2, 35.1, 51.2, 67.1],
  125: [26.4, 41.7, 57.1],
  126: [19.3, 34.7, 50.1, 66.6],
  143: [26.5, 41.3, 56.3],
  144: [19.3, 34.2, 50.2, 66.2],
  161: [26.8, 40.7, 56.1],
  162: [19.7, 35.0, 50.3, 65.8],
}

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

// 垂直膨胀 ±dy（容忍扫描倾斜导致的横线断裂）
function dilateV(dark, w, h, dy) {
  const out = new Uint8Array(w * h)
  for (let y = 0; y < h; y++) {
    const y0 = Math.max(0, y - dy), y1 = Math.min(h - 1, y + dy)
    for (let x = 0; x < w; x++) {
      for (let yy = y0; yy <= y1; yy++) { if (dark[yy * w + x]) { out[y * w + x] = 1; break } }
    }
  }
  return out
}

// 三列窗口行检测（固定图片列窗，本书 1192 宽实测：A 128-342, B 431-671, C 749-989）。
// 每窗独立取 ±8 行内最大率（容忍个别图片贴图偏移 ~9px，如 p79 Q1 图 C），
// 三窗最大率同时 ≥0.7 才认定为边框行。
// 页眉黑条只覆盖 A 窗、标题文字只覆盖 B 窗、TIP/Advice 框只覆盖 C 窗、
// 题干/字母/虚线密度不足 —— 均无法三窗同中，免疫页眉杂散。
const WINDOWS = [[125, 345], [428, 674], [746, 992]]
function rowScan(dark, w, h) {
  const hits = new Uint8Array(h)
  const winRate = WINDOWS.map(() => new Float32Array(h))
  for (let y = 0; y < h; y++) {
    let d = 0
    for (let x = 0; x < w; x += 4) d += dark[y * w + x]
    if (d / (w / 4) > 0.8) continue // 扫描黑边整行排除
    for (let wi = 0; wi < WINDOWS.length; wi++) {
      const [x0, x1] = WINDOWS[wi]
      let dd = 0, n = 0
      for (let x = x0; x < x1; x += 2) { n++; dd += dark[y * w + x] }
      winRate[wi][y] = dd / n
    }
  }
  for (let y = 0; y < h; y++) {
    let ok = 1
    for (let wi = 0; wi < 3 && ok; wi++) {
      let m = 0
      for (let yy = Math.max(0, y - 8); yy <= Math.min(h - 1, y + 8); yy++) if (winRate[wi][yy] > m) m = winRate[wi][yy]
      if (m < 0.55) ok = 0
    }
    hits[y] = ok
  }
  return hits
}

function clustersOf(hits, h) {
  const clusters = []
  let s = -1
  for (let y = 0; y < h; y++) {
    if (hits[y]) { if (s < 0) s = y }
    else if (s >= 0) { clusters.push([s, y - 1]); s = -1 }
  }
  if (s >= 0) clusters.push([s, h - 1])
  return clusters
}

// 边框竖线定位：先在图 A 左框先验区 [105,215]（容忍整页横向偏移，实测最大 +62px）内
// argmax 找左框；右框 = 左框 + 印刷带宽 861px 的邻域 [left+830, left+895] 内 argmax
//（页边装订缝为渐变灰、率 <0.7，argmax 不会误选）。
function colRange(dark, w, h, y0, y1) {
  const dens = new Float32Array(w)
  for (let x = 0; x < w; x++) {
    let d = 0
    for (let y = y0; y < y1; y += 2) d += dark[y * w + x]
    dens[x] = d / Math.max(1, (y1 - y0) / 2)
  }
  const argmax = (a, b) => {
    let bx = -1, bv = 0
    for (let x = a; x <= b && x < w; x++) if (dens[x] > bv) { bv = dens[x]; bx = x }
    return [bx, bv]
  }
  const [l, lv] = argmax(105, 215)
  if (l < 0 || lv < 0.7) return null
  const [r, rv] = argmax(l + 830, l + 895)
  const right = rv >= 0.6 ? r : l + 861
  return [l, right]
}

async function crop(img, box, outFile, maxW = 1060) {
  const cw = Math.round(box.w), ch = Math.round(box.h)
  const w2 = Math.min(cw, maxW), h2 = Math.round((w2 * ch) / cw)
  const canvas = createCanvas(w2, h2)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, box.x, box.y, box.w, box.h, 0, 0, w2, h2)
  fs.writeFileSync(outFile, canvas.toBuffer('image/png'))
  return { w2, h2 }
}

const cropsByTest = {}
let failed = 0
for (const { test, pages } of TESTS) {
  let q = 0
  cropsByTest[test] = []
  for (const page of pages) {
    const f = path.join(PAGES, `p${String(page).padStart(3, '0')}.png`)
    const { img, w, h, dark } = await loadGray(f)
    const d2 = dilateV(dark, w, h, 3)
    const hits = rowScan(d2, w, h)
    const clusters = clustersOf(hits, h)
    console.log(`p${page}: clusters=[${clusters.map(c => `${c[0]}-${c[1]}`).join(', ')}]`)
    for (const pe of PAGE_PRIORS[page]) {
      const lo = (pe - 3.5) / 100 * h, hi = (pe + 3.5) / 100 * h
      const inWin = clusters.filter(c => c[0] >= lo && c[0] <= hi)
      if (!inWin.length) {
        failed++
        console.log(`  !! p${page} 先验 ${pe}% 窗口无边框行`)
        continue
      }
      const top = inWin[0]
      // 底边 = 顶边下方 6–12.5% 页高窗口内最后一行命中行
      //（底边是图片最下方的边框横线，必然在该窗口内且位于内部横线之后）
      const bLo = Math.round(top[0] + h * 0.06), bHi = Math.min(h - 1, Math.round(top[0] + h * 0.125))
      let bandEnd = -1
      for (let y = bLo; y <= bHi; y++) if (hits[y]) bandEnd = y
      if (bandEnd < 0) { failed++; console.log(`  !! p${page} 先验 ${pe}% 底边未找到`); continue }
      if (bandEnd - top[0] > h * 0.14) { failed++; console.log(`  !! p${page} 先验 ${pe}% 带高异常`); continue }
      q++
      const cr = colRange(dark, w, h, top[0] + 3, bandEnd - 3)
      if (!cr) { failed--; q--; console.log(`  !! p${page} 先验 ${pe}% 竖线定位失败（垃圾带拦截）`); continue }
      const [cx0, cx1] = cr
      const letterPad = Math.round(w * 0.033)
      const box = {
        x: Math.max(0, cx0 - 8),
        y: Math.max(0, top[0] - 5),
        w: Math.min(w, cx1 + 8) - Math.max(0, cx0 - 8),
        h: bandEnd + letterPad - Math.max(0, top[0] - 5),
      }
      const outFile = path.join(OUT, `t${test}-q${q}.png`)
      const { w2, h2 } = await crop(img, box, outFile)
      cropsByTest[test].push({ q, file: outFile, w: w2, h: h2 })
      console.log(`  t${test}-q${q}.png  band ${Math.round(top[0] / h * 100)}-${Math.round(bandEnd / h * 100)}%  ${w2}x${h2}`)
    }
  }
  if (q !== 7) console.log(`!! Test ${test} 题图数 = ${q}（应为 7）`)
}

// 拼接检查图：每套 7 张竖排 + 标注，供目检
for (const test of TESTS.map(t => t.test)) {
  const items = cropsByTest[test]
  if (!items.length) continue
  const cw = Math.max(...items.map(i => i.w))
  const labelH = 28
  const ch = items.reduce((s, i) => s + i.h + labelH, 0) + 10
  const canvas = createCanvas(cw, ch)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cw, ch)
  ctx.fillStyle = '#000'; ctx.font = 'bold 20px sans-serif'
  let y = 5
  for (const it of items) {
    ctx.fillText(`t${test}-q${it.q}.png  ${it.w}x${it.h}`, 10, y + 20)
    y += labelH
    const im = await loadImage(it.file)
    ctx.drawImage(im, 0, y)
    y += it.h
  }
  fs.writeFileSync(path.join(PAGES, `_check_t${test}.jpg`), canvas.toBuffer('image/jpeg', 80))
  console.log(`check sheet: ${PAGES}\\_check_t${test}.jpg`)
}
console.log(failed ? `DONE（${failed} 个失败点，见上）` : 'DONE')
