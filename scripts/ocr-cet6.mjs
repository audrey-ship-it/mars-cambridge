// 批量 OCR CET-6 解析书阅读部分（文字层缺失时），缓存到 scripts/ocr/<id>.txt
// 用法: node scripts/ocr-cet6.mjs [id...]
import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'
import mammoth from 'mammoth'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createCanvas } from '@napi-rs/canvas'
import { createWorker } from 'tesseract.js'

const ROOT = 'D:\\workspace_sunny\\题库\\cet\\CET-6\\六级真题'
const OUT = 'scripts/ocr'
const SCALE = 1.5
const TMP = `tmp-ocr-${process.pid}.png`
const PDFJS_BASE = 'node_modules/pdf-to-img/node_modules/pdfjs-dist/'

fs.mkdirSync(OUT, { recursive: true })

const sources = JSON.parse(fs.readFileSync('scripts/answer-sources.json', 'utf8'))
const only = process.argv.slice(2)
const ids = Object.keys(sources).filter((id) => !only.length || only.includes(id))

async function textLayer(p) {
  if (p.toLowerCase().endsWith('.docx')) {
    return (await mammoth.extractRawText({ path: p })).value
  }
  try {
    const parser = new PDFParse({ data: new Uint8Array(fs.readFileSync(p)) })
    const r = await parser.getText()
    await parser.destroy()
    return r.text
  } catch {
    return ''
  }
}

let worker = null
async function ocr(file) {
  if (!worker) worker = await createWorker('chi_sim+eng')
  const {
    data: { text },
  } = await worker.recognize(file)
  return text
}

for (const id of ids) {
  const cache = path.join(OUT, `${id}.txt`)
  if (!process.env.FORCE && fs.existsSync(cache) && fs.statSync(cache).size > 4000) {
    console.log(`[skip] ${id}`)
    continue
  }
  const src = path.join(ROOT, sources[id])
  if (!fs.existsSync(src)) {
    console.log(`[miss] ${id} ${sources[id]}`)
    continue
  }
  const text = process.env.FORCE ? '' : await textLayer(src)
  if (text.length > 5000) {
    fs.writeFileSync(cache, text)
    console.log(`[text] ${id} len=${text.length}`)
    continue
  }
  if (src.toLowerCase().endsWith('.docx')) {
    console.log(`[empty] ${id}`)
    continue
  }

  const doc = await pdfjs.getDocument({
    data: new Uint8Array(fs.readFileSync(src)),
    wasmUrl: PDFJS_BASE + 'wasm/',
    standardFontDataUrl: PDFJS_BASE + 'standard_fonts/',
    cMapUrl: PDFJS_BASE + 'cmaps/',
    cMapPacked: true,
    isEvalSupported: false,
  }).promise
  const N = doc.numPages
  // 阅读解析一般位于全书 42%~96%，跳过最后的翻译参考译文页；PAGES=6-22 可强制指定页码范围
  let start = Math.max(1, Math.floor(N * 0.42))
  let end = N - 1
  if (process.env.PAGES) {
    const [a, b] = process.env.PAGES.split('-').map(Number)
    start = a
    end = Math.min(N, b || N - 1)
  }
  const parts = []
  for (let n = start; n <= end; n++) {
    const page = await doc.getPage(n)
    const vp = page.getViewport({ scale: SCALE })
    const c = createCanvas(Math.ceil(vp.width), Math.ceil(vp.height))
    const ctx = c.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, c.width, c.height)
    await page.render({ canvasContext: ctx, viewport: vp }).promise
    page.cleanup()
    // 双栏排版：左右半页分别 OCR，避免两栏文字被合并成同一行
    const mid = Math.round(c.width / 2)
    const overlap = Math.round(c.width * 0.03)
    const cols = [
      [0, Math.min(c.width, mid + overlap)],
      [Math.max(0, mid - overlap), c.width],
    ]
    const pageText = []
    for (let k = 0; k < cols.length; k++) {
      const [x0, x1] = cols[k]
      const cc = createCanvas(x1 - x0, c.height)
      const cctx = cc.getContext('2d')
      cctx.fillStyle = '#fff'
      cctx.fillRect(0, 0, cc.width, cc.height)
      cctx.drawImage(c, x0, 0, x1 - x0, c.height, 0, 0, x1 - x0, c.height)
      fs.writeFileSync(TMP, await cc.encode('png'))
      let t = ''
      try {
        t = await ocr(TMP)
      } catch (e) {
        console.log(`  ! ocr fail p${n} col${k + 1}: ${String(e).slice(0, 60)}`)
      }
      pageText.push(`--- col ${k + 1} ---\n${t}`)
    }
    parts.push(`\n===== PAGE ${n} =====\n${pageText.join('\n')}`)
    console.log(`  ${id} p${n}/${end} chars=${pageText.join('').length}`)
  }
  const prev = (process.env.APPEND || process.env.PREPEND) && fs.existsSync(cache) ? fs.readFileSync(cache, 'utf8') : ''
  const next = parts.join('\n')
  fs.writeFileSync(cache, process.env.PREPEND ? next + prev : prev + next)
  console.log(`[ocr ] ${id} pages=${start}-${end} len=${next.length} append=${!!prev}`)
}

if (worker) await worker.terminate()
if (fs.existsSync(TMP)) fs.unlinkSync(TMP)
