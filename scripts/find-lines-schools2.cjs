// 检测扫描页中的水平长黑线（图片框边线），输出行位置与 x 范围，用于确定裁剪坐标
// 用法: node scripts/find-lines-schools2.cjs page-022.png [page-023.png ...]
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const DARK = (r, g, b) => r < 170 && g < 170 && b < 170;

async function analyze(file) {
  const img = await loadImage(path.join(__dirname, "schools2-pages", file));
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;
  const W = img.width, H = img.height;
  const lines = [];
  let cur = null;
  for (let y = 0; y < H; y++) {
    let run = 0, best = 0, first = -1, last = -1;
    for (let x = 0; x < W; x++) {
      const o = (y * W + x) * 4;
      if (DARK(data[o], data[o + 1], data[o + 2])) {
        run++;
        if (first < 0) first = x;
        if (run > best) best = run;
        last = x;
      } else run = 0;
    }
    if (best > 500) {
      if (cur && y - cur.y2 <= 4) { cur.y2 = y; cur.last = last; cur.first = Math.min(cur.first, first); }
      else { if (cur) lines.push(cur); cur = { y1: y, y2: y, first, last }; }
    }
  }
  if (cur) lines.push(cur);
  console.log(`== ${file} ${W}x${H}`);
  let prev = null;
  for (const L of lines) {
    const gap = prev ? L.y1 - prev.y2 : 0;
    console.log(`line y=${L.y1}-${L.y2} x=${L.first}-${L.last} w=${L.last - L.first} gapAbove=${gap}`);
    prev = L;
  }
}

(async () => {
  for (const f of process.argv.slice(2)) await analyze(f);
})().catch((e) => { console.error(e); process.exit(1); });
