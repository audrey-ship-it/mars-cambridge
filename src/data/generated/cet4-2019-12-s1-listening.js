// 2019年12月第一套 CET-4 听力数据
// 答案：解析 PDF 逐题读图核对（p02-p06）；原文：解析 PDF 官方听力原文逐字转写；题目选项：原题 PDF 文字层（双栏错位已重新配对）
// verified: true
const LISTENING = {
  id: 'cet4-2019-12-s1',
  meta: {
    level: 'CET4',
    year: 2019,
    month: 12,
    set: 1,
    source:
      '原题：2019.12月四级真题第1套【可复制可划线查词】.pdf；音频：2019年12月四级听力第1套.mp3；原文：2019.12英语四级解析第1套.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2019-12-s1-a.mp3', // Section A 0-441.1s
    conv: '/audio/cet4-2019-12-s1-b.mp3', // Section B 441.1-873.8s
    pass: '/audio/cet4-2019-12-s1-c.mp3', // Section C 873.8-1259.1s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2019-12-s1-n1.mp3', // 0-160.4s
        transcript:
          'New York City police captured a cow on the loose in Prospect Park on Tuesday after the animal became an attraction for tourists while walking along the streets and enjoying the park facilities. The confused creature and camera-holding humans stared at each other through a fence for several minutes. At other times the cow wandered around the 526-acre park and the artificial grass field normally used for human sporting events. Officers used soccer goals to fence the animal in. However, the cow then moved through one of the nets, knocking down a police officer in the process. Police eventually trapped the cow between two vehicles parked on either side of a baseball field\'s bench area. An officer then shot an arrow to put it to sleep. Then officers waited for the drug to take effect. After it fell asleep, they loaded the cow into a horse trailer. It was not clear where the cow came from or how it got lost. Police turned it over to the animal control department after they caught it.',
        questions: [
          {
            n: 1,
            text: 'What happened in New York\'s Prospect Park on Tuesday?',
            options: [
              { letter: 'A', text: 'Many facilities were destroyed by a wandering cow.' },
              { letter: 'B', text: 'A wandering cow knocked down one of its fences.' },
              { letter: 'C', text: 'Some tourists were injured by a wandering cow.' },
              { letter: 'D', text: 'A wandering cow was captured by the police.' },
            ],
            answer: 'D',
          },
          {
            n: 2,
            text: 'What do we learn about the cow from the end of the news report?',
            options: [
              { letter: 'A', text: 'It was shot to death by a police officer.' },
              { letter: 'B', text: 'It found its way back to the park\'s zoo.' },
              { letter: 'C', text: 'It became a great attraction for tourists.' },
              { letter: 'D', text: 'It was sent to the animal control department.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2019-12-s1-n2.mp3', // 160.4-293.8s
        transcript:
          'Starting April 28th of this year, the National Museum of Natural History will begin renovating its fossil hall. The fossil hall, which displays some of the world\'s oldest and largest fossil specimens, receives more than 2 million visitors each year. It\'s one of the museum\'s most famous attractions. As a result, the museum plans to expand the hall as well as add to its ancient birds collection. Bird lovers, both young and old, have already responded with excitement at the news. The museum\'s social media account has been flooded with messages of support. In the meantime, the current collection will be closed. However, visitors will be compensated during the closure. Museum\'s special exhibition area will now be free of charge. This week the resident exhibition is a display of ancient wall paintings on loan from Australia. They celebrate the cultural heritage of the country and will be available to view until Sunday. Next week the exhibition will be taken over by the Wildlife Photographer of the Year Competition. The winner of this year\'s competition will be awarded a preview of the new fossil hall as well as a cash prize.',
        questions: [
          {
            n: 3,
            text: 'What does the news report say about the fossil hall of the National Museum of Natural History?',
            options: [
              { letter: 'A', text: 'It is the largest of its kind.' },
              { letter: 'B', text: 'It is going to be expanded.' },
              { letter: 'C', text: 'It is displaying more fossil specimens.' },
              { letter: 'D', text: 'It is starting an online exhibition.' },
            ],
            answer: 'B',
          },
          {
            n: 4,
            text: 'What is on display this week in the museum\'s resident exhibition hall?',
            options: [
              { letter: 'A', text: 'A collection of bird fossils from Australia.' },
              { letter: 'B', text: 'Photographs of certain rare fossil exhibits.' },
              { letter: 'C', text: 'Some ancient wall paintings from Australia.' },
              { letter: 'D', text: 'Pictures by winners of a wildlife photo contest' },
            ],
            answer: 'C',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2019-12-s1-n3.mp3', // 293.8-441.1s
        transcript:
          'Six birds have just been trained to pick up rubbish at a French historical theme park. According to the park\'s manager, Mr. Villiers, the goal is not just to clear up the park. He says visitors are already good at keeping things clean. Instead, he wants to show that nature itself can teach us to take care of the environment. He says that rooks, the chosen birds, are considered to be particularly intelligent. In the right circumstances, they even like to communicate with humans and establish a relationship through play. The birds will be encouraged to clean the park through the use of a small box that delivers a small amount of bird food each time the rook deposits a cigarette end or a small piece of rubbish. So far, visitors to the theme park have been excited to see the birds in action. However, some parents are concerned that it encourages their children to drop litter so they can watch the birds pick it up. Villiers is not concerned about this criticism. He maintains most of the feedback he has received has been overwhelmingly positive. He hopes now to train more birds.',
        questions: [
          {
            n: 5,
            text: 'What have six birds been trained to do at a French historical theme park?',
            options: [
              { letter: 'A', text: 'Pick up trash.' },
              { letter: 'B', text: 'Amuse visitors.' },
              { letter: 'C', text: 'Deliver messages.' },
              { letter: 'D', text: 'Play with children.' },
            ],
            answer: 'A',
          },
          {
            n: 6,
            text: 'Why were rooks chosen by the park manager?',
            options: [
              { letter: 'A', text: 'They are especially intelligent.' },
              { letter: 'B', text: 'They are children\'s favorite.' },
              { letter: 'C', text: 'They are quite easy to tame.' },
              { letter: 'D', text: 'They are clean and pretty.' },
            ],
            answer: 'A',
          },
          {
            n: 7,
            text: 'What is the concern of some parents?',
            options: [
              { letter: 'A', text: 'Children may be harmed by the rooks.' },
              { letter: 'B', text: 'Children may be tempted to drop litter.' },
              { letter: 'C', text: 'Children may contract bird diseases.' },
              { letter: 'D', text: 'Children may overfeed the rooks.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2019-12-s1-c1.mp3', // 441.1-671.8s
        transcript:
          'W: The name of the TV show we wish to produce is Science Nation. M: Please tell us more. What would Science Nation be about? W: It will be about science, all sorts of science. Each episode will focus on a different area of science, and tell us what we know, how we know it, and what we still don\'t know. The show will have one host only, and this will be Professor Susan Paul from Harvard University. She is a great public speaker. M: So, just be clear. Will the show\'s format be like that of a documentary? W: Kind of. It will be like a documentary in the sense that it will be non-fiction and fact-based. However, our idea is for it to be also fun and entertaining, something which traditional documentaries aren\'t so much. Please keep in mind this will be a new TV show like nothing ever done before. M: Okay, so it will be both educational and entertaining, and your audience will be anyone interested in science, right? W: That\'s correct. Yes. M: Right, thank you. So I think we\'re more or less clear what the show will be like. Could you please tell us now what exactly you want from us? W: Yes, of course. Basically what we need from you is financial support. In order to go ahead with this idea, we need two million dollars. This would cover the cost of making all 12 shows in the first season for the first year. If the show is a success, we can then look at making a second season for the following year.',
        questions: [
          {
            n: 8,
            text: 'What do we learn about the TV show Science Nation?',
            options: [
              { letter: 'A', text: 'It will be produced at Harvard University.' },
              { letter: 'B', text: 'It will be hosted by famous professors.' },
              { letter: 'C', text: 'It will cover different areas of science.' },
              { letter: 'D', text: 'It will focus on recent scientific discoveries.' },
            ],
            answer: 'C',
          },
          {
            n: 9,
            text: 'In what way will the TV show Science Nation differ from traditional documentaries?',
            options: [
              { letter: 'A', text: 'It will be more futuristic.' },
              { letter: 'B', text: 'It will be more systematic.' },
              { letter: 'C', text: 'It will be more entertaining.' },
              { letter: 'D', text: 'It will be easier to understand.' },
            ],
            answer: 'C',
          },
          {
            n: 10,
            text: 'Who will be the intended audience of the TV show Science Nation?',
            options: [
              { letter: 'A', text: 'People interested in science.' },
              { letter: 'B', text: 'Youngsters eager to explore.' },
              { letter: 'C', text: 'Children in their early teens.' },
              { letter: 'D', text: 'Students majoring science.' },
            ],
            answer: 'A',
          },
          {
            n: 11,
            text: 'What does the woman want the man to do for the TV show?',
            options: [
              { letter: 'A', text: 'Offer professional advice.' },
              { letter: 'B', text: 'Provide financial support.' },
              { letter: 'C', text: 'Help promote it on the Internet.' },
              { letter: 'D', text: 'Make episodes for its first season.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2019-12-s1-c2.mp3', // 671.8-873.8s
        transcript:
          'W: What\'s up with you? You don\'t look very happy. M: I feel like I\'m a failure. I can\'t seem to do anything very well. W: I wouldn\'t say that. You do very well in a lot of things. That presentation you gave last week was excellent. M: Yes, but I have this urge to strive for perfection. I really want to push harder and progress further. W: Well, that\'s very admirable. But be careful. Over-concern with being perfect can damage our confidence if we never achieve it. M: Yes, I know. I feel awful whenever I make a mistake in whatever I\'m trying to do. W: Well, think about it. You can\'t make progress without making mistakes and learning from them. Thomas Edison, the famous inventor, once said, "I\'ve not failed. I\'ve just found 10,000 ways that won\'t work." M: You may well be right. I guess I should recognize my mistakes and learn the lesson they teach me and move forward. W: Also, remember a successful ending is not the only thing worthy of a celebration. You need to recognize each step of progress you take towards achieving your goals, and no matter how tiny it is, it\'s still good news. M: I always feel down when I see others accomplishing things, and I feel miserable about my own achievements. I\'m always trying to be as good as others. But I never seem to get there. W: Listen, if you always compare yourself with others, you\'ll never feel good enough. You\'re the only person you should be comparing yourself with. When you compare your current status with the starting point, you\'ll find you\'ve made progress, right? That\'s good enough. M: That\'s great advice. Thank you. I\'m feeling better already.',
        questions: [
          {
            n: 12,
            text: 'How does the man feel about himself?',
            options: [
              { letter: 'A', text: 'Unsure.' },
              { letter: 'B', text: 'Helpless.' },
              { letter: 'C', text: 'Concerned.' },
              { letter: 'D', text: 'Dissatisfied.' },
            ],
            answer: 'D',
          },
          {
            n: 13,
            text: 'What does the woman think is the man\'s problem?',
            options: [
              { letter: 'A', text: 'He is too concerned with being perfect.' },
              { letter: 'B', text: 'He loses heart when faced with setbacks.' },
              { letter: 'C', text: 'He is too ambitious in achieving goals.' },
              { letter: 'D', text: 'He takes on projects beyond his ability.' },
            ],
            answer: 'A',
          },
          {
            n: 14,
            text: 'How does the man feel when he sees others accomplishing things?',
            options: [
              { letter: 'A', text: 'Embarrassed.' },
              { letter: 'B', text: 'Unconcerned.' },
              { letter: 'C', text: 'Miserable.' },
              { letter: 'D', text: 'Resentful.' },
            ],
            answer: 'C',
          },
          {
            n: 15,
            text: 'What does the woman suggest the man do?',
            options: [
              { letter: 'A', text: 'Try to be optimistic whatever happens.' },
              { letter: 'B', text: 'Compare his present with his past only.' },
              { letter: 'C', text: 'Always learn from others\' achievements.' },
              { letter: 'D', text: 'Treat others the way he would be treated.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2019-12-s1-p1.mp3', // 873.8-1085.5s
        transcript:
          'Single-sex education can have enormous benefits for female students. Numerous studies have shown that women who attend single-sex schools tend to have stronger self-confidence, better study habits and more ambitious career goals than women who attend coeducational schools. Girls who graduate from single-sex schools are three times more likely to become engineers than those who attend coeducational schools. The reason is that all-girls schools encourage women to enter fields traditionally dominated by men, such as science, technology and engineering. In coeducational schools, girls are often expected to succeed only in humanities or the arts. Research has also shown that in coeducational settings, teachers are more likely to praise and give in-depth responses to a boy\'s comments in class. In contrast, they might only respond to a girl\'s comments with a nod. They are also more likely to encourage boys to work through problems on their own, while they tend to step in and help girls who struggle with a problem. In an all-girls setting, girls are more likely to speak up frequently and make significant contributions to class than in a coeducational setting. Girls studying in a single-sex setting also earn higher scores on their College Board and Advanced Placement exams than girls who study in coeducational settings. All-girls schools tend to be smaller than coeducational schools, which means teachers will be able to tailor the materials to girl students\' personal learning styles and interest.',
        questions: [
          {
            n: 16,
            text: 'What advantage does the speaker say girls from single-sex schools have over those from coeducational schools?',
            options: [
              { letter: 'A', text: 'They have a stronger sense of social responsibility.' },
              { letter: 'B', text: 'They are more likely to succeed in the humanities.' },
              { letter: 'C', text: 'They are more likely to become engineers.' },
              { letter: 'D', text: 'They have greater potential to be leaders.' },
            ],
            answer: 'C',
          },
          {
            n: 17,
            text: 'What do teachers tend to do in coeducational settings?',
            options: [
              { letter: 'A', text: 'Praise girls who like to speak up frequently.' },
              { letter: 'B', text: 'Encourage girls to solve problems on their own.' },
              { letter: 'C', text: 'Insist that boys and girls work together more.' },
              { letter: 'D', text: 'Respond more positively to boys comments.' },
            ],
            answer: 'D',
          },
          {
            n: 18,
            text: 'What are teachers more likely to do in an all-girls school?',
            options: [
              { letter: 'A', text: 'Offer personalized teaching materials.' },
              { letter: 'B', text: 'Provide a variety of optional courses.' },
              { letter: 'C', text: 'Place great emphasis on test scores.' },
              { letter: 'D', text: 'Pay extra attention to top students.' },
            ],
            answer: 'A',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2019-12-s1-p2.mp3', // 1085.5-1259.1s
        transcript:
          'Today I found out that Seattle doesn\'t really get that much rain compared with most US cities. In fact, Seattle ranks 44th among major US cities in average annual rainfall. Cities that get more rainfall than Seattle include Houston, Memphis, Nashville, and pretty much every major city on the eastern coast, such as New York, Boston and Miami. So why does everyone think of Seattle as a rainy city? The primary root of this misconception lies in that Seattle has a relatively large number of days per year with rainfall compared with New York and Boston, which get an average of about 16% more rain per year than Seattle, but also average between them about 36 fewer days a year of rainfall. So it rains a lot less in Seattle, and the rain is spread out over more days than those cities. This is why few locals in Seattle carry an umbrella generally. When it does rain, it tends to be a very light rain. That isn\'t troublesome. It almost never really rains as most people think. On top of that, it never really storms in Seattle, either. Seattle gets an average of a mere seven days a year with thunder. So in short, if you like sunny but not too hot summers, mild winters but with lots of cloudy days, Seattle\'s the place to be. Anyway, if you visit Seattle, don\'t bring an umbrella. People will look at you, thinking you\'re funny.',
        questions: [
          {
            n: 19,
            text: 'What does the speaker find out about Seattle?',
            options: [
              { letter: 'A', text: 'It often rains cats and dogs.' },
              { letter: 'B', text: 'It seldom rains in summer time.' },
              { letter: 'C', text: 'It does not rain as much as people think.' },
              { letter: 'D', text: 'It is one of the most rainy cities in the US.' },
            ],
            answer: 'C',
          },
          {
            n: 20,
            text: 'Why do local people in Seattle seldom carry an umbrella?',
            options: [
              { letter: 'A', text: 'They drive most of the time.' },
              { letter: 'B', text: 'The rain is usually very light.' },
              { letter: 'C', text: 'They have got used to the rain.' },
              { letter: 'D', text: 'The rain comes mostly at night.' },
            ],
            answer: 'B',
          },
          {
            n: 21,
            text: 'What does the speaker say Seattle is a good place to be?',
            options: [
              { letter: 'A', text: 'It has a lot of places for entertainment.' },
              { letter: 'B', text: 'It has never seen thunder and lightning.' },
              { letter: 'C', text: 'It has fewer cloudy days than any other coastal city.' },
              { letter: 'D', text: 'It has mild weather both in summer and in winter.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2019-12-s1-p3.mp3', // 1259.1-1449.2s
        transcript:
          'After a tough workout or a day full of physical activity, it\'s common to find your muscles aching. But where do these pains come from? According to a German professor, the soreness comes from straining your muscles in an uncommon way, for example, jumping on a bicycle for a ride, because you haven\'t ridden in a long time. Soreness occurs since your leg muscles aren\'t used to that movement. When muscles perform an activity they aren\'t regularly exposed to, the tiny fibres that are inside them are being torn apart. As muscle soreness develops, the body has to work to repair the muscle tears. But this doesn\'t happen immediately. First, the body must realise the muscles are damaged. When the body realises the muscles are hurt, the response is to increase blood flow to the area and increase body heat. Damaged cells are then cleaned up and the body sends cells specially designed to break down the large muscle fibre fragments. Healing can take place after this. It takes about a day until these cells make it to your aching muscles. That\'s why there is most often a delay associated with muscle soreness. Repair of damaged cells takes about two days, and afterwards the soreness disappears. Unfortunately, there is little that can be done to relieve muscle soreness. Pain-relieving creams don\'t work, but a hot shower or warm bath can provide some relief.',
        questions: [
          {
            n: 22,
            text: 'What does the German professor say about muscle soreness?',
            options: [
              { letter: 'A', text: 'It occurs when people are doing a repetitive activity.' },
              { letter: 'B', text: 'It results from exerting one\'s muscles continuously.' },
              { letter: 'C', text: 'It happens when people engage in an uncommon activity.' },
              { letter: 'D', text: 'It comes from straining one\'s muscles in an unusual way.' },
            ],
            answer: 'D',
          },
          {
            n: 23,
            text: 'What happens when muscles are damaged according to the passage?',
            options: [
              { letter: 'A', text: 'Blood flow and body heat increase in the affected area.' },
              { letter: 'B', text: 'Body movements in the affected area become difficult.' },
              { letter: 'C', text: 'They begin to make repairs immediately.' },
              { letter: 'D', text: 'They gradually become fragmented.' },
            ],
            answer: 'A',
          },
          {
            n: 24,
            text: 'How long does it take for damaged cells to heal?',
            options: [
              { letter: 'A', text: 'About one week.' },
              { letter: 'B', text: 'About two days.' },
              { letter: 'C', text: 'About ten days.' },
              { letter: 'D', text: 'About four weeks.' },
            ],
            answer: 'B',
          },
          {
            n: 25,
            text: 'What does the speaker suggest one do to relieve muscle soreness?',
            options: [
              { letter: 'A', text: 'Apply muscle creams.' },
              { letter: 'B', text: 'Drink plenty of water.' },
              { letter: 'C', text: 'Have a hot shower.' },
              { letter: 'D', text: 'Take pain-killers.' },
            ],
            answer: 'C',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自听力原文，供校验与荧光笔高亮使用）
  answerQuotes: {
    1: ['New York City police captured a cow on the loose in Prospect Park on Tuesday'],
    2: ['Police turned it over to the animal control department after they caught it.'],
    3: ['the museum plans to expand the hall as well as add to its ancient birds collection.'],
    4: ['This week the resident exhibition is a display of ancient wall paintings on loan from Australia.'],
    5: ['Six birds have just been trained to pick up rubbish at a French historical theme park.'],
    6: ['He says that rooks, the chosen birds, are considered to be particularly intelligent.'],
    7: ['some parents are concerned that it encourages their children to drop litter so they can watch the birds pick it up.'],
    8: ['Each episode will focus on a different area of science'],
    9: ['our idea is for it to be also fun and entertaining'],
    10: ['your audience will be anyone interested in science'],
    11: ['Basically what we need from you is financial support.'],
    12: ['I feel like I\'m a failure. I can\'t seem to do anything very well.'],
    13: ['Over-concern with being perfect can damage our confidence'],
    14: ['I always feel down when I see others accomplishing things'],
    15: ['You\'re the only person you should be comparing yourself with.'],
    16: ['Girls who graduate from single-sex schools are three times more likely to become engineers'],
    17: ['teachers are more likely to praise and give in-depth responses to a boy\'s comments in class'],
    18: ['teachers will be able to tailor the materials to girl students\' personal learning styles and interest.'],
    19: ['Seattle ranks 44th among major US cities in average annual rainfall.'],
    20: ['When it does rain, it tends to be a very light rain.'],
    21: ['it never really storms in Seattle, either'],
    22: ['the soreness comes from straining your muscles in an uncommon way'],
    23: ['the response is to increase blood flow to the area and increase body heat'],
    24: ['Repair of damaged cells takes about two days'],
    25: ['but a hot shower or warm bath can provide some relief'],
  },
}

export default LISTENING
