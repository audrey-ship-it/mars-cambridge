import { useSearchParams } from 'react-router-dom'
import { readingSets } from '../data/readingSets.js'
import { readingSets6 } from '../data/readingSets6.js'
import { examVars } from '../utils/examTheme.js'
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js'
import { ListHeader, SetGroups } from '../components/ExamList.jsx'

export default function ReadingList() {
  const [params, setParams] = useSearchParams()
  const isCET6 = resolveExamLevel(params) === 'cet6'
  const sets = isCET6 ? readingSets6 : readingSets
  const query = isCET6 ? '?exam=cet6' : ''

  const items = sets.map((set) => ({
    id: set.id,
    year: set.meta.year,
    month: set.meta.month,
    set: set.meta.set,
    to: `/reading/${set.id}${query}`,
    verified: set.meta.verified,
    pendingText: '待核对',
  }))

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-5 lg:px-8 py-10" style={examVars(isCET6 ? 'cet6' : 'cet4')}>
      <ListHeader
        title={`${isCET6 ? 'CET-6' : 'CET-4'} 阅读理解`}
        subtitle="选词填空 / 长篇阅读 / 仔细阅读 · 按考试时间倒序"
        isCet6={isCET6}
        onLevelChange={(code) => {
          setExamLevel(code)
          setParams(code === 'cet6' ? { exam: 'cet6' } : { exam: 'cet4' })
        }}
      />

      {sets.length === 0 || !sets[0].sections.banked.passage ? (
        <div className="rounded-xl bg-white border border-dashed border-gray-200 p-6 text-sm text-gray-500">
          题库尚未录入。用 <code className="bg-gray-100 rounded px-1">npm run convert:docx</code>{' '}
          转换真题 docx 后生成数据。
        </div>
      ) : (
        <SetGroups items={items} />
      )}
    </div>
  )
}
