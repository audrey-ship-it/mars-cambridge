// CET-4 真题 docx → JSON 转换脚本
// 用法：
//   node scripts/docx-to-json.mjs <docx路径> --year 2024 --month 6 --set 1 \
//     [--answers 'banked=DMLFGIOBEJ;matching=EHBFDAICJG;careful=CBDAD,BCDAC'] \
//     [--out src/data/generated/cet4-2024-06-s1.json]
//
// 答案字母串说明：banked 为 26-35 共 10 个字母；matching 为 36-45 共 10 个段落字母；
// careful 为两篇，每篇 5 个字母，用英文逗号分隔（46-50,51-55 顺序）。
// 答案必须来自解析 PDF，人工核对后填入；未填的套题 verified=false。
//
// 已知坑：docx 两栏排版会把「上一题的 B/D 选项 + 下一题题干」挤在同一行，
// 需先把行内嵌的题号（36-55）拆分为独立行再解析。

import fs from 'node:fs'
import path from 'node:path'
import mammoth from 'mammoth'

// ---------- CLI ----------
const args = process.argv.slice(2)
const docxPath = args[0]
function argOf(name, fallback) {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : fallback
}
if (!docxPath || !fs.existsSync(docxPath)) {
  console.error('用法: node scripts/docx-to-json.mjs <docx路径> --year 2024 --month 6 --set 1 [--answers ...] [--out ...]')
  process.exit(1)
}
const year = parseInt(argOf('--year', '0'), 10)
const month = parseInt(argOf('--month', '0'), 10)
const setNo = parseInt(argOf('--set', '1'), 10)
const answersArg = argOf('--answers', '')
const outPath = argOf('--out', '')
const setId = `cet4-${year}-${String(month).padStart(2, '0')}-s${setNo}`

// ---------- 文本提取 ----------
const { value: rawText } = await mammoth.extractRawText({ path: docxPath })
const allLines = rawText
  .split(/\n+/)
  // 清除行中合并的页脚（两栏 docx 会把「·2024 年6月四级真题(第一套) ·4」挤进正文行中间）
  .map((s) => s
    .replace(/\s*\d{0,2}\s*·\s*\d{4}\s*年\d{1,2}月[四六]级真题\s*\(第[一二三四]套\)\s*·\s*\d{0,2}\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim())
  .filter(Boolean)
  // 去掉独立页脚行（如 “·2024年6月四级真题(第一套) ·”）
  .filter((s) => !/^[·\d\s年月四六级真题(第套)页-]+$/.test(s) || s.length > 8)

// 把行内嵌的题号（前有正文、后有「NN.」）拆分为独立行
function splitEmbeddedQuestions(lines, qre) {
  const out = []
  const re = new RegExp('(?<=.)\\s+(' + qre + ')\\.\\s*(?=\\S)')
  for (const line of lines) {
    let segs = [line]
    let changed = true
    while (changed) {
      changed = false
      for (let i = 0; i < segs.length; i++) {
        const m = segs[i].match(re)
        if (m && m.index > 0) {
          const head = segs[i].slice(0, m.index).trim()
          const tail = segs[i].slice(m.index + m[0].length).trim()
          segs.splice(i, 1, head, `${m[1]}. ${tail}`)
          changed = true
          break
        }
      }
    }
    out.push(...segs)
  }
  return out
}

// ---------- 定位大区块 ----------
const iReadingPart = allLines.findIndex((l) => /Reading\s*Comprehension/.test(l) && /40 minutes/.test(l))
const iTranslationPart = allLines.findIndex((l) => /Translation/.test(l) && /30 minutes/.test(l))
if (iReadingPart < 0) {
  console.error('未找到 Reading Comprehension 标题，请检查 docx')
  process.exit(1)
}
const endReading = iTranslationPart > 0 ? iTranslationPart : allLines.length
const reading = allLines.slice(iReadingPart, endReading)

const rSecA = reading.findIndex((l) => l === 'Section A')
const rSecB = reading.findIndex((l) => l === 'Section B')
const rSecC = reading.findIndex((l) => l === 'Section C')
if (rSecA < 0 || rSecB < 0 || rSecC < 0) {
  console.error('未找到 Section A/B/C 标题，请检查 docx 结构')
  process.exit(1)
}

// ---------- Section A 选词填空 ----------
const secA = reading.slice(rSecA, rSecB)
const bankStart = secA.findIndex((l) => /^[A-O]\)/.test(l))
const passageLines = secA.filter((l, i) => i > 0 && !/^Directions/.test(l) && (bankStart < 0 || i < bankStart))
let bankedPassage = passageLines.join(' ')
// 空位标记：独立的 26-35 数字 → {{n}}
bankedPassage = bankedPassage.replace(/(?:^|[\s(])\s*(2[6-9]|3[0-5])\s*(?=[\s.,)a-z(]|$)/gi, (m, n) => ` {{${n}}} `)
bankedPassage = bankedPassage.replace(/\s+/g, ' ').trim()

const options = []
if (bankStart >= 0) {
  for (let i = bankStart; i < secA.length; i++) {
    const m = secA[i].match(/^([A-O])\)\s*([a-zA-Z'’-]+)$/)
    if (m) options.push({ letter: m[1], word: m[2] })
  }
}

// ---------- Section B 长篇阅读 ----------
const secB = splitEmbeddedQuestions(reading.slice(rSecB, rSecC), '3[6-9]|4[0-5]')
const paraStartB = secB.findIndex((l) => /^[A-K]\)/.test(l))
const dirEndB = secB.findIndex((l) => /^Directions/.test(l))
let bTitle = ''
for (let i = dirEndB + 1; i < paraStartB; i++) {
  if (!/^(Directions|Answer the questions)/.test(secB[i])) bTitle += secB[i] + ' '
}
bTitle = bTitle.trim()

const paragraphs = []
const matchingQuestions = []
for (const line of secB.slice(paraStartB)) {
  const pm = line.match(/^([A-K])\)\s*(.*)/)
  if (pm) {
    paragraphs.push({ label: pm[1], text: pm[2].trim() })
    continue
  }
  const qm = line.match(/^(3[6-9]|4[0-5])\.\s*(.*)/)
  if (qm) {
    matchingQuestions.push({ n: parseInt(qm[1], 10), text: qm[2].trim() })
    continue
  }
  // 续行：第一个题号出现前 → 并入上一个段落；之后 → 并入上一题
  if (matchingQuestions.length === 0) {
    if (paragraphs.length) paragraphs[paragraphs.length - 1].text += ' ' + line
  } else {
    matchingQuestions[matchingQuestions.length - 1].text += ' ' + line
  }
}

// ---------- Section C 仔细阅读 ----------
const secC = splitEmbeddedQuestions(reading.slice(rSecC), '4[6-9]|5[0-5]')
const passagesC = []
let curPassageLines = []
let curQuestions = []
function flushPassage() {
  if (curQuestions.length === 0 && curPassageLines.length === 0) return
  passagesC.push({ passage: curPassageLines.join(' ').trim(), questions: curQuestions })
  curPassageLines = []
  curQuestions = []
}
function collectOptions(tokens) {
  return tokens
    .map((t) => {
      const m = t.match(/^([A-D])\)\s*(.*)/)
      return m ? { letter: m[1], text: m[2].trim() } : null
    })
    .filter(Boolean)
}
// 按「字母)」位置切分（两栏 docx 里 C) 常与前文无空格粘连，如 “others.C)Our…”）
function splitOptionTokens(s) {
  return s.split(/(?=[A-D]\))/)
}
for (const line of secC) {
  const qm = line.match(/^(4[6-9]|5[0-5])\.\s*(.*)/)
  if (qm) {
    const n = parseInt(qm[1], 10)
    if (n === 51 || (n === 46 && curQuestions.length > 0)) flushPassage()
    const optSplit = splitOptionTokens(qm[2])
    curQuestions.push({ n, text: optSplit[0].trim(), options: collectOptions(optSplit.slice(1)) })
    continue
  }
  if (curQuestions.length === 0) {
    if (!/^Directions/.test(line)) curPassageLines.push(line)
    continue
  }
  // 题目之间的续行：补齐上一题缺失的选项，或并入下一篇正文
  const lastQ = curQuestions[curQuestions.length - 1]
  if (/[A-D]\)/.test(line)) {
    const merged = [...lastQ.options, ...collectOptions(splitOptionTokens(line))]
    const seen = new Set()
    lastQ.options = merged.filter((o) => (seen.has(o.letter) ? false : (seen.add(o.letter), true)))
  } else if (lastQ.options.length >= 4 && curQuestions.length === 5) {
    curPassageLines.push(line)
  }
}
flushPassage()
// 选项按 A-D 排序
passagesC.forEach((p) => p.questions.forEach((q) => q.options.sort((a, b) => a.letter.localeCompare(b.letter))))

// ---------- 翻译 ----------
let translation = null
if (iTranslationPart >= 0) {
  const tLines = allLines.slice(iTranslationPart + 1)
  const zh = tLines.filter((l) => /[\u4e00-\u9fff]/.test(l)).join('')
  translation = {
    directions: 'For this part, you are allowed 30 minutes to translate a passage from Chinese into English.',
    chinese: zh,
  }
}

// ---------- 答案 ----------
const answersBanked = Array(10).fill(null)
const answersMatching = Array(10).fill(null)
let hasAnswers = false
if (answersArg) {
  for (const p of answersArg.split(';').map((s) => s.trim())) {
    const [k, v] = p.split('=')
    const letters = (v || '').toUpperCase().replace(/[^A-Z]/g, '')
    if (k === 'banked' && letters.length === 10) {
      for (let i = 0; i < 10; i++) answersBanked[i] = letters[i]
      hasAnswers = true
    } else if (k === 'matching' && letters.length === 10) {
      for (let i = 0; i < 10; i++) answersMatching[i] = letters[i]
      hasAnswers = true
    } else if (k === 'careful' && /^[A-D]{10}$/.test(letters)) {
      let qi = 0
      for (const psg of passagesC) for (const q of psg.questions) q.answer = letters[qi++] || null
      hasAnswers = true
    }
  }
}

// ---------- 校验与输出 ----------
const warnings = []
if (options.length !== 15) warnings.push(`选词填空选项数=${options.length}（应为 15）`)
const blankCount = (bankedPassage.match(/\{\{(\d+)\}\}/g) || []).length
if (blankCount !== 10) warnings.push(`选词填空空位数=${blankCount}（应为 10）`)
if (paragraphs.length < 10) warnings.push(`长篇阅读段落数=${paragraphs.length}（应 ≥10）`)
if (matchingQuestions.length !== 10) warnings.push(`长篇阅读题数=${matchingQuestions.length}（应为 10）`)
if (passagesC.length !== 2) warnings.push(`仔细阅读篇数=${passagesC.length}（应为 2）`)
passagesC.forEach((p, i) => {
  if (p.questions.length !== 5) warnings.push(`仔细阅读第${i + 1}篇题数=${p.questions.length}（应为 5）`)
  p.questions.forEach((q) => {
    if (q.options.length !== 4) warnings.push(`仔细阅读第${q.n}题选项数=${q.options.length}（应为 4）`)
  })
})
if (!answersArg) warnings.push('未提供 --answers，答案为空；请从解析 PDF 核对后补录（verified 保持 false）')

const source = path.relative('D:\\workspace_sunny\\题库\\cet', docxPath).replace(/\\/g, '/')
const result = {
  id: setId,
  meta: {
    level: 'CET4',
    year,
    month,
    set: setNo,
    source: `真题/${source}`,
    answerSource: hasAnswers ? '解析 PDF（人工读图逐题核对）' : '未录入，待从解析 PDF 核对',
    verified: hasAnswers,
    warnings,
  },
  reading: {
    banked: { passage: bankedPassage, options, answers: answersBanked },
    matching: { title: bTitle, paragraphs, questions: matchingQuestions, answers: answersMatching },
    careful: passagesC,
  },
  translation,
}

const json = JSON.stringify(result, null, 2)
if (outPath) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, json, 'utf8')
  console.log(`已写出 ${outPath}`)
} else {
  console.log(json)
}
if (warnings.length) {
  console.error('⚠ 校验警告:')
  warnings.forEach((w) => console.error('  - ' + w))
} else {
  console.log('✓ 结构校验通过（内容仍需人工核对）')
}
