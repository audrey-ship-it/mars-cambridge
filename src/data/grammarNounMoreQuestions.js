const concepts=(title,rules)=>rules.map(([q,qZh,opts,ans,expZh])=>({q,qZh,opts,ans,expZh}))
function morphologyUnit(title,intro,guide,rules,words,blankContexts={}){return{title,intro,guide,questions:[...concepts(title,rules),...words.slice(0,15-rules.length).map(x=>({q:`What is the plural of “${x[0]}”?`,qZh:`“${x[0]}”的复数形式是什么？`,opts:[x[1],x[2],x[0],`${x[0]}es`],ans:0,expZh:x[5]}))],blanks:words.map(x=>({sentence:blankContexts[x[0]]?.[0]||`The plural of “${x[0]}” is ___.`,sentenceZh:blankContexts[x[0]]?.[1]||`“${x[0]}”的复数形式是什么？`,ans:[x[1]],expZh:x[5]})),corrections:words.map(x=>({sentence:x[3],sentenceZh:x[4],error:x[2],correct:x[1],expZh:x[5]}))}}
const regular=[
['book','books','bookes','I have two bookes.','我有两本书。','大多数名词直接加-s。'],['bus','buses','buss','Two buss are coming.','两辆公交车来了。','以-s结尾加-es。'],['box','boxes','boxs','There are three boxs.','这里有三个盒子。','以-x结尾加-es。'],['watch','watches','watchs','He owns two watchs.','他有两块手表。','以-ch结尾加-es。'],['dish','dishes','dishs','Wash the dishs.','把盘子洗了。','以-sh结尾加-es。'],['city','cities','citys','These citys are large.','这些城市很大。','辅音+y结尾变y为i加-es。'],['baby','babies','babys','The babys are asleep.','婴儿们睡着了。','辅音+y结尾变y为i加-es。'],['toy','toys','toies','The children have many toies.','孩子们有许多玩具。','元音+y结尾直接加-s。'],['key','keys','keies','I found two keies.','我找到了两把钥匙。','元音+y结尾直接加-s。'],['leaf','leaves','leafs','The tree has green leafs.','树上有绿叶。','leaf的复数变-f为-ves。'],['knife','knives','knifes','These knifes are sharp.','这些刀很锋利。','knife变-fe为-ves。'],['photo','photos','photoes','We took many photoes.','我们拍了许多照片。','photo的复数直接加-s。'],['potato','potatoes','potatos','We bought some potatos.','我们买了一些土豆。','potato的复数加-es。'],['class','classes','classs','Our school has ten classs.','我们学校有十个班。','以-s结尾加-es。'],['family','families','familys','Two familys live here.','有两个家庭住在这里。','辅音+y结尾变y为i加-es。']]
const regularBlankContexts={
book:['There are several ___ on the library shelf. (book)','图书馆的书架上有几本书。'],
bus:['Three ___ stop outside our school every morning. (bus)','每天早上有三辆公交车停在我们学校外面。'],
box:['Mia packed her toys into two large ___. (box)','Mia把玩具装进了两个大箱子。'],
watch:['The shop sells expensive ___. (watch)','这家商店出售昂贵的手表。'],
dish:['Please put the clean ___ in the cupboard. (dish)','请把干净的盘子放进橱柜。'],
city:['London and Edinburgh are famous British ___. (city)','伦敦和爱丁堡是英国的著名城市。'],
baby:['Both ___ are sleeping quietly upstairs. (baby)','两个婴儿都在楼上安静地睡觉。'],
toy:['The children left their ___ on the floor. (toy)','孩子们把玩具留在了地板上。'],
key:['I keep the front-door ___ in my bag. (key)','我把前门钥匙放在包里。'],
leaf:['In autumn, the ___ on this tree turn yellow. (leaf)','秋天，这棵树上的叶子会变黄。'],
knife:['Keep sharp ___ away from young children. (knife)','请将锋利的刀具放在幼儿接触不到的地方。'],
photo:['We took lots of ___ during our holiday. (photo)','我们度假期间拍了许多照片。'],
potato:['Dad bought a bag of ___ at the market. (potato)','爸爸在市场买了一袋土豆。'],
class:['Our school has twenty ___ this year. (class)','我们学校今年有二十个班。'],
family:['Several ___ came to the school picnic. (family)','有几个家庭参加了学校野餐。'],
}
const irregular=[
['child','children','childs','Three childs are playing.','三个孩子正在玩。','child的不规则复数是children。'],['person','people','persons','Many persons came to the party.','许多人来参加聚会。','person表示一般“人们”时复数是people。'],['man','men','mans','Two mans are waiting.','两个男人正在等待。','man变为men。'],['woman','women','womans','The womans are doctors.','这些女士是医生。','woman变为women。'],['tooth','teeth','tooths','Brush your tooths.','刷牙。','tooth变为teeth。'],['foot','feet','foots','My foots are cold.','我的脚很冷。','foot变为feet。'],['mouse','mice','mouses','Two mouses ran away.','两只老鼠跑走了。','mouse变为mice。'],['goose','geese','gooses','The gooses are by the lake.','鹅在湖边。','goose变为geese。'],['sheep','sheep','sheeps','Five sheeps are in the field.','五只羊在田野里。','sheep单复数同形。'],['deer','deer','deers','We saw three deers.','我们看见三只鹿。','deer单复数同形。'],['fish','fish','fishes','I caught two fishes.','我抓了两条鱼。','表示同一种鱼的数量时fish常单复数同形。'],['ox','oxen','oxes','The oxes pulled the cart.','公牛拉着车。','ox的不规则复数是oxen。'],['die','dice','dies','Roll the two dies.','掷两个骰子。','表示骰子时die的复数是dice。'],['louse','lice','louses','The louses are tiny.','虱子很小。','louse变为lice。'],['policeman','policemen','policemans','Two policemans arrived.','两名男警察到了。','复合词policeman将man变为men。']]
const irregularBlankContexts={
child:['Several ___ were playing in the park after school. (child)','放学后，几个孩子在公园里玩。'],
person:['More than fifty ___ attended the school concert. (person)','五十多人参加了学校音乐会。'],
man:['Two ___ were waiting outside the station. (man)','两个男人正在车站外等候。'],
woman:['The two ___ in blue coats are our new teachers. (woman)','两位穿蓝色外套的女士是我们的新老师。'],
tooth:['Young children usually have twenty milk ___. (tooth)','幼儿通常有二十颗乳牙。'],
foot:['My ___ were cold after I walked through the snow. (foot)','我走过雪地后，双脚很冷。'],
mouse:['The farmer saw three ___ near the barn. (mouse)','农夫在谷仓附近看见了三只老鼠。'],
goose:['A group of ___ was swimming across the lake. (goose)','一群鹅正游过湖面。'],
sheep:['The farmer keeps twenty ___ in this field. (sheep)','农夫在这片田里养了二十只羊。'],
deer:['We saw two ___ beside the forest path. (deer)','我们在森林小路旁看见了两只鹿。'],
fish:['There are six colourful ___ in the aquarium. (fish)','水族箱里有六条彩色的鱼。'],
ox:['In the old photograph, two ___ were pulling a cart. (ox)','在这张老照片中，两头公牛正拉着一辆车。'],
die:['This board game is played with two ___. (die)','这个桌游需要用两个骰子。'],
louse:['The nurse checked the children’s hair for ___. (louse)','护士检查孩子们的头发里是否有虱子。'],
policeman:['Two ___ arrived to direct the traffic. (policeman)','两名男警察到场指挥交通。'],
}
const quantityRows=[
['a glass of water','a water','Can I have a water?','Can I have a glass of water?','我可以喝一杯水吗？','water不可数，用a glass of表示一杯。'],['a piece of advice','an advice','She gave me an advice.','She gave me a piece of advice.','她给了我一条建议。','advice不可数，用a piece of。'],['a loaf of bread','a bread','I bought a bread.','I bought a loaf of bread.','我买了一条面包。','bread不可数，一条面包用a loaf of。'],['a piece of information','an information','I need an information.','I need a piece of information.','我需要一条信息。','information不可数，用a piece of。'],['a piece of furniture','a furniture','We bought a furniture.','We bought a piece of furniture.','我们买了一件家具。','furniture不可数，用a piece of。'],['a cup of tea','a tea','She drank a tea.','She drank a cup of tea.','她喝了一杯茶。','一杯茶用a cup of tea。'],['a bottle of milk','a milk','He bought a milk.','He bought a bottle of milk.','他买了一瓶牛奶。','一瓶牛奶用a bottle of。'],['a bowl of rice','a rice','I ate a rice.','I ate a bowl of rice.','我吃了一碗米饭。','一碗米饭用a bowl of。'],['a bar of chocolate','a chocolate','She ate a chocolate.','She ate a bar of chocolate.','她吃了一块巧克力。','一大块巧克力用a bar of。'],['a slice of cheese','a cheese','Put a cheese on it.','Put a slice of cheese on it.','在上面放一片奶酪。','一片奶酪用a slice of。'],['a spoonful of sugar','a sugar','Add a sugar.','Add a spoonful of sugar.','加一勺糖。','一勺糖用a spoonful of。'],['a carton of juice','a juice','We need a juice.','We need a carton of juice.','我们需要一盒果汁。','一盒果汁用a carton of。'],['a sheet of paper','a paper','Give me a paper.','Give me a sheet of paper.','给我一张纸。','一张纸用a sheet of。'],['a piece of homework','a homework','I finished a homework.','I finished a piece of homework.','我完成了一项家庭作业。','homework不可数，一项可说a piece of。'],['a kilo of meat','a meat','He bought a meat.','He bought a kilo of meat.','他买了一公斤肉。','具体重量用a kilo of。']]
const compoundRows=[
['bedroom','bed room','We sleep in a bed room.','We sleep in a bedroom.','我们睡在卧室里。','bedroom标准拼写连写。'],['notebook','note book','Open your note book.','Open your notebook.','打开你的笔记本。','notebook标准拼写连写。'],['toothbrush','teethbrush','Use a teethbrush.','Use a toothbrush.','使用牙刷。','复合名词前一个名词通常用单数tooth。'],['handbag','hand bag','Her keys are in her hand bag.','Her keys are in her handbag.','她的钥匙在手提包里。','handbag标准拼写连写。'],['football','foot ball','We play foot ball.','We play football.','我们踢足球。','football标准拼写连写。'],['bus stop','busstop','Meet me at the busstop.','Meet me at the bus stop.','在公交站见我。','bus stop分开书写。'],['fire station','fire-station','The fire-station is nearby.','The fire station is nearby.','消防站在附近。','fire station分开书写。'],['swimming pool','swim pool','The hotel has a swim pool.','The hotel has a swimming pool.','酒店有游泳池。','固定复合名词是swimming pool。'],['schoolbag','schoolsbag','This is my schoolsbag.','This is my schoolbag.','这是我的书包。','前置名词school通常使用单数。'],['bookshop','books shop','She works in a books shop.','She works in a bookshop.','她在书店工作。','bookshop中book使用单数且连写。'],['mother-in-law','mother in law','My mother in law is kind.','My mother-in-law is kind.','我的岳母很友善。','mother-in-law使用连字符。'],['traffic lights','traffic lightes','Stop at the traffic lightes.','Stop at the traffic lights.','在交通灯处停车。','traffic light的复数在中心名词light后加-s。'],['post office','postoffice','The postoffice is closed.','The post office is closed.','邮局关门了。','post office分开书写。'],['washing machine','wash machine','The wash machine is new.','The washing machine is new.','洗衣机是新的。','固定复合名词是washing machine。'],['sunflower','sun flower','A sun flower is yellow.','A sunflower is yellow.','向日葵是黄色的。','sunflower标准拼写连写。']]
const quantityBlankContexts={
'a glass of water':['After the PE lesson, Mia drank ___. (water)','体育课后，Mia喝了一杯水。'],
'a piece of advice':['My teacher gave me ___ about preparing for the exam. (advice)','老师就如何备考给了我一条建议。'],
'a loaf of bread':['Dad bought ___ from the bakery this morning. (bread)','爸爸今天早上从面包店买了一条面包。'],
'a piece of information':['The website gave us ___ about the museum. (information)','这个网站向我们提供了一条关于博物馆的信息。'],
'a piece of furniture':['We bought ___ for the living room. (furniture)','我们为客厅买了一件家具。'],
'a cup of tea':['Grandma made herself ___ before bed. (tea)','奶奶睡前给自己泡了一杯茶。'],
'a bottle of milk':['Ben put ___ in the shopping basket. (milk)','Ben把一瓶牛奶放进购物篮。'],
'a bowl of rice':['I ate ___ with vegetables for lunch. (rice)','我午餐吃了一碗配蔬菜的米饭。'],
'a bar of chocolate':['The two friends shared ___ after the match. (chocolate)','比赛后，两个朋友分享了一块巧克力。'],
'a slice of cheese':['Mia put ___ in her sandwich. (cheese)','Mia在三明治里放了一片奶酪。'],
'a spoonful of sugar':['Please add ___ to my coffee. (sugar)','请在我的咖啡里加一勺糖。'],
'a carton of juice':['We packed ___ for the picnic. (juice)','我们为野餐装了一盒果汁。'],
'a sheet of paper':['The teacher gave each student ___. (paper)','老师给每位学生发了一张纸。'],
'a piece of homework':['I completed ___ before dinner. (homework)','我在晚饭前完成了一项家庭作业。'],
'a kilo of meat':['Dad bought ___ from the butcher’s. (meat)','爸爸从肉店买了一公斤肉。'],
}
const compoundBlankContexts={
bedroom:['I sleep in the ___ next to the bathroom. (bed + room)','我睡在浴室旁边的卧室里。'],
notebook:['Write the new words in your ___. (note + book)','把生词写在你的笔记本里。'],
toothbrush:['You should replace your ___ every three months. (tooth + brush)','你应该每三个月更换一次牙刷。'],
handbag:['Mum keeps her phone and keys in her ___. (hand + bag)','妈妈把手机和钥匙放在手提包里。'],
football:['The children play ___ after school. (foot + ball)','孩子们放学后踢足球。'],
'bus stop':['We waited at the ___ opposite the library. (bus + stop)','我们在图书馆对面的公交车站等车。'],
'fire station':['The firefighters returned to the ___ after the call. (fire + station)','消防员出警后返回了消防站。'],
'swimming pool':['Our hotel has a large indoor ___. (swim + pool)','我们的酒店有一个大型室内游泳池。'],
schoolbag:['Leo put his books in his ___. (school + bag)','Leo把书放进了书包。'],
bookshop:['I bought this dictionary from the new ___. (book + shop)','我从新开的书店买了这本词典。'],
'mother-in-law':['My ___ lives near our family. (mother + in + law)','我的岳母住在我们家附近。'],
'traffic lights':['Turn left when you reach the ___. (traffic + light)','到达交通灯时左转。'],
'post office':['You can send the parcel at the ___. (post + office)','你可以在邮局寄这个包裹。'],
'washing machine':['Dad put the dirty clothes in the ___. (wash + machine)','爸爸把脏衣服放进了洗衣机。'],
sunflower:['A tall yellow ___ grew beside the fence. (sun + flower)','篱笆旁长着一棵高高的黄色向日葵。'],
}
function phraseUnit(title,intro,guide,concepts,rows,blankContexts={}){return{title,intro,guide,questions:[...concepts,...rows.slice(0,15-concepts.length).map(r=>({q:`Which expression correctly means “${r[4]}”?`,qZh:`哪个英文表达正确表示“${r[4]}”？`,opts:[r[0],r[1],r[0]+'s',r[0].replace(/ of /,' ')],ans:0,expZh:r[5]}))],blanks:rows.map(r=>({sentence:blankContexts[r[0]]?.[0]||`Complete the expression: ${r[0].split(' ').slice(0,-1).join(' ')} ___`,sentenceZh:blankContexts[r[0]]?.[1]||`补全表达“${r[4]}”。`,ans:[blankContexts[r[0]]?r[0]:r[0].split(' ').at(-1)],expZh:r[5]})),corrections:rows.map(r=>({sentence:r[2],sentenceZh:r[4],error:r[1],correct:r[0],expZh:r[5]}))}}
const c=(q,qZh,opts,ans,expZh)=>({q,qZh,opts,ans,expZh})
export const GRAMMAR_NOUN_MORE_QUESTIONS={
3:morphologyUnit('名词复数的规则变化','多数名词加-s；-s/-x/-ch/-sh结尾加-es；辅音+y变-ies；部分-f/-fe变-ves。',{uses:['把可数名词单数变为复数'],structures:['一般 + s','特殊结尾 + es','辅音+y → ies'],signals:['数字大于一','many/several等后接复数'],warning:'注意元音+y直接加-s，以及photo与potato的不同变化。'},[["Which nouns add “-es”?",'哪些名词复数通常加-es？（多选）',['bus','box','watch','book'],[0,1,2],'-s、-x、-ch等结尾加-es。'],['What happens to consonant + y?','辅音字母+y结尾怎样变复数？',['变y为i加-es','直接加-es','只加-s','去掉y'],0,'如city→cities。'],['Which plural is correct?','哪个复数形式正确？',['photos','photoes','photoies','photov'],0,'photo的复数是photos。']],regular,regularBlankContexts),
4:morphologyUnit('名词复数的不规则变化','部分名词通过元音变化、特殊词尾或单复数同形构成复数，需要单独记忆。',{uses:['掌握高频不规则复数'],structures:['man→men, child→children','tooth→teeth, mouse→mice','sheep→sheep'],signals:['数字与many后需要复数形式'],warning:'不要给children、people等再加-s。'},[["Which nouns have unchanged plurals?",'哪些名词单复数同形？（多选）',['sheep','deer','child','tooth'],[0,1],'sheep和deer单复数同形。'],['Which pair is correct?','哪组单复数正确？',['person→people','child→childs','woman→womans','foot→foots'],0,'person的常见复数是people。'],['Which are irregular plurals?','哪些是不规则复数？（多选）',['men','teeth','mice','books'],[0,1,2],'men、teeth和mice均为不规则复数。']],irregular,irregularBlankContexts),
5:phraseUnit('不可数名词的量','不可数名词不能直接与数字或a/an连用，可借助piece、glass、loaf等量词表达数量。',{uses:['表达不可数名词的具体数量'],structures:['数量 + 量词 + of + 不可数名词'],signals:['a piece of advice','a loaf of bread','two cups of tea'],warning:'量词随数量变复数，不可数名词本身通常保持原形。'},[c('Which expression is correct?','哪个表达正确？',['a piece of advice','an advice','two advices','advice piece'],0,'advice不可数，一条建议用a piece of advice。'),c('What changes after “two”?','two后量词怎样变化？',['量词变复数','不可数名词加-s','所有词不变','删除of'],0,'如two cups of tea，复数加在量词cups上。'),c('Which nouns need quantity phrases?','哪些名词常需要量词表达具体数量？（多选）',['bread','information','furniture','apple'],[0,1,2],'前三项不可数；apple可直接计数。')],quantityRows,quantityBlankContexts),
6:phraseUnit('复合名词','复合名词由两个或更多词组成一个新概念，可连写、分写或使用连字符。',{uses:['组合词语表达新的事物或概念'],structures:['连写：bedroom','分写：bus stop','连字符：mother-in-law'],signals:['前面的名词通常用单数'],warning:'复合名词的拼写形式需整体记忆；复数通常加在中心名词上。'},[c('Which are compound nouns?','哪些是复合名词？（多选）',['bedroom','bus stop','mother-in-law','beautiful'],[0,1,2],'前三项都由多个词构成一个名词概念。'),c('What form is the first noun usually in?','复合名词中前置名词通常用什么形式？',['单数','复数','所有格','比较级'],0,'如toothbrush和schoolbag，前置名词通常用单数。'),c('Which spelling types are possible?','复合名词可以有哪些书写形式？（多选）',['连写','分写','连字符','每个字母大写'],[0,1,2],'三种书写形式都存在。')],compoundRows,compoundBlankContexts),
}
