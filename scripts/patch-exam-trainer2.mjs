// 一次性接线补丁：CambridgeExam.jsx / CambridgeWriting.jsx 挂载 KET Trainer 2 阅读写作口语
import fs from 'fs'

function patch(file, replacements) {
  let s = fs.readFileSync(file, 'utf8')
  const eol = s.includes('\r\n') ? '\r\n' : '\n'
  let count = 0
  for (const [fromRaw, toRaw] of replacements) {
    const from = fromRaw.replaceAll('\n', eol)
    const to = toRaw.replaceAll('\n', eol)
    if (s.includes(to)) { count++; continue } // 已应用过
    if (!s.includes(from)) { console.error(`MISS in ${file}: ${fromRaw.slice(0, 60)}...`); process.exit(1) }
    s = s.replace(from, to)
    count++
  }
  fs.writeFileSync(file, s)
  console.log(`${file}: ${count}/${replacements.length} applied`)
}

// ── CambridgeExam.jsx ─────────────────────────────────────
patch('src/pages/CambridgeExam.jsx', [
  [
    "import { KET_TRAINER1_WRITING } from '../data/ketWritingTrainer1'\nimport { KET_TRAINER1_SPEAKING } from '../data/ketSpeakingTrainer1'",
    "import { KET_TRAINER1_WRITING } from '../data/ketWritingTrainer1'\nimport { KET_TRAINER2_WRITING } from '../data/ketWritingTrainer2'\nimport { KET_TRAINER1_SPEAKING } from '../data/ketSpeakingTrainer1'\nimport { KET_TRAINER2_SPEAKING } from '../data/ketSpeakingTrainer2'",
  ],
  [
    `// 《A2 Key for Schools Trainer 1》Second Edition 的 Exam Practice 卷。
// 目前仅听力已逐题核对（见 officialListeningManifest 中 book='trainer-1' 的套卷），
// 阅读/写作/口语尚未录入，因此这些试卷只开放听力模考入口。
// 《A2 Key for Schools Trainer 1》Second Edition 的 Exam Practice 卷。
// 听力从 officialListeningManifest 取；阅读/写作/口语从对应 Trainer 数据文件取，
// 只有逐题核对完成的套卷才挂载对应模块（未录入的模块保持入口关闭）。
const TRAINER_READY_EXAMS = OFFICIAL_LISTENING_SETS
  .filter(set => set.book === 'trainer-1' && set.readyParts?.length === 5)
  .map(set => {
    const testId = \`ket-trainer1-test\${set.test}\`
    const reading = getKetReadingTest(testId)
    const writing = KET_TRAINER1_WRITING[testId]
    const speaking = KET_TRAINER1_SPEAKING[testId]
    return {
      id: \`trainer-1-\${set.test}\`,
      kind: 'trainer',
      title: 'A2 Key for Schools Trainer 1（Second Edition）',
      label: \`Trainer 1 · Test \${set.test}\`,
      listening: {},
      ...(hasCompleteKetReadingPaper(reading) && writing?.length === 2
        ? { reading: { parts: adaptReadingTest(reading), writing } }
        : {}),
      ...(speaking?.parts?.length ? { speaking } : {}),
    }
  })`,
    `// 《A2 Key for Schools Trainer》系列 Exam Practice 卷。
// Trainer 1：听力从 officialListeningManifest 取；阅读/写作/口语从对应 Trainer 数据文件取，
// 只有逐题核对完成的套卷才挂载对应模块（未录入的模块保持入口关闭）。
// Trainer 2：听力尚未录入；阅读/写作/口语已逐题核对完成（阅读 Part 1-5 + 写作 Part 6-7 + 口语 Part 2）。
const TRAINER_READY_EXAMS = [
  ...OFFICIAL_LISTENING_SETS
    .filter(set => set.book === 'trainer-1' && set.readyParts?.length === 5)
    .map(set => {
      const testId = \`ket-trainer1-test\${set.test}\`
      const reading = getKetReadingTest(testId)
      const writing = KET_TRAINER1_WRITING[testId]
      const speaking = KET_TRAINER1_SPEAKING[testId]
      return {
        id: \`trainer-1-\${set.test}\`,
        kind: 'trainer',
        title: 'A2 Key for Schools Trainer 1（Second Edition）',
        label: \`Trainer 1 · Test \${set.test}\`,
        listening: {},
        ...(hasCompleteKetReadingPaper(reading) && writing?.length === 2
          ? { reading: { parts: adaptReadingTest(reading), writing } }
          : {}),
        ...(speaking?.parts?.length ? { speaking } : {}),
      }
    }),
  ...ketReadingTrainer2Tests.map(test => {
    const n = test.source.test
    const writing = KET_TRAINER2_WRITING[test.id]
    const speaking = KET_TRAINER2_SPEAKING[test.id]
    return {
      id: \`trainer-2-\${n}\`,
      kind: 'trainer',
      title: 'A2 Key for Schools Trainer 2',
      label: \`Trainer 2 · Test \${n}\`,
      listening: {},
      ...(hasCompleteKetReadingPaper(test) && writing?.length === 2
        ? { reading: { parts: adaptReadingTest(test), writing } }
        : {}),
      ...(speaking?.parts?.length ? { speaking } : {}),
    }
  }),
]`,
  ],
  [
    `  // Trainer 1《A2 Key for Schools Trainer》6 套 Exam Practice：setId 21-26
  const [, trainerTest] = exam.id.match(/^trainer-1-(\\d+)$/) || []
  if (trainerTest) return 20 + Number(trainerTest)`,
    `  // Trainer 1《A2 Key for Schools Trainer》6 套 Exam Practice：setId 21-26
  const [, trainerTest] = exam.id.match(/^trainer-1-(\\d+)$/) || []
  if (trainerTest) return 20 + Number(trainerTest)
  // Trainer 2：听力未录入，setId 仅作占位（27-32），避免 NaN 落进缓存 key
  const [, trainer2Test] = exam.id.match(/^trainer-2-(\\d+)$/) || []
  if (trainer2Test) return 26 + Number(trainer2Test)`,
  ],
  [
    "{isTrainer ? 'KET TRAINER 1 · EXAM PRACTICE TEST' : 'KET FULL PRACTICE TEST'}",
    "{isTrainer ? 'KET TRAINER · EXAM PRACTICE TEST' : 'KET FULL PRACTICE TEST'}",
  ],
  [
    "'Trainer 1 阅读与写作正在逐题核对，暂未开放'",
    "'Trainer 阅读与写作正在逐题核对，暂未开放'",
  ],
  [
    "'Trainer 1 口语材料正在整理，暂未开放'",
    "'Trainer 口语材料正在整理，暂未开放'",
  ],
  [
    "isTrainer ? '听力、阅读、写作与口语均按官方材料逐题核对。'",
    "isTrainer ? (exam.id.startsWith('trainer-2') ? '听力尚未录入；阅读、写作与口语均按官方材料逐题核对。' : '听力、阅读、写作与口语均按官方材料逐题核对。')",
  ],
  [
    "import { getKetReadingTest, hasCompleteKetReadingPaper } from '../data/ketReadingCatalog'",
    "import { getKetReadingTest, hasCompleteKetReadingPaper, ketReadingTrainer2Tests } from '../data/ketReadingCatalog'",
  ],
])

console.log('--- check imports of ketReadingTrainer2Tests in CambridgeExam.jsx ---')
const examSrc = fs.readFileSync('src/pages/CambridgeExam.jsx', 'utf8')
if (!examSrc.includes('ketReadingTrainer2Tests')) {
  console.error('NEED: import ketReadingTrainer2Tests in CambridgeExam.jsx — inspecting catalog import line')
  const m = examSrc.match(/import[^\n]*ketReadingCatalog[^\n]*/)
  console.log(m ? m[0] : 'no catalog import found')
}

// ── CambridgeWriting.jsx ──────────────────────────────────
patch('src/pages/CambridgeWriting.jsx', [
  [
    "import { KET_TRAINER1_WRITING } from '../data/ketWritingTrainer1'",
    "import { KET_TRAINER1_WRITING } from '../data/ketWritingTrainer1'\nimport { KET_TRAINER2_WRITING } from '../data/ketWritingTrainer2'",
  ],
  [
   `}))).concat(Object.entries(KET_TRAINER1_WRITING).map(([id, writing], index) => ({
  exam: { id, label: \`Trainer 1 · Test \${index + 1}\`, reading: { writing } },
  book: 'trainer1',
  test: index + 1,
})))`,
   `}))).concat(Object.entries(KET_TRAINER1_WRITING).map(([id, writing], index) => ({
  exam: { id, label: \`Trainer 1 · Test \${index + 1}\`, reading: { writing } },
  book: 'trainer1',
  test: index + 1,
}))).concat(Object.entries(KET_TRAINER2_WRITING).map(([id, writing], index) => ({
  exam: { id, label: \`Trainer 2 · Test \${index + 1}\`, reading: { writing } },
  book: 'trainer2',
  test: index + 1,
})))`,
  ],
])
