// 裁剪 PNG 指定区域（用于从整页渲染图中裁出题目图）
// 用法: node scripts/crop-image.cjs <src.png> <x> <y> <w> <h> <out.png>
const fs = require("fs");
const { createCanvas, loadImage } = require("@napi-rs/canvas");

async function main() {
  const [src, x, y, w, h, out] = process.argv.slice(2);
  const img = await loadImage(src);
  const rect = { x: Number(x), y: Number(y), w: Number(w), h: Number(h) };
  const canvas = createCanvas(rect.w, rect.h);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, rect.x, rect.y, rect.w, rect.h, 0, 0, rect.w, rect.h);
  fs.mkdirSync(require("path").dirname(out), { recursive: true });
  fs.writeFileSync(out, canvas.toBuffer("image/png"));
  console.log(`cropped ${rect.w}x${rect.h} -> ${out}`);
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
