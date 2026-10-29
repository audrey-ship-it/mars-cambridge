// 专门修复 standard-3 的目录结构（其他书已 organize 完，原脚本会因找不到源文件而报错）
import { mkdir, copyFile, rm } from 'fs/promises'
import { join } from 'path'

const BASE = 'public/images/fce/speaking/standard-3'
// 正确页码：C1, C2, C4, C5, C7, C8, C10, C11（颜色插页从 page 179 开始，非 182）
const PAGES = [179, 180, 182, 183, 185, 186, 188, 189]

async function main() {
  // 清理之前的残留
  try {
    await rm(join(BASE, 'page-NaN.png'))
    console.log('已删除 page-NaN.png（之前 organize 失败的残留）')
  } catch {}

  for (let i = 0; i < PAGES.length; i++) {
    const testNum = Math.floor(i / 2) + 1
    const taskNum = (i % 2) + 1
    const src = join(BASE, `page-${String(PAGES[i]).padStart(3, '0')}.png`)
    const dir = join(BASE, `test-${testNum}`, `task-${taskNum}`)
    await mkdir(dir, { recursive: true })
    await copyFile(src, join(dir, 'page.png'))
    console.log(`test-${testNum}/task-${taskNum} ← page-${PAGES[i]}.png`)
    await rm(src)
  }
  console.log('\n✅ standard-3 修复完成')
}

main().catch(e => { console.error(e); process.exit(1) })
