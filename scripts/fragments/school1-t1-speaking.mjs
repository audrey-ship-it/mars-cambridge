// 来源：Cambridge First Certificate English Tests for Schools 1.PDF（用户原件扫描版）
// Speaking frames：书 95–97（PDF 94–96）；Visual materials：书 185–186（PDF 186–187）
// 页码映射：PDF 页 = 书页 − 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图
// Test 1–4 P3/P4 帧页均已补全（P3 分支来自视觉材料卡，扫描图未提供，仅留占位）

export default {
  meta: {
    id: 'fce-schools-1-test1-speaking',
    examKey: 'fce-schools-1-test1',
    title: 'FCE 校园版真题 1 · Test 1 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 1,
    paper: 'speaking',
    pages: '书 95–97 · 视觉材料 185–186',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '无固定答案',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 1 appears on pages C1 and C2 (Part 2), and C3 (Part 3).',
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
          topic: 'Family holidays',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people doing different things on a family holiday. I'd like you to compare the photographs, and say why you think the people have chosen to do these things on their family holiday. All right?",
          partnerQuestion: '(Candidate B), which of these things would you prefer to do with your family? (Why?)',
          images: [
            'Photo 1A: A boy lying on a sofa at home, watching a football match on TV and holding a remote control.',
            'Photo 1B: A family (parents and two daughters) sitting around a table eating a meal together, with soup in a pot, bread and small pumpkins.',
          ],
          imagesPage: 'Visual materials 书 185（Task 1A / 1B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Celebrations',
          q: "Now, (Candidate B), here are your photographs. They show people celebrating in different situations. I'd like you to compare the photographs, and say why you think the people are celebrating in these situations. All right?",
          partnerQuestion: '(Candidate A), do you enjoy birthday celebrations? (Why? / Why not?)',
          images: [
            'Photo 1C:（视觉材料页 C2，未提供扫描图）people celebrating in a situation.',
            'Photo 1D:（视觉材料页 C2，未提供扫描图）people celebrating in another situation.',
          ],
          imagesPage: 'Visual materials 书 186?（Task 1C / 1D，扫描图未提供）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'The place where you live',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] I'd like you to imagine that a teacher is planning a class discussion about the place where you live. First you have some time to look at the task. (Indicate the visual 1E on page C3 to the candidates. Allow 15 seconds.) Now, talk to each other about what the advantages and disadvantages are of having these things near where you live.",
      discuss: 'what the advantages and disadvantages are of having these things near where you live',
      decide: 'which of these things it is most important to have near where you live',
      mindmap: {
        centre: 'What are the advantages and disadvantages of having these things near where you live?',
        branches: [
          '（视觉材料页 C3，未提供扫描图，5 个分支未知）',
        ],
        note: '帧页未列出 5 个分支；分支内容见 Visual materials 书 186 Task 1C（things near where you live），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "What's the best thing about living in (candidate's area)? (Why?)",
        'How important is it to live near your friends? (Why?)',
        "If you could live anywhere in (candidate's country), which town would you choose to live in? (Why?)",
        'Do you think it might be exciting to live in lots of different places? (Why? / Why not?)',
        'Some people live in the same place all their lives. What do you think about this?',
        'Some people go to live and work in other countries. Do you think this is a good thing to do? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
