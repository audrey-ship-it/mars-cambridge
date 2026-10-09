// 裁剪题页左上角 Track 图标区域以便读数
// 用法: node scripts/crop-track.cjs <page.png> <out.png>
const { loadImage, createCanvas } = require("@napi-rs/canvas");
const path = require("path");

async function main() {
  const [src, out] = process.argv.slice(2);
  const img = await loadImage(src);
  // 图标位于 Questions 行左侧（1241x1629 坐标系）
  const X = 55, Y = 185, W = 80, H = 55;
  const canvas = createCanvas(W * 4, H * 4);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, X, Y, W, H, 0, 0, W * 4, H * 4);
  require("fs").writeFileSync(out, canvas.toBuffer("image/png"));
  console.log(out);
}
main().catch((e) => { console.error(e); process.exit(1); });
