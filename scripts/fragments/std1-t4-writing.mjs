// Cambridge English First 1（标准版1）Test 4 Writing
// 逐字转录自 cen_first_1_with_answers .pdf（用户原件扫描版）PDF 85–86（书 86–87）
// 本书官方未附范文，故不含 modelAnswer（评分量表见书 107–108）
export default {
  meta: {
    id: 'fce-standard-1-test4-writing',
    title: 'FCE 标准版真题 1 · Test 4 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Writing',
    pages: '书 86–87',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（评分量表见书 107–108）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction:
        'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context:
        'In your English class you have been talking about animals and the environment. Now, your English teacher has asked you to write an essay. Write an essay using all the notes and give reasons for your point of view.',
      prompt:
        "'We should do everything we can to save animals which are in danger of disappearing from our planet.' Do you agree?",
      notes: [
        'the kind of animals which are in danger',
        'the reasons for protecting these animals',
        '.................. (your own idea)',
      ],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction:
        'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'article',
          context: 'You see this announcement on an English-language website.',
          boxTitle: 'ARTICLES WANTED',
          boxHeading: 'What are the most important things for young children to learn?',
          prompt:
            "How to make friends? Telling the truth? Or something else? Write us an article saying what things you think are important for young children to learn, and why?\nThe best articles will be posted on our website.",
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You recently saw this notice on an English-language website called Music Live.',
          boxTitle: 'Reviews Wanted!',
          boxHeading: "A concert I've been to",
          prompt:
            "Write us a review of a concert you've been to. It could be a pop, rock or classical concert, or one with a different type of music. Include information on the music, the place and the atmosphere.\nThe best reviews will be posted on the website next month.",
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'report',
          context:
            'A group of English students is coming to your college. Your English teacher has asked you to write a report on one local tourist attraction. In your report you should:',
          prompt:
            '• describe the attraction\n• say what you can do there\n• explain why you think students would enjoy visiting it.',
          taskLine: 'Write your report.',
        },
      ],
    },
  },
};
