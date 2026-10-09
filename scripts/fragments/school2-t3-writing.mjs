// FCE Writing (Paper 2) — Cambridge First for Schools 2 · Test 3（书页眉印为 Test 7，沿用仓库惯例 Test 3 = 原书 Test 7）
// 题面逐字转录自书 64–65（PDF 第 65–66 页，扫描件视觉转录）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：essay 题干无引号，notes 第 3 条为点线 + "(your own idea)"；
// Part 2 仅 Q2–Q4（2015 改版题型，无 set book Q5）；Q2 为 article（notice 方框），Q3 为 email。

export default {
  meta: {
    id: 'fce-schools-2-test3-writing',
    examKey: 'fce-schools-2-test3',
    title: 'FCE 校园版真题 2 · Test 3 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 3,
    paper: 'writing',
    pages: '书 64–65（PDF 65–66）',
    source: 'Cambridge First for Schools 2 FCE 校园版真题2.pdf',
    answerSource: '官方 Writing assessment scale（无固定答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: 'In your English class you have been talking about becoming independent. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: 'Do you think that teenagers these days need to be more independent?',
      notes: ['choosing their own entertainment', 'having their own money', '...(your own idea)'],
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
          context: 'You see this notice in your school English magazine.',
          boxTitle: 'Articles wanted',
          boxHeading: 'A Special Photograph',
          prompt: "Do you have a photograph which is important to you? Write an article describing the photo, explaining when and where it was taken, and why it's so special to you.\nThe best articles will be published next month.",
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'email',
          context: 'You receive this email from your English friend, Eliza.',
          prompt: "Hi!\nNext year I have to decide whether to study history or geography at school. Actually I enjoy both subjects, but I can only do one on my timetable. I don't know which subject to choose. I'd really like some advice.\nMany thanks\nEliza",
          taskLine: 'Write your email.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this announcement in an English-language magazine.',
          boxTitle: 'Stories wanted',
          prompt: "We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nIt was the day when Luke's family were moving to their new home.\nYour story must include:\n• a decision\n• a friend",
          mustInclude: ['a decision', 'a friend'],
          taskLine: 'Write your story.',
        },
      ],
    },
  },
};
