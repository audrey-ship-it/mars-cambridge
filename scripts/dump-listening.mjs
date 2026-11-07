// 从 docx 提取 CET-4 听力部分的题目和选项
import mammoth from 'mammoth'

const docxPath = process.argv[2]
const { value } = await mammoth.extractRawText({ path: docxPath })
const li = value.indexOf('Listening Comprehension')
const ti = value.indexOf('Translation', li)
const section = value.slice(li, ti > 0 ? ti : li + 8000)
const lines = section
  .split(/\n+/)
  .map((s) => s.replace(/\s+/g, ' ').trim())
  .filter(Boolean)

// 打印前 200 行看看结构
lines.slice(0, 200).forEach((l, i) => console.log(`${i}: ${l}`))
