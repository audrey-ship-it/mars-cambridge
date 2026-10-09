// FCE Writing (Paper 2) — Cambridge First Certificate English Tests for Schools 1 · Test 3
// 题面逐字转录自书 64–65（PDF 第 63–64 页，扫描件视觉转录）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：Part 1 essay 题干 'Playing computer games is a complete waste of time.' Do you agree? 含单引号；
// Part 2 含 Q2–Q5，Q4 故事开头 "Robert was excited as he jumped into the boat."，Q5 为 Touching the Void 友谊主题文章。

export default {
  meta: {
    id: 'fce-schools-1-test3-writing',
    examKey: 'fce-schools-1-test3',
    title: 'FCE 校园版真题 1 · Test 3 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 3,
    paper: 'writing',
    pages: '书 64–65（PDF 63–64）',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '官方 Writing assessment scale（无固定答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style.',
      type: 'essay',
      context: 'In your English class you have been talking about playing computer games. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: "'Playing computer games is a complete waste of time.' Do you agree?",
      notes: ['what you can learn by playing computer games', 'what you can do instead of playing computer games', '...(your own idea)'],
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
          context: 'You see this announcement in an English-language magazine for teenagers.',
          boxTitle: 'Articles wanted',
          boxHeading: 'What makes a perfect school?',
          prompt: 'Write an article telling us what you think. Write about the teachers, the lessons, the building and anything else you think is important.\nWe will publish the best articles in next month\'s magazine.',
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You recently saw this notice on an English-language website called Teen Fun.',
          boxTitle: 'Reviews wanted',
          boxHeading: 'A Great Place to Go',
          prompt: "We're looking for reviews of places that young people enjoy going to. It could be a theme park, a leisure centre, a club or somewhere else.\nTell us about a place you go to, what you can do there, and what you like most about it.\nThe best reviews will be put on our website next month.",
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this announcement in an international magazine for teenagers.',
          boxTitle: 'Stories wanted',
          prompt: 'We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nRobert was excited as he jumped into the boat.\nYour story must include:\n• an escape\n• a cave',
          mustInclude: ['an escape', 'a cave'],
          taskLine: 'Write your story.',
        },
        {
          q: 5,
          genre: 'article',
          context: 'Answer the following question based on the title below.\nTouching the Void by Joe Simpson\n\nYou see this announcement in your school English magazine:',
          boxTitle: 'Articles wanted',
          prompt: 'We are looking for articles about friendship in the book Touching the Void.\nHow important is friendship in the story?\nHow does the friendship between Joe and Simon change?',
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};
