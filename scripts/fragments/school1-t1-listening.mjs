// Source: Cambridge First Certificate English Tests for schools 1.PDF
// Listening: 书页 22–27（Part 1 Q1-4 位于书22，Q5-8 位于书23；Part 2 书24；Part 3 书25；Part 4 Q24-27 书26、Q28-30 书27）
// 音频：/audio/fce/school1/school1-t1-p1.mp3 ~ school1-t1-p4.mp3（整 Part 一条）
// 答案：未转录，待核对（answerSource: 书121 Key）

export default {
  examId: 'fce-schools-1-test1-listening',
  examKey: 'fce-schools-1-test1',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 1,
    paper: 'listening',
    pages: '书22–27',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '书121 Key',
    verified: false,
    audio: '/audio/fce/school1/school1-t1-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school1/school1-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear part of a news item about a school project.',
          q: 'What have the students at the school invented?',
          opts: [
            'an unusual means of transport',
            'a method of making ice cream',
            'a way of producing energy',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a teacher talking to her students about a writing competition.',
          q: 'What is she doing?',
          opts: [
            'encouraging them to go in for it',
            'suggesting how they could do well in it',
            "correcting information they've received about it",
          ],
          answer: 1,
        },
        {
          scenario: 'You hear part of a radio item about a bird.',
          q: 'The presenter is explaining why',
          opts: [
            'the bird has the appearance it has.',
            'the bird has arrived at a wildlife centre.',
            'the bird was given the name Manukura.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends talking about a TV talent show.',
          q: 'What do they agree about?',
          opts: [
            'The girl band made a surprising choice of song.',
            'The singer who ended the show had a very strong voice.',
            'The performers were generally better than in previous weeks.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a girl talking about a sports event she took part in.',
          q: 'What is the girl doing?',
          opts: [
            'giving her opinion about people at the event',
            'explaining why she did so well in the event',
            'describing what happened at the event',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a teacher telling her class about something called World Oceans Day.',
          q: 'What is the teacher going to do next?',
          opts: [
            'give more information about the importance of oceans',
            'listen to suggestions about how to celebrate the day',
            'say how the class could help the environment',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear an announcement about a festival.',
          q: "What is the speaker's main purpose?",
          opts: [
            'to describe the event',
            'to publicise a competition',
            'to explain how to get tickets',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a boy leaving a voicemail message for his friend.',
          q: 'Why is he calling his friend?',
          opts: [
            'to offer to do something',
            'to complain about something',
            'to give advice about something',
          ],
          answer: 0,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        "You will hear a boy called Joe giving a class presentation about a project he's done on the subject of gorillas. For questions 9–18, complete the sentences with a word or short phrase.",
      audio: '/audio/fce/school1/school1-t1-p2.mp3',
      notes: 'Gorillas',
      items: [
        {
          q: 'The thing that first got Joe interested in gorillas was a ____ he saw as a child.',
          answer: ["film","movie"],
        },
        {
          q: "Joe's uncle saw gorillas in the south of Uganda whilst working as a ____ there.",
          answer: ["tour guide","guide"],
        },
        {
          q: "The species Joe's uncle saw in Uganda were ____ gorillas.",
          answer: ["mountain"],
        },
        {
          q: 'Joe used a website called ____ .com as the main source of information for his project.',
          answer: ["jungle-life","junglelife","jungle life"],
        },
        {
          q: 'Joe uses the word ____ to describe the way that gorillas usually behave.',
          answer: ["peaceful"],
        },
        {
          q: 'Joe discovered that, as well as vegetation, ____ sometimes form part of the gorilla\'s diet.',
          answer: ["insects"],
        },
        {
          q: 'The name ____ is used to refer to the young males in a group.',
          answer: ["black-back","blackbacks","blackback"],
        },
        {
          q: 'Joe says that gorillas choose the ____ as the place to build their nests.',
          answer: ["ground"],
        },
        {
          q: 'Joe explains that ____ are the main threat to gorillas.',
          answer: ["humans","human beings"],
        },
        {
          q: 'Joe recommends a book entitled Gorillas in the ____ for finding out more about them.',
          answer: ["rainforest"],
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about a recent holiday. For questions 19–23, choose from the list (A–H) the opinion each speaker expresses. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school1/school1-t1-p3.mp3',
      options: [
        { label: 'A', text: "The best bit was meeting someone who's become a close friend." },
        { label: 'B', text: "I was good at an activity I hadn't tried before." },
        { label: 'C', text: 'I had a great time performing in a musical event.' },
        { label: 'D', text: "A new experience was more enjoyable than I'd expected." },
        { label: 'E', text: 'The journey to our destination was my favourite part.' },
        { label: 'F', text: 'I was proud that I could speak the local language.' },
        { label: 'G', text: 'It was more exciting than previous visits to the same place.' },
        { label: 'H', text: 'It was good to go away with people for the first time.' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'D' },
        { speaker: 'Speaker 2' , answer: 'B' },
        { speaker: 'Speaker 3' , answer: 'H' },
        { speaker: 'Speaker 4' , answer: 'F' },
        { speaker: 'Speaker 5' , answer: 'E' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a writer called Clare Watson, who writes novels for teenagers. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school1/school1-t1-p4.mp3',
      items: [
        {
          q: 'What first made Clare want to become a novelist?',
          opts: [
            'the encouragement of a teacher',
            'her own passion for reading',
            'positive feedback from her brother',
          ],
          answer: 2,
        },
        {
          q: 'Clare says that her favourite novel',
          opts: [
            'turned out as she hoped it would.',
            'is more amusing than her others.',
            'is the first in a series.',
          ],
          answer: 0,
        },
        {
          q: 'Where does Clare get the ideas for her stories?',
          opts: [
            'They often have their origins in her dreams.',
            "They come to her when she's exercising.",
            'They appear when she least expects them.',
          ],
          answer: 1,
        },
        {
          q: 'How does Clare feel about the TV series that features one of her characters?',
          opts: [
            'She wishes it had been made years ago.',
            "She's glad that other people write the scripts.",
            'She thinks the actors have been well chosen.',
          ],
          answer: 1,
        },
        {
          q: 'What inspired Clare to set up writing groups?',
          opts: [
            'a conversation with other authors',
            'letters she received from readers',
            'a similar project she heard about',
          ],
          answer: 2,
        },
        {
          q: 'How did Clare feel when she won an award?',
          opts: [
            'honoured because her favourite writer had won it before',
            'apprehensive about how it might change her life',
            "surprised because she didn't feel she was the best",
          ],
          answer: 0,
        },
        {
          q: 'Clare says she can write well about how teenagers feel because',
          opts: [
            "she's got very clear memories of herself at that age.",
            "she's in regular contact with teenage relatives.",
            'she spent several years of her life as a teacher.',
          ],
          answer: 0,
        },
      ],
    },
  },
}
