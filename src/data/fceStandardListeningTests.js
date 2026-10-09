// FCE 标准版真题 1–4 · Listening（16 套，每册 4 套）
// 来源（用户原件，扫描版无文本层，逐页视觉转录 + 官方 Key 逐题核对）:
//   标准版1 音频: D:\workspace_sunny\FCE\1.真题\标准版1\First 1 CD\（Disc1: T1P1..T2P4, Disc2: T3P1..T4P4, 01-08.mp3）
//   标准版2 音频: D:\workspace_sunny\FCE\1.真题\标准版2\First 2 CD 1 / CD 2（Track01-12）
//   标准版3 音频: D:\workspace_sunny\FCE\1.真题\标准版3\音频\（01-16.m4a，按 Test/Part 命名）
//   标准版4 音频: D:\workspace_sunny\FCE\1.真题\标准版4\FCE（标准版）真题4-CD\（First4_test{n}_audio{p}.mp3）
// 数组顺序: 册1 T1..T4, 册2 T1..T4, 册3 T1..T4, 册4 T1..T4
// meta.id 规范: 'fce-standard-<册>-test<套>-listening'; examKey: 'fce-standard-<册>-test<套>'
// Part 1 音频：官方 CD 为整 Part 单条音频（part.audio），UI 按单条播放处理。


// ===== 标准版1 · Test 1（书页 22–27；Key: 书 120–121/PDF 119–120，已逐题核对） =====
// Source: Cambridge English First 1（标准版1）cen_first_1_with_answers .pdf（用户原件扫描版）
// Test 1 Listening: 书页 22–27（PDF 21–26），答案核对自 Test 1 Key（Reading 在书 120 / PDF 119，Listening 在书 121 / PDF 120）
// 音频：/audio/fce/std1/std1-t1-p1.mp3 ~ std1-t1-p4.mp3（整 Part 一条）
// 注：书 23 页 Q5 印刷原文即为 "You overhear a women talking..."（原书笔误，按页面视觉转录原样保留）。
const STD1_L1 = {
  meta: {
    id: 'fce-standard-1-test1-listening',
    title: 'FCE 标准版真题 1 · Test 1 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 1 Key（书 120–121 / PDF 119–120，Listening 区在书 121）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std1/std1-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking on her mobile phone about a missing piece of furniture.',
          q: 'How does she feel?',
          opts: ['irritated with the removals company', "unsure what's happened", 'anxious to find it quickly'],
          answer: 1,
          explanation: "官方答案为 B：她并不清楚家具到底出了什么事（unsure what's happened）。",
        },
        {
          scenario: 'You hear two students talking about their current course topic.',
          q: 'What do they agree about?',
          opts: ['how boring it is', 'how difficult it is', 'how relevant it is'],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，两人一致认为当前课程话题难度大。',
        },
        {
          scenario: 'You hear two business people talking about a contract.',
          q: 'How does the man feel now?',
          opts: [
            'frustrated because of the time wasted',
            'surprised about the cancellation of the contract',
            "sympathetic towards the other company's problems",
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，男方对对方公司的难处表示理解同情。',
        },
        {
          scenario: "You hear an artist telling a friend about an art prize he's just won.",
          q: 'What is he doing?',
          opts: [
            'expressing surprise',
            "admitting that he's excited",
            'explaining why he thinks he was chosen',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他承认自己得奖后心情兴奋。',
        },
        {
          scenario: 'You overhear a women talking to a friend on her mobile phone.',
          q: 'Why is she phoning?',
          opts: ['to explain a delay', 'to change some plans', 'to make an arrangement'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，这通电话是为了和朋友敲定某个安排。',
        },
        {
          scenario: 'You hear a guitarist talking about his profession.',
          q: 'What is the purpose of his talk?',
          opts: [
            'to warn about the challenges of becoming a musician',
            'to give step-by-step guidance on setting up a band',
            'to emphasise the importance of having loyal fans',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他旨在提醒听众入行当乐手会遇到的种种挑战。',
        },
        {
          scenario: 'You hear a woman talking to a sales assistant.',
          q: "Why can't she have a refund for her trainers?",
          opts: [
            'The receipt is wrong.',
            'She is not in the right shop.',
            'The trainers are no longer new.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，退款被拒与她来错了门店有关。',
        },
        {
          scenario: 'You hear a woman talking about a radio chat show.',
          q: 'What does she like about the show?',
          opts: [
            'The presenter makes her laugh.',
            'Information is given in an interesting way.',
            'Guests reveal quite a lot about themselves.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她欣赏节目传递信息的方式生动有趣。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a photographer called Ian Gerrard talking about his career. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std1/std1-t1-p2.mp3',
      items: [
        {
          q: 'The subject that Ian studied at university was ____ .',
          answer: ['geography'],
          show: 'geography',
          explanation: '官方答案 geography：依据录音内容，他在大学所学的科目是地理。',
        },
        {
          q: 'Ian did a presentation on ____ as part of his final year.',
          answer: ['street markets', 'markets'],
          show: '(street) markets',
          explanation: '官方答案 (street) markets：Key 中 street 为可选词，两种写法均算对。',
        },
        {
          q: 'Ian worked for a ____ in the USA for a year after leaving university.',
          answer: ['magazine'],
          show: 'magazine',
          explanation: '官方答案 magazine：依据录音内容，他毕业后在美国一家杂志社工作了一年。',
        },
        {
          q: 'When he travelled around the USA, Ian chose ____ as the theme for his photographs.',
          answer: ['horses'],
          show: 'horses',
          explanation: '官方答案 horses：依据录音内容，他游历美国时以马为拍摄主题。',
        },
        {
          q: 'Ian says that ____ is the season when he takes the best photographs.',
          answer: ['winter'],
          show: 'winter',
          explanation: '官方答案 winter：依据录音内容，冬季是他拍出最佳照片的季节。',
        },
        {
          q: 'When Ian came back to Britain, he travelled around by ____ taking photographs.',
          answer: ['motorbike', 'motor-bike'],
          show: 'motor(-)bike',
          explanation: '官方答案 motor(-)bike：按 Key 记法连字符可省略，motorbike / motor-bike 均算对。',
        },
        {
          q: 'Ian says he was surprised by how few photographers specialise in shots of ____ communities.',
          answer: ['fishing'],
          show: 'fishing',
          explanation: '官方答案 fishing：依据录音内容，专注拍摄渔业社区题材的摄影师很少。',
        },
        {
          q: "Ian's book will be available in bookshops in ____ next year.",
          answer: ['March'],
          show: 'March',
          explanation: '官方答案 March：依据录音内容，他的书明年三月上市。',
        },
        {
          q: "The title of Ian's book is ' ____ '.",
          answer: ['Images'],
          show: 'Images',
          explanation: '官方答案 Images：书名首字母大写。',
        },
        {
          q: 'Ian has chosen ____ as the theme for his next tour.',
          answer: ['farming'],
          show: 'farming',
          explanation: '官方答案 farming：依据录音内容，他下次巡展选择农耕为主题。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about the benefits of learning another language. For questions 19–23, choose which benefit (A–H) each speaker has experienced. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std1/std1-t1-p3.mp3',
      options: [
        { label: 'A', text: 'It has boosted my intellectual abilities.' },
        { label: 'B', text: 'It has improved my chances in education.' },
        { label: 'C', text: 'It has made me sensitive to global issues.' },
        { label: 'D', text: 'It has allowed me to gain faster promotion.' },
        { label: 'E', text: 'It has made getting around in other countries easier.' },
        { label: 'F', text: 'It has allowed me to help other people.' },
        { label: 'G', text: 'It has advanced my awareness of the way language works.' },
        { label: 'H', text: 'It has helped me make friends.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: '官方答案 E：依据录音内容，学习另一门语言让他在异国出行更方便。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，语言学习帮他结交了朋友。' },
        { speaker: 'Speaker 3', answer: 'B', explanation: '官方答案 B：依据录音内容，语言能力改善了他的升学机会。' },
        { speaker: 'Speaker 4', answer: 'G', explanation: '官方答案 G：依据录音内容，他对语言的运作方式有了更深认识。' },
        { speaker: 'Speaker 5', answer: 'D', explanation: '官方答案 D：依据录音内容，语言能力让他晋升更快。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Patricia Jones, who is a naturalist. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std1/std1-t1-p4.mp3',
      items: [
        {
          q: 'Looking back at her work, Patricia feels',
          opts: [
            'surprised that her projects still attract volunteers.',
            "proud of the wide influence she's had.",
            "pleased by how she's regarded in Africa.",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，回顾以往工作，她以影响之广为傲。',
        },
        {
          q: 'How does Patricia spend her time nowadays?',
          opts: [
            'persuading people to alter their behaviour',
            'advising governments on conservation',
            'studying wildlife in its natural habitat',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她如今致力于劝说人们改变行为方式。',
        },
        {
          q: 'How does Patricia feel about zoos?',
          opts: [
            'They all ought to be closed down.',
            'They should have an educational purpose.',
            'They still have a role to play in conservation.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她认为动物园在物种保护上仍有作用。',
        },
        {
          q: 'In her new book, Patricia hopes to give',
          opts: [
            'encouragement to young scientists.',
            'advice on helping endangered animals.',
            'guidance to other environmentalists.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，新书意在鼓励年轻科学家。',
        },
        {
          q: 'Patricia believes that children should spend time in the natural world because',
          opts: [
            'it is the only way to find out about it.',
            'it is essential for their development.',
            'it is a chance to change their view of animals.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，亲近自然对孩子的成长必不可少。',
        },
        {
          q: 'The organisation called In Touch encourages young people to',
          opts: [
            'be tolerant of each other.',
            'actively work for change.',
            'talk about their problems.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，该组织鼓励年轻人积极行动、推动改变。',
        },
        {
          q: 'What does Patricia particularly want to do next?',
          opts: [
            'to help girls who want to be scientists',
            'to get scientists to be more responsible',
            "to change people's attitudes to science",
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她接下来最想改变人们对科学的态度。',
        },
      ],
    },
  },
};

// ===== 标准版1 · Test 2（书页 44–49；Key: 书 132–133/PDF 131–132，已逐题核对） =====
// Source: Cambridge English First 1（标准版1）cen_first_1_with_answers .pdf（用户原件扫描版）
// Test 2 Listening: 书页 44–49（PDF 43–48），答案核对自 Test 2 Key（书 132–133 / PDF 131–132）
// 音频：/audio/fce/std1/std1-t2-p1.mp3 ~ std1-t2-p4.mp3（整 Part 一条）
const STD1_L2 = {
  meta: {
    id: 'fce-standard-1-test2-listening',
    title: 'FCE 标准版真题 1 · Test 2 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 44–49',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 2 Key（书 132–133 / PDF 131–132）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std1/std1-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking about how his business became successful.',
          q: 'Where did his additional funding come from?',
          opts: ['the local bank', 'a family friend', 'his own savings'],
          answer: 1,
          explanation: '官方答案为 B：追加资金来自一位家人朋友，而非银行贷款或个人积蓄。',
        },
        {
          scenario: 'You hear a woman talking about a journey.',
          q: 'How did she travel?',
          opts: ['by boat', 'by train', 'by coach'],
          answer: 2,
          explanation: '官方答案为 C：她此行乘坐的是长途大巴，而不是船或火车。',
        },
        {
          scenario: 'You overhear a man talking to his wife on the phone.',
          q: 'What is he talking about?',
          opts: ['buying a car', 'booking a holiday', 'moving abroad'],
          answer: 0,
          explanation: '官方答案为 A：这通电话里谈的是买车的事。',
        },
        {
          scenario: 'You hear two students talking about their course.',
          q: 'What does the woman think about the course?',
          opts: ['It is quite difficult.', 'It is worth doing.', 'It is becoming more interesting.'],
          answer: 1,
          explanation: '官方答案为 B：女生认为这门课程虽然不易但值得一读。',
        },
        {
          scenario: 'You hear a woman talking about roller derby, a hobby which involves speed racing on skates.',
          q: 'What is she doing?',
          opts: [
            'explaining what made her decide to take it up',
            "appreciating her friends' attitude to the sport",
            "describing how she feels when she's taking part",
          ],
          answer: 2,
          explanation: '官方答案为 C：她描述的是自己参与轮滑竞速时的感受。',
        },
        {
          scenario: 'You hear part of a radio programme.',
          q: 'What is the woman talking about?',
          opts: ['a new shop', 'a new exhibition', 'a new leisure centre'],
          answer: 1,
          explanation: '官方答案为 B：这段广播介绍的是一场新展览。',
        },
        {
          scenario: 'You overhear two students discussing a reading project they did with young children.',
          q: 'What do they agree about it?',
          opts: [
            'The venue was perfect.',
            'The material was well received.',
            'The number of participants was surprising.',
          ],
          answer: 1,
          explanation: '官方答案为 B：两人一致认为项目所用材料很受孩子们欢迎。',
        },
        {
          scenario: 'You hear an actor talking about the character she plays in a TV drama series.',
          q: 'How does she feel about the character?',
          opts: [
            'She is envious of her life-style.',
            'She sympathises with her current problems.',
            'She admires her intelligence.',
          ],
          answer: 2,
          explanation: '官方答案为 C：她对所饰角色的才智表示钦佩。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Gina Purvis, who is a pilot for a commercial airline, talking about her job. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std1/std1-t2-p2.mp3',
      items: [
        {
          q: 'Gina disliked her first job as a ____ .',
          answer: ['teacher'],
          show: 'teacher',
          explanation: '官方答案 teacher：她的第一份工作是教师，并不喜欢。',
        },
        {
          q: 'The airline that Gina works for insists on at least ____ hours of flying experience from their captains.',
          answer: ['3,000', 'three thousand'],
          show: '3,000 / three thousand',
          explanation: '官方答案 3,000：公司要求机长至少有 3000 小时飞行经验。',
        },
        {
          q: 'Gina says that because her husband is a ____ he is tolerant of her job.',
          answer: ['travel writer'],
          show: 'travel writer',
          explanation: '官方答案 travel writer：丈夫是旅行作家，常不在家，因此体谅她的工作。',
        },
        {
          q: "The 'Notices to Pilots' provides information about any ____ that are experiencing problems.",
          answer: ['airports'],
          show: 'airports',
          explanation: '官方答案 airports：《Notices to Pilots》提供出现问题的机场信息（后接复数动词）。',
        },
        {
          q: 'Gina says that if she has extra ____ she will need more fuel for her flight.',
          answer: ['passengers'],
          show: 'passengers',
          explanation: '官方答案 passengers：乘客更多时就需要携带更多燃油。',
        },
        {
          q: 'Gina explains that many pilots she works with did a degree in ____ at university.',
          answer: ['science'],
          show: 'science',
          explanation: '官方答案 science：许多同事在大学读的是理科专业。',
        },
        {
          q: 'Gina says that all the ____ must be within reach of the two pilots in the cockpit.',
          answer: ['controls'],
          show: 'controls',
          explanation: '官方答案 controls：所有操纵装置都必须在两名驾驶员伸手可及的范围内。',
        },
        {
          q: 'The pilots look at a ____ to check if anyone is standing at the cockpit entrance.',
          answer: ['monitor'],
          show: 'monitor',
          explanation: '官方答案 monitor：驾驶员通过监视器查看驾驶舱门口是否有人。',
        },
        {
          q: 'Gina gets information from a ____ about any small problems on the plane.',
          answer: ['report'],
          show: 'report',
          explanation: '官方答案 report：机上的小问题通过一份报告获知。',
        },
        {
          q: 'Gina says what she really appreciates is a ____ flight.',
          answer: ['night'],
          show: 'night',
          explanation: '官方答案 night：她最欣赏的是夜间航班。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which students are talking about a trip they have taken. For questions 19–23, choose from the list (A–H) what each student says about their trip. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std1/std1-t2-p3.mp3',
      options: [
        { label: 'A', text: 'Someone I met while I was there is coming to visit me soon.' },
        { label: 'B', text: 'I plan to do things a little differently on my next visit.' },
        { label: 'C', text: 'I learnt more about some friends while I was with them.' },
        { label: 'D', text: "I enjoyed myself thanks to one person's efforts." },
        { label: 'E', text: 'My experience was different when I returned to a place.' },
        { label: 'F', text: 'Some people there offered to take me on a tour.' },
        { label: 'G', text: "I didn't take to the city at first." },
        { label: 'H', text: 'I went back to a place I had never expected to see again.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'D', explanation: '官方答案 D：多亏某人的努力，这次旅行玩得很开心。' },
        { speaker: 'Speaker 2', answer: 'B', explanation: '官方答案 B：计划下次重游时换一种玩法。' },
        { speaker: 'Speaker 3', answer: 'G', explanation: '官方答案 G：起初并不喜欢这座城市。' },
        { speaker: 'Speaker 4', answer: 'C', explanation: '官方答案 C：同行期间加深了对一些朋友的了解。' },
        { speaker: 'Speaker 5', answer: 'E', explanation: '官方答案 E：重游同一地点时感受与之前不同。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        "You will hear an interview with a musician called Jarrold Harding, who's talking about his career. For questions 24–30, choose the best answer (A, B or C).",
      audio: '/audio/fce/std1/std1-t2-p4.mp3',
      items: [
        {
          q: "How did Jarrold's interest in music begin?",
          opts: [
            "He went to one of his father's concerts.",
            'He was given lessons by an orchestra violinist.',
            'He watched musicians practising.',
          ],
          answer: 2,
          explanation: '官方答案为 C：他对音乐的兴趣始于观看乐手排练。',
        },
        {
          q: 'Jarrold played in his first concert',
          opts: [
            'together with his mother.',
            'when he was away on holiday with his parents.',
            'to make his father happy.',
          ],
          answer: 1,
          explanation: '官方答案为 B：首场演出是随父母外出度假时进行的。',
        },
        {
          q: "What impressed Jarrold about his mother's musical ability?",
          opts: [
            'She never made any mistakes.',
            'She could memorise music very quickly.',
            'She could adapt piano music for his violin.',
          ],
          answer: 1,
          explanation: '官方答案为 B：母亲的过人之处是能很快记住乐谱。',
        },
        {
          q: 'What does Jarrold say about his interest in conducting?',
          opts: [
            'It began at an early age.',
            'It was encouraged by his father.',
            'It increased when he heard famous musicians.',
          ],
          answer: 0,
          explanation: '官方答案为 A：对指挥的兴趣从很小就开始了。',
        },
        {
          q: 'How did Jarrold feel when he was at college?',
          opts: [
            "relieved to find he didn't have to work too hard",
            'pleased at how well he played compared to everyone else',
            'glad he could cope with things that some students struggled with',
          ],
          answer: 2,
          explanation: '官方答案为 C：他庆幸自己能应付一些同学感到吃力的内容。',
        },
        {
          q: 'What did Jarrold do after leaving college?',
          opts: [
            'He tried to devote all his time to conducting.',
            'He was introduced to a good conducting teacher.',
            'He had lessons with a famous conductor.',
          ],
          answer: 1,
          explanation: '官方答案为 B：毕业后经人介绍遇到一位优秀的指挥老师。',
        },
        {
          q: 'Jarrold thinks that being both a violinist and a conductor',
          opts: [
            'has given him opportunities to develop as a musician.',
            'has allowed him more freedom to play where he wants.',
            'has earned him the respect of other professionals.',
          ],
          answer: 0,
          explanation: '官方答案为 A：身兼小提琴手与指挥让他有机会作为音乐家继续成长。',
        },
      ],
    },
  },
};

// ===== 标准版1 · Test 3（书页 66–71；Key: 书 145/PDF 144，已逐题核对） =====
const STD1_L3 = {
  meta: {
    id: 'fce-standard-1-test3-listening',
    title: 'FCE 标准版真题 1 · Test 3 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 66–71',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 3 Key（书 145 / PDF 144，Listening 答案区）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      type: 'mcq_situation',
      audio: '/audio/fce/std1/std1-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear a young actor talking about a colleague.',
          q: 'What does he say about her?',
          opts: [
            'She makes acting seem easy.',
            'She speaks very slowly.',
            'She gives him good advice.',
          ],
          answer: 0,
          explanation: 'Key 为 A，他称赞这位同事让演戏看起来很容易；B、C 与题意不符。',
        },
        {
          scenario: 'You hear two friends talking about a colleague.',
          q: 'What do they agree about?',
          opts: [
            'how ambitious he is',
            'how well-paid he is',
            'how stressed he is',
          ],
          answer: 0,
          explanation: 'Key 为 A，两人一致认同的是他雄心很大；B、C 不是他们达成一致的点。',
        },
        {
          scenario: 'You hear an author talking about his new book.',
          q: 'What point is he making about it?',
          opts: [
            'It will be widely read.',
            'It took a long time to write.',
            'It is better than his first book.',
          ],
          answer: 1,
          explanation: 'Key 为 B，他强调这本书花了很长时间才写成；A、C 与题意不符。',
        },
        {
          scenario: 'You hear two friends talking about something they saw on TV.',
          q: 'What did they see?',
          opts: [
            'an advertisement',
            'a comedy series',
            'a documentary',
          ],
          answer: 0,
          explanation: 'Key 为 A，他们看到的是一则广告；B、C 与题意不符。',
        },
        {
          scenario: 'You hear an office manager talking about her work.',
          q: 'How does she feel about it?',
          opts: [
            'confident that she can do it well',
            'interested in her new project',
            'satisfied with her staff',
          ],
          answer: 0,
          explanation: 'Key 为 A，她相信自己能把这份工作做好；B、C 与题意不符。',
        },
        {
          scenario: 'You overhear two friends talking in a restaurant.',
          q: 'What do they agree about?',
          opts: [
            'how reasonable the price is',
            'how spicy the food is',
            'how varied the menu is',
          ],
          answer: 0,
          explanation: 'Key 为 A，两人认同的是这家店价格公道；B、C 不是他们认同的内容。',
        },
        {
          scenario: "You hear a woman talking about her neighbours' holiday photographs.",
          q: 'What is she doing?',
          opts: [
            'complaining about having to look at them',
            "admiring her neighbours' photography skills",
            'suggesting how they could be improved',
          ],
          answer: 1,
          explanation: 'Key 为 B，她是在称赞邻居的摄影技术；A、C 与题意不符。',
        },
        {
          scenario: "You hear two friends talking about a concert they've just been to.",
          q: 'What did they find disappointing about it?',
          opts: [
            'the poor sound quality',
            'the seats they had booked',
            'the lack of air conditioning',
          ],
          answer: 1,
          explanation: 'Key 为 B，让他们失望的是订到的座位；A、C 与题意不符。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      instruction:
        'You will hear a man called Henry Lee giving a talk about the first time he went skydiving. For questions 9–18, complete the sentences with a word or short phrase.',
      type: 'blanks',
      audio: '/audio/fce/std1/std1-t3-p2.mp3',
      items: [
        {
          q: 'Henry had his first skydiving lesson in the month of ____ .',
          answer: ['May'],
          show: 'May',
          explanation: 'Key 为 May，他第一次上跳伞课是在五月。',
        },
        {
          q: 'Henry had to attend a talk about ____ before his jump.',
          answer: ['safety'],
          show: 'safety',
          explanation: 'Key 为 safety，跳伞前他必须参加一场安全讲座。',
        },
        {
          q: 'Henry says that a ____ was the most important piece of equipment he was given.',
          answer: ['helmet'],
          show: 'helmet',
          explanation: 'Key 为 helmet，他认为头盔是拿到手的装备中最重要的。',
        },
        {
          q: "Henry was surprised that the plane the club used didn't have any ____ in it.",
          answer: ['seats'],
          show: 'seats',
          explanation: 'Key 为 seats，他惊讶俱乐部用的飞机里没有座位。',
        },
        {
          q: "Henry's instructor had jumped a total of ____ times in the past.",
          answer: ['700', 'seven hundred'],
          show: '700 / seven hundred',
          explanation: 'Key 为 700 / seven hundred，教练过去总共跳过七百次。',
        },
        {
          q: 'Henry had brought some ____ with him to wear during the jump.',
          answer: ['gloves'],
          show: 'gloves',
          explanation: 'Key 为 gloves，他自带了手套在跳伞时佩戴。',
        },
        {
          q: 'Henry said he felt totally ____ when the plane door was opened.',
          answer: ['calm'],
          show: 'calm',
          explanation: 'Key 为 calm，舱门打开时他说自己感到十分平静。',
        },
        {
          q: 'Henry uses the word ____ to describe the winding river he could see below him.',
          answer: ['silver'],
          show: 'silver',
          explanation: 'Key 为 silver，他用这个词形容脚下蜿蜒的河流。',
        },
        {
          q: 'Henry compares his landing to that of a ____ landing on the ground.',
          answer: ['feather'],
          show: 'feather',
          explanation: 'Key 为 feather，他把落地比作羽毛落在地上。',
        },
        {
          q: 'Henry was pleased to be given a ____ after his jump.',
          answer: ['T-shirt'],
          show: 'T-shirt',
          explanation: 'Key 为 T-shirt，跳完后他获赠一件 T 恤。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      instruction:
        'You will hear five short extracts in which students are talking about the experience of living and studying away from home. For questions 19–23, choose from the list (A–H) what each student says. Use the letters only once. There are three extra letters which you do not need to use.',
      type: 'matching',
      audio: '/audio/fce/std1/std1-t3-p3.mp3',
      options: [
        { label: 'A', text: 'I was much younger than the other people I lived with.' },
        { label: 'B', text: "I'm still closest to the people I grew up with." },
        { label: 'C', text: 'I found that joining a sports club helped me make friends.' },
        { label: 'D', text: "I didn't share many interests with my classmates." },
        { label: 'E', text: 'It was easier making friends at a small college.' },
        { label: 'F', text: 'It was hard getting out to make friends at first.' },
        { label: 'G', text: "I'm still in touch with the people I lived with at first." },
        { label: 'H', text: 'It was good living with people who had similar interests.' },
      ],
      items: [
        {
          speaker: 'Speaker 1',
          answer: 'H',
          explanation: 'Key 为 H，Speaker 1 觉得和兴趣相近的人一起生活很好。',
        },
        {
          speaker: 'Speaker 2',
          answer: 'E',
          explanation: 'Key 为 E，Speaker 2 认为在小规模的学院更容易交到朋友。',
        },
        {
          speaker: 'Speaker 3',
          answer: 'F',
          explanation: 'Key 为 F，Speaker 3 起初很难走出去交朋友。',
        },
        {
          speaker: 'Speaker 4',
          answer: 'C',
          explanation: 'Key 为 C，Speaker 4 靠加入体育俱乐部交到了朋友。',
        },
        {
          speaker: 'Speaker 5',
          answer: 'G',
          explanation: 'Key 为 G，Speaker 5 仍与最初同住的人保持联系。',
        },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      instruction:
        'You will hear an interview with a student athlete called Chelsea Matthews, who plays soccer for her college. For questions 24–30, choose the best answer (A, B or C).',
      type: 'mcq',
      audio: '/audio/fce/std1/std1-t3-p4.mp3',
      items: [
        {
          q: "What impact does playing soccer have on Chelsea's life?",
          opts: [
            'She needs private tuition from her teachers.',
            "She doesn't take part in some other student activities.",
            'She never gets to travel to other countries.',
          ],
          answer: 1,
          explanation: 'Key 为 B，踢球使她无法参加某些其他学生活动；A、C 与题意不符。',
        },
        {
          q: 'Chelsea had to start planning to be a student athlete at 16 because',
          opts: [
            'there were many requirements that had to be met.',
            'there were few colleges that offered the course she wanted.',
            'there was a lot of competition for places in good colleges.',
          ],
          answer: 0,
          explanation: 'Key 为 A，因为有许多必须满足的条件，她 16 岁就得开始规划；B、C 与题意不符。',
        },
        {
          q: 'Chelsea is happy to return to college a month early because',
          opts: [
            'she is pleased at the prospect of starting competitions.',
            'she feels relieved to get back into a routine.',
            'she realises that training is necessary.',
          ],
          answer: 2,
          explanation: 'Key 为 C，她提前返校是因为明白训练是必要的；A、B 与题意不符。',
        },
        {
          q: 'When Chelsea and her team-mates finish training, they',
          opts: [
            'can take a break by going to the movies.',
            'are too tired to do very much except sleep.',
            'relax with other sports teams.',
          ],
          answer: 1,
          explanation: 'Key 为 B，训练结束后他们累得除了睡觉什么都做不了；A、C 与题意不符。',
        },
        {
          q: 'Chelsea says if she and her team-mates miss too many classes',
          opts: [
            'they may get poor grades and have to leave the team.',
            'their professors will complain to the head of faculty.',
            'the other students are understanding about the reason for their absence.',
          ],
          answer: 0,
          explanation: 'Key 为 A，缺课太多可能成绩下滑并被要求离队；B、C 与题意不符。',
        },
        {
          q: 'What problem did Chelsea herself have in keeping up with her studies?',
          opts: [
            'She was away sick for some of her classes.',
            'She had to study one subject under difficult conditions.',
            'She was expected to commit herself to extra training for away games.',
          ],
          answer: 1,
          explanation: 'Key 为 B，她本人曾在困难条件下学习一门科目；A、C 与题意不符。',
        },
        {
          q: 'In conclusion, what does Chelsea say about being a student athlete?',
          opts: [
            'It has taught her the importance of aiming high.',
            'It has helped her decide what her future career should be.',
            'It has changed her perception of the value of friendship.',
          ],
          answer: 0,
          explanation: 'Key 为 A，这段经历教会她树立高目标的重要性；B、C 与题意不符。',
        },
      ],
    },
  },
};

// ===== 标准版1 · Test 4（书页 88–93；Key: 书 156/PDF 155，已逐题核对） =====
// Cambridge English First 1（标准版1）Test 4 Listening
// 逐字转录自 cen_first_1_with_answers .pdf（用户原件扫描版）PDF 87–92（书 88–93）
// 官方答案核对自 Test 4 Key Listening 区（书 156 / PDF 155）
const STD1_L4 = {
  meta: {
    id: 'fce-standard-1-test4-listening',
    title: 'FCE 标准版真题 1 · Test 4 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 88–93',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 4 Key（书 156 / PDF 155，Listening 区）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      type: 'mcq_situation',
      audio: '/audio/fce/std1/std1-t4-p1.mp3',
      items: [
        {
          scenario: 'You hear a sportsperson talking about her sporting career.',
          q: 'What is she going to do in the future?',
          opts: ['change her career', 'become a sports writer', 'train for the next event'],
          answer: 0,
          explanation: '官方答案为 A，她将来的打算是改变职业（change her career），而非做体育撰稿人或备战下一场比赛。',
        },
        {
          scenario: 'You hear two friends talking about a laboratory experiment.',
          q: 'How do they both feel now?',
          opts: [
            'anxious about the procedures they used',
            'annoyed about having to repeat it',
            'disappointed with the results',
          ],
          answer: 0,
          explanation: '官方答案为 A，两人现在都对实验中采用的步骤感到担心（anxious）。',
        },
        {
          scenario: 'You overhear a student calling his university department.',
          q: 'Why is he phoning?',
          opts: ['to make a complaint', 'to find out about a course', 'to book an appointment'],
          answer: 2,
          explanation: '官方答案为 C，他打电话是为了预约（book an appointment），不是投诉或咨询课程。',
        },
        {
          scenario: 'You hear two friends talking about a website.',
          q: 'The man thinks that the website is',
          opts: ['helpful.', 'interesting.', 'easy to use.'],
          answer: 2,
          explanation: '官方答案为 C，男生认为这个网站容易上手（easy to use）。',
        },
        {
          scenario: 'You hear a man talking about his decision to become a singer.',
          q: "His mother was unhappy about it because she didn't",
          opts: ['like his kind of music.', 'want him to leave education.', 'think it would suit him.'],
          answer: 1,
          explanation: '官方答案为 B，母亲不满是因为不希望他放弃学业（leave education）去当歌手。',
        },
        {
          scenario: 'You overhear a man calling a TV shop.',
          q: 'Why is he calling?',
          opts: ['to cancel an order', 'to arrange a delivery', 'to make a purchase'],
          answer: 1,
          explanation: '官方答案为 B，他致电电视商店是为了安排送货（arrange a delivery）。',
        },
        {
          scenario: 'You hear two friends talking about a meal.',
          q: 'What do they agree about it?',
          opts: [
            'It was expensive for the amount of food they got.',
            "Some of the foods they were served didn't go well together.",
            "The dishes they were given weren't cooked properly.",
          ],
          answer: 1,
          explanation: '官方答案为 B，两人一致认为有些菜品搭配在一起味道不协调。',
        },
        {
          scenario: 'You hear a college lecturer talking to a student.',
          q: 'What is he doing?',
          opts: ['giving encouragement', 'offering to help', 'suggesting improvements'],
          answer: 0,
          explanation: '官方答案为 A，讲师此时是在给学生鼓励（giving encouragement）。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      instruction:
        'You will hear a girl called Kyra talking about the badminton club she belongs to. For questions 9–18, complete the sentences with a word or short phrase.',
      type: 'blanks',
      audio: '/audio/fce/std1/std1-t4-p2.mp3',
      items: [
        {
          q: "Before she took up badminton, ____ had been Kyra's favourite sport.",
          answer: ['horse-riding', 'horseriding', 'horse riding'],
          show: 'horse-riding',
          explanation: '官方答案 horse(-)riding：打羽毛球之前，骑马是 Kyra 最喜欢的运动。',
        },
        {
          q: "People interested in joining the club are invited to what's called a '____' session.",
          answer: ['starter'],
          show: 'starter',
          explanation: '官方答案 starter：有意加入者被邀请参加名为“starter”的体验场次。',
        },
        {
          q: 'Club committee members can be identified by the colour of their ____ at sessions.',
          answer: ['badge', 'badges', 'green badge', 'green badges'],
          show: '(green) badge(s)',
          explanation: '官方答案 (green) badge(s)：俱乐部委员通过佩戴（绿色）徽章来识别。',
        },
        {
          q: 'Members of the badminton club pay a membership fee of £ ____ each year.',
          answer: ['35', 'thirty-five', '35 pounds', 'thirty-five pounds'],
          show: '35 / thirty-five (pounds)',
          explanation: '官方答案 35/thirty-five（pounds 可省略）：俱乐部会员年费为 35 英镑。',
        },
        {
          q: 'New badminton club members can use the ____ at Sportsworld without paying.',
          answer: ['gym'],
          show: 'gym',
          explanation: '官方答案 gym：新会员可以免费使用 Sportsworld 的健身房。',
        },
        {
          q: 'When new members join the club, a ____ is given to them as a free gift.',
          answer: ['bag', 'sportsbag', 'sports-bag', 'sports bag'],
          show: '(sports) bag',
          explanation: '官方答案 (sports)(-)bag：新会员入会即获赠运动包作为免费礼物。',
        },
        {
          q: "There is coaching for the club's ____ on Monday evening.",
          answer: ['first-team', 'firstteam', 'first team'],
          show: 'first-team',
          explanation: '官方答案 first(-)team：周一晚上为俱乐部一线队安排训练指导。',
        },
        {
          q: "Members can look at the club's ____ to see which courts are free at Sportsworld.",
          answer: ['noticeboard', 'notice-board', 'notice board'],
          show: 'notice-board',
          explanation: '官方答案 notice(-)board：会员通过布告板查看 Sportsworld 哪些场地空闲。',
        },
        {
          q: "The club's annual ____ is its most popular social event.",
          answer: ['party'],
          show: 'party',
          explanation: '官方答案 party：俱乐部年度聚会是最受欢迎的社交活动。',
        },
        {
          q: 'New badminton club members will be offered a ____ at the Sportsworld café.',
          answer: ['discount'],
          show: 'discount',
          explanation: '官方答案 discount：新会员在 Sportsworld 咖啡厅消费可享受折扣。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      instruction:
        'You will hear five short extracts in which people are talking about why their businesses became successful. For questions 19–23, choose from the list (A–H) what each speaker says. Use the letters only once. There are three extra letters which you do not need to use.',
      type: 'matching',
      audio: '/audio/fce/std1/std1-t4-p3.mp3',
      options: [
        { label: 'A', text: "I don't need to employ anyone." },
        { label: 'B', text: 'I decided to change the way I promoted the business.' },
        { label: 'C', text: 'I took a business course.' },
        { label: 'D', text: 'I was able to get financial backing.' },
        { label: 'E', text: 'I believe in looking after my employees.' },
        { label: 'F', text: 'I believe my business offers a unique service to customers.' },
        { label: 'G', text: 'I learnt a lot from other business people.' },
        { label: 'H', text: 'I made changes because of customer feedback.' },
      ],
      items: [
        {
          speaker: 'Speaker 1',
          answer: 'D',
          explanation: '官方答案为 D（第 19 题），该说话人的成功原因是获得了资金支持（financial backing）。',
        },
        {
          speaker: 'Speaker 2',
          answer: 'G',
          explanation: '官方答案为 G（第 20 题），该说话人从其他业界人士那里学到了很多。',
        },
        {
          speaker: 'Speaker 3',
          answer: 'B',
          explanation: '官方答案为 B（第 21 题），该说话人改变了推广业务的方式。',
        },
        {
          speaker: 'Speaker 4',
          answer: 'E',
          explanation: '官方答案为 E（第 22 题），该说话人重视照顾好自己的员工。',
        },
        {
          speaker: 'Speaker 5',
          answer: 'F',
          explanation: '官方答案为 F（第 23 题），该说话人认为自己的业务为客户提供独特服务。',
        },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      instruction:
        'You will hear a radio interview with a man called Tony Little, who makes wildlife films and works for a wildlife conservation organisation called The Nature Trust. For questions 24–30, choose the best answer (A, B or C).',
      type: 'mcq',
      audio: '/audio/fce/std1/std1-t4-p4.mp3',
      items: [
        {
          q: 'Tony thinks that the hardest challenge he faces is',
          opts: [
            'to publicise what The Nature Trust does.',
            'to expand the range of people volunteering.',
            'to interest local groups in a variety of activities.',
          ],
          answer: 1,
          explanation: '官方答案为 B，他认为最难的挑战是扩大志愿者的参与范围。',
        },
        {
          q: 'What does Tony think about the use of plastic?',
          opts: [
            "He knows it will be difficult to change people's attitudes to it.",
            'He worries that there is no way of preventing plastic waste.',
            'He believes it causes the biggest problem to wildlife.',
          ],
          answer: 0,
          explanation: '官方答案为 A，他知道要改变人们对塑料使用的态度会很困难。',
        },
        {
          q: 'Tony hopes that his new website Nature Talk will help people learn',
          opts: [
            'about different animal habitats.',
            'how to watch animals in the wild.',
            'which animals are endangered.',
          ],
          answer: 0,
          explanation: '官方答案为 A，他希望网站能帮助人们了解不同动物的栖息地。',
        },
        {
          q: 'Tony says the achievement that he is most proud of is',
          opts: [
            'helping to make a popular film.',
            'doing a scientific study.',
            'working on an award-winning project.',
          ],
          answer: 2,
          explanation: '官方答案为 C，他最自豪的成就是参与了一个获奖项目。',
        },
        {
          q: 'What disadvantage does Tony mention about having a career as a cameraman?',
          opts: [
            'It is often badly paid.',
            'It can be hard to find enough work.',
            'It usually involves long hours.',
          ],
          answer: 1,
          explanation: '官方答案为 B，他提到做摄影师这一行可能不容易找到足够的工作。',
        },
        {
          q: 'Tony advises young naturalists that it is essential to have',
          opts: ['suitable walking boots.', 'the latest photography equipment.', 'good binoculars.'],
          answer: 2,
          explanation: '官方答案为 C，他认为年轻自然爱好者必备的装备是一副好的双筒望远镜。',
        },
        {
          q: 'What would Tony like to do in the future?',
          opts: [
            'to help save the tiger and polar bear',
            'to publicise the dangers facing a variety of species',
            'to produce more films for TV about animals',
          ],
          answer: 1,
          explanation: '官方答案为 B，他希望未来能让公众了解多种物种面临的危险。',
        },
      ],
    },
  },
}

// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 1 = 书内印 Test 5。Listening: 书页 22–27（PDF 23–28），答案核对自 Test 5 Key（Listening 区在书 121 / PDF 122，RUE Key 在书 120 / PDF 121）
// 音频：/audio/fce/std2/std2-t1-p1.mp3 ~ std2-t1-p4.mp3（整 Part 一条；p1=CD1 Track01，p2=CD1 Track03，p3=CD1 Track04，p4=CD1 Track06）
// 注：书 24 页第 14 空所在句印刷原文即为 "...hall of the local University."（University 大写，原书如此，按页面视觉转录原样保留）。
// 注：书 24 页 Part 2 印刷小标题为 "Volunteer at the Children's University"（数据结构无对应字段，记录于此备查）。

const STD2_L1 = {
  meta: {
    id: 'fce-standard-2-test1-listening',
    title: 'FCE 标准版真题 2 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '书 121 / PDF 122',
    audioNote: '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear part of an interview with a crime writer.',
          q: 'What does he say about his home town?',
          opts: [
            'It was a good background for the writing he does.',
            'He generally feels uncomfortable returning there.',
            'People there tend to treat him differently now.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他谈到家乡为他的写作提供了背景。',
        },
        {
          scenario: 'You hear a careers adviser talking to a woman who has applied for two jobs.',
          q: 'What suggestion does he make?',
          opts: [
            'find out more information about the first job',
            'withdraw the application for the second job',
            'ask the first company to be flexible',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他建议她请第一家公司灵活通融。',
        },
        {
          scenario: 'You hear a girl talking about a psychology textbook.',
          q: 'What does she say about it?',
          opts: ['It is not very interesting.', 'It is good value for money.', 'It is going to come in useful.'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她认为这本教科书以后会派上用场。',
        },
        {
          scenario: 'You hear the mother of a famous skier talking about a competition.',
          q: 'She says that her daughter',
          opts: [
            'expected to win the competition.',
            "didn't tell her mother she was entering it.",
            'gave up her job to practise for it.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，女儿报名参赛并没有告诉母亲。',
        },
        {
          scenario: 'You hear a film director talking about the actors she works with.',
          q: 'How does she feel about the actors in her current film?',
          opts: [
            'She sympathises with their problems.',
            'She admires the sacrifices they make.',
            'She approves of their attitudes.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她对演员们的态度表示认可。',
        },
        {
          scenario: 'You hear a man talking about his first job interview.',
          q: 'How did he feel during the interview?',
          opts: [
            'confident that he was right for the job',
            'embarrassed because of the long silences',
            'relieved he could answer most of the questions',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，面试时他确信自己适合这份工作。',
        },
        {
          scenario: 'You hear two friends talking about a popular television programme.',
          q: 'What is the programme about?',
          opts: ['retirement', 'cookery', 'teaching'],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，这档热门电视节目与烹饪有关。',
        },
        {
          scenario: 'You hear two people talking about a place they have visited.',
          q: 'What kind of place is it?',
          opts: ['a museum', 'a library', 'a shop'],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他们谈论的地方是一座博物馆。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        "You will hear a girl called Laura Beamer talking about being a volunteer at a summer school for 7–14 year olds, which is called the Children's University. For questions 9–18, complete the sentences with a word or short phrase.",
      audio: '/audio/fce/std2/std2-t1-p2.mp3',
      items: [
        {
          q: "The Children's University was started by a ____ five years ago.",
          answer: ['local charity', 'charity'],
          show: '(local) charity',
          explanation: '官方答案 (local) charity：Key 中 local 为可选词，两种写法均算对。',
        },
        {
          q: "The focus of this year's Children's University was the topic of ____ .",
          answer: ['industry'],
          show: 'industry',
          explanation: '官方答案 industry：今年儿童大学的主题与工业（industry）有关。',
        },
        {
          q: "Laura's partner was Mark, who works as a ____ when he is not volunteering.",
          answer: ['lawyer'],
          show: 'lawyer',
          explanation: '官方答案 lawyer：Mark 不做志愿者时是一名律师。',
        },
        {
          q: "Laura's group of volunteers gave some workshops about how ____ is made.",
          answer: ['chocolate'],
          show: 'chocolate',
          explanation: '官方答案 chocolate：志愿者小组开设了巧克力制作工坊。',
        },
        {
          q: "Laura says the children had a booklet called a ' ____ ' which was stamped to show their progress.",
          answer: ['passport'],
          show: 'passport',
          explanation: '官方答案 passport：这本小册子如同护照，盖章记录进度。',
        },
        {
          q: 'Laura and the children went to the graduation ceremony in the ____ hall of the local University.',
          answer: ['concert'],
          show: 'concert',
          explanation: '官方答案 concert：毕业典礼在当地大学的音乐厅（concert hall）举行。',
        },
        {
          q: 'Some children received a ____ for attending a lot of workshops.',
          answer: ['gold medal each', 'gold medal', 'medal each', 'medal'],
          show: '(gold) medal (each)',
          explanation: '官方答案 (gold) medal (each)：Key 中 gold 与 each 均为可选词，四种写法均算对。',
        },
        {
          q: 'Laura said the scheme allowed her to develop skills such as ____ .',
          answer: ['problem-solving', 'solving problems'],
          show: 'problem-solving / solving problems',
          explanation: '官方答案 problem-solving / solving problems：Key 给出两种等价写法。',
        },
        {
          q: 'Laura will most probably become a ____ in the future.',
          answer: ['social worker'],
          show: 'social worker',
          explanation: '官方答案 social worker：她将来最可能成为一名社工。',
        },
        {
          q: 'Laura says she can give people in her audience something called an ____ for volunteers.',
          answer: ['information pack'],
          show: 'information pack',
          explanation: '官方答案 information pack：她可以给听众提供一份志愿者信息包。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        "You will hear five different people talking about why they have applied to go on a space journey to the planet Mars. For questions 19–23, choose from the list (A–H) each speaker's reason for applying to go on the trip to Mars. Use the letters only once. There are three extra letters which you do not need to use.",
      audio: '/audio/fce/std2/std2-t1-p3.mp3',
      options: [
        { label: 'A', text: 'to discover new natural resources' },
        { label: 'B', text: 'to learn new skills' },
        { label: 'C', text: 'to take advantage of a rare opportunity' },
        { label: 'D', text: 'to be involved in advancing scientific knowledge' },
        { label: 'E', text: 'to become a famous personality' },
        { label: 'F', text: 'to face an extreme challenge' },
        { label: 'G', text: 'to provide others with inspiration' },
        { label: 'H', text: 'to be among the first to have the experience' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'D', explanation: '官方答案 D：依据录音内容，这位说话者的申请理由是参与推进科学知识。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，这位说话者想成为最早拥有这段经历的人。' },
        { speaker: 'Speaker 3', answer: 'F', explanation: '官方答案 F：依据录音内容，这位说话者把此行视为迎接极限挑战。' },
        { speaker: 'Speaker 4', answer: 'G', explanation: '官方答案 G：依据录音内容，这位说话者希望为他人带去激励。' },
        { speaker: 'Speaker 5', answer: 'C', explanation: '官方答案 C：依据录音内容，这位说话者视其为不容错过的难得机会。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a man called Mark Phillips, who is talking about his work as a potter. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t1-p4.mp3',
      items: [
        {
          q: 'Why did pottery not appeal to Mark when he was younger?',
          opts: [
            "He was put off by his mother's achievements.",
            'His many attempts always seemed to end in failure.',
            'He was too busy playing in a band to take an interest.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，母亲在陶艺上的成就反而让他提不起兴趣。',
        },
        {
          q: 'Why did Mark decide to take up pottery?',
          opts: [
            "His business wasn't as successful as he wanted it to be.",
            'He saw how enjoyable pottery classes could be.',
            'He realised he needed to be more creative.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他意识到自己需要更有创造力。',
        },
        {
          q: 'What did Mark say about being a student again?',
          opts: [
            'He missed having responsibility.',
            'He was made to feel that he was different.',
            'He felt physically challenged.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，重回课堂让他感到体力上吃不消。',
        },
        {
          q: 'Mark describes the pots he makes as',
          opts: [
            'reflecting shapes in nature.',
            'objects that are to be used.',
            "similar to his mother's in design.",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他强调自己做的陶器是供人使用的器物。',
        },
        {
          q: 'What has surprised Mark about the pottery community?',
          opts: [
            'how supportive they have been to a newcomer',
            'how willing other potters are to share ideas',
            'how content they are with their lifestyle',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，陶艺圈对新人的支持出乎他的意料。',
        },
        {
          q: 'What advice from his mother has Mark valued most?',
          opts: [
            'to concentrate all his efforts on perfecting pottery',
            'to remember the skill of potters from the past',
            'to be realistic about the money-making possibilities of pottery',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，母亲让他铭记过去陶工的技艺，这条建议他最看重。',
        },
        {
          q: 'In the future, Mark says he would like to be able to',
          opts: [
            'develop some new colours for his pots.',
            'exhibit his pots in a gallery.',
            'explore different techniques for making pots.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他希望未来能尝试不同的制陶技法。',
        },
      ],
    },
  },
}

// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 2 = 书内印 Test 6。Test 6 Listening: 书页 44–49（PDF 45–50），答案核对自 Test 6 Key（书 132–133 / PDF 133–134，Listening 区在书 133）
// 音频：/audio/fce/std2/std2-t2-p1.mp3 ~ std2-t2-p4.mp3（整 Part 一条；p1=CD1 Track07，p2=CD1 Track09，p3=CD1 Track10，p4=CD1 Track12）
// 注：Part 2 页面标题为 "Journalism Course"，原文空位为编号方框，按句序转为 ____；Part 1 Q5 题干为陈述式（选项续句），均按页面原样转录。

const STD2_L2 = {
  meta: {
    id: 'fce-standard-2-test2-listening',
    title: 'FCE 标准版真题 2 · Test 2 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 44–49',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 6 Key（书 132–133 / PDF 133–134，Listening 区在书 133）',
    audioNote:
      '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    examKey: 'fce-standard-2-test2',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a psychologist talking about green spaces in cities.',
          q: 'What does she say about them?',
          opts: [
            'People fail to appreciate them as much as they should.',
            'They are more important for children than for adults.',
            'Few governments make them a priority.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她说人们对城市绿地的珍视程度不够。',
        },
        {
          scenario: 'You hear part of an interview with a singer.',
          q: 'What does he say about playing tennis?',
          opts: [
            'It calms him down after a performance.',
            'It is used by a lot of singers to improve their technique.',
            'It requires similar skills to singing.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他认为打网球与唱歌需要相似的技巧。',
        },
        {
          scenario: 'You hear an actor talking about how she met her husband.',
          q: 'How did she first meet him?',
          opts: [
            'She sat next to him in a cinema.',
            'She appeared in a play with him.',
            'A friend introduced them.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，两人是因同台演出一部戏而相识。',
        },
        {
          scenario: 'You hear two people talking about a bus service.',
          q: 'What does the man say about it?',
          opts: ['It is frequent.', 'It is cheap.', 'It is punctual.'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他夸这条公交线路准点。',
        },
        {
          scenario: 'You hear a retired ballerina comparing dancers today with dancers in the past.',
          q: 'She says professional ballet dancers today',
          opts: [
            'are less concerned about expressing emotion.',
            'are more interested in being celebrities.',
            'dance with less technical ability.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她认为如今的职业芭蕾舞者较不注重情感表达。',
        },
        {
          scenario: 'You hear a chef talking about making a TV series.',
          q: 'What does he say about it?',
          opts: [
            "He didn't expect to enjoy the experience so much.",
            "He didn't get on with his co-presenter.",
            "He didn't like the working hours.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他没想到拍电视系列节目会这么开心。',
        },
        {
          scenario: 'You hear two friends talking about an art course.',
          q: 'What do they agree about it?',
          opts: ['The teacher is inspiring.', 'The class is the right size.', 'The content is interesting.'],
          answer: 1,
          explanation: '官方答案为 B：两人一致认为这个艺术课的班级人数合适。',
        },
        {
          scenario: 'You hear a swimmer talking about a competition she took part in.',
          q: 'How does she feel about it?',
          opts: [
            'disappointed with her result',
            'excited about where it will lead',
            'surprised by the support she received',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她对这次比赛带来的前景感到兴奋。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Sid Holmes talking about a journalism course he attended. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std2/std2-t2-p2.mp3',
      items: [
        {
          q: 'Sid did the same course in journalism that his ____ did.',
          answer: ['cousin'],
          show: 'cousin',
          explanation: '官方答案 cousin：依据录音内容，他的表亲上过同一门新闻课程。',
        },
        {
          q: 'On the first day, Sid had to do a reporting exercise about a man who was rescued from a ____ by helicopter.',
          answer: ['roof'],
          show: 'roof',
          explanation: '官方答案 roof：依据录音内容，报道练习讲的是男子被困屋顶获直升机救援。',
        },
        {
          q: 'An assistant editor from the ____ section of a local newspaper gave an interesting talk about being a journalist.',
          answer: ['sport', 'sports'],
          show: 'sport(s)',
          explanation: '官方答案 sport(s)：按 Key 记法单复数均可，sport / sports 均算对。',
        },
        {
          q: "Sid's main tutor had written a biography of a famous local ____ .",
          answer: ['singer'],
          show: 'singer',
          explanation: '官方答案 singer：依据录音内容，导师为当地一位著名歌手写过传记。',
        },
        {
          q: 'Sid had an idea for an article about a man who makes ____ for young people to borrow.',
          answer: ['violins'],
          show: 'violins',
          explanation: '官方答案 violins：依据录音内容，文章构思关于制琴师供年轻人借用的提琴。',
        },
        {
          q: "Sid's first article was published in a ____ soon after he wrote it.",
          answer: ['magazine'],
          show: 'magazine',
          explanation: '官方答案 magazine：依据录音内容，他的首篇文章写后不久登在一本杂志上。',
        },
        {
          q: 'Sid had to report on a council meeting about proposed improvements to the ____ in the town.',
          answer: ['museum'],
          show: 'museum',
          explanation: '官方答案 museum：依据录音内容，市政会议议题是改进镇上的博物馆。',
        },
        {
          q: "One aspect of the course Sid didn't enjoy was the ____ classes.",
          answer: ['typing'],
          show: 'typing',
          explanation: '官方答案 typing：依据录音内容，他不喜欢课程中的打字课。',
        },
        {
          q: 'Sid found it useful to chat to his classmates in the ____ at the college.',
          answer: ['canteen'],
          show: 'canteen',
          explanation: '官方答案 canteen：依据录音内容，在学院食堂与同学交流让他受益。',
        },
        {
          q: 'Sid now has a chance of getting a job at a ____ .',
          answer: ['radio station'],
          show: 'radio station',
          explanation: '官方答案 radio station：依据录音内容，他现在有机会进一家电台工作。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about collecting things as a hobby. For questions 19–23, choose from the list (A–H) why each speaker collects the things. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std2/std2-t2-p3.mp3',
      options: [
        { label: 'A', text: 'I enjoy the challenge.' },
        { label: 'B', text: 'It means I spend time with my family.' },
        { label: 'C', text: "It's a way of meeting interesting people." },
        { label: 'D', text: 'I want to help the local community.' },
        { label: 'E', text: 'I use my collection to teach other people.' },
        { label: 'F', text: "It's a financial investment." },
        { label: 'G', text: 'It connects me to the past.' },
        { label: 'H', text: 'I like to have beautiful things around me.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: '官方答案 C：依据录音内容，收藏让他结识有意思的人。' },
        { speaker: 'Speaker 2', answer: 'A', explanation: '官方答案 A：依据录音内容，他享受收藏带来的挑战。' },
        { speaker: 'Speaker 3', answer: 'G', explanation: '官方答案 G：依据录音内容，收藏让他与过去相连。' },
        { speaker: 'Speaker 4', answer: 'D', explanation: '官方答案 D：依据录音内容，他想借此帮助当地社区。' },
        { speaker: 'Speaker 5', answer: 'F', explanation: '官方答案 F：依据录音内容，他把收藏当作一种投资。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a scientist called Peter Crane, who is talking about an ancient tree called the gingko. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t2-p4.mp3',
      items: [
        {
          q: 'What first interested Peter about the gingko tree?',
          opts: ['how its leaves grow', 'the family it belongs to', "what's known about its history"],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，最初吸引他的是银杏的已知历史。',
        },
        {
          q: 'What does Peter say about the gingko tree in ancient China?',
          opts: [
            "It wasn't originally grown for its nuts.",
            "It wasn't common before people started growing it.",
            'It was one of the earliest plants to be grown there.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，银杏在人工种植之前并不常见。',
        },
        {
          q: 'When asked about the medicinal uses of gingko, Peter says',
          opts: [
            'researchers in different parts of the world disagree about it.',
            'scientists have failed to identify any positive effects.',
            'some parts of the plant help the brain to function.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，科学家未能证实银杏有任何积极疗效。',
        },
        {
          q: 'Why are there so many gingko trees in cities all over the world?',
          opts: [
            "They don't suffer from problems that usually affect trees there.",
            "Other trees can't survive if they are too close to the species.",
            'People take more trouble to look after them than other trees.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，银杏不受城市树木常见问题的困扰。',
        },
        {
          q: 'Peter says that street trees benefit people by providing',
          opts: ['some protection from the sun.', 'a reduction in traffic noise.', 'increased privacy.'],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，街道树木能为人们遮挡阳光。',
        },
        {
          q: 'Peter says people can help other species of plant to survive by',
          opts: [
            'leaving plants to grow in the wild.',
            'protecting them from plant-eating animals.',
            'growing them in many different places.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，把植物种到多处有利于物种存续。',
        },
        {
          q: "How does Peter's work influence the way he thinks about the world?",
          opts: [
            'It makes him feel concerned about the future of human beings.',
            'It reminds him that human beings are a relatively new species.',
            'It allows him to understand why human beings focus on the present.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，工作让他意识到人类是相对年轻的物种。',
        },
      ],
    },
  },
};

// 标准版2 · Test 3（书内印 Test 7）Listening（书页 66–71；Key: 书 144–145/PDF 145–146，已逐题核对）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；答案逐题核对自 Test 7 Key（RUE Key 之后，书 145/PDF 146）。
// 音频接入映射：P1=CD2 Track01，P2=CD2 Track03，P3=CD2 Track04，P4=CD2 Track06（/audio/fce/std2/std2-t3-p1~p4.mp3）。
// 注意：书 68 Q15 印刷原文即为 "During the breaks, Ann was happy..."（"Ann" 为原书笔误，应为 Anne，按页面视觉转录原样保留）。
// 注意：Part 2 版块标题原书印为 "Archery"；数据结构无标题字段，未入数据（同 std2-t3-reading Part 7 惯例）。
const STD2_L3 = {
  meta: {
    id: 'fce-standard-2-test3-listening',
    title: 'FCE 标准版真题 2 · Test 3 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 66–71',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 7 Key（书 144–145 / PDF 145–146，Listening 答案区在书 145）',
    audioNote: '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    examKey: 'fce-standard-2-test3',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear two friends talking about a laptop computer.',
          q: 'What is the woman doing?',
          opts: [
            'persuading her friend to buy one like it',
            'offering to lend it to her friend for a day',
            'explaining why she needed a new one',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她在劝朋友买一台同款笔记本电脑。',
        },
        {
          scenario: 'You hear two students talking about a play they have just seen.',
          q: 'What do they agree was good about it?',
          opts: ['the script', 'the set', 'the actors'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，两人一致称赞的是这部剧的演员。',
        },
        {
          scenario: 'You hear two people talking about a friend.',
          q: 'What do they agree about him?',
          opts: [
            "He's very helpful.",
            "He's easy to get to know.",
            'He rarely complains about anything.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，两人一致认同的是他很少抱怨。',
        },
        {
          scenario: 'You hear a lecturer talking to some of his students about their history project.',
          q: 'What is he doing?',
          opts: [
            'encouraging them to ask him questions about it',
            'recommending some books that will help with it',
            'advising them on how to organise their time',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他鼓励学生就该项目向他提问。',
        },
        {
          scenario: 'You hear two TV sports presenters talking about their work.',
          q: 'What do they agree about sports presenters?',
          opts: [
            "They're generally more effective when using a script.",
            'They have to be able to relate well to their audience.',
            "They should adopt an attitude that isn't too serious.",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，两人一致认为体育解说必须善于与观众沟通。',
        },
        {
          scenario: 'You hear a woman talking about a radio programme.',
          q: 'What does she say about the programme?',
          opts: [
            'It provided her with a lot of useful information.',
            'It was more interesting than she had expected.',
            'It made her want to find out about a place.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，这档节目比她预想的更有意思。',
        },
        {
          scenario: 'You hear two music students talking about an assignment they have to do.',
          q: 'What are they both unsure about?',
          opts: [
            'what to include in the piece of writing',
            'how to organise the recording',
            'what kind of music they should perform',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，两人都没把握写作 piece 里该写进哪些内容。',
        },
        {
          scenario: 'You hear a writer talking about a book she wrote which has been turned into a film.',
          q: 'How does the writer feel about the film director?',
          opts: [
            'She thinks he has made a good film.',
            'She is upset because her opinion was ignored.',
            'She found him easy to work with.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她认为导演把这部电影拍得很好。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Anne Ruskin giving a talk about a one-day archery course, during which she learnt to use a bow to shoot arrows at a target. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std2/std2-t3-p2.mp3',
      items: [
        {
          q: 'Anne used to shoot arrows from a bow made of ____ when she was a child.',
          answer: ['plastic'],
          show: 'plastic',
          explanation: '官方答案 plastic：依据录音内容，她小时候用的弓是塑料做的。',
        },
        {
          q: "Anne only had time to read about the ____ of archery before the beginner's archery course.",
          answer: ['rules'],
          show: 'rules',
          explanation: '官方答案 rules：依据录音内容，上课前她只有时间读射箭规则。',
        },
        {
          q: "Anne's archery course took place in a ____ .",
          answer: ['field'],
          show: 'field',
          explanation: '官方答案 field：依据录音内容，课程在一块场地（field）上举行。',
        },
        {
          q: 'Anne was surprised that learning to ____ properly was so difficult.',
          answer: ['stand'],
          show: 'stand',
          explanation: '官方答案 stand：依据录音内容，她没想到正确站姿学起来那么难。',
        },
        {
          q: 'The teacher told Anne she needed to relax her ____ .',
          answer: ['shoulders'],
          show: 'shoulders',
          explanation: '官方答案 shoulders：依据录音内容，老师让她放松肩膀。',
        },
        {
          q: "One of Anne's arrows went into a ____ by accident.",
          answer: ['tree'],
          show: 'tree',
          explanation: '官方答案 tree：依据录音内容，她有一支箭误中了一棵树。',
        },
        {
          q: 'During the breaks, Ann was happy to look at the ____ and talk to other people.',
          answer: ['view'],
          show: 'view',
          explanation: '官方答案 view：依据录音内容，休息时她乐于看看风景、与他人交谈。（原书此处印作 "Ann"，保留笔误。）',
        },
        {
          q: "Some of the people on Anne's course said that a ____ had inspired them to try archery.",
          answer: ['TV series', 'television series'],
          show: 'TV / television series',
          explanation: '官方答案 TV / television series：Key 中 TV 与 television 均可，即某部电视剧激发了他们尝试射箭。',
        },
        {
          q: 'Anne was excited when the class were allowed to start ____ .',
          answer: ['scoring', 'keeping score', 'keeping a score'],
          show: 'scoring / keeping (a) score',
          explanation: '官方答案 scoring / keeping (a) score：Key 中 "scoring" 与 "keeping (a) score" 均算对，指全班开始计分。',
        },
        {
          q: 'Anne is trying to persuade her ____ to do an archery course with her.',
          answer: ['parents'],
          show: 'parents',
          explanation: '官方答案 parents：依据录音内容，她正劝父母和她一起上射箭课。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about when they moved their office from one building to another. For questions 19–23, choose from the list (A–H) what each speaker says. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std2/std2-t3-p3.mp3',
      options: [
        { label: 'A', text: 'We were not allowed to do the packing ourselves.' },
        { label: 'B', text: 'We decided not to blame the removal company for all the problems.' },
        { label: 'C', text: 'We chose certain members of staff to take responsibility for the move.' },
        { label: 'D', text: 'We chose a removal firm with a good reputation to avoid wasting time.' },
        { label: 'E', text: 'We made sure our senior staff stayed with the company.' },
        { label: 'F', text: 'We took advantage of the move to make additional necessary changes.' },
        { label: 'G', text: 'We managed not to exceed our budget.' },
        { label: 'H', text: 'We expressed our concerns about the move.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: '官方答案 E：依据录音内容，该说话人确保资深员工留在了公司。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，该说话人表达了对搬家的顾虑。' },
        { speaker: 'Speaker 3', answer: 'C', explanation: '官方答案 C：依据录音内容，该说话人指定部分员工负责搬家事宜。' },
        { speaker: 'Speaker 4', answer: 'F', explanation: '官方答案 F：依据录音内容，该说话人借搬家之机做了其他必要调整。' },
        { speaker: 'Speaker 5', answer: 'B', explanation: '官方答案 B：依据录音内容，该说话人决定不为种种问题责怪搬家公司。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear part of a radio interview with someone called Jane Brown, who is a home economist working in the food industry. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t3-p4.mp3',
      items: [
        {
          q: 'Why did Jane choose to study at Longley University?',
          opts: [
            'The location suited her.',
            'She knew people there.',
            'The quality of the accommodation was good.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她选择 Longley 大学是因为位置合适。',
        },
        {
          q: 'What did Jane like about her course?',
          opts: [
            'She gained practical experience.',
            'The teachers helped her a great deal.',
            'She learned to work with other people.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她喜欢这门课程让她获得了实践经验。',
        },
        {
          q: 'What does Jane say about her food tasting training?',
          opts: [
            'It was a little boring.',
            'It was rather time-consuming.',
            'It was sometimes stressful.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，食品品尝训练有时让她感到有压力。',
        },
        {
          q: 'How did Jane feel when she was offered her first job?',
          opts: [
            'excited to be involved in a challenging area',
            'relieved to have been able to find employment',
            'concerned she might not do her work well enough',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，拿到第一份工作时她为找到了工作而如释重负。',
        },
        {
          q: 'Jane is proud that in her first job she',
          opts: [
            'came up with her own original idea for a product.',
            'proved that she was capable of working independently.',
            'succeeded in doing something nobody thought she could.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她为在第一份工作中证明自己能独立工作而自豪。',
        },
        {
          q: "How did working in Denmark help Jane's career?",
          opts: [
            'She made useful contacts.',
            'She came across new recipes.',
            'She found a better job.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，在丹麦工作帮她结识了有用的人脉。',
        },
        {
          q: 'What aspect of her job does Jane enjoy?',
          opts: [
            'the wide variety of activities she does',
            'the opportunity to meet new people',
            'the experience of trying new foods',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她最享受工作中活动的多样性。',
        },
      ],
    },
  },
};

// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 4 = 书内印 Test 8。Test 8 Listening: 书页 88–93（PDF 89–94，PDF 页 = 书页 + 1）
// 答案核对自 Test 8 Key（书 156 起 / PDF 157 起；Listening 区在书 157 / PDF 158）
// 音频：/audio/fce/std2/std2-t4-p1.mp3 ~ std2-t4-p4.mp3（整 Part 一条；p1=CD2 Track07，p2=CD2 Track09，p3=CD2 Track10，p4=CD2 Track12）
// 注：书 90 页 Part 2 版式为编号答题框（非 (N)……点线空位），按既有数据惯例以 ____ 表示空位；页面标题 "Expedition to South Pole"。
// 注：Key 第 11 题印作 "loneliness/lonelyness"（第二种为官方 Key 收录的拼写变体，原样照录），第 16 题印作 "half(-)way"。

const STD2_L4 = {
  meta: {
    id: 'fce-standard-2-test4-listening',
    title: 'FCE 标准版真题 2 · Test 4 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 88–93',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 8 Key（书 156–157 / PDF 157–158，Listening 区在书 157 / PDF 158）',
    audioNote: '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t4-p1.mp3',
      items: [
        {
          scenario: "You hear two people talking about some music they're listening to.",
          q: 'What does the man say about the song?',
          opts: ['It cheers him up.', 'It reminds him of his family.', 'It inspired him to take up a musical instrument.'],
          answer: 2,
          explanation: '官方答案为 C：他说这首歌激励他开始学习一种乐器。',
        },
        {
          scenario: 'You hear part of a radio programme in which a teacher is talking about her own education.',
          q: 'Why did she become a teacher?',
          opts: [
            'She enjoyed her own time at school very much.',
            'She was encouraged to do so by colleagues.',
            'She wanted others to have the same opportunities as her.',
          ],
          answer: 2,
          explanation: '官方答案为 C：她当老师是想让其他人也能拥有和她一样的机会。',
        },
        {
          scenario: 'You hear a woman telling a friend about a new job she has.',
          q: 'What problem does she have with the job?',
          opts: [
            "being asked to do tasks she's not suited for",
            'being too busy at certain times of day',
            'being disrespected by some customers',
          ],
          answer: 0,
          explanation: '官方答案为 A：她对这份新工作的不满在于常被安排去做不适合自己的任务。',
        },
        {
          scenario: 'You hear two students talking about an architecture course.',
          q: 'What do they agree about?',
          opts: [
            'There is too much work on the course.',
            'Their fellow students are creative people.',
            'The course is taught in an interesting way.',
          ],
          answer: 2,
          explanation: '官方答案为 C：两人一致认为这门建筑课程授课方式有趣。',
        },
        {
          scenario: 'You hear two students talking about the chemistry laboratories at their college.',
          q: 'What does the woman say about the laboratories?',
          opts: ['The equipment in them should be updated.', 'They are not large enough.', 'They need redecorating.'],
          answer: 1,
          explanation: '官方答案为 B：女生认为实验室面积不够大。',
        },
        {
          scenario: 'You hear a woman talking about a place she used to visit as a child.',
          q: 'What point is she making?',
          opts: [
            'She might be disappointed if she returned there.',
            'She prefers more sophisticated holidays now.',
            'The place appeals more to children than adults.',
          ],
          answer: 0,
          explanation: '官方答案为 A：她指出如果重回旧地可能会感到失望。',
        },
        {
          scenario: 'You hear a runner telling his friend about a sports injury he has.',
          q: 'What did his doctor advise?',
          opts: ['keep going with some training', 'introduce other sports very gradually', 'start running very slowly'],
          answer: 0,
          explanation: '官方答案为 A：医生建议他继续保持一定的训练。',
        },
        {
          scenario: 'You hear a woman talking about her favourite radio programme.',
          q: 'What does she say about the stories in the programme?',
          opts: [
            'The creative element in them is what makes them work.',
            'They tend to vary in how interesting they are.',
            'They contain messages we can all learn from.',
          ],
          answer: 1,
          explanation: '官方答案为 B：她说节目里故事的有趣程度参差不齐。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Peter Green talking about a group expedition he went on to the South Pole for a TV documentary. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std2/std2-t4-p2.mp3',
      items: [
        {
          q: 'Peter was working as an ____ when he applied to join the expedition.',
          answer: ['engineer'],
          show: 'engineer',
          explanation: '官方答案 engineer：他申请参加远征时的工作是工程师（题干冠词为 an）。',
        },
        {
          q: 'On the expedition, Peter and his group went to the South Pole on ____ instead of more typical means of transport.',
          answer: ['skis'],
          show: 'skis',
          explanation: '官方答案 skis：他们滑雪橇前往南极点，而非更常见的交通方式。',
        },
        {
          q: 'Peter says that his greatest challenge was the ____ he suffered.',
          answer: ['loneliness', 'lonelyness'],
          show: 'loneliness/lonelyness',
          explanation: '官方 Key 印作 loneliness/lonelyness（第二种为官方 Key 收录的拼写变体，按页面原样照录），两种拼法均算对。',
        },
        {
          q: "Peter says that ensuring they could get enough ____ took up a good deal of the group's time.",
          answer: ['water'],
          show: 'water',
          explanation: '官方答案 water：保障足够的用水占去了全队大量时间。',
        },
        {
          q: 'Peter was surprised at how quickly his ____ decreased.',
          answer: ['weight'],
          show: 'weight',
          explanation: '官方答案 weight：他惊讶于体重下降之快。',
        },
        {
          q: "Peter's ____ were affected by the cold during the expedition.",
          answer: ['toes'],
          show: 'toes',
          explanation: '官方答案 toes：远征期间的严寒影响了他的脚趾。',
        },
        {
          q: "One of Peter's teammates had a chest infection and the lack of ____ made it worse.",
          answer: ['rest'],
          show: 'rest',
          explanation: '官方答案 rest：队友患胸部感染，缺乏休息使病情加重。',
        },
        {
          q: "When they reached the ____ point, Peter's team were given a medical check.",
          answer: ['halfway', 'half-way'],
          show: 'half(-)way',
          explanation: '官方答案 half(-)way：按官方 Key 记法连字符可省略，halfway / half-way 均算对。',
        },
        {
          q: 'Peter felt a great sense of ____ when he reached the pole.',
          answer: ['relief'],
          show: 'relief',
          explanation: '官方答案 relief：抵达极点时他如释重负。',
        },
        {
          q: 'Peter uses the word ____ to describe the environment at the South Pole.',
          answer: ['alien'],
          show: 'alien',
          explanation: '官方答案 alien：他用 alien 一词形容南极点的环境。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about how to give good presentations. For questions 19–23, choose from the list (A–H) what advice each person gives. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std2/std2-t4-p3.mp3',
      options: [
        { label: 'A', text: 'Keep your presentation short.' },
        { label: 'B', text: 'Remember to repeat your main point.' },
        { label: 'C', text: 'Support your presentation with visuals.' },
        { label: 'D', text: 'Add some humour.' },
        { label: 'E', text: 'Practise giving your presentation.' },
        { label: 'F', text: 'Try to relax during your presentation.' },
        { label: 'G', text: "Don't try to memorise every word." },
        { label: 'H', text: 'Find out about your audience.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: '官方答案 E：说话人 1 给出的建议是多加练习做演示。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：说话人 2 建议事先了解听众情况。' },
        { speaker: 'Speaker 3', answer: 'A', explanation: '官方答案 A：说话人 3 建议把演示时间控制得短一些。' },
        { speaker: 'Speaker 4', answer: 'C', explanation: '官方答案 C：说话人 4 建议用视觉材料支撑演示。' },
        { speaker: 'Speaker 5', answer: 'F', explanation: '官方答案 F：说话人 5 建议在演示过程中尽量放松。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Maggie Wharton who is skilled in the sport of kitesurfing. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t4-p4.mp3',
      items: [
        {
          q: 'Maggie says it took her a long time to learn to kitesurf because',
          opts: [
            "the equipment wasn't widely available.",
            'it was hard to find the right assistance.',
            'she needed to build up her strength.',
          ],
          answer: 1,
          explanation: '官方答案为 B：她学得久是因为当时很难找到合适的指导。',
        },
        {
          q: "In Maggie's opinion, since she began kitesurfing",
          opts: [
            'suitable locations have been more clearly identified.',
            'attitudes to some aspects of safety have changed.',
            'participants have become better informed about sea conditions.',
          ],
          answer: 1,
          explanation: '官方答案为 B：在她看来，人们对安全某些方面的态度已经改变。',
        },
        {
          q: 'Maggie hopes that by competing in Fiji, she will',
          opts: [
            'encourage others to take up the sport.',
            'have the chance to pick up some new moves.',
            'be invited to start organising future events.',
          ],
          answer: 0,
          explanation: '官方答案为 A：她希望通过在斐济参赛鼓励更多人参与这项运动。',
        },
        {
          q: 'During one distance event, Maggie became slightly worried when',
          opts: [
            'she had to switch to different equipment.',
            'she experienced a great deal of pain.',
            'she lost sight of the people helping her.',
          ],
          answer: 2,
          explanation: '官方答案为 C：一次长距离赛事中，她因看不到协助她的人而略有担心。',
        },
        {
          q: 'Maggie thinks her success is due to the fact that',
          opts: [
            'the sport suits her character very well.',
            'her family have given her a lot of support.',
            'she has the opportunity to practise regularly.',
          ],
          answer: 0,
          explanation: '官方答案为 A：她认为成功源于这项运动非常契合她的性格。',
        },
        {
          q: "Maggie says that some new kitesurfers she's met",
          opts: [
            'are likely to develop the sport in interesting ways.',
            'are unwilling to focus on basic techniques first of all.',
            'are too worried about the rules of the sport.',
          ],
          answer: 1,
          explanation: '官方答案为 B：她遇到的一些新玩家不愿先专注基本技术。',
        },
        {
          q: 'What does Maggie hope to do in the future?',
          opts: ['find sources of investment for her sport', 'continue to compete at a high level', 'set up a kitesurfing school'],
          answer: 0,
          explanation: '官方答案为 A：她希望未来能为这项运动寻找投资来源。',
        },
      ],
    },
  },
};

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 22–27（PDF 24–29），答案核对自 Test 1 Key（Listening 区在书 121 / PDF 123；书 120 / PDF 122 为 Reading and Use of English Key）
// 音频：/audio/fce/std3/std3-t1-p1.mp3 ~ std3-t1-p4.mp3（整 Part 一条）
// 注：书 24 页 Part 2 印刷小标题为 "Survival in the forest"（数据结构无对应字段，记录于此备查）。

const STD3_L1 = {
  meta: {
    id: 'fce-standard-3-test1-listening',
    title: 'FCE 标准版真题 3 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 121 / PDF 123',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking on the radio about an actor.',
          q: 'What does the woman say about him?',
          opts: [
            'His acting has improved over the years.',
            'The media often criticise him unfairly.',
            'He gets fewer film roles than he deserves.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她说他的演技这些年有所提高。',
        },
        {
          scenario: 'You hear a hairstylist talking about her career.',
          q: 'She prefers working in the TV industry because she',
          opts: [
            'feels that her contribution is valued.',
            'is able to express her opinions freely.',
            'thrives on the creative challenge the work presents.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她感到自己的付出在电视行业被重视。',
        },
        {
          scenario: 'You hear a comedian called Geoff Knight talking on the radio about his profession.',
          q: 'What does Geoff like his act to contain?',
          opts: [
            'stories that give people a surprise',
            'things that everybody can relate to',
            'material that nobody has used before',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他希望表演里有大家都能产生共鸣的内容。',
        },
        {
          scenario: 'You hear a conversation between a customer and a coffee shop employee.',
          q: 'What is the employee doing?',
          opts: [
            "waiting for a colleague's help",
            "excusing a colleague's inefficiency",
            "criticising a colleague's attitude",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，员工在为同事的效率不高作开脱。',
        },
        {
          scenario: 'You hear a man telling a friend about an art exhibition.',
          q: 'What does he say about it?',
          opts: ['It was well attended.', 'The lighting was effective.', 'The catalogue was worth buying.'],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他觉得展览的灯光效果好。',
        },
        {
          scenario: 'You overhear a man ringing a sports shop.',
          q: 'Why is he calling?',
          opts: [
            'to report an incident in the shop',
            'to make a special order',
            'to follow up an earlier query',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他打电话是跟进之前的咨询。',
        },
        {
          scenario: 'You hear a man telling a friend about his work.',
          q: 'How does the man feel about his work?',
          opts: [
            "resentment of his colleague's success",
            'regret at the changes that have taken place',
            'frustration at his lack of progress',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他对工作中已经发生的变化感到遗憾。',
        },
        {
          scenario: "You hear two people talking about a country walk they're doing.",
          q: 'What do they agree about?',
          opts: [
            "It's much too long to complete.",
            'The path is very difficult to follow.',
            "They've chosen the wrong day to do it.",
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，两人都认为今天来徒步选错了日子。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a presentation given by a university student called Megan Rowlings about a forest survival course she went on in Australia. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t1-p2.mp3',
      items: [
        {
          q: "It was Megan's ____ who told her about the survival course.",
          answer: ['father'],
          show: 'father',
          explanation: '官方答案 father：是她父亲告诉了她这个生存课程。',
        },
        {
          q: "Megan particularly appreciated the course leader John's use of ____ at stressful moments.",
          answer: ['humour', 'humor'],
          show: 'humour / humor',
          explanation: '官方答案 humour / humor：Key 给出英式与美式两种拼写。',
        },
        {
          q: "Megan said the assistant's knowledge of ____ was very useful during the course.",
          answer: ['plants'],
          show: 'plants',
          explanation: '官方答案 plants：助教对植物的了解在课程中很有用。',
        },
        {
          q: 'Megan was worried that her ____ would be a problem in doing some of the tasks.',
          answer: ['physical size', 'size'],
          show: '(physical) size',
          explanation: '官方答案 (physical) size：Key 中 physical 为可选词，两种写法均算对。',
        },
        {
          q: 'John emphasised that when it comes to safety, ____ is the most dangerous reaction.',
          answer: ['panic'],
          show: 'panic',
          explanation: '官方答案 panic：慌乱是最危险的反应。',
        },
        {
          q: "Megan's teammates were grateful for the ____ which she'd brought with her.",
          answer: ['plastic bags', 'bags'],
          show: '(plastic) bags',
          explanation: '官方答案 (plastic) bags：Key 中 plastic 为可选词，两种写法均算对。',
        },
        {
          q: 'Megan learned how to make a ____ from the material found in the forest.',
          answer: ['knife'],
          show: 'knife',
          explanation: '官方答案 knife：她学会了用林中材料做刀。',
        },
        {
          q: 'Megan and her group were told they should only use water from the ____ for drinking.',
          answer: ['river'],
          show: 'river',
          explanation: '官方答案 river：只能饮用河水。',
        },
        {
          q: 'Megan found that making a ____ was hard for her.',
          answer: ['fire without matches', 'fire'],
          show: 'fire (without matches)',
          explanation: '官方答案 fire (without matches)：Key 中 without matches 为可选补充，生火对她来说最难。',
        },
        {
          q: 'Megan was surprised to find that the skill of ____ benefited her.',
          answer: ['being good at time management', 'time management'],
          show: '(being good at) time management',
          explanation: '官方答案 (being good at) time management：Key 中 being good at 为可选词。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people talk about a problem they had in their first few weeks in a new job. For questions 19–23, choose what problem (A–H) each speaker says they had. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t1-p3.mp3',
      options: [
        { label: 'A', text: 'I made an embarrassing comment.' },
        { label: 'B', text: "I didn't get on with my colleagues." },
        { label: 'C', text: 'I took on too much work.' },
        { label: 'D', text: "I didn't get enough support." },
        { label: 'E', text: 'I found the work too challenging.' },
        { label: 'F', text: 'I was over-confident.' },
        { label: 'G', text: "I wasn't very punctual." },
        { label: 'H', text: 'I was treated unreasonably.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'G', explanation: '官方答案 G：依据录音内容，这位说话者的问题是不够守时。' },
        { speaker: 'Speaker 2', answer: 'F', explanation: '官方答案 F：依据录音内容，这位说话者当时过于自信。' },
        { speaker: 'Speaker 3', answer: 'A', explanation: '官方答案 A：依据录音内容，这位说话者说了一句令人尴尬的话。' },
        { speaker: 'Speaker 4', answer: 'H', explanation: '官方答案 H：依据录音内容，这位说话者受到了不公平的对待。' },
        { speaker: 'Speaker 5', answer: 'C', explanation: '官方答案 C：依据录音内容，这位说话者承担了太多的工作。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with an international concert pianist called Karen Hong. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t1-p4.mp3',
      items: [
        {
          q: 'Why does Karen keep practising pieces of music she knows well?',
          opts: [
            'to keep her confidence levels high',
            'to warm up before playing difficult new pieces',
            'to make small improvements to her performance of them',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她练习熟曲是为了在演绎上不断小幅改进。',
        },
        {
          q: 'What does Karen say about her mother?',
          opts: [
            'She still tries to have an influence over Karen.',
            "She shows her emotions much more than Karen's father.",
            'She could have been a competent pianist herself.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，母亲至今仍试图对 Karen 施加影响。',
        },
        {
          q: 'Karen says that after winning a big competition, she began',
          opts: ['to lose interest in music.', 'to take offence easily.', 'to doubt her talent.'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，赢得大赛后她开始怀疑自己的天赋。',
        },
        {
          q: "Karen's decision to take a break from performing allowed her to",
          opts: [
            'spend a lot of time on her own.',
            'regain full physical health.',
            'put a new management team in place.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，休整让她得以组建新的经纪团队。',
        },
        {
          q: 'When she was performing on television regularly, Karen enjoyed the idea that',
          opts: [
            'she was bringing people from different countries closer together.',
            "she was improving people's mood and energy levels.",
            'she was taking classical music to new places and people.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她乐于想到古典音乐正被带到新的地方和人群面前。',
        },
        {
          q: 'What does Karen say about pop music?',
          opts: [
            'It is suitable for people of all ages.',
            'It makes little impression on her.',
            "It affects teenagers' behaviour in different ways.",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，流行音乐对她几乎没有影响。',
        },
        {
          q: 'Karen believes that when dealing with young children who play music',
          opts: [
            'praise should only be given where it is justified.',
            'pushing them too hard will demotivate them.',
            "it's a mistake to make them nervous about the end result.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她认为只应在有理由时才给予表扬。',
        },
      ],
    },
  },
}

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 44–49（PDF 46–51），答案核对自 Test 2 Key（Listening 区在书 133 / PDF 135）
// 音频：/audio/fce/std3/std3-t2-p1.mp3 ~ std3-t2-p4.mp3（整 Part 一条）
// 注：书 46 页 Part 2 印刷小标题为 "Working on a turtle conservation programme"（数据结构无对应字段，记录于此备查）。

const STD3_L2 = {
  meta: {
    id: 'fce-standard-3-test2-listening',
    title: 'FCE 标准版真题 3 · Test 2',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 44–49',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 133 / PDF 135',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking about collecting old coins.',
          q: 'What pleases him most about his hobby?',
          opts: [
            'the satisfaction of aiming for a complete collection',
            'the idea that someone has used the coins in the past',
            'the thrill of searching for unusual coins for his collection',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，最让他高兴的是想到这些硬币过去被人使用过。',
        },
        {
          scenario: 'You hear a woman talking about playing the piano.',
          q: 'What does she say about learning to play the piano?',
          opts: [
            "It's important to find the right teacher.",
            'Everyone can play well if they try.',
            'It requires more discipline than other instruments.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她强调要找到合适的老师。',
        },
        {
          scenario: "You overhear a man and a woman talking in an art gallery about a boy's paintings.",
          q: 'What do they agree about the paintings?',
          opts: [
            'They show remarkable artistic maturity.',
            'The gallery is asking too much money for them.',
            "They probably weren't painted by the boy.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，两人都认为这些画显示出非凡的艺术成熟度。',
        },
        {
          scenario: 'You hear two students talking about a university chemistry lecturer.',
          q: 'What do they agree about the lecturer?',
          opts: [
            'She is good at explaining difficult concepts in lectures.',
            'She is tolerant towards students who hand work in late.',
            'She manages to make students feel enthusiastic about her subject.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，两人都认为她能让学生对学科产生热情。',
        },
        {
          scenario: 'You hear a woman talking to a work colleague about moving abroad for a new job.',
          q: 'What does the woman feel disappointed about?',
          opts: [
            'the inflexible attitude to the start date',
            'the lack of job security involved',
            'the relatively low status of the work',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她对入职日期上不容变通的态度感到失望。',
        },
        {
          scenario: 'You hear two friends talking about a job interview.',
          q: 'How does the woman feel now?',
          opts: [
            'surprised that the interview went well',
            'pleased to have impressed the interviewers',
            "relieved that she wasn't asked any difficult questions",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她为自己给面试官留下好印象而高兴。',
        },
        {
          scenario: 'You hear part of a radio programme.',
          q: 'What is the woman talking about?',
          opts: [
            'an environment group',
            'a nature course for school children',
            'a new walking route in the countryside',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她在介绍乡间一条新的徒步路线。',
        },
        {
          scenario: 'You hear a woman talking to her brother about his hair.',
          q: 'What is she doing?',
          opts: [
            'admitting she cut his hair badly',
            'teasing him about his haircut',
            'suggesting he grow his hair longer',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她建议他把头发留长一些。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called David Briggs giving a talk about his work as a volunteer on a turtle conservation programme in Western Australia. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t2-p2.mp3',
      items: [
        {
          q: 'David first found out about the turtle programme from his ____ .',
          answer: ['uncle'],
          show: 'uncle',
          explanation: '官方答案 uncle：他最早是从叔叔那里知道这个海龟保护项目的。',
        },
        {
          q: 'David chose to work at the ____ site because its location was more convenient.',
          answer: ['mainland', 'main land'],
          show: 'main(-)land',
          explanation: '官方答案 main(-)land：Key 给出连写与分写两种形式。',
        },
        {
          q: 'David thinks his interest in ____ helped him to get a place on the programme.',
          answer: ['marine science'],
          show: 'marine science',
          explanation: '官方答案 marine science：他对海洋科学的兴趣帮他获得了名额。',
        },
        {
          q: "David was surprised to find that the ability to ____ wasn't considered necessary.",
          answer: ['swim'],
          show: 'swim',
          explanation: '官方答案 swim：他惊讶地发现会游泳并不是必要条件。',
        },
        {
          q: 'Apart from the cost of ____ , everything essential was provided by the organisers.',
          answer: ['transport', 'the transport'],
          show: '(the) transport',
          explanation: '官方答案 (the) transport：Key 中 the 为可选词，只有交通费需自理。',
        },
        {
          q: "David's shifts took place during the ____ when the turtles could be checked on the beach.",
          answer: ['night'],
          show: 'night',
          explanation: '官方答案 night：轮班在夜间进行，以便查看海滩上的海龟。',
        },
        {
          q: 'David felt it was particularly important to be ____ when handling the turtles.',
          answer: ['gentle'],
          show: 'gentle',
          explanation: '官方答案 gentle：接触海龟时动作要特别轻柔。',
        },
        {
          q: "Unlike his fellow volunteers, David found the ____ didn't bother him.",
          answer: ['heat'],
          show: 'heat',
          explanation: '官方答案 heat：与其他志愿者不同，炎热并没有困扰他。',
        },
        {
          q: 'David said that tiredness could lead to a loss of ____ among the volunteers when they were collecting data.',
          answer: ['concentration'],
          show: 'concentration',
          explanation: '官方答案 concentration：疲劳会让志愿者收集数据时注意力下降。',
        },
        {
          q: 'David uses the name ____ to refer to the most experienced volunteers.',
          answer: ['returners'],
          show: 'returners',
          explanation: '官方答案 returners：他用这个词称呼经验最丰富的志愿者。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which writers give advice about writing comedy scripts for television. For questions 19–23, choose which piece of advice (A–H) each speaker gives. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t2-p3.mp3',
      options: [
        { label: 'A', text: 'Write about people who amuse you.' },
        { label: 'B', text: 'Team up with another writer.' },
        { label: 'C', text: 'Develop your characters well.' },
        { label: 'D', text: 'Rewrite your whole script several times.' },
        { label: 'E', text: 'Study comedy you like.' },
        { label: 'F', text: 'Listen to what other people say about your work.' },
        { label: 'G', text: 'Find your own way as a writer.' },
        { label: 'H', text: 'Let the audience in on the joke quickly.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: '官方答案 C：依据录音内容，这位编剧建议把角色塑造好。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，这位编剧建议让观众尽快领会笑点。' },
        { speaker: 'Speaker 3', answer: 'F', explanation: '官方答案 F：依据录音内容，这位编剧建议听取他人对作品的意见。' },
        { speaker: 'Speaker 4', answer: 'B', explanation: '官方答案 B：依据录音内容，这位编剧建议与其他作者合作。' },
        { speaker: 'Speaker 5', answer: 'E', explanation: '官方答案 E：依据录音内容，这位编剧建议研究自己喜欢的喜剧。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Maya Gardi, whose daily life and business are based on waste-free principles. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t2-p4.mp3',
      items: [
        {
          q: 'What did Maya find most difficult when she started shopping in a waste-free way?',
          opts: [
            'having to take more time over it',
            'having to avoid things in plastic containers',
            'having to remember to take her own bags',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，最难的是购物要花更多时间。',
        },
        {
          q: 'Maya decided to adopt a completely waste-free lifestyle when she',
          opts: [
            'saw an article online about plastic rubbish.',
            'noticed the bins outside her block of flats.',
            'visited her local waste facility.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她是在参观当地垃圾处理设施后下决心的。',
        },
        {
          q: "How did Maya's parents react to her decision to live waste-free?",
          opts: [
            'They were worried that she would regret it.',
            'They did not believe that she really meant it.',
            'They did not think that she was likely to succeed.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，父母不相信她是认真的。',
        },
        {
          q: "How have Maya's cooking and eating habits changed?",
          opts: [
            'She uses leftover food creatively.',
            'She cooks more often for her friends.',
            'She has developed her own cooking skills.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她开始有创意地利用剩菜。',
        },
        {
          q: 'What does Maya say about socialising?',
          opts: [
            'She sometimes has to forget her principles.',
            "She doesn't worry about what people think of her.",
            'She carefully chooses which events she attends.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她不在意别人怎么看她。',
        },
        {
          q: 'What does Maya say about her new business?',
          opts: [
            'She has an advantage when it comes to marketing.',
            'Sales are increasing faster than expected.',
            'She is expanding into a related sector.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她在营销方面有优势。',
        },
        {
          q: 'How did Maya feel about the radio work she did recently?',
          opts: [
            'nervous about taking part at the last minute',
            'pleased to have the chance to explain her views',
            'surprised that she was asked by a reporter',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她很高兴有机会阐述自己的观点。',
        },
      ],
    },
  },
}

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 66–71（PDF 68–73），答案核对自 Test 3 Key（Listening 区在书 145 / PDF 147）
// 音频：/audio/fce/std3/std3-t3-p1.mp3 ~ std3-t3-p4.mp3（整 Part 一条）
// 注：书 68 页 Part 2 印刷小标题为 "Film Advisor"（数据结构无对应字段，记录于此备查）。

const STD3_L3 = {
  meta: {
    id: 'fce-standard-3-test3-listening',
    title: 'FCE 标准版真题 3 · Test 3',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 66–71',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 145 / PDF 147',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear a young woman who is an apprentice cook talking about her apprenticeship.',
          q: 'How does she feel about it?',
          opts: [
            'grateful to be working in a four-star restaurant',
            'pleased that her teacher told her about the opportunity',
            'confident about fulfilling her ambitions',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她对实现自己的抱负充满信心。',
        },
        {
          scenario: 'You hear two students talking about passing the time on bus journeys.',
          q: 'What technique for passing the time do they both sometimes use?',
          opts: [
            'listening to music',
            'observing the world outside',
            "concentrating on what's happening inside",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，两人都会观察车窗外的世界来打发时间。',
        },
        {
          scenario: 'You hear a cycle coach telling his group about the ride they are going to do.',
          q: 'What instruction does the coach give?',
          opts: [
            "Don't go too fast on the return route.",
            'Stick together on the main road.',
            "Don't take the first sign to the destination.",
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他叮嘱不要走去目的地的第一个路标。',
        },
        {
          scenario: 'You hear part of an interview in which a writer talks about autobiographies.',
          q: 'What does the writer say about them?',
          opts: [
            'He prefers working on books about people he knows.',
            'He is unlikely to write one himself.',
            'He thinks the more popular ones are very boring.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他说自己不太可能写自传。',
        },
        {
          scenario: 'You hear a journalist telling a colleague about her time at university.',
          q: 'How did she first get interested in journalism?',
          opts: [
            'by doing research online',
            'by accepting a chance request',
            'by reading a particularly interesting article',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她因接受了一个偶然的约稿而对新闻业产生兴趣。',
        },
        {
          scenario: 'You hear a man and a woman talking about a new clothes shop they have visited.',
          q: 'What does the man say about having a member of staff to welcome customers?',
          opts: [
            'It seems like a worthwhile idea.',
            'Other people might appreciate it.',
            'Worse things happen in other shops.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他觉得比起别的店里发生的事这不算什么。',
        },
        {
          scenario: 'You overhear a woman talking on the phone to a friend.',
          q: 'What is the woman talking about?',
          opts: [
            'an idea for a small short-term business',
            'the various career options open to her',
            'her role in a forthcoming expedition',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她在讲一个小型短期生意的点子。',
        },
        {
          scenario: 'You hear part of a broadcast on the radio.',
          q: 'What type of broadcast is it?',
          opts: [
            'a programme advertisement',
            'a wildlife documentary',
            'a news summary',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，这是一段节目广告。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Paula Kanning, who works as a film advisor in local government, talking about her work. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t3-p2.mp3',
      items: [
        {
          q: "Paula's job title when she started working in the film department was ____ .",
          answer: ['a location researcher', 'location researcher'],
          show: '(a) location researcher',
          explanation: '官方答案 (a) location researcher：Key 中冠词 a 为可选词。',
        },
        {
          q: 'Paula was first attracted to the job by the ____ on offer.',
          answer: [
            'flexible hours',
            'flexible work hours',
            'flexible working hours',
            'hours',
            'work hours',
            'working hours',
            'flexibility of hours',
            'flexibility of the hours',
            'flexibility of work hours',
            'flexibility of working hours',
            'flexibility of the work hours',
            'flexibility of the working hours',
          ],
          show: '(flexible) (work/working) hours / (flexibility of) (the) (work/working) hours',
          explanation: '官方答案 (flexible) (work/working) hours / (flexibility of) (the) (work/working) hours：按 Key 括号可选项逐一组合，全部录入。',
        },
        {
          q: "The most popular place for filmmakers in Paula's area is a ____ .",
          answer: ['castle'],
          show: 'castle',
          explanation: '官方答案 castle：当地最受摄制组欢迎的地点是一座城堡。',
        },
        {
          q: 'Paula mentions a well-known advertisement for ____ that she proposed the site for.',
          answer: ['an ice cream', 'an ice-cream', 'an icecream', 'ice cream', 'ice-cream', 'icecream', 'ice creams', 'ice-creams', 'icecreams'],
          show: '(an) ice(-)cream / ice(-)cream(s)',
          explanation: '官方答案 (an) ice(-)cream / ice(-)cream(s)：按 Key 组合录入连字符、冠词与复数变体。',
        },
        {
          q: 'Paula mentions that in her first year she sometimes needed to persuade ____ to agree to filming.',
          answer: ['some farmers', 'farmers'],
          show: '(some) farmers',
          explanation: '官方答案 (some) farmers：Key 中 some 为可选词。',
        },
        {
          q: 'Paula is particularly proud of the ____ she built up during her first year in the department.',
          answer: ['database'],
          show: 'database',
          explanation: '官方答案 database：她为第一年建起的数据库感到自豪。',
        },
        {
          q: "Paula's current job involves managing a project with the name ____ .",
          answer: ['movie map', 'movie-map'],
          show: 'movie(-)map',
          explanation: '官方答案 movie(-)map：Key 给出连写与加连字符两种形式。',
        },
        {
          q: 'Paula finds creating ____ for tourists the most difficult part of her current job.',
          answer: ['leaflets'],
          show: 'leaflets',
          explanation: '官方答案 leaflets：为游客制作宣传单是她觉得最难的部分。',
        },
        {
          q: 'Paula believes it is necessary to protect the ____ of local residents as well as their property.',
          answer: ['privacy'],
          show: 'privacy',
          explanation: '官方答案 privacy：居民隐私与财产都要保护。',
        },
        {
          q: "Paula's department has recently set up what she calls a ____ scheme for students.",
          answer: ['work placement', 'work placement programme', 'work placement program'],
          show: 'work placement (programme / program)',
          explanation: '官方答案 work placement (programme / program)：Key 给出英式与美式拼写。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people talk about why they did not go to university directly after leaving school. For questions 19–23, choose which of the reasons (A–H) each speaker gives. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t3-p3.mp3',
      options: [
        { label: 'A', text: 'a wish to see new places' },
        { label: 'B', text: 'a misunderstanding about applying' },
        { label: 'C', text: 'a desire to have a break from studying' },
        { label: 'D', text: 'a wish to stay near to home' },
        { label: 'E', text: 'a decision to prioritise family commitments' },
        { label: 'F', text: 'a desire to start a career immediately' },
        { label: 'G', text: 'a feeling of not being mature enough' },
        { label: 'H', text: 'an inability to find a suitable course' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: '官方答案 C：依据录音内容，这位说话者想先暂停学习休息一下。' },
        { speaker: 'Speaker 2', answer: 'F', explanation: '官方答案 F：依据录音内容，这位说话者希望立即开始职业生涯。' },
        { speaker: 'Speaker 3', answer: 'H', explanation: '官方答案 H：依据录音内容，这位说话者找不到合适的课程。' },
        { speaker: 'Speaker 4', answer: 'B', explanation: '官方答案 B：依据录音内容，这位说话者因申请环节的误会而未直接升学。' },
        { speaker: 'Speaker 5', answer: 'E', explanation: '官方答案 E：依据录音内容，这位说话者决定把家庭责任放在首位。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear a radio interview with a woman called Susan Fletcher, who works on a research station in Antarctica. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t3-p4.mp3',
      items: [
        {
          q: 'How does Susan feel before each trip to Antarctica?',
          opts: [
            "anxious because she'll miss people she cares about",
            'concerned about dealing with what lies ahead',
            'relieved to be leaving problems behind',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她担心的是如何应对前方的状况。',
        },
        {
          q: "Susan says that what's most stressful for her at the moment is",
          opts: [
            'not being able to predict everything you may need.',
            'not having enough time to prepare properly.',
            "not knowing exactly where she's going.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，最让她有压力的是无法预知所有需要的东西。',
        },
        {
          q: 'What does Susan admire about her colleagues?',
          opts: [
            'their scientific skills',
            'their lack of selfishness',
            'their success as researchers',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她佩服同事们的无私。',
        },
        {
          q: "Susan says the entertainment that's organised at the research station",
          opts: [
            'serves a useful purpose.',
            'allows people to show off their talents.',
            "disturbs people's regular schedules.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，站里组织的娱乐活动有实际作用。',
        },
        {
          q: 'On the research station, Susan sometimes has difficulty',
          opts: [
            'getting enough time alone.',
            'eating the same food all the time.',
            "having a comfortable night's sleep.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她有时难以得到独处的时间。',
        },
        {
          q: 'What does Susan say she loves about her work?',
          opts: [
            'the chance to observe such fascinating wildlife',
            'being able to live so far from populated areas',
            'the fact that such a unique place is so familiar to her',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她喜爱的是对这个独特之地已然如此熟悉。',
        },
        {
          q: 'Susan advises students hoping to work in Antarctica to',
          opts: [
            'make sure they have skills that are not purely academic.',
            'develop a high level of competence in their particular subject.',
            "think carefully about whether they're well-suited to the lifestyle.",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她建议学生在自己的专业领域达到高水平。',
        },
      ],
    },
  },
}

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 88–93（PDF 90–95），答案核对自 Test 4 Key（Listening 区在书 157 / PDF 159）
// 音频：/audio/fce/std3/std3-t4-p1.mp3 ~ std3-t4-p4.mp3（整 Part 一条）
// 注：书 90 页 Part 2 印刷小标题为 "Visit to a tea plantation"（数据结构无对应字段，记录于此备查）。

const STD3_L4 = {
  meta: {
    id: 'fce-standard-3-test4-listening',
    title: 'FCE 标准版真题 3 · Test 4',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 88–93',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 157 / PDF 159',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t4-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking about an ancient object he found in the ground.',
          q: 'The man took the object to a museum because',
          opts: [
            'he thought it might be valuable.',
            'he decided to record his find.',
            'he wanted to know what it was.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他想知道这东西是什么。',
        },
        {
          scenario: 'You hear two friends talking about advertising.',
          q: 'What does the woman say about advertisements?',
          opts: [
            'They are merely a form of entertainment.',
            "They make people buy things they don't need.",
            'They give people misleading information about new products.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她说广告让人买不需要的东西。',
        },
        {
          scenario: 'You hear an actor talking about her career.',
          q: 'What does she say about how she became an actor?',
          opts: [
            'She had a chance meeting with someone.',
            'She was successful at drama school.',
            'She asked her friend to help her.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她因一次偶然的相遇入行。',
        },
        {
          scenario: 'You hear a tour guide telling a group of tourists about a view.',
          q: 'Which feature does the guide think will be most familiar to them?',
          opts: ['the park', 'the river', 'the wood'],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他认为游客最熟悉的是那条河。',
        },
        {
          scenario: 'You hear a man talking to a friend about a presentation he has just given.',
          q: 'How does he feel now?',
          opts: [
            'relieved that the audience was small',
            'confident that he spoke clearly',
            'surprised that so many people asked questions',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他确信自己讲得清楚。',
        },
        {
          scenario: 'You hear two students talking about a careers talk they have just heard at college.',
          q: 'What do they disagree about?',
          opts: [
            'how useful the information was',
            'how entertaining the speaker was',
            'how well the audience behaved',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，两人意见不一的是听众的表现。',
        },
        {
          scenario: "You hear an author of children's books talking about her work.",
          q: 'What point is she making?',
          opts: [
            'She wants her books to be educational.',
            'Her books are about her real-life experiences.',
            'Friendship is the main focus of her stories.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她说友谊是其故事的核心。',
        },
        {
          scenario: 'You hear a man and a woman talking about older people learning languages.',
          q: 'What does the man say about them?',
          opts: [
            "They don't take advantage of technology.",
            'They have more time to study.',
            'They use better learning techniques.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他说年长者运用的学习方法更好。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a student called Andy Richards talking about his recent trip to the tea growing region of Assam in Northern India. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t4-p2.mp3',
      items: [
        {
          q: 'As part of his ____ course at university, Andy went to India to gather information for a project.',
          answer: ['business studies', 'business'],
          show: 'business (studies)',
          explanation: '官方答案 business (studies)：Key 中 studies 为可选词，两种写法均算对。',
        },
        {
          q: "Andy compares the tea plant's growing conditions to a ____ .",
          answer: ['natural greenhouse', 'natural green-house', 'greenhouse', 'green-house'],
          show: '(natural) green(-)house',
          explanation: '官方答案 (natural) green(-)house：Key 中 natural 为可选词，greenhouse 连写或加连字符均可。',
        },
        {
          q: "Andy's group were invited to the ____ for the tea tasting session.",
          answer: ['gallery'],
          show: 'gallery',
          explanation: '官方答案 gallery：他们被邀请到该处参加品茶环节。',
        },
        {
          q: 'Andy was surprised that, as well as the leaves, the tea pickers also picked the ____ of the plants.',
          answer: ['buds', 'bud'],
          show: 'bud(s)',
          explanation: '官方答案 bud(s)：Key 给出单复数两种形式。',
        },
        {
          q: 'On the elephant ride, Andy was able to see the ____ in the distance.',
          answer: ['mountains'],
          show: 'mountains',
          explanation: '官方答案 mountains：骑大象时他远望到了群山。',
        },
        {
          q: 'At the tea party, the ____ particularly impressed Andy.',
          answer: ['sandwiches'],
          show: 'sandwiches',
          explanation: '官方答案 sandwiches：茶会上三明治给他留下特别深的印象。',
        },
        {
          q: 'When going over a ____ , Andy nearly fell off his motorbike.',
          answer: ['stream'],
          show: 'stream',
          explanation: '官方答案 stream：骑摩托过溪流时他差点摔下来。',
        },
        {
          q: 'In the market, Andy was very surprised to see the ____ on sale.',
          answer: ['winter jackets'],
          show: 'winter jackets',
          explanation: '官方答案 winter jackets：市场上竟有冬季夹克出售，让他非常惊讶。',
        },
        {
          q: 'Andy was pleased with the price he paid for the ____ for his sister.',
          answer: ['nose ring', 'nose-ring'],
          show: 'nose(-)ring',
          explanation: '官方答案 nose(-)ring：Key 给出分写与加连字符两种形式。',
        },
        {
          q: "The ____ were Andy's favourite vegetables out of all those on display at the market.",
          answer: ['carrots'],
          show: 'carrots',
          explanation: '官方答案 carrots：胡萝卜是他在市场上最爱的蔬菜。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about work they did in shops. For questions 19–23, choose from the options (A–H) what each person says about their experience. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t4-p3.mp3',
      options: [
        { label: 'A', text: "My confidence was sometimes affected by customers' attitudes." },
        { label: 'B', text: 'I was pleased to discover that I had a good way with customers.' },
        { label: 'C', text: 'It made me appreciate the people I worked with.' },
        { label: 'D', text: "The training I received didn't equip me to do my job well." },
        { label: 'E', text: 'Customers were satisfied when they got a bargain.' },
        { label: 'F', text: "I wasn't happy with some of the products in the shop." },
        { label: 'G', text: 'It was motivating to sell more than the other assistants.' },
        { label: 'H', text: 'It exhausted me both physically and mentally.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: '官方答案 C：依据录音内容，这段经历让这位说话者更珍惜共事的同事。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，这份工作让这位说话者身心俱疲。' },
        { speaker: 'Speaker 3', answer: 'B', explanation: '官方答案 B：依据录音内容，这位说话者发现自己很会与顾客打交道。' },
        { speaker: 'Speaker 4', answer: 'F', explanation: '官方答案 F：依据录音内容，这位说话者对店里的部分商品不满意。' },
        { speaker: 'Speaker 5', answer: 'D', explanation: '官方答案 D：依据录音内容，这位说话者所受的培训不足以胜任工作。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with Marvin Benby, a beekeeper who keeps his bees in hives on a city rooftop. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t4-p4.mp3',
      items: [
        {
          q: 'What made Marvin get into beekeeping?',
          opts: [
            'He was persuaded to try it by a friend.',
            'A friend offered to teach him about it.',
            'He wanted to prove a friend wrong.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他想证明朋友的话是错的。',
        },
        {
          q: 'Marvin thinks the best part about keeping bees is',
          opts: [
            'helping to increase the bee population.',
            'the excitement of checking his beehives.',
            'having access to so much honey.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，检查蜂箱时的兴奋感是他最大的乐趣。',
        },
        {
          q: 'One of the difficulties for Marvin of city beekeeping is',
          opts: [
            'taking it personally when things go wrong.',
            'ensuring the bees get to a variety of flowers.',
            'getting hold of the most suitable equipment.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，出问题时他会往心里去。',
        },
        {
          q: 'Marvin says that one of his neighbours',
          opts: [
            'complained about being stung by a bee.',
            'insisted that Marvin moved his beehives.',
            'had concerns due to an allergy to bees.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，一位邻居因对蜜蜂过敏而担忧。',
        },
        {
          q: 'When Marvin set up his first beehive',
          opts: [
            'he became confused about what to do.',
            'he made some potentially dangerous mistakes.',
            'his bees became nervous and stressed.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他犯了一些可能有危险的错误。',
        },
        {
          q: 'What does Marvin say about selling bee-related products?',
          opts: [
            'He has started to make a profit.',
            'Local people are starting to buy them.',
            'It cost him a lot to get started.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，起步阶段花了他很多钱。',
        },
        {
          q: 'How does Marvin feel about the next few months?',
          opts: [
            'He has a mixture of contrasting feelings.',
            'He hopes to enjoy a more relaxed period.',
            'He is confident that he can manage.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他心情复杂、百感交集。',
        },
      ],
    },
  },
}

// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 22–27（PDF 23–28），答案核对自 Test 1 answer key（Listening 区在书 110 / PDF 111）
// 音频：/audio/fce/std4/std4-t1-p1.mp3 ~ std4-t1-p4.mp3（整 Part 一条）
// 注：书 24 页 Part 2 印刷小标题为 "Volunteering in the Ecuadorian Cloud Forest"（数据结构无对应字段，记录于此备查）。
// 注：Key 中 Part 2 为流式排版，第二行行首的 "Garden" 为第 11 题答案 "Medicine Garden" 的换行续词（第 1 行已容纳 9/10/11 三项），
//     故 Q9 记为 International Conservation、Q11 记为 Medicine Garden。

const STD4_L1 = {
  meta: {
    id: 'fce-standard-4-test1-listening',
    title: 'FCE 标准版真题 4 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 22–27',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 1 answer key，书110（PDF111）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking about learning to play the piano.',
          q: 'How does she feel about it?',
          opts: [
            'determined not to give up',
            'disappointed at her lack of progress',
            'embarrassed that she rarely practises',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear a woman telling a friend about having a celebration dinner.',
          q: 'How does the woman feel about it?',
          opts: [
            'proud of the meal that she prepared',
            'pleased that everyone enjoyed the evening',
            'relieved that there was enough to eat',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: 'You hear a man telling a friend about a visit to a museum.',
          q: 'What does he say about the visit?',
          opts: [
            'It inspired him to take up a hobby.',
            "It was more interesting than he'd expected.",
            'It would have been more enjoyable on another day.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear two media students talking about a TV advert they have seen.',
          q: 'What do they agree about the advert?',
          opts: [
            'It was cleverly made.',
            'It was harmless fun.',
            'It was aimed at a particular age group.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear two people talking about a work colleague called Judy.',
          q: 'What is the man doing when he speaks?',
          opts: [
            "praising Judy's enthusiasm",
            "questioning Judy's attention to detail",
            'expressing sympathy for Judy',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario: 'You hear two friends talking about a local project to start a community garden.',
          q: 'What does the man think about the project?',
          opts: [
            'It seems badly organised.',
            "It's probably over-ambitious.",
            'It risks being too costly.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: "You hear two friends discussing watching films based on books.",
          q: "The woman enjoys watching films based on books she's read because",
          opts: [
            'the book brings an added level of understanding to the film.',
            'it is interesting to see another interpretation of the story.',
            'she likes to spot where the film differs from the book.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear a man telling a friend about a new sports centre.',
          q: 'For which sport is it optional to join a membership scheme?',
          opts: ['swimming', 'gym', 'athletics'],
          answer: 2,
          explanation: '官方答案为 C。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a student called Petra Dean talking about her recent work experience as a volunteer in the Cloud Forest in Ecuador in South America. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t1-p2.mp3',
      items: [
        {
          q: 'Petra is currently studying ____ at university.',
          answer: ['International Conservation'],
          show: 'International Conservation',
          explanation: '官方答案 International Conservation：她在大学学习的专业。',
        },
        {
          q: 'Petra was surprised that she had to travel by ____ for the last stage of her journey to the Cloud Forest.',
          answer: ['donkey'],
          show: 'donkey',
          explanation: '官方答案 donkey：旅程最后一段她需骑驴前行。',
        },
        {
          q: 'Working in what was known as the ____ gave Petra particular satisfaction.',
          answer: ['Medicine Garden'],
          show: 'Medicine Garden',
          explanation: '官方答案 Medicine Garden：在被称为 "Medicine Garden" 的地方工作让她特别满足。',
        },
        {
          q: 'Petra was impressed by the ____ she saw on a daily basis.',
          answer: ['storms'],
          show: 'storms',
          explanation: '官方答案 storms：她每天见到的暴风雨令她印象深刻。',
        },
        {
          q: "Petra didn't enjoy trying to control the ____ when taking the milk down the mountain.",
          answer: ['bicycle', 'bike'],
          show: 'bicycle / bike',
          explanation: '官方答案 bicycle/bike：Key 给出两种写法，驮奶下山时难以控制自行车。',
        },
        {
          q: 'As part of the forest programme, Petra had to check the ____ of the trees.',
          answer: ['growth'],
          show: 'growth',
          explanation: '官方答案 growth：她需检查树木的生长情况。',
        },
        {
          q: 'One survival skill that Petra learnt was how to make ____ in the trees.',
          answer: ['shelters'],
          show: 'shelters',
          explanation: '官方答案 shelters：她学会在树上搭建庇护所。',
        },
        {
          q: "Visiting ____ that are now in a state of ruin was Petra's most memorable free time activity.",
          answer: [
            'villages',
            'the villages',
            'ancient villages',
            'old villages',
            'the ancient villages',
            'the old villages',
          ],
          show: '(the) (ancient/old) villages',
          explanation:
            '官方答案 (the) (ancient/old) villages：the 与 ancient/old 均为可选项，按 Key 展开为 6 种组合。',
        },
        {
          q: "In the reserve, Petra's favourite place to spend the evening was the ____",
          answer: ['terrace'],
          show: 'terrace',
          explanation: '官方答案 terrace：她最喜欢在露台上度过傍晚。',
        },
        {
          q: 'Petra regretted not packing sufficient ____ in her luggage.',
          answer: ['suncream', 'sun-cream'],
          show: 'sun(-)cream',
          explanation: '官方答案 sun(-)cream：Key 中连字符为可选，两种写法均算对。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people talk about their jobs on a cruise ship. For questions 19–23, choose from the list (A–H) what each speaker says about working on a cruise ship. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t1-p3.mp3',
      options: [
        { label: 'A', text: 'The staff can choose which cruise to go on.' },
        { label: 'B', text: 'The staff tend to be young.' },
        { label: 'C', text: 'The jobs are well paid.' },
        { label: 'D', text: 'The staff can continue their education on board.' },
        { label: 'E', text: 'The promotion prospects are good.' },
        { label: 'F', text: 'The staff accommodation is of a high standard.' },
        { label: 'G', text: 'The lifestyle is glamorous.' },
        { label: 'H', text: 'The work is suitable for couples.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: '官方答案 E。' },
        { speaker: 'Speaker 2', answer: 'F', explanation: '官方答案 F。' },
        { speaker: 'Speaker 3', answer: 'B', explanation: '官方答案 B。' },
        { speaker: 'Speaker 4', answer: 'H', explanation: '官方答案 H。' },
        { speaker: 'Speaker 5', answer: 'D', explanation: '官方答案 D。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a man called Guy Riordan, who works as a stuntman performing dangerous scenes in movies. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t1-p4.mp3',
      items: [
        {
          q: 'What does Guy say about the first time he worked with a team of other stuntmen?',
          opts: [
            'He was very unsure of his talents.',
            'He was uncomfortable about putting his trust in others.',
            'He was surprised at the risks some people took.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          q: 'For Guy, the most difficult part of being a stuntman is',
          opts: [
            'competing against others for roles.',
            'avoiding injury.',
            'trying to improve constantly.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: 'What does Guy say was hard about performing in the movie Raw Stuff?',
          opts: [
            'falling in the right place',
            'having to carry heavy loads',
            'getting to the top of a mountain',
          ],
          answer: 0,
          explanation: '官方答案为 A。（Raw Stuff 为书内斜体电影名）',
        },
        {
          q: 'When asked about being a stunt double for the actor Marty Walker, Guy says',
          opts: [
            "he admires Marty's ability to change his body shape for films.",
            'he feels pleased when Marty plays the parts of action heroes.',
            "he respects Marty's willingness to act in some dangerous scenes.",
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'What was satisfying for Guy about performing in the film Light at Dawn?',
          opts: [
            'getting the chance to have a speaking role',
            'working with a large film crew',
            'achieving what the director wanted',
          ],
          answer: 2,
          explanation: '官方答案为 C。（Light at Dawn 为书内斜体电影名）',
        },
        {
          q: 'What has changed for Guy about the movie industry recently?',
          opts: [
            'People working in it are more serious than before.',
            'He has to do more work for the same money.',
            'Stunt performers are less frequently required.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'Guy advises anyone interested in becoming a movie stunt performer',
          opts: [
            'to develop as wide a range of stunt skills as possible.',
            'to find jobs by using a good agent.',
            'to be prepared to do other types of work as well.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
      ],
    },
  },
}

// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 42–47（PDF 43–48），答案核对自 Test 2 answer key（Listening 区在书 122 / PDF 123）
// 音频：/audio/fce/std4/std4-t2-p1.mp3 ~ std4-t2-p4.mp3（整 Part 一条）
// 注：书 44 页 Part 2 印刷小标题为 "The Albuquerque Balloon Festival"（数据结构无对应字段，记录于此备查）。
// 注：Q11 与 Q14 的空格在原书中带单引号（'____'），照录。

const STD4_L2 = {
  meta: {
    id: 'fce-standard-4-test2-listening',
    title: 'FCE 标准版真题 4 · Test 2',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 42–47',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 2 answer key，书122（PDF123）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a TV presenter talking about making travel documentaries for TV.',
          q: 'What does he appreciate most about his job?',
          opts: [
            'It allows him plenty of free time.',
            "It doesn't feel like work.",
            'It provides him with a good salary.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: 'You hear an interview with a woman talking about rowing across the Atlantic Ocean.',
          q: 'How did she and her team feel before they set out?',
          opts: [
            'concerned that their age would be a problem',
            'worried about the weather conditions at sea',
            'unsure that they would complete the journey',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario: 'You hear two colleagues talking about what they did at the weekend.',
          q: 'How did the woman spend her time?',
          opts: [
            'applying for a new position',
            'catching up on her work',
            'improving her job prospects',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario: 'You hear an interview with a musician who is talking about being famous.',
          q: 'What does he enjoy?',
          opts: [
            'being recognised by the public',
            'performing in front of an audience',
            "pretending to be someone he's not",
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: 'You hear part of an interview with a writer in which he talks about the novel he has written.',
          q: 'What does he say about the novel?',
          opts: [
            'It would make a good film.',
            'It is a different type of book for him.',
            'It took him a long time to write.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear a hotel owner talking about her hotel.',
          q: 'What does she say about the customer service there?',
          opts: [
            'There is still a lot of room for improvement.',
            'She researched the subject thoroughly in advance.',
            'It is typical of the standards she is trying to achieve.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario: 'You hear two friends talking about a housing development scheme in their town.',
          q: 'The man says that the scheme fails to',
          opts: [
            'satisfy current housing needs.',
            'contribute to the local area.',
            'use all the space available.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario:
            'You hear two people on a discussion programme talking about the way employees dress for work.',
          q: 'What do they agree about?',
          opts: [
            "A company's image suffers if informal clothes are worn.",
            'Employers are less concerned about appearance than previously.',
            'Employees produce better work if they feel more relaxed.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Mark Dawson talking about his visit to the Albuquerque Balloon Festival in New Mexico, USA. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t2-p2.mp3',
      items: [
        {
          q: 'Mark says ____ was the month when the Albuquerque Balloon Festival was first held.',
          answer: ['February'],
          show: 'February',
          explanation: '官方答案 February：首届热气球节举办的月份。',
        },
        {
          q: 'Mark found out that the organiser had first used a balloon to promote his ____ firm.',
          answer: ['transport'],
          show: 'transport',
          explanation: '官方答案 transport：组织者最初用气球宣传自己的运输公司。',
        },
        {
          q: "Mark liked the theme of the event this year, which was called '____'.",
          answer: ['Dreams'],
          show: 'Dreams',
          explanation: "官方答案 Dreams：今年活动主题名为 'Dreams'。",
        },
        {
          q: 'Mark says the balloons that have unusual ____ are the most popular with visitors.',
          answer: ['shapes'],
          show: 'shapes',
          explanation: '官方答案 shapes：形状奇特的热气球最受游客欢迎。',
        },
        {
          q: 'When Mark saw the Flight of Nations balloons, he particularly enjoyed the ____ of different nationalities.',
          answer: ['music'],
          show: 'music',
          explanation: '官方答案 music：他特别喜欢各国风格的音乐。',
        },
        {
          q: "Mark learned that pilots try to find the 'Albuquerque ____' so they can land in the same place they took off.",
          answer: ['Box'],
          show: 'Box',
          explanation: "官方答案 Box：飞行员会寻找 'Albuquerque Box' 气流以便原地降落。",
        },
        {
          q: 'Mark says that a balloon is attached by ____ to the basket.',
          answer: ['ropes'],
          show: 'ropes',
          explanation: '官方答案 ropes：气球由绳索系在吊篮上。',
        },
        {
          q: 'Mark was surprised to find out that a pilot sometimes needs to get rid of ____ in order to maintain height.',
          answer: ['water'],
          show: 'water',
          explanation: '官方答案 water：飞行员有时需抛掉水来保持高度。',
        },
        {
          q: 'Mark says that in the bigger balloons, there is a ____ to protect passengers from the rain.',
          answer: ['curtain', 'rain curtain'],
          show: '(rain) curtain',
          explanation: '官方答案 (rain) curtain：Key 中 rain 为可选词，两种写法均算对。',
        },
        {
          q: 'On the second day of the festival, Mark saw the balloons take off at ____.',
          answer: ['sunrise', 'dawn'],
          show: 'sunrise/dawn',
          explanation: '官方答案 sunrise/dawn：Key 给出两种写法，均算对。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which students are talking about starting at university. For questions 19–23, choose from the list (A–H) what each speaker says about how they felt. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t2-p3.mp3',
      options: [
        { label: 'A', text: 'I missed my school friends.' },
        { label: 'B', text: 'I was anxious that I might get lost.' },
        { label: 'C', text: 'I was excited about meeting new people.' },
        { label: 'D', text: 'I felt relieved that I understood the lectures.' },
        { label: 'E', text: "I worried that I'd find the work too difficult." },
        { label: 'F', text: "I felt confident that I'd chosen the right course." },
        { label: 'G', text: 'I was disappointed by the number of people on my course.' },
        { label: 'H', text: 'I was impatient to start my course.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'F', explanation: '官方答案 F。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H。' },
        { speaker: 'Speaker 3', answer: 'E', explanation: '官方答案 E。' },
        { speaker: 'Speaker 4', answer: 'A', explanation: '官方答案 A。' },
        { speaker: 'Speaker 5', answer: 'G', explanation: '官方答案 G。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear part of an interview with a marine biologist called Ed Shapiro, who is talking about a diving project in the Pitcairn Islands in the South Pacific. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t2-p4.mp3',
      items: [
        {
          q: 'Ed says that the area his team are currently working in has',
          opts: [
            'made him feel optimistic about the future.',
            'escaped the effects of climate change so far.',
            'exhibited a more limited range of marine life than expected.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          q: "What happened on Ed's most recent dive?",
          opts: [
            'He gained further understanding of the reef ecosystem.',
            'He carried out some different research activities from his colleagues.',
            'He spent longer than he normally does under water.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'What does Ed say about using cameras to photograph marine life?',
          opts: [
            'He is constantly amazed by what photos can reveal.',
            'He thinks underwater equipment could be improved.',
            'He believes images are a good way to provide information.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: 'What frightening experience did Ed have recently?',
          opts: [
            'He went diving in dangerous seas.',
            'He lost one of his safety instruments.',
            'He came very close to some sharks.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'What does Ed think about his career as a marine biologist?',
          opts: [
            'He regrets not taking more risks.',
            "He's glad that he followed the traditional path.",
            'He wonders if he made the decision too early in life.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          q: 'How do the expedition members avoid homesickness?',
          opts: [
            'by having regular contact with friends and family',
            'by planning group activities for quiet times',
            'by keeping themselves occupied',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: 'Ed says that he is happiest in his work when',
          opts: [
            'he spends time in the deepest areas of the sea.',
            'he discovers previously unknown species.',
            "he feels his team's reports are getting the publicity they deserve.",
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
      ],
    },
  },
}

// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 62–67（PDF 63–68），答案核对自 Test 3 answer key（Listening 区在书 134 / PDF 135）
// 音频：/audio/fce/std4/std4-t3-p1.mp3 ~ std4-t3-p4.mp3（整 Part 一条）
// 注：书 64 页 Part 2 印刷小标题为 "Total solar eclipses"（数据结构无对应字段，记录于此备查）。

const STD4_L3 = {
  meta: {
    id: 'fce-standard-4-test3-listening',
    title: 'FCE 标准版真题 4 · Test 3',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 62–67',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 3 answer key，书134（PDF135）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking to a friend about a bicycle shop.',
          q: 'What is he doing?',
          opts: [
            'recommending the shop to her',
            'explaining how she can get to the shop',
            'suggesting she should have her bike repaired',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear a TV producer talking about reality programmes on TV.',
          q: 'What is the main point she makes about popular reality shows?',
          opts: [
            'The production standards are very high.',
            'They deserve the praise they get.',
            'Their popularity is short-lived.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario: 'You hear two writers talking about writing dialogue.',
          q: 'What do they agree about?',
          opts: [
            'Most writers reproduce dialogue they have overheard.',
            'Less experienced writers should work hard to improve their dialogue.',
            'Good writers have a natural ability to write dialogue.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario: "You hear a woman telling a friend about a long train journey she's been on.",
          q: 'Why did the woman enjoy it?',
          opts: [
            'She had some interesting conversations.',
            'She saw some beautiful scenery.',
            'She had a comfortable seat.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: "You hear a man telling a friend about a holiday he's recently been on.",
          q: "He wishes that he'd",
          opts: [
            'taken more photographs.',
            'booked his accommodation online.',
            'got hold of a good guidebook.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear a woman talking on the radio about the arts.',
          q: 'What is she talking about?',
          opts: [
            'a book she knows well',
            'a TV programme she enjoyed watching',
            'a film she has seen many times',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear two students discussing their college.',
          q: 'What do they both like about it?',
          opts: [
            'the attitude of the teachers',
            'the state of the decoration',
            'the quality of the sports facilities',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario:
            'You hear a child psychologist talking about the impact of noise on very young children.',
          q: "In his view, it is the parents' responsibility to",
          opts: [
            'speak more clearly when the environment is noisy.',
            'appreciate the particular problems noise causes.',
            'ensure the amount of noise is kept constant.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Jane Hughes talking about total solar eclipses, which happen when the Moon comes between the Sun and the Earth and blocks out the light from the Sun. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t3-p2.mp3',
      items: [
        {
          q: 'Jane says she was encouraged to go and see a total solar eclipse by an interesting ____ she saw.',
          answer: ['exhibition'],
          show: 'exhibition',
          explanation: '官方答案 exhibition：她因看到的一场有趣展览而去观日全食。',
        },
        {
          q: 'Jane hired a ____ to travel to the best location to watch her first eclipse.',
          answer: ['camper', 'camping van'],
          show: 'camper/camping van',
          explanation: '官方答案 camper/camping van：Key 给出两种写法，均算对。',
        },
        {
          q: 'The eclipse Jane saw took place during the early ____.',
          answer: ['morning'],
          show: 'morning',
          explanation: '官方答案 morning：日食发生在清晨。',
        },
        {
          q: 'Jane says watching the eclipse was as exciting for her as doing a ____.',
          answer: ['parachute jump'],
          show: 'parachute jump',
          explanation: '官方答案 parachute jump：看日食的兴奋感如同跳伞。',
        },
        {
          q: 'Jane says the effect at the beginning and end of an eclipse resembles a ____.',
          answer: ['diamond ring'],
          show: 'diamond ring',
          explanation: '官方答案 diamond ring：食始/食终的效果似钻戒（钻石环）。',
        },
        {
          q: 'Jane had to go to a ____ to see her second eclipse.',
          answer: ['small island'],
          show: 'small island',
          explanation: '官方答案 small island：第二次观日食她去了一座小岛。',
        },
        {
          q: "A lack of ____ nearly caused Jane's boat journey to be cancelled.",
          answer: ['fuel', 'gas', 'petrol'],
          show: 'fuel/gas/petrol',
          explanation: '官方答案 fuel/gas/petrol：Key 给出三种写法，均算对。',
        },
        {
          q: 'Jane says she was pleased she had a ____ to hang over herself at night.',
          answer: ['mosquito net'],
          show: 'mosquito net',
          explanation: '官方答案 mosquito net：夜里她庆幸带了蚊帐。',
        },
        {
          q: "Jane's ____ about watching eclipses can be found online.",
          answer: ['poem'],
          show: 'poem',
          explanation: '官方答案 poem：她写的关于观日食的诗可在网上找到。',
        },
        {
          q: 'Jane is going to get a new ____ before she watches her next eclipse.',
          answer: ['tent'],
          show: 'tent',
          explanation: '官方答案 tent：下次观日食前她打算买顶新帐篷。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about walking to work. For questions 19–23, choose from the list (A–H) how each speaker says they benefit from walking to work. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t3-p3.mp3',
      options: [
        { label: 'A', text: 'I have more energy for work.' },
        { label: 'B', text: 'I now appreciate the good things in my life.' },
        { label: 'C', text: 'I am able to adapt my route to how I am feeling.' },
        { label: 'D', text: 'I get to and from work more quickly.' },
        { label: 'E', text: 'It has motivated me to have a better diet.' },
        { label: 'F', text: 'I have been able to appreciate the history of the area better.' },
        { label: 'G', text: "I'm sharing an experience with others." },
        { label: 'H', text: "I've found it a good alternative to other types of exercise." },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'G', explanation: '官方答案 G。' },
        { speaker: 'Speaker 2', answer: 'C', explanation: '官方答案 C。' },
        { speaker: 'Speaker 3', answer: 'B', explanation: '官方答案 B。' },
        { speaker: 'Speaker 4', answer: 'H', explanation: '官方答案 H。' },
        { speaker: 'Speaker 5', answer: 'A', explanation: '官方答案 A。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Sarah Featherstone, who runs a website called Coffee Lovers. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t3-p4.mp3',
      items: [
        {
          q: 'Sarah says she started her website to try to',
          opts: [
            'help a particular type of coffee shop.',
            'inform tourists with a limited budget.',
            'change the attitude of certain big companies.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'What does Sarah say about changes to the website?',
          opts: [
            'Reviews from users are the main feature.',
            'Interested clients have to apply to be included.',
            'The basic design layout has been reorganised.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: 'The most likely reason for excluding a coffee shop from the website is',
          opts: [
            'an unattractive building.',
            'poor customer service.',
            'the taste of the product.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          q: 'What does Sarah praise the Old Mill House coffee shop for?',
          opts: [
            'the style of their notices to customers',
            'the attractive interior',
            'the entertainment they provide',
          ],
          answer: 0,
          explanation: '官方答案为 A。（Old Mill House 为书内斜体店名）',
        },
        {
          q: 'What does Sarah think about the food served in the Pink Peacock?',
          opts: [
            "It's the best takeaway food in the neighbourhood.",
            "It's suitable for those with special dietary needs.",
            "It's good value for money.",
          ],
          answer: 1,
          explanation: '官方答案为 B。（Pink Peacock 为书内斜体店名）',
        },
        {
          q: 'When setting up her own business, Sarah was very aware of the need',
          opts: [
            'to try out a completely new field.',
            'to avoid taking financial risks.',
            'not to repeat previous mistakes.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          q: 'When asked about plans for her website, Sarah says her immediate priority is',
          opts: [
            'to introduce a star system.',
            'to experiment with an international section.',
            'to develop a new app.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
      ],
    },
  },
}

// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 82–87（PDF 83–88），答案核对自 Test 4 answer key（Listening 区在书 146 / PDF 147）
// 音频：/audio/fce/std4/std4-t4-p1.mp3 ~ std4-t4-p4.mp3（整 Part 一条）
// 注：书 84 页 Part 2 印刷小标题为 "Helping to organise a music festival"（数据结构无对应字段，记录于此备查）。
// 注：Q12 Key 写作 "35,000/thirty-five thousand"，照录两种写法（未自行增加无逗号的 35000 变体）。

const STD4_L4 = {
  meta: {
    id: 'fce-standard-4-test4-listening',
    title: 'FCE 标准版真题 4 · Test 4',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 82–87',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 4 answer key，书146（PDF147）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t4-p1.mp3',
      items: [
        {
          scenario: 'You hear an actress talking about her new part in a play.',
          q: 'Why did she choose to accept it?',
          opts: [
            'She wanted to work with the main male actor.',
            'She was attracted by the strong female role.',
            'She wanted a change from her TV work.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: 'You hear two friends talking about a restaurant.',
          q: 'What do they agree about it?',
          opts: [
            'The service could be improved.',
            'The food looked unappealing.',
            'The interior was badly designed.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear two students talking about a visit to a museum.',
          q: 'What does the man say about their guide?',
          opts: [
            'He knew a lot about the exhibits.',
            'He gave clear answers to questions.',
            'He made a difficult subject interesting.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear a talk given by a child psychologist.',
          q: 'The purpose of her talk is to',
          opts: [
            'warn of the potential dangers of outdoor play.',
            'highlight the findings of some recent health research.',
            'persuade people to give their children more freedom.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario:
            'You hear part of a radio phone-in discussion about a proposal to redevelop one part of a city.',
          q: 'Why is the man calling the programme?',
          opts: [
            'to express concern about how the project may affect local residents',
            'to question the motivation behind the plan',
            'to point out the likely environmental impact of any changes',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario:
            'You hear two people talking on the radio about an exhibition of work by a wildlife photographer.',
          q: 'What do they both say about the photos?',
          opts: [
            'The lack of variety was disappointing.',
            'The technique used in them was unusual.',
            "The photographer's aims were unclear.",
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: 'You hear a man telling a colleague about a workshop he will attend.',
          q: 'What does the man have to do before the workshop?',
          opts: [
            'listen to some online material',
            'read some written information',
            'think of some questions to bring up',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear two friends talking about the football team they support.',
          q: 'How does the man feel about the manager of the team?',
          opts: [
            'concerned about his ability to motivate the players',
            'disappointed with the style of play he encourages',
            'worried about his attitude towards journalists',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Victor Medway talking to some students about his job, helping to organise a music festival. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t4-p2.mp3',
      items: [
        {
          q: 'Victor worked as a ____ for radio programmes before becoming a festival organiser.',
          answer: ['research assistant', 'researcher'],
          show: 'research assistant/researcher',
          explanation: '官方答案 research assistant/researcher：Key 给出两种写法，均算对。',
        },
        {
          q: "Victor's work as a volunteer involved ____ at a music festival.",
          answer: ['cleaning', 'cleaning up'],
          show: 'cleaning (up)',
          explanation: '官方答案 cleaning (up)：Key 中 up 为可选词，两种写法均算对。',
        },
        {
          q: "Victor recently booked a well-known group who play ____ music for this year's music festival.",
          answer: ['heavy metal'],
          show: 'heavy metal',
          explanation: '官方答案 heavy metal：今年音乐节请了演奏重金属音乐的知名乐队。',
        },
        {
          q: 'A maximum number of ____ people are allowed to attend the festival.',
          answer: ['35,000', 'thirty-five thousand'],
          show: '35,000/thirty-five thousand',
          explanation: '官方答案 35,000/thirty-five thousand：Key 给出数字与英文两种写法，均算对。',
        },
        {
          q: 'Victor says that criticising his festival for a lack of ____ is no longer fair.',
          answer: ['diversity'],
          show: 'diversity',
          explanation: '官方答案 diversity：再批评音乐节缺乏多样性已有失公平。',
        },
        {
          q: 'The festival will include ____ acts as a new feature this year.',
          answer: ['poetry', 'live poetry'],
          show: '(live) poetry',
          explanation: '官方答案 (live) poetry：Key 中 live 为可选词，两种写法均算对。',
        },
        {
          q: 'Victor attends other music festivals for the ____ they provide.',
          answer: ['inspiration'],
          show: 'inspiration',
          explanation: '官方答案 inspiration：他参加别的音乐节是为了获取灵感。',
        },
        {
          q: 'Victor welcomes the development of a ____ of festival organisers.',
          answer: ['network'],
          show: 'network',
          explanation: '官方答案 network：他乐见音乐节组织者网络的发展。',
        },
        {
          q: "Victor says he's surprised that musicians' ____ are sometimes difficult to work with.",
          answer: ['agents'],
          show: 'agents',
          explanation: '官方答案 agents：有时难以共事的是音乐人的经纪人。',
        },
        {
          q: 'Victor has worked hard to improve his ____ skills.',
          answer: ['admin', 'administration', 'administrative'],
          show: 'admin(istration)/administrative',
          explanation: '官方答案 admin(istration)/administrative：Key 展开为 admin、administration、administrative 三种写法。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about a cookery course they participated in. For questions 19–23, choose from the list (A–H) what each speaker liked best about the course. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t4-p3.mp3',
      options: [
        { label: 'A', text: 'watching a professional cook an unusual dish' },
        { label: 'B', text: 'using modern equipment' },
        { label: 'C', text: 'meeting different people' },
        { label: 'D', text: 'cooking with fresh ingredients' },
        { label: 'E', text: 'learning new cooking techniques' },
        { label: 'F', text: "trying other people's cooking" },
        { label: 'G', text: 'mastering new recipes' },
        { label: 'H', text: 'discovering how quick some dishes can be to cook' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: '官方答案 E。' },
        { speaker: 'Speaker 2', answer: 'C', explanation: '官方答案 C。' },
        { speaker: 'Speaker 3', answer: 'G', explanation: '官方答案 G。' },
        { speaker: 'Speaker 4', answer: 'D', explanation: '官方答案 D。' },
        { speaker: 'Speaker 5', answer: 'B', explanation: '官方答案 B。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with Terry Bankcroft, whose company Get Running organises overseas marathons, talking about his work. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t4-p4.mp3',
      items: [
        {
          q: 'Terry got involved in running because he was',
          opts: [
            'keen to change his lifestyle.',
            'interested in starting a new hobby.',
            'motivated to do so by another person.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: 'What does Terry say about his own running?',
          opts: [
            "It's a fundamental part of his life.",
            "It's less enjoyable than other sports.",
            'He now prefers to do shorter races.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'Terry thinks the most challenging aspect of organising a race is',
          opts: [
            'justifying the cost of the race fee to the runners.',
            'dealing with people in authority overseas.',
            'ensuring that preparations are completed on time.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'What is important to Terry when considering a location for a new race?',
          opts: [
            'how easily accessible it is',
            'how well he knows the area',
            'how visually appealing the landscape is',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: 'Terry says the volunteers who help out at his races',
          opts: [
            'are often new to running.',
            'get little recognition for the work they do.',
            'find helping at events rewarding.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: 'Terry explains that the race package tours for overseas participants',
          opts: [
            'cover the cost of air travel.',
            'are handled exclusively by local companies.',
            'include local accommodation.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: "What is Terry's advice to people who are racing for the first time?",
          opts: [
            'Try to get a good position early on in the race.',
            'Concentrate on running your own race.',
            'Take great care to avoid any injuries.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
      ],
    },
  },
}

export const fceStandardListeningTests = [STD1_L1, STD1_L2, STD1_L3, STD1_L4, STD2_L1, STD2_L2, STD2_L3, STD2_L4, STD3_L1, STD3_L2, STD3_L3, STD3_L4, STD4_L1, STD4_L2, STD4_L3, STD4_L4]
