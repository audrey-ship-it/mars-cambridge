// 标准版2 · Test 3（书内印 Test 7）Listening（书页 66–71；Key: 书 144–145/PDF 145–146，已逐题核对）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；答案逐题核对自 Test 7 Key（RUE Key 之后，书 145/PDF 146）。
// 音频接入映射：P1=CD2 Track01，P2=CD2 Track03，P3=CD2 Track04，P4=CD2 Track06（/audio/fce/std2/std2-t3-p1~p4.mp3）。
// 注意：书 68 Q15 印刷原文即为 "During the breaks, Ann was happy..."（"Ann" 为原书笔误，应为 Anne，按页面视觉转录原样保留）。
// 注意：Part 2 版块标题原书印为 "Archery"；数据结构无标题字段，未入数据（同 std2-t3-reading Part 7 惯例）。
export default {
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
