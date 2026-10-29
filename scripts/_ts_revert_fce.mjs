import fs from 'node:fs';
const P = 'd:/workspace_sunny/mars-cambridge/src/data/fceStandardListeningTests.js';
const raw = fs.readFileSync(P, 'utf8');
const EOL = raw.includes('\r\n') ? '\r\n' : '\n';
const lines = raw.split(EOL);
const out = [];
let n6 = 0, n10 = 0, nHead = 0;
for (const line of lines) {
  if (/^ {6}transcript: "/.test(line)) { n6++; continue; }
  if (/^ {10}transcript: "/.test(line)) { n10++; continue; }
  if (/^\/\/ 听力原文（2026-10-27 逐字转录自官方 Tapescript/.test(line)) { nHead++; continue; }
  out.push(line);
}
console.log('removed: part-level(6sp)=' + n6 + ' item-level(10sp)=' + n10 + ' header=' + nHead);
if (n6 !== 16 || n10 !== 74 || nHead !== 2) { console.error('ABORT unexpected counts'); process.exit(1); }
fs.writeFileSync(P, out.join(EOL));
console.log('reverted, lines now:', out.length);

// 探测 10 空格缩进的字段名分布（确认 P3 题项 explanation 写法）
const names = {};
for (const l of out) {
  const m = l.match(/^ {10}([A-Za-z_]+):/);
  if (m) names[m[1]] = (names[m[1]] || 0) + 1;
}
console.log('10-space field names:', JSON.stringify(names));
// 探测 STD1_L1 P3 第一个题项附近原文
const s2 = fs.readFileSync(P, 'utf8').split(EOL);
const i0 = s2.findIndex(l => /^const STD1_L1 = \{/.test(l));
const iM = s2.findIndex((l, i) => i > i0 && /type: 'matching'/.test(l));
console.log('--- STD1_L1 P3 first item lines ---');
for (let i = iM; i < iM + 16; i++) console.log(String(i + 1).padStart(5) + '\t' + s2[i].slice(0, 120));
