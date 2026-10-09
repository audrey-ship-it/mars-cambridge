// FCE Writing (Paper 2) — Cambridge English First 2（标准版2）Test 1（书内印作 Test 5）
// 题面逐字转录自书 20–21（PDF 第 21–22 页，扫描件视觉转录，scripts/fce8-render.mjs 渲染核对）。
// 答案/范文来源：本书官方未附写作范文。已核实 Test 5 Key（书 120 / PDF 121）起的 Key 区
//（书 119–159 / PDF 120–160）：各套 Key 的 Writing 栏仅有说明
// "Candidate responses are marked using the assessment scale on pages 107–108."，无 sample/model answers。
// 转录说明：Essay notes 第 3 条原文为三点无空格 "...(your own idea)"；含撇号字符串一律用双引号包裹。

export default {
  meta: {
    id: 'fce-standard-2-test1-writing',
    title: 'FCE 标准版真题 2 · Test 1 Writing',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Writing',
    pages: '书 20–21',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '本书官方未附范文（Test 5 Key 书 120 / PDF 121 的 Writing 栏仅注明按书 107–108 评分量表评分；Key 区书 119–159 / PDF 120–160 已逐页核实无 sample answers）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: "In your English class you have been talking about modern entertainment. Now, your English teacher has asked you to write an essay.\n\nWrite an essay using all the notes and giving reasons for your point of view.",
      prompt: 'Some people say that young people can only entertain themselves in front of a screen. What do you think?',
      notes: ['why screen entertainment is so popular', 'books and reading', '...(your own idea)'],
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
          context: 'You have received an email from your English-speaking friend, Tom:',
          prompt: "As you know, my mum and dad own a restaurant and want me to work there when I leave college. However, I'm still really keen to be a journalist. What do you think I should do?",
          taskLine: 'Write your email.',
        },
        {
          q: 3,
          genre: 'report',
          context: 'Your local government wants to improve your town centre and make it better for local people. Your college principal has asked students to write a report on the situation to send to the local government. In your report you should:',
          mustInclude: ['Describe some of the problems in the town centre', 'Suggest, with reasons, what improvements should be made to solve these problems'],
          taskLine: 'Write your report.',
        },
        {
          q: 4,
          genre: 'article',
          context: 'You see this notice in an English-language magazine:',
          prompt: "We're looking for articles about good luck.\nWrite an article telling us about something lucky that happened to you and what effect this had.",
          taskLine: 'Write your article.',
        },
      ],
    },
  },
};
