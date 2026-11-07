// CET-4 听力题库索引。专项练习读取本文件。
// 每套题必须记录 meta：source、answerSource、verified。

import s2026s1 from './generated/cet4-2026-06-s1-listening.js'
import s2026s2 from './generated/cet4-2026-06-s2-listening.js'
import s2026s3 from './generated/cet4-2026-06-s3-listening.js'
import s2512a from './generated/cet4-2025-12-s1-listening.js'
import s2512b from './generated/cet4-2025-12-s2-listening.js'
import s2512c from './generated/cet4-2025-12-s3-listening.js'
import s2506a from './generated/cet4-2025-06-s1-listening.js'
import s2506b from './generated/cet4-2025-06-s2-listening.js'
import s2506c from './generated/cet4-2025-06-s3-listening.js'
import s2412a from './generated/cet4-2024-12-s1-listening.js'
import s2412b from './generated/cet4-2024-12-s2-listening.js'
import s2412c from './generated/cet4-2024-12-s3-listening.js'
import s2406a from './generated/cet4-2024-06-s1-listening.js'
import s2406b from './generated/cet4-2024-06-s2-listening.js'
import s2406c from './generated/cet4-2024-06-s3-listening.js'
import s2312a from './generated/cet4-2023-12-s1-listening.js'
import s2312b from './generated/cet4-2023-12-s2-listening.js'
import s2312c from './generated/cet4-2023-12-s3-listening.js'
import s2306a from './generated/cet4-2023-06-s1-listening.js'
import s2306b from './generated/cet4-2023-06-s2-listening.js'
import s2306c from './generated/cet4-2023-06-s3-listening.js'
import s2303a from './generated/cet4-2023-03-s1-listening.js'
import s2303b from './generated/cet4-2023-03-s2-listening.js'
import s2303c from './generated/cet4-2023-03-s3-listening.js'
import s2212a from './generated/cet4-2022-12-s1-listening.js'
import s2212b from './generated/cet4-2022-12-s2-listening.js'
import s2212c from './generated/cet4-2022-12-s3-listening.js'
import s2209a from './generated/cet4-2022-09-s1-listening.js'
import s2209b from './generated/cet4-2022-09-s2-listening.js'
import s2209c from './generated/cet4-2022-09-s3-listening.js'
import s2206a from './generated/cet4-2022-06-s1-listening.js'
import s2206b from './generated/cet4-2022-06-s2-listening.js'
import s2206c from './generated/cet4-2022-06-s3-listening.js'
import s2112a from './generated/cet4-2021-12-s1-listening.js'
import s2112b from './generated/cet4-2021-12-s2-listening.js'
import s2112c from './generated/cet4-2021-12-s3-listening.js'
import s2106a from './generated/cet4-2021-06-s1-listening.js'
import s2106b from './generated/cet4-2021-06-s2-listening.js'
import s2106c from './generated/cet4-2021-06-s3-listening.js'
import s2012a from './generated/cet4-2020-12-s1-listening.js'
import s2012b from './generated/cet4-2020-12-s2-listening.js'
import s2012c from './generated/cet4-2020-12-s3-listening.js'
import s2009a from './generated/cet4-2020-09-s1-listening.js'
import s2009b from './generated/cet4-2020-09-s2-listening.js'
import s2009c from './generated/cet4-2020-09-s3-listening.js'
import s1912a from './generated/cet4-2019-12-s1-listening.js'
import s1912b from './generated/cet4-2019-12-s2-listening.js'
import s1912c from './generated/cet4-2019-12-s3-listening.js'
import s1906a from './generated/cet4-2019-06-s1-listening.js'
import s1906b from './generated/cet4-2019-06-s2-listening.js'
import s1906c from './generated/cet4-2019-06-s3-listening.js'

export const listeningSets = [
  s2026s1, s2026s2, s2026s3,
  s2512a, s2512b, s2512c,
  s2506a, s2506b, s2506c,
  s2412a, s2412b, s2412c,
  s2406a, s2406b, s2406c,
  s2312a, s2312b, s2312c,
  s2306a, s2306b, s2306c,
  s2303a, s2303b, s2303c,
  s2212a, s2212b, s2212c,
  s2209a, s2209b, s2209c,
  s2206a, s2206b, s2206c,
  s2112a, s2112b, s2112c,
  s2106a, s2106b, s2106c,
  s2012a, s2012b, s2012c,
  s2009a, s2009b, s2009c,
  s1912a, s1912b, s1912c,
  s1906a, s1906b, s1906c,
].sort((a, b) => b.meta.year - a.meta.year || b.meta.month - a.meta.month || b.meta.set - a.meta.set)

export function getListeningSet(setId) {
  return listeningSets.find((s) => s.id === setId) || null
}
