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
]
