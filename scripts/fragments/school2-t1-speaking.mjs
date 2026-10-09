// 来源：Cambridge First Certificate English Tests for Schools 2.PDF（用户原件扫描版）
// Speaking frames：书 95–97（PDF 096–098）；Visual materials：C1、C2（Part 2），C3（Part 3）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图
// Test 5（= 校园版2 Test 1）P3 分支来自视觉材料卡 C3，扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-2-test1-speaking',
    examKey: 'fce-schools-2-test1',
    title: 'FCE 校园版真题 2 · Test 1 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 1,
    paper: 'speaking',
    pages: '书 95–97 · 视觉材料 C1–C3',
    source: 'Cambridge First Certificate English Tests for schools 2.PDF',
    answerSource: '无固定答案',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 5 appears on pages C1 and C2 (Part 2), and C3 (Part 3).',
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
          topic: 'In the mountains',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people spending time in the mountains for different reasons. I'd like you to compare the photographs, and say what you think the people are enjoying about spending time in the mountains. All right?",
          partnerQuestion: '(Candidate B), which of these things would you prefer to do? (Why? / Why not?)',
          images: [
            'Photo 5A:（视觉材料页 C1，未提供扫描图）people spending time in the mountains for a reason.',
            'Photo 5B:（视觉材料页 C1，未提供扫描图）people spending time in the mountains for another reason.',
          ],
          imagesPage: 'Visual materials C1（Task 5A / 5B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Shopping in different places',
          q: "Now, (Candidate B), here are your photographs. They show people shopping in different places. I'd like you to compare the photographs, and say why the people have decided to go shopping in these places. All right?",
          partnerQuestion: '(Candidate A), which of these things would you prefer to do? (Why? / Why not?)',
          images: [
            'Photo 5C:（视觉材料页 C2，未提供扫描图）people shopping in a place.',
            'Photo 5D:（视觉材料页 C2，未提供扫描图）people shopping in another place.',
          ],
          imagesPage: 'Visual materials C2（Task 5C / 5D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Helping with the housework',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Some teenagers don't want to help with the housework but their parents think they should. Here are some things they talk about together and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 5E on page C3 to the candidates. Allow 15 seconds.) Now, talk to each other about whether teenagers should help their parents with housework each day.",
      discuss: 'whether teenagers should help their parents with housework each day',
      decide: 'what the most important reason is for teenagers to help their parents with the housework',
      mindmap: {
        centre: 'Should teenagers help their parents with housework each day?',
        branches: [
          '（视觉材料页 C3，未提供扫描图，分支未知）',
        ],
        note: '帧页未列出分支；分支内容见 Visual materials C3 Task 5E（reasons for teenagers helping with housework），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "What's the most important thing teenagers can do to help their parents? (Why?)",
        "Some people say it's better to help because you want to, and not because you have to. Do you agree? (Why? / Why not?)",
        'Some people say that teenagers shouldn\'t have to do any work at the weekend but should just have fun. What do you think?',
        'Should parents decide how teenagers spend their free time? (Why? / Why not?)',
        'Do you think it\'s important for teenagers to learn to look after themselves? (Why? / Why not?)',
        'Some people say that the most important thing for parents to teach their children is how to be kind and helpful. What do you think?',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
