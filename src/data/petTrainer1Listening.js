// PET Trainer 1（B1 Preliminary for Schools Trainer 1, 2020 新版）听力数据
// 题目来源：PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf（扫描版 OCR + 页面原图逐题核对）
// 答案来源：书内 Teacher's Notes & Keys（Test 1 书页 189–193）+ 书内 Audioscripts（书页 166–168）交叉核对
// 音频来源：Preliminary for Schools Trainer 1 Audio/Test 1 - TRACK 03/06/09/12.wav → public/audio/pet-trainer1/test-1/part-1..4.mp3

export const PET_TRAINER1_LISTENING = [
  {
    meta: {
      id: "pet-trainer1-test1-listening",
      title: "PET Trainer 1 · Test 1 听力",
      level: "PET",
      collection: "PET Trainer 1（精讲精练）",
      book: "B1 Preliminary for Schools Trainer 1 (2020)",
      paper: "Listening",
      pages: "Test 1 Exam Practice · 书页 36–43",
      source: "PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf",
      answerSource:
        "书内 Teacher's Notes & Keys（书页 189–193）+ 书内 Audioscripts（书页 166–168）交叉核对",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-1/part-1.mp3",
        items: [
          {
            q: "What is the girl going to bring for the picnic?",
            image: "/images/pet/listening/trainer1/q1.png",
            answer: 0,
            explanation:
              "软饮料 Elly 已经带了、Harry 带水果，所以她说 “I'll go with my other idea, we've got plenty of bread and cheese” —— 带三明治，选 A。",
          },
          {
            q: "Which activity did the boy enjoy most during his holiday?",
            image: "/images/pet/listening/trainer1/q2.png",
            answer: 2,
            explanation:
              "他说帆板 “it's still my favourite”，山地骑行只是 “nearly as exciting”，骑马没来得及玩，选 C。",
          },
          {
            q: "What homework does the girl have to do tonight?",
            image: "/images/pet/listening/trainer1/q3.png",
            answer: 2,
            explanation:
              "历史 essay 明天要交，“I'd better finish that this evening”；美术周五才交、数学下周末前交，选 C。",
          },
          {
            q: "Where did the students go on their school trip?",
            image: "/images/pet/listening/trainer1/q4.png",
            answer: 1,
            explanation:
              "这次 “they were alive”“creatures from all over the world” 指活体动物；去年看的恐龙骨头、原计划的农场都没去成，选 B（动物园）。",
          },
          {
            q: "Which present has the boy already bought?",
            image: "/images/pet/listening/trainer1/q5.png",
            answer: 2,
            explanation:
              "他说 “I saw some boxes of the ones he really likes on special offer… so I just got one” —— 已经买了爸爸爱吃的巧克力礼盒，选 C；并建议妹妹改买烹饪书。",
          },
          {
            q: "Where did the boy go with his family at the weekend?",
            image: "/images/pet/listening/trainer1/q6.png",
            answer: 0,
            explanation:
              "他想去看体育场的大球赛，下雨时 “the roof closes when it rains” 正好说明去了有顶的体育场，选 A；妹妹想去的游乐场和父母的河边野餐都没去。",
          },
          {
            q: "How will the girl get to her friend's house?",
            image: "/images/pet/listening/trainer1/q7.png",
            answer: 1,
            explanation:
              "自行车爆胎又修不了、车太大上不了公交，最后 “my dad… said he can give me a ride” —— 坐爸爸的车去，选 B。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-1/part-2.mp3",
        items: [
          {
            q: "You will hear two friends talking about a film they've just seen. Why didn't the boy enjoy the film?",
            opts: ["It was very frightening.", "It lasted too long.", "It had terrible acting."],
            answer: 2,
            explanation:
              "他并不觉得恐怖（only one bit I found scary），而是说两位大牌主演 “I don't know how they got to be so famous… all very disappointing” —— 演技糟糕，选 C。",
          },
          {
            q: "You will hear two friends talking about some biology homework. The girl suggests that the boy should",
            opts: ["ask his teacher for help.", "get information from the internet.", "look in the biology textbook."],
            answer: 0,
            explanation:
              "她说连要做什么都不知道，上网也没用；最好去找布置作业的 Mr Benson，还建议带上课本让他讲解，选 A。",
          },
          {
            q: "You will hear two friends talking about an interview with a singer they've seen on TV. They agree that",
            opts: ["the singer's answers were interesting.", "the interviewer was quite rude.", "the questions were confusing."],
            answer: 0,
            explanation:
              "两人都否认主持粗鲁或问题难，而是歌手放松后 “spoke about lots of things I didn't know anything about… in so much detail” —— 回答内容有意思，选 A。",
          },
          {
            q: "You will hear a girl telling her friend about a diving trip. How did the girl feel about it?",
            opts: ["sure she will go again", "glad she went with a relative", "pleased with her diving skills"],
            answer: 1,
            explanation:
              "她在海里发挥失常（become totally unable to do those things…），但庆幸有表哥 Martin 同行 “it gave me a bit more confidence”，选 B。",
          },
          {
            q: "You will hear a girl talking to a friend about basketball. The girl is trying to",
            opts: ["explain the rules of the game.", "describe a game she took part in.", "encourage the boy to start playing."],
            answer: 2,
            explanation:
              "她说男生个子高会打得很好，规则最好的学法是 “to play, that way you'd learn them as you are having fun” —— 鼓励他开始打球，选 C。",
          },
          {
            q: "You will hear a boy talking about a trip to a city with his family. Why did the boy's family get lost?",
            opts: ["They couldn't understand their map.", "Someone gave them the wrong directions.", "The guidebook contained incorrect information."],
            answer: 1,
            explanation:
              "导游书虽旧但地铁图还准；他们按街上路人指的去大本钟 “ended up somewhere completely different” —— 被人指错了路，选 B。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段学生对电子游戏 Sky Jam 的介绍，在笔记空格中填入 1–2 个词、数字或时间。",
        audio: "/audio/pet-trainer1/test-1/part-3.mp3",
        items: [
          {
            q: "Action takes place in（游戏故事发生的地点）： a（14）______",
            answer: ["rainforest", "rain forest"],
            show: "rainforest",
            explanation: "“instead of streets and huge buildings, you'll find yourself living in a rainforest in this game”。",
          },
          {
            q: "Players answer questions about（答题内容）：（15）______",
            answer: ["insects"],
            show: "insects",
            explanation: "“you'll be asked all sorts of things regarding insects”，路上可从蝴蝶、蝙蝠等生物处学到。"
          },
          {
            q: "Name of most difficult level of game（最难关卡名）： the（16）______",
            answer: ["monkey", "the monkey"],
            show: "(the) monkey",
            explanation: "“I found the one called the monkey almost impossible”（最后的 the Frog 反而不难）。",
          },
          {
            q: "Best thing about the game（游戏最佳之处）： the（17）______",
            answer: ["characters", "the characters"],
            show: "(the) characters",
            explanation: "“the story… is fantastic, second only to the characters you can play” —— 最佳的是可扮演角色。",
          },
          {
            q: "Maximum number of players（最多玩家数）：（18）______",
            answer: ["6", "six"],
            show: "six",
            explanation: "“six people at the most can join in this game at any one time”（前作 Road Jam 是 8 人）。",
          },
          {
            q: "Website for more details（详情网址）： www（19）______ .com",
            answer: ["lombardio"],
            show: "lombardio",
            explanation: "“visit the company's website www.lombardio.com – I'll spell that: L-O-M-B-A-R-D-I-O”。",
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: "听一段对 15 岁冰球运动员 Andrea 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-1/part-4.mp3",
        items: [
          {
            q: "Which sport does Andrea say she started playing first?",
            opts: ["football", "ice hockey", "basketball"],
            answer: 2,
            explanation:
              "“I have played basketball since I was five or six”；足球是约 5 年前才迷上、冰球 3 年前才开始，最早的是篮球，选 C。",
          },
          {
            q: "Andrea says that she first started playing ice hockey after",
            opts: ["watching a family member play.", "seeing a game on television.", "talking about it with her friends."],
            answer: 1,
            explanation:
              "看哥哥打球没让她动心，决定性的一刻是 “there was a professional match on a sports programme I was watching”，选 B。",
          },
          {
            q: "Why does Andrea think that playing against boys is important?",
            opts: ["It improves her own playing skills.", "It proves there are many girls playing the sport.", "It increases respect for female players."],
            answer: 0,
            explanation:
              "“I want to do better against boys… which really helps to develop my talents” —— 有助于提升自己的水平，选 A。",
          },
          {
            q: "How did Andrea feel when she was chosen for the national under-16s team?",
            opts: ["surprised to be asked", "sorry to leave her club", "confident in her abilities"],
            answer: 2,
            explanation:
              "“I'd been playing well for my club and felt I could do just as well at a higher level… I kind of knew it was coming” —— 对自己有信心、并不意外，选 C。",
          },
          {
            q: "Andrea's favourite games are those which are",
            opts: ["easy to win.", "shown on TV.", "exciting to watch."],
            answer: 2,
            explanation:
              "国家队比赛不总是她的最爱；她认为 “if a game's close because both teams are good, then it's fantastic for the crowd… and better to play in”，选 C。",
          },
          {
            q: "Andrea says that people who want to start playing ice hockey should",
            opts: ["find a club.", "buy good equipment.", "learn the rules."],
            answer: 0,
            explanation:
              "音频原文：“borrow some skates and a stick if you need to – you can buy your own later – and join a team so you can start playing straightaway”，即先加入球队开始打（= find a club），选 A。注：书内答案页误印为 B（buy good equipment），但其括号解析文字即 “you should join a team”，且音频明确说先借用、以后再买，排除 B；C 在原文中被否定，故按 A 录入。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-trainer1-test2-listening",
      title: "PET Trainer 1 · Test 2 听力",
      level: "PET",
      collection: "PET Trainer 1（精讲精练）",
      book: "B1 Preliminary for Schools Trainer 1 (2020)",
      paper: "Listening",
      pages: "Test 2 Exam Practice · 书页 78–85",
      source: "PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf",
      answerSource:
        "书内 Teacher's Notes & Keys（书页 206–209）+ 书内 Audioscript 交叉核对",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-2/part-1.mp3",
        items: [
          {
            q: "Where did the boy find his mobile phone?",
            image: "/images/pet/listening/trainer1/t2-q1.png",
            answer: 1,
            explanation:
              "他找了一晚上，连爸爸的车（C）和学校书桌抽屉（A）都想过，最后发现 “I never thought of checking the pocket of my jacket” —— 手机在外套口袋里，选 B。",
          },
          {
            q: "Which programme does the girl want to watch?",
            image: "/images/pet/listening/trainer1/t2-q2.png",
            answer: 0,
            explanation:
              "篮球赛 “my team's not playing today”，她要赶着看的其实是 “Life Beneath the Waves” 海洋纪录片（有鲸鱼特别报道，A 图）；问答节目是爸爸平时爱看的，选 A。",
          },
          {
            q: "Which animals did the girl enjoy seeing the most?",
            image: "/images/pet/listening/trainer1/t2-q3.png",
            answer: 1,
            explanation:
              "她平时最爱企鹅（C 图），但昨天天热企鹅全泡在水里游泳没走动；这次 “it was the monkeys playing in their tree that were the biggest attraction for me”，大象只是 close second，选 B。",
          },
          {
            q: "What will the boy look like in his school play?",
            image: "/images/pet/listening/trainer1/t2-q4.png",
            answer: 2,
            explanation:
              "他要扮主角父亲：“I have to wear a suit and glasses”，导演还要求戴 long fair curly hair 假发，胡子戴不住；眼镜+长卷发是 C，选 C。",
          },
          {
            q: "What's the weather going to be like tomorrow?",
            image: "/images/pet/listening/trainer1/t2-q5.png",
            answer: 2,
            explanation:
              "今天下午起有雨和大风，但 “overnight any remaining rain will clear away leaving clear skies everywhere”，晴天会一直持续到后天 —— 明天晴朗，选 C。",
          },
          {
            q: "Where does the girl want to meet her friend?",
            image: "/images/pet/listening/trainer1/t2-q6.png",
            answer: 0,
            explanation:
              "她不想再在钟楼（C 图）等：“how about seeing each other at the cafe? At least I can have a snack while I'm waiting”；服装店橱窗（B 图）也被否了，选 A。",
          },
          {
            q: "How much did the book cost?",
            image: "/images/pet/listening/trainer1/t2-q7.png",
            answer: 1,
            explanation:
              "“it was on special offer – so it was reduced by two pounds from seventeen pounds ninety-nine” —— £17.99 减 £2 = £15.99，选 B；网上的 £13.99 是没等到货的低价干扰。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-2/part-2.mp3",
        items: [
          {
            q: "You will hear two friends talking about a music performance. The friends agree that",
            opts: ["the concert hall was too big.", "the performance was too short.", "the musicians needed more practice."],
            answer: 0,
            explanation:
              "两人共同的遗憾是场地：“that kind of music sounds so much better in a smaller place… the two guitars are too quiet for somewhere that size”，选 A；一个嫌短另一个觉得正好（B），一人说听到错音（C），都不是共识。",
          },
          {
            q: "You will hear two friends talking about a play they have seen recently. What surprised the girl about the play?",
            opts: ["how young the audience was", "how unusual the ending was", "how good the acting was"],
            answer: 2,
            explanation:
              "她说 “I found it difficult to believe how realistic they managed to make all of the characters” —— 演技逼真得吃惊，选 C；观众年轻是下午场常态（A），她读过剧本早知道结局（B）。",
          },
          {
            q: "You will hear a boy telling a friend about an art course he went on. What did the boy enjoy most about it?",
            opts: ["the strong focus on drawing and painting", "the teacher's sense of humour", "the variety of practice activities"],
            answer: 2,
            explanation:
              "只挑一样的话是 “how the teacher got us to practice techniques in a number of different ways” —— 练习方式多样，选 C；他说本以为大部分时间在画画，其实并没有（A）；老师的笑话只是 great fun。",
          },
          {
            q: "You will hear two friends talking about getting to school. The girl thinks that walking to school with her friends",
            opts: ["is a good way to be sociable.", "takes longer than walking alone.", "causes problems for other pedestrians."],
            answer: 1,
            explanation:
              "结伴走 “means arriving half an hour later than I would if I was by myself” —— 更花时间，选 B；会一起看手机是朋友们的乐趣（A）；她还说大家足够礼貌会给人让路（C）。",
          },
          {
            q: "You will hear a boy talking to a friend about his new house. How does the boy feel about it?",
            opts: ["pleased with its location", "amazed at how big it is", "satisfied with how it's decorated"],
            answer: 0,
            explanation:
              "“where it is is important too and the new one's much closer to my parents' work and to school” —— 对位置满意，选 A；颜色不是他会选的（C）；只有他的卧室大，房子其余部分并不大（B）。",
          },
          {
            q: "You will hear a girl talking about a day out with her family. Why did the girl's family choose to go to the river?",
            opts: ["There are many things to do.", "It's close to where they live.", "It's a good place for a picnic."],
            answer: 2,
            explanation:
              "“we've never found a better place to sit and eat” —— 找不到更好的野餐地，选 C；附近那条河才近、且 “it's not like there's lots to do there”，他们去的是一小时车程外的另一条河（A、B 都错）。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段关于学校摄影比赛的通知，在笔记空格中填入 1–2 个词、数字或时间。",
        audio: "/audio/pet-trainer1/test-2/part-3.mp3",
        items: [
          {
            q: "The subject of this year's competition is（今年比赛主题）：（14）______",
            answer: ["environment", "the environment"],
            show: "(the) environment",
            explanation: "去年的主题是 travel，“photos should have something to do with the environment this time”。",
          },
          {
            q: "Photos must show some（照片必须包含）：（15）______",
            answer: ["wildlife"],
            show: "wildlife",
            explanation: "“we want all the pictures to have wildlife in them”，纯风景或人物照都不行。"
          },
          {
            q: "A local（16）______ will judge the competition（评委）.",
            answer: ["writer"],
            show: "writer",
            explanation: "本想请当地艺术家 Sally Graves 但她不在，“writer James McKay has agreed to help us instead”。"
          },
          {
            q: "First prize is a photography（17）______（一等奖奖品）.",
            answer: ["course"],
            show: "course",
            explanation: "多数人已有摄影书和器材，所以改为一等奖是 “a photography course run by Central College”（办摄影展的打算落空了）。"
          },
          {
            q: "Send your entries in by（18）______ at the latest（最迟提交时间）.",
            answer: ["15th february", "15 february", "february 15th", "february 15", "15/2"],
            show: "15th February",
            explanation: "“make sure we receive your photos by the 15th of February”；3 月 11 日公布结果、2 月 19 日评审都是干扰。"
          },
          {
            q: "School secretary's email address is（19）k.______@school.com",
            answer: ["mitchell", "k mitchell", "k. mitchell"],
            show: "mitchell",
            explanation: "作品寄给秘书 Mrs Mitchell：“it's K dot Mitchell”，音频逐字母拼读 M-I-T-C-H-E-L-L —— k.mitchell@school.com。"
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: "听一段对 15 岁男孩 Callum（运营书评网站）的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-2/part-4.mp3",
        items: [
          {
            q: "How did Callum learn about setting up a website?",
            opts: ["through lessons at school", "by using information online", "a family member taught him"],
            answer: 2,
            explanation:
              "学校只做过控制机器人的编程课，网上资料 “I found them quite confusing”，是妈妈 “showed me how to use similar skills to create my own pages online” —— 家人教的，选 C。",
          },
          {
            q: "Why did Callum decide to set up a book review website?",
            opts: ["to develop teenagers' writing skills", "to encourage teenagers to read more", "to create an online discussion among teenagers"],
            answer: 1,
            explanation:
              "游戏网站会鼓励青少年玩更多游戏，“so I thought it must be possible to do the same with reading” —— 想鼓励多阅读，选 B。",
          },
          {
            q: "How did Callum feel when his site first went online?",
            opts: ["pleased with its quality", "certain it would be popular", "positive it would achieve its aims"],
            answer: 0,
            explanation:
              "“I couldn't believe how well it worked” —— 对网站做出这么好的效果感到满意，选 A；他明确说 “you can never be sure that people will like it”（B、C 都错）。",
          },
          {
            q: "What does Callum say about a typical day?",
            opts: ["It's usually full of variety.", "It's always extremely busy.", "It's impossible to predict what will happen."],
            answer: 0,
            explanation:
              "“everything I do throughout each day is so different” —— 每天做的事都很不一样，选 A；“it's rarely that busy”（B 错）；每晚做计划且 “usually stick to”（C 错）。",
          },
          {
            q: "When Callum is eighteen he'd like to",
            opts: ["work for a big company.", "study for a degree.", "run a business."],
            answer: 2,
            explanation:
              "“I learn better by doing than by studying, so I'd prefer to have my own web design company than go to college” —— 想开自己的公司，选 C；大公司（A）是别人的抱负，读大学（B）被他排除。",
          },
          {
            q: "What is Callum's new website for?",
            opts: ["using music to help people", "presenting new music", "learning how to play music"],
            answer: 0,
            explanation:
              "他发现网上很少有 “how music supports people through difficult times”，新网站就是做这个的 —— 用音乐帮助困境中的人，选 A；上传自己的歌（B）和学吉他（C）的网站已经太多。书内答案页印作 “25 A (because Callum says his new music site supports people through difficult times and benefits others)”。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-trainer1-test3-listening",
      title: "PET Trainer 1 · Test 3 听力",
      level: "PET",
      collection: "PET Trainer 1（精讲精练）",
      book: "B1 Preliminary for Schools Trainer 1 (2020)",
      paper: "Listening",
      pages: "Test 3 Exam Practice · 书页 106–110",
      source: "PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf",
      answerSource:
        "书内 Practice Test Keys for Tests 3–6 + 书内 Audioscript 交叉核对",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-3/part-1.mp3",
        items: [
          {
            q: "Which was the girl's favourite film?",
            image: "/images/pet/listening/trainer1/t3-q1.png",
            answer: 2,
            explanation:
              "三部电影：恐怖片 The Dark（A 图）“about as scary as a kid's cartoon”，浪漫片 Heart（B 图）“I'd seen it all before”，只有冒险片 Run（C 图）“I started watching it again as soon as it had finished, even though I knew what was going to happen” —— 看完立刻重看，选 C。",
          },
          {
            q: "What did the boy see at the transport museum?",
            image: "/images/pet/listening/trainer1/t3-q2.png",
            answer: 1,
            explanation:
              "他专程去看的飞机特展（C 图）因灯光问题关闭；火车展区（A 图）这次没走到 —— “we didn't get to that part of the museum this time”；但 “I'd never noticed how old some of the cars were before”，老爷车（B 图）让他印象最深，选 B。",
          },
          {
            q: "Where does the girl hope her family will go on holiday?",
            image: "/images/pet/listening/trainer1/t3-q3.png",
            answer: 2,
            explanation:
              "“my brothers suggested going to the ocean rather than the mountains this year, and I'd prefer to do that too” —— 兄弟提议的海边（C 图）正是她想去的地方；常去的山间湖畔（B 图）已去过好几次，父母说的大城市（A 图）“I'm not sure it'd be very relaxing”，选 C。",
          },
          {
            q: "What did the girl lose at the show?",
            image: "/images/pet/listening/trainer1/t3-q4.png",
            answer: 0,
            explanation:
              "她怕帽子（C 图）被挤掉就把它塞进背包（B 图）拿好了，但 “it still didn't stop my hairbrush falling out – I had a look for it afterwards but couldn't find it anywhere” —— 丢的是发刷（A 图），选 A。",
          },
          {
            q: "Which appointment did the boy have today?",
            image: "/images/pet/listening/trainer1/t3-q5.png",
            answer: 1,
            explanation:
              "妈妈猜错了他才澄清：“the eyesight test is next week, actually, Mum – I was having my teeth checked today” —— 今天看的是牙医（B 图）；视力检查在下周（A 图），在医生那里（C 图）的是爸爸，“he should be back from the doctors any minute”，选 B。",
          },
          {
            q: "Which book can the girl collect today?",
            image: "/images/pet/listening/trainer1/t3-q6.png",
            answer: 0,
            explanation:
              "书店留言：Make Your Own Fashion（C 图）“is taking longer than we expected”，Saving Tigers（B 图）“is quite an old book, so it's harder to find”，两本都要周四才到；只有 The History of Sandom Castle（A 图）“it's up to you whether you want to get it now”，今天能取，选 A。",
          },
          {
            q: "Which sport is the boy going to try?",
            image: "/images/pet/listening/trainer1/t3-q7.png",
            answer: 2,
            explanation:
              "“I've always fancied trying golf, but there isn't really anywhere near here where you can play, so that's why I've decided on ice hockey instead” —— 冰球（C 图）；橄榄球（B 图）是朋友邀请他去 Rugby Club 练习，但他嫌危险没答应；高尔夫（A 图）因没场地放弃，选 C。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-3/part-2.mp3",
        items: [
          {
            q: "You will hear two friends talking about a play. Why did the girl leave the theatre early?",
            opts: ["She felt unwell.", "She hated the play.", "She had an appointment."],
            answer: 0,
            explanation:
              "她中途退场是因为牙痛：“you know what it's like when you get toothache – you can't concentrate on anything”，老师帮忙联系牙医当天也没约上，只能第二天早上去（= 身体不舒服，选 A）；她说 “I didn't think the play was that terrible”（B 错）；牙医预约是退场后老师帮着安排的，不是离场原因（C 错）。",
          },
          {
            q: "You will hear two friends talking about the food at a school party. They agree that",
            opts: ["there was lots of variety.", "everything there was tasty.", "the food they took was popular."],
            answer: 1,
            explanation:
              "没有提前分工反而 “lots of people brought the same thing”（A 与两人说法相反）；“I didn't see anyone eating what I brought, apart from us of course”（C 错）；但两人都表示不介意选择少，只要好吃就行 —— “as long as you like what's there, which I did” / “Me too”，都认同东西好吃，选 B。",
          },
          {
            q: "You will hear two friends talking about a soccer match they both watched on TV. Why was the boy disappointed?",
            opts: ["The team he supports lost.", "His favourite player was injured.", "The quality of the match was bad."],
            answer: 2,
            explanation:
              "“although I can't say I was unhappy at the result, it wasn't the most interesting game I've ever seen – they've played better” —— 失望的是比赛乏味（选 C）；结果没问题（A 错）；他最喜欢的球员 “he did well”，既没受伤还发挥最好（B 错）。",
          },
          {
            q: "You will hear two friends talking about a new science building at their school. They agree that",
            opts: ["it looks great from the outside.", "the equipment is very good.", "it is very well decorated."],
            answer: 0,
            explanation:
              "“I'm really impressed with the design of the outside – I can't think of a building I like the look of more”（选 A）；实验器材还是从旧楼搬来的旧东西，“it's a shame”（B 错）；配色和挂画两人品味不同 —— “I don't think we share the same taste in colours and paintings”（C 错）。",
          },
          {
            q: "You will hear a girl talking about a blog she has started writing. How does she feel about it?",
            opts: ["delighted that other people like it", "surprised it was so easy to set up", "satisfied with its appearance"],
            answer: 0,
            explanation:
              "“I've had nice comments from some readers – that really makes it seem like it was worth doing”（选 A）；建站平台说容易，但她折腾了不少问题，“maybe it is for someone who's a bit more familiar with IT than I am”（B 错）；她还觉得照片不够多，“to get it looking as good as some of the other blogs I've seen”（C 错）。",
          },
          {
            q: "You will hear a girl telling her friend about learning Chinese. The boy suggests that the girl should",
            opts: ["use websites to help her.", "find a conversation class.", "buy a good textbook."],
            answer: 1,
            explanation:
              "男生建议：“there must be groups that meet just to practise talking to each other – why not search for one of those?” —— 找个能开口说的会话小组（选 B）；网上资源 “loads of stuff online for improving reading and writing, but less for speaking”（A 错）；教材 “you obviously can't talk to a book”（C 错）。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段学生向全班介绍自己参加的表演俱乐部的录音，在笔记空格中填入 1–2 个词、数字或日期或时间。",
        audio: "/audio/pet-trainer1/test-3/part-3.mp3",
        items: [
          {
            q: "Appeared on TV as a（在电视上扮演）：（14）______",
            answer: ["farmer"],
            show: "farmer",
            explanation: "老师 Alice Fisher 现在正在城里大剧院的戏里演女警，但 “you'll probably know her better as the farmer in the series Green Valley”。",
          },
          {
            q: "Has mostly appeared in（大部分出演）：（15）______ shows",
            answer: ["comedy"],
            show: "comedy",
            explanation: "专业舞台剧约 10 年，严肃戏剧 3 年，“she's also spent seven years working in comedy productions” —— 喜剧年头最长。",
          },
          {
            q: "First part – using your（第一部分：用好）：（16）______ well",
            answer: ["voice"],
            show: "voice",
            explanation: "第一部分不练形体动作，“we focus instead on improving how to control the voice”；第二部分才练 performance skills。"
          },
          {
            q: "Take place at the（上课地点）：（17）______",
            answer: ["university"],
            show: "university",
            explanation: "俱乐部向大学租教室上课，“it's much cheaper to do it there than at the college or the acting school”。"
          },
          {
            q: "Acting Club play: called（新剧名）：（18）______",
            answer: ["the passenger", "passenger"],
            show: "(The) Passenger",
            explanation: "正在排的新剧 “its name is The Passenger”；上一部戏 Reality 大获成功是干扰项。"
          },
          {
            q: "First performance – on（首演日期）：（19）______",
            answer: ["20th july", "20 july", "july 20th", "july 20", "20/7", "7/20"],
            show: "20th July",
            explanation: "“we've got our last practice for the new play on the 13th of July, with audiences able to come and see it from the 20th of July” —— 13 日是最后一次排练，首演是 7 月 20 日起。"
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: "听一段对女孩 Jasmine（参加飞行体验日、在教练带领下驾驶飞机）的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-3/part-4.mp3",
        items: [
          {
            q: "Why did Jasmine decide to try a flying experience day?",
            opts: ["Someone recommended it.", "She wants to become a pilot.", "To see her area from high up."],
            answer: 2,
            explanation:
              "朋友体验时被吓到、评价并不热心（A 错），她也不打算以飞行为职业（B 错）；打动她的是朋友说在空中看到了自己家 —— “that made me want to look for mine too, and also enjoy a different view of the local countryside”，选 C。",
          },
          {
            q: "How did Jasmine feel at the beginning of the flying experience day?",
            opts: ["nervous about making mistakes", "worried about how small the plane was", "disappointed with the arrangements"],
            answer: 1,
            explanation:
              "“when I saw the aeroplane we'd be using, I couldn't believe that something that size could actually take off with two people in it” —— 担心这么小的飞机能不能起飞（选 B）；活动组织非常高效，疑虑很快打消（C 错）；她担心的是飞机本身，不是怕自己出错（A 错）。",
          },
          {
            q: "What did Jasmine think about the training she did before the flight?",
            opts: ["It was badly presented.", "It was done too quickly.", "Some of it wasn't useful."],
            answer: 0,
            explanation:
              "“I don't think the people running the sessions were actually trained teachers, so they didn't really communicate the information very clearly” —— 讲解不到位（选 A）；“what we were told was all essential”（C 错）；内容该讲的都讲了，她嫌的是讲得不好，不是太快（B 错）。",
          },
          {
            q: "Jasmine says that during the flight her instructor",
            opts: ["said very little.", "stayed very calm.", "joked with her a lot."],
            answer: 2,
            explanation:
              "教练 Jana 起飞前像她想象中那样少言冷静，但 “quite different in the air – she never stopped chatting and making me laugh by saying funny things”，还说这是为了帮学员放松（选 C）；“said very little” 只是起飞前的样子（A 错）；音频没说她在空中保持沉默冷静（B 错）。",
          },
          {
            q: "Jasmine says that the flight",
            opts: ["made her feel tired.", "seemed to last a long time.", "was better than she had hoped."],
            answer: 1,
            explanation:
              "“when we landed it felt like we'd been up there for hours, although it was only about 30 minutes in reality” —— 感觉飞了很久（选 B）；网上评论说体验后累瘫，“I was just the opposite”（A 错）；飞行很精彩但 “I was kind of expecting that”，并未超出预期（C 错）。",
          },
          {
            q: "Which experience day would Jasmine like to try most?",
            opts: ["horse riding", "deep-sea fishing", "sports car driving"],
            answer: 2,
            explanation:
              "看了公司宣传册后她说 “first on my list though would have to be driving a sports car, and after that would come deep-sea fishing” —— 最想先试的是跑车驾驶（选 C）；深海钓鱼排第二（B 错）；骑马她 “wouldn't mind doing”，但不是首选（A 错）。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-trainer1-test4-listening",
      title: "PET Trainer 1 · Test 4 听力",
      level: "PET",
      collection: "PET Trainer 1（精讲精练）",
      book: "B1 Preliminary for Schools Trainer 1 (2020)",
      paper: "Listening",
      pages: "Test 4 Exam Practice · 书页 124–128",
      source: "PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf",
      answerSource:
        "书内 Practice Test Keys for Tests 3–6 + 书内 Audioscript 交叉核对",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-4/part-1.mp3",
        items: [
          {
            q: "Which coat did the girl buy?",
            image: "/images/pet/listening/trainer1/t4-q1.png",
            answer: 1,
            explanation:
              "两件外套对比：之前试穿的那件是长款腰带大衣（A 图）“the long one with a nice belt”，但 “I wasn't sure about the buttons on that one, they were very big and looked a bit strange”；买下的新外套 “it's not a long coat like the other, and the buttons are much smaller, it has a fur collar too” —— 短款、小扣子、毛领、有腰带（B 图），选 B；C 图没有腰带，与 “the new one's got a belt” 不符。",
          },
          {
            q: "Which musical instrument would the boy prefer to learn?",
            image: "/images/pet/listening/trainer1/t4-q2.png",
            answer: 2,
            explanation:
              "男孩一度想学鼓（B 图）“I'm thinking of starting drum lessons”，朋友还邀他同去，但他担心 “my parents wouldn't be pleased if I practiced at home though”，最后说 “I think the guitar would make a better option, so I'm going for that” —— 选吉他（C 图）；钢琴（A 图）是朋友在学的乐器，他自己觉得 “it'll be too difficult”，选 C。",
          },
          {
            q: "What does the girl miss about her old apartment?",
            image: "/images/pet/listening/trainer1/t4-q3.png",
            answer: 1,
            explanation:
              "她说 “It was so nice to be able to sit outside with a drink and look down at what was going on in the street below” —— 怀念能坐着俯瞰街景的室外露台（B 图）；卧室（C 图）她毫无抱怨 “no complaints about my new bedroom”，旧的才 tiny；壁炉（A 图）是旧公寓没有的 “There was no big fire in the living room at the old place”，新家反而更暖，选 B。",
          },
          {
            q: "Which sport does the boy not do any more?",
            image: "/images/pet/listening/trainer1/t4-q4.png",
            answer: 0,
            explanation:
              "朋友以为他周六照例打了篮球，他答 “I've given that up actually” —— 篮球（A 图）已经不打了；乒乓球 “I joined the Table Tennis Club a few weeks ago which I love”（C 图，还在打）；曲棍球 “I'm a member of the school hockey team too... although I missed the last game due to illness”（B 图，只是因病缺阵一场），选 A。",
          },
          {
            q: "Who has won the school poetry competition?",
            image: "/images/pet/listening/trainer1/t4-q5.png",
            answer: 0,
            explanation:
              "获奖者是 Richard Ellis。朋友猜他 “short dark hair who always wears a shirt and tie”，女生纠正：头发 “it comes right down to his shoulders... and it's quite light actually” —— 齐肩的浅色头发，而 “衬衫领带” 属实（“I've never seen him wear anything else”）。A 图正是衬衫领带+齐肩发；C 图短发男生是朋友猜错的样子；B 图穿卫衣牛仔裤，是朋友说的 “a sweatshirt and jeans like us” 的普通人打扮，选 A。",
          },
          {
            q: "Which programme is on TV next?",
            image: "/images/pet/listening/trainer1/t4-q6.png",
            answer: 1,
            explanation:
              "播报给出顺序：Larry Lane 的脱口秀 “in a minute or two” 马上开始（B 图）；长颈鹿纪录片 “coming up just after” 脱口秀之后（A 图）；古典音乐会 “immediately after the news”（C 图）。紧接其后要播的是脱口秀，选 B。",
          },
          {
            q: "What present is the girl going to buy for her mum's birthday?",
            image: "/images/pet/listening/trainer1/t4-q7.png",
            answer: 2,
            explanation:
              "项链（B 图）她本想买，但 “Dad said he'd already bought one for her”；花（A 图）留给对方 “one of us could get that and the other could get her some flowers”；书（C 图）“There's that book she wants... my dance class is near the bookshop, so it'd be easy for me to call in there” —— 由她来买，选 C。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-4/part-2.mp3",
        items: [
          {
            q: "You will hear two friends talking about travelling into the town centre. Why does the girl prefer taking the bus to the town centre?",
            opts: ["There's a bus stop near her home.", "She meets someone she knows on it.", "The service is very frequent."],
            answer: 1,
            explanation:
              "她周六在市中心商店打工，同行朋友住得更远、只能坐公交，“It's a bit more sociable if we go together” —— 能和朋友同乘（选 B）；车站离她家要走 15 分钟 “it takes 15 minutes to walk here from home”（A 错）；周六一小时才一班 “only once an hour on Saturdays”（C 错）。",
          },
          {
            q: "You will hear two friends talking about a music video they've seen. The friends agree that",
            opts: ["the song is excellent.", "the dancing is original.", "the video is well made."],
            answer: 2,
            explanation:
              "歌本身没有共识：女生 “I couldn't stop listening to it”，男生 “maybe I'll start to like it once I've heard it a few more times”（A 错）；舞步看着惊艳但 “I thought it was the costumes that created that effect, the routines themselves were quite like other videos I've seen”（B 错）；视频制作两人都赞 —— “I don't think I've ever seen such an incredible video” / “they hired a Hollywood director to make it, you can tell because of the quality”（选 C）。",
          },
          {
            q: "You will hear two friends talking about buying a mobile phone. The boy thinks the girl should",
            opts: ["get the newest model.", "go to the phone shop.", "look at lots of reviews."],
            answer: 2,
            explanation:
              "“Reading what phone buyers have written about their phones is probably more reliable than listening to a sales assistant” —— 看买家评价（选 C）；他提醒店员不可信：“some phone companies give stores money for selling more of their phones, especially the newer more expensive ones”，所以买最新款（A）、听店里推销（B）都不被他认同。",
          },
          {
            q: "You will hear two friends talking about school. The girl is feeling pleased because she",
            opts: ["was given a reward for her school work.", "was chosen to play in a sports match.", "got a high mark for her homework."],
            answer: 0,
            explanation:
              "“I finished that physics project last week... the teacher was so impressed with it she gave me a book” —— 因物理项目作业受老师奖励（选 A）；进足球队是男生的玩笑 “that'd be unbelievable but fairly unlikely as I hardly ever play football”（B 错）；今天破例没有数学作业 “not today though”，高分也不是新鲜事（C 错）。",
          },
          {
            q: "You will hear a boy telling his friend about a family visit to some relatives. How did he feel about it?",
            opts: ["worried that he annoyed someone", "upset that they stayed so long", "sorry when they had to leave"],
            answer: 2,
            explanation:
              "“I had a really nice time with my cousins... I always miss them for a few days after we come home... visiting them for only a weekend's a bit cruel in a way, it feels like you've only just arrived and suddenly it's time to go” —— 舍不得离开（选 C）；惹叔叔生气的是弟弟 “my brother broke one of their vases”（A 错）；住了一周他还嫌短，不是嫌久（B 错）。",
          },
          {
            q: "You will hear two friends talking about a new swimming pool. What did the girl like best about it?",
            opts: ["The water is very warm.", "There are fun things to do.", "Lots of young people use it."],
            answer: 1,
            explanation:
              "“I had a few goes on those tubes... you can go down really fast and end up in the pool... that was amazing, I think I'd go back just to play on them” —— 最喜欢好玩的水滑梯（选 B）；“the water in this new one is nowhere near as warm”（A 错）；青少年常去的是老泳池，且 “only because they didn't have anywhere else to go”（C 错）。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段学生 Matilde 向全班介绍自己参观科学博物馆的录音，在笔记空格中填入 1–2 个词、数字或日期或时间。",
        audio: "/audio/pet-trainer1/test-4/part-3.mp3",
        items: [
          {
            q: "Favourite room contained displays about（最爱展区的展示主题）：（14）______",
            answer: ["energy"],
            show: "energy",
            explanation: "每个展区一个主题：太空房 “we spent ages looking around the room that was all about space”，但待得更久的是 “the one with loads of stuff on energy which I thought was the best bit” —— 能源展区。"
          },
          {
            q: "The（15）______ exhibition is currently closed（暂未开放的特展）",
            answer: ["health"],
            show: "health",
            explanation: "博物馆免费，另有两个收费特展：“you can't go into the one on health yet because it doesn't open for another couple of weeks”；已经看过的电脑展是干扰项 —— “the other exhibition on computers was good though”。"
          },
          {
            q: "Matilde made a（16）______ at the museum（她动手做的）",
            answer: ["rocket"],
            show: "rocket",
            explanation: "“my brother made this fantastic car that went quite fast using only power from the Sun” —— 太阳能车是弟弟做的（干扰项）；“I created a rocket that used gas to fly, it went really high” —— 她做的是火箭。"
          },
          {
            q: "The shop had a really good range of（17）______（商店里种类丰富的）",
            answer: ["chemistry sets", "chemistry set"],
            show: "chemistry sets",
            explanation: "“there were so many chemistry sets to choose from, it took me ages to decide which one I wanted”；玩具、游戏和书只是 “the usual toys and games and a few nice books”（干扰项）。"
          },
          {
            q: "The guided tour lasts for（18）______ minutes（导览时长）",
            answer: ["80", "eighty"],
            show: "80",
            explanation: "“we'd have to wait for at least 60 minutes for the 80-minute tour because it was so popular” —— 60 是等待时间（干扰项），导览本身长 80 分钟。"
          },
          {
            q: "Visitors must use the entrance on（19）______ Road（入口所在的路）",
            answer: ["lockhart"],
            show: "Lockhart",
            explanation: "“the entrance is on Lockhart Road. I'll spell that for you: L-O-C-K-H-A-R-T Road” —— 录音逐字母拼出了路名。"
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: "听一段对 17 岁男孩 Erik（和爸爸骑自行车横穿美国）的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-4/part-4.mp3",
        items: [
          {
            q: "Erik and his dad wanted to do a long cycle ride to",
            opts: ["make money for charity.", "break their usual routine.", "spend lots of time together."],
            answer: 1,
            explanation:
              "筹款确有其事但是 “the usual reason for doing something as mad as this”，相处时光也只是附带的收获 “spend large amounts of time with each other – which was wonderful”（A、C 错）；真正的动因是 “we decided to go though because we fancy doing something really different during the summer holidays” —— 来点不一样的（选 B）。",
          },
          {
            q: "Why did they choose to cycle in the USA and not in other countries?",
            opts: ["To avoid difficulties with language.", "They thought it would be safer.", "It was easier to organise."],
            answer: 2,
            explanation:
              "原本考虑中亚，但 “you need lots of different visas, all of which take ages to arrange; with the USA there was none of that, one country means one visa” —— 一个国家一份签证，手续省事（选 C）；“it's a shame that I didn't get to practice speaking any other languages” 恰恰说明语言不是考量（A 错）；城市治安担心过但 “they were fine”（B 错）。",
          },
          {
            q: "How did Erik feel as they were setting off?",
            opts: ["surprised at how relaxed they were", "excited about all the things they'd see", "nervous they wouldn't succeed"],
            answer: 0,
            explanation:
              "“I was expecting to be so keen to set off that I wouldn't be able to sit still... though my dad and I both felt pretty calm, which I found quite amazing” —— 出发时两人的平静出乎他的意料（选 A）；想象中的兴奋并没有出现（B 错）；“I don't think either of us had any worries about not finishing the ride”（C 错）。",
          },
          {
            q: "Erik's favourite days were those on which",
            opts: ["they didn't cycle as far as usual.", "the weather was warm and dry.", "they had a chance to be sociable."],
            answer: 2,
            explanation:
              "“it wasn't actually how far we rode that made a day good or bad”（A 错）；“seemed to make us even happier than feeling the sun in our faces” 说明好天气不如交流重要（B 错）；让一天变好的是 “having a long conversation with some of the local people” —— 与当地人长聊（选 C）。",
          },
          {
            q: "Erik says that during the ride, he and his dad",
            opts: ["talked about many personal issues.", "became comfortable with silence.", "disagreed about many things."],
            answer: 1,
            explanation:
              "“we spoke about a few of the things that are important to us” 只是少数重要话题，谈不上 many personal issues（A 错）；争执 “didn't happen often”，且总能化解（C 错）；“over the two months we learnt it was okay to spend a few hours saying absolutely nothing” —— 学会了安然共处沉默（选 B）。",
          },
          {
            q: "In the future, Erik plans to",
            opts: ["start taking part in races.", "go on another long ride.", "only cycle during his free time."],
            answer: 0,
            explanation:
              "“I'd much prefer to enter some competitions over shorter distances” —— 打算参加短距离比赛（选 A）；横穿澳大利亚的远行 “wouldn't be the best time for me to go”，学业优先（B 错）；“rather than just going out and weekend rides” 说明周末骑行恰是他不满足的选项（C 错）。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-trainer1-test5-listening",
      title: "PET Trainer 1 · Test 5 听力",
      level: "PET",
      collection: "PET Trainer 1（精讲精练）",
      book: "B1 Preliminary for Schools Trainer 1 (2020)",
      paper: "Listening",
      pages: "Test 5 Exam Practice · 书页 142–146",
      source: "PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf",
      answerSource:
        "书内 Practice Test Keys for Tests 3–6 + 书内 Audioscript 交叉核对",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-5/part-1.mp3",
        items: [
          {
            q: "Where is the boy's family going to eat?",
            image: "/images/pet/listening/trainer1/t5-q1.png",
            answer: 0,
            explanation:
              "过生日由男孩选晚饭地点：爸爸建议去汉堡店（B 图）“Your dad suggested the burger place in town”，他虽然 “I love it there”，但上周刚去过，坦白说 “I'm happy to stay in, have a pizza, and watch a film together” —— 想在家吃披萨看电影（A 图）；去河边野餐（C 图）被天气预报否了 “I don't think the forecast's good for this evening... There's no point going if it's going to rain”，妈妈最后说 “I'll get a couple of pizzas then”，选 A。",
          },
          {
            q: "Which lesson does the girl have next?",
            image: "/images/pet/listening/trainer1/t5-q2.png",
            answer: 2,
            explanation:
              "女生说 “Oh, I've got that next”，“that” 指男生刚提到的美术课 —— “I'm sure it'll be more exciting than the art class I had when you were doing science”（男生上美术课时她正在上科学课），所以她下一节是美术课（C 图）；科学课（A 图）是她午饭前刚上完的 “I had Mrs Ellwood for science just before lunch”；音乐课（B 图）排在美术之后 “I've got that and then music with Mr Williams”，选 C。",
          },
          {
            q: "Where has the boy just been on holiday?",
            image: "/images/pet/listening/trainer1/t5-q3.png",
            answer: 1,
            explanation:
              "度假地在安静的乡村河边：“The river was pretty cold, it's true, but there were very few people there compared to where we usually go”（B 图）；海边（A 图）没去成，父母还在念叨 “how much they missed swimming in the sea”，而海边 “there are so many people on the beach”；露营（C 图）只是爸爸一度提议 “At least we didn't go camping, which is what dad was suggesting at one point”，选 B。",
          },
          {
            q: "Which work experience would the girl like to try?",
            image: "/images/pet/listening/trainer1/t5-q4.png",
            answer: 1,
            explanation:
              "老师建议手巧的她去餐厅工作（C 图）“as I'm good with my hands, I should try working in a restaurant”，但 “my mom said that kind of work can be quite stressful”；男生邀她去理发店（A 图）“You could come and work at a hairdresser's with me”，她说 “I think I'd enjoy that, but probably not as much as learning how to fix cars, so that's what I put on my application in the end” —— 最终申请表填的是修车（B 图），选 B。",
          },
          {
            q: "What did the boy leave at his friend's house?",
            image: "/images/pet/listening/trainer1/t5-q5.png",
            answer: 2,
            explanation:
              "到家才发现落下东西：“I think the tablet I brought with me may be just underneath it” —— 落在朋友家的是他带来的平板电脑（C 图），就压在书下面；那本写作业用的书（B 图）本来就摊在对方书桌上，是两人共用的；夹克（A 图）是他临走前 “I started showing you my new jacket” 忙着展示的那件新夹克，已穿在身上，选 C。",
          },
          {
            q: "Which painting did the girl like best?",
            image: "/images/pet/listening/trainer1/t5-q6.png",
            answer: 2,
            explanation:
              "男生受不了看不懂的画 “I can't stand paintings that don't actually look like what they're supposed to show. Like that tiger.”，女生恰恰相反：“I thought that one was really original, actually” —— 觉得老虎画（C 图）有创意；风景画（B 图）被她嫌老套 “people have painted that sort of thing for hundreds of years”；公主肖像（A 图）写实她也承认 “was so realistic”，但她最后亮明偏好 “I prefer paintings that don't just show what you can see”，选 C。",
          },
          {
            q: "Where will the students' tour of the town end?",
            image: "/images/pet/listening/trainer1/t5-q7.png",
            answer: 1,
            explanation:
              "老师交代走散后的集合安排：“ask someone how to get to the café and wait for us there, as that's where we'll end up” —— 游览终点就是咖啡馆（B 图）；城堡（A 图）是下午另一段行程 “before we go into the castle this afternoon”；运河里 “brightly-coloured boats that people actually live in” 只是沿途景色（C 图），选 B。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-5/part-2.mp3",
        items: [
          {
            q: "You will hear a boy telling his friend about a snowboarding trip. What problem did the boy have on the trip?",
            opts: ["He damaged some equipment.", "He injured himself.", "He became ill."],
            answer: 2,
            explanation:
              "“My stomach found it hard getting used to the local food, so I had to spend a few days in bed” —— 肠胃不适应当地饮食、卧床几天，是生病（选 C）；雪板是姐姐借去后从缆车上掉下去的 “It didn't break, but we never got it back”，既没损坏也不是他弄的（A 错）；“a broken leg” 是女生瞎猜、被他否认的那种情况，“In my case, it was a lot more boring”，他自己没受伤（B 错）。",
          },
          {
            q: "You will hear two friends talking about the new library at their school. The girl thinks that",
            opts: ["the staff are helpful.", "there should be more books.", "it's a good place to do homework."],
            answer: 2,
            explanation:
              "“It's pretty quiet there, too. I can't concentrate at home because of my little sister, so I always stay now to get everything done for the next day's lessons” —— 她天天留在图书馆把作业写完，认为是好地方（选 C）；“having someone there to ask” 是自助服务改革前的情况，她原话是 “Everything being self-service takes a bit of getting used to”（A 错）；书从来不是问题，以前只是 “I always forgot to get them before I went home”，现在留馆更没这问题（B 错）。",
          },
          {
            q: "You will hear two friends talking about a new clothes shop. They agree the shop would be better if",
            opts: ["the assistants were more friendly.", "there was more choice of clothes.", "it was in the town centre."],
            answer: 1,
            explanation:
              "男生 “I found the range of styles they had was quite narrow”，女生接 “I think the other shop definitely has a bigger variety of things for teenagers” —— 两人一致认为款式太少（选 B）；店员总体友好 “The people who work at the new shop couldn't be nicer”，只有一位 “a bit miserable”（A 错）；被嫌远的是他们常去的旧店 “so far out of town... you have to get two different buses”，新店没这个问题（C 错）。",
          },
          {
            q: "You will hear two friends talking about a new classmate. The boy thinks the new classmate",
            opts: ["is very clever.", "likes playing sport.", "talks too much."],
            answer: 0,
            explanation:
              "“he answered at least twice as many questions as I did during the maths class... but he also knew a lot about what we were discussing in our groups in the history class” —— 数学历史样样出色，男生认为新同学很聪明（选 A）；他拉新同学去足球训练 “I didn't manage to persuade him”，邀都邀不动（B 错）；课间确实话多，但 “not that we really wanted him to”，大家并不嫌他（C 错）。",
          },
          {
            q: "You will hear a girl talking about her big brother going away to college. How does she feel about it?",
            opts: ["pleased there's less noise", "surprised that she's so sad", "upset he's gone so far away"],
            answer: 1,
            explanation:
              "原以为哥哥走后会清静 “I thought I'd be relieved not to have to listen to music coming from his bedroom all evening”，结果 “I couldn't believe it when tears actually started running down my cheeks last night, and this morning, too” —— 为自己流泪而震惊，没料到这么难过（选 B）；清静只是原先的设想，并没有让她开心（A 错）；“he hasn't gone hundreds of kilometres away... He'll probably be back most weekends”，距离并不远（C 错）。",
          },
          {
            q: "You will hear two friends talking about playing tennis. The boy wants the girl to",
            opts: ["practise with him regularly.", "recommend a tennis coach.", "teach him some new techniques."],
            answer: 2,
            explanation:
              "“I'm sure I'd improve more quickly if someone showed me a few other skills. That's why I need your help. When I watch you play, I can see you doing loads of things I'd like to be able to do, but I forget how you do them” —— 想让女生把她会的技术教给他（选 C）；他自己有教练 “Are you still having tennis coaching? — Yes”，不缺教练（B 错）；他和家人平时也练 “I practise between the sessions with my family”，缺的是有人指点新动作，不是固定陪练（A 错）。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段老师向学生介绍学校农场之旅安排的录音，在笔记空格中填入 1–2 个词、数字或日期或时间。",
        audio: "/audio/pet-trainer1/test-5/part-3.mp3",
        items: [
          {
            q: "Meeting place: 8 a.m. next to the（14）______（集合地点）",
            answer: ["school gate", "gate"],
            show: "(school) gate",
            explanation: "“you need to wait for the bus by the school gate, so don't go to the bus stop or come straight into the playground like you usually do” —— 集合点在校门口，老师还特意排除了平时的公交站和操场这两个干扰地点。"
          },
          {
            q: "Need to bring: a（15）______（需要带的东西）",
            answer: ["drink"],
            show: "drink",
            explanation: "“The farm is providing us all with a nice packed lunch, so there's no need to bring one yourself. It'd be great if you could make sure you've got a drink, though, as it can get quite hot on the bus” —— 午餐农场包了，要自备的是饮料。"
          },
          {
            q: "Morning activity: feeding the（16）______（要喂的动物）",
            answer: ["lambs", "lamb"],
            show: "lambs",
            explanation: "到达后先 “brushing the horses”（给马刷毛，干扰项）；随后 “you'll learn what farmers give lambs to eat, and you'll be able to give them their breakfast, too” —— 要喂食的是羊羔。"
          },
          {
            q: "Afternoon activity:（17）______（下午的活动）",
            answer: ["climbing wall", "climbing"],
            show: "climbing (wall)",
            explanation: "“We're going to do some climbing on the special wall they have there after lunch” —— 午餐后攀岩；钓鱼和棒球是 “maybe next time we can try”，下次才玩（干扰项）。"
          },
          {
            q: "Return to school at:（18）______（返校时间）",
            answer: ["4.15", "4:15", "four fifteen"],
            show: "4.15",
            explanation: "“We'll be setting off back to school at about 3.30 p.m., and will be back here at 4.15” —— 3.30 是从农场出发的时间（干扰项），到校是 4.15，比平时放学晚 45 分钟。"
          },
          {
            q: "For more information:（19）www.______.farm.com（查询网址）",
            answer: ["caffertys"],
            show: "caffertys",
            explanation: "“it's www dot caffertys dot farm dot com. I'll spell that for you: C-A-double F-E-R-T-Y-S dot farm dot com” —— 老师逐字母拼出 CAFFERTYS，注意双写 F。"
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: "听一段对年轻理发师 Carlotta 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-5/part-4.mp3",
        items: [
          {
            q: "Carlotta first become interested in cutting people's hair when she saw",
            opts: ["a hairdressing magazine.", "a cartoon character doing it.", "a friend having it done."],
            answer: 1,
            explanation:
              "小时候看朋友理发只觉得 “how complicated it seemed”（C 错）；转折在 “One day, I was watching this animated film. This man was cutting someone's hair, but did it really quickly and made it look so easy... after that, I took a real interest in it” —— 动画片里的理发师让她上了心（选 B）；杂志是那之后才留意的附带兴趣 “and in the magazines I'd sometimes find around our house”（A 错）。",
          },
          {
            q: "The first hair that Carlotta cut belonged to",
            opts: ["her father.", "her sister.", "her mother."],
            answer: 0,
            explanation:
              "姐姐的长发她很想剪但 “my parents wouldn't let me”（B 错）；“My dad wanted his hair cut really short, so he let me have a go on his before he went to his usual hairdresser's” —— 第一位“客人”是爸爸（选 A）；妈妈 “said it didn't look too bad, but still didn't trust me to cut hers”，根本没让她剪（C 错）。",
          },
          {
            q: "At college, Carlotta's teachers said she should",
            opts: ["talk to customers more.", "spend more time planning.", "improve her cutting technique."],
            answer: 0,
            explanation:
              "“They reminded me that I needed to keep chatting - not just when people first sit down - to make it a social experience as well as a haircut” —— 老师要她多和顾客聊（选 A）；剪法 “was very natural, which they didn't want to change”，不用改（C 错）；“I didn't take ages thinking about what I wanted to do, I just did it” 是老师认可的风格，并非嫌她不规划（B 错）。",
          },
          {
            q: "How did Carlotta feel during the Young Hairdresser competition?",
            opts: ["sure she would lose", "angry with the model", "confused by the rules"],
            answer: 1,
            explanation:
              "台上给她当模特的人 “kept moving, which was annoying” —— 对模特不停乱动很恼火（选 B）；“I knew my ideas gave me a chance of doing well”，她并不觉得自己会输（A 错）；虽然 “I arrived very late”，但还是来得及读完 “what I could and couldn't do”，没到被规则弄糊涂的地步（C 错）。",
          },
          {
            q: "What does Carlotta say is the biggest benefit of working for a well-known company?",
            opts: ["meeting famous people", "making plenty of money", "gaining a variety of experience"],
            answer: 2,
            explanation:
              "“I get to try so many different things though, because our customers all want such original styles” —— 顾客都想要各式原创发型，她能接触五花八门的技术（选 C）；名人一位都没来过 “none seem to come into the one I work in”（A 错）；“I'll never become rich working there”，钱不是卖点（B 错）。",
          },
          {
            q: "What would Carlotta like to do next?",
            opts: ["open a hairdressing school", "create a range of beauty products", "start a business in another country"],
            answer: 2,
            explanation:
              "“I want my own hairdressing shop but in a more fashionable place than where I work now, so hopefully abroad somewhere” —— 想去国外开自己的店（选 C）；办培训中心的想法 “didn't get very far - it was too complicated”，已搁浅（A 错）；新面霜和洗发水是她开店后 “I can use there when I do” 要用的产品，不是自己创牌（B 错）。",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: "pet-trainer1-test6-listening",
      title: "PET Trainer 1 · Test 6 听力",
      level: "PET",
      collection: "PET Trainer 1（精讲精练）",
      book: "B1 Preliminary for Schools Trainer 1 (2020)",
      paper: "Listening",
      pages: "Test 6 Exam Practice · 书页 160–164",
      source: "PET Trainer1/pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf",
      answerSource:
        "书内 Practice Test Keys for Tests 3–6 + 书内 Audioscript 交叉核对",
      verified: true,
    },
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: "听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-6/part-1.mp3",
        items: [
          {
            q: "How is the girl going to help her dad?",
            image: "/images/pet/listening/trainer1/t6-q1.png",
            answer: 0,
            explanation:
              "女孩主动请缨 “Can I give you a hand? I'll cut the vegetables up if you want”，爸爸说切菜本已答应哥哥 “I've already asked your brother to do that”，但 “I guess we need that doing now” —— 蔬菜还是得有人切；摆桌 “he could lay the table instead” 和饭后洗碗 “there's always the washing up to do afterwards” 都可以让哥哥挑一样，所以女孩帮的是切菜（A 图），B、C 两件事都归了哥哥，选 A。",
          },
          {
            q: "Which place would the boy most like to visit?",
            image: "/images/pet/listening/trainer1/t6-q2.png",
            answer: 2,
            explanation:
              "聊《Nature Around the World》节目：男孩说上周的海岛篇 “was amazing enough”，但被雨林篇比下去，可这只是在评价节目好看；说到“想去”，女孩担心雨林难待 “they're very difficult places to spend time in”，男孩也承认 “the same would be true in most of the places they filmed”，却特别强调沙漠：“I like all the animals they filmed in the desert, and the atmosphere there would be amazing to experience” —— 想亲身去体验的是沙漠（C 图）；海岛（B 图）只是“节目不错”，雨林（A 图）他自己也说难待，选 C。",
          },
          {
            q: "What's the girl learning to do?",
            image: "/images/pet/listening/trainer1/t6-q3.png",
            answer: 0,
            explanation:
              "羽毛球课早就不上了：“I gave them up a couple of weeks ago... I wasn't making much progress”（C 图）；修车只是考虑过：“I thought about trying something practical like fixing bikes, because mine's always breaking down”，但 “my dad doesn't mind repairing it when it does”（B 图，爸爸包了）；她的最终选择是 “I went for writing computer programs instead” —— 在学编程（A 图），选 A。",
          },
          {
            q: "What did the boy forget to buy?",
            image: "/images/pet/listening/trainer1/t6-q4.png",
            answer: 1,
            explanation:
              "男孩汇报采购：“I got two pizzas like you asked”，爸爸却说家里本来就有 “I said we'd already got those... I can put these ones in the freezer”（C 图是买重复了）；沙拉 “was reduced today so I got plenty of that”，买了（A 图）；真正漏买的是冰淇淋：“You said we had enough ice cream”——“I said I didn't think we had any left”，两人记岔了话，冰淇淋没买（B 图），选 B。",
          },
          {
            q: "Where did the girl leave her glasses?",
            image: "/images/pet/listening/trainer1/t6-q5.png",
            answer: 2,
            explanation:
              "眼镜只在看书时才戴，所以现在才发现落下了。她回忆：在卧室用笔记本查网站时还戴着（B 图）；“I remember taking them off though when we were watching the film in your living room, so it's worth checking on the sofa” —— 最后摘眼镜是在客厅看电影，让朋友去沙发找（C 图）；玄关桌上（A 图）是 “once” 上次落过的地方，“I'm pretty sure I haven't done that again”，选 C。",
          },
          {
            q: "Why was the boy late for school?",
            image: "/images/pet/listening/trainer1/t6-q6.png",
            answer: 2,
            explanation:
              "排除法：闹钟照常 7:30，时间本够用 “I set my alarm clock for 7:30, which gives me enough time”（A 图）；堵车 “no worse than usual”（B 图）；真正原因是出门前找历史论文 “it took 10 minutes to remember where I'd left it”，到站晚了没赶上公交：“I had to run for the bus, but it left just before I got there”，只好走回家让妈妈开车送（C 图），选 C。",
          },
          {
            q: "What does Lisa's dad want her to do?",
            image: "/images/pet/listening/trainer1/t6-q7.png",
            answer: 0,
            explanation:
              "爸妈都晚归，爸爸电话里只拜托一件事：弟弟的阅读练习 “we should be back in time to do that with him”（C 图不用她管）；校服够穿 “there's no need to worry about doing any washing”（B 图排除）；“He'll need something to eat though, there's plenty of bread, cheese and tomatoes” —— 让 Lisa 给弟弟弄点吃的（A 图），选 A。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-6/part-2.mp3",
        items: [
          {
            q: "You will hear two friends talking about working with other students in class. The girl thinks that working with other students in class",
            opts: ["is more useful for the lesson.", "takes longer than working alone.", "makes classes more fun."],
            answer: 0,
            explanation:
              "对话的落脚点在实用性：“at least you can solve problems and work out what's happening better if there are five minds thinking about it” —— 五个人一起动脑，更容易解决问题、弄明白怎么回事，对课程更有帮助（选 A）；五人一组做实验 “you can get it done in half the time”，比单干快而不是慢（B 错）；“that class was fun” 只是开场的一句感受，而且 “how much I enjoy it depends very much on who I'm asked to work with”，乐趣取决于和谁一组，并不是结论（C 错）。",
          },
          {
            q: "You will hear two friends talking about a school trip to a museum. The friends agree that",
            opts: ["the exhibitions were all interesting.", "there were nice things in the shop.", "it was too large to see in one visit."],
            answer: 1,
            explanation:
              "两人在纪念品店上一致：一人打趣 “you seemed to enjoy the shop though — you were in there for ages”，另一人承认 “I wish I'd taken more money... there was this amazing puzzle of some ancient ruins I've really wanted”，还给了下次再来的理由（选 B）；陶罐展厅被直呼不值得看 “I'd suggest not bothering with that room with those old pots”，并非个个展览都有趣（A 错）；原话是 “I imagined it would be much bigger” —— 觉得博物馆比想象的小，不是太大看不完（C 错）。",
          },
          {
            q: "You will hear two friends talking about a football match. The boy is feeling happy because",
            opts: ["his team won.", "he scored a goal.", "his parents came to watch."],
            answer: 2,
            explanation:
              "“I think I probably play better than usual because mum and dad could both get here for once” —— 爸妈这次难得双双到场看他比赛，是他开心、超常发挥的原因（选 C）；“I came so close to getting the ball in the net a few times” —— 只是几次差点破门，并没有进球（B 错）；录音说训练刻苦、新教练带来变化，但没说球队赢了（A 错）。",
          },
          {
            q: "You will hear two friends talking about a poem they've read. They think the poem would be better if",
            opts: ["it was shorter.", "it had a clearer meaning.", "the sections were in a different order."],
            answer: 0,
            explanation:
              "一人直言 “I can't help wondering why the poet made it so long... I'm sure it would be possible to say the same thing in half as many words”，另一人附和 “It would, and without changing the message of what he wants to say” —— 篇幅减半也不损原意，两人都觉得诗太长（选 A）；费琢磨恰恰是乐趣所在：“it always takes me a while to work out what old poems like that are about, but that's what I like about them” / “it'd be a shame if you understood everything after you'd only read it once”（B 错）；段落顺序只字未提（C 错）。",
          },
          {
            q: "You will hear a boy asking a girl about an essay he has written. The girl thinks the boy should",
            opts: ["add more detail.", "change the subject.", "improve the style."],
            answer: 2,
            explanation:
              "内容上她挑不出毛病：“you've included plenty of information about the topic and some good examples to support what you're saying”（A 错）；话题还被夸了：“the teacher will definitely be surprised by what she chose to write about, but in a good way. It's certainly original”（B 错）；要改的是行文：“it's written a bit like a list at the moment. You need to see if you can get it to flow more, so it sounds more natural” —— 让文字更流畅自然，即改进文风（选 C）。",
          },
          {
            q: "You will hear two friends talking about a video game. Why is the boy talking to the girl about the video game?",
            opts: ["to apologise", "to make a request", "to thank her"],
            answer: 1,
            explanation:
              "男孩解释游戏没能带来：“I put it in my bag last night... but I think my brother saw it and probably wanted to play it too... it will be in his bedroom somewhere now”，随即提出请求：“I'm sure he'd be extremely grateful if we could keep it for a couple of extra days” —— 想再多借几天（选 B）；女孩大方回应 “that's okay, no problem”，男孩没做错事，谈不上道歉（A 错）；游戏是女孩借给他的，也不是来道谢（C 错）。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段音乐老师向学生介绍周六音乐班的录音，在笔记空格中填入 1–2 个词、数字或日期或时间。",
        audio: "/audio/pet-trainer1/test-6/part-3.mp3",
        items: [
          {
            q: "Classes available: drums,（14）______, guitar（可选乐器）",
            answer: ["flute"],
            show: "flute",
            explanation: "新增乐器是长笛：“The violin teacher the school usually uses can't make it on Saturdays, but why not have a go at the flute if you prefer classical music” —— 常请的小提琴老师周六来不了，改开长笛课。"
          },
          {
            q: "On arrival: go to the（15）______ to pick up your instrument（领乐器地点）",
            answer: ["drama room"],
            show: "drama room",
            explanation: "乐器平时放在 “the large cupboard next to the technology room”，但当天 “we'll make sure they're all ready for you in the drama room, so go straight there please” —— 直接去戏剧教室领。"
          },
          {
            q: "Cost:（16）£______ per class（单次课费用）",
            answer: ["7.75", "seven pounds 75", "seven pounds seventy five"],
            show: "7.75",
            explanation: "两种付费方式：按次付 “it'll be seven pounds 75”，或按学期付 72 英镑更划算；笔记问的是 per class 单次价格 → £7.75。"
          },
          {
            q: "End-of-term concert: on（17）______（音乐会日期）",
            answer: ["24 june", "24th june", "june 24", "june 24th", "24/6", "6/24"],
            show: "24(th) June / June 24",
            explanation: "日期被明确纠正过：“which will take place on the 24th of June and not on the 7th of July as it says on the school website” —— 不是官网写的 7 月 7 日，而是 6 月 24 日。"
          },
          {
            q: "play alone or with the（18）______（合奏形式）",
            answer: ["orchestra"],
            show: "orchestra",
            explanation: "“You'll be able to play solo, that's by yourself, or with others. Last year there were several students who joined together in a band... this year though we'd like to include more people and have an orchestra” —— 今年新设的是管弦乐队，不是去年的 band。"
          },
          {
            q: "contact music teacher on（19）______@school.net（邮箱用户名）",
            answer: ["driscoll"],
            show: "Driscoll",
            explanation: "“You'll need to email Mr Driscoll, the music teacher, on Driscoll at school dot net. I'll spell that for you: D-R-I-S-C-O-L-L” —— 注意是 Driscoll：C 前是 I，结尾双写 L。"
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: "听一段对制作环保主题网络视频的年轻人 Lin 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-6/part-4.mp3",
        items: [
          {
            q: "How did Lin learn how to start putting videos online?",
            opts: ["She did a short course.", "She used information online.", "She asked someone she knew."],
            answer: 0,
            explanation:
              "“My department was running these sessions for helping people become vloggers, so I went along to those” —— 参加了大学系里办的博主培训班（选 A）；网上的资料她只觉得 “there's so much stuff about it online, but I just found it confusing”，并没有靠自学（B 错）；老朋友虽是博主，但视频主题是旅行，帮不上忙（C 错）。",
          },
          {
            q: "Why did Lin choose to focus on the environment?",
            opts: ["A teacher recommended this topic.", "There were so few online videos about it.", "She'd been interested in it for a long time."],
            answer: 2,
            explanation:
              "“It's just something that I've believed is important for ages and think too little is being done, so I wanted to help” —— 长期认为环保重要、想出一份力（选 C）；环保与她的大学专业无关，“it wasn't like I got advice from any of my classmates”，老师推荐无从谈起（A 错）；网上同类视频其实 “there were already plenty of people uploading videos”，很多而不是很少（B 错）。",
          },
          {
            q: "How did Lin feel when her online videos first became successful?",
            opts: ["surprised it happened so quickly", "anxious about being seen by so many people", "certain that she would get even more followers"],
            answer: 0,
            explanation:
              "她本以为 “to only have a few people watching regularly for years”，结果 “I couldn't believe how wrong I was about this” —— 成功来得远比预想快，非常意外（选 A）；粉丝暴涨 “didn't worry me as much as I thought”，并不焦虑（B 错）；对走红毫无预期，谈不上“确定会涨更多粉”（C 错）。",
          },
          {
            q: "Lin says that to become successful, people should put videos online",
            opts: ["every day.", "once a week.", "once a month."],
            answer: 1,
            explanation:
              "日更 “people will soon become bored”，自己也难 “keep coming up with new ideas”（A 错）；月更太稀 “so rarely that people never get interested... that's not going to work either”（C 错）；她的建议是 “aiming for weekly is probably frequent enough” —— 每周一条刚刚好（选 B）。",
          },
          {
            q: "Lin's latest video is about",
            opts: ["climate change.", "public transport.", "recycling."],
            answer: 1,
            explanation:
              "“I've just finished a series encouraging more people to use buses and trains rather than their cars” —— 刚完结的系列号召少开车、多乘公交火车（选 B）；全球变暖是下一步选题 “I'll be moving on to how and why the world is becoming warmer in the next few videos”（A 错）；教人重用玻璃塑料的是 “the most popular ones so far” —— 此前最受欢迎的旧视频（C 错）。",
          },
          {
            q: "Why does Lin think it's important for her to try new things?",
            opts: ["to stop herself becoming bored", "to learn more about the subject", "to create discussion about the topic"],
            answer: 2,
            explanation:
              "做视频 “it's only one way of telling the public about these things”，而 “moving into TV would greatly increase the audience, which of course means more people would then be talking about these important issues” —— 观众面越大，讨论这些重要议题的人就越多（选 C）；“I still love finding out more about environmental topics” 是她继续做视频的动力，不是换平台的目的（B 错）；“bored” 无从谈起（A 错）。",
          },
        ],
      },
    },
  },
];
