// FCE 解析引句替换：把 8 套 P1/P3/P4 的纯中文 explanation 换成「中文 + 。原文："引句"」版本
// 数据源：scripts/_ts_out/fce-std{n}-t{m}-exp.json（子代理产出，引句已逐字校验）
// 定位：状态机按 STD{n}_L{m} → Part 键 → explanation 出现顺序（每题恰一条），P2 跳过
// 原子性：写盘前计数校验（每套 8/5/7），不符 ABORT
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const DATA = 'd:/workspace_sunny/mars-cambridge/src/data/fceStandardListeningTests.js';
const OUT = 'd:/workspace_sunny/mars-cambridge/scripts/_ts_out';

// ---------- 载入替换值 ----------
const exp = {};
for (let b = 3; b <= 4; b++) for (let t = 1; t <= 4; t++) {
  const j = JSON.parse(fs.readFileSync(`${OUT}/fce-std${b}-t${t}-exp.json`, 'utf8'));
  const map = {};
  for (let q = 1; q <= 8; q++) map[`1-${q - 1}`] = j[`p1q${q}`];
  for (let q = 1; q <= 5; q++) map[`3-${q - 1}`] = j[`p3q${q}`];
  for (let q = 1; q <= 7; q++) map[`4-${q - 1}`] = j[`p4q${q}`];
  for (const k of Object.keys(map)) {
    const v = map[k];
    if (typeof v !== 'string' || v.length < 20 || !/"[^"]{10,}"/.test(v)) {
      console.error(`ABORT bad replacement std${b}-t${t} ${k}`); process.exit(1);
    }
  }
  exp[`${b}-${t}`] = map;
}

// ---------- 状态机替换 ----------
const raw = fs.readFileSync(DATA, 'utf8');
const EOL = raw.includes('\r\n') ? '\r\n' : '\n';
const lines = raw.split(EOL);

// 行内 explanation 字符串值替换（处理 \ 转义，值统一改 JSON.stringify 双引号形式）
function spliceExpValue(line, newTxt) {
  const KEY = 'explanation:';
  const kIdx = line.indexOf(KEY);
  const afterKey = line.slice(kIdx + KEY.length);
  const mTrim = afterKey.match(/^\s*(['"])/);
  if (!mTrim) throw new Error('no open quote after explanation: in line: ' + line.slice(0, 100));
  const q = mTrim[1];
  const openAbs = kIdx + KEY.length + afterKey.indexOf(q);
  let closeAbs = -1;
  for (let i = openAbs + 1; i < line.length; i++) {
    const ch = line[i];
    if (ch === '\\') { i += 1; continue; }
    if (ch === q) { closeAbs = i; break; }
  }
  if (closeAbs < 0) throw new Error('no close quote in line: ' + line.slice(0, 100));
  return line.slice(0, openAbs) + JSON.stringify(newTxt) + line.slice(closeAbs + 1);
}

const out = [];
let cur = null; // { book, set, part, itemIdx }
const counts = {};
for (const line of lines) {
  let m;
  if ((m = line.match(/^const STD(\d)_L(\d) = \{/))) {
    cur = { book: +m[1], set: +m[2], part: null, itemIdx: 0 };
    out.push(line); continue;
  }
  if (/^(export |\/\/ =====|\/\*)/.test(line)) { cur = null; out.push(line); continue; }
  if (cur && (m = line.match(/^ {4}([1-4]): \{/))) { cur.part = +m[1]; cur.itemIdx = 0; out.push(line); continue; }
  if (cur && exp[`${cur.book}-${cur.set}`] && cur.part && cur.part !== 2) {
    const isInline = cur.part === 3 && /^ {8}\{ .*\bexplanation: /.test(line);
    const isHead = /^ {10}explanation:/.test(line);
    if (isHead || isInline) {
      const key = `${cur.part}-${cur.itemIdx}`;
      const val = exp[`${cur.book}-${cur.set}`][key];
      if (!val) { console.error(`ABORT missing replacement b${cur.book} t${cur.set} ${key}`); process.exit(1); }
      let newLine;
      try { newLine = spliceExpValue(line, val); } catch (e) { console.error('ABORT', e.message); process.exit(1); }
      out.push(newLine);
      const ck = `${cur.book}-${cur.set}-${cur.part}`;
      counts[ck] = (counts[ck] || 0) + 1;
      cur.itemIdx += 1;
      continue;
    }
  }
  out.push(line);
}

// ---------- 写盘前校验 ----------
let bad = 0, total = 0;
for (let b = 3; b <= 4; b++) for (let t = 1; t <= 4; t++) {
  for (const [p, n] of [['1', 8], ['3', 5], ['4', 7]]) {
    const got = counts[`${b}-${t}-${p}`] || 0;
    total += got;
    if (got !== n) { console.error('COUNT MISMATCH', `${b}-${t}-${p}`, 'got', got, 'expect', n); bad++; }
  }
}
console.log('replaced total:', total, '| expect 160 |', bad === 0 ? 'ALL COUNTS OK' : bad + ' count errors');
if (bad > 0) { console.error('ABORT before write'); process.exit(1); }
fs.writeFileSync(DATA, out.join(EOL));

// ---------- 回读验证 ----------
const mod = await import(pathToFileURL(DATA).href + '?v=' + Date.now());
const sets = mod.fceStandardListeningTests.slice(8, 16);
let withQuote = 0, nExp = 0;
for (const set of sets) {
  for (const pn of ['1', '3', '4']) {
    for (const it of set.parts[pn].items) {
      nExp += 1;
      if (it.explanation && it.explanation.includes('。原文："')) withQuote += 1;
    }
  }
}
console.log(`readback: explanations=${nExp} (expect 160), with 引句=${withQuote}`, withQuote === 160 ? 'OK' : 'FAIL');
process.exit(withQuote === 160 ? 0 : 1);
