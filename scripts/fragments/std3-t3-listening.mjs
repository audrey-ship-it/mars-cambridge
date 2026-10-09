// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 66–71（PDF 68–73），答案核对自 Test 3 Key（Listening 区在书 145 / PDF 147）
// 音频：/audio/fce/std3/std3-t3-p1.mp3 ~ std3-t3-p4.mp3（整 Part 一条）
// 注：书 68 页 Part 2 印刷小标题为 "Film Advisor"（数据结构无对应字段，记录于此备查）。

export default {
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
