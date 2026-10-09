// FCE Writing (Paper 2) — 8 mock tests from 《FCE 8套全真模拟试题》
// 题面逐字转录自题册 Writing 页；modelAnswer 逐字转录自 Answer Key and Transcripts 的 Model answers（保留原文拼写与标点）。

export const fceWritingTests = [
  {
    meta: {
      id: 'fce-mock-1-writing',
      title: 'FCE 全真模拟试题 1 · Writing',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '12',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.162–163)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 必答议论文',
        instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
        type: 'essay',
        context: 'In your English class you have been discussing school rules. Now, your English teacher has asked you to write an essay. Write your essay using all the notes and give reasons for your point of view.',
        prompt: 'Some schools make children wear a school uniform. Do you think this is a good thing or not?',
        notes: ['fashion and identity', 'comfort', '.................. (your own idea)'],
        wordRange: '140–190',
        modelAnswer:
          "Opinion is divided as to whether uniforms should be worn in schools. Given the choice, most children would probably not wear one. However, the arguments for wearing uniforms are quite convincing.\n\n" +
          "Those opposed to uniforms argue that clothes are a form of self-expression. What we wear and how we wear it, shows who we are as individuals. Therefore, making children dress alike prevents them from expressing themselves through what they choose to wear.\n\n" +
          "Another reason why people are against uniforms is that they are often uncomfortable. Ties and jackets can restrict movement whilst the material of blouses or shirts can be stiff and scratchy.\n\n" +
          "However, wearing a uniform has several advantages. Every child, rich or poor, wears the same, so children from poorer families are not bullied for wearing cheaper clothing. In addition, uniforms encourage good behaviour as they identify the wearer with their school name.\n\n" +
          "Since maintaining discipline and the prevention of bullying are more important than self-expression through clothing, I think uniforms should be worn in schools. It would benefit both teachers and students alike.",
      },
      2: {
        title: 'Part 2 · 三选一',
        instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
        type: 'choice',
        tasks: [
          {
            q: 2,
            genre: 'article',
            context: 'You see this advert on an English-language website.',
            boxTitle: 'Articles wanted',
            prompt:
              "We are looking for articles about the best pieces of technology.\n\nWhat do you think the best piece of technology is?\nTell us about it – describe it and explain why you think it is so good.\nThe best articles will be published on our page next week.",
            taskLine: 'Write your article.',
            modelAnswer:
              "I'm not really into technology. However, there has completely transformed my life. It's a virtual computer-generated personal assistant, more commonly known as Alexa.\n\n" +
              "Unlike a normal computer programme, Alexa works using voice control. You simply ask questions or give commands out loud to the device Alexa is connected to, and Alexa responds. The device can hear you from a distance of several metres. It's great as you can ask Alexa to perform lots of different tasks in the house. This is because Alexa can control other smart devices in the home like lights and electrical equipment. You can get really lazy if you have Alexa in your home!\n\n" +
              "It is definitely the best piece of technology as I possess. It just makes my life so much easier as I can do tasks much more quickly with Alexa's help. I think it's also very useful for people who are disabled and find it difficult to move around and do things by themselves. Alexa can make these people much more independent.\n\n" +
              "Maybe there will be better gadgets produced in the future. However for now, I can't live without Alexa!",
          },
          {
            q: 3,
            genre: 'review',
            context: 'You see this announcement in an English-language newspaper.',
            boxTitle: 'Reviews wanted',
            boxHeading: 'Local Attractions',
            prompt:
              "We are looking for reviews of a local attraction where you live. Your review should include information about the attraction and what you liked or didn't like about it.\nWould you recommend it to other teenagers?\nThe best reviews will be published in this paper next month.",
            taskLine: 'Write your review.',
            modelAnswer:
              "I'm lucky to live in the Italian city of Verona, famous for its various beautiful buildings. However, the attraction which really stands out for me is Juliet's balcony.\n\n" +
              "The balcony is part of a traditional town house in the city centre. Whilst the house itself dates back to the 13th century, the balcony is a recent 20th century addition. It's said to be where Shakespeare's fictional character, Juliet, spoke to her lover, Romeo.\n\n" +
              "I like the idea of such a romantic venue even if it is not based on a real-life story. It's a great place to take photos and you can even get themed souvenirs from the gift shop in the courtyard.\n\n" +
              "The only real drawback of the attraction is that it's a real tourist magnet. It can get very crowded in the summer and you may not get good photos of the balcony as a result. Nevertheless, it's a great place for teenagers, especially romantic ones, to visit with their boyfriend or girlfriend and take a souvenir photo standing beneath the famous balcony.",
          },
          {
            q: 4,
            genre: 'letter',
            context: 'You have received a letter from your English-speaking penfriend.',
            prompt:
              "Hi Annie,\n\nI was wondering if I could ask you something. My class is doing a project on the local environment and ways we can help it. What about the place where you live? What could you and your friends do to look after the environment? How would these things make a difference to the area?\n\nThanks for the help,\nPaul",
            taskLine: 'Write your letter.',
            modelAnswer:
              "Hi Paul,\n\nI was interested to hear about your project. As you know, I'm very keen on conservation and I'd like to do my bit too.\n\n" +
              "Living in a city, I can see the impact we have on the environment – traffic pollution, litter everywhere and too few green areas for wildlife. Although the situation is bad, everyone can help to reverse the damage being done. Since the year dot, I have been walking instead of taking the bus whenever possible to help reduce pollution and managed to persuade my friends to develop the same habit. I have also asked them to join me in recycling plastic to help reduce litter and plastic pollution. I might even join a volunteer group to collect rubbish from the beach and get my friends to sign up to a clean-up session with me. Another thing I might do is to plant flowers in my garden to attract butterflies and bees and convince my friends to do the same.\n\n" +
              "Anyway, that's a good start, I think. I hope your project goes well. Keep me up to date on how it goes!\n\nAnnie",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-2-writing',
      title: 'FCE 全真模拟试题 2 · Writing',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '31',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.168–169)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 必答议论文',
        instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
        type: 'essay',
        context: 'In your English class you have been discussing endangered species. Now, your English teacher has asked you to write an essay. Write your essay using all the notes and give reasons for your point of view.',
        prompt: 'Many animal species are under threat and in danger of becoming extinct. Do you think anything can be done to help these animals?',
        notes: ['human impact', 'conservation organisations', '.................. (your own idea)'],
        wordRange: '140–190',
        modelAnswer:
          "Time is running out for many animal species. The natural world is under constant threat from the impact of industrialisation and our general disregard for the environment.\n\n" +
          "At the moment we are polluting the land, sea and air and endangering both marine life and wildlife. Factories emit toxic gases into the air and release chemical waste into waterways, whilst traffic pollutes the air around us. In addition, households and individuals discard litter, particularly plastic bottles and packaging, which can kill marine life.\n\n" +
          "Luckily, organisations are trying to reverse the damage done by human to the natural habitat. Many of them, for instance, organise beach clean-ups or activities like tree planting to claim back the land for wildlife.\n\n" +
          "However, I believe that the key to conservation is education. We need to tell children to respect the environment and wildlife. By doing this, environmental projects will have a greater impact because the fate of the world will be determined by future generations.\n\n" +
          "In conclusion, I think that all is not yet lost for endangered species. However, we must act now before it is too late to save them from extinction.",
      },
      2: {
        title: 'Part 2 · 三选一',
        instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
        type: 'choice',
        tasks: [
          {
            q: 2,
            genre: 'story',
            context: 'You have seen this announcement in an international magazine for teenagers.',
            boxTitle: 'Stories wanted',
            prompt: 'Write a story for our magazine. Your story must begin with this sentence:',
            begin: 'I knew it was going to be a long and difficult journey.',
            mustInclude: ['a car', 'a surprise'],
            taskLine: 'Write your story.',
            modelAnswer:
              "I knew it was going to be a long and difficult journey. We had been up since dawn preparing for the 12-hour drive to the mountains. As we set off in our car, I began to think about recent events.\n\n" +
              "It was only a week ago that we received news of my grandmother's death. Now we were driving to her village to collect her belongings and tidy the house. As we drove, my parents were very quiet and the journey seemed to take forever. Motorways became small roads and the view changed from an urban landscape to a rural one as we approached our destination.\n\n" +
              "It had been a long, boring journey. However, driving up the narrow, winding mountain road to grandma's house, we had a huge surprise. There was smoke coming out of the chimney!\n\n" +
              "We drove up to the house quickly and knocked on the door. We had an even bigger surprise when it was opened by my nephew. I hadn't seen him for five years! He had heard the news and come to help us. Despite the sadness of the occasion, a difficult day had a happy ending!",
          },
          {
            q: 3,
            genre: 'article',
            context: 'You have seen this advert in an English-language magazine for teenagers.',
            boxTitle: 'Articles wanted',
            prompt:
              "We are looking for articles about historical figures.\n\nDo you admire anyone from history?\nTell us about him / her – describe him / her and explain why him / her is historically important.\nThe best articles will be published in our next issue.",
            taskLine: 'Write your article.',
            modelAnswer:
              "There have been so many influential people who have made history. However, Florence Nightingale is someone who particularly made an impression on me.\n\n" +
              "She was born in 1820, in the Italian city of Florence, after which she was named, but she is better known as the 'Lady of the Lamp'. She was very caring and early on in her life she was determined to help sick people, so she trained as a nurse. This was an unusual profession in that period for a woman from such a good family.\n\n" +
              "Not long after she received her nursing qualification, she was sent to Turkey to help British soldiers during the Crimean War. When she arrived, she was shocked at the medical facilities there. She worked hard to improve the standards of hygiene in the hospitals and train the nurses. It is because of Florence that hospitals today provide much better treatment and care.\n\n" +
              "Florence was always brave and didn't care about what others thought of her. What she wanted was to do her best and help people in need. For all these reasons, I admire her and respect her as a person.",
          },
          {
            q: 4,
            genre: 'email',
            context: 'You have received this email from your English-speaking friend, Monica.',
            prompt:
              "From: Monica\nSubject: Need help\n\nCould you help me organise a party before my brother moves to Australia? I'd definitely like to have a big surprise party but I'm not sure where. Any ideas? I'm also stuck on ideas for a present. Do you think he'd like a book?\n\nThanks,\nMonica",
            taskLine: 'Write your email.',
            modelAnswer:
              "Hi Monica,\n\nI love to help you out with the party. You know that I enjoy organising things, especially fun events like birthday parties! As your brother is very sociable, I'm sure he'd like to have a big party with lots of his friends around. Why don't you use my house as a party venue, since I have a pool? I suggest inviting everyone for a barbecue around lunchtime and then people can stay and chill out by the pool afterwards or have a swim. I'll ask my friend Dave who's a DJ if he could provide the music. It would be great if we could get him, as he's worked as a DJ in Ibiza!\n\n" +
              "Also, you asked for advice about a present. To be honest I don't think your brother would appreciate a book – he's never really been into reading. I'd suggest instead getting him something practical, like a watch instead.\n\n" +
              "Anyway, hope those ideas helped! Tell me what you decide to do.\n\nLove,\nJackie",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-3-writing',
      title: 'FCE 全真模拟试题 3 · Writing',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '50',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.173–174)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 必答议论文',
        instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
        type: 'essay',
        context: 'In your English class you have been talking about the benefits of team sports for young people. Now, your teacher has asked you to write an essay. Write your essay using all the notes and give reasons for your point of view.',
        prompt: "'Team sports offer a lot to young people.' Do you agree?",
        notes: ['teamwork / social skills', 'achieving something / confidence', '...................... (your own idea)'],
        wordRange: '140–190',
        modelAnswer:
          "At school, young people are encouraged to take part in team sports because such sports involving teamwork have a positive impact on personal development and mental health.\n\n" +
          "With regard to personal development, it has been shown that team sports are helpful for people to develop social skills like co-operation and communication. We need such skills to work in a team towards a common aim, namely scoring goals or points. And these skills can then be transferred to the workplace later on.\n\n" +
          "The impact of team sports on mental health is also quite considerable. Winning as a team or overcoming obstacles in a game, gives players a sense of achievement. This can help boost confidence and self-esteem, which is particularly important for young people who are still finding their way in the world and need to be encouraged.\n\n" +
          "In addition, being in a team creates a sense of identity and belonging. Many young people, especially teenagers are still discovering who they are, and staying with others in a team gives them emotional security.\n\n" +
          "All in all, team sports play a vital role in the lives of young people, from both a social and psychological point of view.",
      },
      2: {
        title: 'Part 2 · 三选一',
        instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
        type: 'choice',
        tasks: [
          {
            q: 2,
            genre: 'article',
            context: 'You have seen the following announcement in an international magazine for teenagers.',
            boxTitle: 'Articles wanted',
            prompt:
              "We are looking for articles about sports events.\n\nHave you ever been to a really enjoyable sports event?\nTell us about it – describe the event and explain why it was so enjoyable.\nThe best articles will be published in our next issue.",
            taskLine: 'Write your article.',
            modelAnswer:
              "I'm not really a sports fan, so I rarely go to sports events. However, I made an exception last year to attend a charity football match.\n\n" +
              "I thought I'd go along and support it, as it was for a good cause. I didn't expect to find it interesting, so I'd decided beforehand to leave at half-time if I was bored.\n\n" +
              "In the end though, I enjoyed it from start to finish! It was really entertaining as it was very different from any match I'd ever been to before. For a start, the players were all wearing a fancy dress. I laughed a lot as you don't often see someone in a giant chicken costume or dressed as a superhero, running around after a football! Also, there was a great atmosphere among the spectators. I suppose it was because the match was about having fun rather than being a serious competition. Everyone cheered loudly whenever someone scored a goal, which wasn't often, as most players weren't very skilled at the game.\n\n" +
              "What made the day especially memorable, however, was the brilliant sunshine throughout the game. It just made everything more enjoyable and relaxing.",
          },
          {
            q: 3,
            genre: 'letter',
            context: 'You have received a letter from your English-speaking pen friend.',
            prompt:
              "Can you help me with a school project? I have to write about sport and leisure activities for teenagers. Can you tell me what leisure facilities you have in your neighbourhood? And also what do you do in your free time?\n\nThanks,\nSally.",
            taskLine: 'Write your letter.',
            modelAnswer:
              "Hi Sally,\n\nOf course I'll help you with your project. Well, to start with, there's quite a lot for young people to do in my area. For anyone who likes sport, there's a huge sports stadium 10 minutes' away from where I live. It has two large outdoor tennis courts, a football pitch and an indoor swimming pool. We also have a park where young people go to play ball games or just hang out with their friends.\n\n" +
              "There are also a couple of small cafes near the park, all of which have an attractive seating area outside where young people can meet friends for coffee and a chat. Other than that, there's not much else to do for young people in my neighbourhood. As you know, I live in the suburb. There's much more to do downtown. That's why I spend my free time meeting friends in local cafes or the park during weekdays, but go into town at the weekend to go shopping or watch a film with friends at the cinema.\n\n" +
              "Well, I hope the information above is helpful. Write back if there's anything else you'd like to know.\n\nLucinda",
          },
          {
            q: 4,
            genre: 'story',
            context: 'You have seen this announcement in an international magazine for young people.',
            boxTitle: 'Stories wanted',
            prompt: 'We are looking for stories for our new English-language magazine for young people. Your story must begin with this sentence:',
            begin: 'Paul took a deep breath and stepped forward.',
            mustInclude: ['a challenge from a friend', 'a winner'],
            taskLine: 'Write your story.',
            modelAnswer:
              "Paul took a deep breath and stepped forward. Far below him he could see other children swimming in the pool, having fun. However, Paul had never felt so afraid in his life.\n\n" +
              "His friend, Jules had challenged him to dive from the highest diving board. The one that was 10 metres high. Jules himself had tried to dive from it earlier, but failed. He had reached the edge before turning back.\n\n" +
              "Paul didn't quite understand how he had got to this point. He was really a coward by nature. But for some reason he wanted to win the bet with Jules and proved that he could dive from a greater height than him.\n\n" +
              "Slowly, he moved closer and closer to the edge of the board. He stopped. He couldn't do it. No! He really couldn't. But then the thought of Jules laughing at him for not being brave enough made him suddenly run towards the edge of the board.\n\n" +
              "Before he realised it, Paul was flying through the air, the surface of the water rushing up to meet him. As his face appeared again above the water, Paul had a huge grin on his face. He'd done it!",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-4-writing',
      title: 'FCE 全真模拟试题 4 · Writing',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '69',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.179–180)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 必答议论文',
        instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
        type: 'essay',
        context: 'In your English class you have been talking about what people can learn from travelling abroad. Now, your English teacher has asked you to write an essay. Write your essay using all the notes and give reasons for your point of view.',
        prompt: "'People can learn a lot from travelling abroad.' Do you agree?",
        notes: ['coping with a foreign language', 'different cultures', '.................... (your own idea)'],
        wordRange: '140–190',
        modelAnswer:
          "When you travel abroad, there are always so many new experiences to enjoy. Everything is novel and exciting. It is a great opportunity to broaden your horizons.\n\n" +
          "However, you will also come across lots of challenges, among which having to communicate in a foreign language is obviously the biggest one. Most people at least end up learning a few basic phrases of the target language when they are abroad. Despite struggling to communicate at the very beginning, you can learn alternative ways of expressing yourself, for example, by using gestures or facial expressions. And that's very important for the rest of your life!\n\n" +
          "Meeting people with different views and beliefs is also a great experience. By speaking and living even for a short time with people from another culture, you can learn to see things from a different point of view.\n\n" +
          "Most importantly, travelling abroad can make you more independent. Nothing is the same as back home, so you have to continually adapt to new situations. You have to make your own decisions and take responsibility for them.\n\n" +
          "To sum up, travelling abroad can be a great experience of learning in many ways. However, you must be open to new challenges in order to benefit from being abroad.",
      },
      2: {
        title: 'Part 2 · 三选一',
        instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
        type: 'choice',
        tasks: [
          {
            q: 2,
            genre: 'article',
            context: 'You have seen this announcement in an international magazine for teenagers.',
            boxTitle: 'Articles wanted',
            prompt:
              "We're looking for articles about journeys of a lifetime.\n\nHave you, or a member of your family, ever been on a particularly memorable journey?\nTell us about it — describe the journey and explain why it's so memorable.\nThe best articles will be published in our next issue.",
            taskLine: 'Write your article.',
            modelAnswer:
              "I will never forget my journey from Tunis, the northern capital of Tunisia, to Douz in the south. In that 14-hour coach trip I travelled a distance of 540km, bound for a remote town on the edge of the Sahara desert.\n\n" +
              "The night before the journey I hadn't slept, due to a delayed flight from the UK. As a result, I hardly noticed anyone as I sat in my seat and tried to stay awake. I remember waking and sleeping on the journey and seeing amazing sites when I did open my eyes – men dressed in long white tunics sitting by the roadside under palm trees, donkeys and cows wandering around the streets, whitewashed houses with flat roofs and inviting shady courtyards.\n\n" +
              "We stopped at three places on the way – a traditional village dug into a soft sandstone cliff, an ancient amphitheatre and a rather ordinary restaurant obvioussly catering for tourists.\n\n" +
              "It was night when we finally arrived at Douz. Just as we were driving into the town, a group of boys rode past us on camels. That was the moment I realised I'd truly been transported to another world.",
          },
          {
            q: 3,
            genre: 'email',
            context: 'You have received this email from your English-speaking friend, David.',
            prompt:
              "From: David\nSubject: Holiday plans\n\nHi, I'm thinking about going to your country for a holiday next summer. Can you recommend an interesting place for me to visit? Also, could you tell me the best way to travel there from the airport?\n\nHope you are well.\nDavid",
            taskLine: 'Write your email.',
            modelAnswer:
              "Hi David,\n\nI'm glad you're coming to France. It's a great holiday destination!\n\n" +
              "Honestly, it's difficult to recommend somewhere to visit as there are so many interesting places to see. However, if I had to choose one, it would be Carcassonne – a very unique place to visit.\n\n" +
              "The city is divided into an old and a new part. However, it's actually the old city that's worth visiting since the modern part is rather ordinary. You couldn't get a bigger contrast anywhere else – the old city is located within a medieval castle built on a hill and the modern city below is just an ordinary suburb.\n\n" +
              "When you enter the old city, you will realise there's nothing quite like it. There are lots of beautiful shops and cafés built into the castle walls surrounding the city. You can even spend a morning walking around the walls admiring the view or take a ride in a horse and carriage.\n\n" +
              "Carcassonne is easy to get to and there are many buses and trains to the city from nearby airports. Nevertheless, I suggest flying to Toulouse and getting the shuttle bus to Carcassonne.\n\n" +
              "I hope that's helped.\n\nAlan",
          },
          {
            q: 4,
            genre: 'story',
            context: 'You have seen this announcement in an international magazine for young people.',
            boxTitle: 'Stories wanted',
            prompt: 'Write a story for our magazine. Your story must begin with this sentence:',
            begin: 'Isabel started to walk up the steps to the plane.',
            mustInclude: ['an unexpected invitation', 'meeting someone for the first time'],
            taskLine: 'Write your story.',
            modelAnswer:
              "Isabel started to walk up the steps to the plane. She was wondering if she had made the right decision. She had never been abroad alone before.\n\n" +
              "On entering the plane she noticed that there weren't many passengers travelling that afternoon, which made her happy. However, when a large elderly gentleman sat next to her, she felt annoyed. She had hoped she wouldn't have to sit next to someone else on the flight.\n\n" +
              "To her surprise, she soon calmed down when the man gave her a huge smile. Not long after, they began to chat and by the time the plane was in the air, they were getting on well.\n\n" +
              "It turned out that the man was the owner of a language school. He was returning home after visiting family. Isabel started asking questions about the school and what it was like to live in his country. She explained that she was going on holiday but wasn't sure how long she was going to stay.\n\n" +
              "Suddenly, the man turned to her and asked if she had ever thought about teaching English. Isabel smiled as she thought to herself 'My life is about to change, and for the better'.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-5-writing',
      title: 'FCE 全真模拟试题 5 · Writing',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '88',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.184–185)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 必答议论文',
        instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
        type: 'essay',
        context: 'In your English class you have watched a documentary about young children in poor areas who leave school to work. Now your English teacher has asked you to write an essay. Write an essay using all the notes and give reasons for your point of view.',
        prompt: 'Some teenagers are dropping out of school to find a job. How can we help them to continue their education?',
        notes: ['family problems', 'financial difficulties', '............ (your own idea)'],
        wordRange: '140–190',
        modelAnswer:
          "Lots of teenagers today are deciding to leave school early and get work. Financial difficulty and family problems are two main reasons why they leave school.\n\n" +
          "Poor families cannot give their children financial support to pave their way to school. Such children have to drop out and start working as soon as they are old enough. This is the case even for the children who are really intelligent.\n\n" +
          "Other children find it impossible to stay at school when there are problems with their families. When their parents are shouting at each other, for instance, it's hard for them to concentrate on study, and hence of many think that it is better to get a job to get away from it all.\n\n" +
          "I am convinced that children should be encouraged to continue with their study. On the one hand, poor children who want to study and are intelligent enough should be granted scholarships. On the other hand, children who are stuck in family discord should have access to help and support by professionals.\n\n" +
          "In conclusion, teenagers may have several problems with staying at school, but I believe that if help is given, then it can make a big difference.",
      },
      2: {
        title: 'Part 2 · 三选一',
        instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
        type: 'choice',
        tasks: [
          {
            q: 2,
            genre: 'review',
            context: 'You see this advert in an international music magazine:',
            boxTitle: 'Reviews wanted',
            boxHeading: 'A show to remember',
            prompt:
              "We are looking for reviews of a musical show for teenagers that you have recently attended.\nYour review should include information about the plot, the characters, the music and the setting. Would you recommend this show to other people your age?\nThe best reviews will be published in next month's issue.",
            taskLine: 'Write your review.',
            modelAnswer:
              "I recently went to see a production of \"Mamma Mia\" in London's West End and was delighted that it lived up to all the hype.\n\n" +
              "It is really a show for people who don't like musicals! It is packed with ABBA's hits which are worked into the central love story set on a mythical Greek island. It is a real feel-good musical that has everyone dancing along to the tunes in the theatre!\n\n" +
              "The plot is simple but effective. Sophie, a young girl about to be married wants her father present at the wedding but neither she nor her mother, Donna, knows the father's real identity. Since there are 3 possible candidates, this leads to comic situations, making for a really entertaining story. But it's also about a search for truth and hope against the odds and I think that's why the story captivates the audience so much.\n\n" +
              "All the characters are well-portrayed, but Donna is central to the theme and the most memorable, in her comic character, who also sings some of the best songs in the show.\n\n" +
              "It's a fantastic show for all ages and is not to be missed!",
          },
          {
            q: 3,
            genre: 'article',
            context: 'You recently saw this notice in an international magazine for teenagers called Travelling the World.',
            boxTitle: 'Articles wanted',
            prompt:
              "We are seeking readers' articles about a memorable holiday they have taken.\n\nWe want to know where you went and what it was like, what you did there and what made it memorable.\nWe will publish the most interesting articles in our next issue!",
            taskLine: 'Write your article.',
            modelAnswer:
              "I will never forget my holiday to Iceland. It was a very unique place.\n\n" +
              "I did many amazing things there. In the northwest I camped on an island that was so small that I could walk all around it in an afternoon. There was a fishing village, inhabited only in the summer. I camped right by the ocean, and I remember watching hundreds of jellyfish floating by. On the mainland, I visited a village with a glacier in the mountains above and waterfalls tumbling off the cliffs into the ocean below. It was shockingly beautiful. On the south coast I camped next to a gigantic roaring waterfall, and then on a beach with dramatic cliffs and sand made up of small black perfectly round pebbles.\n\n" +
              "The thing that made it so memorable was that it was nothing like any other place I had ever been to. Not only was the environment breathtaking, but the people's manners were refreshingly different, plus getting around on public transport was challenging. Besides, because Iceland was so far north, it was light almost all night!\n\n" +
              "I hope to go back one day, and if I do, I will travel by bicycle!",
          },
          {
            q: 4,
            genre: 'email',
            context: 'You have received an email from your English-speaking friend, Jens.',
            prompt:
              "Can you help me with my sister's birthday party? I have to get everything ready but I still don't know where to have it. Can you tell me about a place that would be ideal for a party? Also, what should we do as for activities? Any ideas?\n\nWrite soon,\nJens",
            taskLine: 'Write your email.',
            modelAnswer:
              "Hi Jens,\n\nI think it's so nice of you to throw a birthday party for Emily! You're a great big sister!\n\n" +
              "I've been thinking about what you asked and trying to recall what I liked when I was twelve. Do you know what is in my mind? I think she would love it if you threw her a dance party! You could have it at your home, where you can be sure it's safe and age-appropriate.\n\n" +
              "You could get one of your friends to be the DJ, and you could set up a room with lots of colourful fairy lights and make a really nice atmosphere! I think it would make her feel grown-up! Does she like fancy dress? If so, you could have a theme party – something like 70s disco. I would have loved that when I was twelve.\n\n" +
              "Let me know what you decide to do!\n\nJulia",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-6-writing',
      title: 'FCE 全真模拟试题 6 · Writing',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '107',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.190–191)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 必答议论文',
        instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
        type: 'essay',
        context: 'In your English class you have been talking about air pollution in city centres. Now, your English teacher has asked you to write an essay. Write an essay using all the notes and give reasons for your point of view.',
        prompt: 'Keeping the air quality in city centres at healthy levels for their residents is a concern for many places. How can we solve the problem of air pollution in city centres?',
        notes: ['cars', 'factories', '.......... (your own idea)'],
        wordRange: '140–190',
        modelAnswer:
          "As more and more people flock to urban areas, city centres are becoming seriously polluted. In some cities it is even difficult to breathe fresh air, for which cars and factories should take the main responsibility. Nowadays, the number of car owners increases day by day, but for the air's good, we'd better employ public transport instead of private cars. This would help stopping cars from aggravating pollution with exhaust fumes in the cities.\n\n" +
          "However, cars are not the only one to blame when it comes to pollution. Factories in or near big cities discharging pollutants into the air and rivers are also liable for it. Removing factories away from urban areas should be taken into consideration as soon as possible.\n\n" +
          "Also, there is lots of rubbish in cities left by people. It would be a good idea to put more recycling baskets into use to help dispose of rubbish and make the environment more beautiful and habitable.\n\n" +
          "Anyway, it's time for each part, persons and organisations, to take actions to make a difference now, even for our own fake.",
      },
      2: {
        title: 'Part 2 · 三选一',
        instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
        type: 'choice',
        tasks: [
          {
            q: 2,
            genre: 'article',
            context: 'You see this notice in an international English-language magazine for teenagers.',
            boxTitle: 'Articles wanted',
            prompt:
              "We are looking for articles about modern-day fashion icons.\n\nWhose style do you most admire?\nWhat is unique about them?\nHow do you think they have changed fashion?\nWrite an article answering these questions, and you might win a £2,000 shopping spree!",
            taskLine: 'Write your article.',
            modelAnswer:
              "It's difficult to stand out in the fashion world. Few actually manage to achieve lasting success, let alone become a fashion icon. Alexander McQueen, the British fashion designer, was one such person, however. He is without a doubt the designer whose style I admire most.\n\n" +
              "McQueen did things differently very early in his career. His fashion shows were pure theatre rather than the usual display of clothes on a catwalk. For example, in one show, a model was sprayed with paint by a robot, and in another show, the models were pieces in a human chess game.\n\n" +
              "His clothes were also unique. They were perfectly made but also very unusual. Some dresses had wings attached to them and others were made from materials like snakeskin and feathers. Few people could wear these clothes in real life though.\n\n" +
              "I think McQueen created a revolution in the fashion industry as no one had ever created clothes like him before. He was also the first to show clothes on a catwalk in such a theatrical style. This is why he impressed me so much and why I believe he changed fashion forever.",
          },
          {
            q: 3,
            genre: 'review',
            context: 'You see this advert in an international music magazine.',
            boxTitle: 'Reviews wanted',
            boxHeading: 'Best new music album',
            prompt:
              "We are looking for reviews of a music album that has just been released. Your review should include information about the style of music and its good and bad points.\nWould you recommend this album to other people your age?\nThe best reviews will be published in next month's magazine.",
            taskLine: 'Write your review.',
            modelAnswer:
              "\"Pink Moon\" by Nick Drake is not a new album, but rather a new release of an album first put out in the 60s. However, it is still well worth listening to today.\n\n" +
              "It is an example of song writing at its best. It is mostly written by Nick Drake himself, and sung with only the accompaniment of his guitar. The lyrics are smart, emotionally raw and original. His guitar-playing is truly amazing.\n\n" +
              "This is not a party album, though. It is best suited to evenings of introspection and is great company when you are in a low mood. It is best appreciated when you listen to the words and give the intricate melodies your full attention. If you are busy doing homework, you will miss it and if you are working up energy to go out on the town, then this is not what you are looking for at all.\n\n" +
              "Nevertheless, Nick Drake is an artist that deserves to be more widely known than he already is, and I recommend \"Pink Moon\" without reservation to anyone who is a fan of song writing or who loves the acoustic guitar.",
          },
          {
            q: 4,
            genre: 'email',
            context: 'You have received this email from your English-speaking friend, Alexa.',
            prompt:
              "From: Alexa\nSubject: Recommendation\n\nAs you know, I'm travelling to New York next week and I haven't made up my mind yet on which play I'm going to see. Have you seen anything remarkable lately? Can you tell me a little about the characters, story and anything else that made an impression on you?",
            taskLine: 'Write your email.',
            modelAnswer:
              "Hey Alexa,\n\nI've just seen the most amazing show on Broadway with my classmate Lucinda and want to tell you about it before it goes on tour. You definitely need to get a chance to see it!\n\n" +
              "As we went into the theatre, we were amazed to see that the whole interior had been transformed into a circus Big Top. It was brilliant and really created a fantastic atmosphere before the show began! When the main actor playing the central role of Phileas T. Barnum, the self-proclaimed greatest showman on Earth, suddenly swung into view on a rope suspended from the ceiling, the audience gasped in surprise, applauding loudly.\n\n" +
              "Throughout the musical, portraying Barnum's life, there were lots of circus tricks being performed, which made the musical great fun. Some really great musical numbers also got the audience tapping their feet. The play was well-directed and the characters of Barnum and his long-suffering wife, Chairy, really well-played.\n\n" +
              "I loved the play from beginning to end and so did the audience who cheered loudly at the end as the actors took their bow. Please do go see it!\n\nAnna",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-7-writing',
      title: 'FCE 全真模拟试题 7 · Writing',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '126',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.195–196)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 必答议论文',
        instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
        type: 'essay',
        context: 'In your English class you have been talking about the importance of learning foreign languages. Now, your English teacher has asked you to write an essay. Write an essay using all the notes and give reasons for your point of view.',
        prompt: 'Learning a foreign language helps students develop a set of important skills. Why should foreign languages be taught in schools?',
        notes: ['new cultures', 'employment', '............ (your own idea)'],
        wordRange: '140–190',
        modelAnswer:
          "Maybe some people believe that it is unnecessary to learn a foreign language. Personally, however, I think it is important for many reasons.\n\n" +
          "When you are learning a foreign language, you don't only learn the language itself. You are also learning about the culture behind it, which can broaden your horizons and enrich your life in the long run.\n\n" +
          "Knowing another language can also make you more employable. Faced with an increasingly competitive market today, you will stand out if you are well-qualified in another foreign language.\n\n" +
          "Finally, I am convinced that learning a language can give you the confidence to travel abroad. You will feel more at ease when speaking with foreigners in a fluent way. Also, when you are good at a foreign language, it will be easier for you to learn about each other.\n\n" +
          "In conclusion, learning a foreign language is highly useful for you to learn about other cultures, get a job in the future and develop confidence.",
      },
      2: {
        title: 'Part 2 · 三选一',
        instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
        type: 'choice',
        tasks: [
          {
            q: 2,
            genre: 'article',
            context: 'You see this notice in an international English-language magazine for teenagers.',
            boxTitle: 'Articles wanted',
            prompt:
              "We're looking for articles about ways to improve the environment.\n\nWhat do you think ordinary people can do to help?\nTell us about what you think would make a difference.\nThe best articles will be published in our next issue.",
            taskLine: 'Write your article.',
            modelAnswer:
              "These days the environment has become a very serious issue. The politicians are arguing about what to do about it, but governments do not agree on effective measures. It may seem to be quite hopeless, but there are a lot of measures for us to take if we really want to make a difference.\n\n" +
              "Recycling household rubbish is a great way in the first place. It can not only save space in landfills, but also help to keep resources from being used up. We all should try our best to follow the \"3R\" rule – Recycle, Reuse and Reduce.\n\n" +
              "Besides, how we get around makes an impact too. With our choice of walking or cycling when we can, or by using public transport, we can cut back on air pollution to some degree.\n\n" +
              "Finally, the simple act of switching off lights and television when we are not using them can also help to save electricity and reduce waste.\n\n" +
              "As you can see, there are many things we can do to help the environment. It is the responsibility of each and every one of us.",
          },
          {
            q: 3,
            genre: 'email',
            context: 'You have received an email from your English-speaking pen friend.',
            prompt:
              "What have you been up to? Have you been anywhere interesting these past few weeks? If yes, let me know where and how it was. I'm stuck at home because of the snow.\n\nWrite soon,\nSandra",
            taskLine: 'Write your email.',
            modelAnswer:
              "Hi Sandra,\n\nI'm sorry you're stuck at home! Luckily I've done quite a lot since I last wrote. A month ago, I was invited to my uncle's house in the mountains for a couple of weeks. You know, over here when it snows, it's not a problem, as we're used to it! We can still get around by attaching snow chains to the wheels of our vehicles!\n\n" +
              "Anyway, we got to my uncle's house quite easily and spent the first evening indoors chatting by the fire. The next morning we went skiing in the mountains. In fact, it is what we did most days. I really enjoyed the evenings as well, during which we usually went into the nearby village and had a lovely meal. There were various kinds of traditional restaurants to choose from and they, lit up at night, looked so pretty.\n\n" +
              "I loved it so much that I wanted to stay longer. Unfortunately, I had to go back to school after the holiday. So that's what I've been doing. I hope the snow melts soon where you are and you can get out and enjoy yourself again!\n\nToby",
          },
          {
            q: 4,
            genre: 'review',
            context: 'You see this advert in an international travel magazine:',
            boxTitle: 'Reviews wanted',
            boxHeading: 'A hotel to remember',
            prompt:
              "We are looking for reviews of a hotel where you have had a memorable stay. Your review should include information about the hotel, its location, the services and whether you enjoyed your stay.\nWould you recommend this hotel to other people your age?\nThe best reviews will be published in next month's magazine.",
            taskLine: 'Write your review.',
            modelAnswer:
              "Recently I stayed at the Royal Inn in the town of Bright Bay. It was a disappointing experience, to say the least.\n\n" +
              "The hotel was not at all as advertised. On its website, the pictures showed beautiful gardens when, in truth, these gardens consisted of one bed of roses next to the parking lot. The rest of the space around the hotel was taken up by a busy road and a vacant lot. A pool was advertised, but we found there was no water in it! The only promise on the website that was kept was that free Internet access would be available in the rooms.\n\n" +
              "In addition, the rooms were in very poor condition. The door to my room was broken, and only opened and shut with great difficulty and a loud bang – which is just shocking! Even worse, there were muddy hand-prints in the shower, and stains on the bedspread. I felt like I needed to clean everything before I could use it. It was disgusting.\n\n" +
              "If this hotel had been very cheap, perhaps these problems would be forgivable. However, it was an average-priced hotel, but with very substandard conditions. I would never recommend it to anyone.",
          },
        ],
      },
    },
  },
  {
    meta: {
      id: 'fce-mock-8-writing',
      title: 'FCE 全真模拟试题 8 · Writing',
      level: 'FCE',
      collection: 'FCE 全真模拟试题（8套）',
      book: 'FCE 全真模拟试题（8套）',
      paper: 'Writing',
      pages: '145',
      source: 'FCE 8套全真模拟试题.pdf',
      answerSource: 'Answer Key and Transcripts (PDF p.200–201)',
      verified: true,
    },
    parts: {
      1: {
        title: 'Part 1 · 必答议论文',
        instruction: 'You must answer this question. Write your answer in 140–190 words in an appropriate style on the separate answer sheet.',
        type: 'essay',
        context: 'In your English class you have been talking about the problem of hunger in Africa. Now, your English teacher has asked you to write an essay. Write an essay using all the notes and give reasons for your point of view.',
        prompt: 'In many parts of Africa, people are dying of starvation and lack of fresh water. Can these problems be solved?',
        notes: ['war', 'lack of organised farming', '............ (your own idea)'],
        wordRange: '140–190',
        modelAnswer:
          "We are always hearing of people dying of starvation and lack of water in Africa. There are many reasons why this happens.\n\n" +
          "To begin with, there are constant wars in Africa, which often take the form of tribal infighting, so it's hard to live a normal life in such a place. There will be shortages of food and water, for wars stop stuff from being transported to villages and towns.\n\n" +
          "What's more, it's not just wars that are causing starvation and lack of water. There is a lack of organised farming too, which means that not sufficient crops are grown and tons of people are not fed. This, together with wars, leads to even bigger problems, because when there are wars, people will be short of even more food.\n\n" +
          "We all know that it is an appalling situation. In my mind, strong and central governments made up of people as representatives of their own tribes could help to stop fighting, as in this way people would work together.\n\n" +
          "In conclusion, I believe that tough central governments can solve the problem of starvation and lack of water by helping to end wars and develop organised farming.",
      },
      2: {
        title: 'Part 2 · 三选一',
        instruction: 'Write an answer to one of the questions 2–4 in this part. Write your answer in 140–190 words in an appropriate style on the separate answer sheet. Put the question number in the box at the top of the answer sheet.',
        type: 'choice',
        tasks: [
          {
            q: 2,
            genre: 'article',
            context: 'You see this announcement on an English-language computer magazine.',
            boxTitle: 'Articles wanted',
            prompt:
              "We're looking for articles about cities you'd like to visit.\n\nHave you heard or read about a special city you'd like to go to one day?\nTell us about it – describe the city and explain why it's so special.\nThe best articles will be published in our next issue.",
            taskLine: 'Write your article.',
            modelAnswer:
              "There are a wealth of city breaks available to those wanting to get away from it all. But the problem is where to go?\n\n" +
              "Without a doubt, my choice would be Venice. As a city, it has everything to offer – wide open piazzas, beautiful historic churches, old Venetian palaces, and picturesque canals that form a network across the city.\n\n" +
              "What I like about Venice next is that you can never get bored of this beautiful city. If you do need a change of scene, you can just hop on a vaporetto to take you across to the neighbouring islands of Murano, famed for its glass-blowers, and Burano, well-known for its brightly-coloured fishermen's cottages.\n\n" +
              "Besides, I would also like to visit Venice because it is a great place where you can just chill out. There is nothing better than relaxing in the Piazza San Marco in the sunshine and listening to the live orchestras playing.\n\n" +
              "Venice for me is unbeatable. I would thoroughly recommend it to anyone who loves beautiful architecture and is a romantic at heart. Apart from it, its wealth of history also makes it a dream destination for history-lovers.",
          },
          {
            q: 3,
            genre: 'review',
            context: 'You see this advert in an international fashion magazine:',
            boxTitle: 'Reviews wanted',
            boxHeading: 'Films of the Year',
            prompt:
              "We are looking for reviews of a film for teenagers you have seen. Your review should include information about the plot, the characters and the director's style.\nWould you recommend this film to other people your age?\nThe best reviews will be published in next month's magazine.",
            taskLine: 'Write your review.',
            modelAnswer:
              "I am rarely impressed by films nowadays. \"Philomena,\" however, really stands out as being my favourite to date.\n\n" +
              "The plot revolves around a mother's search for her son, who was given up many years previously for adoption. She hires a former journalist to help track him down. In fact, although the plot is the movie's main strength, but it's the way it evolves that draws the audience into events as they unfold.\n\n" +
              "As the film progresses, so does the relationship between the journalist and his client, the film's two protagonists. It is the director's focus on this relationship, just as much as the plot development, that I found so captivating. The adopted son always remains as a rather shadowy figure in the background, but this is a strength rather than a weakness in the film, since the real story is about the searching process rather than the finding of the lost son.\n\n" +
              "I think the character portrayals are excellent and the plot eye-catching. There isn't really a single thing I would like to change about this film, although it would be nice if it had had a happier ending!",
          },
          {
            q: 4,
            genre: 'email',
            context: 'You have received this email from your English-speaking friend, Paul.',
            prompt:
              "From: Paul\nSubject: Best holiday ever\n\nWe're having a great time in the Alps for Christmas. We ski all day. What about you? Where have you gone for the Christmas holidays? What is it like there? How have you been spending your time? Have you met anyone interesting?\n\nTell me all about it.",
            taskLine: 'Write your email.',
            modelAnswer:
              "Hi Paul!\n\nGreetings from the sunniest beach in the Caribbean! At the moment I'm writing to you while lying on a sunbed, enjoying the fantastic Caribbean sun. There's not a cloud in the sky and the colour of the sea has to be seen to be believed!\n\n" +
              "From the moment I arrived, everything has just been perfect. People here are really friendly – the locals are smiling all the time and wave to me whenever they see me, either on the beach or at the local beach bar. The hotel staff are warm and polite too.\n\n" +
              "The food here is amazing and really healthy. I tried coconut soup for the first time today and it was so delicious! They also make fantastic curries from chicken and fresh ginger.\n\n" +
              "When I was not lying in the sun, sipping sparkling water and enjoying the local cuisine, I've been touring around local villages by bus and seeing how the locals live. In the evenings, I would like to watch the sunset from the local beach bar.\n\n" +
              "Well, that's all for now. I'm off to the beach bar for another sparkling water!\n\nSee you soon,\nLydia",
          },
        ],
      },
    },
  },
]
