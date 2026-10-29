// PET 听力原文核对：逐题解析引句 vs transcript（标准版1 + Trainer1，7 套 28 Part）
import { PET_LISTENING_STANDARD } from '../src/data/petListeningStandard.js'
import { PET_TRAINER1_LISTENING } from '../src/data/petTrainer1Listening.js'
import { PET_TRAINER2_LISTENING } from '../src/data/petTrainer2Listening.js'

function extractQuotes(explanation) {
  if (!explanation) return []
  const out = []
  const re = /"([^"]+)"|“([^”]+)”|「([^」]+)」/g
  let m
  while ((m = re.exec(explanation)) !== null) {
    const quoted = m[1] || m[2] || m[3] || ''
    for (const frag of quoted.split(/\s*(?:\.{3}|\/)\s*/)) {
      const f = frag.trim()
      if (f && /^[A-Za-z£0-9]/.test(f) && f.split(/\s+/).length >= 3) out.push(f)
    }
    for (const part of quoted.split(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]+/)) {
      const p = part.trim()
      if (p && /^[A-Za-z£0-9]/.test(p) && p.split(/\s+/).length >= 3) out.push(p)
    }
  }
  for (const seg of explanation.split(/[^A-Za-z£0-9'’.,:!?\- ]+/)) {
    const s = seg.trim()
    if (s && /^[A-Za-z£0-9]/.test(s) && s.split(/\s+/).length >= 4) out.push(s)
  }
  return out
}
function normalize(v) {
  return String(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9£]+/g, '')
}

const GROUPS = [
  ['standard-1', PET_LISTENING_STANDARD],
  ['trainer1', PET_TRAINER1_LISTENING],
  ['trainer2', PET_TRAINER2_LISTENING],
]
let totalMiss = 0
const missDetail = []
for (const [gname, sets] of GROUPS) {
  for (const set of sets) {
    const parts = set.parts || {}
    for (const pnum of Object.keys(parts)) {
      const part = parts[pnum]
      const ts = part.transcript
      const items = part.items || []
      if (!ts) {
        if (items.length === 0) continue // 空占位套
        totalMiss += 1; missDetail.push(`${gname} ${set.meta?.id} P${pnum}: transcript 缺失（未录）`); continue
      }
      let miss = 0
      for (let i = 0; i < items.length; i += 1) {
        const it = items[i]
        const isBlank = Array.isArray(it.answer)
        const expQuotes = extractQuotes(it.explanation || it.exp || '')
        const quotes = isBlank
          ? it.answer.map(a => String(a)).filter(Boolean).concat(expQuotes)
          : expQuotes
        if (quotes.length === 0) { miss += 1; missDetail.push(`${gname} ${set.meta?.id} P${pnum} 第${i + 1}题: 无英文引句`); continue }
        const nT = normalize(ts)
        const hit = quotes.some(q => nT.includes(normalize(q)))
        if (!hit) { miss += 1; missDetail.push(`${gname} ${set.meta?.id} P${pnum} 第${i + 1}题: 引句全部未命中 → ${quotes[0].slice(0, 60)}`) }
      }
      totalMiss += miss
      console.log(`${gname} ${set.meta?.id} P${pnum}: ${items.length} 题，未命中 ${miss}`)
    }
  }
}
console.log('---')
console.log(`未命中/异常: ${totalMiss}`)
if (missDetail.length) missDetail.forEach(l => console.log('  ' + l))
process.exit(totalMiss === 0 ? 0 : 1)
