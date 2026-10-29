// 修正 petListeningData.js 中双引号 explanation 字符串里的无意义 \' 转义 → '
// 用法：node scripts/fix-useless-escapes.cjs
const fs = require('fs')
const FILE = 'd:/workspace_sunny/mars-cambridge/src/data/petListeningData.js'
let text = fs.readFileSync(FILE, 'utf8')

const re = /explanation:\s*"((?:[^"\\]|\\.)*)"/g
let count = 0
text = text.replace(re, (m, inner) => {
  const fixed = inner.replace(/\\'/g, "'")
  if (fixed !== inner) count++
  return `explanation: "${fixed}"`
})
fs.writeFileSync(FILE, text, 'utf8')
console.log(`fixed ${count} explanation strings`)
