import { ketTests } from '../src/data/ketReadingData.js'
import { ketPart5Sets } from '../src/data/ketPart5Extras.js'

const errors = []
const warnings = []

const fail = (scope, message) => errors.push(`${scope}: ${message}`)
const warn = (scope, message) => warnings.push(`${scope}: ${message}`)

function ids(items = []) {
  return items.map(item => item.id)
}

function expectIds(scope, items, expected) {
  const actual = ids(items)
  if (actual.join(',') !== expected.join(',')) {
    fail(scope, `题号应为 ${expected.join(', ')}，实际为 ${actual.join(', ') || '空'}`)
  }
}

function checkChoice(scope, question, labels = ['A', 'B', 'C']) {
  const options = question.options || {}
  const actual = Object.keys(options)
  if (actual.join(',') !== labels.join(',')) {
    fail(scope, `选项应为 ${labels.join('/')}，实际为 ${actual.join('/') || '空'}`)
  }
  if (!labels.includes(question.answer)) {
    fail(scope, `答案“${question.answer ?? ''}”不在选项中`)
  }
  for (const label of labels) {
    if (!String(options[label] || '').trim()) fail(scope, `${label} 选项为空`)
  }
}

for (const test of ketTests) {
  const scope = `Test ${test.id}`
  if (!test.source?.file || !test.source?.test || test.source?.verified !== true) {
    fail(scope, '缺少可追溯且已核验的原卷来源（source.file/source.test/source.verified）')
  }

  expectIds(`${scope} Part 1`, test.part1?.questions, [1, 2, 3, 4, 5, 6])
  test.part1?.questions?.forEach(q => checkChoice(`${scope} Part 1 #${q.id}`, q))

  if ((test.part2?.people || []).length !== 3) fail(`${scope} Part 2`, '人物/地点材料必须正好为 3 项')
  expectIds(`${scope} Part 2`, test.part2?.questions, [7, 8, 9, 10, 11, 12, 13])
  test.part2?.questions?.forEach(q => {
    if (!['A', 'B', 'C'].includes(q.answer)) fail(`${scope} Part 2 #${q.id}`, '答案不在 A/B/C 中')
  })

  if (!String(test.part3?.passage || '').trim()) fail(`${scope} Part 3`, '文章为空')
  expectIds(`${scope} Part 3`, test.part3?.questions, [14, 15, 16, 17, 18])
  test.part3?.questions?.forEach(q => checkChoice(`${scope} Part 3 #${q.id}`, q))

  expectIds(`${scope} Part 4`, test.part4?.questions, [19, 20, 21, 22, 23, 24])
  if ((test.part4?.passage_segments || []).length !== 7) {
    fail(`${scope} Part 4`, `6 个空应有 7 段正文，实际为 ${(test.part4?.passage_segments || []).length} 段`)
  }
  test.part4?.questions?.forEach(q => checkChoice(`${scope} Part 4 #${q.id}`, q))

  expectIds(`${scope} Part 5`, test.part5?.questions, [25, 26, 27, 28, 29, 30])
  test.part5?.questions?.forEach(q => {
    if (!Array.isArray(q.answers) || q.answers.length === 0 || q.answers.some(a => !String(a).trim())) {
      fail(`${scope} Part 5 #${q.id}`, '答案为空')
    }
  })

}

if (ketPart5Sets.length) warn('Part 5', `保留 ${ketPart5Sets.length} 套专项题库；必须与“已核验官方真题”分区显示，不得混充整套原卷`)

console.log(`阅读数据审计：${ketTests.length} 套整卷，${ketPart5Sets.length} 套 Part 5 专项`)
if (warnings.length) {
  console.log(`\n警告（${warnings.length}）：`)
  warnings.forEach(item => console.log(`- ${item}`))
}
if (errors.length) {
  console.error(`\n失败（${errors.length}）：`)
  errors.forEach(item => console.error(`- ${item}`))
  process.exitCode = 1
} else {
  console.log('\n通过：题号、题量、选项、答案、挖空段落及来源字段均完整。')
}
