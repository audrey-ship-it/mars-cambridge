// FCE Writing (Paper 2) — Cambridge First for Schools 3 · Test 4（书页眉印为 Test 4，与仓库编号一致）
// 题面逐字转录自书 86–87（PDF 第 88–89 页，扫描件视觉转录；PDF 页码 = 书页 + 2，Part 2 页取自 s3-l-t4/page-089.png）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：essay 方框陈述句书原印无引号（与 Test 2/3 的引语式不同），逐字保留；
// Part 2 仅 Q2–Q4（2015 改版题型，无 set book Q5）；Q3 原文为 "write a review"（无 "us"，与 Test 2/3 的 review 题措辞不同，逐字保留）。

export default {
  meta: {
    id: 'fce-schools-3-test4-writing',
    examKey: 'fce-schools-3-test4',
    title: 'FCE 校园版真题 3 · Test 4 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 4,
    paper: 'writing',
    pages: '书 86–87（PDF 88–89）',
    source: 'FIRST3  青少版.pdf',
    answerSource: '无（写作无标准答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: 'In your English class you have been talking about schools. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: 'Some people say that schools will be very different in the future. What do you think?',
      notes: ['the teachers', 'the subjects', '...(your own idea)'],
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
          context: 'You see this announcement in an international e-magazine for teenagers:',
          boxTitle: 'Articles wanted',
          boxHeading: 'The Weather!',
          prompt: 'What is your favourite kind of weather and what kind of weather do you hate? Why? What effect does different weather have on your mood?\nThe best articles will appear online next week.',
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You recently saw this notice in an English magazine:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Family-friendly restaurants',
          prompt: 'Do you know a restaurant which is especially good for families with children of different ages? If so, write a review describing the restaurant, explaining what kind of food it serves and saying why it is a good restaurant for the whole family.\nWe will post the best reviews on our website.',
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'email',
          context: 'You have received this email from your English friend, Arthur:',
          prompt: "Hi!\nMy older brother, Stan, is going to your country next year to study. He wants to find out if there are any customs or traditions he should know about. Also, he's not sure whether to live in an apartment on his own or to live with a local family. Which would be best and why?\nThanks\nArthur",
          taskLine: 'Write your email.',
        },
      ],
    },
  },
};
