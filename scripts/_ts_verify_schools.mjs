// 校园版 8 套听力注入结果校验：
// 1) transcript/解析齐备  2) 解析引句命中 transcript（0 未命中目标）  3) 数据答案 vs 官方 Key 答案逐题比对
import fs from 'node:fs';
import path from 'node:path';
import { fceSchoolsListeningTests } from '../src/data/fceSchoolsListeningTests.js';

const OUT = 'd:/workspace_sunny/mars-cambridge/scripts/_ts_out';
const JOBS = [
  { book: 1, test: 1 }, { book: 1, test: 2 }, { book: 1, test: 3 }, { book: 1, test: 4 },
  { book: 2, test: 1 }, { book: 2, test: 2 }, { book: 2, test: 3 }, { book: 2, test: 4 },
  { book: 3, test: 1 }, { book: 3, test: 2 }, { book: 3, test: 3 }, { book: 3, test: 4 },
  { book: 4, test: 1 }, { book: 4, test: 2 }, { book: 4, test: 3 }, { book: 4, test: 4 },
];
const letter = (n) => String.fromCharCode(65 + n);
const norm = (s) => String(s || '').toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.。]+$/, '');
// 把官方记法的可选括号展开为全部可接受形式："((a) good) imagination" → [a good imagination / good imagination / imagination]
const expandBrackets = (s) => {
  let forms = [s];
  for (let g = 0; g < 10; g += 1) {
    const f = forms.find((x) => /\([^()]*\)/.test(x));
    if (!f) break;
    const m = f.match(/^(.*?)\(([^()]*)\)(.*)$/);
    forms = forms.flatMap((x) => (x === f ? [(m[1] + m[2] + m[3]).replace(/\s+/g, ' ').trim(), (m[1] + m[3]).replace(/\s+/g, ' ').trim()] : [x]));
  }
  return forms;
};
const quotesOf = (exp) => {
  const out = [];
  const re = /"([^"]+)"/g;
  let m;
  while ((m = re.exec(exp || '')) !== null) { if (/^[A-Za-z]/.test(m[1])) out.push(m[1]); }
  return out;
};

let totalMiss = 0;
let totalMismatch = 0;

for (const { book, test } of JOBS) {
  const examId = `fce-schools-${book}-test${test}-listening`;
  const set = fceSchoolsListeningTests.find((s) => s.examId === examId);
  if (!set) { console.log(`${examId}: 数据缺失`); totalMismatch += 1; continue; }
  const tsFile = path.join(OUT, `fce-schools${book}-t${test}.json`);
  const expFile = path.join(OUT, `fce-schools${book}-t${test}-exp.json`);
  if (!fs.existsSync(tsFile) || !fs.existsSync(expFile)) { console.log(`${examId}: 转录文件未齐，跳过`); continue; }
  const ts = JSON.parse(fs.readFileSync(tsFile, 'utf8'));
  const p1 = set.parts['1'], p2 = set.parts['2'], p3 = set.parts['3'], p4 = set.parts['4'];
  const rows = [];

  // 1) transcript 齐备
  const tsOk = !!(p2.transcript && p4.transcript && p1.items.every((i) => i.transcript) && p3.items.every((i) => i.transcript));
  rows.push(`transcript=${tsOk ? 'OK' : 'MISSING'}`);

  // 2) 引句命中（P1/P3 按题级 transcript；P4 按 Part 级）
  let miss = 0;
  p1.items.forEach((it, i) => { for (const q of quotesOf(it.explanation)) if (!it.transcript.includes(q)) { miss += 1; console.log(`  ${examId} P1Q${i + 1} 未命中: ${q.slice(0, 60)}...`); } });
  p3.items.forEach((it, i) => { for (const q of quotesOf(it.explanation)) if (!it.transcript.includes(q)) { miss += 1; console.log(`  ${examId} P3Q${i + 1} 未命中: ${q.slice(0, 60)}...`); } });
  p4.items.forEach((it, i) => { for (const q of quotesOf(it.explanation)) if (!p4.transcript.includes(q)) { miss += 1; console.log(`  ${examId} P4Q${i + 1} 未命中: ${q.slice(0, 60)}...`); } });
  totalMiss += miss;
  rows.push(`引句未命中=${miss}`);

  // 3) 答案比对
  const off = ts.officialAnswers || {};
  const mm = [];
  (p1.items || []).forEach((it, i) => { const o = (off.p1 || [])[i]; if (o && letter(it.answer) !== o) mm.push(`P1Q${i + 1} 数据${letter(it.answer)}≠官方${o}`); });
  (p3.items || []).forEach((it, i) => { const o = (off.p3 || [])[i]; if (o && String(it.answer).toUpperCase() !== o) mm.push(`P3Q${i + 1} 数据${it.answer}≠官方${o}`); });
  (p4.items || []).forEach((it, i) => { const o = (off.p4 || [])[i]; if (o && letter(it.answer) !== o) mm.push(`P4Q${i + 1} 数据${letter(it.answer)}≠官方${o}`); });
  (p2.items || []).forEach((it, i) => {
    const o = (off.p2 || [])[i];
    if (!o) return;
    const dataAlts = (Array.isArray(it.answer) ? it.answer : [it.answer]).map(norm);
    const offAlts = expandBrackets(o).flatMap((f) => f.split(/\s*\/\s*|\s+OR\s+/i)).flatMap(expandBrackets).map(norm).filter(Boolean);
    const hit = dataAlts.some((d) => offAlts.some((f) => f === d || d.includes(f) || f.includes(d)));
    if (!hit) mm.push(`P2Q${i + 9} 数据[${dataAlts.join('|')}]≠官方${o}`);
  });
  totalMismatch += mm.length;

  const counts = `计数 ${p1.items.length}/${p2.items.length}/${p3.items.length}/${p4.items.length}`;
  console.log(`${examId}: ${rows.join('，')}，${counts}${mm.length ? '\n    答案不一致: ' + mm.join('；') : '，答案全对'}`);
}

console.log(`\nTOTAL 引句未命中=${totalMiss}，答案不一致=${totalMismatch}`);
if (totalMiss === 0 && totalMismatch === 0) console.log('ALL GREEN');
