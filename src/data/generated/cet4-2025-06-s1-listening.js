// 2025年6月第一套 CET-4 听力数据
// 答案：解析 PDF 逐题读图核对；原文：解析 PDF 官方听力原文；题目选项：原题 PDF 文字层（双栏错位已重新配对）
// verified: true
const LISTENING = {
  id: 'cet4-2025-06-s1',
  meta: {
    level: 'CET4',
    year: 2025,
    month: 6,
    set: 1,
    source:
      '原题：2025.06四级真题第1套.pdf；音频：2025年06月四级听力音频第1套.mp3；原文：2025.06英语四级解析第1套.pdf',
    answerSource: '解析 PDF（读图逐题核对）',
    verified: true,
    verifiedAt: '2026-11-05',
  },
  audioUrls: {
    news: '/audio/cet4-2025-06-s1-a.mp3', // Section A 0.0-431.8s
    conv: '/audio/cet4-2025-06-s1-b.mp3', // Section B 431.8-832.7s
    pass: '/audio/cet4-2025-06-s1-c.mp3', // Section C 832.7-1416.6s
  },
  transcript: '',
  sections: {
    news: [
      {
        title: 'News Report One',
        audio: '/audio/cet4-2025-06-s1-n1.mp3', // 0-161.3s
        transcript:
          'Everything changed for 7-year-old Tariq when he slapped some butter on an ear of corn. He knew it tasted good, but butter made it better. His passion for produce got him a position as South Dakota\'s official Corn Ambassador. Tariq\'s profession of love for his favorite vegetable earned him the name "the Corn Kid". This was after his online interview attracted millions of views and was made into a song. South Dakota is one of the top corn producers in America. The corn provides nourishment across the globe. Tariq said, "Not everyone has to like corn, but everyone should definitely try it, especially with butter." Tariq and his family were invited to South Dakota to attend the honorary ceremony at the state\'s Corn Palace. Officials wanted to highlight South Dakota\'s two largest industries: tourism and agriculture. Tariq couldn\'t believe his eyes when he saw the palace made of corn.',
        questions: [
          {
            n: 1,
            text: 'How did Tariq make corn taste better?',
            options: [
              { letter: 'A', text: 'By slapping some butter on it.' },
              { letter: 'B', text: 'By enhancing its nourishment.' },
              { letter: 'C', text: 'By growing it in South Dakota.' },
              { letter: 'D', text: 'By cooking it in vegetable oil.' },
            ],
            answer: 'A',
          },
          {
            n: 2,
            text: 'Why were Tariq and his family invited to South Dakota?',
            options: [
              { letter: 'A', text: 'To introduce their corn to tourists.' },
              { letter: 'B', text: 'To attend an honorary ceremony.' },
              { letter: 'C', text: 'To share experience with other corn growers.' },
              { letter: 'D', text: 'To exhibit their corn at the state\'s Corn Palace.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'News Report Two',
        audio: '/audio/cet4-2025-06-s1-n2.mp3', // 161.3-270.9s
        transcript:
          'Two arrests were announced Thursday. The arrests were in connection with a string of mail thefts from U.S. Postal Service\'s collection boxes in Marion County and for the possession of a stolen postal key, according to the Department of Justice. Jordan Jax and Tarod Goodman, both 23, were arrested after evidence gathered in an investigation showed the pair stole mail on multiple occasions using a postal key, according to a news release. Jax and Goodman stole mail for around four months. Investigators reviewed videos of the collection boxes; the video showed the two men loading the stolen mail into Jax\'s vehicle. Investigators were also able to recover the key that was used to open the collection boxes. Jax and Goodman each face up to five years in federal prison in the mail thefts and up to ten years for possession of the postal key.',
        questions: [
          {
            n: 3,
            text: 'What did Jordan Jax and Tarod Goodman do according to a news release?',
            options: [
              { letter: 'A', text: 'Stole mail several times.' },
              { letter: 'B', text: 'Forged postal keys illegally.' },
              { letter: 'C', text: 'Attacked postmen on multiple occasions.' },
              { letter: 'D', text: 'Broke a number of postal collection boxes.' },
            ],
            answer: 'A',
          },
          {
            n: 4,
            text: 'What do Jordan Jax and Tarod Goodman face?',
            options: [
              { letter: 'A', text: 'A sentence for life.' },
              { letter: 'B', text: 'Loss of all their possessions.' },
              { letter: 'C', text: 'Twenty-three years\' hard labor.' },
              { letter: 'D', text: 'Up to fifteen years in prison.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'News Report Three',
        audio: '/audio/cet4-2025-06-s1-n3.mp3', // 270.9-431.8s
        transcript:
          'Can fast-fashion be sustainable? Researchers think yes. Identifying why the fast-fashion business model creates waste and determining whether regulators can establish incentives for consumers and manufacturers are steps to reduce waste. Recently, the clothing industry has come under attack for creating a waste problem with serious environmental consequences. In the absence of environmentally and economically feasible recycling options, fast-fashion manufacturers pump out low-quality clothes produced in high volumes that are worn only a few times and then discarded. The researchers put forth policy contributions, ranging from sustainable disposal of leftover stock to production tax to incentivize both manufacturers and consumers to be more waste conscious. In order to devise effective policies to curb the environmental impact of the clothing industry, it is important to identify the source of the problem in the supply chain. Manufacturers, consumers, and regulatory bodies can then take an informed approach to recognize the environmental impact of fast-fashion and to design an ecosystem to reduce waste, incentivize innovation, and create new business models to manage waste.',
        questions: [
          {
            n: 5,
            text: 'Why has the clothing industry come under attack?',
            options: [
              { letter: 'A', text: 'It escapes regulation and misleads consumers.' },
              { letter: 'B', text: 'It ignores economically feasible recycling options.' },
              { letter: 'C', text: 'It creates waste and severely impacts the environment.' },
              { letter: 'D', text: 'It produces clothes affordable only to a tiny minority.' },
            ],
            answer: 'C',
          },
          {
            n: 6,
            text: 'Why did the researchers put forth such policies as production tax?',
            options: [
              { letter: 'A', text: 'To cut consumers\' expenses in buying quality clothes.' },
              { letter: 'B', text: 'To enable the whole fast-fashion industry to be sustainable.' },
              { letter: 'C', text: 'To incentivize manufacturers to be more consumer-friendly.' },
              { letter: 'D', text: 'To urge manufacturers and consumers to reduce waste.' },
            ],
            answer: 'D',
          },
          {
            n: 7,
            text: 'What should be done first to eliminate the harm caused by the clothing industry?',
            options: [
              { letter: 'A', text: 'Recognizing the impact on consumers.' },
              { letter: 'B', text: 'Identifying the source of the problem.' },
              { letter: 'C', text: 'Abandoning the current business model.' },
              { letter: 'D', text: 'Establishing powerful regulatory bodies.' },
            ],
            answer: 'B',
          },
        ],
      },
    ],
    conversations: [
      {
        title: 'Conversation One',
        audio: '/audio/cet4-2025-06-s1-c1.mp3', // 431.8-650.5s
        transcript:
          'M: Hey Mary, you seem to be very much annoyed. What happened? W: Rush hour in this city is killing me. M: Ah, yes. Rush hour is terrible, especially in the morning between 8 and 9. But what else can you expect in a city this big? W: Well, I think the local government could help improve things. I mean, getting rid of rush hour may be impossible, but it could be made more tolerable, don\'t you think? M: Um... but I\'m not sure how. W: Well, for example, the subway system could have air conditioning. I know many cities in the world have air conditioning in their subway, so why can\'t we? It gets so hot in the summer. I can hardly breathe down there. And add to that the rush-hour crowds with strangers packed close together in the subway carriages, the whole thing is just horrible. M: Ah, yes, you are completely right. The trains here are too old. The government should definitely invest in new ones with air conditioning. I guess I\'m fortunate I take the bus instead. W: Oh, that\'s much better. M: Yeah, it\'s more convenient. Bus No. 36 goes straight from my house to the office. It\'s a 30-minute ride and I don\'t have to make any changes. W: That sounds nice. I tell you, my current commute is killing me. Maybe I should move closer to the office. M: Well, I know a great housing agent. I found the flat I\'m living in now through him. And I love it. W: Hmm, could you send me his number, please? M: Sure thing. Just tell him exactly what you are looking for and I\'m sure he will find something good.',
        questions: [
          {
            n: 8,
            text: 'Why is the woman complaining?',
            options: [
              { letter: 'A', text: 'The city\'s rush-hour traffic is intolerable.' },
              { letter: 'B', text: 'She cannot avoid rush-hour traffic.' },
              { letter: 'C', text: 'The local government is inefficient.' },
              { letter: 'D', text: 'The city is too big to move around easily.' },
            ],
            answer: 'A',
          },
          {
            n: 9,
            text: 'What does the woman suggest doing?',
            options: [
              { letter: 'A', text: 'Upgrading subway carriages.' },
              { letter: 'B', text: 'Increasing the number of bus routes.' },
              { letter: 'C', text: 'Air conditioning the city\'s subway.' },
              { letter: 'D', text: 'Learning from other big cities.' },
            ],
            answer: 'C',
          },
          {
            n: 10,
            text: 'What do we learn about the man from the conversation?',
            options: [
              { letter: 'A', text: 'He suffers from rush-hour crowding too.' },
              { letter: 'B', text: 'He is fortunate to live very near to work.' },
              { letter: 'C', text: 'He takes a half-hour bus ride to work.' },
              { letter: 'D', text: 'He is going to move closer to his office.' },
            ],
            answer: 'C',
          },
          {
            n: 11,
            text: 'What does the woman ask the man to do at the end of the conversation?',
            options: [
              { letter: 'A', text: 'Recommend to her a good house near his office.' },
              { letter: 'B', text: 'Send her his housing agent\'s telephone number.' },
              { letter: 'C', text: 'Tell her exactly what kind of property to look for.' },
              { letter: 'D', text: 'Make sure the agent finds something good for her.' },
            ],
            answer: 'B',
          },
        ],
      },
      {
        title: 'Conversation Two',
        audio: '/audio/cet4-2025-06-s1-c2.mp3', // 650.5-832.7s
        transcript:
          'M: Did you hear about Johnny? W: No. Why? Is he okay? M: He had some plastic surgery done. W: What? Why? M: Do you remember he had a scar on his face? W: Yes, of course. He always had that. I\'ve known him since primary school, and I always remember him having that on his cheek. M: Well, he had it fixed. W: Fixed? What do you mean? You can\'t fix a scar. M: You know what I mean? He had an operation done on it, plastic surgery, in order to cover it and make it less noticeable. W: Oh, well, that\'s ridiculous, isn\'t it? It was noticeable, sure. But it wasn\'t an ugly scar. It never occurred to me that he should have taken care of like that. M: I agree. I can understand some scars and physical defects can be ugly and distracting, but not Johnny\'s. In fact, I thought it added character... like it gave him a certain uniqueness. W: He must have felt differently though. He must have felt self-conscious and insecure, perhaps. M: No, no, that\'s not the reason. He was totally fine with his scar. As you said, he had had it for most of his life. W: Then why did he have the operation? M: Because his girlfriend wanted him to. W: What? That\'s so superficial and selfish of her. If Johnny\'s girlfriend doesn\'t like him for who he is, then she does not deserve to be his girlfriend. M: You are right. So he is insane to give in to her like that. But when I told him, he said he loves her and would just do what she wants him to. W: What a fool he is.',
        questions: [
          {
            n: 12,
            text: 'What does the man say about Johnny?',
            options: [
              { letter: 'A', text: 'He was remembered for the scar on his cheek.' },
              { letter: 'B', text: 'He received a heart operation a few days ago.' },
              { letter: 'C', text: 'He used to wear a sad face in school.' },
              { letter: 'D', text: 'He had some plastic surgery done.' },
            ],
            answer: 'D',
          },
          {
            n: 13,
            text: 'What does the woman find puzzling?',
            options: [
              { letter: 'A', text: 'The man\'s deep sympathy for Johnny.' },
              { letter: 'B', text: 'The man\'s use of the expression \'fixed\'.' },
              { letter: 'C', text: 'The man\'s covering up of what happened.' },
              { letter: 'D', text: 'The man\'s good memory of his childhood.' },
            ],
            answer: 'B',
          },
          {
            n: 14,
            text: 'What did the man think of Johnny\'s scar?',
            options: [
              { letter: 'A', text: 'It gave him a noticeable smartness.' },
              { letter: 'B', text: 'It made him appear even more manly.' },
              { letter: 'C', text: 'It seemed to give him a certain uniqueness.' },
              { letter: 'D', text: 'It seemed to make up for his physical defects.' },
            ],
            answer: 'C',
          },
          {
            n: 15,
            text: 'How could we describe the speakers\' attitude towards Johnny\'s girlfriend?',
            options: [
              { letter: 'A', text: 'Liberal.' },
              { letter: 'B', text: 'Hostile.' },
              { letter: 'C', text: 'Indifferent.' },
              { letter: 'D', text: 'Critical.' },
            ],
            answer: 'D',
          },
        ],
      },
    ],
    passages: [
      {
        title: 'Passage One',
        audio: '/audio/cet4-2025-06-s1-p1.mp3', // 832.7-1038.7s
        transcript:
          'Talking is unique to humans. An animal might make 10 different sounds, but an adult human knows more than 20,000 words. Additionally, we\'re the only animal that expresses thoughts in full sentences. Researchers don\'t think language was invented; instead, they think it evolved. How did talking evolve? There are two main theories. The first theory is that language started with people making different sounds, mostly imitating the sounds around them, like animal calls, nature sounds, and the sounds of tools. Perhaps they made the sound of wind to comment on the weather or imitated the sound of a bird to tell a friend that there was a bird nearby. Then over hundreds of thousands of years, those sounds turned into words that people began to learn as part of language. At some point, people started stringing the words together to form sentences. The other main theory, which is more recent, is that people started off by gesturing—pointing at things with their hands and imitating actions using their bodies. Eventually these gestures turned into a full sign language. This theory guesses that after developing sign languages, people eventually started making sounds along with their gestures. At some point, they switched to mostly making sounds that became words instead of just using their bodies. The reason they switched to making sounds, the theory goes, is that talking out loud lets you communicate with someone even when you can\'t see them.',
        questions: [
          {
            n: 16,
            text: 'How did language come into being according to researchers?',
            options: [
              { letter: 'A', text: 'Through deliberation.' },
              { letter: 'B', text: 'Through evolution.' },
              { letter: 'C', text: 'Through invention.' },
              { letter: 'D', text: 'Through collaboration.' },
            ],
            answer: 'B',
          },
          {
            n: 17,
            text: 'How did language start according to the first theory?',
            options: [
              { letter: 'A', text: 'With people imitating sounds around them.' },
              { letter: 'B', text: 'With people interacting with animals close by.' },
              { letter: 'C', text: 'With people showing each other things nearby.' },
              { letter: 'D', text: 'With people trying to string sounds together.' },
            ],
            answer: 'A',
          },
          {
            n: 18,
            text: 'Why did people switch from gesturing to making sounds according to the more recent theory?',
            options: [
              { letter: 'A', text: 'Making sounds can free one\'s hands for doing other things.' },
              { letter: 'B', text: 'Making sounds proves markedly easier than sign languages.' },
              { letter: 'C', text: 'Making sounds enables one to express their ideas more explicitly.' },
              { letter: 'D', text: 'Making sounds helps one communicate with people they can\'t see.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Two',
        audio: '/audio/cet4-2025-06-s1-p2.mp3', // 1038.7-1216.6s
        transcript:
          'Is it a good idea to display luxury brands and other signals of status? It depends on the situation. Studies have shown that people who appear to be wealthy tend to be considered more intelligent, disciplined, and competent than those who do not. But new research found that people believe someone who shows off their social status cares more about benefiting themselves than helping others. This means people are less willing to collaborate with them. Modesty may be key when cooperation is essential, but the researchers also found that in some cases, status signaling has advantages. Experiments showed that participants were less likely to choose someone who signals their wealth or status to join a group seeking cooperative members. But participants were more likely to choose that person when they\'re looking for a competitive team member. These findings suggest that people should change how they present themselves depending on their social goal. This is the era of social media. People can easily share their wealth and status to large audiences, but they need to consider the consequences. Posting about luxury purchases and expensive vacations online may help you to persuade others and frighten competitors, but it could also signal to potential friends or future employers that you are unlikely to think about the needs of others. This makes things tricky for people who may want to impress others while also demonstrating that they are a team player.',
        questions: [
          {
            n: 19,
            text: 'How would people describe someone who shows off their social status according to new research?',
            options: [
              { letter: 'A', text: 'Well disciplined.' },
              { letter: 'B', text: 'Quite confident.' },
              { letter: 'C', text: 'Somewhat selfish.' },
              { letter: 'D', text: 'Highly intelligent.' },
            ],
            answer: 'C',
          },
          {
            n: 20,
            text: 'When were participants more likely to choose someone who signaled their wealth or status?',
            options: [
              { letter: 'A', text: 'When they wanted to have a competitive team member.' },
              { letter: 'B', text: 'When they were looking for a cooperative workmate.' },
              { letter: 'C', text: 'When they found collaboration essential to them.' },
              { letter: 'D', text: 'When they were seeking someone to help them.' },
            ],
            answer: 'A',
          },
          {
            n: 21,
            text: 'What should people do when sharing their wealth and status online?',
            options: [
              { letter: 'A', text: 'Avoid frightening competitors.' },
              { letter: 'B', text: 'Make clear their social goal.' },
              { letter: 'C', text: 'Adopt persuasive strategies.' },
              { letter: 'D', text: 'Consider the consequences.' },
            ],
            answer: 'D',
          },
        ],
      },
      {
        title: 'Passage Three',
        audio: '/audio/cet4-2025-06-s1-p3.mp3', // 1216.6-1413.8s
        transcript:
          'Human fascination with animals goes back as far as humans do. Of the oldest cave paintings discovered, some are up to 40,000 years old, and there are more images of animals than humans. At some point, humans began to capture and hold animals. The first-known collections were held by royalty and were not open to the public. In Egypt, researchers have found buildings from around 3500 B.C., containing the remains of animals, including elephants, which were not native to Egypt. But life wasn\'t easy for these animals. They probably had short lives, and their remains show evidence of severe injuries. The first public exhibit of animals may have been created by Egypt\'s Queen Hatshepsut around 1480 B.C. Researchers think the zoo was started with animals brought home from a far-off land known as Punt. It\'s unclear why the Queen built the zoo, but it might have been to show off her wealth and power. Early zoos are found all over the world. In China, Emperor Wenwang is said to have built a "Garden of Intelligence" around 1060 B.C. It included deer, birds, and many fish. In England, King Henry I set up a collection of animals in about 1110 as part of the royal estate. His collection included tigers and lions. This collection eventually moved to the Tower of London in 1235. The collection stayed at that location for 600 years.',
        questions: [
          {
            n: 22,
            text: 'What can we see in the oldest cave paintings?',
            options: [
              { letter: 'A', text: 'Much evidence of humans capturing animals.' },
              { letter: 'B', text: 'More images of animals than humans.' },
              { letter: 'C', text: 'Fewer images of buildings than animals.' },
              { letter: 'D', text: 'Little proof of human fascination with animals.' },
            ],
            answer: 'B',
          },
          {
            n: 23,
            text: 'What do we learn about the first-known collections of animals?',
            options: [
              { letter: 'A', text: 'They were open to the public.' },
              { letter: 'B', text: 'They were primarily native.' },
              { letter: 'C', text: 'They were kept by royalty.' },
              { letter: 'D', text: 'They were hardly injured.' },
            ],
            answer: 'C',
          },
          {
            n: 24,
            text: 'What might be the reason the Egyptian Queen created the zoo?',
            options: [
              { letter: 'A', text: 'To enable the public to watch animals close by.' },
              { letter: 'B', text: 'To introduce to Egyptians animals from Punt.' },
              { letter: 'C', text: 'To protect the endangered animals.' },
              { letter: 'D', text: 'To show off her riches and power.' },
            ],
            answer: 'D',
          },
          {
            n: 25,
            text: 'What do we learn about King Henry I\'s collection of animals in England?',
            options: [
              { letter: 'A', text: 'It was part of the royal estate.' },
              { letter: 'B', text: 'It was a shelter for wild animals.' },
              { letter: 'C', text: 'It was the kingdom\'s best-equipped zoo.' },
              { letter: 'D', text: 'It was the first public exhibit of animals.' },
            ],
            answer: 'A',
          },
        ],
      },
    ],
  },
  // 各题答案句引句（逐字摘自听力原文，供校验与荧光笔高亮使用）
  answerQuotes: {
    1: ['Everything changed for 7-year-old Tariq when he slapped some butter on an ear of corn.'],
    2: ['Tariq and his family were invited to South Dakota to attend the honorary ceremony at the state\'s Corn Palace.'],
    3: ['were arrested after evidence gathered in an investigation showed the pair stole mail on multiple occasions using a postal key'],
    4: ['Jax and Goodman each face up to five years in federal prison in the mail thefts and up to ten years for possession of the postal key.'],
    5: ['the clothing industry has come under attack for creating a waste problem with serious environmental consequences.'],
    6: ['The researchers put forth policy contributions, ranging from sustainable disposal of leftover stock to production tax to incentivize both manufacturers and consumers to be more waste conscious.'],
    7: ['it is important to identify the source of the problem in the supply chain.'],
    8: ['Rush hour in this city is killing me.'],
    9: ['the subway system could have air conditioning.'],
    10: ['Bus No. 36 goes straight from my house to the office. It\'s a 30-minute ride and I don\'t have to make any changes.'],
    11: ['could you send me his number, please?'],
    12: ['He had some plastic surgery done.'],
    13: ['Fixed? What do you mean? You can\'t fix a scar.'],
    14: ['I thought it added character... like it gave him a certain uniqueness.'],
    15: ['That\'s so superficial and selfish of her.'],
    16: ['Researchers don\'t think language was invented; instead, they think it evolved.'],
    17: ['The first theory is that language started with people making different sounds, mostly imitating the sounds around them, like animal calls, nature sounds, and the sounds of tools.'],
    18: ['talking out loud lets you communicate with someone even when you can\'t see them.'],
    19: ['people believe someone who shows off their social status cares more about benefiting themselves than helping others.'],
    20: ['But participants were more likely to choose that person when they\'re looking for a competitive team member.'],
    21: ['People can easily share their wealth and status to large audiences, but they need to consider the consequences.'],
    22: ['Of the oldest cave paintings discovered, some are up to 40,000 years old, and there are more images of animals than humans.'],
    23: ['The first-known collections were held by royalty and were not open to the public.'],
    24: ['It\'s unclear why the Queen built the zoo, but it might have been to show off her wealth and power.'],
    25: ['In England, King Henry I set up a collection of animals in about 1110 as part of the royal estate.'],
  },
}

export default LISTENING
