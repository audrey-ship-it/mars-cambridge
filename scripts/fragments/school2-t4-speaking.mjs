// 来源：Cambridge First Certificate English Tests for Schools 2.PDF（用户原件扫描版）
// Speaking frames：书 104–106（PDF 105–107）；Visual materials：C10、C11（Part 2），C12（Part 3）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图
// Test 8（= 校园版2 Test 4）P3 分支来自视觉材料卡 C12，扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-2-test4-speaking',
    examKey: 'fce-schools-2-test4',
    title: 'FCE 校园版真题 2 · Test 4 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 4,
    paper: 'speaking',
    pages: '书 104–106 · 视觉材料 C10–C12',
    source: 'Cambridge First Certificate English Tests for schools 2.PDF',
    answerSource: '无固定答案',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 8 appears on pages C10 and C11 (Part 2), and C12 (Part 3).',
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
          topic: 'Eating together',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people eating together in different places. I'd like you to compare the photographs, and say why the people have decided to eat together in these places. All right?",
          partnerQuestion: '(Candidate B), do you often eat out with friends? (Why? / Why not?)',
          images: [
            'Photo 8A:（视觉材料页 C10，未提供扫描图）people eating together in a place.',
            'Photo 8B:（视觉材料页 C10，未提供扫描图）people eating together in another place.',
          ],
          imagesPage: 'Visual materials C10（Task 8A / 8B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Working hard',
          q: "Now, (Candidate B), here are your photographs. They show people working hard in different situations. I'd like you to compare the photographs, and say what you think they might find difficult about working hard in these situations. All right?",
          partnerQuestion: '(Candidate A), do you ever go to a library to work? (Why? / Why not?)',
          images: [
            'Photo 8C:（视觉材料页 C11，未提供扫描图）people working hard in a situation.',
            'Photo 8D:（视觉材料页 C11，未提供扫描图）people working hard in another situation.',
          ],
          imagesPage: 'Visual materials C11（Task 8C / 8D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Feeling happy at school',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Here are some things that many people believe are important if students want to feel happy at school, and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 8E on page C12 to the candidates. Allow 15 seconds.) Now, talk to each other about how important these things are if students want to feel happy at school.",
      discuss: 'how important these things are if students want to feel happy at school',
      decide: 'which is the most important thing that makes students feel happy at school',
      mindmap: {
        centre: 'How important are these things if students want to feel happy at school?',
        branches: [
          '（视觉材料页 C12，未提供扫描图，分支未知）',
        ],
        note: '帧页未列出分支；分支内容见 Visual materials C12 Task 8E（things important for students to feel happy at school），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "Do you think most students in (candidate's country) feel happy about going to school every day? (Why? / Why not?)",
        "Do you think it's true that it takes a long time to feel happy when you start a new school? (Why? / Why not?)",
        'Some people say that students should be allowed to choose what they want to study. What do you think?',
        'Should schools give students longer breaks during the day? (Why? / Why not?)',
        "Do you think it's a good idea for schools to organise trips to interesting places during the school day? (Why? / Why not?)",
        'Should schools give prizes to good students at the end of the year? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
