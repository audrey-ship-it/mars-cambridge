import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LOG_EVENT, dayOf, loadLog } from '../utils/practiceLog.js';
import { withExamParam } from '../utils/examLevel.js';
import Logo from './Logo.jsx';
import Icon from './Icons.jsx';

/* 左侧导航条目：深蓝底 + 线条图标，当前项左侧带点缀色标记（CET-4 黄 / CET-6 薄荷青绿） */
const ITEMS = [
  { to: '/', label: '首页', icon: 'home', end: true },
  { to: '/reading', label: '阅读', icon: 'reading' },
  { to: '/listening', label: '听力', icon: 'listening' },
  { to: '/translation', label: '翻译', icon: 'translation' },
  { to: '/writing', label: '写作', icon: 'writing' },
  { to: '/grammar', label: '语法', icon: 'grammar' },
  { to: '/words', label: '单词', icon: 'words' },
  { to: '/mock', label: '模考', icon: 'mock' },
];

/* 个人入口：与练习入口区分，使用点缀色（CET-4 黄 / CET-6 薄荷青绿） */
const ME = { to: '/me', label: '学习记录', icon: 'me' };

// 今天是否已有练习记录：有则在入口右侧亮一个点缀色小点（没练习时不显示任何提示）
function usePracticedToday() {
  const [yes, setYes] = useState(() => loadLog().some((e) => e.day === dayOf(Date.now())));
  useEffect(() => {
    const refresh = () => setYes(loadLog().some((e) => e.day === dayOf(Date.now())));
    window.addEventListener(LOG_EVENT, refresh);
    return () => window.removeEventListener(LOG_EVENT, refresh);
  }, []);
  return yes;
}

export default function Sidebar() {
  // 订阅路由变化，确保切换级别后导航链接立即带上最新的 exam 参数
  useLocation();
  const practiced = usePracticedToday();
  return (
    <>
      {/* 桌面端：固定左侧 */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[232px] flex-col bg-[var(--accent-deep)] px-4 py-6 z-40">
        <NavLink
          to="/"
          aria-label="Mars CET 首页"
          className="flex items-center gap-3 px-3 pb-6 mb-4 border-b border-white/10"
        >
          <Logo size={44} className="shrink-0" />
          <div className="leading-tight">
            <div className="text-white font-bold text-lg">Mars CET</div>
            <div className="text-[13px] tracking-[.16em] text-indigo-100/70">火星四六级</div>
          </div>
        </NavLink>
        <div className="px-3 pb-2.5 text-[13px] tracking-[.18em] text-indigo-100/50">学习</div>
        <nav className="flex-1 overflow-y-auto">
          {ITEMS.map((it) => (
            <NavLink
              key={it.to}
              to={withExamParam(it.to)}
              end={it.end}
              className={({ isActive }) =>
                `relative flex items-center gap-3.5 rounded-lg px-3 py-3 mb-1 text-[17px] font-semibold transition-colors ${
                  isActive ? 'bg-white/12 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r bg-[var(--hl)]" />
                  )}
                  <Icon name={it.icon} className={'w-5 h-5 ' + (isActive ? 'text-[var(--hl)]' : '')} />
                  {it.label}
                </>
              )}
            </NavLink>
          ))}
          <div className="my-2 mx-1.5 h-px bg-white/10" />
          <div className="px-3 pb-2 text-[13px] tracking-[.18em] text-indigo-100/50">个人</div>
          <NavLink
            to={withExamParam(ME.to)}
            className={({ isActive }) =>
              `relative flex items-center gap-3.5 rounded-lg px-3 py-3 mb-1 text-[17px] font-semibold text-[var(--hl)] transition-colors ${
                isActive ? 'bg-white/12' : 'hover:bg-white/10'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r bg-[var(--hl)]" />}
                <Icon name={ME.icon} className="w-5 h-5" />
                {ME.label}
                {practiced && <span className="ml-auto h-2 w-2 rounded-full bg-[var(--hl)]" aria-label="今天已练习" />}
              </>
            )}
          </NavLink>
        </nav>
        <div className="px-3 pt-3 text-[13px] text-indigo-100/50">进度保存在本机浏览器</div>
      </aside>

      {/* 窄屏：顶部横向图标条 */}
      <aside className="md:hidden sticky top-0 z-40 bg-[var(--accent-deep)]">
        <div className="flex items-center pl-3 pr-2 py-2">
        <div className="flex items-center gap-1 flex-1 min-w-0 overflow-x-auto">
          <NavLink to="/" aria-label="Mars CET 首页" className="shrink-0 mr-1">
            <Logo size={36} />
          </NavLink>
          {ITEMS.filter((it) => !it.end).map((it) => (
            <NavLink
              key={it.to}
              to={withExamParam(it.to)}
              className={({ isActive }) =>
                `shrink-0 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-white/12 text-white shadow-[inset_0_-3px_0_var(--hl)]' : 'text-white/70'
                }`
              }
            >
              <Icon name={it.icon} className="w-4 h-4" />
              {it.label}
            </NavLink>
          ))}
        </div>
          <span className="shrink-0 mx-1 h-5 w-px bg-white/20" />
          <NavLink
            to={withExamParam(ME.to)}
            className={({ isActive }) =>
              `shrink-0 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-[var(--hl)] transition-colors ${
                isActive ? 'bg-white/12 shadow-[inset_0_-3px_0_var(--hl)]' : ''
              }`
            }
          >
            <Icon name={ME.icon} className="w-4 h-4" />
            {ME.label}
            {practiced && <span className="h-1.5 w-1.5 rounded-full bg-[var(--hl)]" aria-label="今天已练习" />}
          </NavLink>
        </div>
      </aside>
    </>
  );
}
