// KET：pdfjs-dist 尝试读取扫描版书签；Trainer2 听力原文提取每页首行文本定位 Test 边界
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

import { pathToFileURL } from 'node:url';
const require = createRequire(import.meta.url);
const pdfjsDir = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfjs = await import(pathToFileURL(path.join(pdfjsDir, 'legacy/build/pdf.mjs')).href);
const BaseCMap = path.join(pdfjsDir, 'cmaps').replace(/\\/g, '/') + '/';

const BASE = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）';
const BOOKS = {
  'sch-1': `${BASE}/3-KET青少版官方真题（共12套）含青少版3/KET青少版官方真题 1/KET青少版官方真题1.pdf`,
  'sch-2': `${BASE}/3-KET青少版官方真题（共12套）含青少版3/KET青少版官方真题 2/KET青少版真题 2.pdf`,
  'std-1': `${BASE}/4-KET标准版官方真题（共8套）/KET标准版1/A2 KET新题型官方真题 1.pdf`,
  'std-2': `${BASE}/4-KET标准版官方真题（共8套）/KET标准版2/A2 KET新题型官方真题 2.pdf`,
  'trainer1': `${BASE}/1-KET Trainer1（共6套）/【全册+音频】/Trainer《剑桥KET官方模考题精讲精练1》.pdf`,
  'trainer2-ts': `${BASE}/2-KET Trainer2（共6套）/2.Trainer2听力原文/Trainer2听力原文.pdf`,
};

const loadingTask = (file) => pdfjs.getDocument({ data: new Uint8Array(fs.readFileSync(file)), cMapUrl: BaseCMap, cMapPacked: true });
const flat = (nodes, depth, out) => { for (const n of nodes || []) { out.push(`${'  '.repeat(depth)}${n.title}`); flat(n.items, depth + 1, out); } };

for (const [name, file] of Object.entries(BOOKS)) {
  const doc = await loadingTask(file).promise;
  let ol = [];
  try { flat(await doc.getOutline(), 0, ol); } catch (e) { ol = [`<outline err ${e.message}>`]; }
  console.log(`== ${name} pages=${doc.numPages}`);
  if (ol.length) console.log(ol.slice(0, 80).join('\n'));
  else console.log('<no outline>');
  if (name === 'trainer2-ts') {
    for (let p = 1; p <= doc.numPages; p++) {
      const page = await doc.getPage(p);
      const tc = await page.getTextContent();
      const line = tc.items.map((i) => i.str).join(' ').replace(/\s+/g, ' ').trim().slice(0, 110);
      console.log(`p${String(p).padStart(2, '0')}: ${line}`);
    }
  }
}
