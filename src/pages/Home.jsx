import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icons.jsx'
import { LevelSwitch } from '../components/ExamList.jsx'
import { readingSets } from '../data/readingSets.js'
import { readingSets6 } from '../data/readingSets6.js'
import { examVars, examTheme } from '../utils/examTheme.js'
import { resolveExamLevel, setExamLevel, withExamParam } from '../utils/examLevel.js'

/* ── 配色：深蓝主色 + 点缀色（CET-4 黄 / CET-6 薄荷青绿），由 examTheme 注入 CSS 变量 ── */

/* 顶部导航（target 为页内区块 id；HashRouter 下不能用 href="#id" 锚点，会破坏路由，改用 JS 滚动） */
const NAV_LINKS = [
  { label: '首页', target: 'top' },
  { label: '真题题库', target: 'modules' },
  { label: '专项模块', target: 'modules' },
  { label: '备考策略', target: 'method' },
]

/* 平滑滚动到页内区块（scroll-mt 补偿顶栏高度） */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* 专项模块 */
const MODULES = [
  { icon: 'reading', title: '阅读理解', desc: '选词填空 · 长篇阅读 · 仔细阅读，真题逐套训练', tags: ['选词填空', '段落匹配', '四选一'], link: '/reading' },
  { icon: 'listening', title: '听力理解', desc: '短篇新闻 · 长对话 · 听力篇章，音频原文对照练习', tags: ['新闻', '长对话', '篇章'], link: '/listening' },
  { icon: 'translation', title: '翻译', desc: '汉译英段落翻译，参考译文与译点精析，草稿自动保存', tags: ['汉译英', '段落', '参考译文'], link: '/translation' },
  { icon: 'writing', title: '写作', desc: '真题短文写作，审题思路与范文译文对照，实时字数统计', tags: ['范文对照', '草稿保存', '字数统计'], link: '/writing' },
  { icon: 'grammar', title: '语法', desc: '选择/填空/改错三题型单元，错题自动记录循环练', tags: ['三题型', '错题本', '考点讲解'], link: '/grammar' },
  { icon: 'words', title: '单词', desc: '必默词汇按话题编排，阅读高频 + 全量词表，背记拼写逐词过关', tags: ['话题必默', '背记拼写', '错词本'], link: '/words' },
  { icon: 'mock', title: '模拟考试', desc: '按考试结构完整模考，计时与结果复盘', tags: ['整套模考', '计时', '复盘'], link: '/mock' },
]

/* 网站特点（右侧卡片）：均对应站内已有功能 */
const FEATURES = [
  { icon: 'clock', title: '整套模考', desc: '按真实考试顺序与时间计时' },
  { icon: 'check', title: '错题本', desc: '答对才移出，不会点一次就丢' },
  { icon: 'listening', title: '听力原音频', desc: '倍速播放，交卷后标出答案依据' },
  { icon: 'writing', title: '写作 · 翻译参考', desc: '范文与参考译文对照，草稿自动保存' },
]

/* 备考流程 */
const STEPS = [
  { title: '摸底', desc: '从最近一套真题开始，了解自己目前的水平。' },
  { title: '专项训练', desc: '按阅读、听力、翻译、写作、语法、单词逐项练习。' },
  { title: '整套模考', desc: '按正式考试顺序和时间完成整套，熟悉节奏。' },
  { title: '错题复盘', desc: '错题自动进入错题本，答对后才移出。' },
]

/* 考试结构（试卷结构：2016 年 6 月起的新题型；以全国大学英语四六级考试委员会官方说明为准） */
const EXAM_STRUCTURE = {
  cet4: {
    total: '125 分钟',
    rows: [
      { part: '写作', content: '短文写作', count: '1 题', time: '30 分钟', weight: '15%' },
      { part: '听力', content: '长对话 · 短篇新闻 · 听力篇章', count: '25 题', time: '25 分钟', weight: '35%' },
      { part: '阅读', content: '选词填空 · 长篇阅读 · 仔细阅读', count: '30 题', time: '40 分钟', weight: '35%' },
      { part: '翻译', content: '段落汉译英', count: '1 题', time: '30 分钟', weight: '15%' },
    ],
  },
  cet6: {
    total: '130 分钟',
    rows: [
      { part: '写作', content: '短文写作', count: '1 题', time: '30 分钟', weight: '15%' },
      { part: '听力', content: '长对话 · 听力篇章 · 讲座', count: '25 题', time: '30 分钟', weight: '35%' },
      { part: '阅读', content: '选词填空 · 长篇阅读 · 仔细阅读', count: '30 题', time: '40 分钟', weight: '35%' },
      { part: '翻译', content: '段落汉译英', count: '1 题', time: '30 分钟', weight: '15%' },
    ],
  },
}

/* 小标题：点缀色短条 + 文字 */
function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2.5 text-sm font-bold tracking-[.18em] text-[var(--accent)]">
      <span className="inline-block w-[22px] h-[3px] rounded-sm bg-[var(--hl)]" />
      {children}
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const exam = resolveExamLevel(searchParams) === 'cet6' ? 'CET-6' : 'CET-4'
  const theme = examTheme(exam)
  const structure = EXAM_STRUCTURE[exam === 'CET-6' ? 'cet6' : 'cet4']
  const onLevelChange = (code) => {
    setExamLevel(code)
    setSearchParams({ exam: code })
  }
  const sets = exam === 'CET-6' ? readingSets6 : readingSets
  const years = sets.map((x) => x.meta.year)
  const yearRange = `${Math.min(...years)}–${Math.max(...years)}`
  const verifiedAll = sets.length > 0 && sets.every((x) => x.meta.verified)

  return (
    <div id="top" className="min-h-screen bg-[#f6f7fb] text-[#151521] overflow-x-hidden" style={examVars(exam)}>

      {/* ═══ 顶栏（桌面端左侧让出侧边栏宽度，由 Layout 的 ml-52 处理） ═══ */}
      <header className="sticky top-0 z-30 bg-[#f6f7fb]/90 backdrop-blur-xl border-b border-[#e1e5f0] hidden md:block">
        <div className="max-w-[1080px] mx-auto px-8 h-16 flex items-center gap-3">
          <LevelSwitch isCet6={exam === 'CET-6'} onChange={onLevelChange} prominent />
          <nav className="ml-auto flex items-center gap-7 text-base font-semibold text-gray-600">
            {NAV_LINKS.map(n => (
              <button
                key={n.label}
                onClick={() => scrollToSection(n.target)}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => navigate(withExamParam('/reading'))}
            className="px-5 py-2.5 rounded-lg bg-[var(--accent-deep)] text-white text-base font-bold hover:bg-[var(--accent)] transition-colors"
          >
            免费试考
          </button>
        </div>
      </header>

      {/* ═══ Hero：左文案 + 右真题卡片 + 数据条；首屏淡格子 ═══ */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[var(--accent-softer)] to-transparent pointer-events-none" />
        <div
          className="absolute inset-x-0 top-0 h-[640px] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(color-mix(in srgb, var(--accent-deep) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent-deep) 8%, transparent) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)',
          }}
        />

        <div className="relative max-w-[1080px] mx-auto px-6 md:px-8 pt-14 md:pt-[70px] pb-[54px] grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="md:hidden mb-4">
              <LevelSwitch isCet6={exam === 'CET-6'} onChange={onLevelChange} />
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--accent-border)] text-sm font-bold text-[var(--accent-deep)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--hl)] shadow-[0_0_0_2px_var(--accent-deep)]" />
              {exam} · 大学英语四六级备考
            </span>
            <h1 className="mt-5 text-[34px] sm:text-[38px] font-extrabold leading-[1.15] tracking-tight">
              四六级真题库
              <br />
              <span
                className="text-[var(--accent-deep)] px-1 -mx-1"
                style={{ background: 'linear-gradient(transparent 60%, var(--hl) 60%, var(--hl) 90%, transparent 90%)', WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}
              >阅读·听力·翻译·写作</span>
            </h1>
            <p className="mt-5 text-lg sm:text-[19px] leading-[1.75] text-gray-600 max-w-[540px]">
              基于历年真题与 AI 诊断，逐题核对答案、按薄弱项针对练习，进度保存在本机浏览器。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => navigate(withExamParam('/reading'))}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent-deep)] text-white text-base font-bold hover:bg-[var(--accent)] transition-colors"
              >
                开始阅读练习 →
              </button>
              <Link
                to={withExamParam('/mock')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 text-base font-bold border border-gray-300 hover:border-gray-400 transition-colors"
              >
                浏览历年真题
              </Link>
            </div>
          </motion.div>

          {/* 右侧：网站特点 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-[#e1e5f0] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(16,24,20,.04),0_12px_32px_-12px_rgba(16,24,20,.12)]"
          >
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-center gap-4 px-[22px] py-3.5 border-t border-[#f1f3f0] first:border-t-0">
                <span className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center shrink-0">
                  <Icon name={f.icon} className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[17px] font-bold">{f.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
            <button
              onClick={() => scrollToSection('modules')}
              className="block w-full text-center py-3 text-base font-bold text-[var(--accent)] bg-[var(--accent-softer)] border-t border-[#eef1ed] hover:bg-[var(--accent-soft)] transition-colors"
            >
              查看专项模块
            </button>
          </motion.div>
        </div>

        {/* 数据条 */}
        <div className="relative max-w-[1016px] mx-auto mb-[52px] px-6 md:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-white border border-[#e1e5f0] rounded-2xl overflow-hidden">
            {[
              { ic: String(sets.length), big: `${sets.length} 套`, small: `${exam} 历年真题` },
              { ic: '年', big: yearRange, small: '覆盖年份' },
              { ic: '7', big: '7 个', small: '专项模块' },
              ...(verifiedAll ? [{ ic: '✓', big: '已核对', small: '题库数据逐套核对' }] : [{ ic: '4', big: '4 部分', small: '写作 · 听力 · 阅读 · 翻译' }]),
            ].map((s, i) => (
              <div key={s.small} className={'flex items-center gap-3.5 p-5 border-[#eef1ed] ' + (i % 2 ? 'border-l ' : '') + (i > 1 ? 'border-t lg:border-t-0 ' : '') + (i > 0 ? 'lg:border-l' : '')}>
                <span className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center font-extrabold shrink-0">{s.ic}</span>
                <div>
                  <div className="text-2xl font-bold leading-none">{s.big}</div>
                  <div className="text-sm text-gray-500 mt-2">{s.small}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 专项模块 ═══ */}
      <section id="modules" className="py-16 bg-white border-t border-[#e1e5f0] scroll-mt-16">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <Eyebrow>专项训练</Eyebrow>
          <h2 className="text-[40px] font-extrabold mt-3 mb-2.5 tracking-tight">按题型逐项突破</h2>
          <p className="text-lg text-gray-600 mb-9">每个模块独立完整，可按薄弱项针对练习。</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((mod, i) => (
              <Link key={mod.title} to={withExamParam(mod.link)}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="group relative h-full border border-[#e1e5f0] rounded-[14px] p-7 bg-white overflow-hidden transition hover:border-[var(--accent)] hover:shadow-[0_8px_24px_-12px_rgba(16,24,20,.18)]"
                >
                  <div className="w-[52px] h-[52px] rounded-[10px] bg-[var(--accent-soft)] text-[var(--accent)] grid place-items-center mb-[22px]">
                    <Icon name={mod.icon} className="w-[26px] h-[26px]" />
                  </div>
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-[var(--hl)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-[22px] font-bold">{mod.title}</h3>
                  <span className="block w-[22px] h-[3px] rounded-sm bg-[var(--hl)] mt-2.5 mb-3" />
                  <p className="text-base leading-[1.75] text-gray-600 mb-[18px]">{mod.desc}</p>
                  <div className="flex flex-wrap">
                    {mod.tags.map(tag => (
                      <span key={tag} className="text-sm font-medium px-3 py-[5px] rounded-md bg-gray-100 text-gray-600 mr-2 mb-2">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 备考流程 ═══ */}
      <section className="py-[72px] bg-[#f6f7fb] border-t border-[#e1e5f0]">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <Eyebrow>备考流程</Eyebrow>
          <h2 className="text-[40px] font-extrabold mt-3 mb-2.5 tracking-tight">四步走完一轮备考</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-[640px] leading-[1.7]">从一套真题开始，逐步过渡到整套模考，最后用错题本查漏补缺。</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-8">
            {STEPS.map((st, i) => (
              <div key={st.title} className="relative pr-7">
                <div className="w-11 h-11 rounded-full bg-[var(--accent-deep)] text-white grid place-items-center text-[17px] font-extrabold relative z-10">{i + 1}</div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-[22px] left-11 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-border)] to-[#e1e5f0]" />
                )}
                <h3 className="text-xl font-bold mt-5 mb-2">{st.title}</h3>
                <p className="text-base leading-[1.7] text-gray-600">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 考试结构（随当前级别切换） ═══ */}
      <section className="py-[72px] bg-white border-t border-[#e1e5f0]">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <Eyebrow>考试结构</Eyebrow>
          <h2 className="text-[40px] font-extrabold mt-3 mb-2.5 tracking-tight">{exam} 考什么</h2>
          <p className="text-lg text-gray-600 mb-10 leading-[1.7]">先看清题型、题量、时间和分值占比，再决定怎么分配练习。</p>
          <div className="overflow-x-auto rounded-[14px] border border-[#e1e5f0]">
            <table className="w-full text-base text-left">
              <thead className="bg-[var(--accent-softer)]">
                <tr className="text-sm text-gray-600 tracking-wide">
                  {['部分', '内容', '题量', '时间', '占比'].map(h => (
                    <th key={h} className="px-5 py-3.5 font-bold border-b border-[#e1e5f0] whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {structure.rows.map((r) => (
                  <tr key={r.part} className="border-t border-[#eef1ed] first:border-t-0">
                    <td className="px-5 py-[18px] font-bold text-[17px] whitespace-nowrap">{r.part}</td>
                    <td className="px-5 py-[18px] text-gray-700">{r.content}</td>
                    <td className="px-5 py-[18px] text-gray-700 whitespace-nowrap">{r.count}</td>
                    <td className="px-5 py-[18px] text-gray-700 whitespace-nowrap">{r.time}</td>
                    <td className="px-5 py-[18px] font-bold text-[var(--accent)] whitespace-nowrap">{r.weight}</td>
                  </tr>
                ))}
                <tr className="bg-[var(--accent-softer)] font-extrabold border-t border-[#eef1ed]">
                  <td className="px-5 py-[18px]">合计</td>
                  <td className="px-5 py-[18px]" />
                  <td className="px-5 py-[18px]">—</td>
                  <td className="px-5 py-[18px] whitespace-nowrap">{structure.total}</td>
                  <td className="px-5 py-[18px]">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3.5 text-sm text-gray-500">满分 710 分。以上依据 2016 年 6 月起的试卷结构整理，具体以全国大学英语四六级考试委员会官方说明为准。</p>
        </div>
      </section>

      {/* ═══ 备考策略 / CTA ═══ */}
      <section id="method" className="bg-[var(--accent-deep)] py-16 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 opacity-[.05]" style={{ backgroundImage: 'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="text-sm font-bold tracking-[.2em]" style={{ color: theme.bannerText }}>备考策略</div>
            <h2 className="text-4xl font-extrabold text-white my-3 tracking-tight">从一套真题开始</h2>
            <p className="max-w-[520px] leading-[1.7] text-lg" style={{ color: theme.bannerTextFaint }}>
              逐题核对、即时评分，错题自动进入错题本，找到你的薄弱项再针对练习。
            </p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <button
              onClick={() => navigate(withExamParam('/reading'))}
              className="px-7 py-3.5 bg-[var(--hl)] text-[var(--accent-deep)] font-bold rounded-lg hover:brightness-95 transition text-base"
            >
              开始阅读练习
            </button>
            <Link
              to={withExamParam('/reading')}
              className="px-7 py-3.5 text-white font-bold rounded-lg border border-white/30 hover:bg-white/10 transition text-base"
            >
              查看真题列表
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#12132f] text-gray-400 py-10">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-lg">火星</span>
            <span className="font-extrabold text-[var(--hl)] text-lg">四六级</span>
            <span className="text-gray-500 text-sm ml-1">备考平台</span>
          </div>
          <div className="text-sm text-gray-500 text-center sm:text-right">
            © 2026 Mars CET · 仅供个人学习使用 · 真题内容版权归原作者所有
          </div>
        </div>
      </footer>
    </div>
  )
}
