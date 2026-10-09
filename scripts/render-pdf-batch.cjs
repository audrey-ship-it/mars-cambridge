// Render a list of specific PDF pages (not necessarily contiguous) in one pass.
// Usage: node scripts/render-pdf-batch.cjs "<pdfPath>" "<outDir>" "<comma-separated-pages>" [scale]
const fs = require("fs");
const path = require("path");
const { createCanvas } = require("@napi-rs/canvas");

async function renderList(pdfPath, outDir, pages, scale = 2.0) {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const buf = fs.readFileSync(pdfPath);
  const wasmUrl = path.join(__dirname, "..", "node_modules", "pdfjs-dist", "wasm").replace(/\\/g, "/") + "/";
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buf), wasmUrl }).promise;
  fs.mkdirSync(outDir, { recursive: true });
  for (const p of pages) {
    if (p < 1 || p > doc.numPages) {
      console.log(`skip page ${p} (out of range 1-${doc.numPages})`);
      continue;
    }
    const page = await doc.getPage(p);
    const viewport = page.getViewport({ scale });
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext("2d");
    await page.render({ canvasContext: ctx, viewport }).promise;
    const png = canvas.toBuffer("image/png");
    fs.writeFileSync(path.join(outDir, `page-${String(p).padStart(3, "0")}.png`), png);
    console.log(`rendered page ${p}`);
  }
  console.log("done");
}

const [pdfPath, outDir, pagesStr, scale] = process.argv.slice(2);
const pages = String(pagesStr).split(",").map((s) => Number(s.trim()));
renderList(pdfPath, outDir, pages, Number(scale || 2.0)).catch((e) => {
  console.error(e.message);
  process.exit(1);
});
