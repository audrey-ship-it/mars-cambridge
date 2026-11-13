// 练习日志：每次练习（离开页面时）记一条，用于「本次总结」「今日累计」「连续打卡」。
// 纯本地存储（localStorage），不跨设备同步。
import { useEffect, useRef } from 'react'
import { loadJSON, saveJSON } from './storage.js'

const KEY = 'mars_practice_log_v1'
const MAX_ENTRIES = 3000
export const LOG_EVENT = 'mars:practice-logged'

export const KIND_LABEL = {
  reading: '阅读',
  listening: '听力',
  grammar: '语法',
  translation: '翻译',
  writing: '写作',
  mock: '模考',
}

export function dayOf(ts) {
  const d = new Date(ts)
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

export function loadLog() {
  const v = loadJSON(KEY, [])
  return Array.isArray(v) ? v : []
}

export function addEntry(entry) {
  const list = loadLog()
  list.push(entry)
  saveJSON(KEY, list.slice(-MAX_ENTRIES))
  try {
    window.dispatchEvent(new CustomEvent(LOG_EVENT, { detail: entry }))
  } catch {
    // ignore
  }
}

// 连续打卡天数：从今天（今天没练则从昨天）起，往前数连续有练习的天数
export function streakDays(log = loadLog()) {
  const days = new Set(log.map((e) => e.day))
  const d = new Date()
  if (!days.has(dayOf(d.getTime()))) d.setDate(d.getDate() - 1)
  let n = 0
  while (days.has(dayOf(d.getTime()))) {
    n += 1
    d.setDate(d.getDate() - 1)
  }
  return n
}

export function levelOfSet(setId) {
  return String(setId).startsWith('cet6') ? 'cet6' : 'cet4'
}

// cet6-2021-12-s3 → 2021年12月 第3套
export function titleOfSet(setId) {
  const m = String(setId).match(/(\d{4})-(\d{2})-s(\d)/)
  return m ? `${m[1]}年${Number(m[2])}月 第${m[3]}套` : ''
}

export function fmtDuration(sec) {
  if (sec < 60) return `${sec} 秒`
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return s >= 30 && m < 10 ? `${m + 1} 分钟` : `${m} 分钟`
}

/* 练习会话：挂在练习页组件里。
 * getStats() 返回 { answered, correct?, words? }：当前整套的已答题数 / 答对题数（无判分的题型不传 correct）。
 * 记录的是「本次会话新增」的题数；页面可见时才计时（切走或锁屏暂停）。
 * 离开页面（组件卸载）或关闭标签页时写一条日志；没新增作答则不记。 */
export function usePracticeSession({ kind, setId, level, title, getStats }) {
  const statsRef = useRef(getStats)
  const metaRef = useRef({ kind, setId, level, title })
  // 每次渲染后同步最新值（在 effect 中写 ref，满足 react-hooks 规则）
  useEffect(() => {
    statsRef.current = getStats
    metaRef.current = { kind, setId, level, title }
  })

  useEffect(() => {
    let seconds = 0
    let base = safeStats(statsRef.current)
    // 页面可见，或音频正在播放（听力锁屏/切走后继续听）时都计入学习时间
    const audioPlaying = () => Array.from(document.querySelectorAll('audio')).some((a) => !a.paused && !a.ended)
    const tick = setInterval(() => {
      if (document.visibilityState === 'visible' || audioPlaying()) seconds += 1
    }, 1000)

    const flush = () => {
      const cur = safeStats(statsRef.current)
      const delta = cur.answered - base.answered
      // 写作/翻译：answered 传的是词数，新增 1 词以上记为「练了 1 篇」
      const isText = metaRef.current.kind === 'writing' || metaRef.current.kind === 'translation'
      const answered = isText ? 1 : delta
      if (delta >= 1) {
        const m = metaRef.current
        const hasCorrect = cur.correct != null && base.correct != null
        const ts = Date.now()
        addEntry({
          ts,
          day: dayOf(ts),
          kind: m.kind,
          setId: m.setId,
          level: m.level,
          title: m.title || '',
          answered,
          correct: hasCorrect ? Math.max(0, cur.correct - base.correct) : null,
          words: cur.words ?? null,
          seconds,
        })
      }
      base = cur
      seconds = 0
    }
    const onHide = () => {
      if (document.visibilityState === 'hidden' && !audioPlaying()) flush()
    }
    document.addEventListener('visibilitychange', onHide)
    window.addEventListener('pagehide', flush)
    return () => {
      clearInterval(tick)
      document.removeEventListener('visibilitychange', onHide)
      window.removeEventListener('pagehide', flush)
      flush()
    }
  }, [kind, setId])
}

function safeStats(fn) {
  try {
    const s = fn() || {}
    return { answered: s.answered || 0, correct: s.correct ?? null, words: s.words ?? null }
  } catch {
    return { answered: 0, correct: null, words: null }
  }
}
