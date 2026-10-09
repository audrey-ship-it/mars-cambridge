// FCE Reading and Use of English — 8 mock tests from 《FCE 8套全真模拟试题》
// Source: FCE 8套全真模拟试题.pdf (208 pages, scanned)
//
// FCE B2 First for Schools Reading and Use of English paper structure (7 parts, 52 questions):
//   Part 1: 8 MCQ cloze (A/B/C/D) — one text with 8 gaps, choose best word
//   Part 2: 8 open cloze — one text with 8 gaps, write one word
//   Part 3: 8 word formation — use given word's correct form
//   Part 4: 6 key word transformation — rewrite sentence using given word
//   Part 5: 6 reading MCQ (A/B/C/D) — one text, 6 comprehension questions
//   Part 6: 6 paragraph matching — one text with 6 gaps, choose from 7 sentences (A–G, 1 extra)
//   Part 7: 10 multiple matching — 4 texts (A–D), match 10 statements; teens may be chosen more than once
//
// Item shapes (consumed by FCE reading UI):
//   Part 1 (type: 'mcq_cloze'):           passage, items: [{ q, opts:[4], answer:0-3, explanation }]
//   Part 2 (type: 'open_cloze'):          passage, items: [{ q, answer:[accepted...], show, explanation }]
//   Part 3 (type: 'word_formation'):      passage, items: [{ q, given, answer:[accepted...], show, explanation }]
//   Part 4 (type: 'key_word_transformation'): items: [{ q, stem, key, answer:[accepted...], show, explanation }]
//   Part 5 (type: 'reading_mcq'):         passage, items: [{ q, q_text, opts:[4], answer:0-3, explanation }]
//   Part 6 (type: 'paragraph_matching'): passage, options:[{label,text}], items: [{ q, answer:'A', explanation }]
//   Part 7 (type: 'multiple_matching'):   sections:[{label,name,text}], items: [{ q, q_text, answer:'A', explanation }]
//
// Answers were transcribed verbatim from the Answer Key pages (PDF 162–200)
// and cross-checked against the question pages.

export const fceReadingTests = [
  {
    meta: {
      id: 'fce-mock-1-reading',
      title: 'FCE 全真模拟试题 1 · Reading and Use of English',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Reading and Use of English',
      pages: '4–11',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.156)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 选择填空',
        instruction:
          'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
        type: 'mcq_cloze',
        passage:
          'New sports in schools\n\n' +
          'Sport in schools is always a popular (0) topic for the news. Politicians, (1)_____ with doctors and parents are always concerned about the (2)_____ of physical activity young people are getting. What can be done to encourage teenagers to (3)_____ more, both in and out of school? According to Ben Wheeler, a PE teacher at Maldon High School in Sussex, the problem is with the (4)_____ of sports rather than simply laziness.\n\n' +
          'At his school, they used to offer only the (5)_____ sports, such as football and netball. As a result of negative attitudes from the pupils who (6)_____ that they were bored of the same sports, Wheeler and the other teachers made dramatic changes. These days, students can learn tennis, golf and even rock-climbing. The sports department has seen excellent (7)_____ as the students are signing up for the new sports and the school has even been in the news as a(n) (8)_____ for others.',
        items: [
          {
            q: 1,
            opts: ['also', 'aside', 'along', 'as'],
            answer: 2,
            explanation: 'along with 为固定搭配，"along with doctors and parents" 表示"与医生和家长一起"。',
          },
          {
            q: 2,
            opts: ['amount', 'number', 'quantity', 'proportion'],
            answer: 0,
            explanation: 'amount of 修饰不可数名词 physical activity，表示"运动量"。',
          },
          {
            q: 3,
            opts: ['act', 'activate', 'rehearse', 'exercise'],
            answer: 3,
            explanation: 'exercise 表示"锻炼"，鼓励青少年多锻炼身体。',
          },
          {
            q: 4,
            opts: ['option', 'alternative', 'choice', 'pick'],
            answer: 2,
            explanation: 'the choice of sports 表示"运动项目的选择"。',
          },
          {
            q: 5,
            opts: ['conservative', 'traditional', 'obscure', 'unusual'],
            answer: 1,
            explanation: 'traditional sports 指传统运动项目（如足球、无板篮球）。',
          },
          {
            q: 6,
            opts: ['accused', 'recommended', 'attacked', 'complained'],
            answer: 3,
            explanation: 'complained that 抱怨……，学生抱怨对同样的运动感到厌倦。',
          },
          {
            q: 7,
            opts: ['scores', 'results', 'answers', 'marks'],
            answer: 1,
            explanation: 'excellent results 指出色的成效/结果。',
          },
          {
            q: 8,
            opts: ['pattern', 'case', 'example', 'ideal'],
            answer: 2,
            explanation: 'as an example for others 作为他人的榜样。',
          },
        ],
      },
      2: {
        title: 'Part 2 · 完形填空',
        instruction:
          'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'open_cloze',
        passage:
          'Lovely London\n\n' +
          'Lively, exciting and energetic is (0) HOW visitors describe London; the capital has just been voted the number one European city destination, beating other popular places, (9)_____ as Amsterdam and Paris. The reason for its popularity seems to be (10)_____ to many factors: firstly, it is easy to get to as there are six large airports not (11)_____ from the city. In (12)_____, there is a huge number of attractions, from Buckingham Palace to the London Eye and Covent Garden.\n\n' +
          'London is appealing all year (13)_____ too; there are things happening (14)_____ the time. In the summer, thousands of people come to watch the Wimbledon tennis tournament, and in the winter, it\'s an opportunity to see some of the excellent football teams (15)_____ Chelsea and Arsenal. If it\'s studying and not play you want, then the universities are fantastic; this is why more students from abroad come to London rather (16)_____ any other city in the world. Whatever the reason for your visit, you are sure to find something you love.',
        items: [
          { q: 9, answer: ['SUCH'], show: 'SUCH', explanation: 'such as 固定搭配，表示"例如"。' },
          { q: 10, answer: ['DUE', 'OWING'], show: 'DUE / OWING', explanation: 'due/owing to 归因于，由于。' },
          { q: 11, answer: ['FAR'], show: 'FAR', explanation: 'not far from 离……不远。' },
          { q: 12, answer: ['ADDITION'], show: 'ADDITION', explanation: 'in addition 此外，补充说明。' },
          { q: 13, answer: ['ROUND'], show: 'ROUND', explanation: 'all year round 全年。' },
          { q: 14, answer: ['ALL'], show: 'ALL', explanation: 'all the time 一直，始终。' },
          { q: 15, answer: ['LIKE'], show: 'LIKE', explanation: 'like 在此表示"例如"（列举球队）。' },
          { q: 16, answer: ['THAN'], show: 'THAN', explanation: 'rather than 而不是。' },
        ],
      },
      3: {
        title: 'Part 3 · 词形变换',
        instruction:
          'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'word_formation',
        passage:
          'The mysterious artist\n\n' +
          'Graffiti is a very controversial topic as it is very (0) DIVISIVE; some people see it as art, whereas others only see (17)_____. The split between the two sides is not always about age, but it is really about your (18)_____ in art. For some in the world of art, the work is hugely valuable and the artists themselves can be very influential.\n\n' +
          'One of the most (19)_____ graffiti artists in the world is Banksy, from UK, although nobody knows his real identity; he\'s as well known for his art as he is for his (20)_____. Banksy\'s work often has a (21)_____ or social message: popular themes include children, soldiers and the elderly. Whether or not he represents the communities in which he works is (22)_____, though.\n\n' +
          'He also does a lot of work for (23)_____ such as Greenpeace. However, some people have him for \'selling out\' and working for large corporations, too. This is something that has been denied by Banksy\'s spokesperson. Whatever opinion you support regarding graffiti, Banksy\'s influence is (24)_____.' ,
        items: [
          { q: 17, given: 'VANDAL', answer: ['VANDALISM'], show: 'VANDALISM', explanation: 'vandal → vandalism 故意破坏公共财物的行为。' },
          { q: 18, given: 'PREFER', answer: ['PREFERENCE', 'PREFERENCES'], show: 'PREFERENCE(S)', explanation: 'prefer → preference 偏好。' },
          { q: 19, given: 'FAME', answer: ['FAMOUS'], show: 'FAMOUS', explanation: 'fame → famous 著名的。' },
          { q: 20, given: 'ANONYMOUS', answer: ['ANONYMITY'], show: 'ANONYMITY', explanation: 'anonymous → anonymity 匿名（名词形式）。' },
          { q: 21, given: 'POLITICS', answer: ['POLITICAL'], show: 'POLITICAL', explanation: 'politics → political 政治的。' },
          { q: 22, given: 'DEBATE', answer: ['DEBATABLE'], show: 'DEBATABLE', explanation: 'debate → debatable 有争议的。' },
          { q: 23, given: 'ORGANISE', answer: ['ORGANISATIONS'], show: 'ORGANISATIONS', explanation: 'organise → organisations 组织（复数名词）。' },
          { q: 24, given: 'DENY', answer: ['UNDENIABLE'], show: 'UNDENIABLE', explanation: 'deny → undeniable 不可否认的（加前缀 un-）。' },
        ],
      },
      4: {
        title: 'Part 4 · 句子转换',
        instruction:
          'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0).',
        type: 'key_word_transformation',
        items: [
          {
            q: 25,
            stem: "Kathy wasn't allowed to go to the concert by her parents.",
            key: 'LET',
            answer: ["didn't let her"],
            show: "didn't let her",
            explanation: "let sb do sth → 否定形式 didn't let her go。",
          },
          {
            q: 26,
            stem: 'On Sundays, Joe preferred staying at home with his family instead of going out.',
            key: 'RATHER',
            answer: ['would rather stay at home'],
            show: 'would rather stay at home',
            explanation: 'would rather do sth 宁愿做某事。',
          },
          {
            q: 27,
            stem: "'Can I borrow your bike, Dan?' asked Paul.",
            key: 'LEND',
            answer: ['he could lend him'],
            show: 'he could lend him',
            explanation: 'borrow → lend（借出），间接引语中 can 变 could。',
          },
          {
            q: 28,
            stem: 'The students have to start the exam by 9.30 am.',
            key: 'NECESSARY',
            answer: ['is necessary for'],
            show: 'is necessary for',
            explanation: 'It is necessary for sb to do sth 做某事是必要的。',
          },
          {
            q: 29,
            stem: "'You must go to the dentist as soon as possible,' said my mother.",
            key: 'INSISTED',
            answer: [
              'insisted that I (should) go',
              'insisted that I went',
              'insisted on my going',
              'insisted on me going',
            ],
            show: 'insisted that I (should) go …',
            explanation: 'insist that sb (should) do 或 insist on (sb) doing 多种形式均可。',
          },
          {
            q: 30,
            stem: "Sophie doesn't seem to be very sure of herself.",
            key: 'CONFIDENCE',
            answer: ['have much confidence', 'have any confidence'],
            show: 'have much / any confidence',
            explanation: 'have confidence in oneself 自信；否定句用 much/any。',
          },
        ],
      },
      5: {
        title: 'Part 5 · 阅读选择',
        instruction:
          'You are going to read an extract from a novel in which an Australian teenager called Sarah has come to stay with her English family. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
        type: 'reading_mcq',
        passage:
          'Finally at home\n\n' +
          'Sarah looked across at the harbour – her harbour as she now thought of it. She breathed a deep sigh and looked around the room in which she hadn\'t been since she was a little girl. She felt that she was home at last, finally back in her family\'s original town in Cornwall. Her family had practically built the entire place; at least they\'d made it what it was today – a busy market town with a large harbour and ship-builders spread along the coast. Their own hard work and strength alone had stopped it from becoming an abandoned \'ghost town\' as had happened in too many neighbouring towns and villages.\n\n' +
          'The good fortune of her family had been so great that they were able to build an enormous house on the top of Wicker\'s mount overlooking their achievements which, in Sarah\'s grandfather\'s lifetime, included a hotel and restaurant, along with the older businesses. And so life had continued for the Trevallyans, a family so lucky that many of the town\'s inhabitants whispered about them, in a mixture of both respect and suspicion – the source of their money had prompted countless rumours.\n\n' +
          'When Sarah\'s father, Jonathan, told his father that he did not want to work for the family business but instead had made plans to study as a doctor in London, the community was surprised. Tom, Sarah\'s grandfather, had been quite angry at first as he knew his oldest child was the brightest and had expected him to continue the family businesses – his other two children, James and Susan, were not as academic as Jonathan. Despite the shock, Tom eventually forgave Jonathan for his choices as he was so proud that he had become an excellent doctor. James and Susan divided the other businesses and each did well and made the family even richer than before.\n\n' +
          'Something Tom took longer to forgive, however, was Jonathan\'s decision to move to Australia with his new wife. He wondered that if his son moved so far away, how would he ever come back and would he ever see him again? So Tom had never gone to visit his son in Australia, first saying it was too far and then that he had a phobia of aeroplanes. Sarah and her parents had only been to England once when she was very young and she could hardly remember the house or any of her family. But now that Sarah was seventeen and about to start studying at a college in England, she finally had had the chance to meet her uncle, aunt and, most exciting of all for her, her legendary grandfather Tom once again.\n\n' +
          'Walking down to the port at night Sarah decided to visit the shipbuilding office where her cousin David was the manager. As she walked past the small fishing boats and the larger commercial trawlers, she felt a cold blast of air and pulled her coat around her and her hat further down over her ears. Just as she was wondering if a storm was approaching and regretting not watching the weather forecast on TV, she heard voices coming from the boats and the path. The fishermen had obviously had the same thoughts and they seemed to be taking their boats over to the west port, where they would have protection from the wind. The sudden change in weather had surprised her as she was used to the heat of the Australian sun. She put her frozen hands deep into her coat pockets and hurried towards David\'s office.\n\n' +
          'David, her cousin, looked at her and laughed. Of course, for him and the others in the town it was not so cold as to need a hat and scarf yet. Sarah liked David and his sister, Joanna, very much – she had only been in the country for two weeks and they were already good friends. However, as much as she liked her cousins, there was something strange about her aunt. She couldn\'t quite explain why but she had an odd feeling that there were many secrets in the Trevallyan family that had yet to be revealed.',
        items: [
          {
            q: 31,
            q_text: "Sarah's sigh suggests that",
            opts: [
              'she was comfortable in her surroundings.',
              'she was tired after a long journey.',
              'she was bored of the house.',
              'she was sad about being in the house.',
            ],
            answer: 0,
            explanation: 'Sarah 叹息后感到"终于到家了"（home at last），说明她在环境中感到舒适自在。',
          },
          {
            q: 32,
            q_text: 'Why were people suspicious of the Trevallyan family?',
            opts: [
              'They believed that the family had stolen their money.',
              'The family were isolated from the rest of the community.',
              'They wondered about the origins of their wealth.',
              'The family were not originally from the town.',
            ],
            answer: 2,
            explanation: '文中"the source of their money had prompted countless rumours"，人们对财富来源感到好奇。',
          },
          {
            q: 33,
            q_text: "Why was Jonathan's decision a surprise to everyone?",
            opts: [
              'He had not been thought of as clever enough to be a doctor.',
              'He hated large cities like London.',
              'He had been expected to carry on his father\'s work.',
              "He didn't want his siblings to control the family money.",
            ],
            answer: 2,
            explanation: 'Tom 期望长子 Jonathan 继承家族生意，他却选择去伦敦学医，令大家意外。',
          },
          {
            q: 34,
            q_text: "What does the writer suggest about Tom's reasons for never visiting Australia?",
            opts: [
              'He made up excuses because he didn\'t want to go.',
              'He was too embarrassed to admit his phobia of flying.',
              'He had many truthful reasons for not going.',
              'He did not want to see his son again.',
            ],
            answer: 0,
            explanation: 'Tom 先说太远，又说怕飞机，都是借口（excuse），实际是不想去。',
          },
          {
            q: 35,
            q_text: "What was the reason for Sarah's reaction to the cold weather?",
            opts: [
              'She hated the English weather.',
              'She was still getting used to the change in temperature.',
              'She had heard that bad weather was coming.',
              'She had not brought any warm clothes with her from Australia.',
            ],
            answer: 1,
            explanation: '文中"she was used to the heat of the Australian sun"，她还在适应温度变化。',
          },
          {
            q: 36,
            q_text: "What do we learn about Sarah's family in the last paragraph?",
            opts: [
              'Sarah was her cousins\' only friend.',
              'Sarah suspected that someone was hiding something.',
              "Sarah's cousins were rather difficult to get on with.",
              "Sarah hadn't met her cousins' mother yet.",
            ],
            answer: 1,
            explanation: 'Sarah 觉得"there were many secrets in the Trevallyan family that had yet to be revealed"。',
          },
        ],
      },
      6: {
        title: 'Part 6 · 段落匹配',
        instruction:
          'You are going to read an article from a university website about the experience of living in a different country. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
        type: 'paragraph_matching',
        passage:
          'Adventures and education in Europe\n\n' +
          'The ERASMUS programme has been running since 1987 and it is more successful than ever. If you have ever wanted to live abroad but didn\'t think it was possible with your course, then you should read on to find out what you could do and where you could go. The possibilities are endless and the benefits are limitless – not only will it teach you to become more independent but it will open your eyes to the attractions of Europe. (37)\n\n' +
          'ERASMUS is a European Union scheme for EU university students who wish to continue studying or working abroad. (38) If you\'re not sure whether you want to study or work abroad, you can combine both in one year. The only problem you may encounter is choosing where to go; Europe is so rich in culture, history and language that you really are spoilt for choice! (39) The two students below have had two very different experiences of living in a foreign country but both found the time in another European country to be life-changing.\n\n' +
          'Pierre: \'I\'m in my final year of Spanish and European studies and I have absolutely loved every minute of it! My favourite time in the last three years has definitely been taking part in the ERASMUS programme. I always knew that I\'d have to go to Spain as part of my studies but I didn\'t know what I wanted to do when I got there – lessons or work. Finally, after speaking to older students who\'d already participated in the scheme, I decided to work as an assistant in a high school. (40)\n\n' +
          'Julio: \'I found the experience to be very worthwhile even though I took a while deciding to do it! (41) I\'d already travelled around Europe before university so I wasn\'t sure where to go. I eventually chose to go to Germany and work for a car manufacturer, so I got to see the process of making a car from beginning to end. In fact, I\'ve been offered a one-year work placement at the business once I finish here.\'\n\n' +
          'ERASMUS students can form a strong connection to each other. Pierre and Julio have both met other young people from all over Europe with whom they remain friends. Pierre, from France, lived in Spain with Swedish and Irish students, whilst Julio, from Spain, made good friends with Hungarians, Greeks and many Portuguese people. (42) If you would like an opportunity to be part of an exciting exchange programme, please contact us.',
        options: [
          { label: 'A', text: 'It was an unexpected break from my course, which was pretty intense and allowed me to combine travel with education.' },
          { label: 'B', text: 'Tutors at universities mostly encourage only students of politics to do the scheme and it has a very competitive entry examination.' },
          { label: 'C', text: 'When you are selecting your destination, you ought to consider all aspects of the country – do you prefer hot places with beautiful beaches or are you more of a fan of bustling cities?' },
          { label: 'D', text: "Additionally, future employers are sure to be impressed with a show of initiative and adventurousness." },
          { label: 'E', text: "They, and the other young Europeans who participate in the programme, are known as the 'ERASMUS generation' – an innovative group who many see as the future of the continent." },
          { label: 'F', text: "It was a great opportunity! I've since decided to become a Spanish teacher once I finish my studies and I wouldn't have done that if I hadn't had this experience." },
          { label: 'G', text: 'The programme has a broad range; students of any course can participate for three months up to one year.' },
        ],
        items: [
          { q: 37, answer: 'D', explanation: '空前文讲 ERASMUS 的好处，D 项"此外，未来的雇主一定会对你的主动和冒险精神印象深刻"补充好处。' },
          { q: 38, answer: 'G', explanation: '空后讲可以学习或工作，G 项"该项目范围广，任何课程的学生都可参加三个月到一年"说明适用范围。' },
          { q: 39, answer: 'C', explanation: '空前讲选择去哪里很难，C 项"选择目的地时应该考虑国家的方方面面"承接选择目的地的话题。' },
          { q: 40, answer: 'F', explanation: '空前 Pierre 说他决定在高中做助教，F 项"这是个好机会，我后来决定成为西班牙语老师"承接他的经历。' },
          { q: 41, answer: 'A', explanation: '空前 Julio 说他花了一段时间才决定参加，A 项"这是课程的一个意外休息"解释他的犹豫与收获。' },
          { q: 42, answer: 'E', explanation: '空前讲 ERASMUS 学生之间的友谊，E 项"他们被称为 ERASMUS 一代"总结这群人的意义。' },
        ],
      },
      7: {
        title: 'Part 7 · 多文本匹配',
        instruction:
          'You are going to read an article about young people and technology. For questions 43–52, choose from the teenagers (A–D). The teenagers may be chosen more than once.',
        type: 'multiple_matching',
        sections: [
          {
            label: 'A',
            name: 'Mike',
            text:
              "I guess you could say technology is in the blood. My parents both work in IT and so we've always had the latest gadget or gizmo in the house. We had smartphones before any of my friends, and my dad even taught me how to write computer programmes when I was really young – easy ones of course! My friends love it because they can ask my advice on what they should buy, and if I don't know the answer, my parents definitely will. In my spare time I've actually been developing apps with my dad – it's been great. We're productive when we work together and I've learnt a lot from him. I'm now planning to study computer science at university and I think I'm already ahead of the pack, in terms of computer skills.",
          },
          {
            label: 'B',
            name: 'Maggie',
            text:
              "Everyone I know uses smartphones, ebooks and so on, but it's not my thing, to be honest. I'm an avid reader and when I see people on the train with their tablets, I can't stand it. For me, the feel and even the smell of a book is irreplaceable and I can't believe you can have the same experience reading off a screen. I love curling up on my bed with a cup of tea, some biscuits and a good novel. I don't know how I'd cuddle up to a computer! My sister can't understand me at all – she likes reading too and says that ebooks are really convenient as she has all her books in one place, but, like I said, it's more the comfort that is important to me.",
          },
          {
            label: 'C',
            name: 'John',
            text:
              "Don't get me wrong! I'd love to have the best smartphone or laptop but it's just not possible for me. My parents both work really hard but I've got four brothers and sisters so it's not as if they can afford to buy things like that. My friends tease me a bit about my basic phone but I don't care. I'm really into sport, especially rugby, and I had the chance to go to a rugby summer academy but it was really pricey, too much for my parents really. However, they were amazing; they did find the money and so I went last summer. It was definitely worth it. I already play for a local team, but I'd love to go professional and it's not like the latest phone is going to help with that, is it? No, I'd rather spend my money, or rather my parents' money, on something that's going to help me in the future and not just for fashion.",
          },
          {
            label: 'D',
            name: 'Flora',
            text:
              "Surely technology is important to everyone, isn't it? Well, at least all young people should be interested in technology, as there's no escape from it and if you are not prepared to learn and change, then I think it will be difficult for you to find work in the future. I've got the newest phone, tablet and ebook but I've worked hard for them. I got a job in a clothes shop and I work there after school a couple of days a week and on Saturdays, too. My parents don't understand my obsession with having the best things. They both have smartphones but they get really annoyed when I'm on my phone all the time. My mum even made a rule for me and my brother that we're not allowed to use our phones at the dinner table!",
          },
        ],
        items: [
          { q: 43, q_text: 'finds other interests more important?', answer: 'C', explanation: 'John 更看重运动（橄榄球），认为最新手机对未来没帮助。' },
          { q: 44, q_text: 'is encouraged by the family to pursue interests?', answer: 'A', explanation: 'Mike 的父母教他编程，和他一起开发 app，鼓励他学计算机。' },
          { q: 45, q_text: 'has limited access to technology due to the cost?', answer: 'C', explanation: 'John 家里孩子多买不起智能手机/笔记本电脑。' },
          { q: 46, q_text: 'has restrictions on when and where the technology is used?', answer: 'D', explanation: 'Flora 的妈妈规定饭桌上不准用手机。' },
          { q: 47, q_text: 'has saved up to buy the new items?', answer: 'D', explanation: 'Flora 在服装店打工挣钱买最新的手机、平板和电子书。' },
          { q: 48, q_text: 'is not only a consumer but also wants to know how technology works?', answer: 'A', explanation: 'Mike 不只是用技术，还学写程序、开发 app。' },
          { q: 49, q_text: 'is often asked to recommend products?', answer: 'A', explanation: 'Mike 的朋友常向他请教该买什么产品。' },
          { q: 50, q_text: 'does not share the same view of technology as a member of the family?', answer: 'B', explanation: 'Maggie 喜欢纸质书，姐姐喜欢电子书，两人观点不同。' },
          { q: 51, q_text: "thinks it's vital that people keep up with technology developments?", answer: 'D', explanation: 'Flora 认为不学新技术未来难找工作。' },
          { q: 52, q_text: 'believes that technology cannot take the place of some things?', answer: 'B', explanation: 'Maggie 认为书的触感和味道不可替代。' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-2-reading',
      title: 'FCE 全真模拟试题 2 · Reading and Use of English',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Reading and Use of English',
      pages: '23–30',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.161–162)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 选择填空',
        instruction:
          'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
        type: 'mcq_cloze',
        passage:
          'Travelling genes\n\n' +
          "At only eleven years old, Gareth O'Connor is a more (0) experienced traveller than people twice his age. Both of Gareth's parents work in the aviation (1)_____. His father is a pilot and his mother is an air-traffic controller. Both are very (2)_____ jobs and, as such, his parents are often very busy, which is why when they have a(n) (3)_____ for a holiday, they make the most of it. The family have travelled all over the world; to (4)_____ 130 countries and six continents.\n\n" +
          "Some of Gareth's favourite (5)_____ include Argentina and Iceland. In Argentina he was able to trek across the Andes with his family and spend (6)_____ in the beautiful capital, Buenos Aires. In Iceland, one of the most (7)_____ things Gareth has ever done was to go whale-watching. All of this travelling has (8)_____ him to start a blog about his travels and it looks like there is no end to this young explorer's adventures.",
        items: [
          { q: 1, opts: ['area', 'industry', 'occupation', 'department'], answer: 1, explanation: 'aviation industry 航空业，固定搭配。' },
          { q: 2, opts: ['responsible', 'trustworthy', 'superior', 'efficient'], answer: 0, explanation: 'responsible jobs 责任重大的工作。' },
          { q: 3, opts: ['reason', 'option', 'occasion', 'opportunity'], answer: 3, explanation: 'an opportunity for a holiday 假期的机会。' },
          { q: 4, opts: ['more', 'around', 'only', 'even'], answer: 1, explanation: 'around 130 countries 大约 130 个国家。' },
          { q: 5, opts: ['destinations', 'targets', 'terminals', 'stations'], answer: 0, explanation: 'favourite destinations 最喜欢的目的地。' },
          { q: 6, opts: ['period', 'moments', 'phases', 'time'], answer: 3, explanation: 'spend time 花时间（固定搭配）。' },
          { q: 7, opts: ['forgettable', 'memorable', 'distinctive', 'catchy'], answer: 1, explanation: 'memorable things 难忘的事情。' },
          { q: 8, opts: ['attracted', 'decided', 'inspired', 'provoked'], answer: 2, explanation: 'inspired him to start 激发他开始……。' },
        ],
      },
      2: {
        title: 'Part 2 · 完形填空',
        instruction:
          'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'open_cloze',
        passage:
          'Parkour\n\n' +
          "Perhaps you have seen an advert or recall the beginning (0) OF a film which showed a man running and climbing (9)_____ impossible heights? Well, what you saw is called parkour – a training method (10)_____ was developed in France in the late 1980s. Parkour includes activities (11)_____ as jumping and swinging as a way (12)_____ moving around the traceur's environment. The name 'traceur' comes from the French and means 'to trace', or follow, a path.\n\n" +
          'The important thing in parkour is (13)_____ the surroundings can be interpreted by the participant. It is necessary (14)_____ them to think creatively about how they can use things to move (15)_____. Not only is it essential for the traceurs to be almost artistic in their thinking but they must be incredibly fit, too, (16)_____ to mention fearless. The method has become increasingly popular since being featured on film, and parkour is now a worldwide phenomenon.',
        items: [
          { q: 9, answer: ['TO'], show: 'TO', explanation: 'climb to 攀爬到（某高度）。' },
          { q: 10, answer: ['WHICH', 'THAT'], show: 'WHICH / THAT', explanation: '定语从句关系代词，指代 method。' },
          { q: 11, answer: ['SUCH'], show: 'SUCH', explanation: 'such as 例如（固定搭配）。' },
          { q: 12, answer: ['OF'], show: 'OF', explanation: 'a way of doing 一种……的方式。' },
          { q: 13, answer: ['HOW'], show: 'HOW', explanation: 'how the surroundings can be interpreted 环境如何被解读。' },
          { q: 14, answer: ['FOR'], show: 'FOR', explanation: 'necessary for them 对他们来说必要。' },
          { q: 15, answer: ['AROUND', 'OVER'], show: 'AROUND / OVER', explanation: 'move around/over 四处/越过移动。' },
          { q: 16, answer: ['NOT'], show: 'NOT', explanation: 'not to mention 更不用说（固定搭配）。' },
        ],
      },
      3: {
        title: 'Part 3 · 词形变换',
        instruction:
          'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'word_formation',
        passage:
          'The 3D printer\n\n' +
          'One of the most (0) EXTRAORDINARY inventions of recent times must be the 3D printer. To many ORDINARY people, it must seem like something from a Star Trek film, beyond the normal limits of (17)_____. In the beginning, 3D printing was used by artists and other (18)_____ individuals to produce stunning artwork, and by digital (19)_____ in architecture and engineering.\n\n' +
          'Recently, the (20)_____ has been developed even further by doctors who are using the (21)_____ advances to help patients. In one example, surgeons in Wales have been using the machine to help a man who had bad facial (22)_____ after a motorbike accident. Half of the man\'s face needed to be (23)_____ and surgeons used 3D-printed titanium to make a new nose and cheekbones for him. The success of the surgery means that the future of medicine has (24)_____ possibilities.',
        items: [
          { q: 17, given: 'IMAGE', answer: ['IMAGINATION'], show: 'IMAGINATION', explanation: 'image → imagination 想象力（名词）。' },
          { q: 18, given: 'CREATE', answer: ['CREATIVE'], show: 'CREATIVE', explanation: 'create → creative 有创造力的（形容词）。' },
          { q: 19, given: 'SPECIAL', answer: ['SPECIALISTS'], show: 'SPECIALISTS', explanation: 'special → specialists 专家（复数名词）。' },
          { q: 20, given: 'PROCEED', answer: ['PROCESS', 'PROCEDURE'], show: 'PROCESS / PROCEDURE', explanation: 'proceed → process/procedure 过程/程序。' },
          { q: 21, given: 'TECHNOLOGY', answer: ['TECHNOLOGICAL'], show: 'TECHNOLOGICAL', explanation: 'technology → technological 技术的（形容词）。' },
          { q: 22, given: 'INJURY', answer: ['INJURIES'], show: 'INJURIES', explanation: 'injury → injuries 伤（复数名词）。' },
          { q: 23, given: 'CONSTRUCT', answer: ['RECONSTRUCTED'], show: 'RECONSTRUCTED', explanation: 'construct → reconstructed 重建（加前缀 re- + 过去分词）。' },
          { q: 24, given: 'END', answer: ['ENDLESS'], show: 'ENDLESS', explanation: 'end → endless 无尽的（加后缀 -less）。' },
        ],
      },
      4: {
        title: 'Part 4 · 句子转换',
        instruction:
          'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0).',
        type: 'key_word_transformation',
        items: [
          {
            q: 25,
            stem: 'I bet John was relieved to finish his exams.',
            key: 'MUST',
            answer: ['must have been a relief'],
            show: 'must have been a relief',
            explanation: 'must have been 表示对过去的肯定推测；a relief 表示"宽慰"。',
          },
          {
            q: 26,
            stem: 'There are fewer cyclists on the roads than there used to be.',
            key: 'AS',
            answer: ['are not as many cyclists', "aren't as many cyclists"],
            show: "are not / aren't as many cyclists",
            explanation: 'not as many...as 不如……那么多。',
          },
          {
            q: 27,
            stem: 'Joanne went out and forgot to turn off the television at home.',
            key: 'ON',
            answer: ['left the television on', 'left the TV on'],
            show: 'left the television (TV) on',
            explanation: 'leave sth on 让……开着（忘记关）。',
          },
          {
            q: 28,
            stem: "'Can you collect me from school at about six, mum?' asked John.",
            key: 'PICK',
            answer: ['could pick him up'],
            show: 'could pick him up',
            explanation: 'pick sb up 接某人；间接引语 can→could。',
          },
          {
            q: 29,
            stem: "Sarah has decided she's not going to play the piano anymore.",
            key: 'GIVE',
            answer: ['give up playing the piano'],
            show: 'give up playing the piano',
            explanation: 'give up doing sth 放弃做某事。',
          },
          {
            q: 30,
            stem: 'There was a lot more rain than we had expected.',
            key: 'SO',
            answer: ['would be so much'],
            show: 'would be so much',
            explanation: 'so much 如此多（修饰不可数名词 rain）。',
          },
        ],
      },
      5: {
        title: 'Part 5 · 阅读选择',
        instruction:
          'You are going to read an extract from a journal in which a teenager called Line describes her experience of moving to different countries. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
        type: 'reading_mcq',
        passage:
          'Always on the move\n\n' +
          "Another day, another school; at least that's what it feels like. The first day at a new school is nerve-wracking enough but this is in a different country, too. In actual fact it's the fourth country I've lived in and I'm only seventeen. My father works for the UN and we've lived all over the world. My parents are from Holland and they both worked for the government, but then my dad was offered this job when I was five. When my dad agreed to it, they made it all seem really exciting. At first, it was like an adventure when we moved to a new home, but it's been a strange journey.\n\n" +
          "We quickly settled into our new home and our new lives in Brussels. I started school and had to learn French, but it wasn't a problem, really; luckily I was so young that learning a language wasn't too difficult. I made friends fairly easily, too, and my brothers soon settled into nursery. However, it wasn't long before we were dragged somewhere else and we had to leave all our new friends behind. My dad had been given a promotion which he was really pleased about. However, my parents didn't even ask our opinion on the move, so once again we were leaving our home for somewhere far away.\n\n" +
          'Our new home in Hong Kong was beautiful and the place itself was amazing, but by now I was nine years old and I didn\'t appreciate any of this. I had made some great friends and was devastated to leave it all behind. I began school, but this time it was a little bit different as I was going to be at an international school, where other children from foreign countries would study in English. At least, this meant that I met children who were in the same position as me, foreigners together in a new country. Many of my classmates had parents who worked for embassies, or for very large international companies, so we all understood how isolating it can be away from home.\n\n' +
          "Eventually, of course, I made some good friends and we learnt to love Hong Kong together and, as we grew up, there were more things for us to do. Hong Kong is still unbelievable – it's so busy and there's so much to do that you're never bored. In addition, there are lots of nationalities there, so now I have friends from all over the world.\n\n" +
          "Before too long, though, my parents were offered another job in Washington DC, USA, but this time they actually asked us what we thought before they decided. One night we all sat around the table together and as a family we discussed how we felt about it. My brothers didn't mind moving; they are a bit younger than me and they were really excited about living in America, although all their knowledge of the country comes from films and TV! As for me, I wasn't happy about it, as, once again, I would have to leave my friends. Finally, we decided to move with the promise that I could visit some of my friends in the holidays.\n\n" +
          "Once again I am beginning to get used to life in an international school. Although we could attend an American high school, my parents thought it was better that we stay with some other students from different countries. The city is great, with lots of beautiful buildings but it's also quite serious as there are lots of politicians here; Hong Kong was definitely better for teenagers. I feel it's getting easier to make friends this time – in fact, I think I've become an expert at it. I was surprised that my parents found it hard to make friends, too. We were talking about it one night and they admitted that they can also feel shy when they start working somewhere new. Well, I suppose that all this moving around has helped me learn how to make new friends with people from different cultures and I'm sure that this will be useful in life.\n\n" +
          "Now, we are still in America. Soon I'll be eighteen and then I won't have to follow my parents if they move countries again. I'm thinking of staying here and starting university. Eventually, I'd love to work for the government, like my parents. However, I am pretty sure that once I have children, I will stay in one country and not move them from place to place. Of course it's nice to see the world, but you're often left with a feeling that you don't have a home of your own and you don't 'belong' anywhere. You may have your family close to you, but it's important to have a community around you, too.",
        items: [
          {
            q: 31,
            q_text: 'How did Line feel when she arrived in Brussels?',
            opts: [
              'She really missed her friends and family.',
              'She felt her parents had lied about how good it would be.',
              'She had no problems adapting to her new life.',
              "She didn't like her new home.",
            ],
            answer: 2,
            explanation: '文中说"it wasn\'t a problem, really"，学法语、交朋友都很容易，无适应问题。',
          },
          {
            q: 32,
            q_text: "Line says that the family was 'dragged' in line 18 to show that",
            opts: [
              'they decided together that they should move again.',
              "her parents didn't give them a choice on whether they should move.",
              'she was glad to leave Belgium and she was excited about moving.',
              'she felt that the move was decided very quickly.',
            ],
            answer: 1,
            explanation: '"dragged" 暗示被拖拽，父母没征求孩子意见就决定搬家。',
          },
          {
            q: 33,
            q_text: 'Why did Line like going to an international school in Hong Kong?',
            opts: [
              'She felt that all the children could relate to each other.',
              'She enjoyed learning English.',
              'She could meet mainly local people.',
              'She thought the teaching was better at this type of school.',
            ],
            answer: 0,
            explanation: '文中说大家都是外国人，"we all understood how isolating it can be away from home"，彼此能理解。',
          },
          {
            q: 34,
            q_text: 'What was different about the way the family decided to move again?',
            opts: [
              'The parents had been offered two countries to choose from.',
              'The parents agreed that Line could join them when she was older.',
              'The parents were told they had no choice in the move abroad.',
              'The parents asked the children for their opinion on the move.',
            ],
            answer: 3,
            explanation: '这次父母"actually asked us what we thought"，征求了孩子意见。',
          },
          {
            q: 35,
            q_text: 'What does Line think is a positive thing about living in so many different countries?',
            opts: [
              'She has owned many different homes.',
              'She has developed good social skills.',
              'She has come closer to her parents.',
              'She is no longer shy.',
            ],
            answer: 1,
            explanation: '文中说"helped me learn how to make new friends with people from different cultures"，社交能力提升。',
          },
          {
            q: 36,
            q_text: "What do we learn about Line's future plans in the final paragraph?",
            opts: [
              'She wants her children to have the same experiences as her.',
              'She wants to return to Belgium or Holland.',
              "She doesn't want her children to move around the world.",
              "She doesn't think it's important for children to see different countries.",
            ],
            answer: 2,
            explanation: '文中说"once I have children, I will stay in one country and not move them"。',
          },
        ],
      },
      6: {
        title: 'Part 6 · 段落匹配',
        instruction:
          'You are going to read a biography of the writer Agatha Christie. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
        type: 'paragraph_matching',
        passage:
          'Agatha Christie\n\n' +
          "The proclaimed Queen of Crime, Agatha Christie remains one of the most popular writers of all time. Her books have been published all over the world. So far, four billion copies of her books have been sold and she has been translated into at least 103 languages. The books have been adapted into films and television series which have been broadcast around the globe. Quite simply, it will be difficult to find a novelist who surpasses Christie's popularity. (37)\n\n" +
          "Born into a wealthy family in England, Christie had an idyllic childhood, surrounded by books and stories told to her by her mother and taught at home by her American father. (38) She began to write poetry and, later, short stories which eventually became books. The early years were a strong influence on the writer's imagination. Many of Christie's books involve exotic locations, such as Egypt and Mesopotamia, and it was during these years that the young Christie and her mother travelled to the these places.\n\n" +
          "Agatha Christie's first novel, The Mysterious Affair at Styles was published in 1920 after a bet with her sister that she could not write a clever detective story. (39) In the First and Second World Wars, Christie worked in the pharmacy in a hospital. It was from this experience that she learnt her knowledge of poisons, which was later put to much use in her detective books. Her success continued with several more books, including Hercule Poirot, the detective whose moustache and egg-shaped head are instantly recognisable.\n\n" +
          "Christie's second husband was Max Mallowan, a well-known archeologist. The couple travelled extensively all over the world and she was able to include these experiences in her novels. (40) Such is the author's fame that one of this hotel suites is named after her and tourists often go the novel's locations to follow in Christie's footsteps.\n\n" +
          "Christie's legacy is immeasurable; her influence on crime fiction and writers can still be seen today. (41) The characters usually have lots of secrets which are discovered by the detective and then, in the final scene of her books, the detective brings all the suspects into one room and reveals the murderer. (42) Other adaptations of her novels have been equally successful; in Britain, all of the Poirot stories have been filmed and continue to delight audiences.",
        options: [
          { label: 'A', text: "One of her most famous books, Murder on the Orient Express, was written during her stay in a hotel in Turkey, and the story itself begins with the characters boarding the luxury train in Istanbul." },
          { label: 'B', text: "Many popular murder mystery images can be found in Christie's work and have had countless imitations." },
          { label: 'C', text: "She is also famous for writing the play, The Mousetrap, which is the longest-running play in history and is well-known for its unexpected 'twist' ending." },
          { label: 'D', text: 'This ending is typical of the murder mysteries solved by Hercule Poirot, her very sharp Belgian detective.' },
          { label: 'E', text: 'Her success began slowly, though, as her book was rejected by six publishers, until five years later, someone recognised its potential.' },
          { label: 'F', text: 'This method of writing was very time-consuming and later she used a dictaphone and a secretary who would type up her recordings.' },
          { label: 'G', text: 'By the age of five, she had taught herself how to read, and her insatiable reading habit meant that she had a good understanding of literature.' },
        ],
        items: [
          { q: 37, answer: 'C', explanation: '空前文讲 Christie 难以超越的知名度，C 项补充她还以剧作《捕鼠器》闻名。' },
          { q: 38, answer: 'G', explanation: '空前文讲童年被书籍环绕，G 项"五岁自学阅读，嗜读"承接童年阅读经历。' },
          { q: 39, answer: 'E', explanation: '空前文讲第一本小说出版，E 项"成功来得缓慢，被六家出版社拒绝"补充出版历程。' },
          { q: 40, answer: 'A', explanation: '空前文讲与丈夫周游世界，A 项"《东方快车谋杀案》写于土耳其酒店"承接旅行经历。' },
          { q: 41, answer: 'B', explanation: '空前文讲 Christie 的遗产和影响，B 项"许多经典推理形象出自其作品并被无数模仿"总结影响。' },
          { q: 42, answer: 'D', explanation: '空前文讲侦探最后召集所有人揭示凶手，D 项"这种结局是波洛侦探案的典型"承接。' },
        ],
      },
      7: {
        title: 'Part 7 · 多文本匹配',
        instruction:
          'You are going to read an article about four teenage girls talking about their experiences of volunteering. For questions 43–52, choose from the teenagers (A–D). The teenagers may be chosen more than once.',
        type: 'multiple_matching',
        sections: [
          {
            label: 'A',
            name: 'Nikki',
            text:
              "I had the greatest experience of my life in Thailand. I was lucky enough to be chosen to work as a volunteer in an elephant sanctuary just south of Bangkok. I've always loved animals and I hope to become a vet when I finish university. I stayed for ten weeks and it was hard; we worked six days a week helping the keepers to look after the elephants. If the sanctuary didn't look after the elephants, no one else would and they'd be left wandering the streets. So they bring them to the shelter, which is in the forest where the elephants used to live. They really are 'gentle giants' and I was allowed to wash them, feed them and even take them for walks in the forest. It's really opened my eyes and I'm hoping to go back there as soon as possible.",
          },
          {
            label: 'B',
            name: 'June',
            text:
              "I've always wanted to be a teacher. My mum teaches in a primary school and I think it's the best job in the world. I enjoy working with children and also, if I want to be a teacher, I have to show that I've had experience with them, too. My mum is a Guide leader, too – it's an organisation where girls can do different activities, many of which help the community. I help out at the Guide meetings and we've recently been doing some work to help clean up the local park by planting trees and cleaning up graffiti. Spending time with the girls is really rewarding. I've learnt a lot about how to communicate with young people and now I can't wait to put it into practice when I teach.",
          },
          {
            label: 'C',
            name: 'Eve',
            text:
              "I live in the countryside and there's a large castle near my village which attracts many visitors. My grandmother volunteers there as a tour guide. She takes the tourists around the castle and explains the history of the castle and its inhabitants. That's fascinating and I've always enjoyed visiting the castle and its beautiful gardens, so last year I started working there at weekends. We don't get paid for working there as it's a charity and it survives on donations from visitors, plus what we make at the gift shop. I work in the café as a waitress and all the food is grown in the gardens at the castle, so it's very popular with tourists. I hope to be a guide one day, too, but I've got lots to learn first!",
          },
          {
            label: 'D',
            name: 'Karen',
            text:
              "I had some problems when I was younger – I was bullied really badly at school by a group of girls. They used to call me names and even hit me once, but, luckily, my parents were great and they told my teachers so the girls stopped. After that, I always wanted to help kids with similar problems so that they didn't feel alone. I found out about a volunteer counselling website run by young people, for young people, and they accepted my application. I've been working there for two years and I really think I've made a difference. Most of the people who have emailed or phoned us usually report later that things have improved and this encourages me to continue helping. I'm starting college next year but I'm going to continue working for the site as long as I can.",
          },
        ],
        items: [
          { q: 43, q_text: 'works somewhere which promotes local culture?', answer: 'C', explanation: 'Eve 在城堡工作，向游客讲解城堡历史，推广当地文化。' },
          { q: 44, q_text: "is following in one of her parents' footsteps?", answer: 'B', explanation: 'June 的妈妈是老师，她也想当老师；妈妈是 Guide leader，她也帮忙。' },
          { q: 45, q_text: 'is helping those who are having emotional difficulties?', answer: 'D', explanation: 'Karen 在心理咨询网站帮助被欺负的孩子。' },
          { q: 46, q_text: 'hopes the volunteering will help with a future career?', answer: 'B', explanation: 'June 想当老师，做 Guide 志愿者积累与儿童相处的经验。' },
          { q: 47, q_text: 'was surprised by her experiences?', answer: 'A', explanation: 'Nikki 说"it\'s really opened my eyes"，被经历启发。' },
          { q: 48, q_text: 'feels that her work has got a good response from those she helped?', answer: 'D', explanation: 'Karen 说"people report that things have improved"，得到积极反馈。' },
          { q: 49, q_text: 'is helping a group who otherwise would be ignored?', answer: 'A', explanation: 'Nikki 帮助大象，如果没有保护区它们会流浪街头无人理。' },
          { q: 50, q_text: 'works somewhere where money is made from selling food and souvenirs?', answer: 'C', explanation: 'Eve 在城堡的咖啡馆和礼品店工作，靠捐赠和销售维持。' },
          { q: 51, q_text: 'would like to work in another way in the same place?', answer: 'C', explanation: 'Eve 说"I hope to be a guide one day"，想成为导游。' },
          { q: 52, q_text: 'is helping to improve the appearance of her neighbourhood?', answer: 'B', explanation: 'June 清理公园、种树、清理涂鸦，改善社区环境。' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-3-reading',
      title: 'FCE 全真模拟试题 3 · Reading and Use of English',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Reading and Use of English',
      pages: '42–49',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.167)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 选择填空',
        instruction:
          'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
        type: 'mcq_cloze',
        passage:
          'The Modern Olympic Games\n\n' +
          'In 1894, Baron de Coubertin (0) founded the International Olympic Committee (IOC). The modern Olympic Games is the world\'s leading international sporting (1)_____. More than 200 nations (2)_____ in this magnificent gathering which occurs every four years. (3)_____ the 20th and 21st centuries several changes have been made to the Games; these (4)_____ the introduction of the Winter Games, the Paralympic Games for athletes with a(n) (5)_____ and the Youth Olympic Games for teenage athletes. The IOC is (6)_____ for deciding where the Games will be held.\n\n' +
          'The host city has to organise and fund the Games and must (7)_____ the rules of the Olympic Charter. Over 13,000 athletes compete in the Summer and Winter Olympics in nearly 400 events and 33 sports. The Games have now grown to the point that nearly every nation is represented and they give the host country the (8)_____ to show the rest of the world exactly what it is made of.',
        items: [
          { q: 1, opts: ['event', 'article', 'race', 'act'], answer: 0, explanation: 'sporting event 体育赛事，固定搭配。' },
          { q: 2, opts: ['enter', 'contribute', 'collaborate', 'participate'], answer: 3, explanation: 'participate in 参加，200 多个国家参与。' },
          { q: 3, opts: ['Before', 'During', 'By', 'For'], answer: 1, explanation: 'During the 20th and 21st centuries 在 20 和 21 世纪期间。' },
          { q: 4, opts: ['contain', 'include', 'consist', 'comprise'], answer: 1, explanation: 'include 包括，这些变化包括冬季奥运会等。' },
          { q: 5, opts: ['disability', 'ailment', 'weakness', 'drawback'], answer: 0, explanation: 'disability 残疾，残奥会为有残疾的运动员设立。' },
          { q: 6, opts: ['bound', 'liable', 'responsible', 'obligated'], answer: 2, explanation: 'responsible for 对……负责，IOC 负责决定举办地。' },
          { q: 7, opts: ['stick', 'agree', 'keep', 'follow'], answer: 3, explanation: 'follow the rules 遵守规则，固定搭配。' },
          { q: 8, opts: ['opportunity', 'likelihood', 'prospect', 'possibility'], answer: 0, explanation: 'opportunity 机会，give sb the opportunity to do sth 给某人做某事的机会。' },
        ],
      },
      2: {
        title: 'Part 2 · 完形填空',
        instruction:
          'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'open_cloze',
        passage:
          'Extreme sports\n\n' +
          'With our fast-moving, modern lifestyle, more and (0) MORE people are getting involved in some extreme sports. So (9)_____ exactly are extreme sports, you may ask yourself. Well, they are all about excitement, skill and danger. People who (10)_____ part in them use their skill and experience to control the many risks involved. That control is what makes them sports and (11)_____ just irresponsible activities. There are many different extreme sports, (12)_____ bungee jumping to paragliding, but one of the most dangerous must be surfing the big wave. Some of the waves are up to 12 metres high, and occasionally even higher. (13)_____ do you get involved in an extreme sport? The best way to take (14)_____ an activity like this is to join a club. (15)_____ way you can get expert advice and also borrow any special equipment that you may need. You can find your local club (16)_____ contacting the sport\'s national organisation.',
        items: [
          { q: 9, answer: ['WHAT'], show: 'WHAT', explanation: 'So what exactly are...? 那么究竟什么是……？what 引导疑问句。' },
          { q: 10, answer: ['TAKE'], show: 'TAKE', explanation: 'take part in 参加，固定搭配。' },
          { q: 11, answer: ['NOT'], show: 'NOT', explanation: 'not just 不仅仅，与 sports 形成对比。' },
          { q: 12, answer: ['FROM'], show: 'FROM', explanation: 'from...to... 从……到……，列举范围。' },
          { q: 13, answer: ['HOW'], show: 'HOW', explanation: 'How do you get involved...? 你如何参与……？how 提问方式。' },
          { q: 14, answer: ['UP'], show: 'UP', explanation: 'take up 开始从事，固定搭配。' },
          { q: 15, answer: ['THIS', 'THAT'], show: 'THIS / THAT', explanation: 'This/That way 这样的话，承接上文。' },
          { q: 16, answer: ['BY', 'AFTER'], show: 'BY / AFTER', explanation: 'by doing sth 通过做某事；after doing sth 在做某事之后。' },
        ],
      },
      3: {
        title: 'Part 3 · 词形变换',
        instruction:
          'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'word_formation',
        passage:
          'Cycling\n\n' +
          'Cycling has been around as an (0) ACTIVITY since the early 19th century. It was (17)_____ a form of transport, but in more recent years it has increased in (18)_____ and has fast become a leading sport and form of recreation. Bicycles also provide (19)_____ benefits when compared to cars. These include exercise, a reduction in pollution and traffic congestion, and easier parking. Cycling is also (20)_____ cheaper as there are no fuel costs. On the other hand, there are some (21)_____ and disadvantages regarding cycling. Probably the most serious of these is reduced (22)_____ in an accident, particularly when a motor vehicle is also involved. Also, travel times are obviously a lot longer on a bike in (23)_____ to a car, and cyclists are very vulnerable to bad weather conditions. It\'s not really possible to take passengers on a bicycle either, unless it is a tandem, and the level of (24)_____ required to cycle long distances is quite high.',
        items: [
          { q: 17, given: 'ORIGIN', answer: ['ORIGINALLY'], show: 'ORIGINALLY', explanation: 'origin → originally 最初，本来。' },
          { q: 18, given: 'POPULAR', answer: ['POPULARITY'], show: 'POPULARITY', explanation: 'popular → popularity 普及，流行。' },
          { q: 19, given: 'NUMBER', answer: ['NUMEROUS'], show: 'NUMEROUS', explanation: 'number → numerous 许多的。' },
          { q: 20, given: 'FINANCE', answer: ['FINANCIALLY'], show: 'FINANCIALLY', explanation: 'finance → financially 财务上，经济上。' },
          { q: 21, given: 'CRITICISE', answer: ['CRITICISMS'], show: 'CRITICISMS', explanation: 'criticise → criticisms 批评，复数形式。' },
          { q: 22, given: 'PROTECT', answer: ['PROTECTION'], show: 'PROTECTION', explanation: 'protect → protection 保护。' },
          { q: 23, given: 'COMPARE', answer: ['COMPARISON'], show: 'COMPARISON', explanation: 'compare → comparison 比较，in comparison to 与……相比。' },
          { q: 24, given: 'FIT', answer: ['FITNESS'], show: 'FITNESS', explanation: 'fit → fitness 健康，体能。' },
        ],
      },
      4: {
        title: 'Part 4 · 句子转换',
        instruction:
          'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0).',
        type: 'key_word_transformation',
        items: [
          { q: 25, stem: 'You ought to drive home before the snow starts.', key: 'BETTER', answer: ['had better drive'], show: 'had better drive', explanation: 'ought to → had better 应该，最好。' },
          { q: 26, stem: 'The teacher said I could leave the lesson early.', key: 'PERMISSION', answer: ['gave me permission to leave', 'granted me permission to leave'], show: 'gave / granted me permission to leave', explanation: 'give/grant sb permission to do sth 允许某人做某事。' },
          { q: 27, stem: 'Take a coat with you as it might rain this afternoon.', key: 'CASE', answer: ['in case it rains', 'in case of rain'], show: 'in case it rains / in case of rain', explanation: 'in case 以防；in case of + 名词，in case + 句子。' },
          { q: 28, stem: "It's four months since I took my car to the car wash.", key: 'HAD', answer: ['have not had'], show: 'have not had', explanation: 'have not had sth done for + 时间段，表示多久没做某事。' },
          { q: 29, stem: 'Nobody in my family enjoyed the film except for Jim.', key: 'EXCEPTION', answer: ['the exception of Jim'], show: 'the exception of Jim', explanation: 'with the exception of 除……之外，固定搭配。' },
          { q: 30, stem: 'The notice says that you have to show your identification at the door.', key: 'MUST', answer: ['must be shown'], show: 'must be shown', explanation: 'have to → must 必须；show → be shown 被动语态。' },
        ],
      },
      5: {
        title: 'Part 5 · 阅读选择',
        instruction:
          "You are going to read an extract from a short story about a teenage boy called Sam, who has been in an accident. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.",
        type: 'reading_mcq',
        passage:
          'The race of his life\n\n' +
          "Sam had never really expected to get this far. In fact, if the truth be told, Sam had thought that he'd never walk again. The night of the accident flashed through his mind like a Hollywood horror movie that he'd watched too many times. But the memory of that fateful day couldn't be turned off. It would be there in his head and heart forever. Sometimes it hit him so hard that he had to catch his breath to give him a moment to compose himself, to take back control of his emotions and still his racing heart. He had to accept the fact that his best friend could easily have been injured as badly as he had but, by some miracle, James had walked away from the scene with hardly a scratch on him. Sam, on the other hand, had not been so fortunate. He looked down at his legs; one made of flesh, blood and bone, and the other. Well, the other was his superhuman leg, the one made of carbon fibre, his blade.\n\n" +
          "Who would have thought that out of something so terrible something so remarkable could develop? Sam had been training hard for the last six months. He hadn't found it a chore; he'd savoured every moment as his confidence and self-respect had ever so slowly come back to him. In the very beginning, every step had seemed like a kilometre. But, despite the physical pain, his soul felt like he was flying. He'd always known that he would conquer his disability. He'd been given another chance in life and he was going to grab it with both hands and not let go.\n\n" +
          "Ironically, James felt guilty. Guilty because he'd got off so lightly that night. He didn't entirely blame himself for the accident but he'd played his part in it. They had both been laughing and joking and bopping in their seats to the new music CD that he had bought for Sam's birthday the day before. He blamed himself for distracting Sam. However, the reality was that neither of them could have predicted that the deer was going to run out from the trees, and, by avoiding it, they had run into a huge tree themselves. Had they not been wearing their seat belts, it would have been far worse.\n\n" +
          "But that was then. Today was the day they were going to run their first marathon together. Although they were best friends, both Sam and James wanted to outdo the other today. Their competitive spirit was strong. The other runners were almost irrelevant to them, almost as though they weren't there. Sam could feel the adrenalin rushing through his body. James was both excited and nervous. Would he make it to the end? And if he did, would he get there before Sam with his 'bionic leg'? That was the unknown factor. Would it make Sam slower or faster? He'd always felt that Sam was holding back when they were training. James was never convinced that Sam had really given it his all yet, and today he might just pull something quite remarkable out of the bag. He had his stubborn inner strength that had got him this far. He wasn't one for losing in life.\n\n" +
          "'All runners get ready – on your marks – get set – go!' With the crack of the starting pistol ringing in their ears, James and Sam flew forward like two bullets out of a gun.",
        items: [
          {
            q: 31,
            q_text: 'From the first paragraph we understand that Sam',
            opts: [
              'had an injury that affected his breathing.',
              'would never completely get over the shock of the accident.',
              'regularly woke up from nightmares about the accident.',
              "wasn't told the truth about his injuries by the doctors.",
            ],
            answer: 1,
            explanation: '文中说"the memory of that fateful day couldn\'t be turned off. It would be there in his head and heart forever"，说明他永远无法完全从事故的震撼中恢复。',
          },
          {
            q: 32,
            q_text: "What do we learn about Sam's attitude towards James in the first paragraph?",
            opts: [
              'He resented the fact that James had left the scene of the accident.',
              "He didn't understand how their injuries differed so greatly.",
              'He believed that James was always luckier in life than him.',
              'He became very emotional whenever he and James talked about the accident.',
            ],
            answer: 1,
            explanation: 'Sam 不得不接受 James 几乎毫发无伤而自己却严重受伤这一事实，暗示他对两人伤情差异之大难以理解。',
          },
          {
            q: 33,
            q_text: "What does 'it' refer to in line 30?",
            opts: [
              'his disability',
              'his blade',
              'his fear',
              'his second chance',
            ],
            answer: 3,
            explanation: '"He\'d been given another chance in life and he was going to grab it with both hands and not let go." 中 it 指代 another chance = his second chance。',
          },
          {
            q: 34,
            q_text: 'The accident was caused by',
            opts: [
              'something beyond their control.',
              "Sam's dangerous driving.",
              "James's irresponsible behaviour.",
              'their running over a deer.',
            ],
            answer: 0,
            explanation: '文中说"neither of them could have predicted that the deer was going to run out"，鹿突然冲出是他们无法控制的。',
          },
          {
            q: 35,
            q_text: 'What was the most important thing for both Sam and James before the race?',
            opts: [
              'They wanted to finish it together.',
              'Both of them wanted to beat all the other runners.',
              "They didn't want Sam to be hurt by the other runners.",
              'They both desperately wanted to beat each other.',
            ],
            answer: 3,
            explanation: '文中说"both Sam and James wanted to outdo the other today. Their competitive spirit was strong."，两人都想击败对方。',
          },
          {
            q: 36,
            q_text: 'What advantage did Sam have over James?',
            opts: [
              'Sam had been the faster of the two in training.',
              "Sam's blade gave him a clear advantage.",
              "James was unsure of what Sam was really capable of.",
              "Sam wasn't an emotionally strong person.",
            ],
            answer: 2,
            explanation: 'James 从不相信 Sam 训练时全力以赴，今天可能拿出惊人表现，说明 James 不确定 Sam 的真实能力。',
          },
        ],
      },
      6: {
        title: 'Part 6 · 段落匹配',
        instruction:
          'You are going to read a magazine article about yoga. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
        type: 'paragraph_matching',
        passage:
          'The changing face of yoga\n\n' +
          'The image of yoga is changing dramatically as it is becoming a \'competitive sport\'.\n\n' +
          'The whole point of yoga is that it is meant to promote a stillness of the heart and mind. It should turn one\'s attention away from the stresses of everyday life and help you to focus on bettering yourself. (37)_____ Not that you would know this from attending many yoga classes nowadays. The values yoga has always aimed to encourage are in danger of being reduced, if not completely destroyed, by a competitive edge that is ruining the ancient practice. (38)_____ Whether it\'s about who has the latest designer yoga outfits or expensive exercise mat, or even who can do the most complicated position, the atmosphere of friendship and harmony with one\'s fellow man is being destroyed.\n\n' +
          'Success in yoga classes is fast becoming about how much further you can push your body than the person next to you in the class. (39)_____ Not that degrees of stamina and flexibility have become the only ways to prove superiority in the yoga class. As its commercial appeal has grown in recent years, so too have the yoga trappings that many see as status symbols. It\'s all about outdoing others in any way you can, rather than just about who can perfect their posture for their own personal achievement.\n\n' +
          'There is also a battle to get to the top of the pile of yoga instructors. (40)_____ Of course, the more famous they are, the better, and famous clients equal a better reputation and, therefore, higher charges.\n\n' +
          'Surprisingly, though, there is a school of thought that believes that an element of competition is what people need in order to develop their yoga skills. Their philosophy is that the most important thing for those attending a yoga class is to understand from the beginning what their own personal goals are and what is on offer from the particular class they choose. (41)_____ If you want to exercise in a peaceful environment, you need to stick to the traditional styles rather than the more rocky, loud, modern classes that are now on offer.\n\n' +
          'Without a shadow of a doubt there are yoga instructors who positively encourage their students to physically move beyond where they should be, considering their own experience and physical abilities. The instructors sometimes do this to boost their own status, giving the impression that they are helping their students to achieve great things quite quickly. (42)_____ Ending up in hospital is never a good idea.\n\n' +
          'All things considered, like most things in life, we need to make of it what we can. In other words, yoga, like any other sport or activity, can offer something for everyone. It\'s just a case of being sensible and choosing the right class for your own personal needs. The best way to do this is to observe a class before you sign up and talk to the other students. Be yourself and don\'t ever worry about what the people around you are doing.',
        options: [
          { label: 'A', text: 'This involves getting as many celebrity clients as possible on your list.' },
          { label: 'B', text: "It seems that the stressed executives and young mothers who love yoga so much are struggling to stop showing off once they enter the yoga studio." },
          { label: 'C', text: "It's important to make sure you always buy the most expensive yoga clothes available in order to perfect your technique." },
          { label: 'D', text: 'Yoga is rooted in compassion and sympathy for others.' },
          { label: 'E', text: 'This is a potentially dangerous practice, though, as it can easily lead to demotivation, disappointment and, even worse, serious injury in some cases.' },
          { label: 'F', text: "It's no good enrolling in a class that is in a noisy gym, when what you really want is a place of meditative calm." },
          { label: 'G', text: 'Even the teachers seem to be pushing their students that bit further than they would have done in the past.' },
        ],
        items: [
          { q: 37, answer: 'D', explanation: '空前文讲瑜伽旨在促进心灵宁静，D 项"瑜伽根植于同情与怜悯"补充瑜伽的核心价值，与后文"竞争性正在毁坏"形成对比。' },
          { q: 38, answer: 'B', explanation: '空前文讲竞争性正在毁坏瑜伽，B 项"压力大的高管和年轻母亲难以停止炫耀"具体说明竞争表现。' },
          { q: 39, answer: 'G', explanation: '空前文讲瑜伽课变成比谁更能挑战身体，G 项"老师也比过去更推动学生"延伸竞争主题。' },
          { q: 40, answer: 'A', explanation: '空前文讲瑜伽教练争夺顶尖地位，A 项"这包括尽量多拉名人客户"解释如何争夺，与后文"越有名越好"衔接。' },
          { q: 41, answer: 'F', explanation: '空前文讲要理解个人目标选对课程，F 项"报名嘈杂健身房的课不好，若你要冥想般宁静"举例说明选课的重要性。' },
          { q: 42, answer: 'E', explanation: '空前文讲教练鼓励学生超越极限，E 项"这是潜在危险做法，可能导致受伤"承接，与后文"进医院不好"衔接。' },
        ],
      },
      7: {
        title: 'Part 7 · 多文本匹配',
        instruction:
          'You are going to read an article about four sports instructors talking about water sports. For questions 43–52, choose from the instructors (A–D). The instructors may be chosen more than once.',
        type: 'multiple_matching',
        sections: [
          {
            label: 'A',
            name: 'Dave Hanson — Jet ski instructor',
            text:
              "Jet skiing is a thrilling sport that needs to be learned in a safe environment under the guidance of a qualified watercraft instructor. Jet skis can reach speeds of up to 60 mph and are specially designed for performing or, racing. These incredible machines will get your heart pumping in no time. On our one-day courses you will be surprised at how much you can learn. Once you have arrived and been welcomed, your experience will begin with a full safety briefing and an introduction to stand-up jets skiing. As far as I'm concerned, this part of the day is crucial for everyone's safety, as the last thing we want is for someone to end up in hospital. We will run you through the basics, including handling and steering on your knees, before progressing to stand-ups and a number of tricks. You'll get your chance to push your fears to the limit with a variety of gravity-defying manoeuvres from high-speed turns to power jumps. Great for anyone who really likes to live in the fast lane. The day will close with a debrief back at the centre, including a presentation of your certificate.",
          },
          {
            label: 'B',
            name: 'Bob Daniels — Scuba diving instructor',
            text:
              "If you've always wanted to find out what scuba diving is all about but aren't ready to take the plunge into a certification course, you should try our beginners course. During the experience you will learn to use scuba equipment in shallow water and learn some of the basic principles of diving, such as hand signals and movement under the watchful eye of a qualified instructor. Your day will start with a greeting and introduction from the friendly staff. Complimentary refreshments will be offered to you before you head to the dive shop, where you will have a safety briefing and a demonstration of how your scuba kit works. Next, you'll leave for the pool (about a five-minute drive away) and then the fun begins as you hit the water. You'll have 90 minutes in the pool and learn what wearing scuba equipment feels like and how easy it is to move around underwater while wearing it. There is a knack to it but once you've been shown how, it will all become clear to you. Some people, however, might find the kit too heavy for them, but we'll check with everyone beforehand. You will also find out what it's like to breathe underwater and whether you'll be comfortable there or not. If you are, then you'll be ready to consider the next step towards the scuba certification course.",
          },
          {
            label: 'C',
            name: 'Jane Epsom — Whitewater rafting instructor',
            text:
              "Whitewater rafting has become one of the most extreme sports since its breakthrough in the 1970s. You and your fellow rafters must work together as you guide yourselves down the raging rapids of our fantastic purpose-built course. When you arrive at the centre, you will be shown a safety DVD and you'll have a chat with your instructor, who will guide you through the basics before taking you down to the rapids on foot. You will be in a 6 – 8 man raft. You'll need to have paid attention to your instructor beforehand and remember to paddle hard as you launch the craft over the swells and hold on tight as you push through the immense waves. Our 700-metre international, Grade 3 downhill course is perfect for practising the basic principles of whitewater rafting.",
          },
          {
            label: 'D',
            name: 'Jason White — Kitesurfing instructor',
            text:
              "Kitesurfing takes the best from surfing, wakeboarding, windsurfing and paragliding to create a unique and thrilling watersport. First, you will learn the theory of kitesurfing. This includes all the fundamentals of flying a kite and learning about wind windows (the flyable area for the kite). After you've mastered kite control and how they fly, it's then on to the setup. You will learn how to safely launch and land your kitesurfing kite and learn the safety features on the control bar and also what to do in a sticky situation. The next, and most exciting, part of the lesson is hitting the water and getting pulled by the kite; also known as 'body-dragging'. The lesson finishes with packing up the kites and equipment. Surprisingly, this is quite a challenge and you need to allow a fair amount of time to do this. If, at the end of the day you fancy treating yourself to a slap-up meal, there's a very good restaurant near the centre.",
          },
        ],
        items: [
          { q: 43, q_text: 'teaches you how to communicate with your hands?', answer: 'B', explanation: 'Bob 教水肺潜水，包括"hand signals 手势"水下沟通。' },
          { q: 44, q_text: 'has a difficult job to do before the lesson ends?', answer: 'D', explanation: 'Jason 说课程结束时"packing up the kites and equipment... this is quite a challenge"。' },
          { q: 45, q_text: 'will show you a safety film?', answer: 'C', explanation: 'Jane 说"you will be shown a safety DVD"。' },
          { q: 46, q_text: 'will test your courage?', answer: 'A', explanation: 'Dave 说"push your fears to the limit with gravity-defying manoeuvres"，测试胆量。' },
          { q: 47, q_text: 'offers a free drink?', answer: 'B', explanation: 'Bob 说"Complimentary refreshments will be offered"，提供免费饮品。' },
          { q: 48, q_text: 'thinks some people may not be physically able to do something?', answer: 'B', explanation: 'Bob 说"Some people might find the kit too heavy for them"，有人可能体力不够。' },
          { q: 49, q_text: 'teaches you how to deal with a dangerous situation?', answer: 'D', explanation: 'Jason 教"what to do in a sticky situation"如何应对危险情况。' },
          { q: 50, q_text: "says their sport has evolved from other sports?", answer: 'D', explanation: 'Jason 说"Kitesurfing takes the best from surfing, wakeboarding, windsurfing and paragliding"，融合其他运动。' },
          { q: 51, q_text: 'is primarily concerned with your safety?', answer: 'A', explanation: 'Dave 说"this part of the day is crucial for everyone\'s safety"，最关注安全。' },
          { q: 52, q_text: 'mentions that teamwork is crucial?', answer: 'C', explanation: 'Jane 说"You and your fellow rafters must work together"，强调团队合作。' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-4-reading',
      title: 'FCE 全真模拟试题 4 · Reading and Use of English',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Reading and Use of English',
      pages: '61–68',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.173)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 选择填空',
        instruction:
          'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
        type: 'mcq_cloze',
        passage:
          'Teen breaks – adventures for teenagers\n\n' +
          "Your adventure starts here. With so many holidays to (0) choose from, it can be difficult to know where to start. So, we've made it nice and easy for you to find (1)_____ what you are looking for. We have eight camps which are (2)_____ across the country, so whether you're (3)_____ somewhere close to home or a new and exciting destination, there's something for everyone. There are twelve different holidays on (4)_____ including the ever-popular multi-activity holiday, or, one of our other thrilling adventure holidays for those who want to (5)_____ more time on a favourite or new hobby.\n\n" +
          "All our adventure holidays and camps are tailored for certain age ranges to (6)_____ that everyone has the best possible time. We offer an unforgettable experience for every visitor, from our youngest first-time campers to our seasoned teenage pros. There's a(n) (7)_____ of adventure and round-the-clock fun; the shared camaraderie of stories around the campfire and that exhilarating first taste of independence. You will get the chance to chill out with new friends and (8)_____ the most of some quality parent-free time away from home.",
        items: [
          { q: 1, opts: ['definitely', 'exactly', 'obviously', 'quite'], answer: 1, explanation: 'find exactly what 确切找到，exactly 强调精准。' },
          { q: 2, opts: ['detected', 'spotted', 'located', 'settled'], answer: 2, explanation: 'located 位于，分布在各地。' },
          { q: 3, opts: ['against', 'in for', 'up to', 'after'], answer: 3, explanation: 'be after 寻找，是否在找……' },
          { q: 4, opts: ['offer', 'suggestion', 'proposal', 'availability'], answer: 0, explanation: 'on offer 供选择，固定搭配。' },
          { q: 5, opts: ['make', 'spend', 'take', 'give'], answer: 1, explanation: 'spend time on sth 在某事上花时间。' },
          { q: 6, opts: ['provide', 'ensure', 'establish', 'assure'], answer: 1, explanation: 'ensure that 确保……，保证。' },
          { q: 7, opts: ['thought', 'perception', 'sense', 'impression'], answer: 2, explanation: 'a sense of adventure 冒险感，固定搭配。' },
          { q: 8, opts: ['make', 'do', 'take', 'have'], answer: 0, explanation: 'make the most of 充分利用，固定搭配。' },
        ],
      },
      2: {
        title: 'Part 2 · 完形填空',
        instruction:
          'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'open_cloze',
        passage:
          'Youth railcard\n\n' +
          "If you are aged (0) BETWEEN 16 and 25, you can apply (9)_____ a young person's railcard. This card costs just £36 and will save you one third on rail fares throughout Great Britain. A one-year railcard that works (10)_____ at £3 per month means huge savings. There is also a three-year railcard providing you with (11)_____ greater savings and you are eligible to buy it (12)_____ until the day before your 24th birthday. You can use your railcard to make savings on (13)_____ long and short journeys throughout the week. The only restriction is that if you travel between 4.30 am and 10 am Monday to Friday (except in July and August), a minimum fare of £12 (14)_____ apply. You can buy your railcard online and we aim to dispatch it within one working day of your order. (15)_____ , we advise you to allow five working days for your card to reach you. Please leave (16)_____ time before your journey for it to be sent to you.",
        items: [
          { q: 9, answer: ['FOR'], show: 'FOR', explanation: 'apply for 申请，固定搭配。' },
          { q: 10, answer: ['OUT'], show: 'OUT', explanation: 'work out at 合计为，固定搭配。' },
          { q: 11, answer: ['EVEN', 'MUCH'], show: 'EVEN / MUCH', explanation: 'even/much greater 甚至更大，修饰比较级。' },
          { q: 12, answer: ['UP'], show: 'UP', explanation: 'up until 直到，固定搭配。' },
          { q: 13, answer: ['BOTH'], show: 'BOTH', explanation: 'both...and... 既……也……，连接 long and short。' },
          { q: 14, answer: ['WILL'], show: 'WILL', explanation: 'will apply 将适用，助动词表将来。' },
          { q: 15, answer: ['HOWEVER'], show: 'HOWEVER', explanation: 'However 然而，转折，与 dispatch within one day 形成对比。' },
          { q: 16, answer: ['ENOUGH', 'AMPLE'], show: 'ENOUGH / AMPLE', explanation: 'enough/ample time 足够的时间。' },
        ],
      },
      3: {
        title: 'Part 3 · 词形变换',
        instruction:
          'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'word_formation',
        passage:
          'Soon-to-be airport\n\n' +
          "The (0) CONSTRUCTION of our country's second largest airport, which will be located close to a popular (17)_____ site, is to go ahead. Local people have welcomed the (18)_____ , saying it will bring jobs to the area and therefore greatly reduce (19)_____ . However, critics are not convinced and are worried that the (20)_____ of international flights into an airport, just 25 miles from the famous ruins will bring mass tourism and (21)_____ environmental consequences. Also, some foreign embassies have warned that a (22)_____ organisation is planning to kidnap international tourists. They claim that our government has an (23)_____ to protect tourists who visit the area and they need to find a (24)_____ to the potential risks to foreign nationals.",
        items: [
          { q: 17, given: 'CULTURE', answer: ['CULTURAL'], show: 'CULTURAL', explanation: 'culture → cultural 文化的，cultural site 文化遗址。' },
          { q: 18, given: 'DEVELOP', answer: ['DEVELOPMENT'], show: 'DEVELOPMENT', explanation: 'develop → development 发展，开发。' },
          { q: 19, given: 'EMPLOY', answer: ['UNEMPLOYMENT'], show: 'UNEMPLOYMENT', explanation: 'employ → unemployment 失业，reduce unemployment 减少失业。' },
          { q: 20, given: 'ARRIVE', answer: ['ARRIVAL', 'ARRIVALS'], show: 'ARRIVAL(S)', explanation: 'arrive → arrival(s) 到达，the arrival of international flights。' },
          { q: 21, given: 'DEVASTATE', answer: ['DEVASTATING'], show: 'DEVASTATING', explanation: 'devastate → devastating 毁灭性的。' },
          { q: 22, given: 'CRIME', answer: ['CRIMINAL'], show: 'CRIMINAL', explanation: 'crime → criminal 犯罪的，criminal organisation 犯罪组织。' },
          { q: 23, given: 'OBLIGE', answer: ['OBLIGATION'], show: 'OBLIGATION', explanation: 'oblige → obligation 义务，have an obligation to 有义务……。' },
          { q: 24, given: 'SOLVE', answer: ['SOLUTION'], show: 'SOLUTION', explanation: 'solve → solution 解决方案，find a solution to 找到……的解决方案。' },
        ],
      },
      4: {
        title: 'Part 4 · 句子转换',
        instruction:
          'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0).',
        type: 'key_word_transformation',
        items: [
          { q: 25, stem: 'Jason asked me the price of the ticket to the concert.', key: 'MUCH', answer: ['how much it cost', 'how much it was'], show: 'how much it cost / was', explanation: 'how much 多少钱，提问价格。' },
          { q: 26, stem: 'I last saw her four weeks ago.', key: 'FOR', answer: ["haven't seen her for", 'have not seen her for'], show: "haven't / have not seen her for", explanation: 'haven\'t seen sb for + 时间段，表示多久没见某人。' },
          { q: 27, stem: "It's a waste of time trying to make him change his mind.", key: 'POINT', answer: ['no point in trying', 'no point trying'], show: 'no point (in) trying', explanation: "there's no point (in) doing sth 做某事没有意义。" },
          { q: 28, stem: "I'm sorry I didn't tell you earlier.", key: 'WISH', answer: ['wish I had', "wish I'd told you"], show: 'wish I had / I\'d told you', explanation: 'wish + 过去完成时，对过去的遗憾。' },
          { q: 29, stem: 'He wants to go to the beach instead of the park.', key: 'RATHER', answer: ['would rather go to the'], show: 'would rather go to the', explanation: 'would rather do A than B 宁愿做 A 而不做 B。' },
          { q: 30, stem: 'You can leave early but you must finish your work first.', key: 'LONG', answer: ['as long as you finish', 'so long as you finish'], show: 'as / so long as you finish', explanation: 'as/so long as 只要，引导条件状语从句。' },
        ],
      },
      5: {
        title: 'Part 5 · 阅读选择',
        instruction:
          'You are going to read an extract from a short story about a young woman called Anna. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
        type: 'reading_mcq',
        passage:
          'An African adventure\n\n' +
          "Anna realised she was tightly clutching the seat of the car as the taxi hurtled down the bumpy road. She was sure that she'd be covered in bruises by the time they got to the town centre. The driver, however, was a happy soul, singing his heart out to a very loud and crackling radio. Whenever he caught Anna's eye in the mirror, he gave her a wide smile that reassured her, despite her nerves and scrambled emotions. She wasn't entirely sure that deciding to travel on her own to Africa was one of her most brilliant ideas, but, after nearly nine months of saving and planning, here she was and there was no turning back.\n\n" +
          "After what seemed like an eternity, the taxi driver pulled up at the edge of a busy market street and jumped out. He heaved her heavy rucksack out of the boot of the car and shook her hand firmly as she paid him. Anna felt inexplicably lonely as he drove off as fast as the crowds allowed him and left in a cloud of dust. The enormity of her situation hit her and for a moment she was frozen to the spot. She had absolutely no idea where she was going, or even which direction to walk in. Her mind had gone blank with panic. 'Come on, pull yourself together' Anna told herself. She had no one but herself to rely on now. This was it, the great independence from her parents that she had craved so much during her last year at school. After all, this was what it was all about: the freedom to do exactly what she wanted, when she wanted.\n\n" +
          "Anna took a deep breath and looked around her. In every direction there was a sea of people milling around. It struck her that nobody seemed to be in a big hurry. It was such a contrast to London, where everyone rushed around with their heads down, just concentrating on getting from A to B. People were strolling, here, stopping for a chat and looking at the goods for sale on the colourful market stalls. The initial chaos that she had perceived melted away as Anna really started to look around her.\n\n" +
          "Accommodation – that was her priority. She'd done lots of research on the Internet in the school library and she knew that the best and safest hotels were on the coast. The thought of a nice sea view was very attractive, too, although she wasn't sure if her budget would stretch to that. Eventually, she would find something that was self-catering and more long-term. For now she would allow herself a few days of luxury in a hotel just until she'd found her feet. She needed to work out which the good areas were and also those to avoid.\n\n" +
          "Anna headed off down a residential side road, towards the sea that she could see glistening in the distance. Suddenly, out of nowhere, a group of chattering children surrounded her. They were shabbily dressed with grubby faces and they seemed very excited to see Anna. They followed her down the road like a group of noisy chickens, skipping and laughing by her side. None of them spoke English and Anna felt she had unintentionally provided some kind of game for them and she was their main form of entertainment. All this fuss and the interesting sights along the street meant that Anna got to the sea in what seemed like no time at all. As quickly as they had appeared, the children ran off leaving Anna alone once again. She caught her breath as she took in the view. The sea was a beautiful turquoise blue and the beach was like something out of a movie, with unspoilt golden sands as far as the eye could see and palm trees gently swaying in the breeze. Anna had known it was going to be beautiful but nothing could have prepared her for such a picture-perfect scene. She was so happy to be there, so glad to have been brave enough to make the trip on her own and so sure that she had just stepped into the adventure of a lifetime.",
        items: [
          {
            q: 31,
            q_text: 'From the first paragraph it seems that Anna',
            opts: [
              'had decided on impulse to come to Africa.',
              'was nervous of the taxi driver.',
              'was enjoying the taxi ride.',
              'was fulfilling an ambition.',
            ],
            answer: 3,
            explanation: '文中说"after nearly nine months of saving and planning"，Anna 经历九个月的储蓄和计划，说明她在实现一个抱负。',
          },
          {
            q: 32,
            q_text: 'How did Anna feel when the taxi driver left?',
            opts: [
              "She was certain that she'd had a lucky escape with his driving.",
              'She was excited that she was in the city.',
              'She was unable to decide what to do next.',
              'She wondered how she was going to carry her rucksack.',
            ],
            answer: 2,
            explanation: '文中说"She had absolutely no idea where she was going"，脑中一片空白，无法决定下一步。',
          },
          {
            q: 33,
            q_text: 'What do we learn about the area Anna was in, in the third paragraph?',
            opts: [
              'It was busy but not stressful.',
              'It was too hot and uncomfortable in the busy street.',
              'It reminded her of London.',
              'It was too chaotic for her to stay there long.',
            ],
            answer: 0,
            explanation: '文中说"nobody seemed to be in a big hurry"，人们漫步聊天，繁忙但不紧张。',
          },
          {
            q: 34,
            q_text: "What were Anna's thoughts on finding somewhere to stay?",
            opts: [
              'She already knew which hotel would be best for her.',
              "She'd saved plenty of money to have a room with a sea view.",
              'She needed to find permanent accommodation in a hotel.',
              "She'd treat herself to a nice hotel temporarily.",
            ],
            answer: 3,
            explanation: '文中说"she would allow herself a few days of luxury in a hotel just until she\'d found her feet"，暂时住好酒店犒劳自己。',
          },
          {
            q: 35,
            q_text: "What does the 'fuss' refer to, in line 63?",
            opts: [
              'the attention of the children',
              'a game that Anna taught the children',
              'the children making Anna feel annoyed',
              'the noisy traffic in the street that Anna was on',
            ],
            answer: 0,
            explanation: '"All this fuss" 指前文孩子们围着 Anna 跳跃欢笑的喧闹，即孩子们的关注。',
          },
          {
            q: 36,
            q_text: 'How did Anna feel when she got to the beach?',
            opts: [
              'She was relieved to have left the town behind her.',
              "It was exactly as she'd seen it in a picture.",
              "She was even more impressed than she'd thought she'd be.",
              'She wished she had someone to share the experience with.',
            ],
            answer: 2,
            explanation: '文中说"nothing could have prepared her for such a picture-perfect scene"，实际景色超出预期。',
          },
        ],
      },
      6: {
        title: 'Part 6 · 段落匹配',
        instruction:
          'You are going to read a magazine article about working as a holiday rep. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
        type: 'paragraph_matching',
        passage:
          'Working as a holiday rep\n\n' +
          'the perfect way to spend a gap year before college\n\n' +
          "Many students want to take time out on a gap year when they finish school and before they go to college or university. Working as a holiday rep can be the perfect way to spend that year and it's a fantastic way of working your way around the world and getting paid for it. (37)_____ This makes it extremely easy to get into the rep world and once you've become a holiday rep somewhere, you'll find that you want to do it again and again.\n\n" +
          "So what is a holiday rep? Well, it's the job of the holiday rep to ensure that the customers have the best holiday that they can possibly have. They are the face of the company. (38)_____ And there are times when this can be quite a challenge, either because the customer is particularly demanding or because things can and will go wrong sometimes.\n\n" +
          "In order to become a holiday rep you will need to be at least eighteen, while some positions require you to be twenty-one. It isn't always necessary to have formal qualifications, although good grades at school and some kind of qualification in travel and tourism will always be a bonus. (39)_____ It's always a lot easier to get on with the locals if you at least speak a little of their language, and it shows that you are making an effort to fit in. Basically, all you need is to be fun, outgoing, sociable and available to work abroad.\n\n" +
          "The best time to apply to be a rep is in the winter for the following summer holiday season. However, there are last-minute opportunities as it is quite common for people to drop out or change their minds. (40)_____\n\n" +
          "Magazines, national newspapers, travel websites and travel agencies often advertise positions and, of course, one of the best places to look is on the Internet. Once you've sent a few letters to companies, you're likely to receive an application form. It's important to read it through carefully before you start to fill it in. Send in a CV with your form as this will show you are organised and professional. It's also a good idea to include a cover letter that explains who you are and why you think the job would suit you.\n\n" +
          "After sending back your form you will probably be called in for your interview. (41)_____ You can prepare yourself by working out what kind of questions they might ask you and try to think how you would answer them. A typical question might be, 'Why do you want to work abroad?' Don't say you want a free holiday! Do a bit of research on the company as they are bound to ask you why you want to work for them. Ten minutes research on the Internet can give you all the information you need. Then you can impress them with your awareness of how long they have been established, the kind of holidays they offer and in which places. A lot of companies ask you to make a short presentation. (42)_____ They don't want to trick you; they just want to find out about you. If you are going for a position as a kiddies' rep, you might want to take some props with you, such as balloons or puppets. The most important thing is to make a good impression and, if at all possible, find a way to stand out from the crowd.",
        options: [
          { label: 'A', text: "Also, you aren't required to speak a different language, although it's obviously good if you can." },
          { label: 'B', text: 'There are loads of different companies that are always on the lookout for good staff.' },
          { label: 'C', text: "Don't worry if you aren't very good at dealing with strangers." },
          { label: 'D', text: 'This is not as scary as it sounds, especially if you can take things into the interview with you.' },
          { label: 'E', text: 'There are several ways to seek employment as a holiday rep.' },
          { label: 'F', text: 'It is up to them to ensure excellent customer service at all times.' },
          { label: 'G', text: 'The most important thing here is to be prepared.' },
        ],
        items: [
          { q: 37, answer: 'B', explanation: '空前文讲做度假代表是环游世界的好方式，B 项"许多公司总在寻找好员工"解释为何容易进入，与后文"很容易进入"衔接。' },
          { q: 38, answer: 'F', explanation: '空前文说"他们是公司的门面"，F 项"确保始终提供优质客服"阐释门面角色的职责，与后文"有时很有挑战"衔接。' },
          { q: 39, answer: 'A', explanation: '空前文讲不一定要正式资格，A 项"也不要求说外语，但会更好"补充条件，与后文"会说当地语言更容易相处"衔接。' },
          { q: 40, answer: 'E', explanation: '空前文讲最佳申请时间和临时机会，E 项"有几种寻找度假代表工作的途径"引出后文各种求职渠道。' },
          { q: 41, answer: 'G', explanation: '空前文说会被叫去面试，G 项"最重要的是做好准备"引出后文如何准备面试。' },
          { q: 42, answer: 'D', explanation: '空前文说公司要求做简短展示，D 项"没那么可怕，尤其可带物品进面试"安抚紧张情绪，与后文"不想为难你"衔接。' },
        ],
      },
      7: {
        title: 'Part 7 · 多文本匹配',
        instruction:
          "You are going to read an article about four people's holiday experiences. For questions 43–52, choose from the people (A–D). The people may be chosen more than once.",
        type: 'multiple_matching',
        sections: [
          {
            label: 'A',
            name: 'Julie',
            text:
              "I was staying with my grandmother in Australia and she had realised that I was going crazy with boredom. She arranged for me to go on a guided walk through a beautiful part of the local countryside. Although I wasn't really the 'walking type', I was more than willing to do anything that might be a distraction from the long month's stay at Grandma's. Grandma assured me about the wonderful time we'd have tramping through the bush, the amazing wildlife we'd see and the perfect beach awaiting us at the end of the trek. I believed every word. I needed to as I was so bored. I went to join the rest of my group with an open mind, as Grandma had said they were sure to be young like me. However, the group turned out to be mainly wealthy pensioners enjoying their twilight years. Despite my misgivings, they all seemed quite happy to have me as the baby of the group. I wasn't entirely convinced that we'd have enough in common for the trip to really work for me, but Grandma had paid for it and so I was committed to the three-day 'adventure'.",
          },
          {
            label: 'B',
            name: 'Marcus',
            text:
              "We all considered our father to be slightly insane when he suggested an astrotourism holiday. This entailed camping out in the Welsh mountains for a week and spending our evenings and, in fact, all night if one wished, stargazing. The area has actually been granted International Dark Sky status. This means that it is officially a stargazing hotspot. There are only five other places in the world that have been given this status. After a bit of persuasion from my father, surprisingly my mother decided that he was right and it would be a romantic blast from the past — just like when they used to go camping 'before the kids came along'. Of course, that didn't help me and my sister feel any more enthusiastic. Camping wasn't something that appealed to two teenagers. Not that we'd actually given it a go; we'd always stayed in luxury hotels or villas on our previous holidays. I must admit we put up a fair bit of resistance to the idea.",
          },
          {
            label: 'C',
            name: 'Andrew',
            text:
              "I had been looking forward to our fishing holiday for months, not because I was crazy about fishing, although I love being outdoors in the fresh air. No, it was more about spending some bonding time with my son, Adam. I wasn't sure how he would take to fishing for five days. We'd been many times for an afternoon and he'd quite enjoyed it, but five days was a whole different ball game. We stayed in a log cabin by the river. It was surprisingly well-equipped and made a cosy home for a few days. It had a log fire, which we cooked our toast on in the afternoon and we sat in front of it every evening and played cards or chess. That was a bit of a shock for Adam — no computer games for a week, but he didn't even seem to miss his laptop as much as I thought he would. The art of conversation that had completely disappeared from our house soon came back and I was pleasantly surprised at how much we had in common.",
          },
          {
            label: 'D',
            name: 'Debbie',
            text:
              "It really was the holiday of a lifetime. We went on a fortnight's safari to Zambia's South Luangwa National Park. We stayed in a luxurious lodge on the hilltop, and my sister and I had interconnecting rooms with our parents. This meant that we had privacy, but, in a way, we were all still together. That was much nicer than the big family rooms that we had stayed in on holiday the previous year. The best part about it was that Jenny and I could stay up really late at night and sit on our balcony to watch the wild animals below us. Our parents didn't seem to realise that we were up so late every night, or at least if they did, they turned a blind eye to it. Although I'd seen most of the animals at various zoos or on TV, nothing can prepare you for the thrill of being close to them in their natural environment. It felt like they tolerated us and were curious when we drove through in our jeep. I almost felt as though the roles were being reversed and we were there for their entertainment.",
          },
        ],
        items: [
          { q: 43, q_text: "wasn't convinced by one of their parents' nostalgia?", answer: 'B', explanation: 'Marcus 的母亲觉得露营像"从前孩子还没出生时"一样浪漫，但 Marcus 不以为然。' },
          { q: 44, q_text: 'was desperate for something different to do?', answer: 'A', explanation: 'Julie 说"going crazy with boredom"，渴望做任何不同的事。' },
          { q: 45, q_text: 'felt like they were being observed?', answer: 'D', explanation: 'Debbie 说动物"curious when we drove through"，感觉角色反转，被动物观赏。' },
          { q: 46, q_text: 'wanted to improve a family relationship?', answer: 'C', explanation: 'Andrew 说想和儿子"spending some bonding time"，改善父子关系。' },
          { q: 47, q_text: 'particularly liked the sleeping arrangement?', answer: 'D', explanation: 'Debbie 说有连通房"much nicer than the big family rooms"，特别喜欢这种住宿安排。' },
          { q: 48, q_text: 'was surprised at how quickly someone adapted?', answer: 'C', explanation: 'Andrew 说 Adam"didn\'t even seem to miss his laptop as much as I thought"，对儿子的快速适应感到惊讶。' },
          { q: 49, q_text: 'tried to persuade their parents against a holiday?', answer: 'B', explanation: 'Marcus 说"we put up a fair bit of resistance to the idea"，试图劝阻父母。' },
          { q: 50, q_text: "said their parents made extra allowances on holiday?", answer: 'D', explanation: 'Debbie 说父母对她们熬夜"turned a blind eye to it"，度假时格外宽容。' },
          { q: 51, q_text: "was worried they wouldn't be made welcome?", answer: 'A', explanation: 'Julie 说"wasn\'t entirely convinced that we\'d have enough in common"，担心与团里老人没共同点不被接纳。' },
          { q: 52, q_text: 'enjoyed cooking in a primitive way?', answer: 'C', explanation: 'Andrew 说在木屋"cooked our toast on a log fire"，享受原始烹饪方式。' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-5-reading',
      title: 'FCE 全真模拟试题 5 · Reading and Use of English',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Reading and Use of English',
      pages: '80–87',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.178)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 选择填空',
        instruction:
          'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
        type: 'mcq_cloze',
        passage:
          'Transport in the city\n\n' +
          "Transport (0) plays an important role in our daily lives and in the (1)_____ of life in our city. Moreover, the individual decisions we make when we choose how to reach our destination can have a(n) (2)_____ on other people – longer traffic queues, (3)_____ air quality, greater numbers of accidents and health problems. Providing more transport options will create a transport system that is safe, efficient, clean and fair. Increasing (4)_____ of the car has led to greater (5)_____ of the impact it has and the (6)_____ costs to us – for our health, the economy and the environment.\n\n" +
          "We want our city to become a successful, cosmopolitan city by the sea, where people can enjoy their lives in a pleasant environment. To achieve this, we need to make sure that everyone has (7)_____ to the services and facilities they need, through a choice of as many different means of transport as possible. We, therefore, welcome the Government's White Paper on Integrated Transport published earlier this year and (8)_____ their vision of 'A New Deal for Transport: Better for Everyone'.",
        items: [
          { q: 1, opts: ['quantity', 'equality', 'quality', 'equation'], answer: 2, explanation: 'quality of life 生活质量，固定搭配。' },
          { q: 2, opts: ['result', 'consequence', 'cause', 'impact'], answer: 3, explanation: 'have an impact on 对……有影响，固定搭配。' },
          { q: 3, opts: ['better', 'open', 'difficult', 'worsening'], answer: 3, explanation: 'worsening air quality 恶化的空气质量，与交通堵塞并列的负面后果。' },
          { q: 4, opts: ['motion', 'use', 'sale', 'application'], answer: 1, explanation: 'use of the car 汽车的使用。' },
          { q: 5, opts: ['awareness', 'interest', 'attention', 'transfer'], answer: 0, explanation: 'awareness of 对……的认识/意识。' },
          { q: 6, opts: ['frank', 'genuine', 'valid', 'real'], answer: 3, explanation: 'real costs 真实成本，固定搭配。' },
          { q: 7, opts: ['opening', 'introduction', 'access', 'entrance'], answer: 2, explanation: 'access to 接近/获得……的途径，固定搭配。' },
          { q: 8, opts: ['spread', 'participate', 'share', 'contribute'], answer: 2, explanation: 'share their vision 分享他们的愿景，固定搭配。' },
        ],
      },
      2: {
        title: 'Part 2 · 完形填空',
        instruction:
          'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'open_cloze',
        passage:
          'Life in Hertford\n\n' +
          "I picked up my bag of letters and left the post (0) OFFICE. The bag was heavy and I (9)_____ a lot of letters to deliver. But I was feeling very cheerful. It was 7 o'clock, on a fine summer morning. The sun was shining. It was (10)_____ to be a warm day.\n\n" +
          "I started on my long walk through the streets of Hertford with a light heart. It wasn't only the bright morning that (11)_____ me happy. My wife and I had been, until recently, living in London. I had (12)_____ a postman there for a very long time. Then I had the chance to get a postman's job in Hertford and I decided to take (13)_____ Several times I wondered (14)_____ I had done the right thing. It is not always wise to leave the place that you (15)_____ used to.\n\n" +
          "But now, six weeks after the move, I know that it was the right thing to do. We had found a comfortable little house with a nice garden. We liked the atmosphere of the quiet, sleepy town and we'd already made some friends. Life in Hertford pleased (16)_____ both. I knew that we were going to enjoy living there.",
        items: [
          { q: 9, answer: ['HAD'], show: 'HAD', explanation: 'had + 名词，拥有很多信件要送。' },
          { q: 10, answer: ['GOING', 'SET', 'SURE'], show: 'GOING / SET / SURE', explanation: 'be going/set/sure to be 将要，表将来。' },
          { q: 11, answer: ['MADE'], show: 'MADE', explanation: 'make sb happy 使某人开心，固定搭配。' },
          { q: 12, answer: ['BEEN'], show: 'BEEN', explanation: 'had been + 职业，过去完成时表过去一直从事。' },
          { q: 13, answer: ['IT'], show: 'IT', explanation: 'take it 接受（这个机会），固定搭配。' },
          { q: 14, answer: ['WHETHER', 'IF'], show: 'WHETHER / IF', explanation: 'wonder whether/if 是否，引导宾语从句。' },
          { q: 15, answer: ['ARE'], show: 'ARE', explanation: 'be used to 习惯于，固定搭配。' },
          { q: 16, answer: ['US'], show: 'US', explanation: 'pleased us both 使我们俩都满意。' },
        ],
      },
      3: {
        title: 'Part 3 · 词形变换',
        instruction:
          'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answer IN CAPITAL LETTERS.',
        type: 'word_formation',
        passage:
          'Shopping in style\n\n' +
          "I have often found myself wondering whether an outfit I intend to buy is worth it, as it is (0) OUTRAGEOUSLY expensive. You see, I am a fashion enthusiast, always on the lookout for a new (17)_____ outfit to feature on my teen fashion blog.\n\n" +
          'Shop (18)_____ can be very helpful, of course, but they can also be very persuasive. They want to make a sale and will say anything (19)_____ to make you part with your money. Sometimes they may suggest you pay in (20)_____ , or they may use other innovative methods. However, if you have a (21)_____ for good-quality clothes and are looking for something (22)_____ , then you should find your (23)_____ in small boutiques that sell clothes of (24)_____ quality; for a price!',
        items: [
          { q: 17, given: 'STYLE', answer: ['STYLISH'], show: 'STYLISH', explanation: 'style → stylish 时髦的，有品位的。' },
          { q: 18, given: 'ASSIST', answer: ['ASSISTANTS'], show: 'ASSISTANTS', explanation: 'assist → assistants 店员，助手，复数。' },
          { q: 19, given: 'IMAGINE', answer: ['IMAGINABLE'], show: 'IMAGINABLE', explanation: 'imagine → imaginable 可想象的，anything imaginable 任何能想到的。' },
          { q: 20, given: 'INSTAL', answer: ['INSTALMENTS'], show: 'INSTALMENTS', explanation: 'instal → instalments 分期付款，pay in instalments。' },
          { q: 21, given: 'FOND', answer: ['FONDNESS'], show: 'FONDNESS', explanation: 'fond → fondness 喜爱，a fondness for 对……的喜爱。' },
          { q: 22, given: 'TASTE', answer: ['TASTEFUL'], show: 'TASTEFUL', explanation: 'taste → tasteful 有品位的，雅致的。' },
          { q: 23, given: 'INSPIRE', answer: ['INSPIRATION'], show: 'INSPIRATION', explanation: 'inspire → inspiration 灵感，find your inspiration。' },
          { q: 24, given: 'EXCEL', answer: ['EXCELLENT'], show: 'EXCELLENT', explanation: 'excel → excellent 优秀的，excellent quality。' },
        ],
      },
      4: {
        title: 'Part 4 · 句子转换',
        instruction:
          'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0).',
        type: 'key_word_transformation',
        items: [
          { q: 25, stem: 'If we walk faster, we will get home sooner.', key: 'FASTER', answer: ['The faster we walk'], show: 'The faster we walk', explanation: 'the + 比较级..., the + 比较级... 越……越……，固定句型。' },
          { q: 26, stem: 'Tony began to learn the violin three years ago.', key: 'LEARNING', answer: ['has been learning'], show: 'has been learning', explanation: 'begin to do → have been doing，现在完成进行时表从过去持续到现在。' },
          { q: 27, stem: 'He intends to visit his relatives next summer.', key: 'INTENTION', answer: ['is his intention to visit'], show: 'is his intention to visit', explanation: 'intend to do → be one\'s intention to do，名词化转换。' },
          { q: 28, stem: 'I expect he was very happy to hear the news.', key: 'MUST', answer: ['must have been'], show: 'must have been', explanation: 'must have been 对过去的肯定推测，一定是……。' },
          { q: 29, stem: 'He failed the test because he hadn\'t studied.', key: 'PASSED', answer: ['have passed the test'], show: 'have passed the test', explanation: 'might have passed 可能通过了，情态动词表对过去的推测。' },
          { q: 30, stem: "Someone stole Jane's purse while she was out.", key: 'HAD', answer: ['had her purse stolen'], show: 'had her purse stolen', explanation: 'have sth done 使某事被做，被动结构。' },
        ],
      },
      5: {
        title: 'Part 5 · 阅读选择',
        instruction:
          'You are going to read an extract from a short story. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
        type: 'reading_mcq',
        passage:
          'Schooldays\n\n' +
          "Bobby braced himself for the first day at his new school. It wasn't a normal first day as it was for the other kids but unfortunately it was normal for him. His father was in the military and they moved around all the time. It wasn't that he was anxious; he was simply tired of having to go through the process of being the new boy again, especially in the middle of the school term. He was bored with it, if the truth be known. At fifteen, Bobby knew he should be used to it, but it actually got harder as he got older. He yearned to stay in one place and to have the chance to make some close friends. What he would do to have a best friend, someone to confide in!\n\n" +
          "He got on well with his parents, although his father tended to be quite distant. Bobby appreciated that his father had a senior position in the army and the army always came first in the list of priorities. His mother occupied herself in a whirlwind of social activities and voluntary work for various charities. That way she managed to fill most of the empty hours in his father's absence. They didn't really have any 'family time', and he'd learned from a very young age how to keep himself entertained. He was proud of his independence, even if he didn't particularly enjoy his solitary existence.\n\n" +
          "Bobby headed towards the school entrance. He had learned to look confident and uninterested in everyone around him on the first days in a new school. That way he managed to avoid being a target for bullies. When he was younger, he tried to please everyone and be everyone's friend but nobody showed him any respect. Being the 'cool guy' worked much better. It gave him the opportunity to observe the other pupils and work out who seemed like a potential friend. That was Bobby's survival strategy.\n\n" +
          "Bobby looked at the letter the school had sent him two weeks earlier. It was a very upbeat, friendly letter welcoming him to the school and telling him where to report to to meet his form teacher and join his new class. Unfortunately, there was no map of the school and he hadn't the faintest idea how to find his classroom.\n\n" +
          "He stood at the end of a long corridor with other pupils walking past him chatting and laughing. He felt completely isolated from them and gazed longingly out of the window at the sea in the distance. 'Are you lost?' A voice suddenly interrupted his thoughts. 'Oh, yes, I am. I'm looking for room C5.' 'Right. It's on the second floor. The stairs are just off to your left,' the teacher said with a wide smile. 'Better get a move on, or you'll be late.' With that, the teacher gave him a pat on the shoulder and strode off.\n\n" +
          "Bobby let out a long sigh and shrugged his shoulders. He knew he had no choice but to find his classroom and get it over with. He watched the teacher disappear into a room and then he raced up the stairs to the second floor. The rush of energy woke him up from his daydreaming and he soon found the correct room. To his relief, the door was open and he wasn't the last in. The noise from the room was typically loud and there was the usual chaos of a room full of teenagers before the teacher's arrival. The pupils were gathered in small groups. Most of them didn't notice his arrival. They were too busy chatting. Looking for an empty seat, Bobby scanned the room. A few people had noticed him by now. He caught the eye of a boy who was reading a magazine. The boy looked at him and smiled slightly. 'Right, that's probably my best bet,' Bobby thought to himself. 'Remember, cool and confident is the order of the day.' He walked over to the boy. 'Hi, is this seat free? First day and all that,' Bobby said in his most laid-back voice. 'Yeah, no problem. Help yourself. My name's Tim, by the way.' 'Bob. Nice to meet you.' Bobby sat in the chair and let out a huge sigh of relief. He was in!",
        items: [
          {
            q: 31,
            q_text: 'How was Bobby feeling on his first day at the school?',
            opts: ['very nervous', 'rather unwilling', 'quite excited', 'physically tired'],
            answer: 1,
            explanation: '文中说"he was simply tired of having to go through the process of being the new boy again"和"He was bored with it"，说明他不情愿。',
          },
          {
            q: 32,
            q_text: "What impression do we get of Bobby's mother?",
            opts: [
              'Her priority was to be a good wife and mother.',
              'She never knew what to do in her free time.',
              'She liked working for the army.',
              'She was quite lonely at times.',
            ],
            answer: 3,
            explanation: '母亲用社交活动和志愿工作"fill most of the empty hours in his father\'s absence"，暗示她时常感到孤独。',
          },
          {
            q: 33,
            q_text: "What does the writer mean by 'Bobby's survival strategy' in paragraph three?",
            opts: [
              'the way he fought back after being bullied',
              'the way he managed to become the most popular student',
              'the way he dealt with starting a new school',
              'the way he managed to avoid making friends',
            ],
            answer: 2,
            explanation: '第三段讲 Bobby 装"酷"观察同学、避免被欺负、寻找潜在朋友，这是他应对新学校的方式。',
          },
          {
            q: 34,
            q_text: 'When the teacher spoke to him, Bobby',
            opts: [
              'was wishing he was somewhere else.',
              'was in a panic because he couldn\'t find the classroom.',
              'was surprised that the teacher was so nice.',
              'felt that the other pupils were laughing at him.',
            ],
            answer: 0,
            explanation: '文中说"gazed longingly out of the window at the sea in the distance"，他凝望远处大海，说明心在别处。',
          },
          {
            q: 35,
            q_text: 'What did Bobby do after the teacher walked off?',
            opts: [
              'He ran after him to find room C5.',
              'He prepared himself psychologically.',
              'He waited until the other pupils had entered the room.',
              'He ran to try to be the first into the classroom.',
            ],
            answer: 1,
            explanation: 'Bobby 叹气耸肩，暗示他在做心理准备，然后才上楼找教室。',
          },
          {
            q: 36,
            q_text: "What did Bobby mean by 'my best bet'?",
            opts: [
              'He was confident the boy was going to become his best friend.',
              'He had to remember to act as positively as he could.',
              'That seat was the one with the best view of the room.',
              'That was the only place for him to sit.',
            ],
            answer: 1,
            explanation: '"my best bet"后紧跟"Remember, cool and confident is the order of the day"，暗示他提醒自己要尽可能积极表现。',
          },
        ],
      },
      6: {
        title: 'Part 6 · 段落匹配',
        instruction:
          'You are going to read an article about what music is, and why it exists. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
        type: 'paragraph_matching',
        passage:
          'Where did music come from?\n\n' +
          "What is music? Musical expression can be divided into two groups: vocal music or 'song', which consists of complex, learned vocalisations, and instrumental music, which consists of structured, communicative sound using parts of the body other than the voice and, sometimes, additional objects.\n\n" +
          "Although the production of music is considered uniquely human, musical utterances of various degrees of complexity and perfection can be observed in several species in the animal kingdom. (37)_____ Most research has been done on songbirds so far, but also parrots, hummingbirds, whales, seals and possibly other species show vocalisations that can be called 'musical', according to the definition above.\n\n" +
          "Birdsong is commonly regarded as the most complex vocal utterance in the animal kingdom. (38)_____ Traits of the latter, such as an extensive repertoire of melodies, a sense of diatonic intervals, very precise pitch recognition and intonation, ability of transposition, melodic and dynamic variation, imitation, improvisation and composition have been observed in songbirds in various degrees of perfection.\n\n" +
          "Instrumental sound generation is very rare among animals. (39)_____ Our closest cousins, the African great apes (chimpanzees, bonobos and gorillas), make drumming sounds with their hands, sometimes with both arms, on their own chest, the ground, on objects like tree roots and even on other individuals. Chimpanzees have been found readily adapting other surfaces to drumming, including hollow walls. Drumming sequences typically last only a short time, between one and twelve seconds. It is currently unknown whether apes can learn rhythms. It is also unknown whether they can create more complex rhythmic patterns than the simple, steady beat typically observed. (40)_____ However, using both hands to drum seems to be unique to the great apes and humans.\n\n" +
          "But why did music develop? This natural question may be asked in another way: what, if any, adaptive functions does music serve? In other words, what advantage did species with musical skills have that allowed them to have more offspring than those that did not? This is a question that interested Darwin. In fact, he was probably the first to ask it, when he said 'As neither the enjoyment nor the capacity for producing musical notes are faculties of the least use to man in reference to his daily habits of life, they must be ranked amongst the most mysterious with which he is endowed.'\n\n" +
          "(41)_____ Many researchers have many different ideas. The following hypotheses about the function of music are among the most common that have been suggested so far. As a null hypothesis, it has been proposed that music has no adaptive function at all. Perhaps it is a mere by-product of some other ability that we need, such as language. Another often talked about purpose for music, prominent both in scientific literature and in the popular press, is in mate choice. Data on birdsong and whale song support this hypothesis. Other ideas include that music might have begun with the use of song by mothers to soothe infants, or as a learning tool in the play of young animals. (42)_____",
        options: [
          { label: 'A', text: 'However, the precise reasons for the existence of music are still a mystery today.' },
          { label: 'B', text: 'Some species, such as blackbirds, nightingales and white-rumped shamas, deliver vocal performances of outstanding musical quality that come close to human music in many aspects.' },
          { label: 'C', text: 'There are a few other drumming species, including palm cockatoos, woodpeckers and kangaroo rats.' },
          { label: 'D', text: 'Simple sounds that are instinctive and serve functions, like signalling danger, are usually not regarded as music.' },
          { label: 'E', text: 'Vocalisations of amazingly high complexity and musicality have evolved several times in birds and mammals.' },
          { label: 'F', text: 'Few stones have been left unturned as to potential functions of music since Darwin posed the question.' },
          { label: 'G', text: 'It seems to be limited to purely rhythmical elements, to drumming, thus lacking any melody or harmony.' },
        ],
        items: [
          { q: 37, answer: 'E', explanation: '空前文讲动物界可观察到音乐性发声，E 项"鸟类和哺乳动物中演化出高复杂性的发声"承接，与后文"研究最多的是鸣禽"衔接。' },
          { q: 38, answer: 'B', explanation: '空前文说鸟鸣是动物界最复杂的声音，B 项"某些物种的发声接近人类音乐"举例说明，与后文"后者特征"衔接。' },
          { q: 39, answer: 'G', explanation: '空前文说动物器乐发声罕见，G 项"似乎限于节奏元素，缺少旋律"解释器乐发声的特点，与后文"类人猿打鼓"衔接。' },
          { q: 40, answer: 'C', explanation: '空前文讲类人猿打鼓及其节奏能力未知，C 项"还有少数其他打鼓物种"补充，与后文"双手打鼓是类人猿和人类独有"形成转折。' },
          { q: 41, answer: 'F', explanation: '空前文引用 Darwin 的问题，F 项"自 Darwin 提出问题以来，几乎翻遍了所有潜在功能"承接，与后文"许多研究者有不同想法"衔接。' },
          { q: 42, answer: 'A', explanation: '空前文列举多种假说，A 项"但音乐存在的确切原因至今仍是谜"作为总结，结束全文。' },
        ],
      },
      7: {
        title: 'Part 7 · 多文本匹配',
        instruction:
          "You are going to read an article about the fears or challenges that several people have faced. For questions 43–52, choose from the people (A–D). The people may be chosen more than once.",
        type: 'multiple_matching',
        sections: [
          {
            label: 'A',
            name: 'Katie',
            text:
              "I'm afraid of spiders. You won't hear me scream, but I will certainly get out of the room until someone else has dealt with it. Once, when I was a teenager, and my parents were both working late, I sat on the front steps of the house for nearly five hours waiting for help. There was a spider on the ceiling in the hallway, you see! I couldn't get into the house! My father was angry with me when he got home; he thought I needed to learn to be more independent. 'How will you ever survive if you have to live alone some day?' he asked. Well, I'm sure if I had to, I would just deal with it, although it would be a challenge. But I've never had to live alone. I had flatmates at university and now I'm married. Luckily, my husband has no problem with spiders and is tolerant of my phobia!",
          },
          {
            label: 'B',
            name: 'Ellie',
            text:
              "The most challenging thing I've ever done, by far, was trekking in the Himalayas. It was something I had always dreamed of doing and I was incredibly fortunate to have the opportunity to join a trek for charity. I always considered myself fit; I mean, I go to the gym two or three times a week. But as soon as we set out, I realised I was quite out of my depth; I'd never even carried a pack before. In retrospect, I can't imagine what I was thinking. On the first day, we had a six-hour walk and after four hours I was so exhausted that I felt that I couldn't go on. I took off my pack, sat down and cried. Apparently my reaction was fairly common, so our group leader knew just how to deal with it. He calmly explained that we were only two more hours from our first camp, while I'd have to walk for four, alone, to go back! I had no choice. So I did, and when we eventually reached Everest base camp, it was the proudest I've ever been.",
          },
          {
            label: 'C',
            name: 'Daniel',
            text:
              "After high school I was accepted into a very good music school, by merit of my audition. I almost declined as I didn't want to go to university. It was a terribly difficult time because nobody could understand why I would make that decision. I was just so terrified that I would fail. I'm dyslexic so I knew that even if I were studying music, I would have to write essays for so many classes. I'd had some teachers in the past that were convinced that I was just careless, that I was lazy, when, in fact, I was spending much more time on the assignments than my classmates. In the end I went, but I had a terrible attitude. I missed a lot of classes; I wasn't even trying. Eventually I found my way to an office that offered support to students with special needs; I think someone told me that I could get a free computer, or something. That turned my life around. To get the computer, I had to attend regular meetings with an advisor, which I hated at first, but eventually I learned to recognise my strengths and be realistic about my weaknesses. I realised I could get help when I needed it, and that was OK. That was the hardest thing; but once I'd understood it, there was nothing stopping me.",
          },
          {
            label: 'D',
            name: 'Jack',
            text:
              "My fear of heights was affecting my life because I had difficulty going up and down stairs, or over bridges, particularly if I could see down, beneath me. I would just get paralysed. I would also feel nauseous and my feet would feel heavy, as if they were made of lead. I had read that it was possible to get over phobias by exposure, so I put myself into difficult situations on purpose. It was exhausting, but I knew it was important. I noticed slight improvements, but only very slight. It was frustrating. Then I had the idea; I was going to try bungee jumping. I got a trusted friend to go with me to make sure I didn't change my mind. He told the people in charge they would have to push me, because I wouldn't jump. It was all very fast; there was no time to think. The feeling was exhilarating, to be honest. And I've had no trouble in my day-to-day life since then. Though, I admit, I have no desire to do it again.",
          },
        ],
        items: [
          { q: 43, q_text: 'did not accept help willingly at first?', answer: 'C', explanation: 'Daniel 说参加顾问会议"which I hated at first"，起初不愿接受帮助。' },
          { q: 44, q_text: 'did not realise the coming difficulty?', answer: 'B', explanation: 'Ellie 说"as soon as we set out, I realised I was quite out of my depth"，出发后才意识到困难。' },
          { q: 45, q_text: 'did not feel a need to make a change?', answer: 'A', explanation: 'Katie 说"if I had to, I would just deal with it... But I\'ve never had to live alone"，觉得没必要改变对蜘蛛的恐惧。' },
          { q: 46, q_text: 'could help others while being challenged?', answer: 'B', explanation: 'Ellie 参加慈善徒步，在挑战自我的同时帮助慈善事业。' },
          { q: 47, q_text: 'gets used to relying on the help from the family?', answer: 'A', explanation: 'Katie 从依赖父母到依赖丈夫处理蜘蛛，习惯了家人的帮助。' },
          { q: 48, q_text: 'was afraid of being unsuccessful?', answer: 'C', explanation: 'Daniel 说"I was just so terrified that I would fail"，害怕失败。' },
          { q: 49, q_text: 'felt a sense of great happiness while taking part in an extreme activity?', answer: 'D', explanation: 'Jack 说蹦极"The feeling was exhilarating"，感到极度兴奋。' },
          { q: 50, q_text: 'initially tried to overcome the difficulty alone?', answer: 'B', explanation: 'Ellie 起初独自坚持徒步四小时直到崩溃，才接受领队帮助。' },
          { q: 51, q_text: 'took advantage of an offer with conditions attached?', answer: 'C', explanation: 'Daniel 获得免费电脑但"had to attend regular meetings with an advisor"，有附加条件。' },
          { q: 52, q_text: 'had the support of a friend?', answer: 'D', explanation: 'Jack 说"I got a trusted friend to go with me"，有朋友支持。' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-6-reading',
      title: 'FCE 全真模拟试题 6 · Reading and Use of English',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Reading and Use of English',
      pages: '99–106',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.189–190)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 选择填空',
        instruction:
          'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
        type: 'mcq_cloze',
        passage:
          'Oxford University\n\n' +
          'Oxford University is a(n) (0) association of over 35 colleges, varying in (1)_____ of foundation, from medieval to more recent times. The colleges also vary in wealth, in character and in architecture. Some (2)_____ imposing buildings and grounds, others are almost intimate in their scale. Most colleges can (3)_____ well-known former students; Oxford is the place where (4)_____ as diverse as Margaret Thatcher, Mrs Gandhi, Michael Palin and Evelyn Waugh were educated.\n\n' +
          'Most visitors will want to see a college and one or more of the university buildings, such as the Bodleian Library or the Ashmolean Museum. The university has supported the (5)_____ of The Oxford Story Exhibition in Broad Street — now recognised as the best short (6)_____ to Oxford University. Here, during an entertaining ride through recreated (7)_____ and events, visitors are offered an informed view of Oxford\'s past and present. Special materials for children and foreign (8)_____ commentaries are also available.',
        items: [
          { q: 1, opts: ['place', 'date', 'period', 'form'], answer: 1, explanation: 'date of foundation 建校日期，与 varying in 搭配表示建校年代不同。' },
          { q: 2, opts: ['live', 'reside', 'locate', 'occupy'], answer: 3, explanation: 'occupy 占据（建筑场地），some occupy imposing buildings 表示有的学院占据宏伟建筑。' },
          { q: 3, opts: ['exaggerate', 'advertise', 'flatter', 'boast'], answer: 3, explanation: 'boast 拥有/以……为荣，boast well-known former students 拥有知名校友。' },
          { q: 4, opts: ['characters', 'identities', 'roles', 'participants'], answer: 0, explanation: 'characters 人物，as diverse as 列举各界名人。' },
          { q: 5, opts: ['discovery', 'creation', 'invention', 'education'], answer: 1, explanation: 'creation 创建，the creation of The Oxford Story Exhibition 展览的创建。' },
          { q: 6, opts: ['opening', 'beginning', 'introduction', 'meeting'], answer: 2, explanation: 'introduction 介绍，the best short introduction to Oxford 对牛津的最佳简短介绍。' },
          { q: 7, opts: ['views', 'sites', 'paintings', 'scenes'], answer: 3, explanation: 'scenes 场景，recreated scenes and events 再现的场景和事件。' },
          { q: 8, opts: ['speech', 'talk', 'phrase', 'language'], answer: 3, explanation: 'language 语言，foreign language commentaries 外语讲解。' },
        ],
      },
      2: {
        title: 'Part 2 · 完形填空',
        instruction:
          'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0).',
        type: 'open_cloze',
        passage:
          'Hidden dangers\n\n' +
          "You are always ready (0) FOR danger, but you don't think of (9) .............................. very much. The real dangers are (10) .............................. from living things. They are the small, quiet things – a knot in the air line, a cut safety rope. Taylor knew this area of the seabed well: it was grey, flat and familiar. (11) .............................. today, for the first time, it held a surprise. Taylor stopped when he saw the new shape.\n\n" +
          'At first, he (12) .............................. it was an aircraft. But it was the wrong shape, and it was too small – only seven metres long and three metres wide. Here and (13) .............................. were round doors. The metal body seemed to be undamaged. But one end was black, perhaps (14) .............................. a result of strong heat. From the other (15) .............................. grew a small forest of metal posts. Almost all of them were broken or pushed flat, perhaps when it hit the water. Now they (16) .............................. like the legs of a giant insect.',
        items: [
          { q: 9, answer: ['IT'], show: 'IT', explanation: 'it 指代前文的 danger，"think of it very much" 想到危险。' },
          { q: 10, answer: ['NOT'], show: 'NOT', explanation: 'The real dangers are NOT from living things 真正的危险并非来自生物（与下文 small, quiet things 形成转折）。' },
          { q: 11, answer: ['BUT'], show: 'BUT', explanation: 'BUT today 转折，今天却有个惊喜。' },
          { q: 12, answer: ['THOUGHT'], show: 'THOUGHT', explanation: 'he thought it was an aircraft 他原以为是飞机。' },
          { q: 13, answer: ['THERE'], show: 'THERE', explanation: 'Here and there 固定搭配，到处。' },
          { q: 14, answer: ['AS'], show: 'AS', explanation: 'as a result of 固定搭配，作为……的结果。' },
          { q: 15, answer: ['END'], show: 'END', explanation: 'From the other end 从另一端。' },
          { q: 16, answer: ['LOOKED', 'WERE'], show: 'LOOKED / WERE', explanation: 'they looked like the legs of a giant insect 看起来像巨大昆虫的腿。' },
        ],
      },
      3: {
        title: 'Part 3 · 词形变换',
        instruction:
          'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0).',
        type: 'word_formation',
        passage:
          "Trust your local chemist\n\n" +
          "Most parents don't make (0) EFFECTIVE use of their local chemist's and take their kids straight to their doctor for (17) .................................................... as soon as they get any kind of (18) .................................................... . Parents should trust their chemist, though, and not be (19) .................................................... of his or her abilities. Chemists can help with many problems, from (20) .................................................... of various parts of the body, to swollen ankles.\n\n" +
          'Some children would prefer to leave these problems (21) .................................................... but, depending on the (22) .................................................... of the condition, a quick visit to the chemist\'s is usually the only (23) .................................................... that they\'ll need, and it will cause the minimum (24) .................................................... to both child and parent. So, next time your kid feels ill or have an injury, consider a visit to your local chemist\'s before heading to the doctor.',
        items: [
          { q: 17, given: 'TREAT', answer: ['TREATMENT'], show: 'TREATMENT', explanation: 'for treatment 就医治疗，名词。' },
          { q: 18, given: 'ILL', answer: ['ILLNESS'], show: 'ILLNESS', explanation: 'any kind of illness 任何疾病，名词。' },
          { q: 19, given: 'SUSPECT', answer: ['SUSPICIOUS'], show: 'SUSPICIOUS', explanation: 'be suspicious of 怀疑，形容词。' },
          { q: 20, given: 'INFLAME', answer: ['INFLAMMATION', 'INFLAMMATIONS'], show: 'INFLAMMATION(S)', explanation: 'inflammation 发炎，名词。' },
          { q: 21, given: 'TREAT', answer: ['UNTREATED'], show: 'UNTREATED', explanation: 'leave these problems untreated 不予治疗，否定前缀 un-。' },
          { q: 22, given: 'SEVERE', answer: ['SEVERITY'], show: 'SEVERITY', explanation: 'the severity of the condition 病情严重程度，名词。' },
          { q: 23, given: 'ASSIST', answer: ['ASSISTANCE'], show: 'ASSISTANCE', explanation: 'the only assistance 唯一的帮助，名词。' },
          { q: 24, given: 'DISRUPT', answer: ['DISRUPTION'], show: 'DISRUPTION', explanation: 'minimum disruption 最小干扰，名词。' },
        ],
      },
      4: {
        title: 'Part 4 · 句子转换',
        instruction:
          'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0).',
        type: 'key_word_transformation',
        items: [
          {
            q: 25,
            stem: "I haven't written to Bob since he left for Canada.",
            key: 'LAST',
            answer: ['The last time I wrote to Bob was before he left for Canada.'],
            show: 'The last time I wrote to Bob was before he left for Canada.',
            explanation: 'The last time I wrote to Bob = I haven\'t written to Bob since，"the last time" 句型表示"上次写信是在……之前"。',
          },
          {
            q: 26,
            stem: 'The doctors told her to reduce the amount of fat she eats.',
            key: 'DOWN',
            answer: ['She was told by the doctors to cut down on the amount of fat she eats.'],
            show: 'She was told by the doctors to cut down on the amount of fat she eats.',
            explanation: 'cut down on = reduce 减少，固定搭配。',
          },
          {
            q: 27,
            stem: 'Michael is not usually rude.',
            key: 'LIKE',
            answer: ['It is not like Michael to be rude.'],
            show: 'It is not like Michael to be rude.',
            explanation: 'It is not like sb to do sth 某人通常不会做某事。',
          },
          {
            q: 28,
            stem: 'You can play football, but you must do your homework first.',
            key: 'LONG',
            answer: ['You can play football as long as you do your homework first.', 'You can play football so long as you do your homework first.'],
            show: 'You can play football as long as you do your homework first.',
            explanation: 'as/so long as = on condition that 只要。',
          },
          {
            q: 29,
            stem: "My car is as old as Sam's.",
            key: 'SAME',
            answer: ["Sam's car is the same age as mine."],
            show: "Sam's car is the same age as mine.",
            explanation: 'the same ... as 同龄，the same age as mine 和我的车同龄。',
          },
          {
            q: 30,
            stem: 'It is possible that the teachers didn\'t see you cheating in the exam.',
            key: 'MAY',
            answer: ['The teachers may not have seen you cheating in the exam.'],
            show: 'The teachers may not have seen you cheating in the exam.',
            explanation: 'may have done 对过去的推测，may not have done 可能没有。',
          },
        ],
      },
      5: {
        title: 'Part 5 · 阅读选择',
        instruction:
          'You are going to read an extract from a magazine article. For questions 31-36, choose the answer (A, B, C or D) which you think fits best according to the text.',
        type: 'reading_mcq',
        passage:
          'Visiting India\n\n' +
          'We visited India about thirty years ago when our kids were still in school and the experience is still quite vivid in my memory. I remember that rail travel was dirty, and a balance had to be struck between having the window shutters open to see the countryside and closing them against the heat and dust.\n\n' +
          'The air-conditioned carriages were generally comfortable, and the train catering manager took orders, which he passed by phone to the next stop but two, where the food came aboard in metal dishes. An excellent vegetarian meal of two curries, rice, pickle, nan bread, poppadoms and lassi was more than enough for my wife and myself, and did not break the bank at 20 rupees, although, I must admit, it was a fingers-in-the-dish exercise if you didn\'t have your own knife and fork. Rice plantations in the heat of the day gave way to cotton and maize fields in the evening, where farm workers stood on high stools cleaning their harvest.\n\n' +
          'Our shower, breakfast and bed in the West End Hotel at Bangalore were never more welcome. The silks, silk shirts and ties in Mahatma Gandhi Road were irresistible when offered at half, or sometimes even a third, of European prices, and comfortable, well-made leather sandals were of an equally good value.\n\n' +
          'The drive to Mysore took us via a silk farm, and families of monkeys began to appear at the roadside as the country became wilder. The Sultan Tipu\'s summer house outside Mysore is a spacious monument to 19th-century good taste, but it sinks to almost one-star status in comparison with the Maharajah\'s main palace in the town centre.\n\n' +
          'Overwhelming in size and splendour, endless wealth has been spent on it over the years for the best that money could buy anywhere on earth. Its 100,000-light bulb outline illumination is equally impressive after dark, and I am sure that it was extended for an extra half-hour at, presumably, the tax-payer\'s expense in honour of the Indian Finance Minister\'s visit the night we were there.\n\n' +
          'Later, our driver broke the onward journey south at an ancient Hindu temple where we were warmly welcomed to join the service. After crossing the border from Karnataka into Kerala, in the Mudumalai animal reserve, the road started its long climb into the hills. Through eucalyptus woods and tea plantations — the higher the crop, the better its quality — the air became cooler, the roadside greener and the lakes more frequent.\n\n' +
          'We arrived at the Fernhill Palace Hotel at Ootacamund, otherwise known as "Ooty", in the early afternoon, left our driver and his car and, as if in a time-machine, stepped back 60 years. Empty apart from ourselves and another couple, this former Maharajah\'s residence was a ghost house of faded colonial gentility. The vast ballroom with its padlocked grand piano, the great drawing room, the dining room, the billiard room, the bar and the Maharajah\'s suite were all designed on the grand scale of half a century ago. Many photographs along the corridors show the bursting self-confidence of Ooty\'s expatriate society between the wars. Today, they present a dusty canvas of distant memories.',
        items: [
          {
            q: 31,
            q_text: 'While travelling on an Indian train,',
            opts: [
              'it was hard to keep the windows open because they were not balanced.',
              'it would be hot and dusty if the windows were closed.',
              'people would get hot and dirty if they wanted to see the views.',
              'the windows were always very hot and dirty.',
            ],
            answer: 2,
            explanation: '原文说要在开窗看风景与关窗防热防尘之间权衡，意味着想看风景就会又热又脏。',
          },
          {
            q: 32,
            q_text: 'The food',
            opts: [
              'could be ordered and cooked on the train.',
              'was cooked before it was put onto the train.',
              'was cooked at the start of the journey.',
              'was ordered before the journey.',
            ],
            answer: 1,
            explanation: '经理电话下单到下一站再下一站，食物在那里做好后送上车，即上车前已烹饪好。',
          },
          {
            q: 33,
            q_text: 'The writer',
            opts: [
              'paid a lot of money for the food.',
              'was satisfied with the amount of food he was given.',
              'needed to go to the bank to pay for the food.',
              'took his own knife and fork.',
            ],
            answer: 1,
            explanation: 'more than enough 表示食物分量充足，作者对此满意。',
          },
          {
            q: 34,
            q_text: "The Sultan Tipu's summer house",
            opts: [
              'is not as impressive as the Maharajah\'s palace.',
              'is in the main town of Mysore.',
              'has monkeys living in it.',
              'is quite small.',
            ],
            answer: 0,
            explanation: 'sinks to almost one-star status in comparison with the Maharajah\'s main palace，与皇宫相比显得逊色。',
          },
          {
            q: 35,
            q_text: "The Maharajah's main palace",
            opts: [
              'was built in the 19th century.',
              'is lit up all night every night.',
              'had special lights put on it for the Finance Minister\'s visit.',
              'has many lights on it.',
            ],
            answer: 3,
            explanation: '100,000-light bulb outline illumination，灯泡数量极多。',
          },
          {
            q: 36,
            q_text: 'At "Ooty", the writer and his wife',
            opts: [
              'lost their driver.',
              'visited a haunted palace.',
              'stayed in a former palace.',
              'stayed in a busy hotel.',
            ],
            answer: 2,
            explanation: 'former Maharajah\'s residence，住进了曾经的 Maharajah 皇宫。',
          },
        ],
      },
      6: {
        title: 'Part 6 · 段落匹配',
        instruction:
          'You are going to read a magazine article about a sports academy for students. Six sentences have been removed from the article. Choose from the sentences A-G the one which fits each gap (37-42). There is one extra sentence which you do not need to use.',
        type: 'paragraph_matching',
        passage:
          'The South-East Sports Academy\n\n' +
          'At the South-East Sports Academy we offer four different sports: rugby, hockey, basketball and football. The Sports Academy programme aims to provide opportunities at the highest level of sporting performance for students, as well as improving the general standard of sport in the area. The Academy enables talented athletes to receive high-level coaching and competition alongside their academic subjects.\n\n' +
          '37\n\n' +
          'As well as benefitting from our experienced coaches, students are given the opportunity to develop their own coaching skills and are able to gain an officially recognised coaching qualification.\n\n' +
          'Being a member of the South-East Sports Academy gives students an excellent team-building experience. It will also help students who are considering applying to universities or for jobs.\n\n' +
          '38\n\n' +
          'It will definitely make any CV look more impressive.\n\n' +
          'The South-East Sports Academy was set up over ten years ago and has been growing and expanding ever since. Our students come from a wide variety of locations, backgrounds and academic experience.\n\n' +
          '39\n\n' +
          'We have even had students who have gone on to take part in sport at an international and professional level. For any young person who is seriously interested in attending the Academy, there is an application procedure that must be followed. Applications are invited from individuals who already excel in competitive sport and / or demonstrate the necessary commitment and potential within their chosen sport.\n\n' +
          '40\n\n' +
          "These requirements are in addition to the standard college entry requirements for the students' chosen academic programmes of study.\n\n" +
          'All students at the Academy are required to sign a contract to ensure that attendance, performance in the classroom, attitude to learning and personal presentation are of a quite high standard at all times.\n\n' +
          '41\n\n' +
          "There are also some financial commitments that need to be met. These include buying the necessary playing kits for the student's chosen sport and, in some cases, pieces of equipment. There are also the annual tuition fees to be paid at the start of each academic year.\n\n" +
          'If you feel that the South-East Sports Academy is the place for you, you can attend one of our regular open days.\n\n' +
          '42\n\n' +
          'For more information about open-day dates and other events at the college you can look at our website, or feel free to pop in and get the latest information from the reception desk, Monday to Friday 8 am-3 pm.',
        options: [
          { label: 'A', text: 'Many of these students have progressed into the higher levels of sport performance and education.' },
          { label: 'B', text: 'All potential students should reach the highest levels in their chosen sport before they apply to the Academy.' },
          { label: 'C', text: 'The reason for this is that it shows that the student has a high level of commitment, dedication and teamwork skills.' },
          { label: 'D', text: 'These take place approximately every ten weeks.' },
          { label: 'E', text: 'Existing club, school or county playing experience would be an advantage on the Academy courses.' },
          { label: 'F', text: 'A number of our coaches are retired professional athletes of international standard.' },
          { label: 'G', text: 'Any student who fails to reach these requirements will be given a warning and possibly face disciplinary proceedings.' },
        ],
        items: [
          { q: 37, answer: 'F', explanation: '前文提到 high-level coaching，F 选项补充说明教练是退役国际运动员，体现教练水平。' },
          { q: 38, answer: 'C', explanation: '前文提到 team-building experience 与申请大学/工作，C 选项解释原因：展示承诺、奉献和团队技能。' },
          { q: 39, answer: 'A', explanation: '前文说学生来自不同背景，A 选项 Many of these students have progressed 衔接学生成就。' },
          { q: 40, answer: 'E', explanation: '前文说申请者要 excel in competitive sport，E 选项说明既有俱乐部/学校/县级经验是优势。' },
          { q: 41, answer: 'G', explanation: '前文提到 sign a contract 确保高标准，G 选项说明违反要求的后果（警告/处分）。' },
          { q: 42, answer: 'D', explanation: '前文提到 regular open days，D 选项 These take place approximately every ten weeks 说明频次。' },
        ],
      },
      7: {
        title: 'Part 7 · 多文本匹配',
        instruction:
          'You are going to read part of a blog on the Internet, where four teenagers have sent in accounts of their earliest childhood memories. For questions 43-52, choose from the teenagers (A-D). The teenagers may be chosen more than once.',
        type: 'multiple_matching',
        sections: [
          {
            label: 'A',
            name: 'Michael Richardson',
            text:
              "My earliest memory is of being held on someone's lap on a porch swing in front of my great grandmother's farmhouse. I was describing the memory once to my mother and I gave her a walkthrough of the house, the layout of the rooms and the memory of two bench swings facing each other on each side of the front door on the porch. My mum got kind of quiet and then called my grandmother to check a date and she told me that I was describing a house that was sold when I was 18 months old. I still have never seen a picture of the front of the house to know for sure, but I'll take my grandmother's word for it.",
          },
          {
            label: 'B',
            name: "Mary O'Malley",
            text:
              "The first thing I recall must have happened right after my family moved to our second flat. I was somewhere between 18 months and 2 years old and had just gotten my first 'grown-up bed', which I kept falling out of. Since we didn't have one of those side-rails that are so common today, mum got creative and put the vinyl high-back chairs around my bed like a fort. I woke up one morning to find myself slowly falling from the bed – the chairs pushing out away from me in slow motion. I thought this was great fun to fall out of bed so slowly! I remember crawling (because I was sleepy and being silly, not because I couldn't walk) to find mum in her bright sunny room, working at her desk on some bills.",
          },
          {
            label: 'C',
            name: 'Martin Green',
            text:
              "The earliest thing I can remember is sitting in my cot, in a house we moved out of when I was about nine months old, and leaning to try to see my mother in the kitchen, right across from my door. That is the only clear memory I have from that house, but I have many from the one we lived in for the following year. Some weeks ago, I walked into a café with my mother, stopped, looked down and said, 'We used to have this tile in our kitchen'. She looked at it for a minute, then looked at me in surprise and said, 'We moved out of that house before you were two.' I guess you get to know the floor pretty well when you're only two feet tall!",
          },
          {
            label: 'D',
            name: 'Ann Clark',
            text:
              "I know a lot of people have clear memories of their early childhood. I don't. Instead, they are flashes of events over a period of time. Some of the events were major and some were minor. Despite my dislike of the sun, they are all sun-drenched – I don't have many memories of winter in my early years, and I'm not sure why that is. The first big memory I have does have a date attached: Christmas Day when I was six. We weren't able to make our annual trip to the coast that year because of financial problems, so we were watching the news on TV. What I saw was horrible. A child standing by a destroyed house, clutching a doll, with tangled tinsel all around her. The night before, Cyclone Tracy had destroyed 70 percent of a nearby town. I also remember the Red Cross vans going up our street getting donations, and the town hall, where the donations were being collected. It seemed like the goods were piled to the roof.",
          },
        ],
        items: [
          { q: 43, q_text: 'has a memory that involved not having something in their room?', answer: 'B', explanation: 'Mary 说 Since we didn\'t have one of those side-rails，没有侧护栏。' },
          { q: 44, q_text: 'had a family member who asked others to confirm something?', answer: 'A', explanation: 'Michael 的母亲打电话给祖母 "called my grandmother to check a date" 确认日期。' },
          { q: 45, q_text: 'has an upsetting early memory?', answer: 'D', explanation: 'Ann 看到 Cyclone Tracy 摧毁房屋的新闻，"What I saw was horrible"。' },
          { q: 46, q_text: 'had the earliest first memory?', answer: 'C', explanation: 'Martin 约 9 个月大时坐婴儿床的记忆，是四人中最早的。' },
          { q: 47, q_text: "still hasn't found any real evidence to verify a relative's word?", answer: 'A', explanation: 'Michael 说 "I still have never seen a picture of the front of the house to know for sure"，至今没有照片证据。' },
          { q: 48, q_text: 'remembers a parent working in the room?', answer: 'B', explanation: 'Mary 记得母亲 "working at her desk on some bills"。' },
          { q: 49, q_text: 'does not have clear and detailed early memories?', answer: 'D', explanation: "Ann 说 \"I don't. Instead, they are flashes of events\"，记忆是片段。" },
          { q: 50, q_text: 'recognised something in the childhood years later?', answer: 'C', explanation: 'Martin 在咖啡馆认出 "We used to have this tile in our kitchen" 儿时瓷砖。' },
          { q: 51, q_text: 'remembers a positive feeling?', answer: 'B', explanation: 'Mary 说 "I thought this was great fun to fall out of bed so slowly!"，感到有趣。' },
          { q: 52, q_text: 'has a specific date related to childhood?', answer: 'D', explanation: 'Ann 说 "Christmas Day when I was six"，有明确日期。' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-7-reading',
      title: 'FCE 全真模拟试题 7 · Reading and Use of English',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Reading and Use of English',
      pages: '118–125',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.195)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 选择填空',
        instruction:
          'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
        type: 'mcq_cloze',
        passage:
          "Bargain rail travel\n\n" +
          "Local rail travel is now much more (0) affordable, thanks to the (1)_____ by Anglia Rail of the 'Anglia Plus' range of tickets. With an Anglia Plus ticket you can enjoy (2)_____ rail travel within Norfolk and Suffolk for an unbeatable price. In addition, Anglia Plus offers you free travel on buses from Ipswich station to the town centre, or any (3)_____ within the town served directly by Ipswich Buses.\n\n" +
          'For days out with the family, visiting friends or relatives, even for (4)_____ to work, Anglia Plus is just the ticket, providing you with the exceptional standard of Anglia Rail service and (5)_____ at a reduced cost. Its flexibility offers you all sorts of (6)_____ for discovering more of this (7)_____ region.\n\n' +
          'There are 3 types of Anglia Plus ticket available. The One-Day Pass and the Three-Day Pass are ideal for travelling around the region during your leisure time, whilst the Seven-Day Pass is an excellent low-cost option for daily commuters which also (8)_____ you to travel on other routes after work, or at weekends.',
        items: [
          { q: 1, opts: ['beginning', 'introduction', 'encouragement', 'opening'], answer: 1, explanation: 'introduction 引入/推出，the introduction of ... by Anglia Rail 表示推出 Anglia Plus 票种。' },
          { q: 2, opts: ['applicable', 'exterior', 'worthless', 'unlimited'], answer: 3, explanation: 'unlimited 无限制的，enjoy unlimited rail travel 享受不限次数的铁路旅行。' },
          { q: 3, opts: ['destination', 'space', 'target', 'setting'], answer: 0, explanation: 'destination 目的地，any destination within the town 镇内任何目的地。' },
          { q: 4, opts: ['reaching', 'commuting', 'transferring', 'transporting'], answer: 1, explanation: 'commuting 通勤，even for commuting to work 甚至用于上下班通勤。' },
          { q: 5, opts: ['comfort', 'well-being', 'leisure', 'security'], answer: 0, explanation: 'comfort 舒适，service and comfort 服务与舒适。' },
          { q: 6, opts: ['sources', 'needs', 'options', 'changes'], answer: 2, explanation: 'options 选择，all sorts of options 各种选择。' },
          { q: 7, opts: ['unprocessed', 'natural', 'original', 'unspoiled'], answer: 3, explanation: 'unspoiled 未受破坏的，this unspoiled region 这片未受破坏的地区。' },
          { q: 8, opts: ['allows', 'admits', 'lets', 'makes'], answer: 0, explanation: 'allows sb to do sth 允许某人做某事，allows you to travel on other routes。' },
        ],
      },
      2: {
        title: 'Part 2 · 完形填空',
        instruction:
          'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0).',
        type: 'open_cloze',
        passage:
          'Holidays with friends\n\n' +
          'We always (0) USED to go to Porchester (9).................................................... our summer holidays. It is a quiet little town, full of old and interesting buildings. Very (10).................................................... visitors ever go there, so there were no crowds. I enjoyed its sleepy atmosphere. I\'m now a university student, living in a big city, so a holiday in Porchester was a complete change (11).................................................... my usual life. Besides, I found out about the history of the place. I always wanted to learn how life used to be in Porchester – the stories of (12)....................................................\n.................................................... people and buildings.\n\n' +
          'I had made notes on all these things (13).................................................... my holidays there and I soon knew more about the history of Porchester than most of the people (14).................................................... lived there.\n\n' +
          'I am not rich, so I cannot afford to stay in hotels. When Jack Thompson heard that I wanted to spend my holidays in Porchester again all these years later, he invited me to stay with (15).................................................... . Jack and I met when we were both eleven and we (16).................................................... remained good friends.',
        items: [
          { q: 9, answer: ['FOR', 'DURING', 'IN'], show: 'FOR / DURING / IN', explanation: 'for/during/in our summer holidays 在暑假期间。' },
          { q: 10, answer: ['FEW'], show: 'FEW', explanation: 'Very few visitors ever go there 很少有游客去那里。' },
          { q: 11, answer: ['FROM', 'TO'], show: 'FROM / TO', explanation: 'a change from/to my usual life 与日常生活的不同。' },
          { q: 12, answer: ['ITS', 'THE'], show: 'ITS / THE', explanation: 'its/the people and buildings 它（镇）的人与建筑。' },
          { q: 13, answer: ['DURING', 'ON', 'IN'], show: 'DURING / ON / IN', explanation: 'during/on/in my holidays there 在那里度假期间。' },
          { q: 14, answer: ['WHO', 'THAT'], show: 'WHO / THAT', explanation: 'who/that lived there 定语从句修饰 people。' },
          { q: 15, answer: ['HIM'], show: 'HIM', explanation: 'invited me to stay with him 邀请我和他住一起。' },
          { q: 16, answer: ['HAVE'], show: 'HAVE', explanation: 'we have remained good friends 我们一直是好朋友（现在完成时）。' },
        ],
      },
      3: {
        title: 'Part 3 · 词形变换',
        instruction:
          'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0).',
        type: 'word_formation',
        passage:
          'Trying to predict the weather\n\n' +
          'Up until less than thirty years ago an accurate (0) PREDICTION of the weather used to (17)...................................................... be a case of intelligent estimates that consistently turned out to be wrong. Now, however, the (18)...................................................... of weather forecasters has improved and there is a (19)...................................................... for them to be taken more seriously.\n\n' +
          '(20)...................................................... in the weather caused by pollution and global warming have worrying (21)......................................................, though. The weather has become more (22)......................................................, with cold days in summer and hot days in winter. Furthermore, all these (23)...................................................... in the temperature act as a (24)...................................................... from other world problems, but this makes them no less of concern. Scientists hope that with the help of more advanced equipment, they will eventually be able to make even more accurate predictions.',
        items: [
          { q: 17, given: 'PRIMARY', answer: ['PRIMARILY'], show: 'PRIMARILY', explanation: 'primarily be 主要地，副词修饰 be。' },
          { q: 18, given: 'REPUTE', answer: ['REPUTATION'], show: 'REPUTATION', explanation: 'the reputation of weather forecasters 天气预报员的声誉，名词。' },
          { q: 19, given: 'TEND', answer: ['TENDENCY'], show: 'TENDENCY', explanation: 'a tendency for them to be taken more seriously 被更认真对待的趋势，名词。' },
          { q: 20, given: 'DISTURB', answer: ['DISTURBANCES'], show: 'DISTURBANCES', explanation: 'disturbances in the weather 天气的扰动/异常，名词复数。' },
          { q: 21, given: 'IMPLICATE', answer: ['IMPLICATIONS'], show: 'IMPLICATIONS', explanation: 'worrying implications 令人担忧的影响/后果，名词复数。' },
          { q: 22, given: 'PREDICT', answer: ['UNPREDICTABLE'], show: 'UNPREDICTABLE', explanation: 'more unpredictable 更加不可预测，加 un- 前缀。' },
          { q: 23, given: 'VARY', answer: ['VARIATIONS'], show: 'VARIATIONS', explanation: 'all these variations in the temperature 温度的所有变化，名词复数。' },
          { q: 24, given: 'DISTRACT', answer: ['DISTRACTION'], show: 'DISTRACTION', explanation: 'act as a distraction from other world problems 作为对其他世界问题的分心，名词。' },
        ],
      },
      4: {
        title: 'Part 4 · 句子转换',
        instruction:
          'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0).',
        type: 'key_word_transformation',
        items: [
          {
            q: 25,
            stem: "'Don't park near the bank!' the police officer said to us.",
            key: 'TOLD',
            answer: ['The police officer told us not to park near the bank.'],
            show: 'The police officer told us not to park near the bank.',
            explanation: 'tell sb not to do sth 转述否定祈使句。',
          },
          {
            q: 26,
            stem: "He tried really hard to recover from his wife's death.",
            key: 'OVER',
            answer: ['He tried really hard to get over his wife\'s death.'],
            show: "He tried really hard to get over his wife's death.",
            explanation: 'get over = recover from 从（悲伤等）中恢复。',
          },
          {
            q: 27,
            stem: 'We must make a decision now.',
            key: 'HIGH',
            answer: ["It's high time we made a decision.", "It's high time that we made a decision."],
            show: "It's high time we made a decision.",
            explanation: "It's high time (that) sb did sth 是该做某事的时候了（虚拟语气）。",
          },
          {
            q: 28,
            stem: 'They say the headmaster will be leaving the school soon.',
            key: 'SAID',
            answer: ['The headmaster is said to be leaving the school soon.'],
            show: 'The headmaster is said to be leaving the school soon.',
            explanation: 'sb is said to be doing 据说某人正在做某事。',
          },
          {
            q: 29,
            stem: 'There wasn\'t much we could do to help our classmates.',
            key: 'LITTLE',
            answer: ['There was little we could do to help our classmates.'],
            show: 'There was little we could do to help our classmates.',
            explanation: 'little = not much 几乎没有，否定意义。',
          },
          {
            q: 30,
            stem: 'We ate everything except the salad.',
            key: 'EAT',
            answer: ['The only thing we didn\'t eat was the salad.', 'The only thing we did not eat was the salad.'],
            show: 'The only thing we didn\'t eat was the salad.',
            explanation: "The only thing ... didn't ... was ... 唯一没吃的是沙拉。",
          },
        ],
      },
      5: {
        title: 'Part 5 · 阅读选择',
        instruction:
          'You are going to read a newspaper article about different approaches to education. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
        type: 'reading_mcq',
        passage:
          'Getting the best out of our children\n\n' +
          "There is a strange paradox to the success of the Asian education model. On the one hand, class sizes are huge by Western standards, with between 30 and 40 students per class, on average, in countries like Japan and Korea. On the other hand, children in developed Asian economies rank among the highest in the world for academic achievement in the areas of science and mathematics, especially in standardised tests. Meanwhile, British secondary school students fail to shine in conditions most educational researchers would say are far more likely to help them succeed.\n\n" +
          'Why do Asian students seem to perform so well, then? Is it their legendary discipline? Certainly, classroom management seems to be a whole lot easier in places like Korea, and perhaps lessons are more effective as a direct consequence. After all, we are only too aware of the decline in discipline standards in schools in the UK; belligerent and disrespectful students appear to be the norm these days. Teachers in Britain seem powerless to control what happens anymore. Surely this situation cannot create a very effective learning environment, so perhaps the number of students is far less relevant than is the manner in which they conduct themselves.\n\n' +
          "But there are other factors to consider, too. All Korean students spend a lot more time with their teachers. It seems logical to suggest, therefore, that they might form stronger bonds and greater trust, and that their teachers, in understanding their pupils better, might be able to offer them a more effective learning programme. Of course, trust and understanding leads to greater respect as well, so Korean students are probably less likely to ignore their teachers' advice.\n\n" +
          'Then there is the home environment. The traditional family unit still remains relatively intact in Korea. Few children come from broken homes, so there is a sense of security, safety and trust both at home and at school. In Britain, meanwhile, one in every two marriages fails and divorce rates are sky high. Perhaps children struggle to cope with unstable family conditions and their only way to express their frustration is by misbehaving at school. Maybe all this delinquent behaviour we are complaining about is just a cry for help and a plea for attention.\n\n' +
          "But while the Japanese, Korean and other Asian models generally do seem to produce excellent results, the statistics don't tell the whole truth. You see, behind those great maths and science scores, there is a quite remarkable work ethic. Asian students tend to put their education before literally everything else. They do very few extracurricular activities and devote far more time to their studies than their British peers. And this begs the question: is all that extra effort justified for a few extra percentage points in some meaningless international student performance survey? So Asian students are on average 3–5% better at maths than Britons – big deal! What is their quality of life like? Remember: schooldays are supposed to be the best, are they not?\n\n" +
          "There has been a lot of attention and praise given to these Asian models and their 'impressive' statistics of late. And, without question, some of this praise is justified, but it seems to be a case of two extremes in operation here. At one end, there is the discipline and unbelievably hard work ethic of the Asian students – success in education before all else. At the other end, British students at times appear rather careless and extremely undisciplined by comparison, but at least they DO have the free time to enjoy their youth and explore their interests. Is either system better outright? Or is it perhaps about time we stopped comparing and started trying to combine the best bits of both, so that we can finally offer our students a balanced, worthwhile education? We are not dealing with statistics only; never forget that every statistic is a little human being somewhere who desperately needs our help and guidance – who deserves it.",
        items: [
          {
            q: 31,
            q_text: "What does the writer mean when he says there is a strange 'paradox' in the Asian education model?",
            opts: [
              'There are too many students in each class.',
              'You would expect larger classes to get poorer results but they do not.',
              'Class sizes are much smaller in other parts of the world.',
              'Asian students outperform their peers in other countries.',
            ],
            answer: 1,
            explanation: 'paradox 指大班却出成绩，本应大班成绩差却相反。',
          },
          {
            q: 32,
            q_text: 'British secondary school students',
            opts: [
              'have larger class sizes.',
              'fail at school more than they succeed.',
              'do better on standardised tests.',
              'enjoy better classroom conditions.',
            ],
            answer: 3,
            explanation: '原文说英国学生在"conditions most educational researchers would say are far more likely to help them succeed"下却不出色，即条件好却成绩差。',
          },
          {
            q: 33,
            q_text: 'What does the writer suggest might make lessons in Korean schools more successful than in Britain?',
            opts: [
              'better teachers',
              'better school boards of management',
              'more effective lesson planning',
              'better discipline',
            ],
            answer: 3,
            explanation: '原文说 classroom management easier in Korea，lessons more effective as a direct consequence，即纪律更好。',
          },
          {
            q: 34,
            q_text: 'The traditional family unit',
            opts: [
              'is now more common in Korea than in Britain.',
              'is disappearing in Korea due to high divorce rates.',
              'is bad for children that come from broken homes.',
              'is unstable in Korea due to conditions in the home.',
            ],
            answer: 0,
            explanation: '原文说韩国传统家庭仍相对完整，而英国离婚率高，故韩国比英国更常见。',
          },
          {
            q: 35,
            q_text: 'According to the writer, Asian students',
            opts: [
              'focus too much on recreational activities.',
              "don't have as good a work ethic as British students.",
              "don't allow themselves much time to relax and have fun.",
              'make a big deal of their good results.',
            ],
            answer: 2,
            explanation: '原文说 Asian students put education before everything else，do very few extracurricular activities，几乎没有放松时间。',
          },
          {
            q: 36,
            q_text: "Based on what you have read, what do you think is the writer's opinion of the two educational systems discussed?",
            opts: [
              'The Asian system is clearly better.',
              'The British system is too strict.',
              'Neither system is perfect.',
              'Both systems are quite satisfactory for different reasons.',
            ],
            answer: 2,
            explanation: '作者最后呼吁 combine the best bits of both，认为两套系统各有问题，并不完美。',
          },
        ],
      },
      6: {
        title: 'Part 6 · 段落匹配',
        instruction:
          'You are going to read an extract from the journal of an ornithologist about the Lyrebird, a type of bird with unique vocal skills native to Australia and Tasmania. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
        type: 'paragraph_matching',
        passage:
          'The master mimic\n\n' +
          'My first introduction to this unique and quite remarkable creature came by way of a BBC nature series narrated by the one and only David Attenborough. Sitting on my sofa, feet up, I switched on the television and was immediately dumbstruck by what I saw. A male lyrebird had begun his mating ritual in what, to me, seemed a most extraordinary fashion. The sound of a chainsaw, trees falling, then a camera shutter – this medley of peculiar noises was but a brief illustration of the impressive vocal range of the superb lyrebird, one of two species of lyrebird native to the rainforests of Australia and Tasmania.\n\n' +
          "An ornithologist by trade, I just couldn't resist the temptation to use my upcoming holidays to take the opportunity to see this incredible creature up close for myself. 37 Having studied the indigenous birdlife of the British Isles for over twenty years, I could hardly contain my excitement at finally having the opportunity to examine some exotic birds. I landed in Sydney at 8 am local time and, not wanting to waste a moment, jumped straight from the terminal into a waiting rental jeep and headed for the Illawarra region, south of Sydney.\n\n" +
          'I had enlisted the help of local wildlife expert, Mark Mathews, and once we had set up camp in one of the few open areas of the forest and secured our belongings, Mark showed me some of his favourite spots for observing the lyrebird. 38\n\n' +
          'No sooner had we got ourselves in position, hidden in the undergrowth on the forest floor, than an unsuspecting male appeared as if from nowhere. It was a superb; that much I could tell, even from 25 yards away. The larger of the two species, the superb male is close to one metre long. It also has the more spectacular plumage, making it instantly recognisable from the other species, the Albert\'s lyrebird. 39 However, although I hadn\'t sensed it yet, Mark, being the more experienced of the two of us, seemed to know we were in for something very special. And sure enough there followed a two-hour display quite the like of which I\'d never seen before (and may never again). First, he spread his feathers wide, revealing them in all their glory. Then began the vocal performance. I ducked for cover, almost betraying our presence. Mark couldn\'t contain his amusement at my reaction and let out a quiet chuckle. But still we remained undetected. 40\n\n' +
          'Why had I risked giving us away? Well, as far as I could tell, we had just been shot at. Or, at least, by the sounds of it, rifle-shots seemed to be firing in all directions. 41 And it finally dawned on me that we had just witnessed act one of this remarkable creature\'s theatrical performance. And though I had seen and heard this before on the television, nothing could prepare me for the quite astonishing powers of mimicry this bird possessed, and which I was now observing firsthand.\n\n' +
          'Acts two and three didn\'t fail to impress, either. And then, to top it all, there appeared a female, clearly as captivated by this extraordinary exhibition as we were, if not more. 42 This was the single most important moment of my career so far – and it was still only day one!',
        options: [
          { label: 'A', text: 'This male had other things on his mind.' },
          { label: 'B', text: "Mark whispered, still chuckling a little, 'He fooled you with that one!'" },
          { label: 'C', text: 'The female must have sensed our presence, though, as she hastily departed the scene.' },
          { label: 'D', text: 'Indeed, the sight of his bright, colourful feathers alone would have been enough to make my long journey seem worthwhile.' },
          { label: 'E', text: 'So, a few days later, I was on a plane to Sydney for a two-week holiday that I was sure I would never forget.' },
          { label: 'F', text: "I couldn't believe my good fortune; it is extremely rare to see lyrebirds mating in the wild." },
          { label: 'G', text: "And I didn't have to wait long to catch my first glimpse." },
        ],
        items: [
          { q: 37, answer: 'E', explanation: '前文说要用即将到来的假期亲眼看看，E 选项 So, a few days later, I was on a plane to Sydney 衔接去悉尼。' },
          { q: 38, answer: 'G', explanation: '前文 Mark 指示观察点，G 选项 I didn\'t have to wait long to catch my first glimpse 引出很快看到鸟。' },
          { q: 39, answer: 'D', explanation: '前文描述 superb male 羽毛华丽，D 选项 Indeed, the sight of his bright, colourful feathers alone would have been enough 补充羽毛之美。' },
          { q: 40, answer: 'A', explanation: '前文 "we remained undetected"，A 选项 This male had other things on his mind 解释雄鸟专注于求偶未察觉他们。' },
          { q: 41, answer: 'B', explanation: '前文描写枪声，B 选项 Mark whispered, "He fooled you with that one!" 揭示是鸟的模仿。' },
          { q: 42, answer: 'F', explanation: '前文雌鸟出现，F 选项 I couldn\'t believe my good fortune; it is extremely rare to see lyrebirds mating 说明稀有幸运。' },
        ],
      },
      7: {
        title: 'Part 7 · 多文本匹配',
        instruction:
          'You are going to read an article about four young people who have followed their dreams and travelled to an amazing place. For questions 43-52, choose from the people (A-D). The people may be chosen more than once.',
        type: 'multiple_matching',
        sections: [
          {
            label: 'A',
            name: 'Harry',
            text:
              'Ten years ago, just north of Fregate I met two manta rays. They were seven or eight feet wide with massive outstretched fins that seemed like rubberised wings. The water was murky, rich with plankton that attracted the giant rays that filtered it through their wide mouths. They treated me with caution, maintaining a constant distance if I turned towards them, but were content to let me swim on a parallel course as if I, too, was feeding on the plankton. For a few minutes we were companions, until, circling and shifting shape against the depths, they became faint black shadows in the gloom and were gone.\n\n' +
              'The deep blue of the Indian Ocean has captured my heart and drawn me back again and again to these pure shores. On Praslin there were dolphins offshore and a pair of octopus, sliding across the coral as they flashed signals to one another with changing skin tones as remarkable as – but much faster than – any chameleon. At Conception, close to Mahe, giant rocks formed an underwater cathedral beckoning me into its vaults where moray eels gaped at me, the strange visitor to their liquid world.',
          },
          {
            label: 'B',
            name: 'Gabriel',
            text:
              "And so, my first real trip to Asia unfolded in what seemed a series of dream-panels – adventures and faces and events so far removed from my day-to-day experience that I couldn't convert them into any tongue I knew. I revisited them again and again, sleepless, in my memories and notes and photographs, once home. Almost every day of the three-week trip was so vivid that, upon returning, I gave a friend a nine-hour account of every moment. The motorbike ride through Sukhothai; the first long lazy evening in an expat's teak house in Sukhumvit; the flight into the otherworldly charm of Yangon (Rangoon) and the Strand Hotel, and the pulse of warm activity around the Sule Pagoda at nightfall. Long hot days in the silence, 5,000 temples on every side; slow trips at dawn along Inle lake, seeing a bird-faced boat being led through the quiet water; and a frenzied morning back in Bangkok, writing an article while monsoon rains pounded on the windows all around me.",
          },
          {
            label: 'C',
            name: 'Maya',
            text:
              "As I stepped off the six-seater Cessna plane after a bumpy flight over the Okavango Delta and my feet touched the arid ground, I knew this was what I'd been waiting for all my life – Africa. Our first day was at the Selinda Camp, in one of the driest parts of the delta and, when we arrived, I thought that nothing could possibly survive under the relentless sun. I was almost immediately proved wrong, as Selinda is near a small lagoon – home to a group of hippos. At night we could hear their bark-like call. Our guides warned us that although hippos may seem harmless, if threatened, they could easily kill a man!\n\n" +
              'We went on to stay in various other camps that were situated in different habitats. Jacana Camp was surrounded entirely by water and was only accessible by boat. But my favourite place was the Kalahari Desert. Our final camp was located just on the edge of the Makgadikgadi Salt Pans, which are home to many rare species of animal, such as the brown hyena.',
          },
          {
            label: 'D',
            name: 'Tom',
            text:
              "I'd been to New York three times in the past but not for long and I couldn't remember much of it. This time I only had four days but I was on my own and this seemed like a better way to get to know a city: less being sociable, more walking and visiting different places. Perfect. I liked New York even more than I expected to and it's right up there on my list of foreign cities where I'd like to live. It's fighting for the top spot with San Francisco, with the next position occupied by Paris.\n\n" +
              "I stayed at the Incentra Village House, which was lovely. Reasonably priced, with friendly, comfortable rooms. I'd stay there again. I did a lot of walking and could easily have done a lot more. I rarely left Manhattan. One day I walked more than 12 miles, including the length of Central Park and on down Fifth Avenue. Fifth Avenue was the least pleasant place; it felt like London's Oxford Street. I also walked along the High Line, which is nicely done, although rather shorter than Paris's Promenade Plantee.",
          },
        ],
        items: [
          { q: 43, q_text: 'interacted closely with wild animals?', answer: 'A', explanation: 'Harry 与 manta rays 同游、与 octopus 同潜，近距离互动。' },
          { q: 44, q_text: 'was participating in a water sport?', answer: 'A', explanation: 'Harry 游泳潜水，参与水上运动。' },
          { q: 45, q_text: 'did not think he / she would like the place so much?', answer: 'D', explanation: 'Tom 说 "I liked New York even more than I expected to"，超预期。' },
          { q: 46, q_text: 'was in relatively close proximity to dangerous animals?', answer: 'C', explanation: 'Maya 靠近 hippos，guides 警告它们能杀人。' },
          { q: 47, q_text: 'refers to documenting travel experiences?', answer: 'B', explanation: 'Gabriel 说 "in my memories and notes and photographs"，记录旅行经历。' },
          { q: 48, q_text: 'appreciated the advantages of travelling alone?', answer: 'D', explanation: 'Tom 说 "I was on my own and this seemed like a better way to get to know a city"，欣赏独自旅行的好处。' },
          { q: 49, q_text: 'spent time near places of worship?', answer: 'B', explanation: 'Gabriel 提到 Sule Pagoda 夜晚的热闹。' },
          { q: 50, q_text: 'told a friend all about the travel?', answer: 'B', explanation: 'Gabriel 说 "I gave a friend a nine-hour account of every moment"，给朋友讲了九小时。' },
          { q: 51, q_text: 'compared the place he / she visited with other places?', answer: 'D', explanation: 'Tom 把纽约与 San Francisco、Paris、London\'s Oxford Street、Paris\'s Promenade Plantee 比较。' },
          { q: 52, q_text: 'was shown around by some professionals?', answer: 'C', explanation: 'Maya 提到 "Our guides"，被专业向导带领。' },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-8-reading',
      title: 'FCE 全真模拟试题 8 · Reading and Use of English',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Reading and Use of English',
      pages: '137–144',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.200)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 选择填空',
        instruction: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
        type: 'mcq_cloze',
        passage:
          "The art of Patrick Heron\n\n" +
          "This summer, the Lloyd Gallery presents a major retrospective (0) exhibition of paintings by Patrick Heron, one of the leading (1)..... in twentieth-century British art.\n\n" +
          "Heron (2)..... the early years of his (3)..... in Cornwall, an influence that has remained with him. In 1956 he returned to a house at Zennor, (4)..... Eagles Nest, with an extraordinary garden. Here, the beauty of his surroundings (5)..... his work and he produced a series of garden paintings in which forms are shown with colour, light and texture.\n\n" +
          "Heron moved into pure abstraction in 1957 with a group of impressive, (6)..... coloured canvases, including stripe paintings. He became a leader of the major development of art which was then (7)..... place in Britain and which flowered in both painting and sculpture in the 1960s. In the 1980s, Heron's art entered a new phase, in which his inspiration seemed to be once more drawn (8)..... from his natural surroundings.",
        items: [
          { q: 1, opts: ['figures', 'actors', 'models', 'authors'], answer: 0, explanation: 'leading figures 领军人物，20 世纪英国艺术的代表人物之一。' },
          { q: 2, opts: ['lost', 'saw', 'took', 'spent'], answer: 3, explanation: 'spent the early years of his childhood 度过童年的早年时光。' },
          { q: 3, opts: ['growing', 'immaturity', 'childhood', 'friendship'], answer: 2, explanation: 'the early years of his childhood 他童年的早年岁月。' },
          { q: 4, opts: ['replied', 'written', 'known', 'called'], answer: 3, explanation: 'a house at Zennor, called Eagles Nest 名为 Eagles Nest 的房子。' },
          { q: 5, opts: ['caused', 'inspired', 'persuaded', 'urged'], answer: 1, explanation: 'the beauty of his surroundings inspired his work 周围美景启发了他的创作。' },
          { q: 6, opts: ['probably', 'certainly', 'intensely', 'rarely'], answer: 2, explanation: 'intensely coloured canvases 色彩浓烈的画布。' },
          { q: 7, opts: ['setting', 'having', 'putting', 'taking'], answer: 3, explanation: 'take place 发生，which was then taking place in Britain。' },
          { q: 8, opts: ['directly', 'suddenly', 'exactly', 'straightaway'], answer: 0, explanation: 'drawn directly from his natural surroundings 直接取自他周围的自然环境。' },
        ],
      },
      2: {
        title: 'Part 2 · 完形填空',
        instruction: 'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0).',
        type: 'open_cloze',
        passage:
          "Christmas Eve\n\n" +
          "Christmas Eve had been a very tiring day for all the Bensons (0) EXCEPT Mr Benson. The head of the house usually got off lightly (9)........................................... Christmas – lightly, that is, where personal effort was concerned, when no money was involved! Mr Benson knew that Christmas was an expensive time of the (10)............................................ And later, when he got out his cheque book to give his usual presents, the expense would (11)........................................... be greater.\n\n" +
          "But he could afford this. He could afford it better (12)........................................... Christmas than at any other Christmas in the history (13)........................................... his steadily increasing fortune. And he didn't need to think; he didn't have to choose. He just had (14)........................................... look at a list and add one or two names, or remove one or two. There was something quite big to leave (15)........................................... this year, although it didn't show on the list, or in his cheque book. If he felt like it, he would add the amount so saved to his children's cheques. Tim and Helen would then think that he was even (16)........................................... generous than he really was.",
        items: [
          { q: 9, answer: ['AT', 'AROUND'], show: 'AT / AROUND', explanation: 'at/around Christmas 在圣诞节期间。' },
          { q: 10, answer: ['YEAR'], show: 'YEAR', explanation: 'an expensive time of the year 一年中花销大的时节。' },
          { q: 11, answer: ['BE', 'BECOME'], show: 'BE / BECOME', explanation: 'the expense would be/become greater 花费会更大。' },
          { q: 12, answer: ['THIS'], show: 'THIS', explanation: 'better this Christmas than at any other Christmas 今年比以往任何一年都更宽裕。' },
          { q: 13, answer: ['WITH'], show: 'WITH', explanation: 'in the history with his steadily increasing fortune 与其稳步增长的财富相伴的历程。' },
          { q: 14, answer: ['TO'], show: 'TO', explanation: 'have to do 不得不做，he just had to look at a list。' },
          { q: 15, answer: ['OUT'], show: 'OUT', explanation: 'leave out 省去、不包括，something quite big to leave out this year。' },
          { q: 16, answer: ['MORE'], show: 'MORE', explanation: 'even more generous 更加慷慨，比较级前用 even。' },
        ],
      },
      3: {
        title: 'Part 3 · 词形变换',
        instruction: 'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits the gap in the same line. There is an example at the beginning (0).',
        type: 'word_formation',
        passage:
          "Holidays\n\n" +
          "Holidays are meant to be a time of (0) RELAXATION and fun, but unfortunately this isn't always the case. There are some (17)........................ problems, such as delayed flights and the usual (18)........................ of waiting at airports that may spoil the initial enthusiasm. However, the (19)........................ of spending two or three (20)........................ weeks in the sun on an (21)........................ island is enough to make most people think that the delays are worth it.\n\n" +
          "What's more, it's often best to make a reservation at a hotel so that you can leave home (22)........................ knowing that at least your (23)........................ is secure. Finally, it's always best to travel with one or more friends, to avoid (24)........................ and loneliness.",
        items: [
          { q: 17, given: 'PREDICT', answer: ['UNPREDICTABLE'], show: 'UNPREDICTABLE', explanation: '一些不可预料的问题，unpredictable（无法预测的）。' },
          { q: 18, given: 'FRUSTRATE', answer: ['FRUSTRATION', 'FRUSTRATIONS'], show: 'FRUSTRATION(S)', explanation: '等待的挫折感，frustration(s)。' },
          { q: 19, given: 'ANTICIPATE', answer: ['ANTICIPATION'], show: 'ANTICIPATION', explanation: '对度假的期待，anticipation。' },
          { q: 20, given: 'WONDER', answer: ['WONDERFUL'], show: 'WONDERFUL', explanation: '美妙的几周，wonderful。' },
          { q: 21, given: 'SPOIL', answer: ['UNSPOILT', 'UNSPOILED'], show: 'UNSPOILT / UNSPOILED', explanation: '未受破坏的岛屿，unspoilt / unspoiled 两种拼写均可。' },
          { q: 22, given: 'CONFIDENCE', answer: ['CONFIDENTLY'], show: 'CONFIDENTLY', explanation: '自信地离家，confidently（副词修饰动词 leave）。' },
          { q: 23, given: 'ACCOMMODATE', answer: ['ACCOMMODATION'], show: 'ACCOMMODATION', explanation: '住宿有保障，accommodation。' },
          { q: 24, given: 'HOMESICK', answer: ['HOMESICKNESS'], show: 'HOMESICKNESS', explanation: '避免想家与孤独，homesickness。' },
        ],
      },
      4: {
        title: 'Part 4 · 句子转换',
        instruction: 'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        type: 'key_word_transformation',
        items: [
          { q: 25, stem: "'There is no reason to be alarmed,' Joe said.", key: 'CAUSE', answer: ['cause for alarm'], show: 'cause for alarm', explanation: 'there is no cause for alarm 没有理由惊慌。' },
          { q: 26, stem: "We all thought that man was George's father.", key: 'MISTOOK', answer: ['mistook that man for'], show: 'mistook that man for', explanation: 'mistake sb for sb 把某人误认成某人。' },
          { q: 27, stem: "The vet examined my brother's pet dog last week.", key: 'HAD', answer: ['had his pet dog examined'], show: 'had his pet dog examined', explanation: 'have sth done 让/请人做某事，had his pet dog examined 请人给他的宠物狗做检查。' },
          { q: 28, stem: "'You both lied to my friends,' Jane said to her parents.", key: 'ACCUSED', answer: ['accused her parents of lying'], show: 'accused her parents of lying', explanation: 'accuse sb of doing sth 指责/控告某人做某事。' },
          { q: 29, stem: 'This is the village where we were born.', key: 'WHICH', answer: ['village in which we were'], show: 'village in which we were', explanation: 'the village where we were born = the village in which we were born（where = in which）。' },
          { q: 30, stem: 'Peter likes to participate in team sports.', key: 'PART', answer: ['taking part in', 'to take part in'], show: 'taking part in', explanation: 'take part in = participate in 参加；like 后可接 doing 或 to do。' },
        ],
      },
      5: {
        title: 'Part 5 · 阅读选择',
        instruction: 'You are going to read an article from a school website about developments of global importance in the last century. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
        type: 'reading_mcq',
        passage:
          "A century of change\n\n" +
          "The 20th century was a time of remarkable change. In less than one hundred years, the population of our planet went from around 2 billion people to close to 7. That's right: more than treble the number of people live in the world today as did ten or so decades ago. And not only have our numbers exploded, but our lives have become much more intertwined than ever before. For most of human history, the different communities which existed lived in their own very small worlds – worlds inside a bigger world they knew little about. The only world that really mattered was the one you could see in your immediate surroundings. Compare that situation with today, when even the poorest parts of sub-Saharan Africa can boast 50 television sets per thousand people. The world view is no longer limited to the horizon; it stretches across the planet. The global village is here. Now, let's see how it came about.\n\n" +
          "The lessons of two world wars in quick succession signalled the dawning of a new age. Statesmen and women saw that the way forward lay in bringing the world closer together. World War Three was to be avoided at all costs, they said. It was believed that by making most nations more interdependent, the risk of military conflict would be lessened, as it would be in nobody's interest to go to war then.\n\n" +
          "That desire to see the nations of the world united gave birth to the UN – the United Nations. The idea of the UN was to share power, responsibility and decision-making for world affairs equally between all the members of the new global village. This is the nearest thing we have ever had to a world government. The UN brings together officials from 193 member states. Their task is to preserve world peace and prevent conflict, but the dream never quite became a reality as this body has very little 'real' power.\n\n" +
          "Not long after the United Nations was founded, Europe started to play with the idea of uniting its own continent. After all, it was internal conflict there that had been the main cause of both world wars. Then, in 1957, the idea took shape; it started as the European Coal and Steel Community, with six member states. Today, we know it as the EU, or the European Union – 27 countries, called member states, united in one large free trade area and committed to supporting each other in order to make Europe a safer, more secure and more prosperous place. 11 of those members went a step further and created a single currency. Today, the Eurozone has 19 members. On the other hand, the UK left the EU in 2020. The whole system is far from perfect, but at least the current EU members are working together and are not trying to destroy each other anymore.\n\n" +
          "But, for all the political movement that took place in the last century, there was a revolution even more powerful, and yet more simple, that changed the world as we know it forever – and that was the dawn of the information technology age. First, television brought people from opposite sides of the globe into contact; then the Internet made the world our living room. Technology was the most powerful tool for uniting people in the last century, and the first to create a truly global community.\n\n" +
          "Now we can communicate with people from different 'tribes' in an instant, debate with them, learn from them, understand them, just chat with them, even if that's all we want. But, for all this change, have we made the world any better really? There's still a huge gap between the rich and the poor nations; there's still misunderstanding and conflict. We may be closer, we may live in a global village, and maybe we're getting there, but there's still a lot more to be done.",
        items: [
          {
            q: 31,
            q_text: 'What does the writer mean by saying that in the past, communities used to live in worlds inside a bigger world?',
            opts: [
              'People knew little about faraway places.',
              'People only cared about themselves.',
              "Most people didn't travel very much.",
              'Most people cared about what was happening in the bigger world.',
            ],
            answer: 0,
            explanation: '原文说 "worlds inside a bigger world they knew little about"，即人们对更大的世界知之甚少。',
          },
          {
            q: 32,
            q_text: 'What changed after the experience of two world wars?',
            opts: [
              'Politicians felt determined to prevent another world war.',
              'Information technology brought the world closer together.',
              'Nobody was interested in conflict anymore.',
              'Nations wanted to become more independent.',
            ],
            answer: 0,
            explanation: '原文 "World War Three was to be avoided at all costs, they said"，政治家决心避免第三次世界大战。',
          },
          {
            q: 33,
            q_text: 'What is suggested about the United Nations?',
            opts: [
              'It keeps the world peaceful and conflict-free.',
              'It will become a global government.',
              "It doesn't have a lot of meaningful influence.",
              'It is controlled by a few big powers.',
            ],
            answer: 2,
            explanation: '原文 "this body has very little real power"，暗示联合国没有多大实际影响力。',
          },
          {
            q: 34,
            q_text: "What does 'took shape' in line 43 mean?",
            opts: ['succeeded', 'developed', 'concluded', 'changed'],
            answer: 1,
            explanation: 'took shape 意为成形、逐渐发展，developed 最贴切。',
          },
          {
            q: 35,
            q_text: 'The arrival of new technology and the information age',
            opts: [
              'seemed unimportant compared to the political changes taking place.',
              'had a strong impact on the opposite side of the globe.',
              'brought people together in a way that politicians could not.',
              'saw people use the Internet a lot in their living rooms.',
            ],
            answer: 2,
            explanation: '原文说科技是 "the first to create a truly global community"，以政治家做不到的方式把人们连在一起。',
          },
          {
            q: 36,
            q_text: "What does the writer's tone in the final paragraph suggest?",
            opts: [
              'He is satisfied with what has been achieved.',
              'He is critical and pessimistic about the future.',
              'He is confused and upset.',
              'He is realistic about the situation.',
            ],
            answer: 3,
            explanation: '末段既承认进步又指出贫富差距、误解和冲突，语气客观现实。',
          },
        ],
      },
      6: {
        title: 'Part 6 · 段落匹配',
        instruction: 'You are going to read an article by a Scottish person about winter sport in Scotland. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
        type: 'paragraph_matching',
        passage:
          "The highlands\n\n" +
          "There's often a sense of the hopeless romantic associated with those who trek to the Highlands in search (more in hope than expectation) of the white stuff. More often than not, these ski and snowboard fanatics are met with disappointment. Either a thaw has set in and the rocks are visible, or it's a total whiteout, as gales blow and blizzards blast the poor expectant hopefuls. The Highlands, you see, is a tale of extremes; it's all or nothing up there.\n\n" +
          "37 But those patient folk, those old romantics whose sense of loyalty and optimism seems to know no bounds, are having the last laugh this winter. Picture this: fresh powder everywhere; 180cm of accumulated snow at the base of the resort; more falls forecast for later in the week; clear blue skies and a blazing sun. No, this isn't some upmarket French alpine retreat full of five-star chalets and bulging wallets. This is humble little Cairngorm, pride of Scotland. This is real, old-style skiing without the gloss. There's an infectious passion and enthusiasm here today. 38\n\n" +
          "Despite all the talk of global warming spelling the end for Scotland's long-suffering winter sport industry, Cairngorm and its four sister resorts, the Lecht, Glenshee, Glencoe and the Nevis Range aren't about to go down without a fight. And, finally, nature has lent them a helping hand. As I am about to hop onto the chairlift, I can't resist the urge to pause and admire the scene around me; the Highlands at its best. 39 Back then, these slopes were crowded with thousands of skiers all season long; full to capacity – just as they are once again today. The cafés are overflowing with people enjoying their apres ski. You can see skiers of all sorts: beginners, wannabes and the real deal – the masters – and don't get in their way! All of them have one thing in common. They are all wearing big smiles on their faces.\n\n" +
          "If this is a freak winter, as the Meteorology Office would have us believe, and all the snow will have gone in a few years, then I am saddened. 40 And on the rare occasions when the snow base left us wanting, we'd pull out the sled and toboggan to our little hearts' content. Sure, they'd take a battering on the rocks and stones, but those wooden sleds could handle it – they were tough! And I'm angered by the idea that my kids won't get to enjoy the same innocent sense of delight that I once did. 41 It isn't fair.\n\n" +
          "So instead of booking that package deal to Europe this winter, come home to Scotland; do your pocket and the planet a favour. Why waste money on expensive flights that will only add to our environmental woes? They're not Les Trois Vallees and they're not Courchevel; some would say they're not even close, but Scotland's small ensemble of ski resorts have had a bumper season, so don't be too quick to write them off. There's life in the old dog yet! He just needs your help.\n\n" +
          "42 Well, I guess I'm one of them. And I hope that the Highlands continue to defy the odds and that nature confounds us all and brings a little joy to our children's hearts for many a winter to come. Snow, bonnie Scotland! Snow, right up to the start of May! I'll be here waiting when you do.",
        options: [
          { label: 'A', text: 'The more we begin to feel the effects of global warming, the more we will realise the damage that we have done.' },
          { label: 'B', text: 'Why have we wrecked this planet for future generations?' },
          { label: 'C', text: "It's like going back in time to the glory days of the 1960s and 70s." },
          { label: 'D', text: 'These people have waited a long time!' },
          { label: 'E', text: 'All of my happiest memories of winters growing up as a child were spent flying down the slopes.' },
          { label: 'F', text: 'Do you remember those hopeless romantics I described before?' },
          { label: 'G', text: 'Sometimes there is not enough snow to satisfy those who have waited for so long.' },
        ],
        items: [
          { q: 37, answer: 'G', explanation: '前文描述高地滑雪的各种失望，G 选项"有时雪量不足以满足久等的人"承接失望主题，再转折到"但今年"。' },
          { q: 38, answer: 'D', explanation: '前文说"这里洋溢着热情"，D 选项"这些人等了很久！"呼应前文 patient folk。' },
          { q: 39, answer: 'C', explanation: '后文 "Back then, these slopes were crowded..." 回顾过去，C 选项"仿佛回到 60、70 年代的辉煌岁月"衔接。' },
          { q: 40, answer: 'E', explanation: '后文描写童年坐雪橇的回忆，E 选项"我童年最快乐的冬日回忆都在滑雪坡上"引出回忆。' },
          { q: 41, answer: 'B', explanation: '前文对孩子无法享受同样快乐感到愤怒，B 选项"我们为什么要为后代毁掉这个星球？"衔接情绪，后文"It isn\'t fair"呼应。' },
          { q: 42, answer: 'F', explanation: '后文 "Well, I guess I\'m one of them" 指自己也是 hopeless romantic，F 选项"还记得我之前说的那些无望浪漫者吗？"呼应开头并以自己收尾。' },
        ],
      },
      7: {
        title: 'Part 7 · 多文本匹配',
        instruction: 'You are going to read an article about four young people and their views on culture. For questions 43–52, choose from the people (A–D). The people may be chosen more than once.',
        type: 'multiple_matching',
        sections: [
          {
            label: 'A',
            name: 'Andreas: The Greek',
            text:
              "For me, Greeks are a unique people, and our culture is quite distinct from any other I've experienced in my extensive travels. You see, we are perched on the edge of the European continent. We are certainly European – there's no mistaking that – but being in such close proximity to both Africa and the Middle East has given us a unique perspective. Maybe we have been influenced to some degree by both those regions and that is part of what has given us our unique identity. Then, of course, there's also our history. I am no different from any other Greek – immensely proud of my people's achievements. After all, the Ancient Greeks gave a lot to the rest of the world; think democracy, philosophy and so on. And history is everywhere you go here, too – it's alive. I mean, there are ancient ruins, thousands of years old, all around you. It's really quite inspiring. There are reminders of the achievements of my forefathers everywhere. It's just a shame that the present isn't quite as glorious as the past.",
          },
          {
            label: 'B',
            name: 'Linda: The Briton',
            text:
              "What I admire about my people is their diversity. I suppose that stems from our past. Britain, after all, once colonised nearly half the world, so it's not surprising. And it's not just the fact that all sorts of different people live here; it's also because they manage to live in harmony. Well, most of the time. No matter whether you are a Briton of one generation or ten, so long as you consider yourself British, everyone else will welcome you.\n\n" +
              "I'm also quite proud of the monarchy. Most countries have abandoned the monarchical system, and I think that's sad. We are one of the last in Europe. I hope we never go down the route of getting rid of the queen. The one thing I'm sceptical of is Europe. I am afraid that the more involved we had become in the European Union, the less distinct we were as a nation.\n\n" +
              "I, for one, was very happy that we never joined the euro and I'm more than happy with Brexit.",
          },
          {
            label: 'C',
            name: 'Tae-Hee: The Korean',
            text:
              "Korea has one of the richest and longest histories of all the nations in the world. Very few people are aware of that because, traditionally, Korea has kept itself isolated. We used to be known as 'the Hermit Kingdom', but that is all changing now. What I am most proud of is how far we've come in such a short space of time. In the half a century or so that South Korea has existed as an independent state, it has turned itself from one of the poorest nations in the world into one of the biggest and fastest-growing economies. We're no longer an agriculture-based society. Nowadays, we export high-technology products all over the world. We even hosted a G20 summit. That was a very proud moment for me. It was a sign that my country is now quite influential and can take its place alongside the other great nations. Of course, as we have become wealthier, our lifestyles have changed, too. We go out a lot and socialise with our friends and family. Some people call us 'the Irish of Asia', but I don't think South Korean people drink as much as the Irish do – my parents don't!",
          },
          {
            label: 'D',
            name: 'Gamu: The South African',
            text:
              "Maybe my country has a chequered history, but it's sad to think this is all the rest of the world knows about us. Besides, although the situation is by no means perfect yet, my people are more united than ever before. But what I am most proud of perhaps is our natural beauty. Our coastal waters are second to none for studying and viewing marine life. And don't forget the huge variety of native land species, too. People from all over the world come to visit our wildlife reserves and marvel at the amazing creatures we have in abundance. The 2010 FIFA World Cup was a real coming-of-age moment for us, I have to say. It put South Africa on the map and showed a better side of our country to the rest of the world. My people did themselves proud by hosting a really successful tournament. We showed the whole world that we understand the meaning of sportsmanship and fair play, and I hope we proved that we can't forever be associated with the corruption and wrongdoing of the past.",
          },
        ],
        items: [
          { q: 43, q_text: 'is glad their nation is made up of people from different backgrounds?', answer: 'B', explanation: 'Linda 提到 "What I admire about my people is their diversity... all sorts of different people live here"。' },
          { q: 44, q_text: 'is proud that their country has kept a particular political system?', answer: 'B', explanation: 'Linda 说 "I\'m also quite proud of the monarchy... We are one of the last in Europe"，为保留君主制自豪。' },
          { q: 45, q_text: 'mentions something which attracts a lot of people to their country?', answer: 'D', explanation: 'Gamu 提到 "People from all over the world come to visit our wildlife reserves"，野生动物保护区吸引大量游客。' },
          { q: 46, q_text: 'believes money has had an effect on something?', answer: 'C', explanation: 'Tae-Hee 说 "as we have become wealthier, our lifestyles have changed, too"，财富改变了生活方式。' },
          { q: 47, q_text: 'thinks their country has an unfair reputation?', answer: 'D', explanation: 'Gamu 说 "it\'s sad to think this is all the rest of the world knows about us"，希望人们不要永远把南非与腐败联系在一起。' },
          { q: 48, q_text: 'believes their country has progressed very fast?', answer: 'C', explanation: 'Tae-Hee 说 "how far we\'ve come in such a short space of time... from one of the poorest... into one of the biggest and fastest-growing economies"。' },
          { q: 49, q_text: 'believes geography has influenced their country\'s culture?', answer: 'A', explanation: 'Andreas 说 "we are perched on the edge of the European continent... proximity to both Africa and the Middle East has given us a unique perspective"，地理位置塑造了文化。' },
          { q: 50, q_text: 'feels their nation\'s identity is threatened by something?', answer: 'B', explanation: 'Linda 说 "the more involved we had become in the European Union, the less distinct we were as a nation"，担忧身份认同被欧盟削弱。' },
          { q: 51, q_text: 'wishes their country was as successful as it once was?', answer: 'A', explanation: 'Andreas 说 "It\'s just a shame that the present isn\'t quite as glorious as the past"，希望重现昔日辉煌。' },
          { q: 52, q_text: 'sees evidence of the work and achievements of their ancestors?', answer: 'A', explanation: 'Andreas 说 "there are ancient ruins... There are reminders of the achievements of my forefathers everywhere"。' },
        ],
      },
    },
  },
];
