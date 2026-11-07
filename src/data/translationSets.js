/* CET-4 翻译专项目录（段落汉译英）。 */
import { translation201906S1 } from './generated/cet4-2019-06-s1-translation.js';
import { translation201906S2 } from './generated/cet4-2019-06-s2-translation.js';
import { translation201906S3 } from './generated/cet4-2019-06-s3-translation.js';
import { translation201912S1 } from './generated/cet4-2019-12-s1-translation.js';
import { translation201912S2 } from './generated/cet4-2019-12-s2-translation.js';
import { translation201912S3 } from './generated/cet4-2019-12-s3-translation.js';
import { translation202009S1 } from './generated/cet4-2020-09-s1-translation.js';
import { translation202009S2 } from './generated/cet4-2020-09-s2-translation.js';
import { translation202009S3 } from './generated/cet4-2020-09-s3-translation.js';
import { translation202012S1 } from './generated/cet4-2020-12-s1-translation.js';
import { translation202012S2 } from './generated/cet4-2020-12-s2-translation.js';
import { translation202012S3 } from './generated/cet4-2020-12-s3-translation.js';
import { translation202106S1 } from './generated/cet4-2021-06-s1-translation.js';
import { translation202106S2 } from './generated/cet4-2021-06-s2-translation.js';
import { translation202106S3 } from './generated/cet4-2021-06-s3-translation.js';
import { translation202112S1 } from './generated/cet4-2021-12-s1-translation.js';
import { translation202112S2 } from './generated/cet4-2021-12-s2-translation.js';
import { translation202112S3 } from './generated/cet4-2021-12-s3-translation.js';
import { translation202206S1 } from './generated/cet4-2022-06-s1-translation.js';
import { translation202206S2 } from './generated/cet4-2022-06-s2-translation.js';
import { translation202206S3 } from './generated/cet4-2022-06-s3-translation.js';
import { translation202209S1 } from './generated/cet4-2022-09-s1-translation.js';
import { translation202209S2 } from './generated/cet4-2022-09-s2-translation.js';
import { translation202209S3 } from './generated/cet4-2022-09-s3-translation.js';
import { translation202212S1 } from './generated/cet4-2022-12-s1-translation.js';
import { translation202212S2 } from './generated/cet4-2022-12-s2-translation.js';
import { translation202212S3 } from './generated/cet4-2022-12-s3-translation.js';
import { translation202306S1 } from './generated/cet4-2023-06-s1-translation.js';
import { translation202306S2 } from './generated/cet4-2023-06-s2-translation.js';
import { translation202306S3 } from './generated/cet4-2023-06-s3-translation.js';
import { translation202303S1 } from './generated/cet4-2023-03-s1-translation.js';
import { translation202312S1 } from './generated/cet4-2023-12-s1-translation.js';
import { translation202312S2 } from './generated/cet4-2023-12-s2-translation.js';
import { translation202312S3 } from './generated/cet4-2023-12-s3-translation.js';
import { translation202406S1 } from './generated/cet4-2024-06-s1-translation.js';
import { translation202406S2 } from './generated/cet4-2024-06-s2-translation.js';
import { translation202406S3 } from './generated/cet4-2024-06-s3-translation.js';
import { translation202412S1 } from './generated/cet4-2024-12-s1-translation.js';
import { translation202412S2 } from './generated/cet4-2024-12-s2-translation.js';
import { translation202412S3 } from './generated/cet4-2024-12-s3-translation.js';
import { translation202506S1 } from './generated/cet4-2025-06-s1-translation.js';
import { translation202506S2 } from './generated/cet4-2025-06-s2-translation.js';
import { translation202506S3 } from './generated/cet4-2025-06-s3-translation.js';
import { translation202512S1 } from './generated/cet4-2025-12-s1-translation.js';
import { translation202512S2 } from './generated/cet4-2025-12-s2-translation.js';
import { translation202512S3 } from './generated/cet4-2025-12-s3-translation.js';
import { translation202606S1 } from './generated/cet4-2026-06-s1-translation.js';
import { translation202606S2 } from './generated/cet4-2026-06-s2-translation.js';
import { translation202606S3 } from './generated/cet4-2026-06-s3-translation.js';

export const translationSets = [
  translation202606S1,
  translation202606S2,
  translation202606S3,
  translation202512S1,
  translation202512S2,
  translation202512S3,
  translation202506S1,
  translation202506S2,
  translation202506S3,
  translation202412S1,
  translation202412S2,
  translation202412S3,
  translation202406S1,
  translation202406S2,
  translation202406S3,
  translation202312S1,
  translation202312S2,
  translation202312S3,
  translation202306S1,
  translation202306S2,
  translation202306S3,
  translation202303S1,
  translation202212S1,
  translation202212S2,
  translation202212S3,
  translation202209S1,
  translation202209S2,
  translation202209S3,
  translation202206S1,
  translation202206S2,
  translation202206S3,
  translation202112S1,
  translation202112S2,
  translation202112S3,
  translation202106S1,
  translation202106S2,
  translation202106S3,
  translation202012S1,
  translation202012S2,
  translation202012S3,
  translation202009S1,
  translation202009S2,
  translation202009S3,
  translation201912S1,
  translation201912S2,
  translation201912S3,
  translation201906S1,
  translation201906S2,
  translation201906S3,
].sort(
  (a, b) =>
    b.meta.year - a.meta.year || b.meta.month - a.meta.month || a.meta.set - b.meta.set,
);
