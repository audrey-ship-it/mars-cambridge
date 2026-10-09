// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 88–93（PDF 90–95），答案核对自 Test 4 Key（Listening 区在书 157 / PDF 159）
// 音频：/audio/fce/std3/std3-t4-p1.mp3 ~ std3-t4-p4.mp3（整 Part 一条）
// 注：书 90 页 Part 2 印刷小标题为 "Visit to a tea plantation"（数据结构无对应字段，记录于此备查）。

export default {
  meta: {
    id: 'fce-standard-3-test4-listening',
    title: 'FCE 标准版真题 3 · Test 4',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 88–93',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 157 / PDF 159',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t4-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking about an ancient object he found in the ground.',
          q: 'The man took the object to a museum because',
          opts: [
            'he thought it might be valuable.',
            'he decided to record his find.',
            'he wanted to know what it was.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他想知道这东西是什么。',
        },
        {
          scenario: 'You hear two friends talking about advertising.',
          q: 'What does the woman say about advertisements?',
          opts: [
            'They are merely a form of entertainment.',
            "They make people buy things they don't need.",
            'They give people misleading information about new products.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她说广告让人买不需要的东西。',
        },
        {
          scenario: 'You hear an actor talking about her career.',
          q: 'What does she say about how she became an actor?',
          opts: [
            'She had a chance meeting with someone.',
            'She was successful at drama school.',
            'She asked her friend to help her.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她因一次偶然的相遇入行。',
        },
        {
          scenario: 'You hear a tour guide telling a group of tourists about a view.',
          q: 'Which feature does the guide think will be most familiar to them?',
          opts: ['the park', 'the river', 'the wood'],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他认为游客最熟悉的是那条河。',
        },
        {
          scenario: 'You hear a man talking to a friend about a presentation he has just given.',
          q: 'How does he feel now?',
          opts: [
            'relieved that the audience was small',
            'confident that he spoke clearly',
            'surprised that so many people asked questions',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他确信自己讲得清楚。',
        },
        {
          scenario: 'You hear two students talking about a careers talk they have just heard at college.',
          q: 'What do they disagree about?',
          opts: [
            'how useful the information was',
            'how entertaining the speaker was',
            'how well the audience behaved',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，两人意见不一的是听众的表现。',
        },
        {
          scenario: "You hear an author of children's books talking about her work.",
          q: 'What point is she making?',
          opts: [
            'She wants her books to be educational.',
            'Her books are about her real-life experiences.',
            'Friendship is the main focus of her stories.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她说友谊是其故事的核心。',
        },
        {
          scenario: 'You hear a man and a woman talking about older people learning languages.',
          q: 'What does the man say about them?',
          opts: [
            "They don't take advantage of technology.",
            'They have more time to study.',
            'They use better learning techniques.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他说年长者运用的学习方法更好。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a student called Andy Richards talking about his recent trip to the tea growing region of Assam in Northern India. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t4-p2.mp3',
      items: [
        {
          q: 'As part of his ____ course at university, Andy went to India to gather information for a project.',
          answer: ['business studies', 'business'],
          show: 'business (studies)',
          explanation: '官方答案 business (studies)：Key 中 studies 为可选词，两种写法均算对。',
        },
        {
          q: "Andy compares the tea plant's growing conditions to a ____ .",
          answer: ['natural greenhouse', 'natural green-house', 'greenhouse', 'green-house'],
          show: '(natural) green(-)house',
          explanation: '官方答案 (natural) green(-)house：Key 中 natural 为可选词，greenhouse 连写或加连字符均可。',
        },
        {
          q: "Andy's group were invited to the ____ for the tea tasting session.",
          answer: ['gallery'],
          show: 'gallery',
          explanation: '官方答案 gallery：他们被邀请到该处参加品茶环节。',
        },
        {
          q: 'Andy was surprised that, as well as the leaves, the tea pickers also picked the ____ of the plants.',
          answer: ['buds', 'bud'],
          show: 'bud(s)',
          explanation: '官方答案 bud(s)：Key 给出单复数两种形式。',
        },
        {
          q: 'On the elephant ride, Andy was able to see the ____ in the distance.',
          answer: ['mountains'],
          show: 'mountains',
          explanation: '官方答案 mountains：骑大象时他远望到了群山。',
        },
        {
          q: 'At the tea party, the ____ particularly impressed Andy.',
          answer: ['sandwiches'],
          show: 'sandwiches',
          explanation: '官方答案 sandwiches：茶会上三明治给他留下特别深的印象。',
        },
        {
          q: 'When going over a ____ , Andy nearly fell off his motorbike.',
          answer: ['stream'],
          show: 'stream',
          explanation: '官方答案 stream：骑摩托过溪流时他差点摔下来。',
        },
        {
          q: 'In the market, Andy was very surprised to see the ____ on sale.',
          answer: ['winter jackets'],
          show: 'winter jackets',
          explanation: '官方答案 winter jackets：市场上竟有冬季夹克出售，让他非常惊讶。',
        },
        {
          q: 'Andy was pleased with the price he paid for the ____ for his sister.',
          answer: ['nose ring', 'nose-ring'],
          show: 'nose(-)ring',
          explanation: '官方答案 nose(-)ring：Key 给出分写与加连字符两种形式。',
        },
        {
          q: "The ____ were Andy's favourite vegetables out of all those on display at the market.",
          answer: ['carrots'],
          show: 'carrots',
          explanation: '官方答案 carrots：胡萝卜是他在市场上最爱的蔬菜。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about work they did in shops. For questions 19–23, choose from the options (A–H) what each person says about their experience. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t4-p3.mp3',
      options: [
        { label: 'A', text: "My confidence was sometimes affected by customers' attitudes." },
        { label: 'B', text: 'I was pleased to discover that I had a good way with customers.' },
        { label: 'C', text: 'It made me appreciate the people I worked with.' },
        { label: 'D', text: "The training I received didn't equip me to do my job well." },
        { label: 'E', text: 'Customers were satisfied when they got a bargain.' },
        { label: 'F', text: "I wasn't happy with some of the products in the shop." },
        { label: 'G', text: 'It was motivating to sell more than the other assistants.' },
        { label: 'H', text: 'It exhausted me both physically and mentally.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: '官方答案 C：依据录音内容，这段经历让这位说话者更珍惜共事的同事。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，这份工作让这位说话者身心俱疲。' },
        { speaker: 'Speaker 3', answer: 'B', explanation: '官方答案 B：依据录音内容，这位说话者发现自己很会与顾客打交道。' },
        { speaker: 'Speaker 4', answer: 'F', explanation: '官方答案 F：依据录音内容，这位说话者对店里的部分商品不满意。' },
        { speaker: 'Speaker 5', answer: 'D', explanation: '官方答案 D：依据录音内容，这位说话者所受的培训不足以胜任工作。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with Marvin Benby, a beekeeper who keeps his bees in hives on a city rooftop. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t4-p4.mp3',
      items: [
        {
          q: 'What made Marvin get into beekeeping?',
          opts: [
            'He was persuaded to try it by a friend.',
            'A friend offered to teach him about it.',
            'He wanted to prove a friend wrong.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他想证明朋友的话是错的。',
        },
        {
          q: 'Marvin thinks the best part about keeping bees is',
          opts: [
            'helping to increase the bee population.',
            'the excitement of checking his beehives.',
            'having access to so much honey.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，检查蜂箱时的兴奋感是他最大的乐趣。',
        },
        {
          q: 'One of the difficulties for Marvin of city beekeeping is',
          opts: [
            'taking it personally when things go wrong.',
            'ensuring the bees get to a variety of flowers.',
            'getting hold of the most suitable equipment.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，出问题时他会往心里去。',
        },
        {
          q: 'Marvin says that one of his neighbours',
          opts: [
            'complained about being stung by a bee.',
            'insisted that Marvin moved his beehives.',
            'had concerns due to an allergy to bees.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，一位邻居因对蜜蜂过敏而担忧。',
        },
        {
          q: 'When Marvin set up his first beehive',
          opts: [
            'he became confused about what to do.',
            'he made some potentially dangerous mistakes.',
            'his bees became nervous and stressed.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他犯了一些可能有危险的错误。',
        },
        {
          q: 'What does Marvin say about selling bee-related products?',
          opts: [
            'He has started to make a profit.',
            'Local people are starting to buy them.',
            'It cost him a lot to get started.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，起步阶段花了他很多钱。',
        },
        {
          q: 'How does Marvin feel about the next few months?',
          opts: [
            'He has a mixture of contrasting feelings.',
            'He hopes to enjoy a more relaxed period.',
            'He is confident that he can manage.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他心情复杂、百感交集。',
        },
      ],
    },
  },
}
