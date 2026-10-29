// 一次性核对脚本：Exam Booster 听力原文（setId 33-35）逐题验证荧光笔命中
// 用法：node scripts/_eb_verify_transcript.mjs
// 目标：所有答案句引句在对应 transcript 中命中，未命中数为 0
import fs from 'fs'
import { BOOSTER_PART1_SETS, BOOSTER_PART2_SETS, BOOSTER_PART3_SETS, BOOSTER_PART4_SETS, BOOSTER_PART5_SETS } from '../src/data/ketListeningBooster.js'

// 与 src/utils/transcriptHighlight.jsx 相同的纯逻辑（verify 环境无法 import JSX）
function extractQuotes(explanation) {
  if (!explanation) return []
  const out = []
  const re = /"([^"]+)"|“([^”]+)”|「([^」]+)」/g
  let m
  while ((m = re.exec(explanation)) !== null) {
    const quoted = m[1] || m[2] || m[3] || ''
    for (const frag of quoted.split(/\s*(?:\.{3}|\/)\s*/)) {
      const f = frag.trim()
      if (f && /^[A-Za-z£]/.test(f) && f.split(/\s+/).length >= 3) out.push(f)
    }
    // 中英混合引句（中文叙述 + 括号英文）：按 CJK 与全角标点切出连续英文子段
    for (const part of quoted.split(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]+/)) {
      const p = part.trim()
      if (p && /^[A-Za-z£]/.test(p) && p.split(/\s+/).length >= 3) out.push(p)
    }
  }
  // 裸英文通道：中文叙述中无引号包裹的英文句（≥4 词），逐段作为候选引句
  for (const seg of explanation.split(/[^A-Za-z£0-9'’.,:!?\- ]+/)) {
    const s = seg.trim()
    if (s && /^[A-Za-z£]/.test(s) && s.split(/\s+/).length >= 4) out.push(s)
  }
  return out
}

function normalize(v) {
  return String(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9£]+/g, '')
}

function hit(transcript, quote) {
  const nT = normalize(transcript)
  return nT.includes(normalize(quote))
}

const PARTS = [
  ['Part 1', BOOSTER_PART1_SETS],
  ['Part 2', BOOSTER_PART2_SETS],
  ['Part 3', BOOSTER_PART3_SETS],
  ['Part 4', BOOSTER_PART4_SETS],
  ['Part 5', BOOSTER_PART5_SETS],
]

let totalChecks = 0
let totalMiss = 0
const missDetail = []

for (const [partName, sets] of PARTS) {
  for (const setId of ['33', '34', '35']) {
    const part = sets[setId]
    if (!part) { console.error(`${partName} set${setId}: 数据缺失`); continue }
    const transcript = part.transcript
    if (setId !== '33' && partName === 'Part 5') {
      console.log(`${partName} set${setId}: 官方缺页（预期无 transcript：${transcript ? '意外存在!' : '确认缺失'}）`)
      continue
    }
    if (!transcript) {
      totalMiss += 1
      missDetail.push(`${partName} set${setId}: transcript 缺失`)
      continue
    }
    const items = part.items || []
    let partMiss = 0
    for (let i = 0; i < items.length; i += 1) {
      const quotes = partName === 'Part 2'
        ? (items[i].answer || []).map(a => String(a)).filter(Boolean)
        : extractQuotes(items[i].explanation || items[i].exp || '')
      if (quotes.length === 0) {
        partMiss += 1
        missDetail.push(`${partName} set${setId} 第${i + 1}题: 解析中无英文引句`)
        continue
      }
      const hits = quotes.filter(q => hit(transcript, q))
      totalChecks += 1
      if (hits.length === 0) {
        partMiss += 1
        missDetail.push(`${partName} set${setId} 第${i + 1}题: 引句全部未命中 → ${quotes[0].slice(0, 60)}`)
      }
    }
    console.log(`${partName} set${setId}: ${items.length} 题，引句未命中 ${partMiss} 题`)
    totalMiss += partMiss
  }
}

console.log('---')
console.log(`核对题次: ${totalChecks}，未命中/异常: ${totalMiss}`)
if (missDetail.length) {
  console.log('未命中明细:')
  missDetail.forEach(line => console.log('  ' + line))
}
process.exit(totalMiss === 0 ? 0 : 1)
