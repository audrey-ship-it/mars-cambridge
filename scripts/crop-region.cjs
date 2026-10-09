// 按坐标裁剪放大区域：node scripts/crop-region.cjs <src> <out> <x> <y> <w> <h> [zoom=2]
const { loadImage, createCanvas } = require("@napi-rs/canvas");
const fs = require("fs");

async function main() {
  const [src, out, x, y, w, h, zoom] = process.argv.slice(2);
  const img = await loadImage(src);
  const Z = Number(zoom || 2);
  const canvas = createCanvas(Number(w) * Z, Number(h) * Z);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, Number(x), Number(y), Number(w), Number(h), 0, 0, Number(w) * Z, Number(h) * Z);
  fs.writeFileSync(out, canvas.toBuffer("image/png"));
  console.log(out);
}
main().catch((e) => { console.error(e); process.exit(1); });
