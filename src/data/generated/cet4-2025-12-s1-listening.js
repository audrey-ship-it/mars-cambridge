// 2025年12月第一套 CET-4 听力数据
// 答案：解析 PDF 逐题读图核对；原文：解析 PDF 官方听力原文；题目选项：原题 PDF 文字层（双栏错位已重新配对）
// verified: true
const LISTENING = {
  id: 'cet4-2025-12-s1',
  meta: {
    level: 'CET4',
    year: 2025,
    month: 12,
    set: 1,
    source:
      '原题：2025.12四级真题第1套.pdf；音频：2025年12月四级听力第1套.mp3；原文：2025.12英语四级解析第1套.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2025-12-s1-a.mp3', // Section A 0.0-394.6s
    conv: '/audio/cet4-2025-12-s1-b.mp3', // Section B 394.6-786.0s
    pass: '/audio/cet4-2025-12-s1-c.mp3', // Section C 786.0-1377.5s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2025-12-s1-n1.mp3', // 0-142.8s
        transcript:
          'A terrified cat has survived a five-mile round trip under the engine cover of a car on a school run. The black cat was found curled up under the engine cover of David King\'s car when he decided to do an oil check after dropping his grandson off at school in Kent. Mr. King\'s wife said her husband had come "running in" and was "shouting for me to come have a look". "We weren\'t even sure it was alive. So I gently pushed it with a stick to check it was breathing and saw it was a terrified little cat. It reversed even further into the engine and was stuck. I tried to reach it but it was too far down and there wasn\'t any way I could get it out." Following a rescue by UK charity Cats Protection, the 4-year-old cat was later reunited with its owner, Mr. King\'s neighbour.',
        questions: [
          {
            n: 1,
            text: 'Where was the black cat found?',
            options: [
              { letter: 'A', text: 'At the gate of a grade school in Kent.' },
              { letter: 'B', text: 'Under the engine cover of a man\'s car.' },
              { letter: 'C', text: 'Inside the car of David King\'s neighbour.' },
              { letter: 'D', text: 'Outside the office of a charity foundation.' },
            ],
            answer: 'B',
          },
          {
            n: 2,
            text: 'What do we learn about the cat at the end of the news report?',
            options: [
              { letter: 'A', text: 'It got reunited with its owner.' },
              { letter: 'B', text: 'It was injured during the rescue.' },
              { letter: 'C', text: 'It was placed in the care of a UK charity.' },
              { letter: 'D', text: 'It became a pet of Mr. King\'s grandson.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2025-12-s1-n2.mp3', // 142.8-251.0s
        transcript:
          'In less than a month, the Special Olympic Spring Games will make a return to Fayetteville. The games are coming back for the first time in 5 years. The event will take place at Methodist University. Event organizer Benjamin Kowalczyk says he\'s excited that athletes will get a chance to come back and demonstrate their abilities. Organizers expect about 100 athletes will come out to compete in Fayetteville. They will have a variety of events to choose from including running, throwing and jumping. There will also be a fun tent for children. Kowalczyk said it\'s rewarding to see athletes with special needs triumph in the games. For anyone who wants to help make this year\'s games a massive success, there are still opportunities to volunteer for Fayetteville\'s Special Olympics. Organizers encourage them to visit the Games\' website to sign up.',
        questions: [
          {
            n: 3,
            text: 'What will Fayetteville witness in less than a month?',
            options: [
              { letter: 'A', text: 'The reunion of this year\'s Olympic gold medalists.' },
              { letter: 'B', text: 'The opening of the Special Olympics Spring Games.' },
              { letter: 'C', text: 'The first important political event in the next five years.' },
              { letter: 'D', text: 'The 100th anniversary celebration of Methodist University.' },
            ],
            answer: 'B',
          },
          {
            n: 4,
            text: 'What did Benjamin Kowalczyk say is rewarding to see?',
            options: [
              { letter: 'A', text: 'Volunteers visit the Games\' website to sign up.' },
              { letter: 'B', text: 'Children play in a fun tent and enjoy themselves fully.' },
              { letter: 'C', text: 'Organizers devote their time and energy to the Games.' },
              { letter: 'D', text: 'Athletes with special needs triumph in the Games.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2025-12-s1-n3.mp3', // 251.0-394.6s
        transcript:
          'A German supermarket has been ordered to destroy its chocolate rabbits after it lost a court battle with the Swiss chocolate manufacturer. The Swiss firm had argued its gold-wrapped chocolate rabbit deserved copyright protection from a similar product sold by the budget supermarket. Switzerland\'s highest court agreed and overturned a ruling last year by the country\'s commercial court that had sided with the supermarket. It ordered that all the imitation rabbits be destroyed, but suggested the chocolate needn\'t be wasted. It could be melted for use in other products. It said even though there are some differences between the two products, there was still the possibility of confusion for consumers. The Swiss manufacturer\'s rabbit has a red bow and bell, while the German supermarket\'s has a green bow and bell. The color of the wrapper is similar as are the illustrations of the features. The chocolate company has been to court before to protect its popular chocolate treat. Last year, a German federal court said the shade of the gold wrapping was also protected.',
        questions: [
          {
            n: 5,
            text: 'What has the German supermarket been ordered to do?',
            options: [
              { letter: 'A', text: 'Compensate for the Swiss manufacturer\'s loss.' },
              { letter: 'B', text: 'Change the wrapping of its commodities.' },
              { letter: 'C', text: 'Destroy its imitation chocolate rabbits.' },
              { letter: 'D', text: 'Defend itself in the country\'s commercial court.' },
            ],
            answer: 'C',
          },
          {
            n: 6,
            text: 'What did Switzerland\'s highest court suggest about the chocolate in question?',
            options: [
              { letter: 'A', text: 'It could be reused in other products.' },
              { letter: 'B', text: 'It could be resold cheaper to avoid waste.' },
              { letter: 'C', text: 'It could be reshaped into animals other than rabbits.' },
              { letter: 'D', text: 'It could be rewrapped and sold by the budget supermarket.' },
            ],
            answer: 'A',
          },
          {
            n: 7,
            text: 'Why did Switzerland\'s highest court overturn the commercial court\'s ruling?',
            options: [
              { letter: 'A', text: 'To be fair to the German supermarkets.' },
              { letter: 'B', text: 'To protect chocolate retailers\' interests.' },
              { letter: 'C', text: 'To prevent consumers\' possible confusion.' },
              { letter: 'D', text: 'To boost the growth of the chocolate industry.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2025-12-s1-c1.mp3', // 394.6-599.8s
        transcript:
          'M: Can you please hand me that book over there? It has instructions for making a winter bean salad. My sister\'s boyfriend is coming over for dinner. He\'s vegetarian, so I need to make a lot of vegetable dishes. W: He only eats vegetables? No meat? That doesn\'t sound like a very balanced diet. How can he get enough protein? What does he do to strengthen his muscles and all that? M: Apparently that\'s no problem. He\'s explained this to me when we first met. He eats a variety of different vegetables and nuts, especially those with high amounts of protein. W: It sounds a bit difficult, but he\'s done his research, I suppose. What\'s his reasoning for being vegetarian? Is it his religion, health condition or lifestyle? M: He\'s an animal activist. He\'s always been very sensitive and sympathizes with animals. He\'s even written to his state senator about the torture of dolphins in sea parks. He says that keeping animals in zoos and parks causes them great distress. W: That\'s a little gloomy, but I can understand that to a point. Not all zoos and animal parks have the most favorable conditions, but without them, it just wouldn\'t be feasible to learn about animals and their environments. Besides, I don\'t think I could ever give up a good hot dog at a baseball game. M: Honestly, I agree, but just don\'t let him hear you say that. He\'s the spokesperson for his local animal rights group.',
        questions: [
          {
            n: 8,
            text: 'What does the man request the woman to do?',
            options: [
              { letter: 'A', text: 'Pass a book to him.' },
              { letter: 'B', text: 'Make a vegetable dish.' },
              { letter: 'C', text: 'Return the handbook to him.' },
              { letter: 'D', text: 'Meet his sister\'s boyfriend.' },
            ],
            answer: 'A',
          },
          {
            n: 9,
            text: 'What does the woman say about eating vegetables only?',
            options: [
              { letter: 'A', text: 'It doesn\'t sound practical for her.' },
              { letter: 'B', text: 'It would do harm to one\'s muscles.' },
              { letter: 'C', text: 'It would reduce one\'s protein intake.' },
              { letter: 'D', text: 'It doesn\'t seem to be a balanced diet.' },
            ],
            answer: 'D',
          },
          {
            n: 10,
            text: 'Why does the boyfriend of the man\'s sister choose to be a vegetarian?',
            options: [
              { letter: 'A', text: 'To improve his health.' },
              { letter: 'B', text: 'To protect animal rights.' },
              { letter: 'C', text: 'To stick to his religious belief.' },
              { letter: 'D', text: 'To follow a trendy lifestyle.' },
            ],
            answer: 'B',
          },
          {
            n: 11,
            text: 'On what point does the man agree with the woman at the end of the conversation?',
            options: [
              { letter: 'A', text: 'The torture and distress dolphins suffer in parks.' },
              { letter: 'B', text: 'The urgency of joining an animal rights group.' },
              { letter: 'C', text: 'The gloomy environments animals are kept in.' },
              { letter: 'D', text: 'The necessity of having zoos and eating meat.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2025-12-s1-c2.mp3', // 599.8-786.0s
        transcript:
          'W: Did you see that television program on air travel last night? M: Yes. The part about overcoming jet lag was interesting. I was surprised that the expert recommended not eating for the entire journey and avoiding sleeping on the plane. W: I was too. As I read an article on the subject in the past that suggested the opposite, it claimed that it was important to not miss meals and that taking a nap on the plane was the best way to adjust to a new time zone. M: Well, the expert on the show did cite research supporting her recommendations. So I guess I\'ll give it a try next time I fly a long distance. Jet lag is a big problem for me and has been for the last few years, even though I never suffered from it before. W: Well, she did say that jet lag often becomes more of a problem after forty. So I guess I\'m lucky that I can still adjust to different time zones well. My problem is I\'m afraid to fly. M: Oh, I didn\'t know that. Actually my mother is terrified of airplanes to the point where she can\'t even fly. So our family vacations were always by car or train. W: I am not as bad as that. I just get anxious before I fly and feel nervous the whole time we\'re in the air, which is why I was hoping the television program would cover that topic more than it did. M: Yeah. That segment was too brief, especially as so many people have that problem. She said twenty percent of people are afraid to fly. W: Actually, it was a quarter of people. So the problem really is widespread and deserves attention.',
        questions: [
          {
            n: 12,
            text: 'What part of the TV program does the man say was interesting?',
            options: [
              { letter: 'A', text: 'The part about not eating on board the plane.' },
              { letter: 'B', text: 'The part about air travel in the past.' },
              { letter: 'C', text: 'The part about getting over jetlag.' },
              { letter: 'D', text: 'The part about avoiding sleeping on the plane.' },
            ],
            answer: 'C',
          },
          {
            n: 13,
            text: 'What does the man say he will do next time he flies a long distance?',
            options: [
              { letter: 'A', text: 'Try following the advice given by the expert on the show.' },
              { letter: 'B', text: 'Concentrate on reading articles recommended by experts.' },
              { letter: 'C', text: 'Have meals as usual to stay away from hunger.' },
              { letter: 'D', text: 'Take a nap to adjust to a new time zone.' },
            ],
            answer: 'A',
          },
          {
            n: 14,
            text: 'Why does the woman think she is lucky?',
            options: [
              { letter: 'A', text: 'She has been well treated when traveling.' },
              { letter: 'B', text: 'She does not have to worry about jetlag.' },
              { letter: 'C', text: 'She can spend a lot of time vacationing.' },
              { letter: 'D', text: 'She does not have any problem flying.' },
            ],
            answer: 'B',
          },
          {
            n: 15,
            text: 'Why does the woman think the problem of being afraid to fly deserves attention?',
            options: [
              { letter: 'A', text: 'It affects twenty-five percent of people.' },
              { letter: 'B', text: 'It has long been ignored by many experts.' },
              { letter: 'C', text: 'It impacts female travelers more seriously.' },
              { letter: 'D', text: 'It has caused heavy losses to many airlines.' },
            ],
            answer: 'A',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2025-12-s1-p1.mp3', // 786.0-986.3s
        transcript:
          'The most common question I\'m asked always centers around how to get started in user experience design, to which my response is always that nothing can substitute real-world experience. Building the skills required of a user experience designer takes time, patience and commitment. Higher education is a great way to equip yourself with some core skills, but it will not prepare you for actual challenges you\'ll face with clients\' work. In other words, being proficient with a design tool and a few methods doesn\'t make you a user experience designer. There simply isn\'t a one-size-fits-all process. Being effective requires adaptability—something you don\'t really learn in school, much less in a 6-month training camp. It\'s gained through experience on the job and learning what\'s appropriate given the needs of the project. I found my way to user experience through graphic design, and slowly over many different roles and experiences that led me to become a user experience designer. It took time and commitment to continue to pursue roles within teams that I knew could teach and challenge me. That\'s not to say that I think my path is the only one—but once again, nothing can substitute real-world experience. You can start anywhere as long as you know your end goal and you commit to actively pursuing opportunities to learn and grow along the way.',
        questions: [
          {
            n: 16,
            text: 'What does the speaker think is the best way to get started in user experience design?',
            options: [
              { letter: 'A', text: 'Learning from skilled designers.' },
              { letter: 'B', text: 'Joining a 6-month training camp.' },
              { letter: 'C', text: 'Obtaining real-world experience.' },
              { letter: 'D', text: 'Anticipating actual challenges.' },
            ],
            answer: 'C',
          },
          {
            n: 17,
            text: 'What does the speaker say being effective requires?',
            options: [
              { letter: 'A', text: 'Core skills.' },
              { letter: 'B', text: 'Higher education.' },
              { letter: 'C', text: 'Capability.' },
              { letter: 'D', text: 'Adaptability.' },
            ],
            answer: 'D',
          },
          {
            n: 18,
            text: 'What can people do as long as they know their end goal and strive for it?',
            options: [
              { letter: 'A', text: 'Face challenges.' },
              { letter: 'B', text: 'Start anywhere.' },
              { letter: 'C', text: 'Pursue roles in teams.' },
              { letter: 'D', text: 'Follow their own path.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2025-12-s1-p2.mp3', // 986.3-1166.0s
        transcript:
          'When planning for this year, our principal asked what needed to change to engage students more in their learning. I responded in a whisper "flexible seating", thinking about our then-current classroom. It had rows of desks with blue chairs and nametapes reminding each student where they should be sitting. This began a journey to transform our practice and challenge the ways of learning for a group of Year 6 students used to sitting in desks and rows for years. Flexible seating has been defined as movable furniture to create an engaging learning environment. It is a shift in practice from being teacher-focused to student-focused learning. For us, flexible seating has meant removing most of the traditional chairs and desks and introducing a variety of different seating options to promote student engagement. The use of rows and their minimal adaptations to "U" shape were traditionally intended to maximize on-task behavior and reduce distraction from the teacher. Teachers tend to still use this format because of either the need to control students or the belief that the teacher is the most important person in the room. Now our students have a range of different seating options, including a floor desk, couches, stools, bean bags, and the traditional desk-and-chair. From our experience so far, flexible seating enhances student ownership of space and engagement in learning, while reducing rates of student disengagement and disciplinary actions. It is a win for all concerned.',
        questions: [
          {
            n: 19,
            text: 'Why did the school principal ask what needed to change?',
            options: [
              { letter: 'A', text: 'To allow students more freedom in their academic work.' },
              { letter: 'B', text: 'To enable teachers to interact more with their students.' },
              { letter: 'C', text: 'To engage students more in their learning.' },
              { letter: 'D', text: 'To respond actively to students\' requests.' },
            ],
            answer: 'C',
          },
          {
            n: 20,
            text: 'What has flexible seating meant at the speaker\'s school?',
            options: [
              { letter: 'A', text: 'Rearranging most traditional chairs and desks.' },
              { letter: 'B', text: 'Adopting a variety of different seating options.' },
              { letter: 'C', text: 'Shifting from traditional teaching to task-based learning.' },
              { letter: 'D', text: 'Using new furniture to create a comfortable environment.' },
            ],
            answer: 'B',
          },
          {
            n: 21,
            text: 'What has flexible seating brought about at the speaker\'s school?',
            options: [
              { letter: 'A', text: 'A change to teachers\' opinion of their students.' },
              { letter: 'B', text: 'A harmonious relationship among its students.' },
              { letter: 'C', text: 'A strengthened effect of its discipline.' },
              { letter: 'D', text: 'A win for all people involved.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2025-12-s1-p3.mp3', // 1166.0-1365.7s
        transcript:
          'Dozens of British students arriving for their first day of school on Tuesday were sent home over their shoes. About 30 students were turned away from Tavern High School in Norfolk, England. Headteacher Dr. Roger Harris confirmed that this was due to a change in the school\'s uniform policy. Harris, who became headteacher this year, said he notified parents of the updated rules in an email in June. The price of school uniforms can spark panic among families struggling with a high cost of living. Nearly all British schools have uniforms. They cost parents an average of £337 per year for each secondary school child. According to the new rules, students of Tavern are required to wear smart black shoes appropriate for the workplace. Harris held that strengthened rules around school uniforms improved student outcomes and behavior. But for some parents, the school\'s restrictions are an unnecessary burden. As annual inflation climbs over 10 percent, many households are on tight budgets. Private rental prices in Britain rose 3.2 percent over the 12 months since July 2022—the largest jump since 2016, soaring energy bills have made things worse. Lucinda May, mom of a Tavern student said that she had to ask her parents for £65 to buy her child the correct pair of shoes. May said that the school\'s uniform policy showed the lack of regard for parents dealing with the high cost of living.',
        questions: [
          {
            n: 22,
            text: 'Why were dozens of British students sent home on Tuesday?',
            options: [
              { letter: 'A', text: 'They arrived late for their first day of school.' },
              { letter: 'B', text: 'They weren\'t informed of the school\'s updated rules.' },
              { letter: 'C', text: 'They answered their headteacher\'s email in an impolite way.' },
              { letter: 'D', text: 'They didn\'t wear the shoes required by the school\'s new policy.' },
            ],
            answer: 'D',
          },
          {
            n: 23,
            text: 'What can the price of school uniforms spark among families in financial difficulty?',
            options: [
              { letter: 'A', text: 'Panic.' },
              { letter: 'B', text: 'Anger.' },
              { letter: 'C', text: 'Disputes.' },
              { letter: 'D', text: 'Riots.' },
            ],
            answer: 'A',
          },
          {
            n: 24,
            text: 'What did the headteacher think of the school\'s new uniform rules?',
            options: [
              { letter: 'A', text: 'They rendered the school unique in the district.' },
              { letter: 'B', text: 'They enhanced the positive image of the school.' },
              { letter: 'C', text: 'They improved student behavior and performance.' },
              { letter: 'D', text: 'They strengthened the school\'s discipline and order.' },
            ],
            answer: 'C',
          },
          {
            n: 25,
            text: 'What did Lucinda May have to do to buy her child the correct pair of shoes?',
            options: [
              { letter: 'A', text: 'Tighten her monthly budget.' },
              { letter: 'B', text: 'Turn to her parents for help.' },
              { letter: 'C', text: 'Borrow £65 from her friend.' },
              { letter: 'D', text: 'Postpone paying her other bills.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自解析 PDF 内嵌官方听力原文的 [n] 标记句）
  answerQuotes: {
    1: ['The black cat was found curled up under the engine cover of David King\'s car when he decided to do an oil check after dropping his grandson off at school in Kent.'],
    2: ['Following a rescue by UK charity Cats Protection, the 4-year-old cat was later reunited with its owner, Mr. King\'s neighbour.'],
    3: ['In less than a month, the Special Olympic Spring Games will make a return to Fayetteville.'],
    4: ['Kowalczyk said it\'s rewarding to see athletes with special needs triumph in the games.'],
    5: ['A German supermarket has been ordered to destroy its chocolate rabbits after it lost a court battle with the Swiss chocolate manufacturer.'],
    6: ['It could be melted for use in other products.'],
    7: ['there was still the possibility of confusion for consumers'],
    8: ['Can you please hand me that book over there? It has instructions for making a winter bean salad.'],
    9: ['That doesn\'t sound like a very balanced diet.'],
    10: ['He\'s an animal activist. He\'s always been very sensitive and sympathizes with animals.'],
    11: ['without them, it just wouldn\'t be feasible to learn about animals and their environments', 'Honestly, I agree, but just don\'t let him hear you say that.'],
    12: ['The part about overcoming jet lag was interesting.'],
    13: ['Well, the expert on the show did cite research supporting her recommendations. So I guess I\'ll give it a try next time I fly a long distance.'],
    14: ['So I guess I\'m lucky that I can still adjust to different time zones well.'],
    15: ['Actually, it was a quarter of people. So the problem really is widespread and deserves attention.'],
    16: ['nothing can substitute real-world experience'],
    17: ['Being effective requires adaptability—something you don\'t really learn in school, much less in a 6-month training camp.'],
    18: ['You can start anywhere as long as you know your end goal and you commit to actively pursuing opportunities to learn and grow along the way.'],
    19: ['our principal asked what needed to change to engage students more in their learning'],
    20: ['flexible seating has meant removing most of the traditional chairs and desks and introducing a variety of different seating options to promote student engagement'],
    21: ['It is a win for all concerned.'],
    22: ['Dozens of British students arriving for their first day of school on Tuesday were sent home over their shoes.'],
    23: ['The price of school uniforms can spark panic among families struggling with a high cost of living.'],
    24: ['Harris held that strengthened rules around school uniforms improved student outcomes and behavior.'],
    25: ['Lucinda May, mom of a Tavern student said that she had to ask her parents for £65 to buy her child the correct pair of shoes.'],
  },
}

export default LISTENING
