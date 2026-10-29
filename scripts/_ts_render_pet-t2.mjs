import fs from 'node:fs'
import { pdf } from 'pdf-to-img'

const FROM = Number(process.argv[2])
const TO = Number(process.argv[3])
fs.mkdirSync('scripts/_ts_pages/pet-t2', { recursive: true })

const doc = await pdf('d:/workspace_sunny/题库/pet/8. PET官方刷题材料（官方真题+模拟题等）/PET Trainer2/PET Trainer2 电子版.pdf', { scale: 2 })
let i = 1
for await (const png of doc) {
  if (i >= FROM && i <= TO) {
    fs.writeFileSync(`scripts/_ts_pages/pet-t2/p${String(i).padStart(3, '0')}.png`, png)
    console.log('written', i)
  }
  i++
}
console.log('done', i - 1)
