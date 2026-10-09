// FCE Writing (Paper 2) — Cambridge English First 3（标准版3）Test 2
// 题面逐字转录自书 42–43（PDF 第 44–45 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书 Marks and results 区（书 107–119 / PDF 109–121）官方收录 8 篇考生答卷样例（sample answers）
// 并附分项评分与考官点评，其中 Test 2 对应 Sample C（Q1 essay，书 111 / PDF 113）与 Sample D（Q4 email，书 112 / PDF 114）；
// 各套 Key（Test 2 Key 书 132–143 / PDF 134–145）的 Writing 栏仅注明按书 107–108 评分量表评分，
// Key 区已逐页核实，其余均为听力答案与 Transcript，无更多范文。
// 转录说明：essay prompt 原书无引号；Q2 框眉 "Reviews wanted" 无感叹号，"organised"/"practise" 为英式 s 拼写；
// Q4 邮件框含 "Subject: Where to study?" 行。含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-3-test2-writing',
    title: 'FCE 标准版真题 3 · Test 2 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Writing',
    pages: '书 42–43',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '本书官方附考生答卷样例与考官点评：Marks and results 区（书 107–119 / PDF 109–121）含 8 篇 Writing sample answers，Test 2 对应 Sample C（Q1 essay，书 111 / PDF 113）与 Sample D（Q4 email，书 112 / PDF 114）；各套 Key（Test 2 Key 书 132–143 / PDF 134–145）Writing 栏仅注明按书 107–108 评分量表评分，Key 区逐页核实其余均为听力答案与 Transcript，无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about self-employment. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: 'Is it better to be self-employed or to work for somebody else?',
      notes: ['being independent', 'job security', '...(your own idea)'],
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
          context: 'You have seen this notice in an online holiday magazine:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Sports Holidays',
          prompt: "We're looking for reviews of organised holidays where people can practise sports.\nWrite a review of the holiday, including information about the place, the sports, and how well organised the holiday was.",
          taskLine: 'Write your review.',
        },
        {
          q: 3,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Being famous for something',
          prompt: 'If you could be famous for something, what would you like to be famous for? Why?\nThe best articles will be printed next month.',
          taskLine: 'Write your article.',
        },
        {
          q: 4,
          genre: 'email',
          context: 'You receive this email from your English-speaking friend, Nico:',
          prompt:
            "Subject: Where to study?\n" +
            "Hi\n" +
            "I'm going to university next year. I can either go to the university in my home town and live at home, or study in another area and live away from home.\n" +
            'What do you think I should do?\n' +
            'Write soon\n' +
            'Nico',
          taskLine: 'Write your email.',
        },
      ],
    },
  },
};
