// 来源：FIRST3  青少版.pdf（用户原件扫描版，B2 First for Schools 3）
// Speaking frames：书 95–97（PDF 097–099）；Visual materials：C1、C2（Part 2），C3（Part 3）
// 页码映射：PDF 页 = 书页 + 2；官方无标准答案；本书框架直接标 Test 1–4，与本文档编号一致
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图
// Test 1 的 P3 分支来自视觉材料卡 C3，扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-3-test1-speaking',
    examKey: 'fce-schools-3-test1',
    title: 'FCE 校园版真题 3 · Test 1 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 1,
    paper: 'speaking',
    pages: '书 95–97 · 视觉材料 C1–C3',
    source: 'FIRST3  青少版.pdf',
    answerSource: '书120 后的 Speaking frames 与视觉材料',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 1 appears on pages C1 and C2 (Part 2), and C3 (Part 3).',
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
          topic: 'After school clubs',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people doing activities in after school clubs. I'd like you to compare the photographs, and say what you think the people are enjoying about doing these activities in after school clubs. All right?",
          partnerQuestion: '(Candidate B), which of these activities would you prefer to do? (Why?)',
          images: [
            'Photo 1A:（视觉材料页 C1，未提供扫描图）people doing activities in an after school club.',
            'Photo 1B:（视觉材料页 C1，未提供扫描图）people doing activities in another after school club.',
          ],
          imagesPage: 'Visual materials C1（Task 1A / 1B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Taking photographs',
          q: "Now, (Candidate B), here are your photographs. They show people taking photographs in different situations. I'd like you to compare the photographs, and say why you think the people have decided to take photographs in these situations. All right?",
          partnerQuestion: '(Candidate A), do you enjoy taking photographs? (Why?)',
          images: [
            'Photo 1C:（视觉材料页 C2，未提供扫描图）people taking photographs in a situation.',
            'Photo 1D:（视觉材料页 C2，未提供扫描图）people taking photographs in another situation.',
          ],
          imagesPage: 'Visual materials C2（Task 1C / 1D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Helping children with homework',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Some parents help children with their homework, and other parents don't. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 1E on page C3 to the candidates. Allow 15 seconds.) Now, talk to each other about whether you think parents should help children with their homework.",
      discuss: 'whether you think parents should help children with their homework',
      decide: 'what you think is the best reason for parents to help children with their homework',
      mindmap: {
        centre: 'Should parents help children with their homework?',
        branches: [
          '（视觉材料页 C3，未提供扫描图，分支未知）',
        ],
        note: '帧页未列出分支；分支内容见 Visual materials C3 Task 1E（卡片上"some things they think about"），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Do your parents give you a lot of help with your homework? (What do they help with?)',
        "Some people say that children shouldn't do any homework during the school week. Do you agree? (Why? / Why not?)",
        "Do you think the school day should be longer so that students don't have to do work at home? (Why? / Why not?)",
        "Some people say that homework isn't a good thing for children because they stay up too late doing it. What do you think?",
        "Do you think it would be a good idea for students to do homework online so that the teachers can see what they've done? (Why? / Why not?)",
        "Do you think it's true that giving children prizes is the best way to encourage them to work harder? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
