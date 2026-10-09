// FCE Speaking (Paper 4) — Cambridge English First 1（标准版1）Test 2
// 说明页转录自书 50；考官脚本与题目转录自框架页书 98–100（PDF 第 97–99 页，扫描件视觉转录）。
// Part 2 图片在书末彩色插页 C4/C5，Part 3 思维导图（2E Television）在 C6（PDF 第 175/176/177 页），已逐项核对转录。

export default {
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
