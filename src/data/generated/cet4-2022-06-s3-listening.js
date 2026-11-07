// 2022年06月 第3套 CET-4 听力数据（复用第1套听力内容）
// 2022年6月全国仅考1套听力，本套听力与第1套一致；本题库沿用第1套数据
// verified: true
const LISTENING = {
  id: 'cet4-2022-06-s3',
  meta: {
    level: 'CET4',
    year: 2022,
    month: 6,
    set: 3,
    source: '原题：2022.06四级真题第1套.pdf；音频：2022年06月四级听力（全1套）.mp3；原文：2022.06英语四级解析第1套.pdf',
    answerSource: '解析 PDF（OCR 原文+核对）',
    note: '2022年6月全国仅考1套听力，本套听力与第1套一致；本题库沿用第1套数据',
    verified: true,
    verifiedAt: '2026-11-05'
  },
  audioUrls: {
    news: '/audio/cet4-2022-06-s3-a.mp3',
    conv: '/audio/cet4-2022-06-s3-b.mp3',
    pass: '/audio/cet4-2022-06-s3-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2022-06-s3-n1.mp3',
        transcript: "A new study finds that beverages containing added sugar might be harmful. In the study, researchers analyzed information from over 80,000 women and 37,000 men. Participants worked in the health profession. They were followed for approximately three decades. They completed surveys about their diet every four years. They also answered questions about sleep and exercise and health every two years. The more beverages containing added sugar that people drank, the greater their risk of death was during the study period. These beverages included soda, energy drinks and sports drinks. Beverages like pure fruit juice which are sweet but do not contain added sugar were not part of the study. The findings held even after the researchers considered other factors that could affect people's health. These factors included lack of exercise and not eating enough vegetables. They also included consuming too much meat. The scientists say that their results support limiting beverages with added sugar. They argue we should replace them with other drinks, with water being the best choice. However, the researchers admit this is simply their recommendation. The study found only an association. It did not prove that drinks with added sugar cause early death.",
        questions: [
          {
            n: 1,
            text: 'What do we learn about the new study from the news report?',
            options: [
              {
                letter: 'A',
                text: 'It studied the effects of exercise on sleep.'
              },
              {
                letter: 'B',
                text: 'Its participants came from various walks of life.'
              },
              {
                letter: 'C',
                text: 'Its findings confirmed those of previous studies.'
              },
              {
                letter: 'D',
                text: 'It ran for as long as some thirty years.'
              }
            ],
            answer: 'D'
          },
          {
            n: 2,
            text: "What is the scientists' recommendation?",
            options: [
              {
                letter: 'A',
                text: 'Eating more vegetables instead of meats.'
              },
              {
                letter: 'B',
                text: 'Drinking water instead of beverages with added sugar.'
              },
              {
                letter: 'C',
                text: 'Consuming more energy drinks and sports drinks.'
              },
              {
                letter: 'D',
                text: 'Forming the habit of exercising regularly.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2022-06-s3-n2.mp3',
        transcript: 'German police appealed Friday for information about the possible owners of two 17th-century oil paintings. Police said a 64-year-old man found the paintings in a garbage pile at a highway rest stop last month. He later handed them in to the Cologne police. An initial assessment by an art expert concluded the two framed paintings were originals, police said. One is a landscape painted by the Italian artist Pietro Bellotti dating to 1665. The other is a painting of a boy by the 17th-century Dutch artist Samuel van Hoogstraten, date unknown. Their combined worth is estimated to be around one million euros. Authorities have not yet confirmed what will happen if the rightful owner is not found. Nevertheless, it is speculated that they could either be handed over to the National Art Museum of Cologne or sold to the public by the local government.',
        questions: [
          {
            n: 3,
            text: 'What did German police say about a 64-year-old man?',
            options: [
              {
                letter: 'A',
                text: 'He asked them about his lost paintings.'
              },
              {
                letter: 'B',
                text: 'He knew the owner of two missing paintings.'
              },
              {
                letter: 'C',
                text: 'He left his paintings at a highway rest stop.'
              },
              {
                letter: 'D',
                text: 'He found two 17th-century oil paintings.'
              }
            ],
            answer: 'D'
          },
          {
            n: 4,
            text: "What is the art expert's conclusion about the two framed paintings?",
            options: [
              {
                letter: 'A',
                text: 'They are imitations.'
              },
              {
                letter: 'B',
                text: 'They are originals.'
              },
              {
                letter: 'C',
                text: 'They were stolen by an Italian boy.'
              },
              {
                letter: 'D',
                text: 'They came from the same artist.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2022-06-s3-n3.mp3',
        transcript: "A four-year-old girl has walked eight kilometers through a snowy forest to seek help for her sick grandmother who later died of a heart attack. The young girl braved the threat of bears, wolves and temperatures far below freezing. She made the journey through a remote region in Siberia after waking up to find her grandmother motionless. Named locally as Karla, she lives alone with her elderly grandmother and her blind grandfather. As a result, the girl's mother is facing a criminal case. She stands accused of leaving a minor in danger in the care of the elderly. She also faces investigation from childcare services, who will also be asking why Karla was left alone with her vulnerable relatives. The journey took place in February when temperatures average negative 26 degrees Celsius. Russian reports on social media suggest the forest may have been as cold as negative 34 degrees Celsius. The journey was only recently confirmed by authorities. But though she was suffering from the effects of extreme cold, the child reportedly suffered no life-threatening effects. Last year, a three-year-old boy survived alone for three days in a remote forest in the same region.",
        questions: [
          {
            n: 5,
            text: 'What did the four-year-old girl attempt to do?',
            options: [
              {
                letter: 'A',
                text: 'Look after her grandfather.'
              },
              {
                letter: 'B',
                text: 'Leave the remote cold region.'
              },
              {
                letter: 'C',
                text: 'Save her sick grandmother.'
              },
              {
                letter: 'D',
                text: 'Flee from the threat of bears.'
              }
            ],
            answer: 'C'
          },
          {
            n: 6,
            text: "What do we learn from the news report about the girl's mother?",
            options: [
              {
                letter: 'A',
                text: 'She has to face a criminal charge.'
              },
              {
                letter: 'B',
                text: 'She was found lying motionless in the snow.'
              },
              {
                letter: 'C',
                text: 'She searched for her daughter in freezing cold.'
              },
              {
                letter: 'D',
                text: 'She works in childcare services.'
              }
            ],
            answer: 'A'
          },
          {
            n: 7,
            text: 'What happened to the little girl according to the news report?',
            options: [
              {
                letter: 'A',
                text: 'She was found in a forest after three days.'
              },
              {
                letter: 'B',
                text: 'She lay totally unconscious for three days.'
              },
              {
                letter: 'C',
                text: 'She suffered from the effects of severe cold.'
              },
              {
                letter: 'D',
                text: 'She was finally rescued by her relatives.'
              }
            ],
            answer: 'C'
          }
        ]
      }
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2022-06-s3-c1.mp3',
        transcript: "W: I've made a new friend recently. Her name is Susan and she's from South Africa. M: How did you meet her? W: We met over WeChat. She has very cool photos on her social media. The photos of her hometown look amazing. M: What's her hometown called? W: It's called Cape Town. It's in the southwest of South Africa. She says it's very green and windy. The city was built by European settlers. And there's a big mountain that overlooks the city. The mountain is called Table Mountain because it's flat at the top. M: That sounds interesting. What are the people there like? W: Well, Susan says South Africa is very mixed. There are black people and white people and Indian people. Susan is white. She says her ancestors were from Britain. Many languages are spoken in South Africa, but she only speaks English. M: Didn't South Africa host the Football World Cup a few years ago? They must play football a lot then, right? W: I think they play football, but it's not as popular as rugby. M: Rugby? What's rugby? W: Rugby is a sport with two teams and the players carry the ball in their arms and throw it at each other. The ball is not round and the players push each other. I don't really understand the rules. I think it's very complicated. M: That sounds like a very strange sport indeed. Is it only South Africa that plays it? W: No, it's also popular in Britain and in other former British colonies like Australia and New Zealand.",
        questions: [
          {
            n: 8,
            text: 'What does the woman say about her new friend Susan?',
            options: [
              {
                letter: 'A',
                text: 'She shows a real passion for taking photos.'
              },
              {
                letter: 'B',
                text: 'She has just returned from her hometown.'
              },
              {
                letter: 'C',
                text: 'She comes from the city of Cape Town.'
              },
              {
                letter: 'D',
                text: 'She has a truly amazing appearance.'
              }
            ],
            answer: 'C'
          },
          {
            n: 9,
            text: 'What does the woman say about Table Mountain?',
            options: [
              {
                letter: 'A',
                text: 'It is as famous as Cape Town.'
              },
              {
                letter: 'B',
                text: 'It has a flat surface at the top.'
              },
              {
                letter: 'C',
                text: 'It is green and free from pollution.'
              },
              {
                letter: 'D',
                text: 'It was named by European settlers.'
              }
            ],
            answer: 'B'
          },
          {
            n: 10,
            text: "What do we learn from the conversation about the woman's friend Susan?",
            options: [
              {
                letter: 'A',
                text: 'She has British ancestors.'
              },
              {
                letter: 'B',
                text: 'She is of mixed blood.'
              },
              {
                letter: 'C',
                text: 'She grew up in India.'
              },
              {
                letter: 'D',
                text: 'She speaks several languages.'
              }
            ],
            answer: 'A'
          },
          {
            n: 11,
            text: 'What does the woman say about rugby in South Africa?',
            options: [
              {
                letter: 'A',
                text: 'It is an extremely violent sport.'
              },
              {
                letter: 'B',
                text: 'It is becoming a national sport.'
              },
              {
                letter: 'C',
                text: 'It is originated in New Zealand.'
              },
              {
                letter: 'D',
                text: 'It is more popular than football.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2022-06-s3-c2.mp3',
        transcript: "M: Hi, Jennifer. I'm really struggling with this semester's workload. Do you have any advice? W: Have you considered making a study guide? It's a tool you can make yourself to take the stress out of studying. I've been using one since the start of last semester, and it has really helped relieve a lot of study pressure. M: Sounds like just what I need. My main problem is that my study folder is full of notes and worksheets, and is badly disorganized. I don't know where to start. W: Okay. Well, the main thing is to have everything in the right place. Whatever you're reviewing, it's important that it's arranged for your particular needs of that subject, and in the most user-friendly way you can. What kind of learner are you? M: Um, I'm not sure. W: Well, visual learners prefer using images, pictures, colors, and maps to organize information. Logical learners have a linear mind and would rather use logic, reasoning and systems. I'm an emotional learner, which means I need to connect to information emotionally to understand it. M: Oh! I'm very much dependent on vision as a way of taking in information. W: Well, I suggest reorganizing your notes using color-coded sections in your study guides, or using idea mapping to lay out the information and make it more quickly accessible. M: So you think I should arrange my notes using color and pictures in place of text. W: Yes, you'll probably start to grasp information a lot quicker that way. As an emotional learner, I organize my notes into a story that I can connect to and recite to myself. M: That's amazing. I didn't know there were so many different ways to learn.",
        questions: [
          {
            n: 12,
            text: 'What does the woman advise the man to do?',
            options: [
              {
                letter: 'A',
                text: 'Prepare a study guide.'
              },
              {
                letter: 'B',
                text: 'Consult his advisors.'
              },
              {
                letter: 'C',
                text: 'Go over his notes regularly.'
              },
              {
                letter: 'D',
                text: 'Take stress-relief sessions.'
              }
            ],
            answer: 'A'
          },
          {
            n: 13,
            text: 'What is the biggest problem the man has with his studies?',
            options: [
              {
                letter: 'A',
                text: 'His worksheets are terribly messy.'
              },
              {
                letter: 'B',
                text: 'He finds the workload too heavy.'
              },
              {
                letter: 'C',
                text: 'His study folder is badly disorganized.'
              },
              {
                letter: 'D',
                text: 'He has difficulty taking notes quickly.'
              }
            ],
            answer: 'C'
          },
          {
            n: 14,
            text: 'What kind of learner does the woman say she is?',
            options: [
              {
                letter: 'A',
                text: 'A visual learner.'
              },
              {
                letter: 'B',
                text: 'An emotional learner.'
              },
              {
                letter: 'C',
                text: 'An organized learner.'
              },
              {
                letter: 'D',
                text: 'A logical learner.'
              }
            ],
            answer: 'B'
          },
          {
            n: 15,
            text: 'What does the woman think the man can do with his notes?',
            options: [
              {
                letter: 'A',
                text: 'Arrange them using color and pictures.'
              },
              {
                letter: 'B',
                text: 'Restructure them in a logical way.'
              },
              {
                letter: 'C',
                text: 'Commit them to memory after class.'
              },
              {
                letter: 'D',
                text: 'Organize them into a well-connected story.'
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
        audio: '/audio/cet4-2022-06-s3-p1.mp3',
        transcript: "The golden rule is a moral principle which states that you should treat others the way you want to be treated yourself. For example, if you want people to treat you with respect, you should treat them with respect. Different people tend to be exposed to different forms of the golden rule, based on factors such as the religion in their society. However, all forms of the golden rule revolve around the same concept. Namely, they help you treat others better, by using the way you yourself would want to be treated as a guide of how to behave. A notable criticism of the golden rule is that its application can lead to undesirable outcomes, when it conflicts with laws and ethical principles. For example, if someone breaks the law, the golden rule would suggest that we should let them go, because we would not want to be punished ourselves. However, this issue with the golden rule can be dealt with in a general manner, by viewing this principle as one of several principles that we use to guide our behavior as individuals and as a society. Specifically, in the example described above, most individuals and societies choose to place laws and ethical principles above the golden rule. This means that they strive to implement the golden rule whenever possible, as long as it doesn't clash with a more important concept.",
        questions: [
          {
            n: 16,
            text: 'What do we learn from the passage about the golden rule?',
            options: [
              {
                letter: 'A',
                text: "It is mainly based on a society's religion."
              },
              {
                letter: 'B',
                text: 'It is interpreted differently in different times.'
              },
              {
                letter: 'C',
                text: 'It is a code of conduct based on laws and ethics.'
              },
              {
                letter: 'D',
                text: "It is a moral principle to guide people's behavior."
              }
            ],
            answer: 'D'
          },
          {
            n: 17,
            text: 'What is a notable criticism of the golden rule?',
            options: [
              {
                letter: 'A',
                text: 'It may lead to misunderstanding despite good intentions.'
              },
              {
                letter: 'B',
                text: 'It assumes that human beings are all good-natured.'
              },
              {
                letter: 'C',
                text: 'It may sometimes produce undesirable outcomes.'
              },
              {
                letter: 'D',
                text: 'It fails to consider the complexity of human relationships.'
              }
            ],
            answer: 'C'
          },
          {
            n: 18,
            text: 'What does the example of someone breaking the law serve to show?',
            options: [
              {
                letter: 'A',
                text: 'The golden rule is often in conflict with certain laws and ethical principles.'
              },
              {
                letter: 'B',
                text: 'The golden rule must sometimes give way to more important principles.'
              },
              {
                letter: 'C',
                text: 'Failure to follow the golden rule may lead to violation of laws and ethics.'
              },
              {
                letter: 'D',
                text: 'Observing the golden rule is the first step to becoming a responsible citizen.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2022-06-s3-p2.mp3',
        transcript: "Today, many large corporations stress the importance of diversity on their websites, but current statistics show that the typical manager in America still tends to be white and male. Obviously, the desire to bring about diversity has not translated into corporate reality. Why is this? A team of researchers from the University of Basel published their new study about people's attitudes towards diversity at work. They found that people have a wide range of opinions concerning diversity. On the one hand, many see value in diversity, which can contribute a variety of perspectives, encourage new ideas, and generate innovative solutions. On the other hand, they assume that it might be difficult to work with someone who has completely different views, speaks a different language, or has a different style of work. The actual value they attribute to diversity depends on the decision-making perspective. Doubts about the practicability of diversity have a greater weight if a person is directly affected. In other words, when a person's own work group is involved, they tend to prefer team members who are similar to themselves. But when people make decisions for others, they typically put together a more diverse team. These findings could help organizations become more diverse. Companies need to pay attention to who makes hiring and team decisions. These decisions should not only be made by those directly affected. People who are not directly involved in the group's daily work should also take part.",
        questions: [
          {
            n: 19,
            text: 'What do we learn from the current statistics about diversity in large corporations?',
            options: [
              {
                letter: 'A',
                text: 'Many of them find it rather difficult to manage.'
              },
              {
                letter: 'B',
                text: 'They have not seen as much diversity as desired.'
              },
              {
                letter: 'C',
                text: 'Many of them have an increasingly diversified staff.'
              },
              {
                letter: 'D',
                text: 'They have not quite grasped the concept of diversity.'
              }
            ],
            answer: 'B'
          },
          {
            n: 20,
            text: 'What is the newly published study focused on?',
            options: [
              {
                letter: 'A',
                text: 'Initiatives to achieve diversity in large corporations.'
              },
              {
                letter: 'B',
                text: 'Advantages and disadvantages of a diversified team.'
              },
              {
                letter: 'C',
                text: "People's attitudes towards diversity at the workplace."
              },
              {
                letter: 'D',
                text: 'Innovative ideas and solutions resulting from diversity.'
              }
            ],
            answer: 'C'
          },
          {
            n: 21,
            text: 'What do the findings of the new study show?',
            options: [
              {
                letter: 'A',
                text: 'People prefer to work with team members similar to themselves.'
              },
              {
                letter: 'B',
                text: "Employers attach great importance to their corporations' diversity."
              },
              {
                letter: 'C',
                text: 'Employers differ from employees in their perspectives on diversity.'
              },
              {
                letter: 'D',
                text: 'Doubts about the practicability of diversity are gradually disappearing.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2022-06-s3-p3.mp3',
        transcript: "Communication can essentially be divided into two categories: the written and the spoken. How the balance is struck between these two forms of communication—the point at which one needs to be exchanged for another—really depends on individual cultures. Understanding when it's appropriate to exchange one form for another can be a major key to success in international business. Many cultures place a much greater value on the spoken word than the American working culture does. In parts of the Middle East, you'll find spoken word agreements are seen as seriously binding. A person's word is linked to their honor, so verbal agreements are seen as important, whereas written contracts are taken as memos of understanding. Western working culture tends to place a high value on the written word, and this reaches its highest level of intensity when it comes to contracts. In the US, France and Germany, written contracts tend to be seen as something that must be strictly carried out. By contrast, other cultures may not see written contracts as quite so binding. It can prove a challenge to Western businesses if your business partner wants to renegotiate terms that you thought were already agreed on. For example, a Japanese firm may have signed a contract, but they may not feel bound by every detail of it—particularly if circumstances later change. Such differences in value that different working cultures place on the written word tend to cause many problems when it comes to business relationships.",
        questions: [
          {
            n: 22,
            text: 'What is a major key to success in international business according to the passage?',
            options: [
              {
                letter: 'A',
                text: 'Choosing the best time for signing a business contract.'
              },
              {
                letter: 'B',
                text: "Changing one's form of communication from time to time."
              },
              {
                letter: 'C',
                text: 'Laying equal stress on written and spoken communication.'
              },
              {
                letter: 'D',
                text: 'Using different forms of communication appropriately.'
              }
            ],
            answer: 'D'
          },
          {
            n: 23,
            text: 'What does the passage say about spoken word agreements in some Middle East countries?',
            options: [
              {
                letter: 'A',
                text: 'They are regarded as seriously binding.'
              },
              {
                letter: 'B',
                text: 'They are seldom honored by business partners.'
              },
              {
                letter: 'C',
                text: 'They are taken as memos of understanding.'
              },
              {
                letter: 'D',
                text: 'They are to be confirmed in written form.'
              }
            ],
            answer: 'A'
          },
          {
            n: 24,
            text: 'What do we learn about the Western working culture?',
            options: [
              {
                letter: 'A',
                text: 'It has reached the highest level of evolution.'
              },
              {
                letter: 'B',
                text: 'It places a high value on written contracts.'
              },
              {
                letter: 'C',
                text: 'It regards written contracts as unalterable.'
              },
              {
                letter: 'D',
                text: 'It has seen a decline in verbal agreements.'
              }
            ],
            answer: 'B'
          },
          {
            n: 25,
            text: 'How does a Japanese firm tend to view a written contract?',
            options: [
              {
                letter: 'A',
                text: 'Its details cannot be renegotiated.'
              },
              {
                letter: 'B',
                text: 'It has to be carried out to the letter.'
              },
              {
                letter: 'C',
                text: 'It strengthens business partnerships.'
              },
              {
                letter: 'D',
                text: 'Its terms may not be strictly binding.'
              }
            ],
            answer: 'D'
          }
        ]
      }
    ]
  },
  answerQuotes: {
    '1': [
      'They were followed for approximately three decades.'
    ],
    '2': [
      'They argue we should replace them with other drinks, with water being the best choice.'
    ],
    '3': [
      'Police said a 64-year-old man found the paintings in a garbage pile at a highway rest stop last month.'
    ],
    '4': [
      'An initial assessment by an art expert concluded the two framed paintings were originals, police said.'
    ],
    '5': [
      'A four-year-old girl has walked eight kilometers through a snowy forest to seek help for her sick grandmother'
    ],
    '6': [
      "As a result, the girl's mother is facing a criminal case."
    ],
    '7': [
      'But though she was suffering from the effects of extreme cold, the child reportedly suffered no life-threatening effects.'
    ],
    '8': [
      "It's called Cape Town. It's in the southwest of South Africa."
    ],
    '9': [
      "The mountain is called Table Mountain because it's flat at the top."
    ],
    '10': [
      'Susan is white. She says her ancestors were from Britain.'
    ],
    '11': [
      "I think they play football, but it's not as popular as rugby."
    ],
    '12': [
      'Have you considered making a study guide?'
    ],
    '13': [
      'My main problem is that my study folder is full of notes and worksheets, and is badly disorganized.'
    ],
    '14': [
      "I'm an emotional learner, which means I need to connect to information emotionally to understand it."
    ],
    '15': [
      'I suggest reorganizing your notes using color-coded sections in your study guides',
      'So you think I should arrange my notes using color and pictures in place of text.'
    ],
    '16': [
      'The golden rule is a moral principle which states that you should treat others the way you want to be treated yourself.'
    ],
    '17': [
      'A notable criticism of the golden rule is that its application can lead to undesirable outcomes, when it conflicts with laws and ethical principles.'
    ],
    '18': [
      'most individuals and societies choose to place laws and ethical principles above the golden rule.'
    ],
    '19': [
      'current statistics show that the typical manager in America still tends to be white and male',
      'Obviously, the desire to bring about diversity has not translated into corporate reality.'
    ],
    '20': [
      "published their new study about people's attitudes towards diversity at work"
    ],
    '21': [
      "when a person's own work group is involved, they tend to prefer team members who are similar to themselves."
    ],
    '22': [
      "Understanding when it's appropriate to exchange one form for another can be a major key to success in international business."
    ],
    '23': [
      "In parts of the Middle East, you'll find spoken word agreements are seen as seriously binding."
    ],
    '24': [
      'Western working culture tends to place a high value on the written word'
    ],
    '25': [
      'a Japanese firm may have signed a contract, but they may not feel bound by every detail of it'
    ]
  }
}

export default LISTENING
