// FCE Writing (Paper 2) — Cambridge First Certificate English Tests for Schools 1 · Test 4
// 题面逐字转录自书 86–87（PDF 第 85–86 页，扫描件视觉转录）。
// 答案/范文来源：官方 Writing assessment scale（无固定答案）。
// 转录说明：Part 1 essay 题干 "Do you think all young people should play a sport?" 无引号；
// Part 2 含 Q2–Q5，Q2 为 letter，Q4 故事开头 "I got to the station and waited nervously for the train to arrive."，Q5 为 Macbeth 三女巫议论文。

export default {
  meta: {
    id: 'fce-schools-1-test4-writing',
    examKey: 'fce-schools-1-test4',
    title: 'FCE 校园版真题 1 · Test 4 Writing',
    level: 'B2 First (FCE) Schools',
    collection: '校园版真题',
    book: 1,
    test: 4,
    paper: 'writing',
    pages: '书 86–87（PDF 85–86）',
    source: 'Cambridge First Certificate English Tests for schools 1.PDF',
    answerSource: '官方 Writing assessment scale（无固定答案）',
    verified: false,
  },
  parts: {
    1: {
      title: 'Part 1 · 必答议论文',
      instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style.',
      type: 'essay',
      context: 'In your English class you have been talking about playing different sports. Now your English teacher has asked you to write an essay for homework.\n\nWrite your essay using all the notes and giving reasons for your point of view.',
      prompt: 'Do you think all young people should play a sport?',
      notes: ['whether it is good for your health', 'what you learn from playing sport', '...(your own idea)'],
      wordRange: '140–190',
    },
    2: {
      title: 'Part 2 · 多选一',
      instruction: 'Write an answer to one of the questions 2–5 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
      type: 'choice',
      tasks: [
        {
          q: 2,
          genre: 'letter',
          context: 'You have just received this letter from your Canadian friend, Sam.',
          prompt: "As you know, I've just moved to another town and I'm starting at my new school next week. I'm really excited but I don't know anybody yet. What should I do to make friends at school? And how could I meet people near where I live?\nWrite and tell me what you think.\nSam",
          taskLine: 'Write your letter.',
        },
        {
          q: 3,
          genre: 'review',
          context: 'You recently saw this notice on an international film website for teenagers.',
          boxTitle: 'Reviews wanted',
          boxHeading: 'A film all teenagers should see',
          prompt: 'Which film would you recommend to young people of your age? Write a review telling us about the story and the main characters, and explain why you think it is a good film for teenagers to see.\nThe best reviews will be put on our website.',
          taskLine: 'Write your review.',
        },
        {
          q: 4,
          genre: 'story',
          context: 'You have seen this announcement in a new English-language magazine for schools:',
          boxTitle: 'Stories wanted',
          prompt: 'We are looking for stories for our new English-language magazine for teenagers. Your story must begin with this sentence:\nI got to the station and waited nervously for the train to arrive.\nYour story must include:\n• a meeting\n• a photograph',
          mustInclude: ['a meeting', 'a photograph'],
          taskLine: 'Write your story.',
        },
        {
          q: 5,
          genre: 'essay',
          context: 'Answer the following question based on the title below.\nMacbeth by William Shakespeare',
          prompt: 'Your English class has had a discussion about the characters in the story of Macbeth. Now your teacher has given you this essay for homework:\nWhy are the three witches important in the story of Macbeth?',
          taskLine: 'Write your essay.',
        },
      ],
    },
  },
};
