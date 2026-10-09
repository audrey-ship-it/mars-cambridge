// FCE Writing (Paper 2) — Cambridge English First 4（标准版4）Test 4
// 题面逐字转录自书 80–81（PDF 第 81–82 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染逐字 OCR 核对，
// 读取全程执行"页脚页码先行"反污染纪律，页脚 80/81 与箭头 p. 107/p. 108 均已核）。
// 答案/范文来源：Sample Writing answers 章（书 100–108 / PDF 101–109）官方收录 8 篇考生答卷（Sample A–H），
// 各篇后附 Content / Communicative Achievement / Organisation / Language 四维评分表与逐条考官点评；
// 书 80 页脚箭头指向 p. 107（Test 4 Part 1 essay 范文）、书 81 页脚箭头指向 p. 108（Test 4 Part 2 范文）；
// Test 4 Key 首页（书 145 / PDF 146）经真实读图核验仅含 Reading and Use of English key，无独立 Writing key 条目。
// 转录说明：Essay 框题为无引号直接问句 "Is it better to be part of a large family or a small family?"
// （居中，问号结尾，无 "Do you agree?" 行）；notes 前有 "Write about:" 标签，两条为小写短语（cost /
// learning from others，无句号），第 3 条为点线 + "(your own idea)"（与 T3 大写完整句式不同）；
// Q2 情境句 "You recently saw this notice in a magazine."（recently saw 过去时）、深底框 "Reviews wanted" +
// 居中衬线标题 "Useful books"、正文两行以句号分句、无 bullet；
// Q3 情境句 "You see this notice in a travel magazine."、框题 "Wanted – people to join Arctic expedition"
// （en dash 两侧带空格、people 小写）、正文两段含 organization / organizer（z 拼写）、"two-month expedition" 连字符、
// 收件人 "expedition organizer, Roger Beard"（姓名前后逗号）；
// Q4 情境句 "You see this announcement on an English-language website."（announcement）、框眉 "Articles wanted" 斜体、
// 标题 "An important decision" 斜体居中、正文含撇号 you've 及 "say...explain...and say..." 并列结构（and 前有逗号）。
// 含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-4-test4-writing',
    title: 'FCE 标准版真题 4 · Test 4 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Writing',
    pages: '书 80–81',
    source: '标准版4 First 4.pdf（用户原件扫描版）',
    answerSource:
      'Sample Writing answers 章（书 100–108 / PDF 101–109）官方样例与四维评分表及考官点评：' +
      '书 80 页脚箭头指向 p. 107（Test 4 Part 1 essay 范文）、书 81 页脚箭头指向 p. 108（Test 4 Part 2 范文）；' +
      '按章内顺序对应 Sample G / H（书 102=Sample B、书 103=Sample C 已真实读图核验，G/H 字母未逐一核验）；' +
      'Test 4 Key 首页（书 145 / PDF 146）经真实读图核验仅含 Reading and Use of English key，无独立 Writing key 条目',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about family life. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: 'Is it better to be part of a large family or a small family?',
      notes: ['cost', 'learning from others', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'review',
          context: 'You recently saw this notice in a magazine.',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Useful books',
          prompt:
            'Write us a review of a useful book which you have read.\n' +
            'In your review describe what the book is about, explain how it was useful to you and say why you would recommend it to others.',
          taskLine: 'Write your review.',
        },
        {
          q: 3,
          genre: 'letter',
          context: 'You see this notice in a travel magazine.',
          boxTitle: 'Wanted – people to join Arctic expedition',
          prompt:
            'Our organization is researching life in the Arctic. We are looking for people to join our two-month expedition next year. You should be able to work in a team, have skills that are useful in an Arctic environment and have a good level of English.\n' +
            'Write to expedition organizer, Roger Beard, explaining why you would be suitable to join our expedition.',
          taskLine: 'Write your letter of application.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this announcement on an English-language website.',
          boxTitle: 'Articles wanted',
          boxHeading: 'An important decision',
          prompt:
            "Write us an article about an important decision you've made. In your article you should say what you had to decide, explain how easy or difficult it was to make the decision, and say what effect it had on your life.",
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};
