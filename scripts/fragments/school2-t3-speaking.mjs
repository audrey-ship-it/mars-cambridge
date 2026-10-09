// 来源：Cambridge First Certificate English Tests for Schools 2.PDF（用户原件扫描版）
// Speaking frames：书 101–103（PDF 102–104）；Visual materials：C7、C8（Part 2），C9（Part 3）
// 页码映射：PDF 页 = 书页 + 1；官方无标准答案
// 含撇号的字符串一律用双引号包裹
// Part 2 图片与 Part 3 任务卡在书末彩色插页（Visual materials）：仅文字描述，未嵌入扫描图
// Test 7（= 校园版2 Test 3）P3 分支来自视觉材料卡 C9，扫描图未提供，仅留占位

export default {
  meta: {
    id: 'fce-schools-2-test3-speaking',
    examKey: 'fce-schools-2-test3',
    title: 'FCE 校园版真题 2 · Test 3 Speaking',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 3,
    paper: 'speaking',
    pages: '书 101–103 · 视觉材料 C7–C9',
    source: 'Cambridge First Certificate English Tests for schools 2.PDF',
    answerSource: '无固定答案',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · Interview（面试问答）',
      type: 'interview',
      timing: '2 minutes (3 minutes for groups of three)',
      note: '框架页照录：Note: In the examination, there will be both an assessor and an interlocutor in the room. The visual material for Test 7 appears on pages C7 and C8 (Part 2), and C9 (Part 3).',
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
          topic: 'Listening to music',
          q: "(Candidate A), it's your turn first. Here are your photographs. They show people listening to music in different situations. I'd like you to compare the photographs, and say what you think the people are enjoying about listening to music in these situations. All right?",
          partnerQuestion: '(Candidate B), do you ever go to concerts? (Why? / Why not?)',
          images: [
            'Photo 7A:（视觉材料页 C7，未提供扫描图）people listening to music in a situation.',
            'Photo 7B:（视觉材料页 C7，未提供扫描图）people listening to music in another situation.',
          ],
          imagesPage: 'Visual materials C7（Task 7A / 7B）',
        },
        {
          candidate: 'B',
          task: 2,
          topic: 'Feeling happy',
          q: "Now, (Candidate B), here are your photographs. They show people who are feeling happy for different reasons. I'd like you to compare the photographs, and say why you think the people are feeling happy. All right?",
          partnerQuestion: '(Candidate A), do you enjoy going to birthday parties? (Why?)',
          images: [
            'Photo 7C:（视觉材料页 C8，未提供扫描图）people feeling happy for a reason.',
            'Photo 7D:（视觉材料页 C8，未提供扫描图）people feeling happy for another reason.',
          ],
          imagesPage: 'Visual materials C8（Task 7C / 7D）',
        },
      ],
    },
    3: {
      title: 'Part 3 · Collaborative task（合作讨论）',
      type: 'collaborative',
      topic: 'Spending time with the family',
      timing: '4 minutes (5 minutes for groups of three)',
      script: "Now, I'd like you to talk about something together for about two minutes. [3 minutes for groups of three] Some parents think young people should spend most of their free time with their families. Here are some things they think about and a question for you to discuss. First you have some time to look at the task. (Indicate the visual 7E on page C9 to the candidates. Allow 15 seconds.) Now, talk to each other about whether it's important for young people to spend most of their free time with their families.",
      discuss: "whether it's important for young people to spend most of their free time with their families",
      decide: 'which is the best reason for young people to spend free time with their families',
      mindmap: {
        centre: 'Is it important for young people to spend most of their free time with their families?',
        branches: [
          '（视觉材料页 C9，未提供扫描图，分支未知）',
        ],
        note: '帧页未列出分支；分支内容见 Visual materials C9 Task 7E（things parents think about regarding young people spending free time with family），扫描图未提供。',
      },
    },
    4: {
      title: 'Part 4 · Discussion（深入讨论）',
      type: 'discussion',
      timing: '4 minutes (6 minutes for groups of three)',
      leadIn: 'Use the following questions, in order, as appropriate:',
      questions: [
        'Do you think watching television is a good way for families to spend their time together? (Why?)',
        'Is it difficult for families to find things that everyone wants to do together? (Why?)',
        'Do you think parents should organise their children\'s free time for them? (Why? / Why not?)',
        "Do you think it's true that young people are too busy these days and don't have enough free time? (Why? / Why not?)",
        'Should young people give up some of their free time to help their parents with housework? (Why? / Why not?)',
        "Some people say it's good to spend some time alone, without family and friends. What do you think? (Why?)",
      ],
      prompts: ['What do you think?', 'Do you agree?', 'And you?'],
      closing: 'Thank you. That is the end of the test.',
    },
  },
};
