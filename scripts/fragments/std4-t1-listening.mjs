// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 22–27（PDF 23–28），答案核对自 Test 1 answer key（Listening 区在书 110 / PDF 111）
// 音频：/audio/fce/std4/std4-t1-p1.mp3 ~ std4-t1-p4.mp3（整 Part 一条）
// 注：书 24 页 Part 2 印刷小标题为 "Volunteering in the Ecuadorian Cloud Forest"（数据结构无对应字段，记录于此备查）。
// 注：Key 中 Part 2 为流式排版，第二行行首的 "Garden" 为第 11 题答案 "Medicine Garden" 的换行续词（第 1 行已容纳 9/10/11 三项），
//     故 Q9 记为 International Conservation、Q11 记为 Medicine Garden。

export default {
  meta: {
    id: 'fce-standard-4-test1-listening',
    title: 'FCE 标准版真题 4 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 22–27',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 1 answer key，书110（PDF111）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking about learning to play the piano.',
          q: 'How does she feel about it?',
          opts: [
            'determined not to give up',
            'disappointed at her lack of progress',
            'embarrassed that she rarely practises',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear a woman telling a friend about having a celebration dinner.',
          q: 'How does the woman feel about it?',
          opts: [
            'proud of the meal that she prepared',
            'pleased that everyone enjoyed the evening',
            'relieved that there was enough to eat',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: 'You hear a man telling a friend about a visit to a museum.',
          q: 'What does he say about the visit?',
          opts: [
            'It inspired him to take up a hobby.',
            "It was more interesting than he'd expected.",
            'It would have been more enjoyable on another day.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear two media students talking about a TV advert they have seen.',
          q: 'What do they agree about the advert?',
          opts: [
            'It was cleverly made.',
            'It was harmless fun.',
            'It was aimed at a particular age group.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear two people talking about a work colleague called Judy.',
          q: 'What is the man doing when he speaks?',
          opts: [
            "praising Judy's enthusiasm",
            "questioning Judy's attention to detail",
            'expressing sympathy for Judy',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          scenario: 'You hear two friends talking about a local project to start a community garden.',
          q: 'What does the man think about the project?',
          opts: [
            'It seems badly organised.',
            "It's probably over-ambitious.",
            'It risks being too costly.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          scenario: "You hear two friends discussing watching films based on books.",
          q: "The woman enjoys watching films based on books she's read because",
          opts: [
            'the book brings an added level of understanding to the film.',
            'it is interesting to see another interpretation of the story.',
            'she likes to spot where the film differs from the book.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          scenario: 'You hear a man telling a friend about a new sports centre.',
          q: 'For which sport is it optional to join a membership scheme?',
          opts: ['swimming', 'gym', 'athletics'],
          answer: 2,
          explanation: '官方答案为 C。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a student called Petra Dean talking about her recent work experience as a volunteer in the Cloud Forest in Ecuador in South America. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t1-p2.mp3',
      items: [
        {
          q: 'Petra is currently studying ____ at university.',
          answer: ['International Conservation'],
          show: 'International Conservation',
          explanation: '官方答案 International Conservation：她在大学学习的专业。',
        },
        {
          q: 'Petra was surprised that she had to travel by ____ for the last stage of her journey to the Cloud Forest.',
          answer: ['donkey'],
          show: 'donkey',
          explanation: '官方答案 donkey：旅程最后一段她需骑驴前行。',
        },
        {
          q: 'Working in what was known as the ____ gave Petra particular satisfaction.',
          answer: ['Medicine Garden'],
          show: 'Medicine Garden',
          explanation: '官方答案 Medicine Garden：在被称为 "Medicine Garden" 的地方工作让她特别满足。',
        },
        {
          q: 'Petra was impressed by the ____ she saw on a daily basis.',
          answer: ['storms'],
          show: 'storms',
          explanation: '官方答案 storms：她每天见到的暴风雨令她印象深刻。',
        },
        {
          q: "Petra didn't enjoy trying to control the ____ when taking the milk down the mountain.",
          answer: ['bicycle', 'bike'],
          show: 'bicycle / bike',
          explanation: '官方答案 bicycle/bike：Key 给出两种写法，驮奶下山时难以控制自行车。',
        },
        {
          q: 'As part of the forest programme, Petra had to check the ____ of the trees.',
          answer: ['growth'],
          show: 'growth',
          explanation: '官方答案 growth：她需检查树木的生长情况。',
        },
        {
          q: 'One survival skill that Petra learnt was how to make ____ in the trees.',
          answer: ['shelters'],
          show: 'shelters',
          explanation: '官方答案 shelters：她学会在树上搭建庇护所。',
        },
        {
          q: "Visiting ____ that are now in a state of ruin was Petra's most memorable free time activity.",
          answer: [
            'villages',
            'the villages',
            'ancient villages',
            'old villages',
            'the ancient villages',
            'the old villages',
          ],
          show: '(the) (ancient/old) villages',
          explanation:
            '官方答案 (the) (ancient/old) villages：the 与 ancient/old 均为可选项，按 Key 展开为 6 种组合。',
        },
        {
          q: "In the reserve, Petra's favourite place to spend the evening was the ____",
          answer: ['terrace'],
          show: 'terrace',
          explanation: '官方答案 terrace：她最喜欢在露台上度过傍晚。',
        },
        {
          q: 'Petra regretted not packing sufficient ____ in her luggage.',
          answer: ['suncream', 'sun-cream'],
          show: 'sun(-)cream',
          explanation: '官方答案 sun(-)cream：Key 中连字符为可选，两种写法均算对。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people talk about their jobs on a cruise ship. For questions 19–23, choose from the list (A–H) what each speaker says about working on a cruise ship. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t1-p3.mp3',
      options: [
        { label: 'A', text: 'The staff can choose which cruise to go on.' },
        { label: 'B', text: 'The staff tend to be young.' },
        { label: 'C', text: 'The jobs are well paid.' },
        { label: 'D', text: 'The staff can continue their education on board.' },
        { label: 'E', text: 'The promotion prospects are good.' },
        { label: 'F', text: 'The staff accommodation is of a high standard.' },
        { label: 'G', text: 'The lifestyle is glamorous.' },
        { label: 'H', text: 'The work is suitable for couples.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: '官方答案 E。' },
        { speaker: 'Speaker 2', answer: 'F', explanation: '官方答案 F。' },
        { speaker: 'Speaker 3', answer: 'B', explanation: '官方答案 B。' },
        { speaker: 'Speaker 4', answer: 'H', explanation: '官方答案 H。' },
        { speaker: 'Speaker 5', answer: 'D', explanation: '官方答案 D。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a man called Guy Riordan, who works as a stuntman performing dangerous scenes in movies. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t1-p4.mp3',
      items: [
        {
          q: 'What does Guy say about the first time he worked with a team of other stuntmen?',
          opts: [
            'He was very unsure of his talents.',
            'He was uncomfortable about putting his trust in others.',
            'He was surprised at the risks some people took.',
          ],
          answer: 1,
          explanation: '官方答案为 B。',
        },
        {
          q: 'For Guy, the most difficult part of being a stuntman is',
          opts: [
            'competing against others for roles.',
            'avoiding injury.',
            'trying to improve constantly.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
        {
          q: 'What does Guy say was hard about performing in the movie Raw Stuff?',
          opts: [
            'falling in the right place',
            'having to carry heavy loads',
            'getting to the top of a mountain',
          ],
          answer: 0,
          explanation: '官方答案为 A。（Raw Stuff 为书内斜体电影名）',
        },
        {
          q: 'When asked about being a stunt double for the actor Marty Walker, Guy says',
          opts: [
            "he admires Marty's ability to change his body shape for films.",
            'he feels pleased when Marty plays the parts of action heroes.',
            "he respects Marty's willingness to act in some dangerous scenes.",
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'What was satisfying for Guy about performing in the film Light at Dawn?',
          opts: [
            'getting the chance to have a speaking role',
            'working with a large film crew',
            'achieving what the director wanted',
          ],
          answer: 2,
          explanation: '官方答案为 C。（Light at Dawn 为书内斜体电影名）',
        },
        {
          q: 'What has changed for Guy about the movie industry recently?',
          opts: [
            'People working in it are more serious than before.',
            'He has to do more work for the same money.',
            'Stunt performers are less frequently required.',
          ],
          answer: 0,
          explanation: '官方答案为 A。',
        },
        {
          q: 'Guy advises anyone interested in becoming a movie stunt performer',
          opts: [
            'to develop as wide a range of stunt skills as possible.',
            'to find jobs by using a good agent.',
            'to be prepared to do other types of work as well.',
          ],
          answer: 2,
          explanation: '官方答案为 C。',
        },
      ],
    },
  },
}
