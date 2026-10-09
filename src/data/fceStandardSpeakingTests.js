// FCE 标准版真题 1–4 · Speaking（16 套，每册 4 套 × 4 Part）
// 来源（用户原件，扫描版无文本层）: 口语考官脚本转录自各册 "Frames for the Speaking test"；
//   Part 2/3 图片材料为原书彩色插页照片，UI 以文字说明并注明"图片见原书彩色插页"。
// 数组顺序: 册1 T1..T4, 册2 T1..T4, 册3 T1..T4, 册4 T1..T4
// meta.id 规范: 'fce-standard-<册>-test<套>-speaking'; examKey: 'fce-standard-<册>-test<套>'


// ===== 标准版1 · Test 1（说明页 书 28；框架 书 95–97） =====
const STD1_S1 = {
  meta: {
    id: 'fce-standard-1-test1-speaking',
    title: 'FCE 标准版真题 1 · Test 1 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Speaking',
    pages: '书 28 · 框架 95–97',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 95–97）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 95）印有考官开场脚本与备选问题：Select one or more questions from any of the following categories, as appropriate.',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read?) (Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（Test 1）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Football games',
          q: "Here are your photographs. They show people enjoying different football games. I'd like you to compare the photographs, and say what you think the people are enjoying about these football games.",
          partnerQuestion: 'Do you enjoy watching football games? ..... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C1（Test 1，图片 1A/1B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Travelling',
          q: "Here are your photographs. They show people travelling in different ways. I'd like you to compare the photographs, and say what might be good or bad for the people about travelling in these ways.",
          partnerQuestion: 'Do you prefer travelling by car or train? ..... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C2（Test 1，图片 2A/2B）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'The best way to buy',
      timing: '4 minutes',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). I'd like you to imagine that a teacher has asked her students to discuss whether it's better to buy things in shops or online. Here are some ideas the students have had and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C3 to the candidates. Allow 15 seconds.) Now, talk to each other about whether you think it's better to buy things in shops or online.",
      discuss: "whether you think it's better to buy things in shops or online",
      decide: "which of these things is most important to think about when you're buying something expensive",
      mindmap: {
        centre: 'Is it better to buy things in shops or online?',
        branches: ['the time it takes', 'getting help', "what you're buying", 'amount of choice', 'security'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "Some people say there will be no need for shops in the future because we'll buy everything online.",
        "Do you think it's true that we buy a lot of things we don't really need these days? (Why? / Why not?)",
        'Do you think that out of town shopping centres are a good idea?',
        'Is it better to go shopping with friends or alone?',
        'Some people say that shopping is a leisure activity nowadays. What do you think?',
        'Do you think that advertising encourages people to spend too much money? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// ===== 标准版1 · Test 2（说明页 书 50；框架 书 98–100） =====
// FCE Speaking (Paper 4) — Cambridge English First 1（标准版1）Test 2
// 说明页转录自书 50；考官脚本与题目转录自框架页书 98–100（PDF 第 97–99 页，扫描件视觉转录）。
// Part 2 图片在书末彩色插页 C4/C5，Part 3 思维导图（2E Television）在 C6（PDF 第 175/176/177 页），已逐项核对转录。
const STD1_S2 = {
  meta: {
    id: 'fce-standard-1-test2-speaking',
    title: 'FCE 标准版真题 1 · Test 2 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Speaking',
    pages: '书 50 · 框架 98–100',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 98–100）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      timing: '2 minutes (3 minutes for groups of three)',
      script:
        "Good morning/afternoon/evening. My name is ………… and this is my colleague ………… . " +
        "And your names are? Can I have your mark sheets, please? Thank you. " +
        "Where are you from, (Candidate A)? And you, (Candidate B)? " +
        "First, we'd like to know something about you.",
      selection: 'Select one or more questions from any of the following categories, as appropriate.',
      categories: [
        {
          category: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          category: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read?) (Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          category: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
      note: '本册框架页（书 98）印有 Part 1 备选题目，考官按类别选用；以上为原文转录，未编造。',
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      instruction: '每位考生就一组图片独白约 1 分钟，另一考生简短回应约 30 秒（说明见书 50）。图片在书末彩色插页（Test 2）。',
      timing: '4 minutes (6 minutes for groups of three)',
      script:
        "In this part of the test, I'm going to give each of you two photographs. " +
        "I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Taking photographs',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people taking photographs in these situations. I'd like you to compare the photographs, and say why you think the people are taking photographs in these situations. All right?",
          images: 2,
          imagesPage: '书末彩色插页 C4（Test 2）',
          partnerCandidate: 'B',
          partnerQuestion: 'Do you like taking photographs when you go on holiday? ..... (Why? / Why not?)',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Different jobs',
          q: "Now, (Candidate B), here are your photographs. They show people doing different jobs. I'd like you to compare the photographs, and say what might be difficult for the people about doing these jobs. All right?",
          images: 2,
          imagesPage: '书末彩色插页 C5（Test 2）',
          partnerCandidate: 'A',
          partnerQuestion: 'Which of these jobs would you prefer to do? ..... (Why?)',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Television',
      timing: '7 minutes (9 minutes for groups of three) (Parts 3 and 4)',
      timingNote: '框架页合计印为 Parts 3 and 4 · 7 minutes (9 minutes for groups of three)；书 50 页单列 Part 3 为 (4 minutes)。',
      script:
        "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). " +
        "I'd like you to imagine that some students are doing a project about the influence of television on young people's lives. Here are some ideas they have had for the project and a question for you to discuss. First you have some time to look at the task. " +
        '(Indicate the text on page C6 to the candidates. Allow 15 seconds.) ' +
        "Now, talk to each other about whether you think television has a good or a bad influence on young people's lives.",
      discuss: "whether you think television has a good or a bad influence on young people's lives",
      decide: 'what is the best thing about television',
      mindmap: {
        centre: "Does television have a bad influence on young people's lives?",
        branches: ['time with family', 'talking about programmes with friends', 'educational programmes', 'other leisure activities', 'advertisements'],
        page: '书末彩色插页 C6（Test 2，印刷编号 2E Television）',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '7 minutes (9 minutes for groups of three) (Parts 3 and 4)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Is watching TV the best way for people to spend their free time? (Why? / Why not?)',
        'What kind of TV programmes do you like best? (Why?)',
        'Some people have more than one television in their home. Do you think this is a good idea? (Why / Why not?)',
        "Do you think children generally watch too much television in (candidate's country)? (Why / Why not?)",
        'Is television the best way of following the news in the world? (Why / Why not?)',
        'Do you think watching TV is a good way to learn a language? (Why / Why not?)',
      ],
      promptsSelector: 'Select any of the following prompts, as appropriate:',
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// ===== 标准版1 · Test 3（说明页 书 72；框架 书 101–103） =====
// FCE Speaking (Paper 4) — Test 3 from 《Cambridge English First 1（标准版1）》
// 数据来源：书 72 页 Speaking 说明 + 书 101–103 页 Interlocutor frames（Test 3），逐字视觉转录。
// Test 3 视觉材料在书末彩色插页：C7/C8（Part 2 两套照片）、C9（Part 3 思维导图，编号 3E），框架页仅印文字指令与图片页码。
// 官方无标准答案。
const STD1_S3 = {
  meta: {
    id: 'fce-standard-1-test3-speaking',
    title: 'FCE 标准版真题 1 · Test 3 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Speaking',
    pages: '书 72 · 框架 101–103',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 101–103）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction:
        "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      note: '本册框架页（书 101）提供 Part 1 备选题库，考官酌情选用；以下题目逐字转录自 Interlocutor frame。',
      script:
        "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you. Where are you from, (Candidate A)? And you, (Candidate B)? First we'd like to know something about you.",
      selectNote: 'Select one or more questions from any of the following categories, as appropriate.',
      categories: [
        {
          heading: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          heading: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read?) (Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          heading: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction:
        "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      note:
        'Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 3 appears on pages C7 and C8 (Part 2), and C9 (Part 3).',
      tasks: [
        {
          candidate: 'A',
          task: 1,
          taskTitle: 'In the evening',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people doing different things in the evening. I'd like you to compare the photographs, and say what the people are enjoying about doing these things in the evening. All right?",
          images: 2,
          imagesPage: '书末彩色插页 C7（Test 3，照片编号 3A/3B）',
          followUp: '(Candidate B), which of these things would you prefer to do in the evening? ..... (Why?)',
        },
        {
          candidate: 'B',
          task: 2,
          taskTitle: 'Family time',
          q: "Now, (Candidate B), here are your photographs. They show families doing different things together in their free time. I'd like you to compare the photographs, and say why the families have decided to do these things together in their free time. All right?",
          images: 2,
          imagesPage: '书末彩色插页 C8（Test 3，照片编号 3C/3D）',
          followUp: '(Candidate A), which of these things would you prefer to do with your family? ..... (Why?)',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Improving life',
      timing: 'Parts 3 and 4: 7 minutes (9 minutes for groups of three)',
      script:
        "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Here are some ways that governments could improve life for people living in cities and a question for you to discuss. First you have some time to look at the task. Now, talk to each other about whether these are good ways to improve life for people living in cities.",
      discuss: 'whether these are good ways to improve life for people living in cities',
      decide: 'which of these things would have the greatest long-term benefit for people living in cities',
      mindmap: {
        centre: "Are these good ways to improve people's lives in cities?",
        branches: [
          'build new houses and flats',
          'increase number of parks',
          'provide libraries and museums',
          'stop cars entering city centres',
          'open modern shopping centres',
        ],
      },
      mindmapPage: '书末彩色插页 C9（Test 3，编号 3E）',
      note: 'C9 页印刷标题为 "Television"，与框架页主题 Improving life 不符，应为原书印刷错误；思维导图文字以 C9 页为准。',
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 7 minutes (9 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "What's good about living in cities in (candidate's country)? (Why?)",
        "Which is the best city for people to visit in (candidate's country)? (Why?)",
        "If you could choose to visit a city you've never been to, which one would you choose? (Why?)",
        'Would you prefer to live in a modern city or a city with lots of history? (Why?)',
        'Are there advantages to living in a small town rather than in a big city?',
        'Do you think it is better for children to grow up in the city or in the countryside? (Why?)',
      ],
      promptsLeadIn: 'Select any of the following prompts, as appropriate:',
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// ===== 标准版1 · Test 4（说明页 书 94；框架 书 104–106） =====
// Cambridge English First 1（标准版1）Test 4 Speaking
// 逐字转录自 cen_first_1_with_answers .pdf（用户原件扫描版）：
// 说明页 PDF 93（书 94）、Interlocutor frames PDF 103–105（书 104–106）
// Part 2 视觉材料在书末彩色插页 C10/C11，Part 3 在 C12（C12 已核对 PDF 183）
// 官方无标准答案，仅提供考官框架
const STD1_S4 = {
  meta: {
    id: 'fce-standard-1-test4-speaking',
    title: 'FCE 标准版真题 1 · Test 4 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Speaking',
    pages: '书 94 · 框架 104–106',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 104–106）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      instruction:
        "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      note: 'Select one or more questions from any of the following categories, as appropriate.',
      script:
        "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ .\nAnd your names are?\nCan I have your mark sheets, please?\nThank you.\nWhere are you from, (Candidate A)?\nAnd you, (Candidate B)?\nFirst we'd like to know something about you.",
      categories: [
        {
          category: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          category: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read?) (Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          category: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      instruction:
        "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          q: "It's your turn first. Here are your photographs. They show people spending time in different places in a city. I'd like you to compare the photographs, and say why the people have chosen to spend time in these different places in the city.",
          images: 2,
          imagesPage: '书末彩色插页 C10（Test 4）',
          response: "(Candidate B), do you enjoy spending time in a city? ..... (Why? / Why not?)",
        },
        {
          candidate: 'B',
          task: 2,
          q: "Here are your photographs. They show people who are having a special day. I'd like you to compare the photographs, and say what the people might enjoy about their special day.",
          images: 2,
          imagesPage: '书末彩色插页 C11（Test 4）',
          response: "(Candidate A), do you enjoy celebrating with friends? ..... (Why? / Why not?)",
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Important things in life',
      timing: '4 minutes（框架页：Parts 3 and 4 共 7 minutes，9 minutes for groups of three）',
      script:
        "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Here are some things that many people think are important in their lives and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C12 to the candidates. Allow 15 seconds.) Now, talk to each other about why people think these things are important in their lives.",
      discuss: 'why people think these things are important in their lives',
      decide: 'which two things become more important as people get older',
      mindmap: {
        centre: 'Why do people think these things are important in their lives?',
        branches: ['health and exercise', 'education', 'close friends', 'a good job', 'money'],
      },
      visualPage: '书末彩色插页 C12（Test 4）',
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes（框架页：Parts 3 and 4 共 7 minutes，9 minutes for groups of three）',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'If you could change anything about your life, what would you change? (Why?)',
        "Many people say life's too busy these days. Why do you think they say this?",
        'Many people seem to want to become famous nowadays. Why do you think this is?',
        "Is it important to enjoy a job or do you think it's enough to be paid well? (Why?)",
        'How important is it to go on holiday every year? (Why? / Why not?)',
        "Some people say we don't spend enough time talking to each other these days. What do you think?",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：标准版2 First 2 (updated).pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// 应用 Test 1 = 书内印 Test 5。Speaking 说明页：书 28（PDF 29）；Interlocutor frames：书 95–97（PDF 96–98）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C1–C3（PDF 178–180）：仅记录页码引用，未嵌入图片

const STD2_S1 = {
  meta: {
    id: 'fce-standard-2-test1-speaking',
    title: 'FCE 标准版真题 2 · Test 1 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Speaking',
    pages: '书 28 · 框架 95–97',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 95–97）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 95）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 5 appears on pages C1 and C2 (Part 2), and C3 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate.',
      categories: [
        {
          name: 'Travel',
          questions: [
            'Do you enjoy long journeys? (What do you do to pass the time?)',
            'Do you have to travel far every day? (Where do you have to go?)',
            'Do you prefer to travel by car or public transport? (Why?)',
            "Tell us about an interesting place you've travelled to.",
          ],
        },
        {
          name: 'Study or work',
          questions: [
            'What good memories do you have of school?',
            'Is there anything you would like to study in the future? (Why?)',
            'Have you ever had a part-time job? (What do/did you do? Do/Did you enjoy it?)',
            'Would you prefer to work for a big or small company? (Why?)',
          ],
        },
        {
          name: 'Sports and hobbies',
          questions: [
            'Do you prefer individual sports or team sports? (Why?)',
            "Which is the most popular sport in your country? (Why do you think it's popular?)",
            'How much time do you spend listening to music? (What kind of music do you like?)',
            'Do you enjoy playing computer games in your free time? (Why? / Why not?)',
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 5）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Guided tours',
          q: "Here are your photographs. They show people going on different guided tours. I'd like you to compare the photographs, and say what you think the people are enjoying about these guided tours.",
          partnerQuestion: 'Would you like to visit either of these places? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C1（Test 5，图片 5A/5B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Doing exercise',
          q: "Here are your photographs. They show people doing exercise in different ways. I'd like you to compare the photographs, and say why the people have decided to exercise in these ways.",
          partnerQuestion: 'Which of these things would you prefer to do? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C2（Test 5，图片 5C/5D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Keeping up to date',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Many people say that it's important to keep up to date with all the changes in the world. Here are some things in the world that often change to think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C3 to the candidates. Allow 15 seconds.) Now, talk to each other about which two things you think it's most important to keep up to date with.",
      discuss: "which two things you think it's most important to keep up to date with",
      decide: "what you think is the biggest advantage of keeping up to date with all the changes in the world",
      mindmap: {
        centre: 'Is it important to keep up to date with all the changes in the world?',
        branches: ['technology', 'music', 'the news', 'fashion', 'education'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Some people say that we spend too much time checking for updates on social networking websites. Do you agree? (Why? / Why not?)',
        'Do you think the best way to keep up to date with changes in the world is to watch television? (Why? / Why not?)',
        "Some people say the world is changing so fast that we can't keep up to date with everything. Do you agree? (Why? / Why not?)",
        'How important is it for people to have change in their lives?',
        "Some people don't like it when things change. Why do you think that is?",
        'Do you think people these days are only interested in new things and ignore history and tradition? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：标准版2 First 2 (updated).pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// 应用 Test 2 = 书内印 Test 6。Speaking 说明页：书 50（PDF 51）；Interlocutor frames：书 98–100（PDF 99–101）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C4–C6（PDF 181–183）：仅记录页码引用，未嵌入图片

const STD2_S2 = {
  meta: {
    id: 'fce-standard-2-test2-speaking',
    title: 'FCE 标准版真题 2 · Test 2 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Speaking',
    pages: '书 50 · 框架 98–100',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 98–100）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 98）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 6 appears on pages C4 and C5 (Part 2), and C6 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1（书内 Test 5）完全相同。',
      categories: [
        {
          name: 'Travel',
          questions: [
            'Do you enjoy long journeys? (What do you do to pass the time?)',
            'Do you have to travel far every day? (Where do you have to go?)',
            'Do you prefer to travel by car or public transport? (Why?)',
            "Tell us about an interesting place you've travelled to.",
          ],
        },
        {
          name: 'Study or work',
          questions: [
            'What good memories do you have of school?',
            'Is there anything you would like to study in the future? (Why?)',
            'Have you ever had a part-time job? (What do/did you do? Do/Did you enjoy it?)',
            'Would you prefer to work for a big or small company? (Why?)',
          ],
        },
        {
          name: 'Sports and hobbies',
          questions: [
            'Do you prefer individual sports or team sports? (Why?)',
            "Which is the most popular sport in your country? (Why do you think it's popular?)",
            'How much time do you spend listening to music? (What kind of music do you like?)',
            'Do you enjoy playing computer games in your free time? (Why? / Why not?)',
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 6）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Giving advice',
          q: "Here are your photographs. They show people giving advice in different situations. I'd like you to compare the photographs, and say why it might be important to give advice in these situations.",
          partnerQuestion: 'Do you like listening to advice? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C4（Test 6，图片 6A/6B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Looking at beautiful things',
          q: "Here are your photographs. They show people looking at beautiful things. I'd like you to compare the photographs, and say why you think these people are looking at these beautiful things.",
          partnerQuestion: 'Do you enjoy going to museums and galleries? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C5（Test 6，图片 6C/6D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Boredom',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Here are some reasons why it might be a good idea for people to change the way they spend their free time. First you have some time to look at the task. (Indicate the text on page C6 to the candidates. Allow 15 seconds.) Now, talk to each other about why people should change the way they spend their free time.",
      discuss: 'why people should change the way they spend their free time',
      decide: 'which is the most important reason for changing the way we spend our free time',
      mindmap: {
        centre: 'Should people change the way they spend their free time?',
        branches: ['using the internet', 'having new experiences', 'spending more time outside', 'meeting friends', 'doing less work', 'getting more exercise'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Should schools and colleges organise free time activities for students at weekends? (Why? / Why not?)',
        "Do you think it's true that you will always enjoy yourself if you're with other people? (Why? / Why not?)",
        "Some people say that it's important to entertain yourself rather than expect other people to do it all the time. What do you think?",
        'Is it a good idea to have a lot of different interests or just one or two? (Why? / Why not?)',
        "Do you think it's important to be busy all the time? (Why? / Why not?)",
        "Some people say we don't have enough free time these days. What do you think?",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：标准版2 First 2 (updated).pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// 应用 Test 3 = 书内印 Test 7。Speaking 说明页：书 72（PDF 73）；Interlocutor frames：书 101–103（PDF 102–104）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C7–C9（PDF 184–186）：仅记录页码引用，未嵌入图片

const STD2_S3 = {
  meta: {
    id: 'fce-standard-2-test3-speaking',
    title: 'FCE 标准版真题 2 · Test 3 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Speaking',
    pages: '书 72 · 框架 101–103',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 101–103）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 101）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 7 appears on pages C7 and C8 (Part 2), and C9 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1（书内 Test 5）完全相同。',
      categories: [
        {
          name: 'Travel',
          questions: [
            'Do you enjoy long journeys? (What do you do to pass the time?)',
            'Do you have to travel far every day? (Where do you have to go?)',
            'Do you prefer to travel by car or public transport? (Why?)',
            "Tell us about an interesting place you've travelled to.",
          ],
        },
        {
          name: 'Study or work',
          questions: [
            'What good memories do you have of school?',
            'Is there anything you would like to study in the future? (Why?)',
            'Have you ever had a part-time job? (What do/did you do? Do/Did you enjoy it?)',
            'Would you prefer to work for a big or small company? (Why?)',
          ],
        },
        {
          name: 'Sports and hobbies',
          questions: [
            'Do you prefer individual sports or team sports? (Why?)',
            "Which is the most popular sport in your country? (Why do you think it's popular?)",
            'How much time do you spend listening to music? (What kind of music do you like?)',
            'Do you enjoy playing computer games in your free time? (Why? / Why not?)',
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 7）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Quiet places',
          q: "Here are your photographs. They show people spending time in quiet places. I'd like you to compare the photographs, and say why you think people have decided to spend time in these quiet places.",
          partnerQuestion: 'Which of these places would you prefer to spend time in? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C7（Test 7，图片 7A/7B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'At night',
          q: "Here are your photographs. They show people doing different things at night. I'd like you to compare the photographs, and say what you think the people might be enjoying about doing these things at night.",
          partnerQuestion: 'Which of these things would you prefer to do? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C8（Test 7，图片 7C/7D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Other cultures',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Many people say that it's important to learn about other cultures and their customs. Here are some reasons for this and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C9 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's important to learn about other cultures and their customs.",
      discuss: "whether it's important to learn about other cultures and their customs",
      decide: 'which is the most important reason for learning about other cultures',
      mindmap: {
        centre: 'Is it important to learn about other cultures?',
        branches: ['travelling to other countries', 'speaking other languages', 'educating ourselves', 'making new friends', 'work opportunities'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Are you interested in the cultures of other countries, for example their music or food? (Why? / Why not?)',
        "Can we learn a lot about the culture of a country when we're on holiday there? (Why? / Why not?)",
        'Should students spend more time learning about other cultures when they are at school? (Why? / Why not?)',
        'Some students have the opportunity to study in another country. Is this a good thing to do? (Why? / Why not?)',
        "Do you think it's true that the internet has helped us understand people in other countries? (Why? / Why not?)",
        "Some people say that these days that there aren't any big cultural differences between countries. Do you agree? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：标准版2 First 2 (updated).pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// 应用 Test 4 = 书内印 Test 8。Speaking 说明页：书 94（PDF 95）；Interlocutor frames：书 104–106（PDF 105–107）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片在书末彩色插页 C10–C11（PDF 187–188）：仅记录页码引用，未嵌入图片
// ⚠ 缺页：本扫描件彩色插页缺 C12（Test 8 Part 3 任务卡 8E；PDF 189 位置为封底）。part 3 的 mindmap（中心问题与分支）无法转录，暂缺该字段，待补扫描后补充；未凭推测编造。
// 原书 Part 3 的 decide 句 "what the best reason is for not being too easily influenced by your friends" 中 "not" 一词原书加下划线强调（纯文本无法呈现，照录文字）。

const STD2_S4 = {
  meta: {
    id: 'fce-standard-2-test4-speaking',
    title: 'FCE 标准版真题 2 · Test 4 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Speaking',
    pages: '书 94 · 框架 104–106',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 104–106）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 104）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 8 appears on pages C10 and C11 (Part 2), and C12 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1（书内 Test 5）完全相同。',
      categories: [
        {
          name: 'Travel',
          questions: [
            'Do you enjoy long journeys? (What do you do to pass the time?)',
            'Do you have to travel far every day? (Where do you have to go?)',
            'Do you prefer to travel by car or public transport? (Why?)',
            "Tell us about an interesting place you've travelled to.",
          ],
        },
        {
          name: 'Study or work',
          questions: [
            'What good memories do you have of school?',
            'Is there anything you would like to study in the future? (Why?)',
            'Have you ever had a part-time job? (What do/did you do? Do/Did you enjoy it?)',
            'Would you prefer to work for a big or small company? (Why?)',
          ],
        },
        {
          name: 'Sports and hobbies',
          questions: [
            'Do you prefer individual sports or team sports? (Why?)',
            "Which is the most popular sport in your country? (Why do you think it's popular?)",
            'How much time do you spend listening to music? (What kind of music do you like?)',
            'Do you enjoy playing computer games in your free time? (Why? / Why not?)',
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 8）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'By the river',
          q: "Here are your photographs. They show people spending time by different rivers. I'd like you to compare the photographs, and say what you think the people are enjoying about spending time by the different rivers.",
          partnerQuestion: 'Which of these things would you prefer to do? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C10（Test 8，图片 8A/8B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Attending big events',
          q: "Here are your photographs. They show people at different big events. I'd like you to compare the photographs, and say what you think the people are enjoying about being at these events.",
          partnerQuestion: 'Which of these events would you prefer to attend? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C11（Test 8，图片 8C/8D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'The influence of friends',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Many people are too easily influenced by their friends. Here are some things to think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C12 to the candidates. Allow 15 seconds.) Now, talk to each other about whether you think people are too easily influenced by their friends.",
      discuss: 'whether you think people are too easily influenced by their friends',
      decide: 'what the best reason is for not being too easily influenced by your friends',
      // mindmap 暂缺：任务卡 8E 在书末彩色插页 C12，本扫描件缺此页（见文件头部注释），不编造中心问题与分支。
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Some people say that we always want to have the same things as our friends. What do you think?',
        'Do you think we can be friends with people who have very different ideas and opinions from us?',
        "Do you think it's better to have only one or two close friends or have a big group of friends? ...... (Why?)",
        "How important do you think it is for parents to like their children's friends?",
        'Some people think that the media influence us much more than our friends do. Do you agree? ...... (Why? / Why not?)',
        'Are we too easily influenced by people we have never met, such as sports stars or other famous people? ...... (Why do you say that?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：标准版3 First 3.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking 说明页：书 28（PDF 30）；Interlocutor frames：书 95–97（PDF 97–99）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C1–C3（PDF 179–181）：仅记录页码引用，未嵌入图片

const STD3_S1 = {
  meta: {
    id: 'fce-standard-3-test1-speaking',
    title: 'FCE 标准版真题 3 · Test 1 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Speaking',
    pages: '书 28 · 框架 95–97',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 95–97）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 95）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 1 appears on pages C1 and C2 (Part 2), and C3 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate.',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read? Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 1）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Getting information',
          q: "Here are your photographs. They show people getting information about different things. I'd like you to compare the photographs, and say why you think the people are getting information about these things.",
          partnerQuestion: 'Do you enjoy travelling by plane? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C1（Test 1，图片 1A/1B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Walking',
          q: "Here are your photographs. They show people walking in different places. I'd like you to compare the photographs, and say why you think the people have decided to go walking in these places.",
          partnerQuestion: 'Which of these places would you prefer to walk in? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C2（Test 1，图片 1C/1D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Reading books',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Some people think that everyone should spend more of their free time reading books, and other people disagree. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C3 to the candidates. Allow 15 seconds.) Now, talk to each other about whether everyone should spend more of their free time reading books.",
      discuss: 'whether everyone should spend more of their free time reading books',
      decide: 'what you think is the best reason for people to spend more of their free time reading books',
      mindmap: {
        centre: 'Should people spend more of their free time reading books?',
        branches: ['learning interesting new things', 'having too many other things to do', 'finding things to read online instead', 'improving the ability to write', 'enjoying imaginative stories'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Some people say that students spend too much time at school reading, so they should do something different in their free time. Do you agree? (Why? / Why not?)',
        "Some people say that we can't learn anything useful from reading novels. Do you agree? (Why? / Why not?)",
        "Do you think it's important for parents to read to their children? (Why? / Why not?)",
        "Do you think it's true that if we want to understand something well we should watch a TV documentary rather than read a book? (Why? / Why not?)",
        "Some people say that we don't need libraries any more. Do you agree? (Why? / Why not?)",
        "Do you think that in the future people won't read books at all? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：标准版3 First 3.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking 说明页：书 50（PDF 52）；Interlocutor frames：书 98–100（PDF 100–102）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C4–C6（PDF 182–184）：仅记录页码引用，未嵌入图片

const STD3_S2 = {
  meta: {
    id: 'fce-standard-3-test2-speaking',
    title: 'FCE 标准版真题 3 · Test 2 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Speaking',
    pages: '书 50 · 框架 98–100',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 98–100）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 98）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 2 appears on pages C4 and C5 (Part 2), and C6 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1 完全相同。',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read? Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 2）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Holidays in different places',
          q: "Here are your photographs. They show people spending their holidays in different ways. I'd like you to compare the photographs, and say what you think the people are enjoying about spending their holidays in these ways.",
          partnerQuestion: 'Which of these things would you prefer to do? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C4（Test 2，图片 2A/2B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Choosing things',
          q: "Here are your photographs. They show people choosing things in different situations. I'd like you to compare the photographs, and say what the people might find difficult about choosing things in these situations.",
          partnerQuestion: 'Do you often go shopping in supermarkets? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C5（Test 2，图片 2C/2D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Independent learning',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Some people think that it's a good idea to try and learn some things without a teacher, but other people disagree. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C6 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's a good idea to try and learn some things without a teacher.",
      discuss: "whether it's a good idea to try and learn some things without a teacher",
      decide: 'what you think is the best reason for learning new things with a teacher',
      mindmap: {
        centre: 'Is it a good idea to try and learn some things without a teacher?',
        branches: ['being independent', 'getting help from an expert', 'getting help online', 'being part of a class', 'learning quickly'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Do you find it always better to have a teacher when you want to learn things? (Why? / Why not?)',
        'Some people say that we should keep learning new things all our lives. What do you think?',
        "Do you think it's true that having a private lesson is better than having a lesson with other students? (Why? / Why not?)",
        'Do you think that in future everyone will learn everything they need to know from the internet? (Why? / Why not?)',
        'Some people say that our parents teach us more important things than any teachers. Do you agree? (Why? / Why not?)',
        'Some people say the only way we really learn things is by trying to do things and making mistakes. (What do you think?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：标准版3 First 3.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking 说明页：书 72（PDF 74）；Interlocutor frames：书 101–103（PDF 103–105）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C7–C9（PDF 185–187）：仅记录页码引用，未嵌入图片
// ⚠ C8（PDF 186，Test 3 Part 2 第二组图片 3C/3D）经两次渲染读取均被图像审核拦截，未能视觉核对；
//   其页码位置与归属由插页序列（185=C7、187=C9 均已核对）及书 176 照片版权页（C8 上/下两图）确证，
//   图片主题与问题以 Interlocutor frames（书 102）为准，未凭推测编造。

const STD3_S3 = {
  meta: {
    id: 'fce-standard-3-test3-speaking',
    title: 'FCE 标准版真题 3 · Test 3 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Speaking',
    pages: '书 72 · 框架 101–103',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 101–103）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 101）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 3 appears on pages C7 and C8 (Part 2), and C9 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1 完全相同。',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read? Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 3）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'People using phones',
          q: "Here are your photographs. They show people using their phones in different situations. I'd like you to compare the photographs, and say why you think the people have decided to use their phones in these situations.",
          partnerQuestion: 'Do you often use a mobile phone? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C7（Test 3，图片 3A/3B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Winter activities',
          q: "Here are your photographs. They show people doing different activities in winter. I'd like you to compare the photographs, and say what you think the people are enjoying about doing these winter activities.",
          partnerQuestion: 'Which of these things would you prefer to do? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C8（Test 3，图片 3C/3D；PDF 186，见文件头部注释）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'University',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Some people think that students should go on to further education after they leave school. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C9 to the candidates. Allow 15 seconds.) Now, talk to each other about whether students should go on to further education after they leave school.",
      discuss: 'whether students should go on to further education after they leave school',
      decide: 'what you think is the best reason for someone to go on to further education',
      mindmap: {
        centre: 'Should students go on to further education after they leave school?',
        branches: ['cost of going', 'earning more money', 'having a good career later', 'learning more about the world', 'getting a job after leaving school'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "Do a lot of students go on to university in your country? Do you think that's a good thing? (Why? / Why not?)",
        "Do you think it's a good idea for students to leave home and study in a different city after they finish school? (Why? / Why not?)",
        'Is it a good idea to study in another country? (Why? / Why not?)',
        'Some people say that these days you need to have lots of qualifications to be successful. Do you agree? (Why? / Why not?)',
        "Some people say that further education doesn't prepare people for getting a job. Do you agree? (Why? / Why not?)",
        "Should students get some work experience while they're still at school or college? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：标准版3 First 3.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking 说明页：书 94（PDF 96）；Interlocutor frames：书 104–106（PDF 106–108）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C10–C12（PDF 188–190）：仅记录页码引用，未嵌入图片
// ⚠ C11（PDF 189，Test 4 Part 2 第二组图片 4C/4D）经两次渲染读取均被图像审核拦截，未能视觉核对；
//   其页码位置与归属由插页序列（188=C10、190=C12 均已核对）及书 176 照片版权页（C11 上/下两图）确证，
//   图片主题与问题以 Interlocutor frames（书 105）为准，未凭推测编造。

const STD3_S4 = {
  meta: {
    id: 'fce-standard-3-test4-speaking',
    title: 'FCE 标准版真题 3 · Test 4 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Speaking',
    pages: '书 94 · 框架 104–106',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 104–106）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 104）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 4 appears on pages C10 and C11 (Part 2), and C12 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1 完全相同。',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read? Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 4）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Beautiful places',
          q: "Here are your photographs. They show people spending time in different beautiful places. I'd like you to compare the photographs, and say what the people are enjoying about spending time in these beautiful places.",
          partnerQuestion: 'Do you enjoy spending time in the countryside? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C10（Test 4，图片 4A/4B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Listening to music',
          q: "Here are your photographs. They show people listening to music in different situations. I'd like you to compare the photographs, and say why you think the people are listening to music in these situations.",
          partnerQuestion: 'Would you like to go to a classical concert? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C11（Test 4，图片 4C/4D；PDF 189，见文件头部注释）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Holiday at home',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Some people spend their holidays in their own country, instead of travelling to other countries. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C12 to the candidates. Allow 15 seconds.) Now, talk to each other about whether people should have holidays in their own country instead of travelling to other countries.",
      discuss: 'whether people should have holidays in their own country instead of travelling to other countries',
      decide: 'what you think is the best reason for having a holiday in your country',
      mindmap: {
        centre: 'Should people have holidays in their own country instead of travelling to other countries?',
        branches: ['effect on the environment', 'time spent travelling to other countries', 'having language problems', 'cost', 'learning about other cultures'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Where do people in your country go on their holidays? (Why do they like it there?)',
        'Some people say that holidays are for having fun, not for learning about other cultures. What do you think?',
        "Do you think it's best to have one long holiday each year or several short ones? (Why?)",
        'Do you think it is important to find out a lot of information about the place you are visiting on holiday? (Why? / Why not?)',
        'Is it a good idea to go on holiday to the same place every year? (Why? / Why not?)',
        'Do you think it is important to speak the language of the country you are visiting? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking tests：书 88–90（PDF 89–91）；口语彩色插页 Visual materials：书 164–166（PDF 165–167）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（书 164–166）：仅记录页码引用，未嵌入图片

const STD4_S1 = {
  meta: {
    id: 'fce-standard-4-test1-speaking',
    title: 'FCE 标准版真题 4 · Test 1 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Speaking',
    pages: '书 88–90 · 插页 164–166',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Visual materials 书 164–166（PDF 165–167）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 88）印有：Note: The visual material for Test 1 appears on pages 164–166. 备选问题说明：Select one or more questions from any of the following categories, as appropriate.',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read? Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 1）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      note: "框架页照录：Task 1 前有 \"(Candidate A), it's your turn first.\"；Task 2 前有 \"Now, (Candidate B), here are your photographs.\"；图片指示语 \"Indicate the pictures on page 164 to the candidates.\"（Task 1）/ \"page 165\"（Task 2）；每任务后接 \"All right?\"；时长标注 [1 minute.] / [Approximately 30 seconds.]",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Using laptops in different places',
          q: "Here are your photographs. They show people using laptops in different places. I'd like you to compare the photographs, and say why you think the people are using laptops in these different places.",
          partnerQuestion: '(Candidate B), do you often use a laptop? (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 书 164（Test 1，图片 1A/1B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Learning about the natural world',
          q: "Here are your photographs. They show people learning about the natural world in different places. I'd like you to compare the photographs, and say why you think the people are learning about the natural world in these places.",
          partnerQuestion: '(Candidate A), which place would you prefer to go to? (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 书 165（Test 1，图片 1C/1D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Making plans',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Some people think that it's important to plan everything carefully. Here are some things people often make plans about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page 166 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's important to plan these things carefully.",
      discuss: "whether it's important to plan these things carefully",
      decide: 'which is the most important thing to plan carefully',
      mindmap: {
        centre: 'Is it important to plan these things carefully?',
        branches: ['studies', 'special occasions', 'free-time activities', 'holidays', 'career'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Do you like making plans for the future? (Why? / Why not?)',
        "Is it important for students to make plans about the future while they're still at school? (Why? / Why not?)",
        "Do you think it's true that people who plan their lives carefully are more likely to lead happy lives? (Why? / Why not?)",
        'Do you think young children should be allowed to plan how they spend their time? (Why? / Why not?)',
        'Some people say that the best times in life are never planned. Do you agree? (Why? / Why not?)',
        'Some people say that before making a big decision we should talk to as many people as possible. Do you agree? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking tests：书 91–93（PDF 92–94）；口语彩色插页 Visual materials：书 167–169（PDF 168–170）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（书 167–169）：仅记录页码引用，未嵌入图片

const STD4_S2 = {
  meta: {
    id: 'fce-standard-4-test2-speaking',
    title: 'FCE 标准版真题 4 · Test 2 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Speaking',
    pages: '书 91–93 · 插页 167–169',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Visual materials 书 167–169（PDF 168–170）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 91）印有：Note: The visual material for Test 2 appears on pages 167–169. 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1 完全相同。',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read? Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 2）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      note: "框架页照录：Task 1 前有 \"(Candidate A), it's your turn first.\"；Task 2 前有 \"Now, (Candidate B), here are your photographs.\"；图片指示语 \"Indicate the pictures on page 167 to the candidates.\"（Task 1）/ \"page 168\"（Task 2）；每任务后接 \"All right?\"；时长标注 [1 minute.] / [Approximately 30 seconds.]。Task 2 的 partner question 原书即印作 \"do you / did you enjoy painting at school?\"（书 168 图片 2D 为成人协助儿童画画，问题与图对应），经 5 倍/8 倍放大复核照录。",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Spending time in the forest',
          q: "Here are your photographs. They show people spending time in a forest. I'd like you to compare the photographs, and say what you think the people are enjoying about spending time in the forest.",
          partnerQuestion: '(Candidate B), do you like visiting forests? (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 书 167（Test 2，图片 2A/2B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Helping other people',
          q: "Here are your photographs. They show people who need help. I'd like you to compare the photographs, and say why you think the people need help in these situations.",
          partnerQuestion: '(Candidate A), do you / did you enjoy painting at school? (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 书 168（Test 2，图片 2C/2D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Sharing ideas online',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Some people think it's good to share ideas with other people online, for example on forums, blogs and social media sites. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page 169 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's good or bad to share ideas with other people online.",
      discuss: "whether it's good or bad to share ideas with other people online",
      decide: 'which is the best reason for sharing ideas with other people online',
      mindmap: {
        centre: 'Is it good or bad to share ideas with other people online?',
        branches: ['keeping in touch', 'getting negative comments', 'having fun', "believing things that aren't true", 'wasting time'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Do you spend a lot of time talking to friends online? (Why? / Why not?)',
        "Do you think it's true that meeting friends face-to-face is always better than chatting online? (Why? / Why not?)",
        'Some people say that students can learn more online than in the classroom. What do you think? (Why?)',
        "Some people say we don't really need books any more because we can find all the information we need online. What do you think? (Why?)",
        'Do you think that performing songs online or writing things online is a good way for people to become famous? (Why? / Why not?)',
        'Do you think that people will spend more or less time online in the future? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking tests：书 94–96（PDF 95–97）；口语彩色插页 Visual materials：书 170–172（PDF 171–173）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（书 170–172）：仅记录页码引用，未嵌入图片

const STD4_S3 = {
  meta: {
    id: 'fce-standard-4-test3-speaking',
    title: 'FCE 标准版真题 4 · Test 3 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Speaking',
    pages: '书 94–96 · 插页 170–172',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Visual materials 书 170–172（PDF 171–173）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 94）印有：Note: The visual material for Test 3 appears on pages 170–172. 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1 完全相同。',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read? Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 3）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      note: "框架页照录：Task 1 前有 \"(Candidate A), it's your turn first.\"；Task 2 前有 \"Now, (Candidate B), here are your photographs.\"；图片指示语 \"Indicate the pictures on page 170 to the candidates.\"（Task 1）/ \"page 171\"（Task 2）；每任务后接 \"All right?\"；时长标注 [1 minute.] / [Approximately 30 seconds.]",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Resting',
          q: "Here are your photographs. They show people resting in different places. I'd like you to compare the photographs, and say why you think the people are resting in these places.",
          partnerQuestion: '(Candidate B), do you ever go to the gym? (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 书 170（Test 3，图片 3A/3B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Enjoying music',
          q: "Here are your photographs. They show people enjoying music in different ways. I'd like you to compare the photographs, and say what you think the people are enjoying about their music.",
          partnerQuestion: '(Candidate A), would you like to write music? (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 书 171（Test 3，图片 3C/3D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Qualifications',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Some people think that in order to be successful, it's important to get qualifications in lots of different subjects. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page 172 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's important to get lots of different qualifications if you want to be successful.",
      discuss: "whether it's important to get lots of different qualifications if you want to be successful",
      decide: 'what the best reason is for getting lots of different qualifications',
      mindmap: {
        centre: 'Is it important to get qualifications in lots of different subjects if you want to be successful?',
        branches: ['having more opportunities in life', 'continuing to learn new things', 'being really good at one thing', 'being able to do different jobs', 'having the time to study'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Do you enjoy learning new things that could be useful in the future? (Why? / Why not?)',
        "Do you think it's a good idea for students to have a part-time job when they're studying at college or university? (Why? / Why not?)",
        'Some people say that the only reason for getting good qualifications is to get a good job. What do you think? (Why?)',
        'Do you think that people have to work too hard these days? (Why? / Why not?)',
        "Do you think it's a good idea for people to work in another country for a while? (Why? / Why not?)",
        "Some people say that money is the most important thing to think about when you're choosing a career. Do you agree? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

// 来源：B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking tests：书 97–99（PDF 98–100）；口语彩色插页 Visual materials：书 173–175（PDF 174–176）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（书 173–175）：仅记录页码引用，未嵌入图片

const STD4_S4 = {
  meta: {
    id: 'fce-standard-4-test4-speaking',
    title: 'FCE 标准版真题 4 · Test 4 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Speaking',
    pages: '书 97–99 · 插页 173–175',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Visual materials 书 173–175（PDF 174–176）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 97）印有：Note: The visual material for Test 4 appears on pages 173–175. 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1 完全相同。',
      categories: [
        {
          name: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          name: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read? Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          name: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 4）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      note: "框架页照录：Task 1 前有 \"(Candidate A), it's your turn first.\"；Task 2 前有 \"Now, (Candidate B), here are your photographs.\"；图片指示语 \"Indicate the pictures on page 173 to the candidates.\"（Task 1）/ \"page 174\"（Task 2）；每任务后接 \"All right?\"；时长标注 [1 minute.] / [Approximately 30 seconds.]",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Preparing food',
          q: "Here are your photographs. They show people preparing food in different situations. I'd like you to compare the photographs, and say why you think the people are preparing food in these situations.",
          partnerQuestion: '(Candidate B), do you like cooking for your family and friends? (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 书 173（Test 4，图片 4A/4B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Writing',
          q: "Here are your photographs. They show people writing in different situations. I'd like you to compare the photographs, and say why you think the people are writing in these situations.",
          partnerQuestion: '(Candidate A), do you find it easy to study at home? (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 书 174（Test 4，图片 4C/4D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Advertising',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Some people believe that they are too easily influenced by advertising. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page 175 to the candidates. Allow 15 seconds.) Now, talk to each other about whether people are too easily influenced by advertising.",
      discuss: 'whether people are too easily influenced by advertising',
      decide: 'which is the best reason for not watching any advertisements',
      mindmap: {
        centre: 'Are people too easily influenced by advertising?',
        branches: ["buying what they don't need", 'deciding what you want for yourself', 'wanting things their friends have', 'enjoying watching adverts', 'having the latest things'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Do you enjoy watching adverts on television? (Why? / Why not?)',
        "Some people say that there should be no adverts for children's toys on television. What do you think? (Why?)",
        'Some people say that we can learn more about products from talking to friends than watching advertising. What do you think? (Why?)',
        'Do you think that advertising always tells us the truth about a product? (Why? / Why not?)',
        "Do you think people go shopping just because of the advertisements they've seen? (Why? / Why not?)",
        'Do you think that in the future people will do most of their shopping online? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};

export const fceStandardSpeakingTests = [STD1_S1, STD1_S2, STD1_S3, STD1_S4, STD2_S1, STD2_S2, STD2_S3, STD2_S4, STD3_S1, STD3_S2, STD3_S3, STD3_S4, STD4_S1, STD4_S2, STD4_S3, STD4_S4]
