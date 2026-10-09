// Source: Cambridge English First 4（标准版4）B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Test 2 Reading and Use of English: 书页 28–39（PDF 29–40），答案核对自 Test 2 Key（书 121 / PDF 122），已逐题核对
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；含撇号字符串一律用双引号包裹。
// 注意：Part 5 行号标记 (line 87) 按原书内嵌在所标注行（"...herself up, wiggled and provided an answer."）行首。
// 注意：Part 6 副题（原书斜体导语 "Monica Platter describes how..."）存于 passage 开头。
// 注意：Part 7 文章 "The fascinating art of Ebru" 为介绍性文章，A–E 各节原书无标题/人名，name 留空字符串；
//       题组引导句 "In which section does the writer" 照原书（当前结构无对应字段，仅存档于此）。
export default {
  meta: {
    id: 'fce-standard-4-test2-reading',
    title: 'FCE 标准版真题 4 · Test 2 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Reading and Use of English',
    pages: '书 28–39',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 2 Key（书 121 / PDF 122）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'Aspects of character\n\n' +
        'Psychologists (0).......... introversion and extroversion as highly important aspects of character. Extroverts are lively and outgoing, while introverts are more controlled and reserved. People who are total extroverts may be rather irritating at times as they always seem to want to be the (1).......... of attention, whilst introverts can seem rather dull and boring because they are so quiet. Of course, very few people are totally extrovert or totally introvert; most fall somewhere between the two extremes, some (2).......... to extroversion, others to introversion.\n\n' +
        'The (3).......... to which a person is extroverted or introverted can be very relevant to a person\'s (4).......... for a particular job. Some jobs (5).......... people who are somewhat extrovert (sales, public relations), other jobs are more appropriate for people with a (6).......... to introversion (computer programming, librarianship). For this reason, companies looking to (7).......... new staff will often give applicants a psychometric test to see, amongst other things, where they lie on the introversion–extroversion (8).......... .',
      items: [
        { q: 1, opts: ['centre', 'aim', 'middle', 'point'], answer: 0, explanation: 'the centre of attention "关注的焦点"，固定搭配。' },
        { q: 2, opts: ['approaching', 'inclining', 'moving', 'directing'], answer: 1, explanation: 'some inclining to extroversion "有些人倾向于外向"，incline to 固定搭配。' },
        { q: 3, opts: ['amount', 'rate', 'level', 'extent'], answer: 3, explanation: 'the extent to which "……的程度"，固定结构。' },
        { q: 4, opts: ['suitability', 'competency', 'adequacy', 'capability'], answer: 0, explanation: 'suitability for a particular job "对某份工作的适合度"，suitability for 固定搭配。' },
        { q: 5, opts: ['expect', 'search', 'require', 'appeal'], answer: 2, explanation: 'Some jobs require people who... "有些工作需要……的人"；require 及物动词直接接宾语。' },
        { q: 6, opts: ['trend', 'custom', 'preference', 'tendency'], answer: 3, explanation: 'a tendency to introversion "内向的倾向"，tendency to/towards 固定搭配。' },
        { q: 7, opts: ['find out', 'get up', 'take on', 'show in'], answer: 2, explanation: 'take on new staff "招聘新员工"，take on 固定短语动词。' },
        { q: 8, opts: ['scale', 'category', 'series', 'range'], answer: 0, explanation: 'on the introversion–extroversion scale "在内外向量表上"，scale 量表。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'Nordic walking\n\n' +
        'Nordic walking is an outdoor activity first developed in (0).......... 1930s in Finland. It basically involves walking with very light sticks a bit like ski-poles, (9).......... are strapped to your wrists and used to push you along.\n\n' +
        'Nordic walking was initially devised (10).......... a form of summer exercise for winter cross-country skiers, but was not taken seriously for general fitness training until roughly the turn (11).......... the century. Since then, (12).......... popularity has exploded in Europe, and it is taking (13).......... in the USA, Australia and Japan.\n\n' +
        'The appeal of the activity is obvious. Not (14).......... is it easy to do, but Nordic walking is apparently the most complete body workout there is, using more muscles than either running or swimming. For people who dislike gyms, it is perfect. Nordic walking can be done almost (15).........., from beaches and parks (16).......... city streets.',
      items: [
        { q: 9, answer: ['WHICH'], show: 'WHICH', explanation: '非限定性说明从句：sticks, which are strapped to your wrists，指代手杖。' },
        { q: 10, answer: ['AS'], show: 'AS', explanation: 'be devised as "被设计为"，as 引出身份。' },
        { q: 11, answer: ['OF'], show: 'OF', explanation: 'the turn of the century "世纪之交"，固定短语。' },
        { q: 12, answer: ['ITS'], show: 'ITS', explanation: 'its popularity "它的知名度"，指 nordic walking 的。' },
        { q: 13, answer: ['OFF'], show: 'OFF', explanation: 'be taking off "正在兴起"，take off 固定短语动词。' },
        { q: 14, answer: ['ONLY'], show: 'ONLY', explanation: 'Not only is it easy to do, but...，not only 置句首引起倒装。' },
        { q: 15, answer: ['ANYWHERE', 'EVERYWHERE'], show: 'ANYWHERE / EVERYWHERE', explanation: 'can be done almost anywhere/everywhere "几乎随处可行"，Key 给两种形式。' },
        { q: 16, answer: ['TO'], show: 'TO', explanation: 'from beaches and parks to city streets，from...to... 固定结构。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'Canadian astronaut\n\n' +
        'Chris Hadfield was the first (0) PROFESSIONAL astronaut from Canada to travel in (17)_____ space. He says that his inspiration for wanting to be an astronaut came when, at the age of just nine, he and his family watched the first moon (18)_____ in July, 1969 at their home in Ontario. Chris never lost (19)_____ of this ambition throughout his (20)_____ .\n\n' +
        'Then, at the age of 18, he went on to study mechanical engineering and later aviation studies. In 1992, after serving as a test pilot for several years, he was chosen from over 5,000 (21)_____ who wanted to join the Canadian space programme. He then had to undergo a training programme which was extremely (22)_____ both physically and mentally.\n\n' +
        'He was selected for his first space (23)_____ in 1995 on the US space shuttle Atlantis. He served on several different types of space mission, and was appointed to the role of (24)_____ of the International Space Station mission in 2013.',
      items: [
        { q: 17, given: 'OUT', answer: ['OUTER'], show: 'OUTER', explanation: 'out → outer；outer space "外太空"，固定表达。' },
        { q: 18, given: 'LAND', answer: ['LANDING'], show: 'LANDING', explanation: 'land → landing；the first moon landing "首次登月"，需名词。' },
        { q: 19, given: 'SEE', answer: ['SIGHT'], show: 'SIGHT', explanation: 'see → sight；never lost sight of "从未忘记"，固定短语。' },
        { q: 20, given: 'BOY', answer: ['BOYHOOD'], show: 'BOYHOOD', explanation: 'boy → boyhood 童年；throughout his boyhood，需名词。' },
        { q: 21, given: 'APPLY', answer: ['APPLICANTS'], show: 'APPLICANTS', explanation: 'apply → applicants 申请人；over 5,000 applicants，复数名词。' },
        { q: 22, given: 'RIGOUR', answer: ['RIGOROUS'], show: 'RIGOROUS', explanation: 'rigour → rigorous 严酷的；修饰训练 programme，需形容词。' },
        { q: 23, given: 'FLY', answer: ['FLIGHT'], show: 'FLIGHT', explanation: 'fly → flight 航天飞行；his first space flight，需名词。' },
        { q: 24, given: 'COMMAND', answer: ['COMMANDER'], show: 'COMMANDER', explanation: 'command → commander 指令长；the role of commander of the ISS mission，需指人的名词。' },
      ],
    },
    4: {
      title: 'Part 4 · 句子转换',
      instruction:
        'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given. Here is an example (0). Write only the missing words IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'key_word_transformation',
      items: [
        {
          q: 25,
          stem: "Steven asked me, 'Do you want to go to the movies with me?'",
          key: 'LIKE',
          answer: ['if I would like to', 'whether I would like to', "if I'd like to", "whether I'd like to"],
          show: "if / whether I'd / would like to",
          explanation: '直接引语一般疑问句改间接引语：asked me if/whether I\'d/would like to go；Key 印 if/whether I | \'d/would LIKE to。',
        },
        {
          q: 26,
          stem: 'Philip told Maria he would contact her on Saturday.',
          key: 'TOUCH',
          answer: ['get in touch with', 'be in touch with'],
          show: 'get / be in touch with',
          explanation: 'contact her → get/be in touch with her；Key 印 get/be in | TOUCH with。',
        },
        {
          q: 27,
          stem: 'My sister said she would help me do my homework.',
          key: 'HAND',
          answer: ['give me a hand', 'lend me a hand', 'give me a helping hand', 'lend me a helping hand'],
          show: 'give / lend me a (helping) hand',
          explanation: 'help me do → give/lend me a (helping) hand with；Key 印 give/lend me | a (helping) HAND。',
        },
        {
          q: 28,
          stem: "We didn't get to sleep at all last night because of the noise from the room next door.",
          key: 'IMPOSSIBLE',
          answer: ['made it impossible for'],
          show: 'made it impossible for',
          explanation: "The noise made it impossible for us to get to sleep，make it + adj + for sb to do 形式宾语结构。",
        },
        {
          q: 29,
          stem: 'Would you like to come shopping this afternoon?',
          key: 'FEEL',
          answer: ['feel like coming shopping', 'feel like going shopping'],
          show: 'feel like coming / going shopping',
          explanation: 'Would you like to...? → Do you feel like coming/going shopping...?，feel like doing 表意愿；Key 印 FEEL like | coming/going shopping。',
        },
        {
          q: 30,
          stem: 'It was hard for me to understand what the visitor was saying.',
          key: 'DIFFICULTY',
          answer: ['had difficulty understanding', 'had difficulty in understanding'],
          show: 'had difficulty (in) understanding',
          explanation: 'It was hard for me to understand → I had difficulty (in) understanding，have difficulty (in) doing 固定结构；Key 印 had DIFFICULTY | (in) understanding。',
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an extract from the biography of a biologist called Jane Goodall. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        'Jane Goodall: chimpanzee expert\n\n' +
        "A very young, idealistic Englishwoman arrived in Africa in early April 1957 and soon, quite possibly, in her first letter home, wrote the astonishingly dramatic words 'I am living in the Africa I have always longed for, always felt stirring in my blood.' She was to spend most of the rest of her life in Africa and – as a citizen, journalist, scientist, activist and environmentalist – came to be associated with that continent. Her name was Jane Goodall.\n\n" +
        "In 1963, Britain's National Geographical Society promoted Jane Goodall's fame by producing a series of glossy articles and television documentaries on her chimpanzee research. That early fame has since been reinforced by her own writing for a popular audience, including award-winning children's books and the 1971 bestseller In the Shadow of Man, which has been translated into 41 languages and is still in print. With the possible exception of Marie Curie, the Nobel Prize-winning scientist, Jane Goodall must be the most widely celebrated female scientist of the 20th century.\n\n" +
        "Ironically, her celebrity may have obscured her actual achievements. Hundreds of articles, interviews and books have told her life story but they are often limited in scope and sentimental. She has been presented as an adventure-seeking little girl, a privileged woman who dreamed of a life with wild animals, a determined feminist in a man's world, and so on. Put together, these images devalue what she has actually done. Based on the number of references to her research by academics in her field, the number of her students who have subsequently reached influential positions in the biological sciences, and the volume of data she amassed in her forty-year-long study, Jane Goodall ought to be considered a uniquely distinguished pioneer in her field and the world's leading zoologist. Yet her achievement can be stated more simply and directly: she opened the door to our understanding of the social and emotional lives of chimpanzees.\n\n" +
        'Wild chimpanzees are dangerous, though before Goodall began her work the dangers were misunderstood and exaggerated. Prior to Goodall\'s early discoveries, no one knew that chimpanzees ate meat. We had no idea that they, or indeed any large mammals other than ourselves, created and used tools. We did not realize that chimpanzees share with humans a similar set of emotions or that their social systems are startlingly like ours. We would not have believed that chimpanzee communities across Africa possess various distinctive cultural traditions.\n\n' +
        "Goodall's scholarly book, The Chimpanzees of Gombe (1986), ranks as the single most authoritative work in this area, the first encyclopaedia for chimpanzee research. Her long-term study of wild apes along the shores of Lake Tanganyika in Gombe State, Nigeria, has turned out to be, in the words of biologist Stephen Jay Gould, 'one of the Western world's great scientific achievements'. Jane Goodall helped create a revolution in the way we study animals, and because the animals she studied are humankind's closest relatives, she also helped alter the way humans think about themselves.\n\n" +
        "Even as a child, there were a few early indicators of the person Jane Goodall would become. By far the clearest of these from her early childhood was in the autumn of 1939, when she was just five years old. One autumn day, a 'golden afternoon' as her mother remembers it, Jane disappeared. The police were called and began the search. Neighbours and family members joined in. After an increasingly frantic search, as dusk moved to dark, the child suddenly reappeared, alone, with fragments of straw in her hair and clothes. 'Wherever have you been?' her mother asked. Jane explained that she had wondered how hens lay eggs. To find out, she had crawled inside a henhouse, concealed herself in the straw, and lain perfectly still for five hours until the hen raised (line 87) herself up, wiggled and provided an answer. It is tempting to consider this as the beginning of her career as a biologist.",
      items: [
        {
          q: 31,
          q_text: 'In the first paragraph, we learn that Goodall',
          opts: [
            'had been wanting to travel to Africa for some time.',
            'recognised that she was unusual in wanting to go to Africa.',
            'initially felt limited by the job she was doing.',
            'sometimes found it difficult to express herself in writing.',
          ],
          answer: 0,
          explanation: "首段她第一封家书便写 'I am living in the Africa I have always longed for, always felt stirring in my blood.'——longed for / felt stirring in my blood 表明向往已久。",
        },
        {
          q: 32,
          q_text: "Goodall's book In the Shadow of Man is mentioned to make the point that",
          opts: [
            'she contributed to the spread of her own fame.',
            'she tried her best to compete with other female scientists.',
            'she was interested in collaborating with scientists abroad.',
            'she was more interested in books than television programmes.',
          ],
          answer: 0,
          explanation: '第二段 That early fame has since been reinforced by her own writing——她自己面向大众的写作（含 In the Shadow of Man）强化了名声。',
        },
        {
          q: 33,
          q_text: "What is the writer doing in the third paragraph?",
          opts: [
            'questioning some of the decisions Goodall made',
            "describing the many sides of Goodall's personality",
            "emphasising the significance of Goodall's work",
            'arguing that most books on Goodall are well researched',
          ],
          answer: 2,
          explanation: '第三段以论文引用数、学生成就、四十年研究数据为据，断言她 ought to be considered a uniquely distinguished pioneer，并总结她打开了理解黑猩猩的大门——强调其工作的重大意义。',
        },
        {
          q: 34,
          q_text: "What does the writer say about Goodall's book The Chimpanzees of Gombe?",
          opts: [
            'The importance of it was not immediately obvious.',
            'There is no better book on the subject.',
            'It inspired a leading scientist to write a similar book.',
            'It encouraged other biologists to visit Lake Tanganyika.',
          ],
          answer: 1,
          explanation: 'ranks as the single most authoritative work in this area——该领域最权威的著作，即没有更好的书。',
        },
        {
          q: 35,
          q_text: "What is the writer's purpose in telling the story about the hen?",
          opts: [
            'to give an example of the imaginative games Goodall played',
            "to point out how unusual Goodall's interests were",
            "to show how different Goodall's character was as a child",
            "to highlight Goodall's intellectual curiosity",
          ],
          answer: 3,
          explanation: '五岁的 Goodall 想知道母鸡怎么下蛋，在鸡舍里一动不动趴了五个小时直到得到"答案"——求知欲/求证的执着。',
        },
        {
          q: 36,
          q_text: "What does 'provided an answer' (line 87) refer to?",
          opts: [
            'the question her mother asked',
            "Goodall's curiosity",
            "Goodall's actions",
            'the search for Goodall',
          ],
          answer: 1,
          explanation: '五岁时 Goodall 趴在鸡舍里想弄清母鸡如何下蛋，母鸡站起、扭动身子 provided an answer——回答的正是她的好奇心（curiosity）。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article which compares performing stand-up comedy with giving a presentation. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        "Stand-up comedy and presentations\n\n" +
        'Monica Platter describes how her experiences on a stage performing stand-up comedy helped her to get better at giving presentations for work.\n\n' +
        "I work in marketing, but I've always fancied trying stand-up comedy in my spare time. Earlier this year, I finally plucked up courage and made a series of appearances on stage at a comedy club. The experience provided me with some useful lessons for the public speaking I do in my normal job.\n\n" +
        "To start with, half an hour trying to be funny on stage is a long time. The first five minutes are normally fine, just as the start of a work presentation usually goes well. But then a rather awkward 25 minutes often follow. I tend to speak very quickly and run out of things to say, but after a couple of difficult experiences at the club I realised I needed to speak at half the speed. That way I immediately made life easier for myself. (37) I've subsequently tried to slow down in the presentations I give at work, and it's definitely helped.\n\n" +
        "I also learned that you shouldn't judge your performance by the audience's reaction. If they aren't laughing, it doesn't necessarily mean they don't think it's funny. It could just be that they aren't laughers. Similarly, in a presentation, if your audience isn't looking excited, it might just be that they don't show much emotion. You might have been good or rubbish up to that point. (38) Do that and you'll end up feeling better.\n\n" +
        "Every comedian I met at the club said that knowing how to pause is crucial. (39) They get the joke and wait in suspense to find out what comes next. I've realised that the same principle applies to other types of public speaking. It's good to extend your pauses and use them to make your listeners think before you move on.\n\n" +
        "Another thing I noticed was that even comedians who seem very confident are mostly just good at appearing confident. I would often stand at the club almost fainting with fear, but I managed to deliver a routine that people thought was calm and polished. (40) If you appear to be in control, however, people believe that you know what you're doing, and they listen to you. It's true of other public speaking too.\n\n" +
        "Then, there is the use of fillers, techniques that comedians and public speakers regularly employ. I've seen some take a sip of water, while others adjust the microphone lead, even though they're not thirsty and the microphone sounds fine. (41) So, whether you're going to do stand-up or business talks, develop fillers that you feel comfortable with.\n\n" +
        "The bottom line with stand-up comedians, however, is that it's always been about performance and delivery. Everything I saw at the club confirmed that. (42) I've been to great shows where 80% of the humour came from the comedian's facial expressions, and eyebrow movements seem particularly important. I've been focussing on improving my eyebrow use when I'm giving work presentations. I'm still not as good as I'd like, but I'm making progress, and much of this is down to what I've learned from stand-up.",
      options: [
        { label: 'A', text: 'It felt more like a shaky mess to me than anything else, to be honest.' },
        { label: 'B', text: 'This showed the importance of observing your audience and responding to them.' },
        { label: 'C', text: "This told me the best script in the world is nothing in the hands of someone who isn't funny in themselves." },
        { label: 'D', text: 'It just provides them with an opportunity to remember what they were meant to say next.' },
        { label: 'E', text: "Either way, the best thing to do is carry on and assume they're really getting a lot out of it." },
        { label: 'F', text: 'It was a major turning point for me.' },
        { label: 'G', text: "It's when your audience has a think about what you've just said." },
      ],
      items: [
        { q: 37, answer: 'F', explanation: 'F "这对我是个重大转折点"——放慢语速让境况立变，后句 I\'ve subsequently tried to slow down 呼应转折后的改变。' },
        { q: 38, answer: 'E', explanation: 'E "无论如何，最好的做法是继续并假定听众收获很大"——承接无论 good or rubbish 的两种情况；后句 Do that and you\'ll end up feeling better 承接。' },
        { q: 39, answer: 'G', explanation: 'G "此时听众会想一想你刚说的话"——解释 pause（停顿）为何 crucial；They get the joke and wait in suspense 承接。' },
        { q: 40, answer: 'A', explanation: 'A "说实话，对我来说那更像一团糟"——与观众眼中 calm and polished 形成反差，引出 If you appear to be in control 的道理。' },
        { q: 41, answer: 'D', explanation: 'D "它只是给他们一个机会记起接下来该说什么"——解释喝水、调话筒线等 fillers（垫场动作）的作用。' },
        { q: 42, answer: 'C', explanation: 'C "这告诉我：再好的剧本，落在本身不搞笑的人手里也毫无意义"——承接 confirmed that，引出 80% 幽默来自表情的观察。' },
      ],
    },
    7: {
      // 原书文章标题 "The fascinating art of Ebru"（存档于 passage）；A–E 各节无标题/人名，name 留空
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read a magazine article about a form of art called Ebru. For questions 43–52, choose from the sections (A–E). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      passage:
        'The fascinating art of Ebru',
      sections: [
        {
          label: 'A',
          name: '',
          text:
            'The art of Ebru can produce stunning results. It involves painting on the surface of water, then transferring the moving image to paper or fabric. The results are spectacular – strikingly contemporary, yet rooted in the tradition of a centuries-old art form. There are two key ingredients: tragacanth, a soft gum which makes the water more dense, and ox gall. The ox gall has two essential properties: first, it allows colours to float and spread on the surface of the water; second, it prevents the surface of the water from merging or completely dissolving.',
        },
        {
          label: 'B',
          name: '',
          text:
            "An Ebru artist, Hayrettin Kozanoglu, demonstrates by dipping a brush into pots of vivid colours arranged around a shallow rectangular tray of water, then sprinkling paint onto the surface. 'I can drop on green, then blue on top, then add yellow, and the colours stay completely separate,' he says. He takes a small comb and swirls it across the surface. Instead of the colours merging into a muddy mess, as would happen with oil or acrylic paint, the tray fills with swirling curly designs of the kind seen inside the front and back covers of old hardback books. Finally Kozanoglu places a piece of paper onto the tray, carefully presses it flat without submerging it, then deftly slides it out. The pattern he created in the tray has been transferred to the sheet with absolute precision.",
        },
        {
          label: 'C',
          name: '',
          text:
            "Prior to arriving in Europe in the 17th century, a similar art form to Ebru had developed across Asia. A 10th-century Chinese book mentions 'drifting sand notepaper' made by dragging paper through a fermented flour paste mixed with colours, while suminagashi, or 'floating ink', was known in 12th-century Japan. By the 15th century, India and countries across central Asia had their own indigenous versions. The current Turkish tradition of Ebru dates to the mid-19th century and the work of several masters, who passed on their skills to apprentices.",
        },
        {
          label: 'D',
          name: '',
          text:
            "Ebru artists are renowned for intricate depictions of flowers, as well as abstract patterns. Kozanoglu explains that the technique is evolving: 'Before the 20th century, it was only about flowers. As more people are learning about Ebru, interesting experiments are happening. Artists are creating landscapes and even portraits – although it takes many years of practice to reach that level. The beauty of Ebru is that you can create attractive and complex works of art quickly and easily. Ebru has the potential to surprise us because the water and paint permit new and exciting things to happen.'",
        },
        {
          label: 'E',
          name: '',
          text:
            "Kozanoglu recognises the therapeutic value of Ebru in helping people with emotional problems. 'To make Ebru art, you need to concentrate, to be calm and patient. Also, the colours you choose can be a reflection of your personality, your mood and your circumstances. Water is the source of life and I believe it holds memories. That's why the way in which people make the connection between the water and the paint is important. It's an art form that gives pleasure to the many people who practise it – and also recognition of the power of water in helping to create a more colourful and inspiring world.'",
        },
      ],
      items: [
        { q: 43, q_text: 'say that the final design is exactly the same as the one created on the water?', answer: 'B', explanation: 'B：The pattern he created in the tray has been transferred to the sheet with absolute precision——纸上成品与水上图案完全一致。' },
        { q: 44, q_text: 'claim that Ebru is a combination of ancient and modern art?', answer: 'A', explanation: 'A：strikingly contemporary, yet rooted in the tradition of a centuries-old art form——既现代又源自古老传统。' },
        { q: 45, q_text: 'suggest that the results of using the Ebru technique can be unpredictable?', answer: 'D', explanation: 'D：Ebru has the potential to surprise us because the water and paint permit new and exciting things to happen——效果难以预料。' },
        { q: 46, q_text: 'identify the mental attitude an artist should have when working on Ebru?', answer: 'E', explanation: 'E：To make Ebru art, you need to concentrate, to be calm and patient——创作时应有的专注、平静与耐心。' },
        { q: 47, q_text: 'explain ways in which one substance is vital to Ebru?', answer: 'A', explanation: 'A：The ox gall has two essential properties: first... second...——牛胆汁对 Ebru 至关重要的两种作用。' },
        { q: 48, q_text: 'mention that Ebru is expanding into new genres of painting?', answer: 'D', explanation: 'D：Artists are creating landscapes and even portraits——从花卉扩展到风景、肖像等新题材。' },
        { q: 49, q_text: 'reveal how knowledge of the Ebru technique has been kept alive?', answer: 'C', explanation: 'C：the work of several masters, who passed on their skills to apprentices——师徒相传延续技艺。' },
        { q: 50, q_text: 'claim there is a link between colour and feelings?', answer: 'E', explanation: 'E：the colours you choose can be a reflection of your personality, your mood and your circumstances——色彩与情绪性格相关。' },
        { q: 51, q_text: 'mention what the original subject of Ebru painting was?', answer: 'D', explanation: "D：'Before the 20th century, it was only about flowers.'——最初题材是花卉。" },
        { q: 52, q_text: 'give an example of the way different shades of paint can be used in Ebru?', answer: 'B', explanation: "B：'I can drop on green, then blue on top, then add yellow, and the colours stay completely separate.'——不同色彩叠加使用的实例。" },
      ],
    },
  },
}
