// Source: FIRST3  青少版.pdf
// Listening: Test 2（Part 1 Q1-4 书页44，Q5-8 书页45；Part 2 书页46；Part 3 书页47；Part 4 Q24-28 书页48、Q29-30 书页49）
// 音频：/audio/fce/school3/school3-t2-p1.mp3 ~ school3-t2-p4.mp3（整 Part 一条）
// 答案：书133 Key（已核对）

export default {
  examId: 'fce-schools-3-test2-listening',
  examKey: 'fce-schools-3-test2',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 2,
    paper: 'listening',
    pages: '书44–49',
    source: 'FIRST3  青少版.pdf',
    answerSource: '书133 Key',
    verified: false,
    audio: '/audio/fce/school3/school3-t2-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school3/school3-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear two friends talking about a lesson on the subject of newspapers.',
          q: 'What do they agree about it?',
          opts: [
            'Some unusual ideas were expressed.',
            'A wide range of issues were covered.',
            'It was well-planned.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a man talking about skateboarders in the past.',
          q: 'What is he doing?',
          opts: [
            'explaining the reputation they once had',
            'describing how attitudes towards them have changed',
            'suggesting reasons for their interest in the sport',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a girl talking about a diary she keeps.',
          q: 'Her main aim is to explain',
          opts: [
            'her reason for starting to write a diary.',
            'the effect that keeping a diary has on her.',
            'the different functions a diary can have.',
          ],
          answer: 1,
        },
        {
          scenario:
            'You hear a boy talking about a weekly video he posts online in which he expresses his opinions.',
          q: 'What does he find most challenging?',
          opts: [
            'responding to criticism from other people',
            'producing original ideas on a regular basis',
            'coping with the amount of interest he gets',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear part of a programme about sea creatures called sea dragons.',
          q: 'What does the man say about the different types of sea dragon?',
          opts: [
            'Their sources of food are becoming scarcer.',
            'They have names which reflect their appearance.',
            'Certain differences between them have only recently been discovered.',
          ],
          answer: 1,
        },
        {
          scenario: "You hear two friends talking about a film they've seen.",
          q: 'What does the girl think about it?',
          opts: [
            'The storyline was too complicated to follow.',
            'The music was unsuitable for the subject matter.',
            'The main actor failed to live up to her expectations.',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a news item about a small town in Alaska called Whittier.',
          q: 'What is unusual about the town?',
          opts: [
            'Children can get to school without going outdoors.',
            'There is only one shop for the people to use.',
            'All residents live and work in one tall apartment block.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends talking about a dance competition.',
          q: 'What do they agree about it?',
          opts: [
            'It should be held on another day.',
            'It will be more fun to watch than take part in.',
            "It's bound to be a great success.",
          ],
          answer: 0,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear an astronomer called Steve Mitchell talking about his work. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school3/school3-t2-p2.mp3',
      notes: 'Working as an astronomer',
      items: [
        {
          q: 'Steve first became interested in astronomy after watching a ____ on TV.',
          answer: "documentary",
        },
        {
          q: 'Steve says that as a teenager he particularly appreciated the ____ of the night sky.',
          answer: "beauty",
        },
        {
          q: 'Steve describes how excited he felt when he saw a ____ through his telescope.',
          answer: "comet",
        },
        {
          q: 'Steve finds it surprising that the ____ in the universe are so varied.',
          answer: "moons",
        },
        {
          q: "Steve's ambition is to go on a trip to ____ one day.",
          answer: "a space station",
        },
        {
          q: 'Steve says that ____ can cause unexpected problems for inexperienced astronomers living in built-up areas.',
          answer: "light/light pollution",
        },
        {
          q: 'Steve thinks finding a ____ is the best thing that beginners interested in astronomy could do.',
          answer: "club/local club",
        },
        {
          q: 'Steve thinks the many ____ surrounding one planet would be easy for young astronomers to identify.',
          answer: "rings",
        },
        {
          q: "Steve says that amateur astronomers' important ____ include finding new stars.",
          answer: "discoveries",
        },
        {
          q: 'Steve explains that ____ is the most important quality astronomers need to have.',
          answer: "discipline",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about a favourite book. For questions 19–23, choose from the list (A–H) what each speaker says about the book. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school3/school3-t2-p3.mp3',
      options: [
        { label: 'A', text: 'I was drawn into it from the beginning.' },
        { label: 'B', text: "It's more humorous than other books by the same author." },
        { label: 'C', text: 'One of the characters reminds me of someone I know well.' },
        { label: 'D', text: 'It used to belong to a relative of mine.' },
        { label: 'E', text: "It's set in a place I've visited." },
        { label: 'F', text: 'I was inspired to read it by a TV programme.' },
        { label: 'G', text: 'It helped me to deal with a situation in my own life.' },
        { label: 'H', text: 'There are interesting descriptions of people in it.' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'H' },
        { speaker: 'Speaker 2' , answer: 'A' },
        { speaker: 'Speaker 3' , answer: 'G' },
        { speaker: 'Speaker 4' , answer: 'C' },
        { speaker: 'Speaker 5' , answer: 'D' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a man called Josh Reed, who teaches people how to climb trees. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school3/school3-t2-p4.mp3',
      items: [
        {
          q: 'When Josh tells people what he does, they are usually',
          opts: [
            'confused about what his job involves.',
            'surprised that there is such a job.',
            'critical of his choice of job.',
          ],
          answer: 1,
        },
        {
          q: 'What appealed to Josh as a child about climbing trees?',
          opts: [
            'the excitement of doing something his parents disapproved of',
            'the chance to face up to a physical challenge',
            'the contrast with his other daily activities',
          ],
          answer: 2,
        },
        {
          q: 'What does Josh think now about the job he had looking after trees in public places?',
          opts: [
            'He continued doing it for too long.',
            'It was the obvious work for him to go into.',
            'The training he received for it was limited.',
          ],
          answer: 0,
        },
        {
          q: 'Josh says his main aim in offering his tree-climbing courses was to',
          opts: [
            'make people more knowledgeable about trees.',
            'show people the health benefits of this activity.',
            "change people's attitude to the environment.",
          ],
          answer: 2,
        },
        {
          q: 'Why is Josh against climbing very tall trees?',
          opts: [
            "It's dangerous for ordinary people to try it.",
            "It's unfair to disturb the wildlife in them.",
            "It's wrong to run the risk of damaging them.",
          ],
          answer: 2,
        },
        {
          q: 'What impressed Josh about the group he recently taught?',
          opts: [
            'how effectively they dealt with a problem',
            'how carefully they listened to his advice',
            'how quickly they learnt climbing skills',
          ],
          answer: 1,
        },
        {
          q: 'What does Josh look forward to doing in the future?',
          opts: [
            'developing new tree-climbing techniques',
            'having the chance to climb trees in different parts of the world',
            'spending more time promoting tree climbing as a leisure activity',
          ],
          answer: 2,
        },
      ],
    },
  },
}
