// FCE Writing (Paper 2) — Cambridge English First 3（标准版3）Test 3
// 题面逐字转录自书 64–65（PDF 第 66–67 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对，关键细节另以 scale 8 局部放大复核）。
// 答案/范文来源：本书 Marks and results 区（书 107–119 / PDF 109–121）官方收录 8 篇考生答卷样例（sample answers）
// 并附分项评分与考官点评，其中 Test 3 对应 Sample E（Q1 essay，书 113 / PDF 115）与 Sample F（Q2 article，书 114 / PDF 116）；
// 各套 Key（Test 3 Key 书 144–155 / PDF 146–157）的 Writing 栏仅注明按书 107–108 评分量表评分，
// Key 区已逐页核实，其余均为听力答案与 Transcript，无更多范文。
// 转录说明：essay prompt 原书带单引号；Q2 框题主题词 "Changes!" 带感叹号，而框眉 "Articles wanted"/"Reviews wanted"
// 均无感叹号；Q3 邮件框 "Subject: Learning English" 的冒号经 scale 8 放大核对确认；
// Q4 末条 bullet "why it's better than similar guidebooks." 带句号。含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-3-test3-writing',
    title: 'FCE 标准版真题 3 · Test 3 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Writing',
    pages: '书 64–65',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '本书官方附考生答卷样例与考官点评：Marks and results 区（书 107–119 / PDF 109–121）含 8 篇 Writing sample answers，Test 3 对应 Sample E（Q1 essay，书 113 / PDF 115）与 Sample F（Q2 article，书 114 / PDF 116）；各套 Key（Test 3 Key 书 144–155 / PDF 146–157）Writing 栏仅注明按书 107–108 评分量表评分，Key 区逐页核实其余均为听力答案与 Transcript，无更多范文',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about advertising. Now, your English teacher has asked you to write an essay.\n\nWrite your essay using all the notes and giving reasons for your point of view.",
      prompt: "'Advertising is a very good thing for society.' Do you agree?",
      notes: ['keeping people informed', 'encouraging competition between companies', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Changes!',
          prompt: 'Some people love changes, others dislike them. What about you?\nWhich changes in your life have had a big effect on you?\nThe best articles will be printed next month.',
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'email',
          context: 'This is an email you have received from your English-speaking friend, Marcus:',
          prompt:
            "Subject: Learning English\n" +
            "Hi\n" +
            "I'm researching the ways people learn English in different countries. Can you write and tell me about the most popular ways of learning English for people in your country?\n" +
            'Write soon\n' +
            'Marcus',
          taskLine: 'Write your email.',
        },
        {
          q: 4,
          genre: 'review',
          context: 'You have seen this notice on a travel website:',
          boxTitle: 'Reviews wanted',
          boxHeading: 'Guidebooks for tourists',
          prompt:
            "We're looking for reviews of a good guidebook to your city or country.\n" +
            'In your review you should include information about:\n' +
            '• the contents of the book\n' +
            '• what makes the book useful and interesting\n' +
            "• why it's better than similar guidebooks.",
          taskLine: 'Write your review.',
        },
      ],
    },
  },
};
