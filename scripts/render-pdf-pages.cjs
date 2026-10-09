const fs = require("fs");
const path = require("path");
const { createCanvas } = require("@napi-rs/canvas");

async function renderPages(pdfPath, startPage, endPage, outDir, scale = 2.0) {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const buf = fs.readFileSync(pdfPath);
  const wasmUrl = path.join(__dirname, "..", "node_modules", "pdfjs-dist", "wasm").replace(/\\/g, "/") + "/";
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buf), wasmUrl }).promise;
  fs.mkdirSync(outDir, { recursive: true });
  const total = doc.numPages;
  const end = Math.min(endPage, total);
  for (let p = startPage; p <= end; p++) {
    const page = await doc.getPage(p);
    const viewport = page.getViewport({ scale });
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext("2d");
    await page.render({ canvasContext: ctx, viewport }).promise;
    const png = canvas.toBuffer("image/png");
    fs.writeFileSync(path.join(outDir, `page-${String(p).padStart(3, "0")}.png`), png);
    console.log(`rendered page ${p} (${viewport.width}x${viewport.height})`);
  }
  console.log("done", total, "pages total");
}

const [pdfPath, start, end, outDir, scale] = process.argv.slice(2);
renderPages(pdfPath, Number(start), Number(end), outDir, Number(scale || 2.0)).catch((e) => {
  console.error(e.message);
  process.exit(1);
});
