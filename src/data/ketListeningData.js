// KET Listening Mock — 5 Parts
// type: 'sequential_mcq' | 'matching' | 'blanks'

export const KET_LISTENING_DATA = {
  1: {
    part: 1,
    title: 'Part 1 · 图片选择',
    type: 'sequential_mcq',
    instructions: '你将听到五段短对话。每段对话可以听两遍。根据对话内容，从 A、B、C 三个选项中选出最佳答案。',
    items: [
      {
        n: 1,
        script: "Man: Did you have breakfast this morning, Amy? Woman: Yes, I had some toast and a cup of tea. Man: No eggs? Woman: No, I don't really like eggs.",
        question: 'What did Amy have for breakfast?',
        opts: ['Toast and eggs', 'Toast and tea', 'Eggs and tea'],
        ans: 1,
        exp: '女生说她吃了吐司（toast）和茶（a cup of tea），并明确表示不喜欢鸡蛋（No, I don\'t really like eggs）。',
      },
      {
        n: 2,
        script: "Girl: Where shall we meet before the film? Boy: How about outside the cinema? Girl: It might be crowded. What about the café next to the park? Boy: OK, that sounds good.",
        question: 'Where will they meet?',
        opts: ['Outside the cinema', 'In the park', 'At the café'],
        ans: 2,
        exp: '女生提议在公园旁的咖啡馆（café next to the park）见面，男生表示同意（sounds good）。',
      },
      {
        n: 3,
        script: "Woman: Excuse me, how much is this bag? Shop assistant: It's thirty-five pounds. Woman: That's a bit expensive. Shop assistant: Well, it was fifty pounds — it's on sale now. Woman: OK, I'll take it.",
        question: 'How much does the bag cost now?',
        opts: ['£25', '£35', '£50'],
        ans: 1,
        exp: '店员说现价是 thirty-five pounds（35英镑），原价是fifty pounds（50英镑）。',
      },
      {
        n: 4,
        script: "Boy: Do you know what time the museum opens? Girl: I think it opens at nine, but let me check... No, it says here it opens at half past nine on Saturdays. Boy: Oh right, thanks.",
        question: 'What time does the museum open on Saturday?',
        opts: ['9:00', '9:15', '9:30'],
        ans: 2,
        exp: '女生查阅后确认博物馆周六在 half past nine（9:30）开门，而不是9:00。',
      },
      {
        n: 5,
        script: "Woman: What are you doing tomorrow, Jack? Man: I was going to play football, but my friend cancelled. So I'm going swimming instead. Woman: That sounds fun!",
        question: 'What sport will Jack play tomorrow?',
        opts: ['Football', 'Swimming', 'Tennis'],
        ans: 1,
        exp: 'Jack 原本计划踢足球（football），但朋友取消了，所以改成游泳（swimming）。',
      },
    ],
  },

  2: {
    part: 2,
    title: 'Part 2 · 配对题',
    type: 'matching',
    instructions: '你将听到五个人谈论他们的爱好。将每个人（第 1–5 题）与对应的爱好（A–H）配对。每个选项只能使用一次。录音听两遍。',
    script: [
      "Number one. Sam says: I love taking photos of nature and animals. I always carry my camera when I go for a walk in the countryside.",
      "Number two. Kate says: I really enjoy making cakes and trying new recipes at home. My family loves eating what I make.",
      "Number three. David says: I like going out on my bike at weekends. There's a great cycle path near my house, and I go almost every Saturday.",
      "Number four. Anna says: I spend a lot of time outside in my garden. I grow vegetables and flowers. It's very relaxing.",
      "Number five. Ben says: I love sitting down with a good book. I read for at least an hour every evening before bed.",
    ].join(' \n\n '),
    items: ['Sam', 'Kate', 'David', 'Anna', 'Ben'],
    options: [
      { letter: 'A', text: 'Photography' },
      { letter: 'B', text: 'Cooking' },
      { letter: 'C', text: 'Reading' },
      { letter: 'D', text: 'Cycling' },
      { letter: 'E', text: 'Painting' },
      { letter: 'F', text: 'Swimming' },
      { letter: 'G', text: 'Gaming' },
      { letter: 'H', text: 'Gardening' },
    ],
    ans: [0, 1, 3, 7, 2], // A, B, D, H, C
    exps: [
      'Sam 说他喜欢拍摄自然和动物（taking photos），对应 A. Photography。',
      'Kate 喜欢做蛋糕和新食谱（making cakes），对应 B. Cooking。',
      'David 每周末骑自行车（go out on my bike），对应 D. Cycling。',
      'Anna 在花园种蔬菜和花（grow vegetables and flowers），对应 H. Gardening。',
      'Ben 每晚读书一小时（read every evening），对应 C. Reading。',
    ],
  },

  3: {
    part: 3,
    title: 'Part 3 · 填空题',
    type: 'blanks',
    instructions: '你将听到一段电话留言。根据听到的内容，完成下方预约表格。每空填一个词或数字。录音听两遍。',
    context: 'Greenfield Sports Centre — 网球场预约',
    script: "Hello, this is a message for the Greenfield Sports Centre. I'd like to book the tennis court for next Saturday. My name is Peterson — that's P-E-T-E-R-S-O-N. I'd like to book for two hours, starting at eleven o'clock in the morning. There will be four people altogether. Please could you call me back on zero seven eight four five, three three two, one nine zero? Thank you very much.",
    items: [
      {
        label: '客户姓名 (Name)',
        ans: ['peterson', 'Peterson'],
        exp: '留言者拼出了自己的名字：P-E-T-E-R-S-O-N，即 Peterson。',
      },
      {
        label: '预约日期 (Day)',
        ans: ['saturday', 'Saturday', 'next saturday', 'next Saturday'],
        exp: '留言者说 "next Saturday"，即下周六。',
      },
      {
        label: '开始时间 (Start time)',
        ans: ['11', '11:00', '11am', '11 am', 'eleven', "eleven o'clock"],
        exp: '开始时间是 eleven o\'clock，即上午11点。',
      },
      {
        label: '人数 (Number of people)',
        ans: ['4', 'four'],
        exp: '共四人（four people altogether）。',
      },
      {
        label: '联系电话 (Phone number)',
        ans: ['07845 332 190', '07845332190', '07845-332-190'],
        exp: '电话号码是 07845 332 190。',
      },
    ],
  },

  4: {
    part: 4,
    title: 'Part 4 · 单选题',
    type: 'sequential_mcq',
    instructions: '你将听到五段对话。每段对话可以听两遍。根据对话内容，从 A、B、C 三个选项中选出最佳答案。',
    items: [
      {
        n: 1,
        script: "Man: Did you have a good holiday, Emma? Woman: Yes, it was great! I went to Spain. Man: I thought you were going to France? Woman: We changed our plans at the last minute. Spain was amazing.",
        question: 'Where did Emma go on holiday?',
        opts: ['France', 'Spain', 'Italy'],
        ans: 1,
        exp: 'Emma 说她去了西班牙（Spain），虽然原来计划去法国（France）但临时改变了计划。',
      },
      {
        n: 2,
        script: "Girl: What time does the next train to Brighton leave? Station worker: There's one at quarter past four, and then the next one is at half past four. Girl: I'll take the half past four one please. Station worker: Platform three.",
        question: 'What time will the girl travel?',
        opts: ['4:00', '4:15', '4:30'],
        ans: 2,
        exp: '女孩说她要搭乘 half past four（4:30）那班火车，而不是 quarter past four（4:15）。',
      },
      {
        n: 3,
        script: "Boy: Did you get anything nice when you went shopping? Girl: I wanted a dress but I couldn't find one I liked. So I bought some shoes instead. Boy: Cool! What colour are they? Girl: Blue.",
        question: 'What did the girl buy?',
        opts: ['A dress', 'A bag', 'Some shoes'],
        ans: 2,
        exp: '女孩想买裙子（dress）但没找到合适的，最后买了鞋子（shoes）。',
      },
      {
        n: 4,
        script: "Woman: Mike, you're late again! Man: I'm really sorry. My bus didn't come, so I had to walk all the way here. Woman: You should have called a taxi. Man: I know, I'm sorry.",
        question: 'Why is Mike late?',
        opts: ['He missed his bus.', 'The bus did not come.', 'His taxi was late.'],
        ans: 1,
        exp: 'Mike 说公车没有来（bus didn\'t come），所以他只能一路走过来，不是错过公车也不是打车。',
      },
      {
        n: 5,
        script: "Girl: What's the weather like outside? Boy: It was really sunny this morning, but it's started raining now. Girl: Oh no, I didn't bring an umbrella. Boy: You can borrow mine if you want.",
        question: 'What is the weather like now?',
        opts: ['Sunny', 'Cloudy', 'Rainy'],
        ans: 2,
        exp: '男孩说现在已经开始下雨了（it\'s started raining now），而上午是晴天（sunny）。',
      },
    ],
  },

  5: {
    part: 5,
    title: 'Part 5 · 配对题',
    type: 'matching',
    instructions: '你将听到一位老师向同学们介绍学校郊游安排。将第 1–5 题中的事项与正确的人物（A–H）配对。录音听两遍。',
    script: "OK everyone, please listen carefully. I'm Miss Brown, and I'm going to tell you about our school trip next Friday. First — Tom, you need to bring your permission form tomorrow. You're the only one who hasn't given it to me yet. Sarah, I'd like you to help me collect the money from everyone before we leave. You're very good at organising things. We'll be travelling by coach, and Mr Lee will be driving us to the museum. Amy, please remember to bring a packed lunch — the café at the museum is closed on Fridays. And finally, Jack — I'd like you to take some photos during the trip for the school newsletter. Does everyone understand? Great, see you on Friday.",
    items: [
      'needs to bring a permission form',
      'will help collect money',
      'will drive the coach',
      'should bring a packed lunch',
      'will take photographs',
    ],
    options: [
      { letter: 'A', text: 'Miss Brown' },
      { letter: 'B', text: 'Tom' },
      { letter: 'C', text: 'Sarah' },
      { letter: 'D', text: 'Mr Lee' },
      { letter: 'E', text: 'Amy' },
      { letter: 'F', text: 'Jack' },
      { letter: 'G', text: 'Mrs White' },
      { letter: 'H', text: 'Daniel' },
    ],
    ans: [1, 2, 3, 4, 5], // Tom(B), Sarah(C), Mr Lee(D), Amy(E), Jack(F)
    exps: [
      'Miss Brown 提醒 Tom 需要带回执表（permission form）。',
      'Miss Brown 请 Sarah 帮忙向大家收钱（collect the money）。',
      'Mr Lee 将驾驶大巴（driving the coach）前往博物馆。',
      'Miss Brown 提醒 Amy 要带午餐（packed lunch），因为博物馆咖啡馆周五不开。',
      'Miss Brown 请 Jack 在郊游中拍照（take some photos）供学校通讯使用。',
    ],
  },
}
