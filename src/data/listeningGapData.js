const partNames = {
  1: '图片信息听辨',
  2: '信息填写',
  3: '长对话理解',
  4: '短对话听辨',
  5: '信息匹配',
}

const exercisePages = {
  1: [[2, 3], [5], [7], [9], [11]],
  2: [[13, 14], [16], [18], [20], [22]],
  3: [[24, 25], [27], [29], [31], [33]],
}

const trackNumbers = {
  1: [3, 6, 9, 12, 15],
  2: [4, 7, 10, 13, 16],
  3: [5, 8, 11, 14, 17],
}

const answers = {
  1: [['next to the cafe', 'pizza and salad', ['13.25', '£13.25'], 'museum', ['Thursday the 12th', '12th']], ['8', 'August', '475', 'towels', '2150699'], ['Peter', 'Tuesdays', 'three hours', ['local bands', 'the bands are local'], ['seven', '7']], ['armchair', 'fridge', 'garage', 'light', 'clock'], ['ice cream', 'cakes', 'biscuits', 'fruit', 'cola']],
  2: [['33', ['6', '6 pm'], 'black', ['8', '8 pm'], 'computer magazine'], ['library', 'Moore', 'Spanish', ['5', '5 pm'], '467402'], ['Bridge Street', 'buy-a-computer.com', ['1.5 kg', 'one and a half kilogrammes'], ['699', '£699'], ['university', 'use it at university']], ['walk', ['exciting', 'very exciting'], ['entrance', 'by the entrance'], 'tour guide', ['read', 'look at the pictures']], ['trainers', 'cake', 'bag', 'football socks', 'flowers']],
  3: [['chemistry', 'table', 'ruler', ['5.30', '5:30'], ['university', 'main university building']], ['Wednesdays', '75', 'August', ['9 pm', '9 p.m.'], 'Bracknell'], [['three weeks', '3 weeks'], 'Paris', 'Canada', 'tired', ['bus station', 'by the exit']], ['art', ['another teacher', 'Mrs Wilson'], ['cut his fingers', 'cut his finger'], 'pencil case', 'monkeys'], ['windsurf', 'swimming', 'tennis', 'horse riding', 'basketball']],
}

const prompts = {
  1: [
    ['Where is the post office?', 'What does the man order?', 'How much does the man spend?', 'Where are the girls going today?', 'When is the woman going to the dentist?'],
    ['The largest group is ___ people.', 'This summer the boat is only available in ___.', 'You will pay £___ altogether for one week.', 'There are no ___ on the boat.', 'Call Riverboat Holidays on ___.'],
    ['Who is Martin’s music teacher?', 'Which day does Martin go to class now?', 'How long does he practise with his band?', 'Why does he like the music festival?', 'What time will Jack arrive?'],
    ['What did Pete buy for his new apartment?', 'Where did Matt put the cake?', 'Where is Jodie’s grandfather now?', 'What will the woman move?', 'What is broken?'],
    ['What will Mike bring?', 'What will Margaret bring?', 'What will John bring?', 'What will Andrea bring?', 'What will Eric bring?'],
  ],
  2: [
    ['Which bus goes to the supermarket?', 'What time does the shop close?', 'Which T-shirt does Joanne buy?', 'What time does the bookshop close on Saturday?', 'What did Graham buy?'],
    ['The medical centre is beside the ___.', 'The new doctor is Dr ___.', 'The doctor can speak ___.', 'On Tuesdays the centre closes at ___ p.m.', 'Call the hospital on ___.'],
    ['Where did Lisa buy her laptop?', 'Which website was useful?', 'How heavy was Lisa’s new laptop?', 'How much did Lisa finally pay?', 'Why does Robert need a laptop?'],
    ['How will the woman travel to the theatre?', 'What did the boy think about the book?', 'Where will the friends meet?', 'What is the woman’s job?', 'What does the teacher want the class to do?'],
    ['What did Sonia buy at the clothes shop?', 'What did she buy at the bookshop?', 'What did she buy at the supermarket?', 'What did she buy at the sports shop?', 'What did she buy at the market?'],
  ],
  3: [
    ['What is Harry’s favourite subject?', 'Where does the girl put the dictionary?', 'What does the boy lend Josie?', 'What time does the TV programme start?', 'Where does the medical student have lessons?'],
    ['The classes will be on ___.', 'The course costs £___.', 'The college is closed in ___.', 'The office closes at ___ in the evening.', 'The college is in ___.'],
    ['How long is James’s holiday?', 'Which city will James visit first?', 'Where did Susan go in January?', 'How will James feel after the flight?', 'Where will Susan meet James?'],
    ['Which class does Steph enjoy most?', 'Who will run the science club today?', 'How did Jim hurt his hand?', 'What does the girl need to borrow?', 'What does the teacher want the students to research?'],
    ['Which sport did Chris try?', 'Which activity did Gina try?', 'Which sport did Tom try?', 'Which activity did Emma try?', 'Which sport did Harry try?'],
  ],
}

const clozeTracks = {
  '1-1': [
    { title: 'Where is the post office?', lines: [
      { speaker: 'Man', parts: ['Excuse me, is there a ', { answer: 'post office' }, ' near here?'] },
      { speaker: 'Woman', parts: ['Yes. There’s a big post office ', { answer: 'on School Street' }, '. There’s a fantastic ', { answer: 'little café' }, ' next to it. You can take ', { answer: 'bus number 12' }, ' from outside the bank.'] },
      { speaker: 'Man', parts: ['Can I ', { answer: 'walk to' }, ' the post office?'] },
      { speaker: 'Woman', parts: ['Yes. You have to ', { answer: 'walk through' }, ' the park and ', { answer: 'turn left' }, ' after the museum.'] },
    ]},
    { title: 'What does the man order?', lines: [
      { speaker: 'Waitress', parts: ['Good evening. Welcome to the Little Italy Restaurant. ', { answer: 'Here’s the menu' }, '. Would you like some garlic ', { answer: 'bread' }, ' to start?'] },
      { speaker: 'Man', parts: ['No thanks. Actually, can I ', { answer: 'order' }, ' now? I’d like ', { answer: 'a pizza' }, ', please.'] },
      { speaker: 'Waitress', parts: ['OK, and what would you like ', { answer: 'to drink' }, '?'] },
      { speaker: 'Man', parts: ['Water’s fine, but could I have some ', { answer: 'salad' }, ' too, please?'] },
    ]},
    { title: 'How much does the man spend?', lines: [
      { speaker: 'Man', parts: ['Hello. Can I have ', { answer: 'two tickets' }, ' for the new Pixar film which ', { answer: 'starts' }, ' at 8:30, please?'] },
      { speaker: 'Woman', parts: ['Yes, of course. Are you ', { answer: 'students' }, '? Student tickets are £5.75 and you get ', { answer: 'a free drink' }, ' too.'] },
      { speaker: 'Man', parts: ['I am, but ', { answer: 'my sister isn’t' }, '.'] },
      { speaker: 'Woman', parts: ['OK, that’s £13.25 please. Adult tickets are £7.50 ', { answer: 'at the weekend' }, '.'] },
    ]},
    { title: 'Where are the girls going today?', lines: [
      { speaker: 'Girl', parts: ['Hi Maya. What shall we do ', { answer: 'this afternoon' }, '? Why don’t we go to ', { answer: 'the beach' }, '?'] },
      { speaker: 'Maya', parts: ['No! It’s really cold, so we can’t go ', { answer: 'swimming' }, '.'] },
      { speaker: 'Girl', parts: ['We could go to ', { answer: 'the museum' }, ' instead. Jamie said it was fantastic.'] },
      { speaker: 'Maya', parts: ['OK. Then we can swim at the sports centre ', { answer: 'tomorrow' }, '.'] },
    ]},
    { title: 'When is the woman going to the dentist?', lines: [
      { speaker: 'Man', parts: ['Good morning. Birch Street ', { answer: 'Dentists' }, '.'] },
      { speaker: 'Woman', parts: ['Hi. Can I make ', { answer: 'an appointment' }, ' to see the dentist in the afternoon, please?'] },
      { speaker: 'Man', parts: ['I can give you an appointment at three o’clock on ', { answer: 'the 14th of March' }, ', or at 10 a.m. on Thursday ', { answer: 'the 12th' }, '.'] },
      { speaker: 'Woman', parts: ['I’m going on holiday on ', { answer: 'the 13th' }, '. So can I have ', { answer: 'the morning one' }, ', please?'] },
    ]},
  ],
  '1-2': [
    { title: 'You will hear a woman talking about renting a boat for a holiday.', lines: [
      { speaker: '', parts: ['Thank you for calling Riverboat Holidays.'] },
      { speaker: '', parts: ['This is the information line for booking our boat called Moonlight.'] },
      { speaker: '', parts: ['This boat can be booked by groups of different ', { answer: 'sizes' }, '. The ', { answer: 'smallest' }, ' group is ', { answer: 'two' }, ' people and the ', { answer: 'largest' }, ' is ', { answer: 'eight' }, ' people. There are ', { answer: 'three bedrooms' }, ' and a large sofa that ', { answer: 'two' }, ' people can sleep on.'] },
      { speaker: '', parts: ['The boat can be ', { answer: 'booked' }, ' for holidays from ', { answer: '1st June' }, ' to ', { answer: '31st August' }, ', but this summer it’s only ', { answer: 'available' }, ' in ', { answer: 'August' }, '. ', { answer: 'June' }, ' and ', { answer: 'July' }, ' are already ', { answer: 'booked' }, '.'] },
      { speaker: '', parts: ['If you book a holiday on the boat, we ask you to pay £', { answer: '150' }, ' straightaway, and the ', { answer: 'rest' }, ' of the money ', { answer: 'four weeks' }, ' before your holiday. You’ll pay £', { answer: '475' }, ' altogether for ', { answer: 'one' }, ' week.'] },
      { speaker: '', parts: ['People often ask if they need to bring sheets and ', { answer: 'blankets' }, ', but these are ', { answer: 'already' }, ' on the ', { answer: 'beds' }, '. However, there are no ', { answer: 'towels' }, ' on the boat, so you will need to bring these.'] },
      { speaker: '', parts: ['If you’d like to book the boat, please visit our ', { answer: 'website' }, ' — www.riverboatholidays.com — or ', { answer: 'call' }, ' us on ', { answer: '2150699' }, '. We’re open seven days a week.'] },
    ]},
  ],
  '1-3': [
    { title: 'You will hear Jack talking to his friend Martin about music.', lines: [
      { speaker: 'Jack', parts: ["Hi Martin. Have you heard the new ‘Sunny Days’ song? I love it."] },
      { speaker: 'Martin', parts: ["Me too, Jack. I’m learning to play it on my guitar."] },
      { speaker: 'Jack', parts: ["I’d love to play the ", { answer: 'guitar' }, '.'] },
      { speaker: 'Martin', parts: ['You should learn! I go to classes with Steve from ', { answer: 'football' }, '. We’re in the same ', { answer: 'class' }, '. Our ', { answer: 'teacher' }, ', Peter, is fantastic! He used to play with the group Harry’s ', { answer: 'Band' }, '.'] },
      { speaker: 'Jack', parts: ['Wow! Is there a ', { answer: 'class' }, ' on ', { answer: 'Friday' }, '?'] },
      { speaker: 'Martin', parts: ['I don’t know. I go on ', { answer: 'Tuesdays' }, ' now, but ', { answer: 'next' }, ' term I’m changing to ', { answer: 'Thursdays' }, '.'] },
      { speaker: 'Jack', parts: [{ answer: 'How often' }, ' do you practise?'] },
      { speaker: 'Martin', parts: [{ answer: 'During the week' }, ', an hour or two, and on ', { answer: 'Saturdays' }, ' three hours with my ', { answer: 'band' }, '. We’re called ', { answer: 'The Red Chillies' }, '!'] },
      { speaker: 'Jack', parts: ['Cool.'] },
      { speaker: 'Martin', parts: ['Actually, we’re playing in the ', { answer: 'music festival' }, ' on Saturday. Do you want to come?'] },
      { speaker: 'Jack', parts: ["I’d like to see you play, but what’s the festival like?"] },
      { speaker: 'Martin', parts: ['Really great. There ', { answer: "aren’t" }, ' too many people, the bands are all ', { answer: 'local' }, ' like mine, and ', { answer: 'tickets' }, ' aren’t too ', { answer: 'expensive' }, '.'] },
      { speaker: 'Jack', parts: ['Then I’ll come. And I’ll bring my ', { answer: 'camera' }, '.'] },
      { speaker: 'Martin', parts: ['Great. I have to ', { answer: 'get there' }, ' at ', { answer: '6:15' }, ', and we ', { answer: 'play' }, ' at ', { answer: '7:45' }, '.'] },
      { speaker: 'Jack', parts: ['Why don’t I come at ', { answer: 'seven' }, ' and take photos ', { answer: 'before' }, ' you go on ', { answer: 'stage' }, '?'] },
      { speaker: 'Martin', parts: ['Perfect.'] },
    ]},
  ],
  '1-4': [
    { title: 'What did he buy for his new apartment?', lines: [
      { speaker: 'Woman', parts: ['I like your new apartment, Pete. Have you bought many things for it?'] },
      { speaker: 'Pete', parts: ['My ', { answer: 'parents' }, ' gave me some of their ', { answer: 'old furniture' }, ', including shelves to ', { answer: 'put' }, ' my ', { answer: 'books' }, ' on. The sofa ', { answer: "isn’t" }, ' very ', { answer: 'comfortable' }, ' so I got myself that ', { answer: 'armchair' }, ' — it was only ', { answer: '£50' }, ' in a sale. The curtains ', { answer: 'were here' }, ' already. I really like them.'] },
      { speaker: 'Woman', parts: ['They’re very nice.'] },
      { speaker: 'Pete', parts: ['Thanks!'] },
    ]},
    { title: 'Where is the cake?', lines: [
      { speaker: 'Matt', parts: ['Mum, it’s Matt. If you get home ', { answer: 'before' }, ' me and think I’ve eaten all that chocolate cake you ', { answer: 'left' }, ' on the table, don’t worry — I ', { answer: 'haven’t' }, '! It was really ', { answer: 'hot' }, ' in the ', { answer: 'kitchen' }, ' because the ', { answer: 'oven' }, ' was on, so I put it somewhere ', { answer: 'cool' }, ' — the second shelf of the ', { answer: 'fridge' }, ', by the bowl of salad.'] },
    ]},
    { title: 'Where is Jodie’s grandfather now?', lines: [
      { speaker: 'Mum', parts: ['Jodie, where’s your grandfather? I ', { answer: 'thought' }, ' he was in the ', { answer: 'living' }, ' room watching ', { answer: 'TV' }, ', but he’s ', { answer: 'not' }, '.'] },
      { speaker: 'Jodie', parts: ['He was just ', { answer: 'outside' }, ', Mum, putting new ', { answer: 'plants' }, ' in the ground.'] },
      { speaker: 'Mum', parts: ['I can’t see him through the window.'] },
      { speaker: 'Jodie', parts: ['He said he wanted to ', { answer: 'fix' }, ' the broken ', { answer: 'light' }, ' on your ', { answer: 'car' }, ' too. Maybe he’s doing that now. That’s why you can’t see him outside.'] },
    ]},
    { title: 'What will the woman move?', lines: [
      { speaker: 'Woman', parts: ['I work from ', { answer: 'home' }, ' and use a ', { answer: 'bedroom' }, ' as an office. I’ve just bought some new furniture for it, so I have something to put my ', { answer: 'computer' }, ' and all my papers on. But it’s in a ', { answer: 'dark' }, ' corner so I’m going to get that small ', { answer: 'light' }, ' from on ', { answer: 'top' }, ' of the ', { answer: 'cupboard' }, ' and put it next to me. That’ll help.'] },
    ]},
    { title: 'What is broken?', lines: [
      { speaker: 'Woman', parts: ['Oh no. We’re going to be ', { answer: 'late' }, ' for the restaurant. And the ', { answer: 'radio' }, ' just said the traffic’s ', { answer: 'bad' }, ' in town.'] },
      { speaker: 'Man', parts: [{ answer: "Don’t" }, ' worry. We can still be early. I’ve only just watched the six o’clock ', { answer: 'news' }, '.'] },
      { speaker: 'Woman', parts: ['But look at the ', { answer: 'time' }, ' on the ', { answer: 'wall' }, '.'] },
      { speaker: 'Man', parts: ['Oh, that ', { answer: 'stopped working' }, ' yesterday. I forgot to put a new ', { answer: 'battery' }, ' in. Sorry!'] },
    ]},
  ],
  '1-5': [
    { title: 'You will hear Sarah talking to Mike about a picnic.', lines: [
      { speaker: 'Sarah', parts: ['Hi, Mike. It’s Sarah. I’m phoning you about the food and drink for Samantha’s birthday picnic on Saturday.'] },
      { speaker: 'Mike', parts: ['Hi, Sarah. That’s good. What shall I bring?'] },
      { speaker: 'Sarah', parts: ['Well, I’m going to make some ', { answer: 'sandwiches' }, '. Why don’t you bring some ', { answer: 'crisps' }, '?'] },
      { speaker: 'Mike', parts: ['Maybe I could bring some ', { answer: 'ice cream' }, ' instead? Everyone likes it and I think it’s going to be very ', { answer: 'hot' }, ' this weekend.'] },
      { speaker: 'Sarah', parts: ['Good idea! Can you bring chocolate? It’s my favourite!'] },
      { speaker: 'Mike', parts: ['Sure. How many people are coming?'] },
      { speaker: 'Sarah', parts: ['There are going to be eight of us, including Sam. Margaret has already made some ', { answer: 'cakes' }, '. They’re amazing — they look like little ', { answer: 'hamburgers' }, '!'] },
      { speaker: 'Mike', parts: ['Cool! Sam loves hamburgers.'] },
      { speaker: 'Sarah', parts: ['John ', { answer: 'wanted' }, ' to make some ', { answer: 'biscuits' }, ' but he’s been really ', { answer: 'busy' }, ' this week so I think he’s going to ', { answer: 'buy' }, ' some.'] },
      { speaker: 'Mike', parts: ['Wow! We aren’t going to be hungry! Is Phil coming?'] },
      { speaker: 'Sarah', parts: ['No. He’s going to a ', { answer: 'pizza' }, ' restaurant with his volleyball team.'] },
      { speaker: 'Mike', parts: ['What about Andrea?'] },
      { speaker: 'Sarah', parts: ['Yes. She’s going to bring some ', { answer: 'fruit' }, ' from her dad’s ', { answer: 'garden' }, '. He’s got lots of ', { answer: 'apple' }, ' trees.'] },
      { speaker: 'Mike', parts: ['Excellent! I think her dad grows ', { answer: 'strawberries' }, ' too.'] },
      { speaker: 'Sarah', parts: ['Yes, but she told me that they’ve already ', { answer: 'eaten' }, ' them ', { answer: 'all' }, '!'] },
      { speaker: 'Mike', parts: ['Oh no! Is anyone bringing ', { answer: 'drinks' }, '?'] },
      { speaker: 'Sarah', parts: ['Well, we can get some ', { answer: 'water' }, ' from the café in the park and I think Eric is bringing some ', { answer: 'cola' }, ' from his mum’s shop.'] },
      { speaker: 'Mike', parts: ['Cool! Shall I bring my MP3 player so we can listen to music?'] },
      { speaker: 'Sarah', parts: ['Good idea. It’s going to be great!'] },
      { speaker: 'Mike', parts: ['Yes! See you on Saturday.'] },
    ]},
  ],
  '2-1': [
    { title: 'Which bus goes to the supermarket?', lines: [
      { speaker: 'Man', parts: ['Sandra, do you know ', { answer: 'which bus' }, ' goes to ', { answer: 'the supermarket' }, '? Is it ', { answer: 'number 23' }, '?'] },
      { speaker: 'Sandra', parts: ['I don’t know. I’ll ', { answer: 'have a look' }, ' on their ', { answer: 'website' }, '. Well, it says you need to ', { answer: 'catch bus 33' }, ' and it ', { answer: 'takes 13 minutes' }, '. The ', { answer: 'next one' }, ' is at ', { answer: '4:30' }, '.'] },
      { speaker: 'Man', parts: ['Great. It’s twenty past now. If I hurry, ', { answer: 'I’ll catch it' }, '!'] },
      { speaker: 'Sandra', parts: ['OK. Bye!'] },
    ]},
    { title: 'What time does the shop close?', lines: [
      { speaker: 'Man', parts: ['Oh no! We ', { answer: 'haven’t got any milk' }, '! Tom, can you ', { answer: 'go to the shop' }, ', please?'] },
      { speaker: 'Tom', parts: ['Yes, but it’s ', { answer: 'half past five' }, ' now. ', { answer: 'What time' }, ' does it ', { answer: 'close' }, '?'] },
      { speaker: 'Man', parts: ['At six on Saturday, but it’s a ', { answer: '15-minute walk' }, ' — so you’ll have to go now.'] },
      { speaker: 'Tom', parts: ['Right. I’ll ', { answer: 'put my shoes on' }, '! Shall I buy some ', { answer: 'more bread' }, ' too?'] },
    ]},
    { title: 'Which T-shirt does the woman buy?', lines: [
      { speaker: 'Man', parts: ['Look at these T-shirts, Joanne. Do you like them?'] },
      { speaker: 'Joanne', parts: ['The ', { answer: 'white' }, ' one’s ', { answer: 'nice' }, ' and the ', { answer: 'black one' }, ' is OK too, but I ', { answer: 'don’t like the grey one' }, '.'] },
      { speaker: 'Man', parts: ['Really? I ', { answer: 'love' }, ' the grey one and ', { answer: 'it only costs' }, ' ten pounds. But I like the black one too. ', { answer: 'How much is it' }, '?'] },
      { speaker: 'Joanne', parts: ['Only eight pounds! I’ll ', { answer: 'get that one' }, '! It’s ', { answer: 'the cheapest' }, '!'] },
    ]},
    { title: 'What time does the bookshop close on Saturday?', lines: [
      { speaker: 'Man 1', parts: ['Good morning. Is the ', { answer: 'bookshop open' }, ' at ', { answer: 'the weekend' }, '?'] },
      { speaker: 'Man 2', parts: ['It is ', { answer: 'on Saturdays' }, ', but we’re ', { answer: 'closed on Sundays' }, '.'] },
      { speaker: 'Man 1', parts: ['Are you ', { answer: 'open all day' }, ' on ', { answer: 'Saturday' }, '?'] },
      { speaker: 'Man 2', parts: ['Yes, but we ', { answer: 'don’t open until ten' }, '. On weekdays it’s 9:30, but we ', { answer: 'close at eight' }, ' every night.'] },
    ]},
    { title: 'What did the man buy?', lines: [
      { speaker: 'Woman', parts: ['Have you been shopping, Graham?'] },
      { speaker: 'Graham', parts: ['Yes. I went to the ', { answer: 'shopping centre' }, ' with Nicola. She bought a ', { answer: 'new mobile phone' }, '. Her old phone ', { answer: 'was stolen' }, ' last week ', { answer: 'on the beach' }, '.'] },
      { speaker: 'Woman', parts: ['What did you buy?'] },
      { speaker: 'Graham', parts: ['I only bought a ', { answer: 'computer magazine' }, '! I wanted to buy a ', { answer: 'camera' }, ' for my ', { answer: 'holiday' }, ', but they were ', { answer: 'too expensive' }, '.'] },
    ]},
  ],
  '2-2': [
    { title: 'You will hear a woman talking about a medical centre.', lines: [
      { speaker: 'Woman', parts: ['If you’ve just moved to the town, it’s a good idea to get a doctor as soon as possible.'] },
      { speaker: 'Woman', parts: ['We are the ', { answer: 'largest' }, ' medical centre and you’ll find us in ', { answer: 'Park' }, ' Street. That’s in the ', { answer: 'centre' }, ' of town, opposite the ', { answer: 'post office' }, ' and beside the ', { answer: 'library' }, '.'] },
      { speaker: 'Woman', parts: ['People who are ', { answer: 'new' }, ' to the centre will see Dr Moore — that’s ', { answer: 'M-double-O-R-E' }, '. She’s from ', { answer: 'England' }, ', but she’s lived in ', { answer: 'other countries' }, ' and can speak ', { answer: 'Spanish' }, ' too.'] },
      { speaker: 'Woman', parts: ['The medical centre is open ', { answer: 'weekdays' }, ' from ', { answer: '8 a.m.' }, ' to ', { answer: '6 p.m.' }, ', but on ', { answer: 'Mondays' }, ' we open later, at ', { answer: '8.30 a.m.' }, ', and ', { answer: 'Fridays' }, ' we ', { answer: 'shut' }, ' at ', { answer: '5.30 p.m.' }, '. On ', { answer: 'Tuesdays' }, ' we ', { answer: 'close' }, ' at ', { answer: '5 p.m.' }, ' for staff training.'] },
      { speaker: 'Woman', parts: ['We’ll always try to see you the ', { answer: 'same' }, ' day you call us. If you have a problem when the medical centre isn’t open, then you’ll need to ', { answer: 'call' }, ' the hospital on ', { answer: '467402' }, '. They’ll give you ', { answer: 'advice' }, ' or tell you if you need to go to hospital immediately.'] },
    ]},
  ],
  '2-3': [
    { title: 'You will hear Lisa talking to her friend Robert about computers.', lines: [
      { speaker: 'Robert', parts: ['Hi Lisa. How are you?'] },
      { speaker: 'Lisa', parts: ['Great. I’ve just got a ', { answer: 'new laptop' }, '.'] },
      { speaker: 'Robert', parts: [{ answer: 'Where' }, ' did you buy it?'] },
      { speaker: 'Lisa', parts: ['In town. I went to the ', { answer: 'shop' }, ' on the ', { answer: 'High' }, ' Street, and I also looked in a ', { answer: 'new' }, ' one on ', { answer: 'Green' }, ' Street but they were very ', { answer: 'expensive' }, ', so I bought it in the little shop on ', { answer: 'Bridge' }, ' Street.'] },
      { speaker: 'Robert', parts: ['I’ve only looked at ', { answer: 'websites' }, '. Parks-computers.com ', { answer: 'didn’t' }, ' give much ', { answer: 'information' }, '. The ', { answer: 'same' }, ' was true for new-laptop.com, but buy-a-computer.com was ', { answer: 'great' }, '. Is your new laptop ', { answer: 'heavy' }, '?'] },
      { speaker: 'Lisa', parts: ['It’s ', { answer: 'one and a half' }, ' kilogrammes, but my ', { answer: 'old' }, ' one was ', { answer: 'three' }, ' kilogrammes. The ', { answer: 'best' }, ' ones these days are only ', { answer: 'one' }, ' kilogramme!'] },
      { speaker: 'Robert', parts: ['And was it ', { answer: 'expensive' }, '?'] },
      { speaker: 'Lisa', parts: ['Well, the one I really ', { answer: 'wanted' }, ' cost £', { answer: '849' }, '! I didn’t get it. The shop assistant showed me one for £', { answer: '579' }, ', but it ', { answer: 'didn’t have' }, ' enough memory. I spent £', { answer: '699' }, ' in the ', { answer: 'end' }, '. What do you need a laptop for?'] },
      { speaker: 'Robert', parts: ['I want to use it at ', { answer: 'university' }, ' every day. And I’m going to help my brother ', { answer: 'improve' }, ' the ', { answer: 'website' }, ' for his ', { answer: 'camera' }, ' shop.'] },
      { speaker: 'Lisa', parts: ['That sounds interesting!'] },
    ]},
  ],
  '2-4': [
    { title: 'How will the woman travel to the theatre?', lines: [
      { speaker: 'Man', parts: ['Do you need a ', { answer: 'lift' }, ' to the theatre? I can ', { answer: 'pick you up' }, ' at seven.'] },
      { speaker: 'Woman', parts: ['Thanks, ', { answer: 'but' }, ' I have a ', { answer: 'meeting' }, ' at five. I’ll stay in town to get supper and then ', { answer: 'walk' }, ' to the theatre.'] },
      { speaker: 'Man', parts: ['Then I’ll come into town by ', { answer: 'bus' }, '.'] },
      { speaker: 'Woman', parts: ['We can ', { answer: 'share' }, ' a ', { answer: 'taxi back' }, ' after the play. Your house is on my way home.'] },
      { speaker: 'Man', parts: ['OK.'] },
    ]},
    { title: 'What did he think about the book?', lines: [
      { speaker: 'Boy', parts: ['I usually prefer ', { answer: 'watching films' }, ' to ', { answer: 'reading books' }, ', and I love comedies. But I have just ', { answer: 'read' }, ' Last Chances. Normally, it takes me ', { answer: 'ages' }, ' to ', { answer: 'finish' }, ' a book but I only ', { answer: 'started' }, ' this one three nights ', { answer: 'ago' }, '. As soon as I read the first page, I couldn’t ', { answer: 'put it down' }, ' — I just had to find out ', { answer: 'what happened' }, ' next.'] },
    ]},
    { title: 'Where will they meet?', lines: [
      { speaker: 'Girl', parts: ['Shall we meet by the ', { answer: 'ticket office' }, ' at the concert hall?'] },
      { speaker: 'Boy', parts: ['There’ll be so many ', { answer: 'people' }, ' there. I might ', { answer: 'miss' }, ' you. Why don’t we wait for each other where you ', { answer: 'go in' }, '? If we stand by the doors, we’ll definitely see each other.'] },
      { speaker: 'Girl', parts: ['Good idea.'] },
      { speaker: 'Boy', parts: ['Hopefully there’ll be time to ', { answer: 'buy a coffee' }, ' before the concert starts.'] },
    ]},
    { title: 'What is her job?', lines: [
      { speaker: 'Woman', parts: ['I’ve lived in this city ', { answer: 'all' }, ' my ', { answer: 'life' }, ', and know lots about its ', { answer: 'history' }, '. I work for a travel company and we get ', { answer: 'visitors' }, ' from around the world. I go with the ', { answer: 'coach' }, ' to ', { answer: 'pick' }, ' them up from the airport and ', { answer: 'take' }, ' them on sightseeing ', { answer: 'trips' }, ' every day. I stay with them till the coach drops them at the ', { answer: 'hotel' }, '.'] },
    ]},
    { title: 'What does she want the class to do?', lines: [
      { speaker: 'Teacher', parts: ['OK everyone, please ', { answer: 'put' }, ' your ', { answer: 'pens down' }, ' and look at page 27 in your art history books. Have a ', { answer: 'look' }, ' at the ', { answer: 'pictures' }, ' on that page, and then ', { answer: 'discuss' }, ' the answers to the questions that I’ve put on the board. Please ', { answer: 'work' }, ' with the person ', { answer: 'next' }, ' to you.'] },
    ]},
  ],
  '2-5': [
    { title: 'You will hear Sonia talking to Dan about shopping.', lines: [
      { speaker: 'Dan', parts: ['Hello, Sonia. How are you?'] },
      { speaker: 'Sonia', parts: ['Tired! I’ve just been to the ', { answer: 'shopping centre' }, '.'] },
      { speaker: 'Dan', parts: ['You have a lot of bags! Let me help you. What did you buy?'] },
      { speaker: 'Sonia', parts: ['Lots of things! First of all, I went to the ', { answer: "chemist’s" }, ' and bought some more of the ', { answer: 'shampoo' }, ' that I like. Then I went to Fashion World.'] },
      { speaker: 'Dan', parts: ['Of course! Your favourite shop. What ', { answer: 'clothes' }, ' did you buy today?'] },
      { speaker: 'Sonia', parts: ['Actually, I bought these ', { answer: 'trainers' }, '. I want to wear them with the black ', { answer: 'trousers' }, ' that I bought ', { answer: 'last week' }, '.'] },
      { speaker: 'Dan', parts: ['Very nice!'] },
      { speaker: 'Sonia', parts: ['Then I went to the ', { answer: 'bookshop' }, '. I had a drink and I bought some ', { answer: 'cake' }, '. I wanted to buy a ', { answer: 'diary' }, ' for my holiday, ', { answer: 'but' }, ' I forgot!'] },
      { speaker: 'Dan', parts: ['Oh dear. Did you buy anything else for your holiday?'] },
      { speaker: 'Sonia', parts: ['Yes. I went to the ', { answer: 'supermarket' }, ' to look for a ', { answer: 'towel' }, ' for the beach, but I ', { answer: 'didn’t' }, ' buy one. I bought this ', { answer: 'bag' }, ' instead. Do you like it?'] },
      { speaker: 'Dan', parts: ['Yes, it’s cool! Did you remember to buy something for your dad’s ', { answer: 'birthday' }, '?'] },
      { speaker: 'Sonia', parts: ['Yes, I did. I bought him a present from the ', { answer: 'sports' }, ' shop. He really likes ', { answer: 'football socks' }, ', so I bought him five pairs!'] },
      { speaker: 'Dan', parts: ['Wow! Did you buy anything from the ', { answer: 'market' }, ' for ', { answer: 'dinner' }, ' tomorrow?'] },
      { speaker: 'Sonia', parts: ['No, I didn’t. But I bought some ', { answer: 'flowers' }, ' for Mum; she loves the pink ones that they sell there. I’ll buy some ', { answer: 'fish' }, ' tomorrow morning.'] },
      { speaker: 'Dan', parts: ['You’ve had a busy day!'] },
      { speaker: 'Sonia', parts: ['I know. My feet ', { answer: 'hurt' }, ' and I’ve spent lots of money, but I’ve had a great time!'] },
    ]},
  ],
  '3-1': [
    { title: 'What is the boy’s favourite subject?', lines: [
      { speaker: 'Girl', parts: ['Harry, can you ', { answer: 'help me' }, ' to study ', { answer: 'for my maths test' }, ', please?'] },
      { speaker: 'Harry', parts: [{ answer: 'Of course' }, ', but I need to ', { answer: 'finish my geography homework' }, ' first.'] },
      { speaker: 'Girl', parts: ['Thanks. I’ve got to do a ', { answer: 'chemistry project' }, ' too! I ', { answer: 'don’t like chemistry' }, '.'] },
      { speaker: 'Harry', parts: ['Really? I love it. It’s ', { answer: 'my favourite subject' }, '.'] },
    ]},
    { title: 'Where does the girl put the dictionary?', lines: [
      { speaker: 'Teacher', parts: ['OK. Everyone put your books ', { answer: 'in your bag' }, ' or ', { answer: 'under your desks' }, '. We’re going to do a ', { answer: 'vocabulary test' }, '.'] },
      { speaker: 'Girl', parts: [{ answer: 'Shall I' }, ' put this ', { answer: 'dictionary on the bookshelf' }, '? It’s not mine. It ', { answer: 'belongs to the school' }, '.'] },
      { speaker: 'Teacher', parts: ['No, can you ', { answer: 'leave it' }, ' on that table ', { answer: 'near the door' }, ', please?'] },
      { speaker: 'Girl', parts: ['OK.'] },
    ]},
    { title: 'What does the boy lend the girl?', lines: [
      { speaker: 'Boy', parts: ['Hi Josie. Have you ', { answer: 'got your English book' }, ' today?'] },
      { speaker: 'Josie', parts: ['Yes, I have. I ', { answer: 'put it in my bag' }, ' last night and I’ve got my ', { answer: 'pencil case' }, ' too, but I’ve ', { answer: 'left my ruler at home' }, '!'] },
      { speaker: 'Boy', parts: ['Oh Josie! You ', { answer: 'always forget something' }, '! Do you want to ', { answer: 'borrow mine' }, '?'] },
      { speaker: 'Josie', parts: ['Yes, please. I need it for the ', { answer: 'maths test' }, ' today.'] },
    ]},
    { title: 'What time does the TV programme start?', lines: [
      { speaker: 'Mum', parts: [{ answer: 'There’s a programme' }, ' on TV tomorrow that ', { answer: 'might be useful' }, ' for your ', { answer: 'history project' }, ', Melissa.'] },
      { speaker: 'Melissa', parts: ['Really? ', { answer: 'What time' }, ' is it on? I’ve got ', { answer: 'volleyball practice' }, ' at 5:45 and the ', { answer: 'coach told us' }, ' not to be ', { answer: 'late' }, '!'] },
      { speaker: 'Mum', parts: ['It’s on Channel 10 at 5:30. It’s only ', { answer: 'half an hour long' }, '.'] },
      { speaker: 'Melissa', parts: ['I’ll probably ', { answer: 'watch it online later' }, '.'] },
    ]},
    { title: 'Where does the medical student have lessons?', lines: [
      { speaker: 'Woman', parts: ['Hello Patrick. ', { answer: 'Are you enjoying' }, ' your ', { answer: 'university course' }, '?'] },
      { speaker: 'Patrick', parts: ['Yes, I am. Medicine is ', { answer: 'very interesting' }, ' and I love living in the city. And ', { answer: 'there’s a fantastic library' }, ' near ', { answer: 'my flat' }, '. I usually study there ', { answer: 'at the weekends' }, ' because I have ', { answer: 'a lot of exams' }, '!'] },
      { speaker: 'Woman', parts: ['Do you have lessons ', { answer: 'in the hospital' }, '?'] },
      { speaker: 'Patrick', parts: ['No, we ', { answer: 'spend a lot of time' }, ' there every week but all of our classes are in the ', { answer: 'main university building' }, ' with the ', { answer: 'other students' }, '.'] },
    ]},
  ],
  '3-2': [
    { title: 'You will hear a teacher talking about photography lessons.', lines: [
      { speaker: 'Joe', parts: ['I’m Joe and I’m a teacher on the photography course. Photography is a very popular ', { answer: 'subject' }, ', so we offer these courses three times a year.'] },
      { speaker: 'Joe', parts: ['The next course ', { answer: 'starts' }, ' on the third of October and ', { answer: 'finishes' }, ' in the second week of December.'] },
      { speaker: 'Joe', parts: ['All lessons are in the evenings. In the ', { answer: 'new' }, ' year, the classes will be on ', { answer: 'Thursdays' }, ', but the ', { answer: 'first' }, ' course, starting in ', { answer: 'October' }, ', is on ', { answer: 'Wednesdays' }, '. Classes start at ', { answer: '6.30 p.m.' }, ' and finish at ', { answer: '8.30' }, '.'] },
      { speaker: 'Joe', parts: ['What else? The ', { answer: 'price' }, ' of the course is £', { answer: '75' }, ', and you’ll need your own ', { answer: 'camera' }, ', and you’ll probably need to spend about £', { answer: '20' }, ' on buying ', { answer: 'photo paper' }, '.'] },
      { speaker: 'Joe', parts: ['If you want to book a place on the evening course, the college is open in July and September, but it’s not open at all in ', { answer: 'August' }, '.'] },
      { speaker: 'Joe', parts: ['The college office is open from ', { answer: '9.30 a.m.' }, ' to ', { answer: '12.45 p.m.' }, ', and ', { answer: '5.30 p.m.' }, ' to ', { answer: '9 p.m.' }, '.'] },
      { speaker: 'Joe', parts: ['The college ', { answer: 'address' }, ' is 59 Bracknell Street - that’s ', { answer: 'B-R-A-C-K-N-E-double L' }, '. We’re very ', { answer: 'near' }, ' the ', { answer: 'park' }, ', and we have a large car park.'] },
    ]},
  ],
  '3-3': [
    { title: 'You will hear James talking to his friend Susan about his holiday.', lines: [
      { speaker: 'Susan', parts: ['Are you excited about your holiday, James?'] },
      { speaker: 'James', parts: ['Yes!'] },
      { speaker: 'Susan', parts: [{ answer: 'How long' }, ' are you ', { answer: 'away' }, ' for?'] },
      { speaker: 'James', parts: [{ answer: 'Three' }, ' weeks. Some ', { answer: 'friends' }, ' are going to ', { answer: 'stay' }, ' at my ', { answer: 'house' }, ' for ', { answer: 'two' }, ' weeks. And my ', { answer: 'cousin' }, ' will be there for the final ', { answer: 'week' }, '. I’ll be home on the 30th.'] },
      { speaker: 'Susan', parts: [{ answer: 'Where' }, ' exactly are you going?'] },
      { speaker: 'James', parts: ['Miami and Paris. There are ', { answer: 'flights' }, ' to ', { answer: 'France' }, ' from Manchester every day, ', { answer: 'so' }, ' I’m spending a few days exploring ', { answer: 'Paris' }, ' before flying to Miami.'] },
      { speaker: 'Susan', parts: ['Amazing!'] },
      { speaker: 'James', parts: [{ answer: 'Have' }, ' you ever ', { answer: 'been' }, ' to the ', { answer: 'USA' }, ', Susan?'] },
      { speaker: 'Susan', parts: [{ answer: 'Not' }, ' yet. I went to ', { answer: 'Mexico' }, ' when I was ', { answer: 'younger' }, ', and I went ', { answer: 'skiing' }, ' in ', { answer: 'Canada' }, ' in ', { answer: 'January' }, ', but I’d like to visit the USA ', { answer: 'next' }, ' year. ', { answer: 'How long' }, ' is the flight to Miami?'] },
      { speaker: 'James', parts: ['Eight and a half hours, which is ', { answer: 'OK' }, '. But I ', { answer: 'never sleep' }, ' on planes, so I’m sure I will just want to ', { answer: 'go' }, ' to ', { answer: 'bed' }, ' when I arrive.'] },
      { speaker: 'Susan', parts: ['Shall I ', { answer: 'meet' }, ' you at the ', { answer: 'airport' }, ' when you get back?'] },
      { speaker: 'James', parts: ['Yes, please. I arrive at ', { answer: '5:35' }, ' in the ', { answer: 'afternoon' }, '.'] },
      { speaker: 'Susan', parts: ['The arrivals hall will be really ', { answer: 'busy' }, ' then. And it’ll be ', { answer: 'hard' }, ' to find a ', { answer: 'space' }, ' in the ', { answer: 'car park' }, '. I’ll ', { answer: 'pick' }, ' you ', { answer: 'up' }, ' in the ', { answer: 'bus' }, ' station, by the exit.'] },
      { speaker: 'James', parts: ['I know where you mean. Great, thanks.'] },
    ]},
  ],
  '3-4': [
    { title: 'What is her favourite subject?', lines: [
      { speaker: 'Steph', parts: ['Hi Uncle Jamie.'] },
      { speaker: 'Uncle', parts: ['Hi Steph, how’s school these days?'] },
      { speaker: 'Steph', parts: ['Well, ', { answer: 'science' }, ' lessons have got really ', { answer: 'hard' }, ', so I’m losing ', { answer: 'interest' }, ' in them. But ', { answer: 'art' }, ' classes are the ', { answer: 'opposite' }, '. They give me a chance to ', { answer: 'relax' }, ', and are the ', { answer: 'best' }, ' part of my week. I really like my ', { answer: 'history' }, ' teacher, but I’m ', { answer: 'not so' }, ' interested in this term’s topic.'] },
      { speaker: 'Uncle', parts: ['I see!'] },
    ]},
    { title: 'What is different about today’s science club?', lines: [
      { speaker: 'Teacher', parts: ['Could I have everyone’s attention, please? If you’re ', { answer: 'going' }, ' to the Year ', { answer: '9' }, ' science club in the ', { answer: 'chemistry' }, ' lab at ', { answer: 'lunchtime' }, ' today, I just want to let you know that Mrs Wilson is ', { answer: 'ill' }, ', so I’ll be ', { answer: 'running' }, ' the session today. See you at midday then.'] },
    ]},
    { title: 'What has Jim hurt?', lines: [
      { speaker: 'Girl', parts: ['Hi Jim. I thought you had sport now?'] },
      { speaker: 'Jim', parts: ['I do, ', { answer: 'but I can’t' }, ' play hockey.'] },
      { speaker: 'Girl', parts: ['Have you still got a problem with your ', { answer: 'leg' }, '?'] },
      { speaker: 'Jim', parts: ['That’s ', { answer: 'OK' }, ' now. I cut my ', { answer: 'fingers' }, ' when I was helping my grandad in his ', { answer: 'garden' }, ', and now it’s too ', { answer: 'painful to hold' }, ' my hockey stick. I can’t even ', { answer: 'put' }, ' my hockey ', { answer: 'boots' }, ' on.'] },
      { speaker: 'Girl', parts: ['Oh.'] },
    ]},
    { title: 'What has the girl forgotten to bring to school?', lines: [
      { speaker: 'Girl', parts: ['Ben, can you ', { answer: 'lend' }, ' me something to ', { answer: 'write' }, ' with today?'] },
      { speaker: 'Ben', parts: ['Sure, but you normally have loads of ', { answer: 'pens' }, '.'] },
      { speaker: 'Girl', parts: ['I emptied my ', { answer: 'school bag' }, ' last night when I was ', { answer: 'looking' }, ' for my ', { answer: 'purse' }, '. I forgot to put my ', { answer: 'case' }, ' back in.'] },
      { speaker: 'Ben', parts: ['Have you forgotten to bring ', { answer: 'money' }, ' today too?'] },
      { speaker: 'Girl', parts: ['No, I put that ', { answer: 'back' }, ' in my bag after I found it.'] },
    ]},
    { title: 'Where did they visit?', lines: [
      { speaker: 'Teacher', parts: ['Good morning, class. I hope you enjoyed the trip ', { answer: 'yesterday' }, '. This morning in ', { answer: 'biology' }, ', we’re going to use the ', { answer: 'computers' }, ' to ', { answer: 'find out' }, ' more information about the kinds of ', { answer: 'monkeys' }, ' we enjoyed seeing yesterday afternoon and make ', { answer: 'posters' }, ' about them. You can include any ', { answer: 'pictures' }, ' you drew while you were watching them.'] },
    ]},
  ],
  '3-5': [
    { title: 'You will hear Tanya talking to a friend about a sports camp.', lines: [
      { speaker: 'Eric', parts: ['Hi, Tanya. Did you have a good time at the sports camp in Wales last weekend?'] },
      { speaker: 'Tanya', parts: ['Yes, thank you. I went with all my friends and there were university students from other countries too. We had a fantastic time!'] },
      { speaker: 'Eric', parts: ['Really? What sports did you try?'] },
      { speaker: 'Tanya', parts: ['I went ', { answer: 'climbing' }, '! It was fun, but I wasn’t very good.'] },
      { speaker: 'Eric', parts: ['What about Chris? He loves ', { answer: 'water' }, ' sports. Did he go ', { answer: 'sailing' }, ' again?'] },
      { speaker: 'Tanya', parts: ['No, ', { answer: 'this year' }, ' he learnt to ', { answer: 'windsurf' }, ', but it wasn’t very windy so he didn’t enjoy it.'] },
      { speaker: 'Eric', parts: ['And what about Gina? What sport did she play?'] },
      { speaker: 'Tanya', parts: ['Well, she went to the ', { answer: 'pool' }, ' every morning before breakfast. The ', { answer: 'teacher' }, ' was fantastic and her swimming really ', { answer: 'improved' }, '. Next year she’s going to play water polo!'] },
      { speaker: 'Eric', parts: ['That’s great news! And what did Tom do?'] },
      { speaker: 'Tanya', parts: ['He ', { answer: 'wanted' }, ' to play ', { answer: 'golf' }, ', but the teacher was ', { answer: 'ill' }, ' so he had ', { answer: 'tennis lessons' }, ' instead. There were lots of people on the ', { answer: 'courts' }, ' so he had fun!'] },
      { speaker: 'Eric', parts: ['Did Emma go to the camp? She doesn’t like sports.'] },
      { speaker: 'Tanya', parts: ['That’s ', { answer: 'true' }, ', but she loves ', { answer: 'animals' }, '. She went ', { answer: 'horse riding' }, ' on the beach every day. Her horse was called ', { answer: 'Thunder' }, '. He was beautiful and he ran really ', { answer: 'fast' }, '!'] },
      { speaker: 'Eric', parts: ['And did Harry play ', { answer: 'football' }, '?'] },
      { speaker: 'Tanya', parts: ['No. Football is his favourite sport, ', { answer: 'but this time' }, ' he played ', { answer: 'basketball' }, '. He entered a ', { answer: 'competition' }, ' with his team and they won first prize!'] },
      { speaker: 'Eric', parts: ['He’s very good at sport. He always wins competitions.'] },
      { speaker: 'Tanya', parts: ['Yes, but he didn’t win the competition on Sunday afternoon!'] },
      { speaker: 'Eric', parts: ['Why not?'] },
      { speaker: 'Tanya', parts: ['We were all very tired, so we left the camp before lunch. He didn’t play!'] },
    ]},
  ],
}

export const LISTENING_GAP_SETS = [1, 2, 3].map(setNumber => ({
  id: setNumber,
  title: `第${setNumber}套`,
  parts: [1, 2, 3, 4, 5].map(part => {
    const taskIndex = (setNumber - 1) * 5 + (part - 1)
    const track = String(trackNumbers[setNumber][part - 1]).padStart(2, '0')
    return {
      id: part,
      title: `Part ${part}`,
      skill: partNames[part],
      exercisePages: exercisePages[setNumber][part - 1],
      answerPage: 2 + taskIndex * 2,
      transcriptPage: 3 + taskIndex * 2,
      audio: `/audio/listening-gap/set${setNumber}/Track%20${track}.mp3`,
      answers: answers[setNumber][part - 1],
      prompts: prompts[setNumber][part - 1],
      cloze: clozeTracks[`${setNumber}-${part}`] || null,
    }
  }),
}))

export const LISTENING_GAP_EXERCISES = LISTENING_GAP_SETS.flatMap(set =>
  set.parts.map(part => ({
    ...part,
    exerciseNumber: (set.id - 1) * 5 + part.id,
    label: `练习${(set.id - 1) * 5 + part.id}`,
  }))
)
