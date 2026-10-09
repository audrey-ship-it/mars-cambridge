/* FCE (B2) 语法考点目录与学习分组；题库见 fceGrammarQuestions.js。
   内容为原创教学编排（B2 考点），不含真题数据。 */

export const FCE_GRAMMAR_POINTS = [
  {
    id: 1, title: '进阶时态与将来', color: 'bg-sky-600', light: 'bg-sky-50 text-sky-700 border-sky-200',
    units: [
      { n: 1, title: '将来完成时', available: true },
      { n: 2, title: '叙事时态综合', available: true },
      { n: 3, title: '现在完成进阶辨析', available: true },
      { n: 4, title: '将来表达法综合', available: true },
    ],
  },
  {
    id: 2, title: '情态与虚拟', color: 'bg-blue-600', light: 'bg-blue-50 text-blue-700 border-blue-200',
    units: [
      { n: 5, title: '情态动词+完成式', available: true },
      { n: 6, title: '推测情态综合', available: true },
      { n: 7, title: 'used to / be used to / get used to', available: true },
      { n: 8, title: 'wish / if only / It\'s time', available: true },
    ],
  },
  {
    id: 3, title: '条件与让步', color: 'bg-cyan-600', light: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    units: [
      { n: 9, title: '混合条件句', available: true },
      { n: 10, title: 'unless / in case / as long as', available: true },
      { n: 11, title: '让步结构', available: true },
      { n: 12, title: '目的与结果', available: true },
    ],
  },
  {
    id: 4, title: '从句与间接语', color: 'bg-indigo-600', light: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    units: [
      { n: 13, title: '介词+关系代词', available: true },
      { n: 14, title: '缩略定语从句', available: true },
      { n: 15, title: '报告动词句型', available: true },
      { n: 16, title: '分裂句与强调', available: true },
    ],
  },
  {
    id: 5, title: '被动与词法', color: 'bg-teal-600', light: 'bg-teal-50 text-teal-700 border-teal-200',
    units: [
      { n: 17, title: '使役被动', available: true },
      { n: 18, title: '被动报告句型', available: true },
      { n: 19, title: '动词模式进阶', available: true },
      { n: 20, title: '比较结构', available: true },
    ],
  },
]

export const FCE_GRAMMAR_GROUPS = [
  { id: 'fce-tenses', number: '01', title: '进阶时态与将来', desc: '将来完成时、叙事时态与将来表达法', unitNums: [1, 2, 3, 4], icon: 'T', featured: true },
  { id: 'fce-modals', number: '02', title: '情态与虚拟', desc: '情态动词+完成式、推测与 wish 虚拟', unitNums: [5, 6, 7, 8], icon: 'M' },
  { id: 'fce-conditionals', number: '03', title: '条件与让步', desc: '混合条件句、unless 与让步结构', unitNums: [9, 10, 11, 12], icon: 'if' },
  { id: 'fce-clauses', number: '04', title: '从句与间接语', desc: '介词+关系代词、缩略从句与强调句', unitNums: [13, 14, 15, 16], icon: 'S' },
  { id: 'fce-passive', number: '05', title: '被动与词法', desc: '使役被动、被动报告与动词模式', unitNums: [17, 18, 19, 20], icon: '↻' },
]
