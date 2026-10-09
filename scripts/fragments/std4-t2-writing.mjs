// FCE Writing (Paper 2) — Cambridge English First 4（标准版4）Test 2
// 题面逐字转录自书 40–41（PDF 第 41–42 页，扫描件视觉转录，scripts/fce8-render.mjs 分别以 scale 6 与 scale 7
// 两遍独立渲染逐字 OCR 核对，两遍结果一致）。
// 答案/范文来源：Sample Writing answers 章（书 100–108 / PDF 101–109）官方收录 8 篇考生答卷（Sample A–H），
// 各篇后附 Content / Communicative Achievement / Organisation / Language 四维评分表与逐条考官点评；
// 书 40 页脚箭头指向 p. 103、书 41 页脚箭头指向 p. 104；书 103 页（PDF 104）经真实读图确认为 Sample C
// （Test 2, Question 1 – Essay，sport 议论文范文，正文提及 learning teamwork / people who hate sport，与本题面互证）；
// p. 104 为 Test 2 Part 2 范文（按章内顺序应为 Sample D，样本字母未逐一核验）。
// 转录说明：Part 1 情境句 "Now, your English teacher" 带逗号，Q2 情境句 "Now your teacher" 无逗号；
// Essay notepad 内 notes 前有 "Write about:" 标签，第 3 条 note 原书为点线 + "(your own idea)"；
// Q2 三条 bullet 仅末条带句号；Q3 引导句以句号结尾（非冒号）、框眉 "Articles wanted" 衬线粗体、
// 标题 "Useful advice" 居中、正文为 "Write us an article explaining what the advice was."；
// Q4 引导句 "You have seen this advertisement online." 以句号结尾（非冒号）、框题 "Wanted – Tourist Website Designer"
// 为 en dash 两侧带空格、收件人 Adam Jones, Tourist Officer、末条 bullet 带句号。含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-4-test2-writing',
    title: 'FCE 标准版真题 4 · Test 2 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Writing',
    pages: '书 40–41',
    source: '标准版4 First 4.pdf（用户原件扫描版）',
    answerSource:
      'Sample Writing answers 章（书 100–108 / PDF 101–109）官方样例与四维评分表及考官点评：' +
      '书 40 页脚箭头指向 p. 103、书 41 页脚箭头指向 p. 104；书 103 页（PDF 104）经真实读图确认为 Sample C' +
      '（Test 2, Question 1 – Essay，sport 议论文范文，正文提及 learning teamwork / people who hate sport，与本题面互证）；' +
      'p. 104 为 Test 2 Part 2 范文（按章内顺序应为 Sample D，样本字母未逐一核验）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about sport. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'All students should have to do sport at school.' Do you agree?",
      notes: ['learning teamwork', 'some people hate sport', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'report',
          context: "You have been on a week's course to improve your speaking and listening skills in English. Now your teacher has asked you to write a report about your experience. In your report, you should:",
          mustInclude: ['say when and where the course took place', 'describe what you did during the course', 'recommend any improvements you think could be made to the course.'],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You have seen this notice in an English-language magazine.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Useful advice',
          prompt: 'What is the most useful advice you have ever been given? Write us an article explaining what the advice was. Why was it so useful to you and what effect has it had on your life?\nThe best articles will be published in our magazine.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'letter',
          context: 'You have seen this advertisement online.',
          boxTitle: 'Wanted – Tourist Website Designer',
          prompt:
            'We are looking for someone to design a tourist website for your local area. Write to Adam Jones, Tourist Officer, explaining why you are suitable for the job. You should:\n' +
            '• have good knowledge of your local area\n' +
            '• be interested in web design\n' +
            '• be able to communicate well in English.',
          taskLine: 'Write your letter of application.',
        },
      ],
    },
  },
};
