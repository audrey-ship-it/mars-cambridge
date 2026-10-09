// 输出 y 带内暗像素列剖面, 用于判读图片 x 边界
// 用法: node scripts/colprofile-schools1.cjs <page> <y0> <y1> [step]
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const pagesDir = path.join(__dirname, "schools1-pages");
const page = process.argv[2];
const Y0 = +process.argv[3], Y1 = +process.argv[4], STEP = +(process.argv[5] || 8);

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
  console.log(`page=${page} W=${W} H=${H} y=${Y0}-${Y1}`);
  let line = "", lastX = -STEP;
  for (let x = 0; x < W; x += STEP) {
    let c = 0;
    for (let y = Y0; y <= Math.min(Y1, H - 1); y++) if (g(x, y) < 190) c++;
    if (c > 1) { if (!line) lastX = x; line += `${c} `; }
    else if (line) { console.log(`${lastX}: ${line}`); line = ""; }
  }
  if (line) console.log(`${lastX}: ${line}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
