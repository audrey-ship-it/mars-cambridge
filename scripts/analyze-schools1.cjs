// 分析 schools1 页面: 检测听力图片行边框与口语照片包围盒
// 用法: node scripts/analyze-schools1.cjs <mode> <page>
// mode: listen (检测横向长边框线) | photo (检测照片包围盒) | box (非白像素包围盒)
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const pagesDir = path.join(__dirname, "schools1-pages");
const [, , mode, page] = process.argv;

async function main() {
  const img = await loadImage(path.join(pagesDir, page));
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const { data, width: W, height: H } = ctx.getImageData(0, 0, img.width, img.height);
  const gray = (i) => (data[i * 4] * 0.3 + data[i * 4 + 1] * 0.59 + data[i * 4 + 2] * 0.11) | 0;
  const dark = (x, y) => gray((y * W + x) * 4) < (process.env.TH ? +process.env.TH : 200);

  if (mode === "listen") {
    // 每行的最长横向暗像素游程 => 图片边框线
    const bands = [];
    let inBand = false, start = 0;
    for (let y = 0; y < H; y++) {
      let run = 0, maxrun = 0;
      for (let x = 60; x < W - 30; x++) {
        if (dark(x, y)) { run++; if (run > maxrun) maxrun = run; } else run = 0;
      }
      const isLine = maxrun > (process.env.MINRUN ? +process.env.MINRUN : 180);
      if (isLine && !inBand) { inBand = true; start = y; }
      if (!isLine && inBand) { inBand = false; bands.push([start, y - 1]); }
    }
    console.log(page, "长横线(y起-y止):");
    for (const [a, b] of bands) {
      if (b - a > 12) continue; // 忽略过厚(可能是图片内部大块深色)
      // 该线段范围内的 x 游程范围
      let minx = W, maxx = 0;
      const yMid = (a + b) >> 1;
      for (let x = 0; x < W; x++) {
        let run = 0, ok = false;
        for (let dx = 0; dx < 8 && x + dx < W; dx++) if (dark(x + dx, yMid)) { run++; }
        if (run >= 4) { ok = true; x += run; }
        if (ok) { if (x < minx) minx = x; if (x > maxx) maxx = x; }
      }
      console.log(`  y=${a}-${b}  x=${minx}-${maxx}`);
    }
  } else if (mode === "photo") {
    // 照片: 行/列暗像素计数 => 密集内容区
    const rows = new Array(H).fill(0), cols = new Array(W).fill(0);
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (dark(x, y)) { rows[y]++; cols[x]++; }
    const rowOn = rows.map((c) => c > 120);
    const segs = [];
    let s = -1;
    rowOn.forEach((on, y) => {
      if (on && s < 0) s = y;
      if (!on && s >= 0) { if (y - s > 100) segs.push([s, y - 1]); s = -1; }
    });
    console.log(page, "照片行带(y起-y止):");
    for (const [a, b] of segs) {
      let minx = W, maxx = 0;
      for (let x = 0; x < W; x++) {
        let cnt = 0;
        for (let y = a; y <= b; y += 4) if (dark(x, y)) cnt++;
        if (cnt > (b - a) / 8) { if (x < minx) minx = x; if (x > maxx) maxx = x; }
      }
      console.log(`  y=${a}-${b} h=${b - a + 1}  x=${minx}-${maxx} w=${maxx - minx + 1}`);
    }
  } else if (mode === "box") {
    // 非白像素包围盒(排除指定区域, 如标题/页码)
    let minx = W, maxx = 0, miny = H, maxy = 0;
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (dark(x, y)) {
          if (x < minx) minx = x;
          if (x > maxx) maxx = x;
          if (y < miny) miny = y;
          if (y > maxy) maxy = y;
        }
    console.log(page, `非白包围盒: x=${minx}-${maxx} y=${miny}-${maxy}`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
