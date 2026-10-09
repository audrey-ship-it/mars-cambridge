// FCE 标准版真题 1–4 · Writing（16 套，每册 4 套 × Part 1 议论文 + Part 2 三选一）
// 来源（用户原件，扫描版无文本层，逐页视觉转录 + 官方 Key 中 Task 信息核对）:
//   标准版1: Writing 起始于书页 20/42/64/86；Task 信息见各册 Key 部分
// 数组顺序: 册1 T1..T4, 册2 T1..T4, 册3 T1..T4, 册4 T1..T4
// meta.id 规范: 'fce-standard-<册>-test<套>-writing'; examKey: 'fce-standard-<册>-test<套>'


// ===== 标准版1 · Test 1（书页 20–21；本册无官方范文） =====
const STD1_W1 = {
  meta: {
    id: 'fce-standard-1-test1-writing',
    title: 'FCE 标准版真题 1 · Test 1 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Writing',
    pages: '书 20–21',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（评分量表见书 107–108）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about life in the past. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and give reasons for your point of view.\n\nWrite your essay. You must use grammatically correct sentences with accurate spelling and punctuation in a style appropriate for the situation.",
      prompt: "'Life is better today than it was 100 years ago.' Do you agree?",
      notes: ['health', 'entertainment', '.................. (your own idea)'],
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
          context: 'You recently saw this notice on an English-language website called TV Gold:',
          boxTitle: 'Reviews wanted!',
          boxHeading: 'A TV documentary I learnt a lot from.',
          prompt: "Have you seen an interesting TV documentary recently that you learnt a lot from? Write us a review of the documentary. You should explain what the documentary was about, tell us what you learnt from it and say whether other people would find it interesting too.\n\nThe best reviews will be posted on the website next month.",
          taskLine: 'Write your review.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this announcement on an English-language travel website.',
          boxTitle: 'ARTICLES WANTED',
          boxHeading: 'A day in the city!',
          prompt: "We are looking for articles about how a visitor could have a great time in a city in your country in just one day.\n\nWrite us an article telling us what a visitor can do, what they can see and how they can travel around.\nThe best articles will be posted on our website.",
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'report',
          context: 'Your English teacher has asked you to write a report on a part-time or holiday job that you have done. The report will appear in the college English-language magazine.',
          prompt: 'In your report, you should\n• describe the job\n• explain what you learnt from it\n• say whether you would recommend other students to do it.',
          taskLine: 'Write your report.',
        },
      ],
    },
  },
};

// ===== 标准版1 · Test 2（书页 42–43；本册无官方范文） =====
// FCE Writing (Paper 2) — Cambridge English First 1（标准版1）Test 2
// 题面逐字转录自书 42–43（PDF 第 41–42 页，扫描件视觉转录）。
// 本册官方不附写作范文，故不写 modelAnswer。
const STD1_W2 = {
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

// ===== 标准版1 · Test 3（书页 64–65；本册无官方范文） =====
// FCE Writing (Paper 2) — Test 3 from 《Cambridge English First 1（标准版1）》
// 题面逐字转录自书 64–65 页（PDF 页 63–64）扫描件视觉转录。
// 本书官方不附范文，故无 modelAnswer 字段。
const STD1_W3 = {
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

// ===== 标准版1 · Test 4（书页 86–87；本册无官方范文） =====
// Cambridge English First 1（标准版1）Test 4 Writing
// 逐字转录自 cen_first_1_with_answers .pdf（用户原件扫描版）PDF 85–86（书 86–87）
// 本书官方未附范文，故不含 modelAnswer（评分量表见书 107–108）
const STD1_W4 = {
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

// FCE Writing (Paper 2) — Cambridge English First 2（标准版2）Test 1（书内印作 Test 5）
// 题面逐字转录自书 20–21（PDF 第 21–22 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对）。
// 答案/范文来源：本书官方未附写作范文。已核实 Test 5 Key（书 120 / PDF 121）起的 Key 区
//（书 119–159 / PDF 120–160）：各套 Key 的 Writing 栏仅有说明
// "Candidate responses are marked using the assessment scale on pages 107–108."，无 sample/model answers。
// 转录说明：Essay notes 第 3 条原文为三点无空格 "...(your own idea)"；含撇号字符串一律用双引号包裹。

const STD2_W1 = {
  meta: {
    id: 'fce-standard-2-test1-writing',
    title: 'FCE 标准版真题 2 · Test 1 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Writing',
    pages: '书 20–21',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（Test 5 Key 书 120 / PDF 121 的 Writing 栏仅注明按书 107–108 评分量表评分；Key 区书 119–159 / PDF 120–160 已逐页核实无 sample answers）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about modern entertainment. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and giving reasons for your point of view.",
      prompt: 'Some people say that young people can only entertain themselves in front of a screen. What do you think?',
      notes: ['why screen entertainment is so popular', 'books and reading', '...(your own idea)'],
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
          context: 'You have received an email from your English-speaking friend, Tom:',
          prompt: "As you know, my mum and dad own a restaurant and want me to work there when I leave college. However, I'm still really keen to be a journalist. What do you think I should do?",
          taskLine: 'Write your email.',
        },
        {
          q: 3,
          genre: 'report',
          context: 'Your local government wants to improve your town centre and make it better for local people. Your college principal has asked students to write a report on the situation to send to the local government. In your report you should:',
          mustInclude: ['Describe some of the problems in the town centre', 'Suggest, with reasons, what improvements should be made to solve these problems'],
          taskLine: 'Write your report.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          prompt: "We're looking for articles about good luck.\nWrite an article telling us about something lucky that happened to you and what effect this had.",
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 2（标准版2）Test 2（书内印作 Test 6）
// 题面逐字转录自书 42–43（PDF 第 43–44 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对）。
// 答案/范文来源：本书官方未附写作范文。已核实 Test 6 Key（书 132 / PDF 133）的 Writing 栏
// 仅注明 "Candidate responses are marked using the assessment scale on pages 107–108."，
// 且 Key 区书 119–159 / PDF 120–160 逐页核实无 sample/model answers。
// 转录说明：Q2 邮件破折号、Q4 "organizer" 拼写均按原文；含撇号字符串一律用双引号包裹。

const STD2_W2 = {
  meta: {
    id: 'fce-standard-2-test2-writing',
    title: 'FCE 标准版真题 2 · Test 2 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Writing',
    pages: '书 42–43',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（Test 6 Key 书 132 / PDF 133 的 Writing 栏仅注明按书 107–108 评分量表评分；Key 区书 119–159 / PDF 120–160 已逐页核实无 sample answers）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about education. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and giving reasons for your point of view.",
      prompt: "'Teachers need more than just a good knowledge of their subject.' What do you think?",
      notes: ['patience', 'friendliness', '...(your own idea)'],
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
          context: 'You have received an email from your English-speaking friend, Robert:',
          prompt: "Hi!\nMy parents are both 50 next month and I want to do something special for them – I can't decide whether to organise a surprise birthday party or take them away to a hotel for the weekend. What do you think I should do?",
          taskLine: 'Write your email.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You recently saw this notice on an English-language website called TV Watch:',
          boxTitle: 'Reviews wanted!',
          boxHeading: 'TV series',
          prompt: "Is there a TV series which you watch regularly?\nWrite a review of the series explaining what it is about, why you like it and who you would recommend it to.",
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'letter',
          context: 'You see this advertisement on your college noticeboard:',
          boxTitle: 'Wanted: English-speaking guide',
          prompt:
            "A group of English students is coming to your town for a week. The tourist office is looking for a guide to show the students the town. Write a letter of application to the organizer of the tour, Mrs Isobel Parks, explaining:\n" +
            '• Which places you would take the students to visit\n' +
            '• Why you would be the best person for the job',
          taskLine: 'Write your letter.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 2（标准版2）Test 3（书内印作 Test 7）
// 题面逐字转录自书 64–65（PDF 第 65–66 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对）。
// 答案/范文来源：本书官方未附写作范文。已核实 Test 7 Key（书 144 / PDF 145）的 Writing 栏
// 仅注明 "Candidate responses are marked using the assessment scale on pages 107–108."，
// 且 Key 区书 119–159 / PDF 120–160 逐页核实无 sample/model answers。
// 转录说明：Q2 情境句原文即 "You see this notice in an English-language website called
// Restaurant World:"（介词 in 系原书印刷，非转录笔误，已放大核对）；该框标题 "Reviews wanted"
// 无感叹号（区别于 Test 6 的 "Reviews wanted!"）；Q3 "organizer" 拼写按原文。
// 含撇号字符串一律用双引号包裹。

const STD2_W3 = {
  meta: {
    id: 'fce-standard-2-test3-writing',
    title: 'FCE 标准版真题 2 · Test 3 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Writing',
    pages: '书 64–65',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（Test 7 Key 书 144 / PDF 145 的 Writing 栏仅注明按书 107–108 评分量表评分；Key 区书 119–159 / PDF 120–160 已逐页核实无 sample answers）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about famous people. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and giving reasons for your point of view.",
      prompt: "'The private lives of famous people should not be made public.' What do you think?",
      notes: ['public interest in famous people', 'famous people as role models', '...(your own idea)'],
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
          context: 'You see this notice in an English-language website called Restaurant World:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'A Wonderful Meal',
          prompt: "Write us a review of a restaurant where you had a wonderful meal. Tell us what the restaurant was like, describe what you ate and explain why it was so good.\nThe best reviews will be posted on the website.",
          taskLine: 'Write your review.',
        },
        {
          q: 3,
          genre: 'letter',
          context: 'You see this advertisement in your local newspaper:',
          boxTitle: 'Helpers wanted',
          prompt:
            "We are looking for people to work in a holiday club for English-speaking children (aged 4–8).\n" +
            "Write a letter to Mr Nick Jones, the club organizer, giving details of:\n" +
            '• your experience of working with children\n' +
            '• your knowledge of English\n' +
            '• why you would be suitable for the job.',
          taskLine: 'Write your letter of application.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Ambition',
          prompt: "What does ambition mean to you? What ambitions do you have? How do you intend to achieve them?\nThe best articles will be published in our magazine.",
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 2（标准版2）Test 4（书内印作 Test 8）
// 题面逐字转录自书 86–87（PDF 第 87–88 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对）。
// 答案/范文来源：本书官方未附写作范文。已核实 Test 8 Key（书 156 / PDF 157）的 Writing 栏
// 仅注明 "Candidate responses are marked using the assessment scale on pages 107–108."，
// 且 Key 区书 119–159 / PDF 120–160 逐页核实无 sample/model answers。
// 转录说明：Q2 报告要点在原书无底纹框、直接排 bullets，末条以句号结尾，用 mustInclude 承载；
// Q4 情境句原文为 "You see this in an English-language magazine."（句号结尾，无冒号）。
// 含撇号字符串一律用双引号包裹。

const STD2_W4 = {
  meta: {
    id: 'fce-standard-2-test4-writing',
    title: 'FCE 标准版真题 2 · Test 4 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Writing',
    pages: '书 86–87',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（Test 8 Key 书 156 / PDF 157 的 Writing 栏仅注明按书 107–108 评分量表评分；Key 区书 119–159 / PDF 120–160 已逐页核实无 sample answers）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about learning history at school. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and giving reasons for your point of view.",
      prompt: "'Everyone should be taught the history of their own country.' Do you agree?",
      notes: ['what people can learn from the past', "it's more important to think about the future", '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'report',
          context: 'Your English teacher has asked you to write a report on transport facilities in your area. In your report, you should:',
          mustInclude: ['describe the existing transport facilities', "explain what's good and bad about them", 'suggest how they could be improved in the future.'],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'email',
          context: 'You have received this email from your English-speaking friend, Susan:',
          prompt:
            "From: Susan\n" +
            "Subject: Money!\n" +
            "Hi!\n" +
            "I've just won £1,000 in a photography competition. I could spend it all on a fantastic holiday or I could put it in my bank account, or I could give it to my parents who don't have much money.\n" +
            'What do you suggest I do?\n' +
            'Thanks,\n' +
            'Susan',
          taskLine: 'Write your email.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this in an English-language magazine.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Being kind',
          prompt: "What does being kind mean to you?\nWhy is it important to be kind?\nWe will publish the best articles in the next magazine.",
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 3（标准版3）Test 1
// 题面逐字转录自书 20–21（PDF 第 22–23 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书 Marks and results 区（书 107–119 / PDF 109–121）官方收录 8 篇考生答卷样例（sample answers）
// 并附分项评分与考官点评，其中 Test 1 对应 Sample A（Q1 essay，书 109 / PDF 111）与 Sample B（Q2 report，书 110 / PDF 112）；
// 各套 Key（Test 1 Key 书 120–131 / PDF 122–133）的 Writing 栏仅注明按书 107–108 评分量表评分，
// Key 区已逐页核实，其余均为听力答案与 Transcript；书 168 起为空白 Sample answer sheets，全书无更多范文。
// 转录说明：Essay 第 3 条 note 原书为点线 + "(your own idea)"；Q2 情境句 "Now your English teacher" 无逗号、
// 末条 bullet 以句号结尾；Q3 框题 "Wanted: Restaurant reviewer"，编辑名 Phil Simms，末条 bullet "have a good level of English." 带句号；
// Q4 框眉 "Articles wanted" 无感叹号，主题词 Technology。含撇号字符串一律用双引号包裹。

const STD3_W1 = {
  meta: {
    id: 'fce-standard-3-test1-writing',
    title: 'FCE 标准版真题 3 · Test 1 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Writing',
    pages: '书 20–21',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '本书官方附考生答卷样例与考官点评：Marks and results 区（书 107–119 / PDF 109–121）含 8 篇 Writing sample answers，Test 1 对应 Sample A（Q1 essay，书 109 / PDF 111）与 Sample B（Q2 report，书 110 / PDF 112）；各套 Key（Test 1 Key 书 120–131 / PDF 122–133）Writing 栏仅注明按书 107–108 评分量表评分，Key 区逐页核实其余均为听力答案与 Transcript，无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about money for sports people. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'Famous sports people are paid too much money.' Do you agree?",
      notes: ['the entertainment they provide', 'how hard they work', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'report',
          context: 'In your English class you have been discussing why parks and green spaces are important for people living in towns and cities. Now your English teacher has asked you to write a report. In your report, you should:',
          mustInclude: ['describe the parks and green spaces in your area', 'recommend ways of improving these green spaces', "say why these improvements would have a positive effect on people's lives."],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'letter',
          context: 'You see this advertisement in the online magazine Global Food:',
          boxTitle: 'Wanted: Restaurant reviewer',
          prompt:
            'We are looking for someone to write reviews of restaurants in your area. You should:\n' +
            '• be able to take photographs to go with your reviews\n' +
            '• be interested in different types of food\n' +
            '• have a good level of English.\n' +
            'Write to the magazine editor, Phil Simms, explaining why you are suitable for the job.',
          taskLine: 'Write your letter of application.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Technology',
          prompt: 'Which piece of technology would our lives be better without? Why?\nThe best articles will be printed next month.',
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 3（标准版3）Test 2
// 题面逐字转录自书 42–43（PDF 第 44–45 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书 Marks and results 区（书 107–119 / PDF 109–121）官方收录 8 篇考生答卷样例（sample answers）
// 并附分项评分与考官点评，其中 Test 2 对应 Sample C（Q1 essay，书 111 / PDF 113）与 Sample D（Q4 email，书 112 / PDF 114）；
// 各套 Key（Test 2 Key 书 132–143 / PDF 134–145）的 Writing 栏仅注明按书 107–108 评分量表评分，
// Key 区已逐页核实，其余均为听力答案与 Transcript，无更多范文。
// 转录说明：essay prompt 原书无引号；Q2 框眉 "Reviews wanted" 无感叹号，"organised"/"practise" 为英式 s 拼写；
// Q4 邮件框含 "Subject: Where to study?" 行。含撇号字符串一律用双引号包裹。

const STD3_W2 = {
  meta: {
    id: 'fce-standard-3-test2-writing',
    title: 'FCE 标准版真题 3 · Test 2 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Writing',
    pages: '书 42–43',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '本书官方附考生答卷样例与考官点评：Marks and results 区（书 107–119 / PDF 109–121）含 8 篇 Writing sample answers，Test 2 对应 Sample C（Q1 essay，书 111 / PDF 113）与 Sample D（Q4 email，书 112 / PDF 114）；各套 Key（Test 2 Key 书 132–143 / PDF 134–145）Writing 栏仅注明按书 107–108 评分量表评分，Key 区逐页核实其余均为听力答案与 Transcript，无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about self-employment. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: 'Is it better to be self-employed or to work for somebody else?',
      notes: ['being independent', 'job security', '...(your own idea)'],
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
          context: 'You have seen this notice in an online holiday magazine:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Sports Holidays',
          prompt: "We're looking for reviews of organised holidays where people can practise sports.\nWrite a review of the holiday, including information about the place, the sports, and how well organised the holiday was.",
          taskLine: 'Write your review.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Being famous for something',
          prompt: 'If you could be famous for something, what would you like to be famous for? Why?\nThe best articles will be printed next month.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'email',
          context: 'You receive this email from your English-speaking friend, Nico:',
          prompt:
            "Subject: Where to study?\n" +
            "Hi\n" +
            "I'm going to university next year. I can either go to the university in my home town and live at home, or study in another area and live away from home.\n" +
            'What do you think I should do?\n' +
            'Write soon\n' +
            'Nico',
          taskLine: 'Write your email.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 3（标准版3）Test 3
// 题面逐字转录自书 64–65（PDF 第 66–67 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书 Marks and results 区（书 107–119 / PDF 109–121）官方收录 8 篇考生答卷样例（sample answers）
// 并附分项评分与考官点评，其中 Test 3 对应 Sample E（Q1 essay，书 113 / PDF 115）与 Sample F（Q2 article，书 114 / PDF 116）；
// 各套 Key（Test 3 Key 书 144–155 / PDF 146–157）的 Writing 栏仅注明按书 107–108 评分量表评分，
// Key 区已逐页核实，其余均为听力答案与 Transcript，无更多范文。
// 转录说明：essay prompt 原书带单引号；Q2 框题主题词 "Changes!" 带感叹号，而框眉 "Articles wanted"/"Reviews wanted"
// 均无感叹号；Q3 邮件框 "Subject: Learning English" 的冒号经 scale 8 放大核对确认；
// Q4 末条 bullet "why it's better than similar guidebooks." 带句号。含撇号字符串一律用双引号包裹。

const STD3_W3 = {
  meta: {
    id: 'fce-standard-3-test3-writing',
    title: 'FCE 标准版真题 3 · Test 3 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Writing',
    pages: '书 64–65',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '本书官方附考生答卷样例与考官点评：Marks and results 区（书 107–119 / PDF 109–121）含 8 篇 Writing sample answers，Test 3 对应 Sample E（Q1 essay，书 113 / PDF 115）与 Sample F（Q2 article，书 114 / PDF 116）；各套 Key（Test 3 Key 书 144–155 / PDF 146–157）Writing 栏仅注明按书 107–108 评分量表评分，Key 区逐页核实其余均为听力答案与 Transcript，无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about advertising. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'Advertising is a very good thing for society.' Do you agree?",
      notes: ['keeping people informed', 'encouraging competition between companies', '...(your own idea)'],
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
          context: 'You see this notice in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Changes!',
          prompt: 'Some people love changes, others dislike them. What about you?\nWhich changes in your life have had a big effect on you?\nThe best articles will be printed next month.',
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'email',
          context: 'This is an email you have received from your English-speaking friend, Marcus:',
          prompt:
            "Subject: Learning English\n" +
            "Hi\n" +
            "I'm researching the ways people learn English in different countries. Can you write and tell me about the most popular ways of learning English for people in your country?\n" +
            'Write soon\n' +
            'Marcus',
          taskLine: 'Write your email.',
        },
        {
          q: 4,
          genre: 'review',
          context: 'You have seen this notice on a travel website:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Guidebooks for tourists',
          prompt:
            "We're looking for reviews of a good guidebook to your city or country.\n" +
            'In your review you should include information about:\n' +
            '• the contents of the book\n' +
            '• what makes the book useful and interesting\n' +
            "• why it's better than similar guidebooks.",
          taskLine: 'Write your review.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 3（标准版3）Test 4
// 题面逐字转录自书 86–87（PDF 第 88–89 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书 Marks and results 区（书 107–119 / PDF 109–121）官方收录 8 篇考生答卷样例（sample answers）
// 并附分项评分与考官点评，其中 Test 4 对应 Sample G（Q1 essay，书 115 / PDF 117）与 Sample H（Q3 review，书 116 / PDF 118）；
// 各套 Key（Test 4 Key 书 156–167 / PDF 158–169）的 Writing 栏仅注明按书 107–108 评分量表评分，
// Key 区已逐页核实，其余均为听力答案与 Transcript；书 168 起为空白 Sample answer sheets，全书无更多范文。
// 转录说明：essay prompt 原书无引号；Q2 情境句为 "Your English teacher has now asked you..."，bullets 小写起首、末条带句号；
// Q3 情境句原文即 "You have seen this notice in an English online magazine:"（介词短语为 English online，非 English-language，已放大核对）；
// Q4 框题 "Wanted: Walking guides"，bullets "have experience of walking 15+ kms a day"、
// 末条带句号，"organiser"/"Ms Sally Morley" 按原文。含撇号字符串一律用双引号包裹。

const STD3_W4 = {
  meta: {
    id: 'fce-standard-3-test4-writing',
    title: 'FCE 标准版真题 3 · Test 4 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Writing',
    pages: '书 86–87',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '本书官方附考生答卷样例与考官点评：Marks and results 区（书 107–119 / PDF 109–121）含 8 篇 Writing sample answers，Test 4 对应 Sample G（Q1 essay，书 115 / PDF 117）与 Sample H（Q3 review，书 116 / PDF 118）；各套 Key（Test 4 Key 书 156–167 / PDF 158–169）Writing 栏仅注明按书 107–108 评分量表评分，Key 区逐页核实其余均为听力答案与 Transcript，无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about long-lasting products. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: 'Is it a good or bad thing to have products that last a long time?',
      notes: ['changing technology', 'fashion', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'report',
          context: 'In your English class you have been discussing the leisure activities, for example sports and clubs, available at your college. Your English teacher has now asked you to write a report. In your report, you should:',
          mustInclude: [
            'describe the current leisure facilities and activities in your college',
            'explain what improvements you would like to see',
            'say why these improvements would be popular with students.',
          ],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You have seen this notice in an English online magazine:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Interesting Exhibitions',
          prompt:
            'Have you been to an interesting exhibition recently? It could have been about art, photography, science or another subject. Write us a review:\n' +
            '• describing the exhibition\n' +
            '• explaining why you found it interesting\n' +
            '• saying which people you would recommend it to.\n' +
            'The best reviews will appear on the website.',
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'letter',
          context: 'You see this advertisement in a travel magazine:',
          boxTitle: 'Wanted: Walking guides',
          prompt:
            'We are looking for people to take tourist groups walking in your area. You should:\n' +
            '• have a broad knowledge of the countryside in your area\n' +
            '• have experience of walking 15+ kms a day\n' +
            '• be a good communicator in English.\n' +
            'To apply, write to the project organiser, Ms Sally Morley, explaining why you are suitable for the job.',
          taskLine: 'Write your letter of application.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 4（标准版4）Test 1
// 题面逐字转录自书 20–21（PDF 第 21–22 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书官方附考生答卷样例与考官点评：Sample Writing answers 章（书 100–108 / PDF 101–109）收录 8 篇考生答卷
// （Sample A–H），各篇后附 Content / Communicative Achievement / Organisation / Language 四维评分表与逐条考官点评；
// 其中 Test 1 对应 Sample A（Q1 essay，书 100–101 / PDF 101–102）与 Sample B（Q2 report，书 102 / PDF 103），
// 书 21/22 页脚箭头分别指向 p. 100（→ Sample A）与 p. 102（→ Sample B）；
// 章首页右上标注 "Additional sample Writing answers in Resource bank"，全书共 8 篇，恰为四套 Test 各 2 篇（每套 Part 1 一篇、Part 2 一篇）。
// 各套 Key（Test 1 Key 书 109 起 / PDF 110 起）已逐页核实：Reading and Use of English key（书 109 / PDF 110）与
// Listening key + tapescript（书 110–120 / PDF 111–121）中均无独立 Writing key 条目，Writing 仅按本书
// Sample Writing answers 章（书 100–108）官方样例与四维评分量表评分；书 168 起为空白 Sample answer sheets，全书无更多范文。
// 转录说明：Essay 框题引号内句号在引号内（'...to help other people.' Do you agree?）；第 3 条 note 原书为点线 + "(your own idea)"；
// Q2 末条 bullet 以句号结尾；Q3 框眉 "Articles wanted" 粗体无感叹号、标题 "A sense of humour"（英式拼写 humour）居中；
// Q4 框内 "Subject:" 粗体 + "Summer job"，邮件正文含撇号缩写 it'd / can't。含撇号字符串一律用双引号包裹。

const STD4_W1 = {
  meta: {
    id: 'fce-standard-4-test1-writing',
    title: 'FCE 标准版真题 4 · Test 1 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Writing',
    pages: '书 20–21',
    source: '标准版4 First 4.pdf（用户原件扫描版）',
    answerSource:
      '本书官方附考生答卷样例与四维评分表及考官点评：Sample Writing answers 章（书 100–108 / PDF 101–109）收录 8 篇 sample answers（Sample A–H），' +
      'Test 1 对应 Sample A（Q1 essay，书 100–101 / PDF 101–102）与 Sample B（Q2 report，书 102 / PDF 103），书页脚箭头指向 p. 100 / p. 102 可互证；' +
      'Test 1 Key（书 109 起 / PDF 110 起）已逐页核实仅含 Reading and Use of English key 与 Listening key + tapescript，无独立 Writing key 条目，' +
      'Writing 按本书样例章四维评分量表评分；书 168 起为空白 Sample answer sheets，全书无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about helping other people. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'Everyone should do something regularly in their life to help other people.' Do you agree?",
      notes: ['the importance of friends and family', 'giving something back to society', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'report',
          context: 'Your English teacher has asked you to write a report on the cycling facilities in your area for the college magazine. In your report, you should:',
          mustInclude: ['explain what facilities are available for cyclists', 'describe popular places for cyclists to visit', 'recommend ways in which cycling can be made safer in your area.'],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You have seen this announcement in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'A sense of humour',
          prompt: 'What does having a good sense of humour mean? How important is it to see the funny side of life? Are there any disadvantages to laughing a lot?\nThe best articles will be published in our magazine.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'email',
          context: 'You receive this email from your English friend, Hannah.',
          boxTitle: 'Subject: Summer job',
          prompt: "I want to get a job in the summer. My uncle works for a publishing company and says I could work there. It'd be really interesting but they can't afford to pay me much. Or I could work in the local supermarket. The pay would be better but it'd be really boring. What should I do?",
          taskLine: 'Write your email.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 4（标准版4）Test 2
// 题面逐字转录自书 40–41（PDF 第 41–42 页，扫描件视觉转录，scripts/fce8-render.mjs 分别以 scale 6 与 scale 7
// 两遍独立渲染逐字 OCR 核对，两遍结果一致）。
// 答案/范文来源：Sample Writing answers 章（书 100–108 / PDF 101–109）官方收录 8 篇考生答卷（Sample A–H），
// 各篇后附 Content / Communicative Achievement / Organisation / Language 四维评分表与逐条考官点评；
// 书 40 页脚箭头指向 p. 103、书 41 页脚箭头指向 p. 104；书 103 页（PDF 104）经真实读图确认为 Sample C
// （Test 2, Question 1 – Essay，sport 议论文范文，正文提及 learning teamwork / people who hate sport，与本题面互证）；
// p. 104 为 Test 2 Part 2 范文（按章内顺序应为 Sample D，样本字母未逐一核验）。
// 转录说明：Part 1 情境句 "Now, your English teacher" 带逗号，Q2 情境句 "Now your teacher" 无逗号；
// Essay notepad 内 notes 前有 "Write about:" 标签，第 3 条 note 原书为点线 + "(your own idea)"；
// Q2 三条 bullet 仅末条带句号；Q3 引导句以句号结尾（非冒号）、框眉 "Articles wanted" 衬线粗体、
// 标题 "Useful advice" 居中、正文为 "Write us an article explaining what the advice was."；
// Q4 引导句 "You have seen this advertisement online." 以句号结尾（非冒号）、框题 "Wanted – Tourist Website Designer"
// 为 en dash 两侧带空格、收件人 Adam Jones, Tourist Officer、末条 bullet 带句号。含撇号字符串一律用双引号包裹。

const STD4_W2 = {
  meta: {
    id: 'fce-standard-4-test2-writing',
    title: 'FCE 标准版真题 4 · Test 2 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Writing',
    pages: '书 40–41',
    source: '标准版4 First 4.pdf（用户原件扫描版）',
    answerSource:
      'Sample Writing answers 章（书 100–108 / PDF 101–109）官方样例与四维评分表及考官点评：' +
      '书 40 页脚箭头指向 p. 103、书 41 页脚箭头指向 p. 104；书 103 页（PDF 104）经真实读图确认为 Sample C' +
      '（Test 2, Question 1 – Essay，sport 议论文范文，正文提及 learning teamwork / people who hate sport，与本题面互证）；' +
      'p. 104 为 Test 2 Part 2 范文（按章内顺序应为 Sample D，样本字母未逐一核验）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about sport. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'All students should have to do sport at school.' Do you agree?",
      notes: ['learning teamwork', 'some people hate sport', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'report',
          context: "You have been on a week's course to improve your speaking and listening skills in English. Now your teacher has asked you to write a report about your experience. In your report, you should:",
          mustInclude: ['say when and where the course took place', 'describe what you did during the course', 'recommend any improvements you think could be made to the course.'],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You have seen this notice in an English-language magazine.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Useful advice',
          prompt: 'What is the most useful advice you have ever been given? Write us an article explaining what the advice was. Why was it so useful to you and what effect has it had on your life?\nThe best articles will be published in our magazine.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'letter',
          context: 'You have seen this advertisement online.',
          boxTitle: 'Wanted – Tourist Website Designer',
          prompt:
            'We are looking for someone to design a tourist website for your local area. Write to Adam Jones, Tourist Officer, explaining why you are suitable for the job. You should:\n' +
            '• have good knowledge of your local area\n' +
            '• be interested in web design\n' +
            '• be able to communicate well in English.',
          taskLine: 'Write your letter of application.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 4（标准版4）Test 3
// 题面逐字转录自书 60–61（PDF 第 61–62 页，扫描件视觉转录，scripts/fce8-render.mjs 分别以 scale 6 与 scale 7
// 两遍独立渲染逐字 OCR 核对，两遍结果一致）。
// 答案/范文来源：Sample Writing answers 章（书 100–108 / PDF 101–109）官方收录 8 篇考生答卷（Sample A–H），
// 各篇后附 Content / Communicative Achievement / Organisation / Language 四维评分表与逐条考官点评；
// 书 60 页脚箭头指向 p. 105（Test 3 Part 1 essay 范文）、书 61 页脚箭头指向 p. 106（Test 3 Part 2 范文）；
// 按章内顺序两者应为 Sample E / F（书 102=Sample B、书 103=Sample C 已真实读图核验，E/F 字母未逐一核验）。
// 转录说明：Part 1 情境句 "Now, your English teacher" 带逗号；Essay 框题为完整句引号内置句号
// （'...should not be allowed.'）+ 居中第二行 "What do you think?"（非 "Do you agree?"）；
// 本套 notes 为大写开头的完整句且各带句号（与 T1/T2 小写短语式不同），第 3 条为点线 + "(your own idea)"；
// Q2 为收件框（"Subject:" 粗体 + "What to study"），正文含撇号缩写 I'm / can't，落款 "Best wishes" + "Nick" 两行；
// Q3 情境句为一般现在时 "You see this notice on a website."（句号结尾），框眉 "Articles wanted" 衬线粗体、
// 标题 "Relaxation" 居中、末行 "The best articles will be published on our website."（on our website）；
// Q4 情境句 "You have seen this notice in a magazine."，框眉 "Reviews wanted"、标题 "Restaurants for special occasions"、
// "In your review you should:" 冒号且 review 后无逗号、两条 bullet 仅末条带句号、末行 "The best reviews will be published next month."。
// 含撇号字符串一律用双引号包裹。

const STD4_W3 = {
  meta: {
    id: 'fce-standard-4-test3-writing',
    title: 'FCE 标准版真题 4 · Test 3 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Writing',
    pages: '书 60–61',
    source: '标准版4 First 4.pdf（用户原件扫描版）',
    answerSource:
      'Sample Writing answers 章（书 100–108 / PDF 101–109）官方样例与四维评分表及考官点评：' +
      '书 60 页脚箭头指向 p. 105（Test 3 Part 1 essay 范文）、书 61 页脚箭头指向 p. 106（Test 3 Part 2 范文）；' +
      '按章内顺序对应 Sample E / F（书 102=Sample B、书 103=Sample C 已真实读图核验，E/F 字母未逐一核验）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about advertising. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'Advertisements which are aimed at children should not be allowed.' What do you think?",
      notes: ['They can be entertaining and fun.', 'They encourage unnecessary spending.', '...(your own idea)'],
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
          context: 'You have received this email from your Canadian friend, Nick.',
          boxTitle: 'Subject: What to study',
          prompt:
            "I have to decide what subject to study at university next year. I'm good at English Literature, Engineering and History, and I like them all equally. But I just can't make up my mind which one to choose.\n\n" +
            'What do you think I should do?\n\n' +
            'Best wishes\nNick',
          taskLine: 'Write your email.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this notice on a website.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Relaxation',
          prompt: 'What does relaxation mean to you and how do you usually relax? Why is it important for people to relax?\nThe best articles will be published on our website.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'review',
          context: 'You have seen this notice in a magazine.',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Restaurants for special occasions',
          prompt:
            'We are looking for reviews of restaurants which are good places to celebrate special occasions. In your review you should:\n' +
            '• describe the restaurant and the food it serves\n' +
            '• say what special occasions you would recommend the restaurant for.\n' +
            'The best reviews will be published next month.',
          taskLine: 'Write your review.',
        },
      ],
    },
  },
};

// FCE Writing (Paper 2) — Cambridge English First 4（标准版4）Test 4
// 题面逐字转录自书 80–81（PDF 第 81–82 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染逐字 OCR 核对，
// 读取全程执行"页脚页码先行"反污染纪律，页脚 80/81 与箭头 p. 107/p. 108 均已核）。
// 答案/范文来源：Sample Writing answers 章（书 100–108 / PDF 101–109）官方收录 8 篇考生答卷（Sample A–H），
// 各篇后附 Content / Communicative Achievement / Organisation / Language 四维评分表与逐条考官点评；
// 书 80 页脚箭头指向 p. 107（Test 4 Part 1 essay 范文）、书 81 页脚箭头指向 p. 108（Test 4 Part 2 范文）；
// Test 4 Key 首页（书 145 / PDF 146）经真实读图核验仅含 Reading and Use of English key，无独立 Writing key 条目。
// 转录说明：Essay 框题为无引号直接问句 "Is it better to be part of a large family or a small family?"
// （居中，问号结尾，无 "Do you agree?" 行）；notes 前有 "Write about:" 标签，两条为小写短语（cost /
// learning from others，无句号），第 3 条为点线 + "(your own idea)"（与 T3 大写完整句式不同）；
// Q2 情境句 "You recently saw this notice in a magazine."（recently saw 过去时）、深底框 "Reviews wanted" +
// 居中衬线标题 "Useful books"、正文两行以句号分句、无 bullet；
// Q3 情境句 "You see this notice in a travel magazine."、框题 "Wanted – people to join Arctic expedition"
// （en dash 两侧带空格、people 小写）、正文两段含 organization / organizer（z 拼写）、"two-month expedition" 连字符、
// 收件人 "expedition organizer, Roger Beard"（姓名前后逗号）；
// Q4 情境句 "You see this announcement on an English-language website."（announcement）、框眉 "Articles wanted" 斜体、
// 标题 "An important decision" 斜体居中、正文含撇号 you've 及 "say...explain...and say..." 并列结构（and 前有逗号）。
// 含撇号字符串一律用双引号包裹。

const STD4_W4 = {
  meta: {
    id: 'fce-standard-4-test4-writing',
    title: 'FCE 标准版真题 4 · Test 4 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Writing',
    pages: '书 80–81',
    source: '标准版4 First 4.pdf（用户原件扫描版）',
    answerSource:
      'Sample Writing answers 章（书 100–108 / PDF 101–109）官方样例与四维评分表及考官点评：' +
      '书 80 页脚箭头指向 p. 107（Test 4 Part 1 essay 范文）、书 81 页脚箭头指向 p. 108（Test 4 Part 2 范文）；' +
      '按章内顺序对应 Sample G / H（书 102=Sample B、书 103=Sample C 已真实读图核验，G/H 字母未逐一核验）；' +
      'Test 4 Key 首页（书 145 / PDF 146）经真实读图核验仅含 Reading and Use of English key，无独立 Writing key 条目',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about family life. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: 'Is it better to be part of a large family or a small family?',
      notes: ['cost', 'learning from others', '...(your own idea)'],
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
          context: 'You recently saw this notice in a magazine.',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Useful books',
          prompt:
            'Write us a review of a useful book which you have read.\n' +
            'In your review describe what the book is about, explain how it was useful to you and say why you would recommend it to others.',
          taskLine: 'Write your review.',
        },
        {
          q: 3,
          genre: 'letter',
          context: 'You see this notice in a travel magazine.',
          boxTitle: 'Wanted – people to join Arctic expedition',
          prompt:
            'Our organization is researching life in the Arctic. We are looking for people to join our two-month expedition next year. You should be able to work in a team, have skills that are useful in an Arctic environment and have a good level of English.\n' +
            'Write to expedition organizer, Roger Beard, explaining why you would be suitable to join our expedition.',
          taskLine: 'Write your letter of application.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this announcement on an English-language website.',
          boxTitle: 'Articles wanted',
          boxHeading: 'An important decision',
          prompt:
            "Write us an article about an important decision you've made. In your article you should say what you had to decide, explain how easy or difficult it was to make the decision, and say what effect it had on your life.",
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};

export const fceStandardWritingTests = [STD1_W1, STD1_W2, STD1_W3, STD1_W4, STD2_W1, STD2_W2, STD2_W3, STD2_W4, STD3_W1, STD3_W2, STD3_W3, STD3_W4, STD4_W1, STD4_W2, STD4_W3, STD4_W4]
