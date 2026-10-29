// 一键脚本：解析 OCR 文本，把 transcript 注入 petListeningData.js 指定 mock 套题
// 同时把 explanation 中的英文引句用 "..." 包裹以触发荧光笔
// 用法：node scripts/patch-pet3-mock-transcripts.cjs [--book=pet3|petj1] [--write]
const fs = require('fs')

const ROOT = 'd:/workspace_sunny/mars-cambridge'
const OCR_DIR = `${ROOT}/temp-pet-mock`
const DATA_FILE = `${ROOT}/src/data/petListeningData.js`
const WRITE = process.argv.includes('--write')

const BOOKS = {
  pet3: {
    9: 'pet3-t1-ocr.txt',
    10: 'pet3-t2-ocr.txt',
    11: 'pet3-t3-ocr.txt',
    12: 'pet3-t4-ocr.txt',
  },
  petj1: {
    13: 'petj1-t1-ocr.txt',
    14: 'petj1-t2-ocr.txt',
    15: 'petj1-t3-ocr.txt',
    16: 'petj1-t4-ocr.txt',
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
if (!MOCK_MAP) {
  console.error(`unknown book: ${BOOK}`)
  process.exit(1)
}

// === 解析 OCR 文件 (复用 parse-pet3-mock.cjs 的逻辑) ===
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

  const findIdx = (re, from = 0) => {
    for (let i = from; i < body.length; i++) if (re.test(body[i])) return i
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
      } else {
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
  function partText(lines) {
    const firstSp = lines.findIndex((l) => /^[A-Z][a-zA-Z]+:\s+/.test(l))
    if (firstSp < 0) return mergeLines(lines)
    return mergeLines(lines.slice(firstSp))
  }
  return {
    p1: p1Items,
    p2: p2Items,
    p3: partText(p3Lines),
    p4: partText(p4Lines),
  }
}

// === 归一化 ===
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

// === 把 explanation 中的全角括号包裹的英文段改成用 \"...\" 包裹 ===
// 输入是 JS 源代码片段，explanation 用单引号字符串 '...'
// 我们需要：1. 把 (English) 改为 (\"English\")  2. 把整个 explanation 字符串引号从 ' 改为 "
// 但 explanation 内可能已经有 ASCII " (转义或未转义)；简单方案：仅当 explanation 不含 " 时处理
function wrapExplanationLine(line) {
  // 匹配 explanation: 'xxx', 或 explanation: 'xxx'
  const m = line.match(/^(\s*)explanation:\s*'(.*)',?\s*$/)
  if (!m) return { line, changed: false }
  let [, indent, content] = m
  // 单引号字符串里的 \' 转成双引号后无意义（eslint no-useless-escape），还原为 '
  content = content.replace(/\\'/g, "'")
  // 把 (English) 改为 (\"English\")
  content = content.replace(/（([^）]*?)）/g, (mm, inner) => {
    if (/^[A-Za-z£$]/.test(inner)) return `（\\"${inner}\\"）`
    return mm
  })
  // 把外层 ' 改为 "，需要转义内容中的 "
  // 内容里可能已经有 \\"（来自上面替换），需要保持为 \\"；同时也可能有原生的 '（撇号），不需要转义
  // 把所有 unescaped " 转为 \\" (理论上现在没有原生 "，但保险起见)
  content = content.replace(/(?<!\\)"/g, '\\"')
  return { line: `${indent}explanation: "${content}",`, changed: true }
}

// === 主流程：找到 mockN 块，插入 transcript ===
function patchMockBlock(dataText, mockN, parsed) {
  const mockId = `pet-mock-${mockN}-listening`
  const idIdx = dataText.indexOf(`id: '${mockId}'`)
  if (idIdx < 0) throw new Error(`mock id not found: ${mockId}`)
  // 块结束位置：下一个 id: 'pet-mock-(N+1)-listening' 或 EOF 或最后 }
  const nextMockIdx = dataText.indexOf(`id: 'pet-mock-${mockN + 1}-listening'`, idIdx + 1)
  const blockEndRel = nextMockIdx > 0 ? nextMockIdx : dataText.length
  let block = dataText.slice(idIdx, blockEndRel)
  const before = dataText.slice(0, idIdx)
  const after = dataText.slice(blockEndRel)

  // === 步骤 1：在 Part 3/4 的 part 对象上插入 transcript 字段 ===
  // 找 part 3 块：在 block 中找 `3: {` ... 然后在 audio: '...',\n 后插入 transcript 字段
  function insertPartTranscript(blockText, partKey, transcript) {
    // 找 `partKey: {` 起始
    const partStart = blockText.indexOf(`${partKey}: {`)
    if (partStart < 0) throw new Error(`part ${partKey} not found`)
    // 在 partStart 之后找 `audio: '...',` 行
    const audioMatch = blockText.slice(partStart).match(/audio:\s*'[^']*',\s*\n/)
    if (!audioMatch) {
      // part 块无 audio 字段？则插在 instruction: '...',\n 之后
      const instrMatch = blockText.slice(partStart).match(/instruction:\s*'[^']*',\s*\n/)
      if (!instrMatch) throw new Error(`no audio/instruction in part ${partKey}`)
      const insertPos = partStart + instrMatch.index + instrMatch[0].length
      const insertStr = `        transcript: ${JSON.stringify(norm(transcript))},\n`
      return blockText.slice(0, insertPos) + insertStr + blockText.slice(insertPos)
    }
    const insertPos = partStart + audioMatch.index + audioMatch[0].length
    const insertStr = `        transcript: ${JSON.stringify(norm(transcript))},\n`
    return blockText.slice(0, insertPos) + insertStr + blockText.slice(insertPos)
  }
  block = insertPartTranscript(block, '3', parsed.p3)
  block = insertPartTranscript(block, '4', parsed.p4)

  // === 步骤 2：在 Part 1/2 每个 item 上插入 transcript 字段，并 wrap explanation ===
  // 找 part 1 块范围
  function patchItemsInPart(blockText, partKey, items) {
    const partStart = blockText.indexOf(`${partKey}: {`)
    if (partStart < 0) throw new Error(`part ${partKey} not found`)
    // 找 part 1 块结束：下一个 part X: { 或块结尾
    const nextPartKey = partKey === '1' ? '2' : partKey === '2' ? '3' : partKey === '3' ? '4' : null
    const nextPartIdx = nextPartKey ? blockText.indexOf(`${nextPartKey}: {`, partStart + 1) : -1
    const partEnd = nextPartIdx > 0 ? nextPartIdx : blockText.length
    let partText = blockText.slice(partStart, partEnd)

    // 在 partText 中找所有 explanation 行，依次处理
    // 每个 item 的 explanation 改成双引号包裹 + 内部 \"...\" 包裹英文，并在下一行加 transcript: "...",
    const lines = partText.split('\n')
    const out = []
    let itemIdx = 0
    for (let li = 0; li < lines.length; li++) {
      const line = lines[li]
      const r = wrapExplanationLine(line)
      out.push(r.line)
      if (r.changed && itemIdx < items.length) {
        // 在该 explanation 行后插入 transcript 行
        const tr = items[itemIdx].text
        const trLine = `            transcript: ${JSON.stringify(norm(tr))},`
        out.push(trLine)
        itemIdx++
      }
    }
    if (itemIdx !== items.length) {
      throw new Error(`part ${partKey}: expected ${items.length} items, processed ${itemIdx}`)
    }
    return blockText.slice(0, partStart) + out.join('\n') + blockText.slice(partEnd)
  }
  block = patchItemsInPart(block, '1', parsed.p1)
  block = patchItemsInPart(block, '2', parsed.p2)

  return before + block + after
}

// === Run ===
let data = fs.readFileSync(DATA_FILE, 'utf8')
for (const [mockN, ocrFile] of Object.entries(MOCK_MAP)) {
  const ocrPath = `${OCR_DIR}/${ocrFile}`
  if (!fs.existsSync(ocrPath)) { console.warn(`skip mock${mockN}: OCR file not found`); continue }
  console.log(`Parsing mock${mockN} from ${ocrFile}...`)
  const parsed = parseOcrFile(ocrPath)
  console.log(`  p1=${parsed.p1.length}, p2=${parsed.p2.length}, p3=${parsed.p3.length} chars, p4=${parsed.p4.length} chars`)
  const beforeLen = data.length
  data = patchMockBlock(data, +mockN, parsed)
  console.log(`  patched: data length ${beforeLen} → ${data.length}`)
}

if (WRITE) {
  fs.writeFileSync(DATA_FILE, data, 'utf8')
  console.log(`WRITTEN: ${DATA_FILE}`)
} else {
  fs.writeFileSync(`${ROOT}/temp-pet-mock/patched-dryrun.js`, data, 'utf8')
  console.log(`Dry run. Add --write to apply. (patched output written to temp-pet-mock/patched-dryrun.js)`)
}
