// PET 标准版官方真题 1（B1 Preliminary 1, 2020）Test 1 听力数据
// 题目来源：B1 PET新题型官方真题 1.pdf（扫描版逐页人工转录）Test 1 · PDF 页 21–26
// 答案来源：书内 Test 1 answer key（PDF 页 104）
// 音频来源：B1 PET student's book audio/Test 1 audio → public/audio/pet-standard/test-1/part-1..4.mp3

export const PET_LISTENING_STANDARD = [
  {
    meta: {
      id: "pet-standard-1-listening",
      title: "PET 标准版官方真题 1 · Test 1 听力",
      level: "PET",
      collection: "PET 标准版官方真题 1",
      book: "B1 Preliminary 1 (2020)",
      paper: "Listening",
      pages: "Test 1 · 书页 20–25",
      source: "B1 PET新题型官方真题 1.pdf",
      answerSource: "书内 Test 1 answer key（书页 103–104）",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-standard/test-1/part-1.mp3",
        items: [
          {
            q: "Where does the man think he left his wallet?",
            image: "/images/pet/listening/standard/t1-l-q1.png",
            answer: 1,
            explanation:
              "他在站台商店买三明治时钱包还在；之后到候车室坐下并把钱包放下，“I probably left it there” —— 车站候车室，选 B。",
          },
          {
            q: "What is tomorrow's talk at the Nature Society about?",
            image: "/images/pet/listening/standard/t1-l-q2.png",
            answer: 1,
            explanation:
              "河流主题上次已讲、雨林主题下个月才有；这次讲 “wild flowers in parks and gardens” —— 公园与花园，选 B。",
          },
          {
            q: "What will the woman order for lunch?",
            image: "/images/pet/listening/standard/t1-l-q3.png",
            answer: 0,
            explanation:
              "她在汤和三明治之间犹豫，但听说午餐都配新鲜面包后说 “I'll go for my usual choice” —— 她平时吃的沙拉，选 A。",
          },
          {
            q: "How did the woman find out about the exhibition?",
            image: "/images/pet/listening/standard/t1-l-q4.png",
            answer: 2,
            explanation:
              "美术馆网站没看到、镇上也没贴海报；“according to what I heard on the radio” —— 从广播得知，选 C。",
          },
          {
            q: "What job is the woman's brother doing?",
            image: "/images/pet/listening/standard/t1-l-q5.png",
            answer: 0,
            explanation:
              "他本想做店员，但店里只需要保安，“so he was given that job instead” —— 保安，选 A。",
          },
          {
            q: "How will the woman travel to her meeting?",
            image: "/images/pet/listening/standard/t1-l-q6.png",
            answer: 0,
            explanation:
              "火车被取消、站前等出租车的队伍太长；“it'll be quicker to rush home and get my own car” —— 开自己的车，选 A。",
          },
          {
            q: "Which sport has the man stopped doing?",
            image: "/images/pet/listening/standard/t1-l-q7.png",
            answer: 1,
            explanation:
              "今年刚开始玩单板滑雪、滑雪一直热爱；冰球 “it's too fast, though, and I gave it up in the end” —— 放弃冰球，选 B。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard/test-1/part-2.mp3",
        items: [
          {
            q: "You will hear two people talking about buying a bicycle. The woman suggests that the man should",
            opts: ["try looking online.", "go to a different shop.", "get advice from an expert."],
            answer: 2,
            explanation:
              "她认为网上信息太多，建议去问她当职业自行车手的哥哥，“he'd give you some useful ideas” —— 向专家请教，选 C。",
          },
          {
            q: "You will hear a man telling his friend about his Welsh language course. What does the man say about it?",
            opts: ["The teacher speaks too fast.", "The lessons are too long.", "The grammar is too difficult."],
            answer: 0,
            explanation:
              "他说语法其实不算太难、课只有一小时；主要问题是 “if she spoke more slowly, I'd understand a lot more” —— 老师语速太快，选 A。",
          },
          {
            q: "You will hear a woman telling her colleague about her weekend. What did the woman like about it?",
            opts: ["visiting a new place in the city", "seeing her children enjoying themselves", "having a chance to relax"],
            answer: 2,
            explanation:
              "新集市一直下雨、孩子们第二天还在咳嗽；她喜欢的是坐在沙发上看电视，“which was something I really needed to do” —— 放松休息，选 C。",
          },
          {
            q: "You will hear two friends talking about a new restaurant. They both think the restaurant would be better if",
            opts: ["the food was fresher.", "the service was faster.", "the prices were cheaper."],
            answer: 0,
            explanation:
              "两人都觉得价格不贵、服务可以等；问题是 “everything seemed to be out of a tin or frozen stuff heated up” —— 食物不够新鲜，选 A。",
          },
          {
            q: "You will hear two old friends talking at a party. How is the man's appearance different from before?",
            opts: ["He has grown a beard.", "He has started wearing glasses.", "He has changed his style of clothes."],
            answer: 1,
            explanation:
              "夹克还是旧的、胡子已经刮掉；“I see you have to wear glasses now as well” —— 开始戴眼镜，选 B。",
          },
          {
            q: "You will hear two colleagues talking about a meeting. How does the woman feel about it?",
            opts: ["annoyed that she will have to attend it", "worried that her presentation will be unpopular", "surprised that it is still going to take place"],
            answer: 2,
            explanation:
              "John 生病请假，她以为会取消会议，“I can't believe that. Without John?” —— 惊讶会议照常举行，选 C。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段关于一周歌唱课程的介绍，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard/test-1/part-3.mp3",
        items: [
          {
            q: "Songs from musicals: (14) Susan ______",
            answer: ["brokley"],
            show: "Brokley",
            explanation: "音乐剧歌曲老师是 Susan Brokley，音频拼读姓氏 B-R-O-K-L-E-Y。",
          },
          {
            q: "Concert · When: Friday, at (15) ______ p.m.",
            answer: ["half past eight", "eight thirty", "8.30", "8:30"],
            show: "half past eight",
            explanation: "“It'll begin at half past eight”；8 点是剧院开门时间，不是开演时间。",
          },
          {
            q: "Colour of clothes: (16) ______",
            answer: ["blue"],
            show: "blue",
            explanation: "“we ask that they're blue so everyone looks similar”；黑色是传统颜色但本次不用。",
          },
          {
            q: "Map of building: available from the (17) ______",
            answer: ["receptionist"],
            show: "receptionist",
            explanation: "标有各房间位置的地图 “you can get from the receptionist”。",
          },
          {
            q: "Lunch: eat in the (18) ______",
            answer: ["hall"],
            show: "hall",
            explanation: "没有咖啡馆、厨房没有座位，“take your sandwiches… to the hall”。",
          },
          {
            q: "Car park: costs £ (19) ______ per day",
            answer: ["3", "three"],
            show: "3",
            explanation: "按月付要 20 英镑，按天付每天 3 英镑、一周共 15 英镑。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 单项选择题",
        instruction: "听一段对理发师 Mickey Diaz 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard/test-1/part-4.mp3",
        items: [
          {
            q: "Why did Mickey decide to become a hairdresser?",
            opts: ["He was offered a job by a friend.", "He wanted to do what his family did.", "He hoped to meet some famous people."],
            answer: 0,
            explanation:
              "父母虽都是理发师，但他本想做完全不同的工作；大学毕业后 “a friend said I could help in his hairdresser's shop”，选 A。",
          },
          {
            q: "On a typical day at work, Mickey says that he",
            opts: ["doesn't take enough time for breaks.", "works longer hours than he would like to.", "tries to do a range of jobs."],
            answer: 2,
            explanation:
              "再忙他也会留出休息时间、加班他并不介意；他喜欢 “mix things up – a few women's cuts, a few men's, some colour” —— 做多种工作，选 C。",
          },
          {
            q: "The part of the job which Mickey likes most is",
            opts: ["creating new haircuts.", "hearing about customers' lives.", "using his imagination."],
            answer: 1,
            explanation:
              "他不喜欢被要求创造新发型；“I really enjoy exchanging news with the people who come back regularly” —— 听顾客讲生活，选 B。",
          },
          {
            q: "What part of his job does Mickey dislike?",
            opts: ["having to do boring courses", "sharing ideas with colleagues", "dealing with difficult customers"],
            answer: 0,
            explanation:
              "顾客无礼从不影响他；“we have to take health and safety courses which I find extremely dull” —— 无聊的课程，选 A。",
          },
          {
            q: "How does Mickey feel after cutting a customer's hair?",
            opts: ["worried that the customer may be annoyed", "proud of what he's achieved", "keen to continue learning"],
            answer: 2,
            explanation:
              "他总觉得还有能改进的地方，“so I'm always trying to improve” —— 渴望继续学习，选 C。",
          },
          {
            q: "Mickey recommends that people who want to work as hairdressers",
            opts: ["shouldn't take the first job they're offered.", "shouldn't believe they know everything.", "shouldn't expect to earn much at first."],
            answer: 1,
            explanation:
              "他说收入加上小费其实不错；但很多人 “make the mistake of thinking they've learned all there is to learn” —— 不要以为什么都会了，选 B。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-standard-1-listening-t2",
      title: "PET 标准版官方真题 1 · Test 2 听力",
      level: "PET",
      collection: "PET 标准版官方真题 1",
      book: "B1 Preliminary 1 (2020)",
      paper: "Listening",
      pages: "Test 2 · 书页 38–43",
      source: "B1 PET新题型官方真题 1.pdf",
      answerSource: "书内 Test 2 answer key（书页 127）",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-standard/test-2/part-1.mp3",
        items: [
          {
            q: "What has the man forgotten to pack for the trip?",
            image: "/images/pet/listening/standard/t2-l-q1.png",
            answer: 0,
            explanation:
              "睡袋这次特意装了、徒步靴也带着；“I've just realised I've left my torch behind” —— 忘带手电筒，选 A。",
          },
          {
            q: "What time is the plane expected to depart?",
            image: "/images/pet/listening/standard/t2-l-q2.png",
            answer: 2,
            explanation:
              "10.45 的航班因天气延误，“unlikely to take off until 12.15”；11.30 是值机截止时间，选 C。",
          },
          {
            q: "Where did the family go at the weekend?",
            image: "/images/pet/listening/standard/t2-l-q3.png",
            answer: 1,
            explanation:
              "原本想看戏，最后在网上买到折扣票去了城堡；“we all enjoyed it far more than the art gallery we went to last time” —— 城堡，选 B。",
          },
          {
            q: "What are the man and woman going to order?",
            image: "/images/pet/listening/standard/t2-l-q4.png",
            answer: 0,
            explanation:
              "两人嫌气泡水太贵，“What about asking for a jug of tap water … put ice and lemon in it” —— 一大壶加冰和柠檬的自来水，选 A。",
          },
          {
            q: "Which photograph did the man take?",
            image: "/images/pet/listening/standard/t2-l-q5.png",
            answer: 0,
            explanation:
              "沙漠那张是朋友拍的、湖景那张是别人的作品；他拍的是雨中街景，“Have a look at this one of mine” —— 选 A。",
          },
          {
            q: "How does the man suggest his friends should travel to the concert?",
            image: "/images/pet/listening/standard/t2-l-q6.png",
            answer: 0,
            explanation:
              "Neil 没法开车送他们，建议 “take the underground to Greenoaks station”，下车走不远即到，回家再叫出租车 —— 坐地铁，选 A。",
          },
          {
            q: "What is the weather forecast for the north this morning?",
            image: "/images/pet/listening/standard/t2-l-q7.png",
            answer: 2,
            explanation:
              "大雾在南部、大风要到傍晚；北部上午 “heavy snow showers, mainly in northern areas”，午饭前结束 —— 大雪，选 C。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard/test-2/part-2.mp3",
        items: [
          {
            q: "You will hear a boy telling a friend about plans for his birthday. How does he feel about the plans he's made?",
            opts: ["annoyed that some of his friends don't want to come", "disappointed that he can't invite more friends", "worried that it might be boring for his friends"],
            answer: 1,
            explanation:
              "他想把大学和球队的朋友都请来，但人太多不适合集体骑行，“I'll have to choose between them, which is a shame” —— 遗憾不能请更多人，选 B。",
          },
          {
            q: "You will hear two friends talking about a football match they went to. They both think that",
            opts: ["the crowd was smaller than usual.", "the match was quite boring.", "the referee made some bad decisions."],
            answer: 0,
            explanation:
              "“there weren't nearly as many people watching as there normally are”，冷天气可能是原因 —— 观众比平时少，选 A。",
          },
          {
            q: "You will hear a man telling his friend about a skiing holiday. How did he feel during the holiday?",
            opts: ["upset that he was injured", "embarrassed by his skiing ability", "angry that his friends put photos online"],
            answer: 1,
            explanation:
              "高级雪道太难，他半路放弃，“the others all found this very funny, which made me feel pretty silly” —— 为自己的滑雪水平感到尴尬，选 B。",
          },
          {
            q: "You will hear two friends talking about cars. The woman thinks the best way to get information about new cars is from",
            opts: ["advertisements.", "TV programmes.", "internet reviews."],
            answer: 2,
            explanation:
              "电视节目里提到了一些有用的网址，“I'd always rather see what car owners say than trust adverts or stuff on TV” —— 看网上车主评价，选 C。",
          },
          {
            q: "You will hear a woman telling a friend about a singing competition. What does the woman say about it?",
            opts: ["Judging it is the easiest part.", "It is taking a long time to organise it.", "She would love to perform in it."],
            answer: 1,
            explanation:
              "她负责整个比赛，“I'm spending ages sorting things out, including most evenings” —— 组织工作花了很多时间，选 B。",
          },
          {
            q: "You will hear a woman talking to a friend about her recent move to a city. How does the woman feel about it?",
            opts: ["pleased about a surprising health benefit", "glad that she has met friendly people", "satisfied with her local area"],
            answer: 0,
            explanation:
              "邻居很安静、街上嘈杂，她还没下定论；但出门都靠走路，“I'm actually fitter than when I lived in the countryside. I hadn't expected that” —— 意外的健康收获，选 A。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一位卡通电影制作者的讲话，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard/test-2/part-3.mp3",
        items: [
          {
            q: "Kelly did a degree in (14) ______ at university.",
            answer: ["art"],
            show: "art",
            explanation: "虽然现在电脑技术同样精通，大学时 “I actually studied art for my degree”。",
          },
          {
            q: "Kelly really enjoys going to work because of the (15) ______ at the company.",
            answer: ["people"],
            show: "people",
            explanation: "软件很好，但 “it's the people there that make it such a fantastic place to work”。",
          },
          {
            q: "Kelly's department is responsible for creating (16) ______ in cartoons.",
            answer: ["animals"],
            show: "animals",
            explanation: "她所在部门 “works on animals in the story”，其他部门负责人物或建筑。",
          },
          {
            q: "At the moment Kelly is trying to develop her (17) ______ skills.",
            answer: ["acting"],
            show: "acting",
            explanation: "去年上了写作课，现在 “I've just started doing acting classes”，虽然不打算出镜。",
          },
          {
            q: "It takes Kelly's company (18) ______ to make a full-length cartoon film.",
            answer: ["8 months", "eight months", "8"],
            show: "8 months",
            explanation: "传统手工方式约需两年，用电脑 “the eight months it takes my company to do the same”。",
          },
          {
            q: "Kelly's next project will be some cartoons for a (19) ______ .",
            answer: ["website"],
            show: "website",
            explanation: "下一个项目不是儿童电影，“It's actually something for a website”。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 单项选择题",
        instruction: "听一段对国际比赛游泳选手 Rosie Banks 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard/test-2/part-4.mp3",
        items: [
          {
            q: "Rosie swam a lot when she was very young because",
            opts: ["her father thought it was an important skill.", "she wanted to be like her brother.", "there were free classes at her local pool."],
            answer: 1,
            explanation:
              "哥哥 Joel 游泳最棒，“I practised as often as possible so I could swim as fast as him” —— 想赶上哥哥，选 B。",
          },
          {
            q: "What did Rosie dislike about doing serious swimming training?",
            opts: ["being away from her friends", "the long journey from home", "missing some school lessons"],
            answer: 2,
            explanation:
              "路上还能聊天、有时间仍会见朋友；“I couldn't attend school sometimes, which I was unhappy about” —— 缺课，选 C。",
          },
          {
            q: "When Rosie won the Swim Stars International competition she was",
            opts: ["surprised by the public interest.", "amazed that she had done so well.", "excited about meeting other famous sportspeople."],
            answer: 0,
            explanation:
              "赢比赛在意料之中，但游泳很少上电视，“I couldn't believe people wanted to read and watch interviews with me” —— 对公众关注感到意外，选 A。",
          },
          {
            q: "Rosie says she needs more help with the cost of",
            opts: ["transport to competitions.", "the kit she needs.", "her accommodation while she's abroad."],
            answer: 2,
            explanation:
              "运动品牌已支付机票和装备；“It'd be great if they also gave me financial support for hotels” —— 国外住宿，选 C。",
          },
          {
            q: "What has Rosie changed since she got a new coach?",
            opts: ["her swimming style", "what she eats", "her fitness routine"],
            answer: 0,
            explanation:
              "体能训练照旧、饮食教练也满意；根据教练建议改了 “the way I move my arms through the water” —— 游泳姿势，选 A。",
          },
          {
            q: "What is Rosie planning to do in Spain?",
            opts: ["take part in some races", "train with different people", "have some time to relax"],
            answer: 1,
            explanation:
              "她去上特训课，“I'll work with lots of swimmers I haven't met before”，不参加比赛 —— 和不同的人一起训练，选 B。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-standard-1-listening-t3",
      title: "PET 标准版官方真题 1 · Test 3 听力",
      level: "PET",
      collection: "PET 标准版官方真题 1",
      book: "B1 Preliminary 1 (2020)",
      paper: "Listening",
      pages: "Test 3 · 书页 56–61",
      source: "B1 PET新题型官方真题 1.pdf",
      answerSource: "书内 Test 3 answer key（书页 151）",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-standard/test-3/part-1.mp3",
        items: [
          {
            q: "Why was the man late?",
            image: "/images/pet/listening/standard/t3-l-q1.png",
            answer: 1,
            explanation:
              "车昨晚彻底坏了只能坐公交；雨 “Actually that wasn't it” 被排除，交通灯故障造成 “long delays before we got moving again” —— 交通拥堵，选 B。",
          },
          {
            q: "Why is the main road closed today?",
            image: "/images/pet/listening/standard/t3-l-q2.png",
            answer: 2,
            explanation:
              "新闻说 “They're filming a movie, and people can come and watch”；慈善自行车赛上周末刚办完、街头派对下周末才举行 —— 拍电影，选 C。",
          },
          {
            q: "Where do they decide to have the wedding anniversary party?",
            image: "/images/pet/listening/standard/t3-l-q3.png",
            answer: 1,
            explanation:
              "新餐厅太远、花园派对去年办过；“We could always take them on a river cruise, and eat on board”，女士 “That's not a bad idea … I'll make the arrangements” —— 乘船，选 B。",
          },
          {
            q: "What does the man decide to order?",
            image: "/images/pet/listening/standard/t3-l-q4.png",
            answer: 1,
            explanation:
              "本想吃 pasta，听女士推荐披萨后改主意：“If it's as good as you say, I'll try it. I think I'd prefer that today actually”；chicken and chips 是上次吃的 —— 披萨，选 B。",
          },
          {
            q: "Which armchair is the man going to buy?",
            image: "/images/pet/listening/standard/t3-l-q5.png",
            answer: 0,
            explanation:
              "条纹椅与家具不配、带靠垫的那款太大占地方；最终 “I'll go for the one you suggested” —— 女士推荐的素色款，选 A。",
          },
          {
            q: "Which concert has the woman arranged to attend?",
            image: "/images/pet/listening/standard/t3-l-q6.png",
            answer: 2,
            explanation:
              "已买票的是 “Billy Ryan the folk singer and guitar player”；Buzz 摇滚乐队刚看过、爵士乐队只是男士的提议 —— 民谣吉他弹唱，选 C。",
          },
          {
            q: "Which tomatoes will the man use?",
            image: "/images/pet/listening/standard/t3-l-q7.png",
            answer: 0,
            explanation:
              "开罐头被女士说 “That's cheating”，他最终 “OK, I'll follow your advice” —— 用整个新鲜番茄慢慢煮，选 A。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard/test-3/part-2.mp3",
        items: [
          {
            q: "You will hear two friends talking about doing exercise. Why is the man finding it difficult to do exercise?",
            opts: ["He can't afford to go to the gym.", "He doesn't have a lot of free time.", "There aren't any sports facilities nearby."],
            answer: 1,
            explanation:
              "健身房贵不是关键，“I know, but it's when to go. I'm at work all day, often till late” —— 空闲时间太少，选 B。",
          },
          {
            q: "You will hear two people talking in a restaurant. They agree that",
            opts: ["the soup was very spicy.", "the fish dishes were very tasty.", "one of the desserts was very small."],
            answer: 1,
            explanation:
              "汤味道古怪两人都没夸；“the salmon was wonderful”、“my tuna was gorgeous” —— 两道鱼都好吃，选 B。",
          },
          {
            q: "You will hear a woman telling her friend about her neighbours. What problem does she have with her neighbours?",
            opts: ["They are noisy.", "They are unfriendly.", "They are untidy."],
            answer: 2,
            explanation:
              "晚上聊天放音乐她不介意（“I can sleep through anything”），他们也总笑着打招呼；“what bothers me is the mess they've left outside – loads of empty boxes” —— 凌乱，选 C。",
          },
          {
            q: "You will hear two friends talking about a new museum. What does the woman say about it?",
            opts: ["She was surprised by some things on display.", "The opening hours suit her.", "She hopes to have another chance to visit."],
            answer: 2,
            explanation:
              "她意犹未尽：“I wouldn't mind having another look around, but I'll have to wait until next weekend as that's when I'm not working” —— 想再去一次，选 C。",
          },
          {
            q: "You will hear a man talking to a colleague about a hotel he stayed in. He complains that",
            opts: ["the room was too small for him.", "the location wasn't what he expected.", "he was disturbed by the traffic."],
            answer: 1,
            explanation:
              "夜里交通声几乎听不见、房间他一人住刚好；“it wasn't walking distance from the city centre, which is how it was advertised” —— 位置与宣传不符，选 B。",
          },
          {
            q: "You will hear two passengers talking on an aeroplane. How does the woman feel about flying?",
            opts: ["She thinks it's very convenient.", "She finds it's a relaxing way to travel.", "She prefers travelling by train to flying."],
            answer: 0,
            explanation:
              "新工作需要长途出差，“the long distances … make flying a better option than the train”，起飞时她说 “I'm so pleased” —— 方便，选 A。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一位导游介绍 Gulum 一日游安排，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard/test-3/part-3.mp3",
        items: [
          {
            q: "Bus leaves at: (14) ______ a.m.",
            answer: ["8.15", "quarter past 8", "quarter past eight", "8:15"],
            show: "8.15",
            explanation: "平时 8.30 发车，本次 “the bus will go at exactly quarter past eight”。",
          },
          {
            q: "Meet before trip at: hotel (15) ______",
            answer: ["entrance"],
            show: "entrance",
            explanation: "“please meet at the entrance to the hotel rather than at the reception desk, which gets quite crowded”。",
          },
          {
            q: "First stop: ruin of a (16) ______",
            answer: ["palace"],
            show: "palace",
            explanation: "“a magnificent ruin … It used to be a palace”。",
          },
          {
            q: "Lunch at: The (17) ______ Restaurant",
            answer: ["Wakizi"],
            show: "Wakizi",
            explanation: "“we'll drive on to the Wakizi Restaurant … That's spelt W-A-K-I-Z-I”。",
          },
          {
            q: "Afternoon activity: (18) ______ or beach volleyball",
            answer: ["diving"],
            show: "diving",
            explanation: "“One option is to go diving”，该海域鱼类种类丰富；帆船因没风取消。",
          },
          {
            q: "Bring: (19) ______",
            answer: ["sun cream", "sun-cream", "sunscreen"],
            show: "sun cream",
            explanation: "“don't forget the sun-cream … you'll need it even on a cloudy day”；毛巾和沙滩椅由主办方提供。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 单项选择题",
        instruction: "听一段对攀树教练  James Sweeney 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard/test-3/part-4.mp3",
        items: [
          {
            q: "How did James become interested in trees?",
            opts: ["He worked for someone who looked after trees.", "He enjoyed playing in trees when he was a child.", "He learnt about trees from his mother."],
            answer: 0,
            explanation:
              "“Mom had a friend who was an arborist – someone who takes care of trees – and he offered me a job one summer” —— 曾为树木养护者工作，选 A。母亲虽是花园设计师但小时候不许他爬树。",
          },
          {
            q: "What surprised James when he first learnt to climb trees?",
            opts: ["the time it took to become good at it", "the wide range of people in the class", "the amount of equipment needed"],
            answer: 1,
            explanation:
              "本以为学员都年轻健壮，“in fact there were middle-aged climbers, children – even old people!” —— 学员构成之广让他意外，选 B。",
          },
          {
            q: "What does James enjoy most about his teaching work?",
            opts: ["helping people who need the skill for their work", "giving people an interesting new experience", "showing people how to climb in different kinds of weather"],
            answer: 0,
            explanation:
              "“particularly teaching those whose jobs involve having to go up trees, like scientists” —— 教工作中需要爬树的人，选 A。",
          },
          {
            q: "James travels around the USA a lot because",
            opts: ["interest in tree climbing is increasing there.", "there isn't much work in his own area in winter.", "he'd like to visit as many parts of the country as possible."],
            answer: 1,
            explanation:
              "“no-one wants to climb trees there in the winter. So I move around” —— 冬季本地没有生意，选 B。",
          },
          {
            q: "What does James like about sleeping in trees?",
            opts: ["He wakes up to the sound of birds.", "He thinks it's comfortable.", "He can look at the stars."],
            answer: 2,
            explanation:
              "“It's such a great place to get views of the night sky” —— 能看星星，选 C。",
          },
          {
            q: "When James climbs in the rainforests, he moves more slowly because",
            opts: ["he wants to study the insects.", "he finds the trees difficult to climb.", "he has to protect the trees."],
            answer: 2,
            explanation:
              "“It's an important environment, so you need to be careful not to damage it” —— 小心保护树木，选 C。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-standard-1-listening-t4",
      title: "PET 标准版官方真题 1 · Test 4 听力",
      level: "PET",
      collection: "PET 标准版官方真题 1",
      book: "B1 Preliminary 1 (2020)",
      paper: "Listening",
      pages: "Test 4 · 书页 74–79",
      source: "B1 PET新题型官方真题 1.pdf",
      answerSource: "书内 Test 4 answer key（书页 174）",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-standard/test-4/part-1.mp3",
        items: [
          {
            q: "How will the man travel to the city centre?",
            image: "/images/pet/listening/standard/t4-l-q1.png",
            answer: 1,
            explanation:
              "出租车虽方便但公交路线长；“What about the underground? … It'd be faster than a taxi”，男士 “That sounds perfect. I'll do that” —— 地铁，选 B。",
          },
          {
            q: "What did the girl dislike at the hostel she stayed in?",
            image: "/images/pet/listening/standard/t4-l-q2.png",
            answer: 0,
            explanation:
              "老鼠问题已经解决；“our beds didn't have mosquito nets, so we got bitten almost every night. Even after putting on insect cream”；屋顶猴子她并不介意 —— 蚊子，选 A。",
          },
          {
            q: "What is the man going to order for lunch?",
            image: "/images/pet/listening/standard/t4-l-q3.png",
            answer: 0,
            explanation:
              "他一开始想吃 salmon；披萨是女士的选择，curry “very spicy” 被排除；最终 “I've made up my mind. I'll have what I always have” —— 鱼，选 A。",
          },
          {
            q: "What sport would the woman like to try?",
            image: "/images/pet/listening/standard/t4-l-q4.png",
            answer: 2,
            explanation:
              "考虑过 golf 但太贵；“I'm not that good at racket sports but I wouldn't mind giving badminton a go” —— 羽毛球，选 C。",
          },
          {
            q: "Which book is the man reading?",
            image: "/images/pet/listening/standard/t4-l-q5.png",
            answer: 2,
            explanation:
              "“This one's set at sea – a guy who crosses the Pacific Ocean on his own”；关于宇航员的新书还没出版 —— 航海故事，选 C。",
          },
          {
            q: "Where does the man suggest going at the weekend?",
            image: "/images/pet/listening/standard/t4-l-q6.png",
            answer: 0,
            explanation:
              "海边散步可能遇风暴；“There's a new art exhibition on at the museum – definitely worth seeing”；电影院本周末没好片 —— 博物馆，选 A。",
          },
          {
            q: "How much is the latest smartphone in the store today?",
            image: "/images/pet/listening/standard/t4-l-q7.png",
            answer: 1,
            explanation:
              "“For an amazing £599, the most up-to-date smartphone is now available”；周一恢复 £699，去年旧款 £499 —— £599，选 B。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard/test-4/part-2.mp3",
        items: [
          {
            q: "You will hear a brother and sister talking about a gift for their cousin. Why do they decide to buy the gift online?",
            opts: ["It's heavy to carry home from the shop.", "It's not available in the shop.", "It's difficult to get to the shop."],
            answer: 0,
            explanation:
              "百货商店可能更贵，而且 “it weighs so much; can you imagine us trying to take it on the bus?” —— 太重不好搬，选 A。",
          },
          {
            q: "You will hear two colleagues discussing their holiday travel plans. The man thinks that the woman should",
            opts: ["go somewhere new for her holiday.", "spend more time away.", "take a different type of transport."],
            answer: 2,
            explanation:
              "她又打算开车加渡轮去爱尔兰，男士建议 “Wouldn't it be better if you flew? You wouldn't waste so much time” —— 换一种交通方式，选 C。",
          },
          {
            q: "You will hear a man talking to a friend about a fitness training session. The man cannot attend today's session because",
            opts: ["his doctor has advised him to rest.", "he has not recovered from a cold yet.", "he has just had an operation."],
            answer: 0,
            explanation:
              "感冒已经好了，脚部手术是周五才做；“But my doctor told me to take things easy anyway” —— 医生建议静养，选 A。",
          },
          {
            q: "You will hear two friends talking about a play they've just seen. What does the woman say about the play?",
            opts: ["It improved after the interval.", "The costumes were strange.", "The acting was disappointing."],
            answer: 2,
            explanation:
              "下半场不如上半场；“Actually I expected the performances to be a lot better. I must say though the costumes were brilliant” —— 表演令人失望，选 C。",
          },
          {
            q: "You will hear two friends talking about a film and its soundtrack. What does the woman say about the soundtrack?",
            opts: ["It's enjoyable for all ages.", "It's relaxing to listen to.", "It's better than the film."],
            answer: 0,
            explanation:
              "电影虽然面向孩子，但 “The music's definitely popular with a much wider range of people”；结尾还说 “as good as the film” —— 各年龄段都能欣赏，选 A。",
          },
          {
            q: "You will hear two friends talking about the news. They agree that",
            opts: ["reading the news is an essential part of the day.", "it's best to read the news online.", "there's too much news about famous people."],
            answer: 0,
            explanation:
              "她 “every morning before anything else” 看新闻，男士 “So do I. I need to for my job”；在线还是纸质、名人新闻多少两人看法相反 —— 看新闻是每天必做，选 A。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一位导游介绍乡间徒步安排，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard/test-4/part-3.mp3",
        items: [
          {
            q: "The walk will take: (14) ______ hours",
            answer: ["five", "5"],
            show: "five",
            explanation: "两条路线分别四小时和五小时，“We'll be taking the longer one, as it has fewer hills”。",
          },
          {
            q: "Be careful of: (15) ______ along the route",
            answer: ["bikes", "bicycles"],
            show: "bikes",
            explanation: "路线避开公路所以汽车不是问题，“Please look out for bikes, though”。",
          },
          {
            q: "Have lunch near the: (16) ______",
            answer: ["lake"],
            show: "lake",
            explanation: "游客中心的咖啡馆停业维修，“I've picked a great place to eat by the lake”。",
          },
          {
            q: "Likely to see wildlife including: (17) ______",
            answer: ["butterflies"],
            show: "butterflies",
            explanation: "“You'll be pleased to know that there are lots of butterflies at this time of year”；青蛙白天躲着看不到。",
          },
          {
            q: "At the end of the walk can visit a: (18) ______",
            answer: ["castle"],
            show: "castle",
            explanation: "终点没有纪念品商店，“There is a castle, though. It's not very big, but it is interesting”。",
          },
          {
            q: "Can take a: (19) ______ back to the start",
            answer: ["bus", "bus service"],
            show: "bus service",
            explanation: "旧火车站早已废弃，出租车不会来这么远；“There's a bus service, although you may have to wait a while”。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 单项选择题",
        instruction: "听一段对年轻诗人 Laura Dickson 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard/test-4/part-4.mp3",
        items: [
          {
            q: "Laura first became interested in poetry",
            opts: ["by reading it at home.", "by studying it at school.", "by learning about it from her father."],
            answer: 0,
            explanation:
              "“There were always lots of poetry books on the shelves around the house. I used to spend hours looking at them” —— 在家读书接触诗歌，选 A。",
          },
          {
            q: "What made Laura decide to become a professional poet?",
            opts: ["She met a famous poet.", "She did a poetry course.", "She won a poetry prize."],
            answer: 2,
            explanation:
              "新闻课老师建议她参赛，“I did, and two months later found out I'd come first. That's when I knew I wanted to do this full-time” —— 赢得诗歌比赛，选 C。",
          },
          {
            q: "What is Laura's new book about?",
            opts: ["various types of buildings", "personal relationships", "climate change"],
            answer: 1,
            explanation:
              "“In this one, though, I focus on connections with the people I'm close to”；全球变暖只是最初构想 —— 人际关系，选 B。",
          },
          {
            q: "What does Laura say about reading poetry written a long time ago?",
            opts: ["She admires how well it's written.", "She finds it difficult to understand.", "She prefers to read modern poems."],
            answer: 0,
            explanation:
              "古英语用词不同，但 “you soon notice how carefully the poems have been put together. I think they took more skill to write” —— 欣赏其精妙写法，选 A。",
          },
          {
            q: "How does Laura feel about her new job teaching at a university?",
            opts: ["pleased with her ability to do it well", "grateful to have helpful colleagues", "surprised by the amount of work"],
            answer: 1,
            explanation:
              "“Thankfully the other teachers have a lot more experience than me and are happy to share their ideas”；备课量大早有心理准备 —— 感激同事帮忙，选 B。",
          },
          {
            q: "In the future, Laura would like to",
            opts: ["organise a poetry festival.", "take a break from writing poetry.", "add music to some of her poetry."],
            answer: 2,
            explanation:
              "诗歌节只是邀请她去朗诵，“I'm hoping to turn some of my previous work into songs – after all, hip-hop and rap are just poetry with a tune” —— 给诗歌加音乐，选 C。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-standard-2-listening-t1",
      title: "PET 标准版官方真题 2 · Test 1 听力",
      level: "PET",
      collection: "PET 标准版官方真题 2",
      book: "B1 Preliminary 2 (2021)",
      paper: "Listening",
      pages: "Test 1 · 书页 20–25",
      source: "B1 PET新题型官方真题 2.pdf",
      answerSource: "书内 Test 1 answer key（书页 104）",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-standard2/test-1/part-1.mp3",
        items: [
          {
            q: "What has the woman forgotten?",
            image: "/images/pet/listening/standard2/t1-l-q1.png",
            answer: 2,
            explanation:
              "她说背包里有 guidebook，但忘记带的是相机 —— 相机在背包里，选 C。",
          },
          {
            q: "Which T-shirt does the boy want?",
            image: "/images/pet/listening/standard2/t1-l-q2.png",
            answer: 2,
            explanation:
              "他要黑白条纹、白色部分有星星的那件 —— 选 C。",
          },
          {
            q: "How did the woman book her theatre tickets?",
            image: "/images/pet/listening/standard2/t1-l-q3.png",
            answer: 0,
            explanation:
              "剧院外排长队，但她说 “I booked mine online” —— 网上订票，选 A。",
          },
          {
            q: "Why was the train delayed?",
            image: "/images/pet/listening/standard2/t1-l-q4.png",
            answer: 1,
            explanation:
              "“a tree had fallen on the line” —— 树倒在轨道上，选 B。",
          },
          {
            q: "Where are the tourists most likely to see tigers?",
            image: "/images/pet/listening/standard2/t1-l-q5.png",
            answer: 1,
            explanation:
              "导游说老虎喜欢水，所以河边最有可能看到 —— 选 B。",
          },
          {
            q: "Which film will they see?",
            image: "/images/pet/listening/standard2/t1-l-q6.png",
            answer: 1,
            explanation:
              "讨论后决定看科幻片 —— 选 B。",
          },
          {
            q: "How does the man get to work?",
            image: "/images/pet/listening/standard2/t1-l-q7.png",
            answer: 2,
            explanation:
              "他走路去上班，打伞因为下雨 —— 选 C。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-1/part-2.mp3",
        items: [
          {
            q: "You will hear two people talking about keeping healthy. They agree that they should",
            opts: ["do more exercise.", "change their eating habits.", "get more sleep."],
            answer: 1,
            explanation:
              "两人讨论后同意应该改变饮食习惯 —— 选 B。",
          },
          {
            q: "You will hear two friends talking about the woman's new job. How does she feel about it?",
            opts: ["It is more difficult than she expected.", "She enjoys it more than her previous job.", "It pays less than her old job."],
            answer: 2,
            explanation:
              "她说新工作比旧工作工资低 —— 选 C。",
          },
          {
            q: "You will hear a man talking about his holiday. What impressed him most?",
            opts: ["the friendly people", "the beautiful scenery", "the size of the ancient monuments"],
            answer: 2,
            explanation:
              "他对古迹的规模印象深刻 —— 选 C。",
          },
          {
            q: "You will hear two friends talking about a foreign language course. They agree that",
            opts: ["the teacher is excellent.", "the location is convenient.", "the price is reasonable."],
            answer: 0,
            explanation:
              "两人同意老师很棒 —— 选 A。",
          },
          {
            q: "You will hear two people organising a music festival. What are they both worried about?",
            opts: ["the cost", "the weather", "the number of visitors"],
            answer: 1,
            explanation:
              "两人都担心天气 —— 选 B。",
          },
          {
            q: "You will hear two friends talking about an article on air pollution. What does the woman say about it?",
            opts: ["She found the information surprising.", "She already knew most of it.", "She disagreed with the writer's views."],
            answer: 0,
            explanation:
              "女士对新信息感到惊讶 —— 选 A。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段关于团体自行车骑行的介绍，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard2/test-1/part-3.mp3",
        items: [
          {
            q: "Day of the week: (14) ______",
            answer: ["sunday"],
            show: "Sunday",
            explanation: "团体骑行在 Sunday 举行。",
          },
          {
            q: "Distance: (15) ______ km",
            answer: ["21", "twenty-one", "twenty one"],
            show: "21",
            explanation: "全程 21 公里。",
          },
          {
            q: "Starting point: (16) ______ Bridge",
            answer: ["skerten"],
            show: "Skerten",
            explanation: "起点是 Skerten Bridge。",
          },
          {
            q: "First stop: a (17) ______",
            answer: ["castle"],
            show: "castle",
            explanation: "第一站是一座城堡。",
          },
          {
            q: "Bring: some (18) ______",
            answer: ["cake", "cakes"],
            show: "cake(s)",
            explanation: "建议带一些蛋糕。",
          },
          {
            q: "Wear: (19) ______",
            answer: ["gloves"],
            show: "gloves",
            explanation: "要戴手套。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 单项选择题",
        instruction: "听一段对野生动物摄影师 James Thomson 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-1/part-4.mp3",
        items: [
          {
            q: "How did James first become interested in photography?",
            opts: ["He watched his mother taking photos.", "He was given a camera as a present.", "He saw some wildlife photos in a magazine."],
            answer: 0,
            explanation:
              "他看母亲拍照而对摄影产生兴趣 —— 选 A。",
          },
          {
            q: "Where did James take his first successful wildlife photos?",
            opts: ["in a park near his home", "in a zoo", "in a forest"],
            answer: 0,
            explanation:
              "他在家附近的公园拍了第一张成功的野生动物照片 —— 选 A。",
          },
          {
            q: "Why was James surprised when he won a photography competition?",
            opts: ["He had never won anything before.", "He didn't think his photo was good enough.", "He had entered the competition by mistake."],
            answer: 1,
            explanation:
              "他惊讶因为之前从没获过奖 —— 选 B。",
          },
          {
            q: "What does James say makes a good wildlife photograph?",
            opts: ["It shows the animal's natural behaviour.", "It is technically perfect.", "It teaches people something new."],
            answer: 2,
            explanation:
              "好照片要教给人新东西 —— 选 C。",
          },
          {
            q: "Why does James think photography is a good hobby?",
            opts: ["It is not expensive.", "It is easy to learn.", "It gets you out into interesting places."],
            answer: 2,
            explanation:
              "摄影是好爱好因为可以去有趣的地方 —— 选 C。",
          },
          {
            q: "What advice does James give to beginners?",
            opts: ["Spend as much time as possible taking photos.", "Buy the best camera you can afford.", "Read books about photography technique."],
            answer: 0,
            explanation:
              "他建议初学者尽可能多花时间拍照 —— 选 A。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-standard-2-listening-t2",
      title: "PET 标准版官方真题 2 · Test 2 听力",
      level: "PET",
      collection: "PET 标准版官方真题 2",
      book: "B1 Preliminary 2 (2021)",
      paper: "Listening",
      pages: "Test 2 · 书页 38–43",
      source: "B1 PET新题型官方真题 2.pdf",
      answerSource: "书内 Test 2 answer key（书页 124）",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-standard2/test-2/part-1.mp3",
        items: [
          {
            q: "What does the man decide to buy?",
            image: "/images/pet/listening/standard2/t2-l-q1.png",
            answer: 1,
            explanation:
              "皮带太贵、帽子颜色奇怪；“I think it'd look good with most of my shirts. I'll go for that” —— 选领带 B。",
          },
          {
            q: "What kind of job has the woman applied for?",
            image: "/images/pet/listening/standard2/t2-l-q2.png",
            answer: 0,
            explanation:
              "博物馆招助理处理古老历史文献，“I saw the ad on their website, so I thought I'd try for it” —— 翻阅古老文献的工作，选 A。",
          },
          {
            q: "How will the man travel to work today?",
            image: "/images/pet/listening/standard2/t2-l-q3.png",
            answer: 1,
            explanation:
              "车坏了、出租车要等一小时；邻居送他去车站，“The trains are every half hour – it'll be quicker” —— 坐火车，选 B。",
          },
          {
            q: "Where does the man think he lost his wallet?",
            image: "/images/pet/listening/standard2/t2-l-q4.png",
            answer: 0,
            explanation:
              "在杂货店钱包还在，之后去了书店，脱夹克时掉出口袋 —— 在书店丢的，选 A。",
          },
          {
            q: "What will the man make for dinner tonight?",
            image: "/images/pet/listening/standard2/t2-l-q5.png",
            answer: 0,
            explanation:
              "不想再吃披萨，“I thought you wouldn't say 'no' to a lovely steak” —— 做牛排，选 A。",
          },
          {
            q: "Who was the woman's favourite character in the film?",
            image: "/images/pet/listening/standard2/t2-l-q6.png",
            answer: 1,
            explanation:
              "最喜欢的是女警察，头发卷曲但不长 —— 对应短卷发女性，选 B。",
          },
          {
            q: "What does the girl want her father to deliver?",
            image: "/images/pet/listening/standard2/t2-l-q7.png",
            answer: 2,
            explanation:
              "她把钥匙落家里了，想让父亲经过图书馆时送来 —— 送钥匙，选 C。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-2/part-2.mp3",
        items: [
          {
            q: "You will hear two friends talking about some work the man has to do. The woman tells the man not to worry about",
            opts: ["how quickly he does the work.", "the order in which he does the work.", "having to ask for support from others."],
            answer: 1,
            explanation:
              "“It doesn't matter if you do the first thing or the last thing on the list” —— 不必担心做事的顺序，选 B。",
          },
          {
            q: "You will hear two students talking about a history website. They agree that",
            opts: ["it looks good.", "it's easy to use.", "it's useful for studying."],
            answer: 2,
            explanation:
              "男生发现上面有很多和课程相关的文章 —— 对学习有帮助，选 C。",
          },
          {
            q: "You will hear two friends talking about the woman's holiday. How did she feel about it?",
            opts: ["satisfied with the food that she tried", "impressed with the hotel she stayed in", "pleased with the prices she paid for things"],
            answer: 2,
            explanation:
              "“I didn't need to spend all the money… It cost so much less” —— 对物价满意，选 C。",
          },
          {
            q: "You will hear two friends talking about a shopping centre. They agree that it needs to have",
            opts: ["extra space for parking.", "more places to eat.", "a wider range of shops."],
            answer: 0,
            explanation:
              "停车场只有一个，“They really need to do something about that” —— 需要更多停车位，选 A。",
          },
          {
            q: "You will hear two friends talking about playing golf. What does the woman say about it?",
            opts: ["She hopes she'll be able to play it more often.", "She thinks the rules are too complicated.", "She believes she has a talent for it."],
            answer: 2,
            explanation:
              "“if you saw me out there… you'd be impressed by my ability” —— 觉得自己有天赋，选 C。",
          },
          {
            q: "You will hear two friends talking about a novel. What does the man say about it?",
            opts: ["The characters aren't very interesting.", "The chapters are too long.", "The story isn't very realistic."],
            answer: 0,
            explanation:
              "“it was kind of hard to get excited about the people in the story” —— 人物不够有趣，选 A。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段关于日本太鼓一日课程的介绍，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard2/test-2/part-3.mp3",
        items: [
          {
            q: "Students will need to have a lot of (14) ______ for the class.",
            answer: ["energy"],
            show: "energy",
            explanation: "“All that's required is plenty of energy”，鼓本身不需要任何基础。",
          },
          {
            q: "Students will start the class by seeing a (15) ______ before listening to a talk.",
            answer: ["short performance", "performance"],
            show: "(short) performance",
            explanation: "“The first thing you'll do is watch a short performance”，然后听日本太鼓专家讲座。",
          },
          {
            q: "In the morning, students will learn to (16) ______ correctly.",
            answer: ["stand"],
            show: "stand",
            explanation: "“It's important to get the way you stand right”，姿势正确有助于动作。",
          },
          {
            q: "The afternoon session will focus on what are known as (17) ______.",
            answer: ["stick skills"],
            show: "stick skills",
            explanation: "“After lunch, we'll do what we call 'stick skills'”，学习用鼓槌发出各种声音。",
          },
          {
            q: "Drumming improves people's (18) ______ and fitness.",
            answer: ["mood"],
            show: "mood",
            explanation: "“It also puts you in a better mood”，同时锻炼身体。",
          },
          {
            q: "The instructor's email address is (19) ______@taiko.uk.",
            answer: ["paxmen"],
            show: "paxmen",
            explanation: "讲师是 Steve Paxmen，邮箱拼读 P-A-X-M-E-N@taiko.uk。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 单项选择题",
        instruction: "听一段对烘焙店店主  Lara Andrews 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-2/part-4.mp3",
        items: [
          {
            q: "Why did  Lara decide to open her baking business?",
            opts: ["Her parents encouraged her to do it.", "Her teacher thought she'd be successful.", "Her school friends bought cakes from her."],
            answer: 0,
            explanation:
              "“when I told Mum and Dad, they said I should make a business out of it” —— 父母鼓励她，选 A。",
          },
          {
            q: "What challenge did  Lara have to deal with when she started her business?",
            opts: ["managing her time", "dealing with complaints", "finding the right recipes"],
            answer: 2,
            explanation:
              "“I didn't always know where to look to learn about what ingredients to use, how much of each” —— 找到合适的配方，选 C。",
          },
          {
            q: "Lara says that baking bread is",
            opts: ["more popular than making cakes.", "more difficult than making cakes.", "more fun than making cakes."],
            answer: 1,
            explanation:
              "“Bread's complicated… It requires more skill” —— 比做蛋糕难，选 B。",
          },
          {
            q: "What does  Lara feel that she needs to do to improve her business?",
            opts: ["spend more money on advertising", "sell more traditional products", "develop more confidence in herself"],
            answer: 2,
            explanation:
              "“I just have to trust myself more that my ideas'll work” —— 增强自信，选 C。",
          },
          {
            q: "What does  Lara intend to do in the future?",
            opts: ["have her own café", "teach young people", "write a book"],
            answer: 1,
            explanation:
              "“start a video blog for children and teenagers so they can bake with me” —— 教年轻人烘焙，选 B。",
          },
          {
            q: "Lara advises people who want to start a baking business to",
            opts: ["learn from famous bakers.", "get a qualification before they start.", "be realistic about what they can achieve."],
            answer: 2,
            explanation:
              "“you'd be very lucky if you actually got rich” —— 要现实，选 C。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-standard-2-listening-t3",
      title: "PET 标准版官方真题 2 · Test 3 听力",
      level: "PET",
      collection: "PET 标准版官方真题 2",
      book: "B1 Preliminary 2 (2021)",
      paper: "Listening",
      pages: "Test 3 · 书页 56–61",
      source: "B1 PET新题型官方真题 2.pdf",
      answerSource: "书内 Test 3 answer key（书页 145）",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-standard2/test-3/part-1.mp3",
        items: [
          {
            q: "What did the man do yesterday?",
            image: "/images/pet/listening/standard2/t3-l-q1.png",
            answer: 2,
            explanation:
              "他想退夹克但排到柜台时店已关门（A 是值机柜台）；最终在书店买了一本新小说 —— 选 C。",
          },
          {
            q: "How did the woman get back from her holiday?",
            image: "/images/pet/listening/standard2/t3-l-q2.png",
            answer: 0,
            explanation:
              "航班延误了很长时间，但一旦起飞飞行很快；他们没能改坐火车 —— 乘飞机回来，选 A。",
          },
          {
            q: "Which hat is the model wearing?",
            image: "/images/pet/listening/standard2/t3-l-q3.png",
            answer: 0,
            explanation:
              "展示的是一顶带绒球的针织帽，而不是棒球帽或宽檐帽 —— 选 A。",
          },
          {
            q: "Where did the man leave his driving licence?",
            image: "/images/pet/listening/standard2/t3-l-q4.png",
            answer: 2,
            explanation:
              "他在机场和酒店大堂都找过，最后想起忘在酒店房间里 —— 选 C。",
          },
          {
            q: "Where did they go for a walk?",
            image: "/images/pet/listening/standard2/t3-l-q5.png",
            answer: 0,
            explanation:
              "他们沿着有岩石的海岸散步，没去沙滩或林间小路 —— 选 A。",
          },
          {
            q: "What is the woman going to do to her friend's car?",
            image: "/images/pet/listening/standard2/t3-l-q6.png",
            answer: 2,
            explanation:
              "车不用清洗，油也是满的；她注意到一个轮胎有问题，打算检查/充气 —— 选 C。",
          },
          {
            q: "What is the woman having in the restaurant?",
            image: "/images/pet/listening/standard2/t3-l-q7.png",
            answer: 1,
            explanation:
              "她不想吃鱼，三明治也卖完了，于是点了配土豆的鸡肉 —— 选 B。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-3/part-2.mp3",
        items: [
          {
            q: "You will hear a woman talking in a shop about a dress. Why is she returning the dress?",
            opts: ["It’s the wrong colour.", "It’s damaged.", "It’s the wrong size."],
            answer: 0,
            explanation:
              "裙子收到时颜色和订购的不一样 —— 颜色发错了，选 A。",
          },
          {
            q: "You will hear two friends talking about a new sports centre. What do they agree the sports centre needs?",
            opts: ["more staff", "more equipment", "more changing rooms"],
            answer: 0,
            explanation:
              "中心很忙，员工不够，有时要等很久才有人帮忙 —— 需要更多员工，选 A。",
          },
          {
            q: "You will hear a woman talking about going to a hotel. Why is she going there?",
            opts: ["to stay for the night", "to meet someone", "to have a meal"],
            answer: 1,
            explanation:
              "她去酒店与一位来访的亲戚见面，不住宿也不吃饭 —— 去见某人，选 B。",
          },
          {
            q: "You will hear a man talking about a holiday he spent in the mountains. What did he enjoy most about the holiday?",
            opts: ["doing an adventure sport", "looking at the countryside", "visiting traditional villages"],
            answer: 1,
            explanation:
              "最让他喜欢的是眺望四周美丽的乡村景色 —— 选 B。",
          },
          {
            q: "You will hear two friends talking about playing the guitar. What's the man going to do?",
            opts: ["practise playing with other people", "start playing a different instrument", "try to play every day"],
            answer: 0,
            explanation:
              "他打算加入学校的乐队，和别人一起练习 —— 选 A。",
          },
          {
            q: "You will hear two friends talking about a film they've just seen. What does the man say about the film?",
            opts: ["It wasn't very funny.", "It won an important prize.", "It was easy to predict the ending."],
            answer: 2,
            explanation:
              "他觉得电影很有趣，但看了一半就知道结局会怎样 —— 结局容易猜到，选 C。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段关于歌曲创作比赛的通知，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard2/test-3/part-3.mp3",
        items: [
          {
            q: "Songs in this year's competition must be about the (14) ______.",
            answer: ["moon"],
            show: "moon",
            explanation: "“This year the topic is the moon”，参赛歌曲必须围绕这一主题。",
          },
          {
            q: "Songs must be no longer than (15) ______.",
            answer: ["210 seconds", "210 secs"],
            show: "210 seconds",
            explanation: "歌曲时长不得超过 210 秒。",
          },
          {
            q: "The judge this year is a famous (16) ______.",
            answer: ["poet"],
            show: "poet",
            explanation: "今年的评委是一位著名诗人。",
          },
          {
            q: "The prize for the winner is a trip to a (17) ______.",
            answer: ["music studio", "studio"],
            show: "(music) studio",
            explanation: "胜者将获得一次前往音乐工作室的旅行。",
          },
          {
            q: "The closing date for entries is (18) ______.",
            answer: ["13 October", "13th October", "13 Oct", "13th Oct"],
            show: "13(th) October",
            explanation: "作品提交截止日期为 10 月 13 日。",
          },
          {
            q: "The email address to send songs to is (19) ______@songwriters.net.",
            answer: ["delhar"],
            show: "delhar",
            explanation: "邮箱拼读 D-E-L-H-A-R@songwriters.net。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 单项选择题",
        instruction: "听一段对职业探险家 Alexis Bartoli 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-3/part-4.mp3",
        items: [
          {
            q: "Alexis decided to become an explorer after",
            opts: ["reading a book.", "listening to a talk.", "seeing a TV programme."],
            answer: 1,
            explanation:
              "学校里一位探险家的讲座改变了他的想法 —— 听讲座之后决定的，选 B。",
          },
          {
            q: "Alexis felt anxious before his first expedition because",
            opts: ["he didn't know what to expect.", "he knew it would be quite dangerous.", "he'd never been very far away from home."],
            answer: 0,
            explanation:
              "他焦虑是因为完全不知道会遇到什么 —— 选 A。",
          },
          {
            q: "Why did Alexis start making films on his expeditions?",
            opts: ["to make money for future trips", "to provide scientists with information", "to learn a new skill"],
            answer: 1,
            explanation:
              "他拍影像记录是为了把信息提供给科学家做研究 —— 选 B。",
          },
          {
            q: "Alexis says his favourite part of any expedition is",
            opts: ["discovering new landscapes.", "experiencing different climates.", "meeting new people."],
            answer: 2,
            explanation:
              "对他来说最棒的是遇见当地人、结交新朋友 —— 选 C。",
          },
          {
            q: "Alexis's latest expedition involved",
            opts: ["walking across a desert.", "sailing across an ocean.", "spending time in a rainforest."],
            answer: 1,
            explanation:
              "他最近的一次探险是驾船横渡大洋 —— 选 B。",
          },
          {
            q: "What does Alexis say he wants to do in the future?",
            opts: ["try a different profession", "explore his home country", "return to places he's visited before"],
            answer: 1,
            explanation:
              "他想花时间探索自己的祖国，而不是去远方 —— 选 B。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-standard-2-listening-t4",
      title: "PET 标准版官方真题 2 · Test 4 听力",
      level: "PET",
      collection: "PET 标准版官方真题 2",
      book: "B1 Preliminary 2 (2021)",
      paper: "Listening",
      pages: "Test 4 · 书页 74–79",
      source: "B1 PET新题型官方真题 2.pdf",
      answerSource: "书内 Test 4 answer key（书页 168）",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-standard2/test-4/part-1.mp3",
        items: [
          {
            q: "What has the man lost?",
            image: "/images/pet/listening/standard2/t4-l-q1.png",
            answer: 2,
            explanation:
              "耳机和手套都在（ gloves 在抽屉里），最后说 “It's my glasses! I can't find them anywhere” —— 丢的是眼镜，选 C。",
          },
          {
            q: "What is the woman going to do tomorrow?",
            image: "/images/pet/listening/standard2/t4-l-q2.png",
            answer: 1,
            explanation:
              "她说开车去是因为今天要搬家，但 “I might have some time on the beach tomorrow” —— 明天去海滩，选 B。",
          },
          {
            q: "Which items cost less than usual at the moment?",
            image: "/images/pet/listening/standard2/t4-l-q3.png",
            answer: 2,
            explanation:
              "手提包是上周促销、手机促销已结束；“If you're a fitness fan … everything's reduced in our sports department” —— 运动用品（网球拍）减价，选 C。",
          },
          {
            q: "Which place will the people visit first on the tour?",
            image: "/images/pet/listening/standard2/t4-l-q4.png",
            answer: 0,
            explanation:
              "“we'll spend an hour or so at the castle, which we'll start walking towards in a minute or two” —— 先去城堡，选 A。",
          },
          {
            q: "Which tickets did the man buy?",
            image: "/images/pet/listening/standard2/t4-l-q5.png",
            answer: 1,
            explanation:
              "€20 的票卖完了，他觉得 “30 euros each isn't too bad”，买了两张 €30 的票 —— 选 B。",
          },
          {
            q: "What does the man want to buy?",
            image: "/images/pet/listening/standard2/t4-l-q6.png",
            answer: 2,
            explanation:
              "钢琴和吉他都只是随口提到；“It's your drums I'm interested in though. Particularly that set there” —— 想买架子鼓，选 C。",
          },
          {
            q: "Which type of exercise does the doctor recommend?",
            image: "/images/pet/listening/standard2/t4-l-q7.png",
            answer: 0,
            explanation:
              "“You need exercise that makes you move your shoulder, but in a gentle way, such as swimming” —— 推荐游泳，选 A。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-4/part-2.mp3",
        items: [
          {
            q: "You will hear two friends talking about a hotel.\nThey agree that",
            opts: ["the staff are very friendly.", "the rooms have good views.", "the food there is excellent."],
            answer: 0,
            explanation:
              "两人都夸员工：“The people who work there are very cheerful”“made me feel welcome … helpful” —— 员工很友好，选 A。",
          },
          {
            q: "You will hear two friends talking about an art exhibition.\nWhy was the woman disappointed with it?",
            opts: ["There weren't many paintings.", "It was very expensive.", "The gallery was too dark."],
            answer: 2,
            explanation:
              "票价她觉得便宜；画作数量刚刚好；“it's a shame there weren't a few more windows … quite hard to see some of the paintings” —— 展厅太暗，选 C。",
          },
          {
            q: "You will hear two friends talking about a book they've read.\nThey both think it would be better if it had",
            opts: ["a more original ending.", "more interesting characters.", "more action in the story."],
            answer: 2,
            explanation:
              "结局是惊喜、人物塑造不错；但 “not much happened in them”“I wasn't so keen on reading whole chapters about their thoughts” —— 都希望情节再多些，选 C。",
          },
          {
            q: "You will hear a woman telling a friend about a visit to the hairdresser's.\nWhat does she say about it?",
            opts: ["The haircut wasn't good value.", "The place wasn't very tidy.", "The hairdresser wasn't very friendly."],
            answer: 0,
            explanation:
              "店里很整洁、发型师也和气；但 “So it was hardly worth what I had to pay” —— 剪得不值这个价，选 A。",
          },
          {
            q: "You will hear a woman telling a friend about her singing class.\nWhat is she surprised about?",
            opts: ["the size of the group", "how confident she feels about singing", "the attention she gets from the teacher"],
            answer: 1,
            explanation:
              "“I never thought I'd be able to perform in public! … I don't worry at all anymore” —— 惊讶于自己如今唱歌时的自信，选 B。",
          },
          {
            q: "You will hear two friends talking about a new sports centre.\nWhat do they agree would improve it?",
            opts: ["reducing the entry price", "offering classes at different times", "changing the temperature in the pool"],
            answer: 2,
            explanation:
              "价格便宜、班级时间也多；“they should do something about how cold it is in the pool” —— 该改善泳池水温，选 C。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 填空题",
        instruction: "听一段导游对观看老爷车比赛的人的说明（Classic car race），每空填一个单词、数字或时间。",
        audio: "/audio/pet-standard2/test-4/part-3.mp3",
        items: [
          {
            q: "see the cars, next to the (14) ______",
            answer: ["lake"],
            show: "lake",
            explanation: "赛车停放在湖边 —— “Come down to the lake – they're parked beside it”。",
          },
          {
            q: "enter a competition to win a (15) ______",
            answer: ["holiday"],
            show: "holiday",
            explanation: "比赛结束后抽奖，奖品是一次度假 —— 选 holiday。",
          },
          {
            q: "buy (16) ______ at a lower price than usual at the café",
            answer: ["burgers", "a burger", "burger"],
            show: "burgers",
            explanation: "咖啡厅今日汉堡特价 —— “special discount on burgers today”。",
          },
          {
            q: "starts at (17) ______ p.m.",
            answer: ["2.30", "two thirty", "half past two"],
            show: "2.30",
            explanation: "比赛两点半开始 —— “that's at half past two”。",
          },
          {
            q: "use the (18) ______ exit to get to the station",
            answer: ["north"],
            show: "north",
            explanation: "去火车站要走北出口 —— “need the north exit”。",
          },
          {
            q: "upload your photos to (19) www. ______ .org",
            answer: ["cheppsat"],
            show: "cheppsat",
            explanation: "网址 www.cheppsat.org，字母逐个拼读 C-H-E-double P-S-A-T。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 单项选择题",
        instruction: "听一段对年轻作家 Jenny Taylor 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-4/part-4.mp3",
        items: [
          {
            q: "What does Jenny say about school?",
            opts: ["She read a lot of poems there.", "She was proud of what she wrote there.", "She admired someone there."],
            answer: 2,
            explanation:
              "她并不满意自己当时写的东西，但 “I really wanted to write like her” —— 仰慕她的老师，选 C。",
          },
          {
            q: "How did Jenny get the idea for her first novel?",
            opts: ["talking to friends and family", "watching strangers", "looking on the internet"],
            answer: 1,
            explanation:
              "“I'd just sit back and think about the other people around me” —— 观察陌生人获得灵感，选 B。",
          },
          {
            q: "What's Jenny's novel about?",
            opts: ["a famous historical event", "a long journey", "a family's problems"],
            answer: 2,
            explanation:
            "“it's about a girl and her parents … different challenges they have to deal with” —— 一个家庭面临的种种问题，选 C。",
          },
          {
            q: "How does Jenny feel about her novel?",
            opts: ["satisfied that it has a good story", "pleased that people are buying it", "surprised that it was published"],
            answer: 0,
            explanation:
              "“I'm sure people will want to keep turning the pages to find out how it ends” —— 对故事本身感到满意，选 A。",
          },
          {
            q: "What does Jenny say about her writing routine?",
            opts: ["She does her best writing in the morning.", "She wears pyjamas when she writes.", "She likes to write a similar amount every day."],
            answer: 1,
            explanation:
              "“writing for a couple of hours without changing out of my pyjamas” —— 写作时穿着睡衣，选 B。",
          },
          {
            q: "What does Jenny usually read for pleasure?",
            opts: ["funny stories", "exciting stories", "true stories"],
            answer: 0,
            explanation:
              "“But what I choose when I relax is things that are amusing” —— 放松时读有趣的故事，选 A。",
          },
        ],
      },
    },
  },
];
