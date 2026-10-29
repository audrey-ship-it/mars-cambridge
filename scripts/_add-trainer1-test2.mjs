// 追加 Trainer 1 Test 2 的阅读/写作/口语数据到对应数据文件。
import fs from 'node:fs';

const eolOf = s => (s.includes('\r\n') ? '\r\n' : '\n');

function insertIntoArrayFile(file, marker, block) {
  let src = fs.readFileSync(file, 'utf8');
  if (src.includes('ket-trainer1-test2')) { console.log(file, 'already has test2'); return; }
  const i = src.lastIndexOf(marker);
  if (i < 0) throw new Error(file + ' marker not found: ' + JSON.stringify(marker));
  src = src.slice(0, i) + block + src.slice(i);
  fs.writeFileSync(file, src, 'utf8');
  console.log('updated', file);
}

/* ─── 1) Reading ─── */
const readingBlock = `,
  {
    id: 'ket-trainer1-test2',
    title: 'Trainer 1 · Test 2',
    source: {
      file: 'A2 Key for Schools Trainer 1 (Second Edition).pdf',
      collection: 'A2 Key for Schools Trainer 1',
      test: 2,
      pages: '46–61',
      answerPage: 178,
      verified: true,
      verifiedParts: [1, 2, 3, 4, 5],
    },
    part1: {
      instructions: 'For each question, choose the correct answer.',
      questions: [
        {
          id: 1, type: 'notice',
          content: 'From 1 October, please do not enter the pool before you have used the shower.',
          options: {
            A: 'The pool is closed on October 1st.',
            B: 'You need to wash before you swim.',
            C: 'There will be a new shower at the pool.',
          },
          answer: 'B',
        },
        {
          id: 2, type: 'text', from: 'Amanda', to: 'Gran',
          content: 'Subject: Help with a school project\\n\\nHi Gran,\\nDo you have any old photos showing you in your uniform when you were at school? If you do, can you send me one for school?\\nThanks,\\nAmanda',
          question: 'Amanda wants her grandmother to',
          options: {
            A: 'let her have a picture.',
            B: 'lend her some clothes.',
            C: 'describe her old uniform.',
          },
          answer: 'A',
        },
        {
          id: 3, type: 'notice',
          content: 'Warning\\nMemory full\\nPlease delete files or click here to buy more memory.',
          question: 'Where might you see this text?',
          options: {
            A: 'in a computer shop',
            B: 'on the screen of a computer',
            C: 'on the wall in the computer classroom',
          },
          answer: 'B',
        },
        {
          id: 4, type: 'notice',
          content: "TOMORROW'S TRIP\\nTime coach leaves school: 8:50.\\nPlease arrive no later than 8:40.\\nThe school gates will open at about 8:30.\\nThank you.",
          question: 'What time do pupils need to get to school tomorrow?',
          options: {
            A: 'about 8:30',
            B: 'by 8:40',
            C: 'at 8:50',
          },
          answer: 'B',
        },
        {
          id: 5, type: 'notice',
          content: "PLEASE NOTE EVERYBODY\\nThere's a lift if you need it, BUT use the stairs if you can.\\nIt's a great way to stay fit.",
          options: {
            A: 'Get the lift if you are in a hurry.',
            B: 'Use the stairs if the lift is broken.',
            C: 'Walking up and down stairs is better for you.',
          },
          answer: 'C',
        },
        {
          id: 6, type: 'ad',
          content: "Hounslow Cinema: Special Offer\\nBuy tickets to four films and you don't need to pay for the next one!\\nEvery day until 5:30 p.m.",
          options: {
            A: 'You can watch up to four films for free.',
            B: 'The fifth film you see during the daytime is free.',
            C: 'Cheap tickets are available for groups of four in the evenings.',
          },
          answer: 'B',
        },
      ],
    },
    part2: {
      title: 'Advice on doing homework',
      instructions: 'For each question, choose the correct answer.',
      people: [
        {
          label: 'A', name: 'Damian, 13',
          text: "I don't mind doing homework, especially when I play some jazz (and not pop) on my phone. When I do, I'm able to think more carefully about what I'm doing. Sometimes I really enjoy doing my homework, especially when it's maths and I understand it well. Or when one of my classmates comes to my place and we study together. I find it's best if I let my parents and sister know I'm busy so they don't come into my room and spend all evening talking to me!",
        },
        {
          label: 'B', name: 'Louis, 11',
          text: "When I started doing my homework in my room every morning, it wasn't a great success. I always found something more interesting to do! But these days, I don't have the same problem. I just go to my room in the evening, switch on the light, sit down at my desk and do it. I do love music, but if I put my MP3 player on, I start to think about the song and not the homework! So I don't listen while I work. It's the same problem if my mum or dad put music on in the next room. I turn my mobile off or put it away before I start. That helps too.",
        },
        {
          label: 'C', name: 'Jackson, 14',
          text: "I usually do most of my homework before I go to bed. And then I do a bit more as soon as I wake up. I've always found it easy to do that. I'll maybe look at my German vocabulary for five minutes before breakfast. I tell my friends at school: 'If you want to do your homework well, make sure your room is nice and bright. Otherwise, you'll fall asleep!'",
        },
      ],
      questions: [
        { id: 7, text: "Which person says it's better not to look at his phone while he's doing his homework?", answer: 'B' },
        { id: 8, text: 'Which person sometimes does homework with a friend?', answer: 'A' },
        { id: 9, text: 'Which person tells his family when he is working?', answer: 'A' },
        { id: 10, text: 'Which person says that there must be enough light in his room so he can work?', answer: 'C' },
        { id: 11, text: 'Which person thinks that listening to music helps with homework?', answer: 'A' },
        { id: 12, text: 'Which person works in the morning and evening?', answer: 'C' },
        { id: 13, text: "Which person says it's easier to do homework now than it was before?", answer: 'B' },
      ],
    },
    part3: {
      title: 'Starting photography',
      author: 'by Mrs Howells, Class 3D teacher',
      instructions: 'For each question, choose the correct answer.',
      passage: "Have you ever wanted to take better pictures of your family, of your dinner or of your cat? Well, I can help you. In fact, that's what makes photography such a fantastic hobby. It doesn't matter if you have a nice new camera or just use your phone. We photographers are always trying to improve. We want today's photos to be more interesting than yesterday's.\\n\\nIn my photography classes, I'll show you how to find your own style, not just take the same photos as all your friends. But you'll need to be out of bed early and take pictures in the best light, before it gets too bright. We'll talk more about light in Week 1.\\n\\nActually, I've never read a book about photography, and I get bored watching videos on the net. I started to understand more about photography by looking at my own photos. I thought about what was wrong with them and decided how to do better next time. And in Week 2, I'll ask you to do the same with photos you have taken.\\n\\nDo you want to know what I think? I don't think there's anyone who can't take amazing photos. Not everyone wants to, and that's cool. But if you do, come along to Room 4D on Wednesdays after lunch from 1:30 to 2:00.",
      questions: [
        { id: 14, text: 'Why does Mrs Howells enjoy photography?', options: { A: 'She loves using her new camera.', B: 'She likes taking photos of her family.', C: 'She enjoys trying to take better pictures.' }, answer: 'C' },
        { id: 15, text: 'What advice does Mrs Howells give?', options: { A: 'Take pictures with your friends.', B: 'Don\\'t take photos if it is dark.', C: 'Take photos early in the morning.' }, answer: 'C' },
        { id: 16, text: 'How did Mrs Howells learn about photography?', options: { A: 'from books', B: 'from her mistakes', C: 'from videos on the web' }, answer: 'B' },
        { id: 17, text: 'Mrs Howells believes that', options: { A: 'everybody should learn photography.', B: 'photography is a great hobby for everyone.', C: 'everybody can take good photos if they want to.' }, answer: 'C' },
        { id: 18, text: 'Why has Mrs Howells written this text?', options: { A: 'to ask pupils what they like photographing', B: 'to tell pupils about a photography course', C: "to answer pupils' questions about photography" }, answer: 'B' },
      ],
    },
    part4: {
      title: 'The oldest university in the world',
      instructions: 'For each question, choose the correct answer.',
      passage_segments: [
        "Some people say University of Al Qaraouiyine in Morocco is the world's oldest university because there has been a school in the same place ",
        ' the year 859 AD. In other words, there has been one there ',
        ' almost 1,100 years. The University has had many famous international students ',
        ' the years including the great traveller, Ibn Khadun. The University was started by a woman, Fatima al-Fihri and ',
        " a long history of teaching women and activities for women's education. Lecturer Hisham Mahmoud believes this helps female students concentrate during their studies. Before joining Al Qaraouiyine, Dr Mahmoud was a scientist, but he decided to ",
        " his career and work in education. The University's students all do well. After finishing at the University, many students will continue their ",
        ' at universities in America and Europe.',
      ],
      questions: [
        { id: 19, options: { A: 'since', B: 'between', C: 'after' }, answer: 'A' },
        { id: 20, options: { A: 'since', B: 'during', C: 'for' }, answer: 'C' },
        { id: 21, options: { A: 'under', B: 'over', C: 'until' }, answer: 'B' },
        { id: 22, options: { A: 'has', B: 'makes', C: 'goes' }, answer: 'A' },
        { id: 23, options: { A: 'give', B: 'change', C: 'take' }, answer: 'B' },
        { id: 24, options: { A: 'marks', B: 'studies', C: 'information' }, answer: 'B' },
      ],
    },
    part5: {
      instructions: 'For each question, write the correct answer.\\nWrite ONE word for each gap.',
      example: { number: 0, answer: 'went' },
      passages: [
        {
          label: 'A school trip to the theatre',
          content: "Last week, everyone in my class [0] on a trip to the theatre. We travelled there [25] coach. The theatre is about 10 kilometres away from school, so it was much [26] far to walk. The play was Romeo and Juliet by William Shakespeare. In fact, it's probably the [27] famous of all the plays that Shakespeare wrote. We've studied it at school, so I knew [28] it's about. It's a love story, but it's also the saddest play I [29] ever seen. At the end, several [30] the people in my class were crying. But I loved it!",
        },
      ],
      questions: [
        { id: 25, answers: ['by'] },
        { id: 26, answers: ['too'] },
        { id: 27, answers: ['most'] },
        { id: 28, answers: ['what'] },
        { id: 29, answers: ['have'] },
        { id: 30, answers: ['of'] },
      ],
    },
  },
`;

/* ─── 2) Writing ─── */
const writingBlock = `  'ket-trainer1-test2': [
    {
      part: 6,
      type: 'guided_writing',
      title: 'Part 6 · 邮件写作',
      prompt: 'Read the email from your English friend Sam.\\n\\nHi,\\nI want to ask you something. I\\'m really bored. Can I borrow something to read from you? What do you think I will enjoy? And when would you like it back? I hope that\\'s OK. Cheers!\\nSam\\n\\nWrite an email to Sam and answer the questions. Write 25 words or more.',
      modelAnswer: 'Hi Sam,\\nNo problem! You can borrow my new book about space travel. I think you will really enjoy it because the pictures are amazing. You can give it back to me next month.\\nSee you soon,\\nAlex',
      tips: ['开头称呼 Sam', '回答三个问题：借什么书、为什么他会喜欢、何时归还', '写25词或以上', '结尾署名并问候'],
    },
    {
      part: 7,
      type: 'story_writing',
      title: 'Part 7 · 看图写故事',
      prompt: 'Look at the three pictures.\\nWrite the story shown in the pictures.\\n\\nWrite 35 words or more.',
      imageSrc: '/images/ket/trainer1/test2-story.jpg',
      imageDesc: 'A girl leaves a sports shop with new shoes, runners wait at the start line of a race, and the girl wins the race with her arms in the air.',
      modelAnswer: 'Last Saturday, Maria bought some new running shoes at the sports shop. The next day, she ran in a big race in the park. At the start, she waited with the other runners. Then she ran very fast and finished first. She was so happy that she put her arms in the air!',
      tips: ['按三幅图的顺序叙述', '用一般过去时', '写清买鞋、起跑和获胜', '写35词或以上'],
    },
  ],
`;

/* ─── 3) Speaking ─── */
const speakingBlock = `  'ket-trainer1-test2': {
    parts: [
      {
        part: 2,
        title: 'Part 2 · 图片讨论',
        duration: '3–4 分钟',
        description: '和同伴围绕图片中的五项运动表达喜好并说明理由，两人轮流提问。',
        topics: [
          {
            id: 'kt2-s2-1',
            theme: 'Sports',
            themeZh: '运动',
            imageSrc: '/images/ket/trainer1/test2-speaking.jpg',
            cardPrompts: [
              'Do you like these different sports? Say why or why not.',
              'Which of these sports do you play? How often?',
              'Do you prefer team sports or sports you can do alone? Why?',
              'Is there a new sport you would like to try? Why?',
            ],
            modelAnswer: 'Yes, I like most of these sports. I love playing football with my friends because it is exciting and we have a great time together. I also enjoy cycling, but I don\\'t like running very much because it makes me tired. Tennis is fun to watch on TV, but I can\\'t play it well. I think basketball is interesting too, but I\\'m not very good at it!',
            phrases: ['I love playing… because…', 'I don\\'t like… very much because…', 'It\\'s fun to watch… but I can\\'t…', 'I\\'m not very good at…'],
          },
        ],
      },
    ],
  },
`;

insertIntoArrayFile('src/data/ketReadingTrainer1.js', '\n];', readingBlock + '\n];'.replace('\n];', '\n];'));
// 上面 replace 多余，直接处理：
{
  const file = 'src/data/ketReadingTrainer1.js';
  let src = fs.readFileSync(file, 'utf8');
  // 刚才已写入的话会带重复尾部，统一修正：确保文件以 readingBlock + '\n];' 结尾
  if (src.includes('ket-trainer1-test2')) {
    const end = src.lastIndexOf('\n];');
    // 若末尾出现重复 '\n];\n];' 则去重
    if (src.slice(end - 4, end) === '\n];') {
      src = src.slice(0, end) + '\n];\n';
      fs.writeFileSync(file, src, 'utf8');
      console.log('deduped', file);
    }
  }
}
insertIntoArrayFile('src/data/ketWritingTrainer1.js', '};', writingBlock + '};\n');
insertIntoArrayFile('src/data/ketSpeakingTrainer1.js', '};', speakingBlock + '};\n');
