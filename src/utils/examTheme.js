/* 考试级别主题色：两个级别共用深蓝主色，点缀色不同。
 * CET-4：深蓝 + 黄色 #ffcd1f；CET-6：深蓝 + 薄荷青绿 #2dd4bf。
 * 页面根元素通过 examVars() 注入 CSS 变量，组件内用 var(--accent) / var(--hl) 等引用。
 * 点缀色（--hl）只用作底色/标记，文字一律用深蓝，保证对比度。 */
const NAVY = {
  accent: '#2b2e7a',
  accentDeep: '#1b1c44',
  accentHover: '#1b1c44',
  accentSoft: 'rgba(27,28,68,.07)',
  accentSofter: 'rgba(27,28,68,.035)',
  accentBorder: 'rgba(27,28,68,.20)',
  bannerTextFaint: 'rgba(222,224,255,.78)',
};

export const EXAM_THEME = {
  cet4: {
    ...NAVY,
    hl: '#ffcd1f',
    hlSoft: 'rgba(255,205,31,.38)',
    bannerText: '#ffd84d',
  },
  cet6: {
    ...NAVY,
    hl: '#2dd4bf',
    hlSoft: 'rgba(45,212,191,.35)',
    bannerText: '#5eead4',
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
    '--hl': t.hl,
    '--hl-soft': t.hlSoft,
  };
}
