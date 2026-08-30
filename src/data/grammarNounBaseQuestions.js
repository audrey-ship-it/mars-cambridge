function make(title,intro,guide,concepts,rows,showCapitalizationPrompt=false){const items=rows.map(([s,z,a,o,w,e,c,x])=>({s,z,a,o,w,e,c,x}));return{title,intro,guide,questions:[...concepts,...items.slice(0,15-concepts.length).map(i=>({q:i.s,qZh:i.z,opts:i.o,ans:i.o.indexOf(i.a),expZh:i.x}))],blanks:items.map(i=>({sentence:showCapitalizationPrompt?i.s.replace(/\.$/,` (${i.a.toLowerCase()}).`):i.s,sentenceZh:i.z,ans:[i.a],expZh:i.x})),corrections:items.map(i=>({sentence:i.w,sentenceZh:i.z,error:i.e,correct:i.c,expZh:i.x}))}}
const proper=[
['___ is the capital of France.','巴黎是法国的首都。','Paris',['Paris','paris','city','Capital'],'paris is the capital of France.','paris','Paris','Paris是特定城市名称，属于专有名词，首字母大写。'],
['We study ___ at school.','我们在学校学习英语。','English',['English','english','language','an English'],'We study english at school.','english','English','语言名称English是专有名词，首字母大写。'],
['My friend ___ lives nearby.','我的朋友Lucy住在附近。','Lucy',['Lucy','lucy','girl','friend'],'My friend lucy lives nearby.','lucy','Lucy','具体人名Lucy必须大写。'],
['Today is ___.','今天是星期一。','Monday',['Monday','monday','day','the monday'],'Today is monday.','monday','Monday','星期名称属于专有名词，首字母大写。'],
['We visited ___ last summer.','我们去年夏天游览了意大利。','Italy',['Italy','italy','country','the italy'],'We visited italy last summer.','italy','Italy','国家名称Italy必须大写。'],
['The river is called the ___.','这条河叫泰晤士河。','Thames',['Thames','thames','river','Water'],'The river is called the thames.','thames','Thames','特定河流名称Thames是专有名词。'],
['___ is a large company.','Amazon是一家大公司。','Amazon',['Amazon','amazon','company','Shop'],'amazon is a large company.','amazon','Amazon','公司名称Amazon是专有名词。'],
['We celebrate ___ in December.','我们在十二月庆祝圣诞节。','Christmas',['Christmas','christmas','festival','holiday'],'We celebrate christmas in December.','christmas','Christmas','节日名称Christmas首字母大写。'],
['My dog is named ___.','我的狗叫Max。','Max',['Max','max','dog','Animal'],'My dog is named max.','max','Max','动物的具体名字Max按专有名词处理。'],
['She lives on ___ Street.','她住在King街。','King',['King','king','street','Road'],'She lives on king Street.','king','King','特定街道名称中的King要大写。'],
['___ is the first month.','一月是第一个月。','January',['January','january','month','Winter'],'january is the first month.','january','January','月份名称January是专有名词。'],
['The ___ is a famous landmark.','埃菲尔铁塔是著名地标。','Eiffel Tower',['Eiffel Tower','eiffel tower','tower','Eiffel tower'],'The eiffel tower is a famous landmark.','eiffel tower','Eiffel Tower','地标名称中的主要单词首字母都要大写。'],
['A ___ is a place where books are kept.','图书馆是存放书籍的地方。','library',['library','London','Monday','Lucy'],'A Library is a place where books are kept.','Library','library','普通名词library在句中通常不大写。'],
['My ___ teaches maths.','我的老师教数学。','teacher',['teacher','Mr Brown','England','Friday'],'My Teacher teaches maths.','Teacher','teacher','teacher泛指职业，是普通名词。'],
['The ___ is very busy.','这座城市很繁忙。','city',['city','Paris','China','July'],'The City is very busy.','City','city','city泛指一类地点，是普通名词。'],
]
const count=[
['I ate two ___.','我吃了两个苹果。','apples',['apples','apple','applees','some apple'],'I ate two apple.','apple','apples','apple可数，two后使用复数apples。'],
['We need some ___.','我们需要一些信息。','information',['information','informations','an information','informationes'],'We need some informations.','informations','information','information不可数，没有复数形式。'],
['She gave me some ___.','她给了我一些建议。','advice',['advice','advices','an advice','advises'],'She gave me an advice.','an advice','some advice','advice不可数，不能直接与an连用。'],
['There are three ___.','这里有三把椅子。','chairs',['chairs','chair','furniture','chairness'],'There are three chair.','chair','chairs','chair是可数名词，three后用复数。'],
['I bought a loaf of ___.','我买了一条面包。','bread',['bread','breads','a bread','breades'],'I bought a bread.','a bread','a loaf of bread','bread不可数，具体数量用a loaf of。'],
['How much ___ is there?','有多少牛奶？','milk',['milk','milks','bottles','a milk'],'How many milk is there?','many','much','milk不可数，询问数量用how much。'],
['How many ___ do you have?','你有多少本书？','books',['books','book','information','homework'],'How much books do you have?','much','many','books是可数复数，使用how many。'],
['The room has some new ___.','房间里有一些新家具。','furniture',['furniture','furnitures','a furniture','chairs furniture'],'The room has some new furnitures.','furnitures','furniture','furniture是不可数总称。'],
['I have a lot of ___.','我有很多家庭作业。','homework',['homework','homeworks','a homework','homeworkes'],'I have many homeworks.','many homeworks','a lot of homework','homework不可数，不加-s，通常用a lot of。'],
['There is some ___ in the cup.','杯子里有一些水。','water',['water','waters','a water','wateres'],'There are some water in the cup.','are','is','water不可数，there be使用单数is。'],
['Mia bought three ___.','Mia买了三个三明治。','sandwiches',['sandwiches','sandwich','sandwichs','sandwichies'],'Mia bought three sandwichs.','sandwichs','sandwiches','sandwich可数且以-ch结尾，复数加-es。'],
['The news ___ surprising.','这个消息令人惊讶。','is',['is','are','have','be'],'The news are surprising.','are','is','news通常作不可数单数名词。'],
['We listened to some ___.','我们听了一些音乐。','music',['music','musics','a music','songs music'],'We listened to a music.','a music','some music','泛指music时不可数，使用some music。'],
['She has long ___.','她留着长发。','hair',['hair','hairs','a hair','hairies'],'She has long hairs.','hairs','hair','泛指一个人的头发整体时hair不可数。'],
['There are many ___ outside.','外面有许多人。','people',['people','peoples','person','persons people'],'There is many people outside.','is','are','people是复数意义，there be使用are。'],
]
const c=(q,qZh,opts,ans,expZh)=>({q,qZh,opts,ans,expZh})
export const GRAMMAR_NOUN_BASE_QUESTIONS={
1:make('普通名词和专有名词','普通名词泛指一类人、地点或事物；专有名词指特定名称，首字母必须大写。',{uses:['区分一般类别与特定名称','正确使用专有名词的大写'],structures:['普通名词：city, teacher, river','专有名词：London, Mary, the Thames'],signals:['人名、地名、国家、语言、星期和月份通常是专有名词'],warning:'专有名词及其主要组成部分需要大写；普通名词不因重要而随意大写。'},[c('Which are proper nouns?','哪些是专有名词？（多选）',['London','Monday','teacher','English'],[0,1,3],'London、Monday和English都是特定名称。'),c('Which are common nouns?','哪些是普通名词？（多选）',['city','river','Mary','book'],[0,1,3],'city、river和book都泛指一类事物。'),c('What is the main writing rule for a proper noun?','专有名词最重要的书写规则是什么？',['首字母大写','末尾加-s','前面必须加the','只能写成复数'],0,'专有名词首字母必须大写。')],proper,true),
2:make('可数名词和不可数名词','可数名词可以直接计数并有单复数；不可数名词通常没有复数，不能直接与a/an或数字连用。',{uses:['判断名词能否直接计数','选择many/much和正确量词'],structures:['a/an/数字 + 可数名词','some/much + 不可数名词','量词 + of + 不可数名词'],signals:['many/how many + 可数复数','much/how much + 不可数名词'],warning:'advice、information、furniture、homework、bread等在KET语境中通常不可数。'},[c('Which nouns are uncountable?','哪些名词是不可数名词？（多选）',['water','advice','chair','information'],[0,1,3],'water、advice和information通常不可数。'),c('Which nouns are countable?','哪些名词是可数名词？（多选）',['apple','sandwich','music','book'],[0,1,3],'apple、sandwich和book可以直接计数。'),c('Which rule is correct?','哪条规则正确？',['不可数名词通常不能直接加-s','所有不可数名词前都加an','可数名词没有复数','many修饰不可数名词'],0,'不可数名词通常没有复数形式。')],count),
}
