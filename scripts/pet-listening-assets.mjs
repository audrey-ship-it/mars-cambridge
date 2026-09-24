// Explore the PET question PDF: locate Listening Part 1 pages and list embedded images.
// Usage:
//   node scripts/pet-listening-assets.mjs scan
//   node scripts/pet-listening-assets.mjs images <pageNumber1based>
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { OPS } from 'pdfjs-dist/legacy/build/pdf.mjs'
const { createCanvas } = require('@napi-rs/canvas')
const { createWorker } = require('tesseract.js')

const PDF_PATH = 'D:/workspace_sunny/PET全真模拟试题（8套）/PET8套全真模拟试题.pdf'

const data = new Uint8Array(await readFile(PDF_PATH))
const doc = await getDocument({ data, useSystemFonts: true }).promise
console.log('pages:', doc.numPages)

const mode = process.argv[2] || 'scan'

if (mode === 'scan') {
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p)
    const tc = await page.getTextContent()
    const text = tc.items.map(i => i.str).join(' ').replace(/\s+/g, ' ')
    const marks = []
    if (/Questions 1\s*-\s*7/.test(text)) marks.push('L1?')
    if (/Questions 8\s*-\s*13/.test(text)) marks.push('L2?')
    if (/Questions 14\s*-\s*19/.test(text)) marks.push('L3?')
    if (/Questions 20\s*-\s*25/.test(text)) marks.push('L4?')
    if (/Part 1/.test(text)) marks.push('P1')
    if (/Part 2/.test(text)) marks.push('P2')
    if (/Part 3/.test(text)) marks.push('P3')
    if (/Part 4/.test(text)) marks.push('P4')
    // image inventory
    const opList = await page.getOperatorList()
    const imgIds = new Set()
    for (let i = 0; i < opList.fnArray.length; i++) {
      const fn = opList.fnArray[i]
      if (fn === OPS.paintImageXObject || fn === OPS.paintJpegXObject) {
        imgIds.add(opList.argsArray[i][0])
      }
    }
    const dims = []
    for (const id of imgIds) {
      try {
        const obj = await new Promise(res => page.objs.get(id, res))
        dims.push(`${obj.width}x${obj.height}${obj.kind === 'RGBA' ? '' : '/' + (obj.kind || '')}`)
      } catch { dims.push('?') }
    }
    console.log(`p${p} [${marks.join(',')}] imgs=${dims.length} ${dims.slice(0, 12).join(' ')} :: ${text.slice(0, 90)}`)
    page.cleanup()
  }
}

if (mode === 'render') {
  // render <page1based> <scale> <outPath>
  const p = Number(process.argv[3])
  const scale = Number(process.argv[4] || 1)
  const out = process.argv[5]
  const { createCanvas } = await import('@napi-rs/canvas')
  const { writeFileSync } = await import('node:fs')
  const page = await doc.getPage(p)
  const viewport = page.getViewport({ scale })
  const canvas = createCanvas(viewport.width, viewport.height)
  await page.render({ canvas, canvasContext: canvas.getContext('2d'), viewport }).promise
  writeFileSync(out, canvas.toBuffer('image/png'))
  console.log('wrote', out, viewport.width, viewport.height)
}

if (mode === 'part1') {
  // part1 <testN> -> public/images/pet/listening/testN/qM.png
  const { mkdirSync, writeFileSync } = await import('node:fs')
  const testN = Number(process.argv[3] || 1)
  const fullScale = 2408 / 577.92 // native scan resolution
  const ocrScale = 2
  const factor = fullScale / ocrScale
  const outDir = `d:/workspace_sunny/mars-cambridge/public/images/pet/listening/test${testN}`
  mkdirSync(outDir, { recursive: true })

  const worker = await createWorker('eng')
  const jobs = []
  let failed = false
  // page A: Q1-3, page B: Q4-7
  for (const [pdfPage, nums] of [
    [20 * testN + 1, [1, 2, 3]],
    [20 * testN + 2, [4, 5, 6, 7]],
  ]) {
    const page = await doc.getPage(pdfPage)
    const vp = page.getViewport({ scale: ocrScale })
    const c = createCanvas(Math.floor(vp.width), Math.floor(vp.height))
    await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise
    const { data } = await worker.recognize(c.toBuffer('image/png'), {}, { blocks: true })
    if (!Array.isArray(data.blocks)) {
      console.log(`test${testN} page${pdfPage}: OCR returned no blocks; blocksType=${typeof data.blocks} isArr=${Array.isArray(data.blocks)} textLen=${data.text?.length} conf=${data.confidence}`)
      failed = true
      continue
    }
    const cands = []
    for (const block of data.blocks) {
      for (const par of block.paragraphs) {
        for (const line of par.lines) {
          const txt = line.text.trim()
          const m = txt.match(/^([1-7])\s+(What|Why|When|Where|Who|Which|How|Whose)\b/)
          if (m && line.bbox.x0 < vp.width * 0.22) {
            cands.push({ n: Number(m[1]), y: (line.bbox.y0 + line.bbox.y1) / 2, txt })
          }
        }
      }
    }
    // dedupe: keep topmost per (n, rounded y)
    const qy = nums.map(() => null)
    // exact number matches first
    for (let i = 0; i < nums.length; i++) {
      const hits = cands.filter(x => x.n === nums[i]).sort((a, b) => a.y - b.y)
      if (hits.length) qy[i] = hits[0]
    }
    // fallback: ordinal assignment if every question was found as a line
    if (qy.some(x => !x) && cands.length === nums.length) {
      cands.sort((a, b) => a.y - b.y)
      cands.forEach((x, i) => { qy[i] = x })
    }
    if (qy.some(x => !x)) {
      console.log(`test${testN} page${pdfPage}: FAILED to locate questions`, nums.join(','))
      console.log('candidates:', cands.map(x => `${x.n}:${x.txt}`).join(' | '))
      failed = true
      continue
    }
    const ys = qy.map(x => x.y)
    const ink = rowInk(c.getContext('2d'), c.width, c.height)
    const bounds = [ys[0] - 30]
    for (let i = 1; i < ys.length; i++) {
      // separator sits after previous question's labels: 60%-98% of the spacing
      const spacing = ys[i] - ys[i - 1]
      const gz0 = Math.floor(ys[i - 1] + spacing * 0.6)
      const gz1 = Math.floor(ys[i] - 10)
      let best = null, s = -1
      for (let y = gz0; y <= gz1; y++) {
        const empty = ink[y] < 0.002
        if (empty && s < 0) s = y
        if ((!empty || y === gz1) && s >= 0) {
          const e = empty ? y : y - 1
          if (!best || e - s > best.len) best = { s, e, len: e - s }
          s = -1
        }
      }
      bounds.push(best && best.len >= 8 ? (best.s + best.e) / 2 : ys[i - 1] + spacing * 0.86)
    }
    bounds.push(Math.min(ys[ys.length - 1] + vp.height * 0.145, vp.height - 5))
    jobs.push({ page: pdfPage, nums, bounds })
  }
  await worker.terminate()
  if (failed) process.exit(1)

  for (const job of jobs) {
    const page = await doc.getPage(job.page)
    const vp = page.getViewport({ scale: fullScale })
    const c = createCanvas(Math.floor(vp.width), Math.floor(vp.height))
    await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise
    for (let i = 0; i < job.nums.length; i++) {
      const sy = Math.max(0, Math.floor(job.bounds[i] * factor))
      const ey = Math.min(c.height, Math.floor(job.bounds[i + 1] * factor))
      const strip = cropTrim(c.getContext('2d'), c.width, c.height, 0, sy, c.width, ey - sy, 22)
      const out = `${outDir}/q${job.nums[i]}.png`
      writeFileSync(out, strip.toBuffer('image/png'))
      console.log('wrote', out, strip.width, strip.height)
    }
  }
}

if (mode === 'images') {
  const p = Number(process.argv[3])
  const page = await doc.getPage(p)
  const opList = await page.getOperatorList()
  const imgIds = new Set()
  for (let i = 0; i < opList.fnArray.length; i++) {
    const fn = opList.fnArray[i]
    if (fn === OPS.paintImageXObject || fn === OPS.paintJpegXObject) {
      imgIds.add(opList.argsArray[i][0])
    }
  }
  for (const id of imgIds) {
    const obj = await new Promise(res => page.objs.get(id, res))
    console.log(id, obj.width, obj.height, obj.kind, 'bytes=', obj.data?.length)
  }
}

async function readFile(path) {
  const { readFile: rf } = await import('node:fs/promises')
  return rf(path)
}

// fraction of dark pixels per row
function rowInk(ctx, w, h) {
  const d = ctx.getImageData(0, 0, w, h).data
  const rows = new Float64Array(h)
  for (let y = 0; y < h; y++) {
    let c = 0
    const base = y * w * 4
    for (let x = 0; x < w; x++) {
      if (d[base + x * 4] < 205) c++
    }
    rows[y] = c / w
  }
  return rows
}

// crop a region, trim white borders, return a padded canvas
function cropTrim(ctx, w, h, sx, sy, sw, sh, pad) {
  const img = ctx.getImageData(sx, sy, sw, sh)
  const d = img.data
  let x0 = sw, y0 = sh, x1 = -1, y1 = -1
  for (let y = 0; y < sh; y++) {
    for (let x = 0; x < sw; x++) {
      const i = (y * sw + x) * 4
      if (d[i] < 205) {
        if (x < x0) x0 = x
        if (x > x1) x1 = x
        if (y < y0) y0 = y
        if (y > y1) y1 = y
      }
    }
  }
  const cw = x1 - x0 + 1 + pad * 2
  const ch = y1 - y0 + 1 + pad * 2
  return makeCanvas(img, x0, y0, x1 - x0 + 1, y1 - y0 + 1, cw, ch, pad)
}

import { createCanvas as _cc } from '@napi-rs/canvas'
function makeCanvas(srcImg, sx, sy, sw, sh, cw, ch, pad) {
  const out = _cc(cw, ch)
  // white background
  const octx = out.getContext('2d')
  octx.fillStyle = '#ffffff'
  octx.fillRect(0, 0, cw, ch)
  // @napi-rs canvas putImageData supports full ImageData; create temp then draw
  const tmp = _cc(srcImg.width, srcImg.height)
  tmp.getContext('2d').putImageData(srcImg, 0, 0)
  octx.drawImage(tmp, sx, sy, sw, sh, pad, pad, sw, sh)
  return out
}
