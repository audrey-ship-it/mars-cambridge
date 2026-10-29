import fs from 'node:fs'
const s = fs.readFileSync('d:/workspace_sunny/mars-cambridge/scripts/_ts_out/pet-std1.json', 'utf8')
try {
  const d = JSON.parse(s)
  console.log('parse OK; keys:', Object.keys(d))
  console.log('tag:', d.tag, '| source:', (d.source || '').slice(0, 100))
  const sets = d.sets || []
  for (const st of sets) {
    const parts = Object.keys(st.parts || {})
    console.log('test', st.test, '| parts:', parts.join(','), '| lens:', parts.map(k => st.parts[k].length).join('/'))
  }
} catch (e) {
  console.log('parse FAIL:', e.message)
  console.log('head:', s.slice(0, 300))
  console.log('tail:', s.slice(-200))
}
