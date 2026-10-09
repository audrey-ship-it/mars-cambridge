// 输出页面暗像素行剖面, 用于人工判读行带边界
// 用法: node scripts/profile-schools1.cjs <page> [x0] [x1] [step]
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const pagesDir = path.join(__dirname, "schools1-pages");
const page = process.argv[2];
const X0 = +(process.argv[3] || 0), X1 = +(process.argv[4] || 1e9), STEP = +(process.argv[5] || 8);

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
  console.log(`page=${page} W=${W} H=${H} x范围=${X0}-${Math.min(X1, W)}`);
  let line = "";
  let lastY = -STEP;
  for (let y = 0; y < H; y += STEP) {
    let c = 0;
    for (let x = X0; x < Math.min(X1, W); x++) if (g(x, y) < 190) c++;
    if (line && y - lastY > STEP) { console.log(`${lastY}: ${line}`); line = ""; }
    if (c > 2) { if (!line) lastY = y; line += `${c} `; }
    else if (line) { console.log(`${lastY}: ${line}`); line = ""; }
  }
  if (line) console.log(`${lastY}: ${line}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
