// FCE mock 8 套听力 transcript + 解析注入 fceListeningTests.js
// 用法：node _ts_inject_mock.mjs [--check]  （--check 只校验答案一致性不写盘）
import fs from 'node:fs';
import { fceListeningTests } from '../src/data/fceListeningTests.js';

const OUT = 'd:/workspace_sunny/mars-cambridge/scripts/_ts_out';
const DATA_FILE = 'd:/workspace_sunny/mars-cambridge/src/data/fceListeningTests.js';
const CHECK_ONLY = process.argv.includes('--check');

const letter = (n) => String.fromCharCode(65 + n);
const norm = (s) => String(s || '').toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.。]+$/, '');
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

let totalMismatch = 0;
const problems = [];

fceListeningTests.forEach((set, idx) => {
  const n = idx + 1;
  const tsFile = `${OUT}/fce-mock-t${n}.json`;
  if (!fs.existsSync(tsFile)) { problems.push(`t${n}: 缺 ${tsFile}`); return; }
  const ts = JSON.parse(fs.readFileSync(tsFile, 'utf8'));
  const p = set.parts;
  const off = ts.officialAnswers || {};
  const mm = [];

  // 答案比对
  (p['1'].items || []).forEach((it, i) => { const o = (off.p1 || [])[i]; if (o && letter(it.answer) !== o) mm.push(`P1Q${i + 1} 数据${letter(it.answer)}≠官方${o}`); });
  (p['3'].items || []).forEach((it, i) => { const o = (off.p3 || [])[i]; if (o && String(it.answer).toUpperCase() !== o) mm.push(`P3Q${i + 1} 数据${it.answer}≠官方${o}`); });
  (p['4'].items || []).forEach((it, i) => { const o = (off.p4 || [])[i]; if (o && letter(it.answer) !== o) mm.push(`P4Q${i + 1} 数据${letter(it.answer)}≠官方${o}`); });
  (p['2'].items || []).forEach((it, i) => {
    const o = (off.p2 || [])[i];
    if (!o) return;
    const dataAlts = (Array.isArray(it.answer) ? it.answer : [it.answer]).map(norm);
    const offAlts = expandBrackets(o).flatMap((f) => f.split(/\s*\/\s*|\s+OR\s+/i)).flatMap(expandBrackets).map(norm).filter(Boolean);
    const hit = dataAlts.some((d) => offAlts.some((f) => f === d || d.includes(f) || f.includes(d)));
    if (!hit) mm.push(`P2Q${i + 9} 数据[${dataAlts.join('|')}]≠官方${o}`);
  });
  totalMismatch += mm.length;
  if (mm.length) console.log(`fce-mock-${n}-listening 答案不一致:\n  ${mm.join('\n  ')}`);
  else console.log(`fce-mock-${n}-listening: 答案全对`);

  if (CHECK_ONLY) return;

  // 注入 transcript（全量覆盖，与转录同源）
  (p['1'].items || []).forEach((it, i) => {
    const t = (ts.parts['1'].items || []).find((x) => Number(x.q) === i + 1);
    if (!t || !t.full) { problems.push(`t${n} P1Q${i + 1}: 转录缺 full`); return; }
    it.transcript = t.full;
  });
  if (!ts.parts['2']) problems.push(`t${n}: 转录缺 P2`);
  else p['2'].transcript = ts.parts['2'];
  (p['3'].items || []).forEach((it, i) => {
    const t = (ts.parts['3'].items || []).find((x) => Number(x.speaker) === i + 1);
    if (!t || !t.full) { problems.push(`t${n} P3#${i + 1}: 转录缺 full`); return; }
    it.transcript = t.full;
  });
  if (!ts.parts['4']) problems.push(`t${n}: 转录缺 P4`);
  else p['4'].transcript = ts.parts['4'];

  // 注入修正后的解析
  const exp = ts.explanations || {};
  (p['1'].items || []).forEach((it, i) => { const e = exp[`p1q${i + 1}`]; if (!e) problems.push(`t${n}: 缺解析 p1q${i + 1}`); else it.explanation = e; });
  (p['2'].items || []).forEach((it, i) => { const e = exp[`p2q${i + 1}`]; if (!e) problems.push(`t${n}: 缺解析 p2q${i + 1}`); else it.explanation = e; });
  (p['3'].items || []).forEach((it, i) => { const e = exp[`p3q${i + 1}`]; if (!e) problems.push(`t${n}: 缺解析 p3q${i + 1}`); else it.explanation = e; });
  (p['4'].items || []).forEach((it, i) => { const e = exp[`p4q${i + 1}`]; if (!e) problems.push(`t${n}: 缺解析 p4q${i + 1}`); else it.explanation = e; });

  // meta.answerSource 更新为实测页码（PDF = 书 + 6）
  const pages = String(ts.listeningPdfPages || '');
  const m = pages.match(/(\d+)\D+(\d+)/);
  if (m) set.meta.answerSource = `Answer Key and Transcripts（书 ${Number(m[1]) - 6}-${Number(m[2]) - 6} 页 / PDF ${pages}，官方）`;
});

if (problems.length) {
  console.error('\n== 存在问题，中止 ==');
  problems.forEach((x) => console.error('  ' + x));
  process.exit(1);
}
if (CHECK_ONLY) { console.log(`\nCHECK 完成，答案不一致=${totalMismatch}`); process.exit(totalMismatch ? 2 : 0); }

// 写盘：保留文件头注释
const raw = fs.readFileSync(DATA_FILE, 'utf8');
const idx2 = raw.indexOf('export const');
const header = idx2 > 0 ? raw.slice(0, idx2) : '';
const next = `${header}export const fceListeningTests = ${JSON.stringify(fceListeningTests, null, 2)};\n`;
fs.writeFileSync(DATA_FILE, next);
console.log(`\n已写盘 ${DATA_FILE}（${(next.length / 1024).toFixed(0)} KB），注入 8 套`);
