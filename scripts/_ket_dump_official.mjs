// KET：从 CambridgeListening.jsx 提取官方 32 套数据（P1-P5）→ scripts/_ket_out/official-data.json
// 括号计数法抽取 7 个顶层常量字面量（区间内混有 JSX 组件，不能整段切片）。
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const JSX = 'd:/workspace_sunny/mars-cambridge/src/pages/CambridgeListening.jsx';
const OUT_DIR = 'd:/workspace_sunny/mars-cambridge/scripts/_ket_out';
fs.mkdirSync(OUT_DIR, { recursive: true });

const raw = fs.readFileSync(JSX, 'utf8');
const NAMES = ['KET3_TEST1_PART1', 'OFFICIAL_TEST1_PARTS', 'OFFICIAL_PART1_BASE', 'OFFICIAL_PART2_BASE', 'OFFICIAL_PART3_BASE', 'OFFICIAL_PART4_BASE', 'OFFICIAL_PART5_BASE'];

// 找到 const NAME = 之后字面量的末尾（深度归零），字符串/注释感知
function extractLiteral(src, name) {
  const decl = `const ${name} =`;
  const di = src.indexOf(decl);
  if (di < 0) throw new Error(`未找到 ${decl}`);
  let i = di + decl.length;
  while (src[i] !== '{' && src[i] !== '[') { if (src[i] === undefined) throw new Error(`${name}: 未找到起始括号`); i++; }
  const open = src[i], close = open === '{' ? '}' : ']';
  let depth = 0;
  for (; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === '`') {
      const q = c;
      i++;
      while (i < src.length && src[i] !== q) { if (src[i] === '\\') i++; i++; }
      continue;
    }
    if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
    if (c === '/' && src[i + 1] === '*') { i += 2; while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) i++; i++; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return src.slice(src.indexOf(decl), i + 1); }
  }
  throw new Error(`${name}: 括号未闭合`);
}

const parts = NAMES.map((n) => extractLiteral(raw, n));
const sliceFile = path.join(OUT_DIR, '_official_slice.mjs');
fs.writeFileSync(sliceFile, `${parts.join('\n')}\nexport { ${NAMES.join(', ')} };\n`);
const mod = await import(pathToFileURL(sliceFile).href);

const bases = [mod.OFFICIAL_PART1_BASE, mod.OFFICIAL_PART2_BASE, mod.OFFICIAL_PART3_BASE, mod.OFFICIAL_PART4_BASE, mod.OFFICIAL_PART5_BASE];
const dump = {};
const summary = [];
for (let setId = 1; setId <= 32; setId++) {
  const key = String(setId);
  dump[key] = {};
  for (let part = 1; part <= 5; part++) {
    const p = bases[part - 1][key];
    if (!p) { dump[key][part] = null; continue; }
    const isArr = Array.isArray(p);
    const items = (isArr ? p : (p.items || [])).map((it) => ({
      q: it.q ?? it.question ?? '',
      opts: it.opts || undefined,
      answer: it.answer,
      show: it.show,
      explanation: it.explanation ?? '',
    }));
    dump[key][part] = { title: isArr ? undefined : p.title, instruction: isArr ? undefined : p.instruction, options: isArr ? undefined : p.options, items };
  }
  const partsPresent = [1, 2, 3, 4, 5].filter((x) => dump[key][x]);
  const itemTotal = partsPresent.reduce((s, x) => s + dump[key][x].items.length, 0);
  const expMissing = partsPresent.reduce((s, x) => s + dump[key][x].items.filter((it) => !it.explanation).length, 0);
  summary.push(`set ${key}: parts=${partsPresent.join(',')} items=${itemTotal} 解析缺失=${expMissing}`);
}
fs.writeFileSync(path.join(OUT_DIR, 'official-data.json'), JSON.stringify(dump, null, 1));
console.log(summary.join('\n'));
console.log(`\n已写 official-data.json（${(fs.statSync(path.join(OUT_DIR, 'official-data.json')).size / 1024).toFixed(0)} KB）`);
