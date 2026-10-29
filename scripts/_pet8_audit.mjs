// 审计 extracted-v5.json：说话人 token 汇总 + 可疑模式
import fs from 'node:fs';

const d = JSON.parse(fs.readFileSync('scripts/_pet8_out/extracted-v5.json', 'utf8'));
const speakers = {};
const flags = [];
const auditOne = (id, label, tr) => {
  if (!tr) { flags.push(`${id} ${label}: NULL`); return; }
  const lines = tr.split('\n');
  lines.forEach((ln, i) => {
    const m = ln.match(/^([A-Z][A-Za-z' .]{0,15}?):\s+(.*)$/);
    if (m) {
      const sp = m[1].trim();
      speakers[sp] = (speakers[sp] || 0) + 1;
      if (/^[A-Z]{3,}$/.test(sp)) flags.push(`${id} ${label} L${i}: 全大写说话人 "${ln.slice(0, 60)}"`);
    } else {
      if (i === 0) flags.push(`${id} ${label} 首行无说话人: "${ln.slice(0, 60)}"`);
      if (/[A-Z]{3,}[.:]/.test(ln)) flags.push(`${id} ${label} L${i}: 大写垃圾? "${ln.slice(0, 70)}"`);
      if (/\b(paper|listening|reading|writing)\b.*\b\d\b/i.test(ln) && ln.length < 45) flags.push(`${id} ${label} L${i}: 页眉? "${ln}"`);
    }
  });
  const lastLn = lines[lines.length - 1];
  if (lastLn && !/[.!?"”]$/.test(lastLn) && lastLn.length < 40) flags.push(`${id} ${label} 尾行可疑: "${lastLn}"`);
};
for (const [id, parts] of Object.entries(d)) {
  parts.p1Items?.forEach((tr, i) => auditOne(id, `P1Q${i + 1}`, tr));
  parts.p2Items?.forEach((tr, i) => auditOne(id, `P2Q${i + 8}`, tr));
  auditOne(id, 'P3', parts.p3Part);
  auditOne(id, 'P4', parts.p4Part);
}
console.log('== 说话人 token ==');
console.log(Object.entries(speakers).sort((a, b) => b[1] - a[1]).map(([s, c]) => `${s}(${c})`).join(' '));
console.log('\n== 可疑标记 ==');
console.log(flags.join('\n') || '(无)');
