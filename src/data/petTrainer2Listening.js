// B1 Preliminary for Schools Trainer 2 (2024) · Trainer 2 听力
// 来源: PET Trainer2/PET Trainer2 电子版.pdf（书内 Teacher's Notes & Keys / Practice Test Keys 核对）
// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）
// PET Trainer 2 Test 1 听力数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 2 (2024) Test 1 Listening Exam Practice（书页 36–43 = PDF 37–44，OCR + 页面原图逐题核对）
// 答案来源：书内 Teacher's Notes & Keys（Test 1 Listening，书页 196–199）+ 书内 Audioscripts（PDF 167–170，Track 03/06/09/11）交叉核对
// 音频约定路径：public/audio/pet-trainer2/test-1/part-1..4.mp3（音频文件由主线程负责）

const TRAINER2_TEST_1_LISTENING = {
  meta: {
    id: "pet-trainer2-test1-listening",
    title: "PET Trainer 2 · Test 1 听力",
    level: "PET",
    collection: "PET Trainer 2（精讲精练）",
    book: "B1 Preliminary for Schools Trainer 2 (2024)",
    paper: "Listening",
    pages: "Test 1 Exam Practice · 书页 36–43",
    source: "PET Trainer2/PET Trainer2 电子版.pdf",
    answerSource: "书内 Teacher's Notes & Keys + 书内 Audioscripts 交叉核对",
    verified: false,
  },
  parts: {
    1: {
      type: "image_mcq",
      title: "Part 1 · 图片选择题",
      instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-1/part-1.mp3",
      items: [
        {
          q: "Where does Danny usually keep his sports bag?",
          image: "/images/pet/listening/trainer2/t1-q1.png",
          answer: 2,
          explanation:
            "爸爸猜在运动包里或床底下（上次放鞋的地方），Danny 说 “it's not on the hall table where I normally put it” —— 他平时把运动包放在门厅桌上，选 C。",
        },
        {
          q: "Which T-shirt did Tammy wear?",
          image: "/images/pet/listening/trainer2/t1-q2.png",
          answer: 0,
          explanation:
            "奶奶送的粉绿条纹 T 恤前一天借给了 Lily，她说 “I was wearing Lily's T-shirt instead of the one she'd bought me” —— 穿的是 Lily 的素色 T 恤（正好配裙子上的圆点），选 A。",
        },
        {
          q: "What's the girl's brother's new hobby?",
          image: "/images/pet/listening/trainer2/t1-q3.png",
          answer: 1,
          explanation:
            "弟弟上周末和朋友去了北海岸，“they introduced him to surfing” —— 新爱好是冲浪，选 B；照片里的巨浪只是背景。",
        },
        {
          q: "Who gave the girl her purse back?",
          image: "/images/pet/listening/trainer2/t1-q4.png",
          answer: 2,
          explanation:
            "甜品店店员说没捡到，正想去报警时 “the taxi driver called me. She'd found my purse with my phone number in it” —— 是出租车司机捡到并送还，选 C。",
        },
        {
          q: "Why does the boy like the café?",
          image: "/images/pet/listening/trainer2/t1-q5.png",
          answer: 0,
          explanation:
            "他觉得最棒的是 “the band that plays there on Friday night”，乐队还为他妹妹的生日专门唱了一首歌；食物 “quite ordinary” 被他自己否定，选 A（有乐队现场演奏）。",
        },
        {
          q: "What does the boy have to wear for the school play?",
          image: "/images/pet/listening/trainer2/t1-q6.png",
          answer: 1,
          explanation:
            "主角侦探穿西装打领带，但他演的是 mad scientist，奶奶说 “Ah, so you need a lab coat” —— 他要穿的是实验服（想借奶奶在实验室用的），选 B。",
        },
        {
          q: "Why is the train late?",
          image: "/images/pet/listening/trainer2/t1-q7.png",
          answer: 2,
          explanation:
            "昨晚风暴刮倒的树 “we have managed to clear a fallen tree from the line” 已清走，预报的大雪也没下；晚点是因为 “farm animals that escaped through a broken gate and are still on the line” —— 有牲畜跑到了铁轨上，选 C。",
        },
      ],
    },
    2: {
      type: "mcq",
      title: "Part 2 · 单项选择题",
      instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-1/part-2.mp3",
      items: [
        {
          q: "You will hear two friends talking about their school website. The friends agree that",
          opts: ["the information is confusing.", "the photos are attractive.", "the articles seem interesting."],
          answer: 2,
          explanation:
            "Mia 说明年苏格兰之旅的文章 “all of this information is exactly what we need to know in advance”，Danny 回 “You're right.” —— 两人一致认为这批文章正是他们需要的，选 C。照片两人看法不同（Danny 笑称 “this one is terrible!”，Mia 却说 “I quite like it”），信息本身也不难找。",
        },
        {
          q: "You will hear a girl telling her friend about a documentary on space travel. What surprised her about it?",
          opts: ["Nobody has been to the Moon in recent years.", "It has taken a long time to prepare for the trip.", "Space travel for tourists is expensive."],
          answer: 0,
          explanation:
            "她说 “I hadn't realised it had been 50 years since any human has been there” —— 惊讶的是这么多年没有人上过月球，选 A。筹备已久她觉得正常（“they've been planning this for ages, which I suppose is normal”），太空游客要花很多钱她也早就知道。",
        },
        {
          q: "You will hear a boy telling his friend about a cookery course. What did he enjoy most about it?",
          opts: ["something his classmate did", "something his teacher taught them", "something he made"],
          answer: 0,
          explanation:
            "课上搭档是位职业摄影师，“she took some photos of us cooking. That was the best bit, actually.” —— 他最喜欢的是同学（拍照片）这件事，选 A。蛋糕是全班一起做的奇怪蛋糕，老师只是 “really friendly”，没说教了什么。",
        },
        {
          q: "You will hear two friends talking about singing in a concert. The girl is worried because she thinks that",
          opts: ["her clothes are wrong.", "she'll make a mistake.", "the other singers need to prepare more."],
          answer: 1,
          explanation:
            "“I think I might get it wrong when we perform.” —— 她担心多声部同唱那一段正式演出时会唱错，选 B。衣服没问题（黑裤子正合适、再买件白衬衫即可），排练方面她认为 “we've practised enough”。",
        },
        {
          q: "You will hear a boy telling his friend about a maths test. The boy recommends",
          opts: ["working with the class book.", "working with a friend.", "working with an app."],
          answer: 2,
          explanation:
            "他分享通过的经验：“There's this great app that I used. My friend Joe told me about it. I'll show you, if you like.” —— 推荐的是一款刷题 app，选 C。他还说刷题 “much more useful than just using the book”，排除 A；Joe 只是告诉他这个 app 的人，不是让他找朋友一起学。",
        },
        {
          q: "You will hear a girl talking about a new snowboard. How does she feel about it?",
          opts: ["satisfied with the colour", "pleased she bought it", "confident it'll help her win"],
          answer: 1,
          explanation:
            "“It's great for jumping so I don't regret spending so much money on it.” —— 她觉得钱花得值、买得不后悔，选 B。白色雪板 “it's not easy to see” 反而是缺点，谈不上对颜色满意；加入滑雪队只是下个月的计划，没说这块板能帮她赢。",
        },
      ],
    },
    3: {
      type: "blanks",
      title: "Part 3 · 信息填空题",
      instruction: "听一段男孩 Aidan 在播客上介绍自己的皮划艇之旅，在笔记空格中填入 1–2 个词、数字或时间。",
      audio: "/audio/pet-trainer2/test-1/part-3.mp3",
      items: [
        {
          q: "Aidan convinced his（Aidan 说服同去的人）： （14）______ to go on the trip.",
          answer: ["cousin"],
          show: "cousin",
          explanation: "“So, I persuaded my cousin to come and my parents took us to the beach early in the morning.” —— 他说服的是堂/表兄弟一起去。",
        },
        {
          q: "He especially enjoyed visiting（印象最深、最喜欢去的）： the（15）______.",
          answer: ["caves"],
          show: "caves",
          explanation: "“We saw some caves too, and those were the most exciting part as it was quite dark.” —— 最兴奋的是钻山洞；岩石和小岛只是“很漂亮”。",
        },
        {
          q: "Aidan was relieved he had taken（庆幸带齐的衣物）： a（16）______ to wear.",
          answer: ["sweater"],
          show: "sweater",
          explanation: "洞里很冷，至少要穿件 T 恤，“I was glad I hadn't forgotten my sweater.” —— 庆幸带了毛衣。",
        },
        {
          q: "He was surprised the weather was（当天天气）： （17）______ all the time.",
          answer: ["sunny"],
          show: "sunny",
          explanation: "“it was sunny the whole day! Although we thought it might be rainy, it wasn't.” —— 春天本以为会下雨，结果一整天晴天，让他意外。",
        },
        {
          q: "Aidan suggests that going as a group is better because it costs（团体票每人价格）： £（18）______ per person.",
          answer: ["15.50"],
          show: "15.50",
          explanation: "“If you go on your own, it's £26.50 for the day, but if there are ten of you, you only have to pay £15.50 each.” —— 团体价每人 £15.50（£ 号已印在题目上）。",
        },
        {
          q: "When the day finished, Aidan's（活动结束后什么部位酸痛）： （19）______ were hurting.",
          answer: ["hands"],
          show: "hands",
          explanation: "“I imagined that my arms would ache at the end of the day, but it was my hands that were sore from holding the paddle so tight.” —— 疼的不是想象中的手臂，而是握桨握得太紧的双手。",
        },
      ],
    },
    4: {
      type: "mcq",
      title: "Part 4 · 访谈理解题",
      instruction: "听一段对制作机器人的女孩 Jessica Shore 的采访，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-1/part-4.mp3",
      items: [
        {
          q: "Where did Jessica get the idea for her robot cat?",
          opts: ["She saw one on a school trip.", "A relative made something similar.", "She found information online."],
          answer: 0,
          explanation:
            "IT 老师鼓励他们动手实验，师生 “went to science exhibitions. In one of those, there were robot animals, so I thought a cat would be the perfect thing to try.” —— 是在（随老师去的）科技展上见到机器动物才想到做机器猫，选 A；哥哥只是和她一起做过模型，网站只是老师给的一般性建议。",
        },
        {
          q: "Jessica feels most proud about",
          opts: ["making a useful robot.", "getting first prize.", "trying something more difficult."],
          answer: 0,
          explanation:
            "“Although I won the competition, actually I think my best project was with a friend after that. It's a cleaning robot that helps people who can't reach high windows.” —— 最得意的是能帮人擦高处窗户的清洁机器人（实用），选 A；得奖和奶奶不想归还都只是佐证。",
        },
        {
          q: "What does Jessica do in her free time?",
          opts: ["She spends time in the countryside.", "She helps people in the area.", "She goes on trips with friends."],
          answer: 1,
          explanation:
            "“I joined a local group that promotes cycling. We have a small workshop where we fix bikes for people. It's a free service for anyone.” —— 周末她为当地人免费修自行车，选 B。",
        },
        {
          q: "What new project is Jessica working on now?",
          opts: ["teaching others about technology", "studying computer programming", "setting up a business"],
          answer: 2,
          explanation:
            "技术老师建议她可以把现在做的事变成收入，“She's helping me start a small company, so next year I'll be giving advice to other teenagers about robotics.” —— 当前的项目是在老师帮助下创办小公司，选 C；给青少年讲解是公司成立后的事，读编程专业只是想上大学的方向。",
        },
        {
          q: "Jessica thinks all teenagers should learn",
          opts: ["how to mend things.", "information about things they use every day.", "about the importance of technology."],
          answer: 1,
          explanation:
            "“we all use technology and if we understand how it works, then it's easier to use and even repair sometimes!” —— 她强调的是了解自己每天在用的技术，选 B；“会修理” 只是理解原理后的附带好处，不是重点。",
        },
        {
          q: "How does Jessica feel about the future of robots?",
          opts: ["anxious they'll be bad for us", "excited about new possibilities for communication", "confident they'll make our lives better"],
          answer: 0,
          explanation:
            "“They should make our lives easier, not replace human contact… to improve life, not have a negative effect on it. I'm worried that might happen.” —— 她担心机器人取代人际交流、产生负面影响，选 A；B、C 都是她希望的方向，但落在 “I'm worried” 这句担忧上。",
        },
      ],
    },
  },
}

// PET Trainer 2 Test 2 听力数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 2 (2024) Test 2 Listening Exam Practice（书页 78–85 = PDF 79–86，OCR + 页面原图逐题核对）
// 答案来源：书内 Teacher's Notes & Keys（Test 2 Listening，书页 212–215）+ 书内 Audioscripts（PDF 171–174，Track 25/29/32/35）交叉核对
// 音频约定路径：public/audio/pet-trainer2/test-2/part-1..4.mp3（音频文件由主线程负责）

const TRAINER2_TEST_2_LISTENING = {
  meta: {
    id: "pet-trainer2-test2-listening",
    title: "PET Trainer 2 · Test 2 听力",
    level: "PET",
    collection: "PET Trainer 2（精讲精练）",
    book: "B1 Preliminary for Schools Trainer 2 (2024)",
    paper: "Listening",
    pages: "Test 2 Exam Practice · 书页 78–85",
    source: "PET Trainer2/PET Trainer2 电子版.pdf",
    answerSource: "书内 Teacher's Notes & Keys + 书内 Audioscripts 交叉核对",
    verified: false,
  },
  parts: {
    1: {
      type: "image_mcq",
      title: "Part 1 · 图片选择题",
      instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-2/part-1.mp3",
      items: [
        {
          q: "How did Jackson break his arm?",
          image: "/images/pet/listening/trainer2/t2-q1.png",
          answer: 2,
          explanation:
            "“I was cycling home from the climbing club when I hit a rock on the road and fell” —— 骑车撞上路面石头摔倒骨折，选 C；摔的是手臂，头因戴头盔没事。",
        },
        {
          q: "Which film are they going to see?",
          image: "/images/pet/listening/trainer2/t2-q2.png",
          answer: 2,
          explanation:
            "男孩不想等科幻系列（“I'd rather wait till I can”），提议 “Shall we go for the sports one?”（篮球题材），Emma 未反对并以 “OK, that's decided then” 收尾 —— 最终看体育片，选 C；飙车动作片无人选。",
        },
        {
          q: "What does Martha lend her friend?",
          image: "/images/pet/listening/trainer2/t2-q3.png",
          answer: 0,
          explanation:
            "男孩要笔记本画植物、记录发现地点，Martha 说 “I can give you one”；铅笔她也给，但 “Sure, but I will want that back”（要还）—— 不要求归还、真正借给他的是笔记本，选 A。",
        },
        {
          q: "Who is going to pick the boy up after the match?",
          image: "/images/pet/listening/trainer2/t2-q4.png",
          answer: 0,
          explanation:
            "爸爸的航班太晚赶不上，姑姑店里 8 点才关门，他说 “my mum's going to leave work early and pick me up” —— 妈妈提前下班来接，选 A。",
        },
        {
          q: "How did the boy manage to contact his friend?",
          image: "/images/pet/listening/trainer2/t2-q5.png",
          answer: 1,
          explanation:
            "对方手机坏了，电话不接、短信也不行，“In the end I wrote a note and left it at his house on the way to school and he called me on his mother's phone.” —— 是留了张字条才联系上，选 B。",
        },
        {
          q: "Why can't the girl go to the party?",
          image: "/images/pet/listening/trainer2/t2-q6.png",
          answer: 0,
          explanation:
            "“I can't get rid of this headache I've had all day.” —— 头疼一整天好不了才去不了，选 A；没睡好（帮父母照顾哭闹的妹妹）只是背景原因。",
        },
        {
          q: "Which place did Jacob most enjoy visiting on his trip?",
          image: "/images/pet/listening/trainer2/t2-q7.png",
          answer: 1,
          explanation:
            "饭店关得很早、有些食物味道怪；城里公园很多，“There was one with a lake in the middle and the best thing was we could take a boat out on it.” —— 他最喜欢的是能在湖上划船的公园，选 B。",
        },
      ],
    },
    2: {
      type: "mcq",
      title: "Part 2 · 单项选择题",
      instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-2/part-2.mp3",
      items: [
        {
          q: "You will hear a boy telling his friend about a clothes shop. The boy complains that",
          opts: ["the shop is too crowded.", "the staff are unfriendly.", "there is little choice of clothes."],
          answer: 1,
          explanation:
            "“the assistants didn't seem to have time to help me and I couldn't work out the sizes, so I left without buying anything.” —— 抱怨的是店员不帮忙（不友好），选 B。他明确说 “there weren't that many people there”，款式方面也承认 “Maybe they have”。",
        },
        {
          q: "You will hear two friends talking about a train journey. The boy thinks",
          opts: ["it was interesting.", "it was unusual.", "it was comfortable."],
          answer: 0,
          explanation:
            "“actually, I enjoyed talking to some of the other passengers. We had a good laugh and I think I've made some new friends.” —— 他觉得这趟旅程有意思，选 A。火车晚点并不稀奇（“the trains are often late these days”，两人都同意），觉得无聊的是女孩（“I can't remember much!”）。",
        },
        {
          q: "You will hear two friends talking about making a presentation. The friends agree",
          opts: ["it'll take a long time.", "it'll be difficult to do.", "it'll improve their marks."],
          answer: 2,
          explanation:
            "女孩说 “We'll get a good grade if we do it well.”，男孩答 “I'm sure we will!” —— 两人一致认为做好了能提分，选 C。男孩找到可下载图片的网站后 “that'll save us a lot of time”，费时间的担心反而被打消。",
        },
        {
          q: "You will hear a girl telling her friend about helping at home. The boy thinks the girl should",
          opts: ["discuss the situation with her parents.", "make an excuse to avoid having to help.", "persuade her brother to do something."],
          answer: 0,
          explanation:
            "女孩提议谎称去朋友家写作业，男孩说 “I'm not sure that would work”，并拿自己举例 —— 他 “explained how important the game was” 后父母才放行，建议 “Maybe try saying the same as I did and they'll let you come.” —— 跟父母把道理讲清楚，选 A。哥哥也要来参加派对，“he won't want to change with you”。",
        },
        {
          q: "You will hear a girl telling her friend about a tennis match. Why was she happy?",
          opts: ["She won the match.", "She pleased her coach.", "She played perfectly."],
          answer: 1,
          explanation:
            "受伤后状态一般、只打进半决赛，但 “my trainer said I'd definitely improved since last month” —— 让她开心的是教练的肯定，选 B。第一局还有 “some silly mistakes”，谈不上发挥完美，比赛也没赢。",
        },
        {
          q: "You will hear two friends talking about a new film. Why is the boy planning to see it?",
          opts: ["A friend recommended it.", "He read good reviews of it.", "He wants to learn something."],
          answer: 0,
          explanation:
            "“Laura mentioned that it's worth seeing.” —— 是朋友 Laura 说值得一看，选 A。网上好评是 Laura 看到的（他只是打算去之前 “might have a look”），他平时并不喜欢历史片，也不是为了学历史。",
        },
      ],
    },
    3: {
      type: "blanks",
      title: "Part 3 · 信息填空题",
      instruction: "听一位老师介绍参加科学集市（science fair）的安排，在笔记空格中填入 1–2 个词、数字或时间。",
      audio: "/audio/pet-trainer2/test-2/part-3.mp3",
      items: [
        {
          q: "The last date for applications（申请截止日期）： （14）______.",
          answer: ["21 april", "april 21st", "april 21", "21st april", "21/4"],
          show: "April 21st",
          explanation: "“you need to send in your ideas with an application by the end of this week, which is April 21st.” —— 4 月 21 日截止（集市本身在 6 月 24 日）。",
        },
        {
          q: "This year, the topic of the fair is（今年集市主题）： （15）______.",
          answer: ["recycling"],
          show: "recycling",
          explanation: "“We did quite well with the space ideas before, but I'm sure recycling will be interesting for many of you this time.” —— 今年的主题是回收利用。",
        },
        {
          q: "There will be a prize called（奖项名称）： （16）______.",
          answer: ["improve earth"],
          show: "Improve Earth",
          explanation: "“We'll have to work hard to win the Improve Earth prize on this occasion.” —— 今年的奖项叫 Improve Earth（Best Invention 是去年获奖学校的奖项）。",
        },
        {
          q: "All the team members will receive（每位队员可获赠）： a（17）______.",
          answer: ["backpack"],
          show: "backpack",
          explanation: "“the organisers will give everyone a backpack for taking part as well.” —— 只要是参赛者就能获赠背包；T 恤是去年自己做的。",
        },
        {
          q: "The（负责上网填写全体队员名单的人）： （18）______ of the team has to put the team members' names on the website.",
          answer: ["secretary"],
          show: "secretary",
          explanation: "“one person on the team should be the secretary and write the report. That person should go online and put in everyone's names.” —— 队里的秘书负责上线登记名单。",
        },
        {
          q: "Website to apply to take part in the fair（报名网址）： www（19）______ .com",
          answer: ["scarborough"],
          show: "scarborough",
          explanation: "“The website is www.scarborough.com because Scarborough School is organising the fair this year. I'll spell that for you: S-C-A-R-B-O-R-O-U-G-H.”",
        },
      ],
    },
    4: {
      type: "mcq",
      title: "Part 4 · 访谈理解题",
      instruction: "听一段对在音乐录音棚工作的音响工程师 Jake 的采访，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-2/part-4.mp3",
      items: [
        {
          q: "How did Jake get the job in the studio?",
          opts: ["by working for free", "by asking a friend's father", "by studying the business"],
          answer: 0,
          explanation:
            "乐队吉他手的爸爸开录音棚，某个周六 “they asked me if I could give them a hand setting up the equipment, so I did and then they offered me a paid job.” —— 他先帮忙布置设备（无薪），之后才获聘，选 A；他没开口求过职，音响工程课程是入职后为胜任工作去读的。",
        },
        {
          q: "Jake thinks the most interesting thing about his job now is",
          opts: ["meeting well-known people.", "using modern techniques.", "helping other people."],
          answer: 1,
          explanation:
            "如今他负责真正的录音部分，“It's amazing what you can do with the sounds now, and I love the different methods available now to make good music.” —— 最有意思的是现在的录音新技术，选 B；他们 “mostly work with unknown bands”，名人很少见。",
        },
        {
          q: "What happened when Jake met a famous singer?",
          opts: ["He didn't give her the correct gift.", "He didn't understand her music.", "He didn't recognise her at first."],
          answer: 2,
          explanation:
            "“I thought she was just delivering them, so I ignored her when in fact she was a famous jazz star… I only realised when she began singing her amazing song!” —— 他把送花进门的爵士明星当成了快递员，一开始根本没认出来，选 C。",
        },
        {
          q: "What does Jake find difficult about his job?",
          opts: ["the kind of people he works with", "the long hours he has to work", "the problems he has with equipment"],
          answer: 1,
          explanation:
            "“we always have to repeat the same sections again and again which means we're there till late every evening. I don't have much free time, which is hard.” —— 难熬的是反复录制、天天干到很晚，选 B；队友 “have become good friends”，准备麦克风 “quite simple” 并不难。",
        },
        {
          q: "In the future, Jake wants",
          opts: ["to set up music events.", "to work in a studio in a city.", "to become a professional musician."],
          answer: 0,
          explanation:
            "“I think organising live concerts would be interesting. The possibilities with light shows and big screens are fantastic nowadays, so I'd like to try that.” —— 他想尝试的是策划现场演出，选 A；他 “don't really fancy moving to London”，打鼓将 “keep playing the drums as a hobby”，不做职业乐手。",
        },
        {
          q: "What advice does Jake give about finding work in the music business?",
          opts: ["He recommends going to college first.", "He suggests posting music online.", "He says it's important to be patient."],
          answer: 2,
          explanation:
            "“you have to be prepared to start at the bottom and slowly get experience. Few people are instantly successful even if they have studied the right course or created a great song.” —— 要沉住气从底层慢慢积累经验，选 C；“上传作品就会被人发现”恰是他要反驳的想法，读对口课程也不保证速成。",
        },
      ],
    },
  },
}

// PET Trainer 2 Test 3 听力数据（自动转录，待人工核对）
const TRAINER2_TEST_3_LISTENING = {
  meta: {
    id: "pet-trainer2-test3-listening",
    title: "PET Trainer 2 · Test 3 听力",
    level: "PET",
    collection: "PET Trainer 2（精讲精练）",
    book: "B1 Preliminary for Schools Trainer 2 (2024)",
    paper: "Listening",
    pages: "Test 3 Exam Practice · 书页 106–110",
    source: "PET Trainer2/PET Trainer2 电子版.pdf",
    answerSource: "书内 Practice Test Keys + 书内 Audioscripts 交叉核对",
    verified: false,
  },
  parts: {
    1: {
      type: "image_mcq",
      title: "Part 1 · 图片选择题",
      instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-3/part-1.mp3",
      items: [
        {
          q: "Which ride has the boy already tried?",
          image: "/images/pet/listening/trainer2/t3-q1.png",
          answer: 0,
          explanation:
            "他先排 car driving ride，但 “I soon left because they said I'd have to wait for an hour”；接着 “The queue for the wheel was shorter so I went on that instead” —— 已经玩过的是摩天轮（A 图）；船 ride 是 “that's where I'm going next”，还没玩。",
        },
        {
          q: "Where did the girl leave her laptop?",
          image: "/images/pet/listening/trainer2/t3-q2.png",
          answer: 2,
          explanation:
            "昨晚在沙发上看电视时用过，又 “put it on the table in the living room to charge the battery”，但最后 “I remembered to put it in the hall, but I'd put it under the chair so I didn't notice it when I was leaving” —— 最终落在大厅的椅子下（C 图），沙发和客厅桌上都只是中途放的地方。",
        },
        {
          q: "Which instrument is the boy learning?",
          image: "/images/pet/listening/trainer2/t3-q3.png",
          answer: 2,
          explanation:
            "“The sound I make with the trumpet is awful, but I'll continue with the classes this year” —— 现在学的是小号（C 图）；钢琴是 “like I did with the piano” 小时候学的，吉他只是 “maybe I'll try that after the summer” 的打算。",
        },
        {
          q: "How much did the game cost?",
          image: "/images/pet/listening/trainer2/t3-q4.png",
          answer: 1,
          explanation:
            "“although it usually costs £13.50, they had a special offer last Saturday with great reductions so we got it for £11.50” —— 实付 £11.50（B 图）；£7.50 只是她攒下的钱（“I'd saved £7.50 which was more than enough”），£13.50 是原价。",
        },
        {
          q: "What has the boy brought to eat on the bus trip?",
          image: "/images/pet/listening/trainer2/t3-q5.png",
          answer: 0,
          explanation:
            "店里 “they only had bananas and I can't stand them”（香蕉，B 图）；本想买 “one of those big packets of crisps”，但 “It cost too much”（薯片，C 图）；最终 “I had to go for a sandwich instead. You can have half if you like” —— 带的是三明治（A 图）。",
        },
        {
          q: "Which class have they got first?",
          image: "/images/pet/listening/trainer2/t3-q6.png",
          answer: 2,
          explanation:
            "“The maths teacher isn't coming in first thing today, so they changed her class to later. That means we have biology in the second period after the geography class” —— 第一节是地理（C 图），生物排在第二节。",
        },
        {
          q: "What does the new PE teacher look like?",
          image: "/images/pet/listening/trainer2/t3-q7.png",
          answer: 1,
          explanation:
            "又高又秃的是物理老师（“That was the new physics teacher”）；新体育老师 “he's smaller than me and I'm not very tall”，而且 “He's got his hair tied back” —— 个子小、头发扎起（B 图）。",
        },
      ],
    },
    2: {
      type: "mcq",
      title: "Part 2 · 单项选择题",
      instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-3/part-2.mp3",
      items: [
        {
          q: "You will hear a boy telling his friend about some new shoes. Why is he disappointed with the shoes?",
          opts: ["They are uncomfortable.", "His teammates have better ones.", "He dislikes the colour."],
          answer: 2,
          explanation:
            "新鞋本身 “They fit fine”，不舒服的是他试穿过的另一双（“I tried some on, but they weren't comfortable at all so I got some others”）（A 错）；录音只说这是田径俱乐部人人在穿的新款，没说队友的鞋更好（B 错）；让他失望的是颜色 —— “there wasn't much choice and I had to get green ones, which I'm not keen on”，不喜欢却只能买绿色，选 C。",
        },
        {
          q: "You will hear a girl talking about someone she met on holiday. How did she feel about him at first?",
          opts: ["pleased that he was generous", "angry that he was rude", "surprised that he was friendly"],
          answer: 1,
          explanation:
            "起初这个男孩跑到她身上还 “He didn't even say sorry at the time”，她气得不行，所以后来才有 “I wasn't annoyed any more” —— 起初的感受是被无礼对待而生气（选 B）；请吃冰淇淋、一起踢球都是他道歉之后的转变，大方（A）和友好（C）都不是“起初”的印象。",
        },
        {
          q: "You will hear two friends talking about dogs. The girl thinks that having a dog",
          opts: ["becomes boring after a while.", "requires more effort than she expected.", "is the responsibility of the whole family."],
          answer: 1,
          explanation:
            "“I didn't realise that a dog needs so much training and you have to spend ages doing that” —— 养狗要花的功夫远超她的预期（选 B）；她仍然 “I love playing with him for a bit when I get home from school”，并不觉得无聊（A 错）；虽然实际是父母在遛狗，但她谈的是自己的工作量，没有把它总结成“全家人的责任”这一观点（C 错）。",
        },
        {
          q: "You will hear a boy telling his friend about a school trip. What does he complain about?",
          opts: ["The students couldn't always do what they wanted.", "The students didn't have time to rest.", "The students didn't see all they had planned."],
          answer: 0,
          explanation:
            "“We managed to visit everything on the programme, but I thought the teacher would let us go off by ourselves for a while. We hoped to have a little more free time for our own things” —— 行程全走完了（C 错），抱怨的是不能自由活动、不能按自己的意愿来（选 A）；公园里 “they let us relax there to have lunch”，有休息（B 错）。",
        },
        {
          q: "You will hear a girl telling her friend about an action series. Why does the girl recommend it?",
          opts: ["The special effects are amazing.", "The story is realistic.", "The acting is good."],
          answer: 2,
          explanation:
            "“What's really worth it though, is the main character. It's played by Tom Barton, who's just perfect for the part” —— 她推荐的是主演的演技（选 C）；剧情反而 “the story is beginning hard to believe in the latter programmes”（B 错）；特效根本没提（A 错）。",
        },
        {
          q: "You will hear a girl talking about her uncle's work. What's his new job like?",
          opts: ["It's satisfying.", "It's well paid.", "It's relaxing."],
          answer: 0,
          explanation:
            "男孩猜 “He must earn a lot for that”，她答 “Not really, but he says he loves the fact that he's helping people and doing something useful” —— 收入并不高（B 错），但叔叔觉得能帮到人、做得有意义，很有满足感（选 A）；往受灾地区送药品物资的工作谈不上轻松（C 错）。",
        },
      ],
    },
    3: {
      type: "blanks",
      title: "Part 3 · 信息填空题",
      instruction: "听一段老师在班上介绍巧克力工厂参观安排的录音，在笔记空格中填入 1–2 个词、数字或日期或时间。",
      audio: "/audio/pet-trainer2/test-3/part-3.mp3",
      items: [
        {
          q: "Take place in the factory near the（工厂在……旁边）：（14）______",
          answer: ["park"],
          show: "park",
          explanation: "“it won't take long to get there because we're going to see the new factory which is by the park instead of the old one near the swimming pool” —— 新工厂在公园（park）旁，在游泳池附近的旧工厂是干扰项。",
        },
        {
          q: "Produced last month（上月生产）：（15）______ chocolate eggs",
          answer: ["13,765", "13765"],
          show: "13,765",
          explanation: "“Last month, they made 13,765 chocolate eggs as well as all the usual varieties of chocolate bars and the hundreds of gift boxes for birthdays” —— 数字照录音填 13,765。",
        },
        {
          q: "See the new way they（新工艺：如何处理巧克力）：（16）______ the chocolate to make animal figures",
          answer: ["cool"],
          show: "cool",
          explanation: "“There are the usual ones to heat the chocolate and also a brand new one used to cool it to create a mix of different animal shapes. It's a totally new method!” —— 新机器的用途是冷却（cool）巧克力来做动物造型。",
        },
        {
          q: "There's also a special chocolate（特别展品）：（17）______ that visitors can see",
          answer: ["fountain"],
          show: "fountain",
          explanation: "“in its place they now have a new attraction for visitors which is an incredible fountain. And of course, it's been created using chocolate!” —— 巧克力喷泉（fountain）；巧克力埃菲尔铁塔模型 “has been removed”，是干扰项。",
        },
        {
          q: "Students should remember to take some（要带的东西）：（18）______",
          answer: ["tissues"],
          show: "tissues",
          explanation: "“don't forget to have tissues in your pocket to clean your hands afterwards” —— 要带纸巾（tissues）擦手；水是主办方提供的，不用自己带。",
        },
        {
          q: "Students will be given free（临别赠送）：（19）______ when they leave to remember the visit",
          answer: ["biscuits"],
          show: "biscuits",
          explanation: "“they've got biscuits for all visitors which you can pick up at the exit if you don't want to spend any money but still have a souvenir” —— 离开时免费领饼干（biscuits）作纪念。",
        },
      ],
    },
    4: {
      type: "mcq",
      title: "Part 4 · 访谈理解题",
      instruction: "听一段对男孩 Alex（去哥斯达黎加参加保护海龟项目）的采访，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-3/part-4.mp3",
      items: [
        {
          q: "Alex went to Costa Rica because",
          opts: ["it would lead to a new job.", "he knew a lot about it.", "a friend agreed to go with him."],
          answer: 0,
          explanation:
            "“when the zookeeper suggested I could go there and they would pay me to talk about the experience when I got back, I couldn't miss the opportunity” —— 回来后能拿报酬讲述这段经历，等于一份新工作（选 A）；他是 “learning about turtles for the first time”，谈不上了解（B 错）；朋友只是讲过自己类似的经历，并没有和他同去（C 错）。",
        },
        {
          q: "How did Alex feel when he arrived there?",
          opts: ["lonely because he was away from home", "worried about having an accident", "tired from the journey"],
          answer: 1,
          explanation:
            "“there were moments when I thought the car would go off the road, which was full of holes and seemed dangerous!” —— 担心车冲出坑洼的路面出事故（选 B）；他说 “I wasn't anxious about that” 指不担心异国生活的不同，录音也没提孤独或旅途劳累（A、C 错）。",
        },
        {
          q: "The people Alex worked with",
          opts: ["had previous experience.", "came from many different countries.", "were mostly older than him."],
          answer: 2,
          explanation:
            "“I was actually one of the youngest there, but it didn't matter because we were all in the same situation” —— 他几乎是最年轻的，同伴大多比他大（选 C）；大家都是 “learning about turtles for the first time”，谁都没有经验（A 错）；“Most of them were from Costa Rica”，并非来自许多国家（B 错）。",
        },
        {
          q: "What special memory does Alex have of the trip?",
          opts: ["eating a special meal on the beach", "having a night swim", "watching animal behaviour"],
          answer: 2,
          explanation:
            "“we saw the turtles come out of their eggs and go towards the sea in the moonlight. It was incredible to see such tiny animals all moving in the same direction” —— 最特别的记忆是夜里看小海龟孵化奔向大海（选 C）；烧烤是看完之后 “we went back to the house for a barbecue to celebrate”，在住处且只是庆祝（A 错）；他们只是在水边看，没有游泳（B 错）。",
        },
        {
          q: "What surprised Alex about Costa Rica?",
          opts: ["the variety of animals", "the number of protected areas", "the hot weather"],
          answer: 1,
          explanation:
            "“I knew that this country is home to a lot of different wildlife, but I didn't realise that there are so many national parks where environmental projects take place” —— 野生动物多是他出发前就知道的（A 错），让他惊讶的是国家公园之多（选 B）；热带气候温暖只是陈述，不是惊讶点（C 错）。",
        },
        {
          q: "What would Alex like to do next?",
          opts: ["learn how to dive", "study a science degree", "work with other animals"],
          answer: 0,
          explanation:
            "“I need to get a diving certificate. I'm going to do a course in that because I'd love to be able to tell people more about these amazing animals” —— 下一步是学潜水（选 A）；读物理的打算已放弃 “I've changed my mind now”（B 错）；他想 “concentrate more on turtles”，继续专注于海龟（C 错）。",
        },
      ],
    },
  },
}

// PET Trainer 2 Test 4 听力数据（自动转录，待人工核对）
const TRAINER2_TEST_4_LISTENING = {
  meta: {
    id: "pet-trainer2-test4-listening",
    title: "PET Trainer 2 · Test 4 听力",
    level: "PET",
    collection: "PET Trainer 2（精讲精练）",
    book: "B1 Preliminary for Schools Trainer 2 (2024)",
    paper: "Listening",
    pages: "Test 4 Exam Practice · 书页 124–128",
    source: "PET Trainer2/PET Trainer2 电子版.pdf",
    answerSource: "书内 Practice Test Keys + 书内 Audioscripts 交叉核对",
    verified: false,
  },
  parts: {
    1: {
      type: "image_mcq",
      title: "Part 1 · 图片选择题",
      instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-4/part-1.mp3",
      items: [
        {
          q: "What's the girl's coat like?",
          image: "/images/pet/listening/trainer2/t4-q1.png",
          answer: 2,
          explanation:
            "她本想买大口袋的那件，但 “the last one they had in the store was the wrong size for me”；“The shop assistant showed me this one with big buttons and I liked it much more” —— 最终买的是大纽扣外套（C 图），还 “it'll keep my head warm” 能护住头。",
        },
        {
          q: "Where are the friends waiting?",
          image: "/images/pet/listening/trainer2/t4-q2.png",
          answer: 0,
          explanation:
            "妈妈以为他们在体育场外，但那里车多停不下（“we thought you wouldn't be able to stop, so we walked down the high street”）；现在 “We're just at the clock tower on the road going out of town” —— 等在出城路上的钟楼（A 图），那是在杂货店之前的地标（“before you get to the grocers”）。",
        },
        {
          q: "Which is the oldest thing in the museum?",
          image: "/images/pet/listening/trainer2/t4-q3.png",
          answer: 0,
          explanation:
            "五斗柜 “It was made two centuries ago”（两百年前，A 图）最古老；靠垫是 1970 年法国总统赠送的结婚礼物，花瓶 “comes from more recent times”，都要晚得多。",
        },
        {
          q: "What's Liam unhappy about?",
          image: "/images/pet/listening/trainer2/t4-q4.png",
          answer: 2,
          explanation:
            "他借姐姐的手机查资料，妈妈因头疼坐下喝水时 “She knocked it on the floor and the screen broke!” —— 手机屏幕摔碎了（C 图），“Sally's going to be so annoyed with me!”",
        },
        {
          q: "What do the friends need to fix?",
          image: "/images/pet/listening/trainer2/t4-q5.png",
          answer: 0,
          explanation:
            "滑板轮子掉了但 “Dad's gone to buy a new one”，踏板车要送店里修（“take that back to the shop to get it mended”）；男孩要动手的是 “He asked me to repair the brakes on that old kid's bike we've got so my sister can start learning” —— 修旧童车的刹车（A 图）。",
        },
        {
          q: "What does Sophie need for her presentation?",
          image: "/images/pet/listening/trainer2/t4-q6.png",
          answer: 1,
          explanation:
            "书面报告她没问题（“I'm happy to give in a written report, especially if I can do it on the computer”），但 “this time it's a recorded presentation and they'll play it in front of the whole class” —— 这次要录制展示并在全班播放，需要的是录制用的设备（B 图）；她担心的只是 “I'll sound really boring”。",
        },
        {
          q: "Which club is the most popular?",
          image: "/images/pet/listening/trainer2/t4-q7.png",
          answer: 1,
          explanation:
            "“I wanted to do table tennis, but there are no spaces left because everyone likes that one” —— 乒乓球班满员（B 图）＝最受欢迎；游泳只是女孩自己想换个花样，男孩还 “I'm not keen on swimming”；国际象棋 “not so many people do that”，反而冷门。",
        },
      ],
    },
    2: {
      type: "mcq",
      title: "Part 2 · 单项选择题",
      instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-4/part-2.mp3",
      items: [
        {
          q: "You will hear two friends talking about a visit to a castle. The friends agree that",
          opts: ["the park area was pleasant.", "the guide was helpful.", "the art was surprising."],
          answer: 1,
          explanation:
            "男孩 “I learned a lot from the woman who gave the tour. I took some useful notes”，女孩 “I did think that her explanations were easy to understand” —— 两人都认可导游（选 B）；户外两人都不满意：“It was just a shame we couldn't spend more time outside” / “It was getting very hot and there were too many insects”（A 错）；男孩觉得画是 “the usual old paintings”，女孩欣赏的是雕像，谈不上“令人惊讶”（C 错）。",
        },
        {
          q: "You will hear a girl telling her friend about her part-time job. Why did she take the job?",
          opts: ["She needed some extra money.", "She had a lot of free time.", "She wanted to learn something."],
          answer: 2,
          explanation:
            "“My plan was to be better prepared for my degree in biology” —— 打工是为了给读生物学位做准备、想学到东西（选 C）；“They pay me quite well, which I hadn't expected, but that's not the most important thing”（A 错）；“the hours are long, and I was already busy with school work before this anyway”（B 错）。",
        },
        {
          q: "You will hear two friends talking about a party. They need to",
          opts: ["ask some more people.", "arrange the food.", "decorate a room."],
          answer: 0,
          explanation:
            "食物已就绪（“you've got the snacks” “I've ticked that off the list!”）（B 错）；气球和音乐 Harry 已弄完（“Harry's just called me to say it's all done”）（C 错）；但女孩把足球队的孩子忘了 —— “I completely forgot! Can you text Mark? And I'll send a message to the rest. I hope they'll be able to come.” 还得再邀请人（选 A）。",
        },
        {
          q: "You will hear a boy telling his friend about a new phone app. The boy advises the girl to",
          opts: ["use it for a school project.", "protect her identity.", "share it with a friend."],
          answer: 0,
          explanation:
            "“He showed me how he used it for a presentation he had to give in class. You should do that for the one we've got next week.” —— 男孩建议她把这个 app 用在下周的课堂展示上（选 A）；隐私保护是 app 自带的优点（“nobody will see you if you don't want them to”），不是他的建议（B 错）；app 是 Leo 推荐给男孩的，他也没建议女孩去分享给别人（C 错）。",
        },
        {
          q: "You will hear two friends talking about a news report. The girl is disappointed that",
          opts: ["she missed an event.", "someone is unable to perform.", "a concert has been cancelled."],
          answer: 1,
          explanation:
            "周六的演唱会照常进行、票也在（“Don't worry, they're still doing that” “I've got a ticket”），既没错过也没取消（A、C 错）；让她失望的是主唱失声 —— “the singer lost her voice, so the band will have to play without her on Saturday”（选 B）。",
        },
        {
          q: "You will hear a boy telling his friend about a dance video. The boy disliked",
          opts: ["the way the picture looked.", "the quality of the sound.", "the dancers' movements."],
          answer: 1,
          explanation:
            "“our steps went well”，舞步本身没问题（C 错）；摄像机 “which is brand new, so the audience could see us perfectly”，画面没问题（A 错）；不满的是 “you couldn't hear the tune properly. It seemed as if we weren't in time to the music” —— 音响效果差（选 B）。",
        },
      ],
    },
    3: {
      type: "blanks",
      title: "Part 3 · 信息填空题",
      instruction: "听一段学生 Oliver 向全班介绍新购物中心 Silverton Shopping Centre 的录音，在笔记空格中填入 1–2 个词、数字或日期或时间。",
      audio: "/audio/pet-trainer2/test-4/part-3.mp3",
      items: [
        {
          q: "The fastest way to get there is by（最快的到达方式）：（14）______",
          answer: ["underground"],
          show: "underground",
          explanation: "“It's really easy to get to because there's an underground stop right there but you can also get a bus from the city centre, which takes a bit longer. I went with my family in Mum's car, but that was definitely slower.” —— 公交更慢、开车最慢，最快是坐地铁（underground）。",
        },
        {
          q: "Oliver thinks the（最棒的部分）：（15）______ is the best part of the shopping centre",
          answer: ["games area"],
          show: "games area",
          explanation: "“What's absolutely brilliant is the games area. For fans of video games, like me, it's got everything you can imagine.” —— 他认为最棒的是游戏区（games area）。",
        },
        {
          q: "Clothes shops for young people are on the（年轻人服装区的楼层）：（16）______",
          answer: ["second floor", "2nd floor"],
          show: "second floor",
          explanation: "“The teenage fashion section is on the second floor.” —— 青少年时装区在二楼（second floor）；父母看家具才是去了第一层。",
        },
        {
          q: "Oliver bought something to eat in a（买吃的地点）：（17）______",
          answer: ["market", "small market"],
          show: "market",
          explanation: "“there are plenty of little shops where you can buy snacks as well as a small market. I got a bag of popcorn there as I always feel hungry when I'm shopping!” —— 爆米花买自（小）市场（(small) market）。",
        },
        {
          q: "Oliver was surprised there was a（意想不到的设施）：（18）______ in the shopping centre",
          answer: ["garden"],
          show: "garden",
          explanation: "“When we got to the top, I couldn't believe what I saw. There's a garden there where you can walk around or sit and have a coffee.” —— 顶层有花园（garden），让他意想不到。",
        },
        {
          q: "The shopping centre is open from 9.30 to（关门时间）：（19）______",
          answer: ["11 pm", "11pm", "11 p.m.", "23.00", "23:00"],
          show: "11 pm",
          explanation: "“Some of the shops started closing around 7.30, but the shopping centre itself doesn't close until 11 pm because of the restaurants.” —— 商场整体营业到晚上 11 点（11 pm / 23.00）；7.30 开始关的只是部分商店，他们 8 点离开只是自己待够了。",
        },
      ],
    },
    4: {
      type: "mcq",
      title: "Part 4 · 访谈理解题",
      instruction: "听一段对体育记者 Emma 的采访，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-4/part-4.mp3",
      items: [
        {
          q: "Emma started working on TV",
          opts: ["through a contact in a TV company.", "after doing reports on the internet.", "because she was a sports star."],
          answer: 1,
          explanation:
            "“I used to work with a basketball team organising their advertising. This meant doing blogs about their matches. A TV station saw them and got in touch with me to say they liked what I did, and they offered me a job.” —— 电视台是看到她发在网上的博客后才联系她（选 B）；不是电视公司里的熟人引荐（A 错）；她是报道者，不是体育明星（C 错）。",
        },
        {
          q: "Why does Emma enjoy reporting on football matches?",
          opts: ["She admires a lot of the football players.", "She used to play football herself.", "She can talk about different details of the team."],
          answer: 2,
          explanation:
            "“There are many famous players, so I like to let people know what each one is doing and facts about them.” —— 喜欢这份工作是因为能讲每位球员的表现和各种细节（选 C）；“It wasn't my sport when I was young”，她年轻时并不踢足球（B 错）；欣赏球员不是她给出的理由（A 错）。",
        },
        {
          q: "What is difficult about Emma's job?",
          opts: ["remembering people's names", "concentrating on the game", "giving information quickly"],
          answer: 1,
          explanation:
            "“I've had to learn the names of lots of sportsmen and women, but I have a good memory, which helps” —— 记名字不难（A 错）；真正的挑战是 “The challenge is when I'm talking in a live game. I have to follow what 22 players are doing and they move so fast. I have to pay attention all the time.” —— 直播时必须全程紧跟比赛（选 B）；“讲得快” 并未被说成难点（C 错）。",
        },
        {
          q: "What does Emma do to relax?",
          opts: ["go out with people from work", "get some exercise", "spend time in nature"],
          answer: 2,
          explanation:
            "“instead of going to the gym, I've taken up art. I often go out with an art group to the countryside to draw animals and plants.” —— 去乡下写生，亲近自然（选 C）；健身反而被她放弃了（B 错）；同行的是美术小组，不是同事，而且 “we talk about everything except that!”（A 错）。",
        },
        {
          q: "Emma's favourite moment is when",
          opts: ["a team does well.", "she prepares before a game.", "she meets important players."],
          answer: 0,
          explanation:
            "“there's nothing like the noise of the crowd when a goal is scored” —— 球队进球、全场沸腾的时刻最棒（选 A）；上午查资料 “The mornings are often less interesting because I'm just searching for information on the next game”（B 错）；“Getting the opportunity to chat to well-known people from time to time is great, but there's nothing like...”（C 错）。",
        },
        {
          q: "In the future, Emma wants to",
          opts: ["give people advice about jobs.", "help people become sports stars.", "travel to another country."],
          answer: 0,
          explanation:
            "她想在学校演讲，“to encourage teenagers to get involved in other areas of sport, not just dream of being a great player. They can do things like sports medicine, organising events or being a trainer.” —— 引导青少年了解运动医学、赛事组织、教练等体育相关职业（选 A）；她明确说 “not just dream of being a great player”（B 错）；出国工作 “that's quite hard”，而且 “I'd prefer to stay here”（C 错）。",
        },
      ],
    },
  },
}

// PET Trainer 2 Test 5 听力数据（自动转录，待人工核对）
const TRAINER2_TEST_5_LISTENING = {
  meta: {
    id: "pet-trainer2-test5-listening",
    title: "PET Trainer 2 · Test 5 听力",
    level: "PET",
    collection: "PET Trainer 2（精讲精练）",
    book: "B1 Preliminary for Schools Trainer 2 (2024)",
    paper: "Listening",
    pages: "Test 5 Exam Practice · 书页 142–146",
    source: "PET Trainer2/PET Trainer2 电子版.pdf",
    answerSource: "书内 Practice Test Keys + 书内 Audioscripts 交叉核对",
    verified: false,
  },
  parts: {
    1: {
      type: "image_mcq",
      title: "Part 1 · 图片选择题",
      instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-5/part-1.mp3",
      items: [
        {
          q: "Which book did the boy buy?",
          image: "/images/pet/listening/trainer2/t5-q1.png",
          answer: 0,
          explanation:
            "爸爸喜欢自然和动物但这类书已经很多（B 图错）—— “he's really into nature and wildlife, but he's already got loads of books about that”；烹饪书也不用买（C 图错）—— “He likes to try different recipes, but I think he gets them from the internet”；最后说 “I saw a good one about planes with some amazing pictures ... so I'm getting the first one” —— 买的是飞机画册（A 图），选 A。",
        },
        {
          q: "What problem did Jessica have with her surprise lunch?",
          image: "/images/pet/listening/trainer2/t5-q2.png",
          answer: 1,
          explanation:
            "煎鸡肉时 “some hot oil went on my hand and it really hurt. It looked really red” —— 热油烫伤了手（B 图），选 B；她又说 “at least I hadn't burned it or broken anything”，即食物没烧糊（A 图错）、盘子也没摔碎（C 图错），问题出在烫伤的手。",
        },
        {
          q: "What do the students need to bring for the experiment?",
          image: "/images/pet/listening/trainer2/t5-q3.png",
          answer: 1,
          explanation:
            "护目镜由学校提供（C 图错）—— “something to protect your eyes, which the school provides”；手套也是统一发的（A 图错）—— “there will be gloves for you all to wear”；必须自带的是长袖衬衫：“It's important to wear a long-sleeved shirt as well. In fact, if you don't wear one, you can't take part, so remember to bring one to school.”（B 图），选 B。",
        },
        {
          q: "What did the divers find?",
          image: "/images/pet/listening/trainer2/t5-q4.png",
          answer: 0,
          explanation:
            "潜水员想找金币但没找到（C 图错）—— “They were trying to find gold coins ... Sadly, they didn't get what they wanted”；项链只是那本魔法项链悬疑小说里的元素（B 图错）；实际找到的是 “a box with old documents and personal objects in it like an 18th-century watch, which probably belonged to the captain. And it still worked!” —— 一块还能走的 18 世纪怀表（A 图），选 A。",
        },
        {
          q: "Where will James be next week?",
          image: "/images/pet/listening/trainer2/t5-q5.png",
          answer: 2,
          explanation:
            "“I've never been to that part of France before ... Instead of going to the coast, we're off to the mountains. I hope the weather's good because last time we went sightseeing in the capital and it rained all the time. I can't wait to try a new winter sport this time.” —— 不去海边（A 图错）、不是去首都观光（B 图错），而是去山区尝试冬季运动（C 图），选 C。",
        },
        {
          q: "What time do all the friends have to be at the station?",
          image: "/images/pet/listening/trainer2/t5-q6.png",
          answer: 1,
          explanation:
            "Mark 的爸爸因为要上班，9:15（A 图）只送“你和我”去车站——“Mark's dad is picking you and me up and taking us to the station at quarter past nine”；火车 11:30（C 图）才开，到得太早；“I've told the others to meet us there at a quarter to ten” —— 其他朋友（= 所有人）要在 9:45（B 图）到站，选 B。",
        },
        {
          q: "What does the doctor recommend?",
          image: "/images/pet/listening/trainer2/t5-q7.png",
          answer: 2,
          explanation:
            "医生说检查结果不严重，“I don't think you need to spend so much time resting in bed now”（A 图错）；“It's also better to sit on a chair rather than lying on the sofa for too long” 是说别老躺沙发（B 图错）；建议的是 “some gentle exercise would be good, so you could try going for a short walk every day” —— 每天散步（C 图），选 C。",
        },
      ],
    },
    2: {
      type: "mcq",
      title: "Part 2 · 单项选择题",
      instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-5/part-2.mp3",
      items: [
        {
          q: "You will hear two friends talking about getting fit. What does the girl want to try?",
          opts: ["doing an activity with a friend", "training for a competition", "going back to something she did before"],
          answer: 0,
          explanation:
            "男生邀请她加入自己的游泳俱乐部，“You could come to my swimming club. I go twice a week and the coach is really nice”，她答应 “That sounds much more relaxing. I think I'll join you!” —— 和朋友一起做运动（选 A）；她以前打篮球但 “I don't fancy that anymore. My teammates were really into competing and when we lost, everyone was upset” —— 不想再比赛（B 错），游泳也是新尝试而非重回旧项（C 错）。",
        },
        {
          q: "You will hear a boy telling a friend about a talk on cycling. What did the boy learn?",
          opts: ["what he needs for mountain biking", "how to cycle safely on roads", "a rule about where cycling is forbidden"],
          answer: 2,
          explanation:
            "带手机防出事故、天黑开车灯这些安全做法他早就知道（A、B 错）——“I always have my phone with me. We're also careful when we cycle wherever there are cars and we've got lights if it's dark”；真正新学到的是一条规则：“But I didn't realise that you're supposed to get off your bike on a pedestrian crossing in a town” —— 在市镇的人行横道上得下车推行（= 那里禁止骑行，选 C）。",
        },
        {
          q: "You will hear two friends talking about a birthday gift. The girl suggests the boy should",
          opts: ["ask someone for advice.", "buy something similar to last time.", "get ideas on the internet."],
          answer: 2,
          explanation:
            "去问妹妹的朋友 Emily 被否决（A 错）——“I wouldn't do that; she can't keep a secret!”；前两年都送书，女孩建议换花样（B 错）——“that's what you got her the last two years. Maybe you should think about something different”；她推荐上网找灵感：“But there's a great online shop for teenagers where I got my sister's present last month. That might be the best place to look.”，男孩说 “I'll have a look at it.”（选 C）。",
        },
        {
          q: "You will hear two friends talking about a new sports centre. What does the girl like best about it?",
          opts: ["the convenient location", "the range of facilities", "the classes they offer"],
          answer: 1,
          explanation:
            "离家近、步行几分钟她也提到了（A 错）——“it's only a few minutes' walk, so for me it's better than the one on the other side of town”；但她最后总结 “It's great that there are so many things to do there. That's what impressed me most.” —— 体育馆、泳池、篮球场、攀岩墙等设施齐全才是她最喜欢的（选 B）；攀岩初学班只是 “I might sign up for that”，还没报（C 错）。",
        },
        {
          q: "You will hear a boy telling a friend about a history lesson. The boy was",
          opts: ["confused about a date.", "surprised by the information.", "interested in learning more about it."],
          answer: 1,
          explanation:
            "让他印象深刻的是信息本身：“I couldn't believe how long the journey across the Atlantic took in those days” —— 对当年跨大西洋航行耗时之长感到吃惊（选 B）；年份 1492 老师讲得清楚、他记得牢（“The teacher explained when it all happened really well. I won't forget the year 1492!”），并没有困惑（A 错）；他说 “we've finished this period, I think we've learned a lot this term”，只表示借笔记复习，没说要继续深挖（C 错）。",
        },
        {
          q: "You will hear a boy talking about a hotel. The boy is pleased because",
          opts: ["he'll have his own room.", "he's going with a friend.", "he'll be in a new place."],
          answer: 0,
          explanation:
            "“Now that I'm older, I can go down to the beach whenever I want and I don't have to share with my parents any more.” —— 不用再和父母同住，即有自己的房间（选 A）；同行的是家人（“with my family”），那几个 mates 是每年在那儿认识的（B 错）；酒店 “We've been there a couple of times already”，根本不是新地方（C 错）。",
        },
      ],
    },
    3: {
      type: "blanks",
      title: "Part 3 · 信息填空题",
      instruction: "听一段访校来宾介绍周末在动物救助中心帮忙的录音，在笔记空格中填入 1–2 个词、数字或日期或时间。",
      audio: "/audio/pet-trainer2/test-5/part-3.mp3",
      items: [
        {
          q: "The animal centre opened in（动物中心开放于）：（14）______",
          answer: ["may"],
          show: "May",
          explanation: "“The building was finished at the end of April so we took the first animals in on 14 May, and we're expecting a lot more in the summer months.” —— 建筑 4 月底完工、5 月 14 日首批动物入住，即中心开放于 5 月（May）。",
        },
        {
          q: "The centre cannot look after（不能接收的动物）：（15）______",
          answer: ["birds", "a bird"],
          show: "birds",
          explanation: "中心主要收猫、偶尔收走失的蛇，但 “Unfortunately, birds require special cages so we aren't able to take them.” —— 鸟类需要特制鸟笼，所以不能接收。",
        },
        {
          q: "You may be able to borrow（可借用）：（16）______ if you don't have your own.",
          answer: ["boots"],
          show: "boots",
          explanation: "着装要求是旧裤子、结实的鞋，装备基本由中心提供，但 “we can lend you some boots if we have ones the right size” —— 靴子合码的话可以借给你。",
        },
        {
          q: "On Saturdays, before giving the animals water, helpers clean their（周六先清洗动物的）：（17）______",
          answer: ["bowls"],
          show: "bowls",
          explanation: "“Saturday morning starts with collecting the animals' bowls in order to clean them before filling them.” —— 周六早上先收碗、清洗干净再加水，所以加水前清洗的是碗（bowls）。",
        },
        {
          q: "Another way to help is to give information to（把动物信息讲给）：（18）______ about the animals.",
          answer: ["visitors"],
          show: "visitors",
          explanation: "“You'll also help show visitors around the centre. To do this you should know the animal's name and a little bit about their story if we know where they came from.” —— 带参观者游览时要能讲出动物的名字和来历，即把信息讲给 visitors。",
        },
        {
          q: "To apply to help at the centre you should go to the website, www.（申请网址）：（19）______ .com",
          answer: ["pawshome"],
          show: "pawshome",
          explanation: "“please go online to our webpage and complete the application form. The address is www.pawshome.com” —— 录音逐字母拼读 “That's P-A-W-S-H-O-M-E”，网址为 pawshome.com。",
        },
      ],
    },
    4: {
      type: "mcq",
      title: "Part 4 · 访谈理解题",
      instruction: "听一段对国际象棋少女冠军 Tara Mitchell 的采访，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-5/part-4.mp3",
      items: [
        {
          q: "Tara became interested in playing chess",
          opts: ["because her family encouraged her.", "when she started competing.", "while she was at primary school."],
          answer: 1,
          explanation:
            "小时候全家常下棋，但她并不热衷（A 错）——“We used to play all the time at home, but I wasn't that keen because being the youngest child, I always lost”；真正的转折是 “It wasn't until I was a teenager that I discovered that I could actually play quite well and they chose me for the school team. It was much more fun to be able to win school championships and I was soon really into it.” —— 进校队开始参赛后才真正着迷（选 B）；那是十几岁时的事，不是小学（C 错）。",
        },
        {
          q: "What does Tara enjoy most about travelling to international competitions?",
          opts: ["going sightseeing", "learning new things about the game", "meeting new people"],
          answer: 2,
          explanation:
            "观光很难实现（A 错）——“it's not often easy to see much of the city I'm in because the competitions can last all day and even into the evening”；研究对手是辛苦的必要工作（B 错）——“I also need to spend a lot of time studying the other players ... so it's hard work”；她明确说 “But the best bit is getting to know them socially afterwards.” —— 最享受的是赛后社交、结识新朋友（选 C）。",
        },
        {
          q: "How did she feel about her last competition?",
          opts: ["confident she was well prepared", "pleased she was improving", "impressed by the other players"],
          answer: 2,
          explanation:
            "她本就准备不足、发挥退步（A、B 错）——“I was a bit disappointed because I didn't play as well as I did last year. I realised I hadn't spent enough time getting ready for it”；让她叹服的是对手：“this time, the other players were so much more talented than me that I knew I wouldn't win.” —— 其他棋手才华远胜于她（选 C）。",
        },
        {
          q: "What does she do to relax?",
          opts: ["read books", "do a team sport", "play an instrument"],
          answer: 0,
          explanation:
            "“After a stressful day studying, I like to pick up a novel for a while because it makes me feel calm” —— 读小说放松（选 A）；跑步是日常锻炼而非团队运动（B 错）——“I like to go out for a run most days”；她只是听爵士乐、喜欢小号的声音，并不演奏乐器（C 错）——“or listen to jazz music. I love the sound of the trumpet, for example.”",
        },
        {
          q: "Why does Tara teach children to play chess?",
          opts: ["to help very intelligent children", "to learn more herself", "to earn more money"],
          answer: 1,
          explanation:
            "教的对象是学业吃力的孩子而非天才儿童（A 错）——“It's actually a way to support children who find school difficult”；钱也不是主因（C 错）——“It isn't about the money, which is always useful, but not the most important reason”；她说 “I simply enjoy it and I get lots of ideas for my own techniques for my game as well.” —— 教棋的同时自己棋艺上也有收获（选 B）。",
        },
        {
          q: "What does Tara plan to do next?",
          opts: ["learn a new language", "work in computing", "study at university"],
          answer: 2,
          explanation:
            "有人请她做在线象棋编程，但她兴趣不大（B 错）——“I've been offered work with programming for online chess games, but it's not something that interests me much”；学日语只是 “Maybe ... but that'll have to wait until I have more time”（A 错）；已确定的是 “I've signed up to do a degree in maths, which requires similar thinking.” —— 报名读数学学位，即上大学（选 C）。",
        },
      ],
    },
  },
};

// PET Trainer 2 Test 6 听力数据（自动转录，待人工核对）
const TRAINER2_TEST_6_LISTENING = {
  meta: {
    id: "pet-trainer2-test6-listening",
    title: "PET Trainer 2 · Test 6 听力",
    level: "PET",
    collection: "PET Trainer 2（精讲精练）",
    book: "B1 Preliminary for Schools Trainer 2 (2024)",
    paper: "Listening",
    pages: "Test 6 Exam Practice · 书页 160–164",
    source: "PET Trainer2/PET Trainer2 电子版.pdf",
    answerSource: "书内 Practice Test Keys + 书内 Audioscripts 交叉核对",
    verified: false,
  },
  parts: {
    1: {
      type: "image_mcq",
      title: "Part 1 · 图片选择题",
      instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-6/part-1.mp3",
      items: [
        {
          q: "Which is the girl's favourite painting?",
          image: "/images/pet/listening/trainer2/t6-q1.png",
          answer: 1,
          explanation:
            "山景画 “rather depressing and dark”（A 图错）；瀑布画 “amazing, but less realistic, so it's not one I'd have on my wall”（C 图错）；她最喜欢海景画 —— “I was more attracted by the paintings with light and water in them, like the waterfall scene and the one of the sea. The way the artist showed the waves, you could almost see them moving. I'd go back to see it again any day.”（B 图），选 B。",
        },
        {
          q: "What new series do the friends decide to watch?",
          image: "/images/pet/listening/trainer2/t6-q2.png",
          answer: 2,
          explanation:
            "新出的舞蹈题材剧被否（A 图错）——“There's new one about a group of kids who start a dance group ... they say the music is old-fashioned”；校园冒险剧男生提议过（B 图错）——“what about the school series with super intelligent teenagers that have adventures?”，但女孩 “I like the sound of that, but I fancy watching something funny this evening”；最终看的是 “a hospital one that's actually a comedy”，男孩说 “OK. Let's watch that then.”（C 图），选 C。",
        },
        {
          q: "Where can the visitors to the museum get information from?",
          image: "/images/pet/listening/trainer2/t6-q3.png",
          answer: 0,
          explanation:
            "新系统是触摸屏：“There will be touch screens giving you all the details of each item on display.”（A 图），选 A；旧耳机已被取代（B 图错）——“These replace the headphones we used to have”；服务台也取消了（C 图错）——“Our new service ... means we no longer need to have an information desk, so no one has to queue any more.”",
        },
        {
          q: "Which video game does the girl prefer?",
          image: "/images/pet/listening/trainer2/t6-q4.png",
          answer: 0,
          explanation:
            "City Creation 只是 “it's alright”，而且 “It's not as exciting as Car Race 2 ... the first stages are a bit too easy”（C 图错）；Car Race 2 是去年买的旧游戏（B 图错）；她最后说 Space Star：“You can make incredible rockets and the graphics are really special. I've played it more often than the other two because of that. You should try it!” —— 三个游戏里玩得最多、最喜欢的是太空游戏 Space Star（A 图），选 A。",
        },
        {
          q: "Why did the boy go to the match by train?",
          image: "/images/pet/listening/trainer2/t6-q5.png",
          answer: 2,
          explanation:
            "平时才骑车，这次 “it was too far to go by bike”（A 图错）；天气差只是妈妈开车送他的原因（B 图错）——“the weather was terrible, so Mum offered to give me a lift”；真正让他改坐火车的是 “We'd just gone a short way when there was a huge traffic jam, so she turned off and dropped me at the station.” —— 路上大堵车，只好在中途火车站改乘火车（C 图），选 C。",
        },
        {
          q: "What did the boy buy for the holiday?",
          image: "/images/pet/listening/trainer2/t6-q6.png",
          answer: 2,
          explanation:
            "大毛巾是去年买的（A 图错）——“I already have a big towel that I bought last year”；凉鞋没买成（B 图错）——“they didn't have my size in the shoe shop so I'll have to buy sandals when I get there”；实际买到的是太阳镜：“I wanted to get some sunglasses ... I found some cool glasses that weren't too expensive.”（C 图），选 C。",
        },
        {
          q: "What is the girl famous for?",
          image: "/images/pet/listening/trainer2/t6-q7.png",
          answer: 0,
          explanation:
            "唱歌是这次的惊喜新尝试（B 图错）——“she surprised the audience with her strong voice as no one had heard her sing before”；打鼓是 “This time she also joined the band to play the drums” 的临时客串（C 图错）；而成名靠的是舞蹈：“Everyone was excited to see her new dance routine and they all agreed it was even better than the style that has made her so popular.” —— 让她走红的正是舞姿（A 图），选 A。",
        },
      ],
    },
    2: {
      type: "mcq",
      title: "Part 2 · 单项选择题",
      instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-6/part-2.mp3",
      items: [
        {
          q: "You will hear two friends talking about a band. What does the girl think is most original about the band?",
          opts: ["what they sang about", "how well they sang", "how they were dressed"],
          answer: 0,
          explanation:
            "她明确说 “What surprised me was their message. It was so unusual. I'd never heard anything like it before. Boy: Neither had I.” —— 乐队的歌词讯息前所未见（= 唱的内容，选 A）；唱功她评价平平（B 错）——“She wasn't bad, although I thought the guitarist was more talented”；两人虽提到乐队长外套的穿衣风格像 80 年代（C 与穿着有关），但那是“像另一支你喜欢的乐队”的联想，不是最让她觉得新奇的点。",
        },
        {
          q: "You will hear a boy talking about a restaurant. Why did his family decide to go to the restaurant?",
          opts: ["The food was a reasonable price.", "There was lots of space.", "They could park there."],
          answer: 1,
          explanation:
            "原本想订的电影院旁那家贵餐厅满了（“we tried to book too late so it was full”），改去新餐厅的直接原因是地方大：“The new one is pretty big and has plenty of tables, so we chose to go there.”（选 B）；“It didn't cost too much and the meal was delicious” 是饭后评价，不是当初选择的原因（A 错）；走路去很方便恰恰说明不需要停车（C 错）——“it's really easy for us to walk there rather than taking the car”。",
        },
        {
          q: "You will hear a boy and a girl talking about recycling. The boy is trying to convince the girl to",
          opts: ["join an activity.", "support his plan.", "give up a habit."],
          answer: 0,
          explanation:
            "男生邀她参加下学期的回收项目：“The biology teacher suggested some of us could do a recycling project next term ... I'm going to sign up.”，并打消她的顾虑 “You wouldn't have to stop doing your usual things. Maybe just an hour or two a week.”，女孩松口 “Hmm. Maybe I could ... I'll think about it.” —— 是拉她一起参加活动（选 A）；项目是老师的建议，不是男生自己的计划要她声援（B 错）；他也没让她戒掉什么习惯，反而说不用放弃平常的事（C 错）。",
        },
        {
          q: "You will hear two friends talking about their classroom. What do they have to do next week?",
          opts: ["move the furniture", "decorate the walls", "remove their books"],
          answer: 2,
          explanation:
            "搬课桌椅被明确否定（A 错）——“Boy: I suppose that means putting all the chairs and desks somewhere. Girl: We won't be doing that.”；刷墙是假期间工人来干的事，他们要做的反而是把海报揭下来（B 错）——“they want to paint all the classrooms while we're away ... It's like taking all the posters down”；必须做的是 “making sure that all our personal stuff is out because things could get lost when the painters come in” —— 把自己的东西（书等）清走（选 C）。",
        },
        {
          q: "You will hear a girl telling a friend about a job advertisement. How does she feel about it?",
          opts: ["hopeful she'll get work", "shocked by the wages", "keen to work hard"],
          answer: 1,
          explanation:
            "她想工作、也觉得工时合适（“I'd love to have a job and the hours are good”），但重点落在工资上：“but the money's terrible. I didn't realise they were allowed to pay so little. I suppose they think that students don't need much, but it's awful.” —— 对如此低的工资感到震惊（选 B）；她并没有表现出对得到这份工作抱希望（A 错），也没说想拼命干活（C 错）。",
        },
        {
          q: "You will hear a boy talking about a photograph. What was difficult about taking it?",
          opts: ["It became too dark.", "The weather was bad.", "The location was hard to get to."],
          answer: 1,
          explanation:
            "“At first, it was really sunny, but by the time I got to the forest, it was so windy that I couldn't get a proper picture of the trees because they were moving so much. In the end I had to wait until it was calmer, so it took a long time.” —— 风太大吹得树乱晃，等风停才拍成（= 天气糟糕，选 B）；光线一直是晴天，没提变暗（A 错）；路程 “Dad gave me a lift ... it wasn't too bad walking up. I'd expected it to be worse”，并不难走（C 错）。",
        },
      ],
    },
    3: {
      type: "blanks",
      title: "Part 3 · 信息填空题",
      instruction: "听一段学生介绍自己参加的轮滑俱乐部的录音，在笔记空格中填入 1–2 个词、数字或日期或时间。",
      audio: "/audio/pet-trainer2/test-6/part-3.mp3",
      items: [
        {
          q: "The club offers classes for beginners on（新手班时间）：（14）______",
          answer: ["thursdays"],
          show: "Thursdays",
          explanation: "“There are classes every day for different levels. I go on Friday afternoons, but if you're just starting, there's a group on Thursdays.” —— 周五是他自己上课的时间（干扰项），新手班在周四（Thursdays）；周三则是高阶学员训练（“the advanced students who train on Wednesdays”）。",
        },
        {
          q: "At the weekends when the weather is good, they skate in（周末好天气时滑冰的地点）：（15）______",
          answer: ["parks"],
          show: "parks",
          explanation: "“On Saturdays or Sundays, we do trips to different places in the city, unless it's raining. In that case we go to the skating centre near the football stadium ... The group leaders take us to parks where we're allowed to skate” —— 天气好时去公园（parks），下雨才改去体育场旁的室内滑冰中心（干扰项）。",
        },
        {
          q: "When they are skating in the city, they have to wear a（城里滑冰必穿）：（16）______ and a helmet.",
          answer: ["yellow jacket", "jacket"],
          show: "(yellow) jacket",
          explanation: "“On the city trips, they give each of us a yellow jacket so that no one gets lost. Parents are happy about this rule and we look like a real team!” —— 城市活动时俱乐部给每人发黄色夹克防止走散，即必须穿（yellow）jacket；头盔是另列在题干里的装备（“you'll need to buy some skates and a helmet”）。",
        },
        {
          q: "At the National Championships, the club members were surprised to get special（锦标赛上意外获得）：（17）______",
          answer: ["seats"],
          show: "seats",
          explanation: "“Once we went to watch the National Championships together. When we arrived, we were given seats in the front row. They're normally for more important people than us!” —— 意外坐上通常留给贵宾的前排座位，即 special seats。",
        },
        {
          q: "The class wants to learn to（下节课想学）：（18）______ on skates.",
          answer: ["jump"],
          show: "jump",
          explanation: "“Some teams performed dance routines and there was also an amazing jump event. All on skates! We all agreed that we'd like to try that in our next class, but not too high though!” —— 看完锦标赛的跳高表演后，全班想在下一课学跳跃（jump）。",
        },
        {
          q: "The club training sessions take place in a（平时训练场地）：（19）______ at a school.",
          answer: ["playground"],
          show: "playground",
          explanation: "“you'll find it in the secondary school next to the station. They let us use the playground which is great because it has a roof for when it's very sunny or raining so we don't have to find a sports hall.” —— 训练在车站旁中学的操场（playground）进行，有顶棚所以不用另找体育馆（干扰项 sports hall）。",
        },
      ],
    },
    4: {
      type: "mcq",
      title: "Part 4 · 访谈理解题",
      instruction: "听一段对年轻服装设计师 James Clark 的采访，每题从 A/B/C 中选出最佳答案。",
      audio: "/audio/pet-trainer2/test-6/part-4.mp3",
      items: [
        {
          q: "How did James first learn about making clothes?",
          opts: ["He went to classes.", "He watched other people.", "His mother taught him."],
          answer: 1,
          explanation:
            "他没上过课（A 错）；妈妈也不会用缝纫机（C 错）——“My mum had no idea how to use it”；他是靠看网上视频里别人的演示入门的：“I looked online and the videos I saw helped me start. They showed me the basic techniques.”（选 B）。",
        },
        {
          q: "What kind of clothes does James like designing now?",
          opts: ["dresses", "trousers", "T-shirts"],
          answer: 1,
          explanation:
            "“The simplest ones, like T-shirts, are often the easiest to make, but I like a challenge. Creating comfortable trousers is my main interest at the moment, although I'd also like to get more into the world of women's fashion, like dresses.” —— T 恤只是最简单的基础款（C 错），连衣裙是将来想拓展的方向（A 错），当下的主攻是舒适的裤子（选 B）。",
        },
        {
          q: "James thinks he's successful because",
          opts: ["his clothes are a good price.", "his ideas are original.", "his designs are for young people."],
          answer: 0,
          explanation:
            "“I make clothes that all kinds of people want to wear every day and, more importantly, clothes that they can afford.” —— 成功的关键是大家买得起（= 价格实惠，选 A）；他强调用的是传统材料而非标新立异（B 错）——“I like to use traditional materials which are natural and feel better”；顾客是 “all kinds of people” 各年龄层，并非只面向年轻人（C 错）。",
        },
        {
          q: "How did James feel about showing his designs in the London fashion show?",
          opts: ["nervous about speaking in public", "certain it would improve his career", "surprised he was chosen to be there"],
          answer: 2,
          explanation:
            "“I was so lucky to have had this chance. I never expected to be invited but a famous designer asked me to join his team and show a couple of my designs.” —— 从没想过会被邀请，受宠若惊（选 C）；全程没提当众讲话紧张（A 错）；“I hope it'll give me more opportunities in the future” 只是希望而非笃定（B 错）。",
        },
        {
          q: "What does James like most about his work?",
          opts: ["drawing", "travelling abroad", "meeting people"],
          answer: 0,
          explanation:
            "“I get to know a lot of models and photographers who do a great job, but I'm quite shy really so nothing makes me happier than sitting at my work desk putting my ideas on paper.” —— 最开心的是伏案把想法画成图（= 画图，选 A）；认识模特摄影师只是工作的一部分，他其实害羞（C 错）；出国找材料反而让他想念工作台（B 错）——“I'm often away looking for new materials, especially in Asia, and when I am, I miss doing that.”",
        },
        {
          q: "James thinks it's important to",
          opts: ["help the planet.", "keep learning.", "protect fashion workers."],
          answer: 0,
          explanation:
            "谈到用 3D 打印做生产时他说：“I'm exploring the possibilities of this as it reduces waste and also uses recycled materials, which is essential nowadays.” —— 减少浪费、使用回收材料对当下至关重要（= 环保，选 A）；办时装学校是为培训他人（B 错）——“We'll need to train people to work in this area ... I'd like to set up a fashion school to do this.”；保护时装从业者文中未提（C 错）。",
        },
      ],
    },
  },
};

export const PET_TRAINER2_LISTENING = [
  TRAINER2_TEST_1_LISTENING,
  TRAINER2_TEST_2_LISTENING,
  TRAINER2_TEST_3_LISTENING,
  TRAINER2_TEST_4_LISTENING,
  TRAINER2_TEST_5_LISTENING,
  TRAINER2_TEST_6_LISTENING,
]

export default PET_TRAINER2_LISTENING
