// 一次性补丁：在 KET 写作中心接入 Trainer 1 写作套卷（按索引插入，避开换行差异）。
import fs from 'node:fs';

const file = 'src/pages/CambridgeWriting.jsx';
let src = fs.readFileSync(file, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';

if (src.includes('KET_TRAINER1_WRITING).map')) {
  console.log('already patched');
  process.exit(0);
}

const marker = 'KET_STANDARD_WRITING).map(';
const start = src.indexOf(marker);
const close = src.indexOf('})))', start);
if (start < 0 || close < 0) {
  console.error('markers not found', start, close);
  process.exit(1);
}

const block = [
  '.concat(Object.entries(KET_TRAINER1_WRITING).map(([id, writing], index) => ({',
  '  exam: { id, label: `Trainer 1 · Test ${index + 1}`, reading: { writing } },',
  "  book: 'trainer1',",
  '  test: index + 1,',
  '}))',
].join(eol);

// close+3 是原始表达式最后的右括号位置：去掉它，改为串联新的 concat。
src = src.slice(0, close + 3) + block + src.slice(close + 4);
fs.writeFileSync(file, src, 'utf8');
console.log('patched; occurrences =', (src.match(/KET_TRAINER1_WRITING/g) || []).length);
