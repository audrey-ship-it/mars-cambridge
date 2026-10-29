// 提取 PET 校园版 2/3 套题卷+答案页 + 校园版1 原文（溯源 Sea Lady/Masayoshi 来源）
const fs = require('fs')
const path = require('path')
const { PDFParse } = require('pdf-parse')

const OUT_DIR = 'd:/workspace_sunny/mars-cambridge/temp-pet-transcripts'
const BASE = 'D:/workspace_sunny/题库/pet/8. PET官方刷题材料（官方真题+模拟题等）/PET样题2020【新版】'

const files = [
  { out: 'sample2-qp.txt', p: BASE + '/PET校园版官方第二套样题/Preliminary for Schools Listening Sample Test 2 Question Paper.pdf' },
  { out: 'sample2-ak.txt', p: BASE + '/PET校园版官方第二套样题/Preliminary for Schools Listening Sample Test 2 Answer Key.pdf' },
  { out: 'sample3-qp.txt', p: BASE + '/PET校园版官方第三套样题/Preliminary for Schools Listening Sample Test 3 Question Paper.pdf' },
  { out: 'sample3-ak.txt', p: BASE + '/PET校园版官方第三套样题/Preliminary for Schools Listening Sample Test 3 MarkScheme.pdf' },
  { out: 'schools1-script.txt', p: BASE + '/PET校园版官方第一套样题/B1 Preliminary Schools 2022 sample tests Listening - script.pdf' },
  { out: 'schools1-ak.txt', p: BASE + '/PET校园版官方第一套样题/B1 Preliminary Schools 2022 sample tests Listening - AK.pdf' },
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
