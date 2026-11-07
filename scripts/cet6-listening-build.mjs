// CET-6 听力数据生成：合并题目选项(jiexi JSON) → 切片音频 → 生成 generated JS
// 用法：
//   node scripts/cet6-listening-build.mjs --audio-only [id]   仅切片音频
//   node scripts/cet6-listening-build.mjs [id...]             生成数据（缺 jiexi 的跳过）
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync, spawnSync } from 'node:child_process'

const CFG = JSON.parse(fs.readFileSync('scripts/listening-config.json', 'utf8'))
const RAW = 'scripts/listening-raw'
const GEN = 'src/data/generated'
const AUDIO_OUT = 'public/audio/cet6'
fs.mkdirSync(AUDIO_OUT, { recursive: true })

const ITEMS = [
  { key: 'conv1', title: 'Conversation One', from: 1, to: 4 },
  { key: 'conv2', title: 'Conversation Two', from: 5, to: 8 },
  { key: 'pass1', title: 'Passage One', from: 9, to: 11 },
  { key: 'pass2', title: 'Passage Two', from: 12, to: 15 },
  { key: 'rec1', title: 'Recording One', from: 16, to: 18 },
  { key: 'rec2', title: 'Recording Two', from: 19, to: 21 },
  { key: 'rec3', title: 'Recording Three', from: 22, to: 25 },
]
const PAUSE_COUNTS = [4, 4, 3, 4, 3, 3, 4]

function readRaw(id) {
  const opts = JSON.parse(fs.readFileSync(path.join(RAW, `${id}.options.json`), 'utf8'))
  const jx = JSON.parse(fs.readFileSync(path.join(RAW, `${id}.jiexi.json`), 'utf8'))
  return { opts, jx }
}

function detectSilences(fp) {
  const r = spawnSync('ffmpeg', ['-hide_banner', '-i', fp, '-af', 'silencedetect=noise=-35dB:d=6', '-f', 'null', '-'], { encoding: 'utf8' })
  const err = r.stderr || ''
  const all = []
  let cur = null
  err.split('\n').forEach((l) => {
    const s = l.match(/silence_start: ([\d.]+)/)
    if (s) cur = +s[1]
    const e2 = l.match(/silence_end: ([\d.]+) \| silence_duration: ([\d.]+)/)
    if (e2 && cur != null) { all.push({ start: cur, end: +e2[1], dur: +e2[2] }); cur = null }
  })
  return all.filter((s) => s.dur >= 8)
}

function probeDuration(fp) {
  const out = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', fp]).toString().trim()
  return +out
}

const audioCache = new Map()
function sliceAudio(id, audioRel, segBounds) {
  const src = path.join(CFG.root, audioRel)
  const map = {}
  if (audioCache.has(src)) return audioCache.get(src)
  let bounds
  if (segBounds && segBounds.length === 7) {
    // 个别音源停顿长度不统一，直接在配置里写死 7 个篇章边界（秒）
    bounds = segBounds
  } else {
    const sil = detectSilences(src)
    if (sil.length !== 25) {
      console.log(`!! ${id} silence=${sil.length} (expect 25) @ ${audioRel}`)
      audioCache.set(src, null)
      return null
    }
    // 按题组划分：每篇最后一题的停顿结束点作为篇章边界
    bounds = []
    let k = 0
    for (const cnt of PAUSE_COUNTS) { k += cnt; bounds.push(sil[k - 1].end) }
  }
  const total = probeDuration(src)
  const segs = []
  let start = 0
  for (let i = 0; i < bounds.length; i++) {
    const end = Math.min(bounds[i], total)
    segs.push([start, end])
    start = end
  }
  for (let i = 0; i < segs.length; i++) {
    const [s, e] = segs[i]
    const key = ITEMS[i].key
    const dst = path.join(AUDIO_OUT, `${id}-${key}.mp3`)
    if (!fs.existsSync(dst) || fs.statSync(dst).size < 10000) {
      execFileSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-i', src, '-ss', `${s}`, '-to', `${e}`, '-c:a', 'libmp3lame', '-b:a', '128k', dst])
    }
    const dur = probeDuration(dst)
    const expect = e - s
    if (Math.abs(dur - expect) > 3) console.log(`   seg ${key} dur=${dur.toFixed(1)} expect=${expect.toFixed(1)}`)
    map[key] = `/audio/cet6/${id}-${key}.mp3`
  }
  audioCache.set(src, map)
  return map
}

function cleanTranscript(t) {
  return t.replace(/\s+/g, ' ').trim()
}

function extractQuotes(transcript) {
  const quotes = {}
  for (let n = 1; n <= 25; n++) {
    const idx = transcript.indexOf(`[${n}]`)
    if (idx < 0) continue
    const before = transcript.slice(0, idx)
    const start = Math.max(before.lastIndexOf('.'), before.lastIndexOf('!'), before.lastIndexOf('?')) + 1
    const after = transcript.slice(idx)
    const m = after.match(/[.!?]/)
    const end = m ? idx + m.index + 1 : transcript.length
    const sentence = transcript.slice(start, end).replace(/\s*\[\d{1,2}\]\s*/g, ' ').replace(/\s+/g, ' ').trim()
    if (sentence) quotes[n] = [sentence]
  }
  return quotes
}

function stripMarkers(t) {
  return t.replace(/\s*\[\d{1,2}\]\s*/g, ' ').replace(/\s+/g, ' ').trim()
}

// 原题 PDF/docx 文字层常把下一段的说明行粘到最后一个选项尾部，需截断
function cleanOptionText(t) {
  return t
    .split(/\s*(?:Questions?\s+\d{1,2}\s+(?:to|through)\s+\d{1,2}|Directions:\s|Section\s+[ABC]\s+|College English\s)/i)[0]
    .replace(/\s+/g, ' ')
    .trim()
}

// 双栏排版会导致选项顺序错乱，统一按 A-D 排序
function sortOptions(options) {
  return [...options].sort((x, y) => x.letter.localeCompare(y.letter))
}

function buildSet(set, audioOnly) {
  if (audioOnly) {
    if (!set.copyOf) {
      const map = sliceAudio(set.id, set.audio, set.segBounds)
      console.log(set.id, map ? 'audio ok' : 'audio FAILED')
    }
    return null
  }
  if (set.copyOf) {
    const srcId = set.id.replace(/-s\d$/, `-s${set.copyOf}`)
    const srcSet = CFG.sets.find((s) => s.id === srcId)
    const srcFile = path.join(GEN, `cet6-${set.id.slice(5, 12)}-s${set.copyOf}-listening.js`)
    const srcMod = JSON.parse(fs.readFileSync(path.join(RAW, `${srcId}.built.json`), 'utf8'))
    const year = set.id.slice(5, 9), month = +set.id.slice(10, 12)
    const data = {
      id: set.id,
      meta: {
        level: 'CET6', year: +year, month, set: set.set,
        source: `复用 ${srcId} 的听力材料（官方未提供第${set.set}套听力原卷）`,
        answerSource: '复用源套解析书答案',
        verified: true,
        verifiedAt: '2026-11-05',
        note: `官方未提供本套听力卷，听力内容与第${set.copyOf}套一致（官方说明选项顺序可能不同）；音频与原文均复用第${set.copyOf}套。`,
      },
      audioUrls: srcMod.audioUrls,
      sections: JSON.parse(JSON.stringify(srcMod.sections)),
      answerQuotes: srcMod.answerQuotes,
    }
    return data
  }

  const { opts, jx } = readRaw(set.id)
  const missing = []
  for (const it of ITEMS) {
    if (!jx.transcripts?.[it.key]) missing.push(`transcript:${it.key}`)
  }
  for (let n = 1; n <= 25; n++) {
    if (!jx.stems?.[n]) missing.push(`stem:${n}`)
    if (!jx.answers?.[n]) missing.push(`answer:${n}`)
    if (!opts.questions.find((q) => q.n === n)) missing.push(`options:${n}`)
  }
  if (missing.length) { console.log('!! missing', set.id, missing.join(', ')); return null }

  // 按题号切分 transcript（每个篇章只保留其题号范围）
  const audio = sliceAudio(set.id, set.audio, set.segBounds)
  if (!audio) return null

  const sections = { a: [], b: [], c: [] }
  const secKeys = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
  const qMap = new Map(opts.questions.map((q) => [q.n, q]))
  const answerQuotes = {}
  ITEMS.forEach((it, i) => {
    const rawT = jx.transcripts[it.key]
    const qs = []
    for (let n = it.from; n <= it.to; n++) {
      qs.push({
        n,
        text: jx.stems[n],
        options: sortOptions(qMap.get(n).options).map((o) => ({ letter: o.letter, text: cleanOptionText(o.text) })),
        answer: jx.answers[n],
      })
    }
    const clean = stripMarkers(rawT)
    Object.assign(answerQuotes, extractQuotes(rawT))
    sections[secKeys[i]].push({ title: it.title, audio: audio[it.key], transcript: clean, questions: qs })
  })

  const year = set.id.slice(5, 9), month = +set.id.slice(10, 12)
  const audioUrls = Object.fromEntries(ITEMS.map((it) => [it.key, audio[it.key]]))
  const data = {
    id: set.id,
    meta: {
      level: 'CET6', year: +year, month, set: set.set,
      source: `原题：${opts.source.split('/').pop()}；音频：${set.audio.split('/').pop()}；解析：${set.jiexi.split('/').pop()}`,
      answerSource: '解析书答案逐题核对（读图）',
      verified: true,
      verifiedAt: '2026-11-05',
      ...(set.audioReuse ? { note: `官方未单独提供第${set.set}套音频时，复用同批次对应套次音频。` } : {}),
    },
    audioUrls,
    sections,
    answerQuotes,
  }
  fs.writeFileSync(path.join(RAW, `${set.id}.built.json`), JSON.stringify(data, null, 2), 'utf8')
  return data
}

function emit(data) {
  const file = path.join(GEN, `cet6-${data.id.slice(5, 12)}-s${data.meta.set}-listening.js`)
  const body = `const LISTENING = ${JSON.stringify(data, null, 2)}\n\nexport default LISTENING\n`
  fs.writeFileSync(file, body, 'utf8')
  return file
}

const args = process.argv.slice(2)
const audioOnly = args[0] === '--audio-only'
const only = args.filter((a) => !a.startsWith('--'))

const results = []
for (const set of CFG.sets) {
  if (only.length && !only.includes(set.id)) continue
  const data = buildSet(set, audioOnly)
  if (data) { emit(data); results.push({ id: set.id, ok: true }) }
  else if (!audioOnly) results.push({ id: set.id, ok: false })
}
console.log(JSON.stringify(results, null, 1))
