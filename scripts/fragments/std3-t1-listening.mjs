// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 22–27（PDF 24–29），答案核对自 Test 1 Key（Listening 区在书 121 / PDF 123；书 120 / PDF 122 为 Reading and Use of English Key）
// 音频：/audio/fce/std3/std3-t1-p1.mp3 ~ std3-t1-p4.mp3（整 Part 一条）
// 注：书 24 页 Part 2 印刷小标题为 "Survival in the forest"（数据结构无对应字段，记录于此备查）。

export default {
  meta: {
    id: 'fce-standard-3-test1-listening',
    title: 'FCE 标准版真题 3 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 121 / PDF 123',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking on the radio about an actor.',
          q: 'What does the woman say about him?',
          opts: [
            'His acting has improved over the years.',
            'The media often criticise him unfairly.',
            'He gets fewer film roles than he deserves.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她说他的演技这些年有所提高。',
        },
        {
          scenario: 'You hear a hairstylist talking about her career.',
          q: 'She prefers working in the TV industry because she',
          opts: [
            'feels that her contribution is valued.',
            'is able to express her opinions freely.',
            'thrives on the creative challenge the work presents.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她感到自己的付出在电视行业被重视。',
        },
        {
          scenario: 'You hear a comedian called Geoff Knight talking on the radio about his profession.',
          q: 'What does Geoff like his act to contain?',
          opts: [
            'stories that give people a surprise',
            'things that everybody can relate to',
            'material that nobody has used before',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他希望表演里有大家都能产生共鸣的内容。',
        },
        {
          scenario: 'You hear a conversation between a customer and a coffee shop employee.',
          q: 'What is the employee doing?',
          opts: [
            "waiting for a colleague's help",
            "excusing a colleague's inefficiency",
            "criticising a colleague's attitude",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，员工在为同事的效率不高作开脱。',
        },
        {
          scenario: 'You hear a man telling a friend about an art exhibition.',
          q: 'What does he say about it?',
          opts: ['It was well attended.', 'The lighting was effective.', 'The catalogue was worth buying.'],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他觉得展览的灯光效果好。',
        },
        {
          scenario: 'You overhear a man ringing a sports shop.',
          q: 'Why is he calling?',
          opts: [
            'to report an incident in the shop',
            'to make a special order',
            'to follow up an earlier query',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，他打电话是跟进之前的咨询。',
        },
        {
          scenario: 'You hear a man telling a friend about his work.',
          q: 'How does the man feel about his work?',
          opts: [
            "resentment of his colleague's success",
            'regret at the changes that have taken place',
            'frustration at his lack of progress',
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，他对工作中已经发生的变化感到遗憾。',
        },
        {
          scenario: "You hear two people talking about a country walk they're doing.",
          q: 'What do they agree about?',
          opts: [
            "It's much too long to complete.",
            'The path is very difficult to follow.',
            "They've chosen the wrong day to do it.",
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，两人都认为今天来徒步选错了日子。',
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a presentation given by a university student called Megan Rowlings about a forest survival course she went on in Australia. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t1-p2.mp3',
      items: [
        {
          q: "It was Megan's ____ who told her about the survival course.",
          answer: ['father'],
          show: 'father',
          explanation: '官方答案 father：是她父亲告诉了她这个生存课程。',
        },
        {
          q: "Megan particularly appreciated the course leader John's use of ____ at stressful moments.",
          answer: ['humour', 'humor'],
          show: 'humour / humor',
          explanation: '官方答案 humour / humor：Key 给出英式与美式两种拼写。',
        },
        {
          q: "Megan said the assistant's knowledge of ____ was very useful during the course.",
          answer: ['plants'],
          show: 'plants',
          explanation: '官方答案 plants：助教对植物的了解在课程中很有用。',
        },
        {
          q: 'Megan was worried that her ____ would be a problem in doing some of the tasks.',
          answer: ['physical size', 'size'],
          show: '(physical) size',
          explanation: '官方答案 (physical) size：Key 中 physical 为可选词，两种写法均算对。',
        },
        {
          q: 'John emphasised that when it comes to safety, ____ is the most dangerous reaction.',
          answer: ['panic'],
          show: 'panic',
          explanation: '官方答案 panic：慌乱是最危险的反应。',
        },
        {
          q: "Megan's teammates were grateful for the ____ which she'd brought with her.",
          answer: ['plastic bags', 'bags'],
          show: '(plastic) bags',
          explanation: '官方答案 (plastic) bags：Key 中 plastic 为可选词，两种写法均算对。',
        },
        {
          q: 'Megan learned how to make a ____ from the material found in the forest.',
          answer: ['knife'],
          show: 'knife',
          explanation: '官方答案 knife：她学会了用林中材料做刀。',
        },
        {
          q: 'Megan and her group were told they should only use water from the ____ for drinking.',
          answer: ['river'],
          show: 'river',
          explanation: '官方答案 river：只能饮用河水。',
        },
        {
          q: 'Megan found that making a ____ was hard for her.',
          answer: ['fire without matches', 'fire'],
          show: 'fire (without matches)',
          explanation: '官方答案 fire (without matches)：Key 中 without matches 为可选补充，生火对她来说最难。',
        },
        {
          q: 'Megan was surprised to find that the skill of ____ benefited her.',
          answer: ['being good at time management', 'time management'],
          show: '(being good at) time management',
          explanation: '官方答案 (being good at) time management：Key 中 being good at 为可选词。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people talk about a problem they had in their first few weeks in a new job. For questions 19–23, choose what problem (A–H) each speaker says they had. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t1-p3.mp3',
      options: [
        { label: 'A', text: 'I made an embarrassing comment.' },
        { label: 'B', text: "I didn't get on with my colleagues." },
        { label: 'C', text: 'I took on too much work.' },
        { label: 'D', text: "I didn't get enough support." },
        { label: 'E', text: 'I found the work too challenging.' },
        { label: 'F', text: 'I was over-confident.' },
        { label: 'G', text: "I wasn't very punctual." },
        { label: 'H', text: 'I was treated unreasonably.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'G', explanation: '官方答案 G：依据录音内容，这位说话者的问题是不够守时。' },
        { speaker: 'Speaker 2', answer: 'F', explanation: '官方答案 F：依据录音内容，这位说话者当时过于自信。' },
        { speaker: 'Speaker 3', answer: 'A', explanation: '官方答案 A：依据录音内容，这位说话者说了一句令人尴尬的话。' },
        { speaker: 'Speaker 4', answer: 'H', explanation: '官方答案 H：依据录音内容，这位说话者受到了不公平的对待。' },
        { speaker: 'Speaker 5', answer: 'C', explanation: '官方答案 C：依据录音内容，这位说话者承担了太多的工作。' },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with an international concert pianist called Karen Hong. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t1-p4.mp3',
      items: [
        {
          q: 'Why does Karen keep practising pieces of music she knows well?',
          opts: [
            'to keep her confidence levels high',
            'to warm up before playing difficult new pieces',
            'to make small improvements to her performance of them',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她练习熟曲是为了在演绎上不断小幅改进。',
        },
        {
          q: 'What does Karen say about her mother?',
          opts: [
            'She still tries to have an influence over Karen.',
            "She shows her emotions much more than Karen's father.",
            'She could have been a competent pianist herself.',
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，母亲至今仍试图对 Karen 施加影响。',
        },
        {
          q: 'Karen says that after winning a big competition, she began',
          opts: ['to lose interest in music.', 'to take offence easily.', 'to doubt her talent.'],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，赢得大赛后她开始怀疑自己的天赋。',
        },
        {
          q: "Karen's decision to take a break from performing allowed her to",
          opts: [
            'spend a lot of time on her own.',
            'regain full physical health.',
            'put a new management team in place.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，休整让她得以组建新的经纪团队。',
        },
        {
          q: 'When she was performing on television regularly, Karen enjoyed the idea that',
          opts: [
            'she was bringing people from different countries closer together.',
            "she was improving people's mood and energy levels.",
            'she was taking classical music to new places and people.',
          ],
          answer: 2,
          explanation: '官方答案为 C：依据录音内容，她乐于想到古典音乐正被带到新的地方和人群面前。',
        },
        {
          q: 'What does Karen say about pop music?',
          opts: [
            'It is suitable for people of all ages.',
            'It makes little impression on her.',
            "It affects teenagers' behaviour in different ways.",
          ],
          answer: 1,
          explanation: '官方答案为 B：依据录音内容，流行音乐对她几乎没有影响。',
        },
        {
          q: 'Karen believes that when dealing with young children who play music',
          opts: [
            'praise should only be given where it is justified.',
            'pushing them too hard will demotivate them.',
            "it's a mistake to make them nervous about the end result.",
          ],
          answer: 0,
          explanation: '官方答案为 A：依据录音内容，她认为只应在有理由时才给予表扬。',
        },
      ],
    },
  },
}
