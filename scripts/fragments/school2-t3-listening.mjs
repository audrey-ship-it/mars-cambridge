// Source: Cambridge First Certificate English Tests for schools 2.PDF
// Listening: Test 7（Part 1 Q1-4 书页66，Q5-8 书页67；Part 2 书页68；Part 3 书页69；Part 4 Q24-28 书页70、Q29-30 书页71）
// 音频：/audio/fce/school2/school2-t3-p1.mp3 ~ school2-t3-p4.mp3（整 Part 一条）
// 答案：未转录，待核对（answerSource 待核对）

export default {
  examId: 'fce-schools-2-test3-listening',
  examKey: 'fce-schools-2-test3',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 3,
    paper: 'listening',
    pages: '书66–71',
    source: 'Cambridge First Certificate English Tests for schools 2.PDF',
    answerSource: '书末 Key（待核对）',
    verified: false,
    audio: '/audio/fce/school2/school2-t3-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school2/school2-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear two friends talking about a TV series called Teenage Cooks.',
          q: 'What surprised the girl about the teenagers who appeared in the series?',
          opts: [
            'how much they seemed to enjoy the experience',
            'how quickly their cooking improved',
            'how original their recipes were',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a girl talking about a school sports day when students compete against each other.',
          q: 'What did she feel about the day?',
          opts: [
            'surprised that people did not take it seriously',
            "disappointed that she wasn't more involved",
            'pleased that it helped everyone to relax',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear two friends talking about a film they have just watched.',
          q: 'What do they agree about it?',
          opts: [
            'The plot was complicated.',
            'The young actors were talented.',
            'The film was hard to watch in places.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a teacher talking to her students about some stories they have written.',
          q: 'What impressed her most about the stories?',
          opts: [
            'how well the characters were described',
            'how realistic the dialogue was',
            'how original they were',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two friends talking about a man who gave a talk at their school.',
          q: 'What do they agree about?',
          opts: [
            'He made them want to find out more about the subject.',
            "He was more interesting than they'd expected.",
            'He managed to get all his ideas across in a clear way.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a girl talking about studying environmental studies as a school subject.',
          q: 'What is her attitude to it?',
          opts: [
            "She's pleased that it isn't too difficult.",
            "She's aware that it's taught her to be responsible.",
            "She doubts that it's as useful as other science subjects.",
          ],
          answer: 1,
        },
        {
          scenario: "You hear two friends talking about attending an event called 'World Sleep Day'.",
          q: 'How did they both feel about it?',
          opts: [
            'doubtful about how useful it was for them',
            'surprised by some of the things they learned',
            'irritated by the behaviour of some people there',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a man talking about forming a partnership with a friend to make music.',
          q: 'What does he say about the experience?',
          opts: [
            'They both wanted solo careers at first.',
            'They became close friends through their music.',
            "They recognised each other's talent as soon as they met.",
          ],
          answer: 0,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear an interview with a successful teenage businessman called Phil Sandwell who is talking about setting up a business while continuing with his studies. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school2/school2-t3-p2.mp3',
      notes: 'Teenage Businessman',
      items: [
        {
          q: "Phil's website was one of the first to offer online ____ for free.",
          answer: "computer games/video games/games",
        },
        {
          q: 'Phil worked on a radio programme with the name ____ when he was 17.',
          answer: "wake up",
        },
        {
          q: 'Phil explains that advertisements in ____ are unlikely to attract teenage buyers.',
          answer: "newspapers",
        },
        {
          q: 'Phil discovered that lack of ____ was the biggest problem for teenagers wanting to start a business.',
          answer: "time",
        },
        {
          q: "Phil's mother worked as the ____ of Phil's book.",
          answer: "editor",
        },
        {
          q: 'Phil was amused when the phrase a ____ was used to describe him in an article.',
          answer: "a born leader/born leader",
        },
        {
          q: 'Problems with his business ____ led to the sale of Phil\'s software company.',
          answer: "partner",
        },
        {
          q: 'Phil likes his part-time job as a ____ because it leaves him enough time for his studies.',
          answer: "teaching assistant/teachers assistant",
        },
        {
          q: 'Phil would like to work in the field of ____ in the future.',
          answer: "politics",
        },
        {
          q: 'Phil says that a successful businessperson needs ____ more than anything else.',
          answer: "a good imagination/good imagination",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about doing an art project at school. For questions 19–23, choose from the list (A–H) how each speaker felt about the art project. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school2/school2-t3-p3.mp3',
      options: [
        { label: 'A', text: 'surprised by what they learned from the experience' },
        { label: 'B', text: 'unsure how useful it was' },
        { label: 'C', text: 'grateful for the support they received' },
        { label: 'D', text: 'critical of the resources available for it' },
        { label: 'E', text: 'satisfied that they achieved their aims' },
        { label: 'F', text: "sorry that they weren't more ambitious" },
        { label: 'G', text: 'amused by reactions to the art they produced' },
        { label: 'H', text: 'annoyed by the attitude of other students' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'E' },
        { speaker: 'Speaker 2' , answer: 'F' },
        { speaker: 'Speaker 3' , answer: 'H' },
        { speaker: 'Speaker 4' , answer: 'A' },
        { speaker: 'Speaker 5' , answer: 'C' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a young magician called Jonny Frame. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school2/school2-t3-p4.mp3',
      items: [
        {
          q: 'Jonny started doing magic tricks in order to',
          opts: [
            "change some people's attitude towards him.",
            'entertain members of his family.',
            'prove something to himself.',
          ],
          answer: 0,
        },
        {
          q: 'Where does Jonny get ideas for new tricks from?',
          opts: [
            'discussions with people who are close to him',
            "research he's done into other magicians",
            'special effects in films he watches',
          ],
          answer: 2,
        },
        {
          q: 'When asked about practising his tricks, Jonny mentions',
          opts: [
            'how often he varies what he does.',
            'how few he has to master.',
            'how much he dislikes it.',
          ],
          answer: 1,
        },
        {
          q: 'What does Jonny say about audiences?',
          opts: [
            'The average age of them is gradually changing.',
            'The interest they take in his life is growing.',
            'The demands they make on him are becoming greater.',
          ],
          answer: 2,
        },
        {
          q: 'How does Jonny feel when other magicians watch him perform?',
          opts: [
            'grateful for their support',
            'determined to impress them',
            'concerned about their motives',
          ],
          answer: 0,
        },
        {
          q: 'What does Jonny have regrets about?',
          opts: [
            'a decision he took about a television show',
            'what he did to become a professional magician',
            'his attitude towards his studies when he was younger',
          ],
          answer: 1,
        },
        {
          q: 'What advice does Jonny offer young magicians?',
          opts: [
            'keep up to date with advances in technology',
            'join classes to improve acting skills',
            'establish an individual identity',
          ],
          answer: 2,
        },
      ],
    },
  },
}
