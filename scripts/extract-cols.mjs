// 按双栏顺序提取 PDF 文字层（左栏→右栏），写入 scripts/ocr/<id>.txt
// 用法: node scripts/extract-cols.mjs <id...>
import fs from 'node:fs'
import path from 'node:path'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'

const ROOT = 'D:\\workspace_sunny\\题库\\cet\\CET-6\\六级真题'
const OUT = 'scripts/ocr'
const PDFJS_BASE = 'node_modules/pdf-to-img/node_modules/pdfjs-dist/'
const sources = JSON.parse(fs.readFileSync('scripts/answer-sources.json', 'utf8'))
const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(sources)

function linesOf(items, lo, hi) {
  const sel = items
    .filter((it) => {
      const x = it.transform[4]
      return it.str.trim() && x >= lo && x < hi
    })
    .sort((a, b) => (Math.abs(a.transform[5] - b.transform[5]) > 3 ? b.transform[5] - a.transform[5] : a.transform[4] - b.transform[4]))
  const out = []
  let cur = null
  let lastY = null
  for (const it of sel) {
    const y = it.transform[5]
    if (lastY === null || Math.abs(y - lastY) <= 3) {
      cur = cur === null ? it.str : cur + it.str
    } else {
      if (cur !== null) out.push(cur)
      cur = it.str
    }
    lastY = y
  }
  if (cur !== null) out.push(cur)
  return out
}

for (const id of ids) {
  const src = path.join(ROOT, sources[id] || '')
  if (!fs.existsSync(src) || src.toLowerCase().endsWith('.docx')) continue
  let doc
  try {
    doc = await pdfjs.getDocument({
      data: new Uint8Array(fs.readFileSync(src)),
      wasmUrl: PDFJS_BASE + 'wasm/',
      standardFontDataUrl: PDFJS_BASE + 'standard_fonts/',
      cMapUrl: PDFJS_BASE + 'cmaps/',
      cMapPacked: true,
      isEvalSupported: false,
    }).promise
  } catch (e) {
    console.log(`[fail] ${id} ${String(e).slice(0, 60)}`)
    continue
  }
  const N = doc.numPages
  const parts = []
  let empty = 0
  for (let n = 1; n <= N; n++) {
    const page = await doc.getPage(n)
    const vp = page.getViewport({ scale: 1 })
    const tc = await page.getTextContent()
    const items = tc.items
      .filter((i) => i.str && i.str.trim())
      .map((i) => ({ str: i.str, transform: i.transform }))
    if (!items.length) {
      empty++
      continue
    }
    const mid = vp.width / 2
    const left = linesOf(items, 0, mid + 12)
    const right = linesOf(items, mid - 12, vp.width + 999)
    parts.push(`\n===== PAGE ${n} =====\n--- col 1 ---\n${left.join('\n')}\n--- col 2 ---\n${right.join('\n')}`)
    page.cleanup()
  }
  const text = parts.join('\n')
  if (text.length < 2000) {
    console.log(`[skip] ${id} text=${text.length} emptyPages=${empty}`)
    continue
  }
  fs.writeFileSync(path.join(OUT, `${id}.txt`), text)
  console.log(`[text] ${id} pages=${N} empty=${empty} len=${text.length}`)
}
