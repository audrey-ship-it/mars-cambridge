// 标准版2 · Test 4（书内印作 Test 8）Reading and Use of English（书页 74–85；Key: 书 156 / PDF 157，已逐题核对）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；PDF 页 = 书页 + 1。
// 渲染源: D:\workspace_sunny\FCE\1.真题\标准版2\First 2 (updated).pdf 第 75–86 页（2x），
//         书 80 页两处引语用 3x 放大复核（"she once competed against him" / "I've done far less training"）。
// instruction 照录书页原文（含 "Mark your answers on the separate answer sheet." 等句）。
// Part 5 文中 (line 40) 为书页行号标记，供第 34 题引用。
// Part 7 的 passage 字段存文章总标题与副标题（当前 UI 不渲染，仅存档）；四段书页无小标题，name 留空。
const meta = {
  id: 'fce-standard-2-test4-reading',
  title: 'FCE 标准版真题 2 · Test 4 Reading and Use of English',
  level: 'FCE',
  collection: 'Cambridge English First 2（标准版2）',
  book: 'Cambridge English First 2',
  paper: 'Reading and Use of English',
  pages: '书 74–85',
  source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
  answerSource: 'Test 8 Key（书 156 / PDF 157）',
  verified: true,
}

const parts = {
  1: {
    title: 'Part 1 · 选择填空',
    instruction:
      'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
    type: 'mcq_cloze',
    passage:
      'Dr Joseph Bell\n\n' +
      'Dr Joseph Bell was a distinguished Scottish doctor and professor at Edinburgh University in the (0).......... nineteenth century. He had remarkable powers of observation and deduction. This (1).......... him to accumulate useful information about patients in a very (2).......... space of time.\n\n' +
      "He was very good at (3).......... where his patients were from by identifying small differences in their accents. He could also (4).......... a patient's occupation from marks on their hand. He claimed to be able to (5).......... a sailor from a soldier just from the way they moved. If he identified a person as a sailor he would look for any tattoos that might assist him in knowing where their travels had (6).......... them.\n\n" +
      "Dr Bell's skills for observation and deduction (7).......... a great impression on his students, particularly on one called Arthur Conan Doyle. Conan Doyle went on to create the famous fictional detective Sherlock Holmes, whose character was (8).......... on that of Dr Bell.",
    items: [
      { q: 1, opts: ['enabled', 'authorised', 'guaranteed', 'caused'], answer: 0, explanation: 'enable sb to do sth 固定搭配，使他能积累病人信息；authorised（授权）/guaranteed（保证）/caused（导致）与 to accumulate 语义搭配不当。' },
      { q: 2, opts: ['small', 'rapid', 'narrow', 'short'], answer: 3, explanation: 'a very short space of time 短短一段时间，short 修饰时间跨度。' },
      { q: 3, opts: ['showing off', 'working out', 'setting down', 'turning up'], answer: 1, explanation: 'work out 推断出（病人来自哪里）；showing off 炫耀 / setting down 定居 / turning up 出现，语义不合。' },
      { q: 4, opts: ['relate', 'acknowledge', 'solve', 'determine'], answer: 3, explanation: 'determine a patient\u2019s occupation 判断病人的职业。' },
      { q: 5, opts: ['change', 'differ', 'distinguish', 'contrast'], answer: 2, explanation: 'distinguish A from B 固定搭配，区分水手与士兵。' },
      { q: 6, opts: ['transported', 'brought', 'conveyed', 'taken'], answer: 3, explanation: 'where their travels had taken them 旅行把他们带到的地方，take 与 travels 搭配自然。' },
      { q: 7, opts: ['set', 'made', 'formed', 'put'], answer: 1, explanation: 'make a great impression on sb 固定搭配，给学生留下深刻印象。' },
      { q: 8, opts: ['applied', 'established', 'based', 'written'], answer: 2, explanation: 'be based on 以……为原型；福尔摩斯形象以贝尔医生为原型。' },
    ],
  },
  2: {
    title: 'Part 2 · 完形填空',
    instruction:
      'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
    type: 'open_cloze',
    passage:
      'The importance of laughter\n\n' +
      "Psychologists tell us that humour and laughter (0).......... good for our social relationships. Having a good sense of humour is often regarded (9).......... being one of the most important characteristics that people look (10).......... in a friend. In classrooms, a humorous teacher can make learning far (11).......... enjoyable and improve a student's motivation.\n\n" +
      'In one study, students on a psychology course (12).......... split into two different groups: one group was taught with a certain amount of humour, and the other with (13).......... humour at all. Later, when researchers tested the students to see how much they had retained of (14).......... they had heard in the lectures, they found that those (15).......... had attended lectures containing humour scored significantly higher than the other students.\n\n' +
      'Humour and laughter make us feel happy, and our laughter makes others laugh as (16).......... , so if we laugh a lot we may be helping to make other people feel happy.',
    items: [
      { q: 9, answer: ['AS'], show: 'AS', explanation: 'be regarded as 被视为，固定搭配。' },
      { q: 10, answer: ['FOR'], show: 'FOR', explanation: 'look for 寻找（朋友身上看重的特质）。' },
      { q: 11, answer: ['MORE'], show: 'MORE', explanation: 'far more enjoyable，far 修饰比较级 more enjoyable。' },
      { q: 12, answer: ['WERE'], show: 'WERE', explanation: 'students were split into two groups，一般过去时被动语态，主语复数。' },
      { q: 13, answer: ['NO'], show: 'NO', explanation: 'with no humour at all 完全没有幽默，no + 名词。' },
      { q: 14, answer: ['WHAT'], show: 'WHAT', explanation: 'retained of what they had heard，what 引导宾语从句（= the things that）。' },
      { q: 15, answer: ['WHO', 'THAT'], show: 'WHO / THAT', explanation: 'those who/that had attended lectures，先行词 those 的定语从句。' },
      { q: 16, answer: ['WELL'], show: 'WELL', explanation: 'makes others laugh as well 也让别人发笑。' },
    ],
  },
  3: {
    title: 'Part 3 · 词形变换',
    instruction:
      'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
    type: 'word_formation',
    passage:
      'A man happy in his work\n\n' +
      'Flying has always had a (0) FASCINATION for me. During my childhood I was often taken to air shows, where I could see planes close up and even go inside them. However, it was not until I was twenty that I made the (17)_____ to apply for an eighteen-month training course to become a pilot. There was no funding available for students on this course so (18)_____ I had to wait six months for a suitable job (19)_____ , but then the (20)_____ I had shown was rewarded when I got a job with a large airline.\n\n' +
      "I've been a pilot for three years now, and I remain just as (21)_____ about flying. I love the modern jet aircraft with all their sophisticated equipment as well as the (22)_____ of challenges that occur on a (23)_____ basis. And, of course, it's wonderful to visit places all over the world, not to mention the (24)_____ views I get when I'm flying.",
    items: [
      { q: 17, given: 'DECIDE', answer: ['DECISION'], show: 'DECISION', explanation: 'decide → decision，make the decision to do sth 做出决定。' },
      { q: 18, given: 'FORTUNATE', answer: ['UNFORTUNATELY'], show: 'UNFORTUNATELY', explanation: 'fortunate → unfortunately，副词修饰整句；语境（没有资金）需否定副词。' },
      { q: 19, given: 'VACANT', answer: ['VACANCY'], show: 'VACANCY', explanation: 'vacant → vacancy，a suitable job vacancy 合适的职位空缺。' },
      { q: 20, given: 'COMMIT', answer: ['COMMITMENT'], show: 'COMMITMENT', explanation: 'commit → commitment，the commitment I had shown 我所展现的投入。' },
      { q: 21, given: 'ENTHUSIASM', answer: ['ENTHUSIASTIC'], show: 'ENTHUSIASTIC', explanation: 'enthusiasm → enthusiastic，remain + 形容词，be enthusiastic about 对……热情。' },
      { q: 22, given: 'VARY', answer: ['VARIETY'], show: 'VARIETY', explanation: 'vary → variety，the variety of challenges 各种各样的挑战。' },
      { q: 23, given: 'DAY', answer: ['DAILY'], show: 'DAILY', explanation: 'day → daily，on a daily basis 每天。' },
      { q: 24, given: 'SPECTACLE', answer: ['SPECTACULAR'], show: 'SPECTACULAR', explanation: 'spectacle → spectacular，the spectacular views 壮观的景色。' },
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
        stem: 'Tom was so tired that he did not even get undressed before he lay down on his bed.',
        key: 'TAKE',
        answer: ['take his clothes off', 'take off his clothes'],
        show: 'take his clothes off / take off his clothes',
        explanation: 'get undressed → take his clothes off / take off his clothes，代词宾语须放 take 与 off 之间。',
      },
      {
        q: 26,
        stem: "It was Samantha's responsibility to ring all the members of the team.",
        key: 'RESPONSIBLE',
        answer: ['was responsible for ringing', 'was responsible for calling', 'was responsible for telephoning', 'was responsible for phoning'],
        show: 'was responsible for ringing / calling / (tele)phoning',
        explanation: "It was sb's responsibility to do → sb was responsible for doing；ring = call / telephone / phone。",
      },
      {
        q: 27,
        stem: 'I had expected to enjoy the film more than I did.',
        key: 'AS',
        answer: ['not as enjoyable as', "n't as enjoyable as"],
        show: "not / n't as enjoyable as",
        explanation: 'had expected more → 实际不如预期，not as enjoyable as 同级比较的否定。',
      },
      {
        q: 28,
        stem: 'Helen finally managed to think of a solution to her problem.',
        key: 'COMING',
        answer: ['in coming up with', 'in coming to'],
        show: 'in coming up with / in coming to',
        explanation: 'manage to think of → succeed in coming up with / in coming to，succeed 后接 in + 动名词。',
      },
      {
        q: 29,
        stem: 'My sister regrets buying a second-hand car.',
        key: 'WISHES',
        answer: ['wishes she had not bought', "wishes she hadn't bought"],
        show: "wishes she had not / hadn't bought",
        explanation: 'regrets doing（对过去的事后悔）→ wishes + 过去完成时，对过去的虚拟。',
      },
      {
        q: 30,
        stem: 'I was late for work because I missed my bus.',
        key: 'ACCOUNT',
        answer: ['on account of missing'],
        show: 'on account of missing',
        explanation: 'because I missed → on account of missing，介词短语后接动名词。',
      },
    ],
  },
  5: {
    title: 'Part 5 · 阅读选择',
    instruction:
      'You are going to read a newspaper article about a polar explorer. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
    type: 'reading_mcq',
    passage:
      'Pen Hadow – polar explorer\n\n' +
      'The explorer is risking his life in the Arctic again, this time for all of us. Cole Moreton reports.\n\n' +
      'In 2004, Pen Hadow became the first person to trek to the North Pole alone, without being resupplied on the way. That meant swimming through unbearably cold waters, fighting frostbite and risking encounters with polar bears. Just eight months later, he made a similar trip to the South Pole. Now he is back in the Arctic again, preparing for an expedition he says is even more ambitious. Explorers are confident, driven individuals. They have to be. This time, however, there is far more at stake. Pen and two colleagues will set out on a three-month, 1,000-kilometre trek to the North Pole, taking detailed measurements of the thickness and density of the ice. Nobody has ever done this before, and he knows the results will be of vital importance to the scientific community. This will be the truest picture yet of what global warming is doing to the ice that covers the polar region.\n\n' +
      "Pen is married to Mary, a horsewoman, who says he has 'a spine of steel' and who shares his love of the outdoors. She helps to run his polar guide business and claims to be more worried about him when he's at home: 'He's in more danger driving along the motorway because I know that in his head he's somewhere in the Arctic.' For fun, she once competed against him in a famous mountain event in which riders on horseback race against people on foot. Mary and her horse finished an hour ahead of Pen.\n\n" +
      "Pen and Mary live in the country with their two children. 'It's much harder to be away from them this time,' he admits. 'They were one and five when I last went, and I made a mistake in the way I said goodbye. I thought it would be a good idea to say to my son, \"You're the man of the house now, look after your mum and your sister.\" (line 40) He absolutely took it to heart, asking his mum how she was all the time, but the strain eventually became too much. While it was well intentioned, it was an unfair thing to do.' For similar reasons he is planning to have very little contact with them while in the Arctic. 'If you call them, you remind them how far away you are.'\n\n" +
      "He is spending these last days before departure preparing his kit, obsessively. 'Out on the ice, one is virtually incapable of mending things or doing anything that isn't absolutely straightforward,' he says. With him will be Ann Daniels, one of the world's leading polar explorers, and the expedition photographer, Martin Hartley. They will be supported by a crew of six, flying in supplies. Being part of a team is actually more stressful to someone with his mentality, says Pen, and something else is on his mind too. 'I'm going to be 47 on Thursday. I've done far less training than I'm comfortable with.' Why? 'Organisational things always seem more urgent. So I'm almost fearful of what I'm going to ask of myself.'\n\n" +
      "Pen believes his mission reconnects exploration with the search for knowledge that drove previous generations into the unknown. 'Making it to the North Pole was ultimately a personal ambition,' he admits, 'and of limited value to anyone beyond the polar adventure community. This time, scientists will profit from the data, and we're creating a platform from which to engage as many people as possible in what's happening in the Arctic Ocean. This is important work, and nobody can do it but us,' he says. 'Our skills, which are otherwise bizarre and socially redundant, have become hyper-relevant. Suddenly, we're socially useful again.'",
    items: [
      {
        q: 31,
        q_text: "In the first paragraph, what do we learn about Pen Hadow's opinion of the new expedition?",
        opts: [
          'He feels certain that it will be successful.',
          'He thinks it may be harder than his previous journeys.',
          'He is aware of the huge significance of its aims.',
          'He is looking forward to the scientific work it will involve.',
        ],
        answer: 2,
        explanation: '首段 results will be of vital importance to the scientific community、the truest picture yet……他清楚此行对科学界的重大意义。',
      },
      {
        q: 32,
        q_text: 'What does Mary Hadow think about her husband?',
        opts: [
          "He isn't as determined as she is.",
          "He can't run as quickly as he thinks he can.",
          "He hasn't got enough time to manage his business properly.",
          'He finds it hard to think about anything except his expeditions.',
        ],
        answer: 3,
        explanation: 'Mary 说 he\u2019s in more danger driving along the motorway because in his head he\u2019s somewhere in the Arctic——在家时心仍在北极，除了探险难想其他。',
      },
      {
        q: 33,
        q_text: 'When talking about leaving his children for long periods, Pen mentions feeling',
        opts: [
          'ashamed that his wife has had to look after them so much.',
          'guilty that he once added to the pressure caused by his absence.',
          'sad that he is missing so much of their growing up.',
          "sorry that he can't telephone more often.",
        ],
        answer: 1,
        explanation: '他让儿子 You\u2019re the man of the house…，儿子 took it to heart 以致 the strain eventually became too much，他承认 it was an unfair thing to do——为曾给孩子增添压力而内疚。',
      },
      {
        q: 34,
        q_text: "What does 'took it to heart' mean in line 40?",
        opts: [
          "He memorised his father's words.",
          "He carried out his father's words precisely.",
          'He started to feel unwell.',
          'He was afraid of the responsibility.',
        ],
        answer: 1,
        explanation: 'took it to heart 指儿子把父亲的话放在心上并切实照办——asking his mum how she was all the time。',
      },
      {
        q: 35,
        q_text: 'What is worrying Pen about the new expedition?',
        opts: [
          'whether he will still be fit enough to take part',
          'whether he will be mentally prepared',
          'whether the equipment will work properly in icy conditions',
          'whether the arrangements he has made will turn out well',
        ],
        answer: 0,
        explanation: 'I\u2019ve done far less training than I\u2019m comfortable with——担心体能/训练量不足以参赛。',
      },
      {
        q: 36,
        q_text: 'When he compares the new expedition to his previous ones, Pen feels',
        opts: [
          'pleased that more people will benefit from it.',
          'uncertain if it will collect information.',
          'doubtful about its long-term usefulness.',
          'relieved that the general public will be more supportive.',
        ],
        answer: 0,
        explanation: '末段 scientists will profit from the data…engage as many people as possible…Suddenly, we\u2019re socially useful again——更多人将从中受益令他欣慰。',
      },
    ],
  },
  6: {
    title: 'Part 6 · 段落匹配',
    instruction:
      'You are going to read an article about the sport of inline skating. Six sentences have been removed from the text. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
    type: 'paragraph_matching',
    passage:
      'Inline Skating\n\n' +
      'The popularity of inline skating is growing all the time.\n\n' +
      "No doubt about it, inline skating is one of the world's most popular street sports. Different people call it different things. Rollerblade was the original American skate manufacturer and that's why many call it rollerblading. Others shorten this to blading, while still others prefer inline skating (because the wheels on each skate are in line).\n\n" +
      '(37) Inline skating has taken the concept of self-propelled wheels into a new dimension which allows skaters of the most basic ability to move with grace, speed and style, and feel good about doing it. A huge attraction is that you can do it anywhere there is a smooth, hard surface and if you\u2019re really keen, you can even do it off-road too.\n\n' +
      "But the very popularity of the sport everywhere has created something of a problem. The 'Ban all Skaters' group, made up of opponents of the sport, has never been far behind. (38) No matter – people will keep on skating however they can.\n\n" +
      "So the difficulty lies in changing the attitude of established local authorities, which are so often dominated by older people who have no concept of the joy of inline skating, don't want anything to do with it, and simply dismiss the sport as a branch of the current youth culture they can do without.\n\n" +
      'We know they are wrong. (39) It is a sport which offers everyone a brilliant way to get up off the couch, whizz around outside, have fun, get fit, get involved, develop skills and learn team-work.\n\n' +
      "In time, all skaters will be allowed to go about their business and co-exist in harmony with other users of tarmac. (40) So skaters should take care not to adopt a selfish attitude to others, because annoying people might eventually lead to a situation where the skaters' own enjoyment or freedom of movement is curtailed.\n\n" +
      'Kids as young as five or six can learn to skate well. (41) And in between those two extremes skating is no less important as a way for those in their teen years to avoid the trap of urban boredom, which can create problems in contemporary society.\n\n' +
      'To qualify as an inline skater, you just have to get through the basics of pushing off, turning and stopping – all easy techniques which most people can learn to handle in half a dozen sessions. (42) Next you can learn to skate faster, turn tighter, stop faster, skate through slalom cones (just use tin cans) forwards and maybe backwards. Then you can learn how to go up and down hills and perhaps some clever tricks as well.',
    options: [
      { label: 'A', text: 'Inline skating is not just about kids whose wishes can be ignored.' },
      { label: 'B', text: "Once up and running, it's all about consolidating what's been learned, enjoying the feel of your wheels and getting better." },
      { label: 'C', text: 'They all add up to the great new world of inlining.' },
      { label: 'D', text: "What's more, with all the right padding and protection, adults can start to skate safely at an age when they are collecting their pensions." },
      { label: 'E', text: "In some areas it has been successful in implementing notorious and strict skating prohibitions, such as the closure of most of London's parks to skaters." },
      { label: 'F', text: "The name doesn't really matter; it's the impact it has had that is important." },
      { label: 'G', text: "Indeed, it's all about the right to enjoy life's little – and not so little – pleasures." },
    ],
    items: [
      { q: 37, answer: 'F', explanation: '前文罗列 rollerblading / blading / inline skating 等名字，F 项“名字并不重要，重要的是它产生的影响”承上启下，引出这种运动的新境界。' },
      { q: 38, answer: 'E', explanation: 'E 项“在一些地方它成功实施了严苛的禁令（如伦敦公园禁滑）”，具体化 Ban all Skaters group 的“从未远离”；后句 No matter（不要紧）转折。' },
      { q: 39, answer: 'A', explanation: 'A 项“直排轮滑不只是孩子们的愿望可被忽视的事”，与 We know they are wrong 衔接，并引出后文 offers everyone（人人可参与）。' },
      { q: 40, answer: 'G', explanation: 'G 项“这是享受生活乐趣的权利”，呼应与其他路面使用者和谐共享，并引出 So skaters should take care…（所以要小心别自私）。' },
      { q: 41, answer: 'D', explanation: 'D 项“成年人也可以在领养老金的年纪开始安全地滑”，与“五六岁的孩子”构成两个极端，后句 And in between those two extremes（两者之间的青少年）承接。' },
      { q: 42, answer: 'B', explanation: 'B 项“一旦上路，关键在于巩固所学、享受轮感、不断进步”，承接学完基础，引出 Next you can learn…（下一步进阶技巧）。' },
    ],
  },
  7: {
    title: 'Part 7 · 多文本匹配',
    instruction:
      'You are going to read an article about a psychology test carried out on very young children. For questions 43–52, choose from the sections (A–D). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
    type: 'multiple_matching',
    passage:
      'The Marshmallow Test\n\n' +
      'A psychology experiment carried out with a group of pre-school children in California in 1968 led to the development of ideas that are still relevant today.',
    sections: [
      {
        label: 'A',
        name: '',
        text:
          'In 1968, Walter Mischel set a challenge for a group of children aged three to five at the nursery school his daughters attended in California. A researcher offered each of them a marshmallow and then left them alone in the room. If they could resist eating the colourful sweet until the researcher returned up to 15 minutes later, they would be given a second sweet. Some children ate the marshmallow straight away, but most would engage in unintentionally comic attempts to resist temptation. They looked all around the room to avoid seeing the sweet, covered their eyes, wiggled around in their seats or sang to themselves. They pulled funny faces, played with their hair, picked up the marshmallow and then pretended to take a bite. They smelt it, pushed it away from them or covered it up. If two children were doing the experiment together, they engaged in a conversation about how they could work together to reach the goal of doubling their pleasure. About a third of the children, the researchers reported, managed to wait long enough to get the second treat.',
      },
      {
        label: 'B',
        name: '',
        text:
          "What Mischel, a clinical psychologist, wanted was to understand how children learned to deal with temptation. Over the following years, the group of children remained friends. When Mischel chatted to his daughters about their former classmates, he began to notice an interesting pattern. The children who had exhibited the most restraint in the marshmallow test 'were doing better in life than their peers'. He decided to investigate further. For more than 40 years, Mischel followed the lives of the nursery students. His findings were extraordinary. It turns out that being able to resist a treat at the age of five is a strong predictor of success in life: you are more likely to perform well at school and develop self-confidence and less likely to become obese, develop addictions or get divorced.",
      },
      {
        label: 'C',
        name: '',
        text:
          "Mischel still teaches psychology at Columbia University and has just written The Marshmallow Test, a book summing up half a century of research. When Mischel was young, his family was forced to move from a comfortable life in Austria to the US. They settled in Brooklyn, where they opened a bargain shopping store. Business was never good and Mischel believes that moving from 'upper middle class to extreme poverty' shaped his outlook. He is concerned with trying to reduce the impact of deprivation on an individual's life chances. The conclusion he draws from his marshmallow research is positive: some people may be naturally disciplined, but the ability to resist temptation is a skill that can also be taught. Teach children self-control early and you can improve their prospects.",
      },
      {
        label: 'D',
        name: '',
        text:
          "However, no single characteristic – such as self-control – can explain success or failure. Some critics have pointed out that Mischel's original subjects were themselves children of university professors and graduate students – not exactly a representative sample. Other scientists noted that variations in home environment could account for differences: stable homes and one-child families encourage self-control, whereas in less stable homes and those with many children, you won't grab a marshmallow now – there won't be any in 15 minutes. Mischel answers these critics by noting that studies in a wide variety of schools found similar results. He acknowledges that the environment shapes our ability to resist temptation and observes that genetics plays a role too. But he still believes that the ability to resist temptation can be learnt and encouraged. I asked Mischel whether self-control comes easily to him. 'Not at all,' he said. 'I have great difficulties in waiting. It's still difficult for me to wait in a queue in the bank.'",
      },
    ],
    items: [
      { q: 43, q_text: "how a child's background can affect behaviour?", answer: 'D', explanation: 'D 段：variations in home environment could account for differences——stable homes encourage self-control（家庭背景影响自控行为）。' },
      { q: 44, q_text: "that the results of Mischel's long-term research were surprising?", answer: 'B', explanation: 'B 段：His findings were extraordinary（40 年追踪的结果非同寻常）。' },
      { q: 45, q_text: 'reasons for questioning the results of the original experiment?', answer: 'D', explanation: 'D 段：批评者指出 original subjects 不是 representative sample，家庭环境差异也可解释结果差异。' },
      { q: 46, q_text: 'claims that training young children to resist temptation will have long-term benefits?', answer: 'C', explanation: 'C 段：the ability to resist temptation is a skill that can also be taught. Teach children self-control early and you can improve their prospects。' },
      { q: 47, q_text: 'the proportion of very young children who were able to resist temptation?', answer: 'A', explanation: 'A 段：About a third of the children managed to wait long enough to get the second treat。' },
      { q: 48, q_text: 'an everyday example of the need for self-control?', answer: 'D', explanation: 'D 段：It\u2019s still difficult for me to wait in a queue in the bank（银行排队等日常自控例子）。' },
      { q: 49, q_text: 'that Mischel may have oversimplified the route to success in life?', answer: 'D', explanation: 'D 段：no single characteristic – such as self-control – can explain success or failure（仅凭自控不能解释成败）。' },
      { q: 50, q_text: "that Mischel's own life experience has influenced his work?", answer: 'C', explanation: 'C 段：moving from \u2018upper middle class to extreme poverty\u2019 shaped his outlook（自身经历塑造了他的研究视角）。' },
      { q: 51, q_text: 'strategies employed by participants during the test procedure?', answer: 'A', explanation: 'A 段：孩子们 covered their eyes, wiggled around…, pretended to take a bite 等抵御诱惑的小策略。' },
      { q: 52, q_text: "two major factors which affect everyone's ability to resist temptation?", answer: 'D', explanation: 'D 段：the environment shapes our ability… and genetics plays a role too（环境与基因两大因素）。' },
    ],
  },
}

export default { meta, parts }
