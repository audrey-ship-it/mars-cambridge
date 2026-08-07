// KET 语法考点题库
// questions = 单选题 | blanks = 挖空练习 | corrections = 改错题
export const GRAMMAR_QUESTIONS = {

  /* ─────────────────────────────────────────
     考点1：名词
  ───────────────────────────────────────── */

  1: {
    title: '普通名词和专有名词',
    intro: '普通名词（common noun）指一般事物，如 book、city；专有名词（proper noun）指特定人名、地名等，首字母必须大写，如 London、Mary。',
    questions: [
      { q: 'Which of the following is a proper noun?', opts: ['city', 'London', 'country', 'river'], ans: 1, exp: '"London" is a proper noun — it names a specific city and must be capitalised.' },
      { q: 'Which word is a common noun?', opts: ['Paris', 'Monday', 'book', 'Mary'], ans: 2, exp: '"book" is a common noun. Paris, Monday and Mary are proper nouns.' },
      { q: 'Choose the sentence that uses a proper noun correctly.', opts: ['I have a dog named max.', 'She lives in london.', 'We visited Italy last summer.', 'my teacher is kind.'], ans: 2, exp: '"Italy" is a proper noun and is correctly capitalised. The others have improper lowercase proper nouns.' },
      { q: 'Which of the following MUST start with a capital letter?', opts: ['table', 'river', 'amazon (the company)', 'car'], ans: 2, exp: '"Amazon" is a proper noun (a company name) and always begins with a capital letter.' },
      { q: 'The word "teacher" is a ___.', opts: ['proper noun', 'common noun', 'pronoun', 'verb'], ans: 1, exp: '"teacher" refers to any teacher in general, so it is a common noun.' },
    ],
    blanks: [
      { sentence: 'London is a ___ noun.', ans: ['proper'], exp: 'London names a specific city, so it is a proper noun.' },
      { sentence: '"City" is a ___ noun.', ans: ['common'], exp: '"city" refers to any city in general — it is a common noun.' },
      { sentence: 'Proper nouns always start with a ___ letter.', ans: ['capital'], exp: 'All proper nouns must begin with a capital (uppercase) letter.' },
      { sentence: '"Monday" is a ___ noun.', ans: ['proper'], exp: 'Days of the week are proper nouns and always capitalised.' },
      { sentence: '"Book", "river" and "city" are all ___ nouns.', ans: ['common'], exp: 'These words refer to general things, not specific ones — they are common nouns.' },
    ],
    corrections: [
      { sentence: 'I was born in paris.', error: 'paris', correct: 'Paris', exp: 'City names are proper nouns and must be capitalised.' },
      { sentence: 'My friend mary is very kind.', error: 'mary', correct: 'Mary', exp: 'People\'s names are proper nouns and must be capitalised.' },
      { sentence: 'We study english at school.', error: 'english', correct: 'English', exp: 'Language names are proper nouns and must be capitalised.' },
      { sentence: 'She visited the eiffel tower last year.', error: 'eiffel tower', correct: 'Eiffel Tower', exp: 'Landmarks are proper nouns — both words must be capitalised.' },
      { sentence: 'monday is my favourite day.', error: 'monday', correct: 'Monday', exp: 'Days of the week are proper nouns and must start with a capital letter.' },
    ],
  },

  2: {
    title: '可数名词和不可数名词',
    intro: '可数名词（countable noun）有单复数形式，可与 a/an 或数字搭配；不可数名词（uncountable noun）没有复数，不能直接用 a/an，如 water、music、advice、information。',
    questions: [
      { q: 'Which noun is uncountable?', opts: ['apple', 'chair', 'water', 'cat'], ans: 2, exp: '"water" is uncountable — you cannot say "a water" or "two waters".' },
      { q: 'Which sentence is correct?', opts: ['I need some informations.', 'Can I have two breads?', 'She has three cats.', 'He gave me an advice.'], ans: 2, exp: '"cats" is countable, so "three cats" is correct. Information, bread and advice are uncountable.' },
      { q: 'Which of these nouns is countable?', opts: ['music', 'sugar', 'sandwich', 'air'], ans: 2, exp: '"sandwich" is countable — you can have one sandwich or two sandwiches.' },
      { q: '"I drink a lot of ___." Which word fits best?', opts: ['coffees', 'coffee', 'a coffee', "coffee's"], ans: 1, exp: '"coffee" used generally is uncountable. "a lot of coffee" is the correct pattern.' },
      { q: 'Which sentence uses an uncountable noun incorrectly?', opts: ['There is some milk in the fridge.', 'She gave me two advices.', 'I need some help.', "We don't have much time."], ans: 1, exp: '"advice" is uncountable and has no plural. Say "two pieces of advice".' },
    ],
    blanks: [
      { sentence: '"Water" is an ___ noun.', ans: ['uncountable'], exp: 'Water has no plural form and cannot be counted directly.' },
      { sentence: '"Apple" is a ___ noun.', ans: ['countable'], exp: 'You can say "one apple, two apples" — apple is countable.' },
      { sentence: 'You ___ say "two advices". (can/cannot)', ans: ['cannot', "can't", 'can not'], exp: '"Advice" is uncountable and has no plural form.' },
      { sentence: '"Information" is an ___ noun.', ans: ['uncountable'], exp: 'Information cannot be counted — it has no plural form.' },
      { sentence: 'She has three ___. (猫)', ans: ['cats'], exp: '"cat" is countable, so the plural is "cats".' },
    ],
    corrections: [
      { sentence: 'He gave me an advice about my homework.', error: 'an advice', correct: 'some advice', exp: '"Advice" is uncountable — use "some advice" not "an advice".' },
      { sentence: 'I need some informations for my project.', error: 'informations', correct: 'information', exp: '"Information" is uncountable and has no plural form.' },
      { sentence: 'She bought two breads from the shop.', error: 'two breads', correct: 'two loaves of bread', exp: '"Bread" is uncountable — use a quantity phrase like "two loaves of bread".' },
      { sentence: 'Can you give me some furnitures?', error: 'furnitures', correct: 'furniture', exp: '"Furniture" is uncountable and cannot be pluralised.' },
      { sentence: 'I have many homeworks to do tonight.', error: 'homeworks', correct: 'homework', exp: '"Homework" is uncountable — no plural form.' },
    ],
  },

  3: {
    title: '名词复数的规则变化',
    intro: '大多数名词加 -s；以 -s/-x/-ch/-sh 结尾加 -es；以"辅音字母 + y"结尾变 y 为 -ies；以 -f/-fe 结尾变 -ves；以 -o 结尾多数加 -s，少数加 -es。',
    questions: [
      { q: 'What is the plural of "box"?', opts: ['boxs', 'boxies', 'boxes', 'boxen'], ans: 2, exp: 'Nouns ending in -x add -es → boxes.' },
      { q: 'What is the plural of "baby"?', opts: ['babys', 'babies', 'babes', 'babyes'], ans: 1, exp: 'Consonant + y → change y to -ies: baby → babies.' },
      { q: 'What is the plural of "leaf"?', opts: ['leafs', 'leafes', 'leaves', 'leavs'], ans: 2, exp: 'Nouns ending in -f change to -ves: leaf → leaves.' },
      { q: 'What is the plural of "bus"?', opts: ['buss', 'buses', 'busies', "bus's"], ans: 1, exp: 'Nouns ending in -s add -es → buses.' },
      { q: 'What is the plural of "photo"?', opts: ['photoes', 'photoss', 'photos', "photo's"], ans: 2, exp: 'Most nouns ending in -o just add -s: photo → photos.' },
    ],
    blanks: [
      { sentence: 'The plural of "church" is ___.', ans: ['churches'], exp: 'Words ending in -ch add -es: church → churches.' },
      { sentence: 'The plural of "city" is ___.', ans: ['cities'], exp: 'Consonant + y → -ies: city → cities.' },
      { sentence: 'The plural of "knife" is ___.', ans: ['knives'], exp: 'Words ending in -fe change to -ves: knife → knives.' },
      { sentence: 'The plural of "dish" is ___.', ans: ['dishes'], exp: 'Words ending in -sh add -es: dish → dishes.' },
      { sentence: 'The plural of "story" is ___.', ans: ['stories'], exp: 'Consonant + y → -ies: story → stories.' },
    ],
    corrections: [
      { sentence: 'She has three boxs of chocolates.', error: 'boxs', correct: 'boxes', exp: 'Words ending in -x add -es: box → boxes.' },
      { sentence: 'There are two churchs in our town.', error: 'churchs', correct: 'churches', exp: 'Words ending in -ch add -es: church → churches.' },
      { sentence: 'I picked some leafs from the tree.', error: 'leafs', correct: 'leaves', exp: 'Words ending in -f change to -ves: leaf → leaves.' },
      { sentence: 'The babys are sleeping in the nursery.', error: 'babys', correct: 'babies', exp: 'Consonant + y → -ies: baby → babies.' },
      { sentence: 'He told us two storys about his travels.', error: 'storys', correct: 'stories', exp: 'Consonant + y → -ies: story → stories.' },
    ],
  },

  4: {
    title: '名词复数的不规则变化',
    intro: '有些名词复数形式完全不规则，需要单独记忆：child→children，tooth→teeth，foot→feet，mouse→mice，man→men，woman→women，person→people，sheep→sheep，fish→fish。',
    questions: [
      { q: 'What is the plural of "child"?', opts: ['childs', 'childes', 'children', 'childrens'], ans: 2, exp: '"child" has an irregular plural: children.' },
      { q: 'What is the plural of "tooth"?', opts: ['tooths', 'teeth', 'teeths', 'toothes'], ans: 1, exp: '"tooth" → "teeth" (irregular vowel change).' },
      { q: 'What is the plural of "mouse" (the animal)?', opts: ['mouses', 'mousies', 'mice', 'mices'], ans: 2, exp: '"mouse" → "mice" (irregular plural).' },
      { q: 'What is the plural of "woman"?', opts: ['womans', 'womens', 'women', 'womanses'], ans: 2, exp: '"woman" → "women" (irregular vowel change).' },
      { q: 'Which plural is correct?', opts: ['mans', 'mens', 'men', 'menes'], ans: 2, exp: '"man" → "men" (irregular plural).' },
    ],
    blanks: [
      { sentence: 'The plural of "foot" is ___.', ans: ['feet'], exp: '"foot" → "feet" — irregular vowel change.' },
      { sentence: 'The plural of "child" is ___.', ans: ['children'], exp: '"child" → "children" — completely irregular.' },
      { sentence: 'The plural of "sheep" is ___.', ans: ['sheep'], exp: '"sheep" does not change in the plural — it stays "sheep".' },
      { sentence: 'The plural of "person" is ___.', ans: ['people'], exp: '"person" → "people" — irregular plural.' },
      { sentence: 'The plural of "mouse" (animal) is ___.', ans: ['mice'], exp: '"mouse" → "mice" — irregular plural.' },
    ],
    corrections: [
      { sentence: 'There are three childs in the playground.', error: 'childs', correct: 'children', exp: '"child" → "children" (irregular plural).' },
      { sentence: 'She has two foots of rope.', error: 'foots', correct: 'feet', exp: '"foot" → "feet" (irregular plural).' },
      { sentence: 'The dentist checked my tooths.', error: 'tooths', correct: 'teeth', exp: '"tooth" → "teeth" (irregular plural).' },
      { sentence: 'Several mans were waiting outside.', error: 'mans', correct: 'men', exp: '"man" → "men" (irregular plural).' },
      { sentence: 'All the womans stood up to applaud.', error: 'womans', correct: 'women', exp: '"woman" → "women" (irregular plural).' },
    ],
  },

  5: {
    title: '不可数名词的量',
    intro: '不可数名词不能直接用数字修饰，需要用"量词 + of"结构表示具体数量：a glass of water，a piece of advice，a bag of rice，a cup of tea，a loaf of bread。',
    questions: [
      { q: 'Which expression is correct?', opts: ['a bread', 'a slice of bread', 'a breads', 'one bread'], ans: 1, exp: 'Bread is uncountable. Use a quantity phrase: a slice/loaf/piece of bread.' },
      { q: '"I\'d like ___ water, please."', opts: ['a', 'one', 'a glass of', 'a glass'], ans: 2, exp: 'Water is uncountable. "a glass of water" is the correct expression.' },
      { q: 'Which expression is WRONG?', opts: ['a cup of tea', 'a piece of cake', 'a bag of rice', 'a furniture'], ans: 3, exp: '"Furniture" is uncountable. Say "a piece of furniture".' },
      { q: 'How do we correctly measure sugar?', opts: ['two sugars', 'two piece of sugar', 'two spoonfuls of sugar', 'two sugares'], ans: 2, exp: 'Sugar is uncountable. Use "two spoonfuls of sugar".' },
      { q: '"She bought ___ milk."', opts: ['a bottle of', 'one milk', 'a milks', 'very much'], ans: 0, exp: '"a bottle of milk" is the correct way to quantify uncountable milk.' },
    ],
    blanks: [
      { sentence: 'Can I have a ___ of water? (玻璃杯)', ans: ['glass'], exp: '"a glass of water" is the standard way to quantify water.' },
      { sentence: 'He ate a ___ of bread. (片)', ans: ['slice', 'piece'], exp: 'Bread is uncountable — use "a slice/piece of bread".' },
      { sentence: 'She gave me a ___ of advice.', ans: ['piece'], exp: '"Advice" is uncountable — use "a piece of advice".' },
      { sentence: 'I drank two ___ of coffee. (杯)', ans: ['cups'], exp: '"two cups of coffee" is the correct expression.' },
      { sentence: 'We need a ___ of milk. (袋)', ans: ['bag', 'carton'], exp: '"a bag of milk" or "a carton of milk" — both accepted.' },
    ],
    corrections: [
      { sentence: 'Can I have a water, please?', error: 'a water', correct: 'a glass of water', exp: '"Water" is uncountable — use "a glass of water".' },
      { sentence: 'She gave me two informations.', error: 'two informations', correct: 'two pieces of information', exp: '"Information" is uncountable — use "two pieces of information".' },
      { sentence: 'I need a bread for the sandwiches.', error: 'a bread', correct: 'a loaf of bread', exp: '"Bread" is uncountable — use "a loaf of bread".' },
      { sentence: 'He bought a furniture for his new room.', error: 'a furniture', correct: 'a piece of furniture', exp: '"Furniture" is uncountable — say "a piece of furniture".' },
      { sentence: 'She offered me a rice.', error: 'a rice', correct: 'some rice / a bowl of rice', exp: '"Rice" is uncountable — say "some rice" or "a bowl of rice".' },
    ],
  },

  6: {
    title: '复合名词',
    intro: '复合名词（compound noun）由两个或多个词组成，表示一个新概念。第一个词通常是单数（toothbrush，not teethbrush）。可以写成一个词、带连字符或分开写：bedroom / fire station / mother-in-law。',
    questions: [
      { q: 'Which of the following is a compound noun?', opts: ['beautiful', 'quickly', 'bedroom', 'running'], ans: 2, exp: '"bedroom" = bed + room. It is a compound noun naming a specific type of room.' },
      { q: 'What does "notebook" mean?', opts: ['a book about notes', 'a small book for writing notes', 'a note inside a book', 'writing on a note'], ans: 1, exp: '"notebook" is a compound: note + book = a small book used for writing notes.' },
      { q: 'Which sentence uses a compound noun correctly?', opts: ['She works in a fire station.', 'He has a station fire.', 'The fire of station is busy.', 'Station fire is near.'], ans: 0, exp: '"fire station" is a compound noun: fire + station.' },
      { q: '"A ___bag" — which word completes this compound noun?', opts: ['big', 'red', 'hand', 'nice'], ans: 2, exp: '"handbag" is a compound noun: hand + bag = a small bag carried by hand.' },
      { q: 'Choose the compound noun that means "a brush used for teeth".', opts: ['teethbrush', 'toothbrush', 'brushteeth', 'brushing teeth'], ans: 1, exp: '"toothbrush" = tooth + brush. The first noun is usually singular in compounds.' },
    ],
    blanks: [
      { sentence: 'A "sunflower" is a ___ noun.', ans: ['compound'], exp: '"sunflower" = sun + flower, so it is a compound noun.' },
      { sentence: 'A room with a bed is called a ___.', ans: ['bedroom'], exp: '"bedroom" = bed + room — a classic compound noun.' },
      { sentence: 'In the compound noun "toothbrush", the first word "tooth" is in the ___ form.', ans: ['singular'], exp: 'In compound nouns, the first noun is usually singular: toothbrush, not teethbrush.' },
      { sentence: 'A station for fire trucks is called a fire ___.', ans: ['station'], exp: '"fire station" is a compound noun made of "fire" + "station".' },
      { sentence: 'A book for noting things is called a ___.', ans: ['notebook'], exp: '"notebook" = note + book — a compound noun.' },
    ],
    corrections: [
      { sentence: 'She brushes her teeth with a teethbrush.', error: 'teethbrush', correct: 'toothbrush', exp: 'In compound nouns, the first noun is usually singular: toothbrush.' },
      { sentence: 'He put his keys in his hand bag.', error: 'hand bag', correct: 'handbag', exp: '"handbag" is written as one word.' },
      { sentence: 'The sunrise was beautiful this morning. (no error here — but "sun flower" is wrong)', error: 'sun flower', correct: 'sunflower', exp: '"sunflower" is written as one word.' },
      { sentence: 'We walked past the fire-station on our way home.', error: 'fire-station', correct: 'fire station', exp: '"fire station" is written as two separate words (no hyphen).' },
      { sentence: 'She opened her note book to write the answer.', error: 'note book', correct: 'notebook', exp: '"notebook" is written as one word.' },
    ],
  },

  /* ─────────────────────────────────────────
     考点2：冠词
  ───────────────────────────────────────── */

  7: {
    title: 'a 和 an 的用法',
    intro: '不定冠词 a 用于辅音音素开头的词前；an 用于元音音素（/æ/, /e/, /ɪ/, /ɒ/, /ʌ/ 等）开头的词前。注意看发音：an hour（h不发音），a university（发 /j/ 音）。',
    questions: [
      { q: '"___ apple a day keeps the doctor away."', opts: ['A', 'An', 'The', '(no article)'], ans: 1, exp: '"apple" starts with a vowel sound /æ/, so we use "an".' },
      { q: 'Which is correct?', opts: ['a hour', 'an hour', 'a hours', 'the hour'], ans: 1, exp: '"hour" starts with a silent h, first sound is vowel /aʊ/ → "an hour".' },
      { q: '"She is ___ university student."', opts: ['a', 'an', 'the', '(no article)'], ans: 0, exp: '"university" starts with a /j/ consonant sound → "a university".' },
      { q: 'Which sentence is correct?', opts: ['He is an doctor.', 'She has a umbrella.', 'I saw an elephant.', 'It was a awful day.'], ans: 2, exp: '"elephant" starts with vowel sound /e/ → "an elephant".' },
      { q: '"I need ___ pen and ___ eraser."', opts: ['a … a', 'an … an', 'a … an', 'an … a'], ans: 2, exp: '"pen" → consonant /p/ → a; "eraser" → vowel /ɪ/ → an.' },
    ],
    blanks: [
      { sentence: '"Egg" starts with a vowel sound, so we say ___ egg.', ans: ['an'], exp: '"egg" begins with the vowel sound /e/ → "an egg".' },
      { sentence: '"Hour" starts with a silent h, so we say ___ hour.', ans: ['an'], exp: 'The h in "hour" is silent — the first sound is /aʊ/ → "an hour".' },
      { sentence: '"University" starts with a /j/ sound, so we say ___ university.', ans: ['a'], exp: 'Despite starting with u, "university" sounds like /juːnɪˈvɜːsɪti/ → "a university".' },
      { sentence: '"Umbrella" starts with a vowel sound, so we say ___ umbrella.', ans: ['an'], exp: '"umbrella" begins with /ʌ/ → "an umbrella".' },
      { sentence: '"Car" starts with a consonant sound, so we say ___ car.', ans: ['a'], exp: '"car" begins with the consonant /k/ → "a car".' },
    ],
    corrections: [
      { sentence: 'She waited for a hour at the bus stop.', error: 'a hour', correct: 'an hour', exp: '"hour" has a silent h; the first sound is /aʊ/ → "an hour".' },
      { sentence: 'He ate an sandwich for lunch.', error: 'an sandwich', correct: 'a sandwich', exp: '"sandwich" starts with consonant /s/ → "a sandwich".' },
      { sentence: 'I need an pen to write this down.', error: 'an pen', correct: 'a pen', exp: '"pen" starts with consonant /p/ → "a pen".' },
      { sentence: 'She is a excellent student.', error: 'a excellent', correct: 'an excellent', exp: '"excellent" starts with vowel /e/ → "an excellent".' },
      { sentence: 'We saw an European castle on our trip.', error: 'an European', correct: 'a European', exp: '"European" starts with /j/ consonant sound → "a European".' },
    ],
  },

  8: {
    title: 'the 的用法',
    intro: '定冠词 the 用于：双方都知道的特定事物、世界上独一无二的事物（the sun, the moon）、序数词前（the first）、乐器前（the piano）、某些专有名词（the UK, the Amazon）。',
    questions: [
      { q: 'Which sentence uses "the" correctly?', opts: ['She plays the piano every day.', 'I eat the breakfast at 7am.', 'He is the doctor.', 'We go to the school by bus.'], ans: 0, exp: 'We use "the" before musical instruments: play the piano, the guitar.' },
      { q: '"___ sun rises in the east."', opts: ['A', 'An', 'The', '(no article)'], ans: 2, exp: 'There is only one sun, so we use "the" for unique objects.' },
      { q: 'Which phrase is correct?', opts: ['a first prize', 'the first prize', 'first prize', 'an first prize'], ans: 1, exp: 'We use "the" before ordinal numbers: the first, the second.' },
      { q: '"I go to ___ bed at 10pm."', opts: ['a', 'an', 'the', '(no article)'], ans: 3, exp: 'Fixed expressions: "go to bed", "go to school", "go to work" — no article.' },
      { q: 'Which country name uses "the"?', opts: ['France', 'the United States', 'Japan', 'China'], ans: 1, exp: 'Countries whose names include a common noun (States, Kingdom) use "the".' },
    ],
    blanks: [
      { sentence: 'She can play ___ violin very well.', ans: ['the'], exp: 'We always use "the" before musical instruments.' },
      { sentence: '___ moon looks beautiful tonight.', ans: ['The'], exp: 'There is only one moon — use "the" for unique objects in our world.' },
      { sentence: 'He won ___ first prize in the competition.', ans: ['the'], exp: '"The" is used before ordinal numbers: the first, the second.' },
      { sentence: 'They live in ___ United Kingdom.', ans: ['the'], exp: 'Country names with a common noun (Kingdom, States) take "the".' },
      { sentence: 'This is ___ best film I have ever seen.', ans: ['the'], exp: '"The" is used before superlatives: the best, the most.' },
    ],
    corrections: [
      { sentence: 'She plays a piano in the school concert.', error: 'a piano', correct: 'the piano', exp: 'We use "the" before musical instruments: play the piano.' },
      { sentence: 'A sun rises in the east every morning.', error: 'A sun', correct: 'The sun', exp: 'There is only one sun — it is unique, so use "the".' },
      { sentence: 'He came in a first in the race.', error: 'a first', correct: 'the first', exp: '"The" is used before ordinal numbers: came in the first.' },
      { sentence: 'I love to play a guitar after dinner.', error: 'a guitar', correct: 'the guitar', exp: 'We use "the" before musical instruments.' },
      { sentence: 'They visited a Amazon rainforest last year.', error: 'a Amazon', correct: 'the Amazon', exp: '"The Amazon" is a fixed proper noun that takes "the".' },
    ],
  },

  9: {
    title: '零冠词用法总结',
    intro: '不用冠词（零冠词）的情况：泛指复数名词（Dogs are friendly）、泛指不可数名词（I love music）、大多数专有名词（Paris, Monday）、固定短语（at school, by bus, at night, go to bed）。',
    questions: [
      { q: '"___ dogs are friendly animals." Which is correct?', opts: ['A', 'An', 'The', '(no article)'], ans: 3, exp: 'When talking about dogs in general (all dogs), no article is needed.' },
      { q: 'Which sentence is correct?', opts: ['I love the music.', 'She drinks the water every morning.', 'He plays football after school.', 'We study the English.'], ans: 2, exp: '"football" and "school" in fixed phrases take no article: play football, after school.' },
      { q: '"She goes to ___ work by ___ bus."', opts: ['the … the', 'a … a', '(no article) … (no article)', 'the … a'], ans: 2, exp: '"go to work" and "by bus" are fixed phrases with no article.' },
      { q: 'Which sentence uses zero article correctly?', opts: ['The life is beautiful.', 'I visited the Paris last year.', 'Children need love and care.', 'She is the teacher.'], ans: 2, exp: '"Children" used generally + abstract nouns "love and care" all need no article.' },
      { q: '"___ English is spoken in many countries."', opts: ['A', 'An', 'The', '(no article)'], ans: 3, exp: 'Language names used generally take no article: English, French, Chinese.' },
    ],
    blanks: [
      { sentence: '"___ life is beautiful." (talking about life in general)', ans: ['(no article)', '', 'no article'], exp: 'Abstract nouns used in general take no article.' },
      { sentence: 'She goes to school ___ bus. (乘坐)', ans: ['by'], exp: '"by bus/car/train" — transport phrases use "by" with no article.' },
      { sentence: 'I love ___. (音乐 in general)', ans: ['music'], exp: 'Uncountable nouns used in general need no article: I love music.' },
      { sentence: 'He goes to ___ every morning. (床 — fixed phrase)', ans: ['bed'], exp: '"go to bed" is a fixed phrase with no article.' },
      { sentence: '___ cats are popular pets. (cats in general)', ans: ['(no article)', '', 'no article'], exp: 'Plural nouns used in general need no article.' },
    ],
    corrections: [
      { sentence: 'The English is spoken in many countries.', error: 'The English', correct: 'English', exp: 'Language names used generally take no article.' },
      { sentence: 'She goes to the bed at 10 o\'clock.', error: 'the bed', correct: 'bed', exp: '"go to bed" is a fixed phrase — no article needed.' },
      { sentence: 'He travels to the work by the bus.', error: 'the work … the bus', correct: 'work … bus', exp: '"go to work" and "by bus" are fixed phrases without articles.' },
      { sentence: 'The life is short, so enjoy it.', error: 'The life', correct: 'Life', exp: 'Abstract nouns used in general sense take no article.' },
      { sentence: 'The dogs are man\'s best friends.', error: 'The dogs', correct: 'Dogs', exp: 'When talking about dogs in general, no article is needed.' },
    ],
  },

  /* ─────────────────────────────────────────
     考点3：代词
  ───────────────────────────────────────── */

  10: {
    title: '人称代词',
    intro: '主格（subject）：I, you, he, she, it, we, they — 作主语。宾格（object）：me, you, him, her, it, us, them — 作宾语（放在动词或介词之后）。',
    questions: [
      { q: '"___ is my best friend." (Maria) Which pronoun is correct?', opts: ['Him', 'Her', 'She', 'He'], ans: 2, exp: 'Maria is female and is the subject → use "She".' },
      { q: '"Please give ___ the book." (Tom) Which pronoun is correct?', opts: ['he', 'she', 'him', 'his'], ans: 2, exp: 'After a verb, use the object pronoun. Tom → him.' },
      { q: 'Which sentence is correct?', opts: ['Me and my friend went to the park.', 'My friend and I went to the park.', 'I and my friend went to the park.', 'My friend and me went to the park.'], ans: 1, exp: '"My friend and I" — put the other person first; use subject pronoun "I".' },
      { q: '"The letter is for ___." (we) Which is correct?', opts: ['we', 'our', 'ours', 'us'], ans: 3, exp: 'After a preposition (for), use the object pronoun: us.' },
      { q: 'Choose the correct pronoun: "My parents are kind. ___ always help me."', opts: ['It', 'He', 'She', 'They'], ans: 3, exp: '"Parents" is plural, so we use "they".' },
    ],
    blanks: [
      { sentence: '"Tom is my brother. ___ is very funny." (subject pronoun)', ans: ['He'], exp: 'Tom is male and is the subject of the sentence → He.' },
      { sentence: '"I love my sister. I often call ___." (object pronoun)', ans: ['her'], exp: 'After the verb "call", use the object pronoun: her.' },
      { sentence: '"We invited John and Mary. ___ came to the party." (subject pronoun)', ans: ['They'], exp: 'John and Mary = they (plural subject pronoun).' },
      { sentence: '"Can you help ___?" (me — object pronoun for I)', ans: ['me'], exp: 'After the verb "help", use the object pronoun: me.' },
      { sentence: '"The dog is hungry. Give ___ some food." (object pronoun)', ans: ['it'], exp: 'The dog → it (object pronoun for a thing/animal).' },
    ],
    corrections: [
      { sentence: 'Me and Tom went to the cinema yesterday.', error: 'Me and Tom', correct: 'Tom and I', exp: 'Use subject pronoun "I" (not "me") as the subject. Put yourself last.' },
      { sentence: 'The teacher gave he a gold star.', error: 'he', correct: 'him', exp: 'After a verb (gave), use object pronoun: him.' },
      { sentence: 'This present is from my mum and I.', error: 'I', correct: 'me', exp: 'After a preposition (from), use object pronoun: me.' },
      { sentence: 'Her and I are good friends.', error: 'Her', correct: 'She', exp: 'As the subject of the sentence, use subject pronoun: She.' },
      { sentence: 'Please tell she the good news.', error: 'she', correct: 'her', exp: 'After the verb "tell", use object pronoun: her.' },
    ],
  },

  /* ─────────────────────────────────────────
     考点8：动词及时态（精选）
  ───────────────────────────────────────── */

  29: {
    title: '一般现在时',
    intro: '一般现在时用于：习惯性动作（I walk to school）、客观事实（The earth goes round the sun）、状态（She likes coffee）。第三人称单数（he/she/it）动词加 -s/-es；否定用 don\'t/doesn\'t + 原形。',
    questions: [
      { q: 'Which sentence is in the simple present tense?', opts: ['She was reading a book.', 'He plays football every Saturday.', 'They will go to the cinema.', 'I have been studying all day.'], ans: 1, exp: '"plays" is simple present. "Every Saturday" confirms it is a habitual action.' },
      { q: '"She ___ to school every day."', opts: ['walk', 'walks', 'walked', 'walking'], ans: 1, exp: 'Third person singular (she) → add -s: walks.' },
      { q: 'Which sentence is correct?', opts: ["He don't like coffee.", "She doesn't likes tea.", "They doesn't play tennis.", "It doesn't work."], ans: 3, exp: '"doesn\'t" + base form: doesn\'t work.' },
      { q: '"The sun ___ in the east."', opts: ['rise', 'rises', 'is rising', 'rose'], ans: 1, exp: 'Scientific facts use simple present: The sun rises in the east.' },
      { q: '"Do you like pizza?" — "Yes/No, I ___."', opts: ['do / don\'t', 'does / doesn\'t', 'did / didn\'t', 'am / am not'], ans: 0, exp: 'Short answer to "Do you…?" → Yes, I do. / No, I don\'t.' },
    ],
    blanks: [
      { sentence: 'She ___ (like) chocolate. (third person singular)', ans: ['likes'], exp: 'Third person singular → add -s: likes.' },
      { sentence: 'He ___ (not / watch) TV in the morning. (negative)', ans: ["doesn't watch", 'does not watch'], exp: 'Third person negative: doesn\'t + base form.' },
      { sentence: '"The earth ___ around the sun." (go — fact)', ans: ['goes'], exp: 'Scientific fact → simple present. Third person singular → goes.' },
      { sentence: 'They ___ (play) tennis every weekend.', ans: ['play'], exp: 'They → no -s needed: play.' },
      { sentence: '___ she speak French? (question)', ans: ['Does'], exp: 'Third person singular question → Does + subject + base form.' },
    ],
    corrections: [
      { sentence: 'She don\'t like spicy food.', error: "don't", correct: "doesn't", exp: 'Third person singular (she) → doesn\'t, not don\'t.' },
      { sentence: 'He plays tennis every day? (as a question)', error: 'He plays', correct: 'Does he play', exp: 'Yes/no questions: Does + subject + base form.' },
      { sentence: 'The sun rise in the east every morning.', error: 'rise', correct: 'rises', exp: 'Third person singular (the sun) → rises.' },
      { sentence: 'She doesn\'t likes ice cream.', error: 'likes', correct: 'like', exp: 'After doesn\'t, use the base form: doesn\'t like.' },
      { sentence: 'Do he play football?', error: 'Do he', correct: 'Does he', exp: 'Third person singular question → Does, not Do.' },
    ],
  },

  35: {
    title: '一般过去时',
    intro: '一般过去时用于谈论过去完成的动作。规则动词加 -ed（worked, played）；不规则动词需记忆（go→went, eat→ate, see→saw, have→had）。否定用 didn\'t + 动词原形；疑问用 Did + 主语 + 原形。',
    questions: [
      { q: 'What is the past tense of "go"?', opts: ['goed', 'goes', 'went', 'gone'], ans: 2, exp: '"go" is irregular. Past tense → went.' },
      { q: '"She ___ a letter yesterday."', opts: ['write', 'writes', 'written', 'wrote'], ans: 3, exp: '"write" is irregular. Past tense → wrote.' },
      { q: 'Which sentence is correct?', opts: ["He didn't went to school.", "She didn't ate lunch.", "They didn't play football.", "I didn't was happy."], ans: 2, exp: 'After "didn\'t", always use the base form: didn\'t play.' },
      { q: '"Did you ___ TV last night?"', opts: ['watched', 'watches', 'watch', 'watching'], ans: 2, exp: 'After "did", always use the base form.' },
      { q: 'Which time expression goes with simple past?', opts: ['every day', 'tomorrow', 'last week', 'right now'], ans: 2, exp: '"last week" refers to a finished time in the past → simple past.' },
    ],
    blanks: [
      { sentence: 'She ___ (visit) Paris last summer.', ans: ['visited'], exp: 'Regular verb + -ed: visit → visited.' },
      { sentence: 'He ___ (not / go) to school yesterday.', ans: ["didn't go", 'did not go'], exp: 'Past negative: didn\'t + base form: didn\'t go.' },
      { sentence: '"___ you see that film?" (question)', ans: ['Did'], exp: 'Past yes/no question → Did + subject + base form.' },
      { sentence: 'I ___ (eat) a big breakfast this morning.', ans: ['ate'], exp: '"eat" is irregular: eat → ate.' },
      { sentence: 'They ___ (play) football in the park yesterday.', ans: ['played'], exp: 'Regular verb + -ed: play → played.' },
    ],
    corrections: [
      { sentence: 'She didn\'t went to the party last night.', error: 'went', correct: 'go', exp: 'After "didn\'t", use the base form: didn\'t go.' },
      { sentence: 'Did he ate breakfast this morning?', error: 'ate', correct: 'eat', exp: 'After "did", use the base form: Did he eat.' },
      { sentence: 'I seed a great film yesterday.', error: 'seed', correct: 'saw', exp: '"see" is irregular: see → saw (not "seed").' },
      { sentence: 'They goed to the beach last Sunday.', error: 'goed', correct: 'went', exp: '"go" is irregular: go → went (not "goed").' },
      { sentence: 'He didn\'t played football last weekend.', error: 'played', correct: 'play', exp: 'After "didn\'t", always use the base form: didn\'t play.' },
    ],
  },

  /* ─────────────────────────────────────────
     考点10：基础句型
  ───────────────────────────────────────── */

  43: {
    title: 'There be 句型',
    intro: '"There is/are" 表示"某地有某物"。单数/不可数名词 → is；复数名词 → are；过去式 was/were；否定加 not（isn\'t/aren\'t）；疑问句将 be 提前（Is there…? / Are there…?）。',
    questions: [
      { q: '"___ a book on the table."', opts: ['There are', 'There is', 'There has', 'There have'], ans: 1, exp: '"a book" is singular → There is.' },
      { q: '"___ three chairs in the room."', opts: ['There is', 'There are', 'There was', 'Is there'], ans: 1, exp: '"three chairs" is plural → There are.' },
      { q: '"___ any milk in the fridge?" (question)', opts: ['There is', 'Are there', 'Is there', 'There are'], ans: 2, exp: '"milk" is uncountable (singular) → Is there any milk?' },
      { q: 'Which sentence is correct?', opts: ['There is many people in the park.', 'There are a dog in the garden.', 'There were two cats on the roof.', 'There was three books on the shelf.'], ans: 2, exp: '"two cats" plural, past → There were.' },
      { q: '"There aren\'t ___ students in the classroom."', opts: ['some', 'any', 'a', 'much'], ans: 1, exp: 'Negative → "any": There aren\'t any students.' },
    ],
    blanks: [
      { sentence: '___ a cat in the garden. (singular)', ans: ['There is', "There's"], exp: 'Singular subject → There is.' },
      { sentence: '___ many books on the shelf. (plural)', ans: ['There are'], exp: 'Plural subject → There are.' },
      { sentence: '___ anyone here yesterday? (past, question)', ans: ['Was there'], exp: 'Past singular question → Was there.' },
      { sentence: 'There ___ any milk left. (negative)', ans: ["isn't", 'is not'], exp: 'Singular negative → There isn\'t.' },
      { sentence: '___ five students absent today. (plural)', ans: ['There are'], exp: 'Five students = plural → There are.' },
    ],
    corrections: [
      { sentence: 'There are a cat on the sofa.', error: 'are', correct: 'is', exp: '"a cat" is singular → There is a cat.' },
      { sentence: 'There is five apples in the bowl.', error: 'is', correct: 'are', exp: '"five apples" is plural → There are five apples.' },
      { sentence: 'Is there some sugar in the cupboard?', error: 'some', correct: 'any', exp: 'In questions, use "any" not "some": Is there any sugar?' },
      { sentence: 'There are a lot of homeworks to do.', error: 'homeworks', correct: 'homework', exp: '"homework" is uncountable — no plural form.' },
      { sentence: 'There weren\'t no milk in the fridge.', error: "weren't no", correct: "wasn't any", exp: 'Milk is uncountable (singular past) → There wasn\'t any milk.' },
    ],
  },

  46: {
    title: '一般疑问句',
    intro: '一般疑问句（Yes/No question）：be 动词提前；do/does/did 放在主语前（action verbs）；回答用 Yes/No + 主语 + 助动词。第三人称单数用 does（现在）/ did（过去）。',
    questions: [
      { q: 'How do you make "She is a teacher." into a question?', opts: ["Does she is a teacher?", "Is she a teacher?", "She is a teacher?", "Do she is a teacher?"], ans: 1, exp: 'Move "is" to the front: Is she a teacher?' },
      { q: '"___ you like chocolate?"', opts: ['Is', 'Are', 'Do', 'Does'], ans: 2, exp: 'For "you" with action verb in present → Do: Do you like?' },
      { q: '"Does he play tennis?" — "Yes, ___."', opts: ['he plays', 'he do', 'he does', 'does he'], ans: 2, exp: 'Short answer to "Does": Yes, he does.' },
      { q: '"___ they go to the cinema yesterday?"', opts: ['Do', 'Does', 'Did', 'Were'], ans: 2, exp: 'Past tense action verb question → Did.' },
      { q: 'Which is a correct yes/no question?', opts: ['You are happy?', 'Are you happy?', 'Happy are you?', 'Do you are happy?'], ans: 1, exp: 'Move "are" before the subject: Are you happy?' },
    ],
    blanks: [
      { sentence: '___ she like coffee? (third person present)', ans: ['Does'], exp: 'Third person singular present question → Does + base form.' },
      { sentence: '___ they play football yesterday? (past)', ans: ['Did'], exp: 'Past yes/no question → Did + base form.' },
      { sentence: '"Are you tired?" — "Yes, ___ am."', ans: ['I'], exp: 'Short answer mirrors the subject: Yes, I am.' },
      { sentence: '"Does she work here?" — "No, she ___."', ans: ["doesn't", 'does not'], exp: 'Short negative answer: No, she doesn\'t.' },
      { sentence: '___ your parents at home now? (be verb)', ans: ['Are'], exp: '"Parents" is plural → Are your parents?' },
    ],
    corrections: [
      { sentence: 'Do she like reading?', error: 'Do she', correct: 'Does she', exp: 'Third person singular (she) → Does she.' },
      { sentence: 'Did he went to school yesterday?', error: 'went', correct: 'go', exp: 'After did, use the base form: Did he go.' },
      { sentence: 'Does they play tennis?', error: 'Does they', correct: 'Do they', exp: '"They" is plural → Do they, not Does they.' },
      { sentence: '"Do you like pizza?" — "Yes, I do like."', error: 'do like', correct: 'do', exp: 'Short answers don\'t repeat the main verb: Yes, I do.' },
      { sentence: 'Are she happy with the result?', error: 'Are she', correct: 'Is she', exp: '"She" is singular → Is she, not Are she.' },
    ],
  },

  /* ─────────────────────────────────────────
     考点8：动词及时态（续）
  ───────────────────────────────────────── */

  30: {
    title: '现在进行时',
    intro: '现在进行时表示正在发生的动作。结构：主语 + be动词(am/is/are) + 动词-ing。时间标志词：now, at the moment, right now, look!, listen!。动词变化：直接加ing（cook→cooking）；去e加ing（dance→dancing）；双写加ing（sit→sitting）；ie→y加ing（lie→lying）。',
    questions: [
      { q: 'Look! She _____ in the park.', opts: ['runs', 'is running', 'run', 'was running'], ans: 1, exp: '"Look!" is a present continuous signal. She (singular) → is running.' },
      { q: 'They _____ dinner at the moment.', opts: ['have', 'had', 'are having', 'will have'], ans: 2, exp: '"at the moment" signals present continuous. They (plural) → are having.' },
      { q: '_____ he _____ the piano right now?', opts: ['Is; playing', 'Does; play', 'Was; playing', 'Do; play'], ans: 0, exp: '"right now" → present continuous question: Is + he + playing.' },
      { q: 'The children _____ in the street. It\'s dangerous.', opts: ['play', 'played', 'are playing', 'have played'], ans: 2, exp: 'Describing a current action → present continuous: are playing.' },
      { q: 'Which "-ing" form is correct?', opts: ['dance → danceing', 'sit → siting', 'lie → lieing', 'run → running'], ans: 3, exp: '"run" ends in consonant-vowel-consonant (stressed) → double the last letter: running.' },
      { q: 'My sister usually _____ to bed early, but tonight she _____ a novel.', opts: ['goes; is reading', 'is going; reads', 'went; was reading', 'go; read'], ans: 0, exp: '"usually" → simple present (goes); "tonight/now" → present continuous (is reading).' },
      { q: 'Listen! It _____ outside.', opts: ['snow', 'snowed', 'snows', 'is snowing'], ans: 3, exp: '"Listen!" is a present continuous time signal. It (singular) → is snowing.' },
    ],
    blanks: [
      { sentence: 'Look! The children _____ (play) in the garden.', ans: ['are playing'], exp: '"Look!" signals present continuous. They (plural) + are + playing.' },
      { sentence: 'She usually _____ (go) to school by bus, but today she _____ (walk).', ans: ['goes', 'is walking'], exp: '"usually" → simple present (goes); "today" → present continuous (is walking).' },
      { sentence: 'Listen! Someone _____ (knock) at the door.', ans: ['is knocking'], exp: '"Listen!" is a present continuous signal. Someone (singular) → is knocking.' },
      { sentence: 'He _____ (not read) right now. He _____ (watch) TV.', ans: ["isn't reading", 'is watching'], exp: 'Negative: isn\'t + verb-ing. Positive: is + watching.' },
      { sentence: '_____ you _____ (do) your homework now?', ans: ['Are', 'doing'], exp: 'Present continuous question: Are + you + doing?' },
    ],
    corrections: [
      { sentence: 'She are reading a book right now.', error: 'are', correct: 'is', exp: 'She (singular) → is, not are: She is reading.' },
      { sentence: 'Look! The boy run across the street.', error: 'run', correct: 'is running', exp: '"Look!" signals present continuous: The boy is running.' },
      { sentence: 'They is watching TV at the moment.', error: 'is', correct: 'are', exp: 'They (plural) → are, not is: They are watching.' },
      { sentence: 'He is play basketball with his friends.', error: 'play', correct: 'playing', exp: 'After "is", use verb-ing: He is playing.' },
      { sentence: 'I am not understanding this question.', error: 'am not understanding', correct: "don't understand", exp: '"understand" is a stative verb — not used in continuous tenses.' },
    ],
  },

  31: {
    title: '现在完成时',
    intro: '现在完成时表示①过去动作对现在的影响，②从过去持续到现在的状态。结构：主语 + have/has + 过去分词。时间标志词：just（刚刚）、never（从未）、yet（否定/疑问句）、ever（曾经）、already（已经）、for+时间段、since+时间点。',
    questions: [
      { q: 'I _____ my homework since I got home.', opts: ['finish', 'finished', 'have finished', 'was finishing'], ans: 2, exp: '"since" + past event → present perfect: have finished.' },
      { q: 'They _____ the project since last week.', opts: ['completed', 'have completed', 'had completed', 'were completing'], ans: 1, exp: '"since last week" → present perfect: have completed.' },
      { q: 'She _____ her keys in the office. (just now)', opts: ['left', 'has left', 'is leaving', 'was leaving'], ans: 1, exp: '"just now" with present relevance → present perfect: has left.' },
      { q: 'We _____ to the museum twice since the beginning of this year.', opts: ['go', 'went', 'have gone', 'are going'], ans: 2, exp: '"since the beginning" + count (twice) → present perfect: have gone.' },
      { q: 'She _____ a new novel recently.', opts: ['wrote', 'has written', 'is writing', 'was writing'], ans: 1, exp: '"recently" → present perfect (third person): has written.' },
      { q: 'He _____ never _____ sushi before.', opts: ['has; eaten', 'have; eat', 'had; eaten', 'has; ate'], ans: 0, exp: '"never" + present perfect: has never eaten (he = third person → has).' },
    ],
    blanks: [
      { sentence: 'She _____ (live) in the city since she graduated from college.', ans: ['has lived'], exp: '"since" + event → present perfect (she = has): has lived.' },
      { sentence: 'He _____ (learn) to play the guitar since he was a child.', ans: ['has learned', 'has learnt'], exp: '"since" → present perfect (he = has): has learned.' },
      { sentence: 'We _____ (travel) a lot since we got our new car.', ans: ['have traveled', 'have travelled'], exp: '"since" → present perfect (we = have): have traveled.' },
      { sentence: 'They _____ (not visit) their grandparents yet since they moved.', ans: ["haven't visited", 'have not visited'], exp: '"yet" in negative + "since" → present perfect negative: haven\'t visited.' },
      { sentence: '_____ you ever _____ (try) Japanese food?', ans: ['Have', 'tried'], exp: '"ever" → present perfect question: Have + you + tried.' },
    ],
    corrections: [
      { sentence: 'I finished my homework since yesterday.', error: 'finished', correct: 'have finished', exp: '"since" requires present perfect: I have finished my homework since yesterday.' },
      { sentence: 'They completed the project since last week.', error: 'completed', correct: 'have completed', exp: '"since" → present perfect: They have completed the project since last week.' },
      { sentence: 'I have already finish my homework.', error: 'finish', correct: 'finished', exp: 'After have/has, use the past participle: have finished (not finish).' },
      { sentence: 'She has went to Paris three times.', error: 'went', correct: 'been', exp: 'Past participle of "go" used with have/has for experience → has been (or has gone).' },
      { sentence: 'He have lived here for five years.', error: 'have', correct: 'has', exp: 'Third person singular (he) → has, not have: He has lived here for five years.' },
    ],
  },

  36: {
    title: '过去进行时',
    intro: '过去进行时表示过去某时刻正在发生的动作。结构：主语 + was/were + 动词-ing。I/he/she/it → was；we/you/they → were。时间标志词：at that time、at that moment、at 9 last night、when（引导背景动作）。动词变化规则与现在进行时相同。',
    questions: [
      { q: 'She _____ a book when I called her last night.', opts: ['reads', 'was reading', 'read', 'is reading'], ans: 1, exp: '"when I called" = past interruption → past continuous: was reading.' },
      { q: 'They _____ dinner when the lights went out.', opts: ['were having', 'have', 'had', 'have had'], ans: 0, exp: '"when the lights went out" = past interruption → past continuous: were having.' },
      { q: 'He _____ his homework at 7:00 yesterday evening.', opts: ['did', 'was doing', 'does', 'is doing'], ans: 1, exp: '"at 7:00 yesterday" = specific past time → past continuous: was doing.' },
      { q: 'We _____ a movie when you called us.', opts: ['watched', 'were watching', 'watch', 'are watching'], ans: 1, exp: '"when you called" = past interruption → past continuous: were watching.' },
      { q: 'The children _____ in the park when it started to rain.', opts: ['played', 'were playing', 'play', 'are playing'], ans: 1, exp: '"when it started" = past interruption → past continuous: were playing.' },
      { q: 'She _____ a letter when her friend arrived.', opts: ['wrote', 'was writing', 'writes', 'is writing'], ans: 1, exp: '"when her friend arrived" = past interruption → past continuous: was writing.' },
    ],
    blanks: [
      { sentence: 'I _____ (study) at the library when you called me.', ans: ['was studying'], exp: '"when you called" = past interruption → I (singular) was + studying.' },
      { sentence: 'She _____ (cook) dinner when the phone rang.', ans: ['was cooking'], exp: '"when the phone rang" = past interruption → she (singular) was + cooking.' },
      { sentence: 'They _____ (paint) the fence when we arrived.', ans: ['were painting'], exp: '"when we arrived" = past interruption → they (plural) were + painting.' },
      { sentence: 'He _____ (write) a report when his friend came over.', ans: ['was writing'], exp: '"when his friend came over" → he (singular) was + writing.' },
      { sentence: 'We _____ (walk) in the park when it started to snow.', ans: ['were walking'], exp: '"when it started" = past interruption → we (plural) were + walking.' },
    ],
    corrections: [
      { sentence: 'They was playing soccer when it rained.', error: 'was', correct: 'were', exp: 'They (plural) → were, not was: They were playing soccer.' },
      { sentence: 'She was read a book when her mother came home.', error: 'read', correct: 'reading', exp: 'After "was", use verb-ing: She was reading a book.' },
      { sentence: 'He did his homework at 9:00 last night.', error: 'did', correct: 'was doing', exp: '"at 9:00 last night" describes a background action in progress → was doing.' },
      { sentence: 'We were went to the beach yesterday.', error: 'went', correct: 'going', exp: 'After "were", use verb-ing: We were going to the beach.' },
      { sentence: 'The birds was singing in the trees when we passed by.', error: 'was', correct: 'were', exp: '"Birds" is plural → were, not was: The birds were singing.' },
    ],
  },

  37: {
    title: '一般将来时',
    intro: '一般将来时表示将来要发生的动作。三种结构：①will + 动词原形（临时决定/预测）；②be going to + 动词原形（计划/明显迹象）；③shall + 动词原形（仅用于I/we）。时间标志词：tomorrow、next week/month、soon、later、in + 时间段。',
    questions: [
      { q: 'She _____ to the cinema next Saturday.', opts: ['go', 'went', 'will go', 'goes'], ans: 2, exp: '"next Saturday" → future: will go.' },
      { q: 'They _____ the meeting tomorrow.', opts: ["don't attend", "won't attend", "didn't attend", "doesn't attend"], ans: 1, exp: '"tomorrow" → future negative: won\'t attend.' },
      { q: '_____ you _____ your homework soon?', opts: ['Will; finish', 'Do; finish', 'Are; finishing', 'Did; finish'], ans: 0, exp: '"soon" → future question: Will + you + finish.' },
      { q: 'I _____ him at the station later.', opts: ['meet', 'will meet', 'met', 'meeting'], ans: 1, exp: '"later" → future: will meet.' },
      { q: 'We _____ to Japan next month.', opts: ['travels', 'will travel', 'travelled', 'travelling'], ans: 1, exp: '"next month" → future: will travel.' },
      { q: 'They _____ going to have a picnic this weekend.', opts: ['is', 'are', 'am', 'be'], ans: 1, exp: '"they" (plural) + be going to → are going to.' },
      { q: 'She _____ going to watch TV tonight.', opts: ["don't be", "isn't", "aren't", "won't be"], ans: 1, exp: 'Negative of "she is going to" → she isn\'t going to.' },
    ],
    blanks: [
      { sentence: 'I _____ (visit) my grandparents next weekend.', ans: ['will visit'], exp: '"next weekend" → future: will + visit.' },
      { sentence: 'She _____ (not join) the club meeting tomorrow.', ans: ["won't join", 'will not join'], exp: '"tomorrow" + negative → won\'t join.' },
      { sentence: '_____ you _____ (call) me later?', ans: ['Will', 'call'], exp: 'Future question: Will + you + call?' },
      { sentence: 'They _____ (start) the project in two days.', ans: ['will start'], exp: '"in two days" → future: will start.' },
      { sentence: 'He _____ (leave) for Paris soon.', ans: ['will leave'], exp: '"soon" → future: will leave.' },
    ],
    corrections: [
      { sentence: 'They will goes to the park tomorrow.', error: 'goes', correct: 'go', exp: 'After "will", always use the base form: will go (not goes).' },
      { sentence: "She don't finish her project next week.", error: "don't finish", correct: "won't finish", exp: 'Future negative → won\'t + base form: won\'t finish.' },
      { sentence: 'Will they attending the concert later?', error: 'attending', correct: 'attend', exp: 'After "will", always use the base form: Will they attend.' },
      { sentence: "He won't to buy a new car soon.", error: 'to buy', correct: 'buy', exp: 'After "won\'t", use base form without "to": He won\'t buy.' },
      { sentence: 'We is going to have a test next Monday.', error: 'is', correct: 'are', exp: '"We" (plural) → are going to: We are going to have a test.' },
    ],
  },
}
