// 沿竖边框列扫描暗像素连续段 => 每题图行精确 y 范围; 再找标签行
// 用法: node scripts/vscan-schools1.cjs <page> <x,...>
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const pagesDir = path.join(__dirname, "schools1-pages");
const page = process.argv[2];
const xs = process.argv[3].split(",").map(Number);

async function main() {
  const img = await loadImage(path.join(pagesDir, page));
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const { data, width: W, height: H } = ctx.getImageData(0, 0, img.width, img.height);
  const g = (x, y) => {
    const i = (y * W + x) * 4;
    return (data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11) | 0;
  };
  console.log(`== ${page} W=${W} H=${H}`);
  for (const x of xs) {
    const runs = [];
    let s = -1, miss = 0;
    for (let y = 0; y < H; y++) {
      const d = g(x, y) < 200;
      if (d) { if (s < 0) s = y; miss = 0; }
      else if (s >= 0 && ++miss > 6) { runs.push([s, y - miss]); s = -1; miss = 0; }
    }
    if (s >= 0) runs.push([s, H - 1]);
    console.log(
      `x=${x}: ` + runs.filter((r) => r[1] - r[0] > 60).map((r) => `${r[0]}-${r[1]}(${r[1] - r[0] + 1})`).join(" ")
    );
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
