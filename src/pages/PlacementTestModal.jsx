import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LEVELS = [
  { abbr: 'KET', code: 'A2', name: 'Key', color: '#0d7656', bg: '#eaf7f1' },
  { abbr: 'PET', code: 'B1', name: 'Preliminary', color: '#2574a9', bg: '#edf6fb' },
  { abbr: 'FCE', code: 'B2', name: 'First', color: '#5b63b7', bg: '#f0f1fb' },
  { abbr: 'CAE', code: 'C1', name: 'Advanced', color: '#7c5aa6', bg: '#f5f0fa' },
  { abbr: 'CPE', code: 'C2', name: 'Proficiency', color: '#a14d68', bg: '#fbf0f4' },
]

const q = (id, level, skill, prompt, options, answer, context = '') => ({ id, level, skill, prompt, options, answer, context })

const QUESTION_HINTS = {
  'What must students bring?': '找出学生必须携带的物品',
  'Why did Maya change her original plan?': '找出 Maya 改变原计划的原因',
  'Why is the writer uncertain?': '判断作者为什么仍然不确定',
  'What should visitors do?': '找出参观者需要做什么',
  'What is the writer doing?': '判断作者写这段话的目的',
  'What can be inferred about the writer?': '根据文章推断作者的情况或观点',
  'What is the writer’s main reservation?': '判断作者最主要的保留意见',
  'What does the writer imply?': '判断作者没有直接说出的意思',
  'What time does the café close on Sunday?': '找出咖啡馆星期日的关门时间',
  'Why is Nina writing?': '判断 Nina 写这条信息的目的',
  'How did the writer feel at the end?': '判断作者最后的感受',
  'What is the writer’s attitude?': '判断作者对这件事的态度',
  'What does the writer suggest?': '判断作者通过这段话表达的观点',
  'What is being criticised?': '判断作者正在批评什么',
  'What is the writer’s central point?': '找出作者最核心的观点',
}

const ANCHOR_MID = [
  q('a1','B1','词汇','The train was delayed, so we had to ___ our meeting until Friday.',['avoid','postpone','refuse','prevent'],1),
  q('a2','B1','语法','If I ___ enough time this evening, I will help you with the project.',['have','had','will have','would have'],0),
  q('a3','B2','词汇','The evidence was not strong enough to ___ his version of events.',['support','attend','deliver','operate'],0),
  q('a4','B2','语法','By the time we reached the cinema, the film ___.',['already starts','has already started','had already started','was already starting'],2),
  q('a5','B2','阅读','Why did Maya change her original plan?',['The weather became worse.','She had misunderstood the timetable.','A friend offered a better idea.','The activity was fully booked.'],2,'Maya had intended to spend Saturday walking in the hills. When Leo suggested an exhibition that would close the following week, however, she decided the walk could wait.'),
]

const ANCHOR_LOW = [
  q('al1','A2','词汇','Lucy is ___ dinner for her family.',['making','doing','putting','taking'],0),
  q('al2','A2','语法','They ___ football every Saturday.',['plays','play','are play','playing'],1),
  q('al3','A2','阅读','What must students bring?',['Some food','A notebook','A camera','Some money'],1,'ART CLUB: Please bring a notebook and pencil. All other materials are provided.'),
  q('al4','B1','词汇','Can I ___ your dictionary for a moment?',['lend','borrow','owe','keep to'],1),
  q('al5','B1','语法','We ___ live near the sea, but we moved last year.',['used to','use to','were used','usually'],0),
]

const ANCHOR_HIGH = [
  q('ah1','B2','词汇','The charity aims to ___ awareness of the problem.',['rise','raise','lift','grow up'],1),
  q('ah2','B2','语法','I would rather you ___ me before making a final decision.',['tell','told','have told','will tell'],1),
  q('ah3','B2','阅读','Why is the writer uncertain?',['The early evidence is limited.','The project has become too expensive.','The researchers disagree about the aim.','The public response has been negative.'],0,'Initial results appear positive, but the study has involved too few participants for firm conclusions to be drawn.'),
  q('ah4','C1','词汇','The speaker gave a remarkably ___ account of a highly complex issue.',['coherent','obedient','substantial','resistant'],0),
  q('ah5','C1','语法','Only after the data had been checked ___ the scale of the error.',['they discovered','did they discover','they had discovered','had they discover'],1),
]

const ANCHORS = { low: ANCHOR_LOW, mid: ANCHOR_MID, high: ANCHOR_HIGH }

const SCREENING = [
  { id:'s1', weight:.5, question:'你学习英语多久了？', options:[['刚开始学习',0],['不到 1 年',0],['1–3 年',1],['3–5 年',2],['5 年以上',3]] },
  { id:'s2', weight:1.5, question:'你目前的学习目标是？', options:[['打好英语基础',0],['准备 KET',0],['准备 PET',1],['准备 FCE',2],['准备 CAE / CPE',3],['还不确定',1]] },
  { id:'s3', weight:1.5, question:'阅读简单英文通知时，你通常觉得？', options:[['大部分看不懂',0],['能认出一些单词',0],['能理解主要意思',1],['基本可以完整理解',2],['能理解复杂文章',3]] },
  { id:'s4', weight:1, question:'听日常英语对话时，你通常觉得？', options:[['很难听懂',0],['慢速、简单内容能懂一点',0],['能理解熟悉话题',1],['能理解大部分日常对话',2],['能理解较复杂的讨论',3]] },
  { id:'s5', weight:1, question:'你是否参加过剑桥英语考试？', options:[['没有参加过',0],['参加过 KET',1],['参加过 PET',2],['参加过 FCE',3],['参加过 CAE / CPE',4]] },
]

const ROUTES = {
  low: [
    q('l1','A2','词汇','Could you ___ the window, please? It is very hot in here.',['open','start','turn','move'],0),
    q('l2','A2','语法','My sister ___ to school by bus every day.',['go','goes','going','is go'],1),
    q('l3','A2','阅读','What should visitors do?',['Bring food with them.','Arrive before ten.','Pay at the door.','Call on Monday.'],1,'MUSEUM TOUR: Meet outside the main entrance at 9:45. The tour begins at 10:00. Tickets have already been paid for.'),
    q('l4','B1','词汇','We were tired, but we ___ to finish the work before dinner.',['managed','succeeded','achieved','completed'],0),
    q('l5','B1','语法','I have lived in this town ___ 2019.',['for','during','since','from'],2),
  ],
  mid: [
    q('m1','B1','阅读','What is the writer doing?',['Complaining about a decision.','Recommending a solution.','Requesting more information.','Apologising for a mistake.'],2,'I saw your notice about the photography course, but it does not say whether students need to bring their own cameras. Could you let me know?'),
    q('m2','B1','语法','I wish I ___ more carefully before sending that email.',['check','checked','had checked','would check'],2),
    q('m3','B2','词汇','The new timetable will ___ students to attend more optional classes.',['enable','permit to','make possible','provide'],0),
    q('m4','B2','语法','The proposal, ___ was discussed for several hours, was finally accepted.',['that','what','which','where'],2),
    q('m5','B2','阅读','What can be inferred about the writer?',['She dislikes working alone.','She values unexpected results.','She avoids changing her methods.','She prefers speed to accuracy.'],1,'I used to plan every detail of my research. Recently, I have found that leaving room for uncertainty often leads to the most interesting discoveries.'),
  ],
  high: [
    q('h1','C1','词汇','The committee rejected the claim because the evidence was largely ___.',['incidental','inconclusive','indifferent','inaccessible'],1),
    q('h2','C1','语法','Rarely ___ such a convincing account of the events.',['we have heard','have we heard','we heard','did we have heard'],1),
    q('h3','C1','阅读','What is the writer’s main reservation?',['The policy is too expensive.','The evidence is being overstated.','The public has misunderstood the aim.','The research question is irrelevant.'],1,'The findings are certainly encouraging. Nevertheless, presenting a modest correlation as proof of cause and effect risks promising far more than the study can deliver.'),
    q('h4','C2','词汇','His apparently casual remark was a ___ criticism of the entire proposal.',['covert','scarce','faint','meagre'],0),
    q('h5','C2','阅读','What does the writer imply?',['Innovation always produces social progress.','Opposition to technology is usually irrational.','Convenience can conceal significant trade-offs.','People quickly adapt to technological change.'],2,'Technologies marketed as frictionless rarely eliminate effort; more often, they relocate it to people whose labour remains conveniently out of sight.'),
  ],
}

const CONFIRM = {
  A2: [
    q('ca1','A2','词汇','I need to buy a ___ of bread.',['bar','loaf','piece','packet'],1),
    q('ca2','A2','语法','There ___ any milk in the fridge.',['isn’t','aren’t','hasn’t','doesn’t'],0),
    q('ca3','A2','阅读','What time does the café close on Sunday?',['11:00','12:00','13:00','18:00'],2,'RIVER CAFÉ: Open Tuesday–Saturday 8:00–18:00 and Sunday 9:00–13:00. Closed Monday.'),
    q('ca4','A2','语法','This book is ___ than the last one.',['interesting','more interesting','most interesting','the interesting'],1),
    q('ca5','B1','词汇','Please ___ me to call the dentist tomorrow.',['remember','remind','repeat','recommend'],1),
  ],
  B1: [
    q('cb1','A2','阅读','Why is Nina writing?',['To cancel a visit.','To change an arrangement.','To invite Sam to dinner.','To ask for directions.'],1,'Hi Sam, I can still meet you on Thursday, but could we make it 5:30 instead of 4:00? My music lesson finishes later than usual.'),
    q('cb2','B1','词汇','The hotel room ___ a beautiful view of the lake.',['looked','watched','offered','showed to'],2),
    q('cb3','B1','语法','You ___ have brought an umbrella; I have an extra one.',['mustn’t','needn’t','couldn’t','wouldn’t'],1),
    q('cb4','B1','阅读','How did the writer feel at the end?',['Relieved that the problem was solved.','Disappointed by the final result.','Surprised by another person’s reaction.','Embarrassed about asking for help.'],0,'The first solution failed, and so did the second. Just as I was ready to give up, Ana noticed a loose cable. Once she connected it, everything worked.'),
    q('cb5','B2','语法','Not until I checked the receipt ___ that I had been charged twice.',['I realised','did I realise','I had realised','had I realise'],1),
  ],
  B2: [
    q('cc1','B1','词汇','The company is trying to ___ its use of plastic packaging.',['reduce','lower down','descend','remove from'],0),
    q('cc2','B2','语法','Had we known about the road closure, we ___ a different route.',['took','would take','would have taken','had taken'],2),
    q('cc3','B2','词汇','Her comments were taken out of ___ and therefore seemed much harsher than intended.',['place','context','meaning','subject'],1),
    q('cc4','B2','阅读','What is the writer’s attitude?',['Entirely supportive','Cautiously optimistic','Deeply disappointed','Mostly indifferent'],1,'The scheme has had a promising start, although it is far too early to know whether the initial improvements can be sustained.'),
    q('cc5','C1','语法','___ the lack of funding, the researchers completed the project on schedule.',['Although','Despite','However','Even'],1),
  ],
  C1: [
    q('cd1','B2','阅读','What does the writer suggest?',['The change was inevitable.','The benefits remain uncertain.','The decision was widely welcomed.','The costs were deliberately hidden.'],1,'Supporters describe the reform as transformative, yet the limited evidence available makes such confidence seem premature.'),
    q('cd2','C1','词汇','The report provides a ___ account of how the failure occurred.',['meticulous','plentiful','considerate','dependent'],0),
    q('cd3','C1','语法','So complex ___ that several experts were asked to review it.',['the issue was','was the issue','did the issue','the issue did'],1),
    q('cd4','C1','阅读','What is being criticised?',['A preference for simple explanations.','An unwillingness to publish results.','A lack of interest in public opinion.','An excessive reliance on historical evidence.'],0,'The appeal of a single, decisive cause is understandable. Unfortunately, it can distract us from the untidy combination of factors that usually drives change.'),
    q('cd5','C2','词汇','The minister’s answer was deliberately ___, allowing both sides to claim support.',['unequivocal','ambiguous','negligible','superfluous'],1),
  ],
  C2: [
    q('ce1','C1','语法','Were the evidence ___ independently, the conclusion might prove less secure.',['to examine','examined','examining','to be examining'],1),
    q('ce2','C2','词汇','The apparent disagreement was largely ___; both researchers reached similar conclusions.',['semantic','substantial','impartial','tangible'],0),
    q('ce3','C2','阅读','What is the writer’s central point?',['Efficiency is always measurable.','Neutral systems are impossible to design.','Technical choices can embody social priorities.','Public debate prevents technological progress.'],2,'An algorithm may appear neutral because it applies the same rule consistently. Yet the choice of what to measure—and what to ignore—already reflects a judgement about what matters.'),
    q('ce4','C2','语法','Much as I ___ the elegance of the theory, its practical limitations are difficult to ignore.',['admire','am admiring','have admired','would admire'],0),
    q('ce5','C2','词汇','The author’s wit is so ___ that readers may miss the criticism entirely.',['blunt','understated','redundant','invariable'],1),
  ],
}

function branchFromAnchor(answers, startBand) {
  const correct = answers.slice(0, 5).filter(a => a.correct).length
  if (startBand === 'low') return correct >= 4 ? 'mid' : 'low'
  if (startBand === 'high') return correct <= 2 ? 'mid' : 'high'
  return correct <= 1 ? 'low' : correct >= 4 ? 'high' : 'mid'
}

function targetFromRoute(branch, answers) {
  const correct = answers.slice(5, 10).filter(a => a.correct).length
  if (branch === 'low') return correct >= 3 ? 'B1' : 'A2'
  if (branch === 'mid') return correct >= 3 ? 'B2' : 'B1'
  return correct >= 4 ? 'C2' : 'C1'
}

export default function PlacementTestModal({ onClose, onChooseLevel }) {
  const [started, setStarted] = useState(false)
  const [screeningComplete, setScreeningComplete] = useState(false)
  const [objectiveStarted, setObjectiveStarted] = useState(false)
  const [screeningIndex, setScreeningIndex] = useState(0)
  const [screeningAnswers, setScreeningAnswers] = useState([])
  const [startBand, setStartBand] = useState('low')
  const [queue, setQueue] = useState(ANCHOR_LOW)
  const [answers, setAnswers] = useState([])
  const [index, setIndex] = useState(0)
  const [branch, setBranch] = useState(null)
  const [target, setTarget] = useState(null)
  const [result, setResult] = useState(null)

  const current = queue[index]
  const progress = Math.round((index / 15) * 100)
  const questionHint = QUESTION_HINTS[current?.prompt]

  const skillStats = useMemo(() => {
    const stats = {}
    answers.forEach(a => {
      stats[a.skill] ||= { correct: 0, total: 0 }
      stats[a.skill].total++
      if (a.correct) stats[a.skill].correct++
    })
    return stats
  }, [answers])

  function choose(optionIndex) {
    const nextAnswers = [...answers.slice(0, index), { questionId: current.id, skill: current.skill, level: current.level, correct: optionIndex === current.answer }]
    setAnswers(nextAnswers)

    if (index === 4) {
      const nextBranch = branchFromAnchor(nextAnswers, startBand)
      setBranch(nextBranch)
      setQueue(prev => [...prev.slice(0, 5), ...ROUTES[nextBranch]])
      setIndex(5)
      return
    }

    if (index === 9) {
      const nextTarget = targetFromRoute(branch, nextAnswers)
      setTarget(nextTarget)
      setQueue(prev => [...prev.slice(0, 10), ...CONFIRM[nextTarget]])
      setIndex(10)
      return
    }

    if (index === 14) {
      const confirmCorrect = nextAnswers.slice(10, 15).filter(a => a.correct).length
      let levelIndex = LEVELS.findIndex(l => l.code === target)
      if (confirmCorrect <= 1) levelIndex--
      if (confirmCorrect >= 4) levelIndex++
      levelIndex = Math.max(0, Math.min(4, levelIndex))
      if (target === 'C2' && confirmCorrect < 4) levelIndex = 3
      const level = LEVELS[levelIndex]
      const finalResult = { level, confirmCorrect, totalCorrect: nextAnswers.filter(a => a.correct).length }
      setResult(finalResult)
      try { localStorage.setItem('mars_placement_result', JSON.stringify({ ...finalResult, completedAt: new Date().toISOString() })) } catch { /* local storage may be unavailable */ }
      return
    }

    setIndex(i => i + 1)
  }

  function goBack() {
    if (index === 0) return
    const nextIndex = index - 1
    setIndex(nextIndex)
    setAnswers(a => a.slice(0, nextIndex))
    if (nextIndex < 5) { setQueue(ANCHORS[startBand]); setBranch(null); setTarget(null) }
    else if (nextIndex < 10 && queue.length > 10) { setQueue(qs => qs.slice(0, 10)); setTarget(null) }
  }

  function restart() {
    setStarted(true); setScreeningComplete(false); setObjectiveStarted(false); setScreeningIndex(0); setScreeningAnswers([]); setStartBand('low'); setQueue(ANCHOR_LOW); setAnswers([]); setIndex(0); setBranch(null); setTarget(null); setResult(null)
  }

  function chooseScreening(value) {
    const next = [...screeningAnswers.slice(0, screeningIndex), value]
    setScreeningAnswers(next)
    if (screeningIndex < SCREENING.length - 1) {
      setScreeningIndex(i => i + 1)
      return
    }
    const totalWeight = SCREENING.reduce((sum, item) => sum + item.weight, 0)
    const average = next.reduce((sum, value, i) => sum + value * SCREENING[i].weight, 0) / totalWeight
    const band = average >= 2.35 ? 'high' : average >= 1.15 ? 'mid' : 'low'
    setStartBand(band)
    setQueue(ANCHORS[band])
    setIndex(0)
    setScreeningComplete(true)
  }

  return <motion.div className="fixed inset-0 z-[100] bg-[#061c17]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
    <motion.div className="bg-[#f8f9f6] rounded-[28px] shadow-2xl w-full max-w-3xl max-h-[94vh] overflow-y-auto" initial={{scale:.96,y:16}} animate={{scale:1,y:0}} exit={{scale:.96,y:16}} onClick={e=>e.stopPropagation()}>
      {!started ? <div className="p-7 sm:p-11">
        <div className="flex justify-between"><span className="text-xs font-extrabold text-emerald-700 tracking-[.16em]">学习阶段推荐测试 · 体验版</span><button onClick={onClose} className="w-9 h-9 rounded-full bg-white border text-gray-500">×</button></div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-7 tracking-tight">用 15 道题，找到合适的学习起点</h2>
        <p className="mt-4 text-gray-500 leading-relaxed">先用 5 个简单问题了解学习背景，再根据情况匹配客观题的起始难度。客观题覆盖词汇、语法和阅读，预计需要约 10 分钟。</p>
        <div className="mt-8 grid sm:grid-cols-4 gap-3">{[['00','初筛','了解学习背景'],['01','定位','5 道起始题'],['02','分流','动态调整难度'],['03','确认','验证相邻阶段']].map(x=><div key={x[0]} className="bg-white border rounded-2xl p-4"><span className="text-[10px] text-gray-400">{x[0]}</span><div className="font-extrabold mt-3">{x[1]}</div><div className="text-xs text-gray-400 mt-1">{x[2]}</div></div>)}</div>
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed">本测试仅用于推荐学习入口，不代表完整英语水平、正式证书成绩或 Cambridge 官方评定。</div>
        <button onClick={()=>setStarted(true)} className="mt-6 w-full py-4 rounded-2xl bg-[#f4c95d] text-[#083f32] font-extrabold text-base hover:bg-[#f7d574]">开始测试 →</button>
      </div> : !screeningComplete ? <div>
        <div className="px-6 sm:px-9 pt-6"><div className="flex items-center justify-between"><div><div className="text-[10px] font-extrabold text-[#9a6b00] tracking-[.16em]">学习背景初筛 · 不计分</div><div className="text-sm font-bold mt-1">第 {screeningIndex + 1} / 5 题</div></div><button onClick={onClose} className="w-9 h-9 rounded-full bg-white border text-gray-500">×</button></div><div className="mt-5 h-2 bg-gray-200 rounded-full overflow-hidden"><motion.div className="h-full bg-[#f4c95d] rounded-full" animate={{width:`${(screeningIndex + 1) * 20}%`}}/></div></div>
        <AnimatePresence mode="wait"><motion.div key={SCREENING[screeningIndex].id} initial={{opacity:0,x:15}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-15}} className="p-6 sm:p-9"><div className="text-xs text-gray-400">这些回答只用于选择第一组题目难度</div><h2 className="text-2xl sm:text-3xl font-extrabold mt-4">{SCREENING[screeningIndex].question}</h2><div className="mt-7 grid gap-3">{SCREENING[screeningIndex].options.map(([label,value],i)=><button key={label} onClick={()=>chooseScreening(value)} className="group text-left flex items-center gap-4 bg-white border-2 border-transparent hover:border-[#e2ba48] rounded-2xl p-4 transition-all"><span className="w-8 h-8 rounded-xl bg-gray-100 group-hover:bg-amber-100 grid place-items-center text-xs font-extrabold text-gray-500 group-hover:text-[#8a6400]">{String.fromCharCode(65+i)}</span><span className="font-semibold">{label}</span></button>)}</div>{screeningIndex>0&&<button onClick={()=>{setScreeningIndex(i=>i-1);setScreeningAnswers(a=>a.slice(0,-1))}} className="mt-6 text-sm font-bold text-gray-400">← 上一题</button>}</motion.div></AnimatePresence>
      </div> : !objectiveStarted ? <div className="p-7 sm:p-11">
        <div className="flex justify-between"><span className="text-xs font-extrabold text-[#9a6b00] tracking-[.16em]">初筛完成</span><button onClick={onClose} className="w-9 h-9 rounded-full bg-white border text-gray-500">×</button></div>
        <div className="mt-8 w-16 h-16 rounded-2xl bg-amber-100 text-[#8a6400] grid place-items-center text-2xl font-extrabold">✓</div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-6 tracking-tight">已匹配第一组题目难度</h2>
        <p className="mt-4 text-gray-500 leading-relaxed">接下来进入正式英语测试，共 15 道题。系统会根据你的实际答题表现继续调整难度，初筛回答不会计入最终正确率。</p>
        <div className="mt-7 bg-white border rounded-2xl p-5 flex items-center justify-between gap-4"><div><div className="text-xs text-gray-400">即将开始</div><div className="font-extrabold mt-1">英语测试第 1 / 15 题</div></div><div className="text-xs font-extrabold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700">动态难度</div></div>
        <button onClick={()=>setObjectiveStarted(true)} className="mt-6 w-full py-4 rounded-2xl bg-[#f4c95d] text-[#083f32] font-extrabold text-base hover:bg-[#f7d574]">开始正式测试 →</button>
      </div> : result ? <div className="p-7 sm:p-11">
        <div className="flex justify-between"><span className="text-xs font-extrabold tracking-[.16em]" style={{color:result.level.color}}>测试完成</span><button onClick={onClose} className="w-9 h-9 rounded-full bg-white border text-gray-500">×</button></div>
        <div className="mt-7 rounded-[28px] p-6 sm:p-8 border" style={{background:result.level.bg,borderColor:`${result.level.color}35`}}><div className="text-sm text-gray-500">建议学习阶段</div><div className="mt-2 text-3xl sm:text-5xl font-extrabold" style={{color:result.level.color}}>{result.level.code} {result.level.name} ({result.level.abbr})</div><p className="mt-4 text-sm text-gray-600">你在本次测试中答对 {result.totalCorrect}/15 题。建议从该阶段开始体验，再根据实际练习表现调整。</p></div>
        <div className="mt-6 grid grid-cols-3 gap-3">{['词汇','语法','阅读'].map(skill=>{const s=skillStats[skill]||{correct:0,total:0};return <div key={skill} className="bg-white border rounded-2xl p-4 text-center"><div className="text-xs text-gray-400">{skill}</div><div className="text-xl font-extrabold mt-2">{s.correct}/{s.total}</div></div>})}</div>
        <div className="mt-6 bg-white border rounded-2xl p-5"><div className="font-extrabold">如何理解这个结果？</div><p className="text-sm text-gray-500 mt-2 leading-relaxed">本测试主要观察词汇、语法和阅读表现，不包含完整的听力、写作和口语评估。接近等级边界时，从较低阶段巩固通常更稳妥。</p></div>
        <div className="mt-6 grid sm:grid-cols-2 gap-3"><button onClick={()=>onChooseLevel(result.level)} className="py-3.5 rounded-xl bg-[#0d7656] text-white font-extrabold">进入 {result.level.abbr} 学习 →</button><button onClick={restart} className="py-3.5 rounded-xl bg-white border font-extrabold">重新测试</button></div>
      </div> : <div>
        <div className="px-6 sm:px-9 pt-6"><div className="flex items-center justify-between"><div><div className="text-[10px] font-extrabold text-emerald-700 tracking-[.16em]">{index<5?'第一阶段 · 定位':index<10?'第二阶段 · 动态分流':'第三阶段 · 等级确认'}</div><div className="text-sm font-bold mt-1">第 {index+1} / 15 题</div></div><button onClick={onClose} className="w-9 h-9 rounded-full bg-white border text-gray-500">×</button></div><div className="mt-5 h-2 bg-gray-200 rounded-full overflow-hidden"><motion.div className="h-full bg-[#f4c95d] rounded-full" animate={{width:`${Math.max(4,progress)}%`}}/></div></div>
        <AnimatePresence mode="wait"><motion.div key={current.id} initial={{opacity:0,x:15}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-15}} className="p-6 sm:p-9"><div className="flex items-center gap-2"><span className="text-[10px] font-extrabold px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{current.skill}</span><span className="text-[10px] text-gray-400">难度会根据表现调整</span></div>{current.context&&<div className="mt-5 bg-white border rounded-2xl p-5 sm:p-6 text-lg sm:text-xl leading-relaxed text-gray-700">{current.context}</div>}<h2 className="text-xl sm:text-2xl font-extrabold mt-5 leading-snug">{current.prompt}</h2>{questionHint && (current.level === 'A2' || current.level === 'B1' ? <p className="mt-2 text-sm text-gray-400">中文提示：{questionHint}</p> : <details className="mt-3 text-sm text-gray-400"><summary className="cursor-pointer select-none font-semibold hover:text-emerald-700">查看题型提示</summary><p className="mt-2">{questionHint}</p></details>)}<div className="mt-6 grid gap-3">{current.options.map((option,i)=><button key={option} onClick={()=>choose(i)} className="group text-left flex items-center gap-4 bg-white border-2 border-transparent hover:border-emerald-400 rounded-2xl p-4 transition-all"><span className="w-8 h-8 rounded-xl bg-gray-100 group-hover:bg-emerald-100 grid place-items-center text-xs font-extrabold text-gray-500 group-hover:text-emerald-700">{String.fromCharCode(65+i)}</span><span className="font-semibold text-sm sm:text-base">{option}</span></button>)}</div><div className="mt-6 flex justify-between"><button onClick={goBack} disabled={index===0} className="text-sm font-bold text-gray-400 disabled:opacity-30">← 上一题</button><span className="text-xs text-gray-400">选择答案后自动进入下一题</span></div></motion.div></AnimatePresence>
      </div>}
    </motion.div>
  </motion.div>
}
