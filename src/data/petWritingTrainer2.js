// B1 Preliminary for Schools Trainer 2 (2024) · Trainer 2 写作
// 来源: PET Trainer2/PET Trainer2 电子版.pdf（书内 Teacher's Notes & Keys / Practice Test Keys 核对）
// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）
// PET Trainer 2 Test 1 Writing 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 1 Exam Practice · 书页 28–33（PDF p029–p034）
// Exam Practice 帧：Part 1（Q1 Jessie 邮件）在书页 30 / PDF p031；Part 2（Q2 文章 / Q3 故事）在书页 33 / PDF p034
// prompt（邮件/批注/题目文字）照录书内 Exam Practice 帧；modelAnswer 为原创 B1 教学范文
// （严格对应四个批注/两个问题，署名 Li Hua），非书内官方 Sample answer。

const TRAINER2_TEST_1_WRITING = {
  meta: {
    id: 'pet-trainer2-1-writing',
    title: 'PET Trainer 2 · Test 1 Writing',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Writing',
    pages: '书页 28–33（Exam Practice：书页 30、33）',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English-speaking friend Jessie and the notes you have made.

From: Jessie
Subject: Sunday

Hi,
I'm so happy that you're coming to the annual Beach Clean this Sunday!
        —— Me too!
We're supposed to arrive at the beach by 11 am. We could ride our bikes or catch the bus there — which would you prefer?
        —— Tell Jessie
We'll spend a few hours picking up litter. Do you think we should post photos of the event on social media?
        —— Yes, because ...
I'm sure we'll be hungry afterwards. Should we get a snack somewhere?
        —— Suggest ...

Bye for now,
Jessie

Write your email to Jessie using all the notes.`,
      modelAnswer: `Hi Jessie
I can't wait for the Beach Clean this Sunday! I'm really glad you asked me to come.
About getting there, I'd prefer to ride our bikes. The bus gets crowded on Sunday mornings, and cycling is quicker and better for the environment.
Yes, I think we should post photos of the event on social media, because it's a great way to show everyone how much litter we can collect in one afternoon. It might encourage more people to protect our beach.
For the snack, why don't we try the little café near the beach? They make tasty sandwiches and fresh juice.
See you on Sunday,
Li Hua`,
      tips: [
        '四个批注必须全部回应：表达期待（Me too!）、告知骑车还是坐车（Tell Jessie）、回答是否发照片并说明原因（Yes, because ...）、提出吃点心的建议（Suggest ...）',
        '表达偏好用 I\'d prefer to ...，并用 because / The bus gets crowded 等补充理由',
        '提建议用 Why don\'t we ...? / Let\'s ...，语气自然、符合朋友间邮件风格',
        '邮件格式完整：称呼 Hi Jessie、分段正文、结尾 See you on Sunday 与署名，100 词左右',
      ],
      contentKeywords: ['hi jessie', "can't wait", "i'd prefer", 'ride our bikes', 'bus', 'because', 'photos', 'social media', 'encourage', 'café', 'sandwiches', 'see you on sunday'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice on an English-language website.

Articles wanted!

SOCIAL MEDIA

Millions of young people use social media every day.
Does it matter how much time you spend on social media? Why?
What do you like and dislike about social media?

The best article will be published on our website!

Write your article.`,
      modelAnswer: `It's easy to spend hours on social media without noticing, so I think the time we spend on it really matters. That's why I only go online after I finish my homework.
My favourite thing about social media is chatting with my cousins who live abroad and sharing photos with my classmates. However, I really dislike it when people post unkind comments just to get followers.
In my opinion, social media is useful if we control the time we spend on it, instead of letting it control us.`,
      tips: [
        '两个问题都要回答：花在社交媒体上的时间是否重要及原因、喜欢和不喜欢的地方',
        '观点类文章用 I think / In my opinion 引出看法，用 However / Instead of 做对比',
        '用 Firstly / For instance 等连接词让文章结构清晰，题目问题要用自己的话回答',
        '分 2–3 段，约 100 词，结尾给出明确观点',
      ],
      contentKeywords: ['social media', 'time', 'homework', 'chatting', 'cousins', 'photos', 'unkind comments', 'followers', 'however', 'in my opinion', 'useful'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

They jumped up and down with excitement when they heard the news.

Write your story.`,
      modelAnswer: `They jumped up and down with excitement when they heard the news. Their school football team had reached the final!
Anna and her classmates immediately started planning the trip to the match. The stadium was three hours away by coach, and they all needed permission from their parents first. Luckily, everyone said yes.
On the day of the final it rained heavily, but nobody cared. The game was very close, and in the last minute Anna's brother scored the winning goal. Everybody cheered loudly.
On the way home the team sang songs the whole time. It was the best day of the school year.`,
      tips: [
        '必须以给定句子开头，不能改动',
        '先交代"消息"是什么（球队进入决赛），再按时间顺序展开：计划行程 → 比赛当天 → 结果',
        '以一般过去时为主，注意不规则动词；加入天气、感受等细节让故事生动',
        '结尾点明感受（the best day ...），100 词左右，有清晰的开始、发展和结尾',
      ],
      contentKeywords: ['football team', 'final', 'coach', 'permission', 'parents', 'rained', 'winning goal', 'cheered', 'sang songs', 'best day'],
    },
  ],
}

// PET Trainer 2 Test 2 Writing 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 2 Exam Practice · 书页 72–75（PDF p073–p076，仅录 Exam Practice 帧）
// Q1 邮件原文/批注已对照页面渲染图（p073）核对；Q2 文章 / Q3 故事为二选一，两条都录
// modelAnswer 均为原创 B1 教学范文（对应题目批注/问题撰写，署名 Li Hua），非官方答案

const TRAINER2_TEST_2_WRITING = {
  meta: {
    id: 'pet-trainer2-2-writing',
    title: 'PET Trainer 2 · Test 2 Writing',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Writing',
    pages: '书页 72–75（Exam Practice）',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English teacher and the notes you have made.

From: Mr Anderson
Subject: Opportunity to live and study abroad

Dear Students
Would you like the opportunity to study and live in a different country for six months? There are many countries where you could do this. Where would you most like to go?
        —— Of course!
        —— Say where
Why are you interested in living and studying abroad?
        —— Explain
This will help me decide which students will take part
Please let me know if you have any questions about this opportunity
        —— Ask Mr Anderson
Kind regards,
Mr Anderson

Write your email to Mr Anderson using all the notes.`,
      modelAnswer: `Dear Mr Anderson
Thank you for your email. Of course I would love to study abroad for six months! The country I would most like to go to is Canada, because my uncle lives there and I could stay with his family.
I am interested in living and studying abroad because I want to experience a new culture and become more independent. I would also like to improve my English by using it every day, and to make friends with students from other countries.
Could you please tell me how much the programme costs? I would also like to know when we will find out who has been chosen.
Kind regards,
Li Hua`,
      tips: [
        '四个批注都要回应：Of course! 表热情同意、写明最想去的国家、解释留学原因、向 Mr Anderson 提问',
        '写给老师用正式语体：开头 Dear Mr Anderson，结尾 Kind regards，避免 Hey 等口语表达',
        '解释原因时给 2–3 个理由（体验文化、变独立、练英语、交朋友），用 also / and 连接',
        '结尾用 Could you please tell me…? 礼貌提问（费用、选拔时间等），全文约 100 词',
      ],
      contentKeywords: ['mr anderson', 'of course', 'six months', 'canada', 'experience a new culture', 'more independent', 'improve my english', 'make friends', 'could you please tell me', 'cost', 'kind regards', 'li hua'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice on an English website for young people.

Articles wanted!

WORLD NEWS

Where do you like to get your news from?
Do you think knowing what is happening in the world is important? Why?

The best articles answering these questions will appear on our website.

Write your article.`,
      modelAnswer: `How I find out about world news
I usually get my news from my phone. There are two news apps on it, and they send me short stories every morning. At the weekend I also watch the news on TV with my dad, and we often discuss the big stories over breakfast.
In my opinion, knowing what is happening in the world is very important. First, it helps us understand people whose lives are different from ours. Second, the news can affect us directly – for example, when the weather or prices change. Finally, if you know about world events, it is much easier to join conversations with adults and friends!`,
      tips: [
        '给文章起个小标题，两个问题都要回答：从哪里获取新闻、了解世界大事是否重要及原因',
        '说明重要性时用 First / Second / Finally 列出 2–3 个理由，并至少举一个具体例子',
        '用第一人称写作，观点用 In my opinion 引出，语气自然',
        '100 词左右，分 2–3 段，多用自己的话，不要照抄通知里的原句',
      ],
      contentKeywords: ['world news', 'news apps', 'phone', 'watch the news', 'in my opinion', 'important', 'understand people', 'affect us', 'example', 'conversations'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

I was so excited when I arrived at the music festival.

Write your story.`,
      modelAnswer: `I was so excited when I arrived at the music festival. Colourful flags were hanging above the gates, and I could already hear my favourite band practising on the main stage.
First, my friend Leo and I bought some chips and walked around the food stalls. Then we ran to the stage, because the first concert was starting. We sang every song, and when the singer smiled at our banner, Leo took a photo of me jumping in the air!
By the evening my feet hurt and my voice was gone, but I didn't care. While we were waiting for the bus home, Leo and I agreed that it was the best day of the summer.`,
      tips: [
        '必须以给定句子开头，不能改动',
        '按时间顺序展开：到达 → 逛小吃摊 → 看演出 → 回家，可用 First / Then / By the evening',
        '混合使用过去时：一般过去时叙事、过去进行时写背景（were hanging），结尾写感受',
        '100 词左右，加入细节（flags、banner、photo）让故事生动',
      ],
      contentKeywords: ['music festival', 'excited', 'arrived', 'flags', 'main stage', 'food stalls', 'concert', 'sang', 'singer', 'photo', 'bus home', 'best day'],
    },
  ],
}

// PET Trainer 2 Test 3 Writing 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf（Test 3 Writing，书页 104–105 / PDF p105–p106）
// 题干照录书内原文；modelAnswer 为原创教学参考答案（非官方答案），依据各题批注/问题要求撰写。

const TRAINER2_TEST_3_WRITING = {
  meta: {
    id: 'pet-trainer2-3-writing',
    title: 'PET Trainer 2 · Test 3 Writing',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Writing',
    pages: '书页 104–105',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English-speaking friend and the notes you have made.

From: René
Subject: Family day trip

Hi,
My family's visiting a local wildlife park that protects rare animals this Saturday.
        —— Wonderful!
My parents said I could invite a friend. Would you like to come?
        —— Yes, because ...
There are a lot of rare animal species at the park. Which rare animal are you most excited to see?
        —— Say which ...
The wildlife park is about 5 km away, so my parents said we could catch the bus or cycle there. Which do you prefer?
        —— Tell René ...
Bye for now,
René

Write your email to René using all the notes.`,
      modelAnswer: `Hi René
Wonderful news! I'd love to come to the wildlife park with you on Saturday.
Yes, please! I really want to visit because I'm interested in rare animals, and I've never been to a park that protects them before.
I'm most excited about seeing the tigers. They're my favourite animals, and it must be special to watch them so closely.
As for how we get there, I'd prefer to cycle. Five kilometres is no problem for me, and riding together will be much more fun than sitting on a bus.
See you on Saturday!
Li Hua`,
      tips: [
        '四个批注必须全部回应：为收到邀请感到高兴（Wonderful!）、接受邀请并说明原因、说出最想看的动物、告诉 René 坐公交还是骑车',
        "接受邀请用 I'd love to come / Yes, please!，原因用 because 引出",
        "表达最想看的动物用 I'm most excited about seeing …，并补一句理由让内容更充实",
        "说明交通偏好用 I'd prefer to …，可对比坐公交的感受；注意邮件格式与署名，约 100 词",
      ],
      contentKeywords: ['hi', "i'd love to", 'wonderful', 'because', 'rare animals', 'tigers', 'excited', 'cycle', "i'd prefer", 'bus', '5 km', 'see you on saturday'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice on an English-language website for young people.

Articles wanted!

NEW YEAR CELEBRATIONS

Every year, people around the world take part in New Year celebrations.
• How do people in your country usually celebrate New Year?
• How important is it for you and your family to celebrate New Year? Why?

The best articles answering these questions will be published next month.

Write your article.`,
      modelAnswer: `In my country, the biggest New Year celebration comes in spring, and our family always spends it together.
Before the festival, we clean the whole house and put up red decorations. On New Year's Eve, all my relatives meet at my grandparents' home for a huge dinner. Afterwards, the adults give the children red envelopes with money inside, and we stay up late to watch fireworks.
Celebrating New Year is very important to us because it brings the whole family together. Everyone is busy during the year, so this special time reminds us where we come from and gives us good luck for the year ahead.`,
      tips: [
        '两个问题都必须回答：你们国家通常怎么庆祝新年、庆祝新年对你和家人有多重要以及原因',
        "用一般现在时描述习俗，可用 Before the festival… / On New Year's Eve… 按时间顺序展开",
        '重要性一段要给出理由，如家人团聚、辞旧迎新、祈愿好运',
        '分 2–3 段，约 100 词，多用自己的话而不要照抄题目原句',
      ],
      contentKeywords: ['new year', 'celebration', 'clean the house', 'decorations', "new year's eve", 'dinner', 'relatives', 'red envelopes', 'fireworks', 'important', 'family', 'good luck'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

The two friends couldn't believe their luck!

Write your story.`,
      modelAnswer: `The two friends couldn't believe their luck!
Leo and Max had entered a cooking competition at their school's summer fair, and they had just won first prize: a morning in a famous restaurant, cooking with its head chef.
'This is amazing,' said Max, grinning from ear to ear.
On Monday, the boys put on tall white hats and spent two hours in the restaurant kitchen. The chef taught them how to make fresh pasta, and they tasted everything they prepared. It was the most delicious lunch they had ever had.
When they got home, they were tired but proud. 'Next year,' Leo laughed, 'we're going to win again!'`,
      tips: [
        '必须以给定句子开头，不能改动',
        "先交代\"运气\"是什么（获奖/见到名人/得到机会），再按时间顺序展开",
        '用一般过去时叙事，可加一句直接引语让故事更生动',
        '结尾写感受或展望，约 100 词',
      ],
      contentKeywords: ['two friends', "couldn't believe their luck", 'competition', 'prize', 'restaurant', 'chef', 'kitchen', 'pasta', 'taste', 'delicious', 'tired', 'proud'],
    },
  ],
}

// B1 Preliminary for Schools Trainer 2 (2024) · Trainer 2 写作
// PET Trainer 2 Test 4 Writing 数据（自动转录，待人工核对）
// 题目来源：PET Trainer2/PET Trainer2 电子版.pdf
// Test 4 完整套卷（无 Training 页）· 书页 122–123（PDF 页 123–124），题目文字已对照页面渲染图核对
// 答案来源：书内 Practice Test Key（书页 221 / PDF 页 222）含 Sample answer，但本文件 modelAnswer
// 为原创教学范文（严格对应题目批注/问题，署名 Li Hua），answerSource 已如实标注。

const TRAINER2_TEST_4_WRITING = {
  meta: {
    id: 'pet-trainer2-4-writing',
    title: 'PET Trainer 2 · Test 4 Writing',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Writing',
    pages: '书页 122–123',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English teacher, Mrs Rashid, and the notes you have made.

From: Mrs Rashid
Subject: School play

Dear students,
At the end of the school year, students always put on a school play.
        —— Fantastic!
I want to know what type of play you think we should do this year.
        —— Suggest ...
There is a lot of work involved with putting on a play. Some students will act while others will help make the costumes – which of these jobs interests you?
        —— Tell Mrs Rashid ...
I want all your family and friends to see the school play. How can we make sure everyone knows about the play?
        —— Explain ...

Best wishes,
Mrs Rashid

Write your email to Mrs Rashid using all the notes.`,
      modelAnswer: `Dear Mrs Rashid
Thank you for your email. It's fantastic news that we are going to put on a school play this year!
In my opinion, we should choose a funny play, like a comedy. Everyone enjoys laughing, and a funny story would also help the actors feel less nervous on stage.
As for the jobs, I'd rather help to make the costumes than act. I enjoy sewing and drawing, so I could design and make the clothes for the main characters.
To make sure everyone knows about the play, we could put posters around the school and write a short article for the school website. We could also invite our families by email so they know the date and time.
I'm sure the play will be a great success.
Best wishes,
Li Hua`,
      tips: [
        '四个批注都要回应：先对办剧表示高兴（Fantastic!），再建议剧目类型并说明理由',
        "工作选择用 I'd rather help to make the costumes than act 说明自己选服装制作，并给出能力理由",
        '宣传方式给至少两个具体办法（海报、学校网站文章、邮件邀请家长等）',
        '称呼用 Dear Mrs Rashid，语气礼貌偏正式，结尾用 Best wishes 并署名，100 词左右',
      ],
      contentKeywords: ['fantastic news', 'school play', 'in my opinion', 'comedy', 'costumes', "i'd rather", 'sewing', 'posters', 'school website', 'invite', 'families', 'best wishes'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice on an English-language website for young people.

Articles wanted!

REALITY TV

Do you enjoy watching reality TV programmes? Why?

Can young people learn anything useful from watching reality TV? Why?

The best articles answering these questions will be published next month.

Write your article.`,
      modelAnswer: `I have to admit that I enjoy watching reality TV, especially talent shows and competitions. They are exciting because you never know what will happen next, and it's relaxing to watch them with my family at the weekend.
I think young people can definitely learn useful things from reality shows. For example, competition shows teach us that success comes from hard work and practice, not luck. Contestants often fail many times before they win, which shows us how important it is to keep trying.
Some travel shows are also educational. Watching people visit different countries helps us learn about other cultures and languages without leaving our homes.
Of course, we shouldn't believe everything we see, because some shows are not completely real. But if we choose good programmes, reality TV can be both fun and useful.`,
      tips: [
        '两个问题都必须回答：是否喜欢看真人秀及原因、年轻人能否从中学到有用东西及原因',
        '文章用第一人称，观点后立刻给例子（talent shows、travel shows 等），分 2–3 段',
        '可以适当让步（some shows are not completely real），再给出选择建议，让文章更全面',
        '100 词左右，标题可自拟，多用自己的话而不要照抄题目原句',
      ],
      contentKeywords: ['reality tv', 'talent shows', 'competitions', 'learn', 'hard work', 'practice', 'keep trying', 'travel shows', 'cultures', 'educational', 'useful', 'fun'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story. Your story must begin with this sentence.

The twins discovered a box of old letters in their grandad's garage.

Write your story.`,
      modelAnswer: `The twins discovered a box of old letters in their grandad's garage.
They were helping him to tidy up when Ana saw the dusty box under an old workbench. Inside were dozens of letters, tied together with ribbon.
'Grandad, whose are these?' called Ben. Their grandad smiled. 'They're from my pen friend, Paolo, in Italy. We wrote to each other for fifty years.'
The twins read letter after letter, laughing at the old photos that fell out of the envelopes. In the last letter, Paolo wrote that he still remembered playing football with Grandad by the river.
'Does he ever visit you?' Ana asked. 'Not for a long time,' said Grandad sadly.
That evening, the twins secretly wrote an email to Paolo's grandson. Perhaps a new friendship was about to begin.`,
      tips: [
        '必须以给定句子开头，不能改动',
        '用一般过去时按时间顺序叙事，twins 用 they 指代，可用名字（Ana/Ben）区分两人',
        '让信件内容推动故事（引出 grandad 的往事），结尾加一个小转折或惊喜',
        '加入细节描写（dusty box、ribbon、old photos），100 词左右',
      ],
      contentKeywords: ['twins', 'box', 'letters', 'grandad', 'garage', 'dusty', 'ribbon', 'pen friend', 'photos', 'email', 'friendship'],
    },
  ],
}

// PET Trainer 2 Test 5 Writing 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 2 (2024) · Test 5（完整套卷）
// 书页 140–141（PDF 页 141–142），题目文字已对照页面渲染图核对
// modelAnswer 为原创教学范文（署名 Li Hua，遵循"逐点回应批注 + B1 层级"要求），非官方答案；
// 书内 Sample answer（书页 222）仅用于核对内容点是否覆盖，未照抄。
// tips / contentKeywords 为中文教学提示。

const TRAINER2_TEST_5_WRITING = {
  meta: {
    id: 'pet-trainer2-5-writing',
    title: 'PET Trainer 2 · Test 5 Writing',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Writing',
    pages: '书页 140–141',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English-speaking friend Mark and the notes you have made.

From: Mark
Subject: School garden

Hey,
Guess what? Our school's going to create a garden this year! What do you think we should grow in it?
        —— Cool!!
        —— Tell Mark
Students can decide what happens to all the food we grow in the garden. Do you think we should sell everything?
        —— No, because ...
There's a meeting in room 104 about the school garden at noon. Do you want to go with me?
        —— Yes, but ...
Let me know soon!
Mark

Write your email to Mark using all the notes.`,
      modelAnswer: `Hi Mark
That's so exciting about the school garden! I think we should grow strawberries and tomatoes, because they're easy to look after and everyone loves picking them fresh in the sunshine.
About the food – I don't think selling everything is a good idea. We could give some of it to the school canteen, so the cooks can use it in our lunches, and share the rest with the classes that helped in the garden.
I'd love to come to the meeting at noon, but I've got football practice until quarter past twelve, so I might be a few minutes late. Save me a seat!
Li Hua`,
      tips: [
        '四个批注都要回应：对建花园的好消息表示高兴、告诉 Mark 建议种什么并给出理由',
        '对"是否全部卖掉"先否定（I don\'t think … is a good idea），再说明替代方案（送给食堂、分给同学）',
        '对"是否一起去开会"先答应（I\'d love to），再用 but 补充自己的安排并请对方等一等',
        '朋友间用非正式语气（Hi、缩写、感叹号），逐点分段回应，100 词左右',
      ],
      contentKeywords: ['school garden', 'grow', 'strawberries', 'tomatoes', 'sell', 'canteen', 'lunches', 'share', 'meeting', 'noon', 'football practice', 'late'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this announcement on an English-language website for young people.

Articles wanted!

ONLINE VERSUS FACE-TO-FACE

Do you prefer chatting to your friends face-to-face or online? Why?
Do you think spending lots of time online each day is a good idea? Why?

Write an article answering these questions, and we will publish the most interesting articles on our website.

Write your article.`,
      modelAnswer: `I prefer chatting to my friends face-to-face, because you can see each other's expressions and laugh together. When we meet at the weekend, we cycle in the park or cook something simple, and the time passes so quickly.
However, I don't think spending lots of time online each day is a good idea. Of course, the internet is useful for homework and for keeping in touch, but sitting in front of a screen for hours is tiring and unhealthy. I try to stop after an hour and do something active instead.
For me, real conversations beat online chats every time.`,
      tips: [
        '两个问题都要回答：更喜欢面对面还是网上聊天、每天大量上网是否明智，并给出理由',
        '观点后紧跟例子（表情与笑声、周末骑车做饭 / 查作业、久坐疲劳），理由才具体',
        '先承认网络的好处（Of course …），再用 However 转折，文章更客观有说服力',
        '面向青少年网站读者可用轻松口吻，结尾用一句话总结立场，100 词左右',
      ],
      contentKeywords: ['prefer', 'face-to-face', 'expressions', 'weekend', 'cycle', 'spending lots of time online', 'good idea', 'homework', 'keeping in touch', 'screen', 'unhealthy', 'active'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

I was walking in the forest when I heard a loud noise.

Write your story.`,
      modelAnswer: `I was walking in the forest when I heard a loud noise. I stopped and listened. It came again – a deep crash, like something heavy falling. My heart was beating fast as I moved carefully between the tall trees towards the sound.
Behind a huge old oak, I found a family of wild pigs pushing over a rotten branch, looking for food. They ran off when they saw me, and I suddenly started laughing with relief.
I took a photo of the broken branch to show my family. Now I always take my phone with its camera ready – and I never walk in the forest alone!`,
      tips: [
        '必须以给定句子开头，不能改动',
        '用一般过去时按时间顺序展开，开头可用过去进行时加 the forest 的环境描写营造气氛',
        '写清声音的来源、"我"的反应和结局，结尾可加一点感受或"教训"',
        '多用感官细节（crash、beating fast、laughing）让故事生动，100 词左右',
      ],
      contentKeywords: ['loud noise', 'forest', 'crash', 'heart beating', 'trees', 'wild pigs', 'branch', 'laughing', 'relief', 'photo', 'camera', 'alone'],
    },
  ],
}

// PET Trainer 2 Test 6 Writing 数据（自动转录，待人工核对）
// 题目来源：《B1 Preliminary for Schools Trainer 2》(2024, 带答案版) Test 6 完整套卷
// Writing · 书页 158–159（PDF p159–p160），题干与批注已对照页面渲染图核对
// Part 1 邮件批注（Me too! / Suggest / No, because... / Explain）按书内批注指针位置挂接
// modelAnswer 为原创 B1 教学范文（依据题目要求撰写，非官方答案）；tips/contentKeywords 为中文/小写关键词

const TRAINER2_TEST_6_WRITING = {
  meta: {
    id: 'pet-trainer2-6-writing',
    title: 'PET Trainer 2 · Test 6 Writing',
    level: 'PET',
    collection: 'PET Trainer 2',
    book: 'B1 Preliminary for Schools Trainer 2 (2024)',
    paper: 'Writing',
    pages: '书页 158–159',
    source: 'PET Trainer2/PET Trainer2 电子版.pdf',
    answerSource: '原创教学参考答案（依据题目要求撰写）',
    verified: false,
  },
  items: [
    {
      part: 1,
      type: 'guided_writing',
      title: 'Part 1 · 邮件写作',
      minWords: 100,
      prompt: `Read this email from your English-speaking friend Avery and the notes you have made.

From: Avery
Subject: Short-film competition

Hiya
Thanks for sending me the information about the short-film competition – I think we should enter!
        —— Me too!
Since our film can be about anything, what's an interesting topic for a short film?
        —— Suggest
We have three months to make a short film. Do you think we'll finish our film in time if we meet once a week?
        —— No, because...
I hope we win first prize – it'd be £500 each! What would you do with the money?
        —— Explain

Bye for now,
Avery

Write your email to Avery using all the notes.`,
      modelAnswer: `Hi Avery
I'd love to enter the short-film competition with you – great idea!
For the topic, I think we should film a day in the life of our school. We could show the canteen, the sports field and our funny classmates, and everyone we know would enjoy watching it.
About meeting once a week – honestly, I don't think that's enough. Filming and editing always take longer than we expect, so we should meet at least three times a week, maybe at weekends too.
If we won the £500, I'd buy a good microphone for recording and save the rest for a school trip.
Bye for now,
Li Hua`,
      tips: [
        '四个批注必须全部回应：同意参赛（Me too!）、给出一个具体拍摄主题、解释为什么一周一次不够、说明奖金用途',
        '拒绝或纠正对方想法时先直接回答（I don\'t think that\'s enough），再用 because / so 给出理由和替代方案',
        '主题建议要具体（如 a day in the life of our school），并用 everyone we know would enjoy it 说明吸引力',
        '100 词左右，按四个批注分段，保留邮件格式（Hi Avery 开头、Bye for now 加署名结尾）',
      ],
      contentKeywords: ['hi avery', "i'd love to enter", 'topic', 'a day in the life of our school', "once a week", 'three times a week', 'filming and editing', '£500', 'microphone', 'save the rest', 'bye for now'],
    },
    {
      part: 2,
      q: 2,
      type: 'article',
      title: 'Part 2 · 文章写作（二选一）',
      minWords: 100,
      prompt: `You see this notice on an international website for young people.

Articles wanted!

ENJOYING YOUR FREE TIME

Tell us about the leisure-time activity you most enjoy doing.
Why do you like it so much?
Is it important for you to do lots of things in your free time? Why?

The best articles answering these questions will be published next month.

Write your article.`,
      modelAnswer: `The free-time activity I enjoy most is playing table tennis with my classmates.
I like it so much because it is fast, exciting and doesn't cost anything. Our school has two tables in the sports hall, so we can play straight after lessons, and every game is different from the last one.
In my opinion, it isn't important to do lots of different things in your free time. It's better to really love one activity, because then you practise it more and improve quickly. Playing table tennis also helps me relax after a busy school day, and I have made lots of new friends at the table.
That's why I never get bored of it!`,
      tips: [
        '通知里的三个问题都要回答：最喜欢的休闲活动、为什么喜欢、是否有必要在空闲时间做很多不同的事',
        '观点要明确（In my opinion, it isn\'t important to...），并给出理由和例子支撑',
        '描写活动时写出具体细节（在哪里玩、和谁玩、感受如何），避免只重复题目句子',
        '100 词左右，分 2–3 段，用一篇完整的短文形式而不是问答列表',
      ],
      contentKeywords: ['table tennis', 'free-time activity', 'fast', 'exciting', 'sports hall', 'relax', 'make friends', 'in my opinion', 'improve', 'never get bored'],
    },
    {
      part: 2,
      q: 3,
      type: 'story_writing',
      title: 'Part 2 · 故事写作（二选一）',
      minWords: 100,
      prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

I looked at my best friend, and we both started to laugh.

Write your story.`,
      modelAnswer: `I looked at my best friend, and we both started to laugh.
It was Bake Sale Day at school, and our plan was simple: make forty cupcakes before lunch. But while I was mixing the flour, the electric mixer suddenly jumped out of the bowl and covered my glasses, my hair and even the kitchen ceiling with chocolate mixture!
For a moment we just stared at each other with chocolate on our noses. Then we cleaned everything up, made a fresh batch and carried the cupcakes proudly to the sale. We sold them all in twenty minutes.
Now we always say the best bakes begin with a disaster – and a good laugh.`,
      tips: [
        '必须以给定句子开头，不能改动（I looked at my best friend, and we both started to laugh.）',
        '先解释两人为什么笑（如烘焙翻车），再按时间顺序展开故事，用一般过去时',
        '结尾要呼应开头的笑点并点明感受，让故事完整收束',
        '100 词左右，加入细节描写（chocolate mixture、our noses）让故事生动',
      ],
      contentKeywords: ['best friend', 'laugh', 'bake sale day', 'cupcakes', 'electric mixer', 'chocolate mixture', 'glasses', 'cleaned everything up', 'sold them all', 'disaster', 'a good laugh'],
    },
  ],
}

export const PET_WRITING_TRAINER2 = [
  TRAINER2_TEST_1_WRITING,
  TRAINER2_TEST_2_WRITING,
  TRAINER2_TEST_3_WRITING,
  TRAINER2_TEST_4_WRITING,
  TRAINER2_TEST_5_WRITING,
  TRAINER2_TEST_6_WRITING,
]

export default PET_WRITING_TRAINER2
