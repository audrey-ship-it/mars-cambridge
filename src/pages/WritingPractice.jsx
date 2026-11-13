import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { writingSets } from '../data/writingSets.js';
import { writingSets6 } from '../data/writingSets6.js';
import { loadJSON, saveJSON } from '../utils/storage.js';
import { examVars } from '../utils/examTheme.js';
import { usePracticeSession, levelOfSet, titleOfSet } from '../utils/practiceLog.js';
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js';

function draftKey(setId) { return `mars_${setId.startsWith('cet6') ? 'cet6' : 'cet4'}_writing_draft:${setId}`; }
function progressKey(exam) { return `mars_${exam === 'cet6' ? 'cet6' : 'cet4'}_writing_progress`; }

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function PracticeItem({ set, done, onDone, backTo, lvLabel }) {
  const saved = useMemo(() => loadJSON(draftKey(set.id), null), [set.id]);
  const [text, setText] = useState(saved?.text ?? '');
  const [seconds, setSeconds] = useState(saved?.seconds ?? 0);
  const [showModel, setShowModel] = useState(false);
  const saveTimer = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setSeconds((v) => v + 1), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const id = setInterval(() => {
      const cur = loadJSON(draftKey(set.id), {}) || {};
      saveJSON(draftKey(set.id), { ...cur, seconds });
    }, 15000);
    return () => clearInterval(id);
  }, [set.id, seconds]);

  const onInput = (v) => {
    setText(v);
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      const cur = loadJSON(draftKey(set.id), {}) || {};
      saveJSON(draftKey(set.id), { ...cur, text: v, seconds });
    }, 400);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  usePracticeSession({
    kind: 'writing',
    setId: set.id,
    level: levelOfSet(set.id),
    title: set.title || titleOfSet(set.id),
    getStats: () => ({ answered: wordCount, words: wordCount }),
  });
  const countColor =
    wordCount === 0 ? 'text-gray-400'
      : wordCount < set.minWords ? 'text-amber-500'
        : wordCount > set.maxWords ? 'text-red-500'
          : 'text-[var(--accent)]';

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Link to={backTo} className="text-sm text-gray-500 hover:text-gray-800">← 返回 {lvLabel} 写作真题列表</Link>
        <h1 className="text-lg font-bold text-gray-900">{lvLabel} · {set.title} · 写作</h1>
        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{set.topic}</span>
        {done && <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-bold">已完成</span>}
        <span className="ml-auto text-sm font-mono text-gray-500">{fmtTime(seconds)}</span>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <div className="text-xs font-bold text-gray-400 mb-2">PART I WRITING · 30 min</div>
        <p className="text-[21px] leading-[1.7] text-gray-800">{set.directions}</p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <textarea
          value={text}
          onChange={(e) => onInput(e.target.value)}
          placeholder="Write your essay here……（草稿自动保存）"
          className="w-full h-80 rounded-xl border border-gray-200 p-4 text-[21px] leading-[1.7] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--accent-border)] resize-y"
        />
        <div className="flex items-center gap-2 mt-3 text-xs">
          <span className={countColor}>词数 {wordCount}（要求 {set.minWords}–{set.maxWords}）</span>
          <span className="text-gray-300">·</span>
          <span className="text-gray-400">草稿实时保存，刷新不丢失</span>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <button
          onClick={() => setShowModel((v) => !v)}
          className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
        >
          {showModel ? '隐藏审题思路与范文' : '查看审题思路与范文'}
        </button>
        {showModel && (
          <div className="mt-4">
            <div className="text-lg font-bold text-gray-900 mb-2">审题思路</div>
            <p className="text-[21px] leading-[1.7] text-gray-600 mb-4">{set.review}</p>
            <div className="text-lg font-bold text-gray-900 mb-2">参考范文</div>
            <div className="rounded-xl bg-[var(--accent-softer)] border border-[var(--accent-border)] p-4 text-[21px] leading-[1.7] text-gray-800 whitespace-pre-line">{set.model}</div>
            <div className="text-lg font-bold text-gray-900 mt-4 mb-2">范文译文</div>
            <div className="rounded-xl bg-gray-50 p-4 text-[21px] leading-[1.7] text-gray-600 whitespace-pre-line">{set.modelZh}</div>
            {set.points?.length > 0 && (
              <>
                <div className="text-lg font-bold text-gray-900 mt-4 mb-2">范文点评</div>
                <ol className="list-decimal pl-5 space-y-2 text-[21px] leading-[1.7] text-gray-600">
                  {set.points.map((p, i) => <li key={i}>{p}</li>)}
                </ol>
              </>
            )}
            {!done && (
              <button
                onClick={onDone}
                className="mt-4 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--accent-deep)]"
              >
                对照完成，标记这题已练
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WritingPractice() {
  const { setId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const isCet6 = resolveExamLevel(searchParams) === 'cet6';
  const sets = isCet6 ? writingSets6 : writingSets;
  const backTo = isCet6 ? '/writing?exam=cet6' : '/writing';
  const set = sets.find((s) => s.id === setId);
  const level = isCet6 ? 'cet6' : 'cet4';
  // 两个级别各存一份进度，切换级别时直接读取对应级别，避免串档
  const [progressMap, setProgressMap] = useState(() => ({
    cet4: loadJSON(progressKey('cet4'), {}),
    cet6: loadJSON(progressKey('cet6'), {}),
  }));
  const progress = progressMap[level];

  const markDone = (id) => {
    const next = { ...progress, [id]: { done: true, doneAt: Date.now() } };
    saveJSON(progressKey(level), next);
    setProgressMap((prev) => ({ ...prev, [level]: next }));
  };

  if (set) {
    return (
      <div className="max-w-3xl mx-auto px-4 lg:px-6 py-6" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
        <PracticeItem set={set} done={!!progress[set.id]?.done} onDone={() => markDone(set.id)} backTo={backTo} lvLabel={isCet6 ? 'CET-6' : 'CET-4'} />
      </div>
    );
  }

  const doneCount = sets.filter((s) => progress[s.id]?.done).length;

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-10" style={examVars(isCet6 ? 'cet6' : 'cet4')}>
      <Link to="/" className="text-sm text-gray-500 hover:text-gray-800">← 首页</Link>
      <div className="flex items-center gap-3 mt-3 flex-wrap">
        <h1 className="text-2xl font-extrabold text-gray-900">
          {isCet6 ? 'CET-6' : 'CET-4'} 写作专项 · 短文写作
        </h1>
        <div className="flex gap-1.5">
          {[{ code: 'cet4', label: 'CET-4' }, { code: 'cet6', label: 'CET-6' }].map((e) => {
            const active = (e.code === 'cet6') === isCet6;
            return (
              <button
                key={e.code}
                onClick={() => {
                  setExamLevel(e.code);
                  setSearchParams(e.code === 'cet6' ? { exam: 'cet6' } : { exam: 'cet4' });
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
            );
          })}
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        {isCet6 ? '150–200' : '120–180'} 词短文，限时 30 分钟。先自己写，再对照审题思路与范文；草稿自动保存、实时字数统计，共 {doneCount}/{sets.length} 套已练。
      </p>
      <div className="space-y-3">
        {sets.map((s) => (
          <Link
            key={s.id}
            to={`/writing/${s.id}${isCet6 ? '?exam=cet6' : ''}`}
            className="block rounded-2xl border border-gray-200 bg-white p-5 hover:border-[var(--accent-border)] transition"
          >
            <div className="flex items-center gap-3">
              <div className="font-bold text-gray-900">{s.title}</div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{s.topic}</span>
              {progress[s.id]?.done && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-bold">已完成</span>
              )}
              <span className="ml-auto text-gray-300">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
