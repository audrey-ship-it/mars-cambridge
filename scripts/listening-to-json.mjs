// CET-4 听力数据转换器
// 用法：node scripts/listening-to-json.mjs <docx路径> <transcriptTxt路径> \
//   --year 2024 --month 6 --set 1 --answers "AABBCDAABACDDCBDBCADBDDAAAD" \
//   --out src/data/generated/cet4-2024-06-s1-listening.json
//
// transcriptTxt 是听力原文（从 PDF 读图手动整理的纯文本，按段落标题分隔）
// 答案字母串 25 个（1-25），已从解析 PDF 人工核对

import fs from 'node:fs'
import path from 'node:path'
import mammoth from 'mammoth'

const args = process.argv.slice(2)
const docxPath = args[0]
const transcriptPath = args[1]
function argOf(name, fallback) {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : fallback
}

if (!docxPath || !fs.existsSync(docxPath)) {
  console.error('用法: node scripts/listening-to-json.mjs <docx> <transcriptTxt> [opts]')
  process.exit(1)
}

const year = parseInt(argOf('--year', '0'), 10)
const month = parseInt(argOf('--month', '0'), 10)
const setNo = parseInt(argOf('--set', '1'), 10)
const answersStr = argOf('--answers', '').toUpperCase().replace(/[^A-D]/g, '')
const outPath = argOf('--out', '')
const setId = `cet4-${year}-${String(month).padStart(2, '0')}-s${setNo}`

// ---------- 1. 从 docx 提取听力题目 ----------
const { value: rawText } = await mammoth.extractRawText({ path: docxPath })
const li = rawText.indexOf('Listening Comprehension')
const ti = rawText.indexOf('Translation', li)
const listeningText = rawText.slice(li, ti > 0 ? ti : rawText.length)

let lines = listeningText
  .split(/\n+/)
  // 清除行中合并的页脚
  .map((s) => s
    .replace(/\s*\d{0,2}\s*·\s*\d{4}\s*年\d{1,2}月[四六]级真题\s*\(第[一二三四]套\)\s*·\s*\d{0,2}\s*/g, ' ')
    .replace(/·\s*$\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim())
  .filter(Boolean)

// 拆分行内嵌的题号/选项（两栏排版）
function splitEmbeddedListening(lines) {
  const out = []
  for (const line of lines) {
    let seg = [line]
    let changed = true
    while (changed) {
      changed = false
      for (let i = 0; i < seg.length; i++) {
        // 匹配行中出现的题号如 " 8." 或 " 20.A)" 或字母选项 " C)"
        const m = seg[i].match(/(?<=[a-zA-Z)])\s+(\d{1,2}\.)\s*(?=[A-D])|(?<=[.)])\s+([A-D]\))\s*(?=[A-Z])/)
        if (m && m.index > 0) {
          const head = seg[i].slice(0, m.index).trim()
          const tail = seg[i].slice(m.index).trim()
          if (head && tail) {
            seg.splice(i, 1, head, tail)
            changed = true
            break
          }
        }
      }
    }
    out.push(...seg)
  }
  return out
}
lines = splitEmbeddedListening(lines)

// ---------- 2. 解析题目和选项 ----------
function parseQuestions(lines, range, answerStartIdx) {
  // range: 题号起始数组，如 [1,2,3,4,5,6,7]
  // 遍历 lines，找 "N." 开头的题干，后续 A)/B)/C)/D) 选项
  const questions = []
  let cur = null
  let qIdx = 0

  for (const line of lines) {
    // 题干行：以 "N." 开头（N 在 range 内）
    const qm = line.match(/^(\d{1,2})\.\s*(.*)/)
    if (qm && range.includes(parseInt(qm[1], 10))) {
      // 先把当前题收尾
      if (cur && cur.text) questions.push(cur)
      cur = {
        n: parseInt(qm[1], 10),
        text: qm[2].trim(),
        options: [],
      }
      // 题干里可能直接带选项（两栏 docx）
      const parts = cur.text.split(/\s+(?=[A-D]\))/)
      cur.text = parts[0].trim()
      if (parts.length > 1) {
        cur.options.push(...parts.slice(1).map(s => {
          const m = s.match(/^([A-D])\)\s*(.*)/)
          return m ? { letter: m[1], text: m[2].trim() } : null
        }).filter(Boolean))
      }
      qIdx++
      continue
    }

    // 选项行
    if (cur) {
      const om = line.match(/^([A-D])\)\s*(.*)/)
      if (om) {
        cur.options.push({ letter: om[1], text: om[2].trim() })
        continue
      }
      // 续行：如果上一个选项还没 4 个，可能是续选项；否则是题干续行
      if (cur.options.length < 4) {
        const opt = line.split(/\s+(?=[A-D]\))/).map(s => {
          const m = s.match(/^([A-D])\)\s*(.*)/)
          return m ? { letter: m[1], text: m[2].trim() } : null
        }).filter(Boolean)
        if (opt.length > 0) {
          cur.options.push(...opt.filter(o => !cur.options.find(x => x.letter === o.letter)))
        } else {
          // 可能是题干续行
          cur.text += ' ' + line
        }
      }
    }
  }
  if (cur && cur.text) questions.push(cur)

  // 补全答案
  const aStart = answerStartIdx
  questions.forEach((q, i) => {
    const a = answersStr[aStart + i]
    if (a) q.answer = a
  })
  return questions
}

// 定位 Section A/B/C 分隔行
const secA = lines.findIndex(l => l === 'Section A')
const secB = lines.findIndex(l => l === 'Section B')
const secC = lines.findIndex(l => l === 'Section C')

const secALines = lines.slice(secA + 1, secB > 0 ? secB : lines.length)
const secBLines = lines.slice(secB + 1, secC > 0 ? secC : lines.length)
const secCLines = lines.slice(secC + 1)

// 过滤掉 Directions 和 Questions 引导行
function filterSection(lines) {
  return lines.filter(l =>
    !/^Directions/i.test(l) &&
    !/^Questions \d+/.test(l) &&
    !/^Section [A-C]/.test(l)
  )
}

const newsQs = parseQuestions(filterSection(secALines), [1, 2, 3, 4, 5, 6, 7], 0)
const convQs = parseQuestions(filterSection(secBLines), [8, 9, 10, 11, 12, 13, 14, 15], 7)
const passQs = parseQuestions(filterSection(secCLines), [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 15)

console.log(`News questions: ${newsQs.length}`, newsQs.map(q => q.n).join(','))
console.log(`Conv questions: ${convQs.length}`, convQs.map(q => q.n).join(','))
console.log(`Pass questions: ${passQs.length}`, passQs.map(q => q.n).join(','))

// 检查每题选项数
newsQs.concat(convQs, passQs).forEach(q => {
  if (q.options.length !== 4) console.warn(`  ⚠ Q${q.n} options=${q.options.length}:`, q.options.map(o=>o?.letter))
})

// ---------- 3. 读取 transcript ----------
let transcript = ''
if (transcriptPath && fs.existsSync(transcriptPath)) {
  transcript = fs.readFileSync(transcriptPath, 'utf8').trim()
}

// ---------- 4. 组装输出 ----------
const result = {
  id: setId,
  meta: {
    level: 'CET4',
    year,
    month,
    set: setNo,
    source: path.basename(docxPath),
    answerSource: '解析 PDF（人工读图逐题核对）',
    verified: answersStr.length === 25,
  },
  audioUrl: `/audio/${setId}.mp3`,
  transcript,
  sections: {
    news: [
      { title: 'News Report One', questions: newsQs.filter(q => [1, 2].includes(q.n)) },
      { title: 'News Report Two', questions: newsQs.filter(q => [3, 4].includes(q.n)) },
      { title: 'News Report Three', questions: newsQs.filter(q => [5, 6, 7].includes(q.n)) },
    ],
    conversations: [
      { title: 'Conversation One', questions: convQs.filter(q => [8, 9, 10, 11].includes(q.n)) },
      { title: 'Conversation Two', questions: convQs.filter(q => [12, 13, 14, 15].includes(q.n)) },
    ],
    passages: [
      { title: 'Passage One', questions: passQs.filter(q => [16, 17, 18].includes(q.n)) },
      { title: 'Passage Two', questions: passQs.filter(q => [19, 20, 21].includes(q.n)) },
      { title: 'Passage Three', questions: passQs.filter(q => [22, 23, 24, 25].includes(q.n)) },
    ],
  },
}

const json = JSON.stringify(result, null, 2)
if (outPath) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, json, 'utf8')
  console.log(`已写出 ${outPath}`)
} else {
  console.log(json)
}
