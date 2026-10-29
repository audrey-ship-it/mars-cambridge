import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const pdfToImg = require('pdf-to-img');
const pdf = (pdfToImg.default || pdfToImg.pdf || pdfToImg);

const PDF_PATH = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）/1-KET Trainer1（共6套）/【全册+音频】/Trainer《剑桥KET官方模考题精讲精练1》.pdf';
const OUT_DIR = process.env.OUT_DIR || 'd:/workspace_sunny/mars-cambridge/scripts/_trainer1_pages';
fs.mkdirSync(OUT_DIR, { recursive: true });

const PAGES_TO_RENDER = process.argv.slice(2).map(s => Number(s)).filter(Boolean);

console.log('pdf-to-img exports:', Object.keys(pdfToImg));
console.log('render pages:', PAGES_TO_RENDER.length ? PAGES_TO_RENDER : 'all');

// 通过 docInitParams 注入 wasmUrl（必须用 file:// URL 形式 + 尾部斜杠）
const pdfjsPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const wasmUrl = pathToFileURL(path.join(pdfjsPath, 'wasm') + path.sep).href;
console.log('wasmUrl:', wasmUrl);

const SCALE = Number(process.env.SCALE) || 2;
const doc = await pdf(PDF_PATH, {
  scale: SCALE,
  docInitParams: {
    wasmUrl,
    useWasm: true,
  },
});
console.log('doc type:', typeof doc, 'async iterable:', doc && typeof doc[Symbol.asyncIterator] === 'function');

const MAX_PAGE = PAGES_TO_RENDER.length ? Math.max(...PAGES_TO_RENDER) : Infinity;
let i = 0;
for await (const page of doc) {
  i++;
  if (PAGES_TO_RENDER.length && PAGES_TO_RENDER.includes(i)) {
    const out = path.join(OUT_DIR, `page-${String(i).padStart(3, '0')}.png`);
    fs.writeFileSync(out, page);
    console.log('wrote', out, page.length, 'bytes');
  }
  if (i >= MAX_PAGE) break;
}
console.log('done, total pages iterated:', i);
