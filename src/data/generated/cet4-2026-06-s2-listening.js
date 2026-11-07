// 2026年6月第二套 CET-4 听力数据
// 答案：解析 PDF 逐题核对；原文：解析 PDF 内嵌官方听力原文（OCR 清洗后读图核对）；题目选项：原题 PDF 读图
// verified: true
const LISTENING = {
  id: 'cet4-2026-06-s2',
  meta: {
    level: 'CET4',
    year: 2026,
    month: 6,
    set: 2,
    source: '原题：2026.06四级真题第2套.pdf；音频：26年6月四级听力音频第2套.mp3；原文：2026年6月英语四级解析第2套.pdf',
    answerSource: '解析 PDF（OCR 原文+读图核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2026-06-s2-a.mp3', // Section A
    conv: '/audio/cet4-2026-06-s2-b.mp3', // Section B
    pass: '/audio/cet4-2026-06-s2-c.mp3', // Section C
  },
  transcript: '', // 见下方 transcript 段落
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2026-06-s2-n1.mp3',
        transcript: 'A 104-year-old woman is selling the house she has lived in since she was two years old. Nancy Gifford was born months after the end of the First World War and spent 102 years living in her three-bedroom house in the Somerset Village of Street. She is now putting it on the market, having lived in it through the Second World War and the invention of television. Her family bought the house for 200 pounds in 1921. And it is now priced at some 170,000 pounds. According to the Bank of England\'s inflation calculator, 200 pounds in 1921 would be worth 7,750 pounds today. According to the estate agent, the house was built in 1882 and originally featured a well for the entire road. Except for some changes in the toilet and wash area, much of the house remains the same. Mrs Gifford is selling the house and moving to a nursing home in nearby Glastonbury because of her health.',
        questions: [
          {
            n: 1,
            text: 'What does the news report say about Nancy Gifford?',
            options: [
              { letter: 'A', text: 'She was born months after the end of World War I.' },
              { letter: 'B', text: 'She has been living in her house throughout her life.' },
              { letter: 'C', text: 'She suffered a great deal during the Second World War.' },
              { letter: 'D', text: 'She is a 102-year-old woman living in Somerset Village.' },
            ],
            answer: 'A',
          },
          {
            n: 2,
            text: 'Why is Mrs Gifford selling the house?',
            options: [
              { letter: 'A', text: 'She has been persuaded by the estate agent.' },
              { letter: 'B', text: 'She needs the money badly for her health.' },
              { letter: 'C', text: 'She is leaving Glastonbury Village.' },
              { letter: 'D', text: 'She is moving to a nursing home.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2026-06-s2-n2.mp3',
        transcript: 'The navy rescued a man who survived 24 days floating in the sea on a boat by eating tomato sauce and vegetable powder. The man, 47, wrote the word HELP in English on the boat, which was key to his rescue. The man told authorities that his experience began in December when currents swept the sailboat out to sea while he was making repairs. To survive, the man collected rainwater with a cloth. He had to constantly remove water from the boat to prevent it from sinking. He also tried to light a fire to send a distress signal without success. Finally, a plane passed by and he signaled with a mirror. He said the navy told him that he was spotted when the plane passed again. The sailboat was abandoned at sea when the man was picked up by a nearby merchant ship. He was found in good health but had lost weight.',
        questions: [
          {
            n: 3,
            text: 'What does the news report say was key to the man\'s rescue?',
            options: [
              { letter: 'A', text: 'The navy\'s timely arrival.' },
              { letter: 'B', text: 'His rich sailing experience.' },
              { letter: 'C', text: 'The word HELP written on the boat.' },
              { letter: 'D', text: 'His use of a mirror to send a signal.' },
            ],
            answer: 'C',
          },
          {
            n: 4,
            text: 'What do we learn about the man when he was rescued?',
            options: [
              { letter: 'A', text: 'He lost all consciousness.' },
              { letter: 'B', text: 'He was in good condition.' },
              { letter: 'C', text: 'He was too distressed to pick himself up.' },
              { letter: 'D', text: 'He entirely abandoned himself to despair.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2026-06-s2-n3.mp3',
        transcript: 'The board of Denver public schools is set to close several elementary and middle schools to make up for a decreased budget caused by declining enrollment. The specific schools will be announced in the coming days, a district spokesperson said. The school board approved criteria to close schools with fewer than 215 students, as well as schools with fewer than 275 students and a projected decline in enrollment. In the next three years, the district expects to enroll 3,000 fewer elementary and middle school students, it said. 3,000 students may not seem like that many students, but to a budget where you\'re receiving per-pupil funding, that\'s about 36 million dollars, district spokesperson Scott Bribble said. "We know that there are impacts and it\'s heartbreaking and difficult work, but in order for the district to stay out of debt, it\'s a step that needs to be taken," he said. The district said the decreased budget means it cannot provide the same mental health supports, social and emotional services or specialized programming to schools with lower enrollments.',
        questions: [
          {
            n: 5,
            text: 'What do we learn about the elementary and middle schools to be closed in Denver?',
            options: [
              { letter: 'A', text: 'Their efforts to provide social services have been ignored.' },
              { letter: 'B', text: 'They have been criticized by the Denver school board.' },
              { letter: 'C', text: 'They have taken various steps to get more funding.' },
              { letter: 'D', text: 'Their enrollment has been on a noticeable decline.' },
            ],
            answer: 'D',
          },
          {
            n: 6,
            text: 'What does the Denver district expect to do in the next three years?',
            options: [
              { letter: 'A', text: 'Approve criteria for closing schools with decreased funding.' },
              { letter: 'B', text: 'Enroll 3,000 fewer elementary and middle school students.' },
              { letter: 'C', text: 'Decide which elementary and middle schools to close.' },
              { letter: 'D', text: 'Alter its per-pupil funding policy on a rational basis.' },
            ],
            answer: 'B',
          },
          {
            n: 7,
            text: 'Why are some schools in Denver to be closed according to the district spokesperson?',
            options: [
              { letter: 'A', text: 'To enable the district to remain competitive.' },
              { letter: 'B', text: 'To avoid a negative impact on its economy.' },
              { letter: 'C', text: 'To keep the district free of debt.' },
              { letter: 'D', text: 'To obtain the expected funding.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2026-06-s2-c1.mp3',
        transcript: 'M: Good afternoon, Theater Bookings International. My name\'s Philip. How may I help you today? W: Oh, good afternoon. My name is Helen. I\'ve been trying to book tickets for the musical Cats in London on the evening of May the 28th. But I can\'t get the computer to accept my card payment. I\'ve tried three times, but it just doesn\'t want to take it. M: That\'s okay, madam. I can book it and take the payment over the phone if that\'s not a problem for you. W: That would be wonderful. I\'m not very good with computers. My husband usually does all of these things, but he is in Italy on a business trip until next Thursday. And I know how quickly these things can sell out. M: They do indeed, madam. Firstly, can you confirm that it\'s the performance of Cats on May the 28th at the Lion Theatre in London at 7:30 p.m? W: Yes, that\'s the one and I will need two tickets, please, not too close to the front. M: Actually, all the tickets at the front are already sold out anyway, but I can offer you two upstairs near the middle. I assume that you don\'t want to be too high up. W: Oh, my goodness, no. I\'m scared of heights, and you can never see anything if you are too high up anyway. M: No problem, madam. I\'ll reserve those for you now. And all we need after that is the details of your card number and your forename, and then we are done.',
        questions: [
          {
            n: 8,
            text: 'Why does the woman call the man?',
            options: [
              { letter: 'A', text: 'To book tickets for a musical.' },
              { letter: 'B', text: 'To enquire about the price of cats.' },
              { letter: 'C', text: 'To pay for her afternoon flight to London.' },
              { letter: 'D', text: 'To have her personal computer repaired.' },
            ],
            answer: 'A',
          },
          {
            n: 9,
            text: 'What do we learn about the woman\'s husband?',
            options: [
              { letter: 'A', text: 'He frequents the Lion Theatre.' },
              { letter: 'B', text: 'He knows how to sell things well.' },
              { letter: 'C', text: 'He is a computer science expert.' },
              { letter: 'D', text: 'He is away on a business trip.' },
            ],
            answer: 'D',
          },
          {
            n: 10,
            text: 'What does the man say about the tickets at the front?',
            options: [
              { letter: 'A', text: 'They are sold at a discount.' },
              { letter: 'B', text: 'They are in low demand.' },
              { letter: 'C', text: 'They are no longer available.' },
              { letter: 'D', text: 'They are not too expensive.' },
            ],
            answer: 'C',
          },
          {
            n: 11,
            text: 'What does the woman say she is scared of?',
            options: [
              { letter: 'A', text: 'Heights.' },
              { letter: 'B', text: 'Circus.' },
              { letter: 'C', text: 'Wild animals.' },
              { letter: 'D', text: 'Dark nights.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2026-06-s2-c2.mp3',
        transcript: 'W: Hi, John. Why haven\'t you answered my text messages lately? M: Oh, I didn\'t know you had sent any. I turned off my phone almost a week ago and haven\'t turned it back on since then. W: Why would you do something like that when our phones make our lives so much more convenient? M: Well, I downloaded an app that recorded how much time I spent on my phone, and I was shocked to realize I was using my phone an average of eight hours a day. And on my worst day, I used it for twelve hours. W: Were you addicted to mobile phone games? I had a friend who was, and he sometimes played them all day and into the night. M: No, my problem was I was spending too much time on social media, messaging friends, and commenting on other people\'s posts. W: I do all of that too, as well as shopping online, and paying for everything with my phone. That is really why I don\'t see how anyone could live without a mobile phone. How do you buy things or communicate with your friends? M: Since I\'ve stopped using my phone, I go to physical stores and pay in cash. I\'ve actually met friends for meals at cafes and restaurants. W: That\'s great for you. But my friends and family don\'t live in this city, so we can\'t see each other often. And I don\'t have any choice but to chat with them online.',
        questions: [
          {
            n: 12,
            text: 'Why hasn\'t the man answered the woman\'s text messages lately?',
            options: [
              { letter: 'A', text: 'He finds it bothersome to reply.' },
              { letter: 'B', text: 'He has switched off his phone.' },
              { letter: 'C', text: 'He hasn\'t got the time to text back.' },
              { letter: 'D', text: 'He doesn\'t know how to respond.' },
            ],
            answer: 'B',
          },
          {
            n: 13,
            text: 'What was the man shocked to realize after he downloaded the app?',
            options: [
              { letter: 'A', text: 'His lack of sufficient sleep at night.' },
              { letter: 'B', text: 'His addiction to mobile phone games.' },
              { letter: 'C', text: 'His excessive use of the mobile phone.' },
              { letter: 'D', text: 'His high frequency of surfing the net.' },
            ],
            answer: 'C',
          },
          {
            n: 14,
            text: 'What did the man spend much time doing with his phone?',
            options: [
              { letter: 'A', text: 'Shopping online and paying for his purchases.' },
              { letter: 'B', text: 'Communicating with friends on social media.' },
              { letter: 'C', text: 'Exploring whatever content to his liking.' },
              { letter: 'D', text: 'Sharing and posting pictures and videos.' },
            ],
            answer: 'B',
          },
          {
            n: 15,
            text: 'Why does the woman say she has to use her mobile phone?',
            options: [
              { letter: 'A', text: 'She prefers chatting with others online to meeting them.' },
              { letter: 'B', text: 'There are few physical stores near where she lives.' },
              { letter: 'C', text: 'Ordering meals online is a great convenience to her.' },
              { letter: 'D', text: 'She needs to talk with her friends and family far away.' },
            ],
            answer: 'D',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2026-06-s2-p1.mp3',
        transcript: 'If US workers want to switch jobs, they\'d better do it now. Last year, job switchers earned far higher wage increases than those staying in their jobs, but the gap is now closing. A three-month moving average of annual wage increases from the Atlanta Federal Reserve Bank\'s wage tracker shows that US job switchers got the highest wage increase last July, when the measure touched 8.5 percent. Since then, it has gone up and down, and has been going steadily down since November. The gap in wage gains between people who switched jobs and those who stayed in their jobs is now closing. On average, people who changed jobs have almost always gotten better pay raises than those who stayed, but in the past the difference was usually around one percentage point. In July, though, the gap widened to 2.6 percentage points. But now wage growth is slowing down for everyone, and job switchers are getting smaller wage bumps in their new jobs. At the moment, those who change jobs get an average 7.3% raise every year, while those who stay get a 5.4% raise. That suggests the demand for workers has reached or is at least nearing its peak. The labor market is likely cooling because even a shortage of workers isn\'t overcoming the historic imbalance between employers and employees in the US: the volume of income that workers take home as a proportion of what the US economy produces is still falling.',
        questions: [
          {
            n: 16,
            text: 'What does the passage say about the gap in wage gains between job switchers and those who stay in their jobs?',
            options: [
              { letter: 'A', text: 'It is now narrowing.' },
              { letter: 'B', text: 'It keeps increasing.' },
              { letter: 'C', text: 'It has remained huge.' },
              { letter: 'D', text: 'It will soon disappear.' },
            ],
            answer: 'A',
          },
          {
            n: 17,
            text: 'What do we learn about wage growth now?',
            options: [
              { letter: 'A', text: 'It is fluctuating between 5-7%.' },
              { letter: 'B', text: 'It is slowing down for everyone.' },
              { letter: 'C', text: 'It is faster for those who stay in their jobs.' },
              { letter: 'D', text: 'It is inadequate for dealing with inflation.' },
            ],
            answer: 'B',
          },
          {
            n: 18,
            text: 'What is the labor market likely doing according to the passage?',
            options: [
              { letter: 'A', text: 'Booming.' },
              { letter: 'B', text: 'Stabilizing.' },
              { letter: 'C', text: 'Struggling.' },
              { letter: 'D', text: 'Cooling.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2026-06-s2-p2.mp3',
        transcript: 'Highly processed foods—the kinds made with lots of sugar, fat and salt—make up as much as sixty percent of the average American diet, but a new study shows that their low price and convenience come at a cost to health. The study found that when people ate a highly processed diet, they consumed about five hundred more calories per day than they did when they ate a less processed diet. They also gained two pounds over two weeks even though both diets had the same amounts of nutrients like sugar, fat, fiber and salt. It wasn\'t a shock to find highly processed foods weren\'t healthy. Other research has linked them to a higher risk of cancer and obesity. What was unexpected was that sugar, fat and salt didn\'t seem to be what caused people to overeat. This is the first trial that demonstrates that there is something about highly processed foods independent of those nutrients that causes people to overeat. The study also found that when eating a highly processed diet, people ate faster. This could be one reason why they gained more weight. Highly processed food tends to be softer, which makes it easier to chew and swallow. One theory is that if you\'re eating more quickly, you\'re not giving your gut enough time to signal to your brain that you\'ve had enough calories and that you\'re full. By the time the brain gets that signal, you\'ve already overeaten.',
        questions: [
          {
            n: 19,
            text: 'What does a new study show about highly processed foods?',
            options: [
              { letter: 'A', text: 'They have smaller amounts of nutrients than unprocessed diets.' },
              { letter: 'B', text: 'Their contribution to calorie consumption is hard to determine.' },
              { letter: 'C', text: 'They account for nearly half of the average American diet.' },
              { letter: 'D', text: 'Their low price and convenience negatively impact health.' },
            ],
            answer: 'D',
          },
          {
            n: 20,
            text: 'What are highly processed foods linked to according to other research?',
            options: [
              { letter: 'A', text: 'A strong desire to overeat.' },
              { letter: 'B', text: 'A lack of nutrients like fiber.' },
              { letter: 'C', text: 'A higher risk of cancer and obesity.' },
              { letter: 'D', text: 'A greater intake of sugar and salt.' },
            ],
            answer: 'C',
          },
          {
            n: 21,
            text: 'What do people tend to do when eating highly processed foods?',
            options: [
              { letter: 'A', text: 'Eat more quickly.' },
              { letter: 'B', text: 'Feel full sooner.' },
              { letter: 'C', text: 'Chew thoroughly.' },
              { letter: 'D', text: 'Swallow bit by bit.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2026-06-s2-p3.mp3',
        transcript: 'Women continue to spend more time than men taking care of children and doing chores around the house. This is generally attributed to backward thinking and conservative values, but new research shows that such differences could be linked to differences in the preferences of males and females. The new study looked at how men and women were dividing work at home and why they divided it that way. In general, both men and women took more responsibility for tasks they liked. For example, men liked yard care and home maintenance more than women. They leaned toward wanting primary responsibility for such tasks. The researchers stated that differences in enjoyment of household and childcare tasks matched how men and women chose to split tasks. The researchers added that there was not a single childcare task that men liked more than women. Keep in mind, however, that as with any research on group differences, there were large within-group differences. The study\'s authors concluded that differences in men\'s and women\'s time spent on childcare and household tasks do not mean dissatisfaction. The authors noted that previous research revealed gender differences in attitudes towards family and career. These differences appear as early as six years old: girls at that age already show more interest in helping and caring for others than boys do, and they already exhibit a greater orientation toward family versus career.',
        questions: [
          {
            n: 22,
            text: 'How do people generally account for differences between men and women in the amount of time spent on housework?',
            options: [
              { letter: 'A', text: 'By attributing them to current cultural influences.' },
              { letter: 'B', text: 'By attributing them to conservative thinking.' },
              { letter: 'C', text: 'In terms of new genetic findings.' },
              { letter: 'D', text: 'In terms of personal preferences.' },
            ],
            answer: 'B',
          },
          {
            n: 23,
            text: 'What did men lean toward doing according to the new study?',
            options: [
              { letter: 'A', text: 'Sharing with women the chores they see necessary.' },
              { letter: 'B', text: 'Dividing housework that is demanding for women.' },
              { letter: 'C', text: 'Performing household tasks that they enjoy.' },
              { letter: 'D', text: 'Doing tasks that are physically challenging.' },
            ],
            answer: 'C',
          },
          {
            n: 24,
            text: 'What should we keep in mind as regards any research on group differences?',
            options: [
              { letter: 'A', text: 'The large within-group differences.' },
              { letter: 'B', text: 'The great similarities across groups.' },
              { letter: 'C', text: 'The researchers\' subjective biases.' },
              { letter: 'D', text: 'The noticeable overgeneralizations.' },
            ],
            answer: 'A',
          },
          {
            n: 25,
            text: 'What did previous research reveal about gender differences in attitudes toward family and career?',
            options: [
              { letter: 'A', text: 'They seem to be universal.' },
              { letter: 'B', text: 'They impact people\'s whole life.' },
              { letter: 'C', text: 'They shape one\'s role in society.' },
              { letter: 'D', text: 'They appear at an early age.' },
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
    1: ['Nancy Gifford was born months after the end of the First World War and spent 102 years living in her three-bedroom house in the Somerset Village of Street.'],
    2: ['Mrs Gifford is selling the house and moving to a nursing home in nearby Glastonbury because of her health.'],
    3: ['The man, 47, wrote the word HELP in English on the boat, which was key to his rescue.'],
    4: ['He was found in good health but had lost weight.'],
    5: ['The board of Denver public schools is set to close several elementary and middle schools to make up for a decreased budget caused by declining enrollment.'],
    6: ['In the next three years, the district expects to enroll 3,000 fewer elementary and middle school students, it said.'],
    7: ['but in order for the district to stay out of debt, it\'s a step that needs to be taken'],
    8: ['I\'ve been trying to book tickets for the musical Cats in London on the evening of May the 28th.'],
    9: ['My husband usually does all of these things, but he is in Italy on a business trip until next Thursday.'],
    10: ['all the tickets at the front are already sold out anyway'],
    11: ['I\'m scared of heights'],
    12: ['I turned off my phone almost a week ago and haven\'t turned it back on since then.'],
    13: ['I downloaded an app that recorded how much time I spent on my phone, and I was shocked to realize I was using my phone an average of eight hours a day.'],
    14: ['I was spending too much time on social media, messaging friends, and commenting on other people\'s posts.'],
    15: ['But my friends and family don\'t live in this city, so we can\'t see each other often. And I don\'t have any choice but to chat with them online.'],
    16: ['The gap in wage gains between people who switched jobs and those who stayed in their jobs is now closing.'],
    17: ['But now wage growth is slowing down for everyone, and job switchers are getting smaller wage bumps in their new jobs.'],
    18: ['The labor market is likely cooling'],
    19: ['but a new study shows that their low price and convenience come at a cost to health.'],
    20: ['Other research has linked them to a higher risk of cancer and obesity.'],
    21: ['The study also found that when eating a highly processed diet, people ate faster.'],
    22: ['This is generally attributed to backward thinking and conservative values'],
    23: ['In general, both men and women took more responsibility for tasks they liked.'],
    24: ['Keep in mind, however, that as with any research on group differences, there were large within-group differences.'],
    25: ['The authors noted that previous research revealed gender differences in attitudes towards family and career. These differences appear as early as six years old'],
  },
}

export default LISTENING
