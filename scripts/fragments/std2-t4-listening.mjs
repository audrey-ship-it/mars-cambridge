// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 4 = 书内印 Test 8。Test 8 Listening: 书页 88–93（PDF 89–94，PDF 页 = 书页 + 1）
// 答案核对自 Test 8 Key（书 156 起 / PDF 157 起；Listening 区在书 157 / PDF 158）
// 音频：/audio/fce/std2/std2-t4-p1.mp3 ~ std2-t4-p4.mp3（整 Part 一条；p1=CD2 Track07，p2=CD2 Track09，p3=CD2 Track10，p4=CD2 Track12）
// 注：书 90 页 Part 2 版式为编号答题框（非 (N)……点线空位），按既有数据惯例以 ____ 表示空位；页面标题 "Expedition to South Pole"。
// 注：Key 第 11 题印作 "loneliness/lonelyness"（第二种为官方 Key 收录的拼写变体，原样照录），第 16 题印作 "half(-)way"。

export default {
  meta: {
    id: 'fce-standard-2-test4-listening',
    title: 'FCE 标准版真题 2 · Test 4 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 88–93',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 8 Key（书 156–157 / PDF 157–158，Listening 区在书 157 / PDF 158）',
    audioNote: '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t4-p1.mp3',
      items: [
        {
          scenario: "You hear two people talking about some music they're listening to.",
          q: 'What does the man say about the song?',
          opts: ['It cheers him up.', 'It reminds him of his family.', 'It inspired him to take up a musical instrument.'],
          answer: 2,
          explanation: '官方答案为 C：他说这首歌激励他开始学习一种乐器。',
        },
        {
          scenario: 'You hear part of a radio programme in which a teacher is talking about her own education.',
          q: 'Why did she become a teacher?',
          opts: [
            'She enjoyed her own time at school very much.',
            'She was encouraged to do so by colleagues.',
            'She wanted others to have the same opportunities as her.',
          ],
          answer: 2,
          explanation: '官方答案为 C：她当老师是想让其他人也能拥有和她一样的机会。',
        },
        {
          scenario: 'You hear a woman telling a friend about a new job she has.',
          q: 'What problem does she have with the job?',
          opts: [
            "being asked to do tasks she's not suited for",
            'being too busy at certain times of day',
            'being disrespected by some customers',
          ],
          answer: 0,
          explanation: '官方答案为 A：她对这份新工作的不满在于常被安排去做不适合自己的任务。',
        },
        {
          scenario: 'You hear two students talking about an architecture course.',
          q: 'What do they agree about?',
          opts: [
            'There is too much work on the course.',
            'Their fellow students are creative people.',
            'The course is taught in an interesting way.',
          ],
          answer: 2,
          explanation: '官方答案为 C：两人一致认为这门建筑课程授课方式有趣。',
        },
        {
          scenario: 'You hear two students talking about the chemistry laboratories at their college.',
          q: 'What does the woman say about the laboratories?',
          opts: ['The equipment in them should be updated.', 'They are not large enough.', 'They need redecorating.'],
          answer: 1,
          explanation: '官方答案为 B：女生认为实验室面积不够大。',
        },
        {
          scenario: 'You hear a woman talking about a place she used to visit as a child.',
          q: 'What point is she making?',
          opts: [
            'She might be disappointed if she returned there.',
            'She prefers more sophisticated holidays now.',
            'The place appeals more to children than adults.',
          ],
          answer: 0,
          explanation: '官方答案为 A：她指出如果重回旧地可能会感到失望。',
        },
        {
          scenario: 'You hear a runner telling his friend about a sports injury he has.',
          q: 'What did his doctor advise?',
          opts: ['keep going with some training', 'introduce other sports very gradually', 'start running very slowly'],
          answer: 0,
          explanation: '官方答案为 A：医生建议他继续保持一定的训练。',
        },
        {
          scenario: 'You hear a woman talking about her favourite radio programme.',
          q: 'What does she say about the stories in the programme?',
          opts: [
            'The creative element in them is what makes them work.',
            'They tend to vary in how interesting they are.',
            'They contain messages we can all learn from.',
          ],
          answer: 1,
          explanation: '官方答案为 B：她说节目里故事的有趣程度参差不齐。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Peter Green talking about a group expedition he went on to the South Pole for a TV documentary. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std2/std2-t4-p2.mp3',
      items: [
        {
          q: 'Peter was working as an ____ when he applied to join the expedition.',
          answer: ['engineer'],
          show: 'engineer',
          explanation: '官方答案 engineer：他申请参加远征时的工作是工程师（题干冠词为 an）。',
        },
        {
          q: 'On the expedition, Peter and his group went to the South Pole on ____ instead of more typical means of transport.',
          answer: ['skis'],
          show: 'skis',
          explanation: '官方答案 skis：他们滑雪橇前往南极点，而非更常见的交通方式。',
        },
        {
          q: 'Peter says that his greatest challenge was the ____ he suffered.',
          answer: ['loneliness', 'lonelyness'],
          show: 'loneliness/lonelyness',
          explanation: '官方 Key 印作 loneliness/lonelyness（第二种为官方 Key 收录的拼写变体，按页面原样照录），两种拼法均算对。',
        },
        {
          q: "Peter says that ensuring they could get enough ____ took up a good deal of the group's time.",
          answer: ['water'],
          show: 'water',
          explanation: '官方答案 water：保障足够的用水占去了全队大量时间。',
        },
        {
          q: 'Peter was surprised at how quickly his ____ decreased.',
          answer: ['weight'],
          show: 'weight',
          explanation: '官方答案 weight：他惊讶于体重下降之快。',
        },
        {
          q: "Peter's ____ were affected by the cold during the expedition.",
          answer: ['toes'],
          show: 'toes',
          explanation: '官方答案 toes：远征期间的严寒影响了他的脚趾。',
        },
        {
          q: "One of Peter's teammates had a chest infection and the lack of ____ made it worse.",
          answer: ['rest'],
          show: 'rest',
          explanation: '官方答案 rest：队友患胸部感染，缺乏休息使病情加重。',
        },
        {
          q: "When they reached the ____ point, Peter's team were given a medical check.",
          answer: ['halfway', 'half-way'],
          show: 'half(-)way',
          explanation: '官方答案 half(-)way：按官方 Key 记法连字符可省略，halfway / half-way 均算对。',
        },
        {
          q: 'Peter felt a great sense of ____ when he reached the pole.',
          answer: ['relief'],
          show: 'relief',
          explanation: '官方答案 relief：抵达极点时他如释重负。',
        },
        {
          q: 'Peter uses the word ____ to describe the environment at the South Pole.',
          answer: ['alien'],
          show: 'alien',
          explanation: '官方答案 alien：他用 alien 一词形容南极点的环境。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about how to give good presentations. For questions 19–23, choose from the list (A–H) what advice each person gives. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std2/std2-t4-p3.mp3',
      options: [
        { label: 'A', text: 'Keep your presentation short.' },
        { label: 'B', text: 'Remember to repeat your main point.' },
        { label: 'C', text: 'Support your presentation with visuals.' },
        { label: 'D', text: 'Add some humour.' },
        { label: 'E', text: 'Practise giving your presentation.' },
        { label: 'F', text: 'Try to relax during your presentation.' },
        { label: 'G', text: "Don't try to memorise every word." },
        { label: 'H', text: 'Find out about your audience.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: '官方答案 E：说话人 1 给出的建议是多加练习做演示。' },
        { speaker: 'Speaker 2', answer: 'H', explanation: '官方答案 H：说话人 2 建议事先了解听众情况。' },
        { speaker: 'Speaker 3', answer: 'A', explanation: '官方答案 A：说话人 3 建议把演示时间控制得短一些。' },
        { speaker: 'Speaker 4', answer: 'C', explanation: '官方答案 C：说话人 4 建议用视觉材料支撑演示。' },
        { speaker: 'Speaker 5', answer: 'F', explanation: '官方答案 F：说话人 5 建议在演示过程中尽量放松。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Maggie Wharton who is skilled in the sport of kitesurfing. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t4-p4.mp3',
      items: [
        {
          q: 'Maggie says it took her a long time to learn to kitesurf because',
          opts: [
            "the equipment wasn't widely available.",
            'it was hard to find the right assistance.',
            'she needed to build up her strength.',
          ],
          answer: 1,
          explanation: '官方答案为 B：她学得久是因为当时很难找到合适的指导。',
        },
        {
          q: "In Maggie's opinion, since she began kitesurfing",
          opts: [
            'suitable locations have been more clearly identified.',
            'attitudes to some aspects of safety have changed.',
            'participants have become better informed about sea conditions.',
          ],
          answer: 1,
          explanation: '官方答案为 B：在她看来，人们对安全某些方面的态度已经改变。',
        },
        {
          q: 'Maggie hopes that by competing in Fiji, she will',
          opts: [
            'encourage others to take up the sport.',
            'have the chance to pick up some new moves.',
            'be invited to start organising future events.',
          ],
          answer: 0,
          explanation: '官方答案为 A：她希望通过在斐济参赛鼓励更多人参与这项运动。',
        },
        {
          q: 'During one distance event, Maggie became slightly worried when',
          opts: [
            'she had to switch to different equipment.',
            'she experienced a great deal of pain.',
            'she lost sight of the people helping her.',
          ],
          answer: 2,
          explanation: '官方答案为 C：一次长距离赛事中，她因看不到协助她的人而略有担心。',
        },
        {
          q: 'Maggie thinks her success is due to the fact that',
          opts: [
            'the sport suits her character very well.',
            'her family have given her a lot of support.',
            'she has the opportunity to practise regularly.',
          ],
          answer: 0,
          explanation: '官方答案为 A：她认为成功源于这项运动非常契合她的性格。',
        },
        {
          q: "Maggie says that some new kitesurfers she's met",
          opts: [
            'are likely to develop the sport in interesting ways.',
            'are unwilling to focus on basic techniques first of all.',
            'are too worried about the rules of the sport.',
          ],
          answer: 1,
          explanation: '官方答案为 B：她遇到的一些新玩家不愿先专注基本技术。',
        },
        {
          q: 'What does Maggie hope to do in the future?',
          opts: ['find sources of investment for her sport', 'continue to compete at a high level', 'set up a kitesurfing school'],
          answer: 0,
          explanation: '官方答案为 A：她希望未来能为这项运动寻找投资来源。',
        },
      ],
    },
  },
};
