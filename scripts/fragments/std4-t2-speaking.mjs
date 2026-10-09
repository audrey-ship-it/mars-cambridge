// 来源：B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking tests：书 91–93（PDF 92–94）；口语彩色插页 Visual materials：书 167–169（PDF 168–170）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（书 167–169）：仅记录页码引用，未嵌入图片

export default {
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
