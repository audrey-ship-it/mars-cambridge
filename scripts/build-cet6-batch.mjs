// 构建 CET-6 批量转换配置
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'D:/workspace_sunny/题库/cet/CET-6/六级真题';

const batches = [
  { year: 2025, month: 12, dir: '2025年12月CET6题+答案+音频' },
  { year: 2025, month: 6,  dir: '2025年06月CET6题+解+音频' },
  { year: 2024, month: 12, dir: '2024年12月CET6题+解+音频' },
  { year: 2024, month: 6,  dir: '2024年06月CET6题+解+音频' },
  { year: 2023, month: 12, dir: '2023年12月CET6题+解+音频' },
  { year: 2023, month: 6,  dir: '2023年06月CET6题+解+音频' },
  { year: 2023, month: 3,  dir: '2023年03月CET6题+解+音频' },
  { year: 2022, month: 12, dir: '2022年12月CET6题+解+音频' },
  { year: 2022, month: 9,  dir: '2022年09月CET6题+解+音频' },
  { year: 2022, month: 6,  dir: '2022年06月CET6题+解+音频' },
  { year: 2021, month: 12, dir: '2021年12月CET6题+解+音频' },
  { year: 2021, month: 6,  dir: '2021年06月CET6题+解+音频' },
  { year: 2020, month: 12, dir: '2020年12月CET6题+解+音频' },
  { year: 2020, month: 9,  dir: '2020年09月CET6题+解+音频' },
  { year: 2019, month: 12, dir: '2019年12月CET6题+解+音频' },
  { year: 2019, month: 6,  dir: '2019年06月CET6题+解+音频' },
];

function findZtPdfs(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const seen = new Set();
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, ent.name);
      if (ent.isDirectory()) walk(full);
      else if (ent.name.endsWith('.pdf') && !ent.name.includes('扫描版')) {
        // 排除解析/详解/答案/听力等非真题
        if (/解析|详解|答案|听力|译文/.test(ent.name)) continue;
        if (ent.name.includes('真题') || ent.name.includes('原题')) {
          // 避免同一套在不同子目录重复（按 set 编号去重）
          const setNum = parseSet(ent.name);
          const key = path.basename(d) + '-s' + setNum;
          if (!seen.has(key)) {
            seen.add(key);
            results.push(full);
          }
        }
      }
    }
  };
  walk(dir);
  return results;
}

function parseSet(name) {
  const m = name.match(/第\s*(\d+)\s*套/);
  if (m) return parseInt(m[1]);
  const m2 = name.match(/第([一二三])套/);
  if (m2) return { '一': 1, '二': 2, '三': 3 }[m2[1]];
  const m3 = name.match(/\((\d+)\)\.pdf$/);
  if (m3) return parseInt(m3[1]);
  return null;
}

const config = [];
for (const b of batches) {
  const dir = path.join(ROOT, b.dir);
  if (!fs.existsSync(dir)) {
    console.log('⚠ 目录不存在:', b.dir);
    continue;
  }
  const zts = findZtPdfs(dir);
  if (zts.length === 0) {
    console.log('⚠ 无真题 PDF:', b.dir);
    continue;
  }
  console.log(b.dir + ':');
  const monthStr = String(b.month).padStart(2, '0');
  for (const z of zts) {
    const setNum = parseSet(path.basename(z));
    console.log(' ', path.basename(z), '→ set', setNum);
    if (setNum) {
      config.push({
        year: b.year,
        month: b.month,
        set: setNum,
        zt: z,
        out: `src/data/generated/cet6-${b.year}-${monthStr}-s${setNum}.json`,
      });
    }
  }
}

console.log(`\n共 ${config.length} 套待处理`);
fs.writeFileSync('scripts/batches/cet6-batch.json', JSON.stringify(config, null, 2), 'utf8');
console.log('已写入 scripts/batches/cet6-batch.json');
