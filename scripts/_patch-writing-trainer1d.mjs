// 第四版补丁：补上链式 concat 的右括号（第 38 行 `}))` -> `}))`+`)`）。
import fs from 'node:fs';

const file = 'src/pages/CambridgeWriting.jsx';
let src = fs.readFileSync(file, 'utf8');
const needle = '})).concat(Object.entries(KET_TRAINER1_WRITING).map(';
const fixed = '}))).concat(Object.entries(KET_TRAINER1_WRITING).map(';

if (!src.includes(needle)) {
  console.log(src.includes(fixed) ? 'already fixed' : 'needle not found');
  process.exit(src.includes(fixed) ? 0 : 1);
}
src = src.replace(needle, fixed);
fs.writeFileSync(file, src, 'utf8');
console.log('fixed paren');
