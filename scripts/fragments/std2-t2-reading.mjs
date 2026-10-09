// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// Test 6（应用 Test 2）Reading and Use of English: 书页 30–41（PDF 31–42），答案核对自 Test 6 Key（书 132 / PDF 133）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录，含英文撇号的字符串一律用双引号包裹。

export default {
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
