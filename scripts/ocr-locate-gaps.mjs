// 临时工具：OCR 页面 PNG 并输出词级数据，定位泄漏的挖空编号 (16)-(20) 及其所在行文本
// 用法: node scripts/ocr-locate-gaps.mjs <pagePng> [...]
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { createWorker } = require('tesseract.js')

const files = process.argv.slice(2)
const worker = await createWorker('eng')

for (const file of files) {
  const { data } = await worker.recognize(fs.readFileSync(file), {}, { blocks: true })
  const words = []
  const walk = nodes => {
    for (const n of nodes || []) {
      if (n.words) words.push(...n.words)
      if (n.lines) walk(n.lines)
      else if (n.paragraphs) walk(n.paragraphs)
      else if (n.blocks) walk(n.blocks)
    }
  }
  walk(data.blocks)
  // 按 y 聚类成行
  words.sort((a, b) => a.bbox.y0 - b.bbox.y0)
  const lines = []
  for (const w of words) {
    const line = lines.find(l => Math.abs(l.y - (w.bbox.y0 + w.bbox.y1) / 2) < 18)
    if (line) line.items.push(w)
    else lines.push({ y: (w.bbox.y0 + w.bbox.y1) / 2, items: [w] })
  }
  lines.sort((a, b) => a.y - b.y)
  console.log('='.repeat(12), path.basename(file), `(${words.length} words, ${lines.length} lines)`)
  lines.forEach((l, i) => {
    const text = l.items.map(w => w.text).join(' ')
    // 找独立的挖空编号
    const gapNums = l.items.filter(w => /^(1[6-9]|20)[.,:]?$/.test(w.text)).map(w => w.text)
    if (gapNums.length) {
      const prev = (lines[i - 1]?.items || []).map(w => w.text).join(' ')
      const next = (lines[i + 1]?.items || []).map(w => w.text).join(' ')
      console.log(`  >>> 命中编号 [${gapNums.join(',')}] @y=${Math.round(l.y)}`)
      console.log(`      上一行: ${prev.slice(0, 90)}`)
      console.log(`      本行  : ${text.slice(0, 110)}`)
      console.log(`      下一行: ${next.slice(0, 90)}`)
    }
  })
}
await worker.terminate()
console.log('DONE')
