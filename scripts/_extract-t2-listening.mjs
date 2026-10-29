// 一次性：提取 Trainer2听力原文.pdf 文本层（含 Track 编号与每套题五部分转写）。
import fs from 'fs'
import * as mupdf from 'mupdf'

const file = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）/2-KET Trainer2（共6套）/2.Trainer2听力原文/Trainer2听力原文.pdf'
const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
const total = doc.countPages()
console.log('pages', total)
let out = ''
for (let i = 0; i < total; i++) {
  const text = doc.loadPage(i).toStructuredText().asText()
  out += `\n===== PDF ${i + 1} =====\n${text}\n`
}
fs.writeFileSync('scripts/_trainer2_pages/listening-transcripts.txt', out)
console.log('written chars', out.length)
