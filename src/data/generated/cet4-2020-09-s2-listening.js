// 2020年09月 第2套 CET-4 听力数据（复用第1套听力内容）
// 2020年9月全国仅考1套听力，本套听力与第1套一致；本题库沿用第1套数据
// verified: true
const LISTENING = {
  id: 'cet4-2020-09-s2',
  meta: {
    level: 'CET4',
    year: 2020,
    month: 9,
    set: 2,
    source: '原题：2020.09月四级真题第1套.pdf；音频：2020年09月四级听力全1套.mp3；原文：2020.09英语四级解析第1套.pdf',
    answerSource: '解析 PDF（OCR 原文+核对）',
    verified: true,
    verifiedAt: '2026-11-05',
    note: '2020年9月全国仅考1套听力，本套听力与第1套一致；本题库沿用第1套数据'
  },
  audioUrls: {
    news: '/audio/cet4-2020-09-s2-a.mp3',
    conv: '/audio/cet4-2020-09-s2-b.mp3',
    pass: '/audio/cet4-2020-09-s2-c.mp3'
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2020-09-s2-n1.mp3',
        transcript: `A NASA satellite orbiting over Portugal took photographs that reveal the effects of pollution from ships. One of the photos shows a thin film of clouds above the brilliant blue of the North Atlantic, cut by white lines of thicker clouds that look like scars. NASA officials explained those thicker clouds are signs of ship traffic below. When ships power their way through the ocean, they pump exhaust into the atmosphere, just as cars do. And those massive amounts of particles can cause clouds to form. Get enough of those particles in one place, as from the exhaust of a ship, and they can lead to the creation of new clouds easily visible from space. "These clouds can be huge. Some of them stretch hundreds of kilometres from end to end," NASA officials said. It's likely that these sorts of clouds are having some effect on the global climate, according to NASA officials. But scientists aren't yet sure what effect it has.`,
        questions: [
          {
            n: 1,
            text: 'What has caused the thick clouds in the photos taken by NASA satellite?',
            options: [
              {
                letter: 'A',
                text: 'Ship traffic in the Atlantic.'
              },
              {
                letter: 'B',
                text: 'Warm currents in the ocean.'
              },
              {
                letter: 'C',
                text: 'Exhaust from cars in Europe.'
              },
              {
                letter: 'D',
                text: 'Particles emitted by power plants.'
              }
            ],
            answer: 'A'
          },
          {
            n: 2,
            text: 'What do NASA officials think about the thick clouds?',
            options: [
              {
                letter: 'A',
                text: 'They need to be taken seriously.'
              },
              {
                letter: 'B',
                text: 'They have a huge effect on fishery.'
              },
              {
                letter: 'C',
                text: 'They might be causing trouble to air flights.'
              },
              {
                letter: 'D',
                text: "They may be affecting the world's climate."
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2020-09-s2-n2.mp3',
        transcript: 'Staff at a suburban supermarket in Melbourne say they feel unsafe at work after security guards were removed. This came after a series of physical attacks and verbal abuse by customers. More than 50 workers at the store have signed a letter calling for a permanent security guard following a series of incidents, including a customer threatening to attack a supervisor with a knife. A security worker had guarded the store each night from 7 p.m. until 12 a.m., but that had stopped suddenly on Monday, employees said. One worker said an angry customer had thrown a chicken at his head after complaining about how long she had waited to be served. Another worker said the lack of protection at the store made her feel uncomfortable at work. However, the spokesman of the supermarket said the store had taken strong action in response to incidents. "We have found very few instances of bad customer behavior at our store in the past year. In the rare cases we have seen bad behavior, we have taken strong action in response, including banning a customer from the store."',
        questions: [
          {
            n: 3,
            text: 'For what purpose did the staff at a supermarket in Melbourne sign a letter?',
            options: [
              {
                letter: 'A',
                text: 'To appeal for higher wages.'
              },
              {
                letter: 'B',
                text: 'To demand better health care.'
              },
              {
                letter: 'C',
                text: 'To call for a permanent security guard.'
              },
              {
                letter: 'D',
                text: 'To dismiss the bad-tempered supervisor.'
              }
            ],
            answer: 'C'
          },
          {
            n: 4,
            text: "What did the spokesman of the supermarket say regarding the employees' demand?",
            options: [
              {
                letter: 'A',
                text: 'It had already taken strong action.'
              },
              {
                letter: 'B',
                text: "It would put customers' needs first."
              },
              {
                letter: 'C',
                text: 'It would take their appeal seriously.'
              },
              {
                letter: 'D',
                text: 'It was seeking help from the police.'
              }
            ],
            answer: 'A'
          }
        ]
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2020-09-s2-n3.mp3',
        transcript: 'Drivers on their way to the Polish capital of Warsaw on Wednesday morning found the road blocked by an unusual obstacle: tons of liquid chocolate that spilled onto the motorway. A truck carrying the sweet load hit a road barrier and overturned, blocking two lanes. The cracked tank spilled a pool of rapidly-hardening chocolate, which quickly covered the width of the road. While the driver was taken to hospital with a broken arm, firefighters struggled to remove a reported twelve tons of solid chocolate from the road. A representative for the firefighters told the local TV that removing the chocolate was worse than dealing with snow. After contacting the chocolate manufacturer, the firefighters resorted to spraying hot, pressurized water to get rid of the sticky substance. The local TV also noted that the cleanup spanned more than a mile, because drivers simply drove through the chocolate after the crash, leaving a long chocolate trail. But despite the sticky situation, firefighters and police attending to the cleanup were reportedly cheerful about the long task ahead. After all, who could be mad about twelve tons of chocolate?',
        questions: [
          {
            n: 5,
            text: 'What did drivers on the motorway to Warsaw find?',
            options: [
              {
                letter: 'A',
                text: 'The road was flooded.'
              },
              {
                letter: 'B',
                text: 'The road was blocked.'
              },
              {
                letter: 'C',
                text: 'The road was frozen with snow.'
              },
              {
                letter: 'D',
                text: 'The road was covered with spilled gas.'
              }
            ],
            answer: 'B'
          },
          {
            n: 6,
            text: 'What does the report say about the accident?',
            options: [
              {
                letter: 'A',
                text: 'A truck plunged into a pool of liquid chocolate.'
              },
              {
                letter: 'B',
                text: 'The heavy snow made driving very difficult.'
              },
              {
                letter: 'C',
                text: 'The truck driver dozed off while driving.'
              },
              {
                letter: 'D',
                text: 'A truck hit a barrier and overturned.'
              }
            ],
            answer: 'D'
          },
          {
            n: 7,
            text: "What did the firefighters' representative tell the local TV?",
            options: [
              {
                letter: 'A',
                text: 'It was a long time before the cleanup was finished.'
              },
              {
                letter: 'B',
                text: 'It was a hard task to remove the spilled substance.'
              },
              {
                letter: 'C',
                text: 'It was fortunate that no passenger got injured.'
              },
              {
                letter: 'D',
                text: 'It was difficult to contact the manufacturer.'
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
        audio: '/audio/cet4-2020-09-s2-c1.mp3',
        transcript: `M: Lisa, why did you pay for your meal with cash instead of the payment apps on your phone? W: Well, I've gone back to cash. I'm only using payment apps if that's the only option. I'm trying to save money for a new phone, and I find that using cash rather than payment apps helps me to save. M: But how? Money is money, isn't it? I don't think it matters whether you take it out of the bank and put it in your wallet or simply transfer from your bank account to the seller's bank account using an app. W: No, I believe it does matter. It's a psychological phenomenon. I believe we have less connection with the value of our money when we just tap the "Approve" buttons on our phones. M: You might have a point. Since I stopped carrying cash around and started using my phone apps to pay, I may have developed a tendency to buy more small or non-essential items. W: That's highly possible. Think about the amount of time we spend with our phones in our hands, and all the things we do with our phones. It sometimes seems that our phone is buying the product for us, not ourselves. M: So cashless payment affects our ability to budget? W: I believe so. If we spend a hundred yuan in cash, we realize that we don't have that hundred yuan to spend on something else. But if we're spending electronically, we are less likely to make that mental calculation. M: I stopped using my credit card because I found I was spending excessively. Perhaps I should take the same approach of paying using my phone. W: It's worth considering.`,
        questions: [
          {
            n: 8,
            text: 'Why did the woman decide to go back to cash for payment?',
            options: [
              {
                letter: 'A',
                text: 'She wanted to save for a new phone.'
              },
              {
                letter: 'B',
                text: 'She found it much safer to use cash.'
              },
              {
                letter: 'C',
                text: 'She could enjoy discount with cash.'
              },
              {
                letter: 'D',
                text: 'She had been cheated using phone apps.'
              }
            ],
            answer: 'A'
          },
          {
            n: 9,
            text: 'What happens when people use apps for payment according to the woman?',
            options: [
              {
                letter: 'A',
                text: 'They can save a lot more time and trouble.'
              },
              {
                letter: 'B',
                text: 'They find it less difficult to make purchases.'
              },
              {
                letter: 'C',
                text: 'They derive greater pleasure from buying things.'
              },
              {
                letter: 'D',
                text: 'They are less aware of the value of their money.'
              }
            ],
            answer: 'D'
          },
          {
            n: 10,
            text: 'What might the man tend to buy with payment apps?',
            options: [
              {
                letter: 'A',
                text: 'More valuable items.'
              },
              {
                letter: 'B',
                text: 'More non-essential things.'
              },
              {
                letter: 'C',
                text: 'Everyday necessities.'
              },
              {
                letter: 'D',
                text: 'Electronic devices.'
              }
            ],
            answer: 'B'
          },
          {
            n: 11,
            text: 'What does the man think of electronic payment?',
            options: [
              {
                letter: 'A',
                text: 'It can improve shopping efficiency.'
              },
              {
                letter: 'B',
                text: 'It is altering the way of shopping.'
              },
              {
                letter: 'C',
                text: 'It may lead to excessive spending.'
              },
              {
                letter: 'D',
                text: 'It appeals more to younger people.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2020-09-s2-c2.mp3',
        transcript: "W: Hello, Mr. Brown. I was expecting your call. My secretary told me you were having some problems with the wooden table. Is that right? M: No, no. The table is fine. The problem is the chairs. W: Oh, the chairs. So what exactly is the issue? M: Well, put simply, these are not the chairs my wife and I selected in your store last week. There must be some confusion with our order. W: Oh, I see. I'm looking through my files now, and I see that the delivery was this morning. Is that correct? M: Yes. W: Do you mind describing the chairs that were delivered to your apartment, Mr. Brown? M: Sure. These have a flat back with a rounded top and are very heavy. They are light brown and look kind of cheap. The ones we ordered were dark brown to match the table. W: Right, of course. It says here you purchased the Arlington table and four Milano chairs. As you said, there must have been some confusion with the order. I'm terribly sorry. We will send a van to collect those four and replace them with the Milano you purchased. Will tomorrow 9 a.m. be okay, Mr. Brown? M: Yes, that would be great. Thank you. W: Good. Did everything else you ordered from us arrive okay? M: Yes, I think so. Let me check. The mirror and two paintings are here. The two coffee tables are also here. And the sofa... Yes, we haven't noticed anything else wrong or missing. But if we do, we will certainly let you know. W: Okay, great. Once again, I'm sorry for the confusion and trouble caused.",
        questions: [
          {
            n: 12,
            text: 'Why did the man call the woman?',
            options: [
              {
                letter: 'A',
                text: 'He wanted to order some wooden furniture.'
              },
              {
                letter: 'B',
                text: 'He had to change the furniture delivery time.'
              },
              {
                letter: 'C',
                text: 'He had a problem with the furniture delivered.'
              },
              {
                letter: 'D',
                text: 'He wanted the furniture store to give him a refund.'
              }
            ],
            answer: 'C'
          },
          {
            n: 13,
            text: 'What did the woman ask the man to do?',
            options: [
              {
                letter: 'A',
                text: 'Send the furniture back to the store.'
              },
              {
                letter: 'B',
                text: 'Describe the furniture he received.'
              },
              {
                letter: 'C',
                text: 'Collect the furniture he ordered.'
              },
              {
                letter: 'D',
                text: 'Buy another brand of furniture.'
              }
            ],
            answer: 'B'
          },
          {
            n: 14,
            text: 'What did the woman promise to do for the man?',
            options: [
              {
                letter: 'A',
                text: 'Correct their mistake.'
              },
              {
                letter: 'B',
                text: 'Improve their service.'
              },
              {
                letter: 'C',
                text: 'Apologize to his wife.'
              },
              {
                letter: 'D',
                text: 'Give the money back.'
              }
            ],
            answer: 'A'
          },
          {
            n: 15,
            text: 'What did the woman do at the end of the conversation?',
            options: [
              {
                letter: 'A',
                text: 'She recommended a new style.'
              },
              {
                letter: 'B',
                text: 'She offered some gift to the man.'
              },
              {
                letter: 'C',
                text: 'She apologized to the man once more.'
              },
              {
                letter: 'D',
                text: 'She checked all the items with the man.'
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
        audio: '/audio/cet4-2020-09-s2-p1.mp3',
        transcript: `Do you have too much stuff? Are you, dare we say it, "untidy"? Say hello to a TV show called "Tidying Up with Marie Kondo", a home improvement show based on her wildly popular book The Life-Changing Magic of Tidying Up. In the show, Marie Kondo acts as a tiny garbage fairy for messy people, visiting their houses to share the wisdom of the "KonMari" method. This method is simple in theory but can be endlessly complex in practice. You divide all the stuff in your house—all of it—into several categories, and then examine each item—all of them—to see if it sparks joy. If it does, you keep it. If it doesn't, you thank it and neatly discard it. So, is the TV show inspiring people to tidy up? Firsthand accounts seem to indicate a small wave of people bringing piles of donation bags to used goods stores. One store received thousands of bags of used possessions in one day. January is usually the store's slow season for donations because it's cold and people don't want to bother, but not this January. People seemed determined to clean up their homes. One used bookstore received a month's worth of books in donations in a week when a man gave over fifty boxes of books from his home. It seems Marie's TV show is having a big impact after all.`,
        questions: [
          {
            n: 16,
            text: "What is Marie Kondo's TV show about?",
            options: [
              {
                letter: 'A',
                text: 'Reading books of wisdom.'
              },
              {
                letter: 'B',
                text: "Tidying up one's home."
              },
              {
                letter: 'C',
                text: 'Sharing with others.'
              },
              {
                letter: 'D',
                text: 'Donating to charity.'
              }
            ],
            answer: 'B'
          },
          {
            n: 17,
            text: "What things can be kept in one's home according to Marie Kondo?",
            options: [
              {
                letter: 'A',
                text: 'Things that make one happy.'
              },
              {
                letter: 'B',
                text: 'Things that are becoming rare.'
              },
              {
                letter: 'C',
                text: 'Things that occupy little space.'
              },
              {
                letter: 'D',
                text: 'Things that cost a lot of money.'
              }
            ],
            answer: 'A'
          },
          {
            n: 18,
            text: 'What do we learn about one used bookstore this January?',
            options: [
              {
                letter: 'A',
                text: "It joined the city's clean-up campaign."
              },
              {
                letter: 'B',
                text: 'It sold as many as fifty boxes of books.'
              },
              {
                letter: 'C',
                text: 'It received an incredibly large number of donated books.'
              },
              {
                letter: 'D',
                text: 'It did little business because of the unusual cold weather.'
              }
            ],
            answer: 'C'
          }
        ]
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2020-09-s2-p2.mp3',
        transcript: `At just 12 years old, Mike Hannon is making a difference in his community—one lunch at a time. "Mike's Lunches of Love" has fed more than 2,000 of the town's most vulnerable residents. Mike delivers meals to the homeless. "It's like a way to give people joy, maybe spark something in them that can change them," Mike told WBZ-TV. The mayor of Mike's town feels that Mike is a great community leader, especially in such times of so much negative news. While his father commented on how proud he was of his son, yet, Mike isn't looking for praise, but kindness in return. He hopes his acts of charity will influence others to spread positive actions in their own towns. Mike includes a handwritten message of joy on each bag. His message and star power has spread all over the country. To date, his online page to raise funds has brought in more than $44,000 and counting, raising more than $17,000 in just one day, with the help of many famous actors and others. People from all over the country are sending special handcrafted bags to help the young man with his mission to help those in need. Many are hoping the simple act of kindness spreads. Mike is seen as hope for the future of the town, the country and the world.`,
        questions: [
          {
            n: 19,
            text: 'What does Mike Hannon do to help people in his town?',
            options: [
              {
                letter: 'A',
                text: 'Give free meals to the homeless.'
              },
              {
                letter: 'B',
                text: 'Provide shelter for the homeless.'
              },
              {
                letter: 'C',
                text: 'Help the vulnerable to cook lunches.'
              },
              {
                letter: 'D',
                text: 'Call for change in the local government.'
              }
            ],
            answer: 'A'
          },
          {
            n: 20,
            text: 'What does Mike hope others will do?',
            options: [
              {
                letter: 'A',
                text: 'Strengthen co-operation.'
              },
              {
                letter: 'B',
                text: 'Promote understanding.'
              },
              {
                letter: 'C',
                text: 'Win national support.'
              },
              {
                letter: 'D',
                text: 'Following his example.'
              }
            ],
            answer: 'D'
          },
          {
            n: 21,
            text: 'How are people all over the country responding to what Mike is doing?',
            options: [
              {
                letter: 'A',
                text: 'Spreading news of his deeds.'
              },
              {
                letter: 'B',
                text: 'Writing him thank-you notes.'
              },
              {
                letter: 'C',
                text: 'Following the example he sets.'
              },
              {
                letter: 'D',
                text: 'Sending him hand-made bags.'
              }
            ],
            answer: 'D'
          }
        ]
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2020-09-s2-p3.mp3',
        transcript: "In a recent study carried out by psychologists on the disruptive effects of smartphones, two groups of college students were given word search puzzles. The first group was told to complete the puzzles with its participants' smartphones in their line of sight. The second group, however, was told that the phones would interfere with the equipment in the experiment, and would need to be moved away from the testing area. Midway through the second group's solving of the puzzles, the experimenter called one of the phones and let it ring for a while before hanging up. Many of the students in that group were unable to focus from then on, becoming anxious and performing more poorly than the first group. Use of electronics has also been known to lead to a decline in human interactions. Rather than having real-life conversations, many express emotions and engage in deep conversations through social media sites. Many students use their phones and computers during class for non-academic activities, which leads to poor grades. Perhaps the most dramatic impact is the reduction in the amount of sleep, which leads to poor health and weight gain. Technology is a great tool; however, it's important to recognize its downsides. Lack of sleep, reduction of productivity and weight gain are only a few. If we're not careful about all these minor problems right now, the effect on the future generation is going to be much bigger.",
        questions: [
          {
            n: 22,
            text: 'What were the college students in both groups required to do in the study?',
            options: [
              {
                letter: 'A',
                text: 'To solve word search puzzles.'
              },
              {
                letter: 'B',
                text: 'To send smartphone messages.'
              },
              {
                letter: 'C',
                text: 'To test their eyesight using a phone app.'
              },
              {
                letter: 'D',
                text: 'To install some audio equipment in a lab.'
              }
            ],
            answer: 'A'
          },
          {
            n: 23,
            text: 'What do we learn about many of the students in the second test group after the phone rang?',
            options: [
              {
                letter: 'A',
                text: 'They could not go on until the ringing stopped.'
              },
              {
                letter: 'B',
                text: 'They could no longer concentrate on their task.'
              },
              {
                letter: 'C',
                text: 'They grabbed the phone and called back right away.'
              },
              {
                letter: 'D',
                text: 'They asked their experimenter to hang up the phone.'
              }
            ],
            answer: 'B'
          },
          {
            n: 24,
            text: 'According to the passage, what is the most dramatic impact of smartphone use?',
            options: [
              {
                letter: 'A',
                text: 'A rise in emotional problems.'
              },
              {
                letter: 'B',
                text: 'A decline in sports activities.'
              },
              {
                letter: 'C',
                text: 'A reduction in the amount of sleep.'
              },
              {
                letter: 'D',
                text: 'A decline in academic performance.'
              }
            ],
            answer: 'C'
          },
          {
            n: 25,
            text: 'What does the speaker suggest people do?',
            options: [
              {
                letter: 'A',
                text: 'Protect the eyesight of the younger generation.'
              },
              {
                letter: 'B',
                text: 'Take effective measures to raise productivity.'
              },
              {
                letter: 'C',
                text: 'Realize the disruptive effects of technology.'
              },
              {
                letter: 'D',
                text: 'Ensure they have sufficient sleep every day.'
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
      'NASA officials explained those thicker clouds are signs of ship traffic below.'
    ],
    '2': [
      "It's likely that these sorts of clouds are having some effect on the global climate"
    ],
    '3': [
      'More than 50 workers at the store have signed a letter calling for a permanent security guard'
    ],
    '4': [
      'the spokesman of the supermarket said the store had taken strong action in response to incidents.'
    ],
    '5': [
      'Drivers on their way to the Polish capital of Warsaw on Wednesday morning found the road blocked'
    ],
    '6': [
      'A truck carrying the sweet load hit a road barrier and overturned, blocking two lanes.'
    ],
    '7': [
      'removing the chocolate was worse than dealing with snow'
    ],
    '8': [
      "I'm trying to save money for a new phone"
    ],
    '9': [
      'we have less connection with the value of our money'
    ],
    '10': [
      'I may have developed a tendency to buy more small or non-essential items.'
    ],
    '11': [
      'I stopped using my credit card because I found I was spending excessively.'
    ],
    '12': [
      'The table is fine. The problem is the chairs.'
    ],
    '13': [
      'Do you mind describing the chairs that were delivered to your apartment, Mr. Brown?'
    ],
    '14': [
      'We will send a van to collect those four and replace them with the Milano you purchased.'
    ],
    '15': [
      "Once again, I'm sorry for the confusion and trouble caused."
    ],
    '16': [
      'a home improvement show based on her wildly popular book The Life-Changing Magic of Tidying Up'
    ],
    '17': [
      'examine each item—all of them—to see if it sparks joy'
    ],
    '18': [
      "One used bookstore received a month's worth of books in donations in a week"
    ],
    '19': [
      'Mike delivers meals to the homeless.'
    ],
    '20': [
      'He hopes his acts of charity will influence others to spread positive actions in their own towns.'
    ],
    '21': [
      'People from all over the country are sending special handcrafted bags'
    ],
    '22': [
      'two groups of college students were given word search puzzles'
    ],
    '23': [
      'Many of the students in that group were unable to focus from then on'
    ],
    '24': [
      'the most dramatic impact is the reduction in the amount of sleep'
    ],
    '25': [
      "it's important to recognize its downsides"
    ]
  }
}

export default LISTENING
