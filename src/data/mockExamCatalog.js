// CET-4 模考真题中心目录 — 49 套真题（2019.06–2026.06，17 个批次全部套次）
// 不含 2020.07；2023.03 官方仅发布 1 套独立内容，故只有第1套
// 每套 meta 必须记录 source/answerSource/verified，便于后续录入时不遗漏
// 未核对套 getMockExam 返回 null，真题中心卡片不可点（显示“整理中”）
// AGENTS.md 约束：未核对数据不得标“官方”或“已完成”

import { getReadingSet } from './readingSets.js'
import { getListeningSet } from './listeningSets.js'
import { writingSets } from './writingSets.js'
import { translationSets } from './translationSets.js'

const CATALOG = [
  {
    id: 'cet4-2026-06-s3',
    meta: {
      year: 2026, month: 6, set: 3,
      source: "2026.06四级真题第3套【可复制可搜索，打印首选】.pdf",
      answerSource: "2026年6月英语四级解析第3套.pdf p12-p14（Part IV Translation 翻译点拨/参考译文）",
      verified: true,
    },
  },
  {
    id: 'cet4-2026-06-s2',
    meta: {
      year: 2026, month: 6, set: 2,
      source: "2026.06四级真题第2套【可复制可搜索，打印首选】.pdf",
      answerSource: "2026年6月英语四级解析第2套.pdf p20-p21（Part IV Translation 参考译文/难词注释/翻译点拨）",
      verified: true,
    },
  },
  {
    id: 'cet4-2026-06-s1',
    meta: {
      year: 2026, month: 6, set: 1,
      source: "2026.06四级真题第1套【可复制可搜索，打印首选】.pdf",
      answerSource: "2026年6月英语四级解析第1套.pdf p19-p21（Part IV Translation 参考译文/难词注释/翻译点拨）",
      verified: true,
    },
  },
  {
    id: 'cet4-2025-12-s3',
    meta: {
      year: 2025, month: 12, set: 3,
      source: "2025.12四级真题第3套.pdf",
      answerSource: "2025.12英语四级解析第3套.pdf p47-p48（Part IV Translation 难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2025-12-s2',
    meta: {
      year: 2025, month: 12, set: 2,
      source: "2025.12四级真题第2套.pdf",
      answerSource: "2025.12英语四级解析第2套.pdf p18-p19（Part IV Translation 难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2025-12-s1',
    meta: {
      year: 2025, month: 12, set: 1,
      source: "2025.12四级真题第1套.pdf",
      answerSource: "2025.12英语四级解析第1套.pdf p18（Part IV Translation 难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2025-06-s3',
    meta: {
      year: 2025, month: 6, set: 3,
      source: "2025.06四级真题第3套.pdf",
      answerSource: "2025.06英语四级解析第3套.pdf p48（Part IV Translation 难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2025-06-s2',
    meta: {
      year: 2025, month: 6, set: 2,
      source: "2025.06四级真题第2套.pdf",
      answerSource: "2025.06英语四级解析第2套.pdf p18（Part IV Translation 难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2025-06-s1',
    meta: {
      year: 2025, month: 6, set: 1,
      source: "2025.06四级真题第1套.pdf",
      answerSource: "2025.06英语四级解析第1套.pdf p18-p19（Part IV Translation 难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2024-12-s3',
    meta: {
      year: 2024, month: 12, set: 3,
      source: "2024.12四级真题第3套.pdf",
      answerSource: "2024.12英语四级解析第3套.pdf 第48页（Part IV Translation 难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2024-12-s2',
    meta: {
      year: 2024, month: 12, set: 2,
      source: "2024.12四级真题第2套.pdf",
      answerSource: "2024.12英语四级解析第2套.pdf p18-19（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2024-12-s1',
    meta: {
      year: 2024, month: 12, set: 1,
      source: "2024.12四级真题第1套.pdf",
      answerSource: "2024.12英语四级解析第1套.pdf p18（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2024-06-s3',
    meta: {
      year: 2024, month: 6, set: 3,
      source: "大学英语四级考试2024年6月真题【第三套】.pdf",
      answerSource: "2024年6月四级真题解析【第三套】.pdf p11（Part IV Translation 难词译注/参考译文/译点精析）",
      verified: true,
    },
  },
  {
    id: 'cet4-2024-06-s2',
    meta: {
      year: 2024, month: 6, set: 2,
      source: "大学英语四级考试2024年6月真题【第二套】.pdf",
      answerSource: "2024年6月四级真题解析【第二套】.pdf p18（Part IV Translation 难词译注/参考译文/译点精析）",
      verified: true,
    },
  },
  {
    id: 'cet4-2024-06-s1',
    meta: {
      year: 2024, month: 6, set: 1,
      source: "真题/真题/2024年06月CET4题+解+音频/2024年06月CET4/2024年6月四级真题-原题/大学英语四级考试2024年6月真题【第一套】.docx",
      answerSource: "2024年6月四级真题解析【第一套】.pdf p18（Part IV Translation 参考译文/难词注释/译点精析）",
      verified: true,
    },
  },
  {
    id: 'cet4-2023-12-s3',
    meta: {
      year: 2023, month: 12, set: 3,
      source: "2023.12四级真题第3套【可复制可检索】.pdf",
      answerSource: "2023.12英语四级真题第3套解析.pdf p47-48（Part IV Translation 难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2023-12-s2',
    meta: {
      year: 2023, month: 12, set: 2,
      source: "2023.12四级真题第2套【可复制可检索】.pdf",
      answerSource: "2023.12英语四级真题第2套解析.pdf p18（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2023-12-s1',
    meta: {
      year: 2023, month: 12, set: 1,
      source: "2023.12四级真题第1套【可复制可检索】.pdf",
      answerSource: "2023.12英语四级真题第1套解析.pdf p18（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2023-06-s3',
    meta: {
      year: 2023, month: 6, set: 3,
      source: "2023.06英语四级真题第3套.pdf",
      answerSource: "2023.06四级真题第3套详解.pdf p9（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2023-06-s2',
    meta: {
      year: 2023, month: 6, set: 2,
      source: "2023.06英语四级真题第2套.pdf",
      answerSource: "2023.06四级真题第2套详解.pdf p14（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2023-06-s1',
    meta: {
      year: 2023, month: 6, set: 1,
      source: "2023.06英语四级真题第1套.pdf",
      answerSource: "2023.06四级真题第1套详解.pdf p15（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2023-03-s1',
    meta: {
      year: 2023, month: 3, set: 1,
      source: "2023.03英语四级真题第1套.pdf（疫情延期考）",
      answerSource: "2023.03英语四级详解第1套.pdf p13（Part IV Translation 参考译文）",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-12-s3',
    meta: {
      year: 2022, month: 12, set: 3,
      source: "2022.12四级真题第3套.pdf",
      answerSource: "2022年12月四级真题第3套答案解析 PDF p10（Part IV Translation 参考译文/难点注释/译点）",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-12-s2',
    meta: {
      year: 2022, month: 12, set: 2,
      source: "2022.12四级真题第2套.pdf",
      answerSource: "2022.12四级真题第2套答案及详解.pdf p14（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-12-s1',
    meta: {
      year: 2022, month: 12, set: 1,
      source: "2022.12四级真题第1套.pdf",
      answerSource: "2022.12四级真题第1套答案及详解.pdf p14（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-09-s3',
    meta: {
      year: 2022, month: 9, set: 3,
      source: "2022.09英语四级真题第3套【可复制可搜索，打印首选】.pdf（疫情延期考）",
      answerSource: "2022.09英语四级详解第3套.pdf p1（Part IV Translation 参考译文；该页无难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-09-s2',
    meta: {
      year: 2022, month: 9, set: 2,
      source: "2022.09英语四级真题第2套【可复制可搜索，打印首选】.pdf（疫情延期考）",
      answerSource: "2022.09英语四级详解第2套.pdf p1（Part IV Translation 参考译文；该页无难词译注",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-09-s1',
    meta: {
      year: 2022, month: 9, set: 1,
      source: "2022.09英语四级真题第1套【可复制可搜索，打印首选】.pdf（疫情延期考）",
      answerSource: "2022.09英语四级详解第1套.pdf p13（Part IV Translation 参考译文）",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-06-s3',
    meta: {
      year: 2022, month: 6, set: 3,
      source: "2022.06四级真题第3套【可复制可搜索，打印首选】.pdf",
      answerSource: "2022.06英语四级解析第3套.pdf p2（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-06-s2',
    meta: {
      year: 2022, month: 6, set: 2,
      source: "2022.06四级真题第2套【可复制可搜索，打印首选】.pdf",
      answerSource: "2022.06英语四级解析第2套.pdf p10（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2022-06-s1',
    meta: {
      year: 2022, month: 6, set: 1,
      source: "2022.06四级真题第1套【可复制可搜索，打印首选】.pdf",
      answerSource: "2022.06英语四级解析第1套.pdf p14（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2021-12-s3',
    meta: {
      year: 2021, month: 12, set: 3,
      source: "2021.12四级真题第3套【可复制可搜索，打印首选】.pdf",
      answerSource: "2021.12英语四级解析第3套.pdf p10（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2021-12-s2',
    meta: {
      year: 2021, month: 12, set: 2,
      source: "2021.12四级真题第2套【可复制可搜索，打印首选】.pdf",
      answerSource: "2021.12英语四级解析第2套.pdf p15（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2021-12-s1',
    meta: {
      year: 2021, month: 12, set: 1,
      source: "2021.12四级真题第1套【可复制可搜索，打印首选】.pdf",
      answerSource: "2021.12英语四级解析第1套.pdf p15（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2021-06-s3',
    meta: {
      year: 2021, month: 6, set: 3,
      source: "2021.06四级真题第3套.pdf",
      answerSource: "2021年06月CET4题+解+音频/03、答案解析/2021年6月英语四级解析第三套.pdf p10（Part IV Translation 参考译文/译点精析/话题词汇）",
      verified: true,
    },
  },
  {
    id: 'cet4-2021-06-s2',
    meta: {
      year: 2021, month: 6, set: 2,
      source: "2021.06四级真题第2套.pdf",
      answerSource: "2021年06月CET4题+解+音频/03、答案解析/2021年6月英语四级解析第二套.pdf p15（Part IV Translation 参考译文/译点精析/话题词汇）",
      verified: true,
    },
  },
  {
    id: 'cet4-2021-06-s1',
    meta: {
      year: 2021, month: 6, set: 1,
      source: "2021.06四级真题第1套.pdf",
      answerSource: "真题/2021年06月CET4题+解+音频/03、答案解析/2021年6月英语四级解析第一套.pdf p15（Part IV Translation 参考译文与难点注释/话题词汇）",
      verified: true,
    },
  },
  {
    id: 'cet4-2020-12-s3',
    meta: {
      year: 2020, month: 12, set: 3,
      source: "2020.12月四级真题第3套【可复制可划线查词】.pdf",
      answerSource: "2020.12英语四级解析第3套.pdf p21（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2020-12-s2',
    meta: {
      year: 2020, month: 12, set: 2,
      source: "2020.12月四级真题第2套【可复制可划线查词】.pdf",
      answerSource: "2020.12英语四级解析第2套.pdf p20（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2020-12-s1',
    meta: {
      year: 2020, month: 12, set: 1,
      source: "2020.12月四级真题第1套【可复制可划线查词】.pdf",
      answerSource: "2020.12英语四级解析第1套.pdf p20（Part IV Translation 参考译文",
      verified: true,
    },
  },
  {
    id: 'cet4-2020-09-s3',
    meta: {
      year: 2020, month: 9, set: 3,
      source: "CET-4 2020-09 Set 3（疫情延期考）",
      answerSource: "2020.09英语四级解析第3套.pdf p2-3（Part IV Translation 参考译文与难点注释、话题词汇）",
      verified: true,
    },
  },
  {
    id: 'cet4-2020-09-s2',
    meta: {
      year: 2020, month: 9, set: 2,
      source: "2020.09月四级真题第2套【可复制可划线查词】.pdf（疫情延期考）",
      answerSource: "2020.09英语四级解析第2套.pdf p11（Part IV Translation 参考译文与难点注释）",
      verified: true,
    },
  },
  {
    id: 'cet4-2020-09-s1',
    meta: {
      year: 2020, month: 9, set: 1,
      source: "2020.09月四级真题第1套【可复制可划线查词】.pdf（疫情延期考）",
      answerSource: "2020.09英语四级解析第1套.pdf p16（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2019-12-s3',
    meta: {
      year: 2019, month: 12, set: 3,
      source: "2019.12月四级真题第3套【可复制可划线查词】.pdf",
      answerSource: "2019.12英语四级解析第3套.pdf p10（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2019-12-s2',
    meta: {
      year: 2019, month: 12, set: 2,
      source: "2019.12月四级真题第2套【可复制可划线查词】.pdf",
      answerSource: "2019.12英语四级解析第2套.pdf p15（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2019-12-s1',
    meta: {
      year: 2019, month: 12, set: 1,
      source: "2019.12月四级真题第1套【可复制可划线查词】.pdf",
      answerSource: "2019.12英语四级解析第1套.pdf p15（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2019-06-s3',
    meta: {
      year: 2019, month: 6, set: 3,
      source: "2019.06四级真题第3套【可复制可检索】.pdf",
      answerSource: "2019.06英语四级解析第3套.pdf p9（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2019-06-s2',
    meta: {
      year: 2019, month: 6, set: 2,
      source: "2019.06四级真题第2套【可复制可检索】.pdf",
      answerSource: "2019.06英语四级解析第2套.pdf p15（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
  {
    id: 'cet4-2019-06-s1',
    meta: {
      year: 2019, month: 6, set: 1,
      source: "2019.06四级真题第1套【可复制可检索】.pdf",
      answerSource: "2019.06英语四级解析第1套.pdf p15（Part IV Translation 参考译文与难点注释",
      verified: true,
    },
  },
]

export function listMockExams() {
  return CATALOG
}

// 聚合四项数据为模考运行器所需结构；未核对或数据缺失返回 null
export function getMockExam(setId) {
  const entry = CATALOG.find((c) => c.id === setId)
  if (!entry || !entry.meta.verified) return null
  const readingSet = getReadingSet(setId)
  const listeningSet = getListeningSet(setId)
  const writingSet = writingSets.find((w) => w.id === setId)
  const translationSet = translationSets.find((t) => t.id === setId)
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
