// 用 jimp 裁剪 Trainer 2 扫描页，输出 app 用图片。
// 用法：node scripts/crop-trainer2-img.mjs <pageNo> <outRelPath> <x,y,w,h 比例> [白遮罩 x,y,w,h 比例]
import { Jimp } from 'jimp';
import path from 'node:path';

const [, , pageNo, outRel, cropArg, whiteArg] = process.argv;
if (!pageNo || !outRel || !cropArg) {
  console.error('usage: node scripts/crop-trainer2-img.mjs <pageNo> <outRelPath> <x,y,w,h> [white x,y,w,h]');
  process.exit(1);
}

const SRC_DIR = 'scripts/_trainer2_pages';
const src = path.resolve(SRC_DIR, `page-${String(pageNo).padStart(3, '0')}.png`);
const out = path.resolve(outRel);

const img = await Jimp.read(src);
const W = img.bitmap.width;
const H = img.bitmap.height;

const [cx, cy, cw, ch] = cropArg.split(',').map(Number);
const x = Math.round(W * cx);
const y = Math.round(H * cy);
const w = Math.round(W * cw);
const h = Math.round(H * ch);
img.crop({ x, y, w, h });

if (whiteArg) {
  const [wx, wy, ww, wh] = whiteArg.split(',').map(Number);
  const rx = Math.round(w * wx);
  const ry = Math.round(h * wy);
  const rw = Math.round(w * ww);
  const rh = Math.round(h * wh);
  const white = new Jimp({ width: rw, height: rh, color: 0xffffffff });
  img.composite(white, rx, ry);
}

await img.write(out, { quality: 92 });
console.log(`saved ${out} ${img.bitmap.width}x${img.bitmap.height}`);
