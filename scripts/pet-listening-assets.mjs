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

if (mode === 'layout') {
  // layout <page1based>: dump merged text lines with top-left coords (px space)
  const p = Number(process.argv[3])
  const scale = Number(process.argv[4] || 2)
  const page = await doc.getPage(p)
  const vp = page.getViewport({ scale })
  const tc = await page.getTextContent()
  const lines = []
  for (const it of tc.items) {
    if (!it.str.trim()) continue
    const [x, y] = [it.transform[4], it.transform[5]]
    // PDF origin bottom-left -> px top-left
    const top = vp.height - (y + it.height) * scale
    const left = x * scale
    lines.push({ top, left, h: it.height * scale, str: it.str })
  }
  lines.sort((a, b) => a.top - b.top || a.left - b.left)
  let row = null
  for (const ln of lines) {
    if (!row || Math.abs(ln.top - row.top) > ln.h * 0.7) {
      row = { top: ln.top, parts: [] }
      console.log(`\ny=${ln.top.toFixed(1)}`)
    }
    process.stdout.write(`${ln.left.toFixed(0)}:${ln.str} `)
  }
  console.log('')
}

if (mode === 'speaking') {
  // speaking <testN> -> Part 2 photographs + Part 3 situation picture
  // under public/images/pet/speaking/testN/{photo-a,photo-b,task}.png
  const { mkdirSync, writeFileSync } = await import('node:fs')
  const testN = Number(process.argv[3] || 1)
  const ocrScale = 2
  const fullScale = 2408 / 577.92
  const factor = fullScale / ocrScale
  const outDir = `d:/workspace_sunny/mars-cambridge/public/images/pet/speaking/test${testN}`
  mkdirSync(outDir, { recursive: true })

  const worker = await createWorker('eng')

  async function ocrLines(pdfPage) {
    const page = await doc.getPage(pdfPage)
    const vp = page.getViewport({ scale: ocrScale })
    const c = createCanvas(Math.floor(vp.width), Math.floor(vp.height))
    await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise
    const { data } = await worker.recognize(c.toBuffer('image/png'), {}, { blocks: true })
    const lines = []
    for (const block of data.blocks || []) {
      for (const par of block.paragraphs) {
        for (const line of par.lines) {
          lines.push({ y: (line.bbox.y0 + line.bbox.y1) / 2, y0: line.bbox.y0, y1: line.bbox.y1, txt: line.text.trim() })
        }
      }
    }
    return { c, lines }
  }

  // ---- Part 2 page: two photographs ----
  const p2pageNum = 20 * testN + 7
  const { c: c2, lines: l2 } = await ocrLines(p2pageNum)
  const please = l2.filter(x => /please tell us|tell us what you can see/i.test(x.txt))
  const thanks = l2.filter(x => /thank you/i.test(x.txt))
  console.log(`test${testN} p2: please=${please.map(x => x.y0.toFixed(0))} thanks=${thanks.map(x => x.y0.toFixed(0))}`)
  if (please.length < 2 || thanks.length < 2) {
    console.log('FAILED anchors; lines:', l2.map(x => x.txt).join(' | '))
    process.exit(1)
  }
  // generous bands (cropTrim + photoBounds tighten them)
  const bands = [
    [please[0].y0 + 10, thanks[0].y0 - 4],
    [please[1].y0 + 10, thanks[thanks.length - 1].y0 - 4],
  ]
  for (let i = 0; i < 2; i++) {
    const b = inkRect(c2.getContext('2d'), c2.width, c2.height, bands[i][0], bands[i][1])
    const out = `${outDir}/${i === 0 ? 'photo-a' : 'photo-b'}.png`
    const strip = cropTrim(c2.getContext('2d'), c2.width, c2.height, b.x, b.y, b.w, b.h, 22)
    writeFileSync(out, strip.toBuffer('image/png'))
    console.log('wrote', out, strip.width, strip.height)
  }

  // ---- Part 3 page: situation picture at top ----
  const p3pageNum = 20 * testN + 8
  const { c: c3, lines: l3 } = await ocrLines(p3pageNum)
  const talk = l3.find(x => /talk together/i.test(x.txt))
  const part4 = l3.find(x => /part\s*4/i.test(x.txt))
  console.log(`test${testN} p3: talk=${talk?.y0.toFixed(0)} part4=${part4?.y0.toFixed(0)}`)
  if (!talk || !part4) {
    console.log('FAILED anchors; lines:', l3.map(x => x.txt).join(' | '))
    process.exit(1)
  }
  const bt = inkRect(c3.getContext('2d'), c3.width, c3.height, talk.y1 + 10, part4.y0 - 6,
    { ct: 0.04, rt: 0.03, gx: 80, gy: 120 })
  const out = `${outDir}/task.png`
  const strip = cropTrim(c3.getContext('2d'), c3.width, c3.height, bt.x, bt.y, bt.w, bt.h, 22)
  writeFileSync(out, strip.toBuffer('image/png'))
  console.log('wrote', out, strip.width, strip.height)

  await worker.terminate()
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

// Find the largest ink rectangle inside a vertical band via projection
// profiles, bridging small white gaps. thresholds are dark fractions.
function inkRect(ctx, w, h, y0, y1, { ct = 0.22, rt = 0.12, gx = 24, gy = 16 } = {}) {
  const sy = Math.max(0, Math.floor(y0))
  const ey = Math.min(h, Math.floor(y1))
  const sh = ey - sy
  const d = ctx.getImageData(0, sy, w, sh).data
  const colInk = new Float64Array(w)
  for (let y = 0; y < sh; y++) {
    const base = y * w * 4
    for (let x = 0; x < w; x++) {
      if (d[base + x * 4] < 205) colInk[x]++
    }
  }
  for (let x = 0; x < w; x++) colInk[x] /= sh
  const cx = longestRun(colInk.map(v => v > ct), gx)
  // rows inside the column run
  const rowInk = new Float64Array(sh)
  const cw = cx.e - cx.s + 1
  for (let y = 0; y < sh; y++) {
    const base = y * w * 4
    let c = 0
    for (let x = cx.s; x <= cx.e; x++) if (d[base + x * 4] < 205) c++
    rowInk[y] = c / cw
  }
  const ry = longestRun(rowInk.map(v => v > rt), gy)
  return { x: cx.s, y: sy + ry.s, w: cw, h: ry.e - ry.s + 1 }
}

// longest true-run, bridging false gaps up to bridge cells
function longestRun(hits, bridge) {
  let best = null, cur = null
  for (let i = 0; i <= hits.length; i++) {
    if (i < hits.length && hits[i]) {
      if (!cur) cur = { s: i, e: i }
      else cur.e = i
    } else if (cur) {
      // look ahead across a short gap
      let j = cur.e + 1
      while (j < hits.length && !hits[j] && j - cur.e <= bridge) j++
      if (j < hits.length && hits[j]) { cur.e = j; i = j }
      else {
        if (!best || cur.e - cur.s > best.e - best.s) best = cur
        cur = null
      }
    }
  }
  return best || { s: 0, e: hits.length - 1 }
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
