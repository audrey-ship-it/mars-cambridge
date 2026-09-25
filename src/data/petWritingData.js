// PET Writing — 8 mock tests from 《PET 全真模拟试题（8套）》+ Test 1–4 from《PET 青少版官方真题 3》
// Part 1 email using all notes (~100 words); Part 2 choose article OR story (~100 words).
// Model answers are original B1 teaching examples, not purported official answer-key text.
// Fields per item (consumed by WritingCard):
//   part, q?, type ('guided_writing'|'article'|'story_writing'), title,
//   minWords, prompt, modelAnswer, tips, contentKeywords?

export const petWritingTests = [
  {
    meta: {
      id: 'pet-mock-1-writing',
      title: 'PET 全真模拟试题 1 · Writing',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '19–20',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your friend Amy and the notes you have made.

From: Amy
Subject: Food in your country

Hi (your name),
My Geography teacher has asked me to prepare a presentation on what people eat abroad, so I hope you can help me to find out about food in your country.
        —— glad to help
Can you tell me something interesting about what people eat where you live?
        —— name a couple of dishes
I think it would be great if I could add some photos of these foods, too. Do you have any interesting pictures you have taken yourself?
        —— offer to send pictures
Finally, I'd like to cook something easy to bring to class. The recipes are easy to find but I don't know which one to choose...
        —— suggest your favourite local food
That's all for now. Write soon!
Amy

Write your email to Amy using all the notes.`,
        modelAnswer: `Hi Amy,
Thanks for your email — I'd be really glad to help you with your presentation!
Where I live, people eat lots of rice and noodles. Two popular dishes are dumplings and fried rice. Dumplings are small pieces of meat and vegetables in a thin pastry, and we usually eat them at Chinese New Year.
I took some photos of these dishes last weekend, so I can send them to you if you like.
For something easy to cook, I'd suggest fried rice: you only need rice, eggs and a few vegetables. I'm sure your classmates will love it!
Best wishes,
Li Hua`,
        tips: ['开头先表示乐意帮忙', '说出两道菜并简单介绍', '主动提出发照片', '建议一道容易做的本地菜', '100词左右，注意称呼和署名'],
        contentKeywords: ['glad', 'help', 'dumplings', 'fried rice', 'noodles', 'photos', 'send', 'suggest', 'easy', 'cook', 'hi', 'best wishes'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this advertisement in a fitness magazine.

HEALTH AND SPORT
What do you do to keep fit?
Is physical exercise enough to be healthy? Why / Why not?
Write an article answering these questions and we will put the best one in next month's issue.

Write your article.`,
        modelAnswer: `Keeping fit is important to me. I try to do some exercise almost every day: I usually go for a thirty-minute run before school, and at the weekend I play basketball with my friends in the park.
In my opinion, however, physical exercise alone is not enough to be healthy. We also need to eat well, which means lots of fruit and vegetables and not too much sugar or fast food. Sleeping for eight hours a night and drinking plenty of water are important too.
To sum up, exercise, good food and enough sleep together make a healthy lifestyle.`,
        tips: ['回答三个问题：怎么健身、运动是否足够、原因', '用 In my opinion / To sum up 组织观点', '说明饮食和睡眠同样重要', '100词左右'],
        contentKeywords: ['exercise', 'fit', 'run', 'healthy', 'food', 'vegetables', 'sleep', 'opinion', 'because', 'important', 'lifestyle'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

When I opened the door, all I could see was a parcel on the doormat.

Write your story.`,
        modelAnswer: `When I opened the door, all I could see was a parcel on the doormat. I picked it up carefully and took it into the kitchen. It was quite heavy, and there was no name on it.
I opened it slowly. Inside, I found a beautiful wooden music box with a letter. The letter said that the box was a birthday present from my grandmother, who lived far away and could not visit us.
When I turned the key, it played my favourite song. I felt very happy and immediately called my grandmother to say thank you.`,
        tips: ['必须以给定句子开头', '用一般过去时', '写清包裹里有什么、谁寄来的', '加入感受和结尾', '100词左右'],
        contentKeywords: ['parcel', 'opened', 'kitchen', 'found', 'letter', 'present', 'grandmother', 'felt', 'called', 'thank', 'suddenly', 'when', 'finally'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-2-writing',
      title: 'PET 全真模拟试题 2 · Writing',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '39–40',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English cousin and the notes you have made.

From: Christine
Subject: Coming to England this summer

Dear (your name),
I'm so glad that you are coming to England this summer!
        —— me too
Dad and I will pick you up from the airport, so let me know what time your plane lands.
When you arrive, we could either go to eat at a new Japanese restaurant or we could eat at home. What would you prefer?
        —— give details
As you are here for a week, we'll have plenty of time. What sort of activities do you want to do during your stay?
        —— explain
I can't wait to see you! Write soon,
        —— suggest
Love
Christine

Write your email to your English cousin using all the notes.`,
        modelAnswer: `Dear Christine,
Thanks for your email. I'm so excited too — I can't wait to come to England!
My plane lands at six o'clock in the evening on 12th July, so you and your dad can pick me up then.
For dinner, I'd prefer to eat at home, if that's OK. I always feel tired after a long flight, and I'd love to try your mum's cooking!
During the week, I'd really like to visit London, see the British Museum and walk along the beach near your town.
I also suggest we spend one day just relaxing and watching films at home.
See you soon!
Love,
Li Hua`,
        tips: ['开头回应对方的兴奋之情（me too）', '告知航班到达的具体时间，方便接机', '就日餐店还是家里吃饭给出选择并说明细节（give details）', '解释自己想参加的活动（explain）', '结尾提出一项建议（suggest），100词左右，注意 Dear/Love 的称呼'],
        contentKeywords: ['excited', 'plane lands', '12th july', 'prefer', 'at home', 'tired', 'activities', 'london', 'beach', 'suggest', 'relaxing', 'love'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this advertisement on a website.

COMPUTER GAMES
Do you enjoy playing computer games?
Which is your favourite one?
What do you like about it?
Write an article answering these questions and we will publish the best one in next month's issue.

Write your article.`,
        modelAnswer: `Yes, I really enjoy playing computer games, although I only play at the weekend because I have lots of homework during the week.
My favourite game is Minecraft. In this game, you build your own world using different blocks, and there are no fixed rules, so you can be really creative.
What I like most is that I can play online with my friends. Last Saturday, for example, we built a huge castle together and it was great fun. I also like the music, which is really relaxing.
In my opinion, games are enjoyable as long as you don't play for too long.`,
        tips: ['依次回答三个问题：是否喜欢、最爱的游戏、喜欢的理由', '说明玩游戏的时间安排，体现节制', '用具体例子（如和朋友一起建造城堡）支撑理由', '用 In my opinion 结尾补充看法', '100词左右'],
        contentKeywords: ['enjoy', 'computer games', 'weekend', 'favourite', 'minecraft', 'blocks', 'creative', 'online', 'friends', 'castle', 'fun', 'opinion'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

I sat on the bus with the kitten in my arms, wondering how to convince mum and dad to keep him.

Write your story.`,
        modelAnswer: `I sat on the bus with the kitten in my arms, wondering how to convince mum and dad to keep him. I had found him alone in a box near the bus stop, crying softly.
When I got home, I gave the kitten a warm bath and fed him some milk. Then I carried him into the living room, where mum and dad were watching TV. At first, they looked serious, but when the little kitten jumped onto dad's knee and fell asleep, dad smiled.
'Can we keep him, please?' I asked. Mum looked at dad, then at the kitten, and finally nodded. I felt so happy!`,
        tips: ['必须逐字使用给定开头句', '全文以一般过去时为主', '按时间顺序写发现小猫、回家说服父母的过程', '用 At first / finally 等词制造情节起伏', '写出结局和心情，100词左右'],
        contentKeywords: ['bus', 'kitten', 'convince', 'found', 'box', 'bath', 'milk', 'serious', 'jumped', 'asleep', 'smiled', 'finally'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-3-writing',
      title: 'PET 全真模拟试题 3 · Writing',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '59–60',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your Uncle George (your mother's brother) and the notes you have made.

From: Uncle George
Subject: Your mum's birthday

Dear (your name),
I've got some ideas about how to celebrate your mum's birthday next Saturday.
There is a fantastic park near my house. How about having a day out there? We could have a picnic with the whole family (all your cousins are free that day)!
        —— great
What type of food do you think we should take?
        —— suggest
Would you like Aunt Sarah to make the birthday cake, or is it better to buy one?
        —— explain
We need to get your mum a present too. What do you think she would like?
        —— tell Uncle George
Reply soon!
Uncle George

Write your email to your Uncle George using all the notes.`,
        modelAnswer: `Dear Uncle George,
Thanks for your email. A day out in the park is a great idea, and I'm sure all my cousins will love it too!
For the picnic, I suggest we take easy food that people can eat with their hands, like chicken sandwiches, fruit salad and crisps. We should also bring some juice and water.
About the cake, I think Aunt Sarah should make it because homemade chocolate cake always tastes much better than one from a shop, and Mum loves it.
For a present, Mum really enjoys reading, so a new book by her favourite writer would be perfect.
See you on Saturday!
Love,
Li Hua`,
        tips: ['开头先称赞公园野餐的主意', '建议适合野餐、方便手拿的食物', '解释蛋糕让 Aunt Sarah 做还是买，并说明原因', '告诉叔叔妈妈会喜欢什么礼物', '100词左右，注意邮件称呼和署名'],
        contentKeywords: ['great', 'picnic', 'suggest', 'sandwiches', 'fruit', 'juice', 'cake', 'homemade', 'explain', 'present', 'book', 'dear', 'love'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on the school notice board.

Articles wanted!
What's your favourite possession?
Write an article describing your favourite possession.
When did you get it? Was it a present?
Why is it special to you?
The best article we receive will win a prize of £5!

Write your article.`,
        modelAnswer: `My favourite possession is my old blue bicycle. I have had it for almost three years.
I got it on my thirteenth birthday. It was a present from my parents, and my grandfather helped them choose it, so it is very special to me.
I ride it to school every day, and at weekends I often cycle to the park with my friends. It is fast and comfortable, and it keeps me fit.
Last month I fell off and broke a pedal, but my father repaired it the same day. I hope I can keep it for many more years, because riding it always makes me feel free and happy.`,
        tips: ['回答全部要点：物品、何时得到、是否礼物、为何特别', '按"来历→用途→一件小事"的顺序组织', '描述用途用一般现在时，回忆得到用一般过去时', '加入个人感受作为结尾', '100词左右'],
        contentKeywords: ['possession', 'bicycle', 'present', 'parents', 'grandfather', 'special', 'ride', 'school', 'weekends', 'fit', 'repaired', 'happy'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your class is collecting stories in English for a book that will be sold locally.
Your story must begin with this sentence.

It was the most dangerous game they had ever played.

Write your story.`,
        modelAnswer: `It was the most dangerous game they had ever played. My friends and I were exploring an old wooden bridge near the lake when Tom dared everyone to cross it.
The bridge looked safe at first, but half-way across I heard a loud noise, and some of the wood began to break under our feet. "Go back!" shouted Tom. We turned slowly and held each other's hands. My heart was beating fast, but step by step we returned to the grass.
When we were safe, nobody spoke for a minute. Then Tom said quietly, "Let's never do that again," and we all promised never to play such a dangerous game.`,
        tips: ['必须逐字以给定句子开头', '用一般过去时叙述危险经历', '写清游戏是什么、发生了什么危险', '描述动作顺序和紧张的感受', '结尾交代结果或教训，100词左右'],
        contentKeywords: ['dangerous', 'game', 'bridge', 'lake', 'cross', 'wood', 'break', 'shouted', 'heart', 'safe', 'promised', 'never'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-4-writing',
      title: 'PET 全真模拟试题 4 · Writing',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '79–80',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your e-pal Aidan and the notes you have made.

From: Aidan
Subject: School in your country

Hi (your name),
I'm going to spend a year in your country and learn the language. Since I'll have to go to school there, I'd like to know what it's like to be a student there.
        —— great
Here in Canada I'm in Year 9 and I study many interesting subjects like English, French, Maths and Social Sciences. Can you tell me about the subjects you study at secondary school?
        —— explain
Also, what time does school start and finish in your country? Do you go to school on Saturdays?
        —— give details
I'm also on my school's hockey team and I love sports. What kind of sports do you practise at school? Which do you think I would prefer?
        —— suggest
Thank you so much for your help. Bye for now!
Aidan

Write your email to your friend Aidan using all the notes.`,
        modelAnswer: `Hi Aidan,
Thanks for your email. I think it's great that you're coming to spend a year here — you'll love it!
At my secondary school we study Chinese, Maths, English, Physics, History and Geography. We also have IT, PE and Art. My favourite subject is English because our teacher is really funny.
School starts at eight o'clock in the morning and finishes at half past four in the afternoon. We don't go to school on Saturdays, so we have the weekend free.
At school we play basketball, table tennis and badminton. Since you love team sports, I suggest you join the basketball team. I'm sure you'll be really good at it!
Best wishes,
Li Hua`,
        tips: ['开头先对他来中国学习一年表示高兴（great）', '解释自己在中学学习的主要科目（explain）', '详细说明上学和放学时间，以及周六是否上课（give details）', '介绍学校的运动项目，并建议他会喜欢的一项（suggest）', '100词左右，注意邮件称呼和署名'],
        contentKeywords: ['great', 'subjects', 'chinese', 'maths', 'english', 'physics', 'starts', 'finishes', 'saturdays', 'sports', 'basketball', 'suggest'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this notice in a bookshop.

THE JOYS OF READING
What sort of books do you enjoy reading?
Can reading help you to improve your life?
Why / Why not?
Write an article answering these questions and we will publish the best one in the bookshop's weekly magazine.

Write your article.`,
        modelAnswer: `I love reading, and I usually read for about an hour before I go to bed. My favourite sorts of books are adventure stories and science fiction. I enjoy them because they take me to exciting worlds and I never know what will happen next. I also sometimes read books about history.
In my opinion, reading can really improve your life. Firstly, it helps you learn new words and become better at writing. Secondly, you can learn interesting facts about the world without leaving your room. For example, I learnt a lot about ancient Egypt from a book last month.
That's why I think everyone should read more.`,
        tips: ['依次回答：喜欢什么类型的书、阅读能否改善生活、原因', '用 Firstly / Secondly 分条说明理由', '举一个具体事例（如从历史书中学到知识）', '结尾用 That\'s why... 总结观点', '100词左右'],
        contentKeywords: ['reading', 'books', 'adventure', 'science fiction', 'history', 'opinion', 'improve', 'words', 'writing', 'facts', 'example', 'egypt'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `You must write a story for your English teacher.
Your story must begin with this sentence.

Mary picked up the bottle from the sand and saw there was a message in it.

Write your story.`,
        modelAnswer: `Mary picked up the bottle from the sand and saw there was a message in it. She was walking along the beach with her dog when she found it, half buried in the wet sand.
She opened the bottle carefully and took out a yellow piece of paper. In childish writing, it said, "If you find this, please write to me! My name is Jack and I live by the sea." There was an address at the bottom.
When Mary got home, she wrote a letter to Jack. A week later, Jack replied, and they soon became good friends. Mary still keeps the old bottle on her desk.`,
        tips: ['必须逐字使用给定开头句', '全文以一般过去时为主', '按“发现漂流瓶→读到字条→书信往来”的顺序叙述', '写清字条内容、人物和结局', '100词左右'],
        contentKeywords: ['bottle', 'sand', 'message', 'beach', 'dog', 'buried', 'paper', 'jack', 'address', 'letter', 'friends', 'keeps'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-5-writing',
      title: 'PET 全真模拟试题 5 · Writing',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '99–100',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your friend Harry and the notes you have made.

From: Harry
Subject: My birthday party

Dear (your name),
It's my birthday next Saturday and I want to invite you to my party!
        —— thank Harry
I'm having the party at my house at 8 p.m., but we don't have much space. Do you think I should invite the whole class, or can I just ask my best friends?
        —— tell Harry
I know you have good taste in music, so I wanted to ask you to give me some ideas! I really like rock music. What kind of music do you think we should play?
        —— give opinion
My mum wants to know what she needs to buy for the party. What kind of food do you think we should have?
        —— suggest
Reply soon!
Harry

Write your email to your friend Harry using all the notes.`,
        modelAnswer: `Dear Harry,
Thanks so much for inviting me to your birthday party — I'd love to come! It sounds fantastic, and I'm sure it will be a great night.
About who to invite, I think you should just ask your best friends. Your house isn't very big, and a smaller group will feel more relaxed.
For the music, some rock songs are great for a party, but I'd also play a few pop songs, because almost everyone can dance to them.
For food, I suggest pizza and crisps with some orange juice. They are easy to eat and nobody will need plates.
See you on Saturday!
Best wishes,
Li Hua`,
        tips: ['开头先感谢 Harry 的邀请', '告诉 Harry 只邀请好朋友即可，因为家里空间有限', '就音乐给出观点：摇滚之外加几首流行歌，方便大家跳舞', '建议简单方便、无需餐盘的派对食物', '100词左右，注意 Dear/Best wishes 的称呼和署名'],
        contentKeywords: ['harry', 'birthday', 'party', 'thank', 'best friends', 'space', 'rock', 'pop', 'music', 'suggest', 'pizza', 'dear'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on the school notice board.

Articles wanted!
How can students improve their English?
Write an article about your experience of learning English.
How long have you studied it?
What do you find easy and difficult?
What advice can you give students to help them learn better?
We'll publish the best articles in the next edition of our school magazine!

Write your article.`,
        modelAnswer: `I have studied English for about six years, since I was nine, and these days I really enjoy it.
For me, speaking and reading are quite easy. I often read online articles about sport, and I can usually understand most of the words. However, listening is still difficult, because native speakers talk so fast, and I sometimes worry about making mistakes.
My advice is to watch English films with subtitles and to learn five new words every day. Students should also try to speak in class as often as possible, even if they feel shy.
If you keep practising, I'm sure your English will improve!`,
        tips: ['按题目提示组织：学了多久、觉得容易什么、困难什么、给出建议', '描述个人学习经历，注意现在完成时与一般现在时的配合', '用 However 转折引出听力难点', '用 My advice is... 提出具体可行的建议', '100词左右'],
        contentKeywords: ['english', 'studied', 'six years', 'speaking', 'reading', 'easy', 'listening', 'difficult', 'advice', 'films', 'subtitles', 'words'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your class is collecting stories in English for a book that will be sold locally.
Your story must begin with this sentence.

The wind was strong and the rain was terrible.

Write your story.`,
        modelAnswer: `The wind was strong and the rain was terrible. I was walking home from school alone when I suddenly heard a small cry behind a bus stop.
I looked down and saw a wet little dog, shaking with cold. I took off my jacket, picked him up and carried him home. My mum dried him with a towel and gave him some warm food.
That evening, we saw posters all over town for a lost dog called Max. I called the number, and ten minutes later a worried boy arrived with his parents. When Max jumped into his arms, everyone smiled. I felt proud of what I had done.`,
        tips: ['必须逐字以给定句子开头', '全文以一般过去时为主', '按时间顺序写发现小狗、带回家照顾、归还主人的过程', '用天气和小狗的状态烘托气氛', '结尾写出自己的感受，100词左右'],
        contentKeywords: ['wind', 'rain', 'cry', 'dog', 'jacket', 'towel', 'posters', 'max', 'called', 'boy', 'jumped', 'proud'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-6-writing',
      title: 'PET 全真模拟试题 6 · Writing',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '119–120',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from Aunt Daphne and the notes you have made.

From: Aunt Daphne
Subject: Advice on new smartphone

Dear (your name),
Yesterday I dropped my mobile phone by accident and it isn't working anymore.
Sorry, but anyway I need to get a new one, but Tom says I'd better buy an older smartphone. What do you think?
        —— give your opinion
Anyway, I have no idea about new models and their technology. What should I ask for when I go to the shop?
        —— suggest
Well, I really hope to hear from you soon. I'm in a hurry because I have no other phone at home, that's why I'm writing to you!
Write soon,
        —— offer to go with her
Love
Aunt Daphne

Write your email to your Aunt Daphne using all the notes.`,
        modelAnswer: `Dear Aunt Daphne,
I'm sorry to hear that you dropped your phone and it isn't working anymore!
In my opinion, I wouldn't buy an older phone. A new mid-range smartphone doesn't cost much more, but it's much safer and will last for several years.
When you go to the shop, I suggest you ask for a model with a big screen, a good camera and a battery that lasts all day. Don't forget to ask about the memory and the price, too.
I have no classes on Saturday, so I'd love to go with you and help you choose. I'm sure we'll find the perfect phone!
Write soon,
Love,
Li Hua`,
        tips: ['开头先为她摔坏手机感到难过', '就 Tom 的建议给出观点：不推荐旧手机，建议买中端新机', '建议她到店里询问屏幕、摄像头、电池续航和内存', '主动提出周六陪她一起去店里挑选', '100词左右，注意 Dear/Love 的称呼和署名'],
        contentKeywords: ['sorry', 'opinion', 'older', 'mid-range', 'smartphone', 'suggest', 'screen', 'camera', 'battery', 'memory', 'go with', 'love'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this ad in a wildlife magazine.

ARE YOU GREEN?
Do you think people should recycle more?
Why / Why not?
What do you do to help the environment?
Write an article answering these questions.
The best article will win a £100 prize
and be published on the school's One
Earth website next month.

Write your article.`,
        modelAnswer: `Yes, I strongly believe people should recycle much more than they do now. Recycling means less rubbish, cleaner streets and fewer trees cut down, and it also saves energy. If everyone recycled, there would be less pollution in our rivers and in the air.
Personally, I do several things to help the environment. At home, I put paper, plastic and glass in different recycling bins, and I always take a cloth bag to the supermarket instead of taking plastic bags. I also try to save water by turning off the tap while I brush my teeth.
In my opinion, small everyday actions can really make a difference.`,
        tips: ['明确表态人们应该更多回收利用，并说明原因（减少垃圾、节约能源、减少污染）', '结合题目要求，写出自己为环保做的具体事情', '举例尽量具体：分类回收、自带布袋、节约用水', '用 In my opinion 结尾总结观点', '100词左右'],
        contentKeywords: ['recycle', 'environment', 'rubbish', 'trees', 'energy', 'pollution', 'bins', 'paper', 'plastic', 'cloth bag', 'save water', 'opinion'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `You must write a story for your English teacher.
Your story must begin with this sentence.

It was a beautiful summer afternoon and
the sun was shining when we set off.

Write your story.`,
        modelAnswer: `It was a beautiful summer afternoon and the sun was shining when we set off. My friends and I had decided to cycle to the lake for a picnic.
Everything was perfect until, half-way there, I heard a noise and my front tyre went flat. We stopped in a small village, and a kind old man who lived there invited us into his garden. He repaired the tyre for us and gave us cold lemonade while we waited.
When we finally reached the lake, the sun was going down, but we still had our picnic and swam in the warm water. It turned out to be our best trip.`,
        tips: ['必须逐字以给定句子开头', '全文以一般过去时（含过去完成时）叙述', '写清出发去哪、途中遇到什么意外、如何解决', '用 until / when / finally 串联情节', '结尾交代结果和感受，100词左右'],
        contentKeywords: ['summer', 'sun', 'set off', 'cycle', 'lake', 'picnic', 'tyre', 'flat', 'village', 'repaired', 'lemonade', 'finally'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-7-writing',
      title: 'PET 全真模拟试题 7 · Writing',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '139–140',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your friend Zac and the notes you have made.

From: Zac
Subject: Summer job at a campsite

Hi (your name),
School is almost over and I'd like to apply for a summer job at a campsite. I could have fun and also save money for my holiday in August!
        —— great idea
How do you think I should apply? Should I send them an email or phone them to have an interview?
        —— tell him
What should I wear to the interview? I'm asking you because you told me you had an interview last summer so I hope you can help me.
        —— suggest
Unfortunately, I have no work experience so I really don't know how to prepare for the interview. Have you got any idea?
        —— suggest
Write soon and have a nice weekend!
Zac

Write your email to your friend Zac using all the notes.`,
        modelAnswer: `Hi Zac,
Thanks for your email. A summer job at a campsite is a great idea — you'll have fun and save money too!
I think you should phone them. It's more personal than an email, and you can ask for an interview at the same time.
For the interview, I suggest wearing clean trousers and a shirt. You don't need a suit, but you should look smart.
Don't worry about having no work experience. Before the interview, make a list of your strengths, like being good with people and working in a team. You can also mention that you play sports and help at school events. Remember to arrive a few minutes early.
Good luck!
Best wishes,
Li Hua`,
        tips: ['开头先称赞营地暑期工作的想法很棒（great idea）', '明确告诉 Zac 该打电话还是写邮件申请（tell him）', '建议面试时的着装，整洁得体即可（suggest）', '针对没有工作经验，建议列出个人优点并提前准备（suggest）', '100词左右，注意 Hi/Best wishes 的称呼和署名'],
        contentKeywords: ['zac', 'great idea', 'phone', 'email', 'interview', 'trousers', 'shirt', 'smart', 'work experience', 'strengths', 'team', 'early'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this ad on a website.
Do you often use social media?
Are social networks a good way to make friends?
Why/Why not?
Send us your article answering these questions and we will post the best one on our website.

Write your article.`,
        modelAnswer: `Yes, I use social media almost every day. I usually spend about twenty minutes on apps like Instagram after finishing my homework, mostly to watch videos or message my classmates.
In my opinion, social networks are not the best way to make real friends. Firstly, it is much easier to talk honestly when you meet someone face to face. Secondly, some people online are not who they say they are, which can be dangerous.
However, social media is great for keeping in touch with friends from school or my old neighbourhood. For me, real friendships are built by spending time together, not online.`,
        tips: ['依次回答三个问题：是否常用社交媒体、是否适合交友、原因', '先说明自己使用社交媒体的习惯，再用 In my opinion 表明观点', '用 Firstly / Secondly 分条说明理由，如面对面交流更真诚、网络身份有风险', '结尾补充社交媒体适合与老朋友保持联系，观点更全面', '100词左右'],
        contentKeywords: ['social media', 'apps', 'instagram', 'networks', 'friends', 'opinion', 'firstly', 'face to face', 'dangerous', 'keeping in touch', 'friendships', 'online'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `You must write a story for your English teacher.
Your story must begin with this sentence.

I was reading in my bedroom when the light suddenly went out.

Write your story.`,
        modelAnswer: `I was reading in my bedroom when the light suddenly went out. At first, I couldn't see anything, and the house was completely silent. Then I heard a strange noise downstairs, and my heart started beating fast.
I took my phone, turned on its light and walked slowly down the stairs. The noise grew louder. In the kitchen, I found my little brother holding a torch and a cake with ten candles. "Happy birthday!" he shouted. Our parents appeared behind him, smiling.
I had completely forgotten it was my birthday. I laughed, and we ate the cake together by candlelight.`,
        tips: ['必须逐字以给定句子开头', '全文以一般过去时为主', '写清灯灭后听到的声音和下楼查看的过程', '用 At first / Then 制造悬念，结尾安排意外惊喜', '100词左右'],
        contentKeywords: ['went out', 'silent', 'noise', 'heart', 'phone', 'stairs', 'torch', 'cake', 'candles', 'birthday', 'parents', 'candlelight'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-8-writing',
      title: 'PET 全真模拟试题 8 · Writing',
      level: 'PET',
      collection: 'PET 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '159–160',
      source: 'PET 全真模拟试题（8套）',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English teacher, Miss Blair, and the notes you have made.

From: Miss Blair
Subject: Pop Art exhibition

Dear Class,
I'd like to take you to the Pop Art exhibition in the city centre next week.
        —— great
The best days to visit would be either Saturday or Sunday afternoon. Which day would you prefer?
        —— give preference
Lunch is included and we'll eat in a local restaurant. What sort of food should we have?
        —— say which and explain
If the weather is good, we can go to the park later. What activities or games do you like to do?
        —— tell Miss Blair
Reply soon!
Carol Blair

Write your email to Miss Blair using all the notes.`,
        modelAnswer: `Dear Miss Blair,
Thank you for your email. I think the Pop Art exhibition is a great idea, and I'm really looking forward to it!
I would prefer to go on Saturday afternoon, because on Sunday I usually visit my grandparents with my family.
For lunch, I'd like to have pizza, please. Almost everyone in our class likes it, and an Italian restaurant near the gallery is quick and cheap.
If we go to the park later, I'd love to play football or frisbee with my classmates. We could also take some photos, which would be good fun.
Thank you for organising this trip!
Best wishes,
Li Hua`,
        tips: ['开头先对参观波普艺术展表示赞同（great）', '说明周六还是周日下午更合适，给出偏好（give preference）', '说出想吃的食物并解释原因（say which and explain）', '告诉老师自己在公园想做的活动或游戏（tell Miss Blair）', '100词左右，注意邮件称呼和署名'],
        contentKeywords: ['great', 'exhibition', 'prefer', 'saturday', 'sunday', 'pizza', 'italian', 'park', 'football', 'frisbee', 'photos', 'best wishes'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement in a local newspaper.

NEWS
ARTICLES WANTED
What was your best holiday?
Write an article telling us about the best holiday you've ever had!
Where did you go? Who were you with?
Why did you enjoy it so much?
Your article may be published in this school newsletter!

Write your article.`,
        modelAnswer: `The best holiday I've ever had was last summer, when I went to a small island with my family.
We stayed for a week in a house near the beach. Every morning, my brother and I swam in the clear blue sea, and in the afternoons we explored the island on rented bikes. One day, we took a boat trip and saw colourful fish and a dolphin!
I enjoyed it so much because life there was slow and relaxing, and we spent all day outside together. In the evenings, we ate fresh fish by the harbour and watched the sun go down. I will never forget that wonderful week.`,
        tips: ['依次回答去了哪里、和谁一起、为什么如此开心', '全文以一般过去时为主，按"上午→下午→晚上"安排一天的活动', '加入具体细节，如划船时看到彩色的鱼和海豚', '结尾表达难忘之情', '100词左右'],
        contentKeywords: ['best holiday', 'island', 'family', 'beach', 'swam', 'rented bikes', 'boat trip', 'dolphin', 'relaxing', 'fresh fish', 'harbour', 'sun'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Alex stood up, grabbed his phone and ran out of the room.

Write your story.`,
        modelAnswer: `Alex stood up, grabbed his phone and ran out of the room. His mother and I looked at each other in surprise.
Ten minutes earlier, Alex had received a strange message saying that his dog, Buster, was seen running along the main road. Without saying a word, he jumped on his bike and rode towards town.
I followed him in the car. At last, near the petrol station, we saw Buster sitting under a tree, safe and sound. When Alex called his name, the dog ran towards him, wagging his tail.
"Don't ever run away again," Alex said quietly, holding Buster tightly. On the way home, he never stopped smiling.`,
        tips: ['必须逐字以给定句子开头', '用一般过去时（含过去完成时）写清他为什么跑出去', '按时间顺序写接到消息、骑车寻找、找到狗的过程', '加入对话、动作和心情', '100词左右'],
        contentKeywords: ['phone', 'ran out', 'message', 'dog', 'buster', 'bike', 'followed', 'petrol station', 'safe and sound', 'wagging', 'tail', 'smiling'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-9-writing',
      title: 'PET 青少版官方真题 3 · Test 1 · Writing',
      level: 'PET',
      collection: 'PET 青少版官方真题 3（2025 新增）',
      paper: 'Writing',
      pages: '18–19',
      source: 'PET3 - Test 1 完整试卷（含口语图片）.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English-speaking friend, Bailey, and the notes you have made.

From: Bailey
Subject: Space Museum

Hi,
I'm really pleased you're coming to the Space Museum with me and my family next weekend.
        —— Me too!
As well as seeing the exhibition, we can do a special activity: we can make a model of a rocket, or try on some space suits. Which would you prefer?
        —— Tell Bailey
A real astronaut will be at the museum! We can send a question to the museum in advance and the astronaut will answer it on the day of our visit. Can you think of a good question?
        —— My question: ...
Would you like to have dinner with us afterwards?
Let me know!
Bailey

Write your email to Bailey using all the notes.`,
        modelAnswer: `Hi Bailey,
Thanks for your email. I'm really excited about next weekend too – I can't wait to visit the Space Museum with your family!
I'd prefer to make a model of a rocket, please. I've always loved building things, and I think trying on space suits might feel a bit strange.
Here's my question for the astronaut: "How long does it take to travel to the International Space Station?" I'd love to know the answer.
Thank you so much for inviting me to dinner afterwards. I'd really like that!
See you soon,
Li Hua`,
        tips: ['四个批注必须全部回应：表达同样期待、说明活动偏好并给理由、写出给宇航员的问题、感谢晚餐邀请', '语气友好，开头称呼 Bailey、结尾署名', '活动偏好可用 I\'d prefer to ... because ...', '100词左右'],
        contentKeywords: ['excited', 'rocket', 'space suits', 'prefer', 'question', 'astronaut', 'thank', 'dinner', 'hi', 'see you soon'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on an English-language website for young people.

Articles wanted!
Spending time outdoors
How much time do you spend outdoors?
How important is it for people to spend some of their free time outdoors?
What kind of outdoor activities are most fun for people to do together? Why?
We will publish the best articles answering these questions.

Write your article.`,
        modelAnswer: `I spend quite a lot of time outdoors. On weekdays, I usually walk to school and play in the garden after I finish my homework, and at the weekend I often go to the park with my friends.
In my opinion, it's really important to spend time outside. Fresh air and exercise are good for our health, and being outdoors always makes me feel happier and less stressed, especially after a busy day at school.
The most fun activities to do together are team games like football or basketball, because everyone can join in and they teach us to work with other people. Cycling trips are great too.
All in all, being outdoors is good for both our bodies and our friendships.`,
        tips: ['依次回答三个问题：自己户外时间多少、为什么重要、什么集体活动最有趣及原因', '用 In my opinion / All in all 串联观点', '给出健康、心情等理由', '100词左右'],
        contentKeywords: ['outdoors', 'park', 'friends', 'exercise', 'health', 'important', 'football', 'team', 'because', 'opinion'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

When Pat opened the book, an old letter fell out of it.

Write your story.`,
        modelAnswer: `When Pat opened the book, an old letter fell out of it. She picked it up and saw that it was addressed to her grandmother, so she took it downstairs to the kitchen.
Her grandmother was making tea. When she read the letter, she smiled. It had been written more than fifty years earlier by her best friend at school, who had moved to another country with her family. In the letter, the friend described the day they spent at the seaside together.
"I'd completely forgotten about it," her grandmother said quietly. After they finished reading, she put the letter carefully back inside the book and gave Pat a big hug.`,
        tips: ['必须逐字以给定句子开头', '用一般过去时，写清信是谁写的、内容是什么', '加入奶奶的动作、语言和心情', '结尾自然收束', '100词左右'],
        contentKeywords: ['letter', 'book', 'grandmother', 'read', 'smiled', 'friend', 'seaside', 'forgotten', 'hug', 'when'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-10-writing',
      title: 'PET 青少版官方真题 3 · Test 2 · Writing',
      level: 'PET',
      collection: 'PET 青少版官方真题 3（2025 新增）',
      paper: 'Writing',
      pages: '36–37',
      source: 'PET3 - Test 2 完整试卷（含口语图片）.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English teacher, Mr Allen, and the notes you have made.

From: Mr Allen
To: All students
Subject: New chess club

Dear students,
Some of you have asked me about starting up a chess club at school. I'm happy to organise this.
        —— Thank Mr Allen
I think all students should be able to join the club, not just people who already know how to play chess. Do you agree?
        —— Tell Mr Allen
When would it be better to have this club: at weekends or during the week?
        —— Explain
I'd like some students to design posters to advertise the club. Can you stay after school on Wednesday to help with this?
        —— No, because...
Let me know,
Ken Allen

Write your email to Mr Allen using all the notes.`,
        modelAnswer: `Dear Mr Allen,
Thank you very much for organising a chess club. I'm really pleased, because I've wanted to learn for a long time!
I completely agree that everyone should be able to join. Beginners like me need a chance to learn, and more experienced students can help us and make new friends.
In my opinion, it would be better to have the club during the week, because at weekends many students spend time with their families or do other activities.
I'm sorry, but I can't stay after school on Wednesday to design posters, because I have a piano lesson then. I could help on another day, though.
Best wishes,
Li Hua`,
        tips: ['四个批注全部回应：感谢老师、同意初学者加入并说明、解释时间偏好及原因、礼貌拒绝周三并给理由', '对老师语气礼貌，用 Dear Mr Allen / Best wishes', '拒绝时可另提替代方案', '100词左右'],
        contentKeywords: ['thank', 'chess', 'agree', 'beginners', 'learn', 'during the week', 'because', "can't", 'wednesday', 'best wishes'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement on an English-language website for young people.

Articles wanted!
A famous person
Tell us about a famous person that you like – for example, someone you follow online, an actor, a sportsperson or someone else.
Why do you like this person?
Do you think this person has an easy life? Why?
We'll publish the best articles answering these questions.

Write your article.`,
        modelAnswer: `A famous person I really admire is Liu Yang, the Chinese astronaut.
I like her because she is brave and extremely hard-working. She trained for many years before she became the first Chinese woman in space, and she always remained calm and determined. She also encourages young people, especially girls, to study science.
However, I don't think she has an easy life. Astronauts have to be away from their families for months, and their training is difficult and sometimes dangerous. They also have a lot of responsibility.
For these reasons, I think Liu Yang is an amazing person, and she will always be one of my heroes.`,
        tips: ['写清人物身份、喜欢的原因（品格+具体事例）、生活是否容易及理由', '用 However 转折讨论其生活', '可用 For these reasons 结尾', '100词左右'],
        contentKeywords: ['famous', 'admire', 'because', 'brave', 'hard-working', 'astronaut', 'however', 'difficult', 'reasons'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

Amy had always wanted to go inside the old house and now she had the chance.

Write your story.`,
        modelAnswer: `Amy had always wanted to go inside the old house and now she had the chance. Her uncle had just bought it, and he asked her to help him look around before the builders arrived.
When she pushed open the front door, the house was cold and full of dust. She walked slowly upstairs. In one of the bedrooms, she found an old wooden box under the bed. Inside were some children's toys, a hand-drawn map and a photograph of a young girl.
Amy took the box downstairs and showed it to her uncle. They decided to find out more about the family who had lived there. Amy couldn't wait to visit the old house again.`,
        tips: ['必须逐字以给定句子开头', '用一般过去时，写清她为什么有机会进去、在里面发现了什么', '按"进门→上楼→发现→下楼"的顺序写', '加入期待再访的结尾', '100词左右'],
        contentKeywords: ['old house', 'uncle', 'upstairs', 'bedroom', 'box', 'found', 'photograph', 'showed', 'decided', 'when'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-11-writing',
      title: 'PET 青少版官方真题 3 · Test 3 · Writing',
      level: 'PET',
      collection: 'PET 青少版官方真题 3（2025 新增）',
      paper: 'Writing',
      pages: '54–55',
      source: 'PET3 - Test 3 完整试卷（含口语图片）.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from your English teacher, Mr Burton, and the notes you have made.

From: Mr Burton
Subject: Healthy Living Day

Dear Student
Next month, our school's having a Healthy Living Day. All the students will do activities about having a healthy life.
        —— Good idea!
I'd like our class to make a video in English, either about healthy food or about sport and exercise. Which would be better?
        —— Explain
For the video, students will need to do things like find information or use the video camera. We'll need at least one presenter, too. How can you help?
        —— Tell Mr Burton
I'm having a meeting about Healthy Living Day after school this Tuesday. Can you come?
        —— Sorry, but...
Best wishes
Daniel Burton

Write your email to Mr Burton using all the notes.`,
        modelAnswer: `Dear Mr Burton,
Thank you for your email. I think the Healthy Living Day is a great idea, and I'm really looking forward to it!
In my opinion, a video about healthy food would be better. Many students eat too many snacks and don't know how to cook simple, healthy meals, so the video could really help them.
I'd be happy to be one of the presenters. I enjoy speaking in front of the class, and I can also help find information online.
I'm sorry, but I can't come to the meeting this Tuesday because I have a basketball match after school. Please send me an email and tell me what I've missed.
Best wishes,
Li Hua`,
        tips: ['四个批注全部回应：称赞活动、解释选食物还是运动并说明、告诉老师自己能帮什么、礼貌拒绝周二并给理由', '用 Dear Mr Burton / Best wishes', '说明能承担的具体任务（presenter / find information）', '100词左右'],
        contentKeywords: ['great idea', 'healthy food', 'video', 'because', 'presenter', 'help', "can't", 'tuesday', 'best wishes'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement in an English-language magazine for young people.

Articles wanted!
Education in the future
How different will education be in the future? For example, will students go to a school to study, or will they do online lessons at home?
Will students study the same subjects as they do now? Why?
We'll publish the best articles answering these questions.

Write your article.`,
        modelAnswer: `I think education will be quite different in the future. Students will probably do more lessons online at home, using computers or tablets to watch videos, send homework and talk to their teachers. This will be useful for students who live far away, or when they can't go to school.
However, I don't think schools will disappear completely, because students also need to meet friends, play sport together and learn in groups.
As for subjects, I believe students will still study maths, languages and science, since these skills will always be important. But there will probably be more lessons about technology and the environment.
In conclusion, learning will change, but schools and familiar subjects will remain.`,
        tips: ['回答两个问题：学习方式会怎样变化、科目是否相同及原因', '先让步（线上更多）再转折（学校不会消失）', '用 As for subjects / In conclusion 组织', '100词左右'],
        contentKeywords: ['future', 'online', 'school', 'students', 'however', 'subjects', 'science', 'technology', 'conclusion'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

As Marc got out of the car, he started to feel both excited and nervous.

Write your story.`,
        modelAnswer: `As Marc got out of the car, he started to feel both excited and nervous. It was the morning of the national tennis final, and his dad had driven him to the sports centre early.
Inside, hundreds of players and their families were walking around. Marc took a deep breath and went to find his coach. They warmed up together, and slowly his nervousness disappeared.
When his match began, Marc played better than ever. He hit every ball carefully and managed to win the final game.
As he received his medal, he looked at his dad, who was smiling and taking photos. Marc already felt excited about next year's competition.`,
        tips: ['必须逐字以给定句子开头', '用一般过去时，写清他去参加什么活动、紧张如何消失、结果如何', '加入深呼吸、热身等细节', '结尾回扣心情', '100词左右'],
        contentKeywords: ['nervous', 'tennis', 'coach', 'match', 'won', 'medal', 'smiling', 'excited', 'when', 'as'],
      },
    ],
  },
  {
    meta: {
      id: 'pet-mock-12-writing',
      title: 'PET 青少版官方真题 3 · Test 4 · Writing',
      level: 'PET',
      collection: 'PET 青少版官方真题 3（2025 新增）',
      paper: 'Writing',
      pages: '72–73',
      source: 'PET3 - Test 4 完整试卷（含口语图片）.pdf',
      answerSource: '原创教学范文',
      verified: true,
    },
    items: [
      {
        part: 1,
        type: 'guided_writing',
        title: 'Part 1 · 邮件写作',
        minWords: 100,
        prompt: `Read this email from Sam Taylor, the organiser of a writing competition for a magazine, and the notes you have made.

From: Sam Taylor
Subject: Competition

Hello,
I'm delighted to tell you that you've won our story-writing competition!
        —— Great!
As a prize, you and your family can choose to go to a seaside resort for a week, or stay in a city-centre hotel for a week. Which would you prefer?
        —— Explain
We'd like to publish your story in our magazine next month. Are you happy for us to do that?
        —— Tell Sam
We're organising a dinner for people who did well in the competition. It's on the 21st of next month. Can you come?
        —— Yes, but...
Best wishes,
Sam

Write your email to Sam Taylor using all the notes.`,
        modelAnswer: `Dear Sam,
Thank you for your email. I'm so happy to hear that I've won the story-writing competition – it's amazing news!
My family and I would prefer to go to a seaside resort for a week. We all love swimming and walking by the sea, and it's a better place to relax than a busy city centre.
Yes, I'd be really pleased for you to publish my story in the magazine next month. It's exciting to think that lots of people will read it!
I can come to the dinner on the 21st, but I might arrive a little late because I have a maths class that afternoon.
Best wishes,
Li Hua`,
        tips: ['四个批注全部回应：表达惊喜、解释奖品偏好及理由、告诉 Sam 同意发表、接受晚宴但说明可能迟到', '用 Dear Sam / Best wishes', '偏好可用 would prefer to ... because ...', '100词左右'],
        contentKeywords: ['great', 'won', 'seaside', 'prefer', 'because', 'publish', 'story', 'yes', 'dinner', 'late'],
      },
      {
        part: 2,
        q: 2,
        type: 'article',
        title: 'Part 2 · 文章写作（二选一）',
        minWords: 100,
        prompt: `You see this announcement in an English-language magazine for young people.

Articles wanted!
Wild animals
Is there a wild animal that you are particularly interested in? Why?
What do you think are the best ways of protecting wild animals and the places where they live?
The best articles answering these questions will appear in the magazine.

Write your article.`,
        modelAnswer: `The wild animal I'm most interested in is the giant panda. Pandas live in the mountains of China, and I've always loved them because they look so cute and they are very gentle. Sadly, they are also quite rare, so they need our protection.
In my opinion, the best way to protect wild animals is to look after the places where they live. Governments should create more national parks where hunting is forbidden, and stop cutting down forests or polluting rivers.
Scientists can also help by studying animals and breeding them in special centres, while zoos should teach people about the dangers they face.
If everyone works together, I believe animals like the giant panda will have a safer future.`,
        tips: ['回答两个问题：最感兴趣的动物及原因、保护动物和栖息地的方法', '可提国家公园、禁止捕猎、科学研究等具体措施', '用 In my opinion / If ... 组织观点', '100词左右'],
        contentKeywords: ['panda', 'interested', 'because', 'protect', 'national parks', 'hunting', 'forests', 'scientists', 'future'],
      },
      {
        part: 2,
        q: 3,
        type: 'story_writing',
        title: 'Part 2 · 故事写作（二选一）',
        minWords: 100,
        prompt: `Your English teacher has asked you to write a story.
Your story must begin with this sentence.

I saw that the new student was looking a bit worried, and I knew exactly how to help.

Write your story.`,
        modelAnswer: `I saw that the new student was looking a bit worried, and I knew exactly how to help. It was his first day at our school, and he was standing alone in the playground with a map in his hand.
I walked over and introduced myself. He was trying to find Room 14 for his maths lesson, so I offered to show him the way. As we walked, I told him about the school and introduced him to some of my friends.
Later that day, he sat with us at lunchtime and seemed much happier.
"I was really nervous this morning," he said with a smile. I was glad I had gone over to say hello, and we have been good friends ever since.`,
        tips: ['必须逐字以给定句子开头', '用一般过去时，写清新学生在担心什么、你怎样帮他', '加入对话和动作', '结尾写两人成为朋友', '100词左右'],
        contentKeywords: ['worried', 'new student', 'helped', 'introduced', 'showed', 'friends', 'happier', 'glad', 'when', 'since'],
      },
    ],
  },
]
