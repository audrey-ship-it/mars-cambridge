// 引句预核对 + 全段导出（人工审读用）
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const extracted = JSON.parse(fs.readFileSync('scripts/_pet8_out/extracted-v5.json', 'utf8'));
const { petListeningTests } = await import(pathToFileURL('d:/workspace_sunny/mars-cambridge/src/data/petListeningData.js'));
const L = ['A', 'B', 'C'];
const mocks = {};
for (const t of petListeningTests) {
  const m = t.meta?.id?.match(/pet-mock-(\d+)/);
  if (m && Number(m[1]) <= 8) mocks[Number(m[1])] = t;
}
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

let out = '';
let missTotal = 0;
for (let n = 1; n <= 8; n++) {
  const test = mocks[n];
  const id = test.meta.id;
  const d = extracted[id];
  out += `\n${'='.repeat(70)}\n# ${id}\n${'='.repeat(70)}\n`;
  // P1/P2 题级
  for (const pn of ['1', '2']) {
    const items = test.parts[pn].items;
    const trans = d[`p${pn}Items`];
    items.forEach((it, qi) => {
      const tr = trans[qi] || '';
      out += `\n--- P${pn} Q${Number(pn) === 1 ? qi + 1 : qi + 8} | 站内答案 ${L[it.answer]} ---\n${tr || '(NULL)'}\n`;
      const quotes = extractQuotes(it.explanation).filter((q) => q.split(/\s+/).length >= 3);
      const ntr = norm(tr);
      for (const q of quotes) {
        if (!ntr.includes(norm(q))) {
          missTotal++;
          out += `  @@MISS P${pn}Q${Number(pn) === 1 ? qi + 1 : qi + 8}: "${q}"\n`;
        }
      }
    });
  }
  // P3/P4 Part 级
  for (const pn of ['3', '4']) {
    const items = test.parts[pn].items;
    const tr = d[`p${pn}Part`] || '';
    out += `\n--- P${pn} Part 级 (答案: ${items.map((it) => (pn === '3' ? (Array.isArray(it.answer) ? it.answer[0] : it.answer) : L[it.answer])).join(' ')}) ---\n${tr || '(NULL)'}\n`;
    const ntr = norm(tr);
    items.forEach((it, qi) => {
      const quotes = extractQuotes(it.explanation).filter((q) => q.split(/\s+/).length >= 3);
      for (const q of quotes) {
        if (!ntr.includes(norm(q))) {
          missTotal++;
          out += `  @@MISS P${pn}Q${pn === '3' ? 14 + qi : 20 + qi}: "${q}"\n`;
        }
      }
    });
  }
}
fs.writeFileSync('scripts/_pet8_out/transcripts-v7.txt', out);
console.log(`transcripts-v7.txt 已导出，引句 MISS 总数: ${missTotal}`);
