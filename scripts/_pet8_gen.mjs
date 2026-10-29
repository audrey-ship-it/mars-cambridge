// 从 extracted-v5.json 生成 src/data/petMock8ListeningTranscripts.js（数据勿手改，改 JSON 后重跑本脚本）
import fs from 'node:fs';

const SRC = JSON.parse(fs.readFileSync('scripts/_pet8_out/extracted-v5.json', 'utf8'));
const tests = [];
for (let n = 1; n <= 8; n++) {
  const id = `pet-mock-${n}-listening`;
  const d = SRC[id];
  if (!d) throw new Error(`缺 ${id}`);
  if (!Array.isArray(d.p1Items) || d.p1Items.length !== 7) throw new Error(`${id} p1Items 长度异常: ${d.p1Items && d.p1Items.length}`);
  if (!Array.isArray(d.p2Items) || d.p2Items.length !== 6) throw new Error(`${id} p2Items 长度异常: ${d.p2Items && d.p2Items.length}`);
  for (const [k, v] of [['p3Part', d.p3Part], ['p4Part', d.p4Part]]) {
    if (typeof v !== 'string' || !v.trim()) throw new Error(`${id} ${k} 非法`);
  }
  tests.push({ id, p1: d.p1Items, p2: d.p2Items, p3: d.p3Part, p4: d.p4Part });
}

const J = (s) => JSON.stringify(s);
let out = `// PET 全真模拟试题 1-8 听力原文：官方纸质书《PET 全真模拟试题（8套）》听力原文部分（书页 169-203）分栏 OCR 提取 + 人工逐段审读定稿。
// 由 scripts/_pet8_gen.mjs 从 scripts/_pet8_out/extracted-v5.json 生成，勿手改。
// 数据溯源：OCR 源 scripts/_pet8_out/left|right-*.txt；审读稿 scripts/_pet8_out/transcripts-v7.txt；提取脚本 scripts/_pet8_extract.mjs。
export const PET_MOCK8_LISTENING_TRANSCRIPTS = {
`;
for (const t of tests) {
  out += `  ${J(t.id)}: {\n`;
  out += `    p1Items: [\n${t.p1.map((s) => `      ${J(s)},`).join('\n')}\n    ],\n`;
  out += `    p2Items: [\n${t.p2.map((s) => `      ${J(s)},`).join('\n')}\n    ],\n`;
  out += `    p3Part: ${J(t.p3)},\n`;
  out += `    p4Part: ${J(t.p4)},\n`;
  out += `  },\n`;
}
out += `};\n`;
fs.writeFileSync('src/data/petMock8ListeningTranscripts.js', out, 'utf8');
console.log(`已生成 src/data/petMock8ListeningTranscripts.js（${tests.length} 套）`);
