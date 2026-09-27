// 组装 Trainer 1 数据文件：把 tN-<skill>.js 合并为仓库最终文件
import fs from 'fs'
import path from 'path'

const SRC = 'C:/Users/Huawei/AppData/Local/Temp/trainer1-data'
const OUT = 'd:/workspace_sunny/mars-cambridge/src/data'

const skills = [
  { key: 'reading', file: 'petReadingTrainer1.js', arr: 'PET_READING_TRAINER1', names: ['TRAINER1_TEST_1_READING', 'TRAINER1_TEST_2_READING', 'TRAINER1_TEST_3_READING', 'TRAINER1_TEST_4_READING', 'TRAINER1_TEST_5_READING', 'TRAINER1_TEST_6_READING'], desc: 'Trainer 1 阅读' },
  { key: 'writing', file: 'petWritingTrainer1.js', arr: 'PET_WRITING_TRAINER1', names: ['TRAINER1_TEST_1_WRITING', 'TRAINER1_TEST_2_WRITING', 'TRAINER1_TEST_3_WRITING', 'TRAINER1_TEST_4_WRITING', 'TRAINER1_TEST_5_WRITING', 'TRAINER1_TEST_6_WRITING'], desc: 'Trainer 1 写作' },
  { key: 'speaking', file: 'petSpeakingTrainer1.js', arr: 'PET_SPEAKING_TRAINER1', names: ['TRAINER1_TEST_1_SPEAKING', 'TRAINER1_TEST_2_SPEAKING', 'TRAINER1_TEST_3_SPEAKING', 'TRAINER1_TEST_4_SPEAKING', 'TRAINER1_TEST_5_SPEAKING', 'TRAINER1_TEST_6_SPEAKING'], desc: 'Trainer 1 口语' },
]

for (const s of skills) {
  const parts = []
  for (let i = 1; i <= 6; i++) {
    const raw = fs.readFileSync(path.join(SRC, `t${i}-${s.key}.js`), 'utf8')
    // 去掉 "export const X =" 前缀、去掉 default export 行
    const body = raw
      .replace(/export const (\w+) =/, 'const $1 =')
      .replace(/export default \w+\s*;?\s*$/m, '')
      .trimEnd()
    parts.push(body)
  }
  const banner = `// B1 Preliminary for Schools Trainer 1 (2020) · ${s.desc}\n` +
    '// 来源: pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf（书内 Teacher\'s Notes & Keys / Practice Test Key 核对）\n' +
    '// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）\n'
  const code = banner + parts.join('\n\n') + `\n\nexport const ${s.arr} = [\n  ${s.names.join(',\n  ')},\n]\n\nexport default ${s.arr}\n`
  fs.writeFileSync(path.join(OUT, s.file), code, 'utf8')
  console.log('written', s.file, code.length, 'chars')
}
