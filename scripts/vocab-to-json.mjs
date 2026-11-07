/* 四级词汇 xls → JSON（乱序版全量 4428 词，每 50 词一个 List） */
import XLSX from 'xlsx';
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = process.argv[2];
const OUT = new URL('../src/data/generated/cet4-vocab-full.js', import.meta.url).pathname.replace(/^\/(\w:)/, '$1');

const wb = XLSX.read(readFileSync(SRC), { type: 'buffer' });
const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' });
const words = [];
for (const r of rows.slice(1)) {
  const [no, word, ipa, meaning] = r;
  if (!word || typeof word !== 'string') continue;
  words.push({ w: word.trim(), ipa: String(ipa || '').trim(), zh: String(meaning || '').replace(/\s+/g, ' ').trim() });
}
if (words.length < 4000) { console.error('word count too small:', words.length); process.exit(1); }

// 清洗：去重复词（保留首次出现的释义）
const seen = new Set();
const uniq = words.filter((x) => {
  const k = x.w.toLowerCase();
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

const LIST_SIZE = 50;
const lists = [];
for (let i = 0; i < uniq.length; i += LIST_SIZE) lists.push(uniq.slice(i, i + LIST_SIZE));

const out = `/* CET-4 词汇全量词表（乱序版，${uniq.length} 词 / ${lists.length} 个 List，每 List 50 词）。
 * 来源：大学英语四级词汇完整带音标-可打印-可编辑-乱序版.xls（用户提供词表文件，逐词提取未改动释义）。
 * 结构：lists[ListIndex] = [{ w:单词, ipa:音标, zh:释义 }]。 */

export const vocabLists = ${JSON.stringify(lists, null, 0)};

export const VOCAB_META = {
  source: '大学英语四级词汇完整带音标-可打印-可编辑-乱序版.xls',
  total: ${uniq.length},
  listSize: ${LIST_SIZE},
  extractedAt: '2026-10-13',
};
`;
writeFileSync(OUT, out);
console.log(`OK: ${uniq.length} words -> ${lists.length} lists -> ${OUT}`);
