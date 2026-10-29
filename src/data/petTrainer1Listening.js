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
// 听力原文来源：官方 Audioscripts（Cambridge B1 Preliminary for Schools Trainer 1 (Second edition, 2020) 书末集中 Audioscripts 区段，印刷页 166-181（PDF 页 167-182，偏移 +1）。Test 1=印刷166-168、Test 2=170-173、Test 3=174-175、Test 4=176-177、Test 5=178-179、Test 6=180-181。Tests 1-2 区段内另含 Speaking 原文（未录入）；Tests 3-6 的 Speaking 不在 Audioscripts 区。耳机图标音频编号（01-57）与官方答案句下划线为版式元素，未计入正文。）2026-10-27 逐字转录
        transcript: "LISTENING PART 1\n\nTraining\nBoy: How about doing the maths homework first? It's the hardest.\nGirl: You're right, so let's save it until my dad comes home. We can ask him if we have problems. We should probably start with the science as it's due in tomorrow.\nBoy: Yeah, that's true, but the geography will take longer. We have to write at least two pages.\nGirl: I know, but that's not due in till Thursday. We have plenty of time for that.\nBoy: Right, we'll start with tomorrow's work.\n\nExam Practice\n1\nBoy: What are you bringing for the picnic?\nGirl: My mum bought some soft drinks for us to take, but apparently Ellie had already said she'd bring some, so I thought about making some sandwiches instead. Or we've got loads of fruit at home – I'm sure my parents wouldn't mind if I took a few apples and bananas and so on.\nBoy: I think Harry's bringing fruit.\nGirl: In that case, I'll go with my other idea. We've got plenty of bread and cheese and things.\nBoy: Great! Let's hope the weather's good tomorrow.\n\n2\nGirl: So how was your holiday?\nBoy: Good, thanks. I didn't think I'd enjoy the mountains as much as the sea, but I did.\nGirl: I bet you missed windsurfing, didn't you? You do that every year.\nBoy: I got to do some, actually – on a lake near the hotel. It's still my favourite, but cycling on the paths through the mountains was nearly as exciting.\nGirl: Didn't you say you wanted to go horse-riding, too?\nBoy: I was going to, and I'd still love to try it, but we just ran out of time.\n\n3\nMan: Have you got much homework?\nGirl: I've got some art. I have to draw a vase or something like that. I think it doesn't have to be handed in till Friday, so I can do it on Wednesday night. My history essay has to be in tomorrow, though, so I'd better finish that this evening. Oh, and Mr Havlock set us some maths homework today and gave us a week to do it, so no need to do that until the weekend.\nMan: Well, good luck with it.\nGirl: Thanks.\n\n4\nBoy: That was a great school trip. There were so many different animals.\nGirl: Yes. I love dinosaurs, but even I got a bit tired of looking at bones after an hour on the trip last year.\nBoy: I agree. At least this time they were alive!\nGirl: Yes, and it's so nice to see creatures from all over the world. I'm glad the teacher didn't decide to do what she'd originally planned and go to the farm. You see sheep and cows all the time around here.\nBoy: You do.\n\n5\nBoy: Hi Sarah, it's Max. I need to talk to you about Dad's birthday present. I know you said you wanted to get him some chocolates. Hope you don't mind, but I saw some boxes of the ones he really likes on special offer in that shop near the school, so I just got one. Why don't you buy him the cookbook that I was going to get him instead? It probably costs about the same, and he'll like that more than socks or whatever you usually get him.\n\n6\nGirl: How was your weekend?\nBoy: It was good, thanks. There's a funfair on in town at the moment that my sister wanted to go to. I said I'd prefer to go to the big football match that was on at the stadium. My parents said they'd rather go to the river for a picnic instead, though, so everyone wanted to do different things. Then it started raining, so I got what I wanted in the end because the roof closes when it rains, so we could avoid getting wet.\n\n7\nGirl: Hi, I'm just phoning to say that I'm going to arrive at your house a bit later than I'd planned. I got part of the way there when I had a problem with the tyre on my bike and couldn't fix it. I had to walk home with it because it's too big to take on the bus. Anyway, my dad's just got home from work and said he can give me a ride but he has to make a phone call first. I'll be there in half an hour.",
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
        transcript: "LISTENING PART 2\n\nTraining\n1 I didn't enjoy the film at all. Nothing much happened. I almost fell asleep. The film was so [bleep].\n2 We bought a very big new table. But we couldn't get it into our dining room, because the entrance to the room was too [bleep].\n3 I can't understand how to set up my new computer. I've tried to follow the instructions, but they are too [bleep].\n4 I visited my friend in Australia and her house had ten bedrooms. It was absolutely [bleep].\n5 When I was swimming in the sea, I saw a shark. The experience was so [bleep].\nBoy: Right, we have to choose which cake to buy for Dean's birthday. It has to be the chocolate one, surely?\nGirl: It does taste the best, but the one with the strawberries on looks amazing.\nBoy: Dean hates fruit, though! What about getting a plain cake and asking them to put Happy Birthday Dean in blue icing?\nGirl: Hmm, isn't he a bit old for that?\nBoy: Maybe. So, it has to be the first one, then.\nGirl: I suppose so.\n\nExam Practice\n8\nGirl: That was a great film.\nBoy: If you're into that kind of thing. I haven't seen anything as bad as that for a long time.\nGirl: Oh, I didn't know that you don't like horror movies.\nBoy: I usually do, but I'm not sure that's how I'd describe that film – there was only one bit I found at all scary. It's strange because the main characters were played by two quite big stars, but I don't know how they got to be so famous if that's the best they can do. It was all very disappointing . . .\nGirl: Oh, dear!\n\n9\nGirl: How's your biology homework going?\nBoy: Not very well. I can't work out what I have to do.\nGirl: In that case, it probably won't be much use looking online. You can find all the information you need there, but if you don't know what to do with it, it's not really going to help you. Have you seen Mr Benson about it?\nBoy: No, not yet.\nGirl: It might be best, as he set the homework in the first place. Take your coursebook with you when you go so he can explain everything to you using that.\nBoy: Good idea!\n\n10\nGirl: Did you see that interview with Denny Starr?\nBoy: I did. He seemed so nervous at the beginning. And it wasn't that the guy asking the questions was especially rude or asked him anything difficult.\nGirl: I know. But once he relaxed a bit, he really spoke about lots of things. I didn't know anything about.\nBoy: I don't think I've ever heard him talk in so much detail about his life before. In other interviews I've heard, he's generally given answers that had very little to do with what he's been asked.\nGirl: Yes, like he didn't really understand the question.\nBoy: Exactly.\n\n11\nBoy: How was the diving trip?\nGirl: It was great, but I learned to dive in a swimming pool where the water doesn't move around much. Going underwater in the sea was a completely different experience. I seemed to become totally unable to do all those things that I got so good at in the pool.\nBoy: So is it something you'd like to have another go at?\nGirl: I'll think about it, but if I do, I need to make sure I go with my cousin Martin again. It gave me a bit more confidence to be underwater with someone I knew.\n\n12\nGirl: Hey, did you see the big basketball game last night?\nBoy: I did, yeah.\nGirl: That was awesome when their star player jumped so high he nearly landed on that cameraman! Wouldn't you love to be able to do that? You'd be a great player – you're really tall.\nBoy: I guess. I can't say I understand much about the rules, though.\nGirl: Some of them are quite complicated, especially the ones about how long you can hold onto the ball for. But the best way to understand them is to play – that way you'd learn them as you were having fun.\nBoy: Maybe one day.\n\n13\nGirl: How was London?\nBoy: Great, except we got lost.\nGirl: Oh no! How?\nBoy: My dad had this guide book which was at least 20 years old. We told him lots of things would be different now, so most of what was in it would be wrong. Even though it was old, it was probably more accurate than the information a guy on the street gave us for getting to Big Ben – we ended up somewhere completely different! We only used the book for getting around on the Underground in the end – the map's almost the same as it was back then.",
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
              "她说连要做什么都不知道，上网也没用；对话里建议 “Have you seen Mr Benson about it”，最好去找布置作业的老师，还建议带上课本让他讲解，选 A。",
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
              "她说男生个子高会打得很好，规则最好的学法是 “the best way to understand them is to play – that way you'd learn them as you were having fun” —— 鼓励他开始打球，选 C。",
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
        transcript: "LISTENING PART 3\n\nTraining\nRight, listen everyone. The trip to the aquarium is next Tuesday, the 26th of May. I hope all of you have a form signed by your parents to say you can go. You need to pay for the trip by this Friday. The cost is £6.50 for admission to the aquarium and £2.00 towards the cost of the coach. So, that means the amount you need is £8.50.\n\nNow, it's very important for you to bring your lunch. We will provide water and other drinks, so don't worry about that. We're going to eat on the beach in front of the aquarium, and there won't be a chance to buy anything. There won't be a chance to buy food there, so you must bring your own.\n\nIt's going to be a really interesting trip. There are a few special events the day we are going. We're going to watch the sharks being fed at 3.00 – no, hold on, that's at 2.30. There's also a talk every morning at 11. The topics change every day and often they talk about fish, but on the day we're going – that's Tuesday – it's about penguins, so I'm sure you'll all love that. We'll give you some work sheets to do while you're at the aquarium, but don't worry, they'll be quite easy.\n\nNow, I'm going to finish by giving you the address of where we're going because some of the parents were asking. It's Aquarina aquarium and it's on Wortham Road – that's W-O-R-T-H-A-M Road. If your parents need to contact the aquarium while we're there, our guide for the day will be Sarah Gulley – I'll spell her surname for you: G-U-L-L-E-V.\n\nExam Practice\nHi everyone. I'm going to tell you about a new video game that I've played a lot recently, called Sky Jam. It's produced by the same company that made Road Jam a few years ago, which was set in a city of course. Instead of streets and huge buildings, though, you'll find yourself living in a rainforest in this game.\n\nIt's an unusual game because you have to answer questions in order to make progress, as well as by moving through the environment. You'll be asked all sorts of things regarding insects, which you have to learn on the way from the many helpful creatures you meet, such as butterflies and bats.\n\nThere are 30 levels in the whole game, which are supposed to become more and more challenging as you go on. I found the one called 'the monkey', almost impossible, even though it comes well before the last level, called 'the frog', which didn't seem so difficult.\n\nThere are lots of things to love about this game. The story you learn about as you continue through the game is fantastic, second only to the characters you can play, who are lovely, and extremely interesting too. Learning to play the game is easy and fun, too.\n\nUnfortunately, unlike the eight players who could play against each other in Road Jam, six people at the most can join in the game at any one time. I found this to be a few too many, though, and preferred playing in a group of four.\n\nYou can find out more about the game online. If you're interested, visit the company's website www.lombardio.com. I'll spell that for you: it's L-O-M-B-A-R-D-I-O.\n\nI hope you enjoyed my presentation. Thank you for listening.",
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
        transcript: "LISTENING PART 4\n\nTraining\nMy name is Silvia and I've lived in London for three years. I came here because my mum got a job in a bank here. Before that, we lived in Shanghai in China for two years. It was amazing. I've been studying Chinese since I was ten, because I find Chinese interesting. I studied Chinese for a year before we moved to China and finally managed to do it. Two years ago, my brother went back to our hometown, Rome, to study university. He's been to visit us in London a couple of times since we got here. The last time, he stayed for a few months and did an English course.\n\nInterviewer: So, Anita, how long have you been a helper at Cat Rescue?\nAnita: Umm, let me see, since October, so about eight months. But I've been visiting the Centre for much longer, since I was about 12. My mum's been a volunteer here for over 10 years and that's how I got into it.\nInterviewer: And what kind of jobs do you do here?\nAnita: When I first started, I was just watching the other helpers, and then I began cleaning the cages where the cats live. Just a few weeks ago I started helping the vet when he visits, which I absolutely love. Oh, I forgot that for a few months I was doing all the feeding by myself. So, now all the cats are friendly with me!\n\nExam Practice\nMan: Welcome, Andrea. You're an expert ice hockey player now, but when did you start playing?\nAndrea: Not until about three years ago actually, so quite recently. I've come a long way quite quickly. I've always loved sport, though, and have played basketball since I was five or six. I gave that up for a while when I got into football about five years ago, but started playing again once I'd lost interest in football.\nMan: How did you first become interested in playing ice hockey?\nAndrea: My brother's into it, and I used to go to his games. His team wasn't very good, though, so I didn't think of it as something I actually wanted to do. That moment came when there was a professional match on a sports programme I was watching. I knew then I wanted to try it, and fortunately a couple of friends did too so we all started playing together.\nMan: You sometimes play against boys' teams. How important is that?\nAndrea: Very. There are as many girls playing ice hockey now as there are boys, which is great. Attitudes towards us have always been positive, in my experience. I want to do better against boys somehow – I'm not sure why – which really helps to develop my talents.\nMan: How did you feel when you were chosen for the national under-16 team?\nAndrea: I'd been really happy with how I'd been playing for my club, and felt I could do just as well at a higher level. There'd been a lot of talk about me being picked, so I kind of knew it was coming. It was great for my parents too – they felt great having a daughter in the national team!\nMan: Are the national team matches your favourite games?\nAndrea: Not always, even though some of them are big games and appear on national television. If a game's close between both teams are good, then it's fantastic for the crowd to see, and better to play in because of that. It's far more interesting than scoring loads of goals because we're so much better than the other team.\nMan: Any advice for people wanting to start playing ice hockey?\nAndrea: You can spend hours reading books about what you can and can't do, but there's no better way of becoming good than playing. So borrow some skates and a stick if you need to – you can buy your own later – and join a team so you can start playing straightaway.\nMan: Thank you, Andrea!",
        items: [
          {
            q: "Which sport does Andrea say she started playing first?",
            opts: ["football", "ice hockey", "basketball"],
            answer: 2,
            explanation:
              "“have played basketball since I was five or six”；足球是约 5 年前才迷上、冰球 3 年前才开始，最早的是篮球，选 C。",
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
        transcript: "LISTENING PART 1\n\nTraining\nKam is 17 years old. He has short, dark, straight hair and is tall and slim. He's wearing jeans, a belt, a T-shirt and trainers.\n\nToday the weather in Scotland will be colder than in recent days, with snow falling on the hills. Be careful of ice if you are driving today and remember to take extra time for your journey. The maximum temperature will be two degrees, but it may go as low as minus five overnight. Moving now to Northern England. It's a better day for you. You will see some sunshine, but it will be very windy, so although you could see temperatures of up to seven degrees, it will feel more like two or three degrees, so wrap up warm. For those of you in Wales, you won't see the sun at all, I'm afraid. It's cloudy all day and there will be some showers. Temperatures are a bit higher than those we're seeing elsewhere, though.\n\nGirl 1: So, what did you buy at the shops today?\nGirl 2: Well, I was planning to buy that dress that was in the sale, you know, the one with the stripes, but they didn't have it in my size.\nGirl 1: Oh, no!\nGirl 2: So, I ended up getting a skirt instead.\nGirl 1: The one with the same kind of stripes as the dress?\nGirl 2: Yes! I did think of getting the flowery one, but the colours were a bit too bright.\n\n1 Can I help you?\n2 We're at the end of the road.\n3 Would you like a cup of tea?\n4 You should have listened to him.\n5 I would have helped if I'd known.\n6 What are you doing for lunch?\n\nExam Practice\n1\nGirl: So you found your mobile phone then . . .\nBoy: Yeah, I spent most of yesterday evening looking everywhere for it, including in my dad's car. I was sure it'd fallen out of my pocket when he gave me a lift home from school, but I was wrong. Of course, I never thought of checking the pocket of my jacket, which is where I noticed it this morning! I'd begun to think I'd left it in the drawer of my desk and I'd find it when I got to school.\nGirl: At least you've got it back.\n\n2\nGirl: How much longer is the game on for?\nBoy: I thought you liked basketball . . .\nGirl: I do – love it, but my team's not playing today, and anyway, it's nearly time for Life Beneath the Waves – there's a special report on whales.\nBoy: Don't you and Dad want to watch that quiz show you like, Ask Me Another? You usually have a competition to see who can get most questions right.\nGirl: True, but I'm sure he won't mind missing it for just this time.\nBoy: I guess not. OK, what time does it start?\nGirl: Now!\n\n3\nBoy: How was the zoo?\nGirl: I really enjoyed it – there were so many different animals to see. My favourites are usually the penguins. My little brother and I laugh so much when they walk around the pool – they look so funny! It's a shame that they were all in the water, swimming yesterday – because it was so hot, I suppose, so it was the monkeys playing in their trees that were the biggest attraction for me this time, although seeing the baby elephant with its mum came a close second.\n\n4\nGirl: Which character are you in the school play?\nBoy: I'm the main character's father. I need to look much older than I am, so I have to wear a suit and glasses. The director said my character should have long, fair, curly hair, so I have to put that on, too.\nGirl: I'm sure your short dark hair would look just as good.\nBoy: Maybe, but you have to do what the director says. He tried to make me wear a moustache, but it kept falling off, so we gave up that idea.\n\n5\nAnd now for the weather. A lot of cloud will move in from the west later this morning, bringing heavy rain to all parts of the country by early afternoon. Driving in these conditions will be quite difficult, so take care on the roads. This rain will be accompanied by strong winds, which will stay with us over the next few days, but overnight, any remaining rain will clear away, leaving clear skies everywhere. The sunny weather should stay until the day after tomorrow, when, unfortunately, the rain returns.\n\n6\nGirl: Hi, I was just calling about going clothes shopping together tomorrow. I'm still OK to meet at two, but I think I'd prefer if we didn't meet at the clock in the town square as we'd arranged – you're always late and there's nothing to do there. So how about seeing each other at the café? At least I can have a snack while I'm waiting. We could just meet at the clothes shop, but I'd probably finish my shopping before you got there – I know what you're like!\n\n7\nGirl: Did you get that book you wanted for your music classes?\nBoy: I did. I went into town after school today and got it then. It was on special offer too, so it was reduced by two pounds from seventeen pounds nineteen-nine to fifteen pounds ninety-nine. I know we saw it on the internet for less than that – it was thirteen pounds ninety-nine, I think – but I really need it for my class tomorrow and there's no way it would arrive in time.\nGirl: Well, I'm just glad you found it.",
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
              "她平时最爱企鹅（C 图），但昨天天热企鹅全泡在水里游泳没走动；这次 “it was the monkeys playing in their trees that were the biggest attraction for me”，大象只是 close second，选 B。",
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
        transcript: "LISTENING PART 2\n\nTraining\n1 In general, I like spicy food, but this curry is too spicy.\n2 We only got to spend one day in Rome. We didn't see very much.\n3 There aren't enough hours in the day!\n4 Luckily, there was a question about the heart in my biology test.\n5 Finally, someone answered the phone.\nBoy: What's your new teacher like?\nGirl: She's nice, but a bit strict.\nBoy: Is she too strict, would you say?\nGirl: Well, teachers need to be a bit strict, don't they? If not, the students wouldn't work hard enough. She's very fair, which is the main thing.\n1 Let's go to the park now. Unless you can think of anything more interesting to do?\n2 I quite enjoyed the film. It's a pity it wasn't a bit shorter, though.\n3 I'm afraid I'm too tired to help you. You've wasted the whole afternoon instead of doing your homework.\n4 My driving instructor says I should take my driving test next month. I know I should be a bit scared, but actually I'm looking forward to it!\n5 There are lots of dinosaurs in the museum. I thought this was a museum about living creatures!\n\nExam Practice\n8\nGirl: I enjoyed that.\nBoy: Me, too. I don't think either of them played a wrong note in the whole performance.\nGirl: I think I heard a few – perhaps they hadn't had enough time to play together before the concert.\nBoy: Maybe. I still wish they'd played a little longer, though – maybe a few more songs.\nGirl: I thought it was about right as it was. That kind of music sounds so much better in a smaller place – I don't know why they chose to have it there.\nBoy: The two guitars are too quiet for somewhere that size.\n\n9\nGirl: That was an amazing play.\nBoy: It was. Over half the people watching were school students like us.\nGirl: I guess that's not so unusual for an afternoon performance. Most adults are working then.\nBoy: I wonder what it's like being an actor. They must have to practise so hard.\nGirl: The ones in this play certainly had. I found it difficult to believe how realistic they managed to make all of the characters.\nBoy: Yes, and I couldn't predict what would happen at the end.\nGirl: I studied this play in literature classes last year, so I already knew what was going to happen.\n\n10\nGirl: How was the art course?\nBoy: Fantastic – I learned so much.\nGirl: So what was the best bit?\nBoy: There were so many, but if I could only choose one, I think it'd be how the teacher got us to practise techniques in a number of different ways. I thought I'd spend most of the time drawing or painting, but we did so many other activities, all of which were quite useful for developing our skills.\nGirl: Sounds good.\nBoy: And I never knew there were so many jokes about artists! Our teacher seemed to know them all, which was great fun.\n\n11\nBoy: Are you walking to school with us tomorrow?\nGirl: I might go on my own, actually. I don't want to be late.\nBoy: But you'll enjoy it more if you come with us.\nGirl: It's often no different to walking by myself because you all walk slowly along with your headphones on.\nBoy: We show each other things on our phones, too.\nGirl: That's true, which is great in our free time, but not when it means arriving half an hour later than I would if I was myself. At least you're polite enough to move out of the way for other people on the pavement, though.\n\n12\nGirl: How's your new house?\nBoy: I like it. The colours aren't what I'd ever choose, but my mom says we can easily fix that. My bedroom's much bigger than the one at the old house, which annoyed my brother as his is quite small – like the rest of the house.\nGirl: I thought people usually moved to be somewhere bigger . . .\nBoy: Sure, but where it is is important, too, and the new one's much closer to my parents' work and to school, too. I can walk there in five minutes, which means I get to stay longer in bed in the morning.\n\n13\nBoy: How was your weekend?\nGirl: Good, thanks. We went for a day out by the river.\nBoy: The river near here? It's easy to walk to, but it's not like there's lots to do there.\nGirl: I know. That's why we went somewhere else, about an hour away in the car. It's dangerous for swimming because the river's really deep and wide there, but we've never found a better place to sit and eat. I know you'd probably prefer somewhere which has lots of activities, but it's really peaceful, so we just sit on the grass, enjoy our food and relax.\nBoy: Sounds nice.",
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
              "只挑一样的话是 “how the teacher got us to practise techniques in a number of different ways” —— 练习方式多样，选 C；他说本以为大部分时间在画画，其实并没有（A）；老师的笑话只是 great fun。",
          },
          {
            q: "You will hear two friends talking about getting to school. The girl thinks that walking to school with her friends",
            opts: ["is a good way to be sociable.", "takes longer than walking alone.", "causes problems for other pedestrians."],
            answer: 1,
            explanation:
              "结伴走 “means arriving half an hour later than I would if I was myself” —— 更花时间，选 B；会一起看手机是朋友们的乐趣（A）；她还说大家足够礼貌会给人让路（C）。",
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
        transcript: "LISTENING PART 3\n\nTraining\nHello, everyone. I'm Karim and I'm going to give you a short presentation about my work experience last year because I know you'll be organising your own work placements soon.\n\nI worked at Butterfly World, with another boy, Noah. I'll tell you straightaway that the hours are a bit challenging; we're used to starting school lessons at 8 a.m., but we had to reach the butterfly house by 6.45 and be ready to work at 7 a.m. We found that quite hard!\n\nWe were expecting to have to wear a green uniform, like the staff, but instead of that, they just asked us to come in old clothes. The work can be quite messy, actually. Another thing: I took my camera on the first day, thinking I could get some good pictures, but actually I didn't have much time to use it, so I wouldn't recommend bringing one. In fact, the only thing you really need to take with you is your lunch for the midday break.\n\nWe had to help in the café, and one day we helped clean the pond – it might sound strange, but I loved that! They showed us how to handle butterflies, which was really cool, and we helped feed them with cut-up fruit. But for me the best thing was learning about the butterflies – there are so many things I didn't know and I found it so interesting! One day they even let us give a talk about butterflies to a group of schoolkids!\n\nAnyway, if you want to have a go yourselves, you need to be quick, and apply before 12th March. And you should hear if they've accepted you by 2nd April. The person you need to write to is Monica Anscough – I'll spell that for you: A-N-S-C-O-U-G-H. Thanks for listening!\n\n1 The twenty-third of February\n2 October the ninth\n3 Five thousand three hundred and fifty-two\n4 Sixteen pounds forty\n5 The thirty-first of December nineteen eighty-one\n6 A hundred and twenty-six\n7 Two thousand and three\n\nExam Practice\nListen, everyone! I've got some information about this year's school photography competition. As you'll probably remember, last year's competition asked you to focus on the topic of travel, but photos should have something to do with the environment this time.\n\nAs in previous years, there are certain things that we want the photographs to include. We want all the pictures to have wildlife in them, so we're not looking for photos that only show landscapes or people.\n\nThe head teacher has decided to ask someone from outside the school to judge the competition this year. She was hoping that local artist Sally Graves would be able to judge the entries, but she's actually away at that time. Writer James McKay has agreed to help us instead. I'm sure many of you have heard of him, as he's quite famous and was born not far away from here, too.\n\nIt was felt that most keen photographers already have the photography books or equipment they need, so the organisers have decided that the winner will receive a photography course run by Central College instead. The College was also hoping to have a small photography exhibition for winners of all the school photography competitions in the area, but their gallery's too busy putting on other shows, I'm afraid.\n\nThe winner of the competition will be announced on 11th March. If you wish to enter, please make sure we receive your photos by 15th February, as the judging will take place on 19th February.\n\nSo if you're interested, send your entry to the school secretary, Mrs Mitchell, not to me or the head teacher. I'll give you her email address – it's s dot mitchell, that's spell M-I-T-C-H-E-double-L, at school dot com. Good luck!",
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
        transcript: "LISTENING PART 4\n\nExam Practice\nWoman: Callum, you have a popular book review website. How did you learn about setting up a website?\nCallum: I first learned to write computer programs when I was eleven. We created instructions in class to control a little robot. My mum works in IT, though, and she showed me how to use similar skills to create my own pages online. There are hundreds of websites about this too, but I found them quite confusing.\nWoman: Why did you decide to set up a book review website?\nCallum: I'd seen an article about teenagers not reading enough and was wondering about possible solutions to this. My best friend's into video games and writes reviews for various websites. These sites seem to encourage teenagers to play more games, so I thought it must be possible to do the same with reading. It's nice to see teenagers exchanging opinions about literature, rather than video games!\nWoman: How did you feel when your site first went online?\nCallum: I was nervous, of course, but I couldn't believe how well it worked. But even when a site looks as good as mine did, you can never be sure that people will like it. And if it ends up not being popular, there's no way you'll achieve what you've set out to do with the site.\nWoman: You have school, your website and a social life – what's a typical day like?\nCallum: You'd think I'd never have a chance to relax, wouldn't you, but it's rarely that busy. I certainly don't have many opportunities to get bored, as everything I do throughout each day is so different – I make a plan each evening for what I want to achieve the next day, which I usually stick to.\nWoman: What would you like to be doing when you're 18?\nCallum: Many website designers have ambitions to join one of the huge technology businesses based in the USA. I want to stay close to my family in Canada, though. I've thought about studying computer science, however, I learn better by doing than by studying, so I'd prefer to have my own web design company than go to college.\nFemale: Tell us about your new website . . .\nCallum: I wanted to create something about music. When I looked online, I found very little on how music supports people through difficult times, and how sharing stories about this benefits others, so that's what I've done. There are so many sites for uploading your own songs, or for finding out how to play guitar, or whatever, but I wanted something different.\nWoman: Thank you, Callum!",
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
        transcript: "LISTENING PART 1\nQuestions 1–7\n1\nGirl: I watched three really different films this weekend. The first, called 'Heart', was a romantic film set in New York. It was pretty entertaining, but I couldn't help thinking I'd seen it all before. The next one I watched was called 'Run!' and it was an adventure film. I started watching it again as soon as it had finished, even though I knew what was going to happen the second time around. Finally, I watched 'The Dark', a horror film that I found about as scary as a kids' cartoon.\n\n2\nGirl: How was your trip to the transport museum?\nBoy: It was good, thanks, although the special exhibition we'd gone there to see about aeroplanes was closed – there was a problem with the lights, I think.\nGirl: There are so many other things to see there, though.\nBoy: That's true. I'd never noticed how old some of the cars were before.\nGirl: And some of the trains, too. I spent ages looking at them when I went.\nBoy: Yes, I like them, too, although we didn't get to that part of the museum this time.\n\n3\nBoy: Are you going away with your family this summer?\nGirl: Yes, but we still haven't decided where yet. My brother's suggested going to the ocean rather than the mountains this year, and I'd prefer to do that, too. I love where we usually go – there's a beautiful lake and things – but we've been there quite a few times now. My parents keep talking about going to a big city somewhere. There'd be lots to do there, but I'm not sure it'd be very relaxing.\nBoy: No, probably not.\n\n4\nBoy: Did you go to the show last night?\nGirl: I did. It was great, and they played all their best songs. There were so many people there, and we were all dancing together. I was sure my hat was going to fall off and I wouldn't be able to get it back. I ended up putting it in my bag. I had to hold on to that, too, but I still didn't stop my hairbrush falling out. I had a look for it afterwards, but couldn't find it anywhere.\nBoy: Oh, no!\n\n5\nWoman: Hi, how did your appointment go?\nBoy: Yeah, fine. They didn't need to do anything.\nWoman: Great! So your eyes are all OK then?\nBoy: The sight test is next week, actually. Mum – I was having my teeth checked today.\nWoman: Oh yes, of course. Your dad made the appointments this time, so I couldn't remember who you were seeing first. He should be back from the doctor's any minute.\nBoy: So are you making the dinner tonight then?\nWoman: I am, and it's your favourite – spaghetti!\nBoy: Great!\n\n6\nMan: This is a message for Annabelle. It's Barker's Bookshop calling – you ordered some books from us last week. One of them's come in, but the other two won't be in until Thursday, I'm afraid. The one called 'Make your own Fashion' is taking longer than we expected, and I think we told you that. 'Saving Tigers' is quite an old book, so is harder to find. It's up to you whether you want to get 'The History of Sandham Castle' now or wait until the others come in. OK, bye.\n\n7\nGirl: Do you still play basketball?\nBoy: I do, but I'm ready for a change. I've always fancied trying golf, but there isn't really anywhere near here where you can play. So that's why I've decided on ice hockey instead.\nGirl: They're looking for players at my rugby club – why don't you come for a practice there one day. I mean, you love watching it.\nBoy: I do, but it always seems pretty dangerous to me and you don't really wear anything to protect you, do you?\nGirl: Not really, no. That's why it's so good!",
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
        transcript: "PART 2\nQuestions 8–13\n8\nBoy: Hey, what happened to you? You just disappeared from the theatre yesterday.\nGirl: Erm, well, I did tell the teacher I wanted to leave.\nBoy: What was wrong? I didn't think the play was that terrible?\nGirl: It was nothing to do with that. You know what it's like when you get toothache, though – you can't concentrate on anything. The teacher phoned my mum who contacted the dentist, but they couldn't see me yesterday, even though it was a bit of an emergency. So I had to go this morning.\nBoy: It seems you'll do anything to avoid going to the theatre!\n\n9\nGirl: The party was fun, wasn't it?\nBoy: It was. It was a bit of a shame that everyone was told to bring anything they wanted, rather than making a list of who should bring what.\nGirl: Yes, it certainly meant that lots of people brought the same thing.\nBoy: Not having lots of stuff to choose from doesn't bother me as long as you like what's there, which I did.\nGirl: Me too. I didn't see anyone eating what I brought – apart from us of course.\nBoy: No, but that meant there was more for us.\n\n10\nGirl: Did you see the soccer match last night?\nBoy: Sure did, and although I can't say I was unhappy at the result, it wasn't the most interesting game I've ever seen.\nGirl: They've played better, I agree, but I didn't think they did that badly, especially that guy you really like.\nBoy: He did well, but he was the only one who did. Imagine if he got injured and couldn't play for a few weeks – they'd lose every game.\nGirl: Let's hope that never happens. Anyway, I thought it was a pretty entertaining game.\nBoy: I've seen our school team play more interesting soccer.\n\n11\nBoy: Have you been in the new science building yet?\nGirl: I had a class in there this morning. It's a shame they've used all the stuff for experiments from the old building.\nBoy: Yes, it'd be nice to have new things like that as well as a new building. What do you think of it inside?\nGirl: The colours are nice and those paintings make it look really modern.\nBoy: I don't think we share the same taste in colours and paintings, but I'm really impressed with the design of the outside.\nGirl: I can't think of a building I like the look of more.\n\n12\nBoy: Have you started your blog yet?\nGirl: I've already written five entries and have had nice comments from some readers. That really makes it seem like it was worth doing, despite all the issues I had when I was getting it ready. The website I used said it was easy to create a blog – and maybe it is for someone who's a bit more familiar with IT than I am.\nBoy: Have you put pictures in, too?\nGirl: A few. I think I need more, though, to get it looking as good as some of the other blogs I've seen.\n\n13\nBoy: Are you still enjoying your Chinese lessons?\nGirl: I am, but we always focus on reading and writing. I know they're important, but I want to learn other skills, too.\nBoy: There's loads of stuff online for improving reading and writing, but less for speaking, I guess. It's the same problem with coursebooks – they're good for exercises on grammar and things, but you obviously can't talk to a book!\nGirl: No . . .\nBoy: But lots of people learn Chinese these days, so there must be groups that meet just to practise talking to each other. Why not search for one of those?\nGirl: Hmm, maybe.",
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
        transcript: "PART 3\nQuestions 14–19\nHello, everyone! I'd like to tell you about this wonderful acting club I joined recently. The best thing about it is the teacher. We're really lucky to have someone who's actually quite famous. Her name's Alice Fisher, and she's appearing in a play at the big theatre in town at the moment. She plays a policewoman in that, but you'll probably know her better as the farmer in the series 'Green Valley' that was on last year.\n\nShe's worked as a professional theatre actor for about 10 years. As well as having three years' experience of appearing in serious drama, she's also spent seven years working in comedy productions, so has lots of different talents.\n\nThe sessions are always fun and are split into two sections. In the first part, rather than practising anything to do with movement of the body, we focus instead on improving how to control the voice as an actor. In the second part, we practise our performance skills.\n\nIf you're interested in coming to the drama club, you'll need to know where to come, of course. The club actually hires a room from the university to run the classes. It's much cheaper to do it there than at the college or the acting school. The sessions are on Wednesday evenings.\n\nAt the moment, we're practising for a play, which will be on at the Town Theatre soon. Its name is 'The Passenger' and we're hoping that this latest one will be as popular as the last production the club did, which was called 'Reality'. It was a big success, apparently.\n\nWe've got our last practice for the new play on the thirteenth of July, with audiences able to come and see it from twentieth of July for one week.\n\nThanks for listening.",
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
            explanation: "“our last practice for the new play on the thirteenth of July, with audiences able to come and see it from twentieth of July” —— 13 日是最后一次排练，首演是 7 月 20 日起。"
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: "听一段对女孩 Jasmine（参加飞行体验日、在教练带领下驾驶飞机）的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-3/part-4.mp3",
        transcript: "PART 4\nQuestions 20–25\nInterviewer: Jasmine, you recently went on a flying experience day, and actually flew a plane with the help of a qualified instructor. What made you decide to do this?\nJasmine: A friend of mine tried it a while ago. Even though she wasn't especially positive about it, as she'd been quite frightened, she told me she'd noticed her house while she was up there. That made me want to look for mine, too, and also enjoy a different view of the local countryside. It wasn't like I wanted to fly planes professionally or anything.\nInterviewer: How did you feel at the beginning of the day?\nJasmine: When I saw the aeroplane we'd be using, I couldn't believe that something that size could actually take off with two people in it. The organisation of everything was so efficient, though, that I'd soon forgotten about any doubts I'd had. I'd watched some online videos and flying looked quite easy, so I was confident I could do that well.\nInterviewer: What training did you do before you got in the plane?\nJasmine: We had a session on safety, which needed to be a bit shorter in my opinion, and one on what the different controls do, which I enjoyed. While what we were told was all essential, I don't think the people running the sessions were actually trained teachers, so they didn't really communicate the information very clearly.\nInterviewer: And how was your flying instructor?\nJasmine: She was brilliant. I'd always imagined that flying instructors would be really cool and quiet people. Jana was like that before we took off but quite different in the air. She never stopped chatting and making me laugh by saying funny things – she said afterwards she does it to help people to relax.\nInterviewer: And what about the flight?\nJasmine: It was amazing – one of the most exciting things I've ever done, although I was kind of expecting that. When we landed, it felt like we'd been up there for hours, although it was only about 30 minutes in reality. In some of the reviews on the website, people said they were exhausted afterwards, but it was just the opposite.\nInterviewer: So has this made you want to try other experience days?\nJasmine: Definitely, yes. I had a look at the company's brochure and there are loads I'd like to try. I've never been horse riding, so that's something I wouldn't mind doing. First on my list, though, would have to be driving a sports car, and after that would come deep-sea fishing.\nInterviewer: Thanks, Jasmine.",
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
        transcript: "LISTENING PART 1\nQuestions 1–7\n1\nGirl: I bought a nice coat yesterday.\nBoy: That one you tried on the other day? The long one with a nice belt?\nGirl: I wasn't sure about the buttons on that one – they were very big and looked a bit strange. The new one's got a belt, but it's not a long coat like the other and the buttons are much smaller. It has a fur collar, too, to keep my neck warm in the winter. Don't worry! It's not real fur! That other coat just had a collar like a jacket.\n\n2\nGirl: I'm thinking of starting drum lessons.\nBoy: Really? I thought you wanted to learn the piano like me.\nGirl: I do, but I think it'll be too difficult.\nBoy: It takes time to become good at any musical instrument, but I found it fairly easy. And now I'm pretty good at it. It's time to have lessons on something else.\nGirl: You could come to drum lessons with me.\nBoy: My parents wouldn't be pleased if I practised at home, though. I think the guitar would make a better option, so I'm going for that.\n\n3\nBoy: How's your new apartment?\nGirl: Fine. I've got no complaints about my new bedroom – the one I had before was tiny. The view's not as good now, though. We're not so high up and you can only see it through the windows. It was so nice to be able to sit outside with a drink and look down at what was going on in the street below. There was no big fire in the living room at the old place, though, so where we are now is much warmer.\n\n4\nBoy: Phew! I'm real tired.\nGirl: I'm not surprised if you've had a basketball match today, like you usually do on Saturdays.\nBoy: I've given that up actually. I joined a table tennis club a few weeks ago, which I love, and I couldn't carry on doing both – I just don't have time.\nGirl: That's a shame – you were pretty good.\nBoy: Maybe, but don't forget that I'm a member of the school hockey team too, so I have practice and matches with them every week as well, although I missed the last game due to illness.\n\n5\nGirl: Richard Ellis has won the school poetry competition.\nBoy: Who?\nGirl: Richard Ellis . . . you know, in Mrs Greenwood's class.\nBoy: Oh, is he the one with short, dark hair, who always wears a shirt and tie for school, even though he doesn't need to?\nGirl: I've never seen him wear anything else. I don't know why he doesn't just wear a sweatshirt and jeans, like us. His hair's a bit like mine, though – it comes right down to his shoulders.\nBoy: I know who you mean, and it's quite light actually.\nGirl: That's him!\n\n6\nThere's a great evening's entertainment to look forward to. A new series of nature documentaries starts tonight, and the first programme is all about a year in the life of a family of giraffes. That's coming up after Larry Lane brings us his Chat Show in a minute or two. His guests tonight include the actor Vincent Malibra and explorer, Katarina Lingstrom. Immediately after the news, there's a concert of classical music to enjoy, brought to you live from the National Theatre.\n\n7\nGirl: We need to decide what to buy mum for her birthday.\nBoy: I thought you'd got her a necklace.\nGirl: I saw a lovely one in the jeweller's and was going to get that, but then dad said he'd already bought one for her.\nBoy: There's that book she wants, that she was telling us about yesterday – one of us could get that and the other could get her some flowers. She always loves those.\nGirl: My dance class is near the bookshop, so it'd be easy for me to call in there.\nBoy: OK.",
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
        transcript: "PART 2\nQuestions 8–13\n8\nBoy: Hi, Angela. Waiting for the bus again? It's just as quick to walk into town from here, you know.\nGirl: I know it's strange, especially as it takes 15 minutes to walk here from home, but I work in a shop in town on Saturdays with a friend. She lives further out of town, so she gets the bus in. It's a bit more sociable if we go together.\nBoy: But how do you know which one she'll be on?\nGirl: The buses come every 10 minutes on weekdays, but only once an hour on Saturdays, so I know exactly which one to get!\n\n9\nBoy: Have you seen the video for Lionheart's new song yet?\nGirl: Yes, I watched it last night. It's really not like their other stuff, but I couldn't stop listening to it.\nBoy: Maybe I'll start to like it once I've heard it a few more times. I don't think I've ever seen such an incredible video, though.\nGirl: I think they hired a Hollywood director to make it – you can tell because of the quality.\nBoy: The dancing looked like something from another planet!\nGirl: I thought it was the costumes that created that effect. The routines themselves were quite like other videos I've seen.\n\n10\nGirl: My parents say I can get a new phone for my birthday.\nBoy: Hey, that's great. So which model are you going to choose? Reading what phone buyers have written about their phones is probably more reliable than listening to a sales assistant telling you which one is best. I've heard that some phone companies give stores money for selling more of their phones, especially the newer, more expensive ones, so I'm not sure you could trust what they'd say.\nGirl: That's useful to know. I'll ask my parents what they think is the best way to choose, too.\nBoy: Good idea.\n\n11\nBoy: You don't usually look so happy at the end of a school day.\nGirl: That's because we've usually been given a load of maths problems to do for the next day. Not today, though.\nBoy: But you're good at maths – you usually get high marks.\nGirl: I know, but it still takes time. Anyway, you know I finished that physics project last week?\nBoy: Yeah . . .\nGirl: Well, the teacher was so impressed with it, she gave me a book.\nBoy: Wow, that's great. Next thing you know, they'll make you captain of the football team.\nGirl: That'd be unbelievable, but fairly unlikely as I hardly ever play football.\n\n12\nBoy: How was the weekend away?\nGirl: Good, thanks. I had a really nice time with my cousins – we get on really well, and I always miss them a few days after we come home. My aunt and uncle love having us there too, although he got a bit angry when my brother broke one of their vases.\nGirl: Oh, dear!\nBoy: Fortunately, it wasn't an old one, but I've never heard my uncle shout like that before. Visiting them for only a weekend's a bit cruel in a way. It feels like you've only just arrived and suddenly it's time to go.\n\n13\nBoy: Have you tried the new pool? It's awesome.\nGirl: I went with my family last week. I had a few goes on those tubes with the water in – you know, the ones you can go down really fast and end up in the pool.\nBoy: Oh yes, that was amazing.\nGirl: I think I'd go back just to play on them. Lots of teenagers used the old pool too, but only because they didn't have anywhere else to go. The water in this new one is nowhere near as warm, but it's better in a way because it keeps you moving.\nBoy: True.",
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
        transcript: "PART 3\nQuestions 14–19\nHi everyone. I'm going to tell you about my trip to the new science museum last week. I went with my family and we looked around the whole museum. There are loads of different rooms and each one contains displays about a particular topic. We spent ages looking around the room that was all about 'space' and even longer in the one with loads of stuff on 'energy', which I thought was the best bit.\n\nThe museum's free, but there are also two special exhibitions that you have to pay for. You can't go into the one on 'health' yet because it doesn't open for another couple of weeks. I'd like to go back and see that. The other exhibition on 'computers' was good, though.\n\nAs well as the displays, there are lots of things you can actually do there too. My brother made this fantastic car that went quite fast, using only power from the sun, while I created a rocket that used gas to fly. It went really high!\n\nAs well as the interesting things to see and do, there's a nice shop. My mum and dad let me get something because it was my birthday. There were so many chemistry sets to choose from. It took me ages to decide which one I wanted. They have the usual toys and games, and a few nice books there, too.\n\nYou can also take a tour of the museum with a guide. When we arrived, they said we'd have to wait for at least sixty minutes for the eighty-minute tour because it was so popular, so we decided against it.\n\nIf you want to go, the entrance is on Lockhart Road. I'll spell that for you, it's L-O-C-K-H-A-R-T Road.\n\nThanks for listening.",
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
        transcript: "PART 4\nQuestions 20–25\nWoman: Erik, you've recently returned from a cycle trip with your dad across the USA. Why did you want to do this ride?\nErik: I suppose the usual reason for doing something as mad as cycling five thousand kilometres in just two months is to make thousands of pounds for various charities. We certainly did that, and spent large amounts of time with each other too, which was wonderful. We decided to go, though, because we fancied doing something really different during the summer holidays.\nWoman: What made you choose to go across the USA and not other countries?\nErik: We'd thought about going through Central Asia, but you need lots of different visas, all of which take ages to arrange. With the USA, there was none of that – one country means one visa. It's a shame that I didn't get to practise speaking any other languages, though. I'd wondered about how safe some of the cities would be, but they were fine.\nWoman: How did you feel as you set off?\nErik: I was expecting to be so keen to set off that I wouldn't be able to sit still. When the time arrived, though, my Dad and I both felt pretty calm, which I found quite amazing – I don't think either of us had any worries about not finishing the ride – we were very confident.\nWoman: What was a typical day like?\nErik: Every day was different. Some were good and some were quite difficult, but all were good experience. It wasn't actually how far we rode that made a day good or bad, it was more what happened. Having a long conversation with some of the local people seemed to make us even happier than feeling the sun on our faces.\nWoman: And how did you and your dad get along?\nErik: We've always got on really well, so although we didn't agree about everything on the trip, we were always able to deal with any arguments, which didn't happen often. And although we spoke about a few of the things that are important to us, over the two months we learned it was OK to spend a few hours saying absolutely nothing, too.\nWoman: And have you got plans for doing more cycling?\nErik: I'm in my final year at school now, and I need to do well to get to university, so I wouldn't be the best time for me to go cycling across Australia, or wherever. Rather than just going out on weekend rides, though, I'd much prefer to enter some competitions – over shorter distances of course! I've never tried that before.\nWoman: Good luck, Erik!",
        items: [
          {
            q: "Erik and his dad wanted to do a long cycle ride to",
            opts: ["make money for charity.", "break their usual routine.", "spend lots of time together."],
            answer: 1,
            explanation:
              "筹款确有其事但是 “the usual reason for doing something as mad as cycling five thousand kilometres”，相处时光也只是附带的收获 “spend large amounts of time with each other – which was wonderful”（A、C 错）；真正的动因是 “we decided to go though because we fancy doing something really different during the summer holidays” —— 来点不一样的（选 B）。",
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
        transcript: "LISTENING PART 1\nQuestions 1–7\n1\nWoman: As it's your birthday, you can choose where we eat tonight. Your dad suggested the burger place in town.\nBoy: I love it there and the food's great. I went with Tom's family for his birthday last weekend, though. To be honest, I'm happy to stay in, have a pizza, and watch a film together. Or we could go for a picnic by the river . . .\nWoman: I don't think the forecast's good for this evening.\nBoy: There's no point going if it's going to rain.\nWoman: I'll get a couple of pizzas then.\n\n2\nBoy: How was your morning?\nGirl: OK, thanks. I had Mrs Ellwood for science just before lunch and we did an interesting experiment. You've got her after the lunch break, haven't you?\nBoy: I have. I'm sure it'll be more exciting than the art class I had when you were doing science.\nGirl: Oh, I've got that next – I enjoy it though, not like you! I've got a nice afternoon, actually, as I've got that and then music with Mr Williams.\nBoy: Lucky you! Anyway, have a good afternoon.\nGirl: Thanks – you, too!\n\n3\nGirl: How was your holiday?\nBoy: It was good, actually, but I'm not sure my mum and dad enjoyed it as much as I did.\nGirl: Oh?\nBoy: They still keep saying how much they missed swimming in the sea this year. The river was pretty cold, it's true, but there were very few people there compared to where we usually go – it's hard to get to the sea sometimes because there are so many people on the beach. At least we didn't go camping, which is what dad was suggesting at one point.\n\n4\nBoy: Have you spoken to the teacher about the work experience we're doing next month?\nGirl: I have. He suggested that, as I'm good with my hands, I should try working in a restaurant.\nBoy: You'd be good at that.\nGirl: Maybe, but my mum said that kind of work can be quite stressful.\nBoy: You could come and work at a hairdresser's with me.\nGirl: I think I'd enjoy that, but probably not as much as learning how to fix cars, so that's what I put on my application in the end.\nBoy: Should be good.\n\n5\nBoy: Oh hi Jason, it's Harry. I've just gotten home and realised that I've left something at your place. You know the book we were working from for our homework – it was on the desk in your bedroom. I think the tablet I brought with me may be just underneath it. I thought about it when I was getting ready to leave, but then I started showing you my new jacket and I just forgot. Could you have a look, please, and bring it into school tomorrow? Thanks.\n\n6\nGirl: Some of the paintings in that exhibition really weren't my kind of thing.\nBoy: No, I can't stand paintings that don't actually look like what they're supposed to show. Like that tiger.\nGirl: I thought that one was really original, actually. I know it takes great skill to create a beautiful landscape but people have painted that sort of thing for hundreds of years.\nBoy: True, but that painting of the 18th-century princess was so realistic.\nGirl: I agree, but I prefer paintings that don't just show what you can see.\n\n7\nWoman: Listen everyone. We're going to have a tour of the town this morning before we go into the castle this afternoon. If you get separated from the group, then ask someone how to get to the café and wait for us there, as that's where we'll end up. OK, we're going to set off along the canal that goes behind the castle. You'll be able to see just how high the walls are. There are also quite a few brightly-coloured boats there that people still live in. OK, let's go!",
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
        transcript: "PART 2\nQuestions 8–13\n8\nGirl: Hi Frankie, how was snowboarding?\nBoy: The first few days were great! The snow was perfect and I was learning some great new tricks . . .\nGirl: Don't tell me! You hit a tree and had to stop.\nBoy: That's what happens to some people, isn't it – a broken leg. In my case, it was a lot more boring. My stomach found it hard getting used to the local food, so I had to spend a few days in bed. Then my sister borrowed my board and managed to drop it from the ski lift. It didn't break, but we never got it back.\nGirl: Oh, no!\n\n9\nBoy: The new school library's great.\nGirl: Everything being self-service takes a bit of getting used to – I found it quite useful having someone there to ask if you couldn't find something.\nBoy: True, but the new system works well.\nGirl: It's pretty quiet there, too. I can't concentrate at home because of my little sister, so I always stay now, to get everything done for the next day's lessons.\nBoy: Good idea.\nGirl: Yes, and of course I'd never have the books I needed because I always forget to get them before I went home, which isn't a problem if I stay.\n\n10\nGirl: I like that new clothes shop.\nBoy: Me, too. The one I usually use is so far out of town, I hardly ever go there.\nGirl: Me, neither, and you have to get two different buses.\nBoy: The people who work at the new shop couldn't be nicer.\nGirl: The lady who served me was a bit miserable, actually, but the others seemed OK. It's not too expensive either.\nBoy: Maybe it's because it's only just opened, but I found the range of styles they had was quite narrow.\nGirl: I think the other shop definitely has a bigger variety of things for teenagers.\n\n11\nGirl: What do you think of the new boy, Finnian?\nBoy: He seems pretty cool to me. He certainly knows lots of jokes and funny stories – we could hardly stop him talking at break time, not that we really wanted him to. And he answered at least twice as many questions as I did during the maths class.\nGirl: You're really good at maths too.\nBoy: Maybe – but he also knew a lot about what we were discussing in our groups in the history class. I tried to get him to come to training for the school football team, but I didn't manage to persuade him.\n\n12\nBoy: Has your brother gone away to college yet?\nGirl: Yeah, he left yesterday. I thought I'd be relieved not to have to listen to music coming from his bedroom all evening. I couldn't believe it when tears actually started running down my cheeks last night, and this morning, too, when he wasn't at breakfast.\nBoy: I never knew you two were so close.\nGirl: We weren't. You just get used to someone being there, though, and when they're suddenly not, it's strange, even though I know he hasn't gone hundreds of kilometres away like some students do. He'll probably be back most weekends.\n\n13\nGirl: Are you still having tennis coaching?\nBoy: Yes, but I'm progressing really slowly. The teacher wants me to learn each skill well before we move onto the next. Does your coach do that?\nGirl: Pretty much, yes.\nBoy: Even though I practise between the sessions with my family, I'm sure I'd improve more quickly if someone showed me a few other skills. That's why I need your help. When I watch you play, I can see you doing loads of things I'd like to be able to do, but I forget how you do them as soon as I go home.\nGirl: OK.",
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
        transcript: "PART 3\nQuestions 14–19\nGood morning everyone. I'm going to tell you about the school trip to the farm tomorrow. As I told you last week, you need to wait for the bus by the school gate, so don't go to the bus stop or come straight into the playground like you usually do.\n\nThe farm is providing us all with a nice packed lunch, so there's no need to bring one yourself. It'd be great if you could make sure you've got a drink, though, as it can get quite hot on the bus.\n\nThere are lots of different animals on the farm. You're all going to have a go at brushing the horses just after we arrive there at about 9 a.m. Shortly after this, you'll learn what farmers give lambs to eat, and you'll be able to give them their breakfast, too.\n\nAs well as the animals, the farm has lots of activities students can take part in. We're going to do some climbing on the special wall they have there after lunch, and maybe next time we can try one of the other activities like fishing or playing baseball.\n\nWe'll be setting off back to school at about 3.30 p.m., and will be back here at 4.15, so 45 minutes after the usual school finish time of 3.30. Please could you let your parents know, especially if they usually come to the school to pick you up.\n\nIf you or your parents want to find out more about the farm before we go, you can visit their website and there's loads of information about it on there. I'll give you the website address: it's www dot cafertys dot farm dot com. I'll spell that for you: it's C-A-double F-E-R-T-Y-S dot farm dot com.\n\nOK, see you all tomorrow.",
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
            explanation: "“C-A-double F-E-R-T-Y-S dot farm dot com” —— 老师逐字母拼出 CAFFERTYS，注意双写 F。"
          },
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: "听一段对年轻理发师 Carlotta 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-trainer1/test-5/part-4.mp3",
        transcript: "PART 4\nQuestions 20–25\nMan: Carlotta, you're already a star hairdresser. What got you interested in it?\nCarlotta: When I was a kid, I watched friends getting haircuts and I remember thinking how complicated it seemed. One day, I was watching this animated film. This man was cutting someone's hair, but did it really quickly and made it look so easy. I don't know why, but after that, I took a real interest in it and in the magazines I'd sometimes find around our house.\nMan: So who did you practise your hairdressing skills on first?\nCarlotta: My sister had this fantastic long hair – it looked so nice, and I really wanted to cut it, but of course my parents wouldn't let me. My dad wanted his hair cut really short, so he let me have a go on his before he went to his usual hairdresser's. My mum said it didn't look too bad, but still didn't trust me to cut hers!\nMan: Later on, you studied hairdressing at college. What did your teachers say about you?\nCarlotta: They recognised that the way I cut hair was very natural, which they didn't want to change. I didn't take ages thinking about what I wanted to do, I just did it. They reminded me that I needed to keep chatting – not just when people first sat down – to make it a social experience as well as a haircut.\nMan: You won the Young Hairdresser competition when you were eighteen. How did that feel?\nCarlotta: It felt good afterwards, of course, but not during the competition. I'd entered very late, so it seemed like I'd only just finished reading what I could and couldn't do when I was on stage. The person whose hair I was cutting kept moving, which was annoying, but I knew my ideas gave me a chance of doing well.\nMan: At the moment, you work for a well-known chain of hairdressing shops . . .\nCarlotta: That's right. You might think I'd get to cut the hair of loads of celebrities there, but none seem to come into the one I work in. I get to try so many different things, though, because our customers all want such original styles. I'll never become rich working there, but it's been great.\nMan: What do you plan to do next?\nCarlotta: My idea of starting a training centre didn't get very far – it was too complicated. I want my own hairdressing shop, but in a more fashionable place than where I work now, so hopefully abroad somewhere. I've found these great new skin creams and shampoos I can use there when I do.\nMan: Thanks, Carlotta!",
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
        transcript: "LISTENING PART 1\nQuestions 1–7\n1\nGirl: What's for dinner, dad?\nMan: Vegetable soup and there's some really nice bread and cheese I bought at the market.\nGirl: Nice! Can I give you a hand? I'll cut the vegetables up if you want.\nMan: I've already asked your brother to do that – he's just finishing his homework before he comes down . . . I guess we need that doing now, though.\nGirl: He could lay the table instead – that's fairly quick and easy and I'm sure he won't mind.\nMan: True, or there's always the washing up to do afterwards – he can choose which.\n\n2\nGirl: Did you see Nature Around the World on TV last night?\nBoy: I did. Last week's programme on islands was amazing enough, but seeing rainforests in that much detail was even better. I'm sure they're very difficult places to spend time in, though, I'm not sure I'd want to meet some of the creatures they showed.\nGirl: No, but then the same would be true in most of the places they've filmed.\nBoy: It would, although I like all the animals they filmed in the desert and the atmosphere there would be amazing to experience.\nGirl: I suppose so.\n\n3\nBoy: How are the badminton lessons going?\nGirl: I gave them up a couple of weeks ago, actually. I wasn't making much progress, so I changed to something that goes with my character better.\nBoy: Let me guess! Something to do with IT.\nGirl: You know me so well! I thought about trying something practical, like fixing bikes, because mine's always breaking down. My dad doesn't mind repairing it when it does, though, so I went for writing computer programs instead.\nBoy: I think I'd prefer to learn a new sport but, hey, we're all different!\n\n4\nWoman: Did you get everything?\nBoy: I think so. I got two pizzas like you asked – one with cheese and one with chicken.\nWoman: I said we'd already got those, don't you remember? Anyway, it doesn't matter – I can put these ones in the freezer.\nBoy: The salad was reduced today, so I got plenty of that, and you said we had enough ice cream, so that's everything.\nWoman: I said I didn't think we had any left. Perhaps you got that mixed up with what I said about the pizzas.\nBoy: Oh, maybe.\nWoman: Never mind.\n\n5\nGirl: Hi. I think I left my glasses at your house. I only use them for reading, so I didn't notice I'd forgotten them till now. I was using them in your bedroom when we were looking at that website together on your laptop on your desk. I remember taking them off, though, when we were watching the film in your living room, so it's worth checking on the sofa. I remember I left them on the table by your front door once, but I'm pretty sure I haven't done that again.\n\n6\nWoman: You're late, Kevin. Was the traffic bad?\nBoy: No worse than usual, miss. I set my alarm clock for 7.30 which gives me enough time to have some breakfast and get to school. But this morning, I couldn't find my history essay which I've got to hand in today. It took 10 minutes to remember where I'd left it, then I had to run for the bus, but it left just before I got there. Anyway, I had to walk back home and my mum gave me a lift here\n\n7\nMan: Hi, Lisa – it's dad. Both your mum and I are going to be late home tonight so, there's something I'd like you to do. Your little brother's got some reading practice he needs to do for school tomorrow, but we should be back in time to do that with him. He'll need something to eat, though – there's plenty of bread, cheese and tomatoes. He's got enough clean things for school tomorrow, so there's no need to worry about doing any washing. OK, see you at about seven.",
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
        transcript: "PART 2\nQuestions 8–13\n8\nBoy: That class was fun. I like working in groups like that.\nGirl: I guess it means there are five of you to set up the experiment, so you can get it done in half the time. How much I enjoy it, though, depends very much on who I'm asked to work with. I usually don't get along so well with at least one of the others, which kind of spoils things.\nBoy: I suppose it does.\nGirl: But at least you can solve problems and work out what's happening better if there are five minds thinking about it.\n\n9\nBoy: That was a great museum.\nGirl: If I went again, though, I'd suggest not bothering with that room with those old pots.\nBoy: I liked them – they really helped me to imagine what life was like back then. You seemed to enjoy the shop though – you were in there for ages.\nGirl: I wish I'd taken more money.\nBoy: It gives us a good reason to come back – there was this amazing puzzle of some ancient ruins I really wanted.\nGirl: It was a long way to come to see a museum of that size, though.\nBoy: Yes, I imagined it'd be much bigger.\n\n10\nBoy: I really enjoyed that. I came so close to getting the ball in the net a few times, too.\nGirl: If you all play as well as that in every game, you should start actually beating some of the other teams.\nBoy: I hope so. We've all trained really hard this season, and our new coach has made a big difference. I think I probably played better than usual because Mum and Dad could both get here for once. I'm always really cheered when they do.\nGirl: Well, I'm sure they enjoyed it as much as I did.\nBoy: I hope so.\n\n11\nGirl: What did you think of that poem we read in the literature class?\nBoy: It always takes me a while to work out what old poems like that are about, but that's what I like about them.\nGirl: Me too. It'd be a shame if you understood everything after you'd only read it once.\nBoy: I can't help wondering why the poet made it so long, though.\nGirl: I'm sure it'd be possible to say the same thing in half as many words.\nBoy: It would, and without changing the message of what he wants to say.\nGirl: Absolutely!\n\n12\nBoy: So what do you think of my essay?\nGirl: I think it's OK. The teacher will definitely be surprised by what you chose to write about, but in a good way – it's certainly original.\nBoy: So you think it's ready to hand in then?\nGirl: If I were you, I'd look at the way it's written. You've included plenty of information about the topic and some good examples to support what you're saying, but it's written a bit like a list at the moment. You need to see if you can get it to flow more, so it sounds more natural.\nBoy: I'll try!\n\n13\nBoy: You know that video game you lent me?\nGirl: Yes, have you got it with you?\nBoy: I haven't actually. I put it in my bag last night to bring to school today, but I think my brother saw it and probably wanted to play it, too. I think he took it out and it'll be in his bedroom somewhere now.\nGirl: Oh dear!\nBoy: He didn't know I said I'd give it back to you today. I'm sure he'd be extremely grateful if we could keep it for a couple of extra days.\nGirl: That's OK, no problem.",
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
        transcript: "PART 3\nQuestions 14–19\nListen, everyone. I know some of you are interested in learning to play a musical instrument so I have some information about Saturday morning music classes that are starting this week.\n\nThere are many classes to choose from for a range of different instruments. You can learn anything from the drums to the guitar. The violin teacher the school usually uses can't make it on Saturdays, but why not have a go at the flute if you prefer classical music.\n\nWhen you arrive at the school, you'll need to collect your instruments, you probably know that these are normally kept in the large cupboard next to the technology room but we'll make sure they're all ready for you in the drama room so go straight there, please.\n\nYou'll need to tell your parents about the cost, of course. They can pay in two different ways: if they decide to pay for each individual class, it'll be £3.75, or they can pay per term, in which case it works out a little cheaper at £72.\n\nThere'll be an end of term concert for all students, which will take place on 24th June, and not on 7th July as it says on the school website. You'll be able to play solo, that's by yourself, or with others. Last year, there were several students who joined together in a band and they played together at the concert. This year, though, we'd like to include more people and have an orchestra that students can play in. Family and friends are welcome to come and listen.\n\nIf you or your parents want more information, you'll need to email Mr Driscoll, the music teacher on driscoll at school dot net. I'll spell that for you: it's D-R-I-S-C-O-double-L, at school dot net.",
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
            explanation: "两种付费方式：按次付 “if they decide to pay for each individual class”，或按学期付 72 英镑更划算；笔记问的是 per class 单次价格 → £7.75。（注：书内文稿印 £3.75 为印刷误差，按官方 Key 取 £7.75）"
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
        transcript: "PART 4\nQuestions 20–25\nMan: Lin, you're what's called a vlogger – you put videos that you've made online for people to watch, in your case about environmental issues. How did you learn to do that?\nLin: One of my old school friends was already a vlogger, but her videos were about travel, so she wasn't really at home enough to help. I'm still at university and my department was running these sessions for helping people become vloggers, so I went along to those. There's so much stuff about it online, but I just found it confusing.\nMan: Why did you choose to focus on environmental issues?\nLin: It's just something that I've believed is important for ages and think too little is being done, so I wanted to help. It's not connected to what I'm studying at university, so it wasn't like I got advice from any of my classmates. There were already plenty of people uploading videos about these issues, which was really helpful.\nMan: How did you feel when your videos first became successful?\nLin: I was expecting to only have a few people watching regularly for years. I couldn't believe how wrong I was about this, even though I knew that many people felt strongly about the subject. Making videos for one person or a hundred thousand is the same process, so having such a big following didn't worry me as much as I thought.\nMan: How often should people upload videos if they want to become successful?\nLin: If you're putting videos online daily, then people will soon become bored. I'll also be hard for you to keep coming up with new ideas. If you're uploading them so rarely that people never get interested in the first place, say once a month, that's not going to work either, so aiming for weekly is probably frequent enough.\nMan: What's your latest video about?\nLin: I've just finished a series encouraging more people to use buses and trains rather than their cars, but I'll be moving on to how and why the world is becoming warmer in the next few videos. The most popular ones so far gave people ideas on how to re-use things they usually throw away, like glass and plastic.\nMan: Apart from vlogging, is there anything else you'd like to try?\nLin: I'll love what I do, especially finding out more about environmental topics for new videos, but it's only one way of telling the public about these things. Moving into TV would greatly increase the audience, which of course means more people would be talking about these important issues.\nMan: Thanks, Lin!",
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
