// 从 CET-6 真题卷（docx/PDF 文字层）解析听力 25 题的题目与选项
// 用法：node scripts/cet6-listening-parse.mjs [id...]
// 输出 scripts/listening-raw/<id>.options.json
import fs from 'node:fs'
import path from 'node:path'
import mammoth from 'mammoth'
import * as mupdf from 'mupdf'

const CFG = JSON.parse(fs.readFileSync('scripts/listening-config.json', 'utf8'))
const OUT = 'scripts/listening-raw'
fs.mkdirSync(OUT, { recursive: true })

async function readLines(fp) {
  if (/\.docx$/i.test(fp)) {
    const v = (await mammoth.extractRawText({ path: fp })).value
    return [v]
  }
  const doc = mupdf.Document.openDocument(fs.readFileSync(fp), 'application/pdf')
  const pages = []
  for (let i = 0; i < doc.countPages(); i++) pages.push(doc.loadPage(i).toStructuredText().asText())
  return pages
}

function cleanPage(text) {
  return text.replace(/\r/g, '').replace(/\u00a0/g, ' ').replace(/\s*·\s*/g, ' · ').split('\n')
    .flatMap((l) => l.split(/(?=\b\d{1,2}\s*\.\s*[A-D]\s*\))/))
    .map((l) => l
      .replace(/^\s*[·•]\s*\d{4}\s*年.*$/, '')
      .replace(/^\s*\d{4}\s*年\s*\d{1,2}\s*月.*?(真题|解析|试卷).*$/i, '')
      .replace(/\s+/g, ' ')
      .trim())
    .filter(Boolean)
}

const QSTART = /^(\d{1,2})\s*\.\s*(.*)$/
const OPT = /([A-D])\s*\)/g

function normalizeOptionMarks(line) {
  return line
    .replace(/([A-C])\s+\)/g, '$1)')
    .replace(/\bQ\s*\)/g, 'D)')
    .replace(/\bq\s*\)/g, 'D)')
    .replace(/(\s|^)0\s*\)/g, '$1D)')
}

function parseOptions(allLines) {
  const qs = []
  let cur = null
  let lastLetter = null

  const getQuestion = (n) => qs.find((q) => q.n === n)
  const earliestIncomplete = (letter) => qs
    .filter((q) => q.options.length < 4 && !q.options.some((o) => o.letter === letter))
    .sort((a, b) => a.n - b.n)[0] || null

  const assign = (line, forcedTarget = null) => {
    const parts = line.split(OPT)
    if (parts.length <= 1) return false
    const letters = []
    for (let i = 1; i < parts.length; i += 2) letters.push(parts[i])
    const textOf = {}
    for (let i = 1; i < parts.length; i += 2) textOf[parts[i]] = (parts[i + 1] || '').trim()

    const target = forcedTarget || earliestIncomplete(letters[0])
    if (!target) return false
    for (const l of letters) {
      if (target.options.some((o) => o.letter === l)) continue
      if (target.options.length >= 4) continue
      target.options.push({ letter: l, text: textOf[l] })
    }
    lastLetter = letters[letters.length - 1]
    return true
  }

  for (const raw of allLines) {
    const line = normalizeOptionMarks(raw)
    const m = line.match(QSTART)
    if (m && +m[1] >= 1 && +m[1] <= 25 && !getQuestion(+m[1])) {
      cur = { n: +m[1], options: [] }
      qs.push(cur)
      lastLetter = null
      assign(m[2], cur)
      continue
    }
    if (!cur) continue
    if (assign(line)) continue
    if (line.trim()) {
      if (lastLetter && cur.options.length <= 4) {
        const o = cur.options.find((x) => x.letter === lastLetter)
        if (o) o.text = (o.text + ' ' + line.trim()).trim()
      }
    }
  }
  return [...qs].sort((a, b) => a.n - b.n)
}

function scoreOptions(qs) {
  let good = 0
  let four = 0
  for (const q of qs) {
    if (q.options.length === 4) four++
    if (q.options.length === 4 && q.options.every((o) => o.text.length > 0)) good++
  }
  return { count: qs.length, four, good }
}

function extractQuestions(pages) {
  const pageLines = pages.map(cleanPage)
  let startPage = -1
  let startLine = 0
  for (let p = 0; p < pageLines.length; p++) {
    for (let i = 0; i < pageLines[p].length; i++) {
      if (/Listening\s+Comprehension/i.test(pageLines[p][i])) {
        const next = pageLines[p].slice(i, i + 12).join(' ')
        if (/Directions|Section\s*A/i.test(next)) { startPage = p; startLine = i; break }
      }
    }
    if (startPage >= 0) break
  }
  if (startPage < 0) return null
  let endPage = pageLines.length
  let endLine = -1
  for (let p = startPage; p < pageLines.length; p++) {
    for (let i = (p === startPage ? startLine + 1 : 0); i < pageLines[p].length; i++) {
      if (/Reading\s+Comprehension/i.test(pageLines[p][i]) || /^Part\s+III/i.test(pageLines[p][i])) {
        if (/Reading/i.test(pageLines[p][i])) { endPage = p; endLine = i; break }
      }
    }
    if (endLine >= 0) break
  }
  const lines = []
  for (let p = startPage; p < (endLine >= 0 ? endPage + 1 : endPage); p++) {
    const pg = pageLines[p]
    const from = p === startPage ? startLine + 1 : 0
    const to = p === endPage && endLine >= 0 ? endLine : pg.length
    for (let i = from; i < to; i++) lines.push(pg[i])
  }
  return lines
}

const only = process.argv.slice(2)
const report = []
for (const set of CFG.sets) {
  if (only.length && !only.includes(set.id)) continue
  if (set.copyOf) continue
  let best = null
  const cand = []
  for (const rel of set.originals) {
    const fp = path.join(CFG.root, rel)
    let pages
    try { pages = await readLines(fp) } catch (e) { cand.push({ file: rel, err: e.message.slice(0, 60) }); continue }
    const lines = extractQuestions(pages)
    if (!lines) { cand.push({ file: rel, noRange: true }); continue }
    const qs = parseOptions(lines)
    const score = scoreOptions(qs)
    cand.push({ file: rel, ...score })
    if (!best || score.good > best.score.good) best = { file: rel, qs, score, lines }
    if (score.good === 25) break
  }
  if (!best) { report.push({ id: set.id, ok: false, reason: 'no source', cand }); continue }
  const normalized = best.qs.map((q) => ({
    n: q.n,
    options: q.options.filter((o) => o.letter && o.letter >= 'A' && o.letter <= 'D').slice(0, 4),
  }))
  const ok = normalized.length === 25 && normalized.every((q) => q.options.length === 4 && q.options.every((o) => o.text))
  fs.writeFileSync(path.join(OUT, `${set.id}.options.json`), JSON.stringify({ id: set.id, source: best.file, questions: normalized }, null, 2), 'utf8')
  report.push({ id: set.id, ok, good: best.score.good, four: best.score.four, count: best.score.count, file: best.file, cand })
}

console.log(JSON.stringify(report, null, 1))
console.log(`OK ${report.filter((r) => r.ok).length}/${report.length}`)
