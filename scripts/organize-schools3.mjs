// 整理 schools-3 重新提取的页面
import { mkdir, copyFile, rm } from 'fs/promises'
import { join } from 'path'

const pages = [179, 180, 182, 183, 185, 186, 188, 189]
const BASE = 'public/images/fce/speaking/schools-3'

async function main() {
  for (let i = 0; i < pages.length; i++) {
    const testNum = Math.floor(i / 2) + 1
    const taskNum = (i % 2) + 1
    const src = join(BASE, `page-${pages[i]}.png`)
    const dir = join(BASE, `test-${testNum}`, `task-${taskNum}`)
    const dst = join(dir, 'page.png')
    await mkdir(dir, { recursive: true })
    await copyFile(src, dst)
    console.log(`test-${testNum}/task-${taskNum} ← page-${pages[i]}.png`)
  }
  for (const p of pages) {
    await rm(join(BASE, `page-${p}.png`))
  }
  console.log('✅ schools-3 重新整理完成')
}

main().catch(e => { console.error(e); process.exit(1) })
