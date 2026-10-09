// 从扫描版 PDF 提取页面内嵌图像并保存为 PNG（绕过 canvas 渲染，避免崩溃）
// 用法: node scripts/extract-pdf-images.cjs <pdf路径> <起始页> <结束页> <输出目录>
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// ---------- 纯 JS PNG 编码 ----------
function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
  }
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}
function encodePNG(width, height, rgb /* Uint8Array RGB 24bpp */) {
  const stride = width * 3;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    Buffer.from(rgb.buffer, rgb.byteOffset + y * stride, stride).copy(raw, y * (stride + 1) + 1);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: RGB
  const idat = zlib.deflateSync(raw, { level: 6 });
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", idat),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}
// 1 位灰度 → 8 位灰度 → RGB
function gray1ToRGB(width, height, data) {
  const rowBytes = Math.ceil(width / 8);
  const rgb = new Uint8Array(width * height * 3);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const bit = (data[y * rowBytes + (x >> 3)] >> (7 - (x & 7))) & 1;
      const v = bit ? 255 : 0;
      const o = (y * width + x) * 3;
      rgb[o] = rgb[o + 1] = rgb[o + 2] = v;
    }
  }
  return rgb;
}

async function getObj(page, name, retries = 15) {
  for (let i = 0; i < retries; i++) {
    try {
      return page.objs.get(name);
    } catch {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error(`object ${name} not resolved`);
}

async function main() {
  const [pdfPath, start, end, outDir] = process.argv.slice(2);
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const buf = fs.readFileSync(pdfPath);
  const wasmUrl = path.join(__dirname, "..", "node_modules", "pdfjs-dist", "wasm").replace(/\\/g, "/") + "/";
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buf), wasmUrl }).promise;
  fs.mkdirSync(outDir, { recursive: true });

  for (let p = Number(start); p <= Math.min(Number(end), doc.numPages); p++) {
    const page = await doc.getPage(p);
    const ops = await page.getOperatorList();
    const OPS = pdfjsLib.OPS;
    const names = [];
    for (let i = 0; i < ops.fnArray.length; i++) {
      if (ops.fnArray[i] === OPS.paintImageXObject) {
        const n = ops.argsArray[i][0];
        if (typeof n === "string") names.push(n);
      }
    }
    if (!names.length) {
      console.log(`page ${p}: no images`);
      continue;
    }
    // 只保留每页最大的图（扫描页通常整页一张）
    let best = null;
    for (const name of [...new Set(names)]) {
      const img = await getObj(page, name);
      const { width, height, kind, data } = img;
      if (!best || width * height > best.width * best.height) best = { name, width, height, kind, data };
    }
    const { name, width, height, kind, data } = best;
    let rgb;
    if (kind === 1) rgb = gray1ToRGB(width, height, data); // GRAYSCALE_1BPP
    else if (kind === 2) rgb = data; // RGB_24BPP
    else if (kind === 3) {
      // RGBA_32BPP → RGB
      rgb = new Uint8Array(width * height * 3);
      for (let i = 0, j = 0; i < rgb.length; i += 3, j += 4) {
        rgb[i] = data[j];
        rgb[i + 1] = data[j + 1];
        rgb[i + 2] = data[j + 2];
      }
    } else throw new Error(`page ${p}: unsupported kind ${kind}`);
    const file = path.join(outDir, `page-${String(p).padStart(3, "0")}.png`);
    fs.writeFileSync(file, encodePNG(width, height, rgb));
    console.log(`page ${p}: ${name} ${width}x${height} kind=${kind} -> ${path.basename(file)} (${(fs.statSync(file).size / 1024).toFixed(0)}KB)`);
  }
  console.log("done");
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
