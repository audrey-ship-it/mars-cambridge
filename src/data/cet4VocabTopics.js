// CET-4 必默词汇 · 话题编排（原创教学编排，参照 KET 话题模式）
// 词汇全部取自官方四级词表（src/data/generated/cet4-vocab-full.js，Excel 乱序版），
// 按话题归组；词表中不存在的词在加载时自动过滤，保证每个词都来自同一官方词源。
// 每个话题: { id, emoji, zh, en, items: [{w, ipa, zh}] }

import { vocabLists } from './generated/cet4-vocab-full.js'

const TOPIC_DEFS = [
  {
    id: 'family', emoji: '👨‍👩‍👧', zh: '家人与家庭', en: 'Family & Home',
    words: 'family parent father mother brother sister son daughter husband wife grandparent grandmother grandfather grandson granddaughter relative relation generation childhood marry marriage wedding divorce baby infant kid household ancestor twin cousin nephew niece inherit pregnant raise adopt elder youth adult'.split(' '),
  },
  {
    id: 'food', emoji: '🍔', zh: '饮食', en: 'Food & Drinks',
    words: 'food meal breakfast lunch dinner supper snack restaurant cafe menu dish taste tasty delicious bitter sweet sour spicy salt sugar pepper oil flour hungry thirsty hunger drink beverage coffee tea milk bread rice noodle meat beef pork chicken vegetable fruit apple banana orange grape strawberry salad soup butter cheese egg honey bake boil fry roast steam cook recipe flavor nutrition diet picnic feed'.split(' '),
  },
  {
    id: 'sports', emoji: '⚽', zh: '运动与健康', en: 'Sports & Health',
    words: 'sport exercise gym fitness muscle athlete champion championship competition compete competitor match team coach train training stadium marathon football basketball tennis volleyball badminton golf swimming running race health healthy fit disease illness sickness sick medicine medical doctor nurse hospital patient clinic treatment cure recover recovery injure injury wound hurt pain painful ache fever cough sneeze symptom pill drug surgery operation energy relax stress mental physical ambulance emergency'.split(' '),
  },
  {
    id: 'education', emoji: '🎓', zh: '教育与学习', en: 'Education & Study',
    words: 'education school college university campus student pupil teacher professor lecture course curriculum subject major degree diploma graduate graduation undergraduate tuition scholarship exam examination test quiz homework assignment study learn teach knowledge textbook library librarian research academic intelligence clever smart diligent concentrate concentration memorize review revise discipline primary secondary kindergarten semester credit classroom dictionary notebook educate scholar recite spell pronounce'.split(' '),
  },
  {
    id: 'work', emoji: '💼', zh: '工作与职业', en: 'Work & Career',
    words: 'job work career occupation profession professional employee employer employment staff colleague boss manager leadership interview apply application applicant hire fire dismiss resign promote promotion salary wage income bonus office company corporation business meeting deadline task project schedule shift overtime retire retirement unemployment unemployed skill experience qualify qualification competent efficient recruit workshop clerk secretary engineer lawyer'.split(' '),
  },
  {
    id: 'shopping', emoji: '🛍️', zh: '购物与消费', en: 'Shopping',
    words: 'shop store mall supermarket market buy purchase sell sale price cost cheap expensive discount bargain customer client consumer goods product production quality quantity brand fashion fashionable clothes clothing garment shoes size fit pay payment cash credit card receipt refund exchange delivery deliver order online advertise advertisement commercial luxury budget wallet purse'.split(' '),
  },
  {
    id: 'travel', emoji: '✈️', zh: '旅行与交通', en: 'Travel & Transport',
    words: 'travel trip journey tour tourist tourism voyage flight airplane plane airport passport visa luggage baggage suitcase hotel accommodation reserve reservation book ticket departure depart arrival arrive destination sightseeing attraction scenery landscape beach seaside resort adventure explore exploration guide map transport transportation vehicle car bus train subway underground taxi bicycle ship drive driver speed traffic highway passenger aboard abroad foreign foreigner'.split(' '),
  },
  {
    id: 'environment', emoji: '🌿', zh: '环境与自然', en: 'Environment & Nature',
    words: 'environment environmental nature natural pollution pollute climate weather temperature global warming carbon emission energy resource recycle waste garbage trash rubbish protect protection preserve conserve conservation wildlife animal plant forest jungle desert ocean sea river lake mountain valley sky air water soil species extinct extinction ecology ecological sustainable earthquake flood drought storm'.split(' '),
  },
  {
    id: 'technology', emoji: '💻', zh: '科技与网络', en: 'Technology & Internet',
    words: 'technology technological computer laptop phone mobile smartphone telephone internet online website network software hardware program programmer digital data device machine machinery robot artificial intelligence automatic automatically innovation innovate invent invention inventor discover discovery experiment science scientist scientific engineer engineering develop development update download upload browse browser click screen keyboard communicate communication virtual satellite signal'.split(' '),
  },
  {
    id: 'emotion', emoji: '😊', zh: '情感与性格', en: 'Emotions & Personality',
    words: 'emotion emotional feeling happy happiness sad sadness angry anger afraid fear worry worried anxious anxiety nervous calm relaxed excited excitement bored boring interested interesting surprised surprise shocked shock disappointed disappointment satisfied satisfaction proud pride ashamed shame guilty guilt jealous jealousy envy confident confidence brave bravery courage kind kindness honest honesty generous generosity humor humorous optimistic pessimistic personality character temper mood attitude'.split(' '),
  },
  {
    id: 'society', emoji: '🏛️', zh: '社会与文化', en: 'Society & Culture',
    words: 'society social culture cultural tradition traditional custom festival celebrate celebration ceremony religion religious belief believe history historic ancient modern art artist music musician painting literature literary novel poetry poem poet film movie theatre theater museum exhibition exhibit performance perform concert community government law legal policy politics political crime criminal police court justice duty citizen population poverty wealth wealthy election vote'.split(' '),
  },
  {
    id: 'time', emoji: '⏰', zh: '时间与数量', en: 'Time & Quantity',
    words: 'time hour minute second moment instant period era decade century past present future today tomorrow yesterday early late punctual delay soon immediately suddenly gradual gradually eventual eventually final finally often usually sometimes rarely seldom never always frequent frequently number amount quantity sum total dozen hundred thousand million billion double half quarter percentage rate proportion'.split(' '),
  },
]

// 官方词表索引（小写 → 词条）
const INDEX = new Map(vocabLists.flat().map((x) => [x.w.toLowerCase(), x]))

export const CET4_TOPICS = TOPIC_DEFS.map((t) => {
  const seen = new Set()
  const items = []
  t.words.forEach((w) => {
    const key = w.toLowerCase()
    if (seen.has(key)) return
    const entry = INDEX.get(key)
    if (entry) { seen.add(key); items.push(entry) }
    // 词表中不存在的词自动过滤，保证词源单一
  })
  return { id: t.id, emoji: t.emoji, zh: t.zh, en: t.en, items }
})
