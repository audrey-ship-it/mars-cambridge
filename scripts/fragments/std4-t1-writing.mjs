// FCE Writing (Paper 2) — Cambridge English First 4（标准版4）Test 1
// 题面逐字转录自书 20–21（PDF 第 21–22 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书官方附考生答卷样例与考官点评：Sample Writing answers 章（书 100–108 / PDF 101–109）收录 8 篇考生答卷
// （Sample A–H），各篇后附 Content / Communicative Achievement / Organisation / Language 四维评分表与逐条考官点评；
// 其中 Test 1 对应 Sample A（Q1 essay，书 100–101 / PDF 101–102）与 Sample B（Q2 report，书 102 / PDF 103），
// 书 21/22 页脚箭头分别指向 p. 100（→ Sample A）与 p. 102（→ Sample B）；
// 章首页右上标注 "Additional sample Writing answers in Resource bank"，全书共 8 篇，恰为四套 Test 各 2 篇（每套 Part 1 一篇、Part 2 一篇）。
// 各套 Key（Test 1 Key 书 109 起 / PDF 110 起）已逐页核实：Reading and Use of English key（书 109 / PDF 110）与
// Listening key + tapescript（书 110–120 / PDF 111–121）中均无独立 Writing key 条目，Writing 仅按本书
// Sample Writing answers 章（书 100–108）官方样例与四维评分量表评分；书 168 起为空白 Sample answer sheets，全书无更多范文。
// 转录说明：Essay 框题引号内句号在引号内（'...to help other people.' Do you agree?）；第 3 条 note 原书为点线 + "(your own idea)"；
// Q2 末条 bullet 以句号结尾；Q3 框眉 "Articles wanted" 粗体无感叹号、标题 "A sense of humour"（英式拼写 humour）居中；
// Q4 框内 "Subject:" 粗体 + "Summer job"，邮件正文含撇号缩写 it'd / can't。含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-4-test1-writing',
    title: 'FCE 标准版真题 4 · Test 1 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Writing',
    pages: '书 20–21',
    source: '标准版4 First 4.pdf（用户原件扫描版）',
    answerSource:
      '本书官方附考生答卷样例与四维评分表及考官点评：Sample Writing answers 章（书 100–108 / PDF 101–109）收录 8 篇 sample answers（Sample A–H），' +
      'Test 1 对应 Sample A（Q1 essay，书 100–101 / PDF 101–102）与 Sample B（Q2 report，书 102 / PDF 103），书页脚箭头指向 p. 100 / p. 102 可互证；' +
      'Test 1 Key（书 109 起 / PDF 110 起）已逐页核实仅含 Reading and Use of English key 与 Listening key + tapescript，无独立 Writing key 条目，' +
      'Writing 按本书样例章四维评分量表评分；书 168 起为空白 Sample answer sheets，全书无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about helping other people. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'Everyone should do something regularly in their life to help other people.' Do you agree?",
      notes: ['the importance of friends and family', 'giving something back to society', '...(your own idea)'],
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
          context: 'Your English teacher has asked you to write a report on the cycling facilities in your area for the college magazine. In your report, you should:',
          mustInclude: ['explain what facilities are available for cyclists', 'describe popular places for cyclists to visit', 'recommend ways in which cycling can be made safer in your area.'],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You have seen this announcement in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'A sense of humour',
          prompt: 'What does having a good sense of humour mean? How important is it to see the funny side of life? Are there any disadvantages to laughing a lot?\nThe best articles will be published in our magazine.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'email',
          context: 'You receive this email from your English friend, Hannah.',
          boxTitle: 'Subject: Summer job',
          prompt: "I want to get a job in the summer. My uncle works for a publishing company and says I could work there. It'd be really interesting but they can't afford to pay me much. Or I could work in the local supermarket. The pay would be better but it'd be really boring. What should I do?",
          taskLine: 'Write your email.',
        },
      ],
    },
  },
};
