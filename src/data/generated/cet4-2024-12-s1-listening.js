// 2024年12月第一套 CET-4 听力数据
// 答案：解析 PDF 逐题读图核对；原文：解析 PDF 官方听力原文；题目选项：原题 PDF 文字层（双栏错位已重新配对）
// verified: true
const LISTENING = {
  id: 'cet4-2024-12-s1',
  meta: {
    level: 'CET4',
    year: 2024,
    month: 12,
    set: 1,
    source:
      '原题：2024.12四级真题第1套.pdf；音频：2024年12月四级听力音频第1套.MP3；原文：2024.12英语四级解析第1套.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2024-12-s1-a.mp3', // Section A 0-488.7s
    conv: '/audio/cet4-2024-12-s1-b.mp3', // Section B 488.7-901.8s
    pass: '/audio/cet4-2024-12-s1-c.mp3', // Section C 901.8-1299.1s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2024-12-s1-n1.mp3', // 0-210.1s
        transcript:
          'The City of Fayetteville is making a special effort to recognize its bus drivers ahead of the newly proclaimed Transit Driver Appreciation Day happening Saturday. As part of the event, the city is celebrating its longest-serving driver on the force. That driver is Sherry Christian. Christian has been a driver for 25 years. The Fayetteville native believes driving a school bus allows her to give back to her community. She says that the best part of the job is watching the children who ride her bus grow up. Transit Driver Appreciation Day has been celebrated across the country as far back as 2009. However, this week, the City of Fayetteville issued a proclamation for the day to take place March 18th. Officials said they want bus drivers to know how important they are to Fayetteville, serving almost 1.6 million riders a year.',
        questions: [
          {
            n: 1,
            text: 'What do we learn about Sherry Christian?',
            options: [
              { letter: 'A', text: 'She is making a special effort to be recognized.' },
              { letter: 'B', text: 'She has been living in Fayetteville for 25 years.' },
              { letter: 'C', text: 'She has been driving a school bus ever since 2009.' },
              { letter: 'D', text: 'She is the longest-serving bus driver in Fayetteville.' },
            ],
            answer: 'D',
          },
          {
            n: 2,
            text: 'What did city officials of Fayetteville want bus drivers to be aware of?',
            options: [
              { letter: 'A', text: 'The importance of their service to the city.' },
              { letter: 'B', text: 'The number of riders they serve in the city.' },
              { letter: 'C', text: 'The new proclamation issued early this week.' },
              { letter: 'D', text: 'The significance of the event to take place March 18.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2024-12-s1-n2.mp3', // 210.1-340.5s
        transcript:
          'The Wilton School Board has proposed a 5.99% spending increase. If approved, it would be the largest jump in at least eight budget cycles. The 5.99% request more than doubles the highest previous year-over-year increase in the last eight years, which was 2.99% for the 2021-2022 school year. The biggest driver of the $91.8 million proposed budget remains teacher salaries. Those account for 64% of the total request at $59 million. The $59 million is up from the $56.7 million budgeted for the current school year. There are some factors that could affect the budget moving forward. One of those is total enrollment. The district will have a total enrollment of 3,742 students. Almost all of these students will be in kindergarten through high school, but 66 will be in prekindergarten and other programs. This represents 47 fewer students than the current year. Fewer students mean less federal and state funding.',
        questions: [
          {
            n: 3,
            text: 'What does the news report say the Wilton School Board has done?',
            options: [
              { letter: 'A', text: 'Budgeted $56.7 million for the coming school year.' },
              { letter: 'B', text: 'Requested to raise teachers\' salaries by 3 percent.' },
              { letter: 'C', text: 'Proposed a spending increase by 5.99 percent.' },
              { letter: 'D', text: 'Kept raising funds for at least 8 budget cycles.' },
            ],
            answer: 'C',
          },
          {
            n: 4,
            text: 'What will a decline in the total enrollment lead to?',
            options: [
              { letter: 'A', text: 'Decrease in salaries for school administrators.' },
              { letter: 'B', text: 'Reduction in federal and state funding.' },
              { letter: 'C', text: 'Firing of less qualified faculty members.' },
              { letter: 'D', text: 'Closing down of some less competitive schools.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2024-12-s1-n3.mp3', // 340.5-488.7s
        transcript:
          'A rare thundersnow event has taken place in Scotland. And alarmed locals contacted police, thinking they had heard bombs going off. The phenomenon happens when thunder and lightning mix with a heavy snowstorm—sometimes causing loud claps that can be confused with explosions. One person described it as a loud boom, similar to a plane crash. Another person was woken up in the middle of the night by what he thought was early construction work starting. The noise was powerful enough to shake buildings and set off car alarms. The police were flooded with many calls from the public. And they sent out a message asking people to remain calm. The police assured everyone that it was just thunder and lightning rather than some military exercise. The weather was the coldest it had been for the season, so people were warned to be careful when traveling outside. In particular, dangerous conditions such as icy roads or wet ground could cause difficulty for drivers. The rail service also announced potential disruptions to trains due to the deep snow. Some roads were also closed because of the severe weather.',
        questions: [
          {
            n: 5,
            text: 'What do we learn about thundersnows from the report?',
            options: [
              { letter: 'A', text: 'They often take place in the Scottish highlands.' },
              { letter: 'B', text: 'They usually happen in the middle of the night.' },
              { letter: 'C', text: 'Their damage can be as serious as that of bombs.' },
              { letter: 'D', text: 'Their loud claps can be confused with explosions.' },
            ],
            answer: 'D',
          },
          {
            n: 6,
            text: 'What did the police do when they received the local residents\' phone calls?',
            options: [
              { letter: 'A', text: 'They sent out a message to calm them down.' },
              { letter: 'B', text: 'They promised to stop the construction work.' },
              { letter: 'C', text: 'They told them the military exercise was over.' },
              { letter: 'D', text: 'They set off to inspect the site of the plane crash.' },
            ],
            answer: 'A',
          },
          {
            n: 7,
            text: 'What were people advised to do when traveling outside?',
            options: [
              { letter: 'A', text: 'Keep warm.' },
              { letter: 'B', text: 'Take caution.' },
              { letter: 'C', text: 'Avoid driving.' },
              { letter: 'D', text: 'Use rail service.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2024-12-s1-c1.mp3', // 488.7-692s
        transcript:
          'M: I\'m going to the city centre to buy a new phone today. W: Didn\'t you buy a new phone just two months ago? M: It was three months ago, and I already know what you\'re going to say. You\'re thinking I shouldn\'t replace my phone this soon. W: No, actually, I was wondering how you could possibly afford a new phone. But now that you mention it, I do think getting another phone so soon is wasteful, regardless of the cost. M: Maybe you\'re right, but the thing is, everyone at the office has a nice, expensive phone, and I\'m a little embarrassed by mine. I just got a credit card, so I thought I might as well buy a new phone. W: I don\'t think buying a phone on credit is a good idea. Look, you\'ve only been working for five months now. People understand that you are a recent graduate, and I doubt anyone cares about your phone other than yourself. M: Maybe you\'re right, but the credit card has a very good special offer, where I don\'t pay any interest for six months. I\'ll be able to pay for the phone well before that period is over. W: I still think it\'s a bad idea to use a credit card for something you don\'t need. One of my colleagues bought a lot of things on credit during her first year of work, and it became a bad habit, and she accumulated a lot of debt. M: Well, I can see how that might happen to someone, and I\'m sure she regrets it, but I know it won\'t happen to me.',
        questions: [
          {
            n: 8,
            text: 'What does the woman say she was actually wondering about?',
            options: [
              { letter: 'A', text: 'Why the man is so anxious to buy a new phone.' },
              { letter: 'B', text: 'How the man could possibly afford a new phone.' },
              { letter: 'C', text: 'How the man got into the habit of being wasteful.' },
              { letter: 'D', text: 'Why the man is so fond of using his credit card.' },
            ],
            answer: 'B',
          },
          {
            n: 9,
            text: 'Why is the man a little embarrassed by the phone he\'s using now?',
            options: [
              { letter: 'A', text: 'It is not in fashion any more.' },
              { letter: 'B', text: 'It goes out of order frequently.' },
              { letter: 'C', text: 'It is not as fancy as his colleagues\'.' },
              { letter: 'D', text: 'It lacks functions office work requires.' },
            ],
            answer: 'C',
          },
          {
            n: 10,
            text: 'What does the man say about the credit card he just got?',
            options: [
              { letter: 'A', text: 'It enables him to buy a new phone at a more favorable price.' },
              { letter: 'B', text: 'It is a special offer to recent college graduates working in offices.' },
              { letter: 'C', text: 'It is available to office workers who have a good enough credit score.' },
              { letter: 'D', text: 'It allows him to borrow money without paying interest for six months.' },
            ],
            answer: 'D',
          },
          {
            n: 11,
            text: 'What do we learn about one of the woman\'s colleagues?',
            options: [
              { letter: 'A', text: 'She borrowed money to pay her debt.' },
              { letter: 'B', text: 'She developed a habit of overspending.' },
              { letter: 'C', text: 'She enjoys buying a lot of fancy things.' },
              { letter: 'D', text: 'She regrets ignoring the woman\'s advice.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2024-12-s1-c2.mp3', // 692-901.8s
        transcript:
          'W: Welcome to The Morning Show. Our guest today is a popular blog writer and a major figure in the tiny home community. Welcome, Bob Jones. M: Hi, Mary. W: Hi, Bob. You\'re an advocate of the tiny home movement. A lot of people don\'t know about this movement. Can you tell our audience what it\'s about? M: Well, it\'s mainly about increasing home ownership and protecting the environment. W: Of course, those are great goals. But I\'ve seen your blog, and you write about houses that are as small as 20 square meters. That\'s not a realistic size for families. M: I do talk about very small homes, but there\'s no set definition of a tiny home. And other people include homes that are much larger, say, 60 square meters. And you\'d be surprised many families of four are happy living in houses that are under 30 square meters. W: But I think most of us want spacious homes. The average new home in this area is 150 square meters. And that\'s what people dream of owning. M: Yes, but I think that dream needs to change, considering the cost of housing. W: Housing costs are high, but do people really save that much by having a smaller home? M: Absolutely. Many people who can only afford to rent a large home are able to buy a tiny home. In this city, the average home costs $200,000, and a tiny home costs just $50,000. W: Those are huge savings. M: So, tiny homes might not be for everyone, but they\'re a good option for many. W: You mentioned the environment earlier. How does this benefit the planet? M: Well, if people have smaller homes, they use less land and fewer resources to build them.',
        questions: [
          {
            n: 12,
            text: 'What does the tiny home movement mainly advocate?',
            options: [
              { letter: 'A', text: 'Blog writing and natural resources saving.' },
              { letter: 'B', text: 'Joint efforts to improve the local community.' },
              { letter: 'C', text: 'Audience participation in The Morning Show.' },
              { letter: 'D', text: 'Home ownership and environmental protection.' },
            ],
            answer: 'D',
          },
          {
            n: 13,
            text: 'What does the woman say about houses as small as 20 square meters?',
            options: [
              { letter: 'A', text: 'Not a realistic size for families.' },
              { letter: 'B', text: 'Not welcomed by most Americans.' },
              { letter: 'C', text: 'Only fit for families of four or less.' },
              { letter: 'D', text: 'Only suitable for renting to the poor.' },
            ],
            answer: 'A',
          },
          {
            n: 14,
            text: 'What does the man think about the dream of owning a 150-square-meter house?',
            options: [
              { letter: 'A', text: 'It should be changed.' },
              { letter: 'B', text: 'It isn\'t easy to realize.' },
              { letter: 'C', text: 'It will come true sooner or later.' },
              { letter: 'D', text: 'It doesn\'t appeal to average families.' },
            ],
            answer: 'A',
          },
          {
            n: 15,
            text: 'What does the man say about tiny homes?',
            options: [
              { letter: 'A', text: 'They help to lower housing prices.' },
              { letter: 'B', text: 'They help to save up for larger houses.' },
              { letter: 'C', text: 'They are a good choice for many people.' },
              { letter: 'D', text: 'They are vital to reducing waste worldwide.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2024-12-s1-p1.mp3', // 901.8-1123.5s
        transcript:
          'Kids need time every day to run, jump, stretch and play. These experiences have been shown to build children\'s confidence and pleasure in physical activities, develop their motor skills, and even improve emotional well-being. To begin with, children seem to have a natural desire to overcome challenges and take risks. Taking healthy risks through physical movement builds children\'s confidence and ability to solve problems and persist through frustration. Secondly, movement activities build children\'s big body skills such as coordination and balance, as well as the fine motor skills they need for tasks like writing, tying their shoes, or throwing and catching a ball. Thirdly, according to the American Psychological Association, regular physical activity (and especially outdoor activity) reduces children\'s stress and depression, and improves their ability to focus and learn. Regular exercise can significantly improve self-regulation and decrease disciplinary consequences for negative behavior. Physical activity provides a positive outlet for frustration, anxiety, or anger and can become a healthy coping skill throughout life. Finally, we know that physical activity is important for our physical and mental health, and cultivating the habit of physical activity starts early. Children are more likely to develop a lifelong love of physical activity from frequent positive early experiences. Not every child enjoys competitive sports or playing with balls and that\'s OK. There are plenty of other options such as imaginative play, non-competitive games, and gardening or nature experiences.',
        questions: [
          {
            n: 16,
            text: 'What do children seem to have a natural desire to do?',
            options: [
              { letter: 'A', text: 'Play outdoors and enjoy themselves.' },
              { letter: 'B', text: 'Beat challenges and take risks.' },
              { letter: 'C', text: 'Take care of their well-being.' },
              { letter: 'D', text: 'Grow up strong and healthy.' },
            ],
            answer: 'B',
          },
          {
            n: 17,
            text: 'According to the American Psychological Association, what does regular physical activity do to children?',
            options: [
              { letter: 'A', text: 'Enable them to develop their motor skills.' },
              { letter: 'B', text: 'Help them to conceal their frustration.' },
              { letter: 'C', text: 'Reduce their stress and depression.' },
              { letter: 'D', text: 'Prevent them from feeling lonely.' },
            ],
            answer: 'C',
          },
          {
            n: 18,
            text: 'What does the passage say about cultivating the habit of physical activity?',
            options: [
              { letter: 'A', text: 'It begins early.' },
              { letter: 'B', text: 'It proves demanding.' },
              { letter: 'C', text: 'It calls for lifelong efforts.' },
              { letter: 'D', text: 'It lies in nature experiences.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2024-12-s1-p2.mp3', // 1123.5-1299.1s
        transcript:
          'A new study finds that job seekers are even willing to explore jobs with lower salaries when companies are more diverse. It finds that sharing information about diversity makes job postings more attractive to job seekers, even when pay is lower. To conduct the study, the team partnered with an online job listings platform which emails postings relevant to individuals and their job search criteria. For the course of the 11-week study, the platform emailed job listings to some 180,000 users placed in one of two conditions. In the baseline condition, participants saw emails in the normal format, with no information on diversity; in the diversity condition, participants saw a diversity score for each listing: information about the race, gender, education, and language skills of a company\'s workforce compared to others in the same sector and location. Information was then gathered on whether the email was opened, and which job listings were clicked on by each user. Participants in the diversity condition tended to click on job listings from companies with slightly higher diversity scores than those in the baseline condition: that is, participants seemed to be paying attention to information about diversity, and using this when deciding whether to click on the listing. And the team also found that participants were willing to look at listings with lower salaries if they came from companies with a higher diversity score.',
        questions: [
          {
            n: 19,
            text: 'When are job seekers willing to explore jobs with lower salaries, according to a new study?',
            options: [
              { letter: 'A', text: 'When companies share their information online.' },
              { letter: 'B', text: 'When their job search criteria are met fully.' },
              { letter: 'C', text: 'When companies embrace greater diversity.' },
              { letter: 'D', text: 'When they find job postings visually attractive.' },
            ],
            answer: 'A',
          },
          {
            n: 20,
            text: 'What did participants see in the baseline condition of the study?',
            options: [
              { letter: 'A', text: 'Emails in the normal format.' },
              { letter: 'B', text: 'Major companies in one location.' },
              { letter: 'C', text: 'All companies in the same sector.' },
              { letter: 'D', text: 'Various aspects of a company\'s workforce.' },
            ],
            answer: 'A',
          },
          {
            n: 21,
            text: 'What does the passage say participants seem to be paying attention to?',
            options: [
              { letter: 'A', text: 'Job security.' },
              { letter: 'B', text: 'Potential pay raises.' },
              { letter: 'C', text: 'Minimum base salary.' },
              { letter: 'D', text: 'Information about diversity.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2024-12-s1-p3.mp3', // 1299.1-1489s
        transcript:
          'A new study from Oregon State University found that dogs tend to match their behavior with the children in their family. The findings are important because there is a growing body of evidence that dogs can help children in many ways. These include helping with social development, increasing physical activity, managing anxiety or serving as a source of attachment in the face of changing family structures. Yet, very little research has focused on how dogs perceive and socially engage with children. "The great news is that this study suggests dogs are paying a lot of attention to the kids that they live with," said Monique Udell, the lead author of the study. "One interesting thing we have observed is that dogs are matching children\'s behavior, but less frequently than what we have seen between dogs and adults. This suggests that while dogs may view children as social companions, there are also some differences that we need to understand better." While research has found dogs can have a lot of positive impacts on a child\'s life, there are also risks associated with the dog-child relationship. For example, other studies have found dogs are more likely to bite children versus adults. "We still have a lot to learn about the dog-child relationship," Udell said. "But research does show that kids are very capable of training dogs."',
        questions: [
          {
            n: 22,
            text: 'What does the passage say about the findings of a new study from Oregon State University?',
            options: [
              { letter: 'A', text: 'Positive.' },
              { letter: 'B', text: 'Original.' },
              { letter: 'C', text: 'Important.' },
              { letter: 'D', text: 'Surprising.' },
            ],
            answer: 'C',
          },
          {
            n: 23,
            text: 'What does a growing body of evidence show according to the passage?',
            options: [
              { letter: 'A', text: 'Dogs match their behavior with kids as much as with adults.' },
              { letter: 'B', text: 'Kids and adults alike find in dogs a source of attachment.' },
              { letter: 'C', text: 'Kids\' attitude to dogs is influenced by adults.' },
              { letter: 'D', text: 'Dogs can help kids in many ways.' },
            ],
            answer: 'D',
          },
          {
            n: 24,
            text: 'What did Monique Udell say their study suggests?',
            options: [
              { letter: 'A', text: 'Dogs pay much attention to the kids they live with.' },
              { letter: 'B', text: 'Dogs view both adults and kids as social companions.' },
              { letter: 'C', text: 'Kids differ from adults in their behavior towards dogs.' },
              { letter: 'D', text: 'Kids need to be aware of the risks in playing with dogs.' },
            ],
            answer: 'A',
          },
          {
            n: 25,
            text: 'What does research show kids are very capable of doing?',
            options: [
              { letter: 'A', text: 'Understanding dogs.' },
              { letter: 'B', text: 'Training dogs.' },
              { letter: 'C', text: 'Taking care of dogs.' },
              { letter: 'D', text: 'Associating with dogs.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自听力原文，供校验与荧光笔高亮使用）
  answerQuotes: {
    1: ['the city is celebrating its longest-serving driver on the force'],
    2: ['Officials said they want bus drivers to know how important they are to Fayetteville, serving almost 1.6 million riders a year.'],
    3: ['The Wilton School Board has proposed a 5.99% spending increase.'],
    4: ['Fewer students mean less federal and state funding.'],
    5: ['sometimes causing loud claps that can be confused with explosions.'],
    6: ['And they sent out a message asking people to remain calm.'],
    7: ['so people were warned to be careful when traveling outside.'],
    8: ['I was wondering how you could possibly afford a new phone.'],
    9: ['everyone at the office has a nice, expensive phone, and I\'m a little embarrassed by mine.'],
    10: ['the credit card has a very good special offer, where I don\'t pay any interest for six months.'],
    11: ['One of my colleagues bought a lot of things on credit during her first year of work, and it became a bad habit'],
    12: ['it\'s mainly about increasing home ownership and protecting the environment.'],
    13: ['you write about houses that are as small as 20 square meters. That\'s not a realistic size for families.'],
    14: ['but I think that dream needs to change, considering the cost of housing.'],
    15: ['So, tiny homes might not be for everyone, but they\'re a good option for many.'],
    16: ['children seem to have a natural desire to overcome challenges and take risks.'],
    17: ['regular physical activity (and especially outdoor activity) reduces children\'s stress and depression'],
    18: ['cultivating the habit of physical activity starts early.'],
    19: ['job seekers are even willing to explore jobs with lower salaries when companies are more diverse.'],
    20: ['In the baseline condition, participants saw emails in the normal format, with no information on diversity'],
    21: ['participants seemed to be paying attention to information about diversity, and using this when deciding whether to click on the listing.'],
    22: ['The findings are important because there is a growing body of evidence that dogs can help children in many ways.'],
    23: ['there is a growing body of evidence that dogs can help children in many ways.'],
    24: ['this study suggests dogs are paying a lot of attention to the kids that they live with'],
    25: ['But research does show that kids are very capable of training dogs.'],
  },
}

export default LISTENING
