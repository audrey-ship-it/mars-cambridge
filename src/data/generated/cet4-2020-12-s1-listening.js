// 2020年12月第一套 CET-4 听力数据
// 答案：解析 PDF 文字层（答案速查+逐题核对）；原文：解析 PDF 文字层（OCR 补空格）；题目选项：原题 docx 文本
// verified: true
const LISTENING = {
  id: 'cet4-2020-12-s1',
  meta: {
    level: 'CET4',
    year: 2020,
    month: 12,
    set: 1,
    source:
      '原题：2020.12月四级真题第1套.pdf；音频：2020年12月四级听力第1套.mp3；原文：2020.12英语四级解析第1套.pdf',
    answerSource: '解析 PDF（OCR 原文+核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2020-12-s1-a.mp3', // Section A 0-395.7s
    conv: '/audio/cet4-2020-12-s1-b.mp3', // Section B 395.7-807.1s
    pass: '/audio/cet4-2020-12-s1-c.mp3', // Section C 807.1-1197.5s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2020-12-s1-n1.mp3', // 0-145.8s
        transcript:
          'A poisonous fish which has a sting strong enough to kill a human is invading the Mediterranean, warn scientists. The International Union for Conservation of Nature has raised concerns after the poisonous fish was spotted in the waters around Turkey, Cyprus, and the eastern Mediterranean. Native to the South Pacific and Indian Ocean, the potentially deadly fish has poisonous hooks and a painful sting capable of killing people. Although fatalities are rare, the stings can cause extreme pain and stop people breathing. The fish, often known as Devil Firefish, is a highly invasive species, and environmentalists fear its arrival could endanger other types of marine life. After being spotted in the Mediterranean, a marine scientist says, "The fish is spreading, and that\'s a cause for concern."',
        questions: [
          {
            n: 1,
            text: 'What is reported in the news?',
            options: [
              { letter: 'A', text: 'Many people have been attacked by Devil Firefish.' },
              { letter: 'B', text: 'The Mediterranean is a natural habitat of Devil Firefish.' },
              { letter: 'C', text: 'Invasive species are driving away certain native species.' },
              { letter: 'D', text: 'A deadly fish has been spotted in the Mediterranean waters.' },
            ],
            answer: 'D',
          },
          {
            n: 2,
            text: 'What is the environmentalist concerned about the spread of Devil Firefish in the Mediterranean?',
            options: [
              { letter: 'A', text: 'It could badly pollute the surrounding waters.' },
              { letter: 'B', text: 'It could pose a threat to other marine species.' },
              { letter: 'C', text: 'It could disrupt the food chains there.' },
              { letter: 'D', text: 'It could add to greenhouse emissions.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2020-12-s1-n2.mp3', // 145.8-256.7s
        transcript:
          'Almost half the center of Paris will be accessible only by foot or bicycle this Sunday to mark World Car-Free Day. This is in response to rising air pollution that made Paris the most polluted city in the world for a brief time. Mayor Anne Hidalgo promoted the first World Car-Free Day last year. Hidalgo also has supported a "Paris Breathes" day. On the first Sunday of every month, Paris clears traffic from eight lanes of the main road. About 400 miles of streets will be closed to cars. It is expected to bring significant reduction in pollution levels. Last year\'s car-free day showed a 40 percent drop in pollution levels in some parts of the city, according to an independent air pollution monitor, reports The Guardian—and sound levels dropped by 50 percent in the city\'s center.',
        questions: [
          {
            n: 3,
            text: 'What will happen on World Car-Free Day in Paris?',
            options: [
              { letter: 'A', text: 'Cars will not be allowed to enter the city.' },
              { letter: 'B', text: 'Pedestrians will have free access to the city.' },
              { letter: 'C', text: 'About half of its city center will be closed to cars.' },
              { letter: 'D', text: 'Buses will be the only vehicles allowed on its streets.' },
            ],
            answer: 'C',
          },
          {
            n: 4,
            text: 'What motivated the mayor of Paris to promote the first World Car-Free Day in her city?',
            options: [
              { letter: 'A', text: 'The unbearable traffic noise.' },
              { letter: 'B', text: 'The worsening global warming.' },
              { letter: 'C', text: 'The ever-growing cost of petrol.' },
              { letter: 'D', text: 'The rising air pollution in Paris.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2020-12-s1-n3.mp3', // 256.7-395.7s
        transcript:
          'A Philippine fisherman was feeling down on his luck when a house fire forced him to clear out his possessions and change locations. Then a good luck charm that he had kept under his bed changed his life. The unidentified man had fished out a giant pearl from the ocean when his anchor got stuck on the rock while sailing off the coastal island in the Philippines ten years ago. When he was forced to sell it, the shocked tourist agent at Puerto Princesa told him that the 77-pound giant pearl that he\'d kept hidden in his run-down wooden house was the biggest pearl in the world, which was valued at 76 million pounds. The pearl of Allah which is currently on display in a New York museum only weighs 14 pounds. That is 5 times smaller than the pearl that the fisherman just handed in. The monstrous pearl measured at one foot wide and 2.2 feet long is going to be verified by local experts and international authorities before hopefully going on display to attract more tourists in the little town.',
        questions: [
          {
            n: 5,
            text: 'What happened to the Philippine fisherman one day?',
            options: [
              { letter: 'A', text: 'His house was burnt down in a fire.' },
              { letter: 'B', text: 'Many of his possessions were stolen.' },
              { letter: 'C', text: 'His good luck charm sank into the sea.' },
              { letter: 'D', text: 'His fishing boat got wrecked on a rock.' },
            ],
            answer: 'A',
          },
          {
            n: 6,
            text: 'What was the fisherman forced to do?',
            options: [
              { letter: 'A', text: 'Change his fishing locations.' },
              { letter: 'B', text: 'Find a job in a travel agency.' },
              { letter: 'C', text: 'Sell the pearl he had kept for years.' },
              { letter: 'D', text: 'Spend a few nights on a small island.' },
            ],
            answer: 'C',
          },
          {
            n: 7,
            text: 'What did the fisherman learn from the tourist agent?',
            options: [
              { letter: 'A', text: 'His pearl could be displayed in a museum.' },
              { letter: 'B', text: 'His monstrous pearl was extremely valuable.' },
              { letter: 'C', text: 'The largest pearl in the world weighs 14 pounds.' },
              { letter: 'D', text: 'A New York museum has the world\'s biggest pearl.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2020-12-s1-c1.mp3', // 395.7-616.5s
        transcript:
          'W: Mr. Smith, it\'s a pleasure meeting you. M: Nice to meet you, too. What can I do for you? W: Well, I\'m here to show you what our firm can do for you. Astra Consultants has branches in over 50 countries, offering different business services. We are a global company with 75 years of history, and our clients include some of the world\'s largest companies. M: Thank you, Mrs. Houston. I know Astra Consultants is a famous company. But you said you would show me what you could do for me. Well, what exactly can your firm do for my company? W: We advise businesses on all matters, from market analysis to legal issues, anything a business like yours could need. Our firm offers expert advice. Could I ask you, Mr. Smith, to tell me a little about your company and the challenges you face? That way I could better respond as to how we can help you. M: Okay, sure. This is a family business started by my grandfather in 1950. We employ just over 100 people. We manufacture and export stone for buildings and other constructions. Our clients usually want a special kind of stone cut in a special design. And that\'s what we do in our factory. Our main challenge is that our national currency is rising, and we\'re losing competitive advantage to stone producers in India. W: I see. That\'s very interesting. I would suggest that you let us first conduct a financial analysis of your company, together with an analysis of your competitors in India. That way we could offer the best advice on different ways forward for you.',
        questions: [
          {
            n: 8,
            text: 'What do we learn about the woman\'s company?',
            options: [
              { letter: 'A', text: 'It boasts a fairly long history.' },
              { letter: 'B', text: 'It has over 50 business partners.' },
              { letter: 'C', text: 'It has 75 offices around the world.' },
              { letter: 'D', text: 'It produces construction materials.' },
            ],
            answer: 'A',
          },
          {
            n: 9,
            text: 'What does the man say about his own company?',
            options: [
              { letter: 'A', text: 'It was started by his father.' },
              { letter: 'B', text: 'It has about 50 employees.' },
              { letter: 'C', text: 'It is over 100 years old.' },
              { letter: 'D', text: 'It is a family business.' },
            ],
            answer: 'D',
          },
          {
            n: 10,
            text: 'What is the main problem with the man\'s company?',
            options: [
              { letter: 'A', text: 'Outdated product design.' },
              { letter: 'B', text: 'Loss of competitive edge.' },
              { letter: 'C', text: 'Shortage of raw material supply.' },
              { letter: 'D', text: 'Legal disputes in many countries.' },
            ],
            answer: 'B',
          },
          {
            n: 11,
            text: 'What does the woman suggest doing to help the man\'s company?',
            options: [
              { letter: 'A', text: 'Introducing innovative marketing strategies.' },
              { letter: 'B', text: 'Seeking new ways to increase its exports.' },
              { letter: 'C', text: 'Providing training for its staff members.' },
              { letter: 'D', text: 'Conducting a financial analysis for it.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2020-12-s1-c2.mp3', // 616.5-807.1s
        transcript:
          'W: Wow, congratulations, Simon! The place looks absolutely amazing! M: Really? You think so? W: Of course. I love it. It looks like you had a professional interior designer. But you didn\'t, did you? M: No. I did it all by myself with a little help from my brother Greg. He\'s actually in the construction business, which was really helpful. W: I honestly am impressed. I know I could probably repaint the walls in my house over a weekend or something, but not a full renovation. Where did you get your ideas? I wouldn\'t know where to start. M: Well, for a while now, I\'ve been regularly buying home design magazines. Every now and then, I\'d save a picture I liked. Believe it or not, I had a full notebook of magazine pages. Since my overall style was quite minimal, I thought and hoped a whole renovation wouldn\'t be too difficult. And sure enough, with Greg\'s help, it was very achievable. W: Was it very expensive? I\'ve imagined a project like this could be. M: Actually it was surprisingly affordable. I managed to sell a lot of my old furniture and put that extra money towards the new material. Greg was also able to get some discount materials from a recent project he was working on as well. W: Great. If you don\'t mind, I\'d like to pick your brains a bit more. Jonathan and I are thinking of renovating our sitting room, not the whole house, not yet anyway. And we\'d love to get some inspiration from your experience. Are you free to come over for a coffee early next week?',
        questions: [
          {
            n: 12,
            text: 'What do we learn about the woman from the conversation?',
            options: [
              { letter: 'A', text: 'She is a real expert at house decorations.' },
              { letter: 'B', text: 'She is really impressed by the man\'s house.' },
              { letter: 'C', text: 'She is well informed about the design business.' },
              { letter: 'D', text: 'She is attracted by the color of the sitting room.' },
            ],
            answer: 'B',
          },
          {
            n: 13,
            text: 'Where did the man get his ideas for the project?',
            options: [
              { letter: 'A', text: 'From a construction businessman.' },
              { letter: 'B', text: 'From his younger brother Greg.' },
              { letter: 'C', text: 'From home design magazines.' },
              { letter: 'D', text: 'From a professional interior designer.' },
            ],
            answer: 'C',
          },
          {
            n: 14,
            text: 'What did the man say about the project he recently completed?',
            options: [
              { letter: 'A', text: 'The cost was affordable.' },
              { letter: 'B', text: 'The style was fashionable.' },
              { letter: 'C', text: 'The effort was worthwhile.' },
              { letter: 'D', text: 'The effect was unexpected.' },
            ],
            answer: 'A',
          },
          {
            n: 15,
            text: 'Why does the woman invite the man to her house next week?',
            options: [
              { letter: 'A', text: 'She\'d like him to talk with Jonathan about a new project.' },
              { letter: 'B', text: 'She\'d like to show him around her newly-renovated house.' },
              { letter: 'C', text: 'She wants to discuss the house decoration budget with him.' },
              { letter: 'D', text: 'She wants him to share his renovation experience with her.' },
            ],
            answer: 'D',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2020-12-s1-p1.mp3', // 807.1-1021.4s
        transcript:
          'Removing foreign objects from ears and noses costs England almost three million pounds a year, a study suggests. Children were responsible for the vast majority of cases—95% of objects removed from noses and 85% from ears. Every year an average of 1,218 nose and 2,479 ear removals took place between 2010 and 2016. According to England\'s Hospital Episode Statistics, children aged one to four were the most likely to need help from doctors for a foreign object in their nose. Five-to-nine-year-olds come to the hospital with something in their ears the most. Jewellery items accounted for up to 40% of cases in both the ears and noses of children. Paper and plastic toys were the items removed next most from noses. Cotton buds and pencils were also found in ears. According to the study, the occurrence of foreign objects in children is generally attributed to curiosity. Children have an impulse to explore their noses and ears. This resulted in the accidental entry of foreign objects. Any ear, nose and throat surgeon has many weird stories about wonderful objects found in the noses and ears of children and adults. Batteries can pose a particular danger. In all cases prevention is better than cure. This is why many toys contain warnings about small parts. Recognizing problems early and seeking medical attention is important.',
        questions: [
          {
            n: 16,
            text: 'What does England spend an annual three million pounds on?',
            options: [
              { letter: 'A', text: 'Paying hospital bills for emergency cases.' },
              { letter: 'B', text: 'Doing research on ear, nose and throat diseases.' },
              { letter: 'C', text: 'Removing objects from patients\' noses and ears.' },
              { letter: 'D', text: 'Providing routine care for small children.' },
            ],
            answer: 'C',
          },
          {
            n: 17,
            text: 'What do we learn from England\'s Hospital Episode Statistics?',
            options: [
              { letter: 'A', text: 'Children aged one to four are often more curious than older children.' },
              { letter: 'B', text: 'Five-to-nine-year-olds are the most likely to put things in their ears.' },
              { letter: 'C', text: 'Many children like to put foreign objects in their mouths.' },
              { letter: 'D', text: 'Many children like to smell things they find or play with.' },
            ],
            answer: 'B',
          },
          {
            n: 18,
            text: 'What is generally believed to account for children putting things in their ears or noses?',
            options: [
              { letter: 'A', text: 'They want to attract attention.' },
              { letter: 'B', text: 'They tend to act out of impulse.' },
              { letter: 'C', text: 'They are unaware of the potential risks.' },
              { letter: 'D', text: 'They are curious about these body parts.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2020-12-s1-p2.mp3', // 1021.4-1197.5s
        transcript:
          'Good morning. Today, I would like to talk to you about my charity ReBicycle. But before that, let me introduce someone. This is Leila Rahimi. She was so scared when she first moved to New Zealand that she struggled to leave the house and would spend days working up the courage to walk to the supermarket for basic supplies. After a few months of being quite down and unhappy, she was invited to join a local bike club. At this time, ReBicycle got involved and gave Leila a second-hand bicycle. Within weeks, her depression had begun to ease as she cycled. The bicycle totally changed her life, giving her hope and a true feeling of freedom. To date, ReBicycle has donated more than 200 bikes to those in need, and is now expanding bike-riding lessons as demand soars. With a bike, newcomers here can travel farther but for almost no cost. The three hours a day, they used to spend walking to and from English language lessons, has been reduced to just one hour. Our bike-riding lessons are so successful that we are urgently looking for more volunteers. Learning to ride a bike is almost always more difficult for an adult, and this can take days and weeks, rather than hours. So if any of you have some free time during the weekend, please come join us at ReBicycle and make a difference in someone\'s life.',
        questions: [
          {
            n: 19,
            text: 'What did ReBicycle do to help Leila Rahimi?',
            options: [
              { letter: 'A', text: 'It gave her a used bicycle.' },
              { letter: 'B', text: 'It paid for her English lessons.' },
              { letter: 'C', text: 'It delivered her daily necessities.' },
              { letter: 'D', text: 'It provided her with physical therapy.' },
            ],
            answer: 'A',
          },
          {
            n: 20,
            text: 'What is ReBicycle doing to help those in need?',
            options: [
              { letter: 'A', text: 'Expanding bike-riding lessons.' },
              { letter: 'B', text: 'Providing free public transport.' },
              { letter: 'C', text: 'Offering walking tours to visitors.' },
              { letter: 'D', text: 'Asking local people for donations.' },
            ],
            answer: 'A',
          },
          {
            n: 21,
            text: 'What do we learn from the passage about ReBicycle?',
            options: [
              { letter: 'A', text: 'It is a sports club.' },
              { letter: 'B', text: 'It is a language school.' },
              { letter: 'C', text: 'It is a counseling center.' },
              { letter: 'D', text: 'It is a charity organization.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2020-12-s1-p3.mp3', // 1197.5-1389.8s
        transcript:
          'Thanks to the International Space Station, we know quite a bit about the effects of low gravity on the human body, but NASA scientists want to learn more. To that end, they have been studying how other species deal with low gravity, specifically focusing on mice. The results are both interesting and humorous. The scientists first sent some mice in a specially designed cage to the International Space Station. The cage allowed them to study the behavior of the mice remotely from Earth via video. As you\'ll notice in the video, the mice definitely seem uncomfortable at the beginning of the experiment. They move around clumsily, drifting within the small confines of the cage, and do their best to figure out which way is up, but without success. However, it\'s not long before the mice begin to catch on. They adapt remarkably well to their new environment and even use the lack of gravity to their advantage as they push themselves around the cage. That\'s when things really get wild. The eleventh day of the experiment shows the mice are not just dealing with the gravity change but actually seem to be enjoying it. Several of the mice are observed running around the cage walls. The scientists wanted to see whether the mice would continue doing the same kinds of activities they were observed doing on Earth. The study showed that the mice kept much of their routines intact, including cleaning themselves and eating when hungry.',
        questions: [
          {
            n: 22,
            text: 'What do NASA scientists want to learn about?',
            options: [
              { letter: 'A', text: 'How animals deal with lack of gravity.' },
              { letter: 'B', text: 'How mice interact in a new environment.' },
              { letter: 'C', text: 'How low gravity affects the human body.' },
              { letter: 'D', text: 'How mice imitate human behavior in space.' },
            ],
            answer: 'A',
          },
          {
            n: 23,
            text: 'What does the passage say about the mice at the beginning of the experiment?',
            options: [
              { letter: 'A', text: 'They found the space in the cage too small to stay in.' },
              { letter: 'B', text: 'They found it difficult to figure out where they were.' },
              { letter: 'C', text: 'They were not used to the low-gravity environment.' },
              { letter: 'D', text: 'They were not sensitive to the changed environment.' },
            ],
            answer: 'C',
          },
          {
            n: 24,
            text: 'What was observed about the mice on the eleventh day of the experiment?',
            options: [
              { letter: 'A', text: 'They continued to behave as they did in the beginning.' },
              { letter: 'B', text: 'They already felt at home in the new environment.' },
              { letter: 'C', text: 'They had found a lot more activities to engage in.' },
              { letter: 'D', text: 'They tried everything possible to escape from the cage.' },
            ],
            answer: 'B',
          },
          {
            n: 25,
            text: 'What did the scientists find about the mice from the experiment?',
            options: [
              { letter: 'A', text: 'They changed their routines in space.' },
              { letter: 'B', text: 'They began to eat less after some time.' },
              { letter: 'C', text: 'They behaved as if they were on Earth.' },
              { letter: 'D', text: 'They repeated their activities every day.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自听力原文，供校验与荧光笔高亮使用）
  answerQuotes: {
    1: ['the poisonous fish was spotted in the waters around Turkey, Cyprus, and the eastern Mediterranean'],
    2: ['environmentalists fear its arrival could endanger other types of marine life'],
    3: ['Almost half the center of Paris will be accessible only by foot or bicycle this Sunday to mark World Car-Free Day.'],
    4: ['This is in response to rising air pollution that made Paris the most polluted city in the world for a brief time.'],
    5: ['A Philippine fisherman was feeling down on his luck when a house fire forced him to clear out his possessions and change locations.'],
    6: ['When he was forced to sell it, the shocked tourist agent at Puerto Princesa'],
    7: ['was the biggest pearl in the world, which was valued at 76 million pounds.'],
    8: ['We are a global company with 75 years of history'],
    9: ['This is a family business started by my grandfather in 1950.'],
    10: ['Our main challenge is that our national currency is rising, and we\'re losing competitive advantage to stone producers in India.'],
    11: ['I would suggest that you let us first conduct a financial analysis of your company'],
    12: ['I honestly am impressed.'],
    13: ['I\'ve been regularly buying home design magazines.'],
    14: ['Actually it was surprisingly affordable.'],
    15: ['we\'d love to get some inspiration from your experience.'],
    16: ['Removing foreign objects from ears and noses costs England almost three million pounds a year, a study suggests.'],
    17: ['Five-to-nine-year-olds come to the hospital with something in their ears the most.'],
    18: ['the occurrence of foreign objects in children is generally attributed to curiosity.'],
    19: ['ReBicycle got involved and gave Leila a second-hand bicycle.'],
    20: ['ReBicycle has donated more than 200 bikes to those in need, and is now expanding bike-riding lessons as demand soars.'],
    21: ['Today, I would like to talk to you about my charity ReBicycle.'],
    22: ['they have been studying how other species deal with low gravity, specifically focusing on mice'],
    23: ['the mice definitely seem uncomfortable at the beginning of the experiment.'],
    24: ['The eleventh day of the experiment shows the mice are not just dealing with the gravity change but actually seem to be enjoying it.'],
    25: ['The study showed that the mice kept much of their routines intact, including cleaning themselves and eating when hungry.'],
  },
}

export default LISTENING
