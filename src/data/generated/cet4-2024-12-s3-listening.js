// 2024年12月 第3套 CET-4 听力数据（复用第2套听力内容）
// 官方本套听力与第2套一致，仅选项顺序不同；本题库沿用第2套数据与音频
// verified: true
const LISTENING = {
  id: 'cet4-2024-12-s3',
  meta: {
    level: 'CET4',
    year: 2024,
    month: 12,
    set: 3,
    source: '原题：2024.12四级真题第2套.pdf；音频：复用第2套（原官方音频损坏，已替换为 CET 通同批次音频）；原文：2024.12英语四级解析第2套.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    note: '官方本套听力与第2套一致，仅选项顺序不同；本题库沿用第2套数据与音频（第2套音频已由 CET 通同批次音频替换）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2024-12-s2-a.mp3',
    conv: '/audio/cet4-2024-12-s2-b.mp3',
    pass: '/audio/cet4-2024-12-s2-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2024-12-s2-n1.mp3',
        transcript: "Across the U.S., families are looking to the winter with fear as energy costs soar. A number of factors are creating a bad situation: Global energy consumption is up, but supplies have been reduced. The Energy Department projects heating bills will jump 28% this winter for those who rely on natural gas. Natural gas is used by nearly half of U.S. households for heat. Heating oil is projected to be 27% higher and electricity 10% higher. That comes against inflation rates that accelerated last month with consumer prices growing 6.6%. That's the fastest pace in four decades. The pain will be especially acute in parts of the country that heavily rely on heating oil to keep homes warm. It's projected to cost more than $2,300 to heat a typical home with heating oil this winter. Last month, the federal government added $1 billion in funding to Low Income Home Energy Assistance Program, bringing the total to $4.8 billion. But that represents a reduction from last year's energy assistance package of over $8 billion.",
        questions: [
          {
            n: 1,
            text: 'Why are families across the U.S. looking to this winter with fear?',
            options: [
              {
                letter: 'A',
                text: 'They will see a 27% higher price to buy natural gas.'
              },
              {
                letter: 'B',
                text: 'They will have insufficient heating oil to keep warm.'
              },
              {
                letter: 'C',
                text: 'They will have a costly bill to pay to heat their homes.'
              },
              {
                letter: 'D',
                text: 'They will experience the coldest winter in four decades.'
              }
            ],
            answer: 'C'
          },
          {
            n: 2,
            text: 'What did the federal government do last month?',
            options: [
              {
                letter: 'A',
                text: 'Provided additional funding to Low Income Home Energy Assistance Program.'
              },
              {
                letter: 'B',
                text: 'Assured U.S. citizens of an increase in energy supplies by the end of this year.'
              },
              {
                letter: 'C',
                text: 'Predicted a 10% jump in heating bills for most U.S. households this winter.'
              },
              {
                letter: 'D',
                text: "Decided on this year's energy assistance package of $8 billion in total."
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2024-12-s2-n2.mp3',
        transcript: "Many Americans think they make healthy food choices, but they may be viewing their diet too optimistically. That's the main finding of a new study by researchers at the U.S. Department of Agriculture in Stoneville, Mississippi. The study aimed to identify disconnects between how healthily Americans think they eat and how they actually do. For the study, the researchers asked participants to rate their diet as excellent, very good, good, fair or poor. Folks also completed 24-hour food questionnaires. Then, the researchers compared answers to see how well responses to the two exercises matched up. Of more than 9,700 people, roughly 85 percent were off base when asked to rate the quality of their diet, and almost all overestimated how healthy it was. Those who rated their diet as poor tended to be far more accurate. Their rating matched that of the researchers more than nine times out of ten.",
        questions: [
          {
            n: 3,
            text: 'What is the main finding of a new study about many Americans?',
            options: [
              {
                letter: 'A',
                text: 'They care less about their diet now than before.'
              },
              {
                letter: 'B',
                text: 'They may lack adequate knowledge of healthy food.'
              },
              {
                letter: 'C',
                text: 'They may hold too optimistic a view about their diet.'
              },
              {
                letter: 'D',
                text: 'They pay insufficient attention to their choice of food.'
              }
            ],
            answer: 'C'
          },
          {
            n: 4,
            text: 'Who tended to rate their diet more accurately in the survey?',
            options: [
              {
                letter: 'A',
                text: 'Those who finished 24-hour food questionnaires.'
              },
              {
                letter: 'B',
                text: 'Those who fully understood the rating scale.'
              },
              {
                letter: 'C',
                text: 'Those who cared about food quality.'
              },
              {
                letter: 'D',
                text: 'Those who rated their diet as poor.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2024-12-s2-n3.mp3',
        transcript: 'It was a heartwarming moment that dozens of Indian rescuers rallied together to use a crane in order to save an elephant trapped at the bottom of a 20-foot well. The massive rescue effort took place last week close to an army camp. The elephant wandered out of the jungle and fell into the well. The army officers heard a noise coming from the well and realized an elephant was trapped deep inside. The officers then threw in some food for the creature and called the local forest department for help. Video of the rescue operation shows how the team used a crane to lift up the huge animal out of the well and onto the back of a truck. It was then taken to an examining room for evaluation of any injuries. The elephant was kept under close supervision for a few days before it was successfully released back into the wild.',
        questions: [
          {
            n: 5,
            text: 'What does the report say dozens of Indians did last week?',
            options: [
              {
                letter: 'A',
                text: 'They experienced a heartbreaking moment.'
              },
              {
                letter: 'B',
                text: 'They gathered together to rescue an elephant.'
              },
              {
                letter: 'C',
                text: 'They heard a noise from the bottom of a well.'
              },
              {
                letter: 'D',
                text: 'They found an elephant wandering around a well.'
              }
            ],
            answer: 'B'
          },
          {
            n: 6,
            text: 'Why did the army officers call the local forest department?',
            options: [
              {
                letter: 'A',
                text: 'To borrow their crane.'
              },
              {
                letter: 'B',
                text: 'To ask them for help.'
              },
              {
                letter: 'C',
                text: 'To report the strange noise.'
              },
              {
                letter: 'D',
                text: 'To get food for the elephant.'
              }
            ],
            answer: 'B'
          },
          {
            n: 7,
            text: 'What does the news report say happened finally?',
            options: [
              {
                letter: 'A',
                text: 'The elephant was able to return to the jungle.'
              },
              {
                letter: 'B',
                text: 'The army officers were examined for injuries.'
              },
              {
                letter: 'C',
                text: 'The army officers were rewarded for their rescue efforts.'
              },
              {
                letter: 'D',
                text: 'The elephant was given medical treatment for many days.'
              }
            ],
            answer: 'A'
          }
        ]
      }
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2024-12-s2-c1.mp3',
        transcript: "M: I need to stop at the bank to withdraw some cash. W: Why not just pay with your phone? M: Well, actually, I've stopped using online payments for the past three months now. W: Stopped paying online? Oh, you must be worried that online payments aren't secure. M: No, they are safe. But paying online is too convenient and I spent too much money on things I didn't need. W: Oh, impulse purchases can be an issue for me, too. I've definitely bought clothes and shoes I didn't need because they were on sale, and paying with my phone was so easy. But I've found that if I review my spending every night, that keeps me from spending too much. M: I tried that strategy, but it just didn't work, because I'd be busy studying all day. Then, when I was tired and hungry, I'd use my phone to order food, like burgers and other junk, instead of going to the canteen, where I could get a healthier meal for half the price. W: Well, what do you do now then? It seems like you'd have the same problems with cash. M: I go to the bank once a week, and the rest of the time I keep my bank card at home, so I can't get more cash out. And I also have a notebook where I record my expenses. W: But what prevents you from just going to the bank and getting more money, if you want to buy something? M: The first month I did withdraw extra cash twice, but I felt guilty about it. And after that I refused to spend more than what I had budgeted, and by now it's just a habit.",
        questions: [
          {
            n: 8,
            text: 'Why has the man stopped paying online for the last three months?',
            options: [
              {
                letter: 'A',
                text: 'He found it had caused him much inconvenience.'
              },
              {
                letter: 'B',
                text: 'It led him to spend more money than necessary.'
              },
              {
                letter: 'C',
                text: 'It was much less secure than paying with cash.'
              },
              {
                letter: 'D',
                text: 'He wanted to be less dependent on his phone.'
              }
            ],
            answer: 'B'
          },
          {
            n: 9,
            text: 'What problem does the woman say she may also have?',
            options: [
              {
                letter: 'A',
                text: 'Living beyond her means.'
              },
              {
                letter: 'B',
                text: 'Lack of budgeting strategies.'
              },
              {
                letter: 'C',
                text: 'Fashion addiction.'
              },
              {
                letter: 'D',
                text: 'Impulse purchasing.'
              }
            ],
            answer: 'D'
          },
          {
            n: 10,
            text: 'What does the man say he could do at the canteen?',
            options: [
              {
                letter: 'A',
                text: 'Eat healthier food with less money.'
              },
              {
                letter: 'B',
                text: 'Order food like burgers and chips.'
              },
              {
                letter: 'C',
                text: 'Avoid getting addicted to junk food.'
              },
              {
                letter: 'D',
                text: 'Pay either in cash or with his phone.'
              }
            ],
            answer: 'A'
          },
          {
            n: 11,
            text: 'What is now just a habit for the man?',
            options: [
              {
                letter: 'A',
                text: 'Making a shopping list.'
              },
              {
                letter: 'B',
                text: 'Sticking to his budget.'
              },
              {
                letter: 'C',
                text: 'Withdrawing cash only once a month.'
              },
              {
                letter: 'D',
                text: 'Thinking twice before buying something.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2024-12-s2-c2.mp3',
        transcript: "M: Please hear me out. I don't want our son to spend his afternoons doing something he hates, even if it might prepare him for the future. What about getting him to join a sport, like soccer? From all the running and training, he could become quite athletic. Not to mention the great physical benefits from exercising outside every day. W: Um, I don't think he should be doing something so challenging with all his breathing issues. What about playing an indoor sport, like badminton? The environment is easier to control, and he can still get a good workout, in addition to improving his hand-eye coordination. Besides, I could teach him some of the basics from my time as a badminton player. M: Um, I'm thinking team sports should be the way to go. There's nothing like playing as part of a unit to accomplish a goal like winning a game or even a championship. He could try basketball since many of the courts are indoors now and it's a sport that could help him understand team spirit while cooperating with others. Maybe he could even join the school basketball team when he's ready. W: Oh, oh, what about volleyball? It's a team sport and they often have mixed-gender teams so he could socialize with both girls and boys. It's not as popular as some sports, which means he has better odds of possibly getting an athletic scholarship in the future. I also believe you were a beach volleyball athlete yourself not so long ago. M: As I've said many times before, beach volleyball and indoor volleyball are completely different.",
        questions: [
          {
            n: 12,
            text: 'Why is the woman opposed to their son joining a sport like soccer?',
            options: [
              {
                letter: 'A',
                text: 'He does not enjoy any ball games.'
              },
              {
                letter: 'B',
                text: 'He has to prepare for the future.'
              },
              {
                letter: 'C',
                text: 'He has breathing problems.'
              },
              {
                letter: 'D',
                text: 'He is not up to anything challenging.'
              }
            ],
            answer: 'C'
          },
          {
            n: 13,
            text: 'What does the man suggest their son try in order to understand team spirit?',
            options: [
              {
                letter: 'A',
                text: 'Soccer.'
              },
              {
                letter: 'B',
                text: 'Badminton.'
              },
              {
                letter: 'C',
                text: 'Volleyball.'
              },
              {
                letter: 'D',
                text: 'Basketball.'
              }
            ],
            answer: 'D'
          },
          {
            n: 14,
            text: "What is one of the woman's considerations in choosing a sport for her son?",
            options: [
              {
                letter: 'A',
                text: 'The possibilities of joining the school sports team.'
              },
              {
                letter: 'B',
                text: 'The opportunities of winning some championships.'
              },
              {
                letter: 'C',
                text: 'The chances of getting an athletic scholarship later on.'
              },
              {
                letter: 'D',
                text: 'The odds of becoming a professional sportsman someday.'
              }
            ],
            answer: 'C'
          },
          {
            n: 15,
            text: 'What does the man say about beach volleyball?',
            options: [
              {
                letter: 'A',
                text: 'It differs entirely from indoor volleyball.'
              },
              {
                letter: 'B',
                text: 'It appeals to both schoolgirls and schoolboys.'
              },
              {
                letter: 'C',
                text: 'It is less popular than indoor sports in the country.'
              },
              {
                letter: 'D',
                text: 'It is completely different from other outdoor games.'
              }
            ],
            answer: 'A'
          }
        ]
      }
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2024-12-s2-p1.mp3',
        transcript: "Lift-off is usually the most environmentally harmful stage of any space mission, with vast quantities of fuel burnt up in a matter of minutes. For instance, SpaceX's Falcon 9 gets through 112 tonnes of refined fuel, emitting about 336 tonnes of CO2. This is the equivalent produced by your average car driving almost 70 times around the world. As well as greenhouse gases, rocket engines emit particles that destroy ozone. These issues are growing more pressing with the emergence of commercial spaceflight. There were 114 space launches in 2020, but there may be up to 1,000 per year in future. Sustainable fuels are the top priority to enable greener space travel. Current spacecraft use a variety of fuels, but most are based on fossil fuels. One potentially greener option is liquid hydrogen and oxygen. Hydrogen can be obtained sustainably by using solar power to break water down into oxygen and hydrogen. Reusable rockets can cut down on some of the waste associated with spaceflight. Traditionally, boosters, fuel tanks and other components are treated as expendable. But guiding them back to Earth in a controlled manner opens new possibilities — most components from the Falcon 9 can be reused up to 100 times. Truly environmentally friendly space travel is still some way off. But we already have many of the technologies needed to start limiting its impact on our planet.",
        questions: [
          {
            n: 16,
            text: 'What do we learn from the passage about the lift-off of spacecraft?',
            options: [
              {
                letter: 'A',
                text: 'It usually requires years of preparations.'
              },
              {
                letter: 'B',
                text: 'It does a lot of harm to the environment.'
              },
              {
                letter: 'C',
                text: 'It often burns over three hundred tonnes of refined fuel.'
              },
              {
                letter: 'D',
                text: 'It proves to be the most complicated stage of space missions.'
              }
            ],
            answer: 'B'
          },
          {
            n: 17,
            text: 'What happens traditionally to boosters, fuel tanks and other components in spacecraft?',
            options: [
              {
                letter: 'A',
                text: 'They are burnt up in outer space.'
              },
              {
                letter: 'B',
                text: 'They are guided back to Earth.'
              },
              {
                letter: 'C',
                text: 'They are reused up to 100 times.'
              },
              {
                letter: 'D',
                text: 'They are treated as expendable.'
              }
            ],
            answer: 'D'
          },
          {
            n: 18,
            text: 'What does the passage say we already have regarding spaceflight?',
            options: [
              {
                letter: 'A',
                text: 'New technologies for bringing back space vehicles for recycling.'
              },
              {
                letter: 'B',
                text: 'The technology for meeting the needs of commercial space travel.'
              },
              {
                letter: 'C',
                text: 'Many of the technologies to limit the impact of space travel on Earth.'
              },
              {
                letter: 'D',
                text: 'The technology for effectively protecting ozone from being destroyed.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2024-12-s2-p2.mp3',
        transcript: "Helping to look after a pet can facilitate numerous aspects of a child's emotional development. Research shows that reading to a loyal and nonjudgmental companion, such as a dog or cat, can encourage reluctant readers to read aloud, which will in turn boost their self-confidence. Having a companion to talk to about their feelings can also help children feel secure and develop communication skills. A household pet can also cultivate a child's sense of responsibility as their parent explains the necessary processes of keeping their pet happy and healthy. As a child matures, they can then take on more of the daily responsibilities, boosting their sense of independence. Pets also provide a fantastic subject for research and learning. Parents can encourage their child to research their favourite pets at the library or during a supervised internet search. Taking children along to the pet shop to buy food and supplies will support their cognitive development as their passion for learning flourishes. A child's physical development can benefit greatly from taking pets for walks in the fresh air. Even their fine-motor skills can be utilised in taking care of a beloved animal. When responsibilities are well paced and communicated, a child can benefit greatly from involvement in bringing up a happy and healthy pet. And of course, if a child doesn't have a pet in their own household, they can still benefit from all of the above when visiting a friend who does.",
        questions: [
          {
            n: 19,
            text: 'What does research show about reading to a loyal and nonjudgmental companion?',
            options: [
              {
                letter: 'A',
                text: 'It can help unskilled readers feel more secure.'
              },
              {
                letter: 'B',
                text: 'It can encourage reluctant readers to read aloud.'
              },
              {
                letter: 'C',
                text: "It can strengthen children's confidence in others."
              },
              {
                letter: 'D',
                text: "It can boost children's interest in communication."
              }
            ],
            answer: 'B'
          },
          {
            n: 20,
            text: "How can parents make pets a fantastic subject for their children's research and learning?",
            options: [
              {
                letter: 'A',
                text: 'By motivating children to find out about their favourite pets.'
              },
              {
                letter: 'B',
                text: 'By taking children to the library to borrow books on animals.'
              },
              {
                letter: 'C',
                text: 'By allowing children to surf the internet about pets by themselves.'
              },
              {
                letter: 'D',
                text: 'By showing children how to acquire knowledge about healthy pets.'
              }
            ],
            answer: 'A'
          },
          {
            n: 21,
            text: "How can children still benefit even when their family doesn't have a pet?",
            options: [
              {
                letter: 'A',
                text: 'By learning that raising pets can do much good.'
              },
              {
                letter: 'B',
                text: 'By watching how healthy pets are brought up.'
              },
              {
                letter: 'C',
                text: "By hearing about their peers' passion for pets."
              },
              {
                letter: 'D',
                text: 'By visiting friends who have household pets.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2024-12-s2-p3.mp3',
        transcript: `A new bill in the Ohio legislature would require state public colleges and universities to send prospective students a packet of information. This would include costs of college, grants and scholarships. It would also include expected monthly loan payments and projected salary after college. State Representative Adam Mathews is one of the two legislators who proposed the bill. He said it would give prospective students more information about what to expect once they graduate. "Putting that information in front of them will give them the best opportunity to match their skills and their dreams to what our schools can provide," said Mathews. He notes that the state can only regulate public institutions in this way, but he hopes private institutions in Ohio follow the lead of the state and post similar information. He believes giving out this information will help Ohio's colleges and universities to be more competitive. The information will highlight what a great value they have for their very reasonable cost. Ohio's schools are already competitive. The state attracts more undergraduate students than it sends to colleges out of state. Many colleges and universities currently provide similar information on their websites. This includes tuition, fees, graduation rates and more. But students need to search for the information. This bill would require the universities and colleges to send a packet directly to students.`,
        questions: [
          {
            n: 22,
            text: 'What would the new bill in the Ohio legislature require public colleges and universities to do?',
            options: [
              {
                letter: 'A',
                text: 'Send would-be students a packet of information.'
              },
              {
                letter: 'B',
                text: 'Update regularly all information on their websites.'
              },
              {
                letter: 'C',
                text: 'Inform prospective students of their yearly enrollment.'
              },
              {
                letter: 'D',
                text: 'Answer questions raised by applicants and their parents.'
              }
            ],
            answer: 'A'
          },
          {
            n: 23,
            text: 'What can the state only do according to Adam Mathews?',
            options: [
              {
                letter: 'A',
                text: 'Oversee private institutions directly.'
              },
              {
                letter: 'B',
                text: "Follow other states' example."
              },
              {
                letter: 'C',
                text: 'Supervise all schools consistently.'
              },
              {
                letter: 'D',
                text: 'Regulate public institutions by law.'
              }
            ],
            answer: 'D'
          },
          {
            n: 24,
            text: "What do we learn about Ohio's schools from the passage?",
            options: [
              {
                letter: 'A',
                text: 'They are resourceful.'
              },
              {
                letter: 'B',
                text: 'They are competitive.'
              },
              {
                letter: 'C',
                text: "They provide the best opportunity to realize one's dream."
              },
              {
                letter: 'D',
                text: 'They appeal most to students from other states in the U.S.'
              }
            ],
            answer: 'B'
          },
          {
            n: 25,
            text: 'What is the problem with schools providing information on their websites?',
            options: [
              {
                letter: 'A',
                text: 'Some students waste much time surfing the net.'
              },
              {
                letter: 'B',
                text: 'Students may need to visit too many websites.'
              },
              {
                letter: 'C',
                text: 'Students have to search for the information.'
              },
              {
                letter: 'D',
                text: 'Some students may lack adequate access.'
              }
            ],
            answer: 'C'
          }
        ]
      }
    ]
  },
  answerQuotes: {
    '1': [
      'The Energy Department projects heating bills will jump 28% this winter for those who rely on natural gas.'
    ],
    '2': [
      'Last month, the federal government added $1 billion in funding to Low Income Home Energy Assistance Program'
    ],
    '3': [
      'Many Americans think they make healthy food choices, but they may be viewing their diet too optimistically.'
    ],
    '4': [
      'Those who rated their diet as poor tended to be far more accurate.'
    ],
    '5': [
      'dozens of Indian rescuers rallied together to use a crane in order to save an elephant trapped at the bottom of a 20-foot well'
    ],
    '6': [
      'The officers then threw in some food for the creature and called the local forest department for help.'
    ],
    '7': [
      'The elephant was kept under close supervision for a few days before it was successfully released back into the wild.'
    ],
    '8': [
      "But paying online is too convenient and I spent too much money on things I didn't need."
    ],
    '9': [
      'Oh, impulse purchases can be an issue for me, too.'
    ],
    '10': [
      'instead of going to the canteen, where I could get a healthier meal for half the price.'
    ],
    '11': [
      "And after that I refused to spend more than what I had budgeted, and by now it's just a habit."
    ],
    '12': [
      "I don't think he should be doing something so challenging with all his breathing issues."
    ],
    '13': [
      "He could try basketball since many of the courts are indoors now and it's a sport that could help him understand team spirit while cooperating with others."
    ],
    '14': [
      "It's not as popular as some sports, which means he has better odds of possibly getting an athletic scholarship in the future."
    ],
    '15': [
      'beach volleyball and indoor volleyball are completely different.'
    ],
    '16': [
      'Lift-off is usually the most environmentally harmful stage of any space mission, with vast quantities of fuel burnt up in a matter of minutes.'
    ],
    '17': [
      'Traditionally, boosters, fuel tanks and other components are treated as expendable.'
    ],
    '18': [
      'But we already have many of the technologies needed to start limiting its impact on our planet.'
    ],
    '19': [
      'Research shows that reading to a loyal and nonjudgmental companion, such as a dog or cat, can encourage reluctant readers to read aloud, which will in turn boost their self-confidence.'
    ],
    '20': [
      'Parents can encourage their child to research their favourite pets at the library or during a supervised internet search.'
    ],
    '21': [
      "if a child doesn't have a pet in their own household, they can still benefit from all of the above when visiting a friend who does."
    ],
    '22': [
      'A new bill in the Ohio legislature would require state public colleges and universities to send prospective students a packet of information.'
    ],
    '23': [
      'He notes that the state can only regulate public institutions in this way'
    ],
    '24': [
      "Ohio's schools are already competitive."
    ],
    '25': [
      'But students need to search for the information.'
    ]
  }
}

export default LISTENING
