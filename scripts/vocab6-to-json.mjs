/* 六级词汇 xls → JSON（乱序版全量，每 50 词一个 List）
 * 用法: node scripts/vocab6-to-json.mjs [xls路径] */
import XLSX from 'xlsx';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SRC = process.argv[2] || 'D:\\workspace_sunny\\题库\\cet\\CET-6\\六级词汇\\英语六级【词汇】\\大学英语六级词汇完整带音标-可打印-可编辑-乱序版.xls';
const OUT = join(ROOT, 'src/data/generated/cet6-vocab-full.js');

const wb = XLSX.read(readFileSync(SRC), { type: 'buffer' });
const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' });
const words = [];
for (const r of rows.slice(1)) {
  const [, word, ipa, meaning] = r;
  if (!word || typeof word !== 'string') continue;
  words.push({ w: word.trim(), ipa: String(ipa || '').trim(), zh: String(meaning || '').replace(/\s+/g, ' ').trim() });
}
if (words.length < 3000) { console.error('word count too small:', words.length); process.exit(1); }

// 去重（保留首次出现的释义）
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

const out = `/* CET-6 词汇全量词表（乱序版，${uniq.length} 词 / ${lists.length} 个 List，每 List 50 词）。
 * 来源：大学英语六级词汇完整带音标-可打印-可编辑-乱序版.xls（用户提供词表文件，逐词提取未改动释义）。
 * 结构：vocabLists6[ListIndex] = [{ w:单词, ipa:音标, zh:释义 }]。 */

export const vocabLists6 = ${JSON.stringify(lists, null, 0)};

export const VOCAB_META6 = {
  source: '大学英语六级词汇完整带音标-可打印-可编辑-乱序版.xls',
  total: ${uniq.length},
  listSize: ${LIST_SIZE},
  extractedAt: '${new Date().toISOString().slice(0, 10)}',
};
`;
writeFileSync(OUT, out);
console.log(`OK: ${uniq.length} words -> ${lists.length} lists -> ${OUT}`);
