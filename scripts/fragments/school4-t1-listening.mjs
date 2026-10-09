// Source: B2 FIRST 4 FOR SCHOOLS.pdf
// Listening: Test 1（Part 1 Q1-4 书22、Q5-8 书23；Part 2 书24；Part 3 书25；Part 4 Q24-28 书26、Q29-30 书27）
// 音频：/audio/fce/school4/school4-t1-p1.mp3 ~ school4-t1-p4.mp3（整 Part 一条）
// 答案：用户提供（已核对）

export default {
  examId: 'fce-schools-4-test1-listening',
  examKey: 'fce-schools-4-test1',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 4,
    test: 1,
    paper: 'listening',
    pages: '书22–27',
    source: 'B2 FIRST 4 FOR SCHOOLS.pdf',
    answerSource: '用户提供',
    verified: false,
    audio: '/audio/fce/school4/school4-t1-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school4/school4-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear two students discussing some research into the behaviour of fish.',
          q: 'How does the girl feel about the research?',
          opts: [
            'confused about how the study was conducted',
            'surprised by the ability the fish displayed',
            'amused by the subject of the experiment',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a boy telling his friend about an important football match he will play in soon.',
          q: 'What does he decide to do?',
          opts: [
            'recommend that another player should join the team',
            'request further practice sessions before the game',
            'ask the coach to change his position on the field',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two friends talking about a rock band.',
          q: 'They agree that the band members',
          opts: [
            'had become tired from working too hard.',
            'were likely to have arguments.',
            'had very different ideas about music.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a teacher talking to his class after a discussion on space exploration.',
          q: 'What is he doing?',
          opts: [
            "challenging his students' point of view",
            'asking his students to support their argument',
            'praising his students for reaching agreement',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends talking about a riverboat trip they\'ve been on.',
          q: 'What do they both think made it worthwhile?',
          opts: [
            'the information provided',
            'the music on board',
            'the views of the city',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a boy talking about working as a volunteer in a nature reserve.',
          q: 'What did he feel about the experience?',
          opts: [
            'surprised by how rewarding he found it',
            "disappointed that he couldn't choose what to do",
            'pleased that he could show how much he knew',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a radio news item about National Ice Cream Month in the USA.',
          q: 'What is one ice cream company doing to mark the event?',
          opts: [
            'designing stamps with illustrations of ice cream on them',
            'manufacturing a range of ice cream with fewer calories',
            'introducing some different varieties of ice cream',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a girl talking about a science project she did at school.',
          q: 'What does she say about the project?',
          opts: [
            'It helped her with other studies.',
            'It was interesting to take part in.',
            'It took too long to set up.',
          ],
          answer: 0,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Ben Gardener talking about his job, making large models from plastic building blocks. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school4/school4-t1-p2.mp3',
      notes: 'Ben Gardener – model maker',
      items: [
        {
          q: 'Ben was an engineer in the field of (9) ________ before getting his current job.',
          answer: "animation",
        },
        {
          q: "Ben feels his qualification in (10) ________ has been a great help to him in his job.",
          answer: "physics",
        },
        {
          q: 'At the selection day he attended, Ben had difficulty making something that was (11) ________ in shape.',
          answer: "round",
        },
        {
          q: 'To show his range of skills, Ben chose to make a model of a (12) ________.',
          answer: "crocodile",
        },
        {
          q: "When designing a model, Ben's (13) ________ are more helpful to him than anything else.",
          answer: "drawings",
        },
        {
          q: "Ben's models are glued together to prevent them from being broken when (14) ________ touch them.",
          answer: "visitors",
        },
        {
          q: 'Ben particularly enjoys working on the (15) ________ that will accompany a moving model.',
          answer: "sound(s)",
        },
        {
          q: 'Ben recalls that he had to climb into a huge model of a (16) ________ to make it secure.',
          answer: "dinosaur",
        },
        {
          q: "Ben's next job will be to construct a model of a (17) ________ from bricks.",
          answer: "football stadium",
        },
        {
          q: 'Before making a model of a building, Ben has to visit it to get the correct (18) ________ of the place.',
          answer: "dimensions",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about their experience of speaking in public. For questions 19–23, choose from the list (A–H) what each speaker felt about the experience. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school4/school4-t1-p3.mp3',
      options: [
        { label: 'A', text: 'discouraged by how good other people were' },
        { label: 'B', text: 'proud of having done detailed research' },
        { label: 'C', text: 'disappointed to have felt so nervous' },
        { label: 'D', text: 'relieved not to have made any mistakes' },
        { label: 'E', text: 'embarrassed at having to change the plan at the last moment' },
        { label: 'F', text: 'grateful to have been given support' },
        { label: 'G', text: "annoyed that their efforts were not appreciated" },
        { label: 'H', text: "surprised that practising didn't help much" },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'E' },
        { speaker: 'Speaker 2' , answer: 'D' },
        { speaker: 'Speaker 3' , answer: 'H' },
        { speaker: 'Speaker 4' , answer: 'C' },
        { speaker: 'Speaker 5' , answer: 'B' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a student called Laura Benson, who is talking about her experience of studying caterpillars and other insects in a rainforest in Central America. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school4/school4-t1-p4.mp3',
      items: [
        {
          q: 'What was the first thing that surprised Laura about the rainforest?',
          opts: [
            'how hot it was',
            'how noisy it was',
            'how colourful it was',
          ],
          answer: 1,
        },
        {
          q: 'Why was the task of collecting caterpillars difficult for Laura?',
          opts: [
            'The idea of handling them made her feel nervous.',
            'Their appearance made them hard to see.',
            'She was unsure where to look for them.',
          ],
          answer: 2,
        },
        {
          q: 'A scientist from Mexico that Laura worked with was studying',
          opts: [
            'how caterpillars digest their food.',
            'how caterpillars defend themselves.',
            'how caterpillars adapt to their environment.',
          ],
          answer: 1,
        },
        {
          q: 'What did Laura enjoy taking photographs of?',
          opts: [
            'different shapes that caterpillars form',
            'previously unknown species of caterpillar',
            'the process of caterpillars becoming butterflies',
          ],
          answer: 0,
        },
        {
          q: 'What does Laura think is the most important thing she learned about caterpillars?',
          opts: [
            'how much damage they can cause to crops',
            'how little is known about them',
            'how significant they are for other wildlife',
          ],
          answer: 2,
        },
        {
          q: 'How does Laura now feel about a jungle hike she went on?',
          opts: [
            'embarrassed about how she behaved at times',
            'sorry she was unable to repeat the experience',
            'proud to have overcome very challenging conditions',
          ],
          answer: 0,
        },
        {
          q: 'As a result of her rainforest experiences, Laura thinks that in future she is likely to',
          opts: [
            'get involved in work to protect the environment.',
            'continue with her education.',
            'do research into different species of insects.',
          ],
          answer: 1,
        },
      ],
    },
  },
}
