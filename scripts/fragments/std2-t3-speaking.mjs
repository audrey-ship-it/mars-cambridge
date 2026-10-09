// 来源：标准版2 First 2 (updated).pdf（用户原件扫描版），由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录
// 应用 Test 3 = 书内印 Test 7。Speaking 说明页：书 72（PDF 73）；Interlocutor frames：书 101–103（PDF 102–104）
// 脚本来源：书末 "Frames for the Speaking test"（官方完整考官脚本）；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页 C7–C9（PDF 184–186）：仅记录页码引用，未嵌入图片

export default {
  meta: {
    id: 'fce-standard-2-test3-speaking',
    title: 'FCE 标准版真题 2 · Test 3 Speaking',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Speaking',
    pages: '书 72 · 框架 101–103',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Interlocutor frames（书 101–103）；官方无标准答案',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      instruction: "The examiner asks you and your partner questions about yourselves. You may be asked about things like 'your home town', 'your interests', 'your career plans', etc.",
      script: "Good morning/afternoon/evening. My name is ............ and this is my colleague ............ . And your names are? Can I have your mark sheets, please? Thank you.\n\nWhere are you from, (Candidate A)? And you, (Candidate B)?\n\nFirst, we'd like to know something about you.",
      note: '框架页（书 101）印有：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 7 appears on pages C7 and C8 (Part 2), and C9 (Part 3). 备选问题说明：Select one or more questions from any of the following categories, as appropriate. Part 1 的三个类别及问题与 Test 1（书内 Test 5）完全相同。',
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
      instruction: '每位考生就一组图片独白约 1 分钟，另一名考生就图片简答约 30 秒。Candidate A 做 Task 1，Candidate B 做 Task 2。图片见书末彩色插页（书内印作 Test 7）。',
      script: "In this part of the test, I'm going to give each of you two photographs. I'd like you to talk about your photographs on your own for about a minute, and also to answer a question about your partner's photographs.",
      tasks: [
        {
          candidate: 'A',
          task: 1,
          topic: 'Quiet places',
          q: "Here are your photographs. They show people spending time in quiet places. I'd like you to compare the photographs, and say why you think people have decided to spend time in these quiet places.",
          partnerQuestion: 'Which of these places would you prefer to spend time in? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C7（Test 7，图片 7A/7B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'At night',
          q: "Here are your photographs. They show people doing different things at night. I'd like you to compare the photographs, and say what you think the people might be enjoying about doing these things at night.",
          partnerQuestion: 'Which of these things would you prefer to do? ...... (Why?)',
          images: 2,
          imagesPage: '书末彩色插页 C8（Test 7，图片 7C/7D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Other cultures',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes (3 minutes for groups of three). Many people say that it's important to learn about other cultures and their customs. Here are some reasons for this and a question for you to discuss. First you have some time to look at the task. (Indicate the text on page C9 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's important to learn about other cultures and their customs.",
      discuss: "whether it's important to learn about other cultures and their customs",
      decide: 'which is the most important reason for learning about other cultures',
      mindmap: {
        centre: 'Is it important to learn about other cultures?',
        branches: ['travelling to other countries', 'speaking other languages', 'educating ourselves', 'making new friends', 'work opportunities'],
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: 'Parts 3 and 4: 8 minutes (11 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Are you interested in the cultures of other countries, for example their music or food? (Why? / Why not?)',
        "Can we learn a lot about the culture of a country when we're on holiday there? (Why? / Why not?)",
        'Should students spend more time learning about other cultures when they are at school? (Why? / Why not?)',
        'Some students have the opportunity to study in another country. Is this a good thing to do? (Why? / Why not?)',
        "Do you think it's true that the internet has helped us understand people in other countries? (Why? / Why not?)",
        "Some people say that these days that there aren't any big cultural differences between countries. Do you agree? (Why? / Why not?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
