const q = (id, question, chineseHint, modelAnswer, phrases) => ({ id, question, chineseHint, modelAnswer, phrases })

export const KET_SPEAKING_PART1_TOPICS = [
  { id: 'personal', label: '个人信息', en: 'Personal information', questions: [
    q('personal-1', "What's your full name, and can you spell it?", '说出全名并拼写名字', "My full name is Alex Wang. Alex is spelt A-L-E-X, and Wang is spelt W-A-N-G.", ['My full name is…', 'It is spelt…']),
    q('personal-2', 'Where are you from, and where do you live?', '介绍来自哪里和目前的居住地', 'I am from China and I live in Shenzhen with my family. My home is near my school, so it is very convenient.', ['I am from…', 'I live in… with…']),
    q('personal-3', 'Please tell me something about yourself.', '介绍年龄、居住地和自己的特点', "I'm twelve years old and I live in a busy city. I am friendly and active, and I enjoy learning English and playing basketball after school.", ["I'm … years old", 'I enjoy…']),
  ]},
  { id: 'family', label: '家人朋友', en: 'Family and friends', questions: [
    q('family-1', 'How many people are there in your family?', '介绍家庭成员', 'There are four people in my family: my parents, my younger sister and me. We usually have dinner together every evening.', ['There are… people', 'including…']),
    q('family-2', 'Who is your best friend, and why do you like them?', '介绍朋友并说明原因', 'My best friend is Leo. I like him because he is kind and funny. We often play football and do our homework together.', ['My best friend is…', 'I like… because…']),
    q('family-3', 'Tell me something about what you do with your family.', '说明与家人一起进行的活动', 'At weekends, I usually go shopping or visit a park with my family. Sometimes we cook a special meal and watch a film at home.', ['At weekends…', 'Sometimes we…']),
  ]},
  { id: 'school', label: '校园生活', en: 'School life', questions: [
    q('school-1', 'What is your favourite subject, and why?', '说明最喜欢的科目及原因', 'My favourite subject is English because it is useful and interesting. I enjoy speaking with my classmates and learning new words.', ['My favourite subject is…', 'because it is…']),
    q('school-2', 'How do you usually get to school?', '说明上学方式和所需时间', 'I usually walk to school with two friends. It takes about fifteen minutes, and we talk about our lessons on the way.', ['I usually go by…', 'It takes…']),
    q('school-3', 'Tell me something about a good day at school.', '描述一次愉快的校园经历', 'Last Friday was a good day because we did a science experiment and played basketball after class. My team won, so I felt very happy.', ['Last Friday…', 'I felt… because…']),
  ]},
  { id: 'hobbies', label: '兴趣爱好', en: 'Hobbies', questions: [
    q('hobbies-1', 'What do you enjoy doing in your free time?', '介绍业余活动', 'I enjoy drawing and listening to music in my free time. Drawing helps me relax, and music makes me feel cheerful.', ['I enjoy… + -ing', 'It helps me…']),
    q('hobbies-2', 'Do you prefer indoor or outdoor activities?', '作出选择并说明原因', 'I prefer outdoor activities because I like fresh air and exercise. I often cycle or play badminton with my friends.', ['I prefer… because…', 'I often…']),
    q('hobbies-3', 'Tell me something about a hobby you would like to try.', '介绍想尝试的爱好', 'I would like to try photography because I enjoy visiting new places. I want to learn how to take beautiful pictures of people and nature.', ['I would like to try…', 'I want to learn…']),
  ]},
  { id: 'travel', label: '假期旅行', en: 'Holidays and travel', questions: [
    q('travel-1', 'Where do you usually go on holiday?', '说明度假地点和同行者', 'I usually go to the seaside with my family in summer. We swim, walk along the beach and eat fresh seafood.', ['I usually go to…', 'We…']),
    q('travel-2', 'Do you prefer beach holidays or city holidays?', '比较两种假期并说明选择', 'I prefer beach holidays because they are more relaxing than city holidays. I love swimming and spending time outdoors.', ['I prefer…', 'more… than…']),
    q('travel-3', 'Tell me about an interesting trip you had.', '描述一次旅行经历', 'Last year, I visited Beijing with my parents. We travelled by train, visited the Great Wall and took lots of photographs.', ['Last year…', 'We travelled by…']),
  ]},
  { id: 'food', label: '食物', en: 'Food', questions: [
    q('food-1', 'What is your favourite meal?', '介绍喜欢的食物及原因', 'My favourite meal is chicken noodles because they are warm and delicious. My dad usually cooks them for us on Friday evenings.', ['My favourite meal is…', 'because…']),
    q('food-2', 'Do you prefer eating at home or in a restaurant?', '作出选择并比较', 'I prefer eating at home because it is healthier and cheaper. I can also talk to my family while we eat.', ['I prefer… because…', 'healthier and cheaper']),
    q('food-3', 'Tell me something about a meal you enjoyed.', '描述一次喜欢的用餐经历', "Last Sunday, my family had a barbecue in the garden. We ate chicken, vegetables and fruit, and everyone had a wonderful time.", ['Last Sunday…', 'We ate…']),
  ]},
  { id: 'transport', label: '交通工具', en: 'Transport', questions: [
    q('transport-1', 'How do you usually travel around your town?', '说明日常交通方式', 'I usually travel by bus because it is cheap and convenient. When the weather is good, I sometimes ride my bicycle.', ['I travel by…', 'because it is…']),
    q('transport-2', 'Which is better, travelling by bus or by car?', '使用比较级作答', 'I think travelling by bus is better because it is cheaper and better for the environment, although a car is more comfortable.', ['I think… is better', 'cheaper than…']),
    q('transport-3', 'Tell me about a journey you enjoyed.', '描述一次愉快的旅程', 'Last summer, I took a train to the mountains with my family. I enjoyed looking at the beautiful countryside through the window.', ['Last summer…', 'I enjoyed…']),
  ]},
  { id: 'weather', label: '天气季节', en: 'Weather and seasons', questions: [
    q('weather-1', 'What is your favourite season?', '说明喜欢的季节及原因', 'My favourite season is spring because the weather is warm but not too hot. I enjoy seeing flowers and walking in parks.', ['My favourite season is…', 'The weather is…']),
    q('weather-2', 'What do you like doing on rainy days?', '介绍雨天活动', 'On rainy days, I like reading books or watching films at home. Sometimes I play board games with my family.', ['On rainy days…', 'Sometimes I…']),
    q('weather-3', 'Tell me about a day when the weather was very good.', '描述天气很好的一天', 'Last Saturday was warm and sunny, so my friends and I had a picnic beside the lake. We played games and took photos.', ['It was…', 'so we…']),
  ]},
  { id: 'clothes', label: '衣物用品', en: 'Clothes and belongings', questions: [
    q('clothes-1', 'What clothes do you usually wear at weekends?', '介绍周末穿着', 'At weekends, I usually wear a T-shirt, jeans and trainers because they are comfortable and easy to move in.', ['I usually wear…', 'because they are…']),
    q('clothes-2', 'Do you enjoy shopping for clothes?', '表达喜好并补充原因', 'Yes, I do. I enjoy choosing new clothes with my mum because she gives me helpful advice about colours and sizes.', ['Yes, I do', 'I enjoy… because…']),
    q('clothes-3', 'Tell me about something useful you always carry.', '描述随身携带的物品', 'I always carry a small water bottle in my school bag. It is useful because I can have a drink whenever I feel thirsty.', ['I always carry…', 'It is useful because…']),
  ]},
  { id: 'pets', label: '宠物', en: 'Pets', questions: [
    q('pets-1', 'Have you got a pet?', '介绍宠物或想养的宠物', 'Yes, I have a small dog called Max. He is friendly and playful, and I take him for a walk every evening.', ['I have… called…', 'I take him/her…']),
    q('pets-2', 'Which animals make good pets?', '选择适合的宠物并解释', 'I think dogs make good pets because they are friendly and active. They can also become wonderful friends for children.', ['I think… make good pets', 'because they are…']),
    q('pets-3', 'Tell me something about an animal you like.', '描述喜欢的动物', 'I really like pandas because they look gentle and interesting. I saw two pandas at a zoo last year and took many photos.', ['I really like…', 'Last year…']),
  ]},
  { id: 'gifts', label: '礼物', en: 'Gifts', questions: [
    q('gifts-1', 'What presents do you like receiving?', '介绍喜欢收到的礼物', 'I like receiving books because I love reading adventure stories. Books are useful, interesting and easy to share with friends.', ['I like receiving…', 'because…']),
    q('gifts-2', 'Do you prefer giving or receiving presents?', '作出选择并说明原因', 'I prefer giving presents because I enjoy making other people happy. I usually choose something connected to their hobbies.', ['I prefer… because…', 'I usually choose…']),
    q('gifts-3', 'Tell me about a present you gave someone.', '描述送礼经历', 'Last month, I gave my sister a blue bag for her birthday. She loved the colour and used it the next day.', ['Last month…', 'for his/her birthday']),
  ]},
  { id: 'media', label: '电视电影', en: 'Television and films', questions: [
    q('media-1', 'What kind of films do you enjoy?', '介绍喜欢的电影类型', 'I enjoy adventure films because they have exciting stories and interesting characters. I usually watch them with my friends.', ['I enjoy… films', 'because they…']),
    q('media-2', 'Do you prefer watching films at home or at the cinema?', '比较两种观影方式', 'I prefer watching films at the cinema because the screen is bigger and the sound is better, although watching at home is cheaper.', ['I prefer…', 'bigger and better']),
    q('media-3', 'Tell me about a programme you watched recently.', '描述最近看过的节目', 'Yesterday, I watched a wildlife programme about oceans. I learnt about dolphins and sea turtles, and the photography was beautiful.', ['Yesterday, I watched…', 'I learnt about…']),
  ]},
  { id: 'languages', label: '语言', en: 'Languages', questions: [
    q('languages-1', 'Why are you learning English?', '说明学习英语的原因', 'I am learning English because I want to travel and speak to people from different countries. It is also useful for my studies.', ['I am learning… because…', 'It is useful for…']),
    q('languages-2', 'How do you practise English?', '介绍英语学习方法', 'I practise English by reading short stories, watching videos and speaking with my classmates. I also learn a few new words every day.', ['I practise by…', 'every day']),
    q('languages-3', 'Tell me about an English lesson you enjoyed.', '描述一堂喜欢的英语课', 'Last week, our class played a word game in English. We worked in teams, laughed a lot and learnt several useful expressions.', ['Last week…', 'We worked in…']),
  ]},
  { id: 'reading', label: '阅读', en: 'Reading', questions: [
    q('reading-1', 'What do you like reading?', '介绍喜欢的阅读材料', 'I like reading comics and adventure stories because they are exciting and easy to follow. I often read before I go to bed.', ['I like reading…', 'I often read…']),
    q('reading-2', 'Do you prefer printed books or e-books?', '比较纸质书和电子书', 'I prefer printed books because they are easier on my eyes. However, e-books are useful when I travel because they are lighter.', ['I prefer… because…', 'However…']),
    q('reading-3', 'Tell me about a book you enjoyed.', '描述一本喜欢的书', 'I recently read a story about a boy who travelled around the world. I liked it because the journey was exciting and funny.', ['I recently read…', 'I liked it because…']),
  ]},
  { id: 'internet', label: '互联网', en: 'The internet', questions: [
    q('internet-1', 'What do you use the internet for?', '介绍网络用途', 'I use the internet for schoolwork, music and messages. It helps me find information quickly and keep in touch with my friends.', ['I use the internet for…', 'It helps me…']),
    q('internet-2', 'How often do you go online?', '说明上网频率和时间', 'I go online every day, usually after I finish my homework. I try not to spend more than an hour on entertainment.', ['I go online…', 'after I…']),
    q('internet-3', 'Tell me about a useful website or app.', '介绍一个有用的网站或应用', 'A useful app for me is an online dictionary. I use it to check new English words, hear their pronunciation and see example sentences.', ['A useful app is…', 'I use it to…']),
  ]},
]
