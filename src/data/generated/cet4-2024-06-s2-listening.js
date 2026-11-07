// 2024年6月第二套 CET-4 听力数据
// 答案：解析 PDF 逐题读图核对；原文：解析 PDF 官方听力原文（扫描页读图）；题目选项：原题 PDF 文字层（双栏错位已重新配对）
// verified: true
const LISTENING = {
  id: 'cet4-2024-06-s2',
  meta: {
    level: 'CET4',
    year: 2024,
    month: 6,
    set: 2,
    source:
      '原题：大学英语四级考试2024年6月真题【第二套】.pdf；音频：2024年6月四级真题（第2套）.mp3；原文：2024年6月四级真题解析【第二套】.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2024-06-s2-a.mp3', // Section A 0-417.2s
    conv: '/audio/cet4-2024-06-s2-b.mp3', // Section B 417.2-847.3s
    pass: '/audio/cet4-2024-06-s2-c.mp3', // Section C 847.3-1412.8s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2024-06-s2-n1.mp3', // 0-151.6s
        transcript:
          'A JetBlue Airlines flight from West Palm Beach to New York City was forced to turn around and land Sunday morning after the plane struck a bird. The flight from Palm Beach International Airport to LaGuardia Airport turned around just minutes after takeoff following the strike. No injuries were reported on the plane, and the flight took off once again 7.5 hours after the first attempt. "It was like a split second of panic...that resulted in this nervous reaction on the plane," said passenger Brian Healy. "There was total quiet, and then there was relief when the plane came to a stop." An email from JetBlue read, "Our team is working to accommodate customers on later flights."',
        questions: [
          {
            n: 1,
            text: 'What do we learn about the JetBlue Airlines flight from the news report?',
            options: [
              { letter: 'A', text: 'It hit a bird shortly after takeoff.' },
              { letter: 'B', text: 'Its crew members went on strike.' },
              { letter: 'C', text: 'It narrowly escaped a plane crash when turning around.' },
              { letter: 'D', text: 'Its captain got slightly injured during the forced landing.' },
            ],
            answer: 'A',
          },
          {
            n: 2,
            text: 'How did the passengers feel when the plane came to a stop, according to Brian Healy?',
            options: [
              { letter: 'A', text: 'Panic.' },
              { letter: 'B', text: 'Nervous.' },
              { letter: 'C', text: 'Relieved.' },
              { letter: 'D', text: 'Contented.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2024-06-s2-n2.mp3', // 151.6-268.5s
        transcript:
          'A deadly snake, which had finally been tracked down after escaping a zoo, has slipped away for the second time. The poisonous snake forced the closure of the attraction last week when staff noticed the disappearance. After six days of desperate searching, he was eventually found and placed in a supposedly secure area. But it seems the animal is no fan of the zoo, because yet again he is out on the loose. The snake is a relative newcomer to the zoo but has already been frustrating its staff. The staff believe he squeezed himself out of a gap located around new energy-saving bulbs installed inside the snake house. He was only found the first time around because staff brought in a special machine to trace him inside a wall opening. This kind of snake is one of the most deadly and poisonous in the wild, and they can range from 3 to 5 meters in length.',
        questions: [
          {
            n: 3,
            text: 'What do we learn about the deadly snake from the news report?',
            options: [
              { letter: 'A', text: 'He is now kept in a secure area.' },
              { letter: 'B', text: 'He has escaped the zoo once again.' },
              { letter: 'C', text: 'He has been caught a second time.' },
              { letter: 'D', text: 'He finally disappeared six days ago.' },
            ],
            answer: 'B',
          },
          {
            n: 4,
            text: 'How have the zoo staff been feeling about the snake?',
            options: [
              { letter: 'A', text: 'Squeezed.' },
              { letter: 'B', text: 'Threatened.' },
              { letter: 'C', text: 'Disappointed.' },
              { letter: 'D', text: 'Frustrated.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2024-06-s2-n3.mp3', // 268.5-417.2s
        transcript:
          'Electric bikes have been the craze in downtown Jacksonville since they were first introduced earlier this month as a one-year pilot program. But they\'re leading to safety concerns, mainly at night when some riders don\'t follow the rules of the road. As the night goes on, groups of riders are often seen traveling in just about every direction in the streets and on pedestrian paths. That is increasing the probability of dangerous accidents. Electric bike riders have to follow all the same rules as you would if you were in an automobile. That means no running red lights or traveling in the opposite direction of traffic on one-way streets. City Council Member Anna Cumber was instrumental in introducing the electric bikes to Jacksonville as a way to bring new life into downtown. And she\'s aware of the concerns. Cumber said, "People can have fun, but both drivers and riders are responsible for paying attention while on the road. And never assume the driver is going to stop or see you."',
        questions: [
          {
            n: 5,
            text: 'What do we learn from the news report about the introduction of electric bikes into Jacksonville?',
            options: [
              { letter: 'A', text: 'It is condemned as a crazy idea.' },
              { letter: 'B', text: 'It is enriching the city\'s night life.' },
              { letter: 'C', text: 'It is questioned by local residents.' },
              { letter: 'D', text: 'It is giving rise to safety concerns.' },
            ],
            answer: 'D',
          },
          {
            n: 6,
            text: 'What are electric bike riders supposed to do?',
            options: [
              { letter: 'A', text: 'Avoid entering one-way streets.' },
              { letter: 'B', text: 'Ensure the safety of pedestrians.' },
              { letter: 'C', text: 'Follow all the traffic rules drivers do.' },
              { letter: 'D', text: 'Give way to automobiles at all times.' },
            ],
            answer: 'C',
          },
          {
            n: 7,
            text: 'Why did City Council member Anna Cumber advocate the introduction of electric bikes into Jacksonville?',
            options: [
              { letter: 'A', text: 'To ease the city\'s busy traffic.' },
              { letter: 'B', text: 'To bring new life into the city.' },
              { letter: 'C', text: 'To add a new means of transport.' },
              { letter: 'D', text: 'To reduce the city\'s air pollution.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2024-06-s2-c1.mp3', // 417.2-643.6s
        transcript:
          'M: What\'s the best way to teach children how to save and spend their money? W: You should make money a regular topic of discussion. It\'s best to start young, so it\'s instinctive rather than a scary subject. M: In our family, we talk openly about things like the budget for holidays, how taxes reduce your income, and how to shop around for the best deals. W: Indeed. It\'s also essential to make money real for children through practical examples. Working out how much we save using discount pizza coupons, for example, is much more relevant than abstract sums. M: We also give our kids pocket money, and the amount they get is linked to chores, such as putting the bins out and emptying the dishwasher. W: We do that too, and it\'s paid according to their age. Two pounds for each year so they can see some progression. M: Teaching them to save is important. We opened a savings account when they were young. After birthdays and Christmas, they would go to the branch and deposit their gift money. W: Oh, I hadn\'t considered doing that. In our house, we have transparent money boxes for them to put small change in, so they can see their savings grow. M: When the time is right, I\'ll start talking to our children about investing and show them how the money saved for their further education has grown. W: I am always talking to my elder daughter about the importance of saving into a pension. She\'s just started a part-time job and was thinking of not contributing to her pension. Luckily, I managed to persuade her otherwise. M: Yes, it\'s such an important lesson to learn.',
        questions: [
          {
            n: 8,
            text: 'What should we do with the topic of money, according to the woman?',
            options: [
              { letter: 'A', text: 'Take it seriously.' },
              { letter: 'B', text: 'Discuss it regularly.' },
              { letter: 'C', text: 'Make it sound scary.' },
              { letter: 'D', text: 'Talk about it openly.' },
            ],
            answer: 'B',
          },
          {
            n: 9,
            text: 'How does the woman say money can be made real for children?',
            options: [
              { letter: 'A', text: 'By shopping around for the best deals.' },
              { letter: 'B', text: 'By making abstract sums relevant.' },
              { letter: 'C', text: 'By citing concrete examples.' },
              { letter: 'D', text: 'By visiting discount stores.' },
            ],
            answer: 'C',
          },
          {
            n: 10,
            text: 'What is the common practice between the man and the woman?',
            options: [
              { letter: 'A', text: 'Paying their kids to help with housework.' },
              { letter: 'B', text: 'Setting kids a good example by sharing chores.' },
              { letter: 'C', text: 'Giving kids pocket money according to their needs.' },
              { letter: 'D', text: 'Urging kids to deposit some of their gift money.' },
            ],
            answer: 'A',
          },
          {
            n: 11,
            text: 'What is the woman always talking about to her elder daughter?',
            options: [
              { letter: 'A', text: 'The importance of cutting down family expenses.' },
              { letter: 'B', text: 'The need to learn important lessons from her elders.' },
              { letter: 'C', text: 'The delight in seeing their savings grow.' },
              { letter: 'D', text: 'The necessity of saving into a pension.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2024-06-s2-c2.mp3', // 643.6-847.3s
        transcript:
          'W: Welcome to Books in Review. Our guest today is John Banks, the author of the best selling new book, Rewarding Success. M: Glad to be here, Jane. W: Your book has sold 2 million copies, but before we discuss why it\'s getting so much attention, let\'s talk about your background. You\'re an economist and spent two decades teaching at universities? M: I spent 25 years as a professor, actually. And then, for the last 10 years, I\'ve worked as a political consultant, advising politicians at the national level about problems in our country. W: You discuss three of those problems in the book, improving public education, reducing our nation\'s healthcare burden, and increasing personal savings. But your ideas about education are the most controversial. M: Absolutely. A lot of people think I\'m trying to punish students who aren\'t doing well, when actually my goal is to give all students more incentive to succeed. W: I\'m not sure I agree with you. Your proposal to pay cash rewards to students who get good grades is a particular problem. What about students who don\'t get good grades? It seems like you\'re blaming them for not succeeding, when poor performance in school isn\'t a child\'s fault. M: But my proposal is not just to reward students with good grades, but also students who show improvements. W: Okay, another criticism of the plan is the cash rewards themselves. Where will the money come from? M: If students do better, we\'ll spend less on schooling. So, in the end, the rewards will pay for themselves. W: What about now? How will we fund the rewards in the meantime? M: Well, by increasing taxes or moving money from other areas of the budget into education.',
        questions: [
          {
            n: 12,
            text: 'What do we learn about the man?',
            options: [
              { letter: 'A', text: 'He is a successful businessman.' },
              { letter: 'B', text: 'He reviews books on political affairs.' },
              { letter: 'C', text: 'He has published a new bestseller.' },
              { letter: 'D', text: 'He has worked in several banks.' },
            ],
            answer: 'C',
          },
          {
            n: 13,
            text: 'What does the woman say is the most controversial?',
            options: [
              { letter: 'A', text: 'The man\'s ideas about education.' },
              { letter: 'B', text: 'The man\'s academic background.' },
              { letter: 'C', text: 'The man\'s attempts at drawing public attention.' },
              { letter: 'D', text: 'The man\'s proposals to solve economic problems.' },
            ],
            answer: 'A',
          },
          {
            n: 14,
            text: 'What does the man say is his real goal?',
            options: [
              { letter: 'A', text: 'To reduce students\' financial burden.' },
              { letter: 'B', text: 'To motivate all students to be successful.' },
              { letter: 'C', text: 'To give students incentive to excel in economics.' },
              { letter: 'D', text: 'To provide remedies for students\' poor performance.' },
            ],
            answer: 'B',
          },
          {
            n: 15,
            text: 'What will be one option for funding the proposed rewards according to the man?',
            options: [
              { letter: 'A', text: 'Improving school budgeting.' },
              { letter: 'B', text: 'Increasing tuition fees.' },
              { letter: 'C', text: 'Seeking donations.' },
              { letter: 'D', text: 'Raising taxes.' },
            ],
            answer: 'D',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2024-06-s2-p1.mp3', // 847.3-1046.8s
        transcript:
          'I met three different people today, and each time, when I asked, "How are you?" The reply was exactly the same. "I\'m busy". Honestly, I hear the same answer from the vast majority of people I meet. So I started to think, "Guess what? Everybody\'s busy!" I\'m busy, you\'re busy, everybody\'s busy. So you being busy doesn\'t make me sympathetic at all. Because "busy" is the state of the world. So I\'m launching a campaign to stop people complaining about being "busy". It may sound harsh, but the truth is, nobody cares. In a busy world, "being busy" doesn\'t stand out, nor does it mean productive, creative, accomplished, or professional. Steve Maraboli once said, "When someone tells you they are too \'busy\', it\'s not a reflection of their schedule; it\'s a reflection of YOUR spot on their schedule." Donna Lynn Hope has also remarked, "Busy doesn\'t mean better. I\'ve never envied a busy person—the one who likes to point out their busy lives to others." The reality is, nobody is too busy—it\'s just about priorities. So the next time someone asks you how you are, maybe respond differently. In my experience, the "I\'m busy" response is really covering up the fact that they\'re not actually accomplishing their real purpose. And "being busy" is the lie they tell themselves about why they can\'t achieve it.',
        questions: [
          {
            n: 16,
            text: 'Why is the speaker launching a campaign?',
            options: [
              { letter: 'A', text: 'To show his sympathy towards people always being busy.' },
              { letter: 'B', text: 'To prevent people from complaining about being "busy".' },
              { letter: 'C', text: 'To call on busy people to take care of themselves.' },
              { letter: 'D', text: 'To help busy people to sort out their priorities.' },
            ],
            answer: 'B',
          },
          {
            n: 17,
            text: 'What does the speaker advise us to do next time someone asks how we are?',
            options: [
              { letter: 'A', text: 'Avoid saying we are busy.' },
              { letter: 'B', text: 'Reflect on their true purpose.' },
              { letter: 'C', text: 'Describe our schedule in detail.' },
              { letter: 'D', text: 'Respond as most busy people do.' },
            ],
            answer: 'A',
          },
          {
            n: 18,
            text: 'Why do many people make the "I\'m busy" response according to the speaker?',
            options: [
              { letter: 'A', text: 'To show their achievements resulted from great efforts.' },
              { letter: 'B', text: 'To prove they stand out as accomplished professionals.' },
              { letter: 'C', text: 'To cover up their failure to achieve some purpose.' },
              { letter: 'D', text: 'To tell others a complete lie about their inability.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2024-06-s2-p2.mp3', // 1046.8-1225.5s
        transcript:
          'More and more people are taking up extreme sports, like snowboarding, skateboarding, mountain biking, and many more. Why are these sports becoming so popular? One thing that extreme sports do better than perhaps anything else is to help you stop being afraid. It may sound strange to say that their main function is to reduce fear. But after a time, your fear response to other things in life will be dramatically reduced. After all, if you can jump out of a plane or off a bridge, then you can face anything else easily. When doing extreme sports, you have to become more focused. You\'ll be pushed to your limits, and if you aren\'t focused you\'ll make dangerous mistakes. Learning to be this focused while enjoying extreme sports will help you to be focused at work, keeping you more productive and ultimately more successful. It\'s great to stay fit and healthy, but standard exercise routines and sports only work the same muscles repeatedly. With extreme sports, you\'ll be working entirely different muscles, and that means you get an all-over workout. Extreme sports also burn a lot more calories than other sports. Skateboarding, for example, can burn as many as 500 calories per hour. Basketball burns around 300 in the same time. When you find that you can overcome the physical or mental challenges involved in extreme sports, you\'ll feel superhuman and your self-confidence will be at an all-time high.',
        questions: [
          {
            n: 19,
            text: 'What may sound strange to say about extreme sports?',
            options: [
              { letter: 'A', text: 'They will help one reduce fear.' },
              { letter: 'B', text: 'They should become so popular.' },
              { letter: 'C', text: 'They will be less challenging after a time.' },
              { letter: 'D', text: 'They should cover so many different types.' },
            ],
            answer: 'A',
          },
          {
            n: 20,
            text: 'Why should one be highly focused when doing extreme sports?',
            options: [
              { letter: 'A', text: 'To break one\'s ultimate limits.' },
              { letter: 'B', text: 'To stop being extremely afraid.' },
              { letter: 'C', text: 'To avoid dangerous mistakes.' },
              { letter: 'D', text: 'To enjoy the sports to the full.' },
            ],
            answer: 'C',
          },
          {
            n: 21,
            text: 'How can extreme sports benefit us more than standard exercise routines and sports?',
            options: [
              { letter: 'A', text: 'By allowing our motivation to be at an all-time high.' },
              { letter: 'B', text: 'By stopping us hurting the same muscles repeatedly.' },
              { letter: 'C', text: 'By burning as many as 300 calories per hour.' },
              { letter: 'D', text: 'By enabling us to get an all-over workout.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2024-06-s2-p3.mp3', // 1225.5-1412.8s
        transcript:
          'Most of us have been in teams or organizations where we\'ve had conflict with the people that we\'re working with around the ideas or decisions that we\'re discussing. Conflict is natural. We all bring different life and work experiences to the table. We all have different personality preferences and tendencies. We\'re not all going to have the same ideas on how to approach policies, programs or problems. But too often we get caught in this place where conflict is perceived to be negative—something we want to avoid so that we can maintain the harmony of our workplace. This could be because some people want to avoid conflict at all costs, after all they still have to work together. But this kind of artificial harmony isn\'t the answer. Productive conflict is a vital part of teams and organizations that want to push forward and do more. Without conflict, we\'re often stuck in this artificial harmony where people don\'t express potentially innovative ideas for fear that they may start conflict with others. But if you\'re in a place where you have a basis of trust, conflict can be extremely productive. It can lead to increased innovation and greater trust on teams. It may be an uncomfortable process, but good leaders and healthy teams recognize that productive and healthy conflict is an important part of how they function.',
        questions: [
          {
            n: 22,
            text: 'What does the passage say about conflict in organizations?',
            options: [
              { letter: 'A', text: 'It is natural.' },
              { letter: 'B', text: 'It is instrumental.' },
              { letter: 'C', text: 'It is personal.' },
              { letter: 'D', text: 'It is vital.' },
            ],
            answer: 'A',
          },
          {
            n: 23,
            text: 'Why do some people want to avoid conflict at all costs?',
            options: [
              { letter: 'A', text: 'To guard against being perceived negatively.' },
              { letter: 'B', text: 'To prevent themselves from being isolated.' },
              { letter: 'C', text: 'To conceal personality preferences.' },
              { letter: 'D', text: 'To maintain workplace harmony.' },
            ],
            answer: 'D',
          },
          {
            n: 24,
            text: 'Why is productive conflict important for teams and organizations?',
            options: [
              { letter: 'A', text: 'It helps to enhance team spirit.' },
              { letter: 'B', text: 'It stimulates innovative ideas.' },
              { letter: 'C', text: 'It helps to resolve problems.' },
              { letter: 'D', text: 'It facilitates policy-making.' },
            ],
            answer: 'B',
          },
          {
            n: 25,
            text: 'What does productive conflict need as a basis?',
            options: [
              { letter: 'A', text: 'An innovative mind.' },
              { letter: 'B', text: 'Corporate culture.' },
              { letter: 'C', text: 'Mutual trust.' },
              { letter: 'D', text: 'A healthy mentality.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自听力原文，供校验与荧光笔高亮使用）
  answerQuotes: {
    1: ['was forced to turn around and land Sunday morning after the plane struck a bird'],
    2: ['There was total quiet, and then there was relief when the plane came to a stop.'],
    3: ['because yet again he is out on the loose.'],
    4: ['has already been frustrating its staff.'],
    5: ['But they\'re leading to safety concerns, mainly at night'],
    6: ['Electric bike riders have to follow all the same rules as you would if you were in an automobile.'],
    7: ['as a way to bring new life into downtown.'],
    8: ['You should make money a regular topic of discussion.'],
    9: ['It\'s also essential to make money real for children through practical examples.'],
    10: ['We also give our kids pocket money, and the amount they get is linked to chores'],
    11: ['I am always talking to my elder daughter about the importance of saving into a pension.'],
    12: ['the author of the best selling new book, Rewarding Success.'],
    13: ['But your ideas about education are the most controversial.'],
    14: ['my goal is to give all students more incentive to succeed.'],
    15: ['by increasing taxes or moving money from other areas of the budget into education.'],
    16: ['So I\'m launching a campaign to stop people complaining about being "busy".'],
    17: ['So the next time someone asks you how you are, maybe respond differently.'],
    18: ['the "I\'m busy" response is really covering up the fact that they\'re not actually accomplishing their real purpose.'],
    19: ['It may sound strange to say that their main function is to reduce fear.'],
    20: ['if you aren\'t focused you\'ll make dangerous mistakes.'],
    21: ['With extreme sports, you\'ll be working entirely different muscles, and that means you get an all-over workout.'],
    22: ['Conflict is natural.'],
    23: ['something we want to avoid so that we can maintain the harmony of our workplace.'],
    24: ['Productive conflict is a vital part of teams and organizations that want to push forward and do more.'],
    25: ['if you\'re in a place where you have a basis of trust, conflict can be extremely productive.'],
  },
}

export default LISTENING
