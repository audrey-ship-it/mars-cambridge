// FCE Writing (Paper 2) — Cambridge First Certificate English Tests for Schools 1 · Test 2
// 题面逐字转录自书 42–43（PDF 第 41–42 页，扫描件视觉转录）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：Part 1 essay 题干 "Is it better to go to a large school or a small school?" 无引号；
// Part 2 含 Q2–Q5，Q5 为 Touching the Void 书评。

export default {
  meta: {
    id: 'fce-schools-1-test2-writing',
    examKey: 'fce-schools-1-test2',
    title: 'FCE 校园版真题 1 · Test 2 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 2,
    paper: 'writing',
    pages: '书 42–43（PDF 41–42）',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '官方 Writing assessment scale（无固定答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style.',
      type: 'essay',
      context: 'In your English class you have been comparing large and small schools. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: 'Is it better to go to a large school or a small school?',
      notes: ['studying and learning', 'making friends', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–5 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'article',
          context: 'You see this announcement in your school magazine.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Finding time to keep fit and healthy',
          prompt: 'How do you manage to keep fit and healthy as well as study and spend time with your friends? Write an article telling us what you think. Write about the food you eat, the exercise you take, and anything else you think is important.\nThe best articles will be published in next month\'s school magazine.',
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'email',
          context: 'You have received this email from your Australian friend, Sarah.',
          prompt: "We're doing a project in our class about where young people in different countries go for their holidays. Where do you usually go for your holidays and what do you do there? Do you enjoy this kind of holiday?\nThanks for your help!\nSarah",
          taskLine: 'Write your email.',
        },
        {
          q: 4,
          genre: 'review',
          context: 'You recently saw this notice in an English-language magazine for teenagers.',
          boxTitle: 'Reviews wanted',
          boxHeading: 'A Good Café to Meet Friends in!',
          prompt: "We're doing a guide about cafés where teenagers can go to meet friends and relax. Tell us about a café you know. Write about where it is, the kind of food it serves and the atmosphere there. Tell us why you think other people your age would like it.\nThe best reviews will be published next month.",
          taskLine: 'Write your review.',
        },
        {
          q: 5,
          genre: 'review',
          context: 'Answer the following question based on the title below.\nTouching the Void by Joe Simpson',
          prompt: 'Your English book club is looking for reviews of adventure stories. Write a review of Touching the Void, saying why you would recommend it.',
          taskLine: 'Write your review.',
        },
      ],
    },
  },
};
