// KET：探测各 PDF 中 "Key and transcripts" / Transcript 页码（1-based）
import fs from 'node:fs';
import * as mupdf from 'mupdf';

const BASE = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）';
const BOOKS = {
  'sch-1': `${BASE}/3-KET青少版官方真题（共12套）含青少版3/KET青少版官方真题 1/KET青少版官方真题1.pdf`,
  'sch-2': `${BASE}/3-KET青少版官方真题（共12套）含青少版3/KET青少版官方真题 2/KET青少版真题 2.pdf`,
  'std-1': `${BASE}/4-KET标准版官方真题（共8套）/KET标准版1/A2 KET新题型官方真题 1.pdf`,
  'std-2': `${BASE}/4-KET标准版官方真题（共8套）/KET标准版2/A2 KET新题型官方真题 2.pdf`,
  'trainer1': `${BASE}/1-KET Trainer1（共6套）/【全册+音频】/Trainer《剑桥KET官方模考题精讲精练1》.pdf`,
  'trainer2-ts': `${BASE}/2-KET Trainer2（共6套）/2.Trainer2听力原文/Trainer2听力原文.pdf`,
};

for (const [name, file] of Object.entries(BOOKS)) {
  const buf = fs.readFileSync(file);
  const doc = mupdf.Document.openDocument(new Uint8Array(buf), 'application/pdf');
  const total = doc.countPages();
  const hits = [];
  for (let i = 0; i < total; i++) {
    let text = '';
    try { text = doc.loadPage(i).toStructuredText().asText() || ''; } catch { hits.push(`${i + 1}: <text extract fail>`); continue; }
    const t = text.toLowerCase();
    const tags = [];
    if (t.includes('key and transcripts') || t.includes('answer key and transcripts')) tags.push('KEY&TS');
    if (/^transcripts?\b/m.test(t) || t.includes('transcript of recording')) tags.push('TS');
    if (/\btrack\s*\d+\b/.test(t)) tags.push('Track');
    if (t.includes('test 1') && tags.length) tags.push('T1ref');
    if (tags.length) hits.push(`${i + 1}:${tags.join('+')}`);
  }
  console.log(`== ${name} pages=${total}`);
  console.log(hits.join(' '));
}
