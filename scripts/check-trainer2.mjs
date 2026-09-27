// Trainer 2 数据结构自检：import 四个最终文件，逐套校验形状
import { PET_READING_TRAINER2 } from '../src/data/petReadingTrainer2.js'
import { PET_WRITING_TRAINER2 } from '../src/data/petWritingTrainer2.js'
import { PET_SPEAKING_TRAINER2 } from '../src/data/petSpeakingTrainer2.js'
import { PET_TRAINER2_LISTENING } from '../src/data/petTrainer2Listening.js'

const errs = []
const ok = (cond, msg) => { if (!cond) errs.push(msg) }

// ── Reading ──
ok(PET_READING_TRAINER2.length === 6, `reading tests=${PET_READING_TRAINER2.length}`)
PET_READING_TRAINER2.forEach((t, i) => {
  const n = i + 1
  ok(t.id === `pet-trainer2-${n}-reading`, `t${n} reading id=${t.id}`)
  ok(t.source?.test === n && t.source?.verified === false, `t${n} reading source`)
  const counts = [t.part1, t.part2, t.part3, t.part4, t.part5, t.part6].map(p => p.questions.length)
  ok(JSON.stringify(counts) === JSON.stringify([5, 5, 5, 5, 6, 6]), `t${n} reading part counts=${counts}`)
  ok(t.part2.options.length === 8, `t${n} p2 options=${t.part2.options.length}`)
  ok(t.part4.options.length === 8, `t${n} p4 options=${t.part4.options.length}`)
  const ids = [t.part1, t.part2, t.part3, t.part4, t.part5, t.part6].flatMap(p => p.questions.map(q => q.id))
  ids.forEach((id, k) => ok(id === k + 1, `t${n} reading q#${k}=${id}`))
  ok(t.part4.passage_segments.length === 5 || t.part4.passage_segments.length === 6, `t${n} p4 segs=${t.part4.passage_segments.length}`)
  t.part4.passage_segments.forEach((s, si) => ok(!/\(1[6-9]\)|\(20\)/.test(s), `t${n} p4 seg${si} contains blank marker`))
  t.part5.passage_segments.forEach((s, si) => { for (let q = 21; q <= 26; q++) if (s.includes(`(${q})`)) return; })
  const p5joined = t.part5.passage_segments.join(''); const p6joined = t.part6.passage_segments.join('')
  for (let q = 21; q <= 26; q++) ok(p5joined.includes(`(${q})`), `t${n} p5 missing (${q})`)
  for (let q = 27; q <= 32; q++) ok(p6joined.includes(`(${q})`), `t${n} p6 missing (${q})`)
  // p4 options 不得混入 segments
  const segsJoined = t.part4.passage_segments.join('')
  t.part4.options.forEach(o => ok(!segsJoined.includes(o.text), `t${n} p4 option ${o.label} text mixed into segments`))
})
console.log('reading checked')

// ── Writing ──
ok(PET_WRITING_TRAINER2.length === 6, `writing tests=${PET_WRITING_TRAINER2.length}`)
PET_WRITING_TRAINER2.forEach((t, i) => {
  const n = i + 1
  ok(t.meta.id === `pet-trainer2-${n}-writing`, `t${n} writing id=${t.meta.id}`)
  ok(t.items.length === 3, `t${n} writing items=${t.items.length}`)
  ok(t.items[0].part === 1 && t.items[0].minWords >= 100, `t${n} writing item1`)
  ok(t.items[1].q === 2 && t.items[2].q === 3, `t${n} writing q2/q3`)
  t.items.forEach(it => ok(it.prompt && it.modelAnswer && it.tips?.length >= 3 && it.contentKeywords?.length >= 6, `t${n} writing item p${it.part}q${it.q} fields`))
})
console.log('writing checked')

// ── Speaking ──
ok(PET_SPEAKING_TRAINER2.length === 6, `speaking tests=${PET_SPEAKING_TRAINER2.length}`)
PET_SPEAKING_TRAINER2.forEach((t, i) => {
  const n = i + 1
  ok(t.meta.id === `pet-trainer2-${n}-speaking`, `t${n} speaking id=${t.meta.id}`)
  const ks = Object.keys(t.parts).sort().join('')
  ok(ks === '1234', `t${n} speaking parts=${ks}`)
  ok(t.parts[1].phase1?.length >= 3, `t${n} sp p1 phase1=${t.parts[1].phase1?.length}`)
  ok(t.parts[2].photos?.length === 2, `t${n} sp p2 photos=${t.parts[2].photos?.length}`)
  t.parts[2].photos.forEach(p => ok(p.image.startsWith(`/images/pet/speaking/trainer2/test-${n}/`), `t${n} sp photo path=${p.image}`))
  ok(t.parts[3].image === `/images/pet/speaking/trainer2/test-${n}/task.png`, `t${n} sp task path`)
  ok(t.parts[3].options?.length >= 6, `t${n} sp p3 options=${t.parts[3].options?.length}`)
  ok(t.parts[4].questions?.length >= 5, `t${n} sp p4 questions=${t.parts[4].questions?.length}`)
})
console.log('speaking checked')

// ── Listening ──
ok(PET_TRAINER2_LISTENING.length === 6, `listening tests=${PET_TRAINER2_LISTENING.length}`)
PET_TRAINER2_LISTENING.forEach((t, i) => {
  const n = i + 1
  ok(t.meta.id === `pet-trainer2-test${n}-listening`, `t${n} listening id=${t.meta.id}`)
  const counts = [1, 2, 3, 4].map(k => t.parts[k].items.length)
  ok(JSON.stringify(counts) === JSON.stringify([7, 6, 6, 6]), `t${n} listening counts=${counts}`)
  for (let m = 1; m <= 4; m++) ok(t.parts[m].audio === `/audio/pet-trainer2/test-${n}/part-${m}.mp3`, `t${n} p${m} audio=${t.parts[m].audio}`)
  t.parts[1].items.forEach((it, k) => ok(it.image === `/images/pet/listening/trainer2/t${n}-q${k + 1}.png`, `t${n} p1 q${k + 1} image=${it.image}`))
  for (let m = 1; m <= 4; m++) t.parts[m].items.forEach(it => ok(it.explanation && it.explanation.length > 20, `t${n} p${m} q${it.q} explanation missing`))
})
console.log('listening checked')

if (errs.length) { console.log('FAIL', errs.length); errs.forEach(e => console.log(' -', e)); process.exit(1) }
console.log('ALL STRUCTURE CHECKS PASSED')
