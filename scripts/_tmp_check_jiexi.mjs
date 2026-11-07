// 校验 CET-6 听力 raw 与生成数据完整性
import fs from 'node:fs'
import path from 'node:path'

const CFG = JSON.parse(fs.readFileSync('scripts/listening-config.json', 'utf8'))
const ITEMS = [
  ['conv1', 1, 4], ['conv2', 5, 8], ['pass1', 9, 11], ['pass2', 12, 15],
  ['rec1', 16, 18], ['rec2', 19, 21], ['rec3', 22, 25],
]
const bad = []
for (const set of CFG.sets) {
  if (set.copyOf) continue
  const rawFile = `scripts/listening-raw/${set.id}.jiexi.json`
  if (!fs.existsSync(rawFile)) { bad.push([set.id, 'missing-jiexi']); continue }
  const jx = JSON.parse(fs.readFileSync(rawFile, 'utf8'))
  const problems = []
  for (const [key, from, to] of ITEMS) {
    const t = jx.transcripts?.[key]
    if (!t || t.length < 300) problems.push(`T:${key}=${(t || '').length}`)
    for (let n = from; n <= to; n++) {
      if (!jx.stems?.[n]) problems.push(`S:${n}`)
      if (!/^[A-D]$/.test(jx.answers?.[n] || '')) problems.push(`A:${n}`)
      if (t && !t.includes(`[${n}]`) ) problems.push(`M:${n}`)
    }
  }
  if (problems.length) bad.push([set.id, problems.join(',')])
}
console.log(bad.length ? JSON.stringify(bad, null, 1) : 'ALL RAW OK')
