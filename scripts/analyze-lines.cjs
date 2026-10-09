// 分析 PNG：输出深色像素行/列计数超过阈值的位置
// 用法:
//   node scripts/analyze-lines.cjs <png> rows [threshold] [x0] [y0] [x1] [y1]
//   node scripts/analyze-lines.cjs <png> cols [threshold] [x0] [y0] [x1] [y1]
const { loadImage, createCanvas } = require("@napi-rs/canvas");

async function main() {
  const [file, mode, threshold = 300, x0, y0, x1, y1] = process.argv.slice(2);
  const img = await loadImage(file);
  const c = createCanvas(img.width, img.height);
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;
  const bx0 = x0 === undefined ? 0 : Number(x0);
  const by0 = y0 === undefined ? 0 : Number(y0);
  const bx1 = x1 === undefined ? img.width - 1 : Number(x1);
  const by1 = y1 === undefined ? img.height - 1 : Number(y1);

  if (mode === "rows") {
    for (let y = by0; y <= by1; y++) {
      let dark = 0;
      for (let px = bx0; px <= bx1; px++) {
        const i = (y * img.width + px) * 4;
        if (data[i] < 100 && data[i + 1] < 100 && data[i + 2] < 100) dark++;
      }
      if (dark > Number(threshold)) console.log(y, dark);
    }
  } else {
    for (let px = bx0; px <= bx1; px++) {
      let dark = 0;
      for (let y = by0; y <= by1; y++) {
        const i = (y * img.width + px) * 4;
        if (data[i] < 100 && data[i + 1] < 100 && data[i + 2] < 100) dark++;
      }
      if (dark > Number(threshold)) console.log(px, dark);
    }
  }
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
