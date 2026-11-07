// CET-6 真题 PDF（文字层版）→ 阅读部分 JSON 转换脚本 v3
// 核心改进：从完整 Part III 里先定位各 Section 的边界，再独立解析
// Section A banked cloze："ten blanks" Directions → Section B Directions
// Section B matching："ten statements" Directions → Section C Directions / Passage One
// Section C careful reading：Passage One/Two + 46-55 题目

import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'
import mammoth from 'mammoth'

async function readPdfText(pdfPath) {
  const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(pdfPath)) })
  const result = await parser.getText()
  await parser.destroy()
  return result.text
}

// 真题 PDF 部分页面为纯扫描图（文字层为空）时，改用同批次的真题 docx
async function readDocxText(docxPath) {
  const r = await mammoth.extractRawText({ path: docxPath })
  return r.value
}

function cleanLines(raw) {
  return raw
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((s) => !/^--\s*\d+\s*of\s*\d+\s*--$/.test(s))
    .filter((s) => !/第\s*\d+\s*页/.test(s))
    .filter((s) => !/^\d+\s*[·•]\s*\d+$/.test(s)) // 页眉 "6 · 2"
    .filter((s) => !/^\d+\s*年\s*\d+\s*月.*六级.*第\s*\d+\s*套/.test(s)) // 中文页脚
    .filter((s) => !(/六级真题/.test(s) && /\d+年/.test(s)))
    .filter((s) => !(/大学英语六级考试/.test(s) && s.length < 30))
    .map((s) =>
      s
        // 题号 OCR 噪声："3B." → "36."，"5O." → "50."，"4I." → "41."
        .replace(/^([0-9OIlBS|]{2})\s*([\.\)])\s*/, (m, a, b) => {
          const d = a
            .replace(/O/g, '0')
            .replace(/[Il|]/g, '1')
            .replace(/B/g, '8')
            .replace(/S/g, '5')
          return /^\d{2}$/.test(d) ? d + b + ' ' : m
        })
        // 题号被 OCR 拆开："3 8 ." → "38."，"4 1 ." → "41."
        .replace(/^(\d)\s+(\d)\s+(\d)\s*([\.\)])/, '$1$2$3$4')
        .replace(/^(\d)\s+(\d)\s*([\.\)])/, '$1$2$3')
        // 题号分隔符被 OCR 成逗号："54, What does..." → "54. What does..."
        .replace(/^(\d{2})\s*,\s+/, '$1. ')
        // 正文里空位数字被拆开："3 1" → "31"，"3 5" → "35"
        .replace(/\b(2)\s+([6-9])\b/g, '$1$2')
        .replace(/\b(3)\s+([0-5])\b/g, '$1$2')
        // 段落标记 OCR 噪声："[ H J" → "[H]"，"L )" → "L)"
        .replace(/^\[\s*([A-Z])\s*[\]}Jj]\s*/, '[$1] ')
        .replace(/^([A-Z])\s+\)\s*/, '$1) ')
        .replace(/\bo\s+f\b/g, 'of')
        .replace(/\bO\s+f\b/g, 'of')
        .replace(/\bfbr\b/gi, 'for')
        .replace(/0\)\s+/g, 'O) ')
        .replace(/\bO\s*\)/g, 'O)')
        .replace(/([A-O])\)\s+/g, '$1) '),
    )
}

function findPartIII(lines) {
  // 直接找 "Reading Comprehension (40 minutes)" 或 "Part III Reading" 这一行
  // 同时排除 Part II Listening Comprehension
  for (let i = 0; i < lines.length; i++) {
    const s = lines[i]
    if (/Reading\s+Comprehension/i.test(s)) {
      if (/Listening/i.test(s)) continue // Part II Listening
      // 确认附近没有 Listening
      const window = lines.slice(Math.max(0, i - 1), i + 3).join(' ')
      if (/Listening/i.test(window) && !/Part III|Part JU/i.test(s)) continue
      return i
    }
    // 备选：Part III 标签（即使 Reading 在下一行）
    if (/Part\s+(JU|Jll|III|Il|lI|ll|11|l|Ⅳ|IV|Ⅲ)/i.test(s) && !/Listening|Writing|Translation/i.test(s)) {
      // 附近 3 行内有 Reading Comprehension
      const window = lines.slice(i, Math.min(lines.length, i + 5)).join(' ')
      if (/Reading\s+Comprehension/i.test(window)) return i
    }
  }
  return -1
}

function findPartIV(lines, fromIdx) {
  for (let i = fromIdx; i < lines.length; i++) {
    if (/^Part\s+IV|^Translation/i.test(lines[i])) return i
  }
  return lines.length
}

// 在 lines 数组里，从 from 开始找第一个匹配正则的行号
function find(lines, regex, from = 0) {
  for (let i = from; i < lines.length; i++) {
    if (regex.test(lines[i])) return i
  }
  return -1
}

// 把各种空位写法统一成 {{26}} … {{35}}
// 候选来源：① 裸数字 26–35（含 26stress 这种粘连）② 下划线 OCR 噪声（___1L / _of / 33_back）
// 选定规则：数字候选按 26→35 贪心匹配；恰好 10 个就用它，否则看噪声候选，
// 再否则两者合并后恰好 10 个也可接受；都不满足时保守地只替换数字候选。
function normalizeBlanks(text) {
  const parts = text.replace(/\s+/g, ' ').trim().split(' ')
  const marks = [] // { i, num, text, raw }

  parts.forEach((raw, i) => {
    if (raw.includes('_')) {
      // 去掉所有下划线后再判断（"___29___." → "29."；"_of" → "of"）
      const tAll = raw.replace(/_/g, '')
      const lead = (tAll.match(/^[("'[“‘（「『]*/) || [''])[0]
      const trail = (tAll.match(/[)"'\].,;:!?”’）」。，；：！？]*$/) || [''])[0]
      const t = tAll.slice(lead.length, tAll.length - trail.length)
      // 数字 + 粘连后缀：33_back
      let m = t.match(/^(2[6-9]|3[0-5])([A-Za-z].*)$/)
      if (m) {
        marks.push({ i, num: Number(m[1]), text: lead + '\u0001' + m[2] + trail, raw })
        return
      }
      if (/^(2[6-9]|3[0-5])$/.test(t)) {
        marks.push({ i, num: Number(t), text: lead + '\u0001' + trail, raw })
        return
      }
      // 短且非纯小写单词 → 视为 OCR 噪声空位（lL / 1L / eL / 2_2）
      if (t.length <= 4 && !/^[a-z]+$/.test(t)) {
        marks.push({ i, num: null, text: '\u0001', raw })
        return
      }
      // 其余（_of / _a）只是空位残留的下划线，还原成正文
      parts[i] = lead + t + trail
      return
    }
    const lead = (raw.match(/^[("'[“‘（「『]*/) || [''])[0]
    const trail = (raw.match(/[)"'\].,;:!?”’）」。，；：！？]*$/) || [''])[0]
    const core = raw.slice(lead.length, raw.length - trail.length)
    let m = core.match(/^(2[6-9]|3[0-5])$/)
    if (m) {
      marks.push({ i, num: Number(m[1]), text: lead + '\u0001' + trail, raw })
      return
    }
    m = core.match(/^(2[6-9]|3[0-5])([A-Za-z].*)$/)
    if (m) marks.push({ i, num: Number(m[1]), text: lead + '\u0001' + m[2] + trail, raw })
  })

  const numeric = marks.filter((m) => m.num !== null)
  const junk = marks.filter((m) => m.num === null)

  // 数字候选按 26→35 贪心匹配（跳过正文里的干扰数字）
  let expected = 26
  const greedy = []
  for (const m of numeric) {
    if (m.num === expected) {
      greedy.push(m)
      expected++
    }
  }

  let chosen = null
  if (greedy.length === 10) chosen = greedy
  else if (junk.length === 10) chosen = junk
  else if (greedy.length + junk.length === 10) chosen = [...greedy, ...junk].sort((a, b) => a.i - b.i)

  const assigned = new Map()
  if (chosen) {
    chosen.forEach((m, k) => assigned.set(m.i, 26 + k))
  } else {
    for (const m of numeric) if (!assigned.has(m.i)) assigned.set(m.i, m.num)
  }

  return parts
    .map((p, i) => {
      const mark = marks.find((m) => m.i === i)
      if (!mark) return p
      if (!assigned.has(i)) return mark.raw
      return mark.text.replace(/\u0001/g, `{{${assigned.get(i)}}}`)
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// ---------- Section A Banked Cloze ----------
function extractBanked(lines, fromIdx) {
  // 1) 用 "ten blanks" Directions 定位选词填空（比 Section A 标签可靠）
  let dirIdx = -1
  for (let j = fromIdx; j < lines.length; j++) {
    if (/ten\s+blanks/i.test(lines[j]) && /Directions|In\s+this\s+section/i.test(lines[j])) {
      dirIdx = j
      break
    }
    if (/^Part\s+IV|^Translation/i.test(lines[j])) break
  }
  // 兜底：直接找 Section A 标签
  if (dirIdx < 0) dirIdx = find(lines, /^Section\s*A\b/i, fromIdx)
  if (dirIdx < 0) return null

  // 2) Directions 结束位置：出现 "more than once." 的下一行即正文
  let passStart = -1
  for (let j = dirIdx; j < Math.min(lines.length, dirIdx + 15); j++) {
    if (/more\s+than\s+once|words\s+in\s+the\s+bank/i.test(lines[j])) {
      passStart = j + 1
    }
  }
  if (passStart < 0) passStart = dirIdx + 1
  while (passStart < lines.length && /^Directions/i.test(lines[passStart])) passStart++

  // 3) 选项词表起点：正文之后第一行 A) xxx
  let optStart = -1
  for (let j = passStart; j < lines.length; j++) {
    if (/^[A-O]\)\s*[A-Za-z]/.test(lines[j])) {
      optStart = j
      break
    }
    if (/^Section\s+B|^ten\s+statements|^36[\.\)]/i.test(lines[j])) break
  }
  if (optStart < 0) return null

  // 4) 选项词表终点：交给 extractBankedOptions 自然结束（词表可能被 "Section B" 页眉打断）
  const optEnd = Math.min(lines.length, optStart + 40)

  // 5) 组装 passage
  let passage = lines.slice(passStart, optStart).join(' ')
  passage = passage.replace(/\s+/g, ' ').trim()
  // 去掉题干说明行（"Questions 26 to 35 are based on the following passage."）
  passage = passage.replace(
    /^Questions?\s+\d+\s+to\s+\d+\s+are\s+based\s+on\s+the\s+following\s+passage\.\s*/i,
    '',
  )
  passage = normalizeBlanks(passage)

  // 6) 提取选项
  const options = extractBankedOptions(lines.slice(optStart, optEnd))

  return { passage, options }
}

// 解析词表行：支持单/双/三栏，并修正 OCR 噪声（"0 )" → "O)"、"J )" → "J)"、"ID)" → "I)"）
// 返回 [[letter, word], ...]；若该行不是纯词表行则返回 null
function parseOptLine(line) {
  const s = line
    .replace(/(^|\s)[0O]\s*\)\s*/g, '$1O) ')
    .replace(/(^|\s)[Il1|]\s*[Dd]\s*\)\s*/g, '$1I) ')
    .replace(/(^|\s)[Il1|]\s*\)\s*/g, '$1I) ')
  const re = /([A-O])\s*\)\s*([^\s]+)/g
  const pairs = []
  let residual = ''
  let lastEnd = 0
  let m
  while ((m = re.exec(s)) !== null) {
    residual += s.slice(lastEnd, m.index)
    lastEnd = m.index + m[0].length
    pairs.push([m[1], m[2]])
  }
  residual += s.slice(lastEnd)
  if (pairs.length === 0) return null
  // 去掉所有词条后只剩空白/标点，才认为是词表行（排除段落正文）
  if (!/^[\s.,;·]*$/.test(residual)) return null
  return pairs
}

function extractBankedOptions(lines) {
  const map = new Map()
  let allowSkip = 1 // 允许跨过一次 "Section B" 页眉噪声（词表被分页打断的情况）
  for (const raw of lines) {
    const line = raw.trim()
    const pairs = parseOptLine(line)
    if (pairs) {
      for (const [letter, word] of pairs) {
        if (!map.has(letter)) map.set(letter, word)
      }
      if (map.size >= 15) break
      continue
    }
    if (/^Section\s+B/i.test(line) && allowSkip > 0) {
      allowSkip--
      continue
    }
    break
  }
  const sorted = []
  for (const letter of 'ABCDEFGHIJKLMNO') {
    if (map.has(letter)) sorted.push({ letter, word: map.get(letter) })
  }
  return sorted
}

// ---------- Section B Matching ----------
function extractMatching(lines, fromIdx) {
  // 1) 优先用 "ten statements" Directions 定位（Section B 字样可能出现在词表中间）
  let sbIdx = -1
  for (let j = fromIdx; j < lines.length; j++) {
    if (/ten\s+statements/i.test(lines[j])) {
      sbIdx = j
      break
    }
  }
  if (sbIdx < 0) sbIdx = find(lines, /^Section\s+B/i, fromIdx)
  if (sbIdx < 0) return null

  // 找段落起始（A) 或 [ A ]；")" 后可能没有空格）
  let paraStart = -1
  for (let j = sbIdx + 1; j < lines.length; j++) {
    if (/^[A-Z]\)\s*[A-Za-z“"]/.test(lines[j]) || /^\[\s*[A-Z]\s*\]/.test(lines[j])) {
      paraStart = j
      break
    }
  }
  if (paraStart < 0) return null

  // 找题目起始（36. 可能被 OCR 成 "3B." 等，所以放宽为任意两位"数字/易混字符"）
  let qStart = -1
  for (let j = paraStart; j < lines.length; j++) {
    if (/^[34][0-9OIlBS|sGb]\s*[\.\)]\s+\S/.test(lines[j])) {
      qStart = j
      break
    }
  }
  if (qStart < 0) return null

  // 解析段落
  const paragraphs = []
  let cur = null
  for (let j = paraStart; j < qStart; j++) {
    const m = lines[j].match(/^([A-Z])\)\s*(.*)/) || lines[j].match(/^\[\s*([A-Z])\s*\]\s*(.*)/)
    if (m) {
      if (cur) paragraphs.push(cur)
      cur = { label: m[1], text: m[2].replace(/\s+/g, ' ').trim() }
    } else if (cur) {
      cur.text = (cur.text + ' ' + lines[j]).replace(/\s+/g, ' ').trim()
    }
  }
  if (cur) paragraphs.push(cur)

  // 跳过 Directions 残留
  let qi = qStart
  while (qi < lines.length && /Directions|Answer Sheet/i.test(lines[qi])) qi++

  // 找题目终点
  let qEnd = lines.length
  for (let j = qi; j < lines.length; j++) {
    if (/^Section\s+C|Passage\s+One|46[\.\)]/.test(lines[j])) {
      qEnd = j
      break
    }
  }

  // 解析题目（题号统一按出现顺序重排为 36–45，避免 OCR 把数字认错）
  const questions = []
  let curQ = null
  for (let j = qi; j < qEnd; j++) {
    const m = lines[j].match(/^[34][0-9OIlBS|sGb]\s*[\.\)]\s*(.*)/)
    if (m) {
      if (curQ && curQ.text.length > 5) questions.push(curQ)
      curQ = { n: 0, text: m[1].replace(/\s+/g, ' ').trim() }
    } else if (curQ) {
      curQ.text = (curQ.text + ' ' + lines[j]).replace(/\s+/g, ' ').trim()
    }
  }
  if (curQ && curQ.text.length > 5) questions.push(curQ)
  questions.forEach((q, i) => {
    q.n = 36 + i
  })

  return { title: '', paragraphs, questions }
}

// ---------- Section C Careful Reading ----------
function extractCareful(lines, fromIdx) {
  // 找 Section C 起始 或 Passage One
  let start = find(lines, /Section\s+C|Passage\s+One|Passage\s+I\b/i, fromIdx)
  if (start < 0) return []

  const passages = []
  let cur = null
  let mode = 'passage'

  for (let j = start; j < lines.length; j++) {
    const line = lines[j]
    const pm = line.match(/^Passage\s+(One|Two|Three|I|II|III)\b/i)
    const qm = line.match(/^[45][0-9OIlBS|sGb]\s*[\.\)]\s*(.*)/)

    if (pm) {
      if (cur) passages.push(cur)
      cur = { passage: '', questions: [] }
      mode = 'passage'
      continue
    } else if (/^Section\s+[ABC]/i.test(line) && cur) {
      // 可能 Section C 后直接跟 Passage One，不创建新 cur
      continue
    }

    if (!cur) cur = { passage: '', questions: [] }

    if (qm) {
      mode = 'question'
      cur.questions.push({
        n: 0,
        text: qm[1].replace(/\s+/g, ' ').trim(),
        options: [],
        answer: '',
      })
    } else if (mode === 'passage') {
      cur.passage = (cur.passage + ' ' + line).replace(/\s+/g, ' ').trim()
    } else if (mode === 'question') {
      // 选项行：A) xxx 或同一行多个 A) xxx C) yyy
      const multiMatch = line.match(/([A-D])\)\s*([A-Za-z][^A-D\)]*)/g)
      if (multiMatch && multiMatch.length >= 2) {
        const lastQ = cur.questions[cur.questions.length - 1]
        for (const fm of multiMatch) {
          const inner = fm.match(/([A-D])\)\s*(.+)/)
          if (inner)
            lastQ.options.push({
              letter: inner[1],
              text: inner[2].replace(/\s+/g, ' ').trim(),
            })
        }
      } else {
        const om = line.match(/^([A-D])\)\s*(.*)/)
        if (om) {
          const lastQ = cur.questions[cur.questions.length - 1]
          lastQ.options.push({ letter: om[1], text: om[2].replace(/\s+/g, ' ').trim() })
        }
      }
    }
  }
  if (cur) passages.push(cur)

  // 题号统一按顺序重排为 46–55
  let n = 46
  for (const p of passages) {
    for (const q of p.questions) q.n = n++
  }

  return passages.filter((p) => p.passage.length > 50 && p.questions.length >= 3)
}

async function processOne(cfg) {
  const { year, month, set, zt, docx, out } = cfg
  if (docx) {
    if (!fs.existsSync(docx)) return false
  } else if (!fs.existsSync(zt)) return false

  // docx 优先（真题 PDF 存在纯扫描页、文字层缺失时使用）
  const src = docx || zt
  const raw = docx ? await readDocxText(docx) : await readPdfText(zt)
  const lines = cleanLines(raw)

  const partIII = findPartIII(lines)
  if (partIII < 0) {
    console.error('  ✗ 未找到 Part III')
    return false
  }
  const partIV = findPartIV(lines, partIII)
  const partIII_lines = lines.slice(partIII + 1, partIV)

  // 解析三个 Section（banked 需要完整 lines 以定位 Directions）
  const banked = extractBanked(lines, partIII)
  const matching = extractMatching(partIII_lines, 0)
  const careful = extractCareful(partIII_lines, 0)

  const result = {
    id: `cet6-${year}-${String(month).padStart(2, '0')}-s${set}`,
    meta: {
      level: 'CET6',
      year,
      month,
      set,
      source: path.basename(src),
      answerSource: '待人工核对',
      verified: false,
      warnings: [],
    },
    reading: {
      banked: {
        passage: banked?.passage || '',
        options: banked?.options || [],
        answers: Array(10).fill(''),
      },
      matching: {
        title: matching?.title || '',
        paragraphs: matching?.paragraphs || [],
        questions: matching?.questions || [],
        answers: Array(10).fill(''),
      },
      careful:
        careful?.map((p) => ({
          passage: p.passage,
          questions: p.questions.map((q) => ({ ...q, answer: '' })),
        })) || [],
    },
  }

  // 检查 warnings
  const blankCount = (result.reading.banked.passage.match(/\{\{\d+\}\}/g) || []).length
  if (
    !banked ||
    banked.passage.length < 500 ||
    banked.options.length < 14 ||
    blankCount !== 10
  ) {
    result.meta.warnings.push(
      `banked: passage=${banked?.passage?.length || 0}, opts=${banked?.options?.length || 0}, blanks=${blankCount}`,
    )
  }
  const mq = matching?.questions?.length || 0
  if (!matching || matching.paragraphs.length < 10 || mq !== 10) {
    result.meta.warnings.push(`matching: paras=${matching?.paragraphs?.length || 0}, qs=${mq}`)
  }
  const cq = (careful || []).reduce((s, p) => s + p.questions.length, 0)
  if (!careful || careful.length !== 2 || cq !== 10) {
    result.meta.warnings.push(
      `careful: passages=${careful?.length || 0}, qs=${careful?.map((p) => p.questions.length).join('+') || '0'}`,
    )
  }
  if (result.meta.warnings.length === 0) result.meta.verified = true

  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, JSON.stringify(result, null, 2), 'utf8')

  const icon = result.meta.warnings.length === 0 ? '✓' : '△'
  console.log(
    `  ${icon} s${set} banked=${banked?.options?.length || 0}opt/${(banked?.passage?.match(/\{\{\d+\}\}/g) || []).length}blank matching=${matching?.paragraphs?.length || 0}p${matching?.questions?.length || 0}q careful=${careful?.length || 0}p${careful?.map(p=>p.questions.length).join('+') || '0'}q`,
  )
  return true
}

async function main() {
  const args = process.argv.slice(2)
  const idx = args.indexOf('--batch')
  if (idx < 0 || !args[idx + 1]) {
    console.error('用法: node scripts/cet6-pdf-to-json.mjs --batch <配置json>')
    process.exit(1)
  }
  const cfg = JSON.parse(fs.readFileSync(args[idx + 1], 'utf8'))
  let ok = 0, verified = 0
  for (const c of cfg) {
    const r = await processOne(c)
    if (r) {
      ok++
      const j = JSON.parse(fs.readFileSync(c.out, 'utf8'))
      if (j.meta.verified) verified++
    }
  }
  console.log(`\n总计 ${cfg.length} 套，成功 ${ok}，其中 ${verified} 套完全可用`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
