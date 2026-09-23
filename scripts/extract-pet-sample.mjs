import fs from 'fs'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { PDFParse } = require('pdf-parse')

const base = 'D:/workspace_sunny/PET全真模拟试题（8套）/'
const file = base + 'PET8套全真模拟试题.pdf'

const dataBuffer = fs.readFileSync(file)

const parser = new PDFParse({ data: dataBuffer, verbosityLevel: 0 })
const result = await parser.getText()
console.log('Pages:', result.pages, 'Total text length:', result.total)

// Print text from pages that have content
for (let i = 0; i < result.text.length; i++) {
  const t = result.text[i]
  if (t && t.trim().length > 10) {
    console.log(`\n===== PAGE ${i+1} =====`)
    console.log(t.slice(0, 1500))
  }
}
