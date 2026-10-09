// FCE Writing (Paper 2) — Cambridge First for Schools 3 · Test 1（书页眉印为 Test 1，与仓库编号一致）
// 题面逐字转录自书 20–21（PDF 第 22–23 页，扫描件视觉转录；PDF 页码 = 书页 + 2，Part 2 页取自 s3-l-t1/page-023.png）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：essay notes 第 3 条为点线 + "(your own idea)"；
// Part 2 仅 Q2–Q4（2015 改版题型，无 set book Q5）；Q2 方框标题斜体、Q4 方框标题加粗（纯文本转录不保留样式）。

export default {
  meta: {
    id: 'fce-schools-3-test1-writing',
    examKey: 'fce-schools-3-test1',
    title: 'FCE 校园版真题 3 · Test 1 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 3,
    test: 1,
    paper: 'writing',
    pages: '书 20–21（PDF 22–23）',
    source: 'FIRST3  青少版.pdf',
    answerSource: '无（写作无标准答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
      type: 'essay',
      context: 'In your English class you have been talking about decisions which teenagers sometimes have to make. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: 'Is it better for teenagers to make their own decisions or to ask for advice from other people?',
      notes: ['deciding which subjects to study', 'choosing clothes', '...(your own idea)'],
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
          context: 'You see this announcement in an international e-magazine about the environment:',
          boxTitle: 'Articles wanted',
          boxHeading: 'Inventions and the environment',
          prompt: 'In your opinion, which invention has had a good effect on the environment and which invention has had a bad effect? Why?\nThe best articles will appear online next week.',
          taskLine: 'Write your article.',
        },
        {
          q: 3,
          genre: 'email',
          context: 'You have received this email from your English friend, Naomi:',
          prompt: "Hi – my family's moving house next month. I know you moved house recently, too, so do you have any advice for me? I'm also a bit worried about living in a new area and making new friends.\nHave you got any suggestions?\nThanks\nNaomi",
          taskLine: 'Write your email.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this announcement in a new English-language magazine for schools:',
          boxTitle: 'Stories wanted',
          prompt: 'We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nJess opened the envelope, wondering who it could be from.\nYour story must include:\n• an invitation\n• a surprise',
          mustInclude: ['an invitation', 'a surprise'],
          taskLine: 'Write your story.',
        },
      ],
    },
  },
};
