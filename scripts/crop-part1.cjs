// 从 Part 1 页面图裁出每题 A/B/C 图片行
// 用法: node scripts/crop-part1.cjs [test2]  （默认裁 Test 1，加 test2 裁 Test 2 并输出到 public）
const fs = require("fs");
const path = require("path");
const { loadImage, createCanvas } = require("@napi-rs/canvas");

const pagesDir = path.join(__dirname, "trainer1-pages");
const outDir = path.join(__dirname, "trainer1-p1");
const test2 = process.argv[2] === "test2";
const test3 = process.argv[2] === "test3";
const test4 = process.argv[2] === "test4";
const test5 = process.argv[2] === "test5";
const test6 = process.argv[2] === "test6";
// x 范围覆盖三张图+标签，y 为每题图片行
const X = 130, W = 1060;
const CROPS = test6
  ? [
      { q: 1, page: "page-161.png", y: 355, h: 250 },
      { q: 2, page: "page-161.png", y: 650, h: 245 },
      { q: 3, page: "page-161.png", y: 970, h: 255 },
      { q: 4, page: "page-162.png", y: 200, h: 245 },
      { q: 5, page: "page-162.png", y: 495, h: 245 },
      { q: 6, page: "page-162.png", y: 802, h: 238 },
      { q: 7, page: "page-162.png", y: 1082, h: 252 },
    ].map((c) => ({ ...c, dir: "trainer1-t6-pages", out: "public/images/pet/listening/trainer1", name: `t6-q${c.q}.png` }))
  : test5
  ? [
      { q: 1, page: "page-143.png", y: 350, h: 245 },
      { q: 2, page: "page-143.png", y: 650, h: 245 },
      { q: 3, page: "page-143.png", y: 945, h: 245 },
      { q: 4, page: "page-144.png", y: 210, h: 235 },
      { q: 5, page: "page-144.png", y: 505, h: 245 },
      { q: 6, page: "page-144.png", y: 815, h: 245 },
      { q: 7, page: "page-144.png", y: 1120, h: 240 },
    ].map((c) => ({ ...c, dir: "trainer1-t5-pages", out: "public/images/pet/listening/trainer1", name: `t5-q${c.q}.png` }))
  : test4
  ? [
      { q: 1, page: "page-125.png", y: 350, h: 245 },
      { q: 2, page: "page-125.png", y: 650, h: 245 },
      { q: 3, page: "page-125.png", y: 945, h: 245 },
      { q: 4, page: "page-126.png", y: 210, h: 235 },
      { q: 5, page: "page-126.png", y: 505, h: 245 },
      { q: 6, page: "page-126.png", y: 815, h: 245 },
      { q: 7, page: "page-126.png", y: 1120, h: 240 },
    ].map((c) => ({ ...c, dir: "trainer1-t4-pages", out: "public/images/pet/listening/trainer1", name: `t4-q${c.q}.png` }))
  : test3
  ? [
      { q: 1, page: "page-107.png", y: 355, h: 240 },
      { q: 2, page: "page-107.png", y: 665, h: 235 },
      { q: 3, page: "page-107.png", y: 955, h: 260 },
      { q: 4, page: "page-108.png", y: 215, h: 235 },
      { q: 5, page: "page-108.png", y: 515, h: 240 },
      { q: 6, page: "page-108.png", y: 835, h: 240 },
      { q: 7, page: "page-108.png", y: 1145, h: 235 },
    ].map((c) => ({ ...c, dir: "trainer1-t3-pages", out: "public/images/pet/listening/trainer1", name: `t3-q${c.q}.png` }))
  : test2
  ? [
      { q: 1, page: "page-079.png", y: 360, h: 230 },
      { q: 2, page: "page-079.png", y: 660, h: 235 },
      { q: 3, page: "page-079.png", y: 985, h: 220 },
      { q: 4, page: "page-080.png", y: 140, h: 200 },
      { q: 5, page: "page-080.png", y: 430, h: 225 },
      { q: 6, page: "page-080.png", y: 740, h: 215 },
      { q: 7, page: "page-080.png", y: 1040, h: 230 },
    ].map((c) => ({ ...c, dir: "trainer1-t2-pages", out: "public/images/pet/listening/trainer1", name: `t2-q${c.q}.png` }))
  : [
      { q: 1, page: "page-037.png", y: 355, h: 240 },
      { q: 2, page: "page-037.png", y: 660, h: 240 },
      { q: 3, page: "page-037.png", y: 970, h: 230 },
      { q: 4, page: "page-038.png", y: 135, h: 235 },
      { q: 5, page: "page-038.png", y: 440, h: 225 },
      { q: 6, page: "page-038.png", y: 745, h: 215 },
      { q: 7, page: "page-038.png", y: 1045, h: 205 },
    ].map((c) => ({ ...c, dir: "trainer1-pages", out: outDir, name: `q${c.q}.png` }));

async function main() {
  const outPath = CROPS[0].out;
  fs.mkdirSync(outPath, { recursive: true });
  const cache = new Map();
  for (const c of CROPS) {
    const src = path.join(__dirname, c.dir, c.page);
    if (!cache.has(src)) cache.set(src, await loadImage(src));
    const img = cache.get(src);
    const canvas = createCanvas(W, c.h);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, X, c.y, W, c.h, 0, 0, W, c.h);
    const out = path.join(c.out, c.name);
    fs.writeFileSync(out, canvas.toBuffer("image/png"));
    console.log(out, `${W}x${c.h}`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
