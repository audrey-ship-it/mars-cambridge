import { KET_EXAM_TEST_2 } from './ketExamTest2.js'
import { KET_EXAM_TEST_3 } from './ketExamTest3.js'
import { KET_EXAM_TEST_4 } from './ketExamTest4.js'

// KET 真题数据 — KET for Schools 3
// 音频文件路径：/audio/ket/test1/KfS3_PT_audio_track_0X.mp3

export const KET_EXAMS = [
  {
    id: 'ket-3-test1',
    title: 'KET for Schools 3 · Test 1',
    label: '官方真题 3 第1套',
    year: '2025',
    available: true,
    listening: {
      audioBase: '/audio/ket/test1/KfS3_PT_audio_track_0',  // + '1'.mp3 ~ '5'.mp3
      parts: [
        {
          part: 1,
          track: 1,
          title: 'Part 1 · 图片选择',
          type: 'picture_mcq',
          instructions: 'For each question, choose the correct answer.',
          items: [
            {
              n: 1,
              question: 'What will they have for lunch?',
              imageSrc: '/images/ket/test1/listening/q1.jpg',
              opts: [
                { label: 'A', desc: '烧烤 / Barbecue' },
                { label: 'B', desc: '炸鱼薯条 / Fish & chips' },
                { label: 'C', desc: '三明治 / Sandwiches' },
              ],
              ans: 0,  // A
              exp: 'Mum 提议 "Why don\'t we have a barbecue this time?"，男孩同意了 "Your idea sounds good"，所以选 A。',
            },
            {
              n: 2,
              question: 'Which sport is the girl going to play this term?',
              imageSrc: '/images/ket/test1/listening/q2.jpg',
              opts: [
                { label: 'A', desc: '排球 / Volleyball' },
                { label: 'B', desc: '曲棍球 / Hockey' },
                { label: 'C', desc: '篮球 / Basketball' },
              ],
              ans: 1,  // B
              exp: '女生说 "my teacher\'s put my name on the list for hockey"，虽然她喜欢排球，但这学期要打曲棍球，选 B。',
            },
            {
              n: 3,
              question: 'Where will the friends go first?',
              imageSrc: '/images/ket/test1/listening/q3.jpg',
              opts: [
                { label: 'A', desc: '唱片店 / Record shop' },
                { label: 'B', desc: '咖啡馆 / Café' },
                { label: 'C', desc: '图书馆 / Library' },
              ],
              ans: 0,  // A
              exp: 'Bella 说 "before that I\'ve got to collect my new glasses from the shop"，所以先去眼镜店，选 A。',
            },
            {
              n: 4,
              question: 'How does the girl get to school now?',
              imageSrc: '/images/ket/test1/listening/q4.jpg',
              opts: [
                { label: 'A', desc: '坐公交 / Bus' },
                { label: 'B', desc: '骑自行车 / Bike' },
                { label: 'C', desc: '步行 / Walking' },
              ],
              ans: 2,  // C
              exp: 'Amy 说 "I\'ve started leaving home early and walking there"，虽然她以前骑自行车，但现在步行上学，选 C。',
            },
            {
              n: 5,
              question: 'What do they decide to buy for their mother?',
              imageSrc: '/images/ket/test1/listening/q5.jpg',
              opts: [
                { label: 'A', desc: '项链 / Necklace' },
                { label: 'B', desc: '耳环 / Earrings' },
                { label: 'C', desc: '手镯 / Bracelet' },
              ],
              ans: 1,  // B
              exp: '女孩建议 "I saw some nice silver earrings at the market"，男孩最终同意 "Let\'s get what you suggested"，选 B。',
            },
          ],
        },

        {
          part: 2,
          track: 2,
          title: 'Part 2 · 填空题',
          type: 'blanks',
          instructions: 'For each question, write the correct answer in the gap. Write one word or a number or a date or a time.',
          context: 'Sunday at the beach',
          preContext: 'You will hear a girl called Mandy leaving a phone message for a friend about spending Sunday at the beach.',
          fields: [
            { label: 'Travel to the beach by:', value: 'bus', isExample: true },
            { label: 'Take:', n: 6,  ans: ['kite'],                        exp: 'Mandy 说 "bring your kite instead please"（带风筝）。' },
            { label: 'Place for lunch:', n: 7, ans: ['park'],               exp: '"there\'s a park. We\'ll eat there"，午饭在公园吃。' },
            { label: 'Sport we\'ll play:', n: 8, ans: ['volleyball'],       exp: '"I\'ve booked for us to play volleyball"，预订了排球场地。' },
            { label: 'Cost of boat trip on Sunday:', n: 9, ans: ['3.75', '£3.75', 'three pounds seventy-five', 'three seventy-five'],
              prefix: '£', suffix: '', exp: '"it\'s only three seventy-five"，周日优惠价 £3.75。' },
            { label: 'Arrive at Mandy\'s home at:', n: 10, ans: ['six thirty', '6:30', '18:30', '6.30'],
              suffix: 'p.m.', exp: '"we\'ll be back at my place at six thirty"，6:30 回到 Mandy 家。' },
          ],
        },

        {
          part: 3,
          track: 3,
          title: 'Part 3 · 单选题',
          type: 'mcq',
          instructions: 'For each question, choose the correct answer.',
          preContext: 'You will hear two friends, Ned and Aisha, talking about their first week at a new school.',
          items: [
            {
              n: 11,
              question: 'When did they meet each other for the first time?',
              opts: ['on the way to school', 'in a lesson', 'in the lunch break'],
              ans: 1,  // B
              exp: 'Ned 说 "I\'m so happy we sat next to each other in our first class"，在第一节课上认识的，选 B。',
            },
            {
              n: 12,
              question: 'How did Ned feel before he started the new school?',
              opts: ['scared', 'excited', 'lucky'],
              ans: 1,  // B
              exp: 'Aisha 说她感到 excited，Ned 说 "Me too"，所以 Ned 也是 excited，选 B。',
            },
            {
              n: 13,
              question: 'Ned and Aisha agree that',
              opts: ['the teachers are very kind.', 'their classmates are all very nice.', 'the school building is very attractive.'],
              ans: 0,  // A
              exp: 'Aisha 说 "I like all our teachers. They do lots to help us."，Ned 说 "That\'s true"，两人都同意老师很好，选 A。',
            },
            {
              n: 14,
              question: "Which lesson doesn't Aisha like much?",
              opts: ['geography', 'maths', 'history'],
              ans: 2,  // C
              exp: 'Aisha 说 "History\'s the only subject I don\'t enjoy much"，选 C。',
            },
            {
              n: 15,
              question: 'What do they both say about homework at the new school?',
              opts: ['They got less in their old schools.', 'It takes a long time to do.', 'Some of it is quite easy.'],
              ans: 0,  // A
              exp: 'Ned 说 "we didn\'t get so much in my old school"，Aisha 说 "We got very little at mine as well"，两人都说原来学校作业少，选 A。',
            },
          ],
        },

        {
          part: 4,
          track: 4,
          title: 'Part 4 · 单选题',
          type: 'mcq',
          instructions: 'For each question, choose the correct answer.',
          items: [
            {
              n: 16,
              question: 'You will hear two friends talking about a book.\nHow did the boy get the book?',
              opts: ['He borrowed it from a family member.', 'He won it in a sports event.', 'He bought it in a shop.'],
              ans: 1,  // B
              exp: 'Boy 说书 "was given to me as a prize yesterday. I was first in the running race!"，赢得运动奖品，选 B。',
            },
            {
              n: 17,
              question: 'You will hear a girl talking to her father about a lesson.\nWhat type of lesson did she have?',
              opts: ['a guitar lesson', 'a tennis lesson', 'a dance lesson'],
              ans: 0,  // A
              exp: '老师讲了如何放手（hands）和手指（fingers），Girl 说 "you can make lots of different sounds, depending on where you put your fingers"——这是吉他课，选 A。',
            },
            {
              n: 18,
              question: "You will hear a boy telling his friend about his next holiday.\nWhere will the boy stay on holiday?",
              opts: ['in a house', 'in a hotel', 'in a tent'],
              ans: 2,  // C
              exp: 'Boy 说 "I\'ll have to camp in her garden"——在花园露营/帐篷，选 C。',
            },
            {
              n: 19,
              question: "You will hear a teacher talking to his class.\nWhat does he want his class to do now?",
              opts: ['start some maths problems', 'talk about their new textbook', 'check an exercise in pairs'],
              ans: 2,  // C
              exp: 'Teacher 说 "I\'d like you to work with a partner and compare what you wrote"——两人一组对照答案，选 C。',
            },
            {
              n: 20,
              question: 'You will hear two friends talking about their plans for Saturday.\nWhat are they going to do together on Saturday?',
              opts: ['have a cycle ride', 'cook some special food', 'go for a walk'],
              ans: 2,  // C
              exp: 'Boy 说 "We\'re going to have a walk in the forest"，Girl 同意加入，选 C。',
            },
          ],
        },

        {
          part: 5,
          track: 5,
          title: 'Part 5 · 配对题',
          type: 'matching',
          instructions: 'For each question, choose the correct answer.',
          preContext: 'You will hear a boy telling his mum about the jobs his friends would like to do.\nWhich job would each friend like to do?',
          example: { person: 'Alex', ans: 'A' },
          people: [
            { n: 21, name: 'Sally' },
            { n: 22, name: 'Peter' },
            { n: 23, name: 'Amy' },
            { n: 24, name: 'Tom' },
            { n: 25, name: 'Jane' },
          ],
          jobs: [
            { letter: 'A', text: 'actor' },
            { letter: 'B', text: 'chef' },
            { letter: 'C', text: 'dentist' },
            { letter: 'D', text: 'doctor' },
            { letter: 'E', text: 'farmer' },
            { letter: 'F', text: 'musician' },
            { letter: 'G', text: 'teacher' },
            { letter: 'H', text: 'tour guide' },
          ],
          ans: ['H', 'E', 'G', 'B', 'C'],  // Sally→H, Peter→E, Amy→G, Tom→B, Jane→C
          exps: [
            'Sally "she\'s going to show people our town and tell them about it" → H. tour guide（导游）',
            'Peter "Is he going to help his dad look after all their animals? That\'s right" → E. farmer（农民）',
            'Amy "she really wants to help children learn how to dance" → G. teacher（舞蹈老师）',
            'Tom "He hopes to make the meals in a hotel" → B. chef（厨师）',
            'Jane "she\'d like to spend all day looking at people\'s teeth" → C. dentist（牙医）',
          ],
        },
      ],
    },

    /* ══════════════════════════════
       Reading & Writing  (Parts 1–5 auto-graded; Parts 6–7 writing prompts)
    ══════════════════════════════ */
    reading: {
      parts: [

        /* ─── Part 1 · Short-text MCQ (Q1–6) ─── */
        {
          part: 1, type: 'text_mcq',
          title: 'Part 1 · 短文选择',
          instructions: 'For each question, choose the correct answer.',
          questions: [
            {
              n: 1, type: 'notice',
              content: "Bored with computer games?\nLooking for a different hobby?\n\nJoin us at chess club!\nFridays @ 4:30 in room 4B.",
              label: 'Notice',
              question: 'The club wants to find people who',
              opts: ['like playing a variety of games.', 'are interested in trying something new.', 'have experience of playing computer chess.'],
              ans: 1,   // B
              exp: '棋盘俱乐部面向"厌倦电脑游戏、寻找不同爱好"的人，即对尝试新事物感兴趣（interested in trying something new），选B。',
            },
            {
              n: 2, type: 'message', from: 'Tilda', to: 'Zoe',
              content: "Zoe, Have you got an extra T-shirt I can borrow for the match tomorrow? I've forgotten mine and it's too late to go back home. Tilda",
              question: 'Why has Tilda sent this message?',
              opts: ['to find out if Zoe is able to lend her something', 'to ask if Zoe can collect something from the gym', 'to check if Zoe has remembered to bring the right sports kit'],
              ans: 0,   // A
              exp: 'Tilda问Zoe能否借给她一件T恤（borrow），即想知道对方能否借东西给她，选A。',
            },
            {
              n: 3, type: 'notice',
              content: "BREAD ISN'T GOOD FOR DUCKS\nBird food available at visitor centre — £1 per bag",
              label: 'Sign at a lake',
              question: 'What is this sign saying?',
              opts: ['Bird food costs less at the visitor centre than at other places.', 'The visitor centre wants more people to give food to the ducks.', 'Visitors must be careful about the kind of food they give to the ducks.'],
              ans: 2,   // C
              exp: '告示说面包对鸭子不好，游客需要注意给鸭子的食物种类（careful about the kind of food），选C。',
            },
            {
              n: 4, type: 'message', from: 'Ms. Wilson', to: 'Josh',
              content: "Josh, Sorry to hear you're not well and you won't be able to play in the big match next week, let me know soon. Ms. Wilson",
              question: 'What is Ms. Wilson saying to Josh?',
              opts: ["I'm afraid I haven't decided if you can take part in the competition yet.", "It's a shame you missed the last match, but I'm glad you're feeling better.", "You must contact me if your health doesn't improve over the next few days."],
              ans: 2,   // C
              exp: '"let me know soon" = 尽快通知我，即如果健康情况没有改善，必须联系她，选C。',
            },
            {
              n: 5, type: 'message', from: 'Eric', to: 'Mum',
              content: "The 4 p.m. bus to town has just gone. I'm going to wait here for another hour. If I can't get a lift from someone, I'll walk home. Eric",
              question: 'Why has Eric sent his mum this message?',
              opts: ['to explain why he has missed the bus', 'to tell her his plans for getting home', 'to find out if she can give him a lift'],
              ans: 1,   // B
              exp: 'Eric说他会等一小时，如果没人顺路送他就步行回家——这是在告诉妈妈他回家的计划，选B。',
            },
            {
              n: 6, type: 'email',
              from: 'Mrs. Brown',
              content: "Anyone who's already on the list for this trip but hasn't paid, please give me £10.00 by 3 p.m.",
              question: 'What is this email saying?',
              opts: ["There are a few spaces left if anyone wants to go on the trip.", "If you've got a place on the trip, you need to pay today.", "Students who have paid for the trip should come to a meeting at 3 p.m."],
              ans: 1,   // B
              exp: '已在名单上但未付款的人需要在下午3点前缴费（you need to pay today），选B。',
            },
          ],
        },

        /* ─── Part 2 · Multiple matching (Q7–13) ─── */
        {
          part: 2, type: 'multiple_matching',
          title: 'Part 2 · 多项匹配',
          instructions: 'For each question, choose the correct answer (A, B or C).',
          preContext: 'Three teenagers talk about learning a new language. Read about Frank, Marc and Ivan.',
          passages: [
            {
              label: 'A', name: 'Frank',
              text: "At the moment, I'm learning Arabic because I'd like to be a journalist one day, and being able to speak other languages is important for my job. It wasn't possible to learn Arabic at school, but a friend of mine knew a woman who could give me lessons and now she comes to my house twice a week. It was difficult at first because I was a complete beginner, but I worked hard and after just six months I was able to speak and write the language quite well, which I'm really happy about.",
            },
            {
              label: 'B', name: 'Marc',
              text: "I've lived in lots of different countries because of my dad's career, so I've had to learn several different languages. I want to learn Thai quite easily. The last place I lived was Thailand. I'm still studying the language so I can continue to chat with my Thai classmates now I'm back in my home country. I've downloaded a new app on my phone to help me learn Thai, and I can't wait to use it each morning because it's so much fun.",
            },
            {
              label: 'C', name: 'Ivan',
              text: "My mum comes from Russia and her parents still live there. We often stay with them during the school holidays, but unfortunately I didn't learn Russian when I was little so talking to them has always been hard. After our last trip I decided it was time for me to learn the language and I took a course at a local college — and it's great! But the teacher makes us laugh. I think that's why I never forget any of the vocabulary she teaches us.",
            },
          ],
          questions: [
            { n: 7,  text: "Who says he's pleased about how quickly he improved?", ans: 'A',
              exp: 'Frank说六个月后能说写阿拉伯语了，"which I\'m really happy about"——对进步感到高兴，选A。' },
            { n: 8,  text: 'Who is learning a foreign language without a teacher?', ans: 'B',
              exp: 'Marc下载了APP自学泰语，没有老师，选B。' },
            { n: 9,  text: 'Who needs to know a foreign language for the career he wants?', ans: 'A',
              exp: 'Frank想成为记者（journalist），所以需要学阿拉伯语，选A。' },
            { n: 10, text: 'Who says he remembers all the new words he learns in his language lessons?', ans: 'C',
              exp: 'Ivan说"I never forget any of the vocabulary she teaches us"——记住了所有单词，选C。' },
            { n: 11, text: 'Who is practising a language so he can have conversations with friends?', ans: 'B',
              exp: 'Marc学泰语是为了和泰国同学聊天（chat with my Thai classmates），选B。' },
            { n: 12, text: 'Who is studying a foreign language for family reasons?', ans: 'C',
              exp: 'Ivan学俄语是为了和俄罗斯的家人交流，选C。' },
            { n: 13, text: 'Who says he has lots of experience learning new languages?', ans: 'B',
              exp: 'Marc说"I\'ve had to learn several different languages"——有丰富的学语言经验，选B。' },
          ],
        },

        /* ─── Part 3 · Article MCQ (Q14–18) ─── */
        {
          part: 3, type: 'article_mcq',
          title: 'Part 3 · 长文阅读',
          instructions: 'For each question, choose the correct answer.',
          articleTitle: 'My first trip to Hollywood, USA',
          author: 'Jelica Shaw talks about a family holiday to Los Angeles',
          passage: "This summer, my parents and I had a holiday in Hollywood, an area in Los Angeles famous for its filmmaking. My mum and dad are journalists and both worked there, so they know the city really well.\n\nOur hotel was near the Hollywood Walk of Fame, a famous pavement that has over 2,600 metal stars with the names of famous actors and singers on them. It's very popular with visitors. We walked along it every day, and I'm glad about that, as there were so many names to read.\n\nOn the second day, we went on a tour at Universal Studios. This is a film studio where famous actors work, and it also has some exciting rides. The rides were good, but visiting the places where movies such as Jurassic Park were made was my favourite part of the tour.\n\nOn the third day, we went on the Rodeo Drive Tour. It's a bus tour to see famous people's houses. Actually, most of the homes were a really long way from the road or behind trees or gates, which is a pity. But the guide was so funny that I still enjoyed myself and the time went by very quickly.\n\nFor our final sight, we watched a film at an outdoor theatre called the Hollywood Bowl. The Sound of Music is my dad's favourite film so I know the story and songs quite well, but I couldn't believe 17,000 other people wanted to watch it too. I had no idea it was so popular! It was certainly an experience I'll never forget.",
          questions: [
            {
              n: 14, text: "What do we learn about Jelica's parents in the first paragraph?",
              opts: ['They have been to Hollywood many times.', "They don't have a summer holiday every year.", 'They have careers in the film business.'],
              ans: 0,   // A
              exp: '"My mum and dad are journalists and both worked there, so they know the city really well" = 他们以前多次去过好莱坞工作，选A。',
            },
            {
              n: 15, text: 'What does Jelica say about the Hollywood Walk of Fame?',
              opts: ['She thought it was too crowded.', 'She was pleased she visited it more than once.', 'She liked being able to see it from her hotel room.'],
              ans: 1,   // B
              exp: '"We walked along it every day, and I\'m glad about that" = 每天都去走，而且很高兴这样做，即很庆幸多次参观，选B。',
            },
            {
              n: 16, text: 'What did Jelica like most about visiting Universal Studios Hollywood?',
              opts: ['going on all the rides', 'meeting some famous actors', 'seeing where films were made'],
              ans: 2,   // C
              exp: '"visiting the places where movies...were made was my favourite part of the tour" = 最喜欢参观电影拍摄地，选C。',
            },
            {
              n: 17, text: 'What does Jelica say about the Rodeo Drive Tour?',
              opts: ['The bus ride took too long.', 'The guide was a bit boring.', 'The homes were quite hard to see.'],
              ans: 2,   // C
              exp: '"most of the homes were a really long way from the road or behind trees or gates, which is a pity" = 房子很难看清楚，选C。',
            },
            {
              n: 18, text: 'What was Jelica surprised about at the Hollywood Bowl?',
              opts: ['which film was shown', 'the number of people at the film', 'the fact that people sang during the film'],
              ans: 1,   // B
              exp: '"I couldn\'t believe 17,000 other people wanted to watch it too" = 惊讶于有17000人来看，选B。',
            },
          ],
        },

        /* ─── Part 4 · Gap-fill MCQ (Q19–24) ─── */
        {
          part: 4, type: 'gap_fill_mcq',
          title: 'Part 4 · 选词填空',
          instructions: 'For each question, choose the correct answer.',
          articleTitle: 'Mark Twain',
          passage: "The American writer Mark Twain was born in 1835. At the age of four, the family [19] to Hannibal, a town on the Mississippi River. When he was a child, he [20] most of his free time chatting to the people who worked on the river. He loved hearing the stories they [21] about their lives.\n\nWhen he was only 11, Mark began earning money for his family. He worked in a printing company and wrote articles for the local newspaper, but what he really wanted to do was to [22] a river boat captain. He studied [23] for his licence and then worked for many years on the river.\n\nLots of the ideas for Twain's most [24] book, The Adventures of Huckleberry Finn, came from his life on the Mississippi.",
          questions: [
            { n: 19, opts: ['left', 'moved', 'got'], ans: 1,   // B
              exp: '"moved to Hannibal" = 搬到了汉尼拔，选B。moved表示举家迁移。' },
            { n: 20, opts: ['spent', 'took', 'used'], ans: 0,   // A
              exp: '"spent most of his free time" = 花大部分空余时间，spend time doing sth. 固定搭配，选A。' },
            { n: 21, opts: ['spoke', 'said', 'told'], ans: 2,   // C
              exp: '"the stories they told about their lives" = 讲述他们的故事，tell stories 固定搭配，选C。' },
            { n: 22, opts: ['become', 'start', 'begin'], ans: 0,   // A
              exp: '"wanted to become a river boat captain" = 想成为一名船长，become接名词职业，选A。' },
            { n: 23, opts: ['long', 'hard', 'right'], ans: 1,   // B
              exp: '"studied hard for his licence" = 努力学习考取执照，study hard 固定搭配，选B。' },
            { n: 24, opts: ['excellent', 'famous', 'known'], ans: 1,   // B
              exp: '"Twain\'s most famous book" = 最著名的书，famous 最符合语境，选B。' },
          ],
        },

        /* ─── Part 5 · Open gap-fill (Q25–30) ─── */
        {
          part: 5, type: 'open_gap_fill',
          title: 'Part 5 · 语法填空',
          instructions: 'For each question, write the correct answer. Write ONE word for each gap.',
          example: { n: 0, ans: 'to',
            hint: 'Welcome [0] my blog!' },
          passages: [
            {
              label: 'Blog post',
              text: "Welcome to my blog! Each week, I give you my opinion about [25] latest computer game that I've tried. Today's post is about a brilliant game called MathsFun. [26] is very easy to play and includes exercises and quizzes.\n\n[27] are two reasons why I like this computer game. First, I can choose to play alone or [28] friends. Second, any level of player, from beginner to advanced, can play.\n\nMathsFun has helped me a lot. A month [29], I wasn't getting good marks at school, but now I am. [30] you want to improve too, you should try this game.",
            },
          ],
          questions: [
            { n: 25, ans: ['the'],
              exp: '"the latest computer game" — 定冠词 the 指最新的游戏。' },
            { n: 26, ans: ['It', 'it', 'This', 'this'],
              exp: '"It is very easy to play" — It 作形式主语，指代 MathsFun。' },
            { n: 27, ans: ['There', 'there'],
              exp: '"There are two reasons" — There are... 存在句结构。' },
            { n: 28, ans: ['with', 'against'],
              exp: '"play alone or with friends" — with 朋友一起玩。答案也接受 against。' },
            { n: 29, ans: ['ago', 'back'],
              exp: '"A month ago" — ago 表示时间之前，back 亦可。' },
            { n: 30, ans: ['If', 'if'],
              exp: '"If you want to improve too" — If 引导条件状语从句。' },
          ],
        },
      ],

      /* Writing tasks — prompts only, not auto-graded */
      writing: [
        {
          part: 6, type: 'guided_writing',
          title: 'Part 6 · 引导写作',
          prompt: "You would like to go to the cinema on Saturday. Write an email to your English friend, Jay.\n\nIn your email:\n• invite Jay to come with you\n• suggest a film to see\n• explain why Jay will enjoy the film\n\nWrite 25 words or more.",
          modelAnswer: "Hi Jay!\n\nWould you like to go to the cinema with me this Saturday? I'd love to see the new Spider-Man film — it's full of action and the special effects are amazing. I think you'll really enjoy it!\n\nLet me know if you're free.\n\nBest wishes",
          tips: ['三个要点都要覆盖：邀请Jay / 推荐电影 / 解释原因', '至少25词', '语气友好，开头 Hi Jay，结尾签名'],
        },
        {
          part: 7, type: 'story_writing',
          title: 'Part 7 · 看图写故事',
          prompt: "Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.",
          imageSrc: '/images/ket/test1/writing/part7_story.jpg',
          imageDesc: '图1：两个女孩在公园踢足球。图2：球飞进树里，两人仰头张望。图3：一个女孩爬上树去取球。',
          modelAnswer: "One afternoon, two girls were playing football in the park. They were having a lot of fun.\n\nSuddenly, one of them kicked the ball too hard and it went up into a tree. They looked up but couldn't reach it.\n\nSo one brave girl decided to climb the tree. She carefully went higher and higher until she reached the ball. Her friend waited below and cheered. Finally, she threw it down and they both laughed. Then they continued their game.",
          tips: ['全程使用过去时态', '使用连接词：suddenly, so, finally, then', '至少35词，写100词更好', '描述人物动作和感受让故事更生动'],
        },
      ],
    },
    speaking: {
      parts: [
        {
          part: 1,
          title: 'Part 1 · 个人问答',
          duration: '5–6 分钟',
          description: '考官用英语问你关于日常生活的问题。用完整句子回答，尽量多说细节。',
          topics: [
            {
              id: 's1-1',
              question: 'Can you tell me your name and where you come from?',
              chineseHint: '介绍你的名字和来自哪里',
              modelAnswer: "My name is Emily Chen, and I come from Beijing, which is the capital city of China. I've lived there my whole life and I really love it — there's so much to see and do.",
              phrases: ['My name is… and I come from…', "I've lived there for… years", 'I really love it because…'],
            },
            {
              id: 's1-2',
              question: 'Tell me about your family.',
              chineseHint: '描述你的家庭成员和家庭生活',
              modelAnswer: "I live with my parents and my younger brother. My mum is a teacher and my dad works in an office. My brother is eight years old and he loves playing video games. We're quite a close family — we usually have dinner together every evening and talk about our day.",
              phrases: ['I live with…', 'My mum/dad works as a…', "We're quite a close family"],
            },
            {
              id: 's1-3',
              question: 'What do you enjoy doing in your free time?',
              chineseHint: '谈谈你的业余爱好和休闲活动',
              modelAnswer: "In my free time, I really enjoy playing basketball with my friends. I also like listening to music — especially pop and rock. At weekends, I sometimes go to the cinema or read books. I think it's important to have hobbies because they help you relax after school.",
              phrases: ['I really enjoy… + -ing', 'I also like…', "At weekends, I sometimes…", "I think it's important to…"],
            },
            {
              id: 's1-4',
              question: 'Tell me about the school you go to.',
              chineseHint: '描述你的学校、最喜欢的科目和学校生活',
              modelAnswer: "I go to a large secondary school in the city centre. There are about a thousand students there. My favourite subject is English because I find it very useful and interesting. I also enjoy science lessons. The school has a great sports hall and a big library, which I use a lot.",
              phrases: ['I go to a… school', 'My favourite subject is… because…', 'The school has…', 'I find it very…'],
            },
            {
              id: 's1-5',
              question: 'What kind of food do you like eating?',
              chineseHint: '谈谈你喜欢的食物和饮食习惯',
              modelAnswer: "I love eating all kinds of food! My favourite is pasta — especially spaghetti with tomato sauce. I also really enjoy Chinese food, of course. I try to eat healthily, so I eat a lot of fruit and vegetables. I'm not very keen on spicy food, though — I find it a bit too hot.",
              phrases: ['My favourite is…', 'I also really enjoy…', 'I try to eat healthily', "I'm not very keen on…"],
            },
            {
              id: 's1-6',
              question: 'Do you play any sports? Tell me about them.',
              chineseHint: '谈谈你参与的运动项目',
              modelAnswer: "Yes, I'm quite sporty! I play football for my school team every Saturday morning. I've been playing since I was six, so I'm quite good now. I also swim at the local pool twice a week to keep fit. I think sport is really important for your health and it's also a great way to make friends.",
              phrases: ["I'm quite sporty!", "I've been playing since…", 'I also… to keep fit', 'I think sport is important because…'],
            },
            {
              id: 's1-7',
              question: 'What do you usually do at the weekend?',
              chineseHint: '描述你典型的周末活动安排',
              modelAnswer: "At weekends, I usually get up late — around nine o'clock! In the morning, I often help my mum with the shopping or do some homework. In the afternoon, I like meeting up with my friends. We go to the park, play games or just hang out. In the evening, my family often watches films together. It's my favourite part of the week.",
              phrases: ["At weekends, I usually…", 'In the morning/afternoon/evening…', 'I like meeting up with…', "It's my favourite part of…"],
            },
            {
              id: 's1-8',
              question: "What would you like to do in the future? Tell me about your plans.",
              chineseHint: '谈谈你的未来计划或职业梦想',
              modelAnswer: "In the future, I'd love to become a doctor. I've always been interested in science and I want to help people. After I finish school, I hope to study medicine at university. I know it's a long course — about six years — but I think it will be worth it. I'd also like to travel and work in different countries one day.",
              phrases: ["In the future, I'd love to…", "I've always been interested in…", 'I hope to… after I finish school', "I know it's… but I think…"],
            },
          ],
        },
        {
          part: 2,
          title: 'Part 2 · 话题卡讨论',
          duration: '3–4 分钟',
          description: '从两张话题卡中选一张，和考官围绕该主题展开对话。尽量主动发言、多表达观点。',
          topics: [
            {
              id: 's2-1',
              theme: 'Sports & Games',
              themeZh: '运动与游戏',
              cardPrompts: ['What sports do you like watching on TV?', 'Do you prefer team sports or individual sports?', 'Tell me about a sport you would like to try.', 'Is sport important for young people? Why?'],
              modelAnswer: "I love watching football on TV — especially the Champions League. I prefer team sports because they're more exciting and you get to work together with others. Personally, I'd love to try surfing one day. I've seen it on TV and it looks amazing, though quite difficult! I definitely think sport is very important for young people because it keeps you healthy and teaches you how to be part of a team.",
              phrases: ['I love watching…', 'I prefer… because…', "I'd love to try… one day", 'I definitely think… because…'],
            },
            {
              id: 's2-2',
              theme: 'Technology & Computers',
              themeZh: '科技与电脑',
              cardPrompts: ['How often do you use a computer or tablet?', 'What do you mainly use the internet for?', 'Do you think technology helps you with your studies?', 'What is your favourite app or website?'],
              modelAnswer: "I use my tablet every day — mainly for schoolwork and entertainment. I use the internet mostly for research and watching videos. I think technology definitely helps with my studies because I can find information quickly and watch videos to understand difficult topics. My favourite app is probably Spotify because I listen to music all the time — on the way to school and when I'm doing homework.",
              phrases: ['I use… every day', 'I mainly use it for…', 'I think technology… because…', 'My favourite app is… because…'],
            },
            {
              id: 's2-3',
              theme: 'Holidays & Travel',
              themeZh: '假期与旅行',
              cardPrompts: ['Where did you go on your last holiday?', 'What do you like doing when you are on holiday?', 'Would you prefer a beach holiday or a city holiday? Why?', 'Tell me about a place you would love to visit.'],
              modelAnswer: "Last summer, I went to Hainan with my family — it's a beautiful island in southern China. On holiday, I love swimming, trying local food and just relaxing on the beach. If I had to choose, I'd prefer a beach holiday because I find it more relaxing than a busy city. One place I'd absolutely love to visit is London — I'm fascinated by its history and culture, and of course I'd love to practise my English there!",
              phrases: ['Last… I went to…', 'On holiday, I love…', "If I had to choose, I'd prefer… because…", "One place I'd love to visit is…"],
            },
            {
              id: 's2-4',
              theme: 'Music & Films',
              themeZh: '音乐与电影',
              cardPrompts: ['What kind of music do you enjoy listening to?', 'How often do you go to the cinema?', 'Tell me about a film you have seen recently.', 'Do you prefer watching films at home or at the cinema?'],
              modelAnswer: "I enjoy listening to pop music and also some classical music when I'm studying — it helps me concentrate. I go to the cinema about once a month with my friends. Recently I saw an action film called Mission: Impossible — it was absolutely brilliant! I prefer watching films at the cinema because the big screen and sound system make it a much better experience. Watching at home is more convenient, but it's not the same atmosphere.",
              phrases: ['I enjoy listening to…', 'I go to the cinema about…', 'Recently I saw… — it was…', 'I prefer… because…'],
            },
          ],
        },
      ],
    },
  },
  KET_EXAM_TEST_2,
  KET_EXAM_TEST_3,
  KET_EXAM_TEST_4,
]
