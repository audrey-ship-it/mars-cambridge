import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const DATA = 'd:/workspace_sunny/mars-cambridge/src/data/fceStandardListeningTests.js';
const RENDER = 'd:/workspace_sunny/mars-cambridge/src/pages/CambridgeListeningFCE.jsx';
const jsons = {
  3: JSON.parse(fs.readFileSync('d:/workspace_sunny/mars-cambridge/scripts/_ts_out/fce-std3.json', 'utf8')),
  4: JSON.parse(fs.readFileSync('d:/workspace_sunny/mars-cambridge/scripts/_ts_out/fce-std4.json', 'utf8')),
};

// ---------- 1) 渲染层：part 级高亮并入填空答案（仅字符串/字符串数组 answer，排除数字） ----------
let r = fs.readFileSync(RENDER, 'utf8');
const rFrom = 'part.items.flatMap(it => extractQuotes(it.explanation))';
const rTo = "part.items.flatMap(it => extractQuotes(it.explanation).concat(typeof it.answer === 'string' && it.answer ? [it.answer] : Array.isArray(it.answer) ? it.answer.map(String) : []))";
const rc = r.split(rFrom).length - 1;
if (rc === 0) {
  console.log('renderer already patched, skip');
} else if (rc !== 2) {
  console.error('ABORT render anchor count=' + rc); process.exit(1);
} else {
  r = r.split(rFrom).join(rTo);
  fs.writeFileSync(RENDER, r);
  console.log('renderer patched: 2 call sites');
}

// ---------- 2) 数据文件注入（状态机，abort-before-write） ----------
const raw = fs.readFileSync(DATA, 'utf8');
const EOL = raw.includes('\r\n') ? '\r\n' : '\n';
const lines = raw.split(EOL);

const out = [];
let cur = null; // { book, set, part, itemIdx }
let headerDone = false;
const counts = {};
const expect = {};
for (let b = 3; b <= 4; b++) for (let t = 1; t <= 4; t++) {
  for (const [p, n] of [['1', 8], ['2', 1], ['3', 5], ['4', 1]]) expect[`${b}-${t}-${p}`] = n;
}

for (const line of lines) {
  let m;
  if ((m = line.match(/^const STD(\d)_L(\d) = \{/))) {
    const b = +m[1];
    cur = b <= 2 ? null : { book: b, set: +m[2], part: null, itemIdx: 0 }; // 册1/2 已注入跳过，仅册3/4
    out.push(line); continue;
  }
  if (/^(export |\/\/ =====|\/\*)/.test(line)) { cur = null; out.push(line); continue; }
  if (cur && (m = line.match(/^    ([1-4]): \{/))) { cur.part = +m[1]; cur.itemIdx = 0; out.push(line); continue; }
  if (cur && cur.part && (cur.part === 2 || cur.part === 4) && /^ {6}audio: /.test(line)) {
    out.push(line);
    const txt = jsons[cur.book].sets[cur.set - 1].parts[String(cur.part)];
    if (typeof txt !== 'string' || txt.length < 1500) { console.error(`ABORT bad part transcript b${cur.book} t${cur.set} p${cur.part}`); process.exit(1); }
    out.push('      transcript: ' + JSON.stringify(txt) + ',');
    counts[`${cur.book}-${cur.set}-${cur.part}`] = (counts[`${cur.book}-${cur.set}-${cur.part}`] || 0) + 1;
    continue;
  }
  if (cur && cur.part && (cur.part === 1 || cur.part === 3) && /^ {10}explanation:/.test(line)) {
    // 多行式题项：explanation 独占一行，transcript 插在其前
    const k = cur.itemIdx;
    const grp = jsons[cur.book].sets[cur.set - 1].parts[String(cur.part)];
    const txt = grp.items[k];
    if (typeof txt !== 'string' || txt.length < 120) { console.error(`ABORT bad item transcript b${cur.book} t${cur.set} p${cur.part} #${k}`); process.exit(1); }
    out.push('          transcript: ' + JSON.stringify(txt) + ',');
    counts[`${cur.book}-${cur.set}-${cur.part}`] = (counts[`${cur.book}-${cur.set}-${cur.part}`] || 0) + 1;
    cur.itemIdx += 1;
    out.push(line); continue;
  }
  if (cur && cur.part && cur.part === 3 && /^ {8}\{ .*\bexplanation: .*\},\s*$/.test(line)) {
    // 单行式题项：{ speaker, answer, explanation } 挤在一行，transcript 并入行内
    const k = cur.itemIdx;
    const grp = jsons[cur.book].sets[cur.set - 1].parts[String(cur.part)];
    const txt = grp.items[k];
    if (typeof txt !== 'string' || txt.length < 120) { console.error(`ABORT bad item transcript b${cur.book} t${cur.set} p${cur.part} #${k}`); process.exit(1); }
    const indent = line.match(/^ */)[0];
    const inner = line.trim().replace(/\},\s*$/, '').replace(/\s*$/, '');
    out.push(indent + inner + ', transcript: ' + JSON.stringify(txt) + ' },');
    counts[`${cur.book}-${cur.set}-${cur.part}`] = (counts[`${cur.book}-${cur.set}-${cur.part}`] || 0) + 1;
    cur.itemIdx += 1;
    continue;
  }
  if (/^\/\/ Part 1 音频：官方 CD 为整 Part 单条音频/.test(line)) {
    out.push(line);
    for (const [b, j] of Object.entries(jsons)) {
      const pg = j.pages || {};
      const rng = pg.transcriptPdfRanges || pg.transcriptPdfRange;
      const desc = (rng && typeof rng === 'object' && !Array.isArray(rng))
        ? Object.entries(rng).map(([k, v]) => `T${String(k).replace('test', '')} PDF ${v[0]}-${v[1]}`).join(' / ')
        : 'PDF ' + JSON.stringify(rng);
      out.push('// 听力原文（2026-10-27 逐字转录自官方 Tapescript；引句核对：node scripts/_ts_verify_fce.mjs）：' + j.book + ' ' + desc);
    }
    headerDone = true;
    continue;
  }
  out.push(line);
}

if (!headerDone) { console.error('ABORT header anchor not found'); process.exit(1); }

// 写盘前校验：计数不符即 ABORT 不写盘（abort-before-write 原子性）
let total = 0, bad = 0;
for (const k of Object.keys(expect)) {
  const got = counts[k] || 0;
  total += got;
  if (got !== expect[k]) { console.error('COUNT MISMATCH', k, 'got', got, 'expect', expect[k]); bad++; }
}
console.log('inserted total:', total, '| expect 120 |', bad === 0 ? 'ALL COUNTS OK' : bad + ' count errors');
if (bad > 0) { console.error('ABORT before write'); process.exit(1); }
fs.writeFileSync(DATA, out.join(EOL));

// ---------- 3) 动态回读验证 ----------
const mod = await import(pathToFileURL(DATA).href + '?v=' + Date.now());
const sets = mod.fceStandardListeningTests.slice(0, 16); // 册1/2 已注入 + 册3/4 本次注入，全量回读
let nItems = 0, nParts = 0;
for (const set of sets) {
  for (const pn of ['1', '2', '3', '4']) {
    const part = set.parts[pn];
    if (pn === '1' || pn === '3') {
      if (!part.items.every(it => typeof it.transcript === 'string' && it.transcript.length > 120)) { console.error('READBACK FAIL', set.meta.id, 'P' + pn); bad++; }
      nItems += part.items.length;
    } else {
      if (typeof part.transcript !== 'string' || part.transcript.length < 1500) { console.error('READBACK FAIL', set.meta.id, 'P' + pn); bad++; }
      nParts += 1;
    }
  }
}
console.log(`readback: ${sets.length} sets, item transcripts=${nItems} (expect 208), part transcripts=${nParts} (expect 32)`, bad === 0 ? 'OK' : bad + ' errors');
process.exit(bad === 0 ? 0 : 1);
