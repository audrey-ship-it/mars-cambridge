import fs from 'node:fs';
const p = 'src/data/ketSpeakingTrainer1.js';
let s = fs.readFileSync(p, 'utf8');
const O = `              'Do you like these different sports? Say why or why not.',
              'Which of these sports do you play? How often?',
              'Do you prefer team sports or sports you can do alone? Why?',
              'Is there a new sport you would like to try? Why?',
            ],
            modelAnswer: 'Yes, I like most of these sports. I love playing football with my friends because it is exciting and we have a great time together. I also enjoy cycling, but I don\\'t like running very much because it makes me tired. Tennis is fun to watch on TV, but I can\\'t play it well. I think basketball is interesting too, but I\\'m not very good at it!',
            phrases: ['I love playing… because…', 'I don\\'t like… very much because…', 'It\\'s fun to watch… but I can\\'t…', 'I\\'m not very good at…'],`;
const N = `              'Do you like these different sports? Say why or why not.',
              'Do you think playing football is fun? Why? / Why not?',
              'Do you think cycling is dangerous? Why? / Why not?',
              'Do you think playing tennis is exciting? Why? / Why not?',
              'Which of these sports do you like best? Why?',
            ],
            modelAnswer: "Yes, I like most of these sports. I love playing football with my friends because it's exciting and we have a great time together. I enjoy cycling too, and it's not dangerous if you wear a helmet. I don't play tennis, but watching it on TV is exciting. Running is boring for me, though. Football is definitely my favourite!",
            phrases: ['I love playing… because…', "I don't play… but watching it is…", '… is boring for me', '… is definitely my favourite!'],`;
if (!s.includes(O)) { console.log('not found'); process.exit(0); }
s = s.replace(O, N);
fs.writeFileSync(p, s, 'utf8');
console.log('Test 2 fixed');
