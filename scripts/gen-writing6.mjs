// 把 scripts/writing-json/*.json 生成为 src/data/generated/cet6-*-writing.js，
// 并重建 src/data/writingSets6.js（按考试时间由近到远排序）
// 用法: node scripts/gen-writing6.mjs
import fs from 'node:fs'
import path from 'node:path'

const SRC = 'scripts/writing-json'
const OUT = 'src/data/generated'

if (!fs.existsSync(SRC)) {
  console.error('缺少目录', SRC)
  process.exit(1)
}

const files = fs.readdirSync(SRC).filter((f) => /^cet6-\d{4}-\d{2}-s\d\.json$/.test(f))
const bad = []
const ok = []

for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(SRC, f), 'utf8'))
  const errs = []
  if (!j.id || !j.year || !j.month || !j.set) errs.push('缺少 id/year/month/set')
  if (!j.directions || !/150\s*words/.test(j.directions) || !/200\s*words/.test(j.directions)) errs.push('directions 缺少 150/200 词要求')
  if (!j.review || j.review.replace(/[^一-龥]/g, '').length < 25) errs.push('review 过短')
  if (!j.model || j.model.trim().split(/\s+/).length < 80) errs.push('model 过短')
  if (!j.modelZh || j.modelZh.replace(/[^一-龥]/g, '').length < 60) errs.push('modelZh 过短')
  if (!Array.isArray(j.points) || j.points.length < 3) errs.push('points 不足 3 条')
  if (errs.length) {
    bad.push(`${j.id || f}: ${errs.join('; ')}`)
    continue
  }
  const varName = `writing${j.year}${String(j.month).padStart(2, '0')}S${j.set}`
  const content = `/* ${j.title} CET-6 写作题。
 * 来源：${j.source}
 * 核对：${j.answerSource}
 * 验证状态：${j.verified ? 'verified — ' + (j.note || '题干与范文均与原件逐句核对') : '待复核'} */

export const ${varName} = ${JSON.stringify(
    {
      id: j.id,
      meta: {
        level: 'CET6',
        year: j.year,
        month: j.month,
        set: j.set,
        source: j.source,
        answerSource: j.answerSource,
        pages: j.pages || '',
        verified: j.verified !== false,
        verifiedAt: j.verifiedAt || '',
        ...(j.note ? { note: j.note } : {}),
      },
      title: j.title,
      topic: j.topic,
      directions: j.directions,
      minWords: 150,
      maxWords: 200,
      model: j.model,
      modelZh: j.modelZh,
      review: j.review,
      points: j.points,
    },
    null,
    2,
  )};
`
  fs.writeFileSync(path.join(OUT, `${j.id}-writing.js`), content)
  ok.push({ ...j, varName })
}

ok.sort((a, b) => b.year - a.year || b.month - a.month || b.set - a.set)
const reg = `/* CET-6 写作专项题库注册表。
 * 由 scripts/gen-writing6.mjs 扫描 src/data/generated/cet6-*-writing.js 生成，
 * 按考试时间由近到远排序，请勿手工维护顺序。 */

${ok.map((s) => `import { ${s.varName} } from './generated/${s.id}-writing.js';`).join('\n')}

export const writingSets6 = [
${ok.map((s) => `  ${s.varName},`).join('\n')}
];
`
fs.writeFileSync('src/data/writingSets6.js', reg)

console.log(`生成 ${ok.length} 套，失败 ${bad.length} 套`)
if (bad.length) bad.forEach((b) => console.log('  ✗ ' + b))
console.log('最新/最早:', ok[0]?.id || '-', '/', ok[ok.length - 1]?.id || '-')
