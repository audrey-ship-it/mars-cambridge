// 来源：B2 FIRST 4 FOR SCHOOLS.pdf
// Speaking frames：书 98–99（PDF 100–101，s4-frames/page-100~101.png）
// Part 1 面试页（书 97）未扫描；Part 2 从书 98 frames 转录；Part 3/4 从书 99 frames 转录
// PDF 偏移 = 书页 + 2。含撇号的字符串一律用双引号包裹。
// mindmap 严格使用 { centre, branches } 对象格式（此前 school3-t4-speaking 曾因写成数组导致渲染空白）。
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials 页 173–175）：仅文字描述，未嵌入扫描图。

export default {
  meta: {
    id: 'fce-schools-4-test4-speaking',
    examKey: 'fce-schools-4-test4',
    title: 'FCE 校园版真题 4 · Test 4 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 4,
    test: 4,
    paper: 'speaking',
    pages: '书 98–99（PDF 100–101）',
    source: 'B2 FIRST 4 FOR SCHOOLS.pdf',
    answerSource: '书 98–99 Speaking frames',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: 'Part 1 面试题目页（书 97）未扫描；此处使用通用 FCE 校园版 Part 1 开场白脚本。具体 categories 待扫描补全。',
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.\n\nSelect one or more questions from any of the following categories, as appropriate.",
      categories: [
        {
          name: '（面试 categories 未扫描，待补全）',
          questions: [
            '（书 97 未扫描，暂无具体题目）',
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
          topic: 'Competitions',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people taking part in different competitions. I'd like you to compare the photographs, and say what you think the people are enjoying about taking part in these competitions. All right?",
          partnerQuestion: '(Candidate B), would you like to take part in either of these competitions? (Why? / Why not?)',
          images: [
            '（视觉材料页 173，未提供扫描图）',
            '（视觉材料页 173，未提供扫描图）',
          ],
          imagesPage: 'Visual materials page 173',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Practising',
          q: "Now, (Candidate B), here are your photographs. They show people practising different things. I'd like you to compare the photographs, and say what you think the people might find difficult about practising these things. All right?",
          partnerQuestion: '(Candidate A), which of these things would you prefer to do? (Why?)',
          images: [
            '（视觉材料页 174，未提供扫描图）',
            '（视觉材料页 174，未提供扫描图）',
          ],
          imagesPage: 'Visual materials page 174',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Spending pocket money',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes.\n[3 minutes for groups of three]\n\nSome people think children should be allowed to spend their pocket money in any way they want and other people disagree. Here are some of the things they think about and a question for you to discuss. First you have some time to look at the task.\n\nIndicate the text on page 175 to the candidates. Allow 15 seconds.\n\nNow, talk to each other about whether children should be allowed to spend their pocket money in any way they want.",
      discuss: 'whether children should be allowed to spend their pocket money in any way they want',
      decide: 'decide the most important reason why children should be allowed to spend their pocket money in any way they want',
      mindmap: {
        centre: 'Should children be allowed to spend their pocket money in any way they want?',
        branches: [
          '（视觉材料页 175 文本卡，未提供扫描图，分支未知）',
        ],
        note: '帧页未列出分支；分支内容见 Visual materials 页 175（some things they think about），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Did you get pocket money when you were a child? (Did you prefer to save it or spend it? / Why?)',
        "Some people think children shouldn't have any pocket money at all. What do you think? (Why?)",
        'Some parents ask children to do jobs around the house to earn pocket money. Is this a good idea? (Why? / Why not?)',
        "Some people say that there should be no advertising on TV for children's toys and games because it makes children want to have too many things. (Why?)",
        'Is it important for young people to try to save money? (Why? / Why not?)',
        "Do you think it's good for young people to get a part-time job while they're still at school so they can earn their own money? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
