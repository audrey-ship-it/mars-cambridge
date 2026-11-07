// 2022年12月 第2套 CET-4 听力数据（复用第1套听力内容）
// 2022年12月全国共考2套听力，本套听力与前两套内容相同，仅顺序不同；本题库沿用第1套数据
// verified: true
const LISTENING = {
  id: 'cet4-2022-12-s2',
  meta: {
    level: 'CET4',
    year: 2022,
    month: 12,
    set: 2,
    source: '原题：2022.12四级真题第1套.pdf；音频：2022.12四级真题第1套听力.mp3；原文：2022.12四级真题第1套答案及详解.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
    note: '2022年12月全国共考2套听力，本套听力与前两套内容相同，仅顺序不同；本题库沿用第1套数据'
  },
  audioUrls: {
    news: '/audio/cet4-2022-12-s2-a.mp3',
    conv: '/audio/cet4-2022-12-s2-b.mp3',
    pass: '/audio/cet4-2022-12-s2-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2022-12-s2-n1.mp3',
        transcript: "Operations at one of Australia's largest gold mines had to be temporarily suspended on Friday after a partial wall collapse at one of the mine's dams. The wall collapse at the Cadia mine came just a few days after two earthquakes hit the area. The damage to the dam wall was noticed in the late afternoon on Friday when workers found a section of the northern dam wall had collapsed into the southern dam. The dams contain waste products of mining and can contain materials which are harmful to the environment and human health. The dams are generally constructed using earth-fill and are gradually raised over time. The company was unable to confirm whether the recent earthquakes had contributed to the dam's wall collapse, but said it was conducting a thorough investigation. A company spokesperson said the operations at the site had been halted while the investigation is ongoing and that the break had posed no safety threat to workers.",
        questions: [
          {
            n: 1,
            text: "What happened at one of Australia's largest gold mines?",
            options: [
              {
                letter: 'A',
                text: 'Part of its dam wall collapsed.'
              },
              {
                letter: 'B',
                text: 'It released a lot of harmful gases.'
              },
              {
                letter: 'C',
                text: 'It was destroyed by an earthquake.'
              },
              {
                letter: 'D',
                text: 'Some miners were trapped underground.'
              }
            ],
            answer: 'A'
          },
          {
            n: 2,
            text: 'What did the spokesperson say about the incident?',
            options: [
              {
                letter: 'A',
                text: 'It posed a safety threat to the miners.'
              },
              {
                letter: 'B',
                text: 'It caused damage too heavy to assess.'
              },
              {
                letter: 'C',
                text: "It brought the mine's operations to a halt."
              },
              {
                letter: 'D',
                text: 'It was followed by two more earthquakes.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2022-12-s2-n2.mp3',
        transcript: "Two boys and four girls were born on Monday to the surprise of a young couple and doctors who had expected five babies. This was the first record of six babies being born at the same time in that region. The doctors prepared from early in the morning to help deliver five tiny citizens. They were in the operating room with five teams of doctors, one for each baby. The first five babies were delivered successfully, and all baby beds were occupied. And then all of a sudden, it turned out there was another waiting to come out. The doctor said the babies were in healthy condition, but could not go home immediately. They needed to stay in the hospital for two to three months for medical supervision. The mother who is in stable condition could return home a day later if all physical tests came back normal. The babies' mother commented that they had already prepared room for five babies at home, so they will have to rearrange things for their happy surprise. The new parents have yet to name the sixth baby but are considering either Lily or Rose.",
        questions: [
          {
            n: 3,
            text: 'What did the hospital do for the delivery of the babies?',
            options: [
              {
                letter: 'A',
                text: 'It prepared beds for all the six new citizens.'
              },
              {
                letter: 'B',
                text: 'It assigned a team of doctors for each expected baby.'
              },
              {
                letter: 'C',
                text: 'It made ample preparations for various possibilities.'
              },
              {
                letter: 'D',
                text: 'It brought in the most advanced instruments.'
              }
            ],
            answer: 'B'
          },
          {
            n: 4,
            text: 'What did the doctor say about the newborns?',
            options: [
              {
                letter: 'A',
                text: 'They had to undergo 2-3 physical checkups.'
              },
              {
                letter: 'B',
                text: 'They were all of normal size except the sixth.'
              },
              {
                letter: 'C',
                text: 'They could go home together with their mother a day later.'
              },
              {
                letter: 'D',
                text: 'They needed to stay in the hospital for a couple of months.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2022-12-s2-n3.mp3',
        transcript: 'A Spanish island called Palmador has been bought by a family from Europe for 18 million euros. The island is often described as heaven on earth by holidaymakers. For decades tourists have been flocking to Palmador, which is located off the southeast coast of Spain. They come to enjoy its unspoiled beaches and crystal clear waters. Its natural beauty is protected as it lies inside a natural park. Although Palmador is one of the most famous private islands in the world, its seafront is public land and is a favorite destination for famous people. When the island was put up for sale, it was offered to the local government but proved too expensive for the local authorities. It is unclear whether the new owners have the power to ban tourists from the island. But with their newfound luxury comes the responsibility for its protection and maintenance. The island is less than two miles long and half a mile wide. It is said to have a remarkable location that few other private islands of this size can match, according to estate agents. Palmador is the perfect place to retreat to, somewhere to get away from the city noise and relax in beautiful surroundings with zero stress.',
        questions: [
          {
            n: 5,
            text: 'What do we learn from the news report about the Spanish island Palmador?',
            options: [
              {
                letter: 'A',
                text: 'It is owned by the local government.'
              },
              {
                letter: 'B',
                text: 'It has been turned into a public park.'
              },
              {
                letter: 'C',
                text: 'It has been bought by an American.'
              },
              {
                letter: 'D',
                text: 'It is a perfect tourist destination.'
              }
            ],
            answer: 'D'
          },
          {
            n: 6,
            text: 'What do holidaymakers come to Palmador to enjoy?',
            options: [
              {
                letter: 'A',
                text: 'Its seafood.'
              },
              {
                letter: 'B',
                text: 'Its unusual coastline.'
              },
              {
                letter: 'C',
                text: 'Its unspoiled beaches.'
              },
              {
                letter: 'D',
                text: 'Its architecture.'
              }
            ],
            answer: 'C'
          },
          {
            n: 7,
            text: 'What do estate agents say about Palmador?',
            options: [
              {
                letter: 'A',
                text: 'It has an unmatched location.'
              },
              {
                letter: 'B',
                text: 'It is worth over 18 million euros.'
              },
              {
                letter: 'C',
                text: 'It has beautiful weather all year round.'
              },
              {
                letter: 'D',
                text: 'It is an ideal place to meet famous stars.'
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
        audio: '/audio/cet4-2022-12-s2-c1.mp3',
        transcript: `M: Hi, Christie's Gym Center. How can I help you? W: Hi, I'm calling to ask about the newly scheduled gym classes. I'm just wondering if I can get a discount on them. M: Are you already a member? W: Yes, I signed up two months ago, but I haven't been to any of the group classes yet. M: Can I take your name please? W: Yes. My name is Carol Friedman. M: Carol Friedman. That's right. And you signed up two months ago. Currently we are offering existing members discounts off of two of our brand new classes, hot yoga, and advanced spinning, but the discount doesn't apply to any of our regular classes I'm afraid. W: I'm only interested in the new classes. So how much of a discount is there on these two new classes? M: The same discount of 20% is being offered to everyone at the door on a "first come, first served" basis for the first month. It's a shame you missed out on the general discount. W: I see. M: But you can get 25% off if you sign up in advance. Which of the two classes are you thinking about? W: Well, I guess I am only really interested in hot yoga. Can you sign me up for the 10-week course on Thursday evenings? M: Sure. Would you prefer to pay in advance? W: No, I don't like giving my card details over the phone anyway. M: Okay, then. As you are already a member, the fee of the class will just be added to your monthly bill. W: That's perfect. Thanks for your help. M: See you Thursday.`,
        questions: [
          {
            n: 8,
            text: 'What do we learn about the woman from the conversation?',
            options: [
              {
                letter: 'A',
                text: 'She has been attending some group classes.'
              },
              {
                letter: 'B',
                text: 'She has registered for two new gym classes.'
              },
              {
                letter: 'C',
                text: 'She became a member of the gym two months ago.'
              },
              {
                letter: 'D',
                text: 'She is entitled to a discount on all the gym exercises.'
              }
            ],
            answer: 'C'
          },
          {
            n: 9,
            text: 'What is the gym center doing right now?',
            options: [
              {
                letter: 'A',
                text: 'Considering the promotion of its regular classes.'
              },
              {
                letter: 'B',
                text: 'Taking measures to expand its exercise programs.'
              },
              {
                letter: 'C',
                text: 'Recruiting coaches for hot yoga and advanced spinning.'
              },
              {
                letter: 'D',
                text: 'Offering existing members a discount off two new classes.'
              }
            ],
            answer: 'D'
          },
          {
            n: 10,
            text: 'What does the man say is a pity for the woman?',
            options: [
              {
                letter: 'A',
                text: 'She missed the deadline for the 10-week course.'
              },
              {
                letter: 'B',
                text: "She missed out on the gym's general discount."
              },
              {
                letter: 'C',
                text: "She didn't sign up for membership in time."
              },
              {
                letter: 'D',
                text: "She wasn't so much interested in hot yoga."
              }
            ],
            answer: 'B'
          },
          {
            n: 11,
            text: 'Why is the woman unwilling to pay in advance?',
            options: [
              {
                letter: 'A',
                text: "She doesn't want to reveal her card details over the phone."
              },
              {
                letter: 'B',
                text: "She doesn't think it wise to pay before attending any class."
              },
              {
                letter: 'C',
                text: 'She might have to cancel her registration any minute.'
              },
              {
                letter: 'D',
                text: 'She prefers to have the fee added to her monthly bill.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2022-12-s2-c2.mp3',
        transcript: "M: Well, I think that was quite a successful trip in the end. Don't you think, Jenny? W: Absolutely. There are lots of great potential markets here in China. So I'm sure that the head office in London will be pleased once we get back and present our research. M: Okay. We've got a bit of spare time now. Can we discuss the return trip to the head office? W: Sure. I've checked the availability of flights from Beijing to London on the 22nd and you have a choice. There's a flight arriving the following morning, with a two-hour stopover in Dubai, or a flight arriving at 11:30 in the evening, with a five-hour stopover in Amsterdam. M: Right. Well, that's obvious then, isn't it? W: Okay, so that's Dubai. I've booked a room in a hotel about a mile from the office. The nearest metro station is Earl's Court. M: Great. Can you find a map that shows where the hotel is and send it to me online? I've never been to the head office, you know. I want to see if I can get one of those rental bicycles and ride to the office just for fun. For the presentation, I'll bring my own laptop and hook it up to their projector. Do you remember the capacity of their meeting room? W: No, but I'll check. M: Just one more thing. I'll pay everything with my own card, right? And I'll submit my claims form afterwards. W: No problem. Just remember to keep all your receipts. You remember the trouble you had last time. M: Oh, don't remind me.",
        questions: [
          {
            n: 12,
            text: 'Why are the speakers in China?',
            options: [
              {
                letter: 'A',
                text: 'To make investments.'
              },
              {
                letter: 'B',
                text: 'To sign a business contract.'
              },
              {
                letter: 'C',
                text: 'To research new markets.'
              },
              {
                letter: 'D',
                text: 'To open a new office.'
              }
            ],
            answer: 'C'
          },
          {
            n: 13,
            text: 'Where will the man stop over on his way to London?',
            options: [
              {
                letter: 'A',
                text: 'Dubai.'
              },
              {
                letter: 'B',
                text: 'Beijing.'
              },
              {
                letter: 'C',
                text: 'Amsterdam.'
              },
              {
                letter: 'D',
                text: "Earl's Court."
              }
            ],
            answer: 'A'
          },
          {
            n: 14,
            text: 'What does the man ask the woman to do?',
            options: [
              {
                letter: 'A',
                text: 'Rent a bike for him to get around the town'
              },
              {
                letter: 'B',
                text: 'Reserve a meeting room in the head office.'
              },
              {
                letter: 'C',
                text: 'Help him prepare his presentation.'
              },
              {
                letter: 'D',
                text: 'Send him a map of the hotel area.'
              }
            ],
            answer: 'D'
          },
          {
            n: 15,
            text: 'What did the woman remind the man to do at the end of the conversation?',
            options: [
              {
                letter: 'A',
                text: 'Bring his projector.'
              },
              {
                letter: 'B',
                text: 'Keep all his receipts.'
              },
              {
                letter: 'C',
                text: 'Submit his claims form.'
              },
              {
                letter: 'D',
                text: 'Pay with his credit card.'
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
        audio: '/audio/cet4-2022-12-s2-p1.mp3',
        transcript: "A new study has demonstrated the importance of women's rights. The researchers behind the study state that many parts of the world have made good economic progress, but women's rights are often overlooked. Thus, they wanted to determine if there was a link between protection of women's rights and public health. The researchers analyzed databases which held information from 162 countries for the period 2004 to 2010. Countries were classified according to the respect they gave to women's economic and social rights. There were three categories. They were high, moderate, and poor. Analysis of the data showed that countries with strong women's rights had better health than those where women's rights were not as respected. The health indicators studied included disease prevention, reproductive health, death rates, and life expectancy. Furthermore, in countries where women's rights were most respected, but where access to hospitals and doctors was below average, health outcomes were still better than in countries rated as moderate or poor. This confirms that even with a lack of resources, if a country has strong women's rights, the health outcomes are better. Thus, the researchers argued that gender equality is not just a women's rights issue. It is also a development issue. This is because better health aids economic development. They note that the value of women's rights has often been questioned from an economic standpoint. Some have argued that ensuring those rights would limit progress, but this study indicates the opposite.",
        questions: [
          {
            n: 16,
            text: 'What did the researchers of the new study try to determine?',
            options: [
              {
                letter: 'A',
                text: "Whether a country's educational level is linked to women's rights."
              },
              {
                letter: 'B',
                text: "Whether women's rights are making good progress around the world."
              },
              {
                letter: 'C',
                text: "Whether a country's protection of women's rights is related to its public health."
              },
              {
                letter: 'D',
                text: "Whether women's rights are more often overlooked in less-developed countries."
              }
            ],
            answer: 'C'
          },
          {
            n: 17,
            text: 'What does the passage say about countries lacking in medical resources?',
            options: [
              {
                letter: 'A',
                text: "Their people still have better health if women's rights are respected."
              },
              {
                letter: 'B',
                text: "They must make efforts to increase women's access to health care."
              },
              {
                letter: 'C',
                text: "Their people tend to attach importance to women's rights."
              },
              {
                letter: 'D',
                text: 'They need to invest more in hospital staff and facilities.'
              }
            ],
            answer: 'A'
          },
          {
            n: 18,
            text: "What has often been questioned regarding women's rights?",
            options: [
              {
                letter: 'A',
                text: "Their link with a country's public health."
              },
              {
                letter: 'B',
                text: 'Their potential impact on social progress.'
              },
              {
                letter: 'C',
                text: "Their value to a country's international image."
              },
              {
                letter: 'D',
                text: 'Their positive effect on economic development.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2022-12-s2-p2.mp3',
        transcript: "Sunshine and high temperatures can mean picnics and parks and trips to beaches, but they can make your body react in some strange ways. First, sunshine can actually affect your breath. You may think that summer is the perfect time to go on a date or chat with an attractive boy or girl. But excessive heat can cause you to lose water, which has been proven to have a pretty unattractive side effect—bad breath. When you are lacking water, your mouth becomes dry. Bacteria accumulate because there isn't enough water in your mouth to wash it away. Sunshine can stop you from sweating, too. The body's normal temperature is 36 to 37 degrees centigrade. But if it heats up to 40 to 41 degrees, you may find yourself getting heatstroke. At that point, your heat regulatory system can essentially quit, which stops you from sweating as your body tries to keep water around your vital organs. However, the sun can have a positive influence on your body by raising your energy levels. You might feel like the sun is giving you extra energy for your day, which is actually happening. And vitamin D from sunshine can help your body to absorb certain minerals, which are linked to building stronger bones. Therefore, I suggest you spend more time in the park with your friends, but make sure you apply lots of skin protection and fill up those water bottles, too.",
        questions: [
          {
            n: 19,
            text: 'What does the passage say about hot sunshine?',
            options: [
              {
                letter: 'A',
                text: 'It creates a wonderful setting for dating.'
              },
              {
                letter: 'B',
                text: 'It may cause strange physical reactions.'
              },
              {
                letter: 'C',
                text: 'It turns parks into picnic sites.'
              },
              {
                letter: 'D',
                text: 'It may result in a crowded beach.'
              }
            ],
            answer: 'B'
          },
          {
            n: 20,
            text: 'What does the passage say is a negative side effect of water loss?',
            options: [
              {
                letter: 'A',
                text: 'Breathing difficulty.'
              },
              {
                letter: 'B',
                text: 'Bad breath.'
              },
              {
                letter: 'C',
                text: 'Excessive sweating.'
              },
              {
                letter: 'D',
                text: 'High blood pressure.'
              }
            ],
            answer: 'B'
          },
          {
            n: 21,
            text: 'What is said to be a positive effect of sunshine?',
            options: [
              {
                letter: 'A',
                text: 'It protects people against bacteria.'
              },
              {
                letter: 'B',
                text: 'It enables people to build up endurance.'
              },
              {
                letter: 'C',
                text: "It accelerates people's blood circulation."
              },
              {
                letter: 'D',
                text: 'It provides people with extra energy.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2022-12-s2-p3.mp3',
        transcript: 'Left-handed people can find it inconvenient to do certain things, writing in a notebook for example, but there are a number of advantages of being left-handed. Research found that they were overrepresented among fighters in combat sports. Left-handed fighters also had higher chances to win. This confirms the fighter theory. Left-handers may also be better at remembering events. The explanation is that the two brain spheres of left-handers are more strongly connected. Being left-handed might be a factor in mathematical ability. An Italian study found that for simple arithmetic there was little difference between right- and left-handed performance, but for more difficult problem-solving, left-handers won out. No one understands the reason for this. Left-handed people may think differently. In one study, researchers showed the participants columns of abstract illustrations and asked them which ones they would prefer. Left-handed people were more likely to prefer the images on the left. Right-handed people preferred the ones on the right. Both groups disliked stuff on their opposite side. Left-handers are also overrepresented in professional, interactive sports. Researchers have looked at the influence of being left-handed on performance and interactive sports. Those that require the fastest reaction give left-handers the biggest advantage. So if you have a left-handed child, you should encourage them to play table tennis, baseball and tennis. Being left-handed maximizes their chances of success in these sports.',
        questions: [
          {
            n: 22,
            text: 'What does the passage say about left-handed people?',
            options: [
              {
                letter: 'A',
                text: 'They are more likely to win in combat sports.'
              },
              {
                letter: 'B',
                text: 'They are in the minority among the population.'
              },
              {
                letter: 'C',
                text: 'They have a higher chance of joining sports teams.'
              },
              {
                letter: 'D',
                text: 'They have more disadvantages in getting ahead.'
              }
            ],
            answer: 'A'
          },
          {
            n: 23,
            text: 'What is said to be special about left-handed people?',
            options: [
              {
                letter: 'A',
                text: 'Their brain is more powerful than that of right-handed people.'
              },
              {
                letter: 'B',
                text: 'The left side of their brain is more powerful than its right side.'
              },
              {
                letter: 'C',
                text: 'They tend to be a lot more aggressive than right-handed people.'
              },
              {
                letter: 'D',
                text: 'Their brain has a stronger connection between its two sides.'
              }
            ],
            answer: 'D'
          },
          {
            n: 24,
            text: 'Why are left-handed people better at solving more difficult problems?',
            options: [
              {
                letter: 'A',
                text: 'They have a larger brain.'
              },
              {
                letter: 'B',
                text: 'It still remains unknown.'
              },
              {
                letter: 'C',
                text: 'It is related to their genes.'
              },
              {
                letter: 'D',
                text: 'They are better at reasoning.'
              }
            ],
            answer: 'B'
          },
          {
            n: 25,
            text: 'What should parents do about a left-handed child?',
            options: [
              {
                letter: 'A',
                text: 'Teach them how to perform tasks with their right hand.'
              },
              {
                letter: 'B',
                text: 'Help them fully develop their mathematical abilities.'
              },
              {
                letter: 'C',
                text: 'Encourage them to play fast-paced interactive sports.'
              },
              {
                letter: 'D',
                text: 'Advise them to choose jobs that require quick reactions.'
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
      "Operations at one of Australia's largest gold mines had to be temporarily suspended on Friday after a partial wall collapse at one of the mine's dams."
    ],
    '2': [
      'operations at the site had been halted while the investigation is ongoing and that the break had posed no safety threat to workers.'
    ],
    '3': [
      'They were in the operating room with five teams of doctors, one for each baby.'
    ],
    '4': [
      'They needed to stay in the hospital for two to three months for medical supervision.'
    ],
    '5': [
      'The island is often described as heaven on earth by holidaymakers.'
    ],
    '6': [
      'They come to enjoy its unspoiled beaches and crystal clear waters.'
    ],
    '7': [
      'It is said to have a remarkable location that few other private islands of this size can match, according to estate agents.'
    ],
    '8': [
      "I signed up two months ago, but I haven't been to any of the group classes yet."
    ],
    '9': [
      'Currently we are offering existing members discounts off of two of our brand new classes, hot yoga, and advanced spinning'
    ],
    '10': [
      "It's a shame you missed out on the general discount."
    ],
    '11': [
      "I don't like giving my card details over the phone anyway."
    ],
    '12': [
      "There are lots of great potential markets here in China. So I'm sure that the head office in London will be pleased once we get back and present our research."
    ],
    '13': [
      "Okay, so that's Dubai. I've booked a room in a hotel about a mile from the office."
    ],
    '14': [
      'Can you find a map that shows where the hotel is and send it to me online?'
    ],
    '15': [
      'Just remember to keep all your receipts.'
    ],
    '16': [
      "Thus, they wanted to determine if there was a link between protection of women's rights and public health."
    ],
    '17': [
      "This confirms that even with a lack of resources, if a country has strong women's rights, the health outcomes are better."
    ],
    '18': [
      "They note that the value of women's rights has often been questioned from an economic standpoint."
    ],
    '19': [
      'Sunshine and high temperatures can mean picnics and parks and trips to beaches, but they can make your body react in some strange ways.'
    ],
    '20': [
      'But excessive heat can cause you to lose water, which has been proven to have a pretty unattractive side effect—bad breath.'
    ],
    '21': [
      'the sun can have a positive influence on your body by raising your energy levels.'
    ],
    '22': [
      'Research found that they were overrepresented among fighters in combat sports.'
    ],
    '23': [
      'The explanation is that the two brain spheres of left-handers are more strongly connected.'
    ],
    '24': [
      'for more difficult problem-solving, left-handers won out. No one understands the reason for this.'
    ],
    '25': [
      'Those that require the fastest reaction give left-handers the biggest advantage.'
    ]
  }
}

export default LISTENING
