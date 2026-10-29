// KET 听力 · Cambridge Exam Booster for A2 Key (2020)
// 本书无整卷，按「Part × Worksheet」工作页组织：3 套 Worksheet 各 5 个 Part 拼成 setId 33-35（booster-1/2/3）。
// 题目逐字取自 PDF：Test 1 = 书 54/60/66/72/78 页（Track 3/6/9/12/15）；Test 2 = 56/62/68/74/80（Track 4/7/10/13/16）；Test 3 = 58/65/70/76/82（Track 5/8/11/14/17）。
// 答案对照官方 Answer Key（书 117-126 页）逐题核对；P5 Test 2/3 的官方 Key 印在书 127-128 页（PDF 未含），
// 该两组答案按书内官方原文逐句推演并经第三方答案件交叉核对（详见各 set 的 trackEvidence 字段）。
// 听力原文印在 Key 区灰框内，解析依据原文撰写；音频为官方 Track 01-17，存 public/audio/ket/booster/。
// 本文件由 scripts/_eb_set33.json / _eb_set34.json / _eb_set35.json 转录工作稿生成。

export const BOOSTER_PART1_SETS = {
  "33": {
    transcript: "Narrator: Track 3 Listening Part 1 Worksheet 1.\nFor each question, choose the correct answer.\nLook at question 1.\nNarrator: 1 Where is the post office?\nMan: Excuse me, is there a post office near here?\nWoman: Yes. There's a big post office on School Street. There's a fantastic little café next to it. You can take bus number 12 from outside the bank.\nMan: Can I walk to the post office?\nWoman: Yes. You have to walk through the park and turn left after the museum.\nNarrator: Now listen again.\nNarrator: 2 What does the man order?\nWaitress: Good evening. Welcome to The Little Italy Restaurant. Here's the menu. Would you like some garlic bread to start?\nMan: No, thanks. Actually, can I order now? I'd like a pizza, please.\nWaitress: OK and what would you like to drink?\nMan: Water's fine, but could I have some salad too, please?\nNarrator: Now listen again.\nNarrator: 3 How much does the man spend?\nMan: Hello. Can I have two tickets for the new Pixar film which starts at 8:30, please?\nWoman: Yes, of course. Are you students? Student tickets are £5.75 and you get a free drink too.\nMan: I am, but my sister isn't.\nWoman: OK that's £13.25 please. Adult tickets are £7.50 at the weekend.\nNarrator: Now listen again.\nNarrator: 4 Where are the girls going today?\nGirl: Hi Maya. What shall we do this afternoon?\nMaya: Why don't we go to the beach?\nGirl: No! It's really cold, so we can't go swimming. We could go to the museum instead. Jamie said it was fantastic.\nMaya: OK. Then we can swim at the sports centre tomorrow.\nNarrator: Now listen again.\nNarrator: 5 When is the woman going to the dentist?\nMan: Good morning, Birch Street Dentists.\nWoman: Hi. Can I make an appointment to see the dentist in the afternoon, please?\nMan: OK. I can give you an appointment at three o'clock on the 14th of March or, if you want to come in the morning she can see you at 10 a.m. on Thursday the 12th.\nWoman: Oh. I'm going on holiday on the 13th. So can I have the morning one, please?\nMan: OK. See you next Thursday.\nNarrator: Now listen again.",
    "items": [
    {
      "question": "Where is the post office?",
      "image": "/images/listening/booster/test1/q1.jpg",
      "answer": 1,
      "explanation": "女士说邮局在 School Street，还特别强调「There's a fantastic little cafe next to it」，与 B 图「邮局紧邻带遮阳棚、门口摆桌椅的咖啡馆」吻合；A 图画的是邮局门口的公交候车亭，对应的是「可在银行外坐 12 路公交」这一备选方案，并非邮局位置的特征；C 图把邮局画在铁栏杆和树木（公园）后面，对应的是「步行需穿过公园、在博物馆后左转」的路线描述，也不符合。因此选择 B。",
      "imageHint": "A=门前带公交候车亭的邮局门面，右侧有邮筒；B=邮局紧邻带条纹遮阳棚与露天桌椅的咖啡馆；C=铁艺栏杆和树木后面的邮局正面，门口有邮筒。"
    },
    {
      "question": "What does the man order?",
      "image": "/images/listening/booster/test1/q2.jpg",
      "answer": 0,
      "explanation": "男士最后点单：「I'd like a pizza, please」「Water's fine, but could I have some salad too, please」，即披萨、水和沙拉，正是 A 图的内容；B 图的蒜香面包是服务员开场提议的「Would you like some garlic bread to start?」，被男士以「No, thanks」拒绝；C 图只有一盘披萨，缺少他点的饮料和沙拉。因此选择 A。",
      "imageHint": "A=一盘披萨配沙拉（生菜、番茄）和一杯水；B=一盘披萨配两片蒜香面包；C=只有一盘披萨。"
    },
    {
      "question": "How much does the man spend?",
      "image": "/images/listening/booster/test1/q3.jpg",
      "answer": 2,
      "explanation": "男士买两张 8:30 的电影票，售票员说「Student tickets are £5.75」，男士答「I am, but my sister isn't」，最后「OK that's £13.25 please」（5.75+7.50），与 C 图 £13.25 一致；A 图 £5.75 只是一张学生票价，B 图 £7.50 是周末成人单票价，都不是实付金额。因此选择 C。",
      "imageHint": "A=收据 £5.75；B=收据 £7.50；C=收据 £13.25（均为带 DATE 抬头的白色票据）。"
    },
    {
      "question": "Where are the girls going today?",
      "image": "/images/listening/booster/test1/q4.jpg",
      "answer": 1,
      "explanation": "朋友提议去海滩被 Maya 拒绝（「It's really cold, so we can't go swimming」），随后「We could go to the museum instead」获得同意（「OK.」），所以今天去的是 B 图的博物馆；A 图的海滩是被否掉的计划；C 图的体育中心是「明天再去游泳」的安排。因此选择 B。",
      "imageHint": "A=沙滩上的遮阳伞和日光躺椅；B=有石柱和两幅竖幅的古典建筑（博物馆正面）；C=带足球、球拍等运动项目圆形标志的现代弧形建筑（体育中心）。"
    },
    {
      "question": "When is the woman going to the dentist?",
      "image": "/images/listening/booster/test1/q5.jpg",
      "answer": 0,
      "explanation": "牙医诊所给出两个选择：14 号（3 月）下午三点，或「at 10 a.m. on Thursday the 12th」，女士因「I'm going on holiday on the 13th」而选早上那次（「So can I have the morning one, please」），即 3 月 12 日周四，对应 A 图圈出的 12 日（THU 列）；B 图圈的是 13 日，恰是她出发度假的日子；C 图圈的 14 日是未被选择的下午档。因此选择 A。",
      "imageHint": "A=三月日历圈出 12 日（周四列）；B=三月日历圈出 13 日（周五列）；C=三月日历圈出 14 日（周六列）。"
    }
  ]
  },
  "34": {
    transcript: "Narrator: Track 4 Listening Part 1 Worksheet 2.\nFor each question, choose the correct answer.\nLook at question 1.\nNarrator: 1 Which bus goes to the supermarket?\nMan: Sandra, do you know which bus goes to the supermarket? Is it number 23?\nSandra: I don't know. I'll have a look on their website ... Well, it says you need to catch bus 33 and it takes 13 minutes. The next one is at 4:30.\nMan: Great. It's twenty past now. If I hurry, I'll catch it!\nSandra: OK. Bye!\nNarrator: Now listen again.\nNarrator: 2 What time does the shop close?\nMan: Oh no! We haven't got any milk! Tom, can you go to the shop, please?\nTom: Yes, but it's half past five now. What time does it close?\nMan: At six on Saturday but it's a 15-minute walk, so you'll have to go now.\nTom: Right. I'll put my shoes on! Shall I buy some more bread too?\nNarrator: Now listen again.\nNarrator: 3 Which T-shirt does the woman buy?\nMan: Look at these T-shirts, Joanne. Do you like them?\nJoanne: The white one's nice and the black one is OK too, but I don't like the grey one.\nMan: Really? I love the grey one and it only costs ten pounds. But I like the black one too. How much is it?\nJoanne: Only eight pounds! I'll get that one! It's the cheapest!\nNarrator: Now listen again.\nNarrator: 4 What time does the bookshop close on Saturday?\nMan 1: Good morning. Is the bookshop open at the weekend?\nMan 2: It is on Saturdays, but we're closed on Sundays.\nMan 1: Are you open all day on Saturday?\nMan 2: Yes, but we don't open until ten. On weekdays it's 9:30, but we close at eight every night.\nNarrator: Now listen again.\nNarrator: 5 What did the man buy?\nWoman: Have you been shopping, Graham?\nGraham: Yes. I went to the shopping centre with Nicola. She bought a new mobile phone. Her old phone was stolen last week on the beach.\nWoman: What did you buy?\nGraham: I only bought a computer magazine! I wanted to buy a camera for my holiday, but they were too expensive.\nNarrator: Now listen again.",
    "items": [
    {
      "question": "Which bus goes to the supermarket?",
      "image": "/images/listening/booster/test2/q1.jpg",
      "answer": 1,
      "explanation": "男子猜是不是 23 路，桑德拉查网站后说「要坐 33 路（catch bus 33），车程 13 分钟，下一班 4:30」，因此选择 B；23 路只是男子的猜测，C 图的 630 路录音里没有提到。",
      "imageHint": "A=车头显示屏为23路的公交车 B=车头显示屏为33路的公交车 C=车头显示屏为630路的公交车"
    },
    {
      "question": "What time does the shop close?",
      "image": "/images/listening/booster/test2/q2.jpg",
      "answer": 1,
      "explanation": "汤姆说现在才五点半（half past five），男子回答周六「六点关门（At six on Saturday）」，因此选择 B；A 的 5.30 是当时的时刻，C 的 6.15 容易与「步行要 15 分钟」混淆，都不是关门时间。",
      "imageHint": "A=店门挂CLOSED牌并写5.30 B=店门挂CLOSED牌并写6.00 C=店门挂CLOSED牌并写6.15"
    },
    {
      "question": "Which T-shirt does the woman buy?",
      "image": "/images/listening/booster/test2/q3.jpg",
      "answer": 1,
      "explanation": "乔安妮不喜欢灰色那件，白色的「不错」，随后男子说黑色只要 8 英镑，她说「就买那件，最便宜（I'll get that one! It's the cheapest!）」，买的是黑色，因此选择 B；灰色被她明确否掉，白色只是没买的备选。",
      "imageHint": "A=浅灰色T恤 B=深黑色T恤 C=白色T恤"
    },
    {
      "question": "What time does the bookshop close on Saturday?",
      "image": "/images/listening/booster/test2/q4.jpg",
      "answer": 0,
      "explanation": "店员说周六营业，「每晚八点关门（we close at eight every night）」，因此选择 A（8 点整）；B 的 9:30 是工作日开门时间（On weekdays it's 9:30），C 的 10:00 是周六开门时间（we don't open until ten），都不是周六关门时间。",
      "imageHint": "A=时针指8、分针指12（8点整）的钟面 B=时针指9与10之间、分针指6（9点半）的钟面 C=时针指10、分针指12（10点整）的钟面"
    },
    {
      "question": "What did the man buy?",
      "image": "/images/listening/booster/test2/q5.jpg",
      "answer": 2,
      "explanation": "格雷厄姆说「我只买了本电脑杂志（I only bought a computer magazine）」，因此选择 C；相机是他想度假用但「太贵没买」的东西，新手机是尼科拉买的，B 图的笔记本电脑原文未提及。",
      "imageHint": "A=带大镜头的便携相机 B=打开的笔记本电脑 C=封面写着COMPUTER BUYER的杂志"
    }
  ]
  },
  "35": {
    transcript: "Narrator: Track 5 Listening Part 1 Worksheet 3.\nFor each question, choose the correct answer.\nLook at question 1.\nNarrator: 1 What is the boy's favourite subject?\nGirl: Harry, can you help me to study for my maths test, please?\nHarry: Of course, but I need to finish my geography homework first.\nGirl: Thanks. I've got to do a chemistry project too! I don't like chemistry.\nHarry: Really? I love it. It's my favourite subject.\nNarrator: Now listen again.\nNarrator: 2 Where does the girl put the dictionary?\nTeacher: OK. Everyone put your books in your bag or under your desks. We're going to do a vocabulary test.\nGirl: Shall I put this dictionary on the bookshelf? It's not mine – it belongs to the school.\nTeacher: No, can you leave it on that table near the door, please?\nGirl: OK.\nNarrator: Now listen again.\nNarrator: 3 What does the boy lend the girl?\nBoy: Hi, Josie. Have you got your English book today?\nJosie: Yes, I have. I put it in my bag last night and I've got my pencil case too ... but I've left my ruler at home!\nBoy: Oh Josie! You always forget something! Do you want to borrow mine?\nJosie: Yes, please. I need it for the maths test today.\nNarrator: Now listen again.\nNarrator: 4 What time does the TV programme start?\nMum: There's a programme on TV tomorrow that might be useful for your history project, Melissa.\nMelissa: Really? What time is it on? I've got volleyball practice at 5:45 and the coach told us not to be late!\nMum: It's on channel 10 at five thirty. It's only half an hour long.\nMelissa: I'll probably watch it online later.\nNarrator: Now listen again.\nNarrator: 5 Where does the medical student have lessons?\nWoman: Hello, Patrick. Are you enjoying your university course?\nPatrick: Yes, I am. Medicine is very interesting and I love living in the city, and there's a fantastic library near my flat. I usually study there at the weekends because I have a lot of exams!\nWoman: Do you have lessons in the hospital?\nPatrick: No, we spend a lot of time there every week, but all of our classes are in the main university building with the other students.\nNarrator: Now listen again.",
    "items": [
    {
      "question": "What is the boy’s favourite subject?",
      "image": "/images/listening/booster/test3/q1.jpg",
      "answer": 0,
      "explanation": "女孩说自己要先赶地理作业、还要做化学项目，并说 I don’t like chemistry；男孩 Harry 回答 Really? I love it. It’s my favourite subject.，可见他最喜欢的科目是化学（科学课），对应 A 图的试管和护目镜。B 的地球仪代表地理，只是女孩要写的作业；C 的黑板写着 2+2=4，代表数学，男孩只是在准备数学测验，并非最爱科目。",
      "imageHint": "A=试管架和护目镜（科学实验器材） B=地球仪 C=写着 2+2=4 的小黑板"
    },
    {
      "question": "Where does the girl put the dictionary?",
      "image": "/images/listening/booster/test3/q2.jpg",
      "answer": 0,
      "explanation": "女孩提议 Shall I put this dictionary on the bookshelf?（放回书架），老师明确说 No, can you leave it on that table near the door, please?，女孩答 OK，所以字典最终放在门边的桌上，对应 A。B 的书架是被老师否掉的提议；C 的课桌和书包对应老师让大家安顿自己书的位置（put your books in your bag or under your desks），不是这本字典的去处。",
      "imageHint": "A=门边小桌上放着一本书 B=门旁敞开的柜式书架 C=桌上放着书包（露出书本）"
    },
    {
      "question": "What does the boy lend the girl?",
      "image": "/images/listening/booster/test3/q3.jpg",
      "answer": 2,
      "explanation": "Josie 说自己带了英语书和铅笔盒，但 I’ve left my ruler at home!（尺子忘在家里），男孩便说 Do you want to borrow mine?（借给她自己的），她要拿它参加数学测验，因此选 C 直尺。A 铅笔盒她已经有（I’ve got my pencil case too）；B 英语书她也带了（Have you got your English book today? – Yes, I have.），都不是要借的东西。",
      "imageHint": "A=打开的铅笔盒（插着笔） B=封面印 ENGLISH 的厚书 C=一把直尺"
    },
    {
      "question": "What time does the TV programme start?",
      "image": "/images/listening/booster/test3/q4.jpg",
      "answer": 1,
      "explanation": "妈妈说节目 It’s on channel 10 at five thirty（五点半在 10 频道开播），对应 B 的 5 点半钟面。C 的 5 点 45 是 Melissa 排球训练的时间（I’ve got volleyball practice at 5:45 and the coach told us not to be late!），她那时看不了；A 的 10 点整与对话内容无关，属纯干扰。",
      "imageHint": "A=时针指 10、分针指 12 的钟面（10 点整） B=时针在 5 与 6 之间、分针指 6 的钟面（5 点半） C=分针指 9、时针接近 6 的钟面（5 点 45）"
    },
    {
      "question": "Where does the medical student have lessons?",
      "image": "/images/listening/booster/test3/q5.jpg",
      "answer": 1,
      "explanation": "Patrick 读医学，被问到 Do you have lessons in the hospital? 时明确回答 No，并说 all of our classes are in the main university building with the other students（所有课都在大学主楼上），对应 B 的古典大楼。A 是医院——他们每周在医院花很多时间（we spend a lot of time there every week）但不在那里上课；C 的现代建筑对应他提到的图书馆（a fantastic library near my flat），他只是周末去那里自习。",
      "imageHint": "A=带 H 标志的医院门口停着救护车 B=古典圆顶大楼前站着两位穿学位袍的人 C=立面带书本造型标牌的现代建筑（图书馆）"
    }
  ]
  }

}

export const BOOSTER_PART2_SETS = {
  "33": {
    transcript: "Narrator: Track 6 Listening Part 2 Worksheet 1.\nFor each question, write the correct answer in the gap. Write one word or a number or a date or a time.\nLook at questions 1 to 5 now. You have 10 seconds.\nYou will hear a woman talking about renting a boat for a holiday.\nWoman: Thank you for calling Riverboat Holidays. This is the information line for booking our boat called Moonlight. This boat can be booked by groups of different sizes. The smallest group is two people and the largest is eight people. There are three bedrooms and a large sofa that two people can sleep on.\nThe boat can be booked for holidays from 1st June to 31st August, but this summer it's only available in August. June and July are already booked.\nIf you book a holiday on the boat, we ask you to pay £150 straightaway, and the rest of the money four weeks before your holiday. You'll pay £475 altogether for one week.\nPeople often ask if they need to bring sheets and blankets, but these are already on the beds. However, there are no towels on the boat, so you will need to bring these.\nIf you'd like to book the boat, please visit our website – www.riverboatholidays.com – or call us on 2150699. We're open seven days a week.\nNarrator: Now listen again.",
    "title": "Part 2 信息填空题",
    "instruction": "For each question, write the correct answer in the gap. Write one word or a number or a date or a time. You will hear a woman talking about renting a boat for a holiday.（听一位女士介绍租船度假，每空填写一个单词、数字、日期或时间。表格标题 Riverboat Holidays，示例已给出：Name of boat: Moonlight。）",
    "type": "blanks",
    "items": [
      {
        "q": "Riverboat Holidays — Boat is for: between two and ___ people",
        "answer": [
          "8",
          "eight"
        ],
        "show": "8"
      },
      {
        "q": "Riverboat Holidays — Dates available this year: 1st–31st ___",
        "answer": [
          "August",
          "Aug"
        ],
        "show": "August"
      },
      {
        "q": "Riverboat Holidays — Total cost: £ ___ per week",
        "answer": [
          "475",
          "£475",
          "475 pounds"
        ],
        "show": "475"
      },
      {
        "q": "Riverboat Holidays — Must bring: ___",
        "answer": [
          "towels"
        ],
        "show": "towels"
      },
      {
        "q": "Riverboat Holidays — Phone number to book: ___",
        "answer": [
          "2150699"
        ],
        "show": "2150699"
      }
    ]
  },
  "34": {
    transcript: "Narrator: Track 7 Listening Part 2 Worksheet 2.\nFor each question, write the correct answer in the gap. Write one word or a number or a date or a time.\nLook at questions 1 to 5 now. You have 10 seconds.\nYou will hear a woman talking about a medical centre.\nWoman: If you've just moved to the town, it's a good idea to get a doctor as soon as possible. We are the largest medical centre and you'll find us in Park Street. That's in the centre of town, opposite the post office and beside the library.\nPeople who are new to the centre will see Dr Moore – that's M-double O-R-E. She's from England, but she's lived in other countries and can speak Spanish too.\nThe medical centre is open weekdays from 8 a.m. to 6 p.m., but on Mondays we open later, at 8:30 a.m., and Fridays we shut at 5:30 p.m. On Tuesdays we close at 5 p.m. for staff training.\nWe'll always try to see you the same day you call us. If you have a problem when the medical centre isn't open, then you'll need to call the hospital on 467402. They'll give you advice or tell you if you need to go to hospital immediately.\nNarrator: Now listen again.",
    "title": "Part 2 信息填空题",
    "instruction": "听一位女士介绍一家医疗中心（medical centre），为每题在空格处写出正确答案——填一个单词、数字、日期或时间。表格标题为 Medical centre，首行 Address: Park Street 为示例，不计题。",
    "type": "blanks",
    "items": [
      {
        "q": "Medical centre — Centre is next to the ___",
        "answer": [
          "library"
        ],
        "show": "library",
        "explanation": "女士说医疗中心在市中心、邮局对面，「就在图书馆旁边（opposite the post office and beside the library）」，所以紧挨着的是图书馆，填 library。"
      },
      {
        "q": "Medical centre — Doctor’s name: Dr ___",
        "answer": [
          "Moore"
        ],
        "show": "Moore",
        "explanation": "新来的医生是 Moore 医生，原文特意拼读「M-double O-R-E」，填 Moore。"
      },
      {
        "q": "Medical centre — Doctor speaks: English and ___",
        "answer": [
          "Spanish"
        ],
        "show": "Spanish",
        "explanation": "医生来自英格兰，但在其他国家住过，「也会说西班牙语（can speak Spanish too）」，填 Spanish。"
      },
      {
        "q": "Medical centre — Closes every Tuesday at: ___ p.m.",
        "answer": [
          "five",
          "5"
        ],
        "show": "five",
        "explanation": "中心平日 8 点到 6 点开门、周五 5:30 关门，但「周二下午 5 点关门做员工培训（On Tuesdays we close at 5 p.m. for staff training）」，表格已印 p.m.，填 five（或 5）。"
      },
      {
        "q": "Medical centre — Hospital phone number: ___",
        "answer": [
          "467402"
        ],
        "show": "467402",
        "explanation": "医疗中心不开放时如有问题要打医院电话：「call the hospital on 467402」，填 467402。"
      }
    ]
  },
  "35": {
    transcript: "Narrator: Track 8 Listening Part 2 Worksheet 3.\nFor each question, write the correct answer in the gap. Write one word or a number or a date or a time.\nLook at questions 1 to 5 now. You have 10 seconds.\nYou will hear a teacher talking about photography lessons.\nJoe: I'm Joe and I'm a teacher on the photography course. Photography is a very popular subject, so we offer these courses three times a year.\nThe next course starts on the third of October and finishes in the second week of December.\nAll lessons are in the evenings. In the new year, the classes will be on Thursdays, but the first course, starting in October, is on Wednesdays. Classes start at 6:30 p.m. and finish at 8:30.\nWhat else? The price of the course is £75 and you'll need your own camera, and you'll probably need to spend about £20 on buying photo paper.\nIf you want to book a place on the evening course, the college is open in July and September, but it's not open at all in August.\nThe college office is open from 9:30 a.m. to 12:45 p.m., and 5:30 p.m. to 9 p.m.\nThe college address is 59 Bracknell Street – that's B-R-A-C-K-N-E-double L. We're very near the park, and we have a large car park.\nNarrator: Now listen again.",
    "title": "Part 2 信息填空题",
    "instruction": "听老师 Joe 介绍摄影课程（表格标题 Photography course），每题填写一个单词、数字、日期或时间（示例条目 Start: 3rd October 不计分）。原文说明：For each question, write the correct answer in the gap. Write one word or a number or a date or a time. You will hear a teacher talking about photography lessons.",
    "type": "blanks",
    "items": [
      {
        "q": "Photography course — Day of course during October: ___",
        "answer": [
          "Wednesdays",
          "Wednesday"
        ],
        "show": "Wednesdays"
      },
      {
        "q": "Photography course — Cost: £ ___",
        "answer": [
          "75",
          "seventy-five",
          "seventy five",
          "75 pounds"
        ],
        "show": "75"
      },
      {
        "q": "Photography course — Month when college is closed: ___",
        "answer": [
          "August"
        ],
        "show": "August"
      },
      {
        "q": "Photography course — College office closes in the evening at: ___",
        "answer": [
          "9",
          "nine p.m.",
          "9 p.m.",
          "21.00",
          "9.00"
        ],
        "show": "nine p.m."
      },
      {
        "q": "Photography course — Address: 59 ___ Street",
        "answer": [
          "Bracknell"
        ],
        "show": "Bracknell"
      }
    ]
  }
}

export const BOOSTER_PART3_SETS = {
  "33": {
    transcript: "Narrator: Track 9 Listening Part 3 Worksheet 1.\nFor each question, choose the correct answer.\nLook at questions 1–5 now. You have twenty seconds.\nYou will hear Jack talking to his friend Martin about music.\nJack: Hi Martin. Have you heard the new 'Sunny Days' song? I love it.\nMartin: Me too, Jack. I'm learning to play it on my guitar.\nJack: I'd love to play the guitar.\nMartin: You should learn! I go to classes with Steve from football. We're in the same class. Our teacher, Peter, is fantastic He used to play with the group Harry's Band.\nJack: Wow! Is there a class on Friday?\nMartin: I don't know. I go on Tuesdays now, but next term I'm changing to Thursdays.\nJack: How often do you practise?\nMartin: During the week, an hour or two, and on Saturdays three hours with my band. We're called The Red Chilies!\nJack: Cool.\nMartin: Actually, we're playing in the music festival on Saturday. Do you want to come?\nJack: I'd like to see you play, but what's the festival like?\nMartin: Really great. There aren't too many people, the bands are all local like mine, and tickets aren't too expensive.\nJack: Then I'll come. And I'll bring my camera.\nMartin: Great. I have to get there at 6:15, and we play at 7:45.\nJack: Why don't I come at seven and take photos before you go on stage?\nMartin: Perfect.\nNarrator: Now listen again.",
    "title": "Part 3 长篇听力题",
    "instruction": "For each question, choose the correct answer. You will hear Jack talking to his friend Martin about music.（听 Jack 和朋友 Martin 谈论音乐，为每题选择正确答案。）",
    "type": "mcq",
    "items": [
      {
        "q": "What is the name of Martin's music teacher?",
        "opts": [
          "Harry",
          "Peter",
          "Steve"
        ],
        "answer": 1,
        "explanation": "Martin 介绍：「Our teacher, Peter, is fantastic!」老师叫 Peter，因此选 B；Steve 是和 Martin 一起上足球班、又同去吉他班的同学，Harry 只是 Peter 以前待过的乐队 Harry's Band 的名字，都不是老师。"
      },
      {
        "q": "Martin has music lessons on",
        "opts": [
          "Tuesdays.",
          "Thursdays.",
          "Saturdays."
        ],
        "answer": 0,
        "explanation": "Martin 说「I go on Tuesdays now, but next term I'm changing to Thursdays」，现在周二上课，因此选 A；周四是下学期才换的时间，周六是他和乐队排练以及音乐节演出的日子。"
      },
      {
        "q": "How long does Martin practise at the weekend?",
        "opts": [
          "1 hour",
          "2 hours",
          "3 hours"
        ],
        "answer": 2,
        "explanation": "Martin 说平时练「an hour or two」，而「on Saturdays three hours with my band」，周末练三小时，因此选 C；A、B 都是周中的练习时长。"
      },
      {
        "q": "Martin likes the music festival because",
        "opts": [
          "tickets are free.",
          "the bands are local.",
          "there are lots of people there."
        ],
        "answer": 1,
        "explanation": "Martin 评价音乐节：「There aren't too many people, the bands are all local like mine, and tickets aren't too expensive」，乐队都是本地的，因此选 B；票只是「不太贵」而非免费（A 不对），人「不多」与 C「人很多」正好相反。"
      },
      {
        "q": "Jack will arrive at the music festival",
        "opts": [
          "at 6.15.",
          "at 7.00.",
          "at 7.45."
        ],
        "answer": 1,
        "explanation": "Martin 说自己 6:15 到、7:45 开演，Jack 提议「Why don't I come at seven and take photos before you go on stage?」，即七点到，因此选 B；A 是 Martin 的到达时间，C 是 Martin 乐队开演的时间，都不是 Jack 的到场时间。"
      }
    ]
  },
  "34": {
    transcript: "Narrator: Track 10 Listening Part 3 Worksheet 2.\nFor each question, choose the correct answer.\nLook at questions 1–5 now. You have twenty seconds.\nYou will hear Lisa talking to her friend Robert about computers.\nRobert: Hi Lisa. How are you?\nLisa: Great. I've just got a new laptop.\nRobert: Where did you buy it?\nLisa: In town. I went to the shop on the High Street, and I also looked in a new one on Green Street but they were very expensive, so I bought it in the little shop on Bridge Street.\nRobert: I've only looked at websites. Parks-computers.com didn't give much information. The same was true for new-laptop.com, but buy-a-computer.com was great. Is your new laptop heavy?\nLisa: It's one and a half kilogrammes, but my old one was three kilogrammes. The best ones these days are only one kilogramme!\nRobert: And was it expensive?\nLisa: Well, the one I really wanted cost £849! I didn't get it. The shop assistant showed me one for £579, but it didn't have enough memory. I spent £699 in the end ... What do you need a laptop for?\nRobert: I want to use it at university every day. And I'm going to help my brother improve the website for his camera shop.\nLisa: That sounds interesting!\nNarrator: Now listen again.",
    "title": "Part 3 长篇听力题",
    "instruction": "听丽莎（Lisa）和她的朋友罗伯特（Robert）谈论电脑，为每题选择正确答案。",
    "type": "mcq",
    "items": [
      {
        "q": "Where did Lisa buy her laptop?",
        "opts": [
          "Bridge Street",
          "Green Street",
          "High Street"
        ],
        "answer": 0,
        "explanation": "丽莎说高街那家店她去过，绿街的新店「很贵（very expensive）」，最后「是在桥街的小店买的（so I bought it in the little shop on Bridge Street）」，因此选择 A；高街和绿街都不是她购买的地方。"
      },
      {
        "q": "The most useful website Robert has seen is",
        "opts": [
          "buy-a-computer.com",
          "parks-computers.com",
          "new-laptop.com"
        ],
        "answer": 0,
        "explanation": "罗伯特说 Parks-computers.com「信息不多」，new-laptop.com 也一样，而「buy-a-computer.com 很棒（buy-a-computer.com was great）」，因此选择 A。"
      },
      {
        "q": "Lisa’s new laptop weighs",
        "opts": [
          "one kilogramme.",
          "1.5 kilogrammes.",
          "two kilogrammes."
        ],
        "answer": 1,
        "explanation": "丽莎说新笔记本「一公斤半（one and a half kilogrammes）」，旧的是三公斤，罗伯特说现在最好的只要一公斤——一公斤和三公斤都是干扰信息，因此选择 B（1.5 kilogrammes）。"
      },
      {
        "q": "How much did Lisa pay for her laptop?",
        "opts": [
          "£579",
          "£699",
          "£849"
        ],
        "answer": 1,
        "explanation": "原文说真正想要的那台要 £849 但没买，店员推荐的 £579 那台「内存不够（didn’t have enough memory）」，最后「花了 £699（I spent £699 in the end）」，因此选择 B。（该篇官方文稿有数行说话人标签互调的排印问题，但三个金额的对应关系不变。）"
      },
      {
        "q": "Why will Robert buy a new laptop?",
        "opts": [
          "to talk to his brother",
          "to shop online",
          "to study"
        ],
        "answer": 2,
        "explanation": "罗伯特说「我想每天在大学里用它（I want to use it at university every day）」，即为了学习，因此选择 C；他只是要帮兄弟改进相机店的网站（help my brother improve the website），不是「和兄弟聊天」，也没说要在网上购物。"
      }
    ]
  },
  "35": {
    transcript: "Narrator: Track 11 Listening Part 3 Worksheet 3.\nFor each question, choose the correct answer.\nLook at questions 1–5 now. You have twenty seconds.\nYou will hear James talking to his friend Susan about his holiday.\nSusan: Are you excited about your holiday, James?\nJames: Yes!\nSusan: How long are you away for?\nJames: Three weeks. Some friends are going to stay at my house for two weeks. And my cousin will be there for the final week. I'll be home on the 30th.\nSusan: Where exactly are you going?\nJames: Miami and Paris. There are flights to France from Manchester every day, so I'm spending a few days exploring Paris before flying to Miami.\nSusan: Amazing!\nJames: Have you ever been to the USA, Susan?\nSusan: Not yet, I went to Mexico when I was younger, and I went skiing in Canada in January, but I'd like to visit the USA next year. How long's the flight to Miami?\nJames: Eight and a half hours, which is OK. But I never sleep on planes, so I'm sure I will just want to go to bed when I arrive.\nSusan: Shall I meet you at the airport when you get back?\nJames: Yes, please. I arrive at 5:35 in the afternoon.\nSusan: The arrivals hall will be really busy then. And it'll be hard to find a space in the car park. I'll pick you up in the bus station, by the exit.\nJames: I know where you mean. Great, thanks.\nNarrator: Now listen again.",
    "title": "Part 3 长篇听力题",
    "instruction": "听 James 和他的朋友 Susan 谈论 James 的假期，为每题选择正确答案。原文说明：For each question, choose the correct answer. You will hear James talking to his friend Susan about his holiday.",
    "type": "mcq",
    "items": [
      {
        "q": "How long is James’s holiday?",
        "opts": [
          "one week",
          "two weeks",
          "three weeks"
        ],
        "answer": 2,
        "explanation": "James 明确说 Three weeks，并解释：朋友们先在他家住两周（Some friends are going to stay at my house for two weeks），最后一周表兄来（my cousin will be there for the final week），所以假期共三周，选 C。two weeks 只是朋友住的时长，one week 原文未出现，均为干扰。"
      },
      {
        "q": "Where is James flying to first?",
        "opts": [
          "Manchester",
          "Miami",
          "Paris"
        ],
        "answer": 2,
        "explanation": "他说 There are flights to France from Manchester every day, so I’m spending a few days exploring Paris before flying to Miami，即先从曼彻斯特飞往巴黎逛几天，然后再飞迈阿密，第一站是巴黎，选 C。A 曼彻斯特只是出发地；B 迈阿密是之后才飞的城市。"
      },
      {
        "q": "Where did Susan go in January?",
        "opts": [
          "Canada",
          "Mexico",
          "the USA"
        ],
        "answer": 0,
        "explanation": "Susan 说 I went skiing in Canada in January（一月去加拿大滑雪），选 A。墨西哥是她 when I was younger（更小的时候）去的；美国则是 I’d like to visit the USA next year（想明年去、还没去过 Not yet），B、C 都不是一月的行程。"
      },
      {
        "q": "How does James feel about the flight to Miami?",
        "opts": [
          "It will be too long.",
          "He will feel tired after it.",
          "He will use the time to sleep."
        ],
        "answer": 1,
        "explanation": "James 说飞迈阿密要 Eight and a half hours, which is OK——时长他觉得可以接受，排除 A（It will be too long.）；接着说 But I never sleep on planes, so I’m sure I will just want to go to bed when I arrive，即他从不睡飞机、落地只会想睡觉，可见下机后会疲惫，选 B；C（用睡觉时间打发航程）与 I never sleep on planes 直接矛盾。"
      },
      {
        "q": "Where at the airport will Susan meet James?",
        "opts": [
          "in the car park",
          "in the arrivals hall",
          "in the bus station"
        ],
        "answer": 2,
        "explanation": "Susan 说 James 下午 5:35 到，而 The arrivals hall will be really busy then（到达大厅会很挤）、it’ll be hard to find a space in the car park（停车场难找车位），最后说 I’ll pick you up in the bus station, by the exit，所以在公交车站接他，选 C；A、B 都被她以不便为由排除。"
      }
    ]
  }
}

export const BOOSTER_PART4_SETS = {
  "33": {
    transcript: "Narrator: Track 12 Listening Part 4 Worksheet 1.\nFor each question, choose the correct answer.\nNarrator: 1 You will hear two friends talking about the man's new apartment. What did he buy for his new apartment?\nWoman: I like your new apartment, Pete. Have you bought many things for it?\nPete: My parents gave me some of their old furniture, including shelves to put my books on. The sofa isn't very comfortable so I got myself that armchair – it was only £50 in a sale. The curtains were here already. I really like them.\nWoman: They're very nice.\nPete: Thanks!\nNarrator: Now listen again.\nNarrator: 2 You will hear a boy leaving a message for his mother. Where is the cake?\nMatt: Mum, it's Matt. If you get home before me and think I've eaten all that chocolate cake you left on the table, don't worry – I haven't! It was really hot in the kitchen because the oven was on, so I put it somewhere cool – the second shelf of the fridge, by the bowl of salad.\nNarrator: Now listen again.\nNarrator: 3 You will hear a woman talking to her daughter Jodie. Where is Jodie's grandfather now?\nMum: Jodie, where's your grandfather? I thought he was in the living room watching TV. But he's not.\nJodie: He was just outside, Mum, putting new plants in the ground.\nMum: I can't see him through the window.\nJodie: He said he wanted to fix the broken light on your car too. Maybe he's doing that now. That's why you can't see him outside.\nNarrator: Now listen again.\nNarrator: 4 You will hear a woman talking about her office at home. What will the woman move?\nWoman: I work from home and use a bedroom as an office. I've just bought some new furniture for it, so I have something to put my computer and all my papers on. But it's in a dark corner so I'm going to get that small light from on top of the cupboard and put it next to me. That'll help.\nNarrator: Now listen again.\nNarrator: 5 You will hear a man talking about a holiday. What is broken?\nWoman: Oh no. We're going to be late for the restaurant. And the radio just said the traffic's bad in town.\nMan: Don't worry. We can still be early. I've only just watched the six o'clock news. But look at the time on the wall.\nWoman: Oh, that stopped working yesterday. I forgot to put a new battery in. Sorry!\nNarrator: Now listen again.",
    "title": "Part 4 短篇听力题",
    "instruction": "For each question, choose the correct answer.（共五段独立短听力，每题题干以 You will hear … 说明场景，听完选择正确答案。）",
    "type": "mcq",
    "items": [
      {
        "q": "You will hear two friends talking about the man's new apartment. What did he buy for his new apartment?",
        "opts": [
          "bookshelves",
          "an armchair",
          "curtains"
        ],
        "answer": 1,
        "explanation": "Pete 说「I got myself that armchair – it was only £50 in a sale」，自己买的是扶手椅，因此选 B；书架（放书的 shelves）是父母给的旧家具，窗帘「were here already」是原本就有的，都不是他买的。"
      },
      {
        "q": "You will hear a boy leaving a message for his mother. Where is the cake?",
        "opts": [
          "on the table",
          "in the fridge",
          "on the cooker"
        ],
        "answer": 1,
        "explanation": "Matt 留言说厨房太热，蛋糕被他挪到了凉快的地方：「I put it somewhere cool – the second shelf of the fridge, by the bowl of salad」，因此选 B；桌上（A）是妈妈原来放蛋糕的位置，烤箱开着只是厨房变热的原因，蛋糕并不在炉灶上（C）。"
      },
      {
        "q": "You will hear a woman talking to her daughter Jodie. Where is Jodie's grandfather now?",
        "opts": [
          "in the garden",
          "in the living room",
          "in the garage"
        ],
        "answer": 2,
        "explanation": "Jodie 说爷爷刚才是「putting new plants in the ground」（在花园），之后「He said he wanted to fix the broken light on your car too. Maybe he's doing that now」，现在应在车库里修车灯，因此选 C；A 是他之前种植物的位置，B 客厅是妈妈以为他在、但已经不在的地方。"
      },
      {
        "q": "You will hear a woman talking about her office at home. What will the woman move?",
        "opts": [
          "a lamp",
          "a desk",
          "a cupboard"
        ],
        "answer": 0,
        "explanation": "女士说新家具放在暗角，所以「I'm going to get that small light from on top of the cupboard and put it next to me」，要挪动的是那盏小灯，因此选 A；放电脑和文件的新桌子（B）不搬，碗柜（C）也只是灯原先摆放的位置，本身不动。"
      },
      {
        "q": "You will hear a man and a woman talking at home. What is broken?",
        "opts": [
          "a clock",
          "a radio",
          "a television"
        ],
        "answer": 0,
        "explanation": "女士指墙上的钟「But look at the time on the wall」，男士说「that stopped working yesterday. I forgot to put a new battery in」，坏了的是钟，因此选 A；收音机刚播报了路况说明正常（B 不对），男士刚看完六点新闻，电视也是好的（C 不对）。"
      }
    ]
  },
  "34": {
    transcript: "Narrator: Track 13 Listening Part 4 Worksheet 2.\nFor each question, choose the correct answer.\nNarrator: 1 You will hear two friends talking about going to the theatre. How will the woman travel to the theatre?\nMan: Do you need a lift to the theatre? I can pick you up at seven.\nWoman: Thanks, but I have a meeting at five. I'll stay in town to get supper and then walk to the theatre.\nMan: Then I'll come into town by bus.\nWoman: We can share a taxi back after the play.\nMan: Your house is on my way home.\nMan: OK.\nNarrator: Now listen again.\nNarrator: 2 You will hear a boy talking about a book he has just read. What did he think about the book?\nBoy: I usually prefer watching films to reading books, and I love comedies. But I have just read Last Chances. Normally, it takes me ages to finish a book but I only started this one three nights ago. As soon as I read the first page, I couldn't put it down – I just had to find out what happened next.\nNarrator: Now listen again.\nNarrator: 3 You will hear two friends agreeing where to meet before a concert. Where will they meet?\nGirl: Shall we meet by the ticket office at the concert hall?\nBoy: There'll be so many people there. I might miss you. Why don't we wait for each other where you go in. If we stand by the doors, we'll definitely see each other.\nGirl: Good idea.\nBoy: Hopefully there'll be time to buy a coffee before the concert starts.\nNarrator: Now listen again.\nNarrator: 4 You will hear a woman describing her job. What is her job?\nWoman: I've lived in this city all my life, and know lots about its history. I work for a travel company and we get visitors from around the world. I go with the coach to pick them up from the airport and take them on sightseeing trips every day. I stay with them till the coach drops them at the hotel.\nNarrator: Now listen again.\nNarrator: 5 You will hear a teacher talking to her class. What does she want the class to do?\nTeacher: OK everyone, please put your pens down and look at page 27 in your art history books. Have a look at the pictures on that page, and then discuss the answers to the questions that I've put on the board. Please work with the person next to you.\nNarrator: Now listen again.",
    "title": "Part 4 短篇听力题",
    "instruction": "为每题选择正确答案；每小题各配一段独立短录音，题干中已注明会听到谁、谈论什么。",
    "type": "mcq",
    "items": [
      {
        "q": "You will hear two friends talking about going to the theatre. How will the woman travel to the theatre?",
        "opts": [
          "by car",
          "on foot",
          "in a taxi"
        ],
        "answer": 1,
        "explanation": "男子主动提出七点开车捎她，女士说自己五点有个会，会留在镇上吃晚饭「然后走去剧院（then walk to the theatre）」，因此选择 B（on foot）；坐车（A）的提议被婉拒，出租车（C）未出现。"
      },
      {
        "q": "You will hear a boy talking about a book he has just read. What did he think about the book?",
        "opts": [
          "It was funny.",
          "It was strange.",
          "It was exciting."
        ],
        "answer": 2,
        "explanation": "男孩说平常一本书要读很久，这本三晚就读完、「一读就放不下（I couldn’t put it down）」，说明非常精彩，因此选择 C（It was exciting.）；他爱看喜剧片是说自己平时偏好，不是说这本书搞笑（A），strange（B）原文没有。"
      },
      {
        "q": "You will hear two friends agreeing where to meet before a concert. Where will they meet?",
        "opts": [
          "at the café",
          "at the ticket office",
          "at the entrance"
        ],
        "answer": 2,
        "explanation": "女孩提议在售票处碰面，男孩觉得那里人多会走散，建议「在进场的入口互相等（wait for each other where you go in / stand by the doors）」，女孩同意，因此选择 C（at the entrance）；票务处（B）被否决，咖啡馆只是音乐会前「也许有时间去买咖啡」，不是碰面点（A）。"
      },
      {
        "q": "You will hear a woman describing her job. What is her job?",
        "opts": [
          "tour guide",
          "coach driver",
          "hotel receptionist"
        ],
        "answer": 0,
        "explanation": "女士说在这座城市住了一辈子、熟悉历史，在旅行社工作，跟大巴去机场接游客、每天带他们观光（take them on sightseeing trips），是导游，因此选择 A；她只是随车同行并非司机（B），酒店只是把游客送到的地方（C）。"
      },
      {
        "q": "You will hear a teacher talking to her class. What does she want the class to do?",
        "opts": [
          "read something",
          "draw something",
          "write something"
        ],
        "answer": 0,
        "explanation": "老师让大家「放下笔（put your pens down）」、翻看艺术史书第 27 页上的图画并讨论板书上的问题，即阅读内容，因此选择 A（read something）；放下笔排除了写字（C），看书画页也不是要他们画画（B）。"
      }
    ]
  },
  "35": {
    transcript: "Narrator: Track 14 Listening Part 4 Worksheet 3.\nFor each question, choose the correct answer.\nNarrator: 1 You will hear a girl telling her uncle about school. What is her favourite subject?\nSteph: Hi Uncle Jamie.\nUncle: Hi Steph, how's school these days?\nSteph: Well, science lessons have got really hard, so I'm losing interest in them. But art classes are the opposite. They give me a chance to relax, and are the best part of my week. I really like my history teacher, but I'm not so interested in this term's topic.\nUncle: I see!\nNarrator: Now listen again.\nNarrator: 2 You will hear a teacher talking to students. What is different about today's science club?\nTeacher: Could I have everyone's attention, please? If you're going to the Year 9 science club in the chemistry lab at lunchtime today, I just want to let you know that Mrs Wilson is ill, so I'll be running the session today. See you at midday then.\nNarrator: Now listen again.\nNarrator: 3 You will hear Jim telling his friend why he can't play hockey. What has Jim hurt?\nGirl: Hi Jim. I thought you had sport now?\nJim: I do, but I can't play hockey.\nGirl: Have you still got a problem with your leg?\nJim: That's ok now. I cut my fingers when I was helping my grandad in his garden, and now it's too painful to hold my hockey stick. I can't even put my hockey boots on.\nGirl: Oh.\nNarrator: Now listen again.\nNarrator: 4 You will hear two friends talking at school. What has the girl forgotten to bring to school?\nGirl: Ben, can you lend me something to write with today?\nBen: Sure, but you normally have loads of pens.\nGirl: I emptied my school bag last night when I was looking for my purse. I forgot to put my case back in.\nBen: Have you forgotten to bring money today too?\nGirl: No, I put that back in my bag after I found it.\nNarrator: Now listen again.\nNarrator: 5 You will hear a teacher talking to her class about a visit yesterday. Where did they visit?\nTeacher: Good morning, class. I hope you enjoyed the trip yesterday. This morning in biology, we're going to use the computers to find out more information about the kinds of monkeys we enjoyed seeing yesterday afternoon and make posters about them. You can include any pictures you drew while you were watching them.\nNarrator: Now listen again.",
    "title": "Part 4 短篇听力题",
    "instruction": "逐题听五段独立短录音（女孩与叔叔、老师、Jim 与同学、两位同学、老师与全班），选择正确答案。原文说明：For each question, choose the correct answer.",
    "type": "mcq",
    "items": [
      {
        "q": "You will hear a girl telling her uncle about school. What is her favourite subject?",
        "opts": [
          "history",
          "art",
          "science"
        ],
        "answer": 1,
        "explanation": "Steph 说科学课变难、I’m losing interest in them（对科学失去兴趣），但艺术课相反——They give me a chance to relax, and are the best part of my week，是她一周中最喜欢的部分，选 B。A 历史：她只说喜欢历史老师（I really like my history teacher），但对这学期的主题不感兴趣（I’m not so interested in this term’s topic）；C 科学：正失去兴趣。"
      },
      {
        "q": "You will hear a teacher talking to students. What is different about today’s science club?",
        "opts": [
          "the time",
          "the room",
          "the teacher"
        ],
        "answer": 2,
        "explanation": "老师通知：今天中午在化学实验室的 9 年级科学俱乐部照常（in the chemistry lab at lunchtime today… See you at midday then），但因 Mrs Wilson is ill，改由他来上课（I’ll be running the session today）。时间、地点都没变，变的是老师，选 C；A、B 均与原文矛盾。"
      },
      {
        "q": "You will hear Jim telling his friend why he can’t play hockey. What has Jim hurt?",
        "opts": [
          "his hand",
          "his leg",
          "his foot"
        ],
        "answer": 0,
        "explanation": "同学问 Jim 腿是不是还有问题，他说 That’s ok now（腿已经好了）；真正的原因是 I cut my fingers when I was helping my grandad in his garden（帮爷爷打理花园时切到了手指），疼得握不住曲棍球杆、连球靴都穿不上。手指属于手，选 A；B 腿已无碍；C 脚只是因手疼穿不上靴子，并非受伤部位。"
      },
      {
        "q": "You will hear two friends talking at school. What has the girl forgotten to bring to school?",
        "opts": [
          "her bag",
          "her purse",
          "her pencil case"
        ],
        "answer": 2,
        "explanation": "女孩向 Ben 借笔，解释说自己昨晚为找钱包把书包倒空，I forgot to put my case back in（忘了把笔袋放回去），所以今天没带铅笔盒，选 C。B 钱包：找到了并且放回了包里（No, I put that back in my bag after I found it）；A 书包：她带着，只是被清空了。"
      },
      {
        "q": "You will hear a teacher talking to her class about a visit yesterday. Where did they visit?",
        "opts": [
          "an art gallery",
          "an animal park",
          "a science museum"
        ],
        "answer": 1,
        "explanation": "老师回顾昨天下午的外出：今天生物课要上网查资料，研究对象是 the kinds of monkeys we enjoyed seeing yesterday afternoon（昨天下午看到的猴子），还要大家做海报、配上看动物时画的画，可见昨天去的是能看到猴子的动物公园，选 B；A 美术馆、C 科学博物馆均未提及。"
      }
    ]
  }
}

export const BOOSTER_PART5_SETS = {
  "33": {
    transcript: "Narrator: Track 15 Listening Part 5 Worksheet 1.\nFor each question, choose the correct answer.\nLook at questions 1–5 now. You have fifteen seconds.\nYou will hear Sarah talking to Mike about a picnic. What will each person bring to the picnic?\nSarah: Hi, Mike. It's Sarah. I'm phoning you about the food and drink for Samantha's birthday picnic on Saturday.\nMike: Hi, Sarah. That's good. What shall I bring?\nSarah: Well, I'm going to make some sandwiches. Why don't you bring some crisps?\nMike: Maybe I could bring some ice cream instead? Everyone likes it and I think it's going to be very hot this weekend.\nSarah: Good idea! Can you bring chocolate? It's my favourite!\nMike: Sure. How many people are coming?\nSarah: There are going to be eight of us, including Sam. Margaret has already made some cakes. They're amazing – they look like little hamburgers!\nMike: Cool! Sam loves hamburgers.\nSarah: John wanted to make some biscuits but he's been really busy this week so I think he's going to buy some.\nMike: Wow! We aren't going to be hungry!\nSarah: Is Phil coming?\nMike: No. He's going to a pizza restaurant with his volleyball team.\nSarah: What about Andrea?\nMike: Yes. She's going to bring some fruit from her dad's garden. He's got lots of apple trees.\nSarah: Excellent! I think her dad grows strawberries too.\nMike: Yes, but she told me that they've already eaten them all!\nSarah: Oh no! Is anyone bringing drinks?\nMike: Well, we can get some water from the café in the park and I think Eric is bringing some cola from his mum's shop.\nSarah: Cool! Shall I bring my MP3 player so we can listen to music?\nMike: Good idea. It's going to be great!\nSarah: Yes! See you on Saturday.\nNarrator: Now listen again.",
    "title": "Part 5 配对题",
    "instruction": "For each question, choose the correct answer. You will hear Sarah talking to Mike about a picnic. What will each person bring to the picnic?（听 Sarah 和 Mike 谈论野餐，为每个人选择他要带的食物或饮料；示例 0 Sarah → G sandwiches 已在书中给出。）",
    "type": "match",
    "options": [
      "apples",
      "biscuits",
      "cakes",
      "cola",
      "hamburgers",
      "ice cream",
      "sandwiches",
      "strawberries"
    ],
    "items": [
      {
        "q": "Mike",
        "answer": 5,
        "explanation": "Sarah 建议 Mike 带薯片，Mike 改口「Maybe I could bring some ice cream instead?」，Sarah 同意「Good idea!」，还请他带巧克力，因此 Mike 带的是 F ice cream。"
      },
      {
        "q": "Margaret",
        "answer": 2,
        "explanation": "Mike 说「Margaret has already made some cakes. They're amazing」，Margaret 已经做好了蛋糕，因此对应 C cakes。"
      },
      {
        "q": "John",
        "answer": 1,
        "explanation": "Mike 说「John wanted to make some biscuits but he's been really busy this week so I think he's going to buy some」，John 负责的是饼干，因此对应 B biscuits。"
      },
      {
        "q": "Andrea",
        "answer": 0,
        "explanation": "Sarah 说「She's going to bring some fruit from her dad's garden. He's got lots of apple trees」，Andrea 带的是苹果，因此对应 A apples；她家也有草莓，但「they've already eaten them all」吃光了，不会带 H strawberries。"
      },
      {
        "q": "Eric",
        "answer": 3,
        "explanation": "Sarah 说水会从公园的咖啡厅拿，而「Eric is bringing some cola from his mum's shop」，Eric 带的是可乐，因此对应 D cola。"
      }
    ]
  },
  "34": {
    "options": [
      "bag",
      "cake",
      "flowers",
      "shampoo",
      "socks",
      "towel",
      "trainers",
      "trousers"
    ],
    "items": [
      {
        "q": "clothes shop",
        "answer": 6,
        "explanation": "索尼娅说去了她最喜欢的服装店 Fashion World，「买了这双运动鞋（I bought these trainers）」想配上周买的黑裤子，因此选择 G（trainers）；裤子（H）是上周买的，不是今天在服装店买的。"
      },
      {
        "q": "bookshop",
        "answer": 1,
        "explanation": "在书店她「喝了点东西，还买了些蛋糕（I had a drink and I bought some cake）」，想买的日记本忘了买，因此选择 B（cake）；日记本是想买而没买的干扰项。"
      },
      {
        "q": "supermarket",
        "answer": 0,
        "explanation": "她去超市想买沙滩毛巾「但没买（I didn’t buy one）」，「改买了一个包（I bought this bag instead）」，因此选择 A（bag）；毛巾（F）是想买而没买的东西。"
      },
      {
        "q": "sports shop",
        "answer": 4,
        "explanation": "她在体育用品店给爸爸买生日礼物——爸爸喜欢足球袜，「给他买了五双（I bought him five pairs）」，因此选择 E（socks）。"
      },
      {
        "q": "market",
        "answer": 2,
        "explanation": "市场那边她没买东西做明天的晚饭，但「给妈妈买了些花（I bought some flowers for Mum）」，因为妈妈喜欢那里卖的粉色花，因此选择 C（flowers）；鱼是明天早上才要买的。"
      }
    ]
  },
  "35": {
    "options": [
      "basketball",
      "climbing",
      "golf",
      "horse riding",
      "sailing",
      "swimming",
      "tennis",
      "windsurfing"
    ],
    "items": [
      {
        "q": "Chris",
        "answer": 7,
        "explanation": "Tanya 说 Chris 喜欢水上运动，Eric 猜 Did he go sailing again?，她回答 No, this year he learnt to windsurf（今年学的是帆板），只是风不大、玩得不尽兴（it wasn’t very windy so he didn’t enjoy it），所以 Chris 尝试的是帆板，选 H；E 帆船被明确否认。"
      },
      {
        "q": "Gina",
        "answer": 5,
        "explanation": "Gina 每天早饭前去泳池（she went to the pool every morning before breakfast），教练很棒、her swimming really improved（游泳进步很大），水球（water polo）只是她 Next year 的计划，所以这次尝试的是游泳，选 F。"
      },
      {
        "q": "Tom",
        "answer": 6,
        "explanation": "Tom 本想打高尔夫，但教练生病（the teacher was ill），改上网球课（he had tennis lessons instead），场上人多也玩得开心，选 G；C 高尔夫只是他的愿望，没有上成。"
      },
      {
        "q": "Emma",
        "answer": 3,
        "explanation": "Emma 不喜欢运动但 loves animals，She went horse riding on the beach every day（每天去海滩骑马），那匹马叫 Thunder、跑得很快，选 D。"
      },
      {
        "q": "Harry",
        "answer": 0,
        "explanation": "Tanya 说 Football is his favourite sport, but this time he played basketball——足球虽是他的最爱，这次踢的是篮球，还随队参加了比赛并得了一等奖（they won first prize），选 A。"
      }
    ]
  }
}
