// 接线补丁：修正 4 处站内解析引句（措辞对齐官方原文）+ 顶部 import + mock-1..8 注入 IIFE
// 任一锚点非唯一命中即 ABORT 不写入
import fs from 'node:fs';

const F = 'src/data/petListeningData.js';
let src = fs.readFileSync(F, 'utf8');
let ok = 0;
function rep1(from, to, tag) {
  const parts = src.split(from);
  if (parts.length !== 2) {
    console.error(`ABORT ${tag}: 锚点命中 ${parts.length - 1} 次（要求恰好 1 次），未写入`);
    process.exit(1);
  }
  src = parts.join(to);
  ok++;
  console.log(`OK ${tag}`);
}

// 1) mock-1 P2 Q8：官方原文 I can't stand doing it
rep1(
  "clean the windows once a month. I can\\'t stand it",
  "clean the windows once a month. I can\\'t stand doing it",
  'fix mock-1 P2Q8',
);
// 2) mock-4 P2 Q10：官方原文 a quarter to three
rep1(
  'put it off to quarter to three',
  'put it off to a quarter to three',
  'fix mock-4 P2Q10',
);
// 3) mock-6 P4 Q22：官方原文 the dog umbrella
rep1('对应 a dog umbrella，选 C', '对应 the dog umbrella，选 C', 'fix mock-6 P4Q22');
// 4) mock-8 P2 Q8：官方原文 apart from visiting museums
rep1(
  'apart from visit museums',
  'apart from visiting museums',
  'fix mock-8 P2Q8',
);
// 5) 顶部 import
rep1(
  'export const petListeningTests = [',
  "import { PET_MOCK8_LISTENING_TRANSCRIPTS } from './petMock8ListeningTranscripts.js';\n\nexport const petListeningTests = [",
  'add import',
);
// 6) 注入 IIFE（置于既有「整 Part 归一」IIFE 之前，P1/P2 整 Part 原文由归一逻辑自动拼接派生）
rep1(
  '// P1/P2 整 Part 原文归一',
  `// 全真模拟 1-8 听力原文注入（来源：官方纸质书 OCR + 人工审读，见 petMock8ListeningTranscripts.js）
(() => {
  for (const test of petListeningTests) {
    const d = PET_MOCK8_LISTENING_TRANSCRIPTS[test.meta?.id];
    if (!d) continue;
    for (const pn of ['1', '2']) {
      const items = test.parts?.[pn]?.items || [];
      const trans = d[pn === '1' ? 'p1Items' : 'p2Items'] || [];
      items.forEach((it, i) => { if (it && !it.transcript && trans[i]) it.transcript = trans[i]; });
    }
    for (const pn of ['3', '4']) {
      const part = test.parts?.[pn];
      const key = pn === '3' ? 'p3Part' : 'p4Part';
      if (part && !part.transcript && d[key]) part.transcript = d[key];
    }
  }
})();

// P1/P2 整 Part 原文归一`,
  'inject iife',
);

fs.writeFileSync(F, src, 'utf8');
console.log(`共 ${ok} 处补丁写入 ${F}`);

// 磁盘裁决：重读文件逐项确认
const disk = fs.readFileSync(F, 'utf8');
const probes = [
  "I can\\'t stand doing it",
  'put it off to a quarter to three',
  'the dog umbrella，选 C',
  'apart from visiting museums',
  "from './petMock8ListeningTranscripts.js'",
  'PET_MOCK8_LISTENING_TRANSCRIPTS[test.meta?.id]',
];
let bad = 0;
for (const p of probes) {
  const hit = disk.includes(p);
  if (!hit) bad++;
  console.log(`${hit ? 'PASS' : 'FAIL'}: ${p}`);
}
process.exit(bad ? 1 : 0);
