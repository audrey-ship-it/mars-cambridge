// A2 Key standard version: transcribed parts appear here only after checking
// both the printed question pages and the corresponding answer-key page.
// This is the canonical data for specialty practice and, once the whole paper
// is complete, the full mock. Do not duplicate these questions in page code.
export const ketStandardReadingTests = [
  {
    id: 'ket-standard-1-test1',
    title: '标准版真题 1 · Test 1',
    source: {
      file: 'A2 KET新题型官方真题 1.pdf',
      collection: 'A2 KET 新题型官方真题 1',
      test: 1,
      pages: '8–15',
      answerPage: 84,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'note', from: 'Chloe', to: 'Susie',
          content: 'Susie,\nCan you take your work stuff out of the living room and put it in your room? Liz is coming for coffee.\nChloe',
          question: 'Chloe wants Susie',
          options: { A: 'to clean her room.', B: 'to stop working at home.', C: 'to tidy up the living room.' }, answer: 'C',
        },
        {
          id: 2, type: 'notice',
          content: "STUDENTS!\nCleaners are here every Friday, but please wash up and put things away after you've used the kitchen.\nThank you!",
          question: 'What is this message asking students to do?',
          options: { A: 'help keep the kitchen tidy at all times', B: "let the cleaners know when the kitchen’s free", C: 'stay out of the kitchen when the cleaners are there' }, answer: 'A',
        },
        {
          id: 3, type: 'text', from: 'Anna', to: 'Pete',
          content: "Hi Pete,\nCould you get me from the train station later tonight? I don’t think there’ll be any taxis there. Text me back now!\nAnna",
          question: 'What does Anna want Pete to do?',
          options: { A: 'order a taxi to pick her up from the station', B: 'text her when he gets to the station', C: 'give her a lift from the station' }, answer: 'C',
        },
        {
          id: 4, type: 'notice',
          content: 'NEW STUDENTS\nGo to Reception to collect your course books before seeing your teacher',
          options: { A: 'New students should go to Reception before they collect their books.', B: 'Course books will be available at Reception for students.', C: 'Teachers will meet the new students at Reception.' }, answer: 'B',
        },
        {
          id: 5, type: 'ad',
          content: 'Apartment for rent, Redbridge\nOne double bedroom\nJust been painted, with new kitchen\nyt@ukmail.com',
          options: { A: 'This flat is in a new building.', B: 'This flat is ready to move into.', C: 'This flat is too small for two people.' }, answer: 'B',
        },
        {
          id: 6, type: 'text', from: 'Gemma', to: 'Simon',
          content: 'Simon,\nDon’t forget to bring that book I lent you to school tomorrow. It was so good I want to read it again.\nGemma',
          question: 'Why did Gemma contact Simon?',
          options: { A: 'to tell him about a book she liked', B: 'to ask him to return her book', C: 'to offer to lend him a book' }, answer: 'B',
        },
      ],
    },
    part2: {
      title: 'Three great campsites to try this summer',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Sandy Bay',
          text: "This campsite is on an excellent beach, and has its own surfing school with special prices for campers. You can also learn to windsurf and sail there. The sea is safe for swimming, so it’s a great place for families. The large swimming pool is great in summer, and has a wide area of grass around it. Its small supermarket has long opening hours. It doesn’t matter what size tent you bring, as the campsite is large and you won’t be too near your neighbours!",
        },
        {
          label: 'B', name: 'High Wood',
          text: "There are lots of activities you can do at High Wood campsite, from fishing to cycling, and they’ll lend you any of the equipment you need. It’s not as large as some campsites, but it’s clean and modern. It has a fantastic pool with a roof window which can open and close. There’s also a special area where you can watch films or dance under the stars to local bands. For food shopping, try the shop in the nearby village.",
        },
        {
          label: 'C', name: 'Black Lake',
          text: "The wonderful thing about Black Lake campsite is waking up in the morning and seeing the beautiful mountains all around you. You don’t have to bring your own tent – there are some already there you can pay to use. There’s lots to do – you can swim in the lake or walk in the forest. And don’t forget to bring your mountain bike with you! If you want to cook for yourself, the shop in the next village has a good variety of food.",
        },
      ],
      questions: [
        { id: 7, text: 'Which campsite has an indoor swimming pool?', answer: 'B' },
        { id: 8, text: 'Which campsite offers water sports classes?', answer: 'A' },
        { id: 9, text: 'Which campsite has great views?', answer: 'C' },
        { id: 10, text: 'Which campsite has a shop where people can buy food?', answer: 'A' },
        { id: 11, text: 'Which campsite offers evening activities?', answer: 'B' },
        { id: 12, text: 'Which campsite has lots of space for your tent?', answer: 'A' },
        { id: 13, text: 'Which campsite has bikes you can borrow?', answer: 'B' },
      ],
    },
    part3: {
      title: 'Jack Calder',
      author: '',
      instructions: 'For each question, choose the correct answer.',
      passage: "Violin player Jack Calder plays in the Australian band, Ocean Blue.\n\nJack Calder started playing the violin when he was ten. ‘My music teacher played and one day he asked if anyone wanted to learn. Some girls put up their hands and so did I. I didn’t have a violin, but my uncle said I could use his. The lessons were really hard at first, but playing the violin soon became important to me.’\n\nAfter leaving school, Jack moved to Melbourne. For a time, he preferred listening to music to playing it. The rock music he listened to sounded very different from violin music, so he bought an electric violin, and started putting the things he liked about rock music into the music he played on his violin.\n\nA year later, Jack met a small group of Melbourne musicians. ‘We all thought about music in the same way and started Ocean Blue together. A year later, we were playing lots of concerts, and our music was selling well. But we didn’t want this to make us different people. We didn’t want to stop being friends.’\n\nJack meets many people who think playing the violin is an unusual career, but he doesn’t agree with them. ‘I think it’s the best thing in the world. I guess I’m lucky that way. The internet has changed music, but when I walk into a violin shop it’s like entering another world – one where time has stopped. Someone has looked after these beautiful old instruments that are two or three hundred years old. I think that’s amazing.’",
      questions: [
        { id: 14, text: 'What do we learn about Jack in the first paragraph?', options: { A: 'He was the only person at school to play the violin.', B: 'He learned to play on an instrument that he borrowed.', C: 'He enjoyed playing the violin as soon as he started learning.' }, answer: 'B' },
        { id: 15, text: 'What is the writer doing in the second paragraph?', options: { A: 'explaining why Jack thought some music was easy to play', B: 'saying why only a few people liked the music Jack played', C: 'describing how Jack changed the kind of music he played' }, answer: 'C' },
        { id: 16, text: 'What does Jack say about Ocean Blue?', options: { A: 'Nobody in the band liked travelling far to play in a concert.', B: 'The band members were interested in different kinds of music.', C: 'Everyone wanted to stay friends when the band became successful.' }, answer: 'C' },
        { id: 17, text: 'Why does Jack think he is lucky?', options: { A: 'He meets lots of people.', B: 'He loves what he does.', C: 'He has an unusual career.' }, answer: 'B' },
        { id: 18, text: 'Jack thinks it is a good idea', options: { A: 'to keep some things that people used in the past.', B: 'to make more music available on the internet.', C: 'to teach more people to play an instrument.' }, answer: 'A' },
      ],
    },
    part4: {
      title: 'The London Marathon',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'In 1979, two British men called John Disley and Chris Brasher ',
        ' to run the New York Marathon. This 42-kilometre race goes through the city, past many of its famous tourist sights. Disley and Brasher found that it was very different from marathons in the UK. At that ',
        ' in the UK, nobody was interested in marathons, but in New York, there were large ',
        ' of people watching. Afterwards, the two men had the ',
        ' of starting a similar race in London.\n\nThe first London Marathon was in 1981, and over six thousand runners ',
        ' part. Since then, the race has happened every year, and has become popular with runners from all over the world. Over a million people have completed it, and it is ',
        ' on TV in nearly 200 countries.',
      ],
      questions: [
        { id: 19, options: { A: 'thought', B: 'said', C: 'decided' }, answer: 'C' },
        { id: 20, options: { A: 'year', B: 'day', C: 'time' }, answer: 'C' },
        { id: 21, options: { A: 'members', B: 'crowds', C: 'visitors' }, answer: 'B' },
        { id: 22, options: { A: 'idea', B: 'answer', C: 'fact' }, answer: 'A' },
        { id: 23, options: { A: 'stayed', B: 'took', C: 'made' }, answer: 'B' },
        { id: 24, options: { A: 'shown', B: 'made', C: 'held' }, answer: 'A' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'to' },
      passages: [
        {
          label: 'Blog',
          content: 'Welcome to my blog! My name is Mark and I’m 23 years old. I was born in Australia, but I grew [25] in France. [26] the moment, I am working in Paris, as a photographer for a fashion magazine.\n\nI live near my office and [27] only takes me ten minutes to get there. Sometimes I have to travel to other countries to work, [28] example, last month I went to [29] USA to take photos at a big fashion show.\n\nI get to meet a lot of very interesting people. Leave me a message [30] you want to ask me any questions.',
        },
      ],
      questions: [
        { id: 25, answers: ['up'] },
        { id: 26, answers: ['At', 'at'] },
        { id: 27, answers: ['it'] },
        { id: 28, answers: ['for'] },
        { id: 29, answers: ['the'] },
        { id: 30, answers: ['if'] },
      ],
    },
  },
  {
    id: 'ket-standard-1-test2', title: '标准版真题 2 · Test 2',
    source: { file: 'A2 KET新题型官方真题 1.pdf', collection: 'A2 KET 新题型官方真题 1', test: 2, pages: '24–31', answerPage: 102, verified: true, verifiedParts: [1,2,3,4,5] },
    part1: { instructions: 'For each question, choose the correct answer.', questions: [
      { id:1,type:'email',from:'Cristina',to:'Molly',content:"Sorry, but I’m going to be late for our meeting about the new football team tomorrow. I’ll probably arrive around 10.20 – start without me!",options:{A:'Cristina says she might miss the meeting tomorrow.',B:'Cristina wants to change the time of tomorrow’s meeting.',C:'Cristina is telling Molly not to wait for her tomorrow.'},answer:'C' },
      { id:2,type:'notice',content:'Sam’s Café\nOpen daily: 6.00 a.m. – 3.00 p.m.\n20% student discount: 6.00 a.m. – 10.00 a.m.',options:{A:'The café is closed to students after 10 a.m.',B:'Students who come early get lower prices.',C:'Students cannot eat lunch here every day.'},answer:'B' },
      { id:3,type:'text',to:'Tess',content:"Could I borrow your laptop tonight? Mine’s at the computer repair shop. If not, do you know anyone who can lend me one?\nMissie",options:{A:'Missie is asking Tess to help her find a laptop to use.',B:'Missie is offering to lend her laptop to a friend.',C:'Missie wants to find someone to repair her laptop.'},answer:'A' },
      { id:4,type:'ad',content:'SPECIAL OFFER UNTIL SATURDAY\nShirts £10 each when you buy two!\nUsual price £25',options:{A:'This Saturday each shirt will cost £10 less than usual.',B:'If you buy more than one shirt, you can save money.',C:'After Saturday, the price of these shirts will go down.'},answer:'B' },
      { id:5,type:'text',to:'Matt',content:"We’re already at the cinema but can’t see you anywhere. The film starts soon and Ben wants to get some snacks. Hurry up!\nDom",question:'Why did Dom send this message?',options:{A:'He is worried they’ll miss some of the film.',B:'He wants to eat something before the film.',C:'He needs to tell Matt where the cinema is.'},answer:'A' },
      { id:6,type:'text',to:'Adam',content:"There are still tickets available for Friday’s concert. Let’s go! I can get tickets for both of us – you can pay me tomorrow.\nRachel",question:'Why did Rachel send this message?',options:{A:'to offer to buy a concert ticket for Adam',B:'to find out more about the concert from Adam',C:'to tell Adam what the concert tickets cost'},answer:'A' },
    ]},
    part2: { title:'How I became a tennis coach',instructions:'For each question, choose the correct answer.',people:[
      {label:'A',name:'Petra',text:'I grew up in Germany, but when I was 17, I moved to Spain so I could go to a tennis centre there. It was hard to be without my family and friends, especially when I hurt myself or got ill. However, my tennis improved a lot. After three years, I left the centre and began my career. I started playing in big competitions around the world. I did OK, but wasn’t earning enough money, so I quickly decided to become a tennis coach instead. I now teach children who are just starting the game, which is fun.'},
      {label:'B',name:'Bea',text:'When I was 14, my dad sent me to a tennis centre near my home in Italy. He thought I might become a top player like him, but I saw how much time he spent going from one country to another during his career, and I’ve never wanted that for myself. My favourite things at the tennis centre were spending time at the pool or having barbecues with friends in the evenings. I’m now a coach, and teach young tennis stars at summer camps in Italy.'},
      {label:'C',name:'Sara',text:'When I went to live in Spain so I could go to a famous tennis centre there, my dad came with me, and my mum stayed at home in Scotland. My tennis really improved during my two years there, but when I broke my foot it became clear that a career as a tennis player wasn’t going to be possible. I went home for a year and then returned to the centre to do a coaching course. I now teach the best young players in Scotland.'},
    ],questions:[
      {id:7,text:'Who didn’t enjoy tennis as much as other activities at the tennis centre?',answer:'B'},{id:8,text:'Who had to change her plans for the future after an accident?',answer:'C'},{id:9,text:'Who says she missed people from home while she was at the tennis centre?',answer:'A'},{id:10,text:'Who went back to the tennis centre to learn to be a coach?',answer:'C'},{id:11,text:'Who doesn’t like the idea of travelling a lot for her job?',answer:'B'},{id:12,text:'Who moved to a different country with a member of her family?',answer:'C'},{id:13,text:'Who teaches tennis to young people who haven’t played before?',answer:'A'}
    ]},
    part3:{title:'Joining a ballroom dancing club',author:'Pippa Cartwright',instructions:'For each question, choose the correct answer.',passage:'When I started college, I wanted to find a club to join. One of the first ones I looked at was ballroom dancing – a type of dance you do with a partner. The people there seemed to be having a great time, and it didn’t cost much, so I decided to join.\n\nThe first week I went, I was really worried because the teacher told us that there were nineteen different dances we had to learn. But it’s been fine. When there’s a new thing to learn, he shows it to us lots of times and makes sure we’re all good at it before we do the next thing.\n\nWhen I joined, I didn’t know any of the other people in the club because we all study different subjects. But it’s been a great way to meet people, and I’ve made some of my best friends in the club.\n\nOne of the reasons we learn the dances is to enter competitions. I couldn’t wait to do my first one. Before we started, I was a bit worried. But during the competition, my partner and I remembered everything about our dances. We were great. We didn’t win any prizes, but it didn’t matter – we loved it!\n\nJoining the ballroom dancing club has been fantastic. In the past, I always did the same sports and activities, year after year, but ballroom dancing has taught me there’s nothing scary about doing something you’ve never tried before. I still do lots of sports, but now I can add ballroom dancing to my list of hobbies.',questions:[
      {id:14,text:'Why did Pippa join the dance club?',options:{A:'She thought it looked fun.',B:'She didn’t have to pay for it.',C:'She didn’t like any of the other clubs.'},answer:'A'},
      {id:15,text:'What does Pippa say about the dance teacher?',options:{A:'He teaches them a new dance every week.',B:'He often tells new members how good they are.',C:'He repeats new things until everyone can do them.'},answer:'C'},
      {id:16,text:'What does Pippa say about the other club members?',options:{A:'She has become close to some of them.',B:'She is on the same course as some of them.',C:'She was friends with some of them before joining.'},answer:'A'},
      {id:17,text:'How did Pippa feel about her first dance competition?',options:{A:'happy to win first prize',B:'upset that she forgot the dances',C:'excited to take part'},answer:'C'},
      {id:18,text:'In the final paragraph, Pippa says',options:{A:'ballroom dancing is her favourite hobby.',B:'she’s learned not to be afraid to do new things.',C:'she isn’t sure which activity to try next.'},answer:'B'}
    ]},
    part4:{title:'Walter Bonatti',instructions:'For each question, choose the correct answer.',passage_segments:['Walter Bonatti, one of the greatest alpine mountain climbers of all time, was born in Italy in 1930. As a child, he ',' his holidays in Bergamo with his uncles. He loved the mountains there, and at the age of 18, he ',' to climb the highest and most difficult ones. He was one of the ',' people to do this and he was very ',' at it.\n\nHe went on to climb many other mountains, including the famous K2 in the Himalayas. At the age of just 35, he decided to ',' his climbing career. However, he continued to work as a mountain guide and photographer. He also wrote several books about his climbing ',' which are read in all Italian schools.'],questions:[
      {id:19,options:{A:'travelled',B:'went',C:'spent'},answer:'C'},{id:20,options:{A:'became',B:'began',C:'turned'},answer:'B'},{id:21,options:{A:'early',B:'first',C:'soon'},answer:'B'},{id:22,options:{A:'successful',B:'interested',C:'popular'},answer:'A'},{id:23,options:{A:'shut',B:'close',C:'end'},answer:'C'},{id:24,options:{A:'experiences',B:'occupations',C:'subjects'},answer:'A'}
    ]},
    part5:{instructions:'For each question, write the correct answer.\nWrite ONE word for each gap.',example:{number:0,answer:'at'},passages:[{from:'Bea',to:'Tania',label:'Emails',content:'How are things? Are you busy [0] the moment? [25] you remember our conversation last weekend about going [26] the theatre? Well, the play “Fathers and Sons” [27] showing next week at West Theatre. Shall [28] go and see it together? I’ve heard it’s very good!\n\nThat sounds great! [29] would you like to go? I’m busy on Friday next week, [30] I’m free the other days. Shall I get the tickets?'}],questions:[{id:25,answers:['Do','Can']},{id:26,answers:['to']},{id:27,answers:['is']},{id:28,answers:['we']},{id:29,answers:['When']},{id:30,answers:['but','although','though','however']} ]}
  },
  {
    id:'ket-standard-1-test3',title:'标准版真题 3 · Test 3',source:{file:'A2 KET新题型官方真题 1.pdf',collection:'A2 KET 新题型官方真题 1',test:3,pages:'40–47',answerPage:120,verified:true,verifiedParts:[1,2,3,4,5]},
    part1:{instructions:'For each question, choose the correct answer.',questions:[
      {id:1,type:'notice',content:'Swimming pool closed for building work\nOpen from Tuesday for lessons only',options:{A:'People who have swimming classes can go on Tuesday.',B:'The pool will be closed to all customers after Tuesday.',C:'Swimming lessons will be in a new pool on Tuesday.'},answer:'A'},
      {id:2,type:'notice',content:"Chess club members!\nWe’re meeting in the library this Wednesday instead of the hall, as there’s a dance show happening there at 7 p.m.",question:'The chess club is',options:{A:'on a different day this week.',B:'in a different place this week.',C:'at a different time this week.'},answer:'B'},
      {id:3,type:'note',to:'Rob',from:'Dad',content:"Leave your laptop in the kitchen before you go out and I’ll see if I can find out why it’s not working.",question:'Why did Rob’s dad write this note?',options:{A:'to ask if he can use Rob’s laptop',B:'to tell Rob where he left his laptop',C:'to offer to check Rob’s laptop'},answer:'C'},
      {id:4,type:'text',to:'Mark',from:'Rafa',content:"I have to work until 6.00, so I can’t meet you at the café. See you at the cinema instead, just before the film.",options:{A:'Rafa needs to change the plans for this evening.',B:'Rafa will eat at work before going to the cinema.',C:'Rafa prefers to see the film at a later time.'},answer:'A'},
      {id:5,type:'notice',content:'Sightseeing trips twice daily\nBuses – 9.00 a.m. & 2.00 p.m.\nTickets only available from tourist office',options:{A:'It’s not possible to buy tickets on the bus.',B:'Tourists must book both trips at 9.00 a.m.',C:'Each sightseeing trip takes two hours.'},answer:'A'},
      {id:6,type:'notice',content:'Cinema park is full\nPlease use the free one in the shopping centre',options:{A:'You should pay for cinema parking in the shopping centre.',B:'People who want to see a film must drive to the shopping centre cinema.',C:'Cinema visitors should use a different car park.'},answer:'C'}]},
    part2:{title:'Learning for fun',instructions:'For each question, choose the correct answer.',people:[
      {label:'A',name:'Paula',text:'I work full time as a nurse, and don’t have much time for hobbies, but I’ve been interested in photography since I was a child. On my last holiday to India, I took lots of pictures, and everyone I showed them to said they were great. So I decided to do a course. At first, I was afraid I might not be good enough. After all, it was my first time as a student for ten years! But I loved it from the very first lesson.'},
      {label:'B',name:'Sally',text:'When I was still at school, I started learning the violin. It was fun and I was quite good at it, but I didn’t do it for long, because I had so many other hobbies. Then last year, I was having a hard time in my job, and my husband bought me a violin as a present. I started learning with a teacher again. All three of my children are learning to play instruments too, so now we can practise with each other!'},
      {label:'C',name:'Kim',text:'Last year I moved to a new city because of my job. I didn’t have anything to do in the evenings, so one of my colleagues said I should try a class at the local college. I immediately thought of cooking. My mum was a fantastic cook, and when I was a child I loved watching her in the kitchen, but I never learned how to cook myself. The other students on the course are around my age, and sometimes we go to restaurants together, or even the cinema.'}],questions:[
      {id:7,text:'Who does her hobby with people in her family?',answer:'B'},{id:8,text:'Who started classes after getting some good advice?',answer:'C'},{id:9,text:'Who began her hobby after feeling unhappy at work?',answer:'B'},{id:10,text:'Who did her hobby for a long time before starting classes?',answer:'A'},{id:11,text:'Who has made new friends at her classes?',answer:'C'},{id:12,text:'Who felt worried before starting her classes?',answer:'A'},{id:13,text:'Who first had classes in her hobby as a child?',answer:'B'}]},
    part3:{title:'My city',author:'Charlotte Bond',instructions:'For each question, choose the correct answer.',passage:'I live in the centre of London. I love it because there’s always something happening and there are people around whatever time it is. Famous people like it too – they often come here for the restaurants and shops.\n\nI’ve lived here all my life. When I was little, I had singing lessons at a place near where I live now. I was afraid of the teacher at first, and some of the songs we did together were quite hard to learn. But she was good at what she did and I learned a lot of things that have helped me in my career.\n\nWhen friends visit me now, I enjoy taking them sightseeing. You can get a bus around the city, but we prefer to walk. I’ve got a little car and I love driving, but there’s so much traffic here, and it’s hard to find parking spaces.\n\nOne building I love is the Natural History Museum. They sometimes hold parties there, and last December my band and I played at one. I’ll never forget it.\n\nSoon I’ll be leaving London to go on tour with my band. We’re playing in lots of new cities and I can’t wait to explore them. We’ve sold lots of tickets, which is great. I’ll be away from my family for six months, but they’re coming to see me sing, so it’s fine.',questions:[
      {id:14,text:'What does Charlotte love about the centre of London?',options:{A:'It is always busy.',B:'Famous people often visit.',C:'The shops are very good.'},answer:'A'},{id:15,text:'How does Charlotte feel about the singing lessons she had?',options:{A:'She’s surprised she can remember them.',B:'She’s sorry she didn’t try harder.',C:'She’s glad she did them.'},answer:'C'},{id:16,text:'What does Charlotte think is the best way to see the city?',options:{A:'by car',B:'on foot',C:'by bus'},answer:'B'},{id:17,text:'Why does Charlotte love the Natural History Museum?',options:{A:'She had a special experience there.',B:'She thinks the building is beautiful.',C:'She enjoys visiting the exhibitions.'},answer:'A'},{id:18,text:'What does Charlotte say about going on tour with her band?',options:{A:'She hopes lots of people will buy tickets for her shows.',B:'She feels excited about seeing new places.',C:'She’s worried she’ll miss her family.'},answer:'B'}]},
    part4:{title:'Camels',instructions:'For each question, choose the correct answer.',passage_segments:['Camels are one of the only large animals that can live happily in the Sahara Desert. The hot weather and strong winds are not a ',' for them. Also, they do not need to eat or drink every day, and this ',' them very useful to the people who live there.\n\nCamels begin working at the age of about four years old and don’t stop until they are around 25 to 30. They can carry people or things a very long ',' and because of this they are sometimes ',' the “ships of the desert”.\n\nThese days, there are roads across some ',' of the Sahara, so buses and lorries are often ',' .'],questions:[{id:19,options:{A:'trouble',B:'mistake',C:'problem'},answer:'C'},{id:20,options:{A:'gets',B:'has',C:'makes'},answer:'C'},{id:21,options:{A:'way',B:'path',C:'road'},answer:'A'},{id:22,options:{A:'described',B:'said',C:'called'},answer:'C'},{id:23,options:{A:'parts',B:'examples',C:'things'},answer:'A'},{id:24,options:{A:'put',B:'used',C:'done'},answer:'B'}]},
    part5:{instructions:'For each question, write the correct answer.\nWrite ONE word for each gap.',example:{number:0,answer:'hope'},passages:[{from:'Jenny',to:'David',label:'Emails',content:'I [0] you’re well. It’s my brother Tom’s birthday [25] month, and I don’t know [26] to buy him for a present. Have you got [27] ideas? He’s the same age [28] you, and likes the same kind of things.\n\nI think I can help you! Why not get Tom a book? I’ve just read Dragon Teeth, which was written [29] Michael Crichton. He’s such a fantastic author! I loved it, and I think [30] brother would like it too.'}],questions:[{id:25,answers:['next','this']},{id:26,answers:['what']},{id:27,answers:['any','some']},{id:28,answers:['as']},{id:29,answers:['by']},{id:30,answers:['your']}]}
  },
]
