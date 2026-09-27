// B1 Preliminary for Schools Trainer 1 (2020) · Trainer 1 阅读
// 来源: pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf（书内 Teacher's Notes & Keys / Practice Test Key 核对）
// 注意: 部分内容为原创教学参考（写作范文以书内 Sample answer 为主，口语参考为原创，已逐项标注 answerSource）
// PET Trainer 1 Test 1 Reading 数据（自动转录，待人工核对）
// 题目来源：pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf
// Test 1 Exam Practice · 书页 12–27（PDF p013–p028）
// 答案来源：书内 Teacher's Notes & Keys（书页 182–187 / PDF p183–p188），逐题核对
// 注意：Part 4 的 passage_segments 段界即书中挖空位（T1/T5/T6 为 6 段，末段为最后一个挖空之后的正文，
//       渲染器只在有对应题号的段后插入挖空芯片）；各挖空位置已对照书页版面图（p023/p137/p155）核对。

const TRAINER1_TEST_1_READING = {
  id: 'pet-trainer1-1-reading',
  title: 'PET Trainer 1 · Test 1 Reading',
  source: {
    file: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    collection: 'PET Trainer 1',
    test: 1,
    pages: '书页 12–27',
    answerSource: "书内 Teacher's Notes & Keys（书页 182–187）",
    verified: true,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Mum',
        to: 'Anton',
        content: "Anton,\nWhen you see your sister at the basketball match later, can you make sure she remembers that Dad's coming to fetch her instead of me? I've tried ringing, but her phone's off.\nThanks,\nMum",
        options: {
          A: 'Anton has to check his sister knows about the arrangements for getting home.',
          B: 'Anton should remind his sister to switch her phone back on.',
          C: "Anton needs to ask his sister if she's taking part in a sports event later.",
        },
        answer: 'A',
      },
      {
        id: 2,
        type: 'notice',
        content: 'From the famous novel by\nBen Whitham:\na film about a bear\'s adventures.\n"Fun for all the family!"\n\nThis film is ...',
        options: {
          A: 'about a family of wild animals.',
          B: 'not suitable for people under a certain age.',
          C: 'based on a popular fiction book.',
        },
        answer: 'C',
      },
      {
        id: 3,
        type: 'text',
        from: 'Mrs Hoskins',
        to: 'All students',
        content: 'Before the end of term,\nplease return all books you have borrowed from the library, or see someone at the desk if you want to have them for the summer holiday.',
        options: {
          A: "You must take back all the library books you've got before the summer holiday.",
          B: 'If there are library books you want, borrow them before the end of term.',
          C: 'To keep any library books for holiday reading, ask staff at the desk.',
        },
        answer: 'C',
      },
      {
        id: 4,
        type: 'text',
        from: 'Nicola',
        to: 'Tina',
        content: "Tina,\nWhen you come round tonight, can you bring that earring you found outside school the other day? I think I know who it belongs to, so I'll return it.\nThanks,\nNicola",
        options: {
          A: 'Nicola is telling Tina to return something she was lent recently.',
          B: 'Nicola is hoping she can give a lost item back to its owner.',
          C: 'Nicola is asking for help to find a lost earring belonging to her.',
        },
        answer: 'B',
      },
      {
        id: 5,
        type: 'notice',
        content: "BIKES FOR HIRE\nAdult cycles always available\nChildren's cycles – book in advance\n8 a.m. – 9 p.m.\nOnly €20 per day",
        options: {
          A: "Families may not find suitable bikes for everyone unless they've reserved them.",
          B: 'You can always find a range of bikes for hire here.',
          C: "Bikes aren't available for customers' use in the evenings.",
        },
        answer: 'A',
      },
    ],
  },
  part2: {
    title: 'Art Courses',
    instructions: 'The people below all want to find an art course to attend. On the opposite page there are descriptions of eight art courses. Decide which art course would be the most suitable for the people below.',
    people: [
      { label: '6', name: 'Rafa', text: "Rafa wants to produce artwork to support his art college application. He's written stories, which he'd like to publish, and wants to learn how to include drawings in them, without using a computer." },
      { label: '7', name: 'Simona', text: "Simona enjoys creating art on her computer, and wants to find ways to improve the posters she makes on it. She also wants to share what she's done with other students on the course." },
      { label: '8', name: 'Andrei', text: "Andrei wants to try different painting techniques, and have trips to see the work of famous painters, to get ideas for his own pictures. He'd also like to try painting outdoors." },
      { label: '9', name: 'Nicola', text: "Nicola enjoys printing by hand. She wants to print the patterns she's created onto different materials, for her mother to make into clothes, and also learn basic printing techniques to use at home." },
      { label: '10', name: 'Karl', text: "Karl enjoys taking photos of his family, and wants to use them as a basis for the art he produces. He'd like to go somewhere that also offers private lessons." },
    ],
    options: [
      { label: 'A', name: 'Get Artistic', text: "Teachers here always have ideas to get you drawing, painting and printing – but you can use your own material, too. The studio-based course focuses on portraits – you'll learn how to develop whatever you've brought, or use famous portraits, to create pictures of people. One-to-one sessions also available." },
      { label: 'B', name: 'Art Attack!', text: "Learn how to create pictures, perhaps based on your own writing, to put into a short book or poster, using simple techniques that don't require technology. Discover, too, how to put a book together, with a professional-looking cover designed and hand-printed by you. Perfect for anyone considering further studies in art." },
      { label: 'C', name: 'Art and Imagination', text: "If you like designing clothes, you'll enjoy learning to use special computer software here to create and print out designs for tops, shoes and hats that people would love to wear! You'll go home with a folder of work, perfect to present when applying for a higher-level art course. Individual classes also available." },
      { label: 'D', name: 'Create!', text: "Draw and paint in different situations – in the studio or even in the park! Gallery visits are also included, and you're taught how to base your work on studies of landscapes and portraits by well-known artists. Teachers also encourage you to experiment with various styles and methods." },
      { label: 'E', name: 'More Art Now!', text: "Improve how you paint people and places on this studio-based course. The teachers bring in work, ranging from photos to posters, to give you ideas. And use the studio website to show your work and exchange ideas with other students – useful for anyone wishing to study art at a higher level." },
      { label: 'F', name: 'Art Workshop', text: "Do some drawings, in the studio or outside, or bring along your own. The teachers will then help you to turn them into wonderful printed designs, using simple methods you can try yourself after the course. You'll then transfer your designs onto cotton and silk, using special paints – perfect to use in sewing projects afterwards." },
      { label: 'G', name: 'Do it yourself', text: "Try making art to go with your stories here – working inside or outside! You'll get ideas from books showing famous paintings and cartoons, and then create and print pictures of people to accompany your stories, using digital design techniques. There's even one-to-one teaching if you'd prefer." },
      { label: 'H', name: 'The Studio', text: "Come and experiment with digital design. You'll get great ideas through research, then using special software, create your pictures and add details on screen, whether it's clothes, people, books or something to put on the wall. Upload your work on the studio website and get opinions from your classmates there – and comment on theirs!" },
    ],
    questions: [
      { id: 6, person: 'Rafa', answer: 'B' },
      { id: 7, person: 'Simona', answer: 'H' },
      { id: 8, person: 'Andrei', answer: 'D' },
      { id: 9, person: 'Nicola', answer: 'F' },
      { id: 10, person: 'Karl', answer: 'A' },
    ],
  },
  part3: {
    title: 'Our Great Ocean Road adventure',
    author: 'Donna Waverley',
    instructions: 'For each question, choose the correct answer.',
    passage: "My family and I recently went to Australia, to see my grandparents. But before we visited them, we went sightseeing along the Great Ocean Road, on the Australian coast.\nDad had intended to drive, but even though he was used to driving miles without getting exhausted, he then read on the website that the road wouldn't be an easy drive, with a number of sharp bends. Anyway, we thought he deserved to enjoy the fantastic views too, which he couldn't do as our driver. So instead, we persuaded him to book discount bus tickets and off we went.\nOur first stop was where wild kangaroos lived – and Dad and I were taking a walk when a big one appeared! For a moment, it seemed to consider coming towards us, which made me slightly nervous – but then it went off along the road, stopping to check if we were following. Although it was with us a while, I was so excited I didn't even manage to pull out my camera. Then it looked back once more, and went off into the bushes.\nThat wasn't the only wildlife we saw. I thought it unlikely we'd see Australia's famous koala bears during our short visit, as I'd heard they were rare – but we weren't disappointed at our next stop. In fact, we discovered there were roughly six million in that area! Sadly, some gum trees they were in had very few leaves left, which people told us was because of the koalas, although I'd read that lack of water is actually the problem. Still, I guess they looked cute, and were easy to find – we just followed the tourists looking up into the trees!\nDad had booked a campsite for the night, with ready-made tents – for an adventure! I wasn't sure about that, but they were actually luxury tents, within walking distance of some famous rocks and other places we hoped to visit. However, Dad also said the sounds of wild creatures would help us sleep. That sounded worrying – until the 'wild creatures' turned out to be frogs! So I was embarrassed by my fears – and kept awake by the frogs! But we had fun making meals together – we'd brought food, as we knew there'd be nowhere to eat.\nIn fact, this whole trip was fantastic!",
    questions: [
      {
        id: 11,
        text: "Donna's Dad decided not to drive the Great Ocean Road himself because",
        options: { A: "he realised he wouldn't enjoy the views as much.", B: 'he thought it would be too tiring for him.', C: 'he discovered the bus would be a cheaper option.', D: 'he found out the route was very challenging.' },
        answer: 'D',
      },
      {
        id: 12,
        text: 'When Donna saw a kangaroo along the route, she was',
        options: { A: 'worried that it might approach her.', B: 'amazed at the size of it.', C: "sad that it didn't stay with them long.", D: 'disappointed that she had forgotten her camera.' },
        answer: 'A',
      },
      {
        id: 13,
        text: 'Donna says that the koala bears they saw were',
        options: { A: 'responsible for damage to the trees.', B: 'even more attractive than people had told her.', C: "more common than she'd expected.", D: 'very skilled at hiding away from tourists.' },
        answer: 'C',
      },
      {
        id: 14,
        text: "What was Donna's opinion of the place where they stayed?",
        options: { A: "She found it was less comfortable than she'd hoped.", B: 'She liked the fact that it was convenient for sightseeing.', C: 'She enjoyed hearing the sounds of nature as she slept.', D: 'She was disappointed there was no restaurant nearby.' },
        answer: 'B',
      },
      {
        id: 15,
        text: 'What might Donna write in her blog during the trip?',
        options: {
          A: "The bus we're travelling on is pretty comfortable, with great views from the window. Grandma and Grandad are enjoying it, too!",
          B: 'We can see quite a lot as we drive along. I just wish we could stop and get out to explore properly.',
          C: "Yesterday we went to see some huge rocks near our campsite – and we were really impressed! I'm surprised they're not well known.",
          D: "I wasn't looking forward to camping, in case there were wild animals, but we haven't seen anything at all dangerous, so I feel silly now!",
        },
        answer: 'D',
      },
    ],
  },
  part4: {
    title: 'Digging into the past',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      "Last year, Kate Marshall was given a very exciting opportunity – to help her father, who's a history lecturer, at a historical site! He was leading a team to dig up and explore the area.\nWhen they arrived, though, the site wasn't quite what Kate had expected.",
      "So the first job was to remove it all and prepare the land for digging. Says Kate, 'Dad hadn't warned me I'd have to work so hard as soon as we got there!'\nBut when the site was completely cleared, the team found pieces of ancient pots on the ground. However, those weren't as exciting as everyone had thought. Kate's dad told them that the important pots were still under the ground. And because no-one had touched them for centuries, the team would learn far more about their history – but first they would have to dig deeper. Says Kate,",
      "'But we all knew Dad was right!'\nThe site was divided into small squares, with a leader for each square, who told everyone how to dig. 'That wasn't as easy as it sounded, either,' Kate reports. 'Instead of just digging great big holes, we all had to dig really carefully, and remove small amounts of soil each time.",
      "So it made sense.'\n'My friends at home were really interested in what I was doing,' Kate explains. 'They kept texting me to ask what I'd found.",
      "But actually, we were looking for ordinary, everyday objects that could tell us about the people who'd lived in the area centuries ago.'\nIn the end, though, Kate wasn't disappointed by what she found. 'One day, when I was digging away, I found a stone with a strange shape.",
      "Someone had obviously made it hundreds of years ago, which meant it was really important. So Dad cleaned it up, and said it would go to the nearby museum. So I was pleased that at last, I'd found something interesting!'",
    ],
    options: [
      { label: 'A', text: 'It turned out to be a small figure of a horse.' },
      { label: 'B', text: 'No-one made that mistake, luckily.' },
      { label: 'C', text: "That way, everyone made sure they didn't miss anything." },
      { label: 'D', text: 'In fact, the whole area was actually still covered in grass.' },
      { label: 'E', text: 'It was a bit sad to see it disappear.' },
      { label: 'F', text: 'Some people were a bit disappointed by that news.' },
      { label: 'G', text: 'They probably imagined it was things like gold jewellery.' },
      { label: 'H', text: 'It was a new experience for me, too.' },
    ],
    questions: [
      { id: 16, answer: 'D' },
      { id: 17, answer: 'F' },
      { id: 18, answer: 'C' },
      { id: 19, answer: 'G' },
      { id: 20, answer: 'A' },
    ],
  },
  part5: {
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "Many cities have parks for people to enjoy. And it's very (21) ........................ to find wonderful sculptures in them. However, some sculptures found in Fairbanks, Alaska, aren't quite the same as in other cities. When the temperature (22) ........................ at the end of winter, they all disappear – because they're made of ice!\n",
      "Fairbanks has been the home of the World Ice Art Championships for over 20 years, and artists from many different countries come to create spectacular ice sculptures. The ice is brought from a lake (23) ........................ near the sculpture park. It's said to be so clear that visitors can read a newspaper through it – even though the individual pieces are over one metre (24) ........................!\n",
      "Visitors also have the (25) ........................ to make their own ice sculptures if they wish, at special classes. There's a children's play park, too, where (26) ........................ everything is made of ice, including sculptures of favourite animals. It's a great place to visit!",
    ],
    questions: [
      { id: 21, options: { A: 'usual', B: 'general', C: 'common', D: 'familiar' }, answer: 'C' },
      { id: 22, options: { A: 'develops', B: 'rises', C: 'grows', D: 'builds' }, answer: 'B' },
      { id: 23, options: { A: 'located', B: 'arranged', C: 'contained', D: 'attached' }, answer: 'A' },
      { id: 24, options: { A: 'heavy', B: 'large', C: 'strong', D: 'thick' }, answer: 'D' },
      { id: 25, options: { A: 'occasion', B: 'benefit', C: 'opportunity', D: 'ability' }, answer: 'C' },
      { id: 26, options: { A: 'totally', B: 'absolutely', C: 'completely', D: 'fully' }, answer: 'B' },
    ],
  },
  part6: {
    instructions: 'For each question, write the correct answer.\nWrite one word for each gap.',
    passage_segments: [
      "Hi Anna,\nI've just been to the museum in our city. That was my first visit, believe it or (27) ........................! I wanted to collect some information for our class history project. We have to hand it (28) ........................ soon, don't we?\n",
      "I went to the Ancient History section, (29) ........................ the museum keeps all its ancient Egyptian stuff. It was really interesting! There were some amazing statues of various animals, so I drew some pictures of them and then (30) ........................ some research about them online when I got home.\n",
      "I've still got some work to do on my project, so I'll need to go back to the museum again some time soon. In fact, (31) ........................ don't we go together? I don't think you've been there before, (32) ........................ you? I'm sure you'll find something that you could use for your project.\nSee you soon!\nSally",
    ],
    questions: [
      { id: 27, answer: 'not' },
      { id: 28, answer: 'in' },
      { id: 29, answer: 'where' },
      { id: 30, answer: 'did' },
      { id: 31, answer: 'why' },
      { id: 32, answer: 'have' },
    ],
  },
}

// PET Trainer 1 Test 2 Reading 数据（自动转录，待人工核对）
// 题目来源：pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf
// Exam Practice Test 2 · 书页 54–69（PDF 页 55–70），题目文字已对照页面渲染图核对
// 答案来源：书内 Teacher's Notes & Keys Test 2（书页 198–203 / PDF 页 199–204），逐题核对

const TRAINER1_TEST_2_READING = {
  id: 'pet-trainer1-2-reading',
  title: 'PET Trainer 1 · Test 2 Reading',
  source: {
    file: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    collection: 'PET Trainer 1',
    test: 2,
    pages: '书页 54–69',
    answerSource: '书内 Teacher\'s Notes & Keys（书页 198–203）',
    verified: true,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'notice',
        content: 'HEAVY SNOW EXPECTED OVERNIGHT\nTRAIN AND BUS DELAYS POSSIBLE\nCHECK WEBSITES REGULARLY – SOME SCHOOLS AND OFFICES MAY BE CLOSED TOMORROW',
        options: {
          A: 'The bad weather will make a lot of public transport late tomorrow.',
          B: 'Snow that is falling will cause a number of problems tomorrow.',
          C: 'Students should watch for announcements in case they are unable to attend classes tomorrow.',
        },
        answer: 'C',
      },
      {
        id: 2,
        type: 'text',
        from: 'Mrs Jones',
        to: 'Students',
        content: 'Have you got books you\'ve already read? Bring them to our Book Exchange on Friday – other students might enjoy them!\nMrs Jones',
        options: {
          A: 'share books they no longer want with their schoolmates',
          B: 'find out from other students which books they\'ve enjoyed',
          C: 'bring in a good book to talk about on Friday',
        },
        answer: 'A',
      },
      {
        id: 3,
        type: 'text',
        from: 'Sophie',
        to: 'Billy',
        content: 'Billy\nHave you got Joanna\'s number? I\'m supposed to meet her at the cinema in 10 minutes, but Dad\'s driving me into town and we\'re in a huge traffic jam! Thanks!\nSophie',
        options: {
          A: 'Sophie wants Billy to contact Joanna and warn her about traffic problems in town.',
          B: 'Sophie needs to let Joanna know that she\'s probably going to be late.',
          C: 'Sophie\'s not sure when she\'s supposed to meet Joanna to see a film.',
        },
        answer: 'B',
      },
      {
        id: 4,
        type: 'text',
        from: 'Coach',
        to: 'Rugby club',
        content: 'Just wanted to thank players in Saturday\'s match, and people who supported them. Remember, the other side were league winners, so all wasn\'t bad – but next time let\'s beat them!',
        options: {
          A: 'congratulating the team on their most recent win',
          B: 'letting the team\'s fans know the positive effect of their support',
          C: 'encouraging the team to play even better in a future match',
        },
        answer: 'C',
      },
      {
        id: 5,
        type: 'notice',
        title: 'Café Menu',
        content: 'See below for our regular dishes – or for today\'s \'specials\', go inside to see the board by the counter!',
        options: {
          A: 'We have more food available, apart from what\'s written on the menu.',
          B: 'To decide what to eat, you must go and look at the board inside.',
          C: 'Speak to someone at the counter when you want to order your food.',
        },
        answer: 'A',
      },
    ],
  },
  part2: {
    title: 'Film studios',
    instructions: 'The people below all want to visit a studio where films are made.\nOn the next page there are descriptions of eight film studios that people can visit.\nDecide which film studios would be the most suitable for the people below.',
    people: [
      { label: '6', name: 'Tom', text: 'Tom wants to look around the studio at his own speed, and visit the actual sets where films were made. His mum wants to see online what the studio is like before she buys tickets.' },
      { label: '7', name: 'Ingrid', text: 'Ingrid is interested in seeing costumes that famous actors have worn, and she\'d also like to ride on a vehicle that originally appeared in a film. Ingrid\'s mum wants a souvenir to remember their trip.' },
      { label: '8', name: 'Roberto', text: 'Roberto wants to visit a studio where famous films were made many years ago, and buy something that appeared in one of the films. His dad wants to book online before they go.' },
      { label: '9', name: 'Simone', text: 'Simone likes science fiction films, and prefers looking at digital displays about how special effects are achieved to reading information. Simone\'s dad wants to get a digital guide.' },
      { label: '10', name: 'Ben', text: 'Ben is interested in how scenes from famous cities are created in studios. He\'d also like to visit film locations outside the studios, accompanied by a guide who can answer his questions.' },
    ],
    options: [
      { label: 'A', name: 'Grand Studios', text: 'These studios have been the home of special effects for years! There\'s plenty to look at and read, so allow lots of time for your visit. And our friendly guides around the studios are ready to help direct you to the most interesting sights. It\'s best to book online in advance.' },
      { label: 'B', name: 'Movieworld', text: 'You\'ll find the best movies ever here, set far into the future! Use the interactive videos on our computers, to see how actors are turned into on-screen monsters, using amazing make-up, costumes and filming techniques, and models of dinosaurs are created to look as though they\'re alive! There are video activities, and \'tours\' of the studio to download.' },
      { label: 'C', name: 'Waverley Studios', text: 'These studios are huge, with plenty of space for displaying the scenery and stages where big stars acted in scenes from famous films. Check the website to see exactly what the studio offers inside. And because you\'re not shown around in groups, you can spend as much time there as you want!' },
      { label: 'D', name: 'Screen World', text: 'Many famous movies from the last century were made in these studios, and you can still see the costumes worn in them, and the original sets used in the films. There\'s a useful digital guide you can buy here, so you\'ll find your way through these studios really quickly!' },
      { label: 'E', name: 'WestWays', text: 'To visit this studio, get tickets in advance through the website, to avoid long queues – it\'s very popular with people who love top movies from the 40s, many of which were filmed here. The studio also has a great selection of items from various movies, now on sale as souvenirs!' },
      { label: 'F', name: 'FilmFun', text: 'Come and visit amazingly realistic sets, from the streets of New York to the historical sites of Rome – and walk around them! The tour also includes a bus ride to places in the surrounding area which have appeared in films, with a staff member to tell you whatever you\'d like to know.' },
      { label: 'G', name: 'Star Studios', text: 'See a 360° online tour of these studios before you come – they\'re huge! And during your visit, ride through what look like London and Paris streets, on original buses used in old films, and even try on costumes from films made here. Digital displays will give you plenty of information!' },
      { label: 'H', name: 'FilmPark', text: 'FilmPark has an amazing collection of old cars once used in films – and they still work! So, have a trip in one and see the studios as you\'re driven around on its huge city street scenes. There\'s also a collection of original clothes that stars were dressed in for their movies. Visitors get free photos of themselves as they leave.' },
    ],
    questions: [
      { id: 6, person: 'Tom', answer: 'C' },
      { id: 7, person: 'Ingrid', answer: 'H' },
      { id: 8, person: 'Roberto', answer: 'E' },
      { id: 9, person: 'Simone', answer: 'B' },
      { id: 10, person: 'Ben', answer: 'F' },
    ],
  },
  part3: {
    title: 'Coasteering',
    instructions: 'For each question, choose the correct answer.',
    passage: 'Lily Carter had no idea what present she wanted for her 14th birthday. But she\'d always been keen on challenging sports, especially to do with water, like surfing and sailing. So when her parents heard about an activity called coasteering – exploring rocks along the coast by climbing and swimming – they thought Lily would love it. They found a course offered at an activity centre called Porthdean, just along the coast from the family home, which was perfect. So after checking it was led by experienced instructors, they signed her up.\nLily had seen a TV show about coasteering, and was interested in doing it, although she\'d thought only adults could take part. But then she discovered that on courses at Porthdean, there\'d also be people her age jumping from rocks into the sea, and also exploring caves – which she was never normally allowed to do, so she really wanted to go. But she still asked her dad to go along too and, although he wondered whether he\'d like coasteering himself, he knew how much Lily wanted someone to accompany her, so he agreed.\nLily and her dad drove to Porthdean, where they attended a session with their instructors to learn basic safety and techniques and be given helmets and special wetsuits to keep the cold out. The group they joined was quite small, which meant they got lots of individual attention. Says Lily, \'The entire trip was awesome – although the water was freezing! But our instructors encouraged the whole group so much, we were ready to try absolutely all the challenges, even stuff we hadn\'t expected at all, like jumping off high cliffs! I must admit, the one I jumped off wasn\'t that high, but Dad went much higher!\'\n\'Anyway, Dad and I hadn\'t realised how hard it would be physically, so we were glad we were fit,\' explains Lily. \'Even so, afterwards, we actually felt like we\'d done loads of hard exercise in the gym! But I\'ll keep the memories of that trip forever, I reckon. And the instructors are going to put a video of it onto the website, so my friends will see it. They\'d never believe me otherwise!\'',
    questions: [
      {
        id: 11,
        text: 'Why did Lily\'s parents choose Porthdean for her coasteering present?',
        options: {
          A: 'It offered various courses in her favourite watersport.',
          B: 'The instructors there were highly recommended.',
          C: 'It wasn\'t too far away from where they lived.',
          D: 'She had already tried some activities there.',
        },
        answer: 'C',
      },
      {
        id: 12,
        text: 'How did Lily feel about the coasteering course?',
        options: {
          A: 'pleased that it included something she\'d always wanted to try',
          B: 'excited about doing the experience all on her own',
          C: 'keen to find out more about what it involved',
          D: 'interested to see whether she was the only teenager',
        },
        answer: 'A',
      },
      {
        id: 13,
        text: 'Lily particularly liked her instructors because they made sure everyone',
        options: {
          A: 'was comfortable with the kit they were given.',
          B: 'felt confident about the new things they would attempt.',
          C: 'got the same amount of attention.',
          D: 'knew all the activities they would take part in.',
        },
        answer: 'B',
      },
      {
        id: 14,
        text: 'Lily says that after the course, she was',
        options: {
          A: 'happy she\'d shared something so exciting with her dad.',
          B: 'sorry she hadn\'t worked at getting fitter before she went.',
          C: 'proud that her friends all thought she\'d done well.',
          D: 'surprised at how exhausted she was by the activities.',
        },
        answer: 'D',
      },
      {
        id: 15,
        text: 'What would Lily text to a friend while she was away on the course?',
        options: {
          A: 'I don\'t think Dad was sure before he came that he\'d enjoy it – but actually, he\'s been braver than me!',
          B: 'I wanted to do the coasteering course, and mentioned it to my parents before my birthday. But I never expected they\'d let me go!',
          C: 'Our session before the activities was great, although I really didn\'t think I\'d need a wetsuit for the cold – and I was right!',
          D: 'Going into caves was amazing. I\'d love to explore them by myself when we\'re next at the beach – I\'m sure my parents will let me!',
        },
        answer: 'A',
      },
    ],
  },
  part4: {
    title: 'The story of the carrot and the ring',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      'Have you ever lost something that was precious to you, and thought you\'d never see it again? That\'s what happened to Mary Grams from Canada.\nMary had worn her engagement ring for more than half a century when she suddenly lost it. She was working in her garden on the family farm one day, pulling out a plant.',
      'When she discovered it was missing, she searched everywhere for it for days, before finally giving up.\nMary realised she probably wasn\'t going to find the ring again. So she decided not to tell anyone about what had happened, apart from her son. Instead, she thought she would replace it with a much cheaper ring from a jeweller\'s.',
      'In fact, it was so similar that no-one else in her family even knew her original ring was missing.\nBut the story has a happy ending. Mary eventually got her engagement ring back – 13 years after it was lost! One day Mary\'s daughter-in-law Colleen was working in the same garden where Mary had been all those years ago.',
      'But this time it looked a bit different – because there was a carrot growing right through the middle of it!\nAs soon as Colleen saw the ring, she knew immediately who the owner was. The farm had been in the family for over 100 years.',
      'So when Colleen discovered the story of the lost ring, it became clear there was only one person it could possibly have belonged to, and the ring was returned to Mary.\nMary decided to remove her ring from the carrot and wear it again. Then the ring was washed, and Mary put it back on her finger – and it still fitted perfectly!',
    ],
    options: [
      { label: 'A', text: 'She was digging up vegetables there when she discovered the ring.' },
      { label: 'B', text: 'That gave her a very good idea about what to do with the carrot.' },
      { label: 'C', text: 'And that was probably when the ring came off her finger.' },
      { label: 'D', text: 'So she carefully cut the carrot in half.' },
      { label: 'E', text: 'She had never seen anything like it before.' },
      { label: 'F', text: 'And only two women had lived there in all that time.' },
      { label: 'G', text: 'It was tiring work, as some of them were very big.' },
      { label: 'H', text: 'Luckily, she managed to find another one that looked just like it.' },
    ],
    questions: [
      { id: 16, answer: 'C' },
      { id: 17, answer: 'H' },
      { id: 18, answer: 'A' },
      { id: 19, answer: 'F' },
      { id: 20, answer: 'D' },
    ],
  },
  part5: {
    title: 'Sheep can recognise faces!',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      'Many people think sheep aren\'t very intelligent creatures. But in fact, (21) ........................ to new research, they may be cleverer than we think. For example, sheep can actually be trained to recognise human faces from photographs!\n',
      'Recognising faces is an important human social (22) ........................ However, it seems that sheep are also social animals that can recognise other sheep as well as (23) ........................ humans. In experiments, researchers trained eight sheep to recognise the faces of celebrities from photographs. Training involved getting the sheep to (24) ........................ decisions about the photos they saw. At one end of a room, they would see two different photographs, and would receive a (25) ........................ of food for approaching the photograph of the celebrity; if they approached the wrong photograph, they got nothing. Over time, they learned to (26) ........................ getting food with the celebrity\'s photograph. And after training, the sheep correctly chose the celebrity\'s face eight times out of ten!',
    ],
    questions: [
      { id: 21, options: { A: 'regarding', B: 'following', C: 'resulting', D: 'according' }, answer: 'D' },
      { id: 22, options: { A: 'skill', B: 'talent', C: 'knowledge', D: 'method' }, answer: 'A' },
      { id: 23, options: { A: 'ordinary', B: 'usual', C: 'familiar', D: 'frequent' }, answer: 'C' },
      { id: 24, options: { A: 'set', B: 'make', C: 'have', D: 'do' }, answer: 'B' },
      { id: 25, options: { A: 'reward', B: 'benefit', C: 'tip', D: 'goal' }, answer: 'A' },
      { id: 26, options: { A: 'attach', B: 'join', C: 'add', D: 'connect' }, answer: 'D' },
    ],
  },
  part6: {
    title: 'Central College student fashion show – review',
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      'by Sam Coulston, college magazine reporter\nAs you may know, we had a fantastic fashion show here at the college last week. The aim was to display the work that the fashion students (27) ........................ recently been involved in all year here at the college, and show parents and friends the results. And it was clear to us that (28) ........................ were impressed by it.\n',
      'The models that (29) ........................ part in the show were actually the students themselves, wearing their own clothes designs. (30) ........................ were some amazingly creative clothes on show, such as a dress made of recycled materials, and a coat that included every colour you could possibly think of! And the scenery, created (31) ........................ the students in the Art Department, was really spectacular too.\n',
      'Mrs Jackson, Head of Design, said: \'There\'s absolutely (32) ........................ doubt in my mind that all these students are extremely talented – and I\'m sure we\'ll hear more about them in the future. I wish them every success in their careers.\'',
    ],
    questions: [
      { id: 27, answer: 'have' },
      { id: 28, answer: 'they' },
      { id: 29, answer: 'took' },
      { id: 30, answer: 'There' },
      { id: 31, answer: 'by' },
      { id: 32, answer: 'no' },
    ],
  },
}

// PET Trainer 1 Test 3 Reading 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 3 · PDF 页 95–104（书页 94–103）
// 答案来源：书内 Practice Test Key Test 3（PDF 页 215 / 书页 214），逐题核对
const TRAINER1_TEST_3_READING = {
  id: 'pet-trainer1-3-reading',
  title: 'PET Trainer 1 · Test 3 Reading',
  source: {
    file: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    collection: 'PET Trainer 1',
    test: 3,
    pages: '书页 94–103',
    answerSource: '书内 Practice Test Key（书页 214）',
    verified: true,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'notice',
        content: "Toni's Pizza Bar\nWant to enjoy a pizza with your friends?\nThis week only – special offers on our giant pizzas.",
        options: {
          A: 'Choose which size of pizza you buy and still get a special price.',
          B: 'Pay less at the moment for pizzas big enough to share with other people.',
          C: "The very big pizzas at Toni's are only available this week.",
        },
        answer: 'B',
      },
      {
        id: 2,
        type: 'text',
        from: 'Mrs Walsh, head teacher',
        to: 'All students',
        content: "Lots of you have got in touch with me, with good ideas for increasing recycling around the school. I'll announce which ones we've chosen in the hall this afternoon.",
        options: {
          A: 'Mrs Walsh wants students to contact her with plans for recycling around the school.',
          B: 'Mrs Walsh intends to let students know which of their suggestions the school will use.',
          C: 'Mrs Walsh wants students to go to the hall today to help recycle rubbish.',
        },
        answer: 'B',
      },
      {
        id: 3,
        type: 'text',
        from: 'Sarah',
        to: 'Tim',
        content: "Tim\nI'm going to a tree-planting day tomorrow, to help the environment by increasing the number of trees. If you're interested, come along – and bring some friends, if they'd also like to help!\nSarah",
        options: {
          A: "Sarah is keen to get others involved in an environmental project she's joining.",
          B: 'Sarah says a tree-planting project is still short of volunteers to complete their work.',
          C: 'Sarah is wondering whether to take part in a project with her friend.',
        },
        answer: 'A',
      },
      {
        id: 4,
        type: 'notice',
        content: "BROWN'S BOOKS\nEverything must go!\nMoving to a new location in town\nAll goods, including books, half-price this week.",
        options: {
          A: 'This bookstore will no longer serve customers in the town after this week.',
          B: 'Only books are available here this week, at a reduced price.',
          C: "To buy books from Brown's, find their new store in town after this week.",
        },
        answer: 'C',
      },
      {
        id: 5,
        type: 'text',
        from: 'Carrie',
        to: 'Mum',
        content: "Mum,\nAre you at work? I thought I'd put my gym kit in my room – and it's not in the washing machine either. Could it still be in your car? Call me?\nThanks\nCarrie",
        options: {
          A: 'Carrie is asking if her mum has washed her gym kit for her.',
          B: 'Carrie has just remembered where she left her gym kit.',
          C: 'Carrie wonders if her mum has driven to work with her gym kit.',
        },
        answer: 'C',
      },
    ],
  },
  part2: {
    title: 'Reviews of animated films',
    instructions: 'The people below all want to watch an animated film. On the opposite page there are reviews of eight animated films. Decide which film would be the most suitable for the people below.',
    people: [
      { label: '6', name: 'Kerim', text: 'Kerim wants a film that uses traditional animation methods, such as simple drawings rather than computers to create pictures. He particularly enjoys films about animals, and with great songs sung by well-known singers.' },
      { label: '7', name: 'Alice', text: 'Alice, her mum and small sister want a film they can all enjoy. Alice loves films where she feels the main characters are like her, and that have soundtracks involving only instruments, with no singing.' },
      { label: '8', name: 'Lukas', text: "Lukas enjoys films that make him laugh, but that he can learn something from at the same time. He's a keen reader, and he'd like a film of something he's probably already read." },
      { label: '9', name: 'Minnie', text: "Minnie wants to see a happy film that isn't just about heroes against bad people. She'd like a film that's full of surprises, that she'll want to watch over and over again." },
      { label: '10', name: 'Susana', text: "Susana wants to see a film about characters that show courage in different situations, and that have the voices of famous actors. She'd like the film to have really beautiful animation." },
    ],
    options: [
      { label: 'A', name: 'Aero', text: "You'll want to see this film again and again, with a wonderful cast of animals, and folk music soundtrack sung by studio performers. And you'll learn something new about the characters each time you watch. Based on the book by a well-known author, it's a favourite for all the family." },
      { label: 'B', name: 'Magic Makers', text: "This is a gentle film about a village of animals who all help each other through life – but things don't always go at all as they expected. In fact, they're usually far better! A beautiful, funny film with great songs you won't forget. You'll never get tired of watching it!" },
      { label: 'C', name: 'Imagining', text: "While you're watching this beautiful film, you'll also be entertained by the wonderful piano and violin music that accompanies it. It's a film for the whole family, including young children, to sit down and see together. And everyone will find that they have something in common with the people in the film." },
      { label: 'D', name: 'The Dance', text: "Although they haven't been together for long, a group of brave dancers decide to put on a performance, and their experiences are both funny and sad. The film's message is particularly suitable for teenagers, and the animation, in the form of old-fashioned cartoons rather than created by computers, is spectacular." },
      { label: 'E', name: 'Roundabout', text: 'The pictures are so fantastic, they almost need nothing more than the piano music that accompanies them. The film focuses on some brave friends who come together to support each other in various ways, and the well-known performers saying their words bring something really special to it. The film has lots to teach teenagers.' },
      { label: 'F', name: 'Terry', text: 'The pop music in this film is great, as it features the voices of top performers. The film follows a friendly tiger in the jungle, who becomes a hero to his friends. This film first came out in the 70s, and the graphics in this beautiful film have changed very little.' },
      { label: 'G', name: 'Rainbow', text: "The whole family will sing along to the songs by well-known performers in this film. Choose which of the characters is most like you – and who's your hero! From the book by teenagers' author Dylan Peters, it's been a favourite with audiences since it came out years ago." },
      { label: 'H', name: 'Constanz', text: "This beautiful film, with simple graphics, is based on the well-known novel, which has become very popular in school classrooms. Although it's full of comedy situations and surprises from beginning to end, the film also has a serious message, and will leave you with something to think about after you've watched it." },
    ],
    questions: [
      { id: 6, person: 'Kerim', answer: 'F' },
      { id: 7, person: 'Alice', answer: 'C' },
      { id: 8, person: 'Lukas', answer: 'H' },
      { id: 9, person: 'Minnie', answer: 'B' },
      { id: 10, person: 'Susana', answer: 'E' },
    ],
  },
  part3: {
    title: 'Karina Moore – teenage high diver!',
    instructions: 'For each question, choose the correct answer.',
    passage: "Several times a week, teenager Karina Moore trains at her local pool to jump from the high-diving board into the water – in an attempt to become a national diving champion.\nKarina first learned about diving during a family break in Spain, where the resort's pool had a high-diving board. Young people were diving off it, and it looked fun, but Karina didn't join in, even though she was a strong swimmer. Then after returning home, she discovered a long-distance runner she'd always admired had started diving for relaxation – so she became more interested.\nKarina joined a beginners' diving class at her local pool. They had several sessions jumping onto soft materials before trying the high board. 'The water looked a long way down,' says Karina, 'but after our training, I felt I'd handle it – without injuring myself! They'd warned me I'd land in the water fast – at around 60 kph – but I was prepared. I couldn't wait to get started – although the others weren't so keen! Anyway, I wasn't disappointed by the experience.'\nIn Karina's area, there's now lots of interest in high diving, but it's sometimes difficult for swimmers to find suitable practice facilities. Although the pools are deep enough, they're in use so often by diving clubs that other people don't get opportunities to practise. Fortunately, though, Karina's coach noticed her talent and helped her develop her techniques. After only two years, she's winning competitions in her area.\nBut what's it like to concentrate so much on diving? 'I train 20 hours a week,' says Karina, 'and I won't pretend it's easy – you have to enjoy it to spend so much time doing it! It's not easy for my parents either, though – they drive me to training sessions early in the morning, and that costs money. But they've had financial help from sports organisations, luckily. And my schoolwork and social life are good. I still meet my mates – and there's always the phone! The only thing I hadn't realised was that the pool water would damage my hair – I used to love my long hair, but I've had to cut it short because it looked awful! But I'll definitely keep on diving!'",
    questions: [
      {
        id: 11,
        text: 'What made Karina keen to take up diving?',
        options: { A: 'She wanted to repeat her holiday experience.', B: 'She found out her athletics hero had taken it up.', C: "She'd visited a pool where some teenagers were doing it.", D: 'She wanted a new challenge after her success at swimming.' },
        answer: 'B',
      },
      {
        id: 12,
        text: 'How did Karina feel the first time she used the high board?',
        options: { A: 'worried about how far it was above the pool', B: 'pleased to experience it with other beginners', C: "confident that she wouldn't get hurt", D: 'shocked to hit the water at such speed' },
        answer: 'C',
      },
      {
        id: 13,
        text: "What does the writer suggest about diving facilities in Karina's area?",
        options: { A: "They're not used as much as they could be.", B: "There aren't enough coaches teaching people to use them.", C: "There aren't as many boards as there used to be.", D: "They're not available to the public for long enough each day." },
        answer: 'D',
      },
      {
        id: 14,
        text: 'How does Karina feel about spending so much time diving?',
        options: { A: 'surprised by one effect it has had on her', B: 'sorry she no longer sees her friends so much', C: 'anxious about the amount of money it costs', D: 'grateful to be able to focus on something she loves' },
        answer: 'A',
      },
      {
        id: 15,
        text: 'What would the writer say about Karina?',
        options: {
          A: "She's a young girl who's achieved a lot by becoming a national diving champion – and all with very little support.",
          B: "She's made enormous progress in a very short time – after only a couple of years, she's already showing great signs of success.",
          C: "She has a lot of natural talent, but she's already thinking of having a break from the high board for a while.",
          D: "She's sad that she's given up almost everything for her sport – and her lifestyle really sounds quite hard.",
        },
        answer: 'B',
      },
    ],
  },
  part4: {
    title: 'Computer game exhibition',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      "Have you ever tried playing the kind of video games that your parents played? The Museum of Science in Manchester, in the UK, has held an exhibition for the last few years, which invites visitors to do exactly that. It offers them the chance to play games from the last 40 years, in various sessions throughout the day.\nThese video games sessions have now become one of the main attractions of the museum. They are full of people every day, playing a wide range of games.",
      "For parents, for example, these are usually the games they used to play in their childhood.\nThere's also an educational purpose to the games. For instance, some old types of computer, dating back 40 years, are also available in the sessions. They were originally used in classrooms to teach pupils to write their own computer programs.",
      "Now, the museum is holding workshops that encourage children to learn similar skills – and they're still very popular.\nThe sessions are also seen as social events, as people discover how much fun it is to play video games with other family members. And there's also an area at Power Up! where a number of visitors can sit down together.",
      "And nowadays, this is often how fans of video games are more likely to experience playing.\nThe exhibition also shows how much progress technology has made over the last 40 years. Parents can often remember playing very simple games. But the games that are played today are more complex.",
      "And the players also have to use much more complicated techniques.\nHowever, one serious side of the exhibition is that organisers also want to show that video gaming is an important industry, employing many skilled people.\nThat way, people who enjoy gaming will also understand all the hard work, talent and imagination that goes into creating these amazing games.",
    ],
    options: [
      { label: 'A', text: 'Visitors each pay for 90-minute sessions.' },
      { label: 'B', text: 'And at the time, it helped lots of young people to do that.' },
      { label: 'C', text: 'So they hope the exhibition will share this message.' },
      { label: 'D', text: "But not everyone thinks it's a lot of fun." },
      { label: 'E', text: "However, visitors often choose the ones they're familiar with." },
      { label: 'F', text: 'They have better storylines and animation, too.' },
      { label: 'G', text: 'They also create the music to go with the game.' },
      { label: 'H', text: 'Then they can all enjoy playing the same game.' },
    ],
    questions: [
      { id: 16, answer: 'E' },
      { id: 17, answer: 'B' },
      { id: 18, answer: 'H' },
      { id: 19, answer: 'F' },
      { id: 20, answer: 'C' },
    ],
  },
  part5: {
    title: 'Music can change the taste of vegetables!',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "Many children, and some adults too, dislike the taste of certain vegetables. The flavours of foods such as cabbage and broccoli are generally the ones people mention as their least (21) ........................ vegetables, as these vegetables are believed to have an extremely (22) ........................ taste.\n",
      "However, according to an Oxford psychologist, children might change their (23) ........................ about these foods if they can hear simple music while they're eating – such as the sounds that come from one musical instrument, called a wind chime. This instrument often (24) ........................ in people's gardens, and plays sweet notes when the wind blows through it. These notes may make the food seem to taste sweeter than it would do normally.\n",
      "However, many adults (25) ........................ that their tastes developed as they grew up, so they now enjoy a far greater range of food. As a result, they're much more (26) ........................ to eat the kind of vegetables they always hated during their childhood.",
    ],
    questions: [
      { id: 21, options: { A: 'pleasant', B: 'delicious', C: 'special', D: 'favourite' }, answer: 'D' },
      { id: 22, options: { A: 'bitter', B: 'hard', C: 'heavy', D: 'raw' }, answer: 'A' },
      { id: 23, options: { A: 'senses', B: 'minds', C: 'moods', D: 'reasons' }, answer: 'B' },
      { id: 24, options: { A: 'drops', B: 'connects', C: 'attaches', D: 'hangs' }, answer: 'D' },
      { id: 25, options: { A: 'complain', B: 'advise', C: 'admit', D: 'warn' }, answer: 'C' },
      { id: 26, options: { A: 'likely', B: 'possible', C: 'reasonable', D: 'sure' }, answer: 'A' },
    ],
  },
  part6: {
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      "Hi Marta\nHow are you? Sorry I haven't written for a while. But now I have some news – I've got a Saturday job! As you know, I've (27) ........................ meaning to look for a job for ages. But then Mum offered to let (28) ........................ work in her clothes shop, so I started last week. I'm really enjoying it, although it's hard work. There's (29) ........................ time at all to chat with the other assistants, sadly. That's (30) ........................ we're always so busy.\n",
      "The good thing is that I'm finally earning a bit of money of my own, (31) ........................ I can use to buy the things I want. I'm also getting some great work experience.\nWhy don't you come to the shop (32) ........................ day soon? It's called Modes, and it's on Green Street. I'm sure you'll find lots of clothes that you like!\nHope to see you soon.\nJanine",
    ],
    questions: [
      { id: 27, answer: 'been' },
      { id: 28, answer: 'me' },
      { id: 29, answer: 'no' },
      { id: 30, answer: 'because' },
      { id: 31, answer: 'which' },
      { id: 32, answer: 'one' },
    ],
  },
}

// PET Trainer 1 Test 4 Reading 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 4 · 书页 112–121（PDF 页 113–122）
// 答案来源：书内 Practice Test Key Test 4（书页 215 / PDF 页 216），已逐题对照 Keys 页面图核对
// 注意：Part 4 挖空位置系按文气 + Keys 推断（该书页渲染图上传失败），且第 5 片段到文章结尾存在渲染器限制，详见 REVIEW-t4.md
const TRAINER1_TEST_4_READING = {
  id: 'pet-trainer1-4-reading',
  title: 'PET Trainer 1 · Test 4 Reading',
  source: {
    file: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    collection: 'PET Trainer 1',
    test: 4,
    pages: '书页 112–121',
    answerSource: '书内 Practice Test Key（书页 215）',
    verified: true,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Lena',
        to: 'Marta',
        content: "Marta\nI won't be ready in time to catch the bus into town with you, so I'll get a lift there with Mum instead. See you at the shopping centre at about 3 p.m.\nLena",
        options: {
          A: 'suggesting that Marta travels into town without her.',
          B: 'offering Marta a lift into town instead of catching the bus.',
          C: 'checking the time she arranged to meet Marta at the shopping centre.',
        },
        answer: 'A',
      },
      {
        id: 2,
        type: 'text',
        from: 'Coach',
        to: 'Hockey team',
        content: "You played well in last week's game, but we'll need extra practice before our match against Anbridge next month – they're good. So see you on Saturday, usual place, 1 p.m. – or call me.",
        options: {
          A: "The coach needs team members to tell him if they're available for a match.",
          B: 'The coach wants to help the team improve their performance before they play again.',
          C: 'The coach is congratulating the netball team for winning their game last week.',
        },
        answer: 'B',
      },
      {
        id: 3,
        type: 'notice',
        content: 'Please give staff at the desk your college student number before using any of the computers in the Study Centre.',
        options: {
          A: 'Staff at the desk will show you how to use the computers here.',
          B: 'These computers are reserved only for students at this college.',
          C: "If you're not a college student, ask staff for permission to use a computer.",
        },
        answer: 'B',
      },
      {
        id: 4,
        type: 'text',
        from: 'Mum',
        to: 'Tom',
        content: "Tom\nThe sports shop called – the one on Hatton Street. They've finally repaired your tennis racket! Will you have time to collect it, or shall I do it on my way home from work?\nMum",
        options: {
          A: "how to find the sports shop that's repaired Tom's racket",
          B: 'whether the sports shop will still be open when she finishes work',
          C: 'if Tom is going to be available to pick up his racket',
        },
        answer: 'C',
      },
      {
        id: 5,
        type: 'notice',
        content: 'Milton Music Store\nSecond-hand guitars and violins for sale.\nVery reasonable prices.\nNew instruments also available.\nCall: 08413 672 521',
        options: {
          A: 'This store has more second-hand instruments available than new ones.',
          B: 'You can only buy instruments here that other people have already used.',
          C: "This store doesn't charge a lot for instruments that aren't new.",
        },
        answer: 'C',
      },
    ],
  },
  part2: {
    title: 'Geography websites',
    instructions: 'The people below are all doing school geography projects and want to find a website to help them.\nOn the opposite page there are descriptions of eight geography websites.\nDecide which website would be the most suitable for the people below.',
    people: [
      { label: '6', name: 'Sandra', text: "Sandra wants to learn more about what Planet Earth is actually made of, and how much of it is covered by water. She'd also like online advice about how to organise her work." },
      { label: '7', name: 'Miranda', text: "Miranda wants to learn about some of the famous tourist sites in the world, and why they have become famous. She'd like to play games on the website to help her remember the information." },
      { label: '8', name: 'Billy', text: "For his project, Billy needs to find out about the biggest mountains in the world, and the kind of animals living near them. He'd also like to see videos of the locations he's studying." },
      { label: '9', name: 'Anna', text: "Anna wants to learn about the biggest land areas of the world, and get key facts about their geography. She'd also like advice on how to improve her map-reading skills." },
      { label: '10', name: 'Kristofer', text: "Kristofer's country has very cold winters, so he's interested in how other people in cold countries deal with their environment. He'd like to share his experiences online with teenagers there." },
    ],
    options: [
      { label: 'A', name: 'Geoview', text: 'This website has fantastic videos of animals in challenging locations, and information about how they manage to live there. There are also helpful tips on understanding geographical information, such as maps and diagrams of the Earth and its oceans. Users can also share information about useful links to follow.' },
      { label: 'B', name: 'Geographical', text: "This website has lots of maps, quizzes and advice, to check your knowledge of what you've studied – and remind you of anything you've forgotten! There's a brilliant section about popular places in many different countries, which attract large numbers of visitors, with background historical details about the reasons these places are now so well known." },
      { label: 'C', name: 'Geography.com', text: 'This website has interesting maps and details about places that have become famous tourist destinations in different countries, and also some famous geographical features around the world, such as the biggest mountains and rivers. There are also online tips available on how to research information for projects.' },
      { label: 'D', name: 'Goworld', text: 'How do people live in places with very high or low temperatures in different seasons? Find out how people adapt to the climate they live in, how it affects their lives and what they do to stay warm or keep cool, as necessary. You can also upload your own stories about life in extreme temperatures in your country.' },
      { label: 'E', name: 'Planet Zoom', text: "Not sure how to understand the information included on maps? Here's a step-by-step guide to using them! The site also has games and puzzles about all the continents, including Africa, Asia and Europe, and important details about them, such as their huge size, and their mountain ranges, rivers and climate." },
      { label: 'F', name: 'Worldwide', text: "This website has lots of beautiful photos, maps and film clips to help you learn more about some of the highest – and coldest – peaks on the planet. You'll find plenty of amazing facts about them, together with details of the wildlife that makes its home in the surrounding areas." },
      { label: 'G', name: 'GeoInfo', text: "Which countries in the world have the coldest winters, the highest mountains or the most unusual animals? Check your knowledge with some fantastic geography puzzles and games. And the photos on this site also show people's everyday lives in very different climate conditions." },
      { label: 'H', name: 'Geowatch', text: "What's underneath the ground we walk on? You'll find maps and diagrams here to tell you – including what you'd see inside the planet if you cut it in half! There's information, too, about parts of the world that aren't land, but actually oceans and seas, and help on researching and presenting project information." },
    ],
    questions: [
      { id: 6, person: 'Sandra', answer: 'H' },
      { id: 7, person: 'Miranda', answer: 'B' },
      { id: 8, person: 'Billy', answer: 'F' },
      { id: 9, person: 'Anna', answer: 'E' },
      { id: 10, person: 'Kristofer', answer: 'D' },
    ],
  },
  part3: {
    title: 'Cross-country skiing in Sweden',
    author: 'by Jenna Walton, aged 15',
    instructions: 'For each question, choose the correct answer.',
    passage: "Last year, Mum and I wanted to try a winter sport called cross-country skiing – travelling on skis across the countryside. And pictures of one area in Sweden, with people skiing along through forests on wonderful white snow, persuaded us that destination was a good choice. We hadn't done much skiing, though, so weren't sure how difficult cross-country skiing was, compared with skiing fast down steep mountains. But we signed up to join a group of people, of all ages, plus a guide.\nWe'd read about the place we went to before we left, so we knew it was close to where Sweden ends and Norway starts. And our family knew we couldn't text home, as there was no internet connection – and actually, it was relaxing to be far from anywhere, or anyone. What we hadn't realised was that from there, we'd be able to see amazing coloured lights in the sky, which appeared at certain times of year, called the Northern Lights – what a sight!\nOn our first day there, I hated getting up in the dark, but it meant I saw the sun come up over the forest, so I was glad I did. And sunshine was forecast for the week, I was delighted to hear! But the real problem was my 15kg rucksack, full of food and clothes – I had no idea it would weigh that much. Anyway, we skied for hours across mainly flat snow. Having special light skis was supposed to help us climb the few hills there were – although I still couldn't do it!\nFinally we stopped for the night. It wasn't until we'd reached our hut that our guide mentioned we'd just crossed a frozen lake to get there – but nothing surprised us by that point! Anyway, he gave us all jobs to do – cutting fire wood and cooking food – and soon we were having dinner, made from whatever food we'd brought – a strange mix, but it tasted delicious. And everywhere was so peaceful outside that none of us stayed awake long.\nMum and I want to try another winter sports trip, maybe snowboarding. But we'll probably end up just as exhausted as we were after this trip!",
    questions: [
      {
        id: 11,
        text: 'Jenna and her mum decided to go cross-country skiing in Sweden because',
        options: {
          A: 'they wanted a change from mountain skiing holidays.',
          B: "they'd heard the sport would be easier than skiing down hills.",
          C: "they'd met a group of people who wanted to go, too.",
          D: 'they found a place there that they were keen to visit.',
        },
        answer: 'D',
      },
      {
        id: 12,
        text: 'After their arrival, what did they discover about where they were staying?',
        options: {
          A: "It wasn't far from the border with another country.",
          B: 'They could get great views of a spectacular natural event.',
          C: "It was at a point where they couldn't use technology.",
          D: "They weren't near local people or their homes.",
        },
        answer: 'B',
      },
      {
        id: 13,
        text: 'How did Jenna feel about the long trips through the snow on skis?',
        options: {
          A: 'surprised she had to carry such a heavy bag',
          B: 'pleased about the weight of the skis she was given',
          C: "glad that going uphill wasn't as hard as she'd thought",
          D: "worried the good weather they were having wouldn't last",
        },
        answer: 'A',
      },
      {
        id: 14,
        text: 'Regarding their accommodation, Jenna says everyone',
        options: {
          A: 'had difficulties getting to sleep there.',
          B: 'was unhappy at the quality of the food.',
          C: 'had to help out with all the housework.',
          D: 'was shocked to hear details of their journey there.',
        },
        answer: 'C',
      },
      {
        id: 15,
        text: 'What would Jenna text to a friend about her trip?',
        options: {
          A: "One reason we chose this trip was that we thought we'd be among loads of trees, which we love – but that hasn't happened so far.",
          B: "The people in our group were really friendly – but they were all Mum's age and older, really.",
          C: "I'm not used to getting out of bed so early to do things! But it was worth it, as the sunrise was wonderful.",
          D: 'Mum and I have agreed that although the trip was great, we might attempt something less tiring on our next winter holiday.',
        },
        answer: 'C',
      },
    ],
  },
  part4: {
    title: 'The giant piano',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      'A young man in New Zealand recently became famous for making one of the largest pianos ever. Adrian Mann, who now works as a professional piano builder, started building the piano when he was just 16 years old, and made many of the parts for it himself. The piano is 5.7 metres long and is very heavy. And the keyboard actually has keys that are a metre in length.',
      "But despite this difference in size, the instrument can still be played perfectly, thanks to Adrian's hard work.",
      "In fact, the whole thing started when Adrian became interested in the materials used for the wires inside the piano. These create the notes when they're hit. And he found that if the wires were really long, he could get an amazing sound. From there, he went on to build the whole piano.\nThe instrument was kept inside a church in his town for some time, before Adrian decided it was time to transfer the huge piano from the church to his workshop.",
      "So in the end, the fire service had to come and help take the instrument to its new home. Since the move, a lot of piano players have visited Adrian to try out the piano. But Adrian says that when they arrive, some people aren't very positive about the piano.",
      "But actually, it always performs brilliantly. They soon discover that the piano can play a wide range of music, just like any normal piano.\nThere's been so much interest in Adrian's piano that he could probably start making and selling others just like it. So, at the moment, he has no plans to make any more.",
    ],
    options: [
      { label: 'A', text: 'However, he put a lot of work into his original model.' },
      { label: 'B', text: "It's so big, you could imagine actually lying down inside it!" },
      { label: 'C', text: 'So what gave Adrian the idea to create such a huge piano?' },
      { label: 'D', text: "They expect that the instrument won't sound very good." },
      { label: 'E', text: "But things weren't always that simple." },
      { label: 'F', text: "That's much larger than on a normal-sized piano." },
      { label: 'G', text: 'Most of them were surprised by the wonderful result.' },
      { label: 'H', text: "But he soon found he couldn't move it out on his own." },
    ],
    questions: [
      { id: 16, answer: 'F' },
      { id: 17, answer: 'C' },
      { id: 18, answer: 'H' },
      { id: 19, answer: 'D' },
      { id: 20, answer: 'A' },
    ],
  },
  part5: {
    title: 'Clever birds',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "The wild birds known as ravens are thought to be very clever. In fact, they can solve some quite (21) ........................ problems, especially when they're trying to get food. For example, one bird was filmed taking a box of nuts from a bird table and (22) ........................ it onto the ground, so that it would break and the bird could eat the nuts inside!\n",
      'Scientists also (23) ........................ that the birds could actually use stones as tools to (24) ........................ out simple tasks. So in an experiment, they taught five birds to use a tool to open a box with food inside. The birds soon became very (25) ........................ at doing this. So for the next experiment, the birds were given a small (26) ........................ of tools to choose from. They always picked the tool that scientists had given them for the first task. And hours later, they could still remember which tool they\'d used!',
    ],
    questions: [
      { id: 21, options: { A: 'expert', B: 'complicated', C: 'heavy', D: 'confused' }, answer: 'B' },
      { id: 22, options: { A: 'letting', B: 'falling', C: 'dropping', D: 'leaving' }, answer: 'C' },
      { id: 23, options: { A: 'noticed', B: 'advised', C: 'watched', D: 'studied' }, answer: 'A' },
      { id: 24, options: { A: 'take', B: 'carry', C: 'make', D: 'check' }, answer: 'B' },
      { id: 25, options: { A: 'experienced', B: 'intelligent', C: 'correct', D: 'keen' }, answer: 'A' },
      { id: 26, options: { A: 'group', B: 'total', C: 'amount', D: 'number' }, answer: 'D' },
    ],
  },
  part6: {
    title: 'My thoughts on how to write',
    instructions: 'For each question, write the correct answer.\nWrite one word for each gap.',
    passage_segments: [
      "by Sarah Beecham\n\nWelcome to my blog! That's for anyone who's new and has (27) ........................ visited this site before! But if you (28) ........................ seen some of my blogs, then you'll know I like sharing ideas about creative writing and how to do it.\n",
      "At the moment, I'm sitting at my desk in my room, (29) ........................ I do most of my writing. I love writing stories, but not every day. I'll often update my diary or something, too – and this blog, (30) ........................ course! But I have a notebook of things I would like to include in my writing and new words I like the sound of.\n",
      "But I recently discovered the most important thing is just to (31) ........................ going once you've started writing. And (32) ........................ doesn't matter how bad your writing is at the beginning, because you can always go back and make improvements. In fact, that's the part I enjoy most!",
    ],
    questions: [
      { id: 27, answer: 'never' },
      { id: 28, answer: 'have' },
      { id: 29, answer: 'where' },
      { id: 30, answer: 'of' },
      { id: 31, answer: 'keep' },
      { id: 32, answer: 'it' },
    ],
  },
}

// PET Trainer 1 Test 5 Reading 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 5 · 书页 130–139（PDF 页 131–140）
// 答案来源：书内 Practice Test Key · Test 5（书页 216 / PDF 页 217），逐题核对
// 注意：书页 131–140 中仅 131 有页面渲染图，其余页基于 OCR 转录；
//       OCR 缺失/无法辨认的个别词已在 REVIEW-t5.md 中逐条列出。

const TRAINER1_TEST_5_READING = {
  id: 'pet-trainer1-5-reading',
  title: 'PET Trainer 1 · Test 5 Reading',
  source: {
    file: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    collection: 'PET Trainer 1',
    test: 5,
    pages: '书页 130–139',
    answerSource: '书内 Practice Test Key（书页 216）',
    verified: true,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Mrs Evans',
        to: 'All students',
        content: 'Could everyone involved in the school performance for parents tomorrow please meet in the hall at 4 p.m. today for the final practice?',
        options: {
          A: 'Mrs Evans wants to check who is taking part in the performance this afternoon.',
          B: 'Mrs Evans wants everyone to practise their performance again before the audience sees it.',
          C: 'Mrs Evans is letting students know that parents are coming to the practice tomorrow.',
        },
        answer: 'B',
      },
      {
        id: 2,
        type: 'notice',
        content: "PLEASE DON'T FEED BREAD TO THE DUCKS!\nAVAILABLE FOR SALE INSIDE LAKE SHOP:\nSPECIAL FOOD PERMITTED FOR BIRDS",
        options: {
          A: "If you need bread during your visit, it's available for sale inside the shop.",
          B: 'Feeding the birds on the lake is not allowed unless you have special permission.',
          C: 'Visitors are encouraged not to give the birds anything apart from proper bird food.',
        },
        answer: 'C',
      },
      {
        id: 3,
        type: 'text',
        from: 'Mum',
        to: 'Tim',
        content: "Hi Tim,\nI know it's swimming tomorrow. After your injury, I'm not sure if you felt well enough to take part – only you know how your leg feels, so it's your decision.\nMum",
        options: {
          A: "Tim must decide whether he's well enough to swim after his injury.",
          B: "Tim's mum doesn't think Tim is fit and ready to go swimming yet.",
          C: "Tim needs to inform his swimming coach that he's injured his leg.",
        },
        answer: 'A',
      },
      {
        id: 4,
        type: 'text',
        from: 'Jade',
        to: 'Lucy',
        content: "Hi Lucy,\nI discovered when I got home that one of my new earrings was missing from my ear. Can you remember which shop we got them from? I'll get another pair – in fact, do you want to come with me?\nJade",
        options: {
          A: 'tell Jade if she knows where a missing item is.',
          B: 'accompany Jade on a shopping trip into town.',
          C: "help Jade to replace something she's lost.",
        },
        answer: 'C',
      },
      {
        id: 5,
        type: 'notice',
        content: 'ART ROOM\nBecause of heating problems, see Mr James in Room B16 to check where your art sessions will be.',
        options: {
          A: 'Art classes will be in Room B16 as the Art Room is too cold.',
          B: 'To find out which room to go to for art lessons, ask Mr James.',
          C: 'Mr James is taking all art lessons until problems in the Art Room are fixed.',
        },
        answer: 'B',
      },
    ],
  },
  part2: {
    title: 'Beaches',
    instructions: 'The people below all want to find a beach to go to at the weekend. On the opposite page there are descriptions of eight beaches. Decide which beach would be the most suitable for the people below.',
    people: [
      { label: '6', name: 'Neil', text: "Neil and his family want a beach that's close to a car park and offers several other activities apart from spending time in the sea. They'd also like a picnic area near the beach." },
      { label: '7', name: 'Jack and Henry', text: "Jack and Henry can swim well, so they'd like opportunities for distance swimming with their dad. Their mum wants to go riding on the beach, and also buy snacks for everyone there." },
      { label: '8', name: 'Salma and Katia', text: 'Salma and Katia want to go somewhere they can try watersports for the first time. Their mum wants a beach with warm water, and organised activities suitable for their small sister.' },
      { label: '9', name: 'Anna', text: 'Anna and her family would like to do some sunbathing, but also have a long walk along the coast. Anna also wants to try doing some sand sculptures.' },
      { label: '10', name: 'Sylvie', text: "Sylvie's family want a beach suitable for Sylvie's small sister to go swimming, as she's only just learned. Sylvie wants somewhere with various organised games and activities, where she can meet other people her age." },
    ],
    options: [
      { label: 'A', name: 'Holly Bay', text: "The café here serves delicious meals and sandwiches! The water's calm in the bay, perfect for people wanting to swim across it – around 1 km! However, it's very deep, so is only suitable for strong swimmers. There are often sand artists here, and horses for hire to take you along the beach." },
      { label: 'B', name: 'Franscombe', text: "This beach is popular with families with young children and people who aren't strong swimmers, as the water is warm and not deep. Bring your own food to the picnic area, or try the great snacks at the café. However, the nearest car park is quite a walk away." },
      { label: 'C', name: 'Barmouth Beach', text: "This beach often has displays of animals and other designs – skilfully made from sand, which you can also learn how to do. It's also the perfect place for lying in the sun – or why not explore the beach paths on foot for an hour or two? The views are fantastic." },
      { label: 'D', name: 'Westley Beach', text: "There are distance swimming, sailing and surfing sessions for people of all levels, and the beach is also famous for sculptures made of sand, which artists display every weekend! It's easily reached from the car park through a lovely wood, which you can explore on foot when it gets cooler." },
      { label: 'E', name: 'Minton Strand', text: "The sea here offers safe swimming and sailing, even for beginners, but there's still plenty to do when you want a change from sunbathing. A teenagers' beach club offers sports and cycle rides, volleyball and beach chess – great for everyone getting to know each other!" },
      { label: 'F', name: 'South Beach', text: "This beautiful beach offers safe swimming. And when you fancy a change from sunbathing or watersports, there's a funfair nearby, and beautiful gardens to walk through, with tables and chairs where you can eat your own food. Leave your car by the gardens, and you'll be on the beach almost immediately." },
      { label: 'G', name: 'Silver Sands', text: "This beach has a sea temperature slightly higher than other coastal areas, and with its gentle waves it's perfect for children. There's plenty to do, too, with play leaders offering games to entertain younger ones, and surfing and sailing available at all levels, including beginners. The snack bar is excellent, too." },
      { label: 'H', name: 'Maple Sands', text: "Adults keen on horses love this beach, with its daily riding sessions. At certain times, the sea leaves warm-water pools on the beach, perfect for children to play in, but the water further out is deeper, for more challenging swimming. And the teenagers' beach club offers group activities, like making sand sculptures – great for making new friends!" },
    ],
    questions: [
      { id: 6, person: 'Neil', answer: 'F' },
      { id: 7, person: 'Jack and Henry', answer: 'A' },
      { id: 8, person: 'Salma and Katia', answer: 'G' },
      { id: 9, person: 'Anna', answer: 'C' },
      { id: 10, person: 'Sylvie', answer: 'E' },
    ],
  },
  part3: {
    title: 'Our school newspaper',
    author: 'by Michael Williams',
    instructions: 'For each question, choose the correct answer.',
    passage: "Some years ago, our head teacher, Mrs Waters, decided to start a school newspaper, and get as many students as possible to take on the job of producing it – and parents, too. She felt the newspaper would help them learn more about school life, through articles on things like sports achievements and arts projects, which not all students know about if they're not taking part. Students took the whole thing very seriously – and we now have a prize-winning newspaper!\nSome of my friends joined the newspaper team immediately and enjoyed it. I'd always loved creative writing and drawing cartoons, which I thought would be perfect in the newspaper, so I signed up. My dad, who's a journalist, was pleased – he thought that even though I wasn't keen on a job like his, the newspaper would be a great opportunity for me. And he was right – I loved it! Dad often came along to give advice, which was popular with the students. It was difficult sometimes, if he was busy, but he learned a lot about the school that way.\nMy first job was writing a report about a sports event – a writing style I'd never attempted before. But Dad reminded me it was similar in some ways to writing a story – getting information in the right order. Once I'd understood that, there was no stopping me – and after my first efforts, I developed quite a professional style, which was brilliant.\nSometimes the team couldn't use what I'd written, or my cartoons, for whatever reason, but I didn't mind. And sometimes it was hard to finish stuff on time, but I usually got there.\nI'm now one of the editors – we decide what goes into the newspaper, so our names no longer appear in print. And it's stressful sometimes as we don't have much time, but we try to manage that properly. We also correct mistakes in people's articles, which we all had to get used to, but we were soon doing it without thinking – and in our own schoolwork, too. I still put off calling people outside school for comments on stuff, but I guess it's all good experience – at least, that's what Dad says!",
    questions: [
      {
        id: 11,
        text: "Michael's head teacher wanted to start a student newspaper to",
        options: {
          A: 'provide an activity for students not interested in sport or art.',
          B: 'make students feel more confident about taking part in something.',
          C: 'keep students better informed about what was happening at school.',
          D: 'give students the experience of being responsible for something.',
        },
        answer: 'C',
      },
      {
        id: 12,
        text: 'Michael decided to join the newspaper because',
        options: {
          A: 'he had ideas about some work he could do for it.',
          B: 'he was considering a career in journalism.',
          C: 'his friends had encouraged him to do so.',
          D: 'he liked the idea of being part of a team.',
        },
        answer: 'A',
      },
      {
        id: 13,
        text: 'When Michael first started working on the newspaper, he was',
        options: {
          A: "disappointed when his stories sometimes weren't used.",
          B: 'delighted at the way his writing skills improved.',
          C: 'pleased to find he could make use of his art skills.',
          D: "worried he'd be late completing some of his writing.",
        },
        answer: 'B',
      },
      {
        id: 14,
        text: 'What does Michael say about his role on the newspaper now?',
        options: {
          A: "He feels uncomfortable about correcting other students' work.",
          B: 'He still needs to improve the way he manages his time.',
          C: "He's happier to handle making telephone calls to others.",
          D: "He's become better at making articles more accurate.",
        },
        answer: 'D',
      },
      {
        id: 15,
        text: "What would Michael's dad say about the newspaper?",
        options: {
          A: "I was surprised at how keen Michael was to get involved – he's never shown that much interest in writing before.",
          B: "Michael's newspaper team always seem really keen to hear my suggestions.",
          C: "Michael would never admit it, but I know he's proud to see his name in the newspaper these days – and I am, too!",
          D: "It's been great to finally find out about life at the school through reading the newspaper. I didn't really know much about it before.",
        },
        answer: 'B',
      },
    ],
  },
  part4: {
    title: 'A new way of making electricity',
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      'Ever since the 19th century, when people were developing different ways of creating electricity, companies have looked for improved ways of producing power, using cleaner and more efficient methods. Now a UK company called Pavegen has been working on technology that could be widely used in the future to produce electricity. The company has developed a special type of floor, made of square tiles. Underneath each square, there\'s a system that can produce a certain amount of electricity very cheaply – from the energy created every time someone steps on it!',
      'The creator of the floor, Laurence Kemball-Cook, came up with the idea when he was a student, and did some work experience with an energy company. The company asked him to investigate ways of providing street lighting in city centres, using energy from the sun to produce electricity.',
      "One reason was that many city centres don't get enough sunlight, because of all the tall buildings. Then he thought of a better plan.",
      "The right technology could be used to convert this energy into electricity – right under people's feet! The design of the floor is actually extremely effective.",
      "And the reason is that a lot of energy is produced simply because of the large numbers of people walking across the floor. In fact, the special squares are already in place in several locations with high numbers of pedestrians. These include big department stores and also an airport. The flooring can have other uses too, such as recording how many people visit a shopping centre at particular times.",
      'For example, shop owners in the centre would be interested in knowing at which times of days they have the highest customer numbers. So the next time you visit a big shopping centre, have a careful look at the floor that you\'re walking across!',
    ],
    options: [
      { label: 'A', text: "But that isn't the end of the story." },
      { label: 'B', text: 'This kind of information is very useful for certain people.' },
      { label: 'C', text: 'Why not use the energy created by pedestrians instead?' },
      { label: 'D', text: 'However, one big problem could be cost.' },
      { label: 'E', text: "And it's actually based on a simple idea." },
      { label: 'F', text: "This is especially true when it's been used in very busy areas." },
      { label: 'G', text: 'But it soon became clear that this might not work.' },
      { label: 'H', text: 'This new system should work even better.' },
    ],
    questions: [
      { id: 16, answer: 'E' },
      { id: 17, answer: 'G' },
      { id: 18, answer: 'C' },
      { id: 19, answer: 'F' },
      { id: 20, answer: 'B' },
    ],
  },
  part5: {
    title: 'Colouring books',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      'Many people probably used to spend time adding colour to pictures in colouring books when they were children. However, once people get older, very few of them continue with the hobby. Instead, they (21) ........................ their crayons away in the cupboard forever.\n',
      'However, psychology researchers now think that even for adults, (22) ........................ as little as ten minutes a day colouring pictures in this way can bring huge (23) ........................ For example, some people say that it improves their (24) ........................ for a while by making them feel more cheerful and generally calmer.\n',
      "One reason for this may be that other activities (25) ........................ with art, such as drawing or painting, can actually be quite stressful, especially if you don't feel very successful at it. But adding colour to a picture that's already drawn for you (26) ........................ only a low level of skill, so you can relax rather than becoming anxious about it!",
    ],
    questions: [
      { id: 21, options: { A: 'leave', B: 'set', C: 'give', D: 'put' }, answer: 'D' },
      { id: 22, options: { A: 'taking', B: 'completing', C: 'spending', D: 'filling' }, answer: 'C' },
      { id: 23, options: { A: 'benefits', B: 'interests', C: 'favours', D: 'uses' }, answer: 'A' },
      { id: 24, options: { A: 'character', B: 'mood', C: 'condition', D: 'mind' }, answer: 'B' },
      { id: 25, options: { A: 'connected', B: 'joined', C: 'compared', D: 'attached' }, answer: 'A' },
      { id: 26, options: { A: 'depends', B: 'calls', C: 'lacks', D: 'requires' }, answer: 'D' },
    ],
  },
  part6: {
    title: "Joining the girls' football team",
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      "Hi Karina,\nGuess what! I've finally joined the local girls' football team in my town! As you know, it's something I've wanted to do (27) ........................ ages, so I'm glad I've finally signed up.\n",
      "I think my parents were a bit surprised, though, as I'd never really taken very (28) ........................ interest in sport, but after watching a women's football match on TV, I just knew it was for me.\n",
      "I've attended football training every week (29) ........................ then, and last Saturday I played in my first match. It was really exciting! And (30) ........................ of the best things was that I actually scored a goal! We didn't go on to win the match, but our coach was still really pleased with our performance.\n",
      "Our next match is on the 25th. You're not on holiday with your parents then, (31) ........................ you? So why don't you come along and watch? It would (32) ........................ great to see you!\nSamantha",
    ],
    questions: [
      { id: 27, answer: 'for' },
      { id: 28, answer: 'much' },
      { id: 29, answer: 'since' },
      { id: 30, answer: 'one' },
      { id: 31, answer: 'are' },
      { id: 32, answer: 'be' },
    ],
  },
}

// PET Trainer 1 Test 6 Reading 数据（自动转录，待人工核对）
// 题目来源：B1 Preliminary for Schools Trainer 1 (2020) Test 6 · 书页 148–157（PDF 页 149–158）
// 答案来源：书内 Practice Test Key Test 6（书页 217 / PDF 页 218），已逐题对照 Keys 页面图核对
// 注意：Q3 邮件中段、Q15 选项 B/C、Part 2 个别行首、Part 4 空位切分存在 OCR 不确定处，详见 REVIEW-t6.md
const TRAINER1_TEST_6_READING = {
  id: 'pet-trainer1-6-reading',
  title: 'PET Trainer 1 · Test 6 Reading',
  source: {
    file: 'pet-for-schools-trainer-1-for-the-revised-exam-from-2020-test-book.pdf',
    collection: 'PET Trainer 1',
    test: 6,
    pages: '书页 148–157',
    answerSource: '书内 Practice Test Key（书页 217）',
    verified: true,
  },
  part1: {
    instructions: 'For each question, choose the correct answer.',
    questions: [
      {
        id: 1,
        type: 'text',
        from: 'Katie',
        to: 'Erica',
        content: "Erica,\nI've just read that novel you lent me – I really enjoyed it, so I'm feeling sad I've finally finished it! Just wondering if you've got ideas for anything else I might like as much.\nKatie",
        options: {
          A: "Katie is upset that Erica hasn't returned the book she's borrowed.",
          B: "Katie disagrees with Erica about a book they've both just read.",
          C: 'Katie wants some suggestions about what she could read next.',
        },
        answer: 'C',
      },
      {
        id: 2,
        type: 'notice',
        content: 'PLEASE DO NOT LEAVE BICYCLES HERE!\nENTRANCE IN USE\nNIGHT AND DAY\nCYCLE PARK BEHIND BUILDING',
        options: {
          A: 'This entrance is only for use by cyclists who need to enter the building.',
          B: 'You will prevent people entering and leaving if your bicycle is left here.',
          C: 'There is somewhere you can leave your bicycle opposite this building.',
        },
        answer: 'B',
      },
      {
        id: 3,
        type: 'text',
        from: 'Mr Davidson',
        content: "Thanks for attending the film show yesterday, and the director's interesting talk. The questions you asked him, and the lively discussion in class afterwards, showed you'd really thought about the film.",
        options: {
          A: 'to give his opinion of the film they watched together',
          B: 'to suggest that they should spend another lesson talking about a film',
          C: 'to congratulate them on the way they took part in a film event',
        },
        answer: 'C',
      },
      {
        id: 4,
        type: 'notice',
        content: 'UNDER-16s SAILING CLUB\nNow taking new members\nLimited spaces available\nClub meets every Saturday\nPay weekly or monthly',
        options: {
          A: 'Young people have the chance to learn some new watersports at this club.',
          B: "You don't need to pay for several sessions in advance at this club.",
          C: 'To become a member at this club, apply by Saturday at the latest.',
        },
        answer: 'B',
      },
      {
        id: 5,
        type: 'notice',
        content: 'Despite previous difficulties between members, pop band Melt has just announced a concert tour later in the year. Tickets on sale from ticket agents soon!\nWatch this website for details.',
        options: {
          A: 'To attend a Melt tour concert, check the site regularly to find out more.',
          B: "You'll soon be able to buy tickets for Melt's concerts on this website.",
          C: "Melt have just started touring again even though they've had problems in the band.",
        },
        answer: 'A',
      },
    ],
  },
  part2: {
    title: 'Department stores',
    instructions: 'The people below all want to find a department store to visit in their city.\nOn the opposite page there are descriptions of eight department stores.\nDecide which department store would be the most suitable for the people below.',
    people: [
      { label: '6', name: 'Jasmine', text: "Jasmine would like to find a store where they can eat outside, and her dad wants somewhere known for its good-quality suits. They also want to buy a necklace for Jasmine's mum." },
      { label: '7', name: 'Peter', text: "Peter wants to buy some special sweets for his grandma's birthday, and his older sister, Nell, wants to see the latest women's fashions. They also need to buy new tennis T-shirts without spending a lot." },
      { label: '8', name: 'Maria', text: 'Maria wants a store selling clothes that use materials produced without damaging the environment. Her mum would like somewhere that has great customer service and is beautiful inside.' },
      { label: '9', name: 'John', text: "John enjoys cooking, and wants to buy some unusual ingredients. His parents like stores that have been in the same buildings since they were young, and that have great toys for John's young sister." },
      { label: '10', name: 'Samuel and Mark', text: "Samuel and Mark want to visit a store with a good selection of chess sets. They'd like to have some delicious ice creams and buy something made in the store to eat later." },
    ],
    options: [
      { label: 'A', name: "Hallwick's", text: "People often visit Hallwick's just for the displays and lights that make it so attractive to shop here. It was the first to sell clothes made of pure, natural cotton, grown in conditions that avoid creating pollution. The assistants are polite and help with any questions about goods." },
      { label: 'B', name: "Crozier's", text: "This store is in a beautiful new building. One floor is full of toys and board games like chess, and downstairs there's a huge variety of cakes, sweets and also fresh food that's perfect for making a meal! The roof garden is popular here in summer, and the friendly staff serve delicious lunches." },
      { label: 'C', name: "Stafford's", text: "This store is popular for its range of good-quality sportswear at very reasonable prices, which is hard to find elsewhere. And on the ground floor, you'll find displays of their famous handmade candies – great for celebrations! And Stafford's is always the first to offer new designs in men's and women's clothing, too!" },
      { label: 'D', name: "Barton's", text: "Barton's has been here since it opened in 1930, and still has its huge glass door and beautiful windows. The first floor is fantastic for children, as it's packed with things to play with – at reasonable prices. And downstairs, you'll find a huge selection of amazing fresh food rarely found elsewhere." },
      { label: 'E', name: "Gardener and Bell's", text: "This store has been here since 1950, and is the place for cool clothes and jewellery, as it updates its items every few weeks – and many are made from environmentally-friendly materials. The sportswear section has clothes and equipment for almost every sport, although prices can be high." },
      { label: 'F', name: "Davidson's", text: "This traditional-looking store opened in 1860, and still offers high-class, fashionable goods at reasonable prices, with many made from natural materials. The men's clothes are particularly recommended, and there's also an area selling nothing but beautiful jewellery. And on fine days, try the rooftop restaurant – the food is fantastic." },
      { label: 'G', name: "Ford and Madecroft's", text: "The café here serves fantastic meals, but also has amazing chocolates and frozen desserts of all kinds, and the bakers make fantastic biscuits and cakes to take away. Upstairs, you'll find a display of toys and also a huge range of board games, together with instructions to help you play." },
      { label: 'H', name: "Oldridge's", text: "The customer service here is the best anywhere in the city, and staff will help you find what you're looking for, from jewellery to children's toys. And the café here, probably one of the most attractive you'll ever visit, serves the biggest ice creams anywhere, too – and the best cakes!" },
    ],
    questions: [
      { id: 6, person: 'Jasmine', answer: 'F' },
      { id: 7, person: 'Peter', answer: 'C' },
      { id: 8, person: 'Maria', answer: 'A' },
      { id: 9, person: 'John', answer: 'D' },
      { id: 10, person: 'Samuel and Mark', answer: 'G' },
    ],
  },
  part3: {
    title: 'Whale-watching trip',
    author: 'by Jack Madison, 15',
    instructions: 'For each question, choose the correct answer.',
    passage: "A while ago, my friend Olivia was telling me about a whale-watching trip she'd been on, in Canada. I wanted to tell her I was about to do the same thing, off the north coast of the UK, where my grandparents live. Whales had recently appeared there again, and my grandparents were convinced we'd see some – so I was sure my trip would be as good as Olivia's! But then I saw some reviews of the trip my dad had booked for us, when no-one had seen any whales at all. So, in the end, I decided not to tell Olivia anything about my trip, in case it wasn't successful!\nAnyway, Dad and I set off on our trip – which was Dad's idea – and it was fantastic! Travelling out to sea on the tour boat with our guide, we soon reached the spot where whales often appeared. Then we waited – and nothing happened. I was sure this wouldn't last, though. People kept calling out they'd seen one, which was exciting – but then it turned out they were wrong. Then finally I saw something move under the water – a minke whale! So I felt like a hero for the rest of the trip!\nThe whale was a wonderful sight, with its huge back not far from the boat. Our guide said it was around five tonnes in weight and around 10 metres long. Yet, despite its size, it swam alongside us at speed, and with little effort. We waited to see if more appeared, and some time later, we saw three more some distance away, that kept diving under the water and coming up again. Then just after I'd filmed them, they disappeared.\nAlthough the water's less deep around the coast, larger whale species appear in the area with minke whales, feeding on fish. But minkes are curious creatures, so they're more likely to approach tourist boats – which was why we were successful! Then later, up on the cliffs, we looked out to sea, searching for signs of whales. Sometimes seabirds diving into the water means whales are around, as they're stealing the whales' meal. We were unlucky, sadly – but we'll be back!",
    questions: [
      {
        id: 11,
        text: "Jack wasn't keen to mention his whale-watching trip to Olivia because",
        options: {
          A: 'he thought her trip sounded a lot more exciting.',
          B: "he'd read some negative reports about where he was going.",
          C: "he wasn't sure if his dad had definitely arranged it.",
          D: "he didn't know whether she was very interested in whales.",
        },
        answer: 'B',
      },
      {
        id: 12,
        text: 'On board the whale-watching boat, Jack',
        options: {
          A: 'was proud to be the first person to see a whale.',
          B: 'began to worry that they might all be disappointed.',
          C: 'tried not to get excited when anyone saw something.',
          D: "was glad he'd persuaded his dad to come with him.",
        },
        answer: 'A',
      },
      {
        id: 13,
        text: 'When Jack saw the minke whale, he was',
        options: {
          A: 'surprised at how close it came to the boat.',
          B: "amazed that it was so much bigger than he'd imagined.",
          C: 'impressed that it moved through the water so easily.',
          D: 'delighted to see it had arrived with several others.',
        },
        answer: 'C',
      },
      {
        id: 14,
        text: 'Jack suggests minke whales appeared in the same area as the boat because',
        options: {
          A: 'they knew there were plenty of fish there.',
          B: 'they were attracted by the arrival of the visitors.',
          C: "they didn't have to compete for food with seabirds.",
          D: 'they preferred how deep the water was there.',
        },
        answer: 'B',
      },
      {
        id: 15,
        text: 'What would Jack text to his grandparents about the whales?',
        options: {
          A: "I'll send you my video of the group of whales – they only appeared briefly, so they weren't as interesting as the first one",
          B: "I wasn't sure we'd see whales like my friend Olivia did, but now we're really happy we came here.",
          C: "I must take you up to the cliffs to look for whales, as we haven't been there, so far.",
          D: 'You were so sure our whale-watching trip would be a success – and you were right!',
        },
        answer: 'D',
      },
    ],
  },
  part4: {
    title: "What's the point in studying music?",
    instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
    passage_segments: [
      "Many children have music classes when they attend school. And it's thought that music can really help children with learning other subjects.\nFor example, one research project looked at what happened when a class of children were divided into groups and given a simple task to do, with one group listening to music while completing it, and the other completing the task in silence.",
      "The first group performed better than the second. So this seems to suggest that music can improve performance in certain areas.\nSo how exactly can you benefit from studying music? According to some studies, musical training can develop the part of your brain that's involved with language, so you can understand your own language better. And that's a very useful skill to have.",
      "What's more, young people who've studied music also seem to score more highly in other areas such as maths.",
      "For example, reading music includes learning about quarter and half notes, which are basically fractions, like in maths. And when you're learning about rhythm, you're counting the notes in a piece of music. So they do appear to be connected.\nMusic also lets you explore new ideas, think in a creative way, and gain in confidence. If you're learning the guitar, for example, it can be really exciting when you're able to start inventing your own pieces of music. And when you do that, you're practising your listening skills because you have to listen carefully to the music you're making.",
      "It's certainly essential when you join an orchestra, for example.\nOne of the biggest benefits, of course, is that listening to music helps you to be less stressed.",
      'That should always be in a relaxed atmosphere, though, to be effective. And who knows? Maybe your musical knowledge will open up a great career path for you in the future!',
    ],
    options: [
      { label: 'A', text: 'Students have also shared their own ideas about music.' },
      { label: 'B', text: 'And creating music can make you feel the same way.' },
      { label: 'C', text: 'So it could be that these school subjects are linked in some way.' },
      { label: 'D', text: 'These explain why music affects us in certain ways.' },
      { label: 'E', text: 'And there was a difference between the two.' },
      { label: 'F', text: 'It could also help with learning a second one.' },
      { label: 'G', text: "But it isn't really what's happening." },
      { label: 'H', text: 'This is particularly important when performing with other people.' },
    ],
    questions: [
      { id: 16, answer: 'E' },
      { id: 17, answer: 'F' },
      { id: 18, answer: 'C' },
      { id: 19, answer: 'H' },
      { id: 20, answer: 'B' },
    ],
  },
  part5: {
    title: 'A brief history of apples',
    instructions: 'For each question, choose the correct answer.',
    passage_segments: [
      "Do you always have a piece of fruit for your lunch? If you do, it's probably an apple! This is true particularly in places like western Europe, where apples have grown for hundreds of years. So it would be easy to (21) ........................ that's where they came from originally.\n",
      "In fact, though, the fruit we know today has been on an extraordinary (22) ........................ over the centuries. Research suggests modern apples originally came all the way from Kazakhstan in Asia, and (23) ........................ up in Europe partly because of people carrying goods along the famous Silk Road, from western Europe all the way to China in the east. This helped to spread apples in both (24) ........................ People (25) ........................ down their apples after they'd finished eating them, and the seeds entered the ground and produced new types of apple trees. Farmers were then able to start developing a much (26) ........................ range of apples.",
    ],
    questions: [
      { id: 21, options: { A: 'consider', B: 'wonder', C: 'imagine', D: 'expect' }, answer: 'C' },
      { id: 22, options: { A: 'distance', B: 'travel', C: 'course', D: 'journey' }, answer: 'D' },
      { id: 23, options: { A: 'reached', B: 'ended', C: 'set', D: 'kept' }, answer: 'B' },
      { id: 24, options: { A: 'routes', B: 'ways', C: 'directions', D: 'paths' }, answer: 'C' },
      { id: 25, options: { A: 'threw', B: 'dropped', C: 'fell', D: 'let' }, answer: 'A' },
      { id: 26, options: { A: 'longer', B: 'deeper', C: 'higher', D: 'broader' }, answer: 'D' },
    ],
  },
  part6: {
    title: 'Learning to swim',
    instructions: 'For each question, write the correct word.\nWrite one word for each gap.',
    passage_segments: [
      "Last month, I did something amazing, which I'd almost begun to think wasn't possible. I actually swam one length of the swimming pool! I know it doesn't seem like (27) ........................ achievement, because swimming is something that everyone seems to learn really easily. But there was just (28) ........................ way I could manage it. And it wasn't as if I hadn't tried. Apart (29) ........................ all the lessons I had at school, I also went swimming with Dad (30) ........................ week. But in (31) ........................ of all the practice I was getting, I still wasn't able to swim.\n",
      "Then one day, when I thought Dad was holding me up in the water as usual, I suddenly realised – he wasn't! I was swimming on (32) ........................ own, without help! After that, I swam several lengths of the pool.\n",
      "So if you're having trouble learning something, don't give up. It will definitely happen one day!",
    ],
    questions: [
      { id: 27, answer: 'an' },
      { id: 28, answer: 'no' },
      { id: 29, answer: 'from' },
      { id: 30, answer: 'every' },
      { id: 31, answer: 'spite' },
      { id: 32, answer: 'my' },
    ],
  },
}

export const PET_READING_TRAINER1 = [
  TRAINER1_TEST_1_READING,
  TRAINER1_TEST_2_READING,
  TRAINER1_TEST_3_READING,
  TRAINER1_TEST_4_READING,
  TRAINER1_TEST_5_READING,
  TRAINER1_TEST_6_READING,
]

export default PET_READING_TRAINER1
