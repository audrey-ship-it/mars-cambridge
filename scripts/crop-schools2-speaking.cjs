// Schools2 口语图片裁剪：Part2 两张照片 photo-a/b，Part3 场景 task
// analyze 模式: node scripts/crop-schools2-speaking.cjs analyze page-152.png
// 裁剪模式:   node scripts/crop-schools2-speaking.cjs [1|2|3|4|all]
const fs = require("fs");
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const dir = path.join(__dirname, "schools2-pages");
const LUM = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

async function loadGray(file) {
  const img = await loadImage(path.join(dir, file));
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const d = ctx.getImageData(0, 0, img.width, img.height).data;
  const W = img.width, H = img.height;
  const g = new Uint8Array(W * H);
  for (let i = 0, p = 0; i < g.length; i++, p += 4) g[i] = LUM(d[p], d[p + 1], d[p + 2]);
  return { g, W, H };
}

// 打印暗像素行带（cnt>th 的连续行段）
async function analyze(file) {
  const { g, W, H } = await loadGray(file);
  const rowCnt = new Int32Array(H);
  for (let y = 0; y < H; y++) {
    let c = 0;
    for (let x = 0; x < W; x++) if (g[y * W + x] < 215) c++;
    rowCnt[y] = c;
  }
  console.log(`== ${file} ${W}x${H}`);
  for (const th of [1500, 600, 150]) {
    console.log(`-- threshold ${th}`);
    let y = 0;
    while (y < H) {
      if (rowCnt[y] > th) {
        let y2 = y;
        while (y2 + 1 < H && rowCnt[y2 + 1] > th) y2++;
        if (y2 - y > 20) {
          // 该带内列范围
          let x1 = W, x2 = 0;
          for (let yy = y; yy <= y2; yy += 4)
            for (let x = 0; x < W; x++) if (g[yy * W + x] < 215) { if (x < x1) x1 = x; if (x > x2) x2 = x; }
          console.log(`band y=${y}-${y2} h=${y2 - y} x=${x1}-${x2}`);
        }
        y = y2 + 1;
      } else y++;
    }
  }
}

const TESTS = {
  1: { part2: "page-152.png", part3: "page-153.png" },
  2: { part2: "page-154.png", part3: "page-155.png" },
  3: { part2: "page-156.png", part3: "page-157.png" },
  4: { part2: "page-158.png", part3: "page-159.png" },
};

async function crop(file, x, y, w, h, out) {
  const { g: _g, W, H } = await loadGray(file);
  const img = await loadImage(path.join(dir, file));
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
  fs.writeFileSync(out, canvas.toBuffer("image/png"));
  console.log(out, `${w}x${h}`);
}

async function main() {
  const arg = process.argv[2] || "all";
  if (arg === "analyze") { for (const f of process.argv.slice(3)) await analyze(f); return; }
  const ns = arg === "all" ? Object.keys(TESTS) : [arg];
  for (const n of ns) {
    const t = TESTS[n];
    const outDir = path.join(__dirname, "..", "public", "images", "pet", "speaking", `schools2-${n}`);
    fs.mkdirSync(outDir, { recursive: true });
    await crop(t.part2, ...PART2[n], path.join(outDir, "photo-a.png"));
    await crop(t.part2, ...PART2B[n], path.join(outDir, "photo-b.png"));
    await crop(t.part3, ...PART3[n], path.join(outDir, "task.png"));
  }
}

// [x, y, w, h] —— 依据 analyze 输出校准
const PART2 = {
  1: [511, 820, 1550, 1046],
  2: [421, 635, 1681, 1084],
  3: [415, 655, 1612, 1087],
  4: [374, 637, 1645, 1106],
};
const PART2B = {
  1: [511, 2000, 1550, 1043],
  2: [416, 1853, 1682, 1204],
  3: [406, 1871, 1616, 1082],
  4: [364, 1872, 1645, 1095],
};
const PART3 = {
  1: [100, 540, 2032, 2070],
  2: [100, 530, 2060, 1775],
  3: [100, 530, 2080, 2135],
  4: [100, 530, 2115, 2260],
};

main().catch((e) => { console.error(e); process.exit(1); });
