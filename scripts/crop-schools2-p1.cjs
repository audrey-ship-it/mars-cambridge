// Schools2 (B1 Preliminary for Schools 2) 听力 Part 1 自动按图框边线裁剪 q1-q7
// 用法: node scripts/crop-schools2-p1.cjs [test1|test2|test3|test4]  (缺省全跑)
const fs = require("fs");
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const DARK = (r, g, b) => r < 170 && g < 170 && b < 170;
const dir = path.join(__dirname, "schools2-pages");
const which = process.argv[2] || "all";

const TESTS = {
  test1: ["page-022.png", "page-023.png"],
  test2: ["page-040.png", "page-041.png"],
  test3: ["page-058.png", "page-059.png"],
  test4: ["page-076.png", "page-077.png"],
};

async function detectRows(file) {
  const img = await loadImage(path.join(dir, file));
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
      if (cur && y - cur.y2 <= 4) { cur.y2 = y; cur.last = Math.max(cur.last, last); cur.first = Math.min(cur.first, first); }
      else { if (cur) lines.push(cur); cur = { y1: y, y2: y, first, last }; }
    }
  }
  if (cur) lines.push(cur);
  // 配对成图行：上下边线间距 400-480、两线均足够宽
  const rows = [];
  for (let i = 0; i < lines.length - 1; i++) {
    const a = lines[i], b = lines[i + 1];
    const gap = b.y1 - a.y2;
    if (gap >= 400 && gap <= 480 && b.last - b.first > 1500 && a.last - a.first > 1500) {
      rows.push({ top: a, bottom: b });
      i++; // 消耗两条线
    }
  }
  return rows;
}

async function main() {
  const names = which === "all" ? Object.keys(TESTS) : [which];
  const cache = new Map();
  for (const name of names) {
    const n = name.replace("test", "");
    const outDir = path.join(__dirname, "..", "public", "images", "pet", "listening", `schools2-${n}`);
    fs.mkdirSync(outDir, { recursive: true });
    let q = 0;
    for (const page of TESTS[name]) {
      const src = path.join(dir, page);
      if (!cache.has(src)) cache.set(src, await loadImage(src));
      const img = cache.get(src);
      const rows = await detectRows(page);
      if (rows.length !== (q === 0 ? 3 : 4)) console.warn(`WARN ${page}: 检测到 ${rows.length} 个图行`);
      for (const r of rows) {
        q++;
        const y = r.top.y1 - 10;
        const h = r.bottom.y2 + 10 - y;
        const x = Math.max(0, Math.min(r.top.first, r.bottom.first) - 12);
        const w = Math.min(img.width, Math.max(r.top.last, r.bottom.last) + 12) - x;
        const canvas = createCanvas(w, h);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
        const out = path.join(outDir, `q${q}.png`);
        fs.writeFileSync(out, canvas.toBuffer("image/png"));
        console.log(out, `${w}x${h}`, `from ${page} y=${y}`);
      }
    }
    if (q !== 7) console.warn(`WARN test${n}: 共 ${q} 题`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
