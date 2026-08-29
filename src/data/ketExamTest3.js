export const KET_EXAM_TEST_3 = {
  id: 'ket-3-test3', title: 'KET for Schools 3 · Test 3', label: '官方真题 3 第3套', year: '2025', available: true,
  reading: {
    parts: [
      {
        part: 1, type: 'text_mcq', title: 'Part 1 · 短文选择', instructions: '阅读短消息或告示，选择正确答案。',
        questions: [
          { n:1, type:'notice', content:'Learn to draw and paint with this fantastic app!\nPerfect for beginners – kids or adults.\nFirst 8 weeks free, then £3 per month', question:'What does this notice say?', opts:['Children will need an adult to help them with this app.','You can try this app for two months before you have to pay.','This app is only good for people who have experience of computer art.'], ans:1, exp:'First 8 weeks free 表示前八周（约两个月）免费，之后才开始收费。' },
          { n:2, type:'message', from:'Steven', to:'Mark', content:"I've got to finish my art project for Mrs Green tonight so I can't go to badminton club. Next week will be fine.", question:'Why did Steven send this message?', opts:['to say Mark should finish the art project before playing badminton','to find out if Mark is going to badminton club next week','to say that he is not able to play badminton with Mark this evening'], ans:2, exp:'Steven 今晚要完成美术作业，因此不能和 Mark 去羽毛球俱乐部。' },
          { n:3, type:'notice', content:'School groups booked on museum tours must wait here while their teachers see receptionist.', question:'While school groups are waiting, what will their teachers do?', opts:['speak to a member of staff','go and pay for tickets','book a tour of the museum'], ans:0, exp:'老师要去见 receptionist，也就是和博物馆工作人员交谈。' },
          { n:4, type:'message', from:'Sue', to:'Isabel', content:"How about swimming at the lake tomorrow morning? Mum can take us. We'll be back before dinner. Ask your mother and ring me.", question:'Why did Sue write this message?', opts:['to suggest a day out at the lake',"to find out how they'll get to the lake", "to check how long they'll stay at the lake"], ans:0, exp:'Sue 提议第二天一起去湖边游泳，并说明了交通和返回时间。' },
          { n:5, type:'message', from:'Henry', to:'Patrick', content:"I've finished that book I borrowed from you. Do you want me to return it now, or can I lend it to my brother?", question:'What is Henry doing in this message?', opts:["explaining why he can't return Patrick's book",'checking if Patrick needs his book back immediately','asking Patrick to lend him another book'], ans:1, exp:'Henry 在确认 Patrick 是否需要他立刻归还这本书。' },
          { n:6, type:'email', from:'Mr Boyd', to:'Music students', content:'Workers will finish painting the music room on Friday after school, so we can have band practice there on Monday.', question:'What does this email say?', opts:['The workers are going to paint the music room next week.','The students will have a music lesson in the room on Friday.','The band can start using the music room on Monday.'], ans:2, exp:'油漆工作周五完成，因此乐队从周一开始可以使用音乐教室。' },
        ],
      },
      {
        part:2, type:'multiple_matching', title:'Part 2 · 多项匹配', instructions:'阅读三位学生在法国度假的经历，为每个问题选择 A、B 或 C。', preContext:'Marco、Jing 和 Tommy 介绍各自在法国度过的暑假。',
        passages:[
          {label:'A',name:'Marco',text:"Last June my family and I went to France for our summer holiday. We spent two weeks at a campsite in the south of the country, near Marseilles. There was a beach not too far away but it was very crowded so I spent nearly all my time at the campsite pool, which was much nicer. I met some French kids there and we had a great time together. I really need to work hard on my French though, so that next time it will be easier to talk to people."},
          {label:'B',name:'Jing',text:"I'd always wanted to visit France, so I was really excited when my parents told me we were going to the city of Caen in the north of the country for our summer holidays last year. There were some lovely beaches not far from the city and we also went to an attractive indoor market, which sold everything from fish to flowers. It was wonderful. However, the best thing we did was a one-day cooking course. I've never cooked anything before and it was really fun!"},
          {label:'C',name:'Tommy',text:"My family always spend our summer holidays in the south of France, and last year we stayed at a campsite on a beach near Arles. I loved swimming in the sea and in the campsite pool. I also enjoyed using my French when we went shopping at the local market. My school friends would be amazed! Because my mum and dad are artists, they wanted to visit a museum about the painter, Van Gogh. Usually I don't like museums, but actually this one was really interesting."},
        ],
        questions:[
          {n:7,text:'Who describes a market he visited?',ans:'B',exp:'Jing 描述了一个售卖鱼、鲜花等商品的室内市场。'},
          {n:8,text:'Who plans to improve his spoken French?',ans:'A',exp:'Marco 说自己需要努力学习法语，以便下次更容易和别人交流。'},
          {n:9,text:'Who was surprised he enjoyed a place his parents took him to?',ans:'C',exp:'Tommy 通常不喜欢博物馆，却发现梵高博物馆很有趣。'},
          {n:10,text:'Who preferred the pool to the beach?',ans:'A',exp:'Marco 觉得海滩太拥挤，营地泳池更好。'},
          {n:11,text:'Who made some new friends during his holiday?',ans:'A',exp:'Marco 在泳池认识了一些法国孩子。'},
          {n:12,text:'Who learnt how to do something new on his holiday?',ans:'B',exp:'Jing 参加了一日烹饪课，此前从未做过饭。'},
          {n:13,text:'Who says he liked practising his French?',ans:'C',exp:'Tommy 喜欢在当地市场购物时使用法语。'},
        ],
      },
      {
        part:3,type:'article_mcq',title:'Part 3 · 长文阅读',instructions:'阅读文章并选择正确答案。',articleTitle:'A fantastic business idea',
        passage:"When sisters Caroline and Isabel Bercaw were 11 and 12 years old, bath bombs (coloured balls that you add to your bath water to make it smell nice) suddenly became very popular. Caroline and Isabel often used them, especially after doing sports, and so did their friends. They all thought that the bath bombs made bath-time feel special.\n\nCaroline and Isabel got so interested in bath bombs that they looked online and found some instructions for how to make their own. Their first ones weren't great, but they practised until their bath bombs were perfect. Then they had the clever idea of adding a surprise in the centre of each one, such as a small toy or a piece of jewellery.\n\nWhen they had a big box of their new bath bombs, they agreed on a price, and then took them to a local market to find out if people wanted to buy them. The girls couldn't believe it when they sold all the bombs in just a few hours.\n\nAfter that, they began to work hard on their business. They had a lot to learn, and asked for help whenever they needed it. They spoke to their teachers at school, called business owners, and of course talked to their parents. Soon, they were selling their bath bombs in shops all over their home town.\n\nThe business continued to grow and is now a big success. The girls think this is because of the little gift inside each bath bomb. This made their bombs exciting and fun to use, especially for young people.",
        questions:[
          {n:14,text:'What do we learn about bath bombs from the first paragraph?',opts:['how often you should use them','where you can get them','why some people like them'],ans:2,exp:'第一段说明浴球能让洗澡变得特别，解释了人们喜欢它的原因。'},
          {n:15,text:'When Caroline and Isabel began making bath bombs, they',opts:["didn't enjoy doing it.","weren't very good at it.","couldn't find any instructions."],ans:1,exp:'她们最初制作的浴球不太好，后来通过练习才做到完美。'},
          {n:16,text:'What were the girls surprised about at the market?',opts:['how quickly they sold their bath bombs','how many other people were selling bath bombs','how much money customers were happy to pay for the bath bombs'],ans:0,exp:'她们难以置信的是所有浴球在几个小时内就卖完了。'},
          {n:17,text:'What do we learn about Caroline and Isabel in the fourth paragraph?',opts:['They wanted to find a business partner to work with.','It was difficult for them to get time off school.','They got advice from lots of different people.'],ans:2,exp:'她们向老师、企业主和父母等许多人求助。'},
          {n:18,text:'What is the writer doing in the final paragraph?',opts:['suggesting a way the girls could make their business better','saying what will happen to the business in the future',"explaining why the girls' business has done well"],ans:2,exp:'最后一段解释了生意成功是因为每个浴球内都有小礼物。'},
        ],
      },
      {
        part:4,type:'gap_fill_mcq',title:'Part 4 · 选词填空',instructions:'阅读短文，为每个空选择正确单词。',articleTitle:'Underwater post office',
        passage:"Each year, thousands of tourists visit a small island country called Vanuatu. It's in the South Pacific Ocean and is about 1,700 km east of Australia. In 2003, Vanuatu decided to [19] an unusual post office three metres under the sea in Mele Bay, which has a popular beach.\n\nPeople who want to use the underwater post office first write a message on a postcard. Then they use a [20] machine to cover their postcards in plastic. After that they swim to the underwater letter box to send their postcards home. All post is [21] from the post office by a diver at 3 p.m. each day.\n\nVisiting Vanuatu's underwater post office is a great [22] for tourists to see some of its local sea life. Japan, Norway and Malaysia have also [23] underwater post offices. Visitors who [24] to these areas have a lot of fun using them.",
        questions:[
          {n:19,opts:['start','begin','open'],ans:2,exp:'open a post office 表示开设一家邮局。'},
          {n:20,opts:['special','correct','perfect'],ans:0,exp:'需要使用特殊机器给明信片包上塑料。'},
          {n:21,opts:['collected','prepared','received'],ans:0,exp:'邮件每天由潜水员从邮局收取，使用 collected。'},
          {n:22,opts:['thing','way','event'],ans:1,exp:'a great way to do 是固定结构，表示做某事的好方法。'},
          {n:23,opts:['included','put','built'],ans:2,exp:'这些国家也建造了水下邮局，使用 built。'},
          {n:24,opts:['follow','travel','explore'],ans:1,exp:'travel to these areas 表示前往这些地区。'},
        ],
      },
      {
        part:5,type:'open_gap_fill',title:'Part 5 · 语法填空',instructions:'每个空填写一个单词。',example:{n:0,ans:'from',hint:"I'm 13 years old and I come [0] China."},
        passages:[{label:'Penfriend profile',text:"Hi everyone,\n\nMy name's Jiaxin. I'm 13 years old and I come from China. I joined this website because I'm looking [25] a penfriend. I'd love to meet someone I can write to in English.\n\nLet me tell [26] some things about myself. I live in Beijing, which is [27] capital city of China. My parents [28] both teachers in my school. We all travel there together every morning [29] bus.\n\nMy favourite hobbies are football, reading and playing computer games. [30] you'd like to make friends with me, please write back soon."}],
        questions:[
          {n:25,ans:['for'],exp:'look for 表示寻找。'},
          {n:26,ans:['you'],exp:'tell you something 表示告诉你一些事情。'},
          {n:27,ans:['the'],exp:'the capital city of 表示……的首都。'},
          {n:28,ans:['are'],exp:'主语 My parents 为复数，系动词使用 are。'},
          {n:29,ans:['by'],exp:'by bus 表示乘公交车。'},
          {n:30,ans:['If','if'],exp:'If 引导条件句，表示“如果你想和我交朋友”。'},
        ],
      },
    ],
    writing:[
      {part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:'You would like to go to the sports centre with your friend, Sam.\n\nWrite an email to Sam. In your email:\n• invite Sam to the sports centre\n• say when you would like to go\n• suggest an activity you can do there.\n\nWrite 25 words or more.',modelAnswer:"Hi Sam,\n\nWould you like to go to the sports centre with me this Saturday afternoon? We could play badminton there and then have a drink in the café. Please let me know if you can come.\n\nSee you,",tips:['邀请 Sam 去运动中心','说明想去的时间','建议一项可以一起做的活动','至少25词']},
      {part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.',imageSrc:'/images/ket/test3/writing/part7_story.svg',imageDesc:'一名男孩在书架找书；他打电话向朋友询问；朋友把一本书送到他家。',modelAnswer:'One afternoon, Leo wanted to read a particular book, but he could not find it on his shelf. He phoned his friend Ben and asked whether he had it. Ben found the book at his house and rode his bicycle to Leo’s home. Leo was very pleased when Ben gave it to him.',tips:['使用一般过去时','按找书、打电话、送书的顺序叙述','使用 but、so、when 等连接词','至少35词']},
    ],
  },
  speaking:{parts:[
    {part:1,title:'Part 1 · 个人问答',duration:'3–4 分钟',description:'回答个人信息问题，并围绕“听音乐”和“你的城市”展开。使用完整句子，长回答要交代时间、地点、人物和感受。',topics:[
      {id:'t3-s1-1',question:"What's your name? How old are you, and where do you live?",chineseHint:'介绍姓名、年龄和居住地',modelAnswer:"My name is Amy Li. I'm thirteen and I live in Hangzhou with my family. It's a beautiful city with a famous lake, and I've lived there all my life.",phrases:['My name is…',"I'm … years old",'I live in…','I have lived there for…']},
      {id:'t3-s1-2',question:'How often do you listen to music, and what do you do while you are listening?',chineseHint:'说明听音乐的频率以及同时会做什么',modelAnswer:"I listen to music every day, usually after school. I often play quiet music while I do my homework, but at weekends I listen to pop songs when I exercise.",phrases:['I listen to music…','while I…','At weekends…']},
      {id:'t3-s1-3',question:'Where do you listen to music, and how does it make you feel?',chineseHint:'说明听音乐的地点和感受',modelAnswer:"I usually listen in my bedroom or on the bus. Music makes me feel relaxed after a busy school day, and cheerful songs give me more energy.",phrases:['I usually listen…','It makes me feel…','after a busy day']},
      {id:'t3-s1-4',question:'Tell me about a day when you enjoyed listening to music with friends.',chineseHint:'描述一次和朋友一起欣赏音乐的经历',modelAnswer:"Last month, I went to my friend's birthday party. We played our favourite pop songs, sang together and danced for hours. Everyone knew the songs, so the party was exciting and I had a fantastic time.",phrases:['Last month…','We played… and…','I had a fantastic time']},
      {id:'t3-s1-5',question:'How big is your town, and what activities can you do there?',chineseHint:'介绍城市大小以及可以进行的活动',modelAnswer:"My city is quite large. There are several parks, sports centres and museums. Young people can go swimming, play basketball, visit the lake or go shopping in the city centre.",phrases:['My town is quite…','There are…','Young people can…']},
      {id:'t3-s1-6',question:'How long have you lived in your town, and when do you use buses there?',chineseHint:'说明居住时间以及何时乘公交车',modelAnswer:"I've lived here since I was born. I usually take the bus when I go to school or visit the city centre because it is cheap and convenient.",phrases:["I've lived here since…",'I take the bus when…','because it is…']},
      {id:'t3-s1-7',question:'Tell me about an interesting place you have been to in your town.',chineseHint:'描述城市里去过的一个有趣地点',modelAnswer:"An interesting place in my city is the science museum. I went there with my classmates last term. We tried interactive experiments and watched a film about space. I liked it because I learnt a lot while having fun.",phrases:['An interesting place is…','I went there with…','I liked it because…']},
    ]},
    {part:2,title:'Part 2 · 图片讨论',duration:'5–6 分钟',description:'围绕乒乓球、足球、电脑游戏、国际象棋和篮球，和同伴讨论是否喜欢以及原因。',topics:[
      {id:'t3-s2-1',theme:'Different games',themeZh:'不同的游戏',cardPrompts:['Is playing table tennis difficult?','Is watching football exciting?','Is playing computer games fun?','Is learning to play chess interesting?','Is playing basketball good for you?','Which game do you like best?','Do you prefer indoor games or outdoor games? Why?'],modelAnswer:"Table tennis can be difficult because the ball moves very quickly. Watching football is exciting when you support a team, and computer games are fun if you do not play for too long. Chess is interesting because it makes you think. Basketball is good exercise and helps you work in a team. I like basketball best and I prefer outdoor games because I enjoy fresh air.",phrases:['I think … because…','It can be…','I like … best','I prefer… because…','Do you agree?']},
    ]},
  ]},
};
