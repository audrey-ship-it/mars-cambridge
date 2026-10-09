// FCE Writing (Paper 2) — Cambridge First for Schools 2 · Test 2（书页眉印为 Test 6，沿用仓库惯例 Test 2 = 原书 Test 6）
// 题面逐字转录自书 42–43（PDF 第 43–44 页，扫描件视觉转录）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：essay 方框加粗句书原印为 "Would it be good to be a famous sportspeople?"（a + 复数为书原文笔误，逐字保留）；
// Part 2 仅 Q2–Q4（2015 改版题型，无 set book Q5）；Q2 为 email（box 中 "your" 原文为斜体），Q3 方框标题 "Time Travel!"。

export default {
  meta: {
    id: 'fce-schools-2-test2-writing',
    examKey: 'fce-schools-2-test2',
    title: 'FCE 校园版真题 2 · Test 2 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 2,
    paper: 'writing',
    pages: '书 42–43（PDF 43–44）',
    source: 'Cambridge First for Schools 2 FCE 校园版真题2.pdf',
    answerSource: '官方 Writing assessment scale（无固定答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: 'In your English class you have been talking about famous sportspeople. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: 'Would it be good to be a famous sportspeople?',
      notes: ['money', 'private life', '...(your own idea)'],
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
          context: 'You receive this email from your English friend, Barney. Write an email replying to Barney.',
          prompt: "Hi – We're doing a project on why people think certain behaviour is polite or rude. How about in your country? What do people think is polite or rude behaviour – e.g. in other people's houses, at school, at meal times? How important do you think it is to be polite all the time?\nThanks\nBarney",
          taskLine: 'Write your email.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this notice in an international magazine for teenagers.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Time Travel!',
          prompt: "If you could travel back to the past, which time in history would you choose and where would you go? Explain your choice and say what you'd like to find out from the experience.\nThe best articles will be published next month.",
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this announcement in an English-language magazine for schools.',
          boxTitle: 'Stories wanted',
          prompt: "We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nSara was alone in her grandparents' house, so she decided to explore.\nYour story must include:\n• a door\n• something unexpected",
          mustInclude: ['a door', 'something unexpected'],
          taskLine: 'Write your story.',
        },
      ],
    },
  },
};
