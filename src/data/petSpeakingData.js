// PET Speaking — 8 mock tests from 《PET 全真模拟试题（8套）》+ Test 1–4 from《PET 青少版官方真题 3》
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
  {
    meta: {
      id: 'pet-mock-9-speaking',
      title: 'PET 青少版官方真题 3 · Test 1 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 3（2025 新增）',
      paper: 'Speaking',
      pages: '80–83',
      source: 'PET3 - Test 1 口语问题参考.pdf；PET3 - Test 1 完整试卷（含口语图片）.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Li Hua, but my friends call me Leo.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old. I'll be sixteen in November.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: 'I live in Hangzhou, in the east of China. My home is quite close to the city centre, so I can walk to school.',
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my younger sister. We also have a small dog called Lucky, and we all help look after him.',
          },
        ],
        phase2: [
          {
            q: 'How often do you use a mobile phone? (Why?)',
            modelAnswer: "I use my mobile phone every day, but only after I finish my homework. I mainly need it to send messages to my friends and look up new English words, so it's really useful.",
          },
          {
            q: 'What is your favourite time of day? (Why?)',
            modelAnswer: 'My favourite time of day is the evening, because the whole family is at home then. We have dinner together, talk about our day, and sometimes watch a film, so I feel really relaxed.',
          },
          {
            q: 'Tell us about something you’d like to do in the future. (Why?)',
            modelAnswer: "I'd love to visit Britain in the future, because I've studied English for several years and I'd like to use it in real life. For example, I'd really like to visit London and see famous places like Big Ben.",
          },
          {
            q: 'What kind of things do you like reading? (Why?)',
            modelAnswer: "I like reading adventure stories best, because they're exciting and I can forget everything else while I read. I also enjoy short English articles online, since they help me learn new vocabulary.",
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
            topic: 'a family spending time together',
            image: '/images/pet/speaking/schools3-1/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a family of four — a man, a woman and two teenage boys — and they are all with their bicycles on a path in a forest or park.
The parents are standing in the middle and looking together at a large paper map, so they're probably trying to find the right route. The boy on the left is on his bike and seems to be waiting, while the boy on the right is holding his handlebars and looking towards the family.
Everyone is wearing casual clothes and rucksacks, and there are tall trees all around them.
The atmosphere looks calm and pleasant, and I think they're enjoying an active day out together.`,
          },
          {
            label: 'B',
            topic: 'people in a classroom',
            image: '/images/pet/speaking/schools3-1/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see several students sitting at desks in a classroom.
In the foreground, a student with tied-up hair is leaning over an open book and writing with a pen, so he or she is working really hard. On the right, another student has a hand next to his face and is looking down at his work, and there are more students sitting at desks further back.
The room looks like a typical classroom, with big windows that let in a lot of light and some curtains.
There are books and notebooks on all the desks. I think the students are taking an exam or doing quiet written work, because they all look very focused and serious.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A girl has been on holiday with her family at the seaside. She wants to choose a souvenir which will help her remember the holiday every time she uses it.',
        instruction: 'Here are some souvenirs she could choose. Talk together about the different souvenirs she could choose and say which would be best.',
        image: '/images/pet/speaking/schools3-1/task.png',
        options: ['首饰礼盒', '太阳镜', '冲浪板', '装饰圆盘画', '手表', '巧克力礼盒', '戴墨镜的泰迪熊'],
        modelDialogue: `A: A girl needs a souvenir that helps her remember her seaside holiday every time she uses it. What do you think of these ideas?
B: Well, the box of chocolates would disappear quickly, so she couldn't remember the holiday for long. The surfboard looks fun, but it's huge and she might not live near the sea.
A: That's true. The sunglasses are useful and there's a little dolphin on them, but they could easily break or get lost. What about the jewellery box?
B: It's beautiful, but she might not wear those things often. I quite like the watch with a whale on it, though — she can wear it every day at school.
A: Good point! The teddy bear with sunglasses is also sweet and really reminds you of the beach, but it could sit on a shelf and get dusty. The round picture is nice but it's only on a wall.
B: So let's choose the watch. She'll use it every day and think of her holiday.
A: I agree. The watch is the best souvenir.`,
        tips: ['逐个讨论七件纪念品，不急着下结论', '从"是否会经常使用、能否长期保存、是否方便携带"比较', '用 What about...? / I quite like... 表达观点', '扣题：每次使用都能想起这次度假', '最后达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（纪念品、海边度假）与两位考生展开讨论。',
        questions: [
          {
            q: 'Have you ever brought a souvenir home from a holiday? (What was it?)',
            modelAnswer: "Yes, I have. Last summer I bought a small fridge magnet with a picture of the lake we visited. It's on my fridge now, so I see it every day and it always reminds me of that trip.",
          },
          {
            q: 'When was the last time you went to the beach? (Was the weather good?)',
            modelAnswer: "The last time I went to the beach was last August, with my family. The weather was fantastic — sunny and warm, but not too hot — so we could swim and play beach volleyball all day.",
          },
          {
            q: 'Would you like to live by the sea? (Why?/Why not?)',
            modelAnswer: "Yes, I'd love to, because I really enjoy swimming and the air by the sea is fresh and clean. I could also go for walks on the beach after school, which would help me relax.",
          },
          {
            q: 'Is it important for everybody to learn to swim? (Why?/Why not?)',
            modelAnswer: "Yes, I think it is. Swimming is great exercise and it's good for your health, but more importantly, being able to swim can keep you safe in the sea or a swimming pool.",
          },
          {
            q: 'Is the beach the best place to go on holiday? (Why?/Why not?)',
            modelAnswer: "I think the beach is one of the best places, because there's something for everyone: you can swim, play games or just relax. However, I also like city holidays because you can visit museums and try different food.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-10-speaking',
      title: 'PET 青少版官方真题 3 · Test 2 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 3（2025 新增）',
      paper: 'Speaking',
      pages: '84–87',
      source: 'PET3 - Test 2 口语问题参考.pdf；PET3 - Test 2 完整试卷（含口语图片）.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
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
            q: 'Where do you live?',
            modelAnswer: 'I live in Suzhou, a lovely city near Shanghai. My home is in a quiet area with a small park nearby.',
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my grandmother. My parents both work, so my grandmother often cooks lunch for me.',
          },
        ],
        phase2: [
          {
            q: 'What type of music do you like listening to? (Why?)',
            modelAnswer: "I like pop music best, because the songs are cheerful and easy to sing along to. I often listen to it on the bus to school, and my favourite singer is very popular online.",
          },
          {
            q: 'Do you enjoy shopping? (Why?/Why not?)',
            modelAnswer: "Yes, I enjoy shopping with my friends at the weekend. It's fun to look at new clothes together, although I don't always buy anything because I try not to spend too much pocket money.",
          },
          {
            q: 'What type of programmes do you like watching on television? (Why?)',
            modelAnswer: 'I really like nature documentaries, because I can learn interesting facts about animals and places I will never visit. I also enjoy watching football matches with my dad.',
          },
          {
            q: 'Tell us about something you’d like to study in the future. (Why?)',
            modelAnswer: "I'd like to study computer science in the future, because technology is changing the world and there are lots of interesting jobs in that field. I'm also quite good at maths, which helps.",
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
            topic: 'people doing homework',
            image: '/images/pet/speaking/schools3-2/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see two people — a young man and a young woman — sitting together at a table and doing homework.
They both have pens in their hands and are writing in an open notebook between them, so they're helping each other. The young man is wearing a white T-shirt and the woman has long hair and is smiling as she writes.
On the table there is also a laptop, an open book and a pencil case full of pens, and in the background I can see a window and part of a kitchen, with a toaster on the left.
The room is bright and looks like a home rather than a classroom.
I think they are studying together after school or at the weekend, and they look relaxed and focused.`,
          },
          {
            label: 'B',
            topic: 'friends together',
            image: '/images/pet/speaking/schools3-2/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a group of five friends — three boys and two girls — standing outdoors together.
They are all looking down at something. The girl in the middle is holding a piece of paper or a small map, and the boy next to her is wearing sunglasses, while the girl on the right is holding a shopping bag, so maybe they are deciding where to go next.
The boy on the left is wearing a checked shirt and seems to be reading the paper too.
In the background I can see modern buildings and some trees, so they're probably in a town centre or on a university campus on a sunny day.
They look like close friends enjoying a day out together.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A brother and sister are going to stay with their grandparents in the summer holidays and want to take a present. Their grandparents live in the countryside and enjoy growing flowers and vegetables.',
        instruction: 'Here are some presents they could take. Talk together about the different presents they could take and say which would be best.',
        image: '/images/pet/speaking/schools3-2/task.png',
        options: ['巧克力礼盒', '带框合影照片', '遮阳帽+园艺手套', '盆栽柠檬树', '蔬菜菜谱', '盆花花苗'],
        modelDialogue: `A: We need a present for our grandparents, who love gardening and growing vegetables. What do you think of these ideas?
B: The chocolates are nice, but they don't connect with their hobby and they'll be eaten quickly. What about the framed photo?
A: That's personal and grandparents love family photos, but they probably already have plenty on their walls. The recipe book about vegetables looks useful, though.
B: It does, but they've cooked for years, so they might know most of the recipes already. The sun hat and gloves are practical for gardening...
A: ...but they may already have good ones. I really like the tray of flower plants. The grandparents could put them straight into the garden and look after them.
B: Good point! The little lemon tree is lovely too, but it might be difficult to grow in their garden if the weather gets cold.
A: Exactly. Let's choose the tray of flower plants. It matches their hobby and they'll think of us every time they see the flowers.
B: I agree. Let's take the plants.`,
        tips: ['逐个讨论六件礼物', '紧扣"住在乡下、喜欢种花和蔬菜"这一关键信息', '从实用性、是否合心意、是否已有类似物品比较', '用 What about...? / I really like... 互动', '最后达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（植物、动物与乡下生活）与两位考生展开讨论。',
        questions: [
          {
            q: 'Do you learn about plants and animals at school? (Is it interesting?)',
            modelAnswer: "Yes, we learn about them in science lessons, and I find it really interesting. For example, last term we grew beans in small pots and watched how they changed every week, which was good fun.",
          },
          {
            q: 'What do you like doing in the countryside? (Why?)',
            modelAnswer: "I like walking and cycling in the countryside, because it's quiet and the scenery is beautiful. I also enjoy picking fruit on farms, like strawberries, because I can eat them straight away.",
          },
          {
            q: 'Do you enjoy watching TV programmes about nature? (Why?/Why not?)',
            modelAnswer: "Yes, I really enjoy them, especially programmes about the ocean or wild animals. They teach me things I can't see in everyday life, and the photography is often amazing.",
          },
          {
            q: 'Is living in the countryside better than living in a city? (Why?/Why not?)',
            modelAnswer: "In some ways yes, because the countryside is quieter, cleaner and safer for children. However, cities have better schools, shops and hospitals, so I think both places have advantages.",
          },
          {
            q: 'Is it important to spend time in the countryside? (Why?/Why not?)',
            modelAnswer: "Yes, I think so. Spending time in nature helps people relax and stay healthy, and it also teaches children to care about the environment. That's why school trips to farms and parks are so valuable.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-11-speaking',
      title: 'PET 青少版官方真题 3 · Test 3 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 3（2025 新增）',
      paper: 'Speaking',
      pages: '88–91',
      source: 'PET3 - Test 3 口语问题参考.pdf；PET3 - Test 3 完整试卷（含口语图片）.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Wang Fang, but my friends call me Flora.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old, and my birthday is in July, during the summer holidays.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: 'I live in Nanjing, a big city in the east of China. I live in a modern flat near the underground, which is very convenient.',
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my older brother. My brother is at university, but he comes home at weekends and helps me with maths.',
          },
        ],
        phase2: [
          {
            q: 'How often do you use a mobile phone? (Why?)',
            modelAnswer: "I use my phone every day, mainly to keep in touch with my family and check my homework group chat. My parents don't let me use it for too long, though, because they say it's bad for my eyes.",
          },
          {
            q: 'What is your favourite time of day? (Why?)',
            modelAnswer: "My favourite time is late afternoon, when school is finished and I don't have to rush anywhere. I can meet my friends, play a little basketball, or just rest before starting my homework.",
          },
          {
            q: 'Do you enjoy shopping? (Why?/Why not?)',
            modelAnswer: "Not really, to be honest. I find large shopping centres quite tiring, so I usually shop quickly when I need something. However, I enjoy going to bookshops because I love looking at new books.",
          },
          {
            q: 'What kind of things do you like reading? (Why?)',
            modelAnswer: "I like reading science-fiction stories best, because they take me to completely different worlds and make me imagine the future. I also read short news articles in English to improve my vocabulary.",
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
            topic: 'someone using technology',
            image: '/images/pet/speaking/schools3-3/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a young man sitting at a desk and using a smartphone. He has dark skin and short twisted hair, and he's smiling as he looks at the screen, so he's probably reading a message or watching something funny.
On the desk in front of him there is also an open laptop, a notebook, a pen and a pair of headphones, and a large plant is standing on the left side of the room.
Behind him, the wall is covered with pictures and shelves, and there is a window on the right that lets in bright daylight.
The room looks modern and comfortable, maybe a bedroom or a study at home.
I think he's enjoying some free time with his technology, although he could also be studying, since the laptop is open.`,
          },
          {
            label: 'B',
            topic: 'people enjoying free time',
            image: '/images/pet/speaking/schools3-3/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a group of four young people playing music together in a band.
On the left, two girls are sitting and standing at an electric keyboard, and on the right a boy is standing and playing a saxophone. Behind them, a younger boy is sitting at a drum kit, which includes several drums and cymbals.
They are all looking at each other and seem to be enjoying themselves.
The place looks like a living room or a music room, with a door on the left, long curtains and a window on the right.
I think the friends are practising during their free time, perhaps for a school show. The room is full of instruments, and the atmosphere looks lively and creative.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A boy is spending an afternoon at home by himself and wants to do something interesting.',
        instruction: 'Here are some things he could do. Talk together about the things he could do at home by himself and say which would be most interesting.',
        image: '/images/pet/speaking/schools3-3/task.png',
        options: ['洗车', '看漫画', '打电话', '弹吉他', '笔记本电脑下象棋', '看电视体育节目'],
        modelDialogue: `A: A boy has an afternoon at home alone and wants something interesting to do. Let's look at these ideas.
B: He could wash the car, but that's hard work and it's not really fun on your own. He could also phone a friend...
A: ...but that might only last ten minutes. What about playing the guitar?
B: It's enjoyable and it passes the time, but only if he can play well. Watching sports on TV is easy, but he might just get bored sitting there.
A: He could play chess against the computer, though. That's interesting and the laptop makes it a real challenge, so time passes quickly.
B: That's true, but reading a comic is also fun, and he can really relax with it.
A: Well, the comic is over quite fast, while the chess game keeps his brain active for the whole afternoon. Let's choose chess on the laptop.
B: I agree — it's the most interesting thing he can do alone.`,
        tips: ['逐个讨论六项活动', '注意关键条件"一个人在家"，排除需要别人或很快结束的活动', '从趣味性、时长、动脑程度比较', '用 What about...? / That\'s true, but... 互动', '最后达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（独处与合群）与两位考生展开讨论。',
        questions: [
          {
            q: 'What do you enjoy doing by yourself? (Why?)',
            modelAnswer: "I enjoy reading and listening to music by myself, because it helps me calm down after a busy day at school. Sometimes I also draw, which lets me use my imagination without anyone interrupting me.",
          },
          {
            q: 'What do you and your friends like doing together? (Why?)',
            modelAnswer: "My friends and I like playing team sports, especially basketball, because it's exciting and keeps us fit. At weekends, we sometimes go to the cinema or just hang out in a café and chat, which is also great fun.",
          },
          {
            q: 'How do you feel when you’re by yourself? (Why?)',
            modelAnswer: "Most of the time I feel fine, because being alone gives me time to think and rest. However, if I'm alone for too long, I start to miss my friends and family, so I prefer a mix of both.",
          },
          {
            q: 'Do you prefer doing schoolwork by yourself or with your classmates? (Why?)',
            modelAnswer: "For difficult homework, I prefer working by myself, because I can concentrate better. But for projects, I enjoy working with classmates, since everyone has different ideas and we can share the work, which makes it easier and more fun.",
          },
          {
            q: 'Do you prefer doing team sports or individual sports? (Why?)',
            modelAnswer: "I prefer team sports, because I like the feeling of working with other people towards the same goal, and I've made most of my friends that way. Individual sports like running are good too, though, because you can improve at your own speed.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-12-speaking',
      title: 'PET 青少版官方真题 3 · Test 4 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 3（2025 新增）',
      paper: 'Speaking',
      pages: '92–95',
      source: 'PET3 - Test 4 口语问题参考.pdf；PET3 - Test 4 完整试卷（含口语图片）.pdf',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Chen Jie, but my friends call me Jason.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fourteen years old, and I'll be fifteen in September, soon after the new school year starts.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: 'I live in Xiamen, a coastal city in the south of China. My home is only about ten minutes from the beach by bus.',
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my twin sister. We share a lot of things, and we both learn English at the same school.',
          },
        ],
        phase2: [
          {
            q: 'What type of music do you like listening to? (Why?)',
            modelAnswer: "I like soft pop and film music, because they help me relax, especially when I'm tired after school. I usually listen with headphones in my bedroom in the evening.",
          },
          {
            q: 'Tell us about something you’d like to do in the future. (Why?)',
            modelAnswer: "I'd like to travel around Europe in the future, because I love history and old buildings. For example, I'd really like to visit Italy and see places I've read about in books.",
          },
          {
            q: 'What type of programmes do you like watching on television? (Why?)',
            modelAnswer: "I enjoy quiz shows and travel programmes, because they're entertaining but I can also learn something new. I don't really watch TV series, since they take up too much time.",
          },
          {
            q: 'What is your favourite time of day? (Why?)',
            modelAnswer: "My favourite time is early morning at the weekend, because nobody wakes me up early and I can take my time. After breakfast, I often go cycling along the beach with my friends, which is a great start to the day.",
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
            topic: 'people in the kitchen',
            image: '/images/pet/speaking/schools3-4/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see three people sitting around a table in a modern kitchen — two younger women and an older woman with glasses and a ponytail.
They are all writing in notebooks with pens and looking at papers and open laptops on the table, so they seem to be studying or working on something together.
The woman on the left is leaning forward and writing hard, while the girl on the right is focused on her notebook.
The kitchen is bright and modern: there are two large hanging lamps, a round clock on the wall showing about ten past ten, big windows, white cupboards and a plant near the window.
There are also some books and a pencil case on the table.
I think they could be members of the same family helping each other with study at home.`,
          },
          {
            label: 'B',
            topic: 'people learning something new',
            image: '/images/pet/speaking/schools3-4/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a small group of four people — three students and a teacher — sitting around a table and learning together.
The teacher is standing and leaning over the table in the middle, pointing at an open book, while the students are watching and listening carefully. On the left, a girl with a ponytail is looking at the book, and on the right a young man is sitting in front of a laptop.
There are more books and a tablet on the table.
The place looks like a library or study room, because there are tall bookshelves full of books behind them and a large window letting in light.
I think the teacher is explaining something difficult, and the students are learning something new. The atmosphere looks serious but friendly.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A music teacher is organising a competition for the best singer or musician in the school. She wants to give a prize to the winner.',
        instruction: 'Here are some prizes she could give. Talk together about the different prizes she could give to the winner of the competition, and say which would be best.',
        image: '/images/pet/speaking/schools3-4/task.png',
        options: ['带音符的连帽衫', '手表', '花束', '音乐会门票', 'CD/DVD套装', '长笛'],
        modelDialogue: `A: A music teacher needs a prize for the winner of a singing and music competition. What do you think of these ideas?
B: The flowers are beautiful, but they die after a few days, so they're not a good prize. The watch is useful, but it has nothing to do with music.
A: I agree. The hoodie with musical notes is fun and the winner could wear it at school, but it's hard to choose the right size.
B: That's true. The flute is lovely and it's a real instrument, but it's expensive and the winner might already play something different.
A: What about the concert tickets? They're directly connected with music and the winner could enjoy a live performance, which is exciting.
B: They're great, but only for one evening, and the date has to suit the winner. I quite like the CD and DVD set, though — the winner can watch and listen to it again and again.
A: Good point! It lasts much longer than tickets and it celebrates music. Let's choose the CD and DVD set.
B: I agree. It's the best prize.`,
        tips: ['逐个讨论六件奖品', '从是否与音乐相关、是否持久、是否容易选择比较', '用 What about...? / I quite like... 互动', '音乐会门票与 CD 套装重点比较', '最后达成一致'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题（音乐、比赛与学习乐器）与两位考生展开讨论。',
        questions: [
          {
            q: 'Have you ever entered a competition? (What was the competition?)',
            modelAnswer: "Yes, I entered an English speaking competition at my school last year. I had to give a short talk in front of the whole class, and although I didn't win, I became more confident about speaking English.",
          },
          {
            q: 'Have you ever been to a concert? (Did you enjoy it?/Would you like to go to one?)',
            modelAnswer: "I haven't been to a big concert yet, but I'd really like to go to one. I've watched concerts on TV and the atmosphere looked amazing, with everyone singing and clapping along. I'd love to see my favourite singer live.",
          },
          {
            q: 'Are you learning to play a musical instrument? (Is it difficult to learn?/Would you like to learn to play one? Why?/Why not?)',
            modelAnswer: "I'm not learning one at the moment, but I'd like to learn the guitar. I think it's difficult at the beginning, especially changing chords quickly, but I love the sound and you can play it almost anywhere with friends.",
          },
          {
            q: 'Do you prefer listening to music when you’re happy or when you’re sad? (Why?)',
            modelAnswer: "I prefer listening to music when I'm happy, because lively songs make my good mood even better and I can sing or dance along. When I'm sad, I usually prefer quiet or no music, since slow songs sometimes make me feel worse.",
          },
          {
            q: 'Is it important for a film to have good music? (Why?/Why not?)',
            modelAnswer: "Yes, I think it's really important, because music tells the audience how to feel in each scene. For example, fast, loud music makes an action scene exciting, while soft music makes a sad moment even more moving. Good films are often remembered for their music too.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-13-speaking',
      title: 'PET 青少版官方真题 1 · Test 1 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 1（新题型）',
      paper: 'Speaking',
      pages: '80–83',
      source: 'B1 PET青少版官方真题 新题型 1.pdf（PDF p.81–84）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Wang Mei, but most people call me May.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fourteen. My birthday is in June, so I'll be fifteen soon.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: "I live in Chengdu, a big city in the south-west of China. It's quite busy, but I like it because there's always something to do at weekends.",
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my grandparents. My grandmother cooks for us every day, which is wonderful.',
          },
        ],
        phase2: [
          {
            q: 'Tell us about a teacher you like.',
            modelAnswer: "I really like my maths teacher, Mr Chen, because he explains difficult problems slowly and always smiles. For example, when I got a question wrong, he never shouted — he just showed me an easier way until I understood.",
          },
          {
            q: 'How often do you use a mobile phone?',
            modelAnswer: "I use my phone every day, but only for about an hour after finishing my homework. I mainly chat with my classmates and watch short science videos, so it helps me both relax and study.",
          },
          {
            q: 'Which time of year do you like the most? (Why?)',
            modelAnswer: "I like autumn best, because the weather is cool and sunny and the leaves turn gold and red. Last October we walked in the hills and took photos of the colourful forest, which was beautiful.",
          },
          {
            q: 'Which do you like best, the morning or the afternoon? (Why?)',
            modelAnswer: "I prefer the afternoon, because I have more energy after lunch and most of my favourite lessons are then. After school I also play basketball with my friends in the afternoon, so it's the best part of my day.",
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
            topic: 'someone watching TV',
            image: '/images/pet/speaking/schools1-1/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a boy sitting on a big pale green sofa in a living room.
He's lying back against the cushions with a phone in one hand, and he looks very relaxed.
On the wall in front of him there's a large TV, and a football match is on the screen, so maybe he's watching the game and checking his phone at the same time.
Under the TV there's a long wooden shelf with a small lamp and some candles on it.
The room looks bright and tidy, with plain white walls.
I think it's a comfortable family living room, and the boy is enjoying a quiet evening at home.`,
          },
          {
            label: 'B',
            topic: 'people having a meal',
            image: '/images/pet/speaking/schools1-1/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a family of four having a meal together at home.
The mother is sitting in the middle and smiling, and the father on the right is talking to one of the two girls.
On the table there are two big pans with soup and a red sauce, and there's also fresh bread, some small pumpkins and a glass of water.
The room looks bright because of the big windows, and I can see some flowers near the window.
It looks like a home-cooked lunch, and everybody seems happy and relaxed.
I think they're enjoying a weekend meal together, because on weekdays families are often too busy to eat slowly like this.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A class is going on a day trip walking in the mountains with their teacher.',
        instruction: 'Here are some things they could take with them. Talk together about the different things they could take with them and say which would be most useful.',
        image: '/images/pet/speaking/schools1-1/task.png',
        options: ['地图', '带绒球的毛线帽', '雨伞', '瓶装水', '照相机', '巧克力', '足球'],
        modelDialogue: `A: A class is going on a day trip walking in the mountains, and they need to choose the most useful thing to take with them. What do you think of these ideas?
B: Well, the football would be fun after the walk, but you can't play football while you're walking uphill, so it isn't really useful.
A: I agree. The camera would take lovely photos of the mountains, but it doesn't help you during the walk. The chocolate is a better idea, though — it gives you quick energy when you feel tired.
B: That's true. The woolly hat is warm, but it can be too hot on a sunny day, and the umbrella is heavy and awkward to carry on a long walk.
A: Yes. The map is very useful because you can't get lost with it, but the teacher probably already has one.
B: Good point! So I think the bottle of water is the most useful thing, because walking all day in the mountains makes you really thirsty, and you can't buy water there.
A: I agree. You can't walk safely without drinking. Let's choose the bottle of water.`,
        tips: ['逐个讨论七样物品，不要只说一件', '从“是否必需、是否轻便、是否适合山地徒步”比较', '用 Well / I agree / Good point! 回应同伴', '扣题：选出对全班日间山地徒步最有用的物品', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题与两位考生展开讨论。',
        questions: [
          {
            q: 'Do you like walking in the countryside? (Why? / Why not?)',
            modelAnswer: "Yes, I do, because the air is fresh and it's quiet, so walking there helps me relax after a busy week. Last spring I walked through the fields near my grandparents' village, and we saw birds and a small river.",
          },
          {
            q: 'Do you walk to school? (Why? / Why not?)',
            modelAnswer: "Yes, I walk to school every day, because my home is only fifteen minutes away and walking is free exercise. I also meet my friends on the way, so it's a nice start to the day.",
          },
          {
            q: 'When was the last time you went for a really long walk? (Where did you go?)',
            modelAnswer: "It was last month, when my family walked around a big lake near my city. It took us almost three hours, but we stopped for a picnic halfway, so it didn't feel too tiring.",
          },
          {
            q: 'Which outdoor activity do you enjoy doing most? (Why?)',
            modelAnswer: "I enjoy cycling most, because you can go much further than on foot and you can feel the wind, which is exciting. My friends and I often ride along the river path and stop at a small shop for cold drinks.",
          },
          {
            q: 'Is it important for young people to spend time outdoors? (Why? / Why not?)',
            modelAnswer: "Yes, I think it's really important, because fresh air and exercise keep both the body and the mind healthy. For example, after playing football outside I always sleep better and find it easier to focus on my homework.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-14-speaking',
      title: 'PET 青少版官方真题 1 · Test 2 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 1（新题型）',
      paper: 'Speaking',
      pages: '84–87',
      source: 'B1 PET青少版官方真题 新题型 1.pdf（PDF p.85–88）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Zhang Tao, but you can call me Tony.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old. My birthday is in March, so I'm one of the oldest students in my class.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: "I live in a small town near Nanjing. It's quiet and green, and there's a lake just five minutes from my home.",
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my elder brother. He studies at university now, but he comes home at weekends.',
          },
        ],
        phase2: [
          {
            q: 'Tell us about sports you like.',
            modelAnswer: "I like table tennis and swimming. I play table tennis with my classmates twice a week because it's fast and exciting, and in summer I swim in the pool near my home to cool down.",
          },
          {
            q: 'What type of music do you like listening to?',
            modelAnswer: "I mostly listen to pop music, because the songs are cheerful and easy to sing along to. When a new song by my favourite singer comes out, my friends and I listen to it together after class.",
          },
          {
            q: 'Tell us what you do in the school holidays.',
            modelAnswer: "In the school holidays I usually visit my grandparents in the countryside and help them in the garden. I also go cycling with my friends and read books, so I never feel bored.",
          },
          {
            q: 'What new hobby would you like to try? (Why?)',
            modelAnswer: "I'd like to try photography, because I love taking pictures of beautiful places when I travel. Last summer I took a photo of a sunset with my mum's phone and it looked amazing, so I'd like to learn to do it properly.",
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
            topic: 'people on bicycles',
            image: '/images/pet/speaking/schools1-2/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see some people riding mountain bikes on a rocky path in a forest.
The man in front is wearing a red jacket, black shorts and a helmet, and he's carrying a red rucksack.
Behind him another cyclist is coming down the hill, and I can just see someone else standing among the tall trees.
The path looks quite difficult because it's full of stones and tree roots, so the riders have to be careful.
There's green grass on the hillside and the forest looks thick and wild.
I think mountain biking is an exciting but hard sport, and these people look well prepared for it.`,
          },
          {
            label: 'B',
            topic: 'people playing music',
            image: '/images/pet/speaking/schools1-2/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see some young people playing music in a music room.
The girl in the foreground is playing an electric guitar and wearing big headphones, and she looks very serious about her music.
Next to her a boy with glasses is playing an acoustic guitar, and on the left another boy is sitting at an electronic keyboard.
In the background there are computers and screens, so maybe they're recording a song or practising for a concert.
Everybody is wearing headphones, so they can hear the music clearly without making too much noise.
I think they're a small school band, and they seem to really enjoy playing together.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A girl is going to write an article for her school magazine about the history of her local area. She wants to find out more about it.',
        instruction: 'Here are some ways she could find out about the history of her local area. Talk together about the different ways she could find out about the history of the local area and say which would be best.',
        image: '/images/pet/speaking/schools1-2/task.png',
        options: ['在雕像前看说明牌', '采访老人听过去的故事', '用笔记本电脑上网查资料', '参加导游带领的参观', '参观博物馆看展品', '查阅旧报纸杂志'],
        modelDialogue: `A: A girl wants to find out about the history of her local area for a school article. What do you think of these ideas?
B: Well, reading old newspapers and magazines is useful, because they have true stories from the past, but it takes a long time to find the right information.
A: That's true. Looking at the statue and reading the plaque is quick and free, but it probably only tells one small part of the story.
B: I agree. Interviewing old people is a lovely idea, though — my grandmother remembers things about our town that you can't find in any book.
A: Good point! Using the internet is the fastest way, and she can do it at home, but some information online isn't correct.
B: Yes. The museum is interesting because the objects are real, and on the guided tour the guide can answer her questions directly.
A: So which is best? I think interviewing older people, because her article will include special stories that nobody else has.
B: I agree. Let's choose talking to people who remember the past.`,
        tips: ['逐个讨论六种了解当地历史的途径', '从“信息是否可靠、是否省时、内容是否独特”比较', "用 That's true / Good point! 互动回应", '扣题：为校刊文章收集当地历史资料', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题与两位考生展开讨论。',
        questions: [
          {
            q: 'Do you like learning about history at school? (Why? / Why not?)',
            modelAnswer: "Yes, I do, because history is full of interesting stories about real people. For example, we recently learned how people lived in our city a hundred years ago, and I was amazed at how different everything was.",
          },
          {
            q: 'Have you been on a school trip to a museum? (What did you see?)',
            modelAnswer: "Yes, I went to a history museum with my class last autumn. We saw ancient coins, old maps and some pottery that was found near our town, and a guide explained how people made the pots by hand.",
          },
          {
            q: 'Do you enjoy watching films about the past? (Why? / Why not?)',
            modelAnswer: "Yes, I enjoy them, because they make history feel real and exciting. After I watched a film about an old king last month, I understood that period much better than from just reading the textbook.",
          },
          {
            q: 'Is it interesting to visit historical buildings like castles? (Why? / Why not?)',
            modelAnswer: "Yes, I think it's very interesting, because you can walk where people walked hundreds of years ago. When I visited an old city wall, I could almost imagine the soldiers standing there, which you can't feel from photos.",
          },
          {
            q: "Do you think it's important for young people to learn about the past? (Why? / Why not?)",
            modelAnswer: "Yes, I do, because understanding the past helps us understand the world today. For example, if young people know how their town developed, they will care more about protecting its old buildings.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-15-speaking',
      title: 'PET 青少版官方真题 1 · Test 3 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 1（新题型）',
      paper: 'Speaking',
      pages: '88–91',
      source: 'B1 PET青少版官方真题 新题型 1.pdf（PDF p.89–92）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Liu Yang, but my English name is Eric.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fourteen years old, and I'm in my second year of junior high school.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: "I live in Xi'an, an old city in the north-west of China. It's famous for its city wall and its food, and I really like living there.",
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my little sister. Our flat is near my school, so I can walk there in ten minutes.',
          },
        ],
        phase2: [
          {
            q: 'Which do you like best, the morning or the afternoon? (Why?)',
            modelAnswer: "I like the morning best, because I feel full of energy after breakfast and I can study well before school. At the weekend I also go running early with my dad, and the streets are still quiet.",
          },
          {
            q: 'Tell us about sports you like.',
            modelAnswer: "I enjoy badminton and cycling. I play badminton with my cousin every Saturday because it's fast and you improve quickly, and I cycle to school every day, which keeps me fit without taking extra time.",
          },
          {
            q: 'What type of music do you like listening to?',
            modelAnswer: "I like listening to pop music most, because the songs have good energy and help me wake up in the morning. I've also started learning the words of English songs, and that has improved my pronunciation.",
          },
          {
            q: 'Tell us what you do in the school holidays.',
            modelAnswer: "In the holidays I usually spend a week at my grandparents' farm and help feed the chickens. I also meet my friends in the park and finish a couple of books, so the holidays pass really quickly.",
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
            topic: 'people with horses',
            image: '/images/pet/speaking/schools1-3/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see two girls with horses on a grassy path in the countryside.
The girl on the right is wearing a blue jacket, and she's leading a big horse towards the camera.
On the left, the other girl is standing next to a brown horse near a wooden fence.
In the background there are tall trees, white flowers and a small red house, so it looks like a farm in the countryside.
The sky is a little cloudy, but it doesn't look cold.
I think the girls help look after the horses, and they're taking them for a walk along the path.`,
          },
          {
            label: 'B',
            topic: 'people playing chess',
            image: '/images/pet/speaking/schools1-3/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see some people playing chess at a long table.
In the foreground there's a chess board, and a boy with glasses and a checked shirt is thinking hard about his next move.
On the right, another boy in a white T-shirt is watching the game carefully.
There are papers, pencils and a glass of water on the table, and I can see another chess board behind them.
It looks like a chess club or a competition, because several games are happening at the same time.
The players all look quiet and serious, so maybe they're trying to win a prize.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'Two students are going to do a school project about fashion and they need to get some information for their project.',
        instruction: 'Here are some ways they could get information. Talk together about the different ways they could get information about fashion and say which would be best.',
        image: '/images/pet/speaking/schools1-3/task.png',
        options: ['用缝纫机自己做衣服', '用笔记本电脑上网查资料', '逛服装店看橱窗', '看时装秀', '阅读时尚杂志', '参观服装展览/博物馆'],
        modelDialogue: `A: Two students need information for a school project about fashion. What do you think of these ideas?
B: Well, making clothes with a sewing machine sounds interesting, but it teaches you how to make things, not much about fashion in general.
A: True. Looking at the shop windows is easy and free, but the clothes there are only what's in the shops right now.
B: I agree. Reading fashion magazines is more useful, because there are lots of photos and interviews with designers.
A: Good point! Watching a fashion show is exciting and you can see the newest styles, but it only lasts one evening and tickets can be expensive.
B: Yes. Using a laptop to search online is fast and free, and you can even watch videos of old fashion shows.
A: So which is best? I think visiting the clothes exhibition, because they can see real historical dresses and take notes for their project.
B: I agree. Let's choose visiting the exhibition.`,
        tips: ['逐个讨论六种获取时尚信息的途径', '从“信息多少、是否免费、是否适合做课题”比较', '用 I agree / Good point! 回应同伴', '扣题：为学校时尚课题收集资料', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题与两位考生展开讨论。',
        questions: [
          {
            q: 'Do you enjoy going shopping for clothes? (Why? / Why not?)',
            modelAnswer: "Not really, because I find it tiring to walk around lots of shops. My mum usually buys most of my clothes, but I enjoy choosing T-shirts myself online, because it's quick and there's more choice.",
          },
          {
            q: 'What do you usually wear at weekends? (Why?)',
            modelAnswer: "I usually wear jeans and a comfortable hoodie, because weekends are for relaxing and playing sport with my friends. If the weather is warm, I just wear shorts and trainers.",
          },
          {
            q: 'Have you ever tried to make your own clothes? (Why? / Why not?)',
            modelAnswer: "No, I haven't, because sewing looks quite difficult and I don't have a machine. However, my grandmother once showed me how to sew a button, and now I can repair my own clothes.",
          },
          {
            q: 'What do people in your country wear for special occasions? (Why?)',
            modelAnswer: "For important festivals, many people wear traditional dresses, which are usually red and gold and look beautiful. In everyday life we wear modern clothes, but on special days traditional clothes make the celebration feel more important.",
          },
          {
            q: 'Do you think what people wear is important? (Why? / Why not?)',
            modelAnswer: "I think it's important, but not the most important thing. Clean, tidy clothes help you make a good impression, for example at an interview, but people should judge you by your character, not only your clothes.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-16-speaking',
      title: 'PET 青少版官方真题 1 · Test 4 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 1（新题型）',
      paper: 'Speaking',
      pages: '92–95',
      source: 'B1 PET青少版官方真题 新题型 1.pdf（PDF p.93–96）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Chen Jia, and my English name is Cindy.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm thirteen. I'll be fourteen in December, just before the New Year.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: 'I live in Qingdao, a city by the sea in the east of China. In summer many people come to visit our beaches.',
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my grandfather. He tells me stories about when he was young, which I really enjoy.',
          },
        ],
        phase2: [
          {
            q: 'Tell us about a teacher you like.',
            modelAnswer: "My favourite teacher is Miss Yang, my English teacher, because her lessons are never boring. She often brings short videos and games into class, and when I made a mistake she just encouraged me to try again.",
          },
          {
            q: 'How often do you use a mobile phone?',
            modelAnswer: "I use my phone several times a day, mainly to check messages from my family and listen to music on the bus. I try not to use it too long, because my eyes get tired and I have homework to do.",
          },
          {
            q: 'Which time of year do you like the most? (Why?)',
            modelAnswer: "I like spring most, because it's warm but not hot and everything starts to grow. My birthday is also in April, and last year my friends and I had a picnic among the flowers to celebrate.",
          },
          {
            q: 'Which do you like best, the morning or the afternoon? (Why?)',
            modelAnswer: "I prefer the morning, because my mind is fresh and I can finish my homework quickly before school. In the afternoon I often feel sleepy after lunch, especially on hot days.",
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
            topic: 'people in a classroom',
            image: '/images/pet/speaking/schools1-4/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a teacher and some students in a bright classroom.
The teacher is wearing a blue shirt and a tie, and he's leaning over a desk to help a student with her work.
The students are sitting close together, writing in their notebooks and looking at their books.
There are big windows behind them, so a lot of light comes into the room.
On the desks I can see notebooks, pens and a red pencil case.
I think they're working on an exercise together, and the teacher is explaining something to the girl on the left.`,
          },
          {
            label: 'B',
            topic: 'people with a model boat',
            image: '/images/pet/speaking/schools1-4/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a man and a boy making a model boat together.
The man is wearing a black and white striped shirt, and the boy is wearing a checked shirt.
They're both smiling and looking at a small sailing boat with a red and white striped sail.
There are little pots of blue and red paint on the table in front of them, so maybe they've just finished painting it.
It looks like they're at home, sitting at a big wooden table.
I think it's a father and his son, and they're enjoying making the model together.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: "A family is going on a long journey by train. They want to do something on the journey so they don't feel bored.",
        instruction: 'Here are some activities they could do on the journey. Talk together about the different activities they could do and say which would be most fun.',
        image: '/images/pet/speaking/schools1-4/task.png',
        options: ['下国际象棋', '戴耳机听音乐', '看窗外风景拍照', '用笔记本电脑看电影', '弹吉他唱歌', '在座位上吃零食'],
        modelDialogue: `A: A family is going on a long train journey and wants something fun to do. What do you think of these activities?
B: Well, watching a film on the laptop is relaxing, but looking at a small screen for hours might make them feel tired.
A: Maybe. Listening to music with headphones is easy, but everyone does it alone — it isn't really a family activity.
B: That's true. Looking out of the window and taking photos of the mountains is nice, but the view changes quickly and then they might get bored.
A: I agree. Eating snacks is fun too, but it's over quickly. Playing chess is better, because the whole family can play together for a long time.
B: Good point! What about playing the guitar and singing? That's fun for everyone, even for people who just listen and clap.
A: Yes, and everyone can join in with their favourite songs. Let's choose playing music and singing together.
B: I agree — that would be the most fun.`,
        tips: ['逐个讨论六种火车上的活动', '从“全家人能否一起参与、是否有趣持久”比较', "用 That's true / Good point! 回应同伴", '扣题：选出一家人觉得最好玩的活动', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题与两位考生展开讨论。',
        questions: [
          {
            q: 'How often do you go on long journeys? (Why? / Why not?)',
            modelAnswer: "I don't go on long journeys very often, maybe two or three times a year, because my family is usually busy with school and work. We normally travel in the summer holidays, when we have more time.",
          },
          {
            q: "What's your favourite way to travel on a long journey? (Why?)",
            modelAnswer: "I like travelling by train best, because you can walk around, watch the scenery and even play games at a little table. On a plane you just sit in one seat for hours, so I find trains more fun.",
          },
          {
            q: 'Where would you most like to travel to in the future? (Why?)',
            modelAnswer: "I'd most like to travel to Yunnan in the future, because I've seen photos of its high mountains and old towns and they look amazing. I'd also love to try all the different food there.",
          },
          {
            q: "What's the best place you've visited in your country? (Why?)",
            modelAnswer: "The best place I've visited is Beijing, because there's so much history there. When I stood on the Great Wall, I couldn't believe how long it was, and it was even better than in the photos.",
          },
          {
            q: 'Is it better to have a holiday in your own country or to go abroad? (Why?)',
            modelAnswer: "I think both are good, but a holiday in my own country is easier, because I don't need a passport and I understand the language. However, going abroad is exciting because you can experience a completely different culture.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-17-speaking',
      title: 'PET 青少版官方真题 2 · Test 1 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 2（新题型）',
      book: 'B1 Preliminary for Schools 2',
      paper: 'Speaking',
      pages: '80–83',
      source: '2022-B1 PRELIMINARY FOR SCHOOLS 2.pdf（PDF p.82–85）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Sun Lei, but please call me Sam. It is easier for people to remember.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old. I'm in the same class as my best friend, who is also fifteen.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: 'I live in Wuhan, a big city in the middle of China. It is famous for its universities, and there is a large park just opposite my block.',
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents. I am the only child in the family, but my cousin often comes over at weekends to play chess with me.',
          },
        ],
        phase2: [
          {
            q: 'What subject do you find the easiest at school? (Why?)',
            modelAnswer: "I find geography the easiest, because I love maps and I remember facts well when I connect them to places. For example, I can name all the provinces because I studied them on a map, not just from the book.",
          },
          {
            q: 'What type of animals do you like?',
            modelAnswer: "I like dogs best, because they are friendly and always happy to see you. I walk my neighbour's dog every Sunday, so we get a lot of exercise together.",
          },
          {
            q: 'How often do you take photos? (Why?/Why not?)',
            modelAnswer: "I take photos almost every day, because I enjoy recording little happy moments. Last weekend I took pictures of my grandmother cooking, and we all laughed when we looked at them together.",
          },
          {
            q: 'Where do you like to meet your friends?',
            modelAnswer: "I like meeting my friends at the basketball court near my school, because we can play first and then talk. Afterwards we usually buy cold drinks at the small shop across the road.",
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
            topic: 'friends enjoying time together',
            image: '/images/pet/speaking/schools2-1/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a group of six friends sitting together on the grass in a park.
The girl on the left is wearing a pink jacket, and one of the boys is holding a guitar, so maybe they are making music for their friends.
Some of them are holding books, and they are all talking and smiling at each other.
Behind them there are lots of tall green trees, and they are sitting on a blanket on the ground.
The weather looks warm and sunny.
I think they are having a picnic or just relaxing together after school, because everyone looks very happy and comfortable.`,
          },
          {
            label: 'B',
            topic: 'friends walking',
            image: '/images/pet/speaking/schools2-1/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see four girls walking together along a wide wooden path near the water.
They are all wearing warm winter coats and hats, and each of them is holding a takeaway cup of coffee, so it is probably a cold day.
Behind them I can see boats, tall buildings and some masts, so the place looks like a harbour.
The sun is shining on the water, and the girls are walking side by side talking to each other.
One of them is laughing, so they seem to be having a good time.
I think they are friends enjoying a walk together on a cold but sunny afternoon.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A boy is going to visit England soon for a short holiday. He wants to improve his English quickly before he goes.',
        instruction: 'Here are some ways he could improve his English. Talk together about the different ways he could improve his English before his holiday and say which would be best.',
        image: '/images/pet/speaking/schools2-1/task.png',
        options: ['在家读书', '上英语课', '看英文电影', '听英文歌', '跟家教一起学', '用手机应用学英语'],
        modelDialogue: `A: A boy wants to improve his English quickly before his holiday in England. What do you think of these ideas?
B: Well, reading books at home is useful for vocabulary, but he will not practise speaking, which he will really need on holiday.
A: That's true. Watching films in English is fun, and he can hear how people really talk, though the actors sometimes speak very fast.
B: I agree. Listening to English songs is easy because he can do it anywhere, but songs don't always use everyday language.
A: Good point. Having lessons with a tutor would help a lot, because she can correct his mistakes, but it costs money and he may not have much time.
B: Yes. Using an app on his phone is cheap and he can practise for ten minutes every day, even on the bus.
A: So which is best? I think having lessons, because a teacher can help him quickly with exactly what he needs for the trip.
B: I agree. Let's choose lessons with a tutor.`,
        tips: ['逐个讨论六种提高英语的方法', '从“是否有用、是否有趣、是否快捷省钱”比较', "用 That's true / Good point! 回应同伴", '扣题：出发去英国前的短时间内快速提高', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题与两位考生展开讨论。',
        questions: [
          {
            q: 'Do you enjoy learning English? (Why?/Why not?)',
            modelAnswer: "Yes, I do, because English lets me talk to people from all over the world. For example, last month I made a friend from Australia in an online game, and we could chat easily because we both study English.",
          },
          {
            q: 'How often do you listen to songs in English? (Why?)',
            modelAnswer: "I listen to English songs almost every day, because I play them while I do sport or walk to school. I like copying the words, and without noticing it my pronunciation has become much better.",
          },
          {
            q: 'Does anyone in your family speak English? (Why?/Why not?)',
            modelAnswer: "Yes, my mother speaks English quite well, because she uses it at work with foreign customers. She sometimes helps me practise difficult words at dinner, which is really useful.",
          },
          {
            q: 'Which other languages would you most like to learn in the future? (Why?)',
            modelAnswer: "I'd most like to learn Japanese, because I love Japanese cartoons and I'd like to understand them without reading the subtitles. I also think it would be exciting to visit Japan one day and use the language there.",
          },
          {
            q: 'Is it more important to learn to speak or to learn to write in another language? (Why?/Why not?)',
            modelAnswer: "I think speaking is more important, because when you meet people you must talk with them straight away. Writing matters too, for emails and exams, but most everyday communication happens face to face.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-18-speaking',
      title: 'PET 青少版官方真题 2 · Test 2 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 2（新题型）',
      book: 'B1 Preliminary for Schools 2',
      paper: 'Speaking',
      pages: '84–87',
      source: '2022-B1 PRELIMINARY FOR SCHOOLS 2.pdf（PDF p.86–89）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Guo Yu, and my English name is Grace.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm thirteen years old. I'm one of the youngest students in my class because I started school early.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: 'I live in Kunming in the south-west of China. People call it the Spring City, because the weather is warm all year round.',
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my twin brother. We look the same, but we are very different — he loves sport and I love music.',
          },
        ],
        phase2: [
          {
            q: 'What kind of music do you listen to?',
            modelAnswer: "I mostly listen to quiet piano music, because it helps me relax after school. My favourite pianist is Lang Lang, and I watch his videos and try to copy how he plays.",
          },
          {
            q: 'Do you like shopping? (Why?/Why not?)',
            modelAnswer: "Yes, I do, especially shopping for books, because I love choosing new stories myself. I don't like shopping for clothes so much, because the shops are always crowded at weekends.",
          },
          {
            q: 'Tell us about the kind of films you like.',
            modelAnswer: "I like cartoon films best, because the pictures are beautiful and the stories are often funny. My favourite one is about a panda who learns kung fu, and I've watched it three times already.",
          },
          {
            q: 'Do you enjoy playing games on phones and computers?',
            modelAnswer: "Yes, but only for about half an hour a day. I enjoy puzzle games because they make me think, and I always finish my homework first, so my parents don't mind.",
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
            topic: 'people playing music',
            image: '/images/pet/speaking/schools2-2/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see four young people playing music together in a big room.
The girl in the front is playing an acoustic guitar and looking down at the strings.
On the right, another girl is playing an electric guitar, and in the middle a boy is sitting at a piano, with one more student standing behind him.
The room looks like a school hall or music room, because the walls are dark and there are chairs and music stands around.
There is some sheet music on the piano.
I think they are a small school band and they're practising for a concert, because they all look very serious.`,
          },
          {
            label: 'B',
            topic: 'someone cooking',
            image: '/images/pet/speaking/schools2-2/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a teenage boy cooking at a big white counter.
He is wearing a blue T-shirt, and he is using a spatula to turn small burgers on a hot black pan.
On the counter there are eggs in a box, some cheese, vegetables and little dishes with different sauces, so maybe he is preparing a big meal.
Behind him there is a wooden table with bags and boxes, and I can see a tall green plant on the right.
The room looks bright and friendly, with lots of things on the shelves.
I think he is learning to cook at home, and he looks confident and happy about it.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A new library is going to open in a town.',
        instruction: 'Here are some things the library could have. Talk together about the different things the library could have and say which would be most popular with teenagers.',
        image: '/images/pet/speaking/schools2-2/task.png',
        options: ['乒乓球桌和棋类游戏区', '电脑区', '带遮阳伞的咖啡座', '零食小卖部', '文具/小商品柜台', '放映室'],
        modelDialogue: `A: A new library is opening, and they want the most popular thing for teenagers. What do you think of these ideas?
B: Well, the table tennis table and the chess games would be really popular, because teenagers love competing with their friends after school.
A: Good point. The computer area is useful for homework, but most teenagers already have a computer or a phone at home.
B: That's true. A café with umbrellas would be a nice place to sit and chat, though drinks there can be quite expensive.
A: Yes. The snack shop is popular too, but it's more about food than the library itself. The stationery counter is useful but not exciting.
B: I agree. What about the screening room? Teenagers could watch films together, and it would make the library feel modern.
A: Hmm, but a screening room is quiet and you sit still. I still think the table tennis and games area is best, because it's active and free for everyone.
B: I agree. Let's choose the games area with the table tennis table.`,
        tips: ['逐个讨论图书馆可以有的六样设施', '从“青少年是否喜欢、是否免费、是否适合图书馆”比较', "用 That's true / Good point! 回应同伴", '扣题：选出对青少年最有吸引力的一项', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题与两位考生展开讨论。',
        questions: [
          {
            q: 'How often do you go to a library? (Why?)',
            modelAnswer: "I go to the library about twice a month, usually at weekends. I like it because it's completely quiet there, so I can finish my homework much faster than at home, where my brother watches TV.",
          },
          {
            q: 'What kind of things do you enjoy reading? (Why?)',
            modelAnswer: "I enjoy adventure stories, because something exciting happens in every chapter and I can't stop reading. I also like magazines about animals, since the photos are amazing and I learn new facts all the time.",
          },
          {
            q: 'Do you prefer to read about something or watch a TV programme about it? (Why?)',
            modelAnswer: "I prefer reading, because I can stop and think about any page or read it again, and I imagine everything myself. TV is easier, but it gives you the pictures, so your own imagination doesn't work.",
          },
          {
            q: 'Have you ever read a book in English? (Why?/Why not?)',
            modelAnswer: "Yes, I read a short story about a detective last term. Some words were difficult, so I wrote them in my notebook, but finishing a whole English book made me feel really proud of myself.",
          },
          {
            q: "Do you think it's important for every town to have a library? (Why?/Why not?)",
            modelAnswer: "Yes, I do, because not every family can buy lots of books, and a library lets everybody read for free. It also gives young people a quiet, safe place to study after school, which is important for the whole town.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-19-speaking',
      title: 'PET 青少版官方真题 2 · Test 3 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 2（新题型）',
      book: 'B1 Preliminary for Schools 2',
      paper: 'Speaking',
      pages: '88–91',
      source: '2022-B1 PRELIMINARY FOR SCHOOLS 2.pdf（PDF p.90–93）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Chen Hao, and everyone at school calls me Leo.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fourteen. My birthday is in March, so I'm usually one of the older students in my class.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: "I live in Chengdu. It's a big city in the south-west of China, and it's famous for its pandas.",
          },
          {
            q: 'Who do you live with?',
            modelAnswer: "I live with my parents and my little sister. She's only six, so I often help her with her reading.",
          },
        ],
        phase2: [
          {
            q: 'What subject do you find the easiest at school? (Why?)',
            modelAnswer: "I find history the easiest, because I love stories about the past and I remember dates well. Our teacher tells everything like a story, so the lessons never feel difficult.",
          },
          {
            q: 'What kind of music do you listen to?',
            modelAnswer: "I listen to pop music most of the time, because the songs are cheerful and easy to sing. My friends and I often sing the same songs on the bus to school.",
          },
          {
            q: 'Tell us about the kind of films you like.',
            modelAnswer: "I like funny films best, because they help me relax after a long week. I watched a comedy about a football team last weekend, and I laughed from the beginning to the end.",
          },
          {
            q: 'Do you enjoy playing games on phones and computers?',
            modelAnswer: "Yes, I do, especially at weekends. I like racing games because they're exciting, but I stop after an hour so I still have time for homework.",
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
            topic: 'people watching television',
            image: '/images/pet/speaking/schools2-3/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a group of people watching television in a living room.
Some of them are sitting on the sofa and the others are in armchairs, and they are all looking at the TV on the right.
There is a big bookshelf on the left with lots of books, and a small table in the middle of the room.
Behind them there are large windows with curtains, and there is a patterned rug on the floor.
The room looks warm and comfortable, like a real family home.
I think they are watching a film or a match together in the evening, because everyone is looking in the same direction.`,
          },
          {
            label: 'B',
            topic: 'people taking a photo',
            image: '/images/pet/speaking/schools2-3/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see five people taking a photo of themselves on a beach.
A man in the front is holding up a phone to take the picture, and everyone is smiling at it.
They are standing close together on pebbles next to the water, and behind them there are hills and tall green trees.
The sky looks grey, and they are all wearing jackets, so it is probably a cool day.
One woman has her hand on her hip, and the whole group looks happy and relaxed.
I think they are friends or a family on a trip, taking a selfie to remember the beautiful place.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A girl wants to go somewhere to celebrate her birthday. She wants to invite all the students in her class.',
        instruction: "Here are some places they could celebrate together. Talk together about the different places to celebrate the girl's birthday and say which would be best for a large group of people.",
        image: '/images/pet/speaking/schools2-3/task.png',
        options: ['挂气球彩旗的派对厅', '海滩烧烤', '室内游泳池', '餐厅长桌宴', '公园野餐'],
        modelDialogue: `A: A girl wants to celebrate her birthday with all the students in her class. What do you think of these places?
B: The party room with balloons looks fun, and it's indoors, so rain wouldn't be a problem. But it might be too small for such a large group.
A: Good point. A barbecue on the beach would be exciting, though it depends on the weather, and cooking for the whole class would take a long time.
B: That's true. What about the swimming pool? It's great fun in summer, but some students can't swim, and it's hard to talk and eat there.
A: Yes. The restaurant with long tables could seat everyone and the food is ready, but it would be very expensive for a class of thirty.
B: I agree. A picnic in the park is free, there is lots of space for games, and everyone can bring their own food.
A: So which is best for a large group? I think the park, because the whole class can fit and play together.
B: I agree. Let's choose the picnic in the park.`,
        tips: ['逐个讨论五个庆祝地点', '从“空间大小、花费、天气、是否有趣”比较', "用 That's true / Good point! 回应同伴", '扣题：全班同学都能参加的大团体', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题与两位考生展开讨论。',
        questions: [
          {
            q: 'Did you celebrate your last birthday with your friends? (Why?/Why not?)',
            modelAnswer: "Yes, I did. I invited four friends to a pizza restaurant, because I wanted to do something special. We ate, laughed and took photos, and it was one of my best birthdays.",
          },
          {
            q: 'Have you been to a party recently? (Why?)',
            modelAnswer: "Yes, I went to my classmate's party two weeks ago, because it was her birthday. There was music, cake and games, and I got to know some students I had never talked to before.",
          },
          {
            q: 'What do you enjoy most when you go to a party? (Why?)',
            modelAnswer: "I enjoy the games most, because they help everyone relax and talk to each other. When we play games together, nobody sits alone, so the party feels really friendly.",
          },
          {
            q: 'Which is your favourite day of the year? (Why?)',
            modelAnswer: "My favourite day is Chinese New Year, because the whole family gets together. We eat dumplings, watch the fireworks, and I see my cousins, who live in another city.",
          },
          {
            q: "Do you think it's important to have special days to celebrate during the year? (Why?/Why not?)",
            modelAnswer: "Yes, I do, because special days give us something to look forward to. School is busy, so celebrating together helps everyone relax and feel closer to their friends and family.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'pet-mock-20-speaking',
      title: 'PET 青少版官方真题 2 · Test 4 · Speaking',
      level: 'PET',
      collection: 'PET 青少版官方真题 2（新题型）',
      book: 'B1 Preliminary for Schools 2',
      paper: 'Speaking',
      pages: '92–95',
      source: '2022-B1 PRELIMINARY FOR SCHOOLS 2.pdf（PDF p.94–97）',
      answerSource: '原创教学参考答案',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 个人问答',
        duration: '2–3 分钟',
        instruction: '考官先问两位考生相同的问题（第一阶段），再从问题清单中选问个性化问题（第二阶段）。',
        phase1: [
          {
            q: "What's your name?",
            modelAnswer: 'My name is Lin Yue, and my English name is Amy.',
          },
          {
            q: 'How old are you?',
            modelAnswer: "I'm fifteen years old. I'll be sixteen soon, because my birthday is in November.",
          },
          {
            q: 'Where do you live?',
            modelAnswer: 'I live in Hangzhou, a green city with a beautiful lake. Lots of tourists visit it every year.',
          },
          {
            q: 'Who do you live with?',
            modelAnswer: 'I live with my parents and my grandmother. She cooks dinner for us every day, and her food is delicious.',
          },
        ],
        phase2: [
          {
            q: 'What type of animals do you like?',
            modelAnswer: "I like cats, because they're quiet and easy to look after. My aunt's cat sleeps on my knees when I visit her, and it always makes me smile.",
          },
          {
            q: 'Do you like shopping? (Why?/Why not?)',
            modelAnswer: "Not really, because the shops near my home are always crowded and I get tired of walking around. But I do enjoy buying presents for my friends' birthdays.",
          },
          {
            q: 'How often do you take photos? (Why?/Why not?)',
            modelAnswer: "I only take photos on special days, like trips or birthdays. I prefer to enjoy the moment with my own eyes instead of looking at everything through a phone.",
          },
          {
            q: 'Where do you like to meet your friends?',
            modelAnswer: "I like meeting my friends at the park near my home, because we can play badminton there for free. When the weather is bad, we meet at each other's homes instead.",
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
            topic: 'people in an art class',
            image: '/images/pet/speaking/schools2-4/photo-a.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a group of students in an art class.
They are sitting around a long table, and most of them are wearing aprons over their clothes.
There is a red bucket on the table, and some students are making things with their hands, maybe models or sculptures.
A teacher in an apron is standing behind the table and helping them.
Above the table there are colourful things hanging from the ceiling, like masks or paper animals.
Everyone looks busy and interested, so I think they are enjoying a practical art lesson at school.`,
          },
          {
            label: 'B',
            topic: 'someone talking on the phone',
            image: '/images/pet/speaking/schools2-4/photo-b.png',
            points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
            modelAnswer: `In this photograph, I can see a young man talking on the phone in a city street.
He is wearing glasses and a dark shirt, and he has a bag on his shoulder.
He is holding the phone to his ear with one hand, and he is smiling, so maybe he is talking to a friend or a family member.
Behind him there are shops with bright signs, and some people are walking past, though they look blurry.
The street looks busy, like the centre of a big city.
I think he has just stopped for a moment to make an important but happy phone call.`,
          },
        ],
      },
      3: {
        title: 'Part 3 · 协作讨论',
        duration: '2–3 分钟',
        situation: 'A sports club is going to have a volleyball competition. The sports club wants to give the winning team a prize.',
        instruction: 'Here are some different prizes the sports club could give. Talk together about the different prizes and say which the winning team would like best.',
        image: '/images/pet/speaking/schools2-4/task.png',
        options: ['奖杯', '运动T恤和衣服', '现金', '猴子玩偶', '巧克力礼盒', '运动水壶', '花束'],
        modelDialogue: `A: A sports club wants to give the winning volleyball team a prize. What do you think of these prizes?
B: A trophy is the classic prize, and the team can keep it and show everyone. But it doesn't really belong to one single person.
A: Good point. A T-shirt and sports clothes are useful, though most players already have sports clothes at home.
B: That's true. Money is exciting, but for a school competition it might be too much, and it isn't something to remember the day by.
A: Yes. A toy monkey is funny, but it's really for little children, not for a winning team.
B: I agree. Chocolates are nice, but everyone eats them in five minutes and then they're gone. Flowers look pretty, but it's the same problem.
A: Water bottles are useful for sport, and they have the club logo, so the team can use them every time they play.
B: So which would they like best? I think the trophy, because it's special and they'll remember winning for years.
A: I agree. Let's choose the trophy.`,
        tips: ['逐个讨论七种奖品', '从“是否有纪念意义、是否实用、是否适合团队”比较', "用 That's true / Good point! 回应同伴", '扣题：获胜的排球队最喜欢的奖品', '最后达成一致并说明理由'],
      },
      4: {
        title: 'Part 4 · 深入讨论',
        duration: '3 分钟',
        instruction: '考官围绕 Part 3 的话题与两位考生展开讨论。',
        questions: [
          {
            q: 'Have you ever played volleyball? (Why?/Why not?)',
            modelAnswer: "Yes, I have. I played volleyball in PE lessons last year, because our school has a court. I wasn't very good at first, but hitting the ball over the net felt great.",
          },
          {
            q: 'Which sports do you enjoy watching on TV? (Why?/Why not?)',
            modelAnswer: "I enjoy watching football, because the matches are exciting and anything can happen until the last minute. My father supports the same team as me, so we watch together.",
          },
          {
            q: 'Is there a new sport you would like to try? (Why?/Why not?)',
            modelAnswer: "Yes, I'd like to try rock climbing, because it looks exciting and it's a good test of both body and mind. A new climbing centre opened near my home last month.",
          },
          {
            q: 'What do you think is the best way to keep fit? (Why?)',
            modelAnswer: "I think the best way is to do a sport you really enjoy, because then you keep doing it. I go cycling with my friends at weekends, and it never feels like exercise.",
          },
          {
            q: 'Is it important for school students to do sport every day? (Why?/Why not?)',
            modelAnswer: "I think some sport every day is important, because it helps students concentrate in class and sleep better. Even twenty minutes of running at break time can make a difference.",
          },
        ],
      },
    },
  },
  // __SCHOOLS1_APPEND__
]
