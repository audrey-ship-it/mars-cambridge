import { Link, useSearchParams } from 'react-router-dom'
import { readingSets } from '../data/readingSets.js'
import { readingSets6 } from '../data/readingSets6.js'
import { examVars } from '../utils/examTheme.js'
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js'

export default function ReadingList() {
  const [params, setParams] = useSearchParams()
  const isCET6 = resolveExamLevel(params) === 'cet6'
  const sets = isCET6 ? readingSets6 : readingSets
  const query = isCET6 ? '?exam=cet6' : ''

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-8" style={examVars(isCET6 ? 'cet6' : 'cet4')}>
      <header className="mb-6 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-xl font-bold">
              {isCET6 ? 'CET-6' : 'CET-4'} 阅读理解 · 专项练习
            </h1>
            <div className="flex gap-1.5">
              {[{ code: 'cet4', label: 'CET-4' }, { code: 'cet6', label: 'CET-6' }].map((e) => {
                const active = (e.code === 'cet6') === isCET6
                return (
                  <button
                    key={e.code}
                    onClick={() => {
                      setExamLevel(e.code)
                      setParams(e.code === 'cet6' ? { exam: 'cet6' } : { exam: 'cet4' })
                    }}
                    className={
                      'px-3 py-1 rounded-full text-xs font-bold border transition-colors ' +
                      (active
                        ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                        : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300')
                    }
                  >
                    {e.label}
                  </button>
                )
              })}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">选词填空 / 长篇阅读 / 仔细阅读</p>
        </div>
        <Link to="/" className="text-sm text-[var(--accent)] font-bold">
          返回首页
        </Link>
      </header>

      {sets.length === 0 || !sets[0].sections.banked.passage ? (
        <div className="rounded-2xl bg-white border border-dashed border-gray-200 p-6 text-sm text-gray-500">
          题库尚未录入。用 <code className="bg-gray-100 rounded px-1">npm run convert:docx</code>{' '}
          转换真题 docx 后生成数据。
        </div>
      ) : (
        <div className="grid gap-3">
          {sets.map((set) => (
            <Link
              key={set.id}
              to={`/reading/${set.id}${query}`}
              className="block rounded-2xl bg-white border border-gray-200 p-4 hover:border-[var(--accent)] hover:shadow-sm transition"
            >
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  {set.meta.year}年{set.meta.month}月 第{set.meta.set}套
                </div>
                {set.meta.verified ? (
                  <span className="text-xs bg-green-50 text-green-700 rounded-full px-2 py-0.5">
                    已核对
                  </span>
                ) : (
                  <span className="text-xs bg-amber-50 text-amber-700 rounded-full px-2 py-0.5">
                    待核对
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
