function build(title, intro, guide, concepts, rows) {
  const items = rows.map(([sentence,sentenceZh,answer,opts,wrong,error,correct,expZh])=>({sentence,sentenceZh,answer,opts,wrong,error,correct,expZh}))
  return { title,intro,guide,
    questions:[...concepts,...items.slice(0,15-concepts.length).map(x=>({q:x.sentence,qZh:x.sentenceZh,opts:x.opts,ans:x.opts.indexOf(x.answer),expZh:x.expZh}))],
    blanks:items.map(x=>({sentence:x.sentence,sentenceZh:x.sentenceZh,ans:[x.answer],expZh:x.expZh})),
    corrections:items.map(x=>({sentence:x.wrong,sentenceZh:x.sentenceZh,error:x.error,correct:x.correct,expZh:x.expZh})),
  }
}

const attributive = [
 ['Mia has a ___ dress.','Mia有一条漂亮的连衣裙。','beautiful',['beautiful','beautifully','beauty','more beautifully'],'Mia has a beautifully dress.','beautifully','beautiful','名词dress前用形容词beautiful。'],
 ['It is an ___ story.','这是一个有趣的故事。','interesting',['interesting','interested','interest','interestingly'],'It is an interested story.','interested','interesting','事物令人感兴趣用interesting。'],
 ['Leo is an ___ student.','Leo是一名勤奋的学生。','hard-working',['hard-working','hardly-working','work hard','hard work'],'Leo is a hardly-working student.','hardly-working','hard-working','修饰student使用形容词hard-working。'],
 ['We saw three ___ birds.','我们看见三只小鸟。','small',['small','smallly','smaller than','smallness'],'We saw three smallly birds.','smallly','small','形容词small直接修饰birds。'],
 ['She bought a ___ bag.','她买了一个新的蓝色包。','new blue',['new blue','blue new','newly blue','new and bluely'],'She bought a blue new bag.','blue new','new blue','多个形容词通常把表示新旧的new放在颜色blue前。'],
 ['This is a ___ table.','这是一张圆形木桌。','round wooden',['round wooden','wooden round','round wood','roundly wooden'],'This is a wooden round table.','wooden round','round wooden','通常先说形状round，再说材料wooden。'],
 ['He lives in a ___ house.','他住在一座大房子里。','large',['large','largely','larger','largeness'],'He lives in a largely house.','largely','large','名词house前用形容词large。'],
 ['I need some ___ water.','我需要一些冷水。','cold',['cold','coldly','colder than','coldness'],'I need some coldly water.','coldly','cold','修饰名词water用形容词cold。'],
 ['They are watching an ___ film.','他们正在看一部令人兴奋的电影。','exciting',['exciting','excited','excite','excitedly'],'They are watching an excited film.','excited','exciting','电影令人兴奋用exciting。'],
 ['Amy is an ___ girl.','Amy是一个八岁的女孩。','eight-year-old',['eight-year-old','eight-years-old','eight year old','eight-years'],'Amy is an eight-years-old girl.','eight-years-old','eight-year-old','复合形容词eight-year-old中的year用单数并加连字符。'],
 ['We had a ___ journey.','我们进行了一次长途旅行。','long',['long','longly','length','longer than'],'We had a longly journey.','longly','long','修饰journey使用形容词long。'],
 ['There are many ___ shops here.','这里有许多当地商店。','local',['local','locally','location','locals'],'There are many locally shops here.','locally','local','名词shops前使用形容词local。'],
 ['Please use a ___ pencil.','请使用一支尖头铅笔。','sharp',['sharp','sharply','sharpen','sharpness'],'Please use a sharply pencil.','sharply','sharp','修饰pencil用形容词sharp。'],
 ['That is a ___ question.','那是一个困难的问题。','difficult',['difficult','difficulty','difficultly','more difficulty'],'That is a difficulty question.','difficulty','difficult','名词question前使用形容词difficult。'],
 ['She wore a ___ coat.','她穿着一件红色长外套。','long red',['long red','red long','longly red','redly long'],'She wore a red long coat.','red long','long red','通常先说长短long，再说颜色red。'],
]

const linking = [
 ['The soup smells ___.','汤闻起来很香。','delicious',['delicious','deliciously','delight','more deliciously'],'The soup smells deliciously.','deliciously','delicious','感官系动词smell后接形容词。'],
 ['Mia looks ___.','Mia看起来很开心。','happy',['happy','happily','happiness','more happily'],'Mia looks happily.','happily','happy','look作系动词时后接形容词happy。'],
 ['The music sounds ___.','音乐听起来很美。','beautiful',['beautiful','beautifully','beauty','beautify'],'The music sounds beautifully.','beautifully','beautiful','sound作系动词后接形容词。'],
 ['This blanket feels ___.','这条毯子摸起来很柔软。','soft',['soft','softly','softness','softer than'],'This blanket feels softly.','softly','soft','feel作系动词后接形容词soft。'],
 ['The milk tastes ___.','牛奶尝起来很酸。','sour',['sour','sourly','sourness','more sourly'],'The milk tastes sourly.','sourly','sour','taste作系动词后接形容词。'],
 ['He became ___.','他变得很生气。','angry',['angry','angrily','anger','more angrily'],'He became angrily.','angrily','angry','become是系动词，后接形容词angry。'],
 ['The weather turned ___.','天气变冷了。','cold',['cold','coldly','coldness','colder than'],'The weather turned coldly.','coldly','cold','turn表示“变得”时是系动词。'],
 ['Please keep ___.','请保持安静。','quiet',['quiet','quietly','quietness','more quietly'],'Please keep quietly.','quietly','quiet','keep表示保持某状态时后接形容词。'],
 ['The children seem ___.','孩子们似乎很累。','tired',['tired','tiredly','tiringly','tire'],'The children seem tiredly.','tiredly','tired','seem后接形容词tired。'],
 ['Everything is ___.','一切准备就绪。','ready',['ready','readily','readiness','more readily'],'Everything is readily.','readily','ready','be动词后接形容词ready作表语。'],
 ['The sky grew ___.','天空渐渐变暗。','dark',['dark','darkly','darkness','more darkly'],'The sky grew darkly.','darkly','dark','grow表示逐渐变得时后接形容词。'],
 ['Your idea sounds ___.','你的想法听起来不错。','good',['good','well','nicely','goodly'],'Your idea sounds well.','well','good','描述想法的性质，sound后用形容词good。'],
 ['She felt ___.','她感到身体不舒服。','ill',['ill','illness','badly','illly'],'She felt illness.','illness','ill','feel后接形容词ill表示状态。'],
 ['The room became ___.','房间变得安静了。','silent',['silent','silently','silence','more silently'],'The room became silently.','silently','silent','become后接形容词silent。'],
 ['The flowers smell ___.','这些花闻起来很香甜。','sweet',['sweet','sweetly','sweetness','more sweetly'],'The flowers smell sweetly.','sweetly','sweet','smell作系动词后接形容词sweet。'],
]

const forms = [
 ['A train is ___ than a bicycle.','火车比自行车快。','faster',['faster','fastest','more fast','fast'],'A train is more fast than a bicycle.','more fast','faster','单音节形容词fast加-er。'],
 ['This is the ___ room in the hotel.','这是酒店里最大的房间。','largest',['largest','larger','most large','large'],'This is the most large room in the hotel.','most large','largest','large以e结尾，最高级加-st。'],
 ['Maths is ___ than history for me.','对我来说数学比历史难。','more difficult',['more difficult','difficulter','most difficult','difficult'],'Maths is difficulter than history for me.','difficulter','more difficult','多音节形容词difficult前加more。'],
 ['Ben is the ___ runner in our class.','Ben是我们班跑得最快的人。','fastest',['fastest','faster','most fast','fast'],'Ben is the most fast runner in our class.','most fast','fastest','fast最高级加-est。'],
 ['Today is ___ than yesterday.','今天比昨天热。','hotter',['hotter','hoter','more hot','hottest'],'Today is hoter than yesterday.','hoter','hotter','hot需双写t再加-er。'],
 ['This bag is ___ than that one.','这个包比那个重。','heavier',['heavier','heavyer','more heavy','heaviest'],'This bag is heavyer than that one.','heavyer','heavier','辅音+y结尾，变y为i加-er。'],
 ['It was the ___ day of my holiday.','那是我假期中最快乐的一天。','happiest',['happiest','happyest','most happy','happier'],'It was the happyest day of my holiday.','happyest','happiest','happy变y为i加-est。'],
 ['My book is ___ than yours.','我的书比你的好。','better',['better','gooder','best','more good'],'My book is gooder than yours.','gooder','better','good的比较级是不规则形式better。'],
 ['That was the ___ meal I have had.','那是我吃过的最糟糕的一餐。','worst',['worst','worse','baddest','most bad'],'That was the baddest meal I have had.','baddest','worst','bad的最高级是不规则形式worst。'],
 ['Leo lives ___ from school than I do.','Leo住得比我离学校远。','farther',['farther','farest','more far','far'],'Leo lives more far from school than I do.','more far','farther','far的比较级可用farther或further。'],
 ['This test is ___ than the last one.','这次测试比上次容易。','easier',['easier','easyer','more easy','easiest'],'This test is easyer than the last one.','easyer','easier','easy变y为i加-er。'],
 ['The blue whale is the ___ animal.','蓝鲸是最大的动物。','biggest',['biggest','bigest','most big','bigger'],'The blue whale is the bigest animal.','bigest','biggest','big需双写g加-est。'],
 ['This chair is ___ than that one.','这把椅子比那把舒服。','more comfortable',['more comfortable','comfortabler','most comfortable','comfortable'],'This chair is comfortabler than that one.','comfortabler','more comfortable','多音节形容词comfortable前加more。'],
 ['It is the ___ book here.','这是这里最有趣的书。','most interesting',['most interesting','more interesting','interestingest','interestinger'],'It is the interestingest book here.','interestingest','most interesting','多音节形容词最高级前加most。'],
 ['My sister is ___ than me.','我姐姐比我年长。','older',['older','oldest','more old','elder than'],'My sister is more old than me.','more old','older','old通常加-er构成比较级older。'],
]

const comparative = [
 ['A car is ___ than a bike.','汽车比自行车贵。','more expensive',['more expensive','most expensive','expensiver','expensive'],'A car is most expensive than a bike.','most expensive','more expensive','than前使用比较级more expensive。'],
 ['Mia runs ___ than Amy.','Mia跑得比Amy快。','faster',['faster','fastest','fast','more fastest'],'Mia runs fastest than Amy.','fastest','faster','两者比较使用比较级faster。'],
 ['This box is ___ than that one.','这个箱子比那个轻。','lighter',['lighter','lightest','more light','light'],'This box is lightest than that one.','lightest','lighter','than提示使用比较级lighter。'],
 ['Today is much ___ than yesterday.','今天比昨天冷得多。','colder',['colder','coldest','cold','more coldest'],'Today is much coldest than yesterday.','coldest','colder','much可修饰比较级colder。'],
 ['The film is a little ___ than the book.','电影比书稍微有趣一些。','more interesting',['more interesting','most interesting','interesting','interestinger'],'The film is a little most interesting than the book.','most interesting','more interesting','a little可修饰比较级。'],
 ['Ben is as ___ as Leo.','Ben和Leo一样高。','tall',['tall','taller','tallest','more tall'],'Ben is as taller as Leo.','taller','tall','as...as中使用形容词原级。'],
 ['This test is not as ___ as the last one.','这次测试不如上次难。','difficult',['difficult','more difficult','most difficult','difficulty'],'This test is not as more difficult as the last one.','more difficult','difficult','not as...as中使用原级。'],
 ['The weather is getting ___.','天气越来越暖和。','warmer and warmer',['warmer and warmer','warmest','more warmer','warm and warm'],'The weather is getting more warmer.','more warmer','warmer','单音节比较级前不再加more。'],
 ['The ___ you practise, the better you become.','你练习得越多，就会变得越好。','more',['more','most','many','muchest'],'The most you practise, the better you become.','most','more','the + 比较级，the + 比较级表示“越……越……”。'],
 ['Which city is ___, London or Paris?','伦敦和巴黎哪个更大？','larger',['larger','largest','large','most large'],'Which city is largest, London or Paris?','largest','larger','两者之间比较用比较级。'],
 ['My new phone is ___ than my old one.','我的新手机比旧手机好。','better',['better','best','gooder','more good'],'My new phone is best than my old one.','best','better','两者比较且good的比较级是better。'],
 ['This path is ___ than the road.','这条小路比公路窄。','narrower',['narrower','narrowest','most narrow','narrow'],'This path is narrowest than the road.','narrowest','narrower','than提示比较级narrower。'],
 ['The red bag is ___ expensive than the blue one.','红色包没有蓝色包那么贵。','less',['less','least','little','fewer'],'The red bag is least expensive than the blue one.','least','less','less + 形容词表示“不那么……”。'],
 ['You should speak ___.','你应该说得更慢一些。','more slowly',['more slowly','most slowly','slowlier','slowlyest'],'You should speak most slowly.','most slowly','more slowly','此处含比较意味，使用副词比较级more slowly。'],
 ['Our classroom is twice as ___ as theirs.','我们的教室是他们的两倍大。','large',['large','larger','largest','more large'],'Our classroom is twice as larger as theirs.','larger','large','倍数 + as + 原级 + as。'],
]

const superlative = [
 ['Mount Everest is the ___ mountain in the world.','珠穆朗玛峰是世界最高峰。','highest',['highest','higher','most high','high'],'Mount Everest is the higher mountain in the world.','higher','highest','三者以上范围in the world使用最高级。'],
 ['Mia is the ___ student in the class.','Mia是班里最勤奋的学生。','most hard-working',['most hard-working','more hard-working','hardest-working','hard-working'],'Mia is more hard-working student in the class.','more hard-working','most hard-working','班级范围内比较多人，使用最高级。'],
 ['This is the ___ film I have seen.','这是我看过最好的电影。','best',['best','better','goodest','most good'],'This is the better film I have seen.','better','best','good的最高级是不规则形式best。'],
 ['Who is the ___ of the three boys?','三个男孩中谁最高？','tallest',['tallest','taller','most tall','tall'],'Who is the taller of the three boys?','taller','tallest','of the three表示三者比较，使用最高级。'],
 ['It is one of the ___ museums in China.','这是中国最著名的博物馆之一。','most famous',['most famous','more famous','famousest','famous'],'It is one of the more famous museums in China.','more famous','most famous','one of the + 最高级 + 复数名词。'],
 ['December is the ___ month here.','十二月是这里最冷的月份。','coldest',['coldest','colder','most cold','cold'],'December is the colder month here.','colder','coldest','月份范围超过两个，使用最高级。'],
 ['That was the ___ question in the test.','那是测试中最难的题。','most difficult',['most difficult','more difficult','difficultest','difficult'],'That was the more difficult question in the test.','more difficult','most difficult','测试中所有题目比较使用最高级。'],
 ['She is the second ___ runner.','她是第二快的跑步者。','fastest',['fastest','faster','fast','most fast'],'She is the second faster runner.','faster','fastest','序数词可放在最高级前。'],
 ['This is by far the ___ choice.','这显然是最好的选择。','best',['best','better','good','most good'],'This is by far the better choice.','better','best','by far可强调最高级best。'],
 ['Which is the ___ planet from the Sun?','哪颗行星离太阳最远？','farthest',['farthest','farther','most far','far'],'Which is the farther planet from the Sun?','farther','farthest','在所有行星范围中使用最高级farthest。'],
 ['It was the ___ day of the year.','那是一年中最热的一天。','hottest',['hottest','hotter','hotest','most hot'],'It was the hotest day of the year.','hotest','hottest','hot双写t加-est。'],
 ['Amy chose the ___ dress in the shop.','Amy选择了店里最漂亮的裙子。','most beautiful',['most beautiful','more beautiful','beautifulest','beautiful'],'Amy chose the more beautiful dress in the shop.','more beautiful','most beautiful','店内所有裙子中比较使用最高级。'],
 ['He is the ___ person I know.','他是我认识的最有趣的人。','funniest',['funniest','funnier','most funny','funnyest'],'He is the funnyest person I know.','funnyest','funniest','funny变y为i加-est。'],
 ['This is the ___ place to sit.','这是最不舒服的座位。','least comfortable',['least comfortable','less comfortable','most uncomfortable than','comfortablest'],'This is the less comfortable place to sit.','less comfortable','least comfortable','三者以上表达“最不……”使用least。'],
 ['Sunday is our ___ day.','星期日是我们最忙的一天。','busiest',['busiest','busier','busyest','most busy'],'Sunday is our busyest day.','busyest','busiest','busy变y为i加-est。'],
]

const adjectiveAdverb = [
 ['Mia is a ___ singer.','Mia是一名优秀的歌手。','good',['good','well','goodly','better'],'Mia is a well singer.','well','good','修饰名词singer用形容词good。'],
 ['Mia sings ___.','Mia唱得很好。','well',['well','good','goodly','best singer'],'Mia sings good.','good','well','修饰动词sings用副词well。'],
 ['The dog barked ___.','狗大声地叫。','loudly',['loudly','loud','louder dog','loudness'],'The dog barked loudness.','loudness','loudly','修饰动词barked用副词loudly。'],
 ['It was a ___ test.','这是一场简单的测试。','simple',['simple','simply','simplify','simpleness'],'It was a simply test.','simply','simple','修饰名词test用形容词simple。'],
 ['Please speak ___.','请慢慢说。','slowly',['slowly','slow','slowness','slower person'],'Please speak slow person.','slow person','slowly','修饰动词speak使用副词slowly。'],
 ['Leo is a ___ driver.','Leo是一位小心的司机。','careful',['careful','carefully','care','carefulness'],'Leo is a carefully driver.','carefully','careful','名词driver前用形容词careful。'],
 ['Leo drives ___.','Leo开车很小心。','carefully',['carefully','careful','care','more careful driver'],'Leo drives careful.','careful','carefully','修饰动词drives用副词carefully。'],
 ['She gave a ___ answer.','她给出了正确答案。','correct',['correct','correctly','correction','correctness'],'She gave a correctly answer.','correctly','correct','修饰名词answer使用形容词correct。'],
 ['She answered ___.','她回答正确。','correctly',['correctly','correct','correction','correctness'],'She answered correct.','correct','correctly','修饰动词answered使用副词correctly。'],
 ['The train is ___.','火车很快。','fast',['fast','fastly','quickly train','fastness'],'The train is fastly.','fastly','fast','fast本身既可作形容词也可作副词，没有fastly。'],
 ['The train moves ___.','火车行驶得很快。','fast',['fast','fastly','faster train','fastness'],'The train moves fastly.','fastly','fast','fast作副词修饰moves。'],
 ['He works ___.','他工作努力。','hard',['hard','hardly','hardly work','hardness'],'He works hardly.','hardly','hard','hard表示努力地；hardly表示几乎不。'],
 ['I can ___ hear you.','我几乎听不见你。','hardly',['hardly','hard','loud','quick'],'I can hard hear you.','hard','hardly','hardly表示“几乎不”。'],
 ['The children were ___.','孩子们很安静。','quiet',['quiet','quietly','quietness','more quietly'],'The children were quietly.','quietly','quiet','be动词后使用形容词quiet。'],
 ['The children waited ___.','孩子们安静地等待。','quietly',['quietly','quiet','quietness','quieter child'],'The children waited quiet.','quiet','quietly','修饰动词waited用副词quietly。'],
]

const frequency = [
 ['I ___ walk to school.','我总是步行上学。','always',['always','am always','walk always','always am'],'I walk always to school.','walk always','always walk','频率副词通常放在实义动词前。'],
 ['She is ___ late.','她从不迟到。','never',['never','is never','never is','not never'],'She never is late.','never is','is never','频率副词放在be动词后。'],
 ['We ___ go swimming on Sundays.','我们经常星期日去游泳。','often',['often','are often','go often','often are'],'We go often swimming on Sundays.','go often','often go','often通常放在实义动词go前。'],
 ['Ben can ___ help us.','Ben总能帮助我们。','always',['always','can always','always can','help always'],'Ben always can help us.','always can','can always','频率副词放在情态动词can后、实义动词前。'],
 ['They are ___ busy in June.','他们六月通常很忙。','usually',['usually','usually are','are usually','busy usually'],'They usually are busy in June.','usually are','are usually','be动词后放usually。'],
 ['I ___ watch television.','我很少看电视。','rarely',['rarely','am rarely','watch rarely','rare am'],'I watch rarely television.','watch rarely','rarely watch','rarely通常放在实义动词前。'],
 ['Mia has ___ visited London.','Mia有时去过伦敦。','sometimes',['sometimes','has sometimes','sometimes has','visited sometimes'],'Mia sometimes has visited London.','sometimes has','has sometimes','频率副词可放在助动词has后、主要动词前。'],
 ['Dad ___ cooks dinner.','爸爸有时做晚饭。','sometimes',['sometimes','is sometimes','cooks sometimes always','sometimes is'],'Dad is sometimes cooks dinner.','is sometimes cooks','sometimes cooks','一般现在时实义动词前放sometimes。'],
 ['We go to the library ___.','我们一周去图书馆两次。','twice a week',['twice a week','always','two time week','twice week'],'We go to the library twice week.','twice week','twice a week','明确频率twice a week通常放句末。'],
 ['How ___ do you exercise?','你多久锻炼一次？','often',['often','many','long time','usual'],'How many do you exercise?','many','often','询问频率使用How often。'],
 ['She ___ drinks coffee because she dislikes it.','她几乎从不喝咖啡，因为她不喜欢。','hardly ever',['hardly ever','always','usually','every'],'She hardly drinks ever coffee.','hardly drinks ever','hardly ever drinks','hardly ever作为整体放在实义动词前。'],
 ['The bus is ___ on time.','公交车通常准时。','usually',['usually','usual','usually is','on usually'],'The bus usually is on time.','usually is','is usually','be动词后放频率副词。'],
 ['I have piano lessons ___.','我每周上一次钢琴课。','once a week',['once a week','one a week','once week','every one week'],'I have piano lessons once week.','once week','once a week','once a week表示每周一次。'],
 ['They do not ___ eat out.','他们不常在外吃饭。','often',['often','are often','often do','usual'],'They do not eat often out.','eat often','often eat','否定句中often通常放助动词not后、实义动词前。'],
 ['Amy ___ forgets her homework.','Amy偶尔忘记家庭作业。','occasionally',['occasionally','occasion','occasional','occasionally is'],'Amy occasional forgets her homework.','occasional','occasionally','修饰动词forgets使用频率副词occasionally。'],
]

const concepts = {
  19:[{q:'Where does an attributive adjective usually go?',qZh:'作定语的形容词通常放在哪里？',opts:['名词前','动词后且必须加-ly','句首且不修饰任何词','介词后'],ans:0,expZh:'形容词作定语通常放在所修饰的名词前。'}, {q:'Which words are adjectives?',qZh:'哪些词是形容词？（多选）',opts:['beautiful','careful','quickly','happiness'],ans:[0,1],expZh:'beautiful和careful是形容词。'}, {q:'Which order is usual?',qZh:'多个形容词修饰名词时，哪种顺序较自然？',opts:['size/shape before colour','colour always before size','material before every adjective','副词放在名词前'],ans:0,expZh:'常见顺序中，大小或形状通常在颜色之前。'}],
  20:[{q:'What follows a linking verb?',qZh:'系动词后通常接什么？',opts:['形容词','只接副词','动词过去式','介词短语且不能接形容词'],ans:0,expZh:'系动词连接主语与表语，常接形容词描述主语状态。'}, {q:'Which can be linking verbs?',qZh:'哪些词可以作系动词？（多选）',opts:['look','sound','feel','quickly'],ans:[0,1,2],expZh:'look、sound、feel都可作感官系动词。'}, {q:'Which sentence is correct?',qZh:'哪个句子正确？',opts:['The soup tastes wellly.','The soup tastes delicious.','The soup deliciously.','The soup is taste delicious.'],ans:1,expZh:'taste作系动词后接形容词delicious。'}],
  21:[{q:'How do short adjectives usually form the comparative?',qZh:'短形容词通常如何构成比较级？',opts:['加-er','加-est','前加most','后加-ly'],ans:0,expZh:'多数短形容词加-er构成比较级。'}, {q:'Which irregular forms are correct?',qZh:'哪些不规则变化正确？（多选）',opts:['good→better→best','bad→worse→worst','many→manyer→manyest','far→farther→farthest'],ans:[0,1,3],expZh:'good、bad、far均有不规则变化。'}, {q:'How do long adjectives usually form the superlative?',qZh:'长形容词通常如何构成最高级？',opts:['most + 形容词','形容词 + er','more + 形容词','形容词 + ly'],ans:0,expZh:'多音节形容词通常在前面加most构成最高级。'}],
  22:[{q:'Which word often follows a comparative?',qZh:'比较级后常出现哪个词？',opts:['than','the','of all','at'],ans:0,expZh:'比较两者时常用比较级 + than。'}, {q:'Which words can strengthen a comparative?',qZh:'哪些词可修饰比较级？（多选）',opts:['much','a little','far','most'],ans:[0,1,2],expZh:'much、a little和far都可修饰比较级。'}, {q:'What form is used in “as ... as”?',qZh:'as...as结构中使用什么形式？',opts:['形容词或副词原级','比较级','最高级','过去分词'],ans:0,expZh:'as...as中间使用原级。'}],
  23:[{q:'When do we use the superlative?',qZh:'什么时候使用最高级？',opts:['三者或以上范围内比较','只比较两者','表达正在进行','表达过去动作'],ans:0,expZh:'最高级用于三者或更多对象中的最高程度。'}, {q:'Which words commonly introduce the range?',qZh:'哪些表达常引出最高级的比较范围？（多选）',opts:['in the class','of the three','than Amy','I have ever seen'],ans:[0,1,3],expZh:'in、of和完成时经历范围均可提示最高级；than通常提示比较级。'}, {q:'Which structure is correct?',qZh:'哪个结构正确？',opts:['one of the + 最高级 + 复数名词','one of + 比较级 + 单数名词','the + 比较级 + than all','most + 单音节词 + than'],ans:0,expZh:'固定结构为one of the + 最高级 + 复数名词。'}],
  24:[{q:'What does an adjective usually modify?',qZh:'形容词通常修饰什么？',opts:['名词或主语状态','动词动作方式','整个句子的时间','介词'],ans:0,expZh:'形容词修饰名词或在系动词后说明主语状态。'}, {q:'What does an adverb usually modify?',qZh:'副词通常修饰什么？',opts:['动词、形容词或其他副词','只修饰名词','只作主语','只表示所属'],ans:0,expZh:'副词常说明动作方式，也可修饰形容词和其他副词。'}, {q:'Which pairs are special?',qZh:'哪些形容词与副词形式需要特别注意？（多选）',opts:['good→well','fast→fast','hard→hard','careful→careful'],ans:[0,1,2],expZh:'good的副词是well；fast和hard可直接作副词。'}],
  25:[{q:'Where does a frequency adverb usually go with a main verb?',qZh:'频率副词与实义动词连用时通常放在哪里？',opts:['实义动词前','实义动词后且句末','主语前且必须','宾语后'],ans:0,expZh:'always、often等通常放在实义动词前。'}, {q:'Where does it go with “be”?',qZh:'频率副词与be动词连用时通常放在哪里？',opts:['be动词后','be动词前','句末且只能','冠词前'],ans:0,expZh:'频率副词通常放在am/is/are/was/were之后。'}, {q:'Which expressions show frequency?',qZh:'哪些表达表示频率？（多选）',opts:['twice a week','always','hardly ever','yesterday'],ans:[0,1,2],expZh:'前三项都说明动作发生频率；yesterday说明过去时间。'}],
}

export const GRAMMAR_ADJECTIVE_QUESTIONS = {
  19:build('形容词修饰名词','形容词可放在名词前作定语，说明人或事物的性质、大小、颜色、形状等。',{uses:['描述名词的性质和特征','组合多个形容词提供更具体信息'],structures:['形容词 + 名词','限定词 + 形容词 + 名词'],signals:['beautiful dress','small red bag','round wooden table'],warning:'形容词没有单复数变化；-ing形容词描述事物令人如何，-ed形容词描述人的感受。'},concepts[19],attributive),
  20:build('系动词 + 形容词','be、look、sound、smell、taste、feel、seem、become等系动词后用形容词说明主语状态。',{uses:['描述主语的状态或变化','表达感官印象'],structures:['主语 + 系动词 + 形容词'],signals:['look happy','sound good','smell delicious','become quiet'],warning:'系动词后描述主语时不用-ly副词。'},concepts[20],linking),
  21:build('形容词的比较级和最高级','比较级用于两者比较，最高级用于三者或以上。短词多加-er/-est，长词多用more/most。',{uses:['比较两者差异','指出一定范围内最高程度'],structures:['短词：-er / -est','长词：more / most','不规则：good-better-best'],signals:['than提示比较级','the、in/of范围常提示最高级'],warning:'不要重复比较标记，如more easier或most tallest。'},concepts[21],forms),
  22:build('形容词比较级用法','比较级常与than连用；much、far、a little等可以修饰比较级；as...as中使用原级。',{uses:['比较两个对象','表达程度差异或相同程度'],structures:['比较级 + than','as + 原级 + as','the + 比较级, the + 比较级'],signals:['than','much/far/a little','as...as'],warning:'有than时通常用比较级，但as...as中必须用原级。'},concepts[22],comparative),
  23:build('形容词最高级用法','最高级表示三者或更多对象中程度最高或最低，前面通常有the。',{uses:['在范围内选出最高程度','表达“最……之一”'],structures:['the + 最高级 + in/of','one of the + 最高级 + 复数名词'],signals:['in the class','of all','I have ever seen'],warning:'最高级前通常加the；one of后面的名词用复数。'},concepts[23],superlative),
  24:build('形容词和副词','形容词描述名词或主语状态，副词描述动作方式、程度或其他修饰关系。',{uses:['形容词修饰名词','副词修饰动词、形容词和副词'],structures:['形容词 + 名词','动词 + 副词'],signals:['careful driver / drive carefully','good singer / sing well'],warning:'good的副词是well；fast和hard本身可作副词，hardly表示“几乎不”。'},concepts[24],adjectiveAdverb),
  25:build('频率副词','always、usually、often、sometimes、rarely、never等说明动作发生频率。',{uses:['说明习惯动作的频率','询问某事多久发生一次'],structures:['主语 + 频率副词 + 实义动词','主语 + be + 频率副词','How often...?'],signals:['always/usually/often/sometimes','once/twice a week'],warning:'频率副词通常放在be动词后、实义动词前；never本身含否定意义。'},concepts[25],frequency),
}
