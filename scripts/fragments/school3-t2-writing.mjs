// FCE Writing (Paper 2) — Cambridge First for Schools 3 · Test 2（书页眉印为 Test 2，与仓库编号一致）
// 题面逐字转录自书 42–43（PDF 第 44–45 页，扫描件视觉转录；PDF 页码 = 书页 + 2，Part 2 页取自 s3-l-t2/page-045.png）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：essay 方框为引语 + "Do you agree?"；
// Part 2 仅 Q2–Q4（2015 改版题型，无 set book Q5）；Q2 为 email（Sam 咨询如何面对兴趣不同的朋友），Q3 为 review。

export default {
  meta: {
    id: 'fce-schools-3-test2-writing',
    examKey: 'fce-schools-3-test2',
    title: 'FCE 校园版真题 3 · Test 2 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 2,
    paper: 'writing',
    pages: '书 42–43（PDF 44–45）',
    source: 'FIRST3  青少版.pdf',
    answerSource: '无（写作无标准答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: 'In your English class you have been talking about rules at home. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: "'It's very important for young people to have rules at home.' Do you agree?",
      notes: ['jobs around the house', 'behaviour during meal-times', '...(your own idea)'],
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
          context: 'You have received this email from your English friend, Sam:',
          prompt: "Hi\nA friend of mine never seems to want to do the same things as I do, and I always end up doing things I'm not that interested in. I'm not sure what I should do about this as we actually get on really well with each other.\nCan you give me some advice?\nThanks\nSam",
          taskLine: 'Write your email.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You recently saw this notice in an international magazine for teenagers:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Family holidays',
          prompt: 'Do you know a good place to have a family holiday? If so, write us a review describing the place, explaining the benefits for different members of a family and saying why you especially recommend it.\nThe best reviews will be published next month.',
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this announcement in an international magazine for schools:',
          boxTitle: 'Stories wanted',
          prompt: 'We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nMark was walking along the beach one Saturday morning.\nYour story must include:\n• a sound\n• a rescue',
          mustInclude: ['a sound', 'a rescue'],
          taskLine: 'Write your story.',
        },
      ],
    },
  },
};
