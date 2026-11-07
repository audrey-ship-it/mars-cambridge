// 听力引句核对脚本：验证每题的解析引句（answerQuotes）都能在对应篇章 transcript 中命中，
// 并将数据答案与解析 PDF 人工核对的答案表比对。
// 用法: node scripts/verify-listening-quotes.mjs
// 退出码 0 = 全部命中；1 = 存在未命中或答案不一致。
import LISTENING from '../src/data/generated/cet4-2024-06-s1-listening.js'

// 解析 PDF 人工读图确认的答案表（2024年6月四级真题解析【第一套】p02-p09）
const EXPECTED_ANSWERS = {
  1: 'B', 2: 'A', 3: 'C', 4: 'D', 5: 'D', 6: 'D', 7: 'D',
  8: 'B', 9: 'D', 10: 'A', 11: 'C',
  12: 'C', 13: 'B', 14: 'D', 15: 'A',
  16: 'B', 17: 'C', 18: 'B',
  19: 'C', 20: 'A', 21: 'B',
  22: 'D', 23: 'A', 24: 'D', 25: 'C',
}

// 归一化：仅保留字母数字，比较时不区分大小写与标点/空格/引号形态
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '')

const pieces = [
  ...LISTENING.sections.news,
  ...LISTENING.sections.conversations,
  ...LISTENING.sections.passages,
]

let missCount = 0
let answerMismatch = 0
let quoteTotal = 0

for (const piece of pieces) {
  const tNorm = norm(piece.transcript)
  for (const q of piece.questions) {
    const quotes = LISTENING.answerQuotes[q.n] || []
    if (quotes.length === 0) {
      console.log(`MISS  Q${q.n} 无引句记录`)
      missCount++
      continue
    }
    for (const quote of quotes) {
      quoteTotal++
      if (!tNorm.includes(norm(quote))) {
        console.log(`MISS  Q${q.n} [${piece.title}] 引句未命中: "${quote}"`)
        missCount++
      }
    }
    const expected = EXPECTED_ANSWERS[q.n]
    if (expected && q.answer !== expected) {
      console.log(`ANS   Q${q.n} 数据答案 ${q.answer} ≠ 解析答案 ${expected}`)
      answerMismatch++
    }
  }
}

// 覆盖检查：25 题都出现在某个篇章里
const seen = new Set(pieces.flatMap((p) => p.questions.map((q) => q.n)))
for (let n = 1; n <= 25; n++) {
  if (!seen.has(n)) {
    console.log(`MISS  Q${n} 不在任何篇章中`)
    missCount++
  }
}

console.log(`—— 引句 ${quoteTotal} 条，未命中 ${missCount}，答案不一致 ${answerMismatch}`)
if (missCount > 0 || answerMismatch > 0) process.exit(1)
console.log('✅ 全部引句命中，答案与解析一致')
