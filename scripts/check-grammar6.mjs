// CET-6 语法题库结构校验：node scripts/check-grammar6.mjs
import { grammarUnits6 } from '../src/data/grammarSets6.js';

let fail = 0;
const seen = new Set();

for (const u of grammarUnits6) {
  const errs = [];
  if (!u.id || seen.has(u.id)) errs.push('id 缺失或重复');
  seen.add(u.id);
  if (!u.title || !u.desc) errs.push('缺少 title/desc');
  if (!Array.isArray(u.points) || u.points.length < 4) errs.push('points 少于 4 条');

  for (const key of ['choice', 'blank', 'correct']) {
    const list = u[key];
    if (!Array.isArray(list) || list.length !== 15) {
      errs.push(`${key} 题量 ${Array.isArray(list) ? list.length : '缺失'}（应为 15）`);
      continue;
    }
    list.forEach((it, i) => {
      if (!it.q || !it.exp) errs.push(`${key}#${i + 1} 缺 q/exp`);
      if (key === 'choice') {
        if (!Array.isArray(it.options) || it.options.length !== 4) errs.push(`${key}#${i + 1} 选项数不为 4`);
        if (!'ABCD'.includes(it.answer) || it.answer.length !== 1) errs.push(`${key}#${i + 1} answer 非单字母`);
        it.options?.forEach((o, oi) => {
          if (!o.startsWith('ABCD'[oi] + '. ')) errs.push(`${key}#${i + 1} 选项前缀异常: ${o.slice(0, 6)}`);
        });
      }
      if (key === 'blank' && (!Array.isArray(it.answers) || !it.answers.length)) errs.push(`${key}#${i + 1} answers 缺失`);
      if (key === 'correct') {
        if (!Array.isArray(it.parts) || it.parts.length !== 4) errs.push(`${key}#${i + 1} parts 不为 4 段`);
        if (it.noError) {
          if (it.answer !== null) errs.push(`${key}#${i + 1} noError 但 answer 不为 null`);
        } else if (!'ABCD'.includes(it.answer)) errs.push(`${key}#${i + 1} answer 非单字母`);
      }
    });
    const noErr = key === 'correct' ? list.filter((it) => it.noError).length : 0;
    if (key === 'correct' && noErr !== 2) errs.push(`correct 中 noError 共 ${noErr} 题（应为 2）`);
  }
  if (errs.length) {
    fail += 1;
    console.log(`✗ ${u.id} ${u.title}\n   ` + errs.join('\n   '));
  } else {
    console.log(`✓ ${u.id} ${u.title} 45 题`);
  }
}

console.log(`\n单元 ${grammarUnits6.length} 个，异常 ${fail} 个`);
process.exit(fail ? 1 : 0);
