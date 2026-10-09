// 来源：B2 FIRST 4 FOR SCHOOLS.pdf
// Speaking frames：书 98–99（PDF 100–101）；Speaking 题目页：书 95（PDF 97，s4-s-t4/page-097.png）
// Part 1 面试页（书 94）未扫描；Part 3/4 frames（书 96）未扫描
// PDF 偏移 = 书页 + 2。含撇号的字符串一律用双引号包裹。
// mindmap 严格使用 { centre, branches } 对象格式。
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials 页 170–171）：仅文字描述，未嵌入扫描图。

export default {
  meta: {
    id: 'fce-schools-4-test3-speaking',
    examKey: 'fce-schools-4-test3',
    title: 'FCE 校园版真题 4 · Test 3 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 4,
    test: 3,
    paper: 'speaking',
    pages: '书 95（PDF 97）· Part 3/4 未扫描',
    source: 'B2 FIRST 4 FOR SCHOOLS.pdf',
    answerSource: '书 98–99 Speaking frames（仅 Test 4 frames 可用）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: 'Part 1 面试题目页（书 94）未扫描；此处使用通用 FCE 校园版 Part 1 开场白脚本。具体 categories 待扫描补全。',
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.\n\nSelect one or more questions from any of the following categories, as appropriate.",
      categories: [
        {
          name: '（面试 categories 未扫描，待补全）',
          questions: [
            '（书 94 未扫描，暂无具体题目）',
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
          topic: 'Watching friends',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people watching their friends in different situations. I'd like you to compare the photographs, and say why you think the people are watching their friends in these situations. All right?",
          partnerQuestion: '(Candidate B), would you like to do either of these things? (Why? / Why not?)',
          images: [
            '（视觉材料页 170，未提供扫描图）',
            '（视觉材料页 170，未提供扫描图）',
          ],
          imagesPage: 'Visual materials page 170',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Summer afternoon',
          q: "Now, (Candidate B), here are your photographs. They show people doing different things on a summer afternoon. I'd like you to compare the photographs, and say what you think the people are enjoying about doing these things on a summer afternoon. All right?",
          partnerQuestion: '(Candidate A), which of these things would you prefer to do on a summer afternoon? (Why?)',
          images: [
            '（视觉材料页 171，未提供扫描图）',
            '（视觉材料页 171，未提供扫描图）',
          ],
          imagesPage: 'Visual materials page 171',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      note: 'Part 3 任务卡未扫描，以下为通用脚本框架，具体话题待补全。',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Here are some things to think about and a question for you to discuss. First you have some time to look at the task. [Allow 15 seconds.] Now, talk to each other about ... [discuss question].",
      mindmap: {
        centre: '（Part 3 任务卡未扫描，话题未知）',
        branches: [
          '（视觉材料页未扫描，分支未知）',
        ],
        note: 'Test 3 Part 3 frames 未扫描。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      note: 'Part 4 深入讨论问题未扫描，待补全。',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: '（Part 4 questions 未扫描，待补全）',
      questions: [],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
