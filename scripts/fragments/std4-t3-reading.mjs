// Source: Cambridge English First 4（标准版4）B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Test 3 Reading and Use of English: 书页 48–59（PDF 49–60），答案核对自 Test 3 Key（书 133 / PDF 134），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 行号标记 (line 61) 按原书内嵌在所标注行（"near the top of her profession – through doggedness"）行首。
// 注意：Part 6 副题（原书斜体导语 "Who doesn't want to be the best in the world?"）存于 passage 开头；
//       选项 G 分号后为小写 "it will send"、正文 "biscuits in the fastest time" 为小写 in，均经高倍裁剪复核。
// 注意：Part 7 文章标题 "Superfans"、副题 "Four women talk about the objects of their passion and dedication."
//       存于 passage；各节标题（如 "Katie on the Harry Potter books"）照录于 name 字段。
export default {
  meta: {
    id: 'fce-standard-4-test3-reading',
    title: 'FCE 标准版真题 4 · Test 3 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Reading and Use of English',
    pages: '书 48–59',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 3 Key（书 133 / PDF 134）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'Feedback forms\n\n' +
        'Often when we buy something or use a service, we are given a form (0).......... how satisfied we are with the product or the service. Many people feel that (1).......... such forms is a waste of time; they think that companies probably take no notice of what people put on the forms. This may be the (2).......... with some companies but with most nothing could be further from the (3).......... . Surveys are carefully analysed so that problems can be (4).......... . In fact, improvements made by companies often (5).......... because of what customers have written on these forms.\n\n' +
        'If you are given a form to complete, companies want you to do so in as much (6).......... as possible. They obviously like to receive (7).......... on their products but they also want customers to (8).......... any problems that they have found. If customers do not do this, companies may remain unaware of problems and, consequently, no improvements can be made.',
      items: [
        { q: 1, opts: ['putting down', 'writing up', 'filling in', 'drawing out'], answer: 2, explanation: 'filling in such forms "填写表格"，fill in a form 固定搭配。' },
        { q: 2, opts: ['case', 'position', 'condition', 'state'], answer: 0, explanation: 'This may be the case with some companies "有些公司可能确实如此"，the case with 固定表达。' },
        { q: 3, opts: ['experience', 'fact', 'truth', 'practice'], answer: 2, explanation: 'nothing could be further from the truth "再离谱不过了"，固定短语。' },
        { q: 4, opts: ['shown', 'distinguished', 'identified', 'marked'], answer: 2, explanation: 'problems can be identified "问题得以查明"，identify problems 搭配。' },
        { q: 5, opts: ['carry out', 'come about', 'take off', 'open up'], answer: 1, explanation: 'improvements often come about "改进常常产生"，come about 发生、形成。' },
        { q: 6, opts: ['detail', 'evidence', 'point', 'information'], answer: 0, explanation: 'in as much detail as possible "尽可能详细"，in detail 固定搭配。' },
        { q: 7, opts: ['approval', 'tributes', 'admiration', 'compliments'], answer: 3, explanation: 'receive compliments on their products "收到对产品的称赞"，compliments on 固定搭配。' },
        { q: 8, opts: ['refer', 'mention', 'notify', 'advise'], answer: 1, explanation: 'mention any problems "提及任何问题"；mention 及物动词直接接宾语（refer 需 to，notify/advise 搭配对象是人）。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'Outdoor swimming\n\n' +
        'Ever (0).......... I was a young girl, I have been an enthusiastic outdoor swimmer. My favourite place to swim is the lido near my home in London – a giant pool with reflections in the sun like jewels. Being unheated, (9).......... can be uninviting to those (10).......... prefer warmer water, but that also means fewer crowds.\n\n' +
        'The swims I prefer are the ones on my own when I have the pool all to (11).......... . Then, I slip into the water and feel it surround me. I swim up and down the pool, thinking of nothing but counting strokes between breaths: \'One, two, three, four – breathe.\' Whole hours can slowly drift (12).......... , as my arms stretch out in (13).......... of me. I concentrate (14).......... the noise the bubbles make as I exhale under water. (15).......... there may be other swimmers around, I still feel alone and at peace, a sensation I don\'t get (16).......... else I know.',
      items: [
        { q: 9, answer: ['IT', 'THIS'], show: 'IT / THIS', explanation: 'Being unheated, it/this can be uninviting，指代前面的泳池；Key 给 it/this 两种。' },
        { q: 10, answer: ['WHO', 'THAT'], show: 'WHO / THAT', explanation: 'those who/that prefer warmer water，定语从句指人。' },
        { q: 11, answer: ['MYSELF'], show: 'MYSELF', explanation: 'have the pool all to myself "泳池全归我一人"，all to myself 固定表达。' },
        { q: 12, answer: ['BY', 'PAST', 'AWAY'], show: 'BY / PAST / AWAY', explanation: 'Whole hours can slowly drift by/past/away "几小时悄然流逝"，三种说法均可。' },
        { q: 13, answer: ['FRONT'], show: 'FRONT', explanation: 'in front of me "在我前方"，固定短语。' },
        { q: 14, answer: ['ON'], show: 'ON', explanation: 'concentrate on "专注于"，固定搭配。' },
        { q: 15, answer: ['ALTHOUGH', 'WHILE', 'WHILST'], show: 'ALTHOUGH / WHILE / WHILST', explanation: 'Although/While/Whilst there may be other swimmers around, I still feel alone，让步从句；Key 给三种。' },
        { q: 16, answer: ['ANYWHERE'], show: 'ANYWHERE', explanation: "a sensation I don't get anywhere else，'别处得不到的感觉'，否定语境用 anywhere。" },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'The leaning tower of Pisa, Italy\n\n' +
        'In 1173, (0) CONSTRUCTION work began on what was to become the \'Leaning Tower of Pisa\'. It was, though, never the (17)_____ of the builders that the tower should lean.\n\n' +
        'Pisa was a prosperous city and expensive marble was used to build the tower. After five years, it became (18)_____ that the tower was leaning because the soft soil was incapable of fully supporting the (19)_____ of the marble. Work was halted for almost a hundred years because of a series of wars. However, this long pause in the building work was (20)_____ for the tower as it gave the (21)_____ time to settle. If work had continued, the tower would almost certainly have collapsed.\n\n' +
        'There were later attempts to (22)_____ the tower, but these were not always popular with the local inhabitants because the tower had become a tourist attraction.\n\n' +
        'In 2008, following major (23)_____ work on the tower, engineers (24)_____ announced that the tower would remain stable for at least another two hundred years.',
      items: [
        { q: 17, given: 'INTEND', answer: ['INTENTION', 'INTENTIONS'], show: 'INTENTION(S)', explanation: 'intend → intention(s) 意图；never the intention(s) of the builders，需名词，Key 给两种形式。' },
        { q: 18, given: 'EVIDENCE', answer: ['EVIDENT'], show: 'EVIDENT', explanation: 'evidence → evident 明显的；it became evident that...，需形容词作表语。' },
        { q: 19, given: 'WEIGH', answer: ['WEIGHT'], show: 'WEIGHT', explanation: 'weigh → weight 重量；supporting the weight of the marble，需名词。' },
        { q: 20, given: 'FORTUNE', answer: ['FORTUNATE'], show: 'FORTUNATE', explanation: 'fortune → fortunate 幸运的；was fortunate for the tower，需形容词。' },
        { q: 21, given: 'FOUND', answer: ['FOUNDATION', 'FOUNDATIONS'], show: 'FOUNDATION(S)', explanation: 'found → foundation(s) 地基；gave the foundation(s) time to settle，需名词，Key 给两种形式。' },
        { q: 22, given: 'STRAIGHT', answer: ['STRAIGHTEN'], show: 'STRAIGHTEN', explanation: 'straight → straighten 扶正、弄直；attempts to straighten the tower，不定式后需动词。' },
        { q: 23, given: 'RESTORE', answer: ['RESTORATION'], show: 'RESTORATION', explanation: 'restore → restoration 修复；following major restoration work，需名词。' },
        { q: 24, given: 'CONFIDENCE', answer: ['CONFIDENTLY'], show: 'CONFIDENTLY', explanation: 'confidence → confidently 有把握地；修饰 announced 需副词。' },
      ],
    },
    4: {
      title: 'Part 4 · 句子转换',
      instruction:
        'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0). Write only the missing words IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'key_word_transformation',
      items: [
        {
          q: 25,
          stem: "My sister said to me, 'Please ring me tomorrow morning.'",
          key: 'GIVE',
          answer: ['to give her a ring', 'to give her a call'],
          show: 'to give her a ring / call',
          explanation: 'Please ring me → asked me to give her a ring/call，祈使句改不定式；ring sb = give sb a ring/call；Key 印 to GIVE her | a ring/call。',
        },
        {
          q: 26,
          stem: "Richard invited Julie to the party because he didn't want to risk offending her.",
          key: 'MIGHT',
          answer: ['might be offended if', 'might get offended if', 'might feel offended if', 'might take offence if'],
          show: 'might be/get/feel offended / take offence if',
          explanation: "didn't want to risk offending her → felt Julie might be/get/feel offended / take offence if he didn't ask her；Key 印 MIGHT be/get/feel offended / take offence | if。",
        },
        {
          q: 27,
          stem: 'They let me watch television only after I had finished my homework.',
          key: 'ALLOWED',
          answer: ['was not allowed to', "wasn't allowed to"],
          show: "was not / wasn't allowed to",
          explanation: 'only after → not...until 结构；I was not/wasn\'t allowed to watch television until...；Key 印 was not/wasn\'t ALLOWED | to。',
        },
        {
          q: 28,
          stem: 'The two girls succeeded in winning the quiz by themselves.',
          key: 'MANAGED',
          answer: ['managed to win on their'],
          show: 'managed to win on their',
          explanation: 'succeeded in winning → managed to win；by themselves → on their own；Key 印 MANAGED to win | on their。',
        },
        {
          q: 29,
          stem: "I'm sorry that I didn't spend longer with my aunt when I called on her last week.",
          key: 'TIME',
          answer: ['had more time', 'spent more time'],
          show: 'had / spent more time',
          explanation: "I'm sorry that I didn't spend longer → I would like to have had/spent more time，wish + 过去完成表遗憾的等价表达；Key 印 had/spent | more TIME。",
        },
        {
          q: 30,
          stem: 'The number of students at the college is going to rise next year.',
          key: 'INCREASE',
          answer: ['will be an increase in', "'ll be an increase in"],
          show: "will / 'll be an increase in",
          explanation: 'is going to rise → there will/\'ll be an increase in the number of...，there be 句型表变化；Key 印 will/\'ll be | an INCREASE in。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read a magazine article about a voiceover artist. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        'Shirley Ford, voiceover artist\n\n' +
        'Clive Gartside meets the voiceover artist Shirley Ford, whose voice is familiar from advertisements, cartoons and other recordings.\n\n' +
        "During our first, hour-long conversation, Shirley Ford speaks to me in the voice of a cheeky 8-year-old boy, the boy's tired mother, an amusingly elderly Scottish woman and a very fast-talking alien. Her voices – I struggled to keep count of them all – are recognisable to viewers of children's TV and cartoons, and to people who have seen computerised employee programmes about health and safety. 'I've just done a voiceover about back injuries,' she says, 'so I had to learn quickly how to pronounce loads of medical terms.'\n\n" +
        "Shirley talks about what it takes to do voiceovers. 'Lots of actors, some very highly regarded, reckon they can do funny voices and, actually, many of them probably can,' she says. 'There's more to it than that, though. You have to bring the script to life for an audience who can't see you. You wouldn't believe how many household names are desperate to do voiceover work. Thinking of the publicity, producers will invite them to auditions, but often they don't get offered parts because they're too used to acting with their whole bodies.'\n\n" +
        "After school, Shirley enrolled on a drama course with a standard acting career in mind. During the course, she had some occasional work singing jingles for TV adverts. 'One day,' she says, 'the man who ran the recording studio suggested I try out for the part of a rabbit in the soundtrack for a cartoon. It seemed ridiculous – I hadn't studied drama to play rabbits – but I tried it for a laugh and, amazingly, ended up getting a major part.' Shirley realised she could do voices and that voiceover work might be the way to go.\n\n" +
        "Adult female actors are frequently asked to provide the voices for small boys and girls. Their voices are lighter than those of male actors, and in the recruitment of child performers there are complex procedures and endless forms to deal with, which production companies on tight schedules would rather avoid. Shirley has learnt to create the right sounds from the back of her throat, and to avoid always sounding like the same child, so she collects new voices as she watches children's TV.\n\n" +
        "Cartoons are the highlight of a job that includes a whole range of things from educational videos to vacuum cleaner adverts. 'Those are hard because you have to sound enthusiastic about something you care nothing about, but my years in this profession help,' she says. 'They've taught me that the trick is to smile while you're talking – that makes your voice sound bright and cheery. When I've got some days doing animation work, it feels like a holiday; the interaction with other actors makes a huge difference.'\n\n" +
        "The competition for work is fierce, and a good showreel – a recording demonstrating what the artist can do – is essential. 'It's definitely worth investing in a strong showreel,' Shirley says. 'There are agencies which specialise in helping voiceover artists put them together.' She claims to have got where she is – (line 61) near the top of her profession – through doggedness as much as natural ability. 'Whether it's making your showreel and taking it round all the film and TV companies, advertising agencies and recording studios, or simply practising your voices, it's all about setting goals and refusing to give up.'\n\n" +
        "For anyone considering a career doing voiceovers, Shirley recommends attending 'specialist workshops – they cover all types of voiceover'. She also believes a passion for human sound is fundamental, describing herself as obsessed with voices and, in a sense, becoming the characters she is performing. 'If I've been in the studio doing a particular kind of American voice, for example, it can take control of me and I'll be speaking like that for hours, perhaps even days afterwards,' she says. 'My children have grown up used to their mum talking in completely different voices.'",
      items: [
        {
          q: 31,
          q_text: 'What first impressed the writer about Shirley Ford?',
          opts: [
            'the number of her voices that seemed familiar to him',
            'the speed with which she could master new voices',
            'the ability she had to make different voices sound funny',
            'the wide range of voices she could produce',
          ],
          answer: 3,
          explanation: '首段一次对话中她切换多种声音：8 岁男孩、疲惫母亲、苏格兰老太、语速飞快的外星人——重点是其声音涵盖范围的广泛。',
        },
        {
          q: 32,
          q_text: 'In the second paragraph, what does the writer say about voiceover work?',
          opts: [
            'Many actors fail to take it seriously enough.',
            'It rarely suits actors with a background in comedy.',
            'It requires skills that well-known actors sometimes lack.',
            'Producers tend to be reluctant to consider famous actors for it.',
          ],
          answer: 2,
          explanation: "第二段说家喻户晓的演员纷纷想配音，却 often don't get offered parts because they're too used to acting with their whole bodies——知名演员缺乏配音所需技能。",
        },
        {
          q: 33,
          q_text: 'What can be a problem with children doing voiceover work?',
          opts: [
            'Their voices often seem strange alongside adult voices.',
            'They tend to sound very similar to each other.',
            'Hiring them involves completing a lot of paperwork.',
            'It takes a long time to train them.',
          ],
          answer: 2,
          explanation: 'in the recruitment of child performers there are complex procedures and endless forms to deal with——雇用童声演员手续繁琐、表格无穷。',
        },
        {
          q: 34,
          q_text: 'What do we learn about Shirley from the fifth paragraph?',
          opts: [
            'She understands that some jobs are more interesting than they might seem.',
            'She knows how to hide her lack of interest in certain kinds of work.',
            'She feels free to spend more time on projects that she enjoys.',
            'She no longer feels bad about promoting certain products.',
          ],
          answer: 1,
          explanation: "吸尘器广告须对毫不在意的东西显得热情；多年职业经验教会她 the trick is to smile while you're talking——懂得掩饰兴趣缺失。",
        },
        {
          q: 35,
          q_text: "The writer uses the word 'doggedness' in line 61 to refer to Shirley's",
          opts: [
            'determination to succeed.',
            'success in her career.',
            'willingness to accept support.',
            'knowledge of her field of work.',
          ],
          answer: 0,
          explanation: "through doggedness as much as natural ability，后文 it's all about setting goals and refusing to give up——认定目标、绝不放弃的执着。",
        },
        {
          q: 36,
          q_text: "The writer's purpose in the final paragraph is to show",
          opts: [
            "how badly Shirley's career affects her family life.",
            'how much Shirley enjoys doing certain accents.',
            'how exceptionally talented Shirley is.',
            'how involved Shirley can get in her work.',
          ],
          answer: 3,
          explanation: "结尾说她做某种美国口音时 it can take control of me，录完几小时甚至几天仍脱口而出，孩子也习惯了妈妈用不同声音说话——完全沉浸其中。",
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about the book Guinness World Records. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "How to break a Guinness World Record\n\n" +
        "Who doesn't want to be the best in the world?\n\n" +
        'Why are we so fascinated by breaking records? For record holders, it is official confirmation that you can do something better than anyone else in the world, even if it is eating a lemon quickly. People like setting goals, pushing themselves – especially if they get to see their name in print at the end of it.\n\n' +
        'Although humans have been competing and showing off for thousands of years, the official arbiter of human achievement, Guinness World Records, is still young. It began only 64 years ago when Sir Hugh Beaver, head of the Guinness company, got into an argument while away on a hunting trip about the fastest game bird in Europe: was it the grouse, the duck or the plover? (37) And so the idea for a book of records was born, a definitive list of the world\'s superlatives.\n\n' +
        "It's amazing how many people seem to be interested in breaking a record. GWR gets about 1,000 record claims a week, of which only 5%–7% are accepted, and about 2% make it into the annual book. You may wonder what kind of person is interested in breaking records. Applications come from all over the world: most from the US, followed by India and China – two Indian men are currently battling for the 'longest hair' record. The typical would-be record-breaker is apparently a man in his mid-30s. (38) Ashrita Furman from the US has the record for holding the most records (more than 200, though he has broken up to 600). Some people even make record attempts every day.\n\n" +
        "Almost anything definable, measurable and provable can become a record. (39) Some, like those, are easy to attempt but difficult to beat, such as eating three cheese biscuits in the fastest time (34.78 seconds). It's easier to beat an existing record than set a new one because 'firsts' have to be approved as suitable records to attempt.\n\n" +
        "(40) The general notes spell out the importance of evidence – photographic, video, independent witnesses – as much as you can get. For mass-participation records, you must prove that you've counted properly.\n\n" +
        "GWR gives some general advice to newcomers: analyse the specific rules for your chosen record to spot and exploit any loopholes in them. For example, Furman smashed the world record for rolling an orange for a mile with his nose when he discovered the rules didn't stipulate colour – he chose an unripe green orange that was hard, round and fast. (41) It isn't enough just to be able to do something unusual, such as lick your elbow. You need to have the skill to be able to lick your elbow as many times as possible in one hour – something that can then be attempted and broken by someone else.\n\n" +
        "Records will be dismissed if they are considered stupid, dangerous or illegal, or if there isn't enough evidence: an angostura playing marathon was rejected because it was only witnessed by her parents. (42) Finally, don't cheat! One man, who broke the record for balancing the most drinking glasses on his chin, had his award disallowed when he admitted to breaking the rules by using plastic cups.",
      options: [
        { label: 'A', text: 'They change with the times: records involving selfies have become popular recently.' },
        { label: 'B', text: "So, remember that you are responsible for proving what you've achieved." },
        { label: 'C', text: "The mind is constantly telling you that you can't do things." },
        { label: 'D', text: "Without the internet, there was no easy way of checking – even the host's well-stocked library couldn't settle the matter." },
        { label: 'E', text: "Another useful idea is to choose something you're good at already and work at that." },
        { label: 'F', text: 'There is also a core of serial record breakers.' },
        { label: 'G', text: 'You should apply to GWR before making your record attempt; it will send you the overall guidelines and those specific to your record.' },
      ],
      items: [
        { q: 37, answer: 'D', explanation: 'D "没有互联网，无从查证——连主人藏书丰富的图书馆也解决不了争论"，解释猎鸟之争为何悬而未决，引出纪录之书的诞生。' },
        { q: 38, answer: 'F', explanation: 'F "还有一批接连不断破纪录的常客"——Furman 保持最多纪录正是 serial record breaker 的例证。' },
        { q: 39, answer: 'A', explanation: "A \"它们随时代变化：自拍类纪录近来流行\"——后句 Some, like those, are easy to attempt but difficult to beat 中 like those 即指这类新纪录。" },
        { q: 40, answer: 'G', explanation: 'G "应在尝试前先向 GWR 申请，它会寄给你总则和所报纪录的细则"——后文 The general notes spell out... 即对 guidelines 的展开。' },
        { q: 41, answer: 'E', explanation: 'E "另一个好主意是选一件你已经擅长的事并下功夫"——Another useful idea 承接 Furman 钻规则空子的例子。' },
        { q: 42, answer: 'B', explanation: "B \"记住，你要为自己的成果举证\"——承接因只有父母见证而被拒的例子，引出 Finally, don't cheat!" },
      ],
    },
    7: {
      // 原书文章标题 "Superfans"、副题 "Four women talk about the objects of their passion and dedication."（存档于 passage）
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read a magazine article about four extreme fans. For questions 43–52, choose from the fans (A–D). The fans may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage:
        'Superfans\n\n' +
        'Four women talk about the objects of their passion and dedication.',
      sections: [
        {
          label: 'A',
          name: 'Katie on the Harry Potter books',
          text:
            "One day when I was 11, my younger sister, who was a big fan of the Harry Potter books, thrust the first book in the series into my hand and forced me to read it. By the next morning, I'd finished it and taken all her other Harry Potter books, too! I loved the fact that it was about an average child doing something extraordinary. Hermione, the clever friend of the main character, Harry, became my hero. I didn't like reading before, but because of her I wanted to be top of my class at school. The books helped me in other ways. My sister and I used to fight all the time but Harry Potter brought us together, gave us something in common. We even travelled to the UK so we could visit all the locations that were used for the Harry Potter films.",
        },
        {
          label: 'B',
          name: 'Sally on the musical Les Misérables',
          text:
            "I didn't see Les Misérables when it opened, thinking it didn't sound like anything special, despite all the positive reviews. When I finally went, I was amazed: it was so different from other musicals. I've been over 1,000 times now, spending more than £50,000. Because it's live theatre, every night is different. You have to keep going back to get everything out of it. I do go to other musicals but it's a risk: you may be wasting your money. When you go to Les Misérables, you're sure to have a good time. When I'm at the theatre, I often hear audience members saying things like: 'Oh, this is my fourth time!' I just think: 'OK, keep going!' Some people think I'm mad, but that's what I think of people who sit on cold riverbanks fishing all day.",
        },
        {
          label: 'C',
          name: 'Cami on the opera star, Andrea Bocelli',
          text:
            "When my husband and I started going to the opera singer Andrea Bocelli's concerts all over the world, I worried that everyone would regard us as crazy. But we made so many friends, and it was all so rewarding, that we just thought: 'Who cares?' Like many fans, I first heard him on TV. There was this programme called A Night in Tuscany, which I initially thought would be a travel show. There was something so touching about his voice. We've seen him 60 times now. You'd think we would be getting tired of it all, but you see something new in each show. And we've made wonderful friends. Once, we were having dinner with fans from Japan, South Africa and Europe. The only thing linking us was Andrea. It is expensive, building entire vacations around his tours, but this is our only indulgence so we don't worry about it.",
        },
        {
          label: 'D',
          name: 'Jane on the pop singer, Madonna',
          text:
            "My friends say I'm the most positive person they know and being a Madonna fan is part of that. I remember precisely when I first saw her on a TV music show. I was only watching because I was bored. Then Madonna appeared on screen and I was transfixed by this young woman with such amazing energy. Slowly the Madonna posters started going up in my room. Soon, I was travelling to concerts around the world. I couldn't care less if she is no longer regarded as the coolest star – being a Madonna fan is important to how I see myself – my sense of self. I've now been to over 90 performances. A Madonna show is like a modern circus: spectacular lights, costumes and dancers. Even without her, it would be fantastic. Madonna isn't my only obsession, but she's the one that provides the most fun. I've met some of my best friends through Madonna.",
        },
      ],
      items: [
        { q: 43, q_text: 'she was able to improve a difficult situation through being a fan?', answer: 'A', explanation: 'A：My sister and I used to fight all the time but Harry Potter brought us together, gave us something in common——共同的热爱改善了姐妹关系。' },
        { q: 44, q_text: 'she first saw her object of interest through a misunderstanding?', answer: 'C', explanation: 'C：programme A Night in Tuscany, which I initially thought would be a travel show——误以为是旅游节目才初识 Bocelli。' },
        { q: 45, q_text: 'her object of interest offers the best entertainment of its type?', answer: 'B', explanation: 'B：看别的音乐剧有风险可能白花钱，而看 Les Misérables you\'re sure to have a good time——同类中最佳。' },
        { q: 46, q_text: 'she is uninterested in how popular her object of interest is?', answer: 'D', explanation: "D：I couldn't care less if she is no longer regarded as the coolest star——Madonna 是否还被认为最潮毫不在意。" },
        { q: 47, q_text: 'she was concerned by what other people might think of her?', answer: 'C', explanation: "C：I worried that everyone would regard us as crazy... we just thought: 'Who cares?'——起初担心别人怎么看。" },
        { q: 48, q_text: 'she was encouraged to try and achieve something by being a fan?', answer: 'A', explanation: 'A：I didn\'t like reading before, but because of her I wanted to be top of my class——因崇拜 Hermione 而奋发向上。' },
        { q: 49, q_text: 'the object of her interest has become a part of her identity?', answer: 'D', explanation: 'D：being a Madonna fan is important to how I see myself – my sense of self——粉丝身份已成自我认同。' },
        { q: 50, q_text: 'she had a low expectation of something at first?', answer: 'B', explanation: 'B：didn\'t see it when it opened, thinking it didn\'t sound like anything special——起初期望很低。' },
        { q: 51, q_text: 'she recognises that keeping her obsession going is a luxury?', answer: 'C', explanation: 'C：It is expensive, building entire vacations around his tours, but this is our only indulgence——明知昂贵却是放纵的奢侈。' },
        { q: 52, q_text: 'she was made to take an interest in something that later became her passion?', answer: 'A', explanation: 'A：姐姐把书 thrust into my hand and forced me to read it——被迫开始，后来痴迷。' },
      ],
    },
  },
}
