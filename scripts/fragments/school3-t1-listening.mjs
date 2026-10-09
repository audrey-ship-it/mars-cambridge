// Source: FIRST3  青少版.pdf
// Listening: Test 1（Part 1 Q1-4 书页22，Q5-8 书页23；Part 2 书页24；Part 3 书页25；Part 4 Q24-28 书页26、Q29-30 书页27）
// 音频：/audio/fce/school3/school3-t1-p1.mp3 ~ school3-t1-p4.mp3（整 Part 一条）
// 答案：书121 Key（已核对）

export default {
  examId: 'fce-schools-3-test1-listening',
  examKey: 'fce-schools-3-test1',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 1,
    paper: 'listening',
    pages: '书22–27',
    source: 'FIRST3  青少版.pdf',
    answerSource: '书121 Key',
    verified: false,
    audio: '/audio/fce/school3/school3-t1-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school3/school3-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a singer talking about performing on stage.',
          q: 'What does she do if she feels nervous before a performance?',
          opts: [
            'She pretends the audience is not there.',
            'She talks with other people in her group.',
            'She uses a technique suggested by a colleague.',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a girl telling her father about a special day at school.',
          q: 'How did she feel?',
          opts: [
            'surprised to be asked for her views',
            'excited about meeting someone well known',
            'pleased that her talents were recognised',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends talking about a summer camp they could both go on.',
          q: 'What would they both find difficult about going on it?',
          opts: [
            'being away from home',
            'getting on with other people',
            'doing the organised activities',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a boy talking about his favourite TV programme.',
          q: 'How does he feel about it?',
          opts: [
            'disappointed by the absence of one important element',
            'surprised by the references to real historical figures',
            'confused by the way the characters behave',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a journalist talking about an unusual type of house.',
          q: 'What does he think of it?',
          opts: [
            "He's impressed by how original the design is.",
            "He's confident that it could be successful elsewhere.",
            "He's keen to experience staying in it himself.",
          ],
          answer: 2,
        },
        {
          scenario: 'You hear part of an interview with a boy called Max, who found a prehistoric object.',
          q: "What effect has the discovery had on Max's life?",
          opts: [
            "It's made him more confident.",
            "It's provided him with a new interest.",
            "It's changed the way his friends treat him.",
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a girl talking about the sport called netball.',
          q: 'What does she say about it?',
          opts: [
            'The rules are quite complicated.',
            'The skills are difficult to acquire.',
            'The level of fitness needed is surprising.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two friends discussing a news story about some rock climbers.',
          q: 'How does the boy feel about it?',
          opts: [
            'He feels sorry for the families of the climbers.',
            'He admires the courage the climbers showed.',
            "He's determined to follow the climbers' example.",
          ],
          answer: 1,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Ingrid talking about doing volunteer work on a shark conservation project on the island of Fiji. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school3/school3-t1-p2.mp3',
      notes: 'Shark conservation project on Fiji',
      items: [
        {
          q: 'Ingrid first came across information about the shark project in a ____ report.',
          answer: "magazine",
        },
        {
          q: 'Ingrid was taught how to dive in a ____ near her home.',
          answer: "harbour",
        },
        {
          q: "Ingrid says she'll never forget the ____ on the day she arrived in Fiji.",
          answer: "sunrise",
        },
        {
          q: 'Ingrid uses the word ____ to describe her experience of seeing sharks while diving.',
          answer: "magical",
        },
        {
          q: 'Ingrid says that the ____ of the Bull Sharks was what impressed her most.',
          answer: "size",
        },
        {
          q: 'Ingrid was pleased to be able to dive to a depth of ____ metres.',
          answer: "30/thirty",
        },
        {
          q: 'Ingrid mainly worked with researchers who were collecting information about the shark ____ in the local area.',
          answer: "population/populations",
        },
        {
          q: 'Ingrid helped researchers to attach metal tags to ____ Bull Sharks in order to track where they go.',
          answer: "baby",
        },
        {
          q: 'Ingrid was disappointed that she never saw a ____ Shark.',
          answer: "zebra",
        },
        {
          q: 'Ingrid has kept in touch with someone from ____ , who she met on the project.',
          answer: "india",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about their experience of doing experiments in science lessons at school. For questions 19–23, choose from the list (A–H) how each speaker feels about their experience. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school3/school3-t1-p3.mp3',
      options: [
        { label: 'A', text: 'bored by having to do things many times' },
        { label: 'B', text: 'proud of their ability to be adaptable' },
        { label: 'C', text: 'frustrated that important work had to be done too quickly' },
        { label: 'D', text: 'inspired by the feedback that was given' },
        { label: 'E', text: 'embarrassed by the mistakes that were made' },
        { label: 'F', text: 'relieved that the results were better than expected' },
        { label: 'G', text: 'disappointed by the lack of support from the teacher' },
        { label: 'H', text: "irritated by someone's lack of organisation" },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'C' },
        { speaker: 'Speaker 2' , answer: 'D' },
        { speaker: 'Speaker 3' , answer: 'H' },
        { speaker: 'Speaker 4' , answer: 'B' },
        { speaker: 'Speaker 5' , answer: 'F' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with an air traffic controller called Jake Watson, whose job involves directing aircraft in and out of an airport. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school3/school3-t1-p4.mp3',
      items: [
        {
          q: 'What does Jake find most challenging about his job?',
          opts: [
            'communicating with a variety of people',
            'focusing on several tasks at the same time',
            'being responsible for aircraft safety',
          ],
          answer: 1,
        },
        {
          q: 'Why did Jake decide to become an air traffic controller?',
          opts: [
            'He hoped to increase his income.',
            'He felt the need to do something different.',
            'He was unable to fulfil his dream of becoming a commercial pilot.',
          ],
          answer: 1,
        },
        {
          q: 'Jake says the selection process for the job showed him that',
          opts: [
            "he was stronger in some skills than he'd thought.",
            "he'd be able to develop skills he already had.",
            'he needed to learn a number of new skills.',
          ],
          answer: 0,
        },
        {
          q: 'Jake says the first time he worked without supervision, he',
          opts: [
            'wished he was still being monitored.',
            'felt completely ready to deal with it.',
            'was too busy to let it worry him at all.',
          ],
          answer: 2,
        },
        {
          q: 'Jake says that when no planes are flying due to fog, controllers',
          opts: [
            'use equipment to assess possible solutions to the problem.',
            'work harder than usual to monitor changing conditions.',
            'take advantage of a break from their normal routine.',
          ],
          answer: 2,
        },
        {
          q: 'What does Jake say about flight delays?',
          opts: [
            "He finds them irritating when he's a passenger himself.",
            "He avoids thinking about passengers' problems when he's working.",
            'He thinks passengers should be given clearer information.',
          ],
          answer: 1,
        },
        {
          q: 'How did Jake feel during a recent air display?',
          opts: [
            'relieved that plans for the day were successful',
            'concerned about the number of people watching',
            'impressed by the impact it had on the airport',
          ],
          answer: 0,
        },
      ],
    },
  },
}
