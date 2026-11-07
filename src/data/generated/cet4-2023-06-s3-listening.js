// 2023年06月 第3套 CET-4 听力数据（复用第1套听力内容）
// 2023年6月全国共考2套听力，本套听力与前两套内容相同，仅顺序不同；本题库沿用第1套数据
// verified: true
const LISTENING = {
  id: 'cet4-2023-06-s3',
  meta: {
    level: 'CET4',
    year: 2023,
    month: 6,
    set: 3,
    source: '原题：2023.06英语四级真题第1套.pdf；音频：2023.06四级真题第1套听力音频.mp3；原文：2023.06四级真题第1套详解.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
    note: '2023年6月全国共考2套听力，本套听力与前两套内容相同，仅顺序不同；本题库沿用第1套数据'
  },
  audioUrls: {
    news: '/audio/cet4-2023-06-s3-a.mp3',
    conv: '/audio/cet4-2023-06-s3-b.mp3',
    pass: '/audio/cet4-2023-06-s3-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2023-06-s3-n1.mp3',
        transcript: `A woman was charged with allegedly violating a Rhode Island city law against feeding wild animals. The 55-year-old woman's neighbors blame her for making the area's rat problem worse. Newly installed cameras captured several rats active in the middle of the day. Neighbors say that it's even worse during the night. The woman and her parents, who own the home, told reporters that she's being charged for feeding birds. "Who would have known just loving animals gets you that much trouble," she said. It is prohibited to feed any wild animals including birds in Rhode Island City. Nevertheless, while the woman's intention was to feed birds, it is clear that rats were also benefiting. Anthony Moretti, director of the city administration, said he saw more than 20 rats near the woman's home. He said it will take months to get the problem under control.`,
        questions: [
          {
            n: 1,
            text: 'What do we learn from the report about the 55-year-old woman?',
            options: [
              {
                letter: 'A',
                text: 'She was involved in a conflict with bird lovers.'
              },
              {
                letter: 'B',
                text: 'She was charged with mistreating animals.'
              },
              {
                letter: 'C',
                text: 'She was on bad terms with her neighbors.'
              },
              {
                letter: 'D',
                text: 'She was accused of violating a city law.'
              }
            ],
            answer: 'D'
          },
          {
            n: 2,
            text: 'What did the director of the city administration say at the end of the news report?',
            options: [
              {
                letter: 'A',
                text: 'It will take time to solve the rat problem.'
              },
              {
                letter: 'B',
                text: 'All wild animals should be well protected.'
              },
              {
                letter: 'C',
                text: 'The woman was not to blame for the situation.'
              },
              {
                letter: 'D',
                text: 'No one should go unpunished for violating law.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2023-06-s3-n2.mp3',
        transcript: `To prepare for eventually sending astronauts to Mars, NASA began taking applications Friday for four people to live for a year in Mars Dune Alpha. That's a 1,700-square-foot Martian habitat inside a building in Houston. The paid volunteers will work in an environment similar to Mars. They will have limited communications with family, restricted food and resources. NASA is planning three experiments with the first one starting in the fall next year. Food will all be ready-to-eat space food. Some plants will be grown, but not potatoes like in the movie The Martian. "We want to understand how humans perform in them," said lead scientists Grace Douglas. "We are looking at Mars realistic situations." The application process open Friday and they're not seeking just anybody. The requirements are strict, including a master's degree in a science, engineering or math field or pilot experience. Only American citizens or permanent U.S. residents are acceptable. Applicants must be between 30 and 55 and in good physical health. Attitude is key, said former Canadian astronaut Chris Hadfield. He said the participants need to be super competent, resourceful, and not relying on other people to feel comfortable.`,
        questions: [
          {
            n: 3,
            text: 'What does NASA require the paid volunteers to do?',
            options: [
              {
                letter: 'A',
                text: 'Communicate with astronauts in Mars Dune Alpha.'
              },
              {
                letter: 'B',
                text: 'Work in an environment resembling Mars.'
              },
              {
                letter: 'C',
                text: 'Build a Martian habitat in Houston.'
              },
              {
                letter: 'D',
                text: 'Send in applications before Friday.'
              }
            ],
            answer: 'B'
          },
          {
            n: 4,
            text: 'What will the participants in the project eat?',
            options: [
              {
                letter: 'A',
                text: 'Ready-made food.'
              },
              {
                letter: 'B',
                text: 'Food that is organic.'
              },
              {
                letter: 'C',
                text: 'Food they grow.'
              },
              {
                letter: 'D',
                text: 'Potatoes mostly.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2023-06-s3-n3.mp3',
        transcript: `A Japanese mayor apologized Thursday for biting the Olympic gold medal of a softball player. Nagoya mayor Takashi Kawamura had praised athlete, Miu Goto, during a public media event. He asked her to put the medal around his neck. Kawamura then bit into it. Biting a medal in front of journalists and photographers has become a common pose for Olympic medalists. However, it is only for the winners themselves, not others. "I'm really sorry that I hurt the treasure of the gold medalist," Kawamura told reporters Thursday. The mayor said the medal was undamaged, though he offered to pay for the cost of a new one. Goto, however, has accepted the International Olympic Committee's offer of a replacement, according to Japanese media reports. The scene broadcast on television prompted thousands of complaints to city hall. Some Olympians said they treat their medals as treasures and that it was disrespectful and unacceptable for Kawamura to bite one. "I would cry if that happened to me," said another athlete, Naohisa Takato. "I handle my own gold medal so gently that I would not scratch it."`,
        questions: [
          {
            n: 5,
            text: 'What does the news reports say about the Japanese mayor Takashi Kawamura?',
            options: [
              {
                letter: 'A',
                text: "He apologized for scratching an athlete's gold medal."
              },
              {
                letter: 'B',
                text: 'He was asked to present a gold medal to Miu Goto.'
              },
              {
                letter: 'C',
                text: "He bit a softball player's Olympic gold medal."
              },
              {
                letter: 'D',
                text: 'He attracted public attention at a media event.'
              }
            ],
            answer: 'C'
          },
          {
            n: 6,
            text: 'What did mayor Takashi Kawamura offer to do?',
            options: [
              {
                letter: 'A',
                text: 'Have another picture taken with the Olympic medalist.'
              },
              {
                letter: 'B',
                text: 'Apologize to the International Olympic Committee.'
              },
              {
                letter: 'C',
                text: 'Get the damaged medal repaired.'
              },
              {
                letter: 'D',
                text: 'Pay for the cost of a new medal.'
              }
            ],
            answer: 'D'
          },
          {
            n: 7,
            text: 'What did some Olympians say they would do with their medals?',
            options: [
              {
                letter: 'A',
                text: 'Allow no one to touch them.'
              },
              {
                letter: 'B',
                text: 'See them as symbols of honor.'
              },
              {
                letter: 'C',
                text: 'Treat them as treasures.'
              },
              {
                letter: 'D',
                text: 'Keep them in a safe place.'
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
        audio: '/audio/cet4-2023-06-s3-c1.mp3',
        transcript: "M: What's that orange thing on your computer screen? W: It's something I bought yesterday. It's a plastic sheet that blocks blue light. I have one that I use to cover my phone screen too. M: What do you mean by blue light? W: Blue light includes natural light, but it also includes light that isn't natural, for example, from computers, phones, televisions and other electronic devices. M: So blue light is harmful and that's why you want to block it. W: It isn't that simple. Blue light isn't necessarily bad for us. In fact, we need blue light during the day to be healthy. But too much blue light, especially from electronic devices, can harm our health by weakening our vision and making it harder for us to fall asleep. And poor sleep can cause all sorts of health problems. M: I'm not so sure that sleep is nearly as important as people always say it is. I haven't slept enough in months because I have too much work to do, and I feel fine. And it's the same for most of my friends. Poor sleep might be a problem for older people, but surely young people can handle late nights. W: Well, the research I've read shows that sleep is probably even more important than we thought, and that not having enough sleep can contribute to serious health problems like obesity and heart disease. And all the artificial blue light from electronic devices means we have to try harder to sleep well. M: Maybe you're right. I'm on my computer very late most nights, and that's probably why I don't sleep enough.",
        questions: [
          {
            n: 8,
            text: 'What did the woman do to her computer?',
            options: [
              {
                letter: 'A',
                text: 'She covered its screen with a plastic sheet.'
              },
              {
                letter: 'B',
                text: 'She connected it with her smartphone.'
              },
              {
                letter: 'C',
                text: 'She decorated it with colorful stickers.'
              },
              {
                letter: 'D',
                text: 'She bought some new software for it.'
              }
            ],
            answer: 'A'
          },
          {
            n: 9,
            text: 'What does the woman say about blue light?',
            options: [
              {
                letter: 'A',
                text: 'It may not be simply blue.'
              },
              {
                letter: 'B',
                text: 'It includes unnatural light.'
              },
              {
                letter: 'C',
                text: 'It is more harmful to young people.'
              },
              {
                letter: 'D',
                text: 'It induces people to fall asleep.'
              }
            ],
            answer: 'B'
          },
          {
            n: 10,
            text: "Why does the man say he hasn't slept enough for months?",
            options: [
              {
                letter: 'A',
                text: 'He has had much trouble falling asleep.'
              },
              {
                letter: 'B',
                text: 'He has had some sort of health problems.'
              },
              {
                letter: 'C',
                text: 'He has stayed up playing computer games.'
              },
              {
                letter: 'D',
                text: 'He has been burdened with excessive work.'
              }
            ],
            answer: 'D'
          },
          {
            n: 11,
            text: 'What has the woman learned from the research she has read?',
            options: [
              {
                letter: 'A',
                text: 'Exposure to blue light is the chief cause of obesity.'
              },
              {
                letter: 'B',
                text: 'Sleep may be more important than people assumed.'
              },
              {
                letter: 'C',
                text: 'Sleep may also be negatively affected by natural light.'
              },
              {
                letter: 'D',
                text: 'Overuse of electronic devices may cause heart disease.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2023-06-s3-c2.mp3',
        transcript: `W: As a kid, did you know what job you wanted to do when you grew up? M: No, I didn't. And I got sick every time adults asked me what I wanted to be when I grew up. W: It's the same with me. And I'm tired of people asking that question of my 10-year-old daughter. My daughter's stock answers are basketball player, pop singer, mechanical engineer. Adults love that last one, as it's the perfect mix of the sensible and the ambitious. When she was much younger, my daughter used to say she wanted to be Queen of the Clouds, which I loved. That's the kind of goal-setting I like to see in children, springing from their boundless imaginations. M: Yes, we grown-ups can be tedious and limiting in our need for reality. And we teach a very gloomy image of adulthood—that whatever our children's future holds, it must be seen within the context of a job. W: How utterly overwhelming and dull! M: When people ask my son what he wants to be when he grows up, I have to swallow the urge to say, "Hey, back off my kid's dreams!" W: We can't dismiss the idea that teenagers have to plan to do something after they finish school, and parents are entitled to hope it's more than simply spending 10 hours a day playing computer games. M: But asking "What do you want to be?" isn't going to lead a child to a fulfilled life rather than false expectations and a high chance of disappointment. W: Exactly. We should be helping our kids understand who they are, even if that means letting go of who we think they should be.`,
        questions: [
          {
            n: 12,
            text: 'What question were both speakers fed up with when they were kids?',
            options: [
              {
                letter: 'A',
                text: 'What they wanted to be when grown up.'
              },
              {
                letter: 'B',
                text: 'What their favorite cartoon character was.'
              },
              {
                letter: 'C',
                text: 'What they learned from computer games.'
              },
              {
                letter: 'D',
                text: 'What they liked to do most after school.'
              }
            ],
            answer: 'A'
          },
          {
            n: 13,
            text: 'What occupation do adults see as both sensible and ambitious according to the woman?',
            options: [
              {
                letter: 'A',
                text: 'A stock broker.'
              },
              {
                letter: 'B',
                text: 'A pop singer.'
              },
              {
                letter: 'C',
                text: 'A mechanical engineer.'
              },
              {
                letter: 'D',
                text: 'A basketball player.'
              }
            ],
            answer: 'C'
          },
          {
            n: 14,
            text: 'What kind of goal-setting does the woman like to see in children?',
            options: [
              {
                letter: 'A',
                text: 'Ambitious.'
              },
              {
                letter: 'B',
                text: 'Sensible.'
              },
              {
                letter: 'C',
                text: 'Imaginative.'
              },
              {
                letter: 'D',
                text: 'Practical.'
              }
            ],
            answer: 'C'
          },
          {
            n: 15,
            text: 'What does the woman suggest adults should do?',
            options: [
              {
                letter: 'A',
                text: 'Relax their strict control of their kids.'
              },
              {
                letter: 'B',
                text: 'Help their kids understand themselves.'
              },
              {
                letter: 'C',
                text: 'Impose their own dreams on their kids.'
              },
              {
                letter: 'D',
                text: 'Dismiss their high expectations of their kids.'
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
        audio: '/audio/cet4-2023-06-s3-p1.mp3',
        transcript: "Greater Internet access correlates directly with improved health care, education and economic development. People living in rural areas, however, lag behind in online use, which limits their access to government services, banking and job opportunities. Nowhere is this challenge clearer than in Africa. Most Africans live in rural areas that are tough to wire for Internet access. Now, some phone companies are trying to introduce Internet-ready phones into African markets. Certain companies have started selling simple smartphones for only $20. Previously, the lowest price had been around $40, well out of reach for many people. These devices are powered by software from the giant electronics company, KaiOS Technologies Limited. Most companies are trying to make phones ever more powerful and capable. But KaiOS went the other way. It made every effort to keep the essential capabilities of smartphones, but strip out costs and preserve battery life for people who likely have inadequate access to electricity. The KaiOS devices offer an alternative to the more expensive models that remain out of reach of many Africans and contribute to the digital divide. The body of KaiOS phones is as basic as it gets. Instead of a touchscreen, they're controlled with an old-school keypad. They're designed for 3G networks because 4G coverage doesn't reach two thirds of Africa's customers. In total, KaiOS phones are made from about $15 worth of parts, while Apple's top-of-the-line iPhone has $390 worth of stuff.",
        questions: [
          {
            n: 16,
            text: 'What are a number of phone companies trying to do in Africa?',
            options: [
              {
                letter: 'A',
                text: 'Set up company branches.'
              },
              {
                letter: 'B',
                text: 'Improve its infrastructure.'
              },
              {
                letter: 'C',
                text: 'Introduce iPhones into its markets.'
              },
              {
                letter: 'D',
                text: 'Promote Internet-ready phones.'
              }
            ],
            answer: 'D'
          },
          {
            n: 17,
            text: 'How do KaiOS smartphones differ from smartphones of most other companies?',
            options: [
              {
                letter: 'A',
                text: "They cater to Africans' needs."
              },
              {
                letter: 'B',
                text: 'They are more expensive models.'
              },
              {
                letter: 'C',
                text: 'They are more powerful and capable.'
              },
              {
                letter: 'D',
                text: 'They boast the longest battery life.'
              }
            ],
            answer: 'A'
          },
          {
            n: 18,
            text: 'What are KaiOS smartphones equipped with?',
            options: [
              {
                letter: 'A',
                text: 'A large touchscreen.'
              },
              {
                letter: 'B',
                text: 'An old-school keypad.'
              },
              {
                letter: 'C',
                text: 'A voice-response device.'
              },
              {
                letter: 'D',
                text: 'A digitally-designed system.'
              }
            ],
            answer: 'B'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2023-06-s3-p2.mp3',
        transcript: "For years, using recycled plastic to make plastic products was cheap. By contrast, fossil fuel plastic was more expensive. Thus this sustainable option was an economic option too. But now it is cheaper for major manufacturers to use new plastic. According to one recent business report, recycled plastic now costs an extra $72 a tonne compared with newly-made plastic. This may be because of consumer demands. They are pushing for more recycled plastics in new products. Meanwhile, new plastic is becoming cheaper. This is because of a boom in petroleum chemical production from the U.S. The price increase of recycled plastic could cost sustainable manufacturers an extra $250 million a year. Smaller manufacturers may also be forced to use new plastic to reduce costs. Makers of clear plastic bottles may also opt for new fossil-fuel based plastic to save money. Plastic packaging makers are being pressured to use more recycled plastic. This is done in hopes of reducing the enormous amount of plastic pollution in the oceans. The UK government plans to tax companies which don't use at least 30% recycled plastic in their products. Additionally, the government is planning to increase the quantity of recycled plastic in the market. This could mean incentives for new recycling plants. Additionally, recycling facilities may be improved at a local council level and recycled plastic could be imported. This would help increase the amount of recycled plastic in circulation.",
        questions: [
          {
            n: 19,
            text: 'What is said about using recycled plastic to make plastic products in the past?',
            options: [
              {
                letter: 'A',
                text: 'It ensured sustainable economic growth.'
              },
              {
                letter: 'B',
                text: 'It was strongly opposed by manufacturers.'
              },
              {
                letter: 'C',
                text: 'It was cheaper than using fossil fuel plastic.'
              },
              {
                letter: 'D',
                text: 'It satisfied consumer demands on the whole.'
              }
            ],
            answer: 'C'
          },
          {
            n: 20,
            text: 'What has led to more competitive price for new plastic?',
            options: [
              {
                letter: 'A',
                text: 'The capacity to mass produce it.'
              },
              {
                letter: 'B',
                text: "The U.S. federal government's regulations."
              },
              {
                letter: 'C',
                text: 'A boom in market demand for clear plastic bottles.'
              },
              {
                letter: 'D',
                text: 'A rapid increase in U.S. petroleum chemical production.'
              }
            ],
            answer: 'D'
          },
          {
            n: 21,
            text: 'What does the UK government plan to do about plastic?',
            options: [
              {
                letter: 'A',
                text: 'Require companies to use 30% of new plastic.'
              },
              {
                letter: 'B',
                text: 'Increase the supply of new plastic in the market.'
              },
              {
                letter: 'C',
                text: 'Reduce the amount of plastic pollution in local areas.'
              },
              {
                letter: 'D',
                text: 'Take measures to promote the use of recycled plastic.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2023-06-s3-p3.mp3',
        transcript: "At the Dreamery, a business in Manhattan, naps are for sale. A 45-minute session in a darkened enclosure with peace and quiet costs $25. To be clear, this institution is no hotel. This is a nap joint. It sells the idea of the nap as much as the nap itself. Is a nap worth $25? The answer is obviously yes. Here, at this point in the argument, it's traditional for me to bring up all the studies that show the benefits of napping. But do you really need experts to tell you that? Just look at the world around you at 2:30 in the afternoon. I've been working from home for more than 10 years now. And the quality and quantity of work I can do emerges directly from my ability to concentrate. I don't understand how people have creative careers without napping. Every day at about 1 p.m., everyone faces the same choice: sleep until 2 p.m. and then work until 5, or daydream and drift around social media and attend pointless meetings until 7 p.m. The friends I have who still work in offices inform me that their bosses insist that they take the second option, and that napping is associated with laziness. I genuinely find it odd. For if you nap properly, it's like waking up from a full night's sleep and you can double your day's worth of concentration.",
        questions: [
          {
            n: 22,
            text: 'What do we learn about the Dreamery, a business in Manhattan?',
            options: [
              {
                letter: 'A',
                text: 'It studies dreams.'
              },
              {
                letter: 'B',
                text: 'It rents a place for nap-takers.'
              },
              {
                letter: 'C',
                text: 'It is a hotel for business people.'
              },
              {
                letter: 'D',
                text: 'It is a nap research institute.'
              }
            ],
            answer: 'B'
          },
          {
            n: 23,
            text: 'Why does the speaker ask us to look at the world around us at 2:30 in the afternoon?',
            options: [
              {
                letter: 'A',
                text: "To find out creative people's work performance."
              },
              {
                letter: 'B',
                text: 'To see how many people can go without napping.'
              },
              {
                letter: 'C',
                text: 'To understand the obvious importance of napping.'
              },
              {
                letter: 'D',
                text: 'To feel how difficult it is to get his idea across.'
              }
            ],
            answer: 'C'
          },
          {
            n: 24,
            text: "What do we learn about the quantity and quality of the speaker's work?",
            options: [
              {
                letter: 'A',
                text: 'They decline due to pointless meetings.'
              },
              {
                letter: 'B',
                text: 'They depend on his ability to concentrate.'
              },
              {
                letter: 'C',
                text: 'They enable him to enjoy a creative career.'
              },
              {
                letter: 'D',
                text: 'They are affected by the overuse of social media.'
              }
            ],
            answer: 'B'
          },
          {
            n: 25,
            text: 'What does the speaker say he finds odd?',
            options: [
              {
                letter: 'A',
                text: 'Some bosses associate napping with laziness.'
              },
              {
                letter: 'B',
                text: 'Many office workers nap during work hours.'
              },
              {
                letter: 'C',
                text: 'Some bosses can concentrate without napping.'
              },
              {
                letter: 'D',
                text: 'Many of his friends daydream in the office.'
              }
            ],
            answer: 'A'
          }
        ]
      }
    ]
  },
  answerQuotes: {
    '1': [
      'A woman was charged with allegedly violating a Rhode Island city law against feeding wild animals.'
    ],
    '2': [
      'He said it will take months to get the problem under control.'
    ],
    '3': [
      'The paid volunteers will work in an environment similar to Mars.'
    ],
    '4': [
      'Food will all be ready-to-eat space food.'
    ],
    '5': [
      'A Japanese mayor apologized Thursday for biting the Olympic gold medal of a softball player.'
    ],
    '6': [
      'though he offered to pay for the cost of a new one'
    ],
    '7': [
      'Some Olympians said they treat their medals as treasures'
    ],
    '8': [
      "It's a plastic sheet that blocks blue light."
    ],
    '9': [
      "Blue light includes natural light, but it also includes light that isn't natural"
    ],
    '10': [
      "I haven't slept enough in months because I have too much work to do"
    ],
    '11': [
      "the research I've read shows that sleep is probably even more important than we thought"
    ],
    '12': [
      'I got sick every time adults asked me what I wanted to be when I grew up.'
    ],
    '13': [
      "My daughter's stock answers are basketball player, pop singer, mechanical engineer."
    ],
    '14': [
      "That's the kind of goal-setting I like to see in children, springing from their boundless imaginations."
    ],
    '15': [
      'We should be helping our kids understand who they are'
    ],
    '16': [
      'some phone companies are trying to introduce Internet-ready phones into African markets'
    ],
    '17': [
      'It made every effort to keep the essential capabilities of smartphones'
    ],
    '18': [
      "they're controlled with an old-school keypad"
    ],
    '19': [
      'For years, using recycled plastic to make plastic products was cheap.'
    ],
    '20': [
      'This is because of a boom in petroleum chemical production from the U.S.'
    ],
    '21': [
      "The UK government plans to tax companies which don't use at least 30% recycled plastic in their products."
    ],
    '22': [
      'At the Dreamery, a business in Manhattan, naps are for sale.'
    ],
    '23': [
      'Just look at the world around you at 2:30 in the afternoon.'
    ],
    '24': [
      'the quality and quantity of work I can do emerges directly from my ability to concentrate'
    ],
    '25': [
      'their bosses insist that they take the second option, and that napping is associated with laziness'
    ]
  }
}

export default LISTENING
