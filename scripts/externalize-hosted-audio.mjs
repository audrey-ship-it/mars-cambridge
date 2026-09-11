import { readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const assetsDirectory = new URL('../dist/assets/', import.meta.url)
const publicAudioDirectory = new URL('../dist/audio/', import.meta.url)
const publicAudioBase = 'https://raw.githubusercontent.com/audrey-ship-it/mars-cambridge/feat/my-learning-dashboard/public/audio/'

for (const fileName of await readdir(assetsDirectory)) {
  if (!fileName.endsWith('.js')) continue
  const filePath = join(assetsDirectory.pathname, fileName)
  const source = await readFile(filePath, 'utf8')
  const hosted = source.replace(/(["'`])\/audio\//g, `$1${publicAudioBase}`)
  await writeFile(filePath, hosted)
}

// The complete audio library remains public on GitHub; the hosted app references
// those canonical files so the static deployment stays below its bundle limit.
await rm(publicAudioDirectory, { recursive: true, force: true })
