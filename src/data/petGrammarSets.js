/* PET (B1) 语法考点目录与学习分组；题库见 petGrammarQuestions.js。 */

export const PET_GRAMMAR_POINTS = [
  {
    id: 1, title: '高频时态', color: 'bg-violet-600', light: 'bg-violet-50 text-violet-700 border-violet-200',
    units: [
      { n: 1, title: '现在完成进行时', available: true },
      { n: 2, title: '过去完成时', available: true },
      { n: 3, title: '过去完成进行时', available: true },
      { n: 4, title: '将来进行时', available: true },
    ],
  },
  {
    id: 2, title: '核心词法', color: 'bg-indigo-500', light: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    units: [
      { n: 5, title: '限定词与数量词', available: true },
      { n: 6, title: 'used to 与 would', available: true },
      { n: 7, title: '动名词', available: true },
      { n: 8, title: '不定式', available: true },
    ],
  },
  {
    id: 3, title: '常用句型', color: 'bg-fuchsia-500', light: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    units: [
      { n: 9, title: 'so / such / too / enough', available: true },
      { n: 10, title: 'prefer / would rather / would like', available: true },
      { n: 11, title: '感叹句综合', available: true },
    ],
  },
  {
    id: 4, title: '从句', color: 'bg-purple-500', light: 'bg-purple-50 text-purple-700 border-purple-200',
    units: [
      { n: 12, title: '宾语从句进阶', available: true },
      { n: 13, title: '限定性定语从句', available: true },
      { n: 14, title: '非限定性定语从句', available: true },
      { n: 15, title: '第二条件句', available: true },
      { n: 16, title: '第三条件句', available: true },
    ],
  },
  {
    id: 5, title: '被动语态与综合语法', color: 'bg-blue-500', light: 'bg-blue-50 text-blue-700 border-blue-200',
    units: [
      { n: 17, title: '被动语态综合', available: true },
      { n: 18, title: '完成时被动与情态被动', available: true },
      { n: 19, title: '情态动词表示推测', available: true },
      { n: 20, title: '间接引语', available: true },
      { n: 21, title: '短语动词', available: true },
    ],
  },
]

export const PET_GRAMMAR_GROUPS = [
  { id: 'tenses', number: '01', title: '高频时态', desc: 'PET 进阶时态：完成进行时、过去完成时与将来进行时', unitNums: [1, 2, 3, 4], icon: 'T', featured: true },
  { id: 'word-grammar', number: '02', title: '核心词法', desc: '数量词、used to、动名词和不定式', unitNums: [5, 6, 7, 8], icon: 'Aa' },
  { id: 'sentence-patterns', number: '03', title: '常用句型', desc: 'so/such、prefer/would rather 和感叹句', unitNums: [9, 10, 11], icon: 'S' },
  { id: 'clauses', number: '04', title: '从句', desc: '宾语从句、定语从句和第二、第三条件句', unitNums: [12, 13, 14, 15, 16], icon: 'if' },
  { id: 'passive-review', number: '05', title: '被动语态与综合语法', desc: '被动语态、情态推测、间接引语和短语动词', unitNums: [17, 18, 19, 20, 21], icon: '↻' },
]
