export const KET_EXAM_TEST_2 = {
  id: 'ket-3-test2', title: 'KET for Schools 3 · Test 2', label: '官方真题 3 第2套', year: '2025', available: true,
  reading: {
    parts: [
      {
        part: 1, type: 'text_mcq', title: 'Part 1 · 短文选择', instructions: '阅读短消息或告示，选择正确答案。',
        questions: [
          { n:1, type:'message', from:'Martine', to:'Ben', content:"I'll see you at the tennis centre later for our game. Did you say you booked for 5 or 6 o'clock?", question:'Why has Martine sent this message?', opts:['Martine is asking Ben where they are playing tennis later.','Martine is letting Ben know that she has changed her plans.','Martine is checking what time she will meet Ben.'], ans:2, exp:'Martine 已知道地点，发消息是确认预约在5点还是6点。' },
          { n:2, type:'notice', content:"New in store!\nGreat adventure stories for young adults\nSee ‘Teenage Books’: 1st Floor", question:'What does this notice say?', opts:['Some interesting books have just arrived.','There are books for teenagers on every floor.','Adventure stories are the most popular books.'], ans:0, exp:'New in store 表示新书刚到店；告示没有说每层都有，也没有比较销量。' },
          { n:3, type:'notice', content:'ABC Study App\n• Keep details in one place - including date to finish homework\n• No in-app advertisements\n• Share work with teachers and classmates', question:'The app helps students remember', opts:['which website they should use to do their homework.','when they need to complete their homework.','who may be able to help them with their homework.'], ans:1, exp:'应用会保存完成作业的日期，因此帮助学生记住截止时间。' },
          { n:4, type:'notice', content:'Greenhill Castle\nGuided tour 10 a.m.\n(not included in ticket price)\n12 people only', question:'What does this notice say?', opts:['There is a tour of the castle every hour.','Castle visitors have to pay extra to join a tour group.','Groups of more than 12 people must book tickets to enter the castle.'], ans:1, exp:'导览不包含在门票价格内，参加者需要另外付费。' },
          { n:5, type:'email', from:'Mr Blake', to:'Hockey Team', content:"If you're not at the stadium at 6 p.m. today for practice, you won't be able to play in Saturday's match.", question:'What is Mr Blake doing in this email?', opts:["giving the team information about Saturday's match","telling everyone in the team they must come to this evening's practice",'explaining that the hockey team is going to practise in a different place today'], ans:1, exp:'只有参加今晚6点训练的队员才能参加周六比赛，因此所有队员必须到场。' },
          { n:6, type:'message', from:'Daniel', to:'Lucy', content:"Grandma gave me the Race video game for my birthday, but I've already got it. Would you like it? I haven't used it.", question:'Why has Daniel written this message?', opts:['to check if Lucy has a video game he can borrow','to ask Lucy for her opinion of a video game',"to offer Lucy a video game he doesn't need"], ans:2, exp:'Daniel 已经有这款游戏，因此把未使用的新游戏送给 Lucy。' },
        ],
      },
      {
        part:2, type:'multiple_matching', title:'Part 2 · 多项匹配', instructions:'阅读三位学生的博物馆参观经历，为每个问题选择 A、B 或 C。', preContext:'Julia、Becky 和 Tania 介绍各自参观的博物馆。',
        passages:[
          {label:'A',name:'Julia',text:"Last week, I went to the Cartoon Museum with my mum. It's a small museum and we had to ask for directions because we got lost on our way there. When we finally got there, we walked around the various exhibitions, including one about the history of cartoons. The best part for me was joining a one-hour drawing class. An artist talked about his work and I did some cartoons of my own. It was a great little museum, but I saw most things, so I'm not planning to return."},
          {label:'B',name:'Becky',text:"I visited the Natural History Museum with my dad when I was younger, but this was my first visit on my own. I already knew about some of the stuff at the museum from lessons at school, but I was amazed at how much I enjoyed the exhibitions. My favourite one was the dinosaur exhibition. It was the busiest part of the museum and full of people, but I didn't mind that. I've been several times already, so I don't think I'll visit again."},
          {label:'C',name:'Tania',text:"I'm so glad my mum took me to the News Museum. It has exhibitions about the news and is different from most other museums because it's more about events than things. Unfortunately, I didn't have time to see everything, so I've already decided to go back. My favourite part was a special theatre showing short videos of interesting news reports. There was also an exhibition about photo-journalists and their work. I really enjoyed learning how they get such good pictures."},
        ],
        questions:[
          {n:7,text:'Who says that not many other museums are like the one she visited?',ans:'C',exp:'Tania 说新闻博物馆与大多数其他博物馆不同。'},
          {n:8,text:'Who plans to return to the museum?',ans:'C',exp:'Tania 没有时间看完，已经决定再去。'},
          {n:9,text:'Who says the museum was hard to find?',ans:'A',exp:'Julia 和妈妈途中迷路并问路。'},
          {n:10,text:'Who visited the museum alone?',ans:'B',exp:'Becky 说这是第一次独自参观。'},
          {n:11,text:'Who liked an exhibition about an interesting career?',ans:'C',exp:'Tania 喜欢关于新闻摄影师工作的展览。'},
          {n:12,text:'Who says she enjoyed taking part in an activity at the museum?',ans:'A',exp:'Julia 最喜欢参加一小时绘画课。'},
          {n:13,text:'Who says that one exhibition was more popular than the others?',ans:'B',exp:'Becky 说恐龙展是馆内最拥挤的部分。'},
        ],
      },
      {
        part:3,type:'article_mcq',title:'Part 3 · 长文阅读',instructions:'阅读文章并选择正确答案。',articleTitle:'Visiting the Kennedy Space Center in the USA',author:'16-year-old Sophie Timms describes her school trip',
        passage:"Earlier this year, my school in England decided to send a group of four students on a trip to the Kennedy Space Center in Florida, USA. I wanted to go but knew that many other students did too. I decided to put my name on the list of interested students and then forgot all about it. A few weeks later, I couldn't believe it when I heard I was in the group.\n\nOn the 10th of March, I flew from England to Florida with my classmates Toby, Alice, Chris and our teacher Mr Scott. At the Space Center there was so much to see and do, and we all took lots of photos. Mr Scott planned each day carefully. He also asked me to keep a blog of our experiences and Toby agreed to make a short film.\n\nI learnt so much. We met engineers and astronauts who explained a lot about space travel. It was brilliant to be around people who shared my love of space. They were really helpful and told me what I needed to do to get a job with a space project.\n\nWhen I got back to school, I had to give a talk about the trip to the other students. I enjoyed talking about the Space Center and was pleased that everyone liked my photos. I found it quite hard to remember everything I learnt about the planet Mars, however! My favourite part was answering students' questions at the end. It was fun sharing my experiences with everyone.",
        questions:[
          {n:14,text:'What do we learn about Sophie in the first paragraph?',opts:['She was worried about travelling so far.','She was surprised she was chosen to go on the trip.','She was pleased that not many students wanted to go on the trip.'],ans:1,exp:'Sophie 知道很多人报名，因此入选时难以置信。'},
          {n:15,text:'What did Sophie do during the visit?',opts:['She filmed a video.','She wrote about the trip.',"She chose the day's activities."],ans:1,exp:'老师让 Sophie 用博客记录旅行；Toby 拍短片，老师安排活动。'},
          {n:16,text:'What does Sophie say about the engineers she met?',opts:['They discussed their next trip to space.','They gave her advice about working on a space project.',"They wanted to change people's ideas about space travel."],ans:1,exp:'工程师告诉她参与太空项目工作需要做什么。'},
          {n:17,text:'What is Sophie doing in the last paragraph?',opts:['describing what happened when she returned',"giving information about an astronaut's work",'explaining how important her trip was'],ans:0,exp:'最后一段描述她返校后做报告的经历。'},
          {n:18,text:'What did Sophie enjoy most about the talk she gave?',opts:['telling the students about Mars','showing the students her photos',"answering the students' questions"],ans:2,exp:'她明确说最喜欢最后回答同学问题。'},
        ],
      },
      {
        part:4,type:'gap_fill_mcq',title:'Part 4 · 选词填空',instructions:'阅读白狼短文，为每个空选择正确单词。',articleTitle:'The white wolf',
        passage:'The white wolf, which is also [19] the Arctic wolf, lives in the Canadian Arctic and northern Greenland. For hundreds of years, people around the world have hunted and killed grey wolves, but because only a few people live near the Arctic, the [20] still has quite a [21] number of white wolves.\n\nWhite wolves are smaller than grey ones, and weigh between 45 and 85kg. They live alone or in packs with other wolves and [22] many kilometres a day to find food. When they are born, wolf pups have dark fur and their eyes are blue, but these [23] to a yellow-gold colour when the wolves are about 10 weeks old. [24], it is possible to find a few adult wolves with blue eyes.',
        questions:[
          {n:19,opts:['described','called','known'],ans:1,exp:'be called 表示“被称为”。'},
          {n:20,opts:['part','area','piece'],ans:1,exp:'the area 指北极地区。'},
          {n:21,opts:['large','tall','full'],ans:0,exp:'a large number of 是固定搭配。'},
          {n:22,opts:['travel','pass','make'],ans:0,exp:'travel many kilometres 表示行进许多公里。'},
          {n:23,opts:['take','change','become'],ans:1,exp:'change to a colour 表示变成某种颜色。'},
          {n:24,opts:['Especially','Instead','However'],ans:2,exp:'前句说通常会变色，后句补充仍有少数例外，使用 However。'},
        ],
      },
      {
        part:5,type:'open_gap_fill',title:'Part 5 · 语法填空',instructions:'每个空填写一个单词。',example:{n:0,ans:'for',hint:'Thank you [0] agreeing to be my penpal.'},
        passages:[{label:'Email from Miklos',text:"Thank you for agreeing to be my penpal. I would [25] to improve my English and writing to you will help.\n\nWhy don't I tell you a bit about myself? I'm 12, and I live in a flat in Budapest [26] my parents and my sister Adela. She is a year older [27] me, and we go to [28] same school.\n\nMy hobby is skiing and in winter I ski as much [29] I can. My parents often take me to Dobogókő, where there is a ski centre.\n\n[30] do you enjoy doing in your free time? Write back and let me know."}],
        questions:[
          {n:25,ans:['like'],exp:'would like to do 表示“想要做”。'},
          {n:26,ans:['with'],exp:'live with my parents 表示和父母同住。'},
          {n:27,ans:['than'],exp:'older than 是比较级结构。'},
          {n:28,ans:['the'],exp:'the same 是固定搭配。'},
          {n:29,ans:['as'],exp:'as much as I can 表示尽可能多。'},
          {n:30,ans:['What','what'],exp:'What do you enjoy doing? 询问喜欢做什么。'},
        ],
      },
    ],
    writing:[
      {part:6,type:'guided_writing',title:'Part 6 · 邮件写作',prompt:"Read the email from your English friend, Spencer.\n\nI've just got a great new game on my phone. It's called SurfzUp. What's your favourite game on your phone? Why do you like it? How often do you play it?\n\nWrite an email to Spencer and answer the questions. Write 25 words or more.",modelAnswer:"Hi Spencer,\n\nMy favourite phone game is Minecraft. I like it because I can build anything I imagine and play with my friends. I usually play it twice a week after finishing my homework.\n\nBest wishes,",tips:['回答最喜欢的游戏','说明喜欢的原因','说明玩游戏的频率','至少25词']},
      {part:7,type:'story_writing',title:'Part 7 · 看图写故事',prompt:'Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.',imageSrc:'/images/ket/test2/writing/part7_story.svg',imageDesc:'四名学生参加自行车比赛；比赛途中一名选手逐渐领先；最后领先的选手冲过终点，大家为他欢呼。',modelAnswer:'One sunny day, four friends entered a bicycle race. When the race started, they all cycled as fast as they could. After a while, one boy moved into the lead. Finally, he crossed the finish line first while the crowd cheered. He was tired but very happy to win.',tips:['使用一般过去时','按三幅图的顺序叙述','使用 after a while、finally 等连接词','至少35词']},
    ],
  },
};
