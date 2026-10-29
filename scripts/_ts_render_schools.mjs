// 渲染 FCE 校园版 PDF 为 PNG（供转录子代理逐字转录）
// 用法：node _ts_render_schools.mjs <bookNo>
// book 1: 校园版1\校园1\Cambridge First Certificate English Tests for schools 1.PDF
// book 2: 校园版2\Cambridge First for Schools 2 FCE 校园版真题2.pdf
import { pdf } from 'pdf-to-img';
import fs from 'node:fs';
import path from 'node:path';

const BOOKS = {
  1: 'd:/workspace_sunny/题库/FCE/1.真题/校园版1/校园1/Cambridge First Certificate English Tests for schools 1.PDF',
  2: 'd:/workspace_sunny/题库/FCE/1.真题/校园版2/Cambridge First for Schools 2 FCE 校园版真题2.pdf',
};

const bookNo = process.argv[2];
const src = BOOKS[bookNo];
if (!src || !fs.existsSync(src)) { console.error('BAD book arg or file missing:', bookNo, src); process.exit(1); }

const outDir = `d:/workspace_sunny/mars-cambridge/scripts/_ts_out/_schools${bookNo}_pages`;
fs.mkdirSync(outDir, { recursive: true });

let i = 0;
const doc = await pdf(src, { scale: 2 });
for await (const page of doc) {
  i += 1;
  const f = path.join(outDir, `p${String(i).padStart(3, '0')}.png`);
  fs.writeFileSync(f, page);
}
console.log(`book ${bookNo}: rendered ${i} pages -> ${outDir}`);
