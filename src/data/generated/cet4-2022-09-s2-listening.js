// 2022年09月 第2套 CET-4 听力数据（复用第1套听力内容）
// 2022年9月全国仅考1套听力，本套听力和阅读与第1套完全相同；本题库沿用第1套数据
// verified: true
const LISTENING = {
  id: 'cet4-2022-09-s2',
  meta: {
    level: 'CET4',
    year: 2022,
    month: 9,
    set: 2,
    source: '原题：2022.09英语四级真题第1套.pdf；音频：2022年09月四级听力（全1套）.mp3；原文：2022.09英语四级详解第1套.pdf',
    answerSource: '解析 PDF（OCR 原文+核对）',
    note: '2022年9月全国仅考1套听力，本套听力和阅读与第1套完全相同；本题库沿用第1套数据',
    verified: true,
    verifiedAt: '2026-11-05'
  },
  audioUrls: {
    news: '/audio/cet4-2022-09-s2-a.mp3',
    conv: '/audio/cet4-2022-09-s2-b.mp3',
    pass: '/audio/cet4-2022-09-s2-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2022-09-s2-n1.mp3',
        transcript: "White meat, such as chicken, may raise blood cholesterol levels as much as red meat does. This finding surprised researchers, who admitted they didn't expect that eating white meat would lead to higher blood cholesterol levels. In the study, researchers looked at 113 healthy people. The participants ate three different diets. These were a red meat diet which is primarily beef, a white meat diet which is mostly chicken and turkey, and a vegetarian protein diet. Each diet period was four weeks. Between the diet periods, participants had a break, during which they ate their regular foods. In addition, participants had blood tests at the start and finish of each new diet. The results showed that white and red meat diets had the same effects on blood cholesterol levels. Further, both diets increased blood cholesterol levels compared with the diet built on vegetarian protein sources. The team acknowledged that it is possible that white meat is better for our health than red meat despite their findings. This is because other effects of red meat consumption could contribute to heart disease independent of cholesterol. Their main recommendations are that people eat less of both kinds of meat and more vegetarian protein.",
        questions: [
          {
            n: 1,
            text: 'What do we learn from the news report about the study?',
            options: [
              {
                letter: 'A',
                text: "It examines the effect of cholesterol on people's health."
              },
              {
                letter: 'B',
                text: 'Its participants all had high blood cholesterol levels.'
              },
              {
                letter: 'C',
                text: 'It questions the benefits of a vegetarian protein diet.'
              },
              {
                letter: 'D',
                text: 'Its finding came as a surprise to the researchers.'
              }
            ],
            answer: 'D'
          },
          {
            n: 2,
            text: 'What did the researchers acknowledge?',
            options: [
              {
                letter: 'A',
                text: 'They do not know all the effects of eating meat.'
              },
              {
                letter: 'B',
                text: 'Red meat itself does not cause heart diseases.'
              },
              {
                letter: 'C',
                text: 'White meat may be healthier than red meat.'
              },
              {
                letter: 'D',
                text: 'Vegetarian protein may be easier to absorb.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2022-09-s2-n2.mp3',
        transcript: 'At around half past nine this morning, a trailer attached to a lorry turned over at the crossing of High Street in Milton. Hundreds of frozen turkeys were spilled all over the road. It is reported that nobody was hurt in the incident, but police said it may affect traffic and Christmas dinners. With just one week to go before Christmas, there are worries that local supermarket supplies of this holiday favorite may be affected. A police spokeswoman said that officers were currently in attendance at the scene. She stated that the driver of the lorry had been arrested on suspicion of dangerous driving. The crossing on High Street is a well-known accident blackspot. This year alone, there have been seven traffic accidents at this location. Thankfully, none of these accidents have resulted in serious injury.',
        questions: [
          {
            n: 3,
            text: 'What does the news report say about the accident at the crossing of High Street in Milton?',
            options: [
              {
                letter: 'A',
                text: "It may have been due to the lorry driver's drunk driving."
              },
              {
                letter: 'B',
                text: 'It may affect the local supply of turkeys for Christmas.'
              },
              {
                letter: 'C',
                text: 'It interrupted traffic for several hours running.'
              },
              {
                letter: 'D',
                text: 'It was caused by a lorry running into a trailer.'
              }
            ],
            answer: 'B'
          },
          {
            n: 4,
            text: 'What do we learn about the crossing on High Street?',
            options: [
              {
                letter: 'A',
                text: 'It has been the scene of several fatal accidents recently.'
              },
              {
                letter: 'B',
                text: 'It is the spot that causes the local police a lot of worry.'
              },
              {
                letter: 'C',
                text: 'It has witnessed several traffic accidents this year.'
              },
              {
                letter: 'D',
                text: 'It is a location frequented by local traffic police.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2022-09-s2-n3.mp3',
        transcript: `India launched its helicopter taxi service on Monday, promising to ferry customers the 40 miles between Bangalore's Electronic City tech hub and the International Airport terminal in 15 minutes. Customers can book their helicopter ride through a mobile app. The service, which claims to be the first of its kind in India, offers only one route, but Bangalore airport will add more once it gets approval. Helicopter taxi is not an affordable option for many travelers. A car ride for the same journey costs less than half as much. But Bangalore airport says it is a competitive alternative to a car ride for tech executives in a hurry. "A large number of high-class travelers, including CEOs, have to spend more than three hours by road to get there—and that is a loss of time," a Bangalore airport spokesperson said. "This is not a low cost option, but it is an option," she added. The helicopters ferried around eight customers to the airport on their first day. The company that owns and operates the service is called Thumby Aviation. It previously specialized in private charter flights for government officials.`,
        questions: [
          {
            n: 5,
            text: 'What is Bangalore airport trying to do about the helicopter taxi service?',
            options: [
              {
                letter: 'A',
                text: 'Get approval to add more routes.'
              },
              {
                letter: 'B',
                text: 'Attract more international tourists.'
              },
              {
                letter: 'C',
                text: 'Advertise it through a mobile app.'
              },
              {
                letter: 'D',
                text: 'Make it affordable to common folk.'
              }
            ],
            answer: 'A'
          },
          {
            n: 6,
            text: 'What do we learn from the news report about the helicopter taxi ride?',
            options: [
              {
                letter: 'A',
                text: 'It costs more than twice as much as a car ride.'
              },
              {
                letter: 'B',
                text: 'It is gaining popularity among ordinary Indians.'
              },
              {
                letter: 'C',
                text: "It symbolizes India's advancement in high-tech."
              },
              {
                letter: 'D',
                text: 'It can get anywhere in the city within 15 minutes.'
              }
            ],
            answer: 'A'
          },
          {
            n: 7,
            text: 'Who are the targeted customers of the helicopter taxi service?',
            options: [
              {
                letter: 'A',
                text: 'International tourists.'
              },
              {
                letter: 'B',
                text: 'High-class travelers.'
              },
              {
                letter: 'C',
                text: 'Prominent superstars.'
              },
              {
                letter: 'D',
                text: 'Customers in a hurry.'
              }
            ],
            answer: 'B'
          }
        ]
      }
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2022-09-s2-c1.mp3',
        transcript: "W: Hi, I wish to buy some cheese for a barbecue this weekend. M: What kind would you like? W: Sorry, I don't know much about cheese. What type do you think would be suitable for a barbecue? M: That's easy! For a barbecue, you could have any cheese you want. I imagine there will be different foods and people will just help themselves and eat at their own pace, right? W: Yes, exactly. It will be very casual. We will just be a small group of friends gathering together at Washington Park. There will be around 20 of us, including children. M: Great! So you could have different types of cheese. How much would you like to spend? W: Not very much. Let's say $30. M: I would suggest having at least one soft cheese and one hard cheese. That will offer you a good variety to suit different people's tastes. W: That sounds good. What's the difference between a soft cheese and a hard cheese? M: Well, it depends. But generally speaking, soft cheeses are creamy and go well with sweet things like honey and jam. I would suggest something like this Spanish goat cheese. It's only $15, a very good price. You can spread it on bread with a knife, and then add a tiny bit of honey on top. It's delicious. Children love it. W: Okay, great. What about a hard cheese? M: Yes, for hard cheese, I would recommend this Italian one here. It has a very strong smell and a dry flavor. You can cut it into thin slices and eat it on its own. It's $16. W: Okay, I'll take both. Thank you for your help.",
        questions: [
          {
            n: 8,
            text: 'What does the woman plan to do for the weekend?',
            options: [
              {
                letter: 'A',
                text: 'Treat her friends in a bar.'
              },
              {
                letter: 'B',
                text: 'Take a trip to Washington.'
              },
              {
                letter: 'C',
                text: 'Make some cheese.'
              },
              {
                letter: 'D',
                text: 'Throw a party.'
              }
            ],
            answer: 'D'
          },
          {
            n: 9,
            text: 'What does the man suggest the woman do?',
            options: [
              {
                letter: 'A',
                text: 'Spend no more than 30 dollars.'
              },
              {
                letter: 'B',
                text: 'Buy different kinds of cheese.'
              },
              {
                letter: 'C',
                text: 'Help him prepare the barbecue.'
              },
              {
                letter: 'D',
                text: "Find out different people's tastes."
              }
            ],
            answer: 'B'
          },
          {
            n: 10,
            text: 'What does the man say about Spanish goat cheese?',
            options: [
              {
                letter: 'A',
                text: 'It is the best kind of hard cheese.'
              },
              {
                letter: 'B',
                text: 'It is the most popular in Spain.'
              },
              {
                letter: 'C',
                text: 'It is more delicious than honey.'
              },
              {
                letter: 'D',
                text: 'It is a good choice for children.'
              }
            ],
            answer: 'D'
          },
          {
            n: 11,
            text: 'What is the woman going to do at the end of the conversation?',
            options: [
              {
                letter: 'A',
                text: 'Buy what the man recommended.'
              },
              {
                letter: 'B',
                text: 'Have a taste of both of the cheeses.'
              },
              {
                letter: 'C',
                text: 'Choose one of the two types of cheese.'
              },
              {
                letter: 'D',
                text: 'Ask the man to cut the cheese into slices.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2022-09-s2-c2.mp3',
        transcript: "M: Our school is replacing printed textbooks with e-textbooks next semester. I can't wait. W: Really? What about the cost, not only buying all those tablets, but the software and electronic infrastructure that goes with it, not to mention retraining all the teachers and administration staff? M: Sure, the initial expenditure will be high, but much lower afterwards. Besides that, tablet prices continue to drop and are becoming increasingly affordable. Anyway, tablets help students learn up to 80% faster. W: Not necessarily. Tablets have too many distractions. Students may pay attention to apps, games and websites instead of their teachers. In fact, research suggests that people who read printed text comprehend more, remember more and learn 30% more than those who read digital text. M: Yes. But tablets contain many technological features that are not found in printed textbooks. Think about it. Students are able to highlight and edit text, write notes and search for information much more quickly than they can with printed textbooks. And what about all those trees that are cut down to make printed books? W: Actually, manufacturing tablets is environmentally destructive and dangerous to human health. The health impacts from making one electronic reader are 70 times greater than those from making a single printed book. A lot of minerals are extracted from the earth to make electronic readers. It does far more damage to the environment. M: Yes. But the software for electronic readers can be updated instantly without the need for buying a whole lot of new books. That's better for the environment. W: But the core curriculum doesn't change that much. Printed textbooks that are not brand new, still contain the basic relevant information of core subjects. M: Well, I'm looking forward to the change. W: I'll stick with my printed books.",
        questions: [
          {
            n: 12,
            text: 'What does the woman say about using e-textbooks?',
            options: [
              {
                letter: 'A',
                text: 'New teachers and staff have to be recruited.'
              },
              {
                letter: 'B',
                text: 'It might take some time for students to adapt.'
              },
              {
                letter: 'C',
                text: 'It involves buying lots of tablets and software.'
              },
              {
                letter: 'D',
                text: 'The software has to be constantly upgraded.'
              }
            ],
            answer: 'C'
          },
          {
            n: 13,
            text: 'According to the man, how can the use of tablets benefit students?',
            options: [
              {
                letter: 'A',
                text: 'It can greatly improve their learning efficiency.'
              },
              {
                letter: 'B',
                text: 'It can help them to interact more with teachers.'
              },
              {
                letter: 'C',
                text: 'It can save their trouble of carrying printed books.'
              },
              {
                letter: 'D',
                text: 'It can develop their skills in using electronic devices.'
              }
            ],
            answer: 'A'
          },
          {
            n: 14,
            text: 'What does the woman say about students using tablets?',
            options: [
              {
                letter: 'A',
                text: 'They may have trouble comprehending texts.'
              },
              {
                letter: 'B',
                text: 'They may encounter technological problems.'
              },
              {
                letter: 'C',
                text: 'They may pay less respect to teachers.'
              },
              {
                letter: 'D',
                text: 'They may get distracted more easily.'
              }
            ],
            answer: 'D'
          },
          {
            n: 15,
            text: 'What does the woman say about making electronic readers?',
            options: [
              {
                letter: 'A',
                text: 'It generates a great deal of electronic garbage.'
              },
              {
                letter: 'B',
                text: 'It does a lot of damage to the environment.'
              },
              {
                letter: 'C',
                text: 'It emits huge amounts of harmful radiation.'
              },
              {
                letter: 'D',
                text: 'It accelerates the exhaustion of rare minerals.'
              }
            ],
            answer: 'B'
          }
        ]
      }
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2022-09-s2-p1.mp3',
        transcript: 'In social psychology, the term "person perception" refers to the mental processes that we use to form impressions of other people. It includes not just how we form these impressions, but the conclusions we make about other people based on our impressions. Consider how often you make this kind of judgment every day. When you meet with a new coworker, you immediately begin to develop an initial impression of this person. When you visit the grocery store, you might draw conclusions about the cashier who checks you out. Obviously, person perception is a very subjective process that can be affected by a number of variables, including the characteristics of the person you are observing, the context of the situation, your own personal traits, and your past experiences. One of the techniques we use in person perception is social categorization. In this process, we mentally categorize people into different groups based on common characteristics. Problems with this technique include the fact that it can lead to errors and prejudice. Imagine that you are getting on a bus. There are only two seats available. One is next to a small, elderly woman; the other is next to a muscular, fierce-looking man. You sit next to the elderly woman, who unfortunately turns out to be quite skilled at picking pockets. Because of social categorization, you immediately judge the woman as harmless, and the man as threatening, leading to the loss of your wallet.',
        questions: [
          {
            n: 16,
            text: 'What does the passage say we tend to do every day?',
            options: [
              {
                letter: 'A',
                text: 'Communicate with our coworkers.'
              },
              {
                letter: 'B',
                text: 'Encounter people in different places.'
              },
              {
                letter: 'C',
                text: 'Judge people based on our first impressions.'
              },
              {
                letter: 'D',
                text: 'Engage in a variety of psychological activities.'
              }
            ],
            answer: 'C'
          },
          {
            n: 17,
            text: 'What do we learn about person perception from this passage?',
            options: [
              {
                letter: 'A',
                text: "It is an objective evaluation of a person's character."
              },
              {
                letter: 'B',
                text: 'It is a mental process influenced by many factors.'
              },
              {
                letter: 'C',
                text: 'It contributes to the formation of personal traits.'
              },
              {
                letter: 'D',
                text: 'It varies greatly among different social groups.'
              }
            ],
            answer: 'B'
          },
          {
            n: 18,
            text: 'What is the problem with using social categorization in person perception?',
            options: [
              {
                letter: 'A',
                text: 'It can lead to incorrect judgments.'
              },
              {
                letter: 'B',
                text: 'It can cause mistrust among people.'
              },
              {
                letter: 'C',
                text: 'It can result in instant losses.'
              },
              {
                letter: 'D',
                text: 'It can give rise to gender bias.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2022-09-s2-p2.mp3',
        transcript: 'Despite smartphones and social media, young people today are as socially competent as those from the previous generation. At least this is what a new study suggests. For the study, researchers compared teacher and parent evaluations of American children who started kindergarten in 1998, with those who began school in 2010. The former group entered kindergarten when mobile phones were luxuries. The latter group started school when mobile devices were widespread. Results showed both groups of children were rated similarly on important social skills. These included their ability to form and maintain friendships and get along with people who are different. They were also rated similarly on self-control, such as the ability to regulate their temper. In virtually every comparison made, ratings of social skills either remain constant or improved for the children born later. There was one exception: Social skills were slightly lower for children who accessed online games and social networking sites many times a day. Adults are worried when technological change starts to undermine traditional relationships, particularly the parent-child relationship. The introduction of telephones, automobiles and radio all led to moral panic among adults of the time, because the technology allowed children to enjoy more freedom. Fears over screen-based technology represent the most recent panic in response to technological change. But overall, the study found little evidence that time spent on screens was hurting social skills for most children.',
        questions: [
          {
            n: 19,
            text: 'What does the new study suggest about young people today and those from the previous generation?',
            options: [
              {
                letter: 'A',
                text: 'Both groups spend a lot of time on mobile devices.'
              },
              {
                letter: 'B',
                text: 'Both groups attach importance to social connections.'
              },
              {
                letter: 'C',
                text: 'They are equally competent in using new technology.'
              },
              {
                letter: 'D',
                text: 'They are similar in terms of social skills.'
              }
            ],
            answer: 'D'
          },
          {
            n: 20,
            text: 'What did the study find about children who accessed social networking sites many times a day?',
            options: [
              {
                letter: 'A',
                text: 'Their social skills were negatively affected.'
              },
              {
                letter: 'B',
                text: 'Their school performance was slightly lower.'
              },
              {
                letter: 'C',
                text: 'Their emotions were much harder to regulate.'
              },
              {
                letter: 'D',
                text: 'Their relations with peers were badly strained.'
              }
            ],
            answer: 'A'
          },
          {
            n: 21,
            text: "What is adults' worry about technological change?",
            options: [
              {
                letter: 'A',
                text: "It may pose a threat to their children's safety."
              },
              {
                letter: 'B',
                text: "It may affect society's traditional values."
              },
              {
                letter: 'C',
                text: 'It may hurt their relations with children.'
              },
              {
                letter: 'D',
                text: "It may change their children's ethical values."
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2022-09-s2-p3.mp3',
        transcript: "It's easy to spend all day searching for inspiration. You can find incredible videos, articles and news stories about the success of others. The problem is that consuming the success and ideas of others is passive inspiration. Every time you read an article or listen to an interview, you're practicing passive inspiration. You might learn something, but you don't actually have to do anything. Hearing about other people's success isn't the same as creating your own. Instead, it is through the process of active inspiration—the act of creating things, applying new ideas to our goals, and making mistakes—that we discover who we are and what is important to us. Furthermore, active inspiration is what results in long-term passion and enthusiasm. Watching someone else's success might leave you feeling excited for a few minutes. However, taking action and applying a new idea to your life will inspire you more than anything someone else can say. Learning and listening can help you think about things in a different way. But creating, producing, and experimenting is what drives you forward. Passive inspiration can give you ideas, but active inspiration will give you power. Too often we spend our lives consuming the world around us instead of creating it. And what matters is the power your actions have to inspire you. The best inspiration comes from the application of ideas, not the consumption of them.",
        questions: [
          {
            n: 22,
            text: "What does the speaker say about inspiration from consuming others' ideas and success stories?",
            options: [
              {
                letter: 'A',
                text: 'It is motivating.'
              },
              {
                letter: 'B',
                text: 'It is passive.'
              },
              {
                letter: 'C',
                text: 'It is incredible.'
              },
              {
                letter: 'D',
                text: 'It is impracticable.'
              }
            ],
            answer: 'B'
          },
          {
            n: 23,
            text: 'What do we learn from the passage about active inspiration?',
            options: [
              {
                letter: 'A',
                text: 'It results in short-term excitement.'
              },
              {
                letter: 'B',
                text: 'It helps us avoid making mistakes.'
              },
              {
                letter: 'C',
                text: 'It breeds long-term passion and enthusiasm.'
              },
              {
                letter: 'D',
                text: 'It is bound to help us achieve greater success.'
              }
            ],
            answer: 'C'
          },
          {
            n: 24,
            text: 'What does the passage say passive inspiration can do?',
            options: [
              {
                letter: 'A',
                text: 'Drive us forward.'
              },
              {
                letter: 'B',
                text: 'Bring us power.'
              },
              {
                letter: 'C',
                text: 'Spur us to action.'
              },
              {
                letter: 'D',
                text: 'Give us ideas.'
              }
            ],
            answer: 'D'
          },
          {
            n: 25,
            text: 'Where does the best inspiration come from according to the passage?',
            options: [
              {
                letter: 'A',
                text: 'Listening to success stories.'
              },
              {
                letter: 'B',
                text: "Applying ideas to one's life."
              },
              {
                letter: 'C',
                text: 'Following the advice of experts.'
              },
              {
                letter: 'D',
                text: 'Consuming the world around us.'
              }
            ],
            answer: 'B'
          }
        ]
      }
    ]
  },
  answerQuotes: {
    '1': [
      'White meat, such as chicken, may raise blood cholesterol levels as much as red meat does.',
      'This finding surprised researchers'
    ],
    '2': [
      'it is possible that white meat is better for our health than red meat despite their findings'
    ],
    '3': [
      'there are worries that local supermarket supplies of this holiday favorite may be affected'
    ],
    '4': [
      'there have been seven traffic accidents at this location'
    ],
    '5': [
      'offers only one route, but Bangalore airport will add more once it gets approval'
    ],
    '6': [
      'A car ride for the same journey costs less than half as much.'
    ],
    '7': [
      'A large number of high-class travelers, including CEOs'
    ],
    '8': [
      'I wish to buy some cheese for a barbecue this weekend',
      'small group of friends gathering together at Washington Park'
    ],
    '9': [
      'I would suggest having at least one soft cheese and one hard cheese'
    ],
    '10': [
      'this Spanish goat cheese',
      'Children love it'
    ],
    '11': [
      "Okay, I'll take both."
    ],
    '12': [
      'not only buying all those tablets, but the software and electronic infrastructure that goes with it'
    ],
    '13': [
      'tablets help students learn up to 80% faster'
    ],
    '14': [
      'Tablets have too many distractions. Students may pay attention to apps, games and websites instead of their teachers.'
    ],
    '15': [
      'manufacturing tablets is environmentally destructive and dangerous to human health',
      'It does far more damage to the environment.'
    ],
    '16': [
      'When you meet with a new coworker, you immediately begin to develop an initial impression of this person.'
    ],
    '17': [
      'person perception is a very subjective process that can be affected by a number of variables'
    ],
    '18': [
      'Problems with this technique include the fact that it can lead to errors and prejudice.',
      'you immediately judge the woman as harmless, and the man as threatening, leading to the loss of your wallet'
    ],
    '19': [
      'young people today are as socially competent as those from the previous generation'
    ],
    '20': [
      'Social skills were slightly lower for children who accessed online games and social networking sites many times a day.'
    ],
    '21': [
      'Adults are worried when technological change starts to undermine traditional relationships, particularly the parent-child relationship.'
    ],
    '22': [
      'consuming the success and ideas of others is passive inspiration'
    ],
    '23': [
      'active inspiration is what results in long-term passion and enthusiasm'
    ],
    '24': [
      'Passive inspiration can give you ideas'
    ],
    '25': [
      'The best inspiration comes from the application of ideas, not the consumption of them.'
    ]
  }
}

export default LISTENING
