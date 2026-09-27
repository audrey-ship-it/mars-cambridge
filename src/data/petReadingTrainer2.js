// B1 Preliminary for Schools Trainer 2 (2024) · Trainer 2 阅读
// 来源: PET Trainer2/PET Trainer2 电子版.pdf（书内 Teacher's Notes & Keys / Practice Test Keys 核对）
// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）
// PET Trainer 2 Test 1 Reading 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 1 Exam Practice · 书页 12–27（PDF p013–p028），仅转录标题带 "Exam Practice" 的完整试卷帧
// 答案来源：书内 Teacher's Notes & Keys（书页 188–193 / PDF p189–p194），逐题核对
// 注意：Part 4 的 passage_segments 共 6 段，末段为最后一个挖空 (20) 之后的正文
//       （渲染器只在前 5 段之后插入挖空芯片 16–20）；挖空位置已对照页面渲染图 p023.png 核对。

const TRAINER2_TEST_1_READING = {
  id: 'pet-trainer2-1-reading',
  title: 'PET Trainer 2 · Test 1 Reading',
  source: {
    file: 'PET Trainer2/PET Trainer2 电子版.pdf',
    collection: 'PET Trainer 2',
    test: 1,
    pages: '书页 12–27',
    answerSource: "书内 Teacher's Notes & Keys（书页 188–193）",
    verified: false,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Dad',
        to: 'Susie',
        content: "Susie,\nYour swimming coach called about your first competition on Saturday. The race now starts at 4 pm, not 3 pm. She's bringing a team sweatshirt for you, so don't worry about not having one yet.\nDad",
        options: {
          A: 'tell Susie what to bring to the competition.',
          B: 'help Susie feel confident about her first race.',
          C: 'update Susie with some important information.',
        },
        answer: 'C',
      },
      {
        id: 2,
        type: 'text',
        from: 'Matthew',
        to: 'Kelly',
        content: "There's that new thriller at the cinema this weekend if you still want to see it. I've just remembered there's a sci-fi one on, too. I'm happy with either – it's up to you!\nMatthew",
        options: {
          A: 'telling Kelly which film would be his first choice',
          B: 'letting Kelly make the decision about which film to see',
          C: 'reminding Kelly about an arrangement for a cinema trip',
        },
        answer: 'B',
      },
      {
        id: 3,
        type: 'notice',
        content: "Sale\nWe're making room for our new season's clothes (coming soon).\nMany items half price.\nOne week only, so hurry!",
        options: {
          A: 'Some clothes are on special offer for a limited time.',
          B: 'Everything in the shop now costs less than a week ago.',
          C: "The shop has reduced the price of the new season's clothes.",
        },
        answer: 'A',
      },
      {
        id: 4,
        type: 'text',
        from: 'Mrs Fallon',
        content: "Subject: Art Club project\nMake sure your picture for your 'Friends' project shows a group of two or more people. I'll be in the art room on Wednesday if you require help.",
        options: {
          A: 'how many pictures to put in their final project.',
          B: 'what to include in their final project.',
          C: 'when to hand in their final project.',
        },
        answer: 'B',
      },
      {
        id: 5,
        type: 'text',
        from: 'Sam',
        content: "Sorry, my bus is delayed! I can meet you at the ice cream shop. Why not go straight to the skateboard park? We'll still get ice cream afterwards as the place stays open late.\nSam",
        options: {
          A: "Sam's bus problems mean they will have to change their plans.",
          B: "Sam wants to go to the skateboard park first because it isn't open later.",
          C: "Sam's travelling on a route which doesn't stop near the ice cream shop.",
        },
        answer: 'A',
      },
    ],
  },
  part2: {
    title: 'Reviews of transport museums',
    instructions: 'The young people below all want to visit a transport museum. On the next page there are eight reviews of transport museums. Decide which museum would be the most suitable for the young people below.',
    people: [
      { label: '6', name: 'Amal', text: "Amal and her family want to have a day out at a museum. Amal hopes to see inside an old ship, and the family need somewhere for Amal's small brother to play." },
      { label: '7', name: 'Niall', text: "Niall hopes to watch a film about transport methods around the world and learn how transport might change in the future. He'd like to buy something to remind him of his trip." },
      { label: '8', name: 'Kazue', text: 'Kazue wants to learn about the history of trains and to know more about the people who work on important transport projects. Her family hope to have a picnic during the visit.' },
      { label: '9', name: 'Dariusz', text: "Dariusz wants to know about early space travel and to find out about working in the airline industry. His family don't have a car, so need to visit a city centre museum." },
      { label: '10', name: 'Esme', text: "Esme and her dad want to do a museum tour with a guide and to see some old racing cars. Esme wants to experience what it's like to drive a train." },
    ],
    options: [
      { label: 'A', name: 'Central Transport Museum', text: "If you're concerned about the planet, don't miss the Next Steps exhibition, all about how we could be travelling in the years ahead. The exhibition includes videos about transport used in other countries, from bikes to high-speed trains, and the cards in the shop make fantastic souvenirs." },
      { label: 'B', name: 'The Talbot', text: 'This place has loads to entertain for the whole day, including a garden where little ones can run around safely. The latest exhibit is a large 18th-century boat in incredible condition – find out what life on board was like as you walk around. It transported goods world-wide, and you can imagine it racing across the seas!' },
      { label: 'C', name: 'Transport Hub', text: "The great thing about this museum is that its displays change frequently. Currently, visitors discover the work involved in planning city transport systems, and a future exhibition will be 'space travel', concentrating on technology in modern rockets. The gift shop has interesting things to buy too." },
      { label: 'D', name: 'All about Transport', text: "This museum's perfect for the whole family, with guided tours aimed at younger visitors. You can watch a film about the world's most beautiful train rides and learn how engineers build the bridges and tunnels that keep traffic moving!" },
      { label: 'E', name: 'Garston Place', text: "Just inside the entrance, don't miss displays about those who design, build and run international city transport centres, like airports or ports. The hall has an exhibition about the start of the rail industry, with videos of early passenger trains. There are tables outside if you're bringing food – there's lots of space for active kids!" },
      { label: 'F', name: 'Explore!', text: "This museum has something for everyone, and it's worth booking to go round with an expert. We've got a section on motor-racing history, with early record-breaking vehicles on display and the chance to operate the controls of a real train, travelling along a track! It's not suitable for young children, but you'll remember the experience for years." },
      { label: 'G', name: "Marley's Museum", text: "With a convenient location not far from the heart of the city, it's easy to spend several hours in this small museum. Listen to interviews with people talking about transport-related jobs: everything from pilots to cruise ship captains! You'll also see plans for the first space rockets and learn about problems engineers faced." },
      { label: 'H', name: 'Herston Museum of Transport', text: "If you're interested in how transport could change the future of the world, then you'll love this place. Everyone, young or old, will enjoy the interactive video games. Race a super-car, or be in charge of a spaceship! Don't miss the café – buy a cake to eat in the museum garden." },
    ],
    questions: [
      { id: 6, person: 'Amal', answer: 'B' },
      { id: 7, person: 'Niall', answer: 'A' },
      { id: 8, person: 'Kazue', answer: 'E' },
      { id: 9, person: 'Dariusz', answer: 'G' },
      { id: 10, person: 'Esme', answer: 'F' },
    ],
  },
  part3: {
    title: 'Toby Harris, actor',
    instructions: 'For each question, choose the correct answer.',
    passage: "17-year-old Toby Harris has already appeared in a number of films\nActing is something that I've been interested in for ages. My aunt belonged to a drama group, and I used to watch her shows when I was a child. But it was only when I was 11 that I joined a theatre club and started acting regularly. I had accompanied a school friend, who was nervous about going alone, and I signed up that same evening! My drama teacher was happy because she'd always said I was talented.\nA while later, a film director saw me in one of the club's plays and asked me to be in her film. I said yes, and for me, that was the start of everything. I thought the film would be scary to do, as I was the youngest person at the film studio. I was really calm during the whole thing though, which I hadn't expected. Everyone was so friendly! I didn't have that much to do, not like the main star. He's become very well-known since we worked together. All his films are extremely successful.\nI've done a few films now. The last was a comedy, which I was glad to finish – it's not something I find easy! I often get asked for tips about getting into films. Everyone thinks that who you know is important. Maybe that used to be true. Nowadays, it's about experience. There are lots of directors looking for new actors for different film projects, so accept as much work as you can! Even two minutes on camera is useful. Also, ignore reviews. Positive comments are lovely to get, but people can also be unkind!\nRecently, I finished a big film, and now I'm planning for the future. I tried for a part in a television series; they chose someone else in the end unfortunately – I'm fine with it, though. It's part of being an actor! I'm taking advantage of a break to do some horse riding. I was taught how to do it on an advanced acting course last year and I need to make sure I still remember everything – it's good for my CV, to show I'd be good in action films, for example!",
    questions: [
      {
        id: 11,
        text: 'Toby decided to join a theatre club after',
        options: { A: 'his teacher recommended it to him.', B: 'his aunt was involved in running it.', C: 'he saw other children acting in one of its plays.', D: "he enjoyed a session he'd gone to with a friend." },
        answer: 'D',
      },
      {
        id: 12,
        text: 'How did Toby feel about the first film he acted in?',
        options: { A: 'excited about working with the famous people in it', B: 'surprised at how relaxed he felt when making it', C: 'pleased to have such a big part in it', D: 'amazed at how popular it was' },
        answer: 'B',
      },
      {
        id: 13,
        text: 'Toby advises young people interested in being in films to',
        options: { A: "ask for people's opinions about their performance.", B: 'watch a range of films by different directors.', C: 'get to know other people in the industry.', D: 'take any roles that are offered.' },
        answer: 'D',
      },
      {
        id: 14,
        text: 'What is Toby going to do next?',
        options: { A: 'practise a useful skill', B: 'star in a TV programme', C: 'play a part in an exciting film', D: 'teach on a course for advanced actors' },
        answer: 'A',
      },
      {
        id: 15,
        text: 'What would Toby write in his blog about acting?',
        options: {
          A: "I'm trying to find a way to deal with being told I'm not the right person for a role – it just doesn't get any easier, I'm afraid!",
          B: "I'm so pleased I've been in such a variety of films. My favourites are the funny ones – they're always fun, as you'd expect!",
          C: "All my success has come because of someone who was in the audience at a show I did. I'm very lucky!",
          D: "I regret wasting time deciding whether to get involved in my first drama group. If you think you'll enjoy something, try it!",
        },
        answer: 'C',
      },
    ],
  },
  part4: {
    title: 'Bees play games too!',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      "We know that some animals love playing games. Dogs, for example, spend hours running after sticks. But recently, scientists have carried out experiments using bees and small wooden balls.",
      "And the idea that the insects do so is making experts ask questions about insect intelligence.\nIn one experiment, bees were put in a box with separate spaces, rather like rooms. The bees could move around the box into the different 'rooms'. One contained pollen, bees' favourite food. The bees had to get from their starting point at one side of the box to the area with the food. They could choose one of two routes through spaces containing small wooden balls. One area had balls which were stuck to the floor.",
      "The scientists discovered that as the experiment was repeated, the bees chose the route through this second room much more frequently, stopping to 'play' with the balls as they passed. Some bees were seen moving the balls over 100 times. This again made scientists believe that the insects were doing it just for fun.",
      "Therefore, there had to be a particular reason for the bees' decision.\nIn another experiment, two rooms were used, one painted blue and the other yellow. The scientists put the small wooden balls in just one of these rooms. In this experiment, the balls were not stuck to the floor. The bees were then allowed in to explore the areas.",
      "When the bees were then put back in again, scientists could clearly see a difference in which room they entered. For example, if the balls had been in the yellow room, more bees chose that room, even though the balls were no longer there.\nScientists also found that results varied depending on individual bees, with younger ones pushing the balls more often than older ones.",
      "Adult males spent longer on the activity than females, for example.",
    ],
    options: [
      { label: 'A', text: 'Despite this, the scientists knew their ideas were correct.' },
      { label: 'B', text: 'In the other, however, they could be moved.' },
      { label: 'C', text: "That wasn't the only difference seen." },
      { label: 'D', text: 'The method therefore produced an unusual result.' },
      { label: 'E', text: 'They say the results show bees also have the ability to enjoy an activity.' },
      { label: 'F', text: 'After a while, the bees and the balls were removed.' },
      { label: 'G', text: 'Such changes were challenging for smaller bees.' },
      { label: 'H', text: 'After all, both ways led to a reward.' },
    ],
    questions: [
      { id: 16, answer: 'E' },
      { id: 17, answer: 'B' },
      { id: 18, answer: 'H' },
      { id: 19, answer: 'F' },
      { id: 20, answer: 'C' },
    ],
  },
  part5: {
    title: 'All about octopuses',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "There are many different types of octopuses. These sea creatures are found in many (21) ........................ around the world, and actually live in every ocean on the planet. They live quite near the coast and use their eight 'arms' to build homes among the rocks on the sea floor. They (22) ........................ live alone, and they will defend their homes from attack from other sea creatures.\n",
      "They can move quickly through the water, (23) ........................ speeds of up to 40 kilometres per hour. Octopuses can produce ink which they use to make the water around them go black if they are in danger. They hide in this ink as they swim away, which (24) ........................ other animals from seeing where they have gone.\n",
      "Octopuses also have very high (25) ........................ of intelligence. For example, they have been filmed taking the tops off jars in (26) ........................ to get to the food inside!",
    ],
    questions: [
      { id: 21, options: { A: 'positions', B: 'situations', C: 'locations', D: 'directions' }, answer: 'C' },
      { id: 22, options: { A: 'nearly', B: 'exactly', C: 'typically', D: 'regularly' }, answer: 'C' },
      { id: 23, options: { A: 'completing', B: 'succeeding', C: 'aiming', D: 'achieving' }, answer: 'D' },
      { id: 24, options: { A: 'prevents', B: 'avoids', C: 'escapes', D: 'protects' }, answer: 'A' },
      { id: 25, options: { A: 'values', B: 'numbers', C: 'levels', D: 'quantities' }, answer: 'C' },
      { id: 26, options: { A: 'order', B: 'case', C: 'fact', D: 'full' }, answer: 'A' },
    ],
  },
  part6: {
    title: 'Review of our school trip to City Theatre',
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      "Last week, my class and I went to the City Theatre to see a play called Surprise Party. Our teacher wanted us to see it because it is (27) ........................ of the plays that we are studying at school this year. I (28) ........................ never been to the City Theatre before the class trip, so I was really excited about it.\n",
      "I am pleased to say that I certainly wasn't disappointed! There was a great view (29) ........................ the stage from our seats, and my friends and I were able (30) ........................ hear everything the actors said very clearly.\n",
      "On the coach on the way home after the performance, (31) ........................ all agreed that the actor in the lead role was particularly good. If you want a good night out, and a change from the cinema, I would definitely recommend going to the theatre to watch (32) ........................ live performance.",
    ],
    questions: [
      { id: 27, answer: 'one' },
      { id: 28, answer: 'had' },
      { id: 29, answer: 'of' },
      { id: 30, answer: 'to' },
      { id: 31, answer: 'we' },
      { id: 32, answer: 'a' },
    ],
  },
}

// PET Trainer 2 Test 2 Reading 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 2 Exam Practice · 书页 54–69（PDF p055–p070，仅录 Exam Practice 帧，Training 页不录）
// 答案来源：书内 Teacher's Notes & Keys（书页 204–209 / PDF p205–p210），逐题核对
// Part 1/2/3/4/5/6 题数 5/5/5/5/6/6；Part 2、Part 4 选项各 8 个（A–H）
// Part 4 的 passage_segments 按挖空位切分：segment[0]–[4] 末尾分别对齐空缺 (16)–(20)，
// 第 5 个空缺 (20) 之后还有正文，故为第 6 段（该段后无芯片）。

const TRAINER2_TEST_2_READING = {
  id: 'pet-trainer2-2-reading',
  title: 'PET Trainer 2 · Test 2 Reading',
  source: {
    file: 'PET Trainer2/PET Trainer2 电子版.pdf',
    collection: 'PET Trainer 2',
    test: 2,
    pages: '书页 54–69（Exam Practice）',
    answerSource: "书内 Teacher's Notes & Keys（书页 204–209）",
    verified: false,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Kim',
        to: 'Marta',
        content: "Marta,\nWe've tried booking tickets for tomorrow's theatre trip, but the website isn't working. If I go to the theatre box office to get them, it's probably quicker than waiting for the website to be fixed!\nKim",
        options: {
          A: 'telling Marta why the day of a trip needs to change',
          B: "explaining to Marta why she hasn't bought tickets for the theatre yet",
          C: 'warning Marta not to buy tickets from the theatre website',
        },
        answer: 'B',
      },
      {
        id: 2,
        type: 'notice',
        content: 'Hall to be kept clear.\nUse hall lockers provided.\nAny items which are left out will be taken to reception by staff.',
        options: {
          A: 'Students have to leave their things at reception.',
          B: 'Students are able to leave their things in the hall.',
          C: 'Anything remaining in this area will be put into the lockers by staff.',
        },
        answer: 'B',
      },
      {
        id: 3,
        type: 'text',
        from: 'Mum',
        to: 'Nick',
        content: "Nick,\nDon't forget the dentist today. I've just thought, I'd better collect you after school – if you wait for the bus, we'll probably be late getting there. We'll have pizza afterwards, OK?\nMum",
        options: {
          A: "Nick's mum is asking him not to take too long coming out of school.",
          B: "Nick's mum is reminding him about where they are going to eat later.",
          C: "Nick's mum is suggesting a new travel arrangement.",
        },
        answer: 'C',
      },
      {
        id: 4,
        type: 'text',
        from: 'Mr Roberts',
        to: 'students',
        content: "Subject: concert\nTo take part, sign up on the noticeboard by this Friday. All welcome, from singers to poets! Volunteers also required to run the event. Email me if that's you!\nMr Roberts",
        options: {
          A: 'The teacher is requesting help in organising the concert.',
          B: "The teacher is inviting students to watch people perform in Friday's concert.",
          C: 'The teacher is asking students to email details of their planned performances.',
        },
        answer: 'A',
      },
      {
        id: 5,
        type: 'notice',
        // 原书为补全句题型（题干 "The notice tells students that tomorrow they must"），
        // 渲染器无 stem 字段，已把题干并入选项改为完整句（考察点不变），见 REVIEW-t2.md
        content: 'Sports Event\nRemember: team games in the park tomorrow! All refreshments are provided, plus everything needed for games like badminton and football. Please come to school in sports kit – no uniforms!',
        options: {
          A: 'Tomorrow students must remember to bring some useful equipment.',
          B: 'Tomorrow students must bring plenty of food and drink with them.',
          C: 'Tomorrow students must wear clothes that are suitable for sports.',
        },
        answer: 'C',
      },
    ],
  },
  part2: {
    title: 'History festivals',
    instructions: 'The young people below all want to visit a history festival. On the next page there are eight descriptions of history festivals. Decide which history festival would be the most suitable for the young people below.',
    people: [
      { label: '6', name: 'Eleanor', text: "Eleanor wants to learn about important historical people from the local area. She'd love to discover how people entertained themselves in the past and buy a history book." },
      { label: '7', name: 'Arjun', text: "Arjun wants information for a school project on old houses, and tips on making sure the information he uses from websites for history homework is accurate. He'd like to learn about clothes people wore long ago." },
      { label: '8', name: 'Cassie', text: "Cassie is interested in food people ate hundreds of years ago and wants to take part in a history quiz. During her visit, she'd love information about joining a local history group for young people." },
      { label: '9', name: 'Zander', text: "Zander thinks hearing some traditional music would be fun, and he hopes to learn about jobs people used to have. He'd also like to attend a history talk on a battle." },
      { label: '10', name: 'Cindy', text: "Cindy loves art and hopes to see important old paintings. She'd like to make something to take home, and she thinks watching a show about a historical period is a good way to learn about history." },
    ],
    options: [
      { label: 'A', name: 'History world', text: "Have fun working in groups to design an 18th-century costume – better than looking at pictures! You'll also discover fascinating details about the past, including how the places people called home, from simple huts to important castles, have changed over time. Guides also explain how using the internet helps check facts for your research." },
      { label: 'B', name: 'Days gone by', text: "Discover why being an artist was an important job in previous centuries and create your own painting to put on your wall! Then enjoy a 15th-century lunch, consisting of pies using only vegetables available at the time, and take some home to share with your family!" },
      { label: 'C', name: 'History in focus', text: "Start with a lecture on a decades-long fight between two important 14th-century families. After that, try some of the things people did for work at the time, like making clothes and baking, and finish with a concert in an ancient palace where you'll join in singing traditional songs!" },
      { label: 'D', name: 'All about history', text: "Come and see how ordinary people's lives provide fascinating historical detail; we can easily imagine them having fun after school or work, or relaxing at home! You'll learn about how a history group discovered an ancient theatre, providing us with information about shows people enjoyed." },
      { label: 'E', name: 'The past comes to life', text: "Explore the life of ordinary people – what they ate, and games and puzzles they enjoyed. The region around the festival also produced people who changed the world, including politicians and musicians. Find out why! If you want something to read at home, there's a selection from various history experts on sale." },
      { label: 'F', name: 'See the past', text: "If you want to know about the history of this area, the talk by local author Mia Jones is perfect. She examined ruins of an ancient village close to the town and wrote about them for her history show. Although you can watch this online from home, at the event, you'll visit them with her!" },
      { label: 'G', name: 'History all around', text: "Spend the day in a castle, examining special objects, like drums used in ancient battles, and preparing centuries-old recipes. Pay attention – there will be questions, with books and posters for getting all the answers correct! The castle holds regular meetings for a club aimed at history-loving teens, so see staff for details." },
      { label: 'H', name: 'A day in the past', text: "Our location in a 600-year-old hall offers learning opportunities: answer questions by examining valuable and rare pictures of powerful kings, wearing the clothes of various periods. After trying recipes from a king's kitchen, decorate a box to keep, using 17th-century colours, before watching a play describing a 50-year-long local 15th-century battle." },
    ],
    questions: [
      { id: 6, person: 'Eleanor', answer: 'F' },
      { id: 7, person: 'Arjun', answer: 'A' },
      { id: 8, person: 'Cassie', answer: 'G' },
      { id: 9, person: 'Zander', answer: 'C' },
      { id: 10, person: 'Cindy', answer: 'H' },
    ],
  },
  part3: {
    title: 'Jacob Harvey – Lead singer with the band Mason',
    instructions: 'For each question, choose the correct answer.',
    passage: "Fans always ask how Mason started. My guitar teacher knew I wanted to be in a band and said putting posters up at school to find musicians could help. The trouble was, I knew my classmates weren't into rock, like me. In the end, I heard about a band who'd recently stopped playing. The singer had moved away, so they couldn't practise. I messaged the drummer and the keyboard player. We did some songs together, and we've been together ever since. We've become close mates: me singing, Kath on drums and Victor on keyboards.\nThat was eight years ago. Our audiences have increased, and we play in bigger places. We still do concerts in our home town, though, on every tour – that's important to us. I still get nervous before a concert, but once I'm on stage I feel fine. Sometimes things go wrong, but that's OK! And being in front of an audience improves our performance. The atmosphere's incredible, with everyone videoing their favourite songs on their phones!\nWe've recently met Gary Keen from rock band The 45s. He took us round his studio and let us record our song Days there! He stayed to listen and made some interesting suggestions. He even promised to take a copy to a meeting he was having with an international music company! And he's put a link to us on his social media. More than anything, that's what's got even more people talking about us, and it's what really changes things.\nPeople sometimes want advice about being in a band. Well, when you get more well-known, people start offering to manage you. Don't do anything you don't want to do; don't worry about doing things yourself; it's better than being with the wrong person. You need to get your music heard, though. Giving away tickets to shows is a good way to do this. Just remember to develop your own style and be original. And maybe one day, you'll get recognised in the street! The first time that happened was amazing! And we're very happy to be in photos and chat with people. We're nothing without our fans, after all!",
    questions: [
      {
        id: 11,
        text: 'How did Jacob find people for his band?',
        options: {
          A: 'He invited musicians from another band to play with him.',
          B: 'His teacher suggested a band to join.',
          C: 'He put a notice up on his school noticeboard.',
          D: 'He chose musicians who were already his friends.',
        },
        answer: 'A',
      },
      {
        id: 12,
        text: 'What does Jacob say about playing music to an audience?',
        options: {
          A: 'Going on stage gets easier each time.',
          B: 'Making mistakes is very embarrassing.',
          C: 'Doing a live show makes the band play better.',
          D: 'Seeing people recording the songs is annoying.',
        },
        answer: 'C',
      },
      {
        id: 13,
        text: 'What did Jacob find most useful about meeting a famous musician?',
        options: {
          A: 'Gary included some information about the band online.',
          B: 'Gary introduced Jacob to a new contact in the music business.',
          C: 'Jacob got help to finish writing a song.',
          D: 'Gary let them use his music studio.',
        },
        answer: 'A',
      },
      {
        id: 14,
        text: "Jacob's advice to other young bands is to",
        options: {
          A: 'create a website to advertise yourselves.',
          B: 'let people see you play for free.',
          C: 'get a manager as soon as you can.',
          D: 'follow the latest trends in music.',
        },
        answer: 'B',
      },
      {
        id: 15,
        text: 'What would fans of Mason say about the band?',
        options: {
          A: "I love that all the members have great voices – it's good that they all have a chance to sing, not just Jacob!",
          B: "I live in the band's home town. I wish they'd play here when they're on tour – they stopped doing that as soon as they got famous!",
          C: 'Days is my favourite song – I loved that the lead singer of The 45s sang on it too!',
          D: "The fact that Mason are always willing to talk to their fans is great. It shows they think we're important to them.",
        },
        answer: 'D',
      },
    ],
  },
  part4: {
    title: 'An incredible journey',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      'A small boat built by high school students from the American state of New Hampshire has made an incredible journey. The boat, around 1.5 metres in length, is called Rye Riptides.\nThe adventure started when a teacher at Rye Junior High School ordered a kit for a project to make a boat. The kit was supplied by a company called Educational Passages, which aims to use boat-building projects to develop children\'s interest in science and technology.',
      "For example, because the kit includes technology which sends information about the boat's position back to a computer, they learned about how waves move around the oceans.\nThe students spent two years making the boat, and also chose items to send with it on its journey.",
      'The hope was that anyone finding the boat later would be interested in seeing things like these from another country. After students had some help from Educational Passages, the boat was ready to start its journey. The students were very excited. Some believed it would reach European shores.',
      "At first, they were able to follow Rye Riptides as it moved across the Atlantic Ocean and marked the route on a map.\nThen, in September 2021, Rye Riptides stopped sending a signal. The students knew that there were huge waves in the Atlantic Ocean.",
      'But this wasn\'t what happened. Only a few months later, another signal was received. Rye Riptides had landed on Smøla Island off the coast of Norway. Educational Passages helped again, using social media to contact a local school.\nA boy called Karel Nuncic saw her message. Karel went to Smøla Island and found the boat.',
      'Luckily, though, the objects the students had put inside were safe, and Karel took the boat back to show his classmates. The two groups of students have since connected online, making friends and learning about new cultures.',
    ],
    options: [
      { label: 'A', text: 'It was covered in small sea creatures and badly damaged.' },
      { label: 'B', text: 'The result was exactly what the students wanted.' },
      { label: 'C', text: 'These included photos and coins that were placed inside.' },
      { label: 'D', text: 'Others, however, were not so sure.' },
      { label: 'E', text: "It hasn't been easy to decide what they should do." },
      { label: 'F', text: 'At the same time, it helps increase their understanding of the oceans.' },
      { label: 'G', text: 'Despite this, the boat had travelled a huge distance.' },
      { label: 'H', text: 'They thought that these had destroyed the boat.' },
    ],
    questions: [
      { id: 16, answer: 'F' },
      { id: 17, answer: 'C' },
      { id: 18, answer: 'D' },
      { id: 19, answer: 'H' },
      { id: 20, answer: 'A' },
    ],
  },
  part5: {
    title: 'Ancient Chinese Art',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "Ancient China is known for its important inventions, including paper, silk and tea. As the culture is over 8,000 years old, it is perhaps no (21) ........................ that Ancient China is also famous for creating wonderful art. One example is 'calligraphy', the name given to producing beautiful pieces of writing by hand.\n",
      'Once someone had decided to (22) ........................ up calligraphy, years of practice were required before they became an expert. Drawing each part of a letter had to follow a special order, and the final piece of work had to be completely (23) ........................\n',
      'Another important type of art from Ancient China is painting. The paintings produced were often of the countryside and often (24) ........................ of scenes including birds, fish, water or trees. The pictures were also painted in a wide (25) ........................ of sizes, and in important buildings like palaces, a painting might even (26) ........................ a whole wall!',
    ],
    questions: [
      { id: 21, options: { A: 'reason', B: 'idea', C: 'surprise', D: 'argument' }, answer: 'C' },
      { id: 22, options: { A: 'bring', B: 'take', C: 'set', D: 'put' }, answer: 'B' },
      { id: 23, options: { A: 'proper', B: 'exact', C: 'true', D: 'accurate' }, answer: 'D' },
      { id: 24, options: { A: 'belonged', B: 'included', C: 'consisted', D: 'contained' }, answer: 'C' },
      { id: 25, options: { A: 'range', B: 'total', C: 'amount', D: 'quantity' }, answer: 'A' },
      { id: 26, options: { A: 'hang', B: 'follow', C: 'cover', D: 'appear' }, answer: 'C' },
    ],
  },
  part6: {
    instructions: 'For each question, write the correct answer.\nWrite one word for each gap.',
    passage_segments: [
      "Hi Johann,\nI really need your help with the history homework that Mr Wilson gave us (27) ........................ few days ago. I really need to start it. I (28) ........................ been too busy to think about it until now, I'm afraid! Mr Wilson said it might be a good idea to go through our ideas with a friend before we start doing any work on the project. What (29) ........................ you think? I know it would be really helpful to show you what I'm planning. I can look at yours (30) ........................ you think that could be useful. (31) ........................ you know, out of all our school subjects, history is (32) ........................ one I like most, so I really want to do my best!\n",
      'Let me know, and we can arrange a time, OK?\nHarvey',
    ],
    questions: [
      { id: 27, answer: 'a' },
      { id: 28, answer: 'have' },
      { id: 29, answer: 'do' },
      { id: 30, answer: 'if' },
      { id: 31, answer: 'As' },
      { id: 32, answer: 'the' },
    ],
  },
}

// PET Trainer 2 Test 3 Reading 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf（Test 3 完整套卷，书页 94–103 / PDF p095–p104）
// 答案来源：书内 Practice Test Key · Test 3（书页 220 / PDF p221），逐题核对
// 注意：Part 4 的 passage_segments 共 6 段——前 5 段每段末尾对应一个空缺位(16)–(20)，
//       第 6 段为空缺(20)之后的剩余正文（渲染器只在有对应题号的段后插入挖空芯片）。

const TRAINER2_TEST_3_READING = {
  id: 'pet-trainer2-3-reading',
  title: 'PET Trainer 2 · Test 3 Reading',
  source: {
    file: 'PET Trainer2/PET Trainer2 电子版.pdf',
    collection: 'PET Trainer 2',
    test: 3,
    pages: '书页 94–103',
    answerSource: '书内 Practice Test Key（书页 220）',
    verified: false,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Matt',
        to: 'Jamal',
        content: "Jamal\nIf you've finished playing Rider, pass the game on to Rory, OK? He heard it's good so I promised he could have it next. It'll be quicker than returning it to me first!\nMatt",
        options: {
          A: 'Matt wants Jamal to hurry up and finish playing a game.',
          B: 'Matt wants Jamal to give a game directly to Rory.',
          C: 'Matt wants Jamal to recommend a suitable game to play.',
        },
        answer: 'B',
      },
      {
        id: 2,
        type: 'notice',
        content: 'Sports centre activities\nFree activity with every swimming session paid for!\nSee list for sports included in offer.\nHurry, limited places!',
        options: {
          A: 'Customers can choose any number of activities they like.',
          B: 'A small number of customers can use the pool without paying.',
          C: 'People wanting to take advantage of an offer must do so quickly.',
        },
        answer: 'C',
      },
      {
        id: 3,
        type: 'text',
        from: 'Sue',
        to: 'Jenny',
        content: "Jenny\nMy guitar lesson's cancelled tomorrow. Let's meet in the park! I remember you have tennis at 5, so maybe after that? I'd like to try that ice cream place you said was good!\nSue",
        options: {
          A: 'giving a reason for meeting her friend Jenny tomorrow',
          B: 'reminding Jenny about a change to a tennis lesson',
          C: 'suggesting that she and Jenny meet after a music lesson',
        },
        answer: 'A',
      },
      {
        id: 4,
        type: 'text',
        from: 'Kenny',
        to: 'Jon',
        content: 'About: History website\nThanks for telling me about that site – it helped me finish my project! I see what you mean about bits being rather confusing, but as you said, the diagrams were excellent.\nKenny',
        options: {
          A: 'Kenny wants Jon to help him complete his homework.',
          B: "Kenny agrees with Jon's opinion about some of the information.",
          C: 'Kenny suggests Jon should include pictures as part of his project.',
        },
        answer: 'B',
      },
      {
        id: 5,
        type: 'text',
        from: 'David',
        to: 'Jasmine',
        content: "Jasmine\nI'd like to borrow your calculator tomorrow – mine's not working!\nIf you're going out tonight, put it downstairs for me. I'm going to the cinema and I can't see it in your room!\nDavid",
        options: {
          A: 'David hopes Jasmine can give back something he lent her.',
          B: 'David needs Jasmine to tell him where to find some equipment.',
          C: 'David wants Jasmine to leave something for him that he can use.',
        },
        answer: 'C',
      },
    ],
  },
  part2: {
    title: 'Places for a day out with a group of friends',
    instructions: 'The young people below all want to find a place to spend the day with a group of their friends. On the opposite page there are reviews of eight places. Decide which place would be the most suitable for the young people below.',
    people: [
      { label: '6', name: 'Jing', text: "Jing wants to go somewhere where she can play football outside and where she and her friends can get bikes to ride. She'd like to do some cooking outdoors during the day too." },
      { label: '7', name: 'Carlos', text: 'Carlos hopes to take part in a team sports competition with his friends. He wants the place to have cover available if it rains, and his parents would rather not drive to the location.' },
      { label: '8', name: 'Ebba', text: 'Ebba loves animals and wants to learn about different types, and how to make good drawings of them. Her parents want space to arrange a picnic lunch.' },
      { label: '9', name: 'Yusuf', text: "Yusuf wants to do something with his friends connected to photography. He'd like to spend the day in an interesting building and to get to solve puzzles." },
      { label: '10', name: 'Sheena', text: "Sheena doesn't like fast food, but wants a meal during her day. She'd like to do some singing with her friends and would like advice about putting on a really good performance." },
    ],
    options: [
      { label: 'A', name: 'Adventure for All', text: "This is a fascinating museum with displays on different subjects. It's also the perfect place for special days. Groups will love the 'escape room' – answer questions to find hidden keys and escape! There's also a list of the museum's rarest and most unusual objects – make teams and see who can take the best pictures!" },
      { label: 'B', name: 'Lomas Centre', text: "A day out with a difference! For those coming by car, there's parking a kilometre away, then you catch a shuttle bus. Once you're there, you and your group will help an expert to look after some animals – buy photos of you all feeding penguins!" },
      { label: 'C', name: 'Fun Factory!', text: "There's a huge hall here with plenty to do in bad weather, including volleyball courts with electronic systems to keep score. If you prefer to explore outside spotting wildlife, there are lots of nature tracks for walkers, so no bikes rushing past! The directions by road are clear, or the station's convenient too." },
      { label: 'D', name: 'Bewley Hall', text: "This place is great for groups of friends, as you'll write the words and music to make your own record! The staff are there to offer tips about creating a professional sound. Being creative is hungry work, and there's a wide range of healthy options on offer at the café." },
      { label: 'E', name: "Jack's Place", text: "If a great day means playing sport, this might not be for you! But if you're interested in wildlife, you'll find out about some unusual examples. Then, with just a pencil and paper, you'll create something more interesting than a photo. Head to the tables by the lake if you're bringing refreshments and you want great views." },
      { label: 'F', name: 'Newton Hollow', text: "There's a mix of forest-based activities to entertain everyone – explore nature, whatever the weather! Those bringing bikes will find various paths, with places to stop and take perfect selfies! There's a café with hot food like pizzas, and an amazing range of ice creams for special treats too." },
      { label: 'G', name: 'Action Hub', text: "The place for creative teens! You'll need to go by car, although the car park's small and gets busy. There's a daily performance where musicians entertain you with songs from shows, making special memories of the day, and a photography exhibition of weird buildings – try and guess which country they come from!" },
      { label: 'H', name: "Carley's Ground", text: "The woods have lovely cycle routes – look out for deer! There are bicycles for hire, and you can even borrow a ball and use the pitches there. If you're hungry, choices include barbecuing your burgers in the woods for a picnic or buying snacks from the stall. Remember it's outdoors – pack suitable clothes in bad weather." },
    ],
    questions: [
      { id: 6, person: 'Jing', answer: 'H' },
      { id: 7, person: 'Carlos', answer: 'C' },
      { id: 8, person: 'Ebba', answer: 'E' },
      { id: 9, person: 'Yusuf', answer: 'A' },
      { id: 10, person: 'Sheena', answer: 'D' },
    ],
  },
  part3: {
    title: 'River Cleaning Event',
    author: 'Lily Hahn',
    instructions: 'For each question, choose the correct answer.',
    passage: "I recently took part in an event called a River Clean, where volunteers collect rubbish from a river. I'd wanted to do one ever since I saw an online post from a school friend, describing one she'd done. Then one day, out near the river, there was a poster on the noticeboard providing details about a River Clean event. It included the phone number of the person setting it up so you could register your name. And that's what I did!\nOn the day, I went to the river and saw some people standing around. Despite the faces not being familiar, everyone looked friendly. Most had brought thick gloves, which the organisers had asked us to do if possible. I was pleased there were spare ones to borrow, as I realised I'd left mine at home. I'd been in a rush because I hadn't wanted to be late! We read through a list of instructions, and after being given the chance to ask questions, we started collecting.\nI'm generally a sociable person, but once I started, I mostly worked in silence, probably because I had to focus so much. When we'd finished, despite there being only a small number of us, we'd filled four big trucks with rubbish. Unfortunately, I think it will keep appearing in the river in future, but seeing everything we'd removed in one place felt like an achievement and clearly showed the problem. I'd never imagined there'd be so much rubbish, and by far the most common sort was plastic packets.\nWe finished exactly at midday, and before we went home, we completed a short questionnaire about our top idea for solving the problem of rubbish in rivers. Everyone had useful ones, like providing more recycling bins – although I think people need to be taught to use them! There's lots of information about recycling in schools, but in people's homes, too much plastic often goes into general rubbish and can end up back in the water. Actually, though, I think that unless people start buying products that aren't wrapped in plastic, nothing we do will have an effect, even if we did a river clean weekly! So that's what I put.",
    questions: [
      {
        id: 11,
        text: 'How did Lily find out that the event was happening?',
        options: { A: 'from talking to someone she knew at school', B: 'from speaking to the organisers', C: 'from some information by the river', D: 'from an advertisement on social media' },
        answer: 'C',
      },
      {
        id: 12,
        text: 'When she arrived at the river, Lily',
        options: { A: 'recognised some of the other volunteers.', B: "found she'd forgotten some important equipment.", C: 'listened to a talk about what she had to do.', D: 'discovered the event had started without her.' },
        answer: 'B',
      },
      {
        id: 13,
        text: 'How did Lily feel after the River Clean event?',
        options: { A: 'surprised by the amount of rubbish she found', B: 'upset that there was still rubbish in the river', C: 'amazed by the wide variety of rubbish she collected', D: 'disappointed that so few people helped clean up the rubbish' },
        answer: 'A',
      },
      {
        id: 14,
        text: 'Lily says the most important thing people can do is to',
        options: { A: 'teach their children to respect the environment.', B: 'take part in river clean events regularly.', C: 'use the bins at the river.', D: 'change their shopping habits.' },
        answer: 'D',
      },
      {
        id: 15,
        text: 'What would Lily write in a text to her friend?',
        options: {
          A: "I didn't like having to spend my time picking up other people's rubbish and I think I wasted my time.",
          B: "I'm so glad I got to take part. It's not something I'd ever heard of before, and I think it's a great idea.",
          C: 'Everyone was just concentrating on their section of the river, so we didn\'t spend a lot of time chatting. Quite unusual for me!',
          D: "The organisers are sending us a link for a form where we can suggest solutions to the problem. I think that's a good idea.",
        },
        answer: 'C',
      },
    ],
  },
  part4: {
    title: 'Andrew Edston: Young Chef',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      "Andrew Edston is a 20-year-old chef with a great future. He recently won a competition called The Future Chef, for professional chefs in the part of the UK where he works. He's already taken part in various cooking contests but says this latest was the toughest. Even before it started, he knew he'd be competing against talented chefs.",
      "As he explains, he always enters competitions convinced he's going to win!\nAlthough competitions can be enjoyable, cooking contests are not always just for fun. Restaurant owners often enter their young chefs into competitions as part of their training. This is what happened to Andrew. In the kitchen at Garden Tastes, the restaurant where he works, he is usually in charge of one course.",
      "Doing so has allowed him to gain important experience.\nThe people judging the food are usually top food industry experts, which is extremely useful. Andrew gets to present his food to important people and hear their comments on every dish.",
      "In fact, in the restaurant, it's more likely that customers wanting to speak to the chef will be complaining about a problem! And even when customers take the time to say they like something, it's not the same as hearing this from a food expert.\nAndrew's already planning to enter a national cooking competition called Top Chef. If he gets to the final, he'll cook live on TV. It's a huge challenge, so he's getting advice from the other chefs at work.",
      "For one thing, it'll be great advertising for the restaurant! They also think he deserves success, knowing how much he puts into getting everything right. For example, one of the dishes Andrew's planning contains cheese. Rather than using something he'd cooked with before, he visited many farms and tasted hundreds of different cheeses.",
      "It's attention to details like this which he hopes will impress judges!",
    ],
    options: [
      { label: 'A', text: 'They all want to see him do well.' },
      { label: 'B', text: 'The ingredients are given to the chefs.' },
      { label: 'C', text: 'In contests, though, he plans a whole menu.' },
      { label: 'D', text: 'If the dish is popular, however, he cooks it again.' },
      { label: 'E', text: 'Having the opportunity to get opinions like this is rare.' },
      { label: 'F', text: "He kept going until he'd found one with the perfect flavour." },
      { label: 'G', text: "That didn't stop him aiming high though." },
      { label: 'H', text: 'He is expecting to be quite nervous.' },
    ],
    questions: [
      { id: 16, answer: 'G' },
      { id: 17, answer: 'C' },
      { id: 18, answer: 'E' },
      { id: 19, answer: 'A' },
      { id: 20, answer: 'F' },
    ],
  },
  part5: {
    title: 'Robot staff',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "A restaurant in a small town in the UK has just got a new employee. But rather than being the usual helpful, friendly person you (21) ........................ working in a restaurant, this employee is a robot!\n",
      "Katie Jones, the restaurant's owner, explains why she wanted to have a robot worker. She says it was (22) ........................ due to how hard it is to get new staff from the local area. She also thought it might (23) ........................ new customers. And indeed, she has had bookings from large (24) ........................ of people who heard about the robot and wanted to come and see it for themselves! The robot's job is to collect food from the kitchen and take it to the tables, which it does well. However, for things like taking orders and (25) ........................ with problems, human waiters are still the best (26) ........................, Katie admits!",
    ],
    questions: [
      { id: 21, options: { A: 'understand', B: 'imagine', C: 'believe', D: 'guess' }, answer: 'B' },
      { id: 22, options: { A: 'nearly', B: 'fairly', C: 'hardly', D: 'partly' }, answer: 'D' },
      { id: 23, options: { A: 'attend', B: 'attract', C: 'accept', D: 'allow' }, answer: 'B' },
      { id: 24, options: { A: 'totals', B: 'figures', C: 'levels', D: 'numbers' }, answer: 'D' },
      { id: 25, options: { A: 'dealing', B: 'finishing', C: 'answering', D: 'solving' }, answer: 'A' },
      { id: 26, options: { A: 'preparation', B: 'result', C: 'choice', D: 'advantage' }, answer: 'C' },
    ],
  },
  part6: {
    title: 'My blog',
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      "Welcome to my blog! This week I want to tell you about a photography course I joined recently. (27) ........................ begin with, the course is held every weekend in my local college, and there are only six of (28) ........................ who go. This means that Mark, our teacher, has quite (29) ........................ bit of time to help everyone.\n",
      "Last week, we took weather photos. It was much harder (30) ........................ it sounds! Some people took pictures of clouds, and one person took a beautiful one of leaves that (31) ........................ fallen onto the ground. Mark is arranging to put on exhibition of our photos in the library soon, (32) ........................ gives everyone a goal to work towards. I think it'll be great and we're all really looking forward to it.",
    ],
    questions: [
      { id: 27, answer: 'To' },
      { id: 28, answer: 'us' },
      { id: 29, answer: 'a' },
      { id: 30, answer: 'than' },
      { id: 31, answer: 'had' },
      { id: 32, answer: 'which' },
    ],
  },
}

// B1 Preliminary for Schools Trainer 2 (2024) · Trainer 2 阅读
// PET Trainer 2 Test 4 Reading 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 4 完整套卷（无 Training 页）· 书页 112–121（PDF 页 113–122），题目文字已对照页面渲染图核对
// 答案来源：书内 Practice Test Key（书页 221 / PDF 页 222），逐题核对
// 注意：Part 4 的 passage_segments 段界即书中挖空位（6 段，末段为最后一个挖空之后的正文，
//       渲染器只在有对应题号的段后插入挖空芯片）；各挖空位置已对照书页版面图（PDF p119）核对。

const TRAINER2_TEST_4_READING = {
  id: 'pet-trainer2-4-reading',
  title: 'PET Trainer 2 · Test 4 Reading',
  source: {
    file: 'PET Trainer2/PET Trainer2 电子版.pdf',
    collection: 'PET Trainer 2',
    test: 4,
    pages: '书页 112–121',
    answerSource: '书内 Practice Test Keys（书页 221）',
    verified: false,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Debbie',
        to: 'Hana',
        content: "Hana,\nI have to take pictures for a photography competition. The topic is 'family fun'. I'm wondering if the beach is a good place to try. I'd love your opinion as you take brilliant photos!\nDebbie",
        options: {
          A: 'Debbie suggests Hana should take part in a photography competition.',
          B: 'Debbie needs Hana to accompany her on a trip to get some creative ideas.',
          C: "Debbie wants Hana's advice on how suitable a location is for taking photos.",
        },
        answer: 'C',
      },
      {
        id: 2,
        type: 'text',
        from: 'Mr Robson',
        to: 'All students',
        content: "I have everyone's signed permission forms now, thanks. It's important you and your parents attend Friday's information session. There'll be items to borrow, like torches if needed.\nMr Robson",
        options: {
          A: 'bring their camping equipment in on Friday.',
          B: 'make sure they are available to attend an event.',
          C: 'ask their parents to return a completed document.',
        },
        answer: 'B',
      },
      {
        id: 3,
        type: 'notice',
        content: 'Library members\nThanks to everyone who completed the questionnaire about our services. The results will be on the website tomorrow.',
        options: {
          A: 'details of when any changes suggested in the survey will be made',
          B: 'an explanation of why members were asked to do the survey',
          C: 'information on where to see the views given in the survey',
        },
        answer: 'C',
      },
      {
        id: 4,
        type: 'text',
        from: 'Billy',
        to: 'Liam',
        content: "Liam,\nI'm queuing at the café. It's taking ages. Everyone wants ice cream! If I reach the front before you arrive, shall I order something? I'll send a picture of the menu if so!\nBilly",
        options: {
          A: 'Billy can let Liam know what food is available.',
          B: 'Billy thinks the café will run out of certain items.',
          C: "Billy is annoyed that Liam hasn't arrived at the café yet.",
        },
        answer: 'A',
      },
      {
        id: 5,
        type: 'notice',
        content: 'Audiences\nNo entry to the hall until the interval once concert starts.\nCheck tickets carefully for seat numbers.\nHall staff',
        options: {
          A: 'Staff will advise them which seats are available to sit in.',
          B: "When leaving the hall for the interval, they mustn't forget their tickets.",
          C: 'If they arrive late, they need to wait before entering the hall.',
        },
        answer: 'C',
      },
    ],
  },
  part2: {
    title: 'Websites about animals',
    instructions: 'The young people below are all interested in finding a website about animals. On the opposite page there are descriptions of eight websites about animals. Decide which website would be the most suitable for the young people below.',
    people: [
      { label: '6', name: 'Nessa', text: "Nessa likes finding out about rare animals people don't often see, and she'd love the chance to watch some of them online. She'd like to play fun games too." },
      { label: '7', name: 'Bradley', text: "Bradley wants to know about different projects to help animals worldwide. He's hoping to find out about how to support animals where he lives, and to understand how nature programmes film the animals they follow." },
      { label: '8', name: 'Sofia', text: "Sofia wants to read about animals that help humans. She'd also love to learn about a job where people protect different species and is interested in organising a nature club in her area." },
      { label: '9', name: 'Ishaan', text: 'Ishaan wants to know what animals he can see in his garden. He also needs information for a school project about how animals survive in difficult conditions and would like some photos to include.' },
      { label: '10', name: 'Fatima', text: 'Fatima hopes to learn about how climate change affects wildlife, and what happened to animals that no longer exist. She also thinks communicating with other young nature-lovers around the world would be good.' },
    ],
    options: [
      { label: 'A', name: 'Shared Planet', text: "Follow the daily life of a researcher with interactive games – make decisions that save elephants and tigers! Although it's fun, there's a serious side – you'll discover important work experts do in real life. There's advice about setting up a local wildlife group, and articles with true stories about people being rescued by dolphins!" },
      { label: 'B', name: 'Discovery Zone', text: "Animals survive in nearly every area of our planet. Find out about those living in the highest mountains, the hottest deserts and the coldest oceans. You can watch videos sent in by young people, showing animals they have filmed out and about in local parks – you're sure to see something new!" },
      { label: 'C', name: 'All About Animals', text: "Our site's perfect for nature-lovers. Read an article about how a professional cameraman records videos of unusual animals, and see updates from international organisations on work to save creatures in danger. Feel inspired? Get ideas for things you can do, from making animal feeders for your garden to noting insect numbers." },
      { label: 'D', name: 'Animal Centre', text: "Learn how global warming is leading to decreasing numbers in some species and see pictures from this year's Nature Photography competition. As well as working dogs that help farmers find lost sheep, there's a film of the competition winner taking pictures of whales in Antarctica's icy seas." },
      { label: 'E', name: 'World of Wildlife', text: "Learn about wildlife you won't find in your back garden and find sections on species which are not very common, including those in danger of disappearing. With links to live cameras, you could spot some for yourself! Report what you've seen to directly help scientists with their work. With exciting puzzles and quizzes, there's lots to enjoy." },
      { label: 'F', name: 'Amazing Animals', text: "Discover incredible wildlife by reading reports from international scientists working in the Arctic. Together with pictures to download and film clips to watch, you'll learn what makes it possible for creatures to live in such a challenging location. But you'll find there's plenty to see closer to home, with tips on identifying wildlife where you live." },
      { label: 'G', name: 'Incredible Nature', text: "From huge dinosaurs to tiny insects, our planet is home to incredible animals. You'll learn how researchers are discovering new species, and what they do to make sure they are protected. You can follow links to documentaries and programmes about various animals – a great source of information." },
      { label: 'H', name: 'Wildfacts', text: "Millions of years ago, huge numbers of species disappeared from the planet. Find out why and discover the effect that rising temperatures are having on animals. There's a chat room, so you can enjoy sharing ideas with young people of all nationalities." },
    ],
    questions: [
      { id: 6, person: 'Nessa', answer: 'E' },
      { id: 7, person: 'Bradley', answer: 'C' },
      { id: 8, person: 'Sofia', answer: 'A' },
      { id: 9, person: 'Ishaan', answer: 'F' },
      { id: 10, person: 'Fatima', answer: 'H' },
    ],
  },
  part3: {
    title: 'My hobby: cycling',
    author: 'Zack Matthers',
    instructions: 'For each question, choose the correct answer.',
    passage: "All my family are into sport; in fact, my older brother is an excellent runner. When he started going out on training runs, I accompanied him on my bike because I knew I couldn't run as fast as him! When he went away to college, I missed my cycle rides, so Dad suggested I joined a cycle club. The only one nearby was the Three Hills cycle club. His friend's son had been a member once and enjoyed it, so that's what I did!\nI went and signed up, and was invited on a group cycle ride. Because it was my first time, I was given a special jacket and shorts to wear, which was useful. I wasn't sure what to expect; I'd thought everyone would be quicker than me, but everything was fine, and I managed to stay near the front! Because there were different abilities in the group, we kept stopping for breaks. I didn't mind, because it meant I could chat to the leader, although I was happy to keep going! She knew someone in the national cycle team, and it was interesting hearing about his experiences.\nThat was six months ago, and I've been on various group rides since then, and some two-day trips. They're fun, and exploring fantastic scenery is a bonus. The next ride's taking place in a city. We're careful on roads, and there's always a safety talk before we set off, plus we can deal with flat tyres and things. But we'll still need to pay attention in heavy traffic – it'll be fine – it's just not something I'm familiar with. I'm excited about trying out the bike I got recently. I've not had time yet.\nFor anyone new to cycling, I'd say try your local club for reasonable second-hand bikes as you can spend loads on brand new ones. There's also information online from experts on the latest equipment, but I've found the best thing is to just ride; but don't push yourself too hard. You're supposed to be having fun, so if you feel like stopping for a bit, then do. And if you pack a snack, you'll have more energy to enjoy yourself!",
    questions: [
      {
        id: 11,
        text: 'Why did Zack decide to join a cycle club?',
        options: { A: 'He wanted to improve his cycling speed.', B: 'He knew other people in the club at the time.', C: 'He realised he preferred cycling to doing another sport.', D: 'He wanted the opportunity to continue doing an activity.' },
        answer: 'D',
      },
      {
        id: 12,
        text: 'When Zack did his first cycle ride with the club, he was',
        options: { A: 'surprised by how well he did compared to the others.', B: "pleased he'd bought the right cycling clothes.", C: 'relieved at how many times they stopped for a rest.', D: 'excited to be in a group with a well-known cyclist.' },
        answer: 'A',
      },
      {
        id: 13,
        text: 'What is Zack looking forward to doing on the club trip?',
        options: { A: 'cycling in some beautiful countryside', B: 'using a new bicycle', C: 'learning some basic repairs', D: 'practising riding in busy places' },
        answer: 'B',
      },
      {
        id: 14,
        text: 'What advice does Zack have for people just starting cycling?',
        options: { A: 'Keep going, no matter how tired you feel.', B: 'Spend money on the best bike you can.', C: 'Prepare food to take with you on rides.', D: 'Watch professional cyclists for tips on technique.' },
        answer: 'C',
      },
      {
        id: 15,
        text: 'What would Zack write in a letter to his grandparents?',
        options: {
          A: "I love the whole-day rides my cycle club organises. If we could do ones that lasted even longer, I'd be the first to sign up!",
          B: "I like my club because I'm always cycling with people of similar levels. It means no one gets left behind.",
          C: "I'm so glad I chose Three Hills, rather than choosing a closer club. It's definitely the right one for me.",
          D: "Don't worry about me – every time we go on a ride, someone from the club reminds us what we need to do to stay safe.",
        },
        answer: 'D',
      },
    ],
  },
  part4: {
    title: 'Playing board games',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      "If you think about games people enjoy playing, you'd probably say video games, or sports like volleyball. But many people love playing board games. There are different reasons for this. For a start, board games can usually be enjoyed by anyone who happens to be home at the time.",
      "That's because although people might have a favourite one, there is usually something for various generations to enjoy in almost any board game!\nYou might think that video games being so hugely popular would make board games less so; they might seem boring compared to the options available on computer.",
      "Although this may seem rather surprising, the number of people playing video games has helped make game-playing in general a greater part of our lives. This has encouraged people to explore different games for their entertainment.\nThere are many reasons to play board games, including certain health benefits. For example, playing board games reduces the time people spend looking at screens.",
      "It can also cause particular issues such as reducing how well people can concentrate. And by not looking at laptops or phones, families spend more quality time together, some even organising regular 'games nights'.\nStudies show playing games can also have the result of making events like parties or work training activities easier for shy people. They can find it simpler to get to know each other when they are involved in a game.",
      "As everyone is concentrating on the same thing, rather than trying to make conversation, it is less stressful.\nGames can help with confidence in other ways too. There are many decisions to be made during a game.",
      "The longer we play, the more likely we are to develop a good plan for winning. With every successful turn, we see our plan is working and our confidence grows.\nSo what are you waiting for? Go and play a board game!",
    ],
    options: [
      { label: 'A', text: 'We know doing so affects the ability to sleep.' },
      { label: 'B', text: 'Some people, therefore, are naturally better than others.' },
      { label: 'C', text: 'Actually, the opposite is true.' },
      { label: 'D', text: 'Also, they are often suitable for different ages to play together.' },
      { label: 'E', text: 'Board games are easy to take to different places too.' },
      { label: 'F', text: 'The better someone is at making them, the more successful they will be.' },
      { label: 'G', text: 'Because board games have rules, such issues are avoided.' },
      { label: 'H', text: 'It prevents people from running out of things to say in these situations.' },
    ],
    questions: [
      { id: 16, answer: 'D' },
      { id: 17, answer: 'C' },
      { id: 18, answer: 'A' },
      { id: 19, answer: 'H' },
      { id: 20, answer: 'F' },
    ],
  },
  part5: {
    title: 'The Batu Caves',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "If you visit Malaysia's capital city, Kuala Lumpur, you really should visit the Batu Caves. They are only about 11 kilometres from the city and are easy to (21) ........................ by bus, train or taxi. There are plenty of transport (22) ........................ available.\n",
      "At the entrance, there's a 43-metre high gold statue. Just past this, visitors will see 272 stairs to climb up to Temple Cave, one of the most popular tourist destinations in the world. In 2018, these stairs were painted bright colours and they now provide (23) ........................ for fantastic photos. Most people climb the stairs in around 15 minutes. The climate is (24) ........................ hot and humid however, so it is a very (25) ........................ idea to arrive early, when is it cooler. This also means you can avoid the worst of the crowds. Whenever you visit though, be (26) ........................ for the groups of monkeys which live there. They sometimes run off with visitors' phones or bags!\n",
    ],
    questions: [
      { id: 21, options: { A: 'reach', B: 'travel', C: 'arrive', D: 'connect' }, answer: 'A' },
      { id: 22, options: { A: 'enquiries', B: 'options', C: 'ways', D: 'decisions' }, answer: 'B' },
      { id: 23, options: { A: 'appearances', B: 'descriptions', C: 'times', D: 'opportunities' }, answer: 'D' },
      { id: 24, options: { A: 'extremely', B: 'totally', C: 'exactly', D: 'completely' }, answer: 'A' },
      { id: 25, options: { A: 'serious', B: 'realistic', C: 'sensible', D: 'essential' }, answer: 'C' },
      { id: 26, options: { A: 'advised', B: 'prepared', C: 'planned', D: 'organised' }, answer: 'B' },
    ],
  },
  part6: {
    title: 'Review: the Maple Café',
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      "Last week, my friends and I visited the Maple Café which opened recently. Cafés are places teenagers like to visit, and that is (27) ........................ I decided to write a review about it! The café is in a nice location, next to the river. It is in a building that (28) ........................ to be a bike shop, and the new owners put some old bikes on the walls, which is really unusual!\n",
      "There is plenty of space inside, or (29) ........................ you prefer, there are tables outside, too. When we visited, there was a special offer to celebrate the café opening. We (30) ........................ given a free slice of chocolate cake and we all agreed that the Maple Café chocolate cake was better than anything we (31) ........................ ever tried before! There are the normal hot and cold drinks you would expect to see, and (32) ........................ prices are good. I would certainly recommend that everyone visits!\n",
    ],
    questions: [
      { id: 27, answer: 'why' },
      { id: 28, answer: 'used' },
      { id: 29, answer: 'if' },
      { id: 30, answer: 'were' },
      { id: 31, answer: 'had' },
      { id: 32, answer: 'the' },
    ],
  },
}

// PET Trainer 2 Test 5 Reading 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 2 (2024) · Test 5（完整套卷，无 Training 页）
// 书页 130–139（PDF 页 131–140），题目文字已逐页对照页面渲染图核对
// 答案来源：书内 Practice Test Key · Test 5（书页 222 / PDF 页 223），逐题核对
// 注意：Part 4 的 passage_segments 段界即书中挖空位（16)-(20)，共 6 段：
//       前 5 段各对齐一个挖空（渲染器在段后插入挖空芯片），第 6 段为最后一个挖空之后的剩余正文；
//       各挖空位置已对照书页版面（PDF p137）核对。

const TRAINER2_TEST_5_READING = {
  id: 'pet-trainer2-5-reading',
  title: 'PET Trainer 2 · Test 5 Reading',
  source: {
    file: 'PET Trainer2/PET Trainer2 电子版.pdf',
    collection: 'PET Trainer 2',
    test: 5,
    pages: '书页 130–139',
    answerSource: '书内 Practice Test Keys（书页 222）',
    verified: false,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Mrs Carston',
        content: "Add your trip reports to the online folder by Wednesday. Include any good photos you took. I'm making a presentation to show parents! See me if you have any problems.",
        options: {
          A: 'they want to attend an event on Wednesday.',
          B: 'they need pictures to add to their work.',
          C: 'they require help uploading some files.',
        },
        answer: 'C',
      },
      {
        id: 2,
        type: 'text',
        from: 'Marcus',
        to: 'Lenny',
        content: "It'll be fun having you to stay! I found an extra duvet, so forget what I said about bringing one. You'll hopefully love the snacks I've made for while the film's on. Hope it's not scary!\nMarcus",
        options: {
          A: 'inform him about a change to an arrangement.',
          B: 'give the reasons for a choice of refreshments.',
          C: 'check that the selected film is acceptable.',
        },
        answer: 'A',
      },
      {
        id: 3,
        type: 'notice',
        content: 'Cinema Club\nNo fee to join.\nGet money off tickets, plus free snacks of your choice!\nClick here for further details.',
        options: {
          A: 'download tickets for a film.',
          B: 'receive information about a special offer.',
          C: 'get a discount on the registration cost.',
        },
        answer: 'B',
      },
      {
        id: 4,
        type: 'text',
        from: 'Sam',
        to: 'Jamie',
        content: "Mum said you've taken my bike because of your flat tyre. Don't forget, I need it to get to band practice straight after dinner. I'll help you fix yours tomorrow if you like!\nSam",
        options: {
          A: 'Sam is complaining that Jamie took something without asking.',
          B: 'Sam is making sure Jamie knows when he has to return something.',
          C: 'Sam is reminding Jamie that something has to be repaired.',
        },
        answer: 'B',
      },
      {
        id: 5,
        type: 'text',
        from: 'Grandma',
        to: 'Amanda',
        content: "I want to get a book called Silver Rose for your mum. Can you look on the bookshelf to make sure she hasn't got it? But don't let her know – it's our secret!\nGrandma",
        options: {
          A: "check that Amanda hasn't already bought a particular present.",
          B: 'suggest something that Amanda can buy as a surprise.',
          C: 'see if a present is a suitable choice for a birthday.',
        },
        answer: 'C',
      },
    ],
  },
  part2: {
    title: 'City Tours',
    instructions: 'The young people below all want to go on a tour of a city. On the opposite page there is information about eight city tours. Decide which city tour would be the most suitable for the young people below.',
    people: [
      { label: '6', name: 'Matthew', text: 'Matthew wants to learn about the history of the city in a fun way, on an easy walk around the city with a guide. His family would like to buy interesting souvenirs during the tour.' },
      { label: '7', name: 'Jaya', text: "Jaya wants to do a boat trip to see the sights. She'd also like to try the special desserts that are made in the area and get to meet the people who make them." },
      { label: '8', name: 'Ari', text: "Ari hopes to see some art during the day, and his family want ideas for somewhere good to have lunch. They'd also love advice about where to listen to some live music." },
      { label: '9', name: 'Hua', text: "Hua and her family want to spend the whole day exploring famous museums, seeing the most important items in each place. They'd like to explore parts of museums tourists don't usually see." },
      { label: '10', name: 'Filip', text: "Filip and his family hope to join a small tour, where they are driven around the city. He'd like this to include some of the locations described in popular stories that were set there." },
    ],
    options: [
      { label: 'A', name: 'Fanton Tours', text: "Come and learn about the history of shipping in the area. Our guides will show you around the harbour, and if you're lucky, you'll be there when the fishing boats come in – choose something for lunch! Booking essential as each guide can only take a maximum of ten." },
      { label: 'B', name: 'Excel Tours', text: "You can't leave the city without trying its famous lemon cream cakes! Travel by river to one of the oldest – and smallest – family kitchens, where they still use the same 100-year-old secret recipe. You can ask the chefs for it, but they won't tell!" },
      { label: 'C', name: "Sally's Tours", text: "For a different experience, join our daily minibus tours. You'll have the chance to get out and explore tiny streets or cafés you'll recognise from some well-known novels, then relax in air-conditioned comfort as guides take you to the next stop, showing you beautiful parts of the city. Groups limited to five." },
      { label: 'D', name: 'Newton Guides', text: "See the most famous places in the city, from the concert hall where the world's best musicians have performed, to mansions belonging to film stars and famous writers! We'll finish the tour at the historic Creative Quarter, where local artists sell their work. You can even watch them painting in their studios." },
      { label: 'E', name: 'City Explorer', text: "Most tourists head to the shops in the city centre, but there's more to see, like the latest attraction – a sculpture trail created especially by local artists. As you walk around the various locations, our guides can give suggestions on the best places for traditional food or where to go for fun entertainment, including live bands." },
      { label: 'F', name: "Billy's Tours", text: "Whether you choose a longer bus or boat tour, or a shorter gentle tour on foot, our guides bring the past to life with amusing stories. All river tours include lunch, and walking tours include a stop in the central market, where you'll find wonderful items made here in the city." },
      { label: 'G', name: 'Big Day Out', text: "Discover why the city is a centre for culture and creativity. Join your guides at City Museum, with its fun interactive games, then take a short walk through the park for coffee and cake by the river. You'll explore the old city with its little galleries and cafés that only locals know about!" },
      { label: 'H', name: 'GK Tours', text: "With GK tours, jump on and off our buses from early morning until evening. Tickets give access to exhibits which aren't on public display in some attractions and also entry to a 4D cinema. There are routes to all main museums and art galleries, with lists of what you mustn't miss." },
    ],
    questions: [
      { id: 6, person: 'Matthew', answer: 'F' },
      { id: 7, person: 'Jaya', answer: 'B' },
      { id: 8, person: 'Ari', answer: 'E' },
      { id: 9, person: 'Hua', answer: 'H' },
      { id: 10, person: 'Filip', answer: 'C' },
    ],
  },
  part3: {
    title: 'Class trip to Harston Forest',
    author: 'Ellie Simpson',
    instructions: 'For each question, choose the correct answer.',
    passage: "Last week, my class went to Harston Forest as part of our science course. We're lucky because we've done a few trips to places this year. Our teacher, Mr Jones, told us to find out about the wildlife we might see. Because the books in our library aren't very modern, we accessed online nature sites instead, with links Mr Jones gave us. He also said to consider some questions to ask at the visitor centre, as guides were giving a talk and could provide answers. I didn't have any, but other students did.\nThen we went to the forest. On a previous family visit, my dad forgot a map, and I remember how relieved we were to find the car again! This time was completely different, as we were just following the guides. We closed our eyes and listened for birds. At first, everything was silent. But soon, we heard birds singing. I couldn't believe the range of sounds, from really quiet to pretty loud! Our guides knew what each one was, and before long I did too, which was great – everything sounded so similar before.\nOur teacher put us into groups, ready to do an experiment, and luckily, I was with my friends. We counted different plant species in one hour. That might seem like ages; we were really hurrying by the end, though! Being careful not to stand on any plants, we measured a five-metre square on the ground. We put stones down so we knew where to work, and recorded the plants inside that area. We used a list with plant pictures on it – the photos weren't brilliant, but we managed well.\nAfter a picnic – we avoided barbecues as they could cause fires and damage the forest – we were shown holes in trees. We had to guess which animals make their homes inside, and how they survive hot and cold weather. It was a lot to remember, but of course, we were only looking at local species – if you're studying different forests, there'd be hundreds of them!\nMr Jones has asked us to create displays to share what we learned with our families. They should be very interesting!",
    questions: [
      {
        id: 11,
        text: 'What did Ellie do before the day of the trip?',
        options: { A: 'got information from a website', B: 'read some up-to-date textbooks', C: 'listened to an expert who knew the area', D: 'thought about what to ask when she got there' },
        answer: 'A',
      },
      {
        id: 12,
        text: 'How did Ellie feel about being in the forest?',
        options: { A: 'anxious about getting lost', B: 'surprised at how little noise there was', C: 'excited about visiting somewhere new', D: 'pleased to be able to identify some wildlife' },
        answer: 'D',
      },
      {
        id: 13,
        text: 'What did Ellie find difficult about the experiment?',
        options: { A: 'not damaging the plants', B: 'completing the task in time', C: 'working out which area to search', D: 'taking clear enough pictures' },
        answer: 'B',
      },
      {
        id: 14,
        text: 'In the afternoon, the students did an activity to',
        options: { A: 'show them how to protect forests.', B: 'help them learn about different sorts of forests.', C: 'teach them about the places creatures live in.', D: 'remind them about problems caused by climate change.' },
        answer: 'C',
      },
      {
        id: 15,
        text: 'What would Ellie say to her grandparents about the trip?',
        options: {
          A: "We all enjoyed ourselves. It was the first time our science class has had a day away from school!",
          B: "It was fun having the chance to cook outside in the forest – I didn't know we were going to do that!",
          C: "I was pleased that we could decide who we wanted to be in a group with for the activity to count plants.",
          D: "I've told mum all about the trip of course, but she'll like seeing my presentation on it.",
        },
        answer: 'D',
      },
    ],
  },
  part4: {
    title: 'Zara Rutherford: young pilot',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      "Zara Rutherford is currently the youngest female pilot to fly around the world alone. In 2022, when she was 19, Zara completed her 52,000-kilometre flight in a microlight, a type of plane that is small but very fast.",
      "It was one that took her through five continents and 31 countries. Before her amazing achievement, the record was held by Shaesta Waiz. Shaesta, an Afghan-born American, completed her flight at the age of 30.\nZara's parents are both pilots and took her up in planes from an early age. It wasn't long before she began learning to fly and eventually started wondering about doing a round-the-world trip. She knew it wouldn't be easy.",
      "It also costs a lot and can be dangerous. When Zara was finishing school, however, she decided the time was right to attempt the journey.\nAfter completing her preparations, she started from Belgium, flying west over countries including the UK and Russia. She then flew to southeast Asia, India and the Middle East, before returning to Belgium. One of the biggest issues was that on a round-the-world flight, conditions change depending on location.",
      "The mild climate in Belgium hadn't provided opportunities to practise in different weather. The freezing temperatures of Alaska and Russia and the sandstorms in the Middle East were huge challenges.",
      "In addition, she sometimes had to get her plane repaired, or collect documents to give her permission to cross certain countries.\nNevertheless, she completed her journey and felt extremely proud of herself. She is keen for other young women to see her achievement, as there are not enough girls and women looking to go into subjects like engineering and technology. There are also very few female pilots.",
      "After all, when people see what she has done, they might be inspired to follow her!",
    ],
    options: [
      { label: 'A', text: 'Her achievement could help change this in future.' },
      { label: 'B', text: 'This made it perfect for the huge journey she went on.' },
      { label: 'C', text: 'It can therefore change quickly between hot and cold.' },
      { label: 'D', text: 'However, she had done most of her training in Belgium.' },
      { label: 'E', text: 'They helped her prepare well for the trip.' },
      { label: 'F', text: 'These conditions meant she often had to land and wait for longer than planned.' },
      { label: 'G', text: 'In addition, there are other reasons for this too.' },
      { label: 'H', text: 'For one thing, organising everything is very complicated.' },
    ],
    questions: [
      { id: 16, answer: 'B' },
      { id: 17, answer: 'H' },
      { id: 18, answer: 'C' },
      { id: 19, answer: 'F' },
      { id: 20, answer: 'A' },
    ],
  },
  part5: {
    title: 'Henry Ford',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "Henry Ford was an American engineer. He is best (21) ........................ for making cars. He started producing them in 1896, and (22) ........................ up the Ford Motor Company in 1903. The first car he made was called the Ford Model T. At the time, only the very wealthy could afford a vehicle of any sort.\n",
      "Ford's (23) ........................ was to change that, so he made his Model T design as simple as possible. In 1908, a Model T cost $850. While this was a lot for (24) ........................ people, the Model T cars were still (25) ........................ popular. In fact, Ford was (26) ........................ it difficult to make enough of them, so he developed a new, quicker system to use in his factory. Cars moved slowly along a line of people. Workers added the same part to each car that passed by, finishing with a completed car at the end.",
    ],
    questions: [
      { id: 21, options: { A: 'understood', B: 'known', C: 'accepted', D: 'heard' }, answer: 'B' },
      { id: 22, options: { A: 'set', B: 'made', C: 'put', D: 'ended' }, answer: 'A' },
      { id: 23, options: { A: 'reason', B: 'ability', C: 'custom', D: 'goal' }, answer: 'D' },
      { id: 24, options: { A: 'familiar', B: 'usual', C: 'ordinary', D: 'basic' }, answer: 'C' },
      { id: 25, options: { A: 'incredibly', B: 'nearly', C: 'completely', D: 'absolutely' }, answer: 'A' },
      { id: 26, options: { A: 'realising', B: 'admitting', C: 'getting', D: 'finding' }, answer: 'D' },
    ],
  },
  part6: {
    title: 'Running Blog',
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      "Hi and welcome to my blog! It's all about my hobby, (27) ........................ is running! I joined a running club a few months ago. Since then, I (28) ........................ already been on lots of longer runs with the group. As well as helping us improve (29) ........................ running technique, the coaches also give lots of really useful information about different types of kit. Good shoes are important, but (30) ........................ they can cost a lot of money, it's useful to get advice before you buy any.\n",
      "Last session, we heard about a big race in a few weeks' time. I am wondering whether or (31) ........................ to enter. There's plenty of time for me to improve my speed before the race. In fact, I (32) ........................ given a running plan last week which should help me get quicker. It will be good experience, even if I come last!",
    ],
    questions: [
      { id: 27, answer: 'which' },
      { id: 28, answer: 'have' },
      { id: 29, answer: 'our' },
      { id: 30, answer: 'as' },
      { id: 31, answer: 'not' },
      { id: 32, answer: 'was' },
    ],
  },
}

// PET Trainer 2 Test 6 Reading 数据（自动转录，待人工核对）
// 题目来源：《B1 Preliminary for Schools Trainer 2》(2024, 带答案版) Test 6 完整套卷
// Reading · 书页 148–157（PDF p149–p158），题目文字已对照页面渲染图逐页核对
// 答案来源：书内 Practice Test Keys Test 6（书页 223 / PDF p224），逐题核对
// Part 4 挖空位已对照书页 154（PDF p155）版面图确认，passage_segments 共 6 段，
// 前 5 段各自对齐一个空缺（16–20），第 6 段为最后一个挖空之后的正文。

const TRAINER2_TEST_6_READING = {
  id: 'pet-trainer2-6-reading',
  title: 'PET Trainer 2 · Test 6 Reading',
  source: {
    file: 'PET Trainer2/PET Trainer2 电子版.pdf',
    collection: 'PET Trainer 2',
    test: 6,
    pages: '书页 148–157',
    answerSource: "书内 Practice Test Keys（书页 223）",
    verified: false,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'notice',
        content: "Visitors must not touch the displays.\nPay particular attention if carrying backpacks.\nExhibition items are valuable and easily damaged.\n\nThis notice tells people ...",
        options: {
          A: 'how they must behave while at the exhibition.',
          B: 'why some items have had to be removed.',
          C: 'which bags are not permitted near the museum objects.',
        },
        answer: 'A',
      },
      {
        id: 2,
        type: 'text',
        from: 'Shelly',
        to: 'Brianna',
        content: "I've decided to get the book you mentioned. What was the name again? I know you'd lend me your copy, but I'm planning to take it on holiday – I'd hate to lose it!\nShelly",
        options: {
          A: "Shelly hopes she can borrow a book of Brianna's to read on holiday.",
          B: "Shelly wants to get Brianna's ideas about choosing a good book to read.",
          C: 'Shelly needs some information about a book Brianna has recommended.',
        },
        answer: 'C',
      },
      {
        id: 3,
        type: 'text',
        from: 'Dad',
        to: 'Lily',
        content: "Your football kit is still on the table! I don't know if today's match was cancelled, but I'll save it in case it wasn't. I'll leave it at reception on my way to the office later.\nDad",
        options: {
          A: "Lily's dad thinks that a sports event is no longer taking place.",
          B: "Lily's dad would like to know whether or not she needs some sports clothes.",
          C: "Lily's dad will bring something she might need for a school sports event.",
        },
        answer: 'C',
      },
      {
        id: 4,
        type: 'text',
        from: 'Mr Turner',
        to: 'Violin Group',
        content: "We're starting at 1.30 not 1.15, but finishing at the normal time – you won't be late for classes. I've got suggestions for music to perform at the end-of-term concert.\nMr Turner",
        options: {
          A: 'The practice session for violin students will be a bit shorter tomorrow.',
          B: "Violin students are told why they mustn't be late for tomorrow's practice.",
          C: 'Mr Turner wants violin students to bring ideas about suitable concert music tomorrow.',
        },
        answer: 'A',
      },
      {
        id: 5,
        type: 'text',
        from: 'Mum',
        to: 'Sally',
        content: "I'm working late. I'll bring something home for dinner – maybe chicken, or salmon? I'm happy either way – it's up to you, just let me know. If you're hungry before then, remember there's fruit!\nMum\n\nIn her note, Sally's mum is ...",
        options: {
          A: "explaining why she hasn't left Sally anything to eat.",
          B: 'asking Sally to make a final decision about what to eat.',
          C: 'reminding Sally that they are going to eat out later that evening.',
        },
        answer: 'B',
      },
    ],
  },
  part2: {
    title: 'City skateboarding parks',
    instructions: 'The young people below all want to visit a skateboarding park.\nOn the opposite page there are descriptions of eight skateboarding parks.\nDecide which skateboarding park would be the most suitable for the young people below.',
    people: [
      { label: '6', name: 'Heike', text: "Heike hopes to have a private skateboarding lesson and can only go later in the day. She needs to buy a new skateboard but doesn't want to spend too much." },
      { label: '7', name: 'Anton', text: "Anton wants to find a skateboard park that's free to use. He's interested in how the place he visits was designed and wants to buy snacks there." },
      { label: '8', name: 'Camille', text: "Camille is an experienced skateboarder and hopes to try some challenging runs. She wants to visit a park when it's not too busy, and her parents want to see her skateboarding." },
      { label: '9', name: 'Jiang', text: "Jiang needs to hire everything for a day's skating. He's hoping to get skateboarding tips from other skateboarders, and to buy some skateboarding clothes while he's at the park." },
      { label: '10', name: 'Akari', text: "Akari knows some skateboard parks have live music, which she'd enjoy. She wants advice about the latest boards and the chance to see a skateboarding competition." },
    ],
    options: [
      { label: 'A', name: 'Board Central', text: "Whether you're new to skateboarding or want expert tips on technique, you can book a lesson with one of the friendly Board Central staff members. You can hire basic skateboards and helmets from the park shop – staff can advise you about what you need before your lesson." },
      { label: 'B', name: 'Station Skate', text: "As well as being expert teachers, staff at Station Skate can answer questions on the newest equipment or clothes. Every afternoon there are great prizes offered, from T-shirts to free snacks for those with the best skills or fastest times – fun whether you're watching or taking part! With bands performing daily, there's a party atmosphere." },
      { label: 'C', name: 'Skate56', text: "Even if you're not a skateboarder, with no entry charge and the music on the park's loudspeakers, Skate56's a popular place to come and watch talented skateboarders. And with refreshments available, stay until late! It was the first in the area; check out the shop's display showing how Skate56 was planned and built." },
      { label: 'D', name: 'Renton Place', text: "Renton Place first became famous when it appeared in a viral music video. It can get busy at weekends because that's when all the best skateboarders arrive to practise for competitions, but you'll find that watching them is a really great way of picking up tips!" },
      { label: 'E', name: 'Barton Hill', text: "Barton Hill is the region's newest skateboard park. With a range of skateboarding equipment on offer for very reasonable prices, there's everything you need for a great day out. You can arrange an individual session with an instructor, and the park's lighting system allows skateboarding well after sunset." },
      { label: 'F', name: 'Stanford Park', text: "Perfect for all abilities, Stanford Park has a safe skateboarding area to learn the basics with a one-to-one lesson, or you can try runs used in national competitions for something more advanced! There are various places to get great views of the action. To avoid the crowds, come earlier in the day when it's quieter." },
      { label: 'G', name: 'Jones Road', text: "Looking at Jones Road today you would never guess its history – it used to be a large car park! Today, it's very popular, with lots of separate areas, including some with very challenging sections, and a café serving great food. There's an entrance charge, but there's plenty to keep you busy!" },
      { label: 'H', name: 'Liv Park', text: "Liv Park is known as the friendliest skateboard park around, and the other skateboarders are happy to teach you new skills. You can borrow equipment for a small hourly charge, and there's a range of the latest designer sweatshirts and caps from skateboarding companies at good prices." },
    ],
    questions: [
      { id: 6, person: 'Heike', answer: 'E' },
      { id: 7, person: 'Anton', answer: 'C' },
      { id: 8, person: 'Camille', answer: 'F' },
      { id: 9, person: 'Jiang', answer: 'H' },
      { id: 10, person: 'Akari', answer: 'B' },
    ],
  },
  part3: {
    title: 'Monika Alson: kart racing driver',
    instructions: 'For each question, choose the correct answer.',
    passage: "I drive karts: small racing cars. I started aged 10, and although that's young, I'd already been in a bike-racing club for two years! Another member was into kart racing, and a conversation with her convinced me to have a go. I persuaded my brother to come along. I thought he'd enjoy it – he'd started at the bike club with me, but got bored. Unfortunately, the same happened with karts. I really loved it though, and even spent hours watching kart videos online!\nSoon, I was asked to enter a competition. It was a big event, with prizes presented by well-known sportspeople. I personally hadn't heard of them, but I was looking forward to taking part. Because I was the youngest competitor there, I was entering for the experience – when I came fourth, I couldn't believe it! Afterwards, there were interviews from sports channels, and I was amazed anyone would want to know so much about me! I got a medal for taking part, but the winner got a huge silver cup!\nKart racing's important in my life, and in my family's. If one of my parents is working, the other always comes to watch me compete. Because I'm still at school, I'm very busy. I can cycle to my race training sessions straight after school and still be home to get my homework done because I live close to the kart training track. Then I get to bed so I have enough sleep before being up early, ready to start again. I'm careful I don't get too tired, which means unfortunately I sometimes have to refuse party invitations from classmates. Hopefully it'll be worth it, but I don't like doing that.\nI've got a big race soon. I'm preparing by continuing the gym sessions I've always done, but with extra strength-building classes. I'm seeing benefits already. All tracks are different, and as the one where the race takes place is six hours' drive away, practising there isn't an option. I've seen videos of people racing there. It's not the same, though. Luckily, my coach knows it well, and even won as a new driver there years ago. Hopefully, I'll do the same!",
    questions: [
      {
        id: 11,
        text: 'Monika decided she wanted to try driving karts after',
        options: { A: 'she watched a film about the sport.', B: 'she talked to a young female driver.', C: 'she got bored with another activity she was doing.', D: 'she saw how much her brother enjoyed the activity.' },
        answer: 'B',
      },
      {
        id: 12,
        text: 'When Monika did her first competition, she felt',
        options: { A: 'excited about meeting some celebrities.', B: 'impressed by the prize she received.', C: 'surprised by the media interest.', D: 'confident that she would win.' },
        answer: 'C',
      },
      {
        id: 13,
        text: 'What does Monika find difficult about her life?',
        options: { A: 'missing social activities with her friends', B: 'feeling exhausted at school after a big race', C: 'having to get up early to practise kart driving', D: 'managing to complete schoolwork on time' },
        answer: 'A',
      },
      {
        id: 14,
        text: "What has been useful preparation for Monika's next race?",
        options: { A: 'studying previous race winners', B: 'starting training with a new coach', C: 'trying some new fitness exercises', D: 'visiting the track where the race takes place' },
        answer: 'C',
      },
      {
        id: 15,
        text: 'What would Monika say in a text to a friend?',
        options: {
          A: 'Sometimes I feel a bit sad because when my parents have to work, it means no one from my family can see me race.',
          B: "I can't believe how lucky I've been – I've always finished in the top three in my races!",
          C: "I'm lucky my parents are happy to spend so long taking me to the practice track. They can't wait until I can drive there myself, though!",
          D: "I'm so pleased that I didn't have the same opinion about kart racing as my brother! It's been such a positive experience for me.",
        },
        answer: 'D',
      },
    ],
  },
  part4: {
    title: 'An incredible holiday',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      "For our last holiday, Mum and I went to South Africa on safari – a tour where you go in a vehicle to see different animals. We started the experience by staying the night in a wooden house, where we met our safari guide, Mandisa. The house was by a lake and I was worried there might be fighting among the animals coming to drink.",
      "Mandisa explained that getting water was usually the most important thing for the animals when they were there. She also explained that although they looked relaxed, each one was always looking out for danger.\nThe next morning, we set off in a big car. There were six seats in the back, and the sides were open, so there were no windows. It made us feel closer to the animals.",
      "Mandisa was great at suggesting what would make good ones! She also taught us all about all the animals in the area.\nEarly in our drive, Mandisa pointed to a springbok. Springboks look like deer. She explained they are very common and are South Africa's national animal.",
      "Later, however, we saw some elephants under trees. After a while, the largest one started staring at us. Mandisa explained that there are certain types of behaviour to watch out for.",
      "She told us that because the elephant wasn't displaying any of the signs of this, we weren't in danger. Having Mandisa there explaining everything was really helpful.\nWe didn't just learn about different animals. There were special plants growing in the area too. Mandisa got us to try the leaves of one, to explain how they tasted of salt.",
      "Mandisa told us that many animals get some of the salt they require from eating plants. All too soon, we had to leave. It was an experience I'll never forget!",
    ],
    options: [
      { label: 'A', text: 'Knowing which one helped us get the best view.' },
      { label: 'B', text: 'Therefore, we realised we had to be patient.' },
      { label: 'C', text: "However, there wasn't and everything seemed very peaceful." },
      { label: 'D', text: 'This is something animals need to stay healthy.' },
      { label: 'E', text: "Despite this, we didn't see any more that day!" },
      { label: 'F', text: 'These can show when an animal is feeling stressed.' },
      { label: 'G', text: 'As a result, animals quickly learn to avoid it.' },
      { label: 'H', text: 'It was also good because it made it easier to take incredible pictures.' },
    ],
    questions: [
      { id: 16, answer: 'C' },
      { id: 17, answer: 'H' },
      { id: 18, answer: 'E' },
      { id: 19, answer: 'F' },
      { id: 20, answer: 'D' },
    ],
  },
  part5: {
    title: 'Spending time outside',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "Many of us spend more time indoors than we do outside. But did you know that being inside too much can have a negative (21) ........................ on our health? There have been a number of scientific studies which have (22) ........................ that being outside is good for us, even if it is just for a short (23) ........................ of time.\n",
      "One of the issues with being inside a lot is that we often sit watching a screen, like a TV or a laptop. Over time, this can damage our eyes. When we walk around in a natural environment like a forest, however, we (24) ........................ looking at objects which are nearby and others which are some (25) ........................ away. This exercises our eye muscles, helping them stay healthy.\n",
      "What's more, scientists claim that looking at green plants can make us feel more creative, as well as (26) ........................ us with the perfect chance to switch off from our busy lives.",
    ],
    questions: [
      { id: 21, options: { A: 'problem', B: 'effect', C: 'condition', D: 'conclusion' }, answer: 'B' },
      { id: 22, options: { A: 'approved', B: 'sorted', C: 'persuaded', D: 'confirmed' }, answer: 'D' },
      { id: 23, options: { A: 'period', B: 'age', C: 'total', D: 'level' }, answer: 'A' },
      { id: 24, options: { A: 'hold', B: 'remain', C: 'stay', D: 'keep' }, answer: 'D' },
      { id: 25, options: { A: 'distance', B: 'length', C: 'amount', D: 'range' }, answer: 'A' },
      { id: 26, options: { A: 'offer', B: 'give', C: 'provide', D: 'deliver' }, answer: 'C' },
    ],
  },
  part6: {
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      "To: Katie\nAbout: Shopping trip!\n\nHi!\nGuess what – I went to that new shopping centre in town this afternoon with Mum! We had a really good time. You should go if you can because I know you (27) ........................ love it.\n",
      "Do you remember my favourite blue shirt, the one with flowers on it? Well, I found another similar one with leaves instead (28) ........................ flowers and I decided to get it. It's really nice! There were (29) ........................ many clothes shops that even I needed to have a rest after a bit. Luckily, there were quite a few really nice cafés for lunch.\n",
      "Then, while Mum (30) ........................ having a coffee, I went into the video game shop and bought a new game (31) ........................ the money I got for my birthday. (32) ........................ don't you come over at the weekend so we can play it together? And we can go shopping too, of course!\nMandy",
    ],
    questions: [
      { id: 27, answer: 'will' },
      { id: 28, answer: 'of' },
      { id: 29, answer: 'so' },
      { id: 30, answer: 'was' },
      { id: 31, answer: 'with' },
      { id: 32, answer: 'Why' },
    ],
  },
}

export const PET_READING_TRAINER2 = [
  TRAINER2_TEST_1_READING,
  TRAINER2_TEST_2_READING,
  TRAINER2_TEST_3_READING,
  TRAINER2_TEST_4_READING,
  TRAINER2_TEST_5_READING,
  TRAINER2_TEST_6_READING,
]

export default PET_READING_TRAINER2
