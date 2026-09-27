// PET 标准版官方真题 1（B1 Preliminary 1, 2020）Test 1 写作数据
// 题目来源：B1 PET新题型官方真题 1.pdf（扫描版逐页人工转录）Test 1 · PDF 页 19–20
// modelAnswer 为原创 B1 教学范文，非官方答案。
// shape 与 petWritingSamples.js 一致。

export const PET_WRITING_STANDARD = [
  {
    meta: {
      id: 'pet-standard-1-writing',
      title: 'PET 标准版官方真题 1 · Test 1 Writing',
      level: 'PET',
      collection: 'PET 标准版官方真题 1',
      paper: 'Writing',
      pages: '书页 18–19',
      source: 'B1 PET新题型官方真题 1.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking college classmate Alex and the notes you have made.

From: Alex
Subject: College science presentation

Hi,
It's great that we're going to work together on the college science presentation. Do you think we should choose the rainforest as our topic?
        —— No, but …
We only have two weeks to prepare, so can we start tomorrow?
        —— Sorry …
Where can we go to prepare the presentation? My cousins are staying at my house at the moment, so we can't work there because it's too noisy.
        —— Suggest …
We can give our presentation to the class either in the morning or the afternoon. Which would you prefer?
        —— Tell Alex

Let me know
Alex

Write your email to Alex using all the notes.`,
        modelAnswer: `Hi Alex,
Thanks for your email. I'm really happy we're working together, but I don't think the rainforest is a good topic because I don't know much about it. What about space travel? There are some amazing facts we could include.
Sorry, but I can't start tomorrow because I have a music lesson after college. Could we start on Thursday instead?
I suggest we work in the town library. It's quiet there, and we can find lots of useful information in the science section.
I'd prefer to give our presentation in the afternoon because I feel more awake then.
See you soon,
Li Hua`,
        tips: [
          '四个批注必须全部回应：换话题、改时间、建议地点、上下午偏好',
          '拒绝时先道歉再说原因，并用 What about / Could we 给出替代方案',
          '建议地点要说明理由（安静、有资料）',
          '使用友好的邮件称呼和署名，100 词左右',
        ],
        contentKeywords: ['hi', 'no', "don't think", 'what about', 'sorry', 'can', 'thursday', 'suggest', 'library', 'prefer', 'afternoon', 'see you soon'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement in an English-language magazine.

Articles wanted!

Is shopping boring?

What do you like and dislike about shopping?
What could shopping centres do to attract more people?

Write us an article answering these questions. The best one will win a prize!

Write your article.`,
        modelAnswer: `I don't think shopping is boring, but I can understand why some people don't enjoy it. I like going to shopping centres with my friends at weekends because we can look at clothes and then have a drink together in a café. What I dislike is shopping with my parents, as they spend hours in the same shops.
To attract more young people, shopping centres could put on events like live music or fashion shows, and offer students a discount. Free Wi-Fi in all the cafés would be good too.
If they did these things, I'm sure shopping centres would become much more popular.`,
        tips: [
          '回答两个问题：喜欢/不喜欢什么、商场如何吸引更多人',
          '用 because / as 给出理由，用 To attract… 提出建议',
          '可举例（live music、discount、Wi-Fi）',
          '100 词左右',
        ],
        contentKeywords: ['shopping', 'like', 'dislike', 'friends', 'parents', 'attract', 'events', 'live music', 'discount', 'wi-fi', 'because', 'popular'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Jack climbed out of the boat and ran as fast as he could to the beach.

Write your story.`,
        modelAnswer: `Jack climbed out of the boat and ran as fast as he could to the beach. His legs were shaking and his heart was beating fast.
Half an hour earlier, he and his brother had been fishing when suddenly a huge wave hit their small boat and turned it over. They had lost everything, but at least they were alive.
When Jack reached the beach, he turned round and saw his brother walking slowly out of the water behind him. A minute later, a man from a nearby village ran over to help them and called the coastguard on his phone.
That night, Jack promised himself he would never go fishing on a windy day again.`,
        tips: [
          '必须以给定句子开头，不能改动',
          '用一般过去时按时间顺序写，可以先闪回事故起因',
          '写清发生了什么、谁来帮忙、结局如何',
          '加入感受（shaking、heart beating fast），100 词左右',
        ],
        contentKeywords: ['jack', 'boat', 'beach', 'brother', 'wave', 'fishing', 'turned over', 'reached', 'saw', 'helped', 'coastguard', 'promised'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-standard-1-writing-t2',
      title: 'PET 标准版官方真题 1 · Test 2 Writing',
      level: 'PET',
      collection: 'PET 标准版官方真题 1',
      paper: 'Writing',
      pages: '书页 36–37',
      source: 'B1 PET新题型官方真题 1.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend Robbie and the notes you have made.

From: Robbie
Subject: Birthday meal

Hi,
It's my birthday soon, and I'm thinking of having a meal in a restaurant with all my friends – including you! Do you think it's a good idea?
        —— Yes!
There's a good new restaurant in town, which serves all kinds of delicious burgers, or there's also a great vegetarian restaurant. Which one would be better?
        —— Tell Robbie
If you need transport to the restaurant, I can come and pick you up.
        —— Thanks, because …
Let me know if you have any questions!
        —— Ask Robbie
Robbie

Write your email to Robbie using all the notes.`,
        modelAnswer: `Hi Robbie,
Happy birthday for soon! Yes, having a meal in a restaurant with all your friends is a brilliant idea.
I think we should go to the burger restaurant. I love burgers, and I'm sure most of your friends will too. The vegetarian one sounds good, but there's less choice for the others.
Thanks so much for offering to pick me up. My parents are both working late, so they can't drive me there – it's a big help.
Could you tell me what time you'll come and get me?
See you then,
Li Hua`,
        tips: [
          '四个批注必须全部回应：赞成、选餐厅、感谢接人并说明原因、提问',
          '选餐厅时比较两家并给出理由',
          '感谢接人要解释为什么需要（父母没法送）',
          '邮件语气友好，100 词左右',
        ],
        contentKeywords: ['hi', 'yes', 'brilliant idea', 'think', 'burger', 'vegetarian', 'thanks', 'because', 'parents', 'working late', 'could you tell me', 'what time', 'see you'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on an English-language website.

Articles wanted!

Free-time activities

What activities can people your age do in their free time where you live?
Do you enjoy taking part in organised activities? Why?
Is there a new activity that you would like to be available in your area?

We'll publish the best articles answering these questions next month.

Write your article.`,
        modelAnswer: `Young people where I live can do quite a lot in their free time. There's a sports centre with a swimming pool, several parks, a modern cinema and a big shopping centre.
I really enjoy organised activities because they give you the chance to meet people. I play in a basketball team and we practise twice a week.
What I'd really like is an outdoor skate park. At the moment, my friends and I have to take a bus to one in the next town. If we had one here, I'm sure lots of teenagers would use it.`,
        tips: [
          '依次回答三个问题：能做什么、是否喜欢有组织的活动、希望新增什么',
          '列举具体场所与活动，用 because 说明理由',
          '新活动要解释现状的不便',
          '100 词左右',
        ],
        contentKeywords: ['free time', 'sports centre', 'swimming pool', 'parks', 'cinema', 'organised activities', 'because', 'basketball', 'skate park', 'new', 'if', 'teenagers'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

As I came out of the supermarket, I saw someone that I had wanted to see for a long time.

Write your story.`,
        modelAnswer: `As I came out of the supermarket, I saw someone that I had wanted to see for a long time. It was my cousin Tom, who had moved to Australia with his family three years before. I had missed him terribly.
"Tom!" I shouted. He turned round and smiled in surprise. He told me he was staying for two weeks, so we spent the rest of the day together in the park, talking about old times.
Later, we went back to my house and my mum phoned his parents. In the evening, we all had pizza.
I was so happy that I had gone to the supermarket at exactly that moment.`,
        tips: [
          '必须以给定句子开头，不能改动',
          '写清遇见了谁、为什么想见、见面后做了什么',
          '用一般过去时按时间顺序叙述',
          '结尾点题，100 词左右',
        ],
        contentKeywords: ['supermarket', 'saw', 'cousin', 'tom', 'australia', 'missed', 'shouted', 'surprise', 'two weeks', 'park', 'phoned', 'pizza', 'happy'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-standard-1-writing-t3',
      title: 'PET 标准版官方真题 1 · Test 3 Writing',
      level: 'PET',
      collection: 'PET 标准版官方真题 1',
      paper: 'Writing',
      pages: '书页 54–55',
      source: 'B1 PET新题型官方真题 1.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your college English teacher Miss Jones and the notes you have made.

From: Miss Jones
To: All students
Subject: Visitor to English class

Dear Students,
I'm planning to invite a well-known person to come into our English class and give a talk.
        —— Great!
I'd like to invite either a scientist or an actor. Which would be better?
        —— I think …
I hope that each student will have a question to ask this person – what would you like to ask?
        —— Tell Miss Jones
We want our visitor to enjoy the day with us. What do you think we can do to entertain the visitor after the talk?
        —— Suggest …
I'm looking forward to receiving your ideas!
Miss Jones

Write your email to Miss Jones using all the notes.`,
        modelAnswer: `Dear Miss Jones,
Thank you for your email. I think it's a great idea to invite a well-known person to give a talk.
I think a scientist would be better than an actor. I'd love to hear about space travel and the experiments that scientists do.
I would like to ask what the most difficult part of studying science at university was.
After the talk, I suggest we have a small party in the classroom with sandwiches and drinks, so everyone can chat with our visitor.
I hope you like my ideas.
Li Hua`,
        tips: [
          '四个批注必须全部回应：兴奋表态、二选一并说明理由、说出想问的问题、建议谈话后的招待活动',
          '选 scientist 或 actor 都可以，但要给出具体理由',
          '问题要具体，避免只写 “a question”',
          '邮件语气礼貌，100 词左右',
        ],
        contentKeywords: ['dear', 'great idea', 'i think', 'scientist', 'actor', 'would like to ask', 'difficult', 'suggest', 'after the talk', 'party', 'sandwiches', 'hope'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement in an English-language magazine.

Articles wanted!

Computer games

Do you and your friends enjoy playing computer games?
What are the good and bad things about computer games?

The most interesting articles answering these questions will appear in our magazine.

Write your article.`,
        modelAnswer: `Most of my friends really enjoy computer games, and I enjoy them too. We often play sports games online together at the weekend.
There are some good things about computer games. They are fun, and some games help you think quickly. Playing with friends online is also a good way to stay in touch.
However, there are bad things too. If you play for too long, your eyes hurt and you don't get enough exercise. Some games are also quite expensive.
I think the best thing is to play for just an hour a day and then do something outside.`,
        tips: [
          '回答两个问题：你和朋友是否喜欢、好处与坏处',
          '好处和坏处各写两三条，并给出具体例子',
          '结尾可以给出自己的建议',
          '100 词左右',
        ],
        contentKeywords: ['friends', 'enjoy', 'online', 'fun', 'think quickly', 'stay in touch', 'however', 'eyes hurt', 'exercise', 'expensive', 'suggest', 'outside'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

It was my first time in the jungle and I was so excited.

Write your story.`,
        modelAnswer: `It was my first time in the jungle and I was so excited. I was there with my uncle, who's a scientist, and two of his friends.
Early that morning, we walked carefully along a path through the trees. I saw huge butterflies and beautiful birds everywhere. Suddenly, I heard a strange noise above me. I looked up and saw a monkey sitting in a tree, eating fruit. It looked at me, and then it dropped a piece of banana right next to my foot!
I laughed. My uncle explained that monkeys are often friendly if you don't frighten them.
That evening, I wrote everything in my diary. It was the best day of the whole trip.`,
        tips: [
          '必须以给定句子开头，不能改动',
          '按时间顺序写：看到什么、发生什么特别的事、结局与感受',
          '加入细节（声音、动物、动作）和感受',
          '主要用一般过去时，100 词左右',
        ],
        contentKeywords: ['jungle', 'excited', 'uncle', 'scientist', 'path', 'butterflies', 'birds', 'monkey', 'tree', 'fruit', 'banana', 'laughed', 'friendly', 'diary'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-standard-1-writing-t4',
      title: 'PET 标准版官方真题 1 · Test 4 Writing',
      level: 'PET',
      collection: 'PET 标准版官方真题 1',
      paper: 'Writing',
      pages: '书页 72–73',
      source: 'B1 PET新题型官方真题 1.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend Jo and the notes you have made.

From: Jo
Subject: Beach holiday

Hi,
I'm really glad you want to come with me on the holiday I won as first prize in the photography competition.
        —— Thank Jo
I've now got some more information – we're going for a week to a great hotel near a beautiful beach! There's plenty to do there. Do you want to do activities like surfing and sailing? Or we could just lie on the beach!
        —— Tell Jo
We have to decide when to go, so are you free for a week in August?
        —— No, but …
Do you have any questions about the holiday?
        —— Ask …
See you soon!
Jo

Write your email to Jo using all the notes.`,
        modelAnswer: `Hi Jo,
Thank you so much for inviting me on your prize holiday – that's really kind of you!
I'd love to try surfing. I've never done it, but I'm a good swimmer and it sounds exciting. Sailing sounds fun too, but maybe just for one afternoon.
I'm not free in August, I'm afraid, because my family are visiting relatives then. But I could come for a week in July instead. Would that be possible?
Could you tell me if the hotel has a swimming pool?
See you soon,
Li Hua`,
        tips: [
          '四个批注必须全部回应：感谢邀请、告诉她想做什么活动、说明八月没空并给出替代时间、提问',
          '活动要具体（surfing / sailing / lie on the beach），并可说明原因',
          '拒绝八月时必须提出另一个可行的时间',
          '邮件语气友好，100 词左右',
        ],
        contentKeywords: ['thank', 'inviting', 'surfing', 'sailing', 'not free', 'august', 'july', 'because', 'relatives', 'could you tell me', 'hotel', 'see you'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement in an English-language magazine.

Articles wanted!

Learning languages

Do you think it's important to learn a foreign language?
Is it better to learn a language in a group or on your own? Why?

We'll publish the most interesting articles answering these questions in our magazine.

Write your article.`,
        modelAnswer: `I think it's really important to learn a foreign language. When you travel, you can talk to local people and understand the culture, and many jobs these days need you to speak another language.
In my opinion, it's much better to learn in a group than on your own. In a class, you can practise conversations with other students, and you learn from each other's mistakes. It's also more fun, so you don't give up easily.
Learning alone with a book or app can be useful for vocabulary, but there's no one to correct you when you get something wrong. I definitely prefer learning with other people.`,
        tips: [
          '依次回答两个问题：为什么重要、小组学还是自学及理由',
          '给出旅行、工作等具体理由',
          '比较两种学习方式并给出自己的选择',
          '100 词左右',
        ],
        contentKeywords: ['important', 'travel', 'local people', 'jobs', 'group', 'practise', 'conversations', 'mistakes', 'fun', 'on your own', 'correct', 'prefer'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

The friends got off the bus and ran over to join the long queue of people.

Write your story.`,
        modelAnswer: `The friends got off the bus and ran over to join the long queue of people. They were at a bookshop, and a famous adventure writer was visiting to sign copies of her new novel.
"I can't believe we're finally here!" said Maya, jumping up and down. They had been fans for years, and the queue moved slowly in the hot sun.
When at last they reached the front, the writer smiled and asked their names. She signed each book and even agreed to have a photo taken with them.
On the bus home, the friends read the first few pages together. It was a day they would never forget.`,
        tips: [
          '必须以给定句子开头，不能改动',
          '写清人们在排什么队、排队时和排到后发生了什么',
          '加入对话和感受让故事更生动',
          '用一般过去时，100 词左右',
        ],
        contentKeywords: ['queue', 'bookshop', 'writer', 'signed', 'novel', 'maya', 'fans', 'slowly', 'photo', 'bus home', 'never forget'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-standard-2-writing-t1',
      title: 'PET 标准版官方真题 2 · Test 1 Writing',
      level: 'PET',
      collection: 'PET 标准版官方真题 2',
      paper: 'Writing',
      pages: '书页 18–19',
      source: 'B1 PET新题型官方真题 2.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend Chris and the notes you have made.

From: Chris
Subject: Party for Mr Wright

Hi,
Did you hear that Mr Wright is leaving our school after fifteen years? Some of us think we should organise a surprise party for him. Do you think that's a good idea?
        —— Good idea!
We could have the party in the school hall, or we could have it in the park if the weather is nice. Which do you think would be better?
        —— Tell Chris
Everyone should bring some food or drink to share. What do you think you could bring?
        —— Yes, because …
We'd also like to buy Mr Wright a present. Do you have any ideas?
        —— Suggest …
Let me know what you think!
Chris

Write your email to Chris using all the notes.`,
        modelAnswer: `Hi Chris,
Yes, I definitely think a surprise party for Mr Wright is a great idea! He's been such a good teacher, and it would be a lovely way to say thank you.
I think the school hall would be better than the park. If it rains, we'll still be able to have the party, and there's more space for everyone inside.
Yes, I'd be happy to bring some food because I love cooking. I could make some sandwiches and maybe a chocolate cake.
For a present, why don't we buy him a nice watch? We could all contribute a small amount of money, and I'm sure he'd love it.
See you soon,
Li Hua`,
        tips: [
          '四个批注必须全部回应：赞成、选地点、带食物、建议礼物',
          '选地点时说明理由（天气、空间）',
          '带食物要解释为什么愿意（喜欢做饭）',
          '建议礼物用 Why don\'t we / We could…',
          '100 词左右',
        ],
        contentKeywords: ['hi', 'good idea', 'great idea', 'school hall', 'park', 'weather', 'rains', 'food', 'cooking', 'sandwiches', 'cake', 'present', 'watch', 'contribute', 'see you'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement in an English-language magazine.

Articles wanted!

Sport and exercise

What sports and exercise do you enjoy?
Do you prefer watching sport or taking part? Why?

Write us an article answering these questions. The best one will win a prize!

Write your article.`,
        modelAnswer: `I enjoy many different kinds of sport. I play basketball with my school team twice a week, and in summer I love swimming in the sea. I also go running in the park near my house most mornings.
I definitely prefer taking part to watching sport. When I play, I feel like I'm really involved in the game, and it's great exercise too. Watching sport on TV can be boring sometimes, especially if my team is losing!
I think everyone should try to do some kind of sport or exercise regularly. It keeps you healthy and helps you make friends.`,
        tips: [
          '回答两个问题：喜欢什么运动、看还是参与',
          '列举具体运动并说明频率',
          '用 definitely prefer / When I play / I think 表达观点',
          '给出理由（参与感、锻炼、健康）',
          '100 词左右',
        ],
        contentKeywords: ['sport', 'exercise', 'basketball', 'swimming', 'running', 'prefer', 'taking part', 'watching', 'involved', 'exercise', 'healthy', 'friends'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Alex walked out of the airport into the hot sunshine.

Write your story.`,
        modelAnswer: `Alex walked out of the airport into the hot sunshine. He had just arrived in Santiago, Chile, and it was the middle of summer. He could feel the heat on his skin immediately.
He was there to visit his cousins, who lived near the St. Lucia hill. They met him at the airport and drove him through the busy streets to their house. Alex was amazed by the beautiful views of the Andes mountains in the distance.
That evening, his cousins took him to a traditional restaurant where they ate delicious empanadas and danced to local music. Alex knew this was going to be an amazing holiday.`,
        tips: [
          '必须以给定句子开头，不能改动',
          '交代地点（Santiago/Chile）和季节（夏天）',
          '写清见到了谁、做了什么',
          '加入感官细节（热、山景、食物）',
          '用一般过去时，100 词左右',
        ],
        contentKeywords: ['alex', 'airport', 'hot sunshine', 'santiago', 'chile', 'summer', 'cousins', 'st lucia', 'andes', 'restaurant', 'empanadas', 'amazing'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-standard-2-writing-t2',
      title: 'PET 标准版官方真题 2 · Test 2 Writing',
      level: 'PET',
      collection: 'PET 标准版官方真题 2',
      paper: 'Writing',
      pages: '书页 36–37',
      source: 'B1 PET新题型官方真题 2.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend Mo and the notes you have made.

From: Mo
Subject: Day out

Hi,
We've been very busy recently, so I thought it would be nice to have a day out this weekend.
        —— Agree
We could go to the beach or spend a day shopping in the city. Which would you prefer?
        —— Say which
I think it would be nice to invite some other friends to come with us. What do you think?
        —— Tell Mo
Afterwards, you could come to my house for dinner, if you're free. Let me know!
        —— Thanks, but …
Mo

Write your email to Mo using all the notes.`,
        modelAnswer: `Hi Mo,
Thanks for your email. I definitely agree that we need a day out – I've been so busy with my studies that I haven't had time to relax.
I'd prefer to go to the beach rather than go shopping. I love swimming, and we could also take a ball and play games on the sand.
I think inviting other friends is a great idea. It'll be more fun with a bigger group, and I can ask my classmates to come too.
Thanks for inviting me to dinner, but I can't come because my parents want me to go home early.
See you on Saturday!
Li Hua`,
        tips: [
          '四个批注必须全部回应：同意、选地点、对邀请朋友的看法、婉拒晚餐',
          '二选一明确表态（beach），用 I\'d prefer… rather than…',
          '告诉 Mo 对邀请朋友的真实想法',
          '婉拒要先感谢再说原因，100 词左右',
        ],
        contentKeywords: ['hi', 'agree', 'day out', 'prefer', 'beach', 'shopping', 'swimming', 'friends', 'inviting', 'thanks', 'dinner', 'can', 'because', 'see you'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on an English-language website.

Articles wanted!

Learning English

If you are learning English, we want to hear from you.
What do you like about learning English?
What advice do you have for people who are starting to learn English?

We'll publish the most interesting articles answering these questions on our website.

Write your article.`,
        modelAnswer: `I've been learning English for five years now, and I really enjoy it. What I like most is that it lets me communicate with people from all over the world. I also love watching American and British films in the original language, and reading about my favourite bands online.
For people just starting to learn English, my advice is to practise a little every day, even if it's only ten minutes. Watching videos and listening to songs in English makes learning fun. Don't be afraid of making mistakes, either – that's how you improve.
If you keep going, you'll soon be surprised by how much you understand!`,
        tips: [
          '回答两个问题：喜欢英语的什么、给初学者什么建议',
          '结合自身经历举例（交流、电影、音乐）',
          '建议要具体可行（每天练习、看视频、别怕犯错）',
          '100 词左右',
        ],
        contentKeywords: ['learning english', 'enjoy', 'communicate', 'films', 'songs', 'advice', 'practise', 'every day', 'mistakes', 'improve'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Charlie felt happy as he opened the train door.

Write your story.`,
        modelAnswer: `Charlie felt happy as he opened the train door. He had arrived in the seaside town at last, and he could smell the sea air immediately.
It was the first day of the summer holidays, and he was going to spend two weeks with his grandmother. She met him at the station with a big smile and his favourite chocolate biscuits.
Every day, they walked along the beach and collected shells, and Charlie learned how to fish from the old wooden pier. On the last evening, they sat in her garden watching the sun go down over the water.
When it was time to leave, Charlie promised he would come back the following year.`,
        tips: [
          '必须以给定句子开头，不能改动',
          '交代去了哪里、见了谁',
          '按时间顺序写假期中的活动',
          '结尾交代离别时的约定，用一般过去时，100 词左右',
        ],
        contentKeywords: ['charlie', 'train door', 'seaside', 'grandmother', 'station', 'beach', 'shells', 'fish', 'sun', 'leave', 'promised'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-standard-2-writing-t3',
      title: 'PET 标准版官方真题 2 · Test 3 Writing',
      level: 'PET',
      collection: 'PET 标准版官方真题 2',
      paper: 'Writing',
      pages: '书页 54–55',
      source: 'B1 PET新题型官方真题 2.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend Eden and the notes you have made.

From: Eden
Subject: Cycling on Tuesday evening

Hi,
I'm really looking forward to going cycling with you on Tuesday evening. I hope you still want to go!
        —— Of course!
There are two cycle routes near where I live. We could cycle through the forest or we could cycle round the lake. Which would you prefer?
        —— Explain
Do you think we should take some food with us?
        —— Tell Eden
Do you have time to come to my house and watch a film afterwards?
        —— No, because …
Reply soon!
Eden

Write your email to Eden using all the notes.`,
        modelAnswer: `Hi Eden,
Thanks for your email. Of course I still want to go cycling on Tuesday – I'm really looking forward to it!
I'd prefer to cycle round the lake rather than through the forest. The route beside the water is flat, so it's easier to ride, and the views are beautiful.
Yes, I think we should take some food with us. We'll be hungry after cycling, and we can stop for a picnic by the lake.
No, I'm sorry, but I can't come to your house to watch a film afterwards because I have to get up early for school the next day.
See you on Tuesday!
Li Hua`,
        tips: [
          '四个批注必须全部回应：当然想去、选路线并解释、对带食物的看法、婉拒看电影',
          '二选一明确表态（round the lake），用 I\'d prefer… rather than…',
          '告诉 Eden 是否带食物及理由',
          '婉拒先道歉再说原因，100 词左右',
        ],
        contentKeywords: ['hi', 'of course', 'cycling', 'prefer', 'lake', 'forest', 'flat', 'views', 'food', 'picnic', 'no', 'because', 'see you'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on an English-language website.

Articles wanted!

Friends

How important is it to be in contact with friends every day? Is it important to meet your friends face to face or can you stay friends by just chatting online?

The best articles answering these questions will win a prize.

Write your article.`,
        modelAnswer: `I think friends are one of the most important things in life, but I don't believe we need to contact each other every single day. Everyone is busy, and good friends understand that.
However, in my opinion, meeting face to face is much better than only chatting online. When you see your friends, you can share activities like playing sport or going to the cinema, and you understand each other's feelings more easily.
Of course, online chats are useful when friends live far away, and I message my friends most days. But nothing replaces being together. That's what real friendship is about.`,
        tips: [
          '回答两个问题：每天联系的重要性、必须见面还是网聊即可',
          '观点鲜明（不必每天联系，但面对面更好）',
          '也承认网聊的用处，论证更平衡',
          '100 词左右',
        ],
        contentKeywords: ['friends', 'important', 'contact', 'every day', 'face to face', 'chatting online', 'activities', 'feelings', 'useful', 'friendship'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

By the time I arrived, there were already lots of people at the party.

Write your story.`,
        modelAnswer: `By the time I arrived, there were already lots of people at the party. The music was loud and everyone seemed to be having a great time. I felt a little nervous because I didn't know many people there.
Then I saw my classmate Maria, and she waved at me. We danced and talked, and soon I forgot my worries. Later, a group of us played party games and ate lots of delicious food.
When the party finished, I didn't want to leave. On the way home, I realised I had made two new friends. I promised myself I would never miss a party again.`,
        tips: [
          '必须以给定句子开头，不能改动',
          '按时间顺序写聚会过程：到达时的感受、认识的人、活动',
          '结尾交代感受或收获',
          '用一般过去时，100 词左右',
        ],
        contentKeywords: ['arrived', 'party', 'music', 'nervous', 'maria', 'danced', 'games', 'food', 'new friends', 'promised'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-standard-2-writing-t4',
      title: 'PET 标准版官方真题 2 · Test 4 Writing',
      level: 'PET',
      collection: 'PET 标准版官方真题 2',
      paper: 'Writing',
      pages: '书页 72–73',
      source: 'B1 PET新题型官方真题 2.pdf',
      answerSource: '原创教学范文（官方 sample 见书页 162–167）',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend Jamie and the notes you have made.

From: Jamie
Subject: Your visit

Hi,
I'm so glad you're coming to visit me next weekend.
        —— Me too!
The weather will be good and it would be nice to spend a whole day outdoors. We could go horse riding or take a boat trip on the river. What would you like to do?
        —— Tell Jamie
I've invited some friends round for the evening while you're here. Each of my friends is going to bring something to eat. Could you make a dish too?
        —— Offer …
Have you got any questions about your visit?
        —— Ask about transport to Jamie's house
See you soon!
Jamie

Write your email to Jamie using all the notes.`,
        modelAnswer: `Hi Jamie,
I'm so excited about visiting you next weekend too – I can't wait!
I'd prefer to take a boat trip on the river. I love being on the water, and it's something I can't do in my town, so it will feel really special.
Of course I'll make a dish for the evening! How about a big pasta salad? It's easy to prepare and everyone seems to like it.
Just one question – how do I get to your house from the station? Could you come and pick me up, or should I take a bus?
See you next week!`,
        tips: [
          '四个批注必须全部回应：同样期待、选活动并说明理由、主动提出做什么菜、询问交通',
          '二选一明确表态（boat trip），并给出理由',
          '用 How about …? 提出具体菜品，体现 Offer 功能',
          '结尾自然追问交通方式，100 词左右',
        ],
        contentKeywords: ['excited', 'visit', 'boat trip', 'river', 'prefer', 'because', 'dish', 'pasta salad', 'question', 'station', 'pick me up', 'bus'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on an English-language website.

Articles wanted!

A great film

What's your favourite film?
What do you like about it?
How important is it to read film reviews before choosing which film to see?

Write an article answering these questions, and we'll publish the best ones on our website.

Write your article.`,
        modelAnswer: `My favourite film is a cartoon about a young robot who learns to understand human feelings. What I love most about it is the story – it's funny and exciting, but it also made me cry at the end.
The pictures are amazing too. Every scene looks like a painting, and the music fits each moment perfectly.
As for reviews, I don't usually read them before watching a film. Reviews can spoil the plot, and I prefer to decide for myself. If a film has a good story, that's all I need.`,
        tips: [
          '回答三个问题：最喜欢的电影、喜欢它什么、看影评是否重要',
          '具体说出喜欢的点（故事、画面、音乐），不要只说 interesting',
          '对影评给出明确态度并说明理由',
          '100 词左右',
        ],
        contentKeywords: ['favourite film', 'robot', 'story', 'funny', 'exciting', 'pictures', 'music', 'reviews', 'spoil', 'decide', 'myself'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Jan was surprised when her friend gave her a large brown envelope.

Write your story.`,
        modelAnswer: `Jan was surprised when her friend gave her a large brown envelope. 'What's this?' she asked, but her friend just smiled and told her to open it.
Inside, there were two concert tickets for Jan's favourite band. Her mouth fell open – the show had sold out months ago!
That evening, they sang along to every song and danced until the hall closed. On the way home, Jan thanked her friend a hundred times. It was, she said, the best surprise she had ever had.`,
        tips: [
          '必须以给定句子开头，不能改动',
          '先设置悬念（信封里是什么），再揭晓答案',
          '围绕"惊喜"展开：揭晓、反应、当晚经历、感谢',
          '对话与描写结合，用一般过去时，100 词左右',
        ],
        contentKeywords: ['jan', 'envelope', 'surprised', 'open', 'tickets', 'concert', 'band', 'sold out', 'danced', 'thanked', 'best surprise'],
      },
    ],
  },
];
