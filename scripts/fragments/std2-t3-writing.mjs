// FCE Writing (Paper 2) — Cambridge English First 2（标准版2）Test 3（书内印作 Test 7）
// 题面逐字转录自书 64–65（PDF 第 65–66 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对）。
// 答案/范文来源：本书官方未附写作范文。已核实 Test 7 Key（书 144 / PDF 145）的 Writing 栏
// 仅注明 "Candidate responses are marked using the assessment scale on pages 107–108."，
// 且 Key 区书 119–159 / PDF 120–160 逐页核实无 sample/model answers。
// 转录说明：Q2 情境句原文即 "You see this notice in an English-language website called
// Restaurant World:"（介词 in 系原书印刷，非转录笔误，已放大核对）；该框标题 "Reviews wanted"
// 无感叹号（区别于 Test 6 的 "Reviews wanted!"）；Q3 "organizer" 拼写按原文。
// 含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-2-test3-writing',
    title: 'FCE 标准版真题 2 · Test 3 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Writing',
    pages: '书 64–65',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（Test 7 Key 书 144 / PDF 145 的 Writing 栏仅注明按书 107–108 评分量表评分；Key 区书 119–159 / PDF 120–160 已逐页核实无 sample answers）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about famous people. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and giving reasons for your point of view.",
      prompt: "'The private lives of famous people should not be made public.' What do you think?",
      notes: ['public interest in famous people', 'famous people as role models', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'review',
          context: 'You see this notice in an English-language website called Restaurant World:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'A Wonderful Meal',
          prompt: "Write us a review of a restaurant where you had a wonderful meal. Tell us what the restaurant was like, describe what you ate and explain why it was so good.\nThe best reviews will be posted on the website.",
          taskLine: 'Write your review.',
        },
        {
          q: 3,
          genre: 'letter',
          context: 'You see this advertisement in your local newspaper:',
          boxTitle: 'Helpers wanted',
          prompt:
            "We are looking for people to work in a holiday club for English-speaking children (aged 4–8).\n" +
            "Write a letter to Mr Nick Jones, the club organizer, giving details of:\n" +
            '• your experience of working with children\n' +
            '• your knowledge of English\n' +
            '• why you would be suitable for the job.',
          taskLine: 'Write your letter of application.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Ambition',
          prompt: "What does ambition mean to you? What ambitions do you have? How do you intend to achieve them?\nThe best articles will be published in our magazine.",
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};
