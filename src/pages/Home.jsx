import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../components/Logo.jsx'
import { examVars, examTheme } from '../utils/examTheme.js'
import { getExamLevel, withExamParam } from '../utils/examLevel.js'

/* ── 配色：深蓝主色 + 点缀色（CET-4 黄 / CET-6 薄荷青绿），由 examTheme 注入 CSS 变量 ── */

/* 顶部导航（target 为页内区块 id；HashRouter 下不能用 href="#id" 锚点，会破坏路由，改用 JS 滚动） */
const NAV_LINKS = [
  { label: '首页', target: 'top' },
  { label: '真题题库', target: 'modules' },
  { label: '专项模块', target: 'modules' },
  { label: '备考策略', target: 'method' },
]

/* 平滑滚动到页内区块（scroll-mt 补偿固定导航高度） */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* 专项模块 */
const MODULES = [
  { icon: '📄', title: '阅读理解', desc: '选词填空 · 长篇阅读 · 仔细阅读，真题逐套训练', tags: ['选词填空', '段落匹配', '四选一'], color: 'emerald', link: '/reading', ready: true },
  { icon: '🎧', title: '听力理解', desc: '短篇新闻 · 长对话 · 听力篇章，音频原文对照练习', tags: ['新闻', '长对话', '篇章'], color: 'cyan', link: '/listening', ready: true },
  { icon: '🈶', title: '翻译', desc: '汉译英段落翻译，参考译文与译点精析，草稿自动保存', tags: ['汉译英', '段落', '参考译文'], color: 'teal', link: '/translation', ready: true },
  { icon: '✍️', title: '写作', desc: '真题短文写作，审题思路与范文译文对照，实时字数统计', tags: ['范文对照', '草稿保存', '字数统计'], color: 'amber', link: '/writing', ready: true },
  { icon: '📐', title: '语法', desc: '选择/填空/改错三题型单元，错题自动记录循环练', tags: ['三题型', '错题本', '考点讲解'], color: 'blue', link: '/grammar', ready: true },
  { icon: '🔤', title: '单词', desc: '必默词汇按话题编排，阅读高频 + 全量词表，背记拼写逐词过关', tags: ['话题必默', '背记拼写', '错词本'], color: 'blue', link: '/words', ready: true },
  { icon: '📝', title: '模拟考试', desc: '按考试结构完整模考，计时与结果复盘', tags: ['整套模考', '计时', '复盘'], color: 'rose', link: '/mock', ready: true },
]

/* 所有模块卡片统一用主题色，不再每个模块一个颜色 */
const CARD = { icon: 'bg-[var(--accent-soft)] text-[var(--accent)]', tag: 'bg-[var(--accent-softer)] text-[var(--accent)]', border: 'border-gray-200' }

/* 社交证明头像（无真实用户，用中性占位） */
const AVATARS = ['🧑\u200d🎓', '👨\u200d🎓', '👩\u200d🎓']

function BrandMark() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <Logo size={44} />
      <div className="leading-tight">
        <div className="font-extrabold tracking-tight text-gray-900 text-[15px]">Mars CET</div>
        <div className="text-xs font-semibold tracking-[.18em] text-gray-400">火星四六级</div>
      </div>
    </Link>
  )
}

export default function Home() {
  const navigate = useNavigate()

  const exam = getExamLevel() === 'cet6' ? 'CET-6' : 'CET-4'
  const theme = examTheme(exam)

  return (
    <div id="top" className="min-h-screen bg-[#f7f8f5] text-[var(--accent-deep)] overflow-x-hidden" style={examVars(exam)}>

      {/* ═══ 顶部导航 ═══ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#f7f8f5]/85 backdrop-blur-xl border-b border-[#e3e8e2]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 h-[68px] flex items-center">
          <BrandMark />
          <nav className="hidden lg:flex ml-auto items-center gap-7 text-sm font-semibold text-gray-600">
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
          <div className="ml-auto lg:ml-5 flex items-center gap-3">
            <Link to={withExamParam('/reading')} className="hidden sm:inline text-sm font-semibold text-gray-500 hover:text-gray-800">浏览真题</Link>
            <button
              onClick={() => navigate(withExamParam('/reading'))}
              className="px-5 py-2.5 rounded-xl bg-[var(--accent-deep)] text-white text-sm font-bold hover:bg-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-[var(--hl)]" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h7v8l10-12h-7V2z"/></svg>
              免费试考
            </button>
          </div>
        </div>
      </header>

      {/* ═══ Hero（居中文案，占满首屏）═══ */}
      <section className="pt-[68px] min-h-screen flex items-center relative">
        {/* 首屏淡格子背景：向下渐隐 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(color-mix(in srgb, var(--accent-deep) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent-deep) 8%, transparent) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 40%, transparent 95%)',
            maskImage: 'linear-gradient(to bottom, #000 40%, transparent 95%)',
          }}
        />

        <div className="max-w-6xl mx-auto w-full px-6 lg:px-8 py-14 relative">
          {/* 上部：文案（居中） */}
          <div className="text-center max-w-3xl mx-auto">

          {/* 双色主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-sans text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.18] tracking-tight"
          >
            四六级真题库
            <br />
            <span
              className="text-[var(--accent-deep)] px-1 -mx-1"
              style={{ background: 'linear-gradient(transparent 60%, var(--hl) 60%, var(--hl) 90%, transparent 90%)', WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}
            >阅读·听力·翻译·写作</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto"
          >
            基于历年真题与 AI 诊断，逐题核对答案、按薄弱项针对练习，进度保存在本机浏览器。
          </motion.p>

          {/* 双 CTA（上下排列） */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col gap-3 items-center justify-center"
          >
            <button
              onClick={() => scrollToSection('modules')}
              className="w-full sm:w-[17rem] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[var(--accent-deep)] text-white font-bold text-base hover:bg-[var(--accent)] transition-colors shadow-lg"
            >
              <svg className="w-4 h-4 text-[var(--hl)]" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h7v8l10-12h-7V2z"/></svg>
              查看专项模块
            </button>
            <Link
              to="/mock"
              className="w-full sm:w-[17rem] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-[var(--accent-deep)] font-bold text-base border-2 border-gray-200 hover:border-gray-300 transition-colors"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
              浏览历年真题
            </Link>
          </motion.div>

          {/* 社交证明 */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex -space-x-2.5">
              {AVATARS.map((a, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white border-2 border-white shadow grid place-items-center text-base"
                  style={{ zIndex: AVATARS.length - i }}
                >
                  {a}
                </div>
              ))}
            </div>
            <p className="text-base text-gray-600">
              <span className="font-extrabold text-gray-900">98</span> 套真题已就绪 ·
              <span className="font-extrabold text-gray-900"> 2019–2026</span> · 进度本地保存
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* ═══ 专项模块 ═══ */}
      <section id="modules" className="py-20 bg-white border-t border-gray-100 scroll-mt-[68px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--accent-soft)] text-[var(--accent-deep)] text-sm font-bold px-3.5 py-1.5 rounded-full border border-[var(--accent-border)] mb-4">
              <span className="inline-block w-5 h-[3px] rounded-sm bg-[var(--hl)]" />
              专项训练模块
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">按题型逐项突破</h2>
            <p className="text-gray-600 text-lg max-w-lg mx-auto">每个模块独立完整，按薄弱项针对练习</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((mod, i) => {
              const c = CARD
              const inner = (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className={`bg-white rounded-2xl p-6 border ${c.border} hover:shadow-md transition-all h-full ${mod.link ? 'cursor-pointer hover:scale-[1.015]' : 'opacity-75'} group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl`}>
                      {mod.icon}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {mod.badge && (
                        <span className="text-[10px] font-bold bg-gradient-to-r from-violet-500 to-blue-500 text-white px-2 py-0.5 rounded-full">
                          {mod.badge}
                        </span>
                      )}
                      {mod.ready ? (
                        <span className="text-xs font-bold bg-[var(--hl)] text-[var(--accent-deep)] px-2.5 py-0.5 rounded-full">可用</span>
                      ) : (
                        <span className="text-xs font-bold bg-gray-200 text-gray-500 px-2.5 py-0.5 rounded-full">即将推出</span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-bold text-gray-900 mb-2">{mod.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-4">{mod.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.tags.map(tag => (
                      <span key={tag} className={`text-sm font-medium px-3 py-1 rounded-full ${c.tag}`}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              )
              const target = withExamParam(mod.link)
              return target
                ? <Link key={mod.title} to={target}>{inner}</Link>
                : <div key={mod.title}>{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* ═══ 备考策略 / CTA ═══ */}
      <section id="method" className="bg-[var(--accent-deep)] py-20 text-center relative overflow-hidden scroll-mt-[68px]">
        <div className="absolute inset-0 opacity-[.05]" style={{ backgroundImage: 'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="max-w-2xl mx-auto px-6 relative">
          <div className="text-xs font-extrabold tracking-[.2em] uppercase mb-3" style={{ color: theme.bannerText }}>Study Strategy</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">今天就开始备考</h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: theme.bannerTextFaint }}>
            从 2024 年 6 月第一套真题开始，逐题核对、即时评分，找到你的薄弱项。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(withExamParam('/reading'))}
              className="px-10 py-4 bg-[var(--hl)] text-[var(--accent-deep)] font-extrabold rounded-2xl hover:brightness-95 transition-all text-base shadow-lg"
            >
              开始阅读练习 →
            </button>
            <Link
              to={withExamParam('/reading')}
              className="px-8 py-4 bg-white/15 text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/25 transition-all text-base"
            >
              查看真题列表
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#12132f] text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
