import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { translationSets } from '../data/translationSets.js';
import { translationSets6 } from '../data/translationSets6.js';
import { loadJSON, saveJSON } from '../utils/storage.js';
import { examVars } from '../utils/examTheme.js';
import { usePracticeSession, levelOfSet, titleOfSet } from '../utils/practiceLog.js';
import { resolveExamLevel, setExamLevel } from '../utils/examLevel.js';

function draftKey(setId) { return `mars_${setId.startsWith('cet6') ? 'cet6' : 'cet4'}_translation_draft:${setId}`; }
function progressKey(exam) { return `mars_${exam === 'cet6' ? 'cet6' : 'cet4'}_translation_progress`; }

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function PracticeItem({ set, done, onDone, backTo, lvLabel }) {
  const saved = useMemo(() => loadJSON(draftKey(set.id), null), [set.id]);
  const [text, setText] = useState(saved?.text ?? '');
  const [seconds, setSeconds] = useState(saved?.seconds ?? 0);
  const [showRef, setShowRef] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const saveTimer = useRef(null);

  // 计时：每秒 +1，每 15 秒持久化一次
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

  // 输入防抖持久化
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
    kind: 'translation',
    setId: set.id,
    level: levelOfSet(set.id),
    title: set.title || titleOfSet(set.id),
    getStats: () => ({ answered: wordCount, words: wordCount }),
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Link to={backTo} className="text-sm text-gray-500 hover:text-gray-800">← 返回 {lvLabel} 翻译真题列表</Link>
        <h1 className="text-lg font-bold text-gray-900">{lvLabel} · {set.title} · 翻译</h1>
        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{set.topic}</span>
        {done && <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-bold">已完成</span>}
        <span className="ml-auto text-sm font-mono text-gray-500">{fmtTime(seconds)}</span>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <div className="text-xs font-bold text-gray-400 mb-2">PART IV TRANSLATION · 30 min</div>
        <p className="text-lg leading-[1.7] text-gray-500 mb-4">{set.directions}</p>
        <div className="rounded-xl bg-gray-50 p-4 text-[21px] leading-[1.7] text-gray-800">{set.passage}</div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <textarea
          value={text}
          onChange={(e) => onInput(e.target.value)}
          placeholder="在这里写下你的英文翻译……（草稿自动保存）"
          className="w-full h-72 rounded-xl border border-gray-200 p-4 text-[21px] leading-[1.7] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--accent-border)] resize-y"
        />
        <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
          <span>词数 {wordCount}</span>
          <span>·</span>
          <span>草稿实时保存，刷新不丢失</span>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-4">
        <button
          onClick={() => setShowRef((v) => !v)}
          className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {showRef ? '隐藏参考译文' : '查看参考译文'}
        </button>
        {showRef && (
          <div className="mt-4">
            <div className="rounded-xl bg-[var(--accent-softer)] border border-[var(--accent-border)] p-4 text-[21px] leading-[1.7] text-gray-800">{set.reference}</div>
            {set.points?.length > 0 && (
              <div className="mt-4">
                <div className="text-lg font-bold text-gray-900 mb-2">译点精析</div>
                <ol className="list-decimal pl-5 space-y-2 text-[21px] leading-[1.7] text-gray-600">
                  {set.points.map((p, i) => <li key={i}>{p}</li>)}
                </ol>
              </div>
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

      <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-10">
        <button
          onClick={() => setShowNotes((v) => !v)}
          className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-bold text-gray-500 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {showNotes ? '隐藏难词注释' : '查看难词注释'}
        </button>
        {showNotes && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {set.notes.map(([zh, en]) => (
              <div key={zh} className="flex items-baseline gap-2 rounded-lg bg-gray-50 px-3 py-2">
                <span className="text-lg text-gray-800">{zh}</span>
                <span className="text-lg text-[var(--accent)] font-semibold">{en}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TranslationPractice() {
  const { setId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const isCet6 = resolveExamLevel(searchParams) === 'cet6';
  const sets = isCet6 ? translationSets6 : translationSets;
  const backTo = isCet6 ? '/translation?exam=cet6' : '/translation';
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
          {isCet6 ? 'CET-6' : 'CET-4'} 翻译专项 · 段落汉译英
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
        中文段落译成英文（{isCet6 ? '180~200' : '140~160'} 汉字）。先自己翻译，再对照参考译文与译点精析；草稿自动保存，共 {doneCount}/{sets.length} 套已练。
      </p>
      <div className="space-y-3">
        {sets.map((s) => (
          <Link
            key={s.id}
            to={`/translation/${s.id}${isCet6 ? '?exam=cet6' : ''}`}
            className="block rounded-2xl border border-gray-200 bg-white p-5 hover:border-[var(--accent)] transition"
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
