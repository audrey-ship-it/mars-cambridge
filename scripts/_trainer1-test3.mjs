// 临时数据模块：Test 3 阅读/写作/口语（插入后删除）。
export const readingTest3 = {
  id: 'ket-trainer1-test3',
  title: 'Trainer 1 · Test 3',
  source: {
    file: 'A2 Key for Schools Trainer 1 (Second Edition).pdf',
    collection: 'A2 Key for Schools Trainer 1',
    test: 3,
    pages: '78–87',
    answerPage: 191,
    verified: true,
    verifiedParts: [1, 2, 3, 4, 5],
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1, type: 'text', from: 'Adam', to: 'John',
        content: `John,\nYou know I said that football practice will be on Wednesday ... Well, it isn't – it's on Thursday. Sorry! See you there.\nCheers, Adam`,
        question: 'Why has Adam written this message?',
        options: {
          A: 'to ask if John wants to play football',
          B: "to tell John that Adam can't play football",
          C: 'to let John know about a change of plan',
        },
        answer: 'C',
      },
      {
        id: 2, type: 'notice',
        content: `SCHOOL FESTIVAL OF BOOKS\nMeet Ralph Sparks.\nHear how he got ideas for his books, including History of Exploring the New World.\nThurs 9 a.m. Room D31.`,
        question: 'Pupils can',
        options: {
          A: 'buy books.',
          B: 'read about explorers.',
          C: 'come and listen to a writer.',
        },
        answer: 'C',
      },
      {
        id: 3, type: 'notice',
        content: `Science Museum trip next Friday\nTickets are available for $4 (for coach transport to the museum, and for museum entry).\nIf you're interested, see Mr Goss.`,
        options: {
          A: 'You can now buy tickets for the museum trip.',
          B: 'Tell Mr Goss how you want to travel to the museum.',
          C: 'Mr Goss will tell you if you need a ticket to the museum.',
        },
        answer: 'A',
      },
      {
        id: 4, type: 'text', from: 'Lizzie', to: 'Jenny',
        content: `Jenny,\nI think I left my scarf in your flat after the party. Have you seen it? Otherwise I'll buy another one.\nLizzie`,
        question: 'Why has Lizzie written this?',
        options: {
          A: 'to invite Jenny to a party',
          B: 'to tell Jenny about a shopping trip',
          C: "to ask about something that she's lost",
        },
        answer: 'C',
      },
      {
        id: 5, type: 'text', from: 'Mike', to: 'Dave',
        content: `Hi Dave,\nI broke my tennis racket. Can I use yours? I'll give it back in maths tomorrow. By the way, wasn't the homework difficult?\nMike`,
        question: 'Mike wants to',
        options: {
          A: 'play tennis with Dave.',
          B: 'borrow something from Dave.',
          C: 'get help from Dave with the homework.',
        },
        answer: 'B',
      },
      {
        id: 6, type: 'notice',
        content: `Mr Gregson is away today.\nClass 3, at 9 a.m., please go and join Class 4 in Room 7C for geography. Mr Gregson will be back tomorrow.`,
        options: {
          A: "There isn't a geography lesson tomorrow.",
          B: "Class 4's lesson is happening at a different time today.",
          C: 'There will be more people in Room 7C than usual today.',
        },
        answer: 'C',
      },
    ],
  },
  part2: {
    title: 'Three teenage sports superstars',
    instructions: 'For each question, choose the correct answer.',
    people: [
      {
        label: 'A', name: 'Gaurika Singh, swimmer',
        text: `Gaurika is from Nepal, and she was the only under-14-year-old to take part in the 2016 Olympics in Rio de Janeiro. She swam the 100 metres backstroke for Nepal. Home for Gaurika these days is in the UK, and she trains at the Copthall Swimming Club, where the coaches have trained other world-class swimmers. Her father, Paras Singh, travels with her around the world when she goes to a competition.`,
      },
      {
        label: 'B', name: 'Tracy Austin, tennis player',
        text: `When Tracy Austin was given a car as a prize in a tennis competition in Stuttgart, Germany, she was 15 and still too young to drive, but she was already a professional tennis player. Then, at the age of 17, the American became the youngest ever sports person to earn a million dollars. Before long, she was the world's number one player. These days, she often appears on TV, talking about tennis matches at major competitions.`,
      },
      {
        label: 'C', name: 'Nadia Comăneci, gymnast',
        text: `When Romanian gymnast Nadia took part in the Olympic Games in Montreal, Canada, in 1976, she immediately became one of the most famous sports people in the world. She got perfect scores of 10.0 in seven different events. Everyone thought that nobody could do this and, in fact, 9.9 was the highest number that the score board could show. She did so well that she helped large numbers of people become interested in gymnastics.`,
      },
    ],
    questions: [
      { id: 7, text: 'Which sports person now works as a journalist?', answer: 'B' },
      { id: 8, text: 'Which sports person made her sport more popular?', answer: 'C' },
      { id: 9, text: "Which sports person won something that she couldn't use?", answer: 'B' },
      { id: 10, text: 'Which sports person became rich when she was young?', answer: 'B' },
      { id: 11, text: 'Which sports person was the youngest person in a competition?', answer: 'A' },
      { id: 12, text: 'Which sports person did something that people believed was not possible?', answer: 'C' },
      { id: 13, text: 'Which sports person was born in one country and now lives in another?', answer: 'A' },
    ],
  },
  part3: {
    title: 'Isabella Rose Taylor',
    author: '',
    instructions: 'For each question, choose the correct answer.',
    passage: `Lots of people become good at something when they are young. And quite a lot of children know what career they want to follow when they are older. But not everyone opens their own company. This is exactly what Isabella Rose Taylor has done. She started designing clothes when she was eight years old.\n\nAt the time, she was a keen painter. She used a lot of reds, blues and yellows, and these colours helped her to think of new clothes which she could make.\n\nWhen she started designing and making clothes, Isabella just made clothes for fun. But people liked her designs, so soon she started selling them online. Now she has a business and takes part in fashion shows. She runs her business from the family home, where she has made one room into an office, and another into a studio where the clothes are made.\n\nIsabella has also found time to finish school and get a college degree. She's intelligent, and she has thousands of followers online who love her stuff. It's brilliant that she already has people who work for her. Above all, she really knows what is needed to succeed in the world of fashion. And I am sure that she will.\n\n'The way I see it is I get to follow my dream and be a teenager at the same time. I think I'm pretty lucky,' she says.`,
    questions: [
      {
        id: 14,
        text: 'What does the writer say is unusual about Isabella Rose Taylor?',
        options: {
          A: 'She planned her future career when she was very young.',
          B: 'She started her own business when she was very young.',
          C: 'She got interested in fashion when she was very young.',
        },
        answer: 'B',
      },
      {
        id: 15,
        text: 'What does Isabella say about painting and making clothes?',
        options: {
          A: 'It is important to paint good pictures of clothes.',
          B: 'The colours in her paintings gave her ideas for clothes to make.',
          C: 'She uses paint to put her favourite colours on the clothes she makes.',
        },
        answer: 'B',
      },
      {
        id: 16,
        text: "What do we learn about Isabella's home?",
        options: {
          A: 'Everything for her business is done in the same room at home.',
          B: "Her home is too small, so she's looking for another one.",
          C: "She's made changes to her home so that she can work there.",
        },
        answer: 'C',
      },
      {
        id: 17,
        text: 'Why does the writer think that Isabella will do well in the future?',
        options: {
          A: 'She is already very popular online.',
          B: 'She understands the fashion business.',
          C: 'She has brilliant people who work for her.',
        },
        answer: 'B',
      },
      {
        id: 18,
        text: 'What is the best title for the article?',
        options: {
          A: "The girl who can't wait to start working in fashion soon",
          B: 'The problem with working and studying',
          C: 'A hobby that is becoming a career',
        },
        answer: 'C',
      },
    ],
  },
  part4: {
    title: 'Ferry to School',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      'Most pupils go to school each day on foot or by car, but Jordan Basford is different. He lives on the Scottish island of Egilsay. There, the school had to ',
      " because there weren't any other pupils. The nearest school is in Rousay, across the sea. His family have a boat, but it is small, and they can ",
      ' use it in good weather. A much larger boat is ',
      " in bad weather. So every day, Jordan has to ",
      ' the ferry across the sea to go to school. He usually comes back home afterwards, but sometimes he phones home to say that he\'s ',
      " the night at a friend's house instead. 'I know I have to travel a long ",
      " to school each day,' he says. 'But I don't mind.'",
    ],
    questions: [
      { id: 19, options: { A: 'close', B: 'complete', C: 'finish' }, answer: 'A' },
      { id: 20, options: { A: 'almost', B: 'only', C: 'nearly' }, answer: 'B' },
      { id: 21, options: { A: 'needed', B: 'liked', C: 'had' }, answer: 'A' },
      { id: 22, options: { A: 'travel', B: 'make', C: 'catch' }, answer: 'C' },
      { id: 23, options: { A: 'resting', B: 'staying', C: 'sleeping' }, answer: 'B' },
      { id: 24, options: { A: 'way', B: 'transport', C: 'mile' }, answer: 'A' },
    ],
  },
  part5: {
    instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
    example: { number: 0, answer: 'the' },
    passages: [
      {
        from: 'Jake', to: '', label: 'Email',
        content: `Hi guys!\n\nThis is [0] best holiday ever! Plakias is such [25] beautiful place. The meals in the hotel are fantastic. For breakfast, you can have as [26] as you want. I usually have yoghurt with lots of fruit. There's lots for everyone in my family [27] do, so we're all enjoying it. Tomorrow I'm going to try windsurfing [28] the first time. I'm really excited because I [29] never done it before, but Dad says it's easy. In fact, I love it here so much that I [30] like to come back next year!\n\nSee you soon.\n\nJake`,
      },
    ],
    questions: [
      { id: 25, answers: ['a'] },
      { id: 26, answers: ['much'] },
      { id: 27, answers: ['to'] },
      { id: 28, answers: ['for'] },
      { id: 29, answers: ['have', "'ve"] },
      { id: 30, answers: ['would', "'d"] },
    ],
  },
};

export const writingTest3 = {
  'ket-trainer1-test3': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: `You are planning a party. Write an email to your English friend Malcolm.\nIn your email:\n• tell Malcolm about your party\n• ask if Malcolm wants to come\n• suggest what Malcolm should bring\n\nWrite 25 words or more.`,
      modelAnswer: "Hi Malcolm,\nI'm having a party at my house next Saturday at 6 p.m. to celebrate my birthday. Would you like to come? It'll be great fun! Could you bring some crisps and a bottle of orange juice?\nSee you soon,\nAlex",
      tips: ['开头称呼 Malcolm', '说明派对的时间和地点', '邀请并询问他是否愿意来', '建议他带什么', '写25词或以上'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
      imageSrc: '/images/ket/trainer1/test3-story.jpg',
      imageDesc: '两个学生放学回家时在路边发现一个手提包，他们查看包里的姓名和电话，最后把包送回到一位老妇人家中。',
      modelAnswer: 'My sister and I were walking home from school when we saw a bag on the pavement. We looked inside and found a name and phone number. My sister called the number, and an old lady answered. She was very happy when we took the bag to her house.',
      tips: ['按三幅图的顺序叙述', '用一般过去时', '写清发现包、找到主人电话和送还包', '写35词或以上'],
    },
  ],
};

export const speakingTest3 = {
  'ket-trainer1-test3': {
    parts: [
      {
        part: 2,
        title: 'Part 2 · 图片讨论',
        duration: '3–4 分钟',
        description: '和同伴围绕五种电视节目表达喜好并说明理由，两人轮流提问。',
        topics: [
          {
            id: 'kt3-s2-1',
            theme: 'Television programmes',
            themeZh: '电视节目',
            imageSrc: '/images/ket/trainer1/test3-speaking.jpg',
            cardPrompts: [
              'Do you like these different types of television programme? Say why or why not.',
              'Do you think watching action films on TV is exciting? Why? / Why not?',
              'Do you think watching the news on TV is sad? Why? / Why not?',
              'Which of these television programmes do you like best? Why?',
              'Do you prefer watching television alone or with other people? Why?',
            ],
            modelAnswer: 'Yes, I like some of these programmes. I really enjoy watching football matches on TV because they are exciting, and I love singing programmes because the music is great. I don\'t like watching the news very much because it is often sad. I think history programmes are interesting, but action films are my favourite. At the weekend I usually watch TV with my family, but I sometimes watch a film alone in my room.',
            phrases: ['I really enjoy watching… because…', "I don't like watching… very much because…", 'I think… are interesting, but…', 'I usually watch TV with…'],
          },
        ],
      },
    ],
  },
};
