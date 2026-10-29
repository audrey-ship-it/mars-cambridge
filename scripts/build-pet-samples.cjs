// 生成 petListeningSamples.js：解析 3 份官方 Tape Script → transcript，合并人工核对的数据与引句
// 断言：每条解析中的 "..." 英文引句必须能在对应 transcript 中定位
const fs = require('fs')

const DIR = 'd:/workspace_sunny/mars-cambridge/temp-pet-transcripts'
const OUT = 'd:/workspace_sunny/mars-cambridge/src/data/petListeningSamples.js'

// ========== 解析脚本 ==========
function parseScript(file) {
  const text = fs.readFileSync(`${DIR}/${file}`, 'utf8')
  const lines = text.split('\n')
  const isSpeaker = (l) => /^(M|F):\s*\t?/.test(l) || /^(M|F):\s/.test(l)
  const stripSp = (l) => l.replace(/^(M|F):\s*\t?/, '$1: ')
  const skip = (l) =>
    /^PAUSE/.test(l) || /^REPEAT/.test(l) || /^\[/.test(l) ||
    /^Rubric:/.test(l) || /^--\s*\d/.test(l) || /^\s*\d+\s*$/.test(l) || l.trim() === ''

  const items = {}
  // Phase A: items 1-13
  let curItem = null, turns = [], curTurn = null
  const flushTurn = () => { if (curTurn != null) { turns.push(curTurn); curTurn = null } }
  const flushItem = () => {
    if (curItem) { flushTurn(); items[curItem] = turns.join('\n') }
    turns = []; curTurn = null
  }
  for (const l of lines) {
    const m = l.match(/^Rubric:\s*\t?(\d+)\s*[–-]\s*/)
    if (m) { flushItem(); curItem = +m[1]; continue }
    if (l.includes('That is the end of part 1') || l.includes('That is the end of part 2')) { flushItem(); curItem = null; continue }
    if (curItem == null) continue
    if (isSpeaker(l)) { flushTurn(); curTurn = stripSp(l); continue }
    if (curTurn != null && !skip(l)) {
      const t = l.trim()
      if (curTurn.endsWith('-')) curTurn += t
      else curTurn += ' ' + t
      continue
    }
  }
  flushItem()

  // Phase B: part-level regions
  function region(startTok, endTok) {
    const si = lines.findIndex((l) => l.includes(startTok))
    if (si < 0) return ''
    const ei = lines.findIndex((l, i) => i > si && l.includes(endTok))
    const seg = lines.slice(si + 1, ei < 0 ? lines.length : ei)
    // 收集说话人段落（空行/页码标记一律跳过，不切断跨页的说话段）
    const paras = []
    let cur = null
    for (const l of seg) {
      if (skip(l)) continue
      if (isSpeaker(l)) { if (cur != null) paras.push(cur); cur = stripSp(l); continue }
      if (cur != null) {
        const t = l.trim()
        if (cur.endsWith('-')) cur += t; else cur += ' ' + t
      }
    }
    if (cur != null) paras.push(cur)
    return paras.join('\n')
  }
  const p3 = region('Now look at part 3', 'That is the end of part 3')
  const p4 = region('Now look at part 4', 'That is the end of part 4')
  return { items, p3, p4 }
}

const S1 = parseScript('sample1-script.txt')
const S2 = parseScript('sample2-script.txt')
const S3 = parseScript('sample3-script.txt')

// ========== 数据 SPEC ==========
const J = (s) => JSON.stringify(s)
// 归一化：曲引号→直引号、破折号→连字符，保证 transcript 与解析引句运行时 indexOf 命中
const norm = (s) => s ? s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, '-') : s
const Jn = (s) => J(norm(s))

function itemMCQ(o) {
  const parts = [`          { q: ${J(o.q)}`]
  if (o.image) parts.push(`image: ${J(o.image)}`)
  if (o.opts) parts.push(`opts: [${o.opts.map(J).join(', ')}]`)
  parts.push(`answer: ${o.answer}`, `explanation: ${Jn(o.exp)}`)
  if (o.tr) parts.push(`transcript: ${Jn(o.tr)}`)
  return parts.join(', ') + ' },'
}
function itemBlank(o) {
  const parts = [`          { q: ${J(o.q)}`, `answer: [${o.ans.map(J).join(', ')}]`, `show: ${J(o.show)}`, `explanation: ${Jn(o.exp)}`]
  return parts.join(', ') + ' },'
}

const T = { 1: S1, 2: S2, 3: S3 }

const SAMPLES = [
  {
    meta: { id: 'pet-sample-1-listening', title: 'PET 官方样题 1 · Listening', level: 'PET', collection: 'PET 官方样题 2020', book: 'B1 Preliminary Sample Paper', paper: 'Listening', pages: '1–8', source: 'PET样题2020【新版】/2020PET_Sample Test 1', answerSource: '官方 Mark Scheme + Tape Script 核对', verified: true },
    audio: '/audio/pet-sample/test-1/full.mp3',
    p1: [
      { q: 'What did the girl buy on her shopping trip?', image: '/images/pet/listening/sample1/st1-q1.png', answer: 1, exp: '她房间天花板只有一盏大灯，她想要书桌台灯，今天就买了（"I’d prefer to have a lamp on my desk, so that’s what I got today."），选 B。' },
      { q: 'Why did the plane leave late?', image: '/images/pet/listening/sample1/st1-q2.png', answer: 1, exp: '机长道歉说延误是因为跑道积雪需清理后才能起飞（"we had to wait for the runway to be cleared of snow before we could take off"），选 B。' },
      { q: 'What activity does the woman want to book for the weekend?', image: '/images/pet/listening/sample1/st1-q3.png', answer: 0, exp: '她本想订帆船课但已满，想改租自行车并参加森林团队骑行（"I’d really like to join one of the group rides through the forest"），选 A。' },
      { q: 'Which cake will the girl order?', image: '/images/pet/listening/sample1/st1-q4.png', answer: 2, exp: '男孩吃柠檬蛋糕，女孩最后说"我要和你一样"（"Oh, I think I’ll have the same as you."），所以她也订柠檬蛋糕，选 C。' },
      { q: 'How much must customers spend to get a free gift?', image: '/images/pet/listening/sample1/st1-q5.png', answer: 1, exp: '消费满 19.99 英镑即可获赠神秘礼物（"buy goods today with a total of at least £19.99 and we will reward you"），选 B。' },
      { q: 'What did the family do on Sunday?', image: '/images/pet/listening/sample1/st1-q6.png', answer: 1, exp: '全家周日去了海洋馆，人多等了一小时但很值得（"We got to the Sea-Life centre, and it was so full, we were told to come back an hour later. We did, and it was worth the wait."），选 B。电影最后没去成。' },
      { q: 'Which programme is on first?', image: '/images/pet/listening/sample1/st1-q7.png', answer: 2, exp: '播音员说"现在是八点，到了今晚新闻时间"（"It’s eight o’clock and time for tonight’s news."），所以最先播出的是新闻，选 C。' },
    ],
    p2: [
      { q: 'You will hear two friends talking about a new clothes shop. What does the girl say about it?', opts: ['The staff are helpful.', 'It only has the latest fashions.', 'Prices are reduced at the moment.'], answer: 0, exp: '她夸店员很好，会帮她看是否合身、试不同尺码（"the assistants were nice – telling me whether things suited me or not, and getting me to try different sizes"），选 A。最潮款已被买走，价格没打折。' },
      { q: 'You will hear two friends talking about a pop band’s website. They think the site would be better if', opts: ['its information was up to date.', 'it was easier to buy concert tickets.', 'the band members answered messages.'], answer: 1, exp: '女孩曾想在网上买票但付款失败只好放弃，男孩也打电话才买成，所以他们认为网站应该更简单（"It wouldn’t let me pay for some reason."），选 B。' },
      { q: 'You will hear a woman telling a friend about an art competition she’s won. How does she feel about it?', opts: ['upset that the prize isn’t valuable', 'excited that the judges liked her picture', 'disappointed that she can’t use the prize'], answer: 2, exp: '她得了头奖——纽约周末游，但月底前必须去又请不到假，只好错过，很失望（"I can’t believe I have to miss such a great chance."），选 C。' },
      { q: 'You will hear two friends talking about the girl’s flatmate. The girl thinks that her flatmate', opts: ['is too untidy.', 'talks too much.', 'plays music too loud.'], answer: 0, exp: '真正让她烦的是室友从不收拾东西，客厅浴室到处都是她的东西（"it’s the way she never picks anything up that bothers me."），选 A。音乐声大反而帮她专心。' },
      { q: 'You will hear two friends talking about a football match. They agree that their team lost because', opts: ['the players weren’t confident enough.', 'they were missing some key players.', 'the players didn’t do the right training.'], answer: 0, exp: '他们认为今晚输球的主要原因是球员不够自信（"they just don’t believe enough in their own ability"），选 A。' },
      { q: 'You will hear two friends talking about a tennis match they played. The boy wants the girl to', opts: ['help him to get fitter.', 'practise with him more often.', 'enter more competitions with him.'], answer: 0, exp: '男孩想跟她去健身房锻炼，希望下次比赛时有好体能（"I want to be in really good shape for our next competition."），选 A。' },
    ],
    p3: {
      instr: '听电台主持人 Anita 介绍她在古巴的假期，在笔记空格中填入 1–2 个词、数字或时间。',
      items: [
        { q: 'In the National Gardens, the ___ was the thing that attracted most people.', ans: ['waterfall', 'the waterfall', 'a waterfall', 'waterfalls'], show: 'waterfall', exp: '国家花园里有一道壮观的瀑布，人人都停下来欣赏（"there was a fantastic waterfall that everyone stopped to admire"）。' },
        { q: 'On the swimming trip, electronic armbands kept the ___ away.', ans: ['sharks', 'shark'], show: 'sharks', exp: '与海豚同游时要戴电子臂环来防鲨鱼（"we had to wear special electronic arm-bands to keep off any sharks"）。' },
        { q: 'On the day in the countryside, Anita almost fell off a ___.', ans: ['horse', 'a horse'], show: 'horse', exp: '那天行程包括骑马穿越山丘，她不太会骑差点摔下来（"the programme included crossing a range of hills by horse and I haven’t ridden much"）。' },
        { q: 'In the capital city, Anita saw a ___ in a theatre.', ans: ['musical', 'a musical', 'musical show', 'musical play'], show: 'musical', exp: '在首都她下午去剧院看了一场音乐剧（"We went to a theatre to see a musical in the afternoon"）。' },
        { q: 'Anita enjoyed visiting a farm where ___ is produced.', ans: ['sugar'], show: 'sugar', exp: '她原以为会看到咖啡种植，结果去了一个产糖的农场（"in the end we went to a farm that produces sugar"）。' },
        { q: 'Anita bought some ___ as gifts.', ans: ['rings', 'ring', 'some rings'], show: 'rings', exp: '周六自由活动时她在满是珠宝作坊的街上买了几枚戒指作礼物（"bought a few rings to take back as presents"）。' },
      ],
    },
    p4: {
      instr: '听一段对游泳冠军、现教练 Vicky Prince 的采访，每题从 A/B/C 中选出最佳答案。',
      items: [
        { q: 'Vicky first went in for competitions because', opts: ['she had joined a swimming club.', 'her parents were keen on swimming.', 'her swimming teacher encouraged her.'], answer: 2, exp: '她在学校学的游泳，看起来挺有天赋，是老师劝她去参加比赛的（"so my teacher persuaded me to go in for competitions"），选 C。俱乐部是后来才加入的。' },
        { q: 'As a teenager, Vicky’s training involved', opts: ['exercising on land as well as in the water.', 'going without meals during the day.', 'travelling to a pool once a day.'], answer: 0, exp: '她每天清早去泳池游到八点，放学后还在学校健身房练力量（"After classes, I did exercises in the school gym to build my strength"），所以是水上陆上都练，选 A。' },
        { q: 'What did Vicky find hard about her training programme?', opts: ['She couldn’t go on school trips.', 'She lost some of her friends.', 'She missed lots of parties.'], answer: 1, exp: '她说最难的是失去了两个从小认识的朋友，因为不能常出门（"Much harder was losing two of the friends I’d known since I was very young"），选 B。法国游学后来补上了。' },
        { q: 'What helped Vicky to do well in the national finals?', opts: ['She was not expected to win.', 'She trained harder than usual.', 'She wanted to take a cup home.'], answer: 0, exp: '她半决赛表现一般，观众更关注其他选手，没有压力反而游得好（"I hadn’t swum that well in the semi-finals, so I guess the crowd were more interested in the other swimmers in my race. So that made it easier to do well."），选 A。' },
        { q: 'As a swimming coach, Vicky thinks she’s best at teaching people', opts: ['to deal with failure.', 'to improve their technique.', 'to get swimming qualifications.'], answer: 0, exp: '她输过也赢过并从中恢复过来，这些经验可以分享给学员——教人面对失败（"because I’ve both won and lost in competitions, and recovered from that, it’s something I can share with people."），选 A。' },
        { q: 'Why has Vicky started doing long-distance swimming?', opts: ['She needed to get fit again.', 'She thought it would be fun.', 'She wanted to do some travelling.'], answer: 2, exp: '长距离游泳虽辛苦，但能看到许多美妙的地方，这正是吸引她的原因（"you do get to see some wonderful places, and that’s what attracted me to it."），选 C。保持体能只是附带。' },
      ],
    },
  },
  {
    meta: { id: 'pet-sample-2-listening', title: 'PET 官方样题 2（校园版）· Listening', level: 'PET', collection: 'PET 官方样题 2020', book: 'B1 Preliminary for Schools Sample Test 2', paper: 'Listening', pages: '1–8', source: 'PET样题2020【新版】/PET校园版官方第二套样题', answerSource: '官方 Mark Scheme + Tape Script 核对', verified: true },
    audio: '/audio/pet-sample/test-2/full.mp3',
    p1: [
      { q: 'Which coin does the boy hope to add to his collection?', image: '/images/pet/listening/sample2/st2-q1.png', answer: 2, exp: '他专门收集外国硬币，一直想找一枚带老虎的印度硬币但还没找到（"I’m looking out for an Indian one with a tiger on – no luck so far!"），选 C。澳洲袋鼠币已经买到了。' },
      { q: 'Where did the boy find his tennis racket?', image: '/images/pet/listening/sample2/st2-q2.png', answer: 1, exp: '他到处找，最后在一堆衣服下面找到了球拍（"I was looking everywhere till I saw it there underneath a pile of clothes."），选 B。' },
      { q: 'Which is the girl’s uncle?', image: '/images/pet/listening/sample2/st2-q3.png', answer: 0, exp: '海报上乐队成员都留胡子，她叔叔是唯一留长发的那个（"he’s the only one with long hair"），选 A。' },
      { q: 'What was the weather like on the day of the girl’s party?', image: '/images/pet/listening/sample2/st2-q4.png', answer: 2, exp: '派对在户外举行，没下雨但可惜是阴天，不过挺暖和（"Shame it was cloudy though."），选 C。' },
      { q: 'Where did the girl eat her lunch?', image: '/images/pet/listening/sample2/st2-q5.png', answer: 1, exp: '她原想坐在博物馆后面的花园吃三明治，但下大雨只好在回家巴士上吃（"it was actually pouring with rain so I ate them on the bus coming home"），选 B。' },
      { q: 'Which is the girl’s suitcase?', image: '/images/pet/listening/sample2/st2-q6.png', answer: 1, exp: '她的行李箱是黑底窄白条纹的（"Look there it is, with narrow white stripes."），选 B。' },
      { q: 'What date will the boy go away on holiday?', image: '/images/pet/listening/sample2/st2-q7.png', answer: 2, exp: '他原以为 16 号出发，查了日历确认朋友说得对，是 17 号（"Ah yes, you’re right about the date."），选 C。' },
    ],
    p2: [
      { q: 'You will hear a girl telling a friend about her hockey training. What does she find difficult to deal with?', opts: ['The activities she has to do.', 'The people she has to train with.', 'The attitude of the instructor.'], answer: 0, exp: '教练标准高、体能训练很辛苦，她觉得最难的是要做的训练活动（"He has high standards and all the physical exercises are very hard."），选 A。队友会帮她。' },
      { q: 'You will hear two friends talking about some maths homework. Why does the boy feel pleased?', opts: ['He got all the answers right.', 'He helped someone to do it.', 'He learned something useful from it.'], answer: 2, exp: '他表哥给了些提示，他现在弄懂了这类题的思路，下次能做得更好（"now I’ve understood what’s involved and how to think about that kind of problem, I hope I’ll be able to deal with exercises like that much better next time!"），选 C。' },
      { q: 'You will hear two friends talking about health and fitness. They both think that it’s important to', opts: ['improve their eating habits.', 'take some regular exercise.', 'spend more of their time outdoors.'], answer: 1, exp: '男孩趁好天气出去骑车，女孩每天早晨慢跑，他们都认为坚持运动最重要（"As long as I keep doing something, that’s what matters"），选 B。' },
      { q: 'You will hear two friends talking about a school show. What does the girl say about it?', opts: ['She isn’t keen on performing.', 'She won’t be available to take part.', 'She doesn’t have any suitable skills.'], answer: 0, exp: '她说自己不太喜欢表演，更愿意当观众（"I’m not really into acting. I’m happier in the audience."），选 A。' },
      { q: 'You will hear a brother and sister talking about a campsite their family stayed in. What do they agree about it?', opts: ['Good activities were organised.', 'There was a lively atmosphere.', 'The location was convenient.'], answer: 1, exp: '虽然离海滩和商店远，但晚上气氛活跃从不无聊（"it was certainly never boring"），选 B。' },
      { q: 'You will hear a girl talking to her friend about learning to play the guitar. What do they agree is best about it?', opts: ['It helps them feel more relaxed.', 'It makes them more confident.', 'It is more fun than they expected.'], answer: 1, exp: '吉他课让她对事情更积极、更自信（"they make me feel more positive about stuff"），选 B。' },
    ],
    p3: {
      instr: '听一位美术老师向全班介绍参观画展的安排，在笔记空格中填入 1–2 个词、数字或时间。',
      items: [
        { q: 'The visit is especially useful for students interested in', ans: ['drawing'], show: 'drawing', exp: '画展特别关注绘画，对绘画感兴趣的学生尤其有用（"the special exhibition is about drawing"）。' },
        { q: 'Students should arrive at the bus station at', ans: ['8.20', '8:20', 'twenty past eight'], show: '8.20', exp: '需在 8:20 到达汽车站（"you need to be at the bus station by 8.20"）。' },
        { q: 'It’s not permitted to take ___ into the art gallery.', ans: ['backpacks', 'a backpack', 'backpack'], show: 'backpacks', exp: '美术馆内不允许带背包（"you’re not allowed to carry backpacks inside the gallery"）。' },
        { q: 'The teacher recommends buying ___ in the gallery shop.', ans: ['postcards', 'a postcard', 'postcard'], show: 'postcards', exp: '海报太贵，老师推荐买明信片（"the postcards are a much better option"）。' },
        { q: 'Students should bring a ___ for the journey home.', ans: ['warm coat', 'coat'], show: 'warm coat', exp: '出来时会冷，带件暖和外套（"A warm coat would be a good idea because it’s going to be cold when we come out afterwards"）。' },
        { q: 'Students can find out more on www.___.com.', ans: ['Spirofax'], show: 'Spirofax', exp: '更多信息见 www.spirofax.com（"have a look at www.spirofax.com"）。' },
      ],
    },
    p4: {
      instr: '听一段对野生动物摄影师 Martin Brown 的采访，每题从 A/B/C 中选出最佳答案。',
      items: [
        { q: 'Martin likes to take his photos from a tree because', opts: ['it keeps him out of danger.', 'it gives him the best possible view.', 'it helps protect him from the weather.'], answer: 1, exp: '他第一次爬树是小时候躲雨看野马，发现树上能近距离不被发现地拍到动物（"It was the perfect place to get close to them without them seeing me"），选 B。' },
        { q: 'Martin tells the story of one scary experience with a bird which', opts: ['made him have an accident.', 'thought he was stealing its food.', 'damaged an expensive piece of equipment.'], answer: 0, exp: '一只老鹰反复扑向他，他抓不住树掉到地上摔伤了手指（"I couldn’t hold onto the tree any longer and dropped to the ground"），选 A。' },
        { q: 'How did Martin feel when photographing a female monkey?', opts: ['confident he could get closer to its baby', 'worried it would leave its baby behind', 'pleased it trusted him near its baby'], answer: 2, exp: '母猴没见过人，对人和幼崽毫无戒心，他很高兴得到信任（"I don’t think the mother had seen a human before and was too curious to have any fear for itself or its baby"），选 C。' },
        { q: 'In Uganda, Martin was surprised when he saw an animal', opts: ['climbing a tree it was too heavy for.', 'hunting in an unusual tree.', 'pulling up a young tree.'], answer: 0, exp: '在乌干达他看到一只两百多公斤的大猩猩在太重的小树上摇晃（"crashing around high up in a young tree that was shaking under its weight"），选 A。' },
        { q: 'When Martin took part in a tree-house project, he found it challenging because', opts: ['he was badly bitten by insects.', 'he didn’t have long to complete it.', 'he wasn’t given anyone to help him.'], answer: 1, exp: '树屋项目工期不现实，他几乎不停干了一个月（"The finishing date for the project wasn’t realistic, so I had to work almost non-stop for a month"），选 B。' },
        { q: 'What advice does Martin have for anyone wanting to become a photographer like him?', opts: ['You should make sure you get a regular salary.', 'You need to develop some advanced skills.', 'You have to enjoy being by yourself.'], answer: 2, exp: '这份工作常只有你一个人，介意独处的人做不来（"It’s no good if you mind being alone – often there’s just you and the wildlife"），选 C。' },
      ],
    },
  },
  {
    meta: { id: 'pet-sample-3-listening', title: 'PET 官方样题 3（校园版）· Listening', level: 'PET', collection: 'PET 官方样题 2020', book: 'B1 Preliminary for Schools Sample Test 3', paper: 'Listening', pages: '1–8', source: 'PET样题2020【新版】/PET校园版官方第三套样题', answerSource: '官方 Mark Scheme + Tape Script 核对', verified: true },
    audio: '/audio/pet-sample/test-3/full.mp3',
    p1: [
      { q: 'What has the boy just bought?', image: '/images/pet/listening/sample3/st3-q1.png', answer: 1, exp: '他原想买篮球用品，结果找到了上周看中的那块板（"then I found a board just like the one we saw in that place last week"），选 B。' },
      { q: 'Which band does the girl want to see?', image: '/images/pet/listening/sample3/st3-q2.png', answer: 2, exp: '她已对 Cat Girls 厌倦，三个女孩都弹吉他的 Ringlets 更吸引她（"Oh, I’d rather go to the Ringlets concert"），选 C。' },
      { q: 'Which friend was the girl surprised to see at the party?', image: '/images/pet/listening/sample3/st3-q3.png', answer: 0, exp: '她没想到会在派对上遇到 Jessica，因为她从没在派对上见过她（"I couldn’t believe Jessica was there – I’ve never seen her at a party before"），选 A。' },
      { q: 'What must the boy do to improve his fitness?', image: '/images/pet/listening/sample3/st3-q4.png', answer: 1, exp: '教练说要改善饮食才体能更好，他必须戒掉含糖饮料只喝白水（"the coach says I’ve got to improve my diet to make me fitter"），选 B。' },
      { q: 'Where will the boy meet his friend?', image: '/images/pet/listening/sample3/st3-q5.png', answer: 0, exp: '他先到泳池但朋友还在图书馆，让他去常去的咖啡馆等（"I’m going to walk down to the café that we always go to"），选 A。' },
      { q: 'Which prize did the girl win?', image: '/images/pet/listening/sample3/st3-q6.png', answer: 2, exp: '她摄影比赛得第三名，奖品是一本讲电影摄影技术的书（"What I won was a book about movie photography, the techniques of filming"），选 C。' },
      { q: 'What form of transport will the group take first?', image: '/images/pet/listening/sample3/st3-q7.png', answer: 1, exp: '航班取消，先乘巴士去港口（"a bus will take us to the harbour"），选 B。' },
    ],
    p2: [
      { q: 'You will hear two friends talking about a new sports centre in their town. What impressed them most about it?', opts: ['the changing rooms', 'the activities available', 'the attitude of the staff'], answer: 1, exp: '新运动中心有羽毛球、篮球和室内滑板（"there’s badminton courts, and basketball, and the indoor skateboarding looks brilliant"），活动丰富最让他们印象深刻，选 B。' },
      { q: 'You will hear two friends talking about the weekend. How does the girl feel about her plans?', opts: ['disappointed to miss a party', 'excited about seeing her relations', 'surprised her mother has organised an event'], answer: 0, exp: '妈妈刚告诉她周六舅舅一家要来吃午饭，她为错过烧烤派对失望（"But Mum’s just told me that my uncle, aunt and cousins are coming to lunch with us on Saturday"），选 A。' },
      { q: 'You will hear a girl talking to her friend about an arrangement. Why wasn’t she able to go?', opts: ['The weather caused a delay.', 'There was trouble with transport.', 'A family member had a problem.'], answer: 2, exp: '她等弟弟一起去，结果弟弟找不到钱包，整晚都在找（"But then he couldn’t find his wallet and we spent the evening trying to find it"），选 C。' },
      { q: 'You will hear two friends talking about a television quiz show. What do they both think has changed about it?', opts: ['The audience is noisier.', 'The presenter is funnier.', 'The questions are harder.'], answer: 0, exp: '现在观众一直大声喊叫欢呼（"you hear the audience shouting and cheering really loudly all the time now"），选 A。' },
      { q: 'You will hear a boy telling his friend about a hockey match. What happened?', opts: ['The start was delayed.', 'Someone got hurt.', 'The boy’s team won.'], answer: 0, exp: '天气太差比赛推迟开始（"the weather was so bad we had to begin late"），选 A。' },
      { q: 'You will hear two friends talking about acting in a play. They agree that', opts: ['the story is very interesting.', 'the costumes are comfortable.', 'their words are easy to remember.'], answer: 1, exp: '他们说能自己选衣服比上次厚羊毛戏服好，更舒服（"At least we can choose our own clothes. That’s better than wearing those heavy wool costumes like we did in the last play."），选 B。' },
    ],
    p3: {
      instr: '听一段关于新电脑游戏 Wildlife Explorer 的介绍，在笔记空格中填入 1–2 个词、数字或时间。',
      items: [
        { q: 'The game is set in ___', ans: ['Africa'], show: 'Africa', exp: '游戏带玩家踏上非洲之旅（"Wildlife Explorer sends you on a journey to Africa"）。' },
        { q: 'You can explore a total of ___ places.', ans: ['8', 'eight'], show: '8', exp: '共 8 个地点可探索（"with eight locations to visit"）。' },
        { q: 'The first place is a lovely ___ which few people visit.', ans: ['valley', 'a valley', 'the valley'], show: 'valley', exp: '第一站是一个少有人去的美丽山谷（"beginning with a visit to a beautiful valley, which is far from the nearest proper road"）。' },
        { q: 'The ‘gamekeeper’ tool allows you to keep ___ of the animals.', ans: ['photographs', 'photos'], show: 'photographs', exp: '游戏管理员工具可把动物照片存进自己的文件夹（"you can store photographs of wildlife in your own folder"）。' },
        { q: 'You can travel around by plane or by ___', ans: ['truck', 'a truck'], show: 'truck', exp: '想近距离接触动物可开卡车（"To get really close to the animals, you can drive a truck"）。' },
        { q: 'You can create a wildlife ___ to share with friends.', ans: ['magazine'], show: 'magazine', exp: '最后可制作一本野生动物杂志与朋友分享（"you’ll be able to impress your friends by producing a magazine for them"）。' },
      ],
    },
    p4: {
      instr: '听一段对餐厅老板 Billy Lucas 的采访，每题从 A/B/C 中选出最佳答案。',
      items: [
        { q: 'The restaurant has become popular with teenagers because', opts: ['it has nice big tables.', 'it plays the sort of music they like.', 'they can stay there as long as they want.'], answer: 1, exp: '餐厅靠嘻哈、说唱等音乐营造酷氛围吸引青少年（"the sounds – hip-hop, rap, stuff like that"），选 B。' },
        { q: 'Billy and Jimmy decided to start their own restaurant because', opts: ['not many good jobs were available at the time.', 'other kinds of career seemed dull to them.', 'they didn’t want to work for other people.'], answer: 2, exp: '兄弟俩都不愿听人指挥，必须自己当家（"we’re both terrible at being told what to do. We have to be in charge"），选 C。' },
        { q: 'How does Burger Days compare to other food places?', opts: ['There is a wider range of food.', 'The staff are much more efficient.', 'It makes use of fresher ingredients.'], answer: 2, exp: '所有食材由自家厨师放入，本地采购不必远运（"We buy it all locally so nothing has to travel far"），选 C。' },
        { q: 'How did Billy feel when a dancer called Olivia Kay came to Burger Days?', opts: ['surprised by how friendly she was', 'embarrassed by the behaviour of other customers', 'annoyed that he missed the opportunity to take a photo'], answer: 0, exp: '舞者 Olivia Kay 来店时他惊讶于她有多友好（"I couldn’t believe how nice she was – smiling and cheerful"），选 A。' },
        { q: 'What do Billy and Jimmy sometimes argue about?', opts: ['how long to cook the food for', 'how to make the food look good', 'what prices to charge for the food'], answer: 1, exp: '兄弟俩常为食物外观争执（"we do disagree about the appearance of things from time to time"），选 B。' },
        { q: 'When part of a movie was filmed at Burger Days, Billy', opts: ['wanted to be in the scene.', 'was impressed by the actors.', 'thought the whole thing was amusing.'], answer: 2, exp: '电影拍摄时他忍不住一直笑，觉得整件事很有趣（"whatever happened I just couldn’t stop myself laughing"），选 C。' },
      ],
    },
  },
]

// ========== 断言：每条引句须在对应 transcript 中 ==========
function quotes(s) { const out = []; const re = /"([^"]+)"/g; let m; while ((m = re.exec(s)) !== null) if (/^[A-Za-z£]/.test(m[1])) out.push(m[1]); return out }
let asserts = 0, fails = 0
function chk(ctx, tr, exp) {
  for (const q of quotes(exp)) {
    asserts++
    if (!tr || norm(tr).indexOf(norm(q)) < 0) { fails++; console.log('  ✗', ctx, '→', q) }
  }
}
SAMPLES.forEach((s, si) => {
  const P = T[si + 1]
  s.p1.forEach((it, i) => chk(`S${si + 1}P1Q${i + 1}`, P.items[i + 1], it.exp))
  s.p2.forEach((it, i) => chk(`S${si + 1}P2Q${i + 1}`, P.items[8 + i], it.exp))
  s.p3.items.forEach((it, i) => chk(`S${si + 1}P3Q${i + 1}`, P.p3, it.exp))
  s.p4.items.forEach((it, i) => chk(`S${si + 1}P4Q${i + 1}`, P.p4, it.exp))
})
console.log(`assert: ${asserts} checks, ${fails} fails`)
if (fails) { console.error('引句断言失败，已中止写入。'); process.exit(1) }

// ========== 生成文件 ==========
function metaBlock(m) {
  return `    meta: {
      id: ${J(m.id)},
      title: ${J(m.title)},
      level: ${J(m.level)},
      collection: ${J(m.collection)},
      book: ${J(m.book)},
      paper: ${J(m.paper)},
      pages: ${J(m.pages)},
      source: ${J(m.source)},
      answerSource: ${J(m.answerSource)},
      verified: ${m.verified},
    },`
}
function sampleBlock(s, si) {
  const P = T[si + 1]
  const p1 = s.p1.map((it, i) => itemMCQ({ ...it, tr: P.items[i + 1] })).join('\n')
  const p2 = s.p2.map((it, i) => itemMCQ({ ...it, tr: P.items[8 + i] })).join('\n')
  const p3 = s.p3.items.map((it) => itemBlank(it)).join('\n')
  const p4 = s.p4.items.map((it) => itemMCQ({ ...it, tr: undefined })).join('\n')
  return `  {
    ${metaBlock(s.meta)}
    parts: {
      1: {
        type: "image_mcq",
        title: "Part 1 · 图片选择题",
        instruction: ${J('听 7 段短录音，每题从 A/B/C 三幅图中选出最佳答案。')},
        audio: ${J(s.audio)},
        items: [
${p1}
        ],
      },
      2: {
        type: "mcq",
        title: "Part 2 · 单项选择题",
        instruction: ${J('听 6 段短录音，每题从 A/B/C 中选出最佳答案。')},
        audio: ${J(s.audio)},
        items: [
${p2}
        ],
      },
      3: {
        type: "blanks",
        title: "Part 3 · 信息填空题",
        instruction: ${J(s.p3.instr)},
        audio: ${J(s.audio)},
        transcript: ${Jn(P.p3)},
        items: [
${p3}
        ],
      },
      4: {
        type: "mcq",
        title: "Part 4 · 访谈理解题",
        instruction: ${J(s.p4.instr)},
        audio: ${J(s.audio)},
        transcript: ${Jn(P.p4)},
        items: [
${p4}
        ],
      },
    },
  },`
}

let out = `// PET 官方样题（2020 新版）听力数据
// 来源：Cambridge English Preliminary / Preliminary for Schools Sample Papers
// 答案与原文来源：官方 Mark Scheme + Tape Script PDF 核对

export const PET_LISTENING_SAMPLES = [
`
out += SAMPLES.map((s, si) => sampleBlock(s, si)).join('\n')
out += `\n];\n`

fs.writeFileSync(OUT, out, 'utf8')
console.log('written:', OUT, out.length, 'chars')
console.log('transcript lens:', 's1', S1.p3.length, S1.p4.length, 's2', S2.p3.length, S2.p4.length, 's3', S3.p3.length, S3.p4.length)
