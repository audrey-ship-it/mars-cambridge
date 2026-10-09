// FCE Writing (Paper 2) — Cambridge English First 3（标准版3）Test 4
// 题面逐字转录自书 86–87（PDF 第 88–89 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书 Marks and results 区（书 107–119 / PDF 109–121）官方收录 8 篇考生答卷样例（sample answers）
// 并附分项评分与考官点评，其中 Test 4 对应 Sample G（Q1 essay，书 115 / PDF 117）与 Sample H（Q3 review，书 116 / PDF 118）；
// 各套 Key（Test 4 Key 书 156–167 / PDF 158–169）的 Writing 栏仅注明按书 107–108 评分量表评分，
// Key 区已逐页核实，其余均为听力答案与 Transcript；书 168 起为空白 Sample answer sheets，全书无更多范文。
// 转录说明：essay prompt 原书无引号；Q2 情境句为 "Your English teacher has now asked you..."，bullets 小写起首、末条带句号；
// Q3 情境句原文即 "You have seen this notice in an English online magazine:"（介词短语为 English online，非 English-language，已放大核对）；
// Q4 框题 "Wanted: Walking guides"，bullets "have experience of walking 15+ kms a day"、
// 末条带句号，"organiser"/"Ms Sally Morley" 按原文。含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-3-test4-writing',
    title: 'FCE 标准版真题 3 · Test 4 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Writing',
    pages: '书 86–87',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '本书官方附考生答卷样例与考官点评：Marks and results 区（书 107–119 / PDF 109–121）含 8 篇 Writing sample answers，Test 4 对应 Sample G（Q1 essay，书 115 / PDF 117）与 Sample H（Q3 review，书 116 / PDF 118）；各套 Key（Test 4 Key 书 156–167 / PDF 158–169）Writing 栏仅注明按书 107–108 评分量表评分，Key 区逐页核实其余均为听力答案与 Transcript，无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about long-lasting products. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: 'Is it a good or bad thing to have products that last a long time?',
      notes: ['changing technology', 'fashion', '...(your own idea)'],
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
          context: 'In your English class you have been discussing the leisure activities, for example sports and clubs, available at your college. Your English teacher has now asked you to write a report. In your report, you should:',
          mustInclude: [
            'describe the current leisure facilities and activities in your college',
            'explain what improvements you would like to see',
            'say why these improvements would be popular with students.',
          ],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You have seen this notice in an English online magazine:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Interesting Exhibitions',
          prompt:
            'Have you been to an interesting exhibition recently? It could have been about art, photography, science or another subject. Write us a review:\n' +
            '• describing the exhibition\n' +
            '• explaining why you found it interesting\n' +
            '• saying which people you would recommend it to.\n' +
            'The best reviews will appear on the website.',
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'letter',
          context: 'You see this advertisement in a travel magazine:',
          boxTitle: 'Wanted: Walking guides',
          prompt:
            'We are looking for people to take tourist groups walking in your area. You should:\n' +
            '• have a broad knowledge of the countryside in your area\n' +
            '• have experience of walking 15+ kms a day\n' +
            '• be a good communicator in English.\n' +
            'To apply, write to the project organiser, Ms Sally Morley, explaining why you are suitable for the job.',
          taskLine: 'Write your letter of application.',
        },
      ],
    },
  },
};
