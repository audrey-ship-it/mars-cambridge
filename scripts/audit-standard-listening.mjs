import fs from 'node:fs'
import path from 'node:path'
import { parse } from '@babel/parser'

const projectRoot = path.resolve(import.meta.dirname, '..')
const sourcePath = path.join(projectRoot, 'src/pages/CambridgeListening.jsx')
const source = fs.readFileSync(sourcePath, 'utf8')
const ast = parse(source, { sourceType: 'module', plugins: ['jsx'] })

const wanted = new Set([
  'OFFICIAL_PART1_SETS',
  'OFFICIAL_PART2_SETS',
  'OFFICIAL_PART3_SETS',
  'OFFICIAL_PART4_SETS',
  'OFFICIAL_PART5_SETS',
])

function keyValue(node) {
  if (node.type === 'Identifier') return node.name
  if (node.type === 'StringLiteral' || node.type === 'NumericLiteral') return String(node.value)
  throw new Error(`Unsupported object key: ${node.type}`)
}

function literalValue(node) {
  if (!node) return undefined
  if (node.type === 'StringLiteral' || node.type === 'NumericLiteral' || node.type === 'BooleanLiteral') return node.value
  if (node.type === 'NullLiteral') return null
  // Some non-standard sets reuse another constant. The audit only reads sets
  // 13-20, whose values are fully literal, so referenced legacy sets can stay
  // unresolved here.
  if (node.type === 'Identifier') return undefined
  if (node.type === 'ArrayExpression') return node.elements.map(literalValue)
  if (node.type === 'ObjectExpression') {
    return Object.fromEntries(node.properties.map(property => {
      if (property.type !== 'ObjectProperty') throw new Error(`Unsupported object member: ${property.type}`)
      return [keyValue(property.key), literalValue(property.value)]
    }))
  }
  if (node.type === 'UnaryExpression' && node.operator === '-' && node.argument.type === 'NumericLiteral') return -node.argument.value
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0) return node.quasis[0].value.cooked
  throw new Error(`Unsupported value in listening data: ${node.type}`)
}

const setsByPart = {}
for (const statement of ast.program.body) {
  if (statement.type !== 'VariableDeclaration') continue
  for (const declaration of statement.declarations) {
    if (declaration.id.type !== 'Identifier' || !wanted.has(declaration.id.name)) continue
    const part = Number(declaration.id.name.match(/PART(\d)/)?.[1])
    setsByPart[part] = literalValue(declaration.init)
  }
}

const errors = []
const rows = []

for (let setId = 13; setId <= 20; setId += 1) {
  const book = setId <= 16 ? 1 : 2
  const test = ((setId - 13) % 4) + 1
  const row = { setId, book, test, answers: {} }

  for (let part = 1; part <= 5; part += 1) {
    const data = setsByPart[part]?.[setId]
    if (!data) {
      errors.push(`Set ${setId} Part ${part}: missing interactive data`)
      continue
    }

    const items = part === 1 ? data : data.items
    if (!Array.isArray(items) || items.length !== 5) {
      errors.push(`Set ${setId} Part ${part}: expected 5 items, found ${items?.length ?? 0}`)
      continue
    }

    if (part === 1) {
      items.forEach((item, index) => {
        if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer > 2) errors.push(`Set ${setId} Part 1 Q${index + 1}: invalid answer`)
        const imagePath = path.join(projectRoot, 'public', String(item.image || '').replace(/^\//, ''))
        if (!fs.existsSync(imagePath)) errors.push(`Set ${setId} Part 1 Q${index + 1}: missing image ${item.image}`)
      })
    }

    if (part === 3 || part === 4) {
      items.forEach((item, index) => {
        const options = item.options || item.opts
        if (!Array.isArray(options) || options.length !== 3) errors.push(`Set ${setId} Part ${part} Q${index + 1}: expected 3 options`)
        if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer > 2) errors.push(`Set ${setId} Part ${part} Q${index + 1}: invalid answer`)
      })
    }

    if (part === 5) {
      if (!Array.isArray(data.options) || data.options.length !== 8) errors.push(`Set ${setId} Part 5: expected 8 options`)
      items.forEach((item, index) => {
        if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= data.options.length) errors.push(`Set ${setId} Part 5 Q${index + 1}: invalid answer`)
      })
    }

    const audioPath = path.join(projectRoot, `public/audio/standard-listening/book-${book}/test-${test}/part-${part}.mp3`)
    if (!fs.existsSync(audioPath) || fs.statSync(audioPath).size === 0) errors.push(`Set ${setId} Part ${part}: missing or empty audio`)

    row.answers[part] = items.map(item => {
      if (part === 2) return Array.isArray(item.answer) ? item.answer[0] : item.answer
      return Number(item.answer) + 1
    })
  }
  rows.push(row)
}

console.log('标准版听力审计：8套，40个 Part，200道题')
for (const row of rows) {
  const answerSummary = Object.entries(row.answers).map(([part, answers]) => `P${part} ${answers.join('/')}`).join(' | ')
  console.log(`- Set ${row.setId}（Book ${row.book} Test ${row.test}）: ${answerSummary}`)
}

if (errors.length) {
  console.error(`\n失败（${errors.length}）：`)
  errors.forEach(error => console.error(`- ${error}`))
  process.exitCode = 1
} else {
  console.log('\n通过：8套均包含5个完整 Part；题量、选项、答案范围、Part 1图片和40个音频文件均完整。')
}
