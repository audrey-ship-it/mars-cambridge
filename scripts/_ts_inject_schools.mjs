// 校园版1/2（8 套）听力 transcript + explanation 注入 fceSchoolsListeningTests.js
// 用法：node _ts_inject_schools.mjs [--verified]  （--verified 同时置 meta.verified=true 并更新 answerSource）
import fs from 'node:fs';
import path from 'node:path';
import { fceSchoolsListeningTests } from '../src/data/fceSchoolsListeningTests.js';

const OUT = 'd:/workspace_sunny/mars-cambridge/scripts/_ts_out';
const DATA_FILE = 'd:/workspace_sunny/mars-cambridge/src/data/fceSchoolsListeningTests.js';
const SET_VERIFIED = process.argv.includes('--verified');

const ANSWER_SOURCE = {
  'fce-schools-1-test1-listening': '书121 Key（Test 1 Key and transcript，官方）',
  'fce-schools-1-test2-listening': '书133 Key（Test 2 Key and transcript，官方）',
  'fce-schools-1-test3-listening': '书145 Key（Test 3 Key and transcript，官方）',
  'fce-schools-1-test4-listening': '书156 Key（Test 4 Key and transcript，官方）',
  'fce-schools-2-test1-listening': '书120 Key（Test 5 Key and transcript，官方）',
  'fce-schools-2-test2-listening': '书132 Key（Test 6 Key and transcript，官方）',
  'fce-schools-2-test3-listening': '书144 Key（Test 7 Key and transcript，官方）',
  'fce-schools-2-test4-listening': '书156 Key（Test 8 Key and transcript，官方）',
  'fce-schools-3-test1-listening': '书120 Key and transcript（Test 1，官方）',
  'fce-schools-3-test2-listening': '书132 Key and transcript（Test 2，官方）',
  'fce-schools-3-test3-listening': '书145 Listening Key（Test 3，官方）',
  'fce-schools-3-test4-listening': '书157 Listening Key（Test 4，官方）',
  'fce-schools-4-test1-listening': '书110 Listening Key（Test 1，官方）',
  'fce-schools-4-test2-listening': '书122 Listening Key（Test 2，官方）',
  'fce-schools-4-test3-listening': '书134 Listening Key（Test 3，官方）',
  'fce-schools-4-test4-listening': '书146 Listening Key（Test 4，官方）',
};

const JOBS = [
  { book: 1, test: 1, skip: true }, { book: 1, test: 2, skip: true }, { book: 1, test: 3, skip: true }, { book: 1, test: 4, skip: true },
  { book: 2, test: 1, skip: true }, { book: 2, test: 2, skip: true }, { book: 2, test: 3, skip: true }, { book: 2, test: 4, skip: true },
  { book: 3, test: 1 }, { book: 3, test: 2 }, { book: 3, test: 3 }, { book: 3, test: 4 },
  { book: 4, test: 1 }, { book: 4, test: 2 }, { book: 4, test: 3 }, { book: 4, test: 4 },
];

let injected = 0;
const problems = [];

for (const { book, test, skip } of JOBS) {
  const examId = `fce-schools-${book}-test${test}-listening`;
  if (skip) { console.log(`跳过 ${examId}（已注入，转录 JSON 已清理）`); continue; }
  const set = fceSchoolsListeningTests.find((s) => s.examId === examId);
  if (!set) { problems.push(`${examId}: 数据中找不到`); continue; }

  const tsFile = path.join(OUT, `fce-schools${book}-t${test}.json`);
  const expFile = path.join(OUT, `fce-schools${book}-t${test}-exp.json`);
  if (!fs.existsSync(tsFile) || !fs.existsSync(expFile)) { problems.push(`${examId}: 缺 ${path.basename(tsFile)} / ${path.basename(expFile)}`); continue; }
  const ts = JSON.parse(fs.readFileSync(tsFile, 'utf8'));
  const exp = JSON.parse(fs.readFileSync(expFile, 'utf8'));

  const p1 = set.parts['1'], p2 = set.parts['2'], p3 = set.parts['3'], p4 = set.parts['4'];
  // P1：逐题 transcript=Part 全文 + explanation
  (p1.items || []).forEach((it, i) => {
    it.transcript = ts.parts['1'].full;
    const e = exp[`p1q${i + 1}`];
    if (!e) problems.push(`${examId} P1 Q${i + 1}: 缺解析`);
    it.explanation = e || it.explanation;
  });
  // P2：Part 级 transcript
  p2.transcript = ts.parts['2'];
  // P3：逐题
  (p3.items || []).forEach((it, i) => {
    it.transcript = ts.parts['3'].full;
    const e = exp[`p3q${i + 1}`];
    if (!e) problems.push(`${examId} P3 Q${i + 1}: 缺解析`);
    it.explanation = e || it.explanation;
  });
  // P4：Part 级 transcript + 逐题解析
  p4.transcript = ts.parts['4'];
  (p4.items || []).forEach((it, i) => {
    const e = exp[`p4q${i + 1}`];
    if (!e) problems.push(`${examId} P4 Q${i + 1}: 缺解析`);
    it.explanation = e || it.explanation;
  });

  if (SET_VERIFIED) {
    set.meta.verified = true;
    if (ANSWER_SOURCE[examId]) set.meta.answerSource = ANSWER_SOURCE[examId];
  }
  injected += 1;
  console.log(`OK ${examId}: P1 items=${p1.items.length} P2 ts=${(p2.transcript || '').length}字 P3 items=${p3.items.length} P4 ts=${(p4.transcript || '').length}字`);
}

if (problems.length) {
  console.error('\n== 存在问题，中止写盘 ==');
  problems.forEach((p) => console.error('  ' + p));
  process.exit(1);
}

// 重建数据文件：保留 export 前的文件头注释
const raw = fs.readFileSync(DATA_FILE, 'utf8');
const idx = raw.indexOf('export const');
const header = idx > 0 ? raw.slice(0, idx) : '';
const next = `${header}export const fceSchoolsListeningTests = ${JSON.stringify(fceSchoolsListeningTests, null, 2)};\n`;
fs.writeFileSync(DATA_FILE, next);
console.log(`\n已写盘 ${DATA_FILE}（${(next.length / 1024).toFixed(0)} KB），注入 ${injected}/8 套${SET_VERIFIED ? '，verified=true' : '（verified 未置位）'}`);
