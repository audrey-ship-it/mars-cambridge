import fs from 'fs';

const files = {
  Reading: 'fceSchoolsReadingTests',
  Listening: 'fceSchoolsListeningTests',
  Writing: 'fceSchoolsWritingTests',
  Speaking: 'fceSchoolsSpeakingTests',
};

console.log('===== 校园版4 (book 4) 各卷结构 =====');
for (const [kind, name] of Object.entries(files)) {
  const mod = await import('../src/data/' + name + '.js');
  const arr = mod[name];
  const s4 = arr.filter(x => x.meta.book === 4);
  console.log(`\n--- ${kind}: 校园版4 ${s4.length} 套 (文件共 ${arr.length} 套) ---`);
  for (const s of s4) {
    const parts = Object.keys(s.parts).sort((a, b) => Number(a) - Number(b));
    const detail = parts.map(p => `P${p}:${s.parts[p].items?.length ?? '-'}`).join(' ');
    const v = s.meta.verified;
    let extra = '';
    if (kind === 'Listening' && s.meta.test === 3) {
      const p2 = s.parts['2'];
      extra = ' | P2答案: ' + JSON.stringify(p2?.items?.map(i => i.answer));
    }
    if (kind === 'Speaking') {
      const p1 = s.parts['1'], p3 = s.parts['3'], p4 = s.parts['4'];
      extra = ` | P1cats:${p1?.categories ? p1.categories.length : '缺'} P3mm:${p3?.mindmap?.branches?.length ?? '缺'} P4:${p4 ? '有' : '缺'}`;
    }
    console.log(`T${s.meta.test}: parts[${parts.join(',')}] ${detail} verified=${v}${extra}`);
  }
}

console.log('\n===== 校园版 meta 抽样 (book4 T1 Reading) =====');
const smod = await import('../src/data/fceSchoolsReadingTests.js');
const entry = smod.fceSchoolsReadingTests.find(x => x.meta.book === 4 && x.meta.test === 1);
console.log(JSON.stringify(entry.meta));

console.log('\n===== 标准版 meta 抽样 (第1条) =====');
const rmod = await import('../src/data/fceStandardReadingTests.js');
console.log(JSON.stringify(rmod.fceStandardReadingTests[0].meta).slice(0, 500));

console.log('\n===== scripts/fragments 目录 =====');
const frags = fs.readdirSync('./fragments');
console.log(frags.length + ' 个文件');
