// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Test 4 Reading and Use of English: 书页 74–85（PDF 76–87），答案核对自 Test 4 Key（书 156 / PDF 158），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 文中 (line 41)（'thrown in at the deep end'）与 (line 51)（'harried'）为书页行号标记，
//       按 STD 惯例内嵌于文中；"stopping occasionally to let reindeer lumber out of the way"、
//       "November 7, Helsinki and Hetta"、"haven't done woodwork since school"、
//       "I can barely hear to introduce myself"（原书如此，照录）等易误读处均已 2x 裁剪放大复核。
// 注意：Part 6 拆除句子编号 (37)–(42) 内嵌于文中；Part 7 文章标题 "So you want to become a journalist?"
//       与副题 "Susannah Butter tells us what being a journalist is really like."（存档于 passage）；
//       四节标题条（A–D）黑底白字在扫描件中无法辨认（同 Test 2），name 留空，指令本身写作 choose from the sections (A–D)。
export default {
  meta: {
    id: 'fce-standard-3-test4-reading',
    title: 'FCE 标准版真题 3 · Test 4 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Reading and Use of English',
    pages: '书 74–85',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: 'Test 4 Key（书 156 / PDF 158）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        "An ancient cave interests scientists\n\n" +
        "At the base of a hill in South Africa, a cluster of huge stones (0).......... the entrance to one of humanity's oldest known dwelling places. In fact, humans have (1).......... Wonderwerk Cave for 2 million years – most recently in the early 1900s, when a farming family (2).......... it their home. Wonderwerk holds another distinction as well: the cave contains the earliest (3).......... evidence that our ancient ancestors were using fire for cooking.\n\n" +
        'Like many archaeological finds, this one was accidental. Researchers were trying to (4).......... the age of primitive stone tools that had been unearthed in the cave. In the process, they (5).......... across the ashes of a campfire containing what turned (6).......... to be remains of food from a million years ago. That was 200,000 years older than any (7).......... discovered remnants of human-controlled fire. At Wonderwerk, the researchers are digging ever deeper, analysing soil up to 1.8 million years old, (8).......... evidence of even older fires.',
      items: [
        { q: 1, opts: ['occupied', 'stayed', 'settled', 'remained'], answer: 0, explanation: 'humans have occupied Wonderwerk Cave for 2 million years "占据/居住该洞穴"，occupy 表示长期居占，与 for 2 million years 连用。' },
        { q: 2, opts: ['built', 'found', 'used', 'made'], answer: 3, explanation: 'made it their home "把它当作自己的家"，make sth one\u2019s home 固定搭配。' },
        { q: 3, opts: ['heavy', 'fixed', 'solid', 'dense'], answer: 2, explanation: 'the earliest solid evidence "最早的可靠证据"，solid evidence 指扎实可信的证据。' },
        { q: 4, opts: ['conclude', 'detect', 'notice', 'determine'], answer: 3, explanation: 'determine the age of primitive stone tools "测定石器的年代"，determine 测定、查明。' },
        { q: 5, opts: ['came', 'looked', 'went', 'fell'], answer: 0, explanation: 'came across the ashes "偶然发现灰烬"，come across 固定搭配。' },
        { q: 6, opts: ['out', 'in', 'off', 'back'], answer: 0, explanation: 'what turned out to be remains of food "结果原来是食物残余"，turn out to be 固定搭配。' },
        { q: 7, opts: ['last', 'previously', 'once', 'formerly'], answer: 1, explanation: 'any previously discovered remnants "此前发现的任何遗迹"，previously 修饰 discovered。' },
        { q: 8, opts: ['enquiring', 'looking', 'seeking', 'chasing'], answer: 2, explanation: 'seeking evidence of even older fires "寻找更古老用火的证据"，seeking 现在分词作伴随状语。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'The joys of horse riding\n\n' +
        'For me, riding a horse is a delightful combination (0).......... adventure, excitement and relaxation. You can proceed at a slow, peaceful trot (9).......... choose to go at full speed, (10).......... you prefer that. (11).......... I love most about being on a horse is that you get a different view of the world, seeing things you would not normally see, totally surrounded by nature. Each ride has (12).......... own appeal. I especially cherish cold, crisp days in winter when the ground sparkles with snow. Even riding in the rain has a certain appeal – splashing through puddles and galloping home quickly so (13).......... to escape the next downpour. (14).......... paths you ride along may be familiar, you can never quite predict the surprises beyond the next corner. Riding alone can be fabulous, but going out on horses with a friend is best of (15).......... . Even the horses seem to enjoy the company of each (16).......... .',
      items: [
        { q: 9, answer: ['OR'], show: 'OR', explanation: 'proceed at a slow trot or choose to go at full speed，or 连接"慢步慢行"与"全速前进"两种选择。' },
        { q: 10, answer: ['IF', 'SHOULD'], show: 'IF / SHOULD', explanation: 'if you prefer that；should you prefer that 为 should 倒装虚拟（Key 印作 if/should）。' },
        { q: 11, answer: ['WHAT'], show: 'WHAT', explanation: 'What I love most about being on a horse is that…，what 引导主语从句（= the thing that）。' },
        { q: 12, answer: ['ITS'], show: 'ITS', explanation: 'Each ride has its own appeal，its 指 each ride 的，"每次骑行自有其魅力"。' },
        { q: 13, answer: ['AS'], show: 'AS', explanation: 'so as to escape the next downpour，so as to 表目的"以便躲过下一场大雨"。' },
        { q: 14, answer: ['ALTHOUGH', 'THOUGH', 'WHILE', 'WHILST'], show: 'ALTHOUGH / THOUGH / WHILE / WHILST', explanation: '路径熟悉 vs 意外难料，让步状语从句；Key 印作 Although/Though/While/Whilst 四种均可。' },
        { q: 15, answer: ['ALL'], show: 'ALL', explanation: 'best of all "其中最好的"，固定短语。' },
        { q: 16, answer: ['OTHER'], show: 'OTHER', explanation: 'the company of each other "彼此作伴"，each other 固定搭配。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        "Henry Ford\n\n" +
        'One of the most important contributions of the American businessman, Henry Ford to the (0) DEVELOPMENT of the automobile was as inventor of the moving assembly line in 1913. Before this, teams of factory workers would all work together to construct a complete car. With an assembly line, each (17)_____ in Ford\u2019s factory had a specific (18)_____ for only one job when putting together the car. This (19)_____ of labour resulted in (20)_____ cost savings and meant that the total time taken in producing the cars was shortened quite (21)_____ . With the addition of an (22)_____ system for moving the cars as they were being assembled, Ford\u2019s factory turned out a finished car every 93 minutes. Even then, cars were too (23)_____ for most people. Therefore, Ford raised the minimum wage for his factory workers which led to general wage increases across America. In this way, cars became (24)_____ for more people and therefore relatively inexpensive compared to previous times.',
      items: [
        { q: 17, given: 'EMPLOY', answer: ['EMPLOYEE'], show: 'EMPLOYEE', explanation: 'employ → employee，each employee in Ford\u2019s factory "工厂里的每名雇员"。' },
        { q: 18, given: 'RESPONSIBLE', answer: ['RESPONSIBILITY'], show: 'RESPONSIBILITY', explanation: 'responsible → responsibility，had a specific responsibility for only one job "专负责一道工序"。' },
        { q: 19, given: 'DIVIDE', answer: ['DIVISION'], show: 'DIVISION', explanation: 'divide → division，This division of labour "这种劳动分工"，固定表达。' },
        { q: 20, given: 'SIGNIFY', answer: ['SIGNIFICANT'], show: 'SIGNIFICANT', explanation: 'signify → significant，resulted in significant cost savings "带来可观的成本节约"，修饰名词需形容词。' },
        { q: 21, given: 'CONSIDER', answer: ['CONSIDERABLY'], show: 'CONSIDERABLY', explanation: 'consider → considerably，shortened quite considerably "缩短了相当多"，副词修饰动词。' },
        { q: 22, given: 'INNOVATE', answer: ['INNOVATIVE'], show: 'INNOVATIVE', explanation: 'innovate → innovative，an innovative system "一套创新性的系统"，冠词 an 提示形容词。' },
        { q: 23, given: 'COST', answer: ['COSTLY'], show: 'COSTLY', explanation: 'cost → costly，cars were too costly for most people "太贵"，too 后接形容词。' },
        { q: 24, given: 'AFFORD', answer: ['AFFORDABLE'], show: 'AFFORDABLE', explanation: 'afford → affordable，cars became affordable for more people "更多人买得起了"。' },
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
          stem: 'Thick fog prevented the plane from landing.',
          key: 'UNABLE',
          answer: ['was unable to land because'],
          show: 'was unable to land because',
          explanation: 'prevented … from landing → The plane was unable to land because of the thick fog，be unable to do "不能做"。',
        },
        {
          q: 26,
          stem: "Mr Brown was just about to leave home when he remembered he hadn't bought a ticket.",
          key: 'POINT',
          answer: ['on the point of leaving', 'at the point of leaving'],
          show: 'at / on the point of leaving',
          explanation: 'was just about to leave → was at/on the point of leaving "正要离开"（Key 印作 at/on the POINT | of leaving）。',
        },
        {
          q: 27,
          stem: 'I first visited Rome ten years ago.',
          key: 'SINCE',
          answer: ['been ten years since my'],
          show: 'been ten years since my',
          explanation: 'I first visited Rome ten years ago → It has been ten years since my first visit to Rome，since + 名词短语。',
        },
        {
          q: 28,
          stem: "Helen didn't tell me anything about the interview she had yesterday.",
          key: 'WORD',
          answer: ["didn't say a word", 'did not say a word', "hasn't said a word", 'has not said a word'],
          show: "didn't / did not say / hasn't / has not said a word",
          explanation: "didn't tell me anything → Helen didn't/did not say (或 hasn't/has not said) a word to me about…，not say a word（只字未提）（Key 四种形式均接受）。",
        },
        {
          q: 29,
          stem: 'Membership of the club is open to anyone over eighteen.',
          key: 'AGE',
          answer: ['years of age may be', 'years of age can be', 'years of age become'],
          show: 'years of age may / can be / become',
          explanation: 'anyone over eighteen → Anyone who is more than eighteen years of age may/can be/become a member（Key 印作 years of AGE | may / can be / become）。',
        },
        {
          q: 30,
          stem: 'Carole is hardly ever late for work.',
          key: 'ALMOST',
          answer: ['almost always on', 'almost always in'],
          show: 'almost always on / in time',
          explanation: 'hardly ever late → Carole is almost always on/in time for work "几乎从不迟到"（Key 印作 ALMOST always | on/in）。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an article by Cal Flynn, who went to the Arctic Circle to work for a company that runs husky sled trips. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        "Working with huskies\n\n" +
        "Just over a year ago, I left my job to work with huskies in the Arctic Circle in the far north of Finland. At 26, I was restless; I was dreaming of Arctic landscapes, cold and bleak expanses, perhaps in reaction to the noise and crowded living of London. So I found a small company run by Anna McCormack, and her husband, Pasi Ikonen, deep in Finnish Lapland. They agreed to take me on as a husky dog handler for a busy winter season. From December to February, there is plenty of business taking tourists out on sled rides pulled by huskies across the ice and snow (for anything from an hour to a five-day stretch). They started with six dogs, which rapidly expanded to more than 100.\n\n" +
        "Recently, they took over a second property – the 'wilderness farm', which they wrote was a picturesque but basic outpost with untrustworthy electrics and no running water. I could join the team for three months, they told me, if I knew what I was letting myself in for. The hours are long, the conditions tough and the work very physical. I started packing straight away.\n\n" +
        "November 5, London\n" +
        "On my flight out I look out of the window. It is said that spring marches north at a rate of about 26 km per day, a tidal wave of opening flowers and leaves. I think what I am seeing, however, is the opposite movement, with winter marching south, and the rivers freezing over.\n\n" +
        "November 7, Helsinki and Hetta\n" +
        "We drive north by bus through endless dark forest – thin conifers, weighed down by snow – stopping occasionally to let reindeer lumber out of the way. I arrive at the farm after dark, and am barely through the door when I'm handed a pair of boots and turned out into the cold. (line 41) 'Do you want to be thrown in at the deep end?' Anna asks. It's a rhetorical question.\n\n" +
        "I follow the sound of barking, which grows to a wall of noise by the time I reach the dogsheds. Three figures are running back and forth up the lines of huskies, pulling them out and harnessing them to sleds. The dogs are almost hysterical with excitement, straining against the ropes in their desperation to be off. I can barely hear to introduce myself, but the (line 51) others are too harried to stop and talk much anyway. I hover on the sidelines and rub the forehead of one of the quieter dogs. Someone gestures at me impatiently – 'Get in!' – and I almost fall into the nearest sled. A command rings out, and with a jerk we are off into the dark, with only a head torch for light.\n\n" +
        "November 15, Hetta\n" +
        "It does not take long to be initiated into the ranks of the husky guides. 'Are you useful?' Anna asks. I'm stumped. I don't know. Am I? Further questioning reveals that no, I am not: I have never driven a snowmobile, haven't done woodwork since school and have never chopped anything with an axe. 'You do have a driving licence?' someone asks finally. I nod, relieved.\n\n" +
        "The basics of dog-sledding can be picked up very quickly: lean into the corners, put both feet on the brake to stop, and, whatever happens, don't let go of the handlebar. But everything else seems to be very complicated. Simple tasks such as feeding and watering the dogs become very difficult in sub-zero conditions. A bowl of water will freeze solid while you watch, so you must make a soup of meat in hot water for the dogs. By the end of my first week my head is going round and round after so many instructions and my muscles ache from dragging heavy sleds – and from being dragged around myself by overenthusiastic huskies. But I am triumphant. 'I can chop with an axe, hammer a nail, and use a circular saw,' I email friends excitedly. 'In the snow.'",
      items: [
        {
          q: 31,
          q_text: "What were Cal's feelings when leaving London?",
          opts: [
            'convinced she needed to be somewhere more relaxing',
            'happy to further her knowledge of the tourism industry',
            'looking forward to helping Anna and Pasi build their business',
            'longing for a contrast to her current lifestyle',
          ],
          answer: 3,
          explanation: '她当时 restless，一直梦想北极的 cold and bleak expanses，"perhaps in reaction to the noise and crowded living of London"——渴望逃离伦敦的喧嚣拥挤，寻找反差的生活。',
        },
        {
          q: 32,
          q_text: "What was Cal's reaction to the description of the farm?",
          opts: [
            'put off by its remoteness',
            'enthusiastic about taking on its challenges',
            'hopeful of extending her stay',
            'attracted to the idea of being part of a group',
          ],
          answer: 1,
          explanation: '对方先说明条件艰苦（工时长、条件差、体力活重），她的反应是 I started packing straight away——马上收拾行李，乐于迎接挑战。',
        },
        {
          q: 33,
          q_text: "Cal uses the phrase 'thrown in at the deep end' in line 41 to indicate that she was",
          opts: [
            'pushed into thick layers of snow.',
            'expected to swim in deep icy water.',
            'given something demanding to do initially.',
            'asked to do more work than others.',
          ],
          answer: 2,
          explanation: '刚到农场一进门就被发给靴子、扔进寒风中干活，Anna 问"想不想一开始就一头扎进深水区"——比喻一上来就被要求做有难度的事，并非字面冰雪或游泳。',
        },
        {
          q: 34,
          q_text: "What does 'harried' mean in line 51?",
          opts: ['pressured', 'exhausted', 'silenced', 'irritated'],
          answer: 0,
          explanation: '狗群狂躁欲冲、众人来回奔忙套雪橇，忙得连互相介绍都顾不上——harried 指被事务催逼、手忙脚乱的，即 pressured。',
        },
        {
          q: 35,
          q_text: 'What impression is given of life with the husky guides?',
          opts: [
            'There is a welcoming atmosphere.',
            'There is an unnecessary level of aggression.',
            'People focus on getting the job done.',
            'People are expected to wait around without complaining.',
          ],
          answer: 2,
          explanation: '同伴们 too harried to stop and talk，有人不耐烦地示意她 "Get in!" 立即上雪橇出发——大家都在忙手头的活，以完成工作为先。',
        },
        {
          q: 36,
          q_text: 'How does Cal describe her situation after a week?',
          opts: [
            "She finds certain tasks easier than she'd been told they would be.",
            'She is resentful of the curiosity shown by others about her character.',
            'She feels confused by all the things she has been told to do.',
            'She is dissatisfied with her achievements.',
          ],
          answer: 2,
          explanation: '一周后 "my head is going round and round after so many instructions"——各种指令多得让她晕头转向；她同时感到 triumphant，并非不满。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about a charitable project that feeds a million school children. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "The man who organised meals for children all over the world from his garden shed\n\n" +
        'In a remote Scottish valley stands a small iron shed that is affecting the lives of a million children thousands of kilometres away. The shed was the birthplace in 2002 of a tiny charity called Mary\u2019s Meals, run by a man called Magnus MacFarlane-Barrow. Magnus now employs fifty people in the Scottish city of Glasgow, but continues to work from the shed himself.\n\n' +
        "Magnus used to work for a large humanitarian organisation, and this job took him all over the world. During one trip in 2002, he was being shown around a school by a local teacher, when he asked a young boy of 14 what his dreams were. The boy said, 'to have enough food to eat and to go to school.' (37) ..... . He would provide dinner for them each day they were at school.\n\n" +
        "As he researched it over a lengthy period, Magnus found that many children around the world were going to school without having any breakfast, 'and they weren't getting anything at school – so it would be evening before they got fed.' Magnus says. (38) ..... .\n\n" +
        "At the last count, Mary's Meals was working in 1,300 schools in 12 countries across four continents, providing school meals to 986,926 children each day. 'You find that when school dinners are provided, enrolment increases by around 18% – in some instances it's a lot more and the school roll has doubled in a matter of weeks,' says Magnus. (39) ..... . 'And attendance rates go up too, because in many schools children are enrolled but don't attend school very often, and that changes once they know they will be fed. And academic performance also improves a lot – because now not only are children coming in to school, they are also not hungry in lessons.'\n\n" +
        "The successes are all the more remarkable given the fact that it costs relatively little to feed a child for a whole school year. While Mary's Meals has grown dramatically, it has a modest income in comparison with other charities. (40) ..... . The school feeding programmes are run by local communities. Mary's Meals works to establish links with local farmers and community leaders such as teachers. These people organise a small army of volunteers, most of them mothers, who cook and serve the meals. Mary's Meals provides the kitchen, with all the cooking equipment. It also pays for the locally sourced food and gives training.\n\n" +
        "In 2012 one young supporter of Mary's Meals, nine-year-old Martha Payne, catapulted the charity to new heights of fame when she started a fundraising blog about her own unhealthy school dinners in Scotland and was briefly banned from doing so by her local council. (41) ..... . The decision was soon reversed after protests on the internet.\n\n" +
        "Magnus's main focus, however, remains more global. (42) ..... . There are, he says, an enormous number of children across the world who are not in school because of hunger and poverty. 'In many ways, I feel we are just beginning.'",
      options: [
        { label: 'A', text: 'This was an idea of brilliant simplicity, but proved complex to put into practice.' },
        { label: 'B', text: 'The sums involved are still enough to have a significant impact, though.' },
        { label: 'C', text: 'He felt that was an intolerable situation and knew that changing it would make a big difference.' },
        { label: 'D', text: 'The incident attracted a lot of attention, which Magnus admits was not unwelcome.' },
        { label: 'E', text: 'Magnus realised there and then that there was one relatively simple intervention that could transform life for children all over the developing world.' },
        { label: 'F', text: "He is delighted with the way things have gone so far, but says there's a great deal that remains to be done." },
        { label: 'G', text: "'In the short term that can be problematic, but in the long term it's fantastic,' he adds." },
      ],
      items: [
        { q: 37, answer: 'E', explanation: 'E 说"Magnus 当场（there and then）意识到存在一个相对简单的干预措施，能改变整个发展中世界儿童的生活"，承接男孩"吃饱饭、上学"的回答，后句 He would provide dinner for them… 具体说明该措施。' },
        { q: 38, answer: 'C', explanation: 'C 说"他觉得那种状况不可容忍，并知道改变它会带来巨大不同"，指前文孩子们不吃早餐上学、在校没得吃、傍晚才吃上饭的情形。' },
        { q: 39, answer: 'G', explanation: "G 说“'短期那可能会成问题，但长期看非常好，'他补充道”，承接入学人数激增 18%、学籍数周内翻倍的描述，并引出后句 And attendance rates go up too。" },
        { q: 40, answer: 'B', explanation: 'B 说"不过，所涉金额仍足以产生显著影响"，呼应前句"收入与其他慈善机构相比很有限"，though 转折后引出具体运作方式。' },
        { q: 41, answer: 'D', explanation: 'D 说"这一事件吸引了很多关注，Magnus 承认这并非不受欢迎"，指九岁的 Martha Payne 写博客批评校餐被地方议会短暂禁发一事，后句 The decision was soon reversed 承接。' },
        { q: 42, answer: 'F', explanation: 'F 说"他对至今的进展感到高兴，但仍说还有大量事情要做"，呼应前句"主要关注点更全球化"，并引出后句"世界上还有大量儿童因饥饿与贫困失学"。' },
      ],
    },
    7: {
      // 原书文章标题 "So you want to become a journalist?"，副题 "Susannah Butter tells us what being a journalist is really like."（存档于 passage）
      // 四节标题条（A–D）黑底白字扫描无法辨认（同 Test 2 处理），name 留空；指令写作 choose from the sections (A–D)。
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read a magazine article about being a journalist. For questions 43–52, choose from the sections (A–D). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage:
        'So you want to become a journalist?\n\n' +
        'Susannah Butter tells us what being a journalist is really like.',
      sections: [
        {
          label: 'A',
          name: '',
          text:
            "A journalist's life can be hectic. The morning is usually the busiest part of the day because the newspaper I work on has to be ready for printing by noon. I work on the features pages – that is, on longer articles, often about interesting people's lives, which requires a lot of thought and organisation. With some of our articles we can take time to think, do proper research and write them in advance. Whereas others are more urgent, timely pieces with a quick turnaround. I'm sometimes asked to write a story that's needed for the next day. It can be scary knowing you have to find lots of information, write around 1,000 words and get ideas for pictures in just a few hours. I like digging up stuff that hasn't been reported and then presenting it in a way that readers will understand and value. It's great when you see people reading and enjoying a piece you've written. At all times, you need to think about how a story can be sold – for example, what accompanying picture and headline will draw people in.",
        },
        {
          label: 'B',
          name: '',
          text:
            "Writing an article can involve having to find people's addresses and knocking on doors to ask them questions. My job allows me to meet and talk to a huge range of interesting people, and it changes all the time. In just one week, I might be working on an interview with a singer, a piece about coffee shops and an investigation into an unsolved crime. I think I'd get bored working on one thing all the time! My least favourite thing is probably chasing people for answers – this can involve a long chain of people that eventually leads you to the one person you want to write about. You have to be patient and persistent, politely reminding people what you want and when. You have to know just how far you can push them.",
        },
        {
          label: 'C',
          name: '',
          text:
            "Pursuing a career in journalism was a natural choice for me because I'd always read newspapers and been quite nosy about other people's lives. At university, I did a bit of student journalism, editing the arts pages of a student newspaper and doing some writing. In my final year, I went to a careers talk about journalism. After I graduated, I emailed the journalist I'd met at the talk and asked her for work experience. I got it and really enjoyed it. People kept telling me that print journalism was dead, that there's no money in it in the age of the internet. But I figured that I'd give it a go anyway. I decided to take it seriously and get as qualified as I could. I've never regretted it.",
        },
        {
          label: 'D',
          name: '',
          text:
            "For those considering a career in journalism, I would recommend reading as much as you can and keeping your eyes and ears open in everyday situations, which is great for getting ideas for stories. You also need to think about articles which work well and why, and remember this when you sit down to write your own. Being a good writer is an advantage, but in my experience journalism is as much about having new ideas and getting things done (preferably quickly). But don't assume you will be writing front-page stories, or even having your name on any articles at first. Initially, it's about getting to know the people and the system. If they like you, they're more likely to give you an interesting task, listen to your ideas or give you advice.",
        },
      ],
      items: [
        { q: 43, q_text: 'having to rely on others when researching a story?', answer: 'B', explanation: 'B 段：为写稿要找地址、敲门提问，追答案要经过 a long chain of people 才找到能写的那个人——调查采访须依赖他人。' },
        { q: 44, q_text: "how inspiration for articles can come from listening to people's conversations?", answer: 'D', explanation: 'D 段：keeping your eyes and ears open in everyday situations, which is great for getting ideas for stories——日常多听多看是选题灵感来源。' },
        { q: 45, q_text: 'some views on the state of the profession?', answer: 'C', explanation: "C 段：People kept telling me that print journalism was dead, that there's no money in it in the age of the internet——对行业现状的各种说法。" },
        { q: 46, q_text: 'the need to have realistic expectations?', answer: 'D', explanation: "D 段：don't assume you will be writing front-page stories, or even having your name on any articles at first——一开始别抱不切实际的期待。" },
        { q: 47, q_text: 'the pressure of having to meet deadlines?', answer: 'A', explanation: 'A 段：报纸 noon 前必须付印，有时几小时内要写完 a story that\u2019s needed for the next day——交稿时限的压力。' },
        { q: 48, q_text: 'the importance of analysing what makes a good article?', answer: 'D', explanation: 'D 段：You also need to think about articles which work well and why, and remember this when you sit down to write your own——分析好文章好在哪里。' },
        { q: 49, q_text: 'getting a sense of satisfaction from the responses of readers?', answer: 'A', explanation: "A 段：It's great when you see people reading and enjoying a piece you've written——从读者的阅读反应中获得满足。" },
        { q: 50, q_text: 'the advantages of establishing positive relationships with other journalists?', answer: 'D', explanation: 'D 段：it\u2019s about getting to know the people and the system. If they like you, they\u2019re more likely to give you an interesting task, listen to your ideas or give you advice——人脉好的好处。' },
        { q: 51, q_text: 'variety being a benefit of working as a journalist?', answer: 'B', explanation: "B 段：My job allows me to meet and talk to a huge range of interesting people, and it changes all the time… I think I'd get bored working on one thing all the time!——工作多样性的益处。" },
        { q: 52, q_text: 'the degree of preparation involved in producing different articles?', answer: 'A', explanation: 'A 段：有的文章可以 take time to think, do proper research and write them in advance，有的则是 urgent, timely pieces with a quick turnaround——不同文章准备程度不同。' },
      ],
    },
  },
}
