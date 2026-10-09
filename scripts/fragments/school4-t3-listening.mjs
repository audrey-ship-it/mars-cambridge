// Source: B2 FIRST 4 FOR SCHOOLS.pdf
// Listening: Test 3（Part 1 Q1-4 书62、Q5-8 书63；Part 2 书64；Part 3 书65；Part 4 Q24-28 书66、Q29-30 书67）
// 音频：/audio/fce/school4/school4-t3-p1.mp3 ~ school4-t3-p4.mp3（整 Part 一条）
// 答案：用户提供（已核对）

export default {
  examId: 'fce-schools-4-test3-listening',
  examKey: 'fce-schools-4-test3',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 4,
    test: 3,
    paper: 'listening',
    pages: '书62–67',
    source: 'B2 FIRST 4 FOR SCHOOLS.pdf',
    answerSource: '用户提供',
    verified: false,
    audio: '/audio/fce/school4/school4-t3-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school4/school4-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear a girl talking about making online videos.',
          q: 'What does she say about her experience of making online videos?',
          opts: [
            'She tried not to worry about what other people thought.',
            'She believes that using good quality equipment is essential.',
            'She was successful because she kept experimenting.',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a girl talking about some photos her dad has taken.',
          q: 'She suggests her dad put the set of photos together in order to',
          opts: [
            'assess the development of his skills.',
            'keep a record of important memories.',
            'provide him with work to display in public.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a young man talking about being an inventor.',
          q: 'How does he get ideas for new inventions?',
          opts: [
            'They are the result of observing daily life carefully.',
            'They come to him because he has a natural talent.',
            'They are related to things he has researched online.',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a teacher giving a talk to her class about bats.',
          q: 'What is the teacher doing during the talk?',
          opts: [
            'comparing the ways in which bats communicate',
            'explaining the diets that various species of bats require',
            'highlighting the methods bats use in order to survive',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a boy talking about going to take part in an archaeology project in Italy.',
          q: 'Why did he decide to join the project?',
          opts: [
            'to find out whether the subject would suit him as a career',
            'to establish whether his family has historical links with the area',
            'to contribute to what could be an exciting discovery',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a guide at a science museum talking about a new virtual reality device that visitors can try.',
          q: 'What does he think will impress them about the device?',
          opts: [
            'It offers them a range of different options.',
            'It gives them an alternative view of things.',
            'It provides them with a convincing experience.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two students talking about some research on listening to music while studying.',
          q: 'What do they agree about?',
          opts: [
            'the effect of listening to music with lyrics',
            'the value of doing research into a subject like music',
            'the way lively music can motivate you to work hard',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a radio presenter talking about something that happens in space.',
          q: 'What is his aim?',
          opts: [
            'to give information about it',
            'to explain how scientists discovered it',
            'to encourage people to look out for it',
          ],
          answer: 0,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a girl called Alison giving a class presentation about a holiday she had on a traditional sailing ship. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school4/school4-t3-p2.mp3',
      notes: 'Holiday on a traditional sailing ship',
      items: [
        {
          q: "Alison's holiday was paid for by an organisation that encourages young people's interest in (9) ________.",
          answer: "history",
        },
        {
          q: "The ship's captain said that people he referred to as (10) ________ were not welcome on the ship.",
          answer: "physical fitness",
        },
        {
          q: 'Alison was worried that she might not have the (11) ________ required.',
          answer: "watch",
        },
        {
          q: 'People on board the ship use the term (12) ________ to mean a four-hour period of work.',
          answer: "privacy",
        },
        {
          q: 'The lack of (13) ________ was the hardest thing for Alison to get used to.',
          answer: "heights",
        },
        {
          q: 'Alison overcame her fear of (14) ________ during the holiday.',
          answer: "playing cards",
        },
        {
          q: "Alison says that (15) ________ was the most popular free-time activity on the ship.",
          answer: "festival",
        },
        {
          q: 'Alison was disappointed to miss a (16) ________ in a port where the ship stopped.',
          answer: "stars",
        },
        {
          q: "Alison wasn't expecting to see so many (17) ________ when she was at sea.",
          answer: "warm",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about making a new friend. For questions 19–23, choose from the list (A–H) what each speaker says. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school4/school4-t3-p3.mp3',
      options: [
        { label: 'A', text: 'My first impressions of this person were wrong.' },
        { label: 'B', text: 'I had often noticed this person before.' },
        { label: 'C', text: 'We were introduced by a neighbour of mine.' },
        { label: 'D', text: 'We became close because of a difficult shared experience.' },
        { label: 'E', text: 'This person reminded me of someone else.' },
        { label: 'F', text: 'We were surprised to discover we had several things in common.' },
        { label: 'G', text: "We'd been in touch before we actually met." },
        { label: 'H', text: 'I nearly caused this person a problem.' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'H' },
        { speaker: 'Speaker 2' , answer: 'D' },
        { speaker: 'Speaker 3' , answer: 'A' },
        { speaker: 'Speaker 4' , answer: 'G' },
        { speaker: 'Speaker 5' , answer: 'E' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a young man called Oliver Stanford, who is talking about how he became a professional gardener. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school4/school4-t3-p4.mp3',
      items: [
        {
          q: 'Oliver first became interested in his family\'s garden when',
          opts: [
            'he saw how his mother\'s work had transformed it.',
            'he was given complete responsibility for it.',
            'he realised that no one else really cared about it.',
          ],
          answer: 2,
        },
        {
          q: 'Once Oliver had decided to become a professional gardener, he was',
          opts: [
            'disappointed not to find an appropriate university course.',
            'surprised at the amount of work involved in the training.',
            'unwilling to request financial help from his parents.',
          ],
          answer: 1,
        },
        {
          q: 'What does Oliver say about his job at a garden centre?',
          opts: [
            'He was determined not to be put off by the physical hardships.',
            'He found seeing the results of his work there very rewarding.',
            'He felt it was the most valuable career preparation he could have.',
          ],
          answer: 1,
        },
        {
          q: 'Oliver was confident he could be a successful gardener because he had',
          opts: [
            'developed the necessary organisational skills.',
            'shown a talent for designing gardens that people liked.',
            'learnt a lot about plants from other gardeners.',
          ],
          answer: 0,
        },
        {
          q: 'What has Oliver found while working as a gardener in a city?',
          opts: [
            "It is difficult to get his equipment into people's gardens.",
            'The deadlines he has to work to are tight.',
            "His customers' expectations are unrealistic.",
          ],
          answer: 2,
        },
        {
          q: 'Oliver describes one gardening job he disliked, because he had to',
          opts: [
            'use plants that he knew weren\'t right for the soil.',
            'dig up plants that were home to wildlife.',
            'replace an area of grass with large stones.',
          ],
          answer: 1,
        },
        {
          q: 'What does Oliver particularly value about his work?',
          opts: [
            'turning an unattractive place into somewhere beautiful',
            'having the opportunity to work with other people',
            'earning enough money to have a small garden of his own',
          ],
          answer: 0,
        },
      ],
    },
  },
}
