// CET-6 模考真题中心目录 — 49 套真题（2019.06–2026.06）
// 由阅读/听力/写作/翻译四个专项题库按同一 setId 聚合；四项数据齐全且均 verified 才能进入模考
// 未凑齐或未核对套次由 getMockExam6 返回 null（列表显示“整理中”）

import { readingSets6, getReadingSet6 } from './readingSets6.js'
import { listeningSets6, getListeningSet6 } from './listeningSets6.js'
import { writingSets6 } from './writingSets6.js'
import { translationSets6 } from './translationSets6.js'

const findWriting = (id) => writingSets6.find((w) => w.id === id) || null
const findTranslation = (id) => translationSets6.find((t) => t.id === id) || null

const CATALOG = readingSets6
  .map((r) => {
    const l = getListeningSet6(r.id)
    const w = findWriting(r.id)
    const t = findTranslation(r.id)
    if (!l || !w || !t) return null
    return {
      id: r.id,
      meta: {
        year: r.meta.year,
        month: r.meta.month,
        set: r.meta.set,
        source: r.meta.source,
        answerSource: '阅读/听力/写作/翻译四模块均取自各专项题库，逐套核对记录见各套 meta',
        verified: [r, l, w, t].every((s) => s.meta?.verified === true),
      },
    }
  })
  .filter(Boolean)
  .sort((a, b) => b.meta.year - a.meta.year || b.meta.month - a.meta.month || b.meta.set - a.meta.set)

export function listMockExams6() {
  return CATALOG
}

// 聚合四项数据为模考运行器所需结构；未核对或数据缺失返回 null
export function getMockExam6(setId) {
  const entry = CATALOG.find((c) => c.id === setId)
  if (!entry || !entry.meta.verified) return null
  const readingSet = getReadingSet6(setId)
  const listeningSet = getListeningSet6(setId)
  const writingSet = findWriting(setId)
  const translationSet = findTranslation(setId)
  if (!readingSet || !listeningSet || !writingSet || !translationSet) return null
  return {
    id: setId,
    meta: entry.meta,
    writing: writingSet,
    listening: listeningSet,
    reading: readingSet,
    translation: translationSet,
  }
}

// 供自检/统计使用
export const MOCK_EXAM6_TOTAL = listeningSets6.length
