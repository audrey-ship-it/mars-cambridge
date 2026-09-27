// B1 Preliminary for Schools Trainer 1 (2020) · Trainer 1 口语
// 来源: pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf（书内 Teacher's Notes & Keys / Practice Test Key 核对）
// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）
// PET Trainer 1 Test 1 Speaking 数据（自动转录，待人工核对）
// 题目来源：pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf
// Test 1 Exam Practice · 书页 48–51（PDF p049–p052）
// 照片与图片集：Part 2 照片 A/B 在彩页 C1/C2（PDF p225/p226），Part 3 图集在彩页 C11（PDF p235）
// 考官脚本与问题照录书内 Exam Practice 帧；modelAnswer 为原创 B1 教学参考答案
// （遵循“直接回答 + 理由 + 例子/细节”的 B1 层级要求），非官方答案。

const TRAINER1_TEST_1_SPEAKING = {
  meta: {
    id: 'pet-trainer1-1-speaking',
    title: 'PET Trainer 1 · Test 1 Speaking',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Speaking',
    pages: '书页 48–51（照片见彩页 C1/C2，Part 3 图集见 C11）',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先核对姓名、年龄、住址与家人（Phase 1），再从清单中选问若干个性化问题（Phase 2）。',
      phase1: [
        { q: "What's your name? How old are you?", modelAnswer: "My name is Chen Xiaoyu, and I'm fifteen years old." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in the south of Guangzhou with my family. It's quite near my school, so I can walk there in ten minutes." },
        { q: 'Who do you live with?', modelAnswer: 'I live with my parents and my younger brother. My grandparents visit us every summer and stay for a few weeks.' },
      ],
      phase2: [
        { q: 'Tell us about your best friend.', modelAnswer: "My best friend is called Ma Liang. We met four years ago on our first day at secondary school and we sit together in class. He's funny and kind, and we play basketball together every weekend." },
        { q: 'How often do you use the internet?', modelAnswer: 'I use it every day, usually for about an hour. I chat with my classmates, watch short videos and look up information for my homework.' },
        { q: 'What do you usually do in the evening?', modelAnswer: "I do my homework first, and then we have dinner at about seven o'clock. After that I usually watch TV or read for a while before I go to bed." },
        { q: 'What is your favourite school subject? (Why?)', modelAnswer: 'My favourite subject is history because I love finding out how people lived in the past. Our teacher tells us interesting stories, so the lessons never feel boring.' },
        { q: 'Which TV programmes do you enjoy watching? (Why?)', modelAnswer: 'I enjoy nature documentaries best because the photography is amazing and I learn a lot about animals. I usually watch them with my dad at weekends.' },
        { q: 'Do you like playing or watching any sports? (Why? / Why not?)', modelAnswer: "Yes, I love playing table tennis. It's fast and exciting, and it doesn't need much equipment, so my friends and I can play almost anywhere." },
        { q: "What's your favourite kind of music? (Why?)", modelAnswer: "I like pop music because it's lively and easy to sing along to. I listen to it on the bus, and it always puts me in a good mood." },
        { q: 'Tell us about your bedroom.', modelAnswer: "My bedroom is quite small but very bright. There's a desk beside the window, shelves full of books, and posters of my favourite football team on the walls." },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '2–3 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。书内考官脚本：A 的照片 "It shows someone doing her homework."，B 的照片 "It shows some people getting their lunch."',
      photos: [
        {
          label: 'A',
          topic: 'someone doing her homework',
          image: '/images/pet/speaking/trainer1/test-1/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a teenage girl doing her homework on a laptop.
She is lying on her stomach on a bed with an open book and some notes in front of her, and she is holding a pen, so she is probably checking her work or looking for ideas online.
Behind her there is a big shelf full of books, a globe and some framed pictures, so I think this is her bedroom or a study room.
She looks quite concentrated and a little tired, but I'm sure she will finish her homework soon.`,
        },
        {
          label: 'B',
          topic: 'some people getting their lunch',
          image: '/images/pet/speaking/trainer1/test-1/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see three young people at the counter of a canteen.
The girl on the left has curly fair hair and is wearing a blue polo shirt. She is smiling and giving some money to the woman behind the till, and the other two young people are waiting with their trays.
On the counter I can see salads, fruit and drinks, and behind the woman there is a computer screen and a kitchen area, so I think this is a school or office restaurant.
It looks like lunchtime, and everybody seems relaxed and friendly.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '2–3 分钟',
      situation: 'A girl is going on a long bus journey with her family to visit some relatives. She can take one thing with her on the bus for entertainment during the journey.',
      instruction: 'Here are some things she could take with her. Talk together about the different things she could take with her, and say which would be best.',
      image: '/images/pet/speaking/trainer1/test-1/task.png',
      options: ['看书', '用笔记本电脑', '听音乐', '画画', '写字／玩字谜', '玩棋盘游戏', '看杂志'],
      modelDialogue: `A: The girl can only take one thing on the bus, so we need to choose the best one. Shall we start with the book?
B: Sure. Reading is a good way to pass the time, but she might feel sick if she reads on a long bus journey.
A: That's true. What about the laptop? She could watch films or play games on it, but there's no Wi-Fi on the bus and the battery won't last for hours.
B: I agree. I think listening to music is better – it's relaxing, and she can enjoy the views at the same time.
A: Maybe, but a long journey is too many hours for just music. Drawing could keep her busy, and it's easy to carry.
B: Good point. A board game would be fun too, but it needs another player – although her little brother might be happy to play with her!
A: Hmm, in my opinion the laptop is still the best because she can do so many different things with it.
B: I'm not so sure – the battery is a real problem. Actually, I think the board game is best because she can play with her family and time passes quickly.
A: OK, let's choose that one then.`,
      tips: [
        '先逐个讨论图中物品的优点和缺点，再一起决定最好的一个',
        "用 How about…? / Why don't we…? 提建议，用 I agree / I'm not so sure 回应",
        '最后给出一致的选择并说明理由',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（长途旅行与旅途消遣）与两位考生展开讨论，最后以 Thank you. That is the end of the test. 结束。',
      questions: [
        { q: 'Have you ever been on a really long journey? (Where did you go?)', modelAnswer: 'Yes, I have. Last summer my family took the train to Beijing to visit my uncle. The journey took about eight hours, but I enjoyed it because I watched films and played cards with my brother.' },
        { q: 'Which do you prefer, travelling by car or travelling by bus? (Why?)', modelAnswer: "I prefer travelling by car because it's more comfortable and we can stop whenever we want. On a bus you have to stay in your seat, and it's often crowded." },
        { q: 'Have you ever been on an aeroplane? (Did you enjoy it?)', modelAnswer: 'Yes, once, when we flew to Shanghai to see my grandparents. I was a little nervous at first, but I loved looking out of the window at the clouds, so I really enjoyed it.' },
        { q: 'Do you like travelling by train? (Why? / Why not?)', modelAnswer: "Yes, I do. Trains are fast and punctual, and I can walk around or watch the scenery, which you can't do in a car. The tickets are quite cheap, too." },
        { q: 'Is it important for people to think about the environment when they choose how to travel? (Why? / Why not?)', modelAnswer: "Yes, I think it's really important. Cars and planes produce a lot of pollution, so we should walk, cycle or take the train for short journeys whenever we can. Small changes can make a big difference." },
      ],
    },
  },
}

// PET Trainer 1 Test 2 Speaking 数据（自动转录，待人工核对）
// 题目来源：pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf
// Exam Practice Test 2 · 书页 87–93（PDF 页 88–94），考官脚本照抄书内 Exam Practice 帧
// 照片视觉材料：彩页 C1（Test 2 Photo A）/ C2（Test 2 Photo B）/ C12（Part 3 任务图），image 路径待裁剪放图
// modelAnswer 为原创 B1 教学参考答案（直接回答 + 理由 + 例子），非唯一答案

const TRAINER1_TEST_2_SPEAKING = {
  meta: {
    id: 'pet-trainer1-2-speaking',
    title: 'PET Trainer 1 · Test 2 Speaking',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Speaking',
    pages: '书页 87–93',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先核对姓名、年龄和住处（Phase 1），再从下列清单中选问若干个性化问题（Phase 2）。',
      phase1: [
        { q: "What's your name?", modelAnswer: 'My name is Chen Xiaoyu, and my English name is Sunny.' },
        { q: 'How old are you?', modelAnswer: "I'm fourteen years old. I'll be fifteen next March." },
        { q: 'Where do you live? Who do you live with?', modelAnswer: 'I live in a flat in the south of Nanjing with my parents and my little sister. It\'s near my school, so I can walk there in ten minutes.' },
      ],
      phase2: [
        { q: 'Tell us about your home.', modelAnswer: 'My home is a comfortable flat on the sixth floor. My favourite room is my bedroom because I can read and listen to music there, and from my window I can see a small park.' },
        { q: 'What do you use the internet for?', modelAnswer: 'I mostly use it to do homework and watch videos about basketball. I also chat with my friends online at weekends, but my parents only let me use it for about an hour a day.' },
        { q: 'What do you usually do when you get home from school? (Why?)', modelAnswer: 'I usually have a snack and rest for half an hour before I start my homework, because I feel too tired to concentrate straight away. After dinner I sometimes play table tennis with my dad.' },
        { q: 'What is your favourite day of the week? (Why?)', modelAnswer: 'My favourite day is Saturday, because I don\'t have to get up early and I have time to meet my friends. We often ride our bikes or watch a film together.' },
        { q: 'Would you like to learn to play a musical instrument? (Why? / Why not?)', modelAnswer: 'Yes, I\'d love to learn the guitar, because my favourite singer plays it and I think it would be cool to play songs for my friends. But I\'m quite busy with school at the moment.' },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '2–3 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。',
      photos: [
        {
          label: 'A',
          topic: 'some people doing sport',
          image: '/images/pet/speaking/trainer1/test-2/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see four boys playing basketball on a path outside some houses.
One of the boys, who is wearing a blue T-shirt, is throwing the ball towards the basket, and the other boys are watching him and getting ready to catch it. They are all wearing shorts and trainers because it looks like a warm day.
Behind them there are tall trees and a white house with a porch, so I think they are playing in a garden or on the drive of a home. The basketball hoop has a white board, and there is a lot of green grass.
It seems to be a sunny afternoon, and the boys look very excited and full of energy.`,
        },
        {
          label: 'B',
          topic: 'some people helping at home',
          image: '/images/pet/speaking/trainer1/test-2/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a family of four in a kitchen, and they are all helping at home.
The father is standing at the sink washing the dishes, and a boy in a blue T-shirt is standing next to him, helping him with the water. Another boy, who is wearing a green T-shirt, is holding a dish and drying it. In the background, the mother is smiling and drinking a cup of tea or coffee.
The kitchen has wooden cupboards, and I can see plates, a bottle of washing-up liquid and a paper towel on the worktop.
They all look happy, so maybe helping together is fun for them.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '2–3 分钟',
      situation: 'A teacher wants his class to learn more about space.',
      instruction: 'Here are some different ways to learn about space. Talk together about the different ways to learn about space, and say which students would find most interesting.',
      image: '/images/pet/speaking/trainer1/test-2/task.png',
      options: ['仰望星空（观星）', '看太空主题影片', '参观太空博物馆', '阅读太空书籍', '画太空主题画', '玩太空电脑游戏'],
      modelDialogue: `A: Our teacher wants the class to learn more about space. Which of these ways do you think would be best?
B: Well, looking at the picture, visiting a space museum could be fantastic. We could see real rockets and maybe even touch a piece of moon rock.
A: That's true, but watching a film about space might teach us more, because you can see things that are too far away to visit, like the surface of Mars.
B: Good point. What about playing a computer game about space? I think students would find that really fun, and you have to solve problems in those games.
A: Maybe, but I'm not sure we'd learn real facts from a game. Reading books about space is probably more useful for our studies.
B: I agree, although some students might find reading a bit boring. Drawing pictures of planets could be fun for younger students, but it wouldn't teach us much.
A: So which would students find most interesting, do you think?
B: In my opinion, visiting a space museum would be the most interesting, because it's a real trip and we'd remember it for a long time.
A: Great, let's choose that one then.`,
      tips: [
        '和搭档轮流发言，用 What about…? / Do you agree? 互相提问',
        '每个方式都给出理由，可以适当否定一两个再肯定最优的',
        '结尾必须用最高级得出结论（the most interesting / the best）',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3 分钟',
      instruction: '考官围绕 Part 3 的话题（太空与学习太空知识）向两位考生提问，考生给出理由并可与搭档互动。',
      questions: [
        { q: 'Do you like learning about space? (Why? / Why not?)', modelAnswer: 'Yes, I do. Space is full of things we don\'t understand yet, and every new discovery is exciting. I love watching videos about black holes because they are so mysterious.' },
        { q: 'Would you like to travel to space one day? (Why? / Why not?)', modelAnswer: 'Yes, I\'d love to. I\'d be very excited to see the Earth from space, and floating in a spaceship must be an amazing feeling. Not many people get that chance.' },
        { q: 'Do you think people will live on other planets one day? (Why? / Why not?)', modelAnswer: 'Maybe, but I think it\'s a long way in the future. Scientists are already planning trips to Mars, but it would be very difficult to grow food and breathe there, so people would need special buildings.' },
        { q: 'Do you like watching science fiction films that take place in space? (Why? / Why not?)', modelAnswer: 'Yes, I really enjoy them because the special effects are incredible and the stories are full of adventure. My favourite is about a journey to another galaxy, although some of it is a bit scary.' },
        { q: 'Is it better to learn more about the Earth or more about space? (Why?)', modelAnswer: 'I think we should learn more about the Earth first, because we need to protect our own planet, for example by fighting pollution. After that, exploring space can help us find new resources and maybe a second home.' },
      ],
    },
  },
}

// PET Trainer 1 Test 3 Speaking 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 3 · PDF 页 112（书页 111）
// Part 2 照片在彩页 C3/C4，Part 3 任务卡在彩页 C13（图片稍后裁剪放入 /images/pet/speaking/trainer1/test-3/）
// modelAnswer 为原创 B1 教学参考答案（"直接回答 + 理由 + 例子/细节"），非官方答案
const TRAINER1_TEST_3_SPEAKING = {
  meta: {
    id: 'pet-trainer1-3-speaking',
    title: 'PET Trainer 1 · Test 3 Speaking',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Speaking',
    pages: '书页 111（照片见彩页 C3/C4，任务卡见彩页 C13）',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先致问候（Good morning / afternoon / evening），核对姓名、年龄、住处（Phase 1），再从 Phase 2 清单中选问若干问题。',
      phase1: [
        { q: "What's your name?", modelAnswer: 'My name is Chen Yuxin, but my English name is Cindy, so you can call me Cindy.' },
        { q: 'How old are you?', modelAnswer: "I'm fourteen years old. I'll be fifteen next March." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in the south of Guangzhou with my family. It's quite near a metro station, so it's easy to get around the city." },
        { q: 'Who do you live with?', modelAnswer: 'I live with my parents and my younger brother. My grandparents live in the same city and we visit them at weekends.' },
      ],
      phase2: [
        { q: 'Tell us about your favourite food and drink.', modelAnswer: 'My favourite food is noodles because they are tasty and quick to make. My mum cooks them with eggs and vegetables. As for drinks, I love fresh orange juice, especially in summer.' },
        { q: 'What did you do yesterday?', modelAnswer: 'Yesterday I went to school as usual, and after school I played table tennis with my classmates. In the evening I did my homework and watched a cartoon with my brother.' },
        { q: 'Do you like playing computer games? (Why? / Why not?)', modelAnswer: "Yes, I do, but I only play at weekends. I like puzzle games because they're relaxing and they make me think. I never play on school nights because I need to get up early." },
        { q: 'Which famous person would you like to meet? (Why?)', modelAnswer: "I'd love to meet the table tennis champion Ma Long, because he works really hard and never gives up. I'd like to ask him how he trains and how he stays calm in big matches." },
        { q: 'Which shops do you like going to? (Why?)', modelAnswer: "I like going to the bookshop near my school because I love reading comics and magazines. There's a café next to it, so my friends and I sometimes get a drink there too." },
        { q: "What's the best holiday you've ever had? (Why was it so good?)", modelAnswer: "The best holiday I've ever had was a trip to Yunnan with my family. We saw beautiful mountains and lakes, and I tried lots of local food. It was so good because we spent the whole week together outdoors." },
        { q: 'Tell us about your English classes.', modelAnswer: 'I have English classes four times a week at school. We practise speaking in pairs and sometimes watch short videos in English. My teacher is funny, so the lessons are never boring.' },
        { q: 'Which sport would you like to try in the future? (Why?)', modelAnswer: "I'd like to try rock climbing because it looks exciting and it makes you strong. My cousin does it every week, and she says it's a great feeling when you reach the top." },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '2–3 分钟',
      instruction: '考官给每位考生一张照片，各自单独描述约一分钟（谈谈人物、地点、照片中的其他事物），另一名考生只需聆听。',
      photos: [
        {
          label: 'A',
          topic: 'some people doing an activity on a sunny day',
          image: '/images/pet/speaking/trainer1/test-3/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see some people doing an activity outside on a sunny day.
They seem to be playing a ball game together in a park. In the foreground, a young person is throwing a ball, and the others are running and laughing, so they look like friends or family members enjoying the weekend.
Behind them I can see green trees and grass, and the sky is clear and blue. Everyone is wearing light summer clothes, such as T-shirts and caps.
It looks like a warm, sunny afternoon, and the people seem really happy to be outdoors together.`,
        },
        {
          label: 'B',
          topic: 'someone getting ready for school',
          image: '/images/pet/speaking/trainer1/test-3/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see someone getting ready for school in the morning.
The student is probably a teenager, and he or she is packing a school bag with books and pencils, so it's probably nearly time to leave. The person seems to be in a hurry, maybe because the school bus comes soon.
The photo seems to be taken in a bedroom or kitchen at home. I can see a school uniform hanging up and a clock on the wall, and there is probably breakfast on the table too.
It looks like a typical busy school morning, and the atmosphere feels quite lively.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '2–3 分钟',
      situation: "A girl's penfriend is visiting her from another country. The girl would like to buy her penfriend a present that will remind her of her stay.",
      instruction: 'Here are some presents she could buy. Talk together about the different presents she could buy her penfriend and say which would be best.',
      image: '/images/pet/speaking/trainer1/test-3/task.png',
      options: ['T恤', '项链（首饰盒装）', '巧克力', '相框（合影照片）', '纪念画册', '花瓶', '棋盘游戏'],
      modelDialogue: `A: Here are some presents this girl could buy her penfriend. The present should remind her friend of her stay, so which one do you think is best?
B: Well, I think the T-shirt with the picture of the city on it could be nice. She can wear it and remember the trip every time.
A: That's true, but she might already have lots of T-shirts. What about the necklace in the jewellery box? It looks more special.
B: Maybe, but jewellery can be expensive, and we don't know if it suits her style. I quite like the idea of the box of chocolates, because she can share them with her family back home.
A: Good point, but chocolates won't last long – once they're eaten, there's nothing to remember the visit by! The framed photo of the two girls would be more personal, don't you think?
B: Yes, that's a lovely idea. They could take the photo together during the visit, and the frame would remind her of their friendship.
A: I agree. The souvenir book about the town is nice too, but the photo of the two of them is more special than a book.
B: So let's choose the framed photo then – it's personal, and it will really remind her of her stay.
A: Great, that's what we'll suggest.`,
      tips: [
        '逐个讨论图上的七种礼物，互相提问和回应，不要一个人讲完',
        '围绕"让朋友记住这次来访"来比较：轻便、有纪念意义、是否适合对方',
        '最后两人一起商定一个最佳礼物并给出理由',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3 分钟',
      instruction: '考官围绕 Part 3 的话题（买礼物送朋友）与两位考生展开讨论。',
      questions: [
        { q: 'Which of these presents would you prefer to have? (Why?)', modelAnswer: "I'd prefer to have the souvenir book, because I love reading and looking at photos of interesting places. I could keep it for many years, and whenever I open it, I'd remember my friend and the trip." },
        { q: 'Do you like giving presents to people? (Why? / Why not?)', modelAnswer: 'Yes, I do. Choosing a present for someone makes me think about what they really like, and it feels great when they open it and smile. Last year I gave my best friend a bookmark, and she uses it every day.' },
        { q: 'What was the last present you bought for someone?', modelAnswer: "The last present I bought was a birthday present for my mum – a warm scarf. I chose it because winter was coming and she walks to work every day. She liked it so much that she wore it the next morning." },
        { q: "What's the best present you've ever received? (Why?)", modelAnswer: "The best present I've ever received was a bicycle from my parents for my twelfth birthday. It was the thing I wanted most, and now I ride it to school every day, so it's really useful too." },
        { q: 'When do people give presents in your country? (Why?)', modelAnswer: 'In my country people give presents at Spring Festival and on birthdays, and also on special days like Teachers\' Day. We give presents to show our love and thanks, and to wish the other person good luck and happiness.' },
      ],
    },
  },
}

// PET Trainer 1 Test 4 Speaking 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 4 Speaking · 书页 129（PDF 页 130），已对照页面渲染图逐词核对
// 视觉材料：彩页 C3（Photo A：a family doing a holiday activity together）、
//           C4（Photo B：a family preparing a meal together）、
//           C14（Part 3 任务卡：中心为教师指着写有 "Class Trip" 的白板，周围 6 幅地点小图——博物馆恐龙化石展 /
//                城市河流游船 / 城堡 / 游乐园摩天轮过山车 / 剧院演出 / 野生动物园大巴与斑马；任务卡无印刷文字）
// 各 Part 时长按书内印刷的斜体区间转录（Part 2: 3–5 minutes，Part 3: 4–5 minutes）。
// Part 2/3 的 modelAnswer / modelDialogue / tips 均为原创 B1 教学参考答案（依据题目要求撰写），非官方答案。

const TRAINER1_TEST_4_SPEAKING = {
  meta: {
    id: 'pet-trainer1-4-speaking',
    title: 'PET Trainer 1 · Test 4 Speaking',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Speaking',
    pages: '书页 129',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先问候并核对个人信息（Phase 1：Good morning / afternoon / evening 后核对姓名、年龄、住址、家庭），再从 Phase 2（possible examiner questions）清单中选问若干问题。',
      phase1: [
        { q: "What's your name?", modelAnswer: 'My name is Chen Jiaming, and my English name is Ethan.' },
        { q: 'How old are you?', modelAnswer: "I'm fourteen. I'll be fifteen in December, just before the New Year." },
        { q: 'Where do you live?', modelAnswer: 'I live in a block of flats near the city centre with my family. It takes about ten minutes to get to my school by bike.' },
        { q: 'Who do you live with?', modelAnswer: "I live with my parents and my younger brother. He's nine, and we share a bedroom, which is sometimes noisy but quite fun." },
      ],
      phase2: [
        { q: 'How do you usually keep in touch with your friends? (Why?)', modelAnswer: "I usually keep in touch with my friends by sending messages on my phone, because it's quick and free. At weekends we sometimes video call each other and play online games together." },
        { q: 'Tell us about your favourite teacher.', modelAnswer: "My favourite teacher is Mr Zhao, who teaches us physics. He does lots of experiments in class, so his lessons are never boring, and he always explains things patiently until everyone understands." },
        { q: 'What kinds of things do you like reading? (Why?)', modelAnswer: 'I like reading adventure stories because they are exciting and difficult to put down. I also read sports magazines to follow my favourite football team.' },
        { q: 'What are you going to do this evening? (Why?)', modelAnswer: "This evening I'm going to finish my homework first, and then I'll watch a documentary with my dad, because we both love learning about animals and space." },
        { q: 'Do you prefer to eat at home or in a restaurant? (Why?)', modelAnswer: 'I prefer eating at home because the food is healthier and cheaper, and my whole family cooks together. We only go to a restaurant on special days like birthdays.' },
        { q: 'Do you help your parents with jobs around the house? (Why? / Why not?)', modelAnswer: 'Yes, I do. I wash the dishes after dinner and take out the rubbish every day, because my parents work hard and I think everyone in the family should share the housework.' },
        { q: 'What would you like to study in the future? (Why?)', modelAnswer: "I'd like to study computer science in the future, because I enjoy coding and I think technology will offer lots of interesting jobs. I'd love to design my own app one day." },
        { q: 'How often do you go to the cinema? (Why?)', modelAnswer: "I go to the cinema about once a month, usually with my friends. Tickets are quite expensive, so we only go when a really exciting film is on, and we choose the cheap Tuesday show." },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '3–5 分钟',
      instruction: "考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。考官台词：Now, I'd like each of you to talk on your own about something. I'm going to give each of you a photograph and I'd like you to talk about it. A, here is your photograph. It shows a family doing a holiday activity together. (See page C3.) B, you just listen. A, please tell us what you can see in the photograph. B, here is your photograph. It shows a family preparing a meal together. (See page C4.) A, you just listen. B, please tell us what you can see in the photograph.",
      photos: [
        {
          label: 'A',
          topic: 'a family doing a holiday activity together',
          image: '/images/pet/speaking/trainer1/test-4/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a family of four cycling together along a path in the countryside, so it looks as if they are on holiday. The parents are riding at the front and laughing, while the two children are following close behind them on smaller bikes.
They are all wearing helmets and comfortable clothes, and the father is carrying a rucksack on his back, so maybe they are riding to a picnic place.
Behind them I can see green fields, tall trees and some mountains in the distance, and the sky is bright and sunny. There are also some wild flowers along the side of the path.
They all look very relaxed, and they are obviously enjoying spending the day together outdoors.`,
        },
        {
          label: 'B',
          topic: 'a family preparing a meal together',
          image: '/images/pet/speaking/trainer1/test-4/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a family in a big, bright kitchen, preparing a meal together. The mother and the daughter are standing at the counter making pizzas, and the father is cutting some vegetables, while the son is putting toppings onto the pizzas.
They are all wearing aprons, and there is flour on the table, so I think they have made the dough themselves.
On the counter I can see bowls of cheese, tomatoes and other ingredients, and there are wooden spoons and a rolling pin next to them. Behind the family there are cupboards, and some fruit is lying in a basket.
Everyone is smiling and talking, so they seem to be having a wonderful time cooking together.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '4–5 分钟',
      situation: 'A teacher has asked her class for ideas of places to go on a class trip. The place must be fun, but also be somewhere that students can learn something.',
      instruction: 'Here are some places they could go to. Talk together about the different places they could go to and say which would be best. All right? Now, talk together.',
      image: '/images/pet/speaking/trainer1/test-4/task.png',
      options: ['博物馆（参观恐龙化石展）', '乘船游览城市河流', '参观城堡', '游乐园（摩天轮、过山车）', '剧院看演出', '野生动物园（乘大巴观赏动物）'],
      modelDialogue: `A: Our teacher wants ideas for a class trip that is fun but also teaches us something. Which of these places do you like best?
B: Well, the museum with the dinosaur skeletons would be really educational – we could learn about animals that lived millions of years ago. But some people might find it a bit quiet.
A: That's true. What about the boat trip along the river? It would be fun to see the city from the water, and the guide would tell us about the buildings we pass.
B: Good idea, but it might be cold or rainy. The castle is exciting too – we could learn history by walking around the towers and seeing how people lived long ago.
A: Yes, and the safari park would be amazing, because we could watch the animals from the bus and learn how they live in the wild. It's fun and educational at the same time.
B: I agree. The theme park is great fun, but we wouldn't learn much there, and a theatre trip is interesting, though it might not suit everyone.
A: So shall we say the safari park is the best choice, with the castle as the second option?
B: Yes, let's go with that. Everyone would enjoy seeing the animals, and we'd learn a lot about nature.`,
      tips: [
        '逐个讨论图上六个地点，每个都从"好玩"和"能学到东西"两方面评价，不要只盯着一两个',
        "用 What about…? / That's true, but… / I agree, because… 互动，回应搭档的观点",
        '最后两人要一起得出结论（哪个最好），并简单说明理由',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（外出参观、班级旅行）向两位考生提问并展开讨论。',
      questions: [
        { q: 'What kinds of places do you like visiting? (Why?)', modelAnswer: 'I like visiting places in nature, like lakes, mountains and zoos, because I love taking photos of animals and plants. Last spring my family visited a bird park, and I took hundreds of pictures of the flamingos there.' },
        { q: 'Do you visit places with your school? (Tell us about the last place you visited with your school. / Where would you like to visit?)', modelAnswer: 'Yes, we go on a school trip every term. The last one was to the Science Museum – we watched a robot show and did experiments ourselves. It was much more fun than reading about science in a book.' },
        { q: "What's the most interesting place to visit in your city? (Why?)", modelAnswer: "I think it's the old town, because the streets and buildings there are hundreds of years old, and there are little shops selling local food. Visitors can learn a lot about our history just by walking around." },
        { q: 'Where in the world would you most like to visit? (Why?)', modelAnswer: "I'd most like to visit Australia, because the animals there are completely different from ours – kangaroos and koalas, for example. I'd also love to see the Great Barrier Reef and try diving." },
        { q: 'Is it important for schools to take students on school trips? (Why? / Why not?)', modelAnswer: "Yes, I think it's really important, because trips make lessons come alive and help classmates become friends. When we visited the museum last year, I remembered far more about history than I did from our textbook." },
      ],
    },
  },
}

// PET Trainer 1 Test 5 Speaking 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 5 Speaking · 书页 147（PDF 页 148）
// 视觉材料：彩页 C5（Photo A：people enjoying music together）、C6（Photo B：someone taking a photo）、
//           C15（Part 3 任务卡，无印刷文字，选项为图示，中文短语为转录描述）
// 所有 modelAnswer 均为原创 B1 教学参考答案（依据题目要求撰写），非官方答案。

const TRAINER1_TEST_5_SPEAKING = {
  meta: {
    id: 'pet-trainer1-5-speaking',
    title: 'PET Trainer 1 · Test 5 Speaking',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Speaking',
    pages: '书页 147',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先问候并核对个人信息（Phase 1：Good morning / afternoon / evening 后核对姓名、年龄、住址、家庭），再从 Phase 2（possible examiner questions）清单中选问若干问题。',
      phase1: [
        { q: "What's your name?", modelAnswer: 'My name is Chen Jiaqi, and my English name is Kitty.' },
        { q: 'How old are you?', modelAnswer: "I'm fourteen years old. I'll be fifteen next March." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in Hangzhou with my family. It's near a big park, so I can go there at weekends." },
        { q: 'Who do you live with?', modelAnswer: 'I live with my parents and my younger brother. My grandparents visit us every summer.' },
      ],
      phase2: [
        { q: 'What do you usually do in the morning before school?', modelAnswer: "I usually get up at half past six, have breakfast and then ride my bike to school. On the way I sometimes listen to English songs." },
        { q: "Tell us about an interesting place you've visited.", modelAnswer: "Last year I visited the Great Wall with my family. It was amazing – the wall goes on for kilometres, and we took lots of photos of the mountains." },
        { q: 'What do you usually do during break times at school? (Why?)', modelAnswer: 'I usually play table tennis with my classmates because it\'s fun and it wakes me up before the next lesson. Sometimes we just chat in the playground.' },
        { q: 'What thing could you not live without? (Why?)', modelAnswer: "I couldn't live without my bike because I use it every day to get to school. It's also great fun at weekends." },
        { q: 'What did you do last weekend?', modelAnswer: 'Last Saturday I did my homework in the morning and played basketball in the afternoon. On Sunday my family visited my grandparents and we had a big lunch together.' },
        { q: 'Which person you know makes you laugh the most? (Why are they so funny?)', modelAnswer: "My cousin makes me laugh the most. He's always telling jokes and doing silly impressions of our teachers, so everyone laughs when he's around." },
        { q: 'What is your favourite time of year? (Why?)', modelAnswer: 'My favourite time of year is the Spring Festival in January or February. We get a long holiday, eat lots of delicious food and I see all my cousins.' },
        { q: 'Where did you go on your last holiday?', modelAnswer: "On my last holiday I went to Qingdao with my parents. We swam in the sea, built sandcastles and ate fresh seafood every day." },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '2–3 分钟',
      instruction: "考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。考官台词：Now, I'd like each of you to talk on your own about something. I'm going to give each of you a photograph and I'd like you to talk about it. A, here is your photograph. It shows people enjoying music together. (See page C5.) B, you just listen. A, please tell us what you can see in the photograph. B, here is your photograph. It shows someone taking a photo. (See page C6.) A, you just listen. B, please tell us what you can see in the photograph.",
      photos: [
        {
          label: 'A',
          topic: 'people enjoying music together',
          image: '/images/pet/speaking/trainer1/test-5/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a band giving a concert. On the stage there are several musicians – I can see a singer, a guitarist and a drummer – and colourful blue and purple lights are shining down on them.
In front of the stage there is a big crowd of people. They are standing close together and lots of them have their hands in the air. Some are holding phones, maybe to take photos or record the show.
I think the concert is in a large hall or at an outdoor festival in the evening, because the audience is in shadow while the stage is brightly lit.
Everyone seems to be enjoying the music and having a great time, so the atmosphere must be really exciting.`,
        },
        {
          label: 'B',
          topic: 'someone taking a photo',
          image: '/images/pet/speaking/trainer1/test-5/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see a family taking a selfie outdoors. A man is holding a smartphone in his hand and pointing the camera at himself and the people next to him.
There are two or three children in the picture, and they are all smiling and squeezing together to fit in the photo. They look like a happy family.
They are in the countryside or in a mountain area, because behind them I can see green fields, tall mountains and a blue sky with a few clouds.
It looks like a sunny day, and they are probably on holiday or on a day trip, taking a photo to remember it.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '4–5 分钟',
      situation: 'A family want to do an exciting activity together that will be fun for everyone to do.',
      instruction: 'Here are some things they could do together. Talk together about the different things they could do together and say which would be the most fun. All right? Now, talk together.',
      image: '/images/pet/speaking/trainer1/test-5/task.png',
      options: ['乘快艇滑水', '去电影院看电影', '去球场踢足球', '在森林里徒步', '乘直升机观光', '参观水族馆'],
      modelDialogue: `A: The family want to do an exciting activity together that will be fun for everyone. Which of these things do you think they could do?
B: Well, water skiing looks really exciting, but maybe it's difficult for the youngest children in the family.
A: That's true. What about going to the cinema? Everyone can watch the film together, even grandparents.
B: Yes, but it isn't very exciting – they can watch films at home too. I think playing football would be more fun because the whole family can join in.
A: Good idea. Or they could go hiking in the forest. It's healthy, and they can enjoy the fresh air and have a picnic.
B: Hmm, but if the weather is bad, walking in the forest isn't much fun. What about the helicopter ride? The views must be amazing.
A: It sounds exciting, but it's probably quite expensive, and some people are afraid of heights.
B: You're right. Maybe the aquarium is the best choice – it's exciting to walk through the tunnel with sharks swimming above you, and it's fun for every age.
A: I agree. Let's suggest the aquarium, and football as another possibility if they want to do sport.`,
      tips: [
        '逐个讨论图上六项活动，每项给出优点或缺点，不要只盯着一两个活动',
        "用 What about…? / I think… because… / You're right, but… 表达观点并与搭档互动",
        '最后两人要一起说出认为最好玩的一项并给出理由',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（家庭一起做的活动/外出游玩）向两位考生提问并展开讨论。',
      questions: [
        { q: 'What activity do you most enjoy doing with your family? (Why?)', modelAnswer: 'I most enjoy cycling with my family at weekends. We ride along the river near our home, and we always stop for ice cream, so it keeps us fit and we can talk a lot.' },
        { q: "Are there any exciting activities you'd like to try in the future? (Why?)", modelAnswer: "Yes, I'd love to try scuba diving because I want to see fish and coral under the sea. It looks exciting, and my uncle says it isn't as difficult as people think." },
        { q: 'What do you think is the best time of year to go for a day out? (Why?)', modelAnswer: "I think spring is the best time. It isn't too hot or too cold, flowers are everywhere, and you don't need to carry heavy coats like in winter." },
        { q: 'Do you prefer to do activities with family or friends? (Why?)', modelAnswer: "It depends on the activity. With my friends I prefer sport and cinema trips because we like the same things, but with my family I enjoy travelling because they know me best." },
        { q: 'Which do you think is more interesting: a day out in the city or a day out in the countryside? (Why?)', modelAnswer: "For me, a day in the countryside is more interesting. I live in a city, so fresh air, rivers and mountains feel special. But my cousin prefers cities because of the museums and shopping." },
      ],
    },
  },
}

// PET Trainer 1 Test 6 Speaking 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 6 Speaking · 书页 165（PDF 页 166）
// 视觉材料：彩页 C5（Photo A：some friends meeting，四名女生在街边咖啡馆看平板电脑）、
//           C6（Photo B：people doing something together in winter，户外结冰湖面滑冰、一人摔倒被扶起）、
//           C16（Part 3 任务卡：talent show 奖品——电子阅读器/奖杯/纪念T恤/花束/现金/演出门票，无印刷文字）
// Part 2/3 的 modelAnswer / modelDialogue / tips 均为原创 B1 教学参考答案（依据题目要求撰写），非官方答案。

const TRAINER1_TEST_6_SPEAKING = {
  meta: {
    id: 'pet-trainer1-6-speaking',
    title: 'PET Trainer 1 · Test 6 Speaking',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Speaking',
    pages: '书页 165',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 个人问答',
      duration: '2–3 分钟',
      instruction: '考官先问候并核对个人信息（Phase 1：Good morning / afternoon / evening 后核对姓名、年龄、住址、家庭），再从 Phase 2（possible examiner questions）清单中选问若干问题。',
      phase1: [
        { q: "What's your name?", modelAnswer: 'My name is Lin Xiaoyu, and my English name is Daisy.' },
        { q: 'How old are you?', modelAnswer: "I'm fifteen years old. My birthday is in July, so I'll be sixteen next summer." },
        { q: 'Where do you live?', modelAnswer: "I live in a flat in the south of Chengdu with my family. It's quite near my school, so I walk there every day." },
        { q: 'Who do you live with?', modelAnswer: "I live with my parents and my older sister. She's at university, but she comes home at weekends." },
      ],
      phase2: [
        { q: 'What are you going to do next weekend?', modelAnswer: "Next weekend I'm going to visit my grandparents in the countryside. I always help my granddad in the garden, and my grandma cooks my favourite dishes." },
        { q: 'Where do you like to go with your friends? (Why?)', modelAnswer: "We like going to the shopping centre near the bus station because there's a cinema and lots of cheap places to eat. We usually watch a film and then have lunch together." },
        { q: 'What do you usually do on your journey to school every day?', modelAnswer: 'I walk to school with my best friend, and on the way we talk about our homework and listen to music. It takes about twenty minutes.' },
        { q: 'Which is your favourite meal of the day? (Why?)', modelAnswer: 'Dinner is my favourite meal because the whole family is together and we have time to talk about our day. My mum also cooks the most delicious food in the evening.' },
        { q: 'Tell us about a relative you like spending time with.', modelAnswer: "I love spending time with my cousin Ming. He's the same age as me, and we play basketball and computer games together every time his family visits us." },
        { q: 'Who is your favourite actor? (Why?)', modelAnswer: "My favourite actor is Jackie Chan because he does his own stunts and his films are funny as well as exciting. I've seen almost all of his action comedies." },
        { q: 'What do you like about the area where you live? (Why?)', modelAnswer: 'There is a big park near my home, so I can go running or cycling there whenever I want. There are also some great noodle restaurants and a new library.' },
        { q: 'Tell us about the people you like visiting.', modelAnswer: 'I like visiting my uncle and aunt because they live near the sea. In summer we swim, build sandcastles and have barbecues on the beach together.' },
      ],
    },
    2: {
      title: 'Part 2 · 个人图片描述',
      duration: '3–5 分钟',
      instruction: "考官给每位考生一张照片，各自单独描述约一分钟（人物、地点、照片中的其他事物）。考官台词：Now, I'd like each of you to talk on your own about something. I'm going to give each of you a photograph and I'd like you to talk about it. A, here is your photograph. It shows some friends meeting. (See page C5.) B, you just listen. A, please tell us what you can see in the photograph. B, here is your photograph. It shows people doing something together in winter. (See page C6.) A, you just listen. B, please tell us what you can see in the photograph.",
      photos: [
        {
          label: 'A',
          topic: 'some friends meeting',
          image: '/images/pet/speaking/trainer1/test-6/photo-a.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see four young women sitting round a small round table outside a café. They are leaning towards each other and smiling, and they are all looking at a tablet together, so they seem to be really good friends.
The girl on the left has long curly hair and is wearing a colourful cardigan, and the girl on the right is wearing a woolly hat and a scarf, so the weather is probably quite cool.
They are in a city street, because behind them I can see tall old buildings and other tables and chairs. On the table there are white cups of coffee and a glass of orange juice.
They look very relaxed and happy, and they are obviously enjoying meeting each other.`,
        },
        {
          label: 'B',
          topic: 'people doing something together in winter',
          image: '/images/pet/speaking/trainer1/test-6/photo-b.png',
          points: ['谈谈人物', '谈谈地点', '谈谈照片中的其他事物'],
          modelAnswer: `In this photograph I can see several people ice skating on a frozen lake in winter. In the middle, a child in a red jacket and a black hat has fallen down on the ice, and another person in a striped jacket and a pink hat is bending over to help her up.
On the left, a woman in a black jacket and jeans is skating towards them and reaching out her hand, so everyone is helping each other. They are all wearing warm winter clothes and ice skates.
In the background I can see snowy mountains and a grey winter sky, and the ice looks completely frozen.
It must be very cold, but the people seem to be having great fun together.`,
        },
      ],
    },
    3: {
      title: 'Part 3 · 协作讨论',
      duration: '4–5 分钟',
      situation: 'A school would like to organise a talent show for students. The school wants to give a prize to the winner of the talent show.',
      instruction: 'Here are some prizes the school could give to the winner. Talk together about the different prizes the school could give to the winner of the talent show and say which would be best. All right? Now, talk together.',
      image: '/images/pet/speaking/trainer1/test-6/task.png',
      options: ['电子阅读器', '奖杯', '纪念T恤', '一束鲜花', '现金', '演出门票'],
      modelDialogue: `A: The school wants to give a prize to the winner of the talent show. Which of these prizes do you think would be best?
B: Well, the trophy is quite traditional for competitions, and the winner could keep it and show it to their family, but it doesn't cost very much.
A: That's true. The e-reader would be really useful because students could download lots of books and read them anywhere.
B: Good idea. But some students prefer reading paper books, so they might not use it. What about the cash prize?
A: Cash is nice, but maybe it isn't a very special prize from a school. The T-shirt with a star on it is a fun souvenir, though it would probably just stay in a drawer.
B: Yes, I agree. Flowers look beautiful on stage, but they die after a few days.
A: Right. So maybe the tickets are the best choice – the winner could go to a concert or the theatre with a friend and it would be an unforgettable experience.
B: I think so too. Let's say the tickets are the best prize, and the e-reader is a good second option.`,
      tips: [
        '逐个讨论图上六种奖品，每种给出优点或缺点，不要只盯着一两个',
        "用 What about…? / I think… because… / You're right, but… 表达观点并与搭档互动",
        '最后两人要一起说出认为最好的奖品并给出理由',
      ],
    },
    4: {
      title: 'Part 4 · 延伸讨论',
      duration: '3–4 分钟',
      instruction: '考官围绕 Part 3 的话题（才艺表演、比赛与奖品）向两位考生提问并展开讨论。',
      questions: [
        { q: 'Do you ever watch talent shows on television? (Why? / Why not?)', modelAnswer: "Yes, sometimes I watch them with my family at weekends. We enjoy seeing the different performances, and it's fun to guess who will win. But I only watch them when I have finished my homework." },
        { q: 'Do you like taking part in competitions? (Why? / Why not?)', modelAnswer: "Yes, I do, because I enjoy challenging myself and showing what I can do. Last year I took part in an English speech competition and I came third, which made me really proud. Sometimes I feel nervous, but it's a good experience." },
        { q: 'Is there anything that you are really good at? (What is it?)', modelAnswer: "I'm quite good at playing the piano. I've been learning for six years and I practise almost every day. I can play several famous classical pieces, and I sometimes perform at school events." },
        { q: 'If you could learn to do one new thing really well, what would you choose? (Why?)', modelAnswer: "I'd choose cooking, because it's a useful skill for the whole life. If I could cook delicious dishes, I could help my parents at home and surprise my friends with birthday dinners." },
        { q: 'Is it a good idea for schools to give prizes to students for doing well at school? (Why? / Why not?)', modelAnswer: "Yes, I think it's a good idea because prizes make students work harder and show that the school notices their efforts. But schools should also praise students who improve a lot, not only the ones who win first places." },
      ],
    },
  },
}

export const PET_SPEAKING_TRAINER1 = [
  TRAINER1_TEST_1_SPEAKING,
  TRAINER1_TEST_2_SPEAKING,
  TRAINER1_TEST_3_SPEAKING,
  TRAINER1_TEST_4_SPEAKING,
  TRAINER1_TEST_5_SPEAKING,
  TRAINER1_TEST_6_SPEAKING,
]

export default PET_SPEAKING_TRAINER1
