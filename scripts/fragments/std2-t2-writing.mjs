// FCE Writing (Paper 2) — Cambridge English First 2（标准版2）Test 2（书内印作 Test 6）
// 题面逐字转录自书 42–43（PDF 第 43–44 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对）。
// 答案/范文来源：本书官方未附写作范文。已核实 Test 6 Key（书 132 / PDF 133）的 Writing 栏
// 仅注明 "Candidate responses are marked using the assessment scale on pages 107–108."，
// 且 Key 区书 119–159 / PDF 120–160 逐页核实无 sample/model answers。
// 转录说明：Q2 邮件破折号、Q4 "organizer" 拼写均按原文；含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-2-test2-writing',
    title: 'FCE 标准版真题 2 · Test 2 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Writing',
    pages: '书 42–43',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（Test 6 Key 书 132 / PDF 133 的 Writing 栏仅注明按书 107–108 评分量表评分；Key 区书 119–159 / PDF 120–160 已逐页核实无 sample answers）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about education. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and giving reasons for your point of view.",
      prompt: "'Teachers need more than just a good knowledge of their subject.' What do you think?",
      notes: ['patience', 'friendliness', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'email',
          context: 'You have received an email from your English-speaking friend, Robert:',
          prompt: "Hi!\nMy parents are both 50 next month and I want to do something special for them – I can't decide whether to organise a surprise birthday party or take them away to a hotel for the weekend. What do you think I should do?",
          taskLine: 'Write your email.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You recently saw this notice on an English-language website called TV Watch:',
          boxTitle: 'Reviews wanted!',
          boxHeading: 'TV series',
          prompt: "Is there a TV series which you watch regularly?\nWrite a review of the series explaining what it is about, why you like it and who you would recommend it to.",
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'letter',
          context: 'You see this advertisement on your college noticeboard:',
          boxTitle: 'Wanted: English-speaking guide',
          prompt:
            "A group of English students is coming to your town for a week. The tourist office is looking for a guide to show the students the town. Write a letter of application to the organizer of the tour, Mrs Isobel Parks, explaining:\n" +
            '• Which places you would take the students to visit\n' +
            '• Why you would be the best person for the job',
          taskLine: 'Write your letter.',
        },
      ],
    },
  },
};
