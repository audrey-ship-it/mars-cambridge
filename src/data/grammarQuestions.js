// KET 语法考点题库
// questions = 单选题 | blanks = 挖空练习 | corrections = 改错题
import { GRAMMAR_PRONOUN_QUESTIONS } from './grammarPronounQuestions.js'
import { GRAMMAR_PREPOSITION_QUESTIONS } from './grammarPrepositionQuestions.js'
import { GRAMMAR_ADJECTIVE_QUESTIONS } from './grammarAdjectiveQuestions.js'
import { GRAMMAR_WORD_CORE_QUESTIONS } from './grammarWordCoreQuestions.js'
import { GRAMMAR_NOUN_BASE_QUESTIONS } from './grammarNounBaseQuestions.js'
import { GRAMMAR_NOUN_MORE_QUESTIONS } from './grammarNounMoreQuestions.js'
import { GRAMMAR_ARTICLE_PERSONAL_QUESTIONS } from './grammarArticlePersonalQuestions.js'
import { GRAMMAR_SENTENCE_QUESTIONS } from './grammarSentenceQuestions.js'
import { GRAMMAR_CLAUSE_QUESTIONS } from './grammarClauseQuestions.js'
import { GRAMMAR_ADVANCED_QUESTIONS } from './grammarAdvancedQuestions.js'
import { GRAMMAR_PAST_FORM_QUESTIONS } from './grammarPastFormQuestions.js'

export const GRAMMAR_QUESTIONS = {
  ...GRAMMAR_PRONOUN_QUESTIONS,
  ...GRAMMAR_PREPOSITION_QUESTIONS,
  ...GRAMMAR_ADJECTIVE_QUESTIONS,
  ...GRAMMAR_WORD_CORE_QUESTIONS,

  /* ─────────────────────────────────────────
     考点1：名词
  ───────────────────────────────────────── */

  1: {
    title: '普通名词和专有名词',
    intro: '普通名词（common noun）指一般事物，如 book、city；专有名词（proper noun）指特定人名、地名等，首字母必须大写，如 London、Mary。',
    questions: [
      { q: 'Which of the following is a proper noun?', qZh: '以下哪一个是专有名词？', opts: ['city', 'London', 'country', 'river'], ans: 1, exp: '“London”是特定城市的名称，属于专有名词，首字母必须大写。' },
      { q: 'Which word is a common noun?', qZh: '以下哪一个单词是普通名词？', opts: ['Paris', 'Monday', 'book', 'Mary'], ans: 2, exp: '“book”泛指一类事物，属于普通名词；Paris、Monday和Mary都是专有名词。' },
      { q: 'Choose the sentence that uses a proper noun correctly.', qZh: '选择正确使用专有名词的句子。', opts: ['I have a dog named max.', 'She lives in london.', 'We visited Italy last summer.', 'my teacher is kind.'], ans: 2, exp: '“Italy”是专有名词，并且正确使用了大写字母。其他句子中的Max、London或句首My都没有正确大写。' },
      { q: 'Which of the following MUST start with a capital letter?', qZh: '以下哪一个词必须以大写字母开头？', opts: ['table', 'river', 'amazon (the company)', 'car'], ans: 2, exp: '这里的“Amazon”是公司名称，属于专有名词，因此首字母必须大写。' },
      { q: 'The word "teacher" is a ___.', qZh: '单词“teacher”属于哪一种词？', opts: ['proper noun', 'common noun', 'pronoun', 'verb'], ans: 1, exp: '“teacher”泛指任何教师，并不是某个特定人的名字，所以它是普通名词。' },
    ],
    blanks: [
      { sentence: 'London is a ___ noun.', sentenceZh: 'London（伦敦）属于哪一种名词？', ans: ['proper'], expZh: 'London是一个特定城市的名称，属于专有名词（proper noun），而不是泛指城市的普通名词。' },
      { sentence: '"City" is a ___ noun.', sentenceZh: '“city”属于哪一种名词？', ans: ['common'], expZh: 'city泛指任何一座城市，不是某座特定城市的名称，因此属于普通名词（common noun）。' },
      { sentence: 'Proper nouns always start with a ___ letter.', sentenceZh: '专有名词的首字母必须使用什么形式？', ans: ['capital'], expZh: '英语中的专有名词（proper noun）必须以大写字母（capital letter）开头，例如London、Mary和Monday。' },
      { sentence: '"Monday" is a ___ noun.', sentenceZh: '“Monday”属于哪一种名词？', ans: ['proper'], expZh: 'Monday是星期一这一特定日期名称，属于专有名词（proper noun），首字母必须大写。' },
      { sentence: '"Book", "river" and "city" are all ___ nouns.', sentenceZh: '“book”“river”和“city”都属于哪一种名词？', ans: ['common'], expZh: 'book、river和city都泛指一类人或事物，没有指向某个特定名称，因此都是普通名词（common nouns）。' },
    ],
    corrections: [
      { sentence: 'I was born in paris.', sentenceZh: '我出生在巴黎。', error: 'paris', correct: 'Paris', expZh: 'Paris是特定城市的名称，属于专有名词（proper noun），首字母必须大写，因此应把paris改为Paris。' },
      { sentence: 'My friend mary is very kind.', sentenceZh: '我的朋友玛丽非常友善。', error: 'mary', correct: 'Mary', expZh: 'Mary是具体的人名，属于专有名词（proper noun），首字母必须大写，因此应把mary改为Mary。' },
      { sentence: 'We study english at school.', sentenceZh: '我们在学校学习英语。', error: 'english', correct: 'English', expZh: 'English是语言名称，属于专有名词（proper noun），首字母必须大写，因此应把english改为English。' },
      { sentence: 'She visited the eiffel tower last year.', sentenceZh: '她去年参观了埃菲尔铁塔。', error: 'eiffel tower', correct: 'Eiffel Tower', expZh: 'Eiffel Tower是特定地标的名称，属于专有名词，两个实词的首字母都要大写，因此应写成Eiffel Tower。' },
      { sentence: 'monday is my favourite day.', sentenceZh: '星期一是我最喜欢的一天。', error: 'monday', correct: 'Monday', expZh: 'Monday是星期名称，属于专有名词（proper noun），首字母必须大写；它位于句首时也同样需要大写。' },
    ],
  },

  2: {
    title: '可数名词和不可数名词',
    intro: '可数名词（countable noun）有单复数形式，可与 a/an 或数字搭配；不可数名词（uncountable noun）没有复数，不能直接用 a/an，如 water、music、advice、information。',
    questions: [
      { q: 'Which noun is uncountable?', qZh: '哪个名词是不可数名词？', opts: ['apple', 'chair', 'water', 'cat'], ans: 2, expZh: '“water（水）”是不可数名词，通常不能说“a water”或“two waters”。' },
      { q: 'Which sentence is correct?', qZh: '哪个句子是正确的？', opts: ['I need some informations.', 'Can I have two breads?', 'She has three cats.', 'He gave me an advice.'], ans: 2, expZh: '“cat”是可数名词，three后面使用复数形式cats，所以“She has three cats.”正确。information、bread和advice通常都是不可数名词。' },
      { q: 'Which of these nouns is countable?', qZh: '这些名词中，哪个是可数名词？', opts: ['music', 'sugar', 'sandwich', 'air'], ans: 2, expZh: '“sandwich（三明治）”是可数名词，可以说one sandwich或two sandwiches。' },
      { q: '"I drink a lot of ___." Which word fits best?', qZh: '“我喝很多……”这个句子中，哪个词最合适？', opts: ['coffees', 'coffee', 'a coffee', "coffee's"], ans: 1, expZh: '泛指咖啡时，coffee是不可数名词。a lot of后可直接接不可数名词，所以应填coffee。' },
      { q: 'Which sentence uses an uncountable noun incorrectly?', qZh: '哪个句子错误使用了不可数名词？', opts: ['There is some milk in the fridge.', 'She gave me two advices.', 'I need some help.', "We don't have much time."], ans: 1, expZh: 'advice是不可数名词，没有复数形式，不能说two advices。可以说two pieces of advice。' },
    ],
    blanks: [
      { sentence: '"Water" is an ___ noun.', sentenceZh: '“water”是一个什么类型的名词？', ans: ['uncountable'], expZh: 'water表示物质时不能直接按个数计算，也没有通常的复数形式，因此是不可数名词（uncountable noun）。' },
      { sentence: '"Apple" is a ___ noun.', sentenceZh: '“apple”是一个什么类型的名词？', ans: ['countable'], expZh: 'apple可以直接计数，可以说one apple、two apples，因此是可数名词（countable noun）。' },
      { sentence: 'You ___ say "two advices". (can/cannot)', sentenceZh: '你能不能说“two advices”？', ans: ['cannot', "can't", 'can not'], expZh: 'advice是不可数名词，没有复数形式，不能说two advices。表达两条建议可以说two pieces of advice。' },
      { sentence: '"Information" is an ___ noun.', sentenceZh: '“information”是一个什么类型的名词？', ans: ['uncountable'], expZh: 'information是不可数名词，不能直接按个数计算，也不能加-s变成informations。' },
      { sentence: 'She has three ___. (猫)', sentenceZh: '她有三只猫。请填入“猫”的正确英文形式。', ans: ['cats'], expZh: 'cat是可数名词。three表示三个，后面要使用名词复数形式cats。' },
    ],
    corrections: [
      { sentence: 'He gave me an advice about my homework.', sentenceZh: '他给了我一些关于家庭作业的建议。', error: 'an advice', correct: 'some advice', expZh: 'advice是不可数名词，不能与a/an直接连用。表示“一些建议”应使用some advice。' },
      { sentence: 'I need some informations for my project.', sentenceZh: '我的项目需要一些信息。', error: 'informations', correct: 'information', expZh: 'information是不可数名词，没有复数形式，不能加-s，因此应把informations改为information。' },
      { sentence: 'She bought two breads from the shop.', sentenceZh: '她从商店买了两条面包。', error: 'two breads', correct: 'two loaves of bread', expZh: 'bread是不可数名词，不能直接说two breads。表示“两条面包”要使用量词结构two loaves of bread。' },
      { sentence: 'Can you give me some furnitures?', sentenceZh: '你能给我一些家具吗？', error: 'furnitures', correct: 'furniture', expZh: 'furniture是表示家具总称的不可数名词，没有复数形式，不能加-s。因此应把furnitures改为furniture。' },
      { sentence: 'I have many homeworks to do tonight.', sentenceZh: '我今晚有很多家庭作业要做。', error: 'homeworks', correct: 'homework', expZh: 'homework是不可数名词，没有复数形式，不能加-s。表示“很多家庭作业”可以说a lot of homework或much homework。' },
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
      { q: 'Which of the following is a compound noun?', qZh: '以下哪一个是复合名词？', opts: ['beautiful', 'quickly', 'bedroom', 'running'], ans: 2, expZh: 'bedroom由bed和room两个词组合而成，表示“卧室”这一新的概念，因此是复合名词（compound noun）。' },
      { q: 'What does "notebook" mean?', qZh: '“notebook”是什么意思？', opts: ['a book about notes', 'a small book for writing notes', 'a note inside a book', 'writing on a note'], ans: 1, expZh: 'notebook由note和book组成，指“用来记笔记的小本子”，所以正确答案是a small book for writing notes。' },
      { q: 'Which sentence uses a compound noun correctly?', qZh: '哪个句子正确使用了复合名词？', opts: ['She works in a fire station.', 'He has a station fire.', 'The fire of station is busy.', 'Station fire is near.'], ans: 0, expZh: 'fire station是固定的复合名词，表示“消防站”，词序是fire在前、station在后，因此“She works in a fire station.”正确。' },
      { q: '"A ___bag" — which word completes this compound noun?', qZh: '“A ___bag”中填入哪个词可以组成复合名词？', opts: ['big', 'red', 'hand', 'nice'], ans: 2, expZh: 'hand和bag组合成handbag，表示“手提包”，因此应填hand。' },
      { q: 'Choose the compound noun that means "a brush used for teeth".', qZh: '选择表示“刷牙用的刷子”的复合名词。', opts: ['teethbrush', 'toothbrush', 'brushteeth', 'brushing teeth'], ans: 1, expZh: 'toothbrush由tooth和brush组成。复合名词中前面的名词通常使用单数形式，因此是toothbrush，不是teethbrush。' },
    ],
    blanks: [
      { sentence: 'A "sunflower" is a ___ noun.', sentenceZh: '“sunflower”是一个什么类型的名词？', ans: ['compound'], expZh: 'sunflower由sun和flower组合而成，表示“向日葵”，因此是复合名词（compound noun）。' },
      { sentence: 'A room with a bed is called a ___.', sentenceZh: '有床、供人睡觉的房间叫什么？', ans: ['bedroom'], expZh: 'bed和room组合成bedroom，表示“卧室”，这是一个写成一个单词的复合名词。' },
      { sentence: 'In the compound noun "toothbrush", the first word "tooth" is in the ___ form.', sentenceZh: '在复合名词“toothbrush”中，第一个词“tooth”使用什么形式？', ans: ['singular'], expZh: '复合名词中，前面的名词通常使用单数形式（singular form），所以是toothbrush，不是teethbrush。' },
      { sentence: 'A station for fire trucks is called a fire ___.', sentenceZh: '消防车所在的站点叫作什么？', ans: ['station'], expZh: 'fire和station组成复合名词fire station，表示“消防站”，因此应填station。' },
      { sentence: 'A book for noting things is called a ___.', sentenceZh: '用来记录事情的本子叫什么？', ans: ['notebook'], expZh: 'note和book组合成notebook，表示“笔记本”，因此应填notebook。' },
    ],
    corrections: [
      { sentence: 'She brushes her teeth with a teethbrush.', sentenceZh: '她用牙刷刷牙。', error: 'teethbrush', correct: 'toothbrush', expZh: '复合名词中前面的名词通常使用单数形式，因此应写toothbrush，不能写teethbrush。' },
      { sentence: 'He put his keys in his hand bag.', sentenceZh: '他把钥匙放进了手提包。', error: 'hand bag', correct: 'handbag', expZh: 'handbag是由hand和bag组成的复合名词，标准拼写是连写成一个单词。' },
      { sentence: 'The word is written as sun flower.', sentenceZh: '这个单词被写成了“sun flower”。', error: 'sun flower', correct: 'sunflower', expZh: 'sunflower是由sun和flower组成的复合名词，标准拼写是连写，不能分成两个词。' },
      { sentence: 'We walked past the fire-station on our way home.', sentenceZh: '回家途中，我们经过了消防站。', error: 'fire-station', correct: 'fire station', expZh: 'fire station是分开书写的复合名词，两个词之间使用空格，不使用连字符。' },
      { sentence: 'She opened her note book to write the answer.', sentenceZh: '她打开笔记本写答案。', error: 'note book', correct: 'notebook', expZh: 'notebook是由note和book组成的复合名词，标准拼写是连写成一个单词。' },
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
    guide: {
      uses: ['经常发生或习惯性的动作', '现在的状态、身份或喜好', '客观事实和普遍真理'],
      structures: ['be 动词：I am / You, We, They are / He, She, It is', '实义动词：I/You/We/They + 动词原形', '第三人称单数：He/She/It + 动词-s/-es'],
      signals: ['always', 'usually', 'often', 'sometimes', 'never', 'every day', 'once a week'],
      warning: '一般现在时使用实义动词时，不要在动词前多加 am/is/are；does 或 doesn’t 后面的动词必须恢复原形。',
    },
    questions: [
      { q: 'Which sentence is in the simple present tense?', qZh: '哪个句子使用了一般现在时？', opts: ['She was reading a book.', 'He plays football every Saturday.', 'They will go to the cinema.', 'I have been studying all day.'], ans: 1, expZh: 'every Saturday表示经常发生的习惯性动作，主语he是第三人称单数，因此play要变为plays。' },
      { q: '"She ___ to school every day."', qZh: '“她每天步行去学校。”空格处应填哪个词？', opts: ['walk', 'walks', 'walked', 'walking'], ans: 1, expZh: 'every day是一般现在时的标志；主语she是第三人称单数，所以walk要加-s，使用walks。' },
      { q: 'Which sentence is correct?', qZh: '哪个句子的语法是正确的？', opts: ["He don't like coffee.", "She doesn't likes tea.", "They doesn't play tennis.", "It doesn't work."], ans: 3, expZh: '主语it是第三人称单数，否定结构使用doesn’t + 动词原形，所以doesn’t work正确。' },
      { q: '"The sun ___ in the east."', qZh: '“太阳从东方升起。”空格处应填哪个词？', opts: ['rise', 'rises', 'is rising', 'rose'], ans: 1, expZh: '太阳从东方升起属于客观事实，使用一般现在时；主语the sun是第三人称单数，因此使用rises。' },
      { q: '"Do you like pizza?" — "Yes/No, I ___."', qZh: '回答“你喜欢披萨吗？”时，简短回答应使用哪一组词？', opts: ['do / don\'t', 'does / doesn\'t', 'did / didn\'t', 'am / am not'], ans: 0, expZh: 'Do you…?的一般现在时简短回答是Yes, I do.或No, I don’t.，助动词要与问句保持一致。' },
      { q: 'What is the simple present mainly used for?', qZh: '一般现在时主要用来表达什么？', opts: ['仅在此刻正在发生的动作', '习惯、现在的状态和客观事实', '昨天已经完成的动作', '明年将要发生的计划'], ans: 1, expZh: '一般现在时主要表达习惯性动作、现在的状态以及客观事实。正在发生的动作通常使用现在进行时，过去完成的动作使用一般过去时。' },
      { q: 'Which time expression is a common signal of the simple present?', qZh: '哪个时间表达是一般现在时常见的判断线索？', opts: ['此刻', '昨晚', '每天早晨', '下个月'], ans: 2, expZh: '“每天早晨”表示反复发生的事情，是一般现在时常见的频率表达。“此刻”常提示现在进行时，“昨晚”提示过去时，“下个月”提示将来时。' },
      { q: 'Which sentences are in the simple present tense?', qZh: '下面哪些句子使用了一般现在时？（多选）', opts: ['Amy walks to school every day.', 'The boys are playing outside now.', 'Water boils at 100°C.', 'We visited our aunt last Sunday.'], ans: [0, 2], expZh: 'A描述每天重复的习惯，C描述客观事实，两句都使用一般现在时。B是现在进行时，D是一般过去时。' },
      { q: 'Which sentences describe habits or routines?', qZh: '下面哪些句子描述习惯或日常规律？（多选）', opts: ['I brush my teeth twice a day.', 'She is doing her homework now.', 'They usually take the bus.', 'He went swimming yesterday.'], ans: [0, 2], expZh: 'twice a day和usually都是频率线索，说明动作经常或反复发生，因此A和C使用一般现在时描述习惯。' },
      { q: 'Which sentences express a present state?', qZh: '下面哪些句子表达现在的状态？（多选）', opts: ['Leo is twelve years old.', 'Mia likes science.', 'They were tired last night.', 'Sam is running in the park.'], ans: [0, 1], expZh: '年龄和喜好都属于现在的状态，因此A和B使用一般现在时。C表达过去状态，D表达此刻正在进行的动作。' },
      { q: 'Which sentence states a general fact?', qZh: '哪个句子表达客观事实或普遍真理？', opts: ['My brother is sleeping now.', 'The Earth goes around the Sun.', 'We went to the zoo yesterday.', 'I will call you later.'], ans: 1, expZh: 'The Earth goes around the Sun.描述客观事实，因此使用一般现在时；主语the Earth是第三人称单数，go变为goes。' },
      { q: 'Which words can signal a repeated action in the simple present?', qZh: '下面哪些词或短语可以提示一般现在时中的重复动作？（多选）', opts: ['often', 'every weekend', 'at the moment', 'never'], ans: [0, 1, 3], expZh: 'often、every weekend和never都能表示动作发生的频率，常与一般现在时连用。at the moment表示“此刻”，通常提示现在进行时。' },
      { q: 'Which sentence has the correct simple present structure?', qZh: '哪个句子符合一般现在时的正确结构？', opts: ['She is go to school by bus.', 'He doesn’t plays chess.', 'We often have lunch at home.', 'Does they live here?'], ans: 2, expZh: '主语we后直接使用动词原形have，often表示经常，因此C结构正确。A多用了is；B中doesn’t后应使用play；D中they应与Do搭配。' },
      { q: 'When the subject is he, she or it, what usually happens to the main verb in an affirmative simple present sentence?', qZh: '一般现在时肯定句中，主语是he、she或it时，实义动词通常发生什么变化？', opts: ['变成过去式', '加-s或-es', '必须放在will后面', '一律加-ing'], ans: 1, expZh: '一般现在时肯定句中，he、she、it属于第三人称单数，实义动词通常加-s或-es，例如plays、watches和goes。' },
      { q: 'Which statements about do and does are correct?', qZh: '关于一般现在时中的do和does，下面哪些说法正确？（多选）', opts: ['do与I、you、we和they搭配', 'does与he、she和it搭配', 'does后面的实义动词使用原形', '所有复数主语都与does搭配'], ans: [0, 1, 2], expZh: 'I、you、we、they通常与do搭配；he、she、it与does搭配；does后面的实义动词使用原形。复数主语不使用does。' },
    ],
    blanks: [
      { sentence: 'She ___ (like) chocolate.', sentenceZh: '她喜欢巧克力。请填入like的正确形式。', ans: ['likes'], expZh: '主语she是第三人称单数，一般现在时的肯定句中like要加-s，变为likes。' },
      { sentence: 'He ___ (not / watch) TV in the morning.', sentenceZh: '他早上不看电视。请使用括号中的词完成否定句。', ans: ["doesn't watch", 'does not watch'], expZh: '主语he是第三人称单数，否定结构为doesn’t + 动词原形，因此填写doesn’t watch。' },
      { sentence: '"The earth ___ around the sun." (go)', sentenceZh: '地球绕着太阳转。请填入go的正确形式。', ans: ['goes'], expZh: '这是客观事实，使用一般现在时；主语the earth是第三人称单数，go以-o结尾，要加-es变为goes。' },
      { sentence: 'They ___ (play) tennis every weekend.', sentenceZh: '他们每个周末都打网球。请填入play的正确形式。', ans: ['play'], expZh: 'every weekend表示习惯性动作；主语they不是第三人称单数，所以直接使用动词原形play。' },
      { sentence: '___ she speak French?', sentenceZh: '她会说法语吗？请填写句首的助动词。', ans: ['Does'], expZh: '主语she是第三人称单数，一般现在时的一般疑问句使用Does + 主语 + 动词原形。' },
      { sentence: 'My parents ___ (work) in a hospital.', sentenceZh: '我的父母在一家医院工作。请填入work的正确形式。', ans: ['work'], expZh: '主语my parents是复数，一般现在时肯定句使用动词原形work。' },
      { sentence: 'Tom usually ___ (wash) the dishes after dinner.', sentenceZh: 'Tom通常晚饭后洗碗。请填入wash的正确形式。', ans: ['washes'], expZh: 'usually提示一般现在时；Tom是第三人称单数，wash以-sh结尾，所以加-es变为washes。' },
      { sentence: 'We ___ (not / have) classes on Sunday.', sentenceZh: '我们星期日不上课。请使用括号中的词完成否定句。', ans: ["don't have", 'do not have'], expZh: '主语we使用don’t构成否定，don’t后面的动词保持原形have。' },
      { sentence: 'Your brother ___ (play) basketball every week.', sentenceZh: '你的哥哥每周打篮球。', ans: ['plays'], expZh: 'your brother是第三人称单数，一般现在时肯定句使用plays。' },
      { sentence: 'The library ___ (close) at six every day.', sentenceZh: '图书馆每天六点关门。请填入close的正确形式。', ans: ['closes'], expZh: 'every day提示一般现在时；the library是第三人称单数，close直接加-s变为closes。' },
      { sentence: 'I often ___ (read) before bed.', sentenceZh: '我经常在睡前阅读。请填入read的正确形式。', ans: ['read'], expZh: 'often表示经常，提示一般现在时；主语I后使用动词原形read。' },
      { sentence: 'Lucy ___ (study) English twice a week.', sentenceZh: 'Lucy每周学习两次英语。请填入study的正确形式。', ans: ['studies'], expZh: 'twice a week表示规律性动作；Lucy是第三人称单数，study以辅音字母+y结尾，要把y变i再加-es，成为studies。' },
      { sentence: 'Cats ___ (need) clean water every day.', sentenceZh: '猫每天都需要干净的水。请填入need的正确形式。', ans: ['need'], expZh: 'cats是复数主语，表示普遍情况时使用一般现在时，动词使用原形need。' },
      { sentence: '___ they usually walk to school?', sentenceZh: '他们通常步行去学校吗？请填写句首的助动词。', ans: ['Do'], expZh: '主语they是复数，一般现在时疑问句使用Do开头。' },
      { sentence: 'Anna ___ (not / do) her homework in the morning.', sentenceZh: 'Anna早上不做家庭作业。请使用括号中的词完成否定句。', ans: ["doesn't do", 'does not do'], expZh: 'Anna是第三人称单数，否定结构使用doesn’t + 动词原形do。' },
    ],
    corrections: [
      { sentence: 'She don\'t like spicy food.', sentenceZh: '她不喜欢辛辣的食物。', error: "don't", correct: "doesn't", expZh: '主语she是第三人称单数，一般现在时否定句应使用doesn’t，因此将don’t改为doesn’t。' },
      { sentence: 'He plays tennis every day?', sentenceZh: '他每天打网球吗？', error: 'He plays', correct: 'Does he play', expZh: '实义动词的一般疑问句应使用Does + 主语 + 动词原形，因此改为Does he play…?' },
      { sentence: 'The sun rise in the east every morning.', sentenceZh: '太阳每天早晨从东方升起。', error: 'rise', correct: 'rises', expZh: '主语the sun是第三人称单数，一般现在时的肯定句中rise要加-s，变为rises。' },
      { sentence: 'She doesn\'t likes ice cream.', sentenceZh: '她不喜欢冰淇淋。', error: 'likes', correct: 'like', expZh: 'doesn’t已经体现第三人称单数，后面的实义动词必须使用原形，因此将likes改为like。' },
      { sentence: 'Do he play football?', sentenceZh: '他踢足球吗？', error: 'Do he', correct: 'Does he', expZh: '主语he是第三人称单数，一般现在时疑问句要用Does开头，因此将Do he改为Does he。' },
      { sentence: 'My sister walk to school every day.', sentenceZh: '我的姐姐每天步行去学校。', error: 'walk', correct: 'walks', expZh: '主语my sister是第三人称单数，一般现在时肯定句中walk要加-s，改为walks。' },
      { sentence: 'They goes swimming on Saturdays.', sentenceZh: '他们每周六去游泳。', error: 'goes', correct: 'go', expZh: '主语they是复数，一般现在时肯定句使用动词原形，因此将goes改为go。' },
      { sentence: 'Does your parents work nearby?', sentenceZh: '你的父母在附近工作吗？', error: 'Does', correct: 'Do', expZh: 'your parents是复数主语，一般现在时疑问句使用Do开头，而不是Does。' },
      { sentence: 'Ben doesn’t watches TV before school.', sentenceZh: 'Ben上学前不看电视。', error: 'watches', correct: 'watch', expZh: 'doesn’t后面的实义动词必须使用原形，因此将watches改为watch。' },
      { sentence: 'I am usually get up at seven.', sentenceZh: '我通常七点起床。', error: 'am usually get', correct: 'usually get', expZh: '一般现在时使用实义动词get时，前面不能再加am；频率副词usually放在实义动词前。' },
      { sentence: 'The shops closes at nine o’clock.', sentenceZh: '这些商店九点关门。', error: 'closes', correct: 'close', expZh: '主语the shops是复数，一般现在时肯定句使用动词原形close。' },
      { sentence: 'How often does Mia visits her grandma?', sentenceZh: 'Mia多久看望一次她的奶奶？', error: 'visits', correct: 'visit', expZh: '疑问句中已经使用does，后面的实义动词必须恢复原形，因此visits改为visit。' },
      { sentence: 'Water boil at 100°C.', sentenceZh: '水在100摄氏度沸腾。', error: 'boil', correct: 'boils', expZh: '这是客观事实，使用一般现在时；water作不可数名词时视为单数，因此使用boils。' },
      { sentence: 'We doesn’t have lunch at school.', sentenceZh: '我们不在学校吃午饭。', error: 'doesn’t', correct: 'don’t', expZh: '主语we使用don’t构成一般现在时否定句，doesn’t只与第三人称单数主语搭配。' },
      { sentence: 'Is Leo like science?', sentenceZh: 'Leo喜欢科学吗？', error: 'Is', correct: 'Does', expZh: 'like是实义动词，一般现在时疑问句要借助do/does；Leo是第三人称单数，因此使用Does。' },
    ],
  },

  35: {
    title: '一般过去时',
    intro: '一般过去时用于谈论过去完成的动作。规则动词加 -ed（worked, played）；不规则动词需记忆（go→went, eat→ate, see→saw, have→had）。否定用 didn\'t + 动词原形；疑问用 Did + 主语 + 原形。',
    guide: {
      uses: ['过去某个时间发生并已结束的动作', '过去经常或反复发生的事情', '过去存在的状态'],
      structures: ['肯定：主语 + 动词过去式', '否定：主语 + didn’t + 动词原形', '疑问：Did + 主语 + 动词原形？'],
      signals: ['yesterday', 'last week', 'ago', 'in 2025', 'when I was young'],
      warning: 'did 或 didn’t 后必须使用动词原形；不规则动词的过去式需要单独记忆。',
    },
    questions: [
      { q: 'What is the simple past mainly used for?', qZh: '一般过去时主要用来表达什么？', opts: ['过去发生并已结束的动作或状态', '此刻正在发生的动作', '未来的计划', '从过去持续到现在的动作'], ans: 0, expZh: '一般过去时表示过去某个时间发生并已经结束的动作或状态。' },
      { q: 'Which expressions commonly signal the simple past?', qZh: '下面哪些时间表达常提示一般过去时？（多选）', opts: ['yesterday', 'last week', 'two days ago', 'right now'], ans: [0,1,2], expZh: 'yesterday、last week和ago都表示过去且已结束的时间；right now指此刻。' },
      { q: 'What is the past tense of “go”?', qZh: 'go的过去式是什么？', opts: ['goed', 'goes', 'went', 'gone'], ans: 2, expZh: 'go是不规则动词，一般过去式是went。' },
      { q: 'Which past forms are correct?', qZh: '下面哪些动词过去式正确？（多选）', opts: ['play → played', 'study → studied', 'see → saw', 'buy → buyed'], ans: [0,1,2], expZh: 'played、studied和saw正确；buy是不规则动词，过去式是bought。' },
      { q: 'She _____ a letter yesterday.', qZh: '她昨天写了一封信。空格处应填什么？', opts: ['write', 'writes', 'written', 'wrote'], ans: 3, expZh: 'yesterday提示一般过去时，write的不规则过去式是wrote。' },
      { q: 'Which sentences are in the simple past?', qZh: '下面哪些句子使用了一般过去时？（多选）', opts: ['We watched a film last night.', 'She is reading now.', 'Tom went home early.', 'They play every day.'], ans: [0,2], expZh: 'watched和went都是过去式，分别描述过去已经结束的动作。' },
      { q: 'Which sentence is correct?', qZh: '哪个一般过去时句子的结构正确？', opts: ["He didn't went to school.", "She didn't ate lunch.", "They didn't play football.", "I didn't was happy."], ans: 2, expZh: 'didn’t后必须使用动词原形，所以didn’t play正确。' },
      { q: 'Did you ___ TV last night?', qZh: '你昨晚看电视了吗？空格处应填什么？', opts: ['watched', 'watches', 'watch', 'watching'], ans: 2, expZh: 'Did开头的疑问句中，实义动词使用原形watch。' },
      { q: 'Which negatives are formed correctly?', qZh: '下面哪些一般过去时否定句正确？（多选）', opts: ["I didn’t see him.", "She didn’t went out.", "They didn’t finish.", "He not played."], ans: [0,2], expZh: '一般过去时否定结构是didn’t + 动词原形，因此A和C正确。' },
      { q: 'Which question is correct?', qZh: '哪个一般过去时疑问句正确？', opts: ['Did she called you?', 'Does she call yesterday?', 'Did she call you?', 'Was she call you?'], ans: 2, expZh: '一般过去时疑问句结构为Did + 主语 + 动词原形。' },
      { q: 'What is the past tense of “have”?', qZh: 'have的过去式是什么？', opts: ['haved', 'has', 'had', 'having'], ans: 2, expZh: 'have是不规则动词，过去式是had。' },
      { q: 'Which sentences describe past habits?', qZh: '下面哪些句子描述过去的习惯？（多选）', opts: ['We walked to school every day when we were young.', 'I am walking now.', 'Dad often read to us at night.', 'She will walk tomorrow.'], ans: [0,2], expZh: 'A和C都描述过去反复发生的事情，使用一般过去时。' },
      { q: 'Which spelling is correct?', qZh: '哪个规则动词过去式拼写正确？', opts: ['stoped', 'stopped', 'studyed', 'planed'], ans: 1, expZh: 'stop是重读闭音节，过去式双写p再加-ed，成为stopped。' },
      { q: 'Leo _____ breakfast at seven yesterday.', qZh: 'Leo昨天七点吃了早餐。空格处应填什么？', opts: ['eats', 'ate', 'eaten', 'is eating'], ans: 1, expZh: 'yesterday提示过去；eat的不规则过去式是ate。' },
      { q: 'Which statements about “did” are correct?', qZh: '关于did，下面哪些说法正确？（多选）', opts: ['did可用于一般过去时疑问句', 'didn’t后接动词原形', 'did后必须接过去式', 'did适用于所有人称'], ans: [0,1,3], expZh: 'did可用于所有人称的过去时疑问句；did/didn’t后都接动词原形。' },
    ],
    blanks: [
      { sentence: 'She ___ (visit) Paris last summer.', sentenceZh: '她去年夏天游览了巴黎。', ans: ['visited'], expZh: 'last summer提示过去；visit是规则动词，加-ed成为visited。' },
      { sentence: 'He ___ (not / go) to school yesterday.', sentenceZh: '他昨天没有上学。', ans: ["didn't go",'did not go'], expZh: '过去时否定使用didn’t + 动词原形go。' },
      { sentence: 'I ___ (eat) a big breakfast this morning.', sentenceZh: '我今天早晨吃了一顿丰盛的早餐。', ans: ['ate'], expZh: 'eat是不规则动词，过去式是ate。' },
      { sentence: 'They ___ (play) football yesterday.', sentenceZh: '他们昨天踢了足球。', ans: ['played'], expZh: 'play是规则动词，过去式加-ed。' },
      { sentence: 'Mia ___ (see) a rainbow after the rain.', sentenceZh: '雨后Mia看见了一道彩虹。', ans: ['saw'], expZh: 'see的不规则过去式是saw。' },
      { sentence: 'We ___ (study) English last night.', sentenceZh: '我们昨晚学习了英语。', ans: ['studied'], expZh: 'study以辅音字母+y结尾，变y为i再加-ed。' },
      { sentence: 'Dad ___ (buy) some fruit yesterday.', sentenceZh: '爸爸昨天买了一些水果。', ans: ['bought'], expZh: 'buy是不规则动词，过去式是bought。' },
      { sentence: 'The bus ___ (stop) near our school.', sentenceZh: '公交车停在了学校附近。', ans: ['stopped'], expZh: 'stop双写p再加-ed，成为stopped。' },
      { sentence: 'Anna ___ (not / finish) her homework.', sentenceZh: 'Anna没有完成家庭作业。', ans: ["didn't finish",'did not finish'], expZh: 'didn’t后使用动词原形finish。' },
      { sentence: 'Leo ___ (have) a cold last week.', sentenceZh: 'Leo上周感冒了。', ans: ['had'], expZh: 'have的不规则过去式是had。' },
      { sentence: 'The children ___ (dance) at the party.', sentenceZh: '孩子们在聚会上跳了舞。', ans: ['danced'], expZh: 'dance以e结尾，直接加-d成为danced。' },
      { sentence: 'I ___ (write) an email two hours ago.', sentenceZh: '我两小时前写了一封邮件。', ans: ['wrote'], expZh: 'ago提示过去；write的过去式是wrote。' },
      { sentence: 'She ___ (carry) the box upstairs.', sentenceZh: '她把箱子搬到了楼上。', ans: ['carried'], expZh: 'carry变y为i再加-ed，成为carried。' },
      { sentence: 'We ___ (not / know) the answer.', sentenceZh: '我们当时不知道答案。', ans: ["didn't know",'did not know'], expZh: '否定结构是didn’t + know原形。' },
      { sentence: 'Tom ___ (come) home late yesterday.', sentenceZh: 'Tom昨天很晚才回家。', ans: ['came'], expZh: 'come是不规则动词，过去式是came。' },
    ],
    corrections: [
      { sentence: 'She didn\'t went to the party.', sentenceZh: '她没有去参加聚会。', error: 'went', correct: 'go', expZh: 'didn’t后使用动词原形go。' },
      { sentence: 'Did he ate breakfast?', sentenceZh: '他吃早餐了吗？', error: 'ate', correct: 'eat', expZh: 'Did疑问句中动词使用原形eat。' },
      { sentence: 'I seed a great film yesterday.', sentenceZh: '我昨天看了一部很棒的电影。', error: 'seed', correct: 'saw', expZh: 'see是不规则动词，过去式是saw。' },
      { sentence: 'They goed to the beach.', sentenceZh: '他们去了海滩。', error: 'goed', correct: 'went', expZh: 'go是不规则动词，过去式是went。' },
      { sentence: 'He didn\'t played football.', sentenceZh: '他没有踢足球。', error: 'played', correct: 'play', expZh: 'didn’t后使用动词原形play。' },
      { sentence: 'We buyed some bread yesterday.', sentenceZh: '我们昨天买了一些面包。', error: 'buyed', correct: 'bought', expZh: 'buy是不规则动词，过去式是bought。' },
      { sentence: 'Mia studyed hard last night.', sentenceZh: 'Mia昨晚努力学习了。', error: 'studyed', correct: 'studied', expZh: 'study变y为i再加-ed。' },
      { sentence: 'The bus stoped outside school.', sentenceZh: '公交车停在学校外面。', error: 'stoped', correct: 'stopped', expZh: 'stop双写p再加-ed。' },
      { sentence: 'Did they visited London?', sentenceZh: '他们游览伦敦了吗？', error: 'visited', correct: 'visit', expZh: 'Did后使用动词原形visit。' },
      { sentence: 'She didn’t wrote an email.', sentenceZh: '她没有写电子邮件。', error: 'wrote', correct: 'write', expZh: 'didn’t后使用动词原形write。' },
      { sentence: 'I eated lunch at noon.', sentenceZh: '我中午吃了午饭。', error: 'eated', correct: 'ate', expZh: 'eat的不规则过去式是ate。' },
      { sentence: 'They was happy yesterday.', sentenceZh: '他们昨天很开心。', error: 'was', correct: 'were', expZh: '主语they是复数，be动词过去式使用were。' },
      { sentence: 'He were at home last night.', sentenceZh: '他昨晚在家。', error: 'were', correct: 'was', expZh: '主语he是单数，be动词过去式使用was。' },
      { sentence: 'We didn’t knew the answer.', sentenceZh: '我们不知道答案。', error: 'knew', correct: 'know', expZh: 'didn’t后使用动词原形know。' },
      { sentence: 'Anna carryed the bag upstairs.', sentenceZh: 'Anna把包搬到了楼上。', error: 'carryed', correct: 'carried', expZh: 'carry变y为i再加-ed，成为carried。' },
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
    guide: {
      uses: ['说话时正在发生的动作', '当前一段时间正在进行的事情', '描述图片中人物正在进行的动作'],
      structures: ['肯定：主语 + am/is/are + doing', '否定：主语 + am/is/are not + doing', '疑问：Am/Is/Are + 主语 + doing？'],
      signals: ['now', 'at the moment', 'right now', 'look', 'listen', 'these days'],
      warning: '不能漏掉be动词；be动词后使用-ing形式。understand、know、like等状态动词通常不用进行时。',
    },
    questions: [
      { q: 'What is the present continuous mainly used for?', qZh: '现在进行时主要用来表达什么？', opts: ['此刻或现阶段正在进行的动作', '过去已经结束的动作', '每天重复的习惯', '将来的客观事实'], ans: 0, expZh: '现在进行时主要表示说话时正在发生的动作，或当前一段时间正在进行的事情。' },
      { q: 'Which structure forms the present continuous?', qZh: '现在进行时的基本结构是什么？', opts: ['主语 + 动词过去式', '主语 + have/has + done', '主语 + am/is/are + doing', '主语 + will + 动词原形'], ans: 2, expZh: '现在进行时由主语 + be动词（am/is/are）+ 动词-ing构成。' },
      { q: 'Which words commonly signal the present continuous?', qZh: '下面哪些词常提示使用现在进行时？（多选）', opts: ['now', 'at the moment', 'every Sunday', 'Look!'], ans: [0, 1, 3], expZh: 'now、at the moment和Look!都提示动作正在进行；every Sunday表示规律性动作，通常使用一般现在时。' },
      { q: 'Which sentences are in the present continuous?', qZh: '下面哪些句子使用了现在进行时？（多选）', opts: ['Mia is drawing a picture.', 'They play tennis every Friday.', 'We are waiting for the bus.', 'Dad cooked dinner yesterday.'], ans: [0, 2], expZh: 'A和C均使用be动词 + 动词-ing，表示正在进行的动作。B是一般现在时，D是一般过去时。' },
      { q: 'Look! She _____ in the park.', qZh: '看！她正在公园里跑步。空格处应填什么？', opts: ['runs', 'is running', 'run', 'was running'], ans: 1, expZh: 'Look!提示动作正在发生；主语she与is搭配，因此使用is running。' },
      { q: 'They _____ dinner at the moment.', qZh: '他们此刻正在吃晚饭。空格处应填什么？', opts: ['have', 'had', 'are having', 'will have'], ans: 2, expZh: 'at the moment提示现在进行时；主语they与are搭配，have去e加-ing成为having。' },
      { q: '_____ he _____ the piano right now?', qZh: '他现在正在弹钢琴吗？应选择哪个结构？', opts: ['Is; playing', 'Does; play', 'Was; playing', 'Do; play'], ans: 0, expZh: '现在进行时疑问句把be动词提前，结构为Is + he + playing。' },
      { q: 'Which sentences describe actions happening now?', qZh: '下面哪些句子描述此刻正在发生的动作？（多选）', opts: ['Listen! The baby is crying.', 'I know the answer.', 'The students are taking a test now.', 'Tom walks home every day.'], ans: [0, 2], expZh: 'Listen!和now都是现在进行时的判断线索，因此A和C描述此刻正在发生的动作。' },
      { q: 'Which sentence describes a temporary situation?', qZh: '哪个句子描述当前阶段的临时情况？', opts: ['The Earth goes around the Sun.', 'Lily is staying with her aunt this week.', 'We visited London last year.', 'He usually gets up early.'], ans: 1, expZh: 'this week表示当前一段时间；is staying说明Lily暂时住在姑妈家，属于现阶段的临时情况。' },
      { q: 'Which “-ing” forms are correct?', qZh: '下面哪些-ing形式拼写正确？（多选）', opts: ['make → making', 'run → running', 'lie → lying', 'sit → siting'], ans: [0, 1, 2], expZh: 'make去e加-ing；run双写n再加-ing；lie变ie为y再加-ing。sit应写成sitting。' },
      { q: 'Which sentence is grammatically correct?', qZh: '哪个现在进行时句子的结构正确？', opts: ['She reading a book.', 'They is playing outside.', 'I am doing my homework.', 'He is cook dinner.'], ans: 2, expZh: 'I am doing符合主语 + be动词 + 动词-ing结构。其他选项漏掉be动词或使用了错误形式。' },
      { q: 'Which sentences are negative present continuous sentences?', qZh: '下面哪些句子是现在进行时的否定句？（多选）', opts: ["I’m not listening to music.", "She doesn’t like coffee.", "They aren’t sleeping.", "He didn’t call me."], ans: [0, 2], expZh: '现在进行时否定结构是am/is/are + not + doing，因此A和C正确。' },
      { q: 'Which sentence should NOT normally use the present continuous?', qZh: '哪个句子通常不应该使用现在进行时？', opts: ['The children are running outside.', 'I am knowing the answer.', 'She is talking on the phone.', 'We are studying for the exam.'], ans: 1, expZh: 'know表示认知状态，通常不用进行时，应说I know the answer。' },
      { q: 'My sister usually _____ early, but tonight she _____ a film.', qZh: '我姐姐通常早睡，但今晚她正在看电影。应选择哪组词？', opts: ['sleeps; is watching', 'is sleeping; watches', 'slept; watched', 'sleep; watch'], ans: 0, expZh: 'usually提示一般现在时，用sleeps；tonight表示当前特殊安排，使用is watching。' },
      { q: 'Which questions use the present continuous correctly?', qZh: '下面哪些疑问句正确使用了现在进行时？（多选）', opts: ['Are you waiting for someone?', 'Does she working today?', 'Is it raining outside?', 'Do they are studying?'], ans: [0, 2], expZh: '现在进行时疑问句结构为Am/Is/Are + 主语 + doing，因此A和C正确。' },
    ],
    blanks: [
      { sentence: 'Look! The children ___ (play) in the garden.', sentenceZh: '看！孩子们正在花园里玩。', ans: ['are playing'], expZh: 'Look!提示现在进行时；children是复数，与are搭配，所以填写are playing。' },
      { sentence: 'Mum ___ (cook) dinner at the moment.', sentenceZh: '妈妈此刻正在做晚饭。', ans: ['is cooking'], expZh: 'at the moment提示现在进行时；Mum是单数，因此使用is cooking。' },
      { sentence: 'I ___ (write) an email now.', sentenceZh: '我现在正在写电子邮件。', ans: ['am writing'], expZh: '主语I与am搭配；write去掉词尾e再加-ing，成为writing。' },
      { sentence: 'Listen! Someone ___ (knock) at the door.', sentenceZh: '听！有人正在敲门。', ans: ['is knocking'], expZh: 'Listen!提示动作正在发生；someone视为单数，因此填写is knocking。' },
      { sentence: 'The dog ___ (run) across the field.', sentenceZh: '那只狗正在跑过田野。', ans: ['is running'], expZh: 'dog是单数，与is搭配；run双写n再加-ing，成为running。' },
      { sentence: 'We ___ (study) for the KET exam this week.', sentenceZh: '我们这周正在为KET考试学习。', ans: ['are studying'], expZh: 'this week表示当前阶段正在进行；we与are搭配，所以填写are studying。' },
      { sentence: 'Ella ___ (not / sleep) now.', sentenceZh: 'Ella现在没有睡觉。', ans: ["isn't sleeping", 'is not sleeping'], expZh: '现在进行时否定结构为is not + doing，因此填写isn’t sleeping。' },
      { sentence: 'The boys ___ (swim) in the pool.', sentenceZh: '男孩们正在游泳池里游泳。', ans: ['are swimming'], expZh: 'boys是复数，与are搭配；swim双写m再加-ing。' },
      { sentence: 'My teacher ___ (speak) to another student.', sentenceZh: '我的老师正在和另一名学生说话。', ans: ['is speaking'], expZh: 'teacher是单数，与is搭配；speak直接加-ing。' },
      { sentence: 'It ___ (rain) heavily outside.', sentenceZh: '外面正下着大雨。', ans: ['is raining'], expZh: '主语it与is搭配，rain直接加-ing，构成is raining。' },
      { sentence: 'You ___ (sit) in my chair!', sentenceZh: '你正坐在我的椅子上！', ans: ['are sitting'], expZh: 'you与are搭配；sit双写t再加-ing，成为sitting。' },
      { sentence: 'The baby ___ (lie) on the bed.', sentenceZh: '婴儿正躺在床上。', ans: ['is lying'], expZh: 'baby是单数，与is搭配；lie变ie为y再加-ing，成为lying。' },
      { sentence: 'They ___ (not / watch) TV right now.', sentenceZh: '他们现在没有看电视。', ans: ["aren't watching", 'are not watching'], expZh: 'they与are搭配，否定结构为are not watching。' },
      { sentence: 'Anna ___ (dance) on the stage.', sentenceZh: 'Anna正在舞台上跳舞。', ans: ['is dancing'], expZh: 'Anna是单数，与is搭配；dance去e加-ing，成为dancing。' },
      { sentence: 'Dad ___ (make) breakfast in the kitchen.', sentenceZh: '爸爸正在厨房做早餐。', ans: ['is making'], expZh: 'Dad是单数，与is搭配；make去e加-ing，成为making。' },
    ],
    corrections: [
      { sentence: 'She are reading a book right now.', sentenceZh: '她现在正在看书。', error: 'are', correct: 'is', expZh: '主语she是单数，现在进行时应与is搭配，因此将are改为is。' },
      { sentence: 'Look! The boy run across the street.', sentenceZh: '看！那个男孩正跑过马路。', error: 'run', correct: 'is running', expZh: 'Look!提示现在进行时，the boy是单数，因此应使用is running。' },
      { sentence: 'They is watching TV at the moment.', sentenceZh: '他们此刻正在看电视。', error: 'is', correct: 'are', expZh: '主语they是复数，现在进行时与are搭配，因此将is改为are。' },
      { sentence: 'He is play basketball with his friends.', sentenceZh: '他正在和朋友们打篮球。', error: 'play', correct: 'playing', expZh: 'be动词is后必须使用动词-ing，因此将play改为playing。' },
      { sentence: 'I am not understanding this question.', sentenceZh: '我不理解这个问题。', error: 'am not understanding', correct: "don't understand", expZh: 'understand表示认知状态，通常不用进行时，应使用一般现在时don’t understand。' },
      { sentence: 'We am waiting for the bus.', sentenceZh: '我们正在等公交车。', error: 'am', correct: 'are', expZh: '主语we与are搭配，因此将am改为are。' },
      { sentence: 'Mia is danceing in her room.', sentenceZh: 'Mia正在房间里跳舞。', error: 'danceing', correct: 'dancing', expZh: 'dance以不发音的e结尾，变-ing形式时要去e再加-ing，写成dancing。' },
      { sentence: 'The children playing in the garden.', sentenceZh: '孩子们正在花园里玩。', error: 'playing', correct: 'are playing', expZh: '现在进行时不能漏掉be动词；children是复数，因此应使用are playing。' },
      { sentence: 'Is they doing their homework?', sentenceZh: '他们正在做家庭作业吗？', error: 'Is', correct: 'Are', expZh: '主语they是复数，现在进行时疑问句应以Are开头。' },
      { sentence: 'Tom is swiming in the pool.', sentenceZh: 'Tom正在游泳池里游泳。', error: 'swiming', correct: 'swimming', expZh: 'swim变-ing形式时要双写词尾m，正确拼写是swimming。' },
      { sentence: 'I is writing a story now.', sentenceZh: '我现在正在写故事。', error: 'is', correct: 'am', expZh: '主语I只能与am搭配，因此将is改为am。' },
      { sentence: 'Listen! The baby crying.', sentenceZh: '听！婴儿正在哭。', error: 'crying', correct: 'is crying', expZh: '现在进行时结构需要be动词；baby是单数，因此使用is crying。' },
      { sentence: 'She is makeing a cake.', sentenceZh: '她正在做蛋糕。', error: 'makeing', correct: 'making', expZh: 'make以不发音的e结尾，去e加-ing，正确拼写是making。' },
      { sentence: 'They aren’t play football now.', sentenceZh: '他们现在没有踢足球。', error: 'play', correct: 'playing', expZh: 'are not后面使用动词-ing，因此将play改为playing。' },
      { sentence: 'Are Leo studying for the test?', sentenceZh: 'Leo正在为考试学习吗？', error: 'Are', correct: 'Is', expZh: 'Leo是第三人称单数，现在进行时疑问句应以Is开头。' },
    ],
  },

  31: {
    title: '现在完成时',
    intro: '现在完成时表示①过去动作对现在的影响，②从过去持续到现在的状态。结构：主语 + have/has + 过去分词。时间标志词：just（刚刚）、never（从未）、yet（否定/疑问句）、ever（曾经）、already（已经）、for+时间段、since+时间点。',
    guide: {
      uses: ['过去发生的动作对现在产生影响', '从过去开始并持续到现在的状态', '谈论截至现在的经历或次数'],
      structures: ['肯定：主语 + have/has + 过去分词', '否定：主语 + haven’t/hasn’t + 过去分词', '疑问：Have/Has + 主语 + 过去分词？'],
      signals: ['already', 'just', 'yet', 'ever', 'never', 'for', 'since', 'recently'],
      warning: 'have/has后必须使用过去分词；for后接时间段，since后接时间点或过去发生的事件。',
    },
    questions: [
      { q: 'What is the basic structure of the present perfect?', qZh: '现在完成时的基本结构是什么？', opts: ['主语 + 动词过去式', '主语 + have/has + 过去分词', '主语 + be + 动词-ing', '主语 + will + 动词原形'], ans: 1, expZh: '现在完成时由have或has加动词的过去分词构成。' },
      { q: 'Which uses belong to the present perfect?', qZh: '下面哪些属于现在完成时的常见用法？（多选）', opts: ['过去动作对现在有影响', '从过去持续到现在', '只描述明确发生在昨天的动作', '谈论截至现在的经历'], ans: [0,1,3], expZh: '现在完成时强调与现在的联系，也可表示持续状态和人生经历；明确在昨天结束的动作通常用一般过去时。' },
      { q: 'Which time expressions often signal the present perfect?', qZh: '哪些时间表达常提示现在完成时？（多选）', opts: ['already', 'yet', 'since 2024', 'last Sunday'], ans: [0,1,2], expZh: 'already、yet、since常与现在完成时搭配；last Sunday是已结束的过去时间。' },
      { q: 'She _____ her homework already.', qZh: '她已经完成家庭作业了。空格处应填什么？', opts: ['finishes', 'finished', 'has finished', 'is finishing'], ans: 2, expZh: 'already强调截至现在已经完成，she使用has finished。' },
      { q: 'We _____ here for five years.', qZh: '我们在这里住了五年，并且现在仍住在这里。空格处应填什么？', opts: ['live', 'lived', 'have lived', 'are living'], ans: 2, expZh: 'for five years表示从过去持续至今，we使用have lived。' },
      { q: 'Which sentences are in the present perfect?', qZh: '下面哪些句子使用了现在完成时？（多选）', opts: ['I have lost my key.', 'She went home yesterday.', 'They have visited Beijing twice.', 'He is reading now.'], ans: [0,2], expZh: 'A和C都是have/has + 过去分词，并与现在结果或经历有关。' },
      { q: 'Which sentence uses “since” correctly?', qZh: '哪个句子正确使用了since？', opts: ['I have lived here since three years.', 'I have lived here since 2023.', 'I lived here since 2023 yesterday.', 'I am living here since three years.'], ans: 1, expZh: 'since后接起点，2023是时间点；时间段应放在for后。' },
      { q: 'Which sentence uses “for” correctly?', qZh: '哪个句子正确使用了for？', opts: ['She has studied English for two years.', 'She has studied English for 2022.', 'She studied English for now.', 'She is studying English for yesterday.'], ans: 0, expZh: 'for后接持续的时间段，two years是时间段。' },
      { q: '_____ you ever _____ sushi?', qZh: '你曾经吃过寿司吗？空格处应填什么？', opts: ['Did; eat', 'Have; eaten', 'Are; eating', 'Has; ate'], ans: 1, expZh: 'ever常用于询问经历，结构为Have you ever eaten。' },
      { q: 'He _____ never _____ abroad.', qZh: '他从未去过国外。空格处应填什么？', opts: ['has; been', 'have; been', 'has; went', 'did; been'], ans: 0, expZh: 'he使用has，表示去过某地的经历使用been。' },
      { q: 'Which sentence is correct?', qZh: '哪个现在完成时句子的结构正确？', opts: ['She has wrote a letter.', 'She have written a letter.', 'She has written a letter.', 'She did written a letter.'], ans: 2, expZh: 'write的过去分词是written，she搭配has。' },
      { q: 'Which negatives are correct?', qZh: '下面哪些现在完成时否定句正确？（多选）', opts: ["I haven’t finished yet.", "He hasn’t called me.", "She hasn’t went home.", "They not have arrived."], ans: [0,1], expZh: '否定结构为haven’t/hasn’t + 过去分词；went应改为gone，D缺少正确的助动词顺序。' },
      { q: 'Which question is formed correctly?', qZh: '哪个现在完成时疑问句结构正确？', opts: ['Have she finished?', 'Has she finished?', 'Did she finished?', 'Has she finish?'], ans: 1, expZh: 'she搭配has，疑问句把Has置于主语前，后接过去分词finished。' },
      { q: 'Tom is not here. He _____ to the library.', qZh: 'Tom现在不在这里，他去了图书馆。空格处应填什么？', opts: ['has been', 'has gone', 'went yesterday', 'is going every day'], ans: 1, expZh: 'has gone表示去了某地、目前还没有回来；has been表示曾经去过并已返回。' },
      { q: 'Which sentence should use the simple past, not the present perfect?', qZh: '哪个句子应使用一般过去时，而不是现在完成时？', opts: ['I _____ him yesterday.', 'I _____ never seen snow.', 'She _____ lived here since May.', 'They _____ just arrived.'], ans: 0, expZh: 'yesterday是明确且已结束的过去时间，因此使用一般过去时saw。' },
    ],
    blanks: [
      { sentence: 'Amy _____ (finish) her homework already.', sentenceZh: 'Amy已经完成了家庭作业。', ans: ['has finished'], expZh: 'Amy是第三人称单数，already提示现在完成时，使用has finished。' },
      { sentence: 'We _____ (live) here for six years.', sentenceZh: '我们在这里住了六年。', ans: ['have lived'], expZh: 'for加时间段表示持续至今，we使用have lived。' },
      { sentence: 'Leo _____ (arrive) recently.', sentenceZh: 'Leo最近到了。', ans: ['has arrived'], expZh: 'recently表示与现在有关的近期经历，Leo使用has arrived。' },
      { sentence: 'I _____ (see) snow before.', sentenceZh: '我以前见过雪。', ans: ['have seen'], expZh: 'before表示截至现在的经历，see的过去分词是seen。' },
      { sentence: 'Mum _____ (not cook) dinner yet.', sentenceZh: '妈妈还没有做晚饭。', ans: ["hasn't cooked", 'has not cooked'], expZh: 'yet常用于否定句，Mum使用hasn’t cooked。' },
      { sentence: 'They _____ (visit) London twice.', sentenceZh: '他们去过伦敦两次。', ans: ['have visited'], expZh: 'twice表示截至现在的经历次数，they使用have visited。' },
      { sentence: 'Ben _____ (lose) his key, so he cannot open the door.', sentenceZh: 'Ben丢了钥匙，所以现在打不开门。', ans: ['has lost'], expZh: '丢钥匙造成现在无法开门的结果，Ben使用has lost。' },
      { sentence: 'My sister _____ (be) ill since Monday.', sentenceZh: '我姐姐从星期一起一直生病。', ans: ['has been'], expZh: 'since Monday表示从周一持续至今，be的过去分词是been。' },
      { sentence: 'You _____ (grow) a lot since last year.', sentenceZh: '从去年以来，你长高了很多。', ans: ['have grown'], expZh: 'since last year表示从过去到现在的变化，grow的过去分词是grown。' },
      { sentence: 'The film _____ (start) already.', sentenceZh: '电影已经开始了。', ans: ['has started'], expZh: 'film是单数，already提示使用has started。' },
      { sentence: 'We _____ (eat) lunch already.', sentenceZh: '我们已经吃过午饭了。', ans: ['have eaten'], expZh: 'already表示动作已经完成，we使用have eaten。' },
      { sentence: 'Ella _____ (study) English since she was six.', sentenceZh: 'Ella从六岁起就一直学习英语。', ans: ['has studied'], expZh: 'since引出开始学习的时间，Ella使用has studied。' },
      { sentence: 'I _____ (not read) this book yet.', sentenceZh: '我还没有读这本书。', ans: ["haven't read", 'have not read'], expZh: 'yet用于否定句，read的过去分词拼写仍为read。' },
      { sentence: 'Dad _____ (go) to the shop, so he is not at home.', sentenceZh: '爸爸去了商店，所以现在不在家。', ans: ['has gone'], expZh: '爸爸目前不在家，has gone表示去了尚未回来。' },
      { sentence: 'The children _____ (do) three exercises so far.', sentenceZh: '孩子们到目前为止做了三道练习。', ans: ['have done'], expZh: 'so far表示截至目前，do的过去分词是done。' },
    ],
    corrections: [
      { sentence: 'She have finished her work.', sentenceZh: '她已经完成工作了。', error: 'have', correct: 'has', expZh: 'she是第三人称单数，应使用has。' },
      { sentence: 'I have saw that film twice.', sentenceZh: '那部电影我看过两次。', error: 'saw', correct: 'seen', expZh: 'have后接过去分词，see的过去分词是seen。' },
      { sentence: 'He has went to the library.', sentenceZh: '他去了图书馆，现在还没有回来。', error: 'went', correct: 'gone', expZh: 'has后接过去分词，表示去了尚未回来使用gone。' },
      { sentence: 'We has lived here since 2022.', sentenceZh: '我们从2022年起就住在这里。', error: 'has', correct: 'have', expZh: 'we是复数主语，应使用have。' },
      { sentence: 'They haven’t finish the task yet.', sentenceZh: '他们还没有完成任务。', error: 'finish', correct: 'finished', expZh: 'haven’t后接过去分词finished。' },
      { sentence: 'Mia has know him for years.', sentenceZh: 'Mia认识他很多年了。', error: 'know', correct: 'known', expZh: 'has后接过去分词，know的过去分词是known。' },
      { sentence: 'Have she ever visited China?', sentenceZh: '她曾经去过中国吗？', error: 'Have', correct: 'Has', expZh: 'she是第三人称单数，疑问句使用Has。' },
      { sentence: 'I have lived here since three years.', sentenceZh: '我在这里住了三年。', error: 'since', correct: 'for', expZh: 'three years是时间段，前面应使用for。' },
      { sentence: 'Tom has studied English for 2021.', sentenceZh: 'Tom从2021年开始学习英语。', error: 'for', correct: 'since', expZh: '2021是时间起点，前面应使用since。' },
      { sentence: 'She has just ate breakfast.', sentenceZh: '她刚吃过早餐。', error: 'ate', correct: 'eaten', expZh: 'has后接过去分词，eat的过去分词是eaten。' },
      { sentence: 'We have not saw him yet.', sentenceZh: '我们还没有见到他。', error: 'saw', correct: 'seen', expZh: 'have not后接过去分词seen。' },
      { sentence: 'Leo have already left.', sentenceZh: 'Leo已经离开了。', error: 'have', correct: 'has', expZh: 'Leo是第三人称单数，应使用has。' },
      { sentence: 'Has you finished your lunch?', sentenceZh: '你吃完午饭了吗？', error: 'Has', correct: 'Have', expZh: 'you搭配have，疑问句应以Have开头。' },
      { sentence: 'They have be friends since primary school.', sentenceZh: '他们从小学起就是朋友。', error: 'be', correct: 'been', expZh: 'have后接be的过去分词been。' },
      { sentence: 'I have visited her yesterday.', sentenceZh: '我昨天拜访了她。', error: 'have visited', correct: 'visited', expZh: 'yesterday是明确且已结束的过去时间，应使用一般过去时visited。' },
    ],
  },

  36: {
    title: '过去进行时',
    intro: '过去进行时表示过去某时刻正在发生的动作。结构：主语 + was/were + 动词-ing。I/he/she/it → was；we/you/they → were。时间标志词：at that time、at that moment、at 9 last night、when（引导背景动作）。动词变化规则与现在进行时相同。',
    guide: {
      uses: ['过去某一时刻正在进行的动作', '过去一段时间持续进行的事情', '一个动作发生时，另一个动作正在进行'],
      structures: ['肯定：主语 + was/were + doing', '否定：主语 + wasn’t/weren’t + doing', '疑问：Was/Were + 主语 + doing？'],
      signals: ['at that time', 'at 9 last night', 'when', 'while', 'all evening'],
      warning: 'I/he/she/it使用was，you/we/they使用were；was/were后必须使用-ing形式。',
    },
    questions: [
      { q: 'What does the past continuous usually describe?', qZh: '过去进行时通常描述什么？', opts: ['过去某时正在进行的动作', '每天的习惯', '将来的计划', '已经完成且影响现在的动作'], ans: 0, expZh: '过去进行时表示过去某一时刻或一段时间正在进行的动作。' },
      { q: 'What is its basic structure?', qZh: '过去进行时的基本结构是什么？', opts: ['have/has + done', 'was/were + doing', 'will + do', 'did + do'], ans: 1, expZh: '过去进行时由was或were加动词-ing构成。' },
      { q: 'Which expressions often signal the past continuous?', qZh: '哪些表达常提示过去进行时？（多选）', opts: ['at 8 last night', 'at that moment', 'while', 'every morning'], ans: [0,1,2], expZh: '前三项都指向过去某时正在进行的动作；every morning通常提示一般现在时。' },
      { q: 'She _____ at 9 last night.', qZh: '她昨晚九点正在学习。空格处应填什么？', opts: ['studied', 'was studying', 'is studying', 'has studied'], ans: 1, expZh: 'at 9 last night指出过去具体时刻，she使用was studying。' },
      { q: 'They _____ football when it began to rain.', qZh: '开始下雨时，他们正在踢足球。空格处应填什么？', opts: ['played', 'were playing', 'are playing', 'have played'], ans: 1, expZh: '下雨这一短动作发生时，踢球正在进行，they使用were playing。' },
      { q: 'Which sentences use the past continuous?', qZh: '下面哪些句子使用了过去进行时？（多选）', opts: ['I was reading at ten.', 'We were waiting for the bus.', 'She walks home daily.', 'They visited us yesterday.'], ans: [0,1], expZh: 'A和B都是was/were + 动词-ing。' },
      { q: 'Which sentence is correct?', qZh: '哪个过去进行时句子结构正确？', opts: ['He were sleeping.', 'He was sleep.', 'He was sleeping.', 'He did sleeping.'], ans: 2, expZh: 'he搭配was，was后接sleeping。' },
      { q: 'I _____ dinner while Mum was working.', qZh: '妈妈工作时，我正在做晚饭。空格处应填什么？', opts: ['was cooking', 'cooked every day', 'am cooking', 'have cooked'], ans: 0, expZh: 'while连接两个过去同时进行的动作，I使用was cooking。' },
      { q: 'Which forms correctly match their subjects?', qZh: '下面哪些主谓搭配正确？（多选）', opts: ['I was writing', 'You were writing', 'They was writing', 'Mia were writing'], ans: [0,1], expZh: 'I和第三人称单数用was；you和复数主语用were。' },
      { q: 'The phone rang while I _____.', qZh: '我洗澡时电话响了。空格处应填什么？', opts: ['showered', 'was showering', 'am showering', 'have showered'], ans: 1, expZh: '电话响是短动作，洗澡是当时正在进行的背景动作。' },
      { q: 'Which negative is correct?', qZh: '哪个过去进行时否定句正确？', opts: ["She wasn’t listening.", "She didn’t listening.", "She wasn’t listen.", "She not was listening."], ans: 0, expZh: '否定结构为wasn’t/weren’t + 动词-ing。' },
      { q: 'Which question is correct?', qZh: '哪个过去进行时疑问句正确？', opts: ['Was he sleeping?', 'Did he sleeping?', 'Were he sleep?', 'Was sleeping he?'], ans: 0, expZh: '疑问句结构为Was/Were + 主语 + 动词-ing。' },
      { q: 'While Dad was cooking, Mum _____.', qZh: '爸爸做饭时，妈妈正在摆桌子。空格处应填什么？', opts: ['sets the table', 'was setting the table', 'has set the table', 'will set the table'], ans: 1, expZh: 'while强调两个过去动作同时进行，因此使用was setting。' },
      { q: 'Which verb forms are correct after was/were?', qZh: 'was/were后面的哪些形式正确？（多选）', opts: ['running', 'making', 'swim', 'lied down'], ans: [0,1], expZh: 'was/were后接动词-ing；running和making拼写正确。' },
      { q: 'At this time yesterday, we _____ home.', qZh: '昨天这个时候，我们正在步行回家。空格处应填什么？', opts: ['walk', 'walked', 'were walking', 'have walked'], ans: 2, expZh: 'at this time yesterday提示过去某时正在进行，we使用were walking。' },
    ],
    blanks: [
      { sentence: 'I _____ (read) at eight last night.', sentenceZh: '昨晚八点我正在阅读。', ans: ['was reading'], expZh: '过去具体时刻正在阅读，I使用was reading。' },
      { sentence: 'They _____ (play) when it rained.', sentenceZh: '下雨时他们正在玩。', ans: ['were playing'], expZh: '下雨时玩耍正在进行，they使用were playing。' },
      { sentence: 'Mia _____ (cook) while Dad was cleaning.', sentenceZh: '爸爸打扫时，Mia正在做饭。', ans: ['was cooking'], expZh: '两个动作同时进行，Mia使用was cooking。' },
      { sentence: 'We _____ (wait) for the bus at that moment.', sentenceZh: '那一刻我们正在等公交车。', ans: ['were waiting'], expZh: 'at that moment提示过去进行时，we使用were waiting。' },
      { sentence: 'Leo _____ (write) when I entered.', sentenceZh: '我进入时，Leo正在写东西。', ans: ['was writing'], expZh: '我进入时写作正在进行，Leo使用was writing。' },
      { sentence: 'The children _____ (sleep) at midnight.', sentenceZh: '午夜时孩子们正在睡觉。', ans: ['were sleeping'], expZh: 'children是复数，使用were sleeping。' },
      { sentence: 'She _____ (not listen) to the teacher.', sentenceZh: '她当时没有听老师讲课。', ans: ["wasn't listening", 'was not listening'], expZh: '否定结构为wasn’t + listening。' },
      { sentence: 'You _____ (run) very fast.', sentenceZh: '你当时跑得很快。', ans: ['were running'], expZh: 'you搭配were，run双写n加-ing。' },
      { sentence: 'It _____ (snow) all evening.', sentenceZh: '整个晚上一直在下雪。', ans: ['was snowing'], expZh: 'all evening表示过去一段时间持续进行。' },
      { sentence: 'Mum _____ (make) tea when I arrived.', sentenceZh: '我到达时妈妈正在泡茶。', ans: ['was making'], expZh: '到家时泡茶正在进行；make去e加-ing。' },
      { sentence: 'The dogs _____ (bark) at that time.', sentenceZh: '那时狗正在叫。', ans: ['were barking'], expZh: 'dogs是复数，使用were barking。' },
      { sentence: 'He _____ (not study) at nine.', sentenceZh: '九点时他没有在学习。', ans: ["wasn't studying", 'was not studying'], expZh: 'he搭配wasn’t，后接studying。' },
      { sentence: 'Amy and Ben _____ (dance) when we saw them.', sentenceZh: '我们看见Amy和Ben时，他们正在跳舞。', ans: ['were dancing'], expZh: '复数主语搭配were dancing。' },
      { sentence: 'I _____ (lie) on the sofa.', sentenceZh: '我当时正躺在沙发上。', ans: ['was lying'], expZh: 'lie变为lying，I搭配was。' },
      { sentence: 'Dad _____ (drive) home when I called.', sentenceZh: '我打电话时，爸爸正在开车回家。', ans: ['was driving'], expZh: '电话打来时开车正在进行，使用was driving。' },
    ],
    corrections: [
      { sentence: 'They was playing football.', sentenceZh: '他们当时正在踢足球。', error: 'was', correct: 'were', expZh: 'they是复数，使用were。' },
      { sentence: 'She was read a book.', sentenceZh: '她当时正在读书。', error: 'read', correct: 'reading', expZh: 'was后接动词-ing。' },
      { sentence: 'I were doing my homework.', sentenceZh: '我当时正在做作业。', error: 'were', correct: 'was', expZh: 'I搭配was。' },
      { sentence: 'We were went home.', sentenceZh: '我们当时正在回家。', error: 'went', correct: 'going', expZh: 'were后接going。' },
      { sentence: 'The birds was singing.', sentenceZh: '鸟儿当时正在歌唱。', error: 'was', correct: 'were', expZh: 'birds是复数，使用were。' },
      { sentence: 'He was swim in the pool.', sentenceZh: '他当时正在泳池游泳。', error: 'swim', correct: 'swimming', expZh: 'was后接swimming，需双写m。' },
      { sentence: 'Mia were making dinner.', sentenceZh: 'Mia当时正在做晚饭。', error: 'were', correct: 'was', expZh: 'Mia是单数，使用was。' },
      { sentence: 'Were Leo sleeping at ten?', sentenceZh: 'Leo十点时正在睡觉吗？', error: 'Were', correct: 'Was', expZh: 'Leo是单数，疑问句使用Was。' },
      { sentence: 'They weren’t play outside.', sentenceZh: '他们当时没有在外面玩。', error: 'play', correct: 'playing', expZh: 'weren’t后接动词-ing。' },
      { sentence: 'I was makeing a cake.', sentenceZh: '我当时正在做蛋糕。', error: 'makeing', correct: 'making', expZh: 'make去掉不发音的e再加-ing。' },
      { sentence: 'You was talking loudly.', sentenceZh: '你当时说话声音很大。', error: 'was', correct: 'were', expZh: 'you搭配were。' },
      { sentence: 'She wasn’t listened to me.', sentenceZh: '她当时没有听我说话。', error: 'listened', correct: 'listening', expZh: 'wasn’t后接listening。' },
      { sentence: 'The boys were runing fast.', sentenceZh: '男孩们当时跑得很快。', error: 'runing', correct: 'running', expZh: 'run变为running时双写n。' },
      { sentence: 'Was they waiting for us?', sentenceZh: '他们当时正在等我们吗？', error: 'Was', correct: 'Were', expZh: 'they是复数，疑问句使用Were。' },
      { sentence: 'Dad was drive when I called.', sentenceZh: '我打电话时爸爸正在开车。', error: 'drive', correct: 'driving', expZh: 'was后接driving，drive去e加-ing。' },
    ],
  },

  37: {
    title: '一般将来时',
    intro: '一般将来时表示将来要发生的动作。三种结构：①will + 动词原形（临时决定/预测）；②be going to + 动词原形（计划/明显迹象）；③shall + 动词原形（仅用于I/we）。时间标志词：tomorrow、next week/month、soon、later、in + 时间段。',
    guide: {
      uses: ['预测将来会发生的事情', '说话时作出的决定或承诺', '表达事先计划或有明显迹象的事情'],
      structures: ['will：主语 + will + 动词原形', 'be going to：主语 + am/is/are going to + 动词原形', '疑问：Will + 主语 + 动词原形？'],
      signals: ['tomorrow', 'next week', 'soon', 'later', 'in two days', 'this weekend'],
      warning: 'will后直接使用动词原形，不能加-s、-ed或to；be going to中的be要随主语变化。',
    },
    questions: [
      { q: 'What is the simple future mainly used for?', qZh: '一般将来时主要用来表达什么？', opts: ['过去完成的动作', '将来会发生的动作或状态', '此刻正在发生的动作', '每天重复的习惯'], ans: 1, expZh: '一般将来时表示将来会发生的动作或存在的状态。' },
      { q: 'Which structures can express the future?', qZh: '下面哪些结构可以表达将来？（多选）', opts: ['will + 动词原形', 'be going to + 动词原形', 'did + 动词原形', 'am/is/are + doing（表示已安排的将来）'], ans: [0,1,3], expZh: 'will、be going to以及表示已安排计划的现在进行时都可以表达将来；did用于过去时。' },
      { q: 'Which expressions commonly signal the future?', qZh: '下面哪些时间表达常提示将来时？（多选）', opts: ['tomorrow', 'next month', 'last night', 'in two days'], ans: [0,1,3], expZh: 'tomorrow、next month和in two days都指向将来；last night指过去。' },
      { q: 'She _____ to the cinema next Saturday.', qZh: '她下周六要去电影院。空格处应填什么？', opts: ['go', 'went', 'will go', 'goes'], ans: 2, expZh: 'next Saturday提示将来，will后接动词原形go。' },
      { q: 'They _____ the meeting tomorrow.', qZh: '他们明天不会参加会议。空格处应填什么？', opts: ["don't attend", "won't attend", "didn't attend", "doesn't attend"], ans: 1, expZh: 'tomorrow提示将来；将来时否定结构是won’t + 动词原形。' },
      { q: '_____ you _____ your homework soon?', qZh: '你很快会完成家庭作业吗？应选择哪个结构？', opts: ['Will; finish', 'Do; finish', 'Are; finishing', 'Did; finish'], ans: 0, expZh: 'will疑问句结构为Will + 主语 + 动词原形。' },
      { q: 'Which sentences are in the simple future?', qZh: '下面哪些句子使用了一般将来时？（多选）', opts: ['I will call you later.', 'She walks to school.', 'They are going to move house.', 'We visited the museum.'], ans: [0,2], expZh: 'A使用will，C使用be going to，两句都表达将来。' },
      { q: 'Look at those clouds! It _____.', qZh: '看那些乌云！要下雨了。应填什么？', opts: ['rains', 'is going to rain', 'rained', 'has rained'], ans: 1, expZh: '有明显迹象时常用be going to；乌云表明即将下雨。' },
      { q: 'The phone is ringing. I _____ it.', qZh: '电话响了。我来接。应填什么？', opts: ['answer', 'answered', 'will answer', 'am answering every day'], ans: 2, expZh: '说话时临时作出的决定通常使用will。' },
      { q: 'Which sentence shows a prior plan?', qZh: '哪个句子表示事先已有的计划？', opts: ['I’ll open the door.', 'We are going to visit Grandma this weekend.', 'Water boils at 100°C.', 'He called yesterday.'], ans: 1, expZh: 'be going to常用于表达说话前已经作好的计划。' },
      { q: 'Which forms are correct after “will”?', qZh: 'will后面的哪些动词形式正确？（多选）', opts: ['will go', 'will goes', 'will be', 'will to study'], ans: [0,2], expZh: 'will后直接接动词原形，因此will go和will be正确。' },
      { q: 'They _____ going to have a picnic.', qZh: '他们打算去野餐。空格处应填什么？', opts: ['is', 'are', 'am', 'be'], ans: 1, expZh: '主语they是复数，be going to中的be使用are。' },
      { q: 'Which future questions are correct?', qZh: '下面哪些将来时疑问句正确？（多选）', opts: ['Will she come?', 'Does he will help?', 'Are they going to travel?', 'Will you to join us?'], ans: [0,2], expZh: 'Will she come和Are they going to travel结构正确；will后不能加to。' },
      { q: 'I think our team _____ the match.', qZh: '我认为我们队会赢得比赛。空格处应填什么？', opts: ['wins yesterday', 'will win', 'is win', 'winning'], ans: 1, expZh: 'I think引出的预测常使用will + 动词原形。' },
      { q: 'Which sentence is grammatically correct?', qZh: '哪个一般将来时句子的结构正确？', opts: ['She will goes home.', 'We is going to study.', 'He won’t be late.', 'Will they coming?'], ans: 2, expZh: 'won’t后接动词原形be，He won’t be late结构正确。' },
    ],
    blanks: [
      { sentence: 'I ___ (visit) my grandparents next weekend.', sentenceZh: '我下周末会去看望祖父母。', ans: ['will visit'], expZh: 'next weekend提示将来，使用will visit。' },
      { sentence: 'She ___ (not / join) the meeting tomorrow.', sentenceZh: '她明天不会参加会议。', ans: ["won't join",'will not join'], expZh: '将来时否定结构为won’t + 动词原形join。' },
      { sentence: 'They ___ (start) the project in two days.', sentenceZh: '他们两天后将开始项目。', ans: ['will start'], expZh: 'in two days表示将来，使用will start。' },
      { sentence: 'He ___ (leave) for Paris soon.', sentenceZh: '他很快将动身去巴黎。', ans: ['will leave'], expZh: 'soon提示将来，will后使用leave原形。' },
      { sentence: 'We ___ (have) a test next Monday.', sentenceZh: '我们下周一要考试。', ans: ['will have'], expZh: 'next Monday提示将来，使用will have。' },
      { sentence: 'I think it ___ (be) sunny tomorrow.', sentenceZh: '我认为明天会晴朗。', ans: ['will be'], expZh: '对将来的预测用will；will后使用be原形。' },
      { sentence: 'Mia ___ (not / forget) your birthday.', sentenceZh: 'Mia不会忘记你的生日。', ans: ["won't forget",'will not forget'], expZh: '否定结构为won’t forget。' },
      { sentence: 'The bus ___ (arrive) in ten minutes.', sentenceZh: '公交车十分钟后会到。', ans: ['will arrive'], expZh: 'in ten minutes指将来，使用will arrive。' },
      { sentence: 'Dad ___ (cook) dinner tonight.', sentenceZh: '爸爸今晚会做晚饭。', ans: ['will cook'], expZh: 'tonight指将来的时间，使用will cook。' },
      { sentence: 'You ___ (enjoy) this film.', sentenceZh: '你会喜欢这部电影的。', ans: ['will enjoy'], expZh: '对将来的预测使用will enjoy。' },
      { sentence: 'They ___ (not / be) late.', sentenceZh: '他们不会迟到。', ans: ["won't be",'will not be'], expZh: 'will后使用be原形，否定为won’t be。' },
      { sentence: 'I ___ (help) you with that bag.', sentenceZh: '我来帮你拿那个包。', ans: ['will help'], expZh: '说话时作出的主动决定使用will help。' },
      { sentence: 'Our class ___ (go) on a trip next week.', sentenceZh: '我们班下周要去旅行。', ans: ['will go'], expZh: 'next week提示将来，使用will go。' },
      { sentence: 'The shop ___ (open) at nine tomorrow.', sentenceZh: '商店明天九点开门。', ans: ['will open'], expZh: 'tomorrow提示将来，使用will open。' },
      { sentence: 'Leo ___ (call) us later.', sentenceZh: 'Leo稍后会给我们打电话。', ans: ['will call'], expZh: 'later提示将来，使用will call。' },
    ],
    corrections: [
      { sentence: 'They will goes to the park tomorrow.', sentenceZh: '他们明天会去公园。', error: 'goes', correct: 'go', expZh: 'will后使用动词原形，因此goes改为go。' },
      { sentence: "She don't finish her project next week.", sentenceZh: '她下周不会完成项目。', error: "don't finish", correct: "won't finish", expZh: '将来时否定使用won’t + 动词原形。' },
      { sentence: 'Will they attending the concert later?', sentenceZh: '他们稍后会参加音乐会吗？', error: 'attending', correct: 'attend', expZh: 'will后使用动词原形attend。' },
      { sentence: "He won't to buy a car soon.", sentenceZh: '他近期不会买车。', error: 'to buy', correct: 'buy', expZh: 'won’t后直接接动词原形，不加to。' },
      { sentence: 'We is going to have a test.', sentenceZh: '我们要考试。', error: 'is', correct: 'are', expZh: '主语we与are going to搭配。' },
      { sentence: 'I will calling you tonight.', sentenceZh: '我今晚会给你打电话。', error: 'calling', correct: 'call', expZh: 'will后必须使用动词原形call。' },
      { sentence: 'She are going to study abroad.', sentenceZh: '她打算出国学习。', error: 'are', correct: 'is', expZh: '主语she是单数，与is going to搭配。' },
      { sentence: 'Will he comes with us?', sentenceZh: '他会和我们一起来吗？', error: 'comes', correct: 'come', expZh: 'will疑问句中动词使用原形come。' },
      { sentence: 'They won’t arrived late.', sentenceZh: '他们不会迟到。', error: 'arrived', correct: 'arrive', expZh: 'won’t后使用动词原形arrive。' },
      { sentence: 'It going to rain soon.', sentenceZh: '很快要下雨了。', error: 'going', correct: 'is going', expZh: 'be going to结构不能漏掉be；it与is搭配。' },
      { sentence: 'I am going visit Grandma.', sentenceZh: '我打算去看望奶奶。', error: 'going visit', correct: 'going to visit', expZh: 'be going to后接动词原形，不能漏掉to。' },
      { sentence: 'Does she will help us?', sentenceZh: '她会帮助我们吗？', error: 'Does she will', correct: 'Will she', expZh: 'will疑问句直接把will放到主语前，不使用does。' },
      { sentence: 'We will to travel next month.', sentenceZh: '我们下个月会旅行。', error: 'to travel', correct: 'travel', expZh: 'will后直接接动词原形travel。' },
      { sentence: 'Leo won’t studies tonight.', sentenceZh: 'Leo今晚不会学习。', error: 'studies', correct: 'study', expZh: 'won’t后使用动词原形study。' },
      { sentence: 'Are you going to joining us?', sentenceZh: '你打算加入我们吗？', error: 'joining', correct: 'join', expZh: 'be going to后使用动词原形join。' },
    ],
  },
  ...GRAMMAR_NOUN_BASE_QUESTIONS,
  ...GRAMMAR_NOUN_MORE_QUESTIONS,
  ...GRAMMAR_ARTICLE_PERSONAL_QUESTIONS,
  ...GRAMMAR_SENTENCE_QUESTIONS,
  ...GRAMMAR_CLAUSE_QUESTIONS,
  ...GRAMMAR_ADVANCED_QUESTIONS,
  ...GRAMMAR_PAST_FORM_QUESTIONS,
}

// Every fill-in question needs a visible scope. Prefer the choices already
// written for the matching multiple-choice item; otherwise use the accepted
// answer and the paired common error as a short contrast set.
const displayHint = value => {
  const text = String(value ?? '').trim()
  return text || '— (no article)'
}

const addHintBeforePunctuation = (sentence, options) => {
  const hint = options.map(displayHint).join(' / ')
  const text = String(sentence)
  return /[.?!]$/.test(text)
    ? text.replace(/([.?!])$/, ` (${hint})$1`)
    : `${text} (${hint})`
}

Object.values(GRAMMAR_QUESTIONS).forEach(unit => {
  unit.blanks = (unit.blanks || []).map((blank, index) => {
    if (/[（(][^）)]*[）)]/.test(blank.sentence || '')) return blank

    const matchingQuestion = (unit.questions || []).find(question =>
      question.q === blank.sentence && Array.isArray(question.opts)
    )
    const correction = (unit.corrections || [])[index]
    const candidates = [
      ...(matchingQuestion?.opts || []),
      ...(Array.isArray(blank.ans) ? blank.ans : [blank.ans]),
      correction?.error,
      correction?.correct,
    ]
      .filter(value => value !== undefined && value !== null)
      .filter((value, candidateIndex, list) =>
        list.findIndex(item => displayHint(item).toLowerCase() === displayHint(value).toLowerCase()) === candidateIndex
      )
      .slice(0, 4)

    return {
      ...blank,
      sentence: addHintBeforePunctuation(blank.sentence, candidates),
    }
  })
})
