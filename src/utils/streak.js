/* ── 打卡 & 成就系统 ── */

export const BADGES = [
  {
    id: 'first_day',
    icon: '🌱',
    label: '第一步',
    desc: '完成第一次练习',
    condition: (streak) => streak.totalDays >= 1,
  },
  {
    id: 'streak_3',
    icon: '🔥',
    label: '三日连续',
    desc: '连续打卡 3 天',
    condition: (streak) => streak.streak >= 3,
  },
  {
    id: 'streak_7',
    icon: '⚡',
    label: '周冠军',
    desc: '连续打卡 7 天',
    condition: (streak) => streak.streak >= 7,
  },
  {
    id: 'streak_30',
    icon: '💎',
    label: '月度坚持',
    desc: '连续打卡 30 天',
    condition: (streak) => streak.streak >= 30,
  },
  {
    id: 'words_100',
    icon: '📖',
    label: '百词达人',
    desc: '累计练习 100 个词',
    condition: (streak, progress) => (progress.wordIndex || 0) >= 100,
  },
  {
    id: 'words_500',
    icon: '📚',
    label: '词汇新星',
    desc: '累计练习 500 个词',
    condition: (streak, progress) => (progress.wordIndex || 0) >= 500,
  },
  {
    id: 'words_1000',
    icon: '🏆',
    label: '千词大师',
    desc: '累计练习 1000 个词',
    condition: (streak, progress) => (progress.wordIndex || 0) >= 1000,
  },
  {
    id: 'words_5000',
    icon: '👑',
    label: '词汇霸主',
    desc: '累计练习 5000 个词',
    condition: (streak, progress) => (progress.wordIndex || 0) >= 5000,
  },
  {
    id: 'band6_done',
    icon: '🎓',
    label: '6分达标',
    desc: '刷完全部 6 分核心词',
    condition: (streak, progress) => (progress.wordIndex || 0) >= 2167,
  },
  {
    id: 'perfect',
    icon: '🎯',
    label: '完美主义',
    desc: '单次练习全部答对',
    condition: (streak, progress, extra) => extra?.perfect === true,
  },
]

/* ── 读取打卡数据 ── */
export function getStreak() {
  try {
    return JSON.parse(localStorage.getItem('ws_streak') || '{}')
  } catch {
    return {}
  }
}

/* ── 每次完成练习时调用 ── */
// extra: { perfect: bool } — 用于触发完美主义徽章
export function updateStreak(extra = {}) {
  const today     = new Date().toDateString()
  const yesterday = new Date(Date.now() - 86400000).toDateString()
  const data      = getStreak()

  // 今天已经打卡过，不重复计算（但还是检查徽章）
  let newStreak    = data.streak    || 0
  let totalDays    = data.totalDays || 0
  let longestStreak = data.longestStreak || 0

  if (data.lastCheckIn !== today) {
    // 是否连续
    newStreak  = data.lastCheckIn === yesterday ? newStreak + 1 : 1
    totalDays  = totalDays + 1
    longestStreak = Math.max(newStreak, longestStreak)
  }

  const progress = (() => {
    try { return JSON.parse(localStorage.getItem('ws_progress') || '{}') } catch { return {} }
  })()

  const updated = {
    lastCheckIn: today,
    streak: newStreak,
    longestStreak,
    totalDays,
    badges: [...(data.badges || [])],
  }

  // 检查新解锁的徽章
  const newlyUnlocked = []
  for (const badge of BADGES) {
    if (!updated.badges.includes(badge.id) && badge.condition(updated, progress, extra)) {
      updated.badges.push(badge.id)
      newlyUnlocked.push(badge)
    }
  }

  localStorage.setItem('ws_streak', JSON.stringify(updated))
  return { streak: updated, newlyUnlocked }
}

/* ── 是否今天已打卡 ── */
export function checkedInToday() {
  const data = getStreak()
  return data.lastCheckIn === new Date().toDateString()
}

/* ── 是否断签（昨天没打卡，今天也没打卡）── */
export function missedYesterday() {
  const data = getStreak()
  if (!data.lastCheckIn) return false
  const yesterday = new Date(Date.now() - 86400000).toDateString()
  const today     = new Date().toDateString()
  return data.lastCheckIn !== yesterday && data.lastCheckIn !== today && (data.streak || 0) > 0
}
