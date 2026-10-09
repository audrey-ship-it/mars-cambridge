// 来源：FIRST3  青少版.pdf（用户原件扫描版，B2 First for Schools 3）
// Speaking frames：书 98–100（PDF 100–102）；Visual materials：C4、C5（Part 2），C6（Part 3）
// 页码映射：PDF 页 = 书页 + 2；官方无标准答案；本书框架直接标 Test 1–4，与本文档编号一致
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图
// Test 2 的 P3 分支来自视觉材料卡 C6，扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-3-test2-speaking',
    examKey: 'fce-schools-3-test2',
    title: 'FCE 校园版真题 3 · Test 2 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 2,
    paper: 'speaking',
    pages: '书 98–100 · 视觉材料 C4–C6',
    source: 'FIRST3  青少版.pdf',
    answerSource: '书132 后的 Speaking frames 与视觉材料',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 2 appears on pages C4 and C5 (Part 2), and C6 (Part 3).',
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.\n\nSelect one or more questions from any of the following categories, as appropriate.",
      categories: [
        {
          name: 'Habits and routines',
          questions: [
            'Do you like to be busy every day? (Why? / Why not?)',
            'What sport do you enjoy playing? (Why do you like doing that?)',
            "Do you enjoy watching TV? (What's your favourite programme?) (Why do you like it?)",
            'Do you ever meet your friends in the evenings after school? (What do you do together?)',
          ],
        },
        {
          name: 'The weekend',
          questions: [
            'Do you prefer to spend time with your family or with your friends at the weekend? (Why?)',
            'Are there a lot of interesting things to do in your town at the weekend? (What do you do there?)',
            'Do you often have to do homework at the weekend? (How do you feel about that?)',
            "Can you tell us something about what you're planning to do next weekend?",
          ],
        },
        {
          name: 'The future',
          questions: [
            'What are you going to do after school today? (Why?)',
            'What would you like to do for your next birthday? (Why?)',
            "Is there something you'd like to learn in the future? (What would you like to learn?) (Why?)",
            'What would you like to do when you leave school? (Why?)',
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Listening carefully',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people listening carefully in different situations. I'd like you to compare the photographs, and say why you think the people are listening carefully in these situations. All right?",
          partnerQuestion: '(Candidate B), do you always listen carefully to your teachers? (Why?)',
          images: [
            'Photo 2A:（视觉材料页 C4，未提供扫描图）people listening carefully in a situation.',
            'Photo 2B:（视觉材料页 C4，未提供扫描图）people listening carefully in another situation.',
          ],
          imagesPage: 'Visual materials C4（Task 2A / 2B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Family holidays',
          q: "Now, (Candidate B), here are your photographs. They show families spending their holidays in different places. I'd like you to compare the photographs, and say what you think the families are enjoying about spending their holidays in these places. All right?",
          partnerQuestion: '(Candidate A), do you enjoy spending time by the sea? (Why?)',
          images: [
            'Photo 2C:（视觉材料页 C5，未提供扫描图）families spending their holiday in a place.',
            'Photo 2D:（视觉材料页 C5，未提供扫描图）families spending their holiday in another place.',
          ],
          imagesPage: 'Visual materials C5（Task 2C / 2D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Depending on the internet',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Some people use the internet to find all the information they need, and others think this is not a good idea. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 2E on page C6 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's a good idea for people to use the internet to find all the information they need.",
      discuss: "whether it's a good idea for people to use the internet to find all the information they need",
      decide: 'what you think is the best reason for people not to depend on the internet for information',
      mindmap: {
        centre: 'Is it a good idea for people to use the internet to find all the information they need?',
        branches: [
          '（视觉材料页 C6，未提供扫描图，分支未知）',
        ],
        note: '帧页未列出分支；分支内容见 Visual materials C6 Task 2E（卡片上"some things they think about"），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Do you and your friends always use the internet for doing your homework? (Why? / Why not?)',
        'Do you think parents should control how long their children spend online? (Why? / Why not?)',
        'Some people think we can learn more from watching television than from going online. What do you think?',
        'Should computers be part of every lesson at school? (Why? / Why not?)',
        "Sometimes people try to stay offline for a whole day. Do you think doing that's a good idea? (Why? / Why not?)",
        "A lot of people post pictures and information about what they're doing on the internet. Do you think that's a good thing to do? (Why do you say that?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
