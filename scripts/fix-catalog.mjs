// 一次性修补：确保 ketReadingCatalog.js 引入并拼接 ketReadingTrainer2Tests
import fs from 'fs'

const p = 'src/data/ketReadingCatalog.js'
let s = fs.readFileSync(p, 'utf8')
let changed = false

if (!s.includes("from './ketReadingTrainer2.js'")) {
  s = s.replace(
    "import { ketReadingTrainer1Tests } from './ketReadingTrainer1.js'",
    "import { ketReadingTrainer1Tests } from './ketReadingTrainer1.js'\nimport { ketReadingTrainer2Tests } from './ketReadingTrainer2.js'",
  )
  changed = true
}
const from = 'export const ALL_KET_READING_TESTS = [...ketTests, ...ketStandardReadingTests, ...ketReadingTrainer1Tests]'
const to = 'export const ALL_KET_READING_TESTS = [...ketTests, ...ketStandardReadingTests, ...ketReadingTrainer1Tests, ...ketReadingTrainer2Tests]'
if (s.includes(from)) {
  s = s.replace(from, to)
  changed = true
}
if (changed) {
  fs.writeFileSync(p, s)
  console.log('FIXED')
} else {
  console.log('ALREADY OK')
}
