import { Component } from 'react'

// 错误边界：渲染异常时显示错误卡片，避免整页白屏
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl border border-red-200 p-6 max-w-md w-full">
            <div className="text-red-600 font-bold text-lg mb-2">页面出错了</div>
            <div className="text-sm text-gray-600 mb-4 break-all">
              {String(this.state.error && this.state.error.message)}
            </div>
            <div className="flex gap-3">
              <button
                className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-bold"
                onClick={() => window.location.reload()}
              >
                刷新页面
              </button>
              <a
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-bold text-gray-600"
                href="#/"
              >
                返回首页
              </a>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
