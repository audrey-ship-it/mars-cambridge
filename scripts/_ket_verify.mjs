// KET 官方 32 套听力 enrich 校验：
// 1) 每套每个存在数据的 Part transcript 齐全；2) 解析齐全且英文引句能在 transcript 命中（0 未命中）；
// 3) enrich 后答案与官方 Key 一致；4) 汇总子代理 conflicts/uncertain。
// 用法：node scripts/_ket_verify.mjs
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const ROOT = 'd:/workspace_sunny/mars-cambridge';
const OUT = `${ROOT}/scripts/_ket_out`;
const OFFICIAL_DATA = JSON.parse(fs.readFileSync(`${OUT}/official-data.json`, 'utf8'));

const { KET_OFFICIAL_LISTENING_ENRICH, applyKetOfficialEnrich } = await import(pathToFileURL(`${ROOT}/src/data/ketOfficialListeningTranscripts.js`));

// 与 src/utils/transcriptHighlight.jsx 完全同款的引句提取
function extractQuotes(explanation) {
  if (!explanation) return [];
  const out = [];
  const re = /"([^"]+)"|“([^”]+)”|「([^」]+)」/g;
  let m;
  while ((m = re.exec(explanation)) !== null) {
    const quoted = m[1] || m[2] || m[3] || '';
    for (const frag of quoted.split(/\s*(?:\.{3}|\/)\s*/)) {
      const f = frag.trim();
      if (f && /^[A-Za-z£]/.test(f) && f.split(/\s+/).length >= 3) out.push(f);
    }
    for (const part of quoted.split(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]+/)) {
      const p = part.trim();
      if (p && /^[A-Za-z£]/.test(p) && p.split(/\s+/).length >= 3) out.push(p);
    }
  }
  for (const seg of explanation.split(/[^A-Za-z£0-9'’.,:!?\- ]+/)) {
    const s = seg.trim();
    if (s && /^[A-Za-z£]/.test(s) && s.split(/\s+/).length >= 4) out.push(s);
  }
  return out;
}

const normTextOf = (t) => String(t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9£]+/g, '');
const letter = (idx) => String.fromCharCode(65 + Number(idx));

let totalMisses = 0;
let totalMismatch = 0;
let totalMissingExp = 0;
const lines = [];

for (let id = 1; id <= 32; id++) {
  const entry = KET_OFFICIAL_LISTENING_ENRICH[String(id)];
  if (!entry) { lines.push(`set${id}: enrich 缺失`); totalMisses += 1; continue; }
  const src = entry.source ? `${entry.source.pages || ''}` : '';
  const perPart = [];
  for (let p = 1; p <= 5; p++) {
    const basePart = OFFICIAL_DATA[String(id)]?.[String(p)] ?? null;
    const hasData = !!(basePart && (basePart.items?.length || (Array.isArray(basePart) && basePart.length)));
    if (!hasData) {
      if (entry.parts[String(p)]) perPart.push(`P${p}:无站内数据但有转录?`);
      continue;
    }
    if (!entry.parts[String(p)]) { perPart.push(`P${p}:缺transcript`); totalMisses += 1; continue; }
    const merged = applyKetOfficialEnrich(String(p), { [String(id)]: Array.isArray(basePart) ? { items: basePart } : basePart });
    const part = merged[String(id)];
    const normText = normTextOf(part.transcript);
    const mm = [];
    const misses = [];
    part.items.forEach((it, i) => {
      const q = `P${p}Q${i + 1}`;
      if (!it.explanation) { mm.push(`${q}缺解析`); totalMissingExp += 1; }
      for (const quote of extractQuotes(it.explanation)) {
        if (!normText.includes(normTextOf(quote))) {
          const nq = normTextOf(quote);
          const optNorms = (it.opts || part.options || []).map((o) => normTextOf(o)).filter(Boolean);
          const isOptRef = optNorms.some((o) => o && (o === nq || nq.includes(o) || o.includes(nq)));
          if (!isOptRef) misses.push(`${q}:"${quote.slice(0, 48)}"`);
        }
      }
      const off = (entry.officialAnswers?.[`p${p}`] || [])[i];
      if (off == null) { mm.push(`${q}缺官方答案`); return; }
      if (p === 2) {
        const variants = Array.isArray(it.answer) ? it.answer : [it.answer];
        const norm = (s) => String(s ?? '').toLowerCase().replace(/[£,\s-]/g, '');
        if (!variants.some((v) => norm(v) === norm(off))) mm.push(`${q}答案[${variants.join('|')}]≠官方"${off}"`);
      } else if (letter(it.answer) !== String(off).toUpperCase()) {
        mm.push(`${q}答案${letter(it.answer)}≠官方${String(off).toUpperCase()}`);
      }
    });
    const itemTranscriptOk = (p === 1 || p === 3) ? part.items.every((it) => it.transcript === part.transcript) : true;
    if (!itemTranscriptOk) mm.push(`P${p} item 级 transcript 缺失`);
    totalMismatch += mm.length;
    totalMisses += misses.length;
    perPart.push(`P${p}:${misses.length}未命中${misses.length ? ' ' + misses.slice(0, 3).join(' ') : ''}${mm.length ? ' | ' + mm.join(', ') : ''}`);
  }
  const conflict = entry.conflicts?.length ? ` ⚠conflicts:${entry.conflicts.join('; ')}` : '';
  const uncertain = entry.uncertain?.length ? ` ?uncertain:${entry.uncertain.length}` : '';
  lines.push(`set${id}${src ? ` (${src})` : ''} ${perPart.join(' ')}${conflict}${uncertain}`);
}

console.log(lines.join('\n'));
console.log(`\n== 汇总：引句未命中 ${totalMisses}，答案不一致 ${totalMismatch}，缺解析 ${totalMissingExp} ==`);
process.exit(totalMisses || totalMismatch ? 2 : 0);
