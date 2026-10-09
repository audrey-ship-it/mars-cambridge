const fs = require("fs");
const path = require("path");

async function main() {
  const pdfjs = require("pdfjs-dist/build/pdf.js");
  const pdfPath = process.argv[2];
  const startPage = Number(process.argv[3] || 1);
  const endPage = Number(process.argv[4] || startPage);
  const outDir = process.argv[5];
  const scale = Number(process.argv[6] || 1.5);
  const { createCanvas } = require("@napi-rs/canvas");

  // v3: 设置 worker
  pdfjs.GlobalWorkerOptions.workerSrc = path.join(__dirname, "..", "node_modules", "pdfjs-dist", "build", "pdf.worker.js");

  const buf = fs.readFileSync(pdfPath);
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf) }).promise;
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
      console.log(`rendered page ${p} (${viewport.width}x${viewport.height})`);
    }
  }
  process.exit(0);
}
main().catch(e => { console.error("ERR:", e.message, e.stack?.slice(0, 500)); process.exit(1); });
