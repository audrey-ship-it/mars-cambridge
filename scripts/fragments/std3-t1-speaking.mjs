// 来源：标准版3 First 3.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking 说明页：书 28（PDF 30）；Interlocutor frames：书 95–97（PDF 97–99）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C1–C3（PDF 179–181）：仅记录页码引用，未嵌入图片

export default {
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
