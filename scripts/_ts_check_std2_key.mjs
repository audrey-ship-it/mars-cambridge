// 对照官方 key 终验册2 听力数据：P1/P2/P4 字母答案 + P3 单词 + P2/P4 题干选项 diff
import fs from 'node:fs'
import { PET_LISTENING_STANDARD } from '../src/data/petListeningStandard.js'

const paper = JSON.parse(fs.readFileSync('d:/workspace_sunny/mars-cambridge/scripts/_ts_out/pet-std2-paper.json', 'utf8'))
const targets = { t1: 'pet-standard-2-listening-t1', t2: 'pet-standard-2-listening-t2', t3: 'pet-standard-2-listening-t3', t4: 'pet-standard-2-listening-t4' }
const L = 'ABCDEFG'

for (const [tk, setId] of Object.entries(targets)) {
  const set = PET_LISTENING_STANDARD.find(x => x.meta.id === setId)
  const t = paper.tests[tk.slice(1)]
  console.log('='.repeat(70))
  console.log(`${setId} | 官方试卷页: ${t.paperPages} | key 页: ${t.keyPages}`)
  // P1/P2/P4 字母
  for (const pk of ['p1', 'p2', 'p4']) {
    const part = set.parts[pk[1]]
    const key = t.key[pk]
    part.items.forEach((it, i) => {
      const k = key[i]
      const ki = L.indexOf(k)
      const ok = it.answer === ki ? 'OK ' : `MISMATCH(数据=${L[it.answer]})`
      console.log(`${pk.toUpperCase()} Q${i + 1}: key=${k} ${pk === 'p1' ? '(图片题)' : ''}${ok}`)
      if (pk !== 'p1') {
        const off = t[pk][i]
        if (off) {
          const nq = (v) => String(v).replace(/\n/g, ' ').replace(/ {2}/g, ' ').trim()
          if (nq(it.q || '') !== nq(off.q)) console.log(`   题干diff 数据: ${it.q}\n   题干diff 官方: ${off.q}`)
          const o1 = (it.opts || []).map(x => String(x).trim())
          const o2 = off.opts.map(x => String(x).trim())
          if (JSON.stringify(o1) !== JSON.stringify(o2)) {
            console.log(`   选项diff 数据: ${JSON.stringify(o1)}`)
            console.log(`   选项diff 官方: ${JSON.stringify(o2)}`)
          }
        }
      }
    })
  }
  // P3 单词
  const p3 = set.parts['3']
  console.log('P3 key(官方): ' + JSON.stringify(t.key.p3))
  p3.items.forEach((it, i) => console.log(`P3 Q${i + 1}: 数据=${JSON.stringify(it.answer)}`))
}
console.log('='.repeat(70))
console.log('notes:', JSON.stringify(paper.notes, null, 1))
