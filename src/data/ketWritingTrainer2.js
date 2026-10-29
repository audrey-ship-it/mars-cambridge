// A2 Key for Schools Trainer 2 — Writing (Part 6 email / Part 7 story).
// 题目文字逐字取自《Trainer2学生用书.pdf》扫描件；范文为原创建模答案，非官方答案，不标注官方。
// 注：Test 1 Part 6 原书邮件头误印为 “From: Fiona / Subject: Louisa”（正文署名与任务说明均为
// Robin），此处按任务说明与署名取 Robin。
export const KET_TRAINER2_WRITING = {
  'ket-trainer2-test1': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: "Read this email from your English-speaking friend, Robin.\n\nHi,\nI'm so glad you can come to my party! What activity do you think everyone will want to do? What music would you like to hear at the party? And how will you get to my house?\nThanks,\nRobin\n\nWrite an email to Robin and answer his questions. Write 25 words or more.",
      modelAnswer: "Hi Robin,\nI'm really excited about your party! I think everyone will want to play games in your garden. Could you play some pop music, please? My sister can drive me to your house, so I'll arrive at about six.\nSee you soon,\nAlex",
      tips: ['开头称呼 Robin', '回答三个问题：大家想玩什么活动、想听什么音乐、怎么去他家', '写25词或以上', '结尾署名并问候'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
      imageSrc: '/images/ket/trainer2/test1-story.jpg',
      imageDesc: 'A boy sees a striped top in a video on his phone, he finds the same striped top in a clothes shop, and he wears it and shows it to his friend.',
      modelAnswer: 'While Leo was watching a video of his favourite band, he saw the cool striped top that the singer wore. When he went shopping, he found the same top in a clothes shop. It was expensive, but he bought it. He wore it immediately, and showed it to his friend.',
      tips: ['按三幅图的顺序叙述', '用一般过去时', '写清看到视频、店里买到和穿上展示', '写35词或以上'],
    },
  ],
  'ket-trainer2-test2': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: "You visited your English friend Lisa's home last weekend, but you left something there.\n\nWrite an email to Lisa:\n• say what you left\n• explain where you think it is\n• ask Lisa to return it to you.\n\nWrite 25 words or more.",
      modelAnswer: "Hi Lisa,\nThank you for a great weekend! I think I left my blue school bag at your home. Maybe it is under the bed in your room, or in the bathroom. Could you please post it to me? Thank you!\nBest wishes,\nEmma",
      tips: ['开头称呼 Lisa', '写清三件事：落下了什么、可能在哪里、请她寄回', '写25词或以上', '结尾署名并致谢'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
      imageSrc: '/images/ket/trainer2/test2-story.jpg',
      imageDesc: 'A girl and her father arrive at a big sports shop by car, the girl chooses a surfboard and they buy it, and then the girl goes surfing at the beach while her father helps her in the water.',
      modelAnswer: "Last Saturday, Kate's dad took her to a big sports shop by car. Kate chose a beautiful surfboard, and her dad bought it for her. Then they went to the beach. Dad held Kate's hand in the water while she surfed. 'This is amazing, dad!' she said happily.",
      tips: ['按三幅图的顺序叙述', '用一般过去时', '给人物起名字（如 Kate）', '写35词或以上'],
    },
  ],
  'ket-trainer2-test3': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: "Read this email from your English-speaking friend, Kim.\n\nHi,\nI'm visiting your town with my family next weekend. Where should I go with my family? Can you tell me about a good place to eat? Would you like to join us?\nKim\n\nWrite an email to Kim and answer the questions. Write 25 words or more.",
      modelAnswer: "Hi Kim,\nHow exciting! I think your family will love the science museum in the city centre — it has fun shows for children. For a good meal, try Mario's Café near the park. The pizza there is delicious. I would love to join you! Let's meet on Saturday at 12 o'clock.\nSee you soon,\nBen",
      tips: ['开头称呼 Kim', '回答三个问题：带家人去哪玩、好吃的餐厅、要不要加入', '写25词或以上', '结尾署名并问候'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
      imageSrc: '/images/ket/trainer2/test3-story.jpg',
      imageDesc: 'A boy phones his friend while a girl lies on the sofa feeling bored, two girls meet and play basketball together outside, and a group of friends gathers around a boy who plays the guitar with a basketball nearby.',
      modelAnswer: "Last Saturday, Amy felt bored at home, so she phoned her friend Bella and invited her to play basketball in the park. Bella was happy to go, and soon some other friends joined them. Then a boy arrived with his guitar, and everyone sang songs together. They had lots of fun.",
      tips: ['按三幅图的顺序叙述', '用一般过去时', '给人物起名字（如 Amy 和 Bella）', '写清打电话约人、一起打球、弹吉他唱歌', '写35词或以上'],
    },
  ],
  'ket-trainer2-test4': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: "Your English teacher asked you to do a class project, but you haven't finished it yet.\n\nWrite an email to the teacher. In your email:\n• explain why you haven't finished the project\n• say what work you still need to do to finish it\n• tell the teacher when you will give it to her.\n\nWrite 25 words or more.",
      modelAnswer: "Dear Mrs Hannan,\nI'm sorry that I haven't finished my class project yet. Last week I was ill and missed two lessons, so I am behind. I still need to finish the last part and add some pictures. Can I give it to you on Friday morning?\nThank you,\nSara",
      tips: ['开头称呼老师（Dear Mrs + 姓）', '回答三件事：为什么没完成、还需要做什么、什么时候交', '语气礼貌并道歉', '写25词或以上'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
      imageSrc: '/images/ket/trainer2/test4-story.jpg',
      imageDesc: 'Sally and her family are at home and all raise their hands when her grandad suggests a walk, Sally and her grandad walk to a lake together, and they sit by the river fishing, where Sally catches a fish.',
      modelAnswer: "One sunny morning, Sally's grandad said, 'Let's go for a walk!' Everyone in the family raised their hands. Sally was the happiest. Together she and her grandad walked to a big lake. They sat by the water and fished for an hour. Suddenly Sally caught a fish, and she smiled proudly.",
      tips: ['按三幅图的顺序叙述', '用一般过去时', '给人物起名字（如 Sally 和她的 grandad）', '写清提议散步、走到湖边、钓鱼有收获', '写35词或以上'],
    },
  ],
  'ket-trainer2-test5': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: "You would like to borrow a book from your English-speaking friend, Jackie.\n\nWrite an email to Jackie. In your email:\n• explain which book you would like to borrow\n• tell her why you want to borrow the book\n• say when you will return the book.\n\nWrite 25 words or more.",
      modelAnswer: "Hi Jackie,\nCould I borrow your book about volcanoes, please? We are studying them in geography this term, and your book has some great photos. I promise to look after it and bring it back to you next Monday.\nThanks,\nLeo",
      tips: ['开头称呼 Jackie', '回答三件事：借哪本书、为什么借、什么时候还', '语气礼貌（Could I… / please）', '写25词或以上'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
      imageSrc: '/images/ket/trainer2/test5-story.jpg',
      imageDesc: 'A boy called Sam is bored on a long train journey, so he watches a woman next to him reading an interesting magazine. When the woman gets off the train, she gives him the magazine, and he starts reading it happily.',
      modelAnswer: "Sam was on a long train journey and he felt very bored. A woman next to him was reading a magazine about cars. Sam looked at it and thought it was interesting. When she got off the train, she gave the magazine to Sam. He started reading it at once, and he could not stop.",
      tips: ['按三幅图的顺序叙述', '用一般过去时', '给人物起名字（如 Sam）', '写清无聊、看到杂志、下车时得到杂志', '写35词或以上'],
    },
  ],
  'ket-trainer2-test6': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: "Read this email from your English-speaking friend, Andy.\n\nHi Fred,\nI've got a good idea – let's cook something together tomorrow! Where shall we cook something? What do you want to cook? What time do you want to meet?\nAndy\n\nWrite an email to Andy and answer the questions. Write 25 words or more.",
      modelAnswer: "Hi Andy,\nYour idea sounds great! Let's cook at my flat — we can walk there together after school. I'd like to make a fruit cake, because my grandma gave me a really easy recipe. Can you come at 4 pm? I have football until 3:30.\nSee you,\nFred",
      tips: ['开头称呼 Andy', '回答三个问题：在哪做、做什么、几点见面', '写25词或以上', '结尾署名并问候'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
      imageSrc: '/images/ket/trainer2/test6-story.jpg',
      imageDesc: 'Children leaving school notice the ground covered with litter, they pick up all the bottles and crisp packets together with big plastic bags, and they stand smiling holding the full bags on the now clean street.',
      modelAnswer: "After school, Ella and her friends saw lots of bottles and crisp packets on the ground near their school. 'How horrible!' said Ella. The next morning, they brought big plastic bags and picked up all the rubbish together. Soon there was no litter left, and everyone walking past smiled at them.",
      tips: ['按三幅图的顺序叙述', '用一般过去时', '给人物起名字（如 Ella）', '写清发现垃圾、一起捡垃圾、街道变干净', '写35词或以上'],
    },
  ]
}
