// 验证：每个 mock 的 explanation 中的 "..." 引句能否在 transcript 中命中
// 用法：node scripts/verify-pet3-quotes.cjs [--book=pet3|petj1]
const fs = require('fs')
const ROOT = 'd:/workspace_sunny/mars-cambridge'
const OCR_DIR = `${ROOT}/temp-pet-mock`
const BOOKS = {
  pet3: {
    9: 'pet3-t1-ocr.txt',
    10: 'pet3-t2-ocr.txt',
    11: 'pet3-t3-ocr.txt',
    12: 'pet3-t4-ocr.txt',
  },
  petj1: {
    13: 'petj1-t1-ocr.txt',
    14: 'petj1-t2-ocr3.txt',
    15: 'petj1-t3-ocr3.txt',
    16: 'petj1-t4-ocr3.txt',
  },
  petj2: {
    17: 'petj2-t1-ocr.txt',
    18: 'petj2-t2-ocr.txt',
    19: 'petj2-t3-ocr.txt',
    20: 'petj2-t4-ocr.txt',
  },
}
const bookArg = process.argv.find((a) => a.startsWith('--book='))
const BOOK = bookArg ? bookArg.split('=')[1] : 'pet3'
const MOCK_MAP = BOOKS[BOOK]
if (!MOCK_MAP) { console.error(`unknown book: ${BOOK}`); process.exit(1) }

// 复用 parse-pet3-mock.cjs 的 parseOcrFile
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
  return {
    p1: parseItems(p1Lines),
    p2: parseItems(p2Lines),
    p3: partText(p3Lines),
    p4: partText(p4Lines),
  }
}

function norm(s) {
  if (!s) return s
  return s
    .replace(/\|/g, 'I')
    .replace(/\[/g, 'I') // OCR ['ll → I'll
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u00a0/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/ *\n */g, '\n')
    .trim()
}

// 从 explanation 字符串中提取 \"...\" 包裹的英文（与 PetExam.jsx extractQuotes 同逻辑：按 ... 拆片段）
function extractQuotes(exp) {
  if (!exp) return []
  const out = []
  const re = /"([^"]+)"/g
  let m
  while ((m = re.exec(exp)) !== null) {
    if (!/^[A-Za-z£]/.test(m[1])) continue
    for (const frag of m[1].split(/\s*\.{3}\s*/)) {
      const f = frag.trim()
      if (f && /^[A-Za-z£]/.test(f) && f.split(/\s+/).length >= 3) out.push(f)
    }
  }
  return out
}

// 从 petListeningData.js 中抽取每个 mock 的 explanation 列表
// 因为 patch 还没写入，先用 mock9-12 当前的 explanation（无 \"...\" 包裹）
// 我们手动用 wrapExplanationLine 转换后再校验
function wrapExplanationEnglish(exp) {
  return exp.replace(/（([^）]*?)）/g, (m, inner) => {
    if (/^[A-Za-z£$]/.test(inner)) return `（"${inner}"）`
    return m
  })
}

// 加载 petListeningData.js 找 mock9-12 的 explanation
function loadMockExplanations(mockN) {
  const N = Number(mockN)
  const text = fs.readFileSync(`${ROOT}/src/data/petListeningData.js`, 'utf8')
  const idIdx = text.indexOf(`id: 'pet-mock-${N}-listening'`)
  if (idIdx < 0) throw new Error(`mock id not found: pet-mock-${N}-listening`)
  const nextMockIdx = text.indexOf(`id: 'pet-mock-${N + 1}-listening'`, idIdx + 1)
  const block = text.slice(idIdx, nextMockIdx > 0 ? nextMockIdx : text.length)
  // 兼容单引号 'xxx' 与双引号 "xxx"（patch 后 Part 1/2 为双引号）
  const out = []
  const re = /explanation:\s*('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g
  let m
  while ((m = re.exec(block)) !== null) {
    let raw = m[1]
    const quote = raw[0]
    let s = raw.slice(1, -1)
    if (quote === "'") s = s.replace(/\\'/g, "'")
    else s = s.replace(/\\"/g, '"')
    out.push(s)
  }
  return out
}

let totalFails = 0
for (const [mockN, ocrFile] of Object.entries(MOCK_MAP)) {
  console.log(`\n=== mock${mockN} ===`)
  const parsed = parseOcrFile(`${OCR_DIR}/${ocrFile}`)
  const exps = loadMockExplanations(mockN)
  console.log(`  exps count: ${exps.length}`)
  // exps 顺序：Part1[7] + Part2[6] + Part3 items[6] + Part4 items[6]
  // Part 3/4 items 的 explanation 列表对应 part-level transcript
  const transcripts = []
  for (let i = 0; i < 7; i++) transcripts.push(parsed.p1[i]?.text || '')
  for (let i = 0; i < 6; i++) transcripts.push(parsed.p2[i]?.text || '')
  for (let i = 0; i < 6; i++) transcripts.push(parsed.p3) // Part 3 part-level
  for (let i = 0; i < 6; i++) transcripts.push(parsed.p4) // Part 4 part-level

  let mockFails = 0, hardFails = 0, matchCount = 0
  // 与 PetExam.jsx renderTranscriptWithHighlights 相同的归一化匹配
  const runNorm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9£]+/g, '')
  for (let i = 0; i < exps.length; i++) {
    const expWrapped = exps[i] // patch 后已含 \"...\" 包裹
    const quotes = extractQuotes(expWrapped)
    if (quotes.length === 0) continue
    const trNorm = runNorm(norm(transcripts[i] || ''))
    for (const q of quotes) {
      const nAns = runNorm(norm(q))
      if (nAns.length < 6) { matchCount++; continue }
      if (trNorm.includes(nAns)) {
        matchCount++
      } else {
        mockFails++
        totalFails++
        hardFails++
        console.log(`  [NO-HIGHLIGHT] item ${i + 1} fragment not found:`)
        console.log(`    frag: ${norm(q)}`)
      }
    }
  }
  console.log(`  highlight coverage: ${matchCount} matched, ${mockFails} missed (${exps.length} items)`)
}
console.log(`\nTotal fails: ${totalFails}`)
