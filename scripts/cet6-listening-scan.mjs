// 临时：扫描 CET-6 各批次听力素材（原题/解析/音频）与 PDF 文字层可用性
import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'

const ROOT = 'D:/workspace_sunny/题库/cet/CET-6/六级真题'
const BATCHES = [
  '2019年06月CET6题+解+音频',
  '2019年12月CET6题+解+音频',
  '2020年09月CET6题+解+音频',
  '2020年12月CET6题+解+音频',
  '2021年06月CET6题+解+音频',
  '2021年12月CET6题+解+音频',
  '2022年06月CET6题+解+音频',
  '2022年09月CET6题+解+音频',
  '2022年12月CET6题+解+音频',
  '2023年03月CET6题+解+音频',
  '2023年06月CET6题+解+音频',
  '2023年12月CET6题+解+音频',
  '2024年06月CET6题+解+音频',
  '2024年12月CET6题+解+音频',
  '2025年06月CET6题+解+音频',
  '2025年12月CET6题+答案+音频',
  '2026年6月CET6题+答案+听力',
]

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f)
    const st = fs.statSync(fp)
    if (st.isDirectory()) walk(fp, out)
    else out.push({ path: fp, name: f, size: st.size })
  }
  return out
}

async function textLen(fp) {
  try {
    const buf = fs.readFileSync(fp)
    const parser = new PDFParse({ data: new Uint8Array(buf) })
    const r = await parser.getText()
    const text = r.text || ''
    await parser.destroy()
    return { len: text.length, pages: r.numpages, head: text.slice(0, 120).replace(/\n/g, ' | ') }
  } catch (e) {
    return { err: e.message }
  }
}

const result = []
for (const b of BATCHES) {
  const dir = path.join(ROOT, b)
  const files = walk(dir)
  const rows = []
  for (const f of files) {
    if (!/\.(pdf|docx|mp3)$/i.test(f.name)) continue
    const kind = /解析|详解/.test(f.name) && /\.pdf$/i.test(f.name) ? 'jiexi'
      : /原题|真题/.test(f.name) && /\.pdf$/i.test(f.name) ? 'yuanti'
      : /\.docx$/i.test(f.name) ? (/解析|详解/.test(f.name) ? 'jiexi-docx' : 'yuanti-docx')
      : /\.mp3$/i.test(f.name) ? 'audio' : 'other'
    const rec = { kind, name: f.name, sizeMB: +(f.size / 1048576).toFixed(1) }
    if (kind === 'jiexi' || kind === 'yuanti') Object.assign(rec, await textLen(f.path))
    rows.push(rec)
  }
  console.log('\n###', b)
  for (const r of rows) {
    console.log(`${r.kind.padEnd(11)} ${r.name}  ${r.sizeMB}MB  len=${r.len ?? r.err ?? ''} pages=${r.pages ?? ''}`)
  }
  result.push({ batch: b, rows })
}
fs.writeFileSync('D:/workspace_sunny/题库/cet/CET-6/_scan.json', JSON.stringify(result, null, 2), 'utf8')
