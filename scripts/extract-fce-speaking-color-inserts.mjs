// 从 FCE 标准版/校园版 PDF 的书末彩色插页提取口语 Part 2 图片
import { readFile, mkdir, writeFile } from 'fs/promises'
import { join } from 'path'
import mupdf from 'mupdf'

const SOURCES = [
  { label: 'standard-1', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\标准版1\\cen_first_1_with_answers .pdf' },
  { label: 'standard-2', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\标准版2\\First 2 (updated).pdf' },
  { label: 'standard-3', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\标准版3\\First 3.pdf' },
  { label: 'standard-4', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\标准版4\\B2 FIRST 4 WITH ANSWERS.pdf' },
  { label: 'schools-1', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\校园版1\\校园1\\Cambridge First Certificate English Tests for schools 1.PDF' },
  { label: 'schools-2', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\校园版2\\Cambridge First for Schools 2 FCE 校园版真题2.pdf' },
  { label: 'schools-3', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\校园版3\\FIRST3  青少版.pdf' },
  { label: 'schools-4', path: 'D:\\workspace_sunny\\题库\\FCE\\1.真题\\校园版4\\B2 FIRST 4 FOR SCHOOLS.pdf' },
]

const OUTPUT_DIR = 'public/images/fce/speaking'
const PREVIEW_DIR = 'scripts/_color_preview'

async function main() {
  const mode = process.argv[2] || 'preview'  // preview | extract
  const bookIdx = process.argv[3] ? parseInt(process.argv[3]) - 1 : -1  // 0-indexed

  if (mode === 'preview') {
    // 渲染每本书的最后 15 页为缩略图
    const books = bookIdx >= 0 ? [SOURCES[bookIdx]] : SOURCES
    for (const book of books) {
      console.log(`\n=== ${book.label} ===`)
      try {
        const buf = await readFile(book.path)
        const doc = mupdf.Document.openDocument(buf, 'application/pdf')
        const total = doc.countPages()
        console.log(`  总页数: ${total}`)
        const start = Math.max(0, total - 15)
        const dir = join(PREVIEW_DIR, book.label)
        await mkdir(dir, { recursive: true })
        const mat = mupdf.Matrix.scale(1.5, 1.5)
        for (let i = start; i < total; i++) {
          const page = doc.loadPage(i)
          const pix = page.toPixmap(mat, mupdf.ColorSpace.DeviceRGB, false, true)
          const png = pix.asPNG()
          const fname = `page-${String(i + 1).padStart(3, '0')}.png`
          await writeFile(join(dir, fname), png)
          console.log(`  ${fname} (${(png.length / 1024).toFixed(0)}KB)`)
        }
      } catch (e) {
        console.log(`  错误: ${e.message}`)
      }
    }
    console.log('\n✅ 预览完成，请查看 scripts/_color_preview/ 目录')
  } else if (mode === 'extract') {
    // 从指定页码提取图片
    // 用法: node script.mjs extract <book-label> <pdf-page-1> <pdf-page-2> ...
    const label = process.argv[3]
    const pages = process.argv.slice(4).map(Number)
    const book = SOURCES.find(s => s.label === label)
    if (!book) { console.error('未知书籍:', label); process.exit(1) }

    console.log(`从 ${book.label} 提取页面: ${pages.join(', ')}`)
    const buf = await readFile(book.path)
    const doc = mupdf.Document.openDocument(buf, 'application/pdf')
    const mat = mupdf.Matrix.scale(2.5, 2.5)
    const dir = join(OUTPUT_DIR, label)
    await mkdir(dir, { recursive: true })

    for (const pageNum of pages) {
      const page = doc.loadPage(pageNum - 1)  // 1-indexed → 0-indexed
      const pix = page.toPixmap(mat, mupdf.ColorSpace.DeviceRGB, false, true)
      const png = pix.asPNG()
      const fname = `page-${String(pageNum).padStart(3, '0')}.png`
      await writeFile(join(dir, fname), png)
      console.log(`  ${fname} (${(png.length / 1024).toFixed(0)}KB)`)
    }
    console.log('\n✅ 提取完成')
  }
}

main().catch(e => { console.error(e); process.exit(1) })
