/* ── KET A2 官方真题阅读数据 ── */

import { officialReadingScans } from './officialReadingScans.js'

const transcribedKetTests = [
  // ─── OFFICIAL BOOK 1 · TEST 1 (verified against source pages 8–15) ───
  {
    id: 1,
    title: "官方真题 1 · Test 1",
    source: {
      file: "KET青少版官方真题1.pdf",
      collection: "KET青少版官方真题 1",
      test: 1,
      pages: "8–15",
      answerPage: 84,
      verified: true
    },
    part1: {
      instructions: "For each question, choose the correct answer.",
      questions: [
        {
          id: 1, type: "notice",
          content: "Found: blue sports bag\nCollect from school office\n(with student ID card)",
          options: { A: "A student has found the wrong ID card in his sports bag.", B: "The person who lost his bag can get it from the school office.", C: "If you find a lost sports bag, please take it to the school office." },
          answer: "B"
        },
        {
          id: 2, type: "notice",
          content: "Room 3.1\nMrs Gray's students\nThis room is closed for repairs. Lessons in room 4.2 until Friday",
          options: { A: "Mrs Gray is not coming to the school until Friday.", B: "Mrs Gray's class is going to be on a different day this week.", C: "Mrs Gray isn't able to use her usual room at the moment." },
          answer: "C"
        },
        {
          id: 3, type: "email", from: "Head teacher", to: "All students",
          content: "The school kitchen will be closed for hot lunches Monday – Friday next week. We can still serve sandwiches and salads.",
          options: { A: "Students have to bring their own food to school for lunch next week.", B: "The school is going to stop offering lunch to students after next week.", C: "Only a few types of food will be available for student lunches next week." },
          answer: "C"
        },
        {
          id: 4, type: "text", from: "Mark", to: "Suzy",
          content: "Hi Suzy,\nI've finished our history project. Shall I bring it round later to show you before I give it to the teacher tomorrow?\nMark",
          options: { A: "Mark is asking Suzy if he should visit her today.", B: "Mark wants Suzy to help him complete their project.", C: "Mark thinks Suzy should give the project to the teacher." },
          answer: "A"
        },
        {
          id: 5, type: "email", from: "Ben", to: "Tom",
          content: "Dad will pick us up after the school concert. There are some tickets left on the website if you know anyone who wants one.",
          question: "What should Tom do?",
          options: { A: "go online to check if there are still concert tickets available", B: "tell people that it is still possible for them to come to the concert", C: "ask if his father can collect them after the concert" },
          answer: "B"
        },
        {
          id: 6, type: "email", from: "Mr Jones", to: "Photography club members",
          content: "Some of you have asked to learn to use software to improve your pictures. If enough people are interested, we'll start next Tuesday.",
          options: { A: "Mr Jones is offering to teach club members something new.", B: "Some people have told Mr Jones they want to leave the photography club.", C: "Mr Jones wants to find out more about photography software." },
          answer: "A"
        }
      ]
    },
    part2: {
      instructions: "For each question, choose the correct answer.",
      title: "My favourite book",
      people: [
        {
          name: "Jian", label: "A",
          text: "This well-known book was in a box of old books that a neighbour gave me. I wasn't sure about it when I picked it up because I saw the pictures and thought it was a book for little children. But I was bored, so I started reading. After a few pages I couldn't stop, and when I got to the last page, I was quite upset that there wasn't more. It's about two friends who play a game, and how it changes their lives. It's brilliant!"
        },
        {
          name: "Max", label: "B",
          text: "This was one of the first books I ever had, but it's still a favourite. Even before I could read, I loved looking at the drawings as my parents read the story to me. Now my little sister's got it, and she loves it too. The writer has become quite famous, but this is the first book she wrote, and not many people have heard of it. It's very different from the books she wrote later. I suppose what you write about changes as your life changes."
        },
        {
          name: "Kojo", label: "C",
          text: "I read this book for the first time when I was about eight. One of the reasons I liked it was that it was about people growing up in a place which I knew nothing about. My friend read it too, and our ideas for games often came from this book. I read it again recently, and I still think it's great, except the last few pages. What happens in them doesn't seem real."
        }
      ],
      questions: [
        { id: 7, text: "Who does not like the way the book ends?", answer: "C" },
        { id: 8, text: "Who enjoyed the pictures in the book?", answer: "B" },
        { id: 9, text: "Who explains how he got the book?", answer: "A" },
        { id: 10, text: "Who enjoyed learning about lives which are different from his own?", answer: "C" },
        { id: 11, text: "Who says something about what happens in the story?", answer: "A" },
        { id: 12, text: "Who says the book is not very well-known?", answer: "B" },
        { id: 13, text: "Who felt sad when he finished the book?", answer: "A" }
      ]
    },
    part3: {
      title: "A young cheesemaker",
      author: "",
      passage: "16-year-old Pat Tulloch has an unusual hobby. She makes cheese on the family farm in Australia. She began by making yoghurt with her mother when she was little. Then she started watching her father's workers make cheese. When she was ten, she made some herself for the first time. 'It wasn't great,' she says, 'but the workers told me what I was doing wrong and that helped me to slowly get better.'\n\nPat always needs good milk for her cheese, but she doesn't have to buy it. Her mother and father keep 100 cows on their farm. Pat can just ask them when she needs more. Last year, Pat's neighbour gave her a young cow to keep and look after, but it doesn't produce milk to make cheese yet.\n\nPat and her family make several types of cheese. Recently they won a prize for one of them. 'It's been great for helping customers find out about us,' says Pat. 'Last month we started selling cheese in New Zealand. People there read about our prize in a food magazine. Soon we're going to do some advertisements, too.'\n\nPat's next idea is to post some online recipes for cooking with cheese. 'One of my favourites is cheese with eggs for breakfast. It's great! Our cheese is also lovely with pasta – I hope a restaurant might buy some one day.' But right now Pat is still at school. 'Making cheese is fun and winning a prize for it is great, but doing well in my studies matters more for now.'",
      questions: [
        {
          id: 14, text: "Pat learned to make good cheese",
          options: { A: "by listening to the advice she got.", B: "by seeing how her mother did it.", C: "by practising at home on her own." }, answer: "A"
        },
        {
          id: 15, text: "Where does Pat get the milk for her cheese?",
          options: { A: "from her neighbour's farm", B: "her father helps her to buy it", C: "her parents give it to her" }, answer: "C"
        },
        {
          id: 16, text: "Pat says winning the prize means",
          options: { A: "more people know about her family's cheese.", B: "she can be the star of the family's new advertisements.", C: "she was invited to visit another country." }, answer: "A"
        },
        {
          id: 17, text: "What's the most important thing for Pat at the moment?",
          options: { A: "writing a new cookbook", B: "being successful at school", C: "selling cheese to a restaurant" }, answer: "B"
        },
        {
          id: 18, text: "In this article, Pat is explaining",
          options: { A: "why her family started making cheese.", B: "how to win a competition for making cheese.", C: "how she has become part of a cheese-making business." }, answer: "C"
        }
      ]
    },
    part4: {
      title: "Philo T. Farnsworth",
      passage_segments: [
        "Philo T. Farnsworth was born in the USA in 1906. As a child, he was very interested in science and electricity and spent a lot of time ",
        " about it. He also won a national ",
        " for young engineers when he was just 13.\n\nWhen he was 20, Farnsworth ",
        " his own business. In 1927, he showed everyone his new idea: a ",
        " of sending pictures using electricity. Many other people were working on ideas for a machine to do this, but Farnsworth's was the first that had no moving parts. In fact, it was the first true electronic TV.\n\nAfter many business problems, Farnsworth had success in 1938 when another company ",
        " him $1 million for his idea. He is not very famous these ",
        ", but, as the father of electronic television, Farnsworth changed the world."
      ],
      questions: [
        { id: 19, options: { A: "learning", B: "studying", C: "understanding" }, answer: "A" },
        { id: 20, options: { A: "game", B: "match", C: "competition" }, answer: "C" },
        { id: 21, options: { A: "became", B: "turned", C: "started" }, answer: "C" },
        { id: 22, options: { A: "plan", B: "way", C: "thing" }, answer: "B" },
        { id: 23, options: { A: "offered", B: "took", C: "sold" }, answer: "A" },
        { id: 24, options: { A: "times", B: "days", C: "years" }, answer: "B" }
      ]
    },
    part5: {
      instructions: "For each question, write the correct answer.\nWrite ONE word for each gap.",
      example: { number: 0, answer: "from" },
      passages: [
        {
          from: "Rachel", to: "Chris",
          content: "We're back [0] from our family holiday in the US. It was amazing! It's [25] biggest country I've ever been to. We travelled from Los Angeles to Seattle [26] car. It's nearly 2000 km and the trip took us [27] very long time – nearly a week.\n\nMy family liked Los Angeles best, [28] I didn't agree – Seattle was my favourite place. It's smaller [29] Los Angeles, and the food was better. Seattle is near the sea and we ate lots of fish. The only problem was that [30] rained almost every day!\n\nLet's meet for a chat soon. I have a present for you!"
        }
      ],
      questions: [
        { id: 25, answers: ["the"] },
        { id: 26, answers: ["by"] },
        { id: 27, answers: ["a"] },
        { id: 28, answers: ["but", "although", "though", "however"] },
        { id: 29, answers: ["than"] },
        { id: 30, answers: ["it"] }
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

// Test 1 uses the hand-transcribed interactive layout. The remaining official
// tests use source-page scans, which preserves every visual prompt and avoids
// introducing OCR errors into the question content.
export const ketTests = [transcribedKetTests[0], ...officialReadingScans]
