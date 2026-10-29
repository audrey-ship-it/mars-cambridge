import fs from 'node:fs'
import { pdf } from 'pdf-to-img'
const [pdfPath, from, to, tag] = process.argv.slice(2)
fs.mkdirSync(`scripts/_ts_pages/${tag}`, { recursive: true })
const doc = await pdf(pdfPath, { scale: 2 })
let i = 1
for await (const png of doc) { if (i >= Number(from) && i <= Number(to)) fs.writeFileSync(`scripts/_ts_pages/${tag}/p${String(i).padStart(3, '0')}.png`, png); if (i > Number(to)) break; i++ }
console.log('done', i - 1)
