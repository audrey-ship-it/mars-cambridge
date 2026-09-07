const choiceQuestions = (start, answers) => answers.map((answer, index) => ({
  id: start + index,
  answer,
  options: { A: 'A', B: 'B', C: 'C' }
}))

const wordQuestions = answers => answers.map((accepted, index) => ({
  id: 25 + index,
  answers: Array.isArray(accepted) ? accepted : [accepted]
}))

const pages = (base, names) => names.map(name => `/images/ket/reading/official/${base}/${name}.jpg`)

function scanTest({ id, book, test, file, pageNames, answers }) {
  const [p1, p2, p3, p4, p5] = pageNames
  return {
    id,
    title: `官方真题 ${book} · Test ${test}`,
    source: { file, collection: `KET青少版官方真题 ${book}`, test, verified: true, format: 'source-scan' },
    part1: { scanPages: pages(`b${book}t${test}`, p1), questions: choiceQuestions(1, answers.slice(0, 6)) },
    part2: { scanPages: pages(`b${book}t${test}`, p2), questions: choiceQuestions(7, answers.slice(6, 13)) },
    part3: { scanPages: pages(`b${book}t${test}`, p3), questions: choiceQuestions(14, answers.slice(13, 18)) },
    part4: { scanPages: pages(`b${book}t${test}`, p4), questions: choiceQuestions(19, answers.slice(18, 24)) },
    part5: {
      scanPages: pages(`b${book}t${test}`, p5),
      questions: wordQuestions(answers.slice(24))
    }
  }
}

export const officialReadingScans = [
  scanTest({
    id: 2, book: 1, test: 2, file: 'KET青少版官方真题1.pdf',
    pageNames: [['page-025','page-026'], ['page-027','page-028'], ['page-029','page-030'], ['page-031'], ['page-032']],
    answers: ['B','A','C','C','B','B','B','A','C','A','B','A','C','B','A','C','A','C','A','C','B','C','A','A','not','want','as','of','than','to']
  }),
  scanTest({
    id: 3, book: 1, test: 3, file: 'KET青少版官方真题1.pdf',
    pageNames: [['page-041','page-042'], ['page-043','page-044'], ['page-045','page-046'], ['page-047'], ['page-048']],
    answers: ['A','C','B','B','A','C','C','B','A','B','C','A','B','A','B','C','B','C','C','A','B','C','B','B','the','it',['but','although','however','so'],'than','to','at']
  }),
  scanTest({
    id: 4, book: 1, test: 4, file: 'KET青少版官方真题1.pdf',
    pageNames: [['page-057','page-058'], ['page-059','page-060'], ['page-061','page-062'], ['page-063'], ['page-064']],
    answers: ['B','C','B','B','C','A','C','A','C','A','B','A','C','A','C','A','B','B','B','B','A','C','A','B','as','the','all','in','to','if']
  }),
  scanTest({
    id: 5, book: 2, test: 1, file: 'KET青少版真题 2.pdf',
    pageNames: [['page-010','page-011'], ['page-012','page-013'], ['page-014','page-015'], ['page-016'], ['page-017']],
    answers: ['C','C','C','A','B','B','B','A','B','C','A','A','C','A','B','C','C','A','C','A','A','A','B','B','than','it','the',['when','after','before'],'be',['do','did']]
  }),
  scanTest({
    id: 6, book: 2, test: 2, file: 'KET青少版真题 2.pdf',
    pageNames: [['page-026','page-027'], ['page-028','page-029'], ['page-030','page-031'], ['page-032'], ['page-033']],
    answers: ['A','C','A','C','B','A','B','C','A','C','B','C','A','A','B','B','C','A','B','C','A','B','C','A','be','a','on',['or','to'],['them','these','those'],'if']
  }),
  scanTest({
    id: 7, book: 2, test: 3, file: 'KET青少版真题 2.pdf',
    pageNames: [['page-042','page-043'], ['page-044','page-045'], ['page-046','page-047'], ['page-048'], ['page-049']],
    answers: ['C','B','A','C','A','C','B','C','A','A','C','B','A','B','C','A','A','C','C','A','C','A','B','B',['was','is'],'than','do','a','why','there']
  }),
  scanTest({
    id: 8, book: 2, test: 4, file: 'KET青少版真题 2.pdf',
    pageNames: [['page-058','page-059'], ['page-060','page-061'], ['page-062','page-063'], ['page-064'], ['page-065']],
    answers: ['B','C','B','B','C','A','C','A','C','A','B','A','C','A','C','A','B','B','B','B','A','C','A','B','there','than','it',['lot','load'],'to','the']
  }),
  scanTest({
    id: 9, book: 3, test: 1, file: '03 KET真题 - 第1套 - 阅读与写作.pdf',
    pageNames: [['page-01','page-02'], ['page-03','page-04'], ['page-05','page-06'], ['page-07'], ['page-08']],
    answers: ['B','A','C','C','B','B','A','B','A','C','B','C','B','A','B','C','C','B','B','A','C','A','B','B','the',['it','this'],'there',['with','against'],['ago','back'],'if']
  }),
  scanTest({
    id: 10, book: 3, test: 2, file: '03 KET真题 - 第2套 - 阅读与写作.pdf',
    pageNames: [['page-01','page-02'], ['page-03','page-04'], ['page-05','page-06'], ['page-07'], ['page-08']],
    answers: ['C','A','B','B','B','C','C','C','A','B','C','A','B','B','B','B','A','C','B','B','A','A','B','C',['like','love'],'with','than','the','as','what']
  }),
  scanTest({
    id: 11, book: 3, test: 3, file: '03 KET真题 - 第3套 - 阅读与写作.pdf',
    pageNames: [['page-02','page-03'], ['page-04','page-05'], ['page-06','page-07'], ['page-08'], ['page-09']],
    answers: ['B','C','A','A','B','C','B','A','C','A','A','B','C','C','B','A','C','C','C','A','A','B','C','B','for','you','the','are','by','if']
  }),
  scanTest({
    id: 12, book: 3, test: 4, file: '03 KET真题 - 第4套 - 阅读与写作.pdf',
    pageNames: [['page-01','page-02'], ['page-03','page-04'], ['page-05','page-06'], ['page-07'], ['page-08']],
    answers: ['A','C','C','B','A','B','B','A','B','C','A','C','B','B','C','B','B','A','C','B','A','C','B','C','to',['what','how'],'a','with',['can','will','could','would'],'about']
  })
]
