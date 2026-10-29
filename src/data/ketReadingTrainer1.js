// A2 Key for Schools Trainer 1 (Second Edition) — Reading and Writing.
// 数据来源：用户提供的 PDF 扫描件（PDF 页 = 书内页 - 1），答案取自官方
// Teacher's Notes / Answer Key 印刷页，逐题核对后写入。未核对的部分不得标志 verified。
export const ketReadingTrainer1Tests = [
  {
    id: 'ket-trainer1-test1',
    title: 'Trainer 1 · Test 1',
    source: {
      file: 'A2 Key for Schools Trainer 1 (Second Edition).pdf',
      collection: 'A2 Key for Schools Trainer 1',
      test: 1,
      pages: '12–27',
      answerPage: 164,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'notice',
          content: "Please note:\nthis afternoon's football class will be tomorrow instead, as Mr Hall is away today.",
          options: {
            A: 'There is no football class today.',
            B: "Mr Hall can't come to the football class tomorrow.",
            C: 'You can choose to go to the football class today or tomorrow.',
          },
          answer: 'A',
        },
        {
          id: 2, type: 'text', from: 'Louise', to: 'Jane',
          content: 'Hi Jane,\nHave you finished with that book I lent you? It\'s just that my brother needs it for a school project.\nThanks,\nLouise',
          options: {
            A: 'Louise is offering to lend Jane a book.',
            B: 'Louise wants her book back from Jane.',
            C: "Louise's brother has borrowed a book from Jane.",
          },
          answer: 'B',
        },
        {
          id: 3, type: 'notice',
          content: 'Picnic area\nNo ball games here – please use the other side of the park.',
          options: {
            A: 'You can buy food somewhere else in the park.',
            B: "Please don't eat while you are playing sport here.",
            C: "This is a place for eating and you can't play football here.",
          },
          answer: 'C',
        },
        {
          id: 4, type: 'notice',
          content: 'Museum open from 12.\nChildren must be with an adult.',
          options: {
            A: 'Adults can take children to the museum in the morning.',
            B: 'Adults with children over 12 will enjoy the museum.',
            C: 'Children can visit the museum if they are with an adult.',
          },
          answer: 'C',
        },
        {
          id: 5, type: 'text', from: 'Mrs Monmouth, Head Teacher', to: 'All Pupils and Parents',
          content: "Hello,\nThis week, please don't use the car to get to school. Coming on foot is healthy and doesn't take much time.\nThanks,\nMrs Monmouth",
          question: 'Why has Mrs Monmouth written this message?',
          options: {
            A: 'to ask pupils to walk to school',
            B: 'to tell pupils to get to school on time',
            C: 'to explain about a health problem at school',
          },
          answer: 'A',
        },
        {
          id: 6, type: 'ad',
          content: "Pedro's Pizza Bar\nBuy two pizzas at the same time, and we'll give you a third one for free! This offer is Mon–Fri only.",
          options: {
            A: "Pedro's Pizza Bar isn't open at weekends.",
            B: 'The third time you visit, you get a free pizza.',
            C: 'Three pizzas cost the same as two.',
          },
          answer: 'C',
        },
      ],
    },
    part2: {
      title: 'Three museums',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Eureka!',
          text: "Eureka! is a complete hands-on experience, which means that visitors can actually pick up any object in the museum. It's a great way for young visitors to learn about the world, the body, how things work and move. And when you buy an entry ticket, it allows you to come back as many times as you want for a whole year for no extra cost. As Eureka! is right next to Halifax train station, it's very easy to get to from all over the country.",
        },
        {
          label: 'B', name: 'Museum of Museums',
          text: "Every time you visit the Museum of Museums, you'll be able to see something different. And that's because the things you see there are actually lent by other museums around the country. The museum always has lots of different vehicles, from ice-cream vans and old motorbikes to the different kinds of public transport people used to get to work many years ago. You can find out about all this and lots more.",
        },
        {
          label: 'C', name: 'Cinema Museum',
          text: "Ronald Grant, who opened the Cinema Museum in the 1960s, travelled round the country and bought things from cinemas which were closing down. This included old film posters and wooden cinema seating. At the museum, you can now see these and much more, including the uniforms that cinema staff once had to wear.\n\nPlease let us know by phone or email if you'd like to come. We'll be happy to see you, but we need to arrange a guide, as it's only possible to visit the museum on an organised tour.",
        },
      ],
      questions: [
        { id: 7, text: 'Which museum has an exhibition of clothes?', answer: 'C' },
        { id: 8, text: 'Which museum is full of things which visitors can touch?', answer: 'A' },
        { id: 9, text: 'Which museum is a good place to learn about how people travelled in the past?', answer: 'B' },
        { id: 10, text: 'Which museum can you visit again for free after you pay once?', answer: 'A' },
        { id: 11, text: 'Which museum do you need to contact before you visit?', answer: 'C' },
        { id: 12, text: 'Which museum shows things that were borrowed from other places?', answer: 'B' },
        { id: 13, text: "Which museum has some furniture which wasn't needed any more?", answer: 'C' },
      ],
    },
    part3: {
      title: "Will's blog",
      author: '',
      instructions: 'For each question, choose the correct answer.',
      passage: "One day my dad said, 'Why don't we have a street party?' This means that the street is closed so cars can't use it, and people put tables and chairs out in the street, then have a party! Dad said there was one in 1977 and he still remembers it well. Everyone loved it! I couldn't believe that since 1977 they never had another one. If it was so good, why not do it again?\n\nWe started to organise it, together with some other people. I helped to make the web page, so everyone on the street knew about the party and could post their old photos from the party in 1977. There were some pictures of my dad when he was a kid, together with his friends, who have moved away from the street now. It was interesting to see that the buildings on the street haven't changed at all!\n\nMy mum was a bit worried about the party. 'But a lot of people on the street don't really know each other,' she said. 'What if they don't have anything to talk about?' I just said, 'Relax, Mum. It'll be great.'\n\nSo, what was the party like? It was fantastic! My friends and I really liked speaking to an old lady called Louisa. She's 89 and was telling us about when she and her friends were our age. So now I always chat to her when I see her on the street. I didn't know who she was before, so I'm glad we had the party.",
      questions: [
        { id: 14, text: 'Why was Will surprised?', options: { A: 'His father wanted to have a street party.', B: "There hasn't been a street party for a long time.", C: 'Many people remembered the last street party.' }, answer: 'B' },
        { id: 15, text: 'What did the photos from 1977 show?', options: { A: 'The street still looks the same now.', B: 'There are more children living in the street now.', C: 'The same people still live on the street now.' }, answer: 'A' },
        { id: 16, text: "Why was Will's mother worried?", options: { A: 'She thought that the party was too expensive.', B: 'She thought that people might not come to the party.', C: 'She thought that the guests might not talk to each other.' }, answer: 'C' },
        { id: 17, text: 'Will and his friends enjoyed', options: { A: "hearing Louisa's stories.", B: "meeting Louisa's friends.", C: 'telling Louisa about their lives.' }, answer: 'A' },
        { id: 18, text: 'What is the best title for the article?', options: { A: 'Why I love street parties', B: 'The street party we had', C: 'How to have a street party' }, answer: 'B' },
      ],
    },
    part4: {
      title: 'Red pandas',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'Red pandas live in Nepal, Northern Myanmar, India and Bhutan, as ',
        ' as in China. They ',
        ' a lot of their time in trees and are very ',
        ' at climbing. They are more active during the night than the day, and they usually ',
        ' for food in the evening and early in the morning. Their favourite food is bamboo. In fact, a female red panda can eat 20,000 bamboo leaves in a day! But they also eat fruit, grass, eggs, insects and ',
        ' small birds and animals. Scientists believe that the number of red pandas in the world is ',
        ' because the forests where they live are getting smaller. But much is being done in countries around the world to help this amazing animal.',
      ],
      questions: [
        { id: 19, options: { A: 'soon', B: 'much', C: 'well' }, answer: 'C' },
        { id: 20, options: { A: 'spend', B: 'live', C: 'take' }, answer: 'A' },
        { id: 21, options: { A: 'nice', B: 'great', C: 'good' }, answer: 'C' },
        { id: 22, options: { A: 'look', B: 'see', C: 'find' }, answer: 'A' },
        { id: 23, options: { A: 'even', B: 'quite', C: 'still' }, answer: 'A' },
        { id: 24, options: { A: 'little', B: 'low', C: 'short' }, answer: 'B' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'much' },
      passages: [
        {
          from: 'Giles', to: 'Aunt Nel', label: 'Email',
          content: "Dear Aunt Nel,\n\nThank you very [0] for the book you sent me. It was very kind [25] you. Actually, History of Space Travel sounds like [26] brilliant title. I'm really interested [27] that kind of thing – exploring space and learning about the moon. I'll start it after I finish the one I'm reading now, [28] is about how cars are made.\n\nThe holidays are nearly finished now. I go back [29] school next week. Then I've only got two more years of school, so I need to decide [30] to do next!\n\nThanks again for the present.\n\nBest wishes,\nGiles",
        },
      ],
      questions: [
        { id: 25, answers: ['of'] },
        { id: 26, answers: ['a'] },
        { id: 27, answers: ['in'] },
        { id: 28, answers: ['which'] },
        { id: 29, answers: ['to'] },
        { id: 30, answers: ['what'] },
      ],
    },
  },
  {
    id: 'ket-trainer1-test2',
    title: 'Trainer 1 · Test 2',
    source: {
      file: 'A2 Key for Schools Trainer 1 (Second Edition).pdf',
      collection: 'A2 Key for Schools Trainer 1',
      test: 2,
      pages: '46–61',
      answerPage: 178,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'notice',
          content: 'From 1 October, please do not enter the pool before you have used the shower.',
          options: {
            A: 'The pool is closed on October 1st.',
            B: 'You need to wash before you swim.',
            C: 'There will be a new shower at the pool.',
          },
          answer: 'B',
        },
        {
          id: 2, type: 'text', from: 'Amanda', to: 'Gran',
          content: 'Subject: Help with a school project\n\nHi Gran,\nDo you have any old photos showing you in your uniform when you were at school? If you do, can you send me one for school?\nThanks,\nAmanda',
          question: 'Amanda wants her grandmother to',
          options: {
            A: 'let her have a picture.',
            B: 'lend her some clothes.',
            C: 'describe her old uniform.',
          },
          answer: 'A',
        },
        {
          id: 3, type: 'notice',
          content: 'Warning\nMemory full\nPlease delete files or click here to buy more memory.',
          question: 'Where might you see this text?',
          options: {
            A: 'in a computer shop',
            B: 'on the screen of a computer',
            C: 'on the wall in the computer classroom',
          },
          answer: 'B',
        },
        {
          id: 4, type: 'notice',
          content: "TOMORROW'S TRIP\nTime coach leaves school: 8:50.\nPlease arrive no later than 8:40.\nThe school gates will open at about 8:30.\nThank you.",
          question: 'What time do pupils need to get to school tomorrow?',
          options: {
            A: 'about 8:30',
            B: 'by 8:40',
            C: 'at 8:50',
          },
          answer: 'B',
        },
        {
          id: 5, type: 'notice',
          content: "PLEASE NOTE EVERYBODY\nThere's a lift if you need it, BUT use the stairs if you can.\nIt's a great way to stay fit.",
          options: {
            A: 'Get the lift if you are in a hurry.',
            B: 'Use the stairs if the lift is broken.',
            C: 'Walking up and down stairs is better for you.',
          },
          answer: 'C',
        },
        {
          id: 6, type: 'ad',
          content: "Hounslow Cinema: Special Offer\nBuy tickets to four films and you don't need to pay for the next one!\nEvery day until 5:30 p.m.",
          options: {
            A: 'You can watch up to four films for free.',
            B: 'The fifth film you see during the daytime is free.',
            C: 'Cheap tickets are available for groups of four in the evenings.',
          },
          answer: 'B',
        },
      ],
    },
    part2: {
      title: 'Advice on doing homework',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Damian, 13',
          text: "I don't mind doing homework, especially when I play some jazz (and not pop) on my phone. When I do, I'm able to think more carefully about what I'm doing. Sometimes I really enjoy doing my homework, especially when it's maths and I understand it well. Or when one of my classmates comes to my place and we study together. I find it's best if I let my parents and sister know I'm busy so they don't come into my room and spend all evening talking to me!",
        },
        {
          label: 'B', name: 'Louis, 11',
          text: "When I started doing my homework in my room every morning, it wasn't a great success. I always found something more interesting to do! But these days, I don't have the same problem. I just go to my room in the evening, switch on the light, sit down at my desk and do it. I do love music, but if I put my MP3 player on, I start to think about the song and not the homework! So I don't listen while I work. It's the same problem if my mum or dad put music on in the next room. I turn my mobile off or put it away before I start. That helps too.",
        },
        {
          label: 'C', name: 'Jackson, 14',
          text: "I usually do most of my homework before I go to bed. And then I do a bit more as soon as I wake up. I've always found it easy to do that. I'll maybe look at my German vocabulary for five minutes before breakfast. I tell my friends at school: 'If you want to do your homework well, make sure your room is nice and bright. Otherwise, you'll fall asleep!'",
        },
      ],
      questions: [
        { id: 7, text: "Which person says it's better not to look at his phone while he's doing his homework?", answer: 'B' },
        { id: 8, text: 'Which person sometimes does homework with a friend?', answer: 'A' },
        { id: 9, text: 'Which person tells his family when he is working?', answer: 'A' },
        { id: 10, text: 'Which person says that there must be enough light in his room so he can work?', answer: 'C' },
        { id: 11, text: 'Which person thinks that listening to music helps with homework?', answer: 'A' },
        { id: 12, text: 'Which person works in the morning and evening?', answer: 'C' },
        { id: 13, text: "Which person says it's easier to do homework now than it was before?", answer: 'B' },
      ],
    },
    part3: {
      title: 'Starting photography',
      author: 'by Mrs Howells, Class 3D teacher',
      instructions: 'For each question, choose the correct answer.',
      passage: "Have you ever wanted to take better pictures of your family, of your dinner or of your cat? Well, I can help you. In fact, that's what makes photography such a fantastic hobby. It doesn't matter if you have a nice new camera or just use your phone. We photographers are always trying to improve. We want today's photos to be more interesting than yesterday's.\n\nIn my photography classes, I'll show you how to find your own style, not just take the same photos as all your friends. But you'll need to be out of bed early and take pictures in the best light, before it gets too bright. We'll talk more about light in Week 1.\n\nActually, I've never read a book about photography, and I get bored watching videos on the net. I started to understand more about photography by looking at my own photos. I thought about what was wrong with them and decided how to do better next time. And in Week 2, I'll ask you to do the same with photos you have taken.\n\nDo you want to know what I think? I don't think there's anyone who can't take amazing photos. Not everyone wants to, and that's cool. But if you do, come along to Room 4D on Wednesdays after lunch from 1:30 to 2:00.",
      questions: [
        { id: 14, text: 'Why does Mrs Howells enjoy photography?', options: { A: 'She loves using her new camera.', B: 'She likes taking photos of her family.', C: 'She enjoys trying to take better pictures.' }, answer: 'C' },
        { id: 15, text: 'What advice does Mrs Howells give?', options: { A: 'Take pictures with your friends.', B: 'Don\'t take photos if it is dark.', C: 'Take photos early in the morning.' }, answer: 'C' },
        { id: 16, text: 'How did Mrs Howells learn about photography?', options: { A: 'from books', B: 'from her mistakes', C: 'from videos on the web' }, answer: 'B' },
        { id: 17, text: 'Mrs Howells believes that', options: { A: 'everybody should learn photography.', B: 'photography is a great hobby for everyone.', C: 'everybody can take good photos if they want to.' }, answer: 'C' },
        { id: 18, text: 'Why has Mrs Howells written this text?', options: { A: 'to ask pupils what they like photographing', B: 'to tell pupils about a photography course', C: "to answer pupils' questions about photography" }, answer: 'B' },
      ],
    },
    part4: {
      title: 'The oldest university in the world',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        "Some people say University of Al Qaraouiyine in Morocco is the world's oldest university because there has been a school in the same place ",
        ' the year 859 AD. In other words, there has been one there ',
        ' almost 1,100 years. The University has had many famous international students ',
        ' the years including the great traveller, Ibn Khadun. The University was started by a woman, Fatima al-Fihri and ',
        " a long history of teaching women and activities for women's education. Lecturer Hisham Mahmoud believes this helps female students concentrate during their studies. Before joining Al Qaraouiyine, Dr Mahmoud was a scientist, but he decided to ",
        " his career and work in education. The University's students all do well. After finishing at the University, many students will continue their ",
        ' at universities in America and Europe.',
      ],
      questions: [
        { id: 19, options: { A: 'since', B: 'between', C: 'after' }, answer: 'A' },
        { id: 20, options: { A: 'since', B: 'during', C: 'for' }, answer: 'C' },
        { id: 21, options: { A: 'under', B: 'over', C: 'until' }, answer: 'B' },
        { id: 22, options: { A: 'has', B: 'makes', C: 'goes' }, answer: 'A' },
        { id: 23, options: { A: 'give', B: 'change', C: 'take' }, answer: 'B' },
        { id: 24, options: { A: 'marks', B: 'studies', C: 'information' }, answer: 'B' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'went' },
      passages: [
        {
          label: 'A school trip to the theatre',
          content: "Last week, everyone in my class [0] on a trip to the theatre. We travelled there [25] coach. The theatre is about 10 kilometres away from school, so it was much [26] far to walk. The play was Romeo and Juliet by William Shakespeare. In fact, it's probably the [27] famous of all the plays that Shakespeare wrote. We've studied it at school, so I knew [28] it's about. It's a love story, but it's also the saddest play I [29] ever seen. At the end, several [30] the people in my class were crying. But I loved it!",
        },
      ],
      questions: [
        { id: 25, answers: ['by'] },
        { id: 26, answers: ['too'] },
        { id: 27, answers: ['most'] },
        { id: 28, answers: ['what'] },
        { id: 29, answers: ['have'] },
        { id: 30, answers: ['of'] },
      ],
    },
  },
  {
    id: 'ket-trainer1-test3',
    title: 'Trainer 1 · Test 3',
    source: {
      file: 'A2 Key for Schools Trainer 1 (Second Edition).pdf',
      collection: 'A2 Key for Schools Trainer 1',
      test: 3,
      pages: '78–87',
      answerPage: 191,
      verified: true,
      verifiedParts: [
        1,
        2,
        3,
        4,
        5
      ]
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1,
          type: 'text',
          from: 'Adam',
          to: 'John',
          content: 'John,\n' +
            "You know I said that football practice will be on Wednesday ... Well, it isn't – it's on Thursday. Sorry! See you there.\n" +
            'Cheers, Adam',
          question: 'Why has Adam written this message?',
          options: {
            A: 'to ask if John wants to play football',
            B: "to tell John that Adam can't play football",
            C: 'to let John know about a change of plan'
          },
          answer: 'C'
        },
        {
          id: 2,
          type: 'notice',
          content: 'SCHOOL FESTIVAL OF BOOKS\n' +
            'Meet Ralph Sparks.\n' +
            'Hear how he got ideas for his books, including History of Exploring the New World.\n' +
            'Thurs 9 a.m. Room D31.',
          question: 'Pupils can',
          options: {
            A: 'buy books.',
            B: 'read about explorers.',
            C: 'come and listen to a writer.'
          },
          answer: 'C'
        },
        {
          id: 3,
          type: 'notice',
          content: 'Science Museum trip next Friday\n' +
            'Tickets are available for $4 (for coach transport to the museum, and for museum entry).\n' +
            "If you're interested, see Mr Goss.",
          options: {
            A: 'You can now buy tickets for the museum trip.',
            B: 'Tell Mr Goss how you want to travel to the museum.',
            C: 'Mr Goss will tell you if you need a ticket to the museum.'
          },
          answer: 'A'
        },
        {
          id: 4,
          type: 'text',
          from: 'Lizzie',
          to: 'Jenny',
          content: 'Jenny,\n' +
            "I think I left my scarf in your flat after the party. Have you seen it? Otherwise I'll buy another one.\n" +
            'Lizzie',
          question: 'Why has Lizzie written this?',
          options: {
            A: 'to invite Jenny to a party',
            B: 'to tell Jenny about a shopping trip',
            C: "to ask about something that she's lost"
          },
          answer: 'C'
        },
        {
          id: 5,
          type: 'text',
          from: 'Mike',
          to: 'Dave',
          content: 'Hi Dave,\n' +
            "I broke my tennis racket. Can I use yours? I'll give it back in maths tomorrow. By the way, wasn't the homework difficult?\n" +
            'Mike',
          question: 'Mike wants to',
          options: {
            A: 'play tennis with Dave.',
            B: 'borrow something from Dave.',
            C: 'get help from Dave with the homework.'
          },
          answer: 'B'
        },
        {
          id: 6,
          type: 'notice',
          content: 'Mr Gregson is away today.\n' +
            'Class 3, at 9 a.m., please go and join Class 4 in Room 7C for geography. Mr Gregson will be back tomorrow.',
          options: {
            A: "There isn't a geography lesson tomorrow.",
            B: "Class 4's lesson is happening at a different time today.",
            C: 'There will be more people in Room 7C than usual today.'
          },
          answer: 'C'
        }
      ]
    },
    part2: {
      title: 'Three teenage sports superstars',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A',
          name: 'Gaurika Singh, swimmer',
          text: 'Gaurika is from Nepal, and she was the only under-14-year-old to take part in the 2016 Olympics in Rio de Janeiro. She swam the 100 metres backstroke for Nepal. Home for Gaurika these days is in the UK, and she trains at the Copthall Swimming Club, where the coaches have trained other world-class swimmers. Her father, Paras Singh, travels with her around the world when she goes to a competition.'
        },
        {
          label: 'B',
          name: 'Tracy Austin, tennis player',
          text: "When Tracy Austin was given a car as a prize in a tennis competition in Stuttgart, Germany, she was 15 and still too young to drive, but she was already a professional tennis player. Then, at the age of 17, the American became the youngest ever sports person to earn a million dollars. Before long, she was the world's number one player. These days, she often appears on TV, talking about tennis matches at major competitions."
        },
        {
          label: 'C',
          name: 'Nadia Comăneci, gymnast',
          text: 'When Romanian gymnast Nadia took part in the Olympic Games in Montreal, Canada, in 1976, she immediately became one of the most famous sports people in the world. She got perfect scores of 10.0 in seven different events. Everyone thought that nobody could do this and, in fact, 9.9 was the highest number that the score board could show. She did so well that she helped large numbers of people become interested in gymnastics.'
        }
      ],
      questions: [
        {
          id: 7,
          text: 'Which sports person now works as a journalist?',
          answer: 'B'
        },
        {
          id: 8,
          text: 'Which sports person made her sport more popular?',
          answer: 'C'
        },
        {
          id: 9,
          text: "Which sports person won something that she couldn't use?",
          answer: 'B'
        },
        {
          id: 10,
          text: 'Which sports person became rich when she was young?',
          answer: 'B'
        },
        {
          id: 11,
          text: 'Which sports person was the youngest person in a competition?',
          answer: 'A'
        },
        {
          id: 12,
          text: 'Which sports person did something that people believed was not possible?',
          answer: 'C'
        },
        {
          id: 13,
          text: 'Which sports person was born in one country and now lives in another?',
          answer: 'A'
        }
      ]
    },
    part3: {
      title: 'Isabella Rose Taylor',
      author: '',
      instructions: 'For each question, choose the correct answer.',
      passage: 'Lots of people become good at something when they are young. And quite a lot of children know what career they want to follow when they are older. But not everyone opens their own company. This is exactly what Isabella Rose Taylor has done. She started designing clothes when she was eight years old.\n' +
        '\n' +
        'At the time, she was a keen painter. She used a lot of reds, blues and yellows, and these colours helped her to think of new clothes which she could make.\n' +
        '\n' +
        'When she started designing and making clothes, Isabella just made clothes for fun. But people liked her designs, so soon she started selling them online. Now she has a business and takes part in fashion shows. She runs her business from the family home, where she has made one room into an office, and another into a studio where the clothes are made.\n' +
        '\n' +
        "Isabella has also found time to finish school and get a college degree. She's intelligent, and she has thousands of followers online who love her stuff. It's brilliant that she already has people who work for her. Above all, she really knows what is needed to succeed in the world of fashion. And I am sure that she will.\n" +
        '\n' +
        "'The way I see it is I get to follow my dream and be a teenager at the same time. I think I'm pretty lucky,' she says.",
      questions: [
        {
          id: 14,
          text: 'What does the writer say is unusual about Isabella Rose Taylor?',
          options: {
            A: 'She planned her future career when she was very young.',
            B: 'She started her own business when she was very young.',
            C: 'She got interested in fashion when she was very young.'
          },
          answer: 'B'
        },
        {
          id: 15,
          text: 'What does Isabella say about painting and making clothes?',
          options: {
            A: 'It is important to paint good pictures of clothes.',
            B: 'The colours in her paintings gave her ideas for clothes to make.',
            C: 'She uses paint to put her favourite colours on the clothes she makes.'
          },
          answer: 'B'
        },
        {
          id: 16,
          text: "What do we learn about Isabella's home?",
          options: {
            A: 'Everything for her business is done in the same room at home.',
            B: "Her home is too small, so she's looking for another one.",
            C: "She's made changes to her home so that she can work there."
          },
          answer: 'C'
        },
        {
          id: 17,
          text: 'Why does the writer think that Isabella will do well in the future?',
          options: {
            A: 'She is already very popular online.',
            B: 'She understands the fashion business.',
            C: 'She has brilliant people who work for her.'
          },
          answer: 'B'
        },
        {
          id: 18,
          text: 'What is the best title for the article?',
          options: {
            A: "The girl who can't wait to start working in fashion soon",
            B: 'The problem with working and studying',
            C: 'A hobby that is becoming a career'
          },
          answer: 'C'
        }
      ]
    },
    part4: {
      title: 'Ferry to School',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'Most pupils go to school each day on foot or by car, but Jordan Basford is different. He lives on the Scottish island of Egilsay. There, the school had to ',
        " because there weren't any other pupils. The nearest school is in Rousay, across the sea. His family have a boat, but it is small, and they can ",
        ' use it in good weather. A much larger boat is ',
        ' in bad weather. So every day, Jordan has to ',
        " the ferry across the sea to go to school. He usually comes back home afterwards, but sometimes he phones home to say that he's ",
        " the night at a friend's house instead. 'I know I have to travel a long ",
        " to school each day,' he says. 'But I don't mind.'"
      ],
      questions: [
        {
          id: 19,
          options: {
            A: 'close',
            B: 'complete',
            C: 'finish'
          },
          answer: 'A'
        },
        {
          id: 20,
          options: {
            A: 'almost',
            B: 'only',
            C: 'nearly'
          },
          answer: 'B'
        },
        {
          id: 21,
          options: {
            A: 'needed',
            B: 'liked',
            C: 'had'
          },
          answer: 'A'
        },
        {
          id: 22,
          options: {
            A: 'travel',
            B: 'make',
            C: 'catch'
          },
          answer: 'C'
        },
        {
          id: 23,
          options: {
            A: 'resting',
            B: 'staying',
            C: 'sleeping'
          },
          answer: 'B'
        },
        {
          id: 24,
          options: {
            A: 'way',
            B: 'transport',
            C: 'mile'
          },
          answer: 'A'
        }
      ]
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: {
        number: 0,
        answer: 'the'
      },
      passages: [
        {
          from: 'Jake',
          to: '',
          label: 'Email',
          content: 'Hi guys!\n' +
            '\n' +
            "This is [0] best holiday ever! Plakias is such [25] beautiful place. The meals in the hotel are fantastic. For breakfast, you can have as [26] as you want. I usually have yoghurt with lots of fruit. There's lots for everyone in my family [27] do, so we're all enjoying it. Tomorrow I'm going to try windsurfing [28] the first time. I'm really excited because I [29] never done it before, but Dad says it's easy. In fact, I love it here so much that I [30] like to come back next year!\n" +
            '\n' +
            'See you soon.\n' +
            '\n' +
            'Jake'
        }
      ],
      questions: [
        {
          id: 25,
          answers: [
            'a'
          ]
        },
        {
          id: 26,
          answers: [
            'much'
          ]
        },
        {
          id: 27,
          answers: [
            'to'
          ]
        },
        {
          id: 28,
          answers: [
            'for'
          ]
        },
        {
          id: 29,
          answers: [
            'have',
            "'ve"
          ]
        },
        {
          id: 30,
          answers: [
            'would',
            "'d"
          ]
        }
      ]
    }
  },
  {
    id: 'ket-trainer1-test4',
    title: 'Trainer 1 · Test 4',
    source: {
      file: 'A2 Key for Schools Trainer 1 (Second Edition).pdf',
      collection: 'A2 Key for Schools Trainer 1',
      test: 4,
      pages: '93–102',
      answerPage: 192,
      verified: true,
      verifiedParts: [
        1,
        2,
        3,
        4,
        5
      ]
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1,
          type: 'ad',
          content: 'COMPUTER GAMES SHOW\n' +
            'Buy two tickets and get the third one half price.\n' +
            'Hurry! Last few days of offer.\n' +
            'Only until the end of the week.',
          options: {
            A: 'There is 30% off all tickets.',
            B: 'You can save money this week.',
            C: 'Tickets are only available this week.'
          },
          answer: 'B'
        },
        {
          id: 2,
          type: 'notice',
          content: "We can only take you on the school trip if your parents have said it's OK. Please ask them to fill in the form.",
          options: {
            A: 'Parents can come on the trip if they want.',
            B: 'Pupils must fill in a form and show it to their parents.',
            C: 'The school can take pupils on the trip if their parents let them go.'
          },
          answer: 'C'
        },
        {
          id: 3,
          type: 'web',
          content: "The school's sports hall is used by all pupils for gym and indoor sports. There is also an outdoor area for hockey and football.",
          options: {
            A: 'describing the sports lessons at the school.',
            B: 'explaining where you can do sports at the school.',
            C: 'saying that the pupils at the school are good at sports.'
          },
          answer: 'B'
        },
        {
          id: 4,
          type: 'text',
          from: 'Mark',
          to: 'Jim',
          content: 'Jim,\n' +
            'Any chance your mum could take me home in the car after school today? I forgot to bring the money for my bus ticket.\n' +
            'Mark',
          question: 'What does Mark want to do?',
          options: {
            A: 'borrow some money',
            B: 'travel home with Jim',
            C: 'invite Jim to visit him'
          },
          answer: 'B'
        },
        {
          id: 5,
          type: 'notice',
          content: "How about joining the school singing group? It doesn't matter if you can't read music. All staff and pupils welcome! Mondays after lessons at 4 p.m.",
          question: 'Who can join the singing group?',
          options: {
            A: 'anyone at the school',
            B: 'pupils who have music lessons',
            C: 'people who can already read music'
          },
          answer: 'A'
        },
        {
          id: 6,
          type: 'notice',
          content: 'If you are not well and miss a class, please ask a classmate to tell you what was taught.',
          question: 'Who is this message for?',
          options: {
            A: 'pupils who are feeling ill',
            B: "pupils who couldn't go to a lesson",
            C: 'pupils who would like to help their friends'
          },
          answer: 'B'
        }
      ]
    },
    part2: {
      title: 'Cookery books for young people',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A',
          name: 'My First Cookbook',
          text: "Lenard Minnow's last cookery book was a huge success across the world. And now, he has written a cookery book just for children. It has lots of lovely reading activities, so that children can get to know the names of more unusual foods. It explains in an easy-to-read way how to cook and makes it clear that cooking can be a hobby that young and old can really enjoy."
        },
        {
          label: 'B',
          name: 'Cooking for Students',
          text: "The idea for this book came when Cormac O'Dally's two sons went away to university. They never cooked and had no idea what to do in the kitchen, so Cormac wrote this book to help them. The photo on the cover of the book shows Cormac and his sons laughing and enjoying the food together. Students who use this book won't win prizes for great new food ideas. The meals are very simple, like cheese on toast, but they're easy to prepare and good for you, too."
        },
        {
          label: 'C',
          name: 'Everybody Can Cook',
          text: "With its 'look-as-you-cook' photos, you can see the author doing everything that you need to do in this wonderful new book. And, as the title says, you'll soon be able to make tasty meals. Many of them come from all four corners of the world. The author received £4,000 when the book was chosen as Cookbook of the Year in a competition this year."
        }
      ],
      questions: [
        {
          id: 7,
          text: 'Which book won a prize?',
          answer: 'C'
        },
        {
          id: 8,
          text: 'Which book has healthy recipes?',
          answer: 'B'
        },
        {
          id: 9,
          text: 'Which book shows that cooking can be fun?',
          answer: 'A'
        },
        {
          id: 10,
          text: 'Which book has dishes from different countries?',
          answer: 'C'
        },
        {
          id: 11,
          text: 'Which book teaches words to talk about food?',
          answer: 'A'
        },
        {
          id: 12,
          text: "Which book is about food that the writer's family liked?",
          answer: 'B'
        },
        {
          id: 13,
          text: 'Which book has pictures of someone preparing the food?',
          answer: 'C'
        }
      ]
    },
    part3: {
      title: 'An amazing stay at the Ocean View Hotel',
      author: '',
      instructions: 'For each question, choose the correct answer.',
      passage: "I'm usually sad to say goodbye to my cousins after visiting them in Australia. But last June I wasn't. We had to change planes in the Middle East on the way back and had to stay overnight. I just couldn't wait to get to our hotel.\n" +
        '\n' +
        "The first thing I noticed in the hotel was all the glass. It was really bright, so I don't know why all the lights were on in the building! There was also loud rock music playing, which I loved (but my parents didn't!). There weren't many people waiting at the reception, so we were soon in our rooms.\n" +
        '\n' +
        "The garden wasn't what I expected. 'Dad,' I said, 'you told me there was a pool!' He took me back into the reception area and then up in the lift to the 39th floor and out onto the top of the building. 'Here it is,' he said. It was amazing! Swimming under the clouds was awesome.\n" +
        '\n' +
        "I've stayed in some great hotels around the world, but nothing as cool as that one! I saw photographs of it before I went, but they don't really show how large the building is. I couldn't believe it. Everything is huge – the building, the pool, the meals (which were delicious, too, by the way)! There's so much to do and see there. I hope we can go back again and stay for longer!",
      questions: [
        {
          id: 14,
          text: 'The writer says that last June, she felt',
          options: {
            A: 'excited about where she was going.',
            B: 'sad because she was leaving her cousins.',
            C: 'angry because of the delay in her journey.'
          },
          answer: 'A'
        },
        {
          id: 15,
          text: 'What was the hotel like inside?',
          options: {
            A: 'dark',
            B: 'noisy',
            C: 'busy'
          },
          answer: 'B'
        },
        {
          id: 16,
          text: "Where was the hotel's pool?",
          options: {
            A: 'in the hotel garden',
            B: 'on the roof of the hotel',
            C: "close to the hotel's reception area"
          },
          answer: 'B'
        },
        {
          id: 17,
          text: 'What do we learn about the writer in the last paragraph?',
          options: {
            A: "She hasn't visited many hotels in her life.",
            B: "She didn't have time to see everything in the hotel.",
            C: "She didn't know the hotel is so big."
          },
          answer: 'C'
        },
        {
          id: 18,
          text: 'Why has the writer written this text?',
          options: {
            A: 'to describe what the hotel looks like',
            B: 'to say how the hotel could improve',
            C: 'to explain why she loved the hotel'
          },
          answer: 'C'
        }
      ]
    },
    part4: {
      title: 'The Museum of Childhood',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'The Museum of Childhood in Edinburgh is full of variety. Visitors can ',
        ' dolls houses, toy cars and much more. There is everything from toy soldiers to board ',
        '. The museum was started by a man called Patrick Murray, who ',
        " many toys during his life and wanted to show them to the public. But it's more than ",
        ' a museum of toys. It explores all parts of growing ',
        ', and its exhibitions include lots of different things, from storybooks to baby ',
        '. The museum is easy to find in the centre of Edinburgh and is open all year.'
      ],
      questions: [
        {
          id: 19,
          options: {
            A: 'watch',
            B: 'look',
            C: 'see'
          },
          answer: 'C'
        },
        {
          id: 20,
          options: {
            A: 'games',
            B: 'competitions',
            C: 'matches'
          },
          answer: 'A'
        },
        {
          id: 21,
          options: {
            A: 'picked',
            B: 'collected',
            C: 'took'
          },
          answer: 'B'
        },
        {
          id: 22,
          options: {
            A: 'already',
            B: 'just',
            C: 'yet'
          },
          answer: 'B'
        },
        {
          id: 23,
          options: {
            A: 'up',
            B: 'out',
            C: 'away'
          },
          answer: 'A'
        },
        {
          id: 24,
          options: {
            A: 'snack',
            B: 'food',
            C: 'meal'
          },
          answer: 'B'
        }
      ]
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: {
        number: 0,
        answer: 'TO'
      },
      passages: [
        {
          from: 'Gemma',
          to: 'Anne',
          label: 'Email',
          content: 'Hi Anne,\n' +
            '\n' +
            "I know you have piano lessons. I want [0] start too, and I remember you said your teacher doesn't charge too [25] . What's he like? Is he good [26] explaining things? Can you let [27] know soon?\n" +
            '\n' +
            'Cheers,\n' +
            'Gemma'
        },
        {
          from: 'Anne',
          to: 'Gemma',
          label: 'Email',
          content: 'Hi Gemma,\n' +
            '\n' +
            "My piano teacher is called Ben. He's funny and I always have [28] good time in the lessons. But I don't know if I [29] getting any better! Anyway, if you're looking [30] a teacher, then I think Ben will be perfect for you.\n" +
            '\n' +
            'Good luck!\n' +
            'Anne'
        }
      ],
      questions: [
        {
          id: 25,
          answers: [
            'much'
          ]
        },
        {
          id: 26,
          answers: [
            'at'
          ]
        },
        {
          id: 27,
          answers: [
            'me'
          ]
        },
        {
          id: 28,
          answers: [
            'a'
          ]
        },
        {
          id: 29,
          answers: [
            'am',
            "'m"
          ]
        },
        {
          id: 30,
          answers: [
            'for'
          ]
        }
      ]
    }
  },
  {
    id: 'ket-trainer1-test5',
    title: 'Trainer 1 · Test 5',
    source: {
      file: 'A2 Key for Schools Trainer 1 (Second Edition).pdf',
      collection: 'A2 Key for Schools Trainer 1',
      test: 5,
      pages: '109–118',
      answerPage: 193,
      verified: true,
      verifiedParts: [
        1,
        2,
        3,
        4,
        5
      ]
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1,
          type: 'notice',
          content: 'School singing practice starts this week later than 1:25, as we must all be ready by 1:30.\n' +
            'Thank you.',
          question: 'You can read this notice about',
          options: {
            A: 'Singing practice starts at 1:25.',
            B: 'There is no singing practice this week.',
            C: 'Please arrive early for singing practice.'
          },
          answer: 'C'
        },
        {
          id: 2,
          type: 'poster',
          content: "You may return games that aren't opened to the shop and get your money back.",
          question: 'You can return a game if',
          options: {
            A: "it doesn't work.",
            B: "you don't like it.",
            C: "you haven't used it."
          },
          answer: 'C'
        },
        {
          id: 3,
          type: 'web',
          content: 'Book club\n' +
            'Do you enjoy discussing books with classmates? Yes? Then come along to the book club. To join, contact Mr Sponforth.',
          question: 'Speak to Mr Sponforth if',
          options: {
            A: 'you are interested in becoming a member of the book club.',
            B: 'you would like to borrow a book from the club.',
            C: 'you have read the same book as your classmates.'
          },
          answer: 'A'
        },
        {
          id: 4,
          type: 'text',
          from: 'Davey',
          to: 'Dad',
          content: "Hi Dad! It's Sam's birthday, so I want to buy a present. Could you lend me enough to get him something from the bookshop? Thanks! Davey",
          question: 'Davey wants to',
          options: {
            A: 'go shopping with his dad.',
            B: 'borrow some money.',
            C: 'ask what to get for Sam.'
          },
          answer: 'B'
        },
        {
          id: 5,
          type: 'notice',
          content: 'HONEY CAFÉ\n' +
            'Unfortunately two of our staff are ill today. (We must have at least three to open.)\n' +
            'Open at 9 a.m. tomorrow.',
          question: 'The notice means',
          options: {
            A: 'The café is closed today.',
            B: 'We are looking for more staff.',
            C: 'Tomorrow we open at a different time.'
          },
          answer: 'A'
        },
        {
          id: 6,
          type: 'ad',
          content: "Smiford's Computer Store\n" +
            'Bring us your old laptop* when you get a new one from us and receive £100 off.\n' +
            '*must still work',
          options: {
            A: 'We repair old laptops.',
            B: 'Old laptops are for sale for £100.',
            C: 'Save money when you buy a new laptop.'
          },
          answer: 'C'
        }
      ]
    },
    part2: {
      title: 'Three teenage business people',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A',
          name: 'Noa Mintz',
          text: "Noa started a business when she was 8, holding art classes for children. Two years later, she began a party planning business for children. She doesn't think that went very well. She thinks that because she was very young, the business wasn't exactly perfect. These days, she is sure that she knows what she's doing, as she has a business that finds staff to look after other people's children. She also pays someone to help her with the business."
        },
        {
          label: 'B',
          name: 'Mikaila Ulmer',
          text: "Mikaila has opened a company called Me and the Bees. It sells lemonade, which is made with local honey. The drink is sold in several shops in Mikaila's home town and online, and some of the money is given to nature groups that work with bees and other insects. Mikaila also shows children and their families how to get ideas to make money. She says, 'I think I've got lots of good advice for them.'"
        },
        {
          label: 'C',
          name: 'Jessie Chong',
          text: "When Jessie was really young, her parents told her that she should find something that she loved doing. She's happy she did because she thinks everyone should love their work. Jessie makes jewellery and sells it online. She looks at flowers and plants, and then uses the shapes and colours she sees in her jewellery."
        }
      ],
      questions: [
        {
          id: 7,
          text: 'Which person is helping wildlife?',
          answer: 'B'
        },
        {
          id: 8,
          text: 'Which person has given someone a job?',
          answer: 'A'
        },
        {
          id: 9,
          text: 'Which person gets ideas for her business from nature?',
          answer: 'C'
        },
        {
          id: 10,
          text: 'Which person wants to teach children about business?',
          answer: 'B'
        },
        {
          id: 11,
          text: 'Which person has opened other companies before?',
          answer: 'A'
        },
        {
          id: 12,
          text: 'Which person is pleased that she took some good advice?',
          answer: 'C'
        },
        {
          id: 13,
          text: 'Which person thinks she has improved as a business person?',
          answer: 'A'
        }
      ]
    },
    part3: {
      title: 'Where playing video games IS real life',
      author: '',
      instructions: 'For each question, choose the correct answer.',
      passage: "Seo-yun Cho doesn't have time for hobbies because she spends all her time playing video games. 'I practise as much as I can so I will improve,' she says. 'This is what I really need to do.'\n" +
        '\n' +
        "Seo-yun and her friends are members of KS Fireflies 6, a video game team. She and the other members share a flat in Seoul's business district. Since they all left school, they have managed to make playing video games their life.\n" +
        '\n' +
        "Every day, Seo-yun gets up after a good night's sleep at 10 a.m. and goes for a jog for an hour, before sitting down at her computer and starting to play. She and her friends have a few breaks to eat and relax during the day and the evening, but Seo-yun thinks that after midnight is when she has more fun playing than at any other time. She usually goes to bed at 3 a.m.\n" +
        '\n' +
        'Seo-yun and the rest of the team need to train hard and keep fit, as top players need to do about 500 mouse-clicks a minute. Video games are big business in South Korea, and the best players (like KS Fireflies 6) usually become even better-known than top baseball or volleyball players.\n' +
        '\n' +
        "Some people might get bored after playing video games for an hour or two. But these guys are actually getting paid to do something they would even like to do for free! Many of them say that it's the best job in the world.",
      questions: [
        {
          id: 14,
          text: 'What is the most important thing for Seo-yun Cho?',
          options: {
            A: 'trying new video games',
            B: 'getting better at video games',
            C: 'finding enough time to play video games'
          },
          answer: 'B'
        },
        {
          id: 15,
          text: 'Seo-yun and her friends',
          options: {
            A: 'live together.',
            B: 'went to school together.',
            C: 'have a business together.'
          },
          answer: 'A'
        },
        {
          id: 16,
          text: 'What does Seo-yun say about playing games at night?',
          options: {
            A: "It's when she feels happiest.",
            B: "It's the time that she most enjoys playing.",
            C: 'It sometimes makes her tired.'
          },
          answer: 'B'
        },
        {
          id: 17,
          text: 'What does the writer say about sports?',
          options: {
            A: 'Seo-yun and her friends play a lot of sports video games.',
            B: 'Seo-yun and her friends play sports to get fit.',
            C: 'Seo-yun and her friends are more famous than some sports players.'
          },
          answer: 'C'
        },
        {
          id: 18,
          text: 'Why does the writer think that Seo-yun and her friends are lucky?',
          options: {
            A: 'because they earn a lot of money',
            B: "because they don't need to look for another job",
            C: 'because they are doing something that they love'
          },
          answer: 'C'
        }
      ]
    },
    part4: {
      title: 'Preparing to go camping with the school',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'From choosing the right equipment to remembering to take spare socks, campers need to be prepared! Keen camper, Jody Walterson, 16, explains why.\n' +
          '\n' +
          'Most pupils are really excited when they are taken on a school camping ',
        ". They're becoming really popular these days. For example, my class goes camping at ",
        " once a year. It's usually just for one night, but it's sometimes ",
        '.\n\nParents and children need to work together to ',
        ' sure that everything goes well. Part of this is deciding what to take – this is a really important ',
        ". It's a good idea to take more clothes than you think you will ",
        ". So, if you're going for two nights, take three pairs of socks. And don't forget your toothbrush or a charger for your phone!"
      ],
      questions: [
        {
          id: 19,
          options: {
            A: 'way',
            B: 'journey',
            C: 'trip'
          },
          answer: 'C'
        },
        {
          id: 20,
          options: {
            A: 'little',
            B: 'least',
            C: 'low'
          },
          answer: 'B'
        },
        {
          id: 21,
          options: {
            A: 'longer',
            B: 'bigger',
            C: 'higher'
          },
          answer: 'A'
        },
        {
          id: 22,
          options: {
            A: 'get',
            B: 'do',
            C: 'make'
          },
          answer: 'C'
        },
        {
          id: 23,
          options: {
            A: 'job',
            B: 'work',
            C: 'occupation'
          },
          answer: 'A'
        },
        {
          id: 24,
          options: {
            A: 'have',
            B: 'like',
            C: 'need'
          },
          answer: 'C'
        }
      ]
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: {
        number: 0,
        answer: 'ABOUT'
      },
      passages: [
        {
          from: 'Joanna',
          to: 'Emma',
          label: 'Email',
          content: 'Hi Emma,\n' +
            '\n' +
            "At school, you said that you don't have any plans for the weekend.\n" +
            "Well, how (0) meeting on Saturday morning? I thought maybe we could go (25) a bike ride. We can go to Moreton-on-Sea, and get something (26) eat. I went there by bike last year. In fact, there were six (27) us, and we had (28) really amazing day. I don't think it will take more (29) four hours to get there and back. Can you let (30) know if you can come?\n" +
            '\n' +
            "Hopefully, I'll see you then!\n" +
            '\n' +
            'Cheers,\n' +
            'Joanna'
        }
      ],
      questions: [
        {
          id: 25,
          answers: [
            'for',
            'on'
          ]
        },
        {
          id: 26,
          answers: [
            'to'
          ]
        },
        {
          id: 27,
          answers: [
            'of'
          ]
        },
        {
          id: 28,
          answers: [
            'a'
          ]
        },
        {
          id: 29,
          answers: [
            'than'
          ]
        },
        {
          id: 30,
          answers: [
            'me'
          ]
        }
      ]
    }
  },
  {
    id: 'ket-trainer1-test6',
    title: 'Trainer 1 · Test 6',
    source: {
      file: 'A2 Key for Schools Trainer 1 (Second Edition).pdf',
      collection: 'A2 Key for Schools Trainer 1',
      test: 6,
      pages: '125–134',
      answerPage: 194,
      verified: true,
      verifiedParts: [
        1,
        2,
        3,
        4,
        5
      ]
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1,
          type: 'notice',
          content: "Please don't eat ice creams here. They aren't good for our books! Please finish them outside before you come in.\n" +
            'Thanks.',
          question: 'Where might you see this?',
          options: {
            A: 'in a café',
            B: 'in a library',
            C: 'in a picnic area'
          },
          answer: 'B'
        },
        {
          id: 2,
          type: 'notice',
          content: 'FOUND\n' +
            'One school bag\n' +
            'Inside: one key and a phone\n' +
            'Contact Mrs Thompson if you think it might be yours.',
          question: 'Speak to Mrs Thompson if',
          options: {
            A: "you've got an extra key.",
            B: 'you have lost something.',
            C: 'you know where the bag is.'
          },
          answer: 'B'
        },
        {
          id: 3,
          type: 'text',
          from: 'Zeta',
          to: 'Linda',
          content: "Hi Linda. I have bought two tickets for tomorrow afternoon's cinema film for me and Jim. But he can't come. Are you interested?\n" +
            'Zeta',
          question: 'Zeta has written to',
          options: {
            A: 'invite Linda to go and see a film.',
            B: "ask Linda what films she's interested in.",
            C: 'tell Linda where to meet Jim tomorrow.'
          },
          answer: 'A'
        },
        {
          id: 4,
          type: 'text',
          from: 'Flora',
          to: 'Tony',
          content: "Congratulations, Tony! I heard that you passed maths! Have a great birthday. And next time I write to you, you'll be 15!\n" +
            'Best wishes,\n' +
            'Flora',
          question: 'What has Tony just done?',
          options: {
            A: 'met Flora',
            B: 'had a birthday',
            C: 'done well in an exam'
          },
          answer: 'C'
        },
        {
          id: 5,
          type: 'notice',
          content: "NO EXIT\nThe door isn't working correctly. Use door opposite to get to the science room.",
          question: 'The notice means',
          options: {
            A: 'Please go to the science room now.',
            B: "You can't go out through this door.",
            C: 'The science laboratory is being used by other people today.'
          },
          answer: 'B'
        },
        {
          id: 6,
          type: 'web',
          content: 'Tom:\n' +
            "Thanks to all my guests! It's brilliant you could come. Hope you've made new friends. I'll add the pictures I took soon!",
          question: 'Tom is writing about',
          options: {
            A: 'a party that he had.',
            B: 'a picture that he saw.',
            C: 'some people that he has just met.'
          },
          answer: 'A'
        }
      ]
    },
    part2: {
      title: 'Three teenagers describe their hobbies',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A',
          name: 'Melissa, runner',
          text: "I started running about a year ago. At first, I just ran 1 or 2 kilometres, but now I do about 10. My speed is improving too. I've joined a running club in the town centre. I didn't know any of the members before, but now most of them are my mates. My dad was a keen runner when he was younger – he was really fit, but he stopped when he hurt his leg. Actually, I need to order some new running shoes – just a simple pair. I don't think the expensive ones make you run faster!"
        },
        {
          label: 'B',
          name: 'Sharon, skateboarder',
          text: "I go skateboarding most evenings in the park. I suppose that's quite a lot, but the park is only a minute or two from our apartment, and I only stay there half an hour or so. Although I stay longer when my friends are there. Sometimes my cousin's there too. He's a beginner, and I'm teaching him a few moves. He's starting to get really good!"
        },
        {
          label: 'C',
          name: 'Latifa, rock climber',
          text: "Two of my best friends suggested I should start rock climbing, so now the three of us do it together. The mother of one of them takes us once or twice a month, but I'd like to do it every week. When I started, I didn't know you need to get so much stuff – and it isn't exactly cheap! I really love it. I don't think I'll ever get bored of climbing!"
        }
      ],
      questions: [
        {
          id: 7,
          text: 'Which person has made new friends because of her hobby?',
          answer: 'A'
        },
        {
          id: 8,
          text: 'Which person does her hobby near her home?',
          answer: 'B'
        },
        {
          id: 9,
          text: 'Which person says she is getting better at her hobby?',
          answer: 'A'
        },
        {
          id: 10,
          text: 'Which person does her hobby with a family member?',
          answer: 'B'
        },
        {
          id: 11,
          text: 'Which person wants to do her hobby more often?',
          answer: 'C'
        },
        {
          id: 12,
          text: 'Which person needs to buy something for her hobby?',
          answer: 'A'
        },
        {
          id: 13,
          text: 'Which person says her hobby was more expensive than she thought?',
          answer: 'C'
        }
      ]
    },
    part3: {
      title: 'Would you like to be an astronaut?',
      author: '',
      instructions: 'For each question, choose the correct answer.',
      passage: "You don't have to be Superman to fly in space. Many men and women from many different countries have done it. For example, the European Space Agency (ESA) now has 14 astronauts from 8 different countries.\n" +
        '\n' +
        "The first thing is this – you need to be sure it's the job that you really want to do. It requires a lot of hard work and several years of study at university before astronaut training even begins. Most people start between 27 and 37 years of age. Many astronauts also train to become pilots first.\n" +
        '\n' +
        "Astronauts come from all over Europe and the world, and it's important that they can speak the same languages. They have to speak English, and they are given Russian lessons. Some also learn another language, for example Japanese, as a number of astronauts are Japanese speakers.\n" +
        '\n' +
        "If you are still at school and you'd like to be an astronaut when you're older, it's not too early to start developing the skills you will need. Playing video games is a great thing to do, as it helps you to think quickly and clearly. This is what you will need to do when you travel in space.\n" +
        '\n' +
        "Another good thing to do is sports, especially team sports. They make you fit, but more importantly, they help you learn how to do things together with your colleagues. So, maybe planning a game of football for next weekend isn't a bad idea?",
      questions: [
        {
          id: 14,
          text: 'The first paragraph says that',
          options: {
            A: 'lots of people can be an astronaut.',
            B: 'there are astronauts from all countries.',
            C: 'only 14 people from Europe have become astronauts.'
          },
          answer: 'A'
        },
        {
          id: 15,
          text: 'The writer says',
          options: {
            A: 'you need to be a pilot before you become an astronaut.',
            B: "it's important to know that being an astronaut is right for you.",
            C: 'when you start training to be an astronaut, you must be between 27 and 37.'
          },
          answer: 'B'
        },
        {
          id: 16,
          text: 'Which languages do ESA astronauts know how to speak after training?',
          options: {
            A: 'English and Russian',
            B: 'English and Japanese',
            C: 'English, Japanese and Russian'
          },
          answer: 'A'
        },
        {
          id: 17,
          text: 'Why can playing video games be useful if you want to be an astronaut?',
          options: {
            A: 'There are many video games about space travel.',
            B: 'Video games can teach you to think fast.',
            C: 'Video games help you to understand how computers work.'
          },
          answer: 'B'
        },
        {
          id: 18,
          text: 'How can sports help you to become an astronaut?',
          options: {
            A: 'They help you to get fit.',
            B: 'They give you something to do in your free time.',
            C: 'They help you to work well with other people.'
          },
          answer: 'C'
        }
      ]
    },
    part4: {
      title: 'Cello player wins music competition',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'A 17-year-old musician has won the Young Musician of the Year Prize. Alex Guo was competing ',
        ' her brother and four other musicians under the ',
        ' of 21 to win the prize. The winner was ',
        ' after the young musicians each played on stage with a band. When she ',
        " that she was the winner, she was so excited. 'I just couldn't ",
        " it,' she said. 'Music has always been a ",
        ", but now I want it to be my job, too.'"
      ],
      questions: [
        {
          id: 19,
          options: {
            A: 'over',
            B: 'against',
            C: 'after'
          },
          answer: 'B'
        },
        {
          id: 20,
          options: {
            A: 'age',
            B: 'years',
            C: 'time'
          },
          answer: 'A'
        },
        {
          id: 21,
          options: {
            A: 'taken',
            B: 'found',
            C: 'chosen'
          },
          answer: 'C'
        },
        {
          id: 22,
          options: {
            A: 'heard',
            B: 'listened',
            C: 'agreed'
          },
          answer: 'A'
        },
        {
          id: 23,
          options: {
            A: 'guess',
            B: 'believe',
            C: 'thank'
          },
          answer: 'B'
        },
        {
          id: 24,
          options: {
            A: 'hobby',
            B: 'fun',
            C: 'game'
          },
          answer: 'A'
        }
      ]
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: {
        number: 0,
        answer: 'ARE'
      },
      passages: [
        {
          from: 'Mrs Hammond',
          to: 'Class 9',
          label: 'Email',
          content: 'Dear Class 9,\n' +
            '\n' +
            'Next week, we (0) going to do something different in our English lesson. I want pupils to stand up, and speak to the whole class for one minute about a sport they like doing. It will be an excellent way (25) practise your English. If you (26) like to do this, please (27) me know.\n' +
            '\n' +
            'Mrs Hammond'
        },
        {
          from: 'Andrew',
          to: 'Mrs Hammond',
          label: 'Email',
          content: 'Dear Mrs Hammond,\n' +
            '\n' +
            'Thank you (28) your email.\n' +
            'My favourite sport is football. I love talking about it, and I can (29) everybody about the team I play in (30) Saturday afternoons. I hope that is OK.\n' +
            '\n' +
            'Best wishes,\n' +
            'Andrew'
        }
      ],
      questions: [
        {
          id: 25,
          answers: [
            'to'
          ]
        },
        {
          id: 26,
          answers: [
            'would',
            "'d"
          ]
        },
        {
          id: 27,
          answers: [
            'let'
          ]
        },
        {
          id: 28,
          answers: [
            'for'
          ]
        },
        {
          id: 29,
          answers: [
            'tell',
            'inform'
          ]
        },
        {
          id: 30,
          answers: [
            'on',
            'most'
          ]
        }
      ]
    }
  },
];