// Source: Cambridge English First 1（标准版1）cen_first_1_with_answers .pdf（用户原件扫描版）
// Test 1 Listening: 书页 22–27（PDF 21–26），答案核对自 Test 1 Key（Reading 在书 120 / PDF 119，Listening 在书 121 / PDF 120）
// 音频：/audio/fce/std1/std1-t1-p1.mp3 ~ std1-t1-p4.mp3（整 Part 一条）
// 注：书 23 页 Q5 印刷原文即为 "You overhear a women talking..."（原书笔误，按页面视觉转录原样保留）。

export default {
  meta: {
    id: 'fce-standard-1-test1-listening',
    title: 'FCE 标准版真题 1 · Test 1 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 1 Key（书 120–121 / PDF 119–120，Listening 区在书 121）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std1/std1-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking on her mobile phone about a missing piece of furniture.',
          q: 'How does she feel?',
          opts: ['irritated with the removals company', "unsure what's happened", 'anxious to find it quickly'],
          answer: 1,
          explanation: "官方答案为 B：她并不清楚家具到底出了什么事（unsure what's happened）。",
        },
        {
          scenario: 'You hear two students talking about their current course topic.',
          q: 'What do they agree about?',
          opts: ['how boring it is', 'how difficult it is', 'how relevant it is'],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，两人一致认为当前课程话题难度大。',
        },
        {
          scenario: 'You hear two business people talking about a contract.',
          q: 'How does the man feel now?',
          opts: [
            'frustrated because of the time wasted',
            'surprised about the cancellation of the contract',
            "sympathetic towards the other company's problems",
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，男方对对方公司的难处表示理解同情。',
        },
        {
          scenario: "You hear an artist telling a friend about an art prize he's just won.",
          q: 'What is he doing?',
          opts: [
            'expressing surprise',
            "admitting that he's excited",
            'explaining why he thinks he was chosen',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他承认自己得奖后心情兴奋。',
        },
        {
          scenario: 'You overhear a women talking to a friend on her mobile phone.',
          q: 'Why is she phoning?',
          opts: ['to explain a delay', 'to change some plans', 'to make an arrangement'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，这通电话是为了和朋友敲定某个安排。',
        },
        {
          scenario: 'You hear a guitarist talking about his profession.',
          q: 'What is the purpose of his talk?',
          opts: [
            'to warn about the challenges of becoming a musician',
            'to give step-by-step guidance on setting up a band',
            'to emphasise the importance of having loyal fans',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他旨在提醒听众入行当乐手会遇到的种种挑战。',
        },
        {
          scenario: 'You hear a woman talking to a sales assistant.',
          q: "Why can't she have a refund for her trainers?",
          opts: [
            'The receipt is wrong.',
            'She is not in the right shop.',
            'The trainers are no longer new.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，退款被拒与她来错了门店有关。',
        },
        {
          scenario: 'You hear a woman talking about a radio chat show.',
          q: 'What does she like about the show?',
          opts: [
            'The presenter makes her laugh.',
            'Information is given in an interesting way.',
            'Guests reveal quite a lot about themselves.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她欣赏节目传递信息的方式生动有趣。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a photographer called Ian Gerrard talking about his career. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std1/std1-t1-p2.mp3',
      items: [
        {
          q: 'The subject that Ian studied at university was ____ .',
          answer: ['geography'],
          show: 'geography',
          explanation: '官方答案 geography：依据录音内容，他在大学所学的科目是地理。',
        },
        {
          q: 'Ian did a presentation on ____ as part of his final year.',
          answer: ['street markets', 'markets'],
          show: '(street) markets',
          explanation: '官方答案 (street) markets：Key 中 street 为可选词，两种写法均算对。',
        },
        {
          q: 'Ian worked for a ____ in the USA for a year after leaving university.',
          answer: ['magazine'],
          show: 'magazine',
          explanation: '官方答案 magazine：依据录音内容，他毕业后在美国一家杂志社工作了一年。',
        },
        {
          q: 'When he travelled around the USA, Ian chose ____ as the theme for his photographs.',
          answer: ['horses'],
          show: 'horses',
          explanation: '官方答案 horses：依据录音内容，他游历美国时以马为拍摄主题。',
        },
        {
          q: 'Ian says that ____ is the season when he takes the best photographs.',
          answer: ['winter'],
          show: 'winter',
          explanation: '官方答案 winter：依据录音内容，冬季是他拍出最佳照片的季节。',
        },
        {
          q: 'When Ian came back to Britain, he travelled around by ____ taking photographs.',
          answer: ['motorbike', 'motor-bike'],
          show: 'motor(-)bike',
          explanation: '官方答案 motor(-)bike：按 Key 记法连字符可省略，motorbike / motor-bike 均算对。',
        },
        {
          q: 'Ian says he was surprised by how few photographers specialise in shots of ____ communities.',
          answer: ['fishing'],
          show: 'fishing',
          explanation: '官方答案 fishing：依据录音内容，专注拍摄渔业社区题材的摄影师很少。',
        },
        {
          q: "Ian's book will be available in bookshops in ____ next year.",
          answer: ['March'],
          show: 'March',
          explanation: '官方答案 March：依据录音内容，他的书明年三月上市。',
        },
        {
          q: "The title of Ian's book is ' ____ '.",
          answer: ['Images'],
          show: 'Images',
          explanation: '官方答案 Images：书名首字母大写。',
        },
        {
          q: 'Ian has chosen ____ as the theme for his next tour.',
          answer: ['farming'],
          show: 'farming',
          explanation: '官方答案 farming：依据录音内容，他下次巡展选择农耕为主题。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about the benefits of learning another language. For questions 19–23, choose which benefit (A–H) each speaker has experienced. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std1/std1-t1-p3.mp3',
      options: [
        { label: 'A', text: 'It has boosted my intellectual abilities.' },
        { label: 'B', text: 'It has improved my chances in education.' },
        { label: 'C', text: 'It has made me sensitive to global issues.' },
        { label: 'D', text: 'It has allowed me to gain faster promotion.' },
        { label: 'E', text: 'It has made getting around in other countries easier.' },
        { label: 'F', text: 'It has allowed me to help other people.' },
        { label: 'G', text: 'It has advanced my awareness of the way language works.' },
        { label: 'H', text: 'It has helped me make friends.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: '官方答案 E：依据录音内容，学习另一门语言让他在异国出行更方便。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，语言学习帮他结交了朋友。' },
        { speaker: 'Speaker 3', answer: 'B', explanation: '官方答案 B：依据录音内容，语言能力改善了他的升学机会。' },
        { speaker: 'Speaker 4', answer: 'G', explanation: '官方答案 G：依据录音内容，他对语言的运作方式有了更深认识。' },
        { speaker: 'Speaker 5', answer: 'D', explanation: '官方答案 D：依据录音内容，语言能力让他晋升更快。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Patricia Jones, who is a naturalist. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std1/std1-t1-p4.mp3',
      items: [
        {
          q: 'Looking back at her work, Patricia feels',
          opts: [
            'surprised that her projects still attract volunteers.',
            "proud of the wide influence she's had.",
            "pleased by how she's regarded in Africa.",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，回顾以往工作，她以影响之广为傲。',
        },
        {
          q: 'How does Patricia spend her time nowadays?',
          opts: [
            'persuading people to alter their behaviour',
            'advising governments on conservation',
            'studying wildlife in its natural habitat',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她如今致力于劝说人们改变行为方式。',
        },
        {
          q: 'How does Patricia feel about zoos?',
          opts: [
            'They all ought to be closed down.',
            'They should have an educational purpose.',
            'They still have a role to play in conservation.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她认为动物园在物种保护上仍有作用。',
        },
        {
          q: 'In her new book, Patricia hopes to give',
          opts: [
            'encouragement to young scientists.',
            'advice on helping endangered animals.',
            'guidance to other environmentalists.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，新书意在鼓励年轻科学家。',
        },
        {
          q: 'Patricia believes that children should spend time in the natural world because',
          opts: [
            'it is the only way to find out about it.',
            'it is essential for their development.',
            'it is a chance to change their view of animals.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，亲近自然对孩子的成长必不可少。',
        },
        {
          q: 'The organisation called In Touch encourages young people to',
          opts: [
            'be tolerant of each other.',
            'actively work for change.',
            'talk about their problems.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，该组织鼓励年轻人积极行动、推动改变。',
        },
        {
          q: 'What does Patricia particularly want to do next?',
          opts: [
            'to help girls who want to be scientists',
            'to get scientists to be more responsible',
            "to change people's attitudes to science",
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她接下来最想改变人们对科学的态度。',
        },
      ],
    },
  },
};
