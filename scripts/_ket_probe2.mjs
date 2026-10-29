// KET 探测 v2：验证文本层是否存在 + 尝试 PDF 书签定位 Key and transcripts
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

function outline(nodes, depth, out) {
  for (const n of nodes || []) {
    let page = '';
    try { page = typeof n.page === 'number' ? `p${n.page + 1}` : ''; } catch {}
    out.push(`${'  '.repeat(depth)}${n.title} ${page}`);
    if (n.down) outline(n.down, depth + 1, out);
  }
}

for (const [name, file] of Object.entries(BOOKS)) {
  const buf = fs.readFileSync(file);
  const doc = mupdf.Document.openDocument(new Uint8Array(buf), 'application/pdf');
  const total = doc.countPages();
  let out = [];
  try { outline(doc.getOutline(), 0, out); } catch (e) { out = [`<outline err: ${e.message}>`]; }
  // 文本层检查：第1、10页字符数
  const t1 = (() => { try { return doc.loadPage(0).toStructuredText().asText().length; } catch { return -1; } })();
  const t10 = (() => { try { return doc.loadPage(9).toStructuredText().asText().length; } catch { return -1; } })();
  console.log(`== ${name} pages=${total} textLen(p1)=${t1} textLen(p10)=${t10}`);
  console.log(out.length ? out.slice(0, 60).join('\n') : '<no outline>');
}
