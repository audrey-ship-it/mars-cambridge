// 整理提取的页面到正确的目录结构
import { mkdir, copyFile, rm } from 'fs/promises'
import { join } from 'path'

const BOOKS = {
  'standard-2': [178, 179, 181, 182, 184, 185, 187, 188],
  'standard-3': [179, 180, 182, 183, 185, 186, 188, 189],
  'standard-4': [165, 166, 168, 169, 171, 172, 174, 175],
  'schools-1': [172, 173, 175, 176, 178, 179, 181, 182],
  'schools-2': [178, 179, 181, 182, 184, 185, 187, 188],
  'schools-3': [179, 180, 182, 183, 185, 186, 188, 189],
  'schools-4': [166, 167, 169, 170, 172, 173, 175, 176],
}

const BASE = 'public/images/fce/speaking'

async function main() {
  for (const [book, pages] of Object.entries(BOOKS)) {
    console.log(`\n=== ${book} ===`)
    const bookDir = join(BASE, book)

    for (let i = 0; i < pages.length; i++) {
      const testNum = Math.floor(i / 2) + 1
      const taskNum = (i % 2) + 1
      const src = join(bookDir, `page-${pages[i]}.png`)
      const dir = join(bookDir, `test-${testNum}`, `task-${taskNum}`)
      const dst = join(dir, 'page.png')

      await mkdir(dir, { recursive: true })
      await copyFile(src, dst)
      console.log(`  test-${testNum}/task-${taskNum} ← page-${pages[i]}.png`)
    }

    // 删除原始 page-NNN.png 文件
    for (const p of pages) {
      await rm(join(bookDir, `page-${p}.png`))
    }
    console.log(`  已清理原始文件`)
  }
  console.log('\n✅ 完成！')
}

main().catch(e => { console.error(e); process.exit(1) })
