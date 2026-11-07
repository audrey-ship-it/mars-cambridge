// 生成 CET-6 听力 49 套的素材映射（原题/解析/音频）
// 输出 scripts/listening-config.json
import fs from 'node:fs'
import path from 'node:path'

const ROOT = 'D:/workspace_sunny/题库/cet/CET-6/六级真题'
const sources = JSON.parse(fs.readFileSync('scripts/answer-sources.json', 'utf8'))

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

const CN = ['一', '二', '三']
// 官方未提供听力部分的套次：直接复用同批次对应套的数据与音频
const COPY_OF = {
  'cet6-2019-06-s3': 1,
  'cet6-2019-12-s3': 1,
  'cet6-2020-12-s3': 1,
  'cet6-2021-06-s3': 1,
  'cet6-2021-12-s3': 2,
  'cet6-2022-06-s2': 1,
  'cet6-2022-06-s3': 1,
  'cet6-2022-09-s2': 1,
  'cet6-2022-09-s3': 1,
  'cet6-2022-12-s3': 1,
  'cet6-2023-03-s2': 1,
  'cet6-2023-03-s3': 1,
  'cet6-2023-06-s3': 1,
  'cet6-2023-12-s3': 1,
  'cet6-2024-06-s3': 1,
  'cet6-2024-12-s3': 1,
  'cet6-2025-06-s3': 1,
  'cet6-2025-12-s3': 1,
  'cet6-2026-06-s3': 1,
}
const sets = []
for (const b of BATCHES) {
  if (!fs.existsSync(path.join(ROOT, b))) continue
  const ym = b.match(/(\d{4})年(\d{1,2})月/)
  for (let s = 1; s <= 3; s++) {
    const id = `cet6-${ym[1]}-${String(ym[2]).padStart(2, '0')}-s${s}`
    if (!sources[id]) continue
    const files = walk(path.join(ROOT, b))
    const origCandidates = files.filter((f) => {
      if (!/\.(docx|pdf)$/i.test(f.name)) return false
      if (/解析|详解|答案/.test(f.name)) return false
      if (!/真题|原题|试题/.test(f.name)) return false
      return new RegExp(`(第${s}套|（第${s}套）|第${CN[s - 1]}套)`).test(f.name)
    })
    const audios = files.filter((f) => /\.mp3$/i.test(f.name))
    const pickAudio = (n) => {
      const byN = audios.find((f) => new RegExp(`（?第${n}套）?`).test(f.name) || new RegExp(`第${CN[n - 1]}套`).test(f.name))
      return byN || null
    }
    let audio = pickAudio(s)
    let audioReuse = false
    if (!audio && audios.length) {
      // 第3套官方通常复用第2套音频
      audio = s === 3 ? (pickAudio(2) || audios[0]) : audios[0]
      audioReuse = true
    }
    sets.push({
      id,
      batch: b,
      set: s,
      copyOf: COPY_OF[id] || 0,
      jiexi: sources[id],
      originals: origCandidates.map((f) => path.relative(ROOT, f.path)),
      audios: audios.map((f) => path.relative(ROOT, f.path)),
      audio: audio ? path.relative(ROOT, audio.path) : null,
      audioReuse,
    })
  }
}

// 复用套次：音频跟随源套
for (const s of sets) {
  if (!s.copyOf) continue
  const srcSet = sets.find((x) => x.id === `cet6-${s.id.slice(5, 12)}-s${s.copyOf}`)
  if (srcSet) { s.audio = srcSet.audio; s.audioReuse = true }
}

fs.writeFileSync('scripts/listening-config.json', JSON.stringify({ root: ROOT, sets }, null, 2), 'utf8')
console.log('sets', sets.length)
for (const s of sets) console.log(s.id, '| audio:', s.audio, s.audioReuse ? '(复用)' : '', '| 原题:', s.originals.join(' ; '), '| 解析:', s.jiexi)
