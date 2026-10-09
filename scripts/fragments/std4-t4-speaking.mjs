// 来源：B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking tests：书 97–99（PDF 98–100）；口语彩色插页 Visual materials：书 173–175（PDF 174–176）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（书 173–175）：仅记录页码引用，未嵌入图片

export default {
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
