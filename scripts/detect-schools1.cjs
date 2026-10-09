// 自动检测听力 Part1 页每题图片行: 上/下边框线 + A/B/C 标签底部
// 用法: node scripts/detect-schools1.cjs <page...>
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const pagesDir = path.join(__dirname, "schools1-pages");

async function analyze(page) {
  const img = await loadImage(path.join(pagesDir, page));
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const { data, width: W, height: H } = ctx.getImageData(0, 0, img.width, img.height);
  const g = (x, y) => {
    const i = (y * W + x) * 4;
    return (data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11) | 0;
  };
  // 行暗像素计数 (x 320-2060)
  const X0 = 320, X1 = Math.min(2060, W);
  const cnt = new Array(H).fill(0);
  for (let y = 0; y < H; y++) {
    let c = 0;
    for (let x = X0; x < X1; x += 2) if (g(x, y) < 190) c++;
    cnt[y] = c * 2;
  }
  // 边框线: 计数 > 650
  const lines = [];
  let s = -1;
  for (let y = 0; y < H; y++) {
    const on = cnt[y] > 650;
    if (on && s < 0) s = y;
    if (!on && s >= 0) { lines.push([s, y - 1]); s = -1; }
  }
  console.log(`== ${page} W=${W} H=${H}`);
  for (let i = 0; i < lines.length; i++) {
    const [a, b] = lines[i];
    // 标签: 下方 130px 内计数 10-400 的行
    let labTop = -1, labBot = -1;
    for (let y = b + 6; y < Math.min(b + 140, H); y++) {
      if (cnt[y] >= 10 && cnt[y] <= 420) { if (labTop < 0) labTop = y; labBot = y; }
      if (cnt[y] > 650) break;
    }
    // 列边框: 在带内找全高暗列
    const cols = [];
    for (let x = 200; x < W - 20; x++) {
      let c = 0, n = 0;
      for (let y = a + 4; y <= b - 4; y += 3) { n++; if (g(x, y) < 190) c++; }
      if (c > n * 0.9) cols.push(x);
    }
    const grp = [];
    for (const x of cols) {
      if (grp.length && x - grp[grp.length - 1][1] <= 4) grp[grp.length - 1][1] = x;
      else grp.push([x, x]);
    }
    console.log(
      `线 y=${a}-${b} 标签=${labTop}-${labBot} 竖边框x=${grp.map((g2) => g2[0]).join(",")}`
    );
  }
}

(async () => {
  for (const p of process.argv.slice(2)) await analyze(p);
})().catch((e) => { console.error(e); process.exit(1); });
