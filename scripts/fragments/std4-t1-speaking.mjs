// 来源：B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking tests：书 88–90（PDF 89–91）；口语彩色插页 Visual materials：书 164–166（PDF 165–167）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（书 164–166）：仅记录页码引用，未嵌入图片

export default {
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
