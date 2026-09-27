// 重裁 schools1（全真模考 13-16 = PET 青少版官方真题 1）听力 Part 1 题图：4 套 × 7 题 = 28 张
// 版式（_diag-bands.mjs 实测，渲染 1021×1382）：每题三图横排、每图带独立边框，
// 图片高 ~196px，底边下方 ~30-55px 为 A/B/C 字母行；整行 x 范围逐带用列密度 bbox 测定
//（每页横向漂移 ~80px，不能共用）。不含题干文字。
// 输入: C:/Users/Huawei/AppData/Local/Temp/schools1-pages/page-0NN.png
// 输出: public/images/pet/listening/schools1-N/qM.png + 检查图 _check2_tN.jpg
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')

const PAGES = 'C:/Users/Huawei/AppData/Local/Temp/schools1-pages'
const OUT = 'd:/workspace_sunny/mars-cambridge/public/images/pet/listening'

// 每套 Test 的两页与各图片带顶边实测值（dilateV±3 后边框簇 y1，3 题页 q1-3 / 4 题页 q4-7）
const TESTS = [
  { t: 1, pages: [
    { file: 'page-021.png', tops: [369, 658, 949] },
    { file: 'page-022.png', tops: [152, 443, 737, 1031] },
  ] },
  { t: 2, pages: [
    { file: 'page-039.png', tops: [374, 662, 953] },
    { file: 'page-040.png', tops: [154, 445, 738, 1032] },
  ] },
  { t: 3, pages: [
    { file: 'page-057.png', tops: [371, 660, 951] },
    { file: 'page-058.png', tops: [146, 437, 731, 1025] },
  ] },
  { t: 4, pages: [
    { file: 'page-075.png', tops: [367, 655, 946] },
    { file: 'page-076.png', tops: [153, 444, 737, 1030] },
  ] },
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

// 带内列密度 bbox：密度 ≥55% 的最左/最右列 = A 图左边框 / C 图右边框
function colSpan(dark, w, h, y0, y1) {
  const yA = Math.max(0, y0), yB = Math.min(h - 1, y1)
  const cnt = new Float32Array(w)
  let n = 0
  for (let y = yA; y <= yB; y += 2) {
    n++
    for (let x = 0; x < w; x++) if (dark[y * w + x]) cnt[x]++
  }
  const thr = n * 0.55
  let x0 = -1, x1 = -1
  for (let x = 50; x < w - 40; x++) if (cnt[x] >= thr) { if (x0 < 0) x0 = x; x1 = x }
  return [x0, x1]
}

// 字母行底边：窗口 [top+220, top+266] 内"短游程行"（暗像素 ≥3 且最长连续游程 <100）
// 的第一个行簇。起点 +220 越过三图底边框尾（边框 y 离散可达 ~+216，且扫描断裂会产生
// 短游程碎片）；下一题题干（≥+265）与字母簇间隔 >8px 不会并入。
function lettersBottom(dark, w, h, x0, x1, top) {
  const yA = top + 220, yB = Math.min(h - 1, top + 266)
  const span = x1 - x0 + 1
  const rows = []
  for (let y = yA; y <= yB; y++) {
    let c = 0, best = 0, cur = 0, gap = 0
    for (let x = x0; x <= x1; x++) {
      if (dark[y * w + x]) {
        c++; cur++; gap = 0
        if (cur > best) best = cur
      } else if (++gap > 8) cur = 0
    }
    if (c >= 3 && best < Math.min(100, span * 0.4)) rows.push(y)
  }
  if (!rows.length) return -1
  let clusterEnd = rows[0]
  for (let i = 1; i < rows.length; i++) {
    if (rows[i] - rows[i - 1] <= 8) clusterEnd = rows[i]
    else break
  }
  return clusterEnd
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
for (const { t, pages } of TESTS) {
  let q = 0
  cropsByTest[t] = []
  for (const pg of pages) {
    const { img, w, h, dark } = await loadGray(path.join(PAGES, pg.file))
    for (const top of pg.tops) {
      q++
      const [x0, x1] = colSpan(dark, w, h, top + 4, top + 192)
      if (x0 < 0 || x1 - x0 < 730 || x1 - x0 > 890) {
        failed++
        console.log(`!! t${t}-q${q} ${pg.file} 列 bbox 异常 x=${x0}-${x1}`)
        continue
      }
      const lb = lettersBottom(dark, w, h, x0, x1, top)
      const yBot = lb > 0 ? Math.min(h - 1, lb + 8) : top + 240
      const box = {
        x: Math.max(0, x0 - 6),
        y: Math.max(0, top - 3),
        w: Math.min(w - 1, x1 + 6) - Math.max(0, x0 - 6),
        h: yBot - Math.max(0, top - 3),
      }
      const outFile = path.join(OUT, `schools1-${t}`, `q${q}.png`)
      fs.mkdirSync(path.dirname(outFile), { recursive: true })
      const { w: w2, h: h2 } = await crop(img, box, outFile)
      cropsByTest[t].push({ q, file: outFile, w: w2, h: h2 })
      console.log(`t${t}-q${q} ${pg.file} top=${top} x=${x0}-${x1} 字母底=${lb} ${w2}x${h2}`)
    }
  }
  if (q !== 7) { failed++; console.log(`!! Test ${t} 题图数 = ${q}（应为 7）`) }
}

// 拼接检查图：每套 7 张竖排 + 标注，供目检
for (const t of TESTS.map(x => x.t)) {
  const items = cropsByTest[t]
  if (!items.length) continue
  const cw = Math.max(...items.map(i => i.w))
  const labelH = 26
  const ch = items.reduce((s, i) => s + i.h + labelH, 0) + 10
  const canvas = createCanvas(cw, ch)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cw, ch)
  ctx.fillStyle = '#c00'; ctx.font = 'bold 18px sans-serif'
  let y = 5
  for (const it of items) {
    ctx.fillText(`t${t}-q${it.q}.png  ${it.w}x${it.h}`, 10, y + 18)
    y += labelH
    const im = await loadImage(it.file)
    ctx.drawImage(im, 0, y)
    y += it.h
  }
  fs.writeFileSync(path.join(PAGES, `_check2_t${t}.jpg`), canvas.toBuffer('image/jpeg', 82))
  console.log(`check sheet: ${PAGES}\\_check2_t${t}.jpg`)
}
console.log(failed ? `DONE（${failed} 个失败点，见上）` : 'DONE 28 张全部裁出')
