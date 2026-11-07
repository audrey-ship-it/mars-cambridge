// 2026年6月第一套 CET-4 听力数据
// 答案：解析 PDF 逐题核对；原文：解析 PDF 官方听力原文（OCR 清洗）；题目选项：原题 PDF 读图
// verified: true
const LISTENING = {
  id: 'cet4-2026-06-s1',
  meta: {
    level: 'CET4',
    year: 2026,
    month: 6,
    set: 1,
    source:
      '原题：2026.06四级真题第1套.pdf；音频：26年6月四级听力音频第1套.mp3；原文：2026年6月英语四级解析第1套.pdf',
    answerSource: '解析 PDF（OCR 原文+读图核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2026-06-s1-a.mp3', // Section A
    conv: '/audio/cet4-2026-06-s1-b.mp3', // Section B
    pass: '/audio/cet4-2026-06-s1-c.mp3', // Section C
  },
  transcript: '', // 见下方 transcript 段落
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2026-06-s1-n1.mp3',
        transcript:
          'A man was left with a $1,000 bill, after his 6-year-old son ordered a virtual buffet of food from several restaurants last weekend. This led to a string of unexpected deliveries, and maybe a starring role in an advertisement campaign. Keith Stonehouse said the food piled up quickly at his home Saturday night after he let his son use his cell phone to play a game before bed. He said the youngster instead used his father\'s online food ordering account to order food from one restaurant after another. The boy\'s mother, Christine Stonehouse, said that the online food app has reached out to the family and offered them a $1,000 gift card. The company also is considering using the family in an online promotional campaign. Most of the food went into the family\'s refrigerators. They also invited some neighbors over to eat some of it. The father is planning to change his password.',
        questions: [
          {
            n: 1,
            text: 'Why was Keith Stonehouse left with a $1,000 bill?',
            options: [
              { letter: 'A', text: 'He had bought meals with his online food ordering account.' },
              { letter: 'B', text: 'His son had used his cell phone to pay for playing a game.' },
              { letter: 'C', text: 'His son had ordered food from several restaurants.' },
              { letter: 'D', text: 'He had dined out at a famous five-star restaurant.' },
            ],
            answer: 'C',
          },
          {
            n: 2,
            text: 'What does the news report say Keith Stonehouse is planning to do?',
            options: [
              { letter: 'A', text: 'Teach his son a lesson.' },
              { letter: 'B', text: 'Change his password.' },
              { letter: 'C', text: 'Ask his neighbors for help.' },
              { letter: 'D', text: 'Buy a bigger refrigerator.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2026-06-s1-n2.mp3',
        transcript:
          'Animal behaviour experts looked at more than 100 research papers. They examined how visitors affected the behaviour of more than 250 species in zoos. They found that elephants socialised more with each other during public feeding times. After public feeding times, they were more likely to search for food and less likely to be inactive. In the presence of many visitors, elephants were less likely to use repetitive behaviours which often indicate boredom. Visitors had a similar effect on some other species too, including polar bears, certain jungle cats and black-tailed prairie dogs. Some animal species have been born and raised in zoos, and so have likely become used to the presence of humans. Zoo visitors are often aspects of zoo animals\' environment that animals cannot control, and as such can be stressful, although some species appear to show good adaptability to the changing conditions of visitors.',
        questions: [
          {
            n: 3,
            text: 'What did animal behaviour experts do according to the news report?',
            options: [
              { letter: 'A', text: 'They examined how visitors affected animal behaviour in zoos.' },
              { letter: 'B', text: 'They studied when the best time to feed animals in public was.' },
              { letter: 'C', text: 'They studied how animals adapted themselves to life in zoos.' },
              { letter: 'D', text: 'They examined what behaviours indicated animal boredom.' },
            ],
            answer: 'A',
          },
          {
            n: 4,
            text: 'Why have some animal species likely become used to the presence of humans?',
            options: [
              { letter: 'A', text: 'They socialise with zookeepers as well as with each other.' },
              { letter: 'B', text: 'They show good adaptability to living with humans.' },
              { letter: 'C', text: 'They have been kept as pets by humans.' },
              { letter: 'D', text: 'They have been born and raised in zoos.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2026-06-s1-n3.mp3',
        transcript:
          'Denver is suspending its popular electric bike incentive program. The program was launched in April. It allowed Denver residents to apply for $400 in government funds before buying an electric bike from a participating shop. Residents who met certain income qualifications could qualify for $1,200. More than 3,000 Denver residents applied for incentives within the first 3 weeks. The city then changed the program to limit the number of applications each month. On Monday, the city announced the pause. "We\'re honored to be a part of transforming the way Denver wants to move around," said Grace Rink, Denver\'s chief climate officer. "We exhausted 3 years\' worth of funding in 6 months." The city said the program has put 4,400 electric bikes on the streets of Denver and invested $8.6 million into the local economy. The city has provided 2,200 incentives to lower-income residents that represent 68% of the program funding. The city expects to resume the program early next year. It also plans design changes to make participation easier and increase access to the program.',
        questions: [
          {
            n: 5,
            text: 'What is Denver doing with its popular electric bike incentive program?',
            options: [
              { letter: 'A', text: 'Adjusting it.' },
              { letter: 'B', text: 'Suspending it.' },
              { letter: 'C', text: 'Reevaluating it.' },
              { letter: 'D', text: 'Expanding it.' },
            ],
            answer: 'B',
          },
          {
            n: 6,
            text: 'How did the electric bike incentive program benefit residents?',
            options: [
              { letter: 'A', text: 'They could buy an electric bike for $400 in April.' },
              { letter: 'B', text: 'They could buy their first electric bike at a discount.' },
              { letter: 'C', text: 'They could enjoy free after-sale service for their purchase.' },
              { letter: 'D', text: 'They could get $1,200 from government funds if they qualified.' },
            ],
            answer: 'D',
          },
          {
            n: 7,
            text: 'What does the city of Denver expect to do early next year?',
            options: [
              { letter: 'A', text: 'Put 400 more electric bikes on its streets.' },
              { letter: 'B', text: 'Increase the program funding by 8 percent.' },
              { letter: 'C', text: 'Resume its electric bike incentive program.' },
              { letter: 'D', text: 'Invest millions of dollars into the local economy.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2026-06-s1-c1.mp3',
        transcript:
          'W: Hey, Mike, what do you think of the museum you visited today? M: Hey, Sue. The museum is great. Very interesting. They have loads of stuff there on display. The primitive tools early humans used tell a lot about their life, but my favorite is the coin collection. They have some coins that are over 2,000 years old. W: That sounds cool. M: Yeah, what did you do today? W: Kathy and I just wandered through the old city centre. The streets are narrow but beautiful with plenty of charm. We saw the Trevi Fountain, which is in all the guidebooks. M: How do you like it? W: It\'s very pretty, but it was overcrowded with tourists. M: Yeah, well, it\'s crowded everywhere. It is August, after all, the busiest month of the year. W: Yes, it\'s like the whole world is here on holiday, including us. What will you do tomorrow? M: I haven\'t decided yet. I was thinking of doing what you did today—wandering the old streets and taking pictures. I was also thinking of visiting the square with the Spanish steps. W: What is that? I haven\'t heard of it. M: It\'s a square where on one side, there are some very wide steps with flowers that go up to a church. It\'s also in all the tourist guidebooks. It\'s very famous and pretty. I was also thinking of seeing that tomorrow. W: It sounds very nice. Do you mind if Kathy and I join you tomorrow? M: Not at all. I spent the whole day today pretty much alone. Doing tourist stuff with others would be a welcome change. W: Let me ask her first, but I\'m sure she\'ll be up for it.',
        questions: [
          {
            n: 8,
            text: 'What exhibits does the man like best in the museum he visited?',
            options: [
              { letter: 'A', text: 'The coin collection.' },
              { letter: 'B', text: 'The primitive tools.' },
              { letter: 'C', text: 'The ancient ornaments.' },
              { letter: 'D', text: 'The 2,000-year-old clothes.' },
            ],
            answer: 'A',
          },
          {
            n: 9,
            text: 'What does the woman say about the old city centre?',
            options: [
              { letter: 'A', text: 'It is charming with narrow but beautiful streets.' },
              { letter: 'B', text: 'It attracts visitors from every corner of the world.' },
              { letter: 'C', text: 'It has flowers displayed around the Trevi Fountain.' },
              { letter: 'D', text: 'It is more attractive than the pictures in guidebooks.' },
            ],
            answer: 'A',
          },
          {
            n: 10,
            text: 'What does the man say about the square with the Spanish steps?',
            options: [
              { letter: 'A', text: 'It is covered with wild grass.' },
              { letter: 'B', text: 'It is very famous and pretty.' },
              { letter: 'C', text: 'It is located away from an old church.' },
              { letter: 'D', text: 'It is surrounded by Spanish-style houses.' },
            ],
            answer: 'B',
          },
          {
            n: 11,
            text: 'What does the woman say she is going to do first?',
            options: [
              { letter: 'A', text: 'Ask Kathy what her plan is.' },
              { letter: 'B', text: 'Tell Kathy Mike will join them.' },
              { letter: 'C', text: 'Ask Kathy if she\'d like to see the square.' },
              { letter: 'D', text: 'Tell Kathy Mike would like to have a change.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2026-06-s1-c2.mp3',
        transcript:
          'M: Can you give me advice about being successful at a new job? I start mine next week. W: Sure. It\'s important not to undermine the significance of the first few days of your job, since this is the best time to create a solid first impression. M: That\'s a good point. I\'ll need to collaborate with my co-workers, and I\'m very aware of just how important others are for my success at work. W: It\'s also important to understand your role thoroughly to gain a comprehensive picture of your job. The most important thing for you to do at first is to understand your role from multiple perspectives. M: Why is that? W: Well, what you do at work is not just limited to your job description. You need to consider how your work relates to other people within the organization. M: Oh, right. So, for example, certain reports that I create at the end of the month may be used by a team in another department. W: That\'s right. And in that respect, it\'s also important to learn about the business to see the big picture. M: You mean like knowing about the history of the company? W: Kind of, but more like knowing the details of the products and services that the company exists to deliver. Learning about the business will give you a chance to understand how your role fits into the bigger picture. M: Okay. I\'m feeling a bit uneasy about meeting my boss as well. W: That\'s to be expected. However, it\'s crucial that you get to know the people who have decision-making authority to gain insight regarding how the business is run and decisions are made. M: Great advice. Thanks!',
        questions: [
          {
            n: 12,
            text: 'What advice does the man want to get from the woman?',
            options: [
              { letter: 'A', text: 'How to fit into the bigger picture.' },
              { letter: 'B', text: 'How to get on with colleagues.' },
              { letter: 'C', text: 'How to create a solid first impression.' },
              { letter: 'D', text: 'How to succeed in a new job.' },
            ],
            answer: 'D',
          },
          {
            n: 13,
            text: 'What does the woman say is the most important thing for the man to do at first?',
            options: [
              { letter: 'A', text: 'Get familiar with all the details of his job description.' },
              { letter: 'B', text: 'Learn about the relations within the organization.' },
              { letter: 'C', text: 'Recognize his own limitations and weaknesses.' },
              { letter: 'D', text: 'Understand his role from various perspectives.' },
            ],
            answer: 'D',
          },
          {
            n: 14,
            text: 'What does the man say he is feeling a bit uneasy about?',
            options: [
              { letter: 'A', text: 'Learning history.' },
              { letter: 'B', text: 'Meeting his boss.' },
              { letter: 'C', text: 'Creating reports for other departments to use.' },
              { letter: 'D', text: 'Leaving his coworkers in the present company.' },
            ],
            answer: 'B',
          },
          {
            n: 15,
            text: 'What does the woman suggest the man do to gain insight about the running of the business?',
            options: [
              { letter: 'A', text: 'Get to know the decision-makers.' },
              { letter: 'B', text: 'Acquire decision-making authority.' },
              { letter: 'C', text: 'Promote its products and services.' },
              { letter: 'D', text: 'Observe its overall management.' },
            ],
            answer: 'A',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2026-06-s1-p1.mp3',
        transcript:
          'Contrary to popular belief, consumers aren\'t as smart as they like to believe. Many consumers report comparing multiple competing brands and prices when evaluating a purchase. However, research indicates that this is not actually the case. What consumers really think or feel often contradicts what they say. A big reason is that they\'re driven by unconscious urges, the biggest of which is emotion. Emotion is what really drives the purchasing behaviors and also decision-making in general. Good marketers keep in mind this important fact all the time. And examples of emotion-based campaigns are everywhere. Think for a moment, what is actually being sold in most marketing campaigns? Luxury goods target our feelings of self-worth, acceptance, and status in the world. Communication devices excite us by offering a connection to friends, family, and a broader network of people. And many other products, such as rings, target emotions related to love and relationships. As marketers, we should focus on the features of the product, but we must also sell the lifestyle and the feeling. The key is to highlight the emotional response a consumer will have by using the product. To achieve the highest emotional response, we should target our consumer through many different senses. A lot of what drives consumers is subconscious behavior. But this isn\'t a bad thing. There\'s nothing manipulative about helping consumers achieve desired states of emotion.',
        questions: [
          {
            n: 16,
            text: 'What does research indicate about many consumers when they evaluate a purchase?',
            options: [
              { letter: 'A', text: 'They do not tell marketers their feeling about a product.' },
              { letter: 'B', text: 'They do not compare competing brands and prices.' },
              { letter: 'C', text: 'They are not hesitant to contradict themselves.' },
              { letter: 'D', text: 'They are not sure what they really like to buy.' },
            ],
            answer: 'B',
          },
          {
            n: 17,
            text: 'What do good marketers keep in mind all the time?',
            options: [
              { letter: 'A', text: 'Consumers are often attracted by new products.' },
              { letter: 'B', text: 'Consumers tend to make decisions on the spot.' },
              { letter: 'C', text: 'Consumers find it hard to resist temptation.' },
              { letter: 'D', text: 'Consumers are actually driven by emotion.' },
            ],
            answer: 'D',
          },
          {
            n: 18,
            text: 'What should marketers do besides stressing the features of a product?',
            options: [
              { letter: 'A', text: 'Draw consumers\' attention to the luxury goods symbolizing quality life.' },
              { letter: 'B', text: 'Leave consumers the impression they are doing nothing manipulative.' },
              { letter: 'C', text: 'Highlight the emotional response it will trigger in the consumer.' },
              { letter: 'D', text: 'Remind consumers of the wide connections it can help to build.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2026-06-s1-p2.mp3',
        transcript:
          'Plastics have for years been used to make nearly everything that surrounds us, but along the way they escaped the confines of packaging and objects and settled in the environment, the food we eat and the air we breathe. Americans are consuming and breathing in a lot of plastic. Based on available data, Americans take in an estimated 74,000 to 121,000 microplastic particles every year. However, scientists believe the true number is probably much higher because for some likely sources of microplastics, there was no strong data available. Microplastics get into food and air in several ways. Many start off as part of larger plastic objects, which over time fragment into smaller and smaller pieces until they become tiny, 5 millimeters or less in diameter. They are breathed in or consumed by animals that then become our food. The particles float through the air until people breathe them in. They also settle on the food that people eat. Data shows that for Americans, air, bottled water and seafood were the biggest sources for breathed in or consumed microplastics. Added sugars accounted for less, and salts, tap water and beer contributed minimal amounts. These estimates are conservative. The included foods only make up about 15% of the average American diet. It\'s not yet known how much plastic is contained in the remaining 85% of the typical diet.',
        questions: [
          {
            n: 19,
            text: 'What does the passage say about Americans?',
            options: [
              { letter: 'A', text: 'They are taking in a lot of plastic.' },
              { letter: 'B', text: 'They are polluting the environment.' },
              { letter: 'C', text: 'They consume much processed food.' },
              { letter: 'D', text: 'They make everything with plastics.' },
            ],
            answer: 'A',
          },
          {
            n: 20,
            text: 'What counted as the biggest sources for Americans breathing in or consuming microplastics?',
            options: [
              { letter: 'A', text: 'Beer, salts and added sugars.' },
              { letter: 'B', text: 'Tap water and take-away food.' },
              { letter: 'C', text: 'Food packages and plastic bags.' },
              { letter: 'D', text: 'Air, bottled water and seafood.' },
            ],
            answer: 'D',
          },
          {
            n: 21,
            text: 'What does the passage say is still unknown?',
            options: [
              { letter: 'A', text: 'How much plastic there is in the remaining 85% of Americans\' typical diet.' },
              { letter: 'B', text: 'What measures can be taken to prevent plastic objects from fragmenting.' },
              { letter: 'C', text: 'What harm microplastics may actually do to the average Americans.' },
              { letter: 'D', text: 'How many ways there are for microplastics to get into food and air.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2026-06-s1-p3.mp3',
        transcript:
          'People looking to stay well as they age may want to adopt a pet animal, according to new data from the University of Michigan National Poll on Healthy Aging. For the survey, researchers polled about 2,000 US adults from ages 50 to 80. 55% said they owned at least one pet. Dogs were the most common pet, followed by cats. But whatever the type of animal, the vast majority of owners said their pets boosted their mental and physical health. Nearly 90% of older pet owners said their animals helped them enjoy life and feel loved. Roughly 80% said their pets reduced stress, and almost three quarters said their pets provided a sense of purpose. However, people did report a few disadvantages to pet ownership. These included difficulty traveling and financial strains. 6% of pet owners said they\'d fallen or injured themselves as a result of having a pet. Still, plenty of research has shown that just about anyone can benefit from their pet since animals can lower stress, reduce symptoms of depression and anxiety, and encourage physical activity. The new poll suggests that pet ownership may be especially beneficial for older adults, given how common loneliness and social isolation are within this age group. Human social support comes with a host of health benefits: less stress, lower rates of long-term disease, and more. And research shows that interacting with pets can bring many of the same benefits.',
        questions: [
          {
            n: 22,
            text: 'What did over half of the respondents say in the survey?',
            options: [
              { letter: 'A', text: 'They planned to adopt a pet animal.' },
              { letter: 'B', text: 'They kept not only a dog but a cat.' },
              { letter: 'C', text: 'They had at least one pet.' },
              { letter: 'D', text: 'They liked cats more than dogs.' },
            ],
            answer: 'C',
          },
          {
            n: 23,
            text: 'What did most older pet owners in the survey say their pets provided?',
            options: [
              { letter: 'A', text: 'A sense of pride.' },
              { letter: 'B', text: 'A sense of duty.' },
              { letter: 'C', text: 'A sense of purpose.' },
              { letter: 'D', text: 'A sense of security.' },
            ],
            answer: 'C',
          },
          {
            n: 24,
            text: 'What does the passage say people did report in the survey?',
            options: [
              { letter: 'A', text: 'A few problems with keeping big animals.' },
              { letter: 'B', text: 'Some disadvantages related to pet ownership.' },
              { letter: 'C', text: 'A few cases of getting attacked by pet animals.' },
              { letter: 'D', text: 'Some conflicts with neighbors due to pet keeping.' },
            ],
            answer: 'B',
          },
          {
            n: 25,
            text: 'What does research show interacting with pets can do?',
            options: [
              { letter: 'A', text: 'Reduce many symptoms of depression as medical help.' },
              { letter: 'B', text: 'Improve people\'s health as much as physical activities.' },
              { letter: 'C', text: 'Lower older people\'s stress as effectively as exercising.' },
              { letter: 'D', text: 'Bring many of the same benefits as human social support.' },
            ],
            answer: 'D',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自解析 PDF 内嵌官方听力原文的 [n] 标记句，
  // 供 scripts/verify-listening-quotes.mjs 核对与后续荧光笔高亮使用）
  answerQuotes: {
    1: ['A man was left with a $1,000 bill, after his 6-year-old son ordered a virtual buffet of food from several restaurants last weekend.'],
    2: ['The father is planning to change his password.'],
    3: ['They examined how visitors affected the behaviour of more than 250 species in zoos.'],
    4: ['Some animal species have been born and raised in zoos, and so have likely become used to the presence of humans.'],
    5: ['Denver is suspending its popular electric bike incentive program.'],
    6: ['Residents who met certain income qualifications could qualify for $1,200.'],
    7: ['The city expects to resume the program early next year.'],
    8: ['but my favorite is the coin collection'],
    9: ['The streets are narrow but beautiful with plenty of charm'],
    10: ['It\'s very famous and pretty'],
    11: ['Let me ask her first, but I\'m sure she\'ll be up for it'],
    12: ['Can you give me advice about being successful at a new job?'],
    13: ['The most important thing for you to do at first is to understand your role from multiple perspectives'],
    14: ['I\'m feeling a bit uneasy about meeting my boss as well'],
    15: ['it\'s crucial that you get to know the people who have decision-making authority to gain insight regarding how the business is run and decisions are made'],
    16: ['Many consumers report comparing multiple competing brands and prices when evaluating a purchase', 'research indicates that this is not actually the case'],
    17: ['Emotion is what really drives the purchasing behaviors and also decision-making in general'],
    18: ['The key is to highlight the emotional response a consumer will have by using the product'],
    19: ['Americans are consuming and breathing in a lot of plastic'],
    20: ['Data shows that for Americans, air, bottled water and seafood were the biggest sources for breathed in or consumed microplastics'],
    21: ['It\'s not yet known how much plastic is contained in the remaining 85% of the typical diet'],
    22: ['55% said they owned at least one pet'],
    23: ['almost three quarters said their pets provided a sense of purpose'],
    24: ['However, people did report a few disadvantages to pet ownership'],
    25: ['Human social support comes with a host of health benefits: less stress, lower rates of long-term disease, and more', 'research shows that interacting with pets can bring many of the same benefits'],
  },
}

export default LISTENING
