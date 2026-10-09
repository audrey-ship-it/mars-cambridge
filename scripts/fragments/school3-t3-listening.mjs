// Source: FIRST3  青少版.pdf
// Listening: Test 3（Part 1 Q1-4 书页66，Q5-8 书页67；Part 2 书页68；Part 3 书页69；Part 4 Q24-28 书页70、Q29-30 书页71）
// 音频：/audio/fce/school3/school3-t3-p1.mp3 ~ school3-t3-p4.mp3（整 Part 一条）
// 答案：书145 Key（已核对）

export default {
  examId: 'fce-schools-3-test3-listening',
  examKey: 'fce-schools-3-test3',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 3,
    paper: 'listening',
    pages: '书66–71',
    source: 'FIRST3  青少版.pdf',
    answerSource: '书145 Key',
    verified: false,
    audio: '/audio/fce/school3/school3-t3-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school3/school3-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear part of an interview with a tennis player after a match.',
          q: 'How does she feel?',
          opts: [
            'disappointed to have been injured',
            "grateful for the help she's received",
            "impressed by her opponent's performance",
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two friends talking about a comedy show they went to see.',
          q: 'What do they agree about?',
          opts: [
            'how unsuitable the venue was',
            'how enthusiastic the audience was',
            "how original the comedian's humour was",
          ],
          answer: 1,
        },
        {
          scenario: 'You hear part of a radio phone-in programme about cycling in cities.',
          q: 'What is the caller doing?',
          opts: [
            'criticising the lack of cycling facilities',
            'encouraging people to take up cycling',
            'complaining about the way cyclists behave',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends discussing an article about junk food.',
          q: 'What does the girl suggest about it?',
          opts: [
            "It won't appeal to many people she knows.",
            'It contains information that is inaccurate.',
            'It is unlikely to affect the way she lives.',
          ],
          answer: 0,
        },
        {
          scenario:
            'You hear a teacher talking about a large picture her students are painting to be displayed.',
          q: 'Why does the teacher want her students to paint the picture?',
          opts: [
            'to improve their ability to work as a team',
            'to make them aware of art in the area',
            'to encourage them to think creatively',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a boy telling a friend about a trip he went on with his father.',
          q: 'What does he say about it?',
          opts: [
            "He appreciated his father's attempts to please him.",
            "He was confident of his father's ability to organise things.",
            "He admired his father's knowledge of other places.",
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a girl talking about a science experiment at her school.',
          q: 'She says that the experiment',
          opts: [
            "didn't work as well as intended.",
            'had an unexpected consequence.',
            'demonstrated an important scientific principle.',
          ],
          answer: 1,
        },
        {
          scenario:
            'You hear two friends discussing an experiment into the effects of spending time in space.',
          q: 'What do they both think about it?',
          opts: [
            "They're interested to learn more.",
            "They admire the participants' courage.",
            "They'd be reluctant to do something similar.",
          ],
          answer: 0,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear an interview with a boy called Luke Tyler, who took part in a desert marathon race. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school3/school3-t3-p2.mp3',
      notes: 'Desert marathon race',
      items: [
        {
          q: 'The ____ for competitors are the same each year.',
          answer: "rules",
        },
        {
          q: "In his backpack, Luke made sure he put a ____ that didn't weigh very much.",
          answer: "sleeping bag/sleeping-bag",
        },
        {
          q: 'When getting ready for the race, Luke thinks that his ____ helped him more than anything else.',
          answer: "attitude",
        },
        {
          q: 'Before the race, Luke was nervous about the danger of ____ in the desert.',
          answer: "sandstorms/sand storms",
        },
        {
          q: 'Luke thinks he should have eaten more ____ during the marathon.',
          answer: "dried fruit/dried fruits",
        },
        {
          q: 'The runners stopped at places known as ____ where they could have a short rest.',
          answer: "checkpoints/check points",
        },
        {
          q: 'Luke is pleased that he chose the right sort of ____ for the race.',
          answer: "sunglasses/sun-glasses",
        },
        {
          q: 'Luke says the ____ were the most memorable things he saw in the desert.',
          answer: "sunsets",
        },
        {
          q: "Luke threw away some ____ which were items he didn't need.",
          answer: "clothes/extra clothes",
        },
        {
          q: 'Luke mentions that there were ____ which carried some larger items needed for overnight stops.',
          answer: "camels",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        "You will hear five short extracts in which teenagers are talking about what's called a survival course, where they learnt the skills you need to live in a forest. For questions 19–23, choose from the list (A–H) how each speaker felt during the course. Use the letters only once. There are three extra letters which you do not need to use.",
      audio: '/audio/fce/school3/school3-t3-p3.mp3',
      options: [
        { label: 'A', text: "irritated by other students' behaviour" },
        { label: 'B', text: 'concerned about the possibility of falling ill' },
        { label: 'C', text: 'enthusiastic about working in a team' },
        { label: 'D', text: 'frustrated by the time it took to do something' },
        { label: 'E', text: "impressed by someone's ability" },
        { label: 'F', text: 'disappointed to miss out on something' },
        { label: 'G', text: 'grateful for the opportunity to do something unusual' },
        { label: 'H', text: 'surprised by how challenging some of the tasks were' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'F' },
        { speaker: 'Speaker 2' , answer: 'B' },
        { speaker: 'Speaker 3' , answer: 'E' },
        { speaker: 'Speaker 4' , answer: 'D' },
        { speaker: 'Speaker 5' , answer: 'G' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a man called Danny Taylor, who is a record producer with his own recording studio. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school3/school3-t3-p4.mp3',
      items: [
        {
          q: 'Why did Danny decide to start his recording studio?',
          opts: [
            'He had difficulty finding a job in the music industry.',
            'He was keen to work with a variety of musicians.',
            'He wanted to record more of his own music.',
          ],
          answer: 2,
        },
        {
          q: "When asked about the way his studio has developed, Danny says he's",
          opts: [
            "proud of the reputation he's built up.",
            'relieved that his business has kept going so long.',
            'frustrated about having to do certain kinds of work.',
          ],
          answer: 2,
        },
        {
          q: 'What does Danny say about the location of his studio?',
          opts: [
            'It differs from many other studios.',
            'It affects the style of music made there.',
            'It puts off younger bands and musicians.',
          ],
          answer: 0,
        },
        {
          q: 'What does Danny say about the behaviour of bands he works with?',
          opts: [
            'The way they interact is not reflected in their music.',
            'The stress involved in recording often leads to arguments.',
            'The image presented in the media is usually misleading.',
          ],
          answer: 1,
        },
        {
          q: 'What does Danny find hardest about his work?',
          opts: [
            'criticising musicians who lack talent',
            'deciding which bands he wants to work with',
            'dealing with the demands of well-known musicians',
          ],
          answer: 0,
        },
        {
          q: 'What does Danny think is his greatest strength as a music producer?',
          opts: [
            'his skill at helping inexperienced musicians improve',
            'his ability to make a song sound original',
            'his awareness of what will sell well',
          ],
          answer: 1,
        },
        {
          q: 'What advice does Danny offer people interested in becoming music producers?',
          opts: [
            'Remember that music production requires a great deal of commitment.',
            'Keep up-to-date with the latest music production technology.',
            'Find a course with links to the music industry.',
          ],
          answer: 0,
        },
      ],
    },
  },
}
