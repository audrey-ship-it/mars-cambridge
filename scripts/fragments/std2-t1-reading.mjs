// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 1（书内印作 Test 5）Reading and Use of English: 书页 8–19（PDF 9–20）
// 答案核对自 Test 5 Key（书 120 / PDF 121），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹

export default {
  meta: {
    id: 'fce-standard-2-test1-reading',
    title: 'FCE 标准版真题 2 · Test 1 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Reading and Use of English',
    pages: '书 8–19',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 5 Key（书 120 / PDF 121）',
    examKey: 'fce-standard-2-test1',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
      type: 'mcq_cloze',
      passage:
        'Lighting a town\n\n' +
        'The Norwegian town of Rjukan lies along the floor of a narrow valley, (0).......... by sheer mountains. Because of its location, the town, with its 3,400 (1).........., has in the past lived in shadow for half the year. During the day, from late September to mid-March, the town gets no direct natural sunlight at all. Its residents all agreed this (2).......... that the town was incredibly depressing during the winter months.\n\n' +
        "However, that all changed in 2013 with the (3).......... of a system of mirrors whose design Martin Anderson, an artist, had first (4).......... up with some 12 years earlier. With financial (5).......... from the local government and from several prominent business people, Anderson's idea became a (6).......... . Today, high on the mountain opposite the town, (7).......... three large solar-powered, computer-controlled mirrors (8).......... the precise movement of the sun across the winter sky, reflecting its rays onto the town's market square and flooding it in bright sunlight.",
      items: [
        { q: 1, opts: ['totals', 'populations', 'numbers', 'inhabitants'], answer: 3, explanation: 'inhabitants "居民"，与前文 residents 呼应；totals/populations/numbers 不能用于"有 3,400 名居民"。' },
        { q: 2, opts: ['meant', 'explained', 'showed', 'made'], answer: 0, explanation: 'agreed this meant that… "大家都认为这意味着……"，meant that 后接事实内容。' },
        { q: 3, opts: ['ending', 'conclusion', 'completion', 'result'], answer: 2, explanation: 'the completion of a system of mirrors "镜面系统的建成"，与 2013 年改变呼应。' },
        { q: 4, opts: ['brought', 'come', 'caught', 'got'], answer: 1, explanation: 'come up with 固定搭配"想出（设计）"，had first come up with some 12 years earlier。' },
        { q: 5, opts: ['budget', 'cost', 'expense', 'investment'], answer: 3, explanation: 'financial investment "资金投入"，来自政府和商界人士的投资使想法得以实现。' },
        { q: 6, opts: ['reality', 'truth', 'principle', 'practicality'], answer: 0, explanation: 'became a reality "成为现实"，idea 与 reality 搭配。' },
        { q: 7, opts: ['find', 'sit', 'stay', 'hold'], answer: 1, explanation: '倒装句 sit three large solar-powered mirrors "（山上）矗立着三面大镜子"。' },
        { q: 8, opts: ['passing', 'following', 'proceeding', 'continuing'], answer: 1, explanation: 'following the precise movement of the sun "跟随太阳的精确轨迹"。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'open_cloze',
      passage:
        'The homing instinct\n\n' +
        'The homing instinct is what makes certain animals, birds and fish return (0).......... the place they consider home. Cats often have this instinct. It was particularly strong in an American cat called Ninja, which disappeared shortly (9).......... its owners had taken it to their new home; a year later the cat turned up at its old home even (10).......... this was 1,360 kilometres away from (11).......... its owners were now living. Other cats may not travel so far but many (12).......... on going back to their old home. Pilsbury, an English cat, made a 13-kilometre journey back to its former home 40 times in spite of having to cross several busy roads to (13).......... so.\n\n' +
        'Pigeons also have the homing instinct and, ever (14).......... ancient times, human beings have used them to carry messages back home. However, cat owners, (15).......... have to keep returning to their old address in (16).......... to bring their cat home, tend to find the homing instinct simply irritating rather than useful or interesting!',
      items: [
        { q: 9, answer: ['AFTER'], show: 'AFTER', explanation: 'shortly after + 从句 "……之后不久"，猫在新家安顿后不久失踪。' },
        { q: 10, answer: ['THOUGH'], show: 'THOUGH', explanation: 'even though "尽管"，引导让步从句。' },
        { q: 11, answer: ['WHERE'], show: 'WHERE', explanation: 'away from where its owners were now living，where 引导介词 from 的宾语从句。' },
        { q: 12, answer: ['CARRY', 'KEEP'], show: 'CARRY / KEEP', explanation: 'carry on / keep on doing "继续做"，many (cats) carry/keep on going back。' },
        { q: 13, answer: ['DO'], show: 'DO', explanation: 'to do so "这样做"，指代前文的横穿马路。' },
        { q: 14, answer: ['SINCE'], show: 'SINCE', explanation: 'ever since ancient times "自古以来"，与现在完成时连用。' },
        { q: 15, answer: ['WHO'], show: 'WHO', explanation: 'cat owners, who have to keep returning…，非限制性定语从句修饰 owners。' },
        { q: 16, answer: ['ORDER'], show: 'ORDER', explanation: 'in order to bring their cat home "为了把猫接回家"。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'word_formation',
      passage:
        'The oldest house in Britain\n\n' +
        "It was warm, round, had a (0) FANTASTIC view of a lake and appears to have been occupied for several hundred years. Welcome to the oldest house in the UK, which was found with other fascinating relics (17)_____ at a site in North Yorkshire. These remains are transforming our (18)_____ of how Britain's earliest inhabitants lived.\n\n" +
        "The structure was 3.5 metres in (19)_____ and was supported by a circle of wooden posts. Dark, decayed matter at the centre of the ruin suggests the possibility of a roof entirely made of grasses. (20)_____ of the remains by scientists revealed that the building stood in 8,500 BC. It was (21)_____ thought that people living in Britain at this time were nomadic with no fixed homes. But the (22)_____ of the oldest known house provides clear (23)_____ that some of these people built large permanent structures. Researchers of the site, however, are (24)_____ about how long the house will remain the 'oldest' in the UK, because new finds are being made all the time.",
      items: [
        { q: 17, given: 'NEAR', answer: ['NEARBY'], show: 'NEARBY', explanation: 'near → nearby "附近的"，relics (found) nearby at a site。' },
        { q: 18, given: 'KNOW', answer: ['KNOWLEDGE'], show: 'KNOWLEDGE', explanation: 'know → knowledge 知识；our knowledge of how…lived。' },
        { q: 19, given: 'WIDE', answer: ['WIDTH'], show: 'WIDTH', explanation: 'wide → width 宽度；3.5 metres in width。' },
        { q: 20, given: 'INVESTIGATE', answer: ['INVESTIGATION', 'INVESTIGATIONS'], show: 'INVESTIGATION(S)', explanation: 'investigate → investigation 调查；作句子主语需用名词。' },
        { q: 21, given: 'ORIGIN', answer: ['ORIGINALLY'], show: 'ORIGINALLY', explanation: 'origin → originally 起初；修饰 thought 需用副词。' },
        { q: 22, given: 'DISCOVER', answer: ['DISCOVERY'], show: 'DISCOVERY', explanation: 'discover → discovery 发现；the discovery of the oldest known house。' },
        { q: 23, given: 'EVIDENT', answer: ['EVIDENCE'], show: 'EVIDENCE', explanation: 'evident → evidence 证据；provides clear evidence that…。' },
        { q: 24, given: 'SURE', answer: ['UNSURE'], show: 'UNSURE', explanation: 'sure → unsure 不确定的；are unsure about how long…，because new finds are being made 提示否定含义。' },
      ],
    },
    4: {
      title: 'Part 4 · 句子转换',
      instruction:
        'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0).',
      type: 'key_word_transformation',
      items: [
        {
          q: 25,
          stem: "I haven't decided what sort of job I'd like to do when I leave college.",
          key: 'MIND',
          answer: ['up my mind about', 'my mind up about'],
          show: 'up my mind about / my mind up about',
          explanation: "haven't decided → haven't made up my mind；make up one's mind about sth 固定搭配。",
        },
        {
          q: 26,
          stem: 'Tony never took any notice of the advice people gave him.',
          key: 'ATTENTION',
          answer: ['paid any attention to', 'paid the slightest attention to', 'paid the least attention to', 'paid much attention to'],
          show: 'paid (any / the slightest / the least / much) attention to',
          explanation: 'took any notice of → paid (any / the slightest / the least / much) attention to；never 与肯定式动词连用保持否定含义。',
        },
        {
          q: 27,
          stem: "Mary didn't ring us last night because she knew we were going out.",
          key: 'WOULD',
          answer: ['would have rung', 'would have called', 'would have telephoned', 'would have phoned'],
          show: 'would have rung / called / (tele)phoned',
          explanation: "didn't ring … because she knew → would have rung … if she hadn't known，对过去事实的虚拟。",
        },
        {
          q: 28,
          stem: 'I am planning to go to the football match, unless they cancel it because of the weather.',
          key: 'DUE',
          answer: ["isn't cancelled due to", 'is not cancelled due to'],
          show: "isn't / is not cancelled due to",
          explanation: 'unless they cancel it → if the football match is not cancelled；because of → due to。',
        },
        {
          q: 29,
          stem: "Louise didn't really feel like going out for a meal.",
          key: 'MOOD',
          answer: ['in the mood for'],
          show: 'in the mood for',
          explanation: "didn't really feel like → wasn't really in the mood for，feel like doing = be in the mood for doing。",
        },
        {
          q: 30,
          stem: "'Last week, I unexpectedly met an old friend on the train,' said the man.",
          key: 'RUN',
          answer: ['he had run into', "he'd run into"],
          show: "he'd / he had run into",
          explanation: '间接引语：met an old friend unexpectedly → he had run into an old friend；run into "偶然遇见"。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an article about a flight in a very fast aeroplane. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
      type: 'reading_mcq',
      passage:
        'My fastest ever plane ride\n\n' +
        'Reporter Matt Rudd goes on an extraordinary plane ride\n\n' +
        'In The Red Bull Air Race, twelve pilots take it in turns to race through a series of pylons between 15 and 25 metres high, negotiating sharp turns, barrel rolls and loops on the way, all at speeds of up to 370 km per hour. I was invited to find out what it feels like to take part.\n\n' +
        "An hour before the flight, I had to sign two forms. The first confirmed that I was in good health, the second that I would empty all my pockets, because tiny objects can become very dangerous during the flight. I also learnt that I would have to try to stay orientated throughout. 'The horizon is your best friend,' I was told, 'the pilot will explain in which direction you have to look.' I was also asked to promise that when I was flying upside down, I would 'completely relax. Try and enjoy the view.' Half an hour before the flight, I had a safety briefing in which I was told not, under any circumstances, to touch anything.\n\n" +
        'By the time we were taxiing down the runway, my legs up in front of me, feet trying not to touch the incredibly important steering pedals, hands trying not to rest on any of the many important switches within reach, my mind had made itself up. Ignoring all instructions received, I would not relax and enjoy the flight. This is the cruel paradox of high-speed acrobatic flying: in order to survive it without passing out, you have to keep calm and focused. You have to tense up at the right time and you have to relax at the right time. Panicking is a bad idea. None of this was of particular comfort as we began accelerating down the runway.\n\n' +
        "Dario, the pilot, and I reached the end of the runway. There we were in the Zivko Edge 540, unsettlingly one of the world's fastest acrobatic planes, ready to go. The plane took off and two seconds later we banked sharply to the right. It was an instant, violent manoeuvre and I felt the air squeeze out of my lungs. I looked up at the horizon, tensed everything and emitted short gasps as I sank down into the seat. For a split second I weighed 6.2 times my normal weight. And then we levelled out. We turned another sharp left and dived, leaving my stomach at 2,000 metres and my lungs scrunched up on the roof of the plane. Seconds later, we were 10 metres off the ground, aiming for the alarmingly small space between two pylons. They passed at 400 km per hour but my whoop of momentary excitement was stolen by a sharp right turn. We hadn't even done any acrobatics yet.\n\n" +
        "For two minutes, I was allowed to fly the plane, my hand shaking so much the plane shook too… it's that responsive. And then after that Dario said something. And I said, 'Can you repeat that?' But instead of replying, he did a barrel roll, a full lateral 360° turn.\n\n" +
        "'Are you okay?'\n\n" +
        "'Yup.'\n\n" +
        "'Have you had enough?'\n\n" +
        "'No,' lied.\n\n" +
        "Then he did a loop, flying the plane up and over, turning a full circle in the air. Now, I am aware that many people would find this exciting. The sort of people who enjoy rollercoasters. However, I just thought it was a bit much. At the top of the loop, as we were flying upside down, I heard a small voice shouting 'Relax relax look up'. Then I looked up – and saw some fields.\n\n" +
        "The flight was over in 10 minutes. It had been 'soft' compared to what the pilots endure when they race. As if to illustrate the point, Dario got out some sandwiches the minute we landed and merrily tucked in. I didn't eat for hours and that night I did the loop the loop over and over again in my sleep.",
      items: [
        {
          q: 31,
          q_text: 'How did Matt feel as the plane started moving along the runway?',
          opts: [
            'annoyed that there were so many rules to follow',
            'surprised that he had to sit in a rather awkward position',
            'convinced that he was going to be unable to behave as required',
            'anxious that he had not been adequately prepared for the experience',
          ],
          answer: 2,
          explanation: '滑行时他已打定主意 Ignoring all instructions received, I would not relax and enjoy the flight——认定自己无法按要求做到放松。',
        },
        {
          q: 32,
          q_text: "Why does Matt say 'We hadn't even done any acrobatics yet' in lines 55 and 56?",
          opts: [
            'to justify his impatience',
            'to express his disappointment',
            'to explain why he felt so relieved',
            'to emphasise how apprehensive he felt',
          ],
          answer: 3,
          explanation: '仅是急转弯已令他呼吸急促、兴奋被"偷走"，强调"连特技都还没开始"，突出他的惶恐不安。',
        },
        {
          q: 33,
          q_text: 'What does responsive mean in line 59?',
          opts: [
            'eager',
            'sensitive',
            'active',
            'helpful',
          ],
          answer: 1,
          explanation: 'responsive 此处指飞机对操纵反应灵敏（sensitive），手一抖飞机就跟着抖。',
        },
        {
          q: 34,
          q_text: 'In the fifth paragraph, Matt wants the pilot to think that',
          opts: [
            'he understands the technical terms.',
            'he needs a break.',
            'he is feeling fine.',
            'he had expected to roll.',
          ],
          answer: 2,
          explanation: "对 'Are you okay?' 答 'Yup.'，对 'Have you had enough?' 答 'No,' lied——他想让飞行员以为自己感觉良好。",
        },
        {
          q: 35,
          q_text: 'What does it refer to in line 71?',
          opts: [
            'turning a full circle',
            'being aware',
            'finding this exciting',
            'enjoying rollercoasters',
          ],
          answer: 0,
          explanation: 'line 71 前文 he did a loop… turning a full circle in the air；I just thought it was a bit much 中 it 指"空中转整圈"这件事。',
        },
        {
          q: 36,
          q_text: 'What is implied about the pilot in the final paragraph?',
          opts: [
            "He finds Matt's reaction amusing.",
            'He wants to demonstrate that he is tougher than Matt.',
            'He feels unusually hungry after the flight.',
            'He is completely unaffected by their experience.',
          ],
          answer: 3,
          explanation: '落地那一刻 Dario 就拿出三明治悠闲进食，与 Matt 几小时吃不下饭形成对比——这次飞行对飞行员毫无影响。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about sleep and learning. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
      type: 'paragraph_matching',
      passage:
        'College students need their sleep!\n\n' +
        'Research into the connection between sleep and learning suggests that sleep is even more important than previously thought.\n\n' +
        "Only a month and a half into her first semester at college, Liz, a student at Harvard University, already wishes she had more time for sleep. Several mornings each week, Liz rises before six to join her teammates for rowing practice. On days like these she seldom sleeps more than seven hours per night, but it's not as if she doesn't try.\n\n" +
        '(37) She often misses opportunities to socialize in order to get her coursework done and still get to bed at a reasonable time. Even without knowing just how important sleep is to learning, she tries to make time for it.\n\n' +
        "This is not always easy, however. The many demands on her time include her chosen sport, as well as activities like studying optional extra subjects, (38) She and other students who think the same way as her sacrifice sleep to fit everything in. It isn't surprising to learn, therefore, that students represent one of the most sleep-deprived segments of the population. Coursework, sports and new-found independence all contribute to the problem.\n\n" +
        'Studies have found that only eleven percent of college students sleep well consistently, while seventy-three percent experience at least occasional sleep issues, as Liz does. Forty percent of students felt well-rested no more than two days per week! Poor sleep is no longer considered a harmless aspect of college (39) The results of this show that it has a significant impact on memory and learning.\n\n' +
        'Inadequate sleep negatively affects our learning processes. It is simply more difficult to concentrate when we are sleep deprived; this affects our ability to focus on and gather information presented to us, and our ability to remember even those things we know we have learned in the past. (40) That is, the effect that many sleep researchers think it has on memory consolidation, the process by which connections in the brain strengthen and form into something more permanent.\n\n' +
        "A number of studies have shown that poor quality sleep can negatively impact on a person's ability to turn factual information or processes they've just learned into long-term memories. (41) And if this opportunity is missed – such as when a student stays awake all night – it generally can't be made up. Even if sleep is 'recovered' on subsequent nights, the brain will be less able to retain and make use of information gathered on the day before. These findings shed new light on the importance of making time for sleep, not only for college students like Liz, but for anyone who wants to continue to learn.\n\n" +
        "Early in her first semester at Harvard, Liz feels like she is maintaining a healthy balance, but only just. Trying hard to get the most out of her time in college, she admits it's sometimes hard to see sleep as an important part of her academic objectives. (42) Rather than thinking of sleep as wasted time or even time off, we should, they say, instead view it as the time when our brain is doing some of its most important work.",
      options: [
        { label: 'A', text: 'Although it may seem unnecessary to do these, Liz views them as essential.' },
        { label: 'B', text: 'It also has a less obvious but possibly even more profound impact.' },
        { label: 'C', text: 'Liz knows that she must nevertheless do her best to avoid it.' },
        { label: 'D', text: 'Research suggests that the most critical period of sleep for this to happen in is the one on the same day.' },
        { label: 'E', text: "In fact, Liz's behaviour is not at all like that of other college students her age." },
        { label: 'F', text: "But that's exactly what many researchers say it is." },
        { label: 'G', text: 'Quite the opposite, actually, as research into its effects progresses.' },
      ],
      items: [
        { q: 37, answer: 'E', explanation: 'E 项"事实上，Liz 的行为与同龄大学生完全不同"，承接首段她清晨训练、努力补觉的描述，并引出下文她为学业牺牲社交。' },
        { q: 38, answer: 'A', explanation: 'A 项"尽管这些事看似没必要，Liz 却视之为必不可少"，these 指上文的 chosen sport 与 optional extra subjects。' },
        { q: 39, answer: 'G', explanation: 'G 项"恰恰相反，随着对其影响的研究不断深入"，呼应 no longer considered harmless，并引出 The results of this。' },
        { q: 40, answer: 'B', explanation: 'B 项"它还有一种不那么明显却可能更深远的影响"，下文 That is 引出的正是这一影响——对记忆巩固的作用。' },
        { q: 41, answer: 'D', explanation: 'D 项"研究表明发生这一转变最关键的睡眠时段是当天"，与下文 And if this opportunity is missed 衔接。' },
        { q: 42, answer: 'F', explanation: "F 项\"但这正是许多研究者所说的\"，that 指上句\"睡眠是学业目标的重要部分\"，引出研究者的真实观点。" },
      ],
    },
    7: {
      // 原书文章标题 "Adventure guides"，副题 "Four guides describe the benefits and drawbacks of taking tourists to some of the world's most scenic, beautiful but different terrain."（STD1_T1 的 Part 7 结构无标题字段，暂存于注释）
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article in which four tourist guides talk about their work. For questions 43–52, choose from the people (A–D). The people may be chosen more than once.',
      type: 'multiple_matching',
      sections: [
        {
          label: 'A',
          name: 'Torfi from Iceland',
          text:
            "The worst thing about being a guide in Iceland is when people haven't bothered to bring the right clothes for the weather. We like to say that there is no such thing as bad weather, only bad equipment. I haven't had any disasters but funny moments and blunders are endless: locking myself out of the car in a mind-numbing blizzard, taking folks hiking over a mountain when the schedule clearly said we should have been going rafting, being stranded on a glacier in a blizzard with a broken-down car for 16 hours. This is a job that provides a stream of good memories and friendship. The river Hvítá is my favourite place for white-water rafting. I'd also recommend a visit to the glacier to hike across the ice – you won't be able to do that for much longer as the ice is melting at an alarming rate.",
        },
        {
          label: 'B',
          name: 'Tulga from Mongolia',
          text:
            "When I became a guide I had virtually no training at all, just a two-hour lecture about what not to do. I had to learn from my mistakes. There were four Swiss people on my first trip. When I met them, I said: 'Hi guys.' They gave me a strange look. I asked if there was anything wrong but they said: 'No, no problem.' After two days, one of them explained, 'Guys means \"goats\" in our language.' I felt terrible. On a later trip, clients were upset because they were meant to see an ice gorge in the Gobi desert but our vehicle broke down and we didn't get there so they demanded half their money back. On a happier note, I once guided a family whose son had behavioural problems, and the child improved so much during the trip that a documentary was made about him called The Horse Boy.",
        },
        {
          label: 'C',
          name: 'Ngima from Nepal',
          text:
            'I used to watch the trekkers going through my village to the mountain peak situated just above it and that made me want to become a guide. The house where I grew up was on the old trekking path to Everest base camp. This is the route Sir Edmund Hillary and Sherpa Tenzing Norgay took to become the first people to climb Everest. We saw an inspiring video about them at school. On my first job as a lead guide, as we crossed the difficult Tashi Lapsa pass we had very heavy snowfall and one of our porters had to be rescued by helicopter because he got frostbite and snow-blindness. We have many beautiful places in Nepal but my favourite trek is up Mera Peak – from the summit you can see five mountains above 8,000m, including Everest.',
        },
        {
          label: 'D',
          name: 'José from Peru',
          text:
            "I was working in a factory when a school friend who was a river guide took me on an expedition. The moment our boat set off down the river I knew I had found the job for me. After two months of training, I guided my first group. Ten years later, one of my hands was badly damaged in an accident so it was impossible for me to continue. My boss suggested I use my legs rather than my arms, and this was the start of my life as a trek leader. You have to deal with lots of situations you hadn't anticipated would occur. There was the time when it snowed on the Inca Trail and the combination of snow and sun made for blinding conditions. So we had to improvise sunglasses out of the silver lining of our drinks boxes! I still love watching people's reactions on arriving at the summit of a high pass – it's so much better to get there after a few hours' walk than after a comfortable car journey.",
        },
      ],
      items: [
        { q: 43, q_text: 'says that a guide must be able to react to unexpected events?', answer: 'D', explanation: "José：You have to deal with lots of situations you hadn't anticipated would occur。" },
        { q: 44, q_text: 'takes clients to a location which is starting to disappear?', answer: 'A', explanation: 'Torfi：冰川 the ice is melting at an alarming rate，"再去就看不到了"。' },
        { q: 45, q_text: 'had a sudden realisation that he wanted to be a guide?', answer: 'D', explanation: 'José：The moment our boat set off down the river I knew I had found the job for me。' },
        { q: 46, q_text: 'says he can look back on his experiences with pleasure?', answer: 'A', explanation: 'Torfi：This is a job that provides a stream of good memories and friendship。' },
        { q: 47, q_text: 'fulfilled a long-held ambition?', answer: 'C', explanation: 'Ngima：少年时望见登山者 made me want to become a guide，后来成为向导实现夙愿。' },
        { q: 48, q_text: 'admits to taking tourists on the wrong trip?', answer: 'A', explanation: 'Torfi：taking folks hiking over a mountain when the schedule clearly said we should have been going rafting。' },
        { q: 49, q_text: 'lived close to where history was made?', answer: 'C', explanation: 'Ngima：The house where I grew up was on the old trekking path to Everest base camp，即 Hillary 与 Tenzing 首登之路。' },
        { q: 50, q_text: "enjoys seeing his clients' sense of achievement?", answer: 'D', explanation: "José：I still love watching people's reactions on arriving at the summit of a high pass。" },
        { q: 51, q_text: 'criticises some of the people he guides?', answer: 'A', explanation: "Torfi：people haven't bothered to bring the right clothes for the weather，批评游客不带合适装备。" },
        { q: 52, q_text: "mentions that his work changed someone's life for the better?", answer: 'B', explanation: 'Tulga：有行为问题的男孩在旅途中大为好转，还为他拍了纪录片 The Horse Boy。' },
      ],
    },
  },
}
