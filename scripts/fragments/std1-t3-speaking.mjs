// FCE Speaking (Paper 4) — Test 3 from 《Cambridge English First 1（标准版1）》
// 数据来源：书 72 页 Speaking 说明 + 书 101–103 页 Interlocutor frames（Test 3），逐字视觉转录。
// Test 3 视觉材料在书末彩色插页：C7/C8（Part 2 两套照片）、C9（Part 3 思维导图，编号 3E），框架页仅印文字指令与图片页码。
// 官方无标准答案。

export default {
  meta: {
    id: 'fce-standard-1-test3-speaking',
    title: 'FCE 标准版真题 1 · Test 3 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Speaking',
    pages: '书 72 · 框架 101–103',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 101–103）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction:
        "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      note: '本册框架页（书 101）提供 Part 1 备选题库，考官酌情选用；以下题目逐字转录自 Interlocutor frame。',
      script:
        "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you. Where are you from, (Candidate A)? And you, (Candidate B)? First we'd like to know something about you.",
      selectNote: 'Select one or more questions from any of the following categories, as appropriate.',
      categories: [
        {
          heading: 'Family and friends',
          questions: [
            'Who are you most like in your family? (In what ways are you similar?)',
            'Do you go on holiday with your family? (Why? / Why not?)',
            'Have you done anything interesting with your friends recently? (What did you do with them?)',
            'Tell me about a really good friend of yours. (Do you share the same interests?)',
          ],
        },
        {
          heading: 'Your interests',
          questions: [
            'Is there a sport or hobby you enjoy doing? (What do you do?) (Why do you like it?)',
            'If you could learn a new skill, what would you choose to do? (Why?)',
            'Do you like reading? (What do you read?) (Why do you like it?)',
            'Have you seen a good film recently? (Tell me about it.)',
          ],
        },
        {
          heading: 'Future plans',
          questions: [
            'Have you got any plans for this weekend? (What are you going to do?)',
            'Are you going to go on holiday this year? (Where are you going to go?)',
            "Is there anything you'd like to study in the future? (Why?)",
            "Which country would you most like to visit in the future? (Do you think you'll go there one day?) (Why? / Why not?)",
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction:
        "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      note:
        'Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 3 appears on pages C7 and C8 (Part 2), and C9 (Part 3).',
      tasks: [
        {
          candidate: 'A',
          task: 1,
          taskTitle: 'In the evening',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people doing different things in the evening. I'd like you to compare the photographs, and say what the people are enjoying about doing these things in the evening. All right?",
          images: 2,
          imagesPage: '书末彩色插页 C7（Test 3，照片编号 3A/3B）',
          followUp: '(Candidate B), which of these things would you prefer to do in the evening? ..... (Why?)',
        },
        {
          candidate: 'B',
          task: 2,
          taskTitle: 'Family time',
          q: "Now, (Candidate B), here are your photographs. They show families doing different things together in their free time. I'd like you to compare the photographs, and say why the families have decided to do these things together in their free time. All right?",
          images: 2,
          imagesPage: '书末彩色插页 C8（Test 3，照片编号 3C/3D）',
          followUp: '(Candidate A), which of these things would you prefer to do with your family? ..... (Why?)',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Improving life',
      timing: 'Parts 3 and 4: 7 minutes (9 minutes for groups of three)',
      script:
        "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Here are some ways that governments could improve life for people living in cities and a question for you to discuss. First you have some time to look at the task. Now, talk to each other about whether these are good ways to improve life for people living in cities.",
      discuss: 'whether these are good ways to improve life for people living in cities',
      decide: 'which of these things would have the greatest long-term benefit for people living in cities',
      mindmap: {
        centre: "Are these good ways to improve people's lives in cities?",
        branches: [
          'build new houses and flats',
          'increase number of parks',
          'provide libraries and museums',
          'stop cars entering city centres',
          'open modern shopping centres',
        ],
      },
      mindmapPage: '书末彩色插页 C9（Test 3，编号 3E）',
      note: 'C9 页印刷标题为 "Television"，与框架页主题 Improving life 不符，应为原书印刷错误；思维导图文字以 C9 页为准。',
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 7 minutes (9 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        "What's good about living in cities in (candidate's country)? (Why?)",
        "Which is the best city for people to visit in (candidate's country)? (Why?)",
        "If you could choose to visit a city you've never been to, which one would you choose? (Why?)",
        'Would you prefer to live in a modern city or a city with lots of history? (Why?)',
        'Are there advantages to living in a small town rather than in a big city?',
        'Do you think it is better for children to grow up in the city or in the countryside? (Why?)',
      ],
      promptsLeadIn: 'Select any of the following prompts, as appropriate:',
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
