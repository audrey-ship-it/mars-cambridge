const writingTips = {
  email: ['回答题目中的三个要点', '使用合适的称呼和结尾', '写25词或以上', '完成后检查时态、拼写和标点'],
  story: ['按三幅图的先后顺序叙述', '主要使用一般过去时', '加入连接词和人物感受', '写35词或以上'],
}

function email(prompt, modelAnswer) {
  return { part: 6, type: 'guided_writing', title: 'Part 6 · 邮件写作', prompt, modelAnswer, tips: writingTips.email }
}

function story(book, test, imageDesc, modelAnswer) {
  return {
    part: 7,
    type: 'story_writing',
    title: 'Part 7 · 看图写故事',
    prompt: 'Look at the three pictures.\nWrite the story shown in the pictures.\n\nWrite 35 words or more.',
    imageSrc: `/images/ket/productive/b${book}/test-${test}-writing.jpg`,
    imageDesc,
    modelAnswer,
    tips: writingTips.story,
  }
}

const speakingDetails = {
  wear: {
    theme: 'Different things to wear', themeZh: '不同的穿着',
    prompts: ['Do you like shopping for clothes?', 'Do you like wearing sunglasses?', 'Are trainers comfortable?', 'Do you like wearing caps?', 'Is a watch useful?'],
    answer: 'I like shopping for clothes when I need something new. Sunglasses are useful on sunny days, and trainers are comfortable for walking or doing sport. I sometimes wear a cap, but I think a watch is the most useful because it helps me arrive on time.',
  },
  outdoors: {
    theme: 'Different outdoor activities', themeZh: '不同的户外活动',
    prompts: ['Is swimming outdoors fun?', 'Is climbing exciting?', 'Do you enjoy walking in a forest?', 'Is having a barbecue a good idea?', 'Do you like running outdoors?'],
    answer: 'Swimming outdoors can be fun when the weather is warm. Climbing is exciting but sometimes difficult. I enjoy walking in a forest because it is peaceful. A barbecue is a good way to spend time with friends, and running outdoors is healthy.',
  },
  fun: {
    theme: 'Different fun activities', themeZh: '不同的娱乐活动',
    prompts: ['Are parties fun?', 'Do you like going shopping?', 'Is travelling exciting?', 'Do you enjoy watching television?', 'Do you like walking with friends?'],
    answer: 'Parties are fun because I can meet my friends. I sometimes enjoy shopping, but I prefer travelling because I can see new places. Watching television is relaxing, and walking with friends is a good chance to talk.',
  },
  subjects: {
    theme: 'Different school subjects', themeZh: '不同的学校科目',
    prompts: ['Is maths difficult?', 'Is geography interesting?', 'Do you enjoy history?', 'Are science lessons exciting?', 'Do you like art?'],
    answer: 'Maths can be difficult, but it is useful. Geography and history are interesting because we learn about the world. Science lessons are exciting when we do experiments. Art is my favourite because I enjoy making things.',
  },
  school: {
    theme: 'Different things you do at school', themeZh: '在学校做的不同活动',
    prompts: ['Do you like working with a classmate?', 'Is writing easy?', 'Do you enjoy watching films in class?', 'Is making music fun?', 'Do you like painting?'],
    answer: 'I like working with a classmate because we can help each other. Writing is sometimes difficult, but watching films in class is interesting. Making music is fun, and I also enjoy painting because it is creative.',
  },
  holiday: {
    theme: 'Different things to do on holiday', themeZh: '假期中的不同活动',
    prompts: ['Do you like visiting old buildings?', 'Is sightseeing interesting?', 'Do you enjoy sailing?', 'Are winter sports exciting?', 'Do you like eating in restaurants?'],
    answer: 'I enjoy visiting old buildings and sightseeing because I can learn about a place. Sailing looks exciting, although I prefer winter sports. Eating in restaurants is also nice because I can try local food.',
  },
  reading: {
    theme: 'Different things to read', themeZh: '不同的阅读材料',
    prompts: ['Do you like reading newspapers?', 'Are comics fun to read?', 'Do you read messages on your phone?', 'Are recipe books useful?', 'Do you enjoy reading information at museums?'],
    answer: 'I do not often read newspapers, but comics are fun and easy to understand. I read messages on my phone every day. Recipe books are useful when I cook, and I enjoy reading information at museums because I learn new facts.',
  },
  home: {
    theme: 'Different activities to do at home', themeZh: '不同的居家活动',
    prompts: ['Do you like tidying your room?', 'Are board games fun?', 'Do you enjoy talking with your family?', 'Do you like reading at home?', 'Is cooking interesting?'],
    answer: 'Tidying my room is not exciting, but I like it when everything is clean. Board games are fun with my family. I also enjoy talking and reading at home. Cooking is interesting because I can make food for everyone.',
  },
}

function speaking(book, test, key) {
  const item = speakingDetails[key]
  return {
    parts: [{
      part: 2,
      title: 'Part 2 · 图片讨论',
      duration: '5–6 分钟',
      description: '观察官方话题图卡，与同伴讨论图中的活动，并说明你喜欢或不喜欢的原因。',
      topics: [{
        id: `b${book}t${test}-speaking-2`,
        theme: item.theme,
        themeZh: item.themeZh,
        imageSrc: `/images/ket/productive/b${book}/test-${test}-speaking.jpg`,
        cardPrompts: [...item.prompts, 'Which one do you like best? Why?'],
        modelAnswer: item.answer,
        phrases: ['I like / don\'t like … because…', 'I think … is…', 'I prefer…', 'What about you?'],
      }],
    }],
  }
}

const sourceSets = [
  [1, 1, 'wear',
    email('You are going camping next weekend with your family. Write an email to your English friend, Lee.\n\nIn your email:\n• ask Lee to come camping with you and your family\n• say why you are going camping\n• tell Lee what to bring.\n\nWrite 25 words or more.', 'Hi Lee,\n\nWould you like to come camping with my family next weekend? We are going because we want to spend time outdoors. Please bring a sleeping bag, warm clothes and a torch.\n\nSee you,'),
    story(1, 1, '两名男孩看见地上的钱；其中一人捡起钱；两人用钱购买冰淇淋。', 'Two boys were walking through town when they saw some money on the ground. One of them picked it up. They decided to go into a nearby café, where they bought two ice creams and enjoyed them together.')],
  [1, 2, 'outdoors',
    email('You would like to go to the cinema with your English friend, Andi. Write an email to Andi.\n\nIn your email:\n• ask Andi to go to the cinema with you\n• say why you want to go to the cinema\n• explain how you will travel there.\n\nWrite 25 words or more.', 'Hi Andi,\n\nWould you like to go to the cinema with me on Saturday? I want to see the new adventure film because it looks exciting. We can travel there by bus together.\n\nBest wishes,'),
    story(1, 2, '一名男孩独自看篮球比赛；他把球传回球场；之后获邀加入比赛。', 'A boy was sitting beside a basketball court and watching a game. The ball came towards him, so he picked it up and threw it back. The players invited him to join them, and soon he was playing happily.')],
  [1, 3, 'fun',
    email('Read the email from your English friend, Chris.\n\nPlease tell me about the cycle race on Saturday. Where is it? What time does it begin? What do I need to bring?\n\nWrite an email to Chris and answer the questions. Write 25 words or more.', 'Hi Chris,\n\nThe cycle race is in Green Park and it begins at ten o’clock on Saturday morning. Please bring your bike, a helmet and some water. I hope you can come!\n\nSee you,'),
    story(1, 3, '两位朋友先画出寻宝图；他们在树洞中寻找；最后找到一篮彩蛋。', 'Two friends drew a treasure map and decided to follow it. The map led them to a large tree in the park. They looked inside a hole in the tree and were delighted to find a basket full of colourful eggs.')],
  [1, 4, 'subjects',
    email('Read the email from your English friend, Casey.\n\nThanks for asking me to go with you to your art group on Saturday. What time does it start? What do I need to bring? How much does it cost?\n\nWrite an email to Casey and answer the questions. Write 25 words or more.', 'Hi Casey,\n\nThe art group starts at two o’clock on Saturday. You only need to bring some pencils because paper is provided. It costs five pounds. I’m glad you can come!\n\nBest wishes,'),
    story(1, 4, '两名朋友看到歌手演出海报；他们观看演唱会；演出后与歌手合影。', 'Two friends saw a poster for a concert and bought tickets. At the concert, they sang along and had a wonderful time. Afterwards, they met the singer, talked to him and took a photo together.')],
  [2, 1, 'school',
    email('Read the email from your English friend, Daniel.\n\nThanks for asking me to go on a bike ride with you on Saturday. Where shall we go? What shall we take with us? What time do you think we’ll get home?\n\nWrite an email to Daniel and answer the questions. Write 25 words or more.', 'Hi Daniel,\n\nLet’s cycle to the lake on Saturday. We should take water, sandwiches and our helmets. I think we’ll get home at about five o’clock. I’m looking forward to it!\n\nSee you,'),
    story(2, 1, '女孩写信并寄出；一位长辈在家中收到并阅读来信。', 'A girl sat at her desk and wrote a letter to her grandmother. When she finished, she put it in an envelope and posted it. A few days later, her grandmother received the letter and smiled as she read it.')],
  [2, 2, 'holiday',
    email('Read the email from your English friend, Jack.\n\nI love watching films. What’s your favourite film? What happens in the story? Why do you like it?\n\nWrite an email to Jack and answer the questions. Write 25 words or more.', 'Hi Jack,\n\nMy favourite film is The Lion King. It is about a young lion who learns to be brave and becomes king. I like it because the story and music are wonderful.\n\nBest wishes,'),
    story(2, 2, '男孩庆祝生日并收到足球；之后带着新足球到球场射门。', 'A boy celebrated his birthday with his family. His father gave him a present, and he was excited to find a new football inside. Later, he took it outside and scored a goal at the football pitch.')],
  [2, 3, 'reading',
    email('Read the email from your English friend, Andi.\n\nI want to find a good website for listening to music. What is your favourite music website? Why do you like it? How much does it cost to use?\n\nWrite an email to Andi and answer the questions. Write 25 words or more.', 'Hi Andi,\n\nMy favourite music website is Spotify. I like it because it has lots of songs and helps me discover new singers. I use the free version, so it doesn’t cost anything.\n\nBest wishes,'),
    story(2, 3, '一家人查看旅行资料；随后乘飞机出发；最后抵达热带度假地。', 'A family looked at holiday information and chose a sunny destination. A few days later, they boarded a plane together. When they arrived, the weather was beautiful, and they took a happy family photograph beside the palm trees.')],
  [2, 4, 'home',
    email('Read the email from your English friend, Robbie.\n\nWhen I got home from school yesterday, I really enjoyed the meal I ate with my family. What’s your favourite meal? How often do you eat it? Who cooks it for you?\n\nWrite an email to Robbie and answer the questions. Write 25 words or more.', 'Hi Robbie,\n\nMy favourite meal is chicken noodles. I eat them about once a week, usually on Friday evening. My dad cooks them for our family, and they are always delicious.\n\nBest wishes,'),
    story(2, 4, '女孩参加舞蹈排练；随后登台表演；演出结束后老师向她献花。', 'A girl practised dancing with her classmates for many weeks. On the day of the show, they performed beautifully in front of a large audience. At the end, their teacher gave the girl some flowers, and everyone applauded.')],
]

export const KET_PRODUCTIVE_EXAMS = sourceSets.map(([book, test, topic, part6, part7]) => ({
  id: `ket-${book}-test${test}`,
  title: `KET for Schools ${book} · Test ${test}`,
  label: `官方真题 ${book} 第${test}套`,
  year: book === 1 ? '2020' : '2022',
  available: true,
  reading: { parts: [], writing: [part6, part7] },
  speaking: speaking(book, test, topic),
}))
