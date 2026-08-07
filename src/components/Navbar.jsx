import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allLibraries } from '../data/libraries'

// 从 libraries 数据中按名称模糊查找（支持 "高中 / 高考" → 优先找 "高考"）
function findLibrary(itemName) {
  const parts = itemName.split(' / ').map(s => s.trim())
  for (const part of parts.reverse()) { // 优先后半段（如"高考"）
    const found = allLibraries.find(l => l.name === part)
    if (found) return found
  }
  return allLibraries.find(l => l.name === parts[0]) ?? null
}

/* ── 学习阶段 数据 ── */
const stageGroups = [
  {
    group: '基础学段',
    color: 'text-teal-600',
    items: [
      { name: '小学', sub: '人教版 1-6 年级', words: '1,500词', desc: '小学生 · 夯实基础' },
      { name: '初中 / 中考', sub: '人教版 · 外研版', words: '2,000词', desc: '初中生 · 中考英语必备' },
    ],
  },
  {
    group: '高中阶段',
    color: 'text-blue-600',
    items: [
      { name: '高中 / 高考', sub: '人教版必修 + 选修', words: '3,500词', desc: '高中生 · 高考英语必备' },
      { name: 'KET', sub: 'A2 Key', words: '1,300词', desc: '零基础入门，剑桥认证', free: true },
      { name: 'PET', sub: 'B1 Preliminary', words: '3,500词', desc: '衔接高中，剑桥 B1' },
    ],
  },
  {
    group: '大学阶段',
    color: 'text-indigo-600',
    items: [
      { name: '四级', sub: 'CET-4', words: '4,500词', desc: '大学英语四级必过' },
      { name: '六级', sub: 'CET-6', words: '6,000词', desc: '六级冲刺，拉开差距' },
      { name: 'FCE', sub: 'B2 First', words: '6,000词', desc: '出国留学，剑桥 B2' },
    ],
  },
  {
    group: '研究生 / 高端留学',
    color: 'text-purple-600',
    items: [
      { name: '考研', sub: '研究生入学', words: '5,500词', desc: '考研英语高频核心词' },
      { name: 'CAE', sub: 'C1 Advanced', words: '10,000词', desc: '顶尖学术，剑桥 C1' },
      { name: 'CPE', sub: 'C2 Proficiency', words: '12,000词', desc: '母语级别，剑桥 C2' },
      { name: 'SAT/GRE', sub: 'SAT · GRE', words: '10,000词', desc: '高端留学，学术精英' },
    ],
  },
]

/* ── 备考目标 数据 ── */
const examGroups = [
  {
    group: '剑桥英语系列',
    color: 'text-cyan-600',
    items: [
      { name: 'KET', sub: 'A2 Key', words: '1,300词', desc: '入门，初中生必备', free: true },
      { name: 'PET', sub: 'B1 Preliminary', words: '3,500词', desc: '初高中，出国留学' },
      { name: 'FCE', sub: 'B2 First', words: '6,000词', desc: '高中出国，剑桥 B2' },
      { name: 'CAE', sub: 'C1 Advanced', words: '10,000词', desc: '顶尖学术，剑桥 C1' },
      { name: 'CPE', sub: 'C2 Proficiency', words: '12,000词', desc: '母语级别，剑桥 C2' },
    ],
  },
  {
    group: '国内考试',
    color: 'text-blue-600',
    items: [
      { name: '中考', sub: '初中英语', words: '2,000词', desc: '初中生 · 中考英语必备' },
      { name: '高考', sub: '高中英语', words: '3,500词', desc: '高中生 · 高考英语必备' },
      { name: '四级', sub: 'CET-4', words: '4,500词', desc: '大学英语四级必过' },
      { name: '六级', sub: 'CET-6', words: '6,000词', desc: '六级冲刺，拉开差距' },
      { name: '考研', sub: '研究生入学', words: '5,500词', desc: '考研英语高频核心词' },
    ],
  },
  {
    group: '出国留学',
    color: 'text-orange-600',
    items: [
      { name: '雅思', sub: 'IELTS', words: '8,000词', desc: '留学移民雅思备考' },
      { name: '托福', sub: 'TOEFL', words: '8,000词', desc: '留美申请托福冲分' },
      { name: 'SAT/GRE', sub: 'SAT · GRE', words: '10,000词', desc: '高端留学，学术精英' },
    ],
  },
]

/* ── 普通导航链接 ── */
const plainLinks = [
  { label: '核心功能', href: '#features' },
  { label: '学习计划', href: '#plan' },
  { label: '定价方案', href: '#pricing' },
  { label: '常见问题', href: '#faq' },
]

/* ── 单个词库行 ── */
function LibItem({ item, onClose }) {
  const navigate = useNavigate()
  function handleClick() {
    onClose?.()
    const lib = findLibrary(item.name)
    navigate('/plan', { state: { exam: lib ?? {
      name: item.name, sub: item.sub,
      words: parseInt(item.words.replace(/[^0-9]/g, '')),
      desc: item.desc, emoji: '📚', color: 'blue',
    }}})
  }
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors w-full text-left group"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">{item.name}</span>
          <span className="text-xs text-gray-400">{item.sub}</span>
          {item.free && (
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full leading-none">
              免费
            </span>
          )}
        </div>
        <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
      </div>
      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
        {item.words}
      </span>
    </button>
  )
}

/* ── 下拉面板 ── */
function DropdownPanel({ groups, cols = 2, onClose }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-4 grid gap-x-6 gap-y-1 min-w-max`}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {groups.map(g => (
        <div key={g.group}>
          <div className={`text-[11px] font-bold uppercase tracking-wider px-3 mb-1 ${g.color}`}>
            {g.group}
          </div>
          {g.items.map(item => <LibItem key={item.name + item.sub} item={item} onClose={onClose} />)}
        </div>
      ))}
    </div>
  )
}

/* ── 带下拉的导航项 ── */
function DropdownLink({ label, groups, cols }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg transition-all ${
          open ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <DropdownPanel groups={groups} cols={cols} onClose={() => setOpen(false)} />}
    </div>
  )
}

/* ── 主组件 ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-bold">W</span>
          </div>
          <span className="font-bold text-gray-900 text-base tracking-tight">单词超人</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <DropdownLink label="备考目标" groups={examGroups} cols={3} />
          {plainLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/login"
            className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
          >
            登录
          </Link>
          <Link
            to="/login"
            className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            免费注册
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {/* 备考目标 */}
          <div className="px-3 py-1 text-xs font-bold text-blue-600 uppercase tracking-wider">备考目标</div>
          {examGroups.map(g => (
            <div key={g.group} className="mb-1">
              <div className={`px-3 text-[10px] font-bold uppercase tracking-wider mb-0.5 ${g.color}`}>{g.group}</div>
              {g.items.map(item => (
                <LibItem key={item.name + item.sub} item={item} onClose={() => setMenuOpen(false)} />
              ))}
            </div>
          ))}
          <div className="border-t border-gray-100 mt-2 pt-2 flex gap-2">
            {plainLinks.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            <Link to="/login" className="flex-1 py-2 text-center text-sm text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => setMenuOpen(false)}>登录</Link>
            <Link to="/login" className="flex-1 py-2 text-center text-sm bg-blue-600 text-white rounded-lg font-medium" onClick={() => setMenuOpen(false)}>免费注册</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
