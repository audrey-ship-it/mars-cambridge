// 2021年12月第二套 CET-4 听力数据
// 答案：解析 PDF 文字层逐题核对；原文：解析 PDF 官方听力原文；题目选项：真题 docx 文本（双栏错位已重新配对）
// verified: true
const LISTENING = {
  id: 'cet4-2021-12-s2',
  meta: {
    level: 'CET4',
    year: 2021,
    month: 12,
    set: 2,
    source:
      '原题：2021.12四级真题第2套.pdf；音频：2021.12四级听力第2套.MP3；原文：2021.12英语四级解析第2套.pdf',
    answerSource: '解析 PDF（OCR 原文+核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2021-12-s2-a.mp3', // Section A 0-407.9s
    conv: '/audio/cet4-2021-12-s2-b.mp3', // Section B 407.9-832.7s
    pass: '/audio/cet4-2021-12-s2-c.mp3', // Section C 832.7-1413.7s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2021-12-s2-n1.mp3', // 0-145.2s
        transcript:
          'A 22-year-old Chinese woman who suffered from a persistent cough was shocked to learn that she had a piece of chicken bone lodged in her lung. The unnamed woman, from the province of Shandong, started to have coughing problems when she was 7 or 8 years old. For 14 years, she made numerous hospital visits. However, no doctor could identify any problem. Her uncontrollable coughing was a mystery. Finally, the woman got a full body scan at a hospital in the city of Qingdao. This special medical procedure revealed she had a chicken bone stuck in her lung. Doctors performed surgery and removed the bone. The simple procedure went smoothly and the woman has recovered fully. With the bone finally removed from her lung, the woman is very happy that she no longer suffers from that annoying cough.',
        questions: [
          {
            n: 1,
            text: 'What was the woman\'s problem?',
            options: [
              { letter: 'A', text: 'She was pierced by a chicken bone.' },
              { letter: 'B', text: 'She was coughing all the time.' },
              { letter: 'C', text: 'She suffered from lung cancer.' },
              { letter: 'D', text: 'She suffered from shock.' },
            ],
            answer: 'B',
          },
          {
            n: 2,
            text: 'How was the woman\'s problem eventually solved?',
            options: [
              { letter: 'A', text: 'By eating chicken soup daily.' },
              { letter: 'B', text: 'Through regular exercising.' },
              { letter: 'C', text: 'Through a surgical operation.' },
              { letter: 'D', text: 'By using traditional Chinese medicine.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2021-12-s2-n2.mp3', // 145.2-264.4s
        transcript:
          'A white sheep named Prickles that ran away from an Australian farm during the 2013 bushfires, recently returned home. According to farmer Alice Gray, Prickles was only a lamb when she ran away. The bushfires that hit the area back then destroyed a large part of her family\'s massive property. They thought Prickles had died in the fire. But instead, the young sheep escaped into a 200-acre forest near the farm. Once the fires were over, the family had to fix the damage done to the farm, as it was such a large property. This included rebuilding about 50 kilometres of fencing. It was this huge fencing that prevented Prickles from finding her way back. Over the years, the family spotted her a few times. They even recorded her with cameras installed to monitor deer activity. But while they knew Prickles was alive, they couldn\'t find her and never expected her to return by herself. Seven years later, they were proven wrong.',
        questions: [
          {
            n: 3,
            text: 'What does the news report say about the white sheep Prickles?',
            options: [
              { letter: 'A', text: 'It was born 13 years ago.' },
              { letter: 'B', text: 'It was Alice Gray\'s lovely pet.' },
              { letter: 'C', text: 'It got injured in a big bushfire.' },
              { letter: 'D', text: 'It ran away into a nearby forest.' },
            ],
            answer: 'D',
          },
          {
            n: 4,
            text: 'What did the family do after the bushfires?',
            options: [
              { letter: 'A', text: 'They rebuilt the fencing around their farm.' },
              { letter: 'B', text: 'They spent seven years replanting their farm.' },
              { letter: 'C', text: 'They claimed damages for their heavy losses.' },
              { letter: 'D', text: 'They installed a camera to monitor sheep activity.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2021-12-s2-n3.mp3', // 264.4-407.9s
        transcript:
          'Tons of gold have fallen out of the sky in Russia after a cargo plane malfunctioned in midair this morning. The aircraft was carrying 265 million pounds worth of gold and diamonds, when the door flew open sending the precious metal back to earth. According to the official news agency, Russian authorities have recovered more than 170 gold bars weighing 20 kilograms each. The plane was traveling from Yakutsk Airport in a major diamond-producing region to the city Krasnoyarsk in Siberia. However, the aircraft made an emergency landing in Magan after it began losing some of its valuable cargo. Reports suggest some bars of gold were scattered up to 15 miles away from the airport. Nine tons of gold on plane AN-12 belonged to a goldmine company. Police have sealed off the runway, and say it is unclear if it was an accident or an attempted robbery. Technical engineers who worked on the plane prior to take-off are reportedly going to be questioned by the police.',
        questions: [
          {
            n: 5,
            text: 'What is the news report mainly about?',
            options: [
              { letter: 'A', text: 'The disappearance of some gold and diamonds.' },
              { letter: 'B', text: 'The transfer of tons of precious metal by air.' },
              { letter: 'C', text: 'The crash of a Russian cargo airplane.' },
              { letter: 'D', text: 'The loss of gold from an airplane.' },
            ],
            answer: 'D',
          },
          {
            n: 6,
            text: 'What did the aircraft do when the incident happened?',
            options: [
              { letter: 'A', text: 'It made an emergency landing.' },
              { letter: 'B', text: 'It informed the local police at once.' },
              { letter: 'C', text: 'It contacted the goldmine company.' },
              { letter: 'D', text: 'It had a crew member fix the problem.' },
            ],
            answer: 'A',
          },
          {
            n: 7,
            text: 'What does the news report say about the technical engineers who worked on the plane before take-off?',
            options: [
              { letter: 'A', text: 'They will cooperate with the police.' },
              { letter: 'B', text: 'They had checked the plane carefully.' },
              { letter: 'C', text: 'They will be questioned by the police.' },
              { letter: 'D', text: 'They took some gold bars and diamonds.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2021-12-s2-c1.mp3', // 407.9-630.4s
        transcript:
          'M: Hello, you\'re through to customer service. This is Michael speaking. Before we continue, I just want to make you aware that this call is being recorded and may be used in the future for training purposes. What can I help you with today? W: Hi, my name is Jean Seimon. I recently bought an office chair from your company, but I returned it about a week ago. I\'m just calling to inquire when I will be able to get my money back. It says on your website that your company will pay back the money within three working days of you receiving the returned item. But it\'s been five working days and I haven\'t received anything. M: I\'m sorry to hear that, Miss Seimon. What\'s your customer reference number, please? W: It\'s 389460. M: Okay, 389460. I\'m just looking on the system here. And according to our records, the chair you returned was received by our warehouse on Friday morning. The payment was made on Wednesday. But this seems to be a problem with your card number. W: My card number? Oh, maybe it has something to do with my new card. It was sent to me on Tuesday. Maybe the bank canceled my old one before you\'ve made the payment. M: Well, you\'ll need to update your card details directly on our website. Just make sure you\'re logged in. And then under the description of your personal information, you should see an option for updating payment methods. W: I am logged in, and I\'ll give that a go. M: I\'ll make a note here on the system for you, so that the payment will be made tomorrow morning. W: Thank you very much.',
        questions: [
          {
            n: 8,
            text: 'Why does the man have his conversation with the woman recorded?',
            options: [
              { letter: 'A', text: 'For the company\'s records.' },
              { letter: 'B', text: 'For future training purposes.' },
              { letter: 'C', text: 'To follow the company\'s rule.' },
              { letter: 'D', text: 'To ensure information security.' },
            ],
            answer: 'B',
          },
          {
            n: 9,
            text: 'What is the woman\'s purpose of calling the furniture company?',
            options: [
              { letter: 'A', text: 'To check her customer reference number.' },
              { letter: 'B', text: 'To inquire about the price of office chairs.' },
              { letter: 'C', text: 'To get her money back for the returned chair.' },
              { letter: 'D', text: 'To make complaints about its customer service.' },
            ],
            answer: 'C',
          },
          {
            n: 10,
            text: 'What does the woman say about her bank card?',
            options: [
              { letter: 'A', text: 'She had to update its information.' },
              { letter: 'B', text: 'She forgot where she had left it.' },
              { letter: 'C', text: 'She lost it about three days ago.' },
              { letter: 'D', text: 'She was issued a new card.' },
            ],
            answer: 'D',
          },
          {
            n: 11,
            text: 'What does the man advise the woman to do?',
            options: [
              { letter: 'A', text: 'Reconsider her options for payment methods.' },
              { letter: 'B', text: 'Make a specific note on the company\'s system.' },
              { letter: 'C', text: 'Update her bank card details on the company\'s website.' },
              { letter: 'D', text: 'Upload her personal information to the company\'s website.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2021-12-s2-c2.mp3', // 630.4-832.7s
        transcript:
          'M: I\'m getting a bit hungry. W: Yes, me too. I\'m starving. Are you going to prepare a meal for us? M: No, sorry, I\'m actually pretty worn out. Let\'s just go out somewhere close to eat. W: Well, I think we should stay in and save some cash. Can we get a meal delivered? M: Yeah, great. I\'ll use that food delivery app on my phone. What do you want, fried chicken, hamburgers, or fish and chips? W: Oh, can we stay away from the junk food? How about something healthy? M: Okay, well, there\'s a place that does salads. W: Let me have a look at that. Yeah, that looks delicious. But to be honest, I\'d prefer something hot, not cold. M: How about Indian food? W: That\'s not the kind of hot I mean. I\'m just not a fan of sauces. That made me sweat and cry. I need something mild. M: Okay. So would you consider Mexican? Oh no, sorry. There\'s also very hot pepper in that. Would you like some Italian food, perhaps? It\'s a bit heavy, but it\'s great food for a cold night like this. W: Pizza? Spaghetti with creamy sauce? I know it\'s really tasty and great comfort food, but it\'s too fattening for me. I\'m trying to keep a slim figure, you know. M: Oh, you\'re really difficult to please. Well, there\'s a nice Chinese restaurant that delivers. W: Yes, I love Chinese food. Let me see. Oh, it\'s 15 kilometers away. M: That\'s a bit too far away. Do you feel like Vietnamese food then? W: Yeah, awesome. It\'s healthy, and we can afford it. M: Great. Let\'s order Vietnamese right away.',
        questions: [
          {
            n: 12,
            text: 'Why isn\'t the man going to cook?',
            options: [
              { letter: 'A', text: 'He is feeling exhausted.' },
              { letter: 'B', text: 'He is tired of cooking.' },
              { letter: 'C', text: 'He has to work late.' },
              { letter: 'D', text: 'He wants to try Asian foods.' },
            ],
            answer: 'A',
          },
          {
            n: 13,
            text: 'What does the man say he\'ll do on his phone?',
            options: [
              { letter: 'A', text: 'Book a table.' },
              { letter: 'B', text: 'Order a delivery.' },
              { letter: 'C', text: 'Download a menu.' },
              { letter: 'D', text: 'Locate a restaurant.' },
            ],
            answer: 'B',
          },
          {
            n: 14,
            text: 'What does the woman think of Indian food?',
            options: [
              { letter: 'A', text: 'It is not tasty.' },
              { letter: 'B', text: 'It is not healthy.' },
              { letter: 'C', text: 'It is too oily.' },
              { letter: 'D', text: 'It is too spicy.' },
            ],
            answer: 'D',
          },
          {
            n: 15,
            text: 'What does the man think of the woman?',
            options: [
              { letter: 'A', text: 'She is too concerned about money.' },
              { letter: 'B', text: 'She is too weight-conscious.' },
              { letter: 'C', text: 'She is too picky about food.' },
              { letter: 'D', text: 'She is too eager to please.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2021-12-s2-p1.mp3', // 832.7-1046.2s
        transcript:
          'A new study carried out by the University of Lincoln has found a link between the personalities of cat owners and the behaviour and wellbeing of their cats. The findings suggest that, just as a parent\'s personality can affect the personality of a child, the same is true for a cat and its owner. Owners—defined as individuals with high levels of anxiety, fear, anger, depression and loneliness—were more likely to have cats with behavioural issues. Such cats displayed more aggressive and anxious behavioural styles as well as more stress-related sickness. They were also more likely to have an ongoing medical condition and be overweight. The research also found that mentally well-adjusted owners had calmer, happier and healthier cats. The researchers explained that "Many owners regard their pets as a family member, and form close social bonds with them." The majority of owners want to provide the best care for their pets and it\'s therefore possible that pets could be affected by the way their owners interact with and manage them. The study highlights an important relationship between our personalities and the wellbeing of our pets. Further research is needed to investigate the causal nature of this relationship and to look at how owners\' personalities are directly influencing their pets\' behaviour and wellbeing. It is possible that the wellbeing of pets is driven by the underlying nature of the owner, not simply by their conscious decisions and behaviours.',
        questions: [
          {
            n: 16,
            text: 'What do we learn from the new study by the University of Lincoln?',
            options: [
              { letter: 'A', text: 'Owners\' personalities affect their cats\' behaviour and wellbeing.' },
              { letter: 'B', text: 'Parents\' personalities can affect the personalities of their children.' },
              { letter: 'C', text: 'Parents and cat owners alike experience high levels of anxiety.' },
              { letter: 'D', text: 'More and more people are treating pet cats like their children.' },
            ],
            answer: 'A',
          },
          {
            n: 17,
            text: 'What does the passage say most pet owners want to do?',
            options: [
              { letter: 'A', text: 'Give their pets behavioural training.' },
              { letter: 'B', text: 'Provide their pets with the best care.' },
              { letter: 'C', text: 'Know their pets\' feelings and desires.' },
              { letter: 'D', text: 'Interact with their pets in novel ways.' },
            ],
            answer: 'B',
          },
          {
            n: 18,
            text: 'What does the passage say is still needed to understand the effects of owners\' personalities on their pets?',
            options: [
              { letter: 'A', text: 'More convincing explanation.' },
              { letter: 'B', text: 'More extensive sampling.' },
              { letter: 'C', text: 'Collection of more data.' },
              { letter: 'D', text: 'Further investigation.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2021-12-s2-p2.mp3', // 1046.2-1228s
        transcript:
          '"One 60-minute run can add seven hours to your life." This was a claim made by The Times last week. The claim was based on a new review of studies about the effects of running. The review concluded that on average runners live three years longer than non-runners and that running does more to extend life than any other form of exercise. But there\'s more to running than its health benefits. Research published in recent years has shown that running changes your brain and mind in some fascinating ways, from increasing your brain function to regulating your emotions. However, the precise effects vary according to whether you engage in short, fast running or long-distance running. For example, in one study, researchers compared participants\' ability to learn new words after several minutes of intense running and after 40 minutes of gentle running. Participants were able to learn 20 percent faster after the intense running and they showed a superior memory when tested again a week later. In another study, researchers asked volunteers to jog for 30 minutes and then showed them clips from a sad movie. Participants who usually struggled to handle negative emotions were more intensely affected by the sad clips, just as you\'d expect. But crucially, this was less so if they had completed the 30-minute jog. The researchers said moderate exercise appears to have helped those participants to be less vulnerable to the impact of the sad movie.',
        questions: [
          {
            n: 19,
            text: 'What did the new review of studies claim?',
            options: [
              { letter: 'A', text: 'People should do more running than mere walking.' },
              { letter: 'B', text: 'Running is the best exercise for extending one\'s life.' },
              { letter: 'C', text: 'People should exercise at least 60 minutes every day.' },
              { letter: 'D', text: 'Running is the easiest form of exercise for most people.' },
            ],
            answer: 'B',
          },
          {
            n: 20,
            text: 'What is one effect that running has on people according to recent research?',
            options: [
              { letter: 'A', text: 'Improving their brain function.' },
              { letter: 'B', text: 'Regulating their breathing rate.' },
              { letter: 'C', text: 'Slowing down their ageing process.' },
              { letter: 'D', text: 'Accelerating their blood circulation.' },
            ],
            answer: 'A',
          },
          {
            n: 21,
            text: 'What did another study find about the participants after they had a 30-minute jog?',
            options: [
              { letter: 'A', text: 'They found it easy to control their emotions.' },
              { letter: 'B', text: 'They struggled to handle negative emotions.' },
              { letter: 'C', text: 'They were more eager to enjoy a movie.' },
              { letter: 'D', text: 'They were less affected by sad movies.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2021-12-s2-p3.mp3', // 1228-1413.7s
        transcript:
          'Welcome to the tour of the Hill House. This house built in 1904 is one of the most well-known works of Charles Hill, the famous architect. It was designed and built for a local entrepreneur and his family. Before starting the tour, let me give you a brief introduction about the design of this amazing building. Prior to beginning his design, the architect spent some time in the client\'s old home, observing their life and studying their habits. This meant that he could design the house according to the needs of the family. The client\'s main desire was to have a home with the unique design, so the architect was given complete freedom. The building style is radically different from what was the fashion of the period. At the time, most large homes were constructed of timber and brick. This one, however, is made of concrete, a novel construction material in those days. The interior of the house, including fittings and furniture, was also designed by the same person. Most of the furniture you will see is original and in good condition. However, those pieces in the children\'s bedrooms are copies built to the designs of the architect. Fortunately, all the blueprints for both the building and its contents have been preserved, so we\'ve been able to replace badly damaged furniture. Let\'s begin our tour, starting from the rooms.',
        questions: [
          {
            n: 22,
            text: 'What do we learn about the speaker?',
            options: [
              { letter: 'A', text: 'He is a tour guide.' },
              { letter: 'B', text: 'He is a famous architect.' },
              { letter: 'C', text: 'He is a local entrepreneur.' },
              { letter: 'D', text: 'He is the owner of the Hill House.' },
            ],
            answer: 'A',
          },
          {
            n: 23,
            text: 'What did the architect do before beginning his design?',
            options: [
              { letter: 'A', text: 'He studied the blueprints of other famous buildings.' },
              { letter: 'B', text: 'He inquired about his client\'s family background.' },
              { letter: 'C', text: 'He observed his client\'s life and habits.' },
              { letter: 'D', text: 'He took a tour of his client\'s old home.' },
            ],
            answer: 'C',
          },
          {
            n: 24,
            text: 'What did the architect\'s client mainly want?',
            options: [
              { letter: 'A', text: 'A house made of timber and brick.' },
              { letter: 'B', text: 'A house with a lot of free space.' },
              { letter: 'C', text: 'A house of the current fashion.' },
              { letter: 'D', text: 'A house of a unique design.' },
            ],
            answer: 'D',
          },
          {
            n: 25,
            text: 'What do we learn about the pieces of furniture in the children\'s bedrooms?',
            options: [
              { letter: 'A', text: 'They are well preserved and in pretty good shape.' },
              { letter: 'B', text: 'They are copies built to the architect\'s designs.' },
              { letter: 'C', text: 'They were designed by another architect.' },
              { letter: 'D', text: 'They were badly damaged but restored.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自听力原文，供校验与荧光笔高亮使用）
  answerQuotes: {
    1: ['Her uncontrollable coughing was a mystery.'],
    2: ['Doctors performed surgery and removed the bone.'],
    3: ['the young sheep escaped into a 200-acre forest near the farm.'],
    4: ['the family had to fix the damage done to the farm, as it was such a large property. This included rebuilding about 50 kilometres of fencing.'],
    5: ['Tons of gold have fallen out of the sky in Russia after a cargo plane malfunctioned in midair this morning.'],
    6: ['the aircraft made an emergency landing in Magan after it began losing some of its valuable cargo.'],
    7: ['Technical engineers who worked on the plane prior to take-off are reportedly going to be questioned by the police.'],
    8: ['this call is being recorded and may be used in the future for training purposes.'],
    9: ['I\'m just calling to inquire when I will be able to get my money back.'],
    10: ['maybe it has something to do with my new card. It was sent to me on Tuesday.'],
    11: ['you\'ll need to update your card details directly on our website.'],
    12: ['I\'m actually pretty worn out.'],
    13: ['I\'ll use that food delivery app on my phone.'],
    14: ['That\'s not the kind of hot I mean. I\'m just not a fan of sauces.'],
    15: ['Oh, you\'re really difficult to please.'],
    16: ['A new study carried out by the University of Lincoln has found a link between the personalities of cat owners and the behaviour and wellbeing of their cats.'],
    17: ['The majority of owners want to provide the best care for their pets'],
    18: ['Further research is needed to investigate the causal nature of this relationship'],
    19: ['running does more to extend life than any other form of exercise.'],
    20: ['from increasing your brain function to regulating your emotions.'],
    21: ['The researchers said moderate exercise appears to have helped those participants to be less vulnerable to the impact of the sad movie.'],
    22: ['Welcome to the tour of the Hill House.'],
    23: ['the architect spent some time in the client\'s old home, observing their life and studying their habits.'],
    24: ['The client\'s main desire was to have a home with the unique design'],
    25: ['those pieces in the children\'s bedrooms are copies built to the designs of the architect.'],
  },
}

export default LISTENING
