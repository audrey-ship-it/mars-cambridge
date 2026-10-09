// Source: B2 FIRST 4 FOR SCHOOLS.pdf
// Listening: Test 2（Part 1 Q1-4 书42、Q5-8 书43；Part 2 书44；Part 3 书45；Part 4 Q24-28 书46、Q29-30 书47）
// 音频：/audio/fce/school4/school4-t2-p1.mp3 ~ school4-t2-p4.mp3（整 Part 一条）
// 答案：用户提供（已核对；P4 Q26 修正为 28B）

export default {
  examId: 'fce-schools-4-test2-listening',
  examKey: 'fce-schools-4-test2',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 4,
    test: 2,
    paper: 'listening',
    pages: '书42–47',
    source: 'B2 FIRST 4 FOR SCHOOLS.pdf',
    answerSource: '用户提供',
    verified: false,
    audio: '/audio/fce/school4/school4-t2-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school4/school4-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a girl telling a friend about a family trip she went on to a climbing centre.',
          q: 'What does she feel about the trip now?',
          opts: [
            'She regrets not taking part in more activities.',
            'She wishes it hadn\'t become so competitive.',
            'She realises they should have researched it better.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a teacher talking to her class about a visit to a science exhibition.',
          q: 'What does she recommend they do during the visit?',
          opts: [
            'refer to material they\'ll be taking with them',
            'prepare to do homework based on their observations',
            'select demonstrations related to their course',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two students discussing a film they saw on TV.',
          q: 'What do the students agree about?',
          opts: [
            'The actors suited the roles they played.',
            'The plot had some unexpected developments.',
            'The director made some unusual choices.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a woman talking about her work as a fashion designer.',
          q: 'What is she doing?',
          opts: [
            'describing how her attitude to clothes changed when she was younger',
            'criticising people whose taste in clothes is different from hers',
            'explaining how her ideas about clothes developed',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a student talking about a project he has done on bees.',
          q: 'What is unusual about the bees he is describing?',
          opts: [
            'The way they find food.',
            'The conditions in which they survive.',
            'The fact they build their nests underground.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a girl talking about giving up social media for two weeks.',
          q: 'What does she say about her experience?',
          opts: [
            'It had some rather unexpected results.',
            'It turned out to be impossible for her to do.',
            'It was hard to deal with other people\'s reactions.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a teacher telling his students about some research into learning and memory.',
          q: 'What was the result of the research?',
          opts: [
            'Music can negatively affect the ability to remember words and images.',
            'Associating words with images can aid memory.',
            'Images aren\'t as easy to recall as words.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a girl talking about the choir she sings in.',
          q: 'What did the choir appreciate about a recent event?',
          opts: [
            'singing inside a historic building',
            'getting singing lessons from an expert',
            'performing with professional singers',
          ],
          answer: 2,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a girl called Kelly talking about an activity called potholing, which involves exploring underground caves. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school4/school4-t2-p2.mp3',
      notes: 'Potholing',
      items: [
        {
          q: 'Kelly\'s uncle started exploring caves because he is interested in (9) ________.',
          answer: "extreme sports",
        },
        {
          q: "Kelly's first experience of potholing was to a local cave called (10) ________.",
          answer: "Deep Drop",
        },
        {
          q: 'Kelly was very pleased to see (11) ________ inside the first cave she explored.',
          answer: "small rivers",
        },
        {
          q: 'Kelly had a problem with her (12) ________ the first time she went into a cave.',
          answer: "torch",
        },
        {
          q: 'In her first cave, Kelly noticed some rocks that reminded her of a (13) ________.',
          answer: "dinosaur",
        },
        {
          q: "On her first expedition, Kelly complained that her (14) ________ was painful.",
          answer: "back",
        },
        {
          q: 'Kelly says that professional people who explore caves particularly worry about (15) ________.',
          answer: "flooding",
        },
        {
          q: 'Kelly says that a (16) ________ is the most important piece of equipment to take underground.',
          answer: "safety kit",
        },
        {
          q: "On Kelly's second trip, her biggest challenge was managing to get through a (17) ________.",
          answer: "narrow entrance",
        },
        {
          q: "Kelly's most memorable experience was seeing some (18) ________ lighting up a cave she was exploring.",
          answer: "tiny insects",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about a journey they recently went on. For questions 19–23, choose from the list (A–H) what each speaker says about the experience. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school4/school4-t2-p3.mp3',
      options: [
        { label: 'A', text: 'It was more comfortable than I thought it would be.' },
        { label: 'B', text: "Meeting someone took my mind off my problems." },
        { label: 'C', text: 'A careless mistake almost meant that the trip didn\'t go ahead.' },
        { label: 'D', text: 'I was glad I ignored some advice I was given.' },
        { label: 'E', text: 'There was an unexpected long-term consequence.' },
        { label: 'F', text: 'I had the opportunity to use a skill.' },
        { label: 'G', text: 'It was satisfying to help a travelling companion.' },
        { label: 'H', text: 'I regretted leaving something at home.' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'H' },
        { speaker: 'Speaker 2' , answer: 'F' },
        { speaker: 'Speaker 3' , answer: 'C' },
        { speaker: 'Speaker 4' , answer: 'E' },
        { speaker: 'Speaker 5' , answer: 'B' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a school student from Scotland, called Jake Dawson, who is talking about cycling in the snow in a town in Finland. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school4/school4-t2-p4.mp3',
      items: [
        {
          q: 'What similarity did Jake notice between his hometown and the town in Finland?',
          opts: [
            'the attractiveness of the architecture',
            'the quality of the light in winter',
            'the liveliness of the streets',
          ],
          answer: 0,
        },
        {
          q: 'The weather in Finland made Jake realise that in Scotland',
          opts: [
            "he hadn't gone out in winter as much as he should have done.",
            'he had spent too much time inside a car in winter.',
            "he hadn't appreciated how beautiful winter could be.",
          ],
          answer: 2,
        },
        {
          q: 'Jake says people in Scotland don\'t cycle much in the snow because',
          opts: [
            'they think it\'s too cold.',
            "they don't have the right equipment.",
            'the conditions on the roads are too dangerous.',
          ],
          answer: 0,
        },
        {
          q: 'What did Jake like about cycling in the snow in the Finnish town?',
          opts: [
            'Underpasses enabled cyclists to avoid busy junctions.',
            'Motorists showed respect to cyclists.',
            'Cycle paths were kept clear of snow.',
          ],
          answer: 2,
        },
        {
          q: 'What does Jake say about his experience of cycling across a frozen river?',
          opts: [
            'He was keen to take advantage of a unique opportunity.',
            'He lost his nerve before reaching the other side.',
            'He felt relieved to be doing it with his cousin.',
          ],
          answer: 1,
        },
        {
          q: 'What happened to Jake on one occasion while cycling in the snow?',
          opts: [
            'He missed a road sign and lost his way.',
            'He made a mistake and hit another cyclist.',
            'He became overconfident and fell off his bike.',
          ],
          answer: 2,
        },
        {
          q: 'Jake decided that when he got back to Scotland, he would',
          opts: [
            'buy himself a better quality bike.',
            "use the cycling techniques he'd learned.",
            'persuade his friends to take up cycling.',
          ],
          answer: 1,
        },
      ],
    },
  },
}
