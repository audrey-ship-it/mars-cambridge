// 从 FCE 8套全真模拟试题.pdf 提取口语 Part 2 整页图片
import { readFile, mkdir, writeFile } from 'fs/promises'
import { join } from 'path'
import mupdf from 'mupdf'

const PDF_PATH = 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\FCE 8套全真模拟试题\\FCE 8套全真模拟试题.pdf'
const OUTPUT_DIR = 'public/images/fce/speaking'

const SPEAKING_PAGES = {
  1: { task1: 18, task2: 19 },
  2: { task1: 37, task2: 38 },
  3: { task1: 56, task2: 57 },
  4: { task1: 75, task2: 76 },
  5: { task1: 94, task2: 95 },
  6: { task1: 113, task2: 114 },
  7: { task1: 132, task2: 133 },
  8: { task1: 151, task2: 152 },
}

const OFFSET = 5  // 书页码 + 5 = PDF 0-indexed 页码

async function main() {
  const buf = await readFile(PDF_PATH)
  const doc = mupdf.Document.openDocument(buf, 'application/pdf')
  console.log(`PDF 总页数: ${doc.countPages()}`)

  const scale = 2.5  // 高分辨率
  const mat = mupdf.Matrix.scale(scale, scale)

  for (const [mockNum, pages] of Object.entries(SPEAKING_PAGES)) {
    console.log(`\n=== Mock ${mockNum} ===`)
    for (const [taskKey, bookPage] of Object.entries(pages)) {
      const pdfPageNum = bookPage + OFFSET
      const taskNum = taskKey === 'task1' ? 1 : 2
      const dir = join(OUTPUT_DIR, `mock-${mockNum}`, `task-${taskNum}`)
      await mkdir(dir, { recursive: true })

      const page = doc.loadPage(pdfPageNum)
      const pix = page.toPixmap(mat, mupdf.ColorSpace.DeviceRGB, false, true)
      const png = pix.asPNG()
      const outPath = join(dir, 'page.png')
      await writeFile(outPath, png)
      console.log(`  Task ${taskNum}: 书页 ${bookPage} → ${outPath} (${(png.length / 1024).toFixed(0)}KB)`)
    }
  }
  console.log('\n✅ 完成！')
}

main().catch(e => { console.error(e); process.exit(1) })
