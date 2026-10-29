import fs from 'node:fs';
const p = 'scripts/_trainer1_pages/MAP.md';
let s = fs.readFileSync(p, 'utf8');
const oldBlock = `- Page 79-86: Test 3 R&W（Part 1-7）
  - 80 = R&W Part 2（书内 81，three teenage sports superstars）
  - 85 = R&W Part 6 Q31（书内 86，party email to Malcolm）`;
const newBlock = `- Page 78-86: Test 3 R&W ✅ 已录入（Part 1-7）
  - 77 = R&W Part 1 Q1-3（书内 78）；78 = Part 1 Q4-6（书内 79）
  - 79 = R&W Part 2 题目表（书内 80）；80 = Part 2 三篇人物介绍（书内 81，three teenage sports superstars）
  - 81 = Part 3 文章（书内 82，Isabella Rose Taylor）；82 = Part 3 Q14-18（书内 83）
  - 83 = Part 4（书内 84，Ferry to School，Q19-24）
  - 84 = Part 5（书内 85，Jake 邮件，example 0=THE）
  - 85 = Part 6 Q31（书内 86，party email to Malcolm）；86 = Part 7 Q32（书内 87，story 三图）
- PDF 200（书内 201）= Test 3 Speaking Part 2 考官脚本；visuals 在 PDF 207（书内 208）
  - 口语图：五个电视画面（赛车/新闻/足球/歌唱/历史）→ public/images/ket/trainer1/test3-speaking.jpg
  - 故事图：public/images/ket/trainer1/test3-story.jpg`;
if (!s.includes(oldBlock)) throw new Error('old block not found');
s = s.replace(oldBlock, newBlock);
fs.writeFileSync(p, s, 'utf8');
console.log('MAP updated');
