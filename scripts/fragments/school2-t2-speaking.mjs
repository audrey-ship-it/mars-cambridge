// 来源：Cambridge First Certificate English Tests for Schools 2.PDF（用户原件扫描版）
// Speaking frames：书 98–100（PDF 099–101）；Visual materials：C4、C5（Part 2），C6（Part 3）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图
// Test 6（= 校园版2 Test 2）P3 分支来自视觉材料卡 C6，扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-2-test2-speaking',
    examKey: 'fce-schools-2-test2',
    title: 'FCE 校园版真题 2 · Test 2 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 2,
    paper: 'speaking',
    pages: '书 98–100 · 视觉材料 C4–C6',
    source: 'Cambridge First Certificate English Tests for schools 2.PDF',
    answerSource: '无固定答案',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 6 appears on pages C4 and C5 (Part 2), and C6 (Part 3).',
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you. First of all, we'd like to know something about you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)? What do you like about living (here / name of candidate's home town)? And what about you, (Candidate A/B)?\n\nSelect one or more questions from any of the following categories, as appropriate.",
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
          name: 'The Weekend',
          questions: [
            'Do you prefer to spend time with your family or with your friends at the weekend? (Why?)',
            'Are there a lot of interesting things to do in your town at the weekend? (What do you do there?)',
            'Do you often have to do homework at the weekend? (How do you feel about that?)',
            "Can you tell us something about what you're planning to do next weekend?",
          ],
        },
        {
          name: 'The Future',
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
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a short question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Trying to win',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people trying to win in different situations. I'd like you to compare the photographs, and say what you think might be difficult about trying to win in these situations. All right?",
          partnerQuestion: '(Candidate B), which of these things would you prefer to do? (Why?)',
          images: [
            'Photo 6A:（视觉材料页 C4，未提供扫描图）people trying to win in a situation.',
            'Photo 6B:（视觉材料页 C4，未提供扫描图）people trying to win in another situation.',
          ],
          imagesPage: 'Visual materials C4（Task 6A / 6B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Learning new things',
          q: "Now, (Candidate B), here are your photographs. They show people learning to do new things. I'd like you to compare the photographs, and say why you think the people are learning to do these things. All right?",
          partnerQuestion: '(Candidate A), would you like to learn how to cook? (Why?)',
          images: [
            'Photo 6C:（视觉材料页 C5，未提供扫描图）people learning to do a new thing.',
            'Photo 6D:（视觉材料页 C5，未提供扫描图）people learning to do another new thing.',
          ],
          imagesPage: 'Visual materials C5（Task 6C / 6D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Homework',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Some students have homework every day. Here are some reasons why having homework every day might be a good or bad thing and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 6E on page C6 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's important for students to have homework every day.",
      discuss: "whether it's important for students to have homework every day",
      decide: 'which is the most important reason for having homework',
      mindmap: {
        centre: 'Is it important for students to have homework every day?',
        branches: [
          '（视觉材料页 C6，未提供扫描图，分支未知）',
        ],
        note: '帧页未列出分支；分支内容见 Visual materials C6 Task 6E（reasons for/against having homework every day），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Some people say that students should never have to do homework. What do you think?',
        "Do you think students should have some control over how much homework they're given? (Why? / Why not?)",
        'Should parents ever help their children with homework? (Why? / Why not?)',
        'Do you think students learn more if they do homework with their friends? (Why? / Why not?)',
        'Is it a good idea for students to have homework during their school holidays? (Why? / Why not?)',
        "Some people say students these days use the internet too much when they're doing their homework. Do you agree? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
