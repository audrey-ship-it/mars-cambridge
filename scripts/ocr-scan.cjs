// OCR 扫描页面，输出每页前 120 字符用于定位
const { createWorker } = require("tesseract.js");
const fs = require("fs");

async function scan(dir, outFile) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png")).sort();
  const worker = await createWorker("eng");
  const lines = [];
  for (const f of files) {
    const { data } = await worker.recognize(`${dir}/${f}`);
    const text = data.text.replace(/\s+/g, " ").trim();
    lines.push(`=== ${f} ===\n${data.text}\n`);
    console.log(f, "=>", text.slice(0, 100));
  }
  fs.writeFileSync(outFile, lines.join("\n"));
  await worker.terminate();
  console.log("saved to", outFile);
}

const [dir, outFile] = process.argv.slice(2);
scan(dir, outFile).catch((e) => { console.error(e.message); process.exit(1); });
