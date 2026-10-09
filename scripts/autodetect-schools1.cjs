// 自动检测听力 Part1 页图片行 v2: 边框列=有>=2段>360暗段的列
// 用法: node scripts/autodetect-schools1.cjs <page...>
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const pagesDir = path.join(__dirname, "schools1-pages");

async function analyze(page) {
  const img = await loadImage(path.join(pagesDir, page));
  const W = img.width, H = img.height;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const { data } = ctx.getImageData(0, 0, W, H);
  const g = (x, y) => {
    const i = (y * W + x) * 4;
    return (data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11) | 0;
  };
  // 列内暗段(容忍 10px 缺口)
  const colRuns = (x) => {
    const runs = [];
    let s = -1, miss = 0;
    for (let y = 0; y < H; y++) {
      if (g(x, y) < 200) {
        if (s < 0) s = y;
        miss = 0;
      } else if (s >= 0 && ++miss > 10) {
        if (y - miss - s > 300) runs.push([s, y - miss - 1]);
        s = -1;
        miss = 0;
      }
    }
    if (s >= 0 && H - s > 300) runs.push([s, H - 1]);
    return runs;
  };
  const isBorderCol = (x) => colRuns(x).filter((r) => r[1] - r[0] > 360).length >= 2;
  // 1) 左右边框列组
  const findGroup = (from, to, step) => {
    let grp = null;
    for (let x = from; step > 0 ? x < to : x > to; x += step) {
      if (isBorderCol(x)) {
        if (!grp) grp = { x1: x, x2: x, n: 1 };
        else if (x - grp.x2 <= 8) { grp.x2 = x; grp.n++; }
        else if (grp.n >= 3) break;
        else grp = { x1: x, x2: x, n: 1 };
      }
    }
    return grp && grp.n >= 3 ? grp : null;
  };
  const L = findGroup(150, 900, 1);
  const R = findGroup(W - 40, 1400, -1);
  if (!L || !R) { console.log(`== ${page} 未找到边框`); return; }
  console.log(`== ${page} W=${W} H=${H} 左边框 ${L.x1}-${L.x2} 右边框 ${R.x1}-${R.x2}`);
  // 2) 沿左边框列求行带(取组内多数列的并集)
  const votes = new Array(H).fill(0);
  for (let x = L.x1; x <= L.x2; x++) for (let y = 0; y < H; y++) if (g(x, y) < 200) votes[y]++;
  const need = Math.max(1, (L.x2 - L.x1 + 1) * 0.6);
  const runs = [];
  let s = -1, miss = 0;
  for (let y = 0; y < H; y++) {
    if (votes[y] >= need) {
      if (s < 0) s = y;
      miss = 0;
    } else if (s >= 0 && ++miss > 10) {
      if (y - miss - s > 300) runs.push([s, y - miss - 1]);
      s = -1;
      miss = 0;
    }
  }
  if (s >= 0 && H - s > 300) runs.push([s, H - 1]);
  // 3) 标签底: 带下方第一个计数块(8-420)的末行, 块间空隙>14px 即止
  const cntRow = (y) => {
    let c = 0;
    for (let x = L.x1; x <= R.x2; x += 3) if (g(x, y) < 190) c++;
    return c * 3;
  };
  for (const [a, b] of runs) {
    let labTop = -1, labBot = -1, gap = 0;
    for (let y = b + 8; y < Math.min(b + 170, H); y++) {
      const c = cntRow(y);
      if (c >= 8 && c <= 420) {
        if (labTop < 0) labTop = y;
        labBot = y;
        gap = 0;
      } else if (labTop >= 0 && ++gap > 14) break;
      if (c > 600) break;
    }
    console.log(`  行带 y=${a}-${b} (h=${b - a + 1})  标签 ${labTop}-${labBot}`);
  }
  console.log(`  裁剪 x: ${L.x1 - 6} -> ${R.x2 + 6} (W=${R.x2 - L.x1 + 13})`);
}

(async () => {
  for (const p of process.argv.slice(2)) await analyze(p);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
