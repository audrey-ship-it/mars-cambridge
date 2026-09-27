// B1 Preliminary for Schools Trainer 1 (2020) · Trainer 1 写作
// 来源: pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf（书内 Teacher's Notes & Keys / Practice Test Key 核对）
// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）
// PET Trainer 1 Test 1 Writing 数据（自动转录，待人工核对）
// 题目来源：pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf
// Test 1 Exam Practice · 书页 30–33（PDF p031–p034）
// Q1（邮件）/ Q2（文章）modelAnswer 照录书内 Sample answer（Teacher's Notes & Keys，书页 188–189）；
// Q3（故事）书内 Sample answer OCR 严重残缺，modelAnswer 为原创教学范文，answerSource 已如实标注。

const TRAINER1_TEST_1_WRITING = {
  meta: {
    id: 'pet-trainer1-1-writing',
    title: 'PET Trainer 1 · Test 1 Writing',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Writing',
    pages: '书页 30–33',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: "书内 Sample answers（Q1/Q2，书页 188–189）；Q3 故事为原创教学范文（依据题目要求撰写）",
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English-speaking friend Jude and the notes you have made.

From: Jude
Subject: Saturday trip to the beach

Hi,
I'm so glad you're coming to the beach with me and my family this Saturday!
        —— Me too!
We want to set off from home by 10 a.m. Can your parents give you a lift to my house?
        —— No, because ...
My mum's going to prepare some food so we can have a barbecue when we're there. We can bring meat or vegetarian food – which would you prefer?
        —— Tell Jude
What activities should we do when we're at the beach?
        —— Suggest ...

See you soon,
Jude

Write your email to Jude using all the notes.`,
      modelAnswer: `Hi Jude
I can't wait to go to the beach with you this Saturday! I'm really sorry, but my parents can't give me a lift to your place before 10 o'clock. They always go to my grandparents' house really early on Saturday mornings. Could you pick me up on your way to the beach?
A barbecue sounds amazing! I don't really like meat, so I'd rather have something vegetarian. Thank you for asking!
After we get tired of swimming in the sea, why don't we play some badminton? I'll bring an extra racket just in case you need one.
See you on Saturday,
Riley`,
      tips: [
        "四个批注必须全部回应：高兴同意（Me too!）、解释父母不能送的原因并请 Jude 顺路接、说明荤素偏好、建议沙滩活动",
        "拒绝/抱歉时先说 I'm really sorry, but …，再用 Could you pick me up…? 提出请求",
        "食物偏好用 I'd rather have … 说明并礼貌致谢",
        "建议活动用 Why don't we …? / Shall we …?，注意邮件格式与署名，100 词左右",
      ],
      contentKeywords: ['hi', "can't wait", 'sorry', 'before 10', 'pick me up', "i'd rather", 'vegetarian', 'barbecue', 'why don\'t we', 'badminton', 'racket', 'see you on saturday'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice in your school English-language magazine.

Articles wanted!

FRIENDSHIP

Write an article telling us how important it is for friends to have similar characters.
Do you think it's better to have lots of friends or just one best friend? Why?

The best articles answering these questions will be published next month.

Write your article.`,
      modelAnswer: `In my opinion, friendship is something everyone should value and respect.
In my experience, it is far more important to have friends who you can trust rather than friends who are similar in character.
A good friend will be happy to help you whenever you have a problem or need some advice, but good friends also expect you to help them too.
Not everyone shares my view, but I prefer to have one best friend who I can rely on instead of having loads of friends. When you have lots of 'best friends', they'll never get to know you as well as when you have just one close friend.`,
      tips: [
        '两个问题都要回答：朋友性格相似有多重要、很多朋友还是一个挚友',
        '观点类文章用 In my opinion / In my experience 引出个人看法，并说明理由',
        '用对比展开：互相信任帮助 vs 性格相似；loads of friends vs one close friend',
        '100 词左右，分 2–3 段，多用自己的话而不要照抄题目原句',
      ],
      contentKeywords: ['friendship', 'in my opinion', 'in my experience', 'trust', 'similar', 'character', 'best friend', 'rely on', 'help', 'advice', 'not everyone shares my view', 'one close friend'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Morgan couldn't wait any longer to see what was inside the ancient box.

Write your story.`,
      modelAnswer: `Morgan couldn't wait any longer to see what was inside the ancient box.
She had found it that morning, hidden at the back of her grandmother's attic under a pile of old blankets. The box was covered in dust, and strange marks were carved into the lid.
Morgan lifted the heavy lid slowly. Inside, on a piece of yellow silk, lay a silver necklace with a small blue stone. Under it there was a note: 'For my dear granddaughter, on her sixteenth birthday.'
Morgan's eyes filled with tears. Her grandmother had died two years ago, but she had left this present for her, together with a letter full of love and happy memories.
Morgan put on the necklace and smiled. It was the best gift she had ever received.`,
      tips: [
        '必须以给定句子开头，不能改动',
        '用一般过去时按时间顺序写，可用过去完成时交代盒子的来历',
        '写清盒子里是什么、怎么发现的、结局感受',
        '加入感受与细节（dust、silk、tears），100 词左右',
      ],
      contentKeywords: ['morgan', 'ancient box', 'attic', 'dust', 'lid', 'necklace', 'silver', 'note', 'grandmother', 'birthday', 'tears', 'smiled'],
    },
  ],
}

// PET Trainer 1 Test 2 Writing 数据（自动转录，待人工核对）
// 题目来源：pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf
// Exam Practice Test 2 · 书页 72–75（PDF 页 73–76），题目文字已对照页面渲染图核对
// modelAnswer 均为书内 Teacher's Notes & Keys 提供的 Sample answer（书页 204–205），非原创

const TRAINER1_TEST_2_WRITING = {
  meta: {
    id: 'pet-trainer1-2-writing',
    title: 'PET Trainer 1 · Test 2 Writing',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Writing',
    pages: '书页 72–75',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '书内 Sample answer（Teacher\'s Notes & Keys，书页 204–205）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English teacher and the notes you have made.

From: Mr Mitchem
Subject: New school English-language magazine

Dear Students
I'm planning to set up a new school English-language magazine. Would any of you like to help?
        —— Yes!
I can arrange a meeting about the magazine on either Tuesday or Thursday afternoon next week. Which do you think would be the best day?
        —— Explain which is best
Before you come to the meeting, can you please let me know which school activity you would like to write an article about?
        —— Tell Mr Mitchem
Apart from articles on different topics, is there anything else we should include in the magazine?
        —— Suggest ...

Best wishes,
Mr Mitchem

Write your email to Mr Mitchem using all the notes.`,
      modelAnswer: `Dear Mr Mitchem
Thank you for inviting me to help with the new English-language magazine. One day I would like to be a journalist, so I'm really looking forward to this exciting opportunity.
In my opinion, I feel more students would be more likely to come to a meeting on Tuesday because there is a school charity event next Thursday.
I would love to write an article about the school football team's recent matches.
I think many students would like to have an advice section in the school magazine. Then we could publish answers to their various questions.
Best wishes,
Rory`,
      tips: [
        '四个批注必须全部回应：答应帮忙、解释哪天最好、说明想写哪个校园活动的文章、建议杂志还可增加的内容',
        '这是写给老师的半正式邮件：用 Dear Mr Mitchem 开头、Best wishes 结尾，避免 Hi/Bye 等过于随意的表达',
        '解释周二更好的理由要具体（如避开周四的慈善活动）',
        '每个要点单独成段，100 词左右',
      ],
      contentKeywords: ['dear mr mitchem', 'thank you', 'tuesday', 'thursday', 'because', 'meeting', 'article', 'write about', 'advice section', 'include', 'best wishes', 'students'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice on an international English website for young people.

Articles wanted!

PLAYING GAMES

Write an article telling us which kind of games you think are more interesting to play: board games or video games.
What can people learn from playing games?
The best article answering these questions will be published next month.

Write your article.`,
      modelAnswer: `People around the world have enjoyed playing games for centuries. Nowadays, many people enjoy playing video games, but I definitely prefer playing board games when I have free time.
In fact, there's a popular board game café in town called The Dice Cup. My friends have been meeting there on Saturday mornings ever since it opened up two years ago. We love trying different board games there because it has over a hundred games to choose from.
Now that I play games regularly, I've learnt how to be good at both winning and losing. In my opinion, playing games is about enjoying the experience of having a great time with friends rather than winning.`,
      tips: [
        '两个问题都要回答：桌游和电子游戏哪个更有趣、人们能从游戏中学到什么',
        '文章要求表达个人观点，可用 I definitely prefer / In my opinion / I think 等第一人称表达',
        '用具体例子支撑观点（如桌游咖啡馆、输赢心态）',
        '每段聚焦一个要点，100 词左右',
      ],
      contentKeywords: ['board games', 'video games', 'prefer', 'playing games', 'learn', 'winning', 'losing', 'friends', 'in my opinion', 'free time', 'café', 'experience'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

The friends found a strange old map under the bed.

Write your story.`,
      modelAnswer: `The friends found a strange old map under the bed. They had been staring at the ancient map for an hour when Thomas shouted, 'I know the exact location of this map. Look at this tree!'
Thomas pointed to the bottom corner of the map to an unusual-looking tree. The friends agreed with him, the tree looked very similar to one at the skateboard park.
They hurried there and began digging. After several hours, and just as they were about to give up, they saw a leather bag buried deep beneath the ground. They opened it excitedly to discover that it was filled with hundreds of old gold coins!`,
      tips: [
        '必须以给定句子开头，不能改动（关键词：friends, strange, map, bed）',
        '按时间顺序推进：研究地图 → 找到地点 → 挖掘 → 发现宝物',
        '使用过去完成时（had been staring）表现事件先后关系',
        '结尾写出发现的结果，加入兴奋的情绪，100 词左右',
      ],
      contentKeywords: ['friends', 'map', 'bed', 'ancient', 'tree', 'skateboard park', 'digging', 'leather bag', 'gold coins', 'shouted', 'hurried', 'discovered'],
    },
  ],
}

// PET Trainer 1 Test 3 Writing 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 3 · PDF 页 105–106（书页 104–105）
// modelAnswer 采用书内 Sample answer（PDF 页 215 / 书页 214），非原创
const TRAINER1_TEST_3_WRITING = {
  meta: {
    id: 'pet-trainer1-3-writing',
    title: 'PET Trainer 1 · Test 3 Writing',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Writing',
    pages: '书页 104–105',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '书内 Sample answer（书页 214）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `You must answer this question. Write your answer in about 100 words on your answer sheet.

Question 1
Read this email from your English friend Teri and the notes you have made.

From: Teri
Subject: Learning a language

Hi

I'm excited because next month I'm starting my beginners' classes to learn your language! I've never studied a foreign language before – thanks for agreeing to meet to give me some ideas.
        —— No problem ...
Are you free next Thursday afternoon after school?
        —— Sorry, but ...
My parents say they'll buy me a dictionary to help me learn new vocabulary, and perhaps some videos. Do you think that's a good idea?
        —— Advise Teri
You said that you would help me sometimes after I start my classes. Can you still do that?
        —— Offer ...

Bye,
Teri

Write your email to Teri using all the notes.`,
      modelAnswer: `Hi Teri
Nice to hear from you. I'd love to meet you so I can tell you about how I learn English.
Unfortunately I can't see you on Thursday because I have a doctor's appointment – but how about Wednesday? Why don't you come to my house and we can have a snack, too?
If I were you, I wouldn't buy anything yet. I'd ask the teacher first. Perhaps he or she will recommend some books to buy.
I think you are going to learn my language very quickly. It will be fun to speak to you in Portuguese! I'll teach you a Portuguese song!
Hope to see you next week?
Ines`,
      tips: [
        '四个批注都要回应：接受见面邀约、对周四之约给出替代安排、就买词典和视频给出建议、答应之后提供帮助',
        '拒绝或改期时先说明原因，再用 How about / Why don\'t you 提出新方案',
        '提建议可用 If I were you, I\'d ... / Perhaps ... 句式，并说明理由',
        '语气友好，多用缩写形式，100 词左右，结尾署名',
      ],
      contentKeywords: ['hi teri', 'nice to hear from you', "i'd love to meet you", "can't see you on thursday", 'how about wednesday', "why don't you", "if i were you", "i'd ask the teacher", 'recommend', 'portuguese', "i'll teach you", 'hope to see you'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `Choose one of these questions. Write your answer in about 100 words on the answer sheet.

Question 2
You see this notice in your school English-language magazine.

Articles wanted!

BEING HEALTHY

Write an article about young people and healthy living.

Is it important for young people to do sport and to keep fit? Why?
What are some fun ways to stay healthy?

The best articles answering these questions will be published next month.

Write your article.`,
      modelAnswer: `Being healthy is important for teenagers and kids because they need lots of energy for studying and for having fun. Before I joined the school football team, I hardly ever did any exercise apart from walking to school. Now I go to football practice twice a week and I really enjoy training hard on the pitch.
In my opinion, eating healthy food is also a great way to make sure I stay healthy. For example, I eat fresh fruit when I want a snack. To be honest, I feel much healthier now that I've reduced the amount of junk food I eat.`,
      tips: [
        '文章要回答 notice 里的两个问题：为什么运动和保持健康对年轻人重要、有哪些有趣的健康方式',
        '用自己加入校队前后的对比作例子，更有说服力',
        '健康饮食也是好角度，用 For example / In my opinion 组织段落',
        '100 词左右，可加一个简短标题，内容要扣题',
      ],
      contentKeywords: ['being healthy', 'important', 'energy', 'school football team', 'exercise', 'football practice', 'healthy food', 'fresh fruit', 'snack', 'junk food', 'feel healthier', 'in my opinion'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Question 3
Your English teacher has asked you to write a story.
Your story must begin with this sentence:

It was my turn to go on stage to perform in the talent competition.

Write your story.`,
      modelAnswer: `It was my turn to go on stage to perform in the talent competition. As I smiled at the three judges, I secretly felt like running off the stage! Instead, I got out my guitar and began singing the song I'd practised hundreds of times and soon I forgot that anyone was listening to me. Once I'd finished singing, then the longest ten seconds of my life took place while the judges quietly discussed something. Finally, one of the judges asked me who wrote the song. When I told them that it was me who wrote it, they all smiled and began clapping!`,
      tips: [
        '必须以给定句子开头，不能改动句子本身',
        '按时间顺序展开：上台前的心情 → 表演过程 → 评委反应和结局',
        '加入心理与细节描写（如 like running off the stage、practised hundreds of times）让故事生动',
        '用好一般过去时和过去完成时，100 词左右',
      ],
      contentKeywords: ['talent competition', 'on stage', 'perform', 'judges', 'felt like running off', 'guitar', 'singing', 'song', "i'd practised", 'finished singing', 'who wrote the song', 'began clapping'],
    },
  ],
}

// PET Trainer 1 Test 4 Writing 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 4 · 书页 122–123（PDF 页 123–124）
// modelAnswer 为书内 Practice Test Key · Test 4 的官方 Sample answer（书页 215 / PDF 页 216），逐字转录。
// tips / contentKeywords 为转录时补充的中文教学提示，非书内内容。

const TRAINER1_TEST_4_WRITING = {
  meta: {
    id: 'pet-trainer1-4-writing',
    title: 'PET Trainer 1 · Test 4 Writing',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Writing',
    pages: '书页 122–123',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '书内 Sample answer（书页 215）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English-speaking friend Corey and the notes you have made.

From: Corey
Subject: Science festival

Hi
I've got our tickets for the science festival this Saturday!
        —— Great!
My cousin said that we can pick you up on the way there or we could meet at the front entrance. What would be best for you?
        —— Tell Corey…
For the two main activities, we've got to decide if we want to build a robot or watch the Discovering Dinosaurs film because they're happening at the same time. I think the film would be more interesting – don't you?
        —— Disagree
Don't forget to bring a bit of pocket money with you since we'll be there all day. Do you think we should bring anything else?
        —— Suggest

Bye,
Corey

Write your email to Corey using all the notes.`,
      modelAnswer: `Hi
Thanks for getting me a ticket for the science festival. I'm really excited about going to it!
Don't worry about picking me up, my dad can drive me to the festival. I'll meet you outside the front entrance at 10 a.m.
I really don't want to watch a film about dinosaurs for the main activity. I'd rather build a robot because I've never done that before.
Thanks very much for reminding me about the money. I can bring my phone to take photos, but maybe you could bring yours too in case I run out of battery during the day.
See you on Saturday,
Reese`,
      tips: [
        '四个批注必须全部回应：表达收到票很开心（Great!）、告诉 Corey 见面方式（Tell Corey…）、不同意看电影并说明想做什么（Disagree）、回应钱和其他要带的东西（Suggest）',
        '见面方式二选一要给出明确决定：让表哥来接 或 在正门入口碰头，并补充具体时间',
        'Disagree 不能只说 no，要用 I\'d rather… because… 给出理由（如从没做过机器人）',
        '结尾回应带钱提醒并建议再带一样东西（如手机/相机），100 词左右',
      ],
      contentKeywords: ['hi', 'thanks', 'ticket', 'science festival', 'excited', 'picking me up', 'dad', 'front entrance', "i'd rather", 'build a robot', 'never done that before', 'pocket money', 'phone', 'photos', 'battery', 'see you on saturday'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice on an international English website for young people.

Articles wanted!
FESTIVALS
Write an article telling us about a festival that you or your family celebrate. When does the festival take place, and what happens? What do you like about it?
The best articles answering these questions will be published next month.

Write your article.`,
      modelAnswer: `My family always looks forward to our village autumn festival, which takes place one weekend every September. Many villages in my country have a similar festival to celebrate a particular food that they produce, and for us it is the mushroom! The main event of our festival consists of a huge meal cooked in the open air and afterwards a dance.
There is also a competition for all the children, where they dress up as famous characters and walk around the streets. What I like most is that it is a festival for all ages, from tiny children to ancient great-grandparents. All the neighbours come out of their houses and have fun together.`,
      tips: [
        '三个问题都要回答：节日的时间、当天有什么活动、你喜欢它的原因',
        '可以像书内样文一样选一个具体节日（村庄秋收节），点明庆祝的食物或主题',
        '活动部分写两三个具体场景（露天大餐、跳舞、儿童化装比赛）更有画面感',
        '结尾落到喜欢的原因（老少同乐、邻里相聚），100 词左右',
      ],
      contentKeywords: ['village autumn festival', 'september', 'celebrate', 'mushroom', 'huge meal', 'open air', 'dance', 'competition', 'children', 'dress up', 'all ages', 'neighbours', 'have fun together'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story. Your story must begin with this sentence:

As my friend and I arrived at school yesterday morning, we saw something incredible!

Write your story.`,
      modelAnswer: `As my friend and I arrived at school yesterday morning, we saw something incredible! A huge dinosaur was sleeping in the middle of the playground! We couldn't believe our eyes. Although we were very frightened, we decided to quietly approach it. Just as we reached the dinosaur's giant head, it opened its big yellow eyes. We were so terrified we couldn't move! Then the dinosaur opened its mouth and we saw its long sharp teeth shining in the morning sun. We were about to start running when we heard somebody cry 'It's Dinosaur Day today!' We started laughing as we realised that the dinosaur wasn't real!`,
      tips: [
        '必须以给定句子开头，不能改动',
        '开头句后立刻点出"难以置信的东西"是什么（书内样文选了操场上的大恐龙）',
        '按时间顺序展开：靠近 → 恐龙睁眼 → 露出牙齿 → 转折揭晓（Dinosaur Day）',
        '结尾解释真相并写出情绪变化（从害怕到大笑），100 词左右',
      ],
      contentKeywords: ['huge dinosaur', 'sleeping', 'playground', "couldn't believe our eyes", 'frightened', 'approach', 'giant head', 'yellow eyes', 'terrified', 'sharp teeth', 'dinosaur day', "wasn't real", 'laughing'],
    },
  ],
}

// PET Trainer 1 Test 5 Writing 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 5 · 书页 140–141（PDF 页 141–142）
// modelAnswer 为书内 Practice Test Key · Test 5 的官方 Sample answer（书页 216 / PDF 页 217），逐字转录。
// tips / contentKeywords 为转录时补充的中文教学提示，非书内内容。

const TRAINER1_TEST_5_WRITING = {
  meta: {
    id: 'pet-trainer1-5-writing',
    title: 'PET Trainer 1 · Test 5 Writing',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Writing',
    pages: '书页 140–141',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '书内 Sample answer（书页 216）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English-speaking friend Alex and the notes you have made.

From: Alex
Subject: New video game

Hi
My parents gave me some money to buy a video game for my birthday!
        —— Fantastic!
I've got a lot of racing video games, so I'd like to buy a different kind of game for a change. What do you think I should get?
        —— Recommend
I'm allowed to play video games up to two hours a day, but only if I've finished my homework. How long do you get to play games for?
        —— Tell Alex
I'll have the game by this weekend. Are you free to come over to my place to try it out?
        —— No, but…
Bye for now,
Alex

Write your email to Alex using all the notes.`,
      modelAnswer: `Hi Alex
That's really cool that your parents are letting you choose which video game you want to buy as a birthday gift.
You should get a game where you have to keep solving puzzles to reach higher levels. I never get bored of those.
Like you, I only get to play video games after I've finished my homework and only for an hour on school days and for two hours at the weekend.
I'm going camping with my family so I can't come to your place this weekend. How about the following weekend? I'm free in the afternoon.
Bye for now,
Jerry`,
      tips: [
        '四个批注必须全部回应：夸生日礼物、推荐游戏类型、说明自己每天玩多久、婉拒本周末并另约时间',
        '推荐时给出理由（解谜游戏一关接一关不会腻），与 Alex 已有 many racing games 形成对比',
        '婉拒先说原因（和家人去露营），再用 How about… 提出下周末的替代方案',
        '用 Hi Alex / Bye for now 呼应开头结尾，约 100 词',
      ],
      contentKeywords: ['hi alex', 'birthday', 'gift', 'puzzle', 'solving puzzles', 'recommend', 'homework', 'an hour', 'weekend', 'camping', "can't come", 'how about', 'afternoon', 'bye for now'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice in your school English-language magazine.

Articles wanted!

SHOPPING

Write an article telling us whether you like shopping and where your family usually goes shopping.
Does your family buy things online? Why or why not?

The best articles answering these questions will be published next month.

Write your article.`,
      modelAnswer: `A lot of people enjoy shopping in their free time, but I'd rather do almost anything other than that! As you can tell, I'm not a huge fan of shopping, but that doesn't mean I never go shopping.
In fact, I go grocery shopping with my grandma nearly every week. It's a great way for us to spend some time together and I can help carry any of her heavy bags. My parents usually buy most things that we need in our local market.
My dad buys things online because there is more choice, but mainly for his hobby. He likes ordering fishing equipment on the internet.`,
      tips: [
        '两个问题都要回答：你是否喜欢购物 + 家人通常在哪里购物；家人是否网购 + 原因',
        '开头可以用笼统观点引入，再分人物写（我、父母、爸爸各有分工）',
        '网购原因要具体（选择更多、和爱好相关），可用 mainly for his hobby 这类补充说明',
        '语气可以和杂志读者互动（As you can tell…），约 100 词',
      ],
      contentKeywords: ['shopping', "i'd rather", 'not a huge fan', 'in fact', 'grocery shopping', 'grandma', 'local market', 'online', 'more choice', 'hobby', 'fishing equipment', 'because'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence:

Jasmin was at an exhibition when she noticed something unusual.

Write your story.`,
      modelAnswer: `Jasmin was at an exhibition when she noticed something unusual. She was looking at some extremely expensive necklaces that were once worn by queens many centuries ago, when she noticed the man standing beside her. He was carrying a bag that seemed to move. Then a small monkey climbed out of it and the man quickly walked away.
Jasmin saw the monkey hide under the display just as her parents insisted they move to another area of the exhibition. That's when a loud alarm went off and Jasmin saw the monkey run right past her with a necklace in each hand!`,
      tips: [
        '必须以给定句子 Jasmin was at an exhibition… 开头，不能改动',
        '围绕 unusual 设计情节：会动的包 → 爬出的猴子 → 偷项链，层层推进',
        "用过去进行时交代背景，一般过去时写动作，用 Then / just as / That's when 衔接",
        '结尾可以用感叹句制造悬念，约 100 词',
      ],
      contentKeywords: ['jasmin', 'exhibition', 'unusual', 'necklaces', 'man', 'bag', 'monkey', 'climbed out', 'hide', 'display', 'alarm', 'noticed'],
    },
  ],
}

// PET Trainer 1 Test 6 Writing 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 6 · 书页 158–159（PDF 页 159–160）
// modelAnswer 为书内 Practice Test Key · Test 6 的官方 Sample answer（书页 217 / PDF 页 218），逐字转录。
// tips / contentKeywords 为转录时补充的中文教学提示，非书内内容。

const TRAINER1_TEST_6_WRITING = {
  meta: {
    id: 'pet-trainer1-6-writing',
    title: 'PET Trainer 1 · Test 6 Writing',
    level: 'PET',
    collection: 'PET Trainer 1',
    book: 'B1 Preliminary for Schools Trainer 1 (2020)',
    paper: 'Writing',
    pages: '书页 158–159',
    source: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    answerSource: '书内 Sample answer（书页 217）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English teacher and the notes you have made.

From: Ms Taylor
Subject: New cooking club

Hi,
Thanks for contacting me about my new club. My idea is to help you improve your English while you learn to cook delicious food!
        —— Great!
Could you please let me know if you've cooked much before?
        —— Give details
We could cook foods from English-speaking countries, or we could all bring our favourite recipes from home. What do you think would be better?
        —— Suggest
Are there any foods that we should avoid? I want to choose things that everybody can enjoy eating!
        —— Explain

Best wishes,
Ms Taylor

Write your email to Ms Taylor using all the notes.`,
      modelAnswer: `Dear Ms Taylor
I think your new club is an excellent idea. Sometimes it's much easier to learn new vocabulary when you are doing something instead of sitting still!
I haven't done much cookery before. I know how to cook rice and make a sandwich, but that's all!
I would suggest cooking some famous dishes from Great Britain or the United States. How about making an English cake? It would be interesting to try eating some new things.
I am allergic to nuts so it's essential for me to avoid them completely.
Thank you for asking this important question.
Best wishes,
Bilal`,
      tips: [
        '四个批注必须全部回应：对新社团表示兴趣（Great!）、说明自己的烹饪经验（Give details）、建议做哪类食物并说明理由（Suggest）、说明应避免的食物及原因（Explain）',
        '烹饪经验部分用 I know how to… / but that\'s all! 如实说明水平即可',
        '建议部分可用 How about…? 提出具体菜品，并用 It would be… 补充理由',
        '给老师写信用较礼貌的称呼 Dear Ms Taylor，署名自然，100 词左右',
      ],
      contentKeywords: ['dear ms taylor', 'excellent idea', 'easier to learn', "haven't done much cookery", 'cook rice', 'sandwich', 'suggest', 'dishes', 'how about', 'cake', 'allergic', 'avoid', 'best wishes'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice on an international English website for young people.

MUSIC LOVERS!

Write an article telling us what your favourite kind of music is and when you listen to it. Is music important in your life? Why?
What is the best way to find new songs or artists?
The best articles answering these questions will be published next month.

Write your article.`,
      modelAnswer: `Music is extremely important to me and my life would be so dull without it. Listening to music is what I enjoy most!
I don't have one favourite type of music because I keep discovering new artists and musical styles. I've got thousands of songs on my iPod, so I enjoy anything from rock music that my parents listened to when they were teenagers to the latest pop bands.
If I could afford to go to live concerts, I would go at every opportunity to hear new musicians perform. Instead, I watch music programmes on TV and I regularly search for new music on the internet.`,
      tips: [
        '三个问题都要回答：最喜欢的音乐类型和听音乐的时机、音乐是否重要及原因、发现新歌/新歌手的最佳途径',
        '可以用 If I could…, I would… 这样的第二条件句提升语法亮点（书内样文即如此）',
        '结尾要落到 find new songs or artists 的方法上（如 search on the internet）',
        '文章体裁可用轻松口语化风格，100 词左右',
      ],
      contentKeywords: ['music', 'important', 'dull', 'favourite type', 'new artists', 'ipod', 'rock music', 'pop bands', 'concerts', 'music programmes', 'tv', 'search', 'internet'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

My family and I discovered a cave in the forest and we all decided to go in.

Write your story.`,
      modelAnswer: `My family and I discovered a cave in the forest and we all decided to go in. It was a bad decision! The cave was almost completely hidden by plants, but once we pushed them aside we saw that it went deep into the mountain. My dad got out his torch and we followed him into the dark cave. When he shone his light onto the walls, we saw loads of ancient cave drawings. But that's also when we noticed something extremely large sleeping in the corner. As soon as we realised it was a black bear, we ran towards the entrance of the cave and never returned there again.`,
      tips: [
        '必须以给定句子开头，不能改动',
        '开头句后立刻制造悬念（如 It was a bad decision!），再按时间顺序展开',
        '写清发现过程（torch、dark cave）、看到的奇景（cave drawings）和惊险转折（black bear）',
        '结尾给出结果和感受（逃出洞穴、再也不去），100 词左右',
      ],
      contentKeywords: ['cave', 'forest', 'bad decision', 'hidden', 'plants', 'mountain', 'torch', 'dark', 'cave drawings', 'large', 'black bear', 'ran', 'entrance', 'never returned'],
    },
  ],
}

export const PET_WRITING_TRAINER1 = [
  TRAINER1_TEST_1_WRITING,
  TRAINER1_TEST_2_WRITING,
  TRAINER1_TEST_3_WRITING,
  TRAINER1_TEST_4_WRITING,
  TRAINER1_TEST_5_WRITING,
  TRAINER1_TEST_6_WRITING,
]

export default PET_WRITING_TRAINER1
