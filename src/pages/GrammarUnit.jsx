import { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { grammarUnits, grammarPlanned } from '../data/grammarSets.js';
import { grammarUnits6, grammarPlanned6 } from '../data/grammarSets6.js';
import { loadJSON, saveJSON } from '../utils/storage.js';
import { examVars } from '../utils/examTheme.js';
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js';

const RESET_BTN = 'rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:border-[var(--accent-border)] hover:text-[var(--accent)]';
const TYPES = [
  { key: 'choice', label: '选择题', total: 15 },
  { key: 'blank', label: '填空题', total: 15 },
  { key: 'correct', label: '改错题', total: 15 },
];

function storageKeys(exam) {
  const level = exam === 'cet6' ? 'cet6' : 'cet4';
  return {
    progress: `mars_grammar_progress_${level}_v1`,
    mistakes: `mars_grammar_mistakes_${level}_v1`,
  };
}

// 统一判分：改错题的 noError 题答案存为 null，界面用 'none' 表示「本句没有错误」
function isRightAnswer(typeKey, item, user) {
  if (typeKey === 'blank') {
    return !!user && item.answers.some((a) => a.toLowerCase() === String(user).trim().toLowerCase());
  }
  if (typeKey === 'correct' && item.noError) return user === 'none';
  return user === item.answer;
}

function countRight(unit, typeKey, state) {
  const list = unit[typeKey];
  const answers = state?.[typeKey]?.answers || {};
  let right = 0;
  list.forEach((item, i) => {
    if (isRightAnswer(typeKey, item, answers[i])) right += 1;
  });
  return right;
}

function TypeSection({ unit, typeKey, typeState, setState, setMistakes }) {
  const list = unit[typeKey];
  const answers = typeState?.answers || {};
  const submitted = !!typeState?.submitted;

  const pick = (qi, val) => {
    if (submitted) return;
    setState((prev) => ({ ...prev, [typeKey]: { ...prev[typeKey], answers: { ...(prev[typeKey]?.answers || {}), [qi]: val } } }));
  };
  const onBlank = (qi, val) => {
    if (submitted) return;
    setState((prev) => ({ ...prev, [typeKey]: { ...prev[typeKey], answers: { ...(prev[typeKey]?.answers || {}), [qi]: val } } }));
  };
  const submit = () => {
    setState((prev) => ({ ...prev, [typeKey]: { ...prev[typeKey], submitted: true } }));
    // 记录错题（覆盖式：本次答对的旧错题移除）
    setMistakes((prev) => {
      const next = { ...prev };
      const cur = { ...(prev[unit.id] || {}) };
      const m = { ...(cur[typeKey] || {}) };
      list.forEach((item, i) => {
        const user = answers[i];
        const right = isRightAnswer(typeKey, item, user);
        if (!right) m[i] = { count: (m[i]?.count || 0) + 1, lastAt: Date.now() };
        else delete m[i];
      });
      cur[typeKey] = m;
      next[unit.id] = cur;
      return next;
    });
  };
  const reset = () => {
    setState((prev) => ({ ...prev, [typeKey]: { answers: {}, submitted: false } }));
  };

  const right = submitted ? countRight(unit, typeKey, { [typeKey]: typeState }) : 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="font-bold text-gray-900">{TYPES.find((t) => t.key === typeKey).label}（{list.length} 题）</h3>
        {submitted && <span className="text-sm font-bold text-[var(--accent)]">得分 {right}/{list.length}</span>}
        <button onClick={reset} className={`${RESET_BTN} ml-auto`}>↺ 重置本题型</button>
      </div>
      <div className="space-y-5">
        {list.map((item, i) => {
          const user = answers[i];
          const isRight = isRightAnswer(typeKey, item, user);
          return (
            <div key={i} className="rounded-xl border border-gray-100 p-4">
              <div className="text-[15px] leading-7 text-gray-800 mb-3">
                <span className="font-bold text-gray-500 mr-2">{i + 1}.</span>
                {item.q}
              </div>
              {typeKey === 'choice' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.options.map((opt) => {
                    const letter = opt[0];
                    const cls = submitted
                      ? letter === item.answer ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]'
                        : letter === user ? 'border-red-400 bg-red-50 text-red-600' : 'border-gray-100 text-gray-400'
                      : letter === user ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)] font-bold' : 'border-gray-200 hover:border-gray-300';
                    return (
                      <button key={letter} onClick={() => pick(i, letter)} className={`text-left rounded-lg border px-3 py-2 text-sm transition ${cls}`}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}
              {typeKey === 'blank' && (
                <div className="flex items-center gap-3">
                  <input
                    value={user || ''}
                    onChange={(e) => onBlank(i, e.target.value)}
                    placeholder="填写正确形式"
                    className={`w-56 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                      submitted ? (isRight ? 'border-[var(--accent)] bg-[var(--accent-soft)]' : 'border-red-400 bg-red-50') : 'border-gray-200 focus:ring-[var(--accent-border)]'
                    }`}
                  />
                </div>
              )}
              {typeKey === 'correct' && (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.parts.map((part, pi) => {
                      const letter = 'ABCD'[pi];
                      const cls = submitted
                        ? letter === item.answer ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]'
                          : letter === user ? 'border-red-400 bg-red-50 text-red-600' : 'border-gray-100 text-gray-400'
                        : letter === user ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)] font-bold' : 'border-gray-200 hover:border-gray-300';
                      return (
                        <button key={letter} onClick={() => pick(i, letter)} className={`text-left rounded-lg border px-3 py-2 text-sm transition ${cls}`}>
                          <span className="font-bold mr-1">{letter}.</span>
                          <span className="underline decoration-2 underline-offset-2">{part}</span>
                        </button>
                      );
                    })}
                    <button
                      onClick={() => pick(i, 'none')}
                      className={`text-left rounded-lg border px-3 py-2 text-sm transition ${
                        submitted
                          ? item.noError ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]' : 'border-gray-100 text-gray-400'
                          : user === 'none' ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)] font-bold' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      E. 本句没有错误
                    </button>
                  </div>
                </div>
              )}
              {submitted && (
                <div className={`mt-3 rounded-lg px-3 py-2 text-sm leading-6 ${isRight ? 'bg-[var(--accent-softer)] text-[var(--accent)]' : 'bg-red-50 text-red-700'}`}>
                  {isRight ? '✓ 正确' : `✗ 正确答案：${item.answer === null ? '本句没有错误' : item.answer}`}
                  <span className="block text-gray-600 mt-1">{item.exp}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!submitted && (
        <button onClick={submit} className="mt-5 w-full rounded-xl bg-[var(--accent)] py-3 text-sm font-bold text-white hover:bg-[var(--accent-deep)]">
          提交本题型，查看得分与解析
        </button>
      )}
    </div>
  );
}

export function GrammarUnit() {
  const { unitId } = useParams();
  const [searchParams] = useSearchParams();
  const isCet6 = resolveExamLevel(searchParams) === 'cet6';
  const units = isCet6 ? grammarUnits6 : grammarUnits;
  const unit = units.find((u) => u.id === unitId);
  const keys = storageKeys(isCet6 ? 'cet6' : 'cet4');
  const [progress, setProgress] = useState(() => loadJSON(keys.progress, {}));
  const [, setMistakes] = useState(() => loadJSON(keys.mistakes, {}));
  const [showPoints, setShowPoints] = useState(false);

  const setState = (fn) => setProgress((prev) => {
    const cur = prev[unitId] || {};
    const next = fn(cur);
    const merged = { ...prev, [unitId]: next };
    saveJSON(keys.progress, merged);
    return merged;
  });
  const setMistakesPersist = (fn) => setMistakes((prev) => {
    const merged = fn(prev);
    saveJSON(keys.mistakes, merged);
    return merged;
  });

  if (!unit) {
    return (
      <div className="max-w-3xl mx-auto px-4 lg:px-6 py-16 text-center" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
        <p className="text-gray-500 mb-4">该单元还在编写中。</p>
        <Link to={isCet6 ? '/grammar?exam=cet6' : '/grammar'} className="text-[var(--accent)] font-bold">← 返回语法单元列表</Link>
      </div>
    );
  }

  const doneCount = TYPES.reduce((sum, t) => sum + countRight(unit, t.key, progress[unitId] || {}), 0);
  const unitState = progress[unitId] || {};

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-6" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <div className="flex items-center gap-3 mb-4">
        <Link to={isCet6 ? '/grammar?exam=cet6' : '/grammar'} className="text-sm text-gray-500 hover:text-gray-800">← 返回 {isCet6 ? 'CET-6' : 'CET-4'} 语法列表</Link>
        <h1 className="text-lg font-bold text-gray-900">{isCet6 ? 'CET-6' : 'CET-4'} · {unit.title}</h1>
        <span className="ml-auto text-sm text-gray-500">当前得分 <b className="text-[var(--accent)]">{doneCount}/45</b></span>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <p className="text-sm text-gray-600 mb-3">{unit.desc}</p>
        <button onClick={() => setShowPoints((v) => !v)} className={RESET_BTN}>
          {showPoints ? '收起考点讲解' : '查看考点讲解'}
        </button>
        {showPoints && (
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm leading-6 text-gray-600">
            {unit.points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        )}
      </div>

      <div className="space-y-4 mb-10">
        {TYPES.map((t) => (
          <TypeSection
            key={t.key}
            unit={unit}
            typeKey={t.key}
            typeState={unitState[t.key]}
            setState={setState}
            setMistakes={setMistakesPersist}
          />
        ))}
      </div>
    </div>
  );
}

export function GrammarList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isCet6 = resolveExamLevel(searchParams) === 'cet6';
  const units = isCet6 ? grammarUnits6 : grammarUnits;
  const planned = isCet6 ? grammarPlanned6 : grammarPlanned;
  const [, forceRefresh] = useState(0);
  const progress = loadJSON(storageKeys(isCet6 ? 'cet6' : 'cet4').progress, {});
  const toggleExam = (next) => {
    setExamLevel(next);
    setSearchParams(next === 'cet6' ? { exam: 'cet6' } : { exam: 'cet4' });
    forceRefresh((v) => v + 1);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-10" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-2xl font-extrabold text-gray-900">语法专项 · {isCet6 ? 'CET-6' : 'CET-4'}</h1>
        <div className="flex gap-1.5">
          {[{ code: 'cet4', label: 'CET-4' }, { code: 'cet6', label: 'CET-6' }].map((e) => {
            const active = (e.code === 'cet6') === isCet6;
            return (
              <button
                key={e.code}
                onClick={() => toggleExam(e.code)}
                className={
                  'px-3 py-1 rounded-full text-xs font-bold border transition-colors ' +
                  (active
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300')
                }
              >
                {e.label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        每个单元含选择题、填空题、改错题各 15 题，原创{isCet6 ? '六级' : '四级'}难度编排；错题自动记入错题本，答对后自动移出。
      </p>
      <div className="space-y-3">
        {units.map((u) => {
          const st = progress[u.id] || {};
          const scored = TYPES.reduce((sum, t) => sum + countRight(u, t.key, st), 0);
          const attempted = TYPES.some((t) => st[t.key]?.submitted);
          return (
            <Link
              key={u.id}
              to={`/grammar/${u.id}${isCet6 ? '?exam=cet6' : ''}`}
              className="block rounded-2xl border border-gray-200 bg-white p-5 hover:border-[var(--accent-border)] transition"
            >
              <div className="flex items-center gap-3">
                <div className="font-bold text-gray-900">{u.title}</div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-bold">45 题</span>
                {attempted && <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--hl)] text-[var(--accent-deep)] font-bold">得分 {scored}/45</span>}
                <span className="ml-auto text-gray-300">→</span>
              </div>
              <p className="text-sm text-gray-500 mt-1.5">{u.desc}</p>
            </Link>
          );
        })}
        {planned.map((u) => (
          <div key={u.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 opacity-60">
            <div className="flex items-center gap-3">
              <div className="font-bold text-gray-500">{u.title}</div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-500">编写中</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
