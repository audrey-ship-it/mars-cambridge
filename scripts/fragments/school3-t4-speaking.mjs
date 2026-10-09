// 来源：FIRST3  青少版.pdf（用户原件扫描版，B2 First for Schools 3）
// Speaking frames：书 104–106（PDF 106–108）；Visual materials：C10、C11（Part 2），C12（Part 3）
// 页码映射：PDF 页 = 书页 + 2；官方无标准答案；本书框架直接标 Test 1–4，与本文档编号一致
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图

export default {
  meta: {
    id: 'fce-schools-3-test4-speaking',
    examKey: 'fce-schools-3-test4',
    title: 'FCE 校园版真题 3 · Test 4 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 4,
    paper: 'speaking',
    pages: '书 104–106 · 视觉材料 C10–C12（书 106 框架页未提供扫描）',
    source: 'FIRST3  青少版.pdf',
    answerSource: '书156 后的 Speaking frames 与视觉材料',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 4 appears on pages C10 and C11 (Part 2), and C12 (Part 3).',
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
          topic: 'Studying science',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people studying science in different ways. I'd like you to compare the photographs, and say what you think the advantages are of studying science in these ways. All right?",
          partnerQuestion: '(Candidate B), do you enjoy studying science? (Why?)',
          images: [
            'Photo 4A:（视觉材料页 C10，未提供扫描图）people studying science in a way.',
            'Photo 4B:（视觉材料页 C10，未提供扫描图）people studying science in another way.',
          ],
          imagesPage: 'Visual materials C10（Task 4A / 4B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Spending time alone',
          q: "Now, (Candidate B), here are your photographs. They show people spending time on their own. I'd like you to compare the photographs, and say why you think these people have decided to spend time on their own. All right?",
          partnerQuestion: '(Candidate A), do you like spending time on your own? (Why?)',
          images: [
            'Photo 4C:（视觉材料页 C11，未提供扫描图）people spending time on their own in a situation.',
            'Photo 4D:（视觉材料页 C11，未提供扫描图）people spending time on their own in another situation.',
          ],
          imagesPage: 'Visual materials C11（Task 4C / 4D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Spending time outdoors',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three]\n\nSome people think teenagers should spend most of their free time outdoors with their friends. Here are some things they think about and a question for you to discuss. First you have some time to look at the task at hand.\n\nIndicate the visual 4E on page C12 to the candidates. Allow 15 seconds.\n\nNow, talk to each other about whether teenagers should spend most of their free time outdoors with their friends.",
      discuss: 'whether teenagers should spend most of their free time outdoors with their friends',
      decide: 'what you think is the most important reason for teenagers to spend their free time outdoors with their friends',
      mindmap: {
        centre: 'Should teenagers spend most of their free time outdoors with their friends?',
        branches: [
          'Indicate the visual 4E on page C12 to the candidates.',
        ],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Thank you. Now you have about a minute to decide what you think is the most important reason for teenagers to spend their free time outdoors with their friends.',
      questions: [
        'Do you and your friends spend a lot of your time doing outdoor activities? (Why? / Why not?)',
        'Should students have to do outdoor sports lessons at school? (Why? / Why not?)',
        "Do you think it's a good idea for families to go on holidays where they spend a lot of time outside, for example camping holidays? (Why? / Why not?)",
        'Is growing up in the countryside better for children than living in cities? (Why? / Why not?)',
        'Some people say that it is important for big cities to have good parks. Do you agree? (Why? / Why not?)',
        "Do you think it's true that if people spent more time outside, they'd care more about protecting the environment? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
