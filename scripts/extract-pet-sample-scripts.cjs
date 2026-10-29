// Extract full text from PET sample script PDFs (text-layer PDFs)
const fs = require('fs')
const path = require('path')
const { PDFParse } = require('pdf-parse')

const OUT_DIR = 'd:/workspace_sunny/mars-cambridge/temp-pet-transcripts'
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const BASE = 'D:/workspace_sunny/题库/pet/8. PET官方刷题材料（官方真题+模拟题等）'
const files = [
  { out: 'sample1-script.txt', p: BASE + '/PET样题2020【新版】/2020PET_Sample Test 1/2.真题答案/3.听力原文B1 Preliminary 2020 sample Listening - tape script.pdf' },
  { out: 'sample2-script.txt', p: BASE + '/PET样题2020【新版】/PET校园版官方第二套样题/Preliminary for Schools Listening Sample Test 2 Tapescript.pdf' },
  { out: 'sample3-script.txt', p: BASE + '/PET样题2020【新版】/PET校园版官方第三套样题/Preliminary for Schools Listening Sample Test 3 TapeScript.pdf' },
]

const sample1Candidates = []

async function extract(outName, p) {
  const buf = fs.readFileSync(p)
  const parser = new PDFParse({ data: new Uint8Array(buf) })
  const result = await parser.getText()
  fs.writeFileSync(path.join(OUT_DIR, outName), result.text, 'utf8')
  console.log(outName, '→', (result.text || '').length, 'chars')
  await parser.destroy()
}

async function main() {
  for (const f of files) {
    try { await extract(f.out, f.p) } catch (e) { console.log('ERR', f.out, e.message) }
  }
  // find sample1 script anywhere
  for (const c of sample1Candidates) {
    if (fs.existsSync(c)) { await extract('sample1-script.txt', c); break }
  }
}
main()
