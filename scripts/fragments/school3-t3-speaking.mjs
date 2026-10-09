// 来源：FIRST3  青少版.pdf（用户原件扫描版，B2 First for Schools 3）
// Speaking frames：书 101–103（PDF 103–105）；Visual materials：C7、C8（Part 2），C9（Part 3）
// 页码映射：PDF 页 = 书页 + 2；官方无标准答案；本书框架直接标 Test 1–4，与本文档编号一致
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图
// Test 3 的 P3 分支来自视觉材料卡 C9，扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-3-test3-speaking',
    examKey: 'fce-schools-3-test3',
    title: 'FCE 校园版真题 3 · Test 3 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 3,
    paper: 'speaking',
    pages: '书 101–103 · 视觉材料 C7–C9',
    source: 'FIRST3  青少版.pdf',
    answerSource: '书144 后的 Speaking frames 与视觉材料',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 3 appears on pages C7 and C8 (Part 2), and C9 (Part 3).',
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
          topic: 'Working together',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people working together in different situations. I'd like you to compare the photographs, and say why you think the people are working together in these situations. All right?",
          partnerQuestion: '(Candidate B), do you often work together with your friends? (Why?)',
          images: [
            'Photo 3A:（视觉材料页 C7，未提供扫描图）people working together in a situation.',
            'Photo 3B:（视觉材料页 C7，未提供扫描图）people working together in another situation.',
          ],
          imagesPage: 'Visual materials C7（Task 3A / 3B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Learning difficult things',
          q: "Now, (Candidate B), here are your photographs. They show people learning to do new things in different situations. I'd like you to compare the photographs, and say what you think is difficult for the people about learning these things. All right?",
          partnerQuestion: '(Candidate A), which of these things would you like to learn to do? (Why?)',
          images: [
            'Photo 3C:（视觉材料页 C8，未提供扫描图）people learning to do a new thing.',
            'Photo 3D:（视觉材料页 C8，未提供扫描图）people learning to do another new thing.',
          ],
          imagesPage: 'Visual materials C8（Task 3C / 3D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Traditions and customs',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Some teachers think it's important for students to learn about their country's traditions and customs when they're at school. Here are some of the things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 3E on page C9 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's important for students to learn about their country's traditions and customs when they're at school.",
      discuss: "whether it's important for students to learn about their country's traditions and customs when they're at school",
      decide: "what you think is the best reason for students to learn about their country's traditions and customs",
      mindmap: {
        centre: "Is it important for students to learn about their country's traditions and customs when they're at school?",
        branches: [
          '（视觉材料页 C9，未提供扫描图，分支未知）',
        ],
        note: '帧页未列出分支；分支内容见 Visual materials C9 Task 3E（卡片上"some of the things they think about"），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "Is there a custom or tradition in your country that's very popular? (Why do you think it's popular?)",
        "Do you think it's important to celebrate traditional festivals? (Why? / Why not?)",
        "Do you think it's true that traditions aren't so important now because countries are becoming more similar? (Why? / Why not?)",
        'Do you think it is a good idea for schools to organise trips to historic places? (Why? / Why not?)',
        'Some people say that the best way for children to learn about history is by talking to their grandparents or older people. What do you think?',
        "Some people say it's more important to study international history and not the history of your own country. Do you agree? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
