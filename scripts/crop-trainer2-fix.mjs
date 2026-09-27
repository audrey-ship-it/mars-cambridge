// 手动重裁 4 张口语照片（百分比框，基于 p235/p236/p237 目检）
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')

const PAGES = 'C:/Users/Huawei/AppData/Local/Temp/trainer2-pages'
const OUT = 'd:/workspace_sunny/mars-cambridge/public/images/pet/speaking/trainer2'

const jobs = [
  // [png页, x0%,x1%, y0%,y1%, 输出test目录, 文件名]
  [235, 15.2, 78.8, 59.0, 89.1, 'test-4', 'photo-b.png'],
  [236, 19.2, 81.2, 18.7, 48.7, 'test-5', 'photo-a.png'],
  [237, 15.8, 76.8, 59.2, 88.9, 'test-6', 'photo-b.png'],
]

for (const [page, x0, x1, y0, y1, dir, name] of jobs) {
  const img = await loadImage(path.join(PAGES, `p${String(page).padStart(3, '0')}.png`))
  const sx = Math.round((x0 / 100) * img.width)
  const sy = Math.round((y0 / 100) * img.height)
  const sw = Math.round(((x1 - x0) / 100) * img.width)
  const sh = Math.round(((y1 - y0) / 100) * img.height)
  const w2 = Math.min(900, sw), h2 = Math.round((w2 * sh) / sw)
  const canvas = createCanvas(w2, h2)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w2, h2)
  const out = path.join(OUT, dir, name)
  fs.writeFileSync(out, canvas.toBuffer('image/png'))
  console.log('saved', out, `${w2}x${h2}`)
}
console.log('DONE')
