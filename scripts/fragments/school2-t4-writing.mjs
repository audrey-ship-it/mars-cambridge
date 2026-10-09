// FCE Writing (Paper 2) — Cambridge First for Schools 2 · Test 4（书页眉印为 Test 8，沿用仓库惯例 Test 4 = 原书 Test 8）
// 题面逐字转录自书 86–87（PDF 第 87–88 页，扫描件视觉转录）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：essay 方框为两行加粗句（陈述句 + "Do you agree?"），prompt 以换行保留；
// Part 2 仅 Q2–Q4（2015 改版题型，无 set book Q5）；Q3 为 review（"Reviews wanted" 方框，
// 末句书原印为 "The best articles will be posted on the website."，逐字保留）；Q4 方框无 "We are looking for..." 引言，逐字保留。

export default {
  meta: {
    id: 'fce-schools-2-test4-writing',
    examKey: 'fce-schools-2-test4',
    title: 'FCE 校园版真题 2 · Test 4 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 4,
    paper: 'writing',
    pages: '书 86–87（PDF 87–88）',
    source: 'Cambridge First for Schools 2 FCE 校园版真题2.pdf',
    answerSource: '官方 Writing assessment scale（无固定答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: 'In your English class you have been talking about free time. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: 'Having a chat with friends in your free time can be as important as studying.\nDo you agree?',
      notes: ['learning to get on with people', 'wasting valuable time', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'article',
          context: 'You see a notice in an online English magazine.',
          boxTitle: 'Articles wanted',
          boxHeading: 'A Famous Guest!',
          prompt: "If you could invite one famous person to your party, who would you choose? Write us an article explaining why you would choose this famous person and what you would like this person to do at your party.\nThe best articles will be published in next month's magazine.",
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You see this notice in an online English magazine.',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Science Fiction Films',
          prompt: "Have you seen a science fiction film recently? Write us a review of the film giving information about the story, the actors and any special effects which were used. Explain why you would or wouldn't recommend the film to other teenagers.\nThe best articles will be posted on the website.",
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this notice in an English magazine.',
          boxTitle: 'Stories wanted',
          prompt: 'Your story must begin with this sentence:\nNick was so excited as he sat on his bicycle, waiting for the race to begin.\nYour story must include:\n• an animal\n• a reward',
          mustInclude: ['an animal', 'a reward'],
          taskLine: 'Write your story.',
        },
      ],
    },
  },
};
