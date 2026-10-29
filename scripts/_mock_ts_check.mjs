// 数据面核验：FCE/PET 听力套题 transcript 覆盖统计（整 Part 或题级齐全视为可用）
import { pathToFileURL } from 'node:url';
const B = 'd:/workspace_sunny/mars-cambridge/src/data/';
const load = async (f) => import(pathToFileURL(B + f));

const stat = (name, tests) => {
  if (!Array.isArray(tests)) { console.log(`${name}: 非数组，跳过`); return; }
  let okSets = 0;
  const issues = [];
  for (const t of tests) {
    const parts = t.parts || {};
    const probs = [];
    for (const pn of ['1', '2', '3', '4']) {
      const part = parts[pn];
      if (!part) { probs.push(`P${pn} 缺`); continue; }
      const whole = typeof part.transcript === 'string' && part.transcript.trim();
      const items = part.items || [];
      const itemTs = items.filter((it) => typeof it.transcript === 'string' && it.transcript.trim()).length;
      if (!whole && itemTs === 0) probs.push(`P${pn} 无 transcript`);
      else if (!whole && itemTs < items.length) probs.push(`P${pn} 题级 ${itemTs}/${items.length}`);
    }
    if (probs.length) issues.push(`${t.meta?.id || '?'}: ${probs.join(', ')}`);
    else okSets++;
  }
  console.log(`${name}: ${okSets}/${tests.length} 套 Part 级可用${issues.length ? '\n  ' + issues.join('\n  ') : ''}`);
};

const pickArr = (mod) => Object.values(mod).find((v) => Array.isArray(v) && v.length && v[0]?.parts);

for (const [label, file, hint] of [
  ['FCE 全真模拟', 'fceListeningTests.js', 'fceListeningTests'],
  ['FCE 标准版', 'fceStandardListeningTests.js', 'fceStandardListeningTests'],
  ['FCE 校园版', 'fceSchoolsListeningTests.js', 'fceSchoolsListeningTests'],
  ['PET 全真模拟', 'petListeningData.js', 'petListeningTests'],
  ['PET 官方样题', 'petListeningSamples.js', ''],
  ['PET 标准版', 'petListeningStandard.js', ''],
  ['PET Trainer1', 'petTrainer1Listening.js', ''],
  ['PET Trainer2', 'petTrainer2Listening.js', ''],
]) {
  try {
    const mod = await load(file);
    const arr = hint ? mod[hint] : pickArr(mod);
    if (!arr) { console.log(`${label}: 未找到数组导出（exports: ${Object.keys(mod).join(',')}）`); continue; }
    stat(label, arr);
  } catch (e) {
    console.log(`${label}: 加载失败 — ${String(e.message).slice(0, 120)}`);
  }
}
