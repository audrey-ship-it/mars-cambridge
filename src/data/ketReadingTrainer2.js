// A2 Key for Schools Trainer 2 — Reading and Writing.
// 数据来源：用户提供的《Trainer2学生用书.pdf》扫描件（PDF 页 = 书内页 + 2），答案取自
// 官方 Teacher's Notes & Answer Key 印刷页，逐题核对后写入。未核对的部分不得标志 verified。
// 已知书内印刷错误（按原样转录）：Test 1 Part 2 A 段 “They repetition let visitors…”、
// Q7 “is a good for water sports”；Part 3 官方答案条误印 15C（教师解析明确论证 B 正确，取 B）。
// Test 3 Part 3 官方答案条误印 14B：第一段 “Joyelle asked their mother to pay for classes for Gabby”
// 直接支持 C，且 Test 3-6 无教师解析页，按原文取 C。
// Test 6 按原样转录的书内笔误：Part 2 A 段 “which is losing lots money”（缺 of）、
// Part 3 Q18 选项 A “It can be good thing to do on your own.”（缺 a）。
export const ketReadingTrainer2Tests = [
  {
    id: 'ket-trainer2-test1',
    title: 'Trainer 2 · Test 1',
    source: {
      file: 'Trainer2学生用书.pdf',
      collection: 'A2 Key for Schools Trainer 2',
      test: 1,
      pages: '12–27',
      answerPage: 173,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'notice',
          content: "Rockefeller Zoo\nAdults: £15.50\nChildren under 16: £11.75\nBuy two child tickets to receive a third for free",
          question: 'What do we learn from this notice?',
          options: {
            A: 'There are discounts for everyone who comes to the zoo.',
            B: "Children can only come into the zoo if they're with an adult.",
            C: 'If three children visit the zoo, only two of them must buy a ticket.',
          },
          answer: 'C',
        },
        {
          id: 2, type: 'text', from: 'Harry',
          content: "Hi Jack,\nI'll buy our concert tickets. Shall I get one for your brother too? They're £20 – or £25 to sit at the front.\nHarry",
          question: 'What does Harry want to know?',
          options: {
            A: 'if Jack wants to go to the concert',
            B: 'how much the concert tickets cost',
            C: 'how many tickets to buy for the concert',
          },
          answer: 'C',
        },
        {
          id: 3, type: 'notice',
          content: "Auckland Station\nToo much luggage?\nTake the lift.\nIt's safe and quick.",
          question: 'This sign tells you',
          options: {
            A: 'where to find the lift at the station.',
            B: 'what to do if you have a lot of heavy things to carry.',
            C: 'where to go if something dangerous takes place.',
          },
          answer: 'B',
        },
        {
          id: 4, type: 'notice',
          content: "If adults want to order something from our children's menu for under 13s, just ask!",
          question: 'What is this notice saying?',
          options: {
            A: "The children's menu is only for younger guests.",
            B: "Anyone can order food from the children's menu.",
            C: 'Guests who are 13 or over can have adult meals.',
          },
          answer: 'B',
        },
        {
          id: 5, type: 'notice',
          content: "It's OK not to be OK.\nTalk to us any time.\nWe're here to listen.\nCall us on: 0800 234456",
          question: 'This message is for people who want to',
          options: {
            A: 'receive some helpful advice.',
            B: 'make some new friends.',
            C: 'help people who have problems.',
          },
          answer: 'A',
        },
        {
          id: 6, type: 'notice',
          content: "Today's piano performance will take place at the later time of 2:15.\nIt's still in Room 11.\nSee you there!",
          question: 'Which detail about the concert has changed?',
          options: {
            A: 'when it starts',
            B: 'where it is happening',
            C: 'which instrument is being played',
          },
          answer: 'A',
        },
      ],
    },
    part2: {
      title: 'Three beaches',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Golden Sands, Greece',
          text: "If you've seen the movie Another Camera, you might remember that beautiful beach. Well, that was actually Golden Sands, which is one of the most popular beaches in Greece. They repetition let visitors drive onto the beach with their boats, so they can go sailing and fishing. A lot of people do that, and many photographers travel there for the amazing views of the coast. And just behind the beach is a 700-year-old castle, which looks beautiful in the evening.",
        },
        {
          label: 'B', name: 'Candy Beach, Thailand',
          text: "Thailand has so many great beaches, but Candy Beach is really special. The only way to go there is by sea. Don't worry if you don't have your own boat though, there are lots of places to rent them. There's lots to do and see – it's a perfect place to go windsurfing, or you can just sit on the beach, have an ice cream or read. Just remember that they don't allow any dogs or pets on the beach.",
        },
        {
          label: 'C', name: 'Deep Water Beach, South Africa',
          text: "Most days, thousands of whales come very close to this beach in South Africa. If you're there, you'll probably see them, which is fantastic. You can also see the modern town of Stanway from this lovely beach, but the beach is usually very quiet. That all changes at weekends. Then local people come here to have a barbecue with family and friends. It's often too windy to swim, but nobody worries about that. They're all busy playing football on the beach and having fun!",
        },
      ],
      questions: [
        { id: 7, text: 'Which beach is a good for water sports?', answer: 'B' },
        { id: 8, text: 'Which beach was in a film?', answer: 'A' },
        { id: 9, text: 'Which beach can you only get to by boat?', answer: 'B' },
        { id: 10, text: 'Which beach is near a very old building?', answer: 'A' },
        { id: 11, text: 'Which beach is a popular place to cook a meal?', answer: 'C' },
        { id: 12, text: 'Which beach is a great place to watch wild animals?', answer: 'C' },
        { id: 13, text: 'Which beach do people take a lot of photographs of?', answer: 'A' },
      ],
    },
    part3: {
      title: 'Malala Yousafzai, my hero',
      author: 'Julia Banford',
      instructions: 'For each question, choose the correct answer.',
      passage: "Malala Yousafzai was born in Pakistan. When she was a young girl, she enjoyed attending school in her home town. But one day, all the children were told that girls had to stop coming to class. Now, school was only for boys, and all the girls had to stop going. Malala thought this was not right.\n\nSo she started to speak about this. People said it was dangerous, but she wasn't afraid. She wrote blogs about it in English, and in Pashto, her local language. Some people became angry with Malala, and tried to hurt her. She very nearly died but she had good doctors, and they saved her life.\n\nI think Malala is amazing. She didn't just give a talk to the United Nations in New York aged 16. She also wrote a book about her life (with the help of a British journalist) that year! But that's not all. She also won the Nobel Prize when she was 17. And she had all that success before she even became an adult!\n\nMalala continues to fight for the right to education for all girls. I've read about how she raises money to help them, internationally. I wish I could do that, but I'm not strong enough. I'm grateful that there are people like Malala who make a real difference in the world.\n\nMalala has said 'Let us pick up our books and our pens. One child, one teacher, one book, and one pen can change the world. Education is the only solution.'",
      questions: [
        { id: 14, text: 'At school, what was Malala unhappy about?', options: { A: "Girls couldn't go to school any more.", B: "She didn't like the boys at her school.", C: 'The nearest school was too far from her home.' }, answer: 'A' },
        { id: 15, text: 'What does the writer suggest about Malala in the second paragraph?', options: { A: 'She wanted to be a doctor.', B: 'She was brave to speak out.', C: 'She worked hard at her English.' }, answer: 'B' },
        { id: 16, text: 'Why does the writer think Malala is amazing?', options: { A: 'She wrote a book all by herself.', B: 'She is good at explaining her ideas.', C: 'She did lots of important things while she was still a child.' }, answer: 'C' },
        { id: 17, text: 'In the fourth paragraph, the writer says that she', options: { A: 'is pleased that Malala is helping to change things for girls.', B: 'became more interested in learning because of Malala.', C: 'would like to do the same kind of work as Malala.' }, answer: 'C' },
        { id: 18, text: 'What does Malala say in the last paragraph?', options: { A: 'Studying is really important.', B: 'Teachers have to work very hard.', C: 'Schools need to have good equipment.' }, answer: 'A' },
      ],
    },
    part4: {
      title: 'The future of plastic clothes',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'Most people know that plastic comes from oil. This is why plastic is bad for the environment, ',
        ' single-use plastic like bags and bottles.\n\nBut plastic is everywhere, ',
        ' in our wardrobes. Half your clothes are probably ',
        ' from plastic. For example, you might have nylon shorts, an acrylic dress, or a polyester coat. Plastic is used for warm winter clothes, as well as things that ',
        " you cool in summer. Across the world, clothes factories take nearly 1.5% of all the oil that is used in a year. That's more than Spain uses.\n\nBut it's now ",
        ' to use old plastic to make new clothes. The ',
        ' is, will customers want to buy them?',
      ],
      questions: [
        { id: 19, options: { A: 'especially', B: 'just', C: 'exactly' }, answer: 'A' },
        { id: 20, options: { A: 'almost', B: 'even', C: 'still' }, answer: 'B' },
        { id: 21, options: { A: 'done', B: 'taken', C: 'made' }, answer: 'C' },
        { id: 22, options: { A: 'keep', B: 'put', C: 'stay' }, answer: 'A' },
        { id: 23, options: { A: 'available', B: 'possible', C: 'ready' }, answer: 'B' },
        { id: 24, options: { A: 'advice', B: 'question', C: 'reason' }, answer: 'B' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'am' },
      passages: [
        {
          from: 'Julia Hamilton', to: 'Mr Elphick', label: 'Email',
          content: "Dear Mr Elphick,\n\nI [0] sorry, but I have an appointment [25] the doctor tomorrow at 2:30. This means that I need [26] leave school during our geography lesson. The doctor's surgery is ten minutes away [27] school, so may I leave at 2.20, please?\n\nBest wishes,\nJulia Hamilton (class 5B)",
        },
        {
          from: 'Mr Elphick', to: 'Julia', label: 'Email',
          content: "Dear Julia,\n\nThank you very [28] for your email. Yes, of course it is fine [29] you to leave early. If you need ten minutes to walk there, why don't you leave class at 2.15? Then you will have enough time to get there [30] hurrying.\n\nSee you tomorrow,\nMr Elphick",
        },
      ],
      questions: [
        { id: 25, answers: ['with'] },
        { id: 26, answers: ['to'] },
        { id: 27, answers: ['from'] },
        { id: 28, answers: ['much'] },
        { id: 29, answers: ['for'] },
        { id: 30, answers: ['without'] },
      ],
    },
  },
  {
    id: 'ket-trainer2-test2',
    title: 'Trainer 2 · Test 2',
    source: {
      file: 'Trainer2学生用书.pdf',
      collection: 'A2 Key for Schools Trainer 2',
      test: 2,
      pages: '46–61',
      answerPage: 187,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'notice',
          content: 'Railway station\nThis way to the main exit\nFollow signs for passengers who need taxis',
          question: 'This sign tells you',
          options: {
            A: 'where to go if you want to leave the station.',
            B: 'how to find the right platform for your train.',
            C: "what's the best way to get to the station.",
          },
          answer: 'A',
        },
        {
          id: 2, type: 'notice',
          content: 'Hanwell Gym\nWe can lend you any sports equipment you need.\nPlease return things when you finish.\nOther people may need them too.',
          question: 'What is this message saying?',
          options: {
            A: 'Remember to give back any sports equipment that you borrow.',
            B: 'Please only use sports equipment that belongs to you.',
            C: 'Ask gym staff if you want to buy sports equipment.',
          },
          answer: 'A',
        },
        {
          id: 3, type: 'text', from: 'Holly',
          content: "Hi Ross\nThere's a school concert on 5 or 6 May (not sure which). It sounds brilliant. I can get us tickets, if you're interested.\nHolly",
          question: 'Holly is writing to Ross to',
          options: {
            A: 'check the date of the concert.',
            B: 'ask if he wants to go with her.',
            C: 'tell him she is playing in a concert.',
          },
          answer: 'B',
        },
        {
          id: 4, type: 'notice',
          content: 'Did you know there are lots of careers in theatre like acting, lighting, costumes and so on?\nAsk your acting teacher for more details!',
          question: 'What is this notice doing?',
          options: {
            A: 'telling students about the next school play',
            B: 'giving students information about acting classes',
            C: 'letting students know there are a variety of theatre jobs',
          },
          answer: 'C',
        },
        {
          id: 5, type: 'notice',
          content: "CHESTERFIELD PARK\nThis spring we're growing more flowers for bees and insects than ever before!",
          question: 'What is this message saying?',
          options: {
            A: 'Please help us to keep the park tidy.',
            B: 'We want this park to be a good place for nature.',
            C: 'Visitors must not touch the plants or animals at the park.',
          },
          answer: 'B',
        },
        {
          id: 6, type: 'notice',
          content: "You're welcome to take photos of our pictures, but please don't touch them.\nNo food or drink.\nSnacks are available at the café.",
          question: 'Where might you see this notice?',
          options: {
            A: 'an art museum',
            B: 'in a cafe',
            C: 'in a camera shop',
          },
          answer: 'A',
        },
      ],
    },
    part2: {
      title: 'Three young people with clever ideas',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Richard Turere',
          text: "Richard lives on a farm in Kenya which belongs to his mum and dad. They were losing money because lions often came and killed their cows at night for food. Richard wanted to do something. At first, he tried to use fire, but unfortunately lions weren't scared of it and came back to the farm again. Next, he decided to use lights from old motorbikes, which he connected to a battery. At night, the lights went on and off. The lions saw this and never returned to the farm.",
        },
        {
          label: 'B', name: 'Madison Checketts',
          text: "Madison always thought that beaches should be beautiful, but they aren't when they're covered in old plastic bottles! She hated seeing beaches like this. She knew that there is also plastic in the sea, and that sometimes, turtles and other sea animals might think it is food. So Madison invented a bottle that people can safely eat after they have used it. She believes that the world will be a better place if people don't use plastic any more. Madison's parents are very happy that she has so many great ideas!",
        },
        {
          label: 'C', name: 'Hannah Herbst',
          text: "Hannah had a friend who said that her that her parents didn't have enough money for electricity. So Hannah made a piece of equipment for the family, which makes electricity from the waves in the sea for free. But she doesn't want to sell her invention. She's letting anyone who wants to use her idea to make the equipment for themselves, for free.",
        },
      ],
      questions: [
        { id: 7, text: 'Who wanted to help their parents?', answer: 'A' },
        { id: 8, text: 'Who wanted to make life easier for poorer people?', answer: 'C' },
        { id: 9, text: "Who had an idea that didn't work?", answer: 'A' },
        { id: 10, text: 'Who is sharing their idea with other people?', answer: 'C' },
        { id: 11, text: 'Who did not like how a place looked?', answer: 'B' },
        { id: 12, text: 'Who has helped to save the lives of some animals?', answer: 'A' },
        { id: 13, text: 'Who would like people to stop using something?', answer: 'B' },
      ],
    },
    part3: {
      title: 'Ham and Pea',
      author: null,
      instructions: 'For each question, choose the correct answer.',
      passage: "Three years ago, Charlotte from Chorley, in the UK, bought two ducks to live in her garden. They were a present for her family, but they didn't know what to call them. When they were having ham and pea soup one day, her son said, 'Why don't we call them Ham and Pea?' Everyone liked the idea.\n\nBefore long, the ducks were part of the family, and loved watching TV with Charlotte and her three boys. One of their favourite activities was chasing the rubbish lorry which came to the house every Tuesday. They were also happy to join Charlotte when she walked with her kids to school.\n\nHam and Pea are very well known in Charlotte's town. This is because they often leave her garden. 'The first time they did that,' Charlotte says, 'I just couldn't believe it. I have a high wall. They aren't very big and can't fly.' The first time the ducks went out, a neighbour saw them in his garden and brought them home.\n\n'In Chorley, people love them,' says Charlotte. 'I go to the shops, and people say \"Oh, there's Ham and Pea\".' Charlotte shares videos of her ducks most days with their online fans and says, 'People everywhere want to see my latest videos of them. I've even had messages from the USA, with people saying that Ham and Pea make them smile. It's lovely to know that people love them as much as we do.'",
      questions: [
        { id: 14, text: 'What do we learn about Charlotte in the first paragraph?', options: { A: 'where she got the ducks from', B: 'who suggested she should keep ducks', C: "how she chose the ducks' names" }, answer: 'C' },
        { id: 15, text: 'What is the writer doing in the second paragraph?', options: { A: 'explaining what the ducks enjoyed doing', B: 'describing why the family liked the ducks so much', C: 'discussing where the ducks preferred spending most of their time' }, answer: 'A' },
        { id: 16, text: 'How did Charlotte feel when her ducks left her garden?', options: { A: 'worried if they were safe', B: 'surprised by what they were able to do', C: 'pleased that they were so clever' }, answer: 'B' },
        { id: 17, text: 'Why does the writer mention the USA?', options: { A: 'to show that people around the world are interested in the ducks', B: 'to suggest that American people are especially interested in duck', C: 'to explain where the videos of the ducks are most popular' }, answer: 'A' },
        { id: 18, text: 'Which is the best title for this article?', options: { A: 'The ducks who are now online stars', B: 'How ducks are helping a family from Chorley', C: 'Why ducks are the perfect pet for someone you love' }, answer: 'A' },
      ],
    },
    part4: {
      title: 'The Italian doctor who travels by horse',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'Roberto Anfosso is a doctor in Piedmont, in Italy. When he visits his patients in their homes, his favourite ',
        " is his horse.\n\n'Every week,' says Roberto, 'I ",
        " 80 to 100 kilometres on my horse.' But Roberto remembers his first ever patient. 'When I arrived, he looked at me in a ",
        " way. He was surprised, and didn't want to let me in.' But now his patients are happy. 'When a doctor ",
        " on a horse, the patients feel like he has more time for them.' They are interested in the horse too. 'If a visit lasts 20 minutes, they ",
        " ten minutes talking about the horse.' Most of Roberto's patients are farmers who produce their own food. 'Very often, they ",
        " me food. It's difficult to say no!'",
      ],
      questions: [
        { id: 19, options: { A: 'journey', B: 'transport', C: 'trip' }, answer: 'B' },
        { id: 20, options: { A: 'ride', B: 'drive', C: 'come' }, answer: 'A' },
        { id: 21, options: { A: 'missing', B: 'wrong', C: 'strange' }, answer: 'C' },
        { id: 22, options: { A: 'arrives', B: 'goes', C: 'moves' }, answer: 'A' },
        { id: 23, options: { A: 'give', B: 'spend', C: 'stay' }, answer: 'B' },
        { id: 24, options: { A: 'ask', B: 'offer', C: 'suggest' }, answer: 'B' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'to' },
      passages: [
        {
          from: 'Amber', to: 'Jasmine', label: 'Message',
          content: "Hi Jasmine,\n\nIt's nearly the weekend! I want [0] check if you're busy. How [25] a game of tennis at Basildon Park on Sunday? I'm free all day, but I don't know [26] time is good for you. Is 11 OK? And then we can go into town afterwards [27] you like. Can you let me know?\n\nCheers,\nAmber",
        },
        {
          from: 'Jasmine', to: 'Amber', label: 'Message',
          content: "Hi Amber,\n\nCool, let's have a game at 11 and then go shopping. I'm not sure [28] to get to the tennis courts because I've never done that before. Should we take the number 12 bus, or take a tram? [29] doesn't matter now. Let's just decide [30] we meet. I'll come round to your place about 10.30.\n\nSee you then!\nJasmine",
        },
      ],
      questions: [
        { id: 25, answers: ['about'] },
        { id: 26, answers: ['what'] },
        { id: 27, answers: ['if'] },
        { id: 28, answers: ['how'] },
        { id: 29, answers: ['it', 'that', 'this'] },
        { id: 30, answers: ['when'] },
      ],
    },
  },
  {
    id: 'ket-trainer2-test3',
    title: 'Trainer 2 · Test 3',
    source: {
      file: 'Trainer2学生用书.pdf',
      collection: 'A2 Key for Schools Trainer 2',
      test: 3,
      pages: '78–87',
      answerPage: 201,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'text', from: 'Alexandra',
          content: "Hi Luke, I've just finished my homework. That's great, except now I've got nothing to do all evening! See you tomorrow! Alexandra",
          question: 'Why has Alexandra written to Luke?',
          options: {
            A: 'to say that she needs help',
            B: 'to tell him she is feeling bored',
            C: 'to ask him if he wants to meet',
          },
          answer: 'B',
        },
        {
          id: 2, type: 'text', from: 'Mr Hammonds', to: 'Year 9 students',
          content: "Subject: mountain trip\nRemember what I told you about tomorrow's trip. Please come with your own lunch, because we'll be several kilometres from the nearest shop.\nMr Hammonds",
          question: 'Why has the teacher written this email?',
          options: {
            A: 'to let pupils know where they are going',
            B: 'to tell pupils what to bring',
            C: 'to suggest what pupils can buy on the trip',
          },
          answer: 'B',
        },
        {
          id: 3, type: 'notice',
          content: "Please check if there's enough space for you and your bicycle on certain trains.\nIt's easy, and there's no extra cost for passengers with bicycles.\nwww.biketrain.org",
          question: 'What do we learn from this notice?',
          options: {
            A: 'People can sometimes take bikes on trains.',
            B: 'Passengers with bikes can get cheaper tickets.',
            C: "You must buy a ticket for your bike when you're on the train.",
          },
          answer: 'A',
        },
        {
          id: 4, type: 'notice',
          content: "My dog's name is Spot.\nHe's lovely and friendly.\nUnfortunately I can't take him for a walk at the moment.\nBut if you can, please call 07893487233.\nThanks.",
          question: 'This notice was written by someone who',
          options: {
            A: 'is looking for a pet.',
            B: 'wants someone to join them on walks with a dog.',
            C: 'needs help looking after a pet.',
          },
          answer: 'C',
        },
        {
          id: 5, type: 'text', from: 'Mr Ashcroft', to: 'Parents of class 4B',
          content: "Subject: Your child's hockey game today\nDear Parents.\nThe coach back from our match at Elston School is delayed by 30 minutes. Please wait for pupils outside school.\nMr Ashcroft",
          question: 'This message is for parents who',
          options: {
            A: 'want to know what time the match starts.',
            B: 'have watched the match against Elston School.',
            C: 'are collecting their children after a sports match.',
          },
          answer: 'C',
        },
        {
          id: 6, type: 'notice',
          content: "Please remember we sometimes get very busy.\nPlease don't use equipment for more than ten minutes if someone's waiting.\nWe want all our members to stay fit!",
          question: 'Where might you see this message?',
          options: {
            A: 'at a gym',
            B: 'at a swimming pool',
            C: 'in a classroom',
          },
          answer: 'A',
        },
      ],
    },
    part2: {
      title: 'Books about nature for young people',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Year of Animals',
          text: "This book has an article about a different animal on every page. It's a big book, and there's one for every day of the year. Most pages also have lovely drawings of the animals by the artist Edgar McDaniels. There's an important message too. These days, wild animals have less space, less food to eat and less water to drink. These are the things that all animals need. And their world is becoming more dangerous. That's why they need us. If we don't try to save them, says writer Marla Semmens, who will?",
        },
        {
          label: 'B', name: 'What Animals Eat',
          text: "In this book, science writer Hong Jung-mi helps us to understand more about what animals eat. It includes many amazing bits of information that you probably didn't know. For example, some kinds of rat never drink water. Other rats eat mice. If snakes eat some of the rats, this helps the mice because there are fewer rats. So, snakes are dangerous for rats, but they actually make the world safer for mice.",
        },
        {
          label: 'C', name: 'Life Below',
          text: "The world's rivers, lakes and seas are full of animals of all shapes and sizes! Several of these are described in detail in this new book from nature writer Ionuț Burcă, who also took some of the photographs. Sadly, the seas are full of plastic, and when animals see this, they often think it is food. This is always bad for them, and can sometimes make them very ill.",
        },
      ],
      questions: [
        { id: 7, text: 'Which book has beautiful pictures?', answer: 'A' },
        { id: 8, text: 'Which book has lots of interesting facts?', answer: 'B' },
        { id: 9, text: 'Which book is about animals that live in water?', answer: 'C' },
        { id: 10, text: 'Which book tells us that people must help nature?', answer: 'A' },
        { id: 11, text: 'Which book has texts about lots of kinds of animals?', answer: 'A' },
        { id: 12, text: 'Which book shows how different animals need each other?', answer: 'B' },
        { id: 13, text: 'Which book talks about something dangerous that animals eat?', answer: 'C' },
      ],
    },
    part3: {
      title: 'Gabby Douglas',
      author: null,
      instructions: 'For each question, choose the correct answer.',
      passage: "Gabby Douglas is an American gymnast and the winner of three Olympic gold medals. She has two older sisters, Arielle and Joyelle, and began doing gymnastics at the age of six. This was because Joyelle asked their mother to pay for classes for Gabby at a gym near their home in Virginia.\n\nWhen she was eight, Gabby was already winning gymnastics competitions. So she moved to Iowa, but her parents stayed with her sisters in Virginia, while they finished school. The reason was for Gabby to begin training with a very successful coach there, called Liang Chow who had a gym in a town called Des Moines.\n\nGabby continued to do well in competitions while she was living in Iowa. Not having her family near was sometimes hard for her, especially because she was still so young. But she trained a lot and just got better and better at gymnastics.\n\nSoon Gabby was good enough to join the Olympic team. She was now famous, and even wrote a book. In it, she explains that to win and to be the best people at a sport you love, you need to always try your hardest.\n\nShe even did her gymnastics on stage at a music concert while singer Alicia Keys and rapper Nicki Minaj performed the song Girl on Fire. In it, they changed some of the words, including 'I win the gold like Gabby!' The audience loved it.",
      questions: [
        { id: 14, text: "What are we told about Gabby's family in the first paragraph?", options: { A: 'Her whole family went to a gym together.', B: 'They were all happy that they lived near a gym.', C: 'One of her sisters wanted her to start gym classes.' }, answer: 'C' },
        { id: 15, text: 'Why did Gabby move to Iowa?', options: { A: 'to enter more competitions', B: 'to begin a new school there', C: 'to start working with a new coach' }, answer: 'C' },
        { id: 16, text: 'What was difficult for Gabby when she was living in Iowa?', options: { A: 'being away from her family', B: 'preparing for a lot of competitions', C: 'spending so much time in the gym' }, answer: 'A' },
        { id: 17, text: "What is Gabby's book about?", options: { A: 'how to become successful', B: "what it's like to be famous", C: 'why she enjoys her sport' }, answer: 'A' },
        { id: 18, text: 'What happened when Gabby was on stage?', options: { A: 'Gabby sang with Alicia Keys and Nicki Minaj.', B: 'Alicia Keys and Nicki Minaj sang a song about Gabby.', C: 'Gabby showed Alicia Keys and Nicki Minaj how to do gymnastics.' }, answer: 'B' },
      ],
    },
    part4: {
      title: 'A big surprise for a music fan',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        'Luke Getting is a fan of pop star Ed Sheeran. Luke also sings, ',
        ", the songs of Ed Sheeran himself, and he posts these online.\n\nLast week, Luke was at an Ed Sheeran concert. Ed ",
        " Luke in the crowd, and told everybody 'This guy's ",
        " Luke and he sings my songs. I see him online all the time.'\n\nSheeran then ",
        ' Luke to come on stage to join him. Sheeran gave him a guitar, and the pair then sang a song together. They were smiling at each other, and it was ',
        " to everyone that Luke was having lots of fun.\n\nAfter the concert, Luke explained why he posts his songs online. 'It's an amazing way to ",
        " people what you can do,' he said.",
      ],
      questions: [
        { id: 19, options: { A: 'probably', B: 'especially', C: 'nearly' }, answer: 'B' },
        { id: 20, options: { A: 'looked', B: 'watched', C: 'saw' }, answer: 'C' },
        { id: 21, options: { A: 'called', B: 'described', C: 'known' }, answer: 'A' },
        { id: 22, options: { A: 'invited', B: 'agreed', C: 'offered' }, answer: 'A' },
        { id: 23, options: { A: 'clear', B: 'fine', C: 'right' }, answer: 'A' },
        { id: 24, options: { A: 'explain', B: 'put', C: 'show' }, answer: 'C' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'much' },
      passages: [
        {
          from: 'Jonas', to: 'Gerry', label: 'Email',
          content: "Hi Gerry,\n\nI've got a new computer game and it's really cool. I've had so [0] fun playing it that I want to tell you all [25] it. It's called Train Driver, and you see [26] it's like to drive a train around a big city. You have [27] get your passengers around the city safely, but you must also complete your journey as quickly [28] possible.\n\nI think it's the kind [29] game that you would like.\n[30] you have time, we can play a game together after school.\n\nLet me know.\n\nCheers,\nJonas",
        },
      ],
      questions: [
        { id: 25, answers: ['about'] },
        { id: 26, answers: ['what'] },
        { id: 27, answers: ['to'] },
        { id: 28, answers: ['as'] },
        { id: 29, answers: ['of'] },
        { id: 30, answers: ['if', 'when'] },
      ],
    },
  },
  {
    id: 'ket-trainer2-test4',
    title: 'Trainer 2 · Test 4',
    source: {
      file: 'Trainer2学生用书.pdf',
      collection: 'A2 Key for Schools Trainer 2',
      test: 4,
      pages: '94–103',
      answerPage: 200,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'notice',
          content: "Horse rides £60 for children and adults\nPay £20 now to book your ride online\nPay the other £40 in cash on the day",
          question: 'This notice explains',
          options: {
            A: 'what different horse rides cost.',
            B: 'how to save money on horse rides.',
            C: 'when and how to pay for a horse ride.',
          },
          answer: 'C',
        },
        {
          id: 2, type: 'text', from: 'Jack',
          content: "Hi Leo,\nI know I told you to come to my flat at noon, but mum says you're welcome to come before. How does that sound?\nJack",
          question: 'What is the message saying?',
          options: {
            A: 'Jack wants Leo to visit him later this afternoon.',
            B: "Leo can go to Jack's before noon if he likes.",
            C: "Jack's mother wants to know what time Leo is coming.",
          },
          answer: 'B',
        },
        {
          id: 3, type: 'notice',
          content: "I couldn't stop reading this. I wanted to know what happened to this group of friends.\nDon't open this book! Especially after dark!",
          question: 'This book is for',
          options: {
            A: 'people who enjoy scary stories.',
            B: 'people who want to understand their friends.',
            C: 'people who like reading before they go to sleep.',
          },
          answer: 'A',
        },
        {
          id: 4, type: 'text', from: 'Ms Hansworth', to: 'Parents',
          content: "Like I explained at the meeting, let us know if there's anything your child can't eat before the school skiing trip.",
          question: 'Why has Ms Hansworth written this message?',
          options: {
            A: 'to invite parents to a meeting',
            B: 'to ask parents for information',
            C: 'to let parents know about a school trip',
          },
          answer: 'B',
        },
        {
          id: 5, type: 'notice',
          content: 'Today only!\nOrder a slice of cake to receive a drink at no extra cost.',
          question: 'What does this notice tell us?',
          options: {
            A: 'Free drinks are available every day.',
            B: 'Cakes are cheaper than usual today.',
            C: 'You get a free drink if you buy some cake.',
          },
          answer: 'C',
        },
        {
          id: 6, type: 'text', from: 'Mr Rosebush', to: 'maths students',
          content: 'It says on the answer sheet that question 7 is 125 cm. It should say 125 km. Well done if you noticed!',
          question: 'Why has Mr Rosebush written to the pupils?',
          options: {
            A: 'tell them where to find the answers',
            B: 'to say that some information is wrong',
            C: 'to ask them to do their maths homework',
          },
          answer: 'B',
        },
      ],
    },
    part2: {
      title: 'Why do sports?',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Tomoko',
          text: "I've played hockey now for a few years. One day, a friend in my team told me that if I can hit a hockey ball, I can also hit a cricket ball. So I tried it, and I loved it. But hockey's still my favourite sport. Our team are really good, but sometimes in a match the other team wins because they're better than us on the day. And that's OK – I certainly don't feel bad about it.",
        },
        {
          label: 'B', name: 'Alistair',
          text: "I've always been quite fit, and I practise golf a lot, especially before matches. These are really important to me. And when I get first prize in a match, it's such an amazing feeling! I also play badminton. The thing I love about it is that it's fast. When the other player hits, you've only got less than quarter of a second to decide what to do.",
        },
        {
          label: 'C', name: 'Samira',
          text: "My family were pleased when I told them I wanted to start playing football. It's really helped me in lots of ways. Before, I sometimes felt a bit sad and worried, but that never happens now. Also, I can feel that my arms and legs are stronger. And I can run faster and for longer. I'm great friends with the other girls in my team too. Some of them play tennis, so maybe I'll try that with them one day, too.",
        },
      ],
      questions: [
        { id: 7, text: 'Which person feels good when they win?', answer: 'B' },
        { id: 8, text: "Which person doesn't mind losing a game?", answer: 'A' },
        { id: 9, text: 'Which person is thinking about starting a new sport?', answer: 'C' },
        { id: 10, text: 'Which person says which sport they like most?', answer: 'A' },
        { id: 11, text: 'Which person talks about a sport makes them move quickly?', answer: 'B' },
        { id: 12, text: 'Which person explains that doing one sport helped them start another?', answer: 'A' },
        { id: 13, text: 'Which person describes how the sport has stopped them feeling unhappy?', answer: 'C' },
      ],
    },
    part3: {
      title: 'The station piano competition',
      author: null,
      instructions: 'For each question, choose the correct answer.',
      passage: "If you travel by train around the UK, you'll notice that a lot of the stations have pianos on the platforms. The idea is that anyone can play these if they want. After all, travelling the same way every day isn't just expensive – it can be boring too! It's much more fun if you can hear or play music for free while you wait.\n\nThe first public pianos were in Sheffield and Birmingham. Now, lots of other stations have them. One, at London's St Pancras Station is from the famous musician Elton John, with a sign that says, 'Enjoy this piano. It's a gift.'\n\nThese pianos have been very popular. Musician Danny Kantell says 'I have been to every station where there's a piano to play,' he says. 'It's my favourite place to play, and I add on extra hours to my journey just to play.'\n\nDanny and other station musicians took part in a piano competition on British TV. One of them, Jay Gomez, said it was brilliant that the programme was so popular. Although he didn't win (or expect to), he said that life has never been the same since the competition.\n\nThis year, the competition was won by a 13-year-old girl called Lucy, a blind musician from Yorkshire. For her, music is not about selling lots of albums, or having fans online. It's all about making the piano sound sad, happy or excited when she is. And she does it brilliantly.",
      questions: [
        { id: 14, text: 'Why were pianos put in stations around the UK?', options: { A: 'to help musicians to earn money', B: 'to show that learning music can be fun', C: "to make people's journeys more pleasant" }, answer: 'C' },
        { id: 15, text: 'What does the article say about Elton John?', options: { A: 'He gave a piano for people to play at a station.', B: 'He sometimes plays pianos at train stations.', C: 'Putting pianos in station was his idea.' }, answer: 'A' },
        { id: 16, text: 'Danny Kantell says that he', options: { A: 'plays the piano if his train is delayed.', B: 'has visited stations to play the piano there.', C: 'is often invited to play the piano at different stations.' }, answer: 'B' },
        { id: 17, text: 'What did Jay Gomez say about the piano competition?', options: { A: 'It has changed his life.', B: 'It was a big surprise that he won.', C: 'It made him want to start playing the piano.' }, answer: 'A' },
        { id: 18, text: 'The writer says that the winner of the competition', options: { A: 'is very popular online.', B: 'will probably sell lots of albums.', C: 'uses the piano to show how she is feeling.' }, answer: 'C' },
      ],
    },
    part4: {
      title: 'Trees for goals',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        "My name is Lesein Mutunkei, and I'm 15 years old. I always say that it doesn't ",
        ' how young you are – all of us can all help the environment if we want to. When I learned how many trees are cut down every day in my country, Kenya, I felt sad. I knew that I had to ',
        ' something about it.\n\nSo this is what I ',
        '. Every time I get a goal at football, I will plant a tree. My idea made me try ',
        ', and get more and more goals! Now, the other players in my ',
        " have joined me, and they're planting trees too. We've planted more than one thousand trees over the ",
        ' two years.',
      ],
      questions: [
        { id: 19, options: { A: 'happen', B: 'matter', C: 'bother' }, answer: 'B' },
        { id: 20, options: { A: 'do', B: 'have', C: 'make' }, answer: 'A' },
        { id: 21, options: { A: 'decided', B: 'discussed', C: 'invited' }, answer: 'A' },
        { id: 22, options: { A: 'further', B: 'harder', C: 'quicker' }, answer: 'B' },
        { id: 23, options: { A: 'group', B: 'member', C: 'team' }, answer: 'C' },
        { id: 24, options: { A: 'final', B: 'last', C: 'late' }, answer: 'B' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'it' },
      passages: [
        {
          from: 'Jake', to: 'Alex', label: 'Email',
          content: "Hi Alex,\n\nHow's [0] going? I've got a question for you. In science class, Mr Billet was telling us [25] our homework. Well, I forgot [26] write it in my notebook. And now I can't remember [27] to do for homework! Can you help?\n\nThanks\nJake",
        },
        {
          from: 'Alex', to: 'Jake', label: 'Email',
          content: "Hi Jake,\n\nDon't worry. I was listening to Mr Billet! He said he's going to email us a short video. It explains how the batteries for electric cars [28] usually made these days. At the end [29] the film, there's a quiz. We just need to answer as [30] questions as we can.\n\nAlex",
        },
      ],
      questions: [
        { id: 25, answers: ['about'] },
        { id: 26, answers: ['to'] },
        { id: 27, answers: ['what'] },
        { id: 28, answers: ['are'] },
        { id: 29, answers: ['of'] },
        { id: 30, answers: ['many'] },
      ],
    },
  },
  {
    id: 'ket-trainer2-test5',
    title: 'Trainer 2 · Test 5',
    source: {
      file: 'Trainer2学生用书.pdf',
      collection: 'A2 Key for Schools Trainer 2',
      test: 5,
      pages: '110–119',
      answerPage: 201,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'notice',
          content: 'Be careful!\nThe pool temperature is much lower than normal.\nIt will be repaired soon.',
          question: 'What is this notice saying?',
          options: {
            A: 'The pool is getting fixed today.',
            B: 'The water is colder than usual.',
            C: 'There have been swimming accidents here recently.',
          },
          answer: 'B',
        },
        {
          id: 2, type: 'text', from: 'Mr Nairobi', to: 'All students',
          content: 'Subject: School trip\nYou may use the hotel pool most days, but if you do not want to, that is no problem – just let me know.',
          question: 'The teacher says that pupils',
          options: {
            A: 'can choose to swim or not.',
            B: 'will be able to swim every day.',
            C: 'should tell him when they want to go swimming.',
          },
          answer: 'A',
        },
        {
          id: 3, type: 'notice',
          content: 'For help with headaches\nDo not take if you have heart problems\nTake 20 minutes after food\nTell your doctor if you feel worse',
          question: 'What information do the instructions/does this message include?',
          options: {
            A: 'when to take the medicine',
            B: 'how much of the medicine to take',
            C: 'who to contact if you have any questions',
          },
          answer: 'A',
        },
        {
          id: 4, type: 'notice',
          content: 'Victoria Park ★★★★★\nIt has a huge playground and a brilliant area for skateboarding.\nThere is also a café with delicious cakes!\nAmina, 12',
          question: 'What is Amina saying in this review?',
          options: {
            A: 'She prefers skateboarding at the park.',
            B: 'The café offers a wide selection of food.',
            C: 'There are several things to do at the park.',
          },
          answer: 'C',
        },
        {
          id: 5, type: 'notice',
          content: 'Talk starts at 7pm\nEvent is fully booked\nAfter 7pm enter through back door',
          question: 'What information is included in this notice?',
          options: {
            A: 'where to buy tickets',
            B: 'what to do if you arrive late',
            C: 'how long the event takes place',
          },
          answer: 'B',
        },
        {
          id: 6, type: 'text', from: 'jake@mymail.com', to: 'Class 8',
          content: 'Subject: My school jacket\nHi\nI have lost my new school jacket. If you know where it is, please let me know. It is expensive and I need it!\nJake',
          question: 'Jake wants to know if any of his classmates',
          options: {
            A: 'have seen his jacket.',
            B: 'can lend him a jacket.',
            C: 'wants to buy a jacket.',
          },
          answer: 'A',
        },
      ],
    },
    part2: {
      title: 'Three competitions from around the world',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Air Guitar Competition, Oulu, Finland',
          text: "This festival is for people who love playing the guitar... but without actually having a real guitar in their hands! It all started in Oulu in Finland in 1996. Every year it got bigger and bigger, and now there are even other air guitar festivals like it across Europe and Asia. It's fun, and it's perfect for photographers, especially if you get a place by the stage, because you'll have an amazing view of the performance.",
        },
        {
          label: 'B', name: 'Cheese Rolling Competition, Cotswolds, England',
          text: "Perhaps you have seen photos of this strange event in the English countryside. Here's what happens: a large piece of round cheese is pushed down a big hill, and then goes faster and faster. Anyone who wants to must run as fast as they can down the hill behind it. This is not easy, and many fall and hurt themselves running down the hill – every year, some are even taken to hospital. The first one to get to the bottom wins. And what do they get? The cheese of course!",
        },
        {
          label: 'C', name: 'Frozen Hair Competition, Yukon, Canada',
          text: "Near Yukon, in the northwest of Canada, there is a natural pool called Takhini Hot Springs. In winter, visitors get into the water, put their head under for a second, and then wait for their wet hair to become ice. When the air temperature is -20 degrees, this doesn't take long! To enter the competition, you must agree that the staff can come and take your photo. The staff can then use this on the pool's website to tell more people about Takhini Hot Springs.",
        },
      ],
      questions: [
        { id: 7, text: 'At which competition is there a race?', answer: 'B' },
        { id: 8, text: 'Which competition is difficult?', answer: 'B' },
        { id: 9, text: 'Which competition is used in adverts?', answer: 'C' },
        { id: 10, text: 'Which competition also takes place in other countries?', answer: 'A' },
        { id: 11, text: 'At which competition do people do something in a warm place?', answer: 'C' },
        { id: 12, text: 'At which competition does the winner get a prize?', answer: 'B' },
        { id: 13, text: 'Which competition is good for taking interesting pictures?', answer: 'A' },
      ],
    },
    part3: {
      title: 'My job as a science journalist',
      author: 'Danelle Tam, Singapore',
      instructions: 'For each question, choose the correct answer.',
      passage: "When I was a child, my hero was the Australian journalist Steve Irwin. I wrote a three-page article about his work with animals. His films were amazing, and made me choose a career like his.\n\nWhen I said I wanted to study Earth Science at university, people said 'What will you do with your life after studying that?' Actually I'm already using it, and I haven't even finished studying yet! I make films and write about science and nature.\n\nLots of people follow me online. I write about things I want to find out about. I always say if I'm not sure about something. And I often write, 'I'm finding out new stuff, just like you guys!'\n\nPeople often ask about simple ways to help nature. Some things should be easy, but they aren't. For example, I hate plastic, because it's dangerous for animals. But my local supermarket only sells fruit in plastic bags. I'd love to buy it without these, but I can't.\n\nSchools now spend more time telling pupils about wildlife, which I'm happy about. Kids already know what's dangerous for animals, like pollution and rubbish. I'd like more schools to actually do activities, for example taking kids out to pick up rubbish near their school, to make the world safer for them.",
      questions: [
        { id: 14, text: 'What does Danelle say about the journalist Steve Irwin?', options: { A: 'She met him when she was younger.', B: 'He is the reason why she became a science journalist.', C: 'He helped her learn to write so well.' }, answer: 'B' },
        { id: 15, text: 'What did people suggest about the university course that Danelle chose?', options: { A: "It won't help her with her career.", B: "She'll never complete it.", C: "It won't teach her about film-making." }, answer: 'A' },
        { id: 16, text: 'What is Danelle doing in the third paragraph?', options: { A: 'explaining that she enjoys learning new things about science', B: 'describing the kind of mistakes she sometimes makes', C: 'showing how she gets new followers' }, answer: 'A' },
        { id: 17, text: 'Why does Danelle talk about supermarkets?', options: { A: 'to explain why it is bad to use lots of plastic', B: "to show that you can't always help nature", C: 'to say that people buy too many things from them' }, answer: 'B' },
        { id: 18, text: 'What does Danelle say that schools should do?', options: { A: 'spend more time teaching about animals and nature', B: 'make children do things that help animals and nature', C: 'teach pupils about things that are bad for animals and nature' }, answer: 'B' },
      ],
    },
    part4: {
      title: 'A family flew to the USA but their dog was sent to Saudi Arabia',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        "A dog called Bluebell has completed an international journey of 17,000 kilometres. Bluebell was living in London with an American family, Madison and James Miller, when the Millers decided to go ",
        " home to Nashville, Tennessee, USA. They paid a transport company $2,100 to fly their pet from London to Nashville. Unfortunately, staff ",
        ' a mistake, and Bluebell was put on the ',
        " plane. Instead of flying to Nashville, Bluebell was sent to Riyadh in Saudi Arabia. Airline staff in Riyadh ",
        ' after Bluebell and gave her food and water. Three days later, she ',
        ' arrived in Nashville, and the Millers collected her from the airport. Staff said they do not understand why this ',
        ". However, the Millers are unhappy, and have asked the transport company responsible for organizing the flight for $10,000.",
      ],
      questions: [
        { id: 19, options: { A: 'away', B: 'back', C: 'out' }, answer: 'B' },
        { id: 20, options: { A: 'did', B: 'had', C: 'made' }, answer: 'C' },
        { id: 21, options: { A: 'bad', B: 'missing', C: 'wrong' }, answer: 'C' },
        { id: 22, options: { A: 'looked', B: 'saw', C: 'watched' }, answer: 'A' },
        { id: 23, options: { A: 'immediately', B: 'finally', C: 'slowly' }, answer: 'B' },
        { id: 24, options: { A: 'became', B: 'happened', C: 'continued' }, answer: 'B' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'let' },
      passages: [
        {
          from: 'Emily', to: 'Mum', label: 'Message',
          content: "Hi Mum,\n\nThis is just a quick message to [0] you know that we've arrived at the campsite. The bus journey took more [25] two hours, but I didn't get bored because I was chatting [26] my school friends.\n\n[27] are lots of fun activities to do here! For example, we can go swimming in the lake, as [28] as play beach volleyball.\n\nI'm really excited [29] sleeping in my tent tonight! But I'm glad that I don't [30] to get up early in the morning, though. Tomorrow afternoon, our teacher is taking us for a long walk on some forest paths. I can't wait!\n\nLove,\nEmily",
        },
      ],
      questions: [
        { id: 25, answers: ['than'] },
        { id: 26, answers: ['with', 'to'] },
        { id: 27, answers: ['there'] },
        { id: 28, answers: ['well'] },
        { id: 29, answers: ['about'] },
        { id: 30, answers: ['need', 'have'] },
      ],
    },
  },
  {
    id: 'ket-trainer2-test6',
    title: 'Trainer 2 · Test 6',
    source: {
      file: 'Trainer2学生用书.pdf',
      collection: 'A2 Key for Schools Trainer 2',
      test: 6,
      pages: '126–135',
      answerPage: 202,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'text', from: 'Headteacher', to: 'School theatre club',
          content: "Congratulations to all the actors, musicians, and dancers in 'Rocking'. Everyone says this was the best school performance they've ever seen.",
          question: 'What is the headteacher doing in this message?',
          options: {
            A: 'thanking students for taking part in a play',
            B: 'checking if students want to be in another play',
            C: 'asking students to share their views on the play',
          },
          answer: 'A',
        },
        {
          id: 2, type: 'notice',
          content: 'Competition for young journalists!\nEnter your 1000-word article on any topic by 7th May',
          question: 'This message explains',
          options: {
            A: 'when you will find out who has won the competition.',
            B: 'how much you need to write to enter the competition.',
            C: 'what subject you should write about for the competition',
          },
          answer: 'B',
        },
        {
          id: 3, type: 'notice',
          content: 'Do you love talking about books?\nThen join our reading club!\nEvery Thursday afternoon in the school library.\nBring your favourite book.\nNew members welcome.',
          question: 'What do we learn from this message?',
          options: {
            A: 'how often club members meet',
            B: 'why the club still needs new members',
            C: 'which book members will discuss at the next meeting',
          },
          answer: 'A',
        },
        {
          id: 4, type: 'notice',
          content: 'Congratulations Andy Hassan (Year 7)! You played brilliantly at the Paris Table Tennis competition.',
          question: 'What is this message saying?',
          options: {
            A: 'Andy Hassan has won a sports competition.',
            B: 'Andy Hassan enjoyed taking part in a sports competition.',
            C: 'Andy Hassan did very well at a sports competition',
          },
          answer: 'C',
        },
        {
          id: 5, type: 'notice',
          content: 'The library will be closed from 19 March for about 4–6 weeks\nPlease return any books by March 18.\nThank you',
          question: 'What information does this notice include?',
          options: {
            A: 'what day the library will be open again',
            B: 'when is the last date to take books back to the library',
            C: 'how to borrow books after March 19',
          },
          answer: 'B',
        },
        {
          id: 6, type: 'text', from: 'Headteacher', to: 'All',
          content: "Do you know an old person who lives alone?\nCould you go and see them once a week?\nThey'd love to chat with you!",
          question: 'Why has the headteacher written this email?',
          options: {
            A: 'to ask pupils to visit an old person',
            B: 'to get some help for someone she knows',
            C: 'to find some information for a school project',
          },
          answer: 'A',
        },
      ],
    },
    part2: {
      title: 'My favourite films: 12-year-old Emilia Diaz reviews her favourite films',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'The Car Guy',
          text: "Not all the films that Joel Bradley was in were successful in his short career as an actor before he became a professional dancer, but this movie was brilliant. Bradley doesn't only play Mike, the bad guy. He's also Danny, the policeman who is trying to find Mike. Basically, Mike is the bored manager of a garage, which is losing lots money. Perhaps that doesn't seem like a comedy story, but believe me – I've never laughed so much!",
        },
        {
          label: 'B', name: 'Bookstore',
          text: "Sally Denior wrote this film while she was a teenager, but she had to wait until she was a successful writer and actor herself before it was finally made into a film. By this time, she was too old to play Maria, the 15-year-old girl at the centre of the film. So, instead, Denise Wilkins was chosen as Maria. Some of the comedy is quite strange, and there are so many jokes in it that you'll hear new ones when you see it for the second or even the third time. A brilliant film - and it improves each time you see it.",
        },
        {
          label: 'C', name: 'Instrument',
          text: "Nadia and Louisa were at school together, but never liked each other. When they are about 40, their parents actually married each other, so Nadia and Louisa have to live together in the same house. At first, things are difficult, but before long, they are best mates. This is the film that began the career of world famous movie star Patty Rodriguez, who is brilliant as Nadia.",
        },
      ],
      questions: [
        { id: 7, text: "Which film doesn't sound funny, but is?", answer: 'A' },
        { id: 8, text: 'Which film is about two people who become friends?', answer: 'C' },
        { id: 9, text: "Which film has a star who doesn't act any more?", answer: 'A' },
        { id: 10, text: 'Which film was the first that a well-known actor was in?', answer: 'C' },
        { id: 11, text: 'Which film gets even better when you watch it again?', answer: 'B' },
        { id: 12, text: 'Which film has one actor playing two different characters?', answer: 'A' },
        { id: 13, text: 'Which film was written by someone who was not able to act in it?', answer: 'B' },
      ],
    },
    part3: {
      title: 'The sky at night',
      author: 'Amelia Watkins, 13',
      instructions: 'For each question, choose the correct answer.',
      passage: "I love looking at the stars in the sky at night. But if you've never tried it yourself, it might be hard to understand the reason why so many of us love doing this. So let me explain.\n\nThere are lots of good things about this hobby. First, it's something that you can do without spending lots of money. Of course, you can buy equipment like a telescope to see the stars more clearly, but it's also possible to look at the sky just with your eyes.\n\nAnd it's easy. For the best view of the stars, it needs to be dark. On cold autumn nights, the sky is clearer, so seeing the stars is easier (but wear something warm). Your eyes must get used to the dark, so wait a few minutes. And then you'll see them!\n\nThink about the moon as well. A big bright moon (a 'full' moon) may be beautiful, but the extra light means that you can't see many stars. When no light from the sun reaches the moon, this is called a 'new' moon. It makes the sky darker, so the stars look brighter and you'll notice more.\n\nI sometimes look at the stars when I'm on my own, but it gets even better when you're with others. Some of the best conversations between friends happen under the stars. Children, parents and grandparents can enjoy finding out all about the night sky together. So why not try it?",
      questions: [
        { id: 14, text: 'In the first paragraph, Amelia says she has written this article to explain', options: { A: 'why looking at the night sky is fun.', B: 'how she got interested in looking at the night sky.', C: 'what makes it difficult to learn about the night sky.' }, answer: 'A' },
        { id: 15, text: 'What does Amelia say about equipment for looking at stars?', options: { A: "You don't need to buy any equipment.", B: "It's best to wait before buying any equipment.", C: "If you spend more on equipment, you'll enjoy it more." }, answer: 'A' },
        { id: 16, text: 'In the third paragraph, what is Amelia giving advice about?', options: { A: 'what to do if you cannot see the stars', B: 'what to wear when you look at the stars', C: 'when are the best times to look at the stars' }, answer: 'C' },
        { id: 17, text: 'What does Amelia explain about the moon?', options: { A: 'why some people enjoy looking at the moon', B: 'which kind of moon she likes best', C: 'how the moon can make stars easier or harder to see' }, answer: 'C' },
        { id: 18, text: 'In the final paragraph, what does Amelia say about looking at the night sky?', options: { A: 'It can be good thing to do on your own.', B: 'It is more fun doing it with other people.', C: 'Young people can teach their families how to do it.' }, answer: 'B' },
      ],
    },
    part4: {
      title: 'Ontario Schools Writing Competition',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        "Do you enjoy writing short stories? Then why don't you ",
        ' our writing competition? We believe it is a good idea for young writers to ',
        ' their work with others, and to see what others have written. The competition is ',
        ' to all 10-18-year-olds who go to school in Ontario. There are three age ',
        ' : 10 to 12, 13 to 15 and 16 to 18. The best stories in each one will ',
        ' a prize. For more ',
        ' , please visit our website: www.ontario.writingcompetition.com',
      ],
      questions: [
        { id: 19, options: { A: 'arrive', B: 'enter', C: 'go' }, answer: 'B' },
        { id: 20, options: { A: 'give', B: 'move', C: 'share' }, answer: 'C' },
        { id: 21, options: { A: 'busy', B: 'open', C: 'ready' }, answer: 'B' },
        { id: 22, options: { A: 'companies', B: 'groups', C: 'teams' }, answer: 'B' },
        { id: 23, options: { A: 'find', B: 'receive', C: 'take' }, answer: 'B' },
        { id: 24, options: { A: 'details', B: 'directions', C: 'signs' }, answer: 'A' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'to' },
      passages: [
        {
          from: null, to: null, label: 'Article · My favourite hobby: birdwatching by Lucy Walkins, 12',
          content: "I'm a birdwatcher – someone who loves [0] watch birds in the wild.\n\nBirdwatching became my favourite hobby after my grandma gave [25] a bird book last year. [26] loves birdwatching and now I do too! We often go out in [27] countryside together, and look for birds. My favourite time is spring, because this is [28] baby birds are born.\n\nI also love hearing birds sing, because every kind of bird has [29] own song. I also have a really cool app. When a bird is singing, the app tells me what kind of bird [30] is.",
        },
      ],
      questions: [
        { id: 25, answers: ['me'] },
        { id: 26, answers: ['she'] },
        { id: 27, answers: ['the'] },
        { id: 28, answers: ['when'] },
        { id: 29, answers: ['its', 'their'] },
        { id: 30, answers: ['it'] },
      ],
    },
  }
]
