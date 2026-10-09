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
export default {
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
