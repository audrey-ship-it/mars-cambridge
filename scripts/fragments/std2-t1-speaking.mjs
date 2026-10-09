// 来源：标准版2 First 2 (updated).pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// 应用 Test 1 = 书内印 Test 5。Speaking 说明页：书 28（PDF 29）；Interlocutor frames：书 95–97（PDF 96–98）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C1–C3（PDF 178–180）：仅记录页码引用，未嵌入图片

export default {
  meta: {
    id: 'fce-standard-2-test1-speaking',
    title: 'FCE 标准版真题 2 · Test 1 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Speaking',
    pages: '书 28 · 框架 95–97',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 95–97）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 95）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 5 appears on pages C1 and C2 (Part 2), and C3 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate.',
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
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 5）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Guided tours',
          q: "Here are your photographs. They show people going on different guided tours. I'd like you to compare the photographs, and say what you think the people are enjoying about these guided tours.",
          partnerQuestion: 'Would you like to visit either of these places? ...... (Why? / Why not?)',
          images: 2,
          imagesPage: '书末彩色插页 C1（Test 5，图片 5A/5B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Doing exercise',
          q: "Here are your photographs. They show people doing exercise in different ways. I'd like you to compare the photographs, and say why the people have decided to exercise in these ways.",
          partnerQuestion: 'Which of these things would you prefer to do? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C2（Test 5，图片 5C/5D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Keeping up to date',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Many people say that it's important to keep up to date with all the changes in the world. Here are some things in the world that often change to think about and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C3 to the candidates. Allow 15 seconds.) Now, talk to each other about which two things you think it's most important to keep up to date with.",
      discuss: "which two things you think it's most important to keep up to date with",
      decide: "what you think is the biggest advantage of keeping up to date with all the changes in the world",
      mindmap: {
        centre: 'Is it important to keep up to date with all the changes in the world?',
        branches: ['technology', 'music', 'the news', 'fashion', 'education'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Some people say that we spend too much time checking for updates on social networking websites. Do you agree? (Why? / Why not?)',
        'Do you think the best way to keep up to date with changes in the world is to watch television? (Why? / Why not?)',
        "Some people say the world is changing so fast that we can't keep up to date with everything. Do you agree? (Why? / Why not?)",
        'How important is it for people to have change in their lives?',
        "Some people don't like it when things change. Why do you think that is?",
        'Do you think people these days are only interested in new things and ignore history and tradition? (Why? / Why not?)',
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
