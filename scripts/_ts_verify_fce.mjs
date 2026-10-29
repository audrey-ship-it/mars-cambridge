// FCE 听力原文引句核对：解析英文引句 vs transcript（标准版册1/2，8 套 32 Part）
// P1/P3 题级 transcript；P2/P4 Part 级 transcript；P2 的 answer（字符串/字符串数组）并入高亮
import { fceStandardListeningTests } from '../src/data/fceStandardListeningTests.js'

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

const sets = fceStandardListeningTests.slice(0, 16) // 全 16 套；册3/4 注入后启用
let totalMiss = 0
const missDetail = []
for (const set of sets) {
  for (const pn of ['1', '2', '3', '4']) {
    const part = set.parts[pn]
    const items = part.items || []
    let miss = 0
    for (let i = 0; i < items.length; i += 1) {
      const it = items[i]
      // P1/P3 的 transcript 按题独立存储；P2/P4 为 Part 级
      const ts = (pn === '1' || pn === '3') ? it.transcript || '' : part.transcript || ''
      const expQuotes = extractQuotes(it.explanation || '')
      let quotes = expQuotes
      if (pn === '2') {
        const ans = typeof it.answer === 'string' && it.answer ? [it.answer]
          : Array.isArray(it.answer) ? it.answer.map(String) : []
        quotes = expQuotes.concat(ans.filter(a => a && !/^\d+$/.test(a)))
      }
      const nT = normalize(ts)
      const hit = quotes.some(q => nT.includes(normalize(q)))
      if (!hit) { miss += 1; missDetail.push(`${set.meta.id} P${pn} 第${i + 1}题: ${quotes.length === 0 ? '无英文引句' : '引句全部未命中 → ' + quotes[0].slice(0, 60)}`) }
    }
    totalMiss += miss
    console.log(`${set.meta.id} P${pn}: ${items.length} 题，未命中 ${miss}`)
  }
}
console.log('---')
console.log(`未命中/异常: ${totalMiss}`)
if (missDetail.length) missDetail.forEach(l => console.log('  ' + l))
process.exit(totalMiss === 0 ? 0 : 1)
