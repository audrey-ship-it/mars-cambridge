// PET 官方样题 Writing —— 3 套官方样题（2020 标准版样题1 + 校园版样题2/3）
// Part 1 email using all notes (~100 words); Part 2 choose article OR story (~100 words).
// 题目逐字来自官方试卷；modelAnswer 为原创 B1 教学范文，非官方答案。
// shape 与 petWritingData.js 中 petWritingTests item 一致。

export const PET_WRITING_SAMPLES = [
  {
    meta: {
      id: 'pet-sample-1-writing',
      title: 'PET 官方样题 1 · Writing',
      level: 'PET',
      collection: 'PET 官方样题 2020',
      paper: 'Writing',
      pages: '2–3',
      source: 'B1 Preliminary 2020 sample Writing - question paper.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend Sandy and the notes you have made.

From: Sandy
Subject: Your visit!

Hi,
I'm so excited that you're coming to stay with me for a week!
        —— Me too!
On your first evening here, there's a rock concert in our town. Would you like to go to the concert or would you prefer us to relax at home?
        —— Say which I prefer
Also, shall we go climbing in the mountains while you're here?
        —— No, because …
Let me know if you have any questions.
        —— Ask Sandy …
See you soon
Sandy

Write your email to Sandy using all the notes.`,
        modelAnswer: `Hi Sandy,
Thanks for your email. I'm really excited too — I can't wait to come and stay with you for a week!
On the first evening, I'd love to go to the rock concert. I love live music, so that sounds much better than relaxing at home.
I'm afraid I can't go climbing, though, because I fell off my bike last month and my leg still hurts a little.
Could you tell me what clothes I should bring? And is it often cold in the evenings?
See you soon!
Li Hua`,
        tips: ['开头回应 Me too! 的兴奋心情', '明确选择音乐会或在家休息', '礼貌拒绝爬山并说明原因', '向 Sandy 提一个问题', '100词左右，注意称呼和署名'],
        contentKeywords: ['excited', 'me too', 'concert', 'prefer', "can't", 'because', 'ask', 'clothes', 'hi', 'see you soon'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this notice on an English-language website.

Articles wanted!
FILMS
What kind of films do you enjoy?
Do you prefer watching them at the cinema or at home? Why?
Write an article answering these questions and we will put it on our website!

Write your article.`,
        modelAnswer: `My favourite films
I really enjoy watching films, and my favourite kind is comedy because I like laughing after a long day at school. I also enjoy adventure films with exciting stories.
I prefer watching films at the cinema. The screen is enormous and the sound is amazing, so I feel as if I am inside the film. For example, last month I saw an adventure film at the cinema with my friends and it was fantastic.
Watching films at home is cheaper and more relaxing, of course, but for me the cinema is always more exciting.`,
        tips: ['回答两个问题：喜欢什么类型的电影、喜欢影院还是家里', '用 because / For example 给出理由和例子', '可用对比（at home is cheaper but…）结尾', '100词左右'],
        contentKeywords: ['films', 'comedy', 'adventure', 'cinema', 'home', 'prefer', 'because', 'screen', 'friends', 'exciting', 'for example'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

As the plane flew lower, Lou saw the golden beaches of the island below.

Write your story.`,
        modelAnswer: `As the plane flew lower, Lou saw the golden beaches of the island below. Ten minutes later, he walked out of the small airport and the hot sun hit his face.
Lou was staying with his aunt, who lived in a house near the sea. On the first morning, they took a boat to a tiny beach where there were no other people. They swam in the clear water and ate fish for lunch on the sand.
In the afternoon, Lou found a beautiful shell and gave it to his little cousin. It was the best first day of a holiday he had ever had.`,
        tips: ['必须以给定句子开头', '用一般过去时按时间顺序写', '写清在岛上做了什么', '加入感受和结尾', '100词左右'],
        contentKeywords: ['plane', 'beaches', 'island', 'aunt', 'boat', 'swam', 'lunch', 'shell', 'found', 'gave', 'best', 'when', 'suddenly'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-sample-2-writing',
      title: 'PET 校园版官方样题 2 · Writing',
      level: 'PET',
      collection: 'PET 校园版官方样题',
      paper: 'Writing',
      pages: '2–3',
      source: 'Preliminary for Schools Writing Sample Test 2.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English teacher Mr Holmes and the notes you have made.

From: Mr Holmes
To: English class
Subject: Class talks

Dear student,
As you know, I've asked each of you to give a three-minute talk to the other students in the class. I'm sure this will be interesting for everyone.
        —— Agree
Can you tell me what topic you've decided to talk about and why?
        —— Explain
I'd like some students to give their talks this week. Are you able to do this?
        —— No, because…
Do you think I should ask students from other classes in our school to come and listen to your talks?
        —— Tell Mr Holmes
Thanks,
Adrian Holmes

Write your email to Mr Holmes using all the notes.`,
        modelAnswer: `Dear Mr Holmes,
Thank you for your email. I agree with you — I think the class talks will be really interesting for everyone.
I have decided to talk about my favourite sport, basketball. I chose this topic because I have played it for five years and I know a lot about it.
I'm afraid I cannot give my talk this week because I will be away on a school trip until Friday.
I don't think you should invite students from other classes, as I would feel quite nervous in front of so many people.
Thank you.
Li Hua`,
        tips: ['开头表示赞同', '说明演讲主题和原因', '礼貌说明本周不能演讲的理由', '回答是否邀请其他班学生', '100词左右，注意称呼和署名'],
        contentKeywords: ['agree', 'interesting', 'topic', 'talk', 'basketball', 'because', "can't", 'this week', 'nervous', 'other classes', 'dear', 'thank you'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement in an English-language magazine for young people.

Articles wanted!
MY FAVOURITE ROOM
What's your favourite room in your home?
Why do you like it?
Is there anything about the room that you would like to be different?
We'll publish the best articles answering these questions in next month's magazine!

Write your article.`,
        modelAnswer: `My favourite room
My favourite room in our home is my bedroom. It isn't very big, but it is my own space and I love it.
I like it because it is quiet, so I can do my homework there without anyone disturbing me. I have also put posters of my favourite bands on the walls, which make the room feel really personal.
There is one thing I would like to change: the room doesn't have much light in the evening. If I had a bigger window, it would be perfect!`,
        tips: ['回答三个问题：哪个房间、为什么喜欢、希望哪里不同', '用具体细节（海报、安静等）支撑理由', '结尾写一个希望改进的地方', '100词左右'],
        contentKeywords: ['bedroom', 'favourite', 'quiet', 'homework', 'posters', 'because', 'change', 'window', 'light', 'personal', 'space'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Sam was looking forward to going out with his friends for the day.

Write your story.`,
        modelAnswer: `Sam was looking forward to going out with his friends for the day. They planned to cycle to the lake and have a picnic there.
But when Sam opened the front door, he saw that it was raining heavily. He checked his phone, but there were no messages from his friends.
Suddenly, he had an idea. He called everyone and invited them to his house. They made pizzas, played games and watched a film.
In the end, Sam's friends all agreed that the day was even better than their picnic plan.`,
        tips: ['必须以给定句子开头', '用一般过去时', '安排一个意外转折（如下雨）', '写出解决办法和结局', '100词左右'],
        contentKeywords: ['friends', 'cycle', 'lake', 'picnic', 'raining', 'idea', 'called', 'house', 'games', 'film', 'suddenly', 'in the end'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-sample-3-writing',
      title: 'PET 校园版官方样题 3 · Writing',
      level: 'PET',
      collection: 'PET 校园版官方样题',
      paper: 'Writing',
      pages: '2–3',
      source: 'Preliminary for Schools Writing Sample Test 3 Question Paper.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend, Chris, and the notes you have made.

From: Chris
Subject: Going camping

Hi!
I'm so pleased you can come camping for a week with me and my family! I'm really looking forward to it!
        —— Me too!
There are lots of things we can do near the campsite. On the first day, we could go sailing, swimming, or horse-riding. Which would you prefer?
        —— Explain
We're going to take lots of food. Is there anything you don't like to eat?
        —— Tell Chris
Is there anything you want to ask about the camping trip?
        —— Yes, ask about…
Write soon and let me know,
Chris

Write your email to Chris using all the notes.`,
        modelAnswer: `Hi Chris,
Thanks for your email. I'm really looking forward to the camping trip too!
On the first day, I'd prefer to go swimming because I love being in the water, although horse-riding sounds fun as well.
There is one food I don't really like: I can't eat mushrooms, so please don't put them in my food!
Could I ask you what the weather will be like? If it's cold at night, I'll bring an extra blanket.
Write soon!
Li Hua`,
        tips: ['开头回应期待的心情', '说明第一天想选哪项活动及原因', '告诉 Chris 自己不喜欢的食物', '向 Chris 提一个问题', '100词左右，注意称呼和署名'],
        contentKeywords: ['looking forward', 'me too', 'swimming', 'prefer', 'because', "don't like", 'mushrooms', 'ask', 'weather', 'hi', 'write soon'],
      },
      {
        part: 2,
        q: 1,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on an English-language website for young people.

Articles wanted!
DOING HOMEWORK
Do you get a lot of homework?
What sort of homework do your teachers give you?
What are the good and bad things about doing homework?
The best articles answering these questions will win a prize.

Write your article.`,
        modelAnswer: `Doing homework
Yes, I get quite a lot of homework, especially from my Maths and English teachers. We usually have to answer questions from our coursebooks, write short texts, or sometimes do projects using the internet.
The good thing about homework is that it helps me remember what I learnt at school, so I feel more confident in class.
However, the bad thing is that on some days I have too much, and then I don't have any time to see my friends or play football before dinner.
I think some homework is useful, but teachers should not give us too much.`,
        tips: ['回答三个问题：作业多不多、什么类型、优缺点', '用 The good/bad thing is… 组织内容', '结尾给出自己的看法', '100词左右'],
        contentKeywords: ['homework', 'teachers', 'maths', 'projects', 'good', 'bad', 'helps', 'confident', 'friends', 'time', 'useful', 'however'],
      },
      {
        part: 2,
        q: 2,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Fred was really happy when he opened his birthday present.

Write your story.`,
        modelAnswer: `Fred was really happy when he opened his birthday present. Inside the box was the guitar that he had wanted for months.
Every day after school, Fred practised in his bedroom, and after a few weeks he could play several simple songs.
Then his music teacher asked him to play in the school concert. Fred felt very nervous, but on the night he played really well and all the parents clapped loudly.
When he came off the stage, his parents were smiling. "That was amazing!" they said. Fred was the proudest boy in the school.`,
        tips: ['必须以给定句子开头', '用一般过去时', '写清礼物是什么、后来发生了什么', '加入感受和结尾', '100词左右'],
        contentKeywords: ['present', 'guitar', 'practised', 'school', 'concert', 'nervous', 'played', 'parents', 'proud', 'when', 'after', 'then'],
      },
    ],
  },
]
