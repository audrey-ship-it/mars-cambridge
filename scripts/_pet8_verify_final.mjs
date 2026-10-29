// 终验：注入后从站内 petListeningData.js 读数，核对 mock-1..8 transcript 存在性 + 解析引句 0 未命中
import { pathToFileURL } from 'node:url';

const { petListeningTests } = await import(pathToFileURL('d:/workspace_sunny/mars-cambridge/src/data/petListeningData.js'));
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9£]+/g, '');

function extractQuotes(explanation) {
  if (!explanation) return [];
  const out = [];
  const re = /"([^"]+)"|“([^”]+)”|「([^」]+)」/g;
  let m;
  while ((m = re.exec(explanation)) !== null) {
    const quoted = m[1] || m[2] || m[3] || '';
    for (const frag of quoted.split(/\s*(?:\.{3}|\/)\s*/)) {
      const f = frag.trim();
      if (f && /^[A-Za-z£0-9]/.test(f) && f.split(/\s+/).length >= 3) out.push(f);
    }
    for (const part of quoted.split(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]+|\s*(?:\.{3}|\/)\s*/)) {
      const p = part.trim();
      if (p && /^[A-Za-z£0-9]/.test(p) && p.split(/\s+/).length >= 3) out.push(p);
    }
  }
  for (const seg of explanation.replace(/"[^"]+"|“[^”]+”|「[^」]+」/g, '\n').split(/[^A-Za-z£0-9'’.,:!?\- ]+/)) {
    for (const piece of seg.split(/\s*\.{3,}\s*/)) {
      const s = piece.trim();
      if (s && /^[A-Za-z£0-9]/.test(s) && s.split(/\s+/).length >= 3) out.push(s);
    }
  }
  return out;
}

let fail = 0;
for (let n = 1; n <= 8; n++) {
  const id = `pet-mock-${n}-listening`;
  const test = petListeningTests.find((t) => t.meta?.id === id);
  if (!test) { console.log(`FAIL ${id} 未找到`); fail++; continue; }
  // 1) transcript 存在性：P1/P2 题级 + 整 Part 派生；P3/P4 整 Part
  for (const pn of ['1', '2']) {
    const items = test.parts[pn]?.items || [];
    items.forEach((it, i) => {
      if (typeof it.transcript !== 'string' || !it.transcript.trim()) {
        console.log(`FAIL ${id} P${pn} 第${i + 1}题 缺 transcript`);
        fail++;
      }
    });
    const pt = test.parts[pn]?.transcript;
    if (typeof pt !== 'string' || !pt.trim()) { console.log(`FAIL ${id} P${pn} 整 Part transcript 未派生`); fail++; }
  }
  for (const pn of ['3', '4']) {
    const pt = test.parts[pn]?.transcript;
    if (typeof pt !== 'string' || !pt.trim()) { console.log(`FAIL ${id} P${pn} 缺整 Part transcript`); fail++; }
  }
  // 2) 引句核对：P1/P2 题级对题级原文；P3/P4 对整 Part 原文
  let miss = 0;
  for (const pn of ['1', '2', '3', '4']) {
    const part = test.parts[pn] || {};
    const items = part.items || [];
    for (let qi = 0; qi < items.length; qi++) {
      const tr = pn === '1' || pn === '2' ? items[qi]?.transcript || '' : part.transcript || '';
      const ntr = norm(tr);
      for (const q of extractQuotes(items[qi].explanation)) {
        if (q.split(/\s+/).length >= 3 && !ntr.includes(norm(q))) {
          miss++;
          console.log(`  MISS ${id} P${pn}#${qi}: "${q}"`);
        }
      }
    }
  }
  if (miss) fail += miss;
  console.log(`${id}: 引句 MISS ${miss}`);
}
console.log(fail === 0 ? 'ALL PASS' : `共 ${fail} 处失败`);
process.exit(fail === 0 ? 0 : 1);
