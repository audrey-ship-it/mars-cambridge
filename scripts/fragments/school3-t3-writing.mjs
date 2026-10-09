// FCE Writing (Paper 2) — Cambridge First for Schools 3 · Test 3（书页眉印为 Test 3，与仓库编号一致）
// 题面逐字转录自书 64–65（PDF 第 66–67 页，扫描件视觉转录；PDF 页码 = 书页 + 2，Part 2 页取自 s3-l-t3/page-067.png）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：essay 方框为引语 + "Do you agree?"；
// Part 2 仅 Q2–Q4（2015 改版题型，无 set book Q5）；Q2 为 story，Q3 方框标题 "School Rules!"，Q4 为 review。

export default {
  meta: {
    id: 'fce-schools-3-test3-writing',
    examKey: 'fce-schools-3-test3',
    title: 'FCE 校园版真题 3 · Test 3 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 3,
    paper: 'writing',
    pages: '书 64–65（PDF 66–67）',
    source: 'FIRST3  青少版.pdf',
    answerSource: '无（写作无标准答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: 'In your English class you have been talking about the opportunities teenagers have. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: "'Young people nowadays have many more opportunities than young people had in the past.' Do you agree?",
      notes: ['education', 'travel', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'story',
          context: 'You have seen this announcement in an English-language magazine for teenagers:',
          boxTitle: 'Stories wanted',
          prompt: 'We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nThis was our first camping trip and we were really excited.\nYour story must include:\n• a storm\n• a problem',
          mustInclude: ['a storm', 'a problem'],
          taskLine: 'Write your story.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this notice in an international magazine for teenagers:',
          boxTitle: 'Articles wanted',
          boxHeading: 'School Rules!',
          prompt: 'Which rules at your school do you agree with and which ones do you think are unfair?\n\nWhy is it important for students to have rules at school?\n\nThe best articles will be published next month.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'review',
          context: 'You recently saw this notice on a shopping website:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Games and Toy Shops',
          prompt: 'Do you know a good shop which sells games or toys? If so, write us a review describing the shop and what it sells. Explain why the shop is a particularly good place to buy games or toys.\nThe best reviews will be published next month.',
          taskLine: 'Write your review.',
        },
      ],
    },
  },
};
