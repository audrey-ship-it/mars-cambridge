// 剑桥英语五级成绩换算数据
// KET 使用官方精确换算表（来源：KET备考全家桶PDF）
// PET/FCE/CAE/CPE 使用剑桥英语量表（Cambridge English Scale）近似换算

/* ─────────────────────────────────────────────────────────────────
   剑桥英语量表（Cambridge English Scale, CES）各级别范围
   KET A2:  80–150  | PET B1: 100–170 | FCE B2: 120–190
   CAE C1: 140–210  | CPE C2: 160–230
───────────────────────────────────────────────────────────────── */

// ── 线性插值工具（用于近似换算）──
function lerp(raw, pts) {
  if (raw === null || raw === undefined || raw === '') return null
  const n = Number(raw)
  if (isNaN(n) || n < 0) return null
  if (n <= pts[0][0]) return pts[0][1]
  if (n >= pts[pts.length - 1][0]) return pts[pts.length - 1][1]
  for (let i = 0; i < pts.length - 1; i++) {
    const [r1, c1] = pts[i]
    const [r2, c2] = pts[i + 1]
    if (n >= r1 && n <= r2) return Math.round(c1 + (n - r1) / (r2 - r1) * (c2 - c1))
  }
  return null
}

// ── 精确查表工具（KET 官方数据）──
function lookup(raw, table) {
  if (raw === null || raw === undefined || raw === '') return null
  const n = Number(raw)
  if (isNaN(n) || n < table.min || n > table.max) return null
  return table.map[n] ?? null
}

/* ═══════════════════════════════════════════════════════
   KET (A2 Key) — 官方精确换算表
   来源: KET备考全家桶(2026版)PDF
═══════════════════════════════════════════════════════ */
const KET_TABLES = {
  reading:  { max:30, min:7,  map:{30:150,29:145,28:140,27:138,26:135,25:133,24:130,23:128,22:125,21:123,20:120,19:117,18:114,17:111,16:109,15:106,14:103,13:100,12:97,11:94,10:91,9:88,8:85,7:82} },
  writing:  { max:30, min:9,  map:{30:150,29:148,28:145,27:143,26:140,25:138,24:135,23:133,22:130,21:128,20:125,19:123,18:120,17:117,16:113,15:110,14:107,13:103,12:100,11:96,10:91,9:87} },
  listening:{ max:25, min:6,  map:{25:150,24:145,23:140,22:137,21:133,20:130,19:127,18:123,17:120,16:117,15:113,14:110,13:107,12:103,11:100,10:96,9:93,8:89,7:86,6:82} },
  speaking: { max:45, min:10, map:{45:150,44:148,43:145,42:143,41:140,40:139,39:137,38:136,37:134,36:133,35:131,34:130,33:129,32:127,31:126,30:124,29:123,28:121,27:120,26:118,25:116,24:113,23:111,22:109,21:107,20:104,19:102,18:100,17:98,16:96,15:93,14:91,13:89,12:87,11:84,10:82} },
}

/* ═══════════════════════════════════════════════════════
   PET (B1 Preliminary) — 近似换算表
   Cambridge English Scale 范围: 100–170
   通过标准分: 140 (B1级别)
═══════════════════════════════════════════════════════ */
// 各科满分: 阅读32题, 写作40分, 听力25题, 口语45分
const PET_BREAKPOINTS = {
  reading:  [[0,90],[5,100],[10,112],[16,120],[21,140],[26,154],[32,170]],
  writing:  [[0,90],[5,100],[9,112],[16,120],[22,140],[30,154],[40,170]],
  listening:[[0,90],[4,100],[8,112],[11,120],[16,140],[21,154],[25,170]],
  speaking: [[0,90],[9,100],[14,112],[19,120],[27,140],[35,154],[45,170]],
}

/* ═══════════════════════════════════════════════════════
   FCE (B2 First) — 近似换算表
   Cambridge English Scale 范围: 120–190
   通过标准分: 160 (B2级别)
═══════════════════════════════════════════════════════ */
// 各科满分: 阅读30题, 写作40分, 听力30题, 口语45分
const FCE_BREAKPOINTS = {
  reading:  [[0,110],[4,120],[9,140],[15,160],[22,173],[30,190]],
  writing:  [[0,110],[5,120],[12,140],[21,160],[30,173],[40,190]],
  listening:[[0,110],[4,120],[9,140],[15,160],[22,173],[30,190]],
  speaking: [[0,110],[8,120],[16,140],[26,160],[36,173],[45,190]],
}

/* ═══════════════════════════════════════════════════════
   CAE (C1 Advanced) — 近似换算表
   Cambridge English Scale 范围: 140–210
   通过标准分: 180 (C1级别)
═══════════════════════════════════════════════════════ */
// 各科满分: 阅读36题, 写作40分, 听力30题, 口语45分
const CAE_BREAKPOINTS = {
  reading:  [[0,130],[5,140],[10,160],[17,180],[25,193],[36,210]],
  writing:  [[0,130],[5,140],[11,160],[19,180],[28,193],[40,210]],
  listening:[[0,130],[4,140],[8,160],[14,180],[21,193],[30,210]],
  speaking: [[0,130],[8,140],[15,160],[23,180],[33,193],[45,210]],
}

/* ═══════════════════════════════════════════════════════
   CPE (C2 Proficiency) — 近似换算表
   Cambridge English Scale 范围: 160–230
   通过标准分: 200 (C2级别)
═══════════════════════════════════════════════════════ */
// 各科满分: 阅读36题, 写作40分, 听力30题, 口语45分
const CPE_BREAKPOINTS = {
  reading:  [[0,150],[5,160],[10,180],[17,200],[26,220],[36,230]],
  writing:  [[0,150],[5,160],[12,180],[20,200],[30,220],[40,230]],
  listening:[[0,150],[4,160],[9,180],[15,200],[22,220],[30,230]],
  speaking: [[0,150],[7,160],[15,180],[23,200],[34,220],[45,230]],
}

/* ═══════════════════════════════════════════════════════
   各级别考试定义
═══════════════════════════════════════════════════════ */
export const EXAM_CONFIGS = {
  KET: {
    abbr: 'KET', name: 'A2 Key', cefr: 'A2',
    color: '#059669', lightBg: '#d1fae5', lightText: '#065f46',
    scaleMin: 80, scaleMax: 150,
    exact: true, // 使用精确查表
    sections: [
      { key:'reading',   label:'阅读', emoji:'📖', note:'满分30题',  max:30 },
      { key:'writing',   label:'写作', emoji:'✍️', note:'满分30分',  max:30 },
      { key:'listening', label:'听力', emoji:'🎧', note:'满分25题',  max:25 },
      { key:'speaking',  label:'口语', emoji:'🎤', note:'满分45分',  max:45 },
    ],
    grades: [
      { min:133, label:'卓越', note:'Grade A · 颁发B1证书', color:'#064e3b', bg:'#d1fae5' },
      { min:120, label:'优秀', note:'Grade B · 颁发A2证书', color:'#15803d', bg:'#dcfce7' },
      { min:100, label:'通过', note:'Grade C · 颁发A2证书', color:'#1d4ed8', bg:'#dbeafe' },
      { min:82,  label:'A1',   note:'未达A2 · 颁发A1成绩', color:'#b45309', bg:'#fef3c7' },
      { min:0,   label:'未通过',note:'建议重新备考',          color:'#b91c1c', bg:'#fee2e2' },
    ],
    convert: (section, raw) => lookup(raw, KET_TABLES[section]),
  },
  PET: {
    abbr: 'PET', name: 'B1 Preliminary', cefr: 'B1',
    color: '#2563eb', lightBg: '#dbeafe', lightText: '#1e40af',
    scaleMin: 100, scaleMax: 170,
    exact: false,
    sections: [
      { key:'reading',   label:'阅读', emoji:'📖', note:'满分32题',  max:32 },
      { key:'writing',   label:'写作', emoji:'✍️', note:'满分40分',  max:40 },
      { key:'listening', label:'听力', emoji:'🎧', note:'满分25题',  max:25 },
      { key:'speaking',  label:'口语', emoji:'🎤', note:'满分45分',  max:45 },
    ],
    grades: [
      { min:154, label:'卓越', note:'Grade A · 颁发B2证书', color:'#064e3b', bg:'#d1fae5' },
      { min:140, label:'通过', note:'Grade B/C · 颁发B1证书', color:'#1d4ed8', bg:'#dbeafe' },
      { min:120, label:'A2',   note:'未达B1 · 颁发A2成绩', color:'#b45309', bg:'#fef3c7' },
      { min:0,   label:'未通过',note:'建议重新备考',           color:'#b91c1c', bg:'#fee2e2' },
    ],
    convert: (section, raw) => lerp(raw, PET_BREAKPOINTS[section]),
  },
  FCE: {
    abbr: 'FCE', name: 'B2 First', cefr: 'B2',
    color: '#4338ca', lightBg: '#e0e7ff', lightText: '#3730a3',
    scaleMin: 120, scaleMax: 190,
    exact: false,
    sections: [
      { key:'reading',   label:'阅读', emoji:'📖', note:'满分30题',  max:30 },
      { key:'writing',   label:'写作', emoji:'✍️', note:'满分40分',  max:40 },
      { key:'listening', label:'听力', emoji:'🎧', note:'满分30题',  max:30 },
      { key:'speaking',  label:'口语', emoji:'🎤', note:'满分45分',  max:45 },
    ],
    grades: [
      { min:180, label:'卓越', note:'Grade A · 颁发C1证书', color:'#064e3b', bg:'#d1fae5' },
      { min:173, label:'优秀', note:'Grade B · 颁发B2证书', color:'#15803d', bg:'#dcfce7' },
      { min:160, label:'通过', note:'Grade C · 颁发B2证书', color:'#1d4ed8', bg:'#dbeafe' },
      { min:140, label:'B1',   note:'未达B2 · 颁发B1成绩', color:'#b45309', bg:'#fef3c7' },
      { min:0,   label:'未通过',note:'建议重新备考',          color:'#b91c1c', bg:'#fee2e2' },
    ],
    convert: (section, raw) => lerp(raw, FCE_BREAKPOINTS[section]),
  },
  CAE: {
    abbr: 'CAE', name: 'C1 Advanced', cefr: 'C1',
    color: '#7c3aed', lightBg: '#ede9fe', lightText: '#5b21b6',
    scaleMin: 140, scaleMax: 210,
    exact: false,
    sections: [
      { key:'reading',   label:'阅读', emoji:'📖', note:'满分36题',  max:36 },
      { key:'writing',   label:'写作', emoji:'✍️', note:'满分40分',  max:40 },
      { key:'listening', label:'听力', emoji:'🎧', note:'满分30题',  max:30 },
      { key:'speaking',  label:'口语', emoji:'🎤', note:'满分45分',  max:45 },
    ],
    grades: [
      { min:200, label:'卓越', note:'Grade A · 颁发C2证书', color:'#064e3b', bg:'#d1fae5' },
      { min:193, label:'优秀', note:'Grade B · 颁发C1证书', color:'#15803d', bg:'#dcfce7' },
      { min:180, label:'通过', note:'Grade C · 颁发C1证书', color:'#1d4ed8', bg:'#dbeafe' },
      { min:160, label:'B2',   note:'未达C1 · 颁发B2成绩', color:'#b45309', bg:'#fef3c7' },
      { min:0,   label:'未通过',note:'建议重新备考',          color:'#b91c1c', bg:'#fee2e2' },
    ],
    convert: (section, raw) => lerp(raw, CAE_BREAKPOINTS[section]),
  },
  CPE: {
    abbr: 'CPE', name: 'C2 Proficiency', cefr: 'C2',
    color: '#e11d48', lightBg: '#ffe4e6', lightText: '#9f1239',
    scaleMin: 160, scaleMax: 230,
    exact: false,
    sections: [
      { key:'reading',   label:'阅读', emoji:'📖', note:'满分36题',  max:36 },
      { key:'writing',   label:'写作', emoji:'✍️', note:'满分40分',  max:40 },
      { key:'listening', label:'听力', emoji:'🎧', note:'满分30题',  max:30 },
      { key:'speaking',  label:'口语', emoji:'🎤', note:'满分45分',  max:45 },
    ],
    grades: [
      { min:220, label:'卓越', note:'Grade A · C2优秀', color:'#064e3b', bg:'#d1fae5' },
      { min:213, label:'优秀', note:'Grade B · 颁发C2证书', color:'#15803d', bg:'#dcfce7' },
      { min:200, label:'通过', note:'Grade C · 颁发C2证书', color:'#1d4ed8', bg:'#dbeafe' },
      { min:180, label:'C1',   note:'未达C2 · 颁发C1成绩', color:'#b45309', bg:'#fef3c7' },
      { min:0,   label:'未通过',note:'建议重新备考',          color:'#b91c1c', bg:'#fee2e2' },
    ],
    convert: (section, raw) => lerp(raw, CPE_BREAKPOINTS[section]),
  },
}

export const EXAM_LIST = ['KET','PET','FCE','CAE','CPE']

export function getExamGrade(score, examAbbr) {
  if (score === null || score === undefined) return null
  const cfg = EXAM_CONFIGS[examAbbr]
  if (!cfg) return null
  for (const g of cfg.grades) {
    if (score >= g.min) return g
  }
  return cfg.grades[cfg.grades.length - 1]
}
