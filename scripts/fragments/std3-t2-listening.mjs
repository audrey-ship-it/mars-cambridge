// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 44–49（PDF 46–51），答案核对自 Test 2 Key（Listening 区在书 133 / PDF 135）
// 音频：/audio/fce/std3/std3-t2-p1.mp3 ~ std3-t2-p4.mp3（整 Part 一条）
// 注：书 46 页 Part 2 印刷小标题为 "Working on a turtle conservation programme"（数据结构无对应字段，记录于此备查）。

export default {
  meta: {
    id: 'fce-standard-3-test2-listening',
    title: 'FCE 标准版真题 3 · Test 2',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 44–49',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 133 / PDF 135',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking about collecting old coins.',
          q: 'What pleases him most about his hobby?',
          opts: [
            'the satisfaction of aiming for a complete collection',
            'the idea that someone has used the coins in the past',
            'the thrill of searching for unusual coins for his collection',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，最让他高兴的是想到这些硬币过去被人使用过。',
        },
        {
          scenario: 'You hear a woman talking about playing the piano.',
          q: 'What does she say about learning to play the piano?',
          opts: [
            "It's important to find the right teacher.",
            'Everyone can play well if they try.',
            'It requires more discipline than other instruments.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她强调要找到合适的老师。',
        },
        {
          scenario: "You overhear a man and a woman talking in an art gallery about a boy's paintings.",
          q: 'What do they agree about the paintings?',
          opts: [
            'They show remarkable artistic maturity.',
            'The gallery is asking too much money for them.',
            "They probably weren't painted by the boy.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，两人都认为这些画显示出非凡的艺术成熟度。',
        },
        {
          scenario: 'You hear two students talking about a university chemistry lecturer.',
          q: 'What do they agree about the lecturer?',
          opts: [
            'She is good at explaining difficult concepts in lectures.',
            'She is tolerant towards students who hand work in late.',
            'She manages to make students feel enthusiastic about her subject.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，两人都认为她能让学生对学科产生热情。',
        },
        {
          scenario: 'You hear a woman talking to a work colleague about moving abroad for a new job.',
          q: 'What does the woman feel disappointed about?',
          opts: [
            'the inflexible attitude to the start date',
            'the lack of job security involved',
            'the relatively low status of the work',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她对入职日期上不容变通的态度感到失望。',
        },
        {
          scenario: 'You hear two friends talking about a job interview.',
          q: 'How does the woman feel now?',
          opts: [
            'surprised that the interview went well',
            'pleased to have impressed the interviewers',
            "relieved that she wasn't asked any difficult questions",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她为自己给面试官留下好印象而高兴。',
        },
        {
          scenario: 'You hear part of a radio programme.',
          q: 'What is the woman talking about?',
          opts: [
            'an environment group',
            'a nature course for school children',
            'a new walking route in the countryside',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她在介绍乡间一条新的徒步路线。',
        },
        {
          scenario: 'You hear a woman talking to her brother about his hair.',
          q: 'What is she doing?',
          opts: [
            'admitting she cut his hair badly',
            'teasing him about his haircut',
            'suggesting he grow his hair longer',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她建议他把头发留长一些。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called David Briggs giving a talk about his work as a volunteer on a turtle conservation programme in Western Australia. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t2-p2.mp3',
      items: [
        {
          q: 'David first found out about the turtle programme from his ____ .',
          answer: ['uncle'],
          show: 'uncle',
          explanation: '官方答案 uncle：他最早是从叔叔那里知道这个海龟保护项目的。',
        },
        {
          q: 'David chose to work at the ____ site because its location was more convenient.',
          answer: ['mainland', 'main land'],
          show: 'main(-)land',
          explanation: '官方答案 main(-)land：Key 给出连写与分写两种形式。',
        },
        {
          q: 'David thinks his interest in ____ helped him to get a place on the programme.',
          answer: ['marine science'],
          show: 'marine science',
          explanation: '官方答案 marine science：他对海洋科学的兴趣帮他获得了名额。',
        },
        {
          q: "David was surprised to find that the ability to ____ wasn't considered necessary.",
          answer: ['swim'],
          show: 'swim',
          explanation: '官方答案 swim：他惊讶地发现会游泳并不是必要条件。',
        },
        {
          q: 'Apart from the cost of ____ , everything essential was provided by the organisers.',
          answer: ['transport', 'the transport'],
          show: '(the) transport',
          explanation: '官方答案 (the) transport：Key 中 the 为可选词，只有交通费需自理。',
        },
        {
          q: "David's shifts took place during the ____ when the turtles could be checked on the beach.",
          answer: ['night'],
          show: 'night',
          explanation: '官方答案 night：轮班在夜间进行，以便查看海滩上的海龟。',
        },
        {
          q: 'David felt it was particularly important to be ____ when handling the turtles.',
          answer: ['gentle'],
          show: 'gentle',
          explanation: '官方答案 gentle：接触海龟时动作要特别轻柔。',
        },
        {
          q: "Unlike his fellow volunteers, David found the ____ didn't bother him.",
          answer: ['heat'],
          show: 'heat',
          explanation: '官方答案 heat：与其他志愿者不同，炎热并没有困扰他。',
        },
        {
          q: 'David said that tiredness could lead to a loss of ____ among the volunteers when they were collecting data.',
          answer: ['concentration'],
          show: 'concentration',
          explanation: '官方答案 concentration：疲劳会让志愿者收集数据时注意力下降。',
        },
        {
          q: 'David uses the name ____ to refer to the most experienced volunteers.',
          answer: ['returners'],
          show: 'returners',
          explanation: '官方答案 returners：他用这个词称呼经验最丰富的志愿者。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which writers give advice about writing comedy scripts for television. For questions 19–23, choose which piece of advice (A–H) each speaker gives. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t2-p3.mp3',
      options: [
        { label: 'A', text: 'Write about people who amuse you.' },
        { label: 'B', text: 'Team up with another writer.' },
        { label: 'C', text: 'Develop your characters well.' },
        { label: 'D', text: 'Rewrite your whole script several times.' },
        { label: 'E', text: 'Study comedy you like.' },
        { label: 'F', text: 'Listen to what other people say about your work.' },
        { label: 'G', text: 'Find your own way as a writer.' },
        { label: 'H', text: 'Let the audience in on the joke quickly.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: '官方答案 C：依据录音内容，这位编剧建议把角色塑造好。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，这位编剧建议让观众尽快领会笑点。' },
        { speaker: 'Speaker 3', answer: 'F', explanation: '官方答案 F：依据录音内容，这位编剧建议听取他人对作品的意见。' },
        { speaker: 'Speaker 4', answer: 'B', explanation: '官方答案 B：依据录音内容，这位编剧建议与其他作者合作。' },
        { speaker: 'Speaker 5', answer: 'E', explanation: '官方答案 E：依据录音内容，这位编剧建议研究自己喜欢的喜剧。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Maya Gardi, whose daily life and business are based on waste-free principles. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t2-p4.mp3',
      items: [
        {
          q: 'What did Maya find most difficult when she started shopping in a waste-free way?',
          opts: [
            'having to take more time over it',
            'having to avoid things in plastic containers',
            'having to remember to take her own bags',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，最难的是购物要花更多时间。',
        },
        {
          q: 'Maya decided to adopt a completely waste-free lifestyle when she',
          opts: [
            'saw an article online about plastic rubbish.',
            'noticed the bins outside her block of flats.',
            'visited her local waste facility.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她是在参观当地垃圾处理设施后下决心的。',
        },
        {
          q: "How did Maya's parents react to her decision to live waste-free?",
          opts: [
            'They were worried that she would regret it.',
            'They did not believe that she really meant it.',
            'They did not think that she was likely to succeed.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，父母不相信她是认真的。',
        },
        {
          q: "How have Maya's cooking and eating habits changed?",
          opts: [
            'She uses leftover food creatively.',
            'She cooks more often for her friends.',
            'She has developed her own cooking skills.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她开始有创意地利用剩菜。',
        },
        {
          q: 'What does Maya say about socialising?',
          opts: [
            'She sometimes has to forget her principles.',
            "She doesn't worry about what people think of her.",
            'She carefully chooses which events she attends.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她不在意别人怎么看她。',
        },
        {
          q: 'What does Maya say about her new business?',
          opts: [
            'She has an advantage when it comes to marketing.',
            'Sales are increasing faster than expected.',
            'She is expanding into a related sector.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她在营销方面有优势。',
        },
        {
          q: 'How did Maya feel about the radio work she did recently?',
          opts: [
            'nervous about taking part at the last minute',
            'pleased to have the chance to explain her views',
            'surprised that she was asked by a reporter',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她很高兴有机会阐述自己的观点。',
        },
      ],
    },
  },
}
