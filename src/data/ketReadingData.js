/* ── KET A2 官方真题阅读数据 (4套) ── */

export const ketTests = [
  // ─── TEST 1 ──────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Test 1",
    part1: {
      instructions: "For each question, choose the correct answer.",
      questions: [
        {
          id: 1, type: "note",
          from: "Chloe", to: "Susie",
          content: "Can you take your work stuff out of the living room and put it in your room? My friends are coming over this evening and I need to tidy up.",
          options: { A: "Chloe asks Susie to keep the living room tidy for her.", B: "Chloe wants Susie to leave the living room before her friends arrive.", C: "Chloe wants Susie to move her things out of the living room." },
          answer: "C",
          explanation: "关键词：\"take your stuff out of the living room and put it in your room\" = 把东西搬走。A错（Chloe自己要整理，不是让Susie保持整洁）；B错（Susie不需要离开，只需搬走东西）。"
        },
        {
          id: 2, type: "notice",
          content: "STUDENTS – please wash up and put things away after using the kitchen. The cleaner comes every Friday.",
          options: { A: "Students must help the cleaner tidy the kitchen on Fridays.", B: "Students should tell the cleaner when the kitchen needs cleaning.", C: "Students must leave the kitchen before the cleaner arrives on Fridays." },
          answer: "A",
          explanation: "告示要求学生用完厨房后自行清洗收拾，清洁工只在周五来做大扫除，所以学生平时帮助保持厨房整洁。B和C均不在告示中。"
        },
        {
          id: 3, type: "text",
          from: "Anna", to: "Pete",
          content: "Pete – I think there'll be no taxis in town tonight. Could you get me from the train station later? I don't know exactly when I'll arrive. Anna",
          options: { A: "Anna is asking Pete to book a taxi for her at the station.", B: "Anna wants Pete to reply when he's at the station.", C: "Anna would like Pete to pick her up from the station." },
          answer: "C",
          explanation: "关键词：\"Could you get me from the train station?\" = 请Pete去接她。A错（没提预订出租车）；B错（没要求Pete回复消息）。"
        },
        {
          id: 4, type: "notice",
          content: "NEW STUDENTS: Go to Reception to collect your course books before seeing your teacher.",
          options: { A: "Students should ask a teacher for their books before going to Reception.", B: "Students need to get their books from Reception first.", C: "Teachers will meet new students at the Reception desk." },
          answer: "B",
          explanation: "关键词：\"Go to Reception BEFORE seeing your teacher\" = 先去前台取书，再见老师。A错（顺序与告示完全相反）；C错（告示没有提老师在前台迎接学生）。"
        },
        {
          id: 5, type: "ad",
          content: "Flat to rent\nJust been painted!\nNew kitchen.\nOne double bedroom.\n£800 per month",
          options: { A: "The flat is in a new building.", B: "You can rent this flat.", C: "Two people cannot live in this flat." },
          answer: "B",
          explanation: "关键词：\"Flat to rent\" = 可以出租此公寓。A错（\"just been painted\"说的是刚粉刷，不是新楼）；C错（一间双人卧室完全可以两人居住）。"
        },
        {
          id: 6, type: "text",
          from: "Gemma", to: "Simon",
          content: "Simon – Don't forget to bring that book I lent you. I need to give it to my sister this week. Thanks! Gemma",
          options: { A: "Gemma is asking Simon to tell her about the book.", B: "Gemma wants Simon to return her book.", C: "Gemma is offering to lend Simon a book." },
          answer: "B",
          explanation: "关键词：\"bring that book I lent you\" = 要Simon归还书。A错（没要求Simon介绍书的内容）；C错（书已借出给Simon，不是现在提出借阅）。"
        }
      ]
    },
    part2: {
      instructions: "For each question, choose the correct answer.",
      title: "Camping by the water",
      people: [
        {
          name: "Sandy Bay", label: "A",
          text: "This campsite is large and you won't be too near your neighbours. There's a small supermarket with long opening hours. Sandy Bay has a surfing school of its own, so campers can learn to surf. You can also learn to windsurf and sail there. The large outdoor pool has a wide area of grass around it. The shop in the nearby village has a good variety of food."
        },
        {
          name: "High Wood", label: "B",
          text: "Not as large as some campsites, High Wood has a pool with a roof window which can open and close, so it's usable in all weather. It's not too far from the sea. Campers can fish or swim in the fantastic pool. For food shopping, campers go to the village nearby. There's lots to do in the evenings – watch films or dance under the stars to local bands."
        },
        {
          name: "Black Lake", label: "C",
          text: "There's a lake where you can swim and plenty of things to do during the day – hiking, cycling. And don't forget to bring your mountain bike with you! There are beautiful mountains all around you. The shop in the next village has a good variety of food. Campers are reminded to bring their mountain bikes."
        }
      ],
      questions: [
        { id: 7, text: "Which place has an indoor swimming pool?", answer: "B" },
        { id: 8, text: "Which place offers water sports lessons?", answer: "A" },
        { id: 9, text: "Which place has beautiful scenery?", answer: "C" },
        { id: 10, text: "Which place has its own food shop?", answer: "A" },
        { id: 11, text: "Which place has evening activities?", answer: "B" },
        { id: 12, text: "Which place has plenty of space between tents?", answer: "A" },
        { id: 13, text: "Which place can lend you equipment for activities?", answer: "B" }
      ]
    },
    part3: {
      title: "Playing the violin",
      author: "By Jack Calder",
      passage: "I started learning the violin when I was nine. I didn't choose to learn it – my music teacher asked if anyone wanted to, and some girls and I put our hands up. It wasn't something I was really interested in at the time. My uncle said I could use his, so I didn't have to buy one.\n\nThe lessons were really hard at first, and I didn't enjoy it much. But then I bought an electric violin and added it to the things I liked about rock music. That was when I really started to love playing.\n\nA few years later, I joined a band called Ocean Blue. When the band became successful, some of the members thought it would change the way we were all friends. We'd always been a close group, even though the music was selling well.\n\nNow I feel very lucky to play the violin. I think it's the best thing in the world to do. A lot of people think it's an unusual career, but I disagree with them.\n\nSomeone has looked after these beautiful old instruments that are two or three hundred years old. I think that's amazing. I hope they'll be used and enjoyed for another two or three hundred years.",
      questions: [
        {
          id: 14, text: "How did Jack start learning the violin?",
          options: { A: "A teacher chose him to learn.", B: "He didn't have to pay for one to use.", C: "He enjoyed listening to it being played." },
          answer: "B"
        },
        {
          id: 15, text: "What does Jack say about the second paragraph?",
          options: { A: "He could play rock music easily on his violin.", B: "He learned from listening to other people's music.", C: "He got an electric violin and this changed how he felt." },
          answer: "C"
        },
        {
          id: 16, text: "When Ocean Blue became successful, Jack says",
          options: { A: "the band needed to travel to many places.", B: "all the band members liked different music.", C: "the band stayed friends with each other." },
          answer: "C"
        },
        {
          id: 17, text: "Why does Jack feel lucky?",
          options: { A: "He has met many people through his music.", B: "He earns a lot of money playing violin.", C: "He gets to do something he loves as his job." },
          answer: "C"
        },
        {
          id: 18, text: "What does Jack say in the last paragraph?",
          options: { A: "He thinks it is wonderful that people have kept old instruments.", B: "He wants the internet to provide more opportunities for music.", C: "He thinks more people should learn to play instruments." },
          answer: "A"
        }
      ]
    },
    part4: {
      title: "The London Marathon",
      passage_segments: [
        "In 1979, two men called John Disley and Chris Brasher went to run the New York Marathon. They ",
        " to organise a similar race in London after they ",
        " at the event. A large ",
        " of runners took part when the first London Marathon ",
        " place in 1981. More than six thousand runners took part. The race has ",
        " on television in nearly 200 countries, so it has been ",
        " to people all over the world."
      ],
      questions: [
        { id: 19, options: { A: "thought", B: "kept", C: "decided" }, answer: "C" },
        { id: 20, options: { A: "year", B: "day", C: "time" }, answer: "C" },
        { id: 21, options: { A: "members", B: "crowds", C: "visitors" }, answer: "B" },
        { id: 22, options: { A: "had", B: "answered", C: "fact" }, answer: "A" },
        { id: 23, options: { A: "stayed", B: "took", C: "made" }, answer: "B" },
        { id: 24, options: { A: "shown", B: "made", C: "held" }, answer: "A" }
      ]
    },
    part5: {
      instructions: "For each question, write the correct answer.\nWrite ONE word for each gap.",
      example: { number: 0, answer: "in" },
      passages: [
        {
          from: "Mark",
          to: "Lucy",
          content: "I grew up [0] in a small town, but I now live [25] the city centre. It only takes me ten minutes [26] get to my office from home. I have to travel to other countries [27] work – [28] example, last month I went to the USA. I like [29] travel, but I'm always happy when I get home!"
        },
        {
          from: "Lucy",
          to: "Mark",
          content: "That sounds great! I think I would love living in a city centre [30] I'm not sure about all the travelling."
        }
      ],
      questions: [
        { id: 25, answers: ["up"] },
        { id: 26, answers: ["At"] },
        { id: 27, answers: ["it"] },
        { id: 28, answers: ["for"] },
        { id: 29, answers: ["the"] },
        { id: 30, answers: ["if"] }
      ]
    }
  },

  // ─── TEST 2 ──────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Test 2",
    part1: {
      instructions: "For each question, choose the correct answer.",
      questions: [
        {
          id: 1, type: "email",
          from: "Cristina", to: "Molly",
          content: "Sorry, but I'm going to be late for our meeting about the new football team tomorrow. I'll probably arrive around 10.20 – start without me!",
          options: {
            A: "Cristina says she might miss the meeting tomorrow.",
            B: "Cristina wants to change the time of tomorrow's meeting.",
            C: "Cristina is telling Molly not to wait for her tomorrow."
          },
          answer: "C",
          explanation: "关键词：\"start without me!\" = 不用等我，先开始。A错（迟到≠缺席）；B错（会议时间没变，改变的是Cristina自己到达的时间）。"
        },
        {
          id: 2, type: "notice",
          title: "Sam's Café",
          content: "Open daily: 6.00 a.m. – 3.00 p.m.\n20% student discount: 6.00 a.m. – 10.00 a.m.",
          options: {
            A: "The café is closed to students after 10 a.m.",
            B: "Students who come early get lower prices.",
            C: "Students cannot eat lunch here every day."
          },
          answer: "B",
          explanation: "6-10 a.m.有20%学生折扣，即早来的学生享受更低价格。A错（10点后咖啡厅仍营业，只是没有折扣）；C错（\"Open daily\"说明每天开放，午餐时段也可用）。"
        },
        {
          id: 3, type: "text",
          from: "Missie", to: "Tess",
          content: "Tess.\nCould I borrow your laptop tonight? Mine's at the computer repair shop. If not, do you know anyone who can lend me one?\nMissie",
          options: {
            A: "Missie is asking Tess to help her find a laptop to use.",
            B: "Missie is offering to lend her laptop to a friend.",
            C: "Missie wants to find someone to repair her laptop."
          },
          answer: "A",
          explanation: "Missie先问能否借Tess的电脑，再问\"do you know anyone who can lend me one?\" = 请Tess帮她找到可用的电脑。B错（是Missie借电脑，不是提供借用）；C错（电脑已送修，她要找的是借用）。"
        },
        {
          id: 4, type: "ad",
          content: "SPECIAL OFFER UNTIL SATURDAY\nShirts £10 each when you buy two!\nUsual price £25",
          options: {
            A: "This Saturday each shirt will cost £10 less than usual.",
            B: "If you buy more than one shirt, you can save money.",
            C: "After Saturday, the price of these shirts will go down."
          },
          answer: "B",
          explanation: "\"£10 each when you buy two\"= 买两件才享受£10的单价（原价£25），即多买省钱。A错（优惠价是£10，不是比原价低£10）；C错（\"until Saturday\"是优惠截止时间，不是之后降价）。"
        },
        {
          id: 5, type: "text",
          from: "Dom", to: "Matt",
          content: "Matt,\nWe're already at the cinema but can't see you anywhere. The film starts soon and Ben wants to get some snacks. Hurry up!\nDom",
          question: "Why did Dom send this message?",
          options: {
            A: "He is worried they'll miss some of the film.",
            B: "He wants to eat something before the film.",
            C: "He needs to tell Matt where the cinema is."
          },
          answer: "A",
          explanation: "\"The film starts soon\" + \"Hurry up!\"说明Dom担心Matt赶不上，大家会错过电影开头。B错（是Ben想买零食，不是Dom）；C错（Dom没说Matt不知道影院位置）。"
        },
        {
          id: 6, type: "text",
          from: "Rachel", to: "Adam",
          content: "Adam,\nThere are still tickets available for Friday's concert. Let's go! I can get tickets for both of us – you can pay me tomorrow.\nRachel",
          question: "Why did Rachel send this message?",
          options: {
            A: "to offer to buy a concert ticket for Adam",
            B: "to find out more about the concert from Adam",
            C: "to tell Adam what the concert tickets cost"
          },
          answer: "A",
          explanation: "关键词：\"I can get tickets for both of us\" = Rachel主动提出帮Adam也买票。B错（Rachel是告知信息，不是询问Adam）；C错（消息中没有提到票价）。"
        }
      ]
    },
    part2: {
      instructions: "For each question, choose the correct answer.",
      title: "How I became a tennis coach",
      people: [
        {
          name: "Petra", label: "A",
          text: "I grew up in Germany, but when I was 17, I moved to Spain so I could go to a tennis centre there. It was hard to be without my family and friends, especially when I hurt myself or got ill. However, my tennis improved a lot. After three years, I left the centre and began my career. I started playing in big competitions around the world. I did OK, but wasn't earning enough money, so I quickly decided to become a tennis coach instead. I now teach children who are just starting the game, which is fun."
        },
        {
          name: "Bea", label: "B",
          text: "When I was 14, my dad sent me to a tennis centre near my home in Italy. He thought I might become a top player like him, but I saw how much time he spent going from one country to another during his career, and I've never wanted that for myself. My favourite things at the tennis centre were spending time at the pool or having barbecues with friends in the evenings. I'm now a coach, and teach young tennis stars at summer camps in Italy."
        },
        {
          name: "Sara", label: "C",
          text: "When I went to live in Spain so I could go to a famous tennis centre there, my dad came with me, and my mum stayed at home in Scotland. My tennis really improved during my two years there, but when I broke my foot it became clear that a career as a tennis player wasn't going to be possible. I went home for a year and then returned to the centre to do a coaching course. I now teach the best young players in Scotland."
        }
      ],
      questions: [
        { id: 7, text: "Who didn't enjoy tennis as much as other activities at the tennis centre?", answer: "B" },
        { id: 8, text: "Who had to change her plans for the future after an accident?", answer: "C" },
        { id: 9, text: "Who says she missed people from home while she was at the tennis centre?", answer: "A" },
        { id: 10, text: "Who went back to the tennis centre to learn to become a coach?", answer: "C" },
        { id: 11, text: "Who doesn't like the idea of travelling a lot for her job?", answer: "B" },
        { id: 12, text: "Who moved to a different country with a member of her family?", answer: "C" },
        { id: 13, text: "Who teaches tennis to young people who haven't played before?", answer: "A" }
      ]
    },
    part3: {
      title: "Joining a ballroom dancing club",
      author: "By Pippa Cartwright",
      passage: "When I started college, I wanted to find a club to join. One of the first ones I looked at was ballroom dancing – a type of dance you do with a partner. The people there seemed to be having a great time, and it didn't cost much, so I decided to join.\n\nThe first week I went, I was really worried because the teacher told us that there were nineteen different dances we had to learn. But it's been fine. When there's a new thing to learn, he shows it to us lots of times and makes sure we're all good at it before we do the next thing.\n\nWhen I joined, I didn't know any of the other people in the club because we all study different subjects. But it's been a great way to meet people, and I've made some of my best friends in the club.\n\nOne of the reasons we learn the dances is to enter competitions. I couldn't wait to do my first one. Before we started, I was a bit worried. But during the competition, my partner and I remembered everything about our dances. We were great. We didn't win any prizes, but it didn't matter – we loved it!\n\nJoining the ballroom dancing club has been fantastic. In the past, I always did the same sports and activities, year after year, but ballroom dancing has taught me there's nothing scary about doing something you've never tried before. I still do lots of sports, but now I can add ballroom dancing to my list of hobbies.",
      questions: [
        {
          id: 14, text: "Why did Pippa join the dance club?",
          options: { A: "She thought it looked fun.", B: "She didn't have to pay for it.", C: "She didn't like any of the other clubs." },
          answer: "A"
        },
        {
          id: 15, text: "What does Pippa say about the dance teacher?",
          options: { A: "He teaches them a new dance every week.", B: "He often tells new members how good they are.", C: "He repeats new things until everyone can do them." },
          answer: "C"
        },
        {
          id: 16, text: "What does Pippa say about the other club members?",
          options: { A: "She has become close to some of them.", B: "She is on the same course as some of them.", C: "She was friends with some of them before joining." },
          answer: "A"
        },
        {
          id: 17, text: "How did Pippa feel about her first dance competition?",
          options: { A: "happy to win first prize", B: "upset that she forgot the dances", C: "excited to take part" },
          answer: "C"
        },
        {
          id: 18, text: "In the final paragraph, Pippa says",
          options: { A: "ballroom dancing is her favourite hobby.", B: "she's learned not to be afraid to do new things.", C: "she isn't sure which activity to try next." },
          answer: "B"
        }
      ]
    },
    part4: {
      title: "Walter Bonatti",
      passage_segments: [
        "Walter Bonatti, one of the greatest alpine mountain climbers of all time, was born in Italy in 1930. As a child, he ",
        " his holidays in Bergamo with his uncles. He loved the mountains there, and at the age of 18, he ",
        " to climb the highest and most difficult ones. He was one of the ",
        " people to do this and he was very ",
        " at it.\n\nHe went on to climb many other mountains, including the famous K2 in the Himalayas. At the age of just 35, he decided to ",
        " his climbing career. However, he continued to work as a mountain guide and photographer. He also wrote several books about his climbing ",
        ", which are read in all Italian schools."
      ],
      questions: [
        { id: 19, options: { A: "travelled", B: "went", C: "spent" }, answer: "C" },
        { id: 20, options: { A: "became", B: "began", C: "turned" }, answer: "B" },
        { id: 21, options: { A: "early", B: "first", C: "soon" }, answer: "B" },
        { id: 22, options: { A: "successful", B: "interested", C: "popular" }, answer: "A" },
        { id: 23, options: { A: "shut", B: "close", C: "end" }, answer: "C" },
        { id: 24, options: { A: "experiences", B: "occupations", C: "subjects" }, answer: "A" }
      ]
    },
    part5: {
      instructions: "For each question, write the correct answer.\nWrite ONE word for each gap.",
      example: { number: 0, answer: "at" },
      passages: [
        {
          from: "Bea", to: "Tania",
          content: "How are things? Are you busy (0) at the moment? [25] you remember our conversation last weekend about going [26] the theatre? Well, the play 'Fathers and Sons' [27] showing next week at West Theatre. Shall [28] go and see it together? I've heard it's very good!"
        },
        {
          from: "Tania", to: "Bea",
          content: "That sounds great! [29] would you like to go? I'm busy on Friday next week, [30] I'm free the other days. Shall I get the tickets? I can buy them online. We've both got student ID cards, so they won't be too expensive."
        }
      ],
      questions: [
        { id: 25, answers: ["Do", "Can"] },
        { id: 26, answers: ["to"] },
        { id: 27, answers: ["is"] },
        { id: 28, answers: ["we"] },
        { id: 29, answers: ["When"] },
        { id: 30, answers: ["but", "although", "though", "however"] }
      ]
    }
  },

  // ─── TEST 3 ──────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Test 3",
    part1: {
      instructions: "For each question, choose the correct answer.",
      questions: [
        {
          id: 1, type: "notice",
          content: "CHESS CLUB\nOpen from Tuesday for lessons only.\nPool closed for repairs – reopening soon.",
          options: {
            A: "People who have swimming lessons can use the pool from Tuesday.",
            B: "The pool will be closed for chess club members.",
            C: "The pool will not be available for some time."
          },
          answer: "C",
          explanation: "关键词：\"Pool closed for repairs – reopening soon\" = 泳池暂时关闭维修，即目前无法使用。A错（泳池正是关闭的，不能用）；B错（没说只针对棋类俱乐部成员关闭）。"
        },
        {
          id: 2, type: "notice",
          content: "DRAMA CLUB – This week we're meeting in the library instead of the hall. Same time as usual (Wednesday, 7 p.m.).",
          options: {
            A: "The drama club is changing the day it meets this week.",
            B: "The drama club is meeting in a different place this week.",
            C: "The drama club is performing in the hall on Wednesday evening."
          },
          answer: "B",
          explanation: "关键词：\"in the library instead of the hall\" = 换了地点（图书馆代替大厅）。A错（时间没变，仍是周三7点）；C错（是开会meeting，不是表演performing）。"
        },
        {
          id: 3, type: "text",
          from: "Rob", to: "Dad",
          content: "Dad, my laptop isn't working properly. Can you look at it? Leave it in the kitchen and I'll see if I can find out why it's not working.",
          options: {
            A: "Rob's dad wants to use Rob's laptop.",
            B: "Rob's dad isn't sure where Rob's laptop is.",
            C: "Rob's dad is willing to try to fix the laptop."
          },
          answer: "C",
          explanation: "关键词：\"I'll see if I can find out why it's not working\" = 爸爸愿意帮忙排查原因。A错（是Rob的电脑，爸爸没说要用）；B错（爸爸让Rob把电脑放厨房，知道去哪找）。"
        },
        {
          id: 4, type: "text",
          from: "Rafa", to: "Mark",
          content: "Mark, I have to work until 6.00, so I can't meet you at the café. But I'll still come to the cinema – see you there at 7. Rafa",
          options: {
            A: "Rafa is changing the plan for this evening.",
            B: "Rafa wants to meet Mark at a café before the cinema.",
            C: "Rafa will arrive at the cinema at the time they agreed."
          },
          answer: "A",
          explanation: "Rafa原计划或许包括先去咖啡厅，现改为直接在电影院见面，A\"改变了今晚计划\"正确。B错（Rafa明说不能去咖啡厅）；C错（\"see you there at 7\"是新约定的时间，不一定是原来约好的）。"
        },
        {
          id: 5, type: "notice",
          content: "City Bus Tours\nTickets only available from tourist office.\nTours at 9 a.m. or 2 p.m. – twice daily",
          options: {
            A: "You must buy tickets for the bus tour before 9 a.m.",
            B: "The tourist office is on the bus tour route.",
            C: "There are two bus tours every day."
          },
          answer: "C",
          explanation: "关键词：\"Tours at 9 a.m. or 2 p.m. – twice daily\" 直接说明每天有两班游览，C正确。A错（没有规定买票截止时间为9点）；B错（tourist office是购票处，不一定在游览路线上）。"
        },
        {
          id: 6, type: "notice",
          content: "CINEMA NOTICE\nCinema park is full. Moviegoers are advised to use the shopping centre car park – free for cinema customers.",
          options: {
            A: "Cinema customers should not use the shopping centre car park.",
            B: "Moviegoers who park at the shopping centre must pay.",
            C: "Cinema customers can park at the shopping centre at no cost."
          },
          answer: "C",
          explanation: "关键词：\"free for cinema customers\" = 影院顾客在购物中心停车免费，C正确。A错（告示正是建议顾客使用购物中心停车场）；B错（明说免费free，不需付费）。"
        }
      ]
    },
    part2: {
      instructions: "For each question, choose the correct answer.",
      title: "Learning something new",
      people: [
        {
          name: "Paula", label: "A",
          text: "I've been interested in photography since I was a child. I took lots of pictures, and everyone I showed them to said they were great. Last year I decided to join a photography course. I was nervous at first – I was afraid I might not be good enough. After all, it was my first time as a student for ten years! But the other students on the course are around my age, and sometimes we go to restaurants together, or even the cinema."
        },
        {
          name: "Sally", label: "B",
          text: "When I was still at school, I started learning the violin. I found a teacher and had a few lessons, but didn't keep it up for long. My husband gave me a violin as a present when I was having a hard time in my job. I started learning with a teacher again. All three of my children are learning to play instruments too, so now we can practise with each other!"
        },
        {
          name: "Kim", label: "C",
          text: "When I was little, I loved watching my mum cook in the kitchen. I never learned how to cook myself. I moved to a new city, and didn't have anything to do in the evenings. One of my colleagues gave me some advice: she suggested I try a local cookery course. I did, and I've met some interesting people. I've got a new hobby!"
        }
      ],
      questions: [
        { id: 7, text: "Who does her hobby with members of her family?", answer: "B" },
        { id: 8, text: "Who started a new hobby after receiving advice from someone?", answer: "C" },
        { id: 9, text: "Who started learning her hobby again after a difficult time?", answer: "B" },
        { id: 10, text: "Who had been interested in her hobby for a long time before taking classes?", answer: "A" },
        { id: 11, text: "Who has made new friends through her hobby?", answer: "C" },
        { id: 12, text: "Who was nervous about going back to being a student?", answer: "A" },
        { id: 13, text: "Who started learning her hobby at a young age?", answer: "B" }
      ]
    },
    part3: {
      title: "Living in London",
      author: "By Charlotte",
      passage: "I've lived in London all my life. My favourite area is the city centre. I love it because there's always something happening and there are people around whatever time it is. Famous people often come here for the restaurants and shops. Even at midnight the streets are busy.\n\nI recently started taking singing lessons. Some of the songs we did together were quite hard to learn. But she was good at what she did, and I learned a lot of things that have helped me in my career. At first I was a bit frightened of her.\n\nWhen friends visit the city, they prefer to walk. Even though I have my own little car, I don't like the traffic situation here, and it's very difficult to find a parking space. I prefer walking to public transport.\n\nOne building I love is the Natural History Museum. I'll never forget a special experience I had there – my band performed at a party in the museum once. I love going to this museum with friends to see exhibitions.\n\nI'm very excited about our band's next tour – we're playing in lots of new cities and I can't wait to explore them. I'm not worried about missing my family – they'll come to see me sing during the six months of the tour.",
      questions: [
        {
          id: 14, text: "Why does Charlotte like the city centre?",
          options: { A: "It is always busy.", B: "Famous people are often there.", C: "It has good shops and restaurants." },
          answer: "A"
        },
        {
          id: 15, text: "What does Charlotte say about the singing lessons?",
          options: { A: "She found it easy to remember the songs.", B: "She was frightened of the teacher at first.", C: "She learned things that were useful for her work." },
          answer: "C"
        },
        {
          id: 16, text: "When friends visit Charlotte, what is her favourite way to get around the city?",
          options: { A: "by car", B: "on foot", C: "by public transport" },
          answer: "B"
        },
        {
          id: 17, text: "What does Charlotte think about the Natural History Museum?",
          options: { A: "She has a special memory connected to it.", B: "It is the most beautiful building in London.", C: "She enjoys going there to see the exhibitions." },
          answer: "A"
        },
        {
          id: 18, text: "How does Charlotte feel about the tour?",
          options: { A: "She is worried about missing her family.", B: "She is excited about visiting new places.", C: "She is not sure the tour will be successful." },
          answer: "B"
        }
      ]
    },
    part4: {
      title: "The Camel",
      passage_segments: [
        "The camel is an amazing animal. It lives in the Sahara Desert, where the hot weather and strong winds are a ",
        " for most animals. But camels do not need to eat or drink every day, which makes them very useful.\n\nThe number of camels ",
        " them very useful in desert areas. They can carry people or things a very long ",
        " across the desert. They are often ",
        " the 'ships of the desert'. Their ",
        " of the Sahara help people to travel and do business there. Buses and trucks are now ",
        " on the roads of the Sahara."
      ],
      questions: [
        { id: 19, options: { A: "trouble", B: "mistake", C: "problem" }, answer: "C" },
        { id: 20, options: { A: "gets", B: "has", C: "makes" }, answer: "C" },
        { id: 21, options: { A: "way", B: "path", C: "road" }, answer: "A" },
        { id: 22, options: { A: "described", B: "said", C: "called" }, answer: "C" },
        { id: 23, options: { A: "parts", B: "examples", C: "things" }, answer: "A" },
        { id: 24, options: { A: "put", B: "used", C: "done" }, answer: "B" }
      ]
    },
    part5: {
      instructions: "For each question, write the correct answer.\nWrite ONE word for each gap.",
      example: { number: 0, answer: "as" },
      passages: [
        {
          from: "Jenny", to: "David",
          content: "Hi David! I'm trying to buy a birthday present for my brother Tom – he's the same age [0] as you. Do you know [25] he'd like? He's interested in books. Could you give me [26] ideas? He's read everything [27] Michael Crichton. Can you suggest a book [28] good [29] Dragon Teeth? It would be great if you could help me choose [30] present."
        }
      ],
      questions: [
        { id: 25, answers: ["next", "this"] },
        { id: 26, answers: ["what"] },
        { id: 27, answers: ["any", "some"] },
        { id: 28, answers: ["as"] },
        { id: 29, answers: ["by"] },
        { id: 30, answers: ["your"] }
      ]
    }
  },

  // ─── TEST 4 ──────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Test 4",
    part1: {
      instructions: "For each question, choose the correct answer.",
      questions: [
        {
          id: 1, type: "notice",
          content: "SWIMMING POOL\nOpen Tuesday–Sunday, 7 a.m.–9 p.m.\nClosed Mondays for cleaning",
          options: {
            A: "The pool is open every day of the week.",
            B: "The pool is not open on one day of the week.",
            C: "The pool closes earlier on some days of the week."
          },
          answer: "B",
          explanation: "关键词：\"Closed Mondays\" = 周一关闭，即一周中有一天不开放，B正确。A错（周一关闭，不是每天开）；C错（告示没说某几天关门更早）。"
        },
        {
          id: 2, type: "text",
          from: "Sophie", to: "Mia",
          content: "Mia – I've left some shopping for tonight's dinner on the kitchen table. I'll be home by 7, so dinner at 7.30? Sophie",
          options: {
            A: "Sophie wants Mia to buy food for dinner tonight.",
            B: "Sophie is telling Mia when dinner will be ready.",
            C: "Sophie is asking Mia to cook dinner by 7.30."
          },
          answer: "C",
          explanation: "Sophie买好食材，7点到家，\"dinner at 7.30?\"是在请Mia在7:30前把晚饭做好。A错（食材已买好放在桌上）；B错（Sophie没说饭什么时候做好，而是请Mia来做）。"
        },
        {
          id: 3, type: "ad",
          content: "SPORTS SHOP\nTrainers – all sizes – 30% OFF this week only!\n(Normal price £60)",
          options: {
            A: "These trainers usually cost less than £60.",
            B: "You can only buy these trainers this week.",
            C: "These trainers cost less than usual at the moment."
          },
          answer: "C",
          explanation: "关键词：\"30% OFF\" = 目前价格比平时更低，C正确。A错（正常价格IS £60，不是\"低于£60\"）；B错（优惠是本周专属，但鞋子本身之后也会有售）。"
        },
        {
          id: 4, type: "email",
          from: "Tom", to: "Alex",
          content: "Alex – have you decided about the shopping centre on Saturday? I need to buy new trainers because I scratched my old ones. Let me know! Tom",
          options: {
            A: "Tom is asking Alex to come shopping with him.",
            B: "Tom wants to know if Alex has made a decision.",
            C: "Tom is suggesting that Alex should buy new trainers."
          },
          answer: "B",
          explanation: "关键词：\"have you decided?\" = 询问Alex是否已经做出决定，B正确。A错（似乎之前已商量好一起去，不是现在邀请）；C错（没有建议Alex买鞋）。"
        },
        {
          id: 5, type: "notice",
          content: "LIBRARY NOTICE\nPlease return books within three weeks.\nFines of 20p per day for late returns.",
          options: {
            A: "You must pay to borrow books from this library.",
            B: "Books should be returned to the library after 21 days.",
            C: "You will be charged 20p when you borrow a book."
          },
          answer: "B",
          explanation: "关键词：\"return books within three weeks\" = 三周（21天）内归还，B正确。A错（借书本身免费，只有逾期才收费）；C错（借书时不直接收费，只有逾期才收每天20p）。"
        },
        {
          id: 6, type: "text",
          from: "Kate", to: "Dan",
          content: "Dan, we need to leave at 6 for the airport. Make sure you pack everything tonight – we don't want to be late. Kate",
          options: {
            A: "Kate is asking Dan to check they have everything for the journey.",
            B: "Kate wants Dan to book a taxi to the airport.",
            C: "Kate is telling Dan what time the flight leaves."
          },
          answer: "A",
          explanation: "关键词：\"Make sure you pack everything tonight\" = 确保所有东西都打包好，A正确。B错（没提预订出租车）；C错（6点是出发时间，不是航班起飞时间）。"
        }
      ]
    },
    part2: {
      instructions: "For each question, choose the correct answer.",
      title: "My hobby",
      people: [
        {
          name: "Tony", label: "A",
          text: "I've been interested in football for as long as I can remember – I watch all the local matches and I play every week too. In fact my whole family loves football. When I was younger, I tried lots of other sports – tennis, swimming – but I always came back to football. I help to coach a junior team at weekends, so I'm always busy with football-related activities."
        },
        {
          name: "Maria", label: "B",
          text: "Music has been my main hobby ever since I started learning the piano at age six. I wasn't very good at first, but with practice I improved. I now play in an orchestra, and we travel to perform in different cities – I love seeing new places. I also enjoy listening to live music. I was in a play once – he was in one about a musician – but acting is not really for me."
        },
        {
          name: "Sarah", label: "C",
          text: "I love sport in general – I go cycling, swimming and running whenever I can. But what I really enjoy watching is basketball. Sarah goes to see the local basketball matches most weekends. I also paid 80 dollars just to see a cycle race! I keep fit by going to the gym, and I'm planning to run a marathon next year."
        }
      ],
      questions: [
        { id: 7, text: "Who coaches young people in their hobby?", answer: "A" },
        { id: 8, text: "Who travels to different places because of their hobby?", answer: "B" },
        { id: 9, text: "Who enjoys watching their hobby as well as doing it?", answer: "A" },
        { id: 10, text: "Who has been interested in their hobby since childhood?", answer: "C" },
        { id: 11, text: "Who has tried different activities but always returns to one hobby?", answer: "A" },
        { id: 12, text: "Who has taken part in a performance?", answer: "B" },
        { id: 13, text: "Who spent a lot of money watching a sporting event?", answer: "C" }
      ]
    },
    part3: {
      title: "The wildlife photographer",
      author: "By James",
      passage: "I became a wildlife photographer about fifteen years ago. Before that, I worked in an office, but I've always loved animals and the natural world. One day I just decided to change my life. It wasn't easy at first – I had to learn a lot of new skills.\n\nThe best thing about my job is getting close to wild animals in their natural environment. I've photographed lions in Africa, polar bears in the Arctic, and many other incredible creatures. Every day is different and exciting.\n\nThe hardest part of the job is the waiting. Sometimes I sit in one place for hours, waiting for an animal to appear. The weather can also be difficult – I've worked in extreme heat and cold. But when I finally get the perfect shot, it makes everything worthwhile.\n\nI also teach photography workshops. I enjoy helping people develop their skills and passion for wildlife. Many of my students have gone on to become professional photographers themselves, which makes me very proud.\n\nMy advice to anyone who wants to become a wildlife photographer is simple: be patient, be prepared, and never give up. The natural world is an amazing place, and there are always new things to discover and photograph.",
      questions: [
        {
          id: 14, text: "How did James become a wildlife photographer?",
          options: { A: "He studied photography at college.", B: "He decided to make a change in his life.", C: "A friend suggested the career to him." },
          answer: "B"
        },
        {
          id: 15, text: "What does James say is the best part of his job?",
          options: { A: "travelling to different countries", B: "earning a good salary", C: "being near animals in the wild" },
          answer: "C"
        },
        {
          id: 16, text: "What does James say about waiting for animals?",
          options: { A: "It is enjoyable because he can relax.", B: "It is worth it when he gets a good photograph.", C: "It is the most difficult part of his work." },
          answer: "C"
        },
        {
          id: 17, text: "What does James feel about his students?",
          options: { A: "He is proud when they become professional photographers.", B: "He finds teaching them difficult.", C: "He thinks they should work harder." },
          answer: "A"
        },
        {
          id: 18, text: "What advice does James give?",
          options: { A: "Learn to work in different weather conditions.", B: "Study wildlife carefully before photographing it.", C: "Keep trying even when things are difficult." },
          answer: "A"
        }
      ]
    },
    part4: {
      title: "The Great Barrier Reef",
      passage_segments: [
        "The Great Barrier Reef is the world's largest coral reef system. It is ",
        " off the coast of Australia and covers an area of more than 340,000 square kilometres. The reef is home ",
        " thousands of different species of fish and other sea creatures.\n\nThe reef was ",
        " a World Heritage Site in 1981. However, it is now ",
        " serious danger because of climate change and pollution. Scientists are ",
        " to find ways to protect it. Many tourists ",
        " to see the reef each year, and it is important that we look after this incredible natural wonder."
      ],
      questions: [
        { id: 19, options: { A: "placed", B: "located", C: "found" }, answer: "B" },
        { id: 20, options: { A: "to", B: "for", C: "at" }, answer: "A" },
        { id: 21, options: { A: "named", B: "called", C: "made" }, answer: "B" },
        { id: 22, options: { A: "on", B: "at", C: "in" }, answer: "C" },
        { id: 23, options: { A: "working", B: "trying", C: "doing" }, answer: "C" },
        { id: 24, options: { A: "come", B: "arrive", C: "travel" }, answer: "C" }
      ]
    },
    part5: {
      instructions: "For each question, write the correct answer.\nWrite ONE word for each gap.",
      example: { number: 0, answer: "to" },
      passages: [
        {
          from: "Alex", to: "Chris",
          content: "Hi Chris! Would you like [0] to [25] to the shopping centre on Saturday? I need [26] buy new shoes. [27] you want to meet at the bus stop at 10? [28] you think you can make it? [29] Saturday would be great – let me know! [30] me know if you can come!"
        }
      ],
      questions: [
        { id: 25, answers: ["go", "enjoy"] },
        { id: 26, answers: ["a", "this"] },
        { id: 27, answers: ["Have"] },
        { id: 28, answers: ["Do"] },
        { id: 29, answers: ["next", "this", "that"] },
        { id: 30, answers: ["let"] }
      ]
    }
  }
]
