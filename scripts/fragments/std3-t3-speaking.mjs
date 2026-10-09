// 来源：标准版3 First 3.pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// Speaking 说明页：书 72（PDF 74）；Interlocutor frames：书 101–103（PDF 103–105）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C7–C9（PDF 185–187）：仅记录页码引用，未嵌入图片
// ⚠ C8（PDF 186，Test 3 Part 2 第二组图片 3C/3D）经两次渲染读取均被图像审核拦截，未能视觉核对；
//   其页码位置与归属由插页序列（185=C7、187=C9 均已核对）及书 176 照片版权页（C8 上/下两图）确证，
//   图片主题与问题以 Interlocutor frames（书 102）为准，未凭推测编造。

export default {
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
