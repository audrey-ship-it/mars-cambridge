// Source: Cambridge First Certificate English Tests for schools 1.PDF
// Listening: 书页 44–49（Part 1 Q1-4 位于书44，Q5-8 位于书45；Part 2 书46；Part 3 书47；Part 4 Q24-28 书48、Q29-30 书49）
// 音频：/audio/fce/school1/school1-t2-p1.mp3 ~ school1-t2-p4.mp3（整 Part 一条）
// 答案：未转录，待核对（answerSource: 书133 Key）

export default {
  examId: 'fce-schools-1-test2-listening',
  examKey: 'fce-schools-1-test2',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 2,
    paper: 'listening',
    pages: '书44–49',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '书133 Key',
    verified: false,
    audio: '/audio/fce/school1/school1-t2-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school1/school1-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a teacher talking to some students.',
          q: 'What is he doing?',
          opts: [
            'explaining the benefits of walking holidays',
            'emphasising the natural beauty of some places',
            'describing the difference between two areas',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear two friends talking about a bike race they went on.',
          q: 'What does the girl say about it?',
          opts: [
            'She was disappointed with her speed.',
            'She found it more difficult than expected.',
            'She almost gave up before the finish.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a man and his daughter talking in a library.',
          q: 'What is the man doing?',
          opts: [
            'recommending a book for his daughter to read',
            "complaining about his daughter's reading habits",
            'promising to help his daughter to choose a book',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends talking about a television programme about polar bears.',
          q: 'What do they both think was unusual about it?',
          opts: [
            'the information given in it',
            'the location chosen for it',
            'the skill involved in filming it',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a teacher talking to a class.',
          q: 'What does she want her students to do this week?',
          opts: [
            'bring some items to school',
            'find out some information',
            'make something at home',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two friends talking about a story-writing competition.',
          q: 'They agree that they will',
          opts: [
            'each write a story and go in for it.',
            'share the prize if one of them wins it.',
            'visit a zoo together to get ideas for it.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a radio announcement about an event.',
          q: 'What is the aim of the event?',
          opts: [
            'to encourage young people to get involved in science',
            "to raise city residents' awareness of unusual wildlife",
            'to find out about trends in animal numbers',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a review of a computer game on the radio.',
          q: 'What does the reviewer think of the game?',
          opts: [
            'It is surprisingly different from other adventure games.',
            'It is likely to have a very broad appeal to computer gamers.',
            'It is only suitable for people experienced in this type of game.',
          ],
          answer: 2,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a girl called Kate giving a class presentation on the subject of chocolate. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school1/school1-t2-p2.mp3',
      notes: 'Chocolate',
      items: [
        {
          q: 'Hundreds of years ago, people known as the Mayans added hot peppers and ____ to cocoa beans to make the first chocolate drink.',
          answer: ["honey"],
        },
        {
          q: 'Kate explains that ancient Mayan people started growing cocoa trees in ____ as chocolate became popular in their culture.',
          answer: ["gardens"],
        },
        {
          q: 'The Aztecs used cocoa beans rather than ____ to settle their debts.',
          answer: ["gold"],
        },
        {
          q: 'Kate mentions that Spanish explorers brought the ____ to Europe before the cocoa bean.',
          answer: ["tomato"],
        },
        {
          q: "In the 17th century, the ____ was introduced to protect people's clothes when they drank chocolate.",
          answer: ["saucer"],
        },
        {
          q: 'In 1795, an English company called J. Fry and Sons invented a machine driven by ____ which was used to grind the cocoa beans.',
          answer: ["steam power","steampower","steam"],
        },
        {
          q: 'A special machine for making solid chocolate called a ____ was developed in 1828.',
          answer: ["chocolate press","press"],
        },
        {
          q: 'In 1847, chocolate ____ began to be produced by an English company.',
          answer: ["bars"],
        },
        {
          q: 'In 1875, a man from Switzerland called Daniel Peter added ____ to chocolate.',
          answer: ["milk"],
        },
        {
          q: "Recent research shows that chocolate can improve people's ____ .",
          answer: ["mood","moods"],
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about a family day out at an activity centre. For questions 19–23, choose from the list (A–H) what each speaker says about the place they went to. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school1/school1-t2-p3.mp3',
      options: [
        { label: 'A', text: 'I bought something useful at the shop.' },
        { label: 'B', text: "I've been given a good reason to go back regularly." },
        { label: 'C', text: 'I enjoy the idea of being independent of my parents.' },
        { label: 'D', text: "I didn't need to take advantage of the help that was available." },
        { label: 'E', text: "I was able to practise a skill I've been learning elsewhere." },
        { label: 'F', text: "I didn't manage to do everything I wanted to do." },
        { label: 'G', text: "I'd be keen to find out more about the place." },
        { label: 'H', text: "I'd like to do the same activity somewhere nearer home." },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'B' },
        { speaker: 'Speaker 2' , answer: 'C' },
        { speaker: 'Speaker 3' , answer: 'F' },
        { speaker: 'Speaker 4' , answer: 'D' },
        { speaker: 'Speaker 5' , answer: 'G' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        "You will hear an interview with a girl called Poppy Wallace, who sings in a girl band called GirlSong. For questions 24–30, choose the best answer (A, B or C).",
      audio: '/audio/fce/school1/school1-t2-p4.mp3',
      items: [
        {
          q: "What does Poppy say about the band's success this year?",
          opts: [
            "The girls didn't expect it to happen so quickly.",
            "The girls haven't had enough time to appreciate it.",
            'The girls recognise that it was the result of years of hard work.',
          ],
          answer: 0,
        },
        {
          q: "How does Poppy feel about GirlSong's recent tour?",
          opts: [
            'glad to have spent time with the fans',
            "pleased that it's made them more confident performers",
            'happy with the way relationships within the band have developed',
          ],
          answer: 2,
        },
        {
          q: 'How did GirlSong come to work with the singer called Leo?',
          opts: [
            'Their agent contacted him about it.',
            'He suggested it after hearing their music.',
            'They met him by chance at a recording studio.',
          ],
          answer: 1,
        },
        {
          q: "What is Poppy's attitude to working with Leo again?",
          opts: [
            "She's alarmed about the attention they will get.",
            "She's excited about the opportunity to perform with him.",
            "She's concerned about the pressure involved.",
          ],
          answer: 0,
        },
        {
          q: 'On international tours, Poppy likes to',
          opts: [
            'make time for seeing the local sights.',
            'try singing local folk songs.',
            'learn simple phrases in the local language.',
          ],
          answer: 2,
        },
        {
          q: 'What does Poppy enjoy most when she visits Barbados?',
          opts: [
            "eating the island's food",
            'playing music with friends',
            'relaxing on the beach',
          ],
          answer: 1,
        },
        {
          q: 'Who did Poppy admire most as a child?',
          opts: [
            'a singer whose songs she identified with',
            'a teacher whose lessons inspired her',
            'a film character whose behaviour appealed to her',
          ],
          answer: 2,
        },
      ],
    },
  },
}
