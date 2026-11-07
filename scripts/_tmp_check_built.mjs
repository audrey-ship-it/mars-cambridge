import fs from 'node:fs'
const ids = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync('src/data/generated').filter((f) => /^cet6-.*-listening\.js/.test(f)).map((f) => f.replace('-listening.js', ''))
for (const id of ids) {
  const m = (await import(`../src/data/generated/${id}-listening.js`)).default
  const its = Object.values(m.sections).flat()
  const bad = []
  for (const it of its) {
    if (!it.audio || !fs.existsSync('public' + it.audio)) bad.push('audio:' + it.title)
    if (!it.transcript || it.transcript.length < 300) bad.push('T:' + it.title + '=' + (it.transcript || '').length)
    it.questions.forEach((q) => {
      if (q.options.length !== 4 || q.options.some((o) => !o.text)) bad.push('opt:' + q.n)
      if (!/^[A-D]$/.test(q.answer)) bad.push('ans:' + q.n)
    })
  }
  const qs = its.reduce((s, i) => s + i.questions.length, 0)
  console.log(id, 'items', its.length, 'qs', qs, 'quotes', Object.keys(m.answerQuotes).length, bad.slice(0, 12).join(',') || 'OK')
}
