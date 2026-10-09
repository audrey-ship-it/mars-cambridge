// FCE Writing (Paper 2) — Cambridge English First 4（标准版4）Test 3
// 题面逐字转录自书 60–61（PDF 第 61–62 页，扫描件视觉转录，scripts/fce8-render.mjs 分别以 scale 6 与 scale 7
// 两遍独立渲染逐字 OCR 核对，两遍结果一致）。
// 答案/范文来源：Sample Writing answers 章（书 100–108 / PDF 101–109）官方收录 8 篇考生答卷（Sample A–H），
// 各篇后附 Content / Communicative Achievement / Organisation / Language 四维评分表与逐条考官点评；
// 书 60 页脚箭头指向 p. 105（Test 3 Part 1 essay 范文）、书 61 页脚箭头指向 p. 106（Test 3 Part 2 范文）；
// 按章内顺序两者应为 Sample E / F（书 102=Sample B、书 103=Sample C 已真实读图核验，E/F 字母未逐一核验）。
// 转录说明：Part 1 情境句 "Now, your English teacher" 带逗号；Essay 框题为完整句引号内置句号
// （'...should not be allowed.'）+ 居中第二行 "What do you think?"（非 "Do you agree?"）；
// 本套 notes 为大写开头的完整句且各带句号（与 T1/T2 小写短语式不同），第 3 条为点线 + "(your own idea)"；
// Q2 为收件框（"Subject:" 粗体 + "What to study"），正文含撇号缩写 I'm / can't，落款 "Best wishes" + "Nick" 两行；
// Q3 情境句为一般现在时 "You see this notice on a website."（句号结尾），框眉 "Articles wanted" 衬线粗体、
// 标题 "Relaxation" 居中、末行 "The best articles will be published on our website."（on our website）；
// Q4 情境句 "You have seen this notice in a magazine."，框眉 "Reviews wanted"、标题 "Restaurants for special occasions"、
// "In your review you should:" 冒号且 review 后无逗号、两条 bullet 仅末条带句号、末行 "The best reviews will be published next month."。
// 含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-4-test3-writing',
    title: 'FCE 标准版真题 4 · Test 3 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Writing',
    pages: '书 60–61',
    source: '标准版4 First 4.pdf（用户原件扫描版）',
    answerSource:
      'Sample Writing answers 章（书 100–108 / PDF 101–109）官方样例与四维评分表及考官点评：' +
      '书 60 页脚箭头指向 p. 105（Test 3 Part 1 essay 范文）、书 61 页脚箭头指向 p. 106（Test 3 Part 2 范文）；' +
      '按章内顺序对应 Sample E / F（书 102=Sample B、书 103=Sample C 已真实读图核验，E/F 字母未逐一核验）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about advertising. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'Advertisements which are aimed at children should not be allowed.' What do you think?",
      notes: ['They can be entertaining and fun.', 'They encourage unnecessary spending.', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'email',
          context: 'You have received this email from your Canadian friend, Nick.',
          boxTitle: 'Subject: What to study',
          prompt:
            "I have to decide what subject to study at university next year. I'm good at English Literature, Engineering and History, and I like them all equally. But I just can't make up my mind which one to choose.\n\n" +
            'What do you think I should do?\n\n' +
            'Best wishes\nNick',
          taskLine: 'Write your email.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this notice on a website.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Relaxation',
          prompt: 'What does relaxation mean to you and how do you usually relax? Why is it important for people to relax?\nThe best articles will be published on our website.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'review',
          context: 'You have seen this notice in a magazine.',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Restaurants for special occasions',
          prompt:
            'We are looking for reviews of restaurants which are good places to celebrate special occasions. In your review you should:\n' +
            '• describe the restaurant and the food it serves\n' +
            '• say what special occasions you would recommend the restaurant for.\n' +
            'The best reviews will be published next month.',
          taskLine: 'Write your review.',
        },
      ],
    },
  },
};
