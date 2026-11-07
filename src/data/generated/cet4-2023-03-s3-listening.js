// 2023年03月 第3套 CET-4 听力数据（复用第1套听力内容）
// 2023年3月共考1套听力，第2/3套听力与第1套相同，仅顺序不同；本题库沿用第1套数据
// verified: true
const LISTENING = {
  id: 'cet4-2023-03-s3',
  meta: {
    level: 'CET4',
    year: 2023,
    month: 3,
    set: 3,
    source: '原题：2023.03英语四级真题第1套.pdf；音频：2023年03月四级真题（3套相同）听力音频.mp3；原文：2023.03英语四级详解第1套.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
    note: '2023年3月共考1套听力，第2/3套听力与第1套相同，仅顺序不同；本题库沿用第1套数据'
  },
  audioUrls: {
    news: '/audio/cet4-2023-03-s3-a.mp3',
    conv: '/audio/cet4-2023-03-s3-b.mp3',
    pass: '/audio/cet4-2023-03-s3-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2023-03-s3-n1.mp3',
        transcript: "African leaders plan to turn the continent into a continent without borders. They will introduce a single passport policy, allowing free movement between countries. The idea from the African Union has been modelled on the EU Schengen free movement deal. Europe has abolished many internal borders. This enables visa-free movement across the continent. Currently, 13 African countries have visa-free deals in place with each other. These allow citizens to visit another country without a visa. Some countries offer visas on arrival. In contrast, Americans are able to travel to 20 of the continent's countries without a visa, or secure a visa on arrival. The African Union, which represents 54 states, wants to abolish the requirement of a visa for Africans visiting other African countries. It also wants to establish a free-trade deal across the continent in the near future, as trade within the African continent costs more than any other region.",
        questions: [
          {
            n: 1,
            text: 'What is the news report mainly about?',
            options: [
              {
                letter: 'A',
                text: 'A proposed policy allowing Africans to travel in Africa without a visa.'
              },
              {
                letter: 'B',
                text: 'An agreement among 13 African countries to set up a free-trade zone.'
              },
              {
                letter: 'C',
                text: 'A plan to invite all African countries to join the African Union.'
              },
              {
                letter: 'D',
                text: 'An important initiative to permit tourists to visit Africa without a visa.'
              }
            ],
            answer: 'A'
          },
          {
            n: 2,
            text: 'What benefit will a free-trade deal bring to African economy?',
            options: [
              {
                letter: 'A',
                text: 'It will attract more investments from all over the world.'
              },
              {
                letter: 'B',
                text: 'It will help many African countries reduce trade deficits.'
              },
              {
                letter: 'C',
                text: 'It will reduce the cost of trade between African countries.'
              },
              {
                letter: 'D',
                text: 'It will allow Africans to play a bigger role in world trade.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2023-03-s3-n2.mp3',
        transcript: "Researchers in Iceland found a new way of tackling climate change by pumping carbon dioxide underground and turning it into stone. Other carbon capture and storage methods store carbon dioxide as a gas, but problems include a high cost and concern about leaks. This new method of burying carbon dioxide and turning it into stone is cheaper and more secure, the Guardian reports. To turn carbon dioxide into stone, researchers with the Carbfix project pumped the gas into volcanic rock and sped up the natural process in which the volcanic rock reacts with gas and forms carbon minerals. The gas turned into solid in just two years, much faster than the hundreds or thousands of years researchers had predicted. The research took place at Iceland's Hellisheidi power plant. Already, the project in Iceland has been increased in scale to bury 10,000 tons of carbon dioxide each year. One potential difficulty is that for each ton of carbon dioxide buried, the technique requires 25 tons of water. However, the lead researcher said sea water could be used.",
        questions: [
          {
            n: 3,
            text: 'What new method has been developed to help fight climate change?',
            options: [
              {
                letter: 'A',
                text: 'Cooling down volcanic rock with sea water.'
              },
              {
                letter: 'B',
                text: 'Storing carbon dioxide underground as a gas.'
              },
              {
                letter: 'C',
                text: 'Capturing carbon dioxide and burying it under the sea.'
              },
              {
                letter: 'D',
                text: 'Pumping carbon dioxide underground to form stone.'
              }
            ],
            answer: 'D'
          },
          {
            n: 4,
            text: 'What is a potential difficulty in applying the new technique?',
            options: [
              {
                letter: 'A',
                text: 'Lack of burying ground.'
              },
              {
                letter: 'B',
                text: 'Long time for processing.'
              },
              {
                letter: 'C',
                text: 'High consumption of water.'
              },
              {
                letter: 'D',
                text: 'Enormous cost of energy.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2023-03-s3-n3.mp3',
        transcript: 'People in France are keeping away from the narrow French stick loaf in favor of healthier, cheaper options, a millers association has said. The National Association of French Millers says bread consumption is on the decline, with French people eating nine grams less than in the previous year. The association is concerned about the effects this trend will have on their trade, and suggests three reasons why this happening. Firstly, the association cited changing diets, in particular the switch to those low in calories, as a factor in the reduction of bread consumption. This could explain why the difference in consumption between genders is so big. Nowadays, men eat an approximate average of 140 grams of bread daily, whereas women eat 80 to 90 grams. The second reason, they say, is lifestyle changes in the country, with people dedicating less time to breakfast when bread would traditionally be eaten with butter and jam. Finally, the rising cost of bread is considered to be a factor, with the price of a French stick loaf increasing by nearly 25% in the last 10 years.',
        questions: [
          {
            n: 5,
            text: "What does the news report say about French people's bread consumption?",
            options: [
              {
                letter: 'A',
                text: 'It varies with the seasons.'
              },
              {
                letter: 'B',
                text: 'It has been on the decline.'
              },
              {
                letter: 'C',
                text: 'It has caused nationwide concern.'
              },
              {
                letter: 'D',
                text: 'It is ninety grams daily on average.'
              }
            ],
            answer: 'B'
          },
          {
            n: 6,
            text: 'What do we learn about French women from the report?',
            options: [
              {
                letter: 'A',
                text: 'They emphasize food variety.'
              },
              {
                letter: 'B',
                text: 'They prefer French stick loaves.'
              },
              {
                letter: 'C',
                text: 'They do more cooking than men.'
              },
              {
                letter: 'D',
                text: 'They favor diets lower in calories.'
              }
            ],
            answer: 'D'
          },
          {
            n: 7,
            text: 'What is said about lifestyle changes of the French people?',
            options: [
              {
                letter: 'A',
                text: 'They bake more bread at home.'
              },
              {
                letter: 'B',
                text: 'They spend less time eating breakfast.'
              },
              {
                letter: 'C',
                text: 'They eat more fruit than they used to.'
              },
              {
                letter: 'D',
                text: 'They put jam instead of butter on bread.'
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
        audio: '/audio/cet4-2023-03-s3-c1.mp3',
        transcript: "W: Next, please. M: Yes, I'd like to book two train tickets to London tomorrow morning, please. W: Okay. What time would you like to go? M: Well, after the rush hour, I think. We'd like to avoid the crowds if possible. So probably sometime around 10 o'clock. W: No problem. Just give me a minute. There's one here at 9:47, then one at 10:12 and then a third at 10:26. M: The one at 12 minutes past 10 sounds good. W: All right. Would you like to sit in first or second class? M: Second class is fine. Thanks. Is there any chance we could have a window seat for one of those? W: No problem. And I've booked those seats next to each other for you. The total price is 36 pounds 50 cents. Is there anything else? M: Yes, actually, we'll be taking our bicycles with us. What is the arrangement for that? And will it cost extra? W: It's no extra cost. The price will be the same. All you need to do is wait at the far end of the platform. When the train arrives, tell the train guard where you're going, and he will help you secure the bicycles in the last carriage and give you a ticket. Then you can walk down through the train to your carriage and take your seats. When you arrive in London, hand the ticket to the guard and he will return the bicycles to you. M: Thank you for the information. That's very helpful.",
        questions: [
          {
            n: 8,
            text: 'When would the man like to leave for London?',
            options: [
              {
                letter: 'A',
                text: 'After the rush hour.'
              },
              {
                letter: 'B',
                text: 'Early in the morning.'
              },
              {
                letter: 'C',
                text: 'As soon as possible.'
              },
              {
                letter: 'D',
                text: 'Around lunch time.'
              }
            ],
            answer: 'A'
          },
          {
            n: 9,
            text: "What is the man's other request?",
            options: [
              {
                letter: 'A',
                text: 'Two first class seats.'
              },
              {
                letter: 'B',
                text: 'Two seats together.'
              },
              {
                letter: 'C',
                text: 'One window seat.'
              },
              {
                letter: 'D',
                text: 'One seat near the exit.'
              }
            ],
            answer: 'C'
          },
          {
            n: 10,
            text: 'Where should the man wait for the train?',
            options: [
              {
                letter: 'A',
                text: 'In the middle of the platform.'
              },
              {
                letter: 'B',
                text: 'At the far end of the platform.'
              },
              {
                letter: 'C',
                text: 'Behind the yellow line.'
              },
              {
                letter: 'D',
                text: 'In the waiting room.'
              }
            ],
            answer: 'B'
          },
          {
            n: 11,
            text: 'What should the man do to collect the bicycles?',
            options: [
              {
                letter: 'A',
                text: 'Wait in a queue for his turn.'
              },
              {
                letter: 'B',
                text: 'Go to the baggage claim area.'
              },
              {
                letter: 'C',
                text: 'Pay an extra fee for the service.'
              },
              {
                letter: 'D',
                text: 'Give the ticket to the train guard.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2023-03-s3-c2.mp3',
        transcript: "M: Good morning. Our guest today is Karen Brooke. Karen is the managing director of Cube Movie Theatre located on Underhill Road. Thank you for coming, Karen. W: Thank you for having me. M: So tell us about your cinema, Cube Movie Theatre. W: Sure. Cube Movie Theatre has been around now for 11 years. It's located in what used to be a hat factory. M: Oh, really? W: Yeah. There used to be many hat factories in Britain until around the 1950s. But fashion changed and most people stopped wearing hats. So practically all of those factories had to close down. This one in particular was closed for 47 years before we transformed it into a movie theatre. M: I see. I hear there's something else that makes your theatre special. What is it that sets you apart from other theatres? W: We're the only movie theatre in the whole country that only shows foreign movies. M: Is there enough demand for that? I would have thought that in London most people don't speak foreign languages. W: Sure, there's enough demand. The fact that we have been open and in business for all these years proves that. London is a very large and international city. There are lots of people interested in watching such movies. Furthermore, I might add, all movies come with English text at the bottom of the screen. So even if you don't understand what the actors say, you can still read it. M: Of course. What movie are you showing right now? W: This week, we're showing a musical from Pakistan. It's very popular.",
        questions: [
          {
            n: 12,
            text: 'What do we learn about hat factories in Britain?',
            options: [
              {
                letter: 'A',
                text: 'Almost all of them were operating at a deficit.'
              },
              {
                letter: 'B',
                text: 'They have all been turned into movie theatres.'
              },
              {
                letter: 'C',
                text: 'Nearly all of them closed down decades ago.'
              },
              {
                letter: 'D',
                text: 'They have adapted to meet fashion changes.'
              }
            ],
            answer: 'C'
          },
          {
            n: 13,
            text: 'What is special about Cube Movie Theatre?',
            options: [
              {
                letter: 'A',
                text: 'It shows foreign movies exclusively.'
              },
              {
                letter: 'B',
                text: 'It shows movies from the 1950s.'
              },
              {
                letter: 'C',
                text: 'It is the oldest theatre in London.'
              },
              {
                letter: 'D',
                text: 'It is located next to a hat factory.'
              }
            ],
            answer: 'A'
          },
          {
            n: 14,
            text: 'What does the man say about most people in London?',
            options: [
              {
                letter: 'A',
                text: 'They wear hats on social occasions.'
              },
              {
                letter: 'B',
                text: "They don't speak foreign languages."
              },
              {
                letter: 'C',
                text: 'They enjoy watching foreign movies.'
              },
              {
                letter: 'D',
                text: "They don't go to movie theatres often."
              }
            ],
            answer: 'B'
          },
          {
            n: 15,
            text: 'What does the woman say about foreign movies shown in London?',
            options: [
              {
                letter: 'A',
                text: 'They are meant mostly for immigrants.'
              },
              {
                letter: 'B',
                text: 'They attract large crowds of young Londoners.'
              },
              {
                letter: 'C',
                text: 'They are hard for English people to appreciate.'
              },
              {
                letter: 'D',
                text: 'They have an English translation on the screen.'
              }
            ],
            answer: 'D'
          }
        ]
      }
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2023-03-s3-p1.mp3',
        transcript: `Love them or hate them, smartphones have become an integral part of our daily lives. But should they be left outside the classroom? Nick Gibb, minister for school standards in England, believes schools should ban their pupils from bringing in smartphones. Astrid Natley, a secondary school math teacher, incorporates phones into her classroom. "My school doesn't have money for tablets," she says. "When students use their phones for research, they learn they have a powerful tool in their hands. If we stop children using phones, we are rejecting something they care about." Meanwhile, Helen Lockhart, a registered nurse working for community education, supports a complete ban. "I'm banned from mobile use at work, and my phone must be handed in. If I am caught with it in my pocket, I will be subject to disciplinary procedure, which will impact my career. We need to teach children how to behave like the professionals they are striving to become." Richard Stone, an English teacher, thinks there should be a clear separation between school and home. "Students should do things differently in the two environments. Children are getting more than enough screen time in their lives without the need to bring their phone into the classroom. The internet is too easy and too unreliable a research tool, so let's leave phones and laptops at home, and show them a different world in their lessons—one of books and pens," he says.`,
        questions: [
          {
            n: 16,
            text: 'What do we learn about Astrid Natley, a secondary school math teacher?',
            options: [
              {
                letter: 'A',
                text: "She doesn't think smartphones can replace tablets."
              },
              {
                letter: 'B',
                text: 'She incorporates smartphones into her teaching.'
              },
              {
                letter: 'C',
                text: 'She cannot stop children using smartphones.'
              },
              {
                letter: 'D',
                text: 'She regards smartphones as a distraction.'
              }
            ],
            answer: 'B'
          },
          {
            n: 17,
            text: 'Why does Helen Lockhart, a registered nurse, support a complete ban on smartphone use in the classroom?',
            options: [
              {
                letter: 'A',
                text: 'To enforce school discipline.'
              },
              {
                letter: 'B',
                text: 'To make students concentrate.'
              },
              {
                letter: 'C',
                text: 'To help children grow up to be professionals.'
              },
              {
                letter: 'D',
                text: "To cultivate children's good study habits."
              }
            ],
            answer: 'C'
          },
          {
            n: 18,
            text: 'What should students do in the classroom according to Richard Stone, an English teacher?',
            options: [
              {
                letter: 'A',
                text: 'Use books and pens only.'
              },
              {
                letter: 'B',
                text: 'Cut down their screen time.'
              },
              {
                letter: 'C',
                text: 'Make full use of electronic devices.'
              },
              {
                letter: 'D',
                text: 'Learn to use the internet for research.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2023-03-s3-p2.mp3',
        transcript: "Kate, a six-year-old girl, helped her brother wash windows to get a reward promised by her mother, a purple doll that she wanted. She watched her mother order the doll online. The next day, Kate asked if she could check the shipping status, so her mom clicked on the web page and then walked out of the room. Kate saw that her doll would be arriving the next afternoon, but then she noticed something else; suggestions about other dolls and toys she could order. Fifteen minutes and a few clicks later, with more than $350 worth of dolls in her cart, Kate placed the order and ran off to play. The next day, while checking on another online order, her mother noticed the long list of dolls on the way. She was able to cancel two of them, but it was too late to cancel the rest. She told her daughter that they were going to be returned. When the packages arrived, Kate wanted to open them, but her parents said no. Instead of sending back the dolls, her father suggested giving them to the local children's hospital. So the next week, Kate's family loaded up their car and took all the dolls to the playroom at the children's hospital. Kate was depressed at first, but then she sat with some girl patients and they opened up all the boxes together, laughing and playing. She had a lot of fun and learned a really good lesson.",
        questions: [
          {
            n: 19,
            text: 'How did Kate earn the reward from her mother?',
            options: [
              {
                letter: 'A',
                text: 'By cleaning the kitchen floor.'
              },
              {
                letter: 'B',
                text: 'By looking after her baby brother.'
              },
              {
                letter: 'C',
                text: 'By helping her mother do the dishes.'
              },
              {
                letter: 'D',
                text: 'By helping her brother wash windows.'
              }
            ],
            answer: 'D'
          },
          {
            n: 20,
            text: 'What did Kate do after her mother left the room?',
            options: [
              {
                letter: 'A',
                text: 'She ordered a large number of dolls.'
              },
              {
                letter: 'B',
                text: 'She checked if a purple doll was ordered.'
              },
              {
                letter: 'C',
                text: "She mistakenly canceled her mom's order."
              },
              {
                letter: 'D',
                text: 'She ordered a more expensive doll instead.'
              }
            ],
            answer: 'A'
          },
          {
            n: 21,
            text: "What did Kate's family do after the packages arrived?",
            options: [
              {
                letter: 'A',
                text: "They asked the children's hospital to pick them."
              },
              {
                letter: 'B',
                text: "They took all of them to the children's hospital."
              },
              {
                letter: 'C',
                text: 'They opened all of them one by one.'
              },
              {
                letter: 'D',
                text: 'They discussed where to keep them.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2023-03-s3-p3.mp3',
        transcript: "Can the date you were born affect how successful your life is? According to recent research done in Australia, the answer is yes. The researchers found that the time when a person starts school has an enduring impact on their lives. Those who are relatively old compared to their classmates have certain advantages over them. Previous research has found older students achieve better results. They are also more likely to attend university and become professional athletes, chief executives and even important politicians. But the Australian researchers wanted to discover what was driving these differences. They suspected older, more mature students obtained more self-confidence than their peers because they achieved better grades. To test this out, they conducted two studies. One was with high-school students and the other with more than 1,000 Australian adults aged between 24 and 60 years old. In the first study, more than 600 high-school students were surveyed about their tendency to take risks and feel confident. In the second study, those born on both sides of the cutoff date for starting school, were asked to complete online math questions and rate their performance. They were also asked about the risks they took while riding bicycles and managing their finances. The researchers found that older students displayed greater risk-taking tendencies. While risk-taking can be considered a negative attribute, it's also a characteristic of successful people, including athletes, political leaders and entrepreneurs.",
        questions: [
          {
            n: 22,
            text: "According to recent research conducted in Australia, what has a lasting impact on one's life?",
            options: [
              {
                letter: 'A',
                text: 'The time one starts school.'
              },
              {
                letter: 'B',
                text: 'The classroom atmosphere.'
              },
              {
                letter: 'C',
                text: 'The school that one attends.'
              },
              {
                letter: 'D',
                text: 'The relationship with classmates.'
              }
            ],
            answer: 'A'
          },
          {
            n: 23,
            text: 'What was the purpose of the Australian research?',
            options: [
              {
                letter: 'A',
                text: 'To help parents decide when to send their children to school.'
              },
              {
                letter: 'B',
                text: "To find causes for differences in the participants' performance."
              },
              {
                letter: 'C',
                text: 'To identify students having potential to be professional athletes.'
              },
              {
                letter: 'D',
                text: 'To offer constructive suggestions for making educational policies.'
              }
            ],
            answer: 'B'
          },
          {
            n: 24,
            text: "Who were the participants in the researchers' first study?",
            options: [
              {
                letter: 'A',
                text: 'Political leaders.'
              },
              {
                letter: 'B',
                text: 'Financial analysts.'
              },
              {
                letter: 'C',
                text: 'Professional athletes.'
              },
              {
                letter: 'D',
                text: 'High-school students.'
              }
            ],
            answer: 'D'
          },
          {
            n: 25,
            text: 'According to the researchers, what is one characteristic of successful people?',
            options: [
              {
                letter: 'A',
                text: 'Leadership ability.'
              },
              {
                letter: 'B',
                text: 'Commitment to work.'
              },
              {
                letter: 'C',
                text: 'Risk-taking.'
              },
              {
                letter: 'D',
                text: 'Self-confidence.'
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
      'They will introduce a single passport policy, allowing free movement between countries.'
    ],
    '2': [
      'It also wants to establish a free-trade deal across the continent in the near future'
    ],
    '3': [
      'pumping carbon dioxide underground and turning it into stone'
    ],
    '4': [
      'for each ton of carbon dioxide buried, the technique requires 25 tons of water'
    ],
    '5': [
      'says bread consumption is on the decline, with French people eating nine grams less than in the previous year'
    ],
    '6': [
      'the association cited changing diets, in particular the switch to those low in calories'
    ],
    '7': [
      'people dedicating less time to breakfast when bread would traditionally be eaten with butter and jam'
    ],
    '8': [
      "after the rush hour, I think. We'd like to avoid the crowds if possible."
    ],
    '9': [
      'Is there any chance we could have a window seat for one of those?'
    ],
    '10': [
      'All you need to do is wait at the far end of the platform.'
    ],
    '11': [
      'When you arrive in London, hand the ticket to the guard and he will return the bicycles to you.'
    ],
    '12': [
      'There used to be many hat factories in Britain until around the 1950s. But fashion changed and most people stopped wearing hats.'
    ],
    '13': [
      "We're the only movie theatre in the whole country that only shows foreign movies."
    ],
    '14': [
      "I would have thought that in London most people don't speak foreign languages."
    ],
    '15': [
      'all movies come with English text at the bottom of the screen'
    ],
    '16': [
      'Astrid Natley, a secondary school math teacher, incorporates phones into her classroom.'
    ],
    '17': [
      'We need to teach children how to behave like the professionals they are striving to become.'
    ],
    '18': [
      "so let's leave phones and laptops at home, and show them a different world in their lessons—one of books and pens"
    ],
    '19': [
      'Kate, a six-year-old girl, helped her brother wash windows to get a reward promised by her mother'
    ],
    '20': [
      'Fifteen minutes and a few clicks later, with more than $350 worth of dolls in her cart, Kate placed the order'
    ],
    '21': [
      "her father suggested giving them to the local children's hospital"
    ],
    '22': [
      'The researchers found that the time when a person starts school has an enduring impact on their lives.'
    ],
    '23': [
      'But the Australian researchers wanted to discover what was driving these differences.'
    ],
    '24': [
      'In the first study, more than 600 high-school students were surveyed'
    ],
    '25': [
      "While risk-taking can be considered a negative attribute, it's also a characteristic of successful people"
    ]
  }
}

export default LISTENING
