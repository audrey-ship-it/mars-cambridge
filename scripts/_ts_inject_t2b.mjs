// 注入 PET Trainer 2 Test 5-6 听力原文
import fs from 'node:fs'
import { pathToFileURL } from 'node:url'

const dataPath = 'd:/workspace_sunny/mars-cambridge/src/data/petTrainer2Listening.js'
const data = JSON.parse(fs.readFileSync('d:/workspace_sunny/mars-cambridge/scripts/_ts_out/pet-t2b.json', 'utf8'))
let s = fs.readFileSync(dataPath, 'utf8')
const eol = s.includes('\r\n') ? '\r\n' : '\n'

function rep1(str, from, to) {
  const c = str.split(from).length - 1
  if (c !== 1) { console.log('ABORT: anchor count=' + c + ' for: ' + from.slice(0, 80)); process.exit(1) }
  return str.replace(from, to)
}

let injected = 0
for (const set of data.sets) {
  for (const pn of Object.keys(set.parts)) {
    const ts = set.parts[pn]
    const anchor = `audio: "/audio/pet-trainer2/test-${set.test}/part-${pn}.mp3",`
    s = rep1(s, anchor, anchor + eol + `      transcript: ${JSON.stringify(ts)},`)
    injected += 1
  }
}
console.log('injected', injected)

// 文件头注释更新
s = rep1(s, '// 听力原文: 书内 Audioscripts（书页 166–187 = PDF 167–188，偏移+1）逐字转录注入 2026-10-27；Test 1–4 首批注入，Test 5–6 待补录', '// 听力原文: 书内 Audioscripts（书页 166–186 = PDF 167–187，偏移+1）逐字转录注入 2026-10-27（Test 1–4 = PDF 167–181；Test 5 = PDF 182–184；Test 6 = PDF 185–187），已对照印刷页修正 9 处 OCR/引句偏差')
fs.writeFileSync(dataPath, s)

const mod = await import(pathToFileURL(dataPath).href)
for (const set of mod.PET_TRAINER2_LISTENING) {
  const lens = Object.keys(set.parts).map(pn => (set.parts[pn].transcript || '').length)
  console.log(set.meta.id, '| transcript lens:', lens.join('/'))
}
