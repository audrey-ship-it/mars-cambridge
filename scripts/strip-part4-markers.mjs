// 一次性清洗：移除 standard/samples 阅读 Part4 段落中遗留的 "(16) ......" 内嵌标记（渲染器会自动插入芯片）
import fs from 'fs'
for (const f of ['src/data/petReadingStandard.js', 'src/data/petReadingSamples.js']) {
  let s = fs.readFileSync(f, 'utf8')
  const before = (s.match(/\((1[6-9]|20)\) \.{5,} ?/g) || []).length
  s = s.replace(/\((1[6-9]|20)\) \.{5,} ?/g, '')
  fs.writeFileSync(f, s, 'utf8')
  console.log(f, 'removed', before, 'markers')
}
