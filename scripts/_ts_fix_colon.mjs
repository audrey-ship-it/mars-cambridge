// STD4 的 20 条「原文: "」半角冒号归一为全角「原文：」
import fs from 'node:fs';
const P = 'd:/workspace_sunny/mars-cambridge/src/data/fceStandardListeningTests.js';
let s = fs.readFileSync(P, 'utf8');
const m = s.match(/原文\s*:\s*\\"/g) || [];
console.log('ascii-colon matches:', m.length);
if (m.length !== 20) { console.log('ABORT unexpected count'); process.exit(1); }
s = s.replace(/原文\s*:\s*\\"/g, '原文：\\"');
fs.writeFileSync(P, s);
console.log('normalized to full-width colon');
