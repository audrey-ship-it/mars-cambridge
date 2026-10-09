// Source: Cambridge First Certificate English Tests for schools 2.PDF
// Listening: Test 5（Part 1 Q1-4 书页22，Q5-8 书页23；Part 2 书页24；Part 3 书页25；Part 4 Q24-28 书页26、Q29-30 书页27）
// 音频：/audio/fce/school2/school2-t1-p1.mp3 ~ school2-t1-p4.mp3（整 Part 一条）
// 答案：未转录，待核对（answerSource 待核对）

export default {
  examId: 'fce-schools-2-test1-listening',
  examKey: 'fce-schools-2-test1',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 1,
    paper: 'listening',
    pages: '书22–27',
    source: 'Cambridge First Certificate English Tests for schools 2.PDF',
    answerSource: '书末 Key（待核对）',
    verified: false,
    audio: '/audio/fce/school2/school2-t1-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school2/school2-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a teacher telling her students about some geography homework.',
          q: 'The teacher recommends',
          opts: [
            'visiting local sites.',
            'referring to handouts.',
            'consulting websites.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two friends discussing a song by a group they like.',
          q: "What is the girl's opinion of it?",
          opts: [
            "It's typical of the work that the group does.",
            "It's less impressive than she expected.",
            "It's one of the best songs the group has ever done.",
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a boy talking about moving to a new house.',
          q: 'He thinks the main advantage for his family will be',
          opts: [
            'having more space.',
            'saving money on bills.',
            'being nearer to the city centre.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a teacher telling his students about an art exhibition at school.',
          q: 'What is he doing?',
          opts: [
            'explaining the importance of developing artistic talent',
            'saying why the venue has had to be changed',
            'emphasising the wide range of artwork on display',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a girl talking to a friend about a charity event she helped to organise.',
          q: 'How does she feel about it?',
          opts: [
            'annoyed at some of the people who attended',
            'disappointed at the amount of money raised',
            'surprised at how hard it was to get everything ready',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear two friends talking about a TV cookery show.',
          q: 'They both think that the chef on the show usually',
          opts: [
            "makes dishes that aren't very healthy.",
            "includes ingredients that aren't cheap to buy.",
            "uses recipes that aren't straightforward to follow.",
          ],
          answer: 2,
        },
        {
          scenario: 'You hear part of a talk by a politician.',
          q: 'What is he doing?',
          opts: [
            'giving an example',
            'introducing his subject',
            'making a comparison',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a girl talking about her English teacher.',
          q: 'What do his students appreciate most about him?',
          opts: [
            'the different interests he has',
            'the way he explains things in class',
            'the amount he knows about his subject',
          ],
          answer: 1,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        "You will hear a woman called Rita O'Farrell, who works as a vet, giving a talk about her job in a zoo. For questions 9–18, complete the sentences with a word or short phrase.",
      audio: '/audio/fce/school2/school2-t1-p2.mp3',
      notes: 'Working as a Zoo Vet',
      items: [
        {
          q: "Rita's interest in wild animals started during a holiday near a ____ .",
          answer: "forest",
        },
        {
          q: 'Rita had a job working with ____ just before she came to work at the zoo.',
          answer: "pets",
        },
        {
          q: 'There are a total of ____ different types of animals at the zoo.',
          answer: "450",
        },
        {
          q: 'A new ____ is currently being built at the zoo.',
          answer: "laboratory/lab",
        },
        {
          q: 'Rita mentions spending most of the day before her talk treating a ____ which had an injury.',
          answer: "camel",
        },
        {
          q: "In order to check an antelope's ____ , Rita will have to put the animal to sleep for a short time.",
          answer: "breathing",
        },
        {
          q: 'Rita only relies on a specialist when an animal has problems with its ____ .',
          answer: "eyesight/eyes",
        },
        {
          q: 'Rita often travels to ____ to do research.',
          answer: "africa",
        },
        {
          q: 'Rita will soon attend a course on the ____ of elephants at another zoo.',
          answer: "body language",
        },
        {
          q: 'Rita has only recently realised how important it is to be ____ as a zoo vet.',
          answer: "confident",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about performing in public. For questions 19–23, choose from the list (A–H) how each speaker felt about their experience. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school2/school2-t1-p3.mp3',
      options: [
        { label: 'A', text: 'confident because of thorough preparation' },
        { label: 'B', text: 'nervous at the beginning' },
        { label: 'C', text: 'encouraged by the reaction of the people watching' },
        { label: 'D', text: 'worried about their lack of concentration' },
        { label: 'E', text: 'aware of a strong sense of responsibility' },
        { label: 'F', text: 'annoyed by a mistake they made' },
        { label: 'G', text: 'surprised at how well everything went' },
        { label: 'H', text: 'disappointed by the efforts of others' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'F' },
        { speaker: 'Speaker 2' , answer: 'C' },
        { speaker: 'Speaker 3' , answer: 'E' },
        { speaker: 'Speaker 4' , answer: 'A' },
        { speaker: 'Speaker 5' , answer: 'D' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a young footballer called Nick Gibbons. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school2/school2-t1-p4.mp3',
      items: [
        {
          q: 'What does Nick say about his early experience of sport?',
          opts: [
            'He was advised by his sports teacher to focus on football.',
            'His parents wanted him to be a professional tennis player.',
            'He preferred swimming to any other sport.',
          ],
          answer: 2,
        },
        {
          q: 'What pleased Nick most about his first day at the academy?',
          opts: [
            'how friendly the other players seemed',
            'how encouraging the coaches were',
            'how well he fitted into the team',
          ],
          answer: 1,
        },
        {
          q: "Now he's in the senior team, Nick",
          opts: [
            'feels more pressure to perform well in matches.',
            'is given a training programme which is better structured.',
            'has fewer opportunities to demonstrate his individual ability.',
          ],
          answer: 2,
        },
        {
          q: "How do Nick's parents feel about him playing professional football?",
          opts: [
            "happy that he's had the chance to do it",
            "concerned it's changed him",
            "relieved that he's found something he loves",
          ],
          answer: 0,
        },
        {
          q: 'What does Nick say about signing autographs for fans?',
          opts: [
            'It reminds him of a childhood experience.',
            "It's something all sports people have to do.",
            "It's still a surprise to be asked.",
          ],
          answer: 0,
        },
        {
          q: "When talking about friends, Nick says that he's no longer able to",
          opts: [
            'meet up with them socially.',
            'share his concerns with them.',
            'spend enough time with them.',
          ],
          answer: 1,
        },
        {
          q: 'What does Nick want to do in the future?',
          opts: [
            'train to become a coach',
            'play for his team on a regular basis',
            'score the winning goal in the cup final',
          ],
          answer: 1,
        },
      ],
    },
  },
}
