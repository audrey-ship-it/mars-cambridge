// 导出受影响 set/part 的完整转录与相关题解析，供人工补证据引句
// 用法：node scripts/_ket_diag2.mjs
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const ROOT = 'd:/workspace_sunny/mars-cambridge';
const OFFICIAL_DATA = JSON.parse(fs.readFileSync(`${ROOT}/scripts/_ket_out/official-data.json`, 'utf8'));
const { KET_OFFICIAL_LISTENING_ENRICH, applyKetOfficialEnrich } = await import(
  pathToFileURL(`${ROOT}/src/data/ketOfficialListeningTranscripts.js`)
);

// 受影响清单：setId → [part, qIndex...]
const TARGETS = {
  5: [[5, 4], [5, 5]],
  6: [[3, 5], [4, 1]],
  13: [[4, 3], [4, 4], [4, 5]],
  17: [[4, 3]],
  19: [[3, 4], [3, 5], [4, 4], [4, 5]],
  20: [[3, 1], [3, 3], [3, 5], [4, 3], [4, 4]],
  25: [[5, 1], [5, 2], [5, 3]],
  31: [[5, 1]],
};

const seenParts = new Set();
for (const [idS, list] of Object.entries(TARGETS)) {
  const id = Number(idS);
  const entry = KET_OFFICIAL_LISTENING_ENRICH[idS];
  for (const [p, q] of list) {
    const key = `${id}:${p}`;
    const merged = applyKetOfficialEnrich(String(p), {
      [idS]: Array.isArray(OFFICIAL_DATA[idS][String(p)]) ? { items: OFFICIAL_DATA[idS][String(p)] } : OFFICIAL_DATA[idS][String(p)],
    });
    const part = merged[idS];
    if (!seenParts.has(key)) {
      seenParts.add(key);
      console.log(`\n########## set${id} PART ${p} TRANSCRIPT ##########`);
      console.log(part.transcript);
    }
    const it = part.items[q - 1];
    console.log(`\n----- set${id} P${p}Q${q} -----`);
    console.log(`题干: ${String(it.q).slice(0, 160)}`);
    if (it.opts) console.log(`选项: ${it.opts.map((o, i) => String.fromCharCode(65 + i) + '.' + o).join('  |  ')}`);
    console.log(`答案: ${Array.isArray(it.answer) ? it.answer.join(' / ') : String.fromCharCode(65 + Number(it.answer))}`);
    console.log(`解析: ${it.explanation}`);
  }
}
