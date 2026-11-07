// 全局考试级别偏好：选择 CET-6 后，通过侧边栏/首页入口进入其他模块时仍保持 CET-6，
// 只有显式点击 CET-4 按钮才切回 CET-4。
const STORAGE_KEY = 'mars_exam_level';

export function getExamLevel() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'cet6' ? 'cet6' : 'cet4';
  } catch {
    return 'cet4';
  }
}

export function setExamLevel(level) {
  try {
    localStorage.setItem(STORAGE_KEY, level === 'cet6' ? 'cet6' : 'cet4');
  } catch {
    /* 隐私模式下写不进去时忽略 */
  }
}

/* 路由参数优先并同步记忆；无参数时沿用上次选择 */
export function resolveExamLevel(searchParams) {
  const param = searchParams.get('exam');
  if (param === 'cet6' || param === 'cet4') {
    setExamLevel(param);
    return param;
  }
  return getExamLevel();
}

/* 内部跳转路径按当前级别补上 exam 参数 */
export function withExamParam(path) {
  if (getExamLevel() !== 'cet6') return path;
  return `${path}${path.includes('?') ? '&' : '?'}exam=cet6`;
}
