// 查看某套题若干题号在解析文本中的上下文（供人工/代理核对答案）
// 用法: node scripts/lookup-answer.mjs <id> <题号...>
import fs from 'node:fs'
import path from 'node:path'

const SHARED = {
  'cet6-2021-12-s3': 'cet6-2021-12-s2',
  'cet6-2022-06-s3': 'cet6-2022-06-s2',
  'cet6-2022-09-s2': 'cet6-2022-09-s1',
  'cet6-2022-09-s3': 'cet6-2022-09-s1',
  'cet6-2023-03-s2': 'cet6-2023-03-s1',
  'cet6-2023-03-s3': 'cet6-2023-03-s1',
}

const [id, ...nums] = process.argv.slice(2)
if (!id) {
  console.error('用法: node scripts/lookup-answer.mjs <id> <题号...>')
  process.exit(1)
}
const src = SHARED[id] || id
const cache = path.join('scripts/ocr', `${src}.txt`)
if (!fs.existsSync(cache)) {
  console.error('未找到解析缓存:', cache)
  process.exit(1)
}
const text = fs.readFileSync(cache, 'utf8')
const list = nums.length ? nums.map(Number) : Array.from({ length: 30 }, (_, i) => i + 26)
for (const n of list) {
  const re = new RegExp(`(?:^|[^\\d])(${n})(?:[^\\d]|$)`, 'g')
  const hits = []
  let m
  while ((m = re.exec(text)) !== null) hits.push(m.index)
  console.log(`\n========== ${n}  (共 ${hits.length} 处) ==========`)
  hits.slice(0, 4).forEach((pos, i) => {
    const start = Math.max(0, pos - 120)
    const seg = text.slice(start, pos + 480).replace(/\n{2,}/g, '\n')
    console.log(`--- 命中 ${i + 1} ---\n${seg}\n`)
  })
  if (!hits.length) console.log('(解析文本中未出现该题号)')
}
