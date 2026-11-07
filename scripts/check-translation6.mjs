// 校验 scripts/translation-json 下的 CET-6 翻译数据（只读，不生成文件）
import fs from 'node:fs'
import path from 'node:path'

const SRC = 'scripts/translation-json'
const files = fs.readdirSync(SRC).filter((f) => /^cet6-\d{4}-\d{2}-s\d\.json$/.test(f))
const ids = new Set()
let bad = 0
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(SRC, f), 'utf8'))
  const errs = []
  if (ids.has(j.id)) errs.push('id 重复')
  ids.add(j.id)
  if (!/^cet6-\d{4}-\d{2}-s\d$/.test(j.id)) errs.push('id 格式错误')
  const zh = (j.passage || '').replace(/[^\u4e00-\u9fa5]/g, '').length
  if (zh < 60) errs.push(`passage 汉字不足 60（实际 ${zh}）`)
  const enWords = (j.reference || '').split(/\s+/).filter(Boolean).length
  if (enWords < 40) errs.push(`reference 词数不足 40（实际 ${enWords}）`)
  if (!Array.isArray(j.notes) || j.notes.length < 4) errs.push('notes 少于 4 条')
  else if (j.notes.some((n) => !Array.isArray(n) || n.length !== 2 || !n[0] || !n[1])) errs.push('notes 条目格式须为 [中文, 英文]')
  if (!Array.isArray(j.points) || j.points.length < 3) errs.push('points 少于 3 条')
  if (j.reference && /[\u4e00-\u9fa5]/.test(j.reference)) errs.push('reference 含中文')
  if (j.passage && /[a-zA-Z]{4,}/.test((j.passage || '').replace(/[（(][^）)]*[）)]/g, ''))) errs.push('passage 含括注之外的英文（可能混入译文）')
  if (errs.length) {
    bad++
    console.log(`${j.id || f}: ${errs.join('; ')}`)
  }
}
console.log(`\n共 ${files.length} 套，问题 ${bad} 套`)
