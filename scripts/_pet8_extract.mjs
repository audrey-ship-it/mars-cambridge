// 步骤 C v5：Part 行锚定 + pairs 容差 key 匹配 + 指纹/题号双模题干定位 + 说话人合并
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const OUT = 'scripts/_pet8_out';
const read = (f) => (fs.existsSync(`${OUT}/${f}`) ? fs.readFileSync(`${OUT}/${f}`, 'utf8') : '');

// ---- 行流 ----
const lines = [];
for (let p = 169; p <= 203; p++) {
  for (const col of ['left', 'right']) {
    const txt = read(`${col}-${p}.txt`);
    if (!txt) continue;
    for (const raw of txt.split('\n')) lines.push({ p, col, t: raw.replace(/\s+/g, ' ').trim() });
    lines.push({ p, col, t: `\x00${col === 'left' ? 'L' : 'R'}${p}\x00` });
  }
}
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9£]+/g, '');
const normQ = (s) => norm(s).slice(0, 18);
const win = lines.map((_, i) => norm(lines.slice(i, i + 3).map((x) => x.t).join(' ')));

// ---- pairs 容差提取（抗 i10B/138B/222A/283A/48B 类 OCR 噪音）----
function extractPairs(t) {
  const s = t.replace(/100(?=\s*[A-C])/g, '10');
  const pairs = [];
  const re = /([0-9iIl]{1,3})\s*([A-C])\b/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    const raw = m[1], letter = m[2];
    const hasNoisePrefix = /^[iIl]/.test(raw);
    const digits = raw.replace(/[iIl]/g, '1');
    const cands = new Set();
    if (hasNoisePrefix && digits.length === 3) {
      cands.add(digits.slice(1)); // i10→10（i 为噪音）
      cands.add(digits);          // i10→110（保底）
    } else if (hasNoisePrefix && digits.length === 2) {
      cands.add(digits);          // i6→16, i0→10
    } else {
      cands.add(digits);
      if (digits.length === 3) {
        cands.add(digits.slice(1));       // 110→10
        cands.add(digits.slice(0, 2));    // 138→13
        cands.add(digits[0] + digits[2]); // 283→23
      } else if (digits.length === 2) {
        cands.add(digits[0]); cands.add(digits[1]); // 48→4|8（P1 key 粘连）
      }
    }
    pairs.push({ cands: [...cands].filter((c) => c && c !== '0'), letter });
  }
  return pairs;
}
function matchKey(t, startNo, seq) {
  const pairs = extractPairs(t);
  return seq.map((L, q) => {
    const p = pairs.find((x) => x.cands.includes(String(startNo + q)));
    if (!p) return '?';
    return p.letter === L ? 'ok' : `x${p.letter}`;
  });
}

// ---- 说话人拆分与段构建 ----
const SP_BLACK = new Set(['well','oh','but','and','so','that','this','it','if','you','they','we','he','she','i','yes','no','thanks','thank','right','ok','okay','now','then','today','tomorrow','yesterday','what','where','when','how','why','who','do','did','does','is','are','was','were','can','could','would','will','shall','may','might','should','have','has','had','let','lets','please','maybe','perhaps','sorry','hello','hi','yeah','not','just','actually','because','the','a','an','my','your','his','her','their','our','me','him','them','there','here','look','see','come','go','dont','im','its','thats','ive','youre','wow','alright','great','good','fine','sure','really','anything','everything','nothing','something','one','two','mr','mrs','ms','dr','st','sea','notre','eiffel','captain','cherry','though','marlene','whenever','plaza','leeds','pluto','annual','from',"student's"]);
function splitSpeaker(t) {
  const m = t.match(/^([A-Z][A-Za-z']{0,13})\.?\s+([A-Z].+)$/);
  if (m && !SP_BLACK.has(m[1].toLowerCase())) return [m[1], m[2]];
  return null;
}
const isSoloSpeaker = (t) => /^[A-Z][A-Za-z']{0,13}$/.test(t) && !SP_BLACK.has(t.toLowerCase());
// 带空格的独立标签行（Mr Bell / Miss Turner）
const isSoloTitle = (t) => /^(?:Mr|Miss|Ms|Mrs|Dr)\s+[A-Z][A-Za-z']+\.?$/.test(t);

// Ms Crane / Mr Bell 类头衔说话人
const TITLE_SP = /^((?:Ms|Miss|Mr|Mrs|Dr)\s+[A-Z][A-Za-z']+)\.?\s+([A-Z].+)$/;
// Girl 1 / Boy 2 类数字说话人（OCR 可能粘成 Girl1）
const NUM_SP = /^((?:Boy|Girl|Man|Woman|Interviewer|Presenter)\s?\d)\s+([A-Z].+)$/;

function isNoise(t) {
  if (!t) return true;
  if (/^\d{1,4}$/.test(t)) return true;
  if (extractPairs(t).length >= 3 && t.length < 70) return true; // key 行
  if (/^part\s*\d/i.test(t)) return true;
  if (/^answer[.:]?\s*key/i.test(t)) return true;
  if (/^paper\b|^sample answer|^®|^@®|^\[/.test(t)) return true;
  if (/\bPAPER\b/.test(t)) return true; // 印刷页眉残渣（如 PAPER: I LILLIE / PAPER 1 YLERLIE）
  if (/^[A-Z]{3,}[.:]/.test(t)) return true; // 全大写页眉残渣（如 GER. es Om / GER. Tes）
  // 页眉 Reading/Writing/Listening：须带 [(/| 前缀、页码% 前缀或整行仅该词，避免误杀 "writing a short story" 类对话行
  if (/reading|writing|listening/i.test(t) && t.length < 55 && (/^[(|]/.test(t) || /^\d{2,3}\s*%/.test(t) || /^(just )?(reading|writing|listening)$/i.test(t))) return true;
  return false;
}

function buildTranscript(segLines, fpR0) {
  const out = [];
  let fpR = fpR0 || '';
  for (let raw of segLines) {
    let t = raw.trim();
    if (!t || t.startsWith('\x00')) continue;
    // 行首噪音清洗（": Dad" / "Girl ~~ Tony"）
    t = t.replace(/^[:;,.~\-—]+\s+/, '');
    t = t.replace(/^([A-Z][A-Za-z']+)[ \t]*~+[ \t]*/, '$1 ');
    // 粘连页眉与已知 OCR 词噪
    t = t.replace(/\s*Answer[.:]?\s*Key and Transcripts\s*/gi, ' ').trim();
    t = t.replace(/\biove\b/g, 'love').replace(/\bI 1(?=don')/g, 'I ').replace(/\bitis\b/g, 'it is');
    t = t.replace(/\(CO,\)/g, '(CO2)');
    // 列拼接导致行中注入说话人标签（如 "...related? Mr Bell Global warming..."）→ 拆为多行
    t = t.replace(/\s((?:Mr|Miss|Ms|Mrs|Dr)\s+[A-Z][A-Za-z']+)\s+(?=[A-Z])/g, '\n$1: ');
    // 竖线转 I（提前到说话人拆分前）
    t = t.replace(/\s*\|\s*/g, ' I ').replace(/(^|[\s(])\|/g, '$1I');
    // 行中拆分出的每个子行独立走噪声过滤与说话人识别
    const subs = t.split('\n');
    for (const t of subs) {
      if (fpR) {
        const nt = norm(t);
        if (nt.length >= 3 && fpR.startsWith(nt)) { fpR = fpR.slice(nt.length); continue; }
      }
      if (isNoise(t)) continue;
      const tsp = t.match(TITLE_SP);
      if (tsp && !SP_BLACK.has(tsp[1].toLowerCase())) { out.push({ sp: tsp[1], text: tsp[2] }); continue; }
      const nsp = t.match(NUM_SP);
      if (nsp) { out.push({ sp: nsp[1].replace(/^([A-Za-z]+)\s?(\d)$/, '$1 $2'), text: nsp[2] }); continue; }
      if (isSoloTitle(t)) { out.push({ sp: t, text: '' }); continue; }
      const sp = splitSpeaker(t);
      if (sp) { out.push({ sp: sp[0], text: sp[1] }); continue; }
      if (isSoloSpeaker(t)) { out.push({ sp: t, text: '' }); continue; }
      const line = t;
      const last = out[out.length - 1];
      if (last) {
        if (/-$/.test(last.text)) { last.text = last.text.replace(/-$/, '') + line; continue; }
        if (!last.text) { last.text = line; continue; }
        last.text += ' ' + line;
        continue;
      }
      out.push({ sp: '', text: line });
    }
  }
  // 对话段必以说话人开头：首个说话人条目之前的残留（题干折行尾等）一律删除
  const firstSp = out.findIndex((o) => o.sp);
  const items = firstSp > 0 ? out.slice(firstSp) : out;
  return items.map((o) => (o.sp ? `${o.sp}: ${o.text}`.trim() : o.text.trim())).filter(Boolean).join('\n');
}

// ---- 题干定位：指纹 win 命中 → 题干首行 → 折行延续；兜底行首题号 ----
function locateQ(hitIdx, fpFull, no, fromIdx, toIdx) {
  let qStart = -1, how = 'miss';
  if (hitIdx >= 0) {
    for (let k = hitIdx; k <= hitIdx + 4 && k < lines.length; k++) {
      const t = lines[k].t;
      if (t.startsWith('\x00')) break;
    if (!t) continue;
    const nt = norm(t).replace(/^\d{1,2}(?![tnrs])(?=[a-z])/, '');
    if (nt.includes(fpFull.slice(0, 14))) { qStart = k; how = 'fp'; break; }
    }
  }
  if (qStart < 0) {
    for (let k = Math.max(0, fromIdx); k < toIdx; k++) {
      const t = lines[k].t;
      if (new RegExp(`^0?${no}\\s+[A-Za-z]`).test(t) && t.length < 240) { qStart = k; how = 'no'; break; }
    }
    if (qStart < 0) return { last: -1, qStart: -1, fpR: '', how };
  }
  let last = qStart, acc = '';
  for (let k = qStart; k <= qStart + 5 && k < lines.length; k++) {
    const t = lines[k].t;
    if (t.startsWith('\x00')) break;
    if (!t) continue;
    const nt = norm(t).replace(/^\d{1,2}(?![tnrs])(?=[a-z])/, '');
    acc += nt;
    if (fpFull.startsWith(acc)) { last = k; if (acc.length >= fpFull.length) break; }
    else if (acc.startsWith(fpFull)) { last = k; break; }
    else break;
  }
  return { last, qStart, fpR: fpFull.slice(Math.min(acc.length, fpFull.length)), how };
}

// ---- 站内数据 ----
const { petListeningTests } = await import(pathToFileURL('d:/workspace_sunny/mars-cambridge/src/data/petListeningData.js'));
const L = ['A', 'B', 'C'];
const mocks = {};
for (const t of petListeningTests) {
  const m = t.meta?.id?.match(/pet-mock-(\d+)/);
  if (m && Number(m[1]) <= 8) mocks[Number(m[1])] = t;
}

// ---- 套边界（沿 v4：P1Q1 题干指纹）----
const starts = [];
for (let n = 1; n <= 8; n++) {
  const fp = normQ(mocks[n].parts['1'].items[0].q);
  let found = -1;
  for (let i = (starts[starts.length - 1] ?? -1) + 1; i < lines.length; i++) {
    if (win[i].includes(fp)) { found = i; break; }
  }
  starts.push(found);
}
console.log('套起点:', starts.map((s, i) => `T${i + 1}@${s}(${s >= 0 ? lines[s].p + lines[s].col[0] : '?'})`).join(' '));

// ---- 套内提取 ----
const result = {};
const report = [];
for (let n = 1; n <= 8; n++) {
  const start = starts[n - 1];
  const end = n < 8 ? starts[n] : lines.length;
  const test = mocks[n];
  const id = test.meta.id;
  if (start < 0) { report.push(`${id}: 套起点定位失败`); continue; }
  result[id] = {};

  // Part 行锚
  let p2Line = -1, p3Line = -1, p4Line = -1;
  for (let i = start; i < end; i++) {
    const m = lines[i].t.match(/^Part\s*([2-4])\s*$/i);
    if (!m) continue;
    const pn = Number(m[1]);
    if (pn === 2 && p2Line < 0) p2Line = i;
    else if (pn === 3 && p2Line >= 0 && p3Line < 0) p3Line = i;
    else if (pn === 4 && p3Line >= 0 && p4Line < 0) p4Line = i;
  }

  // P1 key：start 前后窗口内容差匹配
  let p1KeyIdx = -1, p1KeyHits = -1;
  for (let i = Math.max(0, start - 6); i <= start + 8 && i < end; i++) {
    const t = lines[i].t;
    if (!t || t.startsWith('\x00')) continue;
    const res = matchKey(t, 1, test.parts['1'].items.map((it) => L[it.answer]));
    const hits = res.filter((r) => r === 'ok').length;
    if (hits >= 5 && hits > p1KeyHits) { p1KeyIdx = i; p1KeyHits = hits; }
  }

  // P2 key
  let p2KeyIdx = -1, p2KeyHits = -1;
  if (p2Line >= 0) {
    for (let i = p2Line + 1; i < (p3Line >= 0 ? p3Line : end); i++) {
      const t = lines[i].t;
      if (!t || t.startsWith('\x00')) continue;
      const res = matchKey(t, 8, test.parts['2'].items.map((it) => L[it.answer]));
      const hits = res.filter((r) => r === 'ok').length;
      if (hits >= 4 && hits > p2KeyHits) { p2KeyIdx = i; p2KeyHits = hits; }
    }
  }

  // P3 key 区（Part 3 行后连续含 14-19 题号的短行）
  let kzEnd = -1;
  if (p3Line >= 0) {
    kzEnd = p3Line;
    for (let i = p3Line + 1; i < (p4Line >= 0 ? p4Line : end); i++) {
      const t = lines[i].t;
      if (t && !t.startsWith('\x00') && /(?:^|\s)1[4-9]\b/.test(t) && t.length < 90 && !/[.!?]$/.test(t)) kzEnd = i;
      else break;
    }
  }

  // P4 key
  let p4KeyIdx = -1, p4KeyHits = -1;
  if (p4Line >= 0) {
    for (let i = p4Line + 1; i < Math.min(p4Line + 7, end); i++) {
      const t = lines[i].t;
      if (!t || t.startsWith('\x00')) continue;
      const res = matchKey(t, 20, test.parts['4'].items.map((it) => L[it.answer]));
      const hits = res.filter((r) => r === 'ok').length;
      if (hits >= 4 && hits > p4KeyHits) { p4KeyIdx = i; p4KeyHits = hits; }
    }
  }

  // P1 题级段
  const p1Items = test.parts['1'].items;
  const p1Q = [];
  let prevLast = start - 1;
  for (const [qi, item] of p1Items.entries()) {
    const hit = (() => { const fp = normQ(item.q); for (let i = Math.max(prevLast + 1, start - 2); i < end; i++) { if (win[i].includes(fp)) return i; } return -1; })();
    const loc = locateQ(hit, norm(item.q), qi + 1, prevLast + 1, p2Line >= 0 ? p2Line : end);
    p1Q.push(loc);
    if (loc.last >= 0) prevLast = loc.last;
  }
  const p1Trans = [];
  for (let qi = 0; qi < p1Items.length; qi++) {
    if (p1Q[qi].last < 0) { p1Trans.push(null); continue; }
    let nxt = p1Q.findIndex((v, k) => k > qi && v.qStart >= 0);
    const eIdx = nxt >= 0 ? p1Q[nxt].qStart : (p2Line >= 0 ? p2Line : end);
    p1Trans.push(buildTranscript(lines.slice(p1Q[qi].last + 1, eIdx).map((x) => x.t), p1Q[qi].fpR));
  }
  result[id].p1Items = p1Trans;

  // P2 题级段
  const p2Items = test.parts['2'].items;
  const p2Q = [];
  prevLast = p2KeyIdx >= 0 ? p2KeyIdx : (p2Line >= 0 ? p2Line : start);
  for (const [qi, item] of p2Items.entries()) {
    const hit = (() => { const fp = normQ(item.q); for (let i = prevLast + 1; i < end; i++) { if (win[i].includes(fp)) return i; } return -1; })();
    const loc = locateQ(hit, norm(item.q), 8 + qi, prevLast + 1, p3Line >= 0 ? p3Line : end);
    p2Q.push(loc);
    if (loc.last >= 0) prevLast = loc.last;
  }
  const p2Trans = [];
  for (let qi = 0; qi < p2Items.length; qi++) {
    if (p2Q[qi].last < 0) { p2Trans.push(null); continue; }
    let nxt = p2Q.findIndex((v, k) => k > qi && v.qStart >= 0);
    const eIdx = nxt >= 0 ? p2Q[nxt].qStart : (p3Line >= 0 ? p3Line : end);
    p2Trans.push(buildTranscript(lines.slice(p2Q[qi].last + 1, eIdx).map((x) => x.t), p2Q[qi].fpR));
  }
  result[id].p2Items = p2Trans;

  // P3 Part 段
  const p3Trans = kzEnd >= p3Line && p3Line >= 0 && p4Line > kzEnd
    ? buildTranscript(lines.slice(kzEnd + 1, p4Line).map((x) => x.t), '')
    : null;
  result[id].p3Part = p3Trans;

  // P4 Part 段（到下一套 Reading 的 Part 1 行或区间尾）
  let p4Trans = null;
  if (p4KeyIdx >= 0) {
    let e = end;
    for (let i = p4KeyIdx + 1; i < end; i++) {
      if (/^Part\s*1\s*$/i.test(lines[i].t)) { e = i; break; }
    }
    p4Trans = buildTranscript(lines.slice(p4KeyIdx + 1, e).map((x) => x.t), '');
  }
  result[id].p4Part = p4Trans;

  // ---- 核对 ----
  const checks = [];
  let s = 'P1 key ';
  s += p1KeyIdx < 0 ? '行缺失' : matchKey(lines[p1KeyIdx].t, 1, p1Items.map((it) => L[it.answer])).map((r) => (r === 'ok' ? '.' : r)).join('');
  s += ` | 题干 ${p1Q.map((q) => q.how[0]).join('')} | 首段 "${(p1Trans[0] || 'NULL').slice(0, 40)}"`;
  checks.push(s);

  s = 'P2 key ';
  s += p2KeyIdx < 0 ? '行缺失' : matchKey(lines[p2KeyIdx].t, 8, p2Items.map((it) => L[it.answer])).map((r) => (r === 'ok' ? '.' : r)).join('');
  s += ` | 题干 ${p2Q.map((q) => q.how[0]).join('')} | 首段 "${(p2Trans[0] || 'NULL').slice(0, 40)}"`;
  checks.push(s);

  const p3Seq = (test.parts['3'].items || []);
  s = 'P3 key ';
  if (kzEnd < p3Line || p3Line < 0) s += '区缺失';
  else {
    const kz = norm(lines.slice(p3Line + 1, kzEnd + 1).map((x) => x.t).join(' '));
    for (let qi = 0; qi < p3Seq.length; qi++) {
      const vars = Array.isArray(p3Seq[qi].answer) ? p3Seq[qi].answer : [String(p3Seq[qi].answer ?? '?')];
      if (!vars.some((v) => kz.includes(norm(v)))) s += `Q${qi + 1}:缺[${vars.join('|')}] `;
    }
  }
  s += ` | 段 ${p3Trans ? p3Trans.length + '字' : 'NULL'} "${(p3Trans || '').slice(0, 40).replace(/\n/g, '/')}"`;
  checks.push(s);

  const p4Seq = test.parts['4'].items.map((it) => L[it.answer]);
  s = 'P4 key ';
  s += p4KeyIdx < 0 ? '行缺失' : matchKey(lines[p4KeyIdx].t, 20, p4Seq).map((r) => (r === 'ok' ? '.' : r)).join('');
  s += ` | 段 ${p4Trans ? p4Trans.length + '字' : 'NULL'} "${(p4Trans || '').slice(0, 40).replace(/\n/g, '/')}"`;
  checks.push(s);

  report.push(`=== mock-${n} ===\n  ${checks.join('\n  ')}`);
}

console.log(report.join('\n'));
fs.writeFileSync(`${OUT}/extracted-v5.json`, JSON.stringify(result, null, 1));
console.log('extracted-v5.json 已保存');
