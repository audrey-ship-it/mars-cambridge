// FCE Writing (Paper 2) — Cambridge English First 1（标准版1）Test 2
// 题面逐字转录自书 42–43（PDF 第 41–42 页，扫描件视觉转录）。
// 本册官方不附写作范文，故不写 modelAnswer。

export default {
  meta: {
    id: 'fce-standard-1-test2-writing',
    title: 'FCE 标准版真题 1 · Test 2 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Writing',
    pages: '书 42–43',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（评分量表见书 107–108）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: 'In your English class you have been talking about relationships. Now, your English teacher has asked you to write an essay. Write an essay using all the notes and give reasons for your point of view.',
      prompt: 'Which is more important – friends or family?',
      notes: ['who you can enjoy yourself with', 'who will help you when you have problems', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'review',
          context: 'You recently saw this notice on an English-language website called Book World.',
          boxTitle: 'Reviews wanted!',
          boxHeading: 'The best thriller I have ever read!',
          prompt:
            "Have you read a thriller recently that you think other readers would enjoy?\n" +
            "Write us a review of the book. You should include information on:\n" +
            "• what it's about\n" +
            "• why it's exciting\n" +
            "• who you would recommend it to.\n" +
            "The best reviews will be posted on the website next month.",
          taskLine: 'Write your review.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this announcement on an English-language website.',
          boxTitle: 'ARTICLES WANTED',
          boxHeading: 'The most interesting weekend of my life',
          prompt:
            'Write us an article about the most interesting weekend of your life. Explain what happened and where, and why it was so interesting.\n' +
            'The best articles will be posted on our website.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'email',
          context: 'You have received this email from your English-speaking friend, Kim.',
          prompt:
            "It's really kind of you to let me stay at your flat while you're on holiday. Please could you let me know how to get the keys? And could you also tell me anything else I need to know about the flat and whether there's anywhere near that I can buy food?\n" +
            'Thanks, Kim',
          taskLine: 'Write your email.',
        },
      ],
    },
  },
};
