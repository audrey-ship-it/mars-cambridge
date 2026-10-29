// Cambridge Exam Booster for A2 Key (2020) — Speaking Part 1 个人问答 / Part 2 图片讨论。
// 题目取自《Exam Booster A2.pdf》口语工作页（书 84 / 86 / 89 页 Part 1，书 90 / 92 / 94 页 Part 2 图卡）。
// 注：书内 Part 1 为连词成句 / 提示词 / 补全句练习，已还原为完整问句。
// 注：本书无口语 Answer Key，参考答案（modelAnswer / phrases）均为原创教学示例，不标注官方。
const q = (id, question, chineseHint, modelAnswer, phrases) => ({ id, question, chineseHint, modelAnswer, phrases })

export const KET_SPEAKING_BOOSTER_PART1_TOPICS = [
  { id: 'booster-personal', label: 'Booster · 个人信息', en: 'Personal identification · Exam Booster', questions: [
    q('booster-personal-1', "What's your name?", '说出你的名字', "My name is Li Ming. Everyone calls me Ming.", ['My name is…']),
    q('booster-personal-2', 'How old are you?', '说出你的年龄', 'I am eleven years old. My birthday is in March.', ['I am … years old']),
    q('booster-personal-3', 'Do you work or are you a student?', '说明身份：学生还是上班族', 'I am a student at No. 5 Primary School. I am in Class 3.', ['I am a student at…']),
    q('booster-personal-4', 'Where are you from?', '说出你来自哪里', 'I am from Hangzhou. It is a beautiful city in the east of China.', ['I am from…']),
    q('booster-personal-5', 'Who is your English teacher?', '说出你的英语老师', 'My English teacher is Miss Gao. She is kind and very helpful.', ['My English teacher is…']),
    q('booster-personal-6', 'When did you start learning English?', '说出你开始学英语的时间', 'I started learning English when I was six, in my first year at school.', ['I started… when I was…']),
    q('booster-personal-7', 'How many English lessons do you have every week?', '说明每周英语课的数量', 'We have four English lessons every week. They are on Monday, Wednesday, Thursday and Friday.', ['We have … lessons every week']),
    q('booster-personal-8', 'How much English homework do you get?', '说明英语作业的多少', 'I get English homework twice a week. It usually takes me about half an hour.', ['… twice a week', 'It takes me…']),
    q('booster-personal-9', 'Please tell me something about an English lesson you enjoyed.', '举一节印象深刻的英语课并说明细节', 'Last week we played a guessing game in English. Everyone laughed a lot, and I learnt many new words.', ['Last week we…', 'I learnt…']),
    q('booster-personal-10', 'What kinds of TV programmes do you like watching?', '说出喜欢的电视节目类型', 'I like watching cartoons and animal programmes. They are funny and I learn new things.', ['I like watching…', 'because they are…']),
    q('booster-personal-11', 'Where do you watch TV?', '说出平时看电视的地点', 'I usually watch TV in the living room with my family.', ['I usually watch TV…']),
    q('booster-personal-12', 'How often do you watch TV?', '说明看电视的频率', 'I watch TV for about an hour every day, usually after I finish my homework.', ['… every day', 'after I…']),
    q('booster-personal-13', 'Who do you like watching TV with?', '说出喜欢和谁一起看电视', 'I like watching TV with my family. We often laugh together when we watch cartoons.', ['I like watching TV with…']),
    q('booster-personal-14', 'Please tell me something about your favourite TV programme.', '介绍最喜欢的电视节目并举例', 'My favourite programme is a cartoon about a clever panda. I watch it every Friday evening with my little sister.', ['My favourite programme is…', 'I watch it…']),
  ]},
  { id: 'booster-daily', label: 'Booster · 日常生活', en: 'Daily life · Exam Booster', questions: [
    q('booster-daily-1', "What's your name?", '说出你的名字', 'My name is Wang Fang. You can call me Fang.', ['My name is…']),
    q('booster-daily-2', 'Do you work or are you a student?', '说明你的身份', 'I am a student. I go to a school near my home.', ['I am a student']),
    q('booster-daily-3', 'How old are you?', '说出你的年龄', 'I am twelve years old. I will be thirteen next May.', ['I am … years old']),
    q('booster-daily-4', 'Where do you live?', '说出你的居住地', 'I live in Chengdu with my parents and my grandma.', ['I live in… with…']),
    q('booster-daily-5', 'What time do you get up?', '说明起床时间', 'I get up at seven oclock on school days.', ['I get up at…']),
    q('booster-daily-6', 'Where do you usually have lunch?', '说明通常在哪里吃午饭', 'I usually have lunch in the school canteen with my classmates.', ['I usually have lunch…']),
    q('booster-daily-7', 'When do you go to bed?', '说明睡觉时间', 'I go to bed at about half past nine, after I finish my homework.', ['I go to bed at…', 'after I…']),
    q('booster-daily-8', 'Who do you eat dinner with?', '说出和你一起吃晚饭的人', 'I eat dinner with my parents at home. We talk about our day.', ['I eat dinner with…']),
    q('booster-daily-9', 'Please tell me something about what you did yesterday.', '按时间顺序描述昨天做的事', 'Yesterday I had lessons in the morning and played table tennis after school. In the evening I did my homework and read a comic.', ['Yesterday I…', 'In the evening…']),
    q('booster-daily-10', 'Which sports do you enjoy playing?', '说出你喜欢做的运动', 'I enjoy playing football and badminton. Football is my favourite because I play it with my friends.', ['I enjoy playing…', '… is my favourite']),
    q('booster-daily-11', 'Where do you play sport in your town?', '说出城里做运动的地点', 'There is a big sports centre near my home. I play football and swim there.', ['There is…', 'I play… there']),
    q('booster-daily-12', 'Which sports do you enjoy watching?', '说出你喜欢观看的运动', 'I like watching basketball matches on TV. The players are amazing.', ['I like watching…']),
    q('booster-daily-13', 'Who do you play sport with?', '说出一起运动的伙伴', 'I usually play sport with my classmates after school, and at weekends I play with my dad.', ['I usually play… with…']),
    q('booster-daily-14', 'Please tell me something about a sport you would like to learn.', '说出想学的运动并说明原因', 'I would like to learn swimming, because it is good for my body and it is fun in summer.', ['I would like to…', 'because…']),
  ]},
  { id: 'booster-places', label: 'Booster · 地点建筑', en: 'Places and buildings · Exam Booster', questions: [
    q('booster-places-1', "What's your name?", '说出你的名字', 'My name is Chen Jie.', ['My name is…']),
    q('booster-places-2', 'How old are you?', '说出你的年龄', 'I am eleven years old.', ['I am … years old']),
    q('booster-places-3', 'Do you work or are you a student?', '说明你的身份', 'I am a student at Sunshine Primary School.', ['I am a student at…']),
    q('booster-places-4', 'Where do you live?', '说出你的居住地', 'I live in a flat in Nanjing, with my mum, dad and my little brother.', ['I live in… with…']),
    q('booster-places-5', 'Where do you go in your town at the weekends?', '说明周末在城里去的地方', 'At the weekends, I often go to the park or the library with my friends.', ['At the weekends…']),
    q('booster-places-6', 'Is there a swimming pool near your house?', '用 there be 回答附近是否有游泳池', 'Yes, there is a swimming pool in the sports centre near my house. I go there in summer.', ['Yes, there is…']),
    q('booster-places-7', 'How many parks are there in your town?', '用 there be 说明公园数量', 'There are two parks in my town. One is big and has a small lake.', ['There are… in my town']),
    q('booster-places-8', 'Where do you go shopping?', '说明购物地点', 'We usually go shopping at the shopping centre in the town centre. It has lots of shops.', ['We usually go shopping…']),
    q('booster-places-9', 'Please tell me something about your favourite place in your town.', '介绍城里最喜欢的地方并说明原因', 'My favourite place is the city library. It is quiet, and there are thousands of interesting books.', ['My favourite place is…', 'It is…']),
    q('booster-places-10', 'How many bedrooms are there in your home?', '用 there be 说明卧室数量', 'There are three bedrooms in my home. One is for my parents, one is for me, and one is for my brother.', ['There are… bedrooms']),
    q('booster-places-11', 'Who do you live with?', '说出一起居住的家人', 'I live with my parents and my younger brother.', ['I live with…']),
    q('booster-places-12', 'Where in your town is your house?', '说出家在城里的位置', 'My home is in the north of the town, near a bus station and a small supermarket.', ['My home is in…', 'near…']),
    q('booster-places-13', 'What do you like most about your house?', '说出家里你最喜欢的一点', 'I like my bedroom best, because it is bright and I can see the park from the window.', ['I like… best, because…']),
    q('booster-places-14', 'Please tell me something about your living room.', '描述你家的客厅', 'Our living room is quite big. There is a soft sofa, a TV and some green plants, and we watch films there at weekends.', ['There is…', 'We watch… there']),
  ]},
]

export const KET_SPEAKING_BOOSTER_SETS = [
  {
    exam: {
      id: 'booster-1',
      label: 'Exam Booster · Test 1',
      speaking: {
        parts: [
          {
            part: 2,
            title: 'Part 2 · 图片讨论',
            duration: '5–6 分钟',
            description: '和同伴围绕五种业余活动表达喜好并说明理由。',
            topics: [
              {
                id: 'booster-hobbies',
                theme: 'Free time activities',
                themeZh: '业余活动',
                imageSrc: '/images/ket/booster/speaking1.png',
                cardPrompts: [
                  'Do you like these different free time activities? Say why or why not.',
                  'Picture 1: A girl reading a book in a big armchair. Do you like it? Say why or why not.',
                  'Picture 2: Friends having a picnic in the park. Do you like it? Say why or why not.',
                  'Picture 3: A man doing some gardening. Do you like it? Say why or why not.',
                  'Picture 4: Two people cooking together in the kitchen. Do you like it? Say why or why not.',
                  'Picture 5: People watching a show at the theatre. Do you like it? Say why or why not.',
                ],
                modelAnswer: 'Yes, I like most of these free time activities. Reading a book in a big armchair is very relaxing, and I do it every evening. Having a picnic in the park is fun too, because I can play games with my friends on the grass. I am not very interested in gardening, because I do not like getting my hands dirty. Cooking with my mum at the weekend makes me happy, and we often make noodles together. Watching a show at the theatre is exciting, but tickets are quite expensive, so I only go sometimes.',
                phrases: ['… is very relaxing', 'I am not very interested in…', '… makes me happy', '… is exciting, but…'],
              },
            ],
          },
        ],
      },
    },
    book: 'booster',
    test: 1,
  },
  {
    exam: {
      id: 'booster-2',
      label: 'Exam Booster · Test 2',
      speaking: {
        parts: [
          {
            part: 2,
            title: 'Part 2 · 图片讨论',
            duration: '5–6 分钟',
            description: '和同伴围绕五种水上运动表达喜好并说明理由。',
            topics: [
              {
                id: 'booster-watersports',
                theme: 'Water sports',
                themeZh: '水上运动',
                imageSrc: '/images/ket/booster/speaking2.png',
                cardPrompts: [
                  'Do you like these different water sports? Say why or why not.',
                  'Picture 1: A person diving underwater with fish and coral. Do you like it? Say why or why not.',
                  'Picture 2: People swimming in a swimming pool. Do you like it? Say why or why not.',
                  'Picture 3: A boy surfing on a wave. Do you like it? Say why or why not.',
                  'Picture 4: A family sailing a boat on the sea. Do you like it? Say why or why not.',
                  'Picture 5: A man windsurfing on the water. Do you like it? Say why or why not.',
                ],
                modelAnswer: 'Yes, I like most of these water sports. Diving looks amazing, because you can see fish and colourful coral under the sea. Swimming in a pool is my favourite, and I go with my friends every Saturday. Surfing is exciting, but the waves look difficult, so I have never tried it. Sailing looks relaxing, and I would love to go on a boat with my family. Windsurfing looks too hard for me, because you need strong arms and good balance.',
                phrases: ['… looks amazing, because…', '… is my favourite', '… is exciting, but…', 'I would love to…'],
              },
            ],
          },
        ],
      },
    },
    book: 'booster',
    test: 2,
  },
  {
    exam: {
      id: 'booster-3',
      label: 'Exam Booster · Test 3',
      speaking: {
        parts: [
          {
            part: 2,
            title: 'Part 2 · 图片讨论',
            duration: '5–6 分钟',
            description: '和同伴围绕五种度假方式表达喜好并说明理由。',
            topics: [
              {
                id: 'booster-holidays',
                theme: 'Holidays',
                themeZh: '假期度假',
                imageSrc: '/images/ket/booster/speaking3.png',
                cardPrompts: [
                  'Do you like these different holidays? Say why or why not.',
                  'Picture 1: A tourist taking photos in a city street. Do you like it? Say why or why not.',
                  'Picture 2: A family camping in the mountains. Do you like it? Say why or why not.',
                  'Picture 3: People walking up a mountain trail. Do you like it? Say why or why not.',
                  'Picture 4: A girl relaxing beside a swimming pool. Do you like it? Say why or why not.',
                  'Picture 5: Tourists visiting some old historic buildings. Do you like it? Say why or why not.',
                ],
                modelAnswer: 'Yes, I like all of these different holidays. Visiting a city is my favourite, because I love taking photos of famous streets and buildings. Camping in the mountains sounds fun, and we could cook dinner outside the tent. Walking up a mountain is hard work, but the view from the top is wonderful. Relaxing beside a swimming pool is perfect on a hot day, and I always feel happy there. Visiting old historic buildings is interesting too, because I can learn about the past.',
                phrases: ['… is my favourite, because…', '… sounds fun', '… is hard work, but…', 'I can learn about…'],
              },
            ],
          },
        ],
      },
    },
    book: 'booster',
    test: 3,
  },
]
