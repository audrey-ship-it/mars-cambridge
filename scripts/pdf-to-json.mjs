// CET 真题 PDF（文字层版）→ JSON 转换脚本（阅读部分 + 翻译）
// 与 docx-to-json.mjs 产物结构完全一致，可直接注册进 readingSets.js。
//
// 用法（批量模式，规避命令行中文路径编码问题）：
//   node scripts/pdf-to-json.mjs --batch <配置json>
// 配置文件为 UTF-8 JSON 数组：
//   [{ "year":2023,"month":6,"set":1,
//      "zt":"<真题PDF绝对路径>",
//      "jxBanked":"<选词填空解析PDF绝对路径>",
//      "jxMatching":"<长篇阅读解析PDF绝对路径>",
//      "jxCareful":"<仔细阅读解析PDF绝对路径>",
//      "out":"src/data/generated/cet4-2023-06-s1.json" }]
//
// 答案从专项解析 PDF 正则提取（锚点：【考点】→ X ) 【语…；【定位】→ X ) 【精析】），
// 提取后需人工抽检再置 verified=true（本脚本始终输出 verified=false）。
//
// 已知格式特征（2023.06 三套验证）：
// - 页脚行：-- N of M -- 与 「YYYY 年 M 月四级真题第 K 套 第 P 页，共 T 页」
// - 选词选项两栏同行（A) xxx ... I) xxx），末行可能单列
// - Section B 段落以 A)…K) 开头独立成行，题目 36-45 可跨行
// - Section C 选项 A)-D) 各占一行，可跨页（页脚剔除后自然续接）

import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'

// ---------- CLI ----------
const args = process.argv.slice(2)
const batchIdx = args.indexOf('--batch')
if (batchIdx < 0 || !args[batchIdx + 1]) {
  console.error('用法: node scripts/pdf-to-json.mjs --batch <配置json>')
  process.exit(1)
}
const batchFile = args[batchIdx + 1]
const CET_ROOT = 'D:\\workspace_sunny\\题库\\cet'

async function readPdfText(pdfPath) {
  const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(pdfPath)) })
  const result = await parser.getText()
  await parser.destroy()
  return result.text
}

// ---------- 文本清洗 ----------
// OCR 常见字形混淆（保守单词级修复，仅作用于真题展示文本）
const OCR_WORD_FIXES = [
  [/\bo\s+f\b/g, 'of'],
  [/\bO\s+f\b/g, 'of'],
  [/\bfbr\b/g, 'for'],
  [/\bf bnd\b/g, 'fond'],
  [/\bfallowing\b/g, 'following'],
  [/\bfbod\b/g, 'food'],
  [/\bfbcus\b/g, 'focus'],
  // 2026.06 s3：撇号被 OCR 识成数字 9/5 或 ^
  [/([a-zA-Z])9(?=[\s,.;:!?"’']|$)/g, "$1'"],
  [/([a-zA-Z])5(?=[\s,.;:!?"’']|$)/g, "$1'"],
  [/\^/g, "'"],
  // 引号被 OCR 识成 J
  [/\bu\s+m\s+J\b/g, 'um,'],
  [/\bu\s+h\s+J\b/g, 'uh,'],
  [/\bD\s+on't\b/g, "Don't"],
  // 2026.06 s3 翻译段中文/注释噪声
  [/礼也/g, '礼仪'],
  [/e\s+tiq\s+u\s+e\s+tte/g, 'etiquette'],
]
function cleanLines(raw) {
  return raw
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((s) => !/^--\s*\d+\s*of\s*\d+\s*--$/.test(s))
    .filter((s) => !/第\s*\d+\s*页\s*[，,]\s*共\s*\d+\s*页$/.test(s))
    // 2024.12 OCR 版页眉/标题行（含「2024年 12月…真题」），剔除避免混入正文
    .filter((s) => !(/20\d{2}\s*年/.test(s) && /真\s*题/.test(s)))
    // OCR 把字母 O 识成数字 0（如选词选项「0) speculate」）；「30 )」等数字带括号不受影响
    .map((s) => s.replace(/\b0\s*\)/g, 'O)'))
    .map((s) => OCR_WORD_FIXES.reduce((acc, [re, to]) => acc.replace(re, to), s))
}

// ---------- 解析答案（专项解析 PDF） ----------
// 解析 PDF 为扫描 OCR 文本，噪声多：题号数字内混空格/字母（「3 L .」「45 0【定位】」）、
// 【被识读成 1、括号全半角不一、答案字母括号偶缺。策略：
// 1) 题号噪声容错捕获 + 归一化（O→0，I/l/L→1），按 26-35/36-45/46-55 顺序校验；
// 2) 相邻题号之间用「字母 ) 【锚」提取答案，锚点为讲解栏起始（【语法判断】/【精析】），
//    避免误匹配讲解正文里的段落字母。
function normNum(s) {
  return s.replace(/\s+/g, '').replace(/[Oo]/g, '0').replace(/[IlL]/g, '1').slice(0, 2)
}
function extractAnswersByMarkers(text, expectedStart, anchorRe, confusionMap) {
  const re = /(?:^|\n)\s*([0-9OIlL\s]{1,5})\s*[.,。0Oo1lL|!！]{0,2}\s*[【\[]?\s*[^】\]]{0,6}[】\]]/g
  const accepted = []
  let expected = expectedStart
  let m
  while ((m = re.exec(text)) && expected < expectedStart + 10) {
    const n = parseInt(normNum(m[1]), 10)
    if (Number.isNaN(n)) continue
    if (n === expected) {
      accepted.push({ n, start: m.index, body: m.index + m[0].length })
      expected++
    } else if (n > expected && n < expectedStart + 10) {
      // 前面有题目标记漏识别，跳号接受，缺口留在 answers 中待人工补
      accepted.push({ n, start: m.index, body: m.index + m[0].length })
      expected = n + 1
    }
    // n < expected：重复噪声，跳过
  }
  const answers = {}
  for (let i = 0; i < accepted.length; i++) {
    const end = i + 1 < accepted.length ? accepted[i + 1].start : accepted[i].body + 800
    const w = text.slice(accepted[i].body, end)
    let am = w.match(anchorRe)
    if (!am && confusionMap) {
      // OCR 字形混淆兜底：仅当无效字母（合法范围外）出现在行首+【精析】前
      const cm = w.match(new RegExp('(?:^|\\n)\\s*([' + Object.keys(confusionMap).join('') + '])\\s*[\\)）]?\\s*【\\s*精\\s*析\\s*】'))
      if (cm) am = [null, confusionMap[cm[1]]]
    }
    answers[accepted[i].n] = am ? am[1] : null
  }
  return { answers, complete: expected === expectedStart + 10 }
}
function parseJxBanked(t) {
  return extractAnswersByMarkers(t, 26, /([A-O])\s*[\)）]\s*【\s*语/)
}
function parseJxMatching(t) {
  // 长篇段落范围 A-P（2023.12 第2套达16段）；H 可被 OCR 成 W
  return extractAnswersByMarkers(t, 36, /([A-P])\s*[\)）]?\s*【\s*精\s*析\s*】/, { W: 'H' })
}
function parseJxCareful(t) {
  // 仔细阅读 A-D；D 可被 OCR 成 O/0
  return extractAnswersByMarkers(t, 46, /([A-D])\s*[\)）]?\s*【\s*精\s*析\s*】/, { O: 'D', 0: 'D' })
}

// 在行数组中定位可能被换行拆开的短语：拼成流文本搜索，再映射回行号
function findPhraseLine(lines, phrase) {
  const joined = lines.map((l) => l + ' ').join('')
  const idx = joined.indexOf(phrase)
  if (idx < 0) return -1
  const end = idx + phrase.length
  let acc = 0
  for (let i = 0; i < lines.length; i++) {
    acc += lines[i].length + 1
    if (acc >= end) return i
  }
  return lines.length - 1
}

// ---------- 阅读部分解析 ----------
function parseReading(lines) {
  // 2024.12 OCR 版把「Part III」识读成「Part in」「Part m」等，放宽锚点
  const iStart = lines.findIndex(
    (l) =>
      /^Part\s*\S{1,6}\s+Reading\s+Comprehension/i.test(l) ||
      (/Part\s*III/i.test(l) && /Reading Comprehension/i.test(l)),
  )
  const iEnd = lines.findIndex((l) => /Part\s*IV/i.test(l) && /Translation/i.test(l))
  if (iStart < 0 || iEnd < 0 || iEnd <= iStart) throw new Error('未定位到 Part III 阅读 / Part IV 翻译')
  const reading = lines.slice(iStart + 1, iEnd)
  const translationLines = lines.slice(iEnd + 1)

  const iA = reading.findIndex((l) => l === 'Section A')
  const iB = reading.findIndex((l) => l === 'Section B')
  const iC = reading.findIndex((l) => l === 'Section C')
  if (iA < 0 || iB < 0 || iC < 0) throw new Error('未找到 Section A/B/C')

  // ----- Section A 选词填空 -----
  const secA = reading.slice(iA + 1, iB)
  let iDirA = findPhraseLine(secA, 'words in the bank more than once')
  if (iDirA < 0) iDirA = findPhraseLine(secA, 'more than once')
  if (iDirA < 0) throw new Error('未找到 Section A Directions 结尾句')
  // 选项块起点：第一个以 A) 开头且内容为单词的行
  const iOptStart = secA.findIndex((l, i) => i > iDirA && /^[A-O]\)\s*[a-zA-Z]/.test(l))
  if (iOptStart < 0) throw new Error('未找到选词选项块')
  const rawPassage = secA.slice(iDirA + 1, iOptStart).join(' ')
  let bankedPassage = rawPassage
    .replace(/(?:^|\s)_{2,}\s*(2[6-9]|3[0-5])\s*_{2,}(?=\s|$|[.,])/g, (mm, n) => ` {{${n}}} `)
    .replace(/\s+/g, ' ')
    .trim()
  // 2024.12 OCR 版无下划线，空位是裸数字 26-35：按词边界顺序递增匹配；
  // 须恰好命中 10 个且为 26..35 连续递增，否则放弃（由空位数校验兜底报 warning）
  if ((bankedPassage.match(/\{\{\d+\}\}/g) || []).length < 10) {
    let expected = 26
    const candidate = rawPassage
      .replace(/(?<=\s)(2[6-9]|3[0-5])(?=\s|$)/g, (tok) =>
        parseInt(tok, 10) === expected ? ` {{${expected++}}} ` : tok,
      )
      .replace(/\s+/g, ' ')
      .trim()
    const seq = (candidate.match(/\{\{(\d+)\}\}/g) || []).map((s) => parseInt(s.slice(2), 10))
    if (seq.length === 10 && seq.every((v, i) => v === 26 + i)) bankedPassage = candidate
  }
  const options = []
  for (const l of secA.slice(iOptStart)) {
    for (const tok of l.split(/(?=[A-O]\))/)) {
      const om = tok.match(/^([A-O])\)\s*([a-zA-Z'’-]+)/)
      if (om) options.push({ letter: om[1], word: om[2] })
    }
  }

  // ----- Section B 长篇阅读 -----
  const secB = reading.slice(iB + 1, iC)
  // 2024.12 用「marking」而非「making」
  let iDirB = findPhraseLine(secB, 'Answer the questions by making the corresponding letter')
  if (iDirB < 0) iDirB = findPhraseLine(secB, 'Answer the questions by marking the corresponding letter')
  const iParaStart = secB.findIndex((l, i) => i > (iDirB < 0 ? 0 : iDirB) && /^[A-P]\)\s/.test(l))
  if (iParaStart < 0) throw new Error('未找到长篇阅读段落块')
  const bTitle = secB.slice((iDirB < 0 ? 0 : iDirB) + 1, iParaStart).join(' ').trim()
  const paragraphs = []
  const matchingQuestions = []
  for (const l of secB.slice(iParaStart)) {
    const pm = l.match(/^([A-P])\)\s*(.*)/)
    const qm = l.match(/^(3[6-9]|4[0-5])\.\s*(.*)/)
    if (pm && matchingQuestions.length === 0) {
      paragraphs.push({ label: pm[1], text: pm[2].trim() })
    } else if (qm) {
      matchingQuestions.push({ n: parseInt(qm[1], 10), text: qm[2].trim() })
    } else if (matchingQuestions.length === 0) {
      if (paragraphs.length) paragraphs[paragraphs.length - 1].text += ' ' + l
      else if (bTitle) bTitle += ' ' + l
      else bTitle = l
    } else {
      matchingQuestions[matchingQuestions.length - 1].text += ' ' + l
    }
  }

  // ----- Section C 仔细阅读 -----
  const secC = reading.slice(iC + 1)
  const passagesC = []
  let curLines = []
  let curQuestions = []
  let isQuestionZone = false
  let started = false // 仅从 Passage One 标记开始收集，跳过 Directions
  function flush() {
    if (curLines.length || curQuestions.length) {
      passagesC.push({ passage: curLines.join(' ').trim(), questions: curQuestions })
      curLines = []
      curQuestions = []
      isQuestionZone = false
    }
  }
  for (const l of secC) {
    if (/^Passage\s+(One|Two)\s*$/i.test(l)) {
      flush()
      started = true
      continue
    }
    if (!started) continue
    if (/^Questions\s+\d+\s+to\s+\d+\s+are based on/i.test(l)) continue
    // 2026.06 s3 题号数字间可能带空格（「5 1.」），匹配后归一化
    const qm = l.match(/^(4\s?[6-9]|5\s?[0-5])\s*\.\s*(.*)/)
    if (qm) {
      const qn = parseInt(qm[1].replace(/\s+/g, ''), 10)
      if (curQuestions.length === 5) flush()
      isQuestionZone = true
      curQuestions.push({ n: qn, text: qm[2].trim(), options: [] })
      continue
    }
    // 选项行可能单栏（每行一个）或双栏同行（A) xxx C) xxx），按字母)位置切分
    const optionTokens = l.split(/(?=[A-D]\))/)
    if (/^[A-D]\)/.test(l) && curQuestions.length) {
      for (const tok of optionTokens) {
        const om = tok.match(/^([A-D])\)\s*(.*)/)
        if (om) curQuestions[curQuestions.length - 1].options.push({ letter: om[1], text: om[2].trim() })
      }
      continue
    }
    if (!isQuestionZone) {
      curLines.push(l)
    } else if (curQuestions.length) {
      const lastQ = curQuestions[curQuestions.length - 1]
      if (lastQ.options.length) lastQ.options[lastQ.options.length - 1].text += ' ' + l
      else lastQ.text += ' ' + l
    }
  }
  flush()
  passagesC.forEach((p) => p.questions.forEach((q) => q.options.sort((a, b) => a.letter.localeCompare(b.letter))))

  return { banked: { passage: bankedPassage, options }, matching: { title: bTitle, paragraphs, questions: matchingQuestions }, careful: passagesC, translationLines }
}

// ---------- 翻译解析 ----------
function parseTranslation(translationLines) {
  const zhLines = translationLines.filter((l) => /[\u4e00-\u9fff]/.test(l))
  const joined = zhLines.join('')
    .replace(/(?<=[\u4e00-\u9fff\u3001\u3002\uFF0C\uFF1A\uFF1B\uFF08\uFF09\u300A\u300B])\s+(?=[\u4e00-\u9fff\u3001\u3002\uFF0C\uFF1A\uFF1B\uFF08\uFF09\u300A\u300B])/g, '')
    // OCR 中文里数字/百分号被拆散（「6 0 %」→「60%」）
    .replace(/(\d)\s+(?=[0-9%])/g, '$1')
    .trim()
  return {
    directions: 'For this part, you are allowed 30 minutes to translate a passage from Chinese into English.',
    chinese: joined,
  }
}

// ---------- 校验 ----------
function validate(r, warnings) {
  if (r.banked.options.length !== 15) warnings.push(`选词选项数=${r.banked.options.length}（应为15）`)
  const blanks = (r.banked.passage.match(/\{\{(\d+)\}\}/g) || []).length
  if (blanks !== 10) warnings.push(`选词空位数=${blanks}（应为10）`)
  if (r.matching.paragraphs.length < 10) warnings.push(`长篇段落数=${r.matching.paragraphs.length}（应≥10）`)
  if (r.matching.questions.length !== 10) warnings.push(`长篇题数=${r.matching.questions.length}（应为10）`)
  if (r.careful.length !== 2) warnings.push(`仔细篇数=${r.careful.length}（应为2）`)
  r.careful.forEach((p, i) => {
    if (p.questions.length !== 5) warnings.push(`仔细第${i + 1}篇题数=${p.questions.length}（应为5）`)
    p.questions.forEach((q) => {
      if (q.options.length !== 4) warnings.push(`仔细第${q.n}题选项数=${q.options.length}（应为4）`)
    })
  })
}

// ---------- 手动答案（扫描版解析无文字层时，人工读图后经配置注入） ----------
// 配置可选 answersManual: { banked:'10字母A-O', matching:'10字母A-M', careful:'10字母A-D' }
// 提供后跳过对应解析 PDF 提取，优先级高于正则提取。
function manualLetters(s, count, validRe, label) {
  const arr = String(s || '').toUpperCase().replace(/\s+/g, '').split('')
  if (arr.length !== count) return { arr, bad: `${label} 手动答案长度=${arr.length}（应为${count}）` }
  const invalid = arr.filter((c) => !validRe.test(c))
  if (invalid.length) return { arr, bad: `${label} 手动答案含非法字母 ${invalid.join(',')}` }
  return { arr, bad: null }
}

// ---------- 批处理 ----------
const jobs = JSON.parse(fs.readFileSync(batchFile, 'utf8'))
for (const job of jobs) {
  const warnings = []
  try {
    const manual = job.answersManual
    const [ztText, jxBankedText, jxMatchText, jxCarefulText] = await Promise.all([
      // ztTextFile：真题 OCR 出流乱序时的人工修正版全文（与 readPdfText 产物同构），优先生效
      job.ztTextFile ? fs.readFileSync(job.ztTextFile, 'utf8') : readPdfText(job.zt),
      manual?.banked ? Promise.resolve('') : readPdfText(job.jxBanked),
      manual?.matching ? Promise.resolve('') : readPdfText(job.jxMatching),
      manual?.careful ? Promise.resolve('') : readPdfText(job.jxCareful),
    ])
    const parsed = parseReading(cleanLines(ztText))
    validate(parsed, warnings)

    let bankedComplete, matchComplete, carefulComplete
    let bankedArr, matchArr
    let carefulAnswers
    if (manual?.banked) {
      const { arr, bad } = manualLetters(manual.banked, 10, /^[A-O]$/, 'banked')
      bankedArr = arr
      bankedComplete = !bad
      if (bad) warnings.push(bad)
    } else {
      const { answers, complete } = parseJxBanked(jxBankedText)
      bankedComplete = complete
      bankedArr = Array.from({ length: 10 }, (_, i) => answers[26 + i] || null)
    }
    if (manual?.matching) {
      const { arr, bad } = manualLetters(manual.matching, 10, /^[A-P]$/, 'matching')
      matchArr = arr
      matchComplete = !bad
      if (bad) warnings.push(bad)
    } else {
      const { answers, complete } = parseJxMatching(jxMatchText)
      matchComplete = complete
      matchArr = Array.from({ length: 10 }, (_, i) => answers[36 + i] || null)
    }
    if (manual?.careful) {
      const { arr, bad } = manualLetters(manual.careful, 10, /^[A-D]$/, 'careful')
      carefulAnswers = Object.fromEntries(arr.map((c, i) => [46 + i, c]))
      carefulComplete = !bad
      if (bad) warnings.push(bad)
    } else {
      const { answers, complete } = parseJxCareful(jxCarefulText)
      carefulComplete = complete
      carefulAnswers = answers
    }
    if (!bankedComplete) warnings.push('选词填空解析未凑齐 26-35 题标记，答案可能有缺口')
    if (!matchComplete) warnings.push('长篇阅读解析未凑齐 36-45 题标记，答案可能有缺口')
    if (!carefulComplete) warnings.push('仔细阅读解析未凑齐 46-55 题标记，答案可能有缺口')
    parsed.careful.forEach((p) => p.questions.forEach((q) => (q.answer = carefulAnswers[q.n] || null)))

    const missing = [
      ...bankedArr.map((a, i) => (a ? null : `banked-26+${i}`)),
      ...matchArr.map((a, i) => (a ? null : `matching-36+${i}`)),
      ...parsed.careful.flatMap((p) => p.questions.map((q) => (q.answer ? null : `careful-${q.n}`))),
    ].filter(Boolean)
    if (missing.length) warnings.push(`答案缺失: ${missing.join(',')}`)

    const id = `cet4-${job.year}-${String(job.month).padStart(2, '0')}-s${job.set}`
    const verified = !!job.verified
    const result = {
      id,
      meta: {
        level: 'CET4',
        year: job.year,
        month: job.month,
        set: job.set,
        source: path.relative(CET_ROOT, job.zt || job.ztTextFile || '').replace(/\\/g, '/'),
        answerSource: manual
          ? verified
            ? '人工读图逐题核对（专项解析扫描版）'
            : '人工读图答案（待复核后置 verified）'
          : verified
            ? '专项解析 PDF 正则提取，全量逐题人工比对解析原文'
            : '专项解析 PDF 正则提取（待人工抽检确认后置 verified）',
        verified,
        warnings,
      },
      reading: {
        banked: { passage: parsed.banked.passage, options: parsed.banked.options, answers: bankedArr },
        matching: {
          title: parsed.matching.title,
          paragraphs: parsed.matching.paragraphs,
          questions: parsed.matching.questions,
          answers: matchArr,
        },
        careful: parsed.careful,
      },
      translation: parseTranslation(parsed.translationLines),
    }
    const outPath = job.out || `src/data/generated/${id}.json`
    fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8')
    console.log(`OK ${id} → ${outPath} warnings=${warnings.length ? JSON.stringify(warnings) : '[]'}`)
  } catch (e) {
    console.log(`FAIL ${job.year}-${job.month}-s${job.set}: ${e.message}`)
  }
}
