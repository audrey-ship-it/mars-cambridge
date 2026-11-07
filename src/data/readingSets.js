// 题库单一来源：专项练习读取本文件。
// 每套题必须记录 meta：source（原题文件名）、answerSource（答案解析出处）、verified（人工核对状态）。
// 未经人工核对的套题 verified 为 false，页面不得显示"官方""已完成"标记。
// 数据由 scripts/docx-to-json.mjs 从原题 docx 生成，答案人工读解析 PDF 逐题核对后填入。

import generated201906s1 from './generated/cet4-2019-06-s1.json'
import generated201906s2 from './generated/cet4-2019-06-s2.json'
import generated201906s3 from './generated/cet4-2019-06-s3.json'
import generated201912s1 from './generated/cet4-2019-12-s1.json'
import generated201912s2 from './generated/cet4-2019-12-s2.json'
import generated201912s3 from './generated/cet4-2019-12-s3.json'
import generated202009s1 from './generated/cet4-2020-09-s1.json'
import generated202009s2 from './generated/cet4-2020-09-s2.json'
import generated202009s3 from './generated/cet4-2020-09-s3.json'
import generated202012s1 from './generated/cet4-2020-12-s1.json'
import generated202012s2 from './generated/cet4-2020-12-s2.json'
import generated202012s3 from './generated/cet4-2020-12-s3.json'
import generated202106s1 from './generated/cet4-2021-06-s1.json'
import generated202106s2 from './generated/cet4-2021-06-s2.json'
import generated202106s3 from './generated/cet4-2021-06-s3.json'
import generated202112s1 from './generated/cet4-2021-12-s1.json'
import generated202112s2 from './generated/cet4-2021-12-s2.json'
import generated202112s3 from './generated/cet4-2021-12-s3.json'
import generated202206s1 from './generated/cet4-2022-06-s1.json'
import generated202206s2 from './generated/cet4-2022-06-s2.json'
import generated202206s3 from './generated/cet4-2022-06-s3.json'
import generated202209s1 from './generated/cet4-2022-09-s1.json'
import generated202209s2 from './generated/cet4-2022-09-s2.json'
import generated202209s3 from './generated/cet4-2022-09-s3.json'
import generated202212s1 from './generated/cet4-2022-12-s1.json'
import generated202212s2 from './generated/cet4-2022-12-s2.json'
import generated202212s3 from './generated/cet4-2022-12-s3.json'
import generated202306s1 from './generated/cet4-2023-06-s1.json'
import generated202306s2 from './generated/cet4-2023-06-s2.json'
import generated202306s3 from './generated/cet4-2023-06-s3.json'
import generated202303s1 from './generated/cet4-2023-03-s1.json'
import generated202312s1 from './generated/cet4-2023-12-s1.json'
import generated202312s2 from './generated/cet4-2023-12-s2.json'
import generated202312s3 from './generated/cet4-2023-12-s3.json'
import generated202406s1 from './generated/cet4-2024-06-s1.json'
import generated202406s2 from './generated/cet4-2024-06-s2.json'
import generated202406s3 from './generated/cet4-2024-06-s3.json'
import generated202412s1 from './generated/cet4-2024-12-s1.json'
import generated202412s2 from './generated/cet4-2024-12-s2.json'
import generated202412s3 from './generated/cet4-2024-12-s3.json'
import generated202506s1 from './generated/cet4-2025-06-s1.json'
import generated202506s2 from './generated/cet4-2025-06-s2.json'
import generated202506s3 from './generated/cet4-2025-06-s3.json'
import generated202512s1 from './generated/cet4-2025-12-s1.json'
import generated202512s2 from './generated/cet4-2025-12-s2.json'
import generated202512s3 from './generated/cet4-2025-12-s3.json'
import generated202606s1 from './generated/cet4-2026-06-s1.json'
import generated202606s2 from './generated/cet4-2026-06-s2.json'
import generated202606s3 from './generated/cet4-2026-06-s3.json'

// 生成文件结构 {id, meta, reading, translation} → 组件统一读取 sections
function adapt(g) {
  return { id: g.id, meta: g.meta, sections: g.reading, translation: g.translation }
}

export const readingSets = [
  adapt(generated202606s1),
  adapt(generated202606s2),
  adapt(generated202606s3),
  adapt(generated202512s1),
  adapt(generated202512s2),
  adapt(generated202512s3),
  adapt(generated202506s1),
  adapt(generated202506s2),
  adapt(generated202506s3),
  adapt(generated202412s1),
  adapt(generated202412s2),
  adapt(generated202412s3),
  adapt(generated202406s1),
  adapt(generated202406s2),
  adapt(generated202406s3),
  adapt(generated202312s1),
  adapt(generated202312s2),
  adapt(generated202312s3),
  adapt(generated202306s1),
  adapt(generated202306s2),
  adapt(generated202306s3),
  adapt(generated202303s1),
  adapt(generated202212s1),
  adapt(generated202212s2),
  adapt(generated202212s3),
  adapt(generated202209s1),
  adapt(generated202209s2),
  adapt(generated202209s3),
  adapt(generated202206s1),
  adapt(generated202206s2),
  adapt(generated202206s3),
  adapt(generated202112s1),
  adapt(generated202112s2),
  adapt(generated202112s3),
  adapt(generated202106s1),
  adapt(generated202106s2),
  adapt(generated202106s3),
  adapt(generated202012s1),
  adapt(generated202012s2),
  adapt(generated202012s3),
  adapt(generated202009s1),
  adapt(generated202009s2),
  adapt(generated202009s3),
  adapt(generated201912s1),
  adapt(generated201912s2),
  adapt(generated201912s3),
  adapt(generated201906s1),
  adapt(generated201906s2),
  adapt(generated201906s3),
].sort(
  (a, b) =>
    b.meta.year - a.meta.year || b.meta.month - a.meta.month || a.meta.set - b.meta.set,
)

export function getReadingSet(setId) {
  return readingSets.find((s) => s.id === setId) || null
}
