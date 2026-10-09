import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CambridgeLayout } from './CambridgeApp'
import { GRAMMAR_GROUPS, GRAMMAR_POINTS, GrammarTabBar } from './CambridgeGrammar'
import { isGrammarUnitReady, isPetGrammarUnitReady, isFceGrammarUnitReady } from '../utils/grammarUnitReady'
import { PET_GRAMMAR_GROUPS, PET_GRAMMAR_POINTS } from '../data/petGrammarSets'
import { FCE_GRAMMAR_GROUPS, FCE_GRAMMAR_POINTS } from '../data/fceGrammarSets'
import { grammarUnitStatus, readGrammarProgress } from '../utils/grammarProgress'

const THEMES = {
  KET: {
    tag: 'KET GRAMMAR CATEGORY', tagClass: 'text-emerald-700',
    iconBox: 'bg-emerald-600', countAccent: 'text-emerald-700',
    complete: 'border-emerald-300 bg-emerald-50 hover:border-emerald-500',
    ready: 'hover:border-emerald-300',
    badgeDone: 'bg-emerald-600', action: 'text-emerald-700', continueAction: 'text-amber-800',
  },
  PET: {
    tag: 'PET GRAMMAR CATEGORY', tagClass: 'text-violet-700',
    iconBox: 'bg-violet-600', countAccent: 'text-violet-700',
    complete: 'border-violet-300 bg-violet-50 hover:border-violet-500',
    ready: 'hover:border-violet-300',
    badgeDone: 'bg-violet-600', action: 'text-violet-700', continueAction: 'text-amber-800',
  },
  FCE: {
    tag: 'FCE GRAMMAR CATEGORY', tagClass: 'text-sky-700',
    iconBox: 'bg-sky-600', countAccent: 'text-sky-700',
    complete: 'border-sky-300 bg-sky-50 hover:border-sky-500',
    ready: 'hover:border-sky-300',
    badgeDone: 'bg-sky-600', action: 'text-sky-700', continueAction: 'text-amber-800',
  },
}

export default function CambridgeGrammarCategory() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [level, setLevel] = useState(() => { try { return localStorage.getItem('cambridge_level') || 'KET' } catch { return 'KET' } })

  const isFce = level === 'FCE'
  const isPet = level === 'PET'
  const theme = THEMES[level] || THEMES.KET
  const groups = isFce ? FCE_GRAMMAR_GROUPS : isPet ? PET_GRAMMAR_GROUPS : GRAMMAR_GROUPS
  const points = isFce ? FCE_GRAMMAR_POINTS : isPet ? PET_GRAMMAR_POINTS : GRAMMAR_POINTS
  const readyCheck = isFce ? isFceGrammarUnitReady : isPet ? isPetGrammarUnitReady : isGrammarUnitReady
  const group = groups.find(item => item.id === category)

  if (!group) {
    navigate('/cambridge/grammar', { replace: true })
    return null
  }

  const allUnits = points.flatMap(point => point.units)
  const units = group.unitNums.map(unitNum => allUnits.find(unit => unit.n === unitNum)).filter(Boolean)
  const available = units.filter(readyCheck).length
  const progress = readGrammarProgress(level)
  const unitPath = unitNum => (isFce ? `/cambridge/grammar/f${unitNum}` : isPet ? `/cambridge/grammar/p${unitNum}` : `/cambridge/grammar/${unitNum}`)

  return (
    <CambridgeLayout activeModule="grammar" level={level} setLevel={setLevel}>
      <GrammarTabBar active={group.id} level={level} />
      <div className="max-w-6xl mx-auto px-6 lg:px-9 py-6">

        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className={`text-[11px] font-extrabold tracking-[.18em] ${theme.tagClass}`}>{theme.tag}</div>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-950">{group.title}</h1>
            <p className="mt-2 text-base text-gray-500">{group.desc}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-500">
            <strong className="mr-1 text-xl text-gray-950">{units.length}</strong>单元
            <span className="mx-2 text-gray-300">·</span>
            <strong className={`mr-1 text-xl ${theme.countAccent}`}>{available}</strong>已可练
          </div>
        </div>

        <div className="mt-7 space-y-6">
          <section className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-xl ${theme.iconBox} text-sm font-extrabold text-white`}>{group.icon}</span>
                <div>
                  <h2 className="text-xl font-extrabold text-gray-950">{group.title}</h2>
                  <p className="text-sm text-gray-400">{units.length} 个语法单元</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {units.map(unit => {
                  const ready = readyCheck(unit)
                  const status = grammarUnitStatus(progress, unit.n)
                  const cardStyle = status.complete
                    ? theme.complete
                    : status.started
                      ? 'border-amber-300 bg-amber-50/70 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-sm'
                      : ready ? `border-gray-200 bg-white hover:-translate-y-0.5 ${theme.ready} hover:shadow-sm` : 'border-gray-100 bg-gray-50 cursor-default'
                  return (
                  <button key={unit.n} onClick={() => ready && navigate(unitPath(unit.n))} disabled={!ready}
                    className={`min-h-[112px] rounded-2xl border p-4 text-left transition-all ${cardStyle}`}>
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-extrabold text-gray-400">U{unit.n}</span>
                      {status.complete ? <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold text-white ${theme.badgeDone}`}>✓ 已完成</span>
                        : status.started ? <span className="rounded-full bg-amber-200 px-2.5 py-1 text-[10px] font-extrabold text-amber-900">进行中 · {status.completedCount}/3</span>
                          : !ready ? <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-extrabold text-gray-400">待完善</span> : null}
                    </div>
                    <h3 className={`mt-3 text-base font-extrabold leading-snug ${ready ? 'text-gray-950' : 'text-gray-400'}`}>{unit.title}</h3>
                    {ready && <div className={`mt-3 text-sm font-extrabold ${status.started && !status.complete ? theme.continueAction : theme.action}`}>{status.complete ? '复习 →' : status.started ? '继续学习 →' : '开始学习 →'}</div>}
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
