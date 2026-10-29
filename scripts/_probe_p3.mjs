import fs from 'node:fs';
const P = 'd:/workspace_sunny/mars-cambridge/src/data/fceStandardListeningTests.js';
const raw = fs.readFileSync(P, 'utf8');
const EOL = raw.includes('\r\n') ? '\r\n' : '\n';
const lines = raw.split(EOL);

// 1) 单行式正则全文件命中数
let nSingle = 0;
for (const l of lines) if (/^ {10}\{ .*\bexplanation: .*\},\s*$/.test(l)) nSingle++;
console.log('single-line regex matches:', nSingle);

// 2) STD1_L1 P3 区域前 12 行的 JSON 字节形态
const i0 = lines.findIndex(l => /^const STD1_L1 = \{/.test(l));
const iP3 = lines.findIndex((l, i) => i > i0 && /^ {4}3: \{/.test(l));
console.log('STD1_L1 starts at line', i0 + 1, '| P3 key at line', iP3 + 1);
for (let j = iP3; j < iP3 + 14; j++) {
  console.log(String(j + 1).padStart(5), JSON.stringify(lines[j].slice(0, 110)));
}
