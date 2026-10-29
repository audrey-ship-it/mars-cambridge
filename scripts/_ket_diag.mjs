// 诊断：对每条未命中引句，在转录中做由长到短的 n-gram 模糊定位，打印命中上下文
// 用法：node scripts/_ket_diag.mjs
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const ROOT = 'd:/workspace_sunny/mars-cambridge';
const OFFICIAL_DATA = JSON.parse(fs.readFileSync(`${ROOT}/scripts/_ket_out/official-data.json`, 'utf8'));
const { KET_OFFICIAL_LISTENING_ENRICH, applyKetOfficialEnrich } = await import(
  pathToFileURL(`${ROOT}/src/data/ketOfficialListeningTranscripts.js`)
);

function extractQuotes(explanation) {
  if (!explanation) return [];
  const out = [];
  const re = /"([^"]+)"|“([^”]+)”|「([^」]+)」/g;
  let m;
  while ((m = re.exec(explanation)) !== null) {
    const quoted = m[1] || m[2] || m[3] || '';
    for (const frag of quoted.split(/\s*(?:\.{3}|\/)\s*/)) {
      const f = frag.trim();
      if (f && /^[A-Za-z£]/.test(f) && f.split(/\s+/).length >= 3) out.push(f);
    }
    for (const part of quoted.split(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]+/)) {
      const p = part.trim();
      if (p && /^[A-Za-z£]/.test(p) && p.split(/\s+/).length >= 3) out.push(p);
    }
  }
  for (const seg of explanation.split(/[^A-Za-z£0-9'’.,:!?\- ]+/)) {
    const s = seg.trim();
    if (s && /^[A-Za-z£]/.test(s) && s.split(/\s+/).length >= 4) out.push(s);
  }
  return out;
}

const normOf = (t) => String(t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9£]+/g, '');

for (let id = 1; id <= 32; id++) {
  const entry = KET_OFFICIAL_LISTENING_ENRICH[String(id)];
  if (!entry) continue;
  for (let p = 1; p <= 5; p++) {
    const basePart = OFFICIAL_DATA[String(id)]?.[String(p)] ?? null;
    const hasData = !!(basePart && (basePart.items?.length || (Array.isArray(basePart) && basePart.length)));
    if (!hasData || !entry.parts[String(p)]) continue;
    const merged = applyKetOfficialEnrich(String(p), { [String(id)]: Array.isArray(basePart) ? { items: basePart } : basePart });
    const part = merged[String(id)];
    const transcript = part.transcript || '';
    // 构建归一化索引，便于映射回原文区间
    const normIdx = [];
    const normChars = [];
    for (let i = 0; i < transcript.length; i++) {
      for (const c of transcript[i].normalize('NFD')) {
        if (/[a-z0-9£]/i.test(c)) { normChars.push(c.toLowerCase()); normIdx.push(i); }
      }
    }
    const normText = normChars.join('');
    part.items.forEach((it, i) => {
      for (const quote of extractQuotes(it.explanation)) {
        const nq = normOf(quote);
        if (normText.includes(nq)) continue;
        console.log(`\n== set${id} P${p}Q${i + 1} 未命中引句: "${quote}"`);
        const words = quote.split(/\s+/).filter(Boolean);
        let reported = false;
        for (let L = Math.min(8, words.length); L >= 3 && !reported; L--) {
          for (let s = 0; s + L <= words.length; s++) {
            const frag = normOf(words.slice(s, s + L).join(' '));
            if (frag.length < 8) continue;
            const k = normText.indexOf(frag);
            if (k >= 0) {
              const st = normIdx[k];
              const en = normIdx[Math.min(k + frag.length - 1, normIdx.length - 1)] + 1;
              console.log(`   命中片段[${words.slice(s, s + L).join(' ')}] → …${transcript.slice(Math.max(0, st - 90), Math.min(transcript.length, en + 90))}…`);
              reported = true;
              break;
            }
          }
        }
        if (!reported) {
          const own = it.transcript && it.transcript !== transcript ? it.transcript : null;
          if (own) {
            const nOwn = normOf(own);
            console.log(`   本题 item 级转录（${own.length} 字符，norm ${nOwn.length}）:\n   ${own.slice(0, 900)}`);
          } else {
            console.log('   无任何 ≥8 字符连续片段命中；该题解释所在转录开头: ' + transcript.slice(0, 400));
          }
        }
      }
    });
  }
}
