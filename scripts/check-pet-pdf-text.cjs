// Check text extractability of PET transcript source PDFs
const fs = require('fs')
const { PDFParse } = require('pdf-parse')

const BASE = 'D:/workspace_sunny/题库/pet/8. PET官方刷题材料（官方真题+模拟题等）'
const candidates = [
  BASE + '/PET官方真题（含25年青少版真题3）/PET真题 青少版（3册）/PET青少版真题3（25年新增）/分Test使用/PET青少3 真题 Test 1/PET3 - Test 1 参考答案&音频文稿.pdf',
  BASE + '/PET样题2020【新版】/2020PET_Sample Test 2/2.真题样卷答案/3.听力原文B1 Preliminary Schools 2020 sample tests Listening - script.pdf',
  BASE + '/PET样题2020【新版】/PET校园版官方第二套样题/Preliminary for Schools Listening Sample Test 2 Tapescript.pdf',
  BASE + '/PET样题2020【新版】/PET校园版官方第三套样题/Preliminary for Schools Listening Sample Test 3 TapeScript.pdf',
  BASE + '/PET样题2020【新版】/PET校园版官方第一套样题/B1 Preliminary Schools 2022 sample tests Listening - script.pdf',
]

async function main() {
  for (const p of candidates) {
    try {
      const st = fs.statSync(p)
      if (st.isDirectory()) { console.log(p, '→ [directory]'); continue }
      const buf = fs.readFileSync(p)
      const parser = new PDFParse({ data: new Uint8Array(buf) })
      const result = await parser.getText()
      const text = (result.text || '').trim()
      console.log('='.repeat(60))
      console.log(p.split('/').pop(), '| pages:', result.total || '?', '| text chars:', text.length)
      console.log('sample:', JSON.stringify(text.slice(0, 300)))
      await parser.destroy()
    } catch (e) {
      console.log('ERROR', p.split('/').pop(), e.message.slice(0, 100))
    }
  }
}
main()
