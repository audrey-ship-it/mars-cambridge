// 2023年12月 第2套 CET-4 听力数据（复用第1套听力内容）
// 2023年12月全国共考2套听力，本套听力与前两套内容相同，仅顺序不同；本题库沿用第1套数据
// verified: true
const LISTENING = {
  id: 'cet4-2023-12-s2',
  meta: {
    level: 'CET4',
    year: 2023,
    month: 12,
    set: 2,
    source: '原题：2023.12四级真题第1套【可复制可检索】.pdf；音频：2023年12月四级听力音频第1套.mp3；原文：2023.12英语四级真题第1套解析.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
    note: '2023年12月全国共考2套听力，本套听力与前两套内容相同，仅顺序不同；本题库沿用第1套数据'
  },
  audioUrls: {
    news: '/audio/cet4-2023-12-s2-a.mp3',
    conv: '/audio/cet4-2023-12-s2-b.mp3',
    pass: '/audio/cet4-2023-12-s2-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2023-12-s2-n1.mp3',
        transcript: "Have you noticed how similar you are to your friends? It may be because your brains operate in harmony with each other. We know that friends are more likely to be the same age, gender and ethnic background as each other. Now it seems their brains are alike, too. Researchers at the University of California scanned the brains of 42 classmates while they watched videos intended to provoke varying responses. Some people might find a romantic scene touching, for instance, while others would feel it was embarrassing. The activity of friends' brains was more similar than that of people who didn't know each other, particularly in regions involved in attention, emotion and language. This similarity was strong enough that it could be used to predict whether two people were already friends or not. The relationship probably goes two ways. We are drawn to people who think like us; we then influence their thoughts over time, which may push their brain activity into more closely resembling our own.",
        questions: [
          {
            n: 1,
            text: 'What may be the reason that friends are similar to each other according to the recent research?',
            options: [
              {
                letter: 'A',
                text: 'Their brains work in harmony.'
              },
              {
                letter: 'B',
                text: 'They are generally the same age.'
              },
              {
                letter: 'C',
                text: 'Their interests are quite similar.'
              },
              {
                letter: 'D',
                text: 'They have the same ethnic background.'
              }
            ],
            answer: 'A'
          },
          {
            n: 2,
            text: 'What does the news report say about the relationship between friends?',
            options: [
              {
                letter: 'A',
                text: 'It can be touching.'
              },
              {
                letter: 'B',
                text: 'It is hard to predict.'
              },
              {
                letter: 'C',
                text: 'It can work both ways.'
              },
              {
                letter: 'D',
                text: 'It resembles family ties.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2023-12-s2-n2.mp3',
        transcript: "Two men who have been best friends for 60 years have just realized they are actually brothers. It's reported that Alan Robinson and Walter MacDonald met in the 6th grade at a school in Hawaii. They have been best friends ever since. Alan was given away for adoption soon after he was born, and Walter never knew his father. So recently, they made separate attempts on DNA matching websites to discover more about their ancestry. Walter was astonished to find that he matched with website user Rob737. He knew immediately that this was his best friend Alan, whose friends call him Robi and flew 737 airplanes when he was a pilot. The pair were born to the same mother 15 months apart.",
        questions: [
          {
            n: 3,
            text: 'What did both Alan Robinson and Walter MacDonald attempt to do on DNA matching websites?',
            options: [
              {
                letter: 'A',
                text: 'Search for their half-brothers.'
              },
              {
                letter: 'B',
                text: 'Identify their biological fathers.'
              },
              {
                letter: 'C',
                text: 'Find out more about their ancestry.'
              },
              {
                letter: 'D',
                text: 'See whether they are actually related.'
              }
            ],
            answer: 'C'
          },
          {
            n: 4,
            text: 'What did the news report say about Alan Robinson and Walter MacDonald?',
            options: [
              {
                letter: 'A',
                text: 'They were both given up for adoption.'
              },
              {
                letter: 'B',
                text: 'They were born to the same mother.'
              },
              {
                letter: 'C',
                text: 'They flew 737 airplanes as pilots.'
              },
              {
                letter: 'D',
                text: 'They were both 60 years of age.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2023-12-s2-n3.mp3',
        transcript: "Amid all the election drama, air pollution problems and disease outbreaks, five tourists' good work is being spread online. Yesterday two male and three female tourists were spotted walking the kilometer-long beach, picking up trash. One of the male tourists from Australia commented that although there was a lot of trash, nobody was doing anything. The beach was not as nice or beautiful as it should be. He felt so sad to see such a gorgeous place littered with so much trash. Thus, he and his friends decided to grab a few trash bags and clean it all up. A man passing by decided to video their good deed and put it on the internet. It was unclear where the rest of the group was from, but they were most likely traveling together. One local woman commented on being embarrassed that tourists were cleaning up their beach. Another mentioned that it was actually the natives who brought food and drinks then left trash all along the island.",
        questions: [
          {
            n: 5,
            text: 'Why did one of the male tourists feel sad?',
            options: [
              {
                letter: 'A',
                text: 'One of his friends was caught littering.'
              },
              {
                letter: 'B',
                text: 'Other tourists refused to join in the cleanup.'
              },
              {
                letter: 'C',
                text: 'The beautiful beach was spoiled with lots of trash.'
              },
              {
                letter: 'D',
                text: 'The kilometer-long beach was practically deserted.'
              }
            ],
            answer: 'C'
          },
          {
            n: 6,
            text: 'Who put the good deed video on the internet?',
            options: [
              {
                letter: 'A',
                text: 'A passerby.'
              },
              {
                letter: 'B',
                text: 'A local woman.'
              },
              {
                letter: 'C',
                text: 'The beach authorities.'
              },
              {
                letter: 'D',
                text: 'One of the five tourists.'
              }
            ],
            answer: 'A'
          },
          {
            n: 7,
            text: 'Why did one local woman say she was embarrassed?',
            options: [
              {
                letter: 'A',
                text: "The tourists' good deed was not noticed by the locals."
              },
              {
                letter: 'B',
                text: 'Some natives were selling poor-quality food to tourists.'
              },
              {
                letter: 'C',
                text: 'The number of tourists to the beach is on a steady decline.'
              },
              {
                letter: 'D',
                text: 'It was tourists not natives who were cleaning up the beach.'
              }
            ],
            answer: 'D'
          }
        ]
      }
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2023-12-s2-c1.mp3',
        transcript: "W: Hello Benjamin, Dan and I will be going for a run along the canal Saturday morning. Would you like to join us? M: I'd love to, but I hurt my ankle last weekend playing football with work colleagues. W: Oh dear, is it serious? M: No, not at all. I landed badly during a fall and twisted it a little, but it's no big deal. It's just a little swollen and I should be fine for next Saturday if you still want to go for a jog then. W: I won't be here next Saturday. I'm going to the zoo. M: The zoo? W: Yeah. My little nephew turns six, and he loves the zoo, so the whole family is going. M: Oh, okay then. I haven't been to a zoo since I was a kid. W: They are nowhere near as popular as they used to be when we were children. I personally feel sorry for the poor animals stuck in cages, but there's no denying they are fun and educational for children. M: Do you know if Dan will be around next Saturday? W: Yeah, I think he will. Just send him a text message. He's always keen on physical activities. M: That's true. Dan is extremely fit and healthy. He goes to the gym most days, plus tennis two or three times a week. W: So, what have you been doing to stay busy while you've had that swollen ankle? M: I've been catching up on some reading. I was given three books over Christmas, and I'm only now getting around to reading them.",
        questions: [
          {
            n: 8,
            text: "Why can't the man go for a run Saturday morning?",
            options: [
              {
                letter: 'A',
                text: 'He has to play football with workmates.'
              },
              {
                letter: 'B',
                text: 'He has got some books to read.'
              },
              {
                letter: 'C',
                text: 'He is going to visit a friend.'
              },
              {
                letter: 'D',
                text: 'He is physically unfit for it.'
              }
            ],
            answer: 'D'
          },
          {
            n: 9,
            text: "Why is the woman's whole family going to the zoo next Saturday?",
            options: [
              {
                letter: 'A',
                text: 'To teach kids about animal protection.'
              },
              {
                letter: 'B',
                text: 'To learn how popular zoos could be.'
              },
              {
                letter: 'C',
                text: 'To see some rare animals in cages.'
              },
              {
                letter: 'D',
                text: 'To give her little nephew a treat.'
              }
            ],
            answer: 'D'
          },
          {
            n: 10,
            text: "What do we learn about Dan from the man's description?",
            options: [
              {
                letter: 'A',
                text: 'He enjoys excellent health.'
              },
              {
                letter: 'B',
                text: 'He is keen on extreme sports.'
              },
              {
                letter: 'C',
                text: 'He coaches tennis players every week.'
              },
              {
                letter: 'D',
                text: 'He spends most of his time in the gym.'
              }
            ],
            answer: 'A'
          },
          {
            n: 11,
            text: 'What has the man been doing since last weekend?',
            options: [
              {
                letter: 'A',
                text: 'Tending to his swollen ankle.'
              },
              {
                letter: 'B',
                text: 'Concentrating on reading.'
              },
              {
                letter: 'C',
                text: 'Writing three book reports.'
              },
              {
                letter: 'D',
                text: 'Planning Christmas celebrations.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2023-12-s2-c2.mp3',
        transcript: "W: Our guest on today's Book Talk is John Black, the author of the new bestseller, Retire Early. M: Thanks for having me on the show, Lisa. W: John, your book is getting a lot of attention, partly because you write that most people can retire by 40. Is that realistic? M: Definitely. When researching this book, I interviewed hundreds of people who retired by 40. W: Okay, but how much money does a person need to retire? I've read articles recommending one million dollars as a good figure for retirement. M: While most financial planners do give numbers, I don't think that's useful, as people are living in different areas with different costs of living, and have different needs and wants, which is why I suggest that people aim for financial independence. W: What do you mean by financial independence? M: Having investment income that's greater than monthly expenses. W: That sounds risky to me. What if an accident happens or you get ill and need medical treatment? Shouldn't people have extra cash for emergencies? M: Too many people spend their lives working on jobs they hate because they're afraid, so I counsel people to take risks. Retirement doesn't have to be permanent, and if people need to, they can go back to work. W: But it's not always easy to get back into the workforce after an extended absence. M: True, but if you keep current with your skills, you will be attracted to employers. W: Maybe, but how can anyone save enough to retire by 40 when most people can't retire at 60? M: Simple, by cutting housing, food, and transport expenses, and investing half your monthly income. W: That sounds impossible. M: I admit it's difficult, but it has worked for thousands.",
        questions: [
          {
            n: 12,
            text: "What do we learn about the man's book published recently?",
            options: [
              {
                letter: 'A',
                text: 'It is being debated by hundreds of retirees.'
              },
              {
                letter: 'B',
                text: "It is attracting many people's attention."
              },
              {
                letter: 'C',
                text: 'It partly records his own experience.'
              },
              {
                letter: 'D',
                text: 'It argues for postponing retirement.'
              }
            ],
            answer: 'B'
          },
          {
            n: 13,
            text: 'What do the articles the woman read recommend?',
            options: [
              {
                letter: 'A',
                text: 'One should foresee a financial crisis.'
              },
              {
                letter: 'B',
                text: "One should trust financial planners' figures."
              },
              {
                letter: 'C',
                text: 'One should have one million dollars to retire.'
              },
              {
                letter: 'D',
                text: 'One should start saving as early as possible.'
              }
            ],
            answer: 'C'
          },
          {
            n: 14,
            text: 'What does the man say about retirement?',
            options: [
              {
                letter: 'A',
                text: "It doesn't need to be permanent."
              },
              {
                letter: 'B',
                text: "It shouldn't be considered risky."
              },
              {
                letter: 'C',
                text: 'It helps to reduce travel expenses.'
              },
              {
                letter: 'D',
                text: 'It is the way to quit a job one hates.'
              }
            ],
            answer: 'A'
          },
          {
            n: 15,
            text: 'How does the man say his proposal about retirement can be carried out?',
            options: [
              {
                letter: 'A',
                text: "By keeping close contact with one's employers."
              },
              {
                letter: 'B',
                text: 'By retiring when one reaches sixty years old.'
              },
              {
                letter: 'C',
                text: "By investing half of one's monthly income."
              },
              {
                letter: 'D',
                text: 'By following the counsel of financial planners.'
              }
            ],
            answer: 'C'
          }
        ]
      }
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2023-12-s2-p1.mp3',
        transcript: "New research from America studies the role that the presence of individuals from different social or racial groups has in influencing consumers' food choices. This research found college students were more likely to choose healthy food in the presence of an observer of a different race, as opposed to an observer from their own race. The same was true when they were with someone from a different university, compared to someone from their own. Researchers say this was because participants anticipated more negative judgment from an outsider group. In contrast, they felt less judged by members of their own group. In one experiment, participants were offered the choice between candy and fruit as a snack. When in the presence of an unknown student from their own university, only 12 per cent of students selected the healthier option. However, this number was 31 per cent when in the presence of an unknown student from another university. Other experiments showed similar results based on racial group. What's the reason for this pattern? The study found that people feel judged to a larger extent by members of other groups. Because of this, they strategically use healthy food choices to make a positive impression. There have been many attempts to help consumers make healthier choices, but consumers often struggle to maintain a healthy diet. This research finds that one way to promote a healthy diet could be to advertise the social benefits of healthy choices.",
        questions: [
          {
            n: 16,
            text: "What was the finding of the new research from America about consumers' food choices?",
            options: [
              {
                letter: 'A',
                text: 'They tended to be easily anticipated by those belonging to their own race.'
              },
              {
                letter: 'B',
                text: 'They tended to be arbitrarily judged by individuals of opposing groups.'
              },
              {
                letter: 'C',
                text: 'They were readily shared among members of the same social or racial group.'
              },
              {
                letter: 'D',
                text: 'They were influenced by the presence of someone from an outsider group.'
              }
            ],
            answer: 'D'
          },
          {
            n: 17,
            text: 'When did 31 per cent of students in the experiment select the healthier option?',
            options: [
              {
                letter: 'A',
                text: 'When they tried to make a positive impression on the researchers.'
              },
              {
                letter: 'B',
                text: 'When an unknown student from another university was present.'
              },
              {
                letter: 'C',
                text: 'When an experimenter from the research team took notice.'
              },
              {
                letter: 'D',
                text: 'When they were offered both candy and fruit as a snack.'
              }
            ],
            answer: 'B'
          },
          {
            n: 18,
            text: 'How could a healthy diet be promoted according to the findings of the new research?',
            options: [
              {
                letter: 'A',
                text: 'By advertising its social benefits.'
              },
              {
                letter: 'B',
                text: 'By teaching consumers diet strategies.'
              },
              {
                letter: 'C',
                text: 'By supporting struggling consumers.'
              },
              {
                letter: 'D',
                text: 'By maintaining its positive image.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2023-12-s2-p2.mp3',
        transcript: `For college students under pressure, a dog may be the best stress fighter around, according to the finding of a recent study. "It's a really powerful finding," said Patricia Pendry, who led the study. "Universities are doing a lot of great work trying to help students succeed academically, especially those who may be at risk due to a history of mental health issues or academic and learning issues. This study shows that traditional stress management approaches aren't as effective for this population compared with programs that focus on providing opportunities to interact with therapy dogs." The researchers measured executive functioning in the students involved in the study. Executive function is a term for the skills one needs to plan, organize, motivate, concentrate and memorize. These are skills students need to succeed in college. The researchers found that students who were most at risk had the most improvements in executive functioning after interacting with therapy dogs. These results remained when researchers followed up six weeks later. Many universities provide academic stress management programs and workshops. These are traditionally very similar to college classes. They often talk about ways to get more sleep, set goals, or manage stress or anxiety. Pendry acknowledges that these are really important topics and these workshops help typical students succeed. But they're less helpful for struggling students. Pendry believes those students may experience the programs as another lecture and feel even more stressed.`,
        questions: [
          {
            n: 19,
            text: 'What does the recent study led by Patricia Pendry aim to examine?',
            options: [
              {
                letter: 'A',
                text: 'The academic and learning issues struggling students encounter.'
              },
              {
                letter: 'B',
                text: 'The risk students face due to a history of mental health problems.'
              },
              {
                letter: 'C',
                text: 'The effect of interacting with therapy dogs on students under pressure.'
              },
              {
                letter: 'D',
                text: 'The work universities are doing to help students succeed academically.'
              }
            ],
            answer: 'C'
          },
          {
            n: 20,
            text: 'What did the new study measure in the participants?',
            options: [
              {
                letter: 'A',
                text: 'Their communicative skills.'
              },
              {
                letter: 'B',
                text: 'Their executive functioning.'
              },
              {
                letter: 'C',
                text: 'Their academic networking.'
              },
              {
                letter: 'D',
                text: 'Their leadership capacities.'
              }
            ],
            answer: 'B'
          },
          {
            n: 21,
            text: 'What does Patricia Pendry think traditional stress management programs may do?',
            options: [
              {
                letter: 'A',
                text: 'Rid students of their anxiety.'
              },
              {
                letter: 'B',
                text: "Add to some students' stress."
              },
              {
                letter: 'C',
                text: "Contribute little to typical students' success."
              },
              {
                letter: 'D',
                text: 'Help students with mental issues pull through.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2023-12-s2-p3.mp3',
        transcript: `Taking risks in business does not mean going into business blindly and then expecting great results. On the contrary, taking risks in entrepreneurship involves careful planning and hard work. Nobody can really be sure if risks will be met with success, no matter how calculated they may be. But this should not stop you from taking risks, as risks are necessary if you want your business to succeed. Some risks may not work out, but an optimistic risk-taker will always look at failure as an opportunity to learn. The willingness to experiment with new ideas is key to business growth. As the old saying goes, "Nothing ventured, nothing gained." Failure will teach you how to think and plan strategically. But just remember that not all risks are good ones, and when you fail, learn from it and move forward. Since most people tend to avoid risk, businesses that are brave enough to take risks already have a competitive advantage. They are the ones setting the standard with new ideas, fresh offers and bold inventions. Risk-takers are best at adapting in difficult times. Simply put, when most individuals stay away from risk, it means less competition for risk-takers. We don't know if you'll achieve what these risk-takers have achieved. But for as long as you want to stay safe, and for as long as you are content with where your business is right now, you will never find out.`,
        questions: [
          {
            n: 22,
            text: 'What do entrepreneurs have to do when taking risks according to the passage?',
            options: [
              {
                letter: 'A',
                text: 'Work hard and plan carefully.'
              },
              {
                letter: 'B',
                text: 'Attempt to succeed at any cost.'
              },
              {
                letter: 'C',
                text: 'Aim high and expect great results.'
              },
              {
                letter: 'D',
                text: 'Remain optimistic even in difficulty.'
              }
            ],
            answer: 'A'
          },
          {
            n: 23,
            text: 'What does the passage say is key to business growth?',
            options: [
              {
                letter: 'A',
                text: 'Regarding failure as something inevitable.'
              },
              {
                letter: 'B',
                text: 'Trying out innovative marketing strategies.'
              },
              {
                letter: 'C',
                text: 'Venturing into sectors never explored before.'
              },
              {
                letter: 'D',
                text: 'Being willing to experiment with novel ideas.'
              }
            ],
            answer: 'D'
          },
          {
            n: 24,
            text: 'What are we advised to do when we fail?',
            options: [
              {
                letter: 'A',
                text: 'Expect future success so as to move forward.'
              },
              {
                letter: 'B',
                text: 'Learn from our failure and forge ahead.'
              },
              {
                letter: 'C',
                text: 'Distinguish between good and bad risks.'
              },
              {
                letter: 'D',
                text: 'Examine our strategies and find out weaknesses.'
              }
            ],
            answer: 'B'
          },
          {
            n: 25,
            text: 'What does it mean to risk-taking businesses when most people tend to avoid risk?',
            options: [
              {
                letter: 'A',
                text: 'Fresher offers.'
              },
              {
                letter: 'B',
                text: 'Safer operation.'
              },
              {
                letter: 'C',
                text: 'More challenges.'
              },
              {
                letter: 'D',
                text: 'Less competition.'
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
      'It may be because your brains operate in harmony with each other.'
    ],
    '2': [
      'The relationship probably goes two ways.'
    ],
    '3': [
      'they made separate attempts on DNA matching websites to discover more about their ancestry.'
    ],
    '4': [
      'The pair were born to the same mother 15 months apart.'
    ],
    '5': [
      'He felt so sad to see such a gorgeous place littered with so much trash.'
    ],
    '6': [
      'A man passing by decided to video their good deed and put it on the internet.'
    ],
    '7': [
      'One local woman commented on being embarrassed that tourists were cleaning up their beach.'
    ],
    '8': [
      'but I hurt my ankle last weekend playing football with work colleagues.'
    ],
    '9': [
      'My little nephew turns six, and he loves the zoo, so the whole family is going.'
    ],
    '10': [
      'Dan is extremely fit and healthy.'
    ],
    '11': [
      "I've been catching up on some reading."
    ],
    '12': [
      'your book is getting a lot of attention, partly because you write that most people can retire by 40.'
    ],
    '13': [
      "I've read articles recommending one million dollars as a good figure for retirement."
    ],
    '14': [
      "Retirement doesn't have to be permanent"
    ],
    '15': [
      'by cutting housing, food, and transport expenses, and investing half your monthly income.'
    ],
    '16': [
      'This research found college students were more likely to choose healthy food in the presence of an observer of a different race, as opposed to an observer from their own race.'
    ],
    '17': [
      'this number was 31 per cent when in the presence of an unknown student from another university.'
    ],
    '18': [
      'one way to promote a healthy diet could be to advertise the social benefits of healthy choices.'
    ],
    '19': [
      "This study shows that traditional stress management approaches aren't as effective for this population compared with programs that focus on providing opportunities to interact with therapy dogs."
    ],
    '20': [
      'The researchers measured executive functioning in the students involved in the study.'
    ],
    '21': [
      'Pendry believes those students may experience the programs as another lecture and feel even more stressed.'
    ],
    '22': [
      'taking risks in entrepreneurship involves careful planning and hard work.'
    ],
    '23': [
      'The willingness to experiment with new ideas is key to business growth.'
    ],
    '24': [
      'not all risks are good ones, and when you fail, learn from it and move forward.'
    ],
    '25': [
      'when most individuals stay away from risk, it means less competition for risk-takers.'
    ]
  }
}

export default LISTENING
