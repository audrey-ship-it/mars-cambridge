// FCE mock 8 套听力 transcript 校验：齐备 + 解析引句命中
import { fceListeningTests } from '../src/data/fceListeningTests.js';

let totalMiss = 0;
const quotesOf = (exp) => {
  const out = [];
  const re = /"([^"]+)"/g;
  let m;
  while ((m = re.exec(exp || '')) !== null) { if (/^[A-Za-z£0-9]/.test(m[1])) out.push(m[1]); }
  return out;
};

fceListeningTests.forEach((s) => {
  const p = s.parts;
  const miss = [];
  (p['1'].items || []).forEach((it, i) => {
    if (!it.transcript) miss.push(`P1Q${i + 1} 无原文`);
    for (const q of quotesOf(it.explanation)) if (!String(it.transcript || '').includes(q)) miss.push(`P1Q${i + 1} 未命中: ${q.slice(0, 50)}`);
  });
  const p2 = p['2'];
  if (!p2.transcript) miss.push('P2 无原文');
  else (p2.items || []).forEach((it, i) => { for (const q of quotesOf(it.explanation)) if (!String(p2.transcript).includes(q)) miss.push(`P2Q${i + 10} 未命中: ${q.slice(0, 50)}`); });
  const p3 = p['3'];
  (p3.items || []).forEach((it, i) => {
    const ts = it.transcript || p3.transcript;
    if (!ts) miss.push(`P3#${i + 1}(${it.speaker}) 无原文`);
    for (const q of quotesOf(it.explanation)) if (!String(ts || '').includes(q)) miss.push(`P3#${i + 1}(${it.speaker}) 未命中: ${q.slice(0, 50)}`);
  });
  const p4 = p['4'];
  if (!p4.transcript) miss.push('P4 无原文');
  else (p4.items || []).forEach((it, i) => { for (const q of quotesOf(it.explanation)) if (!String(p4.transcript).includes(q)) miss.push(`P4Q${i + 21} 未命中: ${q.slice(0, 50)}`); });
  totalMiss += miss.length;
  console.log(`${s.meta.id}: ${miss.length ? '\n  ' + miss.join('\n  ') : 'OK'}`);
});
console.log(`\nTOTAL 引句未命中/缺原文=${totalMiss}`);
if (totalMiss === 0) console.log('ALL GREEN');
