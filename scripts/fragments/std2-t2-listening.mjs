// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 2 = 书内印 Test 6。Test 6 Listening: 书页 44–49（PDF 45–50），答案核对自 Test 6 Key（书 132–133 / PDF 133–134，Listening 区在书 133）
// 音频：/audio/fce/std2/std2-t2-p1.mp3 ~ std2-t2-p4.mp3（整 Part 一条；p1=CD1 Track07，p2=CD1 Track09，p3=CD1 Track10，p4=CD1 Track12）
// 注：Part 2 页面标题为 "Journalism Course"，原文空位为编号方框，按句序转为 ____；Part 1 Q5 题干为陈述式（选项续句），均按页面原样转录。

export default {
  meta: {
    id: 'fce-standard-2-test2-listening',
    title: 'FCE 标准版真题 2 · Test 2 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 44–49',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 6 Key（书 132–133 / PDF 133–134，Listening 区在书 133）',
    audioNote:
      '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    examKey: 'fce-standard-2-test2',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a psychologist talking about green spaces in cities.',
          q: 'What does she say about them?',
          opts: [
            'People fail to appreciate them as much as they should.',
            'They are more important for children than for adults.',
            'Few governments make them a priority.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她说人们对城市绿地的珍视程度不够。',
        },
        {
          scenario: 'You hear part of an interview with a singer.',
          q: 'What does he say about playing tennis?',
          opts: [
            'It calms him down after a performance.',
            'It is used by a lot of singers to improve their technique.',
            'It requires similar skills to singing.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他认为打网球与唱歌需要相似的技巧。',
        },
        {
          scenario: 'You hear an actor talking about how she met her husband.',
          q: 'How did she first meet him?',
          opts: [
            'She sat next to him in a cinema.',
            'She appeared in a play with him.',
            'A friend introduced them.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，两人是因同台演出一部戏而相识。',
        },
        {
          scenario: 'You hear two people talking about a bus service.',
          q: 'What does the man say about it?',
          opts: ['It is frequent.', 'It is cheap.', 'It is punctual.'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他夸这条公交线路准点。',
        },
        {
          scenario: 'You hear a retired ballerina comparing dancers today with dancers in the past.',
          q: 'She says professional ballet dancers today',
          opts: [
            'are less concerned about expressing emotion.',
            'are more interested in being celebrities.',
            'dance with less technical ability.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她认为如今的职业芭蕾舞者较不注重情感表达。',
        },
        {
          scenario: 'You hear a chef talking about making a TV series.',
          q: 'What does he say about it?',
          opts: [
            "He didn't expect to enjoy the experience so much.",
            "He didn't get on with his co-presenter.",
            "He didn't like the working hours.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他没想到拍电视系列节目会这么开心。',
        },
        {
          scenario: 'You hear two friends talking about an art course.',
          q: 'What do they agree about it?',
          opts: ['The teacher is inspiring.', 'The class is the right size.', 'The content is interesting.'],
          answer: 1,
          explanation: '官方答案为 B：两人一致认为这个艺术课的班级人数合适。',
        },
        {
          scenario: 'You hear a swimmer talking about a competition she took part in.',
          q: 'How does she feel about it?',
          opts: [
            'disappointed with her result',
            'excited about where it will lead',
            'surprised by the support she received',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，她对这次比赛带来的前景感到兴奋。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Sid Holmes talking about a journalism course he attended. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std2/std2-t2-p2.mp3',
      items: [
        {
          q: 'Sid did the same course in journalism that his ____ did.',
          answer: ['cousin'],
          show: 'cousin',
          explanation: '官方答案 cousin：依据录音内容，他的表亲上过同一门新闻课程。',
        },
        {
          q: 'On the first day, Sid had to do a reporting exercise about a man who was rescued from a ____ by helicopter.',
          answer: ['roof'],
          show: 'roof',
          explanation: '官方答案 roof：依据录音内容，报道练习讲的是男子被困屋顶获直升机救援。',
        },
        {
          q: 'An assistant editor from the ____ section of a local newspaper gave an interesting talk about being a journalist.',
          answer: ['sport', 'sports'],
          show: 'sport(s)',
          explanation: '官方答案 sport(s)：按 Key 记法单复数均可，sport / sports 均算对。',
        },
        {
          q: "Sid's main tutor had written a biography of a famous local ____ .",
          answer: ['singer'],
          show: 'singer',
          explanation: '官方答案 singer：依据录音内容，导师为当地一位著名歌手写过传记。',
        },
        {
          q: 'Sid had an idea for an article about a man who makes ____ for young people to borrow.',
          answer: ['violins'],
          show: 'violins',
          explanation: '官方答案 violins：依据录音内容，文章构思关于制琴师供年轻人借用的提琴。',
        },
        {
          q: "Sid's first article was published in a ____ soon after he wrote it.",
          answer: ['magazine'],
          show: 'magazine',
          explanation: '官方答案 magazine：依据录音内容，他的首篇文章写后不久登在一本杂志上。',
        },
        {
          q: 'Sid had to report on a council meeting about proposed improvements to the ____ in the town.',
          answer: ['museum'],
          show: 'museum',
          explanation: '官方答案 museum：依据录音内容，市政会议议题是改进镇上的博物馆。',
        },
        {
          q: "One aspect of the course Sid didn't enjoy was the ____ classes.",
          answer: ['typing'],
          show: 'typing',
          explanation: '官方答案 typing：依据录音内容，他不喜欢课程中的打字课。',
        },
        {
          q: 'Sid found it useful to chat to his classmates in the ____ at the college.',
          answer: ['canteen'],
          show: 'canteen',
          explanation: '官方答案 canteen：依据录音内容，在学院食堂与同学交流让他受益。',
        },
        {
          q: 'Sid now has a chance of getting a job at a ____ .',
          answer: ['radio station'],
          show: 'radio station',
          explanation: '官方答案 radio station：依据录音内容，他现在有机会进一家电台工作。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about collecting things as a hobby. For questions 19–23, choose from the list (A–H) why each speaker collects the things. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std2/std2-t2-p3.mp3',
      options: [
        { label: 'A', text: 'I enjoy the challenge.' },
        { label: 'B', text: 'It means I spend time with my family.' },
        { label: 'C', text: "It's a way of meeting interesting people." },
        { label: 'D', text: 'I want to help the local community.' },
        { label: 'E', text: 'I use my collection to teach other people.' },
        { label: 'F', text: "It's a financial investment." },
        { label: 'G', text: 'It connects me to the past.' },
        { label: 'H', text: 'I like to have beautiful things around me.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: '官方答案 C：依据录音内容，收藏让他结识有意思的人。' },
        { speaker: 'Speaker 2', answer: 'A', explanation: '官方答案 A：依据录音内容，他享受收藏带来的挑战。' },
        { speaker: 'Speaker 3', answer: 'G', explanation: '官方答案 G：依据录音内容，收藏让他与过去相连。' },
        { speaker: 'Speaker 4', answer: 'D', explanation: '官方答案 D：依据录音内容，他想借此帮助当地社区。' },
        { speaker: 'Speaker 5', answer: 'F', explanation: '官方答案 F：依据录音内容，他把收藏当作一种投资。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a scientist called Peter Crane, who is talking about an ancient tree called the gingko. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t2-p4.mp3',
      items: [
        {
          q: 'What first interested Peter about the gingko tree?',
          opts: ['how its leaves grow', 'the family it belongs to', "what's known about its history"],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，最初吸引他的是银杏的已知历史。',
        },
        {
          q: 'What does Peter say about the gingko tree in ancient China?',
          opts: [
            "It wasn't originally grown for its nuts.",
            "It wasn't common before people started growing it.",
            'It was one of the earliest plants to be grown there.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，银杏在人工种植之前并不常见。',
        },
        {
          q: 'When asked about the medicinal uses of gingko, Peter says',
          opts: [
            'researchers in different parts of the world disagree about it.',
            'scientists have failed to identify any positive effects.',
            'some parts of the plant help the brain to function.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，科学家未能证实银杏有任何积极疗效。',
        },
        {
          q: 'Why are there so many gingko trees in cities all over the world?',
          opts: [
            "They don't suffer from problems that usually affect trees there.",
            "Other trees can't survive if they are too close to the species.",
            'People take more trouble to look after them than other trees.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，银杏不受城市树木常见问题的困扰。',
        },
        {
          q: 'Peter says that street trees benefit people by providing',
          opts: ['some protection from the sun.', 'a reduction in traffic noise.', 'increased privacy.'],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，街道树木能为人们遮挡阳光。',
        },
        {
          q: 'Peter says people can help other species of plant to survive by',
          opts: [
            'leaving plants to grow in the wild.',
            'protecting them from plant-eating animals.',
            'growing them in many different places.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，把植物种到多处有利于物种存续。',
        },
        {
          q: "How does Peter's work influence the way he thinks about the world?",
          opts: [
            'It makes him feel concerned about the future of human beings.',
            'It reminds him that human beings are a relatively new species.',
            'It allows him to understand why human beings focus on the present.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，工作让他意识到人类是相对年轻的物种。',
        },
      ],
    },
  },
};
