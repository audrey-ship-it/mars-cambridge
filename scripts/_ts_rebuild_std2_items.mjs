// 册2 P1/P2/P4 题干+选项按官方试卷页逐字重建；答案对照官方 Key 修正；解析重写
import fs from 'node:fs'
import { pathToFileURL } from 'node:url'

const dataPath = 'd:/workspace_sunny/mars-cambridge/src/data/petListeningStandard.js'
let s = fs.readFileSync(dataPath, 'utf8')

function rep1(str, from, to, tag) {
  const c = str.split(from).length - 1
  if (c !== 1) { console.log('ABORT: count=' + c + ' (' + tag + ')'); process.exit(1) }
  return str.replace(from, to)
}

const I12 = '            ' // 属性缩进
const I14 = '              '

// 每项: [tag, old块, new块]
const blocks = []

// ===== t1 P1 Q6 答案 B→A（官方 Key）=====
blocks.push(['t1P1Q6',
`${I12}answer: 1,
${I12}explanation:
${I14}"女士不喜欢科幻片，又嫌年代剧太严肃，“I think my first suggestion looks more interesting” —— 最终去看她的首选：侦探破案片，选 B。",`,
`${I12}answer: 0,
${I12}explanation:
${I14}"女士不喜欢科幻片，又嫌年代剧太严肃，“I think my first suggestion looks more interesting” —— 最终去看她的首选：侦探破案片，选 A。",`])

// ===== t1 P2 全 6 题：题干+选项按官方试卷页重建 =====
blocks.push(['t1P2Q8',
`${I12}q: "You will hear two people talking about keeping healthy. They agree that they should",
${I12}opts: ["do more exercise.", "change their eating habits.", "get more sleep."],
${I12}answer: 1,`,
`${I12}q: "You will hear a husband and wife talking about keeping fit and healthy. What do they both agree to change?",
${I12}opts: ["their sleep routines", "their eating habits", "their exercise programmes"],
${I12}answer: 1,`])

blocks.push(['t1P2Q9',
`${I12}q: "You will hear two friends talking about the woman's new job. How does she feel about it?",
${I12}opts: ["It is more difficult than she expected.", "She enjoys it more than her previous job.", "It pays less than her old job."],
${I12}answer: 2,
${I12}explanation:
${I14}"她说新工作比旧工作工资低 —— 选 C。",`,
`${I12}q: "You will hear two friends talking about the woman's work. How does the woman feel?",
${I12}opts: ["She's pleased to have a new boss.", "She's excited about some recent changes.", "She's more positive than she was before."],
${I12}answer: 2,
${I12}explanation:
${I14}"起初对新老板的调整并不乐意，“It's taken me a while to get used to the situation. But I have”，如今已适应、还想升经理，加长工时也不介意 —— 比以前更积极了，选 C。",`])

blocks.push(['t1P2Q10',
`${I12}q: "You will hear a man talking about his holiday. What impressed him most?",
${I12}opts: ["the friendly people", "the beautiful scenery", "the size of the ancient monuments"],
${I12}answer: 2,`,
`${I12}q: "You will hear a man telling a friend about his holiday. How did the man feel when he visited some ancient ruins?",
${I12}opts: ["surprised not to be able to climb them", "disappointed by their location", "impressed by their size"],
${I12}answer: 2,`])

blocks.push(['t1P2Q11',
`${I12}q: "You will hear two friends talking about a foreign language course. They agree that",
${I12}opts: ["the teacher is excellent.", "the location is convenient.", "the price is reasonable."],
${I12}answer: 0,
${I12}explanation:
${I14}"两人同意老师很棒 —— 选 A。",`,
`${I12}q: "You will hear two friends talking about doing a foreign language course. What do they agree about?",
${I12}opts: ["which level of course to take", "where to take the course", "how long the course should be"],
${I12}answer: 0,
${I12}explanation:
${I14}"他零基础、她学过但几乎全忘了，两人上不同级别的班各得其所 —— “we wouldn't be in the same class – you already speak a bit and I know nothing”，讨论的是该选什么程度的课程，选 A。",`])

blocks.push(['t1P2Q12',
`${I12}q: "You will hear two people organising a music festival. What are they both worried about?",
${I12}opts: ["the cost", "the weather", "the number of visitors"],
${I12}answer: 1,
${I12}explanation:
${I14}"女士说万事俱备，就怕下雨 —— “as long as it doesn't rain”，男士也准备好把活动挪进大厅 —— 两人都担心天气，选 B。",`,
`${I12}q: "You will hear two people talking about a music festival they're organising. They're both worried about",
${I12}opts: ["how good the music will be.", "how many people will attend.", "how suitable the weather will be."],
${I12}answer: 1,
${I12}explanation:
${I14}"票卖得不如预期，两人都担心到场人数 —— “We haven't sold as many tickets as I'd expected. We need to get a bigger crowd”，决定加强宣传，选 B。",`])

blocks.push(['t1P2Q13',
`${I12}q: "You will hear two friends talking about an article on air pollution. What does the woman say about it?",
${I12}opts: ["She found the information surprising.", "She already knew most of it.", "She disagreed with the writer's views."],
${I12}answer: 0,`,
`${I12}q: "You will hear two friends discussing an article about air pollution. The woman is",
${I12}opts: ["surprised by some new information.", "annoyed by the writer's attitude.", "confused by all the details."],
${I12}answer: 0,`])

// ===== t1 P4 全 6 题 =====
blocks.push(['t1P4Q1',
`${I12}q: "How did James first become interested in photography?",
${I12}opts: ["He watched his mother taking photos.", "He was given a camera as a present.", "He saw some wildlife photos in a magazine."],
${I12}answer: 1,
${I12}explanation:
${I14}"是叔叔送了他一台相机，“my uncle bought me a camera, and from then on I started taking pictures” —— 因收到相机作为礼物而开始摄影，选 B。",`,
`${I12}q: "What made James become interested in photography?",
${I12}opts: ["receiving a camera as a gift", "seeing his mother taking photographs", "attending a photography exhibition"],
${I12}answer: 0,
${I12}explanation:
${I14}"是叔叔送了他一台相机，“my uncle bought me a camera, and from then on I started taking pictures” —— 因收到相机作为礼物而开始摄影，选 A。",`])

blocks.push(['t1P4Q2',
`${I12}q: "Where did James take his first successful wildlife photos?",
${I12}opts: ["in a park near his home", "in a zoo", "in a forest"],
${I12}answer: 0,
${I12}explanation:
${I14}"获奖照片拍自城里他和朋友常玩的公园 —— “Actually, in a park in my city, where my friends and I used to play”，选 A。",`,
`${I12}q: "What does James say about the park where he took his prize-winning photo?",
${I12}opts: ["He had taken photos in it before.", "Someone he knew recommended it to him.", "It's always been well known for its natural beauty."],
${I12}answer: 0,
${I12}explanation:
${I14}"公园不算最美，但他多年来常在那里拍到出色的照片 —— “I've managed to get some fantastic pictures there over the years” —— 以前就在那儿拍过，选 A。",`])

blocks.push(['t1P4Q3',
`${I12}q: "Why was James surprised when he won a photography competition?",
${I12}opts: ["He had never won anything before.", "He didn't think his photo was good enough.", "He had entered the competition by mistake."],
${I12}answer: 1,
${I12}explanation:
${I14}"他惊讶因为之前从没获过奖 —— 选 B。",`,
`${I12}q: "After winning the competition, James felt",
${I12}opts: ["keen to tell his parents about his achievement.", "pleased to meet a famous photographer.", "surprised because he hadn't won in previous competitions."],
${I12}answer: 1,
${I12}explanation:
${I14}"最开心的是被介绍给为国际杂志供稿的知名摄影师并得到许多指点 —— “The best bit was being introduced to a well-known guy who takes pictures for an international magazine”，选 B。",`])

blocks.push(['t1P4Q4',
`${I12}q: "What does James say makes a good wildlife photograph?",
${I12}opts: ["It shows the animal's natural behaviour.", "It is technically perfect.", "It teaches people something new."],
${I12}answer: 2,`,
`${I12}q: "In James' opinion, what is most important for a good photograph?",
${I12}opts: ["It needs plenty of planning.", "It must be beautiful to look at.", "It teaches people something new."],
${I12}answer: 2,`])

blocks.push(['t1P4Q5',
`${I12}q: "Why does James think photography is a good hobby?",
${I12}opts: ["It is not expensive.", "It is easy to learn.", "It gets you out into interesting places."],
${I12}answer: 2,
${I12}explanation:
${I14}"摄影是好爱好因为可以去有趣的地方 —— 选 C。",`,
`${I12}q: "James thinks that photography is a good hobby because",
${I12}opts: ["it involves travelling to interesting places.", "it can become a successful career.", "it's a great social activity."],
${I12}answer: 2,
${I12}explanation:
${I14}"摄影有很多俱乐部，和人一起拍很有趣 —— “it's really fun doing it with other people” —— 是很好的社交活动，选 C。",`])

blocks.push(['t1P4Q6',
`${I12}q: "What advice does James give to beginners?",
${I12}opts: ["Spend as much time as possible taking photos.", "Buy the best camera you can afford.", "Read books about photography technique."],
${I12}answer: 0,`,
`${I12}q: "What advice does James have for other photographers?",
${I12}opts: ["Spend a lot of time taking pictures.", "Do a course to get the right skills.", "Get the best equipment possible."],
${I12}answer: 0,`])

// ===== t3 P2 Q1-Q4：题干+选项按官方试卷页重建 =====
blocks.push(['t3P2Q1',
`${I12}q: "You will hear a woman talking in a shop about a dress. Why is she returning the dress?",
${I12}opts: ["It’s the wrong colour.", "It’s damaged.", "It’s the wrong size."],
${I12}answer: 0,`,
`${I12}q: "You will hear two friends talking about the woman's dress. Why is the woman returning the dress to the shop?",
${I12}opts: ["It's the wrong colour.", "It's damaged.", "It doesn't fit."],
${I12}answer: 0,`])

blocks.push(['t3P2Q2',
`${I12}q: "You will hear two friends talking about a new sports centre. What do they agree the sports centre needs?",
${I12}opts: ["more staff", "more equipment", "more changing rooms"],
${I12}answer: 0,`,
`${I12}q: "You will hear two friends talking about a new sports centre. They agree that it needs to have",
${I12}opts: ["more staff available.", "better equipment.", "bigger changing rooms."],
${I12}answer: 0,`])

blocks.push(['t3P2Q3',
`${I12}q: "You will hear a woman talking about going to a hotel. Why is she going there?",
${I12}opts: ["to stay for the night", "to meet someone", "to have a meal"],
${I12}answer: 1,`,
`${I12}q: "You will hear a woman talking to a receptionist in a hotel. Why has the woman gone to the hotel?",
${I12}opts: ["to book a room", "to meet someone", "to make a complaint"],
${I12}answer: 1,`])

blocks.push(['t3P2Q4',
`${I12}q: "You will hear a man talking about a holiday he spent in the mountains. What did he enjoy most about the holiday?",
${I12}opts: ["doing an adventure sport", "looking at the countryside", "visiting traditional villages"],
${I12}answer: 1,`,
`${I12}q: "You will hear a man telling a friend about his holiday in the mountains. What did he enjoy most about it?",
${I12}opts: ["having skiing lessons", "seeing the countryside", "spending time with friends"],
${I12}answer: 1,`])

for (const [tag, from, to] of blocks) s = rep1(s, from, to, tag)
console.log('blocks applied:', blocks.length)

// t2 P4 双空格 typo：  Lara →  Lara（4 处 q + 1 处 instruction）
{
  const from = '  Lara'
  const c = s.split(from).length - 1
  if (c !== 5) { console.log('ABORT: Lara count=' + c); process.exit(1) }
  s = s.split(from).join(' Lara')
  console.log('Lara typo fixed: 5')
}

// 头注释更新
s = rep1(s, '  // P1/P2/P4 解析引句已对照原文修正，T1 P2 Q9/Q11 与 T1 P4 Q3/Q5 待官方试卷页复核后重建',
  '  // P1/P2/P4 题干+选项已按官方试卷页（T1 PDF 21-26 / T2 PDF 39-44 / T3 PDF 57-62 / T4 PDF 75-80）逐字重建，', 'header1')
s = rep1(s, '  // 册2（B1 Preliminary 2, 2021）：听力原文 2026-10-27 按官方 Tapescripts 逐字转录注入；',
  '  // 册2（B1 Preliminary 2, 2021）：听力原文 2026-10-27 按官方 Tapescripts 逐字转录注入；\n  // 答案已对照书内 Listening key（T1 PDF 104 / T2 PDF 125 / T3 PDF 146 / T4 PDF 169）逐题终验；', 'header2')

fs.writeFileSync(dataPath, s)
console.log('written')

const mod = await import(pathToFileURL(dataPath).href)
console.log('sets:', mod.PET_LISTENING_STANDARD.length)
