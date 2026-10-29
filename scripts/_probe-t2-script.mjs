// 探测 Test 1 听力音频文稿 PDF：页数 + 文本层尝试。
import fs from 'fs'
import * as mupdf from 'mupdf'

const file = 'D:/workspace_sunny/题库/ket/8-KET刷题材料（真题+模拟题等）/2-KET Trainer2（共6套）/1.Trainer2学生用书/Trainer 2 TEST 1/Trainer 2 - Test 1听力音频文稿.pdf'
const doc = mupdf.Document.openDocument(new Uint8Array(fs.readFileSync(file)), 'application/pdf')
const total = doc.countPages()
console.log('pages', total)
for (let i = 0; i < Math.min(total, 3); i++) {
  const t = doc.loadPage(i).toStructuredText().asText()
  console.log(`--- page ${i + 1} text (${t.length} chars) ---`)
  console.log(t.slice(0, 600))
}
