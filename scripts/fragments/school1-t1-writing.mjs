// FCE Writing (Paper 2) — Cambridge First Certificate English Tests for Schools 1 · Test 1
// 题面逐字转录自书 20–21（PDF 第 19–20 页，扫描件视觉转录）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：Part 1 essay 题干 "What is the best way for you to spend your free time?" 无引号，notes 第 3 条为点线 + "(your own idea)"；
// Part 2 含 Q2–Q5（旧版 FCE 题型，含 set book 选答 Q5）；Q3 为 letter，Q5 为 Macbeth 议论文。

export default {
  meta: {
    id: 'fce-schools-1-test1-writing',
    examKey: 'fce-schools-1-test1',
    title: 'FCE 校园版真题 1 · Test 1 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 1,
    paper: 'writing',
    pages: '书 20–21（PDF 19–20）',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '官方 Writing assessment scale（无固定答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style.',
      type: 'essay',
      context: 'In your English class you have been talking about the best way to spend your free time. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: 'What is the best way for you to spend your free time?',
      notes: ['who you spend your free time with', 'what you do', '...(your own idea)'],
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
          context: 'You see this announcement in an international magazine for teenagers.',
          boxTitle: 'Articles wanted',
          boxHeading: 'An Interesting Festival',
          prompt: 'We are looking for articles about interesting festivals in different countries. Describe one festival in your country and explain what people do. Say why you think it is an interesting festival.\nThe best articles will appear online next week.',
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'letter',
          context: 'This is part of a letter you have received from your English friend, Tom.',
          prompt: "As you know, I've been studying science and languages at school for several years now. Next year I have to choose one or the other for my main course of study. Which do you think I should choose and why?\nWrite soon,\nTom",
          taskLine: 'Write your letter.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this announcement in a new English-language magazine for schools.',
          boxTitle: 'Stories wanted',
          prompt: 'We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nLara saw something unusual on the grass and she went to take a closer look.\nYour story must include:\n• a discovery\n• a journey',
          mustInclude: ['a discovery', 'a journey'],
          taskLine: 'Write your story.',
        },
        {
          q: 5,
          genre: 'essay',
          context: 'Answer the following question based on the title below.\nMacbeth by William Shakespeare',
          prompt: 'Your English class has had a discussion about the characters in the story of Macbeth. Now your teacher has asked you to write an essay for homework answering these questions:\n• How does the behaviour of Macbeth change during the story?\n• Why does this happen?',
          taskLine: 'Write your essay.',
        },
      ],
    },
  },
};
