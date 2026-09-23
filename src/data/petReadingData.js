// B1 Preliminary (PET) reading data.
// Source: PET8套全真模拟试题.pdf
// Each test follows the official B1 Preliminary structure:
//   Part 1: Q1-5  short texts, 3 options (A/B/C)
//   Part 2: Q6-10 matching people to 8 descriptions (A-H)
//   Part 3: Q11-15 long article, 4 options (A/B/C/D)
//   Part 4: Q16-20 gapped text, 8 sentences (A-H), choose 5
//   Part 5: Q21-26 multiple-choice cloze, 4 options (A/B/C/D)
//   Part 6: Q27-32 open cloze, write ONE word
// Answers are filled in after cross-checking the answer-key PDF.

export const petReadingTests = [
  {
    id: 'pet-mock-1',
    title: 'PET 全真模拟试题 1 · Reading',
    source: {
      file: 'PET8套全真模拟试题.pdf',
      collection: 'PET 全真模拟试题',
      test: 1,
      pages: '9–18',
      answerSource: '《PET8套全真模拟试题》电子版答案详解.pdf',
      verified: true,
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1,
          type: 'notice',
          content: 'FOR SAFETY REASONS\nALL VISITORS,\nBOTH CHILDREN AND ADULTS, MUST RECEIVE A PASS\nAT THE OFFICE IN ORDER\nTO ENTER THE SCHOOL',
          options: {
            A: 'You may not access the school unless you have a pass.',
            B: 'Children are only allowed to enter the school with an adult visitor.',
            C: 'You must only enter the school if you are a child\'s parent.',
          },
          answer: 'A',
        },
        {
          id: 2,
          type: 'notice',
          content: 'This medicine should be taken with plenty of water on an empty stomach.',
          options: {
            A: 'Do not eat anything before taking the medicine.',
            B: 'You must drink a lot of water after you have taken the medicine.',
            C: 'This medicine can cause a stomach ache if you drink it.',
          },
          answer: 'A',
        },
        {
          id: 3,
          type: 'notice',
          content: '55p fare — no change given on the bus',
          options: {
            A: 'You can\'t use cash to buy the ticket on the bus.',
            B: 'Tickets aren\'t sold on the bus.',
            C: 'You must have the exact amount of money for the ticket.',
          },
          answer: 'C',
        },
        {
          id: 4,
          type: 'text',
          from: 'South Yard Studios',
          to: 'Jane',
          content: 'Jane, this is a reminder that you have a guitar class at 5 p.m. today. Please ring back if you need to reschedule.',
          options: {
            A: 'Text a message if you are late for class.',
            B: 'You must call before your lesson at South Yard.',
            C: 'Don\'t forget that you have an appointment in the afternoon.',
          },
          answer: 'C',
        },
        {
          id: 5,
          type: 'ad',
          content: 'FOR SALE\nToyama Game Console 3X\nbought last week\nplayed twice',
          options: {
            A: 'can only be used by two players.',
            B: 'is brand new.',
            C: 'can be sent to the buyer.',
          },
          answer: 'C',
        },
      ],
    },
    part2: {
      title: 'Language Courses',
      instructions: 'The people below all want to learn a new language. Decide which course would be the most suitable for each person.',
      people: [
        { label: '6', name: 'Tanya', text: 'Tanya would like to learn an oriental language and know more about Asian culture. She can attend classes twice a week for up to six months. She enjoys learning in little groups and wants to get an end-course certificate.' },
        { label: '7', name: 'Haruki', text: 'Haruki once studied Japanese at a junior high school but he needs to brush it up before the entrance test. He wants to improve his speaking and he\'d prefer one-to-one lessons around lunch time.' },
        { label: '8', name: 'Kate and Lara', text: 'Kate and her mother Lara are planning to learn a European foreign language in the same class. Kate is at school in the morning so she can only do an afternoon course. She would like to find email pen pals that she can visit in their country.' },
        { label: '9', name: 'Rajani', text: 'Rajani is fond of archaeology. He would like to learn Latin or Greek to help him improve his knowledge of past civilisations. He doesn\'t have much time so he is looking for an afternoon beginner course that will help him to read aloud real works from the classics.' },
        { label: '10', name: 'Gabriel', text: 'Gabriel is a 16-year-old boy whose parents are planning a trip to the Far East next summer. He would like to learn an Asian language and he\'s looking for classes with people the same age as him. He also wants to learn how to write and read characters.' },
      ],
      options: [
        { label: 'A', name: 'Getting started on classical Greek', text: 'This 10-hour course is for first-time learners of Greek who would like to start studying a classical language. After learning about the main grammar and pronunciation rules of this language, students are offered the chance to put in some early practice. Every Monday from 5 to 7 p.m.' },
        { label: 'B', name: 'Hebrew reading course', text: 'This intensive course will examine the history of this unique language from its early origins to its modern form as well as its influence on the Greek and Latin alphabets. You will also learn how to recognise the letters in ancient inscriptions and understand word structure. Lessons are three times a week from 8 to 10 a.m.' },
        { label: 'C', name: 'Latin courses in Cambridge', text: 'Join our weekly morning classes, which run for 20 weeks over two terms. The classes are limited to a maximum of 12 students, to make sure every student gets the necessary attention to learn Latin. We offer courses at levels 1-3, suitable for both beginners and advanced Latin speakers.' },
        { label: 'D', name: 'Mandarin classes at the "Ni Hao Language Centre"', text: 'This school offers both one-on-one lessons or small classes for up to 3 times a week. In about half a year students can learn to speak Mandarin and get ready for the HSK national exam. We also provide a list of host families in China if you plan to travel there at the end of the course.' },
        { label: 'E', name: 'Learning Japanese in England', text: 'This elementary-level Japanese course, consisting of 30 evening lessons over 15 weeks, is designed for people who want to learn basic everyday life expressions. Each lesson covers dialogues, vocabulary, grammar, quizzes and role plays. After completing this course, you will be able to talk about simple topics and know about Japanese culture.' },
        { label: 'F', name: 'Intensive Japanese', text: 'Need to refresh your vocabulary and conversation skills in Japanese? Join our crash course for intermediate learners and improve your pronunciation with a personal mother-tongue tutor. In a fortnight you will be able to talk about a selection of topics from hobbies to schoolwork. Classes can be arranged to fit your schedules.' },
        { label: 'G', name: 'Korean School of London', text: 'Our Korean language programme includes both teenage and children courses every Thursday and Saturday morning from January to June. The classes will focus on speaking, listening and vocabulary exercises to provide everyday speaking skills, but teenage students will also be taught to read and write.' },
        { label: 'H', name: 'A taste of Sweden', text: 'This course is open to teenagers and adults who want to learn Swedish and join our 2-week exchange programme in Stockholm. Students will learn how to communicate with people in common everyday situations. Classes are from 3:30 to 5:00 p.m. every Thursday, but you can practise online with your host family in Sweden, too.' },
      ],
      questions: [
        { id: 6, person: 'Tanya', answer: 'D' },
        { id: 7, person: 'Haruki', answer: 'F' },
        { id: 8, person: 'Kate and Lara', answer: 'H' },
        { id: 9, person: 'Rajani', answer: 'A' },
        { id: 10, person: 'Gabriel', answer: 'G' },
      ],
    },
    part3: {
      title: 'Let\'s Sing Along',
      author: 'Helena Hutchinson',
      instructions: 'For each question, choose the correct answer.',
      passage: '13-year-old Helena Hutchinson talks about the benefits of singing.\n\nHave you ever wondered why people often catch themselves singing while having a shower or making dinner? Or why karaoke has been popular since it appeared in the 1980s? We still have to understand a lot about the effects of music on our brain, but many studies already show it is good for our mind and our body alike.\n\nThe first reason you feel like singing along when you listen to a song is that it makes you feel less lonely. Whether you are cycling home, doing your homework or cheering at your favourite pop star\'s concert, singing is communication. It is like sharing a moment with the singer or the people around you. This is why babies often stop crying when they hear music and all children enjoy singing.\n\nAll types of singing can make you feel better, but group singing has the best effects on people\'s lives. Singing in a group in front of a crowd builds confidence, which explains why joining a choir can decrease anxiety in depressed patients. When you sing, it\'s nearly impossible to think about other things. Since you must focus on what you are doing, singing stops you being worried about stressful situations.\n\nSinging can also improve speech development. Children learn to speak faster if they regularly sing from an early age and they are often better at communicating through language. When you sing, you need to remember words and tunes, so this activity is also an excellent way to learn a foreign language and make your pronunciation sound more natural.\n\nYou can also improve your physical health when you sing. Since you need to breathe properly, when you sing, you breathe out more carbon dioxide and take in more oxygen, which makes your body fitter and stronger against illnesses. So if you decide to take up a new hobby, singing could be the best way for you to have fun, make new friends and improve your health at the same time.',
      questions: [
        { id: 11, text: 'The first paragraph says that', options: { A: 'people prefer singing when they have a meal.', B: 'singing can help us understand the brain better.', C: 'we can improve our health when we sing.', D: 'karaoke isn\'t as popular as in the 1980s.' }, answer: 'C' },
        { id: 12, text: 'What happens when you sing along to a song?', options: { A: 'It makes you feel connected to others.', B: 'It\'s like being at the concert of your favourite singer.', C: 'You may feel like a pop star.', D: 'Children develop their musicality when they listen to a song.' }, answer: 'A' },
        { id: 13, text: 'What does the writer say about joining a choir?', options: { A: 'It helps you when you perform in a crowded building.', B: 'It makes you feel depressed in front of an audience.', C: 'You can\'t sing unless you are relaxed.', D: 'You will be able to solve your everyday problems.' }, answer: 'A' },
        { id: 14, text: 'Singing can help children', options: { A: 'not to take in carbon dioxide.', B: 'to increase their communication skills.', C: 'to spell words properly.', D: 'to learn the words of a song.' }, answer: 'B' },
        { id: 15, text: 'Which of the following sums up the ideas in the article?', options: { A: 'You should sing with other people if you want to have fun and improve your health.', B: 'People who are fond of singing have more friends than those who don\'t enjoy singing.', C: 'There are several positive effects on how you feel when you take up singing as a hobby.', D: 'Children that don\'t like singing may not be as confident as those that join a choir.' }, answer: 'C' },
      ],
    },
    part4: {
      title: 'Interactive Films',
      author: 'Terry P. Roham, aged 15',
      instructions: 'Five sentences have been removed from the text below. For each space, choose the correct answer. There are three extra sentences which you do not need to use.',
      passage_segments: [
        'Interactive cinema is a form of entertainment which mixes traditional filmmaking and video game technology. In an interactive movie, the audience is given the power to decide what choices the main character must make at crucial moments of the story.\n',
        'Though most people think it is a very recent invention, the first interactive film, Kinoautomat, was made by a Czech director in the 1960s. In this early version, the movie was interrupted and the audience was asked to choose between the two possible scenes and to vote for the one they wanted to be shown next.\n',
        'It was after the invention of CD-ROMs that game developers started to realise they could combine traditional filming methods and new technological possibilities. This is how movie makers started to film live actors on a green screen.\n',
        'In the 2000s there were new attempts at creating interactive movies. One of the main problems was the limited options the viewers had in giving shape to their own plot and conclusion. However, things seem to have changed since the recent release of Bandersnatch.\n',
        'With its 6 viewer options and 5 different endings the episode has received favourable reviews from both critic and the audience.\n',
      ],
      options: [
        { label: 'A', text: 'A short tutorial explains to the viewer how to make choices.' },
        { label: 'B', text: 'Despite this, people appeared to lose interest in the genre.' },
        { label: 'C', text: 'But then something unusual happens.' },
        { label: 'D', text: 'Whatever decision was made, however, the film ending was the same.' },
        { label: 'E', text: 'It is an interactive episode of a popular sci-fi series that came out in 2018.' },
        { label: 'F', text: 'The filmed scene could then be moved onto a chosen digital background.' },
        { label: 'G', text: 'But the idea itself is even older.' },
        { label: 'H', text: 'Since there are different possible developments, the end depends on each viewer.' },
      ],
      questions: [
        { id: 16, answer: 'H' },
        { id: 17, answer: 'D' },
        { id: 18, answer: 'F' },
        { id: 19, answer: 'B' },
        { id: 20, answer: 'E' },
      ],
    },
    part5: {
      title: 'Online Shopping vs Traditional Shopping',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'In today\'s world there is hardly anyone who (21) never bought anything online. Shopping online allows us to find whatever we want to buy and is now more popular than ever. You just need to create an account and look (22) the items which loads of online stores offer. All you have to do when you are ready is click the "enter" key and wait for the courier to bring you (23) you paid for.\n',
        'However, the number of people who refuse to become slaves of technology and consumerism is increasing. They keep (24) most of their shopping traditionally. They think that (25) they lose a lot of time going to the right shop, they can check the item, try on clothes and know where the product comes from. They know online shopping has (26) advantages but they still prefer traditional shopping as a way to help local businesses to keep their jobs despite the competition they have to face now.',
      ],
      questions: [
        { id: 21, options: { A: 'is', B: 'had', C: 'does', D: 'has' }, answer: 'D' },
        { id: 22, options: { A: 'up', B: 'like', C: 'for', D: 'after' }, answer: 'A' },
        { id: 23, options: { A: 'which', B: 'whose', C: 'what', D: 'that' }, answer: 'C' },
        { id: 24, options: { A: 'receiving', B: 'doing', C: 'making', D: 'taking' }, answer: 'B' },
        { id: 25, options: { A: 'despite', B: 'if', C: 'unless', D: 'although' }, answer: 'D' },
        { id: 26, options: { A: 'much', B: 'many', C: 'a lot', D: 'too' }, answer: 'B' },
      ],
    },
    part6: {
      title: 'Farm Working Holidays',
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      passage_segments: [
        'If you don\'t mind working (27) your hands and would like to have an eco-friendly holiday while learning English, working on a farm is a great way to travel for free and enjoy the beauty of the countryside. Our farm volunteer scheme involves a lot of farms (28) part in eco-friendly projects which are looking for teenagers to volunteer in exchange for free morning language courses, accommodation and food.\n',
        'Most farm owners ask their guests to stay for at (29) two weeks, but many guests decide to spend the whole season there in (30) to learn everything about organic farming. Volunteers can do anything, from picking grapes to (31) after crops. They will also milk cows or feed chickens. Working days are usually five hours (32) day, but you may also work less.\n',
        'To learn more about World Wide Opportunities on Organic Farms, check our website www.wwoof.org listing all the farms in our project.',
      ],
      questions: [
        { id: 27, answer: 'with' },
        { id: 28, answer: 'taking' },
        { id: 29, answer: 'least' },
        { id: 30, answer: 'order' },
        { id: 31, answer: 'looking' },
        { id: 32, answer: 'per' },
      ],
    },
  },
]
