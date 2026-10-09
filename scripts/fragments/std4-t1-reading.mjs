// Source: Cambridge English First 4（标准版4）B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Test 1 Reading and Use of English: 书页 8–19（PDF 9–20），答案核对自 Test 1 Key（书 109 / PDF 110），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 行号标记 (line 65) 按原书内嵌在所标注行（"whatever else gave way this time..."）行首。
//       第五段 "my head would not. The best sign that..." 一句已高倍裁剪复核。
// 注意：Part 6 副题（原书斜体导语 "Why do serious media commentators largely ignore..."）存于 passage 开头。
//       空位框 38 在低倍扫描下似 "32"，经 12 倍裁剪放大确认为 "38"。
// 注意：Part 7 文章 "Being an architect" 为匿名建筑师自述，A–D 各节原书无人名/小节标题，name 留空字符串；
//       题组引导句 "In which section does the architect mention" 照原书（当前结构无对应字段，仅存档于此）。
export default {
  meta: {
    id: 'fce-standard-4-test1-reading',
    title: 'FCE 标准版真题 4 · Test 1 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Reading and Use of English',
    pages: '书 8–19',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 1 Key（书 109 / PDF 110）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        "Seeing Australia's most famous animals\n\n" +
        "Many international visitors to Australia (0).......... the country through the city of Melbourne and (1).......... out on their tours from there. If you do so, it's extremely (2).......... that you will ever (3).......... across kangaroos or koalas in the city. You'll have to get out of town to see them. You can always book a tour that (4).......... wildlife watching experiences.\n\n" +
        "On the other hand, you may decide to do it on your own. In that case, head out on the Great Ocean Road from Melbourne and you'll see the Kennett River Holiday Park. You'll soon find loads of koalas in the trees. After your (5).......... there, drive up to the Grampians National Park. It's (6).......... worth taking an afternoon walk there before renting a room at the Kookaburra Lodge looking out on the stunning scenery. Kangaroos (7).......... in large groups at sunrise and sunset, and you'll have a front (8).......... seat.",
      items: [
        { q: 1, opts: ['leave', 'carry', 'set', 'break'], answer: 2, explanation: 'set out on their tours "出发踏上旅程"，set out 固定搭配；leave out 意为"省略"，不合语境。' },
        { q: 2, opts: ['unknown', 'unclear', 'uncertain', 'unlikely'], answer: 3, explanation: "it's extremely unlikely that you will ever... " + '"你几乎不可能……"，unlikely + that 从句表可能性。' },
        { q: 3, opts: ['come', 'bring', 'get', 'look'], answer: 0, explanation: 'come across "偶然遇见"，固定短语动词。' },
        { q: 4, opts: ['deals', 'offers', 'specialises', 'focuses'], answer: 1, explanation: 'a tour that offers wildlife watching experiences "提供野生动物观赏体验的旅行团"；deals/specialises/focuses 均需介词搭配。' },
        { q: 5, opts: ['incident', 'occasion', 'instance', 'time'], answer: 3, explanation: 'After your time there "你在那里游览结束之后"，time 指度过的一段时间。' },
        { q: 6, opts: ['just', 'simply', 'well', 'deeply'], answer: 2, explanation: 'well worth doing "非常值得做"，well worth 固定搭配。' },
        { q: 7, opts: ['blend', 'gather', 'attend', 'combine'], answer: 1, explanation: 'Kangaroos gather in large groups "袋鼠成群聚集"，gather 聚集。' },
        { q: 8, opts: ['place', 'row', 'queue', 'line'], answer: 1, explanation: 'a front-row seat "前排座位"，front row 固定搭配。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'The Oscars\n\n' +
        'Many countries have annual awards for outstanding achievements (0).......... the film industry. By (9).........., the most famous awards are those made by the American Academy of Motion Picture Arts and Sciences – the Oscars. The name actually refers (10).......... the statuette which all of the winners receive. The awards go not only to actors but also to other people involved in the production of a film, (11).......... as make-up artists and costume designers.\n\n' +
        'Nobody knows for certain (12).......... these statuettes are called Oscars. The most widely accepted story concerns Margaret Herrick, the secretary to the Academy. (13).......... she first saw the statuettes in 1931, her initial reaction (14).......... to say that they looked remarkably (15).......... her cousin, Oscar Pierce. He worked on a farm and actually had (16).......... at all to do with the film industry.',
      items: [
        { q: 9, answer: ['FAR'], show: 'FAR', explanation: 'By far "到目前为止、最……"，修饰最高级 the most famous。' },
        { q: 10, answer: ['TO'], show: 'TO', explanation: 'refer to "指的是"，固定搭配。' },
        { q: 11, answer: ['SUCH'], show: 'SUCH', explanation: 'such as "例如"，引出列举。' },
        { q: 12, answer: ['WHY'], show: 'WHY', explanation: 'knows for certain why these statuettes are called Oscars，"为什么"引导宾语从句。' },
        { q: 13, answer: ['WHEN'], show: 'WHEN', explanation: 'When she first saw the statuettes in 1931, "当她1931年第一次看到……"，时间状语从句。' },
        { q: 14, answer: ['WAS'], show: 'WAS', explanation: 'her initial reaction was to say that...，主系表结构（reaction 单数）。' },
        { q: 15, answer: ['LIKE'], show: 'LIKE', explanation: 'looked remarkably like her cousin "看起来非常像她表弟"，like 介词。' },
        { q: 16, answer: ['NOTHING'], show: 'NOTHING', explanation: 'had nothing at all to do with "与……毫无关系"，nothing to do with 固定搭配。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'Drawing with scissors\n\n' +
        'Frenchman Henri Matisse was among the most (0) INFLUENTIAL artists of the twentieth century. He produced masterpieces in a wide (17)_____ of media including painting, sculpture and printmaking, but some consider his most (18)_____ work to be from his later years, when he suffered from partial (19)_____ and was confined to his bed and a wheelchair. Because of this, he used an (20)_____ method he called \'drawing with scissors\'. He cut brightly-painted sheets of paper into large shapes. Under his guidance these paper cut-outs were attached to the walls of his studio. He then directed his (21)_____ to move the pieces into the precise (22)_____ he had in mind.\n\n' +
        'The inspiration for some of the most remarkable scissor drawings was (23)_____ places Matisse had previously visited but, because of his age, could no longer return to, such as two works he made in 1946 based on an (24)_____ trip he had made to Tahiti many years before.',
      items: [
        { q: 17, given: 'VARY', answer: ['VARIETY'], show: 'VARIETY', explanation: 'vary → variety 多样性；a wide variety of media 多种媒介。' },
        { q: 18, given: 'INNOVATE', answer: ['INNOVATIVE', 'INNOVATORY'], show: 'INNOVATIVE / INNOVATORY', explanation: 'innovate → innovative/innovatory 革新的；修饰 work 需形容词，Key 给两种形式。' },
        { q: 19, given: 'BLIND', answer: ['BLINDNESS'], show: 'BLINDNESS', explanation: 'blind → blindness 失明；partial blindness "部分失明"，需名词。' },
        { q: 20, given: 'EXPERIMENT', answer: ['EXPERIMENTAL'], show: 'EXPERIMENTAL', explanation: 'experiment → experimental 实验性的；修饰 method 需形容词。' },
        { q: 21, given: 'ASSIST', answer: ['ASSISTANT', 'ASSISTANTS'], show: 'ASSISTANT(S)', explanation: 'assist → assistant(s) 助手；directed his assistant(s) to move，需名词。' },
        { q: 22, given: 'ARRANGE', answer: ['ARRANGEMENT', 'ARRANGEMENTS'], show: 'ARRANGEMENT(S)', explanation: 'arrange → arrangement(s) 布置、排列；the precise arrangement(s) he had in mind，需名词。' },
        { q: 23, given: 'MEMORY', answer: ['MEMORABLE'], show: 'MEMORABLE', explanation: 'memory → memorable 难忘的；修饰 places 需形容词。' },
        { q: 24, given: 'FORGET', answer: ['UNFORGETTABLE'], show: 'UNFORGETTABLE', explanation: 'forget → unforgettable 难忘的；an unforgettable trip，语境需否定含义形容词。' },
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
          stem: 'I cannot remember a time when Dr Rowan was not the president of the club.',
          key: 'AS',
          answer: ['as long as I can', 'as long as I'],
          show: 'as long as I (can)',
          explanation: 'not remember a time when he was not president → has been president for as long as I can remember；Key 印 AS long as | I (can)，can 为可选项。',
        },
        {
          q: 26,
          stem: 'The furthest my brother can run is 5 kilometres.',
          key: 'NO',
          answer: ['can run no further than', 'can run no farther than', 'can run no more than'],
          show: 'can run no further / farther / more than',
          explanation: 'the furthest ... is 5 kilometres → can run no further/farther/more than 5 kilometres，no + 比较词表"最多跑这么远"。',
        },
        {
          q: 27,
          stem: 'I spent more money on my holiday than I meant to.',
          key: 'SO',
          answer: ['mean to spend so much', 'intend to spend so much'],
          show: 'mean / intend to spend so much',
          explanation: "spent more than I meant to → didn't mean/intend to spend so much (money)，so much 指花费超出本意。",
        },
        {
          q: 28,
          stem: 'My doctor said that I must only run in proper running shoes.',
          key: 'NEVER',
          answer: ['me never to run unless'],
          show: 'me never to run unless',
          explanation: 'told me never to run unless I was wearing...，tell sb not to do → tell sb never to do；must only run in → never run unless in。',
        },
        {
          q: 29,
          stem: 'The engineer explained clearly how the machinery worked.',
          key: 'CLEAR',
          answer: ['clear explanation of'],
          show: 'clear explanation of',
          explanation: 'explained clearly how → gave a clear explanation of how，动词短语改名词短语。',
        },
        {
          q: 30,
          stem: 'The concert was cancelled when it began to snow.',
          key: 'OWING',
          answer: ['off owing to'],
          show: 'off owing to',
          explanation: 'was cancelled → was called off；when it began to snow → owing to the snow，call off "取消"。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an extract from the autobiography of the tennis player Rafael Nadal. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        'Looking back at the Wimbledon tennis championships\n\n' +
        "The silence, that's what strikes you when you play on Centre Court at the Wimbledon tennis championships. You bounce the ball soundlessly up and down on the soft grass surface; you toss it up to serve; you hit it and you hear the echo of your own shot. And of every shot after that. The trimmed grass, the rich history, the ancient stadium, the players dressed in white, the respectful crowds, all combine to enclose and cushion you from the outside world. The quiet of the Centre Court is good for my game. What I battle against hardest in a tennis match is to shut everything out of my mind but the contest itself and the point I'm playing.\n\n" +
        "The silence of the Centre Court is broken by a shock of noise when a point's done: applause, cheers, people shouting your name. I hear them, but as if from some place far off. I don't register that there are fifteen thousand people hunched around the arena, tracking every move my opponent and I make. I am so focused I have no sense at all that there are millions watching me around the world as I play Roger Federer in the 2008 Wimbledon final – the biggest match of my life.\n\n" +
        "I had always dreamed of playing at Wimbledon. My uncle Toni, who has been my coach all my life, had drummed into me from an early age that this was the biggest tournament of them all. By the time I was 14, I was sharing with my friends the fantasy that I'd play there one day and win. Before 2008, though, I'd played and lost, both times against Federer – in the final there the year before, and the year before that. The defeat in 2006 had not been so hard. I went out onto the court that time just pleased and grateful that, having just turned twenty, I'd made it that far. Federer beat me pretty easily, more easily than if I'd gone out with more belief. But my defeat in 2007 left me utterly destroyed. I knew I could have done better, that it was not my ability or the quality of my game that had failed me, but my head. Losing always hurts, but it hurts much more when you have a chance and throw it away.\n\n" +
        "Toni, the toughest of tennis coaches, is usually the last person in the world to offer me consolation; he criticizes me even when I win. It is a measure of what a wreck I must have been that he abandoned the habit of a lifetime and told me there was no reason to despair, that there would be more Wimbledons and more Wimbledon finals. I told him he didn't understand, that this had probably been my last chance to win it. Every single moment counts but some moments count for more than others, and I had let a big one pass in 2007.\n\n" +
        "There was nothing Toni could do to ease my grief. Yet here I was again in 2008, just one year later. I was confident I'd learnt the lesson from that defeat twelve months earlier; that (line 65) whatever else gave way this time, my head would not. The best sign that my head was in the right place now was the conviction that I would win.\n\n" +
        "At dinner with family and friends and team members the night before the final, at the house we always rent when I play at Wimbledon, mention of the match had been off-limits. I didn't expressly forbid them from raising the subject, but they all understood well enough that, whatever else I might have been talking about, I was already beginning to play the match in a space inside my head. From here on in until the start of play, that space should remain mine alone.",
      items: [
        {
          q: 31,
          q_text: 'The writer says that the silence at Wimbledon Centre Court',
          opts: [
            'calms his nerves during matches.',
            'gives him confidence in his abilities.',
            'helps him to concentrate on the game.',
            "makes him feel that he's respected.",
          ],
          answer: 2,
          explanation: '首段 The quiet of the Centre Court is good for my game. What I battle against hardest is to shut everything out of my mind but the contest itself——安静帮助他把注意力只放在比赛上，即帮助专注。',
        },
        {
          q: 32,
          q_text: 'In the second paragraph, what does the writer suggest about the 2008 match?',
          opts: [
            'It was all that concerned him at that time.',
            'His opponent was distracted by the behaviour of the crowd.',
            'It proved how popular he had become.',
            'His fans seemed almost as anxious as he was.',
          ],
          answer: 0,
          explanation: '第二段说他 I am so focused I have no sense at all that there are millions watching——完全专注于此役，外界一概无感，可见当时比赛是他唯一在意的事。',
        },
        {
          q: 33,
          q_text: 'What does the writer say about playing Federer in two Wimbledon finals?',
          opts: [
            'Nerves let him down in the first match.',
            'He had different attitudes to the two matches.',
            'He was too ambitious when he played the first match.',
            'The quality of his game improved in the second match.',
          ],
          answer: 1,
          explanation: '2006 年上场时 pleased and grateful（感恩即可），2007 年却 utterly destroyed、自责没有赢——两次决赛心态截然不同。',
        },
        {
          q: 34,
          q_text: "The writer says that after he lost in the 2007 final, his coach",
          opts: [
            "encouraged him to think about how much he'd already achieved.",
            'was unusually sympathetic towards him.',
            'failed to recognise his disappointment.',
            'criticised his performance unfairly.',
          ],
          answer: 1,
          explanation: 'Toni 通常 the last person to offer me consolation、连赢球都批评他；那次却 abandoned the habit of a lifetime 来安慰他——一反常态地体恤。',
        },
        {
          q: 35,
          q_text: "What does 'gave way' mean in line 65?",
          opts: [
            'developed unexpectedly',
            'became stronger',
            'kept going through difficulties',
            'failed to function',
          ],
          answer: 3,
          explanation: 'whatever else gave way this time, my head would not——这次无论其他什么垮掉，头脑也不会垮；gave way 即"失灵、垮掉"。',
        },
        {
          q: 36,
          q_text: 'What does the writer say about his family and friends?',
          opts: [
            'They take his mind off tennis.',
            'They respect his need for privacy.',
            'They help him in any way they can.',
            'They see things from a different perspective.',
          ],
          answer: 1,
          explanation: '决赛前晚宴上 mention of the match had been off-limits，虽未明令禁止但大家都心照不宣不提比赛——尊重他赛前的独处空间。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read a magazine article about video games. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "In praise of video games\n\n" +
        'Why do serious media commentators largely ignore the biggest entertainment medium in the world? Author Naomi Alderman investigates.\n\n' +
        "Why do video games receive so little coverage in the mainstream media? It's a question that's troubled me for years – I even made a programme about it for the radio. Games are the largest entertainment medium in the world, yet newspaper culture pages tend not to cover them. Cultural programmes on TV and radio might do a short feature about them once in a while at best, reserving serious discussion and analysis for specialist things with a very limited audience like interpretive dance and experimental opera.\n\n" +
        "My novels, which sell tens of thousands of copies, are shortlisted for prizes that appear on the news. My games, which have sold millions of copies, don't even make the news. Film and TV awards ceremonies are a news story. (37) I think all this is a shame because it affects the way people think about the medium. It means we don't get the kind of analysis that mainstream media can produce, and we're prevented from asking interesting questions about games in our culture.\n\n" +
        "There are several reasons for this exclusion. People who control programming and edit papers tend to be in their 50s and older, and are still a bit old to have come of age with video games or to understand them. And games, because they're very much products of a collaborative effort, normally don't have a single creator or celebrity to represent them in interviews. (38)\n\n" +
        "But I want to suggest another reason why games aren't treated as an important cultural form. (39) At least, that is the impression I get. They make it amazingly hard to get hold of new games, even for someone who writes about them.\n\n" +
        "I write about novels as well as games and barely a day passes when a publisher isn't posting me a copy of a new book in the hope I'll review it or mention it somewhere. (40) If the games industry wanted to be treated like other cultural media, it could start by making its work accessible to mainstream journalists.\n\n" +
        "There's a timing issue too. In the past, I've tried to persuade review programmes to cover games more frequently. But I always seem to come up against the same old problem. Film companies organise pre-release screenings, TV companies send out early versions of their shows, publishers send copies of new books, theatres do previews – but games companies won't send out advance versions of games. (41)\n\n" +
        "Furthermore, the games industry itself does not seem too bothered about being covered in broadsheet culture sections, because it doesn't think this would sell more games. It is already the biggest entertainment industry in the world in any case. (42) It's a fair point, but I wish the industry would cooperate anyway because games are important and deserve to be regarded as such in the mainstream media.",
      options: [
        { label: 'A', text: 'With books you have authors; with films you have directors; so the situation is very different.' },
        { label: 'B', text: 'However, gamers are still being viewed as socially inadequate teenagers.' },
        { label: 'C', text: 'So what difference would, for example, a weekly games programme on TV make to it?' },
        { label: 'D', text: 'Those for games are only for Industry specialists.' },
        { label: 'E', text: "This is that the people in the games industry itself don't care enough." },
        { label: 'F', text: "That's because they usually need to make technical changes right up until the last minute." },
        { label: 'G', text: 'By contrast, I spend hours doing phone-rounds in the hope of getting hold of a copy of a game.' },
      ],
      items: [
        { q: 37, answer: 'D', explanation: 'D 承接前文"影视颁奖典礼是新闻"：游戏行业的（颁奖）报道只有行业专家看，与主流新闻形成对比，引出 I think all this is a shame。' },
        { q: 38, answer: 'A', explanation: '前句说游戏是集体创作、没有单一创造者可代表受访；A 说"书有作者、电影有导演，游戏处境不同"，解释为何游戏在媒体上缺位。' },
        { q: 39, answer: 'E', explanation: '前句提出 another reason why games aren\'t treated as an important cultural form；E "这就是游戏行业本身的人不够在意"，this is that 呼应 reason，后句 At least, that is the impression I get 衔接。' },
        { q: 40, answer: 'G', explanation: '前句说书商主动寄书求评论；G "相比之下，我得打几小时电话才能拿到一份游戏拷贝"，By contrast 与出书界形成对照。' },
        { q: 41, answer: 'F', explanation: '前句列举影视书剧都送预览版，唯独游戏公司不发预发布版；F "那是因为他们往往要到最后一分钟还在改技术细节"，解释原因。' },
        { q: 42, answer: 'C', explanation: '前句说游戏业已自认为最大娱乐产业、不在乎主流报道；C 反问"那么每周一档电视游戏节目又能改变什么呢"，后句 It\'s a fair point 承接该反问。' },
      ],
    },
    7: {
      // 原书文章标题 "Being an architect"（存档于 passage）；A–D 各节无小节标题/人名，name 留空
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article written by an architect about his work. For questions 43–52, choose from the sections (A–D). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage:
        'Being an architect',
      sections: [
        {
          label: 'A',
          name: '',
          text:
            "After I graduated, I took the first job I was offered. I felt torn at the time because although I was really happy to have found a job right out of school when so many others could not, I hated retail design at architectural school and this was a firm specialising in retail stores. It was a small company (I was the first employee hired) and because I did work around the country, my boss travelled quite a bit. Almost from day one, I was left on my own for several days a week and, through necessity, I was taking meetings with local clients and giving presentations without help. It wasn't too much later that I started helping with the billing and managing some of the proposal writing duties. I got to do it all. When I left the job, I remember going into an interview with a larger firm and telling them that I had all this experience. The person interviewing me chuckled and said, 'You won't be doing that here straightaway – that's what the senior employees do.'",
        },
        {
          label: 'B',
          name: '',
          text:
            "I now run my own small company. Because we're not so big, we really need everyone in the office to be superstars. It can be a difficult environment for some types of people to work in because we expect everyone to work on their own initiative. We need our employees to make the most of the resources available to them, including asking questions of others on their team, looking at past projects and using the lessons learned to find possible ways forward. We give our staff plenty of time and space to do their own thing. They need to be clever enough to arrange and make use of this time and space wisely.",
        },
        {
          label: 'C',
          name: '',
          text:
            "Everybody in our office is part of a team. Normally, we have two or three people working on a project, and everybody has access to the same people and information. Individuals tend to roll on and off projects as and when needed. There is always a senior level person who remains on a project throughout the entire process and is the point of contact, but we like to let people find their own roles on projects and pursue the things that interest them. We all get along pretty well and any issues with behaviour get dealt with as they arise between the individuals concerned. The people who work for me really are the company's most important asset. Sure, we could replace them with others, but it would be very hard to find the right balance of skills that we currently have.",
        },
        {
          label: 'D',
          name: '',
          text:
            "I often get asked if architecture is a field for everyone. It's a difficult question to answer. What I look for in potential new employees is their ability to speak articulately. This is essential. Since we require all employees to meet with clients, they need to be able to construct a narrative that can engage our clients and which they can relate to. I look for the same characteristics in all employees, regardless of gender, nationality, age, whatever. I think it takes a certain type of brain to practise architecture but that doesn't necessarily mean that everyone can't find a place. While most people don't go into architectural school thinking that they are going to be anything other than the world's next great designer, the truth of the matter is that it takes a small army of people from diverse backgrounds to take on some of the buildings being constructed these days.",
        },
      ],
      items: [
        { q: 43, q_text: 'employees being trusted to organise themselves in the way they think is best?', answer: 'B', explanation: 'B：expect everyone to work on their own initiative，给员工 plenty of time and space to do their own thing——信任员工自行安排。' },
        { q: 44, q_text: 'how problems among employees are resolved?', answer: 'C', explanation: 'C：any issues with behaviour get dealt with as they arise between the individuals concerned——员工间问题如何解决。' },
        { q: 45, q_text: 'the range of people needed for some architectural projects?', answer: 'D', explanation: 'D：it takes a small army of people from diverse backgrounds to take on some of the buildings——某些项目需要形形色色的大量人手。' },
        { q: 46, q_text: 'being told that he would have fewer responsibilities in a new position?', answer: 'A', explanation: "A：面试大公司时被告知 'You won't be doing that here straightaway – that's what the senior employees do.'——新职位不会让他承担那些职责。" },
        { q: 47, q_text: 'the limited control higher-ranking people have over what employees do?', answer: 'C', explanation: 'C：虽有 senior level person 负责联络，但 we like to let people find their own roles and pursue the things that interest them——上级对员工做什么控制有限。' },
        { q: 48, q_text: 'seeking help from colleagues?', answer: 'B', explanation: 'B：asking questions of others on their team——向团队同事请教。' },
        { q: 49, q_text: 'having mixed feelings about his work?', answer: 'A', explanation: 'A：I felt torn at the time——找到工作很高兴，却讨厌零售设计，百感交集。' },
        { q: 50, q_text: 'a requirement for the performance of all employees to be exceptional?', answer: 'B', explanation: 'B：we really need everyone in the office to be superstars——要求所有员工都表现杰出。' },
        { q: 51, q_text: 'the value of employees to his business?', answer: 'C', explanation: 'C：The people who work for me really are the company\'s most important asset——员工是公司最重要的资产。' },
        { q: 52, q_text: 'having to demonstrate independence straightaway in a new post?', answer: 'A', explanation: 'A：Almost from day one, I was left on my own for several days a week——入职伊始就得独立应对客户与汇报。' },
      ],
    },
  },
}
