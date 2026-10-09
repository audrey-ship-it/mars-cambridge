// 来源：Cambridge First Certificate English Tests for Schools 1.PDF（用户原件扫描版）
// Speaking frames：书 98–100（PDF 97–99）；P1（书 98）、P2（书 99）、P3/P4（书 100）均有帧页
// 页码映射：PDF 页 = 书页 − 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 3 分支内容见视觉材料 2E（书末彩色插页 C6），扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-1-test2-speaking',
    examKey: 'fce-schools-1-test2',
    title: 'FCE 校园版真题 1 · Test 2 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 2,
    paper: 'speaking',
    pages: '书 98–100（P1 书 98、P2 书 99、P3/P4 书 100）',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '无固定答案',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录（书 98）：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 2 appears on pages C4 and C5 (Part 2), and C6 (Part 3).',
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
          topic: 'Cooking',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people cooking in different situations. I'd like you to compare the photographs, and say why you think the people are cooking in these situations. All right?",
          partnerQuestion: '(Candidate B), would you like to cook in either of these situations? (Why? / Why not?)',
          images: [
            'Photo 2A:（视觉材料页 C4，未提供扫描图）people cooking in a situation.',
            'Photo 2B:（视觉材料页 C4，未提供扫描图）people cooking in another situation.',
          ],
          imagesPage: 'Visual materials 书?（Task 2A / 2B，扫描图未提供）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Taking photos',
          q: "Now, (Candidate B), here are your photographs. They show people taking photographs in different situations. I'd like you to compare the photographs, and say why you think the people are taking photographs in these situations. All right?",
          partnerQuestion: "(Candidate A), do you like taking photographs when you're on holiday? (Why? / Why not?)",
          images: [
            'Photo 2C:（视觉材料页 C5，未提供扫描图）people taking photographs in a situation.',
            'Photo 2D:（视觉材料页 C5，未提供扫描图）people taking photographs in another situation.',
          ],
          imagesPage: 'Visual materials 书?（Task 2C / 2D，扫描图未提供）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Everyday life',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Here are some things that many of us try to do in our everyday lives and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 2E on page C6 to the candidates. Allow 15 seconds.) Now, talk to each other about why it's important to do these things in our everyday lives.",
      discuss: "why it's important to do these things in our everyday lives",
      decide: 'which of these things it is most important for everyone to do',
      mindmap: {
        centre: "Why is it important to do these things in our everyday lives?",
        branches: ['（视觉材料页 C6 / 2E，未提供扫描图，5 个分支未知）'],
        note: '帧页未列出 5 个分支；分支内容见 Visual materials 书末彩色插页 2E（everyday life），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'What do you enjoy doing most after school each day? (Why?)',
        "Do you think it's important to eat healthily every day? (Why? / Why not?)",
        'Do you think life would be better if weekends were longer and everyone had more free time? (Why? / Why not?)',
        'Some people say that going on the Internet wastes a lot of our time. What do you think?',
        'Do you think people are happier if they have a very busy life? (Why? / Why not?)',
        "Some people say you can't have a happy life if you don't work hard. What do you think?",
        'What do you think is most important for a happy life? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
