import { NavLink, useLocation } from 'react-router-dom';
import { withExamParam } from '../utils/examLevel.js';

/* 左侧导航条目（CET-4 范围；样式参照 mars-cambridge 侧边栏：深绿底 + 黄色选中块） */
const ITEMS = [
  { to: '/', label: '首页', icon: '🏠', end: true },
  { to: '/reading', label: '阅读', icon: '📄' },
  { to: '/listening', label: '听力', icon: '🎧' },
  { to: '/translation', label: '翻译', icon: '🈶' },
  { to: '/writing', label: '写作', icon: '✍️' },
  { to: '/grammar', label: '语法', icon: '📐' },
  { to: '/words', label: '单词', icon: '📖' },
  { to: '/mock', label: '模考', icon: '📝' },
];

export default function Sidebar() {
  // 订阅路由变化，确保切换级别后导航链接立即带上最新的 exam 参数
  useLocation();
  return (
    <>
      {/* 桌面端：固定左侧 */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-44 flex-col items-center bg-[#064e3b] py-5 z-40">
        <NavLink to="/" className="w-16 h-16 rounded-2xl bg-amber-300 flex items-center justify-center text-3xl font-black text-[#064e3b] hover:bg-amber-200 transition">
          M
        </NavLink>
        <nav className="flex-1 flex flex-col items-center justify-center gap-1 w-full px-3 overflow-y-auto">
          {ITEMS.map((it) => (
            it.ready === false ? (
              <div key={it.to} className="w-full flex flex-col items-center gap-0.5 rounded-2xl px-3 py-2.5 text-emerald-100/30 cursor-not-allowed">
                <span className="text-xl leading-6">{it.icon}</span>
                <span className="text-sm font-bold">{it.label}</span>
              </div>
            ) : (
              <NavLink
                key={it.to}
                to={withExamParam(it.to)}
                end={it.end}
                className={({ isActive }) =>
                  `w-full flex flex-col items-center gap-0.5 rounded-2xl px-3 py-2.5 transition ${
                    isActive ? 'bg-amber-300 text-[#064e3b]' : 'text-emerald-100/80 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <span className="text-xl leading-6">{it.icon}</span>
                <span className="text-sm font-bold">{it.label}</span>
              </NavLink>
            )
          ))}
        </nav>
      </aside>

      {/* 窄屏：顶部横向图标条 */}
      <aside className="md:hidden sticky top-0 z-40 bg-[#064e3b]">
        <div className="flex items-center gap-1 px-3 py-2 overflow-x-auto">
          <NavLink to="/" className="shrink-0 w-9 h-9 rounded-xl bg-amber-300 flex items-center justify-center text-lg font-black text-[#064e3b]">
            M
          </NavLink>
          {ITEMS.filter((it) => !it.end).map((it) => (
            it.ready === false ? (
              <div key={it.to} className="shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold text-emerald-100/30 cursor-not-allowed">
                <span>{it.icon}</span>
                <span>{it.label}</span>
              </div>
            ) : (
              <NavLink
                key={it.to}
                to={withExamParam(it.to)}
                className={({ isActive }) =>
                  `shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold transition ${
                    isActive ? 'bg-amber-300 text-[#064e3b]' : 'text-emerald-100/80'
                  }`
                }
              >
                <span>{it.icon}</span>
                <span>{it.label}</span>
              </NavLink>
            )
          ))}
        </div>
      </aside>
    </>
  );
}
