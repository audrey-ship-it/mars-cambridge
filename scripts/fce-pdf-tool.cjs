const fs = require("fs");
const path = require("path");

async function main() {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const pdfPath = process.argv[2];
  const startPage = Number(process.argv[3] || 1);
  const endPage = Number(process.argv[4] || startPage);
  const outDir = process.argv[5];
  const scale = Number(process.argv[6] || 2.0);
  const { createCanvas } = require("@napi-rs/canvas");
  
  const buf = fs.readFileSync(pdfPath);
  const root = path.join(__dirname, "..", "node_modules", "pdfjs-dist").replace(/\\/g, "/");
  const params = {
    data: new Uint8Array(buf),
    isEvalSupported: false,
    standardFontDataUrl: root + "/standard_fonts/",
    wasmUrl: root + "/wasm/",
  };
  const doc = await pdfjsLib.getDocument(params).promise;
  console.log("total pages:", doc.numPages);
  
  const end = Math.min(endPage, doc.numPages);
  if (outDir) {
    fs.mkdirSync(outDir, { recursive: true });
    for (let p = startPage; p <= end; p++) {
      const page = await doc.getPage(p);
      const viewport = page.getViewport({ scale });
      const canvas = createCanvas(viewport.width, viewport.height);
      const ctx = canvas.getContext("2d");
      await page.render({ canvasContext: ctx, viewport }).promise;
      const png = canvas.toBuffer("image/png");
      fs.writeFileSync(path.join(outDir, `page-${String(p).padStart(3, "0")}.png`), png);
      console.log(`rendered page ${p}`);
    }
  } else {
    // 只输出文字
    for (let p = startPage; p <= end; p++) {
      const page = await doc.getPage(p);
      const tc = await page.getTextContent();
      const text = tc.items.map(i => i.str).join(" ");
      console.log(`=== page ${p} ===`);
      console.log(text.slice(0, 2000));
    }
  }
  process.exit(0);
}
main().catch(e => { console.error("ERR:", e.message); process.exit(1); });
