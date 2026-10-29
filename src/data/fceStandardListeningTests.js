// FCE 标准版真题 1–4 · Listening（16 套，每册 4 套）
// 来源（用户原件，扫描版无文本层，逐页视觉转录 + 官方 Key 逐题核对）:
//   标准版1 音频: D:\workspace_sunny\FCE\1.真题\标准版1\First 1 CD\（Disc1: T1P1..T2P4, Disc2: T3P1..T4P4, 01-08.mp3）
//   标准版2 音频: D:\workspace_sunny\FCE\1.真题\标准版2\First 2 CD 1 / CD 2（Track01-12）
//   标准版3 音频: D:\workspace_sunny\FCE\1.真题\标准版3\音频\（01-16.m4a，按 Test/Part 命名）
//   标准版4 音频: D:\workspace_sunny\FCE\1.真题\标准版4\FCE（标准版）真题4-CD\（First4_test{n}_audio{p}.mp3）
// 数组顺序: 册1 T1..T4, 册2 T1..T4, 册3 T1..T4, 册4 T1..T4
// meta.id 规范: 'fce-standard-<册>-test<套>-listening'; examKey: 'fce-standard-<册>-test<套>'
// Part 1 音频：官方 CD 为整 Part 单条音频（part.audio），UI 按单条播放处理。
// 听力原文（2026-10-27 逐字转录自官方 Tapescript；引句核对：node scripts/_ts_verify_fce.mjs）：3 T1 PDF 122-133 / T2 PDF 134-145 / T3 PDF 146-157 / T4 PDF 158-169
// 听力原文（2026-10-27 逐字转录自官方 Tapescript；引句核对：node scripts/_ts_verify_fce.mjs）：4 T1 PDF 111-121 / T2 PDF 123-133 / T3 PDF 135-145 / T4 PDF 147-157
// 听力原文（2026-10-27 逐字转录自官方 Tapescript；引句核对：node scripts/_ts_verify_fce.mjs）：标准版1 T1 PDF 120-130 / T2 PDF 132-142 / T3 PDF 144-153 / T4 PDF 155-165
// 听力原文（2026-10-27 逐字转录自官方 Tapescript；引句核对：node scripts/_ts_verify_fce.mjs）：标准版2 PDF undefined


// ===== 标准版1 · Test 1（书页 22–27；Key: 书 120–121/PDF 119–120，已逐题核对） =====
// Source: Cambridge English First 1（标准版1）cen_first_1_with_answers .pdf（用户原件扫描版）
// Test 1 Listening: 书页 22–27（PDF 21–26），答案核对自 Test 1 Key（Reading 在书 120 / PDF 119，Listening 在书 121 / PDF 120）
// 音频：/audio/fce/std1/std1-t1-p1.mp3 ~ std1-t1-p4.mp3（整 Part 一条）
// 注：书 23 页 Q5 印刷原文即为 "You overhear a women talking..."（原书笔误，按页面视觉转录原样保留）。
const STD1_L1 = {
  meta: {
    id: 'fce-standard-1-test1-listening',
    title: 'FCE 标准版真题 1 · Test 1 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 1 Key（书 120–121 / PDF 119–120，Listening 区在书 121）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std1/std1-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking on her mobile phone about a missing piece of furniture.',
          q: 'How does she feel?',
          opts: ['irritated with the removals company', "unsure what's happened", 'anxious to find it quickly'],
          answer: 1,
          transcript: "One.\nYou hear a woman talking on her mobile phone about a missing piece of furniture.\nI see, it wasn't in the van. But never mind, I'll call the removals company. It's OK, I'm sure it'll be fine. I just wonder what they've done with it. I mean it isn't something you can easily lose, is it? You'd think someone would've noticed almost straightaway. I'm sure it'll turn up very soon. So don't get too upset about it – it's just rather odd. And considering all the things that could have gone wrong, I think we've been fairly lucky really, don't you?",
          explanation: "官方答案为 B：她并不清楚家具到底出了什么事（unsure what's happened）。原文：\"I just wonder what they've done with it.\"",
        },
        {
          scenario: 'You hear two students talking about their current course topic.',
          q: 'What do they agree about?',
          opts: ['how boring it is', 'how difficult it is', 'how relevant it is'],
          answer: 1,
          transcript: "Two.\nYou hear two students talking about their current course topic.\nWoman: I think the lectures are really fascinating, don't you?\nMan: Only if you're interested in that period of history. You'd think the lecture would have moved on to the next period by now. It's much more interesting.\nWoman: But we needed extra time on it because it's such a complex area.\nMan: Yeah, I can't make head nor tail of it!\nWoman: We need to get to grips with it though or we won't be able to manage what's coming next.\nMan: But is it really useful anyway?\nWoman: Oh, come on. Let's get a coffee.",
          explanation: "官方答案为 B：依据录音内容，两人一致认为当前课程话题难度大。原文：\"Yeah, I can't make head nor tail of it!\"",
        },
        {
          scenario: 'You hear two business people talking about a contract.',
          q: 'How does the man feel now?',
          opts: [
            'frustrated because of the time wasted',
            'surprised about the cancellation of the contract',
            "sympathetic towards the other company's problems",
          ],
          answer: 2,
          transcript: "Three.\nYou hear two business people talking about a contract.\nMan: Have you heard that the contract's been cancelled?\nWoman: No, I had no idea! You must be really annoyed after all the work you put into it.\nMan: Initially, I was, yes, I spent three weeks putting it all together and the company was really positive about it. But then I found out that they're in some financial difficulty so it's really unfortunate for them. We've worked with them for years.\nWoman: It was a huge contract, wasn't it. What are you going to do now?\nMan: Well, we've just had a very big order from one of our trusted clients so that's taken any pressure off.",
          explanation: "官方答案为 C：依据录音内容，男方对对方公司的难处表示理解同情。原文：\"But then I found out that they're in some financial difficulty so it's really unfortunate for them.\"",
        },
        {
          scenario: "You hear an artist telling a friend about an art prize he's just won.",
          q: 'What is he doing?',
          opts: [
            'expressing surprise',
            "admitting that he's excited",
            'explaining why he thinks he was chosen',
          ],
          answer: 1,
          transcript: "Four.\nYou hear an artist telling a friend about an art prize he's just won.\nWoman: You must be thrilled after the announcement that you've won such a famous art prize!\nMan: Well, to be honest, I'm not quite sure how I feel yet! I'd always wondered about the idea of an art prize – I mean, it's not exactly a competition, so it seems strange. And you never quite know what the judges are looking for when they pick a winner.\nWoman: Really?\nMan: Well, yes. But actually, when I was on my own in the studio, I felt much more positive about it and even started dreaming about how my career would change now – not to mention what I'll do with the money!\nWoman: Well, good luck!",
          explanation: "官方答案为 B：依据录音内容，他承认自己得奖后心情兴奋。原文：\"But actually, when I was on my own in the studio, I felt much more positive about it and even started dreaming about how my career would change now – not to mention what I'll do with the money!\"",
        },
        {
          scenario: 'You overhear a women talking to a friend on her mobile phone.',
          q: 'Why is she phoning?',
          opts: ['to explain a delay', 'to change some plans', 'to make an arrangement'],
          answer: 2,
          transcript: "Five.\nYou overhear a woman talking to a friend on her mobile phone.\nI don't mind when you come over, as long as it isn't too late – six thirty would be fine and give us time to have a really good chat. Is that OK? I have to get up early on Thursday morning, because I have to get the earlier flight. I'd booked myself on a ten o'clock one, but that's been cancelled. There's another one in the afternoon, but I'd miss the meeting if I took that one. It's a bit of a nuisance, but there you go. Anyway, it'll be great to see you!",
          explanation: "官方答案为 C：依据录音内容，这通电话是为了和朋友敲定某个安排。原文：\"I don't mind when you come over, as long as it isn't too late – six thirty would be fine and give us time to have a really good chat.\"",
        },
        {
          scenario: 'You hear a guitarist talking about his profession.',
          q: 'What is the purpose of his talk?',
          opts: [
            'to warn about the challenges of becoming a musician',
            'to give step-by-step guidance on setting up a band',
            'to emphasise the importance of having loyal fans',
          ],
          answer: 0,
          transcript: "Six.\nYou hear a guitarist talking about his profession.\nPeople ask me how to set up a band, but that's a matter of luck, there's no simple answer. Find people who want it as badly as you do, who can also be your best friends. I want to say something about the difficulty of learning to be a musician. It takes thousands of hours of practice, you have to be blessed with talent, you have to have day jobs until you finally make it, but if you have a passion for something, and you work hard enough, you'll get there. You'll soon find out which are the venues with the most enthusiastic fans.",
          explanation: "官方答案为 A：依据录音内容，他旨在提醒听众入行当乐手会遇到的种种挑战。原文：\"I want to say something about the difficulty of learning to be a musician.\"",
        },
        {
          scenario: 'You hear a woman talking to a sales assistant.',
          q: "Why can't she have a refund for her trainers?",
          opts: [
            'The receipt is wrong.',
            'She is not in the right shop.',
            'The trainers are no longer new.',
          ],
          answer: 1,
          transcript: "Seven.\nYou hear a woman talking to a sales assistant.\nAssistant: Hello, can I help you?\nWoman: Yes, I bought these trainers from your company online, and I really like them and everything, but they're a bit tight. I was wondering if you could give me a refund.\nAssistant: Sorry, I'm afraid we can't do that.\nWoman: Why not? It's obvious I haven't worn them and I've still got the receipt. Is it because I bought them online? Aren't you legally required to give a refund?\nAssistant: No, it's not that. These trainers don't come from here. Look at the receipt. It's got the wrong name on. Try next door.",
          explanation: "官方答案为 B：依据录音内容，退款被拒与她来错了门店有关。原文：\"These trainers don't come from here. Look at the receipt. It's got the wrong name on. Try next door.\"",
        },
        {
          scenario: 'You hear a woman talking about a radio chat show.',
          q: 'What does she like about the show?',
          opts: [
            'The presenter makes her laugh.',
            'Information is given in an interesting way.',
            'Guests reveal quite a lot about themselves.',
          ],
          answer: 1,
          transcript: "Eight.\nYou hear a woman talking about a radio chat show.\nI love listening to The Clare Nolan show on Friday at eight o'clock. She has great guests and they often have a good time together on the show. Clare has a way of getting people to say things which come across as very funny. She doesn't come across as a celebrity, but more a normal person who is clever and tells us things we don't know in an enthusiastic and useful manner. She's good at doing that at the same time as making her guests feel involved. So many presenters nowadays seem to use their shows just to show off their own talents, but not Clare Nolan.",
          explanation: "官方答案为 B：依据录音内容，她欣赏节目传递信息的方式生动有趣。原文：\"She doesn't come across as a celebrity, but more a normal person who is clever and tells us things we don't know in an enthusiastic and useful manner.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a photographer called Ian Gerrard talking about his career. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std1/std1-t1-p2.mp3',
      transcript: "You will hear a photographer called Ian Gerrard talking about his career. For questions 9 to 18, complete the sentences with a word or short phrase.\nYou now have forty-five seconds to look at Part Two.\nGood evening, everyone. My name's Ian Gerrard and I'm a photographer. I'm here to tell you a bit about my career so far, and also about my new book.\nI often get asked if I studied photography at university and people are sometimes surprised that I didn't. I wanted to, but my parents wouldn't let me, so I had to choose something else. I loved history but my marks weren't very good, but I was keen on geography too, so that is what I did in the end. I actually think it's made me a better photographer, and has given my work a broader context.\nOn the degree course, in my final year, we studied all aspects of the development of cities and we had to do a presentation. We could do what we wanted and it was really interesting the topics people chose. I chose street markets for mine but a friend did his on the growth of urban transport networks.\nOn graduation, I went to the USA. I knew I wanted to work as a photographer, so I'd sent pictures to news organisations and advertising agencies, hoping I might get something in a brochure, or even a newspaper! In fact, it was a magazine that noticed my pictures, and I worked for it for a year.\nI learnt a huge amount, but what I really wanted to do was see the USA for myself. I needed a theme, something really American – maybe photographing diners or shopping malls around the country. Then I remembered all those westerns I'd seen and I just knew it had to be horses – I'd found what I wanted to focus on!\nIt was an amazing six months – I started off in the baking heat of summer on the east coast, and finished my journey up in the mountains. I got the most striking shots in the winter light, although I do love the warmth in summer photos.\nAnyway, I came back to Britain at the beginning of spring and published my US photos in a small book. I earned just enough to finance my next trip – round the UK. I felt it was time I explored my own country. I'd done a lot of driving in the USA and I wanted a change from the car, so went by motorbike instead. I love train travel, but I wanted to get to more remote areas.\nI wanted to explore the relationship between people and place. Interestingly, in the last few decades, many photographers from the UK haven't done much on fishing communities here, so that's what I did. They've tended to focus on family life in inner city communities instead.\nThe resulting photos I'm putting together for my new book. One thing I've learnt is that it takes ages to produce a book – almost as long, in fact, as it took me to travel around Britain and then develop all the photos I'd taken. I started my journey in August, and finished last month, in November. My book won't be in the shops until March, though there's an exhibition of my pictures touring the UK from January.\nIt's funny, I really wanted to call my book Visions, but apparently there's already one called that, so my publishers suggested the title In Focus, which I thought was horrible. In the end we settled for Images, which is OK.\nNow I'm planning my next tour. I wasn't sure which theme to choose this time. I initially thought I'd look at lakes and mountains but then I saw a tractor in a field and I knew I'd do farming. I've decided to use a special camera to create very large photos, which I'm hoping to exhibit next year.\nWell, if you have any questions .......\nNow you will hear Part Two again.\nThat is the end of Part Two.\nNow turn to Part Three.",
      items: [
        {
          q: 'The subject that Ian studied at university was ____ .',
          answer: ['geography'],
          show: 'geography',
          explanation: '官方答案 geography：依据录音内容，他在大学所学的科目是地理。',
        },
        {
          q: 'Ian did a presentation on ____ as part of his final year.',
          answer: ['street markets', 'markets'],
          show: '(street) markets',
          explanation: '官方答案 (street) markets：Key 中 street 为可选词，两种写法均算对。',
        },
        {
          q: 'Ian worked for a ____ in the USA for a year after leaving university.',
          answer: ['magazine'],
          show: 'magazine',
          explanation: '官方答案 magazine：依据录音内容，他毕业后在美国一家杂志社工作了一年。',
        },
        {
          q: 'When he travelled around the USA, Ian chose ____ as the theme for his photographs.',
          answer: ['horses'],
          show: 'horses',
          explanation: '官方答案 horses：依据录音内容，他游历美国时以马为拍摄主题。',
        },
        {
          q: 'Ian says that ____ is the season when he takes the best photographs.',
          answer: ['winter'],
          show: 'winter',
          explanation: '官方答案 winter：依据录音内容，冬季是他拍出最佳照片的季节。',
        },
        {
          q: 'When Ian came back to Britain, he travelled around by ____ taking photographs.',
          answer: ['motorbike', 'motor-bike'],
          show: 'motor(-)bike',
          explanation: '官方答案 motor(-)bike：按 Key 记法连字符可省略，motorbike / motor-bike 均算对。',
        },
        {
          q: 'Ian says he was surprised by how few photographers specialise in shots of ____ communities.',
          answer: ['fishing'],
          show: 'fishing',
          explanation: '官方答案 fishing：依据录音内容，专注拍摄渔业社区题材的摄影师很少。',
        },
        {
          q: "Ian's book will be available in bookshops in ____ next year.",
          answer: ['March'],
          show: 'March',
          explanation: '官方答案 March：依据录音内容，他的书明年三月上市。',
        },
        {
          q: "The title of Ian's book is ' ____ '.",
          answer: ['Images'],
          show: 'Images',
          explanation: '官方答案 Images：书名首字母大写。',
        },
        {
          q: 'Ian has chosen ____ as the theme for his next tour.',
          answer: ['farming'],
          show: 'farming',
          explanation: '官方答案 farming：依据录音内容，他下次巡展选择农耕为主题。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about the benefits of learning another language. For questions 19–23, choose which benefit (A–H) each speaker has experienced. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std1/std1-t1-p3.mp3',
      options: [
        { label: 'A', text: 'It has boosted my intellectual abilities.' },
        { label: 'B', text: 'It has improved my chances in education.' },
        { label: 'C', text: 'It has made me sensitive to global issues.' },
        { label: 'D', text: 'It has allowed me to gain faster promotion.' },
        { label: 'E', text: 'It has made getting around in other countries easier.' },
        { label: 'F', text: 'It has allowed me to help other people.' },
        { label: 'G', text: 'It has advanced my awareness of the way language works.' },
        { label: 'H', text: 'It has helped me make friends.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: "官方答案 E：依据录音内容，学习另一门语言让他在异国出行更方便。原文：\"But I've usually found that when I'm somewhere I can speak the language, I worry less about the practical aspects of a journey and focus on enjoying what's going on around me.\"", transcript: "Speaker 1\nI know people from all around the world, because my job involves looking for global solutions to environmental problems. I get to go abroad a lot and I do think speaking or reading the language of a country has been a huge help when I've visited. Of course, I've friends who've been all over without speaking another language, and they've been able to make themselves understood. But I've usually found that when I'm somewhere I can speak the language, I worry less about the practical aspects of a journey and focus on enjoying what's going on around me. And that's what it's all about really." },
        { speaker: 'Speaker 2', answer: 'H', explanation: "官方答案 H：依据录音内容，语言学习帮他结交了朋友。原文：\"In my case, I've formed close ties with a number of people from other countries.\"", transcript: "Speaker 2\nBasically, it's pretty obvious: the better you can speak a language – or the more languages you know – the greater the number of people you can communicate with. In my case, I've formed close ties with a number of people from other countries. That's usually because we all appreciate the time and effort we've spent getting to know a different language and culture. I'm lucky because languages were well taught at my school. I wasn't actually considered to be particularly clever, but I was given a good start as far as other languages are concerned. I'm very grateful for that." },
        { speaker: 'Speaker 3', answer: 'B', explanation: "官方答案 B：依据录音内容，语言能力改善了他的升学机会。原文：\"the big advantage when I was applying for this college was the fact that I could speak several languages. That really helped me get in\"", transcript: "Speaker 3\nPeople often think I must be super-intelligent to be doing the course I'm doing but I don't think that's the case. I'm hoping to have a career in global finance, and the big advantage when I was applying for this college was the fact that I could speak several languages. That really helped me get in and I've met people from all over the world here. When I was a child, my parents travelled around a great deal. Luckily, I was a sociable child, so in every new country we lived in, I learn the language quite quickly." },
        { speaker: 'Speaker 4', answer: 'G', explanation: "官方答案 G：依据录音内容，他对语言的运作方式有了更深认识。原文：\"So, it's actually taught me a lot about my mother tongue. When you speak a foreign language, you have to actively think about what you want to say and how you want to say it.\"", transcript: "Speaker 4\nIf you've ever travelled to a country where people speak a different language from your own, then you'll know that you can't just learn a list of words if you want to make yourself understood. The same idea is often expressed differently in other languages. So, it's actually taught me a lot about my mother tongue. When you speak a foreign language, you have to actively think about what you want to say and how you want to say it. I find it helps if I think about the grammar in my native language first – something I'd never really thought about before. I certainly didn't when I was at school." },
        { speaker: 'Speaker 5', answer: 'D', explanation: "官方答案 D：依据录音内容，语言能力让他晋升更快。原文：\"I wouldn't already be at the level I am now professionally in my career if I didn't speak a few languages reasonably well.\"", transcript: "Speaker 5\nIt's other people who have helped me learn languages, by letting me struggle on in their native tongue even when they knew mine far better! So I have a lot of kind and patient people to thank, I could never concentrate in language classes at school, but then I realised how important languages are these days. After all, in our globalised world, knowing more than your own language is extremely useful. I wouldn't already be at the level I am now professionally in my career if I didn't speak a few languages reasonably well. It's good to know all the travelling I did after leaving school wasn't wasted!" },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Patricia Jones, who is a naturalist. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std1/std1-t1-p4.mp3',
      transcript: "You will hear an interview with a woman called Patricia Jones, who is a naturalist. For questions 24 to 30, choose the best answer (A, B or C).\nYou now have one minute to look at Part Four.\nInterviewer: Patricia, this year marks the twentieth anniversary of the start of your elephant project in Africa. What are your feelings?\nPatricia: Well, it's extraordinary to me to think that twenty years have passed, that I'm still working on the same projects and that hundreds of students who have volunteered with us have now got university teaching positions all over the world. That's probably had an impact on thousands of people by now, not just the foreign visitors coming to Africa, but locals as well.\nInterviewer: How do you spend your time nowadays?\nPatricia: Well, to begin with, my work was just concerned with learning about the behaviour of elephants in Africa. But then I realised that survival of the species depends on the actions of governments, big multi-nationals and ordinary people. So now I tend to focus more on getting people to realise the effect their actions have on wildlife and natural habitats. I try to demonstrate that by making a small change in the choices they make, for example in the products they buy, people can have a big effect on the wider world.\nInterviewer: Do you think zoos have a part to play in conservation?\nPatricia: Well, there are some old-fashioned zoos where the animals are kept in small cages for the entertainment of the public. The animals aren't able to express their natural behaviour and those zoos should definitely be shut down immediately. The best thing is for an animal to live in its natural environment, but we have this idealised view of freedom where their lives will be wonderful. The reality is that in so many places there are hunters. Sometimes we have to step in and offer a species protection, and that's where the new type of zoos come in.\nInterviewer: In your new book, entitled Animals and Their Habitats, what message are you hoping to convey?\nPatricia: The natural world is in real crisis, but there are extraordinary people all around the planet who are absolutely determined that endangered animal species or plants or ecosystems should be helped to restore themselves. I hope it'll be inspiring for young biologists and botanists at the outset of their careers to read about these people who have taken on these huge challenges.\nInterviewer: Have children, do you think, lost that sense of connection to the natural world?\nPatricia: Yes. We should be encouraging them to get back in touch with nature either by taking them into a natural environment or by bringing nature to the child. You know, research has shown that contact with the natural world is actually crucial for psychological growth. So many children have such little opportunity to experience nature and only do so second-hand from a TV screen.\nInterviewer: What does your organisation called In Touch aim to do?\nPatricia: Well, it's all youth driven, so it's young people discussing the problems they see around them and then between them choosing three projects to work on that they feel would make things better. One project is about people, one is about animals, and one is about the environment. So, in any group of young people, you get those passionate about animals, you get some who want to do community service for people and you have some who want to help the local environment.\nInterviewer: Do you think you still have a role to play?\nPatricia: Judging from the number of girls who write and say they want to follow in my footsteps. I think I do! But what I'd really like to do is stop people blaming science for everything. Many people think that it's scientists who are damaging the environment. I want people to see that they themselves are responsible too and that they can also be part of the solution by being conscious about the choices they make in their everyday lives. That's what I want to achieve.\nInterviewer: Many thanks Patricia ...\nNow you will hear Part Four again.\nThat is the end of Part Four.\nThere will now be a pause of five minutes for you to copy your answers onto the separate answer sheet. Be sure to follow the numbering of all the questions. I shall remind you when there is one minute left, so that you are sure to finish in time.\n[Teacher, pause the recording here for five minutes. Remind students when they have one minute left.]\nThat is the end of the test. Please stop now. Your supervisor will now collect all the question papers and answer sheets.",
      items: [
        {
          q: 'Looking back at her work, Patricia feels',
          opts: [
            'surprised that her projects still attract volunteers.',
            "proud of the wide influence she's had.",
            "pleased by how she's regarded in Africa.",
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，回顾以往工作，她以影响之广为傲。原文：\"That's probably had an impact on thousands of people by now, not just the foreign visitors coming to Africa, but locals as well.\"",
        },
        {
          q: 'How does Patricia spend her time nowadays?',
          opts: [
            'persuading people to alter their behaviour',
            'advising governments on conservation',
            'studying wildlife in its natural habitat',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，她如今致力于劝说人们改变行为方式。原文：\"So now I tend to focus more on getting people to realise the effect their actions have on wildlife and natural habitats.\"",
        },
        {
          q: 'How does Patricia feel about zoos?',
          opts: [
            'They all ought to be closed down.',
            'They should have an educational purpose.',
            'They still have a role to play in conservation.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，她认为动物园在物种保护上仍有作用。原文：\"Sometimes we have to step in and offer a species protection, and that's where the new type of zoos come in.\"",
        },
        {
          q: 'In her new book, Patricia hopes to give',
          opts: [
            'encouragement to young scientists.',
            'advice on helping endangered animals.',
            'guidance to other environmentalists.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，新书意在鼓励年轻科学家。原文：\"I hope it'll be inspiring for young biologists and botanists at the outset of their careers to read about these people who have taken on these huge challenges.\"",
        },
        {
          q: 'Patricia believes that children should spend time in the natural world because',
          opts: [
            'it is the only way to find out about it.',
            'it is essential for their development.',
            'it is a chance to change their view of animals.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，亲近自然对孩子的成长必不可少。原文：\"You know, research has shown that contact with the natural world is actually crucial for psychological growth.\"",
        },
        {
          q: 'The organisation called In Touch encourages young people to',
          opts: [
            'be tolerant of each other.',
            'actively work for change.',
            'talk about their problems.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，该组织鼓励年轻人积极行动、推动改变。原文：\"Well, it's all youth driven, so it's young people discussing the problems they see around them and then between them choosing three projects to work on that they feel would make things better.\"",
        },
        {
          q: 'What does Patricia particularly want to do next?',
          opts: [
            'to help girls who want to be scientists',
            'to get scientists to be more responsible',
            "to change people's attitudes to science",
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，她接下来最想改变人们对科学的态度。原文：\"But what I'd really like to do is stop people blaming science for everything.\"",
        },
      ],
    },
  },
};

// ===== 标准版1 · Test 2（书页 44–49；Key: 书 132–133/PDF 131–132，已逐题核对） =====
// Source: Cambridge English First 1（标准版1）cen_first_1_with_answers .pdf（用户原件扫描版）
// Test 2 Listening: 书页 44–49（PDF 43–48），答案核对自 Test 2 Key（书 132–133 / PDF 131–132）
// 音频：/audio/fce/std1/std1-t2-p1.mp3 ~ std1-t2-p4.mp3（整 Part 一条）
const STD1_L2 = {
  meta: {
    id: 'fce-standard-1-test2-listening',
    title: 'FCE 标准版真题 1 · Test 2 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 44–49',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 2 Key（书 132–133 / PDF 131–132）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std1/std1-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking about how his business became successful.',
          q: 'Where did his additional funding come from?',
          opts: ['the local bank', 'a family friend', 'his own savings'],
          answer: 1,
          transcript: "One.\nYou hear a man talking about how his business became successful.\nI started this business with a really small budget. I tried to run it really economically, using the money I'd saved over the years and I chose to sell my products in quality stores for the first year before approaching the supermarkets. Then my business suddenly took off and I knew if I wanted to continue to grow, I really needed to make a series of TV advertisements and that required more money than I personally had. Someone my mother knew offered to help me out, which was really lucky because I'd tried applying to the bank for a loan but the interest rates were too high.",
          explanation: "官方答案为 B：追加资金来自一位家人朋友，而非银行贷款或个人积蓄。原文：\"Someone my mother knew offered to help me out, which was really lucky because I'd tried applying to the bank for a loan but the interest rates were too high.\"",
        },
        {
          scenario: 'You hear a woman talking about a journey.',
          q: 'How did she travel?',
          opts: ['by boat', 'by train', 'by coach'],
          answer: 2,
          transcript: "Two.\nYou hear a woman talking about a journey.\nWell I thought it was pretty uncomfortable, really. We had to be on board half an hour before we set off – I've no idea why – and then didn't stop at a service station for four hours. Four hours, can you imagine? We couldn't even get up to stretch our legs. We were just stuck in our seats, and when we did eventually stop, it was a rush to find a snack and a drink before we had to get on again. But it was cheap, and the new bridge means you don't have to take those awful ferries, which is definitely a bonus!",
          explanation: "官方答案为 C：她此行乘坐的是长途大巴，而不是船或火车。原文：\"We had to be on board half an hour before we set off – I've no idea why – and then didn't stop at a service station for four hours.\"",
        },
        {
          scenario: 'You overhear a man talking to his wife on the phone.',
          q: 'What is he talking about?',
          opts: ['buying a car', 'booking a holiday', 'moving abroad'],
          answer: 0,
          transcript: "Three.\nYou overhear a man talking to his wife on the phone.\nIt'll be great, you'll see! We won't just be stuck in one place, we'll be able to go on day trips wherever we want, and see all sorts of interesting sights. We won't be rushing to catch the bus to work every morning – we'll actually have time to sit down and have breakfast together – it seems a shame that we only have time to do things like that when we're away on holiday. Fancy having to leave the country to have a relaxed breakfast! I know it's expensive, but I definitely think it'll be worth it. And when you pass, you'll get the benefit too!",
          explanation: "官方答案为 A：这通电话里谈的是买车的事。原文：\"I know it's expensive, but I definitely think it'll be worth it. And when you pass, you'll get the benefit too!\"",
        },
        {
          scenario: 'You hear two students talking about their course.',
          q: 'What does the woman think about the course?',
          opts: ['It is quite difficult.', 'It is worth doing.', 'It is becoming more interesting.'],
          answer: 1,
          transcript: "Four.\nYou hear two students talking about their course.\nMan: That was a good lecture, wasn't it?\nWoman: Yeah, not bad – I just wish the course was a bit more challenging sometimes.\nMan: Do you? I find it quite hard enough already, actually!\nWoman: Well, at the beginning of term, I thought it was going to be great, you know, and looking into it all in more depth would be fascinating ... but now I'm not so sure.\nMan: So do you think you might do something else instead next year?\nWoman: No, I'll definitely carry on – I am learning and I need the qualification, even if it's just so I can go on to do something a bit more relevant later on!",
          explanation: "官方答案为 B：女生认为这门课程虽然不易但值得一读。原文：\"No, I'll definitely carry on – I am learning and I need the qualification, even if it's just so I can go on to do something a bit more relevant later on!\"",
        },
        {
          scenario: 'You hear a woman talking about roller derby, a hobby which involves speed racing on skates.',
          q: 'What is she doing?',
          opts: [
            'explaining what made her decide to take it up',
            "appreciating her friends' attitude to the sport",
            "describing how she feels when she's taking part",
          ],
          answer: 2,
          transcript: "Five.\nYou hear a woman talking about roller derby, a hobby which involves speed racing on skates.\nMy roller derby skates are the most expensive footwear I've ever owned. It's a tough, physical game, and I think that's been the most astonishing thing for friends to understand, when I tell them which sport I've taken up. They're always amazed when they see me too, as our team races against another one around a track at incredible speed. It's thrilling – a great way of just leaving all my worries behind for a few hours. But of course body protection like a big helmet and knee pads are essential, so I admit I must be pretty unrecognisable like that – especially since in my daily life I look so ordinary!",
          explanation: "官方答案为 C：她描述的是自己参与轮滑竞速时的感受。原文：\"It's thrilling – a great way of just leaving all my worries behind for a few hours.\"",
        },
        {
          scenario: 'You hear part of a radio programme.',
          q: 'What is the woman talking about?',
          opts: ['a new shop', 'a new exhibition', 'a new leisure centre'],
          answer: 1,
          transcript: "Six.\nYou hear part of a radio programme.\nI'm sure it'll be popular, especially with sporty types. There's a lot of swimming gear on display – it's fascinating to see how different types of swimwear can affect a swimmer's performance. It actually made me want to get out there and do something active myself! You can book tickets online, and it's open seven days a week. And of course once you're in the building, there are all the permanent collections to look at too, if you want to. So whether you're like me and a bit of a couch potato, or fit and into exercise already, go and have a look!",
          explanation: "官方答案为 B：这段广播介绍的是一场新展览。原文：\"And of course once you're in the building, there are all the permanent collections to look at too, if you want to.\"",
        },
        {
          scenario: 'You overhear two students discussing a reading project they did with young children.',
          q: 'What do they agree about it?',
          opts: [
            'The venue was perfect.',
            'The material was well received.',
            'The number of participants was surprising.',
          ],
          answer: 1,
          transcript: "Seven.\nYou overhear two students discussing a reading project they did with young children.\nMan: So did you like working with the little kids, reading with them and everything? The books we chose for them from our library went down a storm, didn't they? Especially the bits we read out loud.\nWoman: Yeah, though I wondered if the really little ones could hear properly – it's such a big space. It was good fun, though ...\nMan: Like when we started giving away the gifts we'd brought them.\nWoman: It's a pity the weather wasn't good – we should've been out in the sunshine. That room's meant to hold the whole school – about six hundred kids ...\nMan: Well, at least we got out to play football with them in the break ...",
          explanation: "官方答案为 B：两人一致认为项目所用材料很受孩子们欢迎。原文：\"The books we chose for them from our library went down a storm, didn't they?\"",
        },
        {
          scenario: 'You hear an actor talking about the character she plays in a TV drama series.',
          q: 'How does she feel about the character?',
          opts: [
            'She is envious of her life-style.',
            'She sympathises with her current problems.',
            'She admires her intelligence.',
          ],
          answer: 2,
          transcript: "Eight.\nYou hear an actor talking about the character she plays in a TV drama series.\nWell, I enjoy playing her because she's so complex. She can be really sharp-tongued and gives brilliant one-liners. I wish I could do that! She's a clever lady but I wouldn't want to spend my time jettting all over the world like she does. I think it's really important to understand the character you're playing, you know, to try and get inside the character's head, so I've invented a whole backstory for her. I'm sure that at some point in the future she'll have a romance. Then you'd see a different side to her.",
          explanation: "官方答案为 C：她对所饰角色的才智表示钦佩。原文：\"She can be really sharp-tongued and gives brilliant one-liners. I wish I could do that!\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Gina Purvis, who is a pilot for a commercial airline, talking about her job. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std1/std1-t2-p2.mp3',
      transcript: "You will hear an interview with a woman called Gina Purvis, who is a pilot for a commercial airline. For questions 9 to 18, complete the sentences with a word or short phrase.\nYou now have forty-five seconds to look at Part Two.\nHello everyone. My name's Gina Purvis and I work as a pilot for a commercial airline. I'm going to tell you about my career. When I was about ten, I dreamt of being a flight attendant. Then the dream moved on to being a vet and working with animals, which actually I'd have hated because I hate seeing animals in pain. In fact, after school I went to train as a teacher and after I qualified I worked for a few years, but not with any great enthusiasm I must say. So how did I get started with flying?\nWell, my mum bought me some flying lessons for a birthday present and I loved it from the start. I've been a commercial pilot for ten years now, and captain for the last five. The airline I work for demands that pilots have a minimum of three hundred flying hours experience initially, and to be eligible to become a captain, it's three thousand hours.\nAt the moment, I'm flying people to their holiday destinations around the Mediterranean. Some people ask me if my work interferes with my private life and friends outside work can struggle to understand why I'm not available on Friday or Saturday nights. It really helps that I'm married to a travel writer, who understands the air industry. Other pilots, whose partners are bank managers and things like that, find it hard. And we don't have any children so it all works, somehow.\nNow, before I take off, I have to consult the 'Notices to Pilots', as they're called. That gives me news of airports having any problems. For example, one of the runways at London Gatwick is having work done at the moment, I also have to do some calculations to work out the weight of the plane, plus crates of cargo and the number of passengers. Then I put that with the route into a computer, plus the alternatives in case we get diverted, and the computer comes up with how much fuel we'll need. But, often at the last minute, we get notification of some more passengers so that requires a further calculation and more fuel.\nI'm often asked if I have a degree in maths as I need to do so many calculations, but I haven't. Like me, most of my colleagues have studied science at university. You do need to have a good head for figures, though. I often think it would have been good to study people management, too.\nThe interior of the cockpit, where I and my co-pilot sit, is quite small and cramped. There's a practical reason for that – we need to be able to reach the controls, just in case one of us falls ill. But there's space to put our jackets in the cupboard at the back. Everything we need is more or less reachable without having to stand up.\nI can't really move around during the flight. We used to have to get up to open the door if one of the cabin crew wanted to come in but now we can do that electronically. And we can see on a monitor who's at the door to the cockpit or the cabin behind.\nBefore I take off, I just need to check if there are any small defects on the plane. I receive a report of anything I need to be aware of, in which case I call for assistance. It can be just a little thing like a broken ice chiller in the front cabin and, if there are no real problems then we're ready for the people to come on board.\nI've visited some wonderful places. What I like best, though, is flying at night. If the skies are clear, you can have stars above you and the lights of cities below you. And then there's the moonlight on the mountains. It's magical.\nSo, if you have any questions ...\nNow you will hear Part Two again.\nThat is the end of Part Two.\nNow turn to Part Three.",
      items: [
        {
          q: 'Gina disliked her first job as a ____ .',
          answer: ['teacher'],
          show: 'teacher',
          explanation: '官方答案 teacher：她的第一份工作是教师，并不喜欢。',
        },
        {
          q: 'The airline that Gina works for insists on at least ____ hours of flying experience from their captains.',
          answer: ['3,000', 'three thousand'],
          show: '3,000 / three thousand',
          explanation: '官方答案 3,000：公司要求机长至少有 3000 小时飞行经验。',
        },
        {
          q: 'Gina says that because her husband is a ____ he is tolerant of her job.',
          answer: ['travel writer'],
          show: 'travel writer',
          explanation: '官方答案 travel writer：丈夫是旅行作家，常不在家，因此体谅她的工作。',
        },
        {
          q: "The 'Notices to Pilots' provides information about any ____ that are experiencing problems.",
          answer: ['airports'],
          show: 'airports',
          explanation: '官方答案 airports：《Notices to Pilots》提供出现问题的机场信息（后接复数动词）。',
        },
        {
          q: 'Gina says that if she has extra ____ she will need more fuel for her flight.',
          answer: ['passengers'],
          show: 'passengers',
          explanation: '官方答案 passengers：乘客更多时就需要携带更多燃油。',
        },
        {
          q: 'Gina explains that many pilots she works with did a degree in ____ at university.',
          answer: ['science'],
          show: 'science',
          explanation: '官方答案 science：许多同事在大学读的是理科专业。',
        },
        {
          q: 'Gina says that all the ____ must be within reach of the two pilots in the cockpit.',
          answer: ['controls'],
          show: 'controls',
          explanation: '官方答案 controls：所有操纵装置都必须在两名驾驶员伸手可及的范围内。',
        },
        {
          q: 'The pilots look at a ____ to check if anyone is standing at the cockpit entrance.',
          answer: ['monitor'],
          show: 'monitor',
          explanation: '官方答案 monitor：驾驶员通过监视器查看驾驶舱门口是否有人。',
        },
        {
          q: 'Gina gets information from a ____ about any small problems on the plane.',
          answer: ['report'],
          show: 'report',
          explanation: '官方答案 report：机上的小问题通过一份报告获知。',
        },
        {
          q: 'Gina says what she really appreciates is a ____ flight.',
          answer: ['night'],
          show: 'night',
          explanation: '官方答案 night：她最欣赏的是夜间航班。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which students are talking about a trip they have taken. For questions 19–23, choose from the list (A–H) what each student says about their trip. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std1/std1-t2-p3.mp3',
      options: [
        { label: 'A', text: 'Someone I met while I was there is coming to visit me soon.' },
        { label: 'B', text: 'I plan to do things a little differently on my next visit.' },
        { label: 'C', text: 'I learnt more about some friends while I was with them.' },
        { label: 'D', text: "I enjoyed myself thanks to one person's efforts." },
        { label: 'E', text: 'My experience was different when I returned to a place.' },
        { label: 'F', text: 'Some people there offered to take me on a tour.' },
        { label: 'G', text: "I didn't take to the city at first." },
        { label: 'H', text: 'I went back to a place I had never expected to see again.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'D', explanation: "官方答案 D：多亏某人的努力，这次旅行玩得很开心。原文：\"I learnt a lot, and without him, I wouldn't have had half as much fun.\"", transcript: "Speaker 1\nMy tour of the Highlands was just fantastic, and a great way to start off my year studying in Scotland. I swam in a freezing lake – stopped at the ruins of a medieval castle and chatted with the tour guide all the way home on the bus. He was a great character, really friendly, and took his responsibilities seriously. I learnt a lot, and without him, I wouldn't have had half as much fun. There's little doubt in my mind that I'll be returning there someday – they were some of the most beautiful places I've seen in my life." },
        { speaker: 'Speaker 2', answer: 'B', explanation: "官方答案 B：计划下次重游时换一种玩法。原文：\"That's why it's one place I genuinely want to go back but next time with friends and I'd take in some sights!\"", transcript: "Speaker 2\nIt was the first time I'd set foot in mainland Europe, and in reality it was my first experience of real travel. I wasn't exactly prepared for the big city – for example I walked half a day to one of the main sights because I hadn't thought of using public transport. That's why it's one place I genuinely want to go back but next time with friends and I'd take in some sights! I may have missed. The trip does have one up on many of the other cities and countries that I've visited since, as it was the first time I'd realised how amazing travelling can be." },
        { speaker: 'Speaker 3', answer: 'G', explanation: "官方答案 G：起初并不喜欢这座城市。原文：\"To be honest, I was a bit disappointed when I arrived in the city\"", transcript: "Speaker 3\nTo be honest, I was a bit disappointed when I arrived in the city, partly because at the time it reminded me of every other major European city I'd seen, and partly because I was sharing a room in a youth hostel with five girls I didn't know who talked and laughed until the early hours. Looking back on it now, I realise I judged the city a bit too harshly. I actually had a great time riding the double-decker tour bus around during the day, and eating at little local restaurants in the evening. I also met some interesting people, and I might go back and stay with one of them." },
        { speaker: 'Speaker 4', answer: 'C', explanation: "官方答案 C：同行期间加深了对一些朋友的了解。原文：\"I think you see another side of your friends if you travel together, and we all feel even closer to each other than before.\"", transcript: "Speaker 4\nMy trip to London was spent with two buddies from high school; one who was studying in Holland, and one who was actually studying in London. It may not seem all that significant, but if you'd asked any of the three of us when we were back in high school what we'd be doing in the future, I seriously doubt any of us would've said meeting up in London while studying abroad. I think you see another side of your friends if you travel together, and we all feel even closer to each other than before. I'm sure we'll all go back one day." },
        { speaker: 'Speaker 5', answer: 'E', explanation: "官方答案 E：重游同一地点时感受与之前不同。原文：\"I went to the capital twice, and the second time was with my family when they came over to visit towards the end of my second term. It was great, because my family paid for me to do everything that I was too poor to do the first time around.\"", transcript: "Speaker 5\nI went to the capital twice, and the second time was with my family when they came over to visit towards the end of my second term. It was great, because my family paid for me to do everything that I was too poor to do the first time around. But more importantly, I was happy to be able to enjoy my travels with the people that mean the most to me. My parents had never been to the capital before, so were happy to visit all the main sights during the day and wander around soaking up the atmosphere in the evenings." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        "You will hear an interview with a musician called Jarrold Harding, who's talking about his career. For questions 24–30, choose the best answer (A, B or C).",
      audio: '/audio/fce/std1/std1-t2-p4.mp3',
      transcript: "You will hear an interview with a musician called Jarrold Harding who's talking about his career. For questions 24 to 30, choose the best answer (A, B or C).\nYou now have one minute to look at Part Four.\nInterviewer: We are very pleased to welcome the violinist and conductor Jarrold Harding, who has come to tell us about how he began his career as a musician.\nJarrold: Hello.\nInterviewer: Well first of all, Jarrold, how did your interest in music begin?\nJarrold: My father was a violinist in an orchestra, and from an early age I would go with him when they were rehearsing for concerts. I would sit with the violinists, and listen. I learned a lot, and everyone was very kind to me. I actually composed my first piece of music for the violin when I was six years old. My father treasured it!\nInterviewer: And when did you start playing in public?\nJarrold: When I was around eight years old, my father started playing in a small orchestra at a holiday resort in the summer. All the family went with him – it was on the coast, and that way we had a break we couldn't have afforded otherwise. I sometimes went along to performances, and I played in my first concert there at the age of eleven, just for fun. My mother also played the piano in a hotel in the evenings.\nInterviewer: So your mother was a musician, too? Tell us about her.\nJarrold: Sure. She was an amazing pianist! She knew all the music she played by heart – everything! And that was after playing it through just a couple of times to get it right. I learned that from her, and that's what I do on the violin, too – because I don't have to read the notes, I can concentrate on my playing and avoid errors.\nInterviewer: And what made you interested in conducting?\nJarrold: From the very start, conductors fascinated me a great deal! I dreamt of becoming one from the first time I saw an orchestra. When I listened to recordings at home, I would conduct them! But my father insisted that I become a violinist, and he also taught me. So that's what I did, but I never gave up my old dream.\nInterviewer: You studied music at one of the colleges. Did you enjoy it?\nJarrold: I could do the violin playing anyway, of course, which my father had taught me. But then, so could everyone else. And, naturally, I perfected my technique at college and broadened the range of music I played. But some of the others found the discipline and commitment required of us too demanding. But because of my upbringing, I was used to that.\nInterviewer: So what happened when you left college?\nJarrold: Well, just when I was about to start a career as a violinist, I started learning to be a conductor too! Even after college, I needed to carry on improving, so I was having private lessons with a professional violinist. And his wife – although not a professional musician – taught me conducting technique. She insisted that I took lessons from a teacher she knew who had many well-known conductors as students. He himself wasn't a well-known conductor, but as an instructor he was the best, and very enthusiastic.\nInterviewer: Since then, you've become well known as both a violinist and a conductor. Has it been difficult to have both these careers?\nJarrold: On the contrary – I've learned so much from the conductors I've played with as a violin soloist. Even when one plays the same violin piece often, it's still always different every time. One can therefore learn a great deal, especially as I've had the good fortune to practically always play under the best conductors in the world. And I haven't only learned from seeing and hearing them, but I've always taken the time to consult them, to discuss the smallest details with them, and to continuously improve myself.\nInterviewer: Well, unfortunately we've run out of time – but thank you very much, it's been a great pleasure speaking to you. And the very best of luck in the future!\nJarrold: Thank you!\nNow you will hear Part Four again.\nThat is the end of Part Four.\nThere will now be a pause of five minutes for you to copy your answers onto the separate answer sheet. Be sure to follow the numbering of all the questions. I shall remind you when there is one minute left, so that you are sure to finish in time.\n[Teacher, pause the recording here for five minutes. Remind students when they have one minute left.]\nThat is the end of the test. Please stop now. Your supervisor will now collect all the question papers and answer sheets.",
      items: [
        {
          q: "How did Jarrold's interest in music begin?",
          opts: [
            "He went to one of his father's concerts.",
            'He was given lessons by an orchestra violinist.',
            'He watched musicians practising.',
          ],
          answer: 2,
          explanation: "官方答案为 C：他对音乐的兴趣始于观看乐手排练。原文：\"My father was a violinist in an orchestra, and from an early age I would go with him when they were rehearsing for concerts.\"",
        },
        {
          q: 'Jarrold played in his first concert',
          opts: [
            'together with his mother.',
            'when he was away on holiday with his parents.',
            'to make his father happy.',
          ],
          answer: 1,
          explanation: "官方答案为 B：首场演出是随父母外出度假时进行的。原文：\"All the family went with him – it was on the coast, and that way we had a break we couldn't have afforded otherwise. I sometimes went along to performances, and I played in my first concert there at the age of eleven, just for fun.\"",
        },
        {
          q: "What impressed Jarrold about his mother's musical ability?",
          opts: [
            'She never made any mistakes.',
            'She could memorise music very quickly.',
            'She could adapt piano music for his violin.',
          ],
          answer: 1,
          explanation: "官方答案为 B：母亲的过人之处是能很快记住乐谱。原文：\"She knew all the music she played by heart – everything! And that was after playing it through just a couple of times to get it right.\"",
        },
        {
          q: 'What does Jarrold say about his interest in conducting?',
          opts: [
            'It began at an early age.',
            'It was encouraged by his father.',
            'It increased when he heard famous musicians.',
          ],
          answer: 0,
          explanation: "官方答案为 A：对指挥的兴趣从很小就开始了。原文：\"From the very start, conductors fascinated me a great deal! I dreamt of becoming one from the first time I saw an orchestra.\"",
        },
        {
          q: 'How did Jarrold feel when he was at college?',
          opts: [
            "relieved to find he didn't have to work too hard",
            'pleased at how well he played compared to everyone else',
            'glad he could cope with things that some students struggled with',
          ],
          answer: 2,
          explanation: "官方答案为 C：他庆幸自己能应付一些同学感到吃力的内容。原文：\"But some of the others found the discipline and commitment required of us too demanding. But because of my upbringing, I was used to that.\"",
        },
        {
          q: 'What did Jarrold do after leaving college?',
          opts: [
            'He tried to devote all his time to conducting.',
            'He was introduced to a good conducting teacher.',
            'He had lessons with a famous conductor.',
          ],
          answer: 1,
          explanation: "官方答案为 B：毕业后经人介绍遇到一位优秀的指挥老师。原文：\"She insisted that I took lessons from a teacher she knew who had many well-known conductors as students. He himself wasn't a well-known conductor, but as an instructor he was the best, and very enthusiastic.\"",
        },
        {
          q: 'Jarrold thinks that being both a violinist and a conductor',
          opts: [
            'has given him opportunities to develop as a musician.',
            'has allowed him more freedom to play where he wants.',
            'has earned him the respect of other professionals.',
          ],
          answer: 0,
          explanation: "官方答案为 A：身兼小提琴手与指挥让他有机会作为音乐家继续成长。原文：\"And I haven't only learned from seeing and hearing them, but I've always taken the time to consult them, to discuss the smallest details with them, and to continuously improve myself.\"",
        },
      ],
    },
  },
};

// ===== 标准版1 · Test 3（书页 66–71；Key: 书 145/PDF 144，已逐题核对） =====
const STD1_L3 = {
  meta: {
    id: 'fce-standard-1-test3-listening',
    title: 'FCE 标准版真题 1 · Test 3 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 66–71',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 3 Key（书 145 / PDF 144，Listening 答案区）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      type: 'mcq_situation',
      audio: '/audio/fce/std1/std1-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear a young actor talking about a colleague.',
          q: 'What does he say about her?',
          opts: [
            'She makes acting seem easy.',
            'She speaks very slowly.',
            'She gives him good advice.',
          ],
          answer: 0,
          transcript: "One.\nYou hear a young actor talking about a colleague.\nJust watching her work is very useful. I've only been acting for about a year so I've got so much to learn. When you meet someone who's as famous as she is, there's always a bit of nerves. She's an intelligent actor and everything she does seems so effortless. As I've got such a small part in the drama, I get to stand around a lot during the scenes and it means I can watch and learn from her. She's very composed when she's acting; she takes her time to say her lines.",
          explanation: "Key 为 A，他称赞这位同事让演戏看起来很容易；B、C 与题意不符。原文：\"She's an intelligent actor and everything she does seems so effortless.\"",
        },
        {
          scenario: 'You hear two friends talking about a colleague.',
          q: 'What do they agree about?',
          opts: [
            'how ambitious he is',
            'how well-paid he is',
            'how stressed he is',
          ],
          answer: 0,
          transcript: "Two.\nYou hear two friends talking about a colleague.\nWoman: I don't know how he does it – he gets into the office before everyone else in the morning, and he's also always the last to leave. He must be exhausted all the time!\nMan: He seems pretty fit, though – and whenever I see him at the weekends, he looks relaxed and happy. Maybe he just likes getting everything done before he goes home.\nWoman: Yeah, maybe you're right ... but he earns just the same as we do, and that's not much.\nMan: It's not too bad, though, is it? And I think he'll be promoted before any of the rest of us are – he's obviously very keen!\nWoman: There's no denying that!",
          explanation: "Key 为 A，两人一致认同的是他雄心很大；男士断言他会最先获得晋升、显然很有上进心，女士表示无可否认，B、C 不是他们达成一致的点。原文：\"I think he'll be promoted before any of the rest of us are – he's obviously very keen!\"",
        },
        {
          scenario: 'You hear an author talking about his new book.',
          q: 'What point is he making about it?',
          opts: [
            'It will be widely read.',
            'It took a long time to write.',
            'It is better than his first book.',
          ],
          answer: 1,
          transcript: "Three.\nYou hear an author talking about his new book.\nThanks for inviting me to come on the programme and talk about my new book. I thought the book might never happen when I was sitting at my desk day after day. I wished the words would simply flow out like they did when I was writing my other books. Sometimes I wondered if I'd ever get it finished. Of course, I know it's unlikely to be become a best-seller, but I hope that my loyal readers will enjoy it. They'll recognise some of the characters from my first novel, older and wiser – at least in some cases!",
          explanation: "Key 为 B，他强调这本书花了很长时间才写成，日复一日坐在书桌前一度担心写不完；A、C 与题意不符。原文：\"I thought the book might never happen when I was sitting at my desk day after day.\"",
        },
        {
          scenario: 'You hear two friends talking about something they saw on TV.',
          q: 'What did they see?',
          opts: [
            'an advertisement',
            'a comedy series',
            'a documentary',
          ],
          answer: 0,
          transcript: "Four.\nYou hear two friends talking about something they saw on TV.\nMan: It's funny really, but I just didn't get it. Everyone was talking about it, but I just thought it was silly.\nWoman: You mean you wanted more information?\nMan: Exactly! I mean what's the point of something like that? It didn't even make me laugh.\nWoman: Oh come on, you have to admit it was pretty funny!\nMan: Well I didn't think so. And it was annoying the way everybody whistled the tune all the time. Why on earth would that make me buy something?\nWoman: I think you're too serious sometimes. It was just a bit of fun. If you want to find out more, then look on the internet.",
          explanation: "Key 为 A，他们看到的是一则广告；男士抱怨“那怎么会让我去买东西”，正是对广告的反应，B、C 与题意不符。原文：\"Why on earth would that make me buy something?\"",
        },
        {
          scenario: 'You hear an office manager talking about her work.',
          q: 'How does she feel about it?',
          opts: [
            'confident that she can do it well',
            'interested in her new project',
            'satisfied with her staff',
          ],
          answer: 0,
          transcript: "Five.\nYou hear an office manager talking about her work.\nYou know how it is ... as soon as you've finished one project, you have to get started on something else, and it's often something completely different. I don't find that a problem though, and I enjoy the fact that I can get it done effectively – after all, I've been in this job for a long time so I think I can say I know what I'm doing! I wish that was true of the people I'm working with – I reckon if I didn't keep checking, they'd never get on with things! Though I guess I'm not feeling very motivated about this project either.",
          explanation: "Key 为 A，她相信自己能把这份工作做好；B、C 与题意不符。原文：\"I've been in this job for a long time so I think I can say I know what I'm doing!\"",
        },
        {
          scenario: 'You overhear two friends talking in a restaurant.',
          q: 'What do they agree about?',
          opts: [
            'how reasonable the price is',
            'how spicy the food is',
            'how varied the menu is',
          ],
          answer: 0,
          transcript: "Six.\nYou overhear two friends talking in a restaurant.\nMan: Hmm! Delicious soup!\nWoman: You think so? It's a bit hot, isn't it?\nMan: What do you mean, hot? Too many spices, or the temperature?\nWoman: It burned my mouth.\nMan: Well, you should have had something else. There was plenty to choose from.\nWoman: There may have been for you, but don't forget I'm a vegetarian – there wasn't much there for me.\nMan: But at least we haven't paid a fortune for it.\nWoman: Um, I couldn't even make it at home for that price. But I still think we should go somewhere else next time ...",
          explanation: "Key 为 A，两人认同的是这家店价格公道；男士说至少没花大价钱，女士说这个价钱在家根本做不出来，B、C 不是他们认同的内容。原文：\"But at least we haven't paid a fortune for it.\"",
        },
        {
          scenario: "You hear a woman talking about her neighbours' holiday photographs.",
          q: 'What is she doing?',
          opts: [
            'complaining about having to look at them',
            "admiring her neighbours' photography skills",
            'suggesting how they could be improved',
          ],
          answer: 1,
          transcript: "Seven.\nYou hear a woman talking about her neighbours' holiday photographs.\nThey always invite us round for dinner after they've been on holiday, and show us all the photos they've taken. I didn't like the dinner much, but of course I didn't say anything. They go to some interesting places, and they actually do pretty well considering they don't have expensive equipment, or any training as photographers. I wish I could remember the name of the place they went to this summer – that's really annoying – I should have written it down. I'll have to ask them next time I see them.",
          explanation: "Key 为 B，她是在称赞邻居的摄影技术；A、C 与题意不符。原文：\"They go to some interesting places, and they actually do pretty well considering they don't have expensive equipment, or any training as photographers.\"",
        },
        {
          scenario: "You hear two friends talking about a concert they've just been to.",
          q: 'What did they find disappointing about it?',
          opts: [
            'the poor sound quality',
            'the seats they had booked',
            'the lack of air conditioning',
          ],
          answer: 1,
          transcript: "Eight.\nYou hear two friends talking about a concert they've just been to.\nWoman: I really enjoyed that, didn't you, despite the technical problems at the beginning.\nMan: Wonderful. Spanish flamenco music just makes you want to get up and dance.\nWoman: I noticed you standing up at one stage.\nMan: Yeah, but that was to get a better view.\nWoman: Ahh – yes, pity we were at the back. But it was all that was available when I bought the tickets on Friday.\nMan: I know, but next time we must book earlier.\nWoman: It was very hot in there.\nMan: Did that bother you? I just kept thinking it was like summer in Spain. I loved all the singing and the rhythm of the sticks they beat on the floor.\nWoman: Me too.",
          explanation: "Key 为 B，让他们失望的是订到的座位，周五买票时只剩后排；A、C 与题意不符。原文：\"Ahh – yes, pity we were at the back. But it was all that was available when I bought the tickets on Friday.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      instruction:
        'You will hear a man called Henry Lee giving a talk about the first time he went skydiving. For questions 9–18, complete the sentences with a word or short phrase.',
      type: 'blanks',
      audio: '/audio/fce/std1/std1-t3-p2.mp3',
      transcript: "You will hear a man called Henry Lee giving a talk about the first time he went skydiving. For questions 9 to 18, complete the sentences with a word or short phrase.\nYou now have forty-five seconds to look at Part Two.\nHello, my name is Henry Lee and I've been skydiving for several years now but I'm here today to tell you about my first experience. The idea of skydiving is that you jump out of a plane wearing a parachute but the parachute doesn't open immediately. I'd always wanted to learn to skydive and when I was twenty, a friend bought me a skydiving lesson for my birthday. Now, my birthday is in December when the weather isn't right for this type of sport so I decided to wait a bit until the weather improved around March. Anyway, as it turned out, it wasn't until May that I finally got round to it.\nI arrived at the skydiving club for my lesson and found that there were around seven other people who were jumping that day. We all had to sign a number of forms, and we looked at a short video about basic technique before having a presentation about safety. Then I was introduced to David, my instructor. As I was a beginner, I wouldn't be jumping out of the plane alone. I would be attached to David and he would be in total control of the jump. David gave me most of the stuff I would need to wear – some overalls to wear over my clothes and a pair of goggles and, crucially, a helmet. I didn't need to have a parachute as David would wear one.\nThere were thirteen of us on the plane; four of us were beginners with our instructors, and three solo jumpers and two cameramen who would film the dive for the club. It was an old cargo plane, without windows and, interestingly, there were no seats – just some metal boxes which were normally used for luggage – so it was quite uncomfortable. The plane trip was fine and during it I asked David how long he'd been skydiving. He said he'd started about three years ago and had seven hundred jumps to his name. Other guys on the plane though, had done over a thousand.\nWhen we were a few minutes away from jumping I attached myself to David, who was wearing a system of belts called a harness. I also put on a pair of gloves which I'd been told to bring with me. I'd been very excited when we took off and I thought I would feel absolutely terrified when the plane door was opened. But actually I was completely calm. Once we reached the right height above the ground, the pilot cried out, 'Door!' and the more advanced divers just jumped out of the plane. When I reached the door I sat down in it and looked out over the ground below. I could see a farmer's fields and a large house. What caught my eye was a river which looked silver rather than bright blue or dark grey, winding its way across the countryside. David and I were the last people out of the plane. We jumped with me facing downwards attached to David's body. There were about forty or fifty seconds until he opened the parachute.\nThe landing was a bit different from what I thought it would be. I thought you'd hit the ground hard and fast and have to try hard not to break a leg. My landing was actually more like a feather falling to earth and I didn't realise I was on the ground until I saw the parachute all around me. Everyone who completes the jump successfully is given a bag which contains a certificate, a discount voucher and a photograph of their jump. Only when I got home did I realise there was a T-shirt at the bottom of the bag. That was a nice surprise. I put my name down on the club notice board to have more lessons. My first skydiving experience was one that I'll never forget and I'd recommend the sport to anyone.\nNow you will hear Part Two again.\nThat is the end of Part Two.\nNow turn to Part Three.",
      items: [
        {
          q: 'Henry had his first skydiving lesson in the month of ____ .',
          answer: ['May'],
          show: 'May',
          explanation: 'Key 为 May，他第一次上跳伞课是在五月。',
        },
        {
          q: 'Henry had to attend a talk about ____ before his jump.',
          answer: ['safety'],
          show: 'safety',
          explanation: 'Key 为 safety，跳伞前他必须参加一场安全讲座。',
        },
        {
          q: 'Henry says that a ____ was the most important piece of equipment he was given.',
          answer: ['helmet'],
          show: 'helmet',
          explanation: 'Key 为 helmet，他认为头盔是拿到手的装备中最重要的。',
        },
        {
          q: "Henry was surprised that the plane the club used didn't have any ____ in it.",
          answer: ['seats'],
          show: 'seats',
          explanation: 'Key 为 seats，他惊讶俱乐部用的飞机里没有座位。',
        },
        {
          q: "Henry's instructor had jumped a total of ____ times in the past.",
          answer: ['700', 'seven hundred'],
          show: '700 / seven hundred',
          explanation: 'Key 为 700 / seven hundred，教练过去总共跳过七百次。',
        },
        {
          q: 'Henry had brought some ____ with him to wear during the jump.',
          answer: ['gloves'],
          show: 'gloves',
          explanation: 'Key 为 gloves，他自带了手套在跳伞时佩戴。',
        },
        {
          q: 'Henry said he felt totally ____ when the plane door was opened.',
          answer: ['calm'],
          show: 'calm',
          explanation: 'Key 为 calm，舱门打开时他说自己感到十分平静。',
        },
        {
          q: 'Henry uses the word ____ to describe the winding river he could see below him.',
          answer: ['silver'],
          show: 'silver',
          explanation: 'Key 为 silver，他用这个词形容脚下蜿蜒的河流。',
        },
        {
          q: 'Henry compares his landing to that of a ____ landing on the ground.',
          answer: ['feather'],
          show: 'feather',
          explanation: 'Key 为 feather，他把落地比作羽毛落在地上。',
        },
        {
          q: 'Henry was pleased to be given a ____ after his jump.',
          answer: ['T-shirt'],
          show: 'T-shirt',
          explanation: 'Key 为 T-shirt，跳完后他获赠一件 T 恤。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      instruction:
        'You will hear five short extracts in which students are talking about the experience of living and studying away from home. For questions 19–23, choose from the list (A–H) what each student says. Use the letters only once. There are three extra letters which you do not need to use.',
      type: 'matching',
      audio: '/audio/fce/std1/std1-t3-p3.mp3',
      options: [
        { label: 'A', text: 'I was much younger than the other people I lived with.' },
        { label: 'B', text: "I'm still closest to the people I grew up with." },
        { label: 'C', text: 'I found that joining a sports club helped me make friends.' },
        { label: 'D', text: "I didn't share many interests with my classmates." },
        { label: 'E', text: 'It was easier making friends at a small college.' },
        { label: 'F', text: 'It was hard getting out to make friends at first.' },
        { label: 'G', text: "I'm still in touch with the people I lived with at first." },
        { label: 'H', text: 'It was good living with people who had similar interests.' },
      ],
      items: [
        {
          speaker: 'Speaker 1',
          answer: 'H',
          transcript: "Speaker 1\nComing from a mountain village about sixty kilometres away, and not knowing anyone in the city, I had no choice really – I had to ask for a place in a college residence. I knew it wouldn't be easy making new friends, but I was assured I'd be with my classmates. It was a surprise to find the other guys in my block were all studying different things. Actually though, we were all the same age and into sports and stuff, so we got on really well from day one. It was a pity we all went our separate ways after that first year together. I should've made more effort to stay in touch.",
          explanation: "Key 为 H，Speaker 1 觉得和兴趣相近的人一起生活很好，大家年龄相仿、都爱运动，从第一天起就相处融洽。原文：\"Actually though, we were all the same age and into sports and stuff, so we got on really well from day one.\"",
        },
        {
          speaker: 'Speaker 2',
          answer: 'E',
          transcript: "Speaker 2\nI wanted to study fashion, so I had to come to the capital, but it was hard leaving my friends back home. My older sister studied here too. She made friends really quickly because she's really into sports and joined loads of clubs. But I've always been quite shy, so I didn't do that. Fortunately, the college accommodation office found me a room in a residence and I got friendly with the other girls living there. I don't know how I'd have got on at a big university, but here everyone knows each other – so you get to know people you wouldn't normally have that much in common with – it's nice.",
          explanation: "Key 为 E，Speaker 2 认为在小规模的学院更容易交到朋友。原文：\"I don't know how I'd have got on at a big university, but here everyone knows each other – so you get to know people you wouldn't normally have that much in common with – it's nice.\"",
        },
        {
          speaker: 'Speaker 3',
          answer: 'F',
          transcript: "Speaker 3\nIn my first few weeks here, I came down with a heavy cold that meant I couldn't go out much. I'd been put in a student residence with a bunch of younger guys who were all studying theatre – so as a scientist I had nothing in common with them – they weren't even into football! So I really needed to get to know my classmates better – yet there I was stuck in my room coughing and sneezing. I spent a lot of time chatting to friends back home on the Internet. Anyway, in a big college like this, you eventually have to make friends – so it all sorted itself out in the end.",
          explanation: "Key 为 F，Speaker 3 起初很难走出去交朋友，重感冒让她一直困在房间里咳嗽打喷嚏。原文：\"So I really needed to get to know my classmates better – yet there I was stuck in my room coughing and sneezing.\"",
        },
        {
          speaker: 'Speaker 4',
          answer: 'C',
          transcript: "Speaker 4\nI was put in a student residence at first with people I didn't get along with that well. I mean, we didn't fall out or anything, but I didn't hang out with them either. I don't know what I'd have done if I hadn't signed up for volleyball training with the college team. It's a whole lot easier making friends with people who share your interests than with people who share your kitchen! The only downside for me in that first term was that I spent too much time on court and not enough in the library! I don't regret it, but had to make up for lost time later on!",
          explanation: "Key 为 C，Speaker 4 靠加入体育俱乐部交到了朋友。原文：\"I don't know what I'd have done if I hadn't signed up for volleyball training with the college team.\"",
        },
        {
          speaker: 'Speaker 5',
          answer: 'G',
          transcript: "Speaker 5\nThe people I hung out with in the first few weeks didn't become close friends actually. We were just people who happened to be thrown together in the same residence, but it was good to have someone to chat to when I got in from lectures. We still play tennis occasionally and I get invited to their parties, but I soon moved out to go live with some guys on my course. That was a big mistake actually. With friends at school, it was great to study together in the evenings – but I soon found that the last thing I wanted to talk about when I got back from lectures was economics!",
          explanation: "Key 为 G，Speaker 5 仍与最初同住的人保持联系。原文：\"We still play tennis occasionally and I get invited to their parties, but I soon moved out to go live with some guys on my course.\"",
        },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      instruction:
        'You will hear an interview with a student athlete called Chelsea Matthews, who plays soccer for her college. For questions 24–30, choose the best answer (A, B or C).',
      type: 'mcq',
      audio: '/audio/fce/std1/std1-t3-p4.mp3',
      transcript: "You will hear an interview with a student athlete called Chelsea Matthews, who plays soccer for her college. For questions 24 to 30, choose the best answer (A, B or C).\nYou now have one minute to look at Part Four.\nInterviewer: I'm talking to student athlete, Chelsea Matthews. Chelsea, what impact does playing soccer have on your life?\nChelsea: For the past two years, I've played soccer for my college. And we train extremely hard almost every day during the year. We can only keep up by doing extra work at home. We travel by bus for hours and hours, missing out on typical college events and we sometimes spend our precious vacation time training abroad. But I love it.\nInterviewer: How young were you when you started playing soccer?\nChelsea: Six, and I always dreamt of playing in college. By the time I was sixteen, I'd picked out my college, and started my training. While other teenagers were focused on parties, I was already planning my life as a college student-athlete. It has to be done that early, or you'll miss so much, and won't get through all the formalities that make you eligible to play. The one thing sports associations love more than trophies is paperwork.\nInterviewer: When does your year start at college?\nChelsea: Well, because of where soccer falls in the school year (August to October), I have to arrive at my college about a month before classes start.\nInterviewer: Are you happy about that?\nChelsea: Yes I'm used to it. On August first me and my team-mates return, and get straight back into school mode. By August second, I'll be up at six am to start my training. Every college sport has a two-week 'pre-season' which is tough but essential. We run, lift, pass, kick, run more, and, basically, kill ourselves. Our coach is good, though, and keeps us motivated in spite of the pain.\nInterviewer: Do you have time to have some fun after training?\nChelsea: I don't know about other sports teams but we do have a little fun as a team after workouts. There's no partying in pre-season though. By the time seven pm rolls around, we're all so weary we just get in bed, crash, and know no more until the alarm goes off. Movies are out, and if it weren't for the Internet, we'd never even get to watch TV! And it only gets harder once school starts.\nInterviewer: Are you allowed to miss class?\nChelsea: During the season, thanks to away games, we frequently miss class. Other students see us athletes going up to professors, saying we'll be away, and they're probably jealous of the number of excused absences we get. But honestly, missing class is the worst part of being an athlete. First, our grades have to remain high or we could lose our place on the team. Second, the head of faculty allows a maximum number of hours we can take off class, and it's not that many.\nInterviewer: How have you personally managed?\nChelsea: I basically taught myself Business Calculus in my freshman year, because I missed some classes due to away games and had to be able to understand what was going on when I got back. You can trust me on this: trying to read, write, calculate, or draw on a moving bus with thirty other girls at ten thirty at night isn't the best way to get a grade A. And because of all those absences, when I get sick (which happens when you're on the road so much) I still have to go to class.\nInterviewer: In conclusion, any regrets?\nChelsea: It's hard work to try and balance school, soccer and a social life. But I love playing soccer, and I love my team. It's thirty girls who all want the same thing: to win. We work together both off and on the field; we run together, we cheer each other on, we help each other with studies. My team are my best friends. I chose this life, and it's given me ambition, shown me I must try to be the best – academically, athletically and personally.\nNow you will hear Part Four again.\nThat is the end of Part Four.\nThere will now be a pause of five minutes for you to copy your answers onto the separate answer sheet. Be sure to follow the numbering of all the questions. I shall remind you when there is one minute left, so that you are sure to finish in time.\n[Teacher, pause the recording here for five minutes. Remind students when they have one minute left.]\nThat is the end of the test. Please stop now. Your supervisor will now collect all the question papers and answer sheets.",
      items: [
        {
          q: "What impact does playing soccer have on Chelsea's life?",
          opts: [
            'She needs private tuition from her teachers.',
            "She doesn't take part in some other student activities.",
            'She never gets to travel to other countries.',
          ],
          answer: 1,
          explanation: "Key 为 B，踢球使她无法参加某些其他学生活动；A、C 与题意不符。原文：\"We travel by bus for hours and hours, missing out on typical college events and we sometimes spend our precious vacation time training abroad.\"",
        },
        {
          q: 'Chelsea had to start planning to be a student athlete at 16 because',
          opts: [
            'there were many requirements that had to be met.',
            'there were few colleges that offered the course she wanted.',
            'there was a lot of competition for places in good colleges.',
          ],
          answer: 0,
          explanation: "Key 为 A，因为有许多必须满足的资格手续，她 16 岁就得开始规划；B、C 与题意不符。原文：\"It has to be done that early, or you'll miss so much, and won't get through all the formalities that make you eligible to play.\"",
        },
        {
          q: 'Chelsea is happy to return to college a month early because',
          opts: [
            'she is pleased at the prospect of starting competitions.',
            'she feels relieved to get back into a routine.',
            'she realises that training is necessary.',
          ],
          answer: 2,
          explanation: "Key 为 C，她提前返校是因为明白训练是必要的，季前训练虽然艰苦但不可或缺；A、B 与题意不符。原文：\"Every college sport has a two-week 'pre-season' which is tough but essential.\"",
        },
        {
          q: 'When Chelsea and her team-mates finish training, they',
          opts: [
            'can take a break by going to the movies.',
            'are too tired to do very much except sleep.',
            'relax with other sports teams.',
          ],
          answer: 1,
          explanation: "Key 为 B，训练结束后他们累得除了睡觉什么都做不了；A、C 与题意不符。原文：\"By the time seven pm rolls around, we're all so weary we just get in bed, crash, and know no more until the alarm goes off.\"",
        },
        {
          q: 'Chelsea says if she and her team-mates miss too many classes',
          opts: [
            'they may get poor grades and have to leave the team.',
            'their professors will complain to the head of faculty.',
            'the other students are understanding about the reason for their absence.',
          ],
          answer: 0,
          explanation: "Key 为 A，缺课太多可能成绩下滑并被要求离队；B、C 与题意不符。原文：\"First, our grades have to remain high or we could lose our place on the team.\"",
        },
        {
          q: 'What problem did Chelsea herself have in keeping up with her studies?',
          opts: [
            'She was away sick for some of her classes.',
            'She had to study one subject under difficult conditions.',
            'She was expected to commit herself to extra training for away games.',
          ],
          answer: 1,
          explanation: "Key 为 B，她本人曾在困难条件下学习一门科目：因客场缺课只能自学 Business Calculus，还常要在深夜满载的大巴上完成功课；A、C 与题意不符。原文：\"I basically taught myself Business Calculus in my freshman year, because I missed some classes due to away games and had to be able to understand what was going on when I got back. You can trust me on this: trying to read, write, calculate, or draw on a moving bus with thirty other girls at ten thirty at night isn't the best way to get a grade A.\"",
        },
        {
          q: 'In conclusion, what does Chelsea say about being a student athlete?',
          opts: [
            'It has taught her the importance of aiming high.',
            'It has helped her decide what her future career should be.',
            'It has changed her perception of the value of friendship.',
          ],
          answer: 0,
          explanation: "Key 为 A，这段经历教会她树立高目标的重要性；B、C 与题意不符。原文：\"I chose this life, and it's given me ambition, shown me I must try to be the best – academically, athletically and personally.\"",
        },
      ],
    },
  },
};

// ===== 标准版1 · Test 4（书页 88–93；Key: 书 156/PDF 155，已逐题核对） =====
// Cambridge English First 1（标准版1）Test 4 Listening
// 逐字转录自 cen_first_1_with_answers .pdf（用户原件扫描版）PDF 87–92（书 88–93）
// 官方答案核对自 Test 4 Key Listening 区（书 156 / PDF 155）
const STD1_L4 = {
  meta: {
    id: 'fce-standard-1-test4-listening',
    title: 'FCE 标准版真题 1 · Test 4 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 1（标准版1）',
    book: 'Cambridge English First 1',
    paper: 'Listening',
    pages: '书 88–93',
    source: '标准版1 cen_first_1_with_answers .pdf（用户原件扫描版）',
    answerSource: 'Test 4 Key（书 156 / PDF 155，Listening 区）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      type: 'mcq_situation',
      audio: '/audio/fce/std1/std1-t4-p1.mp3',
      items: [
        {
          scenario: 'You hear a sportsperson talking about her sporting career.',
          q: 'What is she going to do in the future?',
          opts: ['change her career', 'become a sports writer', 'train for the next event'],
          answer: 0,
          transcript: "One.\nYou hear a sportsperson talking about her sporting career.\nWhen I work so hard for any competition and then it's over, the following weeks can be really difficult – quite an anti-climax. But then the next competition comes along and I get straight back into training. But this time it'll be different. I'll miss it, of course I will. But at some point in your career you have to say enough is enough and I wanted to finish at the top of my game. I don't have any plans yet but it won't be anything connected with sport. I've always wanted to be a writer so perhaps I'll do a writing course next.",
          explanation: "官方答案为 A，她将来的打算是改变职业（change her career），而非做体育撰稿人或备战下一场比赛。原文：\"I don't have any plans yet but it won't be anything connected with sport. I've always wanted to be a writer so perhaps I'll do a writing course next.\"",
        },
        {
          scenario: 'You hear two friends talking about a laboratory experiment.',
          q: 'How do they both feel now?',
          opts: [
            'anxious about the procedures they used',
            'annoyed about having to repeat it',
            'disappointed with the results',
          ],
          answer: 0,
          transcript: "Two.\nYou hear two friends talking about a laboratory experiment.\nWoman: How do you think the experiment went, then?\nMan: Not sure, really. It was pretty exciting at the time, but now we have to work out what it all means.\nWoman: Yes, it always does take a while to analyse the results. I just hope we did it all properly.\nMan: Yeah, that's what concerns me – if we got anything wrong, then we'll have to start all over again, which would be a pain.\nWoman: True, but I think we were very careful. I can't see why we should have to repeat it all.\nMan: I hope you're right!",
          explanation: "官方答案为 A，两人现在都对实验中采用的步骤感到担心（anxious）：女生希望当时每一步都做对，男生则担心若出了差错就得全部重来。原文：\"Yeah, that's what concerns me – if we got anything wrong, then we'll have to start all over again, which would be a pain.\"",
        },
        {
          scenario: 'You overhear a student calling his university department.',
          q: 'Why is he phoning?',
          opts: ['to make a complaint', 'to find out about a course', 'to book an appointment'],
          answer: 2,
          transcript: "Three.\nYou overhear a student calling his university department.\nHello, I wonder if I could talk to someone about the History of Art course? My teacher told me I could call your department if I needed to discuss anything – and I do. The trouble is, I'm finding it difficult to get all the work for this course module done on time. Even though the classes are great – and that's very much because of the teacher, Mr Flynn – I just can't keep up. So I wondered if I could come in and see the head of department about the problem.",
          explanation: "官方答案为 C，他打电话是为了预约（book an appointment），不是投诉或咨询课程。原文：\"So I wondered if I could come in and see the head of department about the problem.\"",
        },
        {
          scenario: 'You hear two friends talking about a website.',
          q: 'The man thinks that the website is',
          opts: ['helpful.', 'interesting.', 'easy to use.'],
          answer: 2,
          transcript: "Four.\nYou hear two friends talking about a website.\nWoman: Did you have a look at that study skills website I told you about?\nMan: Yes, I did.\nWoman: And what did you think?\nMan: Well, I had no trouble finding my way around it, which was good.\nWoman: Is that all? Did you find any ideas you could use yourself?\nMan: Not really, I'm afraid.\nWoman: Oh dear, it sounds as if you found it a bit dull.\nMan: Well ... it's just that I've seen a lot of those ideas before. It's hard for people to come up with anything new, I suppose.\nWoman: That's true ... if you come across a good one, you'll let me know, won't you?\nMan: Sure!",
          explanation: "官方答案为 C，男生认为这个网站容易上手（easy to use）。原文：\"Well, I had no trouble finding my way around it, which was good.\"",
        },
        {
          scenario: 'You hear a man talking about his decision to become a singer.',
          q: "His mother was unhappy about it because she didn't",
          opts: ['like his kind of music.', 'want him to leave education.', 'think it would suit him.'],
          answer: 1,
          transcript: "Five.\nYou hear a man talking about his decision to become a singer.\nI don't come from a particularly musical family and it was very difficult to tell my parents I wanted to become a singer because they obviously didn't want me to do it. I'm sure my mother would have been equally annoyed if I'd gone into classical music. She just thought music wasn't a viable career choice. She's always had faith in me as a person and knows I'm very determined and would succeed whatever I chose to do but she wanted me to get some qualifications behind me first. Once I started to become successful she was grudgingly happy for me, but she was still convinced it wouldn't last.",
          explanation: "官方答案为 B，母亲不满是因为不希望他放弃学业（leave education）去当歌手。原文：\"She's always had faith in me as a person and knows I'm very determined and would succeed whatever I chose to do but she wanted me to get some qualifications behind me first.\"",
        },
        {
          scenario: 'You overhear a man calling a TV shop.',
          q: 'Why is he calling?',
          opts: ['to cancel an order', 'to arrange a delivery', 'to make a purchase'],
          answer: 1,
          transcript: "Six.\nYou overhear a man calling a TV shop.\nHello, I came into your shop a few days ago to look at TVs. You didn't have the one I wanted in stock, but you said you could order it for me. My name's Hogg, Jim Hogg. I paid when I was in the shop, and I got a message just now saying the TVs arrived. When I came in the other day, your colleague said one of your van drivers could drop it off one evening next week. I'm usually back from work after six, so ...",
          explanation: "官方答案为 B，他致电电视商店是为了安排送货（arrange a delivery）。原文：\"When I came in the other day, your colleague said one of your van drivers could drop it off one evening next week. I'm usually back from work after six, so ...\"",
        },
        {
          scenario: 'You hear two friends talking about a meal.',
          q: 'What do they agree about it?',
          opts: [
            'It was expensive for the amount of food they got.',
            "Some of the foods they were served didn't go well together.",
            "The dishes they were given weren't cooked properly.",
          ],
          answer: 1,
          transcript: "Seven.\nYou hear two friends talking about a meal.\nMan: Well, that meal was OK – I can't manage a dessert. How was your fried fish, Anna?\nAnna: It was quite nice though it could have been hotter. I'm not sure that salad went with it, either. I'd have preferred some cooked vegetables. Yours looked really good, with your steak.\nMan: Yeah – they would've been a much better combination with your meal. Maybe we should've swapped – I like salad with steak. Anyway, it was a pretty reasonable price.\nAnna: Yours was – mine was a bit much, I reckon.\nMan: We both had a lot of food on our plates, though – can't complain about that.\nAnna: I guess not.",
          explanation: "官方答案为 B，两人一致认为有些菜品搭配在一起味道不协调：Anna 觉得沙拉和炸鱼不搭，男生也同意配些蔬菜会更好。原文：\"Yeah – they would've been a much better combination with your meal. Maybe we should've swapped – I like salad with steak.\"",
        },
        {
          scenario: 'You hear a college lecturer talking to a student.',
          q: 'What is he doing?',
          opts: ['giving encouragement', 'offering to help', 'suggesting improvements'],
          answer: 0,
          transcript: "Eight.\nYou hear a college lecturer talking to a student.\nSo that's good news, isn't it? You won't actually need to hand the project in until next month now, which gives you a couple of extra weeks. I know you can do it all yourself, and I'm sure it'll be very good. You've always produced excellent work in the past, haven't you? Everything you need to know has been covered in the lessons, and there are plenty of books in the library. You can also use the computers there if you need to go online for more information. So there's really nothing to worry about, is there?",
          explanation: "官方答案为 A，讲师此时是在给学生鼓励（giving encouragement）。原文：\"I know you can do it all yourself, and I'm sure it'll be very good. You've always produced excellent work in the past, haven't you?\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      instruction:
        'You will hear a girl called Kyra talking about the badminton club she belongs to. For questions 9–18, complete the sentences with a word or short phrase.',
      type: 'blanks',
      audio: '/audio/fce/std1/std1-t4-p2.mp3',
      transcript: "You will hear a girl called Kyra talking about the badminton club she belongs to. For questions 9 to 18, complete the sentences with a word or short phrase.\nYou now have forty-five seconds to look at Part Two.\nHi there. I'm Kyra and I'm a member of the local Badminton club. I'm here to tell you all about the club, and hopefully find a few new members.\nSo, first of all, why badminton? Well, I'd say whatever your level of fitness, you should definitely consider taking up badminton. It's a sociable sport that you can play at any age, whilst requiring very little specific training or equipment.\nBefore I took up badminton, I'd never been very sporty, despite the fact that my brother's a skateboarding champion and my parents are very keen on tennis. The only sport I'd ever really enjoyed was horse-riding. But I didn't even keep that up once I'd left school. It was a friend who talked me into trying badminton, and I've never looked back.\nRegular badminton sessions are held every Wednesday evening at the Sportsworld Centre. But next Sunday we're holding what's known as a 'starter' session. Now this isn't a normal session and nor is it a training session – instead it's a chance for prospective members to come along, have a game and see if they like the sport. Obviously we hope they will, and that they'll sign up – but there's no obligation.\nSo why not come along and find out what it's all about? There's nothing to pay. You should just wear comfortable clothes and trainers. Don't worry if you don't have proper sports gear – and of course you'll be given a racquet and shuttlecocks, and be introduced to a partner, if you're on your own. If you do have any questions, however, just ask a committee member. Everyone at Sportsworld has to wear a badge; you'll be given one at the door, but committee members wear special green ones, so you can't miss them.\nIf you do decide to join the badminton club, then you'll pay an annual fee of thirty-five pounds. Membership of Sportsworld, with access to certain facilities at the centre usually costs forty-five pounds, but is included in the badminton club membership for new members – so that's really good value for money. This gives you, amongst other things, free use of the gym, but not the swimming pool. All our regular sessions are held at Sportsworld, although matches are sometimes held elsewhere.\nOh and I nearly forgot, we also have a shop where you can buy a second-hand racquet or a T-shirt and other stuff, and when you join our club we'll give you a free sports bag – so it's a good deal all round.\nOur regular sessions are open to all members – those who enjoy the social side of the sport, as well as those who are looking for competitive games in order to improve. For our first team, we also offer coaching once a week on Monday evenings from eight to ten. That's a dedicated session just for them.\nAt other times, you might want to come along for a game, and there are sometimes courts available at Sportsworld. Although we have a website, which is regularly updated with club news, it doesn't yet have a court booking facility, unfortunately – so you need to check the club's notice-board at Sportsworld to see what's available.\nThe club also holds regular social events – and for many people that's an important aspect of membership. We put on quiz nights, for example, and often meet up for a meal in a local restaurant. The highlight of the year, however, is the party. We raise a lot of money for the club selling tickets for that.\nSo I hope I've managed to convince you that the badminton club is worth giving a try, and that you'll come along and find out more about us. As a final incentive, if you go up to the Sportsworld café on Sunday and say you're taking part in the badminton club session, you won't get a free drink, but you will get a discount. You see – we really want you to come!\nSo now, before I pass you over to .....\nNow you will hear Part Two again.\nThat is the end of Part Two.\nNow turn to Part Three.",
      items: [
        {
          q: "Before she took up badminton, ____ had been Kyra's favourite sport.",
          answer: ['horse-riding', 'horseriding', 'horse riding'],
          show: 'horse-riding',
          explanation: '官方答案 horse(-)riding：打羽毛球之前，骑马是 Kyra 最喜欢的运动。',
        },
        {
          q: "People interested in joining the club are invited to what's called a '____' session.",
          answer: ['starter'],
          show: 'starter',
          explanation: '官方答案 starter：有意加入者被邀请参加名为“starter”的体验场次。',
        },
        {
          q: 'Club committee members can be identified by the colour of their ____ at sessions.',
          answer: ['badge', 'badges', 'green badge', 'green badges'],
          show: '(green) badge(s)',
          explanation: '官方答案 (green) badge(s)：俱乐部委员通过佩戴（绿色）徽章来识别。',
        },
        {
          q: 'Members of the badminton club pay a membership fee of £ ____ each year.',
          answer: ['35', 'thirty-five', '35 pounds', 'thirty-five pounds'],
          show: '35 / thirty-five (pounds)',
          explanation: '官方答案 35/thirty-five（pounds 可省略）：俱乐部会员年费为 35 英镑。',
        },
        {
          q: 'New badminton club members can use the ____ at Sportsworld without paying.',
          answer: ['gym'],
          show: 'gym',
          explanation: '官方答案 gym：新会员可以免费使用 Sportsworld 的健身房。',
        },
        {
          q: 'When new members join the club, a ____ is given to them as a free gift.',
          answer: ['bag', 'sportsbag', 'sports-bag', 'sports bag'],
          show: '(sports) bag',
          explanation: '官方答案 (sports)(-)bag：新会员入会即获赠运动包作为免费礼物。',
        },
        {
          q: "There is coaching for the club's ____ on Monday evening.",
          answer: ['first-team', 'firstteam', 'first team'],
          show: 'first-team',
          explanation: '官方答案 first(-)team：周一晚上为俱乐部一线队安排训练指导。',
        },
        {
          q: "Members can look at the club's ____ to see which courts are free at Sportsworld.",
          answer: ['noticeboard', 'notice-board', 'notice board'],
          show: 'notice-board',
          explanation: '官方答案 notice(-)board：会员通过布告板查看 Sportsworld 哪些场地空闲。',
        },
        {
          q: "The club's annual ____ is its most popular social event.",
          answer: ['party'],
          show: 'party',
          explanation: '官方答案 party：俱乐部年度聚会是最受欢迎的社交活动。',
        },
        {
          q: 'New badminton club members will be offered a ____ at the Sportsworld café.',
          answer: ['discount'],
          show: 'discount',
          explanation: '官方答案 discount：新会员在 Sportsworld 咖啡厅消费可享受折扣。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      instruction:
        'You will hear five short extracts in which people are talking about why their businesses became successful. For questions 19–23, choose from the list (A–H) what each speaker says. Use the letters only once. There are three extra letters which you do not need to use.',
      type: 'matching',
      audio: '/audio/fce/std1/std1-t4-p3.mp3',
      options: [
        { label: 'A', text: "I don't need to employ anyone." },
        { label: 'B', text: 'I decided to change the way I promoted the business.' },
        { label: 'C', text: 'I took a business course.' },
        { label: 'D', text: 'I was able to get financial backing.' },
        { label: 'E', text: 'I believe in looking after my employees.' },
        { label: 'F', text: 'I believe my business offers a unique service to customers.' },
        { label: 'G', text: 'I learnt a lot from other business people.' },
        { label: 'H', text: 'I made changes because of customer feedback.' },
      ],
      items: [
        {
          speaker: 'Speaker 1',
          answer: 'D',
          transcript: "Speaker 1\nI started making dolls filled with scented herbs for my daughter's friends in 2008. They proved a great hit because parents discovered that the dolls helped their children to sleep at night, so I started my own business making them. I soon couldn't keep up with demand from satisfied customers. I was lucky because I had a great product and I could prove that there was a market for it, so it wasn't difficult to find an investor. If I hadn't been able to do that, I'd still be doing this as a hobby and I certainly wouldn't be employing twenty people. The business has really boomed and last year we doubled our turnover.",
          explanation: "官方答案为 D（第 19 题），该说话人的成功原因是获得了资金支持（financial backing）。原文：\"I was lucky because I had a great product and I could prove that there was a market for it, so it wasn't difficult to find an investor.\"",
        },
        {
          speaker: 'Speaker 2',
          answer: 'G',
          transcript: "Speaker 2\nWhen I bought my first taxi a couple of years ago, I saw it as a way to get out of my career in sales. I'd been thinking about doing it for years, but I felt anxious about the financial commitment. I didn't have a lot of money back then, so I talked to all my contacts – entrepreneurs who ran their own companies – and asked for their suggestions about running a business. They were really generous with their time. Now that I run a very successful taxi business, I've even been asked to give talks to students on business courses. You know, give them a bit of advice and feedback on their work.",
          explanation: "官方答案为 G（第 20 题），该说话人从其他业界人士那里学到了很多。原文：\"I didn't have a lot of money back then, so I talked to all my contacts – entrepreneurs who ran their own companies – and asked for their suggestions about running a business. They were really generous with their time.\"",
        },
        {
          speaker: 'Speaker 3',
          answer: 'B',
          transcript: "Speaker 3\nI've always loved designing gardens and I knew I didn't want to work for someone else, so I put a small advert in the local paper and within a week I'd got my first client. It's not easy persuading people to employ a garden designer because it's something a lot of people think they can do themselves. Three years ago, I started distributing leaflets at the weekends, when most people are doing their gardening. I was able to talk to them in person about their gardens. I got a lot more business that way and it was much better than an ad in the newspaper. My business has really taken off since then and I've got five people working for me now.",
          explanation: "官方答案为 B（第 21 题），该说话人改变了推广业务的方式：由报纸广告改为周末发放传单。原文：\"Three years ago, I started distributing leaflets at the weekends, when most people are doing their gardening. I was able to talk to them in person about their gardens. I got a lot more business that way and it was much better than an ad in the newspaper.\"",
        },
        {
          speaker: 'Speaker 4',
          answer: 'E',
          transcript: "Speaker 4\nMy company is the main marketplace for new and used musical instruments. We sell to everyone from complete beginners to some of the most famous musicians in the industry and I've doubled my turnover in five years without adding any new stores or employing any new staff. Few companies approach things the way I do. See, most music stores provide temporary employment for people who want to be professional musicians. I, on the other hand, invest in my workforce and want them to develop as musicians while they're here. That's why I built a recording studio, which they can use too. When people are passionate about what they do, they're happy – and if they're happy, they sell more!",
          explanation: "官方答案为 E（第 22 题），该说话人重视照顾好自己的员工。原文：\"I, on the other hand, invest in my workforce and want them to develop as musicians while they're here. That's why I built a recording studio, which they can use too.\"",
        },
        {
          speaker: 'Speaker 5',
          answer: 'F',
          transcript: "Speaker 5\nI always had big dreams of working in the entertainment industry. I took a job with an event planner and in my free time I began making props and costumes. The turning point was when I began to see that I had a range of skills other people didn't have. I also knew that advertising myself as a specialist in designing props and entertainment costumes would set me apart from others. Within three years I was earning more money from sewing than from my full-time job so I resigned and concentrated on my business. I took on more contracts and earned eighty thousand dollars in my first year.",
          explanation: "官方答案为 F（第 23 题），该说话人认为自己的业务为客户提供独特服务。原文：\"The turning point was when I began to see that I had a range of skills other people didn't have. I also knew that advertising myself as a specialist in designing props and entertainment costumes would set me apart from others.\"",
        },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      instruction:
        'You will hear a radio interview with a man called Tony Little, who makes wildlife films and works for a wildlife conservation organisation called The Nature Trust. For questions 24–30, choose the best answer (A, B or C).',
      type: 'mcq',
      audio: '/audio/fce/std1/std1-t4-p4.mp3',
      transcript: "You will hear a radio interview with a man called Tony Little, who makes wildlife films and works for a wildlife conservation organisation called The Nature Trust. For questions 24 to 30, choose the best answer (A, B or C).\nYou now have one minute to look at Part Four.\nInterviewer: With me today I have Tony Little, who is well known for making wildlife documentaries and has just been made President of The Nature Trust. Tony, I've got a lot of questions here sent in by our listeners. The first one is: What do you think is going to be your hardest challenge during your time as president?\nTony: Well, I think most people nowadays understand what The Nature Trust is about. We have quite a few neighbourhood groups in the UK now, but these consist mainly of adults and what I want to do is get kids to take an interest too – not always as easy as you might imagine. You know, helping out just for the fun of it – clearing woods and counting different bird species, things like that.\nInterviewer: Another listener wants to know: Is there any special area that you would say needs attention most – for example our use of plastic?\nTony: People are doing quite a bit to help conservation and the environment. However, what we do forget is the rubbish we pump into the sea. The amount of plastic waste we find on beaches is horrendous. And this causes serious problems to wildlife. Changing to paper bags would help enormously, but this might take some time as people are so used to having plastic ones.\nInterviewer: Someone has asked about your new website, Nature Talk. Can you tell us about that?\nTony: It's a project we're launching next month. We're confining ourselves first of all to animals which have a healthy population. There'll be maps on the website so you'll be able to pinpoint where these animals live and information about those areas – whether it's a forest or whatever. We're not expecting you to actually go and visit them.\nInterviewer: You're known for your work with wildlife. Susan Smith wants to know: What have you achieved that you are most proud of?\nTony: Actually, one of my most popular films was the one I did on lions but I didn't feel it got anywhere near, in terms of being closest to my heart, to the time I spent rescuing orphan monkeys. The special sanctuary I set up won a world nature prize. A close second would be the research project I was involved with on whales in the South Atlantic. I spent quite a bit of time there and it was brilliant.\nInterviewer: I have a letter from Peter McDonald, who wants to become a cameraman. Any advice to give him?\nTony: Well, Peter, first of all, let me say, the financial rewards can be great if you get the right pictures. When you start out though, it'll take you some time to get your name known, so jobs will be few and far between. You'll need to stick with it. It's interesting how many people think the job involves sitting in a tree for weeks waiting for an animal to appear, but that isn't always the case and shouldn't put you off applying to be a cameraman.\nInterviewer: Many listeners have asked: Is there any particular equipment that they should get if they want to be a naturalist?\nTony: I guess most people would think it's a camera. I obviously have a large number of different models and they're quite expensive. But I think any type will do, even a cheap one these days is fine. What I wouldn't be without though are my binoculars, so get a top quality pair. Another useful item is a good pair of walking boots, but they aren't top of the list.\nInterviewer: So, a question from me now: What about the future?\nTony: Well, I have lots of ideas for new TV programmes, but not ones about mammals. I think my role should be to persuade people that wildlife isn't just about big, exotic animals. I know that tigers and polar bears are endangered but, you know, so are a number of small insects and also plants which can be found in local parks and gardens. We must make sure people don't forget them either.\nInterviewer: That's great. Well, my thanks to ...\nNow you will hear Part Four again.\nThat is the end of Part Four.\nThere will now be a pause of five minutes for you to copy your answers onto the separate answer sheet. Be sure to follow the numbering of all the questions. I shall remind you when there is one minute left, so that you are sure to finish in time.\n[Teacher, pause the recording here for five minutes. Remind students when they have one minute left.]\nThat is the end of the test. Please stop now. Your supervisor will now collect all the question papers and answer sheets.",
      items: [
        {
          q: 'Tony thinks that the hardest challenge he faces is',
          opts: [
            'to publicise what The Nature Trust does.',
            'to expand the range of people volunteering.',
            'to interest local groups in a variety of activities.',
          ],
          answer: 1,
          explanation: "官方答案为 B，他认为最难的挑战是扩大志愿者的参与范围。原文：\"We have quite a few neighbourhood groups in the UK now, but these consist mainly of adults and what I want to do is get kids to take an interest too – not always as easy as you might imagine.\"",
        },
        {
          q: 'What does Tony think about the use of plastic?',
          opts: [
            "He knows it will be difficult to change people's attitudes to it.",
            'He worries that there is no way of preventing plastic waste.',
            'He believes it causes the biggest problem to wildlife.',
          ],
          answer: 0,
          explanation: "官方答案为 A，他知道要改变人们对塑料使用的态度会很困难。原文：\"Changing to paper bags would help enormously, but this might take some time as people are so used to having plastic ones.\"",
        },
        {
          q: 'Tony hopes that his new website Nature Talk will help people learn',
          opts: [
            'about different animal habitats.',
            'how to watch animals in the wild.',
            'which animals are endangered.',
          ],
          answer: 0,
          explanation: "官方答案为 A，他希望网站能帮助人们了解不同动物的栖息地。原文：\"There'll be maps on the website so you'll be able to pinpoint where these animals live and information about those areas – whether it's a forest or whatever.\"",
        },
        {
          q: 'Tony says the achievement that he is most proud of is',
          opts: [
            'helping to make a popular film.',
            'doing a scientific study.',
            'working on an award-winning project.',
          ],
          answer: 2,
          explanation: "官方答案为 C，他最自豪的成就是参与了一个获奖项目。原文：\"Actually, one of my most popular films was the one I did on lions but I didn't feel it got anywhere near, in terms of being closest to my heart, to the time I spent rescuing orphan monkeys. The special sanctuary I set up won a world nature prize.\"",
        },
        {
          q: 'What disadvantage does Tony mention about having a career as a cameraman?',
          opts: [
            'It is often badly paid.',
            'It can be hard to find enough work.',
            'It usually involves long hours.',
          ],
          answer: 1,
          explanation: "官方答案为 B，他提到做摄影师这一行可能不容易找到足够的工作。原文：\"When you start out though, it'll take you some time to get your name known, so jobs will be few and far between.\"",
        },
        {
          q: 'Tony advises young naturalists that it is essential to have',
          opts: ['suitable walking boots.', 'the latest photography equipment.', 'good binoculars.'],
          answer: 2,
          explanation: "官方答案为 C，他认为年轻自然爱好者必备的装备是一副好的双筒望远镜。原文：\"What I wouldn't be without though are my binoculars, so get a top quality pair.\"",
        },
        {
          q: 'What would Tony like to do in the future?',
          opts: [
            'to help save the tiger and polar bear',
            'to publicise the dangers facing a variety of species',
            'to produce more films for TV about animals',
          ],
          answer: 1,
          explanation: "官方答案为 B，他希望未来能让公众了解多种物种面临的危险。原文：\"I think my role should be to persuade people that wildlife isn't just about big, exotic animals. I know that tigers and polar bears are endangered but, you know, so are a number of small insects and also plants which can be found in local parks and gardens. We must make sure people don't forget them either.\"",
        },
      ],
    },
  },
}

// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 1 = 书内印 Test 5。Listening: 书页 22–27（PDF 23–28），答案核对自 Test 5 Key（Listening 区在书 121 / PDF 122，RUE Key 在书 120 / PDF 121）
// 音频：/audio/fce/std2/std2-t1-p1.mp3 ~ std2-t1-p4.mp3（整 Part 一条；p1=CD1 Track01，p2=CD1 Track03，p3=CD1 Track04，p4=CD1 Track06）
// 注：书 24 页第 14 空所在句印刷原文即为 "...hall of the local University."（University 大写，原书如此，按页面视觉转录原样保留）。
// 注：书 24 页 Part 2 印刷小标题为 "Volunteer at the Children's University"（数据结构无对应字段，记录于此备查）。

const STD2_L1 = {
  meta: {
    id: 'fce-standard-2-test1-listening',
    title: 'FCE 标准版真题 2 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: '书 121 / PDF 122',
    audioNote: '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear part of an interview with a crime writer.',
          q: 'What does he say about his home town?',
          opts: [
            'It was a good background for the writing he does.',
            'He generally feels uncomfortable returning there.',
            'People there tend to treat him differently now.',
          ],
          answer: 0,
          transcript: "You hear part of an interview with a crime writer.\nInterviewer: You came from quite a tough town, didn't you?\nMan: Yes, I did. The experiences I had living there, the people I know, the lessons I had to learn growing up have stood me in good stead for the kind of life I've chosen. I'm streetwise as a result of all that and I feel equipped to write the crime novels that I'm known for. I definitely haven't lived a sheltered life. I still have to go back there a lot to see family. Luckily, as a writer, my face isn't that well known. It's not as if I'm a celebrity with my name on the cover of every magazine.",
          explanation: "官方答案为 A：依据录音内容，他谈到家乡为他的写作提供了背景。原文：\"I'm streetwise as a result of all that and I feel equipped to write the crime novels that I'm known for.\"",
        },
        {
          scenario: 'You hear a careers adviser talking to a woman who has applied for two jobs.',
          q: 'What suggestion does he make?',
          opts: [
            'find out more information about the first job',
            'withdraw the application for the second job',
            'ask the first company to be flexible',
          ],
          answer: 2,
          transcript: "You hear a careers advisor talking to a woman who has applied for two jobs.\nWoman: I've been for two job interviews and I've been offered the first job. I'd prefer the second one but I haven't heard from the company yet. What should I do?\nAdvisor: It's difficult to make the right decision if you don't have all the information to hand. I'd explain to the first employer that you're very pleased to have been offered the job but some other organisations haven't been in touch with you yet. Ask them if it's possible to have a bit more time before you decide. Hopefully, they'll be understanding. Just remember that there could be legal consequences if you accept the first job in writing and then turn it down!",
          explanation: "官方答案为 C：依据录音内容，他建议她请第一家公司灵活通融。原文：\"Ask them if it's possible to have a bit more time before you decide. Hopefully, they'll be understanding.\"",
        },
        {
          scenario: 'You hear a girl talking about a psychology textbook.',
          q: 'What does she say about it?',
          opts: ['It is not very interesting.', 'It is good value for money.', 'It is going to come in useful.'],
          answer: 2,
          transcript: "You hear a girl talking about a psychology text book.\nWell I was quite excited when I finally found this psychology book, because I need it for my assignment. It was hardly cheap, and I know I could get a lot of the information in it for free online, but I still think it was worth getting my own copy of it. It has such clear explanations – I probably won't find anything else as useful. Some books like this can turn out to be pretty boring, I know, but I just don't believe this one will. And it's no more expensive than any of the other coursebooks I have to buy.",
          explanation: "官方答案为 C：依据录音内容，她认为这本教科书以后会派上用场。原文：\"It has such clear explanations – I probably won't find anything else as useful.\"",
        },
        {
          scenario: 'You hear the mother of a famous skier talking about a competition.',
          q: 'She says that her daughter',
          opts: [
            'expected to win the competition.',
            "didn't tell her mother she was entering it.",
            'gave up her job to practise for it.',
          ],
          answer: 1,
          transcript: "You hear the mother of a famous skier talking about a competition.\nWell, I don't know who was more surprised, Kelly or me, that she'd won. She didn't start skiing until she was fourteen so she was quite a late starter really. She went to work in a restaurant in Austria in the year before she went to university and went skiing every day after work. I tried to get in touch with her one day at the restaurant and couldn't – she'd left apparently. Then a couple of days later, she phoned me and said, \"Guess what? I've got a new job in a different restaurant, but more importantly, I've just won the junior skiing championship!\". I couldn't believe it!",
          explanation: "官方答案为 B：依据录音内容，女儿报名参赛并没有告诉母亲。原文：\"Well, I don't know who was more surprised, Kelly or me, that she'd won.\"",
        },
        {
          scenario: 'You hear a film director talking about the actors she works with.',
          q: 'How does she feel about the actors in her current film?',
          opts: [
            'She sympathises with their problems.',
            'She admires the sacrifices they make.',
            'She approves of their attitudes.',
          ],
          answer: 2,
          transcript: "You hear a film director talking about the actors she works with.\nI have to say, having also worked on some very big-budget films, there are all sorts of advantages to working on a small project like this one. Everyone shares a common goal. Actors always have three reasons to act. The first is to make money for their family, the second is to do good work and the third is to get their name in lights. The main actors, Chris and Fiona, are already big names in showbusiness. I don't think they're short of money either. No, they're doing this because they're totally committed to the project.",
          explanation: "官方答案为 C：依据录音内容，她对演员们的态度表示认可。原文：\"No, they're doing this because they're totally committed to the project.\"",
        },
        {
          scenario: 'You hear a man talking about his first job interview.',
          q: 'How did he feel during the interview?',
          opts: [
            'confident that he was right for the job',
            'embarrassed because of the long silences',
            'relieved he could answer most of the questions',
          ],
          answer: 0,
          transcript: "You hear a man talking about his first job interview.\nI'd read everything I could about the company and referred to a lot of it in my interview. I wanted the interviewer to know how much research I'd done and how much I wanted the job and I'd thought about what an interviewer would want to know about me based on what I could offer. Deep down I knew I'd be a great match. In the interview there was a long silence after one question I was asked but I knew it was important not to say the first thing that came into my head. I did say a few embarrassing things but I just moved on.",
          explanation: "官方答案为 A：依据录音内容，面试时他确信自己适合这份工作。原文：\"Deep down I knew I'd be a great match.\"",
        },
        {
          scenario: 'You hear two friends talking about a popular television programme.',
          q: 'What is the programme about?',
          opts: ['retirement', 'cookery', 'teaching'],
          answer: 1,
          transcript: "You hear two friends talking about a popular television programme.\nMan: Did you watch that programme last night on Channel Two?\nWoman: Yeah. It's hard to believe Helen Jenkins is seventy-five years old, isn't it? Most people give up work well before then and she still seems to be on TV all the time!\nMan: I know! I think it's because she's such a good communicator and she's come into her own, hasn't she, with the move away from complicated cuisine towards the simple, budget-friendly family stuff. It's very much in keeping with the times, isn't it?\nWoman: Yes, but I still haven't learnt to do it myself.",
          explanation: "官方答案为 B：依据录音内容，这档热门电视节目与烹饪有关。原文：\"I think it's because she's such a good communicator and she's come into her own, hasn't she, with the move away from complicated cuisine towards the simple, budget-friendly family stuff.\"",
        },
        {
          scenario: 'You hear two people talking about a place they have visited.',
          q: 'What kind of place is it?',
          opts: ['a museum', 'a library', 'a shop'],
          answer: 0,
          transcript: "You hear two people talking about a place they have visited.\nWoman: I loved the architecture, didn't you?\nMan: Yeah, it was so unusual – I mean when you think of what's being put up in cities nowadays – you know, all the shopping centres and places, then you wonder whether anyone actually bothers to design buildings like that anymore.\nWoman: That's right, and it's just so quiet and peaceful in there – you could really take time to look at all the objects on display. I loved those rare fifteenth-century books! So different from anything you could ever buy.\nMan: Yeah, me too. I'm going to read up on those now, in fact. There'll be something about them on the internet, or maybe a book I can borrow.",
          explanation: "官方答案为 A：依据录音内容，他们谈论的地方是一座博物馆。原文：\"That's right, and it's just so quiet and peaceful in there – you could really take time to look at all the objects on display. I loved those rare fifteenth-century books!\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        "You will hear a girl called Laura Beamer talking about being a volunteer at a summer school for 7–14 year olds, which is called the Children's University. For questions 9–18, complete the sentences with a word or short phrase.",
      audio: '/audio/fce/std2/std2-t1-p2.mp3',
      transcript: "You will hear a girl called Laura Beamer talking about being a volunteer at a summer school for seven to fourteen year olds, which is called the Children's University. For questions 9 to 18, complete the sentences with a word or short phrase.\n\nI'm here today to talk about a wonderful project I've been involved in this summer called the Children's University. It's run every day for local children aged from seven to fourteen by a team of parents, teachers, students and local employers. It was originally set up by a local charity and has been running for the last five years.\n\nThe aim of the Children's University is to inspire children and foster a love of learning. It sounds rather grand I know, but it was amazing to watch the children working so enthusiastically on all the various projects. This year the topic and overall theme was industry, building on previous years' themes such as culture and science.\n\nEach volunteer on the scheme was partnered with another with a different background. I was paired up with Mark, who was fantastic at motivating the children. He was a natural teacher and the children really loved him. Not exactly what you'd expect from a lawyer! I'm a student at university doing biology so we couldn't have been more different!\n\nThe workshop material was written by the volunteers. I was in a group of six who taught a series of workshops on manufacturing in our city called Making Chocolate. The workshop included taking the children to visit the local factory and we even had a tasting session! Other groups did things like making their own furniture and baking bread.\n\nEach child had their own booklet which was stamped when they'd successfully finished a project. This was known by everybody as their 'passport'. The children were very competitive and were always comparing to see who'd collected the most stamps. It really seemed to be much more effective in encouraging the children to do more workshops than last year when group leaders simply signed their notebook each time they did a workshop.\n\nAt the end of the Children's University we held a graduation ceremony in the city's real university. This was held in the Concert Hall and was very exciting for the children. They all wore graduation caps and gowns. And afterwards, everyone went to the dining hall for the official photos and refreshments. It was just like a proper graduation ceremony and the children and their parents loved it.\n\nEvery child that attended the Children's University was awarded a certificate. In addition, the children who had attended the most workshops received a gold medal each. Some had been to as many as forty workshops over the summer!\n\nThe main benefit for me of volunteering for the Children's University was learning from the other volunteers because many of them were older than me and more experienced. For example, I had ample opportunity to practise problem-solving and became much better at it. It's a useful skill that I can use in the workplace when I graduate.\n\nAnother benefit is that it gave me the opportunity to work with children. I'd been undecided about whether to become a teacher or a social worker. While I loved helping the children learn, the experience has confirmed that what I most want to do is help children and their families in our community who are having difficulties.\n\nI think that having worked on the Children's University should definitely help me after I graduate and want to start my career because I can show that I've got experience of working closely with children. I'm definitely going to do it again next summer.\n\nIf you think this kind of work is for you, and would like to register for next summer, come and ask me for an information pack after this talk. When you're sure it's what you want to do, you can download an application form from the Children's University website.",
      items: [
        {
          q: "The Children's University was started by a ____ five years ago.",
          answer: ['local charity', 'charity'],
          show: '(local) charity',
          explanation: '官方答案 (local) charity：Key 中 local 为可选词，两种写法均算对。',
        },
        {
          q: "The focus of this year's Children's University was the topic of ____ .",
          answer: ['industry'],
          show: 'industry',
          explanation: '官方答案 industry：今年儿童大学的主题与工业（industry）有关。',
        },
        {
          q: "Laura's partner was Mark, who works as a ____ when he is not volunteering.",
          answer: ['lawyer'],
          show: 'lawyer',
          explanation: '官方答案 lawyer：Mark 不做志愿者时是一名律师。',
        },
        {
          q: "Laura's group of volunteers gave some workshops about how ____ is made.",
          answer: ['chocolate'],
          show: 'chocolate',
          explanation: '官方答案 chocolate：志愿者小组开设了巧克力制作工坊。',
        },
        {
          q: "Laura says the children had a booklet called a ' ____ ' which was stamped to show their progress.",
          answer: ['passport'],
          show: 'passport',
          explanation: '官方答案 passport：这本小册子如同护照，盖章记录进度。',
        },
        {
          q: 'Laura and the children went to the graduation ceremony in the ____ hall of the local University.',
          answer: ['concert'],
          show: 'concert',
          explanation: '官方答案 concert：毕业典礼在当地大学的音乐厅（concert hall）举行。',
        },
        {
          q: 'Some children received a ____ for attending a lot of workshops.',
          answer: ['gold medal each', 'gold medal', 'medal each', 'medal'],
          show: '(gold) medal (each)',
          explanation: '官方答案 (gold) medal (each)：Key 中 gold 与 each 均为可选词，四种写法均算对。',
        },
        {
          q: 'Laura said the scheme allowed her to develop skills such as ____ .',
          answer: ['problem-solving', 'solving problems'],
          show: 'problem-solving / solving problems',
          explanation: '官方答案 problem-solving / solving problems：Key 给出两种等价写法。',
        },
        {
          q: 'Laura will most probably become a ____ in the future.',
          answer: ['social worker'],
          show: 'social worker',
          explanation: '官方答案 social worker：她将来最可能成为一名社工。',
        },
        {
          q: 'Laura says she can give people in her audience something called an ____ for volunteers.',
          answer: ['information pack'],
          show: 'information pack',
          explanation: '官方答案 information pack：她可以给听众提供一份志愿者信息包。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        "You will hear five different people talking about why they have applied to go on a space journey to the planet Mars. For questions 19–23, choose from the list (A–H) each speaker's reason for applying to go on the trip to Mars. Use the letters only once. There are three extra letters which you do not need to use.",
      audio: '/audio/fce/std2/std2-t1-p3.mp3',
      options: [
        { label: 'A', text: 'to discover new natural resources' },
        { label: 'B', text: 'to learn new skills' },
        { label: 'C', text: 'to take advantage of a rare opportunity' },
        { label: 'D', text: 'to be involved in advancing scientific knowledge' },
        { label: 'E', text: 'to become a famous personality' },
        { label: 'F', text: 'to face an extreme challenge' },
        { label: 'G', text: 'to provide others with inspiration' },
        { label: 'H', text: 'to be among the first to have the experience' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'D', explanation: "官方答案 D：依据录音内容，这位说话者的申请理由是参与推进科学知识。原文：\"When they went to the moon, they brought back samples of moon rock that turned out to be really important in various fields of physics and chemistry. That's the main thing for me really – what we can gain from going to Mars.\"", transcript: "Speaker 1\nWhen they went to the moon, they brought back samples of moon rock that turned out to be really important in various fields of physics and chemistry. That's the main thing for me really – what we can gain from going to Mars. I don't know exactly what kind of person they're looking for but I'd be gutted if I'm not it! I don't think they want celebrities or anyone like that. They want people who are really committed to space travel, like me. I studied astronomy at university and I've been fascinated by it ever since." },
        { speaker: 'Speaker 2', answer: 'H', explanation: "官方答案 H：依据录音内容，这位说话者想成为最早拥有这段经历的人。原文：\"To me, the chance to go somewhere no one else has ever been, a planet completely different from the one that every person who has ever lived has known, clinched it for me.\"", transcript: "Speaker 2\nTo me, the chance to go somewhere no one else has ever been, a planet completely different from the one that every person who has ever lived has known, clinched it for me. Of course, leaving my family will be hard but there will be regular video and computer links for personal use in space, so it'll be OK. There are lots of theories about how life may once have existed on Mars – but I don't know too much about that. I do think that I'll see the Earth and all the people on it differently once I've seen it from space. It'll be so inspiring." },
        { speaker: 'Speaker 3', answer: 'F', explanation: "官方答案 F：依据录音内容，这位说话者把此行视为迎接极限挑战。原文：\"You have to be someone who wants to push themselves to the limit. That's exactly the sort of person I am, and that's why this adventure appeals to me.\"", transcript: "Speaker 3\nI think it takes a particular type of person to even consider a trip to Mars. And I don't mean you have to have a brilliant scientific mind, or anything like that. You have to be someone who wants to push themselves to the limit. That's exactly the sort of person I am, and that's why this adventure appeals to me. I've also got some very useful practical skills, because I'm a mechanical engineer. So I think I'd be able to contribute a lot to the team." },
        { speaker: 'Speaker 4', answer: 'G', explanation: "官方答案 G：依据录音内容，这位说话者希望为他人带去激励。原文：\"For me though, it's about providing young people with positive role models and this project will really catch their imagination.\"", transcript: "Speaker 4\nI think it'll have such a huge impact on the whole world. It's an amazing opportunity to make scientific discoveries. For me though, it's about providing young people with positive role models and this project will really catch their imagination. It shouldn't be about wanting your name in lights or doing something no one else has done before. Yes, it'll be scary but I trust the people who have the knowledge to keep us safe. The most difficult thing for me will be going without fresh fruit and vegetables." },
        { speaker: 'Speaker 5', answer: 'C', explanation: "官方答案 C：依据录音内容，这位说话者视其为不容错过的难得机会。原文：\"But the main thing is an adventure like this only ever comes up once in a lifetime and I'd be insane to pass it up!\"", transcript: "Speaker 5\nI've always dreamt of travelling into space but of course I know it won't be easy. What'll get me through is the knowledge that this will have a huge impact on the entire planet. I think I'll see things differently too as a result of this trip. But the main thing is an adventure like this only ever comes up once in a lifetime and I'd be insane to pass it up! I haven't actually been to many places where I've had to rely on my own skills to survive but I'm sure that they'll teach us everything we'll need to know." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a man called Mark Phillips, who is talking about his work as a potter. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t1-p4.mp3',
      transcript: "You will hear an interview with a man called Mark Phillips, who is talking about his work as a potter. For questions 24 to 30, choose the best answer (A, B or C).\n\nInterviewer: My guest today is the potter Mark Phillips whose first exhibition opens in the Carlisle Gallery on Friday. Welcome. I know you've only been a potter for four years so you must be pleased to have this exhibition.\n\nMark: I'm thrilled. And you're right, this is something fairly new for me. When I was younger I never wanted to be a potter. You see, my mother was a very successful one and I used to watch her in her studio. I could admire the way she created beautiful things from lumps of clay but I just remember thinking how on earth could I ever hope to reach that standard? I was more into playing music with my friends – we had grand ideas about forming a band. But you know, that was something we never got around to doing!\n\nInterviewer: So what made you change your mind and take up pottery?\n\nMark: I was forty years old with my own computer company that I'd set up when I left school, and I was feeling a bit – you know – stuck. And I kind of reasoned with myself that the artistic side of me had been buried for quite long enough. My mother suggested pottery evening classes and came up with a whole load of ways they'd benefit me. I guess I had my doubts about whether doing it once a week in the evening would be satisfying.\n\nInterviewer: So, at the age of forty, you went to college and became a student again.\n\nMark: I did. It was strange at first. I had no deadlines to keep to. My brain was still working obviously, but it was my body that was now being exercised – and you need a lot of stamina to be a potter. That was a big plus for me after sitting at a computer for years. I think my fellow students, who were all in their twenties, were surprised to see this older man, full of enthusiasm and working hard. But I loved it.\n\nInterviewer: And how would you describe your pots?\n\nMark: Well, most of them are made on the wheel, but just lately I've been hand-building. I make the pot using pieces of clay that I flatten by rolling them out – a bit like making pastry – then I press my knife into the clay to make a pattern: stars, triangles, whatever. Leaves would be ideal, but my mother might object, as that's her specialty! Like mom's, my pots are practical things. They shouldn't just be on a shelf somewhere being admired in a sitting room.\n\nInterviewer: And how have your fellow potters reacted to your success?\n\nMark: You mean, are they jealous? I've seen no evidence of that. Potters are generally quite interested in what fellow potters are doing. Obviously a lot of them knew my mother's work and they've been nothing but helpful to me on a practical level such as letting me use their kiln to fire my pots in, something that I never imagined would happen. Very few potters earn much money – it's hard enough making the pots, but then you've got to get yourself known in order for people to want to buy them.\n\nInterviewer: Does your mother take an interest in your work and give you advice?\n\nMark: Of course and she's usually right. She was worried when I gave up my computer company because I'd been making good money, so she insisted I invested some of it for my old age! Also, she's always told me to look at the pots made by potters in history, sometimes going back thousands of years. If there's one single thing that's really inspired me, I guess that'd be it. It keeps me focused on keeping things simple, not being too ambitious with the shapes I make.\n\nInterviewer: And after this exhibition is over, what do you think you'll be doing?\n\nMark: Oh that's hard. I'm still new to this and I'm keen to learn more – really big pots are what I want to make but I have to get to grips with learning how to do that. Also the gallery tell me that some customers want pots in bright colours so that's something I'll pass on to my mother. That's more her thing because it's much more complicated than it sounds.\n\nInterviewer: Thank you, Mark ...",
      items: [
        {
          q: 'Why did pottery not appeal to Mark when he was younger?',
          opts: [
            "He was put off by his mother's achievements.",
            'His many attempts always seemed to end in failure.',
            'He was too busy playing in a band to take an interest.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，母亲在陶艺上的成就反而让他提不起兴趣。原文：\"I could admire the way she created beautiful things from lumps of clay but I just remember thinking how on earth could I ever hope to reach that standard?\"",
        },
        {
          q: 'Why did Mark decide to take up pottery?',
          opts: [
            "His business wasn't as successful as he wanted it to be.",
            'He saw how enjoyable pottery classes could be.',
            'He realised he needed to be more creative.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，他意识到自己需要更有创造力。原文：\"And I kind of reasoned with myself that the artistic side of me had been buried for quite long enough.\"",
        },
        {
          q: 'What did Mark say about being a student again?',
          opts: [
            'He missed having responsibility.',
            'He was made to feel that he was different.',
            'He felt physically challenged.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，重回课堂让他感到体力上吃不消。原文：\"My brain was still working obviously, but it was my body that was now being exercised – and you need a lot of stamina to be a potter.\"",
        },
        {
          q: 'Mark describes the pots he makes as',
          opts: [
            'reflecting shapes in nature.',
            'objects that are to be used.',
            "similar to his mother's in design.",
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，他强调自己做的陶器是供人使用的器物。原文：\"Like mom's, my pots are practical things. They shouldn't just be on a shelf somewhere being admired in a sitting room.\"",
        },
        {
          q: 'What has surprised Mark about the pottery community?',
          opts: [
            'how supportive they have been to a newcomer',
            'how willing other potters are to share ideas',
            'how content they are with their lifestyle',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，陶艺圈对新人的支持出乎他的意料。原文：\"Obviously a lot of them knew my mother's work and they've been nothing but helpful to me on a practical level such as letting me use their kiln to fire my pots in, something that I never imagined would happen.\"",
        },
        {
          q: 'What advice from his mother has Mark valued most?',
          opts: [
            'to concentrate all his efforts on perfecting pottery',
            'to remember the skill of potters from the past',
            'to be realistic about the money-making possibilities of pottery',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，母亲让他铭记过去陶工的技艺，这条建议他最看重。原文：\"Also, she's always told me to look at the pots made by potters in history, sometimes going back thousands of years. If there's one single thing that's really inspired me, I guess that'd be it.\"",
        },
        {
          q: 'In the future, Mark says he would like to be able to',
          opts: [
            'develop some new colours for his pots.',
            'exhibit his pots in a gallery.',
            'explore different techniques for making pots.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，他希望未来能尝试不同的制陶技法。原文：\"I'm still new to this and I'm keen to learn more – really big pots are what I want to make but I have to get to grips with learning how to do that.\"",
        },
      ],
    },
  },
}

// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 2 = 书内印 Test 6。Test 6 Listening: 书页 44–49（PDF 45–50），答案核对自 Test 6 Key（书 132–133 / PDF 133–134，Listening 区在书 133）
// 音频：/audio/fce/std2/std2-t2-p1.mp3 ~ std2-t2-p4.mp3（整 Part 一条；p1=CD1 Track07，p2=CD1 Track09，p3=CD1 Track10，p4=CD1 Track12）
// 注：Part 2 页面标题为 "Journalism Course"，原文空位为编号方框，按句序转为 ____；Part 1 Q5 题干为陈述式（选项续句），均按页面原样转录。

const STD2_L2 = {
  meta: {
    id: 'fce-standard-2-test2-listening',
    title: 'FCE 标准版真题 2 · Test 2 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 44–49',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 6 Key（书 132–133 / PDF 133–134，Listening 区在书 133）',
    audioNote:
      '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    examKey: 'fce-standard-2-test2',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a psychologist talking about green spaces in cities.',
          q: 'What does she say about them?',
          opts: [
            'People fail to appreciate them as much as they should.',
            'They are more important for children than for adults.',
            'Few governments make them a priority.',
          ],
          answer: 0,
          transcript: "You hear a psychologist talking about green spaces in cities.\nI'd like to start my talk today about green spaces in cities by acknowledging the fact that more and more governments are coming to accept that they are a vital element of a healthy society. Whether you're an adult, a teenager, or a young child, parks play a crucial role in ensuring our wellbeing. Yet too few of us really understand that, and as a society, we tend not to make enough use of the ones we already have. So when it comes to planning decisions, there just isn't enough pressure on local authorities to incorporate them in the future development of our cities. The consequences are potentially very serious.",
          explanation: "官方答案为 A：依据录音内容，她说人们对城市绿地的珍视程度不够——社会既没有真正理解绿地对健康的重要性，也没有充分利用现有绿地，故选 A。原文：\"Yet too few of us really understand that, and as a society, we tend not to make enough use of the ones we already have.\"",
        },
        {
          scenario: 'You hear part of an interview with a singer.',
          q: 'What does he say about playing tennis?',
          opts: [
            'It calms him down after a performance.',
            'It is used by a lot of singers to improve their technique.',
            'It requires similar skills to singing.',
          ],
          answer: 2,
          transcript: "You hear part of an interview with a singer.\nI play a lot of tennis because staying in good physical shape is absolutely vital if you're a singer or a musician. When I'm playing tennis, I always think how much it has in common with singing. For example, playing tennis, you learn how to concentrate, develop self-control and of course how to pace your breath and maximise the use of your energy. Before I have a big concert in the evening I'll often have a quick game of tennis just to relax. It can't be too energetic though or I wouldn't be able to give a good performance!",
          explanation: "官方答案为 C：依据录音内容，他认为打网球与唱歌需要相似的技巧——打网球时练专注、自控、控制呼吸与体力分配，这些都和唱歌相通，故选 C。原文：\"When I'm playing tennis, I always think how much it has in common with singing.\"",
        },
        {
          scenario: 'You hear an actor talking about how she met her husband.',
          q: 'How did she first meet him?',
          opts: [
            'She sat next to him in a cinema.',
            'She appeared in a play with him.',
            'A friend introduced them.',
          ],
          answer: 1,
          transcript: "You hear an actor talking about how she met her husband.\nWell, Jonny, my husband, happened to hear me being interviewed on the radio and thought I'd be good for the part of the heroine in a play he was about to appear in. So he persuaded the director to send me the script. I liked it, we met on stage at the rehearsals, fell in love, and the rest is history. I'd seen Jonny perform before and admired his work but I didn't accept the part just because he was in it. I did know he was a nice person though, because a friend of mine had sat next to him at a film premiere and had told me about him.",
          explanation: "官方答案为 B：依据录音内容，两人是因同台演出一部戏而相识——他请导演把剧本寄给她，两人在排练的舞台上见面并相恋，故选 B。原文：\"I liked it, we met on stage at the rehearsals, fell in love, and the rest is history.\"",
        },
        {
          scenario: 'You hear two people talking about a bus service.',
          q: 'What does the man say about it?',
          opts: ['It is frequent.', 'It is cheap.', 'It is punctual.'],
          answer: 2,
          transcript: "You hear two people talking about a bus service.\nMan: Do you ever use the bus between Boroughbridge and Malton?\nWoman: No, is it any good?\nMan: Could be worse, I suppose, but I can't say it's cheap. You can save a bit by buying a season ticket, but not actually that much.\nWoman: Really?\nMan: Well what it does have in its favour is that it's very rarely late. Although it's a shame it only runs every three quarters of an hour.\nWoman: I'll stick to my motorbike, then!\nMan: You can't read your book on that, though, can you?\nWoman: No, true, but I like to get to places quickly!",
          explanation: "官方答案为 C：依据录音内容，他夸这条公交线路准点、很少晚点，但也表示它不算便宜、班次间隔长，故选 C。原文：\"Well what it does have in its favour is that it's very rarely late.\"",
        },
        {
          scenario: 'You hear a retired ballerina comparing dancers today with dancers in the past.',
          q: 'She says professional ballet dancers today',
          opts: [
            'are less concerned about expressing emotion.',
            'are more interested in being celebrities.',
            'dance with less technical ability.',
          ],
          answer: 0,
          transcript: "You hear a retired ballerina comparing dancers today with dancers in the past.\nNowadays, ballet is much more acrobatic than in the past. The audience wants to see internationally famous dancers doing lots of jumps and legs going remarkably high. It's a bit more like a circus now, and the depth of feeling that we tried to convey in the past isn't always there in modern ballet. You only find it in one or two dancers. I'd love to see less focus on technique. I usually come away from watching a ballet feeling impressed with what I've seen but it hasn't moved me.",
          explanation: "官方答案为 A：依据录音内容，她认为如今的职业芭蕾舞者较不注重情感表达——过去力求传递的情感深度在现代芭蕾中已不多见，故选 A。原文：\"It's a bit more like a circus now, and the depth of feeling that we tried to convey in the past isn't always there in modern ballet.\"",
        },
        {
          scenario: 'You hear a chef talking about making a TV series.',
          q: 'What does he say about it?',
          opts: [
            "He didn't expect to enjoy the experience so much.",
            "He didn't get on with his co-presenter.",
            "He didn't like the working hours.",
          ],
          answer: 0,
          transcript: "You hear a chef talking about making a TV series.\nI was approached to do a TV cookery series, where I had to compete against another chef every week. Never having met him before, I was a bit apprehensive about working with him. But we got on like a house on fire. It's rare for me to spend ten hours a day with someone for five weeks and like them more by the end of it than I did at the beginning. Halfway through filming the producer had to ring me up and ask if we could be less friendly with one another on camera, because it was supposed to be a competition!",
          explanation: "官方答案为 A：依据录音内容，他没想到拍电视系列节目会这么开心——原以为与合作厨师会处不来，结果五周下来反而更喜欢对方，故选 A。原文：\"It's rare for me to spend ten hours a day with someone for five weeks and like them more by the end of it than I did at the beginning.\"",
        },
        {
          scenario: 'You hear two friends talking about an art course.',
          q: 'What do they agree about it?',
          opts: ['The teacher is inspiring.', 'The class is the right size.', 'The content is interesting.'],
          answer: 1,
          transcript: "You hear two friends talking about an art course.\nWoman: So, are you enjoying the art course?\nMan: I am, I think. I mean, what we're actually learning about is interesting – what inspired the nineteenth-century French painters and that sort of thing.\nWoman: I feel I've heard it all before – I'd hoped the teacher would tell us more about their actual techniques. But at least there aren't too many of us on the course.\nMan: That certainly helps when it comes to group discussions and stuff. And the teacher's amazing, don't you think?\nWoman: He certainly thinks he is – I'm not convinced! I just don't feel very motivated at the moment, to be honest.",
          explanation: "官方答案为 B：两人一致认为这个艺术课的班级人数合适——女生说好在课上人不多，男生表示小组讨论时这确实有帮助，故选 B。原文：\"But at least there aren't too many of us on the course.\"",
        },
        {
          scenario: 'You hear a swimmer talking about a competition she took part in.',
          q: 'How does she feel about it?',
          opts: [
            'disappointed with her result',
            'excited about where it will lead',
            'surprised by the support she received',
          ],
          answer: 1,
          transcript: "You hear a swimmer talking about a competition she took part in.\nI had such a good time at the championships, better than I expected. The atmosphere was incredible with everyone cheering. I didn't expect so many people to turn up to the event, though. I don't suppose they were there to see me. I hadn't been too happy with my performance in the previous competition, so to turn things round like that was very satisfying. The pressure started to get to me at one point, but I had a talk with myself and got things into perspective. I must work on my nerves before the next big event, but I can't wait to get back in the pool and start training for it.",
          explanation: "官方答案为 B：依据录音内容，她对这次比赛带来的前景感到兴奋——已迫不及待想回归泳池、开始备战下一场大赛，故选 B。原文：\"I must work on my nerves before the next big event, but I can't wait to get back in the pool and start training for it.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Sid Holmes talking about a journalism course he attended. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std2/std2-t2-p2.mp3',
      transcript: "You will hear a man called Sid Holmes talking about a journalism course he attended. For questions 9 to 18, complete the sentences with a word or short phrase.\n\nHi, my name's Sid Holmes, and I'm here to talk about my experiences studying journalism at Kramer's College.\n\nI decided to do journalism because my aunt, who's a newspaper reporter herself, advised me to do it. And I heard all about how good the Kramer's course was from my cousin, who'd been a student on it.\n\nOn the first day of the course we did some reporting exercises which I just couldn't get my head around. How do you write in fifty words about someone getting stuck on a roof and having to be lifted off by helicopter? But that was what I had to try and do! Another group had to do the same thing – about someone being stuck in a tree and rescued by boat.\n\nWe also met someone called Lisa on the first day. She works on a local paper and gave us some very informative talks throughout the course on what life is really like as a journalist. She's an assistant editor – every newspaper section has one. She started off in the fashion section as a junior reporter, but is now in sports and enjoying that more. Her aim is to run the news section one day.\n\nOur main tutor on the course, Jim Tyler, who did most of the teaching, was great – I was particularly impressed to find out that not only was he an experienced journalist but also an accomplished painter, who'd had his work in quite a few local exhibitions. And he'd actually written a book too – about the life of a singer who's well known internationally, but is actually originally from our area.\n\nJim asked us to come up with ideas for articles, and then we all discussed them as a group. Someone mentioned this guy who makes watches and sells them online – that reminded me I'd heard about a retired teacher who'd taken up making violins. He doesn't sell them but lends them to talented schoolchildren. Jim said he thought that was a great idea. He said he'd recently written about a craftsman too – a man who makes shoes.\n\nSo off I went to write my first article! I finished it in a day, and emailed it to a few people, you know – newspapers, websites and so on, as we'd been told to do. Amazingly, one magazine got back to me just a week later and said they'd put it in their next issue! So a month later, my work was in print!\n\nBecause you have to do lots of work experience on the course, we were each sent off to report on different council meetings in the town hall. Not exactly exciting, but good practice I suppose. Some of the others had to write about the town park or even the shopping centre. I went to one about a community group's plans to make the museum more attractive to visitors – it would be great for the town if their proposals were adopted, so I actually enjoyed that.\n\nAlthough on the whole, the course was fantastic, there were inevitably a few things that were less so. I mean, compared to learning all about photography, the typing lessons were pretty dull! I know they will come in useful, though, so I suppose I shouldn't complain.\n\nThe other students on the course were cool – we got on very well, and after lessons we'd often meet up. If a few of us were around at lunchtime, we'd get together in the canteen – the food was pretty good, made with produce from the college garden. We'd discuss what we were working on and that was a great help when I was stuck for inspiration.\n\nSo now, I'm doing a bit of freelance stuff and looking for a job! It's tough, and I've already been turned down for three jobs on news websites. I've got another interview next week, though, as a junior reporter for a radio station. It'd be amazing if I got that!\n\nSo, have any of you got any questions? …",
      items: [
        {
          q: 'Sid did the same course in journalism that his ____ did.',
          answer: ['cousin'],
          show: 'cousin',
          explanation: '官方答案 cousin：依据录音内容，他的表亲上过同一门新闻课程。',
        },
        {
          q: 'On the first day, Sid had to do a reporting exercise about a man who was rescued from a ____ by helicopter.',
          answer: ['roof'],
          show: 'roof',
          explanation: '官方答案 roof：依据录音内容，报道练习讲的是男子被困屋顶获直升机救援。',
        },
        {
          q: 'An assistant editor from the ____ section of a local newspaper gave an interesting talk about being a journalist.',
          answer: ['sport', 'sports'],
          show: 'sport(s)',
          explanation: '官方答案 sport(s)：按 Key 记法单复数均可，sport / sports 均算对。',
        },
        {
          q: "Sid's main tutor had written a biography of a famous local ____ .",
          answer: ['singer'],
          show: 'singer',
          explanation: '官方答案 singer：依据录音内容，导师为当地一位著名歌手写过传记。',
        },
        {
          q: 'Sid had an idea for an article about a man who makes ____ for young people to borrow.',
          answer: ['violins'],
          show: 'violins',
          explanation: '官方答案 violins：依据录音内容，文章构思关于制琴师供年轻人借用的提琴。',
        },
        {
          q: "Sid's first article was published in a ____ soon after he wrote it.",
          answer: ['magazine'],
          show: 'magazine',
          explanation: '官方答案 magazine：依据录音内容，他的首篇文章写后不久登在一本杂志上。',
        },
        {
          q: 'Sid had to report on a council meeting about proposed improvements to the ____ in the town.',
          answer: ['museum'],
          show: 'museum',
          explanation: '官方答案 museum：依据录音内容，市政会议议题是改进镇上的博物馆。',
        },
        {
          q: "One aspect of the course Sid didn't enjoy was the ____ classes.",
          answer: ['typing'],
          show: 'typing',
          explanation: '官方答案 typing：依据录音内容，他不喜欢课程中的打字课。',
        },
        {
          q: 'Sid found it useful to chat to his classmates in the ____ at the college.',
          answer: ['canteen'],
          show: 'canteen',
          explanation: '官方答案 canteen：依据录音内容，在学院食堂与同学交流让他受益。',
        },
        {
          q: 'Sid now has a chance of getting a job at a ____ .',
          answer: ['radio station'],
          show: 'radio station',
          explanation: '官方答案 radio station：依据录音内容，他现在有机会进一家电台工作。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about collecting things as a hobby. For questions 19–23, choose from the list (A–H) why each speaker collects the things. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std2/std2-t2-p3.mp3',
      options: [
        { label: 'A', text: 'I enjoy the challenge.' },
        { label: 'B', text: 'It means I spend time with my family.' },
        { label: 'C', text: "It's a way of meeting interesting people." },
        { label: 'D', text: 'I want to help the local community.' },
        { label: 'E', text: 'I use my collection to teach other people.' },
        { label: 'F', text: "It's a financial investment." },
        { label: 'G', text: 'It connects me to the past.' },
        { label: 'H', text: 'I like to have beautiful things around me.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: "官方答案 C：依据录音内容，收藏让他结识有意思的人——各地藏家来自各行各业、聊起来很有趣，他看重的正是社交属性，故选 C。原文：\"But it's great because there are so many different collectors out there, from all walks of life, who are fascinating to talk to. It's the social side of it that appeals to me really.\"", transcript: "Speaker 1\nI collect toys from all over the world, and have done for about five years now. I spend a lot of time on it, trawling the internet for rare ones and going to toy fairs at the weekend. Some of the toys I've found are very beautiful. I have a busy job, so it's hard to make time for it sometimes. But it's great because there are so many different collectors out there, from all walks of life, who are fascinating to talk to. It's the social side of it that appeals to me really. And it's taught me so much about how parents in different countries bring up their children." },
        { speaker: 'Speaker 2', answer: 'A', explanation: "官方答案 A：依据录音内容，他享受收藏带来的挑战——费尽心力寻得稀有硬币时的成就感，正说明付出越多越有趣，故选 A。原文：\"I get such a sense of achievement when I've finally tracked down a really rare coin. It wouldn't be nearly so much fun if there was less effort involved.\"", transcript: "Speaker 2\nMy passion is coins. I've met a few people who've been surprised when I told them that! It takes up most of my spare time, but I don't mind – I get such a sense of achievement when I've finally tracked down a really rare coin. It wouldn't be nearly so much fun if there was less effort involved. Sometimes I give one or two away – to friends, you know – if I have two or three of the same type, then it's a nice thing to do. Some of the coins in my collection are hundreds of years old." },
        { speaker: 'Speaker 3', answer: 'G', explanation: "官方答案 G：依据录音内容，收藏让他与过去相连——他喜欢感受大约五十年前的生活与当下之间的联系，故选 G。原文：\"I'm very interested in how attitudes to sports have changed over time, and I like to feel that link between life, say, fifty years ago, and the present day.\"", transcript: "Speaker 3\nMy magazine collection's getting bigger all the time. I read every one of them from cover to cover, which is time consuming and unfortunately means I have less time to spend with my children. The magazines are all about things I'm keen on, of course, like sports and cars. I'm very interested in how attitudes to sports have changed over time, and I like to feel that link between life, say, fifty years ago, and the present day. It's quite a valuable collection now, so I keep it in a locked room to be on the safe side. I certainly have no plans to give my collection away, and I don't want to lose it!" },
        { speaker: 'Speaker 4', answer: 'D', explanation: "官方答案 D：依据录音内容，他想借此帮助当地社区——目标是让藏品有朝一日向公众开放，捐给当地博物馆，故选 D。原文：\"That's my aim really, to make them available to the public one day – I'll donate them to my local museum.\"", transcript: "Speaker 4\nPostcards are amazing things to collect, and I have over a thousand now. I know people tend to communicate online, but a surprising number of people still send them! It's not just about the pictures on the front, but what's written on the back, too. Lots just have the usual stuff, like 'Weather good, food great', but I look out for ones with a story, or glimpses of a story. My collection is relatively modern, but I imagine historians in the future could learn a lot from them. That's my aim really, to make them available to the public one day – I'll donate them to my local museum." },
        { speaker: 'Speaker 5', answer: 'F', explanation: "官方答案 F：依据录音内容，他把收藏当作一种投资——藏品价值可观，这也是他不断入手的原因，缺钱时还可以卖掉，故选 F。原文：\"I've been told it's worth quite a lot. That's mainly why I keep on adding to my collection. It's good to know I can sell it one day if I'm short on funds.\"", transcript: "Speaker 5\nI'm crazy about hats: smart men's hats, caps, anything like that. They aren't beautiful, like some women's hats, but wherever I go in the world, and I've travelled quite a lot, I bring another one home with me. It's quite a large collection now, and I've been told it's worth quite a lot. That's mainly why I keep on adding to my collection. It's good to know I can sell it one day if I'm short on funds. I'd also like to make them myself and I'm looking for someone who can teach me – I have lots of ideas but none of the right skills." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a scientist called Peter Crane, who is talking about an ancient tree called the gingko. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t2-p4.mp3',
      transcript: "You will hear an interview with a scientist called Peter Crane, who is talking about an ancient tree called the gingko. For questions 24 to 30, choose the best answer (A, B or C).\n\nInterviewer: Thank you for coming into our studio today, Peter, to tell us about your research into an ancient species of tree called the gingko. First of all, how did you develop an interest in it?\n\nPeter: I think that anyone who's seriously interested in plants inevitably comes across the gingko tree pretty early in their training, because very unusually, it's a single plant species with no known living relatives. What particularly fascinated me was the fact that it's been essentially unchanged for more than two hundred million years. Other people are attracted by its distinctive leaf – once you see it, you don't forget it.\n\nInterviewer: When was the gingko first cultivated?\n\nPeter: Our best estimate is about one thousand years ago in China, which is somewhat late. There's a lot of Chinese literature from before that, and it doesn't mention the gingko, while it does mention a lot of other plants. The evidence points to the fact that the gingko was probably always a rather rare tree, until it first attracted the attention of people about a thousand years ago, when they realised it could be cultivated as a source of nuts.\n\nInterviewer: And does the gingko tree have medical uses?\n\nPeter: The plant itself has long been valued for its healing properties. The medicinal uses in the East and the West have gone in different directions, using two different parts of the plant: mainly the seeds in the East, and mainly the leaves in the West. In the West, work has been done on the leaves to see whether they contain substances that might help improve people's memories. The results, however, have shown no strong evidence for such powers.\n\nInterviewer: What else do humans use the gingko tree for?\n\nPeter: Well, it's a very popular tree in city streets all over the world. It's incredibly tough, so can tolerate conditions that might kill other types of tree. It's hard to know exactly why, but the leaves are particularly unattractive to insects that harm other trees. And it seems to survive in a street setting: its roots aren't getting much oxygen, they're getting a lot of salt and goodness knows what else is getting poured on them, but it seems relatively resistant to that.\n\nInterviewer: You're interested in the benefits of street trees in general, aren't you, Peter?\n\nPeter: That's right, I am. They're important for a number of reasons. One advantage is that trees along a street make it feel narrower and cause drivers to go more slowly. And obviously they provide shade, making people feel a lot more comfortable; they don't mind being outside if they can be in the shade. And so trees help bring all the benefits that come from that: kids playing outside, neighbours keeping an eye on each other's houses, people encouraged to linger in a shopping area that they would otherwise walk right through.\n\nInterviewer: Do you think there are lessons we can learn from the gingko about preserving other plant species?\n\nPeter: Well, because humans have distributed gingko around the planet, they have helped ensure the species' long-term survival. There are probably a couple of wild original populations of gingko tree still left in China, but even those may have been aided by people. Obviously, we should try to preserve animals and plants in their native habitats, but in the same way that we've used other methods for conserving large mammals, I think conservation through widespread cultivation is essential for preserving plant diversity for the future.\n\nInterviewer: And finally, does working on such an ancient tree species affect your view of the world?\n\nPeter: Yes, as humans, one of our biggest shortcomings is that we can't see the long term. So reflecting on a plant like gingko that was around in very different ecosystems hundreds of millions of years ago, really makes our own species seem very young.",
      items: [
        {
          q: 'What first interested Peter about the gingko tree?',
          opts: ['how its leaves grow', 'the family it belongs to', "what's known about its history"],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，最初吸引他的是银杏的已知历史——这种植物两亿多年来基本没有变化，故选 C。原文：\"What particularly fascinated me was the fact that it's been essentially unchanged for more than two hundred million years.\"",
        },
        {
          q: 'What does Peter say about the gingko tree in ancient China?',
          opts: [
            "It wasn't originally grown for its nuts.",
            "It wasn't common before people started growing it.",
            'It was one of the earliest plants to be grown there.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，银杏在人工种植之前并不常见——证据显示它一直相当稀有，直到约一千年前才引起人们注意并被当作坚果来源栽培，故选 B。原文：\"The evidence points to the fact that the gingko was probably always a rather rare tree, until it first attracted the attention of people about a thousand years ago, when they realised it could be cultivated as a source of nuts.\"",
        },
        {
          q: 'When asked about the medicinal uses of gingko, Peter says',
          opts: [
            'researchers in different parts of the world disagree about it.',
            'scientists have failed to identify any positive effects.',
            'some parts of the plant help the brain to function.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，科学家未能证实银杏有任何积极疗效——针对叶片能否改善记忆的研究并未发现有力证据，故选 B。原文：\"The results, however, have shown no strong evidence for such powers.\"",
        },
        {
          q: 'Why are there so many gingko trees in cities all over the world?',
          opts: [
            "They don't suffer from problems that usually affect trees there.",
            "Other trees can't survive if they are too close to the species.",
            'People take more trouble to look after them than other trees.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，银杏不受城市树木常见问题的困扰——它极其坚韧，能耐受其他树种无法存活的环境，故选 A。原文：\"It's incredibly tough, so can tolerate conditions that might kill other types of tree.\"",
        },
        {
          q: 'Peter says that street trees benefit people by providing',
          opts: ['some protection from the sun.', 'a reduction in traffic noise.', 'increased privacy.'],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，街道树木能为人们遮挡阳光——提供树荫让人更舒适、更愿意待在户外，故选 A。原文：\"And obviously they provide shade, making people feel a lot more comfortable; they don't mind being outside if they can be in the shade.\"",
        },
        {
          q: 'Peter says people can help other species of plant to survive by',
          opts: [
            'leaving plants to grow in the wild.',
            'protecting them from plant-eating animals.',
            'growing them in many different places.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，把植物种到多处有利于物种存续——人类将银杏传播到全球各地，反而保障了该物种的长期生存，故选 C。原文：\"Well, because humans have distributed gingko around the planet, they have helped ensure the species' long-term survival.\"",
        },
        {
          q: "How does Peter's work influence the way he thinks about the world?",
          opts: [
            'It makes him feel concerned about the future of human beings.',
            'It reminds him that human beings are a relatively new species.',
            'It allows him to understand why human beings focus on the present.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，工作让他意识到人类是相对年轻的物种——反思数亿年前就存在的银杏，更显得人类物种非常年轻，故选 B。原文：\"So reflecting on a plant like gingko that was around in very different ecosystems hundreds of millions of years ago, really makes our own species seem very young.\"",
        },
      ],
    },
  },
};

// 标准版2 · Test 3（书内印 Test 7）Listening（书页 66–71；Key: 书 144–145/PDF 145–146，已逐题核对）
// 由 scripts/fce8-render.mjs 渲染 PNG 后逐页视觉转录；答案逐题核对自 Test 7 Key（RUE Key 之后，书 145/PDF 146）。
// 音频接入映射：P1=CD2 Track01，P2=CD2 Track03，P3=CD2 Track04，P4=CD2 Track06（/audio/fce/std2/std2-t3-p1~p4.mp3）。
// 注意：书 68 Q15 印刷原文即为 "During the breaks, Ann was happy..."（"Ann" 为原书笔误，应为 Anne，按页面视觉转录原样保留）。
// 注意：Part 2 版块标题原书印为 "Archery"；数据结构无标题字段，未入数据（同 std2-t3-reading Part 7 惯例）。
const STD2_L3 = {
  meta: {
    id: 'fce-standard-2-test3-listening',
    title: 'FCE 标准版真题 2 · Test 3 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 66–71',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 7 Key（书 144–145 / PDF 145–146，Listening 答案区在书 145）',
    audioNote: '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    examKey: 'fce-standard-2-test3',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear two friends talking about a laptop computer.',
          q: 'What is the woman doing?',
          opts: [
            'persuading her friend to buy one like it',
            'offering to lend it to her friend for a day',
            'explaining why she needed a new one',
          ],
          answer: 0,
          transcript: "You hear two friends talking about a laptop computer.\nMan: That's a cool computer, is it new?\nWoman: I bought it a while back, actually – best thing I ever did!\nMan: It does look good, but I like the one I have now.\nWoman: Yeah, maybe, but if you had one like mine, after twenty-four hours I swear you'd never want to go back to your old one!\nMan: Really? Why's that?\nWoman: Well, there are just so many fantastic features – I'd let you borrow it, but I just can't live without it!\nMan: It must have been expensive, though …\nWoman: Not really, considering how much it can do.",
          explanation: "官方答案为 A：依据录音内容，她在劝朋友买一台同款笔记本电脑。原文：\"Yeah, maybe, but if you had one like mine, after twenty-four hours I swear you'd never want to go back to your old one!\"",
        },
        {
          scenario: 'You hear two students talking about a play they have just seen.',
          q: 'What do they agree was good about it?',
          opts: ['the script', 'the set', 'the actors'],
          answer: 2,
          transcript: "You hear two students talking about a play they have just seen.\nMan: That was good, wasn't it?\nWoman: Not bad – I wasn't sure about the script, though – I'm not sure people ever really spoke like that, even in those days!\nMan: Yeah, you may be right there, but the actors coped with it, didn't they? They were pretty convincing, I thought.\nWoman: They had poor material to work with, but I'm with you on that – I don't think anyone could have done better.\nMan: And the set design was unusual, wasn't it?\nWoman: Just a bit too unusual for me, I'm afraid. I think something more traditional would have been less distracting.\nMan: Yeah, maybe you're right …",
          explanation: "官方答案为 C：依据录音内容，两人一致称赞的是这部剧的演员。原文：\"Yeah, you may be right there, but the actors coped with it, didn't they? They were pretty convincing, I thought.\"",
        },
        {
          scenario: 'You hear two people talking about a friend.',
          q: 'What do they agree about him?',
          opts: [
            "He's very helpful.",
            "He's easy to get to know.",
            'He rarely complains about anything.',
          ],
          answer: 2,
          transcript: "You hear two people talking about a friend.\nMan: I saw Mike the other day.\nWoman: Oh, how was he?\nMan: Seems to be enjoying his new job.\nWoman: Oh good. He never has trouble making new friends, does he?\nMan: Well … he doesn't really talk much about himself until you get to know him.\nWoman: I suppose. But he's very easy-going – whatever goes wrong in his life, he seems to stay cheerful.\nMan: Well that's true … nothing much seems to upset him, does it?\nWoman: But I'm not sure the new job is really him. He'd be better off long term in a job where he can help others.\nMan: Only time will tell. He needs to give it a try.",
          explanation: "官方答案为 C：依据录音内容，两人一致认同的是他很少抱怨。原文：\"But he's very easy-going – whatever goes wrong in his life, he seems to stay cheerful.\"",
        },
        {
          scenario: 'You hear a lecturer talking to some of his students about their history project.',
          q: 'What is he doing?',
          opts: [
            'encouraging them to ask him questions about it',
            'recommending some books that will help with it',
            'advising them on how to organise their time',
          ],
          answer: 0,
          transcript: "You hear a lecturer talking to some of his students about their history project.\nWell the deadline's not for a while yet, so there's plenty of time for you to choose your topic for your nineteenth-century history project and read up on it. There's been a lot written on this period that you'll find useful I'm sure. Books are a great source of information, as well as the internet of course – but check your facts carefully and use reliable websites. Also make sure you come and see me if there's anything that's unclear or you think I can help you with. Straight after a lecture is a good time to catch me. And finally, good luck, everybody!",
          explanation: "官方答案为 A：依据录音内容，他鼓励学生就该项目向他提问。原文：\"Also make sure you come and see me if there's anything that's unclear or you think I can help you with.\"",
        },
        {
          scenario: 'You hear two TV sports presenters talking about their work.',
          q: 'What do they agree about sports presenters?',
          opts: [
            "They're generally more effective when using a script.",
            'They have to be able to relate well to their audience.',
            "They should adopt an attitude that isn't too serious.",
          ],
          answer: 1,
          transcript: "You hear two TV sports presenters talking about their work.\nMan: We started off by covering the swimming championships together last year, didn't we? And I reckon that helped us build an essential rapport with each other and the viewers. Presenting's not something you can learn, though. It has to be natural, like adopting a suitably sympathetic expression when you're announcing disappointing results.\nWoman: Well, I'd say presenters do best when they're making it look fun and spontaneous, even if they're actually sticking to a script. Nobody likes seeing presenters who aren't having a good time. And they need to have that connection with whoever's watching.\nMan: And the relevant subject knowledge always helps too.\nWoman: You're right.",
          explanation: "官方答案为 B：依据录音内容，两人一致认为体育解说必须善于与观众沟通。原文：\"And they need to have that connection with whoever's watching.\"",
        },
        {
          scenario: 'You hear a woman talking about a radio programme.',
          q: 'What does she say about the programme?',
          opts: [
            'It provided her with a lot of useful information.',
            'It was more interesting than she had expected.',
            'It made her want to find out about a place.',
          ],
          answer: 1,
          transcript: "You hear a woman talking about a radio programme.\nWell it's a programme that's on every week, about the countryside. It can get a little boring, but I listen to it anyway, as I always have the radio on when I'm driving home from work. I was curious when they started talking about a village, because it all sounded rather familiar. And then I realised they were talking about somewhere I'd been to on a family holiday as a child. I turned the volume up then, because I didn't want to miss a word of it – not because I didn't know quite a lot about the village already. I just wanted to know what they thought about it.",
          explanation: "官方答案为 B：依据录音内容，这档节目比她预想的更有意思。原文：\"I turned the volume up then, because I didn't want to miss a word of it – not because I didn't know quite a lot about the village already.\"",
        },
        {
          scenario: 'You hear two music students talking about an assignment they have to do.',
          q: 'What are they both unsure about?',
          opts: [
            'what to include in the piece of writing',
            'how to organise the recording',
            'what kind of music they should perform',
          ],
          answer: 0,
          transcript: "You hear two music students talking about an assignment they have to do.\nWoman: That talk about next year's assignment was good, but I'm not sure I understood everything. I liked the sound of having to perform a song or instrumental piece and record it in the studio.\nMan: … And you can get help from your team – thank goodness! The technical side's not my strong point!\nWoman: But then there was something about a commentary.\nMan: Yes, you have to write a long commentary on it, saying how you organised everything and how you overcame difficulties.\nWoman: But are we supposed to also say how we think it went … you know, analyse our own performance?\nMan: Hmm … I can ask my sister – she did it two years ago.",
          explanation: "官方答案为 A：依据录音内容，两人都没把握写作 piece 里该写进哪些内容。原文：\"But are we supposed to also say how we think it went … you know, analyse our own performance?\"",
        },
        {
          scenario: 'You hear a writer talking about a book she wrote which has been turned into a film.',
          q: 'How does the writer feel about the film director?',
          opts: [
            'She thinks he has made a good film.',
            'She is upset because her opinion was ignored.',
            'She found him easy to work with.',
          ],
          answer: 0,
          transcript: "You hear a writer talking about a book she wrote which has been turned into a film.\nOf course, it's wonderful when your book is made into a film or a TV series. It's the greatest compliment, but the hardest thing for a writer is handing your book over to someone else and letting their ideas take over. I've done it four times now and it doesn't get any easier. When I met the current director I thought we'd be working together, but he listened to my views of how the film should be made, then completely ignored them! Despite that though, he's done my writing justice and I'm glad he didn't listen to me.",
          explanation: "官方答案为 A：依据录音内容，她认为导演把这部电影拍得很好。原文：\"Despite that though, he's done my writing justice and I'm glad he didn't listen to me.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Anne Ruskin giving a talk about a one-day archery course, during which she learnt to use a bow to shoot arrows at a target. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std2/std2-t3-p2.mp3',
      transcript: "You will hear a woman called Anne Ruskin giving a talk about a one-day archery course, during which she learnt to use a bow to shoot arrows at a target. For questions 9 to 18, complete the sentences with a word or short phrase.\n\nHello, my name's Anne Ruskin. Thank you very much for inviting me to your college this evening to talk about my experiences on a one-day archery course.\n\nWhen you were little, I imagine many of you, like me, used to have bows and shoot arrows from them – wooden bows you made from branches or maybe a plastic one like mine. Lots of kids love them – I even saw a little metal set in a toyshop the other day.\n\nAnyway, I decided that now I was an adult I'd have a go at the real thing, and signed up for a beginners' archery course. I had planned to read up a bit on the history of archery beforehand, not knowing much about it. But I ran out of time and only managed a quick scan through the rules. I've found out more about it since, and it's fascinating.\n\nThe archery courses are generally held in a variety of locations, depending on the season and the weather. In winter, they even use a large gym if the weather's really bad. I was happy that mine was in the field they use in the summer, though I suppose a medieval castle or some woods would be the ideal setting.\n\nThere was so much to learn, I really had to concentrate. It was far harder than I'd imagined to stand in the right way, but how to hold the bow correctly came to me relatively quickly. I was also taught to place the arrows in exactly the right position in the bow.\n\nSoon most of my body was aching! The teacher showed me some exercises to strengthen my hands, so I'll be able to grip the bow tightly for longer. He told me my shoulders were too tense and reassured me that my arms would eventually become stronger if I practised enough. I hope he's right!\n\nPerhaps due to beginner's luck, most of my arrows went in the right direction, and into the target, though I never managed to hit the middle! And I did manage to hit a tree, narrowly missing a bench and a bag I'd left underneath it! That certainly wasn't deliberate! Someone else hit the target next to theirs instead of their own!\n\nThere were regular breaks, and part of the appeal of archery is the delightfully calm rhythm. There was a lot of time to drink tea, and enjoy the view, and I did plenty of both. There were some archery books and photographs to look through showing us how we could improve, and some people took the opportunity to check their phones for messages, but I preferred to chat.\n\nI asked some of the other people there why they had decided to do the course. In fact, I'd imagined it might be because of a website or something. In fact, it turned out to be because of a TV series. The archery courses are advertised on local radio too, but none of us had actually heard about them that way.\n\nThe teacher made sure we practised loads of shooting and it was thrilling when he finally let us do some scoring. There are rings on the targets, and you get points depending on where your arrow lands. It was fun to see how well I was doing compared to everyone else! And I must say, I wasn't too bad!\n\nI loved it, and archery is one of those rare sports that almost anyone can do, including children, though they must be over the age of ten. Some of my friends have said they'll join me next time I go, and I'm working on my parents at the moment, in the hope that they'll come along as well.\n\nThank you all for listening. I hope some of you will consider taking archery up. It really is a great leisure activity. Now, have any of you got any questions? I'd be happy to tell you more about … [fade]",
      items: [
        {
          q: 'Anne used to shoot arrows from a bow made of ____ when she was a child.',
          answer: ['plastic'],
          show: 'plastic',
          explanation: '官方答案 plastic：依据录音内容，她小时候用的弓是塑料做的。',
        },
        {
          q: "Anne only had time to read about the ____ of archery before the beginner's archery course.",
          answer: ['rules'],
          show: 'rules',
          explanation: '官方答案 rules：依据录音内容，上课前她只有时间读射箭规则。',
        },
        {
          q: "Anne's archery course took place in a ____ .",
          answer: ['field'],
          show: 'field',
          explanation: '官方答案 field：依据录音内容，课程在一块场地（field）上举行。',
        },
        {
          q: 'Anne was surprised that learning to ____ properly was so difficult.',
          answer: ['stand'],
          show: 'stand',
          explanation: '官方答案 stand：依据录音内容，她没想到正确站姿学起来那么难。',
        },
        {
          q: 'The teacher told Anne she needed to relax her ____ .',
          answer: ['shoulders'],
          show: 'shoulders',
          explanation: '官方答案 shoulders：依据录音内容，老师让她放松肩膀。',
        },
        {
          q: "One of Anne's arrows went into a ____ by accident.",
          answer: ['tree'],
          show: 'tree',
          explanation: '官方答案 tree：依据录音内容，她有一支箭误中了一棵树。',
        },
        {
          q: 'During the breaks, Ann was happy to look at the ____ and talk to other people.',
          answer: ['view'],
          show: 'view',
          explanation: '官方答案 view：依据录音内容，休息时她乐于看看风景、与他人交谈。（原书此处印作 "Ann"，保留笔误。）',
        },
        {
          q: "Some of the people on Anne's course said that a ____ had inspired them to try archery.",
          answer: ['TV series', 'television series'],
          show: 'TV / television series',
          explanation: '官方答案 TV / television series：Key 中 TV 与 television 均可，即某部电视剧激发了他们尝试射箭。',
        },
        {
          q: 'Anne was excited when the class were allowed to start ____ .',
          answer: ['scoring', 'keeping score', 'keeping a score'],
          show: 'scoring / keeping (a) score',
          explanation: '官方答案 scoring / keeping (a) score：Key 中 "scoring" 与 "keeping (a) score" 均算对，指全班开始计分。',
        },
        {
          q: 'Anne is trying to persuade her ____ to do an archery course with her.',
          answer: ['parents'],
          show: 'parents',
          explanation: '官方答案 parents：依据录音内容，她正劝父母和她一起上射箭课。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about when they moved their office from one building to another. For questions 19–23, choose from the list (A–H) what each speaker says. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std2/std2-t3-p3.mp3',
      options: [
        { label: 'A', text: 'We were not allowed to do the packing ourselves.' },
        { label: 'B', text: 'We decided not to blame the removal company for all the problems.' },
        { label: 'C', text: 'We chose certain members of staff to take responsibility for the move.' },
        { label: 'D', text: 'We chose a removal firm with a good reputation to avoid wasting time.' },
        { label: 'E', text: 'We made sure our senior staff stayed with the company.' },
        { label: 'F', text: 'We took advantage of the move to make additional necessary changes.' },
        { label: 'G', text: 'We managed not to exceed our budget.' },
        { label: 'H', text: 'We expressed our concerns about the move.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: "官方答案 E：依据录音内容，该说话人确保资深员工留在了公司。原文：\"We had to accept that, but we had to dissuade our top managers from leaving, so some of the money we got from selling the building was given to them in the form of a bonus.\"", transcript: "Speaker 1\nWe decided to move our office from the centre of London to a town about thirty kilometres away. Our office in the centre of London was very expensive to run and we knew we'd make a lot of money from selling the building because it was in an excellent location. The administrative staff decided to resign because they enjoyed working in London and didn't want to move. We had to accept that, but we had to dissuade our top managers from leaving, so some of the money we got from selling the building was given to them in the form of a bonus." },
        { speaker: 'Speaker 2', answer: 'H', explanation: "官方答案 H：依据录音内容，该说话人表达了对搬家的顾虑。原文：\"So a number of us in the department tried to get the date changed so that our work wouldn't suffer.\"", transcript: "Speaker 2\nOur company decided to move office at what would be a very busy time of year for our department. So a number of us in the department tried to get the date changed so that our work wouldn't suffer. No luck with that, but at least senior management were aware of the problems we would have. I knew that everything would be in chaos on the day itself, so I collected as many empty boxes from the removal company as I could and was glad that I did, because in the end they came in handy for me to pack my stuff in." },
        { speaker: 'Speaker 3', answer: 'C', explanation: "官方答案 C：依据录音内容，该说话人指定部分员工负责搬家事宜。原文：\"First of all, we set up a small group of people to be in charge of the move and any requests had to go through them.\"", transcript: "Speaker 3\nAbout three years ago we moved our office from one side of the street to another. First of all, we set up a small group of people to be in charge of the move and any requests had to go through them. That made everything more organised and democratic. However, quite a few things still went missing during the move. For instance, we couldn't find the computer manager's cupboard and eventually it turned up in our old building. OK, these things happen, but when you use a well-established company to do your move, you expect better." },
        { speaker: 'Speaker 4', answer: 'F', explanation: "官方答案 F：依据录音内容，该说话人借搬家之机做了其他必要调整。原文：\"Moving offices always creates disruption, so we said, why not use this opportunity to reorganise where people sit.\"", transcript: "Speaker 4\nMoving offices always creates disruption, so we said, why not use this opportunity to reorganise where people sit. The offices are now arranged according to people's responsibilities. So staff in each office can work together without having to phone one another. There were things we didn't take into consideration though, like the size of the canteen, which turned out to be much too small. Moving to new offices is like moving house; many of the problems are the same." },
        { speaker: 'Speaker 5', answer: 'B', explanation: "官方答案 B：依据录音内容，该说话人决定不为种种问题责怪搬家公司。原文：\"We resolved not to follow it up, though, as it wasn't really their fault.\"", transcript: "Speaker 5\nAlways bear in mind the amount of thinking ahead that you're going to need when you move. We took a few little things like the files we were working on at the time and our personal belongings, but we failed to give the removal company clear enough instructions about the rest. We couldn't find several important invoices we needed to access, because they'd put them in the wrong room. We resolved not to follow it up, though, as it wasn't really their fault. We found we needed at least two days; one to clear everything out, and the other to set it all up in the new offices. And then we spent months trying to find out where everything was." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear part of a radio interview with someone called Jane Brown, who is a home economist working in the food industry. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t3-p4.mp3',
      transcript: "You will hear part of a radio interview with someone called Jane Brown, who is a home economist working in the food industry. For questions 24 to 30, choose the best answer (A, B or C).\n\nInterviewer: In our series of interviews about people's jobs, we're delighted to welcome Jane Brown, who works in the food industry.\n\nJane: Hi!\n\nInterviewer: Now I know you studied home economics at Langley University, Jane. Why did you go there?\n\nJane: Well some of my friends also studied home economics, and they wanted me to go to the same university as them rather than to Langley. If I'd done that, I could have shared a flat with them – that would've been fun but being closer to home really appealed to me and made getting used to being a student that bit easier.\n\nInterviewer: And did you enjoy the course?\n\nJane: I loved it! I've always been interested in food chemistry, so that's what I specialised in. The class sizes were small so the staff knew us all by name and all about us. I'd always enjoyed working with other people, and I did a lot of that on the course. The university also made sure we had plenty of opportunities to get out of the classroom and apply things we'd learnt in theory to real life.\n\nInterviewer: I suppose you also learned about things like food tasting?\n\nJane: A group of us would all have to taste the same dish and try to decide if the general public would like it. As the training got more complex it became harder to agree, and there were even conflicts and tense moments. We had really long arguments about flavours, but it was worth it in the end.\n\nInterviewer: And what was your first job after university?\n\nJane: I worked for a large food company, in the sauces team, testing out new recipes and making sure the quality of the sauces they produced was consistent. When I applied, I knew I could do it, and it was really a step along the way to something more interesting. But there were a lot of applicants and the food industry isn't always an easy one to get into, so I was very aware of how lucky I was.\n\nInterviewer: Is there anything you particularly remember about that first job?\n\nJane: Yes, I assisted in the development of a new product, a delicious cheese sauce! It was very different at first to be making decisions on my own and doing things without the support of the people I'd studied with for three years, but I coped pretty well. I think. The team I was in managed to reduce the salt content of the cheese sauce while keeping it tasty, which wasn't straightforward. And then of course it was great to see it on supermarket shelves!\n\nInterviewer: Yeah, it must have been exciting! So what did you do next?\n\nJane: Well that first company sent me to work in Denmark for two years. That was really interesting. Part of my job involved visiting local food companies, and that way I met lots of people I'm still in touch with who've helped me and taught me loads. And on a personal level, it was great to discover a new country and culture, as well as a whole new food culture.\n\nInterviewer: Out of all the different things you mentioned Jane, there must be some things you enjoy more than others?\n\nJane: There are lots of different things to do. For example I have to interview clients, to find out about and understand what they need; I taste food to assess its quality – rather a lot of that, which actually isn't always that great when the food gets really unusual! And then there are reports to write, which some people hate but I never mind. And lots of other things too, so every day is different. I really think I have a fantastic job and would certainly recommend it to anyone who's interested in food and how it's produced.\n\nInterviewer: Thanks very much, Jane, that's been really interesting … [fade]",
      items: [
        {
          q: 'Why did Jane choose to study at Longley University?',
          opts: [
            'The location suited her.',
            'She knew people there.',
            'The quality of the accommodation was good.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，她选择 Longley 大学是因为位置合适。原文：\"If I'd done that, I could have shared a flat with them – that would've been fun but being closer to home really appealed to me and made getting used to being a student that bit easier.\"",
        },
        {
          q: 'What did Jane like about her course?',
          opts: [
            'She gained practical experience.',
            'The teachers helped her a great deal.',
            'She learned to work with other people.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，她喜欢这门课程让她获得了实践经验。原文：\"The university also made sure we had plenty of opportunities to get out of the classroom and apply things we'd learnt in theory to real life.\"",
        },
        {
          q: 'What does Jane say about her food tasting training?',
          opts: [
            'It was a little boring.',
            'It was rather time-consuming.',
            'It was sometimes stressful.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，食品品尝训练有时让她感到有压力。原文：\"As the training got more complex it became harder to agree, and there were even conflicts and tense moments.\"",
        },
        {
          q: 'How did Jane feel when she was offered her first job?',
          opts: [
            'excited to be involved in a challenging area',
            'relieved to have been able to find employment',
            'concerned she might not do her work well enough',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，拿到第一份工作时她为找到了工作而如释重负。原文：\"But there were a lot of applicants and the food industry isn't always an easy one to get into, so I was very aware of how lucky I was.\"",
        },
        {
          q: 'Jane is proud that in her first job she',
          opts: [
            'came up with her own original idea for a product.',
            'proved that she was capable of working independently.',
            'succeeded in doing something nobody thought she could.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，她为在第一份工作中证明自己能独立工作而自豪。原文：\"It was very different at first to be making decisions on my own and doing things without the support of the people I'd studied with for three years, but I coped pretty well.\"",
        },
        {
          q: "How did working in Denmark help Jane's career?",
          opts: [
            'She made useful contacts.',
            'She came across new recipes.',
            'She found a better job.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，在丹麦工作帮她结识了有用的人脉。原文：\"Part of my job involved visiting local food companies, and that way I met lots of people I'm still in touch with who've helped me and taught me loads.\"",
        },
        {
          q: 'What aspect of her job does Jane enjoy?',
          opts: [
            'the wide variety of activities she does',
            'the opportunity to meet new people',
            'the experience of trying new foods',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，她最享受工作中活动的多样性。原文：\"There are lots of different things to do.\"",
        },
      ],
    },
  },
};

// Source: Cambridge English First 2（标准版2）First 2 (updated).pdf（用户原件扫描版）
// 应用 Test 4 = 书内印 Test 8。Test 8 Listening: 书页 88–93（PDF 89–94，PDF 页 = 书页 + 1）
// 答案核对自 Test 8 Key（书 156 起 / PDF 157 起；Listening 区在书 157 / PDF 158）
// 音频：/audio/fce/std2/std2-t4-p1.mp3 ~ std2-t4-p4.mp3（整 Part 一条；p1=CD2 Track07，p2=CD2 Track09，p3=CD2 Track10，p4=CD2 Track12）
// 注：书 90 页 Part 2 版式为编号答题框（非 (N)……点线空位），按既有数据惯例以 ____ 表示空位；页面标题 "Expedition to South Pole"。
// 注：Key 第 11 题印作 "loneliness/lonelyness"（第二种为官方 Key 收录的拼写变体，原样照录），第 16 题印作 "half(-)way"。

const STD2_L4 = {
  meta: {
    id: 'fce-standard-2-test4-listening',
    title: 'FCE 标准版真题 2 · Test 4 Listening',
    level: 'FCE',
    collection: 'Cambridge English First 2（标准版2）',
    book: 'Cambridge English First 2',
    paper: 'Listening',
    pages: '书 88–93',
    source: '标准版2 First 2 (updated).pdf（用户原件扫描版）',
    answerSource: 'Test 8 Key（书 156–157 / PDF 157–158，Listening 区在书 157 / PDF 158）',
    audioNote: '音频按官方 CD 轨映射接入；源盘 P2 轨仅含一遍播放（约4分钟），P4 轨第一遍后含约4分钟静音（源盘如此）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t4-p1.mp3',
      items: [
        {
          scenario: "You hear two people talking about some music they're listening to.",
          q: 'What does the man say about the song?',
          opts: ['It cheers him up.', 'It reminds him of his family.', 'It inspired him to take up a musical instrument.'],
          answer: 2,
          transcript: "You hear two people talking about some music they're listening to.\nMan: Oh, I love this song by The Foolz!\nWoman: Do you? I find it a bit sad.\nMan: Yeah, I know what you mean. I do normally like music that's a bit more light-hearted, but this particular one still works for me. My parents always played upbeat stuff by The Foolz at home, so when I first heard this track, it came as a bit of a surprise.\nWoman: I can imagine – it's quite different from their usual style.\nMan: No one in my family plays a musical instrument, but I actually started teaching myself the guitar because I wanted to be able to play this.\nWoman: And can you?\nMan: Not yet! I'll be really pleased when I can!",
          explanation: "官方答案为 C：他说这首歌激励他开始学习一种乐器。原文：\"No one in my family plays a musical instrument, but I actually started teaching myself the guitar because I wanted to be able to play this.\"",
        },
        {
          scenario: 'You hear part of a radio programme in which a teacher is talking about her own education.',
          q: 'Why did she become a teacher?',
          opts: [
            'She enjoyed her own time at school very much.',
            'She was encouraged to do so by colleagues.',
            'She wanted others to have the same opportunities as her.',
          ],
          answer: 2,
          transcript: "You hear part of a radio programme in which a teacher is talking about her own education.\nI was educated in quite a posh and rather expensive school, really, so expectations for pupils were high, and that put us under pressure a bit. Mind you, I wouldn't have got down to it and done much otherwise, and certainly wouldn't have gone to university. Perhaps that's why I've found my niche in trying to make sure that everyone gets the kind of education that allows them to realise their full potential in life. Teaching wasn't my first career choice, though, I think colleagues I worked with were amazed when I made the switch from industry. But I haven't looked back since I did it.",
          explanation: "官方答案为 C：她当老师是想让其他人也能拥有和她一样的机会。原文：\"Perhaps that's why I've found my niche in trying to make sure that everyone gets the kind of education that allows them to realise their full potential in life.\"",
        },
        {
          scenario: 'You hear a woman telling a friend about a new job she has.',
          q: 'What problem does she have with the job?',
          opts: [
            "being asked to do tasks she's not suited for",
            'being too busy at certain times of day',
            'being disrespected by some customers',
          ],
          answer: 0,
          transcript: "You hear a woman telling a friend about a new job she has.\nMan: How are you getting on with your new job in the café?\nWoman: Overall enjoying it a lot. The owners are a husband and wife, and he does the cooking downstairs while she's in charge in the café. At times they're quite casual and laid back, and at others they get really stressed out, like when you make a mistake or when it gets really full at lunch time! They seem to think I'm a master of all trades and that I know how to repair their faulty coffee machine … which is much too technical for me! Anyway, I mustn't grumble … at least the customers have been nice so far, with a few exceptions who were just rather fussy for my liking.",
          explanation: "官方答案为 A：她对这份新工作的不满在于常被安排去做不适合自己的任务。原文：\"They seem to think I'm a master of all trades and that I know how to repair their faulty coffee machine … which is much too technical for me!\"",
        },
        {
          scenario: 'You hear two students talking about an architecture course.',
          q: 'What do they agree about?',
          opts: [
            'There is too much work on the course.',
            'Their fellow students are creative people.',
            'The course is taught in an interesting way.',
          ],
          answer: 2,
          transcript: "You hear two students talking about an architecture course.\nMan: I'm so glad I chose architecture, aren't you?\nWoman: Yeah. The course is great, but sometimes I feel I can't keep up. We always have so much work to do!\nMan: I think it's about right, personally. And anyway, the teachers explain everything brilliantly!\nWoman: I don't think I've ever learnt so much in such a short time, and it's because of them, that's true.\nMan: What do you think of the other students? Some of them have fantastic ideas, don't they!\nWoman: They produce good work, because they're on such an inspiring course. I'm not sure how they'd perform in a different environment, though.\nMan: Yeah, you may be right. Anyway, I'm very happy.",
          explanation: "官方答案为 C：两人一致认为这门建筑课程授课方式有趣。原文：\"I don't think I've ever learnt so much in such a short time, and it's because of them, that's true.\"",
        },
        {
          scenario: 'You hear two students talking about the chemistry laboratories at their college.',
          q: 'What does the woman say about the laboratories?',
          opts: ['The equipment in them should be updated.', 'They are not large enough.', 'They need redecorating.'],
          answer: 1,
          transcript: "You hear two students talking about the chemistry laboratories at their college.\nMan: Did you know they're going to do up the chemistry labs next month?\nWoman: No, I didn't. Bit weird, isn't it? I mean some work was done on them last year and they're OK, I think.\nMan: Well I still think they could do with a coat of paint.\nWoman: The main thing, I'd say, is that there are just so many of us wanting to use them this year and they're too crowded.\nMan: Yeah, true, and I also think they should replace some of the equipment, don't you?\nWoman: A lot of what they have is pretty much state-of-the-art, so I wouldn't say that's much of a problem.\nMan: Maybe you're right.",
          explanation: "官方答案为 B：女生认为实验室面积不够大。原文：\"The main thing, I'd say, is that there are just so many of us wanting to use them this year and they're too crowded.\"",
        },
        {
          scenario: 'You hear a woman talking about a place she used to visit as a child.',
          q: 'What point is she making?',
          opts: [
            'She might be disappointed if she returned there.',
            'She prefers more sophisticated holidays now.',
            'The place appeals more to children than adults.',
          ],
          answer: 0,
          transcript: "You hear a woman talking about a place she used to visit as a child.\nBradworth is a small seaside town and visits there were a huge part of my childhood. I have many fond memories of sailing off the coast, watching the seals, walking barefoot in the beautiful white sand and having sand fights with the other children. I remember all the parents getting together for picnics too. I've had lots of exotic vacations since then in the most amazing places but nothing to compare with those childhood memories. I'd love to go back but it wouldn't be the same any more and I'd rather hang on to those wonderful childhood memories.",
          explanation: "官方答案为 A：她指出如果重回旧地可能会感到失望。原文：\"I'd love to go back but it wouldn't be the same any more and I'd rather hang on to those wonderful childhood memories.\"",
        },
        {
          scenario: 'You hear a runner telling his friend about a sports injury he has.',
          q: 'What did his doctor advise?',
          opts: ['keep going with some training', 'introduce other sports very gradually', 'start running very slowly'],
          answer: 0,
          transcript: "You hear a runner telling his friend about a sports injury he has.\nMan: So the injury's making slow progress, I'm afraid.\nWoman: Oh dear.\nMan: Yes, I went back to the doctor, and my lower leg is still swollen. The strange thing is, apparently it actually needs a bit of exercise in order to get the blood flowing to it so that it can heal. So things like swimming and cycling are fine, although even with those I shouldn't push it … but even a bit of running is OK provided I run on soft surfaces. Then I've also been given some particular movements to do in front of a mirror which will stimulate the injured area in the right way.",
          explanation: "官方答案为 A：医生建议他继续保持一定的训练。原文：\"The strange thing is, apparently it actually needs a bit of exercise in order to get the blood flowing to it so that it can heal.\"",
        },
        {
          scenario: 'You hear a woman talking about her favourite radio programme.',
          q: 'What does she say about the stories in the programme?',
          opts: [
            'The creative element in them is what makes them work.',
            'They tend to vary in how interesting they are.',
            'They contain messages we can all learn from.',
          ],
          answer: 1,
          transcript: "You hear a woman talking about her favourite radio programme.\nI listen to a lot of stuff on the radio and I love hearing about stories of normal people leading normal lives. For several years now, I've been really into a programme called 'Your Turn' where people basically tell a story from their own life. Sometimes these stories can be quite gripping and emotional and at other times they can pass you by, but anyway I love having it on in the background while I'm working. It's a really clever idea actually. The stories have to be true and they're told – not read, but told – and they're delivered in front of a live audience. Really effective.",
          explanation: "官方答案为 B：她说节目里故事的有趣程度参差不齐。原文：\"Sometimes these stories can be quite gripping and emotional and at other times they can pass you by\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Peter Green talking about a group expedition he went on to the South Pole for a TV documentary. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std2/std2-t4-p2.mp3',
      transcript: "You will hear a man called Peter Green talking about a group expedition he went on to the South Pole for a TV documentary. For questions 9 to 18, complete the sentences with a word or short phrase.\n\nHi, my name's Peter and I'm going to talk about how I ended up in a TV documentary about going to the South Pole. Basically, what happened was, I spotted an online advert asking for people to apply for the trip of a lifetime. A TV company was making a documentary programme about this, and had left one place on the expedition for a member of the public to take part. I applied as, in my work as an engineer, I'd worked with an environmentalist who'd really inspired me with his tales of the South Pole. To my great surprise, I was accepted.\n\nThe TV company were keen to make the documentary unusual, for example concerning the transport. The idea was that we'd travel on skis, rather than using dogs and sledges, as many people have done before us.\n\nIn fact, the expedition turned out to be much, much harder than I ever thought it would be. Before I went, I thought the most challenging thing would be the physical toll on my body. And yes, it was incredibly challenging. But even though I wasn't alone – there were five others in the group – it was the loneliness I found the hardest to take. I really missed my family and friends, especially my wife.\n\nThe Antarctic trip took us seven weeks in all and we were travelling across an icy wilderness in sub-zero temperatures. We kept going for up to sixteen hours a day and we burnt nine thousand calories each and every day. It was crucial that those calories were replaced but our main preoccupation was the constant need to make water from the snow so we didn't become dehydrated.\n\nWe carried snack-packs of high-calorie food like cheese, salami, nuts and chocolate, and we cooked dehydrated meals with loads of fat for breakfast and dinner. It was incredible that fairly soon into the journey I'd lost the weight I had deliberately put on before I started. Despite this, I didn't suffer loss of concentration or motivation.\n\nHowever, by the time we reached the South Pole I was beginning to suffer from exhaustion, and I was afraid that my toes would be permanently damaged by the freezing temperatures. Luckily the special gloves I wore saved my fingers from having the same problem.\n\nMy team-mates suffered too. Of course, we all found the temperature difficult to take, but one of our group, John, suffered the most health problems. He developed a chest infection and the altitude didn't help that at all – neither did the fact that we rarely had a rest, because we needed to keep walking. This took us all by surprise, as John had been the fittest and most well-prepared member of the team before we started.\n\nAt various points on the journey we had breaks. At the halfway point we were examined by doctors and John was nearly forbidden from continuing. He was only given permission to carry on at the last minute. If he hadn't been allowed to carry on, that would have been the end of the whole adventure.\n\nLots of people have asked me why I went. It's a difficult question to answer. When I was travelling, all I could think about was getting through each day, and then when we got to the South Pole, rather than feeling a sense of achievement, I actually felt relief. It was an amazing experience. It's so incredible when you think that we survived for so long in such a physically and mentally demanding environment, which I can only call 'alien'. I don't think I'll want to go back there for quite some time!",
      items: [
        {
          q: 'Peter was working as an ____ when he applied to join the expedition.',
          answer: ['engineer'],
          show: 'engineer',
          explanation: '官方答案 engineer：他申请参加远征时的工作是工程师（题干冠词为 an）。',
        },
        {
          q: 'On the expedition, Peter and his group went to the South Pole on ____ instead of more typical means of transport.',
          answer: ['skis'],
          show: 'skis',
          explanation: '官方答案 skis：他们滑雪橇前往南极点，而非更常见的交通方式。',
        },
        {
          q: 'Peter says that his greatest challenge was the ____ he suffered.',
          answer: ['loneliness', 'lonelyness'],
          show: 'loneliness/lonelyness',
          explanation: '官方 Key 印作 loneliness/lonelyness（第二种为官方 Key 收录的拼写变体，按页面原样照录），两种拼法均算对。',
        },
        {
          q: "Peter says that ensuring they could get enough ____ took up a good deal of the group's time.",
          answer: ['water'],
          show: 'water',
          explanation: '官方答案 water：保障足够的用水占去了全队大量时间。',
        },
        {
          q: 'Peter was surprised at how quickly his ____ decreased.',
          answer: ['weight'],
          show: 'weight',
          explanation: '官方答案 weight：他惊讶于体重下降之快。',
        },
        {
          q: "Peter's ____ were affected by the cold during the expedition.",
          answer: ['toes'],
          show: 'toes',
          explanation: '官方答案 toes：远征期间的严寒影响了他的脚趾。',
        },
        {
          q: "One of Peter's teammates had a chest infection and the lack of ____ made it worse.",
          answer: ['rest'],
          show: 'rest',
          explanation: '官方答案 rest：队友患胸部感染，缺乏休息使病情加重。',
        },
        {
          q: "When they reached the ____ point, Peter's team were given a medical check.",
          answer: ['halfway', 'half-way'],
          show: 'half(-)way',
          explanation: '官方答案 half(-)way：按官方 Key 记法连字符可省略，halfway / half-way 均算对。',
        },
        {
          q: 'Peter felt a great sense of ____ when he reached the pole.',
          answer: ['relief'],
          show: 'relief',
          explanation: '官方答案 relief：抵达极点时他如释重负。',
        },
        {
          q: 'Peter uses the word ____ to describe the environment at the South Pole.',
          answer: ['alien'],
          show: 'alien',
          explanation: '官方答案 alien：他用 alien 一词形容南极点的环境。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about how to give good presentations. For questions 19–23, choose from the list (A–H) what advice each person gives. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std2/std2-t4-p3.mp3',
      options: [
        { label: 'A', text: 'Keep your presentation short.' },
        { label: 'B', text: 'Remember to repeat your main point.' },
        { label: 'C', text: 'Support your presentation with visuals.' },
        { label: 'D', text: 'Add some humour.' },
        { label: 'E', text: 'Practise giving your presentation.' },
        { label: 'F', text: 'Try to relax during your presentation.' },
        { label: 'G', text: "Don't try to memorise every word." },
        { label: 'H', text: 'Find out about your audience.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: "官方答案 E：说话人 1 给出的建议是多加练习做演示。原文：\"The main thing as far as I'm concerned is to make sure you've already given it loads of times before you're actually standing in front of your audience.\"", transcript: "Speaker 1\nI haven't given many presentations so far, but I have talked to a lot of my fellow students about them and I'm certainly more relaxed about giving them than I used to be. The main thing as far as I'm concerned is to make sure you've already given it loads of times before you're actually standing in front of your audience. You may risk boring yourself to tears, but believe me, it's worth it! And I don't mean you should give a shorter version, either. They need to hear every single word, from start to finish. The best people to help you with this are your friends and family." },
        { speaker: 'Speaker 2', answer: 'H', explanation: "官方答案 H：说话人 2 建议事先了解听众情况。原文：\"That means the more you know about them, the better.\"", transcript: "Speaker 2\nWhen you're planning your presentation, the main point to remember is laughably simple: you're trying to communicate something to other people, so the focus has to be on them, not on you. That means the more you know about them, the better. I can remember one of my college lecturers repeating this time and again, and I think she was absolutely right. However well you know your subject and however many jokes you tell, your presentation won't be a success unless you bear this point in mind. There's a big difference between a talk for people who already know a lot about a subject and one for those who don't." },
        { speaker: 'Speaker 3', answer: 'A', explanation: "官方答案 A：说话人 3 建议把演示时间控制得短一些。原文：\"The key thing, I'd say, is to make sure you hold your audience's attention throughout, and you'll only be able to do that if you don't go on at length.\"", transcript: "Speaker 3\nIn my opinion, a good presentation isn't necessarily one which makes the audience laugh, or one that has wonderful graphics to illustrate the speaker's points. The key thing, I'd say, is to make sure you hold your audience's attention throughout, and you'll only be able to do that if you don't go on at length. That may sound easy, but if you're too relaxed you're in danger of forgetting this basic rule. When you're preparing, it's important to decide what your main message is and work out how best to communicate it briefly. If you can do that there'll be no need to repeat the same point three times." },
        { speaker: 'Speaker 4', answer: 'C', explanation: "官方答案 C：说话人 4 建议用视觉材料支撑演示。原文：\"Colour diagrams and graphs are a really engaging way of putting your message across, and everyone will enjoy your input more, including you.\"", transcript: "Speaker 4\nMany people think that to give a good presentation, you need to practise a lot, but I find that just makes me nervous for days in advance. I think audiences need something to focus on while they're listening. Colour diagrams and graphs are a really engaging way of putting your message across, and everyone will enjoy your input more, including you. If you're short of ideas however, try to avoid telling jokes, which are no substitute for the real thing, that is, information. And you can always ask your fellow students and colleagues about what materials they've used in the past!" },
        { speaker: 'Speaker 5', answer: 'F', explanation: "官方答案 F：说话人 5 建议在演示过程中尽量放松。原文：\"If you feel comfortable and can manage to look as if you're enjoying yourself, then the audience will respond to this and enjoy your presentation more.\"", transcript: "Speaker 5\nIf you're well prepared and know what you're talking about, then your presentation should be a pleasure to give as well as to listen to. If you feel comfortable and can manage to look as if you're enjoying yourself, then the audience will respond to this and enjoy your presentation more. I'm not saying it'll be easy at first, but the more you give different presentations, the easier you'll find it. When I had to speak to a very large audience for the first time, I pictured them all sitting in trees wearing silly hats. It's probably best, though, to focus on your subject matter rather than on the audience!" },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Maggie Wharton who is skilled in the sport of kitesurfing. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std2/std2-t4-p4.mp3',
      transcript: "You will hear an interview with a woman called Maggie Wharton who is skilled in the sport of kitesurfing. For questions 24 to 30, choose the best answer (A, B or C).\n\nInterviewer: So Maggie, welcome to the studio. Tell us about the sport of kitesurfing. What is it and how did you get into it?\n\nMaggie: Well, in kitesurfing your feet are strapped to a surfboard and you're holding on to a big kite – and the wind takes you along on the water at tremendous speed. From the point when I started, a long time ago, it took me about a year to feel I could really call myself a kitesurfer. At least I was physically in good enough shape from the outset, though the lack of any really suitable instruction obstructed my progress. Having said that, it was straightforward to get everything you needed, but there wasn't the range you see now – it's become one of the fastest-growing sports in the country.\n\nInterviewer: So what's changed in the sport during that time?\n\nMaggie: Well, helmets have gained increasing popularity, and I guess they're good, because if you fall off you could easily hit your head, but my generation never felt the need for one. On the other hand, the wind is the fundamental element that all kitesurfers have to learn about. For example, you should never go on the water if the wind's coming from off the land as you could be blown out to sea – and I'm not sure if kitesurfers now are as up on that as we were. Of course, they'll know obvious things like not surfing in places near rocks or power lines – but sadly those hazards still aren't as flagged up as they might be.\n\nInterviewer: Right – and you now take part in international events.\n\nMaggie: Yes, I'm going to Fiji soon for an eighty-day competition. It's a new event but the organisers are keen to get it as a regular fixture on the calendar. We'll cover a hundred and fifty kilometres and perhaps a new world record'll be set in distance kitesurfing. And it'll be great if, as a result of seeing me take part, people will decide to give it a go. But it's not just distance, we'll be able to show off some freestyle tricks, too.\n\nInterviewer: But you've done some amazing distance events before.\n\nMaggie: Yeah, I've kitesurfed well over a hundred kilometres. That was tough – particularly on the feet and knees. And the fog meant my support boat was no longer visible for a while, which was an uncomfortable feeling. Then halfway across, I changed to a bigger kite so I could get more speed, and things went more smoothly after that. But apart from a few dolphins for company, we were out in the middle of the sea alone.\n\nInterviewer: An amazing achievement! So why've you done so well, do you think?\n\nMaggie: Well, it was always likely that I'd take up some kind of water sport because I grew up near the sea and my parents taught me to swim at an early age. It was the unpredictability of kitesurfing that appealed to my nature, really – I've always gone for things that are less straightforward. But of course, you don't get anywhere if you don't practise.\n\nInterviewer: And kitesurfing's a growing sport. What do you think about the people taking it up now?\n\nMaggie: Well, kitesurfing's a free-and-easy sport without many regulations that everyone has to follow. But, having said that, I've met a number of new people who are attracted to the sport because of the stuff you do up in the air, rather than on the water. What they don't realise is that the dos and don'ts of the sport have to be mastered before they try something so ambitious – they're too impatient – although one day they may well achieve great things once they've grasped those.\n\nInterviewer: What is there left for you to do in the sport?\n\nMaggie: Enjoy it, mostly – I'll leave the competition for the young guys. But I still need to set myself goals, and I'm keen to help bring a bit more sponsorship into the sport without making it too commercial. My partner's also a kitesurfer – he teaches young kids in the local area, and I help him. So I might even do more of that one day – who knows?\n\nInterviewer: Maggie, thanks … [fade]",
      items: [
        {
          q: 'Maggie says it took her a long time to learn to kitesurf because',
          opts: [
            "the equipment wasn't widely available.",
            'it was hard to find the right assistance.',
            'she needed to build up her strength.',
          ],
          answer: 1,
          explanation: "官方答案为 B：她学得久是因为当时很难找到合适的指导。原文：\"At least I was physically in good enough shape from the outset, though the lack of any really suitable instruction obstructed my progress.\"",
        },
        {
          q: "In Maggie's opinion, since she began kitesurfing",
          opts: [
            'suitable locations have been more clearly identified.',
            'attitudes to some aspects of safety have changed.',
            'participants have become better informed about sea conditions.',
          ],
          answer: 1,
          explanation: "官方答案为 B：在她看来，人们对安全某些方面的态度已经改变。原文：\"Well, helmets have gained increasing popularity, and I guess they're good, because if you fall off you could easily hit your head, but my generation never felt the need for one.\"",
        },
        {
          q: 'Maggie hopes that by competing in Fiji, she will',
          opts: [
            'encourage others to take up the sport.',
            'have the chance to pick up some new moves.',
            'be invited to start organising future events.',
          ],
          answer: 0,
          explanation: "官方答案为 A：她希望通过在斐济参赛鼓励更多人参与这项运动。原文：\"And it'll be great if, as a result of seeing me take part, people will decide to give it a go.\"",
        },
        {
          q: 'During one distance event, Maggie became slightly worried when',
          opts: [
            'she had to switch to different equipment.',
            'she experienced a great deal of pain.',
            'she lost sight of the people helping her.',
          ],
          answer: 2,
          explanation: "官方答案为 C：一次长距离赛事中，她因看不到协助她的人而略有担心。原文：\"And the fog meant my support boat was no longer visible for a while, which was an uncomfortable feeling.\"",
        },
        {
          q: 'Maggie thinks her success is due to the fact that',
          opts: [
            'the sport suits her character very well.',
            'her family have given her a lot of support.',
            'she has the opportunity to practise regularly.',
          ],
          answer: 0,
          explanation: "官方答案为 A：她认为成功源于这项运动非常契合她的性格。原文：\"It was the unpredictability of kitesurfing that appealed to my nature, really – I've always gone for things that are less straightforward.\"",
        },
        {
          q: "Maggie says that some new kitesurfers she's met",
          opts: [
            'are likely to develop the sport in interesting ways.',
            'are unwilling to focus on basic techniques first of all.',
            'are too worried about the rules of the sport.',
          ],
          answer: 1,
          explanation: "官方答案为 B：她遇到的一些新玩家不愿先专注基本技术。原文：\"What they don't realise is that the dos and don'ts of the sport have to be mastered before they try something so ambitious – they're too impatient – although one day they may well achieve great things once they've grasped those.\"",
        },
        {
          q: 'What does Maggie hope to do in the future?',
          opts: ['find sources of investment for her sport', 'continue to compete at a high level', 'set up a kitesurfing school'],
          answer: 0,
          explanation: "官方答案为 A：她希望未来能为这项运动寻找投资来源。原文：\"But I still need to set myself goals, and I'm keen to help bring a bit more sponsorship into the sport without making it too commercial.\"",
        },
      ],
    },
  },
};

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 22–27（PDF 24–29），答案核对自 Test 1 Key（Listening 区在书 121 / PDF 123；书 120 / PDF 122 为 Reading and Use of English Key）
// 音频：/audio/fce/std3/std3-t1-p1.mp3 ~ std3-t1-p4.mp3（整 Part 一条）
// 注：书 24 页 Part 2 印刷小标题为 "Survival in the forest"（数据结构无对应字段，记录于此备查）。

const STD3_L1 = {
  meta: {
    id: 'fce-standard-3-test1-listening',
    title: 'FCE 标准版真题 3 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 22–27',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 121 / PDF 123',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking on the radio about an actor.',
          q: 'What does the woman say about him?',
          opts: [
            'His acting has improved over the years.',
            'The media often criticise him unfairly.',
            'He gets fewer film roles than he deserves.',
          ],
          answer: 0,
          transcript: "You hear a woman talking on the radio about an actor.\nWoman: Like many actors, he always seems to be in the news for one reason or another. I know celebrities can be given a tough time, but he seems to get off relatively lightly. He's in loads of movies these days – and so he should be. His performances were fairly patchy when he was starting out, in my opinion, but that's never the case these days. And the signs are he'll continue to develop, especially now he's getting to play lead roles in popular theatre productions, too. If you ever get the chance to see him on stage, you won't be disappointed. Otherwise, catch him at a cinema near you!",
          explanation: "官方答案为 A：依据录音内容，她说他的演技这些年有所提高。原文：\"His performances were fairly patchy when he was starting out, in my opinion, but that's never the case these days.\"",
        },
        {
          scenario: 'You hear a hairstylist talking about her career.',
          q: 'She prefers working in the TV industry because she',
          opts: [
            'feels that her contribution is valued.',
            'is able to express her opinions freely.',
            'thrives on the creative challenge the work presents.',
          ],
          answer: 0,
          transcript: "You hear a hairstylist talking about her career.\nMan: You initially started off doing the hair of models in the fashion industry. What made you move to TV?\nWoman: The fashion industry turned me off quite a bit actually. I didn't like working with people who had such a high opinion of themselves. My attitude is that you should treat everyone the same and I found I was constantly having to bite my tongue because of the way I was treated there. The TV's different: it's much more a case of being respected for what you can offer regardless of your status … and that suits me. The TV people acknowledge you as a fellow professional and they're much more down-to-earth.",
          explanation: "官方答案为 A：依据录音内容，她感到自己的付出在电视行业被重视。原文：\"The TV's different: it's much more a case of being respected for what you can offer regardless of your status … and that suits me.\"",
        },
        {
          scenario: 'You hear a comedian called Geoff Knight talking on the radio about his profession.',
          q: 'What does Geoff like his act to contain?',
          opts: [
            'stories that give people a surprise',
            'things that everybody can relate to',
            'material that nobody has used before',
          ],
          answer: 1,
          transcript: "You hear a comedian called Geoff Knight talking on the radio about his profession.\nMan: When I'm doing my comedy act, at theatres or clubs or on TV, I'll often get my ideas from keeping my ears close to the ground. I try to pick up on all the strange and humorous everyday stuff, sometimes even boring … that you get in life … and I build it into my act. Obviously I do also get ideas from listening to other comedians too. I like to think that three generations of one family can sit at my show and know they won't feel threatened, because I'm not rude.  Even in big arenas people feel like I'm talking to them individually. It's a comfort thing for them.",
          explanation: "官方答案为 B：依据录音内容，他希望表演里有大家都能产生共鸣的内容。原文：\"I try to pick up on all the strange and humorous everyday stuff, sometimes even boring … that you get in life … and I build it into my act.\"",
        },
        {
          scenario: 'You hear a conversation between a customer and a coffee shop employee.',
          q: 'What is the employee doing?',
          opts: [
            "waiting for a colleague's help",
            "excusing a colleague's inefficiency",
            "criticising a colleague's attitude",
          ],
          answer: 1,
          transcript: "You hear a conversation between a customer and a coffee shop employee.\nWoman: Excuse me. Could someone come over and clear one of the tables in the window please?\nMan: Oh yes. I'm sorry. We've just had a really busy lunch break and, between you and me, my colleague's new and hasn't really got the hang of things yet.\nWoman: Yes, you look as if you've been really busy.\nMan: We should be able to get straight now it's a bit quieter. I'll get my colleague to come and clear your table right away.\nWoman: Hmmm … It certainly needs it!\nMan: Anyway, what can I get you? Coffee and cake or …\nWoman: I'll just have coffee please.\nMan: And I'll get a cloth to wipe the table.",
          explanation: "官方答案为 B：依据录音内容，员工在为同事的效率不高作开脱。原文：\"We've just had a really busy lunch break and, between you and me, my colleague's new and hasn't really got the hang of things yet.\"",
        },
        {
          scenario: 'You hear a man telling a friend about an art exhibition.',
          q: 'What does he say about it?',
          opts: ['It was well attended.', 'The lighting was effective.', 'The catalogue was worth buying.'],
          answer: 1,
          transcript: "You hear a man telling a friend about an art exhibition.\nWoman: Hi Mark, how did you like the exhibition?\nMan: It was alright, actually. I've got the catalogue here. Would you like to have a look?\nWoman: I don't usually bother with them, personally. They've always felt like a bit of a waste of money.\nMan: I know what you mean, but somebody lent me this one.\nWoman: So … what's the gallery like?\nMan: Really cool, using natural light to show off the paintings – saves energy too, you know …\nWoman: I expect it was crowded.\nMan: Well, I'd expected there to be masses of people, so I wouldn't be able to see anything. In fact, I nearly had the place to myself.",
          explanation: "官方答案为 B：依据录音内容，他觉得展览的灯光效果好。原文：\"Really cool, using natural light to show off the paintings – saves energy too, you know\"",
        },
        {
          scenario: 'You overhear a man ringing a sports shop.',
          q: 'Why is he calling?',
          opts: [
            'to report an incident in the shop',
            'to make a special order',
            'to follow up an earlier query',
          ],
          answer: 2,
          transcript: "You overhear a man ringing a sports shop.\nMan: Hello, Colin Foggerty here. I was in the shop last week, and bought a pair of the new Comfort football boots. I asked about a discount I'd heard about for members of Kirkley Rangers football club, which I'm a member of. The assistant was by herself and said she didn't know anything about it. I then checked on the football club website, and it confirms what I thought. I emailed you at the shop this morning and was told that the shop gives special discounts for official club purchases, but I'm still not sure whether the discount is applicable to ordinary club members like me. So I thought I'd better ring and sort it all out.",
          explanation: "官方答案为 C：依据录音内容，他打电话是跟进之前的咨询。原文：\"I emailed you at the shop this morning and was told that the shop gives special discounts for official club purchases, but I'm still not sure whether the discount is applicable to ordinary club members like me. So I thought I'd better ring and sort it all out.\"",
        },
        {
          scenario: 'You hear a man telling a friend about his work.',
          q: 'How does the man feel about his work?',
          opts: [
            "resentment of his colleague's success",
            'regret at the changes that have taken place',
            'frustration at his lack of progress',
          ],
          answer: 1,
          transcript: "You hear a man telling a friend about his work.\nWoman: So you've been at the company for five years, how do you feel it's going?\nMan: Well, the boss sees me as someone who'll go far but I don't really know if I want to. I mean I've seen what happened to Joe who was promoted last year to sales manager. At the time, I thought 'lucky him', but he isn't enjoying it. The working environment isn't as friendly and supportive as it was when I first joined – mainly because of all the targets we've been set. Sad that management feels the need to play with what was a winning formula. Still, let's see what the future brings.",
          explanation: "官方答案为 B：依据录音内容，他对工作中已经发生的变化感到遗憾。原文：\"The working environment isn't as friendly and supportive as it was when I first joined – mainly because of all the targets we've been set. Sad that management feels the need to play with what was a winning formula.\"",
        },
        {
          scenario: "You hear two people talking about a country walk they're doing.",
          q: 'What do they agree about?',
          opts: [
            "It's much too long to complete.",
            'The path is very difficult to follow.',
            "They've chosen the wrong day to do it.",
          ],
          answer: 2,
          transcript: "You hear two people talking about a country walk they're doing.\nMan: Are you feeling tired?\nWoman: No, I'm fine, just stopping to look at the scenery. It's beautiful, isn't it?\nMan: Fabulous, but keep moving – it's too cold to stand still.\nWoman: Well, we knew that when we set off. The forecast's better for tomorrow. I did say we should wait.\nMan: Sorry, I know, but let's carry on because there's only another five kilometres to go. Right or left here?\nWoman: Left, I think, according to the map. Five kilometres you said? It'll be just about dark when we get to the end.\nMan: If we do get there! I'm only joking!",
          explanation: "官方答案为 C：依据录音内容，两人都认为今天来徒步选错了日子。原文：\"Well, we knew that when we set off. The forecast's better for tomorrow. I did say we should wait.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a presentation given by a university student called Megan Rowlings about a forest survival course she went on in Australia. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t1-p2.mp3',
      transcript: "You'll hear a presentation given by a university student called Megan Rowllings about a forest survival course she went on in Australia. For questions 9 to 18, complete the sentences with a word or short phrase.\n\nHi, my name's Megan and I'm going to tell you about a forest survival course in Australia. So how did I come to do a course like that? Well, I'd been thinking about what to do in my summer holiday and my professor suggested I should do some teaching at a summer camp he was running, but I wanted to get away from academic stuff for a while. Then my father found the website about survival courses while looking for something to interest my brother. And that was it!\n\nThe course leader, John, was a very experienced survival expert with an impressive range of skills. I can't tell you how absolutely terrifying the experience of being in the forest was at times but John's humour eased the tension, for which I was really grateful. He also knew exactly when to offer support and when to leave us to it.\n\nChris was his assistant, and he brought different qualities to the group. He was never short of enthusiasm, and was particularly keen on insects – he told us the name of every one we came across in the forest. He also knew all the facts about plants so that over the five days, we got to know what was safe to eat while we were there and what we had to avoid. That information proved really valuable.\n\nThere were ten of us on the course and we made a great team. I thought I'd struggle with the tasks that made big physical demands because of my size, but I soon learnt that mental toughness was equally important. And in fact that turned out to be something I didn't have a problem with.\n\nJohn drilled into us the importance of staying safe at all times. In that respect, possessing sufficient self-awareness is key ... knowing our own capabilities and limitations could save our lives. All this holds back panic, which is often a greater danger than the situations we find ourselves in.\n\nWe'd all been equipped with a mini survival kit which contained things like a first aid kit and water sterilisation tablets, and of course we'd all brought other things as well, including some fancy gadgets which were never used ... but nobody else had thought about plastic bags to keep stuff dry in our rucksacks. I passed mine around and they were much appreciated.\n\nOur first task was to make tools that we could use. For example, did you know you can actually make a spear from a branch if it's strong enough? We were shown how to make a knife out of a stone that was lying on the forest floor. It took me quite a long time to make one but it was great for all sorts of tasks.\n\nThe next thing was to find a water source. We found a small stream and we followed that some distance to where it finally joined a river. John told us that because the water at that point was quite fast-flowing, it was drinkable as long as we boiled it. There was also a small lake nearby but we were advised not to use that because of the wild animals that were often there.\n\nOur first meal in the forest was what we collected ourselves, such as berries. Then, after all that walking and looking for food, we were ready for a good night's sleep. I didn't find making a shelter too problematic actually, which was just as well because if lighting a fire without matches had been left to me, then we'd have been shivering all night!\n\nThe thing that I found most interesting about the course was that many of the skills I use as a student at university are invaluable for survival too. Of course, you'd expect team-building to be useful. But what I hadn't expected was that being good at time management would also be an advantage.",
      items: [
        {
          q: "It was Megan's ____ who told her about the survival course.",
          answer: ['father'],
          show: 'father',
          explanation: '官方答案 father：是她父亲告诉了她这个生存课程。',
        },
        {
          q: "Megan particularly appreciated the course leader John's use of ____ at stressful moments.",
          answer: ['humour', 'humor'],
          show: 'humour / humor',
          explanation: '官方答案 humour / humor：Key 给出英式与美式两种拼写。',
        },
        {
          q: "Megan said the assistant's knowledge of ____ was very useful during the course.",
          answer: ['plants'],
          show: 'plants',
          explanation: '官方答案 plants：助教对植物的了解在课程中很有用。',
        },
        {
          q: 'Megan was worried that her ____ would be a problem in doing some of the tasks.',
          answer: ['physical size', 'size'],
          show: '(physical) size',
          explanation: '官方答案 (physical) size：Key 中 physical 为可选词，两种写法均算对。',
        },
        {
          q: 'John emphasised that when it comes to safety, ____ is the most dangerous reaction.',
          answer: ['panic'],
          show: 'panic',
          explanation: '官方答案 panic：慌乱是最危险的反应。',
        },
        {
          q: "Megan's teammates were grateful for the ____ which she'd brought with her.",
          answer: ['plastic bags', 'bags'],
          show: '(plastic) bags',
          explanation: '官方答案 (plastic) bags：Key 中 plastic 为可选词，两种写法均算对。',
        },
        {
          q: 'Megan learned how to make a ____ from the material found in the forest.',
          answer: ['knife'],
          show: 'knife',
          explanation: '官方答案 knife：她学会了用林中材料做刀。',
        },
        {
          q: 'Megan and her group were told they should only use water from the ____ for drinking.',
          answer: ['river'],
          show: 'river',
          explanation: '官方答案 river：只能饮用河水。',
        },
        {
          q: 'Megan found that making a ____ was hard for her.',
          answer: ['fire without matches', 'fire'],
          show: 'fire (without matches)',
          explanation: '官方答案 fire (without matches)：Key 中 without matches 为可选补充，生火对她来说最难。',
        },
        {
          q: 'Megan was surprised to find that the skill of ____ benefited her.',
          answer: ['being good at time management', 'time management'],
          show: '(being good at) time management',
          explanation: '官方答案 (being good at) time management：Key 中 being good at 为可选词。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people talk about a problem they had in their first few weeks in a new job. For questions 19–23, choose what problem (A–H) each speaker says they had. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t1-p3.mp3',
      options: [
        { label: 'A', text: 'I made an embarrassing comment.' },
        { label: 'B', text: "I didn't get on with my colleagues." },
        { label: 'C', text: 'I took on too much work.' },
        { label: 'D', text: "I didn't get enough support." },
        { label: 'E', text: 'I found the work too challenging.' },
        { label: 'F', text: 'I was over-confident.' },
        { label: 'G', text: "I wasn't very punctual." },
        { label: 'H', text: 'I was treated unreasonably.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'G', explanation: "官方答案 G：依据录音内容，这位说话者的问题是不够守时。原文：\"The problem was, she had a longer lunch break than me and I started wandering back a few minutes over the hour.\"", transcript: "Speaker 1\nWell I work for an IT company and I love it because it's really stimulating. I work hard but the rewards are there. At the same time it's quite laid back – at least where the dress code is concerned anyway. My first few weeks were great. My friend works in the adjoining building so we often had lunch together. The problem was, she had a longer lunch break than me and I started wandering back a few minutes over the hour. I didn't think anyone would notice but colleagues soon had a quiet word with me – in the nicest possible way of course! I don't do that anymore." },
        { speaker: 'Speaker 2', answer: 'F', explanation: "官方答案 F：依据录音内容，这位说话者当时过于自信。原文：\"I thought I knew it all.\"", transcript: "Speaker 2\nMy first job was for a finance company. I'd beaten off quite a few candidates to get the job and I was riding high. I'd bought a new suit and briefcase and walked in there on the first day thinking 'This is it. Now I'm going to show them what I'm made of.' I thought I knew it all. I'd correct colleagues if they said something wrong and I was always talking about what I'd learnt at university. Anyway, in my fourth week the boss called me in and told me I'd done something that had lost the company quite a lot of money. I learnt a lot that day." },
        { speaker: 'Speaker 3', answer: 'A', explanation: "官方答案 A：依据录音内容，这位说话者说了一句令人尴尬的话。原文：\"She asked me how I was getting on and I said I really liked the job and everything, but not the boss. Stupid I know.\"", transcript: "Speaker 3\nI worked for a small company locally. It was my first job back after maternity leave and I was really glad to be back at work. I got on well with my colleagues and the work was fine, but I really didn't like the boss. Anyway, I got quite friendly in the first few weeks with the receptionist. She was a nice young girl – very chatty. She asked me how I was getting on and I said I really liked the job and everything, but not the boss. Stupid I know. Anyway, it turns out that the receptionist was the boss's niece! Small world. I should've noticed their surnames were the same!" },
        { speaker: 'Speaker 4', answer: 'H', explanation: "官方答案 H：依据录音内容，这位说话者受到了不公平的对待。原文：\"But I resented being told to do things that weren't in my job description, and I didn't think that was fair.\"", transcript: "Speaker 4\nWell, I didn't really need the job in the supermarket. You know, I was retired and just wanted something to fill the time and the extra money was useful. I'd been a manager for an engineering company in the past so I knew how things worked. I did my job. I was always on time. But I resented being told to do things that weren't in my job description, and I didn't think that was fair. I didn't say anything but I think they knew I wasn't happy. In the end, I decided I didn't fit in. On reflection, I think retirement suits me better." },
        { speaker: 'Speaker 5', answer: 'C', explanation: "官方答案 C：依据录音内容，这位说话者承担了太多的工作。原文：\"I went a bit too far – volunteering to do everything, taking clients' names and details home to memorise so I could greet them by name when they came in and so on.\"", transcript: "Speaker 5\nI've never been very confident so I was really surprised when I was offered a job in a very posh law company. I decided to really show them that I was up to doing the job, but I went a bit too far – volunteering to do everything, taking clients' names and details home to memorise so I could greet them by name when they came in and so on. I overdid it actually because I wasn't being myself. After a few weeks, my colleagues told me to relax and that I was doing fine as I was. I didn't need to prove anything. I love my job now." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with an international concert pianist called Karen Hong. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t1-p4.mp3',
      transcript: "You'll hear an interview with an international concert pianist called Karen Hong. For questions 24 to 30, choose the best answer (A, B or C).\n\nInterviewer: My guest today is the international concert pianist Karen Hong. Welcome Karen, I'm sure you're busy with your piano practice!\n\nKaren: Don't apologise! But you're right – I do an average of six hours' practice a day. People think when you're a performer, you just know the pieces of music by heart and don't need to practise, but this isn't true! For one thing, you might be performing a piece for the first time. For another, even pieces you know well still need maintenance and repair work on them. Also, every pianist at whatever level needs to do their drills and finger exercises as a warm-up.\n\nInterviewer: I remember you saying before that your parents are both very dynamic, motivated people.\n\nKaren: Yes absolutely. My mother would repeat to me 'You have this opportunity to develop your talent. Neither your father nor I had this. Don't waste it.' She made me do three hours' practice a day even before I was allowed out with my friends. She's never cared about the fame or fortune aspect of my career. To this day, she'll still tell me if she thinks I haven't done enough practice before a concert. Dad's different – he can't hide his delight at my success.\n\nInterviewer: You won a major competition for young musicians, and for a couple of years you seemed to be forever in the limelight.\n\nKaren: I got numerous offers to do advertising ... even modelling! When you're thrown into all that, it's really easy to become disorientated and forget what brought you to everyone's attention in the first place. I reached a point where I didn't believe all the hype about me. I kept asking myself what my celebrity was really based on. I was doing more than 100 concerts a year so I didn't have nearly enough time to rehearse properly. I'd walk onto a stage and feel I was insulting my own ability.\n\nInterviewer: So you decided to take some time off, I believe?\n\nKaren: Yes, I felt some of the support I needed wasn't necessarily there within the profession. It's an extremely cut-throat business, so I guess it's understandable. So yes, I turned my back on that world for two months – gave no performances. I changed my agent, I found two new teachers in China, and I made sure I got back to practising with other pianists as opposed to by myself.\n\nInterviewer: At the time when you were performing a lot on TV, the media seemed to be using you to glamorise classical music.\n\nKaren: Yes the marketing people tried to project me as a popular classical babe … you know trying to make classical music more youthful and appealing. And while I rejected all the glamour side of that, the purely musical aspect of it did still appeal to me. I love the idea of building a bridge between two worlds. I've played Bach at a televised rock concert in Russia! As long as I can play a piece of music that I think is good, I'm up for playing it anywhere.\n\nInterviewer: So what do you feel about pop music?\n\nKaren: I don't really have strong opinions about it – I just think it's a pity that in some countries there's this commercial culture attached to it that is drummed into kids' brains every day, and that this makes them see classical music as elitist and remote when subsequently they get to be teenagers. But to a five-year-old child, say, music is music. It just sounds how it should. They don't have any preconceptions about it.\n\nInterviewer: I understand you've done a lot of work with young school children.\n\nKaren: Yes, classical music can really help children to become happy, creative people. But when I go into schools I don't just say nice encouraging things to the children ... the musicians ... when they don't deserve it. I went into one school regularly to help out with music lessons. And after a while I really started to emphasise to them the value of hard work. As a result the school now has nine of its students playing with the National Youth Orchestra.",
      items: [
        {
          q: 'Why does Karen keep practising pieces of music she knows well?',
          opts: [
            'to keep her confidence levels high',
            'to warm up before playing difficult new pieces',
            'to make small improvements to her performance of them',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，她练习熟曲是为了在演绎上不断小幅改进。原文：\"For another, even pieces you know well still need maintenance and repair work on them.\"",
        },
        {
          q: 'What does Karen say about her mother?',
          opts: [
            'She still tries to have an influence over Karen.',
            "She shows her emotions much more than Karen's father.",
            'She could have been a competent pianist herself.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，母亲至今仍试图对 Karen 施加影响。原文：\"To this day, she'll still tell me if she thinks I haven't done enough practice before a concert.\"",
        },
        {
          q: 'Karen says that after winning a big competition, she began',
          opts: ['to lose interest in music.', 'to take offence easily.', 'to doubt her talent.'],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，赢得大赛后她开始怀疑自己的天赋。原文：\"I reached a point where I didn't believe all the hype about me. I kept asking myself what my celebrity was really based on.\"",
        },
        {
          q: "Karen's decision to take a break from performing allowed her to",
          opts: [
            'spend a lot of time on her own.',
            'regain full physical health.',
            'put a new management team in place.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，休整让她得以组建新的经纪团队。原文：\"I changed my agent, I found two new teachers in China, and I made sure I got back to practising with other pianists as opposed to by myself.\"",
        },
        {
          q: 'When she was performing on television regularly, Karen enjoyed the idea that',
          opts: [
            'she was bringing people from different countries closer together.',
            "she was improving people's mood and energy levels.",
            'she was taking classical music to new places and people.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，她乐于想到古典音乐正被带到新的地方和人群面前。原文：\"I love the idea of building a bridge between two worlds. I've played Bach at a televised rock concert in Russia!\"",
        },
        {
          q: 'What does Karen say about pop music?',
          opts: [
            'It is suitable for people of all ages.',
            'It makes little impression on her.',
            "It affects teenagers' behaviour in different ways.",
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，流行音乐对她几乎没有影响。原文：\"I don't really have strong opinions about it\"",
        },
        {
          q: 'Karen believes that when dealing with young children who play music',
          opts: [
            'praise should only be given where it is justified.',
            'pushing them too hard will demotivate them.',
            "it's a mistake to make them nervous about the end result.",
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，她认为只应在有理由时才给予表扬。原文：\"But when I go into schools I don't just say nice encouraging things to the children ... the musicians ... when they don't deserve it.\"",
        },
      ],
    },
  },
}

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 44–49（PDF 46–51），答案核对自 Test 2 Key（Listening 区在书 133 / PDF 135）
// 音频：/audio/fce/std3/std3-t2-p1.mp3 ~ std3-t2-p4.mp3（整 Part 一条）
// 注：书 46 页 Part 2 印刷小标题为 "Working on a turtle conservation programme"（数据结构无对应字段，记录于此备查）。

const STD3_L2 = {
  meta: {
    id: 'fce-standard-3-test2-listening',
    title: 'FCE 标准版真题 3 · Test 2',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 44–49',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 133 / PDF 135',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking about collecting old coins.',
          q: 'What pleases him most about his hobby?',
          opts: [
            'the satisfaction of aiming for a complete collection',
            'the idea that someone has used the coins in the past',
            'the thrill of searching for unusual coins for his collection',
          ],
          answer: 1,
          transcript: "You hear a man talking about collecting old coins.\nMan: My Dad used to collect rare old coins, and when I was younger I thought that was a really weird thing to do, but as I've got older I can see the attraction. Someone once bought a loaf of bread or some cheese with those coins, and for me that's brilliant. I don't buy online much because you never know what you're getting and there are a lot of fakes out there. I go to a specialist coin shop and chat to the guys there – they know everything there is to know about coins. I've got a few gaps in my collection but that's fine. I'm not one for perfection!",
          explanation: "官方答案为 B：依据录音内容，最让他高兴的是想到这些硬币过去被人使用过——有人曾用它们买过面包或奶酪，他觉得这点最妙。原文：\"Someone once bought a loaf of bread or some cheese with those coins, and for me that's brilliant.\"",
        },
        {
          scenario: 'You hear a woman talking about playing the piano.',
          q: 'What does she say about learning to play the piano?',
          opts: [
            "It's important to find the right teacher.",
            'Everyone can play well if they try.',
            'It requires more discipline than other instruments.',
          ],
          answer: 0,
          transcript: "You hear a woman talking about playing the piano.\nWoman: People ask me about playing the piano and if it's a difficult instrument to learn, and the answer is yes and no. At the beginning, anyone can make a sound on the piano just by pressing a single note and it sounds pretty good – the equivalent could not be said about learning the violin, however. But to progress further, you have to have patience and some musical ability. It's best to learn from someone who knows, and is good at teaching, the technique needed. And obviously there's no escaping from the fact that you have to practise every day without fail. That way you'll come on quite quickly.",
          explanation: "官方答案为 A：依据录音内容，她强调要找到合适的老师——最好跟懂行且善于教学的人学习所需技巧。原文：\"It's best to learn from someone who knows, and is good at teaching, the technique needed.\"",
        },
        {
          scenario: "You overhear a man and a woman talking in an art gallery about a boy's paintings.",
          q: 'What do they agree about the paintings?',
          opts: [
            'They show remarkable artistic maturity.',
            'The gallery is asking too much money for them.',
            "They probably weren't painted by the boy.",
          ],
          answer: 0,
          transcript: "You overhear a man and a woman talking in an art gallery about a boy's paintings.\nWoman: It's hard to believe the artist's only seven years old! Look at the perspective in this one – he's got it just right. It takes art students years to master that.\nMan: A child couldn't have painted these! I reckon it's all a fake. The gallery's passing off the paintings of someone much older as the work of a child – to trick people into buying, I mean, the way he's got the effect of the light on the water – that's the work of a much more experienced artist.\nWoman: I saw a TV programme about him – he really does do them himself. And people must think they're worth the price – they're sold out.",
          explanation: "官方答案为 A：依据录音内容，两人都认为这些画显示出非凡的艺术成熟度——透视和对光影的处理远超七岁孩子的水平。原文：\"Look at the perspective in this one – he's got it just right. It takes art students years to master that.\"",
        },
        {
          scenario: 'You hear two students talking about a university chemistry lecturer.',
          q: 'What do they agree about the lecturer?',
          opts: [
            'She is good at explaining difficult concepts in lectures.',
            'She is tolerant towards students who hand work in late.',
            'She manages to make students feel enthusiastic about her subject.',
          ],
          answer: 2,
          transcript: "You hear two students talking about a university chemistry lecturer.\nWoman: Hi Mike! That was another good chemistry lecture by Jane Wilson, wasn't it?\nMan: Yeah, I like her. I can't always follow what she's saying, though.\nWoman: Oh, I think she makes complicated ideas easier to understand. And she's so good at communicating her own excitement about chemistry – we all end up sharing it.\nMan: There's no denying that. And she's okay about things like getting work in a few days after a deadline, which is nice.\nWoman: That hasn't been everyone's experience, I must say. But then I can see why, really. Her schedule's so packed, I'm amazed she has time to do all she does.\nMan: Yeah, that's true …",
          explanation: "官方答案为 C：依据录音内容，两人都认为她能让学生对学科产生热情——她善于传达自己对化学的兴奋感，大家都被感染。原文：\"And she's so good at communicating her own excitement about chemistry – we all end up sharing it.\"",
        },
        {
          scenario: 'You hear a woman talking to a work colleague about moving abroad for a new job.',
          q: 'What does the woman feel disappointed about?',
          opts: [
            'the inflexible attitude to the start date',
            'the lack of job security involved',
            'the relatively low status of the work',
          ],
          answer: 0,
          transcript: "You hear a woman talking to a work colleague about moving abroad for a new job.\nMan: Two years living away is a long time!\nWoman: Yes, but I don't have to worry about whether I can return to my old position. That's guaranteed. Anyway, I'm 24 now and opportunities like this aren't common.\nMan: ... Especially to oversee new project developments!\nWoman: Yes ... I mean, I was doing that already, in a way, so I'm not sure I can think of it as a promotion. The only thing is, I tried to negotiate a delay to the contract so I'd have a bit more time to get myself together, but it couldn't be done. I felt I didn't have any say in the matter.\nMan: Oh well, don't let that get in the way!",
          explanation: "官方答案为 A：依据录音内容，她对入职日期上不容变通的态度感到失望——想协商推迟入职却未能如愿，自己毫无发言权。原文：\"I tried to negotiate a delay to the contract so I'd have a bit more time to get myself together, but it couldn't be done.\"",
        },
        {
          scenario: 'You hear two friends talking about a job interview.',
          q: 'How does the woman feel now?',
          opts: [
            'surprised that the interview went well',
            'pleased to have impressed the interviewers',
            "relieved that she wasn't asked any difficult questions",
          ],
          answer: 1,
          transcript: "You hear two friends talking about a job interview.\nMan: Hi Noelle, how did the job interview go?\nWoman: Quite well, actually. Though I knew it would be alright.\nMan: Really?\nWoman: Well, yeah – I mean I'm usually nervous about job interviews, and there were three of them asking me questions! But this time, I felt very well prepared. And I've got the right kind of experience for the job, so that gave me confidence, I suppose.\nMan: Were there any questions you couldn't answer?\nWoman: Not really, though some were pretty hard! Luckily I'd done plenty of research beforehand. Clearly they hadn't expected me to be able to answer them all, so that was good.\nMan: Well I hope you get it!\nWoman: Thanks.",
          explanation: "官方答案为 B：依据录音内容，她为自己给面试官留下好印象而高兴——对方显然没料到她能答上所有难题。原文：\"Clearly they hadn't expected me to be able to answer them all, so that was good.\"",
        },
        {
          scenario: 'You hear part of a radio programme.',
          q: 'What is the woman talking about?',
          opts: [
            'an environment group',
            'a nature course for school children',
            'a new walking route in the countryside',
          ],
          answer: 2,
          transcript: "You hear part of a radio programme.\nWoman: I think lots of people will be interested in finding out more about it. It's a great way of seeing all the plants and trees that thrive in this area, and in spring it's spectacular! Teachers who want to encourage their students to protect the environment should take them – after all there's nothing like experiencing something for yourself to make you value it. We've made sure it's as accessible as possible, and hope it'll be popular with people of all ages. If you want more information, the details are all online. There's no excuse not to get out there and try it!",
          explanation: "官方答案为 C：依据录音内容，她在介绍乡间一条新的徒步路线——沿它可观赏当地繁茂的植物，春季景色尤佳。原文：\"It's a great way of seeing all the plants and trees that thrive in this area, and in spring it's spectacular!\"",
        },
        {
          scenario: 'You hear a woman talking to her brother about his hair.',
          q: 'What is she doing?',
          opts: [
            'admitting she cut his hair badly',
            'teasing him about his haircut',
            'suggesting he grow his hair longer',
          ],
          answer: 2,
          transcript: "You hear a woman talking to her brother about his hair.\nWoman: It doesn't look too bad, actually.\nMan: You're joking!\nWoman: No way, I mean it.\nMan: I think you should have taken a lot more off, especially at the front.\nWoman: Well maybe you should get a hairdresser to do it instead. Though I think I did pretty well, really. Don't you think you're over-reacting a bit?\nMan: I don't want all my friends to laugh at me!\nWoman: They won't! Anyway, you shouldn't have it cut too often, even by me – it suits you like this. And it'll look even better in a couple of weeks.\nMan: Well I suppose I should trust you …\nWoman: Of course you should! I'm your sister!",
          explanation: "官方答案为 C：依据录音内容，她建议他把头发留长一些——现在这样正适合他，两周后还会更好看。原文：\"Anyway, you shouldn't have it cut too often, even by me – it suits you like this. And it'll look even better in a couple of weeks.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called David Briggs giving a talk about his work as a volunteer on a turtle conservation programme in Western Australia. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t2-p2.mp3',
      transcript: "You'll hear a man called David Briggs giving a talk about his work as a volunteer on a turtle conservation programme in Western Australia. For questions 9 to 18, complete the sentences with a word or short phrase.\n\nI want to tell you about my work as a volunteer on a turtle conservation programme this summer in Western Australia.\n\nI'd been looking through various websites with my mother, trying, rather unsuccessfully, to find something interesting to do before I went to university when my uncle rang me and told me about this turtle tagging programme. Basically, they were asking for people to help with the actual tagging – you know, attaching electronic tags to the turtles so that scientists can collect vital data about them. So I emailed them and got all the information.\n\nThere was a choice of sites we could work at – the mainland one or the one on an island miles out into the ocean. I didn't want to be stuck right out there so my choice was easy. They wanted people who preferably had prior experience of working on conservation projects – which I hadn't – or who were keen on marine science, and that was what I was going to study at university. So that helped me get a place on the programme.\n\nI was warned that the work would be very physical – in fact we all had to attend a medical assessment to check whether we were fit enough for the work. And there were tests to show our ability to run over long distances – not my favourite occupation – and also whether we had the strength to lift heavy objects. Curiously, we weren't asked if we could swim, which I really thought would have been important, but I was told that most of the work took place on the beach.\n\nThe conditions offered were pretty good. Accommodation was provided and of course training, which just left me with having to pay for transport. I did think we might have to pay for food but no, all included. My mother provided me with lots of chocolate as that's one luxury she knows I can't live without. Of course, as volunteers we weren't paid for the work but that didn't really worry me.\n\nWhen I got out there, I soon realised why physical fitness was important. My team had to do beach patrols at night – the female turtles come out of the ocean and on to the beach to nest then. Other volunteers worked different shifts doing other stuff in the daytime. Our patrols had to identify, tag, measure and collect data on all the turtles that were there. So you had to know what you were doing and do it fast, but what really mattered to me was to be gentle so as not to distress the turtles. Each shift lasted for about 8 hours and that might include walking up to 15 kilometres on soft sand. And on top of all that, we were operating in conditions of high humidity. I didn't enjoy the humidity but I liked the heat. The same couldn't be said for my mates on the programme, who found that hard to cope with. But we were all glad to get back to our air-conditioned huts after our shifts.\n\nSometimes when you were tired in the middle of a shift, it was a challenge to maintain concentration but our commitment to the project was total so our enthusiasm never seemed to flag. The scientists used the data we collected to monitor turtle behaviour, including breeding, feeding and migration patterns.\n\nI had a good laugh with all the other volunteers when we weren't working. They were all young, but not all filling in time between school and university like me ... some were unemployed. Most of them were returners, some for the sixth time. I learnt a lot about turtles and conservation issues from them. I'd consider doing it again as I thought it was a really worthwhile programme.",
      items: [
        {
          q: 'David first found out about the turtle programme from his ____ .',
          answer: ['uncle'],
          show: 'uncle',
          explanation: '官方答案 uncle：他最早是从叔叔那里知道这个海龟保护项目的。',
        },
        {
          q: 'David chose to work at the ____ site because its location was more convenient.',
          answer: ['mainland', 'main land'],
          show: 'main(-)land',
          explanation: '官方答案 main(-)land：Key 给出连写与分写两种形式。',
        },
        {
          q: 'David thinks his interest in ____ helped him to get a place on the programme.',
          answer: ['marine science'],
          show: 'marine science',
          explanation: '官方答案 marine science：他对海洋科学的兴趣帮他获得了名额。',
        },
        {
          q: "David was surprised to find that the ability to ____ wasn't considered necessary.",
          answer: ['swim'],
          show: 'swim',
          explanation: '官方答案 swim：他惊讶地发现会游泳并不是必要条件。',
        },
        {
          q: 'Apart from the cost of ____ , everything essential was provided by the organisers.',
          answer: ['transport', 'the transport'],
          show: '(the) transport',
          explanation: '官方答案 (the) transport：Key 中 the 为可选词，只有交通费需自理。',
        },
        {
          q: "David's shifts took place during the ____ when the turtles could be checked on the beach.",
          answer: ['night'],
          show: 'night',
          explanation: '官方答案 night：轮班在夜间进行，以便查看海滩上的海龟。',
        },
        {
          q: 'David felt it was particularly important to be ____ when handling the turtles.',
          answer: ['gentle'],
          show: 'gentle',
          explanation: '官方答案 gentle：接触海龟时动作要特别轻柔。',
        },
        {
          q: "Unlike his fellow volunteers, David found the ____ didn't bother him.",
          answer: ['heat'],
          show: 'heat',
          explanation: '官方答案 heat：与其他志愿者不同，炎热并没有困扰他。',
        },
        {
          q: 'David said that tiredness could lead to a loss of ____ among the volunteers when they were collecting data.',
          answer: ['concentration'],
          show: 'concentration',
          explanation: '官方答案 concentration：疲劳会让志愿者收集数据时注意力下降。',
        },
        {
          q: 'David uses the name ____ to refer to the most experienced volunteers.',
          answer: ['returners'],
          show: 'returners',
          explanation: '官方答案 returners：他用这个词称呼经验最丰富的志愿者。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which writers give advice about writing comedy scripts for television. For questions 19–23, choose which piece of advice (A–H) each speaker gives. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t2-p3.mp3',
      options: [
        { label: 'A', text: 'Write about people who amuse you.' },
        { label: 'B', text: 'Team up with another writer.' },
        { label: 'C', text: 'Develop your characters well.' },
        { label: 'D', text: 'Rewrite your whole script several times.' },
        { label: 'E', text: 'Study comedy you like.' },
        { label: 'F', text: 'Listen to what other people say about your work.' },
        { label: 'G', text: 'Find your own way as a writer.' },
        { label: 'H', text: 'Let the audience in on the joke quickly.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: "官方答案为 C：依据录音内容，这位编剧建议把角色塑造好——最好的喜剧情景中，幽默来自人物及其对处境的反应。原文：\"But a comedy show is more than just a series of jokes – in the best comic scenes, the humour lies in the people and how they react to their situation. So take trouble when you're creating them.\"", transcript: "Speaker 1\nYou have to be brutal with yourself. By that, I mean you must look carefully at what you've written and cut about half of it. Being brief and to the point is the key to writing good comedy. And listen to the rhythm of a sentence, how a joke sounds. Just removing one word, or changing its position can have a great effect. But a comedy show is more than just a series of jokes – in the best comic scenes, the humour lies in the people and how they react to their situation. So take trouble when you're creating them." },
        { speaker: 'Speaker 2', answer: 'H', explanation: "官方答案为 H：依据录音内容，这位编剧建议让观众尽快领会笑点——从一开始就点明可笑之处，观众才有更长时间享受。原文：\"If you show viewers what they're supposed to find funny about the situation from the beginning, they have longer to enjoy it.\"", transcript: "Speaker 2\nIf you show viewers what they're supposed to find funny about the situation from the beginning, they have longer to enjoy it. For example, you'll get a lot of laughs if they can say straightaway, 'Oh, I see, it's a clown who doesn't like children,' or, 'Oh, I get it, it's a surgeon who can't stand the sight of blood.' And don't feel you have to explain everything in great detail – that soon gets boring. Read your script to someone with an underdeveloped sense of humour and when they start looking sleepy, you know you should cut huge chunks!" },
        { speaker: 'Speaker 3', answer: 'F', explanation: "官方答案为 F：依据录音内容，这位编剧建议听取他人对作品的意见——把听到的负面评论吸纳进来并用于改进。原文：\"Take on board all the negative comments you get about your work and use them to improve it.\"", transcript: "Speaker 3\nYou have to be able to accept criticism. Take on board all the negative comments you get about your work and use them to improve it. I suppose it's fine if you're a brilliant writer – brilliant writers can refuse to alter their artistic vision in any way! But if, like me, you're far from being brilliant, then you need help and advice from anyone who can be bothered to give it. Not all advice is helpful, though. People often instruct young comics, 'Write about what makes you laugh,' but you won't sell many scripts if the only one to find them funny is you!" },
        { speaker: 'Speaker 4', answer: 'B', explanation: "官方答案为 B：依据录音内容，这位编剧建议与其他作者合作——找一位写作搭档，互相逗笑的日子最美好。原文：\"Finding a writing partner is great – my best days are spent sitting in a room with someone else and trying to make each other laugh.\"", transcript: "Speaker 4\nDoing any kind of writing is lonely, and comedy is no different. Finding a writing partner is great – my best days are spent sitting in a room with someone else and trying to make each other laugh. You might then have to go off and work stuff up on your own but at least you know one person has found your jokes funny! Oh, and move around a lot. It does wonders for your concentration. I've solved many problems walking to and from the fridge in search of a snack. Pausing to do a household chore, like washing up, works for other people!" },
        { speaker: 'Speaker 5', answer: 'E', explanation: "官方答案为 E：依据录音内容，这位编剧建议研究自己喜欢的喜剧——沉浸于让自己大笑的剧本并分析其可笑之处何以成立。原文：\"The best advice I was ever given was to immerse myself in the kind of scripts that really made me laugh and to analyse how it worked.\"", transcript: "Speaker 5\nThe best advice I was ever given was to immerse myself in the kind of scripts that really made me laugh and to analyse how it worked. Now, I'm not telling you to copy it, but I am saying you should use it as inspiration. Then send an example of your best material to the creators of shows you admire – tell them what you admire about their work. And just keep on writing, whatever happens. At first, you might think you're mostly producing rubbish, but, gradually there will be less rubbish and more gold – so don't give up." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Maya Gardi, whose daily life and business are based on waste-free principles. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t2-p4.mp3',
      transcript: "You'll hear an interview with a woman called Maya Gardi whose daily life and business are based on waste-free principles. For questions 24 to 30, choose the best answer (A, B or C).\n\nInterviewer: My guest this week, Maya Gardi, has recently started her own company selling environmentally-friendly products. First let me ask you, Maya, what living waste-free involves on a daily basis.\n\nMaya: Well when I'm shopping I don't buy things in plastic packages – I take my own bags and containers and I always buy fresh local food. I compost my food rubbish and I recycle wherever I can. That kind of thing. When I started living like this, some things required a lot of adapting. My shopping habits were already pretty environmentally-friendly, although I found I had to make more of an effort to go to lots of little shops where I could choose smaller amounts more often rather than doing a single big supermarket shop every week … even though that was nice and convenient.\n\nInterviewer: Hmm … so what made you first decide to live a completely waste-free lifestyle?\n\nMaya: Well, I've always been quite environmentally conscious, and I think this stems from the time I read an article on the internet about all the plastic waste in our oceans. I'd pass the rubbish bins outside my block of flats and feel quite pleased that at least I wasn't throwing away as much as other people. But a few years ago, I took some stuff to my local rubbish tip to throw away … things I couldn't recycle. I was horrified at the amount of waste there. That was all it took to make me change.\n\nInterviewer: What did your family think about your decision?\n\nMaya: Well I live in a small flat on my own, so it wasn't as if I was imposing my lifestyle on my parents. They knew I was concerned about the environment, of course, but they still thought I was joking at first. They know how determined I am when I put my mind to something, though, and they knew that I'd be glad I'd done it.\n\nInterviewer: So have you changed the way you prepare meals?\n\nMaya: Well, I've never been what you'd call an expert cook, as my friends will confirm. But I'm constantly dreaming up new ways of using up bits and pieces in the fridge. I often pass on these recipes to my friends, and they're always grateful for ways to save money.\n\nInterviewer: Does your new lifestyle make things difficult for you when you're socialising?\n\nMaya: Yes, when I go to picnics and barbecues, for example, the plates and cutlery tend to be disposable plastic. But I have to be proactive, and not be concerned that I might come across as strange. So I would take along a proper plate, or if I couldn't do that, I'd eat from a paper napkin and then make sure it was composted rather than thrown away.\n\nInterviewer: As you said, you've started a new business, selling environmentally-friendly products. Is it going well?\n\nMaya: Yes, I'm selling home-made products like toothpaste and deodorant, things that are made from simple, natural ingredients. They're all sold in containers that can be recycled or returned to me. I also have an internet blog which is helping enormously with publicising my products ... gives me an edge over my competitors. And I've got a few regulars I see at local events like fairs and outdoor markets. As for the future, let's see how this year goes first.\n\nInterviewer: I hear you were also interviewed on the radio.\n\nMaya: Yes, it was at one fair I attended. I just happened to be in the right place at the right time, when a reporter approached me. I didn't have time to get anxious! What was great was that it meant I could get my ideas across to a wider audience.\n\nInterviewer: Thank you for your time, Maya, and best of luck for the future.",
      items: [
        {
          q: 'What did Maya find most difficult when she started shopping in a waste-free way?',
          opts: [
            'having to take more time over it',
            'having to avoid things in plastic containers',
            'having to remember to take her own bags',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，最难的是购物要花更多时间——她得多跑几家小店、更频繁地少量购买，而不是每周一次大超市采购。原文：\"I found I had to make more of an effort to go to lots of little shops where I could choose smaller amounts more often rather than doing a single big supermarket shop every week\"",
        },
        {
          q: 'Maya decided to adopt a completely waste-free lifestyle when she',
          opts: [
            'saw an article online about plastic rubbish.',
            'noticed the bins outside her block of flats.',
            'visited her local waste facility.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，她是在参观当地垃圾处理设施后下决心的——那里的垃圾量令她震惊。原文：\"I was horrified at the amount of waste there. That was all it took to make me change.\"",
        },
        {
          q: "How did Maya's parents react to her decision to live waste-free?",
          opts: [
            'They were worried that she would regret it.',
            'They did not believe that she really meant it.',
            'They did not think that she was likely to succeed.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，父母不相信她是认真的——起初还以为她在开玩笑。原文：\"They knew I was concerned about the environment, of course, but they still thought I was joking at first.\"",
        },
        {
          q: "How have Maya's cooking and eating habits changed?",
          opts: [
            'She uses leftover food creatively.',
            'She cooks more often for her friends.',
            'She has developed her own cooking skills.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，她开始有创意地利用剩菜——不断想出新点子把冰箱里的边角食材用掉。原文：\"But I'm constantly dreaming up new ways of using up bits and pieces in the fridge.\"",
        },
        {
          q: 'What does Maya say about socialising?',
          opts: [
            'She sometimes has to forget her principles.',
            "She doesn't worry about what people think of her.",
            'She carefully chooses which events she attends.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，她不在意别人怎么看她——不必担心自己显得奇怪，该主动就主动。原文：\"But I have to be proactive, and not be concerned that I might come across as strange.\"",
        },
        {
          q: 'What does Maya say about her new business?',
          opts: [
            'She has an advantage when it comes to marketing.',
            'Sales are increasing faster than expected.',
            'She is expanding into a related sector.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，她在营销方面有优势——博客大力帮助推广产品，让她领先于竞争对手。原文：\"I also have an internet blog which is helping enormously with publicising my products ... gives me an edge over my competitors.\"",
        },
        {
          q: 'How did Maya feel about the radio work she did recently?',
          opts: [
            'nervous about taking part at the last minute',
            'pleased to have the chance to explain her views',
            'surprised that she was asked by a reporter',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，她很高兴有机会阐述自己的观点——把想法传达给更广泛的听众。原文：\"What was great was that it meant I could get my ideas across to a wider audience.\"",
        },
      ],
    },
  },
}

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 66–71（PDF 68–73），答案核对自 Test 3 Key（Listening 区在书 145 / PDF 147）
// 音频：/audio/fce/std3/std3-t3-p1.mp3 ~ std3-t3-p4.mp3（整 Part 一条）
// 注：书 68 页 Part 2 印刷小标题为 "Film Advisor"（数据结构无对应字段，记录于此备查）。

const STD3_L3 = {
  meta: {
    id: 'fce-standard-3-test3-listening',
    title: 'FCE 标准版真题 3 · Test 3',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 66–71',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 145 / PDF 147',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear a young woman who is an apprentice cook talking about her apprenticeship.',
          q: 'How does she feel about it?',
          opts: [
            'grateful to be working in a four-star restaurant',
            'pleased that her teacher told her about the opportunity',
            'confident about fulfilling her ambitions',
          ],
          answer: 2,
          transcript: "You hear a young woman who is an apprentice cook talking about her apprenticeship.\nWoman: I did well at school but wasn't sure what to do next: to carry on studying, or get a job straightaway. Then I discovered the apprenticeship scheme. And now I'm in college for part of the week, studying professional cookery, and an apprentice working in local restaurants – including a four-star one – for the rest of it. The restaurant work is exhausting and, because I'm never in the same kitchen two days running, it's hard to settle into a routine. But the experience is invaluable and it's paving the way to realising my dream of opening my own restaurant. And I've learnt so many different cooking techniques from my teacher at college!",
          explanation: "官方答案为 C：依据录音内容，她对实现自己的抱负充满信心。原文：\"But the experience is invaluable and it's paving the way to realising my dream of opening my own restaurant.\"",
        },
        {
          scenario: 'You hear two students talking about passing the time on bus journeys.',
          q: 'What technique for passing the time do they both sometimes use?',
          opts: [
            'listening to music',
            'observing the world outside',
            "concentrating on what's happening inside",
          ],
          answer: 1,
          transcript: "You hear two students talking about passing the time on bus journeys.\nMan: I seem to spend my life taking crowded buses all over town! It gets tedious and there's never a chance to sit down and do a quick bit of work.\nWoman: What about music? Haven't you got any earphones?\nMan: Yeah, but I suspect if I did that I'd completely lose track of time ... might miss my stop!\nWoman: Oh right ... or the other thing for me is just looking out of the window at what's going on, you know, unwinding, even solving problems.\nMan: I'll watch the world go by if I'm sitting in a window seat, but usually I'm jammed up against a metal pole concentrating on not losing my bag!",
          explanation: "官方答案为 B：依据录音内容，两人都会观察车窗外的世界来打发时间。原文：\"I'll watch the world go by if I'm sitting in a window seat\"",
        },
        {
          scenario: 'You hear a cycle coach telling his group about the ride they are going to do.',
          q: 'What instruction does the coach give?',
          opts: [
            "Don't go too fast on the return route.",
            'Stick together on the main road.',
            "Don't take the first sign to the destination.",
          ],
          answer: 2,
          transcript: "You hear a cycle coach telling his group about the ride they are going to do.\nMan: Right listen really carefully everyone. We're going to do the Moorland Hill route. Tony will lead us out of the car park. Please stay in a tight compact group with no overtaking until we get out of town and over the bridge. Then we get on to the A69 main road. We'll be turning off at the second exit, not the first ... please note, because they're both signposted to Moorland Hill. I want you to try and push it up the big hill today, so save your legs and conserve some speed on the long flat stretch past Acomb village. On the return route we'll have the wind behind us, so you can get some speed up later.",
          explanation: "官方答案为 C：依据录音内容，他叮嘱不要走去目的地的第一个路标。原文：\"We'll be turning off at the second exit, not the first ... please note, because they're both signposted to Moorland Hill.\"",
        },
        {
          scenario: 'You hear part of an interview in which a writer talks about autobiographies.',
          q: 'What does the writer say about them?',
          opts: [
            'He prefers working on books about people he knows.',
            'He is unlikely to write one himself.',
            'He thinks the more popular ones are very boring.',
          ],
          answer: 1,
          transcript: "You hear part of an interview in which a writer talks about autobiographies.\nWoman: Have you ever considered writing an autobiography?\nMan: Well, certain sections of my novels are based on my experiences growing up. But, as a reader, I've found autobiographies deeply unsatisfying and have no real enthusiasm for doing one. Some consist of chapter after chapter of mind-numbing, trivial detail, or endless pages where the writer praises him or herself with little justification. Recently, in the autobiography of someone I've known personally since childhood ... pure invention and no mention at all of several people who contributed significantly to his success.",
          explanation: "官方答案为 B：依据录音内容，他说自己不太可能写自传。原文：\"But, as a reader, I've found autobiographies deeply unsatisfying and have no real enthusiasm for doing one.\"",
        },
        {
          scenario: 'You hear a journalist telling a colleague about her time at university.',
          q: 'How did she first get interested in journalism?',
          opts: [
            'by doing research online',
            'by accepting a chance request',
            'by reading a particularly interesting article',
          ],
          answer: 1,
          transcript: "You hear a journalist telling a colleague about her time at university.\nMan: You're a biology graduate. What prompted you to take up journalism?\nWoman: You'd be amazed at how wide and varied it is and how much it overlaps with other subjects like ecology, psychology, chemistry. And you could see this from the sort of jobs biology graduates were going into – I read all this on the university website. Some were even getting into jobs like banking! As for me, I got asked to report on one of my projects for the university students' science magazine. Then that took off into a regular column, and so that sowed the seeds of a career!",
          explanation: "官方答案为 B：依据录音内容，她因接受了一个偶然的约稿而对新闻业产生兴趣。原文：\"As for me, I got asked to report on one of my projects for the university students' science magazine.\"",
        },
        {
          scenario: 'You hear a man and a woman talking about a new clothes shop they have visited.',
          q: 'What does the man say about having a member of staff to welcome customers?',
          opts: [
            'It seems like a worthwhile idea.',
            'Other people might appreciate it.',
            'Worse things happen in other shops.',
          ],
          answer: 2,
          transcript: "You hear a man and a woman talking about a new clothes shop they have visited.\nMan: I went into that new clothes shop you were telling me about to have a look round.\nWoman: The one in Bridge Street?\nMan: Yeah, you said you really liked the way they have a member of staff just inside the door – to welcome you with a smile.\nWoman: That's right. Why? Didn't you like it?\nMan: Well ... I can't see the point of it. And shops soon lose interest in these experiments, which tells you something about the reaction of customers. Mind you, that's a step up on what happens in some clothes shops, where you get pushy sales staff asking if you need any help the moment you get near them. That I can't stand.",
          explanation: "官方答案为 C：依据录音内容，他觉得比起别的店里发生的事这不算什么。原文：\"Mind you, that's a step up on what happens in some clothes shops, where you get pushy sales staff asking if you need any help the moment you get near them.\"",
        },
        {
          scenario: 'You overhear a woman talking on the phone to a friend.',
          q: 'What is the woman talking about?',
          opts: [
            'an idea for a small short-term business',
            'the various career options open to her',
            'her role in a forthcoming expedition',
          ],
          answer: 0,
          transcript: "You overhear a woman talking on the phone to a friend.\nWoman: Well, what's happening is, I'm applying for lots of full-time posts. But meanwhile I've been networking on social media with a group of recent graduates based in my town. We're planning to buy a portable climbing wall, like the things you get now in some sports centres. Then we can take it to different places where there are lots of children, like beaches, country parks, that sort of thing. Some of the guys are trained mountaineers, so the safety qualifications are already in place. And I'd be the photographer, taking action pictures of each climber to sell to the parents online. Shame it's only seasonal.",
          explanation: "官方答案为 A：依据录音内容，她在讲一个小型短期生意的点子。原文：\"And I'd be the photographer, taking action pictures of each climber to sell to the parents online. Shame it's only seasonal.\"",
        },
        {
          scenario: 'You hear part of a broadcast on the radio.',
          q: 'What type of broadcast is it?',
          opts: [
            'a programme advertisement',
            'a wildlife documentary',
            'a news summary',
          ],
          answer: 0,
          transcript: "You hear part of a broadcast on the radio.\nWoman: A two-metre tall penguin, weighing in at 115 kilos, that's what researchers say the fossils of wing and foot bones recently unearthed in Antarctica belonged to. Such a bird would have been alive 37 million years ago. Given that the emperor penguin, the largest living species of penguin, stands 1.1 metres tall and weighs just under 50 kilos, it's no wonder that this newly discovered specimen is being called the colossus. To find out more about this extraordinary bird, including how its giant size allowed it to stay under water for up to 40 minutes to hunt for fish, tune in tonight after the weather forecast.",
          explanation: "官方答案为 A：依据录音内容，这是一段节目广告。原文：\"To find out more about this extraordinary bird, including how its giant size allowed it to stay under water for up to 40 minutes to hunt for fish, tune in tonight after the weather forecast.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Paula Kanning, who works as a film advisor in local government, talking about her work. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t3-p2.mp3',
      transcript: "You'll hear a woman called Paula Kanning, who works as a film advisor in local government, talking about her work. For questions 9 to 18, complete the sentences with a word or short phrase.\n\nHi. I'm Paula Kanning. I work in my local council's film department. Let me explain what that is exactly. I live in a region that's featured in many films and TV programmes, and tourists are attracted there as a result. So, the local council decided to create a department with the job of promoting the region both to film-makers and to tourists who'd seen the films.\n\nI joined the department when it was first set up. I now work as a Film Advisor, but when I started I was employed as what's called a Location Researcher. In other words, my job was to go round the region trying to identify places that'd be good for filming the outdoor sequences in films and TV programmes.\n\nWhat initially attracted me to the job wasn't so much the salary, although that was OK, but the fact that it involved flexible working hours. Because I'd be travelling around the region looking for places, I could fit the work around looking after my young family.\n\nOne or two places in my region were already quite famous. For example, a big country house that once appeared in a TV drama series, and a castle that's been used in a surprising number of horror films! My job, though, was to identify less obvious places that film-makers wouldn't find without my help.\n\nFor example, I worked a lot with a company that films advertisements. They'd come to me when they wanted to film a new car zooming up a mountain road or a field of cows for a cheese advert. I didn't always find what they were looking for, but I did suggest the beach in one ice-cream advert that's been shown thousands of times in cinemas.\n\nI spent a year in that first job – and really enjoyed it. It was fun working with the film industry, and with local people too. Locals are generally thrilled to think their village or street might feature in a film. But I remember having to spend a lot of time trying to talk farmers into allowing filming on their land.\n\nOnce I'd begun to build up a list of potential places, I decided to develop a database. This featured photos and a video clip as well as a written description of each place. I found developing all that material really rewarding and I think I did a really good job. I also made lots of useful contacts in the film industry, and films are still being made in the region as a result.\n\nIn my current job, I spend more time dealing with the tourism that films bring to the region. I get involved in the planning of projects like special weekend tours that take visitors around the places they'll recognise from films. And I'm in charge of a project called Moviemap, which is an online resource for tourists who prefer to visit places independently.\n\nI quite like the challenge of website design, but the tourist office also needs things to give out to tourists who aren't so keen on technology. So I also have to put together leaflets, which believe it or not is actually more complicated. I don't know why, but dealing with printers seems to involve a lot of problems.\n\nAnother thing I've been working on is a set of guidelines for tour companies which take groups of visitors to the sites – especially if it's places where people live. I think everyone understands the need to respect people's houses and land, you know, not to damage or drop litter, but people's privacy also needs to be respected.\n\nSo there's lots going on in our department – and there's only three of us working in the office. That's why we've started what's known as a work placement programme, which is aimed at young people. It involves voluntary work of course, but if we can get local teenagers in full-time education to come and work with us for a few weeks in the summer, it would help us and be great experience for them.\n\nSo before I go on to…",
      items: [
        {
          q: "Paula's job title when she started working in the film department was ____ .",
          answer: ['a location researcher', 'location researcher'],
          show: '(a) location researcher',
          explanation: '官方答案 (a) location researcher：Key 中冠词 a 为可选词。',
        },
        {
          q: 'Paula was first attracted to the job by the ____ on offer.',
          answer: [
            'flexible hours',
            'flexible work hours',
            'flexible working hours',
            'hours',
            'work hours',
            'working hours',
            'flexibility of hours',
            'flexibility of the hours',
            'flexibility of work hours',
            'flexibility of working hours',
            'flexibility of the work hours',
            'flexibility of the working hours',
          ],
          show: '(flexible) (work/working) hours / (flexibility of) (the) (work/working) hours',
          explanation: '官方答案 (flexible) (work/working) hours / (flexibility of) (the) (work/working) hours：按 Key 括号可选项逐一组合，全部录入。',
        },
        {
          q: "The most popular place for filmmakers in Paula's area is a ____ .",
          answer: ['castle'],
          show: 'castle',
          explanation: '官方答案 castle：当地最受摄制组欢迎的地点是一座城堡。',
        },
        {
          q: 'Paula mentions a well-known advertisement for ____ that she proposed the site for.',
          answer: ['an ice cream', 'an ice-cream', 'an icecream', 'ice cream', 'ice-cream', 'icecream', 'ice creams', 'ice-creams', 'icecreams'],
          show: '(an) ice(-)cream / ice(-)cream(s)',
          explanation: '官方答案 (an) ice(-)cream / ice(-)cream(s)：按 Key 组合录入连字符、冠词与复数变体。',
        },
        {
          q: 'Paula mentions that in her first year she sometimes needed to persuade ____ to agree to filming.',
          answer: ['some farmers', 'farmers'],
          show: '(some) farmers',
          explanation: '官方答案 (some) farmers：Key 中 some 为可选词。',
        },
        {
          q: 'Paula is particularly proud of the ____ she built up during her first year in the department.',
          answer: ['database'],
          show: 'database',
          explanation: '官方答案 database：她为第一年建起的数据库感到自豪。',
        },
        {
          q: "Paula's current job involves managing a project with the name ____ .",
          answer: ['movie map', 'movie-map'],
          show: 'movie(-)map',
          explanation: '官方答案 movie(-)map：Key 给出连写与加连字符两种形式。',
        },
        {
          q: 'Paula finds creating ____ for tourists the most difficult part of her current job.',
          answer: ['leaflets'],
          show: 'leaflets',
          explanation: '官方答案 leaflets：为游客制作宣传单是她觉得最难的部分。',
        },
        {
          q: 'Paula believes it is necessary to protect the ____ of local residents as well as their property.',
          answer: ['privacy'],
          show: 'privacy',
          explanation: '官方答案 privacy：居民隐私与财产都要保护。',
        },
        {
          q: "Paula's department has recently set up what she calls a ____ scheme for students.",
          answer: ['work placement', 'work placement programme', 'work placement program'],
          show: 'work placement (programme / program)',
          explanation: '官方答案 work placement (programme / program)：Key 给出英式与美式拼写。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people talk about why they did not go to university directly after leaving school. For questions 19–23, choose which of the reasons (A–H) each speaker gives. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t3-p3.mp3',
      options: [
        { label: 'A', text: 'a wish to see new places' },
        { label: 'B', text: 'a misunderstanding about applying' },
        { label: 'C', text: 'a desire to have a break from studying' },
        { label: 'D', text: 'a wish to stay near to home' },
        { label: 'E', text: 'a decision to prioritise family commitments' },
        { label: 'F', text: 'a desire to start a career immediately' },
        { label: 'G', text: 'a feeling of not being mature enough' },
        { label: 'H', text: 'an inability to find a suitable course' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: "官方答案 C：依据录音内容，这位说话者想先暂停学习休息一下。原文：\"I did like the idea of eventually going to university but it felt like 'same again' after 12 years of having my nose in books.\"", transcript: "Speaker 1\nAt school, I always thought I'd wake up one day knowing exactly what I wanted to do with my life – but that never happened. I did like the idea of eventually going to university but it felt like 'same again' after 12 years of having my nose in books. When I was offered a job straight out of school, I took it without thinking. I changed jobs quite a bit before the penny finally dropped, and I realised that nursing was the career for me. I also felt that the time was right because I'd done a lot of growing up in the intervening years. So, here I am, at university at last!" },
        { speaker: 'Speaker 2', answer: 'F', explanation: "官方答案 F：依据录音内容，这位说话者希望立即开始职业生涯。原文：\"We just wanted to get on with being independent, I suppose, and getting on the first rung of the employment ladder was central to that.\"", transcript: "Speaker 2\nWell, my wife and I got married really young – straight out of school. We just wanted to get on with being independent, I suppose, and getting on the first rung of the employment ladder was central to that. We both went out and got ourselves good positions, so financially we were secure, but after a few years, I felt I wanted to change direction in terms of my work and I realised that higher education was the only way. My wife and kids tried to persuade me to do something in computers so I could earn loads of money but I chose to do Politics instead." },
        { speaker: 'Speaker 3', answer: 'H', explanation: "官方答案 H：依据录音内容，这位说话者找不到合适的课程。原文：\"It actually took me ages to come up with one that exactly fitted the bill.\"", transcript: "Speaker 3\nWhen I didn't apply for a university place in my final year at school, people thought I wanted to take a year out for travelling. But I've wanted to be a vet for as long as I can remember and I especially want to treat wild animals and opportunities for studying that subject at university are few and far between. It actually took me ages to come up with one that exactly fitted the bill. Eventually, I got offered a place at a university in Europe starting next year. At least I've got time to earn a bit of money to take with me and I can hardly wait to go!" },
        { speaker: 'Speaker 4', answer: 'B', explanation: "官方答案 B：依据录音内容，这位说话者因申请环节的误会而未直接升学。原文：\"I think my parents just thought I'd be able to get straight into university in Australia but the system's a bit different here and it turned out I'd already missed the deadline.\"", transcript: "Speaker 4\nMy parents dropped a bombshell when I was in my final year at school. They calmly announced that we were emigrating to Australia, where I live now! Staying behind to go to university was never an option for me cos Australia was a place I'd always fancied visiting. I think my parents just thought I'd be able to get straight into university in Australia but the system's a bit different here and it turned out I'd already missed the deadline. But I spent a great year travelling around Australia and enjoying the Australian way of life. I feel I've grown up now and become more responsible, and that I'll study harder because of my break." },
        { speaker: 'Speaker 5', answer: 'E', explanation: "官方答案 E：依据录音内容，这位说话者决定把家庭责任放在首位。原文：\"I decided to go and live with him cos my Mum was busy with a full-time job and we didn't really live nearby.\"", transcript: "Speaker 5\nI was all set to go off to university after I finished school and even had the application forms ready to fill in. Then my grandfather got taken ill and he needed help to get around. I decided to go and live with him cos my Mum was busy with a full-time job and we didn't really live nearby. So I spent six months doing that. I was completely broke but I had plenty of free time and as he lives near the sea, I even took up surfing! It was great to experience something different. He's made a full recovery now and I'm planning to go to university next year." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear a radio interview with a woman called Susan Fletcher, who works on a research station in Antarctica. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t3-p4.mp3',
      transcript: "You'll hear a radio interview with a woman called Susan Fletcher, who works on a research station in Antarctica. For questions 24 to 30, choose the best answer (A, B or C).\n\nInterviewer: Susan Fletcher works as an environmental biologist on a research station in Antarctica. Between trips she's joined us in the studio today to talk about what it's like working in one of the remotest places on Earth.\n\nSusan: Hi everyone!\n\nInterviewer: First of all, you spend long periods of time in Antarctica – sometimes over a year – without coming home. How do you usually feel just before you set off?\n\nSusan: In the days leading up to it, I feel sad of course. Everyone finds it hard to leave family behind. But I also feel grateful for having a chance to be away and I really appreciate what they mean to me. These emotions are all part of preparing, but at the same time I have to control my feelings of doubt about managing the challenges I know are coming my way.\n\nInterviewer: You're about to leave on another trip, aren't you? Are you under a lot of pressure?\n\nSusan: Yes, we all are. Scientists involved in polar research don't get a choice where they work, and it could be on land or at sea. To be fair we have plenty of time to get everything ready, and make sure we think of everything we'll need – both for the research and for ourselves personally. No matter how well organised a person is, though, there's always the danger of missing something that turns out to be vital, and that worry's always somewhere at the back of my mind.\n\nInterviewer: And what are your colleagues like?\n\nSusan: They're an amazing bunch of people, who put the interests of science and research before their own needs for months on end. Antarctica is one of the most difficult places to live on the planet, and somehow they make life there tolerable. Everyone's responsible for everyone else, and for ensuring that we achieve our objectives.\n\nInterviewer: I suppose you have to provide your own entertainment?\n\nSusan: Yes, Indeed! Especially music evenings, or evenings when people cook food from a particular country. Although there's no shortage of enthusiasm, it has to be said that our talents lie in other fields! It's actually crucial for our wellbeing to have special events because otherwise the days just combine to become one endless day or night. In the Antarctic summer, for example, the sun rises in September, and doesn't set again until March.\n\nInterviewer: Is there anything you find difficult about life on a research station?\n\nSusan: Well it's comfortable, but it really is communal living, so you have to get used to that. We have our own bedrooms, but so much of our day is spent in other people's company, and I sometimes find that tough. By the time I get to bed at night, I'm so tired I just fall asleep immediately and sleep pretty soundly. The food's all right – you can choose what to have, and there's a reasonable variety.\n\nInterviewer: You obviously love your work. Can you say what it is about it that makes you want to keep on going back?\n\nSusan: Hmm … I mean I'm so incredibly lucky to be able to work in such an unusual environment. I walk past penguins every day, without even thinking about it. That remote and inhospitable continent miles from anywhere has come to be a second home for me, which is a real privilege.\n\nInterviewer: What advice would you give to students hoping to work on a research station in Antarctica in the future?\n\nSusan: Well there are scientists there with degrees in a wide variety of subjects from engineering to biology. And there's also a doctor, a chef, pilots, computer specialists, and people from many different walks of life. So look on the website and see what's going on. That will give you an idea of the qualifications and experience you'll need if you want to join us. You must be determined, because you'll need to become an expert in your chosen field – but if that's your dream, then go for it!\n\nInterviewer: Well, thanks, Susan, for telling us …",
      items: [
        {
          q: 'How does Susan feel before each trip to Antarctica?',
          opts: [
            "anxious because she'll miss people she cares about",
            'concerned about dealing with what lies ahead',
            'relieved to be leaving problems behind',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，她担心的是如何应对前方的状况。原文：\"I have to control my feelings of doubt about managing the challenges I know are coming my way.\"",
        },
        {
          q: "Susan says that what's most stressful for her at the moment is",
          opts: [
            'not being able to predict everything you may need.',
            'not having enough time to prepare properly.',
            "not knowing exactly where she's going.",
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，最让她有压力的是无法预知所有需要的东西。原文：\"No matter how well organised a person is, though, there's always the danger of missing something that turns out to be vital, and that worry's always somewhere at the back of my mind.\"",
        },
        {
          q: 'What does Susan admire about her colleagues?',
          opts: [
            'their scientific skills',
            'their lack of selfishness',
            'their success as researchers',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，她佩服同事们的无私。原文：\"They're an amazing bunch of people, who put the interests of science and research before their own needs for months on end.\"",
        },
        {
          q: "Susan says the entertainment that's organised at the research station",
          opts: [
            'serves a useful purpose.',
            'allows people to show off their talents.',
            "disturbs people's regular schedules.",
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，站里组织的娱乐活动有实际作用。原文：\"It's actually crucial for our wellbeing to have special events because otherwise the days just combine to become one endless day or night.\"",
        },
        {
          q: 'On the research station, Susan sometimes has difficulty',
          opts: [
            'getting enough time alone.',
            'eating the same food all the time.',
            "having a comfortable night's sleep.",
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，她有时难以得到独处的时间。原文：\"We have our own bedrooms, but so much of our day is spent in other people's company, and I sometimes find that tough.\"",
        },
        {
          q: 'What does Susan say she loves about her work?',
          opts: [
            'the chance to observe such fascinating wildlife',
            'being able to live so far from populated areas',
            'the fact that such a unique place is so familiar to her',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，她喜爱的是对这个独特之地已然如此熟悉。原文：\"That remote and inhospitable continent miles from anywhere has come to be a second home for me, which is a real privilege.\"",
        },
        {
          q: 'Susan advises students hoping to work in Antarctica to',
          opts: [
            'make sure they have skills that are not purely academic.',
            'develop a high level of competence in their particular subject.',
            "think carefully about whether they're well-suited to the lifestyle.",
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，她建议学生在自己的专业领域达到高水平。原文：\"You must be determined, because you'll need to become an expert in your chosen field – but if that's your dream, then go for it!\"",
        },
      ],
    },
  },
}

// Source: Cambridge English First 3（标准版3）First 3.pdf（用户原件扫描版）
// Listening: 书页 88–93（PDF 90–95），答案核对自 Test 4 Key（Listening 区在书 157 / PDF 159）
// 音频：/audio/fce/std3/std3-t4-p1.mp3 ~ std3-t4-p4.mp3（整 Part 一条）
// 注：书 90 页 Part 2 印刷小标题为 "Visit to a tea plantation"（数据结构无对应字段，记录于此备查）。

const STD3_L4 = {
  meta: {
    id: 'fce-standard-3-test4-listening',
    title: 'FCE 标准版真题 3 · Test 4',
    level: 'FCE',
    collection: 'Cambridge English First 3（标准版3）',
    book: 'Cambridge English First 3',
    paper: 'Listening',
    pages: '书 88–93',
    source: '标准版3 First 3.pdf（用户原件扫描版）',
    answerSource: '书 157 / PDF 159',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t4-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking about an ancient object he found in the ground.',
          q: 'The man took the object to a museum because',
          opts: [
            'he thought it might be valuable.',
            'he decided to record his find.',
            'he wanted to know what it was.',
          ],
          answer: 2,
          transcript: "You hear a man talking about an ancient object he found in the ground.\nMan: It sounds silly, I know, but I'd never seen anything like that before and I just thought it was the lid of a coffee pot or something. It was disc-shaped and decorated with a snake's head on top. I was curious as I couldn't identify it, so I went along to show it to the historian in the museum in town. She looked at it and went very quiet. It was at that point I realised that I'd found something really special. She entered it into a register of local historical finds and then sent it off to the National Museum and it's still there now in an exhibition!",
          explanation: "官方答案为 C：依据录音内容，他想知道这东西是什么。原文：\"I was curious as I couldn't identify it, so I went along to show it to the historian in the museum in town.\"",
        },
        {
          scenario: 'You hear two friends talking about advertising.',
          q: 'What does the woman say about advertisements?',
          opts: [
            'They are merely a form of entertainment.',
            "They make people buy things they don't need.",
            'They give people misleading information about new products.',
          ],
          answer: 1,
          transcript: "You hear two friends talking about advertising.\nMan: Have you seen that new mobile phone ad?\nWoman: Oh yeah, it's everywhere. It's quite fun, though I can't say I feel that way about most advertisements.\nMan: Some of them are very clever, though, aren't they?\nWoman: Yes, when it comes to persuading people they can't live without stuff that's actually completely useless! Or at least they usually already have something just as good, so why replace it?\nMan: But it's interesting to know what's out there, isn't it?\nWoman: Well I'd say there are better ways of finding out about whether new products are any good than believing in an ad that's cost millions to make!\nMan: Yeah, maybe, but they don't do any harm, really.",
          explanation: "官方答案为 B：依据录音内容，她说广告让人买不需要的东西。原文：\"Yes, when it comes to persuading people they can't live without stuff that's actually completely useless!\"",
        },
        {
          scenario: 'You hear an actor talking about her career.',
          q: 'What does she say about how she became an actor?',
          opts: [
            'She had a chance meeting with someone.',
            'She was successful at drama school.',
            'She asked her friend to help her.',
          ],
          answer: 0,
          transcript: "You hear an actor talking about her career.\nWoman: I went for an audition to get into drama school cos I'd always wanted to be an actor. Anyway, they turned me down, which was a major obstacle. While I was trying to decide what to do next with my life, I went out for a meal with an old friend of mine who's a successful actor, to ask her for some advice. So we were sitting in this restaurant chatting away when a film director came up to say hello. My friend'd worked with him on a film and introduced me. A few days later, the director just phoned up and offered me a role in his next film!",
          explanation: "官方答案为 A：依据录音内容，她因一次偶然的相遇入行。原文：\"So we were sitting in this restaurant chatting away when a film director came up to say hello. My friend'd worked with him on a film and introduced me. A few days later, the director just phoned up and offered me a role in his next film!\"",
        },
        {
          scenario: 'You hear a tour guide telling a group of tourists about a view.',
          q: 'Which feature does the guide think will be most familiar to them?',
          opts: ['the park', 'the river', 'the wood'],
          answer: 1,
          transcript: "You hear a tour guide telling a group of tourists about a view.\nWoman: Let me just stop here to enable you to savour the spectacular view. So over to your left, if you look down you can see a little circular wood. Well that's quite a famous landmark locally because the poet Francis Alder actually used to have a cabin in that wood. Now down in the valley below there you can make out the River Thorn at its widest point, which Alder actually wrote about in many of his poems we all read when we were at school. Then if you look to halfway up the hill I'm sure you can see a large green area known as Callaway Park that's popular with young families.",
          explanation: "官方答案为 B：依据录音内容，他认为游客最熟悉的是那条河。原文：\"Now down in the valley below there you can make out the River Thorn at its widest point, which Alder actually wrote about in many of his poems we all read when we were at school.\"",
        },
        {
          scenario: 'You hear a man talking to a friend about a presentation he has just given.',
          q: 'How does he feel now?',
          opts: [
            'relieved that the audience was small',
            'confident that he spoke clearly',
            'surprised that so many people asked questions',
          ],
          answer: 1,
          transcript: "You hear a man talking to a friend about a presentation he has just given.\nWoman: So, how did your presentation go?\nMan: Pretty well, I think ... and judging by the number of people there, I'd picked the right topic. It's an area of law that's very relevant at the moment, and that was reflected in the size of the audience. So I needn't have worried on that score. All that practising in front of the mirror paid off, as did all that work I did recording myself and making sure I could easily be heard at the back of the room. I was quite well prepared for the questions, though of course there were a couple I hadn't expected – there always are.",
          explanation: "官方答案为 B：依据录音内容，他确信自己讲得清楚。原文：\"All that practising in front of the mirror paid off, as did all that work I did recording myself and making sure I could easily be heard at the back of the room.\"",
        },
        {
          scenario: 'You hear two students talking about a careers talk they have just heard at college.',
          q: 'What do they disagree about?',
          opts: [
            'how useful the information was',
            'how entertaining the speaker was',
            'how well the audience behaved',
          ],
          answer: 2,
          transcript: "You hear two students talking about a careers talk they have just heard at college.\nWoman: That was a good careers talk, wasn't it?\nMan: Well, yes and no. I mean, the speaker knew his stuff, but not much of it was new – we've already had two careers talks this year, covering most of the same topics.\nWoman: Hmm … you have a point there, but he made some great jokes, and held everyone's attention. There was no chatting in the back row, or people checking their phones every five minutes.\nMan: Actually, there was quite a lot of that – I think you just didn't notice. I did think he was funny, though.",
          explanation: "官方答案为 C：依据录音内容，两人意见不一的是听众的表现。原文：\"There was no chatting in the back row, or people checking their phones every five minutes.\"",
        },
        {
          scenario: "You hear an author of children's books talking about her work.",
          q: 'What point is she making?',
          opts: [
            'She wants her books to be educational.',
            'Her books are about her real-life experiences.',
            'Friendship is the main focus of her stories.',
          ],
          answer: 2,
          transcript: "You hear an author of children's books talking about her work.\nWoman: When I start writing a novel for children, my main aim is not to write a successful book – I write about things that I used to love reading about when I was their age. I've been writing novels for children for some years now and I've come to realise that mystery is important, but, what the children really want to read about is the young characters in the book. By solving a mystery, the characters have to build their relationships and solve problems together. So many writers try to teach children things too directly, but doing that just turns children off.",
          explanation: "官方答案为 C：依据录音内容，她说友谊是其故事的核心。原文：\"By solving a mystery, the characters have to build their relationships and solve problems together.\"",
        },
        {
          scenario: 'You hear a man and a woman talking about older people learning languages.',
          q: 'What does the man say about them?',
          opts: [
            "They don't take advantage of technology.",
            'They have more time to study.',
            'They use better learning techniques.',
          ],
          answer: 2,
          transcript: "You hear a man and a woman talking about older people learning languages.\nMan: How are your mum's Spanish classes going?\nWoman: Oh, I'm not sure. She thinks she's too old to be doing them. The younger students learn so much quicker than her.\nMan: Younger students do pick things up more quickly in terms of accent and so on. But I think older people have an advantage. They've learnt to be efficient in how they spend their time and they've also learnt how to study. I bet your mum's grammar and vocabulary are better than the younger students'. Anyway, there are so many apps and programmes out there for learning languages so people of any age can practise their skills whenever they want – even on the way to work!",
          explanation: "官方答案为 C：依据录音内容，他说年长者运用的学习方法更好。原文：\"They've learnt to be efficient in how they spend their time and they've also learnt how to study.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a student called Andy Richards talking about his recent trip to the tea growing region of Assam in Northern India. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std3/std3-t4-p2.mp3',
      transcript: "You'll hear a student called Andy Richards talking about his recent trip to the tea growing region of Assam in Northern India. For questions 9 to 18, complete the sentences with a word or short phrase.\n\nHello. I'm Andy Richards and I'm here to talk about my recent trip to a tea plantation in the north-east of India, where Assam tea is grown.\n\nMy trip to the tea plantation was for my first year university project. If you're not a business studies student, you might wonder why I chose that destination – after all, you'd think it would better suit natural sciences or geography students – but luckily I found lots that related to my course and my project.\n\nOn the first morning of the visit, we were given a talk by the plantation manager about how the tea's grown. I discovered that the region where it's grown is really hot and experiences high rainfall. The humidity traps the heat in and provides perfect growing conditions – a kind of natural greenhouse if you like. It certainly felt like one anyway!\n\nAfter the talk, we were invited to a tea tasting session. We went along the veranda of the plantation house and into the dining room. On the other side was a separate room called the gallery and this was where the tea tasting took place. Awaiting us was a range of fifty-seven different types of tea blends from around the world.\n\nThen, we went on a tour of the plantation and saw the tea pickers who were mainly women. They were amazingly fast and skilful. They used their thumbs and forefingers to pick the buds and leaves from the stem of the tea plant. I was surprised because I thought only the leaves would get picked. I got to ask a lot of questions about the commercial aspects of the plantation for my project.\n\nTo finish off a fantastic first day, a special afternoon tea complete with elephant ride had been organised. I had a fantastic view from the elephant's back and I was amazed that I was able to catch a glimpse of the mountains on the horizon. We wandered along the roads and through the local villages, watching the local people going about their daily lives.\n\nEventually, we arrived at a neighbouring tea garden where refreshments were waiting for us. We had sandwiches that literally melted in your mouth – why don't they taste like that at home? We also tried some curry puffs and some cream cakes ... a speciality of the area apparently. And there was tea too obviously!\n\nAfter a while, the sun began to go down and we could choose how to get back to the plantation. Some chose to walk or go by elephant. I decided to ride a vintage motorbike back, which meant driving through the villages on a muddy track. I was OK until I tried to cross a stream. The tyres slipped on the stones, but luckily I only got my feet wet!\n\nWe were lucky that our two-day visit coincided with the Saturday market in the nearest village. I was surprised at how big it was and I spent several hours wandering down the narrow aisles between the stalls looking at the jewellery, the colourful saris and believe it or not – the winter jackets! That was rather puzzling considering the weather!\n\nI had a go at bargaining for the best price for some presents. I was a bit embarrassed to begin with. I started off buying a bag for my older sister. I probably paid too much to be honest but later I bought a nose ring for my other sister – and by then I'd really got into it! I think I got a real bargain there!\n\nEverything was larger than life in that market – especially the food ... nothing like shopping in a supermarket back home. The red peppers looked as if they'd been polished, the colourful spices were overflowing out of large sacks and the carrots were bright red too, twice the size I'm used to, so I actually bought some of those – tasted amazing.\n\nNow let me move on to the lavish dinner they prepared.",
      items: [
        {
          q: 'As part of his ____ course at university, Andy went to India to gather information for a project.',
          answer: ['business studies', 'business'],
          show: 'business (studies)',
          explanation: '官方答案 business (studies)：Key 中 studies 为可选词，两种写法均算对。',
        },
        {
          q: "Andy compares the tea plant's growing conditions to a ____ .",
          answer: ['natural greenhouse', 'natural green-house', 'greenhouse', 'green-house'],
          show: '(natural) green(-)house',
          explanation: '官方答案 (natural) green(-)house：Key 中 natural 为可选词，greenhouse 连写或加连字符均可。',
        },
        {
          q: "Andy's group were invited to the ____ for the tea tasting session.",
          answer: ['gallery'],
          show: 'gallery',
          explanation: '官方答案 gallery：他们被邀请到该处参加品茶环节。',
        },
        {
          q: 'Andy was surprised that, as well as the leaves, the tea pickers also picked the ____ of the plants.',
          answer: ['buds', 'bud'],
          show: 'bud(s)',
          explanation: '官方答案 bud(s)：Key 给出单复数两种形式。',
        },
        {
          q: 'On the elephant ride, Andy was able to see the ____ in the distance.',
          answer: ['mountains'],
          show: 'mountains',
          explanation: '官方答案 mountains：骑大象时他远望到了群山。',
        },
        {
          q: 'At the tea party, the ____ particularly impressed Andy.',
          answer: ['sandwiches'],
          show: 'sandwiches',
          explanation: '官方答案 sandwiches：茶会上三明治给他留下特别深的印象。',
        },
        {
          q: 'When going over a ____ , Andy nearly fell off his motorbike.',
          answer: ['stream'],
          show: 'stream',
          explanation: '官方答案 stream：骑摩托过溪流时他差点摔下来。',
        },
        {
          q: 'In the market, Andy was very surprised to see the ____ on sale.',
          answer: ['winter jackets'],
          show: 'winter jackets',
          explanation: '官方答案 winter jackets：市场上竟有冬季夹克出售，让他非常惊讶。',
        },
        {
          q: 'Andy was pleased with the price he paid for the ____ for his sister.',
          answer: ['nose ring', 'nose-ring'],
          show: 'nose(-)ring',
          explanation: '官方答案 nose(-)ring：Key 给出分写与加连字符两种形式。',
        },
        {
          q: "The ____ were Andy's favourite vegetables out of all those on display at the market.",
          answer: ['carrots'],
          show: 'carrots',
          explanation: '官方答案 carrots：胡萝卜是他在市场上最爱的蔬菜。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about work they did in shops. For questions 19–23, choose from the options (A–H) what each person says about their experience. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std3/std3-t4-p3.mp3',
      options: [
        { label: 'A', text: "My confidence was sometimes affected by customers' attitudes." },
        { label: 'B', text: 'I was pleased to discover that I had a good way with customers.' },
        { label: 'C', text: 'It made me appreciate the people I worked with.' },
        { label: 'D', text: "The training I received didn't equip me to do my job well." },
        { label: 'E', text: 'Customers were satisfied when they got a bargain.' },
        { label: 'F', text: "I wasn't happy with some of the products in the shop." },
        { label: 'G', text: 'It was motivating to sell more than the other assistants.' },
        { label: 'H', text: 'It exhausted me both physically and mentally.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'C', explanation: "官方答案 C：依据录音内容，这段经历让这位说话者更珍惜共事的同事。原文：\"When I'd had a particularly tough day for one reason or another, my fellow workers were always sympathetic, for which I was very grateful.\"", transcript: "Speaker 1\nI spent six months as a sales assistant in a toy shop. Until you've actually done it, you don't realise how hard it is, working in a shop. They say the customers are always right but let me tell you, they're not! Sometimes they're simply rude. When I'd had a particularly tough day for one reason or another, my fellow workers were always sympathetic, for which I was very grateful. But I was glad it was only a temporary job, even though I was quite good at it. One thing came as a result of that ... I'm always nice to shop assistants now!" },
        { speaker: 'Speaker 2', answer: 'H', explanation: "官方答案 H：依据录音内容，这份工作让这位说话者身心俱疲。原文：\"It's draining being on your feet all day. Some of our customers hadn't a clue what they wanted and others seemed to have a lot more knowledge than me. You had to be ready for a huge variety of questions. At the end of my shift, my brain couldn't cope with any more!\"", transcript: "Speaker 2\nThe shop where I worked sold mobile phones. There were six of us working there and there was never a moment when we weren't rushing about. It's draining being on your feet all day. Some of our customers hadn't a clue what they wanted and others seemed to have a lot more knowledge than me. You had to be ready for a huge variety of questions. At the end of my shift, my brain couldn't cope with any more! In the evenings I just sat at home watching rubbish on the TV. I work in a flower shop now – much more my thing!" },
        { speaker: 'Speaker 3', answer: 'B', explanation: "官方答案 B：依据录音内容，这位说话者发现自己很会与顾客打交道。原文：\"And I think the customers recognised my honesty because I had a lot coming back who chose to be served by me. It was quite satisfying knowing that my approach seemed to work.\"", transcript: "Speaker 3\nI sold jeans in a really fashionable shop. We worked on commission, which made selling quite competitive, so the more I sold the bigger my take-home pay was. Even knowing that, I couldn't make myself push a pair of jeans on a customer if I thought they looked awful on her. And I think the customers recognised my honesty because I had a lot coming back who chose to be served by me. It was quite satisfying knowing that my approach seemed to work. In the end, I probably sold just as many as my colleagues, if not more." },
        { speaker: 'Speaker 4', answer: 'F', explanation: "官方答案 F：依据录音内容，这位说话者对店里的部分商品不满意。原文：\"In fact, we were also having to sell some stuff that wasn't top of the range, and that wasn't reflected in the price. I tried to put people off buying these lower quality pieces as I didn't think they were worth the money.\"", transcript: "Speaker 4\nMy colleagues were great and I really enjoyed some aspects of selling. I mean, I knew I was a good sales assistant, even with difficult customers. I was working in a furniture shop selling top-of-the-range sofas and chairs. In fact, we were also having to sell some stuff that wasn't top of the range, and that wasn't reflected in the price. I tried to put people off buying these lower quality pieces as I didn't think they were worth the money. In the end, I left because of this and I've moved out of selling. I miss it sometimes." },
        { speaker: 'Speaker 5', answer: 'D', explanation: "官方答案 D：依据录音内容，这位说话者所受的培训不足以胜任工作。原文：\"I'd had a couple of days before I started with the manager who went through the stock with me and the mysteries of the credit card machine but nothing on actually dealing with customers.\"", transcript: "Speaker 5\nThe dress shop I worked in always seemed to be having a sale where loads of things were marked down by as much as 50%. It attracted customers into the shop but not much of the discounted stuff was sold. Customers preferred our latest models, which were full price. But I wasn't very good with customers. I'd had a couple of days before I started with the manager who went through the stock with me and the mysteries of the credit card machine but nothing on actually dealing with customers. So I left after a couple of months and tried something else instead." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with Marvin Benby, a beekeeper who keeps his bees in hives on a city rooftop. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std3/std3-t4-p4.mp3',
      transcript: "You'll hear an interview with Marvin Benby, a beekeeper who keeps his bees in hives on a city rooftop. For questions 24 to 30, choose the best answer (A, B or C).\n\nInterviewer: I'm talking to Marvin Benby, a city beekeeper. Marvin, how did you get into this?\n\nMarvin: I'd always been interested in insects, and a friend in the countryside was always telling me how enjoyable he found beekeeping. He's got his own hives, you know, beehives, which bees are kept in, and produces beautiful honey, but living in a city, doing it myself hadn't occurred to me – where would I keep them? I knew so little about it. Then I saw a newspaper ad for a beekeeping workshop, and told my friend ... but he just raised his eyebrows. That was it – I thought 'you don't believe I can do it', and signed up for the course.\n\nInterviewer: Is keeping bees fun?\n\nMarvin: Well, I've become somewhat obsessed with bees. As you probably know, they're essential for keeping plants growing. They help spread their seeds. You're doing a favour to society by keeping up bee numbers, providing homes for them. Of course, my friends love me because I'm always giving them pots of honey. You only open the hive for a good reason, as it's an intrusion breaking the seal on the hive. It's the highlight for me and I can hardly sleep the night before – looking forward to seeing how they're doing.\n\nInterviewer: Is it difficult keeping bees in a city?\n\nMarvin: Wherever you do it you'll have to invest in things – a honey extractor, a bee smoker, special gear to protect yourself – the stuff's as easy to get in urban as in rural areas. It's devastating if a disease strikes the hive – you can't help but feel responsible, even if it's just nature taking its course. Actually bees in rural areas suffer worse – many say it's due to pesticides used on farm crops. In fact city bees are fortunate enough to be exposed to a tremendous diversity of plants. There are things growing everywhere.\n\nInterviewer: Do your neighbours mind you keeping bees?\n\nMarvin: I'm lucky to have some roof space where my beehives sit – my neighbours don't seem to mind. I wondered if there'd be complaints as some people worry about the fact bees can sting. But they only sting if they feel threatened. I originally kept the hives at street level, but then offered to move them up to the roof when I discovered the guy who lives on the ground floor's allergic to them. He mentioned the risks and it seemed wiser to relocate to the top of the building.\n\nInterviewer: This is your fifth year of beekeeping …\n\nMarvin: Yes ... I'll never forget setting up my first hive. It involved moving my bees from a box into a new wooden hive. It's important they don't have any confusion about where the entrance to the new hive is – it must be in a familiar position or they get lost if they fly outside. I had to feed the bees sugar syrup, so they'd be full and sleepy, and wouldn't react badly. I'd forgotten to bring gloves, and as I poured in the sugar syrup, to make matters worse, I split quite on my unprotected hands, so they were sticky, and bees started settling on them. I was terrified they'd turn agitated and aggressive, but it went smoothly.\n\nInterviewer: You now sell honey and candles made from beeswax …\n\nMarvin: ... and other products. I had to put quite a bit of cash down for stuff I needed, but I'm determined to turn it into a profitable business, and I've recruited some volunteers to help me sell things. I'm keen to involve the local community as much as possible ... hopefully more people will consider taking up beekeeping – everyone loves honey after all!\n\nInterviewer: So, what's next ….?\n\nMarvin: My knowledge has reached a point where ideally I'd say I'm confident enough to sit back a bit more in the coming months, which is what an experienced beekeeper hopes to do when things are going well. There's little certainty though ... the next season brings fear as well as hope and joy ... if you lose bees, there's guilt, did you do something wrong? The weather's definitely key too – how the bees manage it affects everything.",
      items: [
        {
          q: 'What made Marvin get into beekeeping?',
          opts: [
            'He was persuaded to try it by a friend.',
            'A friend offered to teach him about it.',
            'He wanted to prove a friend wrong.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，他想证明朋友的话是错的。原文：\"That was it – I thought 'you don't believe I can do it', and signed up for the course.\"",
        },
        {
          q: 'Marvin thinks the best part about keeping bees is',
          opts: [
            'helping to increase the bee population.',
            'the excitement of checking his beehives.',
            'having access to so much honey.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，检查蜂箱时的兴奋感是他最大的乐趣。原文：\"It's the highlight for me and I can hardly sleep the night before – looking forward to seeing how they're doing.\"",
        },
        {
          q: 'One of the difficulties for Marvin of city beekeeping is',
          opts: [
            'taking it personally when things go wrong.',
            'ensuring the bees get to a variety of flowers.',
            'getting hold of the most suitable equipment.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，出问题时他会往心里去。原文：\"It's devastating if a disease strikes the hive – you can't help but feel responsible, even if it's just nature taking its course.\"",
        },
        {
          q: 'Marvin says that one of his neighbours',
          opts: [
            'complained about being stung by a bee.',
            'insisted that Marvin moved his beehives.',
            'had concerns due to an allergy to bees.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，一位邻居因对蜜蜂过敏而担忧。原文：\"I originally kept the hives at street level, but then offered to move them up to the roof when I discovered the guy who lives on the ground floor's allergic to them.\"",
        },
        {
          q: 'When Marvin set up his first beehive',
          opts: [
            'he became confused about what to do.',
            'he made some potentially dangerous mistakes.',
            'his bees became nervous and stressed.',
          ],
          answer: 1,
          explanation: "官方答案为 B：依据录音内容，他犯了一些可能有危险的错误。原文：\"I'd forgotten to bring gloves, and as I poured in the sugar syrup, to make matters worse, I split quite on my unprotected hands, so they were sticky, and bees started settling on them. I was terrified they'd turn agitated and aggressive, but it went smoothly.\"",
        },
        {
          q: 'What does Marvin say about selling bee-related products?',
          opts: [
            'He has started to make a profit.',
            'Local people are starting to buy them.',
            'It cost him a lot to get started.',
          ],
          answer: 2,
          explanation: "官方答案为 C：依据录音内容，起步阶段花了他很多钱。原文：\"I had to put quite a bit of cash down for stuff I needed, but I'm determined to turn it into a profitable business, and I've recruited some volunteers to help me sell things.\"",
        },
        {
          q: 'How does Marvin feel about the next few months?',
          opts: [
            'He has a mixture of contrasting feelings.',
            'He hopes to enjoy a more relaxed period.',
            'He is confident that he can manage.',
          ],
          answer: 0,
          explanation: "官方答案为 A：依据录音内容，他心情复杂、百感交集。原文：\"There's little certainty though ... the next season brings fear as well as hope and joy ... if you lose bees, there's guilt, did you do something wrong?\"",
        },
      ],
    },
  },
}

// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 22–27（PDF 23–28），答案核对自 Test 1 answer key（Listening 区在书 110 / PDF 111）
// 音频：/audio/fce/std4/std4-t1-p1.mp3 ~ std4-t1-p4.mp3（整 Part 一条）
// 注：书 24 页 Part 2 印刷小标题为 "Volunteering in the Ecuadorian Cloud Forest"（数据结构无对应字段，记录于此备查）。
// 注：Key 中 Part 2 为流式排版，第二行行首的 "Garden" 为第 11 题答案 "Medicine Garden" 的换行续词（第 1 行已容纳 9/10/11 三项），
//     故 Q9 记为 International Conservation、Q11 记为 Medicine Garden。

const STD4_L1 = {
  meta: {
    id: 'fce-standard-4-test1-listening',
    title: 'FCE 标准版真题 4 · Test 1',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 22–27',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 1 answer key，书110（PDF111）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t1-p1.mp3',
      items: [
        {
          scenario: 'You hear a woman talking about learning to play the piano.',
          q: 'How does she feel about it?',
          opts: [
            'determined not to give up',
            'disappointed at her lack of progress',
            'embarrassed that she rarely practises',
          ],
          answer: 0,
          transcript: "You hear a woman talking about learning to play the piano.\nWoman: Learning to play the piano is far harder than I'd imagined when I started. You really can't improve unless you practise. I'm hopeless at that, but after all, I have a busy life, and this is just a hobby. However, it's one I enjoy, and the time I can spend doing it is precious. So while I admit I'm still playing very basic, easy pieces, and playing them pretty poorly at that, the little progress I have made encourages me to keep on going to lessons. My teacher's very patient, fortunately, and never makes me feel bad, so maybe I'll finally be able to impress my friends one day!",
          explanation: "官方答案为 A：她自认还在弹很基础的简单曲子、弹得也相当差，但仅有的一点进步鼓励她继续去上课，可见她决心不放弃。原文：\"So while I admit I'm still playing very basic, easy pieces, and playing them pretty poorly at that, the little progress I have made encourages me to keep on going to lessons.\"",
        },
        {
          scenario: 'You hear a woman telling a friend about having a celebration dinner.',
          q: 'How does the woman feel about it?',
          opts: [
            'proud of the meal that she prepared',
            'pleased that everyone enjoyed the evening',
            'relieved that there was enough to eat',
          ],
          answer: 1,
          transcript: "You hear a woman telling a friend about having a celebration dinner.\nMan: Did you have a good weekend?\nWoman: Yes, it was my sister's birthday and we cooked a meal for everyone. Cooking for other people can be so stressful. It had seemed a good idea to try a new recipe, and I'd got the ingredients ready in advance. I managed to forget ginger though, so the stir-fry was lacking a vital ingredient, but it didn't seem to matter. I always make way too much, so I had no concerns about people going hungry. Still, it was great that the conversation flowed so well, and in fact nobody seemed to want to leave. There was loads of clearing up though.",
          explanation: "官方答案为 B：虽然炒菜忘了放姜、饭后收拾起来也很累，但交谈顺畅、没人想离开让她觉得很好，可见她高兴的是大家度过了愉快的夜晚。原文：\"Still, it was great that the conversation flowed so well, and in fact nobody seemed to want to leave.\"",
        },
        {
          scenario: 'You hear a man telling a friend about a visit to a museum.',
          q: 'What does he say about the visit?',
          opts: [
            'It inspired him to take up a hobby.',
            "It was more interesting than he'd expected.",
            'It would have been more enjoyable on another day.',
          ],
          answer: 0,
          transcript: "You hear a man telling a friend about a visit to a museum.\nWoman: Did you enjoy your visit to the museum last week?\nMan: I did, thanks. You know how much I'd been looking forward to it – well, it lived up to all my expectations. As you know, they've just renovated the whole building, and it really is great. There's an exhibition on of paintings of the countryside around here. It made me realise I'd really like to do something like that too, so I've signed up for a beginner's painting course.\nWoman: Great! And was the museum busy?\nMan: Oh, yes – I've heard the place is permanently packed these days. I thought it would've been quiet on a Monday.",
          explanation: "官方答案为 A：乡村风景画展让他意识到自己也想尝试绘画，并报名了初级绘画课程，说明这次参观激发他培养了一项新爱好。原文：\"It made me realise I'd really like to do something like that too, so I've signed up for a beginner's painting course.\"",
        },
        {
          scenario: 'You hear two media students talking about a TV advert they have seen.',
          q: 'What do they agree about the advert?',
          opts: [
            'It was cleverly made.',
            'It was harmless fun.',
            'It was aimed at a particular age group.',
          ],
          answer: 0,
          transcript: "You hear two media students talking about a TV advert they have seen.\nMan: Did you see the advert for that new health drink?\nWoman: I did, but I thought it was all pretty predictable … you know, bright smiley faces … young woman leaping about in slow motion …\nMan: Yes, there wasn't a great deal of novelty, was there? But then again, is there ever in an advert for a fruit drink? It was certainly technically very good, wasn't it? Well-designed …\nWoman: Short and snappy … made its point effectively. Not sure how believable the leaping woman was, though … you know, the suggestion that if you drink it, you immediately come over all energetic.\nMan: But surely you weren't meant to take that literally.",
          explanation: "官方答案为 A：两人都觉得广告内容好预测、缺乏新意，但都认可其制作水准——男士称它技术上非常出色、设计精良，女士也附和说短小利落、有效传达了要点。原文：\"It was certainly technically very good, wasn't it? Well-designed …\"",
        },
        {
          scenario: 'You hear two people talking about a work colleague called Judy.',
          q: 'What is the man doing when he speaks?',
          opts: [
            "praising Judy's enthusiasm",
            "questioning Judy's attention to detail",
            'expressing sympathy for Judy',
          ],
          answer: 2,
          transcript: "You hear two people talking about a work colleague called Judy.\nMan: Have you heard that Judy's leaving?\nWoman: Yeah … such a lovely person.\nMan: I think she never really recovered from the disappointment of being overlooked for that promotion. Seemed to hit her hard, and she was the obvious person for the job, let's be honest.\nWoman: In many ways she deserved it, sure. But Gavin, who got the job, was … kind of more obviously committed, don't you think?\nMan: Very energetic, yes. Judy was quieter, I guess … she went about her daily business with no fuss. And what she did, she did very efficiently, so you could rely on her work being free of mistakes, which is very important in our line of business.",
          explanation: "官方答案为 C：男士认为 Judy 从未从晋升落选的失望中恢复过来、备受打击，语气是为她感到难过和同情，而非赞扬她的热情或质疑她的细心（他还强调她的工作从无差错）。原文：\"I think she never really recovered from the disappointment of being overlooked for that promotion.\"",
        },
        {
          scenario: 'You hear two friends talking about a local project to start a community garden.',
          q: 'What does the man think about the project?',
          opts: [
            'It seems badly organised.',
            "It's probably over-ambitious.",
            'It risks being too costly.',
          ],
          answer: 1,
          transcript: "You hear two friends talking about a local project to start a community garden.\nWoman: Are you coming to the meeting tomorrow? We're going to discuss the design of the community garden.\nMan: No, community projects aren't my thing. Everyone starts off being really enthusiastic, and then one by one they all drop out, and so all the work falls on a couple of people. I've seen it happen so many times. And where are the plants coming from?\nWoman: All the plants, the land and equipment is being provided free of charge by the local council. The residents are really keen and we've elected a committee to run things too.\nMan: Let's talk again in six months' time and see if it's still on track!",
          explanation: "官方答案为 B：男士根据经验认为社区项目开始时人人热情高涨，随后一个个退出、工作落到少数人身上，还以“六个月后再看项目是否仍在推进”来调侃，可见他觉得项目目标过大、可能过于雄心勃勃（花草土地均免费，并非太花钱）。原文：\"Everyone starts off being really enthusiastic, and then one by one they all drop out, and so all the work falls on a couple of people.\"",
        },
        {
          scenario: "You hear two friends discussing watching films based on books.",
          q: "The woman enjoys watching films based on books she's read because",
          opts: [
            'the book brings an added level of understanding to the film.',
            'it is interesting to see another interpretation of the story.',
            'she likes to spot where the film differs from the book.',
          ],
          answer: 0,
          transcript: "You hear two friends discussing watching films based on books.\nWoman: Do you fancy going to see Trapped at the cinema tomorrow? I really enjoyed reading the book.\nMan: I don't know how you can watch a film after you've read the book. I'd hate it if the film wasn't faithful to the storyline.\nWoman: Yes, but once you're right into the film, you forget about that. It's only later that you think – oh hang on, that didn't happen in the book. I think you miss so much if you haven't read it. You don't know the inner thoughts of the characters or their motivation for doing things. It doesn't matter how good the director is, some things just can't be brought to the screen.\nMan: Mmm.",
          explanation: "官方答案为 A：她认为没读过原著就会错过很多——不知道人物的内心想法和做事动机，也就是说原书为电影提供了更深一层的理解。原文：\"You don't know the inner thoughts of the characters or their motivation for doing things.\"",
        },
        {
          scenario: 'You hear a man telling a friend about a new sports centre.',
          q: 'For which sport is it optional to join a membership scheme?',
          opts: ['swimming', 'gym', 'athletics'],
          answer: 2,
          transcript: "You hear a man telling a friend about a new sports centre.\nWoman: So did you enjoy your visit to the new sports centre in town?\nMan: Yes, I went for a swim and had a look round the gym.\nWoman: Only a look round?\nMan: Yes, I hadn't realised, but you have to become a member to use the gym.\nWoman: But anyone can swim?\nMan: Yes, or even use the athletics track. But they said the gym isn't open access … they want everyone to have an induction programme to show them how to use the machines safely. With the track, there's an athletics club you can join if you want to get coaching and all that, but you don't have to … that's the difference.",
          explanation: "官方答案为 C：健身房必须成为会员才能使用，游泳对所有人开放，而田径场可以选择性加入俱乐部——“不必加入也能使用”的运动就是 athletics。原文：\"With the track, there's an athletics club you can join if you want to get coaching and all that, but you don't have to … that's the difference.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a student called Petra Dean talking about her recent work experience as a volunteer in the Cloud Forest in Ecuador in South America. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t1-p2.mp3',
      transcript: "You will hear a student called Petra Dean talking about her recent work experience as a volunteer in the Cloud Forest in Ecuador in South America. For questions 9 to 18, complete the sentences with a word or short phrase.\nYou now have forty-five seconds to look at Part Two.\n\nHello, my name's Petra Dean and I'd like to tell you about my amazing trip to the Cloud Forest in Ecuador in South America. I volunteered there for a month last summer on the Cloud Forest Project.\n\nI'm a postgraduate student now and my first degree was in Biology. While I was doing that, I realised that I wanted to continue my studies but specialise more – so I chose International Conservation, which I love doing. Going to Ecuador was a way for me to get in some practical experience.\n\nWhen I arrived in Ecuador, I spent my first night in a hostel in the capital, Quito. The next day I set off for the nature reserve, which is situated in the Cloud Forest. The journey began with a three-hour bus ride out into the countryside. The second part was more unexpected. A donkey was the designated mode of transport up the steep forest paths to the reserve!\n\nThe reserve had its own farm, and at first I was assigned to work in the two gardens. The one which they called the Medicine Garden was where plants that can be used to treat illness were grown – it gave me a real buzz to know that I was growing plants for research that might heal people. The other was the organic vegetable garden where we grew our own delicious fruit and vegetables.\n\nThe weather was perfect for doing outside work. I was there during the rainy season, so the temperatures were very comfortable. There were storms each evening and they were really dramatic to watch. We were surrounded by the most amazing mountains, but for days on end they weren't visible due to the blanket of cloud that descended over the forest.\n\nThere were goats on the reserve, and one of my tasks was taking the milk down to the nearest village every day, which wasn't much fun. The barrels of fresh milk were loaded onto a bicycle and I had to steer it down the steep paths. It was exhausting because it seemed to have a mind of its own! When I got to the village, the milk was loaded into a rickety old lorry for the rest of the way down the mountain.\n\nOne aspect of the programme that I really appreciated was the forestry programme. Volunteers had to assist in collecting and planting seeds, maintaining the plant nursery and – my particular task – conducting forest inventories. That involved assessing the trees' growth. This provided invaluable information for scientists trying to learn about what's going on in the forest.\n\nIt wasn't all work though. We also had the chance to get to know the forest better. The local people taught us about the trees that are native to the area. We also had a mini-survival course and were instructed on the best way to put up shelters high up in the branches. Our guides showed us edible plants, but I found it impossible to identify them.\n\nThere was plenty of free time at the weekends. A friend and I spent one weekend cycling through the countryside, stopping off to explore the ruins of ancient villages. I'll never forget that! Over the next few weekends, we visited the nearby towns and saw the local sites of historical interest, which were surprisingly free of crowds as it was outside the tourist season.\n\nThe volunteer house had everything you could want – cold showers, electricity and comfortable bedrooms to unwind in after a long day of physical exertion. Then, after a delicious dinner of home-grown food served in the dining room, I wanted nothing more than to sit out on the terrace and listen to the sounds of the wildlife. That was just magical.\n\nI can honestly say that I wouldn't change a thing about this experience. Oh, OK, maybe one thing … I packed a mosquito net, insect spray and, of course, sun cream as suggested – but nowhere near enough. It was surprisingly hard to come by while I was there, and it was very expensive. But despite all that, I would say that it really was the trip of a lifetime!",
      items: [
        {
          q: 'Petra is currently studying ____ at university.',
          answer: ['International Conservation'],
          show: 'International Conservation',
          explanation: '官方答案 International Conservation：她在大学学习的专业。',
        },
        {
          q: 'Petra was surprised that she had to travel by ____ for the last stage of her journey to the Cloud Forest.',
          answer: ['donkey'],
          show: 'donkey',
          explanation: '官方答案 donkey：旅程最后一段她需骑驴前行。',
        },
        {
          q: 'Working in what was known as the ____ gave Petra particular satisfaction.',
          answer: ['Medicine Garden'],
          show: 'Medicine Garden',
          explanation: '官方答案 Medicine Garden：在被称为 "Medicine Garden" 的地方工作让她特别满足。',
        },
        {
          q: 'Petra was impressed by the ____ she saw on a daily basis.',
          answer: ['storms'],
          show: 'storms',
          explanation: '官方答案 storms：她每天见到的暴风雨令她印象深刻。',
        },
        {
          q: "Petra didn't enjoy trying to control the ____ when taking the milk down the mountain.",
          answer: ['bicycle', 'bike'],
          show: 'bicycle / bike',
          explanation: '官方答案 bicycle/bike：Key 给出两种写法，驮奶下山时难以控制自行车。',
        },
        {
          q: 'As part of the forest programme, Petra had to check the ____ of the trees.',
          answer: ['growth'],
          show: 'growth',
          explanation: '官方答案 growth：她需检查树木的生长情况。',
        },
        {
          q: 'One survival skill that Petra learnt was how to make ____ in the trees.',
          answer: ['shelters'],
          show: 'shelters',
          explanation: '官方答案 shelters：她学会在树上搭建庇护所。',
        },
        {
          q: "Visiting ____ that are now in a state of ruin was Petra's most memorable free time activity.",
          answer: [
            'villages',
            'the villages',
            'ancient villages',
            'old villages',
            'the ancient villages',
            'the old villages',
          ],
          show: '(the) (ancient/old) villages',
          explanation:
            '官方答案 (the) (ancient/old) villages：the 与 ancient/old 均为可选项，按 Key 展开为 6 种组合。',
        },
        {
          q: "In the reserve, Petra's favourite place to spend the evening was the ____",
          answer: ['terrace'],
          show: 'terrace',
          explanation: '官方答案 terrace：她最喜欢在露台上度过傍晚。',
        },
        {
          q: 'Petra regretted not packing sufficient ____ in her luggage.',
          answer: ['suncream', 'sun-cream'],
          show: 'sun(-)cream',
          explanation: '官方答案 sun(-)cream：Key 中连字符为可选，两种写法均算对。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people talk about their jobs on a cruise ship. For questions 19–23, choose from the list (A–H) what each speaker says about working on a cruise ship. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t1-p3.mp3',
      options: [
        { label: 'A', text: 'The staff can choose which cruise to go on.' },
        { label: 'B', text: 'The staff tend to be young.' },
        { label: 'C', text: 'The jobs are well paid.' },
        { label: 'D', text: 'The staff can continue their education on board.' },
        { label: 'E', text: 'The promotion prospects are good.' },
        { label: 'F', text: 'The staff accommodation is of a high standard.' },
        { label: 'G', text: 'The lifestyle is glamorous.' },
        { label: 'H', text: 'The work is suitable for couples.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: "官方答案为 E：她曾上夜校课程提升自己，从后台转到前台并重新申请上船工作，认为这一行的好处是晋升很快，即晋升前景好。原文：\"That's what's good about this line of work – you can move up quite quickly.\"", transcript: "Speaker 1\nI work in the front office on board ship, answering passenger queries and so on. I used to work in the back office but I wanted to better myself, so I took some customer service evening courses at my local college between cruises and then re-applied for work on the ship. That's what's good about this line of work – you can move up quite quickly. What I love about this job is that you really get to interact with passengers. We get people from all walks of life – lots of couples, but families too. They come for the holiday of a lifetime – a bit of luxury – and why not?" },
        { speaker: 'Speaker 2', answer: 'F', explanation: "官方答案为 F：她反驳了“员工都很年轻”的普遍误解，并强调员工宿舍非常好——自己的船舱比家里的卧室还棒，即员工住宿标准很高。原文：\"The staff quarters are brilliant – my cabin is better than my bedroom back home!\"", transcript: "Speaker 2\nThere's a common misconception that everyone who works on a cruise ship is in their early twenties but most people here are older than me. I was going nowhere professionally, so thought I'd try my hand here. Most of the cruise singers – myself included – dream of being 'discovered' by a passenger who also happens to be a record producer – a bit unlikely I know! The staff quarters are brilliant – my cabin is better than my bedroom back home! And the social life is great too. We have fantastic staff parties and we even put on our own concerts sometimes!" },
        { speaker: 'Speaker 3', answer: 'B', explanation: "官方答案为 B：68 岁的志愿者自称是个“异类”，因为船上大多数工作人员都比他年轻得多，可见员工普遍年轻。原文：\"Well, I'm a bit of an oddity actually because I'm a whole lot older than most people who work onboard.\"", transcript: "Speaker 3\nWell, I'm a bit of an oddity actually because I'm a whole lot older than most people who work onboard. I'm 68! Also, I don't get paid! That's right! Many people ask me why I do it, but I have the chance to go on all these wonderful cruises for absolutely nothing! My role is to accompany the groups when they go ashore and make sure everything runs smoothly. It's perfect! I spend all my time with the passengers, and I've made some lovely friends over the years. My husband does the same thing, but it's a shame it's on another ship, though. At least we have lots to talk about!" },
        { speaker: 'Speaker 4', answer: 'H', explanation: "官方答案为 H：他和妻子都在同一条船上工作，虽班次完全不同但安排反而理想，夫妻可以一起上船，说明这份工作适合夫妇。原文：\"My wife's a childminder onboard, and although we work completely different hours, it's ideal really 'cos otherwise I wouldn't see much of her.\"", transcript: "Speaker 4\nI'm a chef. Catering is hard work – it's really full on most of the time. Some nights I can't wait to get back to the cabin and put my feet up, even if the space is a bit small! My wife's a childminder onboard, and although we work completely different hours, it's ideal really 'cos otherwise I wouldn't see much of her. I qualified and worked in a restaurant in Canada, but I always wanted to travel. It's not a luxurious lifestyle for the staff onboard but the job does allow me to see new places." },
        { speaker: 'Speaker 5', answer: 'D', explanation: "官方答案为 D：虽然薪水不高，但有很多课程可以上——她学意大利语并提升了电脑技能，即员工能在船上继续接受教育。原文：\"There are like loads of courses we can do. I've learnt Italian and brushed up my computer skills since I've been doing this job.\"", transcript: "Speaker 5\nI work in the tour office organising the tours that the passengers can go on when we make our various stops. Although the pay isn't great – especially as we don't make any tips like they do in the restaurant – there are other perks. There are like loads of courses we can do. I've learnt Italian and brushed up my computer skills since I've been doing this job. The staff social activities are fantastic – almost as good as the passengers' entertainment! On the whole, the passengers are really nice. I mean, I love seeing them all dressed up in their posh clothes going in for dinner!" },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a man called Guy Riordan, who works as a stuntman performing dangerous scenes in movies. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t1-p4.mp3',
      transcript: "You will hear an interview with a man called Guy Riordan, who works as a stuntman performing dangerous scenes in movies. For questions 24 to 30, choose the best answer (A, B or C).\nYou now have one minute to look at Part Four.\n\nInterviewer: When you see a fight or a car chase in a movie, it's often a stuntman or woman taking the risks – not a real actor! Guy Riordan's a top stuntman. Guy, do you usually work individually or in a team?\n\nGuy: It depends … in my first job I was part of a team of other stuntmen … several of us had to jump off a fourth-floor rooftop together and get caught by the group on the ground. That involved relying on everyone else to do things properly, which wasn't something I enjoyed! Despite that uncertainty, I hoped my strength and sense of timing would get me through. Audiences rarely appreciate the lengths we go to to provide their entertainment!\n\nInterviewer: Obviously it's dangerous, but what's the most challenging thing for you about the work?\n\nGuy: It's a wonderful job, but like any career, you have to have tools – for a stuntman, it's his or her body – and if a stunt goes wrong, you can end up badly hurt. If I thought about that, though, I'd never do the job. But it's the never-ending process to up your game, to expand and extend what you're good at – that's the toughest bit. Of course, there's a lot of competition in the stunt world – that makes it exciting.\n\nInterviewer: What was it like working on the movie Raw Stuff?\n\nGuy: It's based on a true story about soldiers in action, so it was extremely important that the stunts didn't look like standard movie action sequences. The mountains we were filming in were stunning, which made up for having to hike up with 25 kilos of equipment on our backs … you just didn't notice the weight! The view from the top was sensational. The tricky part was tumbling onto rocky mountain ledges so that the camera could be as close as possible, and the audiences would see and feel what those soldiers went through.\n\nInterviewer: You've often acted as a stunt double for the actor Marty Walker …\n\nGuy: Yeah, Marty and I get on. He varies his size drastically from one movie to the next – he can go from athletic action hero to skinny professor in some major body transformations. His dedication to doing that's amazing, it affects me as well … I had to put on weight for his last movie. Marty wanted to do the motorbike stunts himself, but I persuaded him not to. It involved jumping off at high speed … pretty silly for an untrained person to try and do, or even a stuntman …\n\nInterviewer: Which movie do you remember filming most?\n\nGuy: Light at Dawn. They wanted me to say some lines – real acting. After a few attempts I gave up and asked for someone else to do it. The director Peter Levene was very ambitious – some things he asked for hadn't been tried before. It was truly a pleasure when we got things right. We filmed all over the world – everyone on what was a huge film crew was completely exhausted flying from one place to the next!\n\nInterviewer: How long have you been in the movie industry?\n\nGuy: Twenty years. I've seen some changes. There's more technology these days, but there's just as great a need for stunt actors. Some things can only be performed by a real human. I've worked with some great people in some great locations – and had a lot of laughs – something that's increasingly missing these days because there's so much at stake. But that does mean the financial rewards for those who get into the big movies are generally worth it. I can't say I've been unlucky in that respect.\n\nInterviewer: What would you advise someone wanting to do your job?\n\nGuy: Stunt work's become highly specialised over the years. There's high falls, fight scenes, horse stunts, car chases, the list goes on. There's no easy answer to the question of whether it's better to become skilled at one thing or be diverse. I don't try and discourage people from getting into stunts, but I do try to convince them to have another source of income to fall back on. Most stuntmen I know also do things like construction, security, web design … and though everyone has an agent to find them work, it's so often about your own contacts rather than anything else.",
      items: [
        {
          q: 'What does Guy say about the first time he worked with a team of other stuntmen?',
          opts: [
            'He was very unsure of his talents.',
            'He was uncomfortable about putting his trust in others.',
            'He was surprised at the risks some people took.',
          ],
          answer: 1,
          explanation: "官方答案为 B：第一次团队任务需要依赖其他人都不出错，他表示自己并不喜欢这种把安危托付给别人的感觉，即不放心信任他人。原文：\"That involved relying on everyone else to do things properly, which wasn't something I enjoyed!\"",
        },
        {
          q: 'For Guy, the most difficult part of being a stuntman is',
          opts: [
            'competing against others for roles.',
            'avoiding injury.',
            'trying to improve constantly.',
          ],
          answer: 2,
          explanation: "官方答案为 C：受伤的念头不去想就好，他认为最艰难的是永无止境地提升、拓展自己擅长之处的进步过程，而非与他人竞争或避开受伤。原文：\"But it's the never-ending process to up your game, to expand and extend what you're good at – that's the toughest bit.\"",
        },
        {
          q: 'What does Guy say was hard about performing in the movie Raw Stuff?',
          opts: [
            'falling in the right place',
            'having to carry heavy loads',
            'getting to the top of a mountain',
          ],
          answer: 0,
          explanation: "官方答案为 A（Raw Stuff 为书内斜体电影名）：负重登山有壮丽山景抵消、并未察觉重量，最棘手的是要在岩石山岩上翻滚，让摄影机尽量靠近、让观众看到并感受士兵的经历，即必须摔在正确的位置。原文：\"The tricky part was tumbling onto rocky mountain ledges so that the camera could be as close as possible, and the audiences would see and feel what those soldiers went through.\"",
        },
        {
          q: 'When asked about being a stunt double for the actor Marty Walker, Guy says',
          opts: [
            "he admires Marty's ability to change his body shape for films.",
            'he feels pleased when Marty plays the parts of action heroes.',
            "he respects Marty's willingness to act in some dangerous scenes.",
          ],
          answer: 0,
          explanation: "官方答案为 A：他称赞 Marty 在不同影片之间体型变化极大，能为角色从健壮动作英雄变成清瘦教授，并佩服他为此付出的投入，即钦佩他为电影改变体型的能力。原文：\"He varies his size drastically from one movie to the next – he can go from athletic action hero to skinny professor in some major body transformations. His dedication to doing that's amazing, it affects me as well …\"",
        },
        {
          q: 'What was satisfying for Guy about performing in the film Light at Dawn?',
          opts: [
            'getting the chance to have a speaking role',
            'working with a large film crew',
            'achieving what the director wanted',
          ],
          answer: 2,
          explanation: "官方答案为 C（Light at Dawn 为书内斜体电影名）：导演 Peter Levene 要求的一些东西前人未试过，当大家把动作做成功时他感到非常愉快，即达成导演想要的效果最令他满足（他放弃了台词机会，并非满足于开口演戏）。原文：\"It was truly a pleasure when we got things right.\"",
        },
        {
          q: 'What has changed for Guy about the movie industry recently?',
          opts: [
            'People working in it are more serious than before.',
            'He has to do more work for the same money.',
            'Stunt performers are less frequently required.',
          ],
          answer: 0,
          explanation: "官方答案为 A：如今技术更多，但风险更大，过去与优秀伙伴共事时的欢声笑语如今越来越少见，说明行业里的人比以前更严肃了。原文：\"I've worked with some great people in some great locations – and had a lot of laughs – something that's increasingly missing these days because there's so much at stake.\"",
        },
        {
          q: 'Guy advises anyone interested in becoming a movie stunt performer',
          opts: [
            'to develop as wide a range of stunt skills as possible.',
            'to find jobs by using a good agent.',
            'to be prepared to do other types of work as well.',
          ],
          answer: 2,
          explanation: "官方答案为 C：他不会劝阻别人入行，但会劝他们准备另一份收入来源作为退路，且他认识的大多数特技演员还兼做建筑、保安、网页设计等工作。原文：\"I don't try and discourage people from getting into stunts, but I do try to convince them to have another source of income to fall back on.\"",
        },
      ],
    },
  },
}

// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 42–47（PDF 43–48），答案核对自 Test 2 answer key（Listening 区在书 122 / PDF 123）
// 音频：/audio/fce/std4/std4-t2-p1.mp3 ~ std4-t2-p4.mp3（整 Part 一条）
// 注：书 44 页 Part 2 印刷小标题为 "The Albuquerque Balloon Festival"（数据结构无对应字段，记录于此备查）。
// 注：Q11 与 Q14 的空格在原书中带单引号（'____'），照录。

const STD4_L2 = {
  meta: {
    id: 'fce-standard-4-test2-listening',
    title: 'FCE 标准版真题 4 · Test 2',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 42–47',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 2 answer key，书122（PDF123）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t2-p1.mp3',
      items: [
        {
          scenario: 'You hear a TV presenter talking about making travel documentaries for TV.',
          q: 'What does he appreciate most about his job?',
          opts: [
            'It allows him plenty of free time.',
            "It doesn't feel like work.",
            'It provides him with a good salary.',
          ],
          answer: 1,
          transcript: "You hear a TV presenter talking about making travel documentaries for TV.\nMan: I love making travel documentaries for TV. I enjoy the sense of adventure and how travel and meeting other people broadens your horizons. And yet I don't go on holiday … I don't need to. My life is a bit like a holiday, even though I'm actually really busy all the time. My father worked at a job he hated for forty-two years and I remember him saying to me: 'Don't make the mistake I did. Find something you love and make money out of it.' He was so right.",
          explanation: "官方答案为 B。原文：\"My life is a bit like a holiday, even though I'm actually really busy all the time.\"",
        },
        {
          scenario: 'You hear an interview with a woman talking about rowing across the Atlantic Ocean.',
          q: 'How did she and her team feel before they set out?',
          opts: [
            'concerned that their age would be a problem',
            'worried about the weather conditions at sea',
            'unsure that they would complete the journey',
          ],
          answer: 2,
          transcript: "You hear an interview with a woman talking about rowing across the Atlantic Ocean.\nInterviewer: Janette, you and your team have just finished rowing across the Atlantic Ocean. What are your feelings?\nWoman: It feels like a dream to have arrived. It truly deserves to be called the world's toughest row. We rowed through a hurricane and even got attacked by flying fish! But we are so proud to have achieved something that we originally thought was way beyond our capabilities. We're the oldest team ever to have done it, but that was never an issue for us. Some of the equipment broke, which was what we were really afraid of. But – hey – despite that, we made it!",
          explanation: "官方答案为 C。原文：\"But we are so proud to have achieved something that we originally thought was way beyond our capabilities.\"",
        },
        {
          scenario: 'You hear two colleagues talking about what they did at the weekend.',
          q: 'How did the woman spend her time?',
          opts: [
            'applying for a new position',
            'catching up on her work',
            'improving her job prospects',
          ],
          answer: 2,
          transcript: "You hear two colleagues talking about what they did at the weekend.\nMan: Good break, Natasha?\nWoman: It was OK.\nMan: You didn't spend it stuck in front of the computer like you do here in the office?\nWoman: I did actually. Well, you know how hard it is for me to keep on top of my workload at the moment. It's really beginning to get me down, so a while ago, I decided I needed a new job. And that's when I realised that most of them require a certificate I haven't got round to getting. So I found the perfect course that I could do online from home. Hardly a break – but at least I feel I'm in a better place now for when I do start going for something new!",
          explanation: "官方答案为 C。原文：\"So I found the perfect course that I could do online from home. Hardly a break – but at least I feel I'm in a better place now for when I do start going for something new!\"",
        },
        {
          scenario: 'You hear an interview with a musician who is talking about being famous.',
          q: 'What does he enjoy?',
          opts: [
            'being recognised by the public',
            'performing in front of an audience',
            "pretending to be someone he's not",
          ],
          answer: 1,
          transcript: "You hear an interview with a musician who is talking about being famous.\nMan: It's quite strange being famous. When people see me out and about, they often come up to talk. I use the Tube like anyone else who lives in London, and nobody who sees me there tweets 'Why isn't he travelling by helicopter?' because nobody thinks of me like that. People do have an image of me, though – from TV appearances I've made. It's odd to watch the edited version of yourself on TV 'cos I don't look or speak like that normally. There's the adrenaline rush you get when you're on stage that doesn't exist in the rest of your life.",
          explanation: "官方答案为 B。原文：\"There's the adrenaline rush you get when you're on stage that doesn't exist in the rest of your life.\"",
        },
        {
          scenario: 'You hear part of an interview with a writer in which he talks about the novel he has written.',
          q: 'What does he say about the novel?',
          opts: [
            'It would make a good film.',
            'It is a different type of book for him.',
            'It took him a long time to write.',
          ],
          answer: 0,
          transcript: "You hear part of an interview with a writer in which he talks about the novel he has written.\nInterviewer: You have high hopes for this latest novel of yours, don't you?\nMan: I do. It's got everything – action, romance, mystery and a bit of humour. To be honest, if I don't get a phone call from a major studio in the next six months, I'll be very disappointed.\nInterviewer: How long did you spend writing it?\nMan: Compared to my previous novels, it was relatively painless. The words just flew onto the page and I was all done in about six months. Of course, I know the main character so well by now – it is my third book in the series after all.",
          explanation: "官方答案为 A。原文：\"To be honest, if I don't get a phone call from a major studio in the next six months, I'll be very disappointed.\"",
        },
        {
          scenario: 'You hear a hotel owner talking about her hotel.',
          q: 'What does she say about the customer service there?',
          opts: [
            'There is still a lot of room for improvement.',
            'She researched the subject thoroughly in advance.',
            'It is typical of the standards she is trying to achieve.',
          ],
          answer: 2,
          transcript: "You hear a hotel owner talking about her hotel.\nWoman: Many people have commented on the customer service in my hotel. They say we're 'smart without being over the top' as some smart hotels are. I think that's a good summary of our whole business model, actually … of everything I believe in. From the start, we took the decision to provide terrific showers and put duvets on the beds – the very best I could find, because that's the way people sleep nowadays. Those are the fundamentals, the basics. It's the same in our restaurants: good food but nothing elitist. But also, to me, real customer service means staff finding that extra five per cent that sets you apart from other hotels.",
          explanation: "官方答案为 C。原文：\"I think that's a good summary of our whole business model, actually … of everything I believe in.\"",
        },
        {
          scenario: 'You hear two friends talking about a housing development scheme in their town.',
          q: 'The man says that the scheme fails to',
          opts: [
            'satisfy current housing needs.',
            'contribute to the local area.',
            'use all the space available.',
          ],
          answer: 0,
          transcript: "You hear two friends talking about a housing development scheme in their town.\nWoman: I love those new luxury apartments they're building in the city centre. Have you seen them? The restaurants and shops are right on the doorstep.\nMan: They're a great addition to the city, I must admit. They add a bit of class to that part of town and they do provide loads of affordable accommodation for single people and couples. They're selling a particular lifestyle, though. There's a real shortage of family accommodation in the city, and these apartments just don't address that. Mind you, at least they don't take up as much space as all those office blocks which seem to dominate the city.",
          explanation: "官方答案为 A。原文：\"There's a real shortage of family accommodation in the city, and these apartments just don't address that.\"",
        },
        {
          scenario:
            'You hear two people on a discussion programme talking about the way employees dress for work.',
          q: 'What do they agree about?',
          opts: [
            "A company's image suffers if informal clothes are worn.",
            'Employers are less concerned about appearance than previously.',
            'Employees produce better work if they feel more relaxed.',
          ],
          answer: 1,
          transcript: "You hear two people on a discussion programme talking about the way employees dress for work.\nMan: I heard that most people now believe wearing jeans into the office is acceptable.\nWoman: I tend to agree, although there are surely still some professions where only a suit looks presentable – however uncomfortable.\nMan: I think the issue of clothes reflects the fact that most business environments are a lot less formal these days. What's more, people are staying later and later in the office, so it's only fair that companies should allow you to dress more comfortably.\nWoman: With flexible working hours, focusing on attendance or the way you look isn't considered by bosses to be that important any more. If a job's well done, who cares if it's achieved in a T-shirt?",
          explanation: "官方答案为 B。原文：\"With flexible working hours, focusing on attendance or the way you look isn't considered by bosses to be that important any more.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Mark Dawson talking about his visit to the Albuquerque Balloon Festival in New Mexico, USA. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t2-p2.mp3',
      transcript: "You will hear a man called Mark Dawson talking about his visit to the Albuquerque Balloon Festival in New Mexico, USA. For questions 9 to 18, complete the sentences with a word or short phrase.\nYou now have forty-five seconds to look at Part Two.\n\nHello, everyone. My name is Mark Dawson, and I'd like to tell you about a trip I took to a hot air balloon festival that takes place every year in the United States. It's known as the Albuquerque Balloon Festival.\n\nIt's held every October in Albuquerque in New Mexico. Apparently, the first year it took place in 1974, it was February – but then the organiser realised that from then to April there's the possibility of bad weather, so in 1975 it was moved to later in the year.\n\nThe Balloon Festival was started by a businessman. He became very interested in balloons quite by chance. He bought a balloon for a transport company he owned, thinking it would look good in TV advertisements. He loved the experience so much he decided to organise a ballooning event at Albuquerque.\n\nAnyway, the event is held in the desert in New Mexico and the colours and mood of the desert were perfectly reflected in the name of this year's festival – Dreams – last year's was called Up and Away. I was really impressed by the size of the festival when I went. It's actually the largest balloon festival in the world!\n\nThe balloons varied in size from absolutely enormous ones that can carry quite a few people to quite small one- or two-person balloons. The colours of the balloons were amazing. The event that drew the biggest crowds of all was specifically for balloons with unconventional shapes such as cartoon characters and even animals.\n\nAnother event was called The Flight of the Nations. This is when balloons from all the countries represented at the festival take off one by one while music from their country is played. I really loved this, it was fabulous. This event alone lasted around three hours, and people all around were waving flags.\n\nI was really lucky to bump into a real balloon expert who didn't mind at all when I asked him loads of questions.\n\nApparently, one reason for the popularity of this balloon festival is something called the Albuquerque Box. It's a unique wind formation caused by the nearby Sandia Mountains and means that if a balloon rides these winds, its path forms a square. This means the pilot is able to land very near the take-off spot.\n\nLooking at the balloons close up, you can see that the balloon part itself is made of really strong, waterproof material. There are ropes that hold the balloon to the basket, and I was told that if something went wrong, you'd cut these, and the basket would fall off and the balloon would turn into a kind of parachute. Not something I'd like to try!\n\nTo make the balloon rise up in the air, the pilot has to make it lighter. Now I knew that they often did this by emptying the bags of sand hung on the basket because I'd seen that in films. What I didn't realise was that they also carry water which they empty out of the balloon for the same reason.\n\nYou can imagine that there's very little protection from the weather when you're up there in a balloon. But it's not all bad. Large balloons have a curtain that they can pull round the basket to stop the rain coming in. They can leak though, but at least they keep the worst of the rain out.\n\nThe second day of the festival, I got up before breakfast to go and watch 500 balloons take off. It takes your breath away to watch the sunrise as they lift off into the sky. My new ambition now is to go for a trip in a hot-air balloon! I can hardly wait!",
      items: [
        {
          q: 'Mark says ____ was the month when the Albuquerque Balloon Festival was first held.',
          answer: ['February'],
          show: 'February',
          explanation: '官方答案 February：首届热气球节举办的月份。',
        },
        {
          q: 'Mark found out that the organiser had first used a balloon to promote his ____ firm.',
          answer: ['transport'],
          show: 'transport',
          explanation: '官方答案 transport：组织者最初用气球宣传自己的运输公司。',
        },
        {
          q: "Mark liked the theme of the event this year, which was called '____'.",
          answer: ['Dreams'],
          show: 'Dreams',
          explanation: "官方答案 Dreams：今年活动主题名为 'Dreams'。",
        },
        {
          q: 'Mark says the balloons that have unusual ____ are the most popular with visitors.',
          answer: ['shapes'],
          show: 'shapes',
          explanation: '官方答案 shapes：形状奇特的热气球最受游客欢迎。',
        },
        {
          q: 'When Mark saw the Flight of Nations balloons, he particularly enjoyed the ____ of different nationalities.',
          answer: ['music'],
          show: 'music',
          explanation: '官方答案 music：他特别喜欢各国风格的音乐。',
        },
        {
          q: "Mark learned that pilots try to find the 'Albuquerque ____' so they can land in the same place they took off.",
          answer: ['Box'],
          show: 'Box',
          explanation: "官方答案 Box：飞行员会寻找 'Albuquerque Box' 气流以便原地降落。",
        },
        {
          q: 'Mark says that a balloon is attached by ____ to the basket.',
          answer: ['ropes'],
          show: 'ropes',
          explanation: '官方答案 ropes：气球由绳索系在吊篮上。',
        },
        {
          q: 'Mark was surprised to find out that a pilot sometimes needs to get rid of ____ in order to maintain height.',
          answer: ['water'],
          show: 'water',
          explanation: '官方答案 water：飞行员有时需抛掉水来保持高度。',
        },
        {
          q: 'Mark says that in the bigger balloons, there is a ____ to protect passengers from the rain.',
          answer: ['curtain', 'rain curtain'],
          show: '(rain) curtain',
          explanation: '官方答案 (rain) curtain：Key 中 rain 为可选词，两种写法均算对。',
        },
        {
          q: 'On the second day of the festival, Mark saw the balloons take off at ____.',
          answer: ['sunrise', 'dawn'],
          show: 'sunrise/dawn',
          explanation: '官方答案 sunrise/dawn：Key 给出两种写法，均算对。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which students are talking about starting at university. For questions 19–23, choose from the list (A–H) what each speaker says about how they felt. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t2-p3.mp3',
      options: [
        { label: 'A', text: 'I missed my school friends.' },
        { label: 'B', text: 'I was anxious that I might get lost.' },
        { label: 'C', text: 'I was excited about meeting new people.' },
        { label: 'D', text: 'I felt relieved that I understood the lectures.' },
        { label: 'E', text: "I worried that I'd find the work too difficult." },
        { label: 'F', text: "I felt confident that I'd chosen the right course." },
        { label: 'G', text: 'I was disappointed by the number of people on my course.' },
        { label: 'H', text: 'I was impatient to start my course.' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'F', explanation: "官方答案 F。原文：\"But I had great faith in the fact that the course would be what I'd signed up for. And that's been the case.\"", transcript: "Speaker 1\nOn my first day at university, there were a few things I did feel quite concerned about, like whether or not the other students would be the kind of people I'd get on with. But I had great faith in the fact that the course would be what I'd signed up for. And that's been the case. The work's been challenging and stimulating, and naturally there have been times when I haven't been able to follow a lecturer's argument, which is frustrating. But getting on top of things like that is what university study is all about." },
        { speaker: 'Speaker 2', answer: 'H', explanation: "官方答案 H。原文：\"Although I could see the point of that, what I really wanted to do was get on with lectures, essays, and things. After all, I thought, that's why I was there, wasn't it?\"", transcript: "Speaker 2\nThe first day, there weren't any lectures, the focus was on getting to know the other people you'd be studying with for the next few years. Although I could see the point of that, what I really wanted to do was get on with lectures, essays, and things. After all, I thought, that's why I was there, wasn't it? Now I'm actually glad we were given the opportunity to socialise right at the beginning. I made loads of new friends! And I needn't have worried – there's been plenty of work to do since then. In fact, I sometimes struggle to fit it all in." },
        { speaker: 'Speaker 3', answer: 'E', explanation: "官方答案 E。原文：\"A couple of my school friends were doing the same course at another university, and they encouraged me from the very beginning, telling me to believe in myself and stop thinking I wouldn't be able to cope with all the essays and so on.\"", transcript: "Speaker 3\nAt school, I'd always had a close group of friends, and we'd meet to do our homework together. I felt I needed similar support at university as I didn't feel confident in my academic ability. On my first day, I wondered whether I'd meet enough new people who were also interested in working hard, and that turned out to be the case, unfortunately. A couple of my school friends were doing the same course at another university, and they encouraged me from the very beginning, telling me to believe in myself and stop thinking I wouldn't be able to cope with all the essays and so on. And sure enough, I'm finding it fine." },
        { speaker: 'Speaker 4', answer: 'A', explanation: "官方答案 A。原文：\"I kept wishing I was back with my classmates I grew up with.\"", transcript: "Speaker 4\nWe had lectures from the very first day – we were given maps of the university, a timetable, and basically told to get on with it. I didn't find it as hard finding my way around the campus as I did having to make new friends. I kept wishing I was back with my classmates I grew up with. It took a little time for me to settle in because of that, but the first day was the worst. Luckily I'm over it, and there are so many students here that I've found plenty of people I really get on with. But I remember that first day – it was hard." },
        { speaker: 'Speaker 5', answer: 'G', explanation: "官方答案 G。原文：\"I'd expected there to be loads of students on my particular course, but there weren't. That was a let-down, really, but the feeling didn't last long because I went on to meet plenty of interesting people who were studying other subjects.\"", transcript: "Speaker 5\nI'd expected there to be loads of students on my particular course, but there weren't. That was a let-down, really, but the feeling didn't last long because I went on to meet plenty of interesting people who were studying other subjects. Eventually, they became really good friends … just as close as those I'd made at school. Of course I also got to know loads of interesting people doing other courses – it was a real buzz, going from a small school in the countryside to a city university like I did. I really felt the world was opening up for me." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear part of an interview with a marine biologist called Ed Shapiro, who is talking about a diving project in the Pitcairn Islands in the South Pacific. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t2-p4.mp3',
      transcript: "You will hear part of an interview with a marine biologist called Ed Shapiro, who is talking about a diving project in the Pitcairn Islands in the South Pacific. For questions 24 to 30, choose the best answer (A, B or C).\nYou now have one minute to look at Part Four.\n\nInterviewer: I'm in one of the most remote places in the world, the Pitcairn Islands in the South Pacific, with marine biologist, Ed Shapiro. Ed, tell us what you're doing here.\n\nEd: Hi. We're carrying out a survey of the marine environment around the islands, exploring the coral reef on the southern end of one at present. The reef here is unlike any we've come across in terms of varieties and sizes of the organisms. Compared to some areas, it's virtually unspoilt – so our aim is to obtain an idea of what oceans were like before the impacts of global warming and increased levels of CO2, in years to come, however, this area too will become exposed to these things, unless something is done.\n\nInterviewer: Have you been diving today?\n\nEd: I dive every day for at least two hours, in the morning and afternoon. This morning's dive was fairly standard. I was down there for a couple of hours, carrying on with my work documenting the living things I saw on the reef … how they interact with each other in this particular ecological environment. I take photographs as well as recording and logging what I've seen once I'm back on deck.\n\nInterviewer: Is photography essential in order to record marine life?\n\nEd: Yes – I'm learning how to use underwater cameras more effectively. They capture things words can't, though people are completely used to astonishing pictures nowadays. Cameras are one of our tools, not just for documentation but also for getting our message across to the public. But we're always looking for new ways to do this – and it takes more than photos to wake people up …\n\nInterviewer: Do you ever get frightened diving?\n\nEd: Every diver's fear is being lost at sea, which could happen if there's a sudden change in conditions. There's a strict set of safety procedures – we carry a flashlight, plus a special instrument that sends out a signal. I was pretty glad I had that to connect with my colleagues the other day. The waters were choppy, and the strong currents had me drifting – very scary at the depth I was. People think sharks are the scariest thing in the sea, but they don't represent much of a threat … they're a common sight.\n\nInterviewer: So tell us about how your career developed.\n\nEd: Marine biology's a competitive field, and the pay isn't necessarily great. If you're thinking of becoming a marine biologist, you have to accept there's a good chance that you may not find exactly the job you want. A degree and then a doctorate are the classic route – also, get involved with conservation organisations – all of which I did, happily. Then you could find yourself invited on an exciting expedition like this one! I was passionate about the sea as a child. The younger you start diving, the better.\n\nInterviewer: How do you feel being 14,000 kilometres from home? Is homesickness a problem?\n\nEd: It could be, but the whole boat crew and I get along pretty well! There are some great people and we're all caught up in the day-to-day stuff, trying to maximise the benefits of our time here, an experience we may never get again. We don't have time to stay in touch with people back home – we don't forget about them, but time passes quickly. Obviously we do have the occasional dull moment, but there's always something on the boat that needs our attention.\n\nInterviewer: It's an amazing place. You're obviously happy in your work, Ed.\n\nEd: Absolutely. The clarity of the waters around these reefs means fish thrive and we've recorded several new types for the first time – always a highlight in this profession. Several journalists have reported our findings, so that means the story of this marine world's getting out there. We've done surveys of deeper habitats by dropping cameras down to 1,800 metres, revealing some really unusual creatures. Most action, though, is between ten to twenty metres down, where the vast majority of marine life co-exists together on the reef …",
      items: [
        {
          q: 'Ed says that the area his team are currently working in has',
          opts: [
            'made him feel optimistic about the future.',
            'escaped the effects of climate change so far.',
            'exhibited a more limited range of marine life than expected.',
          ],
          answer: 1,
          explanation: "官方答案为 B。原文：\"Compared to some areas, it's virtually unspoilt – so our aim is to obtain an idea of what oceans were like before the impacts of global warming and increased levels of CO2, in years to come, however, this area too will become exposed to these things, unless something is done.\"",
        },
        {
          q: "What happened on Ed's most recent dive?",
          opts: [
            'He gained further understanding of the reef ecosystem.',
            'He carried out some different research activities from his colleagues.',
            'He spent longer than he normally does under water.',
          ],
          answer: 0,
          explanation: "官方答案为 A。原文：\"I was down there for a couple of hours, carrying on with my work documenting the living things I saw on the reef … how they interact with each other in this particular ecological environment.\"",
        },
        {
          q: 'What does Ed say about using cameras to photograph marine life?',
          opts: [
            'He is constantly amazed by what photos can reveal.',
            'He thinks underwater equipment could be improved.',
            'He believes images are a good way to provide information.',
          ],
          answer: 2,
          explanation: "官方答案为 C。原文：\"Cameras are one of our tools, not just for documentation but also for getting our message across to the public.\"",
        },
        {
          q: 'What frightening experience did Ed have recently?',
          opts: [
            'He went diving in dangerous seas.',
            'He lost one of his safety instruments.',
            'He came very close to some sharks.',
          ],
          answer: 0,
          explanation: "官方答案为 A。原文：\"The waters were choppy, and the strong currents had me drifting – very scary at the depth I was.\"",
        },
        {
          q: 'What does Ed think about his career as a marine biologist?',
          opts: [
            'He regrets not taking more risks.',
            "He's glad that he followed the traditional path.",
            'He wonders if he made the decision too early in life.',
          ],
          answer: 1,
          explanation: "官方答案为 B。原文：\"A degree and then a doctorate are the classic route – also, get involved with conservation organisations – all of which I did, happily.\"",
        },
        {
          q: 'How do the expedition members avoid homesickness?',
          opts: [
            'by having regular contact with friends and family',
            'by planning group activities for quiet times',
            'by keeping themselves occupied',
          ],
          answer: 2,
          explanation: "官方答案为 C。原文：\"We don't have time to stay in touch with people back home – we don't forget about them, but time passes quickly. Obviously we do have the occasional dull moment, but there's always something on the boat that needs our attention.\"",
        },
        {
          q: 'Ed says that he is happiest in his work when',
          opts: [
            'he spends time in the deepest areas of the sea.',
            'he discovers previously unknown species.',
            "he feels his team's reports are getting the publicity they deserve.",
          ],
          answer: 1,
          explanation: "官方答案为 B。原文：\"The clarity of the waters around these reefs means fish thrive and we've recorded several new types for the first time – always a highlight in this profession.\"",
        },
      ],
    },
  },
}

// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 62–67（PDF 63–68），答案核对自 Test 3 answer key（Listening 区在书 134 / PDF 135）
// 音频：/audio/fce/std4/std4-t3-p1.mp3 ~ std4-t3-p4.mp3（整 Part 一条）
// 注：书 64 页 Part 2 印刷小标题为 "Total solar eclipses"（数据结构无对应字段，记录于此备查）。

const STD4_L3 = {
  meta: {
    id: 'fce-standard-4-test3-listening',
    title: 'FCE 标准版真题 4 · Test 3',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 62–67',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 3 answer key，书134（PDF135）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t3-p1.mp3',
      items: [
        {
          scenario: 'You hear a man talking to a friend about a bicycle shop.',
          q: 'What is he doing?',
          opts: [
            'recommending the shop to her',
            'explaining how she can get to the shop',
            'suggesting she should have her bike repaired',
          ],
          answer: 0,
          transcript: "You hear a man talking to a friend about a bicycle shop.\nMan: The bike shop I use is in Green Street, next to quite a nice café. Do you remember I told you about it? People often go there to have a coffee and a piece of cake while they're having their bike fixed – I know you'd like that!\nWoman: Yes, I would!\nMan: Anyway, if you ever need to go after work, it isn't far from here. They have a good range of cycling equipment and the staff are very helpful. They also have maps of the local area, with all the best routes for cyclists.\nWoman: OK, thanks. I do need to check a couple of things on my bike …",
          explanation: "官方答案为 A。原文：\"They have a good range of cycling equipment and the staff are very helpful.\"",
        },
        {
          scenario: 'You hear a TV producer talking about reality programmes on TV.',
          q: 'What is the main point she makes about popular reality shows?',
          opts: [
            'The production standards are very high.',
            'They deserve the praise they get.',
            'Their popularity is short-lived.',
          ],
          answer: 2,
          transcript: "You hear a TV producer talking about reality programmes on TV.\nWoman: Some of these reality programmes have enormous viewing figures – they're incredibly popular at the time. But there's a massive difference between the popularity of a game show or a reality show and something that's really going to stand the test of time – to leave a legacy. Don't get me wrong – reality shows entertain and they're well-made, but quality drama series are in a different class. Viewers will be watching those re-runs in fifty years' time, unlike the reality shows. You've got to look at the long game. It's a marathon, not a sprint.",
          explanation: "官方答案为 C。原文：\"Viewers will be watching those re-runs in fifty years' time, unlike the reality shows.\"",
        },
        {
          scenario: 'You hear two writers talking about writing dialogue.',
          q: 'What do they agree about?',
          opts: [
            'Most writers reproduce dialogue they have overheard.',
            'Less experienced writers should work hard to improve their dialogue.',
            'Good writers have a natural ability to write dialogue.',
          ],
          answer: 2,
          transcript: "You hear two writers talking about writing dialogue.\nMan: You have a wonderful ear for natural-sounding dialogue in your novels. Where does that come from? Do you deliberately listen to other people's conversations?\nWoman: I don't consciously do that. But I think writing dialogue is like being able to draw. Some people can, some people can't. Spoken language is quite different from written language, so as a writer, it's a very difficult thing to master … how to write down the language of speech so that it rings true.\nMan: It certainly is interesting that so few writers can produce great dialogue instinctively.",
          explanation: "官方答案为 C。原文：\"But I think writing dialogue is like being able to draw. Some people can, some people can't.\"",
        },
        {
          scenario: "You hear a woman telling a friend about a long train journey she's been on.",
          q: 'Why did the woman enjoy it?',
          opts: [
            'She had some interesting conversations.',
            'She saw some beautiful scenery.',
            'She had a comfortable seat.',
          ],
          answer: 1,
          transcript: "You hear a woman telling a friend about a long train journey she's been on.\nWoman: I really enjoyed that long train journey I did.\nMan: Really? I'd be bored having to sit there and do nothing for eight hours!\nWoman: I didn't mind – I mean you have to make sure you get up and walk around from time to time, because there isn't too much leg room – especially if you're sitting by the window with another passenger next to you, like I was. But what I liked about my seat was the fact that I could relax and think about nothing, and really have time to appreciate all the stunning views. I did try to talk to the woman sitting next to me from time to time, but she mainly wanted to sleep.",
          explanation: "官方答案为 B。原文：\"But what I liked about my seat was the fact that I could relax and think about nothing, and really have time to appreciate all the stunning views.\"",
        },
        {
          scenario: "You hear a man telling a friend about a holiday he's recently been on.",
          q: "He wishes that he'd",
          opts: [
            'taken more photographs.',
            'booked his accommodation online.',
            'got hold of a good guidebook.',
          ],
          answer: 0,
          transcript: "You hear a man telling a friend about a holiday he's recently been on.\nWoman: Hi Kevin, how was your holiday?\nMan: Very relaxing, thanks.\nWoman: Did you book everything online?\nMan: No, only the flights. I went to my local travel agent and they recommended the hotel. I couldn't have found a better deal myself.\nWoman: Was there plenty to see?\nMan: I suppose I'd have been to more places if I'd taken a good guidebook – but I didn't feel the need to see everything there was to see.\nWoman: I know what you mean … So, where are the photos?\nMan: I can show you some now – though unusually for me, there aren't that many. I missed an opportunity there. Anyway, it was great fun.",
          explanation: "官方答案为 A。原文：\"I can show you some now – though unusually for me, there aren't that many. I missed an opportunity there.\"",
        },
        {
          scenario: 'You hear a woman talking on the radio about the arts.',
          q: 'What is she talking about?',
          opts: [
            'a book she knows well',
            'a TV programme she enjoyed watching',
            'a film she has seen many times',
          ],
          answer: 0,
          transcript: "You hear a woman talking on the radio about the arts.\nWoman: It's always been one of my favourite books and I've read it so many times that I've got a really clear picture of what the characters are like and so on. So when I heard they were adapting it for TV, I was a bit anxious, and decided I wouldn't watch it in case it spoilt the book for me. Then I heard that money had been raised to adapt it for the big screen and the author had written the screenplay. I watched it with my friend, who's also a fan, and we loved it – along with the rest of the audience.",
          explanation: "官方答案为 A。原文：\"It's always been one of my favourite books and I've read it so many times that I've got a really clear picture of what the characters are like and so on.\"",
        },
        {
          scenario: 'You hear two students discussing their college.',
          q: 'What do they both like about it?',
          opts: [
            'the attitude of the teachers',
            'the state of the decoration',
            'the quality of the sports facilities',
          ],
          answer: 2,
          transcript: "You hear two students discussing their college.\nGirl: Hi Lucas, how's it going?\nBoy: OK, thanks – though I guess it always takes a little while to get used to a new place.\nGirl: Yeah, I was surprised at the condition of some of the teaching rooms. Bigger windows and a fresh coat of paint would make a huge difference.\nBoy: Hmm, I agree. And I've found it less than easy to actually get hold of some of the staff outside class times, which doesn't reflect well on them. But the football and hockey fields are well-looked after – that isn't the case at a lot of colleges.\nGirl: I must say all my teachers are really approachable and have given me plenty of good advice, and also the gym's very well equipped, so I'm not complaining.",
          explanation: "官方答案为 C。原文：\"But the football and hockey fields are well-looked after – that isn't the case at a lot of colleges.\"",
        },
        {
          scenario:
            'You hear a child psychologist talking about the impact of noise on very young children.',
          q: "In his view, it is the parents' responsibility to",
          opts: [
            'speak more clearly when the environment is noisy.',
            'appreciate the particular problems noise causes.',
            'ensure the amount of noise is kept constant.',
          ],
          answer: 1,
          transcript: "You hear a child psychologist talking about the impact of noise on very young children.\nMan: Recent data from our laboratory suggests that very young children can recognise speech but only when the environment is relatively quiet. If we as adults find a situation too noisy, we can do something about it, we can turn down the TV or radio, or move to a quieter room. Babies can't do that. They depend on us to do it for them. But we're only likely to do this if the noise level is difficult for us too. We need to be much more aware of the impact that this noise might have on children, and make a point of reducing it when we are interacting with our children.",
          explanation: "官方答案为 B。原文：\"We need to be much more aware of the impact that this noise might have on children, and make a point of reducing it when we are interacting with our children.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a woman called Jane Hughes talking about total solar eclipses, which happen when the Moon comes between the Sun and the Earth and blocks out the light from the Sun. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t3-p2.mp3',
      transcript: "You will hear a woman called Jane Hughes talking about total solar eclipses, which happen when the Moon comes between the Sun and the Earth and blocks out the light from the Sun. For questions 9 to 18, complete the sentences with a word or short phrase.\nYou now have forty-five seconds to look at Part Two.\n\nHello, my name's Jane Hughes and I, like a number of people around the world, am fascinated by total solar eclipses. That's when the Moon moves between the Sun and the Earth and blocks out the light from the Sun for a short time. For years, I took absolutely no interest in eclipses, and tended to skip any article on the subject I saw in the newspaper. It wasn't until I was taken to an exhibition that was absolutely fascinating and turned out to be all about them that I realised I'd actually like to witness one for myself.\n\nA total solar eclipse happens approximately every 18 months, somewhere on Earth. And in order to see the full effect, you have to be in a particular place at a particular time. In the case of the first eclipse I went to watch, that place was in Australia. I took the cheapest flight I could find from London to Sydney, and then a train to a small town several hundred kilometres away. I rented a camper van to reach the spot where some other eclipse chasers, as people like me are commonly known, were gathering.\n\nEclipses can happen at any time during daylight hours, and this one took place first thing in the morning. I'll never forget it. It can feel very strange when it suddenly gets dark at one o'clock on a sunny summer's afternoon.\n\nI felt a huge rush of emotion … I've had some memorable experiences in my life, like going on a night dive in Madagascar or finally managing to run a half marathon, but when it went dark, for two long minutes, the closest this came to for me – in terms of sheer excitement – was when I once did a parachute jump. But don't just take my word for it, go out and try it for yourselves if you ever get the opportunity.\n\nAnd just before the total eclipse, as well as just as it ends, there's a tiny flash of brilliant light which astronomers call the 'diamond ring' effect. We were just amazed and stood in complete silence.\n\nSo then I was hooked, and started planning how to see my next eclipse as soon as I got home. That one, my second, would prove to be even more of a challenge to watch. To get as much as three minutes of darkness during this total eclipse, the ideal location would be surrounded by open ocean – a small island – because seen from the nearest large land mass, the eclipse would be far shorter.\n\nHowever, that was easier said than done. A group of us had to travel for about six hours in a little boat, carrying all the food and water we'd need on board. However, the boat we'd hired had no fuel, and until the captain managed to find some, we thought we might not be able to reach our destination.\n\nIt was an exciting trip across some quite rough water, and when we got there, I spread my sleeping bag on the sand. I was very grateful for the mosquito net I'd packed too, which I attached to a tree branch above my head. We went straight to sleep under the stars.\n\nOnce again, it was completely magical. Of course, I realise not everyone can do this, or would want to. You can look online for great photographs of eclipses, as well as video clips and articles explaining the phenomenon. You might even come across a poem I wrote, my attempt to describe how it feels to witness these events.\n\nI'm already dreaming about my next trip. I must buy a tent to take with me – the one I have is far too heavy. I have special glasses so I can watch eclipses without damaging my eyes, and a solar filter for camera lenses is essential. That's all the special equipment I need.\n\nSo, if you'd like to ask anything …",
      items: [
        {
          q: 'Jane says she was encouraged to go and see a total solar eclipse by an interesting ____ she saw.',
          answer: ['exhibition'],
          show: 'exhibition',
          explanation: '官方答案 exhibition：她因看到的一场有趣展览而去观日全食。',
        },
        {
          q: 'Jane hired a ____ to travel to the best location to watch her first eclipse.',
          answer: ['camper', 'camping van'],
          show: 'camper/camping van',
          explanation: '官方答案 camper/camping van：Key 给出两种写法，均算对。',
        },
        {
          q: 'The eclipse Jane saw took place during the early ____.',
          answer: ['morning'],
          show: 'morning',
          explanation: '官方答案 morning：日食发生在清晨。',
        },
        {
          q: 'Jane says watching the eclipse was as exciting for her as doing a ____.',
          answer: ['parachute jump'],
          show: 'parachute jump',
          explanation: '官方答案 parachute jump：看日食的兴奋感如同跳伞。',
        },
        {
          q: 'Jane says the effect at the beginning and end of an eclipse resembles a ____.',
          answer: ['diamond ring'],
          show: 'diamond ring',
          explanation: '官方答案 diamond ring：食始/食终的效果似钻戒（钻石环）。',
        },
        {
          q: 'Jane had to go to a ____ to see her second eclipse.',
          answer: ['small island'],
          show: 'small island',
          explanation: '官方答案 small island：第二次观日食她去了一座小岛。',
        },
        {
          q: "A lack of ____ nearly caused Jane's boat journey to be cancelled.",
          answer: ['fuel', 'gas', 'petrol'],
          show: 'fuel/gas/petrol',
          explanation: '官方答案 fuel/gas/petrol：Key 给出三种写法，均算对。',
        },
        {
          q: 'Jane says she was pleased she had a ____ to hang over herself at night.',
          answer: ['mosquito net'],
          show: 'mosquito net',
          explanation: '官方答案 mosquito net：夜里她庆幸带了蚊帐。',
        },
        {
          q: "Jane's ____ about watching eclipses can be found online.",
          answer: ['poem'],
          show: 'poem',
          explanation: '官方答案 poem：她写的关于观日食的诗可在网上找到。',
        },
        {
          q: 'Jane is going to get a new ____ before she watches her next eclipse.',
          answer: ['tent'],
          show: 'tent',
          explanation: '官方答案 tent：下次观日食前她打算买顶新帐篷。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about walking to work. For questions 19–23, choose from the list (A–H) how each speaker says they benefit from walking to work. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t3-p3.mp3',
      options: [
        { label: 'A', text: 'I have more energy for work.' },
        { label: 'B', text: 'I now appreciate the good things in my life.' },
        { label: 'C', text: 'I am able to adapt my route to how I am feeling.' },
        { label: 'D', text: 'I get to and from work more quickly.' },
        { label: 'E', text: 'It has motivated me to have a better diet.' },
        { label: 'F', text: 'I have been able to appreciate the history of the area better.' },
        { label: 'G', text: "I'm sharing an experience with others." },
        { label: 'H', text: "I've found it a good alternative to other types of exercise." },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'G', explanation: "官方答案 G。原文：\"After I'd opted to walk to work instead of taking the bus, I began to sense a sort of empathy and togetherness with the many workers who were doing the same thing every morning.\"", transcript: "Speaker 1\nWalking any distance is usually a planned leisure activity or some sort of health aid – to help people lose weight or keep fit. But there's something else people get from choosing to walk – it's a space to think. After I'd opted to walk to work instead of taking the bus, I began to sense a sort of empathy and togetherness with the many workers who were doing the same thing every morning. And that's never gone away. I arrive at work in a more laid-back frame of mind, and colleagues say I seem much calmer." },
        { speaker: 'Speaker 2', answer: 'C', explanation: "官方答案 C。原文：\"I can allow myself a certain flexibility, which is good. If I'm a bit stressed I'll make sure I pass through a park or somewhere with some wildlife.\"", transcript: "Speaker 2\nThere's a lot to look at. I'm always spotting strange little streets, interesting cafés, things I wouldn't have paid attention to if I'd driven or taken public transport. It's lucky the distance between my home and office isn't that great, but there's enough variety to offer opportunities for a little urban exploration, and I can allow myself a certain flexibility, which is good. If I'm a bit stressed I'll make sure I pass through a park or somewhere with some wildlife. It's amazing how a relatively small change to my routine has brought so many improvements to my life." },
        { speaker: 'Speaker 3', answer: 'B', explanation: "官方答案 B。原文：\"I've found myself thinking about everything I've got and how fortunate I am.\"", transcript: "Speaker 3\nA lot of people see walking from place to place as time lost from their busy schedules. I used to feel like that and be entirely focused on work, which wasn't great. But in fact, building that extra time into my morning for walking to the office has actually allowed me to take in what's around me, and gives me time. I've found myself thinking about everything I've got and how fortunate I am. It's just as well that I've always eaten a big breakfast before I set off for work … and of course the exercise does me good." },
        { speaker: 'Speaker 4', answer: 'H', explanation: "官方答案 H。原文：\"I got fed up going to the gym in an effort to lose weight and build some muscles – I just couldn't face it after a day at my desk, so I switched to walking to work.\"", transcript: "Speaker 4\nAlthough none of my colleagues have commented on the difference in how I look, I've been pleased with the change. I got fed up going to the gym in an effort to lose weight and build some muscles – I just couldn't face it after a day at my desk, so I switched to walking to work. And now I never feel bad about walking even when it's a bit chilly. And whereas once I would've jumped on a bus, which would've been quicker, now I just enjoy the fresh air." },
        { speaker: 'Speaker 5', answer: 'A', explanation: "官方答案 A。原文：\"I reckon once you get the blood flowing through the brain it starts working faster and more creatively. It means by the time I get to the office I can really focus on a task and get things done.\"", transcript: "Speaker 5\nI've been walking to work for months – I must know every road there is in the area between my flat and my office. Walking requires a certain amount of attention, but it leaves enough of the time open to thinking. I reckon once you get the blood flowing through the brain it starts working faster and more creatively. It means by the time I get to the office I can really focus on a task and get things done. I used to be like my colleagues – drinking coffee and feeling sleepy. I find I have brighter eyes and clearer skin too, despite all the invisible pollution in cities." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with a woman called Sarah Featherstone, who runs a website called Coffee Lovers. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t3-p4.mp3',
      transcript: "You will hear an interview with a woman called Sarah Featherstone, who runs a website called Coffee Lovers. For questions 24 to 30, choose the best answer (A, B or C).\nYou now have one minute to look at Part Four.\n\nInterviewer: Welcome to the programme, Sarah. What gave you the idea for starting a website on coffee shops in the UK?\n\nSarah: Well, in most other European countries there's a well-established coffee culture, but here in Britain it started considerably later. There was a time when tourists had to search far and wide for a decent cup of coffee. In recent years we've had a number of big international companies come in and put identical coffee shops in every city centre, but my website is about the small, independent, coffee shops. Their product is generally far superior, in my view, and they often struggle against the financial might of these big internationals, so I suppose I wanted to promote them.\n\nInterviewer: Now, tell us a bit about your coffee website.\n\nSarah: Well in its current form, users are directed to a menu of different towns – that's a new development. Clicking on the one you want brings up a webpage for each recommended coffee shop, where you can find a written review by us, tons of photos, a map, and a link to a customer review page which is starting to grow. And it's all paid for by external advertising … not by the coffee shops! Obviously if coffee shops were allowed to advertise, that would be against the spirit of the website, as it's meant to be unbiased opinion, not somewhere for the shops to publicise themselves.\n\nInterviewer: So I imagine you must reject some of the coffee shops you visit?\n\nSarah: Yes … two out of every three, usually, and don't make it onto the site. Last week we rejected a place where the seating and décor just weren't welcoming. With most places the coffee itself is good … it's rare for it to be bad enough to put us off. More often it would be the attitude of the staff that didn't please us for one reason or another when we visited.\n\nInterviewer: So what did you write about the coffee shop we're in now, the Old Mill House?\n\nSarah: Well we like very small coffee shops that have real character, and also an unusual and unique selling point for the public. The Old Mill House have always been great at this. It used to be their colourful plants and interesting paintings, but other shops soon copied them. Now it's the humorous messages they put up on their chalk boards – things like special offers, requests to visitors, and so on. Other places in the city have fantastic, unique ideas too – such as board games for customers to play.\n\nInterviewer: And we're going next to one called the Pink Peacock?\n\nSusan: Yes, at the Peacock they've really set out to make the accompanying food their specialty. Their pies are nothing short of amazing, although they are a bit pricey. But what strikes you with a place so small is that they seem to be able to cater for every request: gluten-free cakes, wheat-free bread, lactose-free milk. And they appear to do an excellent takeaway trade, so they're clearly very well organised and well supplied.\n\nInterviewer: So Sarah … tell me a bit about why you set up your own business.\n\nSarah: Well, after leaving college I got through quite a few part-time jobs, including a couple as a waitress. Then I worked as an administrator in a law firm … I was there for ten years until unfortunately I was made redundant. I decided to use my redundancy money to set up a business, and after a lot of research … and I guess thinking back to my earlier waitressing days … I thought about opening a coffee shop. Well, doing that seemed an easy way of losing all my money if I got it wrong, but the website … that idea seemed a better path to follow.\n\nInterviewer: And what plans do you have for your website in the future?\n\nSarah: Well, it's important to keep moving with it. The obvious thing is to start covering coffee shops abroad and to see whether that's popular. To limit it I might just start off with capital cities in Europe. Longer-term I do intend to look into the possibility of an app which would alert people to the nearest good coffee shop. Also some kind of rating system like using stars is something I've been considering for ages … although with that idea I don't want to be seen to be copying other similar websites.",
      items: [
        {
          q: 'Sarah says she started her website to try to',
          opts: [
            'help a particular type of coffee shop.',
            'inform tourists with a limited budget.',
            'change the attitude of certain big companies.',
          ],
          answer: 0,
          explanation: "官方答案为 A。原文：\"my website is about the small, independent, coffee shops. Their product is generally far superior, in my view, and they often struggle against the financial might of these big internationals, so I suppose I wanted to promote them.\"",
        },
        {
          q: 'What does Sarah say about changes to the website?',
          opts: [
            'Reviews from users are the main feature.',
            'Interested clients have to apply to be included.',
            'The basic design layout has been reorganised.',
          ],
          answer: 2,
          explanation: "官方答案为 C。原文：\"Well in its current form, users are directed to a menu of different towns – that's a new development.\"",
        },
        {
          q: 'The most likely reason for excluding a coffee shop from the website is',
          opts: [
            'an unattractive building.',
            'poor customer service.',
            'the taste of the product.',
          ],
          answer: 1,
          explanation: "官方答案为 B。原文：\"More often it would be the attitude of the staff that didn't please us for one reason or another when we visited.\"",
        },
        {
          q: 'What does Sarah praise the Old Mill House coffee shop for?',
          opts: [
            'the style of their notices to customers',
            'the attractive interior',
            'the entertainment they provide',
          ],
          answer: 0,
          explanation: "官方答案为 A。（Old Mill House 为书内斜体店名）原文：\"Now it's the humorous messages they put up on their chalk boards – things like special offers, requests to visitors, and so on.\"",
        },
        {
          q: 'What does Sarah think about the food served in the Pink Peacock?',
          opts: [
            "It's the best takeaway food in the neighbourhood.",
            "It's suitable for those with special dietary needs.",
            "It's good value for money.",
          ],
          answer: 1,
          explanation: "官方答案为 B。（Pink Peacock 为书内斜体店名）原文：\"But what strikes you with a place so small is that they seem to be able to cater for every request: gluten-free cakes, wheat-free bread, lactose-free milk.\"",
        },
        {
          q: 'When setting up her own business, Sarah was very aware of the need',
          opts: [
            'to try out a completely new field.',
            'to avoid taking financial risks.',
            'not to repeat previous mistakes.',
          ],
          answer: 1,
          explanation: "官方答案为 B。原文：\"Well, doing that seemed an easy way of losing all my money if I got it wrong, but the website … that idea seemed a better path to follow.\"",
        },
        {
          q: 'When asked about plans for her website, Sarah says her immediate priority is',
          opts: [
            'to introduce a star system.',
            'to experiment with an international section.',
            'to develop a new app.',
          ],
          answer: 1,
          explanation: "官方答案为 B。原文：\"The obvious thing is to start covering coffee shops abroad and to see whether that's popular. To limit it I might just start off with capital cities in Europe.\"",
        },
      ],
    },
  },
}

// Source: B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）
// Listening: 书页 82–87（PDF 83–88），答案核对自 Test 4 answer key（Listening 区在书 146 / PDF 147）
// 音频：/audio/fce/std4/std4-t4-p1.mp3 ~ std4-t4-p4.mp3（整 Part 一条）
// 注：书 84 页 Part 2 印刷小标题为 "Helping to organise a music festival"（数据结构无对应字段，记录于此备查）。
// 注：Q12 Key 写作 "35,000/thirty-five thousand"，照录两种写法（未自行增加无逗号的 35000 变体）。

const STD4_L4 = {
  meta: {
    id: 'fce-standard-4-test4-listening',
    title: 'FCE 标准版真题 4 · Test 4',
    level: 'FCE',
    collection: 'Cambridge English First 4（标准版4）',
    book: 'Cambridge English First 4',
    paper: 'Listening',
    pages: '书 82–87',
    source: 'B2 FIRST 4 WITH ANSWERS.pdf（用户原件扫描版）',
    answerSource: 'Test 4 answer key，书146（PDF147）',
    verified: true,
  },
  parts: {
    1: {
      title: 'Part 1 · 情境选择',
      type: 'mcq_situation',
      instruction:
        'You will hear people talking in eight different situations. For questions 1–8, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t4-p1.mp3',
      items: [
        {
          scenario: 'You hear an actress talking about her new part in a play.',
          q: 'Why did she choose to accept it?',
          opts: [
            'She wanted to work with the main male actor.',
            'She was attracted by the strong female role.',
            'She wanted a change from her TV work.',
          ],
          answer: 1,
          transcript: "You hear an actress talking about her new part in a play.\nWoman: I think it's a great show, which gives the audience a fantastic night out. There are plenty of laughs, but there are also moments when the audience will gasp at what they see. It's such a great part for a woman of my age and there aren't many of those about. My character, the mother, finds her loyalties divided within the family. It's powerful stuff and that's why I jumped at the chance of playing her. The male lead is played by Sam Yates. I've worked closely with him before on TV, but it'll be fun for both of us to see if we can re-create the chemistry between us on stage.",
          explanation: "官方答案为 B。原文：\"It's such a great part for a woman of my age and there aren't many of those about.\"",
        },
        {
          scenario: 'You hear two friends talking about a restaurant.',
          q: 'What do they agree about it?',
          opts: [
            'The service could be improved.',
            'The food looked unappealing.',
            'The interior was badly designed.',
          ],
          answer: 0,
          transcript: "You hear two friends talking about a restaurant.\nWoman: Well, they've really changed that place, haven't they? The first time we went, it was like going back in time – and not in a good way!\nMan: And the menu wasn't very inspiring then either. I was surprised when you suggested going there again actually.\nWoman: Well, I heard it was under new management and had improved, and I just wanted to see what they'd done. It certainly seems to be working. There were people waiting for tables this time and the staff could hardly keep up. They were rushed off their feet.\nMan: I felt sorry for them. They need to take on more people.",
          explanation: "官方答案为 A。原文：\"I felt sorry for them. They need to take on more people.\"",
        },
        {
          scenario: 'You hear two students talking about a visit to a museum.',
          q: 'What does the man say about their guide?',
          opts: [
            'He knew a lot about the exhibits.',
            'He gave clear answers to questions.',
            'He made a difficult subject interesting.',
          ],
          answer: 0,
          transcript: "You hear two students talking about a visit to a museum.\nWoman: I must say I don't always enjoy tours of museum galleries, but I thought the guide was really good, didn't you?\nMan: Well yeah, I mean luckily ancient Egypt is a fascinating topic, so he already had our interest before he even opened his mouth. But I agree he was great, and clearly very familiar with all the objects in the gallery – he could probably have spent the whole time talking about just one or two of them.\nWoman: I'm glad he didn't though!\nMan: I know – there were so many different things to see – but it would've been good to have the chance to ask more questions, wouldn't it?\nWoman: Yes, you're right.",
          explanation: "官方答案为 A。原文：\"But I agree he was great, and clearly very familiar with all the objects in the gallery – he could probably have spent the whole time talking about just one or two of them.\"",
        },
        {
          scenario: 'You hear a talk given by a child psychologist.',
          q: 'The purpose of her talk is to',
          opts: [
            'warn of the potential dangers of outdoor play.',
            'highlight the findings of some recent health research.',
            'persuade people to give their children more freedom.',
          ],
          answer: 2,
          transcript: "You hear talk given by a child psychologist.\nWoman: Parental restrictions on outdoor play have considerable consequences for children's health and future well-being. Kids should have space to explore and run around. Also, playing in the dirt seems to strengthen the immune system; in other words, it stimulates the body's defences. If you restrict outdoor play, you also restrict stimulation of the immune system. The system then responds inappropriately to stimuli, and that probably explains the rise in allergies such as asthma. Without free outdoor play, kids lack the ability to get together and play spontaneously. Playing freely with others lets kids develop their social skills, and when free play is denied, so are those opportunities.",
          explanation: "官方答案为 C。原文：\"Parental restrictions on outdoor play have considerable consequences for children's health and future well-being. Kids should have space to explore and run around.\"",
        },
        {
          scenario:
            'You hear part of a radio phone-in discussion about a proposal to redevelop one part of a city.',
          q: 'Why is the man calling the programme?',
          opts: [
            'to express concern about how the project may affect local residents',
            'to question the motivation behind the plan',
            'to point out the likely environmental impact of any changes',
          ],
          answer: 0,
          transcript: "You hear part of a radio phone-in discussion about a proposal to redevelop one part of a city.\nWoman: We're discussing the recently announced proposal to demolish the old athletics stadium in the city and build three new apartment blocks on the site. Our next caller is Dennis.\nMan: Hi. A couple of questions came to me about this proposal. How many people from the area could really afford a flat in the kind of buildings the developers have in mind? And, while it might seem ridiculous to question the idea of creating a green space planted with trees around the site, would young people be able to use it for sports and other activities or would it be intended – as seems likely – for the occupants of the new luxury blocks?",
          explanation: "官方答案为 A。原文：\"How many people from the area could really afford a flat in the kind of buildings the developers have in mind? And, while it might seem ridiculous to question the idea of creating a green space planted with trees around the site, would young people be able to use it for sports and other activities or would it be intended – as seems likely – for the occupants of the new luxury blocks?\"",
        },
        {
          scenario:
            'You hear two people talking on the radio about an exhibition of work by a wildlife photographer.',
          q: 'What do they both say about the photos?',
          opts: [
            'The lack of variety was disappointing.',
            'The technique used in them was unusual.',
            "The photographer's aims were unclear.",
          ],
          answer: 1,
          transcript: "You hear two people talking on the radio about an exhibition of work by a wildlife photographer.\nMan: I expected the photos to be of animals in the wild rather than with all the natural background taken out. It made for a powerful effect without the details that a lot of photographers tend to be interested in.\nWoman: They were all shot in that style so you focused on the animals themselves. I guess that was his intention as a photographer – to force you to observe their faces.\nMan: There's little doubt about that. He's trying to draw attention to sadness at the loss of their natural environment. Quite depressing. Those ones of the gorillas all had that same effect on me.\nMan: Avoiding the standard settings for wildlife shots had stunning results.",
          explanation: "官方答案为 B。原文：\"Avoiding the standard settings for wildlife shots had stunning results.\"",
        },
        {
          scenario: 'You hear a man telling a colleague about a workshop he will attend.',
          q: 'What does the man have to do before the workshop?',
          opts: [
            'listen to some online material',
            'read some written information',
            'think of some questions to bring up',
          ],
          answer: 0,
          transcript: "You hear a man telling a colleague about a workshop he will attend.\nWoman: So you're off to that workshop, I see.\nMan: I think the workshop is going to be quite hard work actually. You're allowed to attend on condition that you've done some preparation for it. I've read a few articles by the main presenters – just because I was interested – it wasn't a requirement. And I've heard a series of podcasts. They sent us a link to those in the pre-course information email. We need to do that beforehand so we get the best out of the day. During the workshop we're encouraged to take notes and raise any issues that concern us, but we can't film or take photos.",
          explanation: "官方答案为 A。原文：\"And I've heard a series of podcasts. They sent us a link to those in the pre-course information email. We need to do that beforehand so we get the best out of the day.\"",
        },
        {
          scenario: 'You hear two friends talking about the football team they support.',
          q: 'How does the man feel about the manager of the team?',
          opts: [
            'concerned about his ability to motivate the players',
            'disappointed with the style of play he encourages',
            'worried about his attitude towards journalists',
          ],
          answer: 1,
          transcript: "You hear two friends talking about the football team they support.\nWoman: So, we won again last night.\nMan: Yeah, I watched it on TV. I've seen many more entertaining matches than that, but at least we didn't lose.\nWoman: Apparently, the manager had another row with some newspaper reporters. They asked him why he hadn't selected certain players for the match, and he said it was none of their business. He was quite rude, I think.\nMan: Well, it gives reporters something to write about, so I doubt if they're bothered really. The fact is, though, that team haven't been at all exciting to watch recently, and that's the manager's responsibility. He isn't interested in exciting footballers – winning's everything for him, which is a pity.",
          explanation: "官方答案为 B。原文：\"The fact is, though, that team haven't been at all exciting to watch recently, and that's the manager's responsibility. He isn't interested in exciting footballers – winning's everything for him, which is a pity.\"",
        },
      ],
    },
    2: {
      title: 'Part 2 · 句子填空',
      type: 'blanks',
      instruction:
        'You will hear a man called Victor Medway talking to some students about his job, helping to organise a music festival. For questions 9–18, complete the sentences with a word or short phrase.',
      audio: '/audio/fce/std4/std4-t4-p2.mp3',
      transcript: "You will hear a man called Victor Medway talking to some students about his job, helping to organise a music festival. For questions 9 to 18, complete the sentences with a word or short phrase.\nYou now have forty-five seconds to look at Part Two.\n\nHello. My name's Victor Medway and I'm responsible for planning and organising music festivals.\n\nSo, how did I come to be in this line of work? I've actually had a passion for music since my early teens, and my dream was to be a DJ on the radio. Alternatively, I wanted to be the producer of radio programmes. I never managed to land that kind of job, but I did end up as a research assistant on radio shows. I enjoyed that for a while and it gave me some useful experience.\n\nBut after a couple of years I wanted to try something different and my friend suggested volunteering at a music festival. In exchange for free entry to the festival, you work for a few hours each day. For example, a volunteer might help out by providing first aid or handing out bottles of water. I started by cleaning up during a festival. After four days of that, I decided I'd try and get a paid job with a music festival, and I got lucky.\n\nSo just to give you an idea of what my job is like, at the moment I'm booking the acts for a summer festival called Wavelength. This year, we'll have about eighty acts in total. We'll be opening with Antimatter, the electronic dance music act, while the final-day headliners are the rock legends, Ghost. Earlier this week, I managed to persuade a world-famous heavy metal band – I'm not allowed to name them yet – to appear on day two.\n\nThe first Wavelength festival took place ten years ago, and it's grown enormously since then. In the first year, about 5,000 people turned up. Now, based on ticket applications, we reckon we could attract around 75,000 over the four days, although the size of the venue restricts us to 35,000. Tickets for this year are sold out, by the way.\n\nWavelength has changed in other ways over the years. The facilities are better than they were, and the whole operation is run with greater efficiency. In the past, Wavelength was often accused of not having enough diversity – too many acts looked and sounded the same. We still get comments like that but there's nothing really to justify them now. This year's line-up has music to suit all tastes.\n\nAlso, while music is still the main focus of Wavelength, with four different stages for it, we do cater for other interests. We have a large tent for comedy acts each year, and this time round we've got people performing live poetry – something we've never had before. We even have a tent where circus performers entertain festival-goers.\n\nI spend lots of time keeping track of the music scene globally. It's important to have the latest information about things like album releases and bands' touring schedules. I also go to music festivals around the world, mainly because of the inspiration I get there – seeing different ways of presenting music, for example, or certain musicians who I might end up booking for Wavelength.\n\nOf course, every organiser wants their own festival to get the best acts and the biggest crowds, so there's competition between them. When it comes to festivals with similar musical profiles, there's often a particular rivalry. But I actually talk a lot to other festival organisers and over time a network has formed, which has been very useful for sharing information and advice.\n\nI have contact with other music industry people too. Musicians themselves can be unpredictable, but once you get to know them, they're usually fine. Their agents – the people you make bookings with – are often quite awkward to deal with. You'd think they'd jump at the publicity that festival appearances can give their clients. Musicians' managers are often demanding too, but you can understand why – their role is to protect their acts.\n\nTo succeed as a festival organiser, you need to be persuasive – and, fortunately, I have pretty effective communication skills – something I was born with, I guess. It's also important to be good at administration, and I've had to make a big effort to achieve that. A love of music definitely helps too, though you don't have to be a musician – my musical skills are very limited.",
      items: [
        {
          q: 'Victor worked as a ____ for radio programmes before becoming a festival organiser.',
          answer: ['research assistant', 'researcher'],
          show: 'research assistant/researcher',
          explanation: '官方答案 research assistant/researcher：Key 给出两种写法，均算对。',
        },
        {
          q: "Victor's work as a volunteer involved ____ at a music festival.",
          answer: ['cleaning', 'cleaning up'],
          show: 'cleaning (up)',
          explanation: '官方答案 cleaning (up)：Key 中 up 为可选词，两种写法均算对。',
        },
        {
          q: "Victor recently booked a well-known group who play ____ music for this year's music festival.",
          answer: ['heavy metal'],
          show: 'heavy metal',
          explanation: '官方答案 heavy metal：今年音乐节请了演奏重金属音乐的知名乐队。',
        },
        {
          q: 'A maximum number of ____ people are allowed to attend the festival.',
          answer: ['35,000', 'thirty-five thousand'],
          show: '35,000/thirty-five thousand',
          explanation: '官方答案 35,000/thirty-five thousand：Key 给出数字与英文两种写法，均算对。',
        },
        {
          q: 'Victor says that criticising his festival for a lack of ____ is no longer fair.',
          answer: ['diversity'],
          show: 'diversity',
          explanation: '官方答案 diversity：再批评音乐节缺乏多样性已有失公平。',
        },
        {
          q: 'The festival will include ____ acts as a new feature this year.',
          answer: ['poetry', 'live poetry'],
          show: '(live) poetry',
          explanation: '官方答案 (live) poetry：Key 中 live 为可选词，两种写法均算对。',
        },
        {
          q: 'Victor attends other music festivals for the ____ they provide.',
          answer: ['inspiration'],
          show: 'inspiration',
          explanation: '官方答案 inspiration：他参加别的音乐节是为了获取灵感。',
        },
        {
          q: 'Victor welcomes the development of a ____ of festival organisers.',
          answer: ['network'],
          show: 'network',
          explanation: '官方答案 network：他乐见音乐节组织者网络的发展。',
        },
        {
          q: "Victor says he's surprised that musicians' ____ are sometimes difficult to work with.",
          answer: ['agents'],
          show: 'agents',
          explanation: '官方答案 agents：有时难以共事的是音乐人的经纪人。',
        },
        {
          q: 'Victor has worked hard to improve his ____ skills.',
          answer: ['admin', 'administration', 'administrative'],
          show: 'admin(istration)/administrative',
          explanation: '官方答案 admin(istration)/administrative：Key 展开为 admin、administration、administrative 三种写法。',
        },
      ],
    },
    3: {
      title: 'Part 3 · 说话人匹配',
      type: 'matching',
      instruction:
        'You will hear five short extracts in which people are talking about a cookery course they participated in. For questions 19–23, choose from the list (A–H) what each speaker liked best about the course. Use the letters only once. There are three extra letters which you do not need to use.',
      audio: '/audio/fce/std4/std4-t4-p3.mp3',
      options: [
        { label: 'A', text: 'watching a professional cook an unusual dish' },
        { label: 'B', text: 'using modern equipment' },
        { label: 'C', text: 'meeting different people' },
        { label: 'D', text: 'cooking with fresh ingredients' },
        { label: 'E', text: 'learning new cooking techniques' },
        { label: 'F', text: "trying other people's cooking" },
        { label: 'G', text: 'mastering new recipes' },
        { label: 'H', text: 'discovering how quick some dishes can be to cook' },
      ],
      items: [
        { speaker: 'Speaker 1', answer: 'E', explanation: "官方答案 E。原文：\"When it came to baking, I got to grips with some really clever tricks of the trade, and that was really valuable for me.\"", transcript: "Speaker 1\nMy mother paid for me and my sister to do a cake-making course. Our class had the teacher's undivided and expert attention, along with her two assistants, for the morning, making four cakes using the traditional ingredients. The teacher really knew her stuff. When it came to baking, I got to grips with some really clever tricks of the trade, and that was really valuable for me. We'd tried making the same cakes before – although they'd never worked out, but under her expert guidance, we managed to produce some very professional-looking cakes. They even tasted good too! My Mom was very impressed. She thought we'd popped into a shop on the way home and bought them!" },
        { speaker: 'Speaker 2', answer: 'C', explanation: "官方答案 C。原文：\"The high spot of the course, though, was just spending time with my fellow students – sitting down around a big table and chatting about our dishes.\"", transcript: "Speaker 2\nThe chef, Stefan, was very enthusiastic and had a great sense of humour, which is very important when you have such a diverse group of students. The kitchen was well equipped, although the two cookers were pretty ancient, and we had to provide our own ingredients. We all got to decide what dish we wanted to cook, and there were some very interesting ideas. In the end, mine seemed to be the one everyone wanted to taste. The high spot of the course, though, was just spending time with my fellow students – sitting down around a big table and chatting about our dishes." },
        { speaker: 'Speaker 3', answer: 'G', explanation: "官方答案 G。原文：\"I'm a vegetarian and I booked a course on vegetarian cooking as a way of increasing the range of recipes I can prepare.\"", transcript: "Speaker 3\nI'm a vegetarian and I booked a course on vegetarian cooking as a way of increasing the range of recipes I can prepare. The day was extremely well organised. Our instructor John was incredibly knowledgeable and if you wanted advice about anything, he would willingly give it to you. There were only six students, which meant we all got plenty of help and all got involved in each other's cooking experience … although some people didn't know when to hold back. I now have exactly what I wanted – a variety of dishes that allows me to meet my own dietary needs as well as keep a hungry family satisfied. What more could you want?" },
        { speaker: 'Speaker 4', answer: 'D', explanation: "官方答案 D。原文：\"There was, quite rightly, a real emphasis on sourcing good quality produce straight from the fields, which I particularly appreciated. You could certainly taste the difference in the finished dish!\"", transcript: "Speaker 4\nThe class was limited to 12 students, with plenty of preparation space for each person. Each day we were given a set of recipes, each revolving around a theme. There was, quite rightly, a real emphasis on sourcing good quality produce straight from the fields, which I particularly appreciated. You could certainly taste the difference in the finished dish! The teacher was always available when you needed her. I really felt I was in good hands. If you got stuck on some of the more technical bits, she was always more than happy to fully explain the problem, addressing the entire class, so we really learnt as a group." },
        { speaker: 'Speaker 5', answer: 'B', explanation: "官方答案 B。原文：\"The kids really enjoyed experimenting with chocolate recipes – they came up with some crazy ideas for dishes, but what really made it for me was getting to use the state-of-the-art cooker. I could never have afforded anything like that at home.\"", transcript: "Speaker 5\nAs a parent, I'm always looking for activities that will stimulate and educate my children rather than simply entertain them, so I signed us all up for a cookery course. The kids really enjoyed experimenting with chocolate recipes – they came up with some crazy ideas for dishes, but what really made it for me was getting to use the state-of-the-art cooker. I could never have afforded anything like that at home. The challenge of making such delicious recipes really stretched us all, but when you're using the most up-to-date things available, everything seems much simpler. The teacher was so patient and really knew her stuff. I'd definitely take the kids on one of these again." },
      ],
    },
    4: {
      title: 'Part 4 · 长对话选择',
      type: 'mcq',
      instruction:
        'You will hear an interview with Terry Bankcroft, whose company Get Running organises overseas marathons, talking about his work. For questions 24–30, choose the best answer (A, B or C).',
      audio: '/audio/fce/std4/std4-t4-p4.mp3',
      transcript: "You will hear an interview with Terry Bankcroft, whose company, Get Running, organises overseas marathons, talking about his work. For questions 24 to 30, choose the best answer (A, B or C).\nYou now have one minute to look at Part Four.\n\nInterviewer: Terry, now thank you for coming to speak to us today about your business called Get Running. Now, you organise marathons all over the world. How did you get into running in the first place?\n\nTerry: Well, I had a successful career sitting in front of a computer, creating websites and designing apps. Then I met my wife and we discovered that we were both creative types who'd done a lot of running when we were younger. But as time went by, work and stuff had taken over. Jenny started running again about eight years ago. I didn't jump on the bandwagon straightaway, but I cheered her on from the side-lines! Her passion and energy were infectious and I took up running again.\n\nInterviewer: Are you still as keen on running now as you were then?\n\nTerry: Back then, when I started, it seemed like a lot of hard work and there's no denying it – it was painful! But as my endurance increased, I moved on from short distances and then I started competing. I don't think I'll ever stop – I can't imagine not doing it. It's led on to other things too. Now I mountain-bike, snowboard, ski – I'll try most things. I've become a more active all-round athlete.\n\nInterviewer: Now, you organise international running events. What aspect do you find most challenging?\n\nTerry: The planning is very time consuming. We spend months recruiting staff and volunteers, handling the advertising and promotion, and the logistics. Runners don't see all that and often query the cost of entry to the race. Having to explain that is the worst part for me. Another tricky bit is co-ordinating with government officials in the area. Cultural differences can cause misunderstandings, so I hand that part over to our local staff and I don't get involved.\n\nInterviewer: You organise races in some interesting parts of the world. How do you choose the locations?\n\nTerry: It's my own preference really. I've run all types of races and the ones I really remember are where I've gone off the beaten track and into nature. It's something magical to experience that. We chose our latest race site when we were on holiday in this amazing, lush region of China. I love taking the runners off the touristy path, into breathtakingly beautiful but remote locations.\n\nInterviewer: You make good use of local volunteers to help run your races.\n\nTerry: Yes, volunteers are the key to successful athletic events. It's a huge task to stage a race; the list of responsibilities we ask the volunteers to undertake is endless. In some respects, the runners are the stars of the show, but I make sure that the volunteers also get their moment in the spotlight too. Most of them are runners themselves, so they get a big kick out of helping out the competitors.\n\nInterviewer: Now, tell me about the package tour side of what you do.\n\nTerry: Yes, well, I organise the races, often with the assistance of a local partner organisation in the country concerned, but also I organise tours for the many runners who take part from overseas. They're responsible for their flights, but after that I take over … transporting them to and from the race site by coach. I provide two nights' lodging, all meals and a separate sightseeing trip.\n\nInterviewer: Now, on the running side, what advice would you give to a first-time runner in one of your events?\n\nTerry: Well, don't get carried away in the excitement and go off too fast, only to run out of energy later. Also, just focus on your own running form and on giving your own best performance as well as you can. You can't control things like the weather, the other participants, possible injuries … anything can happen. You mustn't let thoughts of these things distract you.",
      items: [
        {
          q: 'Terry got involved in running because he was',
          opts: [
            'keen to change his lifestyle.',
            'interested in starting a new hobby.',
            'motivated to do so by another person.',
          ],
          answer: 2,
          explanation: "官方答案为 C。原文：\"Her passion and energy were infectious and I took up running again.\"",
        },
        {
          q: 'What does Terry say about his own running?',
          opts: [
            "It's a fundamental part of his life.",
            "It's less enjoyable than other sports.",
            'He now prefers to do shorter races.',
          ],
          answer: 0,
          explanation: "官方答案为 A。原文：\"I don't think I'll ever stop – I can't imagine not doing it.\"",
        },
        {
          q: 'Terry thinks the most challenging aspect of organising a race is',
          opts: [
            'justifying the cost of the race fee to the runners.',
            'dealing with people in authority overseas.',
            'ensuring that preparations are completed on time.',
          ],
          answer: 0,
          explanation: "官方答案为 A。原文：\"Runners don't see all that and often query the cost of entry to the race. Having to explain that is the worst part for me.\"",
        },
        {
          q: 'What is important to Terry when considering a location for a new race?',
          opts: [
            'how easily accessible it is',
            'how well he knows the area',
            'how visually appealing the landscape is',
          ],
          answer: 2,
          explanation: "官方答案为 C。原文：\"We chose our latest race site when we were on holiday in this amazing, lush region of China. I love taking the runners off the touristy path, into breathtakingly beautiful but remote locations.\"",
        },
        {
          q: 'Terry says the volunteers who help out at his races',
          opts: [
            'are often new to running.',
            'get little recognition for the work they do.',
            'find helping at events rewarding.',
          ],
          answer: 2,
          explanation: "官方答案为 C。原文：\"Most of them are runners themselves, so they get a big kick out of helping out the competitors.\"",
        },
        {
          q: 'Terry explains that the race package tours for overseas participants',
          opts: [
            'cover the cost of air travel.',
            'are handled exclusively by local companies.',
            'include local accommodation.',
          ],
          answer: 2,
          explanation: "官方答案为 C。原文：\"I provide two nights' lodging, all meals and a separate sightseeing trip.\"",
        },
        {
          q: "What is Terry's advice to people who are racing for the first time?",
          opts: [
            'Try to get a good position early on in the race.',
            'Concentrate on running your own race.',
            'Take great care to avoid any injuries.',
          ],
          answer: 1,
          explanation: "官方答案为 B。原文：\"Also, just focus on your own running form and on giving your own best performance as well as you can.\"",
        },
      ],
    },
  },
}

export const fceStandardListeningTests = [STD1_L1, STD1_L2, STD1_L3, STD1_L4, STD2_L1, STD2_L2, STD2_L3, STD2_L4, STD3_L1, STD3_L2, STD3_L3, STD3_L4, STD4_L1, STD4_L2, STD4_L3, STD4_L4]
