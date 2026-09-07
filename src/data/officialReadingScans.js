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

function scanTest({ id, book, test, file, pageNames, answers, part1Questions }) {
  const [p1, p2, p3, p4, p5] = pageNames
  return {
    id,
    title: `官方真题 ${book} · Test ${test}`,
    source: { file, collection: `KET青少版官方真题 ${book}`, test, verified: true, format: 'source-scan' },
    part1: part1Questions
      ? { instructions: 'For each question, choose the correct answer.', questions: part1Questions }
      : { scanPages: pages(`b${book}t${test}`, p1), questions: choiceQuestions(1, answers.slice(0, 6)) },
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
    answers: ['B','A','C','C','B','B','B','A','C','A','B','A','C','B','A','C','A','C','A','C','B','C','A','A','not','want','as','of','than','to'],
    part1Questions: [
      {
        id: 1, type: 'notice', title: 'Fashionista Clothes',
        content: 'Please keep the receipt – you cannot return anything without it.',
        options: {
          A: 'Make sure that your receipt is correct before you leave the shop.',
          B: 'If you want to bring something back to this shop, you need a receipt.',
          C: 'Someone will check your receipt when you go out of the shop.'
        }, answer: 'B'
      },
      {
        id: 2, type: 'text', from: 'Sally', to: 'Luke',
        content: "Thanks for asking me to go to the cinema. It sounds fun, but I’m afraid I’ve got too much homework. Maybe some other time.",
        question: 'Sally is telling Luke',
        options: {
          A: 'why she is too busy to see a movie.',
          B: 'which homework she needs to complete.',
          C: 'when she will be available to see a movie.'
        }, answer: 'A'
      },
      {
        id: 3, type: 'text', from: 'Jessica',
        content: "Did anyone pick up my biology textbook by mistake after our science lesson in the library? I don’t mind coming to get it from you.",
        options: {
          A: 'Jessica needs to borrow a textbook from someone in her science class.',
          B: 'Jessica wants someone from her science class to bring her textbook to her.',
          C: 'Jessica is hoping someone in her science class has found her textbook.'
        }, answer: 'C'
      },
      {
        id: 4, type: 'text', from: 'Nathan', to: 'Laila',
        content: "I’m visiting my grandparents this weekend so I can’t meet you to finish our art project. Are you free this Thursday instead?",
        question: 'Why did Nathan write the message?',
        options: {
          A: 'to check if Laila can work on their art project over the weekend',
          B: 'to tell Laila he won’t be able to complete the project on his own',
          C: 'to ask Laila if she’s able to meet him earlier than they planned'
        }, answer: 'C'
      },
      {
        id: 5, type: 'ad', title: '24 hour sale!',
        content: 'Download any 10 songs for 99p\nThen £1.99 per song as usual',
        options: {
          A: 'You have 24 hours to buy as many songs as you like for 99p each.',
          B: 'The cost of each song is £1.99 after you buy more than ten songs.',
          C: 'Some popular songs that cost £1.99 aren’t included in the sale.'
        }, answer: 'B'
      },
      {
        id: 6, type: 'text', from: 'Stella', to: 'Aaron',
        content: "Thanks for lending me your bike. I’ll bring it back as soon as mine is repaired. It might be ready by next weekend.",
        options: {
          A: 'Stella is checking when Aaron will need his bike back.',
          B: 'Stella can’t say exactly when she will be able to return Aaron’s bike.',
          C: 'Stella wants to know if she can borrow Aaron’s bike until next weekend.'
        }, answer: 'B'
      }
    ]
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
