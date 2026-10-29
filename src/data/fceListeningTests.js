// FCE Listening — 8 mock tests from 《FCE 8套全真模拟试题》
// Source: FCE 8套全真模拟试题.pdf (208 pages, scanned)
// Audio: D:\workspace_sunny\FCE\...\音频\Test N - Part M.mp3 (Part 1 split per question)
// Copied to /audio/fce-mock/test-N/part-X[-qY].mp3
//
// FCE B2 First for Schools Listening paper structure (4 parts, 30 questions):
//   Part 1: 8 MCQ (A/B/C) — 8 short unrelated situations, each with its own audio
//   Part 2: 10 sentence-completion items — write a word/short phrase
//   Part 3: 5 multiple-matching items — 5 speakers matched to 8 lettered options (A–H, 3 extra)
//   Part 4: 7 MCQ (A/B/C) — extended interview/monologue
//
// Item shapes (consumed by FCE listening UI):
//   Part 1 (type: 'mcq_situation'): { scenario, q, opts: [A,B,C], answer: 0|1|2, audio, explanation }
//   Part 2 (type: 'blanks'):         { q (stem with ____ blank), answer: [accepted...], show, explanation }
//   Part 3 (type: 'matching'):       part-level options [{label:'A', text}...], items: [{ speaker, answer: 'A'..'H', explanation }]
//   Part 4 (type: 'mcq'):            { q, opts: [A,B,C], answer: 0|1|2, explanation }
//
// Answers were transcribed verbatim from the Answer Key pages (PDF 162–170)
// and cross-checked against the transcripts on the same pages.

export const fceListeningTests = [
  {
    "meta": {
      "id": "fce-mock-1-listening",
      "title": "FCE 全真模拟试题 1 · Listening",
      "level": "FCE",
      "collection": "FCE 全真模拟试题（8套）",
      "book": "FCE 全真模拟试题（8套）",
      "paper": "Listening",
      "pages": "13–15",
      "source": "FCE 8套全真模拟试题.pdf",
      "answerSource": "Answer Key and Transcripts（书 157-161 页 / PDF p163-p167，官方）",
      "verified": true
    },
    "parts": {
      "1": {
        "title": "Part 1 · 情境选择",
        "instruction": "听 8 段不同情境的短录音，每题从 A/B/C 中选出最佳答案。每段录音播放两次。",
        "type": "mcq_situation",
        "items": [
          {
            "scenario": "You hear an actress describe the beginning of her career.",
            "q": "Why does the actress think she is now successful?",
            "opts": [
              "She applied for every acting job she could.",
              "She made friends with other actors.",
              "She had good fortune."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-1/part-1-q1.mp3",
            "explanation": "她说\"It's just luck I think, right place, right time\"，即归功于运气，选 C。",
            "transcript": "It was like something from a film – a young girl moves from a small town to the glittering big city to try and make it as an actress. But, in reality, that was my life and, of course once I got to LA, I had to do all the menial jobs like waitressing, as most actors do, until I got my 'big break'. I got a small part in a local advert and I used that experience to get a small part in a low-budget film and it just continued from there really. It's just luck I think, right place, right time. I still can't believe it."
          },
          {
            "scenario": "You hear two friends discussing TV programmes.",
            "q": "What do they disagree about?",
            "opts": [
              "the importance of prizes",
              "the quality of independent films",
              "what to watch on TV"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-1/part-1-q2.mp3",
            "explanation": "男生想换台看独立电影，女生坚持要看 Maldon Castle，两人在争该看什么节目，选 C。女生说\"Can you change channels please, Dan? Maldon Castle's just starting.\"，男生则说\"This is an independent film, I bet you've never heard of it, but it's fantastic.\"",
            "transcript": "F: Can you change channels please, Dan? Maldon Castle's just starting.\n\nM: Oh no, not that rubbish! How can you watch it? It's totally unbelievable.\n\nF: What do you mean? It's won loads of awards here and in America. It may not be very realistic but it's great – a sort of clever soap opera.\n\nM: I don't care how many awards it's won. This is an independent film, I bet you've never heard of it, but it's fantastic.\n\nF: I know that, but I still want to watch my programme for a change."
          },
          {
            "scenario": "You hear a writer talking about his new book.",
            "q": "Why did he decide to write it?",
            "opts": [
              "He thought similar books were outdated.",
              "He saw a gap in the market.",
              "He was asked to by his students."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-1/part-1-q3.mp3",
            "explanation": "他说\"I found no such books on how to pass exams\"，发现自己领域里没有这类书，即发现市场空白，选 B。",
            "transcript": "Interviewer: So, could you tell us why you decided to write this book now?\n\nWriter: Well, I've been teaching medical students for years, as well as working as a doctor and, of course, in this job we have to take many exams. I myself have read books which help you to remember things, find better ways to study, etc. but I found no such books on how to pass exams. I feel I've become an expert in passing exams and I was often asked for help from fellow doctors, so I've written a book with tips and techniques, and the most effective ways to revise."
          },
          {
            "scenario": "You hear two students organising a charity event.",
            "q": "What will people pay for at the event?",
            "opts": [
              "food and drinks",
              "the clothes",
              "the live music"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-1/part-1-q4.mp3",
            "explanation": "Anna 说\"the rest of the clothes ready for buyers to choose\"，即衣服卖给买家， drinks 是免费（free drinks），选 B。",
            "transcript": "Anna: Hey Laura, do you think everything's ready for the show?\n\nLaura: Yeah, everyone's dressed in the first outfits, and then we've got the rest of the clothes ready for buyers to choose.\n\nAnna: Great, we're all set with the free drinks, too. I hope they like it. I feel really nervous now the time's come.\n\nLaura: Don't worry – who doesn't love this kind of event?\n\nAnna: I guess it's just a matter of taste, that's all. Some people may prefer live music to all this."
          },
          {
            "scenario": "You hear a couple discussing their holiday plans with a travel agent.",
            "q": "What reason do they give for their choice?",
            "opts": [
              "They've never been there before.",
              "Other cities are easily accessible.",
              "They don't want to drive on holiday."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-1/part-1-q5.mp3",
            "explanation": "女生说\"I quite fancy taking a break from that\"（指开车），男生同意\"it would be nice to enjoy the buzz of city life\"，即不想自己开车，选 C。",
            "transcript": "Travel agent: So, with your budget and requirements, there are two places that I could recommend. Firstly, the Amalfi Coast in Italy is just beautiful. There's plenty to do, beaches, lovely restaurants, etc. Plus, if you want to hire a car, you can see a lot of other places in the region, too.\n\nM: That sounds good. All that scenery sounds like our cup of tea. What's the other option, though?\n\nTravel agent: Well, there's also Porto, in Portugal. Again, very lovely and with lots to do but this time you'd be in a large city as well, so you wouldn't have to drive anywhere unless you wanted to.\n\nF: Well, to be honest, I quite fancy taking a break from that, and using public transport wouldn't be so bad, would it?! What do you think?\n\nM: Yes, it would be nice to enjoy the buzz of city life."
          },
          {
            "scenario": "You hear a man talking about moving to another country.",
            "q": "How does he feel about it?",
            "opts": [
              "He misses England.",
              "He thinks it's getting better.",
              "He finds it easy to make friends."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-1/part-1-q6.mp3",
            "explanation": "他说\"recently I've finally been feeling a bit more positive about things\"，即感觉越来越好，选 B。",
            "transcript": "Well, I haven't been living in France for very long – about six months in total, so it's all a bit overwhelming still, although recently I've finally been feeling a bit more positive about things. At the beginning I didn't know a soul here and that wasn't easy. That's when I decided I had to make an effort with my French and also find some hobbies outside of work. Since then I've met loads of people at the gym, and even French class, where there are other foreigners who feel the same as me. It's very different to England but that's not always a bad thing!"
          },
          {
            "scenario": "You hear a businesswoman giving advice.",
            "q": "What does she think the most important thing is?",
            "opts": [
              "to study business at college",
              "to work in all areas of the business",
              "to believe in your abilities"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-1/part-1-q7.mp3",
            "explanation": "她说\"what made the difference for me is that I never listened to NO\"，强调自信与坚持，选 C。",
            "transcript": "Everyone always asks me for advice about starting their own business: which college should I go to? what's the first step? But I didn't go to college myself. I started working in a shop as an assistant and just learnt the ropes that way. I worked hard and what made the difference for me is that I never listened to NO – if anyone said I couldn't do something, I'd try my best to show I could do it. Studying is helpful, of course, but it doesn't always have to be that route."
          },
          {
            "scenario": "You hear a man talking about a local event.",
            "q": "Why is he talking about the art exhibition?",
            "opts": [
              "He is reviewing the exhibition.",
              "He has a painting in the exhibition.",
              "He has helped it become a permanent exhibition."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-1/part-1-q8.mp3",
            "explanation": "他在详细描述展览的内容、画作与背景信息，是在做评论性介绍，选 A。原文说\"The gallery had lots of paintings from many Scottish artists and detailed notes were given describing the background of the paintings and the artists themselves.\"",
            "transcript": "The Gladstone exhibition started last week at the Inverness Art Gallery, and it was huge success and rightly so. The gallery had lots of paintings from many Scottish artists and detailed notes were given describing the background of the paintings and the artists themselves. Some of the work was available to buy and the staff at the gallery were a great help with any questions. There's also a café there if you'd like to go for a relaxing afternoon of art and a cup of tea! It's on for another week and if you like modern art, I'd strongly recommend it."
          }
        ]
      },
      "2": {
        "title": "Part 2 · 句子填空",
        "instruction": "听环境记者 Dylan Murray 谈论他参观加拉帕戈斯象龟的旅行。在 9-18 题的句子空格中填入一个词或短语。",
        "type": "blanks",
        "audio": "/audio/fce-mock/test-1/part-2.mp3",
        "transcript": "Our travels took us at last to the fascinating Galapagos islands, almost 1,000 kilometres from the coast of Ecuador. While on the mainland in Ecuador, we'd heard so much about the natural beauty and the species that can be found there. We flew to the island of Isabela, where the Wolf volcano lies and began our search for their most famous inhabitants – the Galapagos tortoises.\n\nI'd always found the tortoises fascinating, and a few years ago I was lucky enough to see the giant tortoises in the Indian Ocean and they were incredible, so I couldn't wait to see these ones. Even the islands themselves take the name from the tortoises, which shows how important they are. They were given the name by Spanish explorers who decided that the tortoises' shells looked like saddles, or Galapagos, in Old Spanish. Unfortunately, the effect of some early visitors was dreadful and continues to cause problems for the species. The buccaneers discovered that they could use the meat for long journeys and also the oil could be used or sold. This resulted in the loss of some 100,000–200,000 tortoises. These days only between 20,000 and 25,000 remain.\n\nConservationists have tried to help stop the threat to the species but even tourists today, who come to see the wildlife on the islands, accidentally cause damage to the environment. The GCT – the Galapagos Conservation Trust – has developed different schemes to protect the islands and its animal inhabitants. One such scheme promotes responsible tourism, to make sure that tourism does not damage the environment.\n\nThe tortoises are believed to have been on the island for around 2–3 million years after having drifted there from the South American coastline. It would be a great tragedy to lose them after having survived for so long in this wonderful place. Part of the reason the islands became so beautiful with lots of flowers, plants and animals is their distance and isolation from the mainland, so they were able to grow without humans damaging them.\n\nThe most famous tortoise was Lonesome George, so called due to him being the only member of his particular species left. Although conservationists tried to find a mate for him, attempts for him to breed and have babies were unsuccessful. He eventually died aged 100, which is normal for the tortoises there. Perhaps the reason for their long lives can be found in their lifestyle. Because of the warm temperatures, the tortoises rest for about 16 hours a day, and the fact that they don't need to hunt for food as they are herbivores – eating plants, grasses and fruit – they do not need to be active. In addition, they can survive up to a year without food or water. Interestingly, they change their routines depending on the time of year; in the cool season they are active at midday, sleeping or resting for the rest of the day, but in the warm season it is too hot for them to move around at midday so they rest in the shade or swim half-submerged in muddy water.\n\nWhen we saw the tortoises up close, it was fantastic – you can't appreciate the size of the adults until you see them in real life. They are beautiful, fascinating creatures who deserve long, undisturbed lives and anyone wanting to visit them in the natural environment should respect their environment and do anything they can to teach others of the importance of looking after these special creatures.",
        "items": [
          {
            "q": "The writer has already seen tortoises in the (9) ____ which are similar to the ones in the Galapagos islands.",
            "answer": [
              "Indian Ocean"
            ],
            "show": "Indian Ocean",
            "explanation": "原文提到他在 Indian Ocean 见过类似的象龟。原文说\"a few years ago I was lucky enough to see the giant tortoises in the Indian Ocean and they were incredible\"。"
          },
          {
            "q": "The name 'Galapagos' in (10) ____ refers to the shape of the tortoises' shells.",
            "answer": [
              "Old Spanish"
            ],
            "show": "Old Spanish",
            "explanation": "原文说\"They were given the name by Spanish explorers who decided that the tortoises' shells looked like saddles, or Galapagos, in Old Spanish\"，即岛名来自古西班牙语，意为\"鞍\"（saddle），指龟壳鞍形。"
          },
          {
            "q": "The tortoises were often killed for their meat and (11) ____ by early pirates and explorers to the islands.",
            "answer": [
              "oil"
            ],
            "show": "oil",
            "explanation": "早期海盗和探险者除了取肉，还用象龟熬油（oil）。原文说\"The buccaneers discovered that they could use the meat for long journeys and also the oil could be used or sold.\""
          },
          {
            "q": "Accidentally, tourists can (12) ____ to the wildlife they come to see up-close.",
            "answer": [
              "cause damage"
            ],
            "show": "cause damage",
            "explanation": "游客无意中会对野生生物造成伤害（cause damage）。原文说\"even tourists today, who come to see the wildlife on the islands, accidentally cause damage to the environment\"。"
          },
          {
            "q": "It is believed that the tortoises were originally from the South American (13) ____ and they later arrived at the islands.",
            "answer": [
              "coastline",
              "coast"
            ],
            "show": "coastline / coast",
            "explanation": "象龟原本来自南美大陆海岸（coastline），后来才漂流到岛上。原文说\"believed to have been on the island for around 2–3 million years after having drifted there from the South American coastline\"。"
          },
          {
            "q": "The writer thinks that the (14) ____ and isolation of the islands has aided in the development of the ecosystem.",
            "answer": [
              "distance"
            ],
            "show": "distance",
            "explanation": "岛屿距离大陆遥远（distance）加上与世隔绝，促成了独特生态。原文说\"Part of the reason the islands became so beautiful with lots of flowers, plants and animals is their distance and isolation from the mainland\"。"
          },
          {
            "q": "Lonesome George was the sole (15) ____ of his particular group of tortoises left in existence.",
            "answer": [
              "member"
            ],
            "show": "member",
            "explanation": "Lonesome George 是其亚种中唯一幸存的成员（member）。原文说\"so called due to him being the only member of his particular species left\"。"
          },
          {
            "q": "The typical diet of the tortoise is made of plants, (16) ____ and fruit.",
            "answer": [
              "grasses"
            ],
            "show": "grasses",
            "explanation": "象龟食物由植物、草（grasses）和水果构成。原文说\"as they are herbivores – eating plants, grasses and fruit\"。"
          },
          {
            "q": "Tortoises in the Galapagos islands can survive up to (17) ____ without food or water.",
            "answer": [
              "a year",
              "one year"
            ],
            "show": "a / one year",
            "explanation": "象龟可在无水无食情况下存活长达一年（a year）。原文说\"In addition, they can survive up to a year without food or water.\""
          },
          {
            "q": "In the (18) ____ season tortoises tend to be less active at midday.",
            "answer": [
              "warm"
            ],
            "show": "warm",
            "explanation": "温暖季节（warm season）中午太热，象龟活动减少。原文说\"but in the warm season it is too hot for them to move around at midday so they rest in the shade or swim half-submerged in muddy water\"。"
          }
        ]
      },
      "3": {
        "title": "Part 3 · 多文本匹配",
        "instruction": "听 5 段关于骑车的短录音，将每位说话者匹配到 A-H 中的相应陈述。3 个选项不会被使用。",
        "type": "matching",
        "audio": "/audio/fce-mock/test-1/part-3.mp3",
        "options": [
          {
            "label": "A",
            "text": "Cycling to work saves time for other things."
          },
          {
            "label": "B",
            "text": "I feel strange if I don't exercise."
          },
          {
            "label": "C",
            "text": "I used to cycle competitively."
          },
          {
            "label": "D",
            "text": "I don't think bicycles are comfortable."
          },
          {
            "label": "E",
            "text": "I have had bike accidents before."
          },
          {
            "label": "F",
            "text": "I am worried about road safety."
          },
          {
            "label": "G",
            "text": "Bikes are old-fashioned."
          },
          {
            "label": "H",
            "text": "Cycling is impractical for me now."
          }
        ],
        "items": [
          {
            "speaker": "Speaker 1",
            "answer": "F",
            "explanation": "Speaker 1 谈到骑车环境与天气的危险性，对应 F（担心道路安全）。原话说\"Apart from the weather, for me the most important thing is how dangerous it can be.\"",
            "transcript": "Cycling's fantastic exercise and of course it's great for the environment too, but you have to admit that there are drawbacks as well. Apart from the weather, for me the most important thing is how dangerous it can be. OK, we have to wear helmets, at least the law says we have to and we should, but of course if the cars aren't careful of cyclists and they're driving too fast, it's still pretty risky. I used to cycle a lot when I was younger but then there was probably less traffic so, I guess I didn't think of the dangers."
          },
          {
            "speaker": "Speaker 2",
            "answer": "B",
            "explanation": "Speaker 2 把骑车当作日常运动，不运动会感到不适，对应 B。原话说\"I don't quite feel right if I miss a day.\"",
            "transcript": "Yeah, I'd say that I'm a pretty regular cyclist. I'm very keen on all sorts of sport to be honest, but cycling combines transport and sport, so it's perfect! I play football at the weekends and try to go to the gym too when I can. I've always loved sport and honestly, I don't quite feel right if I miss a day. If I'm ill, or just too busy at work to cycle, then I feel a bit down and tired. I think exercising, especially in the fresh air like cycling or football, gives you energy and it becomes an addiction."
          },
          {
            "speaker": "Speaker 3",
            "answer": "H",
            "explanation": "Speaker 3 提到有了孩子后骑车不再实际，对应 H。原话说\"Anyway, these days it's out of the question – how can anybody with three young children to take to school use a bicycle?\"",
            "transcript": "Well, I used to cycle a bit. We'd put the bikes in the car and go for a long ride as long as the weather was okay. We live in a nice area for cycling, actually. It's flat, which is great for a novice like me I suppose! Anyway, these days it's out of the question – how can anybody with three young children to take to school use a bicycle? I'm afraid it just wouldn't work, so I use my car all the time. It's much more useful for things like food shopping, too. How would you balance loads of shopping bags on a bike?"
          },
          {
            "speaker": "Speaker 4",
            "answer": "D",
            "explanation": "Speaker 4 觉得自行车不舒服，宁可开车，对应 D。原话说\"No, give me an air-conditioned car anytime over a freezing cold bike!\"",
            "transcript": "Truthfully, it's just not my thing. I really enjoy driving – it's faster, not to mention warmer, too! Also, as an enthusiastic motorist, I've seen the risks cyclists take in traffic and I know how hard it can be to see them sometimes. No, give me an air-conditioned car anytime over a freezing cold bike! Perhaps it's OK if you live somewhere warm, but not in England with all the rain we get here – it'd be horrible. I guess it's good exercise but I drive to the gym and do my workout there!"
          },
          {
            "speaker": "Speaker 5",
            "answer": "A",
            "explanation": "Speaker 5 是律师，骑车上班等于顺便运动，节省时间，对应 A。原话说\"I started cycling to work. That way I don't have to worry about finding time for the gym.\"",
            "transcript": "I've got a really stressful job. I work in the city as a lawyer for a large company and I can be working 12 – 14 hours a day sometimes, so how would I have time for the gym or a team sport after such long days? But I do know it's important to keep fit. I really believe mental and physical power go together so a few years ago I had an idea – I started cycling to work. That way I don't have to worry about finding time for the gym. I've done my exercise already."
          }
        ]
      },
      "4": {
        "title": "Part 4 · 访谈选择",
        "instruction": "听一段电台访谈，受访者是 16 岁的 Lizzie Smith，她在镇上发起了一个社区改造项目。在 24-30 题中选择最佳答案 A/B/C。",
        "type": "mcq",
        "audio": "/audio/fce-mock/test-1/part-4.mp3",
        "transcript": "I = Interviewer L = Lizzie\n\nI: Joining us today in the studio is Lizzie Smith who, at only sixteen years old, has created a project in which people work together to improve their neighbourhoods. What gave you the idea to start this?\n\nL: Well, I lived in Bristol all my life and the area I live in is all right, just a bit run-down in some places. I'd always thought how much better the area could look, but no one seemed to do anything about it. So, anyway, I went to France on an exchange with my school and we were staying in this gorgeous little village by the sea and I was talking with my friends one day about how much nicer it looked than my neighbourhood! I guess that got me thinking why it was so nice and why we couldn't do the same.\n\nI: What kind of things did they have to inspire you?\n\nL: The streets are all lined with trees, which is lovely, but the houses have window boxes with flowers and baskets with different plants and flowers in, so it's really pretty. I took loads of photos of the place to show my parents – they're keen gardeners and I knew they'd love it. The roads were really clean, too – no graffiti, or vandalism. It really made a difference. I thought the people that lived there were very lucky. They must feel good seeing that every day.\n\nI: So, what happened when you got back home?\n\nL: I thought about it lots, and of course I knew that I'd need money to make changes, but I just couldn't wait to get started. So, I spoke to my dad and grandad about it and they promised to help me with the gardening part of it but we couldn't do it without proper help. So, they told me that the best thing would be to raise some money. I had a few ideas like a car wash or cake sale, things like that, but I didn't know if it would be enough, so that's when I decided to talk to my teachers at school.\n\nI: Did they give you some money to your project?\n\nL: Not exactly. Actually, it was better than that. Mr Jenkins, the head teacher thought it was such a good idea that he decided to get the whole school involved! I suddenly went from having no help to having nearly 1,000 other students, plus their families helping out. A few of us, students I mean, and a couple of teachers and parents formed a committee to make a plan and think of what we'd do first and how we could make money. Most students live near the school so we knew that it was important to do this area and the school grounds. We started raising money with cake sales, sponsored walks, that kind of thing, and even the local shops gave us things like gardening tools to borrow.\n\nI: So, you were finally able to begin making your dream a reality?\n\nL: Yes. We had the money and we were all ready, so we bought some paint and began to paint over the graffiti and different things in the neighbourhood. It began to look better straight away – it seemed fresh and happy, if you know what I mean. Then the next step was planting trees and flowers, especially near the school and that really made us all even more enthusiastic. So, the next big step was encouraging all the locals to help and improve our streets. We needed to start spreading the news about our project so...\n\nI: What did you do then? Is that when the newspapers discovered the story?\n\nL: It was, yes. I guess someone from the local paper had seen what we'd done to improve the school and one of the reporters phoned the school to ask for information and it was in the paper. Then, the TV news phoned us and they filmed it – they even asked me for an interview. I was sure I'd mess something up. I think my face was really red! Anyway, that really helped because after we were on TV people kept asking about how they could help us, and soon enough the area looked amazing – new paint everywhere, flowers and benches for people to relax on.\n\nI: What are your plans for the future?\n\nL: Well, it seems just like the beginning of a project actually. Other schools and communities asked us for help about how to start their own projects and it seems to have spread all over the country now. The council helped us by giving money and now other councils in England are setting up projects like this. I think students love it for lots of reasons, not just because it helps the area but because it's good experience in working together and feeling proud of what you've done.\n\nI: You should feel really proud – a great achievement, Lizzie.",
        "items": [
          {
            "q": "Why did Lizzie want to improve her area?",
            "opts": [
              "She felt there was possibility for it to be better.",
              "She wanted it to look French.",
              "She was embarrassed living there."
            ],
            "answer": 0,
            "explanation": "她说\"I'd always thought how much better the area could look\"，即觉得有变好的可能，选 A。"
          },
          {
            "q": "Why does Lizzie think it is important to live in an attractive area?",
            "opts": [
              "It could attract more visitors.",
              "It could stop crime and vandalism.",
              "It could positively affect people's feelings."
            ],
            "answer": 2,
            "explanation": "她说\"They must feel good seeing that every day\"，即环境会影响人的情绪，选 C。"
          },
          {
            "q": "What advice did Lizzie's family give to her?",
            "opts": [
              "They explained which flowers and plants would be the best to use.",
              "They told her they needed more help and she should ask others.",
              "They told her exactly how to find money for the project."
            ],
            "answer": 1,
            "explanation": "父亲和爷爷答应帮忙园艺，但说\"we couldn't do it without proper help\"，建议她去找更多帮手，选 B。"
          },
          {
            "q": "Why was it important to start with improving the school and the area around it?",
            "opts": [
              "The majority of the students lived in that area.",
              "The teachers would only help if the school was painted first.",
              "The committee voted for the school to be helped first."
            ],
            "answer": 0,
            "explanation": "从学校开始是因为大多数学生都住在那片区域，选 A。原文说\"Most students live near the school so we knew that it was important to do this area and the school grounds.\""
          },
          {
            "q": "What was the next step after improving the neighbourhood?",
            "opts": [
              "The local businesses wanted their shops painted, too.",
              "They asked a reporter to help them.",
              "They had to find ways to involve the whole community."
            ],
            "answer": 2,
            "explanation": "下一步要让整个社区都参与进来，选 C。原文说\"So, the next big step was encouraging all the locals to help and improve our streets.\""
          },
          {
            "q": "What was Lizzie worried about when she was interviewed?",
            "opts": [
              "if she'd look good on TV",
              "being too nervous to speak",
              "whether people would like the project"
            ],
            "answer": 1,
            "explanation": "她担心自己会紧张得说不出话，选 B。她说\"I was sure I'd mess something up. I think my face was really red!\""
          },
          {
            "q": "What has happened to the project now?",
            "opts": [
              "It has finished and Lizzie is looking for new ideas.",
              "There are similar projects in other towns.",
              "It hasn't got enough money to continue."
            ],
            "answer": 1,
            "explanation": "项目已扩展到其他城镇，出现类似项目，选 B。原文说\"Other schools and communities asked us for help about how to start their own projects and it seems to have spread all over the country now.\""
          }
        ]
      }
    }
  },
  {
    "meta": {
      "id": "fce-mock-2-listening",
      "title": "FCE 全真模拟试题 2 · Listening",
      "level": "FCE",
      "collection": "FCE 全真模拟试题（8套）",
      "book": "FCE 全真模拟试题（8套）",
      "paper": "Listening",
      "pages": "32–34",
      "source": "FCE 8套全真模拟试题.pdf",
      "answerSource": "Answer Key and Transcripts（书 163-167 页 / PDF 169-173，官方）",
      "verified": true
    },
    "parts": {
      "1": {
        "title": "Part 1 · 情境选择",
        "instruction": "听 8 段不同情境的短录音，每题从 A/B/C 中选出最佳答案。每段录音播放两次。",
        "type": "mcq_situation",
        "items": [
          {
            "scenario": "You will hear a film reviewer discussing a film.",
            "q": "What does he think of the actors' performances?",
            "opts": [
              "They give a boring performance.",
              "They are the best part of the film.",
              "They seem confused by the story."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-2/part-1-q1.mp3",
            "explanation": "影评人认为这部影片令人失望：剧本乏味，片长比应有的多出约 40 分钟，两位知名演员也似乎难以理解故事，选 C。原文：\"The script is boring and the film itself was about 40 minutes too long. It is unclear why two talented actors like Tom Michaels and Jennifer Harris would want to be in a film like this, and they seem to struggle with understanding the story as much as the audience.\"",
            "transcript": "The third film from the famous French director Jacques Arnaud returns to familiar themes of teenage vampires. However, it will be a disappointment for fans of the previous two films. The script is boring and the film itself was about 40 minutes too long. It is unclear why two talented actors like Tom Michaels and Jennifer Harris would want to be in a film like this, and they seem to struggle with understanding the story as much as the audience.\nNow listen again."
          },
          {
            "scenario": "You will hear a photographer discussing his work.",
            "q": "What is his favourite part of his career?",
            "opts": [
              "helping charities with his work",
              "travelling around the world",
              "meeting people from other cultures"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-2/part-1-q2.mp3",
            "explanation": "摄影师表示用作品帮助慈善事业是他职业生涯中最有意义的部分，选 A。原文：\"I recently did some work for a charity and that combined everything I love about the job, plus I got to help children, so that's the most rewarding part.\"",
            "transcript": "I've just returned from Chile, where I've been working for a geology magazine, photographing the beautiful landscape there. That's what I love about my job – the chance to travel around the world, meeting people from different backgrounds and getting paid for it! I recently did some work for a charity and that combined everything I love about the job, plus I got to help children, so that's the most rewarding part. I guess it's why I keep doing what I do.\nNow listen again."
          },
          {
            "scenario": "You will hear a teenager talking about her ambitions.",
            "q": "What does she want to do after university?",
            "opts": [
              "travel around Europe",
              "work straightaway",
              "do some more studying"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-2/part-1-q3.mp3",
            "explanation": "她希望大学毕业后继续进修，为成为助产士做准备，选 C。原文：\"At the moment I'm training to be a nurse, but I really want to work as a midwife so I can help pregnant women, and so I need to go back for a year but to a different university.\"",
            "transcript": "I can't wait to finish university, not that I don't like it, but I'm looking forward to what I can do afterwards. I was considering travelling round Europe. I've been to loads of places anyway, but I've decided that can wait. What I'll probably do is go back to my studies. At the moment I'm training to be a nurse, but I really want to work as a midwife so I can help pregnant women, and so I need to go back for a year but to a different university.\nNow listen again."
          },
          {
            "scenario": "You will hear a teacher talking about her job.",
            "q": "Why did she decide to be a teacher?",
            "opts": [
              "She wanted to help children.",
              "She followed her sister's advice.",
              "She wasn't happy with her former job."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-2/part-1-q4.mp3",
            "explanation": "她原本是律师，对那份工作不满意才转行当老师，选 C。原文：\"I started off as a lawyer. I was working with banks and other financial businesses but I wasn't happy.\"",
            "transcript": "I started off as a lawyer. I was working with banks and other financial businesses but I wasn't happy. My sister's a teacher and I saw that although it was very demanding and lots of work, she had this satisfaction and happiness from her job that I never had. After teaching for a couple of years, I've just decided to work specifically with children with learning difficulties and now I really feel happy at the end of the day, although just as tired!\nNow listen again."
          },
          {
            "scenario": "You will hear two band members talking about their new album.",
            "q": "How do they feel about their new music?",
            "opts": [
              "They don't think it's as good as their first album.",
              "They are concerned if people will like it.",
              "They don't really care about what people think."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-2/part-1-q5.mp3",
            "explanation": "乐队成员提到已收到几条差评，虽然多数是正面评价，但他们仍担心听众是否喜欢新专辑，选 B。原文：\"We've had a couple of bad reviews already, but most of them have been very positive, so we're just focusing on that.\" \"Our last album did so well that we're pretty worried about this one. I keep thinking – will it do as well?\"",
            "transcript": "Band member 1: Our last album did so well that we're pretty worried about this one. I keep thinking – will it do as well?\nBand member 2: Well, I'm quite confident about this one. We worked on the songs for a long time, just getting everything right.\nBand member 1: We've had a couple of bad reviews already, but most of them have been very positive, so we're just focusing on that.\nNow listen again."
          },
          {
            "scenario": "You will hear an archeologist talking about a new discovery.",
            "q": "What is important about the discovery?",
            "opts": [
              "It shows something new about the society.",
              "It was discovered by accident by builders.",
              "It means that the area will now be protected."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-2/part-1-q6.mp3",
            "explanation": "考古学家说发现揭示了在该国此前认为有宗教之前就已存在宗教，刷新了对社会历史的认知，选 A。原文：\"This shows us that there was religion in this country long before we thought. It changes lots of things about the history of the country and we now hope to find some more items which show how this society and its culture was affected by having a church in the village.\"",
            "transcript": "We're really excited about these new discoveries. The team has been working on the site for a long time and finally we've found the remains of an old church. This shows us that there was religion in this country long before we thought. It changes lots of things about the history of the country and we now hope to find some more items which show how this society and its culture was affected by having a church in the village.\nNow listen again."
          },
          {
            "scenario": "You will hear two teenagers discussing their favourite sports.",
            "q": "Which sport do they not choose?",
            "opts": [
              "football",
              "rugby",
              "athletics"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-2/part-1-q7.mp3",
            "explanation": "男生已选足球和板球，第三项在橄榄球和田径之间犹豫，最终被同伴说服选了田径，未选橄榄球，选 B。原文：\"Yes, football, and of course cricket in the summer, too. I've still got one more to choose. I'm between rugby and athletics. What do you think?\" \"I think athletics is a better choice. There's no way I'm going to risk getting hurt playing rugby.\"",
            "transcript": "Boy 1: Have you picked your sports for this year yet?\nBoy 2: Yes, football, and of course cricket in the summer, too. I've still got one more to choose. I'm between rugby and athletics. What do you think?\nBoy 1: Rugby? Really? It's a bit tough, isn't it? I think athletics is a better choice. There's no way I'm going to risk getting hurt playing rugby.\nBoy 2: I hadn't thought of it like that. I guess you're right.\nNow listen again."
          },
          {
            "scenario": "You will hear a man talking on the radio.",
            "q": "Why is he proud of his achievements?",
            "opts": [
              "He was told he would never be successful.",
              "He has done well, despite not going to school regularly.",
              "He has never borrowed money."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-2/part-1-q8.mp3",
            "explanation": "他说自己上学时不出色也很少去学校，但如今却白手起家成为跨国公司老板，选 B。原文：\"I was never great at school and I didn't even go very often, so I bet the teachers can't believe what I've done.\" \"Sometimes when I look over my life, I still can't believe the situation I'm in now: head of an international company which I started from scratch when I was 18.\"",
            "transcript": "Sometimes when I look over my life, I still can't believe the situation I'm in now: head of an international company which I started from scratch when I was 18. I was never great at school and I didn't even go very often, so I bet the teachers can't believe what I've done. I have to thank my parents for everything, though. If they hadn't believed in me and even lent me the money to start the business, I wouldn't have been able to do anything.\nNow listen again."
          }
        ]
      },
      "2": {
        "title": "Part 2 · 句子填空",
        "instruction": "听生物学家 Peter Gufstasson 谈论帝企鹅。在 9-18 题的句子空格中填入一个词或短语。",
        "type": "blanks",
        "audio": "/audio/fce-mock/test-2/part-2.mp3",
        "transcript": "You may have seen the hugely successful documentary, March of the Penguins, which told the story of the fascinating Emperor penguins and their fight for survival in the harsh Antarctic conditions. As a professor of marine biology at the University of Stockholm, I have been travelling for many years to Antarctica to study these incredible animals. Since the documentary was released, interest has grown in the penguins and this, of course, is a great thing because people then become interested in conservation of their environment and we can protect them.\nI spend months in the Antarctic, studying the penguins and taking blood samples so I can learn about their diets and how they survive. I also look at other types of penguins, such as Adelie and Gentoo, so I can compare the diets of the penguins and we can learn about their habitats. For me though, the Emperor penguins are the most interesting as they work together as a community to survive in these difficult circumstances.\nThe temperatures in the area can reach as low as -60 degrees and the penguins have found a clever way of surviving the cold. They have found a system which means that they all gather around in a circle and they take it in turns to be in the middle, which is the warmest place; once they are warm, they move to the outside of the circle so they all get warm sometime. This is important as they spend all winter on the open ice and even lay their eggs in the freezing cold.\nThe penguins are probably most famous for the way they look after their eggs and the baby penguins. Female penguins give birth and leave their eggs behind for the male to look after. The females have to go looking for food to feed themselves, their mate and the baby penguin! They may travel as far as 80 kilometres to the ocean and once there, they will eat fish, squid and krill. The trip may take as long as two months and can be very dangerous for the female penguins as they have to dive in the ocean, where they could be killed by whales or sea lions.\nWhile the females are searching for food, it is up to the fathers to protect their eggs. They do not actually sit on the eggs, but balance it on their feet and cover it with their feathers to keep the eggs warm; any exposure to the freezing temperatures could kill the baby inside. Due to this danger, the fathers do not move until the mothers return and during this time they do not eat at all. When the mothers do finally return, they give the food to the new babies and it is the fathers' time to travel to the ocean to find food. By the time the weather improves, the ice has broken up so that the ocean is much closer to the penguins, which is timed perfectly as the young penguin chicks can learn to swim easily.\nThis beautiful way that the families work together to look after each other is unbelievable, and it is not a surprise that the public are becoming just as interested as me and my fellow scientists. Although the Emperor penguins are not endangered, the effect of environmental damage is slowly beginning to be seen in the environment. The ice is starting to melt and this will, of course, affect the habitat of the penguins. Hopefully our work, plus the interest from the documentary, will help people to understand how important it is to protect our planet.",
        "items": [
          {
            "q": "Peter is a professor of (9) ____ at the University of Stockholm.",
            "answer": [
              "marine biology"
            ],
            "show": "marine biology",
            "explanation": "原文说他是斯德哥尔摩大学海洋生物学（marine biology）教授。原文：\"As a professor of marine biology at the University of Stockholm, I have been travelling for many years to Antarctica to study these incredible animals.\""
          },
          {
            "q": "He hopes that people will want to learn more about the (10) ____ of their environment.",
            "answer": [
              "conservation"
            ],
            "show": "conservation",
            "explanation": "希望公众对环境保护（conservation）产生兴趣。原文：\"Since the documentary was released, interest has grown in the penguins and this, of course, is a great thing because people then become interested in conservation of their environment and we can protect them.\""
          },
          {
            "q": "To learn about the penguins' (11) ____, he takes blood samples.",
            "answer": [
              "diets"
            ],
            "show": "diets",
            "explanation": "通过采血来研究企鹅的饮食（diets）。原文：\"I spend months in the Antarctic, studying the penguins and taking blood samples so I can learn about their diets and how they survive.\""
          },
          {
            "q": "Working together as a group with common goals has helped the penguins (12) ____.",
            "answer": [
              "survive"
            ],
            "show": "survive",
            "explanation": "群体协作帮助企鹅在严酷环境中生存（survive）下来。原文：\"For me though, the Emperor penguins are the most interesting as they work together as a community to survive in these difficult circumstances.\""
          },
          {
            "q": "The penguins take it (13) ____ to stand in the warm part of the circle.",
            "answer": [
              "in turns"
            ],
            "show": "in turns",
            "explanation": "企鹅轮流（in turns）进入圆圈中央最暖的位置。原文：\"They have found a system which means that they all gather around in a circle and they take it in turns to be in the middle, which is the warmest place; once they are warm, they move to the outside of the circle so they all get warm sometime.\""
          },
          {
            "q": "After birth, the eggs are cared for by the (14) ____ penguins.",
            "answer": [
              "male"
            ],
            "show": "male",
            "explanation": "雌企鹅产卵后离开，由雄企鹅（male）照料蛋。原文：\"Female penguins give birth and leave their eggs behind for the male to look after.\""
          },
          {
            "q": "The diet of the penguin includes krill, fish and (15) ____.",
            "answer": [
              "squid"
            ],
            "show": "squid",
            "explanation": "企鹅食物包括磷虾、鱼和鱿鱼（squid）。原文：\"They may travel as far as 80 kilometres to the ocean and once there, they will eat fish, squid and krill.\""
          },
          {
            "q": "The eggs are kept warm to prevent (16) ____ to the freezing Antarctic temperatures.",
            "answer": [
              "exposure"
            ],
            "show": "exposure",
            "explanation": "保持蛋温暖以避免接触（exposure）南极严寒。原文：\"They do not actually sit on the eggs, but balance it on their feet and cover it with their feathers to keep the eggs warm; any exposure to the freezing temperatures could kill the baby inside.\""
          },
          {
            "q": "When the chicks are old enough, the (17) ____ will have broken up so they can learn to swim.",
            "answer": [
              "ice"
            ],
            "show": "ice",
            "explanation": "天气转暖后冰（ice）破裂，海洋更近，幼企鹅便于学游泳。原文：\"By the time the weather improves, the ice has broken up so that the ocean is much closer to the penguins, which is timed perfectly as the young penguin chicks can learn to swim easily.\""
          },
          {
            "q": "The change in the landscape reveals the (18) ____ damage being done.",
            "answer": [
              "environmental"
            ],
            "show": "environmental",
            "explanation": "地貌变化揭示了环境（environmental）破坏。原文：\"Although the Emperor penguins are not endangered, the effect of environmental damage is slowly beginning to be seen in the environment.\""
          }
        ]
      },
      "3": {
        "title": "Part 3 · 多文本匹配",
        "instruction": "听 5 段关于电影的短录音，将每位说话者匹配到 A-H 中的相应陈述。3 个选项不会被使用。",
        "type": "matching",
        "audio": "/audio/fce-mock/test-2/part-3.mp3",
        "options": [
          {
            "label": "A",
            "text": "The director always makes good films."
          },
          {
            "label": "B",
            "text": "The writing was of very high quality."
          },
          {
            "label": "C",
            "text": "The film had lots of award-winning actors."
          },
          {
            "label": "D",
            "text": "The special effects were great."
          },
          {
            "label": "E",
            "text": "A popular actor starred in the film."
          },
          {
            "label": "F",
            "text": "The film is the best of its genre."
          },
          {
            "label": "G",
            "text": "The film stayed true to the novel."
          },
          {
            "label": "H",
            "text": "The film has a fantastic soundtrack."
          }
        ],
        "items": [
          {
            "speaker": "Speaker 1",
            "answer": "D",
            "explanation": "说话者是科幻片爱好者，喜欢电脑图形，提到\"The actors were pretty good but, by far, the effects were the reason for me to come back.\"，对应 D（特效出色）。",
            "transcript": "I've actually seen the film twice now. I don't normally go to the cinema again for the same film, but this was worth it! Honestly, though, this film was brilliant. I'm a huge sci-fi fan and this is definitely one of the best of its genre. The actors were pretty good but, by far, the effects were the reason for me to come back. I'm studying computer graphics at college so I'm always really interested in the way films look. Luckily, my friends like to watch films like that, too, so I always have people to go to the cinema with."
          },
          {
            "speaker": "Speaker 2",
            "answer": "B",
            "explanation": "说话者是作家，赞扬影片\"So, my favourite film is, in my opinion, a superb example of expert storytelling, but of course the acting is good, too.\"，对应 B（剧本质量高）。",
            "transcript": "I'm a writer, so I love a good story and usually films these days are just about silly special effects such as 3D and all that. I don't want to wear special glasses to watch a film. I think it's just a way to hide the fact that the story and the acting is poor. So, my favourite film is, in my opinion, a superb example of expert storytelling, but of course the acting is good, too. The reason I've watched it so many times, though, is because it's really believable – something that is rare in films these days."
          },
          {
            "speaker": "Speaker 3",
            "answer": "G",
            "explanation": "说话者原本担心改编会偏离原著，但该片忠于小说，对应 G（忠于原著）。原文：\"I was surprised by how similar it is to the book and I think they did a good job to keep fans happy.\"",
            "transcript": "Normally, if you read the book, you're disappointed by the film version: the director never seems to get it right. More often than not, large parts of the book are left out, which is understandable when time is a problem, but really the plot shouldn't be changed too much. Anyway, this was one of my favourite books so I couldn't wait to see the film and see if it was as good. I was surprised by how similar it is to the book and I think they did a good job to keep fans happy."
          },
          {
            "speaker": "Speaker 4",
            "answer": "E",
            "explanation": "说话者冲着最爱的演员 Jack Williams 去看这部影片，对应 E（受人气演员主演）。原文：\"I wasn't too sure about this film, actually, when I read about it and it didn't even have good reviews, but it's got my favourite actor in so I thought I'd watch it anyway.\"",
            "transcript": "I wasn't too sure about this film, actually, when I read about it and it didn't even have good reviews, but it's got my favourite actor in so I thought I'd watch it anyway. I really liked it, and I've watched it loads of times, since I guess having Jack Williams in helps but I thought it was a really, touching film. I think some reviewers can be snobby about some films and I don't take any notice of their opinions anymore. I've grown up watching Jack and I think I'll always watch his films despite what other people say."
          },
          {
            "speaker": "Speaker 5",
            "answer": "F",
            "explanation": "说话者认为 Some Like It Hot 是喜剧类型中最好的，对应 F（该类型最佳）。原文：\"My preferred type of film is comedy and the best of these is Some Like It Hot, which stars Marilyn Monroe.\"",
            "transcript": "I'm a huge film fan and I even work for a film magazine, writing articles about upcoming films and the history of cinema. As such, I am lucky enough to watch films every day, some I like and some I don't. My preferred type of film is comedy and the best of these is Some Like It Hot, which stars Marilyn Monroe. It's a classic film and it was my dad's favourite, too, and although I've seen it countless times, it always makes me laugh."
          }
        ]
      },
      "4": {
        "title": "Part 4 · 访谈选择",
        "instruction": "听 David Adams 向学生们介绍 Cadbury 巧克力工厂。在 24-30 题中选出最佳答案。",
        "type": "mcq",
        "audio": "/audio/fce-mock/test-2/part-4.mp3",
        "transcript": "I = Interviewer D = David\nI: Joining us today we have David Adams, who has written a book about the history of the famous Cadbury family and how they began the popular chocolate factory. David, welcome to the show. Could you tell us why you are interested in Cadbury's?\nD: Well, I grew up in the city of Birmingham and both my parents worked at the Cadbury factory until they retired and they told me all about how the factory was started, and it always interested me. They used to bring home loads of packets of biscuits for free at Christmas and it seemed very generous. They used to tell me about the family and what they did for the community and the city. When I grew up, I studied history at university and began to write books about the area. I realised that the story of the factory was fascinating and unusual for such a large company.\nI: How did the factory begin?\nD: The first shop was opened by John Cadbury in the centre of Birmingham in 1824 and sold tea, coffee and drinking chocolate. Not only did John sell these products because he liked them, but he was a Quaker, which is a religion which believes alcohol is bad for you, so chocolate and coffee were thought to be a better choice. The shop did well and when he had enough money, he bought a larger building and started making chocolate drinking powder and cakes in lots of different flavours. It wasn't long until another factory was opened and eventually they began to produce chocolate bars.\nI: Did Cadbury's make the first chocolate bar?\nD: No, actually many people think that because they're so famous, they must have invented the chocolate bar, but it was actually in France. They weren't even the first company in Britain to do them and John's sons, Richard and George took over the business and concentrated on making their cocoa powder even better. It wasn't actually until 1897 that they decided to make chocolate bars but, believe me, you wouldn't like them because they were quite bitter and not the sweet, milky bars we all love now! In fact, the business did so well that once again they needed a bigger factory and this is where Cadbury's really becomes a special story.\nI: Is this when they moved to Bournville?\nD: Yes, at this time, Birmingham, as the second-biggest UK city, was famous for its industry. There were lots of factories and the workers lived in very poor housing because they were paid so badly. The Cadburys, as I said, were Quakers and they had a strong belief in helping others, and they couldn't understand why people should live in crowded, awful houses. George Cadbury asked the question “Why should an industrial area be depressing?” and the brothers began to search for a new place to build. They decided on an area just five minutes from the centre of the city, which they named Bournville. The brothers wanted to build the factory and houses for the workers in a beautiful area with lots of parks, away from the polluted city.\nI: It sounds that it was a good company to work for. So did they only build homes for the workers?\nD: The houses were just the beginning; at first, the houses were just built for the key workers and they were great houses, large with gardens. Even the workers who didn't have homes were amazed by the factory – there was a football pitch, kitchens for the workers to have hot meals at work and later swimming pools, tennis courts and so on. The Cadbury family believed if their employees were happy and healthy, then they would be better workers, plus they thought it was important to help others. Those who didn't live in Bournville were not forgotten by the company by helping them pay for transport to the factory.\nI: Did they continue to develop Bournville?\nD: Absolutely. They bought even more land around the factory and built 143 more houses. These all had gardens with fruit trees and a vegetable garden. The difference between these and the traditional slums – extremely bad housing – where the workers used to live was enormous. It was also an influence on other new towns – architects wanted to copy the way that Bournville had lots of parks and gardens. They continued to help improve people's lives. For example, they would organise trips to the countryside for the workers and their families, which would have been a welcome break away from the pollution.\nI: What happened to Bournville? Has it changed now?\nD: Luckily, it hasn't changed very much at all! It is a very popular area of the city to live in as it is like living in the countryside but in a huge city. There is a group in Bournville which decides what can be built in the village. No pubs or bars can be built there so it is a very nice place to live with children. There are even rules for the people who have houses there: they have to have at least one fruit tree in their garden. The village gets many visitors as the Cadbury factory is open to the public, and as well as tasting the chocolate you can look around the beautiful parks and see it all for yourself!",
        "items": [
          {
            "q": "How did David become interested in the Cadbury family and Bournville?",
            "opts": [
              "He heard the stories when he went to university.",
              "He worked at the factory and heard the history there.",
              "He heard the stories from his mother and father."
            ],
            "answer": 2,
            "explanation": "David 父母都在 Cadbury 工厂工作，常给他讲工厂历史，选 C。原文：\"Well, I grew up in the city of Birmingham and both my parents worked at the Cadbury factory until they retired and they told me all about how the factory was started, and it always interested me.\""
          },
          {
            "q": "Why did John Cadbury like selling chocolate?",
            "opts": [
              "He thought he could make lots of money from it.",
              "He thought it was better than people buying alcohol.",
              "It was cheap to make chocolate bars."
            ],
            "answer": 1,
            "explanation": "John 是贵格会教徒，认为饮酒有害，所以卖巧克力作为更好的替代品，选 B。原文：\"Not only did John sell these products because he liked them, but he was a Quaker, which is a religion which believes alcohol is bad for you, so chocolate and coffee were thought to be a better choice.\""
          },
          {
            "q": "What did Richard and George Cadbury want to do in the beginning?",
            "opts": [
              "They wanted to improve the products they were selling.",
              "They wanted to sell the business.",
              "They wanted to make the first chocolate bar."
            ],
            "answer": 0,
            "explanation": "Richard 和 George 接手后专注提升可可粉品质，选 A。原文：\"They weren't even the first company in Britain to do them and John's sons, Richard and George took over the business and concentrated on making their cocoa powder even better.\""
          },
          {
            "q": "Why did they want to build houses in Bournville?",
            "opts": [
              "They used workers from outside Birmingham who needed homes.",
              "They wanted workers to live closer to the factory.",
              "They thought everyone should live in good houses."
            ],
            "answer": 2,
            "explanation": "贵格会信仰使兄弟俩坚信人人应住好房子，不能容忍工人住棚户，选 C。原文：\"The Cadburys, as I said, were Quakers and they had a strong belief in helping others, and they couldn't understand why people should live in crowded, awful houses.\""
          },
          {
            "q": "How did the houses and good facilities help the company?",
            "opts": [
              "Lots of people wanted to work for the company.",
              "They made the workers feel better.",
              "They won awards for the facilities."
            ],
            "answer": 1,
            "explanation": "Cadbury 家族认为员工身心愉悦才能成为更好的工人，选 B。原文：\"The Cadbury family believed if their employees were happy and healthy, then they would be better workers, plus they thought it was important to help others.\""
          },
          {
            "q": "How has Bournville affected other towns?",
            "opts": [
              "It has encouraged more green areas in towns.",
              "It has decreased the amount of poor housing.",
              "It has encouraged other companies to help build new towns."
            ],
            "answer": 0,
            "explanation": "其他城镇建筑师模仿 Bournville 多建公园绿地，选 A。原文：\"It was also an influence on other new towns – architects wanted to copy the way that Bournville had lots of parks and gardens.\""
          },
          {
            "q": "Why is the village still special today?",
            "opts": [
              "The houses are now empty and can be visited.",
              "It is almost the same as when it was first built.",
              "There are lots of popular bars in the area."
            ],
            "answer": 1,
            "explanation": "David 说 Bournville 至今几乎没有变化，仍然像乡村一样宜居，选 B。原文：\"Luckily, it hasn't changed very much at all! It is a very popular area of the city to live in as it is like living in the countryside but in a huge city.\""
          }
        ]
      }
    }
  },
  {
    "meta": {
      "id": "fce-mock-3-listening",
      "title": "FCE 全真模拟试题 3 · Listening",
      "level": "FCE",
      "collection": "FCE 全真模拟试题（8套）",
      "book": "FCE 全真模拟试题（8套）",
      "paper": "Listening",
      "pages": "51–53",
      "source": "FCE 8套全真模拟试题.pdf",
      "answerSource": "Answer Key and Transcripts（书 168-172 页 / PDF 174-178，官方）",
      "verified": true
    },
    "parts": {
      "1": {
        "title": "Part 1 · 情境选择",
        "instruction": "听 8 段不同情境的短录音，每题从 A/B/C 中选出最佳答案。每段录音播放两次。",
        "type": "mcq_situation",
        "items": [
          {
            "scenario": "You hear a teacher talking about a school sports day.",
            "q": "What does he want the children to do?",
            "opts": [
              "choose an event to compete in",
              "invite their friends to sports day",
              "inform their parents of the day's events"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-3/part-1-q1.mp3",
            "explanation": "老师反复叮嘱\"your parents receive the sports day invitation this week\"，要学生把邀请函交给家长，选 C。",
            "transcript": "Now, as you know it's sports day next Friday, so it's very important that everyone knows what's going on. You will all need to be changed and on the sports field for 1.30. Your class teacher will be with you, of course, and you will all have been informed by then which events you have been chosen to compete in. It's very important that your parents receive the sports day invitation this week, so don't put it in your bag and leave it there!"
          },
          {
            "scenario": "You hear a professional boxer talking about his childhood.",
            "q": "What does he say about the youth boxing club?",
            "opts": [
              "It made him the best fighter in his gang.",
              "It made him respect the rival gangs more.",
              "It saved him from a life of crime."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-3/part-1-q2.mp3",
            "explanation": "拳击手说加入拳击俱乐部让他脱离帮派和街头犯罪，救了他的命（\"I guess you could say that it saved my life as it pulled me out of the gang and street-crime scene and gave me a respectable career.\"），选 C。",
            "transcript": "Well, if I'm honest, I was a problem child in that I'd got in with the wrong crowd. I grew up in a pretty rundown part of the city. There were lots of gang fights all the time and I was heavily into the gang scene. Well – I had to be – it was the only way to survive on the streets. I guess that's how I toughened up and learned to stand up for myself. On the other hand, I was definitely on the road to ruin, so joining the boxing club taught me discipline and respect. I guess you could say that it saved my life as it pulled me out of the gang and street-crime scene and gave me a respectable career."
          },
          {
            "scenario": "You hear a message on a telephone answering machine.",
            "q": "Why is the woman calling?",
            "opts": [
              "to offer an invitation",
              "to make a request",
              "to complain about something"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-3/part-1-q3.mp3",
            "explanation": "Carol 打电话问 Simon 周六看球能否顺便捎她一程（\"My car is in the garage so would you have room for one more?\"），是在提请求，选 B。",
            "transcript": "Hi, Simon. It's Carol here. I just wanted to ask you about the match on Saturday. Bob said he'd invited you to go with him and that you are going to give him a lift. My car is in the garage so would you have room for one more? I can't really complain. I've not spent a penny on that car for nearly a year now. Anyway, let me know if that works for you. Don't worry; if you haven't got room, I can always invite my brother along and get a lift that way. Speak to you later."
          },
          {
            "scenario": "You hear the following on the radio.",
            "q": "What happened?",
            "opts": [
              "The game was interrupted.",
              "A player was injured.",
              "The referee's dog got on to the pitch."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-3/part-1-q4.mp3",
            "explanation": "比赛中一只狗闯入球场，裁判和双方球员一起追赶，比赛被打断（\"a dog ran onto the pitch, tripping one of the players over as he did so\"；\"The referee chased the dog around for a couple of minutes and both teams joined in trying to catch it.\"），选 A。",
            "transcript": "Well, it was about halfway through the first half when a dog ran onto the pitch, tripping one of the players over as he did so. The player just sat on the ground laughing. The referee chased the dog around for a couple of minutes and both teams joined in trying to catch it. The crowd were all in fits of laughter. Then the referee blew his whistle and miraculously the dog came running to him and sat at his feet. No one knows who the dog belongs to, but it was so funny."
          },
          {
            "scenario": "You hear two friends talking about a holiday they are planning.",
            "q": "What do they agree about?",
            "opts": [
              "They both need a rest.",
              "They want to do something exciting.",
              "They'll probably fall out on holiday."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-3/part-1-q5.mp3",
            "explanation": "两人都受不了整天躺在沙滩上（\"I can't stand lying around a pool or on a beach all week.\"；\"Me neither. That's why I thought the watersports holiday looked like fun.\"），都想要水上运动这种刺激活动，选 B。",
            "transcript": "M: We need to make a decision. We can't keep arguing about it.\nF: I know. You're right. We both want a bit of action, don't we? I can't stand lying around a pool or on a beach all week.\nM: Me neither. That's why I thought the watersports holiday looked like fun.\nF: Well, yes, as long as it doesn't involve anything too dangerous. But, I am up for a bit of a challenge.\nM: Don't worry. It's all supervised by expert instructors."
          },
          {
            "scenario": "You will hear somebody talking about the Olympic Village.",
            "q": "What did he think of it?",
            "opts": [
              "The unpaid workforce made it a huge success.",
              "It was far too crowded.",
              "There were too many soldiers everywhere."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-3/part-1-q6.mp3",
            "explanation": "说话者赞扬大量志愿者帮助管理人群（\"It's amazing how the massive army of volunteers managed them all. There was always someone close by to give help and advice.\"），是奥运村成功的关键，选 A。",
            "transcript": "It's hard to describe the buzz you get from being in the Olympic village during the Games. The number of people wandering about was absolutely unbelievable – crowds as far as the eye could see. It's amazing how the massive army of volunteers managed them all. There was always someone close by to give help and advice. The security must have been like a military operation but the incredible thing was you couldn't really see any obvious security anywhere. I guess they were all in civilian clothing so that they blended in with the crowd."
          },
          {
            "scenario": "You are going to hear part of a weather forecast.",
            "q": "What will the weather be like this morning?",
            "opts": [
              "stormy",
              "dry",
              "very windy"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-3/part-1-q7.mp3",
            "explanation": "预报说昨晚风暴后风势减弱，仅余微风，对跑步者是好天气，今天上午干燥（\"The wind has certainly dropped, although there is a pleasant breeze. That's always good for the runners as the sunny conditions are not really what they need for such a difficult race.\"；\"There is a chance of more heavy rain this evening but it won't be as bad as last night.\"），选 B。",
            "transcript": "With the London Marathon starting in about half an hour's time, the weather seems to have settled down a bit after last night's storm. The wind has certainly dropped, although there is a pleasant breeze. That's always good for the runners as the sunny conditions are not really what they need for such a difficult race. There is a chance of more heavy rain this evening but it won't be as bad as last night."
          },
          {
            "scenario": "You will hear a conversation between a father and his daughter.",
            "q": "What is the problem?",
            "opts": [
              "The father can't afford to buy her new trainers.",
              "They can't find the trainers that she needs.",
              "The daughter isn't being practical."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-3/part-1-q8.mp3",
            "explanation": "父亲指出女儿想买的鞋不是跑步鞋（\"They aren't proper running shoes.\"），且被同伴嘲笑就不穿新式实用鞋（\"The other kids will laugh at me if I wear something so old-fashioned.\"），父亲说她不切实际（\"Now you are being stubborn and ridiculous.\"），选 C。",
            "transcript": "M: It's just silly to buy these trainers. They are far too expensive, anyway.\nF: But they look great.\nM: They aren't proper running shoes. They are for indoor activities.\nF: It's OK because I am not going to run in the rain and I can't see any others that I like.\nM: The first pair you tried on were exactly what you need.\nF: The other kids will laugh at me if I wear something so old-fashioned.\nM: Now you are being stubborn and ridiculous. The assistant told us that they were a new style that just came in last week."
          }
        ]
      },
      "2": {
        "title": "Part 2 · 句子填空",
        "instruction": "听跳伞教练 Graham Davies 介绍为慈善筹款进行双人跳伞的机会。在 9-18 题的句子空格中填入一个词或短语。",
        "type": "blanks",
        "audio": "/audio/fce-mock/test-3/part-2.mp3",
        "items": [
          {
            "q": "You won't have to pay for your jump if you raise a(n) (9) ____ of £400 for your charity.",
            "answer": [
              "minimum"
            ],
            "show": "minimum",
            "explanation": "原文说\"raise a minimum of £400 in sponsorship\"，即最低 400 英镑。"
          },
          {
            "q": "It's extremely important to learn how to (10) ____ safely.",
            "answer": [
              "land"
            ],
            "show": "land",
            "explanation": "教练强调地面简报会教\"how to land safely\"，安全着陆至关重要。"
          },
          {
            "q": "The (11) ____ affect how high the plane will fly.",
            "answer": [
              "weather conditions"
            ],
            "show": "weather conditions",
            "explanation": "\"depending on weather conditions, the plane will normally fly to about 12,000 feet\"。"
          },
          {
            "q": "After the main parachute opens, you will gently glide for about (12) ____ minutes.",
            "answer": [
              "four to six",
              "4 to 6"
            ],
            "show": "four to six",
            "explanation": "原文\"four to six minutes of gliding gently\"。"
          },
          {
            "q": "Parents or guardians need to give their (13) ____ for seventeen-year-olds to skydive.",
            "answer": [
              "permission"
            ],
            "show": "permission",
            "explanation": "未满 18 岁需取得父母或监护人的\"permission\"。"
          },
          {
            "q": "If you are over forty, a doctor needs to sign and stamp a (14) ____ form before you can skydive.",
            "answer": [
              "Declaration of Fitness"
            ],
            "show": "Declaration of Fitness",
            "explanation": "40 岁以上需医生签署\"Declaration of Fitness\"表。"
          },
          {
            "q": "Due to (15) ____ fuel prices these days, there is a fuel surcharge.",
            "answer": [
              "unpredictable"
            ],
            "show": "unpredictable",
            "explanation": "\"fuel prices being so unpredictable\"，油价不可预测，故收燃油附加费。"
          },
          {
            "q": "You are not insured if you die or suffer a(n) (16) ____.",
            "answer": [
              "personal injury"
            ],
            "show": "personal injury",
            "explanation": "公共责任险不覆盖\"personal injury or death\"。"
          },
          {
            "q": "You can have your jump recorded by (17) ____ for £100-£180.",
            "answer": [
              "professional photographers"
            ],
            "show": "professional photographers",
            "explanation": "\"Most centres have professional photographers who can capture your big moment\"。"
          },
          {
            "q": "Friends and family can sponsor you on your own (18) ____ sponsorship page.",
            "answer": [
              "online"
            ],
            "show": "online",
            "explanation": "\"you can set up an online sponsorship page\"。"
          }
        ],
        "transcript": "M: Well, it's a great opportunity to have an experience of a lifetime and raise money for your favourite charity. Our exciting skydiving scheme gives you the chance to do a tandem parachute jump for free if you raise a minimum of £400 in sponsorship. Just imagine the adrenalin rush, excitement, thrill and pride you will feel in taking part in an amazing tandem skydive.\nOn the morning of your jump you will have a 30-minute ground briefing on the equipment that will be used and how it works, as well as full information on exiting the aircraft, freefall and how to land safely. Everyone worries about the actual jump but knowing how to land is crucial. Once you've been securely attached to an experienced tandem jump parachute instructor with a 4-point harness system, you will board the aircraft together.\nNow, depending on weather conditions, the plane will normally fly to about 12,000 feet and then you exit and begin your freefall. After reaching speeds of approximately 120 miles per hour, your freefall will end at around 5,000 feet when the tandem instructor will open the main parachute. That's the most wonderful part of the entire experience. After about 45 seconds of fast freefalling, you get four to six minutes of gliding gently to your landing area. During these few minutes you'll experience a calm serenity and some amazing views.\nNow, it's important to mention that there are some restrictions as to who can skydive. The minimum age is 16 and jumpers must weigh less than 90 kilos. If you are over 16 but under 18, you must obtain your parents' or guardian's permission to take part. There is no upper age limit. However, anyone aged 40 or over will need to have their \"Declaration of Fitness\" form signed or stamped by their doctor. There are also some restrictions in relation to certain medical conditions. Full details are given on the fitness form that you will receive with your sponsor forms.\nOther things to consider are the extra costs involved. Due to fuel prices being so unpredictable today, there is a surcharge on fuel. This is normally between £5–£25 and you will be advised about this when you book your jump. All jumps will be covered by public liability insurance, but this does not cover you for personal injury or death. It's also possible to have your jump filmed. Most centres have professional photographers who can capture your big moment on DVD or photographically. The cost for this varies from £100–£180. It's worth checking what is available and how much it will cost when you register your jump. So, if you think a sponsored skydive is right up your street, why don't you check out our website, where you can set up an online sponsorship page that will enable your friends and family far and wide to sponsor you? Take a leap of faith and go for it. I guarantee it will be an experience of a lifetime."
      },
      "3": {
        "title": "Part 3 · 多文本匹配",
        "instruction": "听 5 段关于运动休闲的短录音，将每位说话者匹配到 A-H 中的相应陈述。3 个选项不会被使用。",
        "type": "matching",
        "audio": "/audio/fce-mock/test-3/part-3.mp3",
        "options": [
          {
            "label": "A",
            "text": "It fulfils my competitive spirit."
          },
          {
            "label": "B",
            "text": "An unfortunate event turned out for the best."
          },
          {
            "label": "C",
            "text": "I could easily have turned to a life of crime."
          },
          {
            "label": "D",
            "text": "My employer funded my education."
          },
          {
            "label": "E",
            "text": "I've been accused of being quite dangerous."
          },
          {
            "label": "F",
            "text": "One of my clients was injured."
          },
          {
            "label": "G",
            "text": "I enjoy the contrast from my busy life."
          },
          {
            "label": "H",
            "text": "I felt a bit left out."
          }
        ],
        "items": [
          {
            "speaker": "Speaker 1",
            "answer": "D",
            "explanation": "健身房老板资助她完成 Fitness Instructing 课程，雇主资助了她的教育（\"the gym funded my level 2 Fitness Instructing course and I became an instructor\"），对应 D。",
            "transcript": "I've been a personal trainer for just over five years now and I really love it. I started off working on reception in a gym. To be honest, the only reason I took that job was because I couldn't afford the gym membership fee, and by working there I had free access to all the facilities. After a few months, the gym funded my level 2 Fitness Instructing course and I became an instructor. It was a great team there but I soon realised that the real money was in personal training. The best thing about it is that there are very few overheads. The only real expense is a solid insurance policy in case one of my clients gets injured while under my care."
          },
          {
            "speaker": "Speaker 2",
            "answer": "B",
            "explanation": "受伤退出职业篮球赛后转行做体育教师，不幸事件反而带来好结果（\"After being quite badly injured, I had to retire from professional basketball\"；\"I managed to pay my way through college to become a Physical Education teacher\"），对应 B。",
            "transcript": "After being quite badly injured, I had to retire from professional basketball. I was only twenty-three at the time, so I had my whole working life ahead of me and I had to make a quick decision as to what to do next. With my parents' help and all sorts of part-time work, I managed to pay my way through college to become a Physical Education teacher. It's a great job, as the kids are full of energy. I get the most satisfaction from working with the kids that aren't academically gifted. They tend to lack confidence, and sport gives them a chance to excel at something, and gives them a sense of achievement. I've seen quite a few young lives turn around that would have otherwise, more than likely, turned to crime."
          },
          {
            "speaker": "Speaker 3",
            "answer": "H",
            "explanation": "好友都进了足球队，他没人玩，感到被冷落（\"my best friends joined the team and so I had no one to play with\"），对应 H。",
            "transcript": "I wasn't really that interested in being in the school football team. I just enjoyed kicking a ball around with my mates in the park. The trouble was that my best friends joined the team and so I had no one to play with because they always seemed to be at football practice. So, I thought, \"if you can't beat them, join them\" and I took part in a trial for the team. The trials were quite tough but I got on really well and although I don't like to show off, I'm one of the school's best players now."
          },
          {
            "speaker": "Speaker 4",
            "answer": "G",
            "explanation": "钓鱼让他从繁忙复习中抽身放松，享受反差（\"It's the perfect break from all that revision.\"；\"It does have its moments of action, though.\"），对应 G。",
            "transcript": "I've never been into competitive sports. In my free time I usually want to chill out and take it easy. I've got enough on my mind with all the exams I've got to take this year. Fishing gives me \"me time\". Time to be calm and collect my thoughts. I love the peace and quiet of it. It's the perfect break from all that revision. It does have its moments of action, though. When I get a bite from a fish and I'm pulling it in, I get a real buzz. I'm always careful not to hurt it, though, and I put it back into the river after. I never eat the fish I catch as I think that's cruel, and I'm a vegetarian."
          },
          {
            "speaker": "Speaker 5",
            "answer": "A",
            "explanation": "自行车竞速爱好者，热衷超车和获奖（\"I love the speed of it and that rush of adrenalin when you overtake the rider in front of you\"；\"I've won lots of medals which I'm very proud of\"），对应 A（满足竞争心）。",
            "transcript": "The majority of people cycle because it's a relaxing activity and something you can either do on your own for peace and quiet or with friends. For me, though, it's something else. I'm into racing, big time! I love the speed of it and that rush of adrenalin when you overtake the rider in front of you. If someone overtakes me, though, I get very bad-tempered and I'd certainly never make way for them to get past. I've won lots of medals which I'm very proud of and I'm always trying to improve on my skills and fitness levels. I'd say that cycling is one of the best parts of my life."
          }
        ]
      },
      "4": {
        "title": "Part 4 · 访谈选择",
        "instruction": "听一段电台访谈，受访者 Sally Jones 是伦敦残奥会组织者之一。在 24-30 题中选出最佳答案。",
        "type": "mcq",
        "audio": "/audio/fce-mock/test-3/part-4.mp3",
        "transcript": "M: Today I am very happy to welcome Sally Jones to the studio. Sally was part of the committee that organised and managed the London Paralympic Games. Sally, welcome to the show.\nF: Thanks Jim. It's a pleasure to be here.\nM: Sally, the London Paralympics were without doubt a milestone in disabled sport, weren't they?\nF: Indeed they were. They were certainly the most successful Paralympic Games in history. They were an important step in bringing the subject of disabled sport to a much wider audience. And the coverage in the international media was huge. It was as though paralympic fever had grabbed the world and interest seemed as great as it had been for the able-bodied games.\nM: Why do you think that was?\nF: I think it's got a lot to do with a growing awareness of paralympic sports and more importantly the athletes themselves. The celebrity status of the Olympic Games has really begun to embrace the paralympic athletes too as people appreciate their superhuman achievements.\nM: Tell us about the torch relay for the Paralympic Games.\nF: The tradition of the Olympic flame goes back to ancient Greece. The history of the torch relay for the Paralympics is much shorter. It was first held in Seoul in 1988. In the London Paralympics, four flames were lit in the four countries of the United Kingdom – England, Scotland, Ireland and Wales. For me this was a particularly moving part of the Games as 580 torchbearers were involved, all people who had achieved something remarkable in their life. They weren't necessarily disabled however. When you heard their stories, you couldn't help but feel as though you wanted to do something out of the ordinary yourself.\nM: What was the opening ceremony like?\nF: It's always a nerve-wracking time when you are involved in such a big multi-national event. After years of organisation it was hard to believe that it had finally all come together so perfectly. The faces of the athletes lit up when they paraded around the stadium. There were lots of tears as the pure emotion of the night hit everyone. It was pure joy to be part of it.\nM: How difficult was it to organise so many people?\nF: Well, you'd think it would be almost impossible to communicate with all the different individuals and groups of people all over the world, wouldn't you? In reality that was all fairly straightforward thanks to modern technology and the power of the Internet and satellite communication systems. Also, when you think about it, most of that is free of charge too – no expensive phone calls across the globe. I'm not sure that I wrote any letters during the whole process!\nM: What for you, was the most challenging aspect of the Games?\nF: The sheer volume of work meant that there was always so much to do every day and there wasn't much time to sleep, especially in the last three months. I could barely keep my eyes open by the end of the day. As soon as my head touched the pillow, I was out for the count.\nM: Is there anything that you would handle differently?\nF: It was bound to be an educational experience for everyone, no matter how much experience we had in our individual roles. I probably should have delegated more. I guess I rather took on a bit too much because I was worried it wouldn't get done properly or on time.\nM: To sum up, Sally, what did you take from the whole experience?\nF: Well, I did learn a lot about other people and different cultures and how many things in common we actually do have – no matter where we come from. I also discovered qualities in myself that I wasn't aware of and the inspirational people I met along the way made a much stronger person. I think I tend to look on the bright side of life more now.\nM: Sally, thank you for your time.",
        "items": [
          {
            "q": "How does Sally think about the Paralympics?",
            "opts": [
              "People found them more interesting than the Summer Olympics.",
              "They have become more glamorous.",
              "The media were more interested in the Paralympics than the Summer Olympics."
            ],
            "answer": 1,
            "explanation": "Sally 说残奥运动员也开始获得奥运名流地位，残奥会更受瞩目、更具光环（\"The celebrity status of the Olympic Games has really begun to embrace the paralympic athletes too\"），选 B。"
          },
          {
            "q": "What did the torchbearers all have in common?",
            "opts": [
              "They were all athletes.",
              "They were all ordinary people.",
              "They were all inspirational people."
            ],
            "answer": 2,
            "explanation": "580 位火炬手都是\"achieved something remarkable\"，让人听了想自己也做不平凡的事，对应 C。"
          },
          {
            "q": "How did Sally feel at the opening ceremony?",
            "opts": [
              "She was overwhelmed by her feelings.",
              "She was surprised that it opened so perfectly.",
              "She was impressed by the light show."
            ],
            "answer": 1,
            "explanation": "Sally 说\"hard to believe that it had finally all come together so perfectly\"，对开幕完美感到惊讶，选 B。"
          },
          {
            "q": "How did Sally communicate with people?",
            "opts": [
              "by a mixture of letters and phone calls",
              "mostly online",
              "with a special free Olympic telephone system"
            ],
            "answer": 1,
            "explanation": "Sally 说借助互联网和卫星通讯，全程几乎没写过信，主要在线沟通（\"thanks to modern technology and the power of the Internet and satellite communication systems\"；\"I'm not sure that I wrote any letters during the whole process!\"），选 B。"
          },
          {
            "q": "What was Sally's main problem?",
            "opts": [
              "She couldn't sleep because she was stressed.",
              "She developed a problem with her eyes.",
              "She was exhausted."
            ],
            "answer": 2,
            "explanation": "Sally 说最后三个月几乎没时间睡觉，眼皮都睁不开，是筋疲力尽（\"there wasn't much time to sleep, especially in the last three months. I could barely keep my eyes open by the end of the day.\"），选 C。"
          },
          {
            "q": "What criticism does Sally make of herself?",
            "opts": [
              "She takes on too much responsibility.",
              "She doesn't like working with other people.",
              "She takes too long to complete a task."
            ],
            "answer": 0,
            "explanation": "Sally 自责\"I probably should have delegated more. I guess I rather took on a bit too much\"，承担了过多责任，选 A。"
          },
          {
            "q": "What does Sally think she gained from the experience?",
            "opts": [
              "a passion for sport",
              "a positive attitude",
              "a desire to travel and experience other cultures"
            ],
            "answer": 1,
            "explanation": "Sally 说现在更\"look on the bright side of life\"，即更积极乐观，选 B。"
          }
        ]
      }
    }
  },
  {
    "meta": {
      "id": "fce-mock-4-listening",
      "title": "FCE 全真模拟试题 4 · Listening",
      "level": "FCE",
      "collection": "FCE 全真模拟试题（8套）",
      "book": "FCE 全真模拟试题（8套）",
      "paper": "Listening",
      "pages": "70–72",
      "source": "FCE 8套全真模拟试题.pdf",
      "answerSource": "Answer Key and Transcripts（书 174-178 页 / PDF 180-184，官方）",
      "verified": true
    },
    "parts": {
      "1": {
        "title": "Part 1 · 情境选择",
        "instruction": "听 8 段不同情境的短录音，每题从 A/B/C 中选出最佳答案。每段录音播放两次。",
        "type": "mcq_situation",
        "items": [
          {
            "scenario": "You hear a public announcement.",
            "q": "Why was the flight to Rome delayed?",
            "opts": [
              "A passenger lost their luggage.",
              "The pilot had to wait for permission to take off.",
              "A passenger was late for the flight."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-4/part-1-q1.mp3",
            "explanation": "机长说一名乘客病了，需取出其行李，因此失去起飞时段，必须等新的起飞许可，选 B。原文依据：\"one of our passengers has been taken ill and, as he will not be flying with us, for security reasons his luggage will have to be located and removed from the hold, so we have lost our take-off slot\"。",
            "transcript": "Good morning, ladies and gentlemen, this is your captain speaking. I'm sorry to inform you that there will be an hour's delay to our departure. Unfortunately, one of our passengers has been taken ill and, as he will not be flying with us, for security reasons his luggage will have to be located and removed from the hold, so we have lost our take-off slot. I'm afraid, however, we have ideal weather conditions over Europe, so we may be able to make up some of that time as we fly. Thank you for your patience."
          },
          {
            "scenario": "You hear two friends talking on the phone.",
            "q": "Why did Jim phone Sue?",
            "opts": [
              "to cancel their holiday",
              "to say he is going on holiday with a colleague",
              "to rearrange their holiday"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-4/part-1-q2.mp3",
            "explanation": "Jim 把假期日期和同事撞期了，他想把出发日从周一改到周四，即重新安排假期，选 C。原文依据：\"Well, it seems I've double booked my holiday dates with someone else at work\"。",
            "transcript": "M: Hi, Sue. It's Jim. I'm afraid I've got a problem with the holiday.\nF: Oh no. What's wrong?\nM: Well, it seems I've double booked my holiday dates with someone else at work.\nF: Don't tell me you're going to have to cancel?\nM: I just need to change the first three days so we could go on the Thursday instead of the Monday, and then come back three days later.\nF: Well, I'm quite flexible as I'm my own boss, but I'll have to check my diary and get back to you."
          },
          {
            "scenario": "You hear someone talking about a hotel they stayed in.",
            "q": "What are they complaining about?",
            "opts": [
              "noisy builders",
              "loud music from the disco",
              "the breakfasts were served too early"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-4/part-1-q3.mp3",
            "explanation": "迪斯科噪声旅行社已提醒过，但隔壁工地工人每天 7 点开工吵醒住客，是投诉重点，选 A。原文依据：\"The workers started at 7 o'clock every day, even at the weekend. We didn't want to get up that early every morning but they woke us up\"。",
            "transcript": "It was a very noisy hotel at night because it had a disco by the swimming pool from 8 o'clock to midnight. We couldn't really complain about that, though, as the travel agent had warned us before we booked the holiday. What she didn't mention was the building work on the plot of land next to the hotel. The workers started at 7 o'clock every day, even at the weekend. We didn't want to get up that early every morning but they woke us up and we couldn't get back to sleep. At least we got our breakfast before the rush every day, though."
          },
          {
            "scenario": "Listen to this radio advertisement.",
            "q": "Who is the holiday suitable for?",
            "opts": [
              "parents",
              "teenagers",
              "families"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-4/part-1-q4.mp3",
            "explanation": "Teenscene Holidays 面向\"little darlings\"提供有监管的营地活动（\"supervised 24 hours a day\"），是给青少年（孩子）的假期，让父母休息，选 B。",
            "transcript": "Parents! Fancy some time out from the kids? Need to take a break from looking after the family? Well, we may have the perfect solution for you. At Teenscene Holidays you can leave your little darlings with us for a two-day break right up to a fortnight's holiday. They will stay in one of our superb camps that are supervised 24 hours a day. There are many activities both indoors and outdoors, so they certainly won't get bored. So go on, mums and dads, have a well-earned rest and book a Teenscene Holiday."
          },
          {
            "scenario": "You hear a man talking to his doctor.",
            "q": "What is his problem?",
            "opts": [
              "He's been bitten.",
              "He's got food poisoning.",
              "He's got sunburn."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-4/part-1-q5.mp3",
            "explanation": "男子腿上红印有两个小孔，\"something has obviously got me\"，是被虫咬的，选 A。",
            "transcript": "Well, I've just come back from a holiday in Africa and I didn't feel too well on the last day. I thought it was something I'd eaten, but then this big red mark appeared on my leg and, if you look closely, you can see two small holes in the middle of it, so something has obviously got me. I expected my main problem to be the heat or sunburn but I never thought something like this would happen. I think the poison must have gone right up my leg."
          },
          {
            "scenario": "You hear a woman talking.",
            "q": "What is her profession?",
            "opts": [
              "teacher",
              "stewardess",
              "doctor"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-4/part-1-q6.mp3",
            "explanation": "空乘起初拦她，她解释身份后才被允许救人，且\"trained in such situations\"，是医生，选 C。",
            "transcript": "It was all very dramatic. Just a normal flight to start with. Nothing out of the ordinary, not even turbulence. I was just stretching my legs and walking down the aisle when there was a lot of noise from the back seats. Some poor chap was choking on something and couldn't breathe. I ran to help, as I'm trained in such situations. At first the stewardess tried to make me go back to my seat but I explained who I was and then they let me help him. Anyway, luckily I managed to sort him out. He was a teacher – lovely man."
          },
          {
            "scenario": "You hear two people talking on a train.",
            "q": "Where are they going?",
            "opts": [
              "to work",
              "to college",
              "to a sports event"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-4/part-1-q7.mp3",
            "explanation": "两人谈论\"good match\"和\"we win for a change\"，是去看比赛，选 C。",
            "transcript": "M: It's a lovely day for it, isn't it?\nF: Yes, perfect weather. Just as well as we haven't got covered seats.\nM: It's strange being on the train and not heading for the office.\nF: Yes, I'm really glad to have a day off college, too. Let's hope it's a good match and we win for a change.\nM: I wouldn't count on that but it will be a good day out, whatever the result."
          },
          {
            "scenario": "You hear a news item.",
            "q": "Where was the child?",
            "opts": [
              "at the ice cream stand",
              "in a shady spot",
              "in the sea"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-4/part-1-q8.mp3",
            "explanation": "Tommy 最后在 sunbeds 下被找到，他当时躲太阳，是在阴凉处，选 B。原文依据：\"About 100 people were looking for him but no one thought to look under the sunbeds, where young Tommy had been sheltering from the sun\"。",
            "transcript": "It was every parent's nightmare yesterday when a six-year old boy, Tommy Black, went missing while on holiday in Brighton. He'd been playing on the beach with his brother and sister and suddenly he disappeared. He'd been paddling in the sea but there was no sight of him there. They ran to the ice cream seller nearby but he wasn't there. About 100 people were looking for him but no one thought to look under the sunbeds, where young Tommy had been sheltering from the sun."
          }
        ]
      },
      "2": {
        "title": "Part 2 · 句子填空",
        "instruction": "听旅行社介绍\"中国全景游\"。在 9-18 题的句子空格中填入一个词或短语。",
        "type": "blanks",
        "audio": "/audio/fce-mock/test-4/part-2.mp3",
        "transcript": "M: We are now offering our popular tour of China at an even cheaper price. It has been reduced from £2,490 to £2,290 per person. You will fly first class from Heathrow Airport to Shanghai. As this is an overnight flight, you will arrive refreshed in the morning ready for three days of sightseeing. Shanghai is the largest city by population in the world, with a population of over 26 million. It also has the busiest container port in the world. You will have a guided tour of the Shanghai Museum, which has over 120,000 pieces of bronze, coins, ceramics, paintings and other artifacts. You can also buy some lovely souvenirs in the museum shop. On day four of your exclusive Chinese tour you will have the chance to go on a cruise on the stunning Li River. You will witness the breath-taking landscape of the river with its picturesque fishing villages. The river winds through China's countryside for more than 105 miles, moving through numerous cities on its way. The next day you will visit the amazing Seven Star Cave at Guilin and the adjacent park, which is home to two adorable giant pandas. In the evening we will watch the incredible display of the cormorant birds catching the fish as we dine in a top-class restaurant by the river. The fish dishes are a house speciality here.\n\nOf course, no trip to China would be complete without a visit to one of the most important archaeological discoveries of the 20th century – the Terra-Cotta Warriors. The figures were created 2,000 years ago to accompany the first emperor of China to the afterlife. The Warriors and their horses were meant to protect the emperor. The figures were discovered in 1974 by some local farmers when they were digging water wells. They are still in perfect condition considering their age. The figures vary in height, with the tallest being the generals, and they include warriors, chariots and horses. It is estimated that there are over 8,000 warriors, 130 chariots and over 600 horses. And, if the excitement of the Terra-Cotta Warriors isn't enough, our last big attraction that you will be visiting is the Great Wall of China. The wall stretches for approximately 8,850 km, which is made up of 6,259 km of actual wall, 359 km of trenches and 2,232 km of natural defense barriers such as hills and rivers.\n\nNow, some practical advice about visiting the wall is important if you are really going to enjoy the experience to the full. We will take you to a section that is not as crowded as the main tourist areas. You do need to wear warm clothes, as it is quite cool at the wall, and be sure that you wear solid walking shoes. The climb up is steep and the steps are very uneven in their depth and height. This makes for a challenge but it's well worth the effort. For those people who really would struggle to walk up the wall, don't worry because there is actually a cable car that will take you right up to the top, where you can enjoy the views. So that is a quick summary of this fantastic tour of China. The tours do get filled pretty quickly so, if you are interested, you ought to reserve a place soon. You certainly won't regret it. Happy holidays!",
        "items": [
          {
            "q": "You will have a good night's sleep on your overnight flight to (9) ____.",
            "answer": [
              "Shanghai"
            ],
            "show": "Shanghai",
            "explanation": "航班从希思罗飞上海（Shanghai），过夜航班。原文依据：\"You will fly first class from Heathrow Airport to Shanghai. As this is an overnight flight\"。"
          },
          {
            "q": "Over (10) ____ people live in Shanghai.",
            "answer": [
              "26 million",
              "twenty-six million"
            ],
            "show": "26 / twenty-six million",
            "explanation": "上海人口超过 2600 万。原文依据：\"Shanghai is the largest city by population in the world, with a population of over 26 million\"。"
          },
          {
            "q": "You will see many pretty (11) ____ when you are on the Li River.",
            "answer": [
              "fishing villages"
            ],
            "show": "fishing villages",
            "explanation": "漓江沿岸有美丽的渔村（fishing villages）。原文依据：\"You will witness the breath-taking landscape of the river with its picturesque fishing villages\"。"
          },
          {
            "q": "The park at Guilin has two adorable (12) ____.",
            "answer": [
              "giant pandas"
            ],
            "show": "giant pandas",
            "explanation": "桂林公园里有两只可爱的大熊猫（giant pandas）。原文依据：\"The next day you will visit the amazing Seven Star Cave at Guilin and the adjacent park, which is home to two adorable giant pandas\"。"
          },
          {
            "q": "The Terra-Cotta Warriors were made to protect the Emperor to (13) ____.",
            "answer": [
              "the afterlife"
            ],
            "show": "the afterlife",
            "explanation": "兵马俑是为护送皇帝到\"the afterlife\"（来世）。原文依据：\"The figures were created 2,000 years ago to accompany the first emperor of China to the afterlife\"。"
          },
          {
            "q": "The Warriors were found by local farmers when they were building (14) ____.",
            "answer": [
              "water wells"
            ],
            "show": "water wells",
            "explanation": "当地农民挖井（water wells）时发现了兵马俑。原文依据：\"The figures were discovered in 1974 by some local farmers when they were digging water wells\"。"
          },
          {
            "q": "The tallest of the Warriors are (15) ____.",
            "answer": [
              "the generals"
            ],
            "show": "the generals",
            "explanation": "最高的兵马俑是将军（the generals）。原文依据：\"The figures vary in height, with the tallest being the generals\"。"
          },
          {
            "q": "The Great Wall is made up of actual wall, trenches and natural defense barriers such as (16) ____.",
            "answer": [
              "hills and rivers"
            ],
            "show": "hills and rivers",
            "explanation": "长城由实墙、壕沟以及 hills and rivers 等天然屏障组成。原文依据：\"The wall stretches for approximately 8,850 km, which is made up of 6,259 km of actual wall, 359 km of trenches and 2,232 km of natural defense barriers such as hills and rivers\"。"
          },
          {
            "q": "To climb up the wall you need to wear (17) ____ on your feet.",
            "answer": [
              "solid walking shoes"
            ],
            "show": "solid walking shoes",
            "explanation": "攀长城需穿结实步行鞋（solid walking shoes）。原文依据：\"You do need to wear warm clothes, as it is quite cool at the wall, and be sure that you wear solid walking shoes\"。"
          },
          {
            "q": "You can travel up to the top of the wall by (18) ____ if it's difficult for you to walk.",
            "answer": [
              "cable cars"
            ],
            "show": "cable cars",
            "explanation": "走不动的人可乘缆车（cable cars）登顶。原文依据：\"don't worry because there is actually a cable car that will take you right up to the top, where you can enjoy the views\"。"
          }
        ]
      },
      "3": {
        "title": "Part 3 · 多文本匹配",
        "instruction": "听 5 位从事旅游与旅游业的人士，将每位说话者匹配到 A-H 中的相应陈述。3 个选项不会被使用。",
        "type": "matching",
        "audio": "/audio/fce-mock/test-4/part-3.mp3",
        "options": [
          {
            "label": "A",
            "text": "I sometimes come across a fare evader."
          },
          {
            "label": "B",
            "text": "Some people come and stay in the hotel regularly."
          },
          {
            "label": "C",
            "text": "My job can be quite dangerous."
          },
          {
            "label": "D",
            "text": "Things don't always go exactly to plan at work."
          },
          {
            "label": "E",
            "text": "I'm aware how quickly accidents can happen."
          },
          {
            "label": "F",
            "text": "I took over the business when my father died."
          },
          {
            "label": "G",
            "text": "There's a chance my job could lead to greater things."
          },
          {
            "label": "H",
            "text": "I have a long commute to work."
          }
        ],
        "items": [
          {
            "speaker": "Speaker 1",
            "answer": "B",
            "explanation": "酒店经营者说\"we get lots of returners year after year\"，老客人常回头入住，对应 B。",
            "transcript": "The hotel has been in our family for nearly forty years. I kind of inherited it from my father when he retired, although he still helps out a bit during the peak season, as does my mother. It's very much a family affair, as my wife is the chef and my sister works on reception. I really enjoy the fact that we work as a team to keep the place running perfectly and we get lots of returners year after year, so we must be doing something right. I really can't imagine doing any other job."
          },
          {
            "speaker": "Speaker 2",
            "answer": "D",
            "explanation": "服务员说偶尔有上错菜或掉东西的小意外，对应 D（工作不总按计划进行）。原文依据：\"Still, we usually cope well, although there's inevitably some odd mishap like an incorrect order or something getting dropped or taken to the wrong table\"。",
            "transcript": "Funny enough, I prefer it when we are really busy. I get more tired standing around waiting for customers than when I'm rushing about serving food. In the peak season breakfast is obviously really busy, and even though it's a three-hour breakfast service, everyone seems to come down at about the same time so it can be quite chaotic. Still, we usually cope well, although there's inevitably some odd mishap like an incorrect order or something getting dropped or taken to the wrong table."
          },
          {
            "speaker": "Speaker 3",
            "answer": "A",
            "explanation": "列车员说整天待在火车上查票换班，对应 A（偶尔遇到逃票者）。原文依据：\"Every now and then I might get a fare-dodger. Most of them just pay up, but occasionally you get an aggressive one\"。",
            "transcript": "What I like about my job is that if you think about it, I never have to go to work. That sounds silly, doesn't it? But what I mean is that I get on the trains and I stay on them all day. I chop and change trains as they get to their destination and then I go off on another one, checking passengers' tickets and dealing with general enquiries. Every now and then I might get a fare-dodger. Most of them just pay up, but occasionally you get an aggressive one and the rail security guys deal with them at the next station."
          },
          {
            "speaker": "Speaker 4",
            "answer": "G",
            "explanation": "邮轮演艺人员提到有星探上船，许多 TV/戏剧演员从邮轮起步，对应 G（工作可能带来更大机会）。原文依据：\"You also get talent scouts checking out the ships. There are quite a few people on TV or in theatre that started out on the cruises\"。",
            "transcript": "I always wanted to be involved in the world of entertainment and there's a surprising amount of work on the cruises. People often don't think of cruising holidays as a way to get into showbiz, but it's a fantastic way to get experience on the stage. You also get talent scouts checking out the ships. There are quite a few people on TV or in theatre that started out on the cruises. Unfortunately, my lucky break hasn't happened yet but I live in hope."
          },
          {
            "speaker": "Speaker 5",
            "answer": "E",
            "explanation": "海滩救生员时刻扫描水面，强调危险瞬间发生，对应 E（意识到事故发生得多快）。原文依据：\"I'm constantly scanning the water to check that no one has got themselves into trouble. Little kids are always a particular worry, as one minute they are fine and then in a second a potentially dangerous situation might creep up on them\"。",
            "transcript": "People think I have an easy job on my chair all day on the beach topping up my tan and chatting to the holidaymakers. Actually it's an incredibly responsible and tiring job because you have to concentrate and be focussed all the time. I'm constantly scanning the water to check that no one has got themselves into trouble. Little kids are always a particular worry, as one minute they are fine and then in a second a potentially dangerous situation might creep up on them. The sea can always be a threat to young children. On the whole, everyone has a good time on the beach, though, and I really enjoy my job."
          }
        ]
      },
      "4": {
        "title": "Part 4 · 访谈选择",
        "instruction": "听 Southampton 大学就业指导老师 David Kennedy 谈间隔年（gap year）和海外工作。在 24-30 题中选出最佳答案。",
        "type": "mcq",
        "audio": "/audio/fce-mock/test-4/part-4.mp3",
        "transcript": "F: Today we have David Kennedy in the studio. David works at Southampton University as a careers officer. David, thank you for coming today.\nM: My pleasure, Sara.\nF: So, if a young person decides to take a gap year, it could end up being one of the best things they ever do, couldn't it?\nM: Absolutely, but it's important that they plan it correctly.\nF: So what exactly is a gap year?\nM: Contrary to the name, a gap year can actually be anything from just a few weeks to several years. There's no right or wrong way to spend your time but do make sure you make the most of it. One of the greatest things about a gap year is that it's yours to do with as you like.\nF: Can you run us through some of the most popular options? Going abroad to work is probably the most obvious one, isn't it?\nM: Yes, and other people may want to spend months on end travelling the world or being a volunteer somewhere. This is often done through charitable organisations and it's a great way to gain valuable work experience to strengthen a university or job application.\nF: I guess some people want to do a little bit of everything.\nM: Yes, a combination of earning money, seeing the world and gaining experience could be the perfect gap year.\nF: What about choosing where to go? Having the whole world at your fingertips must make it hard to know where to start.\nM: That's very true. It's one of the most important and potentially difficult decisions that you will make in your life. Whether you decide to go is completely up to you, of course, but there are a few things you should consider before making your decision. Most people head for the other side of the world. It's a gut reaction. People want to experience everything that far-flung countries have to offer: culture, exotic food, adventure, etc. However, you don't necessarily have to travel a long way to find all these things.\nF: What about language problems? I love to travel abroad but I always feel rather inadequate and embarrassed if I don't speak the language. The trouble is, so many people in the world speak English that it makes us a bit lazy, I'm afraid. I always make a point of learning a little bit of the language before I go abroad. It's good manners, isn't it?\nM: The ability to speak the local lingo is a huge advantage and may be a deciding factor when choosing your destination. It may be, for example, that you are fluent in Spanish, in which case Latin America may appeal. On the other hand, you may decide to throw yourself into learning a new language. Either way, being surrounded by the language every day will help your skills progress at great speed. You can't beat a bit of language immersion.\nF: David, as a parent, I know I would be worried about the safety of my children on a gap year.\nM: Taking sensible precautions while you are away will help you stay safe and reassure loved ones. As a general rule, if you wouldn't do it at home, don't do it abroad. The same rules of common sense still apply when travelling overseas. Unfortunately, a large proportion of youngsters forget this and that's when problems arise.\nF: One last thing then, David. How can someone prepare themselves for a change in culture?\nM: Obviously, adjusting to a different culture and environment is exciting but it can also be quite a shock. You should prepare yourself for an assault on the senses and embrace the differences and changes such as food, climate and customs. The most effective way to avoid or get over culture shock is to throw yourself into the new situation. Do not try to hide from it as this just won't work.\nF: It's been fascinating talking to you. Thank you very much.\nM: You're very welcome.",
        "items": [
          {
            "q": "According to David, a gap year",
            "opts": [
              "is about doing something that other people will approve of.",
              "shouldn't be shared with other people.",
              "is all about getting the best out of a situation."
            ],
            "answer": 2,
            "explanation": "David 强调\"make the most of it\"和\"it's yours to do with as you like\"，即从情境中获得最佳，选 C。"
          },
          {
            "q": "The advantage of voluntary work is that",
            "opts": [
              "it can help you pass university exams.",
              "you can learn a lot from it.",
              "you can work wherever you like."
            ],
            "answer": 1,
            "explanation": "David 说志愿工作\"great way to gain valuable work experience\"，可学到很多，选 B。"
          },
          {
            "q": "David believes that",
            "opts": [
              "you don't have to leave home to experience other cultures",
              "you need to travel a long way to gain the best experience.",
              "you can find adventure quite close to home."
            ],
            "answer": 2,
            "explanation": "David 说\"you don't necessarily have to travel a long way to find all these things\"，离家不远也能找到冒险，选 C。"
          },
          {
            "q": "When the interviewer goes abroad, she",
            "opts": [
              "feels uncomfortable if she only speaks English.",
              "is unwilling to speak a foreign language.",
              "just speaks English to everyone."
            ],
            "answer": 0,
            "explanation": "采访者说\"feel rather inadequate and embarrassed if I don't speak the language\"，只说英语会不自在，选 A。"
          },
          {
            "q": "David says",
            "opts": [
              "it's best to learn a word or two a day and not rush.",
              "being in a foreign country is the best way to learn a language.",
              "you really need to speak Spanish to visit Latin America."
            ],
            "answer": 1,
            "explanation": "David 说\"being surrounded by the language every day will help your skills progress at great speed\"，且\"You can't beat a bit of language immersion\"，即置身国外是学语言最佳途径，选 B。"
          },
          {
            "q": "When it comes to safety,",
            "opts": [
              "people just need to behave normally.",
              "don't try anything new when you are abroad.",
              "you need to follow a whole new set of rules."
            ],
            "answer": 0,
            "explanation": "David 说\"if you wouldn't do it at home, don't do it abroad. The same rules of common sense still apply\"，即正常行为即可，选 A。"
          },
          {
            "q": "How should one deal with a change in culture?",
            "opts": [
              "avoid it as long as you can until you are settled",
              "don't work at first, just have fun",
              "just accept it and adjust as you go along"
            ],
            "answer": 2,
            "explanation": "David 建议\"throw yourself into the new situation. Do not try to hide from it\"，即接受并适应，选 C。"
          }
        ]
      }
    }
  },
  {
    "meta": {
      "id": "fce-mock-5-listening",
      "title": "FCE 全真模拟试题 5 · Listening",
      "level": "FCE",
      "collection": "FCE 全真模拟试题（8套）",
      "book": "FCE 全真模拟试题（8套）",
      "paper": "Listening",
      "pages": "89–91",
      "source": "FCE 8套全真模拟试题.pdf",
      "answerSource": "Answer Key and Transcripts（书 179-183 页 / PDF 185-189，官方）",
      "verified": true
    },
    "parts": {
      "1": {
        "title": "Part 1 · 情境选择",
        "instruction": "听 8 段不同情境的短录音，每题从 A/B/C 中选出最佳答案。每段录音播放两次。",
        "type": "mcq_situation",
        "items": [
          {
            "scenario": "You overhear this technician speaking on the telephone.",
            "q": "What does he want the caller to do?",
            "opts": [
              "wait for a trained technician",
              "try adjusting the TV himself",
              "bring the TV to the shop"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-5/part-1-q1.mp3",
            "explanation": "技术人员说\"if you can just try changing the contrast and brightness controls\"、\"try repositioning the aerial\"，让客户自己先尝试调整电视，选 B。",
            "transcript": "Hello, Lunthan's service department ... Yes, we can repair a colour TV set ... What seems to be the problem? ... Yes ... yes ... uh, uh ... and the picture is permanently like this? ... And the sound? ... No, no, is the sound clear? ... OK ... Well, if you can just try changing the contrast and brightness controls – they're on the back of that model, and try repositioning the aerial ... and if there's no improvement, ring us again and we'll send a service engineer."
          },
          {
            "scenario": "You overhear this man speaking in a railway waiting room.",
            "q": "What is he describing?",
            "opts": [
              "the weather",
              "his working conditions",
              "a recent illness"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-5/part-1-q2.mp3",
            "explanation": "他说\"I had a shocking temperature, and feeling hot and cold all the time and shivering\"、\"I felt so dizzy I couldn't even stand up\"，是在描述最近的病情，选 C。",
            "transcript": "Well, touch wood, I'm completely over it now. I must have been away from my desk for almost a fortnight. Still, they seem to have got by all right without me. After all, I simply couldn't have gone into the office in my condition. I mean, I had a shocking temperature, and feeling hot and cold all the time and shivering, and a couple of days I felt so dizzy I couldn't even stand up ... but I'm back on my feet now. Mind you, apparently there's quite a pile of papers for me waiting when I get back to work."
          },
          {
            "scenario": "You overhear this exchange in an English café.",
            "q": "What does the man want the woman to do?",
            "opts": [
              "let him have the menu",
              "cook some food for him",
              "bring the food to his table"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-5/part-1-q3.mp3",
            "explanation": "男人说\"Can I take this over there to show my friends?\"指菜单，女人最终同意\"There you are\"，即让他拿走菜单，选 A。",
            "transcript": "F: Can I help you, love?\nM: Yes, we'd like something to eat ... er, does it all cost the same?\nF: Yes, all meals are five-fifty including side salad and a bap.\nM: That sounds all right. Can I take this over there to show my friends?\nF: Well, there is only one of them. Couldn't they come over here to have a look?\nM: Oh, go on. It'll only take a second.\nF: All right. There you are."
          },
          {
            "scenario": "You overhear a woman in the reception of a construction company answering the telephone.",
            "q": "What is the caller complaining about?",
            "opts": [
              "noise late at night",
              "damage done to his property",
              "noise early in the morning"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-5/part-1-q4.mp3",
            "explanation": "接待员说\"it is our company policy that no work begins before 7 am\"，说明顾客投诉施工太早（7点前就开始），选 C。",
            "transcript": "Oh, OK. We're very sorry about that indeed ... Yes? And your property is next door to the construction site? ... Well, sir, it is our company policy that no work begins before 7 am but we can check with the site manager to see if this rule has in fact been broken ... Well, I can't say anything about that but I think you'll find that if there's been no damage to your actual property, we are not legally required to pay compensation."
          },
          {
            "scenario": "You overhear this exchange in an office.",
            "q": "What does the woman want the man to do?",
            "opts": [
              "type the letter",
              "check the letter for spelling",
              "give his opinion of the letter"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-5/part-1-q5.mp3",
            "explanation": "女人说\"I just wondered if you could read through it and see if I've made any spelling mistakes\"，即请他检查拼写，选 B。",
            "transcript": "M: Oh, hi Amanda.\nF: Hello, David. I've just finished typing this letter ... You know, with the shipping inventory for Uni-Parcel Express Limited.\nM: And you want my opinion?\nF: Well, not really. I do know how to write a letter.\nM: Well, what's the problem then?\nF: I just wondered if you could read through it and see if I've made any spelling mistakes.\nM: OK, sure. Just send it through to my computer and I'll look at it later."
          },
          {
            "scenario": "You hear the results of football matches on a Saturday sports programme.",
            "q": "The West Bromwich-Albion game is different because",
            "opts": [
              "it was delayed by water on the pitch",
              "it was delayed by rain",
              "there was no score"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-5/part-1-q6.mp3",
            "explanation": "解说员说\"West Bromwich Albion – Wolverhampton game, which has been delayed by flooding of the pitch\"，即因球场积水延迟，选 A。",
            "transcript": "And now for some late results. Watford 3, Carlisle 0. Bolton Wanderers 1, Cardiff City 3. The Fulham-Brighton and Hove Albion match was postponed due to rain and we're still waiting for a score from the West Bromwich Albion – Wolverhampton game, which has been delayed by flooding of the pitch ... and ... Sheffield Wednesday 1, Coventry 0, Oxford United 2, Lyme Regis 9 ... FADE"
          },
          {
            "scenario": "You hear this announcement at a rock concert.",
            "q": "The next song has been specially written for",
            "opts": [
              "disabled people",
              "people with a certain disease",
              "children in hospital"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-5/part-1-q7.mp3",
            "explanation": "歌手说\"This song is for Simon and anyone else with cerebro-spinal arthritis\"，即献给患 cerebro-spinal 关节炎的病人，选 B。",
            "transcript": "... Thank you, thank you very much. I just want to tell you about one of our fans who can't be here tonight. His name is Simon and right now he's in Southcliff Memorial hospital not far from here. I just want to tell you that he's a brave little guy because he's also very sick, but he's promised to come to our next gig in the UK when he's better and can walk again. This song is for Simon and anyone else with cerebro-spinal arthritis."
          },
          {
            "scenario": "You are a passenger travelling in a car when you are stopped by a policeman.",
            "q": "The reason the man has been stopped is because",
            "opts": [
              "there is a fault with his car",
              "there has been an accident",
              "his car crossed a red traffic light"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-5/part-1-q8.mp3",
            "explanation": "警察说\"your tail-lights are not functioning\"，即车灯故障，选 A。",
            "transcript": "M1: Excuse me, sir. Can I see your licence, please? ... and the insurance documents? ... This is your car I presume.\nM2: Yes, it is my car.\nM1: It's just I did happen to notice while you were stationary at the traffic lights back there, that your tail-lights are not functioning. Were you aware of that?\nM2: Um, yes, the garage is waiting for the part.\nM1: Well then, could I ask you to refrain from using the vehicle in the meantime? Otherwise, there'll be an accident."
          }
        ]
      },
      "2": {
        "title": "Part 2 · 句子填空",
        "instruction": "听暑期学校负责人的介绍讲话。在 9-18 题的句子空格中填入一个词或短语。",
        "type": "blanks",
        "audio": "/audio/fce-mock/test-5/part-2.mp3",
        "items": [
          {
            "q": "The students will be attending (9) ____ College.",
            "answer": [
              "Trinity"
            ],
            "show": "Trinity",
            "explanation": "讲话开头\"I'd like to welcome you to Trinity College\"，答案为 Trinity。"
          },
          {
            "q": "The students at the talk will be studying (10) ____ on their course.",
            "answer": [
              "History"
            ],
            "show": "History",
            "explanation": "\"For you, the History students, most of your seminars will be held from 9.00-12.30 in rooms 201 and 95\"，明确点出 History students，答案为 History。"
          },
          {
            "q": "From nine to (11) ____, rooms 201 and 95 will be used for seminars.",
            "answer": [
              "12.30",
              "twelve thirty",
              "half past twelve"
            ],
            "show": "12.30 / twelve thirty",
            "explanation": "\"most of your seminars will be held from 9.00-12.30 in rooms 201 and 95\"，即研讨会到 12.30 结束。"
          },
          {
            "q": "At 10.30 everyone has a (12) ____ for twenty minutes.",
            "answer": [
              "coffee break",
              "break",
              "(coffee) break"
            ],
            "show": "(coffee) break",
            "explanation": "\"There is always a coffee break at 10.30 for 20 minutes\"。"
          },
          {
            "q": "The duration of the course will be (13) ____ with visiting lecturers.",
            "answer": [
              "8",
              "eight",
              "8 weeks",
              "eight weeks"
            ],
            "show": "8 / eight weeks",
            "explanation": "\"the eight-week course that you are following\"，即为期八周的课程。"
          },
          {
            "q": "On Saturday 5th July a visit is scheduled to the (14) ____ in the afternoon.",
            "answer": [
              "British Museum"
            ],
            "show": "British Museum",
            "explanation": "\"the trip to the British Museum on Saturday 5th July\"。"
          },
          {
            "q": "Students should see the Parthenon marbles and the (15) ____ as part of their studies.",
            "answer": [
              "Egyptian mummies"
            ],
            "show": "Egyptian mummies",
            "explanation": "\"particularly famous for the Parthenon marbles and the Egyptian mummies\"。"
          },
          {
            "q": "The (16) ____ is open from Monday to Thursday from 12.00 to 2.30 pm and 5.00 to 8.00 pm.",
            "answer": [
              "canteen"
            ],
            "show": "canteen",
            "explanation": "\"The canteen is open daily from 12.00-2.30 pm and again from 5.00-8.00 pm\"。"
          },
          {
            "q": "All sports facilities except for (17) ____ are free.",
            "answer": [
              "aerobics",
              "aerobics classes"
            ],
            "show": "aerobics classes",
            "explanation": "\"all free with the exception of the aerobics classes\"。"
          },
          {
            "q": "The accommodation officer is in Room 16, in (18) ____, if students have any problems.",
            "answer": [
              "Western House"
            ],
            "show": "Western House",
            "explanation": "\"the accommodation officer in Room 16 in Western House\"。"
          }
        ],
        "transcript": "Good morning. I'd like to welcome you to Trinity College. It's good to see so many new faces here today, although I'm sure most of you are feeling a little lost at the moment. I'm here to give you plenty of information about the college generally and about the course, and I'll be more than happy to answer any questions at the end.\n\nAt this college we teach English Literature, History, Archaeology, Art History and Music. For you, the History students, most of your seminars will be held from 9.00-12.30 in rooms 201 and 95. There is always a coffee break at 10.30 for 20 minutes, though.\n\nMany of your lecturers teach here at the college all year round, although we also have some very talented visiting lecturers who will just be here for the eight-week course that you are following. In the afternoons there will be many field trips which will include castles, museums and stately homes. The highlight of this is always the trip to the British Museum on Saturday 5th July. This museum is particularly famous for the Parthenon marbles and the Egyptian mummies, which are an important part of your course and so must be seen.\n\nThe canteen is open daily from 12.00-2.30 pm and again from 5.00-8.00 pm, although on Fridays it closes at 7.00 pm. There are also recreational facilities in the leisure centre. These are available every day and all free with the exception of the aerobics classes. I recommend that you take advantage of the excellent sports facilities here, particularly Olympic-size swimming pool.\n\nIf any of you have any problems with your accommodation, which I think is highly unlikely, you can find the accommodation officer in Room 16 in Western House. Her name is Mrs. Grosvenor and she will be pleased to help you. If there are any questions, now is the time to ask them."
      },
      "3": {
        "title": "Part 3 · 多文本匹配",
        "instruction": "听 5 段关于工作中涉及儿童事件的短录音，将每位说话者匹配到 A-H 中的对应职业。3 个选项不会被使用。",
        "type": "matching",
        "audio": "/audio/fce-mock/test-5/part-3.mp3",
        "options": [
          {
            "label": "A",
            "text": "shop assistant"
          },
          {
            "label": "B",
            "text": "doctor"
          },
          {
            "label": "C",
            "text": "executive"
          },
          {
            "label": "D",
            "text": "nursery teacher"
          },
          {
            "label": "E",
            "text": "bus driver"
          },
          {
            "label": "F",
            "text": "lawyer"
          },
          {
            "label": "G",
            "text": "video games expert"
          },
          {
            "label": "H",
            "text": "debt collector"
          }
        ],
        "items": [
          {
            "speaker": 1,
            "answer": "A",
            "explanation": "Speaker 1 描述在商店工作，看到小孩\"picked up a crystal decanter\"后\"there was an almighty crash\"、小孩跑回妈妈身边，是商店售货员。",
            "transcript": "It was an unusually slow Saturday morning, just after the New Year sales, as I recall. I didn't have much to pay attention to at the time and that's how I came to be looking at a youngster in a green and purple shell-suit as he picked up a crystal decanter, looked at it and then put it back on the shelf. But he didn't quite get it right because the next thing I knew, there was an almighty crash. Well, of course, he immediately went running back off to his mum. So, I was more than a little put out when his mum insisted that he'd been right there by her side all the time, so how could he have done it? A very proper lady she was, too."
          },
          {
            "speaker": 2,
            "answer": "D",
            "explanation": "Speaker 2 描述照顾幼儿，\"little four year-old called Josh\"、\"my group\"，是幼儿园老师。",
            "transcript": "It was some time mid-morning after second break when a little four year-old called Josh came up to me and said his tummy was hurting. Now, we get this all the time so, at first, I didn't pay too much attention but then a few minutes later, I noticed the same kid sitting on his own away from the others – crying and holding his tummy. He was also sweating and looking really pale. So, after quickly phoning his mum, I asked Sam to take care of my group, bundled Josh into the car and whisked him round to the children's clinic on Preston Road, and it's just as well I did, as it turned out to be appendicitis."
          },
          {
            "speaker": 3,
            "answer": "E",
            "explanation": "Speaker 3 描述\"half a mile from the school\"、\"pulled over\"、\"the door at the front\"、\"lost my licence\"，是巴士司机。",
            "transcript": "Well, I'd only got about half a mile from the school when I noticed this commotion going on in the back. So, I pulled over and stopped and then went down there to see what all the fuss was about. Anyway, there was this really little lad lying on the floor crying his eyes out, and all his books, pens and pencils were all over the floor and there were three or four pieces of chewing gum pressed into his hair. Anyway, I knew straightaway who'd done it because they were making for the door at the front. But I'd shut it when I'd stopped. Not that I could do very much. If I'd laid a finger on any of them, I'd have lost my licence."
          },
          {
            "speaker": 4,
            "answer": "C",
            "explanation": "Speaker 4 描述做市场调研，\"market research\"、\"market potential\"、\"child psychologist\"，是企业高管。",
            "transcript": "Toys aren't at all like other products when it comes to market research. I mean, you can't go out in the street with a clipboard and a questionnaire to assess the response of 5-year-olds to a new inflatable dinosaur. You have to get twenty of them together in a room with a child psychologist present to get some idea of the market potential of anything new. I do remember one occasion when a certain four-year-old managed to break everything we presented him within a matter of seconds. Needless to say, he wasn't invited back again."
          },
          {
            "speaker": 5,
            "answer": "F",
            "explanation": "Speaker 5 描述法律案件，\"In legal terms\"、\"custody of the child\"、\"collecting my fee\"，是律师。",
            "transcript": "In legal terms, there really should have been no contest at all. The mother had remarried a very respectable gentleman and she was being very reasonable about things. After all, it was the husband who had divorced her and she still let him keep the house in Watford. All she wanted was to have custody of the child. And according to her rights, she should have ... if it weren't for the child herself. Jenny she's called, just won't see sense. She's remarkably grown-up for a six-year old and we've talked it over at length. But she just insists on staying with her dad in that run-down maisonette. And until she comes round to our point of view, I won't be collecting my fee."
          }
        ]
      },
      "4": {
        "title": "Part 4 · 访谈选择",
        "instruction": "听两位朋友 Tina 和 Barry 讨论英国国家彩票。在 24-30 题中从 A/B/C 中选出最佳答案。",
        "type": "mcq",
        "audio": "/audio/fce-mock/test-5/part-4.mp3",
        "transcript": "M: Hey, Tina, what's up with you? You look like you've been to a funeral.\nF: Oh, nothing really. I guess I've just had a bad week and then only one of my numbers came up last night.\nM: You're still doing that stupid old lottery? It's enough to make anyone depressed. I haven't got a good word to say about it myself. All the fuss they make on that silly programme on Saturday night.\nF: But everyone's doing it. The paper says it's the biggest lottery in the world. Over twenty million people entered last week, which is a lot if you consider that it's only open to people over eighteen.\nM: Well, that's a good thing, otherwise all the kids would be spending all their pocket money on it. How much are you spending on it these days?\nF: Well, this week, I spent ten pounds.\nM: Ten pounds! No wonder you're fed up, Tina.\nF: I got five entries and the other five pounds went on scratch cards.\nM: And you've been doing this every week since it started?\nF: No, this week was special. I just thought I was going to be lucky but I've had at least 1 entry a week. It seems silly not to.\nM: But you've lost all that money. And it's all gone to Camelot.\nF: They don't keep the money – they give it all to charity and the arts.\nM: They don't give it all away. They keep a lot of the money and then they get rich while you get poor.\nF: But I might win. Then we'd be millionaires.\nM: When are you going to realise you're not going to win? Not with twenty million other people playing. Look, how many people do you know who have won anything?\nF: Well, er ... oh, yes. The man at the paper shop said that there's another customer who has won a hundred pounds, and I believe him.\nM: Well, that's useless. You've probably spent more than a hundred pounds already.\nF: I suppose you've never even played once.\nM: No. Oh well, just the once. The lads and I at work did have a go when it started.\nF: You mean you were a syndicate.\nM: Oh yes, that's the new word for it now. Anyway, after that first week, I just decided I wasn't going to waste any more of my precious money on it. Besides, I don't think it's right. Somebody getting all that money – twenty million or more – for doing nothing. My dad always says: 'God helps those who help themselves'.\nF: But that's not going to help me win next week's jackpot.\nM: Don't do it, Tina.\nF: But I want the money.\nM: And so do we all, but, if I needed extra cash, I'd go and do the overtime work – earn the money in an honest way. You could get a better job instead of going down to the lottery shop.\nF: Well, I was thinking of giving it a miss next week, anyway. Maybe that's what I'll do. An extra ten pounds would come in handy.\nM: Yeah. Er, treat yourself to something nice. You need a bit of cheering up.\nF: I know – we could go on a day trip to Boulogne. I fancy something a bit cultural, especially with Christmas just around the corner.",
        "items": [
          {
            "q": "How does the man feel about the lottery?",
            "opts": [
              "It is silly but entertaining.",
              "There is nothing good about it.",
              "It is particularly bad for young people."
            ],
            "answer": 1,
            "explanation": "Barry 说\"I haven't got a good word to say about it myself\"，即对彩票没有任何好话，选 B。"
          },
          {
            "q": "Who can play the national lottery?",
            "opts": [
              "anyone older than 18",
              "only 20 million people",
              "anyone"
            ],
            "answer": 0,
            "explanation": "Tina 说\"it's only open to people over eighteen\"，即仅限 18 岁以上，选 A。"
          },
          {
            "q": "Why was this week special for Tina?",
            "opts": [
              "She felt lucky.",
              "She went to Camelot.",
              "She had money to spend."
            ],
            "answer": 0,
            "explanation": "Tina 说\"this week was special. I just thought I was going to be lucky\"，觉得自己会走运，选 A。"
          },
          {
            "q": "What does Tina think the lottery company does with the money it makes?",
            "opts": [
              "They keep it for themselves.",
              "They give it all to art galleries.",
              "They give it to charities and other organisations."
            ],
            "answer": 2,
            "explanation": "Tina 说\"they give it all to charity and the arts\"，即捐给慈善和艺术机构，选 C。"
          },
          {
            "q": "How often has Barry played the lottery?",
            "opts": [
              "never",
              "once only",
              "once in a while"
            ],
            "answer": 1,
            "explanation": "Barry 说\"No. Oh well, just the once. The lads and I at work did have a go when it started\"，即只玩过一次，选 B。"
          },
          {
            "q": "What does Barry's dad's saying mean?",
            "opts": [
              "Work for your money.",
              "Try to win the lottery.",
              "It is difficult to win the lottery."
            ],
            "answer": 0,
            "explanation": "Barry 爸爸说\"God helps those who help themselves\"，即天助自助者，要自己努力赚钱，选 A。"
          },
          {
            "q": "What is Tina going to do next week?",
            "opts": [
              "buy one more lottery ticket for herself",
              "work overtime and look for a better job",
              "spend her lottery ticket money on something else"
            ],
            "answer": 2,
            "explanation": "Tina 说\"I was thinking of giving it a miss next week\"、\"we could go on a day trip to Boulogne\"，即不买彩票，把钱花在别处，选 C。"
          }
        ]
      }
    }
  },
  {
    "meta": {
      "id": "fce-mock-6-listening",
      "title": "FCE 全真模拟试题 6 · Listening",
      "level": "FCE",
      "collection": "FCE 全真模拟试题（8套）",
      "book": "FCE 全真模拟试题（8套）",
      "paper": "Listening",
      "pages": "108–110",
      "source": "FCE 8套全真模拟试题.pdf",
      "answerSource": "Answer Key and Transcripts（书 185-188 页 / PDF 191-194，官方）",
      "verified": true
    },
    "parts": {
      "1": {
        "title": "Part 1 · 情境选择",
        "instruction": "听 8 段不同情境的短录音，每题从 A/B/C 中选出最佳答案。每段录音播放两次。",
        "type": "mcq_situation",
        "items": [
          {
            "scenario": "You hear this announcement at a public celebration.",
            "q": "Why does the speaker want the car moved?",
            "opts": [
              "It is parked inconveniently.",
              "It is parked illegally.",
              "Somebody has complained."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-6/part-1-q1.mp3",
            "explanation": "广播说\"if your car remains there, the floats won't be able to get past\"，即车停在不方便的位置挡住了花车，选 A。",
            "transcript": "Er ... Excuse me, everybody ... This will take only a minute. We have an announcement and the announcement is: Could the owner of the grey Skoda, registration CRA179P please move his car from its parking space at the far end of the street?\nSorry, we appreciate this is your legal parking space, but if your car remains there, the floats won't be able to get past and then everybody will be complaining."
          },
          {
            "scenario": "You overhear an assistant in a shop speaking to a customer.",
            "q": "What is the problem?",
            "opts": [
              "The battery was too old.",
              "The battery was incorrectly fitted.",
              "There was no battery."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-6/part-1-q2.mp3",
            "explanation": "店员说\"this should be put in this way around with the little metal bit pointing down\"，即电池装反了，选 B。",
            "transcript": "Ah well ... there doesn't appear to be anything the matter with the camera itself. But I don't think you paid much attention to the instruction manual. It's really important to read that stuff. Anyway, if you look here into the battery compartment, this should be put in this way around with the little metal bit pointing down towards the base of the camera ... and then if you depress the shutter just a bit, you'll see this little light comes on – so now we have power."
          },
          {
            "scenario": "You hear part of a radio phone-in programme.",
            "q": "What is the caller asking the expert about?",
            "opts": [
              "gardening",
              "cheesemaking",
              "travel"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-6/part-1-q3.mp3",
            "explanation": "Cecilia 说\"I've been having quite a lot of trouble with my Swiss Cheese plant\"，即问园艺问题，选 A。",
            "transcript": "M: And our first caller today is Cecilia. Cecilia, what is your question for Gerald?\nF: Well, I've been having quite a lot of trouble with my Swiss Cheese plant. I just can't get it to do what I want. It is in quite a large pot now. I transplanted it last spring, but the leaves and stems haven't spread out at all. I've been wondering if it could be root-bound.\nM: Well, Cecilia, this is more common than you might think. What you've got to do is ..."
          },
          {
            "scenario": "You overhear this conversation in the lobby of an expensive hotel.",
            "q": "What does the woman want the man to do?",
            "opts": [
              "not take a photograph",
              "stop smoking",
              "not bring his dog in the building"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-6/part-1-q4.mp3",
            "explanation": "女人说\"the flash disturbs other visitors and damages the colouring in our priceless antique paintings\"，即不让他拍照，选 A。",
            "transcript": "F: I'm terribly sorry, sir, but we can't allow you to do that here.\nM: But why ever not? I've paid my money, now just leave me alone.\nF: I'm awfully sorry, but we simply can't allow it. You see, the flash disturbs other visitors and damages the colouring in our priceless antique paintings.\nM: Well, what about that man over there with the dog?\nF: I think you will find, sir, that he is not using a flash.\nM: Well, I'm going to talk to the manager."
          },
          {
            "scenario": "You hear this woman talking on the phone.",
            "q": "What time does she arrange to meet Peter?",
            "opts": [
              "3.45",
              "4.15",
              "4.45"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-6/part-1-q5.mp3",
            "explanation": "女人说\"we can meet at quarter to four and I'll still get to the meeting for 4.15\"，quarter to four 即 3.45，选 A。",
            "transcript": "Well, Peter, I do have rather a tight schedule on Friday ... let's see ... at 3.30 I've a meeting with my agent. That goes on till 3.45 and then I have to drive to the office for the departmental heads meeting at 4.15 and that won't be finished till quarter to six at the earliest ... No, I know what. I'll cancel my agent. After all, I'm the one who's paying his fee. He'll just have to lump it ... and then we can meet at quarter to four and I'll still get to the meeting for 4.15."
          },
          {
            "scenario": "You hear this woman speaking on a TV travel programme.",
            "q": "The company",
            "opts": [
              "had too many clients.",
              "was the sole cause of a problem.",
              "was forced to pay out money."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-6/part-1-q6.mp3",
            "explanation": "公平贸易办公室声明\"Horden's Limited should provide compensation of no less than sixty pounds\"，即公司被迫赔钱，选 C。",
            "transcript": "F: ... and now turning to a subject that we discussed last week. We have had a number of phone calls from other customers who also suffered the same inconvenience as a result of booking \"Horden Sun and Save\" package deals last summer. We've also been informed that the Office of Fair Trading have, in fact, carried out an investigation and issued the following statement ...\nM: While not directly responsible, Horden's Limited should provide compensation of no less than sixty pounds for each individual ..."
          },
          {
            "scenario": "You overhear this man talking in a fast food restaurant.",
            "q": "What is he talking about?",
            "opts": [
              "his pet cat",
              "his daughter",
              "his pet parrot"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-6/part-1-q7.mp3",
            "explanation": "男人说\"she was in it\" (washing machine)、\"she ran for her life\"、\"She spends most of the day in the garden trying to catch birds\"，描述的是宠物猫，选 A。",
            "transcript": "Well, Samantha's really calmed down in the last month or so. It's taken a while, but she's getting back to her normal self. I still can't believe I closed the door of the washing machine while she was in it. She must have been asleep. I certainly didn't see her. Anyway, as I was about to put the washing powder in, I heard a noise from inside, and saw something move. It scared the life out of me. I opened the door and she ran for her life. Mind you, it wouldn't have done her any harm to have a wash. She spends most of the day in the garden trying to catch birds."
          },
          {
            "scenario": "You hear a free phone message about a new product.",
            "q": "The Brain-Booster is claimed to",
            "opts": [
              "make the user's brain bigger",
              "make the user more clever",
              "help people with poor memories"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-6/part-1-q8.mp3",
            "explanation": "广告说\"raising your intelligence level by as much as 40 IQ points\"，即让人更聪明，选 B。",
            "transcript": "Thank you for phoning the Positronic Information Service regarding the new Brain-Booster Theta-Wave Expander. You have already read our newspaper advertisement and will know that over a six-month period the Brain-Booster is capable of raising your intelligence level by as much as 40 IQ points without affecting other brain functions such as memory. If you wish to hear an example of the Brain-Booster's unique Theta-Wave Stimulator, please listen after the tone."
          }
        ]
      },
      "2": {
        "title": "Part 2 · 句子填空",
        "instruction": "听关于过山车的节目。在 9-18 题的句子空格中填入一个词或短语。",
        "type": "blanks",
        "audio": "/audio/fce-mock/test-6/part-2.mp3",
        "items": [
          {
            "q": "You can't stop a car in a roller coaster because it has no (9) ____ on it.",
            "answer": [
              "brakes"
            ],
            "show": "brakes",
            "explanation": "\"With no brakes on board. Yes, you pay your money to get shaken and scared.\"。"
          },
          {
            "q": "The roller coasters are made at the (10) ____ of Great Salt Lake, in Utah.",
            "answer": [
              "shores"
            ],
            "show": "shores",
            "explanation": "\"The shores of Utah's Great Salt Lake.\"。"
          },
          {
            "q": "The designers don't want to make people feel (11) ____.",
            "answer": [
              "sick"
            ],
            "show": "sick",
            "explanation": "\"Artists can make you sick, but they won't.\"。"
          },
          {
            "q": "The (12) ____ is the most difficult part of the ride to design.",
            "answer": [
              "track"
            ],
            "show": "track",
            "explanation": "\"The real art comes in designing the track.\"。"
          },
          {
            "q": "The roller coaster gets its energy from (13) ____ which is a natural source.",
            "answer": [
              "gravity"
            ],
            "show": "gravity",
            "explanation": "\"The roller coaster uses gravity. That's the energy from having been carried up a lift.\"。"
          },
          {
            "q": "The current fastest roller coaster travels at (14) ____ miles per hour.",
            "answer": [
              "85",
              "eighty-five"
            ],
            "show": "85 / eighty-five",
            "explanation": "\"The current record is 85 mph.\"。"
          },
          {
            "q": "The Pipeline is the next step in roller coaster (15) ____.",
            "answer": [
              "design"
            ],
            "show": "design",
            "explanation": "\"The next step in coaster design is called a Pipeline.\"。"
          },
          {
            "q": "The Grand Slam Canyon in Las Vegas is the biggest (16) ____ roller coaster in the world.",
            "answer": [
              "indoor"
            ],
            "show": "indoor",
            "explanation": "\"the biggest indoor coaster in the world – Grand Slam Canyon, in Las Vegas.\"。"
          },
          {
            "q": "In the future, coasters may have (17) ____ helmets.",
            "answer": [
              "virtual reality"
            ],
            "show": "virtual reality",
            "explanation": "\"a coaster with a virtual reality helmet attached to it\"。"
          },
          {
            "q": "A roller coaster travels faster when it is heavy, and the air is (18) ____ but dry.",
            "answer": [
              "warm"
            ],
            "show": "warm",
            "explanation": "\"Any roller coaster will go faster when the air is warm but dry and when it's heavier.\"。"
          }
        ],
        "transcript": "A roller coaster is exciting and dangerous at the same time. With no brakes on board. Yes, you pay your money to get shaken and scared. And the amusement parks wouldn't have it any other way. In fact, there has been lawsuits over who had the tallest coaster in the world, who had the fastest and that kind of thing.\nSo, where do you go to meet the twisted minds that come up with all this twisted metal? You go to a place where there isn't even a roller coaster in sight. The shores of Utah's Great Salt Lake.\nHere art becomes life. Artists can make you sick, but they won't. There are certain things that do that – our experience and knowledge of what forces and geometries do to people that we won't do, and that we refuse to do. It's only in the shop at Aerodynamics that the need for speed is satisfied. The cars are easy, fibreglass frames over a steel chassis. The real art comes in designing the track.\nThe roller coaster uses gravity. That's the energy from having been carried up a lift. The science is making sure that once that potential energy is released, there's enough to get the car back to the station. The art is spending that energy in new and interesting ways. And that means engineering maximum height, maximum drops and maximum Gs or no Gs at all. But, above all, coasters are about maximum speed. The current record is 85 mph.\nThere's even a psychological element to coaster design. How much do you want your riders to be aware of their predicament? With a roller coaster that doesn't look especially large, speeds are very high. You know exactly what's going on around you. There's more of a fear factor; it's scarier – it really is.\nThe next step in coaster design is called a Pipeline. Our current coasters, when you bank into a corner, you rock back and forth. But the Pipeline puts the point of rotation right in the centre of your chest so that we can just flip you over really quick. And it allows you to do barrel rolls, snap rolls and other aeroplane acrobatic-type manoeuvres. So that's roller-coaster science – make it fast, make it safe and give it a vicious name. After that, build it and they will come.\nAnd what's the next step in roller coaster? The tallest, the fastest, the biggest, indoor? Well, anyway, you got the point. Here it is, the biggest indoor coaster in the world – Grand Slam Canyon, in Las Vegas. A two loop with corkscrew, 24-hundred-foot, 40-plus mile-an-hour screamer.\nAnd the next step beyond this? I think the next generation of coasters is going to have elements of ride and technology that is employed currently in simulators' thinking. I see a combination of those two kinds of things. A roller coaster with digital displays or maybe a coaster with a virtual reality helmet attached to it so you get the G-forces and you maybe get some different visual sensations, things like that.\nThe most expensive technology in a roller coaster is in the wheels. The tyres cost five times what they do on your car. The same goes for the brakes.\nAnd, finally, a physics lesson. Any roller coaster will go faster when the air is warm but dry and when it's heavier. So if you're going to do it right, get some of your friends together, pack that car and ride on a warm autumn day."
      },
      "3": {
        "title": "Part 3 · 多文本匹配",
        "instruction": "听 5 段关于世界各地不同寻常乐器的短录音，将每位说话者的乐器匹配到 A-H 中最符合的描述。3 个选项不会被使用。",
        "type": "matching",
        "audio": "/audio/fce-mock/test-6/part-3.mp3",
        "options": [
          {
            "label": "A",
            "text": "It is made entirely of wood."
          },
          {
            "label": "B",
            "text": "It is similar to a guitar."
          },
          {
            "label": "C",
            "text": "It is played by blowing through it."
          },
          {
            "label": "D",
            "text": "It would be difficult to transport."
          },
          {
            "label": "E",
            "text": "It can no longer be made."
          },
          {
            "label": "F",
            "text": "It serves another purpose."
          },
          {
            "label": "G",
            "text": "It can only be found in Japan."
          },
          {
            "label": "H",
            "text": "It is entirely made of rosewood."
          }
        ],
        "items": [
          {
            "speaker": 1,
            "answer": "D",
            "explanation": "Speaker 1 的乐器由\"46 silver alloy bells\"组成，\"some of these bells weigh as much as 40 kilograms\"，难以运输，选 D。",
            "transcript": "There are only two examples of this instrument in the world – one in a museum in Japan and one recently unearthed in southern China. Many experts do not consider it to be one instrument, as it is made up of 46 silver alloy bells, each suspended from its own supporting wooden frame. I must mention that some of these bells weigh as much as 40 kilograms. What makes this assembly one instrument, in my opinion, is the fact that each one of the forty six bells plays a separate note and that the wooden supporting structure has been designed so that they fit together in an ascending scale rather like the strings inside a piano or the frets on a guitar."
          },
          {
            "speaker": 2,
            "answer": "E",
            "explanation": "Speaker 2 的鼓用象牙制成，\"since international trade in ivory has been made illegal, few of these instruments have been made\"，已无法再制作，选 E。",
            "transcript": "What gives this drum its unique mellow tone is the fact that the bowl around which the skin has been stretched is made from a single piece of white ivory. The outer surface of the bowl has been carved with special places for the fingers. In each of these there is a hole that the player can cover with one of the fingers of his left hand to slightly alter the tone as he beats the skin with his right hand. The finger movements of the left hand are not dissimilar to those used with a guitar. It is, perhaps, rather sad that since international trade in ivory has been made illegal, few of these instruments have been made. There is a risk that the tradition behind its production will soon be lost forever."
          },
          {
            "speaker": 3,
            "answer": "F",
            "explanation": "Speaker 3 的手鼓在庆典中使用并\"drive away the evil spirits\"，即另有用途，选 F。",
            "transcript": "What is particularly interesting about this traditional hand drum are the unique red and gold patterns painted on its wooden underside. This, of course, does not affect the sound but reflects the social importance of this instrument for the Sachawaya tribe who produce it. They believe that as a result of its use in pubic celebrations, it is filled with the good spirits of the community. Then, later in the year, when the autumn winds begin to blow, the drum can be displayed outside a building of importance to drive away the evil spirits that may cause destruction in the winter ahead."
          },
          {
            "speaker": 4,
            "answer": "B",
            "explanation": "Speaker 4 的乐器有五根弦，\"similar to that of a classical guitar\"，类似吉他，选 B。",
            "transcript": "The stem and sound-box of this instrument are made from the wood of the eucalyptus tree. This is quite a soft wood which means that the instrument goes out of tune very rapidly. The craftsmen who construct them still use stretched snake-gut to make the five strings. This, of course, makes the instrument very expensive, and it was traditionally only played by tribal chiefs and their families. Surprisingly, not only its appearance but the tuning as well are similar to that of a classical guitar, suggesting that this tribe must have had some contact with the outside world long before the twentieth century."
          },
          {
            "speaker": 5,
            "answer": "A",
            "explanation": "Speaker 5 的乐器\"The curved base and supporting structure of this instrument are made of matured rosewood\"、钉子是 ebony 木、锤子是 willow 木，全木制，选 A。",
            "transcript": "The curved base and supporting structure of this instrument are made of matured rosewood, while the nails that hold the blocks are traditionally made of ebony, which was the hardest wood available until recently. Four different trees are used to make the blocks themselves, which are matured in different ways to give each one its own individual note. The special hammers are fashioned by hand from willow, a wood still widely used in the manufacture of guitars. As a result of its construction, the instrument is surprisingly light, making it easy for the Nabungda tribe to use it at its various social functions and annual celebrations."
          }
        ]
      },
      "4": {
        "title": "Part 4 · 访谈选择",
        "instruction": "听一位女士和一位男士在火车上的对话。在 24-30 题中从 A/B/C 中选出最佳答案。",
        "type": "mcq",
        "audio": "/audio/fce-mock/test-6/part-4.mp3",
        "transcript": "F: It's me again ... no ... no, look, this is no good. I'm talking to you on my mobile and the train keeps going into tunnels and we get cut off. Yes, I know this is important ... Look, I'll phone you again when I get off to change trains at Haywards Heath ... Okay then ...\nM: Er, ... excuse me, did I just hear you say Haywards Heath?\nF: Well, er ... yes ... that's where...\nM: But isn't this the train for Salisbury? I mean, that's what it said on the board.\nF: Oh, I think you should have been in the front four coaches. You see, the train divided at Redhill and this is one of the rear four coaches, which goes on to Brighton.\nM: Oh, oh ... but that's impossible – it didn't say anything on the announcement board. How ... how did you know?\nF: They made an announcement. Didn't you hear it?\nM: Er ... no. I can't believe this is happening.\nF: Well, if you don't believe me, go and ask the guard.\nM: Oh ... hang on ... If this is the Brighton train, I haven't got the right ticket. I could end up having to pay extra and I've only got plastic, which he won't accept.\nF: Well, what you could do is get off at the next station and get the next train going back to Redhill. Let's see, the last one was Three Bridges, so we should be arriving in Balcombe in just a minute.\nM: And I can just get on another train without showing my ticket?\nF: Ah, now that's a point. That'll be a bit difficult at a small station like Balcombe. No, what you need to do is get off at Haywards Heath and cross to platform 3, where the northbound trains depart from.\nM: Is that what you're doing?\nF: Not exactly. I'll be taking the connecting service to Lewes but I can show you where to go.\nM: Er ... look ... thanks very much. I really appreciate this. Er ... you don't happen to know if there actually is a northbound train to Redhill at this time of night?\nF: Mmm ... I think they run trains all night because of Gatwick airport. But if you like, I could phone through to central enquiries and make sure.\nM: If it wouldn't be too much trouble. Look, um, I really appreciate this.\nF: No, don't mention it. Now, let's see if I can get this thing to work this time.",
        "items": [
          {
            "q": "Why can't the woman complete her phone conversation?",
            "opts": [
              "There's a lot of noise.",
              "Another passenger is bothering her.",
              "The reception is bad."
            ],
            "answer": 2,
            "explanation": "女人说\"the train keeps going into tunnels and we get cut off\"，即信号不好，选 C。"
          },
          {
            "q": "Where does the man want to go?",
            "opts": [
              "Salisbury",
              "Brighton",
              "Redhill"
            ],
            "answer": 0,
            "explanation": "男人说\"isn't this the train for Salisbury?\"，即他要去 Salisbury，选 A。"
          },
          {
            "q": "How does the man feel when he hears he is on the wrong train?",
            "opts": [
              "He can't believe it.",
              "He is angry at the woman.",
              "He is frightened."
            ],
            "answer": 0,
            "explanation": "男人说\"I can't believe this is happening\"，即难以置信，选 A。"
          },
          {
            "q": "What is the problem with the man's ticket?",
            "opts": [
              "He doesn't have one.",
              "It is not valid for the train he is on.",
              "It is made of plastic."
            ],
            "answer": 1,
            "explanation": "男人说\"I haven't got the right ticket\"，即票不对，选 B。"
          },
          {
            "q": "What is the next stop?",
            "opts": [
              "Balcombe",
              "Three Bridges",
              "Brighton"
            ],
            "answer": 0,
            "explanation": "女人说\"we should be arriving in Balcombe in just a minute\"，即下一站是 Balcombe，选 A。"
          },
          {
            "q": "Where is the woman going?",
            "opts": [
              "Balcombe",
              "Brighton",
              "Lewes"
            ],
            "answer": 2,
            "explanation": "女人说\"I'll be taking the connecting service to Lewes\"，即去 Lewes，选 C。"
          },
          {
            "q": "What does the woman offer to do for the man?",
            "opts": [
              "take him to his station",
              "make a call for him",
              "talk to the guard for him"
            ],
            "answer": 1,
            "explanation": "女人说\"I could phone through to central enquiries and make sure\"，即帮他打电话查询，选 B。"
          }
        ]
      }
    }
  },
  {
    "meta": {
      "id": "fce-mock-7-listening",
      "title": "FCE 全真模拟试题 7 · Listening",
      "level": "FCE",
      "collection": "FCE 全真模拟试题（8套）",
      "book": "FCE 全真模拟试题（8套）",
      "paper": "Listening",
      "pages": "127–129",
      "source": "FCE 8套全真模拟试题.pdf",
      "answerSource": "Answer Key and Transcripts（书 190-194 页 / PDF 196-200，官方）",
      "verified": true
    },
    "parts": {
      "1": {
        "title": "Part 1 · 情境选择",
        "type": "mcq_situation",
        "items": [
          {
            "scenario": "You hear this exchange on the radio.",
            "q": "What type of programme is it?",
            "opts": [
              "a phone-in programme",
              "a talent contest",
              "a general knowledge quiz"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-7/part-1-q1.mp3",
            "explanation": "主持人在描述一个名人（出生地、年代、职业等），参赛者 Roger 猜错\"Is it Oliver Fulcher?\"，主持人说\"can't give you a point for that\"，这是常识问答节目，选 C。",
            "transcript": "F: Okay, Roger, ... Now, this man was born in South Western Australia in 1946. He came to London in the sixties and made a name for himself in the West End before moving into film and television. His stage appearances included \"Prospero\" in Shakespeare's \"The Tempest\" and \"Clive\" in \"Where did you last see your trousers?\" His first film appearance ...\nM: Is it Oliver Fulcher?\nF: Sorry, Roger, I can't give you a point for that. It was, in fact, Barney Fulcher. Now, Muriel, this man ..."
          },
          {
            "scenario": "You overhear this man talking about a restaurant.",
            "q": "In his opinion, the restaurant",
            "opts": [
              "has improved.",
              "is still worth the cost.",
              "is too expensive."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-7/part-1-q2.mp3",
            "explanation": "男人说\"it's still good value\"和\"it will remain quite competitive\"，即仍然物有所值，选 B。",
            "transcript": "Well, I hadn't been to Willard's for about four years and it came as something of a shock to find the place under new management. It really isn't the same anymore but I suppose you could say it's changed with the times. After all, it's still good value ... but you do have to wait longer for everything and there isn't the same selection as before – especially the desserts – but I'd imagine it will remain quite competitive, especially in this part of town."
          },
          {
            "scenario": "You hear a woman interviewing a man on a TV chat show.",
            "q": "What is the man?",
            "opts": [
              "a famous criminal",
              "a detective",
              "a crime writer"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-7/part-1-q3.mp3",
            "explanation": "男人说\"being a celebrity\"\"I get a different deal\"，又假设\"if I'd actually killed somebody\"，那么\"they wouldn't have been so keen to make a movie about my exploits and the Bank of England\"，暗示他是出狱的名人罪犯，选 A。",
            "transcript": "F: So, Roddy ... How are you shaping up to life on the outside?\nM: Well, Lucy, not all the guys are as lucky as me – I mean, being a celebrity ... I get a different deal.\nF: Do you mean with the film they're making about your life?\nM: Well, yeah, ... you see, the day I got out, Sam Beesly, the famous detective writer, came up to see me with this contract ... yeah, for my story ... Well, yeah, I suppose if I'd actually killed somebody ... they wouldn't have been so keen to make a movie about my exploits and the Bank of England."
          },
          {
            "scenario": "You overhear part of a conversation on a train.",
            "q": "The woman",
            "opts": [
              "has never met the man before.",
              "is a good friend of the man.",
              "is a distant relative of the man."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-7/part-1-q4.mp3",
            "explanation": "男人说\"It's the shape of your ears\"\"His father had them, too\"\"They were very distinctive ears\"，男人通过耳朵特征认出她是以前学生的女儿，两人之前未见过，选 A。",
            "transcript": "M: That really is the most incredible coincidence. I mean it must have been ... oh ... fifty years now. Let's see. Ah yes, it was the winter of 47. I distinctly remember your good father playing in the school yard.\nF: So you were his form master that year?\nM: No, no, no – Arithmetic and Geometry ... We taught proper subjects in those days ...\nF: So, how did you know that I was his daughter?\nM: It's the shape of your ears ... His father had them, too ... They were very distinctive ears ..."
          },
          {
            "scenario": "You hear a teacher giving a lesson.",
            "q": "What is the teacher's subject?",
            "opts": [
              "Politics",
              "Literature",
              "Geography"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-7/part-1-q5.mp3",
            "explanation": "老师说\"two contrasting maps of the region\"和\"population from the countryside to the cities, accompanied by rapid industrialisation\"，讲地图和人口迁移，是地理课，选 C。",
            "transcript": "If you open your books to page 62, you will see two contrasting maps of the region. The first one dates back to the 1950s, when this part of the world was underdeveloped and mainly agricultural, but if you now look at the second one, there has been a marked shift in population from the countryside to the cities, accompanied by rapid industrialisation and centralisation of services. So, what effect do you think this has had on the agriculture of this region? Yes, Jaswinda?"
          },
          {
            "scenario": "You hear this announcement in a railway station.",
            "q": "The 7.15 train to London",
            "opts": [
              "has been cancelled.",
              "will leave from a different platform.",
              "has been delayed."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-7/part-1-q6.mp3",
            "explanation": "广播说\"This service is now running about 7 minutes late and will now depart at 7.22\"，列车延误约 7 分钟，选 C。",
            "transcript": "Ladies and gentlemen, this is an announcement for all passengers awaiting the arrival of the 7.15 train for London, Victoria. This service is now running about 7 minutes late and will now depart at 7.22 from platform 3 as advertised. We apologise for any inconvenience this may cause. The late departure from Three Bridges was due to the cancellation of a connecting service."
          },
          {
            "scenario": "You overhear this man answering a telephone in a record shop.",
            "q": "The man is",
            "opts": [
              "polite.",
              "rude.",
              "bored."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-7/part-1-q7.mp3",
            "explanation": "男人接电话说\"Good morning, Spinster Records\"、\"Would you like me to reserve a copy for you?\"，整体礼貌，选 A。",
            "transcript": "Good morning, Spinster Records ... Yes, we do have some discs of Valhalla ... Ah, but ... no, that's a very new release and it hasn't reached us yet ... but we should be getting it in the next fortnight ... Would you like me to reserve a copy for you? ... Yes, I know it was advertised on the television but the distributor ... Well, I'm sorry, too ... Well, you'll just have to do that, won't you ... Goodbye."
          },
          {
            "scenario": "You hear this exchange between the husband and wife of a British family you are staying with.",
            "q": "What does the wife want her husband to do?",
            "opts": [
              "make less noise at night",
              "complain to the neighbours",
              "fit new windows in another room"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-7/part-1-q8.mp3",
            "explanation": "妻子说\"if you don't go round there and talk to them, I will\"，要求丈夫去和邻居交涉噪音问题，选 B。",
            "transcript": "M: Morning, dear. Did you sleep well?\nF: No, I didn't, and you know very well why not.\nM: Well, there's nothing more I can do about it. I've already fitted new windows in our room.\nF: Well, you'll just have to go straight to the source of the trouble.\nM: Look, dear, they're students. They wouldn't understand.\nF: Well, if you don't go round there and talk to them, I will. They're sending me to an early grave – that's what they're doing. And if they think they can have another ..."
          }
        ]
      },
      "2": {
        "title": "Part 2 · 句子填空",
        "type": "blanks",
        "audio": "/audio/fce-mock/test-7/part-2.mp3",
        "transcript": "Presenter: Even if you have never watched the sky at night, you probably know what you would see if you did. The view is best on a night with no moon. You stare upwards into the inky blackness, over which are scattered millions of tiny points of light.\nThese, of course, are the stars. Then, just as you're beginning to get bored with this unchanging scene, a tiny white streak of light shoots across the sky. It's going too fast to be a plane. Then, two seconds later, you see another one. What you are witnessing is the beginning of a shower of meteors, or shooting stars.\nTo understand what is happening, it helps us to imagine a car driving fast along the road. In a way, our planet Earth is like that car. As it is racing along, it comes towards a large group of insects all flying together just above the road.\nNow, not all the insects are hit by the car, but several of them crash into the car's windscreen with an unpleasant noise. In many ways, the meteors are similar to the swarm of insects, although they aren't really animals. In fact, meteors are mostly tiny pieces of iron that look like little stones.\nIn a similar way, the Earth is not really moving along a road. But it does follow the same circular route around the Sun every year. This enormous circular path is called the Earth's orbit. All the other planets are in orbits like this as well. Now, there are small groups of those stones waiting in certain places along the Earth's route around the Sun. Some of them are fixed in one orbit, while others are moving around the Sun in their own orbits. Once every year, the Earth's circular path around the Sun takes us through some of these groups of little rocks.\nNow, when the earth approaches one of these stones, the stone is pulled downwards towards our planet by a strong force called gravity. And when the meteor starts to rush towards the ground, a shooting star is born. Normally, as shooting stars fall, they are travelling at speeds of 10 kilometres every second. This is about a hundred times faster than a jet plane. However, before the meteor can reach the Earth, it must go through the air around it – the atmosphere. Now, because it is going through the air so fast, the shooting star starts to become hotter and hotter, and the air around it gets very hot, too. This is a bit like the head of a match rubbing along the side of a matchbox. Now, very soon the outside of this piece of iron gets very hot indeed and, as a result, it gets soft and melts, and then starts to burn. So, as this hot little rock rushes through the atmosphere, it leaves a tail of hot burning metal and flames behind it. This is the bright streak we can see from the ground – 100 kilometres below. Yes, you see, fortunately for us, most meteors are so small that they have completely burned up long before they could ever reach the ground – which is just as well because, otherwise, we would need to carry rather stronger umbrellas!",
        "items": [
          {
            "q": "The presenter says that (9) ____________ is another name for meteors.",
            "answer": [
              "shooting stars"
            ],
            "show": "shooting stars",
            "explanation": "presenter 说\"a shower of meteors, or shooting stars\"，流星俗称\"shooting stars\"。"
          },
          {
            "q": "To help explain meteors, planet Earth is compared to (10) ____________ driving at high speed along a road.",
            "answer": [
              "a car"
            ],
            "show": "a car",
            "explanation": "\"it helps us to imagine a car driving fast along the road\"，把地球比作高速行驶的汽车。"
          },
          {
            "q": "You can think of meteors as a group of (11) ____________ flying above the road.",
            "answer": [
              "insects"
            ],
            "show": "insects",
            "explanation": "\"a large group of insects all flying together\"，把流星比作路上方飞行的昆虫群。"
          },
          {
            "q": "In reality, meteors are very small pieces of (12) ____________ that resemble small stones.",
            "answer": [
              "iron"
            ],
            "show": "iron",
            "explanation": "\"meteors are mostly tiny pieces of iron that look like little stones\"，流星是铁的小碎片。"
          },
          {
            "q": "The circular path the Earth travels around the Sun is called its (13) ____________, which is the same every year.",
            "answer": [
              "orbit"
            ],
            "show": "orbit",
            "explanation": "\"This enormous circular path is called the Earth's orbit\"，地球绕日的圆形轨道叫 orbit。"
          },
          {
            "q": "When Earth comes close to a meteor, the meteor is pulled (14) ____________ by gravity towards Earth.",
            "answer": [
              "downwards"
            ],
            "show": "downwards",
            "explanation": "\"the stone is pulled downwards towards our planet by a strong force called gravity\"，流星被引力向下拉。"
          },
          {
            "q": "A meteor travels very fast – a hundred times faster than a (15) ____________ normally.",
            "answer": [
              "jet plane"
            ],
            "show": "jet plane",
            "explanation": "\"This is about a hundred times faster than a jet plane\"，流星速度是喷气式飞机的 100 倍。"
          },
          {
            "q": "Due to the speed it travels through the air, the meteor becomes (16) ____________, as does the air around it.",
            "answer": [
              "hotter and hotter"
            ],
            "show": "hotter and hotter",
            "explanation": "\"the shooting star starts to become hotter and hotter, and the air around it gets very hot, too\"，流星和周围空气因高速摩擦变得越来越热。"
          },
          {
            "q": "Because of the heat, the meteor becomes less hard, (17) ____________ and then burns.",
            "answer": [
              "melts"
            ],
            "show": "melts",
            "explanation": "\"it gets soft and melts, and then starts to burn\"，流星受热变软、熔化，然后燃烧。"
          },
          {
            "q": "We are lucky that most meteors never (18) ____________ because they burn up long beforehand.",
            "answer": [
              "reach the ground"
            ],
            "show": "reach the ground",
            "explanation": "\"most meteors are so small that they have completely burned up long before they could ever reach the ground\"，多数流星在到达地面前已燃尽。"
          }
        ]
      },
      "3": {
        "title": "Part 3 · 多文本匹配",
        "type": "matching",
        "audio": "/audio/fce-mock/test-7/part-3.mp3",
        "options": [
          {
            "label": "A",
            "text": "by plane"
          },
          {
            "label": "B",
            "text": "by train"
          },
          {
            "label": "C",
            "text": "as the driver of a car"
          },
          {
            "label": "D",
            "text": "by bus"
          },
          {
            "label": "E",
            "text": "on foot"
          },
          {
            "label": "F",
            "text": "on a bicycle"
          },
          {
            "label": "G",
            "text": "as a passenger in a car"
          },
          {
            "label": "H",
            "text": "by taxi"
          }
        ],
        "items": [
          {
            "speaker": 1,
            "answer": "G",
            "explanation": "Speaker 1 说\"we were doing a good ninety up the central lane of the M1\"，随后\"Jessica saw it first and shouted\"\"Sally braked\"，说话者是 Sally 车上的乘客，选 G。",
            "transcript": "We were going up to York to see her relatives ... It was quite early in the morning, as I recall. There wasn't too much traffic on the roads, so we were doing a good ninety up the central lane of the M1 – and there were still plenty of other vehicles passing us in the fast lane ... and then suddenly, out of nowhere, there was a car in front of us, doing about fifty – it must have moved out from the slow lane to overtake something really slow. Anyway, Jessica saw it first and shouted \"Look out\", and Sally braked, but we still went into the back of it. Luckily, no one was hurt. But the front of the car was completely smashed in ..."
          },
          {
            "speaker": 2,
            "answer": "B",
            "explanation": "Speaker 2 说\"I locked my bike and told the guard\"，然后\"went to find a seat\"，此时\"We'd started moving by then\"，把自行车锁起来上火车，选 B。",
            "transcript": "... so I locked my bike and told the guard to keep a good eye on it ... It's still worth quite a lot of money, even now ... And then I went to find a seat. We'd started moving by then, which made it more difficult going from carriage to carriage. I went all the way up to the front and then all the way back again and the only seat I could find was in a first-class compartment. So, I was just making myself comfortable when the guard appeared. I suppose he could have made much more trouble if he'd wanted to. You see, he'd seen my ticket, so he knew it was only for second class ... but he was a decent bloke and he just gave me a warning."
          },
          {
            "speaker": 3,
            "answer": "E",
            "explanation": "Speaker 3 说汽车发动不起来、火车罢工、公交满员、的士打不到，\"set off on a four-mile march to the office\"，只能步行，选 E。",
            "transcript": "I was already running late when I came out of the door. I got in the car, turned the ignition key and nothing happened. I didn't have time to look under the bonnet, so I set off on foot to get a train. What I had forgotten was that the trains were on strike. So anyway, after that, I tried for about half an hour to get a number eight bus. Four came past but they were all totally packed, of course. Then I saw Jack going past in his red car ... but he was in too much of a hurry to see me. So, after that, I tried phoning three different taxi companies, but I was out of luck there and, in the end, I had no choice but to set off on a four-mile march to the office. I arrived two hours late."
          },
          {
            "speaker": 4,
            "answer": "F",
            "explanation": "Speaker 4 说\"the chain had come off\"，链条掉落是自行车的问题，选 F。",
            "transcript": "I'd just reached the bottom of Furze Hill, and I was really going quite fast when I must have accidentally touched my brakes or something because the next thing ... the chain had come off. So, I pulled over and stopped and then tried to put it back on without getting oil all over my hands and my clothes – that wouldn't go down too well in the office. So, I found this piece of paper lying beside the road, and used it to hold the chain with and it was only when I'd finished that I noticed that this piece of paper had been a hot-dog wrapper, and so I had mustard and ketchup and disgusting greasy stuff all over my hands."
          },
          {
            "speaker": 5,
            "answer": "A",
            "explanation": "Speaker 5 说\"We'd taxied to the end of the runway and just waited\"，飞机在跑道上滑行等待，选 A。",
            "transcript": "So there I was, sitting looking out of the window, and we'd been sitting there for over an hour by then. We'd taxied to the end of the runway and just waited and waited for something to happen. I was getting a bit bored with the few buildings we could see from where we were. I could just make out the road in the distance, with the occasional car or bus. And, it was about then that I suddenly remembered that I'd left the back door unlocked. Of course, I told Bill but we both agreed there was nothing we could do until we got to our destination ... and, of course, by then, it was too late."
          }
        ]
      },
      "4": {
        "title": "Part 4 · 访谈选择",
        "type": "mcq",
        "audio": "/audio/fce-mock/test-7/part-4.mp3",
        "transcript": "M: Danielle Mason, who is 18 years old, is exchanging the big top for the studio today, to talk about her circus career. Well, Danielle, you're very young to already have such an impressive CV – how did you gain so much experience in a relatively short time?\nF: I'm the fourth generation in my family to join the circus, so that gave me an advantage over someone without that connection. It paved my way to getting auditions with touring circuses and introductions, resulting in my first job when I was only 8 years old. I had mainly rather ordinary walk-on parts initially and spent more time being a clown's assistant than I care to admit, but the good thing about the circus is that they're happy for you to turn your hand to anything if they think you have the talent. That's how I ended up performing acrobatics in a circus troupe before I hit my teens.\nM: Was it hard to transition between the role of clown's assistant and acrobat?\nF: Funnily enough, there's quite an overlap between the two. Fine timing is key to success in both roles, whether you're doing slapstick routines or jumping onto a swinging trapeze, so I guess I was already primed to be an acrobat when I took up the role. Obviously, being so young, I was very fit and supple, so that helped too, as did the time I spent competing in a discipline of gymnastics as a child.\nM: So you were an instant success, then?\nF: I'd hardly say that! [laughing] It was quite a learning curve, to be honest and it was a really long road to get from that starting point to where I am now. It also took a few sprained ankles and trips to A & E to get to the level I'm at! However, it took no time at all to get used to being the focus of attention as a solo artist, having been in the spotlight for so long already.\nM: Your role is very physically demanding. How do you keep fit?\nF: My routine is a tough workout in itself, to be honest, and with back-to-back training sessions several times a week there's not too much I need to do to keep up my fitness levels. Just as well, really, as time doesn't permit for more than a high-intensity 20-minute workout every day before the matinee performance.\nM: And what about your diet?\nF: Obviously I need to keep an eye on what I eat – my spandex costume can be very unforgiving, to say the least! But, more importantly, I need to maintain a slim physique as it's easier to lift my weight when I'm not carrying extra unwanted pounds! Therefore, I tend to eat healthy, high-energy foods, like beans and pulses. Having said that, though, I'm a firm believer in eating everything in moderation, so I wouldn't say no to the occasional ice cream or cake!\nM: Tell me, Danielle, how do you maintain a work-life balance?\nF: Well, when you're touring with the circus, family life takes a back seat. The people you work with instead become a substitute family. Fellow performers know how tough circus life can be, so they provide a shoulder to cry on at times. But at the end of the day, colleagues can never replace your own family. You know, I think it's true to say that normal life only resumes when a tour ends, but reality can often be quite a comedown, funnily enough, after the excitement and unpredictability of being on tour!\nM: Obviously you love circus life, Danielle, but what is the best part of being in a circus for you?\nF: There's just so much I love about the circus. I love performing in front of an audience and meeting so many people through work. But, above all, I just like doing something I feel passionately about, and I think that comes across in my performance, and the audience appreciates that.\nM: I'm sure. And I must say I think you're a very lucky and talented young lady! Thank you for being on the show today and telling us about your work.",
        "items": [
          {
            "q": "What does Danielle imply about her early circus career?",
            "opts": [
              "It was a valuable experience.",
              "It wasn't very fulfilling.",
              "It did not live up to expectations."
            ],
            "answer": 1,
            "explanation": "Danielle 说\"I had mainly rather ordinary walk-on parts initially and spent more time being a clown's assistant than I care to admit\"，早期主要做龙套和小丑助手，不算充实，选 B。"
          },
          {
            "q": "According to Danielle, what do clowns and acrobats have in common?",
            "opts": [
              "physical fitness",
              "discipline",
              "a sense of timing"
            ],
            "answer": 2,
            "explanation": "\"Fine timing is key to success in both roles, whether you're doing slapstick routines or jumping onto a swinging trapeze\"，小丑和杂技演员都需要精准的节奏感，选 C。"
          },
          {
            "q": "Danielle suggests that being an acrobat",
            "opts": [
              "came naturally to her.",
              "required a lot of trial and error.",
              "made her self-conscious."
            ],
            "answer": 1,
            "explanation": "她说\"It was quite a learning curve\"，而且\"took a few sprained ankles and trips to A & E to get to the level I'm at\"，杂技需要大量试错和学习，选 B。"
          },
          {
            "q": "Danielle says that she",
            "opts": [
              "schedules a workout into her working day.",
              "has no time to work out.",
              "doesn't need a fitness regime."
            ],
            "answer": 0,
            "explanation": "\"time doesn't permit for more than a high-intensity 20-minute workout every day before the matinee performance\"，她在工作日安排了 20 分钟高强度锻炼，选 A。"
          },
          {
            "q": "How could Danielle's diet be described?",
            "opts": [
              "strict and unvarying",
              "fairly strict",
              "extremely varied"
            ],
            "answer": 1,
            "explanation": "她说\"I tend to eat healthy, high-energy foods\"，但\"I wouldn't say no to the occasional ice cream or cake\"，饮食相当健康但偶尔放纵，选 B。"
          },
          {
            "q": "What does Danielle say about touring with a circus?",
            "opts": [
              "She can still lead a normal family life.",
              "It makes normal life seem dull.",
              "It doesn't suit people with families."
            ],
            "answer": 1,
            "explanation": "她说\"reality can often be quite a comedown\"，\"after the excitement and unpredictability of being on tour\"，巡演让正常生活显得平淡乏味，选 B。"
          },
          {
            "q": "When performing, Danielle believes she",
            "opts": [
              "feels less and less enthusiastic about her job.",
              "communicates her enthusiasm for her job.",
              "feels the audience doesn't always realise how hard she works."
            ],
            "answer": 1,
            "explanation": "\"I just like doing something I feel passionately about, and I think that comes across in my performance\"，她在表演中传达对工作的热情，选 B。"
          }
        ]
      }
    }
  },
  {
    "meta": {
      "id": "fce-mock-8-listening",
      "title": "FCE 全真模拟试题 8 · Listening",
      "level": "FCE",
      "collection": "FCE 全真模拟试题（8套）",
      "book": "FCE 全真模拟试题（8套）",
      "paper": "Listening",
      "pages": "146–148",
      "source": "FCE 8套全真模拟试题.pdf",
      "answerSource": "Answer Key and Transcripts（书 196-199 页 / PDF 202-205，官方）",
      "verified": true
    },
    "parts": {
      "1": {
        "title": "Part 1 · 情境选择",
        "type": "mcq_situation",
        "items": [
          {
            "scenario": "You overhear this man describing a washing machine in a shop.",
            "q": "What is the advantage of this machine?",
            "opts": [
              "It is cheaper to buy.",
              "It washes better.",
              "It costs less to use."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-8/part-1-q1.mp3",
            "explanation": "男人说\"it'll cut a substantial slice off your family's electricity and water bills\"，\"making running costs a third less\"，运行成本更低，选 C。",
            "transcript": "... which, of course, comes with a three-year guarantee. And, finally, there's the Amitron Eco. You'll notice right away that it's a more expensive model but, in the long run, it'll cut a substantial slice off your family's electricity and water bills. This particular model has been specially designed to be economical with both water and energy, making running costs a third less, although it has the same features as all our other models and does the job just as well. Would you care to have a look at the technical profile ...?"
          },
          {
            "scenario": "You hear a man on TV talking about a programme later that night.",
            "q": "The programme Just Penelope is",
            "opts": [
              "a chat show.",
              "a comedy series.",
              "a detective series."
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-8/part-1-q2.mp3",
            "explanation": "男人说\"Penelope Parchment has a particularly difficult case to solve when one of her house guests goes missing\"，是侦探剧，选 C。",
            "transcript": "... and Alvin Major's guests tonight include the singer Lolita, the ghost writer Peter Miller, and Bobby Antonio. Then, after the 9 o'clock news, Penelope Parchment has a particularly difficult case to solve when one of her house guests goes missing ... and can Penelope take time out to patch up her shaky marriage? That's \"Just Penelope\" at 9.45 ... and then to round off the evening on Channel 9, Robert Mulholland presents another ..."
          },
          {
            "scenario": "You hear this couple talking in a supermarket.",
            "q": "What are they arguing about?",
            "opts": [
              "which brand of coffee to buy",
              "which tin of soup to buy",
              "which carton of fruit juice to buy"
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-8/part-1-q3.mp3",
            "explanation": "两人争论\"But that one's the best value. It says here that it makes more than fifty cups.\"，\"every jar's got the same amount\"，\"It says on the label –450 grams\"，\"It's the flavour\"，争论买哪种咖啡，选 A。",
            "transcript": "M: No, don't get that one. That's the one that had a bitter taste.\nF: But that one's the best value. It says here that it makes more than fifty cups.\nM: And have you ever counted them? ... Look, every jar's got the same amount ... see! It says on the label –450 grams.\nF: Well, what's wrong with this one then?\nM: It's the flavour. You didn't like it, either. Look, this one's only 9 pence extra. Couldn't we just try it once and see ..."
          },
          {
            "scenario": "You hear this recorded message.",
            "q": "None of the cookery courses are",
            "opts": [
              "for more than six weeks.",
              "in English cooking.",
              "only at weekends."
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-8/part-1-q4.mp3",
            "explanation": "录音说\"Cookery courses for the new year are in Chinese, South American and Indian cuisine\"，没有英国菜，选 B。",
            "transcript": "You have reached the Piddleton Technical College free-phone information service. Courses starting next month include Norwegian clog-dancing and traditional English floral dancing – both classes taking place on Mondays and Wednesdays. Cookery courses for the new year are in Chinese, South American and Indian cuisine, and will take place at the centre on weekday evenings – apart from the Indian cookery course on Mondays, Wednesdays and Saturdays, which will consequently last an extra 2 weeks beyond the usual 5-week duration."
          },
          {
            "scenario": "You overhear this man talking about a book.",
            "q": "The man",
            "opts": [
              "did not like the book very much.",
              "found it completely useless.",
              "benefited a lot from buying it."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-8/part-1-q5.mp3",
            "explanation": "男人说\"it made a lot of things unnecessarily difficult\"，\"if I were you, I'd spend my money on having some actual lessons with a proper instructor\"，不太喜欢这本书，选 A。",
            "transcript": "Well, when I first started, I bought a copy of \"How to Get the Most Out of Your Trumpet\", but I think it made a lot of things unnecessarily difficult. I mean, it helps having a teacher to show you what to do because no book can really explain what you have to do with your mouth when you're blowing. Mind you, it does have some useful diagrams that helped me pick up the fingering ... but if I were you, I'd spend my money on having some actual lessons with a proper instructor."
          },
          {
            "scenario": "You overhear a woman on the telephone inviting a friend to dinner.",
            "q": "The friend cannot come because",
            "opts": [
              "he will be away.",
              "he is unwell.",
              "he has to work."
            ],
            "answer": 0,
            "audio": "/audio/fce-mock/test-8/part-1-q6.mp3",
            "explanation": "女人说\"Will you be going abroad?\"，暗示朋友要出国，选 A。",
            "transcript": "Hello, is that George? ... Yes, very well, thank you ... and you? ... Yes, I was wondering if you'd like to come to dinner on Thursday night ... it'll just be a small gathering ... Oh, what a pity. Still, you deserve a break with all that work you do. You've been quite run down recently, and we don't want you getting ill. Will you be going abroad?"
          },
          {
            "scenario": "You overhear a policeman giving directions to the bus station.",
            "q": "Where is the bus station?",
            "opts": [
              "at the top of a hill",
              "by the river",
              "at the bottom of a hill"
            ],
            "answer": 2,
            "audio": "/audio/fce-mock/test-8/part-1-q7.mp3",
            "explanation": "警察说\"go all the way up St Mark's Hill, over the top and right down to the traffic lights\"，\"the bus station is just after the lights\"，\"if you get to the river, you know that you've gone too far\"，汽车站在下坡后红绿灯左边，选 C。",
            "transcript": "Well, the bus station is not too far. You'll be able to get there on foot quite easily. You keep going along this road until there's a bend and you follow it all the way round and then there's a big hill in front of you. That's called St Mark's Hill. So, you go all the way up St Mark's Hill, over the top and right down to the traffic lights ... and the bus station is just after the lights ... on your left ... and if you get to the river, you know that you've gone too far."
          },
          {
            "scenario": "You hear part of a British TV sitcom called Teacher's Always Right.",
            "q": "What does the teacher want the girl to do?",
            "opts": [
              "stop misbehaving in lessons",
              "stop missing lessons",
              "bring the right books"
            ],
            "answer": 1,
            "audio": "/audio/fce-mock/test-8/part-1-q8.mp3",
            "explanation": "老师说\"Haven't you been missing your classes quite a lot recently?\"，\"this has got to stop\"，老师要她停止缺课，选 B。",
            "transcript": "M: Ah, Lucy, can I have a word?\nF: Imbecile ... that's a word, sir.\nM: No, no, I want to talk to you.\nF: Look, sir, I promise I'll try to pay more attention and bring the right books next time. I just thought that everyone would find it interesting – my dad does.\nM: Look, that's not the problem. Haven't you been missing your classes quite a lot recently?\nF: Oh no, sir. I didn't miss them at all. We had a great time.\nM: Lucy, this has got to stop. It's high time you changed your attitude, young lady."
          }
        ]
      },
      "2": {
        "title": "Part 2 · 句子填空",
        "type": "blanks",
        "audio": "/audio/fce-mock/test-8/part-2.mp3",
        "transcript": "Presenter: In this programme, we will deal with another common result of violent injuries, that of fractures – or to put it more simply – broken bones. It is worth first mentioning a few facts about the bones themselves. Bones form an essential framework around which our bodies are shaped, performing the two vital functions of support for the body and protection for the internal parts of the body (such as the heart and the brain), which could easily be damaged otherwise. Bones are not dead tissue, as many people think, but are made up of a hardened outer layer of cells around a soft material in the centre, known as the bone marrow. The bone marrow, incidentally, performs the equally vital function of producing new blood cells. Bones do not break easily. When a small amount of force is applied, the bones – particularly of young people – can actually bend to a surprising degree but, of course, there is a limit to this and beyond that limit the bones break. Because of the large forces and sudden movement involved, it is unlikely that somebody would break a bone and not be aware of it. There is also usually an unmistakable audible crack that can be heard by other people as well. So, what can we do in terms of first aid for people with fractures – beyond making the victim as comfortable as possible and calling an ambulance? In general, the answer is not much, but this is important to note. Because the vital function of support has been lost in the damaged part of the body, any attempt to move the victim could result in further damage to that area. In any instance, where it is necessary to move such a victim, it is vital to provide another means of support for a damaged limb. For this reason, you should locate any fractures before attempting to move the victim. If this is not done, further movement of the damaged area will result in multiple fractures; in other words, many small breaks, which are much harder to repair. If the victim is conscious, it is likely that he or she will be able to tell you the position of any fractures that may have occurred. But, in the case of an unconscious victim, a different procedure should be followed. After checking the victim's breathing, circulation, eyes and face as described in previous programmes, the next step in checking the victim's condition is to methodically feel each major bone in the body, noting any change in shape that would indicate the presence of a break. For this reason, it is important to be aware of the correct healthy shape of all the major bone structures in the human body. For example, the shape of the shoulders, backbone, arms and legs. You should practise feeling other members of your family or members of your first training group. Otherwise, you may end up treating a person who has no fracture at all.",
        "items": [
          {
            "q": "The word 'fracture' is a technical word for (9) ____________, a common violent injury.",
            "answer": [
              "broken bones"
            ],
            "show": "broken bones",
            "explanation": "presenter 说\"fractures – or to put it more simply – broken bones\"，fracture 即骨折。"
          },
          {
            "q": "Bones are vital for the body because they (10) ____________ and protect it.",
            "answer": [
              "support"
            ],
            "show": "support",
            "explanation": "\"performing the two vital functions of support for the body and protection for the internal parts\"，骨骼起支撑作用。"
          },
          {
            "q": "Bones are composed of a (11) ____________ outer layer and a soft centre.",
            "answer": [
              "hardened"
            ],
            "show": "hardened",
            "explanation": "\"a hardened outer layer of cells around a soft material in the centre, known as the bone marrow\"，骨骼外层是硬化的。"
          },
          {
            "q": "Bone marrow is important because it makes (12) ____________ cells.",
            "answer": [
              "new blood",
              "blood"
            ],
            "show": "new blood",
            "explanation": "\"producing new blood cells\"，骨髓产生新血细胞。"
          },
          {
            "q": "Bones do not always break; sometimes they actually (13) ____________, particularly in young people.",
            "answer": [
              "bend"
            ],
            "show": "bend",
            "explanation": "\"the bones – particularly of young people – can actually bend to a surprising degree\"，年轻人的骨骼有时会弯曲不断裂。"
          },
          {
            "q": "It is important to try to find any fractures before trying to (14) ____________ a victim.",
            "answer": [
              "move"
            ],
            "show": "move",
            "explanation": "\"you should locate any fractures before attempting to move the victim\"，移动伤者前要先找骨折。"
          },
          {
            "q": "Moving an injured person with a fracture can cause (15) ____________.",
            "answer": [
              "further damage"
            ],
            "show": "further damage",
            "explanation": "\"any attempt to move the victim could result in further damage to that area\"，移动骨折伤者可能造成进一步损伤。"
          },
          {
            "q": "If the injured party is conscious, he or she can inform you of the (16) ____________ of any fractures.",
            "answer": [
              "position"
            ],
            "show": "position",
            "explanation": "\"he or she will be able to tell you the position of any fractures\"，清醒的伤者能告知骨折位置。"
          },
          {
            "q": "Part of the procedure for treating an unconscious victim has been discussed in (17) ____________ on TV.",
            "answer": [
              "previous programmes"
            ],
            "show": "previous programmes",
            "explanation": "\"as described in previous programmes\"，之前节目讨论过处理昏迷伤者的部分程序。"
          },
          {
            "q": "If someone is unconscious, carefully check each major bone for any (18) ____________ that could mean a fracture.",
            "answer": [
              "change in shape"
            ],
            "show": "change in shape",
            "explanation": "\"noting any change in shape that would indicate the presence of a break\"，检查每根主要骨骼是否有形状变化。"
          }
        ]
      },
      "3": {
        "title": "Part 3 · 多文本匹配",
        "type": "matching",
        "audio": "/audio/fce-mock/test-8/part-3.mp3",
        "options": [
          {
            "label": "A",
            "text": "mending a leaking tap"
          },
          {
            "label": "B",
            "text": "doing the washing"
          },
          {
            "label": "C",
            "text": "cleaning the windows"
          },
          {
            "label": "D",
            "text": "washing-up"
          },
          {
            "label": "E",
            "text": "decorating"
          },
          {
            "label": "F",
            "text": "ironing"
          },
          {
            "label": "G",
            "text": "lighting a fire in the fireplace"
          },
          {
            "label": "H",
            "text": "fixing the roof"
          }
        ],
        "items": [
          {
            "speaker": 1,
            "answer": "F",
            "explanation": "Speaker 1 说\"The fabric was too wet and I just couldn't get things to come out without creases\"，\"starting to smoke\"，\"a big black mark on the back of my favourite shirt\"，熨衣服，选 F。",
            "transcript": "These days it isn't a problem. I just set everything up, switch on the radio, get into the rhythm and it's all finished in no time. But I remember the first time I tried it. I hadn't got a clue. The fabric was too wet and I just couldn't get things to come out without creases ... and then the telephone rang ... I suppose it's a good thing it was only a wrong number because when I came back it was already starting to smoke and there was a big black mark on the back of my favourite shirt. So, I poured water all over it and then, of course, I had to start all over again."
          },
          {
            "speaker": 2,
            "answer": "B",
            "explanation": "Speaker 2 说\"my wife just can't do it because of her skin condition\"，\"I would do the whole lot myself\"，\"hanging everything out afterwards\"，洗衣服，选 B。",
            "transcript": "Well, you see, my wife just can't do it because of her skin condition. So, in the end, we decided that rather than send everything to the laundry ... I would do the whole lot myself. It doesn't bother me. Joanne does the shopping and cuts the grass. The only thing that I don't like is hanging everything out afterwards. You know ... you get all the looks from the neighbours and one of the kids next door even has the cheek to call me \"Mrs\" Simpson. I'll tell you one thing, though; if I ever get hold of that boy, I'll show him a thing or two."
          },
          {
            "speaker": 3,
            "answer": "A",
            "explanation": "Speaker 3 说\"read a DIY manual\"，\"turning off the stop-cock\"，\"a huge fountain coming out of the top\"，\"call a professional plumber\"，修漏水龙头，选 A。",
            "transcript": "I'd read a DIY manual that gave full instructions with pictures. It made it look so easy that I thought I'd save us a hefty bill and do it myself. What the manual didn't say was anything about turning off the stop-cock before you start ... Well, I'm sure you can imagine what happened. Suddenly, there was a huge fountain coming out of the top of the thing and I just couldn't get the top back on. In the end, we did end up having to call a professional plumber out and paid a fortune because it was a Sunday morning. And then, I had to clean up the kitchen floor. It was like a swimming pool."
          },
          {
            "speaker": 4,
            "answer": "C",
            "explanation": "Speaker 4 说\"different cleaning products on the market\"，\"little levers on so you can point the bottle and spray the liquid\"，\"You rub and rub until you think you've finished and then ten minutes later, when you go outside, you see a bit you've missed\"，擦窗户，选 C。",
            "transcript": "Well, in the old days you used to use vinegar and paper towels. But nowadays there are so many different cleaning products on the market that you can hardly remember which one is which. Luckily, there's usually a picture on the front of the bottle that shows you just exactly which part of the house you're supposed to clean with it. The containers even have little levers on so you can point the bottle and spray the liquid wherever you want it. But then the difficult part is taking it off again. You rub and rub until you think you've finished and then ten minutes later, when you go outside, you see a bit you've missed."
          },
          {
            "speaker": 5,
            "answer": "E",
            "explanation": "Speaker 5 说\"wallpapering is so much easier than it looks; you just put plenty of paste on the wall and then you just slide the paper into place\"，贴壁纸装修，选 E。",
            "transcript": "There's loads of things I wouldn't touch around the house, but this is one thing that doesn't take any special talent or know-how at all. Even wallpapering is so much easier than it looks; you just put plenty of paste on the wall and then you just slide the paper into place. And, if you do get any wrinkles, you can iron them out with a brush. Plus, it's easy to do a straight line if you steady your hand on something and there's nobody there to distract you. You just have to watch out for the mess, that's all. Put plenty of newspaper on the floor, or a couple of old sheets."
          }
        ]
      },
      "4": {
        "title": "Part 4 · 访谈选择",
        "type": "mcq",
        "audio": "/audio/fce-mock/test-8/part-4.mp3",
        "transcript": "M: Today I have with me in the studio Janie Stevens, who is 17. Currently she's in training for her first-ever marathon that will take place next month. So, Janie, you're obviously a seasoned runner; what made you take up running in the first place?\nF: I love challenges and I've always been an outdoorsy type, so I guess that's what got me into running. My dad's an athletics coach so he was keen to encourage my interest in this sport. Although he's more into team sports like rugby, and sees running more as a way to build up strength and increase fitness than a sport in itself, he was more than happy to accompany me on runs when I took up the sport whilst still at junior school. You see he got the benefit of getting in some fitness training for himself whilst keeping an eye on me at the same time!\nM: Janie, you started running at a very young age. Were your parents concerned that you might be pushing yourself too hard?\nF: It's true I started running very young. I was only 11 when I ran my first 5-mile race. But my dad always kept a watchful eye on me and was careful not to let me overdo it. Exercise is good for children and adults alike, but long distance running is a different matter entirely. Whilst teens have almost unlimited energy and replace their energy reserves more quickly than adults, basic physiological differences as well as mental ones put them at a disadvantage to adult runners. If teenagers train too intensely, they run the risk of early burnout, whether that's physical or mental. That's why training should always be age-appropriate.\nM: So when did you decide to run a marathon, Janie?\nF: To tell you the truth, it didn't cross my mind until I reached my 16th birthday. I didn't entertain the idea earlier as my dad had always drilled it into me from the moment I took up running not to be overambitious in my running and training regime. When I turned 16, though, I realised I could start putting in the extra training that would bring me up to marathon standard. Up until that age the recommended guidelines for training suggest no more than 6-7 weeks at a stretch. But there aren't any hard and fast rules about limits to training children as there's so little research in this area. It's difficult to near on impossible to do research on children, so you have to rely on anecdotal evidence from coaches.\nM: What did you find most difficult about preparing to run a marathon?\nF: You might expect that as a teenager my biggest problem would be to find time to train. Teenagers are known for their busy social lives and I'm no exception! But actually, it wasn't too difficult to prioritise training over socialising. I'm convinced that focusing on a specific goal helped, as well as having the full support of family and friends. I must admit, training on cold winter nights wasn't my favourite thing, but the biggest hurdle I had to overcome, was pushing through the exhaustion barrier and willing myself on when my body was telling me to stop!\nM: And when you're out running, what do you think about?\nF: Anything and everything, really, when I'm not too busy counting laps or watching out for uneven ground and excitable dogs when I'm out in the countryside! If I'm out running in an unfamiliar location, I tend to take in the scenery more, but otherwise I often shut out what's around me and think of really mundane things, like jobs I have to do, or friends I need to catch up with.\nM: When you have a big race on, how do you prepare for the day itself?\nF: No different from any other day, really. I know some runners like to start the day of a big race with a ritual, like eating a certain food or getting dressed in a particular T-shirt or wearing socks that haven't been washed for a week, but I'm more practical than superstitious, to tell you the truth. Getting an early night in the day before the race and eating a high protein diet light on carbs in the week leading up to it are top of my list!\nM: Finally, Janie, what have you learned from your sport?\nF: I have a much more considered approach now to running. I don't just go out and run as I used to. Nowadays, I think about race strategy much more. But I still maintain my perspective: running is a major part of my life but I know there's life beyond it. When I'm running, I put my all into it, but when training is finished, I leave it on the track.\nM: Well, Janie it's been great talking to you and I wish you luck in your upcoming marathon.",
        "items": [
          {
            "q": "Why did Janie's dad go with her on runs?",
            "opts": [
              "to give her encouragement",
              "to get fit and monitor her",
              "to keep her company"
            ],
            "answer": 1,
            "explanation": "Janie 说\"he got the benefit of getting in some fitness training for himself whilst keeping an eye on me at the same time\"，父亲既锻炼又监督她，选 B。"
          },
          {
            "q": "Janie believes that teenagers",
            "opts": [
              "make much better runners than adults.",
              "lack the energy needed.",
              "cannot compete with adult runners."
            ],
            "answer": 2,
            "explanation": "\"basic physiological differences as well as mental ones put them at a disadvantage to adult runners\"，青少年相比成年跑者有劣势，选 C。"
          },
          {
            "q": "Advice on training programmes for children",
            "opts": [
              "should be strictly adhered to.",
              "is based on an inexact science.",
              "can be referred to in books written by coaches."
            ],
            "answer": 1,
            "explanation": "\"there aren't any hard and fast rules about limits to training children as there's so little research in this area\"，\"rely on anecdotal evidence from coaches\"，训练儿童的建议基于不精确的科学，选 B。"
          },
          {
            "q": "What was Janie's biggest challenge when preparing for a marathon?",
            "opts": [
              "focusing on her training schedule",
              "keeping up with an active social life",
              "overcoming physical limitations"
            ],
            "answer": 2,
            "explanation": "\"the biggest hurdle I had to overcome, was pushing through the exhaustion barrier and willing myself on when my body was telling me to stop\"，最大挑战是克服身体极限，选 C。"
          },
          {
            "q": "Generally speaking, when running outdoors, Janie",
            "opts": [
              "pays little attention to her surroundings.",
              "focuses on her timing and technique.",
              "thinks about important matters mostly."
            ],
            "answer": 0,
            "explanation": "\"I often shut out what's around me and think of really mundane things, like jobs I have to do, or friends I need to catch up with\"，跑步时不太关注周围环境，选 A。"
          },
          {
            "q": "Before a race, Janie",
            "opts": [
              "focuses on her well-being.",
              "can be quite superstitious.",
              "neglects domestic tasks."
            ],
            "answer": 0,
            "explanation": "\"Getting an early night in the day before the race and eating a high protein diet light on carbs in the week leading up to it are top of my list\"，赛前关注健康，选 A。"
          },
          {
            "q": "Having spent several years running, Janie",
            "opts": [
              "is beginning to lose interest in the sport.",
              "has a more balanced approach to her sport.",
              "is less sure of her future in the sport."
            ],
            "answer": 1,
            "explanation": "\"I have a much more considered approach now to running\"，\"I still maintain my perspective: running is a major part of my life but I know there's life beyond it\"，现在有更平衡的态度，选 B。"
          }
        ]
      }
    }
  }
];
