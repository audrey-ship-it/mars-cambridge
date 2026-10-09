// FCE Writing (Paper 2) — Cambridge English First 3（标准版3）Test 1
// 题面逐字转录自书 20–21（PDF 第 22–23 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书 Marks and results 区（书 107–119 / PDF 109–121）官方收录 8 篇考生答卷样例（sample answers）
// 并附分项评分与考官点评，其中 Test 1 对应 Sample A（Q1 essay，书 109 / PDF 111）与 Sample B（Q2 report，书 110 / PDF 112）；
// 各套 Key（Test 1 Key 书 120–131 / PDF 122–133）的 Writing 栏仅注明按书 107–108 评分量表评分，
// Key 区已逐页核实，其余均为听力答案与 Transcript；书 168 起为空白 Sample answer sheets，全书无更多范文。
// 转录说明：Essay 第 3 条 note 原书为点线 + "(your own idea)"；Q2 情境句 "Now your English teacher" 无逗号、
// 末条 bullet 以句号结尾；Q3 框题 "Wanted: Restaurant reviewer"，编辑名 Phil Simms，末条 bullet "have a good level of English." 带句号；
// Q4 框眉 "Articles wanted" 无感叹号，主题词 Technology。含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-3-test1-writing',
    title: 'FCE 标准版真题 3 · Test 1 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Writing',
    pages: '书 20–21',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '本书官方附考生答卷样例与考官点评：Marks and results 区（书 107–119 / PDF 109–121）含 8 篇 Writing sample answers，Test 1 对应 Sample A（Q1 essay，书 109 / PDF 111）与 Sample B（Q2 report，书 110 / PDF 112）；各套 Key（Test 1 Key 书 120–131 / PDF 122–133）Writing 栏仅注明按书 107–108 评分量表评分，Key 区逐页核实其余均为听力答案与 Transcript，无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about money for sports people. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'Famous sports people are paid too much money.' Do you agree?",
      notes: ['the entertainment they provide', 'how hard they work', '...(your own idea)'],
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
          context: 'In your English class you have been discussing why parks and green spaces are important for people living in towns and cities. Now your English teacher has asked you to write a report. In your report, you should:',
          mustInclude: ['describe the parks and green spaces in your area', 'recommend ways of improving these green spaces', "say why these improvements would have a positive effect on people's lives."],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'letter',
          context: 'You see this advertisement in the online magazine Global Food:',
          boxTitle: 'Wanted: Restaurant reviewer',
          prompt:
            'We are looking for someone to write reviews of restaurants in your area. You should:\n' +
            '• be able to take photographs to go with your reviews\n' +
            '• be interested in different types of food\n' +
            '• have a good level of English.\n' +
            'Write to the magazine editor, Phil Simms, explaining why you are suitable for the job.',
          taskLine: 'Write your letter of application.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Technology',
          prompt: 'Which piece of technology would our lives be better without? Why?\nThe best articles will be printed next month.',
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};
