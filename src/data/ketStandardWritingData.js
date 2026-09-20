// Writing prompts from the standard-version source paper. Model answers are
// original teaching examples, not purported official answer-key text.
export const KET_STANDARD_WRITING = {
  'ket-standard-1-test1': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: 'You took part in a sports competition at the weekend.\nWrite an email to your English friend, Robbie.\n\nIn your email:\n• say which sport the competition was for\n• explain how you felt at the start of the competition\n• say how well you did in the competition.\n\nWrite 25 words or more.',
      modelAnswer: 'Hi Robbie,\nI took part in a football competition last weekend. I felt nervous at first, but my team played well and we came second. I was very happy!\nBest wishes,\nAlex',
      tips: ['开头称呼 Robbie', '回答运动、开始时的感受和比赛结果', '写25词或以上', '结尾署名'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
      imageSrc: '/images/ket/standard/book1-test1-story-page-000.jpg',
      imageCrop: 'story-strip',
      imageDesc: 'A girl buys fruit at a market, her bag breaks on the way home, and she picks up the fruit.',
      modelAnswer: 'Last Saturday, Emma went to the market and bought some fruit. On her way home, her shopping bag broke and the fruit fell onto the street. She stopped and picked it up. Then she put it back in the bag and walked home carefully.',
      tips: ['按三幅图的顺序叙述', '用一般过去时', '说明购物袋破了和女孩如何处理', '写35词或以上'],
    },
  ],
  'ket-standard-1-test2': [
    { part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:'Read the email from your English friend, Pat.\n\nPlease tell me about the picnic on Saturday. What time is it? Where shall we meet? What do I need to bring?\n\nWrite an email to Pat and answer the questions. Write 25 words or more.',modelAnswer:'Hi Pat,\nThanks for your email. The picnic starts at 2 p.m. on Saturday. Let’s meet at the main gate of Green Park. Please bring some sandwiches and water.\nBest wishes,\nAlex',tips:['先回应 Pat 的邮件','回答时间、见面地点和需要携带的物品','写25词或以上','使用称呼和结尾署名'] },
    { part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',imageSrc:'/images/ket/standard/book1-test2-story-page-000.jpg',imageCrop:'story-strip',imageDesc:'A girl sees a flowered dress in a shop, tries it on at home, and later meets another girl wearing the same dress at a party.',modelAnswer:'One afternoon, Mia saw a beautiful flowered dress in a shop window and bought it. At home, she tried it on and was very pleased. That evening, she wore it to a party. She was surprised to meet another girl wearing exactly the same dress.',tips:['按三幅图的顺序叙述','使用一般过去时','写清买裙子、试穿和聚会上的意外','写35词或以上'] },
  ],
  'ket-standard-1-test3': [
    {part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:'Read the email from your English friend, Alex.\n\nThank you for asking me to go skateboarding with you this weekend. Where shall we meet? What time shall I be there? What do I need to bring?\n\nWrite an email to Alex and answer the questions. Write 25 words or more.',modelAnswer:'Hi Alex,\nThanks for your email. Let’s meet outside the sports centre at 10 a.m. on Saturday. Please bring your skateboard, a helmet and some water.\nBest wishes,\nSam',tips:['先回应 Alex 的邮件','回答地点、时间和需要携带的物品','写25词或以上','使用称呼和结尾署名']},
    {part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',imageSrc:'/images/ket/standard/book1-test3-story-page-000.jpg',imageCrop:'story-strip',imageDesc:'A woman watches a television programme, calls a friend, and they later watch a horse show at the cinema.',modelAnswer:'One evening, Anna was watching television when she saw an advertisement for a new film about horses. She immediately called her friend and invited her to see it. The next day, they went to the cinema together and really enjoyed the film.',tips:['按三幅图的顺序叙述','使用一般过去时','写清看电视、打电话和一起看电影','写35词或以上']},
  ],
  'ket-standard-1-test4': [
    {part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:'You want to go to the shopping centre on Saturday with your English friend, Alex.\n\nIn your email:\n• ask Alex to go to the shopping centre with you on Saturday\n• say what you need to buy\n• explain how you will travel there.\n\nWrite 25 words or more.',modelAnswer:'Hi Alex,\nWould you like to go to the shopping centre with me on Saturday? I need to buy a new pair of shoes. We can travel there by bus.\nBest wishes,\nSam',tips:['邀请 Alex 周六一起去','说明需要买什么','说明交通方式','写25词或以上并使用称呼和署名']},
    {part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',imageSrc:'/images/ket/standard/book1-test4-story-page-000.jpg',imageCrop:'story-strip',imageDesc:'Two travellers arrive by boat, walk through a tropical forest and find monkeys in the trees.',modelAnswer:'One sunny day, Ben and Mia travelled to an island by boat. They walked into the forest with their cameras because they wanted to see wild animals. After a long walk, they heard a noise. They looked up and saw several monkeys in the trees, so they happily took lots of photos.',tips:['按三幅图的顺序叙述','使用一般过去时','写清乘船、进入树林和发现猴子','写35词或以上']},
  ],
  'ket-standard-2-test1': [
    {part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:'You visited a city in your country last weekend.\nWrite an email to your English friend, Alex.\n\nIn your email:\n• say which city you visited\n• tell Alex how you travelled there\n• explain what you did in the city.\n\nWrite 25 words or more.',modelAnswer:'Hi Alex,\nLast weekend I visited Shanghai with my family. We travelled there by train. We walked along the Bund, visited a museum and ate some delicious local food. It was a great trip!\nBest wishes,\nSam',tips:['说明去了哪座城市','说明交通方式','描述在城市里做了什么','写25词或以上并使用称呼和署名']},
    {part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',imageSrc:'/images/ket/standard/book2-test1-story-page-000.jpg',imageCrop:'story-strip',imageDesc:'A boy learns to play the guitar, performs in a café and later plays at a large concert.',modelAnswer:'When Leo was young, his father taught him to play the guitar. He practised every day and soon became very good. Later, he performed in a small café. The audience loved his music, and one day he played on a big stage in front of a huge crowd.',tips:['按三幅图的顺序叙述','使用一般过去时','写清学吉他、小型演出和大型演唱会','写35词或以上']},
  ],
  'ket-standard-2-test2': [
    {part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:'Read the email from your English friend, Chris.\n\nThanks for inviting me to your party next Saturday. Where will it be? What time will it start? What do I need to wear?\n\nWrite an email to Chris and answer the questions. Write 25 words or more.',modelAnswer:'Hi Chris,\nThanks for your email. The party will be at my house and it starts at 6 p.m. You can wear jeans and a T-shirt because it is an informal party.\nBest wishes,\nAlex',tips:['先回应 Chris 的邮件','回答地点、开始时间和穿着','写25词或以上','使用称呼和结尾署名']},
    {part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',imageSrc:'/images/ket/standard/book2-test2-story-page-000.jpg',imageCrop:'story-strip',imageDesc:'A snowboarder goes down a snowy hill, loses her sunglasses during a jump and walks back carrying her board.',modelAnswer:'One winter morning, Mia went snowboarding in the mountains. She went down a hill very fast and made a big jump. Her sunglasses flew off, but she did not notice at first. Afterwards, she carried her snowboard back up the hill and looked for them in the snow.',tips:['按三幅图的顺序叙述','使用一般过去时','写清滑行、眼镜掉落和返回寻找','写35词或以上']},
  ],
  'ket-standard-2-test3': [
    {part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:'Read the email from your English friend, Jan.\n\nThanks for telling me about the laptop you’re selling. Why are you selling it? How much money do you want for it? When can I collect it from you?\n\nWrite an email to Jan and answer the questions. Write 25 words or more.',modelAnswer:'Hi Jan,\nI’m selling the laptop because I’ve bought a new one. I’d like £120 for it. You can collect it from my house on Saturday afternoon.\nBest wishes,\nAlex',tips:['先回应 Jan 的邮件','回答出售原因、价格和领取时间','写25词或以上','使用称呼和结尾署名']},
    {part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',imageSrc:'/images/ket/standard/book2-test3-story-page-000.jpg',imageCrop:'story-strip',imageDesc:'Two friends cook a meal together, eat it at the table and wash the dishes afterwards.',modelAnswer:'One evening, Anna and Mia decided to cook dinner together. They prepared the vegetables and made a delicious meal in the kitchen. Then they sat at the table and enjoyed the food. When they finished eating, they worked together again and washed all the dishes.',tips:['按三幅图的顺序叙述','使用一般过去时','写清做饭、用餐和洗碗','写35词或以上']},
  ],
  'ket-standard-2-test4': [
    {part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:'You would like to go to the countryside this weekend.\nWrite an email to your English friend, Jerry.\n\nIn your email:\n• ask Jerry to go with you\n• tell Jerry what activities you’ll do\n• say who else you’ve asked to come.\n\nWrite 25 words or more.',modelAnswer:'Hi Jerry,\nWould you like to go to the countryside with me this weekend? We can go walking and have a picnic. I’ve also asked my cousin Ben to come with us.\nBest wishes,\nAlex',tips:['邀请 Jerry 一起去','说明活动安排','说明还邀请了谁','写25词或以上并使用称呼和署名']},
    {part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',imageSrc:'/images/ket/standard/book2-test4-story-page-000.jpg',imageCrop:'story-strip',imageDesc:'A man goes running on a hot day, becomes very thirsty and stops at a shop to buy a drink.',modelAnswer:'One sunny afternoon, Ben went running through town. The weather was very hot, and after a while he felt tired and thirsty. He saw a small shop nearby, so he stopped running and went inside. He bought a cold drink and felt much better.',tips:['按三幅图的顺序叙述','使用一般过去时','写清跑步、感到口渴和买饮料','写35词或以上']},
  ],
}
