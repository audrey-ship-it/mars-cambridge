// PET Speaking — 8 mock tests from 《PET 全真模拟试题（8套）》
// Part 1 personal questions | Part 2 individual photographs |
// Part 3 collaborative task | Part 4 discussion.
// Reference answers are original B1 teaching examples following
// "direct answer + reason + example/detail". No single correct answer.

export const petSpeakingTests = [
  {
    meta: {
      id: 'pet-mock-1-speaking',
      title: 'PET 全真模拟试题 1 · Speaking',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Speaking',
      pages: '26–28',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: "My name is Li Hua, but my friends call me Leo.",
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old. I'll be sixteen in November.",
          },
          {
            q: 'Where do you come from?',
            modelAnswer: "I come from Hangzhou, a beautiful city in the east of China, famous for its lake.",
          },
          {
            q: 'Are you a student? What do you study?',
            modelAnswer: "Yes, I'm a student at No.1 Middle School. I study several subjects, including English, Maths, Geography and History, but my favourite subject is English because I think it will be useful in the future.",
          },
        ],
        phase2: [
          {
            q: 'What did you do yesterday evening?',
            modelAnswer: "Yesterday evening I stayed at home. I finished my homework first, and then I watched a film on TV with my family. It was really funny.",
          },
          {
            q: 'Would you like to live in a different country? Why / Why not?',
            modelAnswer: "Yes, I'd love to live in Britain for a year, because I could improve my English and learn about a different culture. For example, I'd like to try the food and visit famous places in London.",
          },
          {
            q: "What's your favourite subject at school?",
            modelAnswer: "My favourite subject is English. I like it because it's interesting and the teacher is really kind. I also enjoy watching English films, which helps me learn new words.",
          },
          {
            q: 'Do you think that English will be useful for you in the future? Why?',
            modelAnswer: "Yes, I'm sure it will. English is spoken all over the world, so it will help me when I travel abroad and, later, when I look for a good job. For example, I'd like to work as a computer engineer, and most programming languages use English.",
          },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'friends doing something together',
            image: '/images/pet/speaking/test1/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a group of young friends spending time together in a living room. There are four of them — two boys and two girls — and they look very excited because they are all cheering and shouting. One girl is sitting on the sofa with a big box of popcorn, and another girl is holding a cup. A boy is sitting on the floor, and I think they are watching something on television, perhaps a sports match or an exciting film.
The room is quite modern, with a large window, white curtains and a soft carpet. Through the window there is a lot of light.
All in all, they seem to be having a fantastic time together.`,
          },
          {
            label: 'B',
            topic: 'some people reading',
            image: '/images/pet/speaking/test1/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a group of about seven students, probably at university, sitting around a large table in a library.
Some of them are reading books, and one girl is writing notes in a notebook with a pen. Two students on the left are sharing a laptop, and they are both smiling, so maybe they've just read something interesting.
The place is clearly a library because there are tall wooden bookshelves all around, full of books. On the table there are also tall piles of books and a small notebook.
The lighting is warm and the atmosphere looks quiet but pleasant. I think they are studying together for an exam, and they seem very focused and happy.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'Your French teacher is going to retire. You would like to give her a present.',
        instruction: 'Here are some things you could give her as presents. Talk together and say which present would be the best for her.',
        image: '/images/pet/speaking/test1/task.png',
        options: ['珍珠项链', '钢笔礼盒', '平板电脑', '电影/戏剧票', '智能手表', '手提包', '法国菜谱'],
        modelDialogue: `A: Our French teacher is going to retire, so we need to choose a nice present for her. What do you think?
B: Well, the pearl necklace is beautiful, but it looks quite expensive. What about the pen in the box? Teachers have to write a lot, so it could be useful.
A: That's true, but I think she already has several pens. I quite like the French cuisine book, though — she loves French culture and she enjoys cooking, so it's personal and not too expensive.
B: Good idea! And we could all write our names inside the cover. The tablet or the smartwatch might be hard to use for her, and the tickets would only last one evening.
A: Exactly. Let's choose the French cuisine book then.
B: Great, I'm sure she'll love it.`,
        tips: ['先逐个讨论图片中的选项', '比较价格、实用性和老师的喜好', '用 What about...? / I think... because... 表达观点', '最后达成一致结论'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（礼物）与两位考生展开讨论。',
        questions: [
          {
            q: 'What kind of presents do you like giving to older people?',
            modelAnswer: "I prefer giving older people something personal and useful, like a soft scarf, some nice tea or a photo frame with a family photo inside, because it shows that I've really thought about them.",
          },
          {
            q: "What's the most unusual present you have received?",
            modelAnswer: "The most unusual present I've received was a small plant in a painted pot from my best friend. I've kept it for two years now, and it's still alive on my desk.",
          },
          {
            q: 'When do people exchange presents in your country?',
            modelAnswer: "In my country, people exchange presents at Chinese New Year, on birthdays and at weddings. We also give gifts, like mooncakes, during the Mid-Autumn Festival in autumn.",
          },
          {
            q: 'Where do you prefer shopping for presents?',
            modelAnswer: "I prefer shopping online because it's quick and I can compare prices easily. However, when I want something special, I like going to small local shops because the things there are often more original.",
          },
          {
            q: 'Do you prefer to get hand-made presents or experiences like theatre trips and concerts?',
            modelAnswer: "I prefer hand-made presents, to be honest. A hand-made card or cake means the person spent time creating it just for me, so it feels more meaningful, although a concert ticket is also exciting.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-2-speaking',
      title: 'PET 全真模拟试题 2 · Speaking',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Speaking',
      pages: '46–48',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Zhang Wei, but my friends call me William.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fourteen years old, and I'll be fifteen in March.",
          },
          {
            q: 'Where do you come from?',
            modelAnswer: 'I come from Suzhou, a lovely city near Shanghai, famous for its old gardens.',
          },
          {
            q: 'Are you a student? What do you study?',
            modelAnswer: "Yes, I'm a middle-school student. I study Chinese, Maths, English and Science, among other subjects, and I like English best because I enjoy watching English videos online.",
          },
        ],
        phase2: [
          {
            q: 'How do you usually travel to school?',
            modelAnswer: "I usually travel to school by underground, because it's fast and it never gets stuck in traffic. The journey takes about twenty minutes, and I sometimes read or listen to music on the way.",
          },
          {
            q: 'Can you tell us about your hometown?',
            modelAnswer: 'My hometown is Suzhou, a medium-sized city in the east of China. It\'s famous for its beautiful old gardens and quiet canals, and lots of tourists visit every year. I really like living there because everything is close to my home.',
          },
          {
            q: 'Can you describe your house or flat?',
            modelAnswer: 'We live in a flat on the twelfth floor of a modern building. It has three bedrooms, a big living room and a small balcony with a few plants. My favourite room is my bedroom, because it\'s quiet and I can do my homework there.',
          },
          {
            q: 'What did you do last weekend?',
            modelAnswer: 'Last weekend was quite relaxing. On Saturday I visited my grandparents and had a big lunch with them, and on Sunday I played badminton in the park with my friends. I really enjoyed myself.',
          },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people in a shop',
            image: '/images/pet/speaking/test2/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two young women in a bookshop. The woman on the left has dark hair in a ponytail and she's wearing a white T-shirt and jeans. She's leaning over a table full of books. The other girl has two long braids, a blue denim shirt and a brown shoulder bag, and she's reading an open book with great interest.
Around them there are tall bookshelves full of colourful books, and piles of books are lying on the tables. The shop looks quiet and bright, and I think they are really enjoying choosing books.`,
          },
          {
            label: 'B',
            topic: 'people at a party',
            image: '/images/pet/speaking/test2/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a big family party in a garden. In the middle sits an older man with grey hair and a white T-shirt. He's holding a small blue and green present and looks moved. In front of him is a birthday cake with lots of candles.
His family stand around him, smiling and clapping, including a little girl with braids. On the table there is salad, orange juice and plates of food. Behind them I can see a lawn, trees and a swimming pool. I think it's the grandfather's birthday, and they're having a wonderful time.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'You want to go camping by the sea with a group of friends. You are planning what to pack in your bags.',
        instruction: 'Here are some things you could take along. Talk together and say which thing would be the most useful.',
        image: '/images/pet/speaking/test2/task.png',
        options: [
          'MP3 播放器 MP3 player',
          '厚毛衣 warm jumper',
          '手电筒 torch',
          '折叠毯 folded blanket',
          '水壶 water bottle',
          '锅具套装 cooking pots',
          '闹钟 alarm clock',
        ],
        modelDialogue: `A: We're going camping by the sea next month, so let's decide what to pack. What do you think is the most useful thing here?
B: Well, the warm jumper is definitely necessary, because it can get quite cold at night near the sea, even in summer. But I suppose everyone will bring their own clothes.
A: That's true. I was thinking about the torch. When we walk around the campsite or go to the toilet after dark, we'll really need one, and our mobile phones can easily run out of battery.
B: Good point. The MP3 player is nice for listening to music, but it isn't essential, and the alarm clock isn't needed either because our phones can wake us up.
A: Exactly. The water bottle is useful, but we can buy water locally, and the cooking pots are far too heavy to carry in our bags. The blanket is a possibility, but a jumper does a similar job.
B: So let's agree on the torch then — it's light, cheap and something the whole group can share.
A: Perfect. The torch it is!`,
        tips: ['先逐个说出七件物品的用途，不要急于下结论', '从重量、必要性、是否能多人共用等角度比较', '用 What about...? / I think... because... 询问和表达观点', '能用手机替代的物品（闹钟、音乐）可快速排除', '最后用 Let\'s agree on... 明确达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（假期与露营）与两位考生展开讨论。',
        questions: [
          {
            q: 'Do you like camping or do you prefer other types of holiday? Why?',
            modelAnswer: "I quite like camping, but to be honest I prefer other types of holiday, like staying in a hotel. When I camp, I don't sleep well because the ground is hard, and I really miss having a hot shower. Last year I went camping for two nights, and I was so happy when I got back to my own bed!",
          },
          {
            q: 'Where do you like going on holiday?',
            modelAnswer: 'I love going to the seaside. I really enjoy swimming in the sea and walking along the beach in the evening, and the fresh air makes me feel relaxed. Last summer I went to Qingdao with my family, and we ate fresh fish there every day.',
          },
          {
            q: 'What is the best time to go on holiday?',
            modelAnswer: 'I think the best time is late summer, around August. The weather is usually warm and sunny, so you can spend all day outside, but the biggest crowds have already gone home. For students like me, of course, it has to be during the school holidays.',
          },
          {
            q: 'Do you enjoy going on holiday with your friends or your family?',
            modelAnswer: 'I enjoy both, but if I have to choose, I prefer going with my friends. With friends I feel more independent — last spring we visited a nearby town by train and planned the whole trip ourselves. Having said that, family holidays are more relaxing because my parents organise everything.',
          },
          {
            q: 'Do you like travelling abroad?',
            modelAnswer: "Yes, I love travelling abroad. It gives me the chance to practise my English, try different food and learn about other cultures. For example, I'd really like to visit the UK one day and see famous places like Big Ben in London.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-3-speaking',
      title: 'PET 全真模拟试题 3 · Speaking',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Speaking',
      pages: '66–68',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: "My name is Wang Ming. My English teacher gave me the name Max, so my classmates often call me Max.",
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old. My next birthday is in March, and I'll be sixteen then.",
          },
          {
            q: 'Where do you come from?',
            modelAnswer: "I come from Suzhou, a city in Jiangsu Province. It's famous for its beautiful gardens and its old canals.",
          },
          {
            q: 'Are you a student? What do you study?',
            modelAnswer: "Yes, I'm a student at No.5 Middle School. I study Chinese, Maths, English, Physics and History, and I enjoy English most because I'd like to travel abroad one day.",
          },
        ],
        phase2: [
          {
            q: 'Tell us about the people you live with.',
            modelAnswer: "I live with my parents and my younger sister. My father is an engineer and my mother works in a hospital. My sister is ten, and we sometimes play board games together in the evening.",
          },
          {
            q: 'What kind of music do you enjoy listening to?',
            modelAnswer: "I really enjoy pop music. I often listen to Chinese and English songs on my phone on the way to school because they help me relax. My favourite singer is Jay Chou.",
          },
          {
            q: 'Tell us about your English teacher.',
            modelAnswer: "My English teacher is Ms Li. She is kind and patient, and she always explains grammar clearly. She also shows us funny videos in English, so her lessons are never boring.",
          },
          {
            q: 'What do you enjoy doing in your free time?',
            modelAnswer: "In my free time, I like playing basketball and reading. I usually play basketball with my friends twice a week, and when I stay at home I enjoy reading adventure stories.",
          },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'a family doing something together',
            image: '/images/pet/speaking/test3/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a family celebrating a young man's graduation day. The man in the middle is wearing a black graduation cap and gown, and he is smiling and hugging his mother. She has short blonde hair and a red top, and she is drying her eyes with a tissue because she feels so proud. His father, in a grey suit, has his arms around both of them and is smiling happily.
In the background, there are other students in graduation gowns outside a university building. It is a warm and emotional moment for the whole family.`,
          },
          {
            label: 'B',
            topic: 'two people walking',
            image: '/images/pet/speaking/test3/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two people, a man and a woman, walking in the mountains. They are both wearing large backpacks, and a red sleeping mat is tied to the man's bag. The woman is wearing a blue T-shirt and she is pointing at something among the tall trees, while the man looks up and smiles.
They are walking on a rocky path through a green forest, and high mountains can be seen behind the trees. The sun is shining and the place looks calm and beautiful. I think they are enjoying a day's hiking together in nice weather.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'Your grandfather is coming to visit you this summer.',
        instruction: 'Talk together about the different places you could take him, and decide which two would be best for him. Here is a picture with some ideas to help you.',
        image: '/images/pet/speaking/test3/task.png',
        options: [
          '足球场 football stadium',
          '湖上划船 boat trip on the lake',
          '公园长椅 park with a bench',
          '美术馆 art gallery',
          '登山徒步 hiking in the mountains',
          '制作帆船模型 making a model sailing ship',
          '著名钟楼 famous clock tower',
        ],
        modelDialogue: `A: Our grandfather is coming to visit this summer, so we need to choose two places to take him. What do you think?
B: Well, he isn't very keen on sport, so the football stadium might be boring for him. Hiking in the mountains could be too tiring, and the famous clock tower is always so crowded.
A: That's true. What about the park? He loves being outdoors, and we could sit on a bench, have a rest and chat. It's nice and relaxing.
B: Good idea! For the second place, I'd choose the art gallery. He's interested in history and paintings, and we can sit down if he gets tired.
A: Perfect. The boat trip might be dangerous in bad weather, and making a model ship would probably not interest him. The park and the art gallery are just right.
B: Exactly. Let's choose those two.`,
        tips: ['结合祖父的年龄、体力和兴趣逐个讨论地点', '用 What about...? / I agree / could be too... 进行比较', '题目要求选出两个最合适的地方，不要只选一个', '最后清楚总结双方达成一致的选择'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（带来访亲友游览的地点）与两位考生展开讨论。',
        questions: [
          {
            q: 'Which places do you usually take relatives to when they visit?',
            modelAnswer: "I usually take relatives to the most famous places in my city, like the old town, the gardens and the museum beside the lake. Most of them enjoy walking around and taking photos, so those places are always popular.",
          },
          {
            q: 'Which places near where you live are best for children? Why?',
            modelAnswer: "I think parks and zoos are the best places for children, because children love playing outside and seeing animals. For example, my little cousin always gets very excited when we take him to the zoo.",
          },
          {
            q: 'Which are best for old people? Why?',
            modelAnswer: "For old people, quiet parks and museums are best, because they can walk slowly and sit down when they are tired. My grandfather, for example, likes sitting in the park and watching the birds more than visiting busy shopping streets.",
          },
          {
            q: 'What places (like parks, museums, stadiums and so on) do you like or dislike visiting?',
            modelAnswer: "I really like visiting museums, especially history and science museums, because I always learn something new. On the other hand, I dislike going to big stadiums for concerts, because they are extremely crowded and noisy.",
          },
          {
            q: "What do you think is the best time of year to visit a city? Why?",
            modelAnswer: "In my opinion, spring is the best time of year to visit a city. The weather is usually warm but not too hot, so people can walk around comfortably. In my city, the gardens look really beautiful in April too.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-4-speaking',
      title: 'PET 全真模拟试题 4 · Speaking',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Speaking',
      pages: '86–88',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: "My name is Chen Jie, but my friends usually call me Jerry.",
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old. My birthday is in October, so I'll be sixteen soon.",
          },
          {
            q: 'Where do you come from?',
            modelAnswer: "I come from Nanjing, a historic city in the east of China, famous for its old city wall.",
          },
          {
            q: 'Are you a student? What do you study?',
            modelAnswer: "Yes, I'm a student at No.3 Middle School. I study Chinese, Maths, English, Physics and PE, and I like English best because I enjoy watching English films in my free time.",
          },
        ],
        phase2: [
          {
            q: 'What did you do on your last holiday?',
            modelAnswer: "On my last holiday, my family and I went to the seaside in Qingdao for five days. We swam in the sea and ate fresh fish every evening. I really enjoyed it because the weather was sunny every day.",
          },
          {
            q: "What's your favourite book? Why?",
            modelAnswer: "My favourite book is The Little Prince. I like it because it's short but it has a beautiful message about friendship. I first read it in Chinese, and last year I read it again in English.",
          },
          {
            q: "What's your surname? How do you spell it?",
            modelAnswer: "My surname is Chen, C-H-E-N. It's one of the most common surnames in China, so there are two other Chens in my class.",
          },
          {
            q: 'Tell us about your favourite animal.',
            modelAnswer: "My favourite animal is the panda. I love pandas because they look really cute with their black ears and round bodies. Last year I saw real pandas at the zoo, and I watched them eat bamboo for ages.",
          },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people having fun',
            image: '/images/pet/speaking/test4/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a little boy learning to ride a bicycle in a forest. He's wearing a silver helmet, a green jacket and white knee pads, and he has a big smile on his face because he is riding on his own. Behind him, his father is bending down with his hands near his knees, watching him and encouraging him.
They are on a wide dirt path between tall pine trees, and the grass and bushes around them are bright green. The boy looks very proud, and they are clearly having a wonderful time together.`,
          },
          {
            label: 'B',
            topic: 'people at an event',
            image: '/images/pet/speaking/test4/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a pop concert at night. On the stage on the left, a female musician is standing next to the drummer with her arm high in the air, holding a drumstick. The drummer is sitting at a large drum kit. Bright white stage lights are shining through the darkness.
On the right, a big crowd of fans is singing and dancing, with their hands in the air. Some of them are holding colourful balloons in red, pink and yellow. Everyone looks excited, and the atmosphere seems fantastic.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: "You and your best friend would like to take up a new sport. You want to choose one to keep fit and have fun together, too.",
        instruction: 'Here are some ideas for a sport. Talk together and say which sport would be the most suitable for you.',
        image: '/images/pet/speaking/test4/task.png',
        options: [
          '篮球 basketball',
          '骑自行车 cycling',
          '游泳 swimming',
          '瑜伽 yoga',
          '举重 weightlifting',
          '空手道 karate',
          '跑步 running',
        ],
        modelDialogue: `A: We want to take up a new sport together, so let's look at these ideas. What do you think would be the most suitable?
B: Well, I love swimming, and it's great exercise for the whole body. But the swimming pool is quite far from both our homes, so getting there would be difficult.
A: That's true. What about cycling? It's good fun and it keeps you fit, and we could ride in the park at weekends. But we'd both need good bikes, and ours are quite old.
B: Hmm. Basketball is really fun and sociable, but we'd need more people to make two teams. Running, on the other hand, is easy — we can do it anywhere, and the park is close to our school.
A: Good point! We could go running together three times a week after class. Yoga and karate are usually done in classes, and weightlifting looks a bit dangerous for us.
B: Exactly. So let's choose running. It's cheap, simple and we can keep each other company.
A: Perfect! Running it is.`,
        tips: ['先逐个说出七项运动的优缺点，不要急于下结论', '从费用、场地距离、是否适合两个人一起等角度比较', '用 What about...? / I think... because... 表达和询问观点', '最后用 Let\'s choose... 明确达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（运动与健身）与两位考生展开讨论。',
        questions: [
          {
            q: 'Do you do or play any sports? Why / Why not?',
            modelAnswer: "Yes, I play badminton twice a week with my classmates after school. I enjoy it because it's fast and exciting, and it's a good way to forget about homework for a while. I sometimes go swimming at the weekend too.",
          },
          {
            q: 'Why is sport important for young people?',
            modelAnswer: "I think sport is important for young people because it makes them strong and healthy, and it helps them relax after studying. Team sports also teach you how to work with other people. For example, I've made some of my best friends through playing sport.",
          },
          {
            q: 'Which sports did you use to do as a child?',
            modelAnswer: "When I was a child, I used to do gymnastics and ride my bike in the park near my home. I stopped gymnastics when I was about ten because I wanted to try other things. I still remember how proud I was when I learnt to do my first cartwheel.",
          },
          {
            q: 'Do you think people should do more sport? Why / Why not?',
            modelAnswer: "Yes, I think people should do more sport, because these days many people spend too much time sitting at desks or looking at their phones. Even thirty minutes of walking a day can make a difference. My parents, for example, started jogging last year and now they feel much better.",
          },
          {
            q: 'What else is important to keep fit and healthy apart from sport?',
            modelAnswer: "Apart from sport, I think eating well is really important, which means lots of fruit and vegetables and not too much sugar. Sleeping enough and drinking plenty of water matter too. I always try to sleep for eight hours, because if I'm tired I can't concentrate at school.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-5-speaking',
      title: 'PET 全真模拟试题 5 · Speaking',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Speaking',
      pages: '106–108',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Chen Jie, but my friends call me Jason.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old, and I'll be sixteen in August.",
          },
          {
            q: 'Where do you come from?',
            modelAnswer: "I come from Nanjing, a historic city in the east of China, famous for its old city wall.",
          },
          {
            q: 'Are you a student? What do you study?',
            modelAnswer: "Yes, I'm a student at No.3 Middle School. I study Chinese, Maths, English, Physics and Chemistry, but I like English best because I enjoy watching English films.",
          },
        ],
        phase2: [
          {
            q: "What's your favourite film genre? Why?",
            modelAnswer: "My favourite film genre is comedy, because I love laughing after a long day at school. For example, I often watch funny films with my friends at the weekend, and they always cheer me up.",
          },
          {
            q: 'Tell us about your favourite sport.',
            modelAnswer: "My favourite sport is basketball. I play it twice a week with my classmates because it's fast and exciting, and last month our class team came second in the school competition.",
          },
          {
            q: 'What do you usually do on your birthday?',
            modelAnswer: "I usually have a big dinner with my family, and my mother always cooks my favourite noodles. After dinner, I meet my friends and we cut a birthday cake together.",
          },
          {
            q: "What's your favourite season? Why?",
            modelAnswer: "My favourite season is autumn, because the weather is cool and comfortable, neither too hot nor too cold. I also love the golden leaves, and I often take photos in the park in October.",
          },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'some teenagers doing something together',
            image: '/images/pet/speaking/test5/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a group of five teenagers doing something together around a table in a bright classroom. They are all looking at laptops and a white tablet, and they are smiling and laughing, so they seem to be enjoying themselves. A blonde girl with glasses is holding the tablet with both hands, while a taller girl points at the screen, and another girl holds a green pen. Behind them there is a whiteboard on the wall. I think they are doing a school project together, perhaps making a presentation.`,
          },
          {
            label: 'B',
            topic: 'two girls with their dogs',
            image: '/images/pet/speaking/test5/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see two young women walking together along a narrow path in a park. Both of them are smiling and looking at each other, and they seem to be good friends. They are holding several leads with about eight dogs of different sizes and colours, with small black and brown dogs in front. The women wear warm clothes and scarves. Around the path there is green grass and tall trees, and the leaves look brown and gold, so it must be autumn. I think they really enjoy walking the dogs together on a cool afternoon.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'Two younger cousins are visiting your family next weekend.',
        instruction: 'Talk together about the things you could do with them, and decide which two are the best. Here is a picture with some ideas to help you.',
        image: '/images/pet/speaking/test5/task.png',
        options: [
          '纸牌游戏 card games',
          '电子游戏 video games',
          '积木 building blocks',
          '水族馆 aquarium',
          '棋盘桌游 board games',
          '画画 painting and drawing',
          '骑士城堡装扮 dressing up as knights',
        ],
        modelDialogue: `A: Our two young cousins are visiting next weekend, so we need to choose two things to do with them. What do you think they'd enjoy?
B: Well, the football video game looks fun, but if they play on the console all afternoon, they won't talk to us, and it isn't very active.
A: I agree. I love the aquarium idea — young children love seeing sharks, and it's something special they can't do at home. What do you think?
B: That's a great first choice. For the second, I'd choose the board games. Card games and board games are easy for younger kids, and all four of us can play together.
A: Good idea. The building blocks are creative, but small pieces make a real mess, and painting could be dangerous on our new carpet! Dressing up as knights looks fun too, but we don't know if they like castles.
B: Exactly. So let's agree on the aquarium and the board games.
A: Perfect — I'm sure they'll have a brilliant time.`,
        tips: ['先逐个讨论图片中的七项活动，不要急于下结论', '结合表弟妹的年龄，考虑安全性以及是否适合四人一起参与', '用 What about...? / I think... because... 询问和表达观点', '题目要求选出两项，注意室内与室外活动的搭配', '最后用 Let\'s agree on... 明确达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（照看年幼表弟妹）与两位考生展开讨论。',
        questions: [
          {
            q: 'Which kinds of game did you like playing when you were a child?',
            modelAnswer: "When I was small, I loved playing hide-and-seek and board games with my cousins. They were simple games, but we always laughed a lot, especially when someone couldn't find us for a long time.",
          },
          {
            q: 'Do you have any younger brothers and sisters or young relatives?',
            modelAnswer: "Yes, I do. I have a younger sister who is ten, and I also have two young cousins who visit us most weekends, so I often play games with them.",
          },
          {
            q: 'Do you think that children today like the same things that your parents liked when they were children?',
            modelAnswer: "No, I don't think so. My parents played outside a lot and used their imagination, making things like cars from old boxes, while children today spend much more time on phones and computer games. Having said that, games like football and hide-and-seek are still popular.",
          },
          {
            q: "Would you like to be a babysitter? Why/Why not?",
            modelAnswer: "Yes, I'd quite like to be a babysitter. I enjoy playing with young children and I'm quite patient, so looking after my little cousins for an evening would be good fun, and it would also teach me to be more responsible.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-6-speaking',
      title: 'PET 全真模拟试题 6 · Speaking',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Speaking',
      pages: '126–128',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Zhao Lin, and my English name is Leo, so my friends usually call me Leo.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old, and I'll be sixteen next January.",
          },
          {
            q: 'Where do you come from?',
            modelAnswer: 'I come from Chengdu, a big city in the south-west of China, famous for pandas and spicy food.',
          },
          {
            q: 'Are you a student? Do you study?',
            modelAnswer: "Yes, I'm a student at No.2 Middle School. I study Chinese, Maths, English, Physics and History, among other subjects, and I enjoy English most because I like watching English films.",
          },
        ],
        phase2: [
          {
            q: 'Do you have any hobby? Tell us about it.',
            modelAnswer: 'Yes, my main hobby is photography. I often take photos of buildings and parks in my city at the weekend, and last month I won second prize in a school photo competition.',
          },
          {
            q: "What's your favourite part of the day? Why?",
            modelAnswer: "My favourite part of the day is the evening, because after dinner I can relax. I usually listen to music or chat with my friends online before I go to bed.",
          },
          {
            q: 'Tell us about your favourite food.',
            modelAnswer: 'My favourite food is dumplings. I love them because they are tasty and fun to make with my family, and we always eat them at Chinese New Year.',
          },
          {
            q: 'Where do you live?',
            modelAnswer: "I live in a flat in the centre of Chengdu, near my school. It's on the eighth floor, and there's a small park right next to the building, so it's very convenient.",
          },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people playing sports',
            image: '/images/pet/speaking/test6/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a group of children playing basketball outside. There are seven of them, boys and girls, and they are all jumping high in the air to catch the ball. One boy in a yellow T-shirt and red shorts is reaching for the basket.
They are on an outdoor court with a red floor, and there is a green basketball hoop on the left. Tall green trees stand all around, and the sky is blue and clear, so it's a sunny day.
They look really energetic, and they seem to be having a lot of fun.`,
          },
          {
            label: 'B',
            topic: 'father and son at home',
            image: '/images/pet/speaking/test6/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a father and his son at home, making a model sailing ship together. The boy is a teenager in a blue polo shirt, and he is carefully painting the ship with a small brush. His father, in a pink shirt, sits next to him and helps, smiling.
They are in a bright room with white shelves behind them. On the table there is the wooden model ship with lots of white sails, a notebook and a palette full of watercolours.
They look very concentrated, and it seems a lovely activity to share.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: "You and your classmates are going to suggest an after-school activity to do after class once a week.",
        instruction: 'Here are some ideas to choose from. Talk together and say which activity would be the most interesting and fun for students.',
        image: '/images/pet/speaking/test6/task.png',
        options: [
          '吉他课 guitar lessons',
          '雕塑课 sculpture class',
          '戏剧社 drama club',
          '足球 football',
          '跳舞 dancing',
          '天文课 astronomy',
          '户外绘画 painting outdoors',
        ],
        modelDialogue: `A: Our class needs to choose an after-school activity to do once a week, so let's look at these ideas. Which one would be the most fun?
B: Well, the guitar lessons look cool, but you need to buy a guitar, and not everyone likes music. Drama could be fun too, but some students are too shy to act in front of others.
A: I agree. What about football? It's great fun and everyone can join in, but when it rains, we can't play outside.
B: That's true. I quite like the dancing idea, and the astronomy class sounds interesting, but they're a bit quiet, and students might get bored. The sculpture class could be messy as well.
A: Hmm. What about painting outdoors? It's creative and relaxing, we can all do it together, and all the materials are cheap.
B: Good point! But if the weather is bad, we can't paint outside. Maybe we should choose football then, because most of our classmates love it and it's really good exercise.
A: You're right. Football is exciting, simple and everyone can play. Let's choose football.
B: Great, football it is!`,
        tips: ['先逐个讨论图片中的七项活动，不要急于下结论', '从费用、天气、是否适合全体同学等角度比较', '用 What about...? / I think... because... 表达观点', '积极回应同伴并礼貌表达不同意见', '最后清楚总结双方达成一致的选择'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（课后活动与爱好）与两位考生展开讨论。',
        questions: [
          {
            q: 'What do you enjoy doing in your free time?',
            modelAnswer: 'In my free time, I really enjoy playing basketball and taking photos. I usually play basketball with my friends twice a week, and at weekends I often walk around the city with my camera.',
          },
          {
            q: 'Which after-class activities does your school organise?',
            modelAnswer: "My school organises quite a lot of activities, such as a basketball club, art classes and a school choir. There's also a film club on Friday afternoons, which is really popular.",
          },
          {
            q: 'Do you think after-school activities are useful for students? Why / Why not?',
            modelAnswer: "Yes, I think they're very useful. Students can relax after classes, learn something different and make new friends. For example, I made some of my best friends in the basketball club.",
          },
          {
            q: 'Which hobbies would you like to take up in the future?',
            modelAnswer: "I'd really like to take up cooking in the future. I love eating, and it would be great to cook meals for my family. I'd also like to try playing the guitar one day.",
          },
          {
            q: "Do you play any musical instrument?",
            modelAnswer: "No, I don't play any musical instrument at the moment, although I'd love to learn the piano. My sister plays the violin, and I sometimes watch her practise at home.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-7-speaking',
      title: 'PET 全真模拟试题 7 · Speaking',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Speaking',
      pages: '146–148',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Liu Yang, but my friends call me Alex.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old, and I'll be sixteen in December.",
          },
          {
            q: 'Where do you come from?',
            modelAnswer: 'I come from Wuhan, a big city in central China, famous for the Yangtze River.',
          },
          {
            q: 'Are you a student? Do you study?',
            modelAnswer: "Yes, I'm a student at No.2 Middle School. I study Chinese, Maths, English and Physics, and I like English best because I enjoy watching English films.",
          },
        ],
        phase2: [
          {
            q: 'Tell us about your classmates.',
            modelAnswer: "My classmates are really friendly and hard-working. There are forty students in my class, and we often help each other with homework. For example, after school some of us stay in the classroom and do Maths exercises together.",
          },
          {
            q: 'Do you like travelling? Why? Where would you like to go on your next trip? Why?',
            modelAnswer: "Yes, I love travelling because I can see new places and try different food. On my next trip, I'd like to go to Yunnan, because I've heard the mountains there are beautiful and the weather is warm all year round.",
          },
          {
            q: "Do you have any pet? What's it like?",
            modelAnswer: "Yes, I have a pet cat called Mimi. She's two years old, with white fur and blue eyes. She's quite lazy and sleeps most of the day, but in the evening she loves playing with a small ball.",
          },
          {
            q: 'What did you do last summer?',
            modelAnswer: 'Last summer I visited my grandparents in another city and stayed with them for two weeks. I went swimming every afternoon with my cousin, and my grandmother cooked my favourite dishes. I really enjoyed myself.',
          },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'people in a kitchen',
            image: '/images/pet/speaking/test7/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a family cooking together in a modern kitchen. There are four of them: a father on the left in a checked shirt and apron, a young boy, a mother with long brown hair, and a girl with curly hair on the right.
They are standing around a wooden table, preparing food with their hands. On the table there is a big red bowl, some eggs, cups and a lot of flour, so I think they are making cakes. There is also a tablet at the corner, perhaps showing a recipe. They all look happy.`,
          },
          {
            label: 'B',
            topic: 'people in the mountains',
            image: '/images/pet/speaking/test7/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph I can see a family of four skiers in the mountains. Three adults stand behind, wearing helmets and goggles: one woman has a pink jacket and blue trousers, another has a bright blue jacket and red trousers, and the man wears a yellow jacket.
In front, a young child in a green striped jacket and a red helmet is standing on skis, holding two ski poles and smiling.
Behind them there are snowy mountains and a clear blue sky. The sun is shining, and they seem to be enjoying a fantastic day of skiing together.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: "Your grandparents are going to celebrate their 50th wedding anniversary.",
        instruction: 'Suggest them different places they can go to. Talk together about the different holidays they could enjoy, and say which would be most suitable for them.',
        image: '/images/pet/speaking/test7/task.png',
        options: [
          '野外露营 camping',
          '大城市观光 city sightseeing',
          '热带海滩 tropical beach',
          '著名古迹 famous monument',
          '雪山木屋 mountain chalet',
          '豪华酒店 luxury hotel',
          '游轮度假 cruise',
        ],
        modelDialogue: `A: Our grandparents are going to celebrate their 50th wedding anniversary, so let's choose a suitable holiday for them. What do you think?
B: Well, camping could be uncomfortable for older people. Sleeping in a tent and using shared showers isn't relaxing, and the mountain chalet might be too cold.
A: I agree. The big city is noisy and crowded, and visiting a famous monument often means long queues and lots of walking in the heat.
B: Exactly. I quite like the tropical beach idea. They could rest, walk slowly along the sand and enjoy the warm weather.
A: That's true, but what about the cruise? Everything is on the ship — meals, music and comfortable cabins — so they don't have to carry bags around or plan anything. They can also visit several different places.
B: Good point! The luxury hotel is relaxing too, but they would stay in just one place. A cruise feels much more special for an anniversary.
A: So let's choose the cruise then.
B: Great, I'm sure they'll love it.`,
        tips: ['结合祖父母的年龄和体力，先逐个讨论图片中的七种度假方式', '从舒适度、安全性、是否需要多走路或搬运行李等角度比较', '用 What about...? / I think... because... 询问和表达观点', '露营、滑雪等不适合老人的选项要说明理由再排除', '最后用 Let\'s choose... 明确达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（假期与旅行）与两位考生展开讨论。',
        questions: [
          {
            q: 'What kind of holiday do you prefer?',
            modelAnswer: 'I prefer beach holidays because I love swimming and lying in the sun. Last year I went to Sanya with my family, and we spent the whole day on the beach. It was really relaxing.',
          },
          {
            q: "What's the most exciting holiday you have had?",
            modelAnswer: "The most exciting holiday I've had was a trip to Beijing when I was twelve. We visited the Great Wall and the Palace Museum, and I took lots of photos. I was so excited that I didn't want to come home.",
          },
          {
            q: "Where are you going on holiday this year?",
            modelAnswer: "This year my family and I are going to Qingdao in August. We're going to stay there for five days and eat fresh fish every evening. I'm really looking forward to it.",
          },
          {
            q: 'Would you like to go on a tour around the world? Why/Why not?',
            modelAnswer: "Yes, I'd love to go on a tour around the world, because I could see famous places and meet people from different countries. For example, I'd really like to visit London, New York and Australia. However, it would be very expensive, so I need to save a lot of money first.",
          },
          {
            q: 'Do you prefer the seaside or the mountains?',
            modelAnswer: "I prefer the seaside, to be honest. I really enjoy swimming in the sea and walking along the beach in the evening. In the mountains, there isn't much to do except hiking, and I find that quite tiring.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-8-speaking',
      title: 'PET 全真模拟试题 8 · Speaking',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Speaking',
      pages: '166–168',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再分别问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Sun Hao, but my friends usually call me Harry.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old, and I'll be sixteen in February.",
          },
          {
            q: 'Where do you come from?',
            modelAnswer: "I come from Xiamen, a coastal city in the south-east of China, famous for its beautiful beaches.",
          },
          {
            q: 'Are you a student? Do you study?',
            modelAnswer: "Yes, I'm a student at No.4 Middle School. I study Chinese, Maths, English and Physics, among other subjects, and I like English best because I enjoy watching English films.",
          },
        ],
        phase2: [
          {
            q: 'What did you do yesterday afternoon?',
            modelAnswer: "Yesterday afternoon I came home from school at half past four. I did my homework first, and then I played basketball with my friends for about an hour before dinner.",
          },
          {
            q: 'Do you like watching TV? Why/Why not?',
            modelAnswer: "Yes, I quite like watching TV, because it helps me relax after a day of classes. My favourite programme is a nature documentary, and I watch it with my dad every Friday evening.",
          },
          {
            q: 'Do you like Mondays? Why/Why not?',
            modelAnswer: "No, I don't like Mondays very much, because the weekend is over and I always feel tired. We have seven lessons on Mondays, including Maths, which is my most difficult subject.",
          },
          {
            q: 'Tell us about your best friend.',
            modelAnswer: "My best friend is called Leo. We're in the same class, and he's really funny and kind. We often play football together at the weekend, and he always helps me when I don't understand my homework.",
          },
        ],
      },
      2: {
        title: 'Part 2 · 个人图片描述',
        duration: '2–3 分钟',
        instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
        photos: [
          {
            label: 'A',
            topic: 'a big city',
            image: '/images/pet/speaking/test8/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a busy street in a big city, which looks like New York. Tall skyscrapers stand on both sides, and the street is full of traffic: I can see several famous yellow taxis, cars and a bus.
In the middle, many people are crossing the road at the zebra crossing, including a man in a white T-shirt and a woman in a long dress. There is also a young man on a bicycle. Traffic lights and street signs hang above the road.
The light is warm and soft, so it's probably late afternoon. The city looks crowded, noisy and full of energy.`,
          },
          {
            label: 'B',
            topic: 'people eating together',
            image: '/images/pet/speaking/test8/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a group of about seven children camping at night. They are sitting on the grass around a warm campfire, and most of them are holding long sticks with marshmallows over the flames, so they are cooking and eating together.
Behind them, I can see two tents: a red one on the left and a yellow and purple one on the right. The children are smiling and laughing, and they look really happy.
It is dark, but the fire lights up their faces. I think they are having a wonderful evening with their friends.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: "It's Saturday afternoon and two brothers don't know what to do.",
        instruction: 'Talk together about the different things they could do, and decide which would be best for them. Here is a picture with some ideas to help you.',
        image: '/images/pet/speaking/test8/task.png',
        options: [
          '在家看电影 watching a film at home',
          '粉刷篱笆 painting the fence',
          '骑自行车 going cycling',
          '演奏乐器 playing musical instruments',
          '打保龄球 going bowling',
          '烤蛋糕 baking a cake',
          '看书 reading books',
        ],
        modelDialogue: `A: It's Saturday afternoon and we don't know what to do. Let's look at these ideas.
B: Well, painting the fence would help Dad, but it's hard work and the paint gets everywhere. Baking a cake sounds nice, but we'd make a mess in the kitchen.
A: I agree. Reading books is too quiet for a Saturday, and we can't play any of those instruments — they take years to learn!
B: What about a film at home? We could relax... but we'd just sit on the sofa all afternoon.
A: Hmm. I quite like going bowling, but it's expensive and we'd have to book a lane.
B: That's true. What about going cycling? The weather is perfect, we both have bikes, and we can ride to the lake and get some exercise.
A: Good idea! We could stop for an ice cream on the way too. Let's go cycling.
B: Great, let's get our bikes!`,
        tips: ['先逐个讨论图片中的七项活动，不要急于下结论', '从天气、费用、是否劳累或有趣等角度比较', '用 What about...? / I think... because... 询问和表达观点', '不适合的选项说明理由后再排除', '积极回应同伴，最后用 Let\'s... 明确达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（业余活动）与两位考生展开讨论。',
        questions: [
          {
            q: 'What kind of free-time activities are there where you live?',
            modelAnswer: "There are plenty of activities where I live. The city has two cinemas, a bowling alley, a big sports centre and several parks, and young people can also go cycling along the beach. At the weekend, my friends and I often go to the park or play basketball.",
          },
          {
            q: 'Which are best for young people? Why?',
            modelAnswer: 'In my opinion, sports are best for young people, because they are good fun and keep you healthy at the same time. Team sports like football and basketball also help you make friends and learn to work with other people.',
          },
          {
            q: 'What activities do you like doing best? Why?',
            modelAnswer: "I like playing basketball best, because it's fast and exciting and I can play it with my friends. I also enjoy cycling to the beach in summer, as the fresh air helps me relax after a busy week.",
          },
          {
            q: 'Are there any free-time activities that you would like to try? What are they?',
            modelAnswer: "Yes, there are two activities I'd really like to try. I'd love to learn sailing, because I live near the sea and I've always found boats exciting, and I'd also like to try rock climbing at the new indoor centre in my city.",
          },
        ],
      },
    },
  },
]
