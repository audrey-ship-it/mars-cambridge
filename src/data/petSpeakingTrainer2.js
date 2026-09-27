// B1 Preliminary for Schools Trainer 2 (2024) · Trainer 2 口语
// 来源: PET Trainer2/PET Trainer2 电子版.pdf（书内 Teacher's Notes & Keys / Practice Test Keys 核对）
// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）
// PET Trainer 2 Test 1 Speaking 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 1 Exam Practice · 书页 44–51（PDF p045–p052），仅转录 Exam Practice 帧：
//   Part 1 书页 45（PDF p046）、Part 2 书页 47（PDF p048）、Part 3 书页 49（PDF p050）、Part 4 书页 51（PDF p052）
// 视觉材料：Part 2 照片 A 在彩页 C1（PDF p232，家庭在花园里干活）、照片 B 在彩页 C2（PDF p233，一家人打扫房间）；
//   Part 3 图集在彩页 C11（PDF p242，四周 7 处地点 + 中央朋友们上巴士图）。
// 考官脚本与问题照录书内 Exam Practice 帧；modelAnswer 为原创 B1 教学参考答案
// （遵循"直接回答 + 理由 + 例子/细节"的层级要求），非官方答案。

const TRAINER2_TEST_1_SPEAKING = {
  meta: {
    id: 'pet-trainer2-1-speaking',
    title: 'PET Trainer 2 · Test 1 Speaking',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Speaking',
    pages: '书页 44–51（照片见彩页 C1/C2，Part 3 图集见 C11）',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先问候并核对姓名、年龄与住址（Phase 1：Good morning / afternoon / evening. Can I have your mark sheets, please?），再从清单中选问若干个性化问题（Phase 2）。',
      phase1: [
        { q: "What's your name? How old are you?", modelAnswer: "My name is Li Hua, and I'm fourteen years old." },
        { q: "And what's your name? How old are you?", modelAnswer: "I'm Wang Mei, and I'm fifteen. It's my birthday next month, so I'll be sixteen then." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in the north of the city with my family. It's about twenty minutes from school by bus." },
      ],
      phase2: [
        { q: 'How long do you spend on a mobile phone every day?', modelAnswer: 'About an hour a day, usually after dinner. I chat with my friends and watch short videos, but I try not to use it when I am doing my homework.' },
        { q: 'Tell us about your best friend.', modelAnswer: "My best friend is called Chen Jie. We have known each other since primary school, and we both love basketball, so we play together almost every weekend." },
        { q: 'Where would you most like to visit in the world? (Why?)', modelAnswer: "I'd most like to visit New Zealand, because the scenery there looks amazing in films, and I'd love to see the mountains and the sea at the same time." },
        { q: 'Do you like playing team sports? (Why? / Why not?)', modelAnswer: "Yes, I do. Team sports are more fun than playing alone because you can encourage each other, and you make new friends more easily." },
        { q: 'What did you do in your last school holidays?', modelAnswer: "I visited my grandparents in the countryside for a week. We went fishing, picked vegetables in their garden, and I helped my grandma make dumplings." },
        { q: 'Tell us about the town where you live.', modelAnswer: "My town is quite big and busy. There's a nice park in the centre, a shopping street and a modern library, and people there are very friendly." },
        { q: 'What do you enjoy learning about at school? (Why?)', modelAnswer: 'I enjoy learning about science, especially experiments. It is exciting to see how things work, and our teacher lets us try experiments ourselves in pairs.' },
        { q: 'How often do you listen to music?', modelAnswer: "I listen to music every day, mostly on the bus to school. It helps me relax, and I like learning the words of English songs." },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '3–5 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟。书内考官脚本：A 的照片 "It shows some people working in their garden."，B 的照片 "It shows some people cleaning their home."。备用提示（Back-up prompts）：Talk about the person/people. / Talk about the place. / Talk about other things in the photograph.',
      photos: [
        {
          label: 'A',
          topic: 'some people working in their garden',
          image: '/images/pet/speaking/trainer2/test-1/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a family of four working in their garden.
Two children are kneeling near a low fence and looking at some green vegetables, and behind them a woman and a man are planting or checking the plants. The man is wearing a watch, so I think he is the father.
They are in a small garden next to a fence, and there are trees and flowers all around them.
Everyone looks relaxed and happy, so they probably enjoy spending time together outdoors.`,
        },
        {
          label: 'B',
          topic: 'some people cleaning their home',
          image: '/images/pet/speaking/trainer2/test-1/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a father and his two children cleaning their living room.
The father is standing in the middle holding a mop, and the boy next to him is holding a broom and laughing. On the left, a girl is kneeling on the floor and cleaning a wooden cabinet with a cloth.
The room looks like an attic because the ceiling slopes, and there is a grey sofa, some plants and a rug on the floor.
They all seem to be having fun while they do the housework together.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '4–5 分钟',
      situation: 'A group of friends want to visit an interesting place together this weekend.',
      instruction: "Here are some places they could visit. Talk together about the different places the friends could visit and say which would be best. （考官引入：Now, in this part of the test you're going to talk about something together for about two minutes. I'm going to describe a situation to you. … All right? Now talk together.）",
      image: '/images/pet/speaking/trainer2/test-1/task.png',
      options: ['逛历史老街', '参观城堡', '沿湖边散步', '去海滩玩', '参观美术馆', '参观铁路博物馆', '逛室内市场'],
      modelDialogue: `A: The friends can only choose one place for this weekend, so we need to decide which is best. Shall we start with the old street?
B: Good idea. Walking around an old street is interesting, and there are lots of things to see, but they might get bored after an hour or two.
A: That's true. What about the castle? If they like history, they can spend the whole morning there and take great photos.
B: I agree, but tickets can be expensive. The lake might be better because walking by the water is relaxing, and it's free.
A: Maybe, but if the weather is bad, walking by the lake won't be much fun. An art gallery is indoors, so weather isn't a problem.
B: Good point, although not everyone enjoys paintings. The railway museum could be more exciting – they can see old trains, and there's usually something for everybody.
A: Hmm, I think the beach is still the best choice. They can swim, play games and have a picnic together.
B: I'm not so sure – it depends on the weather. Actually, I think the railway museum is best because it's interesting and it doesn't matter if it rains.
A: OK, let's choose that one then.`,
      tips: [
        '先逐个讨论图中地点的优点和缺点，再一起决定最合适的一个',
        "用 How about…? / What about…? 提建议，用 I agree / I'm not so sure / Good point 回应搭档",
        '最后给出一致的选择并说明理由（如天气、价格、大家的兴趣）',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（参观有趣的地方）向两位考生提问，最后以 Thank you. That is the end of the test. 结束。',
      questions: [
        { q: 'Do you prefer to visit places that are indoors or outdoors? (Why?)', modelAnswer: "I prefer outdoor places, like parks or beaches, because I can play games with my friends and get some fresh air. But on rainy days, indoor places like museums are a better choice." },
        { q: "What's an interesting place that you've been to? (Why was it interesting?)", modelAnswer: "I once visited a science museum in Beijing. It was interesting because there were hands-on exhibits, and I could try experiments myself instead of just reading information on the walls." },
        { q: 'How do you prefer travelling to new places? (Why?)', modelAnswer: "I prefer travelling by train because it's fast and comfortable, and I can watch the scenery through the window. It's also easier than driving, so everyone in my family can relax." },
        { q: 'What do you think people can learn from visiting new places?', modelAnswer: "I think people can learn a lot. They can find out about other people's lives and traditions, try new food, and become more independent because they have to plan things themselves." },
        { q: 'Do you think younger people and older people like visiting different kinds of places? (Why?)', modelAnswer: "Yes, I do. Younger people usually prefer exciting places like theme parks, while older people often enjoy quiet places, such as gardens or historical sites. But there are places both groups can enjoy together, like the seaside." },
      ],
    },
  },
}

// PET Trainer 2 Test 2 Speaking 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 2 Exam Practice · 书页 87–93（PDF p088–p094，仅录 Exam Practice 帧，Training 页不录）
// Part 2 照片：Exam Practice 照片在彩页 C1（Test 2 Photo A，PDF p232 已核看：电车内年轻人共看杂志）
//   与 C2（Test 2 Photo B，PDF p233 渲染图多次读取失败，范文按考官脚本 topic 撰写，放图后需人工核对）
// Part 3 任务图：彩页 C12（PDF p243 已核看，图中无文字标注，options 为按图推断，见 REVIEW）
// 考官脚本与问题照录书内 Exam Practice 帧；modelAnswer 为原创 B1 教学参考答案
// （遵循"直接回答 + 理由 + 例子/细节"的 B1 层级要求），非官方答案。

const TRAINER2_TEST_2_SPEAKING = {
  meta: {
    id: 'pet-trainer2-2-speaking',
    title: 'PET Trainer 2 · Test 2 Speaking',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Speaking',
    pages: '书页 87–93（Exam Practice；照片见彩页 C1/C2，Part 3 图集见彩页 C12）',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先致问候（Good morning / afternoon / evening），核对每位考生的姓名、年龄与住处（Phase 1），再从 Phase 2 清单中选问若干个性化问题。',
      phase1: [
        { q: "What's your name?", modelAnswer: 'My name is Lin Zihao, but you can call me Henry – that\'s the English name my teacher gave me.' },
        { q: 'How old are you?', modelAnswer: "I'm fourteen years old. My birthday is in July, so I'll be fifteen in the summer." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in the east of Hangzhou with my family. It takes me about fifteen minutes to get to school by bike." },
      ],
      phase2: [
        { q: 'Tell us about a teacher you like.', modelAnswer: "I really like my maths teacher, Mr Fang. He's patient and has a great sense of humour. When we make mistakes, he never gets angry – he explains things again and often tells funny stories about his own school days." },
        { q: 'How often do you practise English?', modelAnswer: 'Every day, I hope! At school we have English lessons four times a week, and in the evening I usually watch a short video in English or listen to songs. At weekends I sometimes chat online with my cousin who lives in Canada.' },
        { q: 'What do you do at the weekends when the weather is bad?', modelAnswer: "When it rains, I usually stay at home. I play board games with my sister, read comics or watch films. Sometimes we bake biscuits together, which is fun, and I do my homework before dinner." },
        { q: 'Which TV programmes do you enjoy watching? (Why?)', modelAnswer: "I enjoy nature documentaries most because the photography is amazing and I learn a lot about animals and different countries. I usually watch them with my dad at the weekend, and we always talk about what we've seen." },
        { q: 'Who would you most like to meet? (Why?)', modelAnswer: "I'd most like to meet the scientist Tu Youyou, because she discovered a medicine that saves millions of lives. I'd love to ask her how she stayed motivated during all those years of research." },
        { q: 'Do you like watching action films? (Why? / Why not?)', modelAnswer: "Yes, I do, especially films with car chases or kung fu, because they're exciting and full of special effects. But I don't like very violent ones, so I usually watch comedies with my family instead." },
        { q: 'How long do you spend on your phone each day?', modelAnswer: 'About an hour on school days. I use it mostly to message my friends and check the news, and my parents make me put it away during homework and after ten o\'clock at night.' },
        { q: 'What are you going to do this evening?', modelAnswer: "First I'll do my homework, and then we're having noodles for dinner – my favourite. After that, I'll probably play table tennis with my dad in the sports hall near our flat." },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '2–3 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。书内考官脚本：A 的照片 "It shows some people travelling on public transport."，B 的照片 "It shows someone helping someone else."',
      photos: [
        {
          label: 'A',
          topic: 'some people travelling on public transport',
          image: '/images/pet/speaking/trainer2/test-2/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see some people travelling on public transport. It looks like the inside of a tram or a train.
In the middle, two young people are sitting next to each other and looking at a magazine together. The young man is wearing a dark hat and a light jumper, and the girl has long hair. They seem relaxed and quite interested in what they are reading.
Behind them, a man in a dark jacket is standing and holding a pole. There are lots of seats and big windows, and the light inside looks quite warm, so maybe it is the evening.
The passengers look calm, so I think it is probably a normal journey home after school or work.`,
        },
        {
          label: 'B',
          topic: 'someone helping someone else',
          image: '/images/pet/speaking/trainer2/test-2/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see two people, and one of them is helping the other.
The younger person is giving the other one a hand – it looks like they are carrying something heavy together, and the younger one is doing most of the work while the other person is showing them where to put it.
I can't see exactly where they are, but it looks like a street or a public place, and there are some other things around them, like bags or boxes.
The person who is helping looks cheerful and doesn't mind doing it, so I think they are probably friends or family members, and it's a kind thing to do.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '2–3 分钟',
      situation: 'A group of students want to improve their second-language skills.',
      instruction: 'Here are some things they could do to practise their second-language skills. Talk together about the different things they could do to improve their second-language skills and say which would be best.',
      image: '/images/pet/speaking/trainer2/test-2/task.png',
      options: ['和同学面对面用外语聊天', '戴耳机在电脑上听歌、看视频', '和同学一起读书学习', '用电脑上语言学习网站', '阅读杂志和课外读物', '去说这门语言的国家旅行', '和家人一起看电视'],
      modelDialogue: `A: The students want to improve their second-language skills, and we need to choose the best way. Shall we start with talking to other students?
B: Good idea. Talking face to face is great practice because you have to listen and answer quickly. But if their classmates speak the same first language, they might just go back to it.
A: That's true. What about listening to songs or watching videos on the computer? It's fun, so they'd probably do it every day.
B: I agree it's useful for listening, but they wouldn't practise speaking at all. Using a language-learning website might be better, because many of them have exercises and even online teachers.
A: Yes, and they can study anytime. Reading books and magazines also helps with vocabulary – and it's easy to carry a book around.
B: Definitely, although it can be a bit boring, and it doesn't help much with pronunciation. Watching TV with the family is more relaxing, and you can hear natural conversations.
A: Hmm, but the best one, in my opinion, is travelling to a country where they speak the language. They'd have to use it all the time – shopping, asking for directions, everything.
B: I couldn't agree more. It's probably the most expensive option, but it's the best way to improve all their skills quickly.
A: OK, so let's say travelling to that country is the best choice.`,
      tips: [
        '先逐个讨论图中每种做法的优点和缺点，再一起选出 best 的一个',
        "用 How about…? / What about…? 提议，用 I agree / That's true, but… 回应搭档",
        '结论必须用最高级（the best / the most useful）并给出理由',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（学习第二语言）向两位考生提问，最后以 Thank you. That is the end of the test. 结束。',
      questions: [
        { q: 'Do you think English is a difficult language to learn? (Why? / Why not?)', modelAnswer: "Some parts are easy and some are difficult. The grammar is quite simple compared with some languages, but the spelling and pronunciation are hard, because words are often not written the way they sound, like 'though' and 'through'." },
        { q: 'Would you like to learn another language? (Why? / Why not?)', modelAnswer: "Yes, I'd love to learn Japanese, because I enjoy anime and I'd like to visit Japan one day. Speaking a bit of the language would make travelling there much more fun and help me make local friends." },
        { q: 'How do you feel when you are able to communicate with other English speakers?', modelAnswer: 'I feel really proud and confident. Last summer I helped a lost tourist near our hotel, and when he understood me and thanked me, I felt fantastic – it showed me that English is a skill I can really use.' },
        { q: 'Why do you think it is important to learn other languages?', modelAnswer: 'Because languages open doors. You can make friends from other countries, watch films and read books in the original version, and later it helps you find a better job, since many companies work with people all over the world.' },
        { q: 'Do you think everyone should learn another language from an early age? (Why? / Why not?)', modelAnswer: "Yes, I do. Young children learn languages much faster than adults, and they aren't shy about making mistakes. If everyone started early, most people would speak two languages well by the time they leave school." },
      ],
    },
  },
}

// PET Trainer 2 Test 3 Speaking 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf（Test 3 Speaking，书页 111 / PDF p112）
// 视觉材料位置：Part 2 照片 A/B 在彩页 C3/C4，Part 3 任务图在彩页 C13（书末彩页，需另行裁剪放图）
// 考官脚本与问题照录书内 Exam Practice 帧；modelAnswer 为原创 B1 教学参考答案
// （遵循"直接回答 + 理由 + 例子/细节"的 B1 层级要求），非官方答案。

const TRAINER2_TEST_3_SPEAKING = {
  meta: {
    id: 'pet-trainer2-3-speaking',
    title: 'PET Trainer 2 · Test 3 Speaking',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Speaking',
    pages: '书页 111（照片见彩页 C3/C4，Part 3 任务图见 C13）',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先问姓名、年龄与住址（Phase 1），再从下列清单中选问若干个性化问题（Phase 2）。开场白：Good morning / afternoon / evening.',
      phase1: [
        { q: "What's your name?", modelAnswer: "My name is Wang Yiming, and my English name is Oscar." },
        { q: 'How old are you?', modelAnswer: "I'm fifteen years old. I'll be sixteen in February." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in a middle-sized town in the south of China with my family. It's about fifteen minutes from my school by bike." },
      ],
      phase2: [
        { q: 'Tell us about the town where you live.', modelAnswer: "My town is quite busy, and there's a big park in the centre where people love to relax at weekends. My favourite place is the old market street because you can try food from all over the country there." },
        { q: 'How often do you listen to music?', modelAnswer: "Every day, usually on the bus to school. I've made different playlists for studying and for sport, and I listen to one of them whenever I put on my headphones." },
        { q: 'Do you like playing video games? (Why? / Why not?)', modelAnswer: "Yes, I do, but only at weekends. I enjoy games where you build things because they're creative and relaxing, and I often play with my cousin online, which makes it more fun." },
        { q: 'What are you going to do on your next holiday?', modelAnswer: "We're going to visit my grandparents in another city. I'm looking forward to it because their home is near the sea, and my grandad always takes me fishing in the mornings." },
        { q: 'Which city would you most like to visit? (Why?)', modelAnswer: "Definitely Xi'an, because it has such a long history. I'd love to see the Terracotta Warriors with my own eyes and try the famous street food there." },
        { q: 'What kind of weather do you like? (Why?)', modelAnswer: "I like cool, sunny weather best. When it's like that, I can play football outside or go cycling without feeling hot, and everything looks bright and cheerful." },
        { q: 'Where do you usually spend time with your friends?', modelAnswer: "Mostly at the sports park near my school. We play basketball there, and afterwards we sometimes buy drinks and sit in the sun chatting." },
        { q: 'Tell us about your favourite hobby.', modelAnswer: "My favourite hobby is photography. I started last year when I joined a course at my local college, and now I take photos of birds and old buildings almost every weekend." },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '3–5 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。书内考官脚本：A 的照片 "It shows some people in an art class."（彩页 C3）；B 的照片 "It shows some people spending time at the beach."（彩页 C4）。',
      photos: [
        {
          label: 'A',
          topic: 'some people in an art class',
          image: '/images/pet/speaking/trainer2/test-3/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see an art class with a teacher and several students.
The teacher, an older woman with fair hair, is wearing a dark apron, and she is showing the class how to model clay with a small tool. The students are standing and sitting around the table, watching her carefully. One girl in a pink top is leaning forward so she can see better.
On the table there are clay sculptures, including two heads, and a pot full of brushes and pencils. Behind them I can see shelves with jars and boxes, so this is probably a school art room.
It looks like everyone is concentrating hard, and the atmosphere seems friendly and creative.`,
        },
        {
          label: 'B',
          topic: 'some people spending time at the beach',
          image: '/images/pet/speaking/trainer2/test-3/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a family spending time on a beach.
A man in a checked shirt is standing on the wet sand, and a little girl in pink boots is walking towards the camera. On the right, a woman in a red top is leaning over a child who is sitting in a special all-terrain wheelchair, so the whole family can enjoy the day together.
Behind them there are grey waves, and the sky looks cloudy, so it seems to be a fresh, windy day.
Even so, everybody looks relaxed and happy to be outdoors.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '4–5 分钟',
      situation: 'Some friends want to go on a trip for the weekend together. They would like to go to a place that everyone will enjoy.',
      instruction: 'Here are some places they could go to. Talk together about the different places they could go to together and say which would be best.',
      image: '/images/pet/speaking/trainer2/test-3/task.png',
      options: ['去海滨度假村放松', '去历史名城观光', '乘船出游', '去海滩玩', '在山区烧烤', '在树林里野餐', '在湖里游泳'],
      modelDialogue: `A: The friends want a place that everyone will enjoy, so let's look at these ideas. How about the seaside resort?
B: That could be great – there's a hotel, so they wouldn't need to camp, and everyone likes walking by the sea. But it might be crowded at weekends.
A: True. What about sightseeing in the historic city? There are famous buildings and museums, and they could learn something too.
B: Good idea, but entrance tickets can be expensive, and some friends might get bored after a few hours.
A: Maybe. A boat trip would be exciting – the views from the water are amazing.
B: I agree, but if the weather turns bad, they'd have to stay inside the boat the whole time.
A: Hmm. The barbecue in the mountains sounds fun – they could cook and eat together in the fresh air.
B: Yes, but they'd need to carry all the equipment, and that's difficult without a car.
A: So perhaps the picnic in the woods is easier – it just needs some blankets and food.
B: Exactly, and playing games on the grass would cost nothing. Though my favourite is swimming in the lake.
A: Mine too! It's free, it's refreshing in summer, and everyone can join in, even the ones who just want to sit by the water.
B: OK, let's choose the lake then – I think that's the place everyone will enjoy most.`,
      tips: [
        '逐个讨论图中的地点：先说优点，再补一个缺点或实际困难（费用、天气、交通）',
        "用 How about…? / What about…? 提建议，用 I agree / Good idea, but… 回应",
        '最后一起选出最适合"每个人都能玩得开心"的地点并给出理由',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（周末出游与度假）与两位考生展开讨论，最后以 Thank you. That is the end of the test. 结束。',
      questions: [
        { q: 'Have you ever been on holiday to another country? (Where did you go?)', modelAnswer: 'Yes, I have. Two years ago we went to Thailand for a week. We visited Bangkok first and then an island, where I tried snorkelling for the first time and saw lots of colourful fish.' },
        { q: 'Where would you most like to go on holiday? (Why?)', modelAnswer: "I'd most like to visit Japan, because I'm fascinated by the mix of modern cities and tradition. I'd ride the fast trains, visit the temples and try real Japanese food." },
        { q: 'What kind of accommodation would you like to stay in? (Why?)', modelAnswer: "I'd prefer a small hotel near the beach. You get help from the staff, and it's more comfortable than a tent, but it's cosier than a huge hotel with hundreds of rooms." },
        { q: "What's a popular place for holidays in your country? (Why do people go there?)", modelAnswer: 'Hainan is very popular. People go there because the beaches are beautiful and the weather is warm all year round, so it is perfect for swimming and water sports.' },
        { q: "Do you think it's important for people to take holidays? (Why? / Why not?)", modelAnswer: "Yes, I really do. Everyone gets tired from work or school, and a holiday helps you rest and come back with more energy. It's also a chance to see new places and make memories with your family." },
        { q: 'What can you learn by visiting other cities or countries?', modelAnswer: 'You can learn how other people live, what they eat and how they speak. Visiting different places also teaches you to try new things and to understand cultures that are different from yours.' },
      ],
    },
  },
}

// B1 Preliminary for Schools Trainer 2 (2024) · Trainer 2 口语
// PET Trainer 2 Test 4 Speaking 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 4 完整套卷 · 书页 129（PDF 页 130），考官脚本与问题照抄书内 Exam Practice 帧
// 照片与图片集：Part 2 照片 A/B 在彩页 C3/C4（书内标注，见下），Part 3 图集在彩页 C14
// image 路径为约定占位（稍后统一从彩页裁剪放图，不要自行生成图片文件）
// modelAnswer / modelDialogue 为原创 B1 教学参考答案（直接回答 + 理由 + 例子/细节），非官方答案。

const TRAINER2_TEST_4_SPEAKING = {
  meta: {
    id: 'pet-trainer2-4-speaking',
    title: 'PET Trainer 2 · Test 4 Speaking',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Speaking',
    pages: '书页 129（照片 A/B 见彩页 C3/C4，Part 3 图集见 C14）',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先问候并核对姓名、年龄与住处（Phase 1），再从下列清单中选问若干个性化问题（Phase 2）。',
      phase1: [
        { q: "What's your name?", modelAnswer: "My name is Chen Xiaoyu, but my English name is Sunny. Most of my friends call me Sunny." },
        { q: 'How old are you?', modelAnswer: "I'm fourteen years old. I'll be fifteen in February, so my birthday is coming soon." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in the north of Chengdu with my parents. It's about fifteen minutes from my school by bike." },
      ],
      phase2: [
        { q: 'What are you going to do next weekend?', modelAnswer: "I'm going to visit my grandparents on Saturday, and on Sunday I'll finish my homework and play basketball with my friends if the weather is nice." },
        { q: 'Tell us about a friend you enjoy spending time with. (Why?)', modelAnswer: "I enjoy spending time with my friend Gao Ming. He's in my class and he's really funny, so we always laugh a lot when we play table tennis or video games together." },
        { q: 'What are your favourite foods?', modelAnswer: "My favourite food is noodles, especially the spicy ones my grandma makes. I also love dumplings – we usually make them together at Spring Festival." },
        { q: 'Do you like rock music? (Why?)', modelAnswer: "Not really. I prefer pop music because the songs are easy to sing along to. Rock is a bit too loud for me, although my older brother loves it." },
        { q: 'What do you usually do in the afternoons after school?', modelAnswer: "I usually have a snack and then do my homework for about an hour. After that, I often ride my bike in the park near my home or chat with my friends online." },
        { q: 'Which do you prefer, staying at home at the weekend or going out? (Why?)', modelAnswer: "It depends on my mood, but I prefer going out because I like meeting my friends and getting some fresh air. If it's raining, I'm happy to stay at home and watch films." },
        { q: 'Tell us about the area where you live.', modelAnswer: "I live in a quiet area with a lot of trees. There's a small park and a sports centre nearby, and a shopping street with some nice restaurants about ten minutes away on foot." },
        { q: "How often do you eat at someone else's house?", modelAnswer: "About once or twice a month. We often go to my aunt's flat for dinner on Fridays, and she cooks the best roast chicken in our family." },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '3–5 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。书内考官脚本：A 的照片 "It shows some people playing a board game."（彩页 C3），B 的照片 "It shows some people studying at the library."（彩页 C4）。',
      photos: [
        {
          label: 'A',
          topic: 'some people playing a board game',
          image: '/images/pet/speaking/trainer2/test-4/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see some people playing a board game together.
They look like a family – a girl, her brother and their parents – and they are sitting around a table in a living room. They are smiling, so they are really enjoying the game.
On the table I can see the board, some cards and small coloured pieces, and there are cups of tea in front of them. Behind them there is a sofa with cushions and a bookshelf full of books, so it looks like a warm and comfortable home.
It seems like a relaxing evening, and everyone looks happy to spend time together.`,
        },
        {
          label: 'B',
          topic: 'some people studying at the library',
          image: '/images/pet/speaking/trainer2/test-4/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see some people studying at the library.
There are two or three teenagers sitting at a big table. The boy in the middle is reading a book and taking notes, and the girl next to him is looking at some papers, so they are probably doing their homework together.
On the table there are textbooks, notebooks and a pencil case, and behind them I can see tall bookshelves full of books and bright windows.
The library looks quiet and bright, and the students seem very concentrated on their work.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '4–5 分钟',
      situation: 'A teacher wants her class to learn more about geography.',
      instruction: 'Here are some ways to learn about geography. Talk together about the different ways of learning geography and say which students would enjoy most. All right? Now, talk together.',
      image: '/images/pet/speaking/trainer2/test-4/task.png',
      options: ['看地球仪', '研究纸质地图', '去自然景区实地考察', '上网查资料', '阅读相关书籍', '听讲座／看数据图表', '看纪录片（电视节目）'],
      modelDialogue: `A: The teacher wants her class to learn more about geography, so let's discuss these ways. Shall we start with the globe?
B: Sure. A globe is great for finding countries and oceans, and you can turn it around with your hands. But it only shows the world, not small local areas.
A: That's true. Paper maps are better for that. Students could plan routes on a map, which is a useful skill, although maps can be difficult to read at first.
B: I agree. What about the internet? In my opinion, it's the easiest way – you can watch videos and find the latest information about any country in seconds.
A: Yes, but looking at screens all day isn't healthy. Field trips to natural places, like that waterfall, would be more exciting. You remember things much better when you see them in real life.
B: Good point, but trips cost money and take time. Reading books is cheaper, and a talk with charts could make facts like temperatures and populations easier to understand.
A: Maybe. For me, though, watching a documentary is the most enjoyable – you see real deserts and animals on the screen, and it feels like travelling.
B: I partly agree, but I still think a field trip is best, because the students would enjoy it most and learn directly from nature.
A: OK, let's choose that one then – we can mention documentaries as a cheaper alternative.`,
      tips: [
        '先逐个讨论图中学习方式的优点和缺点，再一起选出学生最喜欢的',
        "用 How about…? / What about…? 提出新想法，用 I agree / I'm not so sure / Good point 回应",
        '比较时给出理由和例子（成本、有趣程度、能否记住知识），最后达成一致',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（学习地理）与两位考生展开讨论。',
      questions: [
        { q: 'Do you enjoy learning about geography? (What do you most enjoy learning about?)', modelAnswer: "Yes, I do. I most enjoy learning about different countries – their mountains, rivers and climates. It's amazing to see how landscapes change from one place to another." },
        { q: 'What is an interesting natural area in your country? (What is interesting about it?)', modelAnswer: "I think Zhangjiajie is really interesting. The mountains there look like tall stone pillars, and they are often covered in clouds. It's a UNESCO world heritage site, and many films were filmed there." },
        { q: 'Where would you most like to visit in the natural world? (Why would you like to see it?)', modelAnswer: "I'd love to visit the Amazon rainforest because it has thousands of kinds of animals and plants that you can't see anywhere else. I'd like to hear the sounds of the forest at night, too." },
        { q: 'Do you prefer cities or the countryside? (Why?)', modelAnswer: "I prefer the countryside because it's quiet and the air is fresh. In the city everything is convenient, but it's often noisy and crowded, so I like escaping at weekends." },
        { q: 'Why is it important for people to learn about geography?', modelAnswer: "Because it helps us understand the world around us. If you know about climates and natural disasters, you can understand the news better, and it also helps us protect the environment." },
        { q: 'Is it useful to learn facts about other countries? (Why? / Why not?)', modelAnswer: "Yes, it's really useful. It makes travelling easier and more interesting, and if you work with people from other countries, understanding their culture helps you communicate better." },
      ],
    },
  },
}

// PET Trainer 2 Test 5 Speaking 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 2 (2024) · Test 5（完整套卷）
// 考官脚本与问题：书页 147（PDF 页 148），已对照页面渲染图逐条核对
// 照片与图集：Part 2 照片 A/B 在彩页 C5/C6（PDF p236/p237 上半），Part 3 任务图在彩页 C15（PDF p246）
// image 路径为约定占位（稍后统一从彩页裁剪放图，不要据本文件生成图片）
// modelAnswer / modelDialogue 为原创 B1 教学参考答案（直接回答 + 理由 + 例子/细节），非官方答案

const TRAINER2_TEST_5_SPEAKING = {
  meta: {
    id: 'pet-trainer2-5-speaking',
    title: 'PET Trainer 2 · Test 5 Speaking',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Speaking',
    pages: '书页 147（照片见彩页 C5/C6，Part 3 任务图见 C15）',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先问好并核对姓名、年龄、住处（Phase 1），再从下列清单中选问若干个性化问题（Phase 2）。',
      phase1: [
        { q: "What's your name?", modelAnswer: "My name is Li Hua. It's nice to meet you." },
        { q: 'How old are you?', modelAnswer: "I'm fifteen years old. My birthday is in June." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in the north of Chengdu with my parents. It's about twenty minutes from my school by bus." },
      ],
      phase2: [
        { q: 'What did you do yesterday?', modelAnswer: 'Yesterday I went to school as usual, and in the evening I did my homework and helped my mum cook dinner. Later I watched a funny video with my little brother.' },
        { q: 'Tell us about a shop you like going to.', modelAnswer: 'I love going to a big bookshop near our school. It has a huge corner with comics and novels for teenagers, and you can read before you buy. I usually go there with my best friend on Saturday afternoons.' },
        { q: 'Which hobby would you like to try in the future? (Why?)', modelAnswer: "I'd love to try rock climbing because it looks exciting and it's great exercise. My cousin goes every weekend and she says it makes her feel really confident." },
        { q: 'How often do you go for a walk?', modelAnswer: 'I go for a walk nearly every evening after dinner with my dad. We walk around the lake near our home for about half an hour, and it helps me relax before bed.' },
        { q: 'Do you enjoy extreme sports like waterskiing or snowboarding? (Why? / Why not?)', modelAnswer: "Not really, because I'm scared of getting hurt! I prefer safer sports like swimming or cycling, which are still lots of fun." },
        { q: 'Which do you prefer, visiting people or having visitors to your home? (Why?)', modelAnswer: 'I prefer having visitors to my home because I feel more relaxed there. We can show our guests our games, and my mum always bakes something delicious for everyone.' },
        { q: 'Who do you spend most of your day with?', modelAnswer: "I spend most of my day with my classmates because we're at school together from eight in the morning until four. My best friend Lin sits next to me, so we chat all the time." },
        { q: 'Tell us about your English classes.', modelAnswer: 'I have English classes five times a week at school. My teacher often lets us play vocabulary games and act out dialogues, so the lessons are never boring.' },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '3–5 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物），另一名考生听。书内考官脚本：A 的照片 "It shows some people taking a photo of themselves."，B 的照片 "It shows some people shopping for clothes."',
      photos: [
        {
          label: 'A',
          topic: 'some people taking a photo of themselves',
          image: '/images/pet/speaking/trainer2/test-5/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see two people standing on a rocky path in the mountains.
The man in the front is wearing a dark green top and carrying a large black rucksack. He's holding a selfie stick with his arm stretched out, so he's taking a photo of himself and his friend.
Behind him there's a woman with a blue backpack, and she's smiling at the camera. In the background I can see tall trees and a huge mountain, partly covered by clouds.
It looks like a sunny day, and they seem to be enjoying their hike a lot.`,
        },
        {
          label: 'B',
          topic: 'some people shopping for clothes',
          image: '/images/pet/speaking/trainer2/test-5/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see three young people in a clothes shop.
The boy in the middle is wearing a red and black checked shirt, and he's holding a dark jacket, so he's probably deciding whether to buy it. The girl on the left has long red hair and is wearing a grey hoodie, and the girl on the right has very short hair and a denim jacket. She's looking at her phone, maybe to check the price.
Behind them there are racks full of clothes.
They're all smiling and chatting, so shopping together looks like fun.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '4–5 分钟',
      situation: 'A family wants to celebrate a special occasion. They would like to do something special to celebrate the occasion.',
      instruction: 'Here are some things they could do to celebrate. Talk together about the different things they could do to celebrate and say which would be best.',
      image: '/images/pet/speaking/trainer2/test-5/task.png',
      options: ['在家里开派对（挂气球和彩带）', '全家去餐厅吃一顿大餐', '办一个有蛋糕和气球的庆祝会', '一起在家看电影', '乘船出游', '在花园里烧烤', '去公园野餐'],
      modelDialogue: `A: A family wants to celebrate a special occasion, and they can only choose one thing. Shall we start with the party at home?
B: Good idea. Decorating the house with balloons and banners is cheap, and preparing everything together is half the fun.
A: True, but there's so much cooking and cleaning afterwards, which is hard work for the parents. What about having a big meal in a restaurant?
B: That's more relaxing because nobody has to cook, and everyone can order their favourite dish. Still, for a whole family it might be quite expensive.
A: I agree. A picnic in the park would be cheaper, and the children can play games on the grass.
B: Yes, but everything depends on the weather – if it rains, the special day would be spoiled. A barbecue in the garden has the same problem.
A: Hmm, what about a boat trip then? It would be a really special experience that they'd remember for years.
B: Maybe, but someone might feel seasick, and it takes the whole day. A film evening at home is cosier – though honestly, it isn't very special.
A: So in my opinion, the party at home is the best: it's cheap, everybody can join in, and they'll have lovely photos to keep.
B: I agree – let's choose that one.`,
      tips: [
        '先逐个讨论各项活动的优点和缺点，再一起决定最好的一个',
        "用 Shall we start with…? / What about…? 提建议，用 I agree / That's true, but… 回应",
        '最后达成一致，并从花费、天气、家人参与度等角度说明理由',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（庆祝特别的日子）与两位考生展开讨论，最后以 Thank you. That is the end of the test. 结束。',
      questions: [
        { q: 'Which special occasions do you celebrate? (What do you do to celebrate?)', modelAnswer: "My family celebrates Spring Festival and everybody's birthday. For Spring Festival we clean the house, hang red decorations and have a huge dinner together, and at birthdays we always have a cake and sing songs." },
        { q: 'Who do you usually celebrate special occasions with? (Why?)', modelAnswer: 'I usually celebrate with my family, because they know me best and I feel comfortable with them. For my last birthday, I also invited two close friends, which made it even more fun.' },
        { q: 'Have you celebrated a special occasion in another country? (How did people celebrate?)', modelAnswer: "Not in another country, no. But last year I celebrated New Year at my aunt's home in another city, and people there set off fireworks in the street and shared sweets with all the neighbours, which was quite different from how we do it at home." },
        { q: 'What special celebration have you particularly enjoyed? (Why did you enjoy it?)', modelAnswer: "I particularly enjoyed my grandmother's seventieth birthday party, because all my relatives travelled from different cities to be there. We looked at old photos, ate delicious food and my cousins performed songs, so everyone laughed a lot." },
        { q: 'Do you think people need to spend a lot of money to have a fun celebration? (Why? / Why not?)', modelAnswer: 'No, I don\'t think so. The most important thing is being with people you love, not the money. For example, a simple picnic with my friends was one of my happiest memories, and it cost almost nothing.' },
        { q: 'Is it important for people to celebrate special occasions? (Why? / Why not?)', modelAnswer: "Yes, I think it's really important. Celebrations give people a break from busy everyday life and bring families closer together. They also create happy memories, especially for children and older people." },
      ],
    },
  },
}

// PET Trainer 2 Test 6 Speaking 数据（自动转录，待人工核对）
// 题目来源：《B1 Preliminary for Schools Trainer 2》(2024, 带答案版) Test 6 完整套卷
// Speaking · 书页 165（PDF p166），考官脚本与问题照录书内 Exam Practice 帧
// 视觉材料：Part 2 照片 A 在彩页 C5（PDF p236）下半（Exam Practice Test 6 · Candidate A，带协助犬的人），
//           Part 2 照片 B 在彩页 C6（PDF p237）下半（Exam Practice Test 6 · Candidate B，弹奏音乐的人），
//           Part 3 任务图在彩页 C16（PDF p247，Exam Practice Test 6 · Speaking Part 3，班级庆祝学期结束）
// duration 照录书内标注：Part 1 (2-3 minutes) / Part 2 (3-5 minutes) / Part 3 (4-5 minutes) / Part 4 (3-4 minutes)
// modelAnswer / modelDialogue 为原创 B1 教学参考答案（直接回答 + 理由 + 例子/细节），非官方答案

const TRAINER2_TEST_6_SPEAKING = {
  meta: {
    id: 'pet-trainer2-6-speaking',
    title: 'PET Trainer 2 · Test 6 Speaking',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Speaking',
    pages: '书页 165（照片见彩页 C5 下半/C6 下半，Part 3 图见 C16）',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先问候并核对姓名、年龄与住处（Phase 1），再从下列清单中选问若干个性化问题（Phase 2）。',
      phase1: [
        { q: "What's your name?", modelAnswer: "My name is Li Hua, and I'm in the second year of junior high school." },
        { q: 'How old are you?', modelAnswer: "I'm fourteen years old. I'll be fifteen next summer." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in the north of Beijing with my parents and my grandmother. It's about fifteen minutes from school by bus." },
      ],
      phase2: [
        { q: 'What did you do last night?', modelAnswer: 'Last night I did my homework first, and after dinner I watched a documentary about penguins with my dad. Then I read a comic for half an hour before going to bed at ten.' },
        { q: 'What school subject would you like to learn more about? (Why? / Why not?)', modelAnswer: "I'd like to learn more about physics, because we've only just started it this year. My cousin shows me cool experiments with magnets, and I want to understand why they work." },
        { q: 'Tell us about your favourite day of the week.', modelAnswer: 'My favourite day is Saturday, because I get up late and I have basketball training in the morning. In the afternoon I usually meet my friends, and in the evening we watch a film or play games together.' },
        { q: 'Do you like reading? (Why? / Why not?)', modelAnswer: "Yes, I do, especially adventure stories. I like the feeling that anything can happen in a book, and I always take one with me when we travel, because long journeys get boring." },
        { q: 'What job would you like to do in the future? (Why?)', modelAnswer: "I'd like to be a PE teacher, because sport is the most important thing in my life and I enjoy helping younger kids learn new skills. My coach says I'm patient, which is useful for teaching." },
        { q: 'Who makes you laugh the most? (Why are they funny?)', modelAnswer: 'My uncle makes me laugh the most. He loves telling jokes at family dinners, and he copies the voices of his favourite cartoon characters really well, so everyone always ends up laughing.' },
        { q: 'How long do you study English each week?', modelAnswer: 'I have four English lessons at school, and I also study for about an hour every evening, so maybe eight hours a week. At weekends I sometimes watch English videos too, which doesn\'t feel like studying.' },
        { q: 'Tell us about how you spend time with friends.', modelAnswer: 'We usually meet at the skate park near my home or play table tennis at school. Sometimes we just walk into town, buy bubble tea and talk about films – we don\'t need anything special to have fun.' },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '3–5 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。书内考官脚本：A 的照片 "It shows some people with an assistance dog."，B 的照片 "It shows some people playing music."',
      photos: [
        {
          label: 'A',
          topic: 'some people with an assistance dog',
          image: '/images/pet/speaking/trainer2/test-6/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see three people and a dog in a park.
The woman in the middle is wearing sunglasses and light pink clothes, and she is holding a special harness, so I think the white dog is her assistance dog. She is walking with a girl and a boy, so they are probably her children or her students.
Behind them there are green trees, grass and a lake, and on the right I can see a bench and some buildings, so this is probably a city park on a sunny day.
Everybody looks relaxed and happy, and the dog seems very well trained.`,
        },
        {
          label: 'B',
          topic: 'some people playing music',
          image: '/images/pet/speaking/trainer2/test-6/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a man and a girl making music at home.
The man is sitting on a big black sofa playing an acoustic guitar, and the girl next to him is playing a small instrument, maybe a ukulele. They are both smiling, so they are probably family and are having fun together.
On the wall behind them I can see two guitars, and in front of the sofa there is a laptop on a low table, so maybe they are following an online lesson or recording their music.
It looks like a bright living room, and the atmosphere is really warm and relaxed.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '4–5 分钟',
      situation: 'A class wants to plan an event. They would like to do something fun to celebrate the end of term.',
      instruction: 'Here are some things they could do to celebrate. Talk together about the different things they could do to celebrate and say which would be best.',
      image: '/images/pet/speaking/trainer2/test-6/task.png',
      options: ['踢足球', '去电影院看电影', '在教室里开派对、一起吃美食', '做科学实验', '全班和老师一起在教室里鼓掌庆祝（中间圆图）', '参观博物馆', '玩桌游', '一起去郊外徒步'],
      modelDialogue: `A: Our class wants to plan something fun to celebrate the end of term. Shall we start with the football match?
B: Good idea. Playing football would be great for the boys in our class, but some students don't like sport, so maybe it isn't the best choice for everyone.
A: That's true. What about going to the cinema? Watching a film together is relaxing, but everyone likes different kinds of films, and it might be expensive for some students.
B: I agree. A class party with food in the classroom could be cheaper and everyone can chat – but we'd still be at school, so it wouldn't feel very special.
A: Hmm. What about visiting the museum or doing science experiments? They sound fun for some people, but they feel a bit like extra lessons to me!
B: You're right. Going for a hike in the countryside would be something completely different, although the weather could be a problem.
A: Maybe, but I still think the hike is the best choice – it's a real adventure, we'd spend the whole day together, and it would help our class feel closer.
B: OK, let's choose the hike then. We can take a picnic, so it won't cost much either.`,
      tips: [
        '先和搭档一起把图中每个活动过一遍，轮流说优点和缺点，不要一个人说完全部',
        '用 Shall we start with…? / What about…? 提议，用 I agree / You\'re right / Maybe, but… 回应',
        '最后两人要达成一致，选出最好的一个并给出理由（对全班都适合、花费少、增进感情等）',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（学期结束的庆祝活动与校园生活）与两位考生展开讨论，可先互相交流再回答考官问题。',
      questions: [
        { q: 'What special occasions does your school celebrate?', modelAnswer: 'We celebrate National Day and the school\'s birthday with a big show, and before Spring Festival we decorate our classrooms and have a party. My favourite is Sports Day in autumn, because the whole school comes together to watch and cheer.' },
        { q: 'Do you go to any clubs at your school? (What do you do?)', modelAnswer: 'Yes, I\'m in the photography club. We meet every Thursday afternoon, and we take photos around the school for the website. Last month we organized a small exhibition, which was really exciting.' },
        { q: 'What kind of club would you like your school to have, for example, an art club? (Why?)', modelAnswer: 'I\'d love a cooking club, because we could learn to make simple dishes and then try them together. It would teach us useful life skills, and it would be a fun way to relax after lessons.' },
        { q: 'Is it important for schools to have sports teams? (Why?)', modelAnswer: 'Yes, I think it\'s really important. Sports teams give students a chance to exercise and make friends from other classes. When our school team wins a match, everybody feels proud, so it also brings the whole school together.' },
        { q: 'What kind of activities can bring students closer together at school? (How do they help students develop better friendships?)', modelAnswer: 'Group projects and class trips work best, I think. When we work in a team, we have to listen to each other and help each other, and after a trip everyone has the same funny memories, so it\'s much easier to become real friends.' },
        { q: 'Does school help students to learn useful skills? (What skills do you learn at school?)', modelAnswer: 'Yes, definitely. Of course we learn subjects like maths and English, but school also teaches me how to manage my time and how to work with different people. For example, in group projects I\'ve learnt to plan tasks and to speak in front of the class.' },
      ],
    },
  },
}

export const PET_SPEAKING_TRAINER2 = [
  TRAINER2_TEST_1_SPEAKING,
  TRAINER2_TEST_2_SPEAKING,
  TRAINER2_TEST_3_SPEAKING,
  TRAINER2_TEST_4_SPEAKING,
  TRAINER2_TEST_5_SPEAKING,
  TRAINER2_TEST_6_SPEAKING,
]

export default PET_SPEAKING_TRAINER2
