// 应用手工校对补丁：Section A 段落/词表 + 内容与其它套相同的整套复用
import fs from 'node:fs'

const dir = 'src/data/generated'
const read = (id) => JSON.parse(fs.readFileSync(`${dir}/${id}.json`, 'utf8'))
const write = (j) => fs.writeFileSync(`${dir}/${j.id}.json`, JSON.stringify(j, null, 2))

// 1) 手工校对的 Section A（来自真题 PDF 页面转写）
const banked = JSON.parse(fs.readFileSync('scripts/patches/cet6-banked.json', 'utf8'))
for (const [id, patch] of Object.entries(banked)) {
  const j = read(id)
  j.reading.banked.passage = patch.passage
  j.reading.banked.options = patch.options
  j.meta.source = (j.meta.source || '').replace(/（Section A 已按真题页面人工校对）$/, '')
  j.meta.source += '（Section A 已按真题页面人工校对）'
  write(j)
  console.log('patched banked:', id)
}

// 2) 官方说明「阅读与第 X 套完全相同」→ 复用该套阅读内容
const shared = {
  'cet6-2021-12-s3': 'cet6-2021-12-s2',
  'cet6-2022-06-s3': 'cet6-2022-06-s2',
  'cet6-2022-09-s2': 'cet6-2022-09-s1',
  'cet6-2022-09-s3': 'cet6-2022-09-s1',
  'cet6-2023-03-s2': 'cet6-2023-03-s1',
  'cet6-2023-03-s3': 'cet6-2023-03-s1',
}
for (const [id, srcId] of Object.entries(shared)) {
  const base = read(srcId)
  let j
  try {
    j = read(id)
  } catch {
    // 该套真题 PDF 只含写作/翻译，没有生成过 JSON → 以被复用套为模板创建
    j = JSON.parse(JSON.stringify(base))
    const m = id.match(/^cet6-(\d{4})-(\d{2})-s(\d)$/)
    j.id = id
    j.meta = {
      ...base.meta,
      year: Number(m[1]),
      month: Number(m[2]),
      set: Number(m[3]),
    }
    console.log('created share-set:', id)
  }
  j.reading = JSON.parse(JSON.stringify(base.reading))
  j.meta.verified = base.meta.verified
  j.meta.warnings = [...(base.meta.warnings || [])]
  j.meta.source = `本套阅读与 ${srcId} 相同（官方说明不再重复列出），此处复用该套内容`
  write(j)
  console.log('shared reading:', id, '<-', srcId)
}
