// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Test 2 Reading and Use of English: 书页 30–41（PDF 32–43），答案核对自 Test 2 Key（书 132 / PDF 134），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 7 文章标题 "Exercise like an animal"、副题 "Journalist Annabel Venning tries a new exercise craze"。
//       原书五节标题条（A–E）为黑底白字，本扫描件网点过密、白字无法辨认（8x 放大+二值化增强均无效），
//       参照 std2-t4 先例 name 留空；题目指令本身写作 choose from sections (A–E)，不影响作答。
export default {
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
