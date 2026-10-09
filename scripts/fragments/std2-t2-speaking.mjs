// 来源：标准版2 First 2 (updated).pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// 应用 Test 2 = 书内印 Test 6。Speaking 说明页：书 50（PDF 51）；Interlocutor frames：书 98–100（PDF 99–101）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C4–C6（PDF 181–183）：仅记录页码引用，未嵌入图片

export default {
  meta: {
    id: 'fce-standard-2-test2-speaking',
    title: 'FCE 标准版真题 2 · Test 2 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Speaking',
    pages: '书 50 · 框架 98–100',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 98–100）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 98）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 6 appears on pages C4 and C5 (Part 2), and C6 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1（书内 Test 5）完全相同。',
      categories: [
        {
          name: 'Travel',
          questions: [
            'Do you enjoy long journeys? (What do you do to pass the time?)',
            'Do you have to travel far every day? (Where do you have to go?)',
            'Do you prefer to travel by car or public transport? (Why?)',
            "Tell us about an interesting place you've travelled to.",
          ],
        },
        {
          name: 'Study or work',
          questions: [
            'What good memories do you have of school?',
            'Is there anything you would like to study in the future? (Why?)',
            'Have you ever had a part-time job? (What do/did you do? Do/Did you enjoy it?)',
            'Would you prefer to work for a big or small company? (Why?)',
          ],
        },
        {
          name: 'Sports and hobbies',
          questions: [
            'Do you prefer individual sports or team sports? (Why?)',
            "Which is the most popular sport in your country? (Why do you think it's popular?)",
            'How much time do you spend listening to music? (What kind of music do you like?)',
            'Do you enjoy playing computer games in your free time? (Why? / Why not?)',
          ],
        },
      ],
    },
    2: {
      title: 'Part 2 · Long turn（图片长描述）',
      type: 'long_turn',
      timing: '4 minutes (6 minutes for groups of three)',
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 6）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Giving advice',
          q: "Here are your photographs. They show people giving advice in different situations. I'd like you to compare the photographs, and say why it might be important to give advice in these situations.",
          partnerQuestion: 'Do you like listening to advice? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C4（Test 6，图片 6A/6B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Looking at beautiful things',
          q: "Here are your photographs. They show people looking at beautiful things. I'd like you to compare the photographs, and say why you think these people are looking at these beautiful things.",
          partnerQuestion: 'Do you enjoy going to museums and galleries? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C5（Test 6，图片 6C/6D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Boredom',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Here are some reasons why it might be a good idea for people to change the way they spend their free time. First you have some time to look at the task. (Indicate the text on page C6 to the candidates. Allow 15 seconds.) Now, talk to each other about why people should change the way they spend their free time.",
      discuss: 'why people should change the way they spend their free time',
      decide: 'which is the most important reason for changing the way we spend our free time',
      mindmap: {
        centre: 'Should people change the way they spend their free time?',
        branches: ['using the internet', 'having new experiences', 'spending more time outside', 'meeting friends', 'doing less work', 'getting more exercise'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Should schools and colleges organise free time activities for students at weekends? (Why? / Why not?)',
        "Do you think it's true that you will always enjoy yourself if you're with other people? (Why? / Why not?)",
        "Some people say that it's important to entertain yourself rather than expect other people to do it all the time. What do you think?",
        'Is it a good idea to have a lot of different interests or just one or two? (Why? / Why not?)',
        "Do you think it's important to be busy all the time? (Why? / Why not?)",
        "Some people say we don't have enough free time these days. What do you think?",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
