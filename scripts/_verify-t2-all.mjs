// 一次性核查：Trainer 2 阅读/写作/口语录入完整性。
import fs from 'fs'
import path from 'path'

const { ketReadingTrainer2Tests } = await import('../src/data/ketReadingTrainer2.js')
const { KET_TRAINER2_WRITING } = await import('../src/data/ketWritingTrainer2.js')
const { KET_TRAINER2_SPEAKING } = await import('../src/data/ketSpeakingTrainer2.js')

let problems = []

for (let n = 1; n <= 6; n++) {
  const id = `ket-trainer2-test${n}`

  // ── 阅读 ──
  const r = ketReadingTrainer2Tests.find(t => t.id === id)
  if (!r) { problems.push(`${id} 阅读: 缺整套`); continue }
  const expect = { 1: 6, 2: 7, 3: 5, 4: 6, 5: 6 }
  for (const p of [1, 2, 3, 4, 5]) {
    const part = r[`part${p}`]
    if (!part) { problems.push(`${id} 阅读 P${p}: 缺 part`); continue }
    const qn = part.questions?.length || 0
    if (qn !== expect[p]) problems.push(`${id} 阅读 P${p}: 题量 ${qn} ≠ ${expect[p]}`)
    for (const q of part.questions || []) {
      if (p === 5) {
        if (!q.answers?.length) problems.push(`${id} P5 Q${q.id}: 缺 answers`)
      } else {
        if (!q.answer) problems.push(`${id} P${p} Q${q.id}: 缺 answer`)
        if (p === 1 || p === 3 || p === 4) {
          if (!q.options || Object.keys(q.options).length !== 3) problems.push(`${id} P${p} Q${q.id}: 选项不足3个`)
        }
      }
      if (q.text == null && p !== 1 && p !== 4 && p !== 5) problems.push(`${id} P${p} Q${q.id}: 缺题干`)
    }
  }
  if (r.source?.verified !== true || r.source?.verifiedParts?.length !== 5) problems.push(`${id} 阅读: source 未标志全 verified`)
  if (!r.source?.pages || !r.source?.answerPage) problems.push(`${id} 阅读: 缺 pages/answerPage`)

  // ── 写作 ──
  const w = KET_TRAINER2_WRITING[id]
  if (!w) { problems.push(`${id} 写作: 缺整套`); continue }
  if (w.length !== 2) problems.push(`${id} 写作: 不是 2 个 part`)
  for (const item of w) {
    if (!item.prompt) problems.push(`${id} 写作 P${item.part}: 缺 prompt`)
    if (!item.modelAnswer) problems.push(`${id} 写作 P${item.part}: 缺 modelAnswer`)
    if (!item.tips?.length) problems.push(`${id} 写作 P${item.part}: 缺 tips`)
    if (item.part === 7 && !item.imageSrc) problems.push(`${id} 写作 P7: 缺 imageSrc`)
  }

  // ── 口语 ──
  const sp = KET_TRAINER2_SPEAKING[id]
  if (!sp?.parts?.length) { problems.push(`${id} 口语: 缺整套`); continue }
  const topic = sp.parts[0].topics?.[0]
  if (!topic) { problems.push(`${id} 口语: 缺 topic`); continue }
  if (topic.cardPrompts?.length !== 7) problems.push(`${id} 口语: cardPrompts ${topic.cardPrompts?.length} ≠ 7`)
  if (!topic.modelAnswer) problems.push(`${id} 口语: 缺 modelAnswer`)
  if (!topic.imageSrc) problems.push(`${id} 口语: 缺 imageSrc`)
}

// ── 图片文件存在性 ──
const imgs = []
for (const [id, w] of Object.entries(KET_TRAINER2_WRITING)) {
  for (const item of w) if (item.imageSrc) imgs.push(item.imageSrc)
}
for (const [id, sp] of Object.entries(KET_TRAINER2_SPEAKING)) {
  for (const p of sp.parts) for (const t of p.topics || []) if (t.imageSrc) imgs.push(t.imageSrc)
}
for (const src of imgs) {
  const p = path.join('public', src)
  if (!fs.existsSync(p)) problems.push(`图片缺失: ${p}`)
}

console.log('阅读套数:', ketReadingTrainer2Tests.length)
console.log('写作套数:', Object.keys(KET_TRAINER2_WRITING).length)
console.log('口语套数:', Object.keys(KET_TRAINER2_SPEAKING).length)
console.log('图片数:', imgs.length)
if (problems.length) {
  console.log('PROBLEMS:')
  for (const p of problems) console.log(' -', p)
  process.exitCode = 1
} else {
  console.log('ALL COMPLETE: 阅读/写作/口语 6 套全部字段完整，图片全部存在')
}
