/* 考试级别主题色：CET-4 主绿 / CET-6 皇家蓝。
 * 页面根元素通过 examVars() 注入 CSS 变量，组件内用 var(--accent) 等引用，
 * 保证同一组件在两种级别下呈现不同但协调的配色。 */
export const EXAM_THEME = {
  cet4: {
    accent: '#0d7656',
    accentDeep: '#064e3b',
    accentHover: '#095f46',
    accentSoft: 'rgba(13,118,86,.10)',
    accentSofter: 'rgba(13,118,86,.05)',
    accentBorder: 'rgba(13,118,86,.25)',
    bannerText: '#a7f3d0',
    bannerTextFaint: 'rgba(209,250,229,.7)',
  },
  cet6: {
    accent: '#2563eb',
    accentDeep: '#1e3a8a',
    accentHover: '#1d4ed8',
    accentSoft: 'rgba(37,99,235,.10)',
    accentSofter: 'rgba(37,99,235,.05)',
    accentBorder: 'rgba(37,99,235,.25)',
    bannerText: '#bfdbfe',
    bannerTextFaint: 'rgba(219,234,254,.7)',
  },
};

export function examTheme(exam) {
  return exam === 'cet6' || exam === 'CET-6' ? EXAM_THEME.cet6 : EXAM_THEME.cet4;
}

/* 生成可挂在根元素 style 上的 CSS 变量表 */
export function examVars(exam) {
  const t = examTheme(exam);
  return {
    '--accent': t.accent,
    '--accent-deep': t.accentDeep,
    '--accent-hover': t.accentHover,
    '--accent-soft': t.accentSoft,
    '--accent-softer': t.accentSofter,
    '--accent-border': t.accentBorder,
  };
}
