import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { GRAMMAR_GROUPS, GRAMMAR_POINTS, isGrammarUnitReady } from './CambridgeGrammar'

export default function CambridgeGrammarCategory() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })
  const group = GRAMMAR_GROUPS.find(item => item.id === category)

  if (!group) {
    navigate('/cambridge/grammar', { replace: true })
    return null
  }

  const allUnits = GRAMMAR_POINTS.flatMap(point => point.units)
  const units = group.unitNums.map(unitNum => allUnits.find(unit => unit.n === unitNum)).filter(Boolean)
  const available = units.filter(isGrammarUnitReady).length

  return (
    <CambridgeLayout activeModule="grammar" level={level} setLevel={setLevel}>
      <nav className="w-full border-b border-gray-100 bg-white px-6 py-4 flex items-center gap-3 text-sm" aria-label="语法学习路径">
          <button onClick={() => navigate('/cambridge/grammar')}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 font-extrabold text-[#735500] hover:bg-[#fbe9ad] transition-colors">
            <span aria-hidden="true">←</span>我的语法中心
          </button>
          <span className="text-gray-300" aria-hidden="true">›</span>
          <span className="font-extrabold text-gray-700">{group.title}</span>
      </nav>
      <div className="max-w-6xl mx-auto px-6 lg:px-9 py-6">

        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">KET GRAMMAR CATEGORY</div>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-950">{group.title}</h1>
            <p className="mt-2 text-base text-gray-500">{group.desc}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-500">
            <strong className="mr-1 text-xl text-gray-950">{units.length}</strong>单元
            <span className="mx-2 text-gray-300">·</span>
            <strong className="mr-1 text-xl text-emerald-700">{available}</strong>已可练
          </div>
        </div>

        <div className="mt-7 space-y-6">
          <section className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-sm font-extrabold text-white">{group.icon}</span>
                <div>
                  <h2 className="text-xl font-extrabold text-gray-950">{group.title}</h2>
                  <p className="text-sm text-gray-400">{units.length} 个语法单元</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {units.map(unit => {
                  const ready = isGrammarUnitReady(unit)
                  return (
                  <button key={unit.n} onClick={() => ready && navigate(`/cambridge/grammar/${unit.n}`)} disabled={!ready}
                    className={`min-h-[112px] rounded-2xl border p-4 text-left transition-all ${ready ? 'border-emerald-200 bg-emerald-50/40 hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-sm' : 'border-gray-100 bg-gray-50 cursor-default'}`}>
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-extrabold text-gray-400">U{unit.n}</span>
                      <span className={`rounded-full px-2 py-1 text-[10px] font-extrabold ${ready ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-400'}`}>{ready ? '可学习' : '待完善'}</span>
                    </div>
                    <h3 className={`mt-3 text-base font-extrabold leading-snug ${ready ? 'text-gray-950' : 'text-gray-400'}`}>{unit.title}</h3>
                    {ready && <div className="mt-3 text-sm font-extrabold text-emerald-700">开始学习 →</div>}
                  </button>
                  )
                })}
              </div>
          </section>
        </div>
      </div>
    </CambridgeLayout>
  )
}
