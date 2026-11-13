import { KIND_LABEL, fmtDuration } from './practiceLog.js'

/* 用 Canvas 直接画分享图（不依赖第三方库） */
export function drawShareCanvas(entry, streak, planLine) {
  const W = 750
  const H = 900
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const g = c.getContext('2d')
  const navy = '#1b1c44'
  const hl = entry.level === 'cet6' ? '#2dd4bf' : '#ffcd1f'
  const font = '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif'
  const rr = (x, y, w, h, r, fill) => {
    g.beginPath()
    g.roundRect(x, y, w, h, r)
    g.fillStyle = fill
    g.fill()
  }
  g.fillStyle = '#f6f7fb'
  g.fillRect(0, 0, W, H)
  rr(40, 40, W - 80, H - 80, 36, '#ffffff')
  // 头部
  g.save()
  g.beginPath()
  g.roundRect(40, 40, W - 80, 250, [36, 36, 0, 0])
  g.clip()
  g.fillStyle = navy
  g.fillRect(40, 40, W - 80, 250)
  g.fillStyle = hl
  g.fillRect(40, 40, W - 80, 10)
  g.restore()
  g.textBaseline = 'alphabetic'
  g.fillStyle = hl
  g.font = `bold 28px ${font}`
  g.fillText(`Mars CET 四六级 · ${entry.level === 'cet6' ? 'CET-6' : 'CET-4'}`, 80, 120)
  g.fillStyle = '#ffffff'
  g.font = `bold 46px ${font}`
  const kind = KIND_LABEL[entry.kind] || '练习'
  g.fillText(`${entry.heading || `本次${kind}练习完成`}`, 80, 195)
  g.fillStyle = 'rgba(255,255,255,.75)'
  g.font = `28px ${font}`
  g.fillText(entry.title || kind, 80, 245)

  const rate = entry.correct != null && entry.answered > 0 ? Math.round((entry.correct / entry.answered) * 100) : null
  const wrong = entry.correct != null ? entry.answered - entry.correct : null
  const cells = [
    [fmtDuration(entry.seconds), '用时'],
    [String(entry.answered), entry.kind === 'writing' || entry.kind === 'translation' ? '篇数' : '做题数'],
    rate != null ? [`${rate}%`, '正确率'] : [String(entry.words ?? '—'), '词数'],
    wrong != null ? [String(wrong), '错题数'] : [`${streak} 天`, '连续打卡'],
  ]
  const cw = (W - 80 - 80 - 24) / 2
  cells.forEach(([v, l], i) => {
    const x = 80 + (i % 2) * (cw + 24)
    const y = 340 + Math.floor(i / 2) * 190
    rr(x, y, cw, 160, 24, 'rgba(27,28,68,.06)')
    g.textAlign = 'center'
    g.fillStyle = navy
    g.font = `bold 60px ${font}`
    g.fillText(v, x + cw / 2, y + 85)
    g.fillStyle = '#6b7280'
    g.font = `26px ${font}`
    g.fillText(l, x + cw / 2, y + 128)
  })
  g.textAlign = 'left'
  if (streak > 0) {
    rr(80, 730, W - 160, 70, 18, hl + '55')
    g.fillStyle = navy
    g.font = `bold 30px ${font}`
    g.textAlign = 'center'
    g.fillText(`已连续打卡 ${streak} 天，继续加油`, W / 2, 775)
    g.textAlign = 'left'
  }
  // 底栏
  g.fillStyle = '#9ca3af'
  g.font = `24px ${font}`
  const d = new Date(entry.ts)
  g.fillText(`${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日${planLine ? ' · ' + planLine : ''}`, 80, 838)
  g.fillText('小红书：（账号待补）', 80, 874)

  return c
}

export function saveShareImage(entry, streak, planLine) {
  const c = drawShareCanvas(entry, streak, planLine)
  const d = new Date(entry.ts)
  c.toBlob((blob) => {
    if (!blob) return
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `练习总结-${d.getMonth() + 1}月${d.getDate()}日.png`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 2000)
  }, 'image/png')
}
