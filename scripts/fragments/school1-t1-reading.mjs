// Source: Cambridge First Certificate English Tests for schools 1.PDF（校园版真题 1）
// Test 1 Reading and Use of English: 书页 8–19，答案核对自 Test 1 Key（书 120）
// Part 1 文章（BMX racing）原书第 8 页，PDF 文本提取后逐字核对；其余部分由页面图片视觉转录。
// 含撇号字符串一律用双引号包裹。
export default {
  meta: {
    id: 'fce-schools-1-test1-reading',
    title: 'FCE 校园版真题 1 · Test 1 Reading and Use of English',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 1,
    paper: 'reading',
    pages: '书8-19(PDF9-20)',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '书120 Key',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        "BMX racing\n\n" +
        "Somewhere in California during the early 1970s, a bunch of kids customised their bicycles so they could do (0) .......... on them. They were able to do incredibly (1) .......... things like jumping off ramps and making their bikes fly through the air. Then they began racing them along dirt tracks. The kids were recorded on camera and the (2) .......... film, which was called On Any Sunday, (3) .......... the word about the new pastime like wildfire. And so a sport (4) .......... by kids for kids was born. Bicycle Motocross was the name given to it, which was soon shortened to BMX. It (5) .......... the attention of thousands of kids over one short summer.\n\n" +
        "Nowadays, BMX racing is recognised as a fun action sport. BMX caters for the individual. Every rider gets to take (6) .......... . No one sits on the bench and no one ever gets (7) .......... from the team. And statistics have proved that, due to the (8) .......... safety requirements, it is one of the safest of all youth sports. Have you ever thought of giving BMX a try?",
      items: [
        { q: 1, opts: ['exceptional', 'impossible', 'excellent', 'impressive'], answer: 3, explanation: 'incredibly impressive things "令人难以置信的惊人举动"，impressive 修饰 things；exceptional/excellent 多修饰品质而非具体动作。' },
        { q: 2, opts: ['resulting', 'following', 'concluding', 'developing'], answer: 0, explanation: 'the resulting film "由此产生的影片"，resulting 作定语表"随之而来的"。' },
        { q: 3, opts: ['broadened', 'extended', 'spread', 'passed'], answer: 2, explanation: 'spread the word like wildfire "像野火一样传开消息"，spread the word 固定搭配。' },
        { q: 4, opts: ['composed', 'created', 'formed', 'set'], answer: 1, explanation: 'a sport created by kids for kids "由孩子为孩子创造的运动"，created 表"创造"。' },
        { q: 5, opts: ['took', 'earned', 'paid', 'caught'], answer: 3, explanation: 'caught the attention of "吸引了……的注意"，catch one\'s attention 固定搭配。' },
        { q: 6, opts: ['place', 'part', 'position', 'play'], answer: 1, explanation: 'take part "参加"，固定短语动词。' },
        { q: 7, opts: ['sent', 'left', 'dropped', 'thrown'], answer: 2, explanation: 'get dropped from the team "被队里除名"，drop 表"除名、淘汰"。' },
        { q: 8, opts: ['harsh', 'strict', 'firm', 'strong'], answer: 1, explanation: 'strict safety requirements "严格的安全要求"，strict 修饰 requirements。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        "Dolphins on the phone\n\n" +
        "Did you know it (0) .......... not just humans who talk? Dolphins do too. And in Hawaii, a female dolphin and her baby have even (9) .......... a conversation over the telephone! The call was made in an aquarium where the two dolphins swam in separate tanks connected by a special underwater audio link. (10) .......... they were in different tanks, the two dolphins began whistling and chirping to each (11) .......... immediately – typical dolphin chatter.\n\n" +
        "'Information seemed to be passed back (12) .......... forth very quickly,' explains Don White, a researcher at the aquarium where the experiment took place.\n\n" +
        "But (13) .......... exactly were the dolphins saying? (14) .......... is the question scientists are trying to answer by studying both wild and captive dolphins in the hope that they might (15) .......... day understand their secret language. They haven't completely cracked the code yet, but they are listening and learning! So who knows? Your next phone call could (16) .......... from a dolphin!",
      items: [
        { q: 9, answer: ['HAD', 'HELD'], show: 'HAD / HELD', explanation: 'have had/held a conversation "进行了一次对话"，have a conversation 或 hold a conversation 均可。' },
        { q: 10, answer: ['ALTHOUGH', 'THOUGH'], show: 'ALTHOUGH / THOUGH', explanation: 'Although/Though they were in different tanks "尽管它们在不同的水箱里"，让步状语从句。' },
        { q: 11, answer: ['OTHER'], show: 'OTHER', explanation: 'to each other "互相"，固定搭配。' },
        { q: 12, answer: ['AND'], show: 'AND', explanation: 'back and forth "来回地"，固定搭配。' },
        { q: 13, answer: ['WHAT'], show: 'WHAT', explanation: 'what exactly were the dolphins saying "海豚到底在说什么"，what 作 saying 的宾语。' },
        { q: 14, answer: ['THAT', 'THIS'], show: 'THAT / THIS', explanation: 'That/This is the question "那/这就是问题所在"，指示代词作主语。' },
        { q: 15, answer: ['ONE', 'SOME'], show: 'ONE / SOME', explanation: 'one/some day "有朝一日"，固定短语表将来某时。' },
        { q: 16, answer: ['BE', 'COME'], show: 'BE / COME', explanation: 'could be/come from a dolphin "可能来自一只海豚"，be from / come from 均可。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        "Can plants talk?\n\n" +
        "Have you ever done any gardening? If so, do you have any (0) .......... SUGGEST on how to speed up and encourage the (17) .......... of plants? GROW Surprisingly, some gardeners recommend talking or playing music to them, and now a group of British (18) .......... have found that this SCIENCE (19) .......... may not be quite as crazy as it seems. They discovered BEHAVE that some young plants make a clicking sound in their roots which is so quiet that humans are unable to hear it. The researchers used special (20) .......... to capture these noises; then when they played the EQUIP (21) .......... back to other young plants, they made an amazing RECORD (22) .......... – the plants actually grew towards the noise. This seems DISCOVER to suggest that plants can communicate with each other in a way that experts were previously (23) .......... of. AWARE\n\n" +
        "It could be that sounds and vibrations are used by plants to share (24) .......... information about growing conditions or about possible VALUE dangers from pests. Perhaps more people should try talking to their plants!",
      items: [
        { q: 17, given: 'GROW', answer: ['GROWTH'], show: 'GROWTH', explanation: 'grow → growth 生长；the growth of plants "植物的生长"，需名词。' },
        { q: 18, given: 'SCIENCE', answer: ['SCIENTISTS'], show: 'SCIENTISTS', explanation: 'science → scientists 科学家；a group of British scientists "一群英国科学家"，需名词复数。' },
        { q: 19, given: 'BEHAVE', answer: ['BEHAVIOUR', 'BEHAVIOR'], show: 'BEHAVIOUR / BEHAVIOR', explanation: 'behave → behaviour/behavior 行为；this behaviour "这种行为"，需名词；英式/美式拼写均可。' },
        { q: 20, given: 'EQUIP', answer: ['EQUIPMENT'], show: 'EQUIPMENT', explanation: 'equip → equipment 设备；special equipment "特殊设备"，不可数名词。' },
        { q: 21, given: 'RECORD', answer: ['RECORDING', 'RECORDINGS'], show: 'RECORDING(S)', explanation: 'record → recording(s) 录音；played the recording(s) back "回放录音"，需名词。' },
        { q: 22, given: 'DISCOVER', answer: ['DISCOVERY'], show: 'DISCOVERY', explanation: 'discover → discovery 发现；made an amazing discovery "做出惊人发现"，需名词。' },
        { q: 23, given: 'AWARE', answer: ['UNAWARE'], show: 'UNAWARE', explanation: 'aware → unaware 不知道的；were previously unaware of "以前不知道"，需否定形容词。' },
        { q: 24, given: 'VALUE', answer: ['VALUABLE', 'INVALUABLE', 'VALUED'], show: 'VALUABLE / INVALUABLE / VALUED', explanation: 'value → valuable/invaluable/valued 有价值的；修饰 information 需形容词，Key 给三种形式。' },
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
          stem: 'The bike is quite old so you should ask someone to check the brakes before you ride it.',
          key: 'GET',
          answer: ['GET the brakes checked', 'GET a brake check'],
          show: 'GET the brakes checked / GET a brake check',
          explanation: 'ask someone to check the brakes → get the brakes checked（使役结构 get sth done）；或 get a brake check。',
        },
        {
          q: 26,
          stem: "I borrowed my sister's car because I hadn't yet saved enough money to buy my own.",
          key: 'UNTIL',
          answer: ['lent me her car UNTIL'],
          show: 'lent me her car UNTIL',
          explanation: "borrowed my sister's car → my sister lent me her car；because I hadn't saved enough → until I had saved enough。",
        },
        {
          q: 27,
          stem: "I was late for school because I couldn't find my bag.",
          key: 'TIME',
          answer: ["would have been on TIME", "would have been in TIME", "would've been on TIME", "would've been in TIME", "'d have been on TIME", "'d have been in TIME", "would have arrived on TIME", "would have arrived in TIME", "would've arrived on TIME", "would've arrived in TIME", "'d have arrived on TIME", "'d have arrived in TIME"],
          show: "would have / would've / 'd have been / arrived on / in TIME",
          explanation: "was late because I couldn't find my bag → would have been/arrived on/in time if I'd been able to find my bag；虚拟语气对过去的假设。",
        },
        {
          q: 28,
          stem: 'Nicky is the only person who has signed up for the trip.',
          key: 'NOBODY',
          answer: ['from Nicky NOBODY has put', 'from Nicky NOBODY has written', 'from Nicky NOBODY put', 'from Nicky NOBODY wrote', 'from Nicky NOBODY else put', 'from Nicky NOBODY else wrote'],
          show: 'from Nicky | NOBODY has put / written OR from Nicky | NOBODY (else) put / wrote',
          explanation: "Nicky is the only person who has signed up → apart from Nicky, nobody has put/written their name down；sign up → put/write one's name down。",
        },
        {
          q: 29,
          stem: 'I regret not listening to my teacher today.',
          key: 'WISH',
          answer: ['WISH I had paid more', "WISH I'd paid more", 'WISH I had paid', "WISH I'd paid", 'WISH I had been paying', "WISH I'd been paying"],
          show: "WISH I had / 'd paid (more) OR WISH I had / 'd been paying",
          explanation: 'regret not listening → wish I had paid (more) attention / wish I had been paying attention；wish + 过去完成时表对过去的遗憾。',
        },
        {
          q: 30,
          stem: "'I'm very sorry but we haven't got any more chocolate ice cream,' said the waiter.",
          key: 'RUN',
          answer: ["'ve RUN out of", 'have RUN out of'],
          show: "'ve / have RUN out of",
          explanation: "haven't got any more → have run out of「用完了」，run out of 固定短语。",
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an extract from a novel about an American teenager called Bonnie. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        "Queen Rider\n\n" +
        "Bonnie Wyndham got out of her mother's car and looked at Almonside School. 'I'll make you sorry I've come here,' she told her, pleasantly. Her mother was getting out of the other door at the time so she didn't hear, but Bonnie wouldn't have cared if she had. Her mother knew her feelings. Mrs. Wyndham looked about her. Almonside was a funny school, all bits and pieces, buildings hidden away amongst the trees on a wooded hillside; very confusing at first sight. Then she saw the signs on a post: 'science block, gymnasium, riding centre ...' 'Riding centre,' said Bonnie, showing a sudden interest.\n\n" +
        "'Headmaster's study,' said her mother. 'This way.'\n\n" +
        "Bonnie followed her mother along a broad drive that curved between trees.\n\n" +
        "'I wish you'd walk beside me instead of following me like a dog,' said Mrs. Wyndham wearily, but she didn't seem to expect Bonnie to do so.\n\n" +
        "A few minutes later, her mother was talking to Bonnie's new headmaster in his study, while Bonnie herself sat and waited outside the door. Suddenly, Bonnie jumped up. 'Why should I just sit here?' she said to herself. 'I'll be thrown out before very long, anyway,' she said mentally to the door, 'so why not get it over and done with?' She left the building and headed for the riding centre in the direction indicated by the sign.\n\n" +
        "There was a nice old building where the horses were kept, and a large structure for indoor riding. Bonnie looked about her, but there was no one in sight. There was a certain reverence about her manner as she approached the animals. Bonnie treated horses with respect. The horses were very well looked after, she could tell that at once.\n\n" +
        "Almost every stall was occupied, and she wandered along looking carefully at each horse and judging it. 'They know what they're doing here,' she told a small pony as she ran a finger along its nose. It was the next horse that pulled her up short. 'But aren't you the best of the lot!' she said. He was brown with a touch of white. Lively, probably, but Bonnie liked that. 'You know, I have the feeling we've met before,' said Bonnie, stroking his neck. 'It was in my dreams and I was riding you to victory in some big competition.' Over the stall was his name: Maverick.\n\n" +
        "Suddenly, she couldn't resist the temptation to ride the horse. 'I wonder where I can find a bridle for your head, and a saddle for your back. Can't be far away.' The room containing all the riding equipment was – Bonnie was delighted to discover – unlocked. Absorbed in the pleasurable task of putting a saddle on Maverick's back, she forgot all about her mother and the headmaster. When she sat up high on the big horse outside the building, she felt like a queen, mistress of all she could see. Her nickname at her previous school had been Queen Bee, and she laughed delightedly as she remembered it. 'You're the best horse I've ever sat on, Maverick,' she said admiringly, 'and when I say that I'm not kidding, I can assure you, because I know about horses, even if I don't know about anything else.'\n\n" +
        "She nudged him into a walk, then into a trot. 'If I stay here, I think you and I could be great friends,' she confided. She went round and round the paddock. The rhythm was exhilarating, a little breeze whipping smartly past her cheek and making it glow. She could tell Maverick trusted her, and she felt certain that he'd jump well.",
      items: [
        {
          q: 31,
          q_text: "What do we learn about Bonnie's mother in the first paragraph?",
          opts: [
            'She was used to being obeyed by Bonnie.',
            'She had a favourable first impression of the school.',
            'She had difficulty finding her way around new places.',
            "She was aware of Bonnie's attitude to her new school.",
          ],
          answer: 3,
          explanation: "首段 Her mother knew her feelings——母亲了解 Bonnie 的感受，即知道她对新学校的态度。",
        },
        {
          q: 32,
          q_text: "Why did Bonnie leave her seat outside the headmaster's office?",
          opts: [
            'She was eager to go riding as soon as possible.',
            'She was unwilling to spend any time on her own.',
            "She didn't think it would make any difference if she behaved badly.",
            "She didn't think her mother would take her to see the horses.",
          ],
          answer: 2,
          explanation: "Bonnie 心想 I'll be thrown out before very long, anyway, so why not get it over and done with?——反正早晚要被开除，表现好坏无所谓。",
        },
        {
          q: 33,
          q_text: 'How did Bonnie feel when she was looking at the horses?',
          opts: [
            'excited to recognise a horse she already knew',
            'impressed by the high standards at the riding centre',
            'anxious to make sure that the horses would like her',
            'nervous about being seen with the horses',
          ],
          answer: 1,
          explanation: "Bonnie 看出 The horses were very well looked after——马术中心对马照料极佳，给她留下深刻印象。",
        },
        {
          q: 34,
          q_text: "What does 'pulled her up short' mean in line 41?",
          opts: [
            'made her stop in surprise',
            'made her a bit frightened',
            'made her feel sorry',
            'made her change her mind',
          ],
          answer: 0,
          explanation: "pulled her up short 指使她突然停住——这匹马让她眼前一亮、驻足惊叹。",
        },
        {
          q: 35,
          q_text: "When Bonnie was sitting on Maverick's back she felt",
          opts: [
            'confident of her riding abilities.',
            'determined to prove what she could do.',
            'amused that she had tricked her mother.',
            'relieved that she had left the past behind.',
          ],
          answer: 0,
          explanation: "she felt like a queen, mistress of all she could see——骑在马上自信满满，对自己的骑术很有把握。",
        },
        {
          q: 36,
          q_text: 'What do we learn about Bonnie by the end of the text?',
          opts: [
            'She is looking forward to taking up an exciting hobby.',
            'She is concerned about making new friends.',
            'She is beginning to feel more positive about the school.',
            'She is disappointed about having so little time with the horses.',
          ],
          answer: 2,
          explanation: "文末 she felt certain that he'd jump well，且她觉得能和 Maverick 成为好朋友——对新学校开始产生积极情绪。",
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about two teenagers who send a small model man into space. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "Model man in space\n\n" +
        "At the young age of 17, Mathew Ho and Asad Muhammad have already sent a man into space – a very small model of a man, that is.\n\n" +
        "Mathew and Asad attached a four-centimetre-tall model man and four cameras to a balloon and launched the whole thing into space. (37) .......... The boys could hardly believe their success, especially as the entire project had cost them just $400. They had worked on it every weekend for four months. It wasn't a school project; they just thought it would be a cool thing to do. 'We didn't really think it would work until that point,' says Mathew.\n\n" +
        "Mathew and Asad had the idea for the project two years ago when they saw an online video of a balloon being sent into space by some university students. (38) .......... They both had a passion for all things flight-related so they were the perfect partners for the project.\n\n" +
        "The pair were soon spending every Saturday at Mathew's house, drawing up plans and building the balloon. 'People would walk in, see us building this weird thing with a parachute, and wonder what we were doing. We'd just say, \"We're sending cameras into space!\"' Mathew has already made a lightweight box to carry the cameras. (39) .......... They needed ones which could be programmed to take photos every 20 seconds without stopping.\n\n" +
        "Next they sewed the parachute, which took them three weeks on Asad's mum's sewing machine. 'We soon realised that we're no experts at sewing,' laughs Mathew. 'We broke ... what, four needles? Ridiculous!' The end result didn't look too great but worked perfectly. (40) .......... 'People were yelling at us,' remembers Asad.\n\n" +
        "They ordered a professional weather balloon online, and bought helium gas from a party supply store. Mathew purchased a special wide-angle video camera. Finally, they put the whole thing together, carefully cutting a space inside the lightweight container for three cameras and a mobile phone with a GPS system which helped them to follow it. (41) .......... They also checked with the relevant authorities to make sure its flight wouldn't interfere with air traffic or be illegal.\n\n" +
        "The boys chose a local football field as their take-off point. Then they blew up the balloon, let it go, and watched their model man float upwards. (42) .......... Less than two hours later, a signal on Mathew's computer told them that the model man had re-entered the earth's atmosphere. He had just landed in a field, 122 kilometres from the launch point. Based on their calculations, the balloon had climbed to about 24,000 metres in just over an hour. Then it exploded, triggering the model man's 32-minute fall to earth. Mathew and Asad have since received a note of congratulations from the manufacturers of the little model man.",
      options: [
        { label: 'A', text: 'It was just the sort of thing they thought they might be able to do themselves.' },
        { label: 'B', text: 'Therefore they needed to calculate where the model would land, based on the take-off point, the weather and the size of the balloon.' },
        { label: 'C', text: 'At seven kilometres, they lost both the mobile phone and GPS signals so they went home and made dinner.' },
        { label: 'D', text: 'They watched as it landed 97 minutes later, having recorded an astonishing video clip from 24 kilometres above sea level.' },
        { label: 'E', text: 'So, with a budget of $500 in mind, they started looking for some which were reasonably priced.' },
        { label: 'F', text: 'As a finishing touch, they stuck their model astronaut onto the outside of the box, and found him a tiny national flag to hold.' },
        { label: 'G', text: 'They tested it by dropping it off the roof of the building where Mathew lives, which annoyed some of the residents.' },
      ],
      items: [
        { q: 37, answer: 'D', explanation: 'D 承接前文"把模型人和相机绑在气球上发射升空"：97 分钟后它着陆，录下了 24 公里高空的惊人视频，后句 The boys could hardly believe their success 呼应。' },
        { q: 38, answer: 'A', explanation: '前句说他们看到大学生把气球送入太空的视频；A "这正是他们觉得自己也能做的事"，引出后文两人合作开展项目。' },
        { q: 39, answer: 'E', explanation: '前句说 Mathew 已做好装相机的轻量盒子；E "于是他们本着 500 美元预算寻找价格合理的相机"，后句 They needed ones which could be programmed... 承接。' },
        { q: 40, answer: 'G', explanation: '前句说降落伞成品不好看但好用；G "他们把降落伞从 Mathew 住的楼顶上扔下来测试，惹恼了一些居民"，后句 People were yelling at us 呼应。' },
        { q: 41, answer: 'F', explanation: '前句说他们把所有东西组装好，在容器里为相机和手机留出空间；F "最后，他们把模型宇航员贴在盒子外面，还给它找了一面小国旗拿着"，as a finishing touch 收尾。' },
        { q: 42, answer: 'C', explanation: '前句说气球升空；C "飞到 7 公里时，手机和 GPS 都没信号了，他们就回家做饭了"，后句 Less than two hours later 信号恢复衔接。' },
      ],
    },
    7: {
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article in which four teenagers talk about part-time work. For questions 43–52, choose from the teenagers (A–D). The teenagers may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage: 'Saturday jobs',
      sections: [
        {
          label: 'A',
          name: 'Keith',
          text:
            "I work in a department store on Saturdays, selling men's clothes. My friends mostly work as waiters at the weekend, or deliver newspapers in the mornings before school. They make fun of me because I spend all my time folding shirts. I'm not particularly fond of doing it.) But I earn a good hourly wage and work in a pleasant environment so I don't care what they say. When I'm older it'll pay for my driving lessons – then I won't need any more lifts to work from Mum. And it's quite flexible – basically, I can give it a miss when I have too much homework. I even have a staff discount card which makes me very popular with my parents! And at the end of each shift, I'm able to buy reduced-price food in the food hall – a big advantage as I'm always hungry!",
        },
        {
          label: 'B',
          name: 'James',
          text:
            "I wasn't too bothered about getting a Saturday job, but my father talked me into it – he'd done that sort of thing when he was a kid, and he felt he'd learned a great deal that way. So I started looking. I soon found myself spending Saturdays in a local chemist's. The hours were long, and the pay was rubbish, but then I persuaded my friend Tom to join me so it wasn't too bad. It also helped me to get my next job – I now work in a little supermarket round the corner. I think my dad was right – I've become far more independent, and I've learned a lot about people. Some of the customers come in and chat for hours! Like the other people I work with, I have less time to party because I have to get my schoolwork done as well. But when I do go out, I have a bit of money to spend – so it's worth it.",
        },
        {
          label: 'C',
          name: 'Caroline',
          text:
            "I've never had a part-time job before, but I recently started babysitting for family friends from time to time. It seems to be the most common job among my classmates as it's not badly paid and the kids are nice. One of my friends helps at children's parties, but there doesn't seem to be that much around for teenagers, apart from babysitting. The only other job I've had was as a waitress at a friend's mother's birthday party. I'm pleased to say I only had one incident involving a bowl of soup which I tipped down the side of a sofa, but the people were very reasonable about it. At some point I'd like a better-paid Saturday job, partly to subsidise my ever-increasing collection of clothes, but also for the experience, as I think I could learn a lot from it.",
        },
        {
          label: 'D',
          name: 'Freya',
          text:
            "I was going to start a Saturday job at a hairdresser's, but Mum changed her mind about it at the last minute, saying I was wrong to risk letting my schoolwork suffer. Working part-time might leave me with less time for schoolwork I suppose, but she overestimates how much time I actually spend on it. Most people I know do something, even if it isn't every week, mainly babysitting for their parents' friends. I think if you work a few hours every week you learn to organise your time better. Now I tend to spend ages on the Internet and chatting to friends. I'm sure I wouldn't do that if I was working – I'd be too busy! But my mum has made her mind up so there's nothing I can do about it.",
        },
      ],
      items: [
        { q: 43, q_text: 'argues that having a job encourages people to be more efficient?', answer: 'D', explanation: 'D：I think if you work a few hours every week you learn to organise your time better——工作让人更高效地安排时间。' },
        { q: 44, q_text: 'says there is only a limited range of jobs to choose from?', answer: 'C', explanation: 'C：there doesn\'t seem to be that much around for teenagers, apart from babysitting——青少年可选择的工作很有限。' },
        { q: 45, q_text: 'has to put up with people teasing them?', answer: 'A', explanation: 'A：They make fun of me because I spend all my time folding shirts——朋友取笑他。' },
        { q: 46, q_text: 'hopes to find regular part-time work eventually?', answer: 'C', explanation: 'C：At some point I\'d like a better-paid Saturday job——希望将来能找到固定的兼职。' },
        { q: 47, q_text: 'puts up with a general disadvantage of having a job?', answer: 'B', explanation: 'B：I have less time to party because I have to get my schoolwork done as well——工作的一个普遍缺点是玩乐时间减少。' },
        { q: 48, q_text: 'can choose to work less when short of time?', answer: 'A', explanation: 'A：it\'s quite flexible – basically, I can give it a miss when I have too much homework——作业多时可以不去上班。' },
        { q: 49, q_text: 'got a job to please someone else?', answer: 'B', explanation: 'B：my father talked me into it——父亲说服他去工作，即为取悦父亲。' },
        { q: 50, q_text: "doesn't agree with the reason behind someone's decision?", answer: 'D', explanation: 'D：Mum changed her mind... saying I was wrong to risk letting my schoolwork suffer, but she overestimates how much time I spend on it——不认同母亲阻止她工作的理由。' },
        { q: 51, q_text: 'was not told off for a mistake they made?', answer: 'C', explanation: 'C：I tipped a bowl of soup down a sofa, but the people were very reasonable about it——犯错但没被责骂。' },
        { q: 52, q_text: 'did what they could to improve their situation?', answer: 'B', explanation: 'B：I persuaded my friend Tom to join me so it wasn\'t too bad, and it helped me get my next job——设法改善处境。' },
      ],
    },
  },
}
