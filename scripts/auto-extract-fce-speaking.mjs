// 自动从 FCE 标准版/校园版 PDF 的书末彩色插页提取口语 Part 2 图片
// 逻辑：渲染最后15页 → 按文件大小识别彩色插页 → 配对 → 提取
import { readFile, mkdir, writeFile } from 'fs/promises'
import { join } from 'path'
import mupdf from 'mupdf'

const SOURCES = [
  { label: 'standard-2', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\标准版2\\First 2 (updated).pdf' },
  { label: 'standard-3', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\标准版3\\First 3.pdf' },
  { label: 'standard-4', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\标准版4\\B2 FIRST 4 WITH ANSWERS.pdf' },
  { label: 'schools-1', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\校园版1\\校园1\\Cambridge First Certificate English Tests for schools 1.PDF' },
  { label: 'schools-2', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\校园版2\\Cambridge First for Schools 2 FCE 校园版真题2.pdf' },
  { label: 'schools-3', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\校园版3\\FIRST3  青少版.pdf' },
  { label: 'schools-4', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\校园版4\\B2 FIRST 4 FOR SCHOOLS.pdf' },
]

const OUTPUT_DIR = 'public/images/fce/speaking'
const SIZE_THRESHOLD = 400 * 1024  // >400KB = 彩色插页

async function main() {
  for (const book of SOURCES) {
    console.log(`\n=== ${book.label} ===`)
    try {
      const buf = await readFile(book.path)
      const doc = mupdf.Document.openDocument(buf, 'application/pdf')
      const total = doc.countPages()
      const start = Math.max(0, total - 15)
      const mat = mupdf.Matrix.scale(2.5, 2.5)

      // 渲染最后15页，记录文件大小
      const pages = []
      for (let i = start; i < total; i++) {
        const page = doc.loadPage(i)
        const pix = page.toPixmap(mat, mupdf.ColorSpace.DeviceRGB, false, true)
        const png = pix.asPNG()
        pages.push({ pageNum: i + 1, size: png.length, png })
        console.log(`  page ${i + 1}: ${(png.length / 1024).toFixed(0)}KB ${png.length > SIZE_THRESHOLD ? '★' : ''}`)
      }

      // 筛选彩色插页（文件大）
      const colorPages = pages.filter(p => p.size > SIZE_THRESHOLD)
      console.log(`  彩色插页数: ${colorPages.length}`)

      // 每本书有4个test，每个test有2个task，共8个图片页
      // 但也有Part 3的图片页混在其中，需要按对分组
      // 配对：连续的大文件页为一对（C1/C2, C4/C5, C7/C8, C10/C11）
      const pairs = []
      let i = 0
      while (i < colorPages.length) {
        if (i + 1 < colorPages.length) {
          pairs.push([colorPages[i], colorPages[i + 1]])
          i += 2
        } else {
          i++
        }
      }
      console.log(`  配对数: ${pairs.length}`)

      // 前4对是Part 2图片（Test 1-4）
      for (let t = 0; t < Math.min(4, pairs.length); t++) {
        const testNum = t + 1
        for (let task = 0; task < 2; task++) {
          const p = pairs[t][task]
          const dir = join(OUTPUT_DIR, book.label, `test-${testNum}`, `task-${task + 1}`)
          await mkdir(dir, { recursive: true })
          await writeFile(join(dir, 'page.png'), p.png)
          console.log(`  test-${testNum}/task-${task + 1} ← page ${p.pageNum} (${(p.size / 1024).toFixed(0)}KB)`)
        }
      }
    } catch (e) {
      console.log(`  错误: ${e.message}`)
    }
  }
  console.log('\n✅ 完成！')
}

main().catch(e => { console.error(e); process.exit(1) })
