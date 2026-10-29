// 探测 PET 各真题 PDF 是否有文本层（真实路径）
const fs = require("fs");
const { PDFParse } = require("pdf-parse");

const ROOT = "D:\\workspace_sunny\\题库\\pet\\8. PET官方刷题材料（官方真题+模拟题等）";
const TARGETS = [
  { tag: "mock1-8 答案详解", path: ROOT + "\\PET全真模拟试题（8套）\\音频+电子版答案详解\\答案详解\\《PET8套全真模拟试题》电子版答案详解(1).pdf" },
  { tag: "mock9 PET3-T1 文稿", path: ROOT + "\\PET官方真题（含25年青少版真题3）\\PET真题 青少版（3册）\\PET青少版真题3（25年新增）\\分Test使用\\PET青少3 真题 Test 1\\PET3 - Test 1 参考答案&音频文稿.pdf" },
  { tag: "mock10 PET3-T2 文稿", path: ROOT + "\\PET官方真题（含25年青少版真题3）\\PET真题 青少版（3册）\\PET青少版真题3（25年新增）\\分Test使用\\PET青少3 真题 Test 2\\PET3 - Test 2 参考答案&音频文稿.pdf" },
  { tag: "mock13-16 青少1", path: ROOT + "\\PET官方真题（含25年青少版真题3）\\PET真题 青少版（3册）\\PET青少版真题1\\B1 PET青少版官方真题 新题型 1.pdf" },
  { tag: "mock17-20 青少2", path: ROOT + "\\PET官方真题（含25年青少版真题3）\\PET真题 青少版（3册）\\PET青少版真题2\\2022-B1 PRELIMINARY FOR SCHOOLS 2.pdf" },
];

async function probe(t) {
  if (!fs.existsSync(t.path)) { console.log(`[${t.tag}] missing`); console.log("  ", t.path); return; }
  const buf = fs.readFileSync(t.path);
  try {
    const parser = new PDFParse({ data: new Uint8Array(buf) });
    const { text } = await parser.getText();
    await parser.destroy();
    const total = text.length;
    const letters = (text.match(/[A-Za-z]/g) || []).length;
    console.log(`[${t.tag}] size=${buf.length} textLen=${total} letters=${letters}`);
    const lower = text.toLowerCase();
    ["transcript", "tape script", "tapescript", "rubric", "part 1", "listening"].forEach((kw) => {
      const idx = lower.indexOf(kw);
      if (idx >= 0) console.log(`    found "${kw}" @${idx}: ${text.slice(idx, idx + 100).replace(/\s+/g, " ")}`);
    });
    console.log(`    head300: ${text.slice(0, 300).replace(/\s+/g, " ")}\n`);
  } catch (e) { console.log(`[${t.tag}] parse error: ${e.message}\n`); }
}

(async () => { for (const t of TARGETS) { await probe(t); } })();
