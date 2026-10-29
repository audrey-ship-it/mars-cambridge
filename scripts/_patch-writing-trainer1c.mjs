// 第三版补丁：补上 WRITING_SETS 末尾缺失的一个右括号。
import fs from 'node:fs';

const file = 'src/pages/CambridgeWriting.jsx';
let src = fs.readFileSync(file, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';

const tail = ["  test: index + 1,", '}))', ''].join(eol);
const fixed = ["  test: index + 1,", '})))', ''].join(eol);

if (src.includes(fixed)) {
  console.log('already fixed');
  process.exit(0);
}
if (!src.includes(tail)) {
  console.error('tail not found');
  process.exit(1);
}
src = src.replace(tail, fixed);
fs.writeFileSync(file, src, 'utf8');
console.log('fixed');
