// FCE 真题册注册表 — 统一定位 全真模拟 / 标准版（Cambridge English First 1–4）/ 校园版（B2 First for Schools 1–4）的数据
// examId 规范:
//   fce-mock-<n>              全真模拟第 n 套（1–8）
//   fce-standard-<b>-test<t>  标准版第 b 册第 t 套（b/t = 1–4）
//   fce-schools-<b>-test<t>   校园版第 b 册第 t 套（b/t = 1–4）
// 进度/错题存储使用 examKey = examId（mock 旧数据以纯数字 key 保存，读取时兼容）。
// 数据来源均为用户提供的官方真题扫描 PDF，逐题人工核对后录入；未录入完成的卷面在 UI 标注"录入中"。

import { fceReadingTests } from './fceReadingTests'
import { fceWritingTests } from './fceWritingTests'
import { fceListeningTests } from './fceListeningTests'
import { fceSpeakingTests } from './fceSpeakingTests'
import { fceStandardReadingTests } from './fceStandardReadingTests'
import { fceStandardWritingTests } from './fceStandardWritingTests'
import { fceStandardListeningTests } from './fceStandardListeningTests'
import { fceStandardSpeakingTests } from './fceStandardSpeakingTests'
import { fceSchoolsReadingTests } from './fceSchoolsReadingTests'
import { fceSchoolsWritingTests } from './fceSchoolsWritingTests'
import { fceSchoolsListeningTests } from './fceSchoolsListeningTests'
import { fceSchoolsSpeakingTests } from './fceSchoolsSpeakingTests'

const MOCK_META = {
  edition: 'mock',
  label: '全真模拟试题',
  source: 'FCE 8套全真模拟试题.pdf',
}

export const FCE_EDITIONS = [
  {
    edition: 'mock',
    label: '全真模拟试题',
    help: 'FCE 全真模拟试题 1–8 · 四卷全收录',
    books: Array.from({ length: 8 }, (_, i) => ({
      book: i + 1,
      title: `FCE 全真模拟试题 ${i + 1}`,
      sub: `Test ${i + 1}`,
      examId: `fce-mock-${i + 1}`,
      source: MOCK_META.source,
    })),
  },
  {
    edition: 'standard',
    label: '标准版真题',
    help: 'Cambridge English First 1–4 · 每册 4 套',
    books: [1, 2, 3, 4].map(b => ({
      book: b,
      title: `FCE 标准版真题 ${b}`,
      sub: 'Cambridge English First',
      examId: `fce-standard-${b}`,
      source: `标准版${b} PDF（用户原件扫描版）`,
    })),
  },
  {
    edition: 'schools',
    label: '校园版真题',
    help: 'B2 First for Schools 1–4 · 每册 4 套',
    books: [1, 2, 3, 4].map(b => ({
      book: b,
      title: `FCE 校园版真题 ${b}`,
      sub: 'B2 First for Schools',
      examId: `fce-schools-${b}`,
      source: `校园版${b} PDF（用户原件扫描版）`,
    })),
  },
]

function editionOf(examId) {
  if (examId.startsWith('fce-mock-')) return 'mock'
  if (examId.startsWith('fce-standard-')) return 'standard'
  if (examId.startsWith('fce-schools-')) return 'schools'
  return null
}

// 'fce-standard-1-test2' → { edition:'standard', book:1, testN:2 }；'fce-mock-3' → { edition:'mock', book:0, testN:3 }
export function parseFceExamId(examId) {
  const edition = editionOf(String(examId || ''))
  if (!edition) return null
  if (edition === 'mock') {
    const n = Number(examId.slice('fce-mock-'.length))
    return Number.isInteger(n) && n >= 1 && n <= 8 ? { edition, book: 0, testN: n } : null
  }
  const m = examId.match(/^fce-(standard|schools)-(\d+)-test(\d+)$/)
  if (!m) return null
  const book = Number(m[2])
  const testN = Number(m[3])
  return book >= 1 && book <= 4 && testN >= 1 && testN <= 4 ? { edition: m[1], book, testN } : null
}

// 按卷面种类取对应数组；返回 undefined 表示该册尚未录入
export function fcePaperArray(edition, paper) {
  if (edition === 'mock') {
    return { reading: fceReadingTests, writing: fceWritingTests, listening: fceListeningTests, speaking: fceSpeakingTests }[paper]
  }
  if (edition === 'standard') {
    return {
      reading: fceStandardReadingTests,
      writing: fceStandardWritingTests,
      listening: fceStandardListeningTests,
      speaking: fceStandardSpeakingTests,
    }[paper]
  }
  return {
    reading: fceSchoolsReadingTests,
    writing: fceSchoolsWritingTests,
    listening: fceSchoolsListeningTests,
    speaking: fceSchoolsSpeakingTests,
  }[paper]
}

// examId → 全部四卷数据；缺卷返回 null，UI 据此显示"录入中"
export function fceExamPapers(examId) {
  const parsed = parseFceExamId(examId)
  if (!parsed) return null
  const pick = paper => {
    const arr = fcePaperArray(parsed.edition, paper)
    if (!arr) return null
    if (parsed.edition === 'mock') return arr[parsed.testN - 1] || null
    // standard/schools 数组按 册1T1..4, 册2T1..4 ... 顺序存放
    const idx = (parsed.book - 1) * 4 + (parsed.testN - 1)
    return arr[idx] || null
  }
  return {
    ...parsed,
    reading: pick('reading'),
    writing: pick('writing'),
    listening: pick('listening'),
    speaking: pick('speaking'),
  }
}

// examId → 展示用标题，如 'FCE 标准版真题 2 · Test 3'
export function fceExamTitle(examId) {
  const parsed = parseFceExamId(examId)
  if (!parsed) return 'FCE 试卷'
  if (parsed.edition === 'mock') return `FCE 全真模拟试题 ${parsed.testN}`
  const editionLabel = parsed.edition === 'standard' ? '标准版' : '校园版'
  return `FCE ${editionLabel}真题 ${parsed.book} · Test ${parsed.testN}`
}

// 专项练习页链接后缀：'&exam=fce-standard-1-test2'（保留旧 ?test= 兼容 mock）
export function fceExamQueryParam(examId) {
  return `exam=${examId}`
}
