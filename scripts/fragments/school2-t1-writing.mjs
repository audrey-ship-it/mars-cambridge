// FCE Writing (Paper 2) — Cambridge First for Schools 2 · Test 1（书页眉印为 Test 5，沿用仓库惯例 Test 1 = 原书 Test 5）
// 题面逐字转录自书 20–21（PDF 第 21–22 页，扫描件视觉转录）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：essay 题干无引号，notes 第 3 条为点线 + "(your own idea)"；
// Part 2 仅 Q2–Q4（2015 改版题型，无 set book Q5）；Q3 为 letter。

export default {
  meta: {
    id: 'fce-schools-2-test1-writing',
    examKey: 'fce-schools-2-test1',
    title: 'FCE 校园版真题 2 · Test 1 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 1,
    paper: 'writing',
    pages: '书 20–21（PDF 21–22）',
    source: 'Cambridge First for Schools 2 FCE 校园版真题2.pdf',
    answerSource: '官方 Writing assessment scale（无固定答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about teenagers' lives. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: 'Who has more effect on the choices teenagers make – friends or parents?',
      notes: ['clothes and fashion', 'studying', '...(your own idea)'],
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
          context: 'You see this announcement in an international online magazine for teenagers.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Having pets – a good or bad idea?',
          prompt: "We're looking for articles giving us your opinions on having pets. What do you think are the advantages and disadvantages of having pets?\nThe best articles will appear online next week.",
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'letter',
          context: 'You have just received this letter from your English friend, Lucy.',
          prompt: 'Hi,\nMy school wants to raise money for some new sports equipment. Have you got any ideas about the different things we could do to raise money? Please could you also give me some advice about how to organize events.\nMany thanks,\nLucy',
          taskLine: 'Write your letter.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this announcement in an international magazine for schools.',
          boxTitle: 'Stories wanted',
          prompt: 'We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nNick had been out in the sailing boat before, but this was his first trip on his own.\nYour story must include:\n• a noise\n• a surprise',
          mustInclude: ['a noise', 'a surprise'],
          taskLine: 'Write your story.',
        },
      ],
    },
  },
};
