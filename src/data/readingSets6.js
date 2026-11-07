// CET-6 阅读题库注册表：由 scripts/gen-readingSets6.mjs 自动生成
// 排序：年份 ↓ 月份 ↓ 套数 ↓，verified=true 的优先靠前展示
// 新增套题只需往 generated/ 丢 JSON，重跑生成脚本

import g201906s1 from './generated/cet6-2019-06-s1.json'
import g201906s2 from './generated/cet6-2019-06-s2.json'
import g201906s3 from './generated/cet6-2019-06-s3.json'
import g201912s1 from './generated/cet6-2019-12-s1.json'
import g201912s2 from './generated/cet6-2019-12-s2.json'
import g201912s3 from './generated/cet6-2019-12-s3.json'
import g202009s1 from './generated/cet6-2020-09-s1.json'
import g202012s1 from './generated/cet6-2020-12-s1.json'
import g202012s2 from './generated/cet6-2020-12-s2.json'
import g202012s3 from './generated/cet6-2020-12-s3.json'
import g202106s1 from './generated/cet6-2021-06-s1.json'
import g202106s2 from './generated/cet6-2021-06-s2.json'
import g202106s3 from './generated/cet6-2021-06-s3.json'
import g202112s1 from './generated/cet6-2021-12-s1.json'
import g202112s2 from './generated/cet6-2021-12-s2.json'
import g202112s3 from './generated/cet6-2021-12-s3.json'
import g202206s1 from './generated/cet6-2022-06-s1.json'
import g202206s2 from './generated/cet6-2022-06-s2.json'
import g202206s3 from './generated/cet6-2022-06-s3.json'
import g202209s1 from './generated/cet6-2022-09-s1.json'
import g202209s2 from './generated/cet6-2022-09-s2.json'
import g202209s3 from './generated/cet6-2022-09-s3.json'
import g202212s1 from './generated/cet6-2022-12-s1.json'
import g202212s2 from './generated/cet6-2022-12-s2.json'
import g202212s3 from './generated/cet6-2022-12-s3.json'
import g202303s1 from './generated/cet6-2023-03-s1.json'
import g202303s2 from './generated/cet6-2023-03-s2.json'
import g202303s3 from './generated/cet6-2023-03-s3.json'
import g202306s1 from './generated/cet6-2023-06-s1.json'
import g202306s2 from './generated/cet6-2023-06-s2.json'
import g202306s3 from './generated/cet6-2023-06-s3.json'
import g202312s1 from './generated/cet6-2023-12-s1.json'
import g202312s2 from './generated/cet6-2023-12-s2.json'
import g202312s3 from './generated/cet6-2023-12-s3.json'
import g202406s1 from './generated/cet6-2024-06-s1.json'
import g202406s2 from './generated/cet6-2024-06-s2.json'
import g202406s3 from './generated/cet6-2024-06-s3.json'
import g202412s1 from './generated/cet6-2024-12-s1.json'
import g202412s2 from './generated/cet6-2024-12-s2.json'
import g202412s3 from './generated/cet6-2024-12-s3.json'
import g202506s1 from './generated/cet6-2025-06-s1.json'
import g202506s2 from './generated/cet6-2025-06-s2.json'
import g202506s3 from './generated/cet6-2025-06-s3.json'
import g202512s1 from './generated/cet6-2025-12-s1.json'
import g202512s2 from './generated/cet6-2025-12-s2.json'
import g202512s3 from './generated/cet6-2025-12-s3.json'
import g202606s1 from './generated/cet6-2026-06-s1.json'
import g202606s2 from './generated/cet6-2026-06-s2.json'
import g202606s3 from './generated/cet6-2026-06-s3.json'

function adapt(g) { return { id: g.id, meta: g.meta, sections: g.reading } }

export const readingSets6 = [
  adapt(g201906s1),
  adapt(g201906s2),
  adapt(g201906s3),
  adapt(g201912s1),
  adapt(g201912s2),
  adapt(g201912s3),
  adapt(g202009s1),
  adapt(g202012s1),
  adapt(g202012s2),
  adapt(g202012s3),
  adapt(g202106s1),
  adapt(g202106s2),
  adapt(g202106s3),
  adapt(g202112s1),
  adapt(g202112s2),
  adapt(g202112s3),
  adapt(g202206s1),
  adapt(g202206s2),
  adapt(g202206s3),
  adapt(g202209s1),
  adapt(g202209s2),
  adapt(g202209s3),
  adapt(g202212s1),
  adapt(g202212s2),
  adapt(g202212s3),
  adapt(g202303s1),
  adapt(g202303s2),
  adapt(g202303s3),
  adapt(g202306s1),
  adapt(g202306s2),
  adapt(g202306s3),
  adapt(g202312s1),
  adapt(g202312s2),
  adapt(g202312s3),
  adapt(g202406s1),
  adapt(g202406s2),
  adapt(g202406s3),
  adapt(g202412s1),
  adapt(g202412s2),
  adapt(g202412s3),
  adapt(g202506s1),
  adapt(g202506s2),
  adapt(g202506s3),
  adapt(g202512s1),
  adapt(g202512s2),
  adapt(g202512s3),
  adapt(g202606s1),
  adapt(g202606s2),
  adapt(g202606s3),
].sort(
  (a, b) =>
    b.meta.year - a.meta.year ||
    b.meta.month - a.meta.month ||
    a.meta.set - b.meta.set,
)

export function getReadingSet6(setId) {
  return readingSets6.find((s) => s.id === setId) || null
}

// 辅助：仅返回 verified=true 的套题（已核对答案、可用）
export function getVerifiedSets6() {
  return readingSets6.filter((s) => s.meta?.verified)
}
