// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 1 = 书内印 Test 5。Listening: 书页 22–27（PDF 23–28），答案核对自 Test 5 Key（Listening 区在书 121 / PDF 122，RUE Key 在书 120 / PDF 121）
// 音频：/audio/fce/std2/std2-t1-p1.mp3 ~ std2-t1-p4.mp3（整 Part 一条；p1=CD1 Track01，p2=CD1 Track03，p3=CD1 Track04，p4=CD1 Track06）
// 注：书 24 页第 14 空所在句印刷原文即为 "...hall of the local University."（University 大写，原书如此，按页面视觉转录原样保留）。
// 注：书 24 页 Part 2 印刷小标题为 "Volunteer at the Children's University"（数据结构无对应字段，记录于此备查）。

export default {
  meta: {
    id: 'fce-standard-2-test1-listening',
    title: 'FCE 标准版真题 2 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '书 121 / PDF 122',
    audioNote: '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear part of an interview with a crime writer.',
          q: 'What does he say about his home town?',
          opts: [
            'It was a good background for the writing he does.',
            'He generally feels uncomfortable returning there.',
            'People there tend to treat him differently now.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他谈到家乡为他的写作提供了背景。',
        },
        {
          scenario: 'You hear a careers adviser talking to a woman who has applied for two jobs.',
          q: 'What suggestion does he make?',
          opts: [
            'find out more information about the first job',
            'withdraw the application for the second job',
            'ask the first company to be flexible',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他建议她请第一家公司灵活通融。',
        },
        {
          scenario: 'You hear a girl talking about a psychology textbook.',
          q: 'What does she say about it?',
          opts: ['It is not very interesting.', 'It is good value for money.', 'It is going to come in useful.'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她认为这本教科书以后会派上用场。',
        },
        {
          scenario: 'You hear the mother of a famous skier talking about a competition.',
          q: 'She says that her daughter',
          opts: [
            'expected to win the competition.',
            "didn't tell her mother she was entering it.",
            'gave up her job to practise for it.',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，女儿报名参赛并没有告诉母亲。',
        },
        {
          scenario: 'You hear a film director talking about the actors she works with.',
          q: 'How does she feel about the actors in her current film?',
          opts: [
            'She sympathises with their problems.',
            'She admires the sacrifices they make.',
            'She approves of their attitudes.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她对演员们的态度表示认可。',
        },
        {
          scenario: 'You hear a man talking about his first job interview.',
          q: 'How did he feel during the interview?',
          opts: [
            'confident that he was right for the job',
            'embarrassed because of the long silences',
            'relieved he could answer most of the questions',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，面试时他确信自己适合这份工作。',
        },
        {
          scenario: 'You hear two friends talking about a popular television programme.',
          q: 'What is the programme about?',
          opts: ['retirement', 'cookery', 'teaching'],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，这档热门电视节目与烹饪有关。',
        },
        {
          scenario: 'You hear two people talking about a place they have visited.',
          q: 'What kind of place is it?',
          opts: ['a museum', 'a library', 'a shop'],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，他们谈论的地方是一座博物馆。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        "You will hear a girl called Laura Beamer talking about being a volunteer at a summer school for 7–14 year olds, which is called the Children's University. For questions 9–18, complete the sentences with a word or short phrase.",
      audio: '/audio/fce/std2/std2-t1-p2.mp3',
      items: [
        {
          q: "The Children's University was started by a ____ five years ago.",
          answer: ['local charity', 'charity'],
          show: '(local) charity',
          explanation: '官方答案 (local) charity：Key 中 local 为可选词，两种写法均算对。',
        },
        {
          q: "The focus of this year's Children's University was the topic of ____ .",
          answer: ['industry'],
          show: 'industry',
          explanation: '官方答案 industry：今年儿童大学的主题与工业（industry）有关。',
        },
        {
          q: "Laura's partner was Mark, who works as a ____ when he is not volunteering.",
          answer: ['lawyer'],
          show: 'lawyer',
          explanation: '官方答案 lawyer：Mark 不做志愿者时是一名律师。',
        },
        {
          q: "Laura's group of volunteers gave some workshops about how ____ is made.",
          answer: ['chocolate'],
          show: 'chocolate',
          explanation: '官方答案 chocolate：志愿者小组开设了巧克力制作工坊。',
        },
        {
          q: "Laura says the children had a booklet called a ' ____ ' which was stamped to show their progress.",
          answer: ['passport'],
          show: 'passport',
          explanation: '官方答案 passport：这本小册子如同护照，盖章记录进度。',
        },
        {
          q: 'Laura and the children went to the graduation ceremony in the ____ hall of the local University.',
          answer: ['concert'],
          show: 'concert',
          explanation: '官方答案 concert：毕业典礼在当地大学的音乐厅（concert hall）举行。',
        },
        {
          q: 'Some children received a ____ for attending a lot of workshops.',
          answer: ['gold medal each', 'gold medal', 'medal each', 'medal'],
          show: '(gold) medal (each)',
          explanation: '官方答案 (gold) medal (each)：Key 中 gold 与 each 均为可选词，四种写法均算对。',
        },
        {
          q: 'Laura said the scheme allowed her to develop skills such as ____ .',
          answer: ['problem-solving', 'solving problems'],
          show: 'problem-solving / solving problems',
          explanation: '官方答案 problem-solving / solving problems：Key 给出两种等价写法。',
        },
        {
          q: 'Laura will most probably become a ____ in the future.',
          answer: ['social worker'],
          show: 'social worker',
          explanation: '官方答案 social worker：她将来最可能成为一名社工。',
        },
        {
          q: 'Laura says she can give people in her audience something called an ____ for volunteers.',
          answer: ['information pack'],
          show: 'information pack',
          explanation: '官方答案 information pack：她可以给听众提供一份志愿者信息包。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        "You will hear five different people talking about why they have applied to go on a space journey to the planet Mars. For questions 19–23, choose from the list (A–H) each speaker's reason for applying to go on the trip to Mars. Use the letters only once. There are three extra letters which you do not need to use.",
      audio: '/audio/fce/std2/std2-t1-p3.mp3',
      options: [
        { label: 'A', text: 'to discover new natural resources' },
        { label: 'B', text: 'to learn new skills' },
        { label: 'C', text: 'to take advantage of a rare opportunity' },
        { label: 'D', text: 'to be involved in advancing scientific knowledge' },
        { label: 'E', text: 'to become a famous personality' },
        { label: 'F', text: 'to face an extreme challenge' },
        { label: 'G', text: 'to provide others with inspiration' },
        { label: 'H', text: 'to be among the first to have the experience' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'D', explanation: '官方答案 D：依据录音内容，这位说话者的申请理由是参与推进科学知识。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：依据录音内容，这位说话者想成为最早拥有这段经历的人。' },
        { speaker: 'Speaker 3', answer: 'F', explanation: '官方答案 F：依据录音内容，这位说话者把此行视为迎接极限挑战。' },
        { speaker: 'Speaker 4', answer: 'G', explanation: '官方答案 G：依据录音内容，这位说话者希望为他人带去激励。' },
        { speaker: 'Speaker 5', answer: 'C', explanation: '官方答案 C：依据录音内容，这位说话者视其为不容错过的难得机会。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a man called Mark Phillips, who is talking about his work as a potter. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t1-p4.mp3',
      items: [
        {
          q: 'Why did pottery not appeal to Mark when he was younger?',
          opts: [
            "He was put off by his mother's achievements.",
            'His many attempts always seemed to end in failure.',
            'He was too busy playing in a band to take an interest.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，母亲在陶艺上的成就反而让他提不起兴趣。',
        },
        {
          q: 'Why did Mark decide to take up pottery?',
          opts: [
            "His business wasn't as successful as he wanted it to be.",
            'He saw how enjoyable pottery classes could be.',
            'He realised he needed to be more creative.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他意识到自己需要更有创造力。',
        },
        {
          q: 'What did Mark say about being a student again?',
          opts: [
            'He missed having responsibility.',
            'He was made to feel that he was different.',
            'He felt physically challenged.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，重回课堂让他感到体力上吃不消。',
        },
        {
          q: 'Mark describes the pots he makes as',
          opts: [
            'reflecting shapes in nature.',
            'objects that are to be used.',
            "similar to his mother's in design.",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他强调自己做的陶器是供人使用的器物。',
        },
        {
          q: 'What has surprised Mark about the pottery community?',
          opts: [
            'how supportive they have been to a newcomer',
            'how willing other potters are to share ideas',
            'how content they are with their lifestyle',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，陶艺圈对新人的支持出乎他的意料。',
        },
        {
          q: 'What advice from his mother has Mark valued most?',
          opts: [
            'to concentrate all his efforts on perfecting pottery',
            'to remember the skill of potters from the past',
            'to be realistic about the money-making possibilities of pottery',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，母亲让他铭记过去陶工的技艺，这条建议他最看重。',
        },
        {
          q: 'In the future, Mark says he would like to be able to',
          opts: [
            'develop some new colours for his pots.',
            'exhibit his pots in a gallery.',
            'explore different techniques for making pots.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他希望未来能尝试不同的制陶技法。',
        },
      ],
    },
  },
}
