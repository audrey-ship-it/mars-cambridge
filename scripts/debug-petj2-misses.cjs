// 临时调试：打印 mock17-20 中未命中片段对应的 transcript
const fs = require('fs')
const ROOT = 'd:/workspace_sunny/mars-cambridge'
const OCR_DIR = `${ROOT}/temp-pet-mock`

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
      if (cur != null) { cur += cur.endsWith('-') ? t : ' ' + t } else { cur = t }
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

const MISSES = {
  17: [2, 13, 15, 19, 24],
  18: [12, 14, 18, 25],
  19: [21],
  20: [5, 6, 13],
}
const OCR = {
  17: 'petj2-t1-ocr.txt',
  18: 'petj2-t2-ocr.txt',
  19: 'petj2-t3-ocr.txt',
  20: 'petj2-t4-ocr.txt',
}

for (const [mockN, items] of Object.entries(MISSES)) {
  const parsed = parseOcrFile(`${OCR_DIR}/${OCR[mockN]}`)
  function trFor(it) {
    if (it <= 7) return parsed.p1[it - 1]?.text
    if (it <= 13) return parsed.p2[it - 8]?.text
    if (it <= 19) return parsed.p3
    return parsed.p4
  }
  for (const it of items) {
    const label = it <= 7 ? `P1 Q${it}` : it <= 13 ? `P2 Q${it - 1}` : it <= 19 ? `P3 Q${it - 7}` : `P4 Q${it - 13}`
    console.log(`\n########## mock${mockN} ${label} ##########`)
    console.log(trFor(it))
  }
}
