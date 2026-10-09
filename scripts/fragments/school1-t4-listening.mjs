// Source: Cambridge First Certificate English Tests for schools 1.PDF
// Listening: 书页 88–93（Part 1 Q1-4 位于书88，Q5-8 位于书89；Part 2 书90；Part 3 书91；Part 4 Q24-28 书92、Q29-30 书93）
// 音频：/audio/fce/school1/school1-t4-p1.mp3 ~ school1-t4-p4.mp3（整 Part 一条）
// 答案：未转录，待核对（answerSource: 书156 Key）

export default {
  examId: 'fce-schools-1-test4-listening',
  examKey: 'fce-schools-1-test4',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 4,
    paper: 'listening',
    pages: '书88–93',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '书156 Key',
    verified: false,
    audio: '/audio/fce/school1/school1-t4-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school1/school1-t4-p1.mp3',
      items: [
        {
          scenario: 'You overhear two friends talking about a lesson they had at school.',
          q: 'What surprised them in the lesson?',
          opts: [
            'how astronomers are able to research distant stars',
            'the reason for the particular location of a star',
            'the temperature and size of the sun',
          ],
          answer: 0,
        },
        {
          scenario: "You hear two friends talking about buying a card game for the boy's sister.",
          q: "What is the girl's opinion of it?",
          opts: [
            "It doesn't suit his sister's character.",
            "It's not appropriate for someone of his sister's age.",
            "It's a game that's better for boys than girls.",
          ],
          answer: 0,
        },
        {
          scenario: "You hear part of an interview on the radio with a writer of children's books.",
          q: 'The writer thinks that books are more powerful than films because',
          opts: [
            'they affect you in a very personal and vivid way.',
            "they allow you to share the characters' inner thoughts.",
            'they stay in your memory longer than films do.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a guide speaking to tourists.',
          q: 'What is the guide talking about?',
          opts: [
            'when different exhibitions are on',
            "what's on display in the exhibitions",
            'the best way to go round the exhibitions',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two friends talking about a musical festival they are going to attend.',
          q: 'What is the boy looking forward to most?',
          opts: [
            'learning who the surprise performer will be',
            'having the chance to see new performers',
            'hearing some performers he liked last year',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends talking about a movie.',
          q: 'What do they agree about?',
          opts: [
            'The plot was handled appropriately.',
            'The visual effects were stunning.',
            'The actors were well chosen.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends talking about a news story about a baby monkey.',
          q: 'What do they agree about?',
          opts: [
            'that the monkey is in the best environment for it',
            'that the monkey deserves better treatment',
            'that it is sad this species of monkey is endangered',
          ],
          answer: 2,
        },
        {
          scenario: 'You overhear two friends talking about their holidays.',
          q: 'How does the boy feel about his holiday?',
          opts: [
            'surprised about how much he enjoyed his holiday',
            "disappointed that the family's plans had to change",
            'pleased that he was able to learn a new skill',
          ],
          answer: 2,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a student called Shirley Bailey giving a talk at her school about her experience of working at a wildlife centre in Africa last summer. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school1/school1-t4-p2.mp3',
      notes: 'Greenwood Wildlife Centre',
      items: [
        {
          q: 'When looking for a place to work, Shirley first asked at a ____ near a relative\'s home.',
          answer: ["zoo"],
        },
        {
          q: 'Shirley explains that Greenwood informs ____ about earning extra income from protecting wildlife.',
          answer: ["farmers"],
        },
        {
          q: 'Shirley found dealing with ____ was the hardest task she had to do at Greenwood.',
          answer: ["repairs"],
        },
        {
          q: 'Shirley was surprised how much she enjoyed doing ____ with certain animals.',
          answer: ["night work"],
        },
        {
          q: 'Shirley worked on what was called the ____ project.',
          answer: ["wild dog"],
        },
        {
          q: 'Shirley explains that, generally, animals are put into ____ when they are well enough to leave the zoo.',
          answer: ["animal reserves","reserves"],
        },
        {
          q: 'Shirley found that ____ was her only regular expense after she had arrived at Greenwood.',
          answer: ["the Internet","Internet use"],
        },
        {
          q: 'Shirley says that the best thing about her accommodation was its location near the ____ .',
          answer: ["lake"],
        },
        {
          q: 'The centre advised volunteers to wear ____ while they were working.',
          answer: ["heavy boots","boots"],
        },
        {
          q: 'Greenwood provided the volunteers with ____ to use.',
          answer: ["gloves"],
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about the sports they take part in. For questions 19–23, choose from the list (A–H) what each speaker says about their sport. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school1/school1-t4-p3.mp3',
      options: [
        { label: 'A', text: 'An injury stopped me doing it for a while.' },
        { label: 'B', text: "I'm going to take a special course to improve my skills." },
        { label: 'C', text: 'I was surprised how much time I needed for it.' },
        { label: 'D', text: 'I enjoy competitions more than training.' },
        { label: 'E', text: 'It has helped me make a lot of new friends.' },
        { label: 'F', text: 'The weather sometimes spoils my enjoyment.' },
        { label: 'G', text: 'A member of my family encouraged me to take it up.' },
        { label: 'H', text: 'My club provides all the equipment I need.' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'C' },
        { speaker: 'Speaker 2' , answer: 'G' },
        { speaker: 'Speaker 3' , answer: 'A' },
        { speaker: 'Speaker 4' , answer: 'B' },
        { speaker: 'Speaker 5' , answer: 'F' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear part of an interview with Roberto Gianni, a fashion designer. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school1/school1-t4-p4.mp3',
      items: [
        {
          q: 'When Roberto was a teenager, he felt he needed',
          opts: [
            'to show his friends he was capable of originality.',
            'to prove he was better at design than his friends.',
            'to help his friends create good-looking clothes.',
          ],
          answer: 0,
        },
        {
          q: 'What gave Roberto his big chance to break into the fashion industry?',
          opts: [
            'going to college to study design',
            'coming up with an award-winning design',
            'being interviewed by a fashion magazine',
          ],
          answer: 1,
        },
        {
          q: 'How does Roberto feel about the clothes he designs now?',
          opts: [
            'He thinks they are more glamorous than his early designs.',
            "He's making clothes that match his own personal taste.",
            'He believes his designs appeal to different age groups.',
          ],
          answer: 1,
        },
        {
          q: 'What does Roberto regard as the biggest influence on his work?',
          opts: [
            'other more famous designers',
            "fashion shows he's attended",
            'the fashions of the past',
          ],
          answer: 2,
        },
        {
          q: "How did Roberto's parents react to his choice of career?",
          opts: [
            'They gave him their support.',
            'They tried to change his mind.',
            "They didn't think he was serious.",
          ],
          answer: 0,
        },
        {
          q: 'How does Roberto feel when people are critical of his work?',
          opts: [
            "He gets upset that they don't understand what he's trying to do.",
            "He remains confident about what he's doing.",
            'He is determined to use their feedback constructively.',
          ],
          answer: 1,
        },
        {
          q: 'What advice does Roberto have for teenagers who want to become designers?',
          opts: [
            'find work to gain experience in the business',
            'study fashion seriously and remain open to new ideas',
            'create a wide range of designs to show professionals',
          ],
          answer: 0,
        },
      ],
    },
  },
}
