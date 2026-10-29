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
// 听力原文来源：官方 Audioscripts（Tapescripts PDF 页 104-109（书内页 103-108））2026-10-27 逐字转录
        transcript: "Test One. There are four parts to the test. You will hear each part twice. We will now stop for a moment. Please ask any questions now, because you must not speak during the test.\n\nPART 1  Now look at the instructions for Part One.\nFor each question, choose the correct answer. Look at question one.\n\nQuestion 1  One. Where does the man think he left his wallet?\nMan:  Hello, my name's Joe Smith. I'm ringing because I lost my black leather wallet on Monday. I got off the eleven twenty train from Reading and went to the shop at the end of platform two. I bought some sandwiches so I had my wallet then. Afterwards I went to sit in the waiting room. I remember putting my wallet down. I probably left it there because my next train arrived, so I hurried off to get it. If it's handed in, please can you contact me on 07577886.\nNow listen again.\n[repeat]\n\nQuestion 2  Two. What is tomorrow's talk at the Nature Society about?\nWoman:  Do you fancy coming along to tomorrow's Nature Society talk?\nMan:  Yeah, the last one on rivers and the plants around them was very good, wasn't it?\nWoman:  Well, you'll like the next topic too. It's something you're interested in.\nMan:  Ah – so it's about rainforests then?\nWoman:  I knew you'd think that – actually there's a talk on that next month. This one'll deal with something closer to home – wild flowers in parks and gardens.\nMan:  Oh, OK. Not as interesting as jungle wildlife but it still sounds worth going to.\nNow listen again.\n[repeat]\n\nQuestion 3  Three. What will the woman order for lunch?\nWoman:  The menu looks good, doesn't it?\nMan:  Yes. Have you decided what you're going to order? You normally have salad for lunch, don't you?\nWoman:  Yes, I was thinking I might have the tomato soup, or maybe a toasted cheese and tomato sandwich. They both sound nice and I've heard the bread here's really good. They bake it themselves.\nMan:  Look, it says everything on the lunchtime menu comes with fresh bread.\nWoman:  In that case, I'll go for my usual choice.\nMan:  OK, well, I'm going to try the soup.\nNow listen again.\n[repeat]\n\nQuestion 4  Four. How did the woman find out about the exhibition?\nWoman:  Hi Jack. Did you know there's an interesting new exhibition on at the local art gallery? I was looking at the gallery's website recently and I didn't see anything about it. I'm surprised they haven't advertised it more on posters around town either. Anyway, according to what I heard on the radio, it's only on for a couple of days and I think it'll be really popular. I can book tickets online, if you're interested. Let me know as soon as you can.\nNow listen again.\n[repeat]\n\nQuestion 5  Five. What job is the woman's brother doing?\nWoman:  Did I tell you my brother's working at Scooter – that new designer clothes place in town? You know, the one that sells really original jeans and T-shirts?\nMan:  I'm quite jealous! I'd like to work there as a shop assistant myself.\nWoman:  Well, in fact, he wanted to do that, but they only needed a security guard for the shop. So he was given that job instead. He's pleased – and he gets a great discount on all those amazing designer clothes!\nMan:  Cool!\nNow listen again.\n[repeat]\n\nQuestion 6  Six. How will the woman travel to her meeting?\nWoman:  Hi Brian. This is Amanda, Amanda Smith. I'm calling to let you know that I might be a little late for our meeting. They've cancelled my train. It's really annoying actually as the train's the fastest way to get into town. I tried to get a cab, but the queue at the station was so long. It'll be quicker to rush home and get my own car rather than wait for a taxi. So I'll see you soon, hopefully.\nNow listen again.\n[repeat]\n\nQuestion 7  Seven. Which sport has the man stopped doing?\nWoman:  You're doing lots of winter sports this year, aren't you?\nMan:  That's right. Snow-boarding's been a first-time experience for me. It's taken me a while to learn, but now I find it hard to stop!\nWoman:  What else have you tried?\nMan:  Ice-hockey too – I've always enjoyed watching it. It's too fast, though, and I gave it up in the end. Skiing's a bit scary but it's so exciting that I just can't get enough of it. It's a shame it's such an expensive sport to do.\nWoman:  Yes, I know.\nNow listen again.\n[repeat]\nThat is the end of Part One.",
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
        transcript: "PART 2  Now look at Part Two.\nFor each question, choose the correct answer.\n\nQuestion 8  Eight. You will hear two people talking about buying a bicycle.\nWoman:  So have you bought a bicycle yet?\nMan:  I nearly bought one last week – but in the end I didn't really think the salesman I spoke to knew enough.\nWoman:  In our local bike shop? They're usually very helpful in there.\nMan:  Yes. I think he was new. Anyway, maybe I need to do some more research online.\nWoman:  If you look on the internet, sometimes there's too much information. What about talking to my brother who's a professional cyclist? He'd give you some useful ideas without trying to persuade you to buy a particular product like they do in shops.\nMan:  I could do.\nNow listen again.\n[repeat]\n\nQuestion 9  Nine. You will hear a man telling his friend about his Welsh language course.\nWoman:  How are you getting on with your Welsh language course?\nMan:  Not too bad actually. From what other people had told me, I thought the grammar would be really hard, but actually it isn't too bad. The main issue I have to deal with is our teacher – if she spoke more slowly, I'd understand a lot more. I miss so much. Oh well, I'm sure I'll get used to her. Our classes are only an hour long though, so just when I'm getting into the lesson, it's over! Anyway, it's a beautiful language and I'm glad I've taken it up.\nNow listen again.\n[repeat]\n\nQuestion 10  Ten. You will hear a woman telling her colleague about her weekend.\nMan:  Morning! So how was your weekend?\nWoman:  We went to the city for the day, to the new outdoor street market everyone's talking about. It never stopped raining though and we all got very wet. I was happy to leave. Both the kids spent the next day coughing the whole time. That meant we just sat on the sofa watching TV all afternoon, which was something I really needed to do, despite all the arguments about what to watch. We did eventually manage to find a couple of films that everyone would be satisfied with.\nNow listen again.\n[repeat]\n\nQuestion 11  Eleven. You will hear two friends talking about a new restaurant.\nMan:  Have you been to the new restaurant on the High Street?\nWoman:  Yes, I guess it wasn't too bad.\nMan:  I thought the food was pretty good value at least.\nWoman:  It's true they don't charge too much.\nMan:  The service was slow though when I went. The waiter had to apologise.\nWoman:  I don't mind waiting when the food's all freshly cooked. But it was quick enough when I went. That was just it – everything seemed to either be out of a tin or frozen stuff heated up in a microwave.\nMan:  Such a shame, but you're absolutely right – even if it isn't an expensive place to eat.\nNow listen again.\n[repeat]\n\nQuestion 12  Twelve. You will hear two old friends talking at a party.\nWoman:  Oh hi, John, it is you! I thought so – I'd recognise that jacket anywhere.\nMan:  You know it's always been my favourite.\nWoman:  Yes, but I thought you'd have a new one after all these years!\nMan:  Why bother, if it still fits as well as ever? After all, fashion has never interested me that much. I see you have to wear glasses now as well. I'm still not really used to mine.\nWoman:  But they look good on you, particularly now you've shaved your beard.\nMan:  Thanks. Anyway, what have you been doing since I last saw you? You look well.\nNow listen again.\n[repeat]\n\nQuestion 13  Thirteen. You will hear two colleagues talking about a meeting.\nMan:  Where's this afternoon's meeting?\nWoman:  Well, it was supposed to be upstairs, but surely we're not going to have it now that John's off sick?\nMan:  Oh? I've heard we're going to carry on as planned.\nWoman:  I can't believe that. Without John? Oh well. I'm ready for it … I'm doing my presentation and I think everyone'll like it.\nMan:  I'm sure you'll be great! Did it take long to prepare?\nWoman:  To be honest, I spent ages on it. That was fine, but my laptop kept shutting down while I was preparing it. That made me really mad!\nMan:  Oh dear!\nNow listen again.\n[repeat]\nThat is the end of Part Two.",
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
              "两人都觉得价格不贵、服务可以等；问题是 “everything seemed to either be out of a tin or frozen stuff heated up in a microwave” —— 食物不够新鲜，选 A。",
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
        transcript: "PART 3  Now look at Part Three.\nFor each question, write the correct answer in the gap. Write one or two words or a number or a date or a time. Look at questions 14 to 19 now. You have 20 seconds.\nYou will hear a man giving information to people who are starting a one-week singing course.\nMan:  Hello, everyone. I'm delighted you've chosen to do this one-week singing course. Before we start, I'll give you some important information.\nFirst of all, your teachers. As you know, we're running classes in two different singing styles and each has its own teacher. The jazz course will be taught by Robert Park – some of you will remember him from last year. And Susan Brockley will teach you to sing songs from famous musicals. Her surname's spelt B-R-O-K-L-E-Y.\nThe course highlight is the concert for family and friends on Friday. It'll begin at half past eight, but if your guests want to get the best seats to watch you, theatre doors open at eight o'clock.\nOn the night of the concert, we want you to feel relaxed – T-shirts are fine – but we ask that they're blue so everyone looks similar. The traditional colour for concerts is black, of course, but we think that's a bit dark. You'll enjoy performing I'm sure.\nNow for some other information. To find your way around the building, you can always ask your teachers or the security guard, if you need help. There's also a map showing where all the rooms are, which you can get from the receptionist. I'll introduce you in a moment.\nThe lunch break will be at 1 p.m. We don't have a café, I'm afraid. There's a kitchen for preparing food, but there's nowhere to sit and eat there. So, take your sandwiches or whatever to the hall – much nicer, with a view of the garden next door.\nIf anyone's using the public car park, there's a charge. A monthly pass costs £20. As you're only here for a week, it's cheaper to pay daily, which is £3, so that'll only cost you £15 in total. OK?\nSo, any questions?\nNow listen again.\n[repeat]\nThat is the end of Part Three.",
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
        transcript: "PART 4  Now look at Part Four.\nFor each question, choose the correct answer.\nLook at questions 20 to 25 now. You have 45 seconds.\nYou will hear an interview with a man called Mickey Diaz, who is talking about his work as a hairdresser.\nWoman:  Welcome to the careers interview. Today we're talking to Mickey Diaz who'll tell us what it's like to work as a hairdresser. Mickey, why did you become a hairdresser?\nMan:  Both my parents were hairdressers and worked with lots of well-known TV stars but I really expected to do something completely different. It was after college when I was looking for work that a friend said I could help in his hairdresser's shop, so I did, and I ended up staying!\nWoman:  So, what's a normal working day like?\nMan:  Busy! I get in early. We decide who's going to do which jobs each day – it's best if we mix things up – do a few women's cuts, a few men's, some colour. Stopping for a coffee or a rest can be difficult but I always make time for that. I often stay late to prepare things for the next day too, but that's fine with me.\nWoman:  What's the best part of the job?\nMan:  I really enjoy exchanging news with the people who come back regularly for haircuts. Sometimes they want a new style and ask me to be creative. I'm not keen on doing that – I prefer to show people pictures of the latest haircuts and get them to choose one instead.\nWoman:  So, is there anything you don't like about your job?\nMan:  Some hairdressers get upset if customers are rude, but I never let anyone bother me. We have to take health and safety courses which I find extremely dull but I know they're necessary. I'm also responsible for training new colleagues at the shop. I prefer cutting hair – I don't mind sharing my knowledge though.\nWoman:  I see. How does it feel when you've finished a haircut?\nMan:  It's very important to me to get a haircut right but when the customer walks out of the door, the hair's already growing back. I know I won't see that exact same cut again, which is a shame. I usually feel there's something I could do better, so I'm always trying to improve, to keep customers satisfied.\nWoman:  Finally, any advice for people who'd like to become hairdressers?\nMan:  You can study hairdressing at college, but you don't learn as much as you would in a full-time job. People often think hairdressing's badly paid but the money can actually be quite good with tips added. Never forget that you're only as good as your last haircut – a lot of people make the mistake of thinking they've learned all there is to learn – that's rarely true.\nWoman:  Well, Mickey ... (fade)\nNow listen again.\n[repeat]\nThat is the end of Part Four.\nYou now have six minutes to write your answers on the answer sheet.\nYou have one more minute.\nThat is the end of the test.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 2 · 书内页 127-132 = PDF 128-133）2026-10-27 逐字转录
        transcript: "LISTENING PART 1\n\nTest Two. There are four parts to the test. You will hear each part twice. We will now stop for a moment. Please ask any questions now, because you must not speak during the test.\n\nPART 1  Now look at the instructions for Part One.\nFor each question, choose the correct answer. Look at question one.\n\nQuestion 1  One. What has the man forgotten to pack for the trip?\nWoman:  Hi Freddy! All ready for the camping trip? Your backpack looks very full.\nMan:  Well, I don't want to forget my sleeping bag like the last time I went camping. I was lucky then and it wasn't too cold. I hope I've remembered everything this time.\nWoman:  Well, so long as you've got your sleeping bag, plus a torch and walking boots, you'll be fine.\nMan:  Oh dear. I've just realised I've left my torch behind. At least I've got my walking boots. Never mind. I'll probably manage.\nWoman:  You'll be fine.\nNow listen again.\n[repeat]\n\nQuestion 2  Two. What time is the plane expected to depart?\nMan:  This is an announcement for all passengers waiting to travel on the 10.45 flight to Glasgow. Due to poor weather, this flight is delayed and is unlikely to take off until 12.15. All passengers travelling on this flight can collect a special ticket at the information desk, which they can exchange for a drink and a snack at the café. Please note the check-in desk will close at 11.30. We apologise for the delay to your flight and will give you further updates as soon as we can.\nNow listen again.\n[repeat]\n\nQuestion 3  Three. Where did the family go at the weekend?\nMan:  How was your weekend? Were there any tickets left for the play you wanted to see?\nWoman:  Yes, but we decided to do something else in the end. I found a few more options online. We ended up getting some discount tickets to visit a castle. We all enjoyed it far more than the art gallery we went to last time we had a family day out. We're actually thinking of going there again. It's just as much fun as going to see a show at the theatre.\nNow listen again.\n[repeat]\n\nQuestion 4  Four. What are the man and woman going to order?\nMan:  What shall we have to drink? I'm quite thirsty, so I think I'll just have water.\nWoman:  Me, too. Let's get a large bottle to share.\nMan:  Yes, we could do that. Do you prefer sparkling? I always have still.\nWoman:  Oh, I like sparkling water. How about getting a glass of still and a glass of sparkling? (short pause) Actually, have you seen the prices? What about asking for a jug of tap water – it tastes just as good.\nMan:  Especially if they put ice and lemon in it. Good idea.\nNow listen again.\n[repeat]\n\nQuestion 5  Five. Which photograph did the man take?\nWoman:  Your website's great. Did you take all these photos?\nMan:  Not all of them. I included some others that were taken by friends, like this one of the desert. You can tell which are mine because the style's different. I'm interested in water, especially scenes showing rain. Have a look at this one of mine.\nWoman:  Nice! And is this one yours? I love how the water in the lake's like a mirror for the trees.\nMan:  It's beautiful, isn't it? It's actually someone else's work though.\nNow listen again.\n[repeat]\n\nQuestion 6  Six. How does the man suggest his friends should travel to the concert?\nMan:  Hi, it's Neil. Listen, I know I was supposed to give you and Jack a lift to the concert tonight in my car but I'm not going to be able to make it. It's a shame my ticket'll be wasted. Anyway, it's not that far to the concert hall from where you both live. You could always take the underground to Greenoaks station and it's only a short walk from there. I'm sure you and Jack'll be able to take a taxi home afterwards? Anyway, I hope you both have fun. Bye!\nNow listen again.\n[repeat]\n\nQuestion 7  Seven. What is the weather forecast for the north this morning?\nWoman:  Now for an update on the weather. Well, it's looking very different from yesterday in both the north and the south. In southern areas, there'll be some thick fog to begin with, making conditions difficult for people driving to work. That should disappear by around eleven, though. There'll be heavy snow showers, mainly in northern areas, but hopefully these will be over by lunchtime. It'll be calm everywhere for most of the day, but with some strong winds coming in towards the evening.\nNow listen again.\n[repeat]\nThat is the end of Part One.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 2 · 书内页 127-132 = PDF 128-133）2026-10-27 逐字转录
        transcript: "LISTENING PART 2\n\nPART 2  Now look at Part Two.\nFor each question, choose the correct answer.\n\nQuestion 8  Eight. You will hear a boy telling a friend about plans for his birthday.\nWoman:  What are you doing for your birthday?\nBoy:  I'm having a group bike ride and then a picnic in the park. I know it's the same as what we did last year but I don't think that matters. I wanted to have all my mates from college and my football team. But it wouldn't be a good idea to have so many people riding together, so I'll have to choose between them, which is a shame.\nWoman:  I'm sure it'll be fun whoever comes.\nBoy:  You're right. I hate having to make decisions like this. Anyway, you'll come, won't you?\nWoman:  Of course!\nNow listen again.\n[repeat]\n\nQuestion 9  Nine. You will hear two friends talking about a football match they went to.\nMan:  Did you enjoy the match last night? I have to say I thought it was pretty dull.\nWoman:  Oh I don't know – most people seemed to be enjoying it, me included, although there weren't nearly as many people watching as there normally are.\nMan:  The cold weather might be the reason for the low numbers. And the people who were there weren't too happy with some of the things the referee did.\nWoman:  He had some difficult situations to deal with. I didn't think he did too badly actually.\nMan:  Anyway, at least our team won. That's what matters!\nNow listen again.\n[repeat]\n\nQuestion 10  Ten. You will hear a man telling his friend about a skiing holiday.\nMan:  I'm never going skiing again!\nWoman:  Why? You looked like you were having a good time in the photos I saw on the internet.\nMan:  They were taken at the start of the holiday. I was so excited then.\nWoman:  So, what happened?\nMan:  Everything was fine until someone suggested trying one of the more advanced routes. I've never been so scared in all my life. It was too difficult for me and I had to give up half-way – I nearly hurt myself hitting a tree! The others all found this very funny, which made me feel pretty silly.\nWoman:  Oh dear.\nNow listen again.\n[repeat]\n\nQuestion 11  Eleven. You will hear two friends talking about cars.\nMan:  I hear you just bought a new car. How did you decide which one to get?\nWoman:  Well, I often watch that TV show about cars … you know, the one with Ben Clark where they give all sorts of information about different models. They mentioned some useful places to look online where people who've bought new cars give their opinions. I'd always rather see what car owners say than trust adverts or stuff on TV. Anyway, they were all pretty positive about the model I was hoping to get, so I went for it in the end!\nNow listen again.\n[repeat]\n\nQuestion 12  Twelve. You will hear a woman telling a friend about a singing competition.\nMan:  How are things going with preparations for the singing competition?\nWoman:  Well, there are some strong singers this year, so I'm glad picking the winner's not my job. I mean, how do you go about choosing?\nMan:  Have you ever thought about entering a singing competition yourself?\nWoman:  I think it's more fun watching and making comments about everyone else! And anyway, being in charge of the whole thing, I've more than enough to do, I can tell you. I'm spending ages sorting things out, including most evenings. But I love it.\nMan:  I'm sure it'll be great.\nNow listen again.\n[repeat]\n\nQuestion 13  Thirteen. You will hear a woman talking to a friend about her recent move to a city.\nMan:  Are you happy about your move to the city?\nWoman:  Well, my neighbours are very quiet but there's a lot of street noise from all the shops and restaurants. I suppose everything's nearby, so now I can walk everywhere, which means I'm actually fitter than when I lived in the countryside. I hadn't expected that. I do sometimes wonder whether this is the right area for me, but once I've got to know more people, I'll be able to decide if it's the sort of place I'm going to be happy in. Why don't you come round soon?\nMan:  I'd love to.\nNow listen again.\n[repeat]\nThat is the end of Part Two.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 2 · 书内页 127-132 = PDF 128-133）2026-10-27 逐字转录
        transcript: "LISTENING PART 3\n\nPART 3  Now look at Part Three.\nFor each question, write the correct answer in the gap. Write one or two words or a number or a date or a time. Look at questions 14 to 19 now. You have 20 seconds.\nYou will hear a woman called Kelly Robinson talking about her work as a maker of cartoon films.\nWoman:  My name's Kelly Robinson and I make cartoons for a living. I do this on computers and I've been doing the job since I left university. Although I now know almost as much about computing as I do about cartoon design, I actually studied art for my degree.\nI got a job with a major film studio soon after leaving university. It's a great company to work for. The software programmes we use for making cartoons are really good, but it's the people there that make it such a fantastic place to work. Each department has its own special job to do when we're making a cartoon film. For example, the one I'm in works on animals in the story, while others focus on the human characters or the buildings. It's then the director's job to bring everything together.\nI'm always learning new skills to help improve my work. I did a writing course last year and learnt a lot about different types of stories. And I've just started doing acting classes, which are surprisingly useful for understanding filmmaking, even though I don't plan to appear in any films.\nSome companies make cartoons the old-fashioned way using thousands of individual drawings but this takes a long time. Using this technique, it can take about two years to create a full-length film. Compare that to the eight months it takes my company to do the same and you see the advantage of using computers.\nMy next cartoon project will be the first thing I've done that isn't a film for children. It's actually something for a website. After working on so many kids' comedies, it'll be an interesting challenge. … (fade)\nNow listen again.\n[repeat]\nThat is the end of Part Three.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 2 · 书内页 127-132 = PDF 128-133）2026-10-27 逐字转录
        transcript: "LISTENING PART 4\n\nPART 4  Now look at Part Four.\nFor each question, choose the correct answer.\nLook at questions 20 to 25 now. You have 45 seconds.\nYou will hear an interview with a girl called Rosie Banks, who swims in international competitions.\nMan:  This week, I'm joined by swimmer Rosie Banks, who swims in international competitions. Rosie, welcome. So, did you swim a lot when you were very young?\nGirl:  Yes, before I even started school, my dad used to take my brother Joel and me to the pool in town. He just wanted us to do something in our free time that wasn't looking at a screen. Joel was better at swimming than anyone we knew, and I practised as often as possible so I could swim as fast as him.\nMan:  And then you joined a swimming club and started training seriously?\nGirl:  Yes, I was invited to join the club when I was 12. It took an hour to get to their pool. Mum drove me. We had to leave for training early each morning, but we enjoyed chatting on the journey. With all the training and competitions, I couldn't attend school sometimes, which I was unhappy about. I was always much busier than my friends, but I still met up with them when I had time.\nMan:  And now you've had success at the Swim Stars International competition. Tell us about that.\nGirl:  Well, I'd trained hard, and I expected to do well, although winning was still brilliant! Swimming isn't shown much on TV – it's usually famous footballers or tennis stars people love watching – so I couldn't believe people wanted to read and watch interviews with me!\nMan:  So, I imagine it's expensive taking part in international competitions. Do you get help with the costs?\nGirl:  Fortunately, a sportswear company pays for plane tickets, as long as I use their swimsuits, bags and other stuff showing their brand. It'd be great if they also gave me financial support for hotels, as my parents have to spend a lot on that kind of thing.\nMan:  So, you've got a new swimming coach now. What changes has she made?\nGirl:  Well, I'm doing the same regular fitness training. But, thanks to her suggestions about the way I move my arms through the water, I've already seen improvements in my speed. She's also looked at the food I eat – luckily she was satisfied with that. I'm very strict with my diet.\nMan:  And you're going to Spain soon I hear.\nGirl:  Well, I've got a short break first, and then I'm going on a special training course there for the whole summer. I'll work with lots of swimmers I haven't met before. I'm really looking forward to that. I won't do any races but it'll still be hard work.\nMan:  Thanks Rosie.\nNow listen again.\n[repeat]\nThat is the end of Part Four.\nYou now have six minutes to write your answers on the answer sheet.\nYou have one more minute.\nThat is the end of the test.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 3 · 书内页 151-156 = PDF 152-157）2026-10-27 逐字转录
        transcript: "LISTENING PART 1\n\nTest Three. There are four parts to the test. You will hear each part twice. We will now stop for a moment. Please ask any questions now, because you must not speak during the test.\n\nPART 1  Now look at the instructions for Part One.\nFor each question, choose the correct answer. Look at question one.\n\nQuestion 1  One. Why was the man late?\nWoman:  What happened? I was getting worried.\nMan:  Sorry I'm so late. You know I've been having problems with my car. Well, it broke down completely last night so the bus was my only way of getting here, but it took ages.\nWoman:  Did the rain make the journey difficult?\nMan:  Actually that wasn't it. We were moving along quite fast until we got to the traffic lights in the town centre. I don't think they were working properly, and there were long delays before we got moving again.\nWoman:  Oh well, you're here now.\nNow listen again.\n[repeat]\n\nQuestion 2  Two. Why is the main road closed today?\nWoman:  … and in today's local news, the main road in and out of town is closed so traffic is slow. It's best to avoid the area if you're driving. But if you're on foot, it's worth going to have a look at what's going on. They're filming a movie, and people can come and watch. There'll be a really good atmosphere in fact, just like the weekend when the charity bike race came through town. And remember, there's a street party next weekend, and the road will be closed for that too.\nNow listen again.\n[repeat]\n\nQuestion 3  Three. Where do they decide to have the wedding anniversary party?\nMan:  Is there a plan yet for our grandparents' wedding anniversary party?\nWoman:  No, and it's their 50th anniversary so it has to be special.\nMan:  I thought about that smart new restaurant in town. It'd be perfect.\nWoman:  It's a bit far away, though.\nMan:  True. We could always take them on a river cruise, and eat on board.\nWoman:  That's not a bad idea … I'll make the arrangements. It'd be better than having a garden party and inviting their friends over like we did last year.\nMan:  I'll leave it all to you then.\nNow listen again.\n[repeat]\n\nQuestion 4  Four. What does the man decide to order?\nWoman:  Shall we have a look at the menu? What did you have last time?\nMan:  I had chicken and chips, but I think I'll have something different today. I was thinking about the pasta. What about you?\nWoman:  I fancy that too. I had the pizza last time I came here – it was delicious. I can really recommend it.\nMan:  Oh! If it's as good as you say, I'll try it. I think I'd prefer that today actually. Are you ready to order?\nWoman:  Yes, I know what I want. OK then. Let's order.\nNow listen again.\n[repeat]\n\nQuestion 5  Five. Which armchair is the man going to buy?\nWoman:  What do you think of this armchair here?\nMan:  It looks really comfortable and I like the stripes, but I'm looking for one that will match the rest of my furniture.\nWoman:  If I were you, I'd get this plain one; it's a nice size; not too big, not too small.\nMan:  That's true. I like the look of the one over there, with the cushion, but it's too large for the space I have available.\nWoman:  So have you decided?\nMan:  Yes. I'll go for the one you suggested.\nNow listen again.\n[repeat]\n\nQuestion 6  Six. Which concert has the woman arranged to attend?\nMan:  Are you planning to go to any of the concerts at the music festival next month?\nWoman:  Yeah, there's lots of good things on. You know Billy Ryan the folk singer and guitar player? Well, I've got tickets for that. Aren't you going to see the rock band Buzz?\nMan:  That's right.\nWoman:  I saw them recently – they're pretty good actually! Do you fancy seeing something together?\nMan:  There's a jazz band playing on the last day too. We could try that.\nWoman:  I'd rather get tickets for something else instead. I'll see what's available.\nNow listen again.\n[repeat]\n\nQuestion 7  Seven. Which tomatoes will the man use?\nMan:  I'll start making the tomato sauce now. Can you pass me that knife?\nWoman:  Why don't you leave the tomatoes whole?\nMan:  The recipe says to cut them into slices. I suppose these ones are small enough to use as they are though.\nWoman:  The sauce'll taste nicer like that. Just cook them for a long time.\nMan:  I could just open a tin, you know. It'd be far easier.\nWoman:  That's cheating! You said you wanted to do this properly.\nMan:  OK. I'll follow your advice.\nNow listen again.\n[repeat]\nThat is the end of Part One.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 3 · 书内页 151-156 = PDF 152-157）2026-10-27 逐字转录
        transcript: "LISTENING PART 2\n\nPART 2  Now look at Part Two.\nFor each question, choose the correct answer.\n\nQuestion 8  Eight. You will hear two friends talking about doing exercise.\nWoman:  Hi Tom, how are you?\nMan:  Fine thanks, but I need to get more exercise.\nWoman:  You could join a gym. The one at the end of your road's expensive, but it has lots of good machines.\nMan:  I know, but it's when to go. I'm at work all day, often till late. There's a swimming pool near my office, but it's always crowded there. The best option's probably cycling to work. Bikes cost a lot, so I guess I'll end up spending as much as I would on going to the gym, but I think I'll look for one anyway.\nNow listen again.\n[repeat]\n\nQuestion 9  Nine. You will hear two people talking in a restaurant.\nMan:  What did you think of the meal? The soup had an unusual flavour.\nWoman:  I thought it needed more pepper and garlic. But the salmon was wonderful.\nMan:  It took a while to come, but my tuna was gorgeous. Lots of butter and herbs. I'd love to have the recipe. I'm not so sure about the dessert you had though – it looked a bit strange.\nWoman:  I thought it was really nice. In fact I'd say it was my favourite part of the meal. But unfortunately I couldn't eat it all.\nMan:  I'm not a fan of desserts. I'd rather have a bigger main dish.\nNow listen again.\n[repeat]\n\nQuestion 10  Ten. You will hear a woman telling her friend about her neighbours.\nMan:  How are you getting on with your new neighbours?\nWoman:  Well, they always smile and say hello. I think they have a lot of visitors because I hear them chatting and playing music in the evenings.\nMan:  Oh, that's annoying, especially if you need to sleep!\nWoman:  Actually, I don't mind – I can sleep through anything, and they won't be able to complain if I make a noise! But what bothers me is the mess they've left outside – loads of empty boxes from when they moved in. I think I'll have a chat with them, but I don't want to seem rude.\nNow listen again.\n[repeat]\n\nQuestion 11  Eleven. You will hear two friends talking about a new museum.\nWoman:  Have you been to the new history museum in the high street yet?\nMan:  Yes, it's fantastic, isn't it?\nWoman:  There was so much to see. The displays of 19th-century costumes were brilliant. I'm amazed you enjoyed looking at that kind of thing though, especially the fashion stuff. … I really wanted to stay at the museum longer. It's a shame it closes so early. Anyway, I wouldn't mind having another look around, but I'll have to wait until next weekend as that's when I'm not working.\nNow listen again.\n[repeat]\n\nQuestion 12  Twelve. You will hear a man talking to a colleague about a hotel he stayed in.\nWoman:  How was the hotel you stayed in?\nMan:  It was comfortable enough and easy to reach from the station, but it wasn't walking distance from the city centre, which is how it was advertised. It looked closer on the map. It was on a main road, so that was convenient for taxis, but there was lots of traffic. I was worried it'd be noisy in my room at night, but I hardly heard anything.\nWoman:  Would you recommend it for me and my husband?\nMan:  I was in a double room and there was only just enough space. Fine for me, but not really big enough for two.\nNow listen again.\n[repeat]\n\nQuestion 13  Thirteen. You will hear two passengers talking on an aeroplane.\nMan:  We've finally taken off!\nWoman:  I'm so pleased. It's a while since I've flown, but I recently started a new job and the long distances I need to travel for it just make flying a better option than the train.\nMan:  I know what you mean. I do this same journey every month when I visit my family. They live a long way from the capital. I get nervous flying, but it's just so much easier than any other form of transport.\nWoman:  That's absolutely true, but I can never get comfortable in the seat. I like watching movies though to pass the time.\nNow listen again.\n[repeat]\nThat is the end of Part Two.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 3 · 书内页 151-156 = PDF 152-157）2026-10-27 逐字转录
        transcript: "LISTENING PART 3\n\nPART 3  Now look at Part Three.\nFor each question, write the correct answer in the gap. Write one or two words or a number or a date or a time. Look at questions 14 to 19 now. You have 20 seconds.\nYou will hear a tour guide talking about arrangements for a day trip to a place called Gulum.\nMan:  Good morning. You've all booked the trip to Gulum tomorrow, and I'd like to explain the arrangements for what will be a great day out. This is one of our most popular trips so you're sure to enjoy it.\nWe're meeting at eight o'clock in the morning as the bus will go at exactly quarter past eight. This is instead of the usual departure time of eight thirty. The reason for this is that, after picking you up, we've got to collect a number of passengers from other hotels. To get on the bus, please meet at the entrance to the hotel rather than at the reception desk, which gets quite crowded in the mornings.\nSo to the trip itself. Our first stop will be at a magnificent ruin just outside Gulum. It used to be a palace. I'm sure the guide mentioned it during the tour of the ancient theatre, if you went on that yesterday. The atmosphere there's really special, as you'll see for yourselves. Afterwards we'll drive on to the Wakizi Restaurant on the Gulum River for lunch. That's spelt W-A-K-I-Z-I. By the way, do check their menu online – it's fantastic! There'll be plenty of time to take photos while we're there.\nIn the afternoon, we'll stop at Gulum beach where there's a choice of activities to do. One option is to go diving. The variety of fish species on this part of the coast is quite amazing. For those people who like volleyball, we're organising a competition on the beach. Unfortunately, at this time of year, sailing isn't possible, due to the lack of wind.\nWe'll provide towels and beach chairs, but please don't forget the sun-cream as the temperatures are very high – you'll need it even on a cloudy day! The bus … (fade)\nNow listen again.\n[repeat]\nThat is the end of Part Three.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 3 · 书内页 151-156 = PDF 152-157）2026-10-27 逐字转录
        transcript: "LISTENING PART 4\n\nPART 4  Now look at Part Four.\nFor each question, choose the correct answer.\nLook at questions 20 to 25 now. You have 45 seconds.\nYou will hear an interview with a man called James Sweeney who works as a tree-climbing instructor.\nWoman:  I'm talking to James Sweeney, who's a tree-climbing instructor. He teaches people who want to learn for different reasons. How did you get interested in trees, James?\nMan:  I grew up around trees, because my mother was a garden designer. I often spent time in the gardens she worked on, although I wasn't allowed to go up the trees. What really got me into them was that Mom had a friend who was an arborist – someone who takes care of trees – and he offered me a job one summer.\nWoman:  And then you went on a course to learn to climb trees. How was that?\nMan:  Well, I was expecting everyone in the class to be young and fit, because I thought you needed to be strong to climb trees. In fact there were middle-aged climbers, children – even old people! There was obviously special equipment to make climbing safe. We stayed in the trees for hours because it was so much fun!\nWoman:  And then you became a teacher of tree-climbing yourself … What do you enjoy most about it?\nMan:  It's great to be in the open, although not so much in the rain or when it's very hot. And I like working with people, particularly teaching those whose jobs involve having to go up trees, like scientists, for example. There aren't so many of them – most people come because of happy memories of a childhood tree-climbing experience.\nWoman:  You often travel around the USA, too. Why?\nMan:  I live and work in the north-west of this country, and no-one wants to climb trees there in the winter. So I move around. I've climbed trees in every US state except Alaska! And in other countries – there's actually more interest in the subject abroad than here though.\nWoman:  And you like sleeping in trees, I understand. Why's that?\nMan:  It's such a great place to get views of the night sky. People say it must be uncomfortable, but you get used to it – it's not that bad really. You can't wake up late in the trees though – even a tiny bird sounds very loud when it's only a few inches from your head!\nWoman:  You've climbed trees in rainforests too. How is that different?\nMan:  The climbing's more challenging – not because the trees are harder to climb, but because you have to move more slowly. It's an important environment, so you need to be careful not to damage it. There are insects living in the trees too. If you go fast you attract them, and you're more likely to get bitten.\nWoman:  Thanks, James … (fade)\nNow listen again.\n[repeat]\nThat is the end of Part Four.\nYou now have six minutes to write your answers on the answer sheet.\nYou have one more minute.\nThat is the end of the test.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 4 · 书内页 174-179 = PDF 175-180）2026-10-27 逐字转录
        transcript: "LISTENING PART 1\n\nTest Four. There are four parts to the test. You will hear each part twice. We will now stop for a moment. Please ask any questions now, because you must not speak during the test.\n\nPART 1  Now look at the instructions for Part One.\nFor each question, choose the correct answer. Look at question one.\n\nQuestion 1  One. How will the man travel to the city centre?\nMan:  Excuse me, what's the best way to get to the city centre?\nWoman:  Well, it's probably easiest to take a taxi, especially if you've got a lot of luggage.\nMan:  I've just got a light bag. Is there a bus that goes there?\nWoman:  Yes there is, but it takes quite a long route. What about the underground? It's a short walk from here and the trains go every 10 minutes. It'd be faster than a taxi.\nMan:  That sounds perfect. I'll do that. Thanks so much for your help.\nWoman:  No problem.\nNow listen again.\n[repeat]\n\nQuestion 2  Two. What did the girl dislike at the hostel she stayed in?\nMan:  How was your holiday?\nGirl:  Good. The hostel was OK but not great!\nMan:  Oh, I've heard about problems with mice in some of the hostels in the area you visited.\nGirl:  Really? Well, they've obviously done something about that. The thing was, our beds didn't have mosquito nets, so we got bitten almost every night. Even after putting on insect cream.\nMan:  Right.\nGirl:  And then every morning we heard monkeys running across the roof, I didn't mind that at all though – it was like being in a hostel in the jungle!\nNow listen again.\n[repeat]\n\nQuestion 3  Three. What is the man going to order for lunch?\nWoman:  What are you going to order, then?\nMan:  Let me see … (slight pause) I think I'd like the salmon.\nWoman:  You're so boring I knew you'd say fish! You never try anything different. I'm having pizza – they make them really thin and tasty here.\nMan:  Yes, my sister had one last time we ate here – she said it was great!\nWoman:  How about the curry? That's excellent, I believe.\nMan:  Mmm. Nice idea, but I've heard it's very spicy. I've made up my mind. I'll have what I always have!\nWoman:  (laughs) Of course!\nNow listen again.\n[repeat]\n\nQuestion 4  Four. What sport would the woman like to try?\nWoman:  I've decided to take up a new sport. There are lots of classes starting at the sports centre near the golf course.\nMan:  What sport are you thinking of doing?\nWoman:  Well, I did consider golf. When I looked at the cost though, I realised it's way more than I can afford. Anyway, I'm not that good at racket sports but I wouldn't mind giving badminton a go. You need to be so strong to play tennis.\nMan:  I might do a new sports class too.\nWoman:  Hey! Come along with me.\nNow listen again.\n[repeat]\n\nQuestion 5  Five. Which book is the man reading?\nWoman:  What's the book you're reading about?\nMan:  It's a novel by one of my favourite writers. A lot of his books are based on his experiences flying planes around the world. This one's set at sea – a guy who crosses the Pacific Ocean on his own and all the challenges he has to deal with. I've heard he's working on a new one at the moment about an astronaut, who goes to the moon and can't get back. It sounds interesting. Anyway, this one's really exciting.\nWoman:  Sounds cool.\nNow listen again.\n[repeat]\n\nQuestion 6  Six. Where does the man suggest going at the weekend?\nMan:  Hi Sue. It's Matt. Thanks for your message. I think it's a great idea to go out for the day at the weekend. You mentioned going for a walk on the beach. I've just looked at the weather forecast though and there might be a storm coming. There's a new art exhibition on at the museum – definitely worth seeing, or so I've heard. I wondered about going to the cinema, and had a look at what's on. There's nothing very exciting this weekend. Anyway, let me know what you think. Bye!\nNow listen again.\n[repeat]\n\nQuestion 7  Seven. How much is the latest smartphone in the store today?\nMan:  At ABC's phone store, we've got some fantastic offers this week. For an amazing £599, the most up-to-date smartphone is now available. It's got a great camera and the biggest memory ever. But hurry, this offer is only on for a few days. If you wait till Monday, it'll be back to its usual price of £699. If either of these prices is more than you can afford, there's always last year's model which is just £499. But don't delay, when they're gone, they're gone. Come early to avoid disappointment.\nNow listen again.\n[repeat]\nThat is the end of Part One.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 4 · 书内页 174-179 = PDF 175-180）2026-10-27 逐字转录
        transcript: "LISTENING PART 2\n\nPART 2  Now look at Part Two.\nFor each question, choose the correct answer.\n\nQuestion 8  Eight. You will hear a brother and sister talking about a gift for their cousin.\nMan:  So what do you think we should give our cousin Lucy for her birthday? She's just moved into her new apartment.\nWoman:  I think she'd like a microwave. In fact, I've already had a quick look online and seen a few special offers.\nMan:  Shall we go and have a look in the big department store in town?\nWoman:  What for? It's likely to be more expensive. And besides, it weighs so much; can you imagine us trying to take it on the bus?\nMan:  OK, but we'd better hurry up and order online, or they might not have any left.\nNow listen again.\n[repeat]\n\nQuestion 9  Nine. You will hear two colleagues discussing their holiday travel plans.\nWoman:  I've finally decided on my holiday plans. What about you?\nMan:  Well, actually, I'm going to Greece next week. And you?\nWoman:  We're off to the coast of Ireland in a month's time.\nMan:  Going by car and the ferry again?\nWoman:  Yes.\nMan:  You must love it – you go there every holiday!\nWoman:  I do. And this time we're going for a fortnight, not just a week. So that's exciting.\nMan:  Wouldn't it be better if you flew? You wouldn't waste so much time getting to where you're going.\nWoman:  We like to be able to get around easily once we're there.\nNow listen again.\n[repeat]\n\nQuestion 10  Ten. You will hear a man talking to a friend about a fitness training session.\nMan:  Hi Joanna. I'm afraid I can't make today's fitness training session.\nWoman:  Oh? Are you OK?\nMan:  Well, I'm not too bad. I had this really awful cold, which took about a week to get rid of. Fortunately it's over now. But my doctor told me to take things easy anyway – I don't know if I mentioned it to you – I need to have an operation on my foot on Friday. It's nothing serious, though. I'll be back at fitness training very soon.\nWoman:  Oh good! Well, you take care then. See you.\nNow listen again.\n[repeat]\n\nQuestion 11  Eleven. You will hear two friends talking about a play they've just seen.\nMan:  That play was really great, wasn't it?\nWoman:  I thought the second half was a bit less interesting than the first. You could predict exactly what was going to happen.\nMan:  Really? I wasn't sure how it would end. The actors were excellent though, weren't they?\nWoman:  Well actually I expected the performances to be a lot better. I must say though the costumes were brilliant.\nMan:  I think you're a bit hard to please when you go to the theatre, so why don't you choose the next play we see?\nWoman:  OK, well, I hope you'll like what I choose!\nNow listen again.\n[repeat]\n\nQuestion 12  Twelve. You will hear two friends talking about a film and its soundtrack.\nMan:  What are you listening to on your phone?\nWoman:  The soundtrack to that film, Smash. Have you seen it?\nMan:  Not yet.\nWoman:  I've got it – we could watch it together. It'd be a nice thing to do after a hard week of work.\nMan:  Cool. I'm free on Friday.\nWoman:  I mean, the film's aimed at kids, but I think you'll like it. The music's definitely popular with a much wider range of people. Some of it's good old-fashioned jazz and soul, but it's got a sound that makes you want to get up and move. It's definitely as good as the film.\nNow listen again.\n[repeat]\n\nQuestion 13  Thirteen. You will hear two friends talking about the news.\nMan:  Why are you always looking at your laptop?\nWoman:  I'm checking what's happening in the world. I make sure I do it every morning, before anything else.\nMan:  So do I. I need to for my job. But I much prefer reading a real newspaper.\nWoman:  But online I can focus on what I'm really interested in, rather than all the stuff about celebrities and sports stars. I just don't care.\nMan:  There's a lot of that, but I must admit I always enjoy reading about their lives.\nWoman:  Do you? Well, there's actually more about that sort of thing online.\nNow listen again.\n[repeat]\nThat is the end of Part Two.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 4 · 书内页 174-179 = PDF 175-180）2026-10-27 逐字转录
        transcript: "LISTENING PART 3\n\nPART 3  Now look at Part Three.\nFor each question, write the correct answer in the gap. Write one or two words or a number or a date or a time. Look at questions 14 to 19 now. You have 20 seconds.\nYou will hear a guide giving some information about a walk in the countryside.\nMan:  Welcome, everyone. I'm Mike, your guide on today's walk in the beautiful countryside here.\nI'm sure you'll want to know how long the walk will take. Well, there are two possible routes, one of which takes four hours, and the other five. We'll be taking the longer one, as it has fewer hills. We'll be at our destination by around two.\nRight, things to be careful of. It's a fairly easy route, and there are good paths. There are some steps to climb in some parts, but in this dry weather you won't slip. Please look out for bikes, though. Cars aren't a problem, as our route avoids public roads.\nI hope you've all remembered to bring lunch with you, as the café at the visitor centre we'll pass is closed for repairs. Instead, I've picked a great place to eat by the lake. We'll also have a shorter break at the waterfall, so you can take photos.\nFor people who are interested in wildlife, there's plenty to see. You'll be pleased to know that there are lots of butterflies at this time of year. The forest is famous for its frogs, but they stay hidden away during the daytime unfortunately.\nAt the end of our walk, I'm afraid you won't find a shop selling souvenirs, or anything like that. There is a castle, though. It's not very big, but it is interesting, and a nice place to rest after a long walk!\nFinally you'll want to get back to where we started! There used to be a railway station in the area, but it's been many years since a train went through there. There's a bus service, although you may have to wait a while. A taxi driver will never come this far out of town, so that's really the only option.\nRight, let's go!\nNow listen again.\n[repeat]\nThat is the end of Part Three.",
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
// 听力原文来源：官方 Tapescripts（标准版1 Test 4 · 书内页 174-179 = PDF 175-180）2026-10-27 逐字转录
        transcript: "LISTENING PART 4\n\nPART 4  Now look at Part Four.\nFor each question, choose the correct answer.\nLook at questions 20 to 25 now. You have 45 seconds.\nYou will hear an interview with a young poet called Laura Dickson.\nPresenter:  Laura Dickson, you've already had two books of your poems published. How did you become interested in poetry?\nLaura:  Well, my dad loves literature so there were always lots of poetry books on the shelves around the house. I used to spend hours looking at them. I'm pleased it happened that way, because there needs to be more time spent on it at school. I think students would enjoy it.\nPresenter:  And how did you decide to turn your interest into a career as a professional poet?\nLaura:  I started doing some classes in journalism. I showed my poems to the woman running the course. She was a well-known reporter on a national newspaper, and she suggested that I enter a poetry competition. I did, and two months later found out I'd come first. That's when I knew I wanted to do this full-time.\nPresenter:  So, I hear you've just finished a new book of poems. What's it about?\nLaura:  You never exactly know what poems are going to be about until you start writing them, and my previous books have included my thoughts about architecture – ancient and new. In this one, though, I focus on connections with the people I'm close to. I actually started out with the idea of writing about global warming and the environment, which is very different to what I produced in the end.\nPresenter:  Your poetry's very modern. Do you read poetry written a long time ago?\nLaura:  Yes, I do. The words and style are often very different from modern English. But you soon notice how carefully the poems have been put together. I think they took more skill to write than many modern ones do.\nPresenter:  And you've also started teaching poetry at a university recently. How's that going?\nLaura:  I'm certainly enjoying it, even if I'm not always sure how much my students are actually learning. Thankfully the other teachers have a lot more experience than me and are happy to share their ideas. I was warned about how much preparation there'd be, so that wasn't too much of a shock.\nPresenter:  And what are your plans for the future?\nLaura:  Well, there's a poetry festival soon, and the organisers have asked me to read my work at it. I'm hoping to turn some of my previous work into songs – after all, hip-hop and rap are just poetry with a tune. New poems come into my head all the time too – I'd get worried if I had to stop writing because I'd run out of ideas.\nPresenter:  Thank you, Laura … (fade)\nNow listen again.\n[repeat]\nThat is the end of Part Four.\nYou now have six minutes to write your answers on the answer sheet.\nYou have one more minute.\nThat is the end of the test.",
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
  // 册2（B1 Preliminary 2, 2021）：听力原文 2026-10-27 按官方 Tapescripts 逐字转录注入；
  // 答案已对照书内 Listening key（T1 PDF 104 / T2 PDF 125 / T3 PDF 146 / T4 PDF 169）逐题终验；
  // P1/P2/P4 题干+选项已按官方试卷页（T1 PDF 21-26 / T2 PDF 39-44 / T3 PDF 57-62 / T4 PDF 75-80）逐字重建，
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 1 · 书内页 103-107 = PDF 104-108）2026-10-27 逐字转录
        transcript: "LISTENING PART 1\nTest One. There are four parts to the test. You will hear each part twice. We will now stop for a moment. Please ask any questions now because you must not speak during the test.\n\nPART 1  Now look at the instructions for Part One.\nFor each question, choose the correct answer. Look at question one.\n\nQuestion 1  One. What has the woman left behind?\nMan:  Our queue for the check-in's over there. Have you got your passport ready?\nWoman:  Mine's in my backpack, with my books and phone. ... Oh no! I don't believe it.\nMan:  What! You haven't left your passport at home, have you?\nWoman:  I know I forgot it once, but I'm more careful now. It's that guidebook I bought last week. The one I told you about? I thought I'd put it in my backpack with my phone and stuff, but I guess I didn't.\nMan:  Perhaps you left it on the kitchen table.\nNow listen again. [repeat]\n\nQuestion 2  Two. Which T-shirt does the boy want?\nBoy:  Mum, when you're in town, can you get me that T-shirt I told you about? It's in the sale at the T-shirt shop on the ground floor of the shopping centre. It's black and white and divided into two parts. The top part has black and white stripes, and there are stars on the white parts. The bottom half of the T-shirt has black circles on a white background. They've got lots of similar designs in the store, so please check you've got the one I want. Thanks Mum!\nNow listen again. [repeat]\n\nQuestion 3  Three. How did the woman book tickets for the show?\nMan:  Did you get tickets for the show?\nWoman:  Yes, finally! It's really popular so there were long queues of people waiting to buy tickets outside the theatre.\nMan:  So how long did you have to wait to get them?\nWoman:  Well, I stood there for a while and then gave up and went home. I had to call the theatre as their website wasn't working when I tried on my laptop – too many people trying to use it, I suppose. Luckily, I managed to get tickets anyway, and quite good seats.\nNow listen again. [repeat]\n\nQuestion 4  Four. Why is the train to Histon delayed?\nWoman:  There will be a delay to the eighteen-forty service to Histon due to bad weather in the surrounding area. Last night's heavy rain has cleared, but the strong winds we're experiencing at the moment mean trains are moving along the railway line at reduced speeds. Expect the service to be approximately one hour late. The forecast is calmer for the rest of the evening, though there is a possibility of snow on higher ground. Fortunately, this is unlikely to affect services to Histon.\nNow listen again. [repeat]\n\nQuestion 5  Five. Where are the tourists most likely to see a tiger?\nMan:  Welcome to today's tiger tour. This is one of the best places to see wild tigers, so hopefully we'll manage to see some. A good time of year to see them is when temperatures start to rise, because they spend more time drinking at water holes such as lakes. It's too early in the season for this yet, so our best chance is in the open spaces where they hunt. It's much more of a challenge to see them in the forest – their stripes help them hide among the trees.\nNow listen again. [repeat]\n\nQuestion 6  Six. Which film will they go and see?\nWoman:  How about going to the cinema tonight? Jack Leon's new movie's on.\nMan:  Oh, the one about that detective solving a murder?\nWoman:  Yeah, and he's pretty good too! There's that or a science-fiction movie, but you know how I feel about those.\nMan:  I know ... they're hardly your thing. Well, how about this nineteenth-century drama? Look.\nWoman:  Yeah, we could see that, but it looks a bit serious. I think my first suggestion looks more interesting, to be honest.\nMan:  OK. Let's do that then. Let's see the seven o'clock show.\nWoman:  Sure.\nNow listen again. [repeat]\n\nQuestion 7  Seven. How did the man travel to work?\nWoman:  Hi Chris, it's pouring down! You look really wet. Did you cycle to work today?\nMan:  Well, I wanted to, but my brakes need fixing and I haven't had time to deal with them yet.\nWoman:  Couldn't you come by bus?\nMan:  They aren't always reliable from where I live, I think I'll get one home, though, if it's still raining later. It took me forty minutes on foot – hopefully I'll be back on my bike again soon.\nWoman:  Well, according to the forecast, it's going to rain all day today.\nNow listen again. [repeat]\nThat is the end of Part One.",
        items: [
          {
            q: "What has the woman forgotten?",
            image: "/images/pet/listening/standard2/t1-l-q1.png",
            answer: 2,
            explanation:
              "她把上周买的旅行指南和手机一起放进背包，结果发现根本没装 —— “I thought I'd put it in my backpack with my phone and stuff, but I guess I didn't”，忘带的是旅行指南，选 C。",
          },
          {
            q: "Which T-shirt does the boy want?",
            image: "/images/pet/listening/standard2/t1-l-q2.png",
            answer: 2,
            explanation:
              "“The top part has black and white stripes, and there are stars on the white parts” —— 黑白条纹、白色部分带星星的那件，选 C。",
          },
          {
            q: "How did the woman book her theatre tickets?",
            image: "/images/pet/listening/standard2/t1-l-q3.png",
            answer: 0,
            explanation:
              "剧院外排队的人太多，她放弃排队，网站也出不了票，最后只好打电话订票 —— “I had to call the theatre as their website wasn't working”，选 A。",
          },
          {
            q: "Why was the train delayed?",
            image: "/images/pet/listening/standard2/t1-l-q4.png",
            answer: 1,
            explanation:
              "“the strong winds we're experiencing at the moment mean trains are moving along the railway line at reduced speeds” —— 大风导致列车降速行驶而晚点，选 B。",
          },
          {
            q: "Where are the tourists most likely to see tigers?",
            image: "/images/pet/listening/standard2/t1-l-q5.png",
            answer: 1,
            explanation:
              "老虎去水边喝水的季节还没到，“our best chance is in the open spaces where they hunt” —— 开阔地带最有可能看到老虎，选 B。",
          },
          {
            q: "Which film will they see?",
            image: "/images/pet/listening/standard2/t1-l-q6.png",
            answer: 0,
            explanation:
              "女士不喜欢科幻片，又嫌年代剧太严肃，“I think my first suggestion looks more interesting” —— 最终去看她的首选：侦探破案片，选 A。",
          },
          {
            q: "How does the man get to work?",
            image: "/images/pet/listening/standard2/t1-l-q7.png",
            answer: 2,
            explanation:
              "想骑车但刹车还没修，公交又不可靠，“It took me forty minutes on foot” —— 步行去上班，选 C。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-1/part-2.mp3",
// 听力原文来源：官方 Tapescripts（标准版2 Test 1 · 书内页 103-107 = PDF 104-108）2026-10-27 逐字转录
        transcript: "LISTENING PART 2\n\nPART 2  Now look at Part Two.\nFor each question, choose the correct answer.\n\nQuestion 8  Eight. You will hear a husband and wife talking about keeping fit and healthy.\nMan:  So, shall we pay for another year's gym membership?\nWoman:  Definitely! I'd like to carry on playing badminton and you enjoy swimming. It's a nice thing to do after work, isn't it?\nMan:  I agree. And maybe we should have our main meal earlier in the evening, rather than so late at night. What do you think?\nWoman:  It's worth trying. We're always hungry after the gym.\nMan:  And it's not good to go to bed with a full stomach. It's a shame we can't stay up later, but we've both got to get up so early for work every day.\nWoman:  I know.\nNow listen again. [repeat]\n\nQuestion 9  Nine. You will hear two friends talking about the woman's work.\nMan:  I heard there's a new boss at your company. How's it going?\nWoman:  Well, I wasn't exactly delighted when I heard about all the changes she was going to make – like moving the office around, giving people more responsibilities. It's taken me a while to get used to the situation. But I have. I mean, I've got to, if I want to stay there, which I do. And I'm hoping to become a manager myself in the next six months, which would mean I'd have to work longer hours, of course. But that doesn't bother me!\nMan:  Well, good luck.\nWoman:  Thanks!\nNow listen again. [repeat]\n\nQuestion 10  Ten. You will hear a man telling a friend about his holiday.\nWoman:  How was your holiday?\nMan:  Fantastic! We went to see some ancient ruins. I thought they were all in the middle of the jungle but the ones we visited were right by the sea – the colour of the water behind them was gorgeous. The thing I hoped we'd be able to do was climb and stand on the top like you see people doing in photos. The ruins look even higher in real life – incredible. But I knew we wouldn't be able to go up them, as too many tourists have damaged the place over time, which is a shame.\nNow listen again. [repeat]\n\nQuestion 11  Eleven. You will hear two friends talking about doing a foreign language course.\nWoman:  Shall we take Japanese classes before we go to Japan next year?\nMan:  Good idea, but we wouldn't be in the same class – you already speak a bit and I know nothing.\nWoman:  Well, it's a long time since I studied Japanese, and I've forgotten almost everything. I'd be happy to start again.\nMan:  OK, if you don't mind. Have you found any courses?\nWoman:  There's one at the local college. It lasts three months.\nMan:  That's more than I was expecting.\nWoman:  You have to take lots of classes before you can say much in another language. Anyway, let's see if other places have courses.\nNow listen again. [repeat]\n\nQuestion 12  Twelve. You will hear two people talking about a music festival they're organising.\nWoman:  I think we're ready for the start of the music festival next month, so everything should be OK, as long as it doesn't rain.\nMan:  Well, we'll just move things under cover if the forecast's bad – we can use the hall instead of being outside.\nWoman:  True. We haven't sold as many tickets as I'd expected. We need to get a bigger crowd.\nMan:  So we'd better focus more on advertising the event then. By the way, have you managed to find a band to replace the one which cancelled?\nWoman:  Yeah – I haven't heard them play live, but I'm sure they'll be fine.\nNow listen again. [repeat]\n\nQuestion 13  Thirteen. You will hear two friends discussing an article about air pollution.\nMan:  Did you read that article about pollution? The one which says that some cleaning products are creating as much air pollution as traffic does?\nWoman:  Yeah! It's quite shocking. I don't understand why we haven't heard about this before. We're always told cars and trucks are getting 'greener' so they don't damage the environment, but from what I read it seems there are other things polluting our air – stuff we use indoors can affect our health too. The article says we should start using safer products for cleaning – if they make them available, of course.\nMan:  Yeah, exactly. Let's hope they do.\nNow listen again. [repeat]\nThat is the end of Part Two.",
        items: [
          {
            q: "You will hear a husband and wife talking about keeping fit and healthy. What do they both agree to change?",
            opts: ["their sleep routines", "their eating habits", "their exercise programmes"],
            answer: 1,
            explanation:
              "先生提议把正餐提前、别吃饱了睡，“maybe we should have our main meal earlier in the evening”，太太说值得一试 —— 同意改变饮食习惯，选 B。",
          },
          {
            q: "You will hear two friends talking about the woman's work. How does the woman feel?",
            opts: ["She's pleased to have a new boss.", "She's excited about some recent changes.", "She's more positive than she was before."],
            answer: 2,
            explanation:
              "起初对新老板的调整并不乐意，“It's taken me a while to get used to the situation. But I have”，如今已适应、还想升经理，加长工时也不介意 —— 比以前更积极了，选 C。",
          },
          {
            q: "You will hear a man telling a friend about his holiday. How did the man feel when he visited some ancient ruins?",
            opts: ["surprised not to be able to climb them", "disappointed by their location", "impressed by their size"],
            answer: 2,
            explanation:
              "他原想着能登上遗址顶部，实际不让爬，但 “The ruins look even higher in real life” —— 古迹的规模最让他震撼，选 C。",
          },
          {
            q: "You will hear two friends talking about doing a foreign language course. What do they agree about?",
            opts: ["which level of course to take", "where to take the course", "how long the course should be"],
            answer: 0,
            explanation:
              "他零基础、她学过但几乎全忘了，两人上不同级别的班各得其所 —— “we wouldn't be in the same class – you already speak a bit and I know nothing”，讨论的是该选什么程度的课程，选 A。",
          },
          {
            q: "You will hear two people talking about a music festival they're organising. They're both worried about",
            opts: ["how good the music will be.", "how many people will attend.", "how suitable the weather will be."],
            answer: 1,
            explanation:
              "票卖得不如预期，两人都担心到场人数 —— “We haven't sold as many tickets as I'd expected. We need to get a bigger crowd”，决定加强宣传，选 B。",
          },
          {
            q: "You will hear two friends discussing an article about air pollution. The woman is",
            opts: ["surprised by some new information.", "annoyed by the writer's attitude.", "confused by all the details."],
            answer: 0,
            explanation:
              "清洁用品竟能造成和交通相当的污染，“It's quite shocking. I don't understand why we haven't heard about this before” —— 女士觉得信息令人惊讶，选 A。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段关于团体自行车骑行的介绍，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard2/test-1/part-3.mp3",
// 听力原文来源：官方 Tapescripts（标准版2 Test 1 · 书内页 103-107 = PDF 104-108）2026-10-27 逐字转录
        transcript: "LISTENING PART 3\n\nPART 3  Now look at Part Three.\nFor each question, write the correct answer in the gap. Write one or two words or a number or a date or a time.\nLook at questions 14 to 19 now. You have 20 seconds.\nYou will hear a woman talking to some cyclists about a group bike ride.\nWoman:  Hi everyone. I'm here to tell you about the next group activity we've planned – a bike ride. After I've given you the details, feel free to ask questions. We'll need to know how many people are coming before Friday of next week. We considered doing a ride on a Saturday, but the roads are always busy, so we're going to do a Sunday ride. We might try other days in the future.\nSo, how far are we going to cycle? We originally planned to do 25 kilometres, but decided that 21 kilometres would be enough. Eventually we hope to get fit enough to do 30 kilometres.\nThe bike ride will start at 10 a.m. under Skerten Bridge – that's S-K-E-R-T-E-N. You can check where it is on a map. Please don't be late as we won't be able to wait for you.\nWe've chosen this route because the scenery's really beautiful and it gives us a chance to take a break just in front of the castle. From there, the views over the sea in the distance as you eat your lunch are amazing and it's really peaceful there. I think you'll love it.\nTalking about lunch, we thought a picnic would be nice. The route will let us pass a great shop, famous for its cakes. You can buy some there for the picnic, but I also ask you to pack some sandwiches or other snacks in your bag before we set off on the ride.\nAlthough the weather's getting warmer now, make sure you have gloves on. They'll protect your hands from the wind. I don't expect we'll need raincoats, and you could wear shorts if you want to.\nNow, are there any questions?\nNow listen again. [repeat]\nThat is the end of Part Three.",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 1 · 书内页 103-107 = PDF 104-108）2026-10-27 逐字转录
        transcript: "LISTENING PART 4\n\nPART 4  Now look at Part Four.\nFor each question, choose the correct answer.\nLook at questions 20 to 25 now. You have 45 seconds.\nYou will hear an interview with a wildlife photographer called James Thomson who has won a photography competition.\nWoman:  Today, I'm joined by 20-year-old James Thomson, who's won a national photography competition with his spectacular photograph of a fish jumping out of the water. James, how did you first become interested in photography?\nMan:  Well, I grew up enjoying the countryside and wildlife. My mother's a painter, and often took me to art exhibitions so I think a love of being creative comes from her. And one day my uncle bought me a camera, and from then on I started taking pictures. My mum was really pleased.\nWoman:  And where did you take your prize-winning photo?\nMan:  Actually, in a park in my city, where my friends and I used to play. It's not the most attractive place, even though it's really improved a lot recently and the lake there I took the picture was made bigger. You'd be amazed how much wildlife there is, and I've managed to get some fantastic pictures there over the years. Everyone seemed to like them.\nWoman:  How did you feel about winning the competition?\nMan:  Honestly, I was shocked – I'd never entered one before. My parents were really excited because they got the phone call saying I'd won. The best bit was being introduced to a well-known guy who takes pictures for an international magazine – I got lots of tips, and I've gone on to do more competitions since.\nWoman:  Great! So, what makes a good photo, in your opinion?\nMan:  Well, I hope my picture shows that wildlife is still around even in the middle of a city. And that's what I like. Photos are more than just pretty pictures. They should be worth looking at, and help you learn things about life. So I'm always ready because you never know what you'll see!\nWoman:  True! Why's photography such a popular hobby?\nMan:  Well, many people have this idea of a photographer alone out on a mountain somewhere, but actually, there are lots of clubs, and it's really fun doing it with other people. It's easy to do anywhere – even though experts earn a lot taking pictures all over the world, ordinary people can also get wonderful pictures closer to home.\nWoman:  Indeed! So James, finally – what advice do you have for young photographers?\nMan:  Find out what works and what doesn't. I didn't learn my skills by taking a course – nothing's better than getting out there and getting experience. Of course, there's lots of fantastic equipment available but it's really not necessary and most phones take great pictures.\nWoman:  Thanks James – many thanks.\nNow listen again. [repeat]\nThat is the end of Part Four.\nYou now have six minutes to write your answers on the answer sheet.\nYou have one more minute.\nThat is the end of the test.",
        items: [
          {
            q: "What made James become interested in photography?",
            opts: ["receiving a camera as a gift", "seeing his mother taking photographs", "attending a photography exhibition"],
            answer: 0,
            explanation:
              "是叔叔送了他一台相机，“my uncle bought me a camera, and from then on I started taking pictures” —— 因收到相机作为礼物而开始摄影，选 A。",
          },
          {
            q: "What does James say about the park where he took his prize-winning photo?",
            opts: ["He had taken photos in it before.", "Someone he knew recommended it to him.", "It's always been well known for its natural beauty."],
            answer: 0,
            explanation:
              "公园不算最美，但他多年来常在那里拍到出色的照片 —— “I've managed to get some fantastic pictures there over the years” —— 以前就在那儿拍过，选 A。",
          },
          {
            q: "After winning the competition, James felt",
            opts: ["keen to tell his parents about his achievement.", "pleased to meet a famous photographer.", "surprised because he hadn't won in previous competitions."],
            answer: 1,
            explanation:
              "最开心的是被介绍给为国际杂志供稿的知名摄影师并得到许多指点 —— “The best bit was being introduced to a well-known guy who takes pictures for an international magazine”，选 B。",
          },
          {
            q: "In James' opinion, what is most important for a good photograph?",
            opts: ["It needs plenty of planning.", "It must be beautiful to look at.", "It teaches people something new."],
            answer: 2,
            explanation:
              "“They should be worth looking at, and help you learn things about life” —— 好照片应让人有所学，选 C。",
          },
          {
            q: "James thinks that photography is a good hobby because",
            opts: ["it involves travelling to interesting places.", "it can become a successful career.", "it's a great social activity."],
            answer: 2,
            explanation:
              "摄影有很多俱乐部，和人一起拍很有趣 —— “it's really fun doing it with other people” —— 是很好的社交活动，选 C。",
          },
          {
            q: "What advice does James have for other photographers?",
            opts: ["Spend a lot of time taking pictures.", "Do a course to get the right skills.", "Get the best equipment possible."],
            answer: 0,
            explanation:
              "他没上过摄影课程，“nothing's better than getting out there and getting experience” —— 尽可能多出去拍照积累经验，选 A。",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 2 · 书内页 124-128 = PDF 125-129）2026-10-27 逐字转录
        transcript: "LISTENING PART 1\nTest Two. There are four parts to the test. You will hear each part twice. We will now stop for a moment. Please ask any questions now because you must not speak during the test.\n\nPART 1  Now look at the instructions for Part One.\nFor each question, choose the correct answer. Look at question one.\n\nQuestion 1  One. What does the man decide to buy?\nMan:  Can you help me decide what to buy? I'm having problems.\nWoman:  Sure, so what were you thinking of getting?\nMan:  Well, I really love this belt – it's such good quality leather.\nWoman:  But it's so expensive. I thought you said before you wanted to get something in the sale.\nMan:  I suppose you're right.\nWoman:  What about this tie? It's very smart.\nMan:  Mmm, I think it'd look good with most of my shirts. I'll go for that. I love this hat though.\nWoman:  It's nice – but the colour's a bit strange.\nMan:  Yeah, maybe you're right.\nNow listen again. [repeat]\n\nQuestion 2  Two. What kind of job has the woman applied for?\nWoman:  I've just sent in an application for another job.\nMan:  Oh, yes?\nWoman:  Yeah, I've worked at the library for a while now and I love what I do but so much of the work involves being on a computer, rather than dealing with books. I've done an online training course in handling old, historical documents and the town museum's looking for an assistant who's able to do that sort of thing. I saw the ad on their website, so I thought I'd try for it.\nMan:  Sounds interesting! Good luck!\nNow listen again. [repeat]\n\nQuestion 3  Three. How will the man travel to work today?\nMan:  Hi, it's Simon. I'm sorry but I'm going to be late for work today. My car's broken down, and I've no idea what's wrong with it. It just wouldn't start this morning ... so annoying! I called for a taxi, but there's nothing available for at least an hour. They're all busy because of the heavy rain. Anyway, I don't fancy cycling in this weather so my neighbour's going to give me a lift to the station. The trains are every half hour – it'll be quicker than having to wait for a taxi.\nNow listen again. [repeat]\n\nQuestion 4  Four. Where does the man think he lost his wallet?\nWoman:  Are you all right?\nMan:  No, I've just realised as I was coming up in the elevator that I've lost my wallet!\nWoman:  Oh no.\nMan:  I obviously had it in the grocery store.\nWoman:  Yes ... because you bought all that stuff. Did you go anywhere after that?\nMan:  Yeah, the bookstore. I guess it fell out of my pocket when I took my jacket off – it was so warm in there. I seem to remember hearing a noise but I didn't check!\nWoman:  Oh, well, you'd better go back there right now.\nNow listen again. [repeat]\n\nQuestion 5  Five. What will the man make for dinner tonight?\nMan:  Hi, I'm just phoning to let you know that I'm going to make the dinner this evening. I know we usually have a pizza delivered on Thursdays, but as we had one when we were out the other day, I'd rather have something else. Anyway, I thought you wouldn't say 'no' to a lovely steak – we could eat in the garden. I know you were talking about having fish and salad one day this week, but I feel like something more than that. Let me know what time you'll be home. Bye!\nNow listen again. [repeat]\n\nQuestion 6  Six. Who was the woman's favourite character in the film?\nMan:  That was a good film! I got a bit confused about who was who – there were so many different characters.\nWoman:  I agree. That female police detective was my favourite.\nMan:  Which one? There were quite a few. Do you mean the one with long dark curly hair?\nWoman:  She had similar hair – curly, but not long. She was the one who had a male colleague with short dark hair and glasses. And his hair was straight.\nMan:  Oh, I know the one you mean now. Yes, she was great.\nNow listen again. [repeat]\n\nQuestion 7  Seven. What did the girl want her father to deliver?\nGirl:  Hi Dad. Can you do me a favour? I've got to go and collect my new glasses from the shop in town and go to the library, so I won't be home before you go out. But I've left my keys behind, so I won't be able to get back in. If you're driving past the library, would you mind bringing them for me if I wait outside? You'll find them on the table; do you remember – I was sitting there writing some notes for my essay last night? Thanks. Bye!\nNow listen again. [repeat]\nThat is the end of Part One.",
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
              "在杂货店时钱包还在，之后去了书店 —— “I guess it fell out of my pocket when I took my jacket off”，他认为是在书店丢的，选 A。",
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
              "“That female police detective was my favourite”，她头发卷曲但不像另一位那么长 —— 短卷发女警，选 B。",
          },
          {
            q: "What does the girl want her father to deliver?",
            image: "/images/pet/listening/standard2/t2-l-q7.png",
            answer: 2,
            explanation:
              "“But I've left my keys behind, so I won't be able to get back in”，请父亲开车经过图书馆时把钥匙带来 —— 送钥匙，选 C。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-2/part-2.mp3",
// 听力原文来源：官方 Tapescripts（标准版2 Test 2 · 书内页 124-128 = PDF 125-129）2026-10-27 逐字转录
        transcript: "LISTENING PART 2\n\nPART 2  Now look at Part Two.\nFor each question, choose the correct answer.\n\nQuestion 8  Eight. You will hear two friends talking about some work the man has to do.\nMan:  I've got so much to do at work this week; I don't know how I'm going to finish it all in time.\nWoman:  If there's no-one available to help you, then do what I do. Write everything on a list and work out the time you need to do each thing. Pick any job from the list based on the time you've got available. It doesn't matter if you do the first thing or the last thing on the list, as long as you do something. You'll soon find you're making progress.\nMan:  Thanks. I'll give that a try.\nNow listen again. [repeat]\n\nQuestion 9  Nine. You will hear two students talking about a history website.\nMan:  Have you been on that history website yet?\nWoman:  Once or twice. I like the appearance of it, but I thought there'd be more links to articles about different topics we're doing on our course. What I have found, though, has been helpful for the essay I'm writing.\nMan:  There are plenty of articles on there, you know. I've found loads connected to stuff on our course. Maybe you haven't tried the advanced search option. That's the best way to find what you want.\nWoman:  Oh, right – can you show me how to do that?\nMan:  Sure. No problem.\nNow listen again. [repeat]\n\nQuestion 10  Ten. You will hear two friends talking about the woman's holiday.\nMan:  How was your summer holiday on the south coast?\nWoman:  We had a brilliant time!\nMan:  So was your hotel good?\nWoman:  I've stayed in better, to be honest, but that's OK. What I especially loved was the fact that I didn't need to spend all the money I took with me. Seriously!\nMan:  Wow! You don't often hear someone say that after a holiday. Did you eat out a lot while you were there?\nWoman:  Every day, actually. It cost so much less than it does here in the city, although there wasn't much variety of dishes to choose from.\nMan:  Right.\nNow listen again. [repeat]\n\nQuestion 11  Eleven. You will hear two friends talking about a shopping centre.\nWoman:  I went to the new shopping centre yesterday.\nMan:  Oh, I wasn't impressed by it myself but I only went to a department store and some shoe shops.\nWoman:  I found everything I needed, but then when I went for something to eat there, could I find a suitable restaurant? Not a chance ... just stalls selling coffee.\nMan:  Oh, there's a nice place on the top floor. But as for the car park, I can't believe they thought that one would be enough for a place that size.\nWoman:  They really need to do something about that. Anyway, I'm not planning on shopping there again for a while.\nNow listen again. [repeat]\n\nQuestion 12  Twelve. You will hear two friends talking about playing golf.\nMan:  I've heard you've started playing golf. How are you getting on with it?\nWoman:  That's right. I took it up a couple of months ago. But actually, if you saw me out there on the golf course, I think you'd be impressed by my ability! Honestly! It's not like chess or cricket, where so many people get confused about the rules. As far as I'm concerned, it couldn't be simpler! I wouldn't want to play any more than I do now though, as a game takes so long.\nMan:  Personally, I've never liked it ... I prefer other sports!\nNow listen again. [repeat]\n\nQuestion 13  Thirteen. You will hear two friends talking about a novel.\nWoman:  Have you finished reading that novel I lent you?\nMan:  Yeah, I thought it was OK ... not great. I mean, the situation the family find themselves in is something that most people are familiar with ... but it was kind of hard to get excited about the people in the story. I just didn't feel curious about them. Also, I don't understand why, in a novel that length, the author decided to have so many chapters. It interrupted things and the story didn't flow well.\nWoman:  Oh, OK. Well, I quite enjoyed the story actually.\nNow listen again. [repeat]\nThat is the end of Part Two.",
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
              "女生说找到的内容对论文有帮助 —— “What I have found, though, has been helpful for the essay I'm writing”，男生也说找到大量课程相关文章 —— 两人都认为对学习有用，选 C。",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 2 · 书内页 124-128 = PDF 125-129）2026-10-27 逐字转录
        transcript: "LISTENING PART 3\n\nPART 3  Now look at Part Three.\nFor each question, write the correct answer in the gap. Write one or two words or a number or a date or a time.\nLook at questions 14 to 19 now. You have 20 seconds.\nYou will hear some information about a one-day drumming class.\nMan:  If you've always wanted to learn the drums but would rather play in a group than on your own, then try a one-day class in Japanese Taiko drumming at the Music School.\nTaiko drums create exciting music and are really fun to play, too! All that's required is plenty of energy. Your ability doesn't matter at all.\nThe first thing you'll do is watch a short performance. Then, you'll listen to a Taiko expert from Japan who will tell you about the history of Japanese drumming. Afterwards, you'll be ready to have a go, guided by an experienced instructor.\nIn the morning, we'll also go through the basics. It's important to get the way you stand right. This will help you with your movements. Make sure you dress in comfortable clothes, though you won't need to wear traditional Japanese clothes like the professionals!\nAfter lunch, we'll do what we call 'stick skills'. This is where you learn all about the variety of different sounds you can make with your drum sticks. And at the end of the day we'll play some musical patterns together as a group.\nSo, why take up Taiko drumming? Well, it has lots of benefits. It's a wonderful type of exercise, so you'll get fitter. It also puts you in a better mood. You'll feel great after a day of drumming.\nSo, what are you waiting for? If you're interested in attending the class, you'll need to send an email to the class instructor, Steve Paxmen. His address is paxmen at taiko dot uk. That's P-A-X-M-E-N. Be quick as places are limited! See you soon!\nNow listen again. [repeat]\nThat is the end of Part Three.",
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
        instruction: "听一段对烘焙店店主 Lara Andrews 的采访，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-2/part-4.mp3",
// 听力原文来源：官方 Tapescripts（标准版2 Test 2 · 书内页 124-128 = PDF 125-129）2026-10-27 逐字转录
        transcript: "LISTENING PART 4\n\nPART 4  Now look at Part Four.\nFor each question, choose the correct answer.\nLook at questions 20 to 25 now. You have 45 seconds.\nYou will hear an interview with a young woman called Lara Andrews, who runs a successful bakery business.\nMan:  Today I'm talking to Lara Andrews, who runs a successful bakery business, selling delicious cakes and other things. Lara, what made you open your bakery business?\nWoman:  I've loved baking since I was a child, when I started baking for my school friends. Some of them even offered to pay me to make birthday cakes, but I just did it for fun. I also made one for a teacher who said it was brilliant! Anyway, when I told Mum and Dad, they said I should make a business out of it. They both work in sales, so I guess it's in my family!\nMan:  What were the challenges when you started your business?\nWoman:  I wanted everything to be absolutely perfect and I didn't always know where to look to learn about what ingredients to use, how much of each and so on. The internet was useful though, and luckily I haven't had to handle customers being negative about my products. I thought it'd take ages to get enough customers but fortunately it didn't.\nMan:  Do you prefer baking bread or cakes?\nWoman:  I love baking both! I love simple cakes, but I'll try making anything. Bread's complicated, so I'm always pleased when I get it right. It requires more skill and you have to be patient and do lots of things all in the right order.\nMan:  What can you do to improve your baking business?\nWoman:  Well, I've recently had several ideas for working with and mixing together unusual ingredients, which I'm experimenting with, rather than just familiar favourites. I'm good at using my imagination – I just have to trust myself more that my ideas'll work. I recently put some ads in our local paper, and as a result, I've had several orders come in, which is great.\nMan:  What about future plans, Lara?\nWoman:  One thing I'll definitely do is start a video blog for children and teenagers so they can bake with me as they watch. And a friend of mine suggested that I produce my own cookery book one day. I'm not sure about that though. I've also considered opening a café, but that's very different from what I really enjoy doing, which is baking at home.\nMan:  Finally, do you have any advice for people wanting to start their own baking business?\nWoman:  Well, speaking as someone with experience in this industry, I think it's important to remember that you'd be very lucky if you actually got rich. You don't need professional training, but do practise. Remember the old saying – practice makes perfect!\nMan:  Well, thanks for joining us, Lara.\nWoman:  My pleasure.\nNow listen again. [repeat]\nThat is the end of Part Four.\nYou now have six minutes to write your answers on the answer sheet.\nYou have one more minute.\nThat is the end of the test.",
        items: [
          {
            q: "Why did Lara decide to open her baking business?",
            opts: ["Her parents encouraged her to do it.", "Her teacher thought she'd be successful.", "Her school friends bought cakes from her."],
            answer: 0,
            explanation:
              "“when I told Mum and Dad, they said I should make a business out of it” —— 父母鼓励她，选 A。",
          },
          {
            q: "What challenge did Lara have to deal with when she started her business?",
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
            q: "What does Lara feel that she needs to do to improve her business?",
            opts: ["spend more money on advertising", "sell more traditional products", "develop more confidence in herself"],
            answer: 2,
            explanation:
              "“I just have to trust myself more that my ideas'll work” —— 增强自信，选 C。",
          },
          {
            q: "What does Lara intend to do in the future?",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 3 · 书内页 145-150 = PDF 146-151）2026-10-27 逐字转录
        transcript: "LISTENING PART 1\nTest Three. There are four parts to the test. You will hear each part twice. We will now stop for a moment. Please ask any questions now because you must not speak during the test.\n\nPART 1  Now look at the instructions for Part One.\nFor each question, choose the correct answer. Look at question one.\n\nQuestion 1  One. What did the man do yesterday?\nWoman:  Did you go into town yesterday?\nMan:  Yes, I wanted to take a jacket back to the shop 'cos it didn't fit. There was a huge queue though, so I decided to go back later and went off to do something at the bank. But it had closed by the time I got there, so I couldn't do that, either! I did manage to stop at the bookshop and get a novel I wanted, on the way back. The queue at the clothes shop was still no better, so I'll try tomorrow.\nNow listen again. [repeat]\n\nQuestion 2  Two. How did the woman travel back from her holiday?\nMan:  Hi – how was your trip?\nWoman:  Lovely, thanks! And getting round the city by bus was so easy; we saw lots of interesting things.\nMan:  When did you get home?\nWoman:  Not until 3 a.m.! There was a storm, so all flights were delayed for hours. We just had to sit and wait!\nMan:  Oh no! And I suppose getting home by train would take ages.\nWoman:  Actually the journey's not that long and the station wasn't far from our hotel. But the trains were affected too. The journey went pretty quickly after we'd taken off.\nMan:  That's good.\nNow listen again. [repeat]\n\nQuestion 3  Three. Which hat did the fashion model wear in the photos?\nMan:  I love these photos of you in this magazine, especially the ones with you in that hat!\nWoman:  Thanks! I hadn't planned on wearing one, but the photographer suggested it. He had loads to choose from, like sun hats you'd wear to the beach, and baseball caps in different colours. But the woolly hat reminded me of the type my grandmother used to knit for me. So even though it was a sunny day, I thought it looked great, especially since it was a bright colour and went with my dress.\nNow listen again. [repeat]\n\nQuestion 4  Four. Where did the man leave his driving licence?\nMan:  Julia, it's Mark. I'm on my way back to the hotel. I left there to get my flight, but when I got to check-in at the airport, I realised I didn't have my driving licence with me. I think I left it on the bedside table in my room. No-one's answering the phone at the hotel reception, so I've had to go back for it. As soon as I've found it, I'll hurry back to the airport, I just hope I won't miss my flight.\nNow listen again. [repeat]\n\nQuestion 5  Five. Where are they going walking?\nMan:  It's nearly time to go. Are you going to change your shoes? Those sandals don't look very suitable for a long walk!\nWoman:  They'll be fine. After all, we're only walking along the beach.\nMan:  Oh, Didn't I tell you? Rick changed the arrangements. We're meeting at the car park near the beach, but the walk we're doing is up the cliff path. My walking boots are still wet from the forest walk we did the other day, so I'm going to wear my trainers.\nWoman:  OK. I'll do the same.\nNow listen again. [repeat]\n\nQuestion 6  Six. What will the woman do to her friend's car?\nWoman:  Micheal, it's me. Thanks for letting me use your car while mine's at the garage. It's great – better than mine, and it doesn't use as much petrol, either. I just wanted to let you know that there might be a problem with one of your tyres. I think it needs more air, so I'll stop and put some on in the way home, but I think you should check it again tomorrow. No other problems. Now I've seen how nice yours looks, I think I'll have to clean mine!\nNow listen again. [repeat]\n\nQuestion 7  Seven. What did the woman eat at the restaurant?\nMan:  Have you been to that restaurant I told you about yet?\nWoman:  I went on Tuesday.\nMan:  What did you have?\nWoman:  Well, I know you recommended the fish, but they'd run out. So I had to choose between the roast chicken or an omelette with salad.\nMan:  What did you choose?\nWoman:  I wasn't that hungry, so I was going to have the omelette with salad. Then I smelt the chicken and decided to go for that. I wasn't disappointed! I must go again to try the fish!\nMan:  I knew you'd like that restaurant!\nNow listen again. [repeat]\nThat is the end of Part One.",
        items: [
          {
            q: "What did the man do yesterday?",
            image: "/images/pet/listening/standard2/t3-l-q1.png",
            answer: 2,
            explanation:
              "退夹克的队太长决定晚点再去，顺路去银行又已关门 —— “I did manage to stop at the bookshop and get a novel I wanted”，最终买到了想要的书，选 C。",
          },
          {
            q: "How did the woman get back from her holiday?",
            image: "/images/pet/listening/standard2/t3-l-q2.png",
            answer: 0,
            explanation:
              "风暴令航班延误数小时，火车也受影响 —— “The journey went pretty quickly after we'd taken off”，最终乘飞机回来，选 A。",
          },
          {
            q: "Which hat is the model wearing?",
            image: "/images/pet/listening/standard2/t3-l-q3.png",
            answer: 0,
            explanation:
              "摄影师备了遮阳帽和棒球帽等，但她选了羊毛针织帽 —— “the woolly hat reminded me of the type my grandmother used to knit for me”，选 A。",
          },
          {
            q: "Where did the man leave his driving licence?",
            image: "/images/pet/listening/standard2/t3-l-q4.png",
            answer: 2,
            explanation:
              "到机场值机时才发现驾照没带，想起落在酒店房间床头柜上 —— “I think I left it on the bedside table in my room”，只好返回酒店取，选 C。",
          },
          {
            q: "Where did they go for a walk?",
            image: "/images/pet/listening/standard2/t3-l-q5.png",
            answer: 0,
            explanation:
              "集合点改到海滩附近停车场，路线也改了 —— “the walk we're doing is up the cliff path”，走的是悬崖小径，选 A。",
          },
          {
            q: "What is the woman going to do to her friend's car?",
            image: "/images/pet/listening/standard2/t3-l-q6.png",
            answer: 2,
            explanation:
              "“there might be a problem with one of your tyres. I think it needs more air, so I'll stop and put some on in the way home” —— 途中给轮胎充气，选 C。",
          },
          {
            q: "What is the woman having in the restaurant?",
            image: "/images/pet/listening/standard2/t3-l-q7.png",
            answer: 1,
            explanation:
              "推荐的鱼卖光了，本打算点煎蛋卷配沙拉，闻到香味后改了主意 —— “Then I smelt the chicken and decided to go for that”，吃的是烤鸡，选 B。",
          },
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: "听 6 段短录音，每题从 A/B/C 中选出最佳答案。",
        audio: "/audio/pet-standard2/test-3/part-2.mp3",
// 听力原文来源：官方 Tapescripts（标准版2 Test 3 · 书内页 145-150 = PDF 146-151）2026-10-27 逐字转录
        transcript: "LISTENING PART 2\n\nPART 2  Now look at Part Two.\nFor each question, choose the correct answer.\n\nQuestion 8  Eight. You will hear two friends talking about the woman's dress.\nMan:  Ready for Max and Julie's wedding?\nWoman:  No!\nMan:  Why not?\nWoman:  It's the style of the dress I bought. I didn't have time to try it on in the shop. I just grabbed my size and paid. I put it on at home and the fit wasn't a problem, but it looked different. In the shop, it looked blue, but it's actually grey, which doesn't match my shoes. I'm hoping they'll change it even though there's nothing wrong with it. I did once take something else back to that shop because it had a hole in it, and I got a refund. Hopefully, it'll be fine.\nNow listen again. [repeat]\n\nQuestion 9  Nine. You will hear two friends talking about a new sports centre.\nMan:  What do you think of the new sports centre?\nWoman:  It's great. I think it'll be really popular.\nMan:  It was certainly busy in the changing rooms when I was there. They need more space.\nWoman:  Oh, I think they're quite large – although it was hard to find them.\nMan:  That's another thing I noticed. There aren't enough people around if you have questions. The reception desk was empty when I looked.\nWoman:  It was the same when I was there. I wanted someone to show me how to use one of the exercise machines.\nMan:  Yeah, some of them look quite complicated to use.\nNow listen again. [repeat]\n\nQuestion 10  Ten. You will hear a woman talking to a receptionist in a hotel.\nMan:  Good morning, madam. Welcome to the Royal Hotel. Can I help you?\nWoman:  I hope so. A friend's staying in a room here for two days, and I've come to see her. Can you tell me which room she's in?\nMan:  I'm sorry, but staff here aren't allowed to give out information about our guests' room numbers.\nWoman:  Aren't you? Well, that's not very helpful. What can you do?\nMan:  I'll need some details. If you give me your name, I can call the room and see if she's there. You'll have to wait in the lounge.\nWoman:  OK, thank you, that's fine. I can wait.\nNow listen again. [repeat]\n\nQuestion 11  Eleven. You will hear a man telling a friend about his holiday in the mountains.\nWoman:  How was your holiday, Bruce? That was your first time skiing, wasn't it?\nMan:  Yeah, that's right. I was glad I'd had some sessions with a ski instructor at that indoor centre before I went. The friends I went on holiday with are good skiers, so I was pleased I'd had a bit of experience. I actually went hiking a lot rather than skiing with them though, as I didn't feel very confident. It was great to have such fantastic views of the lakes and mountains, instead of racing around on skis. I'll definitely go to that area again.\nNow listen again. [repeat]\n\nQuestion 12  Twelve. You will hear two friends talking about playing the guitar.\nWoman:  Hi Tom, how's your guitar playing going?\nMan:  It's fine, but it's taking a while to see any improvement.\nWoman:  Well, you only started playing last year. It takes time to play well. Do you have a daily practice routine?\nMan:  Do you think that's the answer? To be honest, I find playing at home on my own a bit boring.\nWoman:  You definitely need to play more. Why not set up a group who get together and play at weekends?\nMan:  That's not a bad idea. I was beginning to think I ought to try an easier instrument, but I'll try your suggestion first.\nNow listen again. [repeat]\n\nQuestion 13  Thirteen. You will hear two friends talking about a film they've just seen.\nMan:  What did you think of the film?\nWoman:  It was OK, although I thought it was supposed to be a comedy – I've laughed more at other films.\nMan:  Oh, I laughed quite a lot. I just sat back and focused on the jokes because it was obvious to me what was going to happen quite early on.\nWoman:  I had no idea until the very end. You know, I think I read somewhere that it won something.\nMan:  Like a prize? I'll have to look at the reviews and see whether that's true. I'd be interested to know.\nNow listen again. [repeat]\nThat is the end of Part Two.",
        items: [
          {
            q: "You will hear two friends talking about the woman's dress. Why is the woman returning the dress to the shop?",
            opts: ["It's the wrong colour.", "It's damaged.", "It doesn't fit."],
            answer: 0,
            explanation:
              "“In the shop, it looked blue, but it's actually grey, which doesn't match my shoes” —— 店里看着是蓝色，实际是灰色，颜色不对，选 A。",
          },
          {
            q: "You will hear two friends talking about a new sports centre. They agree that it needs to have",
            opts: ["more staff available.", "better equipment.", "bigger changing rooms."],
            answer: 0,
            explanation:
              "两人都遇到找不到工作人员的情况 —— “There aren't enough people around if you have questions”，前台也空着 —— 需要更多员工，选 A。",
          },
          {
            q: "You will hear a woman talking to a receptionist in a hotel. Why has the woman gone to the hotel?",
            opts: ["to book a room", "to meet someone", "to make a complaint"],
            answer: 1,
            explanation:
              "“A friend's staying in a room here for two days, and I've come to see her” —— 来酒店见住在这里的朋友，选 B。",
          },
          {
            q: "You will hear a man telling a friend about his holiday in the mountains. What did he enjoy most about it?",
            opts: ["having skiing lessons", "seeing the countryside", "spending time with friends"],
            answer: 1,
            explanation:
              "他大部分时间在徒步而非滑雪，“It was great to have such fantastic views of the lakes and mountains” —— 享受湖光山色，选 B。",
          },
          {
            q: "You will hear two friends talking about playing the guitar. What's the man going to do?",
            opts: ["practise playing with other people", "start playing a different instrument", "try to play every day"],
            answer: 0,
            explanation:
              "朋友建议组个周末合奏团，“Why not set up a group who get together and play at weekends?”，他决定先试这个建议 —— 与他人一起练习，选 A。",
          },
          {
            q: "You will hear two friends talking about a film they've just seen. What does the man say about the film?",
            opts: ["It wasn't very funny.", "It won an important prize.", "It was easy to predict the ending."],
            answer: 2,
            explanation:
              "“it was obvious to me what was going to happen quite early on” —— 很早就能猜到剧情走向，选 C。",
          },
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: "听一段关于歌曲创作比赛的通知，每空填写一两个单词、数字、日期或时间。",
        audio: "/audio/pet-standard2/test-3/part-3.mp3",
// 听力原文来源：官方 Tapescripts（标准版2 Test 3 · 书内页 145-150 = PDF 146-151）2026-10-27 逐字转录
        transcript: "LISTENING PART 3\n\nPART 3  Now look at Part Three.\nFor each question, write the correct answer in the gap. Write one or two words or a number or a date or a time.\nLook at questions 14 to 19 now. You have 20 seconds.\nYou will hear an announcement about a song writing competition.\nWoman:  This year's song writing competition is now open, so all you songwriters out there need to start creating your songs if you want to take part. In previous years, songs have been about particular topics – for example, the sea. We're hoping that the topic we've chosen this time – the moon – is popular. Just look up at the sky and you're sure to have some ideas.\nMost popular songs last about two to three minutes, or between 120 and 180 seconds, but lots of songs are longer, so we've increased the maximum length to 210 seconds this year. You should record your song as a music or video file.\nWe originally booked the amazing singer Anton Mitchell to judge the competition for us but unfortunately he's had to cancel. In his place, a very well-known poet has agreed to help us, but we're keeping who it is secret for now.\nThere are some great prizes again this year. If you're lucky enough to come first, you'll spend a day in a studio. There you'll watch musicians making a recording of your song! The person in second place will win tickets to a concert of their choice.\nYour completed song should reach us, at the latest, by the thirteenth of October, and the winner will be announced on the first of November. There'll also be a special event on the twelfth of November when the winning songs will be performed.\nYou can upload your song on our website, or you can attach it to an email and get it to us that way. You need to send it to Andrea Delhar, and her email address is delhar at songwriters dot net. I'll spell that for you ... it's D-E-L-H-A-R at songwriters dot net.\nSo good luck with your songwriting, everybody!\nNow listen again. [repeat]\nThat is the end of Part Three.",
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
            explanation: "“Your completed song should reach us, at the latest, by the thirteenth of October” —— 截止日期为 10 月 13 日。",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 3 · 书内页 145-150 = PDF 146-151）2026-10-27 逐字转录
        transcript: "LISTENING PART 4\n\nPART 4  Now look at Part Four.\nFor each question, choose the correct answer.\nLook at questions 20 to 25 now. You have 45 seconds.\nYou will hear an interview with a professional explorer called Alexis Bartoli, who travels to places that few other people visit.\nWoman:  With us today is professional explorer Alexis Bartoli. You spend your life travelling to places that few people have visited before. When did you first want to become an explorer, Alexis?\nMan:  My father loved stories about explorers from the past, so we often watched documentaries on TV about them, but I soon got bored because it'd all happened so long ago. Then a modern-day explorer who'd written a really popular book about her travels came to my school and told us about the places she'd been to. I knew then I wanted to do what she did.\nWoman:  How did you feel before your first expedition?\nMan:  Very anxious! I'd spent a few years studying in New Zealand, thousands of miles from my family, so I was used to being away, but I just couldn't imagine what a day in the life of an explorer would be like. Some of the places I was planning to visit weren't very safe, but that excited me rather than making me feel scared.\nWoman:  You started making films on your expeditions. Why was that?\nMan:  In some places, there were plants and animals that few people had ever seen. I'd already learned about film making at university, so I could easily record these rare species and show the films to science experts when I got home. Later on, I was surprised when TV companies wanted to buy them, but this helped pay for other trips.\nWoman:  What's your favourite part of an expedition?\nMan:  I enjoy so many things, but if I had to choose one, it'd be getting to know members of the local population. Seeing the incredible geography and the environment where they live comes a close second, though. The weather can be a problem as well as a pleasure, so that's not usually top of my list.\nWoman:  Your latest expedition was unusual ...\nMan:  Yes, because up till then, I'd always explored places on land, from rainforests to the world's highest mountains. This time, though, I spent four months at sea on a tiny boat, travelling from America to Australia. After walking alone across the world's largest desert, that felt very different!\nWoman:  What are your plans for the future?\nMan:  I'm not a person who likes going back somewhere I've already explored – I like to keep doing new things. I love what I do though, so it would feel wrong to start thinking about any other kind of career. Actually, I've spent so long abroad that I haven't had time to see much of where I'm from, so that's my next project.\nWoman:  Thanks Alexis.\nNow listen again. [repeat]\nThat is the end of Part Four.\nYou now have six minutes to write your answers on the answer sheet.\nYou have one more minute.\nThat is the end of the test.",
        items: [
          {
            q: "Alexis decided to become an explorer after",
            opts: ["reading a book.", "listening to a talk.", "seeing a TV programme."],
            answer: 1,
            explanation:
              "“a modern-day explorer who'd written a really popular book about her travels came to my school and told us about the places she'd been to. I knew then I wanted to do what she did” —— 听了探险家来校演讲后立志，选 B。",
          },
          {
            q: "Alexis felt anxious before his first expedition because",
            opts: ["he didn't know what to expect.", "he knew it would be quite dangerous.", "he'd never been very far away from home."],
            answer: 0,
            explanation:
              "“I just couldn't imagine what a day in the life of an explorer would be like” —— 完全想象不出探险生活什么样，选 A。",
          },
          {
            q: "Why did Alexis start making films on his expeditions?",
            opts: ["to make money for future trips", "to provide scientists with information", "to learn a new skill"],
            answer: 1,
            explanation:
              "“I could easily record these rare species and show the films to science experts when I got home” —— 把珍稀物种影像提供给科学专家，选 B。",
          },
          {
            q: "Alexis says his favourite part of any expedition is",
            opts: ["discovering new landscapes.", "experiencing different climates.", "meeting new people."],
            answer: 2,
            explanation:
              "“it'd be getting to know members of the local population” —— 结识当地人最有意思，选 C。",
          },
          {
            q: "Alexis's latest expedition involved",
            opts: ["walking across a desert.", "sailing across an ocean.", "spending time in a rainforest."],
            answer: 1,
            explanation:
              "“I spent four months at sea on a tiny boat, travelling from America to Australia” —— 乘小船跨洋航行，选 B。",
          },
          {
            q: "What does Alexis say he wants to do in the future?",
            opts: ["try a different profession", "explore his home country", "return to places he's visited before"],
            answer: 1,
            explanation:
              "“I haven't had time to see much of where I'm from, so that's my next project” —— 接下来要好好探索自己的家乡，选 B。",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 4 · 书内页 168-173 = PDF 169-174）2026-10-27 逐字转录
        transcript: "LISTENING PART 1\nTest Four. There are four parts to the test. You will hear each part twice. We will now stop for a moment. Please ask any questions now because you must not speak during the test.\n\nPART 1  Now look at the instructions for Part One.\nFor each question, choose the correct answer. Look at question one.\n\nQuestion 1  One. What has the man lost?\nMan:  Excuse me, could you help me? I left something on the train yesterday.\nWoman:  Certainly, I'll take some details. Let me guess – you lost your gloves, didn't you? Oh, we find some almost every day left on the seats.\nMan:  [laughs] Yes, I've done that before, and never got them back! This time, though, it's my glasses, I'm afraid.\nWoman:  Oh dear.\nMan:  I took them off when I was using my headphones on the train, and didn't notice that I'd left them on the seat when I got off.\nWoman:  OK, I'll need some more information ... [fade]\nNow listen again. [repeat]\n\nQuestion 2  Two. What is the woman going to do tomorrow?\nMan:  Are you ready for your trip to the coast in Scotland then?\nWoman:  I am. I was going to drive up there tomorrow, but I've decided to go this evening instead. It takes several hours to get there.\nMan:  It's a long drive, isn't it?\nWoman:  Yes, but at least I'll be able to have some time on the beach tomorrow, instead of wasting the first day of my holiday driving.\nMan:  And when are you seeing your cousin and his family?\nWoman:  The day after tomorrow – I'm going for a meal at their house.\nNow listen again. [repeat]\n\nQuestion 3  Three. Which items cost less than usual at the moment?\nMan:  Welcome to Brown's Department Store. If you were lucky enough to get a bargain in last week's phone sale in our electronics department, you'll know just how much money you can save in our store. If you're a fitness fan, it's your turn to save money this week as everything's reduced in our sports department on the second floor. There's also a special offer in the ladies' clothes department today – get twenty per cent off any coat when you buy a handbag. So what are you waiting for?\nNow listen again. [repeat]\n\nQuestion 4  Four. Which place will the people visit first on the tour?\nWoman:  Good morning, and welcome to this walking tour of the city. We'll see many interesting places in the city this morning. As it's a beautiful day, the aim is to stop at an outdoor café by the river for a snack about eleven thirty. Before that, though, we'll spend an hour or so at the castle, which we'll start walking towards in a minute or two. The walk will end at the museum and we'll look round an interesting exhibition that's on there at the moment. Any questions?\nNow listen again. [repeat]\n\nQuestion 5  Five. Which tickets did the man buy?\nMan:  Andy – great news! I got the tickets for the concert. Um, the ones we wanted – the 20 euro ones – weren't available, I'm afraid, so I had to pay a bit more. Not too much though – 30 euros each isn't too bad, is it? At least we didn't end up having to get the top-priced ones – I mean, 50 euros! They're a great band and I'm sure they're worth it – but that's still a lot to pay. We're lucky though: some concerts charge more than that just for the cheapest seats!\nNow listen again. [repeat]\n\nQuestion 6  Six. What does the man want to buy?\nWoman:  Good afternoon, sir. I see you're looking at our electric guitars. Beautiful, aren't they? Would you like to have a go on one – see how it sounds?\nMan:  Thank you. Yes, they look great, and I'm sure they sound great, too. It's your drums I'm interested in, though. Particularly that set there, near the window.\nWoman:  Good choice. Do you play?\nMan:  Actually, I only play one instrument. I've played the piano since I was a child, and I think it's time to learn something new.\nWoman:  Well, let's go and have a look.\nNow listen again. [repeat]\n\nQuestion 7  Seven. Which type of exercise does the doctor recommend?\nMan:  So, doctor. As my shoulder's getting better, can I start exercising it?\nWoman:  Well, what type of exercise did you do before the operation?\nMan:  I used to go to the gym, to lift weights. And I went running, too.\nWoman:  Mm, lifting weights is something you'll have to give up. You need exercise that makes you move your shoulder, but in a gentle way, such as swimming. Going running isn't as bad as lifting weights, but it might be painful at the moment.\nMan:  OK, doctor. Thanks for the advice.\nNow listen again. [repeat]\nThat is the end of Part One.",
        items: [
          {
            q: "What has the man lost?",
            image: "/images/pet/listening/standard2/t4-l-q1.png",
            answer: 2,
            explanation:
              "工作人员猜是手套，他说这次丢的是眼镜 —— “This time, though, it's my glasses, I'm afraid”，摘下眼镜用耳机时落在座位上，选 C。",
          },
          {
            q: "What is the woman going to do tomorrow?",
            image: "/images/pet/listening/standard2/t4-l-q2.png",
            answer: 1,
            explanation:
              "她把苏格兰海岸之行提前到今晚出发 —— “I'll be able to have some time on the beach tomorrow, instead of wasting the first day of my holiday driving”，明天去海滩，选 B。",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 4 · 书内页 168-173 = PDF 169-174）2026-10-27 逐字转录
        transcript: "LISTENING PART 2\n\nPART 2  Now look at Part Two.\nFor each question, choose the correct answer.\n\nQuestion 8  Eight. You will hear two friends talking about a hotel.\nMan:  How was your stay at the Grand Hotel?\nWoman:  Great – I could see the mountains from my bedroom window – they looked so beautiful!\nMan:  You definitely got a better room than I did when I stayed there last year – all I could see was a brick wall! The hotel restaurant could be better too.\nWoman:  It could, but I found a wonderful place to eat nearby so it didn't matter.\nMan:  The people who work there are very cheerful, though.\nWoman:  They certainly made me feel welcome and room service was really helpful too. Not like some hotels, where the employees hardly smile at all.\nNow listen again. [repeat]\n\nQuestion 9  Nine. You will hear two friends talking about an art exhibition.\nMan:  I enjoyed that exhibition – I think that style of painting's really original.\nWoman:  I agree, although I prefer exhibitions with fewer works of art to see so you can spend more time looking at each one. I felt like I was hurrying from one painting to the next in order to see them all. It's a shame there weren't a few more windows in there – I actually found it quite hard to see some of the paintings.\nMan:  Yes, me too, but we certainly got value for money!\nWoman:  That's true. I'm surprised they weren't charging more, actually.\nNow listen again. [repeat]\n\nQuestion 10  Ten. You will hear two friends talking about a book they've read.\nMan:  I've finished that book you lent me.\nWoman:  Did you enjoy it?\nMan:  Not as much as I thought I would, actually. I'm into books where you learn a bit about the main characters, but there's also plenty going on. I wasn't so keen on reading whole chapters about their thoughts, however interesting the people are!\nWoman:  Yes, those sections were pretty long, I guess, and not much happened in them, which is a bit of a shame. I must admit that the ending came as a complete surprise, though.\nMan:  It was the only part of the book that I really enjoyed reading.\nNow listen again. [repeat]\n\nQuestion 11  Eleven. You will hear a woman telling a friend about a visit to the hairdresser's.\nMan:  You don't look happy – what's up?\nWoman:  I've just been to the hairdresser's – I'm really disappointed.\nMan:  Oh? Your hair doesn't look that different actually!\nWoman:  Exactly! I explained clearly what I wanted, but the guy who did it just smiled and started cutting! He only worked on it for a few minutes. It's usually good in there – very organised, you know, not lots of hair left all over the floor like in some places.\nMan:  Why didn't you complain?\nWoman:  I know. Now I'll have to get it done again soon. So it was hardly worth what I had to pay!\nMan:  Oh dear.\nNow listen again. [repeat]\n\nQuestion 12  Twelve. You will hear a woman telling a friend about her singing class.\nMan:  Hi Ellie, how are your singing classes going?\nWoman:  Great, thanks! We're doing a concert next month – I hope we'll be ready! I couldn't sing at all before I started, and I never thought I'd be able to perform in public!\nMan:  Good for you!\nWoman:  It helps that the group isn't very big – that's actually why I chose the class, because the teacher can spend so much time with each person. It's amazing that I've improved so much – and I don't worry at all anymore about singing with people who are much better than me.\nMan:  I must come to your concert!\nWoman:  Great!\nNow listen again. [repeat]\n\nQuestion 13  Thirteen. You will hear two friends talking about a new sports centre.\nMan:  Hi! What did you think of the new sports centre?\nWoman:  Well, you were right about the price – I swam for an hour and it cost less than a session in the old place! But they should do something about how cold it is in the pool. I needed a hot shower afterwards!\nMan:  I felt the same. Pity – they've spent so much on the building and the new classes. I'm going to try some of them – there's lots going on.\nWoman:  I'd love to do one of their classes in the evening. It depends how much they cost.\nMan:  Me too.\nNow listen again. [repeat]\nThat is the end of Part Two.",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 4 · 书内页 168-173 = PDF 169-174）2026-10-27 逐字转录
        transcript: "LISTENING PART 3\n\nPART 3  Now look at Part Three.\nFor each question, write the correct answer in the gap. Write one or two words or a number or a date or a time.\nLook at questions 14 to 19 now. You have 20 seconds.\nYou will hear a guide giving information to people who are going to watch a car race involving old cars.\nMan:  Good afternoon everyone, and welcome to this fantastic country park, where we're pleased to hold our fifth annual classic car race.\nThese classic cars are old and very beautiful, so we're giving you the chance to have a look at them before the race begins. Come down to the lake – they're parked beside it. If you're not sure where that is, go to the fountain and follow the signs. You can chat to the drivers as they sit in their cars, and take photos.\nAnd why not enter our competition? Just answer the questions on the form you received when you entered the park, and put it in the box. You never know, you might be the lucky person who gets the holiday! Last year's winner loved the computer that she won.\nIf you're hungry before the race, there's a café which serves sandwiches, ice-creams, and some hot food. There's a special discount on burgers today! All food is freshly prepared.\nSo, now to the race itself. It's one o'clock now, which means there's still another hour and a half until the cars set off – that's at half past two. The fastest cars will take about one hour to complete the course, finishing at around half past three. After the race has finished, if you need the train station, please avoid the south exit, as that's the one nearest to the car park, and we don't want too many people using each exit. Those travelling by train need the north exit.\nOne last thing – we're sure you'll take some fantastic photos today, and we'd love to see them. So please upload them to our website. The website has the name of the village near this park: www dot cheppsat dot org. I'll spell Cheppsat for you. It's C-H-E-double P-S-A-T. Thank you, and enjoy the race.\nNow listen again. [repeat]\nThat is the end of Part Three.",
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
// 听力原文来源：官方 Tapescripts（标准版2 Test 4 · 书内页 168-173 = PDF 169-174）2026-10-27 逐字转录
        transcript: "LISTENING PART 4\n\nPART 4  Now look at Part Four.\nFor each question, choose the correct answer.\nLook at questions 20 to 25 now. You have 45 seconds.\nYou will hear an interview with a young writer called Jenny Taylor, who has just had her first novel published.\nInterviewer: Today I'm talking to Jenny Taylor. Jenny's a young writer who's just had her first novel published.\nJenny:  Hi.\nInterviewer: So Jenny, did you enjoy studying literature at school?\nJenny:  When I was at school, I always loved reading, though I preferred stories to poems. Then we got a new English Literature teacher who wrote things herself and encouraged us to do the same. I really wanted to write like her. That made me work hard even though I never felt that I did was much good.\nInterviewer: How did you get your ideas for this first novel?\nJenny:  Well, I always notice how people behave. I'd often go out with friends and family and they'd all go online using their phones, and I'd just sit back and think about the other people around me. I'd start imagining what their lives were like, and it all grew from that.\nInterviewer: Can you tell us something about your novel?\nJenny:  Yes, it's about a girl and her parents. It starts when they spend a day somewhere their relatives lived in the past. It includes some interesting facts about the place, but the story focuses on the different challenges they have to deal with as they learn more about what happened long ago. Anyway, I won't tell you more than that!\nInterviewer: How do you feel about your novel?\nJenny:  Well, it took quite a while to write. I showed it to a friend when I thought it was ready to be published, and he agreed. He also helped me find a company to do that. I'm sure people will want to keep turning the pages to find out how it ends. Anyway, I really hope it'll sell well.\nInterviewer: You're now working on a new book. Do you have a routine for writing each day?\nJenny:  Well, I get up early in the morning and start writing for a couple of hours without changing out of my pyjamas. I'll even have lunch in them, and then write for a couple more hours. When things are going well, I can write for up to sixteen hours. On those days I rarely leave the house – I find I write better as the day goes on.\nInterviewer: And what do you read for pleasure?\nJenny:  I read a variety of things as research for my writing – books about science, biographies, that sort of thing. But what I choose when I relax is things that are amusing, rather than anything too serious. It's like an escape from real life. I hardly ever choose thrillers, though. I don't know why.\nInterviewer: Well, Jenny, it was great to ... [fade]\nNow listen again. [repeat]\nThat is the end of Part Four.\nYou now have six minutes to write your answers on the answer sheet.\nYou have one more minute.\nThat is the end of the test.",
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
