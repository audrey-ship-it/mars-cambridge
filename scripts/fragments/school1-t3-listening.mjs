// Source: Cambridge First Certificate English Tests for schools 1.PDF
// Listening: 书页 66–71（Part 1 Q1-4 位于书66，Q5-8 位于书67；Part 2 书68；Part 3 书69；Part 4 Q24-28 书70、Q29-30 书71）
// 音频：/audio/fce/school1/school1-t3-p1.mp3 ~ school1-t3-p4.mp3（整 Part 一条）
// 答案：未转录，待核对（answerSource: 书145 Key）

export default {
  examId: 'fce-schools-1-test3-listening',
  examKey: 'fce-schools-1-test3',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 3,
    paper: 'listening',
    pages: '书66–71',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '书145 Key',
    verified: false,
    audio: '/audio/fce/school1/school1-t3-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school1/school1-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear a girl who is going to live in another country talking to a friend.',
          q: 'They agree that it will be',
          opts: [
            'exciting to live in a new place.',
            'easy to make new friends.',
            'simple to keep in touch.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear part of a science programme about a planned space mission to the moons of Jupiter.',
          q: 'Why does the presenter regard them as a good place to explore?',
          opts: [
            'Something could be living there.',
            "There's a lot of volcanic activity there.",
            "It will show how far it's possible to travel.",
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a girl telling her father about a writer who visited her school.',
          q: 'What did she think about the writer?',
          opts: [
            'She was pleased to meet him because she enjoys his books.',
            "She was surprised to find out how many books he's written.",
            'She was interested to learn about what inspires him.',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear part of an interview with a girl who is talking about some wolves she saw.',
          q: 'How did the girl feel when she saw the second wolf?',
          opts: [
            'less afraid than she would have expected',
            'sorry that she was unable to photograph it',
            'grateful that she lives in such an exciting place',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a young racing driver talking on the radio.',
          q: "What is the speaker's main purpose?",
          opts: [
            'to outline the advantages and disadvantages of his sport',
            'to explain what it takes to be a successful racing driver',
            'to inform listeners about his own background in racing',
          ],
          answer: 2,
        },
        {
          scenario: 'You overhear a boy talking about a football competition he has been in.',
          q: 'How does he feel?',
          opts: [
            'exhausted because of the pressure',
            'enthusiastic at getting so far',
            "upset because his team didn't win",
          ],
          answer: 1,
        },
        {
          scenario: 'You overhear a girl talking about a club she has recently started going to.',
          q: 'What does she say about it?',
          opts: [
            "It's not what she expected.",
            "She doesn't enjoy everything about it.",
            'She has learnt a lot since joining.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a teacher talking to her class about some homework they did.',
          q: 'What do the class need to do better in future assignments?',
          opts: [
            'organise their work clearly',
            'label visuals appropriately',
            'check their work carefully',
          ],
          answer: 2,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        "You will hear a student called Emily giving a class presentation about a whale watching trip she went on with her family. For questions 9–18, complete the sentences with a word or short phrase.",
      audio: '/audio/fce/school1/school1-t3-p2.mp3',
      notes: 'Whale watching',
      items: [
        {
          q: "The guide on Emily's trip spends most of his time working as a ____ .",
          answer: ["lecturer","university lecturer"],
        },
        {
          q: 'At first, Emily found it difficult to tell the difference between a ____ and a whale.',
          answer: ["wave"],
        },
        {
          q: 'Emily says that the guides used a ____ to communicate with each other.',
          answer: ["radio"],
        },
        {
          q: 'The fact that many whales have no ____ was one thing that surprised Emily.',
          answer: ["teeth"],
        },
        {
          q: "It's possible to find out the age of a whale by looking at something inside its ____ .",
          answer: ["ear","ears"],
        },
        {
          q: 'Emily thought that the ____ of the first whale she saw was an unusual colour.',
          answer: ["tail"],
        },
        {
          q: 'Emily says that the large whale she saw was similar to a ____ in shape.',
          answer: ["submarine"],
        },
        {
          q: 'To protect the whales, boats have to stay more than ____ metres away from them.',
          answer: ["50","fifty"],
        },
        {
          q: 'Emily advises anyone who goes whale watching to take a ____ with them.',
          answer: ["raincoat","rain coat"],
        },
        {
          q: 'Emily and her family were lucky enough to see ____ near the coast.',
          answer: ["eagles","eagles flying"],
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about a new video game. For questions 19–23, choose from the list (A–H) the opinion each speaker expresses. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school1/school1-t3-p3.mp3',
      options: [
        { label: 'A', text: "It's less exciting than a previous version of the same game." },
        { label: 'B', text: 'The special effects were what made me interested in it.' },
        { label: 'C', text: 'The pace of it is rather slow.' },
        { label: 'D', text: 'It gives players some interesting choices to make.' },
        { label: 'E', text: "At first, it's difficult to understand what you have to do." },
        { label: 'F', text: "It's likely to appeal to a different age group." },
        { label: 'G', text: 'The later levels introduce some unusual elements.' },
        { label: 'H', text: "My friend's better at it than I am." },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'B' },
        { speaker: 'Speaker 2' , answer: 'F' },
        { speaker: 'Speaker 3' , answer: 'H' },
        { speaker: 'Speaker 4' , answer: 'D' },
        { speaker: 'Speaker 5' , answer: 'E' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with Jack Herbert, a talented young pianist. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school1/school1-t3-p4.mp3',
      items: [
        {
          q: 'When Jack was a child, his grandmother',
          opts: [
            'gave him his first lessons on the piano.',
            'sometimes disagreed with his piano teacher.',
            'helped him when he found learning the piano difficult.',
          ],
          answer: 2,
        },
        {
          q: 'What does Jack say about other members of his family?',
          opts: [
            'His brother no longer performs in public.',
            'His parents have both played professionally.',
            'His sister makes her living as a musician.',
          ],
          answer: 0,
        },
        {
          q: 'How did Jack feel during his time at the National Music School?',
          opts: [
            'pleased to have the opportunity to be there',
            "worried that he wouldn't live up to expectations",
            "frustrated that he couldn't choose which pieces to play",
          ],
          answer: 1,
        },
        {
          q: "What is Jack's attitude to practising?",
          opts: [
            "He doesn't take it as seriously as he used to.",
            'He feels it\'s essential for good performance.',
            "He wishes he didn't have to do so much of it.",
          ],
          answer: 1,
        },
        {
          q: "When he's performing in a live concert, Jack aims to",
          opts: [
            'interpret the music in his own way.',
            'share his enjoyment of the music with others.',
            "play the music better than he's ever done before.",
          ],
          answer: 1,
        },
        {
          q: "Jack thinks that he's different to other pianists of his age because",
          opts: [
            'he plays a wider range of musical styles.',
            'he brings classical music up to date.',
            'he appeals to a young audience.',
          ],
          answer: 0,
        },
        {
          q: 'What does Jack plan to do in the future?',
          opts: [
            'travel more widely',
            'compose more of his own music',
            'enter big music competitions',
          ],
          answer: 2,
        },
      ],
    },
  },
}
