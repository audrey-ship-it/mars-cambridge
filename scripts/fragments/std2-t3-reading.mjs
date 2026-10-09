// 标准版2 · Test 3（书内印 Test 7）Reading and Use of English（书页 52–63；Key: 书 144/PDF 145，已逐题核对）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；密排页（P5 文章、P4 第 27 题、P7 各段）已局部放大二次核验。
// 注意：Part 5 文章原书左栏边注 line 27 对应 q32 'bolster my case'，按 STD1_T1 惯例在文中标注 (line 27)。
// 注意：Part 7 原书标题为 "Canaletto and Venice"（副题：An expert describes the close relationship between the great
//       18th century Italian painter Canaletto and his home city.）；数据结构无标题字段，未入 passage。
export default {
  meta: {
    id: 'fce-standard-2-test3-reading',
    title: 'FCE 标准版真题 2 · Test 3 Reading and Use of English',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Reading and Use of English',
    pages: '书 52–63',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 7 Key（书 144 / PDF 145）',
    examKey: 'fce-standard-2-test3',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 选择填空',
      instruction:
        'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0). Mark your answers on the separate answer sheet.',
      type: 'mcq_cloze',
      passage:
        'A new partnership\n\n' +
        'In 1884, a small engineering firm was (0).......... in a part of Manchester. Its owner had (1).......... to complete only two years in formal education yet was still successfully (2).......... a business. In 1903, he bought his first car but it did not meet his high (3).......... and, being an engineer, he could not (4).......... having a go at improving it. By the following year he had designed a new car himself, and then started manufacturing this model. One of his cars came to the (5).......... of a wealthy car salesman from an aristocratic background. He was (6).......... impressed by the car and a meeting was (7).......... between the two of them at the Midland Hotel in Manchester. The meeting was a success and the two men decided to go into business together. The name of the manufacturer was Henry Royce and that of the wealthy aristocrat, Charles Rolls – and so the world-famous brand, the luxurious Rolls-Royce, was (8).......... .',
      items: [
        { q: 1, opts: ['passed', 'achieved', 'managed', 'allowed'], answer: 2, explanation: 'had managed to complete "设法只完成了两年学业"，manage to do 表示成功做成。' },
        { q: 2, opts: ['arranging', 'running', 'working', 'dealing'], answer: 1, explanation: 'successfully running a business "成功地经营一家企业"。' },
        { q: 3, opts: ['standards', 'rates', 'levels', 'ranks'], answer: 0, explanation: "did not meet his high standards \"达不到他的高标准\"，meet one's standards 固定搭配。" },
        { q: 4, opts: ['obstruct', 'resist', 'oppose', 'refuse'], answer: 1, explanation: "could not resist having a go \"忍不住想试一试\"，can't resist doing 固定搭配。" },
        { q: 5, opts: ['attention', 'view', 'interest', 'attraction'], answer: 0, explanation: 'came to the attention of "引起……的注意"，固定短语。' },
        { q: 6, opts: ['widely', 'mainly', 'greatly', 'fully'], answer: 2, explanation: 'greatly impressed "印象深刻"，greatly 修饰 impressed。' },
        { q: 7, opts: ['put out', 'turned up', 'taken out', 'set up'], answer: 3, explanation: 'a meeting was set up "安排了一次会面"，被动语态用过去分词 set up。' },
        { q: 8, opts: ['brought', 'originated', 'discovered', 'born'], answer: 3, explanation: 'the brand was born "品牌诞生了"；originate 需接 in/from，不用于被动。' },
      ],
    },
    2: {
      title: 'Part 2 · 完形填空',
      instruction:
        'For questions 9–16, read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'open_cloze',
      passage:
        'The importance of reading\n\n' +
        'Reading is good (0).......... us. In fact, there is plenty of evidence that reading for pleasure is more than just another leisure pursuit – it actually improves our mental and physical health. Reading extended texts (9).......... as novels or biographies, (10).......... requires intense concentration for a considerable period of time, helps to lengthen attention spans in children and improves their ability to think clearly. However, experts say (11).......... is essential to acquire the habit of reading extensively (12).......... a small child, while the brain is still developing.\n\n' +
        'Reading can undoubtedly (13).......... beneficial to our mental well-being. Reading not (14).......... helps combat feelings of loneliness, it also allows people to relax and forget their problems for (15).......... while. The concentration required during the act of reading seems to ease muscle tension and slow the heart rate. Researchers have found that just six minutes of reading can reduce stress levels by as (16).......... as two-thirds.',
      items: [
        { q: 9, answer: ['SUCH'], show: 'SUCH', explanation: 'such as novels or biographies "例如小说或传记"，such…as 引出例子。' },
        { q: 10, answer: ['WHICH'], show: 'WHICH', explanation: '非限制性定语从句，指代前面"阅读长篇文本"这件事，用 which。' },
        { q: 11, answer: ['IT'], show: 'IT', explanation: 'experts say it is essential to acquire…，it 作形式主语，真正主语是不定式。' },
        { q: 12, answer: ['AS'], show: 'AS', explanation: 'as a small child "当还是小孩子的时候"，as 表阶段/身份。' },
        { q: 13, answer: ['BE'], show: 'BE', explanation: 'can undoubtedly be beneficial，情态动词后接动词原形 be。' },
        { q: 14, answer: ['ONLY'], show: 'ONLY', explanation: 'not only…(but) also… 固定结构，"不仅帮助……还让……"。' },
        { q: 15, answer: ['A'], show: 'A', explanation: 'for a while "一段时间"，固定短语。' },
        { q: 16, answer: ['MUCH'], show: 'MUCH', explanation: 'as much as two-thirds "多达三分之二"，stress 不可数，用 much。' },
      ],
    },
    3: {
      title: 'Part 3 · 词形变换',
      instruction:
        'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0). Write your answers IN CAPITAL LETTERS on the separate answer sheet.',
      type: 'word_formation',
      passage:
        'The price of meals\n\n' +
        'When a meal is (0) EXPENSIVE, do people say they enjoy it simply because it costs a lot of money? There is some (17)_____ from an experiment in a New York restaurant which suggests that this might be so.\n\n' +
        'The restaurant served diners a meal but charged some (18)_____ as much as others, even though the meals were identical and taken in the same (19)_____ with the same level of service. After the meal everyone was asked what they thought of the meal. One might think that the people who had paid least would be the most impressed with the meal. (20)_____ though, it was those who had paid most who gave it the highest (21)_____ .\n\n' +
        'According to a well-known (22)_____ the reason for this finding is that a high price for a meal is very (23)_____ in convincing people that a meal is good. One wonders if this might (24)_____ restaurant owners to keep their prices high.',
      items: [
        { q: 17, given: 'EVIDENT', answer: ['EVIDENCE'], show: 'EVIDENCE', explanation: 'evident → evidence 证据；some 后接名词，"实验提供了一些证据"。' },
        { q: 18, given: 'TWO', answer: ['TWICE'], show: 'TWICE', explanation: 'two → twice 两倍；charged some diners twice as much as others。' },
        { q: 19, given: 'SURROUND', answer: ['SURROUNDINGS'], show: 'SURROUNDINGS', explanation: 'surround → surroundings 环境；the same 后接复数名词，"在相同的环境中"。' },
        { q: 20, given: 'SURPRISE', answer: ['SURPRISINGLY'], show: 'SURPRISINGLY', explanation: 'surprise → surprisingly 令人惊讶的是；修饰整个句子且位于句首（Key 原文印作 Surprisingly）。' },
        { q: 21, given: 'RATE', answer: ['RATING', 'RATINGS'], show: 'RATING(S)', explanation: 'rate → rating(s) 评分；the highest rating 最高评价（Key 印作 rating(s)，单复数均可）。' },
        { q: 22, given: 'PSYCHOLOGY', answer: ['PSYCHOLOGIST'], show: 'PSYCHOLOGIST', explanation: 'psychology → psychologist 心理学家；a well-known 后接表人的名词。' },
        { q: 23, given: 'SIGNIFY', answer: ['SIGNIFICANT'], show: 'SIGNIFICANT', explanation: 'signify → significant 意义重大的；very 后接形容词作表语。' },
        { q: 24, given: 'COURAGE', answer: ['ENCOURAGE'], show: 'ENCOURAGE', explanation: 'courage → encourage 鼓励；might 后接动词原形，encourage sb to do。' },
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
          stem: "Last Saturday my friend asked me, 'Do you want to see a film tonight?'",
          key: 'WHETHER',
          answer: ['whether I wanted to see'],
          show: 'whether I wanted to see',
          explanation: '一般疑问句变间接引语用 whether，时态后移 want → wanted；后句已印 a film that night。',
        },
        {
          q: 26,
          stem: 'The journey was shorter than I had expected.',
          key: 'LONG',
          answer: ["n't as long as", 'not as long as'],
          show: "n't / not as long as",
          explanation: "shorter than = not as long as；was 后接 n't 或 not。",
        },
        {
          q: 27,
          stem: "'There's been a rise of over ten per cent in the price of the tickets,' said Sue.",
          key: 'GONE',
          answer: ['has gone up more', 'has gone up by more', 'had gone up more', 'had gone up by more'],
          show: 'has / had gone up (by) more',
          explanation: 'a rise of over ten per cent → gone up (by) more than ten per cent；转述用 has/had gone up，(by) 可省略。',
        },
        {
          q: 28,
          stem: 'He sings in the show and dances in it as well.',
          key: 'ONLY',
          answer: ['only does he sing'],
          show: 'only does he sing',
          explanation: 'Not only 置于句首引起部分倒装：Not only does he sing…',
        },
        {
          q: 29,
          stem: 'My mother thought it would be good for me to live abroad for some time.',
          key: 'BENEFIT',
          answer: ['benefit from living', 'get some benefit from living', 'gain some benefit from living'],
          show: 'benefit from living / get / gain some benefit from living',
          explanation: 'be good for me to live abroad → benefit from living abroad；或 get/gain some benefit from living。',
        },
        {
          q: 30,
          stem: "I am sorry I didn't contact you, but I was very busy.",
          key: 'TOUCH',
          answer: ['not getting in touch with'],
          show: 'not getting in touch with',
          explanation: "apologise for 后接动名词；didn't contact you → not getting in touch with you。",
        },
      ],
    },
    5: {
      title: 'Part 5 · 阅读选择',
      instruction:
        'You are going to read an extract from a book about a cycle ride from Russia to the UK. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text. Mark your answers on the separate answer sheet.',
      type: 'reading_mcq',
      passage:
        'Cycling Home from Siberia, by Robert Lilwall\n\n' +
        'We had been flying east all night and I awoke to notice that it was already daylight. Looking out of the window onto the empty landscape below the dark shades of brown and green reassured me that, although it was mid-September, it had not yet started snowing in Siberia. I could see no sign of human life and the view rolled away in an otherworldly blend of mountains, streams and forests to an endless horizon.\n\n' +
        "My Russian neighbour Sergei woke up and smiled at me sleepily. I had told him that I was flying to the far-eastern Siberian city of Magadan with only a one-way ticket because it was my intention to return home to England by bicycle. 'But, Robert,' he had reasoned with me, 'there is no road from Magadan; you cannot ride a bicycle.' I explained that I had reason to believe that there was a road, though not many people used it these days.\n\n" +
        "'Alone?' he asked, pointing at me. 'No, I will be riding with a friend called Al.' 'Just one friend?' 'Yes just one,' I nodded. Sergei still looked unconvinced and with just one word 'Holodna' (cold) he pointed outside. (line 27) I tried to bolster my case by explaining to Sergei with hand gestures that I had a lot of warm clothes, though I left out the fact that, because my trip was self-funded I was on a tight budget. Most of my clothes and equipment had been bought at slashed prices. In reality, I was not at all sure they would be up to the job. This was especially true of my enormous postman's over-trousers which I had bought for £10.\n\n" +
        "My life of travel had all started in a lecture hall in Scotland several years ago. The hall that morning was full of students slumped in their seats. Some were taking notes, without energy. The lecturer droned on. I was thinking hard about a particular dilemma. Should I ask him or not? 'Well, why not?' I tore a fresh sheet from my pad and wrote, 'Hi Al, Do you want to cycle across the Karakoram Highway between Pakistan and China this summer? Rob.' In the row in front of me slouched Al, my old school friend. I tapped him on the shoulder and passed the note. He tried to decipher my scrawl, scratched his head, wrote something and passed it back. I unfolded it and held my breath while I read. 'OK,' it said.\n\n" +
        "Six years later I was going to join Al in Siberia. I had been working as a geography teacher and although I was still far from having full control of my classes, the job did tick many important boxes for me. It was frequently challenging, rarely boring, often fulfilling and of course there were great long holidays in which to chase adventures. Twice since I had started teaching I had used these holidays to go to meet Al. He had caught the adventuring-bug in a big way after our bike ride through Pakistan and so had decided to do something far more relaxing than teaching: to cycle around the world. I was now joining him for the Siberian part of his trip.\n\n" +
        "Ever since that first ride we had taken together, Al had been setting himself greater and greater challenges. This round-the-world-by-bike trip was certainly his greatest so far. At times he thought that the ride, or the road, would break him. Although it sounded tough, I envied him in many ways. He was having an extraordinary adventure, finding that he could deal with each new challenge even if it seemed impossible. He was proving wrong the sceptics who had told him he could not do it. He was doing something that scared him nearly every day and it made him feel alive.",
      items: [
        {
          q: 31,
          q_text: 'In the opening paragraph Robert reveals that he was',
          opts: [
            'grateful that the long night was over.',
            'relieved that the winter weather had not yet arrived.',
            'surprised that the area seemed uninhabited.',
            'disappointed by the colours of the earth below him.',
          ],
          answer: 1,
          explanation: '首段 although it was mid-September, it had not yet started snowing…reassured me——西伯利亚还未下雪让他安心，即庆幸寒冬未至。',
        },
        {
          q: 32,
          q_text: "Robert uses the phrase 'bolster my case' in line 27 to show that he was trying to",
          opts: [
            'change the subject.',
            'end the conversation.',
            'reassure Sergei.',
            'correct Sergei.',
          ],
          answer: 2,
          explanation: '他用手势向 Sergei 解释自己带了很多保暖衣物（I tried to bolster my case by explaining to Sergei…），意在让担心他的 Sergei 放心。',
        },
        {
          q: 33,
          q_text: 'Robert uses the example of the over-trousers to show that',
          opts: [
            'he had been successful in getting local people to help him.',
            'he had a restricted amount of money to spend on clothes.',
            'he was confident that he was well prepared for the extreme cold.',
            'he had been able to negotiate good prices for his equipment.',
          ],
          answer: 1,
          explanation: '旅行自费（self-funded）、预算紧张（on a tight budget），衣服都是打折价买的，甚至不确定能否够用——说明买衣服的钱有限。',
        },
        {
          q: 34,
          q_text: 'What do we learn about Robert in the lecture hall?',
          opts: [
            "He didn't want the lecturer to notice his lack of attention.",
            'He was puzzled by something the lecturer had said.',
            'He was unsure about what to write in the note.',
            "He was apprehensive about his friend's reaction to his suggestion.",
          ],
          answer: 3,
          explanation: '递纸条给 Al 后 "I unfolded it and held my breath while I read"——屏住呼吸等回复，说明他担心朋友的反应。',
        },
        {
          q: 35,
          q_text: "How can Robert's attitude to teaching best be summarised?",
          opts: [
            'He felt it was the right career choice for him.',
            'The holidays were the only positive aspect of the job.',
            'He felt the job was getting too stressful.',
            'He enjoyed having the respect of his students.',
          ],
          answer: 0,
          explanation: 'the job did tick many important boxes for me…frequently challenging, rarely boring, often fulfilling——他认为教书是适合自己的正确选择。',
        },
        {
          q: 36,
          q_text: "What does Robert say about Al's round-the-world trip?",
          opts: [
            'Al never doubted that he would be successful.',
            'Al tried to hide the difficulties he was facing from his friends.',
            'Al was pushing himself to the limit of his capabilities.',
            'Al was totally fearless as he enjoyed the adventure.',
          ],
          answer: 2,
          explanation: 'Al 不断给自己设置更大挑战（setting himself greater and greater challenges），有时觉得骑行会把自己压垮（would break him）——在挑战自身极限。',
        },
      ],
    },
    6: {
      title: 'Part 6 · 段落匹配',
      instruction:
        'You are going to read an article about a type of seabird, called a puffin. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use. Mark your answers on the separate answer sheet.',
      type: 'paragraph_matching',
      passage:
        'Puffins in peril\n\n' +
        'Scientist Mike Harris explains that the puffin seems about to join the list of seabirds whose numbers are declining.\n\n' +
        "It's a grey day in early April on the Isle of May off the east coast of Scotland. Far out to sea a small dot appears on the horizon. It rapidly increases in size, suddenly turning into a puffin that lands with a splash on the water. This bird probably hasn't seen land for five months, but now it's returning to its colony for the breeding season.\n\n" +
        'The first puffin is soon joined by others and together they bob on the sea. Newly returned birds are nervous but, as the days pass, they gain confidence and begin reclaiming the underground nesting burrows they made the previous year by tunnelling into the soft earth on the top of the cliffs. (37) They have to hurry because it takes three months to rear a chick and all the birds must leave by early August to spend time feeding intensively before the winter.\n\n' +
        'I visit the island every April, eager to see how many of the adult puffins we have caught and attached identification rings to have returned. (38) With a team of helpers I counted every occupied burrow on the island – something we undertake every five years.\n\n' +
        "The island's puffin population had been increasing every year for the previous 40 years, and so we anticipated at least 100,000 pairs. To our dismay we found just 42,000. (39) Experts from other research programmes have concluded it must be connected to where puffins spend the winter months.\n\n" +
        'Last spring we also caught and weighed some returning adults and found they were significantly lighter than the birds we caught 10 years ago. (40) Puffins are long-lived and can cope with a few poor productive seasons, but not with such a large loss of adults.\n\n' +
        "In early August, the puffin colonies empty rather abruptly. Virtually all puffins leave within a week, though a few adults remain to feed a late chick. (41) I have always believed, though, that few of them venture far from the North Sea. Now, however, the development of instruments known as geolocators, small enough to be fitted around a puffin's leg, is enabling us to test this idea.\n\n" +
        'We fitted these units to some puffins two years ago and caught the birds again last year to download the data. Some did remain within the North Sea, but others went much further. For someone who has spent years watching puffins for only part of their lives, this new technology is providing some fascinating information. (42) This would still leave us with the question of what they eat in winter and whether there are sufficient quantities of prey available.\n\n' +
        'The good news is that we now have an idea of the areas our puffins go to in winter, and we can check whether conditions there might have altered due to climate change or overfishing. Maybe we can then take some steps to help them. Hopefully it is just a local problem, because there are in fact still plenty of puffins to see around the Scottish coast.',
      options: [
        { label: 'A', text: "We weren't the only ones to wonder why this might be happening." },
        { label: 'B', text: 'From this moment on, we know remarkably little about where these birds end up and what could possibly be affecting them there.' },
        { label: 'C', text: 'But we should also take into account that if a young puffin survives the winter, it will come back the following July.' },
        { label: 'D', text: 'Other devices will also hopefully tell us how much time puffins spend diving for food.' },
        { label: 'E', text: 'This was further evidence that something unusual is happening at sea before they return to the colony.' },
        { label: 'F', text: 'Puffins are always among the earliest seabirds to lay eggs.' },
        { label: 'G', text: 'Last year there was an additional task.' },
      ],
      items: [
        { q: 37, answer: 'F', explanation: 'F 说"海鹦总是最早产蛋的海鸟之一"，与后句"养大一只雏鸟要三个月，必须抓紧"衔接：回来早→产蛋早→时间紧。' },
        { q: 38, answer: 'G', explanation: 'G 说"去年还有一项额外任务"，引出后句"我和助手们清点了岛上每个有海鹦居住的洞穴"。' },
        { q: 39, answer: 'A', explanation: '只数到 42,000 对而非预期的至少 10 万对，A 说"并非只有我们想知道原因"，引出其他研究项目专家的结论。' },
        { q: 40, answer: 'E', explanation: '前句说回巢海鹦比 10 年前轻了许多，E 称这是"海上发生异常情况的进一步证据"，与下文"经不起成鸟大量损失"衔接。' },
        { q: 41, answer: 'B', explanation: 'B 说"从这一刻起，我们对这些鸟最终去向何方知之甚少"，衔接下文"我一直相信它们不会远离北海……如今用 geolocators 检验这一想法"。' },
        { q: 42, answer: 'D', explanation: 'D 说"其他装置也有望告诉我们海鹦潜水觅食花了多少时间"，与下文"仍留下它们冬天吃什么、猎物是否充足的问题"相接。' },
      ],
    },
    7: {
      title: 'Part 7 · 多文本匹配',
      instruction:
        'You are going to read an article about the Italian painter Canaletto. For questions 43–52, choose from the sections (A–E). The sections may be chosen more than once. Mark your answers on the separate answer sheet.',
      type: 'multiple_matching',
      sections: [
        {
          label: 'A',
          text:
            "Canaletto's lifetime subject was the city of Venice. Apart from the works done during his decade in London, he painted virtually nothing else, and Venice has never been so minutely and extensively painted by any other artist. His response to Venice was not like the dramatic, emotional response of a visitor overpowered by the city's haunting beauty and magic, as the British painter Turner was later, for example. Canaletto's paintings, with their love of incidental detail, betray a deeper-rooted, more lasting attachment – the affection of a native Venetian.",
        },
        {
          label: 'B',
          text:
            "Canaletto depicted the city as it really was, documenting the changes in the cityscape over the years – Piazza San Marco being repaved, palaces being reconstructed, graffiti appearing and disappearing. Above all, he suffused his painting with the natural light and atmosphere of Venice which was second nature to him. When he went to London in 1746, Canaletto could not quite come to terms with painting the cooler tones and the unsympathetic climate of England, and somehow his paintings of the River Thames always ended up looking rather like the Grand Canal.",
        },
        {
          label: 'C',
          text:
            "In spite of his natural affection for Venice, Canaletto's paintings were rarely bought by his fellow Venetians. This was probably because the locals did not need reminders of their city, and also because in Venice view painting was not taken very seriously in comparison with historical and religious painting, or even landscape and figure painting. To become a 'view painter' at that time was quite a brave choice and, by the end of his career, Canaletto had done much to raise the status of the genre. However, his influence was felt more among painters in England, the home of his major patrons.",
        },
        {
          label: 'D',
          text:
            "Canaletto's extraordinarily detailed and accurate scenes were perfect for the foreign tourists in Venice, who wanted souvenirs or mementoes of their visits. The more accurate the scene the better, in fact, and Canaletto's first patron, Owen McSwiney, persuaded him to change from his earlier picturesque and theatrical style to a more factual one. Instead of loose brushwork and thick paint, alongside dramatic contrasts of light and shade, Canaletto adopted more of a snapshot approach, which proved to be very commercial. His colours became brighter, the paint surface smoother, and the scenes looked more realistic. McSwiney wrote 'his excellence lies in painting things which fall immediately under his eye', as if he worked directly from nature. At a casual glance, everything in his pictures is instantly recognisable and looks exactly as it does, or did, in reality. In fact, Canaletto never painted from nature – his pictures were created in the studio.",
        },
        {
          label: 'E',
          text:
            "In working out the compositions, he used his imagination and a certain artistic licence. Although he paid the minutest attention to the detail of a decorative carving, a ship's sails or washing hanging out, Canaletto felt at liberty to distort and reorganise the main objects in his paintings in the interest of dramatic effect. He would alter the sweeping curve of the Grand Canal, for example, or include more in a composition than could be seen from any single viewpoint. The clutter of traffic on the waterways looks random and natural, but the position of each boat was carefully worked out to achieve the best effect. In this way, he conveyed the essence of Venice even if he deceived the eye. The drawings which formed the basis of his compositions range from rapid sketches of ideas for painting, done on the spot, to large-scale fully detailed preliminary drawings. Sometimes, he made precise drawings for engravers to copy, and occasionally he produced them as works of art in their own right, in which case they were finished in the studio.",
        },
      ],
      items: [
        { q: 43, q_text: "suggest why Canaletto's work was less appreciated in his home city than elsewhere?", answer: 'C', explanation: 'C 段：同乡威尼斯人很少买他的画——本地人不需要纪念品、view painting 在威尼斯不受重视，解释了其作品在家乡不受推崇的原因。' },
        { q: 44, q_text: 'give examples of how Canaletto tricks the viewer in his pictures?', answer: 'E', explanation: 'E 段举例：改变大运河的曲线、纳入单一视点看不到的内容、精心安排每艘船的位置——"即使骗过了眼睛也传达了威尼斯的精髓"。' },
        { q: 45, q_text: "claim that Canaletto's paintings contain a kind of historical record of Venice?", answer: 'B', explanation: 'B 段：documenting the changes in the cityscape over the years（广场重铺、宫殿重建、涂鸦出现与消失），即画中含历史记录。' },
        { q: 46, q_text: 'tell us where Canaletto worked on the composition of his pictures?', answer: 'D', explanation: 'D 段末：Canaletto never painted from nature – his pictures were created in the studio，即构图是在画室里完成的。' },
        { q: 47, q_text: "mention the reason why Canaletto didn't paint exactly what he had seen?", answer: 'E', explanation: 'E 段：他运用想象力与 artistic licence，为戏剧性效果（in the interest of dramatic effect）扭曲重组主要对象，故不照实描画。' },
        { q: 48, q_text: 'suggest a weakness in the work Canaletto painted away from Venice?', answer: 'B', explanation: 'B 段：1746 年到伦敦后无法适应英国较冷的色调与气候，泰晤士河画作"最后看起来总有点像大运河"，是客居作品的美中不足。' },
        { q: 49, q_text: "give some details of Canaletto's initial painting technique?", answer: 'D', explanation: 'D 段：最早的赞助人 McSwiney 劝他放弃早期 picturesque and theatrical style（loose brushwork、thick paint、明暗强烈对比），即最初的绘画技法。' },
        { q: 50, q_text: 'say that Canaletto took a risk by specialising in a particular kind of art?', answer: 'C', explanation: 'C 段：To become a "view painter" at that time was quite a brave choice——专攻 view painting 在当时是冒险（勇敢）的选择。' },
        { q: 51, q_text: 'describe different artistic reactions to Venice?', answer: 'A', explanation: 'A 段：把卡纳莱托本人（本土人深层持久的爱）与 Turner（游客被城市之美震慑的戏剧性、情感化反应）对威尼斯的不同艺术反应作对比。' },
        { q: 52, q_text: "refer to the effect Canaletto's paintings had on artists in another country?", answer: 'C', explanation: 'C 段末：his influence was felt more among painters in England——对英国（其大赞助人所在国）画家的影响。' },
      ],
    },
  },
}
