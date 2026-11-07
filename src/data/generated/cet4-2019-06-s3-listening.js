// 2019年06月 第3套 CET-4 听力数据（复用第1套听力内容）
// 2019年6月全国共考2套听力，本套听力与前两套内容完全一样，仅顺序不同；本题库沿用第1套数据
// verified: true
const LISTENING = {
  id: 'cet4-2019-06-s3',
  meta: {
    level: 'CET4',
    year: 2019,
    month: 6,
    set: 3,
    source: '原题：2019.06四级真题第1套.pdf；音频：2019年06月四级听力音频第1套.mp3；原文：2019.06英语四级解析第1套.pdf',
    answerSource: '解析 PDF（OCR 原文+核对）',
    verified: true,
    verifiedAt: '2026-11-05',
    note: '2019年6月全国共考2套听力，本套听力与前两套内容完全一样，仅顺序不同；本题库沿用第1套数据'
  },
  audioUrls: {
    news: '/audio/cet4-2019-06-s3-a.mp3',
    conv: '/audio/cet4-2019-06-s3-b.mp3',
    pass: '/audio/cet4-2019-06-s3-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2019-06-s3-n1.mp3',
        transcript: 'A 9-year-old Central California boy braved strong currents and cold water to swim from San Francisco to Alcatraz Island and back. A California television station in Fresno reported Tuesday that James Savage set a record as the youngest swimmer to make the journey to the former prison. The TV station reported that by completing the swim, the fourth-grade student from Los Banos broke a record previously held by a 10-year-old boy. James said that waves in the San Francisco Bay hitting him in the face 30 minutes into his swim made him want to give up. His father said he had offered his son $100 as a reward; to encourage his struggling son, he doubled it to $200. James pushed forward, making it to Alcatraz Island and back in a little more than two hours. Alcatraz is over a mile from the mainland.',
        questions: [
          {
            n: 1,
            text: 'What did the boy from Central California do according to the report?',
            options: [
              {
                letter: 'A',
                text: 'He set a record by swimming to and from an island.'
              },
              {
                letter: 'B',
                text: 'He celebrated his ninth birthday on a small island.'
              },
              {
                letter: 'C',
                text: 'He visited a prison located on a faraway island.'
              },
              {
                letter: 'D',
                text: 'He swam around an island near San Francisco.'
              }
            ],
            answer: 'A'
          },
          {
            n: 2,
            text: 'What did the father do to encourage his son?',
            options: [
              {
                letter: 'A',
                text: 'He doubled the reward.'
              },
              {
                letter: 'B',
                text: 'He set him an example.'
              },
              {
                letter: 'C',
                text: 'He cheered him on all the way.'
              },
              {
                letter: 'D',
                text: 'He had the event covered on TV.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2019-06-s3-n2.mp3',
        transcript: "On the 1st of January, new regulations will come into effect which eliminate an annual leave bonus for people who put off marrying until the age of 23 for women, and 25 for men, the South China Morning Post reports. The holiday bonus was designed to encourage young people to delay getting married in line with China's one-child policy. But with that policy now being abolished, this holiday incentive is no longer necessary, the government says. In Shanghai, a young couple at a marriage registration office told the paper that they decided to register their marriage as soon as possible to take advantage of the existing policy, because an extra holiday was a big deal for them. In Beijing, one registration office had about 300 couples seeking to get married the day after the changes were announced, rather than the usual number of between 70 and 80. But one lawyer tells the paper that the changes still have to be adopted by local governments and these procedures take time. So people who are rushing to register for marriage can relax.",
        questions: [
          {
            n: 3,
            text: 'What was the purpose of the annual leave bonus in China?',
            options: [
              {
                letter: 'A',
                text: 'To end the one-child policy.'
              },
              {
                letter: 'B',
                text: 'To encourage late marriage.'
              },
              {
                letter: 'C',
                text: 'To increase working efficiency.'
              },
              {
                letter: 'D',
                text: 'To give people more time to travel.'
              }
            ],
            answer: 'B'
          },
          {
            n: 4,
            text: 'What do we learn about the new regulations?',
            options: [
              {
                letter: 'A',
                text: 'They will not be welcomed by young people.'
              },
              {
                letter: 'B',
                text: 'They will help to popularize early marriage.'
              },
              {
                letter: 'C',
                text: "They will boost China's economic growth."
              },
              {
                letter: 'D',
                text: 'They will not come into immediate effect.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2019-06-s3-n3.mp3',
        transcript: "Everyone loves a good house party, but the cleaning-up the next morning isn't as enjoyable. Now, however, a New Zealand-based start-up company aims to bring messy homes—and even splitting headaches—back to normal. The properly-named start-up Morning-After Maids was launched about a month ago in Auckland by roommates Rebecca Foley and Catherine Ashurst. Aside from cleaning-up, the two will also cook breakfast and even get coffee and painkillers for recovering merrymakers. Although they are both gainfully employed, they fit cleaning jobs into their nights and weekends, which is when their service is in most demand anyway. Besides being flooded with requests from across the country, Foley and Ashurst have also received requests from the U.S. and Canada to provide services there. They are reportedly meeting with lawyers to see how best to take the business forward.",
        questions: [
          {
            n: 5,
            text: 'What is the news report mainly about?',
            options: [
              {
                letter: 'A',
                text: 'Cleaning service in great demand all over the world.'
              },
              {
                letter: 'B',
                text: 'Two ladies giving up well-paid jobs to do cleaning.'
              },
              {
                letter: 'C',
                text: 'A new company to clean up the mess after parties.'
              },
              {
                letter: 'D',
                text: 'Cleaners gainfully employed at nights and weekends.'
              }
            ],
            answer: 'C'
          },
          {
            n: 6,
            text: 'What is a common problem with a house party?',
            options: [
              {
                letter: 'A',
                text: 'It takes a lot of time to prepare.'
              },
              {
                letter: 'B',
                text: 'It leaves the house in a mess.'
              },
              {
                letter: 'C',
                text: 'It makes party goers exhausted.'
              },
              {
                letter: 'D',
                text: 'It creates noise and misconduct.'
              }
            ],
            answer: 'B'
          },
          {
            n: 7,
            text: 'What are Rebecca Foley and Catherine Ashurst planning to do?',
            options: [
              {
                letter: 'A',
                text: 'Hire an Australian lawyer.'
              },
              {
                letter: 'B',
                text: 'Visit the U.S. and Canada.'
              },
              {
                letter: 'C',
                text: 'Settle a legal dispute.'
              },
              {
                letter: 'D',
                text: 'Expand their business.'
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
        audio: '/audio/cet4-2019-06-s3-c1.mp3',
        transcript: "W: Kyle, how did your driver's theory exam go? It was yesterday, right? M: Yes. I prepared as much as I could, but I was so nervous since it was my second try. The people who worked at the test center were very kind, though. We had a little conversation which calmed me down a bit, and that was just what I needed. Then, after the exam, they printed out my result, but I was afraid to open it until I was outside. It was such a relief to pass. W: Congratulations! I knew you could do it! I guess you underestimated how difficult it would be the first time, didn't you? I hear a lot of people make that mistake and go in underprepared, but good job in passing the second time. I'm so proud of you. Now, all you have to do next is your road test. Have you had any lessons yet? M: Yes, thanks. I'm so happy to be actually on the road now. I've only had two driving lessons so far, and my instructor is very understanding. So I'm really enjoying it. And I can't wait for my next session, although the lessons are rather expensive, £20 an hour. And the instructor says I'll need about 30 to 40 lessons in total. That's what—six to eight hundred pounds. So this time I'll need to make a lot more effort and hopefully will be successful the first time. W: Well, good luck.",
        questions: [
          {
            n: 8,
            text: 'What did the man do yesterday?',
            options: [
              {
                letter: 'A',
                text: 'He had a driving lesson.'
              },
              {
                letter: 'B',
                text: "He got his driver's license."
              },
              {
                letter: 'C',
                text: "He took the driver's theory exam."
              },
              {
                letter: 'D',
                text: "He passed the driver's road test."
              }
            ],
            answer: 'C'
          },
          {
            n: 9,
            text: 'Why did he fail the exam the first time?',
            options: [
              {
                letter: 'A',
                text: 'He was not well prepared.'
              },
              {
                letter: 'B',
                text: 'He did not get to the exam in time.'
              },
              {
                letter: 'C',
                text: 'He was not used to the test format.'
              },
              {
                letter: 'D',
                text: 'He did not follow the test procedure.'
              }
            ],
            answer: 'A'
          },
          {
            n: 10,
            text: 'What does the man say about his driving lessons?',
            options: [
              {
                letter: 'A',
                text: 'They are tough.'
              },
              {
                letter: 'B',
                text: 'They are costly.'
              },
              {
                letter: 'C',
                text: 'They are helpful.'
              },
              {
                letter: 'D',
                text: 'They are too short.'
              }
            ],
            answer: 'B'
          },
          {
            n: 11,
            text: 'What does the man hope to do next?',
            options: [
              {
                letter: 'A',
                text: 'Pass his road test the first time.'
              },
              {
                letter: 'B',
                text: 'Test-drive a few times on highways.'
              },
              {
                letter: 'C',
                text: 'Find an experienced driving instructor.'
              },
              {
                letter: 'D',
                text: 'Earn enough money for driving lessons.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2019-06-s3-c2.mp3',
        transcript: "M: Emma, I got accepted to the University of Leeds. Since you're going to university in England, do you know how much it is for international students to study there? W: Congratulations! Yes, I believe for international students, you'll have to pay around £13,000 a year. It's just a bit more than the local students. M: Okay, so that's about $17,000 for the tuition and fees. Anyway, I'm only going to be there for a year, doing my master's. So it's pretty good. If I stayed in the U.S., it'd take two years and cost at least $50,000 in tuition alone. Also, I have a good chance of winning a scholarship at Leeds, which would be pretty awesome, the benefits of being a music genius. W: Yeah, I heard you're a talented piano player. So you're doing a postgraduate degree now? I'm still in my last year, graduating next June. Finally, I'll be done with my studies, and could go on to earning loads of money. M: Are you still planning on being a teacher? No money in that job then. W: You'd be surprised. I'm still going to be a teacher. But the plan is to work at an international school overseas, after I get a year or so of the experience in England. It's better pay, and I get to travel, which reminds me I'm late for my class and I've got some documents I need to print out first. I'd better run.",
        questions: [
          {
            n: 12,
            text: 'What does the man want to know?',
            options: [
              {
                letter: 'A',
                text: 'Where the woman studies.'
              },
              {
                letter: 'B',
                text: 'The acceptance rate at Leeds.'
              },
              {
                letter: 'C',
                text: "Leeds' tuition for international students."
              },
              {
                letter: 'D',
                text: 'How to apply for studies at a university.'
              }
            ],
            answer: 'C'
          },
          {
            n: 13,
            text: 'What is the man going to do?',
            options: [
              {
                letter: 'A',
                text: 'Apply to an American university.'
              },
              {
                letter: 'B',
                text: 'Do research on higher education.'
              },
              {
                letter: 'C',
                text: 'Perform in a famous musical.'
              },
              {
                letter: 'D',
                text: 'Pursue postgraduate studies.'
              }
            ],
            answer: 'D'
          },
          {
            n: 14,
            text: 'What might qualify the man for a scholarship at Leeds University?',
            options: [
              {
                letter: 'A',
                text: 'His favorable recommendations.'
              },
              {
                letter: 'B',
                text: 'His outstanding musical talent.'
              },
              {
                letter: 'C',
                text: 'His academic excellence.'
              },
              {
                letter: 'D',
                text: 'His unique experience.'
              }
            ],
            answer: 'B'
          },
          {
            n: 15,
            text: 'What is the woman planning to do after graduation?',
            options: [
              {
                letter: 'A',
                text: "Do a master's degree."
              },
              {
                letter: 'B',
                text: 'Settle down in England.'
              },
              {
                letter: 'C',
                text: 'Travel widely.'
              },
              {
                letter: 'D',
                text: 'Teach overseas.'
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
        audio: '/audio/cet4-2019-06-s3-p1.mp3',
        transcript: "Scientists have identified thousands of known ant species around the world—and only a few of them bug humans. Most ants live in the woods or out in nature. There, they keep other creatures in check, distribute seeds, and clean dead and decaying materials from the ground. A very small percentage of ants do harm to humans. But those are incredibly challenging to control. They are small enough to easily slip inside your house, live in colonies that number in the tens of thousands to the hundreds of thousands, and reproduce quickly. That makes them good at getting in, and hard to kick out. Once they settle in, these insects start affecting your home. In addition to biting ants, other species can cause different kinds of damage. Some, like carpenter ants, can undermine a home's structure, while others interfere with electrical units. Unfortunately, our homes are very attractive to ants, because they provide everything the colony needs to survive, such as food, water, and shelter. So how can we prevent ants from getting into our homes? Most important of all, avoid giving ants any access to food, particularly sugary food, because ants have a sweet tooth. We also need to clean up spills as soon as they occur and store food in airtight containers. Even garbage attracts ants, so empty your trash as often as possible, and store your outside garbage in a lidded can, well away from doors and windows.",
        questions: [
          {
            n: 16,
            text: 'What does the passage say about ants?',
            options: [
              {
                letter: 'A',
                text: 'They help farmers keep diseases in check.'
              },
              {
                letter: 'B',
                text: 'Many species remain unknown to scientists.'
              },
              {
                letter: 'C',
                text: 'Only a few species cause trouble to humans.'
              },
              {
                letter: 'D',
                text: 'They live in incredibly well-organized colonies.'
              }
            ],
            answer: 'C'
          },
          {
            n: 17,
            text: 'What do we learn from the passage about carpenter ants?',
            options: [
              {
                letter: 'A',
                text: 'They are larger than many other species.'
              },
              {
                letter: 'B',
                text: "They can cause damage to people's homes."
              },
              {
                letter: 'C',
                text: 'They can survive a long time without water.'
              },
              {
                letter: 'D',
                text: 'They like to form colonies in electrical units.'
              }
            ],
            answer: 'B'
          },
          {
            n: 18,
            text: 'What can we do to prevent ants from getting into our homes?',
            options: [
              {
                letter: 'A',
                text: 'Deny them access to any food.'
              },
              {
                letter: 'B',
                text: 'Keep doors and windows shut.'
              },
              {
                letter: 'C',
                text: 'Destroy their colonies close by.'
              },
              {
                letter: 'D',
                text: 'Refrain from eating sugary food.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2019-06-s3-p2.mp3',
        transcript: `My research focus is on what happens to our immune system as we age. So the job of the immune system is to fight infections. It also protects us from viruses and from auto-immune diseases. We know that as we get older, it's easier for us to get infections. So, older adults have more chances of falling ill. This is evidence that our immune system really doesn't function so well when we age. In most of our work when we're looking at older adults who've got an illness, we always have to have health controls. So we work very closely with a great group of volunteers called "The 1,000 Elders." These volunteers are all 65 or over but in good health. They come to the university to provide us with blood samples, to be interviewed and to help us carry out a whole range of research. The real impact of our research is going to be on health in old age. At the moment we're living much longer, life expectancy is increasing at two years for every decade. That means an extra five hours a day. I want to make sure that older adults are still able to enjoy their old age and that they're not spending time in hospital with infections, feeling unwell and being generally weak. We want people to be healthy even when they are old.`,
        questions: [
          {
            n: 19,
            text: "What is the focus of the speaker's research?",
            options: [
              {
                letter: 'A',
                text: 'The function of the human immune system.'
              },
              {
                letter: 'B',
                text: 'The cause of various auto-immune diseases.'
              },
              {
                letter: 'C',
                text: 'The viruses that may infect the human immune system.'
              },
              {
                letter: 'D',
                text: "The change in people's immune system as they get older."
              }
            ],
            answer: 'D'
          },
          {
            n: 20,
            text: 'What are the volunteers asked to do in the research?',
            options: [
              {
                letter: 'A',
                text: 'Report their illnesses.'
              },
              {
                letter: 'B',
                text: 'Offer blood samples.'
              },
              {
                letter: 'C',
                text: 'Act as research assistants.'
              },
              {
                letter: 'D',
                text: 'Help to interview patients.'
              }
            ],
            answer: 'B'
          },
          {
            n: 21,
            text: 'What does the speaker say will be the impact of his research?',
            options: [
              {
                letter: 'A',
                text: "Strengthening people's immunity to infection."
              },
              {
                letter: 'B',
                text: "Better understanding patients' immune system."
              },
              {
                letter: 'C',
                text: "Helping improve old people's health conditions."
              },
              {
                letter: 'D',
                text: "Further reducing old patients' medical expenses."
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2019-06-s3-p3.mp3',
        transcript: `When Ted Komada started teaching 14 years ago at Killip Elementary, he didn't know how to manage a classroom and was struggling to connect with students. He noticed a couple of days after school that a group of kids would get together to play chess. "I know how to play chess. Let me go and show these kids how to do it," he said. Now Komada coaches the school's chess team. The whole program started as a safe place for kids to come after school. And this week dozens of those students are getting ready to head out to Nashville, Tennessee, to compete with about 5,000 other young people at the SuperNationals of chess. The competition only happens every four years and the last time the team went, they won the third place in the nation. Komada says chess gives him, and his students, control. The school has the highest number of kids from low-income families. Police frequent the area day and night, as two months ago, a young man was shot just down the street. Komada likes to teach his students that they should think about their move before they do it. The lessons prove valuable outside the classroom as well. Many parents see these lessons translate into the real world. Students are more likely to think about their actions and see whether they will lead to trouble.`,
        questions: [
          {
            n: 22,
            text: 'What did Ted Komada notice one day after he started teaching at Killip Elementary?',
            options: [
              {
                letter: 'A',
                text: 'His students had trouble getting on with each other.'
              },
              {
                letter: 'B',
                text: 'A lot of kids stayed at school to do their homework.'
              },
              {
                letter: 'C',
                text: 'His students were struggling to follow his lessons.'
              },
              {
                letter: 'D',
                text: 'A group of kids were playing chess after school.'
              }
            ],
            answer: 'D'
          },
          {
            n: 23,
            text: "What are dozens of students from Komada's school going to do this week?",
            options: [
              {
                letter: 'A',
                text: 'Visit a chess team in Nashville.'
              },
              {
                letter: 'B',
                text: "Join the school's chess team."
              },
              {
                letter: 'C',
                text: 'Participate in a national chess competition.'
              },
              {
                letter: 'D',
                text: 'Receive training for a chess competition.'
              }
            ],
            answer: 'C'
          },
          {
            n: 24,
            text: 'What do we learn about the students of Killip Elementary?',
            options: [
              {
                letter: 'A',
                text: 'Most of them come from low-income families.'
              },
              {
                letter: 'B',
                text: 'Many have become national chess champions.'
              },
              {
                letter: 'C',
                text: 'A couple of them have got involved in crimes.'
              },
              {
                letter: 'D',
                text: 'Many became chess coaches after graduation.'
              }
            ],
            answer: 'A'
          },
          {
            n: 25,
            text: 'What have the students learned from Komada?',
            options: [
              {
                letter: 'A',
                text: 'Actions speak louder than words.'
              },
              {
                letter: 'B',
                text: 'Think twice before taking action.'
              },
              {
                letter: 'C',
                text: 'Translate their words into action.'
              },
              {
                letter: 'D',
                text: 'Take action before it gets too late.'
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
      'A 9-year-old Central California boy braved strong currents and cold water to swim from San Francisco to Alcatraz Island and back'
    ],
    '2': [
      'he had offered his son $100 as a reward',
      'he doubled it to $200'
    ],
    '3': [
      "The holiday bonus was designed to encourage young people to delay getting married in line with China's one-child policy"
    ],
    '4': [
      'the changes still have to be adopted by local governments and these procedures take time'
    ],
    '5': [
      'a New Zealand-based start-up company aims to bring messy homes'
    ],
    '6': [
      "Everyone loves a good house party, but the cleaning-up the next morning isn't as enjoyable"
    ],
    '7': [
      'They are reportedly meeting with lawyers to see how best to take the business forward'
    ],
    '8': [
      "how did your driver's theory exam go"
    ],
    '9': [
      'I guess you underestimated how difficult it would be the first time'
    ],
    '10': [
      'although the lessons are rather expensive, £20 an hour'
    ],
    '11': [
      "this time I'll need to make a lot more effort and hopefully will be successful the first time"
    ],
    '12': [
      'do you know how much it is for international students to study there'
    ],
    '13': [
      "I'm only going to be there for a year, doing my master's"
    ],
    '14': [
      'I have a good chance of winning a scholarship at Leeds, which would be pretty awesome, the benefits of being a music genius',
      "I heard you're a talented piano player"
    ],
    '15': [
      'the plan is to work at an international school overseas'
    ],
    '16': [
      'only a few of them bug humans'
    ],
    '17': [
      "Some, like carpenter ants, can undermine a home's structure, while others interfere with electrical units"
    ],
    '18': [
      'avoid giving ants any access to food, particularly sugary food'
    ],
    '19': [
      'My research focus is on what happens to our immune system as we age'
    ],
    '20': [
      'They come to the university to provide us with blood samples, to be interviewed and to help us carry out a whole range of research'
    ],
    '21': [
      'The real impact of our research is going to be on health in old age'
    ],
    '22': [
      'He noticed a couple of days after school that a group of kids would get together to play chess'
    ],
    '23': [
      'dozens of those students are getting ready to head out to Nashville, Tennessee, to compete'
    ],
    '24': [
      'The school has the highest number of kids from low-income families'
    ],
    '25': [
      'they should think about their move before they do it'
    ]
  }
}

export default LISTENING
