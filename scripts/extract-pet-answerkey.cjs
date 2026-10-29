// 提取 PET Sample Test 1 官方听力题卷 + 答案页文本
const fs = require('fs')
const path = require('path')
const { PDFParse } = require('pdf-parse')

const OUT_DIR = 'd:/workspace_sunny/mars-cambridge/temp-pet-transcripts'
const BASE = 'D:/workspace_sunny/题库/pet/8. PET官方刷题材料（官方真题+模拟题等）/PET样题2020【新版】'

const files = [
  { out: 'sample1-qp.txt', p: BASE + '/2020PET_Sample Test 1/1.真题样卷及听力音频/3.听力B1 Preliminary 2020 sample Listening - question paper+V：henghaheiheihei.pdf' },
  { out: 'sample1-ak.txt', p: BASE + '/2020PET_Sample Test 1/2.真题答案/2.听力答案B1 Preliminary 2020 sample Listening - answer key.pdf' },
]

async function main() {
  for (const f of files) {
    try {
      const buf = fs.readFileSync(f.p)
      const parser = new PDFParse({ data: new Uint8Array(buf) })
      const result = await parser.getText()
      fs.writeFileSync(path.join(OUT_DIR, f.out), result.text, 'utf8')
      console.log(f.out, '→', (result.text || '').length, 'chars')
      await parser.destroy()
    } catch (e) {
      console.log('ERR', f.out, e.message)
    }
  }
}
main()
