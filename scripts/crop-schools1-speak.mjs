// 重裁 schools1（全真模考 13-16）口语图：4 套 × (photo-a + photo-b + task) = 12 张
// 页面为白底 PDF 渲染（1021×1382），照片/线稿均为非白实心块，用行/列非白密度自动测量：
//   照片页：行非白率 ≥0.15 的簇（高 ≥300px）= 两张照片；列非白率 ≥0.3 定 x 范围
//   task 页：行非白率 ≥0.02 的簇（合并间隔 ≤40px、高 ≥250px）= Test/Part/Task/提示行 + 图形
//           连成一块（提示行与图形间隙 <25px 自动并入，页眉间隙 ~60-73px 被排除）
// 输入: C:/Users/Huawei/AppData/Local/Temp/schools1-pages/page-186~193.png
// 输出: public/images/pet/speaking/schools1-N/{photo-a,photo-b,task}.png + 检查图 _checkS_tN.jpg
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')

const PAGES = 'C:/Users/Huawei/AppData/Local/Temp/schools1-pages'
const OUT = 'd:/workspace_sunny/mars-cambridge/public/images/pet/speaking'

const TESTS = [
  { t: 1, photo: 'page-186.png', task: 'page-187.png' },
  { t: 2, photo: 'page-188.png', task: 'page-189.png' },
  { t: 3, photo: 'page-190.png', task: 'page-191.png' },
  { t: 4, photo: 'page-192.png', task: 'page-193.png' },
]

async function loadImg(p) {
  const img = await loadImage(p)
  const w = img.width, h = img.height
  const canvas = createCanvas(w, h)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h)
  ctx.drawImage(img, 0, 0)
  const data = ctx.getImageData(0, 0, w, h).data
  const nw = new Uint8Array(w * h)
  for (let i = 0, q = 0; q < w * h; i += 4, q++) {
    if (Math.max(data[i], data[i + 1], data[i + 2]) < 235) nw[q] = 1
  }
  return { img, w, h, nw }
}

// 行非白率（x∈[x0,x1] 每 2px 采样）
function rowProfile(nw, w, h, x0, x1) {
  const f = new Float32Array(h)
  for (let y = 0; y < h; y++) {
    let c = 0
    for (let x = x0; x <= x1; x += 2) c += nw[y * w + x]
    f[y] = c / ((x1 - x0 + 1) / 2)
  }
  return f
}

// 行簇：f≥thr 合并间隔 ≤gapMerge，保留高 ≥minH
function rowClusters(f, h, y0, y1, thr, minH, gapMerge) {
  const cl = []
  let s = -1, last = -1
  for (let y = y0; y <= y1; y++) {
    if (f[y] >= thr) { if (s < 0) s = y; last = y }
    else if (s >= 0 && y - last > gapMerge) { cl.push([s, last]); s = -1 }
  }
  if (s >= 0) cl.push([s, last])
  return cl.filter(c => c[1] - c[0] + 1 >= minH)
}

// 列非白 bbox：带内非白率 ≥thr 的最左/最右列
function colBBox(nw, w, y0, y1, thr, minCnt = 4) {
  let n = 0
  const cnt = new Float32Array(w)
  for (let y = y0; y <= y1; y += 2) {
    n++
    for (let x = 0; x < w; x++) if (nw[y * w + x]) cnt[x]++
  }
  let x0 = -1, x1 = -1
  for (let x = 20; x < w - 20; x++) if (cnt[x] >= Math.max(minCnt, n * thr)) { if (x0 < 0) x0 = x; x1 = x }
  return [x0, x1]
}

async function crop(img, box, outFile) {
  const cw = Math.round(box.w), ch = Math.round(box.h)
  const canvas = createCanvas(cw, ch)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, box.x, box.y, box.w, box.h, 0, 0, cw, ch)
  fs.writeFileSync(outFile, canvas.toBuffer('image/png'))
  return { w: cw, h: ch }
}

const cropsByTest = {}
let failed = 0
for (const { t, photo, task } of TESTS) {
  cropsByTest[t] = []
  // ---- 照片页 ----
  const P = await loadImg(path.join(PAGES, photo))
  const fr = rowProfile(P.nw, P.w, P.h, 100, 950)
  const bands = rowClusters(fr, P.h, 100, 1330, 0.15, 300, 25)
  if (bands.length !== 2) { failed++; console.log(`!! T${t} ${photo} 照片簇数 = ${bands.length}（应为 2）: ${JSON.stringify(bands)}`) }
  for (let i = 0; i < Math.min(2, bands.length); i++) {
    const [y0, y1] = bands[i]
    const [x0, x1] = colBBox(P.nw, P.w, y0 + 5, y1 - 5, 0.3)
    if (x0 < 0 || x1 - x0 < 500) { failed++; console.log(`!! T${t} photo-${i ? 'b' : 'a'} 列 bbox 异常 x=${x0}-${x1}`); continue }
    const box = { x: x0 - 4, y: y0 - 3, w: x1 - x0 + 9, h: y1 - y0 + 7 }
    const name = i === 0 ? 'photo-a' : 'photo-b'
    const outFile = path.join(OUT, `schools1-${t}`, `${name}.png`)
    fs.mkdirSync(path.dirname(outFile), { recursive: true })
    const dim = await crop(P.img, box, outFile)
    cropsByTest[t].push({ name, file: outFile, ...dim })
    console.log(`T${t}-${name} ${photo} y=${y0}-${y1} x=${x0}-${x1} ${dim.w}x${dim.h}`)
  }
  // ---- task 页 ----
  const G = await loadImg(path.join(PAGES, task))
  const fr2 = rowProfile(G.nw, G.w, G.h, 60, 990)
  const gcl = rowClusters(fr2, G.h, 90, 1290, 0.02, 250, 40)
  if (gcl.length !== 1) { failed++; console.log(`!! T${t} ${task} task 簇数 = ${gcl.length}（应为 1）: ${JSON.stringify(gcl)}`) }
  if (gcl.length) {
    const [y0, y1] = gcl[gcl.length - 1]
    const [x0, x1] = colBBox(G.nw, G.w, y0, y1, 0.02, 4)
    if (x0 < 0 || x1 - x0 < 500) { failed++; console.log(`!! T${t} task 列 bbox 异常 x=${x0}-${x1}`) }
    else {
      const box = { x: x0 - 10, y: Math.max(0, y0 - 6), w: x1 - x0 + 21, h: y1 - y0 + 20 }
      const outFile = path.join(OUT, `schools1-${t}`, 'task.png')
      const dim = await crop(G.img, box, outFile)
      cropsByTest[t].push({ name: 'task', file: outFile, ...dim })
      console.log(`T${t}-task ${task} y=${y0}-${y1} x=${x0}-${x1} ${dim.w}x${dim.h}`)
    }
  }
}

// 拼接检查图（每套 3 张竖排 + 标注）
for (const t of TESTS.map(x => x.t)) {
  const items = cropsByTest[t]
  if (!items.length) continue
  const W = 470
  const scaled = []
  for (const it of items) {
    const im = await loadImage(it.file)
    const s = W / im.width
    scaled.push({ it, im, w: W, h: Math.round(im.height * s) })
  }
  const labelH = 22
  const H = scaled.reduce((s, i) => s + i.h + labelH, 0) + 6
  const canvas = createCanvas(W + 10, H)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W + 10, H)
  ctx.fillStyle = '#c00'; ctx.font = 'bold 14px sans-serif'
  let y = 3
  for (const s of scaled) {
    ctx.fillText(`${s.it.name}.png ${s.it.w}x${s.it.h}`, 8, y + 13)
    y += labelH
    ctx.drawImage(s.im, 0, y, s.w, s.h)
    y += s.h
  }
  fs.writeFileSync(path.join(PAGES, `_checkS_t${t}.jpg`), canvas.toBuffer('image/jpeg', 78))
  console.log(`check sheet: ${PAGES}\\_checkS_t${t}.jpg`)
}
console.log(failed ? `DONE（${failed} 个失败点，见上）` : 'DONE 12 张全部裁出')
