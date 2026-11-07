// 临时调试：查看 mammoth 提取文本中指定题号所在行
import mammoth from 'mammoth'

const docxPath = process.argv[2]
const nums = process.argv[3] || '44,49,52,54'
const { value } = await mammoth.extractRawText({ path: docxPath })
const lines = value.split(/\n+/).map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean)
const list = nums.split(',')
for (const n of list) {
  const re = new RegExp(`(^|\\s)${n}\\.`, 'i')
  lines.forEach((l, i) => {
    if (re.test(l)) console.log(`[行${i}] ${l.slice(0, 160)}`)
  })
  console.log('---')
}
