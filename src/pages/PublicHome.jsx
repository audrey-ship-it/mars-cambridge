import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LondonSkyline } from './CambridgeLanding'
import PlacementTestModal from './PlacementTestModal'

const levels = [
  { code: 'A2', abbr: 'KET', name: 'Key', zh: '基础英语', color: '#0d7656', bg: '#eaf7f1', note: '内容最完整', desc: '建立日常英语沟通基础，适合小学高年级及入门学习者。' },
  { code: 'B1', abbr: 'PET', name: 'Preliminary', zh: '初级英语', color: '#2574a9', bg: '#edf6fb', note: '可进入', desc: '提升日常学习、旅行与生活场景中的独立英语能力。' },
  { code: 'B2', abbr: 'FCE', name: 'First', zh: '独立英语', color: '#5b63b7', bg: '#f0f1fb', note: '可进入', desc: '面向更复杂的学习与交流任务，发展独立使用英语的能力。' },
  { code: 'C1', abbr: 'CAE', name: 'Advanced', zh: '高级英语', color: '#7c5aa6', bg: '#f5f0fa', note: '可进入', desc: '训练高阶学术与专业场景中的理解、表达和沟通能力。' },
  { code: 'C2', abbr: 'CPE', name: 'Proficiency', zh: '精通英语', color: '#a14d68', bg: '#fbf0f4', note: '可进入', desc: '面向接近熟练使用者水平的深度语言训练与综合表达。' },
]

const coreModules = [
  { icon: 'book', number: '01', en: 'VOCABULARY', title: '词汇', desc: '核心词表与错词循环', path: '/cambridge/vocabulary' },
  { icon: 'blocks', number: '02', en: 'GRAMMAR', title: '语法', desc: '按考点拆分即时练习', path: '/cambridge/grammar' },
  { icon: 'reading', number: '03', en: 'READING', title: '阅读', desc: '按照考试 Part 训练', path: '/cambridge/reading' },
  { icon: 'headphones', number: '04', en: 'LISTENING', title: '听力', desc: '题型训练、精听与拼写', path: '/cambridge/listening' },
]

const aiModules = [
  { icon: 'pen', en: 'AI WRITING', title: '写作体验', desc: '完成邮件写作和看图写故事，获得任务完成度、语法、词汇与拼写的模拟反馈。', tags: ['邮件写作', '看图写故事', '修改建议'], path: '/cambridge/writing', theme: 'gold' },
  { icon: 'mic', en: 'AI SPEAKING', title: '口语体验', desc: '跟随考官问题开口练习，体验录音计时、流利度与发音的模拟反馈。', tags: ['个人问答', '话题讨论', '录音反馈'], path: '/cambridge/speaking', theme: 'green' },
]

function ModuleIcon({ name, className = 'w-6 h-6' }) {
  const paths = {
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></>,
    blocks: <><rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><path d="M14 17h6M17 14v6"/></>,
    reading: <><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M8 4v16M11 8h5M11 12h5"/></>,
    headphones: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H6a2 2 0 0 1-2-2v-4ZM20 14h-3v6h1a2 2 0 0 0 2-2v-4Z"/></>,
    keyboard: <><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h.01M11 10h.01M15 10h.01M18 10h.01M7 14h.01M11 14h6"/></>,
    pen: <><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"/><path d="m14 7 3 3M8.5 19 5 15.5"/></>,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></>,
  }
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function BrandMark({ light = false }) {
  return <div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-2xl grid place-items-center font-extrabold ${light ? 'bg-[#f4c95d] text-[#083f32]' : 'bg-[#083f32] text-[#f4c95d]'}`}>M</div><div><div className={`font-extrabold tracking-tight ${light ? 'text-white' : 'text-gray-950'}`}>Mars Cambridge</div><div className={`text-[10px] font-semibold tracking-[.2em] ${light ? 'text-white/45' : 'text-gray-400'}`}>火星剑桥网</div></div></div>
}

export default function PublicHome() {
  const navigate = useNavigate()
  const [mobileNav, setMobileNav] = useState(false)
  const [showLevelTest, setShowLevelTest] = useState(false)

  function openLevel(level) {
    try { localStorage.setItem('cambridge_level', level.abbr) } catch { /* local storage may be unavailable */ }
    navigate(level.abbr === 'KET' ? '/cambridge' : `/cambridge/${level.abbr.toLowerCase()}`)
  }

  function startLearning() {
    let saved = 'KET'
    try { saved = localStorage.getItem('cambridge_level') || 'KET' } catch { /* use the KET fallback */ }
    navigate(saved === 'KET' ? '/cambridge' : `/cambridge/${saved.toLowerCase()}`)
  }

  return <div className="min-h-screen bg-[#f7f8f5] text-[#15201d] overflow-x-hidden">
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f7f8f5]/90 backdrop-blur-xl border-b border-[#dfe5df]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center">
        <Link to="/"><BrandMark /></Link>
        <nav className="hidden lg:flex ml-auto items-center gap-7 text-sm font-semibold text-gray-600">
          <a href="#levels" className="hover:text-[#0d7656]">学习阶段</a><a href="#modules" className="hover:text-[#0d7656]">训练模块</a><a href="#method" className="hover:text-[#0d7656]">学习方式</a>
        </nav>
        <button onClick={startLearning} className="hidden sm:block ml-5 px-5 py-2.5 rounded-xl bg-[#0d7656] text-white text-sm font-bold hover:bg-[#095f46]">进入我的学习</button>
        <button onClick={() => setMobileNav(v => !v)} className="lg:hidden ml-auto w-10 h-10 rounded-xl border border-gray-200 bg-white">{mobileNav ? '×' : '☰'}</button>
      </div>
      <AnimatePresence>{mobileNav && <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="lg:hidden bg-white border-t overflow-hidden"><div className="p-5 grid gap-3 text-sm font-bold">{[['学习阶段','#levels'],['训练模块','#modules'],['学习方式','#method']].map(x => <a key={x[0]} href={x[1]} onClick={() => setMobileNav(false)}>{x[0]}</a>)}<button onClick={startLearning} className="mt-2 py-3 rounded-xl bg-[#0d7656] text-white">进入我的学习</button></div></motion.div>}</AnimatePresence>
    </header>

    <main>
      <section id="levels" className="pt-[72px] bg-white">
        <div className="min-h-[calc(100vh-72px)] grid lg:grid-cols-[44%_56%]">
          <div className="relative min-h-[620px] lg:min-h-0 bg-[#064e3b] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-[.44]"><LondonSkyline className="w-full h-full" /></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/60 via-transparent to-[#064e3b]/75" />
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="relative z-10 text-center px-8 max-w-lg">
              <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 text-white/80 rounded-full px-3 py-1.5 text-xs font-bold">学习阶段测试 · 体验版</div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">从哪一级开始？</h1>
              <p className="mt-5 text-white/65 leading-relaxed">测一测，找到适合你的学习起点。</p>
              <button onClick={()=>setShowLevelTest(true)} className="mt-8 px-8 py-4 bg-[#f4c95d] text-[#083f32] rounded-2xl font-extrabold shadow-xl shadow-black/10 hover:bg-[#f7d574] transition-colors">开始测试 →</button>
              <div className="mt-6 text-[11px] text-white/40">无需注册 · 结果仅供学习参考</div>
            </motion.div>
          </div>

          <div className="px-6 sm:px-10 lg:px-16 xl:px-24 py-14 lg:py-10 flex items-center">
            <div className="w-full max-w-2xl mx-auto">
              <div className="divide-y divide-gray-100 border-y border-gray-100">{levels.map((level,i)=><motion.button key={level.abbr} initial={{opacity:0,x:14}} animate={{opacity:1,x:0}} transition={{delay:.06+i*.05}} onClick={()=>openLevel(level)} className="w-full py-5 flex items-center gap-4 group text-left"><span className="w-3 h-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-150" style={{background:level.color}}/><div className="flex-1 min-w-0"><div className="flex items-center gap-2"><span className="font-extrabold text-base sm:text-lg">{level.code} {level.name}</span><span className="font-extrabold text-base sm:text-lg">({level.abbr})</span>{level.abbr==='KET'&&<span className="text-[9px] font-extrabold bg-[#fff1bf] text-[#8a6400] border border-[#efd77a] rounded-full px-2 py-0.5">优先完善</span>}</div></div><span className="w-28 sm:w-32 py-3 rounded-[14px] bg-[#064e3b] text-white text-sm text-center font-extrabold group-hover:bg-[#0d7656] group-hover:shadow-md transition-all">进入</span></motion.button>)}</div>
              <div className="mt-6 flex items-center justify-between gap-4"><p className="text-xs text-gray-400">已经学习过？系统会记住你上次选择的阶段。</p><button onClick={startLearning} className="text-xs font-extrabold text-[#9a6b00] hover:text-[#745000] whitespace-nowrap transition-colors">继续上次学习 →</button></div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="py-24 bg-[#f7f8f5]"><div className="max-w-7xl mx-auto px-5 lg:px-8"><div className="max-w-2xl"><div className="text-xs font-extrabold tracking-[.2em] text-emerald-700 uppercase">Practice by skill</div><h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">专项训练，从薄弱项开始</h2><p className="mt-3 text-gray-500">选择一个模块马上练习，每一次进步都有清晰反馈。</p></div>
        <div className="mt-11 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{coreModules.map((m,i)=><motion.button key={m.title} onClick={()=>navigate(m.path)} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} whileHover={{y:-5}} className="group relative text-left bg-white border border-[#e0e5df] rounded-[22px] p-5 min-h-[224px] overflow-hidden shadow-[0_8px_28px_rgba(18,49,40,.035)] hover:border-[#b9ccc4] hover:shadow-[0_18px_40px_rgba(18,49,40,.09)] transition-[border-color,box-shadow]"><div className="absolute inset-x-0 bottom-0 h-1 bg-[#0d7656] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"/><div className="flex items-start justify-between"><span className="w-11 h-11 rounded-[14px] bg-[#edf6f2] text-[#0d7656] grid place-items-center"><ModuleIcon name={m.icon}/></span><span className="text-[10px] font-extrabold tracking-[.14em] text-gray-300">{m.number}</span></div><div className="mt-8 text-[9px] font-extrabold tracking-[.14em] text-[#789188]">{m.en}</div><h3 className="mt-2 text-xl font-extrabold">{m.title}</h3><p className="mt-2 text-sm text-gray-400 leading-relaxed">{m.desc}</p><div className="mt-5 text-xs font-extrabold text-[#0d7656] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">开始练习 →</div></motion.button>)}</div>
        <div className="mt-4 grid lg:grid-cols-2 gap-4">{aiModules.map((m,i)=><motion.button key={m.title} onClick={()=>navigate(m.path)} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.15+i*.05}} whileHover={{y:-4}} className={`group relative text-left rounded-[26px] border p-6 sm:p-7 overflow-hidden transition-shadow hover:shadow-[0_20px_46px_rgba(18,49,40,.1)] ${m.theme==='gold'?'bg-[#fff9e9] border-[#eadb9f]':'bg-[#eaf5f0] border-[#bed8cc]'}`}><div className={`absolute -right-12 -bottom-20 w-52 h-52 rounded-full ${m.theme==='gold'?'bg-[#f4c95d]/20':'bg-[#0d7656]/10'}`}/><div className="relative flex gap-5"><span className={`flex-shrink-0 w-12 h-12 rounded-2xl grid place-items-center ${m.theme==='gold'?'bg-[#f4c95d] text-[#493500]':'bg-[#0d7656] text-white'}`}><ModuleIcon name={m.icon}/></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className={`text-[9px] font-extrabold tracking-[.16em] ${m.theme==='gold'?'text-[#8a6400]':'text-[#0d7656]'}`}>{m.en}</span><span className="text-[9px] font-extrabold px-2 py-1 rounded-full bg-white/70 border border-black/5">AI 体验版</span></div><h3 className="mt-2 text-2xl font-extrabold">{m.title}</h3><p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-lg">{m.desc}</p><div className="mt-5 flex flex-wrap items-center gap-2">{m.tags.map(tag=><span key={tag} className="text-[11px] font-semibold bg-white/65 border border-black/5 rounded-full px-3 py-1.5">{tag}</span>)}<span className={`ml-auto text-xs font-extrabold group-hover:translate-x-1 transition-transform ${m.theme==='gold'?'text-[#8a6400]':'text-[#0d7656]'}`}>开始体验 →</span></div></div></div></motion.button>)}</div>
      </div></section>

      <section id="method" className="py-24 bg-[#083f32] text-white relative overflow-hidden"><div className="absolute inset-0 opacity-[.05]" style={{backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)',backgroundSize:'48px 48px'}}/><div className="max-w-7xl mx-auto px-5 lg:px-8 relative"><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-center"><div><div className="text-xs sm:text-sm font-extrabold tracking-[.08em] text-white/75 whitespace-nowrap">今天学什么，打开就知道</div><h2 className="text-4xl sm:text-5xl font-extrabold mt-3 text-[#f4c95d]">我的学习</h2><p className="mt-5 text-white/55 leading-relaxed">“我的学习”会整理今日任务、上次进度、薄弱项和最近成绩，帮你找到下一步练习。</p><button onClick={startLearning} className="mt-7 px-6 py-3 bg-[#f4c95d] text-[#083f32] rounded-xl font-extrabold">进入我的学习 →</button></div><div className="grid sm:grid-cols-5 gap-3">{[['01','今日任务'],['02','继续学习'],['03','薄弱项'],['04','错题复习'],['05','模拟考试']].map((x,i)=><div key={x[0]} className="relative bg-white/[.07] border border-white/10 rounded-2xl p-4 min-h-32"><span className="text-[10px] text-white/35">{x[0]}</span><div className="mt-8 font-extrabold text-sm">{x[1]}</div>{i<4&&<span className="hidden sm:block absolute -right-2.5 top-1/2 text-[#f4c95d]">→</span>}</div>)}</div></div></div></section>

      <section className="py-20 bg-[#f7f8f5] border-y border-gray-200 relative overflow-hidden"><div className="absolute inset-0 opacity-[.035]" style={{backgroundImage:'linear-gradient(#0d7656 1px,transparent 1px),linear-gradient(90deg,#0d7656 1px,transparent 1px)',backgroundSize:'48px 48px'}}/><div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[.82fr_1.18fr] gap-12 items-center relative"><div><div className="text-xs sm:text-sm font-extrabold tracking-[.08em] text-gray-500 whitespace-nowrap">专项练习之后，完整模拟一次</div><h2 className="text-4xl sm:text-5xl font-extrabold mt-3 text-[#0d7656]">模拟考试</h2><p className="mt-4 text-gray-500 leading-relaxed max-w-md">按考试结构完成全科训练，熟悉流程、时间和答题节奏。</p><button onClick={()=>navigate('/cambridge/exams')} className="mt-7 px-6 py-3 rounded-xl bg-[#0d7656] text-white font-extrabold">查看模拟考试 →</button></div><div className="grid sm:grid-cols-4 gap-3">{[
        ['01','完整科目','读写 · 听力 · 口语'],
        ['02','Part 导航','题号与完成进度'],
        ['03','模拟计时','时间与答题节奏'],
        ['04','结果复盘','解析与历史成绩'],
      ].map((item,i)=><motion.div key={item[0]} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="relative min-h-36 rounded-2xl border border-[#c9d9d2] bg-white/75 p-4"><div className="text-[10px] font-extrabold tracking-[.14em] text-[#7b9b8e]">{item[0]}</div><div className="mt-8 text-sm font-extrabold text-[#163a2f] whitespace-nowrap">{item[1]}</div><div className="mt-2 text-[11px] text-gray-500 leading-relaxed">{item[2]}</div>{i<3&&<span className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-[#d7a91f] font-extrabold z-10">→</span>}</motion.div>)}</div></div></section>

      <section className="py-20 bg-[#f4c95d]"><div className="max-w-4xl mx-auto px-5 text-center"><h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#102d25]">从今天的一次练习开始</h2><p className="mt-4 text-[#274d42]">选择你的阶段，继续上次学习，或者完成今天的第一个任务。</p><button onClick={startLearning} className="mt-7 px-8 py-4 bg-[#083f32] text-white rounded-2xl font-extrabold shadow-lg">开始今天的学习 →</button></div></section>
    </main>

    <footer className="bg-[#071e19] text-white"><div className="max-w-7xl mx-auto px-5 lg:px-8 py-12"><div className="flex flex-col md:flex-row gap-8 justify-between"><BrandMark light/><div className="text-xs text-white/45 max-w-xl leading-relaxed">Mars Cambridge 是独立学习产品，与 Cambridge University Press & Assessment 不存在官方隶属或授权关系。练习结果、成绩换算参考及 AI 模拟反馈仅用于学习，不代表官方考试成绩。</div></div><div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-white/35"><span>© 2026 Mars Cambridge</span><span>当前为 Mock 原型 · 学习数据保存在浏览器本地</span></div></div></footer>
    <AnimatePresence>{showLevelTest && <PlacementTestModal onClose={()=>setShowLevelTest(false)} onChooseLevel={openLevel} />}</AnimatePresence>
  </div>
}
