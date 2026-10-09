// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Test 3 Reading and Use of English: 书页 52–63（PDF 54–65），答案核对自 Test 3 Key（书 144 / PDF 146），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 文中 (line 51) 为书页行号标记（对应 q34 'Bemused'），按 STD 惯例内嵌于文中；
//       Part 5 首段 "younger brother Alistair"、末段 "on a straight race to the finishing line"、
//       Part 7 A 段 "I agreed but it bothered me" / "So, I joined them"、C 段 "but I was surprised at how much"
//       等易误读处均已 2x 裁剪放大复核。
// 注意：Part 7 文章标题 "I gave up my career for something very different"（存档于 passage）。
export default {
  meta: {
    id: 'fce-standard-3-test3-reading',
    title: 'FCE 标准版真题 3 · Test 3 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Reading and Use of English',
    pages: '书 52–63',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: 'Test 3 Key（书 144 / PDF 146）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'Imaginary friends in early childhood\n\n' +
        'Many children have an imaginary friend – that is a friend they have (0)........... It was once thought that only children who had difficulty in (1)........... relationships with others had imaginary friends. In fact, having an imaginary friend is probably a common (2)........... of a normal childhood as many children with lots of real friends also have an imaginary friend. The imaginary friend may help some children (3)........... with emotional difficulties, but for many, having an imaginary friend is just fun.\n\n' +
        "Most children, it appears, realise that their imaginary friend is not real. If people (4)........... asking about an imaginary friend, children often say, 'You know, my friend isn't real – I (5)........... him up.'\n\n" +
        'There is no firm evidence to say that having an imaginary friend (6)........... us anything about what a child will be like in the future. One (7)........... of research, though, has (8)........... that adults who once had imaginary friends may be more creative than those who did not.',
      items: [
        { q: 1, opts: ['forming', 'creating', 'gaining', 'producing'], answer: 0, explanation: 'had difficulty in forming relationships "建立人际关系有困难"，form relationships 固定搭配。' },
        { q: 2, opts: ['state', 'aspect', 'situation', 'point'], answer: 1, explanation: 'a common aspect of a normal childhood "正常童年常见的一面"，aspect 指事情的某个方面。' },
        { q: 3, opts: ['handle', 'accept', 'support', 'cope'], answer: 3, explanation: 'help some children cope with emotional difficulties "帮助应对情绪困扰"，cope with 固定搭配（handle 为及物动词，不接 with）。' },
        { q: 4, opts: ['keep', 'persist', 'maintain', 'stay'], answer: 0, explanation: 'If people keep asking "如果人们不停地问"，keep doing 固定搭配；persist 须接 in doing。' },
        { q: 5, opts: ['got', 'put', 'made', 'set'], answer: 2, explanation: "I made him up '他是我编出来的'，make up 虚构（人物、故事）。" },
        { q: 6, opts: ['reveals', 'informs', 'tells', 'advises'], answer: 2, explanation: 'tells us anything about "告诉我们有关……的信息"，tell sb sth 与双宾语搭配。' },
        { q: 7, opts: ['item', 'section', 'unit', 'piece'], answer: 3, explanation: 'One piece of research "一项研究"，piece of research 固定搭配。' },
        { q: 8, opts: ['suggested', 'displayed', 'presented', 'notified'], answer: 0, explanation: 'has suggested that "研究表明"，suggest 可表示"表明、显示"。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'Collecting stamps\n\n' +
        'Ever since postage stamps were first issued, people have (0).......... collecting them. At (9).......... this was regarded as just a hobby for children. Many people, though, continue collecting stamps throughout the whole of (10).......... lives. Although stamp collecting is no (11).......... as widespread as it once was, it remains (12).......... of the most popular hobbies.\n\n' +
        'The collections people make vary. Some want to obtain every stamp ever issued by a particular country. Others, though, are more interested in the pictures on stamps and collect as (13).......... stamps as possible which have, for example, a picture of a bird or maybe of an aeroplane.\n\n' +
        'It is (14).......... doubt very satisfying for a collector to feel such a collection is complete. However, in many cases this never happens (15).......... new stamps are being issued (16).......... the time. This may seem frustrating but it means that people can carry on collecting for as long as their interest lasts.',
      items: [
        { q: 9, answer: ['FIRST'], show: 'FIRST', explanation: 'At first "起初"，与后文"曾被当作只是孩子的爱好"呼应。' },
        { q: 10, answer: ['THEIR'], show: 'THEIR', explanation: 'throughout the whole of their lives "一辈子都在集邮"，their 指代前文 people。' },
        { q: 11, answer: ['LONGER'], show: 'LONGER', explanation: 'no longer as widespread as it once was "不再像从前那样普及"，no longer 固定短语。' },
        { q: 12, answer: ['ONE'], show: 'ONE', explanation: 'it remains one of the most popular hobbies "仍是最受欢迎的爱好之一"，one of + 复数名词。' },
        { q: 13, answer: ['MANY'], show: 'MANY', explanation: 'collect as many stamps as possible "尽可能多地收集邮票"，as many 修饰复数名词 stamps。' },
        { q: 14, answer: ['NO', 'WITHOUT', 'BEYOND'], show: 'NO / WITHOUT / BEYOND', explanation: 'It is no/without/beyond doubt very satisfying "毫无疑问非常令人满足"，三种说法 Key 均接受。' },
        { q: 15, answer: ['AS', 'BECAUSE', 'SINCE', 'WHEN'], show: 'AS / BECAUSE / SINCE / WHEN', explanation: 'this never happens as/because/since/when new stamps are being issued "因为新邮票一直在发行"，原因或时间从句连词。' },
        { q: 16, answer: ['ALL'], show: 'ALL', explanation: 'new stamps are being issued all the time "新邮票一直在发行"，all the time 固定短语。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'The transcontinental railway\n\n' +
        'Before 1869 the journey from the east coast to the west coast of the United States took between four and six months, travelling through difficult and (0) DANGEROUS country by wagon. With the west coast becoming increasingly wealthy, it was obvious that a better route was needed. In the 1850s (17)_____ began about building a transcontinental railway line linking the west with the east.\n\n' +
        'Although there was much (18)_____ about the best route, eventually it was decided to build a line. It ran 3,069 kilometres in (19)_____ from Sacramento in the west to a point where it would join (20)_____ lines giving access to the east coast.\n\n' +
        'Once the line became operational in 1869, the journey could be completed in less than a week. In (21)_____ with the six hours that a (22)_____ from New York to San Francisco takes nowadays, this may not seem particularly (23)_____, but building the transcontinental railway was a great technological (24)_____ which helped to bring unity to the country.',
      items: [
        { q: 17, given: 'DISCUSS', answer: ['DISCUSSION', 'DISCUSSIONS'], show: 'DISCUSSION(S)', explanation: 'discuss → discussion(s)，In the 1850s discussion(s) began about… "展开了讨论"（Key 允许单复数两种）。' },
        { q: 18, given: 'AGREEMENT', answer: ['DISAGREEMENT'], show: 'DISAGREEMENT', explanation: 'agreement → disagreement；much disagreement about the best route "对最佳路线分歧很大"，语境需否定名词。' },
        { q: 19, given: 'LONG', answer: ['LENGTH'], show: 'LENGTH', explanation: 'long → length，3,069 kilometres in length "全长 3,069 公里"。' },
        { q: 20, given: 'EXIST', answer: ['EXISTING'], show: 'EXISTING', explanation: 'exist → existing，join existing lines "与既有的铁路线连接"，修饰名词需形容词。' },
        { q: 21, given: 'COMPARE', answer: ['COMPARISON'], show: 'COMPARISON', explanation: 'compare → comparison，In comparison with "与……相比"，固定短语。' },
        { q: 22, given: 'FLY', answer: ['FLIGHT'], show: 'FLIGHT', explanation: 'fly → flight，a flight from New York to San Francisco "从纽约到旧金山的航班"。' },
        { q: 23, given: 'IMPRESS', answer: ['IMPRESSIVE'], show: 'IMPRESSIVE', explanation: 'impress → impressive，not seem particularly impressive "显得并不特别了不起"，系动词后接形容词。' },
        { q: 24, given: 'ACHIEVE', answer: ['ACHIEVEMENT'], show: 'ACHIEVEMENT', explanation: 'achieve → achievement，a great technological achievement "伟大的技术成就"。' },
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
          stem: 'There was nobody with my brother when the accident happened.',
          key: 'OWN',
          answer: ['was on his own'],
          show: 'was on his own',
          explanation: 'There was nobody with him → My brother was on his own "独自一人"，on one\u2019s own 固定短语。',
        },
        {
          q: 26,
          stem: 'I read only the first three chapters of the book because it was so boring.',
          key: 'GAVE',
          answer: ['gave up reading', 'gave up on reading'],
          show: 'gave up (on) reading',
          explanation: '只读了前三章就不再读了 → I gave up (on) reading the book after the first three chapters，give up (on) doing "放弃做"（Key 印作 GAVE up (on) | reading）。',
        },
        {
          q: 27,
          stem: 'I found it difficult to get on with my work because it was so hot.',
          key: 'MADE',
          answer: ['made it difficult for', 'made it hard for'],
          show: 'made it difficult / hard for',
          explanation: 'I found it difficult → The heat made it difficult/hard for me to get on with my work，make it + 形容词 + for sb。',
        },
        {
          q: 28,
          stem: 'Sigmund accidentally left the door unlocked over the weekend.',
          key: 'MEAN',
          answer: ['did not mean to leave', "didn't mean to leave"],
          show: "did not / didn't mean to leave",
          explanation: 'accidentally "无意中" → Sigmund did not/didn\u2019t mean to leave the door unlocked，mean to do "有意做某事"。',
        },
        {
          q: 29,
          stem: 'Mr Bateman was wrong to say that John had lost my keys.',
          key: 'SHOULD',
          answer: ["shouldn't have said", 'should not have said'],
          show: "shouldn't / should not have said",
          explanation: 'was wrong to say "不该说" → Mr Bateman shouldn\u2019t/should not have said，should have done 的否定式"本不该说（却说了）"。',
        },
        {
          q: 30,
          stem: 'The opening of the new restaurant has been postponed for two weeks.',
          key: 'BE',
          answer: ['will be two weeks before', 'will be two weeks until', 'will be two weeks till'],
          show: 'will be two weeks before / until / till',
          explanation: '开业推迟了两周 → It will be two weeks before/until/till the new restaurant opens "还要两周新餐厅才开业"（Key 印作 will BE two weeks | before/until/till）。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an article about a race between two famous brothers. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        "An unusual race\n\n" +
        "To raise money for charity, a newspaper and a TV company challenged brothers Jonny and Alistair Brownlee, champion triathletes, to take part in a unique race that would set man against car, and brother against brother. In the wild and mountainous Yorkshire Dales of northern England, Jonny and younger brother Alistair would race to the same point, Jonny in a car on roads, Alistair across country on a mountain bike.\n\n" +
        "‘I'm looking forward to it,’ Jonny said, as the brothers took their places on the start line. ‘I've never done anything like this before. It's exciting! These roads have beautiful views – and also it's very cold at the moment, so I'll be able to sit in the car and stay nice and warm.’ Alistair was similarly eager – though in contrast to Jonny's jeans and sweatshirt, he was decked out in full winter cycling gear. Not that the cold was denting his confidence. ‘To be honest,’ he said, ‘I've seen his driving before, so I'm not sure he's even going to make it. I might just stop for a cup of tea halfway up.’\n\n" +
        "The race started at the beautiful Semerwater lake in Wensleydale and was to finish at Yorkshire's highest road, Fleet Moss, some 350 metres up. No problem for the car, perhaps – but with Alistair's first couple of miles involving a 25 per cent incline, the younger Brownlee brother had his work cut out from the start. Barely time for a quick handshake and they were off. As Alistair sprinted away on his bike, heading for a track going straight up the hill and then across country to Fleet Moss, Jonny jumped in the car and was soon on the road. The next time the brothers would see each other would be at the finish line.\n\n" +
        "Jonny's early confidence took an immediate blow. Barely 15 seconds into the drive and he faced his first obstacle. Lumbering out of a field and into the road was a giant tractor. ‘Welcome to Yorkshire,’ he complained to the cameraman in the back of his car. ‘If Alistair beats me, it's all down to this farmer!’ Tense moments later, the tractor safely dealt with, Jonny was back in control.\n\n" +
        "Alistair, meanwhile, was struggling with the slope. Barely a couple of miles in and, as his brother relaxed, he was forced to dismount and carry his bike up the hill, past walls and over fences. (line 51) Bemused sheep gazed, as the Olympic champion kept up a steady pace, at the bizarre sight of a man in a field with a bike on his shoulders. And then, finally, the summit was reached. Over the other side was open ground, and with the sun coming out and the land spread before him, a chance to show what he was made of. Head down, feet on the pedals, Alistair was picking up speed.\n\n" +
        "In the car, his brother faced another local obstacle. The villages in this part of Yorkshire have stood since well before the invention of the car – and the roads that link them were not exactly made for speed. Jonny attempted to negotiate another absurdly narrow corner. The car slowed to a crawl, then passed through a stream that had formed on the road.\n\n" +
        "Clear of the last village, the car was on a straight race to the finishing line. Neither brother knew how close the other was. As Jonny roared the engine and sped through the final straight to Fleet Moss, Alistair was flying across his last field and back onto the road himself – approaching the finish from the other side. Head down, legs pumping... and then a squeal of brakes as he reached the line. And then, finally, Alistair looked up. ‘Is he here?’ he asked the waiting crowd. ‘No? Really?’ The head went back, the arms up. ‘Yes!’ Minutes later, the car pulled up and Jonny stepped out. ‘Well done,’ Jonny said with disappointment. ‘I'm gutted.’",
      items: [
        {
          q: 31,
          q_text: 'The writer explains that before the race the brothers were alike in',
          opts: [
            'being dressed for difficult conditions.',
            'having plenty of enthusiasm for it.',
            'feeling anxious about the weather.',
            'believing in their own ability to win.',
          ],
          answer: 1,
          explanation: "Jonny 说 'I'm looking forward to it… It's exciting!'，后文 Alistair was similarly eager（同样热切）——相同点是都对比赛充满热情；衣着与信心两处恰是对比而非相似。",
        },
        {
          q: 32,
          q_text: 'What is suggested about the start of the race?',
          opts: [
            'The brothers appeared very uncertain of the route.',
            "Alistair's training had been insufficient.",
            'Jonny had a noticeable advantage.',
            'The brothers tried to avoid eye contact with each other.',
          ],
          answer: 2,
          explanation: 'Alistair 的前几英里就有 25 per cent incline 的陡坡，his work cut out from the start——骑车爬坡对抗汽车，Jonny 的车从一开始就优势明显。',
        },
        {
          q: 33,
          q_text: 'What is suggested about Alistair in the fifth paragraph?',
          opts: [
            'He objected to the situation he found himself in.',
            'He was relieved the hill was easier than expected.',
            'He welcomed an opportunity to prove his ability.',
            'He was distracted by the behaviour of some animals.',
          ],
          answer: 2,
          explanation: '登顶后眼前豁然开朗，a chance to show what he was made of（展示实力的机会），Head down, feet on the pedals, Alistair was picking up speed——他乐于接受这个证明自己的机会。',
        },
        {
          q: 34,
          q_text: "What does 'Bemused' mean in line 51?",
          opts: ['annoyed', 'puzzled', 'distressed', 'disappointed'],
          answer: 1,
          explanation: 'bemused 形容绵羊困惑地凝视着"一个男人肩上扛着自行车站在田里"的怪异景象，bemused = puzzled 困惑不解。',
        },
        {
          q: 35,
          q_text: "In the sixth paragraph, what do we learn about Jonny's progress?",
          opts: [
            'He had to briefly break the speed limit.',
            'He almost drove into some water.',
            'He had to get the car through a tight space.',
            'He nearly lost control of the car.',
          ],
          answer: 2,
          explanation: '村庄的街道建在汽车发明之前，the roads that link them were not exactly made for speed——Jonny 要驶过 absurdly narrow corner，车 slowed to a crawl，说明得把车挤过狭窄空间；过水流是实际发生（passed through a stream），并非"差点"。',
        },
        {
          q: 36,
          q_text: 'How did Alistair react when he reached the end of the race?',
          opts: [
            'He worried his brother had got lost.',
            'He celebrated by jumping off his bike.',
            'He congratulated his brother on his performance.',
            'He was uncertain who the winner was.',
          ],
          answer: 3,
          explanation: "Alistair 冲线后问 'Is he here?'…'No? Really?'——他并不知道弟弟是否已到，即不确定谁赢了比赛。",
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about a dam removal project. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "Removing a dam to restore a river\n\n" +
        "Journalist Richard Lovett is taken to see how a river has come to life again after a dam has been removed\n\n" +
        'Just outside the small town of Stabler in Washington, hydrologist Bengt Coffin surveys a mountain river he helped to revive. Today, the clear waters of Trout Creek run fast between banks covered in young alder trees. But just five years ago, an eight-metre-high concrete wall blocked the river at the site. This dam and the reservoir behind it had changed the river completely and made it difficult for fish such as the endangered steelhead trout to return to where they were born in order to breed. For one thing, the reservoir was full of sediment – mud, sand and gravel. It was Coffin who led the US Forest Service effort to remove the dam.\n\n' +
        'This is all part of a growing trend in the United States. An increasing number of dams are being removed, for financial and environmental reasons. (37) ..... . Some schemes take a slow path, restoring river flow over months or years. Others use explosives and other engineering techniques to drain reservoirs within hours.\n\n' +
        'At Trout Creek, Coffin and his colleagues decided to take the cautious route when removing the ageing Hemlock Dam. (38) ..... . The dam had been designed to include what is called a fish ladder, which allows fish and other animals to bypass the dam and swim upstream, but it was poorly built by modern standards and the number of fish using it had steadily declined.\n\n' +
        "A bigger concern was the reservoir, which had been steadily filling in with sediment. (39) ..... . Coffin holds a hand above his knees to make the point. In the midsummer sun, temperatures in the water could reach 26ºC. 'Too warm for steelhead,' he says.\n\n" +
        'Coffin and others worried that flooding the river with all that sediment would harm the steelhead further downstream. The solution was to divert the river into a big pipe and then hire a fleet of dump trucks to carry away all the sediment. (40) ..... . They then reinforced its banks with logs to stop them from eroding.\n\n' +
        "All those efforts seem to have worked. Just seven hours after water was allowed to flow back, Coffin's team could clearly see the first steelhead venturing into the new channel upstream from the old dam site. But there is another sign of success which Coffin is keen to reveal. (41) ..... . The rounded stones on it range from the size of potatoes to loaves of bread, and make walking difficult. But Coffin is thrilled to see them because they are newly arrived, having just been washed in by the current.\n\n" +
        "The stones in the river provide nesting spots for the steelhead and a habitat for the insects that they eat. (42) ..... . To illustrate this, he turns over a couple of rocks and points out six types of insect clinging to the underside, including caddisfly larvae and a stonefly. 'The year after the dam was removed, these wouldn't have been here,' he adds with satisfaction.",
      options: [
        { label: 'A', text: 'The water there had become so shallow that it was possible for people to wade all the way across.' },
        { label: 'B', text: "'People pay attention to the big fish,' Coffin says. 'Yes, they're an important part of the system, but they're not the only things.'" },
        { label: 'C', text: 'One result of these projects has been an unanticipated research opportunity to study how to minimize the damage caused by releasing huge floods of water and decades of sediment.' },
        { label: 'D', text: 'However, the reservoir lost its water and much of its mud, sand and gravel in three hours.' },
        { label: 'E', text: 'Coffin leads me through patches of alder trees that were planted after the dam was removed, then crosses a rocky beach by the river.' },
        { label: 'F', text: "In the process of doing this, the workers rediscovered the river's original channel along the reservoir bottom." },
        { label: 'G', text: 'Built back in 1935, the structure provided power and irrigation for a nearby tree nursery that shut down in 1997.' },
      ],
      items: [
        { q: 37, answer: 'C', explanation: '前句说"越来越多的大坝因财务和环境原因被拆除"，C 说"这些项目的一个意外结果是提供了研究机会——研究如何把释放巨量洪水与数十年沉积物的破坏降到最低"；后句 Some schemes… Others… 对拆除方式分类，衔接自然。' },
        { q: 38, answer: 'G', explanation: 'G 交代 Hemlock 坝建于 1935 年、曾为附近苗圃供电灌溉（苗圃 1997 年关闭）——补充拆除对象背景；后句 The dam had been designed to include a fish ladder 继续谈坝的设计。' },
        { q: 39, answer: 'A', explanation: '前句说"水库不断被泥沙淤积填塞"，A 说"水已浅得人们可以一路蹚水过河"；后句 Coffin 把手举到膝盖上方比划水深，正呼应 shallow。' },
        { q: 40, answer: 'F', explanation: '前句说"把河水改道进大管、雇自卸卡车车队运走全部泥沙"，F 说"在此过程中，工人们重新发现了水库底部原有的河道"；后句 They then reinforced its banks 的 its 指这条河道。' },
        { q: 41, answer: 'E', explanation: '前句说"Coffin 急于展示另一个成功的迹象"，E 写"他带我穿过坝拆除后栽种的桤木林，来到河边一片石滩"，引出后句对石滩圆石（it 指 rocky beach）的描写。' },
        { q: 42, answer: 'B', explanation: '前句说"石头为鳟鱼提供产卵点、为其捕食的昆虫提供栖息地"，B 引 Coffin 的话"人们关注大鱼，但它们并不是这个系统里唯一重要的东西"；后句 To illustrate this 他翻石展示六种昆虫。' },
      ],
    },
    7: {
      // 原书文章标题 "I gave up my career for something very different"（存档于 passage）
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article in which four people talk about giving up successful careers to do something very different. For questions 43–52, choose from the people (A–D). The people may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage: 'I gave up my career for something very different',
      sections: [
        {
          label: 'A',
          name: 'Mike Donne',
          text:
            "I started doing magic tricks for family and friends when I was about seven, and by sixteen I was performing at big public events. I was also good academically, and studied law at university. Ten years after my degree, I was a busy lawyer with no time for magic, although I missed it. Then, out of the blue, a couple of old friends asked if I'd let them use some of my old material in a touring magic show they were setting up. I agreed but it bothered me that they were doing something I'd always loved, while I was in a job I had very little passion for. So, I joined them. I was very rusty initially, and I had to practise for several months before I felt able to perform in public, but I'm now one of the main acts. Funnily enough, it's been far tougher to make it as a magician than as a lawyer, but I've realised that this is what makes me feel alive.",
        },
        {
          label: 'B',
          name: 'Kristina Mayer',
          text:
            "I used to work for a bank and made enough from that to be in a position to buy my own apartment when I was 22. After a few years, however, dissatisfaction set in. I was just sitting at a computer, manipulating figures, and I longed to get out into the fresh air and move around. Then, one weekend, some friends talked me into going surfing with them. Surprisingly, it appealed to me so much that I ended up spending my days surfing and doing restaurant work in the evenings. I'm now taking part in competitions and I promote surf gear as a professional surfer. At times I can hardly afford to pay the rent, and I sometimes wonder whether leaving the bank was such a good idea, but then I remember I'm doing my favourite thing in the world.",
        },
        {
          label: 'C',
          name: 'Carl Johnson',
          text:
            "Five years ago I was an accountant, well-paid but feeling unfulfilled in my life. Then, my cousin asked if I'd help out at his burger restaurant one weekend when he was short of staff. I'd always liked burgers ever since I was small, but I was surprised at how much I enjoyed making them. Two weeks later I quit my job, hired a van and some equipment, and started selling burgers at street markets. It would've been better to have taken more time doing some proper background research, but what I knew about accounting came in handy, and my enthusiasm made up for my inexperience. I've now acquired a second van and taken on a couple of assistants, so the business is growing. It's incredible to think how much my life has changed.",
        },
        {
          label: 'D',
          name: 'Agnes Porter',
          text:
            "I was a very creative child, but I was taught that success lay in other directions. So I worked hard and ended up as human resources manager of an international company. It was well-paid but I dreamed of starting my own business. So during one holiday last year, I decided to experiment and made cakes for a couple of wedding receptions. They turned out to be very popular and, within a month, I'd resigned from my job and was making cakes full-time. Pushing myself hard to do well is in my nature, so I still work a lot, but I feel more in control of things now. People used to say that having my own business was an unrealistic dream, so demonstrating I could achieve it has been very satisfying. It's just a pity I didn't do it several years ago.",
        },
      ],
      items: [
        { q: 43, q_text: 'is not always confident that they have done the right thing?', answer: 'B', explanation: "Kristina Mayer：'At times I can hardly afford to pay the rent, and I sometimes wonder whether leaving the bank was such a good idea'——时常怀疑自己离开银行是否正确。" },
        { q: 44, q_text: 'is pleased to have proved doubters wrong?', answer: 'D', explanation: "Agnes Porter：'People used to say that having my own business was an unrealistic dream, so demonstrating I could achieve it has been very satisfying'——证明当初质疑的人错了。" },
        { q: 45, q_text: 'says they found success more easily in their first career than in their second?', answer: 'A', explanation: "Mike Donne：'it's been far tougher to make it as a magician than as a lawyer'——第二职业（魔术师）比第一职业（律师）更难成功。" },
        { q: 46, q_text: 'regrets not having changed careers sooner?', answer: 'D', explanation: "Agnes Porter：'It's just a pity I didn't do it several years ago'——遗憾没有几年前就转行。" },
        { q: 47, q_text: 'refers to a time when they needed to gain confidence?', answer: 'A', explanation: "Mike Donne：'I was very rusty initially, and I had to practise for several months before I felt able to perform in public'——重新登台前需要练习数月恢复自信。" },
        { q: 48, q_text: 'mentions a sense of amazement when looking back at the past?', answer: 'C', explanation: "Carl Johnson：'It's incredible to think how much my life has changed'——回顾变化觉得不可思议。" },
        { q: 49, q_text: 'admits that they changed career too suddenly?', answer: 'C', explanation: "Carl Johnson：'It would've been better to have taken more time doing some proper background research'——承认当时转行太仓促。" },
        { q: 50, q_text: 'describes an urge to return to a childhood interest?', answer: 'A', explanation: "Mike Donne：七岁起变魔术、做律师时 'although I missed it'，旧友相邀后重回魔术——渴望回归童年爱好。" },
        { q: 51, q_text: 'says that skills developed in their first career proved useful?', answer: 'C', explanation: "Carl Johnson：'what I knew about accounting came in handy'——第一职业的会计知识派上了用场。" },
        { q: 52, q_text: 'mentions feeling envious at one point?', answer: 'A', explanation: "Mike Donne：'it bothered me that they were doing something I'd always loved, while I was in a job I had very little passion for'——别人做着自己钟爱的事，令他心有不甘（羡慕）。" },
      ],
    },
  },
}
