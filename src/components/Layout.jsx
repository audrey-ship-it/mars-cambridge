import Sidebar from './Sidebar.jsx';

/* 全局布局：桌面端左侧固定导航（内容区左移让位），窄屏顶部导航条 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="md:ml-44">
        {children}
      </div>
    </div>
  );
}
