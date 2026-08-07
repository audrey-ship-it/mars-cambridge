import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-bold">W</span>
              </div>
              <span className="font-semibold text-white text-base">单词超人</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI 单词听写 + 默写 + 错词循环复习平台，帮助英语学习者高效记忆单词。
            </p>
          </div>

          {/* links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">产品</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">核心功能</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">定价方案</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">如何使用</a></li>
              <li><Link to="/dictation" className="hover:text-white transition-colors">开始练习</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">词库</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">KET 词库</a></li>
              <li><a href="#" className="hover:text-white transition-colors">雅思高频词</a></li>
              <li><a href="#" className="hover:text-white transition-colors">托福核心词</a></li>
              <li><a href="#" className="hover:text-white transition-colors">四六级词汇</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">支持</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#faq" className="hover:text-white transition-colors">常见问题</a></li>
              <li><Link to="/login" className="hover:text-white transition-colors">登录 / 注册</Link></li>
              <li><a href="mailto:hello@word-superman.com" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2025 单词超人. 保留所有权利。</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-400 transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
