// 一次性：裁剪 Keys 页的关键区域
import fs from 'fs'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createCanvas, loadImage } = require('@napi-rs/canvas')

// 用法: node scripts/crop-region.mjs <src> <out> <x> <y> <w> <h> [maxW]
const [src, out, x, y, w, h, maxWArg] = process.argv.slice(2)
const img = await loadImage(fs.readFileSync(src))
const maxW = maxWArg ? parseInt(maxWArg, 10) : 900
const box = { x: +x, y: +y, w: Math.min(+w, img.width - +x), h: Math.min(+h, img.height - +y) }
const w2 = Math.min(box.w, maxW), h2 = Math.round((w2 * box.h) / box.w)
const c = createCanvas(w2, h2)
c.getContext('2d').drawImage(img, box.x, box.y, box.w, box.h, 0, 0, w2, h2)
fs.writeFileSync(out, c.toBuffer('image/png'))
console.log('ok', out, `${w2}x${h2}`)
