// 临时工具：裁剪指定 PNG 的相对坐标区域并放大，用于核对扫描件文字
// 用法: node scripts/crop-zoom.mjs <in.png> <out.png> <x1> <y1> <x2> <y2> [zoom]
// 坐标为相对页面宽高的 0-1 小数
import fs from 'fs'
import { Jimp } from 'jimp'

const [, , inArg, outArg, x1a, y1a, x2a, y2a, zoomArg] = process.argv
const img = await Jimp.read(fs.readFileSync(inArg))
const w = img.bitmap.width
const h = img.bitmap.height
const x1 = Math.round(parseFloat(x1a) * w)
const y1 = Math.round(parseFloat(y1a) * h)
const x2 = Math.round(parseFloat(x2a) * w)
const y2 = Math.round(parseFloat(y2a) * h)
const zoom = zoomArg ? parseInt(zoomArg, 10) : 2
img.crop({ x: x1, y: y1, w: x2 - x1, h: y2 - y1 })
img.resize({ w: img.bitmap.width * zoom, h: img.bitmap.height * zoom })
await img.write(outArg)
console.log('saved', outArg, 'crop', x1, y1, x2 - x1, y2 - y1)
