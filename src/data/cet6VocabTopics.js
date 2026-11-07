// CET-6 必默词汇 · 话题编排（原创教学编排，参照 CET-4 话题模式）
// 词汇全部取自官方六级词表（src/data/generated/cet6-vocab-full.js，乱序版），
// 按话题归组；词表中不存在的词在加载时自动过滤，保证每个词都来自同一官方词源。
// 每个话题: { id, emoji, zh, en, items: [{w, ipa, zh}] }

import { vocabLists6 } from './generated/cet6-vocab-full.js'

const TOPIC_DEFS = [
  {
    id: 'academic', emoji: '🎓', zh: '学术与研究', en: 'Academia & Research',
    words: 'academic hypothesis methodology empirical theoretical framework discipline analyze analysis evaluate assess criterion criterion thesis dissertation scholarly seminar symposium journal publication cite quotation bibliography questionnaire survey statistic variable correlation sample data finding conclusion literature review phenomenon phenomena paradigm innovation breakthrough rigorous profound comprehensive systematic'.split(' '),
  },
  {
    id: 'economy', emoji: '📈', zh: '经济与商业', en: 'Economy & Business',
    words: 'economy economic recession inflation depression prosperity boom deficit surplus revenue expenditure budget investment investor capital asset liability profit margin turnover enterprise entrepreneur corporation corporate merge merger acquisition monopoly competition competitive commodity demand supply consumption expenditure subsidy tariff currency exchange transaction negotiate negotiation contract clause audit accounting fiscal monetary venture bankruptcy lucrative profitable lucrative'.split(' '),
  },
  {
    id: 'technology', emoji: '💻', zh: '科技与创新', en: 'Technology & Innovation',
    words: 'technology technological innovation innovate invention digital digitize software hardware algorithm artificial intelligence automation automatic machinery mechanism device apparatus instrument satellite network database program programming virtual simulate simulation prototype patent upgrade update sophisticated cutting-edge efficiency efficient productivity accelerate acceleration transmit transmission wireless semiconductor robot robotics cyber'.split(' '),
  },
  {
    id: 'society', emoji: '🏙️', zh: '社会与人口', en: 'Society & Population',
    words: 'society social community population demographic urbanization urban suburban rural migration immigrate immigrant emigrate emigration citizen citizenship welfare inequality equality equity discrimination prejudice racism gender minority majority integrate integration assimilation diversity diverse cultural multicultural tradition custom norm ethnic tribe urban poverty affluent deprive deprivation privilege hierarchy status class mobility welfare pension'.split(' '),
  },
  {
    id: 'environment', emoji: '🌍', zh: '环境与可持续', en: 'Environment & Sustainability',
    words: 'environment environmental ecology ecological ecosystem sustainable sustainability conservation conserve preserve pollution pollutant contaminate contamination emission carbon greenhouse climate biodiversity habitat species extinction endangered renewable recycle disposal waste sewage deforestation drought flood erosion desertification renewable solar wind hydropower organic toxic toxicity hazard hazardous resource consumption footprint degradation degrade catastrophe'.split(' '),
  },
  {
    id: 'psychology', emoji: '🧠', zh: '心理与情绪', en: 'Psychology & Emotion',
    words: 'psychology psychological emotion emotional anxiety anxious depression depress stress stressful trauma symptom therapy therapeutic cognitive cognition conscious subconscious perception perceive perception behave behavior behavioural attitude mood impulse motivate motivation incentive incentive willpower resilience cope coping frustrate frustration disappoint satisfaction anxiety self-esteem confidence confident insecure optimistic pessimistic temperament personality impulse'.split(' '),
  },
  {
    id: 'law', emoji: '⚖️', zh: '法律与治理', en: 'Law & Governance',
    words: 'law legal legislation legislate legislature regulation regulate statute constitutional constitution clause verdict trial jury judge justice judicial court crime criminal offense offender violate violation penalty sanction prosecute prosecution defendant plaintiff attorney lawyer sue lawsuit testimony evidence witness custody arrest detain detention appeal tribunal authority authorities enforce enforcement policy governance administration bureaucracy'.split(' '),
  },
  {
    id: 'health', emoji: '🏥', zh: '医学与健康', en: 'Medicine & Health',
    words: 'medicine medical physician surgeon surgery surgical clinical diagnosis diagnose therapy treatment remedy prescription prescribe dose symptom syndrome chronic acute infection infect virus bacterial immunity immune vaccine vaccination epidemic pandemic nutrition nutritional nutrient vitamin mineral obesity calorie metabolism exercise fitness hygiene sanitation hygiene hospital ward patient therapy rehabilitation recover recovery cure immunity wellbeing'.split(' '),
  },
  {
    id: 'media', emoji: '📰', zh: '媒体与传播', en: 'Media & Communication',
    words: 'media medium journalist journalism broadcast broadcasting coverage report reporter reporter editorial column column publish publication advertisement advertising commercial advertise publicity publicize propaganda campaign audience viewer spectator subscriber subscription circulate circulation disseminate dissemination transmit transmission communicate communication interaction interactive rhetoric narrative discourse commentary critic criticize commentary scandal rumour gossip credibility authentic'.split(' '),
  },
  {
    id: 'character', emoji: '💪', zh: '品格与能力', en: 'Character & Ability',
    words: 'character characteristic personality qualify qualification competence competent capability capacity talent gifted skillful skilled proficiency proficient expertise expert diligent diligent industrious diligent perseverance persist persistence persistence patience patience tolerance tolerate integrate integrity honest honesty sincere sincerity humble humility ambition ambitious aspiration aspire determination determined motivated initiative prompt punctual reliable reliable responsible responsibility accountable eligible'.split(' '),
  },
]

// 官方词表索引（小写 → 词条）
const INDEX = new Map(vocabLists6.flat().map((x) => [x.w.toLowerCase(), x]))

export const CET6_TOPICS = TOPIC_DEFS.map((t) => {
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
