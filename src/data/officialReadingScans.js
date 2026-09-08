const choiceQuestions = (start, answers) => answers.map((answer, index) => ({
  id: start + index,
  answer,
  options: { A: 'A', B: 'B', C: 'C' }
}))

const wordQuestions = answers => answers.map((accepted, index) => ({
  id: 25 + index,
  answers: Array.isArray(accepted) ? accepted : [accepted]
}))

const pages = (base, names) => names.map(name => `/images/ket/reading/official/${base}/${name}.jpg`)
const p1q = (id, type, content, options, answer, extra = {}) => ({ id, type, content, options: { A: options[0], B: options[1], C: options[2] }, answer, ...extra })
const p2 = (title, names, texts, questions) => ({
  title,
  people: names.map((name, index) => ({ name, label: ['A','B','C'][index], text: texts[index] })),
  questions
})

function scanTest({ id, book, test, file, pageNames, answers, part1Questions, part2Data }) {
  const [p1, p2, p3, p4, p5] = pageNames
  const structuredPart2 = part2Data ? {
    ...part2Data,
    questions: part2Data.questions.map((question, index) => typeof question === 'string'
      ? { id: 7 + index, text: question, answer: answers[6 + index] }
      : question)
  } : null
  return {
    id,
    title: `官方真题 ${book} · Test ${test}`,
    source: { file, collection: `KET青少版官方真题 ${book}`, test, verified: true, format: 'source-scan' },
    part1: part1Questions
      ? { instructions: 'For each question, choose the correct answer.', questions: part1Questions }
      : { scanPages: pages(`b${book}t${test}`, p1), questions: choiceQuestions(1, answers.slice(0, 6)) },
    part2: structuredPart2 || { scanPages: pages(`b${book}t${test}`, p2), questions: choiceQuestions(7, answers.slice(6, 13)) },
    part3: { scanPages: pages(`b${book}t${test}`, p3), questions: choiceQuestions(14, answers.slice(13, 18)) },
    part4: { scanPages: pages(`b${book}t${test}`, p4), questions: choiceQuestions(19, answers.slice(18, 24)) },
    part5: {
      scanPages: pages(`b${book}t${test}`, p5),
      questions: wordQuestions(answers.slice(24))
    }
  }
}

export const officialReadingScans = [
  scanTest({
    id: 2, book: 1, test: 2, file: 'KET青少版官方真题1.pdf',
    pageNames: [['page-025','page-026'], ['page-027','page-028'], ['page-029','page-030'], ['page-031'], ['page-032']],
    answers: ['B','A','C','C','B','B','B','A','C','A','B','A','C','B','A','C','A','C','A','C','B','C','A','A','not','want','as','of','than','to'],
    part1Questions: [
      {
        id: 1, type: 'notice', title: 'Fashionista Clothes',
        content: 'Please keep the receipt – you cannot return anything without it.',
        options: {
          A: 'Make sure that your receipt is correct before you leave the shop.',
          B: 'If you want to bring something back to this shop, you need a receipt.',
          C: 'Someone will check your receipt when you go out of the shop.'
        }, answer: 'B'
      },
      {
        id: 2, type: 'text', from: 'Sally', to: 'Luke',
        content: "Thanks for asking me to go to the cinema. It sounds fun, but I’m afraid I’ve got too much homework. Maybe some other time.",
        question: 'Sally is telling Luke',
        options: {
          A: 'why she is too busy to see a movie.',
          B: 'which homework she needs to complete.',
          C: 'when she will be available to see a movie.'
        }, answer: 'A'
      },
      {
        id: 3, type: 'text', from: 'Jessica',
        content: "Did anyone pick up my biology textbook by mistake after our science lesson in the library? I don’t mind coming to get it from you.",
        options: {
          A: 'Jessica needs to borrow a textbook from someone in her science class.',
          B: 'Jessica wants someone from her science class to bring her textbook to her.',
          C: 'Jessica is hoping someone in her science class has found her textbook.'
        }, answer: 'C'
      },
      {
        id: 4, type: 'text', from: 'Nathan', to: 'Laila',
        content: "I’m visiting my grandparents this weekend so I can’t meet you to finish our art project. Are you free this Thursday instead?",
        question: 'Why did Nathan write the message?',
        options: {
          A: 'to check if Laila can work on their art project over the weekend',
          B: 'to tell Laila he won’t be able to complete the project on his own',
          C: 'to ask Laila if she’s able to meet him earlier than they planned'
        }, answer: 'C'
      },
      {
        id: 5, type: 'ad', title: '24 hour sale!',
        content: 'Download any 10 songs for 99p\nThen £1.99 per song as usual',
        options: {
          A: 'You have 24 hours to buy as many songs as you like for 99p each.',
          B: 'The cost of each song is £1.99 after you buy more than ten songs.',
          C: 'Some popular songs that cost £1.99 aren’t included in the sale.'
        }, answer: 'B'
      },
      {
        id: 6, type: 'text', from: 'Stella', to: 'Aaron',
        content: "Thanks for lending me your bike. I’ll bring it back as soon as mine is repaired. It might be ready by next weekend.",
        options: {
          A: 'Stella is checking when Aaron will need his bike back.',
          B: 'Stella can’t say exactly when she will be able to return Aaron’s bike.',
          C: 'Stella wants to know if she can borrow Aaron’s bike until next weekend.'
        }, answer: 'B'
      }
    ],
    part2Data: {
      title: 'How three young people became DJs',
      people: [
        { name: 'DJ Fire', label: 'A', text: 'This Russian DJ grew up travelling with his parents who were in a rock band. He started learning piano at four, and drums at twelve. As a teenager, he wrote songs and posted them online as a hobby. Then, at 20, a music company started paying him to write songs for pop bands – and some have been on the radio. Later he became interested in electronic music and started playing it in clubs. He’s hoping to get an invitation to play at some international festivals this summer.' },
        { name: 'DJ Goldrock', label: 'B', text: 'This South African DJ started playing the piano when he was 5. At 15, he played pop songs at a cousin’s birthday party, and got a hundred kids dancing. At that moment, he knew he wanted to be a DJ and never have a normal job. He started a website where he played his favourite songs, and soon had lots of fans. He’s now 20 and has his own show on national radio. For the past three years, he’s spent his summers going around the world playing dance music at festivals.' },
        { name: 'DJ Mango', label: 'C', text: 'At 15, this Brazilian DJ’s parents gave him a new computer and DJ equipment for making electronic dance music. Later that year, he started playing music at local dance parties to make some extra money, and the parties just got bigger and bigger. A few years later, a journalist asked him why he became a DJ. He said that as a child his dream was to play the electric guitar for a rock group, but he wasn’t good enough!' }
      ],
      questions: [
        { id: 7, text: 'Who travels to different countries every year to play his music?', answer: 'B' },
        { id: 8, text: 'Who comes from a family of musicians?', answer: 'A' },
        { id: 9, text: 'Who was paid to make music as a teenager?', answer: 'C' },
        { id: 10, text: 'Who knows how to play more than one musical instrument?', answer: 'A' },
        { id: 11, text: 'Who works for a radio station?', answer: 'B' },
        { id: 12, text: 'Who writes music for other musicians?', answer: 'A' },
        { id: 13, text: 'Who wanted to play in a band when he was younger?', answer: 'C' }
      ]
    }
  }),
  scanTest({
    id: 3, book: 1, test: 3, file: 'KET青少版官方真题1.pdf',
    pageNames: [['page-041','page-042'], ['page-043','page-044'], ['page-045','page-046'], ['page-047'], ['page-048']],
    answers: ['A','C','B','B','A','C','C','B','A','B','C','A','B','A','B','C','B','C','C','A','B','C','B','B','the','it',['but','although','however','so'],'than','to','at'],
    part1Questions: [
      p1q(1,'text','Thanks for inviting me to your badminton party at the sports club next Saturday afternoon. Will I know anyone else there?',['who is going to the party.','what they’re going to do at the party.','what time the party starts.'],'A',{from:'Ben',to:'Toby',question:'Ben wants to know'}),
      p1q(2,'notice','Summer show\nI have some great actors and dancers but still need people who play instruments.\nWe practise Tuesdays and Thursdays after school.\nMrs Jenkins',['some better actors and dancers.','anyone with free time this summer.','students who are good at music.'],'C',{question:'For the show, Mrs Jenkins is looking for'}),
      p1q(3,'ad','Are you an excellent swimmer and over 10 years old?\nThen you can join the sailing club!\nThursdays 5–8 p.m.\nOnly £50 per term',['New members of any age are welcome to join the club.','You must be able to swim to become a member of the club.','There is a special price for new members who join the club on Thursday.'],'B'),
      p1q(4,'text','Have you still got that history book of mine? Could you let me have it back because Rob needs it for the weekend?',['lend the book to Rob when he’s finished reading it','return the book so that someone else can read it','use the book over the weekend'],'B',{from:'Sally',to:'Justin',question:'What should Justin do?'}),
      p1q(5,'text','I saw your text about Dad’s birthday present, but we always get him socks! What about sunglasses? Mum can take us to get some.',['Karin doesn’t agree with Serena about what to buy their father.','Karin thinks their mother will have better ideas for a present.','Karin doesn’t know what to buy her father for his birthday.'],'A',{from:'Karin',to:'Serena'}),
      p1q(6,'notice','City Library\nLibrary computers are for members only – ask receptionist about becoming a member.',['You need to ask the receptionist which computers you can use.','Only people who work at the library can use the computers.','If you join the library, you can use the computers.'],'C')
    ],
    part2Data: p2('A great science teacher',['Joshua','Dan','Chris'],[
      'Mrs Philips was my science teacher when I joined my school and she still is, so I don’t know what the other teachers are like. But I think Mrs Philips gives us so much great stuff to do. Even when we think something is too hard for us, she says she knows we can all do it, and she’s usually right! She also shows us drawings, photos and websites to explain how things work, which I love.',
      'I have a fantastic science teacher called Mrs Rhodes. She loves her subject - especially plants. She is able to draw wonderful pictures of them on the board, which helps us understand them. She never seems to get tired or bored when she’s teaching. She takes time to get to know each student in the class so that she can help them better. I think she’s the reason I want to be a science teacher one day.',
      'In just one year, Mrs James has become my favourite teacher. Until I joined her class, I was very bad at science, but she explained things so well that I soon understood them better. My marks went up almost immediately. She always has time at the end of lessons if we’re having problems. But it isn’t just teaching that makes her great. She’s also interested in our lives and gives advice on how to be a better person.'
    ],['Who says his teacher helps with things other than science?','Who says his teacher is really interested in what she teaches?','Who says his teacher believes every student can be successful?','Who says he has chosen his future career because of his teacher?','Who says his teacher helped him to improve quickly?','Who says he’s only ever had one science teacher at his school?','Who says his teacher is very good at drawing?'])
  }),
  scanTest({
    id: 4, book: 1, test: 4, file: 'KET青少版官方真题1.pdf',
    pageNames: [['page-057','page-058'], ['page-059','page-060'], ['page-061','page-062'], ['page-063'], ['page-064']],
    answers: ['B','C','B','B','C','A','C','A','C','A','B','A','C','A','C','A','B','B','B','B','A','C','A','B','as','the','all','in','to','if'],
    part1Questions: [
      p1q(1,'text','About our badminton match at the sports club this afternoon – I can’t find my racket anywhere. Do you have a spare one?',['she knows where the match is taking place.','she can lend him some equipment.','she is free to play badminton today.'],'B',{from:'Sebastian',to:'Lisa',question:'Sebastian is asking Lisa if'}),
      p1q(2,'text','I looked online and there’s no bus to the beach on Saturday morning! My mum can’t drive us – is your dad free?',['check the bus timetable for Saturday.','ask his father to give them a lift on Saturday.','find out the quickest way to drive to the beach.'],'B',{from:'Dave',to:'Mike',question:'Dave would like Mike to'}),
      p1q(3,'email','I didn’t copy down what our maths homework is for tomorrow. Can you have a look in your homework diary and email me?',['Nancy has lost her homework diary.','Nancy needs help with some difficult homework.','Nancy forgot to make a note of what she needs to do.'],'C',{from:'Nancy',to:'Fred'}),
      p1q(4,'notice','School Library\nFrom next week library will open at 8.00 and close at 5.30\n(Wednesdays 8.30–4.30)\nSpeak to staff about booking a school laptop.',['Library staff won’t have much time to help you next week.','Arrive early at the library if you would like to book a school laptop.','The times when you can visit the library will change soon.'],'C'),
      p1q(5,'notice','School Sports Day\nThis will take place in hall instead of field if it rains – check website.\nFriday, 28 September, 9.00 a.m.–3.00 p.m.\nParents and friends welcome.',['If the weather is bad, we will cancel sports day.','All students should come to the hall at 9.00 a.m. on Friday.','Students can invite visitors to come and enjoy the day.'],'C'),
      p1q(6,'text','Did you discuss that homework with your teacher? Is it clearer now what she wants? I’m home now if you need to call.',['has changed his homework.','helped him to understand his homework.','needs to speak to her about his homework.'],'B',{from:'Mum',to:'Joe',question:'Mum is asking if Joe’s teacher'})
    ],
    part2Data: p2('My trip to Rome',['Rhodri','Patrick','Josh'],[
      'I had a great time in Rome with my family. It was my first holiday outside my own country and I couldn’t wait to go. I found out all I could about Rome from the library and on the internet. Knowing about the history made seeing all the old buildings, like the Colosseum, much more interesting. We were able to do lots of sightseeing because the taxis and buses and the metro were cheap and fast.',
      'It was really hot when I arrived at Rome airport with my parents last summer. I loved walking around famous places like the Trevi Fountain, but all the cars and buses in the city sometimes made walking difficult. I really loved the food. The Italians have a special kind of ice cream called gelato which is wonderful, but the best thing I had was a pizza at a local market. I also got some great things to take back for my friends.',
      'It was so hot when my dad and I went to Rome last year that we usually waited until after the sun went down to explore the city on foot. During the day we went to museums, shops and restaurants. The pasta there is amazing, and I had some Italian ice cream, called gelato, for the first time. That was the thing I liked most. After a few days in Rome, we decided to take a train into the countryside for a day. It was nice to see all the small villages and farms.'
    ],['Who says it was easy to travel around in Rome?','Who says he felt very excited before his holiday?','Who says there was a lot of traffic in Rome?','Who says he prepared carefully for his trip?','Who says his favourite food on the trip was Italian ice cream?','Who bought some things to give as gifts?','Who took a short trip outside Rome?'])
  }),
  scanTest({
    id: 5, book: 2, test: 1, file: 'KET青少版真题 2.pdf',
    pageNames: [['page-010','page-011'], ['page-012','page-013'], ['page-014','page-015'], ['page-016'], ['page-017']],
    answers: ['C','C','C','A','B','B','B','A','B','C','A','A','C','A','B','C','C','A','C','A','A','A','B','B','than','it','the',['when','after','before'],'be',['do','did']],
    part1Questions: [
      p1q(1,'email','Can you come sailing this weekend? My dad’s rented a small boat for two days. It doesn’t matter that it’s your first time.',['there isn’t much space on the boat.','the sailing trip will be very short.','Lucy has never sailed before.'],'C',{from:'Emma',to:'Lucy',question:'Emma says it’s not a problem that'}),
      p1q(2,'notice','Friday singing lessons (Room 3B)\nPlease tell Mrs Topson by Thursday afternoon if interested.',['Mrs Topson is telling students about a change to their singing lessons.','Mrs Topson is offering to give singing lessons on Thursdays and Fridays.','Mrs Topson would like to know who wants to have singing lessons.'],'C'),
      p1q(3,'text','You left your maths book at my house yesterday. I’ll bring it to school tomorrow and give it to you.',['Max has borrowed one of Jamie’s books.','Max and Jamie will have a maths class tomorrow.','Max has found Jamie’s schoolbook.'],'C',{from:'Max',to:'Jamie'}),
      p1q(4,'email','Anyone interested in becoming a member of an after-school sports club this term must complete an online form first.',['You cannot join a sports club until you have filled in a form.','If you belong to a sports club, check online for details about it.','The sports clubs aren’t taking new members because they’re already full.'],'A',{from:'Mr Thomas',to:'Students'}),
      p1q(5,'text','I’m working late tonight – back by 7. Turn the heating on if you’re cold. You’ll find some pasta in the fridge.',['there is a problem with the heating.','she’s left some food ready for Jack.','she’ll be home at the usual time.'],'B',{from:'Mum',to:'Jack',question:'Jack’s mother says'}),
      p1q(6,'email','We need some articles for the school magazine. Email me with your ideas by Tuesday. I’ll need the finished articles in two weeks.',['will be available on Tuesday.','is looking for writers.','needs new readers.'],'B',{from:'School magazine',to:'All students',question:'The school magazine'})
    ],
    part2Data: p2('Canadian holiday',['Gary','Marcus','George'],[
      'Last summer, my family and another family we’re close to went by coach to Canada. It was a long journey and the coach was crowded, so I was really glad when we finally arrived. We stayed in a little wooden house in the middle of a forest. The weather wasn’t too hot, which I was pleased about. The best thing was the horse riding. It was my first time on a horse, but I had lessons every day and by the end of the holiday I was quite good.',
      'I went to Canada in August with my family. My mum booked everything online, and we got a non-stop flight from the UK. We stayed in a little hotel in a town called Whistler. From our room, we could see beautiful mountains and fields of flowers. We did lots of activities, including swimming, hiking and white-water rafting. There was an interesting shop in town where I found things to take back home for my friends.',
      'I learnt to fish last summer, so my parents bought me fishing equipment as a birthday present. They said Canada is great for fishing so we could go there for our holiday to try it out. We drove from our home in the US to the national park and put up our tent near a lake. The next day it was raining so hard you almost couldn’t see the lake. But I thought, “Fantastic, that’s perfect for catching fish.” And it was true, because I caught five that day. I took lots of photos to show my friends back home.'
    ],['Who describes the view from where he was staying?','Who says he didn’t enjoy the journey from his home?','Who bought some gifts while he was on holiday?','Who describes feeling excited by some bad weather?','Who says he enjoyed learning a new activity during his holiday?','Who went on holiday with friends as well as family?','Who explains why he and his family chose to go to Canada?'])
  }),
  scanTest({
    id: 6, book: 2, test: 2, file: 'KET青少版真题 2.pdf',
    pageNames: [['page-026','page-027'], ['page-028','page-029'], ['page-030','page-031'], ['page-032'], ['page-033']],
    answers: ['A','C','A','C','B','A','B','C','A','C','B','C','A','A','B','B','C','A','B','C','A','B','C','A','be','a','on',['or','to'],['them','these','those'],'if'],
    part1Questions: [
      p1q(1,'notice','School picnic\nBring sandwiches, but sorry – no chocolate. I have bottles of water for everyone. Don’t forget a jacket – the weather won’t be very warm.',['Students don’t need to bring their own drinks to the picnic.','Students will not have a picnic if the weather’s bad.','Students can bring any food they like to the picnic.'],'A'),
      p1q(2,'ad','Bike for sale – £100\nTwo years old and has new tyres and lights. Good for riding in town or exploring the countryside. Contact Kevin – 033126502.',['The bike has a few things wrong with it.','Call Kevin to find out how much the bike costs.','You can use the bike in different kinds of places.'],'C',{question:'What does the advert say?'}),
      p1q(3,'notice','This month’s newsletter available to download. Includes everything students need to know about school.',['Students can find out information about the school in an online newsletter.','Students need to tell the school if they are interested in receiving a newsletter.','Students should let the school know what they want included in the newsletter.'],'A'),
      p1q(4,'notice','Library\nIf you would like to take out any books to read during the school holidays, Friday is the last day you can do this.',['Students must return books to the library before Friday.','The school library will be closed on Friday.','Students should borrow books by the end of Friday.'],'C'),
      p1q(5,'text','I hope your cold’s better. Mr Morgan said don’t worry about bringing your history project to class – you can upload it instead.',['give his project to Peter','post his project online','bring his project to school'],'B',{from:'Peter',to:'Danny',question:'What should Danny do?'}),
      p1q(6,'text','I’m still at work. Grandma will meet you after school and take you back to hers for dinner. I’ll be there soon after that.',['to explain to Priti when he will see her','to tell Priti he will eat with her this evening','to ask Priti to contact her grandmother'],'A',{from:'Dad',to:'Priti',question:'Why did Priti’s dad write this message?'})
    ],
    part2Data: p2('Three places to learn surfing',['Nosara','Agadir','Inch Marlow'],[
      'From the centre of the town of Nosara, you can easily walk to several good beaches for beginner surfers. The sea is warm all year round and the weather is beautiful, so you’ll be surprised by how quiet the beaches always are. There are many excellent surf teachers around the town, and their prices aren’t high. The town’s also famous for its wildlife park, where you can see some amazing sea animals.',
      'The area around Agadir in the south of Morocco is very popular with surfers. Beginners need to go in autumn when the sea is safe and the water is nice and warm. Experienced surfers will enjoy it more in winter when the waves are big and exciting. From the city you can drive to many lovely beaches in less than 20 minutes. The area’s well known for having a large number of surf camps. These are comfortable and friendly and don’t cost much.',
      'A surprising number of people haven’t heard that the southern side of Barbados is excellent for beginner surfers. However, Zed Layson, a famous surfer, has a school at Surfer’s Point, which is excellent for those who want to try the sport for the first time. As well as good teachers, there is always a photographer waiting to take a picture of you on your surfboard. In summer it rains a lot, but the water is warm so surfing is still possible.'
    ],['Which place is only good for beginners at one time of year?','Where can you learn from a well-known teacher?','Which place has something to do when you’re not surfing?','Which place has wet weather at one time of the year?','Where is it possible to stay without paying a lot?','Which place is not well known as a good place to learn to surf?','From which town can you get to the surfing beaches on foot?'])
  }),
  scanTest({
    id: 7, book: 2, test: 3, file: 'KET青少版真题 2.pdf',
    pageNames: [['page-042','page-043'], ['page-044','page-045'], ['page-046','page-047'], ['page-048'], ['page-049']],
    answers: ['C','B','A','C','A','C','B','C','A','A','C','B','A','B','C','A','A','C','C','A','C','A','B','B',['was','is'],'than','do','a','why','there'],
    part1Questions: [
      p1q(1,'email','The gym’s not available tomorrow for practice because of the roof repairs, but we can use the school hall after 4.00 p.m.',['The dance group won’t be able to use the school hall tomorrow.','The repairs to the gym roof will be finished at 4.00 p.m. tomorrow.','Dance practice will not be in the usual place tomorrow.'],'C',{from:'Ms Graham',to:'Dance group'}),
      p1q(2,'text','The history trip’s this Friday, but I’m still feeling ill. I’ll decide tomorrow if I’m going and then I’ll let the teacher know.',['The history trip is happening tomorrow instead of Friday.','Tilly may not be well enough to go on the school trip.','Julia should tell the teacher if Tilly is going on the trip or not.'],'B',{from:'Tilly',to:'Julia'}),
      p1q(3,'ad','Highfields School computer club\nStarts Monday 4.30 p.m.\nLearn how to make interesting websites.',['If you join this club, you might get better at making websites.','The members of this club need to have experience of making websites.','The club wants students to think of ideas to make the school website interesting.'],'A'),
      p1q(4,'email','I’d like to have your art projects this Friday if possible. If you haven’t finished, bring them to my office by Monday 9.00 a.m.',['They should begin their art projects on Monday.','He would like to talk to them about their projects on Friday.','They can have some extra time to complete their projects.'],'C',{from:'Mr Green',to:'Students',question:'What is Mr Green telling students?'}),
      p1q(5,'text','I’m at football practice with Joe. Can I invite him for supper afterwards? We’ve both done all our homework.',['Simon would like to bring Joe home with him.','Simon is thinking of going to football practice with Joe.','Simon wants Joe to help him with his homework.'],'A',{from:'Simon',to:'Mum'}),
      p1q(6,'email','Did I leave my sunglasses at your house? Check the kitchen table. If you find them, can you bring them to school tomorrow?',['David is checking where Chloe has put his sunglasses.','David is going to lend Chloe his sunglasses.','David is trying to find out if Chloe has his sunglasses.'],'C',{from:'David',to:'Chloe'})
    ],
    part2Data: p2('Cookery schools for young people',['Park Cookery School','Little Chefs Cookery School','Good Cook School'],[
      'Students of all ages are welcome at this school, and children can even do a course with their parents. Before starting each day, the group goes to the local market to buy fresh food to cook with, and at the end of the morning everyone has a meal together and shares the dishes they’ve made. Several times a year, the school asks a different professional chef to visit to give students ideas for new dishes.',
      'The courses at this school show 10- to 16-year-olds how to make simple but delicious main meals using food from local farms. At the end of every day, students take photos of the dishes and post them on the school website. Then they carefully pack their dishes, so they can enjoy them later with their family that evening. For busy students who cannot get there after school, there are also morning classes every Saturday.',
      'This school has courses for 11- to 15-year-olds who want to make healthy food the whole family can enjoy. Students learn what they should and shouldn’t eat and also how to cook with fruit and vegetables. The course includes online videos that give ideas for dishes students can practise at home at weekends. This school is very popular, so call now to get your place!'
    ],['Which school has a course at the weekend?','Which school teaches students about foods which are good for them?','At which school can the whole family take a class together?','Which school invites someone special to come and teach students?','Which school puts extra cooking instructions on the internet?','At which school do students take home the food they have cooked?','Which school’s cooking course includes a shopping trip?'])
  }),
  scanTest({
    id: 8, book: 2, test: 4, file: 'KET青少版真题 2.pdf',
    pageNames: [['page-058','page-059'], ['page-060','page-061'], ['page-062','page-063'], ['page-064'], ['page-065']],
    answers: ['B','C','B','B','C','A','C','A','C','A','B','A','C','A','C','A','B','B','B','B','A','C','A','B','there','than','it',['lot','load'],'to','the'],
    part1Questions: [
      p1q(1,'ad','Greenfields Sports Club\nHalf-price when you join with a friend!\nOffer available January only.',['Extra sports will become available for members to try.','Two people can join for the price of one.','New members will pay nothing for a month.'],'B',{question:'What will happen at the club in January?'}),
      p1q(2,'text','I’ve lost my maths textbook! Can I borrow yours so I can do the homework? Will you be at home at 5.00 p.m.?',['to ask Holly to explain a problem in the textbook','to ask Holly if she has found his textbook','to ask Holly to lend him a textbook'],'C',{from:'Jack',to:'Holly',question:'Why has Jack written this text?'}),
      p1q(3,'text','Make sure you’ve put your homework in your school bag – and pick up those clothes from your bedroom floor before I get home.',['finish his homework','tidy his bedroom','change his clothes'],'B',{from:'Mum',to:'Tom',question:'What does Tom’s mum want Tom to do before she gets home?'}),
      p1q(4,'notice','School Cafe\nMonday/Tuesday next week – no hot food.\nDrinks and sandwiches only.',['The cafe will be closed for several days next week.','Some kinds of food won’t be available for part of next week.','Students are asked to bring sandwiches to school next week.'],'B'),
      p1q(5,'email','You missed tennis club today, and the day of the competition has changed to Monday. Will you have your new racket by then?',['to tell Hannah to remember her tennis racket','to ask Hannah why she didn’t go to the tennis club','to give Hannah new information about the competition'],'C',{from:'Kate',to:'Hannah',question:'Why has Kate written this email?'}),
      p1q(6,'notice','Timetables for next term will be ready to collect from the school office next week, or you can print them from the website from tomorrow.',['There are two ways of finding out about next term’s timetable.','Students who don’t have a computer can get their timetable this week.','Go to the school office next week for information about printing your timetable.'],'A')
    ],
    part2Data: p2('Adventure holidays',['David','Hari','Nick'],[
      'My parents booked this adventure holiday, and to begin with I thought it sounded a bit scary. But in fact, I really enjoyed it. We spent the first week mountain biking. It wasn’t as difficult as it looked, and during the week I really improved. Then we moved to a different hotel near a beach for the second week, where we learned to do lots of water sports. That was my favourite part of the holiday. I made friends with some other boys in the hotel.',
      'We’ve been on holiday with this company once before, but this time my parents chose France instead of Croatia. The hotel wasn’t great this year. It was really crowded and it was hard to get a seat in the dining room. However, the sports and activities were fantastic. In the first week, we did climbing and hiking, and in the second week we did water sports. The other guests were great too.',
      'We usually have quiet holidays, but this year I really wanted to do something more exciting. I found the website for this company and showed it to my parents. At first they were worried, but after they spoke to the staff they started to like the idea. I was so glad when they booked! We had a great time. Mum and Dad met some new friends and said they want to book with this company again next year.'
    ],['Who says his family will have another adventure holiday in the future?','Who says he got better at one of the sports he did on holiday?','Who says that his parents made some new friends on holiday?','Who preferred the second week of his holiday to the first?','Who says there were too many people at the hotel where he stayed?','Who says he was worried about going on an adventure holiday?','Who gave his parents the idea of going on an adventure holiday?'])
  }),
  scanTest({
    id: 9, book: 3, test: 1, file: '03 KET真题 - 第1套 - 阅读与写作.pdf',
    pageNames: [['page-01','page-02'], ['page-03','page-04'], ['page-05','page-06'], ['page-07'], ['page-08']],
    answers: ['B','A','C','C','B','B','A','B','A','C','B','C','B','A','B','C','C','B','B','A','C','A','B','B','the',['it','this'],'there',['with','against'],['ago','back'],'if'],
    part1Questions: [
      p1q(1,'ad','Bored with computer games? Looking for a different hobby? Join us at chess club! Fridays at 16.00 in room 16.',['like playing a variety of games.','are interested in trying something new.','have experience of playing computer chess.'],'B',{question:'The club wants to find people who'}),
      p1q(2,'text','Have you got an extra T-shirt I can borrow for gym class? I’ve forgotten mine and it’s too late to go back home.',['to find out if Zoe is able to lend her something','to ask if Zoe can collect something from the gym','to check if Zoe has remembered to bring the right sports kit'],'A',{from:'Tilda',to:'Zoe',question:'Why has Tilda sent this message?'}),
      p1q(3,'sign','BREAD ISN’T GOOD FOR DUCKS!\nBird food available at visitor centre\n£1 per bag',['Bird food costs less at the visitor centre than at other places.','The visitor centre wants more people to give food to the ducks.','Visitors must be careful about the kind of food they give to the ducks.'],'C',{question:'What is this sign saying?'}),
      p1q(4,'email','Sorry to hear you’re not well. If you aren’t able to play in the big match next week, let me know soon.',['I’m afraid I haven’t decided if you can take part in the competition yet.','It’s a shame you missed the last match, but I’m glad you’re feeling better.','You must contact me if your health doesn’t improve over the next few days.'],'C',{from:'Ms Wilson',to:'Josh',question:'What is Ms Wilson saying to Josh?'}),
      p1q(5,'text','The 4 p.m. bus is delayed and won’t arrive for another hour. If I can’t get a lift with anyone, I’ll walk home.',['to explain why he missed the bus','to tell her his plans for getting home','to find out if she can give him a lift'],'B',{from:'Eric',to:'Mum',question:'Why has Eric sent his mum this message?'}),
      p1q(6,'email','Anyone who’s already on the list for this trip but hasn’t paid, please give me £15.00 by 3 p.m.',['There are a few spaces left if anyone wants to go on the trip.','If you’ve got a place on the trip, you need to pay today.','Students who have paid for the trip should come to a meeting at 3 p.m.'],'B',{from:'Mrs Brown',to:'All students',question:'What is this email saying?'})
    ],
    part2Data: p2('Studying a foreign language',['Frank','Marc','Ivan'],[
      'At the moment, I’m learning Arabic because I’d like to be a journalist one day, and being able to speak other languages is important for this job. It wasn’t possible to learn Arabic at school, but a friend of mine knew a woman who could give me lessons and now she comes to my house twice a week. It was difficult at first because I was a complete beginner. But I worked hard and after just six months I was able to speak and write the language quite well, which I’m really happy about.',
      'I’ve lived in lots of different countries because of my dad’s career, so I’ve had to learn several different languages. I seem to learn them quite easily. The last place I lived was Thailand. I’m still studying the language so I can continue to chat with my Thai classmates now I’m back in my home country. I’ve downloaded a new app with exercises in Thai, and I can’t wait to use it each morning because it’s so much fun.',
      'My mum comes from Russia and her parents still live there. We often stay with them during the school holidays, but unfortunately I didn’t learn Russian when I was little so talking to them has always been hard. After our last trip I decided it was time for me to learn the language. I now have lessons and remember all the new vocabulary my teacher teaches us.'
    ],['Who says he’s pleased about how quickly he improved?','Who is learning a foreign language without a teacher?','Who needs to know a foreign language for the career he wants?','Who says he remembers all the new words he learns in his language lessons?','Who is practising a language so he can have conversations with friends?','Who is studying a foreign language for family reasons?','Who says he has lots of experience learning new languages?'])
  }),
  scanTest({
    id: 10, book: 3, test: 2, file: '03 KET真题 - 第2套 - 阅读与写作.pdf',
    pageNames: [['page-01','page-02'], ['page-03','page-04'], ['page-05','page-06'], ['page-07'], ['page-08']],
    answers: ['C','A','B','B','B','C','C','C','A','B','C','A','B','B','B','B','A','C','B','B','A','A','B','C',['like','love'],'with','than','the','as','what'],
    part1Questions: [
      p1q(1,'text','I’ll see you at the tennis centre later for our game. Did you say you booked for 5 or 6 o’clock?',['Martine is asking Ben where they are playing tennis later.','Martine is letting Ben know that she has changed her plans.','Martine is checking what time she will meet Ben.'],'C',{from:'Martine',to:'Ben'}),
      p1q(2,'ad','New in store!\nGreat adventure stories for young adults\nSee “Teenage Books”: 1st Floor',['Some interesting books have just arrived.','There are books for teenagers on every floor.','Adventure stories are the most popular books.'],'A'),
      p1q(3,'ad','ABC Study App\nKeep details in one place – including date to finish homework.\nNo in-app advertisements.\nShare work with teachers and classmates.',['which website they should use to do their homework.','when they need to complete their homework.','who may be able to help them with their homework.'],'B',{question:'The app helps students remember'}),
      p1q(4,'notice','Greenhill Castle\nGuided tour 10 a.m.\n(not included in ticket price)\n12 people only',['There is a tour of the castle every hour.','Castle visitors have to pay extra to join a tour group.','Groups of more than 12 people must book tickets to enter the castle.'],'B'),
      p1q(5,'email','If you’re not at the stadium at 6 p.m. today for practice, you won’t be able to play in Saturday’s match.',['giving the team information about Saturday’s match','telling everyone in the team they must come to this evening’s practice','explaining that the hockey team is going to practise in a different place today'],'B',{from:'Mr Blake',to:'Hockey Team',question:'What is Mr Blake doing in this email?'}),
      p1q(6,'text','Grandma gave me the Race video game for my birthday, but I’ve already got it. Would you like it? I haven’t used it.',['to check if Lucy has a video game he can borrow','to ask Lucy for her opinion of a video game','to offer Lucy a video game he doesn’t need'],'C',{from:'Daniel',to:'Lucy',question:'Why has Daniel written this message?'})
    ],
    part2Data: p2('My museum visit',['Julia','Becky','Tania'],[
      'Last week, I went to the Cartoon Museum with my mum. It’s a small museum and we had to ask for directions because we got lost on our way there. When we finally got there, we walked around the various exhibitions, including one about the history of cartoons. The best part for me was joining a one-hour drawing class. An artist talked about his work and I did some cartoons of my own. It was a great little museum, but I saw most things, so I’m not planning to return.',
      'I visited the Natural History Museum with my dad when I was younger, but this was my first visit on my own. I already knew about some of the stuff at the museum from lessons at school, but I was amazed at how much I enjoyed the exhibitions. My favourite one was the dinosaur exhibition. It was the busiest part of the museum and full of people, but I didn’t mind that. I’ve been several times already, so I don’t think I’ll visit again.',
      'I’m so glad my mum took me to the News Museum. It has exhibitions about the news and is different from most other museums because it’s more about events than things. Unfortunately, I didn’t have time to see everything, so I’ve already decided to go back. My favourite part was a special theatre showing short videos of interesting news reports. There was also an exhibition about photo-journalists and their work. I really enjoyed learning how they get such good pictures.'
    ],['Who says that not many other museums are like the one she visited?','Who plans to return to the museum?','Who says the museum was hard to find?','Who visited the museum alone?','Who liked an exhibition about an interesting career?','Who says she enjoyed taking part in an activity at the museum?','Who says that one exhibition was more popular than the others?'])
  }),
  scanTest({
    id: 11, book: 3, test: 3, file: '03 KET真题 - 第3套 - 阅读与写作.pdf',
    pageNames: [['page-02','page-03'], ['page-04','page-05'], ['page-06','page-07'], ['page-08'], ['page-09']],
    answers: ['B','C','A','A','B','C','B','A','C','A','A','B','C','C','B','A','C','C','C','A','A','B','C','B','for','you','the','are','by','if'],
    part1Questions: [
      p1q(1,'ad','Learn to draw and paint with this fantastic app!\nPerfect for beginners – kids or adults\nFirst 8 weeks free, then £3 per month',['Children will need an adult to help them with this app.','You can try this app for two months before you have to pay.','This app is only good for people who have experience of computer art.'],'B'),
      p1q(2,'text','I’ve got to finish my art project for Mrs Green tonight so I can’t go to badminton club. Next week will be fine.',['to say Mark should finish the art project before playing badminton','to find out if Mark is going to badminton club next week','to say that he is not able to play badminton with Mark this evening'],'C',{from:'Steven',to:'Mark',question:'Why did Steven send this message?'}),
      p1q(3,'sign','School groups booked on museum tours must wait here while their teachers see receptionist.',['speak to a member of staff','go and pay for tickets','book a tour of the museum'],'A',{question:'While school groups are waiting, what will their teachers do?'}),
      p1q(4,'text','How about swimming at the lake tomorrow morning? Mum can take us. We’ll be back before dinner. Ask your mother and ring me.',['to suggest a day out at the lake','to find out how they’ll get to the lake','to check how long they’ll stay at the lake'],'A',{from:'Sue',to:'Isabel',question:'Why did Sue write this message?'}),
      p1q(5,'text','I’ve finished that book I borrowed from you. Do you want me to return it now, or can I lend it to my brother?',['explaining why he can’t return Patrick’s book','checking if Patrick needs his book back immediately','asking Patrick to lend him another book'],'B',{from:'Henry',to:'Patrick',question:'What is Henry doing in this message?'}),
      p1q(6,'email','Workers will finish painting the music room on Friday after school, so we can have band practice there on Monday.',['The workers are going to paint the music room next week.','The students will have a lesson in the music room on Friday.','The band can use the music room starting from Monday.'],'C',{from:'Mr Boyd',to:'Music students'})
    ],
    part2Data: p2('Holidays in France',['Marco','Jing','Tommy'],[
      'Last June my family and I went to France for our summer holiday. We spent two weeks at a campsite in the south of the country, near Marseilles. There was a beach not too far away but it was very crowded so I spent nearly all my time at the campsite pool, which was much nicer. I met some French kids there and we had a great time together. I really need to work hard on my French though, so that next time it will be easier to talk to people.',
      'I’d always wanted to visit France, so I was really excited when my parents told me we were going to the city of Caen in the north of the country for our summer holidays last year. There were some lovely beaches not far from the city and we also went to an attractive indoor market, which sold everything from fish to flowers. It was wonderful. However, the best thing we did was a one-day cooking course. I’ve never cooked anything before and it was really fun!',
      'My family always spend our summer holidays in the south of France, and last year we stayed at a campsite on a beach near Arles. I loved swimming in the sea and in the campsite pool. I also enjoyed using my French when we went shopping at the local market. My school friends would be amazed! Because my mum and dad are artists, they wanted to visit a museum about the painter Van Gogh. Usually I don’t like museums, but actually this one was really interesting.'
    ],['Who describes a market he visited?','Who plans to improve his spoken French?','Who was surprised he enjoyed a place his parents took him to?','Who preferred the pool to the beach?','Who made some new friends during his holiday?','Who learnt how to do something new on his holiday?','Who says he liked practising his French?'])
  }),
  scanTest({
    id: 12, book: 3, test: 4, file: '03 KET真题 - 第4套 - 阅读与写作.pdf',
    pageNames: [['page-01','page-02'], ['page-03','page-04'], ['page-05','page-06'], ['page-07'], ['page-08']],
    answers: ['A','C','C','B','A','B','B','A','B','C','A','C','B','B','C','B','B','A','C','B','A','C','B','C','to',['what','how'],'a','with',['can','will','could','would'],'about'],
    part1Questions: [
      p1q(1,'text','Are you sure you picked up the right trainers after football practice today? Mine are missing, and they look exactly like yours.',['Harry thinks it’s possible that Maria has his trainers.','Harry is offering to help Maria find her trainers.','Harry is telling Maria to take her trainers to football practice.'],'A',{from:'Harry',to:'Maria'}),
      p1q(2,'text','Liam’s party’s on the same day as the concert! I’ve spoken to Liam but there’s nothing that he can do. What a shame!',['angry that Liam didn’t help her','worried about having such a busy day','sorry that she will have to miss an event'],'C',{from:'Nadia',to:'Lizzie',question:'How does Nadia feel?'}),
      p1q(3,'ad','Upload your photos by March 17th\nWinners decided on April 25th\n£6 to enter',['a photograph.','an exhibition.','a competition.'],'C',{question:'This message on a website gives information about'}),
      p1q(4,'notice','All library staff are in a meeting this morning. If you are returning books, leave them on the desk. To borrow books, come back later.',['There is a new way of borrowing books at the library from today.','It is not possible to take books out of the library at the moment.','Visitors are invited to a special event at the library this morning.'],'B'),
      p1q(5,'text','I’ve got your science book. Wait for me outside the library at 2 o’clock and I’ll give it back. It was very useful.',['where he’ll meet her.','which book he needs from her.','what time he’ll leave the library.'],'A',{from:'Darren',to:'Alice',question:'Darren is texting Alice to let her know'}),
      p1q(6,'email','Adventure Park\nTicket price £20\nVisit again in the next 7 days and enter free!',['The adventure park will be free for everyone to visit next week.','If you pay now and return this week, you won’t pay a second time.','People who have already visited can pay less next time.'],'B')
    ],
    part2Data: p2('Life on a farm',['Harry','Aaron','Sonny'],[
      'I love our farm. From every window of our farmhouse, you can see beautiful countryside for miles. Of course, it’s not a perfect life. There are always machines to repair, and farmers never get time off because the animals need them every day. That’s the reason my family and I can’t visit other countries in the summer. But what’s fantastic is that you’re never bored. My parents say the farm will be mine when I’m older, and I’m really happy about that.',
      'Being a farmer is a hard life. There are so many jobs to do and most of them are quite boring. Also, farmers can’t travel much and that’s something I really want to do when I’m older. One thing I love is being up before the sun each day. That’s when I feed the chickens. It’s quiet then, with only the noise of the animals. When I was little, the cows looked so big. I always ran away when they came near me. It seems silly now.',
      'My mum and dad are farmers. They often work from early morning until late at night, and always seem so tired. They do too much really, so I try to help if I can. One thing I’m good at is helping Dad when the farm machines break - it’s a great feeling to get them working again. In fact, I’d like to be a mechanic when I leave school. However, I want to continue living in the countryside because I love all the animals.'
    ],['Who was frightened of a kind of farm animal when he was younger?','Who describes the views from the farm?','Who thinks living on a farm is not very exciting?','Who enjoys repairing things on the farm?','Who explains why it’s difficult for farmers to go away on holiday?','Who thinks his parents don’t rest enough?','Who is happy to get up early in the morning?'])
  })
]
