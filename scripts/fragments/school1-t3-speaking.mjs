// 来源：Cambridge First Certificate English Tests for Schools 1.PDF（用户原件扫描版）
// Speaking frames：书 101–103（PDF 100–102）；P1（书 101）、P2（书 102）、P3/P4（书 103）均有帧页
// 页码映射：PDF 页 = 书页 − 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 3 分支内容见视觉材料 3E（书末彩色插页 C9），扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-1-test3-speaking',
    examKey: 'fce-schools-1-test3',
    title: 'FCE 校园版真题 1 · Test 3 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 3,
    paper: 'speaking',
    pages: '书 101–103（P1 书 101、P2 书 102、P3/P4 书 103）',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '无固定答案',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 3 appears on pages C7 and C8 (Part 2), and C9 (Part 3).',
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
          topic: 'Getting help',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people getting help in different situations. I'd like you to compare the photographs, and say why you think the people need help in these situations. All right?",
          partnerQuestion: '(Candidate B), have you ever needed help with your work? (Why?)',
          images: [
            'Photo 3A:（视觉材料页 C7，未提供扫描图）people getting help in a situation.',
            'Photo 3B:（视觉材料页 C7，未提供扫描图）people getting help in another situation.',
          ],
          imagesPage: 'Visual materials 书?（Task 3A / 3B，扫描图未提供）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'In town',
          q: "Now, (Candidate B), here are your photographs. They show people doing different things in town. I'd like you to compare the photographs, and say why you think the people have chosen to do these things in town. All right?",
          partnerQuestion: '(Candidate A), what do you like to do when you\'re in town? (Why?)',
          images: [
            'Photo 3C:（视觉材料页 C8，未提供扫描图）people doing different things in town.',
            'Photo 3D:（视觉材料页 C8，未提供扫描图）people doing other things in town.',
          ],
          imagesPage: 'Visual materials 书?（Task 3C / 3D，扫描图未提供）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'A good education',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] I'd like you to imagine that a teacher is planning a class discussion about what's important for a good education. First you have some time to look at the task. (Indicate the visual 3E on page C9 to the candidates. Allow 15 seconds.) Now, talk to each other about how important it is for schools to encourage students to do these things as part of their education.",
      discuss: 'how important it is for schools to encourage students to do these things as part of their education',
      decide: 'which of these things is not so important for a good education',
      mindmap: {
        centre: 'How important is it for schools to encourage students to do these things as part of their education?',
        branches: ['（视觉材料页 C9 / 3E，未提供扫描图，5 个分支未知）'],
        note: '帧页未列出 5 个分支；分支内容见 Visual materials 书末彩色插页 3E（a good education），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'What do you think is the best thing about your school? (Why?)',
        "Do you think learning a musical instrument should be part of every student's education? (Why? / Why not?)",
        'Is it important for all students to do homework? (Why? / Why not?)',
        'Some schools organise activities for students to do after school or at the weekends. What do you think about this? (Why?)',
        'Many schools organise trips to other countries for their students. Do you think this is a good idea? (Why? / Why not?)',
        'What do you think is the right age for students to leave school? (Why?)',
        'Do you think all students should go to university? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
