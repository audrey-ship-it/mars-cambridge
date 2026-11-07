// 2025年6月第二套 CET-4 听力数据
// 答案：解析 PDF 逐题读图核对；原文：解析 PDF 官方听力原文（读图抄录）
// verified: true
const LISTENING = {
  id: 'cet4-2025-06-s2',
  meta: {
    level: 'CET4',
    year: 2025,
    month: 6,
    set: 2,
    source:
      '原题：2025.06四级真题第2套.pdf；音频：2025年06月四级听力音频第2套.mp3；原文：2025.06英语四级解析第2套.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2025-06-s2-a.mp3', // Section A 0.0-432.6s
    conv: '/audio/cet4-2025-06-s2-b.mp3', // Section B 432.6-840.0s
    pass: '/audio/cet4-2025-06-s2-c.mp3', // Section C 840.0-1426.3s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2025-06-s2-n1.mp3', // 0-168.6s
        transcript:
          'A Florida teenager and an Atlanta woman won the overall men\'s and women\'s divisions Saturday at the annual 7 Mile Bridge Run. Vaclav Bursa, 15, of Big Pine Key, Florida, finished first overall. He completed the race in 41 minutes and 1 second and claimed the top spot in the men\'s division. Bursa won third place in the 2022 race. He is a student at Marathon High School. Joanna Stephens, 28, of Atlanta, completed the course in 41 minutes and 12 seconds. She won the women\'s division title and placed second overall. The race drew competitors from 41 US states. There were also runners from other countries, including Canada, the UK and Switzerland. The run closed the span between the Middle and Lower Keys to traffic for 3 hours Saturday. The April contest is one of the most popular running events in the southeastern United States. The race field filled within minutes after online registration opened in January.',
        questions: [
          {
            n: 1,
            text: 'What does the news report say about Vaclav Bursa and Joanna Stephens?',
            options: [
              { letter: 'A', text: 'They are young teenagers from Atlanta.' },
              { letter: 'B', text: 'They won this year\'s 7 Mile Bridge Run.' },
              { letter: 'C', text: 'They completed the race in less than 40 minutes.' },
              { letter: 'D', text: 'They are both students at Marathon High School.' },
            ],
            answer: 'B',
          },
          {
            n: 2,
            text: 'What do we learn about the April contest?',
            options: [
              { letter: 'A', text: 'It drew competitors from more than 40 countries.' },
              { letter: 'B', text: 'It is watched live online by fans all over the world.' },
              { letter: 'C', text: 'It closed the city of Big Pine Key to traffic for three hours.' },
              { letter: 'D', text: 'It is one of the most popular running events in the southeastern U.S.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2025-06-s2-n2.mp3', // 168.6-284.5s
        transcript:
          'British astronaut Tim Peake is stepping down permanently from his role as a European astronaut. He\'s going to take up a full-time position as ambassador for science and space instead—work he\'s been doing since 2019. The former British Army Air Corps helicopter pilot was selected as a European Space Agency astronaut in 2009. He flew to the station for a 6-month tour in 2015. The tour saw him control a robot on earth remotely from orbit. He also helped dock two spacecraft. Tim said, "Being an astronaut has been the most extraordinary experience. I\'ve had the privilege of working with an exceptional team of individuals during the past 13 years with the agency. It has been incredibly exciting and rewarding. By assuming the role of an ambassador for human flights to space, I\'ll continue to support the European and the UK space agencies."',
        questions: [
          {
            n: 3,
            text: 'What do we learn from the news report about Tim Peake?',
            options: [
              { letter: 'A', text: 'He was once a full-time ambassador.' },
              { letter: 'B', text: 'He was soon to retire from the army.' },
              { letter: 'C', text: 'He became an astronaut in 2015.' },
              { letter: 'D', text: 'He used to be a helicopter pilot.' },
            ],
            answer: 'D',
          },
          {
            n: 4,
            text: 'What does Tim Peake say about his work with the European Space Agency?',
            options: [
              { letter: 'A', text: 'It has been unbelievably exciting and rewarding.' },
              { letter: 'B', text: 'It has been extraordinarily tough and demanding.' },
              { letter: 'C', text: 'It has contributed a great deal to human flights to space.' },
              { letter: 'D', text: 'It has given him exceptional privilege as an ambassador.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2025-06-s2-n3.mp3', // 284.5-432.6s
        transcript:
          'An Asda store in Wales is now home to five cats after they wandered in and made themselves comfortable. The supermarket is known for its loyal customers, but now has a different kind of visitor that has appeared over the last year. Regular shoppers at the supermarket are familiar with the sight of several cats settling down in the shop aisles. The unusual situation started about 12 months ago, when one cat routinely started visiting the store. Local newspapers reported that puzzled customers posted on Facebook groups to try to find out if the cat was lost. But its owner assured the concerned customers it was very much loved and fed at home. It just enjoyed visiting the shop. Staff did their best to discourage the pet from hanging around. But instead of leaving and never coming back, it invited its friends round. There are now at least five different cats who come almost on a daily basis. They visit the store so much that staff have been forced to put up signs, asking their customers not to feed them.',
        questions: [
          {
            n: 5,
            text: 'What do we learn about the five cats seen in the Asda store?',
            options: [
              { letter: 'A', text: 'They are known for their loyalty to their owners.' },
              { letter: 'B', text: 'They are brought in by the store\'s customers.' },
              { letter: 'C', text: 'They are regular visitors to the store.' },
              { letter: 'D', text: 'They are pets kept by the store staff.' },
            ],
            answer: 'C',
          },
          {
            n: 6,
            text: 'What did some customers think when they saw the first cat routinely appear in the store?',
            options: [
              { letter: 'A', text: 'It might be a nuisance to the loyal shoppers.' },
              { letter: 'B', text: 'It might have been abandoned by its owner.' },
              { letter: 'C', text: 'It might be 12 months old.' },
              { letter: 'D', text: 'It might have got lost.' },
            ],
            answer: 'D',
          },
          {
            n: 7,
            text: 'What are customers asked not to do?',
            options: [
              { letter: 'A', text: 'Feed the cats.' },
              { letter: 'B', text: 'Remove any store signs.' },
              { letter: 'C', text: 'Sit in the shop aisles.' },
              { letter: 'D', text: 'Bring in pets with them.' },
            ],
            answer: 'A',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2025-06-s2-c1.mp3', // 432.6-646.9s
        transcript:
          'W: I\'ve been thinking about moving off campus next semester. M: Hmm... I don\'t know if that\'s a good idea as your mother and I would worry about you living all by yourself in an apartment so far from home. And then there\'s the expense, too. I\'m not sure we can afford it. W: Well, I wouldn\'t be alone, actually. Three of my friends from the dormitory would share the place with me. And with four of us, it wouldn\'t cost any more than living in the dorm. M: Are you sure about that? Rents in big cities are high, and then there\'s the cost of electricity and gas. Have you factored those in? W: We\'ve budgeted for those, and for Internet and transportation. And if we move far enough from the city center, the rent is low enough for us to afford all of it. M: What\'s about the commute to and from campus? It sounds like you\'ll be wasting several hours every day on the road instead of studying. W: It\'s about an hour to campus, but there\'s no reason I can\'t study on the bus. After all, I did that during high school and my commute was even longer then. M: That\'s true. But I\'m not sure why you want to leave campus and go through all that trouble when the cost is the same. W: For a lot of reasons. We\'d have a kitchen, so we could cook ourselves. And we\'d each have our own bedroom, where we could study instead of going to the library. We just have more space and privacy. M: I\'m not convinced that the benefits are greater than the disadvantages, but I\'ll discuss this with your mother.',
        questions: [
          {
            n: 8,
            text: 'What has the woman been thinking of doing next semester?',
            options: [
              { letter: 'A', text: 'Sharing her room with friends.' },
              { letter: 'B', text: 'Cutting down her living expenses.' },
              { letter: 'C', text: 'Living off campus.' },
              { letter: 'D', text: 'Moving to the city center.' },
            ],
            answer: 'C',
          },
          {
            n: 9,
            text: 'What does the man suggest the woman take into consideration?',
            options: [
              { letter: 'A', text: 'The facilities available.' },
              { letter: 'B', text: 'Various costs involved.' },
              { letter: 'C', text: 'Changes in living conditions.' },
              { letter: 'D', text: 'The distance to her home.' },
            ],
            answer: 'B',
          },
          {
            n: 10,
            text: 'What does the woman say she did during high school?',
            options: [
              { letter: 'A', text: 'Went through much trouble.' },
              { letter: 'B', text: 'Commuted to save money.' },
              { letter: 'C', text: 'Studied on the bus.' },
              { letter: 'D', text: 'Lived on campus.' },
            ],
            answer: 'C',
          },
          {
            n: 11,
            text: 'What does the man say he\'ll do at the end of the conversation?',
            options: [
              { letter: 'A', text: 'Discuss the matter with the woman\'s mother.' },
              { letter: 'B', text: 'Make a decision within a few days.' },
              { letter: 'C', text: 'Try his best to persuade his wife.' },
              { letter: 'D', text: 'Weigh the benefits against the disadvantages.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2025-06-s2-c2.mp3', // 646.9-840.0s
        transcript:
          'W: Good morning. I\'m looking for a present for my nephew, Lawrence. M: Hi. Do you have anything in mind? W: I\'m not sure. No. Do you know what boys aged around ten typically like? M: For that age group, our biggest seller this year has been this action figure. It\'s called Bobo Man, and it\'s incredibly popular. W: Does it do anything? M: Not by itself. It has no batteries, if that\'s what you mean. There\'s a Bobo Man cartoon popular amongst young children, you see. And this toy is the lead character from the show. W: Oh, I understand now. I\'ve never heard of it, but I do know little Lawrence loves cartoons. Do you have any other popular toys? Perhaps something educational. M: Yes, of course. Right over here, we have dozens of puzzles for children of all ages. They are fun, great for exercising the mind and can be played either alone or in groups. W: I like this sort of idea. Lawrence has a sister who is slightly older, so maybe a game that they can play together would be good. M: What do you think of Battleships, then? It\'s a total classic. It has been around since the 1930s. W: Oh, yeah. We had one of those when growing up. M: Of course you did. Everyone did. And kids enjoy it just as much today as you and I did when we were young. Some games just never get old. W: I suppose you are right. I have fond memories playing Battleships when it was raining outside and we had to stay indoors. That\'s decided then. How much? M: 19 pounds and 90 pence, please. W: There you are. Have a nice day. M: Thank you. You too.',
        questions: [
          {
            n: 12,
            text: 'What is the woman doing?',
            options: [
              { letter: 'A', text: 'Interviewing the man.' },
              { letter: 'B', text: 'Looking for Lawrence.' },
              { letter: 'C', text: 'Choosing a present for her nephew.' },
              { letter: 'D', text: 'Helping the man with his shopping.' },
            ],
            answer: 'C',
          },
          {
            n: 13,
            text: 'How does the man describe Bobo Man, the action figure?',
            options: [
              { letter: 'A', text: 'Quite educational.' },
              { letter: 'B', text: 'Incredibly popular.' },
              { letter: 'C', text: 'Driven by batteries.' },
              { letter: 'D', text: 'Obviously childish.' },
            ],
            answer: 'B',
          },
          {
            n: 14,
            text: 'What kind of game does the woman think would be good for Lawrence?',
            options: [
              { letter: 'A', text: 'One he loves for helping exercise his mind.' },
              { letter: 'B', text: 'One he can play together with his sister.' },
              { letter: 'C', text: 'One he finds interesting and challenging.' },
              { letter: 'D', text: 'One he can play either alone or in a group.' },
            ],
            answer: 'D',
          },
          {
            n: 15,
            text: 'What do we learn from the conversation about the game Battleships?',
            options: [
              { letter: 'A', text: 'It has been enjoyed by kids for decades.' },
              { letter: 'B', text: 'It always reminds people of times of war.' },
              { letter: 'C', text: 'It has been played both indoors and outdoors.' },
              { letter: 'D', text: 'It distinguishes itself as one of the oldest games.' },
            ],
            answer: 'A',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2025-06-s2-p1.mp3', // 840.0-1041.8s
        transcript:
          'We assume that if we offer our customers more choices, then they\'ll be more likely to buy our products. But here\'s the paradox of choice: if a person is presented with too many choices, they are actually less likely to buy. In 2012, psychologists published a study about jams. On a regular day at a local food market, people would find a display table with 24 different kinds of jams. Then on another day, at that same food market, people were given only 6 different types of jam choices. Guess which display table led to more sales? The study found that while the bigger display table created more interest, people were almost 10 times less likely to purchase a jar of jam than in the case of the smaller display. Customer satisfaction takes a hit as well. In the study, the bigger display of jams leads to lower customer satisfaction than the smaller display. In an extensive study published in 2015, researchers analyzed a total of 99 choice studies and specifically looked at those cases in which reducing choices helped to boost sales. They found four rules that motivate consumers to buy: when people want to make a quick and easy choice, when the product is complex, when it\'s difficult to compare alternatives, and when consumers don\'t have clear preferences. So as you can see, when it comes to choices, less is more.',
        questions: [
          {
            n: 16,
            text: 'What do we learn from the passage about the paradox of choice?',
            options: [
              { letter: 'A', text: 'A display of a variety of products increases consumers\' interest.' },
              { letter: 'B', text: 'Too many choices decrease one\'s desire to buy.' },
              { letter: 'C', text: 'Fewer choices lead to lower customer satisfaction.' },
              { letter: 'D', text: 'Customers given more choices are more likely to get confused.' },
            ],
            answer: 'B',
          },
          {
            n: 17,
            text: 'What did the psychologists want to find out in their 2012 study about jams?',
            options: [
              { letter: 'A', text: 'What kind of display results in more sales.' },
              { letter: 'B', text: 'What kind of display creates more interest.' },
              { letter: 'C', text: 'What kind of display attracts a greater crowd of customers.' },
              { letter: 'D', text: 'What kind of display leads to greater customer satisfaction.' },
            ],
            answer: 'A',
          },
          {
            n: 18,
            text: 'What is the finding of an extensive study published in 2015?',
            options: [
              { letter: 'A', text: 'There are situations where customers buy nothing.' },
              { letter: 'B', text: 'There are tricks to increase customer satisfaction.' },
              { letter: 'C', text: 'There are ways to predict customer preferences.' },
              { letter: 'D', text: 'There are rules that motivate customers to buy.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2025-06-s2-p2.mp3', // 1041.8-1222.6s
        transcript:
          'The New Year has come and gone, and many may have already forgotten what they had resolved to do on January 1st. But if that resolution was to volunteer more, now is the best time to start. Volunteering can drop after the holiday season, and by February, some organizations lack the volunteers they had in surplus just a month ago. According to one survey, only 26% of Americans volunteered, despite reports that many Americans view volunteering as worthwhile. Why such a disconnect? Most people cite time and conflicting work schedules as major barriers, but employees and employers would actually benefit if companies made employee volunteering part of the job. Researchers have found donating our time and talent to others can lower blood pressure, boost happiness and improve mental and physical health. Studies have also linked employee volunteer programs with more productive employees. With so much emphasis on employee wellness these days, company volunteer programs could be the perfect 2025 resolution. But for volunteering to benefit employees and the workplace, the entire organization needs to be involved. By allowing employees to donate their time during work hours, the workplace becomes an outlet for personal fulfillment without affecting personal time. In one survey, 89% of employees perceived companies that sponsored volunteer activities as creating a better working environment, and 75% said volunteering was critical to their well-being.',
        questions: [
          {
            n: 19,
            text: 'What do many Americans think of volunteering?',
            options: [
              { letter: 'A', text: 'Stressful.' },
              { letter: 'B', text: 'Burdensome.' },
              { letter: 'C', text: 'Worthwhile.' },
              { letter: 'D', text: 'Energy-boosting.' },
            ],
            answer: 'C',
          },
          {
            n: 20,
            text: 'How can companies ensure both employees and employers benefit from volunteering?',
            options: [
              { letter: 'A', text: 'By linking it with employees\' salary.' },
              { letter: 'B', text: 'By taking it as the New Year resolution.' },
              { letter: 'C', text: 'By improving work schedules.' },
              { letter: 'D', text: 'By making it part of the job.' },
            ],
            answer: 'D',
          },
          {
            n: 21,
            text: 'What did 75% of employees say about volunteering in a survey?',
            options: [
              { letter: 'A', text: 'It was very important to their well-being.' },
              { letter: 'B', text: 'It had taken little of their spare time.' },
              { letter: 'C', text: 'It was an outlet for their personal fulfillment.' },
              { letter: 'D', text: 'It helped improve their working environment.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2025-06-s2-p3.mp3', // 1222.6-1423.4s
        transcript:
          'The vast majority of the UK\'s 200,000 tonnes of retail sectors annual food waste comes from supermarkets. But it\'s a problem that impacts independent luxury food suppliers too. The scale is small. It\'s estimated at less than one per cent of the UK\'s food waste total. But the quality from these suppliers is high. Everything from specialist cheeses to sought-after coffee beans gets thrown away every day in the current food system. This is where French entrepreneur Sophie André comes in. In 2016 she moved to London and began by setting up a business delivering luxury hand-made food across the city. "Food delivery seems to be a big thing here," she says. "So I started delivering products by bicycle. Talking with local producers I learned that a small part of the production is sometimes wasted due to problems with size or shape, but the quality of the products remains unchanged." Unlike many food waste projects that have sprung up in recent years, the idea is not simply to redistribute waste food, but to provide a high-quality product. André\'s company Elysia offers breakfasts and snacks specifically aimed at business meetings and events. Once sourced, Elysia uses waste products to create "simple, natural, straightforward" meals and snacks. Perhaps unlike other waste food, the supply is regular. Suppliers will always have a certain amount of surplus. So the menus remain regular too. André believes this benefits both her business and her customers.',
        questions: [
          {
            n: 22,
            text: 'What do we learn about the UK\'s retail sector food waste?',
            options: [
              { letter: 'A', text: 'It amounts to 2,000 tons daily.' },
              { letter: 'B', text: 'It mostly comes from supermarkets.' },
              { letter: 'C', text: 'It is estimated at 11% of the UK\'s total food supply.' },
              { letter: 'D', text: 'It has a lot to do with independent luxury food suppliers.' },
            ],
            answer: 'B',
          },
          {
            n: 23,
            text: 'What does Sophie André\'s business do in London?',
            options: [
              { letter: 'A', text: 'It rents bicycles to deliver food.' },
              { letter: 'B', text: 'It sells sought-after coffee beans.' },
              { letter: 'C', text: 'It delivers luxury hand-made food.' },
              { letter: 'D', text: 'It recycles waste food from the city.' },
            ],
            answer: 'C',
          },
          {
            n: 24,
            text: 'In what way does Sophie André\'s business differ from many food waste projects?',
            options: [
              { letter: 'A', text: 'It pays special attention to the size and shape of its products.' },
              { letter: 'B', text: 'It tries to escape the constraints of the current food system.' },
              { letter: 'C', text: 'It cooperates closely with local producers.' },
              { letter: 'D', text: 'It aims to provide high-quality products.' },
            ],
            answer: 'D',
          },
          {
            n: 25,
            text: 'Why will suppliers always have a certain amount of surplus?',
            options: [
              { letter: 'A', text: 'To ensure a regular supply.' },
              { letter: 'B', text: 'To maintain a unique menu.' },
              { letter: 'C', text: 'To make up for the waste products.' },
              { letter: 'D', text: 'To meet customers\' urgent demand.' },
            ],
            answer: 'A',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自上方 transcript）
  answerQuotes: {
    1: ['A Florida teenager and an Atlanta woman won the overall men\'s and women\'s divisions Saturday at the annual 7 Mile Bridge Run'],
    2: ['The April contest is one of the most popular running events in the southeastern United States'],
    3: ['The former British Army Air Corps helicopter pilot was selected as a European Space Agency astronaut in 2009'],
    4: ['It has been incredibly exciting and rewarding'],
    5: ['There are now at least five different cats who come almost on a daily basis'],
    6: ['puzzled customers posted on Facebook groups to try to find out if the cat was lost'],
    7: ['staff have been forced to put up signs, asking their customers not to feed them'],
    8: ['I\'ve been thinking about moving off campus next semester'],
    9: ['Rents in big cities are high, and then there\'s the cost of electricity and gas'],
    10: ['It\'s about an hour to campus, but there\'s no reason I can\'t study on the bus'],
    11: ['I\'ll discuss this with your mother'],
    12: ['I\'m looking for a present for my nephew, Lawrence'],
    13: ['our biggest seller this year has been this action figure. It\'s called Bobo Man, and it\'s incredibly popular'],
    14: ['Lawrence has a sister who is slightly older, so maybe a game that they can play together would be good'],
    15: ['kids enjoy it just as much today as you and I did when we were young. Some games just never get old'],
    16: ['if a person is presented with too many choices, they are actually less likely to buy'],
    17: ['In 2012, psychologists published a study about jams. On a regular day at a local food market, people would find a display table with 24 different kinds of jams'],
    18: ['They found four rules that motivate consumers to buy'],
    19: ['According to one survey, only 26% of Americans volunteered, despite reports that many Americans view volunteering as worthwhile'],
    20: ['employees and employers would actually benefit if companies made employee volunteering part of the job'],
    21: ['75% said volunteering was critical to their well-being'],
    22: ['The vast majority of the UK\'s 200,000 tonnes of retail sectors annual food waste comes from supermarkets'],
    23: ['began by setting up a business delivering luxury hand-made food across the city'],
    24: ['the idea is not simply to redistribute waste food, but to provide a high-quality product'],
    25: ['Suppliers will always have a certain amount of surplus'],
  },
}

export default LISTENING
