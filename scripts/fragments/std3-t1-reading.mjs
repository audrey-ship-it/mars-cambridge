// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Test 1 Reading and Use of English: 书页 8–19（PDF 10–21），答案核对自 Test 1 Key（书 120 / PDF 122），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 6 指令句原书误植印作 "You are going to a read a newspaper article"（多一个 a），照录不改。
// 注意：Part 7 文章标题 "Local environmental heroes"、副题 "Four innovators who founded local conservation projects"
//       存于 passage 字段（当前 UI 不渲染，仅存档）；D 段 "The initiative had soon sold..." 已放大复核确认。
export default {
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
