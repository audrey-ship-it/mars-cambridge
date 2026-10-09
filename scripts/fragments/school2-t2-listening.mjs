// Source: Cambridge First Certificate English Tests for schools 2.PDF
// Listening: Test 6（Part 1 Q1-4 书页44，Q5-8 书页45；Part 2 书页46；Part 3 书页47；Part 4 Q24-28 书页48、Q29-30 书页49）
// 音频：/audio/fce/school2/school2-t2-p1.mp3 ~ school2-t2-p4.mp3（整 Part 一条）
// 答案：未转录，待核对（answerSource 待核对）

export default {
  examId: 'fce-schools-2-test2-listening',
  examKey: 'fce-schools-2-test2',
  meta: {
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 2,
    test: 2,
    paper: 'listening',
    pages: '书44–49',
    source: 'Cambridge First Certificate English Tests for schools 2.PDF',
    answerSource: '书末 Key（待核对）',
    verified: false,
    audio: '/audio/fce/school2/school2-t2-p{p}.mp3',
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/school2/school2-t2-p1.mp3',
      items: [
        {
          scenario: "You hear two friends talking about a boy who's just completed a trek to the South Pole.",
          q: 'What do they agree about?',
          opts: [
            'It must have been difficult being away from friends.',
            'He must be strong mentally as well as physically.',
            "They'd like to do something as extraordinary.",
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a news item about the penguins at Edinburgh Zoo in Scotland.',
          q: 'What is the speaker explaining?',
          opts: [
            'how penguins came to be at the zoo',
            'how young penguins are looked after at the zoo',
            'how successful penguin breeding programmes have been at the zoo',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear two friends talking about celebrating Chinese New Year.',
          q: 'What did the girl find most memorable about the experience?',
          opts: [
            'making preparations in a Chinese home',
            'watching a friend in a Chinese parade',
            'trying typical Chinese food',
          ],
          answer: 0,
        },
        {
          scenario: 'You hear a radio report about a teenager who won a science competition.',
          q: 'What is the speaker doing?',
          opts: [
            'explaining her reasons for entering',
            'describing the topic of her project',
            'giving information about her background',
          ],
          answer: 2,
        },
        {
          scenario: 'You hear a woman talking about growing up as a junior chess champion.',
          q: 'What did she find difficult about it?',
          opts: [
            'the effect it had on her friendships',
            'the amount of travelling that was required',
            'the pressure from her parents to succeed',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two teenagers talking about a television drama.',
          q: 'What do they agree about it?',
          opts: [
            'The humour was unconvincing.',
            'The storyline was hard to follow.',
            'The action scenes were badly done.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear a boy talking about manga comic books.',
          q: 'He thinks some people dislike them because of',
          opts: [
            'the predictable stories.',
            'the particular artistic style.',
            'the uninspiring characters.',
          ],
          answer: 1,
        },
        {
          scenario: 'You hear two students talking about a visit to a gym.',
          q: 'What do they agree about it?',
          opts: [
            "The equipment wasn't appropriate for them.",
            'The people there made them feel uncomfortable.',
            'The music gave them a more positive experience.',
          ],
          answer: 0,
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a talk by a man called Luke Harris who is a sports photographer. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/school2/school2-t2-p2.mp3',
      notes: 'The sports photographer',
      items: [
        {
          q: "Luke's interest in sports photography started when he attended a ____ competition.",
          answer: "diving",
        },
        {
          q: 'One sports photographer Luke met told him that ____ was the key thing in becoming successful.',
          answer: "imagination",
        },
        {
          q: "On Luke's first day working for a local newspaper, the type of weather that caused difficulty for him was ____ .",
          answer: "heavy rain/rain",
        },
        {
          q: 'When covering unfamiliar sports, Luke says that finding out about the ____ of people involved is the most important thing.',
          answer: "personality/personalities",
        },
        {
          q: 'The people Luke most enjoys taking photographs of are the ____ .',
          answer: "fans",
        },
        {
          q: "Luke's favourite picture of last year was taken next to the ____ at a sporting event.",
          answer: "running track/track",
        },
        {
          q: "Luke says that it's hard to show ____ in photographs of big sporting events.",
          answer: "the humour/humor/humour/humor",
        },
        {
          q: "Luke doesn't mind if the ____ isn't perfect when he takes photographs.",
          answer: "light",
        },
        {
          q: "Luke admits that he doesn't much enjoy the ____ that is part of his job.",
          answer: "travel/traveling/travelling",
        },
        {
          q: "The name of Luke's favourite stadium is ____ .",
          answer: "parkhead/park head",
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which teenagers are talking about learning geography. For questions 19–23, choose from the list (A–H) what each speaker says about the experience. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/school2/school2-t2-p3.mp3',
      options: [
        { label: 'A', text: 'I enjoy the lessons much more than I used to.' },
        { label: 'B', text: 'I wish we spent more time studying the subject at school.' },
        { label: 'C', text: "I've really enjoyed studying how different landscapes are formed." },
        { label: 'D', text: 'A relative encouraged my initial interest in the subject.' },
        { label: 'E', text: "Things I've learnt in the lessons have proved useful outside school." },
        { label: 'F', text: "My friends don't share my enthusiasm for the lessons." },
        { label: 'G', text: 'Recent lessons have focussed on an interesting new topic.' },
        { label: 'H', text: 'I have particularly enjoyed studying outside the classroom.' },
      ],
      items: [
        { speaker: 'Speaker 1' , answer: 'G' },
        { speaker: 'Speaker 2' , answer: 'H' },
        { speaker: 'Speaker 3' , answer: 'E' },
        { speaker: 'Speaker 4' , answer: 'A' },
        { speaker: 'Speaker 5' , answer: 'C' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a young songwriter called Liz Stewart, in which she answers questions sent in by her fans. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/school2/school2-t2-p4.mp3',
      items: [
        {
          q: 'How did Liz feel about playing music as a child?',
          opts: [
            'pleased that her father made her do it',
            'reluctant to do it in front of other people',
            'determined to do it like other musicians',
          ],
          answer: 1,
        },
        {
          q: "As a teenager, Liz's musical tastes",
          opts: [
            'changed as a result of what she saw on television.',
            "were influenced by her parents' preferences.",
            'were very different from other people her age.',
          ],
          answer: 2,
        },
        {
          q: 'What does Liz say about the songs she writes?',
          opts: [
            'They describe a difficult time in her life.',
            'They include stories that teenagers have passed on to her.',
            'They are based on other people\'s experiences.',
          ],
          answer: 0,
        },
        {
          q: 'What does Liz say about writing new songs?',
          opts: [
            'She accepts that for long periods she doesn\'t produce much.',
            'She is convinced that she should review her work carefully.',
            'She often changes her mind about a song after talking to friends.',
          ],
          answer: 0,
        },
        {
          q: 'When asked about the ceremony where she won an award, Liz',
          opts: [
            'appreciated being told why the judges liked her work.',
            'regretted not preparing for the possibility of winning.',
            'disapproved of the attention given to well-known stars.',
          ],
          answer: 1,
        },
        {
          q: 'How does Liz feel about her book on song writing?',
          opts: [
            'concerned that it reveals too much of her personality',
            'worried about it affecting her own music',
            'unsure whether it has an original approach',
          ],
          answer: 0,
        },
        {
          q: 'What does Liz say she wants to do to help her write?',
          opts: [
            'cut back on her busy social life',
            'be more physically active',
            'move to a different location',
          ],
          answer: 2,
        },
      ],
    },
  },
}
