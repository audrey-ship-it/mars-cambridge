const makeUnit = ({ title, intro, guide, conceptQuestions, examples, showBlankOptions = false }) => ({
  title,
  intro,
  guide,
  questions: [
    ...conceptQuestions,
    ...examples.slice(0, 15 - conceptQuestions.length).map(item => ({
      q: item.q,
      qZh: item.qZh,
      opts: item.opts,
      ans: item.opts.indexOf(item.answer),
      expZh: item.expZh,
    })),
  ],
  blanks: examples.map(item => ({
    sentence: showBlankOptions
      ? item.blank.replace(/([.?!])$/, ` (${item.opts.join(' / ')})$1`)
      : item.blank,
    sentenceZh: item.qZh,
    ans: Array.isArray(item.answer) ? item.answer : [item.answer],
    expZh: item.expZh,
  })),
  corrections: examples.map(item => ({
    sentence: item.wrong,
    sentenceZh: item.wrongZh,
    error: item.error,
    correct: item.correct,
    expZh: item.correctionZh || item.expZh,
  })),
})

const possessiveExamples = [
  ['This is ___ book.', '这是我的书。', 'my', ['my','mine','me','I'], 'This is mine book.', 'mine', 'my', '名词book前使用形容词性物主代词my。'],
  ['That blue bag is ___.', '那个蓝色的包是她的。', 'hers', ['her','hers','she','its'], 'That blue bag is her.', 'her', 'hers', '空格后没有名词，使用名词性物主代词hers。'],
  ['We love ___ school.', '我们热爱我们的学校。', 'our', ['our','ours','us','we'], 'We love ours school.', 'ours', 'our', '名词school前使用our。'],
  ['These seats are ___.', '这些座位是我们的。', 'ours', ['ours','our','we','us'], 'These seats are our.', 'our', 'ours', '空格后没有名词，使用ours。'],
  ['Leo is doing ___ homework.', 'Leo正在做他的家庭作业。', 'his', ['his','him','he','he’s'], 'Leo is doing him homework.', 'him', 'his', '名词homework前使用his。'],
  ['Is this pencil ___?', '这支铅笔是你的吗？', 'yours', ['your','yours','you','you’re'], 'Is this pencil your?', 'your', 'yours', '独立表示“你的”使用yours。'],
  ['The cat is washing ___ face.', '这只猫正在洗它的脸。', 'its', ['its','it’s','it','their'], "The cat is washing it's face.", "it's", 'its', 'its表示“它的”；it’s是it is的缩写。'],
  ['They brought ___ lunch.', '他们带来了他们的午餐。', 'their', ['their','theirs','them','they'], 'They brought theirs lunch.', 'theirs', 'their', '名词lunch前使用their。'],
  ['The red bicycles are ___.', '红色的自行车是他们的。', 'theirs', ['their','theirs','them','they'], 'The red bicycles are their.', 'their', 'theirs', '空格后无名词，使用theirs。'],
  ['Amy forgot ___ umbrella.', 'Amy忘了带她的雨伞。', 'her', ['her','hers','she','herself'], 'Amy forgot hers umbrella.', 'hers', 'her', '名词umbrella前使用her。'],
  ['I have a ticket. ___ is here.', '我有一张票。我的票在这里。', 'Mine', ['Mine','My','Me','I'], 'My is here.', 'My', 'Mine', '代替my ticket并独立作主语使用Mine。'],
  ['You can use ___ computer.', '你可以使用我们的电脑。', 'our', ['our','ours','we','us'], 'You can use ours computer.', 'ours', 'our', '名词computer前使用our。'],
  ['This room is ___, not mine.', '这个房间是他的，不是我的。', 'his', ['his','him','he','her'], 'This room is him, not mine.', 'him', 'his', 'his既可修饰名词，也可独立表示“他的”。'],
  ['The children put away ___ toys.', '孩子们收好了他们的玩具。', 'their', ['their','theirs','them','its'], 'The children put away theirs toys.', 'theirs', 'their', '名词toys前使用their。'],
  ['My answer is different from ___.', '我的答案与你的不同。', 'yours', ['your','yours','you','mine'], 'My answer is different from your.', 'your', 'yours', '介词from后独立表示“你的答案”，使用yours。'],
].map(([stem,qZh,answer,opts,wrong,error,correct,expZh]) => ({q:stem,qZh,answer,opts,blank:stem,wrong,wrongZh:qZh,error,correct,expZh}))

const possessiveCaseExamples = [
  ["This is ___ bicycle.", '这是Tom的自行车。', "Tom's", ["Tom's",'Toms',"Toms'",'Tom'], 'This is Toms bicycle.', 'Toms', "Tom's", '单数名词Tom的所有格在词尾加’s。'],
  ["The ___ room is upstairs.", '女孩们的房间在楼上。', "girls'", ["girls'","girl's",'girls','girl'], "The girl's room is upstairs.", "girl's", "girls'", '复数名词girls已以s结尾，只加撇号。'],
  ["That is ___ coat.", '那是我爸爸的外套。', "my father's", ["my father's",'my fathers',"my fathers'",'my father'], 'That is my fathers coat.', 'fathers', "father's", '单数名词father的所有格加’s。'],
  ["We visited the ___ house.", '我们参观了Smith一家的房子。', "Smiths'", ["Smiths'","Smith's",'Smiths','Smith'], "We visited the Smith's house.", "Smith's", "Smiths'", '表示Smith一家时用复数Smiths，其所有格为Smiths’。'],
  ["The ___ toys are new.", '孩子们的玩具是新的。', "children's", ["children's","childrens'","child's",'children'], "The childrens' toys are new.", "childrens'", "children's", 'children是不规则复数，不以s结尾，因此加’s。'],
  ["It is ___ birthday today.", '今天是Lucy的生日。', "Lucy's", ["Lucy's",'Lucys',"Lucys'",'Lucy'], 'It is Lucys birthday today.', 'Lucys', "Lucy's", '人名Lucy后加’s表示“Lucy的”。'],
  ["The ___ tail is long.", '狗的尾巴很长。', "dog's", ["dog's",'dogs',"dogs'",'dog'], 'The dogs tail is long.', 'dogs', "dog's", '一只狗的尾巴使用单数所有格dog’s。'],
  ["These are the ___ bags.", '这些是男孩们的包。', "boys'", ["boys'","boy's",'boys','boy'], "These are the boy's bags.", "boy's", "boys'", '多个男孩用boys，其所有格只加撇号。'],
  ["___ sister is a doctor.", 'James的姐姐是一名医生。', "James's", ["James's","James'",'Jame’s','James'], "James sister is a doctor.", 'James', "James's", 'KET阶段人名James通常加’s构成所有格。'],
  ["The ___ uniforms are blue.", '学生们的校服是蓝色的。', "students'", ["students'","student's",'students','student'], "The student's uniforms are blue.", "student's", "students'", '多个学生用students’，表示学生们共同的校服。'],
  ["We are at the ___.", '我们在面包店。', "baker's", ["baker's",'bakers',"bakers'",'baker'], 'We are at the baker.', 'baker', "baker's", 'baker’s可省略shop，表示面包店。'],
  ["I stayed at ___ last night.", '我昨晚住在Anna家。', "Anna's", ["Anna's",'Annas',"Annas'",'Anna'], 'I stayed at Anna last night.', 'Anna', "Anna's", 'Anna’s可省略house或home，表示Anna家。'],
  ["The ___ classroom is clean.", '孩子们的教室很干净。', "children's", ["children's","childrens'","child's",'children'], "The childrens classroom is clean.", 'childrens', "children's", 'children是不规则复数，所有格加’s。'],
  ["That is ___ office.", '那是经理的办公室。', "the manager's", ["the manager's",'the managers',"the managers'",'the manager'], 'That is the manager office.', 'manager', "manager's", '单数名词manager加’s表示所属。'],
  ["The ___ names are on the list.", '女士们的名字在名单上。', "women's", ["women's","womens'","woman's",'women'], "The womens' names are on the list.", "womens'", "women's", 'women是不规则复数，所有格加’s。'],
].map(([stem,qZh,answer,opts,wrong,error,correct,expZh])=>({q:stem,qZh,answer,opts,blank:stem,wrong,wrongZh:qZh,error,correct,expZh}))

const demonstrativeExamples = [
  ['___ book here is mine.', '这里的这本书是我的。', 'This', ['This','That','These','Those'], 'These book here is mine.', 'These', 'This', '近处单数名词book搭配this。'],
  ['___ mountains over there are beautiful.', '远处的那些山很美。', 'Those', ['Those','These','That','This'], 'These mountains over there are beautiful.', 'These', 'Those', '远处复数名词mountains搭配those。'],
  ['Who is ___ man by the door?', '门边的那个男人是谁？', 'that', ['that','those','these','this'], 'Who is those man by the door?', 'those', 'that', '较远处的单数man搭配that。'],
  ['___ apples in my hand are fresh.', '我手里的这些苹果很新鲜。', 'These', ['These','Those','This','That'], 'This apples in my hand are fresh.', 'This', 'These', '近处复数apples搭配these。'],
  ['___ is my friend, Mia.', '这位是我的朋友Mia。', 'This', ['This','These','Those','They'], 'These is my friend, Mia.', 'These', 'This', '介绍身边的一个人时使用This is。'],
  ['Are ___ your shoes over there?', '远处的那些是你的鞋吗？', 'those', ['those','that','this','it'], 'Are that your shoes over there?', 'that', 'those', '远处复数shoes搭配those。'],
  ['What is ___ on the table?', '桌上的那个东西是什么？', 'that', ['that','those','these','they'], 'What are that on the table?', 'are', 'is', 'that是单数，be动词使用is。'],
  ['___ flowers here smell lovely.', '这里的这些花闻起来很香。', 'These', ['These','Those','This','That'], 'That flowers here smell lovely.', 'That', 'These', '近处复数flowers搭配these。'],
  ['I do not like ___ colour.', '我不喜欢那个颜色。', 'that', ['that','those','these','they'], 'I do not like those colour.', 'those', 'that', 'colour是单数，使用that。'],
  ['___ were happy days.', '那些是快乐的日子。', 'Those', ['Those','That','This','It'], 'That were happy days.', 'That', 'Those', 'days是复数，使用those。'],
  ['Is ___ seat free?', '这个座位有人坐吗？', 'this', ['this','these','those','they'], 'Are this seat free?', 'Are', 'Is', 'this seat是单数，be动词使用is。'],
  ['___ two pictures are different.', '这两张图片不同。', 'These', ['These','This','That','It'], 'This two pictures are different.', 'This', 'These', 'two pictures是复数，使用these。'],
  ['Look at ___ bird in the sky.', '看天空中的那只鸟。', 'that', ['that','those','these','they'], 'Look at those bird in the sky.', 'those', 'that', '远处单数bird搭配that。'],
  ['___ are the keys I wanted.', '这些就是我想要的钥匙。', 'These', ['These','This','That','It'], 'This are the keys I wanted.', 'This', 'These', 'keys是复数，使用these。'],
  ['Was ___ your old school?', '那是你以前的学校吗？', 'that', ['that','those','these','they'], 'Were that your old school?', 'Were', 'Was', 'that指单数事物，过去式be使用was。'],
].map(([stem,qZh,answer,opts,wrong,error,correct,expZh])=>({q:stem,qZh,answer,opts,blank:stem,wrong,wrongZh:qZh,error,correct,expZh}))

const indefiniteExamples = [
  ['There are ___ biscuits left.', '还剩一些饼干。', 'some', ['some','any','much','every'], 'There are much biscuits left.', 'much', 'some', '肯定句中修饰可数名词复数常用some。'],
  ['Is there ___ milk?', '有牛奶吗？', 'any', ['any','many','every','few'], 'Is there some milk?', 'some', 'any', '一般疑问句中通常使用any。'],
  ['___ student has a book.', '每个学生都有一本书。', 'Every', ['Every','All','Many of','Any of'], 'Every students has a book.', 'students', 'student', 'every后接可数名词单数。'],
  ['___ of the answers is correct.', '两个答案都不正确。', 'Neither', ['Neither','Both','All','Every'], 'Neither of the answers are correct.', 'are', 'is', 'neither作主语通常视为单数。'],
  ['___ of my parents are teachers.', '我的父母都是教师。', 'Both', ['Both','Either','Neither','Every'], 'Both of my parents is teachers.', 'is', 'are', 'both表示两者都，谓语使用复数。'],
  ['You may choose ___ colour.', '两种颜色任选一种。', 'either', ['either','neither','both','every'], 'You may choose both colour.', 'both', 'either', 'either表示两者中的任意一个。'],
  ['We have very ___ time.', '我们的时间很少。', 'little', ['little','few','many','several'], 'We have very few time.', 'few', 'little', 'time不可数，表示很少使用little。'],
  ['Only a ___ people came.', '只有少数人来了。', 'few', ['few','little','much','every'], 'Only a little people came.', 'little', 'few', 'people是复数可数名词，使用a few。'],
  ['There is too ___ sugar in this tea.', '这杯茶里的糖太多。', 'much', ['much','many','few','several'], 'There is too many sugar in this tea.', 'many', 'much', 'sugar不可数，使用much。'],
  ['How ___ books do you need?', '你需要多少本书？', 'many', ['many','much','little','every'], 'How much books do you need?', 'much', 'many', 'books可数复数，使用many。'],
  ['___ children enjoy stories.', '大多数孩子喜欢故事。', 'Most', ['Most','Much','Every of','A little'], 'Most of children enjoy stories.', 'Most of', 'Most', '泛指大多数孩子时直接用Most children。'],
  ['I have two pens, but ___ works.', '我有两支笔，但两支都不能用。', 'neither', ['neither','both','either','all'], 'I have two pens, but both works.', 'both', 'neither', 'neither表示两者都不。'],
  ['___ the water was cold.', '所有的水都是冷的。', 'All', ['All','Every','Many','Few'], 'Every the water was cold.', 'Every', 'All', 'all可修饰不可数名词water；every不能。'],
  ['Do you have ___ questions?', '你有任何问题吗？', 'any', ['any','some','much','every'], 'Do you have some questions?', 'some', 'any', '一般疑问句通常使用any。'],
  ['There are ___ chairs for everyone.', '有足够的椅子供每个人使用。', 'enough', ['enough','much','little','every'], 'There is enough chairs for everyone.', 'is', 'are', 'chairs是复数，there be使用are。'],
].map(([stem,qZh,answer,opts,wrong,error,correct,expZh])=>({q:stem,qZh,answer,opts,blank:stem,wrong,wrongZh:qZh,error,correct,expZh}))

const compoundExamples = [
  ['There is ___ at the door.', '门口有人。', 'someone', ['someone','anyone','no one','something'], 'There are someone at the door.', 'are', 'is', 'someone视为单数，there be使用is。'],
  ['I cannot find my keys ___.', '我到处都找不到钥匙。', 'anywhere', ['anywhere','somewhere','everywhere','nowhere'], 'I cannot find my keys somewhere.', 'somewhere', 'anywhere', '否定句中表示“任何地方”使用anywhere。'],
  ['Would you like ___ to drink?', '你想喝点什么吗？', 'something', ['something','anything','nothing','everything'], 'Would you like anything to drink?', 'anything', 'something', '提出邀请并期待肯定回答时常用something。'],
  ['___ knows the answer.', '没有人知道答案。', 'Nobody', ['Nobody','Anybody','Somebody','Everybody'], "Nobody don't know the answer.", "don't know", 'knows', 'nobody本身含否定意义，不能再用don’t。'],
  ['Is ___ at home?', '有人在家吗？', 'anyone', ['anyone','someone','no one','everyone'], 'Are anyone at home?', 'Are', 'Is', 'anyone视为单数，使用is。'],
  ['I looked ___ for my phone.', '我到处寻找我的手机。', 'everywhere', ['everywhere','anyone','everything','somebody'], 'I looked everyone for my phone.', 'everyone', 'everywhere', '表示地点“到处”使用everywhere。'],
  ['There is ___ in the box.', '盒子里什么也没有。', 'nothing', ['nothing','anything','anyone','nowhere'], "There isn't nothing in the box.", "isn't nothing", 'is nothing', 'nothing本身表示否定，不与not连用。'],
  ['___ called you this morning.', '今天早上有人给你打电话。', 'Someone', ['Someone','Anyone','Nothing','Somewhere'], 'Someone call you this morning.', 'call', 'called', 'this morning在此表示已过去，动词使用called。'],
  ['We did not go ___.', '我们哪里也没去。', 'anywhere', ['anywhere','somewhere','everywhere','someone'], 'We did not go nowhere.', 'nowhere', 'anywhere', '已有not时使用anywhere，避免双重否定。'],
  ['___ is ready for the trip.', '每个人都为旅行做好了准备。', 'Everyone', ['Everyone','Everything','Everywhere','Anyone'], 'Everyone are ready for the trip.', 'are', 'is', 'everyone视为单数，使用is。'],
  ['Tell me ___ you remember.', '把你记得的一切告诉我。', 'everything', ['everything','everyone','everywhere','anything'], 'Tell me everyone you remember.', 'everyone', 'everything', '指所有事情使用everything。'],
  ['I need ___ quiet to study.', '我需要一个安静的地方学习。', 'somewhere', ['somewhere','someone','something','anybody'], 'I need someone quiet to study.', 'someone', 'somewhere', '指一个地方使用somewhere。'],
  ['Did ___ see the accident?', '有人看见事故了吗？', 'anybody', ['anybody','somebody','nobody','everybody'], 'Did anybody saw the accident?', 'saw', 'see', 'did后使用动词原形see。'],
  ['There was ___ useful in the bag.', '包里没有任何有用的东西。', 'nothing', ['nothing','nobody','nowhere','anybody'], 'There were nothing useful in the bag.', 'were', 'was', 'nothing视为单数，使用was。'],
  ['Let us go ___ warm.', '我们去一个暖和的地方吧。', 'somewhere', ['somewhere','something','someone','anywhere'], 'Let us go something warm.', 'something', 'somewhere', 'go后需要地点副词somewhere。'],
].map(([stem,qZh,answer,opts,wrong,error,correct,expZh])=>({q:stem,qZh,answer,opts,blank:stem,wrong,wrongZh:qZh,error,correct,expZh}))

export const GRAMMAR_PRONOUN_QUESTIONS = {
  11: makeUnit({
    title: '物主代词', intro: '形容词性物主代词放在名词前；名词性物主代词可独立使用，后面不再接名词。',
    guide: { uses:['说明某物属于谁','避免重复已经提到的名词'], structures:['my→mine, your→yours, her→hers','our→ours, their→theirs；his与its形式特殊'], signals:['名词前用my/your等','空格后无名词时考虑mine/yours等'], warning:'mine、yours、hers、ours、theirs后不能再接名词；its没有撇号。' },
    conceptQuestions:[
      {q:'Which words are possessive adjectives?',qZh:'哪些是形容词性物主代词？（多选）',opts:['my','your','hers','their'],ans:[0,1,3],expZh:'my、your、their放在名词前；hers是名词性物主代词。'},
      {q:'Which words can stand alone?',qZh:'哪些物主代词可以独立使用？（多选）',opts:['mine','ours','her','their'],ans:[0,1],expZh:'mine和ours可独立使用；her和their后通常接名词。'},
      {q:'Which rule is correct?',qZh:'哪条规则正确？',opts:['mine后必须接名词','its表示“它的”','their只能指一个人','hers等于her is'],ans:1,expZh:'its是不带撇号的物主代词，表示“它的”。'},
    ], examples: possessiveExamples,
  }),
  12: makeUnit({
    title:"用 's 表示名词所有格", intro:'名词所有格表示所属关系。单数名词和不以s结尾的复数名词加’s；以s结尾的复数名词通常只加撇号。',
    guide:{uses:['表示人或动物拥有某物','表示家庭、商店或地点'],structures:["单数名词 + ’s","规则复数名词 + ’","不规则复数名词 + ’s"],signals:['Tom’s book','the girls’ room','children’s toys'],warning:'先判断名词是单数、规则复数还是不规则复数，再决定加’s还是只加撇号。'},
    conceptQuestions:[
      {q:'How do we form the possessive of a singular noun?',qZh:'单数名词的所有格通常怎样构成？',opts:["加 ’s",'只加s','只加撇号','加of后删名词'],ans:0,expZh:'单数名词通常在词尾加’s。'},
      {q:'Which possessives are correct?',qZh:'哪些名词所有格形式正确？（多选）',opts:["the boy's bag","the girls' room","childrens' toys","women's shoes"],ans:[0,1,3],expZh:'children是不规则复数，应写children’s。'},
      {q:'What can “at the doctor’s” mean?',qZh:'at the doctor’s可以表示什么？',opts:['在医生家或诊所','医生们','医生本人','医生的名字'],ans:0,expZh:'所有格后可省略已知地点名词，doctor’s可表示诊所。'},
    ], examples: possessiveCaseExamples,
  }),
  13: makeUnit({
    title:'指示代词', intro:'this/these指较近的人或物，that/those指较远的人或物；this/that为单数，these/those为复数。',
    guide:{uses:['指出近处或远处的人和事物','介绍人物或指代前文内容'],structures:['this/that + 单数名词','these/those + 复数名词'],signals:['here常与this/these搭配','over there常与that/those搭配'],warning:'指示代词的单复数必须与名词和be动词保持一致。'},
    conceptQuestions:[
      {q:'Which words refer to things near the speaker?',qZh:'哪些词通常指说话者附近的事物？（多选）',opts:['this','these','that','those'],ans:[0,1],expZh:'this指近处单数，these指近处复数。'},
      {q:'Which demonstratives are plural?',qZh:'哪些指示代词是复数？（多选）',opts:['this','that','these','those'],ans:[2,3],expZh:'these和those都是复数形式。'},
      {q:'Which sentence is correct?',qZh:'哪个句子的单复数搭配正确？',opts:['This shoes are new.','Those car is fast.','These books are mine.','That apples are red.'],ans:2,expZh:'these与复数books搭配，be动词使用are。'},
    ], examples: demonstrativeExamples,
  }),
  14: makeUnit({
    title:'不定代词', intro:'some/any、many/much、few/little、both/either/neither等词用来泛指数量或对象。',
    guide:{uses:['表达不确定的数量','表示两者都、任一或都不','表示少量或大量'],structures:['many/few + 可数名词复数','much/little + 不可数名词','both/either/neither + of'],signals:['疑问和否定句常用any','肯定句常用some'],warning:'注意可数与不可数、单数与复数，以及neither本身已经含否定意义。'},
    conceptQuestions:[
      {q:'Which words are used with uncountable nouns?',qZh:'哪些词可修饰不可数名词？（多选）',opts:['much','little','many','few'],ans:[0,1],expZh:'much和little修饰不可数名词；many和few修饰复数可数名词。'},
      {q:'What does “neither” mean?',qZh:'neither表示什么？',opts:['两者都','两者中的任一个','两者都不','三个以上全部'],ans:2,expZh:'neither表示两者都不。'},
      {q:'Which words refer to two people or things?',qZh:'哪些词专门用于两者？（多选）',opts:['both','either','neither','every'],ans:[0,1,2],expZh:'both、either、neither都用于两者。'},
    ], examples: indefiniteExamples, showBlankOptions: true,
  }),
  15: makeUnit({
    title:'复合不定代词', intro:'someone、anything、nobody、everywhere等由some/any/no/every与-one、-body、-thing、-where构成。',
    guide:{uses:['泛指不确定的人、事或地点','表达没有人、没有事或没有地方'],structures:['人：someone/anyone/no one/everyone','事：something/anything/nothing/everything','地点：somewhere/anywhere/nowhere/everywhere'],signals:['肯定句常用some-','疑问和否定句常用any-'],warning:'复合不定代词通常视为单数；no-系列本身含否定意义，不再与not连用。'},
    conceptQuestions:[
      {q:'Which words refer to people?',qZh:'哪些复合不定代词指人？（多选）',opts:['someone','anybody','nothing','everywhere'],ans:[0,1],expZh:'someone和anybody指人；nothing指事物，everywhere指地点。'},
      {q:'How is “everyone” treated in a sentence?',qZh:'everyone在句中通常按什么数处理？',opts:['单数','复数','只能作宾语','没有谓语'],ans:0,expZh:'everyone语义上包含多人，但语法上通常视为单数。'},
      {q:'Which sentence avoids a double negative?',qZh:'哪个句子避免了双重否定？',opts:["I don't know nobody.","I don't know anybody.",'Nobody does not know.','There is not nothing.'],ans:1,expZh:'已有not时使用anybody；no-系列不能再与not叠加。'},
    ], examples: compoundExamples, showBlankOptions: true,
  }),
}
