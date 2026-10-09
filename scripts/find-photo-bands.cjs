// 扫描 PNG，按行找非白像素（< 阈值）的跨度，将连续且跨度>minSpan 的行聚类输出
// 用法: node scripts/find-photo-bands.cjs <png> [luminance=215] [minSpan=400]
const { loadImage, createCanvas } = require("@napi-rs/canvas");

async function main() {
  const [file, lum = 215, minSpan = 400] = process.argv.slice(2);
  const img = await loadImage(file);
  const c = createCanvas(img.width, img.height);
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;
  const bands = [];
  let cur = null;
  for (let y = 0; y < img.height; y++) {
    let min = -1;
    let max = -1;
    for (let px = 0; px < img.width; px++) {
      const i = (y * img.width + px) * 4;
      if (data[i] < lum && data[i + 1] < lum && data[i + 2] < lum) {
        if (min === -1) min = px;
        max = px;
      }
    }
    const wide = min !== -1 && max - min > Number(minSpan);
    if (wide) {
      if (!cur || y > cur.last + 2) {
        cur = { top: y, bottom: y, last: y, min, max };
        bands.push(cur);
      } else {
        cur.bottom = y;
        cur.last = y;
        cur.min = Math.min(cur.min, min);
        cur.max = Math.max(cur.max, max);
      }
    }
  }
  bands.forEach((b, i) => console.log(`band${i + 1}: y ${b.top}-${b.bottom} (h ${b.bottom - b.top + 1}), x ${b.min}-${b.max} (w ${b.max - b.min + 1})`));
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
