// 幂等替换：mock13-16 已有 transcript 字段的值替换为新 OCR 解析结果
// 不插入新行、不改 explanation —— 仅更新 transcript 值
// 用法：node scripts/replace-petj1-transcripts.cjs [--write]
// mock13 用 scale-2 OCR（无 scale-3），mock14-16 用 scale-3 OCR
const fs = require('fs')
const ROOT = 'd:/workspace_sunny/mars-cambridge'
const OCR_DIR = `${ROOT}/temp-pet-mock`
const DATA_FILE = `${ROOT}/src/data/petListeningData.js`
const WRITE = process.argv.includes('--write')

const MAP = {
  13: 'petj1-t1-ocr.txt',   // scale-2（无 scale-3）
  14: 'petj1-t2-ocr3.txt',  // scale-3
  15: 'petj1-t3-ocr3.txt',  // scale-3
  16: 'petj1-t4-ocr3.txt',  // scale-3
}

// 复用 parse-pet3-mock.cjs 的解析逻辑
function parseOcrFile(file) {
  const text = fs.readFileSync(file, 'utf8')
  const rawLines = text.split('\n').map((l) => l.replace(/\r$/, ''))
  const lines = []
  for (const l of rawLines) {
    if (/^===== PAGE \d+ =====/.test(l)) continue
    if (/^Test \d+ answer key/.test(l)) continue
    if (/^\s*\d{1,3}\s*$/.test(l)) continue
    lines.push(l)
  }
  const tIdx = lines.findIndex((l) => /^Transcript\s*\.?\s*$/i.test(l.trim()))
  if (tIdx < 0) throw new Error('Transcript marker not found in ' + file)
  const body = lines.slice(tIdx + 1)
  const findIdx = (re, from = 0) => { for (let i = from; i < body.length; i++) if (re.test(body[i])) return i; return -1 }
  const p1Idx = findIdx(/^PART 1\b/i)
  const p2Idx = findIdx(/^PART 2\b/i, p1Idx + 1)
  const p3Idx = findIdx(/^PART 3\b/i, p2Idx + 1)
  const p4Idx = findIdx(/^PART 4\b/i, p3Idx + 1)
  const endTestIdx = findIdx(/That is the end of the test/i, p4Idx + 1)
  const p1End = findIdx(/That is the end of Part One/i, p1Idx + 1)
  const p2End = findIdx(/That is the end of Part Two/i, p2Idx + 1)
  const p3End = findIdx(/That is the end of Part Three/i, p3Idx + 1)
  const p4End = findIdx(/That is the end of Part Four/i, p4Idx + 1)
  function parseItems(partLines) {
    const firstQ = partLines.findIndex((l) => /^Question\s+\d+\b/i.test(l))
    if (firstQ < 0) return []
    const items = []
    let cur = null
    const flush = () => { if (cur) { items.push({ n: cur.n, text: mergeLines(cur.raw) }); cur = null } }
    for (let i = firstQ; i < partLines.length; i++) {
      const l = partLines[i]
      if (/^That is the end of Part/i.test(l)) { flush(); continue }
      const m = l.match(/^Question\s+(\d+)\s*(.*)$/i)
      if (m) { flush(); cur = { n: +m[1], raw: [] }; continue }
      if (!cur) continue
      if (/^Now listen again/i.test(l)) continue
      if (/^\[repeat\]/i.test(l.trim())) continue
      cur.raw.push(l)
    }
    flush()
    return items
  }
  function mergeLines(rawLines) {
    const paras = []
    let cur = null
    const pushCur = () => { if (cur != null && cur.trim()) paras.push(cur); cur = null }
    for (const l of rawLines) {
      const t = l.trim()
      if (!t) continue
      const sm = l.match(/^([A-Z][a-zA-Z]+):\s+(.*)$/)
      if (sm) { pushCur(); cur = `${sm[1]}: ${sm[2]}`; continue }
      if (cur != null) {
        if (cur.endsWith('-')) cur += t
        else cur += ' ' + t
      } else { cur = t }
    }
    pushCur()
    return paras.join('\n')
  }
  const p1Lines = body.slice(p1Idx + 1, p1End < 0 ? (p2Idx < 0 ? body.length : p2Idx) : p1End)
  const p2Lines = body.slice(p2Idx + 1, p2End < 0 ? (p3Idx < 0 ? body.length : p3Idx) : p2End)
  const p3Lines = body.slice(p3Idx + 1, p3End < 0 ? (p4Idx < 0 ? body.length : p4Idx) : p3End)
  const p4Lines = body.slice(p4Idx + 1, p4End < 0 ? (endTestIdx < 0 ? body.length : endTestIdx) : p4End)
  function partText(lines) {
    const firstSp = lines.findIndex((l) => /^[A-Z][a-zA-Z]+:\s+/.test(l))
    if (firstSp < 0) return mergeLines(lines)
    return mergeLines(lines.slice(firstSp))
  }
  return { p1: parseItems(p1Lines), p2: parseItems(p2Lines), p3: partText(p3Lines), p4: partText(p4Lines) }
}

function norm(s) {
  if (!s) return s
  return s
    .replace(/\|/g, 'I')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u00a0/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/ *\n */g, '\n')
    .trim()
}

// 构建 mock 块内 transcript 值的期望顺序：
// P1 items[0..6] → 7 个逐题 transcript
// P2 items[0..5] → 6 个逐题 transcript
// P3 part-level → 1 个
// P4 part-level → 1 个
// 共 15 个 transcript 字段
function buildTranscriptValues(parsed) {
  const vals = []
  for (let i = 0; i < 7; i++) vals.push(parsed.p1[i]?.text || '')
  for (let i = 0; i < 6; i++) vals.push(parsed.p2[i]?.text || '')
  vals.push(parsed.p3)
  vals.push(parsed.p4)
  return vals.map(norm)
}

let data = fs.readFileSync(DATA_FILE, 'utf8')
let totalReplaced = 0

for (const [mockN, ocrFile] of Object.entries(MAP)) {
  const ocrPath = `${OCR_DIR}/${ocrFile}`
  if (!fs.existsSync(ocrPath)) { console.warn(`skip mock${mockN}: OCR file not found`); continue }
  console.log(`mock${mockN} ← ${ocrFile}`)
  const parsed = parseOcrFile(ocrPath)
  console.log(`  p1=${parsed.p1.length}, p2=${parsed.p2.length}, p3=${parsed.p3.length} chars, p4=${parsed.p4.length} chars`)
  const values = buildTranscriptValues(parsed)
  console.log(`  expected transcript count: ${values.length}`)

  // 在 data 中定位 mock 块
  const mockId = `id: 'pet-mock-${mockN}-listening'`
  const idIdx = data.indexOf(mockId)
  if (idIdx < 0) throw new Error(`mock id not found: ${mockId}`)
  const nextMockIdx = data.indexOf(`id: 'pet-mock-${Number(mockN) + 1}-listening'`, idIdx + 1)
  const blockEnd = nextMockIdx > 0 ? nextMockIdx : data.length
  let block = data.slice(idIdx, blockEnd)
  const before = data.slice(0, idIdx)
  const after = data.slice(blockEnd)

  // 在 block 中找所有 transcript: "..." 行，按出现顺序替换
  // 匹配：transcript: "...."（值部分可能含转义 \" 和 \n）
  const trRe = /(^|\n)(\s*)transcript:\s*"((?:[^"\\]|\\.)*)"/g
  const matches = []
  let m
  while ((m = trRe.exec(block)) !== null) {
    matches.push({ index: m.index, fullMatch: m[0], prefix: m[1], indent: m[2], oldValue: m[3] })
  }
  console.log(`  existing transcript lines: ${matches.length}`)
  if (matches.length !== values.length) {
    console.warn(`  WARNING: expected ${values.length} transcript lines, found ${matches.length} — skipping replacement for this mock`)
    continue
  }

  // 从后往前替换（保持索引有效）
  let replaced = 0
  for (let i = matches.length - 1; i >= 0; i--) {
    const mt = matches[i]
    const newVal = JSON.stringify(values[i]) // produces "..." with escapes
    const newLine = `${mt.prefix}${mt.indent}transcript: ${newVal}`
    // 替换 fullMatch（从 prefix 开始到闭合 "）
    block = block.slice(0, mt.index) + newLine + block.slice(mt.index + mt.fullMatch.length)
    replaced++
  }
  totalReplaced += replaced
  console.log(`  replaced ${replaced} transcript values`)
  data = before + block + after
}

console.log(`\nTotal replaced: ${totalReplaced}`)
if (WRITE) {
  fs.writeFileSync(DATA_FILE, data, 'utf8')
  console.log(`WRITTEN: ${DATA_FILE}`)
} else {
  console.log('Dry run. Add --write to apply.')
}
