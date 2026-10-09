// Cambridge English First 1（标准版1）Test 4 Speaking
// 逐字转录自 cen_first_1_with_answers .pdf（用户原件扫描版）：
// 说明页 PDF 93（书 94）、Interlocutor frames PDF 103–105（书 104–106）
// Part 2 视觉材料在书末彩色插页 C10/C11，Part 3 在 C12（C12 已核对 PDF 183）
// 官方无标准答案，仅提供考官框架
export default {
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
