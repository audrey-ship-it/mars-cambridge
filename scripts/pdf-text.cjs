// 测试 PDF 是否有文本层并输出指定页文本
const fs = require("fs");
async function main() {
  const { PDFParse } = await import("pdf-parse");
  const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(process.argv[2])) });
  await parser.load();
  const res = await parser.getText();
  const pages = res.pages || [];
  console.log("pages:", pages.length);
  const start = Number(process.argv[3] || 1);
  const end = Number(process.argv[4] || start);
  for (let p = start; p <= Math.min(end, pages.length); p++) {
    const page = pages[p - 1];
    const rawLines = page?.lines || (page?.text ? [{ str: page.text }] : []);
    const lines = Array.isArray(rawLines) ? rawLines : [{ str: String(rawLines) }];
    const text = lines.map((l) => l.str ?? (typeof l === "string" ? l : JSON.stringify(l))).join("\n");
    console.log(`=== page ${p} ===`);
    console.log(text);
  }
}
main().catch((e) => { console.error("ERR:", e.message); process.exit(1); });
