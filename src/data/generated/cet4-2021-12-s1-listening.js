// 2021年12月第一套 CET-4 听力数据
// 答案：解析 PDF 文字层（逐题核对）；原文：解析 PDF 文字层（OCR 补空格）；题目选项：原题 docx 文本（双栏错位已重新配对）
// verified: true
const LISTENING = {
  id: 'cet4-2021-12-s1',
  meta: {
    level: 'CET4',
    year: 2021,
    month: 12,
    set: 1,
    source:
      '原题：2021.12四级真题第1套.pdf；音频：2021.12四级听力第1套.MP3；原文：2021.12英语四级解析第1套.pdf',
    answerSource: '解析 PDF（OCR 原文+核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2021-12-s1-a.mp3', // Section A 0-416s
    conv: '/audio/cet4-2021-12-s1-b.mp3', // Section B 416-852.5s
    pass: '/audio/cet4-2021-12-s1-c.mp3', // Section C 852.5-1413.2s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2021-12-s1-n1.mp3', // 0-172.1s
        transcript:
          'United Airlines has apologised for mistakenly shipping an American family\'s pet dog thousands of miles in the wrong direction to Japan. The dog owner\'s beloved 10-year-old dog named Buddy took an unexpected 16-hour flight to Tokyo following a mix-up by the airline. The dog owner\'s family are currently in the process of moving. They were meant to be reunited with the pet in their new home city in Texas. But when they arrived at the United Airlines cargo facility in the southern U.S. state, they found a stranger\'s dog waiting in Buddy\'s place. Both of the dogs had been sent to the wrong destinations on connecting flights from Denver, with Buddy mistakenly being sent to Japan instead. Buddy was given a physical checkup when he arrived at Tokyo\'s International Airport. The dog was then sent back to the U.S. on a private charter jet. "I\'m so glad he\'s alive and coming home soon!" said the relieved dog owner. "And an error occurred during the connections in Denver. We have notified our customers that their pets arrived safely. We will arrange to return the pets to them as soon as possible," a spokesperson of United Airlines said.',
        questions: [
          {
            n: 1,
            text: 'What does the news report say about United Airlines?',
            options: [
              { letter: 'A', text: 'It found a pet dog on board a plane to a city in Texas.' },
              { letter: 'B', text: 'It had one of its cargo planes land at a wrong airport.' },
              { letter: 'C', text: 'It sent two dogs to the wrong destinations.' },
              { letter: 'D', text: 'It had two of its domestic flights mixed up.' },
            ],
            answer: 'C',
          },
          {
            n: 2,
            text: 'What did the spokesperson for United Airlines say they would do after the incident?',
            options: [
              { letter: 'A', text: 'Correct their mistake as soon as possible.' },
              { letter: 'B', text: 'Give the two pets a physical checkup.' },
              { letter: 'C', text: 'Hire a charter jet to bring the pets back.' },
              { letter: 'D', text: 'Send another plane to continue the flight.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2021-12-s1-n2.mp3', // 172.1-282.8s
        transcript:
          'Officials at Reid Park Zoo in Tucson Arizona are celebrating the birth of a baby elephant. Zoo officials say the baby was born on Monday. It is a female and she weighs nearly 130 kilograms. Semba, her mother, is a 30-year-old African elephant. The pregnancy lasted 22 months. Officials describe the baby elephant as "healthy, standing and nursing". The baby hasn\'t been given a name yet. Semba has given birth before. Zoo officials said during this pregnancy, she was closely monitored through physical exams and blood tests. Dr. Sue Tygielski is the zoo\'s director of zoological operations. She said the elephant\'s birth went smoothly and that there were no complications. The new baby expands the zoo\'s elephant herd to six. That includes the baby\'s parents, a sister, a brother and an adult female.',
        questions: [
          {
            n: 3,
            text: 'What do we learn about the mother elephant Semba?',
            options: [
              { letter: 'A', text: 'She weighs 130 kilograms.' },
              { letter: 'B', text: 'She has had babies before.' },
              { letter: 'C', text: 'She was brought from Africa.' },
              { letter: 'D', text: 'She has a big family of six.' },
            ],
            answer: 'B',
          },
          {
            n: 4,
            text: 'What does the report say about the birth of the new baby elephant?',
            options: [
              { letter: 'A', text: 'It took 22 hours.' },
              { letter: 'B', text: 'It had some complications.' },
              { letter: 'C', text: 'It was smooth.' },
              { letter: 'D', text: 'It was monitored by Dr. Sue Tygielski.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2021-12-s1-n3.mp3', // 282.8-416s
        transcript:
          'Three years ago, a couple was enjoying a meal at a beach restaurant. The restaurant was built on a wooden structure above the sea-water. During the meal, the man\'s wedding ring slipped off his finger. It fell through the wooden floorboards, apparently lost forever. Recently, the restaurant manager Ryan Krivoy decided to replace the wooden deck and he found an old gold coin, some $100 bills and a silver wedding ring while replacing the deck. The restaurant waitress Sasha Formica posted a picture of the ring on Facebook. The post was shared about 5,000 times. Three days later, the happy wife called to claim the ring. She even texted pictures of her and her husband eating there in 2017 as proof. The restaurant mailed the ring back to the happy couple. Meanwhile, Krivoy discovered that the gold coin was very rare. It was from 1855 and worth as much as $2,000.',
        questions: [
          {
            n: 5,
            text: 'What do we learn about the restaurant?',
            options: [
              { letter: 'A', text: 'It enjoyed great popularity.' },
              { letter: 'B', text: 'It started business three years ago.' },
              { letter: 'C', text: 'It was frequented by newly-weds.' },
              { letter: 'D', text: 'It was built above the sea-water.' },
            ],
            answer: 'D',
          },
          {
            n: 6,
            text: 'What did the restaurant manager decide to do recently?',
            options: [
              { letter: 'A', text: 'Expand his business on the beach.' },
              { letter: 'B', text: 'Replace the restaurant\'s wooden deck.' },
              { letter: 'C', text: 'Post a picture of his restaurant online.' },
              { letter: 'D', text: 'Celebrate his silver wedding anniversary.' },
            ],
            answer: 'B',
          },
          {
            n: 7,
            text: 'What did the waitress do about the recovered ring?',
            options: [
              { letter: 'A', text: 'She sold it for two thousand dollars.' },
              { letter: 'B', text: 'She took it to the restaurant manager.' },
              { letter: 'C', text: 'She posted its picture on Facebook.' },
              { letter: 'D', text: 'She returned it to its owner right away.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2021-12-s1-c1.mp3', // 416-651.3s
        transcript:
          'W: I can\'t believe that duck hunting is still legal in so many parts of the world. The scientific evidence from countries like Australia, Canada and the USA clearly indicates a decline in the birds\' numbers. M: But can anyone be sure if the decline is really caused by the hunting or by climate change? W: It\'s caused by both in fact. We see more droughts in countries like Australia. Ducks are birds that feed and breed in areas where there is a lot of water, but their habitats have been shrinking in recent decades because of the droughts. M: And I guess with fewer places to inhabit, they concentrate in greater numbers in few areas, which surely makes them easier targets for the hunters. W: It does. My grandfather was a duck hunter. He told me hunting ducks and geese began in the 19th century. They were easily found and plentifully available food source in farming areas, especially for poor immigrants. M: What do they use for hunting during that period? W: They use new types of guns, and birds could easily be shot down in flight. And in such great numbers, their commercial hunting of ducks and geese became an industry. Yet, there\'s no commercial farming of these birds nowadays. Their meat is hardly eaten in Western countries. M: No, duck hunting seemingly exists as the continuation of a tradition. W: Well, ducks have never been popular with farmers like my grandfather anyway because they sometimes destroy crops. In fact, farmers used to poison them in large numbers. M: That somehow doesn\'t surprise me. Nobody places much value on the lives of these poor birds or on their meat.',
        questions: [
          {
            n: 8,
            text: 'What does the woman find unbelievable?',
            options: [
              { letter: 'A', text: 'The number of ducks has declined sharply in recent years.' },
              { letter: 'B', text: 'Climate change has little effect on the lives of wild ducks.' },
              { letter: 'C', text: 'Duck meat is not eaten in Australia, Canada and the U.S.' },
              { letter: 'D', text: 'Duck hunting remains legal in many parts of the world.' },
            ],
            answer: 'D',
          },
          {
            n: 9,
            text: 'What does the woman say has caused the shrinking of ducks\' habitats in Australia?',
            options: [
              { letter: 'A', text: 'Droughts.' },
              { letter: 'B', text: 'Bushfires.' },
              { letter: 'C', text: 'Farming.' },
              { letter: 'D', text: 'Hunting.' },
            ],
            answer: 'A',
          },
          {
            n: 10,
            text: 'Why is there no commercial farming of ducks and geese in Western countries?',
            options: [
              { letter: 'A', text: 'They are not easy to domesticate.' },
              { letter: 'B', text: 'Their meat is not that popular.' },
              { letter: 'C', text: 'It is not environmentally friendly.' },
              { letter: 'D', text: 'It is not considered cost-effective.' },
            ],
            answer: 'B',
          },
          {
            n: 11,
            text: 'What does the woman say about farmers in her grandfather\'s time?',
            options: [
              { letter: 'A', text: 'They hunted ducks as a traditional sport.' },
              { letter: 'B', text: 'They killed wild ducks and geese for food.' },
              { letter: 'C', text: 'They raised ducks and geese for their eggs.' },
              { letter: 'D', text: 'They poisoned wild ducks in large numbers.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2021-12-s1-c2.mp3', // 651.3-852.5s
        transcript:
          'M: Okay, Miss Bright. I\'ve finished calculating. I estimate you have between 210 and 240 square meters of walls and ceiling. W: So, how much would the paint job cost? M: That would depend on the quality of paint you choose. We carry two brands. One costs 60 cents every square meter, and the other 90 cents. The second is guaranteed to look great for about 10 years, whereas the cheaper one will start to dull after around six or seven years. W: In that case, we would prefer the more expensive option. M: All right, then. So including labor costs, taxes, and everything, this job would come to $3,000. W: Um, to be perfectly honest, that\'s more than I expected. M: Please bear in mind that the price includes moving all the furniture, and the whole task would take two days. W: Really? Why? M: Well, we can\'t paint the walls without clearing all the furniture first. So every time we paint a room, we first have to move the furniture to another room. So that takes more time. Plus, it requires two people, which works out more expensive. W: I see. But does that mean I could not live here in my own house during those two days? M: That is correct. W: Oh well, that changes everything, I\'m afraid. I would have to stay with a friend or check into a hotel. I hadn\'t considered any of that. I\'m starting to realize that painting my house is far more troublesome than I had anticipated. M: This is usually the case. Most of our clients go through the same realization. W: I see. M: You have my number. Please feel free to call me for any further questions. W: Thank you.',
        questions: [
          {
            n: 12,
            text: 'What is the woman planning to do?',
            options: [
              { letter: 'A', text: 'Have her house repainted.' },
              { letter: 'B', text: 'Replace some of her old furniture.' },
              { letter: 'C', text: 'Move into a newly-painted house.' },
              { letter: 'D', text: 'Calculate the cost of the paint job.' },
            ],
            answer: 'A',
          },
          {
            n: 13,
            text: 'What is the woman\'s chief concern?',
            options: [
              { letter: 'A', text: 'How long the work will take.' },
              { letter: 'B', text: 'How much the work will cost.' },
              { letter: 'C', text: 'How the paint job is to be done.' },
              { letter: 'D', text: 'How many workers are needed.' },
            ],
            answer: 'B',
          },
          {
            n: 14,
            text: 'What does the woman have to do while the paint job is being done?',
            options: [
              { letter: 'A', text: 'Cover up her furniture.' },
              { letter: 'B', text: 'Ask some friends for help.' },
              { letter: 'C', text: 'Stay somewhere else.' },
              { letter: 'D', text: 'Oversee the work herself.' },
            ],
            answer: 'C',
          },
          {
            n: 15,
            text: 'What has the woman come to realize at the end of the conversation?',
            options: [
              { letter: 'A', text: 'She could have asked a friend for help with the paint job.' },
              { letter: 'B', text: 'Painting a house involves more trouble than she thought.' },
              { letter: 'C', text: 'She should have repainted her house much earlier.' },
              { letter: 'D', text: 'Moving her furniture is harder than the paint job.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2021-12-s1-p1.mp3', // 852.5-1054.4s
        transcript:
          'Homework is an important part of schooling, but the purposes of giving children homework will change as they grow older. At the primary level, the main aim is to cultivate good habits, like learning to plan and exercising self-discipline. During the secondary school years, extending what is learned at school is positively related to academic achievement, so the content of homework becomes more important. So how can you help your child do their best? Creating an ideal working environment will make it easier for them to get down to their assignments quickly. Make sure it\'s free of distractions, and—for primary school children at least—somewhere near you, so you can answer questions and offer encouragement. You probably have to help younger children plan their session, but it\'s important that by the end of primary school it\'s second nature. Get them to tell you everything they have to do. Then encourage them to establish an order in which they do work. When there are several different assignments, make sure they begin with one they enjoy, so it seems easy to get started. It\'s best to take on the most difficult task second—once they\'re settled, but before they get tired. If older children have more than an hour of homework, encourage them to schedule a short break to stretch. If you encourage them to tell you what they\'ve learned, they\'ll absorb the information more deeply and remember it more readily.',
        questions: [
          {
            n: 16,
            text: 'What is the main aim of homework for primary school kids?',
            options: [
              { letter: 'A', text: 'To cultivate good habits.' },
              { letter: 'B', text: 'To prepare for secondary school.' },
              { letter: 'C', text: 'To review what is learned in class.' },
              { letter: 'D', text: 'To stimulate interest in learning.' },
            ],
            answer: 'A',
          },
          {
            n: 17,
            text: 'What does the passage suggest parents do to help their children?',
            options: [
              { letter: 'A', text: 'Discuss their academic achievements with them.' },
              { letter: 'B', text: 'Create an ideal study environment for them.' },
              { letter: 'C', text: 'Allow them to learn independently.' },
              { letter: 'D', text: 'Check their homework promptly.' },
            ],
            answer: 'B',
          },
          {
            n: 18,
            text: 'What should children do to deal with multiple assignments?',
            options: [
              { letter: 'A', text: 'Finish them before they get tired.' },
              { letter: 'B', text: 'Tackle the most difficult task first.' },
              { letter: 'C', text: 'Start with something they enjoy.' },
              { letter: 'D', text: 'Focus on the most important ones.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2021-12-s1-p2.mp3', // 1054.4-1224.2s
        transcript:
          'Workers at Mexican oil company will receive a healthy incentive of almost $300 a year if they meet certain body weight standards. To qualify for the bonus, they must maintain a healthy weight. For those who are overweight or obese, they could receive the bonus if they reduce their weight by 10% during the year. Some applaud the policy as fair, because it rewards both the individuals who maintain a healthy weight and those who are working towards achieving it. But critics say the policy contradicts recommendations by many health experts, who warn that a person\'s weight is influenced by genetic and environmental factors. That means weight can be hard for individuals to control, which makes the bonus unfair. Some experts say the policy is inconsistent with the science of what we know about body weight regulation. These experts argue that focusing on wage is the wrong approach. A more productive method of encouraging health among employees is to promote healthy behaviors. For example, companies can give workers gym memberships, or encourage participation in lectures on healthy eating and living. They can also reduce sweets and provide healthier snacks in the office and healthier meals at the company canteen. Or they can give employees more time during their lunch break to exercise. These are much better and much more productive ways for companies to move forward on their employees\' wellbeing.',
        questions: [
          {
            n: 19,
            text: 'Who will qualify for the bonus in Mexican oil company?',
            options: [
              { letter: 'A', text: 'Workers who meet its body weight standards.' },
              { letter: 'B', text: 'Workers who can lose 30 pounds in a year.' },
              { letter: 'C', text: 'Workers who try the hardest to lose weight.' },
              { letter: 'D', text: 'Workers who are in the top 10% of the slimmest.' },
            ],
            answer: 'A',
          },
          {
            n: 20,
            text: 'What do critics think of Mexican oil company\'s bonus policy?',
            options: [
              { letter: 'A', text: 'Impractical.' },
              { letter: 'B', text: 'Inconsistent.' },
              { letter: 'C', text: 'Unmanageable.' },
              { letter: 'D', text: 'Unfair.' },
            ],
            answer: 'D',
          },
          {
            n: 21,
            text: 'What do experts propose companies do about workers\' wellbeing?',
            options: [
              { letter: 'A', text: 'Offer them much fatter bonuses.' },
              { letter: 'B', text: 'Improve working environment.' },
              { letter: 'C', text: 'Encourage healthy behaviors.' },
              { letter: 'D', text: 'Provide free lunch and snacks.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2021-12-s1-p3.mp3', // 1224.2-1413.2s
        transcript:
          'Campaigners have warned that the British government is not doing enough to prevent left-handed pupils from falling behind their peers. They claim that thousands of children are still being "penalized" for being left-handed. This is due to a lack of action from ministers, who\'ve failed to take any meaningful action for years. It is feared that a failure to address early-year challenges, such as poor handwriting, leads to much more serious problems down the line—with these pupils facing reduced career prospects. Studies in recent years show that left-handed children are more likely to suffer with learning difficulties and their scores are lower on IQ tests. Campaigners feel it\'s strange that children in British schools are penalized because they happen to be left-handed. They don\'t understand why successive governments have failed to act on this. They want the department of education to record which children are left-handed and what their educational attainments are, since they make up some 10% of the population. In early-year education, left-handed children are struggling and making a mess of their handwriting. Educators don\'t know how to deal with this. In many cases, there is no active help and a lack of teacher training. Campaigners point out that a high percentage of the prison population is left-handed. They say that these prison numbers are unusually high and ask why it is the case.',
        questions: [
          {
            n: 22,
            text: 'Why are some people criticizing the British government?',
            options: [
              { letter: 'A', text: 'It has not done enough to help left-handed children.' },
              { letter: 'B', text: 'It has treated left-handed children as being disabled.' },
              { letter: 'C', text: 'It has not built facilities specially for the left-handed.' },
              { letter: 'D', text: 'It has ignored campaigns on behalf of the left-handed.' },
            ],
            answer: 'A',
          },
          {
            n: 23,
            text: 'What do studies in recent years show about left-handed children?',
            options: [
              { letter: 'A', text: 'They are as intelligent as other children.' },
              { letter: 'B', text: 'They have a distinctive style of handwriting.' },
              { letter: 'C', text: 'They sometimes have psychological problems.' },
              { letter: 'D', text: 'They tend to have more difficulties in learning.' },
            ],
            answer: 'D',
          },
          {
            n: 24,
            text: 'What do the campaigners demand the department of education do?',
            options: [
              { letter: 'A', text: 'Punish teachers discriminating against left-handed students.' },
              { letter: 'B', text: 'Lay more emphasis on improving children\'s mental health.' },
              { letter: 'C', text: 'Encourage students to develop various professional skills.' },
              { letter: 'D', text: 'Keep track of left-handed children\'s school performance.' },
            ],
            answer: 'D',
          },
          {
            n: 25,
            text: 'What do the campaigners want to know about left-handed prisoners?',
            options: [
              { letter: 'A', text: 'How they can be reduced in number.' },
              { letter: 'B', text: 'Why their numbers are so high.' },
              { letter: 'C', text: 'What percentage they account for.' },
              { letter: 'D', text: 'If their percentage keeps increasing.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自听力原文，供校验与荧光笔高亮使用）
  answerQuotes: {
    1: ['Both of the dogs had been sent to the wrong destinations on connecting flights from Denver'],
    2: ['We will arrange to return the pets to them as soon as possible'],
    3: ['Semba has given birth before.'],
    4: ['She said the elephant\'s birth went smoothly and that there were no complications.'],
    5: ['The restaurant was built on a wooden structure above the sea-water.'],
    6: ['Recently, the restaurant manager Ryan Krivoy decided to replace the wooden deck'],
    7: ['The restaurant waitress Sasha Formica posted a picture of the ring on Facebook.'],
    8: ['I can\'t believe that duck hunting is still legal in so many parts of the world.'],
    9: ['We see more droughts in countries like Australia.'],
    10: ['Their meat is hardly eaten in Western countries.'],
    11: ['In fact, farmers used to poison them in large numbers.'],
    12: ['So, how much would the paint job cost?'],
    13: ['So including labor costs, taxes, and everything, this job would come to $3,000.'],
    14: ['I would have to stay with a friend or check into a hotel.'],
    15: ['I\'m starting to realize that painting my house is far more troublesome than I had anticipated.'],
    16: ['At the primary level, the main aim is to cultivate good habits, like learning to plan and exercising self-discipline.'],
    17: ['Creating an ideal working environment will make it easier for them to get down to their assignments quickly.'],
    18: ['When there are several different assignments, make sure they begin with one they enjoy, so it seems easy to get started.'],
    19: ['Workers at Mexican oil company will receive a healthy incentive of almost $300 a year if they meet certain body weight standards.'],
    20: ['That means weight can be hard for individuals to control, which makes the bonus unfair.'],
    21: ['A more productive method of encouraging health among employees is to promote healthy behaviors.'],
    22: ['Campaigners have warned that the British government is not doing enough to prevent left-handed pupils from falling behind their peers.'],
    23: ['Studies in recent years show that left-handed children are more likely to suffer with learning difficulties and their scores are lower on IQ tests.'],
    24: ['They want the department of education to record which children are left-handed and what their educational attainments are'],
    25: ['Campaigners point out that a high percentage of the prison population is left-handed.'],
  },
}

export default LISTENING
