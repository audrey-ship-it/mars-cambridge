// 2024年6月第一套 CET-4 听力数据
// 答案：人工读解析 PDF 逐题核对；原文：人工读听力原文 PDF 整理；题目选项：人工读原题/解析 PDF
// verified: true
const LISTENING = {
  id: 'cet4-2024-06-s1',
  meta: {
    level: 'CET4',
    year: 2024,
    month: 6,
    set: 1,
    source: '原题：大学英语四级考试2024年6月真题【第一套】.docx；音频：2024年6月四级真题（第1套）.mp3；原文：2024年6月第1套听力原文译文.pdf',
    answerSource: '解析 PDF（人工读图逐题核对）',
    verified: true,
  },
  audioUrls: {
    news: '/audio/cet4-2024-06-s1-a.mp3', // Section A 0:00-7:09.6
    conv: '/audio/cet4-2024-06-s1-b.mp3', // Section B 7:09.6-13:43.5
    pass: '/audio/cet4-2024-06-s1-c.mp3', // Section C 13:43.5-23:29.9
  },
  transcript: '', // 见下方 transcript 段落
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2024-06-s1-n1.mp3',
        transcript: 'Six people had to move away from their home to another place after a fire broke out in a building on Main Street Saturday, officials said. Firefighters responded to a three-story building shortly after 1 p.m. for a reported structure fire, according to Norwalk Deputy Fire Chief Adam Markowitz. Markowitz said crews encountered heavy smoke coming from the second floor when they arrived. A team of about 25 firefighters then spent about 25 minutes extinguishing the flames. Officials described the structure as a mixed-use building that features commercial businesses on the first floor and residential apartments on the second and third floors. Town records list four apartments in the building. Due to smoke and heat damage, the four apartments were declared uninhabitable, and the six residents had to move to another place, officials said. No injuries were reported in connection with the fire. The Norwalk Fire Marshal is investigating the cause and origin of the fire.',
        questions: [
          {
            n: 1,
            text: 'Why did the six residents have to find another place to stay?',
            options: [
              { letter: 'A', text: 'Due to a fire alarm in their apartments.' },
              { letter: 'B', text: 'Because of the smoke and heat damage.' },
              { letter: 'C', text: 'Due to the water used to extinguish the flames.' },
              { letter: 'D', text: 'Because of the collapse of the three-story building.' },
            ],
            answer: 'B',
          },
          {
            n: 2,
            text: 'What does the news report say the Norwalk Fire Marshal is doing?',
            options: [
              { letter: 'A', text: 'Investigating the cause of the incident.' },
              { letter: 'B', text: 'Helping search for the suspect of the crime.' },
              { letter: 'C', text: 'Rescuing the businessmen trapped in the building.' },
              { letter: 'D', text: 'Checking town records for the property developer.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2024-06-s1-n2.mp3',
        transcript: 'A new study has cast doubt on historic research suggesting that the season or month of someone\'s birth is associated with an increased risk of certain mental health conditions. The study looks at symptoms of anxiety and depression among more than 70,000 older adults in Europe. A number of past studies have found the link between season of birth and mental health diagnoses. Researchers have suggested that such links could arise from various things. These include nutrient intake, sun exposure, climate, and disease exposure varying across the course of the year. However, evidence has been mixed. More recent studies have suggested that factors such as social class or economic background have more to do with these diagnoses than month of birth. Overall, the new study found no significant relationship between participants\' month of birth and symptoms of depression or anxiety. There was some variability in some countries. In Poland, depressive symptoms fluctuated a little depending on birth month. In the Czech Republic, the same was true of anxiety symptoms. But on the whole, there was no systematic pattern.',
        questions: [
          {
            n: 3,
            text: 'What have a number of past studies found about season of birth?',
            options: [
              { letter: 'A', text: 'It plays a less important role in one\'s health than nutrient intake.' },
              { letter: 'B', text: 'It impacts people\'s health to a lesser degree than sun exposure.' },
              { letter: 'C', text: 'It is associated with people\'s mental health conditions.' },
              { letter: 'D', text: 'It is linked with older adults\' symptoms of depression.' },
            ],
            answer: 'C',
          },
          {
            n: 4,
            text: 'What did the new study find about the relationship between participants\' month of birth and symptoms of depression?',
            options: [
              { letter: 'A', text: 'It was indefinite.' },
              { letter: 'B', text: 'It was systematic.' },
              { letter: 'C', text: 'It was straightforward.' },
              { letter: 'D', text: 'It was insignificant.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2024-06-s1-n3.mp3',
        transcript: 'Genetic researchers in China have made a clone of a star police dog. The clone was born in a laboratory in Beijing in December. Tests show that the clone and her mother are almost identical genetically. The mother dog helped solve multiple murders and many other crimes. The clone has already performed better than traditionally bred dogs on several tests. If the clone continues to perform as well as expected, it could mean a huge reduction in the training time for police dogs, which usually takes about five years. The ultimate goal of scientists is to produce clones of talented police dogs that can be trained in months instead of years. However, this goal is not yet possible due to the current costs of the technology. This is not the first time a clone has been made of a star police dog. In South Korea, six clones began working with the police in 2008.',
        questions: [
          {
            n: 5,
            text: 'What do the researchers\' tests show about the cloned dog?',
            options: [
              { letter: 'A', text: 'It has helped solve several murder cases.' },
              { letter: 'B', text: 'It has become a star police dog in Beijing.' },
              { letter: 'C', text: 'It has surpassed its mother in performance.' },
              { letter: 'D', text: 'It has done better than naturally born dogs.' },
            ],
            answer: 'D',
          },
          {
            n: 6,
            text: 'What is the scientists\' purpose in cloning police dogs?',
            options: [
              { letter: 'A', text: 'To speed up investigation into criminal cases.' },
              { letter: 'B', text: 'To test the feasibility of cloning technology.' },
              { letter: 'C', text: 'To cut down training expenses.' },
              { letter: 'D', text: 'To reduce their training time.' },
            ],
            answer: 'D',
          },
          {
            n: 7,
            text: 'Why does the news report say the scientists\' goal is not yet possible?',
            options: [
              { letter: 'A', text: 'Cloning is too complicated a process.' },
              { letter: 'B', text: 'The technology is yet to be accepted.' },
              { letter: 'C', text: 'Cloning is ethically controversial.' },
              { letter: 'D', text: 'The technology is too expensive.' },
            ],
            answer: 'D',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2024-06-s1-c1.mp3',
        transcript: 'W: Tom, did you see the article online about the new TV series based on the book The Three Body Problem? M: A colleague mentioned the book, but I\'ve been so busy writing my thesis that I haven\'t been able to read for pleasure in months. W: Well, sounds like if you\'re going to read anything for fun, this is the book. It\'s written by a Chinese science fiction writer. I can\'t remember his name, but he\'s written three books in all, and The Three Body Problem is the first in the series. I don\'t want to say too much and spoil it for you, but it\'s definitely got some amazing technological and sociological concepts in it. M: It does sound like it would suit my taste, but if they are making a TV series based on it now, I don\'t know if I should read the book or watch the show first. W: I think it\'s better to read the book first. It\'s rare for the show or movie to be better than the book. And then, you just end up ruining the book for yourself, if the show isn\'t very good. M: When is the show supposed to start? I\'m a bit overwhelmed with the amount of data I still need to collect to finish my thesis. But I still need to relax sometimes. W: I can\'t remember exactly. It\'s pretty soon, and it\'s going to be quite long. There are 24 episodes. Well, maybe you could download an electronic copy of the book and try to read it before the show starts. M: That\'s a good idea. And then, maybe we can watch the series together. Thanks for the tip, Alice. W: No problem.',
        questions: [
          {
            n: 8,
            text: 'How did the man get to know about the book The Three Body Problem?',
            options: [
              { letter: 'A', text: 'He read it somewhere online.' },
              { letter: 'B', text: 'He heard about it from a coworker.' },
              { letter: 'C', text: 'He read an article reviewing it.' },
              { letter: 'D', text: 'He watched a TV series based on it.' },
            ],
            answer: 'B',
          },
          {
            n: 9,
            text: 'What does the woman say she can\'t remember about the book\'s author?',
            options: [
              { letter: 'A', text: 'His publications.' },
              { letter: 'B', text: 'His first book.' },
              { letter: 'C', text: 'His address.' },
              { letter: 'D', text: 'His name.' },
            ],
            answer: 'D',
          },
          {
            n: 10,
            text: 'What does the man have to do to finish his thesis?',
            options: [
              { letter: 'A', text: 'Collect a lot more data.' },
              { letter: 'B', text: 'Relax a bit less often.' },
              { letter: 'C', text: 'Clarify many new concepts.' },
              { letter: 'D', text: 'Read more reference books.' },
            ],
            answer: 'A',
          },
          {
            n: 11,
            text: 'What will the man most probably do first after the conversation?',
            options: [
              { letter: 'A', text: 'Find out the show\'s most interesting episodes.' },
              { letter: 'B', text: 'Watch the series together with the woman.' },
              { letter: 'C', text: 'Get an e-Copy of the book to read.' },
              { letter: 'D', text: 'Check to see when the show starts.' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2024-06-s1-c2.mp3',
        transcript: 'W: Hello, good afternoon. I have an inquiry to make. It\'s about the vegetarian food festival you are holding on the 19th of August at the Newcastle City Hall. M: Yes, of course. My name\'s Philip. How can I help you? W: It says on your website that you are still looking for vendors, and I grow organic vegetables on my farm as well as doing my own home baking. Would I be able to sell both the vegetables and items baked from them at the festival? M: That\'s exactly the type of thing we are looking for. We\'re getting close to the deadline, however. Do you prefer to fill out an application on the web, or to print it out and fill it in by hand and then post it back to us? Remember that you will have to have all your certificates to hand when you\'re filling out the forms, as the standards are high and they\'ll be carefully checked before anyone will be able to sell their produce at the event. W: I should be fine with doing it on your website, and I already have all my certificates, as we run a small farm shop too. But can you give me your details anyway? M: Sure. Please address it to the Organic Organization, Vendor Applications, 112 Queens Road, Newcastle, Northumbria. The postcode is NU 29 3LJ. Remember that the closing date is next Tuesday, the 28th of June. W: That\'s absolutely wonderful. Thank you so much for your help. Goodbye.',
        questions: [
          {
            n: 12,
            text: 'Why does the woman call the man?',
            options: [
              { letter: 'A', text: 'To check the prices of his farm produce.' },
              { letter: 'B', text: 'To ask the way to the Newcastle City Hall.' },
              { letter: 'C', text: 'To inquire about the vegetarian food festival.' },
              { letter: 'D', text: 'To seek the man\'s help with her work on the farm.' },
            ],
            answer: 'C',
          },
          {
            n: 13,
            text: 'What is the man still looking for?',
            options: [
              { letter: 'A', text: 'Bakers.' },
              { letter: 'B', text: 'Vendors.' },
              { letter: 'C', text: 'Vegetarians.' },
              { letter: 'D', text: 'Organisers.' },
            ],
            answer: 'B',
          },
          {
            n: 14,
            text: 'What does the man say they are getting close to?',
            options: [
              { letter: 'A', text: 'The issuing of certificates to vendors.' },
              { letter: 'B', text: 'The completion of the baking task.' },
              { letter: 'C', text: 'The festival they are organising.' },
              { letter: 'D', text: 'The deadline for application.' },
            ],
            answer: 'D',
          },
          {
            n: 15,
            text: 'What does the man finally ask the woman to remember?',
            options: [
              { letter: 'A', text: 'The closing date of submission.' },
              { letter: 'B', text: 'The website of his company.' },
              { letter: 'C', text: 'The details of the ceremony.' },
              { letter: 'D', text: 'The organiser\'s address.' },
            ],
            answer: 'A',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2024-06-s1-p1.mp3',
        transcript: 'Supporters call it "wild camping"; opponents call it "illegal camping". What both sides accept is that there has been a boom in the past few months, with increasing numbers of visitors pitching their tents on any bit of land they fancy in the UK. In part, this reflects the fact that official campsites have been wholly or partially closed, or are overflowing in a summer when fewer people are going abroad. It is also cheap, at a time when many are worried about what the economic future holds. But it may also be an expression of a desire for getting outdoors—a response to the months of lockdown. Most of the coverage of the boom in wild camping has been negative. Camping in public parks has now been banned for August and the early part of September because campers dump litter, human waste, and even their tents on the grassland. Similar action has been taken even in Scotland, where camping is usually permitted on most of its open land. Clearly there have to be rules. It would make sense that wild campers need to ask for permission to camp from landowners, especially outside Scotland, where the law is far more restrictive. It would be common sense for people to use small tents and leave no trace of their visit. They have been attracted by a patch of land this close to wilderness, and it is their responsibility to keep it that way.',
        questions: [
          {
            n: 16,
            text: 'Why has wild camping become popular in the UK?',
            options: [
              { letter: 'A', text: 'Most scenic sites have been closed.' },
              { letter: 'B', text: 'Access to official campsites is limited.' },
              { letter: 'C', text: 'Health experts advise going outdoors.' },
              { letter: 'D', text: 'People have more time during the summer.' },
            ],
            answer: 'B',
          },
          {
            n: 17,
            text: 'Why is camping banned for part of the summer in public parks?',
            options: [
              { letter: 'A', text: 'It is strongly opposed by nearby residents.' },
              { letter: 'B', text: 'It leads to much waste of public money.' },
              { letter: 'C', text: 'It has caused environmental concerns.' },
              { letter: 'D', text: 'It has created conflicts among campers.' },
            ],
            answer: 'C',
          },
          {
            n: 18,
            text: 'What does the speaker suggest campers do?',
            options: [
              { letter: 'A', text: 'Look for open land in Scotland.' },
              { letter: 'B', text: 'Leave no trace of their camping.' },
              { letter: 'C', text: 'Avoid getting close to wilderness.' },
              { letter: 'D', text: 'Ask for permission from authorities.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2024-06-s1-p2.mp3',
        transcript: 'Imagine you\'re floating down the Amazon River, minding your own business—calmly keeping an eye out for alarmingly large snakes—and a curious pink dolphin appears to swim alongside. While this may seem like a mythical creature, pink dolphins do exist in the Amazon region. The Amazon river dolphin is a giant among its species. It can measure up to 2 meters long and weigh around 204 kilograms. Size isn\'t the only thing that sets the Amazon river dolphin apart. Thriving in South American rivers and temporary lakes caused by seasonal flooding, this freshwater dolphin is sometimes shockingly pink. Although born gray, males of the species are easily identified as they enter adulthood by a decisive pink shade. Their unusual coloring is believed to be the result of scar tissue from dolphin fights—whether playfighting or a serious bid for a mate. The deeper the pink, the more attractive the males are believed to be, and the older the male, the more pink it will have. There\'s also a theory that this color helps the dolphins more readily blend in with their surroundings. During heavy rains, rivers along the Amazon rainforest turn a pink shade, and with it male dolphins are harder to detect. The Amazon wetland system, fed by the Amazon River, is a crucial place for pink dolphins to breed, and since 2018 has been granted internationally protected status.',
        questions: [
          {
            n: 19,
            text: 'What does the passage say about pink dolphins?',
            options: [
              { letter: 'A', text: 'They outcompete mythical creatures.' },
              { letter: 'B', text: 'They usually mind their own business.' },
              { letter: 'C', text: 'They truly exist in the Amazon region.' },
              { letter: 'D', text: 'They resemble alarmingly large snakes.' },
            ],
            answer: 'C',
          },
          {
            n: 20,
            text: 'The unusual coloring of pink dolphins is believed to originate in what?',
            options: [
              { letter: 'A', text: 'Scar tissue from dolphins\' fighting.' },
              { letter: 'B', text: 'Skin infection from water pollution.' },
              { letter: 'C', text: 'Unhealed wounds from snake bites.' },
              { letter: 'D', text: 'Swimming along in seasonal floods.' },
            ],
            answer: 'A',
          },
          {
            n: 21,
            text: 'What has become of the Amazon wetland system since 2018?',
            options: [
              { letter: 'A', text: 'It has been shrinking at an astonishing pace.' },
              { letter: 'B', text: 'It has been placed under international protection.' },
              { letter: 'C', text: 'It has been appealing to both freshwater and sea dolphins.' },
              { letter: 'D', text: 'It has been abandoned as a battleground for male dolphins.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2024-06-s1-p3.mp3',
        transcript: 'In a new Merrill Lynch/Age Wave survey, a full 70% of the early adults said they received financial support from their parents in the past year and 58% said they couldn\'t afford their current lifestyles without it. The most common types of financial support include cell phone plans, food, school costs and car expenses. Parental financial support of early adults, said Ken Dychtwald, CEO of Age Wave, is "the new normal." But 64% of the young adults surveyed said parents\' financial support to children age 25 to 34 is "a bad thing," because it makes those kids dependent. By contrast, only 29% thought supporting men and women age 18 to 24 is bad; the remaining 71% thought that assistance "helps the adult children get ahead." Dychtwald believes the young women and men surveyed were saying that by 25, younger adults ought to be financially independent. In fact, the respondents said, financial independence defines adulthood. "Financial independence is something they were struggling with and challenged by. And it scared them a bit," Dychtwald said. One big reason they\'re struggling is attributed to college loans, of which the average amounts to $37,000. Many of the parents have taken on college loans for the kids, too, sometimes at the expense of their own finances. In the survey, 60% of early adults define financial success as being debt-free. Whether that\'s likely, or even possible, anytime soon, is anyone\'s guess.',
        questions: [
          {
            n: 22,
            text: 'What do we learn from a new survey by Merrill Lynch/Age Wave?',
            options: [
              { letter: 'A', text: 'About 58% of young adults call parental support the new normal.' },
              { letter: 'B', text: 'Most adult children enjoy increasing sources of financial support.' },
              { letter: 'C', text: 'A full 70% of the young adults cannot afford to buy a car by themselves.' },
              { letter: 'D', text: 'Most early adults cannot sustain their lifestyles without parental support.' },
            ],
            answer: 'D',
          },
          {
            n: 23,
            text: 'Why did most young adults in the survey say financial support to children aged 25 to 34 is a bad thing?',
            options: [
              { letter: 'A', text: 'It renders them dependent.' },
              { letter: 'B', text: 'It causes them to lose dignity.' },
              { letter: 'C', text: 'It makes them mentally immature.' },
              { letter: 'D', text: 'It hinders them from getting ahead.' },
            ],
            answer: 'A',
          },
          {
            n: 24,
            text: 'What did the respondents in the survey say regarding financial independence?',
            options: [
              { letter: 'A', text: 'It challenges one\'s willpower.' },
              { letter: 'B', text: 'It results from education.' },
              { letter: 'C', text: 'It calls for due assistance.' },
              { letter: 'D', text: 'It defines adulthood.' },
            ],
            answer: 'D',
          },
          {
            n: 25,
            text: 'What is one big reason young adults are struggling?',
            options: [
              { letter: 'A', text: 'Current lifestyles.' },
              { letter: 'B', text: 'Poor budgeting.' },
              { letter: 'C', text: 'College loans.' },
              { letter: 'D', text: 'Emergency expenses.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自解析 PDF 内嵌官方听力原文的 [n] 标记句，
  // 供 scripts/verify-listening-quotes.mjs 核对与后续荧光笔高亮使用）
  answerQuotes: {
    1: ['Due to smoke and heat damage, the four apartments were declared uninhabitable, and the six residents had to move to another place, officials said.'],
    2: ['The Norwalk Fire Marshal is investigating the cause and origin of the fire.'],
    3: ['A number of past studies have found the link between season of birth and mental health diagnoses.'],
    4: ['Overall, the new study found no significant relationship between participants\' month of birth and symptoms of depression or anxiety.'],
    5: ['The clone has already performed better than traditionally bred dogs on several tests.'],
    6: ['If the clone continues to perform as well as expected, it could mean a huge reduction in the training time for police dogs'],
    7: ['However, this goal is not yet possible due to the current costs of the technology.'],
    8: ['A colleague mentioned the book', 'I\'ve been so busy writing my thesis that I haven\'t been able to read for pleasure in months'],
    9: ['I can\'t remember his name, but he\'s written three books in all', 'The Three Body Problem is the first in the series'],
    10: ['I\'m a bit overwhelmed with the amount of data I still need to collect to finish my thesis'],
    11: ['maybe you could download an electronic copy of the book and try to read it before the show starts'],
    12: ['I have an inquiry to make', 'It\'s about the vegetarian food festival you are holding on the 19th of August at the Newcastle City Hall'],
    13: ['It says on your website that you are still looking for vendors'],
    14: ['We\'re getting close to the deadline'],
    15: ['Remember that the closing date is next Tuesday, the 28th of June'],
    16: ['In part, this reflects the fact that official campsites have been wholly or partially closed, or are overflowing in a summer when fewer people are going abroad'],
    17: ['Camping in public parks has now been banned for August and the early part of September because campers dump litter, human waste, and even their tents on the grassland'],
    18: ['It would be common sense for people to use small tents and leave no trace of their visit'],
    19: ['While this may seem like a mythical creature, pink dolphins do exist in the Amazon region'],
    20: ['Their unusual coloring is believed to be the result of scar tissue from dolphin fights', 'whether playfighting or a serious bid for a mate'],
    21: ['The Amazon wetland system, fed by the Amazon River, is a crucial place for pink dolphins to breed, and since 2018 has been granted internationally protected status'],
    22: ['a full 70% of the early adults said they received financial support from their parents in the past year', '58% said they couldn\'t afford their current lifestyles without it'],
    23: ['But 64% of the young adults surveyed said parents\' financial support to children age 25 to 34 is "a bad thing," because it makes those kids dependent'],
    24: ['In fact, the respondents said, financial independence defines adulthood'],
    25: ['One big reason they\'re struggling is attributed to college loans, of which the average amounts to $37,000'],
  },
}

export default LISTENING
