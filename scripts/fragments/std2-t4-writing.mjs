// FCE Writing (Paper 2) — Cambridge English First 2（标准版2）Test 4（书内印作 Test 8）
// 题面逐字转录自书 86–87（PDF 第 87–88 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对）。
// 答案/范文来源：本书官方未附写作范文。已核实 Test 8 Key（书 156 / PDF 157）的 Writing 栏
// 仅注明 "Candidate responses are marked using the assessment scale on pages 107–108."，
// 且 Key 区书 119–159 / PDF 120–160 逐页核实无 sample/model answers。
// 转录说明：Q2 报告要点在原书无底纹框、直接排 bullets，末条以句号结尾，用 mustInclude 承载；
// Q4 情境句原文为 "You see this in an English-language magazine."（句号结尾，无冒号）。
// 含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-2-test4-writing',
    title: 'FCE 标准版真题 2 · Test 4 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Writing',
    pages: '书 86–87',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（Test 8 Key 书 156 / PDF 157 的 Writing 栏仅注明按书 107–108 评分量表评分；Key 区书 119–159 / PDF 120–160 已逐页核实无 sample answers）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about learning history at school. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and giving reasons for your point of view.",
      prompt: "'Everyone should be taught the history of their own country.' Do you agree?",
      notes: ['what people can learn from the past', "it's more important to think about the future", '...(your own idea)'],
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
          context: 'Your English teacher has asked you to write a report on transport facilities in your area. In your report, you should:',
          mustInclude: ['describe the existing transport facilities', "explain what's good and bad about them", 'suggest how they could be improved in the future.'],
          taskLine: 'Write your report.',
        },
        {
          q: 3,
          genre: 'email',
          context: 'You have received this email from your English-speaking friend, Susan:',
          prompt:
            "From: Susan\n" +
            "Subject: Money!\n" +
            "Hi!\n" +
            "I've just won £1,000 in a photography competition. I could spend it all on a fantastic holiday or I could put it in my bank account, or I could give it to my parents who don't have much money.\n" +
            'What do you suggest I do?\n' +
            'Thanks,\n' +
            'Susan',
          taskLine: 'Write your email.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this in an English-language magazine.',
          boxTitle: 'Articles wanted',
          boxHeading: 'Being kind',
          prompt: "What does being kind mean to you?\nWhy is it important to be kind?\nWe will publish the best articles in the next magazine.",
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};
