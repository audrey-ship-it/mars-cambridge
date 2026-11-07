/* 解析四级词汇 xls → 提取结构查看（临时探查脚本） */
import XLSX from 'xlsx';
import { readFileSync, writeFileSync } from 'node:fs';

const path = process.argv[2];
const wb = XLSX.read(readFileSync(path), { type: 'buffer' });
console.log('sheets:', wb.SheetNames);
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
console.log('total rows:', rows.length);
console.log('first 5 rows:');
rows.slice(0, 5).forEach((r, i) => console.log(i, JSON.stringify(r).slice(0, 300)));
console.log('row 200:', JSON.stringify(rows[200]).slice(0, 300));
console.log('last row:', JSON.stringify(rows[rows.length - 1]).slice(0, 300));
