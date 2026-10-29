// 册2 听力解析修正：解析内容对齐官方 transcript + 补英文引句 + t1P4Q1 答案 0→1 + 注释补页码
import fs from 'node:fs'
import { pathToFileURL } from 'node:url'

const dataPath = 'd:/workspace_sunny/mars-cambridge/src/data/petListeningStandard.js'
let s = fs.readFileSync(dataPath, 'utf8')

function rep1(str, from, to, tag) {
  const c = str.split(from).length - 1
  if (c !== 1) { console.log('ABORT: count=' + c + ' (' + tag + ')'); process.exit(1) }
  return str.replace(from, to)
}

// 1) t1 P4 Q1 答案 0→1 + 解析（原答案与官方原文矛盾：叔叔送相机）
s = rep1(s, `            answer: 0,
            explanation:
              "他看母亲拍照而对摄影产生兴趣 —— 选 A。",`, `            answer: 1,
            explanation:
              "是叔叔送了他一台相机，“my uncle bought me a camera, and from then on I started taking pictures” —— 因收到相机作为礼物而开始摄影，选 B。",`, 't1P4Q1')

// 2) 解析重写（引句均逐字取自官方 transcript）
const pairs = [
  // t1 P1
  ['她说背包里有 guidebook，但忘记带的是相机 —— 相机在背包里，选 C。',
   '她把上周买的旅行指南和手机一起放进背包，结果发现根本没装 —— “I thought I\'d put it in my backpack with my phone and stuff, but I guess I didn\'t”，忘带的是旅行指南，选 C。'],
  ['他要黑白条纹、白色部分有星星的那件 —— 选 C。',
   '“The top part has black and white stripes, and there are stars on the white parts” —— 黑白条纹、白色部分带星星的那件，选 C。'],
  ['剧院外排长队，但她说 “I booked mine online” —— 网上订票，选 A。',
   '剧院外排队的人太多，她放弃排队，网站也出不了票，最后只好打电话订票 —— “I had to call the theatre as their website wasn\'t working”，选 A。'],
  ['“a tree had fallen on the line” —— 树倒在轨道上，选 B。',
   '“the strong winds we\'re experiencing at the moment mean trains are moving along the railway line at reduced speeds” —— 大风导致列车降速行驶而晚点，选 B。'],
  ['导游说老虎喜欢水，所以河边最有可能看到 —— 选 B。',
   '老虎去水边喝水的季节还没到，“our best chance is in the open spaces where they hunt” —— 开阔地带最有可能看到老虎，选 B。'],
  ['讨论后决定看科幻片 —— 选 B。',
   '女士不喜欢科幻片，又嫌年代剧太严肃，“I think my first suggestion looks more interesting” —— 最终去看她的首选：侦探破案片，选 B。'],
  ['他走路去上班，打伞因为下雨 —— 选 C。',
   '想骑车但刹车还没修，公交又不可靠，“It took me forty minutes on foot” —— 步行去上班，选 C。'],
  // t1 P2
  ['两人讨论后同意应该改变饮食习惯 —— 选 B。',
   '先生提议把正餐提前、别吃饱了睡，“maybe we should have our main meal earlier in the evening”，太太说值得一试 —— 同意改变饮食习惯，选 B。'],
  ['他对古迹的规模印象深刻 —— 选 C。',
   '他原想着能登上遗址顶部，实际不让爬，但 “The ruins look even higher in real life” —— 古迹的规模最让他震撼，选 C。'],
  ['两人都担心天气 —— 选 B。',
   '女士说万事俱备，就怕下雨 —— “as long as it doesn\'t rain”，男士也准备好把活动挪进大厅 —— 两人都担心天气，选 B。'],
  ['女士对新信息感到惊讶 —— 选 A。',
   '清洁用品竟能造成和交通相当的污染，“It\'s quite shocking. I don\'t understand why we haven\'t heard about this before” —— 女士觉得信息令人惊讶，选 A。'],
  // t1 P4（Q1 已随答案块改）
  ['他在家附近的公园拍了第一张成功的野生动物照片 —— 选 A。',
   '获奖照片拍自城里他和朋友常玩的公园 —— “Actually, in a park in my city, where my friends and I used to play”，选 A。'],
  ['好照片要教给人新东西 —— 选 C。',
   '“They should be worth looking at, and help you learn things about life” —— 好照片应让人有所学，选 C。'],
  ['他建议初学者尽可能多花时间拍照 —— 选 A。',
   '他没上过摄影课程，“nothing\'s better than getting out there and getting experience” —— 尽可能多出去拍照积累经验，选 A。'],
  // t2 P1
  ['在杂货店钱包还在，之后去了书店，脱夹克时掉出口袋 —— 在书店丢的，选 A。',
   '在杂货店时钱包还在，之后去了书店 —— “I guess it fell out of my pocket when I took my jacket off”，他认为是在书店丢的，选 A。'],
  ['最喜欢的是女警察，头发卷曲但不长 —— 对应短卷发女性，选 B。',
   '“That female police detective was my favourite”，她头发卷曲但不像另一位那么长 —— 短卷发女警，选 B。'],
  ['她把钥匙落家里了，想让父亲经过图书馆时送来 —— 送钥匙，选 C。',
   '“But I\'ve left my keys behind, so I won\'t be able to get back in”，请父亲开车经过图书馆时把钥匙带来 —— 送钥匙，选 C。'],
  // t2 P2
  ['男生发现上面有很多和课程相关的文章 —— 对学习有帮助，选 C。',
   '女生说找到的内容对论文有帮助 —— “What I have found, though, has been helpful for the essay I\'m writing”，男生也说找到大量课程相关文章 —— 两人都认为对学习有用，选 C。'],
  // t3 P1
  ['他想退夹克但排到柜台时店已关门（A 是值机柜台）；最终在书店买了一本新小说 —— 选 C。',
   '退夹克的队太长决定晚点再去，顺路去银行又已关门 —— “I did manage to stop at the bookshop and get a novel I wanted”，最终买到了想要的书，选 C。'],
  ['航班延误了很长时间，但一旦起飞飞行很快；他们没能改坐火车 —— 乘飞机回来，选 A。',
   '风暴令航班延误数小时，火车也受影响 —— “The journey went pretty quickly after we\'d taken off”，最终乘飞机回来，选 A。'],
  ['展示的是一顶带绒球的针织帽，而不是棒球帽或宽檐帽 —— 选 A。',
   '摄影师备了遮阳帽和棒球帽等，但她选了羊毛针织帽 —— “the woolly hat reminded me of the type my grandmother used to knit for me”，选 A。'],
  ['他在机场和酒店大堂都找过，最后想起忘在酒店房间里 —— 选 C。',
   '到机场值机时才发现驾照没带，想起落在酒店房间床头柜上 —— “I think I left it on the bedside table in my room”，只好返回酒店取，选 C。'],
  ['他们沿着有岩石的海岸散步，没去沙滩或林间小路 —— 选 A。',
   '集合点改到海滩附近停车场，路线也改了 —— “the walk we\'re doing is up the cliff path”，走的是悬崖小径，选 A。'],
  ['车不用清洗，油也是满的；她注意到一个轮胎有问题，打算检查/充气 —— 选 C。',
   '“there might be a problem with one of your tyres. I think it needs more air, so I\'ll stop and put some on in the way home” —— 途中给轮胎充气，选 C。'],
  ['她不想吃鱼，三明治也卖完了，于是点了配土豆的鸡肉 —— 选 B。',
   '推荐的鱼卖光了，本打算点煎蛋卷配沙拉，闻到香味后改了主意 —— “Then I smelt the chicken and decided to go for that”，吃的是烤鸡，选 B。'],
  // t3 P2
  ['裙子收到时颜色和订购的不一样 —— 颜色发错了，选 A。',
   '“In the shop, it looked blue, but it\'s actually grey, which doesn\'t match my shoes” —— 店里看着是蓝色，实际是灰色，颜色不对，选 A。'],
  ['中心很忙，员工不够，有时要等很久才有人帮忙 —— 需要更多员工，选 A。',
   '两人都遇到找不到工作人员的情况 —— “There aren\'t enough people around if you have questions”，前台也空着 —— 需要更多员工，选 A。'],
  ['她去酒店与一位来访的亲戚见面，不住宿也不吃饭 —— 去见某人，选 B。',
   '“A friend\'s staying in a room here for two days, and I\'ve come to see her” —— 来酒店见住在这里的朋友，选 B。'],
  ['最让他喜欢的是眺望四周美丽的乡村景色 —— 选 B。',
   '他大部分时间在徒步而非滑雪，“It was great to have such fantastic views of the lakes and mountains” —— 享受湖光山色，选 B。'],
  ['他打算加入学校的乐队，和别人一起练习 —— 选 A。',
   '朋友建议组个周末合奏团，“Why not set up a group who get together and play at weekends?”，他决定先试这个建议 —— 与他人一起练习，选 A。'],
  ['他觉得电影很有趣，但看了一半就知道结局会怎样 —— 结局容易猜到，选 C。',
   '“it was obvious to me what was going to happen quite early on” —— 很早就能猜到剧情走向，选 C。'],
  // t3 P3
  ['作品提交截止日期为 10 月 13 日。',
   '“Your completed song should reach us, at the latest, by the thirteenth of October” —— 截止日期为 10 月 13 日。'],
  // t3 P4
  ['学校里一位探险家的讲座改变了他的想法 —— 听讲座之后决定的，选 B。',
   '“a modern-day explorer who\'d written a really popular book about her travels came to my school and told us about the places she\'d been to. I knew then I wanted to do what she did” —— 听了探险家来校演讲后立志，选 B。'],
  ['他焦虑是因为完全不知道会遇到什么 —— 选 A。',
   '“I just couldn\'t imagine what a day in the life of an explorer would be like” —— 完全想象不出探险生活什么样，选 A。'],
  ['他拍影像记录是为了把信息提供给科学家做研究 —— 选 B。',
   '“I could easily record these rare species and show the films to science experts when I got home” —— 把珍稀物种影像提供给科学专家，选 B。'],
  ['对他来说最棒的是遇见当地人、结交新朋友 —— 选 C。',
   '“it\'d be getting to know members of the local population” —— 结识当地人最有意思，选 C。'],
  ['他最近的一次探险是驾船横渡大洋 —— 选 B。',
   '“I spent four months at sea on a tiny boat, travelling from America to Australia” —— 乘小船跨洋航行，选 B。'],
  ['他想花时间探索自己的祖国，而不是去远方 —— 选 B。',
   '“I haven\'t had time to see much of where I\'m from, so that\'s my next project” —— 接下来要好好探索自己的家乡，选 B。'],
  // t4 P1
  ['耳机和手套都在（ gloves 在抽屉里），最后说 “It\'s my glasses! I can\'t find them anywhere” —— 丢的是眼镜，选 C。',
   '工作人员猜是手套，他说这次丢的是眼镜 —— “This time, though, it\'s my glasses, I\'m afraid”，摘下眼镜用耳机时落在座位上，选 C。'],
  ['她说开车去是因为今天要搬家，但 “I might have some time on the beach tomorrow” —— 明天去海滩，选 B。',
   '她把苏格兰海岸之行提前到今晚出发 —— “I\'ll be able to have some time on the beach tomorrow, instead of wasting the first day of my holiday driving”，明天去海滩，选 B。'],
]
for (let i = 0; i < pairs.length; i += 1) s = rep1(s, pairs[i][0], pairs[i][1], 'pair#' + i)
console.log('pairs applied:', pairs.length)

// 3) 注入注释补页码（文档顺序：册1 t2×4 → t3×4 → t4×4；册2 t1×4 → t2×4 → t3×4 → t4×4）
function repSeq(str, from, toList, tag) {
  for (const to of toList) {
    const c = str.split(from).length - 1
    if (c === 0) { console.log('ABORT: seq exhausted (' + tag + ')'); process.exit(1) }
    str = str.replace(from, to)
  }
  if (str.split(from).length - 1 !== 0) { console.log('ABORT: seq leftover (' + tag + ')'); process.exit(1) }
  return str
}
const c1 = '// 听力原文来源：官方 Tapescripts（标准版1）2026-10-27 逐字转录'
s = repSeq(s, c1, [
  ...Array(4).fill('// 听力原文来源：官方 Tapescripts（标准版1 Test 2 · 书内页 127-132 = PDF 128-133）2026-10-27 逐字转录'),
  ...Array(4).fill('// 听力原文来源：官方 Tapescripts（标准版1 Test 3 · 书内页 151-156 = PDF 152-157）2026-10-27 逐字转录'),
  ...Array(4).fill('// 听力原文来源：官方 Tapescripts（标准版1 Test 4 · 书内页 174-179 = PDF 175-180）2026-10-27 逐字转录'),
], 'std1')
const c2 = '// 听力原文来源：官方 Tapescripts（标准版2）2026-10-27 逐字转录'
s = repSeq(s, c2, [
  ...Array(4).fill('// 听力原文来源：官方 Tapescripts（标准版2 Test 1 · 书内页 103-107 = PDF 104-108）2026-10-27 逐字转录'),
  ...Array(4).fill('// 听力原文来源：官方 Tapescripts（标准版2 Test 2 · 书内页 124-128 = PDF 125-129）2026-10-27 逐字转录'),
  ...Array(4).fill('// 听力原文来源：官方 Tapescripts（标准版2 Test 3 · 书内页 145-150 = PDF 146-151）2026-10-27 逐字转录'),
  ...Array(4).fill('// 听力原文来源：官方 Tapescripts（标准版2 Test 4 · 书内页 168-173 = PDF 169-174）2026-10-27 逐字转录'),
], 'std2')
console.log('comments updated')

// 4) 册2 区块头注释
s = rep1(s, `
  {
    meta: {
      id: "pet-standard-2-listening-t1",`, `
  // 册2（B1 Preliminary 2, 2021）：听力原文 2026-10-27 按官方 Tapescripts 逐字转录注入；
  // P1/P2/P4 解析引句已对照原文修正，T1 P2 Q9/Q11 与 T1 P4 Q3/Q5 待官方试卷页复核后重建
  {
    meta: {
      id: "pet-standard-2-listening-t1",`, 'std2-header')

fs.writeFileSync(dataPath, s)
console.log('written')

const mod = await import(pathToFileURL(dataPath).href)
console.log('sets:', mod.PET_LISTENING_STANDARD.length)
