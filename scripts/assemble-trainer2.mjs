// 组装 Trainer 2 数据文件：把 tN-<skill>.js 合并为仓库最终文件
import fs from 'fs'
import path from 'path'

const SRC = 'C:/Users/Huawei/AppData/Local/Temp/trainer2-data'
const OUT = 'd:/workspace_sunny/mars-cambridge/src/data'

const skills = [
  { key: 'reading', file: 'petReadingTrainer2.js', arr: 'PET_READING_TRAINER2', names: ['TRAINER2_TEST_1_READING', 'TRAINER2_TEST_2_READING', 'TRAINER2_TEST_3_READING', 'TRAINER2_TEST_4_READING', 'TRAINER2_TEST_5_READING', 'TRAINER2_TEST_6_READING'], desc: 'Trainer 2 阅读' },
  { key: 'writing', file: 'petWritingTrainer2.js', arr: 'PET_WRITING_TRAINER2', names: ['TRAINER2_TEST_1_WRITING', 'TRAINER2_TEST_2_WRITING', 'TRAINER2_TEST_3_WRITING', 'TRAINER2_TEST_4_WRITING', 'TRAINER2_TEST_5_WRITING', 'TRAINER2_TEST_6_WRITING'], desc: 'Trainer 2 写作' },
  { key: 'speaking', file: 'petSpeakingTrainer2.js', arr: 'PET_SPEAKING_TRAINER2', names: ['TRAINER2_TEST_1_SPEAKING', 'TRAINER2_TEST_2_SPEAKING', 'TRAINER2_TEST_3_SPEAKING', 'TRAINER2_TEST_4_SPEAKING', 'TRAINER2_TEST_5_SPEAKING', 'TRAINER2_TEST_6_SPEAKING'], desc: 'Trainer 2 口语' },
  { key: 'listening', file: 'petTrainer2Listening.js', arr: 'PET_TRAINER2_LISTENING', names: ['TRAINER2_TEST_1_LISTENING', 'TRAINER2_TEST_2_LISTENING', 'TRAINER2_TEST_3_LISTENING', 'TRAINER2_TEST_4_LISTENING', 'TRAINER2_TEST_5_LISTENING', 'TRAINER2_TEST_6_LISTENING'], desc: 'Trainer 2 听力' },
]

for (const s of skills) {
  const parts = []
  for (let i = 1; i <= 6; i++) {
    const raw = fs.readFileSync(path.join(SRC, `t${i}-${s.key}.js`), 'utf8')
    const body = raw
      .replace(/export const (\w+) =/, 'const $1 =')
      .replace(/export default \w+\s*;?\s*$/m, '')
      .trimEnd()
    parts.push(body)
  }
  const banner = `// B1 Preliminary for Schools Trainer 2 (2024) · ${s.desc}\n` +
    '// 来源: PET Trainer2/PET Trainer2 电子版.pdf（书内 Teacher\'s Notes & Keys / Practice Test Keys 核对）\n' +
    '// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）\n'
  const code = banner + parts.join('\n\n') + `\n\nexport const ${s.arr} = [\n  ${s.names.join(',\n  ')},\n]\n\nexport default ${s.arr}\n`
  fs.writeFileSync(path.join(OUT, s.file), code, 'utf8')
  console.log('written', s.file, code.length, 'chars')
}
