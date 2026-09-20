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
}
