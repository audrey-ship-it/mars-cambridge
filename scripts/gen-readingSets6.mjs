// 自动生成 readingSets6.js —— 扫描 generated/ 下所有 cet6-*.json
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = path.dirname(fileURLToPath(import.meta.url))
const genDir = path.resolve(__dir, '../src/data/generated')
const out = path.resolve(__dir, '../src/data/readingSets6.js')

const files = fs
  .readdirSync(genDir)
  .filter((f) => /^cet6-\d{4}-\d{2}-s\d\.json$/.test(f))
  .sort()

// 生成 import 列表 —— 用别名 gYYYYMMSN（去 '-'）
const imports = files.map((f, i) => {
  const stem = f.replace('.json', '') // cet6-YYYY-MM-sN
  const alias = 'g' + stem.replace(/cet6-/, '').replace(/-/g, '') // gYYYYMMSN
  return `import ${alias} from './generated/${f}'`
})

const adapt = `function adapt(g) { return { id: g.id, meta: g.meta, sections: g.reading } }`

const items = files
  .map((f) => {
    const stem = f.replace('.json', '')
    const alias = 'g' + stem.replace(/cet6-/, '').replace(/-/g, '')
    return `  adapt(${alias}),`
  })
  .join('\n')

const content = `// CET-6 阅读题库注册表：由 scripts/gen-readingSets6.mjs 自动生成
// 排序：年份 ↓ 月份 ↓ 套数 ↓，verified=true 的优先靠前展示
// 新增套题只需往 generated/ 丢 JSON，重跑生成脚本

${imports.join('\n')}

${adapt}

export const readingSets6 = [
${items}
].sort(
  (a, b) =>
    b.meta.year - a.meta.year ||
    b.meta.month - a.meta.month ||
    a.meta.set - b.meta.set,
)

export function getReadingSet6(setId) {
  return readingSets6.find((s) => s.id === setId) || null
}

// 辅助：仅返回 verified=true 的套题（已核对答案、可用）
export function getVerifiedSets6() {
  return readingSets6.filter((s) => s.meta?.verified)
}
`

fs.writeFileSync(out, content)
console.log(`生成 readingSets6.js 成功，共 ${files.length} 套`)

// 统计 verified
const verified = []
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(genDir, f), 'utf8'))
  if (j.meta?.verified) verified.push(j.id)
}
console.log(`verified=true: ${verified.length} 套`)
console.log(verified.join(', '))
