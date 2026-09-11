import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: '首页', href: '/dashboard' },
  { label: '错词本', href: '/wrong-book' },
]

export default function AppBar() {
  const { pathname } = useLocation()

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-bold">W</span>
          </div>
          <span className="font-bold text-gray-900 text-base tracking-tight">单词超人</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                pathname === l.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: avatar */}
        <div className="flex items-center gap-3">
          <Link
            to="/dictation"
            className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            开始练习
          </Link>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-sm font-bold cursor-pointer hover:bg-blue-200 transition-colors">
            王
          </div>
        </div>
      </div>
    </header>
  )
}
