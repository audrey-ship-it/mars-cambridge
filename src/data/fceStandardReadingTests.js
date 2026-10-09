// FCE 标准版真题 1–4 · Reading and Use of English（16 套，每册 4 套）
// 来源（用户原件，扫描版无文本层，逐页视觉转录 + 官方 Key 逐题核对）:
//   标准版1: D:\workspace_sunny\FCE\1.真题\标准版1\cen_first_1_with_answers .pdf (183页; PDF页=书页-1)
//   标准版2: D:\workspace_sunny\FCE\1.真题\标准版2\First 2 (updated).pdf (189页)
//   标准版3: D:\workspace_sunny\FCE\1.真题\标准版3\First 3.pdf (195页)
//   标准版4: D:\workspace_sunny\FCE\1.真题\标准版4\B2 FIRST 4 WITH ANSWERS.pdf (178页)
// 数组顺序: 册1 T1..T4, 册2 T1..T4, 册3 T1..T4, 册4 T1..T4（registry 按此索引）
// meta.id 规范: 'fce-standard-<册>-test<套>-reading'; examKey: 'fce-standard-<册>-test<套>'
// 录入状态见各 meta.verified；未录入的套题为 null 占位。

// ===== 标准版1 · Test 1（书页 8–19；Key: 书页 120/PDF 119，已逐题核对）=====
const STD1_T1 = {
  meta: {
    id: 'fce-standard-1-test1-reading',
    title: 'FCE 标准版真题 1 · Test 1 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Reading and Use of English',
    pages: '书 8–19',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 1 Key（书 120 / PDF 119）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
      type: 'mcq_cloze',
      passage:
        'Why we need to play\n\n' +
        'Human beings are not the only creatures that like to (0).......... fun. Many animals play, as do some birds. However, no other creatures spend so much time enjoying themselves as human beings do. Indeed, we (1).......... onto our sense of fun right into adulthood.\n\n' +
        'So why do human beings spend so much time playing? One reason is that we have time for leisure; animals have very little time to play as most of their life is spent sleeping and (2).......... food.\n\n' +
        'So, is play just an opportunity for us to (3).......... in enjoyable activities or does it have a more important (4).......... ? According to scientists, (5).......... from being fun, play has several very real (6).......... for us – it helps our physical, intellectual and social development. It also helps to (7).......... us for what we have not yet experienced. With very (8).......... risk, we can act out what we would do in unexpected, or even dangerous, situations.',
      items: [
        { q: 1, opts: ['hold', 'keep', 'save', 'stay'], answer: 0, explanation: 'hold onto 固定搭配，"把玩乐感一直保持到成年"。' },
        { q: 2, opts: ['searching', 'looking', 'seeking', 'gaining'], answer: 2, explanation: 'seek 为及物动词可直接接宾语；search/look 后需加 for。spent sleeping and seeking food。' },
        { q: 3, opts: ['engage', 'combine', 'contribute', 'involve'], answer: 0, explanation: 'engage in enjoyable activities 固定搭配"参与"。' },
        { q: 4, opts: ['motive', 'purpose', 'intention', 'cause'], answer: 1, explanation: 'a more important purpose 更重要的目的。' },
        { q: 5, opts: ['excluding', 'except', 'apart', 'away'], answer: 2, explanation: 'apart from being fun 固定搭配"除了有趣之外"。' },
        { q: 6, opts: ['assets', 'profits', 'services', 'benefits'], answer: 3, explanation: 'several very real benefits for us 对我们有实实在在的好处。' },
        { q: 7, opts: ['plan', 'prepare', 'practise', 'provide'], answer: 1, explanation: 'prepare us for what we have not yet experienced 为未经历的事做准备。' },
        { q: 8, opts: ['brief', 'short', 'narrow', 'little'], answer: 3, explanation: 'With very little risk 修饰不可数名词 risk 用 little。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'open_cloze',
      passage:
        'A bicycle you can fold up\n\n' +
        'Folding bicycles have (0).......... around for quite some time now. However, an amazing new Japanese version (9).......... be folded with a swiftness and efficiency never seen before. This bike is designed (10).......... that it is possible to fold it up quickly. Once folded, you pull the bike along (11).......... ease.\n\n' +
        'This remarkable bike has a half-folding frame with a hinge in the middle. And, although the basic idea is (12).......... original, its inventor has created an especially clever variation, combining compactness (13).......... convenience with smart design.\n\n' +
        'Recently, folding bicycles (14).......... become very popular in Japan, particularly in congested urban areas like Tokyo, a city (15).......... every square centimetre of space is in great demand. Japanese cyclists need to be able to store their bikes in tiny areas at home or the office. And (16).......... they should want to take their bicycle on the underground, a folding model is a big advantage.',
      items: [
        { q: 9, answer: ['CAN', 'MAY'], show: 'CAN / MAY', explanation: 'can/may be folded 能够被折叠。' },
        { q: 10, answer: ['SO'], show: 'SO', explanation: 'designed so that 固定搭配"设计成以便"。' },
        { q: 11, answer: ['WITH'], show: 'WITH', explanation: 'with ease 轻易地，毫不费力地。' },
        { q: 12, answer: ['NOT', 'HARDLY', 'SCARCELY'], show: 'NOT / HARDLY / SCARCELY', explanation: 'although the basic idea is not original 基本思路并非原创。' },
        { q: 13, answer: ['AND'], show: 'AND', explanation: 'combining compactness and convenience 兼具紧凑与便利。' },
        { q: 14, answer: ['HAVE'], show: 'HAVE', explanation: 'folding bicycles have become 现在完成时，主语复数。' },
        { q: 15, answer: ['WHERE'], show: 'WHERE', explanation: 'a city where 引导定语从句修饰 city。' },
        { q: 16, answer: ['IF'], show: 'IF', explanation: 'And if they should want to… 如果他们想带自行车坐地铁。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'word_formation',
      passage:
        'Tea\n\n' +
        'Tea is an (0) EXTREMELY popular drink with many people. It is estimated that the consumption of tea in England alone exceeds 165 million cups daily. Despite this, the drink was virtually (17)_____ in England until about 400 years ago. The first (18)_____ to tea in England comes in a diary written in 1660. However, its (19)_____ really took off after the (20)_____ of King Charles II to Catherine of Braganza. It was her great love of tea that made it (21)_____.\n\n' +
        'It was believed that tea was good for people as it seemed to be capable of reviving the spirits and curing certain minor (22)_____. It has even been suggested by some historians that it played a significant part in the Industrial Revolution. Tea, they say, increased the number of hours that (23)_____ could work in factories as the caffeine in tea made them more (24)_____ and consequently able to work longer hours.',
      items: [
        { q: 17, given: 'KNOW', answer: ['UNKNOWN'], show: 'UNKNOWN', explanation: 'know → unknown 不为人知的（until about 400 years ago 提示否定前缀 un-）。' },
        { q: 18, given: 'REFER', answer: ['REFERENCE'], show: 'REFERENCE', explanation: 'refer → reference 提及；the first reference to tea 首次提到茶。' },
        { q: 19, given: 'POPULAR', answer: ['POPULARITY'], show: 'POPULARITY', explanation: 'popular → popularity 受欢迎程度（its 后接名词）。' },
        { q: 20, given: 'MARRY', answer: ['MARRIAGE'], show: 'MARRIAGE', explanation: 'marry → marriage 婚姻；the marriage of Charles II。' },
        { q: 21, given: 'FASHION', answer: ['FASHIONABLE'], show: 'FASHIONABLE', explanation: 'fashion → fashionable 时髦的（made it + 形容词）。' },
        { q: 22, given: 'ILL', answer: ['ILLNESSES'], show: 'ILLNESSES', explanation: 'ill → illnesses 疾病（minor 后接复数名词）。' },
        { q: 23, given: 'LABOUR', answer: ['LABOURERS'], show: 'LABOURERS', explanation: 'labour → labourers 劳工（that could work in factories）。' },
        { q: 24, given: 'ENERGY', answer: ['ENERGETIC'], show: 'ENERGETIC', explanation: 'energy → energetic 精力充沛的（made them more + 形容词）。' },
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
          stem: "They didn't sell many programmes at the match.",
          key: 'FEW',
          answer: ['few programmes were sold'],
          show: 'few programmes were sold',
          explanation: "many programmes → very few programmes；被动语态 were sold。",
        },
        {
          q: 26,
          stem: 'We got to work late because we decided to drive rather than take the train.',
          key: 'INSTEAD',
          answer: ['instead of taking', 'instead of catching', 'instead of getting'],
          show: 'instead of taking / catching / getting',
          explanation: 'rather than take the train → instead of taking/catching/getting the train。',
        },
        {
          q: 27,
          stem: 'Last Friday was the first time my car ever broke down, even though it is very old.',
          key: 'NEVER',
          answer: ['had never broken', "'d never broken"],
          show: "had / 'd never broken",
          explanation: 'Until last Friday 用过去完成时：my car had never broken down。',
        },
        {
          q: 28,
          stem: "'All your complaints will be investigated by my staff tomorrow,' said the bank manager.",
          key: 'LOOK',
          answer: ['would look into', 'would look at'],
          show: 'would look into / at',
          explanation: '间接引语 will → would；investigate → look into/at。',
        },
        {
          q: 29,
          stem: 'Last year the heavy rain caused the postponement of the tennis tournament.',
          key: 'BECAUSE',
          answer: ['was postponed because it rained', 'got postponed because it rained'],
          show: 'was / got postponed because it rained',
          explanation: 'caused the postponement → was/got postponed；因果用 because it rained。',
        },
        {
          q: 30,
          stem: 'Jack does not want to work for his uncle any longer.',
          key: 'CARRY',
          answer: ['to carry on working'],
          show: 'to carry on working',
          explanation: 'not want to work any longer → does not want to carry on working。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read a magazine article about a famous pianist and the young student who became his pupil. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
      type: 'reading_mcq',
      passage:
        'A musician and his pupil\n\n' +
        'Paul Williams interviews the famous pianist Alfred Brendel.\n\n' +
        "Over six decades the pianist Alfred Brendel gradually built up and maintained a dominant position in the world of classical music. He was an intellectual, sometimes austere, figure who explored and recorded the mainstream European works for the piano. He wrote and played a great deal, but taught very little. Those who knew him best glimpsed a playful side to his character, but that was seldom on display in his concerts. It was a disciplined, never-ending cycle of study, travel and performance.\n\n" +
        "And then, four or five years ago, a young boy, Kit Armstrong, appeared backstage at one of Brendel's concerts and asked for lessons. Initially, Brendel didn't take the suggestion very seriously. He had had very few pupils and he saw no reason to start now. He quotes from another famous pianist: 'You don't employ a mountain guide to teach a child how to walk.' But there was something that struck him about the young boy – then about 14. He listened to him play. Brendel explained, 'He played remarkably well and by heart. Then he brought me a CD of a little recital he had given where he played so beautifully that I thought to myself, 'I have to make time for him.' It was a performance that really led you from the first to the last note. It's very rare to find any musician with this kind of overview and the necessary subtlety.'\n\n" +
        "As Brendel is bowing out of the public eye, so Kit is nudging his way into it – restrained by Brendel, ever nervous about the young man burning out early. Kit, now 19, is a restless, impatient presence away from the lessons – always learning new languages; taking himself off to study maths, writing computer code or playing tennis. All under the watchful eye of his ever-present mother. On top of all that he composes. 'This was very important,' Brendel says. 'If you want to learn to read music properly it is helped by the fact that you try to write something yourself. Then I noticed that Kit had a phenomenal memory and that he was a phenomenal sight reader. But more than this is his ability to listen to his own playing, his sensitivity to sound and his ability to listen to me when I try to explain something. He not only usually understands what I mean, but he can do it. And when I tell him one thing in a piece, he will do it everywhere in the piece where it comes in later.'\n\n" +
        "Brendel catches himself and looks at me severely. (line 50) 'Now I don't want to raise any expectations. I very cross if some newspapers try to do this. There was one article which named him as the future great pianist of the 21st century. I mean, really, it's the worst thing. One doesn't say that in a newspaper. And it has done a great deal of harm. As usual, with gifted young players, he can play certain things amazingly well, while others need more time and experience. It would be harmful if a critic was there expecting the greatest perfection.'\n\n" +
        "It is touching to see the mellowness of Brendel in his post-performing years. He explains 'When I was very young, I didn't have the urge to be famous in five years' time, but I had the idea I would like to have done certain things by the age of 50. And when I was 50, I thought that I had done most of those things, but there was still some leeway for more, so I went on. Although I do not have the physical power to play now, in my head, there are always things going on, all sorts of pieces that I've never played. I don't play now but it's a very nice new career.'",
      items: [
        {
          q: 31,
          q_text: 'What is the writer emphasising in the first paragraph?',
          opts: [
            'the wide range of music that Brendel has played',
            'the total dedication of Brendel to his art',
            'the reluctance of Brendel to take on pupils',
            "the light-hearted nature of Brendel's character",
          ],
          answer: 1,
          explanation: '首段 never-ending cycle of study, travel and performance、disciplined 等强调 Brendel 对艺术的全身心投入。',
        },
        {
          q: 32,
          q_text: 'Brendel uses the quotation about the mountain guide to illustrate that',
          opts: [
            'it is not always easy to teach people the basics.',
            'it is unwise to try to teach new skills before people are ready.',
            'people can learn new skills without help from others.',
            'it is unnecessary for an expert to teach people the basics.',
          ],
          answer: 3,
          explanation: '登山向导教孩子走路的比喻说明让孩子学走路无需专家，即"基础技能不必由专家来教"。',
        },
        {
          q: 33,
          q_text: 'What made Brendel first decide to accept Kit as a pupil?',
          opts: [
            'He seemed so young and serious.',
            'He was so determined and persistent.',
            'He could play without the music.',
            'He had an extraordinary talent.',
          ],
          answer: 3,
          explanation: 'Brendel 听了 Kit 的演奏后评价 played remarkably well and by heart、rare to find any musician with this kind of overview——非凡的天赋打动了他。',
        },
        {
          q: 34,
          q_text: "Which of Kit's musical abilities does Brendel admire the most?",
          opts: [
            'He is able to write music himself.',
            'He is able to understand and respond to advice.',
            'He can play a piece of music the first time he sees it.',
            'He is able to remember all the music he has ever played.',
          ],
          answer: 1,
          explanation: 'But more than this is his ability to listen to… when I try to explain something——最推崇的是理解并响应指导的能力。',
        },
        {
          q: 35,
          q_text: "Why does the writer use the phrase 'catches himself' in line 50?",
          opts: [
            'He realises he has said too much to a journalist.',
            "He doesn't enjoy giving interviews to journalists.",
            "He wants to be careful he doesn't upset any music critics.",
            'He resents the way that he has often been misquoted.',
          ],
          answer: 0,
          explanation: 'Brendel 一路夸奖 Kit 后突然收住话头（catches himself），意识到对记者说得太多了。',
        },
        {
          q: 36,
          q_text: 'What is Brendel doing in the final paragraph?',
          opts: [
            'justifying his lack of ambition when he was young',
            'expressing regret at the loss of his physical strength',
            'describing his present state of mind',
            'explaining which pieces he prefers to play now',
          ],
          answer: 2,
          explanation: '末段讲他现在的感受与心态：in my head, there are always things going on… it\u2019s a very nice new career。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read a newspaper article about a blind runner. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
      type: 'paragraph_matching',
      passage:
        'Blind Runner\n\n' +
        'Paul Hardy reports on a blind runner called Simon Wheatcroft who enjoys taking part in marathon and ultra-marathon races, running distances between 42 km and 160 km.\n\n' +
        'Running marathons, a race of 42 km, has become increasingly popular. This distance poses extreme physical and mental challenges for anyone, but for Simon Wheatcroft there is another hurdle; he has been blind since he was 18 years old.\n\n' +
        "For the past two years Simon, now 29, has been overcoming his disability to compete in marathons and ultra-marathons by training with runners who act as his guides, and also, rather uniquely, by teaching himself to run solo, out on the streets. 'I got bored exercising indoors, so thought, 'I'll have a go at running outside',' he explains. (37) Then he got bored again and wanted to try running on the roads.\n\n" +
        'Weeks of gradual exploration followed, walking a route alone. (38) It took him along little-used pavements alongside a busy main road. He also recruited technology to help him form his mental map of the area using a smartphone app, to provide feedback through headphones about his pace and distance. This information could then be cross-referenced with his knowledge of the route and any obstacles.\n\n' +
        "Now, having covered hundreds of km alone on the route, Simon has been able, gradually, to phase out the app. 'When I first started I had to really concentrate to an unbelievable level to know where my feet were landing. Now it has become quite automated.' (39) 'I did make a few mistakes early on – like running into posts. But you only run into a post once before you think 'Right, I'm going to remember where that is next time',' he laughs.\n\n" +
        "Joining Simon for a training session, it's striking how natural and fluid his movement is; he takes shorter, shallower, more gentle steps than most runners, using his feet to feel his way. His landmarks are minute changes in gradient and slight variations in the running surface. (40) 'I have to believe this route is going to stay consistent, and there won't be things like roadwork signs or big rocks,' he says.\n\n" +
        "(41) 'I try to concentrate on the millions of footsteps that go right and think positively,' he explains. When it comes to racing in ultra-distance events, Simon has to use guides to run sections of the course with him; after all, it would be almost impossible to memorise a 150 km stretch of countryside by heart. However, the physical and practical advantages of training in the fresh air, on his own terms, are vast and have boosted his confidence in his running ability as well as providing inspiration to others.\n\n" +
        "But for Simon the real thrill and motivation for training come from being able to compete on equal terms. (42) 'I can't hide the fact I'm blind,' he says, 'but at the same time I would rather compete with everybody else and not be put into a special group. Being visually impaired doesn't mean you can't run.'",
      options: [
        { label: 'A', text: 'These provide the familiarity and consistency essential for the blind runner.' },
        { label: 'B', text: 'Their support gave him extra confidence regarding his changing surroundings.' },
        { label: 'C', text: 'Simon believes the feelings of liberation and independence he gets from running solo far outweigh any anxiety over such dangers.' },
        { label: 'D', text: 'He began by training on football pitches behind his house, running between the goalposts.' },
        { label: 'E', text: 'It gives him a great opportunity to run with everyone.' },
        { label: 'F', text: "That's not to say the learning curve has been without incident." },
        { label: 'G', text: 'As a result of this slow experimentation, he was able to memorise a set five-kilometre course.' },
      ],
      items: [
        { q: 37, answer: 'D', explanation: '空前想"到户外跑步"，D 项"先在屋后足球场球门柱之间练习"，与后句 Then he got bored again and wanted to try running on the roads 形成递进。' },
        { q: 38, answer: 'G', explanation: 'G 项"经过这种缓慢的尝试，他记住了一条固定的五公里路线"，其中 course 与后句 It took him along…（It 指代 course）衔接。' },
        { q: 39, answer: 'F', explanation: 'F 项"但这并不意味着学习过程一帆风顺"，引出后文 early on 犯错的例子。' },
        { q: 40, answer: 'A', explanation: 'A 项"这些为盲人跑者提供必要的熟悉感与一致性"，These 指代前句的 minute changes in gradient 等地标。' },
        { q: 41, answer: 'C', explanation: 'C 项"独跑带来的解放感与独立感远超对危险的担忧"，承上启下引出积极思考的心态。' },
        { q: 42, answer: 'E', explanation: 'E 项"这给了他和所有人一起跑步的绝佳机会"，呼应 compete on equal terms。' },
      ],
    },
    7: {
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article in which four graduates discuss going to university. For questions 43–52, choose from the graduates (A–D). The graduates may be chosen more than once.',
      type: 'multiple_matching',
      sections: [
        {
          label: 'A',
          name: 'Sonia',
          text:
            "While I was doing my physics degree people would often say I was acquiring skills I'd be able to use in my future career, even if I didn't become a physicist. It sounded like nonsense to me: if I did another job in the end, what could be relevant about knowing what's inside an atom or how to operate a laser? It turns out they were referring to the wealth of other skills you pick up along the way. Communication and problem solving are just two of these. In contrast to the way you may have been taught before, university teaches you to be innovative and to think for yourself. Going to university is about more than just studying though; I got to make friends from all over the world and they have proved to be useful work contacts.",
        },
        {
          label: 'B',
          name: 'Jane',
          text:
            "I went to university because it was the career path expected by school, parents and classmates (to an extent) and also because I didn't really have a clue about what other options were open to me. It's difficult to know how things would have turned out if I hadn't gone. I do know that the job I do 'requires' a degree to do it, though there must be alternative ways of developing these skills. The degree, like it or not, is the screening method used by large numbers of employers and as such opens certain doors. It's certainly harder to get into all sorts of careers without a degree. The debates about university education typically revolve around routes into employment, yet for many the degree is barely relevant to the work we end up doing later on. It gives access to a certain type of career but the actual degree can often be of little practical value.",
        },
        {
          label: 'C',
          name: 'Lydia',
          text:
            "There is a lot of pressure on teenagers to know exactly what they want to do with their lives. As a high-achieving student at school, the alternatives to university didn't really appeal to me. So I took up a place at a good university but ended up studying something I wasn't sure interested me. Some people know what they want to do from a young age, and for those people, going to university straight out of school may be a great idea. However, many of us are very unsure of our future ambitions aged 18, and should therefore be given as many choices as possible, rather than being pushed into a degree course. Many of my friends went to university straight from school.",
        },
        {
          label: 'D',
          name: 'Bethany',
          text:
            "I don't really remember making the decision to go to university. Everyone always assumed I would, even though I was never the most gifted academically. Someone asked me during my second year why I had gone, and I remember not being able to answer the question. Maybe it was the way I was raised? Maybe it was the school I went to? But university was the next step. I had a great time there. I must say, it's so much more than the place you go to get a degree. You learn so many life skills that I would urge anyone to give the idea some thought. Since graduation I've had a string of jobs. University is an excellent decision for some, and may provide the right qualifications to start a career. But for others, going straight into a job is just as appropriate.",
        },
      ],
      items: [
        { q: 43, q_text: 'says people should be allowed to consider a range of options apart from university?', answer: 'C', explanation: 'Lydia：should therefore be given as many choices as possible, rather than being pushed into a degree course。' },
        { q: 44, q_text: 'says that some people are expected to make important decisions before they are ready?', answer: 'C', explanation: 'Lydia：There is a lot of pressure on teenagers to know exactly what they want… many of us are very unsure of our future ambitions aged 18。' },
        { q: 45, q_text: 'initially rejected something she was told?', answer: 'A', explanation: 'Sonia：It sounded like nonsense to me（起初觉得别人说的话是胡说）。' },
        { q: 46, q_text: 'was unaware of the alternatives to university?', answer: 'B', explanation: 'Jane：I didn\u2019t really have a clue about what other options were open to me。' },
        { q: 47, q_text: 'says that the type of learning at university is different from that at other institutions?', answer: 'A', explanation: 'Sonia：In contrast to the way you may have been taught before, university teaches you to be innovative and to think for yourself。' },
        { q: 48, q_text: 'felt when she was a student that she might not be doing the right course?', answer: 'C', explanation: 'Lydia：ended up studying something I wasn\u2019t sure interested me。' },
        { q: 49, q_text: 'says that some people discover that what is studied at university is not useful in the workplace?', answer: 'B', explanation: 'Jane：for many the degree is barely relevant to the work we end up doing later on… of little practical value。' },
        { q: 50, q_text: 'was uncertain about her reasons for going to university?', answer: 'D', explanation: 'Bethany：Someone asked me… why I had gone, and I remember not being able to answer the question。' },
        { q: 51, q_text: 'says graduates have an advantage when applying for jobs?', answer: 'B', explanation: 'Jane：The degree… is the screening method used by large numbers of employers and as such opens certain doors。' },
        { q: 52, q_text: 'was expected to go to university despite being a fairly average student at school?', answer: 'D', explanation: 'Bethany：Everyone always assumed I would, even though I was never the most gifted academically。' },
      ],
    },
  },
}


// ===== 标准版1 · Test 2（转录片段来源：scripts/fragments/std1-t2-reading.mjs）=====
// 标准版1 · Test 2 Reading and Use of English（书页 30–41；Key: 书 132/PDF 131，已逐题核对）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录。
// 注意：Part 6 指令原书印作 "A–H"（选项实际只有 A–G 共 7 句），此处照录原文。
const STD1_T2 = {
  meta: {
    id: 'fce-standard-1-test2-reading',
    title: 'FCE 标准版真题 1 · Test 2 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Reading and Use of English',
    pages: '书 30–41',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 2 Key（书 132 / PDF 131）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
      type: 'mcq_cloze',
      passage:
        'Home and abroad\n\n' +
        "After a short time living in a foreign country, I noticed conversations with locals assumed a (0).......... pattern. There were standard answers to the usual questions. Most questions caused little (1).......... – it was rather like dancing, where both partners know how to avoid (2).......... on each other's toes.\n\n" +
        "But, 'When are you going home?' was a question I (3).......... to answer, whenever I (4).......... my life and the direction it seemed to be (5).......... . In the last ten years, I had lived in a dozen countries. And I had travelled through dozens more; usually in (6).......... of a purpose or a person; occasionally to see the attractions.\n\n" +
        "This kind of travel is not (7).......... wandering, but is the extensive exploration of a wide (8).......... of cultures. However, it doesn't allow you to put down roots. At the back of your mind, though, is the idea of home, the place you came from.",
      items: [
        { q: 1, opts: ['puzzle', 'trouble', 'obstacle', 'barrier'], answer: 1, explanation: 'cause little trouble 固定搭配"几乎不引起麻烦"，与下文应答如跳舞般顺畅呼应。' },
        { q: 2, opts: ['touching', 'moving', 'walking', 'stepping'], answer: 3, explanation: "avoid stepping on each other's toes，step on one's toes 习语“踩到某人脚趾”。" },
        { q: 3, opts: ['worked', 'competed', 'stretched', 'struggled'], answer: 3, explanation: 'struggle to answer "难以回答"；work/compete/stretch 与 to answer 无此搭配。' },
        { q: 4, opts: ['considered', 'thought', 'reflected', 'believed'], answer: 0, explanation: 'considered 为及物动词直接接 my life；think 需接 of/about，reflect 需接 on。' },
        { q: 5, opts: ['making', 'finding', 'seeking', 'taking'], answer: 3, explanation: 'the direction it seemed to be taking "人生看似正走的方向"，take a direction 固定搭配。' },
        { q: 6, opts: ['look', 'search', 'sight', 'inquiry'], answer: 1, explanation: 'in search of 固定短语"寻找"，usually in search of a purpose or a person。' },
        { q: 7, opts: ['aimless', 'unreasonable', 'unreliable', 'indefinite'], answer: 0, explanation: 'aimless wandering "漫无目的的游荡"，与 but 后的 extensive exploration（有目的的探索）对比。' },
        { q: 8, opts: ['difference', 'arrangement', 'variety', 'order'], answer: 2, explanation: 'a wide variety of 固定搭配"各种各样的"，修饰复数 cultures。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'open_cloze',
      passage:
        'An Irish cookery school\n\n' +
        'In the last few years, a number of cookery schools have been set (0).......... in Ireland to promote Irish cooking. (9).......... such school is run by Kathleen Doyle not (10).......... from the centre of Dublin.\n\n' +
        "'I opened the school twelve years ago,' says Kathleen. 'The school was by no means an overnight success; I found (11).......... necessary to work hard to build up a reputation. One of my advantages was that I'd had problems with my own cooking. I've made (12).......... mistake that it's possible to make, but (13).......... of this, I know what people do wrong from first-hand experience.'\n\n" +
        "Just (14).......... most cookery schools in Ireland, Kathleen initially copied the classical dishes of France and Italy and other countries (15).......... have a reputation for excellent food. 'Now though, things are changing,' says Kathleen. 'We get excellent produce from Irish farms and, (16).......... a result, we're encouraging students to create unique Irish dishes.'",
      items: [
        { q: 9, answer: ['ONE'], show: 'ONE', explanation: 'One such school "这样的一所学校"，one 与 such 连用后接单数名词。' },
        { q: 10, answer: ['FAR'], show: 'FAR', explanation: 'not far from "离……不远"，only 强调学校离都柏林市中心很近。' },
        { q: 11, answer: ['IT'], show: 'IT', explanation: 'found it necessary to work hard，it 作形式宾语，真正宾语是 to work hard。' },
        { q: 12, answer: ['EVERY', 'EACH'], show: 'EVERY / EACH', explanation: "every/each mistake (that) it's possible to make，“能犯的每一个错误”。" },
        { q: 13, answer: ['BECAUSE'], show: 'BECAUSE', explanation: 'because of this "正因如此"，介词 of 后接指示代词 this。' },
        { q: 14, answer: ['LIKE'], show: 'LIKE', explanation: 'Just like most cookery schools in Ireland "与爱尔兰大多数烹饪学校一样"。' },
        { q: 15, answer: ['WHICH', 'THAT'], show: 'WHICH / THAT', explanation: '先行词 countries，关系代词在限制性定语从句中作主语，which/that 皆可。' },
        { q: 16, answer: ['AS'], show: 'AS', explanation: 'as a result 固定搭配"因此"。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'word_formation',
      passage:
        'Running speed\n\n' +
        'Elite (0) COMPETITORS like the Jamaican Usain Bolt have regularly been clocked running at nearly 45 kilometres per hour. Such speed would have seemed (17)_____ not so long ago. Scientists now suggest that humans can move (18)_____ faster than even that, perhaps as fast as 65 kilometres per hour.\n\n' +
        "For years, it was assumed that simple muscle power determined human speed, but recent research suggests otherwise. The most important (19)_____ factor appears to be how quickly the muscles can contract and thus (20)_____ the time a runner's foot is in contact with the ground.\n\n" +
        'Is our athletic ability inherited? Researcher Alun Williams has (21)_____ twenty-three inherited factors that influence sporting performance, such as the (22)_____ use of oxygen, and strength. As world population rises, predicts Williams, the (23)_____ of there being someone with the right genes for these twenty-three (24)_____ will increase noticeably and thus faster runners are likely to emerge in future.',
      items: [
        { q: 17, given: 'BELIEVE', answer: ['UNBELIEVABLE'], show: 'UNBELIEVABLE', explanation: 'believe → unbelievable；would have seemed 后接形容词，"不久前还难以置信"。' },
        { q: 18, given: 'CONSIDER', answer: ['CONSIDERABLY'], show: 'CONSIDERABLY', explanation: 'consider → considerably；修饰比较级 faster 需用副词。' },
        { q: 19, given: 'LIMIT', answer: ['LIMITING'], show: 'LIMITING', explanation: 'limit → limiting；-ing 形容词修饰 factor，"最重要的限制因素"。' },
        { q: 20, given: 'MINIMUM', answer: ['MINIMISE', 'MINIMIZE'], show: 'MINIMISE / MINIMIZE', explanation: 'minimum → minimise/minimize；thus 后接动词原形，"把脚触地时间降到最短"。' },
        { q: 21, given: 'IDENTITY', answer: ['IDENTIFIED'], show: 'IDENTIFIED', explanation: 'identity → identified；has identified 现在完成时，"已识别出"。' },
        { q: 22, given: 'EFFICIENCY', answer: ['EFFICIENT'], show: 'EFFICIENT', explanation: 'efficiency → efficient；形容词修饰名词 use，"对氧的高效利用"。' },
        { q: 23, given: 'POSSIBLE', answer: ['POSSIBILITY'], show: 'POSSIBILITY', explanation: 'possible → possibility；the possibility of there being… "存在……的可能性"。' },
        { q: 24, given: 'CHARACTER', answer: ['CHARACTERISTICS'], show: 'CHARACTERISTICS', explanation: 'character → characteristics；these twenty-three 后接复数名词。' },
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
          stem: 'Robert had never been to Turkey on business before.',
          key: 'FIRST',
          answer: ['was the first time', 'was the first time that'],
          show: 'was the first time (that)',
          explanation: 'had never been … before → It was the first time (that) he had ever been… 固定句型。',
        },
        {
          q: 26,
          stem: 'It was impossible for me to know which road to follow.',
          key: 'NOT',
          answer: ['could not have', "couldn't have"],
          show: "could not / couldn't have",
          explanation: '"不可能知道" → could not/couldn\'t have known，对过去事情的否定推测。',
        },
        {
          q: 27,
          stem: 'So far this year the cost of petrol has not increased.',
          key: 'INCREASE',
          answer: [
            'has been no increase',
            'has not been any increase',
            'has not been an increase',
            "hasn't been any increase",
            "hasn't been an increase",
          ],
          show: "has been no increase；has not/hasn't been any/an increase",
          explanation: "has not increased → there has been no increase 或 there has not/hasn't been any/an increase。",
        },
        {
          q: 28,
          stem: 'I cannot get all my clothes in the suitcase.',
          key: 'BIG',
          answer: ['is not big enough to', "isn't big enough to"],
          show: "is not / isn't big enough to",
          explanation: '"行李箱装不下所有衣服" → is not/isn\'t big enough to take…，"不够大"结构。',
        },
        {
          q: 29,
          stem: "The waiter carried the tray very carefully so that he wouldn't spill any of the drinks.",
          key: 'AVOID',
          answer: [
            'so that he would avoid spilling',
            'so he would avoid spilling',
            'so that he could avoid spilling',
            'so he could avoid spilling',
            'so as to avoid spilling',
          ],
          show: 'so (that) he would/could avoid spilling；so as to avoid spilling',
          explanation: "so that he wouldn't spill → so (that) he would/could avoid spilling 或 so as to avoid spilling，avoid 后接动名词。",
        },
        {
          q: 30,
          stem: "I wasn't able to get to the airport on time because of the bad weather.",
          key: 'PREVENTED',
          answer: ['prevented me from getting', 'prevented me getting', 'prevented my getting'],
          show: 'prevented me (from) / my getting',
          explanation: "wasn't able to … because of → The bad weather prevented me (from)/my getting…，prevent sb (from) doing 固定结构。",
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an article about an island off the west coast of Scotland. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
      type: 'reading_mcq',
      passage:
        'The Isle of Muck\n\n' +
        'Jim Richardson visits the Scottish island of Muck.\n\n' +
        "Lawrence MacEwen crouches down on his Scottish island, the Isle of Muck. And so do I. An Atlantic gale threatens to lift and blow us both out like October leaves, over the steep cliff at our feet and across the bay 120 m below, dropping us in the surrounding ocean. Then MacEwen's sheepdog, Tie, creeps up and his blond, bearded owner strokes him with gentle hands. The howling wind, rage as it might, can't make this man uncomfortable here, on his island, where he looks – and is – perfectly at home.\n\n" +
        "MacEwen is giving me a visual tour of his neighbourhood. Nodding to the north, he yells, 'That island is Eigg. The one to the west of it is the isle of Rum. It gets twice as much rain as we do. I watch heavy clouds dump rain on its huge mountains.' Just beyond Rum is the island of Soay. 'I have sheep to move.' MacEwen abruptly announces when rain drifts towards us. We start down the slopes. As we stride along, he brings me up to speed on island details. Volcanic Muck is 3 km long and half as wide; its geese eat vast amounts of grass; and the MacEwens have been living here for 3,000 years.\n\n" +
        "Herding the sheep interrupts the flow of information. Tie, the sheepdog, is circling a flock of sheep – and not doing it well. 'Away to me, Tie. Away to me,' meaning the dog should circle to the right. He doesn't; he goes straight up the middle of the flock, creating confusion. 'Tie.' MacEwen's voice drips disappointment. 'That will never do.' The dog looks ashamed.\n\n" +
        "The Isle of Muck is largely a MacEwen enterprise. Lawrence runs the farm with his wife, Jenny; son Colin, newly married, manages the island cottages; and daughter Mary runs the island hotel, Port Mor, with her husband, Toby. Mary and Toby love the fact that their two boys can wander the land on their own and sail dinghies on summer days. They go out of the door and come back only when they're hungry. But island life has its compromises. For one, electricity is only available part of the time. My first evening, I wait anxiously for the lights to turn on. The next morning I find Mary setting out breakfast by torchlight. But I cope with it – along with no mobile phone service. 'There is mobile reception on the hill,' Mary tells me. 'Most visitors try for a couple of days, then just put the phone in the drawer.' So I do too.\n\n" +
        "Everything on Muck seems delightfully improbable. The boat today brings over the post – and three musicians, who hop off carrying instruments. Their concert in the island's tearoom proves a smash hit, with the islanders present tapping their boots in time to the music. That night, sitting by a glowing fire as it rains outside, Lawrence MacEwen tells me how he met his wife, Jenny. 'Her father saw a small farm on the isle of Soay advertised in the newspaper, and bought it without even looking at it. He'd never been to Scotland. Jenny was sent to manage it.' Did Jenny know anything about running a farm? 'She had good typing skills.'\n\n" +
        "I go to bed with rain and awake to more rain. But I eat well, virtually every bit of food coming from the tiny island. Mary sends me down to fisherman Sandy Mathers for fresh fish. I carry it back through the village and deliver it to Mary at the kitchen door. By 7 pm, our fish is on the table, delicious beyond reckoning. Also beyond reckoning: my ferry ride the following morning to my next island. Over the preceding two months, many of the scheduled ferries had been cancelled because of high seas. If my ferry didn't come, I'd be stuck on Muck for two more days. (line 75) Which, now, phone or no phone, was what I secretly longed for.",
      items: [
        {
          q: 31,
          q_text: 'Why does the writer describe MacEwen stroking his dog?',
          opts: [
            'to emphasise how bad MacEwen thought the weather was that day',
            'to show the dog was as frightened by the storm as MacEwan was',
            'to explain why MacEwen had risked going to the dangerous cliffs',
            'to demonstrate how relaxed MacEwen was despite the bad weather',
          ],
          answer: 3,
          explanation: "作者在狂风中写 MacEwen with gentle hands 抚摸狗、wind can't make this man uncomfortable，凸显他在恶劣天气下的放松。",
        },
        {
          q: 32,
          q_text: "According to the writer, the sheepdog's behaviour suggests that",
          opts: [
            'it never obeys MacEwen.',
            'it is afraid of MacEwen.',
            'it is aware it should have done better.',
            'it usually responds to loud commands.',
          ],
          answer: 2,
          explanation: '狗出错后 MacEwen 语气失望（voice drips disappointment），The dog looks ashamed 说明它知道自己本该做得更好。',
        },
        {
          q: 33,
          q_text: 'What is suggested about island life in the fourth paragraph?',
          opts: [
            'People living there would like more visitors to help the economy.',
            'People come to the island in search of employment.',
            "People are too busy to do all the things they'd like to.",
            "People don't mind putting up with some inconveniences.",
          ],
          answer: 3,
          explanation: '第四段写电力限时、火把下的早餐、无手机信号等不便，But I cope with it… So I do too 说明大家并不在意。',
        },
        {
          q: 34,
          q_text: 'What attitude is expressed by the writer in the fifth paragraph?',
          opts: [
            'He is amused that people on the island share their feelings so openly.',
            'He likes the way so many surprising things can happen on the island.',
            'He approves of the way the islanders all socialise together.',
            'He finds it strange that island farms are advertised in national newspapers.',
          ],
          answer: 1,
          explanation: '第五段乐队突访、茶室演唱会、篝火夜谈等 delightfully improbable 的趣事，表达作者对岛上惊喜不断生活的喜爱。',
        },
        {
          q: 35,
          q_text: "What does 'Which' refer to in line 75?",
          opts: [
            "the writer's ferry ride",
            'the next island',
            'having to stay on the island',
            'a mobile phone',
          ],
          answer: 2,
          explanation: "Which 指代上句 I'd be stuck on Muck for two more days（被困岛上两天），如今反倒是他暗暗期盼的。",
        },
        {
          q: 36,
          q_text: 'From the text as a whole, we find out the island of Muck',
          opts: [
            'is a safe place for children to live.',
            'has the highest level of rainfall in the area.',
            'has an economy based solely on sheep.',
            'is dependent on the outside world for its food.',
          ],
          answer: 0,
          explanation: 'Mary 和 Toby 的两个儿子 can wander the land on their own and sail dinghies，可见岛上对孩子是安全的地方。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read a newspaper article about the Hollywood sign in the United States of America. Six sentences have been removed from the article. Choose from the sentences A–H the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
      type: 'paragraph_matching',
      passage:
        'The sign on a hill\n\n' +
        "At the top of a hill called Mount Lee in Los Angeles on the west coast of the USA is a very famous sign, recognisable to people around the world. My job is to look after this sign. It says Hollywood and that's of course the place where films have been made for over a hundred years. The first film was made there in 1907 and by 1912, at least 15 independent studios could be found making films around town.\n\n" +
        "The film industry continued to grow and the name Hollywood, which by the 1920s represented not just a city but also an industry and a lifestyle, was made official when the 'Hollywoodland' sign was erected in 1923. It was only supposed to last about a year. (37) But it wasn't always. It started out as a massive billboard advertising an upscale suburban development called Hollywoodland.\n\n" +
        "In the 1940s, TV started to become popular and some Hollywood film studios closed, but then TV companies moved in and took them over. At this point, the city of Los Angeles decided to renovate the sign. The letters spelling 'land' were removed and the rest was repaired. Modern Hollywood was born. The letters in the sign weren't straight and still aren't. (38) They follow the shape of Mount Lee and this is part of their fame.\n\n" +
        'I am responsible for maintaining and protecting the sign. (39) When I first arrived in 1989, security was pretty low-tech – we put up a fence around the sign to stop trespassers messing with it. But people just jumped over the fence. The back of the sign was black with graffiti – there was barbed wire across it, but they still got through. So I decided to improve the effectiveness of the security.\n\n' +
        'Now we have motion-detectors and cameras. Everything goes via the internet to a dedicated surveillance team watching various structures around the city. (40) But they can get a closer look on one of my regular tours.\n\n' +
        "It's also important to protect the sign's image as it's used in loads of adverts and news pieces. There's a simple rule about how the sign can be used. (41) However, it mostly comes down to the look. To take a different example, if you used 'Hollywood' in the name of your company it would depend what the word looked like, whether it was just spelled out or whether the image of the sign itself was used.\n\n" +
        "People call up with the most ridiculous ideas. They want to light the sign, paint it pink, or cover it in something to promote their product. You'll get a really enthusiastic marketing executive call up, terribly excited because they think they're the first person to think of this or that idea. (42) That's because we don't like to change the image and we hope it will have the same significance for generations to come.",
      options: [
        { label: 'A', text: "Even so, people still try to climb over the barrier, mostly innocent tourists surprised that you can't walk right up to the sign." },
        { label: 'B', text: 'They mostly get turned down.' },
        { label: 'C', text: 'If one of them ever fell down I would have to put it back up at exactly the same angle.' },
        { label: 'D', text: 'We used to have real problems.' },
        { label: 'E', text: 'Things have changed a lot since then.' },
        { label: 'F', text: "It's still there, of course, and is a symbol of the entertainment world." },
        { label: 'G', text: 'If the purpose is commercial – to promote something – payment has to be made.' },
      ],
      items: [
        { q: 37, answer: 'F', explanation: "上句“本应只维持约一年”，F 项“它当然还立在那里，并是娱乐世界的象征”形成转折；后句 But it wasn't always（并非一直如此）引出它最初只是广告牌。" },
        { q: 38, answer: 'C', explanation: 'C 项"若有一块字母倒下，我必须按完全相同的角度装回去"呼应前句"字母至今不直"，并与后句 They follow the shape of Mount Lee 衔接。' },
        { q: 39, answer: 'D', explanation: 'D 项"我们过去有不少麻烦"总起，下文 1989 年的初级安防、涂鸦与翻越围栏都是具体麻烦。' },
        { q: 40, answer: 'A', explanation: 'A 项"即便如此，人们仍试图翻越围栏"承接前文摄像头与监控的现状；后句 they 即指这些游客。' },
        { q: 41, answer: 'G', explanation: 'G 项"若用于商业推广目的则必须付费"给出"简单规则"的内容；However, it mostly comes down to the look 再转折。' },
        { q: 42, answer: 'B', explanation: "B 项“这些点子大多被拒绝”承接上句兴奋来电；That's because we don't like to change the image 说明原因。" },
      ],
    },
    7: {
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article in which four athletes talk about what they eat. For questions 43–52, choose from the athletes (A–D). The athletes may be chosen more than once.',
      type: 'multiple_matching',
      sections: [
        {
          label: 'A',
          name: 'Mark',
          text:
            "When I'm cycling on my own I stuff my pockets with bananas and protein bars. On the longest rides I'll eat something every half an hour. For heavier training it's physically impossible to get enough energy from food alone, so you do rely on energy drinks. One development in sports nutrition since I've been competing is the focus on the importance of protein. Cycling is much more weight-orientated than the swimming I used to do, which means I need to eat differently now. Protein feeds the muscles but keeps them lean as possible. I've been an athlete for 20 years so healthy eating is normal for me, but that's not to say I don't get a tasty take-away meal from time to time. I've just learned to spot the meals that will provide what I need. It's simple things like steering clear of the creamy sauces and making sure I get lots of veg.",
        },
        {
          label: 'B',
          name: 'Stefan',
          text:
            "Everyone says: 'As a runner you must be on a really strict diet. Do you only eat salad?' Are you allowed chocolate?' But that's really not the case. I've got salad and vegetables in my shopping trolley but there's always some chocolate in there, too. I do most of the cooking at home. On the morning of a competition, I get so nervous I feel really sick. I have to force myself to have something so I'll have enough energy to perform well. Sometimes I get those days where I don't want to be so disciplined. You think: 'I've trained really hard, I deserve to have a pizza.' It's OK to have a little relapse every now and then but I can't do it every day or I'd be rolling round the track!",
        },
        {
          label: 'C',
          name: 'Guy',
          text:
            "For a gymnast, a kilo can make all the difference. But if you don't eat enough you'll be a bit shaky and weak. It's all about eating the right amount, at the right time – two hours before you do anything. Breakfast is fruit and if I'm a bit peckish, wholewheat toast and butter! I get to training for 12 pm, then break after three hours for lunch – more fruit, a cheese and tomato sandwich. I'm back in the gym from 5 pm to 8 pm, then I go to my Mum's for steak and vegetables or chicken and salad. I don't tend to mix carbs with meat late at night. I'm not the best cook but I think it's fun to do. I know how to make chicken from my mum's recipe, it just takes me a bit longer to get organised.",
        },
        {
          label: 'D',
          name: 'Tomas',
          text:
            "It's definitely possible to eat delicious food and be a professional swimmer. I've always loved food so I'm not going to be obsessive because you can get what you need and still enjoy every bite. I'm not one for endless protein shakes and energy drinks. Before a training session I'd rather have a banana. That's not to say I'm perfect. At the world championships I got my feeding strategy wrong – and I paid for it. For my sport it's what you eat two days before the competition that makes the difference. You have to 'carb load' – eat piles of rice or pasta – and I didn't. I was leading for a long way but I ended up 11th. My biggest indulgence is pastry. And I love baking. I train for 33 hours a week so in my time off I need to rest, and spending time in the kitchen is perfect. Swimming is my biggest passion but baking comes a close second.",
        },
      ],
      items: [
        { q: 43, q_text: 'enjoys cooking but finds the planning difficult?', answer: 'C', explanation: "Guy：I'm not the best cook but I think it's fun to do… it just takes me a bit longer to get organised（爱做饭但组织安排费劲）。" },
        { q: 44, q_text: 'has to carry food with him when training?', answer: 'A', explanation: 'Mark：When I\'m cycling on my own I stuff my pockets with bananas and protein bars（训练时口袋装满食物）。' },
        { q: 45, q_text: "doesn't find it easy to eat before an event?", answer: 'B', explanation: 'Stefan：On the morning of a competition, I get so nervous I feel really sick… I have to force myself to have something（赛前紧张难以下咽）。' },
        { q: 46, q_text: 'uses cooking as a way to relax?', answer: 'D', explanation: 'Tomas：in my time off I need to rest, and spending time in the kitchen is perfect（下厨放松）。' },
        { q: 47, q_text: 'sometimes allows himself certain food as a reward?', answer: 'B', explanation: "Stefan：I've trained really hard, I deserve to have a pizza（奖励自己一块披萨）。" },
        { q: 48, q_text: 'has seen a change in the diet of sports people?', answer: 'A', explanation: "Mark：One development in sports nutrition since I've been competing is the focus on the importance of protein（见证运动营养的变迁）。" },
        { q: 49, q_text: 'once made the wrong decision about the food he ate?', answer: 'D', explanation: 'Tomas：At the world championships I got my feeding strategy wrong – and I paid for it（补给策略失误付出代价）。' },
        { q: 50, q_text: 'says that people are unaware of what he actually eats?', answer: 'B', explanation: "Stefan：Everyone says… Do you only eat salad?… But that's really not the case（他人以为他饮食严苛，实际不然）。" },
        { q: 51, q_text: 'says knowing what and when to eat is critical?', answer: 'C', explanation: "Guy：It's all about eating the right amount, at the right time（吃什么、何时吃最关键）。" },
        { q: 52, q_text: 'has had to change his diet with a change of sport?', answer: 'A', explanation: 'Mark：Cycling is much more weight-orientated than the swimming I used to do… I need to eat differently now（换项目后饮食随之改变）。' },
      ],
    },
  },
}

// ===== 标准版1 · Test 3（转录片段来源：scripts/fragments/std1-t3-reading.mjs）=====
// 标准版1 · Test 3 Reading and Use of English（书页 52–63；Key: 书页 144/PDF 143，已逐题核对）
// 来源: D:\workspace_sunny\FCE\1.真题\标准版1\cen_first_1_with_answers .pdf（用户原件扫描版，逐页视觉转录）
const STD1_T3 = {
  meta: {
    id: 'fce-standard-1-test3-reading',
    title: 'FCE 标准版真题 1 · Test 3 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Reading and Use of English',
    pages: '书 52–63',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 3 Key（书 144 / PDF 143）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
      type: 'mcq_cloze',
      passage:
        'New words for a dictionary\n\n' +
        'The editors of a new online dictionary are (0).......... the public to submit words that they would like to see in the dictionary. People are already sending in words, some of which they have (1).......... themselves – these will almost certainly not (2).......... in the dictionary!\n\n' +
        'When a new word is submitted, editors check newspapers, radio, television and social networks to see how (3).......... the word is used. They also (4).......... whether the word is likely to remain in use for more than one or two years. The evidence they collect will help them decide whether or not to put it in the dictionary.\n\n' +
        'Editors will (5).......... feedback on any words submitted by the public. Even words not accepted will (6).......... to be monitored over the following year. Editors need to be (7).......... of new words which emerge from areas such as popular culture and technology, so that their dictionary is a genuine (8).......... of the current language.',
      items: [
        { q: 1, opts: ['set out', 'made up', 'brought out', 'come up'], answer: 1, explanation: 'have made up themselves 指"人们自己造出来的词"；set out / come up 是不及物短语，bring out 意为"推出"。' },
        { q: 2, opts: ['include', 'show', 'consist', 'appear'], answer: 3, explanation: 'not appear in the dictionary 这些自造词几乎肯定不会出现在词典里。' },
        { q: 3, opts: ['totally', 'widely', 'fully', 'vastly'], answer: 1, explanation: 'how widely the word is used 该词使用范围有多广，widely used 固定搭配。' },
        { q: 4, opts: ['consider', 'regard', 'prove', 'rate'], answer: 0, explanation: 'consider whether… 考虑是否……；regard 后需接 as，prove / rate 语义不符。' },
        { q: 5, opts: ['state', 'tell', 'provide', 'inform'], answer: 2, explanation: 'provide feedback 提供反馈，固定搭配。' },
        { q: 6, opts: ['keep', 'rest', 'last', 'continue'], answer: 3, explanation: 'continue to be monitored 继续受到监测；keep / rest / last 不接 to be monitored。' },
        { q: 7, opts: ['familiar', 'aware', 'alert', 'experience'], answer: 1, explanation: 'be aware of 意识到、留意到，固定搭配；familiar 需 be familiar with。' },
        { q: 8, opts: ['mark', 'copy', 'reflection', 'imitation'], answer: 2, explanation: 'a genuine reflection of the current language 对当前语言的真实反映。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'open_cloze',
      passage:
        'Animal communication\n\n' +
        'It (0).......... sometimes said that animals use language. Certainly some animal species have developed amazingly sophisticated ways of communicating with (9).......... another.\n\n' +
        "But there are huge differences between the ways animals communicate and the ways human beings do. When animals make a sound, such (10).......... a bark or a call, it is in reaction to (11).......... is happening around them. An alarm call means they are frightened. A hunger call means they want food. Animals, though, cannot make a call meaning 'I was scared yesterday' or 'I'll be hungry tomorrow'. Only human beings are capable (12).......... doing this.\n\n" +
        'Zoologists have had some success in teaching human language to animals. (13).......... some famous experiments, chimpanzees have (14).......... taught to use their hands to give information on a range of things. Some animals have even managed to put signs together in (15).......... to make simple sentences. However, getting them to do this takes a huge (16).......... of training.',
      items: [
        { q: 9, answer: ['ONE'], show: 'ONE', explanation: 'one another 彼此，固定短语。' },
        { q: 10, answer: ['AS'], show: 'AS', explanation: 'such as 例如，引出 a bark or a call。' },
        { q: 11, answer: ['WHAT'], show: 'WHAT', explanation: 'in reaction to what is happening 对周围正在发生的事作出反应，what 引导从句。' },
        { q: 12, answer: ['OF'], show: 'OF', explanation: 'be capable of doing 有能力做某事，固定搭配。' },
        { q: 13, answer: ['IN'], show: 'IN', explanation: 'In some famous experiments 句首介词短语，位于句首大写。' },
        { q: 14, answer: ['BEEN'], show: 'BEEN', explanation: 'have been taught 现在完成时被动语态，黑猩猩"被教"。' },
        { q: 15, answer: ['ORDER'], show: 'ORDER', explanation: 'in order to make simple sentences 以便组成简单的句子。' },
        { q: 16, answer: ['AMOUNT'], show: 'AMOUNT', explanation: 'a huge amount of training 大量训练，training 不可数。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'word_formation',
      passage:
        'Cycling\n\n' +
        "I have been a keen (0) CYCLIST for about nine years. When I began cycling, I found the flat roads easy but the hills almost (17)_____. Surprisingly, now it's the opposite. A long flat ride can be both dull and (18)_____ as you never experience that fantastic feeling of freedom when speeding downhill. Years ago, going uphill left me (19)_____. Now I have learned to take hills slowly and steadily.\n\n" +
        "When I set off, I'm full of energy and the first hundred metres are (20)_____, the next couple of kilometres a bit tiring, but on the whole the experience is very (21)_____.\n\n" +
        'Cycling is (22)_____ any other forms of exercise I have tried; it is never a chore but always a (23)_____. The physical benefits are obvious but the mental benefits are (24)_____ important; when you are travelling calmly at a sensible speed, you breathe fresh air, have time to think and can relax.',
      items: [
        { q: 17, given: 'POSSIBLE', answer: ['IMPOSSIBLE'], show: 'IMPOSSIBLE', explanation: 'possible → impossible：almost impossible 几乎不可能，上坡难提否定前缀 im-。' },
        { q: 18, given: 'EXHAUST', answer: ['EXHAUSTING'], show: 'EXHAUSTING', explanation: 'exhaust → exhausting：dull and exhausting 令人疲惫的，形容 ride。' },
        { q: 19, given: 'BREATH', answer: ['BREATHLESS'], show: 'BREATHLESS', explanation: 'breath → breathless：leave me breathless 使我上气不接下气。' },
        { q: 20, given: 'MARVEL', answer: ['MARVELLOUS'], show: 'MARVELLOUS', explanation: 'marvel → marvellous：头一百米妙极了，英式拼法双写 l。' },
        { q: 21, given: 'ENJOY', answer: ['ENJOYABLE'], show: 'ENJOYABLE', explanation: 'enjoy → enjoyable：the experience is very enjoyable 骑行体验令人愉快。' },
        { q: 22, given: 'LIKE', answer: ['UNLIKE'], show: 'UNLIKE', explanation: 'like → unlike：Cycling is unlike any other forms of exercise 与其他运动不同。' },
        { q: 23, given: 'PLEASE', answer: ['PLEASURE'], show: 'PLEASURE', explanation: 'please → pleasure：never a chore but always a pleasure 需名词。' },
        { q: 24, given: 'EQUAL', answer: ['EQUALLY'], show: 'EQUALLY', explanation: 'equal → equally：修饰 important 用副词。' },
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
          stem: "My brother doesn't play tennis now as well as he used to.",
          key: 'BETTER',
          answer: ['play tennis better than he', 'play better tennis than he'],
          show: 'play tennis better / play better tennis than he',
          explanation: 'as well as he used to → better than he does now；better 可置于 tennis 之前或之后。',
        },
        {
          q: 26,
          stem: 'Clothing companies are selling an increasing number of goods on the internet.',
          key: 'BOUGHT',
          answer: ['are bought from', 'is bought from', 'are being bought from', 'is being bought from', 'can be bought from'],
          show: 'is / are (being) bought from / can be bought from',
          explanation: 'an increasing number of goods 谓语可用 is / are；主动 selling → 被动 bought from，可含进行 being 或情态 can。',
        },
        {
          q: 27,
          stem: "'Well done for scoring twice, Mark,' said the coach.",
          key: 'PRAISED',
          answer: ['was praised by the coach'],
          show: 'was praised by the coach',
          explanation: "直接引语'Well done'→ 间接：Mark was praised by the coach for scoring twice。",
        },
        {
          q: 28,
          stem: 'You are welcome to contact me if you need more information.',
          key: 'TOUCH',
          answer: ['to get in touch with'],
          show: 'to get in touch with',
          explanation: 'contact me → get in touch with me；feel free to do sth 结构。',
        },
        {
          q: 29,
          stem: 'Tickets for the concert cannot be bought before 12th May.',
          key: 'SALE',
          answer: [
            'go on sale until',
            'go on sale before',
            'go on sale till',
            'be on sale until',
            'be on sale before',
            'be on sale till',
            'be for sale until',
            'be for sale before',
            'be for sale till',
          ],
          show: 'go on sale / be on (for) sale until / before / till',
          explanation: 'cannot be bought before → will not go on sale / be on (for) sale until / before / till 12th May。',
        },
        {
          q: 30,
          stem: "I didn't buy the camera because it was so expensive.",
          key: 'BEEN',
          answer: ['if it had not been', "if it hadn't been"],
          show: "if it had not / hadn't been",
          explanation: 'because it was so expensive → if it had not been so expensive，过去虚拟条件句。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read part of an autobiography in which a gardener talks about his childhood and his love of plants and the countryside. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
      type: 'reading_mcq',
      passage:
        'Green fingers\n\n' +
        "It never occurred to me when I was little that gardens were anything less than glamorous places. Grandad's garden was on the bank of a river and sloped gently down towards the water. You couldn't reach the river but you could hear the sound of the water and the birds that sang in the trees above. I imagined that all gardens were like this – a place of escape, peace and solitude. Grandad's plot was nothing out of the ordinary when it came to features. He had nothing as grand as a greenhouse, unlike some of his neighbours. Not that they had proper 'bought' greenhouses. Theirs were made from old window frames. Patches of plastic would be tacked in place where a carelessly wielded spade had smashed a pane of glass.\n\n" +
        "At home, his son, my father, could be quiet and withdrawn. I wouldn't want to make him sound humourless. He wasn't. Silly things would amuse him. He had phrases that he liked to use, 'It's immaterial to me' being one of them. 'I don't mind' would have done just as well but he liked the word 'immaterial'. I realise that, deep down, he was probably disappointed that he hadn't made more of his life. He left school without qualifications and became apprenticed to a plumber. Plumbing was not something he was passionate about. It was just what he did. He was never particularly ambitious, though there was a moment when he and Mum thought of emigrating to Canada, but it came to nothing. Where he came into his own was around the house. He had an 'eye for the job'. Be it bookshelves or a cupboard – what he could achieve was astonishing.\n\n" +
        "My parents moved house only once in their entire married life. But my mother made up for this lack of daring when it came to furniture. You would just get used to the shape of one chair when another appeared, but the most dramatic change of all was the arrival of a piano. I always wanted to like it but it did its best to intimidate me. The only thing I did like about it were the two brass candlesticks that jutted out from the front. 'They're too posh,' my mother said and they disappeared one day while I was at school. There was never any mention of my being allowed to play it. Instead lessons were booked for my sister. When I asked my mother in later life why I wasn't given the opportunity, her reply was brief: 'You'd never have practised'.\n\n" +
        "Of the three options, moors, woods or river – the river was the one that usually got my vote. On a stretch of the river I was allowed to disappear with my imagination into another world. With a fishing net over my shoulder I could set off in sandals that were last year's model, with the fronts cut out to accommodate toes that were now right to the end. I'd walk along the river bank looking for a suitable spot where I could take off the painful sandals and leave them with my picnic while I ventured out, tentatively, peering through the water for any fish that I could scoop up with the net and take home. After the first disastrous attempts to keep them alive in the back yard, they were tipped back into the water.\n\n" +
        "I wanted to leave school as soon as possible but that seemed an unlikely prospect until one day my father announced, 'They've got a vacancy for an apprentice gardener in the Parks Department. I thought you might be interested.' In one brief moment Dad had gone against his better judgement. He might still have preferred it if I became a carpenter. But I like to feel that somewhere inside him was a feeling that things might just turn out for the best. If I stuck at it. Maybe I'm deceiving myself, but I prefer to believe that in his heart, although he hated gardening himself, he'd watched me doing it for long enough and noticed my unfailing passion for all things that grew and flowered and fruited.",
      items: [
        {
          q: 31,
          q_text: "When the writer describes his grandad's garden, he is",
          opts: [
            'proud that his grandad was such a good gardener.',
            'embarrassed that the garden was not as good as others nearby.',
            'indignant that items in the garden were often damaged.',
            'positive about the time he spent in the garden.',
          ],
          answer: 3,
          explanation: '首段把爷爷的花园写成"a place of escape, peace and solitude"，流露的是在那里的美好时光，而非攀比或抱怨。',
        },
        {
          q: 32,
          q_text: "What is the writer's attitude to his father in the second paragraph?",
          opts: [
            'regretful that his father had not achieved more',
            "irritated that his father used words he didn't understand",
            'sympathetic to the reasons why his father behaved as he did',
            'grateful that his father had not taken the family to Canada',
          ],
          answer: 2,
          explanation: '作者深知父亲 deep down 对生活失意（probably disappointed），语气是体谅而非责备。',
        },
        {
          q: 33,
          q_text: "What does the writer mean by the phrase 'came into his own' in line 14?",
          opts: [
            'was able to do something by himself',
            'was able to show how talented he was',
            'was able to continue his day job',
            'was able to forget his failures',
          ],
          answer: 1,
          explanation: "'came into his own' 指父亲在修葺房屋上大显身手，what he could achieve was astonishing——展示才华。",
        },
        {
          q: 34,
          q_text: "What was the writer's first reaction to the piano?",
          opts: [
            'surprise when it suddenly appeared',
            'pleasure at seeing it in the living room',
            'anger that only his sister would have piano lessons',
            'pride that his mother had listened to his advice',
          ],
          answer: 0,
          explanation: '钢琴的到来是"the most dramatic change"，作者本想喜欢它却感到被震慑，最初的反应是突然出现的惊讶。',
        },
        {
          q: 35,
          q_text: "The writer's description of his fishing trips illustrate",
          opts: [
            'how much free time he was given.',
            'how beautiful the river was.',
            'how good a fisherman he was.',
            'how carefree his childhood was.',
          ],
          answer: 3,
          explanation: '钓鱼段落写他"disappear with my imagination into another world"，尽是无拘无束的童趣。',
        },
        {
          q: 36,
          q_text: 'What is the main idea of the last paragraph?',
          opts: [
            'His father did not want his son to be a gardener.',
            'His father was tired of disagreeing with his son.',
            "His father had been impressed by his son's love of gardening.",
            'His father had been trying to find a job his son would enjoy.',
          ],
          answer: 2,
          explanation: '末段推断父亲内心其实注意到了作者"对一切生长开花结果之物的不灭热情"，即被其对园艺的热爱打动。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about the experience of running while listening to music. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
      type: 'paragraph_matching',
      passage:
        'Does music make you run faster?\n\n' +
        'Runner Adharanand Finn took part in an unusual race in order to test the theory that music can make you run faster.\n\n' +
        "An expert on the effects of music on exercise, Dr Costas Karageorghis, claims that listening to music while running can boost performance by up to 15%. To put this theory to the test, I took part in a special Rock 'n' Roll half marathon, which had groups of musicians playing at various points along the route.\n\n" +
        "As I lined up at the start with almost 4,000 other runners, a singer sang an inspiring song for us. It may explain why I got off to a good start. I only came eighth in the end, though, even though I'd just spent six months training hard. (37) However, it turns out that all the training may have affected my response to the music; according to the research, the benefits of listening to music decrease with the level of intensity of the running.\n\n" +
        "'Elite athletes,' says Karageorghis, 'tend to focus inwardly when they are running.' According to him, most other runners look for stimulus and distraction from what is going on around them. 'Judging by your time,' he says, 'you are one of the former.' It is true. Apart from the song at the start, when I was standing still, I can barely remember the music played along the course. The first act I passed, a folk group, made me smile, and at one point I found myself running in time to the beat of some hard rock. (38) I can't say they helped my performance very much. But what did other runners make of the music?\n\n" +
        "Adam Bull usually runs marathons with no music and little crowd support. ' (39) With the upbeat bands, you find yourself running to the beat, which helps. It also brings out people to cheer you on.' Rosie Bradford was also a convert. 'As we ran past one band and they started playing These Boots Were Made for Walking, everybody suddenly went faster.'\n\n" +
        "The only person I found who was less than happy with the music was Lois Lloyd. 'There wasn't enough of it, and I found it wasn't loud enough, so I ran with an MP3 player,' she said. ' (40) Karageorghis is not surprised when I tell him. 'There are many advantages to using your own player, rather than relying on the music on the course,' he says. 'It gives you a constant stimulus, rather than just an occasional one, and you can tailor the playlist to your taste.'\n\n" +
        'One runner told me there was a direct correlation between the quality of the music on the course and how much it helped. But quality, of course, is subjective. I remember feeling annoyed as I ran past one band playing Keep On Running. (41)\n\n' +
        'Of course, the music was not only there to help runners break their personal bests (although sadly it was unable to help me beat mine), but to provide a sense of occasion, draw out the crowds and create a carnival atmosphere. (42) As I left, people were beginning to relax after the run, listening to an excellent rock band. It was a fitting way to end the day.',
      options: [
        { label: 'A', text: 'I need my music all the time.' },
        { label: 'B', text: 'I think they knew why I found the music here so distracting.' },
        { label: 'C', text: 'I enjoyed that for a few moments, but both of them came and went in a flash.' },
        { label: 'D', text: 'Along with some spring sunshine, it certainly achieved that.' },
        { label: 'E', text: 'Someone else, though, may have found it uplifting.' },
        { label: 'F', text: 'I was, in fact, taking my running pretty seriously at that time.' },
        { label: 'G', text: 'The music here has been great for my performance.' },
      ],
      items: [
        { q: 37, answer: 'F', explanation: '前句说苦练六个月最终却只得第八，F 项"其实我当时是把跑步很当回事的"承上启下，引出"训练可能影响了我对音乐的反应"。' },
        { q: 38, answer: 'C', explanation: 'C 项"很享受那几分钟，但两者都转瞬即逝"，both 指前文的 folk group 与 hard rock，衔接下句"不能说它们帮助很大"。' },
        { q: 39, answer: 'G', explanation: 'G 项"这里的音乐对我的表现大有好处"，Adam Bull 平时跑步没有音乐，此句引出 with the upbeat bands 的具体好处。' },
        { q: 40, answer: 'A', explanation: 'A 项"我随时都需要音乐"，解释 Lois 自带 MP3 player 的原因，并引出 Karageorghis 对自带播放器优点的评价。' },
        { q: 41, answer: 'E', explanation: 'E 项"不过别人也许觉得它令人振奋"，与前句作者对 Keep On Running 感到恼火形成对照。' },
        { q: 42, answer: 'D', explanation: 'D 项"再加上些春日阳光，它确实做到了"，呼应前句"营造嘉年华氛围"，衔接 As I left 的收尾场景。' },
      ],
    },
    7: {
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read four reviews of a science documentary series on TV. For questions 43–52, choose from the reviews (A–D). The reviews may be chosen more than once.',
      type: 'multiple_matching',
      sections: [
        {
          label: 'A',
          name: 'Science for All',
          text:
            "Fortunately for me and non-scientists everywhere, the makers of Science for All are there to plug the gaps in our knowledge. The series is rather like a knowledgeable parent who doesn't mind being pestered by wide-eyed and curious children: it takes the time to explain all those fascinating mysteries of nature in an entertaining and understandable way. The last series opened my eyes to all manner of interesting facts and demystified some of the problems faced by modern physics. And the new series shows no lack of inspiration for subjects to tackle: everything from the existence of life on other planets to the odd properties of human memory are rightly considered suitable subjects. So, while it's a shame that factual programmes are getting increasingly scarce these days, it's a comfort that Science for All shows no signs of dipping in quality or disappearing from public view.",
        },
        {
          label: 'B',
          name: 'Out in Space',
          text:
            "Although I wasn't expecting much from this series, I'm pleased that the producers of Out in Space persisted with their unpromising subject. In the course of the first programme we learn about hurricanes, deserts, and even how the Moon was made; a bewildering mix of phenomena that, we were assured, were all caused by events beyond our planet's atmosphere. That's not to say the programme explored them in any great detail, preferring to skip breathlessly from one to the next. The essential logic of the series seemed to be that if you take any natural phenomenon and ask 'why?' enough times, the answers will eventually be that it's something to do with space. The two presenters attempted to get it all to fit together, by taking part in exciting activities. Sadly these only occasionally succeeded.",
        },
        {
          label: 'C',
          name: 'Stars and Planets',
          text:
            "The second series of Stars and Planets is an attempt to take advantage of the success of the first, which unexpectedly gained a substantial general audience. Like its predecessor, this is big on amazing photography and fabulous graphics, most of which are much less successful at communicating the immensity of the ideas involved than one human being talking to you directly. This time the scope is even wider, astronomically speaking. What we are being introduced to here are ambitious ideas about time and space, and the presenter succeeds rather better than you might expect. It helps that he doesn't go too deep, as once you start thinking about it this is tricky stuff to get your head around. The point of such programmes is less to explain every detail than to arouse a generalised sense of amazement that might lead to further thinking, and Stars and Planets is certainly good at that.",
        },
        {
          label: 'D',
          name: 'Robot Technology',
          text:
            "This ground-breaking science documentary series follows a group of experts as they attempt to build a complete artificial human from robotic body parts. The project sees scientists use the latest technology from the world's most renowned research centres and manufacturers. It is the realisation of a long-held dream to create a human from manufactured parts, using everything from bionic arms and mechanical hearts, eye implants and microchip brains. The series explores to what extent modern technology is capable of replacing body parts – or even improving their abilities. The presenter, very appropriately, has an artificial hand himself. This ambitious series gives us a guided tour of the wonders of modern technology. Though it can be a slightly upsetting journey at times, it engages the audience in a revolution that is changing the face of medicine.",
        },
      ],
      items: [
        { q: 43, q_text: 'an effort was made to connect a number of unrelated issues?', answer: 'B', explanation: 'B：两位主持人 attempted to get it all to fit together，努力把飓风、沙漠、月球成因等互不相关的话题串联起来。' },
        { q: 44, q_text: 'the topics covered are well chosen?', answer: 'A', explanation: 'A：从外星生命到人类记忆的选题 are rightly considered suitable subjects，选材得当。' },
        { q: 45, q_text: 'viewers are shown how science can occasionally do better than nature?', answer: 'D', explanation: 'D：科技不仅能替换身体部件，or even improving their abilities，展示科技有时胜过自然。' },
        { q: 46, q_text: 'the series deals with something people have hoped to achieve for a while?', answer: 'D', explanation: 'D：It is the realisation of a long-held dream——用制造部件造出人是人们长久以来的梦想。' },
        { q: 47, q_text: "the series unfortunately didn't spend a lot of time explaining the topics covered?", answer: 'B', explanation: 'B：节目 not explored them in any great detail，preferring to skip breathlessly from one to the next，未花时间深入讲解。' },
        { q: 48, q_text: 'viewers are clearly informed?', answer: 'A', explanation: 'A：像有学问的家长 takes the time to explain… in an entertaining and understandable way，讲解清楚易懂。' },
        { q: 49, q_text: "it's good that viewers are not required to consider all aspects of the subject carefully?", answer: 'C', explanation: "C：It helps that he doesn't go too deep——主持人不深挖，观众不必细究便可欣赏。" },
        { q: 50, q_text: 'the series was worth making despite the topic not appearing very interesting at first?', answer: 'B', explanation: "B：I wasn't expecting much… persisted with their unpromising subject——题材起初不看好，但坚持做下来是值得的。" },
        { q: 51, q_text: 'viewers may not always find the series comfortable to watch?', answer: 'D', explanation: 'D：Though it can be a slightly upsetting journey at times——观看时偶有令人不适之处。' },
        { q: 52, q_text: 'the series achieves its aims by astonishing its viewers?', answer: 'C', explanation: 'C：节目目的 less to explain every detail than to arouse a generalised sense of amazement——靠令观众惊叹达成目标。' },
      ],
    },
  },
}

// ===== 标准版1 · Test 4（转录片段来源：scripts/fragments/std1-t4-reading.mjs）=====
// ===== 标准版1 · Test 4（书页 74–85；Key: 书页 155/PDF 154，已逐题核对）=====
const STD1_T4 = {
  meta: {
    id: 'fce-standard-1-test4-reading',
    title: 'FCE 标准版真题 1 · Test 4 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Reading and Use of English',
    pages: '书 74–85',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 4 Key（书 155 / PDF 154）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
      type: 'mcq_cloze',
      passage:
        'Memory\n\n' +
        'Memory is at the (0).......... of our sense of personal identity. If we did not have memory, we would not be (1).......... of our relationships with other people and would have no (2).......... that we had had any past at all. And without memory we would have no knowledge on which to (3).......... our present and future.\n\n' +
        'Memory (4).......... of three processes: registration, retention and recall. Registration happens when we consciously notice something. Retention is the next (5).......... , when we keep something we have noticed in our minds for a certain period of time. Finally, recall occurs when we actively think about some of these things that are (6).......... in our minds.\n\n' +
        'Every day we are subjected to a vast (7).......... of information. If we remembered every (8).......... thing we had ever seen or heard, life would be impossible. Consequently, our brains have learnt to register only what is of importance.',
      items: [
        { q: 1, opts: ['familiar', 'aware', 'informed', 'acquainted'], answer: 1, explanation: 'be aware of 固定搭配"意识到"；familiar 后需接 with。' },
        { q: 2, opts: ['view', 'suggestion', 'belief', 'idea'], answer: 3, explanation: 'have no idea that… 固定搭配"完全不知道"。' },
        { q: 3, opts: ['base', 'depend', 'do', 'make'], answer: 0, explanation: 'base A on B 以 B 为 A 的基础；on which to base our present and future。' },
        { q: 4, opts: ['contains', 'involves', 'includes', 'consists'], answer: 3, explanation: 'consist of 固定搭配"由……组成"。' },
        { q: 5, opts: ['action', 'division', 'set', 'stage'], answer: 3, explanation: 'the next stage 下一阶段，指记忆三过程中的第二步 retention。' },
        { q: 6, opts: ['seated', 'stocked', 'stored', 'sited'], answer: 2, explanation: 'stored in our minds 储存在脑海中，与记忆话题搭配。' },
        { q: 7, opts: ['level', 'amount', 'extent', 'number'], answer: 1, explanation: 'a vast amount of information 修饰不可数名词 information。' },
        { q: 8, opts: ['exact', 'single', 'one', 'isolated'], answer: 1, explanation: 'every single thing 强调结构"每一件小事"。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'open_cloze',
      passage:
        'Visit to a sweets factory\n\n' +
        'Today I am visiting a sweets factory, a building squeezed (0).......... a railway line and a canal. (9).......... I watch, trucks filled with sugar arrive at the factory where this family-owned company has been making sweets for some 80 years.\n\n' +
        'Being in a factory (10).......... this one is exactly (11).......... children dream of. I am staring at huge vats of sticky liquid (12).......... eventually ends up as mouth-watering sweets. Every now (13).......... then I see a factory worker in a white coat put a sweet into her mouth.\n\n' +
        "Ailsa Kelly, granddaughter of the company owner, remembers visiting the factory as (14).......... child with her grandfather. 'He would take me onto the factory floor and introduce me,' she says. 'He told me, \"You may work here some day.\"' And indeed, she has, continuously, (15).......... 1999. The sense of family is (16).......... of the reasons employees are remarkably loyal to the company.",
      items: [
        { q: 9, answer: ['AS', 'WHILE'], show: 'AS / WHILE', explanation: 'As/While I watch 当我观看时，引导时间状语从句。' },
        { q: 10, answer: ['LIKE'], show: 'LIKE', explanation: 'a factory like this one 像这样的工厂，like 作介词"像"。' },
        { q: 11, answer: ['WHAT'], show: 'WHAT', explanation: 'exactly what children dream of 正是孩子们梦想的，what 引导表语从句。' },
        { q: 12, answer: ['WHICH', 'THAT'], show: 'WHICH / THAT', explanation: '先行词 liquid，which/that eventually ends up 引导定语从句。' },
        { q: 13, answer: ['AND'], show: 'AND', explanation: 'every now and then 固定短语"不时地"。' },
        { q: 14, answer: ['A'], show: 'A', explanation: 'as a child 当还是孩子时，单数可数名词需不定冠词。' },
        { q: 15, answer: ['SINCE'], show: 'SINCE', explanation: 'she has worked continuously since 1999，since 与完成时连用。' },
        { q: 16, answer: ['ONE'], show: 'ONE', explanation: 'one of the reasons ……的原因之一，固定结构。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'word_formation',
      passage:
        'Job interviews\n\n' +
        'Most people feel rather (0) NERVOUS when they go for an interview for a new job. This is not surprising as getting a job one wants is important. People being interviewed expect the interviewers to be (17)_____, matching an applicant against a job (18)_____. However, what often happens in reality is that the interviewers make (19)_____ that are little more than reactions to the (20)_____ of the applicant.\n\n' +
        'Even skilled interviewers may, without realising it, (21)_____ favour people who make them feel at (22)_____. With this in mind, if you go for an interview you should try to make a good impression from the start by presenting the interviewers with the very best version of yourself, emphasising the (23)_____ of skills you have. You must appear very positive and as (24)_____ as possible. It is for you to convince the interviewers that you are definitely the most suitable person for the job.',
      items: [
        { q: 17, given: 'OBJECT', answer: ['OBJECTIVE'], show: 'OBJECTIVE', explanation: 'object → objective 客观的；expect the interviewers to be objective 期望面试官客观。' },
        { q: 18, given: 'DESCRIBE', answer: ['DESCRIPTION'], show: 'DESCRIPTION', explanation: 'describe → description 描述；a job description 职位描述。' },
        { q: 19, given: 'DECIDE', answer: ['DECISIONS'], show: 'DECISIONS', explanation: 'decide → decisions 决定；make decisions 后接 that are little more than…（复数）。' },
        { q: 20, given: 'PERSON', answer: ['PERSONALITY'], show: 'PERSONALITY', explanation: 'person → personality 个性；the personality of the applicant 应聘者的个性。' },
        { q: 21, given: 'CONSCIOUS', answer: ['UNCONSCIOUSLY'], show: 'UNCONSCIOUSLY', explanation: 'conscious → unconsciously 不自觉地；without realising it 提示否定副词修饰 favour。' },
        { q: 22, given: 'EASY', answer: ['EASE'], show: 'EASE', explanation: 'easy → ease 轻松；feel at ease 感到自在，固定搭配。' },
        { q: 23, given: 'VARY', answer: ['VARIETY'], show: 'VARIETY', explanation: 'vary → variety 多样性；the variety of skills 技能的多样性。' },
        { q: 24, given: 'ENTHUSIASM', answer: ['ENTHUSIASTIC'], show: 'ENTHUSIASTIC', explanation: 'enthusiasm → enthusiastic 热情的；as enthusiastic as possible。' },
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
          stem: "'Do you know the cost of the trips?' asked Pamela.",
          key: 'MUCH',
          answer: ['how much the trips'],
          show: 'how much the trips',
          explanation: 'the cost of the trips → how much the trips… were，间接引语时态后移。'
        },
        {
          q: 26,
          stem: 'During the quiz, I could not think of the correct answer to the winning question.',
          key: 'COME',
          answer: ['able to come up with'],
          show: 'able to come up with',
          explanation: 'could not think of → was not able to come up with 想出。'
        },
        {
          q: 27,
          stem: 'I promised that I would think carefully about the job offer.',
          key: 'GIVE',
          answer: ['to give careful thought to', 'to give thought to', 'to give careful consideration to', 'to give consideration to'],
          show: 'to give (careful) thought / consideration to',
          explanation: 'think carefully about → give (careful) thought/consideration to 认真考虑。'
        },
        {
          q: 28,
          stem: 'The group continued to walk despite rain starting to fall.',
          key: 'EVEN',
          answer: ['on walking even when it', 'on even when it', 'on walking even though it', 'on even though it', 'on walking even after it', 'on even after it'],
          show: 'on (walking) even when / though / after it',
          explanation: 'continued to walk → carried on (walking)；despite rain starting to fall → even when/though/after it started to rain。'
        },
        {
          q: 29,
          stem: "Almost all the tickets for next Saturday's concert have been sold.",
          key: 'HARDLY',
          answer: ['hardly any tickets left', 'hardly any tickets remaining', 'hardly any tickets available', 'hardly any tickets still available'],
          show: 'hardly any tickets left / remaining / (still) available',
          explanation: 'almost all … have been sold → there are hardly any tickets left 几乎没有票剩下。'
        },
        {
          q: 30,
          stem: 'Do you think it is likely that Peter will get the job he has applied for?',
          key: 'CHANCE',
          answer: ['a chance of getting', 'any chance of getting'],
          show: 'a / any chance of getting',
          explanation: 'it is likely that Peter will get → Peter has a/any chance of getting 有机会得到。'
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an article about the video games industry. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
      type: 'reading_mcq',
      passage:
        'A career in the video games industry?\n\n' +
        'Reporter Lauren Cope finds out about working in the video games industry.\n\n' +
        "Initially populated by computer scientists and the self-taught, the video game design industry used not to offer many routes into its midst. Often, perhaps unfairly, viewed as just a hobby for young enthusiasts, the video games industry is now being taken seriously. Surprised? Industry experts aren't.\n\n" +
        "It's not easy though. Video game spin-offs that rapidly follow any new movie require dozens of team members and months of incredible skill, perseverance and intricacies. As with almost every industry, it's tricky to get into – but it is expanding. Jim Donely, a spokesman for an online games magazine says: 'It's certainly very difficult to make much headway within big companies, or to influence any of the really big mainstream games. But the truth is, the industry needs game designers more than ever. Not just director-level people who orchestrate an entire game, but the lower-level people who design systems and individual set pieces.'\n\n" +
        "So, how can you get into such a competitive industry? Although many companies prefer people to have a degree in computer science, Jim disagrees. 'There is only one route: make games. The tools are there. You won't get a job if you haven't made something, and you won't get anywhere independently if you are not making stuff. Game design is less a job than it is a way of life. Like any creative endeavour it must be done to be real.' Another industry expert, John Field, sees other options. (line 32) 'There's a lot to be said for \"just doing it\", but it's really more complicated than that. There are lots of people who want to work in games, but few who measure up to the requirements of the industry these days; even fewer who have the creative talent, technical know-how, vision and entrepreneurial ability to really contribute to the ever-changing face of an evolving medium.'\n\n" +
        "Can you do it on your own? 'Perhaps, but it's pretty tricky,' says John. 'However, a good postgraduate course in games can help, plus provide a year or two of top-level support and guidance. Most games designers start their careers as programmers or artists, progressing their way up the ladder. They are interested in all forms of entertainment media, plus have a healthy appetite for all areas of the arts and contemporary culture. They may or may not have spent a few years in the working world post-graduation, but have realised that games is going to be their \"thing\". They are not merely fans, but are fascinated by the future possibilities of games, and are aware of the increasing breadth and diversity of the form. And finally connections can help. (line 54) This is often overlooked, but in order to get ahead in games – as in many other areas – you need to network.'\n\n" +
        "The childish stereotype of the adolescent boy glued to his games console has long been replaced by the more accurate perception of a grown-up medium, grabbing our attention. Families frequently get involved on interactive consoles. Smart phones introduce a wealth of new games through apps, as well as social media. John believes there is plenty of room for expansion. 'Games have become pervasive play-things for increasingly large audiences. They are also a great way to learn things and I see this already big area as an expanding array of possibilities and opportunities.'",
      items: [
        {
          q: 31,
          q_text: "What is the writer's main point about the video games industry in the first paragraph?",
          opts: [
            'It is reasonable to consider making a living in this field.',
            "Young people's contributions to it should be appreciated.",
            'It offers a relatively limited number of career options.',
            'Specialists in this area have failed to value its potential.',
          ],
          answer: 0,
          explanation: '首段：曾被不公地当作年轻人的爱好，如今已被认真对待——把游戏行业作为谋生选择是合理的。',
        },
        {
          q: 32,
          q_text: 'What does Jim tell us about the video games industry?',
          opts: [
            'It can be hard to decide which idea will prove successful.',
            'Many designers are required to take charge of each large project.',
            'It is worth recognising the value of having a long-term strategy.',
            'There is room for people with different degrees of responsibility.',
          ],
          answer: 3,
          explanation: 'Jim 说行业不仅需要 director-level 的统筹者，也需要 lower-level 的设计者——不同责任层级都有发展空间。',
        },
        {
          q: 33,
          q_text: "What does 'that' refer to in line 32?",
          opts: [
            'getting a degree in computer science',
            'making games',
            'being independent',
            'seeing other options',
          ],
          answer: 1,
          explanation: 'Jim 坚持唯一的路是 make games，it\u2019s really more complicated than that 中的 that 即指这件事。',
        },
        {
          q: 34,
          q_text: 'What opinion does John express in the third paragraph?',
          opts: [
            'It is a mistake to believe that the jobs people do in the industry are easy.',
            'Many people lack the qualities needed to do effective work in the industry.',
            'The industry could benefit from people who have a strong desire to work in it.',
            'The industry is changing too rapidly for people to keep up with it.',
          ],
          answer: 1,
          explanation: 'John 说想入行者众多，但 few who measure up to the requirements、even fewer who have the creative talent…——多数人欠缺行业所需素质。',
        },
        {
          q: 35,
          q_text: "What does 'overlooked' mean in line 54?",
          opts: [
            'not considered',
            'understood',
            'not used',
            'required',
          ],
          answer: 0,
          explanation: '人脉对入行很有帮助却常被忽视，overlooked＝未被考虑到。',
        },
        {
          q: 36,
          q_text: 'In the final paragraph, we are told that',
          opts: [
            'video games have not been effectively exploited as learning tools.',
            'young people are being offered more demanding games to play.',
            'people used to misunderstand the true nature of video games.',
            'other technologies have forced the games industry to compete.',
          ],
          answer: 2,
          explanation: '末段：沉迷游戏机的少年这一幼稚刻板印象已被成人化媒介的正确认知取代——过去人们误解了游戏的本质。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read part of the autobiography of David Coulthard, who is a retired Formula One racing driver. Six sentences have been removed from the autobiography. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
      type: 'paragraph_matching',
      passage:
        'Grand Prix driver\n\n' +
        "I'm a great believer in success, in achieving whatever goal you set on a particular day, so whether I was practising on the track or working out in the gym, I always put my heart and soul into it.\n\n" +
        "When I was learning my trade, racing on karts as a teenager, I would look after my helmet and race suit carefully. Everything had to be perfect; it was all about preparation. At 18, I progressed to Formula Ford racing, a stage before Formula One, and I'd even get the car up in the garage and polish the underside until it was gleaming. (37) But I made the point, jokingly, that if I ever rolled over in a race, my car would have the shiniest underside in history.\n\n" +
        "It may be that the environment of Formula One fuelled this obsession with neatness and cleanliness. It's a profession based on precision and exactness. If you walk around a team factory it looks like a science laboratory. (38) A Formula One factory couldn't be further from that; it's like something from another planet.\n\n" +
        "Everything is aircraft standard and quality. And so it should be. If some mega-rich potential sponsor walks into a dirty factory to find people lounging around, that doesn't make a great impression. If they walk in and everyone's working hard and there's not a speck of dust anywhere, that's another matter. (39)\n\n" +
        "Polishing my helmet was a specific ritual I had. The race helmet is an important and prized possession. When you're starting out, you only have one helmet for several years and it can be a pricey piece of kit. (40) By the time you get to Formula One, you're getting through probably a dozen or more expensive ones a year. Normally I'd never have dreamed of wearing someone else's, but I did have a problem with the front of my helmet some years ago at the Monaco Grand Prix, and just couldn't see properly. In the end I used one belonging to Nelson Piquet.\n\n" +
        "He very kindly let me keep the helmet after the race. He'd finished second in the Brazilian Grand Prix with that helmet, so it's a unique piece of history – two drivers wearing the same helmet and finishing second in different races. Four years later, Nelson said he wanted to swap another helmet with me. This was before he'd announced he was retiring, so my immediate thought was, what's with this helmet collection thing? (41) There must be something in it. So I gave him a helmet and he gave me a signed one of his.\n\n" +
        "Helmets are treasured and it's quite rare for me to give race ones to anyone. I only gave my friend Richard one recently, although we've known each other since we were five. Sometimes it's easy to forget obvious things. (42) It should be the other way round.",
      options: [
        { label: 'A', text: 'I certainly took good care of mine as a result.' },
        { label: 'B', text: "You take for granted those you're closest to and you make an effort with people you hardly know." },
        { label: 'C', text: 'But it was only natural for me to be so particular about cleanliness before racing.' },
        { label: 'D', text: 'Think of a motor mechanic, and you think of oil and dirt, filthy overalls, grubby fingers.' },
        { label: 'E', text: "Some people said this was ridiculous because it wasn't as if anyone was ever going to see it." },
        { label: 'F', text: 'Perhaps I should be doing it as well.' },
        { label: 'G', text: "That's why all the teams try and compete hard with each other on presentation." },
      ],
      items: [
        { q: 37, answer: 'E', explanation: '前文说把赛车底盘抛光到锃亮，E 项"有人说这很荒谬，反正没人会看到"，引出后文 But I made the point, jokingly…（最亮的车底）。' },
        { q: 38, answer: 'D', explanation: '前文说车队工厂像科学实验室，D 项"想到机修工就想到油污与脏工装"，后文 couldn\u2019t be further from that 与之呼应。' },
        { q: 39, answer: 'G', explanation: '前文讲工厂整洁能给赞助商留下好印象，G 项"这就是各车队在呈现形象上互相较劲的原因"总结上文。' },
        { q: 40, answer: 'A', explanation: '前文说起步时只有一个昂贵头盔，A 项"因此我当然好好爱护它"，与后文进 F1 后一年换十几个形成对比。' },
        { q: 41, answer: 'F', explanation: 'Nelson 四年后又想交换头盔，作者疑惑 what\u2019s with this helmet collection thing?，F 项"也许我也该收集"，接 There must be something in it。' },
        { q: 42, answer: 'B', explanation: '前文说只把比赛头盔送给老友 Richard，B 项"人对最亲近的人反而想当然"，引出结论 It should be the other way round。' },
      ],
    },
    7: {
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article about four women who have recently worked as volunteers. For questions 43–52, choose from the women (A–D). The women may be chosen more than once.',
      type: 'multiple_matching',
      sections: [
        {
          label: 'A',
          name: 'Teressa',
          text:
            "For many years I had fantasised about spending December on a white, tropical beach on a remote island. I finally found my slice of paradise in the Seychelles when my dream came true last year, though not exactly in the way I had envisaged. I had been feeling burnt out from work and wanted to escape winter and learn new skills. Volunteer projects seemed a good option. Narrowing my search criteria to marine research helped cut down the thousands of options out there and I eventually joined a coral protection project to help determine the long-term impact of rising sea temperatures on the ecosystem. Within 24 hours of our group's arrival, we lived and breathed coral, not just under water but also in the camp – with 52 coral types to master and up to three research dives a day. If there was a downside, it was the seemingly endless chores in the camp, but I didn't mind. But the experience was, overall, incredible. I stretched myself beyond my wildest imagination.",
        },
        {
          label: 'B',
          name: 'Patricia',
          text:
            "Imagine spending the summer as I did, working on the edge of an active volcano in Hawaii. I had once been on a ranger-guided walk there with my family. I had been terrified. However, as I relaxed I slowly realised that the ranger's job was something I'd like to do too. So a few years later I applied and got a volunteer ranger job. I found living there surprisingly laid back, as well as exciting. After a crash course in geology, I was given the volunteer ranger uniform and began the job. On the first morning I found myself in front of a group of visitors. Suddenly, I was the 'authority', delivering a talk on the volcanic past and present of the islands. As a volunteer I was making the park come alive for the visitors, and they in turn made Hawaii come alive for me.",
        },
        {
          label: 'C',
          name: 'Helen',
          text:
            "After months of study, I wanted to get away for a bit. My dad is an artist and often does paintings of tropical birds. I'd always wanted to find out more about them. From the internet I found that a farm which breeds parrots was looking for volunteers. I arrived in the middle of a panic situation – a storm had knocked the electricity out, and the generator, needed for keeping the eggs warm, was nearly out of petrol. After visiting several garages we found some and dashed back just in time. I really enjoyed my stay. Some hosts lay down strict rules on the amount of work expected but luckily mine, Darryl, preferred to set out projects which he wanted my help with. Most of the time I did basic maintenance jobs and fed the birds. 'They can break coconuts with their beaks and they'll take your finger off so be careful,' Darryl advised. So, I chopped bananas and then used a long fork to pass the fruit in to the birds without risking my fingers.",
        },
        {
          label: 'D',
          name: 'Kate',
          text:
            'During my stay in Guatemala, I volunteered to work on a plantation. One day, my supervisor, René inspected my scratched hands and asked gently if I needed gloves. I gathered my strength and told him that gloves might indeed help. Then I grasped my knife and resumed my attack on the invading roots that were constantly threatening to drag the fragile new cacao plantation back into the rainforest. In the sticky red earth, everything grows – the trouble is that it is rarely what you planted. Walking through the plantation, René had to point out to me the treasured cash crops of coffee, cacao and macadamias. To my eye, they were indistinguishable from the surrounding jungle. Every day I caught glimpses of little waterfalls and vividly coloured butterflies between towering bamboo. The air was always heavy with the sound of insects. It was a great experience.',
        },
      ],
      items: [
        { q: 43, q_text: 'found that there was a wide choice of opportunities?', answer: 'A', explanation: 'Teressa：缩小到海洋研究才从 the thousands of options out there 中筛出项目——机会选择非常多。' },
        { q: 44, q_text: 'was very aware of all aspects of natural life around her?', answer: 'D', explanation: 'Kate：每天看到小瀑布、彩色蝴蝶、高大竹子，空气中满是虫鸣——对身边自然生命的方方面面很敏感。' },
        { q: 45, q_text: 'was warned of a possible danger?', answer: 'C', explanation: 'Helen：Darryl 提醒 they\u2019ll take your finger off so be careful——被明确警告危险。' },
        { q: 46, q_text: 'did not achieve her ambition quite as she had expected?', answer: 'A', explanation: 'Teressa：梦想成真但 not exactly in the way I had envisaged——实现方式与预想不同。' },
        { q: 47, q_text: 'thought that she had gained as much as she had given?', answer: 'B', explanation: 'Patricia：我让公园在游客眼中生动起来，他们也让夏威夷在我心中生动起来——付出与收获相当。' },
        { q: 48, q_text: 'was shown sympathy by someone on her project?', answer: 'D', explanation: 'Kate：主管 René 看到她划伤的双手，温和地问她需不需要手套——被体谅关心。' },
        { q: 49, q_text: 'says her family had influenced her choice of work?', answer: 'C', explanation: 'Helen：爸爸常画热带鸟类，她一直想多了解它们——家人的影响引出职业选择。' },
        { q: 50, q_text: 'says she amazed herself by what she achieved?', answer: 'A', explanation: 'Teressa：I stretched myself beyond my wildest imagination——连自己都惊讶于所达成的。' },
        { q: 51, q_text: 'appreciated the flexibility of her boss?', answer: 'C', explanation: 'Helen：别的雇主立严格规矩，而她的雇主 Darryl 只按需安排项目——庆幸雇主灵活。' },
        { q: 52, q_text: 'describes the difficulties posed by the environment she was in?', answer: 'D', explanation: 'Kate：黏红土里什么都疯长，it is rarely what you planted——种植园环境带来的麻烦。' },
      ],
    },
  },
}

// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 1（书内印作 Test 5）Reading and Use of English: 书页 8–19（PDF 9–20）
// 答案核对自 Test 5 Key（书 120 / PDF 121），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹

const STD2_T1 = {
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

// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// Test 6（应用 Test 2）Reading and Use of English: 书页 30–41（PDF 31–42），答案核对自 Test 6 Key（书 132 / PDF 133）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录，含英文撇号的字符串一律用双引号包裹。

const STD2_T2 = {
  meta: {
    id: 'fce-standard-2-test2-reading',
    title: 'FCE 标准版真题 2 · Test 2 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Reading and Use of English',
    pages: '书 30–41',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 6 Key（书 132 / PDF 133）',
    examKey: 'fce-standard-2-test2',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
      type: 'mcq_cloze',
      passage:
        'The importance of science\n\n' +
        'The aim of science is to (0).......... out how the world and everything in it, and beyond it, works. Some people, though, (1).......... that much of what is done in the name of science is a waste of time and money. What is the (2).......... in investigating how atoms behave or in studying stars billions of kilometres away? Science, they argue, is of (3).......... only if it has some practical use.\n\n' +
        'When the Scottish scientist James Clerk Maxwell (4).......... experiments with electricity and magnetism in the late 19th century, he had no particular end in (5).......... and was certainly not (6).......... to make money; he was simply trying to reveal more about how the world works. And yet his work laid the (7).......... for our modern way of life. Computers, the internet, satellites, mobile phones, televisions, medical scanners all owe their existence to the fact that a scientist (8).......... the need to understand the world a little better.',
      items: [
        { q: 1, opts: ['claim', 'demand', 'tell', 'review'], answer: 0, explanation: 'claim that… 声称；下文 a waste of time and money 是声称的内容。' },
        { q: 2, opts: ['basis', 'cause', 'point', 'sake'], answer: 2, explanation: 'the point in doing sth 做某事的意义；What is the point in investigating…。' },
        { q: 3, opts: ['gain', 'profit', 'advantage', 'value'], answer: 3, explanation: 'of value 有价值的；only if it has some practical use 提示"有实际用处才有价值"。' },
        { q: 4, opts: ['brought on', 'carried out', 'pulled out', 'set off'], answer: 1, explanation: 'carry out experiments 固定搭配"做实验"。' },
        { q: 5, opts: ['plan', 'idea', 'mind', 'thought'], answer: 2, explanation: 'have no particular end in mind 没有特别的目的。' },
        { q: 6, opts: ['reaching', 'aiming', 'targeting', 'designing'], answer: 1, explanation: 'not aiming to make money 并非以赚钱为目标；aim to do 固定搭配。' },
        { q: 7, opts: ['sources', 'origins', 'structures', 'foundations'], answer: 3, explanation: 'lay the foundations for 为……奠定基础。' },
        { q: 8, opts: ['held', 'felt', 'chose', 'used'], answer: 1, explanation: 'felt the need to understand 感到有理解的必要。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'open_cloze',
      passage:
        'Food preservation\n\n' +
        "Keeping food for long periods (0).......... time was historically a huge problem. This proved especially crucial (9).......... times when agricultural production (10).......... severely limited by weather or crop failure. People commonly used ice to keep food fresh but, of (11).......... , ice itself melts relatively quickly. In 1859 an American, John Mason, invented a glass jar with a metal screw-on lid, creating a perfect seal and making (12).......... possible to preserve food that would previously not have remained edible. Mason's jar is still (13).......... use throughout the world.\n\n" +
        'An even (14).......... successful method for keeping food by canning it in metal containers was perfected between 1870 (15).......... 1920 by Englishman Bryan Donkin. This preserved food beautifully, though the early iron cans were expensive, heavy and difficult to open. A breakthrough came in the 1880s with the development of lighter materials (16).......... also enabled mass production of cans.',
      items: [
        { q: 9, answer: ['AT', 'DURING', 'IN'], show: 'AT / DURING / IN', explanation: 'crucial at/during/in times when… 在……的时期尤为关键。' },
        { q: 10, answer: ['WAS', 'BECAME'], show: 'WAS / BECAME', explanation: 'agricultural production was/became severely limited 被动语态，主语单数。' },
        { q: 11, answer: ['COURSE'], show: 'COURSE', explanation: 'of course 固定短语"当然"，插入语。' },
        { q: 12, answer: ['IT'], show: 'IT', explanation: 'making it possible to… it 作形式宾语，真正宾语是 to preserve food。' },
        { q: 13, answer: ['IN'], show: 'IN', explanation: 'still in use 固定搭配"仍在使用"。' },
        { q: 14, answer: ['MORE'], show: 'MORE', explanation: 'even more successful 比较级，even 修饰比较级。' },
        { q: 15, answer: ['AND'], show: 'AND', explanation: 'between 1870 and 1920 固定搭配。' },
        { q: 16, answer: ['WHICH', 'THAT'], show: 'WHICH / THAT', explanation: 'materials which/that also enabled… 限制性定语从句，指物。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS.',
      type: 'word_formation',
      passage:
        'Enjoying travel\n\n' +
        "I always enjoy travelling, (0) PARTICULARLY when it means visiting other countries. One of the clearest memories from my childhood is of going to Disneyworld. Some people disapprove of the place but I loved it as a child and found it just as (17)_____ when I returned years later as an adult.\n\n" +
        "I am (18)_____ that my work involves a lot of travel. The two places I visit most often are Barcelona and New York. I like both, but there is a tremendous (19)_____ between them. Barcelona is relaxed and overflowing with culture. New York, though, is bustling and full of (20)_____ . When I'm there I'm constantly looking upwards, overwhelmed by the (21)_____ of the buildings. It is quite (22)_____ anywhere else I've ever been.\n\n" +
        "I went to Tokyo last year and found it absolutely fascinating. However, my top (23)_____ for a city break has to be Toronto; it is visually (24)_____ and I've had some of the best meals I've ever eaten there.",
      items: [
        { q: 17, given: 'ENJOY', answer: ['ENJOYABLE'], show: 'ENJOYABLE', explanation: 'enjoy → enjoyable（just as enjoyable as 童年时一样有趣）。' },
        { q: 18, given: 'FORTUNE', answer: ['FORTUNATE'], show: 'FORTUNATE', explanation: 'fortune → fortunate（I am fortunate that… 感到幸运，形容词作表语）。' },
        { q: 19, given: 'DIFFERENT', answer: ['DIFFERENCE'], show: 'DIFFERENCE', explanation: 'different → difference（a tremendous difference between them，the 后接名词）。' },
        { q: 20, given: 'EXCITE', answer: ['EXCITEMENT'], show: 'EXCITEMENT', explanation: 'excite → excitement（full of excitement 充满令人兴奋的事物，名词）。' },
        { q: 21, given: 'HIGH', answer: ['HEIGHT'], show: 'HEIGHT', explanation: 'high → height（the height of the buildings 建筑的高度）。' },
        { q: 22, given: 'LIKE', answer: ['UNLIKE'], show: 'UNLIKE', explanation: 'like → unlike（quite unlike anywhere else 与去过的任何地方都不同，否定前缀 un-）。' },
        { q: 23, given: 'CHOOSE', answer: ['CHOICE'], show: 'CHOICE', explanation: 'choose → choice（my top choice 首选，形容词后接名词）。' },
        { q: 24, given: 'SPECTACLE', answer: ['SPECTACULAR'], show: 'SPECTACULAR', explanation: 'spectacle → spectacular（visually spectacular 视觉上壮观，形容词）。' },
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
          stem: 'Everyone apart from John thought that Lisa would get the job.',
          key: 'PERSON',
          answer: ['the only person that did', 'the only person who did'],
          show: 'the only person that/who did',
          explanation: 'apart from John → John was the only person that/who did not expect…，only person 强调唯一。',
        },
        {
          q: 26,
          stem: "I'm concerned about whether I'll be able to finish the project on time.",
          key: 'CONCERNS',
          answer: ['concerns me is'],
          show: 'concerns me is',
          explanation: 'be concerned about → What concerns me is…，把担忧的内容转为主语从句。',
        },
        {
          q: 27,
          stem: 'We had to leave the lecture early or we would have missed the last bus.',
          key: 'UNTIL',
          answer: ['had stayed until the end', "'d stayed until the end", 'had waited until the end', "'d waited until the end", 'had remained until the end', "'d remained until the end"],
          show: "had / 'd stayed / waited / remained until the end",
          explanation: "or we would have missed 提示与过去相反的虚拟，if 从句用过去完成时 had/'d stayed/waited/remained until the end。",
        },
        {
          q: 28,
          stem: 'The number of students going to university went up last year.',
          key: 'INCREASE',
          answer: ['was an increase in'],
          show: 'was an increase in',
          explanation: 'went up → there was an increase in…，用 there be 句型 + increase 名词化表达。',
        },
        {
          q: 29,
          stem: "I'll phone you tonight so you can tell me what you've been doing.",
          key: 'CATCH',
          answer: ['catch up on your', 'catch up on the', 'catch up with your', 'catch up with the', 'catch up on all your', 'catch up on all the', 'catch up with all your', 'catch up with all the'],
          show: 'catch up on/with (all) your/the',
          explanation: "tell me what you've been doing → to catch up on/with (all) your/the news，catch up on/with 表示了解近况。",
        },
        {
          q: 30,
          stem: "That was one of the best meals I've had this year.",
          key: 'AS',
          answer: ['few meals as good as'],
          show: 'few meals as good as',
          explanation: "one of the best meals I've had → very few meals as good as that one，否定式同级比较保留原意。",
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an article about a wildlife cameraman called Doug Allan. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
      type: 'reading_mcq',
      passage:
        'Wildlife cameraman\n\n' +
        "Doug Allan films wild animals in cold places. If you've ever been amazed by footage of polar bears in a nature documentary, it's probably been filmed by him. His perfect temperature, he says, is –18°C. Allan trained as a marine biologist and commercial diver. Diving was his first passion, where he learned about survival in cold places. His big break came when a TV crew turned up in Antarctica, where Allan was working, to film a wildlife documentary. 'I ended up taking the crew to different places, and after 48 hours I realised that being a wildlife cameraman ticked all the boxes: travel, adventure, underwater.'\n\n" +
        "He is now a top cameraman and has worked on many major TV wildlife series. 'I came along at a good time. When I started, hardly anyone had been to the Antarctic. You had coral people, elephant people, chimpanzee people. I just became the cold man. It was like all these amazing sequences were just waiting to be captured on film.' The camera and communications technology was very basic when he started 35 years ago. 'It is certainly easier to film today. If you shot something then, you had to remember it. Today, with digital technology, you can shoot a lot and look at it immediately. You used to have to think what shots you needed next, and what you had missed. You shot less. Film was very expensive. Today you can have too much material.'\n\n" +
        "'My value is field experience in cold conditions. I have a feel for it. I have spent so much time on sea ice it now feels like crossing the street. I do get cold toes but the poles are healthy places. There are no leeches, no diseases or mosquitoes.' Wildlife filming, Allan says, is full of great successes, but also failures and embarrassments. Once, he was in the Orkneys to film kittiwakes. Unfortunately he could not identify which birds they were.\n\n" +
        "When Allan recently got permission to film sequences for a major TV series in Kong Karls Land, a group of islands in the Arctic Ocean, he did not expect an easy assignment. It is a world of polar bears and is strictly off limits to all but the most fearless or foolish. Usually –32°C in April, the wind is vicious and hauling cameras in the deep snow is a nightmare. After walking five or more hours a day and watching polar bear dens in the snow slopes for 23 days, however, Allan had seen just one mother bear and her cub. By day 24, though, he says, he was living in bear world, at bear speed, with bear senses.\n\n" +
        "'We find a new hole and wait. We shuffle, hop, bend, stretch and run to stay warm. Five hours of watching and then with no warning at all I catch a glimpse so brief that I almost miss it. But the camera's locked on the hole on full zoom and my eye's very quickly on the viewfinder. Nothing for a couple of seconds and then an unmistakable black nose. Nose becomes muzzle, grows bigger to become full head and in less than a minute she has her front legs out and is resting on the snow in front of the hole. She's looking at me but she's not bothered. I've just taken a close-up, thinking this can't get much better … when she sets off on a long slide down the slope. I'd swear it's partly in sheer pleasure,' he recounts, adding that two cubs then appeared at the den entrance. 'Clearly it's their first view of the world … It's show time on the slopes and we have front-row seats.'\n\n" +
        "Now Allan would like to make his own film about climate change in the Arctic, talking to the people who live there and experience the (line 80) impact of it first hand. He says he would be able to make an extraordinary documentary.",
      items: [
        {
          q: 31,
          q_text: 'What do we learn about Allan in the first paragraph?',
          opts: [
            'He had to train as a diver in order to become a wildlife cameraman.',
            'Becoming a cameraman suited the interests he already had.',
            'He was given the chance to work as a cameraman by a TV crew he met.',
            'Finding work as a cameraman allowed him to remain in Antarctica.',
          ],
          answer: 1,
          explanation: '首段 Diving was his first passion… ticked all the boxes: travel, adventure, underwater——成为摄影师正契合他原有的潜水与冒险兴趣。',
        },
        {
          q: 32,
          q_text: 'What does Allan say about the first documentaries he worked on?',
          opts: [
            'He has very clear memories of them.',
            'Most of what he filmed was new to viewers.',
            'They were shorter than those he makes nowadays.',
            'He would have liked to have been able to choose where he worked.',
          ],
          answer: 1,
          explanation: ' hardly anyone had been to the Antarctic，他拍的珊瑚、大象、黑猩猩等画面当时观众很少见过。',
        },
        {
          q: 33,
          q_text: 'Why does Allan compare spending time on sea ice to crossing the street?',
          opts: [
            'It is an ordinary occurrence for him.',
            'He thinks it presents a similar level of danger.',
            'He has learnt to approach it in the same way.',
            'It requires skills that can be used in winter conditions anywhere.',
          ],
          answer: 0,
          explanation: 'I have spent so much time on sea ice it now feels like crossing the street——在冰上待得太久，过冰面已如过马路般平常。',
        },
        {
          q: 34,
          q_text: 'When Allan had been on Kong Karls Land for a while, he began to',
          opts: [
            'stop worrying about the dangers he was facing.',
            'feel a deep understanding of how polar bears lived.',
            'get used to the terrible conditions for filming.',
            'be more hopeful that one bear would lead him to others.',
          ],
          answer: 1,
          explanation: 'By day 24… he was living in bear world, at bear speed, with bear senses——开始深入体会熊的生存状态。',
        },
        {
          q: 35,
          q_text: 'What feeling does Allan describe in the fifth paragraph?',
          opts: [
            'panic when he nearly fails to film a fantastic sequence',
            'concern that he has disturbed an adult female with her young',
            'amazement at being lucky enough to capture some great shots',
            'delight at being able to move around after waiting quietly for ages',
          ],
          answer: 2,
          explanation: "拍下特写后感叹 this can't get much better…，又说熊滑下坡 I'd swear it's partly in sheer pleasure——为幸运拍到绝妙镜头而惊叹。",
        },
        {
          q: 36,
          q_text: 'What does it refer to in line 80?',
          opts: [
            "Allan's film",
            'climate change',
            'the Arctic',
            'living there',
          ],
          answer: 1,
          explanation: 'line 80 的 it 指 the impact of it first hand，承上句 his own film about climate change，故 it = climate change。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about how the Egyptian pyramids were built. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
      type: 'paragraph_matching',
      passage:
        'Has one of the mysteries of the ancient pyramids been solved?\n\n' +
        'A painting in a 3000-year-old tomb suggests how the Ancient Egyptians may have transported the heavy stones used to build the pyramids.\n\n' +
        'Ever since the discovery of the first pyramid, scientists have wondered how ancient Egyptians built these monumental structures that are visible even from space.\n\n' +
        "There are a number of theories about the construction techniques they used. (37) Egyptologists had always wondered how workers were able to move the giant limestone blocks. These weigh as much as 2.5 tons each, and the stone quarries from which they were cut were often located hundreds of kilometres away from the pyramid sites.\n\n" +
        "Dragging them on basic wooden sledges, similar to those people use to slide down snow-covered slopes in winter, was the obvious answer. (38) It now turns out that the workers probably did have some assistance – from ordinary water! What is even more amazing is that the answer to the Egyptologists' puzzle has been staring them in the face for many years, in a wall painting in the tomb of an ancient Egyptian king, or pharaoh.\n\n" +
        "The artwork, which depicts a pharaoh being pulled along by a large team of workers, has one significant detail that had so far been misinterpreted – a man pouring water in front of the sledge the pharaoh is being dragged upon. Egyptologists had always thought that the man was performing some kind of religious ritual. However, some scientists now believe that the water was being poured for a totally different reason. (39)\n\n" +
        "This revelation was made by researchers from the University of Amsterdam and the Foundation for Fundamental Research on Matter. The scientists arrived at this conclusion after conducting extensive testing in their laboratory, by sliding a weighted tray across both dry sand and sand that had been mixed with varying amounts of water. In dry sand, heaps formed in front of the tray as it was dragged along. (40)\n\n" +
        "However, as the researchers added water, the sand hardened, which helped reduce both the force needed to pull the tray and the friction against it. That's because the water helps form tiny water bridges, known as capillary bridges, between the sand particles, causing them to stick together. (41) The force required to pull the sledge would have been reduced by as much as 50% as the sand became stiffer, which meant that half as many workers were needed to move the heavy stones.\n\n" +
        "There was a tipping point, though. After the moisture exceeded a certain amount, the stiffness started to decrease and the capillary bridges melted away, causing the sand to clump up around the tray once again. According to the researchers, the perfect balance appears to be when the volume of the water is between 2–5% of the volume of sand. (42) And so another step has been taken towards understanding the incredible feat achieved by these ancient engineers. Now if we could only find a painting that would tell us how the workers erected these impressive structures without access to modern mechanics, that would be amazing!",
      options: [
        { label: 'A', text: 'However, to do so would have required superhuman strength against the friction of the desert sand.' },
        { label: 'B', text: 'This allowed them to work out exactly how much of it had been used every time.' },
        { label: 'C', text: 'This slowed it down dramatically.' },
        { label: 'D', text: 'One question, however, had been left unanswered.' },
        { label: 'E', text: 'The pyramid builders seem to have realised that this was the correct proportion.' },
        { label: 'F', text: 'The effect of this turns out to be significant.' },
        { label: 'G', text: 'It was to help the sledge move more easily across the sand.' },
      ],
      items: [
        { q: 37, answer: 'D', explanation: 'D 项"然而有一个问题一直未被回答"，承上启下，引出 Egyptologists had always wondered how… 这一悬而未决的老问题。' },
        { q: 38, answer: 'A', explanation: 'A 项"不过这样做需要超人的力量来对抗沙漠沙子的摩擦"，推翻 obvious answer，引出 It now turns out… ordinary water 的转折。' },
        { q: 39, answer: 'G', explanation: 'G 项"泼水是为了让雪橇更省力地在沙地上移动"，回答上句 water was being poured for a totally different reason 的目的。' },
        { q: 40, answer: 'C', explanation: 'C 项"这让雪橇明显慢了下来"，This 指前句干沙中 heaps formed in front of the tray 堆起的沙堆阻碍。' },
        { q: 41, answer: 'F', explanation: 'F 项"这种效果被证明是显著的"，承毛细水桥让沙粒粘在一起，引出后文 50% 的具体数字。' },
        { q: 42, answer: 'E', explanation: 'E 项"金字塔建造者们似乎早已明白这是正确的比例"，this 指前句 2–5% 的 perfect balance。' },
      ],
    },
    7: {
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read four reviews of books about sleep and dreams. For questions 43–52, choose from the reviews (A–D). The reviews may be chosen more than once.',
      type: 'multiple_matching',
      sections: [
        {
          label: 'A',
          name: 'Sleepfaring',
          text:
            "Why do we sleep? Are we sleeping enough? How can we tackle sleep problems? Jim Horne finds answers to these questions and many more in Sleepfaring, a journey through the science and the secrets of sleep. He reveals what goes on in our brains during sleep, and also gives some hints from the latest sleep research that may just help you get a better night's rest. In recent years, understanding sleep has become increasingly important, as people work longer hours, styles of working have altered, and the separation between workplace and home is being reduced by cell phones and the internet. Horne draws on the latest research to reveal what science has discovered about sleep. Nor does Horne avoid controversial topics; challenging, for example, the conventional wisdom on the amount of sleep we actually need. For anyone wishing to know more about the many mysterious processes that begin when we close our eyes each night, Sleepfaring offers a wealth of insight and information.",
        },
        {
          label: 'B',
          name: 'Dreaming',
          text:
            "What is dreaming? Why are dreams so strange and why are they so hard to remember? In this fascinating book, Harvard researcher Allan Hobson offers an intriguing look at our nightly journey through the world of dreams. He describes how the theory of dreaming has advanced dramatically. We have learned that, in dreaming, some areas of the brain are very active – the visual and auditory centres, for instance – while others are completely shut down, including the centres for self-awareness, logic, and memory. Thus we can have visually vivid dreams, but be utterly unaware that the sequence of events or localities may be bizarre and, quite often, impossible. And because the memory centre is inactive, we don't remember the dream at all, unless we wake up while it is in progress. With special boxed features that highlight intriguing questions – Do we dream in colour? (yes), Do animals dream? (probably) – Dreaming offers a cutting-edge account of the most mysterious area of our mental life.",
        },
        {
          label: 'C',
          name: 'Counting Sheep',
          text:
            "Even though we will devote a third of our lives to sleep, we still know remarkably little about its origins and purpose. Does getting up early really benefit us? Can some people really exist on just a few hours' sleep a night? Does everybody dream? Do fish dream? How did people cope before alarm clocks and caffeine? And is anybody getting enough sleep? Paul Martin's Counting Sheep answers these questions and more in this illuminating work of popular science. Even the wonders of yawning are explained in full. To sleep, to dream: Counting Sheep reflects the centrality of these activities to our lives and can help readers respect, understand, and appreciate that delicious time when they're lost to the world.",
        },
        {
          label: 'D',
          name: 'Dreamland',
          text:
            "Reporter Randall provides a brisk tour of sleep research and what it means for individuals hoping to feel well rested. The author engaged with sleep research in part because of his sleepwalking. Researching the world of sleep is obviously difficult because sleeping subjects selected for studies rarely remember anything specific. Nonetheless, Randall interviewed sleep researchers and read academic papers to learn what he could from those who devote their careers to the science of sleep. The book is not a continuous narrative but rather a loose progression of chapters about different sleep-related issues. For example, Randall explains how the invention of electricity led to countless cases of sleep deprivation; the lack of utter darkness after sunset is often the enemy of sound sleep. He also emphasises the too-often neglected common-sense realisation that sleep is no void; rather, it is perhaps one third of the puzzle of living well.",
        },
      ],
      items: [
        { q: 43, q_text: 'emphasises how enjoyable sleep is?', answer: 'C', explanation: "C：Counting Sheep 结尾 that delicious time when they're lost to the world、can help readers respect, understand, and appreciate…，强调睡眠时光的享受与珍贵。" },
        { q: 44, q_text: 'says certain aspects of our lives are becoming less distinct from one another?', answer: 'A', explanation: 'A：Sleepfaring 写 the separation between workplace and home is being reduced，工作与家的界限被手机和网络模糊。' },
        { q: 45, q_text: 'points out that many people share a mistaken belief?', answer: 'D', explanation: 'D：Dreamland 强调 too-often neglected 的常识——睡眠并非空白（sleep is no void），暗示许多人误以为睡觉就是无所事事。' },
        { q: 46, q_text: 'describes the structure of the book?', answer: 'D', explanation: 'D：not a continuous narrative but rather a loose progression of chapters…，描述书的章节结构。' },
        { q: 47, q_text: 'explains why we have certain experiences?', answer: 'B', explanation: "B：Dreaming 解释梦为何奇怪、为何醒来记不住等体验的成因（the memory centre is inactive 等）。" },
        { q: 48, q_text: 'mentions a practical problem faced by scientists?', answer: 'D', explanation: 'D：Researching the world of sleep is obviously difficult…，受试者很少记得具体内容，是睡眠研究者面临的实际困难。' },
        { q: 49, q_text: 'says the book shows that major developments have occurred in a field?', answer: 'B', explanation: 'B：He describes how the theory of dreaming has advanced dramatically…，说明该领域已有重大进展。' },
        { q: 50, q_text: 'says the writer deals with issues that cause debate?', answer: 'A', explanation: 'A：Nor does Horne avoid controversial topics…，作者直面有争议的话题，如所需睡眠时长的传统观念。' },
        { q: 51, q_text: 'comments that our lack of knowledge regarding sleep is surprising?', answer: 'C', explanation: 'C：we still know remarkably little about its origins and purpose…，指出我们对睡眠所知之少令人意外。' },
        { q: 52, q_text: 'says the reader learns how a technological advance caused problems?', answer: 'D', explanation: 'D：the invention of electricity led to countless cases of sleep deprivation…，技术进步反而带来睡眠问题。' },
      ],
    },
  },
}

// 标准版2 · Test 3（书内印 Test 7）Reading and Use of English（书页 52–63；Key: 书 144/PDF 145，已逐题核对）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；密排页（P5 文章、P4 第 27 题、P7 各段）已局部放大二次核验。
// 注意：Part 5 文章原书左栏边注 line 27 对应 q32 'bolster my case'，按 STD1_T1 惯例在文中标注 (line 27)。
// 注意：Part 7 原书标题为 "Canaletto and Venice"（副题：An expert describes the close relationship between the great
//       18th century Italian painter Canaletto and his home city.）；数据结构无标题字段，未入 passage。
const STD2_T3 = {
  meta: {
    id: 'fce-standard-2-test3-reading',
    title: 'FCE 标准版真题 2 · Test 3 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Reading and Use of English',
    pages: '书 52–63',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 7 Key（书 144 / PDF 145）',
    examKey: 'fce-standard-2-test3',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'A new partnership\n\n' +
        'In 1884, a small engineering firm was (0).......... in a part of Manchester. Its owner had (1).......... to complete only two years in formal education yet was still successfully (2).......... a business. In 1903, he bought his first car but it did not meet his high (3).......... and, being an engineer, he could not (4).......... having a go at improving it. By the following year he had designed a new car himself, and then started manufacturing this model. One of his cars came to the (5).......... of a wealthy car salesman from an aristocratic background. He was (6).......... impressed by the car and a meeting was (7).......... between the two of them at the Midland Hotel in Manchester. The meeting was a success and the two men decided to go into business together. The name of the manufacturer was Henry Royce and that of the wealthy aristocrat, Charles Rolls – and so the world-famous brand, the luxurious Rolls-Royce, was (8).......... .',
      items: [
        { q: 1, opts: ['passed', 'achieved', 'managed', 'allowed'], answer: 2, explanation: 'had managed to complete "设法只完成了两年学业"，manage to do 表示成功做成。' },
        { q: 2, opts: ['arranging', 'running', 'working', 'dealing'], answer: 1, explanation: 'successfully running a business "成功地经营一家企业"。' },
        { q: 3, opts: ['standards', 'rates', 'levels', 'ranks'], answer: 0, explanation: "did not meet his high standards \"达不到他的高标准\"，meet one's standards 固定搭配。" },
        { q: 4, opts: ['obstruct', 'resist', 'oppose', 'refuse'], answer: 1, explanation: "could not resist having a go \"忍不住想试一试\"，can't resist doing 固定搭配。" },
        { q: 5, opts: ['attention', 'view', 'interest', 'attraction'], answer: 0, explanation: 'came to the attention of "引起……的注意"，固定短语。' },
        { q: 6, opts: ['widely', 'mainly', 'greatly', 'fully'], answer: 2, explanation: 'greatly impressed "印象深刻"，greatly 修饰 impressed。' },
        { q: 7, opts: ['put out', 'turned up', 'taken out', 'set up'], answer: 3, explanation: 'a meeting was set up "安排了一次会面"，被动语态用过去分词 set up。' },
        { q: 8, opts: ['brought', 'originated', 'discovered', 'born'], answer: 3, explanation: 'the brand was born "品牌诞生了"；originate 需接 in/from，不用于被动。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'The importance of reading\n\n' +
        'Reading is good (0).......... us. In fact, there is plenty of evidence that reading for pleasure is more than just another leisure pursuit – it actually improves our mental and physical health. Reading extended texts (9).......... as novels or biographies, (10).......... requires intense concentration for a considerable period of time, helps to lengthen attention spans in children and improves their ability to think clearly. However, experts say (11).......... is essential to acquire the habit of reading extensively (12).......... a small child, while the brain is still developing.\n\n' +
        'Reading can undoubtedly (13).......... beneficial to our mental well-being. Reading not (14).......... helps combat feelings of loneliness, it also allows people to relax and forget their problems for (15).......... while. The concentration required during the act of reading seems to ease muscle tension and slow the heart rate. Researchers have found that just six minutes of reading can reduce stress levels by as (16).......... as two-thirds.',
      items: [
        { q: 9, answer: ['SUCH'], show: 'SUCH', explanation: 'such as novels or biographies "例如小说或传记"，such…as 引出例子。' },
        { q: 10, answer: ['WHICH'], show: 'WHICH', explanation: '非限制性定语从句，指代前面"阅读长篇文本"这件事，用 which。' },
        { q: 11, answer: ['IT'], show: 'IT', explanation: 'experts say it is essential to acquire…，it 作形式主语，真正主语是不定式。' },
        { q: 12, answer: ['AS'], show: 'AS', explanation: 'as a small child "当还是小孩子的时候"，as 表阶段/身份。' },
        { q: 13, answer: ['BE'], show: 'BE', explanation: 'can undoubtedly be beneficial，情态动词后接动词原形 be。' },
        { q: 14, answer: ['ONLY'], show: 'ONLY', explanation: 'not only…(but) also… 固定结构，"不仅帮助……还让……"。' },
        { q: 15, answer: ['A'], show: 'A', explanation: 'for a while "一段时间"，固定短语。' },
        { q: 16, answer: ['MUCH'], show: 'MUCH', explanation: 'as much as two-thirds "多达三分之二"，stress 不可数，用 much。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'The price of meals\n\n' +
        'When a meal is (0) EXPENSIVE, do people say they enjoy it simply because it costs a lot of money? There is some (17)_____ from an experiment in a New York restaurant which suggests that this might be so.\n\n' +
        'The restaurant served diners a meal but charged some (18)_____ as much as others, even though the meals were identical and taken in the same (19)_____ with the same level of service. After the meal everyone was asked what they thought of the meal. One might think that the people who had paid least would be the most impressed with the meal. (20)_____ though, it was those who had paid most who gave it the highest (21)_____ .\n\n' +
        'According to a well-known (22)_____ the reason for this finding is that a high price for a meal is very (23)_____ in convincing people that a meal is good. One wonders if this might (24)_____ restaurant owners to keep their prices high.',
      items: [
        { q: 17, given: 'EVIDENT', answer: ['EVIDENCE'], show: 'EVIDENCE', explanation: 'evident → evidence 证据；some 后接名词，"实验提供了一些证据"。' },
        { q: 18, given: 'TWO', answer: ['TWICE'], show: 'TWICE', explanation: 'two → twice 两倍；charged some diners twice as much as others。' },
        { q: 19, given: 'SURROUND', answer: ['SURROUNDINGS'], show: 'SURROUNDINGS', explanation: 'surround → surroundings 环境；the same 后接复数名词，"在相同的环境中"。' },
        { q: 20, given: 'SURPRISE', answer: ['SURPRISINGLY'], show: 'SURPRISINGLY', explanation: 'surprise → surprisingly 令人惊讶的是；修饰整个句子且位于句首（Key 原文印作 Surprisingly）。' },
        { q: 21, given: 'RATE', answer: ['RATING', 'RATINGS'], show: 'RATING(S)', explanation: 'rate → rating(s) 评分；the highest rating 最高评价（Key 印作 rating(s)，单复数均可）。' },
        { q: 22, given: 'PSYCHOLOGY', answer: ['PSYCHOLOGIST'], show: 'PSYCHOLOGIST', explanation: 'psychology → psychologist 心理学家；a well-known 后接表人的名词。' },
        { q: 23, given: 'SIGNIFY', answer: ['SIGNIFICANT'], show: 'SIGNIFICANT', explanation: 'signify → significant 意义重大的；very 后接形容词作表语。' },
        { q: 24, given: 'COURAGE', answer: ['ENCOURAGE'], show: 'ENCOURAGE', explanation: 'courage → encourage 鼓励；might 后接动词原形，encourage sb to do。' },
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
          stem: "Last Saturday my friend asked me, 'Do you want to see a film tonight?'",
          key: 'WHETHER',
          answer: ['whether I wanted to see'],
          show: 'whether I wanted to see',
          explanation: '一般疑问句变间接引语用 whether，时态后移 want → wanted；后句已印 a film that night。',
        },
        {
          q: 26,
          stem: 'The journey was shorter than I had expected.',
          key: 'LONG',
          answer: ["n't as long as", 'not as long as'],
          show: "n't / not as long as",
          explanation: "shorter than = not as long as；was 后接 n't 或 not。",
        },
        {
          q: 27,
          stem: "'There's been a rise of over ten per cent in the price of the tickets,' said Sue.",
          key: 'GONE',
          answer: ['has gone up more', 'has gone up by more', 'had gone up more', 'had gone up by more'],
          show: 'has / had gone up (by) more',
          explanation: 'a rise of over ten per cent → gone up (by) more than ten per cent；转述用 has/had gone up，(by) 可省略。',
        },
        {
          q: 28,
          stem: 'He sings in the show and dances in it as well.',
          key: 'ONLY',
          answer: ['only does he sing'],
          show: 'only does he sing',
          explanation: 'Not only 置于句首引起部分倒装：Not only does he sing…',
        },
        {
          q: 29,
          stem: 'My mother thought it would be good for me to live abroad for some time.',
          key: 'BENEFIT',
          answer: ['benefit from living', 'get some benefit from living', 'gain some benefit from living'],
          show: 'benefit from living / get / gain some benefit from living',
          explanation: 'be good for me to live abroad → benefit from living abroad；或 get/gain some benefit from living。',
        },
        {
          q: 30,
          stem: "I am sorry I didn't contact you, but I was very busy.",
          key: 'TOUCH',
          answer: ['not getting in touch with'],
          show: 'not getting in touch with',
          explanation: "apologise for 后接动名词；didn't contact you → not getting in touch with you。",
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an extract from a book about a cycle ride from Russia to the UK. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        'Cycling Home from Siberia, by Robert Lilwall\n\n' +
        'We had been flying east all night and I awoke to notice that it was already daylight. Looking out of the window onto the empty landscape below the dark shades of brown and green reassured me that, although it was mid-September, it had not yet started snowing in Siberia. I could see no sign of human life and the view rolled away in an otherworldly blend of mountains, streams and forests to an endless horizon.\n\n' +
        "My Russian neighbour Sergei woke up and smiled at me sleepily. I had told him that I was flying to the far-eastern Siberian city of Magadan with only a one-way ticket because it was my intention to return home to England by bicycle. 'But, Robert,' he had reasoned with me, 'there is no road from Magadan; you cannot ride a bicycle.' I explained that I had reason to believe that there was a road, though not many people used it these days.\n\n" +
        "'Alone?' he asked, pointing at me. 'No, I will be riding with a friend called Al.' 'Just one friend?' 'Yes just one,' I nodded. Sergei still looked unconvinced and with just one word 'Holodna' (cold) he pointed outside. (line 27) I tried to bolster my case by explaining to Sergei with hand gestures that I had a lot of warm clothes, though I left out the fact that, because my trip was self-funded I was on a tight budget. Most of my clothes and equipment had been bought at slashed prices. In reality, I was not at all sure they would be up to the job. This was especially true of my enormous postman's over-trousers which I had bought for £10.\n\n" +
        "My life of travel had all started in a lecture hall in Scotland several years ago. The hall that morning was full of students slumped in their seats. Some were taking notes, without energy. The lecturer droned on. I was thinking hard about a particular dilemma. Should I ask him or not? 'Well, why not?' I tore a fresh sheet from my pad and wrote, 'Hi Al, Do you want to cycle across the Karakoram Highway between Pakistan and China this summer? Rob.' In the row in front of me slouched Al, my old school friend. I tapped him on the shoulder and passed the note. He tried to decipher my scrawl, scratched his head, wrote something and passed it back. I unfolded it and held my breath while I read. 'OK,' it said.\n\n" +
        "Six years later I was going to join Al in Siberia. I had been working as a geography teacher and although I was still far from having full control of my classes, the job did tick many important boxes for me. It was frequently challenging, rarely boring, often fulfilling and of course there were great long holidays in which to chase adventures. Twice since I had started teaching I had used these holidays to go to meet Al. He had caught the adventuring-bug in a big way after our bike ride through Pakistan and so had decided to do something far more relaxing than teaching: to cycle around the world. I was now joining him for the Siberian part of his trip.\n\n" +
        "Ever since that first ride we had taken together, Al had been setting himself greater and greater challenges. This round-the-world-by-bike trip was certainly his greatest so far. At times he thought that the ride, or the road, would break him. Although it sounded tough, I envied him in many ways. He was having an extraordinary adventure, finding that he could deal with each new challenge even if it seemed impossible. He was proving wrong the sceptics who had told him he could not do it. He was doing something that scared him nearly every day and it made him feel alive.",
      items: [
        {
          q: 31,
          q_text: 'In the opening paragraph Robert reveals that he was',
          opts: [
            'grateful that the long night was over.',
            'relieved that the winter weather had not yet arrived.',
            'surprised that the area seemed uninhabited.',
            'disappointed by the colours of the earth below him.',
          ],
          answer: 1,
          explanation: '首段 although it was mid-September, it had not yet started snowing…reassured me——西伯利亚还未下雪让他安心，即庆幸寒冬未至。',
        },
        {
          q: 32,
          q_text: "Robert uses the phrase 'bolster my case' in line 27 to show that he was trying to",
          opts: [
            'change the subject.',
            'end the conversation.',
            'reassure Sergei.',
            'correct Sergei.',
          ],
          answer: 2,
          explanation: '他用手势向 Sergei 解释自己带了很多保暖衣物（I tried to bolster my case by explaining to Sergei…），意在让担心他的 Sergei 放心。',
        },
        {
          q: 33,
          q_text: 'Robert uses the example of the over-trousers to show that',
          opts: [
            'he had been successful in getting local people to help him.',
            'he had a restricted amount of money to spend on clothes.',
            'he was confident that he was well prepared for the extreme cold.',
            'he had been able to negotiate good prices for his equipment.',
          ],
          answer: 1,
          explanation: '旅行自费（self-funded）、预算紧张（on a tight budget），衣服都是打折价买的，甚至不确定能否够用——说明买衣服的钱有限。',
        },
        {
          q: 34,
          q_text: 'What do we learn about Robert in the lecture hall?',
          opts: [
            "He didn't want the lecturer to notice his lack of attention.",
            'He was puzzled by something the lecturer had said.',
            'He was unsure about what to write in the note.',
            "He was apprehensive about his friend's reaction to his suggestion.",
          ],
          answer: 3,
          explanation: '递纸条给 Al 后 "I unfolded it and held my breath while I read"——屏住呼吸等回复，说明他担心朋友的反应。',
        },
        {
          q: 35,
          q_text: "How can Robert's attitude to teaching best be summarised?",
          opts: [
            'He felt it was the right career choice for him.',
            'The holidays were the only positive aspect of the job.',
            'He felt the job was getting too stressful.',
            'He enjoyed having the respect of his students.',
          ],
          answer: 0,
          explanation: 'the job did tick many important boxes for me…frequently challenging, rarely boring, often fulfilling——他认为教书是适合自己的正确选择。',
        },
        {
          q: 36,
          q_text: "What does Robert say about Al's round-the-world trip?",
          opts: [
            'Al never doubted that he would be successful.',
            'Al tried to hide the difficulties he was facing from his friends.',
            'Al was pushing himself to the limit of his capabilities.',
            'Al was totally fearless as he enjoyed the adventure.',
          ],
          answer: 2,
          explanation: 'Al 不断给自己设置更大挑战（setting himself greater and greater challenges），有时觉得骑行会把自己压垮（would break him）——在挑战自身极限。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about a type of seabird, called a puffin. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        'Puffins in peril\n\n' +
        'Scientist Mike Harris explains that the puffin seems about to join the list of seabirds whose numbers are declining.\n\n' +
        "It's a grey day in early April on the Isle of May off the east coast of Scotland. Far out to sea a small dot appears on the horizon. It rapidly increases in size, suddenly turning into a puffin that lands with a splash on the water. This bird probably hasn't seen land for five months, but now it's returning to its colony for the breeding season.\n\n" +
        'The first puffin is soon joined by others and together they bob on the sea. Newly returned birds are nervous but, as the days pass, they gain confidence and begin reclaiming the underground nesting burrows they made the previous year by tunnelling into the soft earth on the top of the cliffs. (37) They have to hurry because it takes three months to rear a chick and all the birds must leave by early August to spend time feeding intensively before the winter.\n\n' +
        'I visit the island every April, eager to see how many of the adult puffins we have caught and attached identification rings to have returned. (38) With a team of helpers I counted every occupied burrow on the island – something we undertake every five years.\n\n' +
        "The island's puffin population had been increasing every year for the previous 40 years, and so we anticipated at least 100,000 pairs. To our dismay we found just 42,000. (39) Experts from other research programmes have concluded it must be connected to where puffins spend the winter months.\n\n" +
        'Last spring we also caught and weighed some returning adults and found they were significantly lighter than the birds we caught 10 years ago. (40) Puffins are long-lived and can cope with a few poor productive seasons, but not with such a large loss of adults.\n\n' +
        "In early August, the puffin colonies empty rather abruptly. Virtually all puffins leave within a week, though a few adults remain to feed a late chick. (41) I have always believed, though, that few of them venture far from the North Sea. Now, however, the development of instruments known as geolocators, small enough to be fitted around a puffin's leg, is enabling us to test this idea.\n\n" +
        'We fitted these units to some puffins two years ago and caught the birds again last year to download the data. Some did remain within the North Sea, but others went much further. For someone who has spent years watching puffins for only part of their lives, this new technology is providing some fascinating information. (42) This would still leave us with the question of what they eat in winter and whether there are sufficient quantities of prey available.\n\n' +
        'The good news is that we now have an idea of the areas our puffins go to in winter, and we can check whether conditions there might have altered due to climate change or overfishing. Maybe we can then take some steps to help them. Hopefully it is just a local problem, because there are in fact still plenty of puffins to see around the Scottish coast.',
      options: [
        { label: 'A', text: "We weren't the only ones to wonder why this might be happening." },
        { label: 'B', text: 'From this moment on, we know remarkably little about where these birds end up and what could possibly be affecting them there.' },
        { label: 'C', text: 'But we should also take into account that if a young puffin survives the winter, it will come back the following July.' },
        { label: 'D', text: 'Other devices will also hopefully tell us how much time puffins spend diving for food.' },
        { label: 'E', text: 'This was further evidence that something unusual is happening at sea before they return to the colony.' },
        { label: 'F', text: 'Puffins are always among the earliest seabirds to lay eggs.' },
        { label: 'G', text: 'Last year there was an additional task.' },
      ],
      items: [
        { q: 37, answer: 'F', explanation: 'F 说"海鹦总是最早产蛋的海鸟之一"，与后句"养大一只雏鸟要三个月，必须抓紧"衔接：回来早→产蛋早→时间紧。' },
        { q: 38, answer: 'G', explanation: 'G 说"去年还有一项额外任务"，引出后句"我和助手们清点了岛上每个有海鹦居住的洞穴"。' },
        { q: 39, answer: 'A', explanation: '只数到 42,000 对而非预期的至少 10 万对，A 说"并非只有我们想知道原因"，引出其他研究项目专家的结论。' },
        { q: 40, answer: 'E', explanation: '前句说回巢海鹦比 10 年前轻了许多，E 称这是"海上发生异常情况的进一步证据"，与下文"经不起成鸟大量损失"衔接。' },
        { q: 41, answer: 'B', explanation: 'B 说"从这一刻起，我们对这些鸟最终去向何方知之甚少"，衔接下文"我一直相信它们不会远离北海……如今用 geolocators 检验这一想法"。' },
        { q: 42, answer: 'D', explanation: 'D 说"其他装置也有望告诉我们海鹦潜水觅食花了多少时间"，与下文"仍留下它们冬天吃什么、猎物是否充足的问题"相接。' },
      ],
    },
    7: {
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article about the Italian painter Canaletto. For questions 43–52, choose from the sections (A–E). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      sections: [
        {
          label: 'A',
          text:
            "Canaletto's lifetime subject was the city of Venice. Apart from the works done during his decade in London, he painted virtually nothing else, and Venice has never been so minutely and extensively painted by any other artist. His response to Venice was not like the dramatic, emotional response of a visitor overpowered by the city's haunting beauty and magic, as the British painter Turner was later, for example. Canaletto's paintings, with their love of incidental detail, betray a deeper-rooted, more lasting attachment – the affection of a native Venetian.",
        },
        {
          label: 'B',
          text:
            "Canaletto depicted the city as it really was, documenting the changes in the cityscape over the years – Piazza San Marco being repaved, palaces being reconstructed, graffiti appearing and disappearing. Above all, he suffused his painting with the natural light and atmosphere of Venice which was second nature to him. When he went to London in 1746, Canaletto could not quite come to terms with painting the cooler tones and the unsympathetic climate of England, and somehow his paintings of the River Thames always ended up looking rather like the Grand Canal.",
        },
        {
          label: 'C',
          text:
            "In spite of his natural affection for Venice, Canaletto's paintings were rarely bought by his fellow Venetians. This was probably because the locals did not need reminders of their city, and also because in Venice view painting was not taken very seriously in comparison with historical and religious painting, or even landscape and figure painting. To become a 'view painter' at that time was quite a brave choice and, by the end of his career, Canaletto had done much to raise the status of the genre. However, his influence was felt more among painters in England, the home of his major patrons.",
        },
        {
          label: 'D',
          text:
            "Canaletto's extraordinarily detailed and accurate scenes were perfect for the foreign tourists in Venice, who wanted souvenirs or mementoes of their visits. The more accurate the scene the better, in fact, and Canaletto's first patron, Owen McSwiney, persuaded him to change from his earlier picturesque and theatrical style to a more factual one. Instead of loose brushwork and thick paint, alongside dramatic contrasts of light and shade, Canaletto adopted more of a snapshot approach, which proved to be very commercial. His colours became brighter, the paint surface smoother, and the scenes looked more realistic. McSwiney wrote 'his excellence lies in painting things which fall immediately under his eye', as if he worked directly from nature. At a casual glance, everything in his pictures is instantly recognisable and looks exactly as it does, or did, in reality. In fact, Canaletto never painted from nature – his pictures were created in the studio.",
        },
        {
          label: 'E',
          text:
            "In working out the compositions, he used his imagination and a certain artistic licence. Although he paid the minutest attention to the detail of a decorative carving, a ship's sails or washing hanging out, Canaletto felt at liberty to distort and reorganise the main objects in his paintings in the interest of dramatic effect. He would alter the sweeping curve of the Grand Canal, for example, or include more in a composition than could be seen from any single viewpoint. The clutter of traffic on the waterways looks random and natural, but the position of each boat was carefully worked out to achieve the best effect. In this way, he conveyed the essence of Venice even if he deceived the eye. The drawings which formed the basis of his compositions range from rapid sketches of ideas for painting, done on the spot, to large-scale fully detailed preliminary drawings. Sometimes, he made precise drawings for engravers to copy, and occasionally he produced them as works of art in their own right, in which case they were finished in the studio.",
        },
      ],
      items: [
        { q: 43, q_text: "suggest why Canaletto's work was less appreciated in his home city than elsewhere?", answer: 'C', explanation: 'C 段：同乡威尼斯人很少买他的画——本地人不需要纪念品、view painting 在威尼斯不受重视，解释了其作品在家乡不受推崇的原因。' },
        { q: 44, q_text: 'give examples of how Canaletto tricks the viewer in his pictures?', answer: 'E', explanation: 'E 段举例：改变大运河的曲线、纳入单一视点看不到的内容、精心安排每艘船的位置——"即使骗过了眼睛也传达了威尼斯的精髓"。' },
        { q: 45, q_text: "claim that Canaletto's paintings contain a kind of historical record of Venice?", answer: 'B', explanation: 'B 段：documenting the changes in the cityscape over the years（广场重铺、宫殿重建、涂鸦出现与消失），即画中含历史记录。' },
        { q: 46, q_text: 'tell us where Canaletto worked on the composition of his pictures?', answer: 'D', explanation: 'D 段末：Canaletto never painted from nature – his pictures were created in the studio，即构图是在画室里完成的。' },
        { q: 47, q_text: "mention the reason why Canaletto didn't paint exactly what he had seen?", answer: 'E', explanation: 'E 段：他运用想象力与 artistic licence，为戏剧性效果（in the interest of dramatic effect）扭曲重组主要对象，故不照实描画。' },
        { q: 48, q_text: 'suggest a weakness in the work Canaletto painted away from Venice?', answer: 'B', explanation: 'B 段：1746 年到伦敦后无法适应英国较冷的色调与气候，泰晤士河画作"最后看起来总有点像大运河"，是客居作品的美中不足。' },
        { q: 49, q_text: "give some details of Canaletto's initial painting technique?", answer: 'D', explanation: 'D 段：最早的赞助人 McSwiney 劝他放弃早期 picturesque and theatrical style（loose brushwork、thick paint、明暗强烈对比），即最初的绘画技法。' },
        { q: 50, q_text: 'say that Canaletto took a risk by specialising in a particular kind of art?', answer: 'C', explanation: 'C 段：To become a "view painter" at that time was quite a brave choice——专攻 view painting 在当时是冒险（勇敢）的选择。' },
        { q: 51, q_text: 'describe different artistic reactions to Venice?', answer: 'A', explanation: 'A 段：把卡纳莱托本人（本土人深层持久的爱）与 Turner（游客被城市之美震慑的戏剧性、情感化反应）对威尼斯的不同艺术反应作对比。' },
        { q: 52, q_text: "refer to the effect Canaletto's paintings had on artists in another country?", answer: 'C', explanation: 'C 段末：his influence was felt more among painters in England——对英国（其大赞助人所在国）画家的影响。' },
      ],
    },
  },
}

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

const STD2_T4 = { meta, parts }

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Test 1 Reading and Use of English: 书页 8–19（PDF 10–21），答案核对自 Test 1 Key（书 120 / PDF 122），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 6 指令句原书误植印作 "You are going to a read a newspaper article"（多一个 a），照录不改。
// 注意：Part 7 文章标题 "Local environmental heroes"、副题 "Four innovators who founded local conservation projects"
//       存于 passage 字段（当前 UI 不渲染，仅存档）；D 段 "The initiative had soon sold..." 已放大复核确认。
const STD3_R1 = {
  meta: {
    id: 'fce-standard-3-test1-reading',
    title: 'FCE 标准版真题 3 · Test 1 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Reading and Use of English',
    pages: '书 8–19',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: 'Test 1 Key（书 120 / PDF 122）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'Alfred Wainwright\n\n' +
        'Alfred Wainwright came from a relatively poor family but managed to (0).......... qualifications in accountancy. However it is not for his skill in accountancy that he is (1).......... but for his pictorial guidebooks to the English Lake District.\n\n' +
        'The Lake District is in the north-west of England and (2).......... an area of some 2,292 square kilometres. As its name (3).........., it is an area of lakes and mountains. Alfred first went there on a walking holiday in 1930 and immediately fell in love with the area.\n\n' +
        'He (4).......... the Lake District into seven parts and wrote a guide for each of them. The guides (5).......... entirely of copies of his hand-written manuscripts. All have descriptions of walks with hand-drawn maps and sketches of views from the summits of the different mountains. He intended the books to be just for his own personal (6).......... but was eventually (7).......... to publish them. They are beautiful books which (8).......... as popular as ever.',
      items: [
        { q: 1, opts: ['reminded', 'recollected', 'referred', 'remembered'], answer: 3, explanation: 'be remembered for 固定搭配"因……被人记住"；he is remembered not for… but for…。' },
        { q: 2, opts: ['reaches', 'extends', 'ranges', 'covers'], answer: 3, explanation: 'covers an area of "占地……"，固定搭配。' },
        { q: 3, opts: ['implies', 'represents', 'proves', 'means'], answer: 0, explanation: 'as its name implies "顾名思义"，固定短语。' },
        { q: 4, opts: ['distributed', 'assigned', 'divided', 'allocated'], answer: 2, explanation: 'divide … into parts "把……分成几部分"，与 into seven parts 搭配。' },
        { q: 5, opts: ['involve', 'consist', 'include', 'contain'], answer: 1, explanation: 'consist entirely of "完全由……构成"，consist of 固定搭配（include/contain 为及物动词，不接 of）。' },
        { q: 6, opts: ['application', 'use', 'employment', 'practice'], answer: 1, explanation: 'for his own personal use "供他个人使用"，固定搭配。' },
        { q: 7, opts: ['persuaded', 'impressed', 'caused', 'influenced'], answer: 0, explanation: 'was eventually persuaded to publish "最终被说服去出版"，persuade sb to do 的被动式。' },
        { q: 8, opts: ['stay', 'keep', 'continue', 'remain'], answer: 3, explanation: 'remain as popular as ever "一如既往地受欢迎"；remain 保持（状态）。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'The origin of coins\n\n' +
        'According (0).......... the Greek historian Herodotus (484–425 BC), the Lydian people were the first to use metallic coins. In fact, these earliest coins were made out (9).......... electrum, a naturally-occurring mixture of gold and silver. The coins were first produced in the seventh century BC with a design on (10).......... side only; the other was marked with simple punches. Each coin was assigned a value in units. Some coins were inscribed with names in Lydian script, but it is unclear (11).......... these are names of kings or just of rich men who produced the coins. (12).......... of the irregular size and shape of the coins, it must (13).......... been difficult to tell one (14).......... another, especially some of the smaller ones. Thus, many costs were expressed (15).......... terms of the total weight of the coins required and transactions were completed by weighing the coins used together, (16).......... than counting individual ones.',
      items: [
        { q: 9, answer: ['OF'], show: 'OF', explanation: 'be made out of "由……制成"，固定搭配。' },
        { q: 10, answer: ['ONE'], show: 'ONE', explanation: 'on one side only; the other… "只在一面有图案，另一面……"，one…the other 对应。' },
        { q: 11, answer: ['WHETHER', 'IF'], show: 'WHETHER / IF', explanation: 'it is unclear whether/if these are names of kings or…，"是否"引导的从句。' },
        { q: 12, answer: ['BECAUSE'], show: 'BECAUSE', explanation: 'Because of the irregular size and shape… "由于钱币大小形状不规则"，because of + 名词短语。' },
        { q: 13, answer: ['HAVE'], show: 'HAVE', explanation: 'must have been difficult，must have done 对过去的肯定推测。' },
        { q: 14, answer: ['FROM'], show: 'FROM', explanation: 'tell one from another "把彼此区分开"，tell A from B 固定搭配。' },
        { q: 15, answer: ['IN'], show: 'IN', explanation: 'be expressed in terms of "以……来表示"，in terms of 固定短语。' },
        { q: 16, answer: ['RATHER'], show: 'RATHER', explanation: 'rather than counting "而不是逐一清点"，rather than 固定结构。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'Play\n\n' +
        "Play is an (0) ACTIVE that all children take part in, whether alone or with others. In fact, play offers a wide (17)_____ of benefits for children and is vital for a child's learning and (18)_____ development. It is central to the formation of a child's personality and can help to increase the knowledge children need to cope with the challenges they encounter in school and at home. Play enables children to realise their potential and to find solutions to problems, thus allowing them to experience the (19)_____ that success brings.\n\n" +
        'Experts tell us that it is (20)_____ to overestimate the (21)_____ of play as it is probably the most effective way that children have of trying out and mastering new skills. By opening children\'s minds to (22)_____ and imagination, play is indeed a good (23)_____ for life.\n\n' +
        'However, as far as children themselves are concerned, the only value of play is quite simply in the fun and (24)_____ that it gives them.',
      items: [
        { q: 17, given: 'VARY', answer: ['VARIETY'], show: 'VARIETY', explanation: 'vary → variety 多样性；a wide variety of benefits 多种益处。' },
        { q: 18, given: 'EMOTION', answer: ['EMOTIONAL'], show: 'EMOTIONAL', explanation: 'emotion → emotional 情感的；修饰 development 需用形容词。' },
        { q: 19, given: 'SATISFY', answer: ['SATISFACTION'], show: 'SATISFACTION', explanation: 'satisfy → satisfaction 满足感；the … that success brings 需名词。' },
        { q: 20, given: 'POSSIBLE', answer: ['IMPOSSIBLE'], show: 'IMPOSSIBLE', explanation: 'possible → impossible；it is impossible to overestimate "再怎么估计也不为过"，语境需否定。' },
        { q: 21, given: 'IMPORTANT', answer: ['IMPORTANCE'], show: 'IMPORTANCE', explanation: 'important → importance 重要性；the 后接名词。' },
        { q: 22, given: 'CREATE', answer: ['CREATIVITY'], show: 'CREATIVITY', explanation: 'create → creativity 创造力；与 imagination 并列，需名词。' },
        { q: 23, given: 'PREPARE', answer: ['PREPARATION'], show: 'PREPARATION', explanation: 'prepare → preparation 准备；a good preparation for life 对生活的良好准备。' },
        { q: 24, given: 'PLEASE', answer: ['PLEASURE'], show: 'PLEASURE', explanation: 'please → pleasure 快乐；the fun and pleasure 它们带来的快乐，需名词。' },
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
          stem: 'Martin never goes to bed without having a shower first.',
          key: 'HAS',
          answer: ['has a shower before going'],
          show: 'has a shower before going',
          explanation: 'never goes to bed without having a shower first → always has a shower before going to bed，双否改肯定。',
        },
        {
          q: 26,
          stem: 'Tina was too frightened to stay in the house on her own.',
          key: 'BEEN',
          answer: ['if she had not been', "if she hadn't been", 'had she not been'],
          show: "if she had not / hadn't been / had she not been",
          explanation: 'too frightened to stay → would have stayed … if she had not been so frightened，对过去的虚拟；倒装版 had she not been。',
        },
        {
          q: 27,
          stem: 'It will not be possible to buy tickets for the match until next Monday.',
          key: 'SALE',
          answer: ['not go on sale', 'not be on sale', 'not be put on sale', 'not be going on sale'],
          show: 'not go / be / be put / be going on sale',
          explanation: 'not be possible to buy … until → will not go/be (put/going) on sale until…，on sale "开售"。',
        },
        {
          q: 28,
          stem: 'The only vegetable that Helen dislikes is cabbage.',
          key: 'VEGETABLES',
          answer: ['eats all vegetables apart', 'will eat all vegetables apart', 'likes all vegetables apart'],
          show: 'eats / will eat / likes all vegetables apart',
          explanation: 'the only vegetable she dislikes → she likes/likes eating all vegetables apart from cabbages，apart from "除……之外"。',
        },
        {
          q: 29,
          stem: 'When Alex has finished his essay, a friend is going to check the spelling for him.',
          key: 'CHECKED',
          answer: ['have the spelling checked by', 'get the spelling checked by', 'have his spelling checked by', 'get his spelling checked by'],
          show: 'have/get the/his spelling checked by',
          explanation: 'a friend is going to check the spelling for him → he is going to have/get the/his spelling checked by a friend，使役被动。',
        },
        {
          q: 30,
          stem: "'I'm sorry to disturb you when you're so busy,' said Tom.",
          key: 'EXCUSE',
          answer: ['excuse me for disturbing', 'excuse me my disturbing'],
          show: 'excuse me (for/my) disturbing',
          explanation: "I'm sorry to disturb you → Please excuse me for/my disturbing you；Key 印作 EXCUSE me (for/my disturbing，录 for/my 两种。",
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read part of the introduction to a cookery book called In Search of Perfection by Heston Blumenthal. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        "When my first cookery programme In Search of Perfection first came out, I had no idea how it would be received by the viewers and the press. There had been plenty of talk going round at the time about 'revolution' sweeping through Britain, and I was certain that we'd produced a series of programmes that made a genuinely innovative contribution to that, but still the question worried me: would people appreciate an approach to cooking that involved not just techniques but also history, nostalgia and science? I watched the first programme in a mixed state of joy and fear.\n\n" +
        "I needn't have worried. The subsequent success of the show paved the way for all sorts of other fascinating projects, including a book based on my experiences at the restaurant I own. In each project there is a sense of being on a journey, be it through food, into the mind, or into some new technique. I have written several books in a series called 'Perfection', each one accompanying its own TV programme of the same name. In these, however, the journey was often a very physical one, with passports and suitcases and itineraries. In Search of Perfection is the latest in the series, and in it you'll zigzag the globe in order to meet some extraordinary artisans, such as a man who finds his true purpose in creating a golden pasta that tastes better than any other. These people have spent decades pursuing their own ideals of perfection.\n\n" +
        "Perfection is, of course, highly subjective. Even the seemingly simple task of choosing which dishes to include in the series turned out to be a nightmare, and I knew I was bound to upset many people by 'leaving out their particular favourite'. Where's steak and kidney pie and bread and butter pudding? I could imagine people saying. Nevertheless, after shutting ourselves away in a meeting room and agreeing not to emerge until we had come up with a suitable list, the TV production team and I eventually had something for everyone.\n\n" +
        "This reinforced my opinion that each of us has our own idea of what constitutes perfection, drawing heavily on a highly personalised mix of emotions, memories and surroundings. Despite the book's title, In Search of Perfection, I knew from the outset that I wouldn't be claiming the recipes were in any way 'definitive'. But I reckoned that, by using my technical skill and scientific knowledge, by talking to food producers and artisans and chefs and their customers, I could pin down some of the things that made these dishes work.\n\n" +
        "While the dictionary defines 'perfection' as the state of being perfect, it also offers a second definition of equal importance to this book: (line 62) honing through gradual experimentation. Trying out ideas and then revising them until you arrive at something uniquely wonderful. The TV series was the opportunity to get out and look into all sorts of foods, people and places I'd never encountered before, in any restaurant, and I was as excited about that as I (line 68) was about the chance to explore memory and nostalgia in food because I started out in this business in exactly the same way.\n\n" +
        'Searching out the best ingredients for the recipes took me all over the globe. Among my adventures were: being taken with great solemnity and assurance to a canning factory that turned out to be processing completely the wrong sort of tomato, and visiting a dairy farm whose standards fell so far short of perfection that we had to stop filming there! Refining the technique for each recipe, I ended up hand-milking a cow and then using dry ice to turn the milk into ice cream, cooking chicken breasts in a hospital scanning machine and nearly burning my house down in an effort to get the oven hot enough for a proper Neapolitan-style pizza.',
      items: [
        {
          q: 31,
          q_text: "In the second paragraph, Heston implies that the books in the 'Perfection' series",
          opts: [
            'had a more international focus than his first book.',
            'strongly developed the psychological aspect of the subject.',
            'feature some characters who re-appeared in different books.',
            'were less successful than the TV programmes that went with them.',
          ],
          answer: 0,
          explanation: '第二段说该系列书的旅程是"很消耗体力的"——带着护照、行李箱和行程单 zigzag the globe 环游世界寻找匠人，而最初只是英国的一档节目，可见系列书更具国际视野。',
        },
        {
          q: 32,
          q_text: "What did Heston think about the meeting to discuss the 'Perfection' series?",
          opts: [
            'It was useful in highlighting some practical problems.',
            'It resulted in a very strange decision.',
            'It should have been more productive.',
            'It was demanding but efficient.',
          ],
          answer: 3,
          explanation: '把自己关在会议室、不拿出合适名单就不出来——过程艰苦；最终"让每个人都有满意的选项"——结果高效，故 demanding but efficient。',
        },
        {
          q: 33,
          q_text: 'What does Heston imply about the recipes in his new book?',
          opts: [
            'They vary considerably from the versions that inspired them.',
            'They could be developed further in the future.',
            'The final wording of them was easy to come up with.',
            'The selection is not necessarily one he would have made himself.',
          ],
          answer: 1,
          explanation: "他明言不会声称食谱是 'definitive'（定稿），且第二定义是 honing through gradual experimentation——不断试验、修改直到'独一无二地精彩'，暗示食谱以后还能继续完善。",
        },
        {
          q: 34,
          q_text: "What does 'honing' in line 62 tell us about the recipes?",
          opts: [
            'They can never be completely perfect.',
            'They are regarded by Heston as being experimental.',
            'They serve another significant purpose in Heston\'s book.',
            'They have been worked on and improved over a period of time.',
          ],
          answer: 3,
          explanation: 'honing（磨炼）through gradual experimentation，后句解释：尝试想法、反复修改直到完美——即食谱经过长期打磨与改进。',
        },
        {
          q: 35,
          q_text: "What does 'that' refer to in line 68?",
          opts: [
            'being willing to try out new things',
            'learning the trade in a particular restaurant',
            'exploring the relationship between food and the past',
            "wondering about the importance of food in people's lives",
          ],
          answer: 0,
          explanation: "that 承前指 the opportunity to get out and look into all sorts of foods, people and places I'd never encountered before——乐于去了解从未接触过的新事物。",
        },
        {
          q: 36,
          q_text: 'Heston says that during his travels around the globe, he',
          opts: [
            'had to be resourceful and adaptable.',
            'narrowly avoided disaster on several occasions.',
            "was forever solving problems caused by other people's incompetence.",
            'had to respect an unusual local custom.',
          ],
          answer: 0,
          explanation: '罐头厂在加工完全错误的番茄、奶牛场不达标只能停拍、手挤牛奶再用干冰做冰淇淋、用医院扫描机烹鸡胸、差点把房子烧了——一路随机应变、就地取材解决问题，说明他必须机智灵活、随遇而安。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      // 原书指令句误植 "You are going to a read a newspaper article"（照录，不改写）
      instruction:
        'You are going to a read a newspaper article about observing marine creatures called manatees. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "Swimming with Manatees, Florida's Gentle Giants\n\n" +
        'When most people flock to the famous amusement parks in Orlando, Florida, they miss some of the natural wonders the State has to offer. It was in Citrus County on the beautiful west coast of Florida that we went to see the manatee, an amazing mammal that occupies coastal waters and rivers.\n\n' +
        'Our days started early in the morning at Homosassa Springs, as this is the perfect time to snorkel with the manatees before they get tired of visitors. We boarded a pontoon boat with Captain Traci Wood from Native Vacations. Having spotted two manatees just below the water, Captain Traci stopped the boat as the duo slowly glided towards us. (37) Our boat was soon surrounded by other members of this gentle species.\n\n' +
        'Soon we resumed our journey. Within a few minutes Captain Traci stopped the boat again and we were given instructions. Whatever you do, she said, remember the three golden rules: minimize splash noise; act with very slow movements; and when you touch one of these friendly, gentle gray giants on the back or stomach, never touch more than one hand at a time. The Endangered Species Act forbids touching a manatee unless it touches you first, and they will let you know. The protection of this endangered species is taken very seriously. For children, there is absolutely no chasing or riding the manatees. (38) Most Homosassa manatees are very social and will come to you.\n\n' +
        'The next day, at Three Sisters Springs, we entered the water very slowly, trying to keep down the amount of thick, muddy sediment rising from the bottom of the river. (39) This meant swimming with the manatees was not at all difficult or intimidating. We saw young children as well as seniors in the water and there was an abundant feeling of energy and curiosity among us all.\n\n' +
        "Manatees are strictly herbivores, and they eat a great variety of species, including water hyacinth and water lettuce. They're very big, measuring 3 to 5 metres and weighing as much as 1,600 kilos. (40) Manatees are of course wild creatures, although when face to face with them, you're unlikely to feel any fear.\n\n" +
        'Since not all visitors want to get nose-to-nose with the manatees, non-swimmers can also view them at Homosassa Springs State Wildlife Park. The park provides a wonderful home for some manatees. (41) They are well looked after by people who really understand them. The park also serves as a research and observation center, offering three daily educational programs to the public.\n\n' +
        'From December to March, groups of manatees escape the cold winter ocean and bask in the warm waters near power plants and coastal springs that stay about 23 degrees year-round. Snorkelers, divers and swimmers come to Florida from all over the world for a chance to swim or interact with the docile manatee in its natural environment, rich in marine vegetation. (42) So the manatees arrive every year by the hundreds to find warmth, nourishment and maybe, just maybe, to visit us, the curious humans.',
      options: [
        { label: 'A', text: 'The truth is, swimming with manatees is a life-altering experience.' },
        { label: 'B', text: 'Those that have been injured or orphaned will also spend their lives there since they are unable to survive in the wild.' },
        { label: 'C', text: "But this won't diminish the experience in the least." },
        { label: 'D', text: 'This abundant source of food makes this area an ideal habitat for the manatees.' },
        { label: 'E', text: 'This was to avoid disturbing some of the manatees who were still sleeping while others were slow-paddling around.' },
        { label: 'F', text: 'They used their paddle-like tails to propel themselves, steering with their flippers, gracefully moving their bodies through the water in our direction.' },
        { label: 'G', text: 'Despite this, they look very cute.' },
      ],
      items: [
        { q: 37, answer: 'F', explanation: 'F 具体描写海牛"用桨状尾巴推进、用鳍转向、优雅地把身体朝我们移来"，正是前句 the duo slowly glided towards us 的展开，引出后句"船很快被这类温和动物的其他成员包围"。' },
        { q: 38, answer: 'C', explanation: '前文罗列种种严格禁令（孩子绝对不许追逐、骑乘海牛），C 说"但这丝毫不会减少体验的乐趣"，与后句"大多数海牛很社交、会主动靠近你"衔接。' },
        { q: 39, answer: 'E', explanation: 'E 说"这是为了不惊扰仍在睡觉、其余慢游的海牛"，点明前句"尽量压低河底搅起的浑泥"的目的；后句 This meant swimming… not at all difficult 承接。' },
        { q: 40, answer: 'G', explanation: '前句说海牛体长 3–5 米、重达 1,600 公斤，G 说"尽管如此，它们看起来非常可爱"，Despite this 指体形巨大，并引出"面对面时你不太会害怕"。' },
        { q: 41, answer: 'B', explanation: 'B 说"受伤或成为孤儿的海牛也会在这里度过一生，因为它们无法在野外生存"，解释为什么公园是 some manatees 的美好家园，They are well looked after 承接。' },
        { q: 42, answer: 'D', explanation: 'D 说"丰富的食物来源使这一地区成为海牛的理想栖息地"，前文 rich in marine vegetation，后文 So the manatees arrive every year by the hundreds 因果衔接。' },
      ],
    },
    7: {
      // 原书文章标题 "Local environmental heroes"，副题 "Four innovators who founded local conservation projects"（存档于 passage）
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article about four people who set up local environmental projects. For questions 43–52, choose from the people (A–D). The people may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage:
        'Local environmental heroes\n\n' +
        'Four innovators who founded local conservation projects',
      sections: [
        {
          label: 'A',
          name: 'Evans Wadongo',
          text:
            'Like many Kenyans, Evans Wadongo grew up studying by the light of a kerosene lamp. Bad for his eyes, the lamps also produced harmful fumes that made him cough. So, Evans designed a cleaner solar-powered alternative. Instead of importing solar technology from a mass-producing country, he set up the Use Solar initiative, which trained youngsters to manufacture special solar-powered lamps, using locally-sourced scrap metal and fragments of solar panels. A USB port, built into the base, offered an easy way to charge phones and radios. The lamps were then given to local groups, who used the money they saved on kerosene to set up small businesses such as poultry farming or beekeeping. Evans says that getting finance for the project was a challenge due to its long-term nature. Each lamp costs $25, which covers materials, training and distribution. The groups used money from their successful businesses to buy more lamps.',
        },
        {
          label: 'B',
          name: 'Alasdair Harris',
          text:
            "Coastal communities in south-western Madagascar have lived by fishing for more than a thousand years. But when biologist Alasdair Harris visited the region, he found them struggling to sustain themselves because population increases had diminished local fish stocks. Unsurprisingly, people had mixed feelings when he suggested closing one of the local fishing grounds, but agreed to a three-month trial. When it was re-opened, they caught a staggering 1,200 kg of octopus in one day and the community could see the benefit of looking after their resources. Others soon took up the model and the country now boasts hundreds of marine areas, monitored and protected by local people. Organisations in neighbouring countries have begun to replicate the model, as recognition grows for the importance of locally initiated conservation. 'We need a radically new approach,' Alasdair says, 'that's why we do this work.'",
        },
        {
          label: 'C',
          name: 'Nam Nguyen',
          text:
            "Although much of Vietnam's population lives in rural areas, its two major cities are increasingly affected by traffic and pollution. Ride-sharing was a relatively new concept when Nam Nguyen founded his Hanoi-based ride-sharing website. Initially, he intended to make a free network where people could share vehicles and contribute to protecting the environment. 'I tried to learn the model from European schemes, but they didn't really work here. Private vehicles are a source of pride for many city dwellers, who rely on them to visit their families in the provinces. They wouldn't give them up easily.' He realised he'd have to form a business plan to help finance and promote the idea. So, Nam designed a taxi-sharing service whose profits could support the ride-sharing enterprise he had initially imagined. 'The taxi service has become our main revenue stream. It allows the ride-sharing network to continue to grow.'",
        },
        {
          label: 'D',
          name: 'Bernice Dapaah',
          text:
            "About to graduate with a business administration degree but facing a tough job market in Ghana, Bernice Dapaah joined forces with some engineering students to create an innovative product from bamboo, an abundant crop in Ghana. They make strong, lightweight and durable bikes out of bamboo, using an ever-growing team of young people especially trained for the role. The project has serious green credentials, too: not only are the bikes an affordable, environmentally sound alternative to cars, but bamboo is fast-growing, produces up to 35% more oxygen than other trees and helps to prevent soil erosion, a significant cause of concern for farmers. It's an idea so brilliant the team went on to win ten international awards. The initiative had soon sold over a thousand bikes, including exports, allowing new workshops to be set up. The idea is that each employee, once trained, can train and employ five others and bikes can be produced on a small scale all over Ghana.",
        },
      ],
      items: [
        { q: 43, q_text: 'accepted that the attitudes of local people might be impossible to change?', answer: 'C', explanation: "Nam Nguyen：欧洲模式照搬无效，'Private vehicles are a source of pride… They wouldn't give them up easily'——接受当地人不会放弃私家车，于是改做出租车共享。" },
        { q: 44, q_text: 'included a useful additional feature on a product?', answer: 'A', explanation: 'Evans Wadongo：灯座里内置 A USB port，"offered an easy way to charge phones and radios"——产品上增加的实用附加功能。' },
        { q: 45, q_text: 'co-operated with others to develop the initial idea?', answer: 'D', explanation: 'Bernice Dapaah：joined forces with some engineering students to create an innovative product from bamboo——与他人合作把想法做成产品。' },
        { q: 46, q_text: 'had to convince local people to take part in an experiment?', answer: 'B', explanation: 'Alasdair Harris：提议关闭一处渔场做 three-month trial（试验），当地人 had mixed feelings，但最终同意。' },
        { q: 47, q_text: 'managed to get products sold in other countries?', answer: 'D', explanation: 'Bernice Dapaah：sold over a thousand bikes, including exports——产品出口他国。' },
        { q: 48, q_text: "received formal recognition for a project's achievements?", answer: 'D', explanation: 'Bernice Dapaah：the team went on to win ten international awards——获得国际奖项的正式认可。' },
        { q: 49, q_text: "realised that it wasn't possible to use ideas that had worked elsewhere?", answer: 'C', explanation: "Nam Nguyen：'I tried to learn the model from European schemes, but they didn't really work here'——意识到在别处行得通的模式在此行不通。" },
        { q: 50, q_text: 'saw that a traditional way of life was under threat?', answer: 'B', explanation: 'Alasdair Harris：社区靠捕鱼生活上千年，但人口增长使 local fish stocks 减少，struggling to sustain themselves——传统生计受到威胁。' },
        { q: 51, q_text: 'created an example that people in different places were able to follow?', answer: 'B', explanation: 'Alasdair Harris：Others soon took up the model；Organisations in neighbouring countries have begun to replicate the model——别处纷纷效仿。' },
        { q: 52, q_text: 'used materials that they recycled?', answer: 'A', explanation: 'Evans Wadongo：using locally-sourced scrap metal and fragments of solar panels——用回收的废金属和太阳能板碎片制作灯具。' },
      ],
    },
  },
}

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Test 2 Reading and Use of English: 书页 30–41（PDF 32–43），答案核对自 Test 2 Key（书 132 / PDF 134），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 7 文章标题 "Exercise like an animal"、副题 "Journalist Annabel Venning tries a new exercise craze"。
//       原书五节标题条（A–E）为黑底白字，本扫描件网点过密、白字无法辨认（8x 放大+二值化增强均无效），
//       参照 std2-t4 先例 name 留空；题目指令本身写作 choose from sections (A–E)，不影响作答。
const STD3_R2 = {
  meta: {
    id: 'fce-standard-3-test2-reading',
    title: 'FCE 标准版真题 3 · Test 2 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Reading and Use of English',
    pages: '书 30–41',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: 'Test 2 Key（书 132 / PDF 134）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'Tea bags\n\n' +
        'Over the centuries, tea has been made in many different (0).......... across the world. In the USA, until a little over a hundred years ago, dried tea was always sold and consumed as loose leaves. To make a drink, boiling water was poured over the tea leaves and (1).......... to stand while the water (2).......... the flavour of the leaves.\n\n' +
        'In 1908, Thomas Sullivan, a New York tea salesman, had the (3).......... idea of putting tea leaves in small silk bags to (4).......... as samples to potential customers. Sullivan (5).......... the tea to be removed from the bags before making a drink in the conventional manner. However, for the sake of (6).........., his customers (7).......... up with the revolutionary practice of dipping the silk bag, contents and all, into boiling water. Cheap paper bags were introduced in the 1930s, completing the design of the modern tea bag. Today billions of (8).......... paper bags of tea are sold annually worldwide.',
      items: [
        { q: 1, opts: ['set', 'kept', 'left', 'saved'], answer: 2, explanation: 'be left to stand "被放置浸泡"，left to stand 茶叶留在水中静置。' },
        { q: 2, opts: ['immersed', 'soaked', 'filled', 'absorbed'], answer: 3, explanation: 'the water absorbed the flavour of the leaves "水吸收了茶叶的味道"；absorb 吸收（风味）。' },
        { q: 3, opts: ['sharp', 'bright', 'light', 'keen'], answer: 1, explanation: 'a bright idea "巧妙的点子"，bright 修饰 idea 固定搭配。' },
        { q: 4, opts: ['put in', 'give up', 'hand out', 'make over'], answer: 2, explanation: 'hand out as samples "作为样品分发"，hand out 发放。' },
        { q: 5, opts: ['intended', 'determined', 'designed', 'established'], answer: 0, explanation: 'intended the tea to be removed "本意是要把茶叶取出来"，intend sb/sth to be done。' },
        { q: 6, opts: ['satisfaction', 'benefit', 'convenience', 'opportunity'], answer: 2, explanation: 'for the sake of convenience "为了图方便"，固定短语。' },
        { q: 7, opts: ['thought', 'came', 'started', 'made'], answer: 1, explanation: 'came up with "想出（做法）"，与 the revolutionary practice 搭配。' },
        { q: 8, opts: ['distinct', 'particular', 'specific', 'individual'], answer: 3, explanation: 'billions of individual paper bags "数十亿个单独的纸袋"，individual 强调一个个的。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'Kangaroos\n\n' +
        "Kangaroos (0).......... found in the wild only in Australia and its surrounding islands. There are several species of kangaroo but the best known are the large red, grey and antilopine kangaroos. They all have large feet and extremely strong back legs as (9).......... as a long tail, and can grow up to 1.6 metres tall. They tend to jump rather (10).......... walk because their large feet make walking difficult.\n\n" +
        "The one fact that almost (11).......... knows about kangaroos is that young kangaroos, joeys, live in a kind of pocket at the front of their mother's body. Although they may come (12).......... of the pocket to play or explore, the pocket is (13).......... they live for many months after their birth.\n\n" +
        'Kangaroos feed on grasses, leaves, flowers and moss. They live in groups known (14).......... mobs and protect one (15).......... from danger. They present (16).......... serious threat to human beings because they rarely attack people, and only if provoked.',
      items: [
        { q: 9, answer: ['WELL'], show: 'WELL', explanation: 'as well as "还有……"，large feet、strong back legs as well as a long tail。' },
        { q: 10, answer: ['THAN'], show: 'THAN', explanation: 'rather than walk "而不愿行走"，rather than 固定结构。' },
        { q: 11, answer: ['EVERYONE', 'EVERYBODY'], show: 'EVERYONE / EVERYBODY', explanation: 'almost everyone/everybody knows "几乎每个人都知道"。' },
        { q: 12, answer: ['OUT'], show: 'OUT', explanation: 'come out of the pocket "从育儿袋里出来"。' },
        { q: 13, answer: ['WHERE'], show: 'WHERE', explanation: 'the pocket is where they live，where 引导表语从句。' },
        { q: 14, answer: ['AS'], show: 'AS', explanation: 'be known as mobs "被称作 mob（群体）"。' },
        { q: 15, answer: ['ANOTHER'], show: 'ANOTHER', explanation: 'protect one another "互相保护"，one another 固定短语。' },
        { q: 16, answer: ['NO'], show: 'NO', explanation: 'because they rarely attack people 提示"不构成严重威胁"，present no serious threat。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'Bicycle racing\n\n' +
        'There is a wide (0) VARY of different types of bicycle racing. A race may be an event held indoors over a relatively short distance, or alternatively it can be outdoors and much longer, involving hundreds of kilometres over a number of days. As the (17)_____ of bicycle racing has grown worldwide, attention has focussed increasingly on the (18)_____ study of the sport and its many physical and psychological (19)_____. There seems to be agreement among sports experts that competitive cycling, more than almost any other sport, places (20)_____ demands on the whole human body.\n\n' +
        'Successful participants in many sports can be a bit (21)_____ or slightly overweight but nevertheless have sufficient (22)_____ to compensate for that. That is not true for serious cyclists who aim to do well in competitions. They must show extraordinary dedication to the sport. Many seem to have an (23)_____ with it and an (24)_____ of the hours and hours of practice necessary to achieve success.',
      items: [
        { q: 17, given: 'POPULAR', answer: ['POPULARITY'], show: 'POPULARITY', explanation: 'popular → popularity 受欢迎程度；the 后接名词，与 has grown 搭配。' },
        { q: 18, given: 'SCIENCE', answer: ['SCIENTIFIC'], show: 'SCIENTIFIC', explanation: 'science → scientific 科学的；修饰 study 需形容词。' },
        { q: 19, given: 'REQUIRE', answer: ['REQUIREMENTS'], show: 'REQUIREMENTS', explanation: 'require → requirements 要求；physical and psychological requirements 与 many 搭配用复数。' },
        { q: 20, given: 'EXCEPT', answer: ['EXCEPTIONAL'], show: 'EXCEPTIONAL', explanation: 'except → exceptional 格外的；places exceptional demands on 对……提出极高要求。' },
        { q: 21, given: 'FIT', answer: ['UNFIT'], show: 'UNFIT', explanation: 'fit → unfit 体能不佳的；与 slightly overweight 并列，语境（需要补偿）需否定含义。' },
        { q: 22, given: 'ABLE', answer: ['ABILITY'], show: 'ABILITY', explanation: 'able → ability 能力；sufficient ability to compensate 足够的能力加以弥补。' },
        { q: 23, given: 'OBSESS', answer: ['OBSESSION'], show: 'OBSESSION', explanation: 'obsess → obsession 痴迷；have an obsession with it 对其痴迷。' },
        { q: 24, given: 'ACCEPT', answer: ['ACCEPTANCE'], show: 'ACCEPTANCE', explanation: 'accept → acceptance 接受；an acceptance of the hours of practice 接受长时间的练习。' },
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
          stem: 'John had never been in that part of the country before.',
          key: 'FIRST',
          answer: ['was the first time'],
          show: 'was the first time',
          explanation: 'had never been … before → It was the first time (that) John had ever been…，固定句型。',
        },
        {
          q: 26,
          stem: "I wish I could play the guitar, but I can't.",
          key: 'ABLE',
          answer: ['like to be able to', 'love to be able to'],
          show: 'like / love to be able to',
          explanation: 'wish + 过去式表示现实遗憾 → would like/love to be able to do "希望（但）能够"。',
        },
        {
          q: 27,
          stem: "The public swimming pool didn't use to be so crowded.",
          key: 'THAN',
          answer: ['more crowded than it used'],
          show: 'more crowded than it used',
          explanation: "didn't use to be so crowded → is more crowded than it used to be，比较级 + than it used to be。",
        },
        {
          q: 28,
          stem: 'Nobody knows for certain the depth of the water in the middle of the lake.',
          key: 'DEEP',
          answer: ['how deep the water is', 'how deep the water gets'],
          show: 'how deep the water is / gets',
          explanation: 'the depth of the water → how deep the water is/gets，名词转疑问词从句。',
        },
        {
          q: 29,
          stem: 'Although the room became quite noisy, the singer continued singing.',
          key: 'EVEN',
          answer: ['on even though', 'on even when', 'on singing even though', 'on singing even when'],
          show: 'on (singing) even though / when',
          explanation: 'continued singing → carried on (singing)；although → even though/when，Key 中 (singing) 为可选成分。',
        },
        {
          q: 30,
          stem: 'I have never seen an elephant as large as the one in the film.',
          key: 'SUCH',
          answer: ['ever seen such a large'],
          show: 'ever seen such a large',
          explanation: 'never seen … as large as → haven\u2019t ever seen such a large elephant as…，such + a + 形容词 + 名词。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an article about a man who makes guitars. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        'The guitar maker\n\n' +
        "Jonny Kinkead, one of the best known makers of hand-crafted acoustic guitars in the UK, talks about his career.\n\n" +
        "As a boy, when Jonny Kinkead wasn't making things using the tools in his dad's garage, he was messing about with a guitar. And the two preoccupations have been his living for the past four decades: building steel-string, acoustic guitars by hand. 'The guitar still holds me in thrall,' he says. 'Making a sound out of planks of wood - it's amazing what you can do. By using different combinations of timber, for example, you get a different sound, and that is what musicians are interested in – a sound that can do what they want it to do.'\n\n" +
        "Jonny learned to play his brother's guitar when he was eleven. Then, when he was sixteen, he wanted to learn the bass guitar. 'Some people would have got a holiday job and saved up and bought one,' he says. 'But I was of a mindset that if you wanted something, you made it.'\n\n" +
        "Although the bass was the first instrument Jonny built from scratch, he and his brothers had long been doing essentially the same thing with other items. 'I made model boats and aeroplanes as a child, so I was familiar (line 25) with that process. My father had taught me and my brothers how to use tools, and we had free rein in the garage.' Jonny had also been customising and repairing instruments for his mates.\n\n" +
        "Jonny's bass guitar turned out well, but the idea of a career building guitars had yet to cross his mind. 'My ambition in those days was to be a sculptor,' he says. His interests evolved further and on finishing school, he chose to study architecture at university. Halfway through the course, however, he dropped out, but he left with a clearer idea of what he wanted to do and started to think seriously about guitar making. 'I was still interested in painting and sculpture but I realised that when you are building guitars you're actually sculpting sound.' In addition he explains, 'I thought this might be more reliable than being an artist as it's craft-based.'\n\n" +
        "Ever since then, Jonny has made guitars for a living. For the first ten years, he supplemented his income by cleaning windows part-time. The first guitars he sold only went for the cost of the materials, but as he developed a reputation as one of the best guitar-makers around, he was able to charge a little more. But even now, almost forty years later, Jonny describes what he does as 'still scratching a living'. He admits he can never actually turn out more than ten guitars a year, which inevitably restricts his earnings.\n\n" +
        "In the early years, the key thing was to make the effort to get himself known. He would go to music festivals most weekends if he could and get musicians to try out his guitars and talk about him to their friends. He also had to learn how to price his instruments – when it came to his conversations with musicians, he hadn't got an answer because focusing on such things didn't come naturally to him.\n\n" +
        "Jonny believes developing a career is more straightforward for today's new guitar-makers in the UK. 'When I started it was hard because people thought that the guitars I was making were only made in America and that people in the UK didn't know how to make them. Now there is a culture of hand-making guitars that has grown up over the past 40 years in the UK. It is easier now for them,' he says. 'You may be able to learn valuable techniques in the classroom,' Jonny concludes, 'but there is no substitute for trial and error. Make 100 guitars and you learn a lot.'",
      items: [
        {
          q: 31,
          q_text: 'Why did Jonny choose to make a bass guitar for himself when he was a teenager?',
          opts: [
            'He regarded it as the natural thing to do.',
            'He saw it as good practice for making other guitars.',
            'He feared that he would never be able to buy one.',
            'He thought he could ensure it was in the style he wanted.',
          ],
          answer: 0,
          explanation: "他说 'Some people would have got a holiday job and saved up and bought one… But I was of a mindset that if you wanted something, you made it.'——在他看来想要什么就自己做，是理所当然的事。",
        },
        {
          q: 32,
          q_text: "What does 'that process' in line 25 refer to?",
          opts: [
            'creating something from nothing',
            'working with his brothers',
            'doing things for friends',
            'getting tools ready',
          ],
          answer: 0,
          explanation: "前句 'I made model boats and aeroplanes as a child'——亲手把材料做成物品的过程，即 creating something from nothing。",
        },
        {
          q: 33,
          q_text: 'What does Jonny say about the architecture course he attended?',
          opts: [
            'It gave him the opportunity to explore different types of art.',
            'It provided him with ideas for guitar design.',
            'It enabled him to decide on a career path.',
            'It helped him become more independent.',
          ],
          answer: 2,
          explanation: '他中途退学，但 "he left with a clearer idea of what he wanted to do and started to think seriously about guitar making"——课程让他明确了自己要走的方向。',
        },
        {
          q: 34,
          q_text: 'What does Jonny suggest is the main reason for his low income?',
          opts: [
            'the cost of the materials he makes guitars with',
            'the small number of guitars that he produces',
            'the limited demand for hand-made guitars',
            'the competition between guitar-makers',
          ],
          answer: 1,
          explanation: "'he can never actually turn out more than ten guitars a year, which inevitably restricts his earnings'——年产量不超过十把，收入因此受限。",
        },
        {
          q: 35,
          q_text: 'What does Jonny say he found hard in his early years as a guitar-maker?',
          opts: [
            'deciding how much to charge for his guitars',
            'working out how to advertise his services',
            'building up relationships with musicians',
            'finding the time to visit music festivals',
          ],
          answer: 0,
          explanation: "'He also had to learn how to price his instruments – … he hadn't got an answer because focusing on such things didn't come naturally to him.'——定价对他来说最难。",
        },
        {
          q: 36,
          q_text: 'What does Jonny think has changed for guitar-makers in the UK?',
          opts: [
            'The training they receive is of a higher standard.',
            'A wider range of tools and equipment is available.',
            'Attitudes towards what makes a good guitar have moved on.',
            'Work methods have been introduced from America.',
          ],
          answer: 2,
          explanation: "当年人们以为手工好吉他'只可能出自美国、英国人不会做'，如今英国已形成手工制琴的文化——人们的观念已经改变。",
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read a newspaper article about the filming of a television documentary about icebergs. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "Icebergs\n\n" +
        "There's more to icebergs than meets the eye – as I discovered filming on one of these gigantic Arctic fortresses as it slowly melted.\n\n" +
        'Imagine a solid sheet of frozen water 3 km across and 100 m thick. Imagine it floating quietly in dark ocean waters, somewhere between Canada and Greenland. Imagine the near-silent desolation of the inhospitable Arctic environment around it, getting harsher as winter approaches. (37) Imagine this forbidding, serene, massive place. But it really exists. This iceberg right now is floating in peace as we all go about our busy, bustling lives.\n\n' +
        'Back in the summer, things were different. This iceberg was a dynamic battleground, floodlit by 24-hour daylight. Once an iceberg is released from its parent glacier, its time is very limited. (38) Then mini-bergs break off the weakened front. Some of these events we witnessed were sudden, loud and violent. We had come to spectate on this oceanic siege, and to learn its rules.\n\n' +
        'The ice edge towered over us, vertical, angular and utterly spectacular. We steamed around the berg until we found lower cliffs, and suddenly the icescape behind was revealed. Gentle mounds are separated by valleys. (39) An iceberg makes its own fog, so we could only see a little way into the centre, peering hopefully over the top of the cliffs. Curious polar bears peered back. We had thought we would be lucky to see one or two, but the iceberg turned out to have a healthy population of these huge carnivores. (40) They must wait for the sea ice to come back so that they can hunt. So they were snoozing away, not at all bothered that their chosen holiday home was moving, tilting, melting, breaking up and giving a TV production team and some scientists severe logistical headaches.\n\n' +
        "That's how I remember the iceberg, and that's the side of it you'll see if you watch the programmes. But since then things have changed. We left a GPS tracker as a passenger, so we know that the iceberg has travelled 60 miles, and is now about 30 miles south of where it was in August. Only 65% of it is left. The iceberg only gets 7 hours and 40 minutes of daylight now, and soon the darkness will swallow it up completely. (41) Winter is beginning, and with it returns a period of stability.\n\n" +
        'Sea ice is advancing towards the berg from the north. This is the other type of ice at the poles, formed when the sea surface itself freezes. In an average year, the sea ice would already have reached our iceberg. But this year, there was less summer sea ice in the Arctic than any other year on record, so it is taking longer for the great freeze to reach it. The sea ice is still creeping south. (42) Then the iceberg will be frozen in place. Darkness and silence will rule. The bears will be able to walk out on to the sea ice and hunt again.',
      options: [
        { label: 'A', text: 'These lead down to waterfalls of meltwater cascading into the ocean.' },
        { label: 'B', text: 'But it will lose the battle in the end and the last piece of solid ice will melt.' },
        { label: 'C', text: 'When it touches the cliffs that I saw, it will connect our iceberg to all the other ice in the Arctic.' },
        { label: 'D', text: 'The ice fights a losing battle along its edges, as warm ocean water eats into it.' },
        { label: 'E', text: 'The only sound comes from water lapping against the ice, and a lone seal swimming nearby.' },
        { label: 'F', text: 'The Arctic summer can, however, be a very hard time for them.' },
        { label: 'G', text: 'The supply of energy from the sun is so weak, the battle is over for this year.' },
      ],
      items: [
        { q: 37, answer: 'E', explanation: 'E 用"只有海水拍打冰面和一只海豹游过的声音"具体化前句 near-silent desolation 的寂静，与后句 Imagine this forbidding, serene, massive place 相接。' },
        { q: 38, answer: 'D', explanation: 'D 说"冰在其边缘打着注定失败的战斗，温暖海水不断侵蚀"，承接 its time is very limited，引出 Then mini-bergs break off the weakened front。' },
        { q: 39, answer: 'A', explanation: 'A 中 These 指前句 valleys（山谷）："一路向下是倾注入海的融水瀑布"，再引出冰山自造雾、视线受阻的描述。' },
        { q: 40, answer: 'F', explanation: 'F 说"然而北极夏天对它们（北极熊）来说非常难熬"，引出 They must wait for the sea ice to come back so that they can hunt。' },
        { q: 41, answer: 'G', explanation: 'G 说"太阳能量供应太弱，今年的战斗结束了"，承接 darkness will swallow it up completely，引出 Winter is beginning。' },
        { q: 42, answer: 'C', explanation: 'C 中 it 指海冰："当它触到我见过的冰崖，就会把我们这座冰山和北极所有其他冰连成一体"，引出 Then the iceberg will be frozen in place。' },
      ],
    },
    7: {
      // 原书文章标题 "Exercise like an animal"，副题 "Journalist Annabel Venning tries a new exercise craze"（存档于 passage）
      // 原书五节标题条（A–E）黑底白字在扫描件中无法辨认，name 留空
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article about a new exercise craze called Zuu and its inventor Nathan Helberg. For questions 43–52, choose from sections (A–E). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage:
        'Exercise like an animal\n\n' +
        'Journalist Annabel Venning tries a new exercise craze',
      sections: [
        {
          label: 'A',
          name: '',
          text:
            "Our sedentary lifestyles mean that most of us aren't using our muscles properly. As small children we squat, crawl and leap around freely, but the older we get the more restricted our movements become and many of our muscles get little action as we sit at desks or in cars. Occasionally we hit the gym, where we use machines to work on specific muscles rather than the whole body. Now a new form of fitness, an intense workout based on simple animal movements such as crawling, is taking off. Its Australian founder, Nathan Helberg, has been using it with the military, police forces, schoolchildren and even prisoners. He took his inspiration from martial arts, break-dancing, the animal world and the dance movements of indigenous people, and developed Zuu.",
        },
        {
          label: 'B',
          name: '',
          text:
            "There are around 100 animal movements – although beginners start with 25 – that work muscles, joints and ligaments as well as improving heart and lung fitness. Zuu needs no equipment and little space. The idea is to train your body to do the kinds of activities that our ancestors had to do in daily life. It's quick, it tops up your strength and it's not aiming to give you big muscles. In exchange for the publicity from my article, Nathan offers me a master class, alongside two of his trainers, a privilege that would otherwise be beyond my financial means! I am daunted by the prospect of doing things I haven't done since my pre-school years.",
        },
        {
          label: 'C',
          name: '',
          text:
            "We do each movement for 30 seconds (for my benefit – as you get fitter, you keep on for 45 seconds). We start with a frog squat: legs wide, knees bent, elbows locked inside knees. It's a little undignified, but fine at first. Then as the seconds go by, the fronts of my thighs start to burn and it's all I can do not to collapse. After 30 seconds we dash back across the room to our starting point with barely a moment to catch our breath. Nathan assures me the frog squat is particularly good for the lower backs of office workers, and recommends that they should take a break and perform the movement for four minutes a day. Somehow I can't see this working!",
        },
        {
          label: 'D',
          name: '',
          text:
            "Then it's on to a bear crawl, on hands and feet. While Nathan and others shoot across the room, I lumber along like an ancient grizzly bear. Then we do it again – backwards. I seem to be clumsy, but it does get slightly easier as I go on. This movement evidently uses every joint in the body, strengthening things like ligaments and tendons, while at the same time raising heart rate as effectively as running. Perhaps being a snake will be easier. But there's no lying flat on our stomachs. Instead we have to raise our bodies 2cm off the floor, rocking our weight back and forth from hands to toes. It's a bit of an effort to keep going for the full minute.",
        },
        {
          label: 'E',
          name: '',
          text:
            "By the end I'm shaking with exhaustion. Despite my initial reservations, by the end of my session, I have started to enjoy myself. Mind you, it's hard not to laugh when you're imitating a bear on rewind! I thought I was in reasonably good shape – I run 5 km three times a week – but after this I realise how little I push myself normally. Nathan has promised that I could increase my upper body strength by 30% in just six weeks by doing classes. I have compromised and do bear crawls around my garden at home during work breaks, much to the amazement of my dog!",
        },
      ],
      items: [
        { q: 43, q_text: 'comment on how little rest she seems to be given after one exercise?', answer: 'C', explanation: 'C 段：每个动作做完 "we dash back across the room to our starting point with barely a moment to catch our breath"——几乎没有喘息时间。' },
        { q: 44, q_text: 'become aware of the limitations of her usual fitness routine?', answer: 'E', explanation: "E 段：'I thought I was in reasonably good shape – I run 5 km three times a week – but after this I realise how little I push myself normally'——意识到平时锻炼的不足。" },
        { q: 45, q_text: 'say she hopes that the next exercise is not so demanding?', answer: 'D', explanation: "D 段：熊爬之后 'Perhaps being a snake will be easier'——希望下一个动作（蛇式）别那么累。" },
        { q: 46, q_text: 'mention a deal she did with Nathan that benefited them both?', answer: 'B', explanation: 'B 段：以报道宣传（publicity）换取 Nathan 的免费大师课——"In exchange for the publicity from my article, Nathan offers me a master class"。' },
        { q: 47, q_text: 'imply that a conventional keep-fit method is less natural than Zuu?', answer: 'A', explanation: 'A 段：健身房里 "we use machines to work on specific muscles rather than the whole body"，而 Zuu 基于自然的动物动作——暗示传统健身方式不如其自然。' },
        { q: 48, q_text: 'compare the movements of Zuu with those of earlier humans?', answer: 'B', explanation: 'B 段："train your body to do the kinds of activities that our ancestors had to do in daily life"——与祖先的日常活动相比。' },
        { q: 49, q_text: 'explain that she has chosen just one of the exercises to perform regularly?', answer: 'E', explanation: 'E 段："I have compromised and do bear crawls around my garden at home during work breaks"——只选了熊爬这一项坚持做。' },
        { q: 50, q_text: 'say how slow and awkward she feels doing a particular exercise?', answer: 'D', explanation: 'D 段："I lumber along like an ancient grizzly bear… I seem to be clumsy"——笨拙缓慢如老灰熊。' },
        { q: 51, q_text: "give examples of situations where lack of activity affects people's bodies?", answer: 'A', explanation: 'A 段：久坐办公桌前、坐在车里（sit at desks or in cars）使肌肉得不到活动、动作受限——缺乏活动的具体情形。' },
        { q: 52, q_text: "cast doubt on one of Nathan's ideas?", answer: 'C', explanation: "C 段：Nathan 保证蛙式下蹲对办公室人群的腰部特别好并建议每天做四分钟，作者却写 'Somehow I can't see this working!'——表示怀疑。" },
      ],
    },
  },
}

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Test 3 Reading and Use of English: 书页 52–63（PDF 54–65），答案核对自 Test 3 Key（书 144 / PDF 146），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 文中 (line 51) 为书页行号标记（对应 q34 'Bemused'），按 STD 惯例内嵌于文中；
//       Part 5 首段 "younger brother Alistair"、末段 "on a straight race to the finishing line"、
//       Part 7 A 段 "I agreed but it bothered me" / "So, I joined them"、C 段 "but I was surprised at how much"
//       等易误读处均已 2x 裁剪放大复核。
// 注意：Part 7 文章标题 "I gave up my career for something very different"（存档于 passage）。
const STD3_R3 = {
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
const STD3_R4 = {
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

// Source: Cambridge English First 4（标准版4）B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Test 1 Reading and Use of English: 书页 8–19（PDF 9–20），答案核对自 Test 1 Key（书 109 / PDF 110），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 行号标记 (line 65) 按原书内嵌在所标注行（"whatever else gave way this time..."）行首。
//       第五段 "my head would not. The best sign that..." 一句已高倍裁剪复核。
// 注意：Part 6 副题（原书斜体导语 "Why do serious media commentators largely ignore..."）存于 passage 开头。
//       空位框 38 在低倍扫描下似 "32"，经 12 倍裁剪放大确认为 "38"。
// 注意：Part 7 文章 "Being an architect" 为匿名建筑师自述，A–D 各节原书无人名/小节标题，name 留空字符串；
//       题组引导句 "In which section does the architect mention" 照原书（当前结构无对应字段，仅存档于此）。
const STD4_R1 = {
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

// Source: Cambridge English First 4（标准版4）B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Test 2 Reading and Use of English: 书页 28–39（PDF 29–40），答案核对自 Test 2 Key（书 121 / PDF 122），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 行号标记 (line 87) 按原书内嵌在所标注行（"...herself up, wiggled and provided an answer."）行首。
// 注意：Part 6 副题（原书斜体导语 "Monica Platter describes how..."）存于 passage 开头。
// 注意：Part 7 文章 "The fascinating art of Ebru" 为介绍性文章，A–E 各节原书无标题/人名，name 留空字符串；
//       题组引导句 "In which section does the writer" 照原书（当前结构无对应字段，仅存档于此）。
const STD4_R2 = {
  meta: {
    id: 'fce-standard-4-test2-reading',
    title: 'FCE 标准版真题 4 · Test 2 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Reading and Use of English',
    pages: '书 28–39',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 2 Key（书 121 / PDF 122）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'Aspects of character\n\n' +
        'Psychologists (0).......... introversion and extroversion as highly important aspects of character. Extroverts are lively and outgoing, while introverts are more controlled and reserved. People who are total extroverts may be rather irritating at times as they always seem to want to be the (1).......... of attention, whilst introverts can seem rather dull and boring because they are so quiet. Of course, very few people are totally extrovert or totally introvert; most fall somewhere between the two extremes, some (2).......... to extroversion, others to introversion.\n\n' +
        'The (3).......... to which a person is extroverted or introverted can be very relevant to a person\'s (4).......... for a particular job. Some jobs (5).......... people who are somewhat extrovert (sales, public relations), other jobs are more appropriate for people with a (6).......... to introversion (computer programming, librarianship). For this reason, companies looking to (7).......... new staff will often give applicants a psychometric test to see, amongst other things, where they lie on the introversion–extroversion (8).......... .',
      items: [
        { q: 1, opts: ['centre', 'aim', 'middle', 'point'], answer: 0, explanation: 'the centre of attention "关注的焦点"，固定搭配。' },
        { q: 2, opts: ['approaching', 'inclining', 'moving', 'directing'], answer: 1, explanation: 'some inclining to extroversion "有些人倾向于外向"，incline to 固定搭配。' },
        { q: 3, opts: ['amount', 'rate', 'level', 'extent'], answer: 3, explanation: 'the extent to which "……的程度"，固定结构。' },
        { q: 4, opts: ['suitability', 'competency', 'adequacy', 'capability'], answer: 0, explanation: 'suitability for a particular job "对某份工作的适合度"，suitability for 固定搭配。' },
        { q: 5, opts: ['expect', 'search', 'require', 'appeal'], answer: 2, explanation: 'Some jobs require people who... "有些工作需要……的人"；require 及物动词直接接宾语。' },
        { q: 6, opts: ['trend', 'custom', 'preference', 'tendency'], answer: 3, explanation: 'a tendency to introversion "内向的倾向"，tendency to/towards 固定搭配。' },
        { q: 7, opts: ['find out', 'get up', 'take on', 'show in'], answer: 2, explanation: 'take on new staff "招聘新员工"，take on 固定短语动词。' },
        { q: 8, opts: ['scale', 'category', 'series', 'range'], answer: 0, explanation: 'on the introversion–extroversion scale "在内外向量表上"，scale 量表。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'Nordic walking\n\n' +
        'Nordic walking is an outdoor activity first developed in (0).......... 1930s in Finland. It basically involves walking with very light sticks a bit like ski-poles, (9).......... are strapped to your wrists and used to push you along.\n\n' +
        'Nordic walking was initially devised (10).......... a form of summer exercise for winter cross-country skiers, but was not taken seriously for general fitness training until roughly the turn (11).......... the century. Since then, (12).......... popularity has exploded in Europe, and it is taking (13).......... in the USA, Australia and Japan.\n\n' +
        'The appeal of the activity is obvious. Not (14).......... is it easy to do, but Nordic walking is apparently the most complete body workout there is, using more muscles than either running or swimming. For people who dislike gyms, it is perfect. Nordic walking can be done almost (15).........., from beaches and parks (16).......... city streets.',
      items: [
        { q: 9, answer: ['WHICH'], show: 'WHICH', explanation: '非限定性说明从句：sticks, which are strapped to your wrists，指代手杖。' },
        { q: 10, answer: ['AS'], show: 'AS', explanation: 'be devised as "被设计为"，as 引出身份。' },
        { q: 11, answer: ['OF'], show: 'OF', explanation: 'the turn of the century "世纪之交"，固定短语。' },
        { q: 12, answer: ['ITS'], show: 'ITS', explanation: 'its popularity "它的知名度"，指 nordic walking 的。' },
        { q: 13, answer: ['OFF'], show: 'OFF', explanation: 'be taking off "正在兴起"，take off 固定短语动词。' },
        { q: 14, answer: ['ONLY'], show: 'ONLY', explanation: 'Not only is it easy to do, but...，not only 置句首引起倒装。' },
        { q: 15, answer: ['ANYWHERE', 'EVERYWHERE'], show: 'ANYWHERE / EVERYWHERE', explanation: 'can be done almost anywhere/everywhere "几乎随处可行"，Key 给两种形式。' },
        { q: 16, answer: ['TO'], show: 'TO', explanation: 'from beaches and parks to city streets，from...to... 固定结构。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'Canadian astronaut\n\n' +
        'Chris Hadfield was the first (0) PROFESSIONAL astronaut from Canada to travel in (17)_____ space. He says that his inspiration for wanting to be an astronaut came when, at the age of just nine, he and his family watched the first moon (18)_____ in July, 1969 at their home in Ontario. Chris never lost (19)_____ of this ambition throughout his (20)_____ .\n\n' +
        'Then, at the age of 18, he went on to study mechanical engineering and later aviation studies. In 1992, after serving as a test pilot for several years, he was chosen from over 5,000 (21)_____ who wanted to join the Canadian space programme. He then had to undergo a training programme which was extremely (22)_____ both physically and mentally.\n\n' +
        'He was selected for his first space (23)_____ in 1995 on the US space shuttle Atlantis. He served on several different types of space mission, and was appointed to the role of (24)_____ of the International Space Station mission in 2013.',
      items: [
        { q: 17, given: 'OUT', answer: ['OUTER'], show: 'OUTER', explanation: 'out → outer；outer space "外太空"，固定表达。' },
        { q: 18, given: 'LAND', answer: ['LANDING'], show: 'LANDING', explanation: 'land → landing；the first moon landing "首次登月"，需名词。' },
        { q: 19, given: 'SEE', answer: ['SIGHT'], show: 'SIGHT', explanation: 'see → sight；never lost sight of "从未忘记"，固定短语。' },
        { q: 20, given: 'BOY', answer: ['BOYHOOD'], show: 'BOYHOOD', explanation: 'boy → boyhood 童年；throughout his boyhood，需名词。' },
        { q: 21, given: 'APPLY', answer: ['APPLICANTS'], show: 'APPLICANTS', explanation: 'apply → applicants 申请人；over 5,000 applicants，复数名词。' },
        { q: 22, given: 'RIGOUR', answer: ['RIGOROUS'], show: 'RIGOROUS', explanation: 'rigour → rigorous 严酷的；修饰训练 programme，需形容词。' },
        { q: 23, given: 'FLY', answer: ['FLIGHT'], show: 'FLIGHT', explanation: 'fly → flight 航天飞行；his first space flight，需名词。' },
        { q: 24, given: 'COMMAND', answer: ['COMMANDER'], show: 'COMMANDER', explanation: 'command → commander 指令长；the role of commander of the ISS mission，需指人的名词。' },
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
          stem: "Steven asked me, 'Do you want to go to the movies with me?'",
          key: 'LIKE',
          answer: ['if I would like to', 'whether I would like to', "if I'd like to", "whether I'd like to"],
          show: "if / whether I'd / would like to",
          explanation: '直接引语一般疑问句改间接引语：asked me if/whether I\'d/would like to go；Key 印 if/whether I | \'d/would LIKE to。',
        },
        {
          q: 26,
          stem: 'Philip told Maria he would contact her on Saturday.',
          key: 'TOUCH',
          answer: ['get in touch with', 'be in touch with'],
          show: 'get / be in touch with',
          explanation: 'contact her → get/be in touch with her；Key 印 get/be in | TOUCH with。',
        },
        {
          q: 27,
          stem: 'My sister said she would help me do my homework.',
          key: 'HAND',
          answer: ['give me a hand', 'lend me a hand', 'give me a helping hand', 'lend me a helping hand'],
          show: 'give / lend me a (helping) hand',
          explanation: 'help me do → give/lend me a (helping) hand with；Key 印 give/lend me | a (helping) HAND。',
        },
        {
          q: 28,
          stem: "We didn't get to sleep at all last night because of the noise from the room next door.",
          key: 'IMPOSSIBLE',
          answer: ['made it impossible for'],
          show: 'made it impossible for',
          explanation: "The noise made it impossible for us to get to sleep，make it + adj + for sb to do 形式宾语结构。",
        },
        {
          q: 29,
          stem: 'Would you like to come shopping this afternoon?',
          key: 'FEEL',
          answer: ['feel like coming shopping', 'feel like going shopping'],
          show: 'feel like coming / going shopping',
          explanation: 'Would you like to...? → Do you feel like coming/going shopping...?，feel like doing 表意愿；Key 印 FEEL like | coming/going shopping。',
        },
        {
          q: 30,
          stem: 'It was hard for me to understand what the visitor was saying.',
          key: 'DIFFICULTY',
          answer: ['had difficulty understanding', 'had difficulty in understanding'],
          show: 'had difficulty (in) understanding',
          explanation: 'It was hard for me to understand → I had difficulty (in) understanding，have difficulty (in) doing 固定结构；Key 印 had DIFFICULTY | (in) understanding。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an extract from the biography of a biologist called Jane Goodall. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        'Jane Goodall: chimpanzee expert\n\n' +
        "A very young, idealistic Englishwoman arrived in Africa in early April 1957 and soon, quite possibly, in her first letter home, wrote the astonishingly dramatic words 'I am living in the Africa I have always longed for, always felt stirring in my blood.' She was to spend most of the rest of her life in Africa and – as a citizen, journalist, scientist, activist and environmentalist – came to be associated with that continent. Her name was Jane Goodall.\n\n" +
        "In 1963, Britain's National Geographical Society promoted Jane Goodall's fame by producing a series of glossy articles and television documentaries on her chimpanzee research. That early fame has since been reinforced by her own writing for a popular audience, including award-winning children's books and the 1971 bestseller In the Shadow of Man, which has been translated into 41 languages and is still in print. With the possible exception of Marie Curie, the Nobel Prize-winning scientist, Jane Goodall must be the most widely celebrated female scientist of the 20th century.\n\n" +
        "Ironically, her celebrity may have obscured her actual achievements. Hundreds of articles, interviews and books have told her life story but they are often limited in scope and sentimental. She has been presented as an adventure-seeking little girl, a privileged woman who dreamed of a life with wild animals, a determined feminist in a man's world, and so on. Put together, these images devalue what she has actually done. Based on the number of references to her research by academics in her field, the number of her students who have subsequently reached influential positions in the biological sciences, and the volume of data she amassed in her forty-year-long study, Jane Goodall ought to be considered a uniquely distinguished pioneer in her field and the world's leading zoologist. Yet her achievement can be stated more simply and directly: she opened the door to our understanding of the social and emotional lives of chimpanzees.\n\n" +
        'Wild chimpanzees are dangerous, though before Goodall began her work the dangers were misunderstood and exaggerated. Prior to Goodall\'s early discoveries, no one knew that chimpanzees ate meat. We had no idea that they, or indeed any large mammals other than ourselves, created and used tools. We did not realize that chimpanzees share with humans a similar set of emotions or that their social systems are startlingly like ours. We would not have believed that chimpanzee communities across Africa possess various distinctive cultural traditions.\n\n' +
        "Goodall's scholarly book, The Chimpanzees of Gombe (1986), ranks as the single most authoritative work in this area, the first encyclopaedia for chimpanzee research. Her long-term study of wild apes along the shores of Lake Tanganyika in Gombe State, Nigeria, has turned out to be, in the words of biologist Stephen Jay Gould, 'one of the Western world's great scientific achievements'. Jane Goodall helped create a revolution in the way we study animals, and because the animals she studied are humankind's closest relatives, she also helped alter the way humans think about themselves.\n\n" +
        "Even as a child, there were a few early indicators of the person Jane Goodall would become. By far the clearest of these from her early childhood was in the autumn of 1939, when she was just five years old. One autumn day, a 'golden afternoon' as her mother remembers it, Jane disappeared. The police were called and began the search. Neighbours and family members joined in. After an increasingly frantic search, as dusk moved to dark, the child suddenly reappeared, alone, with fragments of straw in her hair and clothes. 'Wherever have you been?' her mother asked. Jane explained that she had wondered how hens lay eggs. To find out, she had crawled inside a henhouse, concealed herself in the straw, and lain perfectly still for five hours until the hen raised (line 87) herself up, wiggled and provided an answer. It is tempting to consider this as the beginning of her career as a biologist.",
      items: [
        {
          q: 31,
          q_text: 'In the first paragraph, we learn that Goodall',
          opts: [
            'had been wanting to travel to Africa for some time.',
            'recognised that she was unusual in wanting to go to Africa.',
            'initially felt limited by the job she was doing.',
            'sometimes found it difficult to express herself in writing.',
          ],
          answer: 0,
          explanation: "首段她第一封家书便写 'I am living in the Africa I have always longed for, always felt stirring in my blood.'——longed for / felt stirring in my blood 表明向往已久。",
        },
        {
          q: 32,
          q_text: "Goodall's book In the Shadow of Man is mentioned to make the point that",
          opts: [
            'she contributed to the spread of her own fame.',
            'she tried her best to compete with other female scientists.',
            'she was interested in collaborating with scientists abroad.',
            'she was more interested in books than television programmes.',
          ],
          answer: 0,
          explanation: '第二段 That early fame has since been reinforced by her own writing——她自己面向大众的写作（含 In the Shadow of Man）强化了名声。',
        },
        {
          q: 33,
          q_text: "What is the writer doing in the third paragraph?",
          opts: [
            'questioning some of the decisions Goodall made',
            "describing the many sides of Goodall's personality",
            "emphasising the significance of Goodall's work",
            'arguing that most books on Goodall are well researched',
          ],
          answer: 2,
          explanation: '第三段以论文引用数、学生成就、四十年研究数据为据，断言她 ought to be considered a uniquely distinguished pioneer，并总结她打开了理解黑猩猩的大门——强调其工作的重大意义。',
        },
        {
          q: 34,
          q_text: "What does the writer say about Goodall's book The Chimpanzees of Gombe?",
          opts: [
            'The importance of it was not immediately obvious.',
            'There is no better book on the subject.',
            'It inspired a leading scientist to write a similar book.',
            'It encouraged other biologists to visit Lake Tanganyika.',
          ],
          answer: 1,
          explanation: 'ranks as the single most authoritative work in this area——该领域最权威的著作，即没有更好的书。',
        },
        {
          q: 35,
          q_text: "What is the writer's purpose in telling the story about the hen?",
          opts: [
            'to give an example of the imaginative games Goodall played',
            "to point out how unusual Goodall's interests were",
            "to show how different Goodall's character was as a child",
            "to highlight Goodall's intellectual curiosity",
          ],
          answer: 3,
          explanation: '五岁的 Goodall 想知道母鸡怎么下蛋，在鸡舍里一动不动趴了五个小时直到得到"答案"——求知欲/求证的执着。',
        },
        {
          q: 36,
          q_text: "What does 'provided an answer' (line 87) refer to?",
          opts: [
            'the question her mother asked',
            "Goodall's curiosity",
            "Goodall's actions",
            'the search for Goodall',
          ],
          answer: 1,
          explanation: '五岁时 Goodall 趴在鸡舍里想弄清母鸡如何下蛋，母鸡站起、扭动身子 provided an answer——回答的正是她的好奇心（curiosity）。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article which compares performing stand-up comedy with giving a presentation. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "Stand-up comedy and presentations\n\n" +
        'Monica Platter describes how her experiences on a stage performing stand-up comedy helped her to get better at giving presentations for work.\n\n' +
        "I work in marketing, but I've always fancied trying stand-up comedy in my spare time. Earlier this year, I finally plucked up courage and made a series of appearances on stage at a comedy club. The experience provided me with some useful lessons for the public speaking I do in my normal job.\n\n" +
        "To start with, half an hour trying to be funny on stage is a long time. The first five minutes are normally fine, just as the start of a work presentation usually goes well. But then a rather awkward 25 minutes often follow. I tend to speak very quickly and run out of things to say, but after a couple of difficult experiences at the club I realised I needed to speak at half the speed. That way I immediately made life easier for myself. (37) I've subsequently tried to slow down in the presentations I give at work, and it's definitely helped.\n\n" +
        "I also learned that you shouldn't judge your performance by the audience's reaction. If they aren't laughing, it doesn't necessarily mean they don't think it's funny. It could just be that they aren't laughers. Similarly, in a presentation, if your audience isn't looking excited, it might just be that they don't show much emotion. You might have been good or rubbish up to that point. (38) Do that and you'll end up feeling better.\n\n" +
        "Every comedian I met at the club said that knowing how to pause is crucial. (39) They get the joke and wait in suspense to find out what comes next. I've realised that the same principle applies to other types of public speaking. It's good to extend your pauses and use them to make your listeners think before you move on.\n\n" +
        "Another thing I noticed was that even comedians who seem very confident are mostly just good at appearing confident. I would often stand at the club almost fainting with fear, but I managed to deliver a routine that people thought was calm and polished. (40) If you appear to be in control, however, people believe that you know what you're doing, and they listen to you. It's true of other public speaking too.\n\n" +
        "Then, there is the use of fillers, techniques that comedians and public speakers regularly employ. I've seen some take a sip of water, while others adjust the microphone lead, even though they're not thirsty and the microphone sounds fine. (41) So, whether you're going to do stand-up or business talks, develop fillers that you feel comfortable with.\n\n" +
        "The bottom line with stand-up comedians, however, is that it's always been about performance and delivery. Everything I saw at the club confirmed that. (42) I've been to great shows where 80% of the humour came from the comedian's facial expressions, and eyebrow movements seem particularly important. I've been focussing on improving my eyebrow use when I'm giving work presentations. I'm still not as good as I'd like, but I'm making progress, and much of this is down to what I've learned from stand-up.",
      options: [
        { label: 'A', text: 'It felt more like a shaky mess to me than anything else, to be honest.' },
        { label: 'B', text: 'This showed the importance of observing your audience and responding to them.' },
        { label: 'C', text: "This told me the best script in the world is nothing in the hands of someone who isn't funny in themselves." },
        { label: 'D', text: 'It just provides them with an opportunity to remember what they were meant to say next.' },
        { label: 'E', text: "Either way, the best thing to do is carry on and assume they're really getting a lot out of it." },
        { label: 'F', text: 'It was a major turning point for me.' },
        { label: 'G', text: "It's when your audience has a think about what you've just said." },
      ],
      items: [
        { q: 37, answer: 'F', explanation: 'F "这对我是个重大转折点"——放慢语速让境况立变，后句 I\'ve subsequently tried to slow down 呼应转折后的改变。' },
        { q: 38, answer: 'E', explanation: 'E "无论如何，最好的做法是继续并假定听众收获很大"——承接无论 good or rubbish 的两种情况；后句 Do that and you\'ll end up feeling better 承接。' },
        { q: 39, answer: 'G', explanation: 'G "此时听众会想一想你刚说的话"——解释 pause（停顿）为何 crucial；They get the joke and wait in suspense 承接。' },
        { q: 40, answer: 'A', explanation: 'A "说实话，对我来说那更像一团糟"——与观众眼中 calm and polished 形成反差，引出 If you appear to be in control 的道理。' },
        { q: 41, answer: 'D', explanation: 'D "它只是给他们一个机会记起接下来该说什么"——解释喝水、调话筒线等 fillers（垫场动作）的作用。' },
        { q: 42, answer: 'C', explanation: 'C "这告诉我：再好的剧本，落在本身不搞笑的人手里也毫无意义"——承接 confirmed that，引出 80% 幽默来自表情的观察。' },
      ],
    },
    7: {
      // 原书文章标题 "The fascinating art of Ebru"（存档于 passage）；A–E 各节无标题/人名，name 留空
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read a magazine article about a form of art called Ebru. For questions 43–52, choose from the sections (A–E). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage:
        'The fascinating art of Ebru',
      sections: [
        {
          label: 'A',
          name: '',
          text:
            'The art of Ebru can produce stunning results. It involves painting on the surface of water, then transferring the moving image to paper or fabric. The results are spectacular – strikingly contemporary, yet rooted in the tradition of a centuries-old art form. There are two key ingredients: tragacanth, a soft gum which makes the water more dense, and ox gall. The ox gall has two essential properties: first, it allows colours to float and spread on the surface of the water; second, it prevents the surface of the water from merging or completely dissolving.',
        },
        {
          label: 'B',
          name: '',
          text:
            "An Ebru artist, Hayrettin Kozanoglu, demonstrates by dipping a brush into pots of vivid colours arranged around a shallow rectangular tray of water, then sprinkling paint onto the surface. 'I can drop on green, then blue on top, then add yellow, and the colours stay completely separate,' he says. He takes a small comb and swirls it across the surface. Instead of the colours merging into a muddy mess, as would happen with oil or acrylic paint, the tray fills with swirling curly designs of the kind seen inside the front and back covers of old hardback books. Finally Kozanoglu places a piece of paper onto the tray, carefully presses it flat without submerging it, then deftly slides it out. The pattern he created in the tray has been transferred to the sheet with absolute precision.",
        },
        {
          label: 'C',
          name: '',
          text:
            "Prior to arriving in Europe in the 17th century, a similar art form to Ebru had developed across Asia. A 10th-century Chinese book mentions 'drifting sand notepaper' made by dragging paper through a fermented flour paste mixed with colours, while suminagashi, or 'floating ink', was known in 12th-century Japan. By the 15th century, India and countries across central Asia had their own indigenous versions. The current Turkish tradition of Ebru dates to the mid-19th century and the work of several masters, who passed on their skills to apprentices.",
        },
        {
          label: 'D',
          name: '',
          text:
            "Ebru artists are renowned for intricate depictions of flowers, as well as abstract patterns. Kozanoglu explains that the technique is evolving: 'Before the 20th century, it was only about flowers. As more people are learning about Ebru, interesting experiments are happening. Artists are creating landscapes and even portraits – although it takes many years of practice to reach that level. The beauty of Ebru is that you can create attractive and complex works of art quickly and easily. Ebru has the potential to surprise us because the water and paint permit new and exciting things to happen.'",
        },
        {
          label: 'E',
          name: '',
          text:
            "Kozanoglu recognises the therapeutic value of Ebru in helping people with emotional problems. 'To make Ebru art, you need to concentrate, to be calm and patient. Also, the colours you choose can be a reflection of your personality, your mood and your circumstances. Water is the source of life and I believe it holds memories. That's why the way in which people make the connection between the water and the paint is important. It's an art form that gives pleasure to the many people who practise it – and also recognition of the power of water in helping to create a more colourful and inspiring world.'",
        },
      ],
      items: [
        { q: 43, q_text: 'say that the final design is exactly the same as the one created on the water?', answer: 'B', explanation: 'B：The pattern he created in the tray has been transferred to the sheet with absolute precision——纸上成品与水上图案完全一致。' },
        { q: 44, q_text: 'claim that Ebru is a combination of ancient and modern art?', answer: 'A', explanation: 'A：strikingly contemporary, yet rooted in the tradition of a centuries-old art form——既现代又源自古老传统。' },
        { q: 45, q_text: 'suggest that the results of using the Ebru technique can be unpredictable?', answer: 'D', explanation: 'D：Ebru has the potential to surprise us because the water and paint permit new and exciting things to happen——效果难以预料。' },
        { q: 46, q_text: 'identify the mental attitude an artist should have when working on Ebru?', answer: 'E', explanation: 'E：To make Ebru art, you need to concentrate, to be calm and patient——创作时应有的专注、平静与耐心。' },
        { q: 47, q_text: 'explain ways in which one substance is vital to Ebru?', answer: 'A', explanation: 'A：The ox gall has two essential properties: first... second...——牛胆汁对 Ebru 至关重要的两种作用。' },
        { q: 48, q_text: 'mention that Ebru is expanding into new genres of painting?', answer: 'D', explanation: 'D：Artists are creating landscapes and even portraits——从花卉扩展到风景、肖像等新题材。' },
        { q: 49, q_text: 'reveal how knowledge of the Ebru technique has been kept alive?', answer: 'C', explanation: 'C：the work of several masters, who passed on their skills to apprentices——师徒相传延续技艺。' },
        { q: 50, q_text: 'claim there is a link between colour and feelings?', answer: 'E', explanation: 'E：the colours you choose can be a reflection of your personality, your mood and your circumstances——色彩与情绪性格相关。' },
        { q: 51, q_text: 'mention what the original subject of Ebru painting was?', answer: 'D', explanation: "D：'Before the 20th century, it was only about flowers.'——最初题材是花卉。" },
        { q: 52, q_text: 'give an example of the way different shades of paint can be used in Ebru?', answer: 'B', explanation: "B：'I can drop on green, then blue on top, then add yellow, and the colours stay completely separate.'——不同色彩叠加使用的实例。" },
      ],
    },
  },
}

// Source: Cambridge English First 4（标准版4）B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Test 3 Reading and Use of English: 书页 48–59（PDF 49–60），答案核对自 Test 3 Key（书 133 / PDF 134），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 行号标记 (line 61) 按原书内嵌在所标注行（"near the top of her profession – through doggedness"）行首。
// 注意：Part 6 副题（原书斜体导语 "Who doesn't want to be the best in the world?"）存于 passage 开头；
//       选项 G 分号后为小写 "it will send"、正文 "biscuits in the fastest time" 为小写 in，均经高倍裁剪复核。
// 注意：Part 7 文章标题 "Superfans"、副题 "Four women talk about the objects of their passion and dedication."
//       存于 passage；各节标题（如 "Katie on the Harry Potter books"）照录于 name 字段。
const STD4_R3 = {
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

// Source: Cambridge English First 4（标准版4）B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Test 4 Reading and Use of English: 书页 68–79（PDF 69–80），答案核对自 Test 4 Key（书 145 / PDF 146），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 行号标记 (line 13) 按原书内嵌在所标注行（"silly. Yet some people do exactly that."）行首；
//       "they bought them; in a few months"（分号）与 "it's a tough job nevertheless" 均经高倍裁剪复核。
// 注意：Part 6 无副题。"As we strode along the beach"（strode）、"on board a cruise from the Portuguese
//       island of Madeira"（原书即无 ship）、"Turks and Caicos Islands"（大写 I，与下文泛指 the islands
//       小写相对）均经 10–12 倍裁剪放大确认。
// 注意：Part 7 文章标题 "What does a sports psychologist do?"、斜体副题 "Jeremy Snape explains" 存于 passage；
//       A–E 各节原书无人名/小节标题，name 留空字符串；题组引导句 "In which section are the following
//       mentioned?" 照原书（当前结构无对应字段，仅存档于此）。
const STD4_R4 = {
  meta: {
    id: 'fce-standard-4-test4-reading',
    title: 'FCE 标准版真题 4 · Test 4 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Reading and Use of English',
    pages: '书 68–79',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 4 Key（书 145 / PDF 146）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'Chimpanzee beds\n\n' +
        "One morning, Koichiro Zamma, a zoologist at Japan's Kyoto University, awoke from a (0).......... sleep in the treetops of an African forest. For years, he had been (1).......... for the perfect night's sleep. His (2).......... sleep that night had not involved special mattresses or pillows. It had been on a construction of leaves, (3).......... together by twigs, and built by chimpanzees.\n\n" +
        "Zamma noticed that chimpanzees' beds are built to (4).......... the exact shape of their bodies. They're built high up in trees, and sway gently with the movement of the branches, which aids sleep. He realised they could serve as a useful (5).......... for the perfect human bed.\n\n" +
        'Zamma has now designed a bed based on the principles of the chimpanzee bed. The mattress (6).......... a depression in the centre to imitate the natural dip in the chimpanzee bed. This is supported by a frame which (7).......... the bed to gently move. Some enthusiasts (8).......... the bed has transformed their sleeping habits.',
      items: [
        { q: 1, opts: ['inquiring', 'wanting', 'searching', 'attempting'], answer: 2, explanation: "searching for '苦苦寻找'；he had been searching for the perfect night's sleep，与 for 搭配。" },
        { q: 2, opts: ['restoring', 'refreshing', 'relieving', 'renewing'], answer: 1, explanation: 'refreshing sleep "令人焕然一新的睡眠"；与那晚没睡好、床垫枕头都不特殊形成对照。' },
        { q: 3, opts: ['gripped', 'grasped', 'pushed', 'held'], answer: 3, explanation: 'leaves held together by twigs "被树枝固定在一起"，hold together 固定搭配。' },
        { q: 4, opts: ['coincide', 'fit', 'follow', 'correspond'], answer: 1, explanation: 'fit the exact shape of their bodies "与身体形状完全贴合"，fit 为及物动词直接接宾语。' },
        { q: 5, opts: ['model', 'standard', 'imitation', 'example'], answer: 0, explanation: 'serve as a useful model for "作为……的范本"；下文 Zamma 照黑猩猩床的原理设计床。' },
        { q: 6, opts: ['promotes', 'demonstrates', 'consists', 'features'], answer: 3, explanation: 'feature "设有、以……为特色"；The mattress features a depression 床垫中央有一个凹槽。' },
        { q: 7, opts: ['admits', 'allows', 'encourages', 'provides'], answer: 1, explanation: 'allow sth to do "使……得以"；allows the bed to gently move 让床轻轻晃动。' },
        { q: 8, opts: ['respond', 'promote', 'claim', 'recommend'], answer: 2, explanation: 'claim (that) "声称"；enthusiasts claim the bed has transformed their sleeping habits，接宾语从句。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        "New Year's resolutions\n\n" +
        'At the start (0).......... each new year, people in some countries make resolutions for the future. These resolutions are intentions that people aim to fulfil in the hope of changing their lives (9).......... the better. Resolutions range from giving (10).......... a bad habit such as smoking (11).......... beginning a new activity, for example learning to play a musical instrument.\n\n' +
        'Unfortunately, many people find keeping their resolutions very difficult and, a month (12).......... so later, abandon them. This is often a result of having set a totally unrealistic goal for themselves.\n\n' +
        'The people who are most successful in keeping their resolutions (13).......... usually those who make sure that their goals are fairly small and straightforward. They have a clear idea of precisely (14).......... they plan to do to reach their goal. Often they find (15).......... helpful if they have friends who have made the same resolution because they are then able to support one (16).......... in remaining committed and focused.',
      items: [
        { q: 9, answer: ['FOR'], show: 'FOR', explanation: 'change their lives for the better "使生活变好"，for the better 固定短语。' },
        { q: 10, answer: ['UP'], show: 'UP', explanation: 'give up a bad habit "戒除坏习惯"，give up 固定搭配。' },
        { q: 11, answer: ['TO'], show: 'TO', explanation: 'range from giving up ... to beginning ...，from ... to ... 结构。' },
        { q: 12, answer: ['OR'], show: 'OR', explanation: 'a month or so later "一个月左右之后"，or so 表约数。' },
        { q: 13, answer: ['ARE'], show: 'ARE', explanation: '主语 The people 为复数，表语 those who... 前～系动词 are。' },
        { q: 14, answer: ['WHAT'], show: 'WHAT', explanation: 'precisely what they plan to do，从句缺宾语，用连接代词 what。' },
        { q: 15, answer: ['IT'], show: 'IT', explanation: 'find it helpful，it 作形式宾语，真正的宾语是 if 从句。' },
        { q: 16, answer: ['ANOTHER'], show: 'ANOTHER', explanation: 'support one another "互相支持"，one another 固定短语。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'Alfred Hitchcock\n\n' +
        'One of the most (0) FAMOUS filmmakers of the twentieth century was Alfred Hitchcock. He was born in England and had considerable (17)_____ making films there before he decided to move to the United States to work in Hollywood.\n\n' +
        'Hitchcock is best remembered for his (18)_____ thrillers, such as Psycho. He had great skill in building up (19)_____, which made his films extremely (20)_____ for audiences.\n\n' +
        "Hitchcock liked to make a brief (21)_____ in most of his films – at times that were in no way essential to the plot. When he realised audiences were waiting eagerly for him to appear, he started to make sure that these moments occurred early in the films to avoid being a (22)_____ from the plot.\n\n" +
        'It was sometimes said that Hitchcock had no great liking for actors. This was something of an (23)_____, but there is certainly some (24)_____ in it as he did not enjoy working with actors who disagreed with the way he interpreted their parts.',
      items: [
        { q: 17, given: 'SUCCEED', answer: ['SUCCESS'], show: 'SUCCESS', explanation: 'succeed → success 名词；had considerable success making films 取得巨大成功。' },
        { q: 18, given: 'PSYCHOLOGY', answer: ['PSYCHOLOGICAL'], show: 'PSYCHOLOGICAL', explanation: 'psychology → psychological 形容词；修饰 thrillers。' },
        { q: 19, given: 'TENSE', answer: ['TENSION'], show: 'TENSION', explanation: 'tense → tension 名词；build up tension 制造紧张气氛。' },
        { q: 20, given: 'FRIGHTEN', answer: ['FRIGHTENING'], show: 'FRIGHTENING', explanation: 'frighten → frightening；made his films extremely frightening 令观众恐惧。' },
        { q: 21, given: 'APPEAR', answer: ['APPEARANCE'], show: 'APPEARANCE', explanation: 'appear → appearance 名词；make a brief appearance 短暂露面（客串）。' },
        { q: 22, given: 'DISTRACT', answer: ['DISTRACTION'], show: 'DISTRACTION', explanation: 'distract → distraction；a distraction from the plot 分散对情节注意的事物。' },
        { q: 23, given: 'EXAGGERATE', answer: ['EXAGGERATION'], show: 'EXAGGERATION', explanation: 'exaggerate → exaggeration；something of an exaggeration 有些言过其实（an 后接元音开头名词）。' },
        { q: 24, given: 'TRUE', answer: ['TRUTH'], show: 'TRUTH', explanation: 'true → truth 名词；some truth in it 其中不无道理。' },
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
          stem: 'My mother once worked for an engineering company.',
          key: 'EMPLOYED',
          answer: ['to be employed in', 'to be employed by', 'to be employed at'],
          show: 'to be employed in / by / at',
          explanation: 'once worked for → used to be employed in/by/at an engineering company；used to do 表过去的状态；Key 印 to be EMPLOYED | in/by/at。',
        },
        {
          q: 26,
          stem: 'It rained without stopping last Friday.',
          key: 'NEVER',
          answer: ['never stopped raining'],
          show: 'never stopped raining',
          explanation: 'rained without stopping → it never stopped raining last Friday；never + 过去式表"从未停止"。',
        },
        {
          q: 27,
          stem: "I'm having difficulty understanding the instructions on my new camera.",
          key: 'DIFFICULT',
          answer: ['its difficult to understand', "it's difficult to understand"],
          show: "it('s/s) difficult to understand",
          explanation: "having difficulty doing → finding it('s/s) difficult to understand；find + it + 形容词结构；Key 印 it('s/s) DIFFICULT | to understand。",
        },
        {
          q: 28,
          stem: 'People are spending more money on leisure activities than in the past.',
          key: 'INCREASE',
          answer: ['an increase in'],
          show: 'an increase in',
          explanation: 'spending more ... than in the past → there has been an increase in the amount of money people are spending；increase 作名词与 in 搭配。',
        },
        {
          q: 29,
          stem: 'The city needs to have a far better transport system.',
          key: 'NEED',
          answer: ['in need of'],
          show: 'in need of',
          explanation: 'needs to have → the city is in need of a far better transport system；be in need of 急需。',
        },
        {
          q: 30,
          stem: 'You should be more careful with your handwriting.',
          key: 'ATTENTION',
          answer: ['to pay more attention to', 'to give more attention to', 'to pay attention to', 'to give attention to'],
          show: 'to pay/give (more) attention to',
          explanation: 'be more careful with → ought to pay/give (more) attention to your handwriting；Key 印 to pay/give (more) | ATTENTION to，more 为可选项。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read a magazine article about being a cartoonist. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        'So you want to be a cartoonist?\n\n' +
        'People are always asking me how I became a cartoonist. This is understandable – cartooning is one of those jobs you dream about as a little kid, like being a race car driver. But most people eventually throw these childish daydreams away and consider more realistic professions, like becoming a tax lawyer or a manufacturer of auto parts. The idea that you can support yourself financially at all, let alone maintain an adequate lifestyle, by sketching the sort of doodles commonly found in the margins of high school notebooks is, when you think about it, (line 13) silly. Yet some people do exactly that.\n\n' +
        "As for me, after having a fairly typical cartoonist's childhood (obsessive love of comic strips, contributions to school publications, being known throughout school as 'the kid who draws'), I happened to study graphic design in college and then, after graduating, went around different companies with a collection of illustrations. I was lucky to find someone at a newspaper who told me they were looking for political cartoons on local issues. I drew up a few ideas and they bought them; in a few months, I was selling enough to support myself.\n\n" +
        "You actually don't need much to become a cartoonist. You don't need a university degree, you don't need much money, you don't even really need to know how to draw. You just need your brain, your hand and something that makes a mark. But of course, if it really was that easy, there would be as many cartoonists as there are, say, teachers. The technical barriers to being a cartoonist are low, but it's a tough job nevertheless. No one should attempt to enter the profession unless they feel that doing anything else would be impossible. After all, it's so much easier to get a regular job that pays the rent and leaves at least a little time for the family, home repairs and hobbies.\n\n" +
        "The more things you know how to do well, the more chance you have of making a living with your art. I've done political cartoons, comic strips and comic books. I've also been a writer, a caricaturist and occasionally a designer. I don't turn down anything – that's because you can learn an awful lot even from work you don't particularly want to do. It also doesn't hurt to be intelligent, well-read and curious about everything around you.\n\n" +
        "But what about the business side of being a cartoonist? There was a time when a significant number of cartoonists could find regular jobs doing cartoons for several different newspapers and magazines. But those days, if they aren't gone, are rapidly passing. For almost everyone today, cartooning is an entrepreneurial activity – that means you're not just going to have to produce the work, you're going to have to sell it. The more comfortable you are with what that involves, the better you'll do. Time and time again, I've seen cartoonists with average creative abilities and excellent business skills do far better than those who were artistic geniuses but nothing else.\n\n" +
        "It amazes me how often I meet people who have never sold a cartoon in their life and yet are terrified someone will steal their ideas. Some of these people are so worried that they refuse to let others even look at their work! Legally, all you need to do to protect your stuff is draw a little 'c' for 'copyright' somewhere, put a circle around the letter, then write your name and the date next to it. But let's face it – it's far more realistic that no one will be interested in your work. If, by some chance, someone steals a cartoon and it goes viral on the internet and everybody starts emailing it to their friends, it's not a disaster – it can be an extremely lucky break, publicity-wise!",
      items: [
        {
          q: 31,
          q_text: 'In the first paragraph, what point does the writer make about being a cartoonist?',
          opts: [
            'It is not seen as a very practical career option.',
            'People prefer doing jobs that have a higher status.',
            'People are surprised at how little money cartoonists get.',
            'Not enough children are being encouraged to become one.',
          ],
          answer: 0,
          explanation: '首段：人们把漫画家与儿时梦想一起丢开，转而选择 tax lawyer、manufacturer 等更现实的职业——画漫画不被视为务实的职业选择。',
        },
        {
          q: 32,
          q_text: "What does 'that' in line 13 refer to?",
          opts: [
            'thinking about things too much',
            'supporting yourself financially',
            'sketching doodles in school notebooks',
            'considering a different profession',
          ],
          answer: 1,
          explanation: "line 13 'Yet some people do exactly that' 中 that 指'靠画涂鸦谋生（support yourself financially）'——多数人觉得不现实，但确实有人做到了。",
        },
        {
          q: 33,
          q_text: 'The writer mentions teachers to make the point that',
          opts: [
            'professional cartoonists need time to develop their skills.',
            'professional cartoonists need to have a passion for their work.',
            'it is harder to become a professional cartoonist than it might seem.',
            'many professional cartoonists complain of not having much free time.',
          ],
          answer: 2,
          explanation: "'if it really was that easy, there would be as many cartoonists as there are, say, teachers'——若真那么容易，漫画家早和教师一样多了；实际入行更难。",
        },
        {
          q: 34,
          q_text: 'In the fourth paragraph, the writer suggests professional cartoonists',
          opts: [
            'learn from other types of artists.',
            'do thorough research for jobs.',
            'work on different projects at the same time.',
            'accept even unappealing jobs.',
          ],
          answer: 3,
          explanation: "'I don't turn down anything... you can learn an awful lot even from work you don't particularly want to do'——连不想做的工作也来者不拒。",
        },
        {
          q: 35,
          q_text: 'What does the writer say about dealing with the business side of being a cartoonist?',
          opts: [
            'It can be distracting.',
            'It is unavoidable.',
            'It is difficult to do well.',
            'It can be exhausting.',
          ],
          answer: 1,
          explanation: "'cartooning is an entrepreneurial activity – you're not just going to have to produce the work, you're going to have to sell it'——除了创作还必须会推销，无可回避。",
        },
        {
          q: 36,
          q_text: 'What does the writer say about the theft of ideas from cartoonists?',
          opts: [
            'It is highly unlikely to happen.',
            'People are more aware of it now.',
            'The law does not prevent it happening.',
            'The internet has made it easier to do.',
          ],
          answer: 0,
          explanation: "'it's far more realistic that no one will be interested in your work'——作品根本没人看得上，被偷创意的可能性极小。",
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article from a magazine about an unusual hobby. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "Messages in bottles\n\n" +
        'I was 22 and on a family holiday in the Caribbean Turks and Caicos Islands when it first happened. As we strode along the beach, I saw a glint of blue glass on the shoreline. I realised it was a large bottle – and that there was something inside it. I was so excited!\n\n' +
        "I'd always dreamed of finding a message in a bottle and my hands were shaking as I uncorked it. It turned out the bottle had been dropped eight months previously by a couple on board a cruise from the Portuguese island of Madeira. (37) This bottle had managed to survive its journey all the way across the Atlantic and I'd found it.\n\n" +
        "I emailed the senders as soon as I got back to the hotel. They were happy to know someone had got their message, but perhaps disappointed that it had been found so soon after they'd dropped it overboard. For me, however, it was a profound experience. (38) My family and I had always beach-combed for shells on vacation, and when you learn how to look properly, you start finding loads. I figured that I could do the same with messages in bottles.\n\n" +
        "Since that holiday, eight years ago, I've found more than 80 messages in bottles, mostly on the Turks and Caicos Islands, which oceanographer Curtis Ebbesmeyer calls 'a magnet for floating objects'. Bottles have been washing up on the islands since at least the 1800s; the Turks and Caicos National Museum features a large collection. I've picked up bottles from senders in North America, Europe and Asia. (39) I've also found artwork, business cards, dollar bills ... even a crumbling piece of wedding cake.\n\n" +
        "I try to make contact with the senders if I can. (40) I travelled to Düsseldorf last summer to meet Sabine Roy, a German travel agent whose message I found back in 2011. Sabine's message had deteriorated badly by the time I'd found it; all I could make out was a cruise ship letterhead, her name and 'Düsseldorf'. I tried tracing her for four years before I thought of posting a message on social media. Within a day, I had tracked her down.\n\n" +
        "It's a very strange experience when I meet a sender. We've been brought together entirely by chance and there are no guarantees we'll have anything in common. (41) People who send messages in bottles tend to be adventurous types and are often as excited to meet up as I am.\n\n" +
        "A lot of people forget they've sent these messages and when you present them with these pieces of their past, it's almost like time travel. (42) When I called the phone number supplied, in Baltimore, USA, I spoke to an elderly woman. She told me her young son must have sent the bottle while on a boat trip with his dad in the 1990s. It's discoveries like these that keep me interested in hunting for bottles.",
      options: [
        { label: 'A', text: "It's not just messages inside either." },
        { label: 'B', text: "So you might think these encounters could be awkward – although that hasn't been my experience so far." },
        { label: 'C', text: 'One of the oldest messages I found was from a soft drinks bottle from the 1970s.' },
        { label: 'D', text: "It wasn't a treasure map or a cry for help from someone stranded on a deserted island, but to me, it was a miracle." },
        { label: 'E', text: "Sometimes it's funny, as was the case with a note I found from a sender who claimed to have been 'taken prisoner by a grumpy old monster'." },
        { label: 'F', text: 'It sparked a sort of obsession and I started spending every spare cent and every spare moment looking for more bottles.' },
        { label: 'G', text: 'The internet has made that easier than it would have been in the past and I often get help through my blog and web page.' },
      ],
      items: [
        { q: 37, answer: 'D', explanation: 'D "不是藏宝图也不是荒岛求救，但对我而言是奇迹"——评价捡到的情侣纸条，与后句"瓶子漂过整个大西洋"衔接。' },
        { q: 38, answer: 'F', explanation: 'F "它引发一种痴迷，我花光每一分闲钱、用尽每一刻空闲去找瓶子"——承接 profound experience，开启八年收集之路。' },
        { q: 39, answer: 'A', explanation: 'A "里面装的不只是信件"——后文 I\'ve also found artwork, business cards, dollar bills ... wedding cake 呼应。' },
        { q: 40, answer: 'G', explanation: 'G "互联网让联系比过去容易得多，我常通过博客和网页获得帮助"——引出在社媒发帖、一天找到 Sabine 的经历。' },
        { q: 41, answer: 'B', explanation: 'B "你可能以为这种会面会尴尬，但至今我的经历并非如此"——下文寄件人富冒险精神、乐于赴约。' },
        { q: 42, answer: 'E', explanation: 'E "有时很搞笑，比如一张自称被\'暴躁老怪囚禁\'的纸条"——引出巴尔的摩老太太讲小儿子 90 年代寄瓶的趣事。' },
      ],
    },
    7: {
      // 原书文章标题 "What does a sports psychologist do?"、斜体副题 "Jeremy Snape explains"（存档于 passage）
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read a magazine article about working as a sports psychologist. For questions 43–52, choose from the sections (A–E). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage:
        'What does a sports psychologist do?\n\n' +
        'Jeremy Snape explains.',
      sections: [
        {
          label: 'A',
          name: '',
          text:
            "I set up my company Sporting Edge a decade ago to share the practical tools which promote success in sport. I specialise in the mental side of high performance. The role of the sports psychologist is more widely accepted than it was when I set up my company. Nowadays, when people reach the very top of their professions, we often hear that it was their mental game that led to their success. With so many world champions in sport speaking positively about their mental training now, it has created a new drive for sportspeople to find out what they could achieve with it. There used to be more mistrust of the concept of sports psychology. I think this is because our society celebrates people who are presented as being perfect, so it's a contradiction for these people to express any doubts or have any flaws. Thankfully, it's now seen as a positive thing, not a failing, to deal with imperfections in the mental game as readily as we do in the physical one.",
        },
        {
          label: 'B',
          name: '',
          text:
            "Part of my role involves working with players and coaches to focus on the things that create the conditions for success. I teach them not to be overly influenced by the emotions that can impact badly on performance. When they can do this, they are able to create a clearer and more logical plan for success. We all want instant success, but if you take the time to develop quality long-term plans and not just concentrate on thorough preparation in the short term, you have a chance of reaching your potential. As a former international sportsman myself, I know very well the importance of this.",
        },
        {
          label: 'C',
          name: '',
          text:
            "The latest scientific discoveries can help athletes' state of mind. For example, developments in functional MRI scanning and neuroscience show us that talking to ourselves isn't meaningless, as is commonly thought – it actually creates structures in the brain which, if reinforced repeatedly, can influence our actions and thus our success or failure. We therefore have a responsibility to ensure that our thinking habits are as healthy as possible. Learning routines to develop concentration is crucial. Athletes need to forget about everything else and keep their minds on their game. Mental strength is definitely something that can be trained and developed like physical strength.",
        },
        {
          label: 'D',
          name: '',
          text:
            "The vast majority of training within teams will be physical rather than mental, but there are mental skills running through every physical session – decision-making, understanding team behaviour, confidence, focus, and so on. When coaches place an emphasis on these, it can really make a difference. The problem is that they seem harder to coach and that's where a sports psychologist can help. We can help coaches find new ways of reinforcing psychological skills. We can help them develop the way they deliver instructions, get feedback after skills sessions or facilitate team discussions in meetings. Forward-thinking coaches know that this is the way to engage and motivate players.",
        },
        {
          label: 'E',
          name: '',
          text:
            "Elite performers are often driven by a fear of failure and feel a strong sense of relief after they succeed. This is because so much of people's identity is made up of what we do for a job rather than who we really are. This means we are desperate to be considered a success and not to let anyone down. If we tried to enjoy the struggle more, rather than just the end result, we would see that this is actually where the fun is. Professional sport is defined by results, though, so we have to accept that our careers will be remembered for those moments when we win something.",
        },
      ],
      items: [
        { q: 43, q_text: 'the need to appreciate the process of competing', answer: 'E', explanation: 'E：If we tried to enjoy the struggle more, rather than just the end result, we would see that this is actually where the fun is——重视享受竞技过程本身。' },
        { q: 44, q_text: 'the need for patience to achieve success', answer: 'B', explanation: 'B：We all want instant success, but if you take the time to develop quality long-term plans...——成功需要耐心经营长期计划。' },
        { q: 45, q_text: 'an increased level of curiosity about how psychology can help in sport', answer: 'A', explanation: 'A：With so many world champions speaking positively about their mental training now, it has created a new drive for sportspeople to find out what they could achieve with it。' },
        { q: 46, q_text: 'the apparent difficulty of giving instruction in the use of mental strategies', answer: 'D', explanation: 'D：The problem is that they seem harder to coach——心理技能更难讲授，教练需心理学家帮助改进 instructions 的传授方式。' },
        { q: 47, q_text: 'understanding from experience what sports professionals require', answer: 'B', explanation: 'B：As a former international sportsman myself, I know very well the importance of this——以亲身体验理解职业选手的需求。' },
        { q: 48, q_text: 'how recent research findings can aid sportspeople', answer: 'C', explanation: 'C：The latest scientific discoveries can help athletes\' state of mind——功能性 MRI 扫描与神经科学等新发现助力运动员。' },
        { q: 49, q_text: "sportspeople's feelings having a negative effect on them", answer: 'B', explanation: "B：teach them not to be overly influenced by the emotions that can impact badly on performance——情绪对发挥的负面影响。" },
        { q: 50, q_text: 'greater awareness of what sports psychologists do these days', answer: 'A', explanation: 'A：The role of the sports psychologist is more widely accepted than it was——如今行业角色被更广泛认知与接受。' },
        { q: 51, q_text: 'the importance for sportspeople of maintaining focus', answer: 'C', explanation: 'C：Learning routines to develop concentration is crucial. Athletes need to forget about everything else and keep their minds on their game。' },
        { q: 52, q_text: 'a tendency to see successful people as having no weaknesses', answer: 'A', explanation: 'A：our society celebrates people who are presented as being perfect, so it\'s a contradiction for these people to express any doubts or have any flaws——成功者被视作完美无缺。' },
      ],
    },
  },
}

export const fceStandardReadingTests = [STD1_T1, STD1_T2, STD1_T3, STD1_T4, STD2_T1, STD2_T2, STD2_T3, STD2_T4, STD3_R1, STD3_R2, STD3_R3, STD3_R4, STD4_R1, STD4_R2, STD4_R3, STD4_R4]
