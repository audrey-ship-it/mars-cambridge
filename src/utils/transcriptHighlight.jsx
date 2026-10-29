/* eslint-disable react-refresh/only-export-components -- 共享工具模块：函数与组件混合导出（先例同 CambridgeExam.jsx） */
// 听力原文荧光笔工具：从解析提取英文答案句并在原文中高亮。
// 由 PetExam.jsx（PET）与 CambridgeListening.jsx（KET）共用，勿在页面内复制实现。
import { useState } from 'react'

// 从解析文本中提取用 "..." 包裹的英文答案句（用于在原文中荧光标注）
export function extractQuotes(explanation) {
  if (!explanation) return []
  const out = []
  const re = /"([^"]+)"|“([^”]+)”|「([^」]+)」/g
  let m
  while ((m = re.exec(explanation)) !== null) {
    const quoted = m[1] || m[2] || m[3] || ''
    // "..." 式引句（两段拼接）拆成片段分别匹配，提高荧光命中
    for (const frag of quoted.split(/\s*(?:\.{3}|\/)\s*/)) {
      const f = frag.trim()
      if (f && /^[A-Za-z£]/.test(f) && f.split(/\s+/).length >= 3) out.push(f)
    }
    // 中英混合引句（中文叙述 + 括号英文）：按 CJK 与全角标点切出连续英文子段
    for (const part of quoted.split(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]+/)) {
      const p = part.trim()
      if (p && /^[A-Za-z£]/.test(p) && p.split(/\s+/).length >= 3) out.push(p)
    }
  }
  // 裸英文通道：中文叙述中无引号包裹的英文句（≥4 词），逐段作为候选引句
  for (const seg of explanation.split(/[^A-Za-z£0-9'’.,:!?\- ]+/)) {
    const s = seg.trim()
    if (s && /^[A-Za-z£]/.test(s) && s.split(/\s+/).length >= 4) out.push(s)
  }
  return out
}

// 在 transcript 中查找 answers 并用荧光笔 <mark> 高亮（区间合并去重叠）
// 匹配对标点/空格/引号形态不敏感：归一化（仅保留字母数字£）后查找，再映射回原文区间
export function renderTranscriptWithHighlights(transcript, answers) {
  if (!transcript) return null
  if (!answers || answers.length === 0) return transcript
  const normChars = []
  const normIdx = []
  for (let i = 0; i < transcript.length; i++) {
    const seg = transcript[i].normalize('NFD') // 变音符分解：café 的 é 归一为 e
    for (const c of seg) {
      if (/[a-z0-9£]/i.test(c)) { normChars.push(c.toLowerCase()); normIdx.push(i) }
    }
  }
  const normText = normChars.join('')
  const spans = []
  for (const ans of answers) {
    if (!ans) continue
    const nAns = ans.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9£]+/g, '')
    if (!nAns) continue
    let idx = 0
    while ((idx = normText.indexOf(nAns, idx)) !== -1) {
      const startOrig = normIdx[idx]
      const endOrig = normIdx[idx + nAns.length - 1] + 1
      spans.push({ start: startOrig, end: endOrig, text: transcript.slice(startOrig, endOrig) })
      idx += nAns.length
    }
  }
  if (spans.length === 0) return transcript
  spans.sort((a, b) => a.start - b.start)
  const merged = []
  let lastEnd = -1
  for (const s of spans) {
    if (s.start >= lastEnd) { merged.push(s); lastEnd = s.end }
  }
  const out = []
  let cursor = 0
  merged.forEach((s, i) => {
    if (s.start > cursor) out.push(<span key={`t${i}`}>{transcript.slice(cursor, s.start)}</span>)
    out.push(
      <mark
        key={`m${i}`}
        style={{
          background: 'linear-gradient(180deg, rgba(253,224,71,0) 6%, rgba(253,224,71,0.85) 20%, rgba(253,224,71,0.85) 84%, rgba(253,224,71,0) 96%)',
          color: 'inherit',
          fontWeight: 600,
          padding: '0 3px',
          margin: '0 1px',
          borderRadius: '3px',
          boxDecorationBreak: 'clone',
          WebkitBoxDecorationBreak: 'clone',
        }}
      >
        {s.text}
      </mark>
    )
    cursor = s.end
  })
  if (cursor < transcript.length) out.push(<span key="end">{transcript.slice(cursor)}</span>)
  return out
}

// 可折叠的听力原文展示区
export function TranscriptBox({ transcript, highlights = [] }) {
  const [open, setOpen] = useState(false)
  if (!transcript) return null
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700 hover:bg-amber-100"
      >
        听力原文{open ? ' ▾' : ' ▸'}
      </button>
      {open && (
        <div className="mt-2 whitespace-pre-line text-xs leading-6 text-slate-600 rounded-lg bg-amber-50/40 border border-amber-100 p-3">
          {renderTranscriptWithHighlights(transcript, highlights)}
        </div>
      )}
    </div>
  )
}

// 模考结果页「听力原文」总面板（KET 模考 ListeningMockTranscriptPanel 的通用版）：
// 按 Part 分块，整 Part/题级原文自适应，黄色荧光标出各题解析对应的答案句。
export function AudioscriptPanel({ parts, tagClass = 'text-slate-500' }) {
  const [open, setOpen] = useState(false)
  const blocks = (parts || []).map((p) => {
    const items = p.items || []
    const whole = typeof p.transcript === 'string' && p.transcript.trim() ? p.transcript : ''
    const segs = items
      .map((it, i) => ({ label: '第 ' + (i + 1) + ' 题', transcript: it?.transcript || '', quotes: extractQuotes(it?.explanation || it?.exp || '') }))
      .filter((e) => e.transcript.trim())
    return { partNo: p.part, whole, segs, quotes: items.flatMap((it) => extractQuotes(it?.explanation || it?.exp || '')), missing: !whole && segs.length === 0 }
  })
  if (!blocks.length || blocks.every((b) => b.missing)) return null
  return (
    <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <button type="button" onClick={() => setOpen(v => !v)} className="w-full text-left">
        <div className={'text-xs font-extrabold tracking-[.16em] ' + tagClass}>AUDIOSCRIPT</div>
        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">听力原文{open ? ' ▾' : ' ▸'}</h2>
        <p className="mt-2 text-sm text-slate-500">官方文稿全文，黄色荧光标出与答案对应的原文句。</p>
      </button>
      {open && (
        <div className="mt-5 space-y-5">
          {blocks.map((b) => (
            <article key={b.partNo} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
              <h3 className="text-sm font-extrabold text-slate-700">Part {b.partNo}</h3>
              {b.missing ? (
                <p className="mt-2 text-xs text-slate-400">该 Part 官方原文暂未收录。</p>
              ) : b.whole ? (
                <div className="mt-3 whitespace-pre-line rounded-xl bg-white p-3 text-xs leading-6 text-slate-600">
                  {renderTranscriptWithHighlights(b.whole, b.quotes)}
                </div>
              ) : (
                <div className="mt-3 space-y-3">
                  {b.segs.map((e, i) => (
                    <div key={i} className="whitespace-pre-line rounded-xl bg-white p-3 text-xs leading-6 text-slate-600">
                      <div className="mb-1 text-[11px] font-extrabold text-slate-500">{e.label}</div>
                      {renderTranscriptWithHighlights(e.transcript, e.quotes)}
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
