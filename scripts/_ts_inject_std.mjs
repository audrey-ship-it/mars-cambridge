// 注入 PET 标准版 7 套（册1 Test2-4 + 册2 Test1-4）听力原文
// 输入: scripts/_ts_out/pet-std1b.json (册1 T2-4) + pet-std2.json (册2 T1-4)
// 形状: { sets: [{ test: N, parts: { "1": "...", ... } }] }（与 pet-t2b.json 同模板）
import fs from 'node:fs'
import { pathToFileURL } from 'node:url'

const dataPath = 'd:/workspace_sunny/mars-cambridge/src/data/petListeningStandard.js'

function loadSets(file) {
  const p = 'd:/workspace_sunny/mars-cambridge/scripts/_ts_out/' + file
  if (!fs.existsSync(p)) { console.log('ABORT: missing ' + p); process.exit(1) }
  const j = JSON.parse(fs.readFileSync(p, 'utf8'))
  if (!Array.isArray(j.sets) || j.sets.length === 0) { console.log('ABORT: ' + file + ' sets[] empty'); process.exit(1) }
  return j
}

const jobs = [
  { file: 'pet-std1b.json', audioPrefix: 'pet-standard', label: '标准版1' },
  { file: 'pet-std2.json', audioPrefix: 'pet-standard2', label: '标准版2' },
]

let s = fs.readFileSync(dataPath, 'utf8')
const eol = s.includes('\r\n') ? '\r\n' : '\n'

function rep1(str, from, to, tag) {
  const c = str.split(from).length - 1
  if (c !== 1) { console.log('ABORT: anchor count=' + c + ' (' + tag + ')'); process.exit(1) }
  return str.replace(from, to)
}

let injected = 0
for (const job of jobs) {
  const data = loadSets(job.file)
  for (const set of data.sets) {
    const partKeys = Object.keys(set.parts || {})
    if (partKeys.length !== 4) { console.log('ABORT: ' + job.label + ' T' + set.test + ' parts=' + partKeys.length); process.exit(1) }
    for (const pn of partKeys) {
      const ts = set.parts[pn]
      if (typeof ts !== 'string' || ts.length < 500) { console.log('ABORT: short transcript ' + job.label + ' T' + set.test + ' P' + pn + ' len=' + String(ts || '').length); process.exit(1) }
      const anchor = `audio: "/audio/${job.audioPrefix}/test-${set.test}/part-${pn}.mp3",`
      const comment = `// 听力原文来源：官方 Tapescripts（${job.label}）2026-10-27 逐字转录`
      s = rep1(s, anchor, anchor + eol + comment + eol + `        transcript: ${JSON.stringify(ts)},`, job.label + ' T' + set.test + ' P' + pn)
      injected += 1
    }
  }
}
console.log('injected', injected)
fs.writeFileSync(dataPath, s)

const mod = await import(pathToFileURL(dataPath).href)
for (const set of mod.PET_LISTENING_STANDARD) {
  const lens = Object.keys(set.parts).map(pn => (set.parts[pn].transcript || '').length)
  console.log(set.meta.id, '| transcript lens:', lens.join('/'))
}
