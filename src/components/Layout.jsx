import { useSearchParams } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import { examVars } from '../utils/examTheme.js';
import { getExamLevel } from '../utils/examLevel.js';

/* 全局布局：桌面端左侧固定导航（内容区左移让位），窄屏顶部导航条。
 * 根元素注入当前级别的主题变量，侧边栏据此显示黄色（CET-4）/ 薄荷青绿（CET-6）标记。 */
export default function Layout({ children }) {
  const [params] = useSearchParams();
  const param = params.get('exam');
  const level = param === 'cet6' || param === 'cet4' ? param : getExamLevel();
  return (
    <div className="min-h-screen bg-gray-50" style={examVars(level)}>
      <Sidebar />
      <div className="md:ml-44">
        {children}
      </div>
    </div>
  );
}
