// FCE Writing (Paper 2) — Test 3 from 《Cambridge English First 1（标准版1）》
// 题面逐字转录自书 64–65 页（PDF 页 63–64）扫描件视觉转录。
// 本书官方不附范文，故无 modelAnswer 字段。

export default {
  meta: {
    id: 'fce-standard-1-test3-writing',
    title: 'FCE 标准版真题 1 · Test 3 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Writing',
    pages: '书 64–65',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（评分量表见书 107–108）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction:
        'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Write your essay. You must use grammatically correct sentences with accurate spelling and punctuation in a style appropriate for the situation.',
      type: 'essay',
      context:
        'In your English class you have been talking about work. Now, your English teacher has asked you to write an essay. Write an essay using all the notes and give reasons for your point of view.',
      prompt: 'Is it better to earn a lot of money or to enjoy your job?',
      notes: ['how much time is spent at work', 'the type of work which is done', '...(your own idea)'],
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
          genre: 'report',
          context:
            'Your college would like to start an English-language film club where people can go to watch films in English and discuss them. Your English teacher has asked you to write a report giving your suggestions about:',
          prompt:
            '• what type of films should be shown\n• how often the film club should meet\n• how the film club should be advertised.',
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this announcement on an English-language website.',
          boxTitle: 'ARTICLES WANTED',
          boxHeading: 'What does happiness mean to you?',
          prompt:
            'Tell us about the kinds of things that make you feel happy, and why?\nWrite us an article answering these questions.\nThe best articles will be posted on our website.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'letter',
          context: 'You have seen this advertisement in your local English language newspaper.',
          boxTitle: 'Round the world trip – Travel Competition',
          prompt:
            'Do you like adventure? Would you like a chance to travel?\nWe need one more person to join a small group on a trip around the world.\nWrite to Mrs Hopkins, the organizer of the trip, telling her:\n• why you would like to go on the trip\n• what skills you have which would be useful on the trip\n• what previous experience you have of travelling (if any).',
          taskLine: 'Write your letter of application.',
        },
      ],
    },
  },
};
