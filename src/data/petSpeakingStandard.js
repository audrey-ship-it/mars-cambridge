// PET 标准版官方真题 1（B1 Preliminary 1, 2020）Test 1 口语数据
// 题目来源：B1 PET新题型官方真题 1.pdf（扫描版逐页人工转录）· 口语脚本 PDF 页 81–84，视觉材料 PDF 页 202–203
// 参考答案为原创 B1 教学示例，遵循“直接回答 + 理由 + 例子/细节”，非唯一答案。

export const PET_SPEAKING_STANDARD = [
  {
    meta: {
      id: 'pet-standard-1-speaking',
      title: 'PET 标准版官方真题 1 · Test 1 Speaking',
      level: 'PET',
      collection: 'PET 标准版官方真题 1',
      paper: 'Speaking',
      pages: 'Speaking Test 1 · 书页 80–83',
      source: 'B1 PET新题型官方真题 1.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先核对姓名和来自哪里，再从清单中选问若干个性化问题。',
        phase1: [
          { q: "What's your name?", modelAnswer: 'My name is Zhang Ming, but you can call me Leo.' },
          { q: 'Where do you live / come from?', modelAnswer: "I live in a flat in the north of Chengdu, quite near a big park and a shopping centre. I've lived there since I was born." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a middle school student. I study eight subjects, but my favourite is English because I'd like to travel and meet people from other countries." },
        ],
        phase2: [
          { q: 'Which day of the week do you like the most? Why?', modelAnswer: "I like Friday most because the weekend starts and there's no homework in the evening. I usually play computer games or watch a film with my family." },
          { q: 'What did you do yesterday evening / last weekend?', modelAnswer: 'Last weekend I visited my grandparents with my parents on Saturday, and on Sunday I played basketball with my friends in the park near my home.' },
          { q: 'Do you think English will be useful for you in the future? Why?', modelAnswer: "Yes, I'm sure it will. English is spoken in many countries, so it will help me when I travel abroad and later when I look for a good job." },
          { q: 'Tell us about the people you live with.', modelAnswer: 'I live with my parents. My dad is an engineer and my mum is a doctor. They are both kind and supportive, and at weekends we often go cycling together.' },
          { q: "What's your favourite type of music? Why?", modelAnswer: 'I like pop music best because it is lively and easy to sing along to. My favourite singer is a Chinese star, and I often listen to her songs on the bus.' },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people having breakfast',
            image: '/images/pet/speaking/standard/test1/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two young women having breakfast at a long wooden table outdoors.
They are sitting opposite each other and smiling, so they seem to be good friends. The woman on the left is wearing a checked shirt and is eating from a bowl, and the woman on the right is wearing a grey sweatshirt.
I think they are on a camping trip because I can see two tents behind them and some tall trees, and there are blue metal cooking pots and cups all over the table. There is also a red towel hanging on a washing line.
It looks like a sunny morning and the atmosphere seems really nice.`,
          },
          {
            label: 'B',
            topic: 'people on bicycles',
            image: '/images/pet/speaking/standard/test1/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a young woman and a young man riding bicycles along a quiet street.
The woman is on the left. She has long hair in a plait and is wearing a black hat and a grey jumper. The man has a beard and is wearing a black top and orange trousers. Both their bikes have baskets at the front.
They are in a residential area because there are white blocks of flats behind them and some green hedges. I can also see road signs and a parked black car.
The sun is shining and they are looking at each other as if they are talking, so they seem to be enjoying the ride.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A young man enjoys reading books about people with interesting lives. He is looking for a new book to read.',
        instruction: 'Here are some books he could read. Talk together about the different books he could read and say which would be most interesting.',
        image: '/images/pet/speaking/standard/test1/task.png',
        options: ['飞行员', '吉他手', '老师', '足球运动员', '厨师', '宇航员'],
        modelDialogue: `A: This young man likes reading about people with interesting lives, so we need to choose the most interesting book for him. What do you think?
B: Well, I think the book about the pilot looks exciting because he travels all over the world and must have amazing stories.
A: I agree, but the astronaut's life seems even more unusual. Not many people get the chance to travel in space.
B: That's true. What about the footballer? Famous sportspeople have interesting lives too, with lots of competitions.
A: Yes, but there are already many books about football stars. The guitarist might be a good choice because he could talk about music and concerts, and the chef could share recipes from different countries.
B: Hmm. The teacher is probably the least adventurous choice. In my opinion, we should give him the book about the astronaut.
A: Great, let's choose that one then.`,
        tips: [
          '逐个讨论六本书的主人公，不要只盯着一本',
          '用 What about…? / I think… because… 表达观点并比较',
          '说出最有趣的一本并给出理由',
          '注意与搭档互动，邀请对方发言',
        ],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（阅读与书籍）与两位考生展开讨论。',
        questions: [
          { q: 'Do you like reading books about people with interesting lives? Why? / Why not?', modelAnswer: 'Yes, I do. I enjoy learning about how famous people became successful, especially when they had difficulties at the beginning. It makes me feel that I can achieve my own goals too.' },
          { q: 'When was the last time you went to a bookshop? Why?', modelAnswer: 'I went to a big bookshop in the city centre about two weeks ago with my mum. I bought a storybook for my little cousin’s birthday and had a look at the English books for myself.' },
          { q: 'Have you ever bought a book as a present for someone? Why? / Why not?', modelAnswer: 'Yes, I have. Last year I bought a book about space for my best friend because he loves science. He was really pleased and read it during the summer holidays.' },
          { q: 'Do you prefer reading on a screen or reading printed books? Why?', modelAnswer: 'I prefer printed books because I can turn the pages and they don’t hurt my eyes. I only read on a screen when I need information quickly for homework.' },
          { q: 'Do you think people will still read printed books in the future? Why? / Why not?', modelAnswer: 'Yes, I think so. E-books are convenient, but many people, including me, enjoy holding a real book. I believe printed books will always exist, like printed newspapers and magazines.' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-standard-1-speaking-t2',
      title: 'PET 标准版官方真题 1 · Test 2 Speaking',
      level: 'PET',
      collection: 'PET 标准版官方真题 1',
      paper: 'Speaking',
      pages: 'Speaking Test 2 · 书页 84–87',
      source: 'B1 PET新题型官方真题 1.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先核对姓名和来自哪里，再从清单中选问若干个性化问题。',
        phase1: [
          { q: "What's your name?", modelAnswer: 'My name is Wang Yifei, and my English name is Flora.' },
          { q: 'Where do you live / come from?', modelAnswer: "I'm from Hangzhou. I live in a modern flat near the lake with my parents, and the area is famous for its tea and beautiful scenery." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a student at a secondary school near my home. I study many subjects, including maths, history and English, and I hope to study abroad one day." },
        ],
        phase2: [
          { q: 'What did you do yesterday evening / last weekend?', modelAnswer: 'Yesterday evening I finished my homework and then watched a nature programme on TV with my dad. It was about sea animals and it was really interesting.' },
          { q: 'What kind of websites do you like? Why?', modelAnswer: "I like websites about music and fashion, and I also use the BBC Learning English site. It has short videos and games, so practising English doesn't feel like homework." },
          { q: 'Which do you prefer, the morning or the afternoon? Why?', modelAnswer: 'I prefer the morning because I have more energy and it’s easier to concentrate. I’m not very good at studying late in the evening, so I try to go to bed early.' },
          { q: 'What kind of films do you like? Why?', modelAnswer: 'I really enjoy adventure films because there’s usually lots of action and the story moves fast. I often watch them at the cinema with my friends at weekends.' },
          { q: 'Do you think English will be useful for you in the future? Why?', modelAnswer: 'Yes, I think so. If I travel or study in another country, I’ll need English, and it will also help me get a better job when I’m older.' },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people in the street',
            image: '/images/pet/speaking/standard/test2/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see three young people walking across a street in a city. They are using a zebra crossing and they look like friends.
There are two boys and one girl. The boy at the front is wearing a white T-shirt, jeans and a black backpack, and the girl is wearing a striped top and jeans. The third person is just behind them.
They are in a residential street with tall blocks of flats on both sides. Some of the buildings are painted in bright colours. There are cars parked along the road, and further away I can see a white van.
There's also a cyclist riding up the hill on the right. It's a sunny day, and the friends seem relaxed as they cross the road together.`,
          },
          {
            label: 'B',
            topic: 'people visiting a museum',
            image: '/images/pet/speaking/standard/test2/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see three people walking through a large museum hall.
They look like a family. There's a woman with long fair hair wearing a striped jumper, a man in a dark red shirt, and a little girl between them wearing a black top and a red skirt. They are holding hands.
I think the museum is about flying because there's a huge silver plane on the right, and another aircraft further back. The hall is very big and modern, with a high glass ceiling and a shiny floor.
On the left there's a large information board with photographs and text. The family are walking towards the planes and seem interested in what they are looking at.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A young woman is going to spend six months living and working in a cold country. Her friends would like to give her a present to take with her.',
        instruction: 'Here are some presents they could give her. Talk together about the different presents her friends could give her and say which would be best.',
        image: '/images/pet/speaking/standard/test2/task.png',
        options: ['雪人马克杯', '雨伞', '冬靴', '全家福相框', '钢笔', '太阳镜', '帽子围巾手套套装'],
        modelDialogue: `A: This young woman is going to a cold country for six months, so we need to choose the most useful present. What do you think?
B: Well, she'll definitely need warm clothes, so the winter boots look really useful. It might be icy and snowy there.
A: Good idea. The hat, scarf and gloves set would be useful too, and she could wear them with the boots.
B: What about the family photo? If she's away for six months, she might feel lonely, and the photo would remind her of home.
A: That's true. But she can also see her family online on her phone. The mug is nice but she probably already has one, and the umbrella and sunglasses aren't much use in a cold country.
B: The pen could be useful for her work, but again, she probably owns one. I think the boots are the best choice because they're practical.
A: Great, let's choose the winter boots.`,
        tips: [
          '逐个讨论七件礼物并与“寒冷国家”的需要联系起来',
          '用 She’ll need… / It might be… / What about…? 展开',
          '排除不合适的礼物（雨伞、太阳镜）',
          '最后选出最佳礼物并说明理由',
        ],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（天气与旅行）与两位考生展开讨论。',
        questions: [
          { q: 'Do you like cold weather? Why? / Why not?', modelAnswer: 'Not really. I don’t like feeling cold, and it’s hard to do sports outside. But I do enjoy staying warm at home with my family, and snow is beautiful for the first few days.' },
          { q: 'When you go on holiday, do you prefer to stay in your country or go to other countries? Why?', modelAnswer: 'I like going to other countries because everything feels different – the food, the language and the buildings. But holidays in my own country are easier and cheaper, so it depends who I’m travelling with.' },
          { q: 'Is there a country you would really like to live in? Why?', modelAnswer: 'Yes, I’d love to live in Canada for a while. People say it’s clean and safe, the nature is amazing, and it would give me the chance to improve my English.' },
          { q: 'How do you keep in contact with friends and family when you’re away from home?', modelAnswer: 'I usually send messages on my phone, and sometimes I make video calls in the evening. If I’m abroad, I use free Wi-Fi so the calls don’t cost anything.' },
          { q: 'Is it better to live in lots of different places or always live in the same place? Why?', modelAnswer: 'I think living in different places is more exciting because you meet new people and learn new things. But it can also be difficult to leave your friends, so some people prefer the same place and that’s understandable.' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-standard-1-speaking-t3',
      title: 'PET 标准版官方真题 1 · Test 3 Speaking',
      level: 'PET',
      collection: 'PET 标准版官方真题 1',
      paper: 'Speaking',
      pages: 'Speaking Test 3 · 书页 88–91',
      source: 'B1 PET新题型官方真题 1.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先核对姓名和来自哪里，再从清单中选问若干个性化问题。',
        phase1: [
          { q: "What's your name?", modelAnswer: 'My name is Chen Zixuan, and you can call me Susan.' },
          { q: 'Where do you live / come from?', modelAnswer: "I'm from Suzhou. I live with my parents in a flat in the city centre, and we're not far from some beautiful old gardens." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a secondary school student. I study lots of subjects, but my favourites are English and biology, and I'd like to be a doctor one day." },
        ],
        phase2: [
          { q: 'Which day of the week do you like the most? Why?', modelAnswer: 'I like Friday most because the weekend is about to start and I can relax. I usually go out for dinner with my family, and I don’t have to get up early the next day.' },
          { q: 'What did you do yesterday evening / last weekend?', modelAnswer: 'Last weekend I visited my grandparents with my mum. We had lunch together, and in the afternoon I helped my grandmother make cakes.' },
          { q: 'Do you think that English will be useful for you in the future? Why?', modelAnswer: 'Yes, definitely. I want to study medicine, and a lot of medical research is in English. It would also let me talk to people when I travel.' },
          { q: 'Tell us about the people you live with.', modelAnswer: 'I live with my parents. My dad works in a bank and my mum’s a teacher. They’re both really kind, and we often watch films together in the evening.' },
          { q: 'What kind of films do you like? Why?', modelAnswer: 'I like science-fiction films because they’re exciting and full of ideas. My favourite films are about space, and I usually watch them with my friends.' },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'someone relaxing at home',
            image: '/images/pet/speaking/standard/test3/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a man relaxing at home.
He looks quite young, with short dark hair and a beard. He's wearing a light blue T-shirt and grey trousers, and he has no shoes on. He's sitting in a large modern armchair with his legs crossed and he's holding a small cup in one hand.
I think he's in the living room. There's a big window on the right, and I can see a garden outside with green trees. The room is bright and modern.
He has a blue book on his knee, and there's a rug on the floor and a round bowl on the table. He looks really calm and comfortable, and he seems to be enjoying his quiet afternoon at home.`,
          },
          {
            label: 'B',
            topic: 'people playing ice hockey',
            image: '/images/pet/speaking/standard/test3/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a group of people playing ice hockey outside.
There are several men and women, and some younger people too. They're all wearing warm winter clothes — jackets, hats and gloves — and they're holding long hockey sticks. A girl on the left has a woolly hat with pink and blue colours.
They're playing on ice or hard snow in what looks like a street, with houses and trees behind them. I can also see a net for the game.
The sun is shining and there's snow everywhere, but the players don't look cold because they're running around. They're all smiling and laughing, so they seem to be having a lot of fun together.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A town has a large public building that is empty. The people in the town want to use the building.',
        instruction: 'Here are some ideas for how to use the building. Talk together about the different ways the people of the town could use the empty building and say which would be best.',
        image: '/images/pet/speaking/standard/test3/task.png',
        options: ['服装店', '电影院', '美术馆', '健身房', '停车场', '图书馆', '餐厅'],
        modelDialogue: `A: So the town has this big empty building and they need to choose what to do with it. Let's look at the ideas.
B: A gym would be good because there isn't one in the town, and it would help people keep fit. But they'd need to buy a lot of equipment.
A: That's true. A library would be useful too, especially for students, and older people could meet there. But these days many people read online.
B: What about a cinema? The nearest one is in the next town, so families and teenagers would all use it.
A: I like that. The clothes shop and restaurant are businesses that someone has to run, and a car park would waste a lovely old building. The art gallery might not interest enough people.
B: Exactly. The cinema is the best choice because there's something for everyone, and it would bring the town together.
A: Great, let's choose the cinema.`,
        tips: [
          '逐个讨论七种用途，并联系小镇的实际需要',
          '用 A gym would be… / What about…? / The nearest one is… 展开',
          '排除不合适的用途（停车场浪费建筑、服装店是私人生意）',
          '最后选出最佳用途并说明理由',
        ],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（城镇场所与新旧建筑）与两位考生展开讨论。',
        questions: [
          { q: 'Where do you like going in your town? Why?', modelAnswer: 'I like going to the park near my home because it’s quiet and green. I often walk there with my friends after school, and at weekends I go cycling there with my dad.' },
          { q: 'Do you enjoy shopping in big department stores? Why? / Why not?', modelAnswer: 'Not really. They’re often crowded and noisy, and it’s hard to find what you want. I prefer small local shops because the people are friendlier, although big stores have more choice.' },
          { q: 'When was the last time you went to the cinema?', modelAnswer: 'I went about a month ago with my classmates to see an adventure film. We really enjoyed it, and afterwards we went for a pizza and talked about the story.' },
          { q: 'Do you prefer modern buildings or old buildings? Why?', modelAnswer: 'I prefer old buildings because they have more character and each one feels different. Modern buildings are useful because they’re light and comfortable, but they often look the same everywhere.' },
          { q: 'Is it important to look after old buildings? Why? / Why not?', modelAnswer: 'Yes, I think so. Old buildings tell us about the history of a town, and once they’re pulled down you can never get them back. It’s usually cheaper to look after them than to build something new.' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-standard-1-speaking-t4',
      title: 'PET 标准版官方真题 1 · Test 4 Speaking',
      level: 'PET',
      collection: 'PET 标准版官方真题 1',
      paper: 'Speaking',
      pages: 'Speaking Test 4 · 书页 93–95',
      source: 'B1 PET新题型官方真题 1.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先核对姓名和来自哪里，再从清单中选问若干个性化问题。',
        phase1: [
          { q: "What's your name?", modelAnswer: 'My name is Lin Xiaoyu, and my English name is Kevin.' },
          { q: 'Where do you live / come from?', modelAnswer: "I'm from Xiamen, a beautiful coastal city. I live with my parents in a flat not far from the beach." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a secondary school student. I study many subjects, including maths, geography and English, and in the future I'd like to study computer science." },
        ],
        phase2: [
          { q: 'Which day of the week do you like the most? Why?', modelAnswer: 'I like Saturday most because I can do what I want. I usually play basketball with my friends in the morning and go out with my family in the evening.' },
          { q: 'What did you do yesterday evening / last weekend?', modelAnswer: 'Yesterday evening I finished my homework and then played computer games for about an hour. After that I watched a funny film with my parents.' },
          { q: 'Do you think that English will be useful for you in the future? Why?', modelAnswer: 'Yes, I think so. A lot of information about computers is in English, and it would also be useful if I travelled to another country.' },
          { q: 'What kind of websites do you like? Why?', modelAnswer: 'I like technology websites and video sites. I often watch short videos about new computers, and I sometimes use English learning websites too.' },
          { q: "What's your favourite type of music? Why?", modelAnswer: 'I like pop music most because it’s lively and easy to listen to. I often wear headphones and listen to songs on my way to school.' },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people saying goodbye',
            image: '/images/pet/speaking/standard/test4/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see some people saying goodbye outside a building.
On the right, a young man in a smart grey suit is waving with one hand and pulling two suitcases, one on top of the other. He looks happy and ready to leave.
On the left, a woman with her hair tied back and a little girl in a patterned dress are standing next to a white car, and they are waving too.
Behind them, an older couple are watching from the steps of the building. There are tall columns, green trees and a large stone plant pot, and the sun is shining. Everyone seems calm and friendly as they say goodbye.`,
          },
          {
            label: 'B',
            topic: 'people in a shop',
            image: '/images/pet/speaking/standard/test4/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two men in a clothes and shoe shop.
One man is sitting down in a grey T-shirt, and the other is standing and handing him a light-coloured shoe. The standing man is wearing a dark blue jacket and a pink T-shirt, and he's holding a shoe box under his arm.
The shop has wooden walls, and there are shelves full of folded jeans behind the men. On the right, lots of different shoes are displayed on shelves, and in the foreground there's a large shoe on a stand and an open red shoe box.
There are other boxes and paper on the dark floor. The two men are smiling, so they seem to be enjoying choosing shoes together.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A young man would like to do something to help the environment.',
        instruction: 'Here are some things he could do. Talk together about the different things he could do to help the environment and say which would be best.',
        image: '/images/pet/speaking/standard/test4/task.png',
        options: ['自带水杯', '清理河边垃圾', '垃圾分类回收', '张贴环保海报', '骑自行车出行', '淋浴节水', '种树'],
        modelDialogue: `A: This young man wants to help the environment. Let's look at the ideas.
B: Well, recycling is something everyone can do at home. Paper, plastic and glass can all be made into new things.
A: That's true. Riding a bike instead of going by car would reduce air pollution, and he'd get fit too.
B: Cleaning up the river and planting trees are good, but you only do them occasionally. Making a poster might encourage other people, though.
A: Having a shower instead of a bath saves water, and using his own cup means less plastic – but those are quite small things.
B: I think recycling is the best choice because he can do it every day, and it makes a real difference.
A: Great, let's choose recycling.`,
        tips: [
          '逐个讨论七件事并说明各自的环保作用',
          '用 Recycling is… / Riding a bike would… / What about…? 展开',
          '区分每天能做的事和偶尔参加的活动',
          '最后选出最佳一项并说明理由',
        ],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（环境保护）与两位考生展开讨论。',
        questions: [
          { q: 'Did you learn about protecting the environment at school? Why? / Why not?', modelAnswer: 'Yes, quite a lot. We had lessons about recycling and climate change, and last year we all helped clean up the park near our school. I think it’s important to learn about it early.' },
          { q: 'Do you ever ride a bicycle? Why? / Why not?', modelAnswer: 'Yes, I ride at weekends, usually in the park. I don’t cycle to school because the roads are quite busy and it feels unsafe. I enjoy it because it’s good exercise.' },
          { q: 'Do you like being in places with lots of trees? Why? / Why not?', modelAnswer: 'Yes, I do. Places with trees feel cool and peaceful, and the air seems fresher. I often go walking in the forested hills near the city with my family.' },
          { q: 'Would you like to recycle more things? Why? / Why not?', modelAnswer: 'Yes, definitely. At home we recycle paper and plastic, but I’m not always sure which other things can be recycled. If it were easier to get information, more people would do it.' },
          { q: 'Do you think people do enough to protect the environment? Why? / Why not?', modelAnswer: 'Not really. Some people recycle and use public transport, but many others still waste water and drop rubbish. I think governments should do more to educate people and make unhealthy choices more expensive.' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-standard-2-speaking-t1',
      title: 'PET 标准版官方真题 2 · Test 1 Speaking',
      level: 'PET',
      collection: 'PET 标准版官方真题 2',
      paper: 'Speaking',
      pages: 'Speaking Test 1 · 书页 80–83',
      source: 'B1 PET新题型官方真题 2.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先核对姓名和来自哪里，再从清单中选问若干个性化问题。',
        phase1: [
          { q: "What's your name?", modelAnswer: 'My name is Zhang Ming, but you can call me Leo.' },
          { q: 'Where do you live / come from?', modelAnswer: "I live in a flat in the north of Chengdu, quite near a big park and a shopping centre. I've lived there since I was born." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a middle school student. I study eight subjects, but my favourite is English because I'd like to travel and meet people from other countries." },
        ],
        phase2: [
          { q: 'Tell us about a good friend of yours.', modelAnswer: 'My best friend is called Wang Fang. We met in primary school and we both love playing basketball. She is very funny and always makes me laugh when I feel sad.' },
          { q: 'Do you like buying clothes? Why? / Why not?', modelAnswer: 'Not really. I prefer spending my money on books and computer games. I usually only buy new clothes when I really need them, like when my old ones are too small.' },
          { q: 'What do you usually do on your birthday?', modelAnswer: 'I usually have a party at home with my family and close friends. My mum cooks special food, and we eat cake and play games together. It\'s always a lot of fun.' },
          { q: 'Are you a morning person or an evening person? Why?', modelAnswer: 'I\'m definitely an evening person. I find it very hard to wake up early, but at night I feel full of energy. I often do my homework or read late into the evening.' },
          { q: 'What kind of music do you like listening to?', modelAnswer: 'I like pop music best because it is lively and easy to sing along to. My favourite singer is a Chinese star, and I often listen to her songs on the bus.' },
          { q: 'Do you often use websites to help you with your studies? Why? / Why not?', modelAnswer: 'Yes, I use educational websites almost every day. They have useful videos and practice exercises that help me understand difficult topics, especially maths and science.' },
          { q: 'Do you enjoy reading? Why? / Why not?', modelAnswer: 'Yes, I love reading. It helps me relax and I learn new things at the same time. My favourite books are adventure stories because they are exciting and take me to different worlds.' },
          { q: 'How do you get to school or work every day?', modelAnswer: 'I usually take the bus to school because it\'s too far to walk. The journey takes about twenty minutes, and I often listen to music or read during the ride.' },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'someone running',
            image: '/images/pet/speaking/standard2/test1/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a woman running along a path beside a river. She is wearing a purple top and black shorts, and she has a watch on her wrist, so she is probably checking her speed or distance.
Behind her there is a metal railing, and beyond that I can see some colourful houses and trees on the other side of the river. The sky is blue with some white clouds, so it looks like a nice sunny day.
She seems to be running at a steady pace, not too fast. Maybe she is training for a race or just enjoying some exercise outdoors.`,
          },
          {
            label: 'B',
            topic: 'people eating pizza',
            image: '/images/pet/speaking/standard2/test1/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see three friends sitting at a table in a restaurant, eating pizza. There are two women and one man, and they all look happy and relaxed.
On the table there are two large pizzas, some drinks, and some small plates. The restaurant has a modern design with wooden tables and chairs, and I can see some plants in the background.
They seem to be enjoying their meal and having a good conversation. It looks like a casual lunch or dinner with friends.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A young man is visiting a new country and wants to learn about the language and culture.',
        instruction: '考官给出一幅情境图，两位考生一起讨论图中的各种活动，并选出最佳的一项。',
        image: '/images/pet/speaking/standard2/test1/task.png',
        options: ['去语言学校上课', '用笔记本电脑在线学习', '听讲座并看地图', '参加聚会吃喝', '在市中心观光', '乘公交游览城市', '乘飞机抵达', '与当地人交谈'],
        modelDialogue: `A: This young man wants to learn about the language and culture of a new country. Let's look at the different activities.
B: Going to a language school would be very useful because he could learn grammar and vocabulary from professional teachers.
A: That's true. Using a laptop to study online is also convenient, but he might miss the chance to practise speaking with real people.
B: Listening to lectures and looking at maps would help him understand the culture and find his way around the city.
A: Going to parties and eating local food would be a fun way to experience the culture and meet people.
B: Sightseeing in the city centre and taking a bus tour would show him the famous places, but they might not help with the language much.
A: Talking to local people is probably the best way to learn both the language and the culture at the same time.
B: I agree. Let's choose talking to local people.`,
        tips: [
          '逐个讨论图中的活动并说明对学习语言和文化的作用',
          '用 Going to… would be… / Using… is… / Talking to… is probably the best way 展开',
          '区分对语言学习和文化体验的不同帮助',
          '最后选出最佳一项并说明理由',
        ],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（了解新国家的语言和文化）与两位考生展开讨论。',
        questions: [
          { q: 'Do you like learning about other countries? Why? / Why not?', modelAnswer: 'Yes, I find it fascinating. I love learning about different traditions, food, and ways of life. It helps me understand the world better and makes me want to travel.' },
          { q: 'Do you enjoy trying food from different countries? Why? / Why not?', modelAnswer: 'Yes, I\'m always excited to try new dishes. Last week I tried Korean food for the first time, and it was delicious. I think food is a great way to experience another culture.' },
          { q: 'Have you met many people from other countries? Why? / Why not?', modelAnswer: 'Yes, quite a few. There are several international students at my school, and I often chat with them at lunchtime. It\'s interesting to hear about their lives back home.' },
          { q: 'Which country would you most like to visit? Why?', modelAnswer: 'I would most like to visit Japan because I love Japanese animation and want to see the real places shown in the films. I also want to try authentic sushi and visit the temples.' },
          { q: 'Is it important to learn the language before visiting a country? Why? / Why not?', modelAnswer: 'Yes, I think it\'s very important. If you know some basic phrases, local people will be friendlier and you can understand the culture better. It also makes travelling much easier and more enjoyable.' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-standard-2-speaking-t2',
      title: 'PET 标准版官方真题 2 · Test 2 Speaking',
      level: 'PET',
      collection: 'PET 标准版官方真题 2',
      paper: 'Speaking',
      pages: 'Speaking Test 2 · 书页 84–87',
      source: 'B1 PET新题型官方真题 2.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先核对姓名和来自哪里，再从清单中选问若干个性化问题。',
        phase1: [
          { q: "What's your name?", modelAnswer: 'My name is Zhang Ming, but you can call me Leo.' },
          { q: 'Where do you live / come from?', modelAnswer: "I live in a flat in the north of Chengdu, quite near a big park and a shopping centre. I've lived there since I was born." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a middle school student. I study eight subjects, but my favourite is English because I'd like to travel and meet people from other countries." },
        ],
        phase2: [
          { q: 'Tell us about a good friend.', modelAnswer: 'My best friend is called Wang Fang. We met in primary school and we both love playing basketball. She is very funny and always helps me when I have a problem.' },
          { q: 'What kind of clothes do you like?', modelAnswer: 'I like casual clothes, like jeans and T-shirts, because they are comfortable. I usually wear sports clothes when I play basketball with my friends.' },
          { q: 'What do you enjoy doing on your birthday?', modelAnswer: "On my birthday, I usually go out for a meal with my family, and then my friends come to my house for a party. We eat cake and listen to music. It's always great fun." },
          { q: 'Which do you like best, the morning or the evening? Why?', modelAnswer: 'I prefer the evening because I can relax after a busy day at school. I usually watch a film or play computer games before going to bed.' },
          { q: 'How often do you listen to music? Why?', modelAnswer: 'I listen to music every day, usually on the bus to school and while I do my homework. It helps me relax and makes me feel happy.' },
          { q: 'Tell us about the kind of websites you like.', modelAnswer: 'I really like sports websites because I can read the latest news about basketball and watch match highlights. I also use educational websites to help with my homework.' },
          { q: 'What sort of things do you like reading?', modelAnswer: 'I like reading adventure stories because they are exciting and I can imagine I am the hero. I also enjoy sports magazines in my free time.' },
          { q: 'How do you get to college every day?', modelAnswer: "I usually go to college by bus because it's too far to walk. The journey takes about twenty minutes, and I often listen to music during the ride." },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people horse riding',
            image: '/images/pet/speaking/standard2/test2/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see four people riding horses through a forest. They are all wearing riding helmets for safety.
The two riders in front are quite close to the camera. The woman on the left is on a brown horse and wearing a blue jacket, and the woman on the right is riding a black-and-white horse. Behind them, I can just see another rider on a smaller, lighter-coloured horse.
They are on a narrow dirt path, and the ground on both sides is covered with tall trees and small purple flowers, so it looks like spring.
Everyone seems to be enjoying the ride through the peaceful countryside.`,
          },
          {
            label: 'B',
            topic: 'someone playing the guitar',
            image: '/images/pet/speaking/standard2/test2/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a young man sitting on a sofa and playing an acoustic guitar. He's wearing a white T-shirt, jeans and a light-coloured hat.
He looks quite relaxed, and he seems to be concentrating on the guitar, which is a brown wooden one.
He is indoors in a cosy room. Behind him there is a wooden shelf with books and small objects on it, and there is a bright window on the right. In front of the sofa I can see a small wooden table with a red cup on it.
Maybe he is playing for fun or practising a new song in his free time.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A new video game shop wants to attract customers.',
        instruction: '考官给出一幅情境图，两位考生一起讨论图中各种广告方式，并选出最能吸引顾客的一种。',
        image: '/images/pet/speaking/standard2/test2/task.png',
        options: ['报纸广告', '电视广告', '街头发传单', '店铺门面展示', '喇叭宣传车', '笔记本电脑网络广告', '电影院银幕广告', '公交车身广告'],
        modelDialogue: `A: A new video game shop wants to attract customers. Let's talk about the different ways to advertise it.
B: Advertising on TV would reach a lot of people, and many young people watch television, so they'd see the games moving on screen.
A: That's true, but TV adverts are expensive. Putting adverts online is cheaper, and most young people use laptops and phones every day.
B: What about giving out flyers in the street or putting a poster on a bus? People might see them, but they might just throw the paper away.
A: Having a loudspeaker van driving around would certainly get attention, although it might annoy some people.
B: I think advertising on the TV is the best choice because video games look really exciting when you can see them being played.
A: I agree. Let's choose TV advertising.`,
        tips: [
          '逐个讨论八种广告方式并说明各自优缺点',
          '用 Advertising on… would… / What about…? / Putting adverts… 展开',
          '考虑目标顾客（年轻人）和成本',
          '最后选出最佳一种并说明理由',
        ],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（广告）与两位考生展开讨论。',
        questions: [
          { q: 'Do you often watch adverts on TV? Why? / Why not?', modelAnswer: 'Yes, I see quite a lot of adverts, especially during films. Some are short and funny, so I quite enjoy them, but it\'s annoying when they interrupt an interesting programme.' },
          { q: 'Which products do you like seeing adverts for? Why?', modelAnswer: 'I like adverts for new phones and sports trainers because I\'m interested in technology and sport. I also enjoy adverts for new films, as they help me decide what to watch.' },
          { q: 'What kinds of adverts do you remember most? Why?', modelAnswer: 'I remember funny adverts with music the most, because they make me laugh and the songs get stuck in my head. Adverts with famous people are also quite memorable.' },
          { q: 'Have you bought anything recently that you saw in an advert? Why? / Why not?', modelAnswer: 'Yes, I bought a new pair of basketball trainers last month after seeing them in an advert. They looked really comfortable, and I needed some new ones for the school team.' },
          { q: 'Do you think that there\'s too much advertising these days on TV? Why? / Why not?', modelAnswer: 'Yes, I think there is too much sometimes, because adverts seem to take up nearly as much time as the programmes. On the other hand, they do help tell people about new products.' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-standard-2-speaking-t3',
      title: 'PET 标准版官方真题 2 · Test 3 Speaking',
      level: 'PET',
      collection: 'PET 标准版官方真题 2',
      paper: 'Speaking',
      pages: 'Speaking Test 3 · 书页 88–91',
      source: 'B1 PET新题型官方真题 2.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先核对姓名和来自哪里，再从清单中选问若干个性化问题。',
        phase1: [
          { q: "What's your name?", modelAnswer: 'My name is Zhang Ming, but you can call me Leo.' },
          { q: 'Where do you live / come from?', modelAnswer: "I live in a flat in the north of Chengdu, quite near a big park and a shopping centre. I've lived there since I was born." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a middle school student. I study eight subjects, but my favourite is English because I'd like to travel and meet people from other countries." },
        ],
        phase2: [
          { q: 'Tell us about a good friend.', modelAnswer: 'My best friend is called Wang Fang. We met in primary school and we both love playing basketball. She is very funny and always helps me when I have a problem.' },
          { q: 'What kind of clothes do you like?', modelAnswer: 'I like casual clothes, like jeans and T-shirts, because they are comfortable. I usually wear sports clothes when I play basketball with my friends.' },
          { q: 'What do you enjoy doing on your birthday?', modelAnswer: "On my birthday, I usually go out for a meal with my family, and then my friends come to my house for a party. We eat cake and listen to music. It's always great fun." },
          { q: 'Which do you like best, the morning or the evening? Why?', modelAnswer: 'I prefer the evening because I can relax after a busy day at school. I usually watch a film or play computer games before going to bed.' },
          { q: 'How often do you listen to music? Why?', modelAnswer: 'I listen to music every day, usually on the bus to school and while I do my homework. It helps me relax and makes me feel happy.' },
          { q: 'Tell us about the kind of websites you like.', modelAnswer: 'I really like sports websites because I can read the latest news about basketball and watch match highlights. I also use educational websites to help with my homework.' },
          { q: 'What sort of things do you like reading?', modelAnswer: 'I like reading adventure stories because they are exciting and I can imagine I am the hero. I also enjoy sports magazines in my free time.' },
          { q: 'How do you get to college every day?', modelAnswer: "I usually go to college by bus because it's too far to walk. The journey takes about twenty minutes, and I often listen to music during the ride." },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people shopping',
            image: '/images/pet/speaking/standard2/test3/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two women shopping in a bright modern shop.
The woman on the left has long dark hair and she's wearing a loose grey top. She's smiling and holding a small notebook and a mobile phone, and she seems to be showing something to the other woman. The second woman has curly dark hair and she's wearing a light blue jacket. She's carrying a brown paper shopping bag and a black handbag.
The shop sells bags and clothes – I can see several leather bags hanging on the wall behind them. In the foreground, there's a wooden table with white bowls, plates and folded clothes on it.
It looks like an expensive shop, and both women are having a good time.`,
          },
          {
            label: 'B',
            topic: 'people watching television',
            image: '/images/pet/speaking/standard2/test3/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a boy jumping up and down in a bright living room. He's wearing a light green jumper, dark shorts and green socks, and his arms are in the air.
On the right, his family are sitting on a sofa watching him – there's a man with glasses, a woman who is pointing at the boy, and a small child sitting between them. They all look happy.
On the left, a large television is showing a football match. Below it there's a glass table and a small plant on a stool. Behind the boy, big glass doors open onto the garden, and I can see a bicycle outside.
Maybe they are celebrating because their team has just scored a goal.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A family are going to spend the day sightseeing in a city they haven’t been to before.',
        instruction: '考官给出一幅情境图，两位考生一起讨论图中不同的观光方式，并选出最好的一种。',
        image: '/images/pet/speaking/standard2/test3/task.png',
        options: ['导游带队步行', '开车或打车', '敞篷观光巴士', '拿地图自助步行', '乘地铁', '公园骑车'],
        modelDialogue: `A: A family are going sightseeing in a city they haven't visited before. Let's talk about the different ways they could travel around.
B: Going on a walking tour with a guide would be interesting because the guide can tell them all about the city's history. But walking all day might be tiring for the grandparents.
A: That's true. Going by car is comfortable, although there might be heavy traffic and parking could be difficult.
B: What about the open-top sightseeing bus? They can sit down and see everything from up high, and they can get off wherever they like.
A: That sounds good. Using a map to walk by themselves is cheaper, and taking the underground is fast, but they won't see much of the city. Cycling in the park looks fun, too, but it's not the best way to visit all the sights.
B: I think the open-top bus is the best choice because everyone can enjoy the views and relax at the same time.
A: I agree. Let's choose that.`,
        tips: [
          '逐个讨论六种观光方式并说明优缺点',
          '用 Going on… would… / What about…? / Taking the… is… 展开',
          '考虑一家人的实际情况（有老人和小孩、是否劳累、交通和花费）',
          '最后选出最佳一种并说明理由',
        ],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（城市观光）与两位考生展开讨论。',
        questions: [
          { q: 'Do you enjoy sightseeing in cities? Why? / Why not?', modelAnswer: "Yes, I love it because there's always something new to see, like old buildings, museums and busy markets. The only thing I don't enjoy is when there are too many tourists and it's hard to move around." },
          { q: 'Do you prefer sightseeing with your family or with your friends? Why?', modelAnswer: 'I prefer going with my friends because we can choose exactly what we want to do and walk at our own speed. But I also enjoy trips with my family because my parents know lots of interesting places.' },
          { q: 'Have you visited any interesting cities? Why?', modelAnswer: "Yes, I visited Beijing last year. It was amazing because I saw the Great Wall and the Forbidden City, and the buildings there are completely different from those in my city. I'd love to go back one day." },
          { q: 'Which places in your country do tourists like visiting? Why?', modelAnswer: 'Many tourists visit places like Chengdu to see the pandas, and cities like Xi’an to see the famous Terracotta Warriors. They also love Guilin because the mountains and rivers there are incredibly beautiful.' },
          { q: 'Is it better to visit new places or go somewhere you know well? Why?', modelAnswer: 'I think visiting new places is better because you can have new experiences and learn about different cultures. But it’s also nice to return to places you know, because you can relax and enjoy them without getting lost!' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-standard-2-speaking-t4',
      title: 'PET 标准版官方真题 2 · Test 4 Speaking',
      level: 'PET',
      collection: 'PET 标准版官方真题 2',
      paper: 'Speaking',
      pages: 'Speaking Test 4 · 书页 92–95（视觉材料 书页 199–200）',
      source: 'B1 PET新题型官方真题 2.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先核对姓名和来自哪里，再从清单中选问若干个性化问题。',
        phase1: [
          { q: "What's your name?", modelAnswer: 'My name is Li Hua, but my English name is Kevin.' },
          { q: 'Where do you live / come from?', modelAnswer: "I live in a small town near Hangzhou. It's quite quiet, but there are some nice parks and a big lake, so I really like living there." },
          { q: 'Do you work or are you a student? What do you study?', modelAnswer: "I'm a student at a middle school. I study nine subjects, and my favourite is art because I enjoy drawing and designing things." },
        ],
        phase2: [
          { q: 'Tell us about a good friend.', modelAnswer: 'My good friend is called Chen Jie. We have known each other since primary school. He is very kind and always shares his books with me, and we often play football together after school.' },
          { q: 'What kind of clothes do you like?', modelAnswer: 'I like comfortable clothes, especially hoodies and trainers. At the weekend I usually wear a hoodie and jeans, but for school I have to wear a uniform.' },
          { q: 'What do you enjoy doing on your birthday?', modelAnswer: "On my birthday I usually have dinner with my family at home, and my mum cooks my favourite meal. In the evening my friends come over and we watch a film and eat birthday cake together." },
          { q: 'Which do you like best, the morning or the evening? Why?', modelAnswer: 'I prefer the evening because I have more free time then. After finishing my homework, I can play games or read, and I never feel tired in the evening.' },
          { q: 'How often do you listen to music? Why?', modelAnswer: 'I listen to music almost every day, especially when I go running. Fast music gives me energy, and slow music helps me relax before I go to sleep.' },
          { q: 'Tell us about the kind of websites you like.', modelAnswer: 'I like video websites where I can watch funny clips and football matches. I also visit a website that has easy English stories, which helps me practise my reading.' },
          { q: 'What sort of things do you like reading?', modelAnswer: 'I love reading sports magazines because there are lots of pictures and interviews with famous players. Sometimes I also read detective stories because they are exciting.' },
          { q: 'How do you get to work / college every day?', modelAnswer: 'I ride my bike to school every day because it is quick and good exercise. It only takes about fifteen minutes, and I enjoy cycling past the river in the morning.' },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people in a café',
            image: '/images/pet/speaking/standard2/test4/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see four people sitting around a small round table in a café.
The woman on the right is wearing a red top and she's laughing happily. Next to her there's a woman in a green sweater with a colourful headscarf, and she's holding a cup of tea. The man on the left has curly hair and a blue shirt, and I can see his back because he's facing the other people.
Behind them, there's a man in a brown apron. He looks like a member of staff because he's wearing an apron, and he's smiling at the customers. On the left there's a long counter with a woman working behind it, and I can see a menu on the wall.
It looks like a friendly café where people come to relax and enjoy a drink together.`,
          },
          {
            label: 'B',
            topic: 'people camping',
            image: '/images/pet/speaking/standard2/test4/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see several people camping next to a lake, and there are tall mountains in the background.
In the middle of the picture there's a big orange tent, and a woman in a grey jacket is helping to put it up. On the right, a man is sitting on a rock and smiling – next to him there's a red cooler and a guitar case. On the left, a woman is taking something out of the boot of a blue car, and another man is kneeling on the grass near the tent.
Behind them I can see a river, a forest and some rocky mountains. The sky is bright, so it's probably a warm day.
It looks like they're having a great time camping in the mountains together.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A young woman has just finished school. She has some time before going to university and she’d like to learn a new skill.',
        instruction: '考官给出一幅情境图，两位考生一起讨论她可以在上大学前学习的不同技能，并选出最有用的一种。',
        image: '/images/pet/speaking/standard2/test4/task.png',
        options: ['学开车', '园艺', '烹饪课', '自己动手装修（DIY）', '参加手工课', '学弹钢琴'],
        modelDialogue: `A: A young woman has just finished school and she'd like to learn a new skill before going to university. Let's talk about the different skills she could learn.
B: Learning to drive would be really useful, because she'll be able to travel to university by herself, and she won't need to ask her parents to drive her everywhere.
A: That's true, but driving lessons can be quite expensive. Gardening is cheaper, and it's a healthy activity because she can spend time outdoors. The problem is she may not have a garden at university.
B: What about learning to cook? If she can cook, she won't have to eat in expensive restaurants, and she can prepare healthy food for herself when she's living away from home.
A: I agree, cooking is a great idea. Doing DIY looks interesting too, but it's not very practical for a student. She could also join an art and craft class – that's a fun way to make new friends.
B: Or she could learn to play the piano, which is relaxing, but it takes years to get good at it.
A: So which would be the most useful?
B: I think cooking is the best choice, because she'll need to eat every day at university, and it will save her a lot of money.
A: I agree. Let's choose cooking.`,
        tips: [
          '逐个讨论六种技能并说明优缺点',
          '用 … would be useful because … / What about …? / The problem is … 展开',
          '结合"上大学前、住校生活"的情境考虑实用性',
          '最后选出最有用的一种并给出理由',
        ],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（学习新技能）与两位考生展开讨论。',
        questions: [
          { q: 'Would you like to learn a new skill? (Why? / Why not?)', modelAnswer: "Yes, I'd love to learn to cook properly, because next year I'm going to study away from home and I don't want to eat fast food every day. It's also a useful skill for the rest of my life." },
          { q: 'What was the most useful thing you learnt to do at school? (Why?)', modelAnswer: "The most useful thing was learning English, because I can watch films and read websites in English now, and it will help me get a good job in the future." },
          { q: 'Do you prefer learning new things in a group or on your own? (Why?)', modelAnswer: "I prefer learning in a group because other students can help me when I have problems, and it's more fun. When I learn alone, I sometimes give up easily." },
          { q: 'Have you ever taught someone to do something? (Why? / Why not?)', modelAnswer: 'Yes, I taught my little brother to swim last summer. At first he was scared of the water, but I showed him slowly and after a week he could swim across the pool. It made me feel really proud.' },
          { q: 'Is it important to keep learning new things all your life? (Why? / Why not?)', modelAnswer: "Yes, I think it's very important, because the world changes quickly and old skills are not always enough. Learning new things also keeps your brain active and makes life more interesting." },
        ],
      },
    },
  },
];
