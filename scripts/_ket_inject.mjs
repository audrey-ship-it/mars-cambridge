// KET 官方 32 套听力：transcript + 解析 + 官方答案修正注入
// 生成 src/data/ketOfficialListeningTranscripts.js（enrich 层）并接线 CambridgeListening.jsx
// 用法：node scripts/_ket_inject.mjs [--check]   （--check 只做结构校验与答案比对，不写盘）
import fs from 'node:fs';

const ROOT = 'd:/workspace_sunny/mars-cambridge';
const OUT = `${ROOT}/scripts/_ket_out`;
const DATA_OUT = `${ROOT}/src/data/ketOfficialListeningTranscripts.js`;
const JSX = `${ROOT}/src/pages/CambridgeListening.jsx`;
const CHECK_ONLY = process.argv.includes('--check');

const normAns = (s) => String(s ?? '').toLowerCase().replace(/[£,\s-]/g, '');
const letter = (idx) => String.fromCharCode(65 + Number(idx));
const OFFICIAL_DATA = JSON.parse(fs.readFileSync(`${OUT}/official-data.json`, 'utf8'));

// ---------- 1. 读取 32 套子代理产出 ----------
const sets = [];
for (let id = 1; id <= 32; id++) {
  const f = `${OUT}/ket-set-${String(id).padStart(2, '0')}.json`;
  if (!fs.existsSync(f)) { console.error(`缺 ${f}`); process.exit(1); }
  sets.push(JSON.parse(fs.readFileSync(f, 'utf8')));
}

// ---------- 2. 结构校验 + 构建 enrich ----------
const problems = [];
const warnings = [];
const corrections = [];
const enrich = {};

for (const ts of sets) {
  const id = Number(ts.setId);
  if (!id || id < 1 || id > 32) { problems.push(`setId 非法: ${ts.setId}`); continue; }
  const base = OFFICIAL_DATA[id];
  const entry = { source: ts.source, parts: {}, explanations: ts.explanations || {}, officialAnswers: {} };
  if (ts.uncertain?.length) entry.uncertain = ts.uncertain;
  if (ts.conflicts?.length) entry.conflicts = ts.conflicts;

  for (let p = 1; p <= 5; p++) {
    const partData = base?.[String(p)] ?? null;
    const hasData = !!(partData && (partData.items?.length || (Array.isArray(partData) && partData.length)));
    const transcript = ts.parts?.[String(p)];
    const off = ts.officialAnswers?.[`p${p}`];

    if (hasData) {
      if (!transcript || typeof transcript !== 'string' || transcript.length < 40) {
        problems.push(`set${id} P${p}: transcript 缺失或过短`);
        continue;
      }
      entry.parts[String(p)] = transcript;
    } else if (transcript) {
      problems.push(`set${id} P${p}: 站内无此 Part 数据但子代理给了 transcript`);
    }

    if (!hasData) {
      if (off != null) entry.officialAnswers[`p${p}`] = off;
      continue;
    }

    const items = Array.isArray(partData) ? partData : partData.items;
    // officialAnswers 长度校验
    if (!Array.isArray(off) || off.length !== items.length) {
      problems.push(`set${id} P${p}: officialAnswers 长度 ${off?.length} ≠ 题数 ${items.length}`);
      continue;
    }
    entry.officialAnswers[`p${p}`] = off;

    // 解析齐全性
    items.forEach((it, i) => {
      if (!entry.explanations[`p${p}q${i + 1}`]) {
        warnings.push(`set${id} P${p}Q${i + 1}: 缺解析 p${p}q${i + 1}（保留站内原解析）`);
      }
    });

    // 答案比对（--check 与写盘前都要报告）
    items.forEach((it, i) => {
      const o = off[i];
      if (o == null) return;
      if (p === 2) {
        const variants = Array.isArray(it.answer) ? it.answer : [it.answer];
        if (!variants.some((v) => normAns(v) === normAns(o))) {
          corrections.push(`set${id} P2Q${i + 1}: 数据[${variants.join('|')}] 增补官方 "${o}"`);
        }
      } else if (letter(it.answer) !== String(o).toUpperCase()) {
        corrections.push(`set${id} P${p}Q${i + 1}: 数据${letter(it.answer)} → 官方${String(o).toUpperCase()}`);
      }
    });
  }
  enrich[String(id)] = entry;
}

// ---------- 3. 答案比对报告 ----------
if (warnings.length) {
  console.log(`解析缺失 ${warnings.length} 条（不中止）：`);
  warnings.forEach((x) => console.log('  ' + x));
}
if (problems.length) {
  console.error('== 结构问题，中止 ==');
  problems.forEach((x) => console.error('  ' + x));
  process.exit(1);
}
console.log(`答案与站内不一致 ${corrections.length} 处（enrich 层按官方 Key 运行时修正）：`);
corrections.forEach((x) => console.log('  ' + x));

if (CHECK_ONLY) { console.log('\nCHECK 完成'); process.exit(0); }

// ---------- 4. 生成数据文件 ----------
const file = `// KET 官方 1-32 套听力 enrich 层：官方录音稿逐字转录 + 逐题中文解析 + 官方 Key 答案修正。
// 由 scripts/_ket_inject.mjs 从子代理转录 JSON 生成，勿手改。Booster 33-35 不在本层。
export const KET_OFFICIAL_LISTENING_ENRICH = ${JSON.stringify(enrich, null, 2)};

const letterIndex = (value) => {
  const code = String(value).toUpperCase().charCodeAt(0) - 65;
  return code >= 0 && code < 26 ? code : null;
};

const normAnswer = (value) => String(value ?? '').toLowerCase().replace(/[£,\\s-]/g, '');

// 将官方转录/解析/答案合并进 Part 数据（partNo 1-5，merged 为 {...OFFICIAL, ...BOOSTER} 合并对象）
export function applyKetOfficialEnrich(partNo, merged) {
  for (const [setId, entry] of Object.entries(KET_OFFICIAL_LISTENING_ENRICH)) {
    const raw = merged[setId];
    const transcript = entry.parts?.[partNo];
    if (!raw || !transcript) continue;
    const official = entry.officialAnswers?.[\`p\${partNo}\`] || [];
    const itemTranscript = Number(partNo) === 1 || Number(partNo) === 3 ? transcript : undefined;
    const enrichItem = (item, index) => {
      const next = itemTranscript ? { ...item, transcript: itemTranscript } : { ...item };
      const explanation = entry.explanations?.[\`p\${partNo}q\${index + 1}\`];
      if (explanation) next.explanation = explanation;
      const answer = official[index];
      if (answer != null) {
        if (Number(partNo) === 2) {
          const variants = Array.isArray(next.answer) ? next.answer : [next.answer];
          if (!variants.some((v) => normAnswer(v) === normAnswer(answer))) next.answer = [...variants, answer];
        } else {
          const idx = letterIndex(answer);
          if (idx != null && next.answer !== idx) next.answer = idx;
        }
      }
      return next;
    };
    if (Array.isArray(raw)) {
      // P1 原始契约是数组（OfficialPartOneSample 直接对 set 数据 .map），保持数组形状
      merged[setId] = raw.map((item, index) => enrichItem(item, index));
    } else {
      const next = { ...raw, items: (raw.items || []).map((item, index) => enrichItem(item, index)) };
      next.transcript = transcript;
      merged[setId] = next;
    }
  }
  return merged;
}
`;
fs.writeFileSync(DATA_OUT, file);
console.log(`\n已生成 ${DATA_OUT}（${(file.length / 1024).toFixed(0)} KB）`);

// ---------- 5. 接线 CambridgeListening.jsx ----------
let jsx = fs.readFileSync(JSX, 'utf8');
const IMPORT_ANCHOR = "import { extractQuotes, renderTranscriptWithHighlights, TranscriptBox } from '../utils/transcriptHighlight';";
const IMPORT_LINE = "\nimport { applyKetOfficialEnrich } from '../data/ketOfficialListeningTranscripts';";
if (!jsx.includes(IMPORT_ANCHOR)) { console.error('JSX import 锚点未找到'); process.exit(1); }
if (!jsx.includes('ketOfficialListeningTranscripts')) {
  jsx = jsx.replace(IMPORT_ANCHOR, IMPORT_ANCHOR + IMPORT_LINE);
}
const wrapRe = /const (PART[1-5])_SETS_ALL = \{ \.\.\.(OFFICIAL_PART[1-5]_BASE, \.\.\.BOOSTER_PART[1-5]_SETS) \};/g;
let wrapCount = 0;
jsx = jsx.replace(wrapRe, (m, name, rest) => {
  wrapCount += 1;
  return `const ${name}_SETS_ALL = applyKetOfficialEnrich(${name.slice(4)}, { ...${rest} });`;
});
if (wrapCount !== 5) { console.error(`接线替换数异常: ${wrapCount}（应为 5）`); process.exit(1); }
fs.writeFileSync(JSX, jsx);
// 回读核验
const check = fs.readFileSync(JSX, 'utf8');
const ok = check.includes('ketOfficialListeningTranscripts') && (check.match(/applyKetOfficialEnrich\(/g) || []).length >= 5;
if (!ok) { console.error('JSX 接线回读核验失败'); process.exit(1); }
console.log('CambridgeListening.jsx 接线完成（import + 5 处 PARTx_SETS_ALL）');
