function unit(title, intro, guide, concepts, rows) {
  const items = rows.map(([sentence, sentenceZh, answer, opts, wrong, error, correct, expZh]) => ({ sentence, sentenceZh, answer, opts, wrong, error, correct, expZh }))
  return {
    title, intro, guide,
    questions: [...concepts, ...items.slice(0, 15 - concepts.length).map(x => ({ q:x.sentence, qZh:x.sentenceZh, opts:x.opts, ans:x.opts.indexOf(x.answer), expZh:x.expZh }))],
    blanks: items.map(x => ({ sentence:x.sentence, sentenceZh:x.sentenceZh, ans:[x.answer], expZh:x.expZh })),
    corrections: items.map(x => ({ sentence:x.wrong, sentenceZh:x.sentenceZh, error:x.error, correct:x.correct, expZh:x.expZh })),
  }
}

const time = [
  ['School starts ___ September.','学校九月开学。','in',['in','on','at','for'],'School starts on September.','on','in','月份前使用in。'],
  ['The lesson begins ___ nine o’clock.','课程九点开始。','at',['at','in','on','since'],'The lesson begins in nine o’clock.','in','at','具体钟点前使用at。'],
  ['We play tennis ___ Saturday.','我们星期六打网球。','on',['on','in','at','for'],'We play tennis in Saturday.','in','on','星期几前使用on。'],
  ['My birthday is ___ 12 May.','我的生日是5月12日。','on',['on','at','in','by'],'My birthday is in 12 May.','in','on','具体日期前使用on。'],
  ['It is cold ___ winter.','冬天很冷。','in',['in','on','at','from'],'It is cold on winter.','on','in','季节前使用in。'],
  ['We have lunch ___ noon.','我们中午吃午饭。','at',['at','in','on','during'],'We have lunch in noon.','in','at','noon前使用at。'],
  ['She studies ___ the evening.','她晚上学习。','in',['in','on','at','until'],'She studies at the evening.','at','in','泛指上午、下午、晚上用in the morning/afternoon/evening。'],
  ['I will finish it ___ Friday.','我会在周五前完成。','by',['by','until','since','during'],'I will finish it until Friday.','until','by','by表示不迟于某时完成；until强调持续到某时。'],
  ['We waited ___ six o’clock.','我们一直等到六点。','until',['until','by','for','since'],'We waited by six o’clock.','by','until','wait是持续动作，使用until表示一直到。'],
  ['He has lived here ___ 2020.','他从2020年起住在这里。','since',['since','for','during','at'],'He has lived here for 2020.','for','since','时间起点2020前使用since。'],
  ['They stayed ___ two weeks.','他们住了两周。','for',['for','since','at','on'],'They stayed since two weeks.','since','for','时间段前使用for；完整短语是for two weeks。'],
  ['Do not talk ___ the film.','电影播放期间不要说话。','during',['during','for','since','at'],'Do not talk for the film.','for','during','during后接事件或时期，表示“在……期间”。'],
  ['We usually travel ___ the summer holidays.','我们通常在暑假期间旅行。','during',['during','at','since','by'],'We usually travel since the summer holidays.','since','during','暑假这一时期前可使用during。'],
  ['The shop is closed ___ night.','商店夜间关门。','at',['at','in','on','from'],'The shop is closed in night.','in','at','固定表达at night。'],
  ['She arrived ___ Monday morning.','她星期一早上到达。','on',['on','in','at','for'],'She arrived in Monday morning.','in','on','带具体星期的morning前使用on。'],
]

const place = [
  ['The keys are ___ the table.','钥匙在桌子上。','on',['on','in','at','under'],'The keys are in the table.','in','on','物体在表面上使用on。'],
  ['There is milk ___ the fridge.','冰箱里有牛奶。','in',['in','on','at','over'],'There is milk on the fridge.','on','in','在封闭空间内部使用in。'],
  ['Meet me ___ the station.','在车站见我。','at',['at','in','on','into'],'Meet me on the station.','on','at','把车站看作会面地点时使用at。'],
  ['The cat is ___ the chair.','猫在椅子下面。','under',['under','above','between','into'],'The cat is above the chair.','above','under','under表示在……正下方。'],
  ['A lamp hangs ___ the table.','一盏灯悬挂在桌子上方。','above',['above','below','into','beside'],'A lamp hangs below the table.','below','above','above表示位置高于另一物体。'],
  ['The bank is ___ the post office and the café.','银行在邮局和咖啡馆之间。','between',['between','among','through','over'],'The bank is among the post office and the café.','among','between','两个明确对象之间使用between。'],
  ['Mia sat ___ her friends.','Mia坐在朋友们中间。','among',['among','between','under','onto'],'Mia sat between her friends.','between','among','三个或更多对象之中通常使用among。'],
  ['The bus stop is ___ the school.','公交站在学校对面。','opposite',['opposite','inside','through','onto'],'The bus stop is inside the school.','inside','opposite','opposite表示在……对面。'],
  ['Leo stood ___ me in the queue.','Leo排队时站在我前面。','in front of',['in front of','behind of','above of','between of'],'Leo stood front of me in the queue.','front of','in front of','固定结构in front of。'],
  ['The garden is ___ the house.','花园在房子后面。','behind',['behind','beside of','over of','between'],'The garden is behind of the house.','behind of','behind','behind直接接宾语，不加of。'],
  ['Come ___ the classroom.','进教室来。','into',['into','in','onto','across'],'Come in the classroom.','in','into','into强调从外到内的移动。'],
  ['The dog jumped ___ the sofa.','狗跳到了沙发上。','onto',['onto','on','into','along'],'The dog jumped on the sofa.','on','onto','onto强调移动到某个表面。'],
  ['We walked ___ the bridge.','我们走过了桥。','across',['across','through','between','inside'],'We walked through the bridge.','through','across','跨越平面或桥面使用across。'],
  ['The train went ___ the tunnel.','火车穿过隧道。','through',['through','across','onto','above'],'The train went across the tunnel.','across','through','穿过有内部空间的隧道使用through。'],
  ['Walk ___ this road to the park.','沿着这条路走到公园。','along',['along','among','inside','below'],'Walk among this road to the park.','among','along','沿着道路移动使用along。'],
]

const phrases = [
  ['She is good ___ maths.','她擅长数学。','at',['at','in','on','for'],'She is good in maths.','in','at','固定搭配be good at。'],
  ['Thank you ___ your help.','谢谢你的帮助。','for',['for','to','with','of'],'Thank you of your help.','of','for','固定搭配thank someone for something。'],
  ['I am interested ___ art.','我对艺术感兴趣。','in',['in','at','of','with'],'I am interested on art.','on','in','固定搭配be interested in。'],
  ['This book belongs ___ Mia.','这本书属于Mia。','to',['to','for','with','at'],'This book belongs with Mia.','with','to','固定搭配belong to。'],
  ['Please listen ___ the teacher.','请听老师讲。','to',['to','at','for','on'],'Please listen the teacher.','listen','listen to','listen后接对象时需要to。'],
  ['We are waiting ___ the bus.','我们正在等公交车。','for',['for','to','at','of'],'We are waiting the bus.','waiting','waiting for','wait后接对象时使用for。'],
  ['He is afraid ___ spiders.','他害怕蜘蛛。','of',['of','from','at','for'],'He is afraid from spiders.','from','of','固定搭配be afraid of。'],
  ['Mia is different ___ her sister.','Mia与她姐姐不同。','from',['from','of','at','to'],'Mia is different of her sister.','of','from','固定搭配be different from。'],
  ['Dad is proud ___ me.','爸爸为我感到骄傲。','of',['of','for','with','to'],'Dad is proud for me.','for','of','固定搭配be proud of。'],
  ['We arrived ___ the airport early.','我们很早到达机场。','at',['at','to','in','on'],'We arrived to the airport early.','to','at','到达较小地点通常使用arrive at。'],
  ['They arrived ___ China yesterday.','他们昨天抵达中国。','in',['in','at','to','on'],'They arrived at China yesterday.','at','in','到达国家或城市通常使用arrive in。'],
  ['Please ask the teacher ___ help.','请向老师求助。','for',['for','to','of','with'],'Please ask the teacher of help.','of','for','固定搭配ask someone for help。'],
  ['This pen is full ___ ink.','这支笔装满了墨水。','of',['of','with','from','for'],'This pen is full with ink.','with','of','固定搭配be full of。'],
  ['He apologised ___ being late.','他为迟到道歉。','for',['for','of','with','at'],'He apologised of being late.','of','for','apologise for表示为某事道歉。'],
  ['I agree ___ you.','我同意你的看法。','with',['with','to','for','of'],'I agree to you.','to','with','同意某人的意见使用agree with someone。'],
]

export const GRAMMAR_PREPOSITION_QUESTIONS = {
  16: unit('表示时间的介词','in、on、at用于不同时间范围；since、for、during、by和until表达起点、持续时间及截止时间。',{uses:['说明事情发生的时间','表达动作从何时开始或持续多久','表达截止时间与持续终点'],structures:['in + 年/月/季节','on + 星期/日期','at + 钟点/固定时刻'],signals:['since + 时间点','for + 时间段','by表示不迟于；until表示持续到'],warning:'morning通常用in，但具体到Monday morning时用on；at night是固定表达。'},[
    {q:'Which prepositions match their time expressions?',qZh:'哪些时间介词搭配正确？（多选）',opts:['in July','on Friday','at 7:30','in Monday'],ans:[0,1,2],expZh:'月份用in，星期用on，钟点用at。'},
    {q:'What follows “since”?',qZh:'since后通常接什么？',opts:['时间起点','时间段','可数名词复数','移动方向'],ans:0,expZh:'since后接动作或状态开始的时间点。'},
    {q:'What is the difference between “by” and “until”?',qZh:'by和until的主要区别是什么？',opts:['by强调截止前完成，until强调持续到某时','二者完全相同','by只表示地点','until只用于将来'],ans:0,expZh:'by是不迟于某时，until是动作持续到某时。'},
  ],time),
  17: unit('表示空间的介词','in、on、at说明位置；into、onto、across、through等说明移动方向和路径。',{uses:['说明人或物的位置','表达进入、跨越或穿过','描述物体间的位置关系'],structures:['in/on/at + 地点','between A and B','in front of / opposite'],signals:['into表示进入','onto表示移动到表面','across与through表示穿越'],warning:'in/on表示静态位置，into/onto强调移动；between常用于两个对象，among用于一群对象。'},[
    {q:'Which prepositions show movement?',qZh:'哪些介词表示移动方向？（多选）',opts:['into','onto','across','under'],ans:[0,1,2],expZh:'into、onto和across都可以表示移动；under主要表示位置。'},
    {q:'Which is used for two clear objects?',qZh:'表示两个明确对象之间通常用哪个词？',opts:['between','among','through','along'],ans:0,expZh:'between常用于两个明确的人或物之间。'},
    {q:'Which pair is correct?',qZh:'哪组路径介词与场景搭配正确？',opts:['across a bridge / through a tunnel','through a bridge / on a tunnel','among a road / into a bridge','below a tunnel / between a road'],ans:0,expZh:'桥面用across跨过，隧道内部用through穿过。'},
  ],place),
  18: unit('常用的介词短语','许多形容词、动词与固定介词搭配，需作为整体理解和记忆。',{uses:['连接动词或形容词与对象','表达原因、所属、兴趣和态度'],structures:['be + 形容词 + 介词','动词 + 介词 + 名词/代词'],signals:['good at / interested in / afraid of','listen to / wait for / belong to'],warning:'固定搭配中的介词通常不能按中文逐字翻译，应结合完整短语记忆。'},[
    {q:'Which adjective-preposition pairs are correct?',qZh:'哪些形容词与介词的搭配正确？（多选）',opts:['good at','interested in','afraid of','proud for'],ans:[0,1,2],expZh:'proud应与of搭配。'},
    {q:'Which verb-preposition pairs are correct?',qZh:'哪些动词与介词的搭配正确？（多选）',opts:['listen to','wait for','belong to','arrive to'],ans:[0,1,2],expZh:'arrive通常与at或in搭配，不与to搭配。'},
    {q:'Which phrase means “与……不同”?',qZh:'哪个短语表示“与……不同”？',opts:['different from','different of','different at','different for'],ans:0,expZh:'固定搭配是be different from。'},
  ],phrases),
}
