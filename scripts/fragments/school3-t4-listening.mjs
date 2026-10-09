// Source: FIRST3  青少版.pdf
// Listening: Test 4（Part 1 Q1-4 书页88，Q5-8 书页89；Part 2 书页90；Part 3 书页91；Part 4 Q24-28 书页92、Q29-30 书页93）
// 音频：/audio/fce/school3/school3-t4-p1.mp3 ~ school3-t4-p4.mp3（整 Part 一条）
// 答案：书157 Key（已核对）

export default {
  examId: 'fce-schools-3-test4-listening',
  examKey: 'fce-schools-3-test4',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 4,
    paper: 'listening',
    pages: '书88–93',
    source: 'FIRST3  青少版.pdf',
    answerSource: '书157 Key',
    verified: false,
    audio: '/audio/fce/school3/school3-t4-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school3/school3-t4-p1.mp3',
      items: [
        {
          scenario: 'You hear two friends talking about a pop band they saw on TV.',
          q: 'What surprised them both about the band members?',
          opts: [
            'the wide range of ages',
            'their level of popularity',
            'the quality of their voices',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear part of an interview with a scientist.',
          q: 'What is he doing?',
          opts: [
            'explaining why some research has produced unclear results',
            'criticising the reluctance of some schools to co-operate with him',
            'pointing out the possible value of making some controversial changes',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a teacher talking to a student about doing homework.',
          q: 'What advice does she give?',
          opts: [
            'Take regular short breaks.',
            'Deal with the difficult things first.',
            'Cut down on free-time activities.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a football fan talking about his team.',
          q: 'He blames their poor results on',
          opts: [
            'their struggle to maintain energy levels.',
            'their poor organisation on the pitch.',
            'their lack of belief in themselves.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a film critic talking about a film for teenagers.',
          q: 'What does she say about it?',
          opts: [
            'She was impressed by the special effects.',
            'It was better than the book it was based on.',
            'The actor who played the leading role performed well.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two teenagers discussing a visit to a zoo.',
          q: 'They agree that zoos',
          opts: [
            'attract tourists in imaginative ways.',
            'can succeed in educating people.',
            'play a valuable role in conservation.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a young professional ballet dancer talking about performing.',
          q: 'What does she say about being on stage?',
          opts: [
            "She tries to forget any critical comments she's heard.",
            'She succeeds by pretending to be confident.',
            'She reveals a very different side of herself.',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a teacher talking about the history of the refrigerator.',
          q: 'What does he say about it?',
          opts: [
            'Its introduction caused a great deal of excitement.',
            "Its potential wasn't recognised for some time.",
            'Its long-term significance has been overestimated.',
          ],
          answer: 1,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Jack Morton talking about his job as a windsurfing instructor. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school3/school3-t4-p2.mp3',
      notes: 'Jack Morton – windsurfing instructor',
      items: [
        {
          q: "Jack's first experience of work was as a ____ .",
          answer: "shop assistant/shop-assistant",
        },
        {
          q: 'The name of the first watersports company that Jack worked for was ____ .',
          answer: "wavemakers/wave-makers",
        },
        {
          q: 'What particularly attracts Jack to windsurfing is the ____ involved.',
          answer: "challenge",
        },
        {
          q: 'Jack most enjoys the moment when his beginners learn to ____ on the board successfully.',
          answer: "stand/stand up",
        },
        {
          q: 'Jack uses the word ____ to describe how some learners feel when they succeed.',
          answer: "emotional",
        },
        {
          q: 'Jack explains that getting enough ____ is more important than anything else when learning to windsurf.',
          answer: "practice",
        },
        {
          q: 'Jack feels that the ____ is something many windsurfers fail to think carefully about.',
          answer: "weather",
        },
        {
          q: 'Jack mentions parking a car to explain that people should give each other ____ when windsurfing.',
          answer: "space",
        },
        {
          q: 'The fact that he is ____ has earned Jack praise from his employer.',
          answer: "adaptable",
        },
        {
          q: 'Jack says that ____ as well as promotional skills are becoming more important in watersports careers.',
          answer: "photography",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are remembering the day they met their best friend for the first time. For questions 19–23, choose from the list (A–H) how each speaker felt on that day. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school3/school3-t4-p3.mp3',
      options: [
        { label: 'A', text: 'disappointed by something the friend said' },
        { label: 'B', text: 'pleased to find they shared an interest' },
        { label: 'C', text: 'embarrassed by a misunderstanding' },
        { label: 'D', text: "surprised that they hadn't met previously" },
        { label: 'E', text: 'happy about a suggestion the friend made' },
        { label: 'F', text: 'amused by something they saw together' },
        { label: 'G', text: 'nervous about what they had to do together' },
        { label: 'H', text: "curious about the friend's experiences" },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'F' },
        { speaker: 'Speaker 2' , answer: 'E' },
        { speaker: 'Speaker 3' , answer: 'A' },
        { speaker: 'Speaker 4' , answer: 'B' },
        { speaker: 'Speaker 5' , answer: 'H' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a young artist called Martin Gold, who is learning how to draw the cartoon stories that appear in magazines. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school3/school3-t4-p4.mp3',
      items: [
        {
          q: 'What attracted Martin to drawing cartoons?',
          opts: [
            'his wish to demonstrate his originality',
            'his fascination with reading comics',
            'his interest in the techniques involved',
          ],
          answer: 0,
        },
        {
          q: "Martin's school teacher reacted to his choice of career by warning him that",
          opts: [
            "she couldn't help him to get work experience.",
            'it would be very hard to find a secure job.',
            'he might need to consider an alternative to it.',
          ],
          answer: 2,
        },
        {
          q: 'Martin continued to follow his ambition because of',
          opts: [
            'the surprising popularity of his artwork.',
            'the confidence he had in his own abilities.',
            "the encouraging responses he'd received from magazines.",
          ],
          answer: 0,
        },
        {
          q: 'How did visiting Barcelona help Martin?',
          opts: [
            'He received help developing his drawing techniques.',
            'He felt inspired by his experiences there.',
            'He realised what he really liked about art.',
          ],
          answer: 1,
        },
        {
          q: 'By using a different kind of ink for drawing his cartoons, Martin',
          opts: [
            'increased the amount he was able to produce.',
            'included a greater degree of detail.',
            'extended the range of images he can draw.',
          ],
          answer: 0,
        },
        {
          q: "How does Martin feel about his work as a 'ghost artist'?",
          opts: [
            "It's proving a less valuable experience than he'd hoped.",
            "It's preventing him from developing his own cartoons.",
            "It isn't regular enough for him to rely on financially.",
          ],
          answer: 1,
        },
        {
          q: 'Martin thinks that he might have problems working as a cartoonist because of',
          opts: [
            'his tendency to take on too many challenges.',
            'his reluctance to accept advice from others.',
            'his disorganised approach to his work.',
          ],
          answer: 2,
        },
      ],
    },
  },
}
