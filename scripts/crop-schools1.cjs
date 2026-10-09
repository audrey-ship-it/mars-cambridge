// 从 B1 Preliminary for Schools 1 整页扫描裁出听力 Part1 图片行与口语照片
// 听力: Q1-3 在 page-021/039/057/075, Q4-7 在 page-022/040/058/076
// 口语: Visual materials T1=186/187, T2=188/189, T3=190/191, T4=192/193
const fs = require("fs");
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const pagesDir = path.join(__dirname, "schools1-pages");
const outRoot = path.join(__dirname, "..", "public", "images", "pet");

// 听力 Part1: 每行三幅图 + A/B/C 字母
// Q1-3 页图片行 x 203~1185; Q4-7 页 x 124~1150
const L13 = { x: 203, w: 982 };
const L47 = { x: 124, w: 1026 };
const listening = [
  // Test 1
  { t: 1, q: 1, page: "page-021.png", ...L13, y: 473, h: 308 },
  { t: 1, q: 2, page: "page-021.png", ...L13, y: 837, h: 306 },
  { t: 1, q: 3, page: "page-021.png", ...L13, y: 1202, h: 308 },
  { t: 1, q: 4, page: "page-022.png", ...L47, y: 199, h: 309 },
  { t: 1, q: 5, page: "page-022.png", ...L47, y: 565, h: 309 },
  { t: 1, q: 6, page: "page-022.png", ...L47, y: 935, h: 308 },
  { t: 1, q: 7, page: "page-022.png", ...L47, y: 1304, h: 309 },
  // Test 2
  { t: 2, q: 1, page: "page-039.png", ...L13, y: 473, h: 308 },
  { t: 2, q: 2, page: "page-039.png", ...L13, y: 837, h: 306 },
  { t: 2, q: 3, page: "page-039.png", ...L13, y: 1202, h: 308 },
  { t: 2, q: 4, page: "page-040.png", ...L47, y: 199, h: 309 },
  { t: 2, q: 5, page: "page-040.png", ...L47, y: 565, h: 309 },
  { t: 2, q: 6, page: "page-040.png", ...L47, y: 935, h: 308 },
  { t: 2, q: 7, page: "page-040.png", ...L47, y: 1304, h: 309 },
  // Test 3
  { t: 3, q: 1, page: "page-057.png", ...L13, y: 473, h: 308 },
  { t: 3, q: 2, page: "page-057.png", ...L13, y: 837, h: 306 },
  { t: 3, q: 3, page: "page-057.png", ...L13, y: 1202, h: 308 },
  { t: 3, q: 4, page: "page-058.png", ...L47, y: 199, h: 309 },
  { t: 3, q: 5, page: "page-058.png", ...L47, y: 565, h: 309 },
  { t: 3, q: 6, page: "page-058.png", ...L47, y: 935, h: 308 },
  { t: 3, q: 7, page: "page-058.png", ...L47, y: 1304, h: 309 },
  // Test 4
  { t: 4, q: 1, page: "page-075.png", ...L13, y: 473, h: 308 },
  { t: 4, q: 2, page: "page-075.png", ...L13, y: 837, h: 306 },
  { t: 4, q: 3, page: "page-075.png", ...L13, y: 1202, h: 308 },
  { t: 4, q: 4, page: "page-076.png", ...L47, y: 199, h: 309 },
  { t: 4, q: 5, page: "page-076.png", ...L47, y: 565, h: 309 },
  { t: 4, q: 6, page: "page-076.png", ...L47, y: 935, h: 308 },
  { t: 4, q: 7, page: "page-076.png", ...L47, y: 1304, h: 309 },
].map((c) => ({
  ...c,
  out: path.join(outRoot, "listening", `schools1-${c.t}`, `q${c.q}.png`),
}));

// 口语: Part2 考生 A/B 照片 + Part3 讨论图
const speaking = [
  // Test 1: A 看电视男孩 / B 一家用餐 / Part3 山中漫步物品
  { n: "photo-a", page: "page-186.png", x: 226, y: 432, w: 815, h: 546 },
  { n: "photo-b", page: "page-186.png", x: 226, y: 1056, w: 815, h: 548 },
  { n: "task", page: "page-187.png", x: 109, y: 374, w: 1067, h: 1093 },
  // Test 2: A 山地骑行 / B 乐队排练 / Part3 学本地历史 6 项
  { n: "photo-a", page: "page-188.png", x: 184, y: 260, w: 912, h: 612 },
  { n: "photo-b", page: "page-188.png", x: 184, y: 949, w: 912, h: 670 },
  { n: "task", page: "page-189.png", x: 114, y: 352, w: 1100, h: 979 },
  // Test 3: A 牵马 / B 下棋 / Part3 时尚 6 项
  { n: "photo-a", page: "page-190.png", x: 179, y: 264, w: 911, h: 607 },
  { n: "photo-b", page: "page-190.png", x: 179, y: 949, w: 911, h: 670 },
  { n: "task", page: "page-191.png", x: 114, y: 369, w: 1100, h: 1005 },
  // Test 4: A 课堂 / B 帆船模型 / Part3 长途火车 6 项
  { n: "photo-a", page: "page-192.png", x: 179, y: 272, w: 911, h: 599 },
  { n: "photo-b", page: "page-192.png", x: 179, y: 952, w: 911, h: 672 },
  { n: "task", page: "page-193.png", x: 97, y: 374, w: 1125, h: 957 },
].map((c, i) => ({
  ...c,
  t: Math.floor(i / 3) + 1,
  out: path.join(outRoot, "speaking", `schools1-${Math.floor(i / 3) + 1}`, `${c.n}.png`),
}));

async function main() {
  const cache = new Map();
  for (const c of [...listening, ...speaking]) {
    const src = path.join(pagesDir, c.page);
    if (!cache.has(src)) cache.set(src, await loadImage(src));
    const canvas = createCanvas(c.w, c.h);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(cache.get(src), c.x, c.y, c.w, c.h, 0, 0, c.w, c.h);
    fs.mkdirSync(path.dirname(c.out), { recursive: true });
    fs.writeFileSync(c.out, canvas.toBuffer("image/png"));
    console.log(path.relative(process.cwd(), c.out), `${c.w}x${c.h}`);
  }
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
