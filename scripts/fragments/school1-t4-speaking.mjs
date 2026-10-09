// 来源：Cambridge First Certificate English Tests for Schools 1.PDF（用户原件扫描版）
// Speaking frames：书 104–106（PDF 103–105）；P1（书 104）、P2（书 105）、P3/P4（书 106）均有帧页
// 页码映射：PDF 页 = 书页 − 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 3 分支内容见视觉材料 4E（书末彩色插页 C12），扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-1-test4-speaking',
    examKey: 'fce-schools-1-test4',
    title: 'FCE 校园版真题 1 · Test 4 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 4,
    paper: 'speaking',
    pages: '书 104–106（P1 书 104、P2 书 105、P3/P4 书 106）',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '无固定答案',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 4 appears on pages C10 and C11 (Part 2), and C12 (Part 3).',
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
          topic: 'Travelling around a city',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people travelling around a city in different ways. I'd like you to compare the photographs, and say what you think might be difficult for the people about travelling around a city in these ways. All right?",
          partnerQuestion: '(Candidate B), how would you prefer to travel around a city? (Why?)',
          images: [
            'Photo 4A:（视觉材料页 C10，未提供扫描图）people travelling around a city in one way.',
            'Photo 4B:（视觉材料页 C10，未提供扫描图）people travelling around a city in another way.',
          ],
          imagesPage: 'Visual materials 书?（Task 4A / 4B，扫描图未提供）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'A free afternoon',
          q: "Now, (Candidate B), here are your photographs. They show people doing different things on a free afternoon. I'd like you to compare the photographs, and say why you think the people are enjoying doing these things on a free afternoon. All right?",
          partnerQuestion: '(Candidate A), which of these things would you prefer to do on a free afternoon? (Why?)',
          images: [
            'Photo 4C:（视觉材料页 C11，未提供扫描图）people doing something on a free afternoon.',
            'Photo 4D:（视觉材料页 C11，未提供扫描图）people doing something else on a free afternoon.',
          ],
          imagesPage: 'Visual materials 书?（Task 4C / 4D，扫描图未提供）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Good friends',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Here are some things that might be important if you want to have good friends and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 4E on page C12 to the candidates. Allow 15 seconds.) Now, talk to each other about how important these things are if you want to have good friends.",
      discuss: 'how important these things are if you want to have good friends',
      decide: 'which two things are most important',
      mindmap: {
        centre: 'How important are these things if you want to have good friends?',
        branches: ['（视觉材料页 C12 / 4E，未提供扫描图，5 个分支未知）'],
        note: '帧页未列出 5 个分支；分支内容见 Visual materials 书末彩色插页 4E（good friends），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "How easy do you think it is to make new friends? (Why? / What's the best way to do this?)",
        'What is the perfect number of friends to have? (Why?)',
        'How important is it to be able to trust our friends? (Why?)',
        'What do you think is the main reason why friends argue? (Why?)',
        'Is it possible to have close friends who are a lot older or younger than us? (Why? / Why not?)',
        'People in families sometimes find it hard to be friends with each other. Why do you think this is?',
        'Is it possible to be close friends with people that you only talk to online? (Why? / Why not?)',
        'Is it easier to be friends with someone who is very similar to you or someone who is very different? (Why?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
