// KET：Trainer2 听力原文 PDF（有文本层）按 Test 拆分文本 + sch3 四个 PDF 文本层探测
import fs from 'node:fs';
import * as mupdf from 'mupdf';

const BASE = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）';
const OUT = 'd:/workspace_sunny/mars-cambridge/scripts/_ket_out';
fs.mkdirSync(OUT, { recursive: true });

// 1) t2ts 29 页按 Test 拆分（页码映射经文本核实：T1=1-7 T2=8-13 T3=14-17 T4=18-20 T5=21-24 T6=25-29）
const T2TS = `${BASE}/2-KET Trainer2（共6套）/2.Trainer2听力原文/Trainer2听力原文.pdf`;
const ranges = { 1: [1, 7], 2: [8, 13], 3: [14, 17], 4: [18, 20], 5: [21, 24], 6: [25, 29] };
{
  const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(T2TS)), 'application/pdf');
  const pages = [];
  for (let i = 0; i < doc.countPages(); i++) pages.push(doc.loadPage(i).toStructuredText().asText() || '');
  for (const [t, [a, b]] of Object.entries(ranges)) {
    const txt = pages.slice(a - 1, b).join('\n---- page break ----\n');
    fs.writeFileSync(`${OUT}/t2ts-test${t}.txt`, txt);
    console.log(`t2ts-test${t}.txt: ${(txt.length / 1024).toFixed(1)} KB, pages ${a}-${b}`);
  }
}

// 2) sch3 四个小 PDF 文本层探测（若 >1000 字符/页 均有文本则直接整本导出）
for (let i = 1; i <= 4; i++) {
  const f = `${BASE}/3-KET青少版官方真题（共12套）含青少版3/KET青少版官方真题 3 （2025最新发布）/01 - 分套使用（含音频）/0${i} - KET 真题 3 - 第${i}套/03 KET真题 - 第${i}套 - 参考答案&音频文稿.pdf`;
  const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(f)), 'application/pdf');
  const pages = [];
  for (let p = 0; p < doc.countPages(); p++) pages.push(doc.loadPage(p).toStructuredText().asText() || '');
  const lens = pages.map((t) => t.length);
  console.log(`sch3-t${i}: ${pages.length} 页, 文本长度 [${lens.join(',')}]`);
  if (lens.every((l) => l > 200)) {
    fs.writeFileSync(`${OUT}/sch3-t${i}.txt`, pages.map((t, k) => `==== PDF page ${k + 1} ====\n${t}`).join('\n'));
    console.log(`  → 已导出 sch3-t${i}.txt`);
  }
}
