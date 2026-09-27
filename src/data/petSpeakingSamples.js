// PET 官方样题 Speaking —— 3 套官方样题（2018/2020 标准版样题1 + 校园版样题2/3）
// Part 1 个人问答 | Part 2 图片描述 | Part 3 协作讨论 | Part 4 深入讨论。
// 题目逐字来自官方 Examiner Booklet；参考答案为原创 B1 教学示例，遵循
// “直接回答 + 理由 + 例子/细节”，非唯一答案。

export const PET_SPEAKING_SAMPLES = [
  {
    meta: {
      id: 'pet-sample-1-speaking',
      title: 'PET 官方样题 1 · Speaking',
      level: 'PET',
      collection: 'PET 官方样题 2020',
      paper: 'Speaking',
      pages: 'Examiner booklet',
      source: 'B1 Preliminary 2020 sample tests Speaking - question paper.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          { q: "What's your name?", modelAnswer: "My name is Li Hua, but my friends call me Leo." },
          { q: 'Where do you come from?', modelAnswer: "I come from Chengdu, a large city in the south-west of China, famous for its pandas and spicy food." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a student at No.1 Middle School. I study several subjects, including English, Maths and History, but my favourite is English because I want to travel abroad one day." },
        ],
        phase2: [
          { q: 'How do you get to school every day?', modelAnswer: "I usually go to school by underground because it's fast and never gets stuck in traffic. It takes about 25 minutes, and I often read a book on the way." },
          { q: 'What did you do last weekend?', modelAnswer: "Last weekend I stayed at home on Saturday and did my homework. On Sunday I played basketball with my friends in the park, and we had a great time." },
          { q: 'Do you think English will be useful for you in the future? Why?', modelAnswer: "Yes, I'm sure it will. English is spoken all over the world, so it will help me when I travel and, later, when I look for a good job with an international company." },
          { q: 'Tell us about the people you live with.', modelAnswer: "I live with my parents and my younger sister. My dad is an engineer and my mum works in a hospital. My sister is ten and she's really funny — we get on very well." },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people learning a language',
            image: '/images/pet/speaking/sample1/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a small group of students, perhaps four of them, sitting around a large wooden table.
They are all writing in notebooks with pens and looking down at their work, so they seem very focused. There is a young man in the front on the left and two young women beside him.
I think the place is a classroom or a library because there are tall bookshelves all around them, full of books. On the table there is also a tablet.
They might be learning a language or taking an exam. The room looks bright and quiet, and everyone appears to be working hard.`,
          },
          {
            label: 'B',
            topic: 'people at a party',
            image: '/images/pet/speaking/sample1/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a group of people having an outdoor meal in a garden. It looks like a family party.
In the middle, some older people are sitting around a small table with food and drinks, and they are talking and laughing. A boy on the left is standing with his hands behind his back, holding a small present, and a girl on the right is hiding some sunflowers behind her. Maybe it is someone's birthday.
The garden belongs to a modern house, and there are trees and bushes around. The sun is shining and everyone is wearing light summer clothes.
The atmosphere looks really warm and happy.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A young man works very hard, and has only one free day a week. He wants to find an activity to help him relax.',
        instruction: 'Here are some activities that could help him relax. Talk together about the different activities he could do, and say which would be most relaxing.',
        image: '/images/pet/speaking/sample1/task.png',
        options: ['河边钓鱼', '在家躺椅上看书/看电视', '厨房做饭', '海边写生画画', '游泳馆游泳', '公园遛狗', '夜店跳舞/DJ'],
        modelDialogue: `A: This young man only has one free day a week, so he needs an activity that really helps him forget about work. What do you think would be best?
B: Well, something quiet might be good. When he goes fishing, he can sit by the river and enjoy nature, so that's really relaxing.
A: That's true, but I think he might get bored just sitting there. What about cooking? He could make something nice and listen to music at the same time.
B: Hmm, but cooking can feel like more work. In my opinion, walking the dog in the park is better — he gets some exercise and fresh air without too much effort.
A: I agree. Swimming would be good exercise too, and painting at the beach looks peaceful, but the nightclub seems more stressful than relaxing.
B: Exactly. Let's choose walking the dog then, or maybe fishing if he likes being alone.`,
        tips: ['先逐个讨论图片中的活动', '比较安静型与运动型放松方式', '用 What about...? / I think... because... 表达观点', '最后选出最放松的活动并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（工作与放松）与两位考生展开讨论。',
        questions: [
          { q: 'What do you do when you want to relax? Why?', modelAnswer: "When I want to relax, I usually listen to music or go for a walk in the park near my home, because it takes my mind off schoolwork and makes me feel calm again." },
          { q: 'Do you prefer to relax with friends or alone? Why?', modelAnswer: "It depends. During the week I prefer being alone because I'm tired, but at weekends I like relaxing with my friends, for example playing football or watching films together." },
          { q: 'Is it important to do exercise in your free time? Why?', modelAnswer: "Yes, I think so. Exercise keeps us healthy and gives us more energy. For example, I play basketball twice a week, and after playing I always feel much happier." },
          { q: 'Is it useful to learn new skills in your free time? Why?', modelAnswer: "Yes, it is. Learning something new, like cooking or playing the guitar, is fun and can be useful later. It also makes free time feel more interesting than just scrolling on a phone." },
          { q: 'Do you think people spend too much time working or studying these days? Why?', modelAnswer: "Yes, I think many people do. Students get a lot of homework and adults often work late, which leaves them little time for family or hobbies. Everyone needs time to rest and stay healthy." },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-sample-2-speaking',
      title: 'PET 校园版官方样题 2 · Speaking',
      level: 'PET',
      collection: 'PET 校园版官方样题',
      paper: 'Speaking',
      pages: 'Examiner booklet',
      source: 'Preliminary for schools Speaking Sample Test 2.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          { q: "What's your name?", modelAnswer: "My name is Wang Lei, but my English teacher calls me Leo." },
          { q: 'How old are you?', modelAnswer: "I'm fifteen years old, and I'll be sixteen next March." },
          { q: 'Where do you live?', modelAnswer: "I live in a flat in the centre of Hangzhou, quite close to a big park and two underground stations." },
          { q: 'Who do you live with?', modelAnswer: "I live with my parents and my grandmother. My grandmother is really kind and she cooks wonderful food for the whole family." },
        ],
        phase2: [
          { q: 'Tell us about a teacher you like.', modelAnswer: "I really like my English teacher, Miss Zhao, because she is funny and patient. She explains grammar clearly and sometimes plays English songs in class, which makes learning fun." },
          { q: 'How often do you use a mobile phone? Why?', modelAnswer: "I use my phone every day, but mainly after school. I message my friends, check homework and sometimes watch short videos. My parents don't let me use it for too long on weekdays." },
          { q: 'How do you get to school every day?', modelAnswer: "My dad drives me to school in the morning, which takes about twenty minutes. On the way home I usually take the bus with two of my classmates." },
          { q: 'Which do you like best, the morning or the afternoon? Why?', modelAnswer: "I prefer the afternoon because I feel more awake then, and my favourite subjects, PE and Art, are usually after lunch. I'm always quite slow in the early morning." },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people doing homework together',
            image: '/images/pet/speaking/sample2/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two people — a young girl and an older woman, probably her mother — doing something together at a desk.
They are both looking at a laptop and smiling, so maybe the woman is helping the girl with her homework or explaining something on the internet.
The room looks like a study or a bedroom at home. There is a large window behind them, and on the windowsill there is a plant with white flowers. The desk has a lamp, some pens and books on it.
The girl is sitting on a black chair, wearing a blue T-shirt. The atmosphere looks calm and pleasant, and they seem to be enjoying working together.`,
          },
          {
            label: 'B',
            topic: 'people playing a game',
            image: '/images/pet/speaking/sample2/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two people playing chess outdoors.
A teenage boy on the left is moving a chess piece, and an older man, perhaps his grandfather, is watching him carefully and smiling.
They are sitting at a wooden table in a garden. On the table there is a chessboard with black and white pieces and a white cup. Behind them I can see a modern wooden house, a small tree and green fields.
The weather looks nice and the sky is blue with a few clouds. Everything in the photo feels quiet and relaxed, and they both look like they are having a good time together.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A teacher from another country is coming to work in a school here. The students would like to give her a present.',
        instruction: 'Here are some things the students could give their new teacher. Talk together about the different presents they could give her, and decide which would be best.',
        image: '/images/pet/speaking/sample2/task.png',
        options: ['盆栽兰花', '飞机模型/装饰画', '笔记本和钢笔', '雨伞', '城市地图册', '棒球帽', '盒装巧克力'],
        modelDialogue: `A: The students want to welcome their new teacher from another country, so the present should be useful and remind her of her new home. What do you think?
B: I think the umbrella might be good because it rains a lot here, and she might not have one yet.
A: That's practical, but it isn't very personal. I quite like the plant — flowers make a classroom feel friendly, and the orchid in that pot looks beautiful.
B: Yes, but plants die if you forget to water them. What about the notebook and pen? Teachers always need to write things down.
A: True, though she probably already has both. The box of chocolates is nice but they don't last long, and the cap might not fit her.
B: What about the city map? She's new in the country, so a map book would help her find her way and explore at weekends.
A: That's a great idea! It's useful, personal and she'll remember the students every time she uses it. Let's choose the map.`,
        tips: ['先逐个讨论礼物的优缺点', '考虑实用性、纪念意义和老师的身份', '用 What about...? / I quite like... 表达观点', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（礼物）与两位考生展开讨论。',
        questions: [
          { q: "What's the best present you've ever had?", modelAnswer: "The best present I've ever had was a mountain bike for my fourteenth birthday. I ride it every weekend with my friends, and it has given me so much fun and exercise." },
          { q: 'How often do you give presents to people? Why?', modelAnswer: "I give presents on my family's birthdays and at Chinese New Year. I also sometimes make small gifts for my friends because choosing something someone really likes is a great feeling." },
          { q: 'Is it easy to choose presents for other people? Why?', modelAnswer: "No, it isn't always easy. You need to think carefully about what the person likes. For example, buying clothes is risky because you might choose the wrong size or colour." },
          { q: 'What do you do if someone gives you a present you don’t like?', modelAnswer: "I always smile and thank them politely anyway, because they spent time and money on it. The important thing is their kindness, not the present itself, and I would never say I didn't like it." },
          { q: 'Which is more fun: giving presents or receiving presents? Why?', modelAnswer: "For me, giving presents is more fun. When I find the perfect thing and see the person's face light up, it makes me really happy. Receiving presents is exciting too, of course." },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-sample-3-speaking',
      title: 'PET 校园版官方样题 3 · Speaking',
      level: 'PET',
      collection: 'PET 校园版官方样题',
      paper: 'Speaking',
      pages: 'Examiner booklet',
      source: 'Preliminary for schools Speaking Sample Test 3.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          { q: "What's your name?", modelAnswer: "My name is Zhang Yue, but my friends call me Yueyue." },
          { q: 'How old are you?', modelAnswer: "I'm fifteen years old. My birthday is in August, during the summer holidays." },
          { q: 'Where do you live?', modelAnswer: "I live in Suzhou, in a quiet street not far from one of the old canals that the city is famous for." },
          { q: 'Who do you live with?', modelAnswer: "I live with my parents and my older brother, who's at university but comes home at weekends. We also have a small cat called Mimi." },
        ],
        phase2: [
          { q: 'Do you live in a house or a flat?', modelAnswer: "We live in a flat on the eighth floor of a modern building. It isn't very big, but there's a lovely view of the park from our windows." },
          { q: 'What sort of clothes do you like?', modelAnswer: "I like casual clothes, especially jeans and comfortable T-shirts and hoodies. I usually wear my school uniform during the week, so I only choose my own clothes at weekends." },
          { q: 'Tell me about your best friend.', modelAnswer: "My best friend is called Xiaoyu. We sit next to each other in class and both love drawing. She's really kind and funny, and we've known each other since primary school." },
          { q: 'What did you do yesterday evening?', modelAnswer: "Yesterday evening I finished my maths homework first, and then I watched a cartoon with my brother. After dinner I read for about half an hour before going to bed." },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people doing homework together',
            image: '/images/pet/speaking/sample3/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two young women sitting at a table and working together.
They both have books open in front of them and there is a laptop on the table, so they may be doing homework or preparing a class project. One girl is wearing a blue top and the other is wearing a grey jumper.
I think the place is a school library or a study room. There is a bright bookshelf in the corner, a tall plant near the window, and the room looks very clean and modern.
They seem quite focused but relaxed. Through the window in the background, more empty tables and chairs are visible.`,
          },
          {
            label: 'B',
            topic: 'people in a classroom',
            image: '/images/pet/speaking/sample3/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a small group of students and a teacher in a classroom.
In the middle, the teacher — a man wearing a blue polo shirt — is smiling and showing something on a tablet to three students sitting around a table. They are all looking at it and smiling, so the lesson seems fun.
The classroom has laptops and folders on the tables, and in the background I can see other students working at computers and a large window.
The atmosphere looks friendly and lively. I think they are doing a group activity, and everyone seems interested in what the teacher is explaining.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: "A boy is doing a school project about the history of his town. He wants to get a lot of information for the project but he doesn't have much time.",
        instruction: 'Here are some things he could do to get information. Talk together about the different things he could do, and say which would be best.',
        image: '/images/pet/speaking/sample3/task.png',
        options: ['看关于小镇历史的纪录片', '和祖父母一起翻看老相册', '参观博物馆', '在图书馆查资料', '在家上网搜索', '参观古城堡'],
        modelDialogue: `A: The boy needs a lot of information quickly for his history project, so the method has to be fast and give him plenty of useful facts.
B: Well, searching on the internet at home is probably the quickest. He can find photos, old maps and articles in a few minutes.
A: That's true, but not everything online is correct, so he'd have to be careful. What about the library? Librarians can help him find the right books.
B: Yes, but going there takes time, and reading whole books is slow. Watching a documentary sounds interesting too, and it might give him good details for a presentation.
A: Visiting the museum or the castle could be amazing for photos, but both might take a whole day, and he doesn't have much time.
B: What about talking to his grandparents with the old photo album? Old people often know stories about the town that aren't in books.
A: That's a really good point. It's quick, free and gives him unusual personal information.
B: So maybe he should combine the two: talk to his grandparents first, then check the facts online. Let's choose that.`,
        tips: ['先逐个讨论获取信息的方式', '比较速度、信息量和可靠性', '用 What about...? / The problem is... 展开讨论', '最后选出最佳方式，也可组合两种方法'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（历史）与两位考生展开讨论。',
        questions: [
          { q: 'Do you enjoy studying history at school? Why?', modelAnswer: "Yes, I quite enjoy it because it's fascinating to learn how people lived in the past, and history helps us understand why the world today is the way it is." },
          { q: 'Do you like watching TV programmes about history? Why?', modelAnswer: "Yes, I do. Good history programmes use actors and real places, so the stories feel much more alive than reading facts in a textbook. I especially like programmes about ancient Egypt." },
          { q: 'Do you like visiting historical places like castles? Why?', modelAnswer: "I love it. When you walk around a real castle, you can imagine the people who lived there hundreds of years ago. Last year I visited an old water town near my city and took lots of photos." },
          { q: 'Is it important to learn about the history of your area? Why?', modelAnswer: "Yes, I think so. Knowing the history of where you live makes you feel connected to the place and proud of it. It's also a good topic to talk about with older family members." },
          { q: 'Is it better to learn things on your own or with your classmates? Why?', modelAnswer: "I prefer learning with classmates because we can share ideas and explain things to each other, which makes studying more fun. However, when I need to read or memorise something, I can concentrate better on my own." },
        ],
      },
    },
  },
]
