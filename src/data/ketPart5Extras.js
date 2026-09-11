// 39 套 KET Part 5 专项练习题
// 来源：KET备考全家桶(2026版) — 阅读Part5练习题-39套.pdf
// 空格用 [1]~[6] 标记，答案支持多个可接受答案

export const ketPart5Sets = [
  // ── Trainer1 ─────────────────────────────────────────────
  {
    id: 1, source: 'Trainer1 Test1',
    example: { number: 0, answer: 'MUCH' },
    passages: [
      {
        from: 'Giles', to: 'Aunt Nel',
        content: 'Dear Aunt Nel,\nThank you very (0) for the book you sent me. It was very kind [1] you. Actually, History of Space Travel sounds like [2] brilliant title. I\'m really interested [3] that kind of thing – exploring space and learning about the moon. I\'ll start it after I finish the one I\'m reading now, [4] is about how cars are made.\nThe holidays are nearly finished now. I go back [5] school next week. Then I\'ve only got two more years of school, so I need to decide [6] to do next!\nThanks again for the present.\nBest wishes,\nGiles'
      }
    ],
    questions: [
      { id: 1, answers: ['of'] },
      { id: 2, answers: ['a'] },
      { id: 3, answers: ['in'] },
      { id: 4, answers: ['which'] },
      { id: 5, answers: ['to'] },
      { id: 6, answers: ['what'] },
    ]
  },
  {
    id: 2, source: 'Trainer1 Test2',
    example: { number: 0, answer: 'WENT' },
    passages: [
      {
        title: 'A school trip to the theatre',
        content: 'Last week, everyone in my class (0) on a trip to the theatre. We travelled there [1] coach. The theatre is about 10 kilometres away from school, so it was much [2] far to walk. The play was Romeo and Juliet by William Shakespeare. In fact, it\'s probably the [3] famous of all the plays that Shakespeare wrote. We\'ve studied it at school, so I knew [4] it\'s about. It\'s a love story, but it\'s also the saddest play I [5] ever seen. At the end, several [6] the people in my class were crying. But I loved it!'
      }
    ],
    questions: [
      { id: 1, answers: ['by'] },
      { id: 2, answers: ['too'] },
      { id: 3, answers: ['most'] },
      { id: 4, answers: ['what'] },
      { id: 5, answers: ['have'] },
      { id: 6, answers: ['of'] },
    ]
  },
  {
    id: 3, source: 'Trainer1 Test3',
    example: { number: 0, answer: 'THE' },
    passages: [
      {
        from: 'Jake',
        content: 'Hi guys!\nThis is (0) best holiday ever! Plakias is such [1] beautiful place. The meals in the hotel are fantastic. For breakfast, you can have as [2] as you want. I usually have yoghurt with lots of fruit. There\'s lots for everyone in my family [3] do, so we\'re all enjoying it. Tomorrow I\'m going to try windsurfing [4] the first time. I\'m really excited because I [5] never done it before, but Dad says it\'s easy. In fact, I love it here so much that I [6] like to come back next year!\nSee you soon.\nJake'
      }
    ],
    questions: [
      { id: 1, answers: ['a'] },
      { id: 2, answers: ['much'] },
      { id: 3, answers: ['to'] },
      { id: 4, answers: ['for'] },
      { id: 5, answers: ['have', "'ve"] },
      { id: 6, answers: ['would', "'d"] },
    ]
  },
  {
    id: 4, source: 'Trainer1 Test4',
    example: { number: 0, answer: 'TO' },
    passages: [
      {
        from: 'Gemma', to: 'Anne',
        content: 'Hi Anne,\nI know you have piano lessons. I want (0) start too, and I remember you said your teacher doesn\'t charge too [1]. What\'s he like? Is he good [2] explaining things? Can you let [3] know soon?\nCheers,\nGemma'
      },
      {
        from: 'Anne', to: 'Gemma',
        content: 'Hi Gemma,\nMy piano teacher is called Ben. He\'s funny and I always have [4] good time in the lessons. But I don\'t know if I [5] getting any better! Anyway, if you\'re looking [6] a teacher, then I think Ben will be perfect for you.\nGood luck!\nAnne'
      }
    ],
    questions: [
      { id: 1, answers: ['much'] },
      { id: 2, answers: ['at'] },
      { id: 3, answers: ['me'] },
      { id: 4, answers: ['a'] },
      { id: 5, answers: ['am', "'m"] },
      { id: 6, answers: ['for'] },
    ]
  },
  {
    id: 5, source: 'Trainer1 Test5',
    example: { number: 0, answer: 'ABOUT' },
    passages: [
      {
        from: 'Joanna', to: 'Emma',
        content: 'Hi Emma,\nAt school, you said that you don\'t have any plans for the weekend. Well, how (0) meeting on Saturday morning? I thought maybe we could go [1] a bike ride. We can go to Moreton-on-Sea, and get something [2] eat. I went there by bike last year. In fact, there were six [3] us, and we had [4] really amazing day. I don\'t think it will take more [5] four hours to get there and back. Can you let [6] know if you can come?\nHopefully, I\'ll see you then!\nCheers,\nJoanna'
      }
    ],
    questions: [
      { id: 1, answers: ['for', 'on'] },
      { id: 2, answers: ['to'] },
      { id: 3, answers: ['of'] },
      { id: 4, answers: ['a'] },
      { id: 5, answers: ['than'] },
      { id: 6, answers: ['me'] },
    ]
  },
  {
    id: 6, source: 'Trainer1 Test6',
    example: { number: 0, answer: 'ARE' },
    passages: [
      {
        from: 'Mrs Hammond', to: 'Class 9',
        content: 'Dear Class 9,\nNext week, we (0) going to do something different in our English lesson. I want pupils to stand up, and speak to the whole class for one minute about a sport they like doing. It will be an excellent way [1] practise your English. If you [2] like to do this, please [3] me know.\nMrs Hammond'
      },
      {
        from: 'Andrew', to: 'Mrs Hammond',
        content: 'Dear Mrs Hammond,\nThank you [4] your email. My favourite sport is football. I love talking about it, and I can [5] everybody about the team I play in [6] Saturday afternoons. I hope that is OK.\nBest wishes,\nAndrew'
      }
    ],
    questions: [
      { id: 1, answers: ['to'] },
      { id: 2, answers: ['would', "'d"] },
      { id: 3, answers: ['let'] },
      { id: 4, answers: ['for'] },
      { id: 5, answers: ['tell', 'inform'] },
      { id: 6, answers: ['on', 'most'] },
    ]
  },

  // ── Trainer2 ─────────────────────────────────────────────
  {
    id: 7, source: 'Trainer2 Test1',
    example: { number: 0, answer: 'AM' },
    passages: [
      {
        from: 'Julia Hamilton', to: 'Mr Elphick',
        content: 'Dear Mr Elphick,\nI (0) sorry, but I have an appointment [1] the doctor tomorrow at 2:30. This means that I need [2] leave school during our geography lesson. The doctor\'s surgery is ten minutes away [3] school, so may I leave at 2.20, please?\nBest wishes,\nJulia Hamilton (class 5B)'
      },
      {
        from: 'Mr Elphick', to: 'Julia',
        content: 'Dear Julia,\nThank you very [4] for your email. Yes, of course it is fine [5] you to leave early. If you need ten minutes to walk there, why don\'t you leave class at 2.15? Then you will have enough time to get there [6] hurrying.\nSee you tomorrow,\nMr Elphick'
      }
    ],
    questions: [
      { id: 1, answers: ['with'] },
      { id: 2, answers: ['to'] },
      { id: 3, answers: ['from'] },
      { id: 4, answers: ['much'] },
      { id: 5, answers: ['for'] },
      { id: 6, answers: ['without'] },
    ]
  },
  {
    id: 8, source: 'Trainer2 Test2',
    example: { number: 0, answer: 'TO' },
    passages: [
      {
        from: 'Amber', to: 'Jasmine',
        content: 'Hi Jasmine,\nIt\'s nearly the weekend! I want (0) check if you\'re busy. How [1] a game of tennis at Basildon Park on Sunday? I\'m free all day, but I don\'t know [2] time is good for you. Is 11 OK? And then we can go into town afterwards [3] you like. Can you let me know?\nCheers,\nAmber'
      },
      {
        from: 'Jasmine', to: 'Amber',
        content: 'Hi Amber,\nCool, let\'s have a game at 11 and then go shopping. I\'m not sure [4] to get to the tennis courts because I\'ve never done that before. Should we take the number 12 bus, or take a tram? [5] doesn\'t matter now. Let\'s just decide [6] we meet. I\'ll come round to your place about 10.30.\nSee you then!\nJasmine'
      }
    ],
    questions: [
      { id: 1, answers: ['about'] },
      { id: 2, answers: ['what'] },
      { id: 3, answers: ['if'] },
      { id: 4, answers: ['how'] },
      { id: 5, answers: ['It', 'That', 'This'] },
      { id: 6, answers: ['when'] },
    ]
  },
  {
    id: 9, source: 'Trainer2 Test3',
    example: { number: 0, answer: 'much' },
    passages: [
      {
        from: 'Jonas', to: 'Gerry',
        content: 'Hi Gerry,\nI\'ve got a new computer game and it\'s really cool. I\'ve had so (0) fun playing it that I want to tell you all [1] it. It\'s called Train Driver, and you see [2] it\'s like to drive a train around a big city. You have [3] get your passengers around the city safely, but you must also complete your journey as quickly [4] possible.\nI think it\'s the kind [5] game that you would like. [6] you have time, we can play a game together after school.\nLet me know.\nCheers,\nJonas'
      }
    ],
    questions: [
      { id: 1, answers: ['about'] },
      { id: 2, answers: ['what'] },
      { id: 3, answers: ['to'] },
      { id: 4, answers: ['as'] },
      { id: 5, answers: ['of'] },
      { id: 6, answers: ['If', 'When'] },
    ]
  },
  {
    id: 10, source: 'Trainer2 Test4',
    example: { number: 0, answer: 'it' },
    passages: [
      {
        from: 'Jake', to: 'Alex',
        content: 'Hi Alex,\nHow\'s (0) going? I\'ve got a question for you. In science class, Mr Billet was telling us [1] our homework. Well, I forgot [2] write it in my notebook. And now I can\'t remember [3] to do for homework! Can you help?\nThanks\nJake'
      },
      {
        from: 'Alex', to: 'Jake',
        content: 'Hi Jake,\nDon\'t worry, I was listening to Mr Billet! He said he\'s going to email us a short video. It explains how the batteries for electric cars [4] usually made these days. At the end [5] the film, there\'s a quiz. We just need to answer as [6] questions as we can.\nAlex'
      }
    ],
    questions: [
      { id: 1, answers: ['about'] },
      { id: 2, answers: ['to'] },
      { id: 3, answers: ['what'] },
      { id: 4, answers: ['are'] },
      { id: 5, answers: ['of'] },
      { id: 6, answers: ['many'] },
    ]
  },
  {
    id: 11, source: 'Trainer2 Test5',
    example: { number: 0, answer: 'LET' },
    passages: [
      {
        from: 'Emily', to: 'Mum',
        content: 'Hi Mum,\nThis is just a quick message to (0) you know that we\'ve arrived at the campsite. The bus journey took more [1] two hours, but I didn\'t get bored because I was chatting [2] my school friends.\n[3] are lots of fun activities to do here! For example, we can go swimming in the lake, as [4] as play beach volleyball.\nI\'m really excited [5] sleeping in my tent tonight! But I\'m glad that I don\'t [6] to get up early in the morning, though. Tomorrow afternoon, our teacher is taking us for a long walk on some forest paths. I can\'t wait!\nLove,\nEmily'
      }
    ],
    questions: [
      { id: 1, answers: ['than'] },
      { id: 2, answers: ['with', 'to'] },
      { id: 3, answers: ['There'] },
      { id: 4, answers: ['well'] },
      { id: 5, answers: ['about'] },
      { id: 6, answers: ['need', 'have'] },
    ]
  },
  {
    id: 12, source: 'Trainer2 Test6',
    example: { number: 0, answer: 'TO' },
    passages: [
      {
        title: 'My favourite hobby: birdwatching',
        author: 'By Lucy Walkins, 12',
        content: 'I\'m a birdwatcher – someone who loves (0) watch birds in the wild.\nBirdwatching became my favourite hobby after my grandma gave [1] a bird book last year. [2] loves birdwatching and now I do too! We often go out in [3] countryside together, and look for birds. My favourite time is spring, because this is [4] baby birds are born.\nI also love hearing birds sing, because every kind of bird has [5] own song. I also have a really cool app. When a bird is singing, the app tells me what kind of bird [6] is.'
      }
    ],
    questions: [
      { id: 1, answers: ['me'] },
      { id: 2, answers: ['She'] },
      { id: 3, answers: ['the'] },
      { id: 4, answers: ['when'] },
      { id: 5, answers: ['its', 'their'] },
      { id: 6, answers: ['it'] },
    ]
  },

  // ── 校园版真题1 ───────────────────────────────────────────
  {
    id: 13, source: '校园版真题1 Test1',
    example: { number: 0, answer: 'from' },
    passages: [
      {
        from: 'Rachel', to: 'Chris',
        content: 'We\'re back (0) our family holiday in the US. It was amazing! It\'s [1] biggest country I\'ve ever been to. We travelled from Los Angeles to Seattle [2] car. It\'s nearly 2000 km and the trip took us [3] very long time – nearly a week.\nMy family liked Los Angeles best, [4] I didn\'t agree – Seattle was my favourite place. It\'s smaller [5] Los Angeles, and the food was better. Seattle is near the sea and we ate lots of fish. The only problem was that [6] rained almost every day!\nLet\'s meet for a chat soon. I have a present for you!'
      }
    ],
    questions: [
      { id: 1, answers: ['the'] },
      { id: 2, answers: ['by'] },
      { id: 3, answers: ['a'] },
      { id: 4, answers: ['but', 'although', 'though', 'however'] },
      { id: 5, answers: ['than'] },
      { id: 6, answers: ['it'] },
    ]
  },
  {
    id: 14, source: '校园版真题1 Test2',
    example: { number: 0, answer: 'got' },
    passages: [
      {
        from: 'Riley', to: 'Kris',
        content: 'My dad\'s (0) three tickets for the hockey match next Wednesday. One was for my brother, but now he\'s [1] free that day, so we have an extra one. Do you [2] to come? Dad would like to leave our house at 4 o\'clock. Let me know as soon [3] possible.'
      },
      {
        from: 'Kris', to: 'Riley',
        content: 'Wow! That\'s really kind [4] you. Thanks! I asked Mum if I can come and she said yes. I finish school a bit later [5] you, so Mum will drive me to your house at 4 o\'clock. Is there anything I need [6] bring with me?'
      }
    ],
    questions: [
      { id: 1, answers: ['not'] },
      { id: 2, answers: ['want'] },
      { id: 3, answers: ['as'] },
      { id: 4, answers: ['of'] },
      { id: 5, answers: ['than'] },
      { id: 6, answers: ['to'] },
    ]
  },
  {
    id: 15, source: '校园版真题1 Test3',
    example: { number: 0, answer: 'are' },
    passages: [
      {
        from: 'Jason', to: 'Mum',
        content: 'We (0) all having a great time camping in the forest. My class has got [1] best place on the campsite, with a great view of the mountains.\nLast night, [2] rained really hard. Lots of people got wet, [3] I was lucky my new tent stayed dry all night! I\'m really glad we decided to buy it. It\'s much better [4] my old one.\nBy the way, I forgot [5] tell the football coach that I\'m away [6] the moment. Can you let him know that I can\'t come to practice this week?\nThanks!'
      }
    ],
    questions: [
      { id: 1, answers: ['the'] },
      { id: 2, answers: ['it'] },
      { id: 3, answers: ['but', 'although', 'though', 'however', 'so'] },
      { id: 4, answers: ['than'] },
      { id: 5, answers: ['to'] },
      { id: 6, answers: ['at'] },
    ]
  },
  {
    id: 16, source: '校园版真题1 Test4',
    example: { number: 0, answer: 'from' },
    passages: [
      {
        content: 'Hi everyone. My name is Juan and I\'ve joined this website because I\'m looking for a penfriend. I come (0) Mexico and I live in a town called Playa del Carmen on the Caribbean Sea, near the city of Cancun. It\'s not as famous [1] Cancun but I think it is one of [2] most beautiful places in Mexico.\nTourists come to Playa del Carmen from [3] over the world because the weather\'s always warm and the food\'s great. [4] fact, my friends and I go to the beach almost every day. It\'s brilliant!\nDo you want [5] know more about Playa del Carmen? [6] you do, write to me soon.'
      }
    ],
    questions: [
      { id: 1, answers: ['as'] },
      { id: 2, answers: ['the'] },
      { id: 3, answers: ['all'] },
      { id: 4, answers: ['In'] },
      { id: 5, answers: ['to'] },
      { id: 6, answers: ['If'] },
    ]
  },

  // ── 校园版真题2 ───────────────────────────────────────────
  {
    id: 17, source: '校园版真题2 Test1',
    example: { number: 0, answer: 'FOR' },
    passages: [
      {
        from: 'Dave', to: 'Ali',
        content: 'I\'ve got some news (0) you. We\'ve just moved into our new house. We moved because Dad got a new job in March.\nOur new house has three floors and is a lot bigger [1] our old one. I really like [2]. My bedroom is at [3] top and I can see a long way from my window. Our garden is really big. Dad has said he\'ll build me a treehouse [4] my school holiday begins.\nI\'m starting at a new school next week. I hope I\'ll [5] able to make new friends. I\'m worried about it, but also excited. [6] you have any news?'
      }
    ],
    questions: [
      { id: 1, answers: ['than'] },
      { id: 2, answers: ['it'] },
      { id: 3, answers: ['the'] },
      { id: 4, answers: ['when', 'after', 'before'] },
      { id: 5, answers: ['be'] },
      { id: 6, answers: ['Do', 'Did'] },
    ]
  },
  {
    id: 18, source: '校园版真题2 Test2',
    example: { number: 0, answer: 'WE' },
    passages: [
      {
        from: 'Andy', to: 'Tom',
        content: 'Let\'s take a picnic with us when (0) go to the river tomorrow. I saw on TV that the weather is going to [1] really nice. I\'ll make [2] few sandwiches, so can you bring some drinks? I\'ll also bring my blanket for us to sit on.'
      },
      {
        from: 'Tom', to: 'Andy',
        content: 'Yes, a picnic sounds like a great idea! I can get some drinks [3] my way. Would you prefer cola [4] orange juice? The shop near my house sells both of [5]. Don\'t forget your swimming things. I\'ll bring my football [6] I can find it.'
      }
    ],
    questions: [
      { id: 1, answers: ['be'] },
      { id: 2, answers: ['a'] },
      { id: 3, answers: ['on'] },
      { id: 4, answers: ['or', 'to'] },
      { id: 5, answers: ['them', 'these', 'those'] },
      { id: 6, answers: ['if'] },
    ]
  },
  {
    id: 19, source: '校园版真题2 Test3',
    example: { number: 0, answer: 'YOU' },
    passages: [
      {
        from: 'Marty', to: 'Robbie',
        content: 'Hi Robbie,\nHave (0) ever played baseball? I played it at my last school and it [1] really good fun! We liked it more [2] all the other sports. I\'d like to start a baseball club here if enough students are interested. What [3] you think?'
      },
      {
        from: 'Robbie', to: 'Marty',
        content: 'That sounds like [4] great idea! [5] don\'t you make a poster and ask Mrs Taylor to put it up in the sports hall? I\'m sure [6] are lots of students who\'d love to learn to play.'
      }
    ],
    questions: [
      { id: 1, answers: ['was', 'is'] },
      { id: 2, answers: ['than'] },
      { id: 3, answers: ['do'] },
      { id: 4, answers: ['a'] },
      { id: 5, answers: ['Why'] },
      { id: 6, answers: ['there'] },
    ]
  },
  {
    id: 20, source: '校园版真题2 Test4',
    example: { number: 0, answer: 'ARE' },
    passages: [
      {
        from: 'Amy', to: 'Jake',
        content: 'I\'m on holiday with my family and we (0) having a great time! Our hotel is really nice and [1] is a beautiful beach not far away, where we go swimming. The weather here is much warmer [2] it is at home.\n[3] rained yesterday so we decided to go ice-skating. The day was a [4] of fun, and we might go again if the weather is bad tomorrow!\nWe\'re planning [5] do some shopping in the town centre at [6] weekend to get some presents, and then we\'re coming home on Monday.\nSee you soon!'
      }
    ],
    questions: [
      { id: 1, answers: ['there'] },
      { id: 2, answers: ['than'] },
      { id: 3, answers: ['It'] },
      { id: 4, answers: ['lot', 'load'] },
      { id: 5, answers: ['to'] },
      { id: 6, answers: ['the'] },
    ]
  },

  // ── 标准版真题1 ───────────────────────────────────────────
  {
    id: 21, source: '标准版真题1 Test1',
    example: { number: 0, answer: 'to' },
    passages: [
      {
        content: 'Welcome (0) my blog! My name is Mark and I\'m 23 years old. I was born in Australia, but I grew [1] in France. [2] the moment, I am working in Paris, as a photographer for a fashion magazine.\nI live near my office and [3] only takes me ten minutes to get there. Sometimes I have to travel to other countries to work, [4] example, last month I went to [5] USA to take photos at a big fashion show.\nI get to meet a lot of very interesting people. Leave me a message [6] you want to ask me any questions.'
      }
    ],
    questions: [
      { id: 1, answers: ['up'] },
      { id: 2, answers: ['At'] },
      { id: 3, answers: ['it'] },
      { id: 4, answers: ['for'] },
      { id: 5, answers: ['the'] },
      { id: 6, answers: ['if'] },
    ]
  },
  {
    id: 22, source: '标准版真题1 Test2',
    example: { number: 0, answer: 'at' },
    passages: [
      {
        from: 'Bea', to: 'Tania',
        content: 'How are things? Are you busy (0) the moment? [1] you remember our conversation last weekend about going [2] the theatre? Well, the play \'Fathers and Sons\' [3] showing next week at West Theatre. Shall [4] go and see it together? I\'ve heard it\'s very good!'
      },
      {
        from: 'Tania', to: 'Bea',
        content: 'That sounds great! [5] would you like to go? I\'m busy on Friday next week, [6] I\'m free the other days. Shall I get the tickets? I can buy them online. We\'ve both got student ID cards, so they won\'t be too expensive.'
      }
    ],
    questions: [
      { id: 1, answers: ['Do', 'Can'] },
      { id: 2, answers: ['to'] },
      { id: 3, answers: ['is'] },
      { id: 4, answers: ['we'] },
      { id: 5, answers: ['When'] },
      { id: 6, answers: ['but', 'although', 'though', 'however'] },
    ]
  },
  {
    id: 23, source: '标准版真题1 Test3',
    example: { number: 0, answer: 'hope' },
    passages: [
      {
        from: 'Jenny', to: 'David',
        content: 'Hi David,\nI (0) you\'re well. It\'s my brother Tom\'s birthday [1] month, and I don\'t know [2] to buy him for a present. Have you got [3] ideas? He\'s the same age [4] you, and likes the same kind of things.\nThanks,\nJenny'
      },
      {
        from: 'David', to: 'Jenny',
        content: 'Hi Jenny,\nI think I can help you! Why not get Tom a book? I\'ve just read Dragon Teeth, which was written [5] Michael Crichton. He\'s such a fantastic author! I loved it, and I think [6] brother would like it too.\nDavid'
      }
    ],
    questions: [
      { id: 1, answers: ['next', 'this'] },
      { id: 2, answers: ['what'] },
      { id: 3, answers: ['any', 'some'] },
      { id: 4, answers: ['as'] },
      { id: 5, answers: ['by'] },
      { id: 6, answers: ['your'] },
    ]
  },
  {
    id: 24, source: '标准版真题1 Test4',
    example: { number: 0, answer: 'with' },
    passages: [
      {
        from: 'Cara', to: 'Ashley',
        content: 'I\'m in Ireland staying (0) my friend and we\'re having a great holiday. My friend\'s house is near the sea, so we can [1] swimming every day, and there are lots of other things to do as well. Yesterday we rode horses on the beach and had [2] lovely picnic in the mountains.\nHow are you? [3] you been on holiday yet? I\'ll be back home at the weekend. [4] you want to go to the cinema [5] week? There\'s a new film I really want to see. Please [6] me know.'
      }
    ],
    questions: [
      { id: 1, answers: ['go', 'enjoy'] },
      { id: 2, answers: ['a'] },
      { id: 3, answers: ['Have'] },
      { id: 4, answers: ['Do'] },
      { id: 5, answers: ['next', 'this', 'that'] },
      { id: 6, answers: ['let'] },
    ]
  },

  // ── 标准版真题2 ───────────────────────────────────────────
  {
    id: 25, source: '标准版真题2 Test1',
    example: { number: 0, answer: 'are' },
    passages: [
      {
        from: 'Sylvia', to: 'Felix',
        content: 'I\'m so glad we (0) doing our history project together! [1] you think the college library will have some useful books about local history? [2] don\'t we meet there tomorrow? Remember we\'ve only got three weeks before we have [3] give the project to the teacher.'
      },
      {
        from: 'Felix', to: 'Sylvia',
        content: 'Don\'t worry! [4] we work really hard, then our project will be brilliant! Yes, let\'s meet at the college library. I\'m sure we\'ll find lots [5] interesting books there. I\'m afraid I\'m busy tomorrow, [6] I\'m free on Friday. Can you meet me then?'
      }
    ],
    questions: [
      { id: 1, answers: ['Do'] },
      { id: 2, answers: ['Why'] },
      { id: 3, answers: ['to'] },
      { id: 4, answers: ['If'] },
      { id: 5, answers: ['of'] },
      { id: 6, answers: ['but', 'however', 'although'] },
    ]
  },
  {
    id: 26, source: '标准版真题2 Test2',
    example: { number: 0, answer: 'are' },
    passages: [
      {
        from: 'Erin', to: 'Lara',
        content: 'How (0) you? I moved into a new house last month. It\'s a lot bigger [1] my old house, and [2] is a big garden at the back. I can\'t wait [3] grow some vegetables in it!\nIt\'s taken me and my parents [4] long time to paint all the rooms, but we\'re going to finish them soon. So [5] you like to come and stay with me next weekend? If the weather\'s good, Mum says we can have a barbecue. I can show [6] some interesting places in my town too.\nWrite soon!'
      }
    ],
    questions: [
      { id: 1, answers: ['than'] },
      { id: 2, answers: ['there'] },
      { id: 3, answers: ['to'] },
      { id: 4, answers: ['a'] },
      { id: 5, answers: ['would'] },
      { id: 6, answers: ['you'] },
    ]
  },
  {
    id: 27, source: '标准版真题2 Test3',
    example: { number: 0, answer: 'to' },
    passages: [
      {
        from: 'Ellie', to: 'Leah',
        content: 'I\'m really pleased you\'re coming (0) stay at my house next week. We haven\'t seen each other for such [1] long time!\n[2] are lots of things to do [3] my town, so I\'m sure we\'ll have lots of fun. We can visit the museum and the theatre. And how about going shopping too? Our new shopping centre has some really great shops, and they\'re cheaper [4] the ones in the city.\nI\'ll meet you at the airport on Saturday. [5] time does your flight arrive? Please let [6] know and I\'ll make a plan. I can\'t wait to see you again!'
      }
    ],
    questions: [
      { id: 1, answers: ['a'] },
      { id: 2, answers: ['There'] },
      { id: 3, answers: ['in', 'near', 'around'] },
      { id: 4, answers: ['than'] },
      { id: 5, answers: ['What'] },
      { id: 6, answers: ['me', 'us'] },
    ]
  },
  {
    id: 28, source: '标准版真题2 Test4',
    example: { number: 0, answer: 'to' },
    passages: [
      {
        from: 'Marcia', to: 'Annie',
        content: 'I am trying (0) start a girls\' basketball team at college. Are you interested [1] joining it? Basketball\'s [2] excellent way to get exercise, and it can also be a [3] of fun.\nOur sports teacher, Mrs Thompson, says she will be our coach, but only [4] we can get enough girls for a team. We will probably practise once or twice a week in the college gym.\n[5] you know any other girls we can ask to be on the team? Let me know as soon [6] possible so we can begin practising.'
      }
    ],
    questions: [
      { id: 1, answers: ['in'] },
      { id: 2, answers: ['an'] },
      { id: 3, answers: ['lot', 'load'] },
      { id: 4, answers: ['if', 'when'] },
      { id: 5, answers: ['Do'] },
      { id: 6, answers: ['as'] },
    ]
  },

  // ── 八套全真模拟 ──────────────────────────────────────────
  {
    id: 29, source: '八套全真模拟 Test1',
    example: { number: 0, answer: 'that' },
    passages: [
      {
        from: 'Andrew', to: 'Sylvia',
        content: 'Hi Sylvia,\nI\'m glad to hear (0) you like your new school in Paris. What\'s it like? Is it bigger [1] your old school here in Bristol? It must be hard to listen to everyone speak French all the time, but I\'m sure it will get easier [2] a few months.\n[3] your new classmates friendly? What about the teachers? Do they give you a [4] of homework? Send [5] some pictures, please!\nWell, I [6] to go now.\nWrite soon!\nAndrew'
      }
    ],
    questions: [
      { id: 1, answers: ['than'] },
      { id: 2, answers: ['in'] },
      { id: 3, answers: ['Are'] },
      { id: 4, answers: ['lot'] },
      { id: 5, answers: ['me'] },
      { id: 6, answers: ['have'] },
    ]
  },
  {
    id: 30, source: '八套全真模拟 Test2',
    example: { number: 0, answer: 'into' },
    passages: [
      {
        from: 'Elizabeth', to: 'Daniel',
        content: 'Hi Daniel,\nI\'ve just moved (0) our new home. It\'s very [1] to the sea, so there\'s a wonderful view of the beach. It\'s also really big. It\'s [2] three floors and a large garden.\nI have my own room now, so I don\'t [3] to share it with my brother any more. We still need to buy our beds, so we\'re [4] to the furniture shop this afternoon. I might get a double bed, because this new room is larger [5] my old bedroom in Manchester. I\'m sending you [6] photos so you can see all the rooms yourself!\nWrite soon!\nElizabeth'
      }
    ],
    questions: [
      { id: 1, answers: ['close'] },
      { id: 2, answers: ['got'] },
      { id: 3, answers: ['have'] },
      { id: 4, answers: ['going'] },
      { id: 5, answers: ['than'] },
      { id: 6, answers: ['some'] },
    ]
  },
  {
    id: 31, source: '八套全真模拟 Test3',
    example: { number: 0, answer: 'Last' },
    passages: [
      {
        from: 'Harry', to: 'Amanda',
        content: 'Guess what? (0) week I met Perry Stevens, the pop star. He sat next [1] me on the train to Glasgow!\nHe was really nice and friendly. He was [2] to visit his grandmother [3] lives in Glasgow. He said he lived there until a few years [4] and now he really misses Scotland. I told him [5] much I loved his music.\nHe [6] me his email address and told me to write to him if I wanted to see his concert in Edinburgh next December! I can\'t believe it!\nAnyway, write soon!\nHarry'
      }
    ],
    questions: [
      { id: 1, answers: ['to'] },
      { id: 2, answers: ['going'] },
      { id: 3, answers: ['who'] },
      { id: 4, answers: ['ago'] },
      { id: 5, answers: ['how'] },
      { id: 6, answers: ['gave'] },
    ]
  },
  {
    id: 32, source: '八套全真模拟 Test4',
    example: { number: 0, answer: 'for' },
    passages: [
      {
        from: 'Zoe', to: 'Tiffany',
        content: 'Hi Tiffany,\nI\'ve just received the swimming costume you sent me (0) my birthday. Thank you [1] much! I\'m going to wear [2] for my competition next Thursday.\nThe new swimming pool is really cool. It\'s bigger [3] the one I went to last year. It\'s not very far [4] my home, so I usually walk there if it isn\'t raining.\nI like my new teammates a [5]. They\'re friendly and they swim very fast, so I think we\'ll win the competition. [6] the way, do you think you can come to the competition? I\'d love to see you!\nBye for now,\nZoe'
      }
    ],
    questions: [
      { id: 1, answers: ['so'] },
      { id: 2, answers: ['it'] },
      { id: 3, answers: ['than'] },
      { id: 4, answers: ['from'] },
      { id: 5, answers: ['lot'] },
      { id: 6, answers: ['By'] },
    ]
  },
  {
    id: 33, source: '八套全真模拟 Test5',
    example: { number: 0, answer: 'from' },
    passages: [
      {
        from: 'Brenda', to: 'Ewan',
        content: 'Hi Ewan,\nI\'m back (0) my holiday in Japan. What a cool country it is!\nWe stayed in Tokyo, the capital, which is a very large city. [1] are more than nine million people living there! I really liked it [2] it\'s very modern. Also, you [3] take a fantastic superfast train to visit other places in Japan.\nThe best bit of my trip [4] when we went to Jigokudani Park. We saw [5] of monkeys having baths in hot water pools. They are not afraid of people [6] you can get close to them, but you can\'t touch or give them food, of course.\nI\'ll tell you more when I see you soon.\nBrenda'
      }
    ],
    questions: [
      { id: 1, answers: ['There'] },
      { id: 2, answers: ['because', 'as'] },
      { id: 3, answers: ['can'] },
      { id: 4, answers: ['was'] },
      { id: 5, answers: ['lots'] },
      { id: 6, answers: ['so'] },
    ]
  },
  {
    id: 34, source: '八套全真模拟 Test6',
    example: { number: 0, answer: 'from' },
    passages: [
      {
        from: 'Cassie', to: 'Julia',
        content: 'Hi Julia,\nI\'ve just come back (0) my holiday in Canada. I must tell you about the amazing hotel [1] we stayed in Quebec City.\nEvery year they have to build this hotel again because it\'s made out [2] ice – can you believe it? It\'s very cold inside, of course, but there were warm sleeping bags [3] every room.\nWe went to this hotel [4] my mother\'s birthday. She loves cold weather and snow, [5] Dad gave her this surprise present. Unfortunately, we [6] stayed there one night because it\'s very expensive, but I\'ll never forget it!\nBye for now,\nCassie'
      }
    ],
    questions: [
      { id: 1, answers: ['where'] },
      { id: 2, answers: ['of'] },
      { id: 3, answers: ['in'] },
      { id: 4, answers: ['for', 'on'] },
      { id: 5, answers: ['so'] },
      { id: 6, answers: ['only'] },
    ]
  },
  {
    id: 35, source: '八套全真模拟 Test7',
    example: { number: 0, answer: "'ve" },
    passages: [
      {
        from: 'Carla', to: 'Lucy',
        content: 'Hi Lucy,\nMy name is Carla. I\'m 12 and I live in Mexico. I (0) got one brother and one sister. Both of [1] are younger than me. My brother Alfredo is the youngest in the family and it [2] his birthday last week.\nI love playing tennis [3] my friends at the weekend. We go to the tennis club by bus. I also enjoy playing the piano. I joined a band at school two years [4]. I go to band practice twice [5] week. I have loads of fun and learn a [6] of new songs.\nWhat about you? Write soon!\nCarla'
      }
    ],
    questions: [
      { id: 1, answers: ['them'] },
      { id: 2, answers: ['was'] },
      { id: 3, answers: ['with'] },
      { id: 4, answers: ['ago'] },
      { id: 5, answers: ['a', 'every'] },
      { id: 6, answers: ['lot'] },
    ]
  },
  {
    id: 36, source: '八套全真模拟 Test8',
    example: { number: 0, answer: 'it' },
    passages: [
      {
        from: 'Claire', to: 'Joseph',
        content: 'Hi Joseph!\nI\'m writing you this mail on my new computer. It\'s fantastic! I bought (0) yesterday and I [1] use it already! It\'s not as difficult [2] my old one.\nWhen I bought the computer they gave [3] two free gifts: a mouse and some great games. When [4] you going to come and play [5] me?\nI am very happy with my choice. I will [6] able to do all my homework quickly, and it will be fun, too!\nWrite soon,\nClaire'
      }
    ],
    questions: [
      { id: 1, answers: ['can'] },
      { id: 2, answers: ['as'] },
      { id: 3, answers: ['me'] },
      { id: 4, answers: ['are'] },
      { id: 5, answers: ['with'] },
      { id: 6, answers: ['be'] },
    ]
  },

  // ── Exam Booster ─────────────────────────────────────────
  {
    id: 37, source: 'Exam Booster Part5-1',
    example: { number: 0, answer: 'in' },
    passages: [
      {
        from: 'Clara', to: 'Jenni',
        content: 'Hi Jenni,\nHow are you? Is your new life (0) Canada going well? And [1] is your university course like? Have you made new friends? [2] you think you might come back for a visit soon?\nClara'
      },
      {
        from: 'Jenni', to: 'Clara',
        content: 'Hi Clara,\nI\'m fine, thanks. I\'ve been here for a month now. It was quite difficult for the first few weeks [3] I didn\'t know anyone, but now I know more people, I\'m starting [4] enjoy myself. I\'m sure that I [5] come home for a few weeks before the end of [6] year, so see you in a few months.\nKeep writing to me!\nJenni'
      }
    ],
    questions: [
      { id: 1, answers: ['what'] },
      { id: 2, answers: ['Do'] },
      { id: 3, answers: ['because', 'as', 'since'] },
      { id: 4, answers: ['to'] },
      { id: 5, answers: ['will', "'ll", 'can'] },
      { id: 6, answers: ['this', 'the'] },
    ]
  },
  {
    id: 38, source: 'Exam Booster Part5-2',
    example: { number: 0, answer: "am / 'm" },
    passages: [
      {
        from: 'Ali', to: 'Kris',
        content: 'Hi Kris,\nI (0) going cycling with my brother next Sunday. Would you like [1] come? Don\'t worry if you don\'t have a good bike – we\'ve got one you can borrow. We\'ll take a picnic, so we won\'t need to eat in a café.\nLet [2] know if you want to come.\nAli'
      },
      {
        from: 'Kris', to: 'Ali',
        content: 'Hi Ali,\nThat\'s [3] great idea. Thanks very much [4] offering to lend me a bike, but I got a new one few weeks ago. I\'ll bring lunch and something to drink. [5] there anything else that I should bring? Also, [6] time do you think we\'ll be home? I\'m going out in the evening.\nKris'
      }
    ],
    questions: [
      { id: 1, answers: ['to'] },
      { id: 2, answers: ['me', 'us'] },
      { id: 3, answers: ['a'] },
      { id: 4, answers: ['for'] },
      { id: 5, answers: ['Is'] },
      { id: 6, answers: ['what'] },
    ]
  },
  {
    id: 39, source: 'Exam Booster Part5-3',
    example: { number: 0, answer: 'at' },
    passages: [
      {
        from: 'Sonia', to: 'Mum and Dad',
        content: 'Hi Mum and Dad,\nI hope everything\'s OK (0) home. I arrived in New Zealand yesterday. On the plane, I sat next [1] a really nice woman who told me about [2] of interesting places I could visit while I\'m here. And I\'ve found a place to stay [3] isn\'t too expensive. I\'m going to be in New Zealand for nearly [4] month, and then I\'m going to fly to [5] USA.\nDad, did you ask your friend Patricia in San Francisco [6] it\'s OK for me to stay with her next month?\nI\'ll write again soon.\nSonia'
      }
    ],
    questions: [
      { id: 1, answers: ['to'] },
      { id: 2, answers: ['lots', 'plenty', 'loads'] },
      { id: 3, answers: ['which', 'that'] },
      { id: 4, answers: ['one', 'a'] },
      { id: 5, answers: ['the'] },
      { id: 6, answers: ['if', 'whether'] },
    ]
  },
]

// 按来源分组（用于侧边栏显示）
export const PART5_GROUPS = [
  { label: 'Trainer1', ids: [1,2,3,4,5,6] },
  { label: 'Trainer2', ids: [7,8,9,10,11,12] },
  { label: '校园版真题1', ids: [13,14,15,16] },
  { label: '校园版真题2', ids: [17,18,19,20] },
  { label: '标准版真题1', ids: [21,22,23,24] },
  { label: '标准版真题2', ids: [25,26,27,28] },
  { label: '八套全真模拟', ids: [29,30,31,32,33,34,35,36] },
  { label: 'Exam Booster', ids: [37,38,39] },
]
