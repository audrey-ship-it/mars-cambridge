// 解析 PET3 青少版 Test N 的 OCR 文本，提取听力 transcript
// 用法：node scripts/parse-pet3-mock.cjs <ocrFile> [--json]
const fs = require('fs')

function parseOcrFile(file) {
  const text = fs.readFileSync(file, 'utf8')
  const rawLines = text.split('\n').map((l) => l.replace(/\r$/, ''))

  // 过滤掉 PAGE 标记、页眉和纯页码行
  const lines = []
  for (const l of rawLines) {
    if (/^===== PAGE \d+ =====/.test(l)) continue
    if (/^Test \d+ answer key/.test(l)) continue
    if (/^\s*\d{1,3}\s*$/.test(l)) continue
    lines.push(l)
  }

  // 找到 Transcript 起点
  const tIdx = lines.findIndex((l) => /^Transcript\s*\.?\s*$/i.test(l.trim()))
  if (tIdx < 0) throw new Error('Transcript marker not found in ' + file)
  const body = lines.slice(tIdx + 1)

  // 在 body 中查找 PART N 标记和 part 结束标记
  const findIdx = (re, from = 0) => {
    for (let i = from; i < body.length; i++) {
      if (re.test(body[i])) return i
    }
    return -1
  }
  const p1Idx = findIdx(/^PART 1\b/i)
  const p2Idx = findIdx(/^PART 2\b/i, p1Idx + 1)
  const p3Idx = findIdx(/^PART 3\b/i, p2Idx + 1)
  const p4Idx = findIdx(/^PART 4\b/i, p3Idx + 1)
  const endTestIdx = findIdx(/That is the end of the test/i, p4Idx + 1)

  const p1End = findIdx(/That is the end of Part One/i, p1Idx + 1)
  const p2End = findIdx(/That is the end of Part Two/i, p2Idx + 1)
  const p3End = findIdx(/That is the end of Part Three/i, p3Idx + 1)
  const p4End = findIdx(/That is the end of Part Four/i, p4Idx + 1)

  // Part 1/2 per-item 切分
  function parseItems(partLines) {
    // 跳过 Part 头部几行直到第一个 Question N
    const firstQ = partLines.findIndex((l) => /^Question\s+\d+\b/i.test(l))
    if (firstQ < 0) return []
    const items = []
    let cur = null // {n, raw: []}
    const flush = () => {
      if (cur) {
        const merged = mergeLines(cur.raw)
        items.push({ n: cur.n, text: merged })
      }
      cur = null
    }
    for (let i = firstQ; i < partLines.length; i++) {
      const l = partLines[i]
      // 跳过 part 结尾
      if (/^That is the end of Part/i.test(l)) { flush(); continue }
      const m = l.match(/^Question\s+(\d+)\s*(.*)$/i)
      if (m) {
        flush()
        cur = { n: +m[1], raw: [] }
        // Question N 后跟题干如 "One. What is the girl going to do on Saturday?"
        // 或 "Eight. You will hear two friends talking about..."
        // 题干是 question paper 印刷内容，不属于听力原文，丢弃
        continue
      }
      if (!cur) continue
      // 跳过指令/重复标记
      if (/^Now listen again/i.test(l)) continue
      if (/^\[repeat\]/i.test(l.trim())) continue
      cur.raw.push(l)
    }
    flush()
    return items
  }

  // 合并连续非说话人行到前一个说话人段落
  // 说话人格式: Boy:/Girl:/Woman:/Man:/Mother:/Father: 等
  function mergeLines(rawLines) {
    const paras = []
    let cur = null
    const pushCur = () => { if (cur != null && cur.trim()) paras.push(cur); cur = null }

    for (const l of rawLines) {
      const t = l.trim()
      if (!t) continue
      const sm = l.match(/^([A-Z][a-zA-Z]+):\s+(.*)$/)
      if (sm) {
        pushCur()
        cur = `${sm[1]}: ${sm[2]}`
        continue
      }
      // 接续前一段，跨行合并
      if (cur != null) {
        if (cur.endsWith('-')) cur += t
        else cur += ' ' + t
      } else {
        // 没有说话人上下文，可能是题干续行 — 单独成段
        cur = t
      }
    }
    pushCur()
    return paras.join('\n')
  }

  const p1Lines = body.slice(p1Idx + 1, p1End < 0 ? (p2Idx < 0 ? body.length : p2Idx) : p1End)
  const p2Lines = body.slice(p2Idx + 1, p2End < 0 ? (p3Idx < 0 ? body.length : p3Idx) : p2End)
  const p3Lines = body.slice(p3Idx + 1, p3End < 0 ? (p4Idx < 0 ? body.length : p4Idx) : p3End)
  const p4Lines = body.slice(p4Idx + 1, p4End < 0 ? (endTestIdx < 0 ? body.length : endTestIdx) : p4End)

  const p1Items = parseItems(p1Lines)
  const p2Items = parseItems(p2Lines)
  // Part 3/4: 整段但要去掉开头的指令前言，从第一个说话人开始
  function partText(lines) {
    // 找到第一个说话人行 "Xxx: ..."
    const firstSp = lines.findIndex((l) => /^[A-Z][a-zA-Z]+:\s+/.test(l))
    if (firstSp < 0) return mergeLines(lines)
    return mergeLines(lines.slice(firstSp))
  }
  const p3Text = partText(p3Lines)
  const p4Text = partText(p4Lines)

  return { p1: p1Items, p2: p2Items, p3: p3Text, p4: p4Text }
}

const file = process.argv[2]
const r = parseOcrFile(file)

if (process.argv.includes('--json')) {
  const out = {
    p1: r.p1.reduce((acc, it) => { acc[it.n] = it.text; return acc }, {}),
    p2: r.p2.reduce((acc, it) => { acc[it.n] = it.text; return acc }, {}),
    p3: r.p3,
    p4: r.p4,
  }
  console.log(JSON.stringify(out, null, 2))
} else {
  console.log('=== P1 items:', r.p1.length)
  r.p1.forEach((it) => console.log(`  Q${it.n}: ${it.text.slice(0, 100)}...`))
  console.log('=== P2 items:', r.p2.length)
  r.p2.forEach((it) => console.log(`  Q${it.n}: ${it.text.slice(0, 100)}...`))
  console.log('=== P3 length:', r.p3.length, 'first 200:', r.p3.slice(0, 200))
  console.log('=== P4 length:', r.p4.length, 'first 200:', r.p4.slice(0, 200))
}
