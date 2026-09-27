// 一次性：缩小任务卡图用于预览
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')

const src = process.argv[2]
const out = process.argv[3]
const w = parseInt(process.argv[4] || '380', 10)
const img = await loadImage(fs.readFileSync(src))
const h = Math.round((w * img.height) / img.width)
const c = createCanvas(w, h)
c.getContext('2d').drawImage(img, 0, 0, w, h)
fs.writeFileSync(out, c.toBuffer('image/png'))
console.log('ok', path.basename(out), w, 'x', h)
