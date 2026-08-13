import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { KET_LISTENING_DATA } from "../data/ketListeningData";
import { CambridgeLayout } from "./CambridgeApp";

const PART_COLORS = {
  1: "bg-cyan-500",
  2: "bg-indigo-500",
  3: "bg-violet-500",
  4: "bg-teal-500",
  5: "bg-rose-500",
};

/* ══════════════════════════════
   TTS hook
══════════════════════════════ */
function useTTS(maxPlays = 2) {
  const [playing, setPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const utterRef = useRef(null);
  const seekingRef = useRef(false);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setPlaying(false);
  }, []);

  const playFrom = useCallback((script, rate, fromChar) => {
    window.speechSynthesis.cancel();
    const text = script.slice(fromChar);
    if (!text.trim()) return;

    const utter = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const voice =
      voices.find(
        (v) => v.lang === "en-GB" && v.name.toLowerCase().includes("female"),
      ) ||
      voices.find((v) => v.lang === "en-GB") ||
      voices.find((v) => v.lang.startsWith("en-"));
    if (voice) utter.voice = voice;
    utter.lang = "en-GB";
    utter.rate = rate;
    utter.pitch = 1;

    utter.onboundary = (e) => setCharIndex(fromChar + (e.charIndex || 0));
    utter.onstart = () => setPlaying(true);
    utter.onend = () => {
      setPlaying(false);
      setCharIndex(0);
      if (!seekingRef.current) setPlayCount((c) => c + 1);
    };
    utter.onerror = () => setPlaying(false);

    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, []);

  const play = useCallback(
    (script, rate = 0.88) => {
      if (playing) {
        stop();
        return;
      }
      setCharIndex(0);
      playFrom(script, rate, 0);
    },
    [playing, stop, playFrom],
  );

  const seek = useCallback(
    (script, rate, targetPct) => {
      const rawChar = Math.floor((targetPct / 100) * script.length);
      // snap to nearest word boundary
      const spaceIdx = script.lastIndexOf(" ", rawChar);
      const fromChar = spaceIdx > 0 ? spaceIdx + 1 : rawChar;
      seekingRef.current = true;
      stop();
      setCharIndex(fromChar);
      setTimeout(() => {
        seekingRef.current = false;
        playFrom(script, rate, fromChar);
      }, 60);
    },
    [stop, playFrom],
  );

  const reset = useCallback(() => {
    window.speechSynthesis.cancel();
    setPlaying(false);
    setPlayCount(0);
    setCharIndex(0);
  }, []);

  useEffect(() => () => window.speechSynthesis.cancel(), []);

  return {
    playing,
    playCount,
    charIndex,
    canPlay: playCount < maxPlays,
    play,
    seek,
    stop,
    reset,
  };
}

/* ══════════════════════════════
   Audio Player UI
══════════════════════════════ */
const PLAYER_SPEEDS = [0.75, 1, 1.25, 1.5];

function SpeedAudioPlayer({ src, title = "整组练习音频", eyebrow = "LISTENING" }) {
  const audioRef = useRef(null);
  const [rate, setRate] = useState(1);

  function changeRate(value) {
    setRate(value);
    if (audioRef.current) audioRef.current.playbackRate = value;
  }

  return (
    <section className="sticky top-3 z-40 rounded-[22px] bg-[#075741] p-4 text-white shadow-xl md:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="min-w-[180px]">
          <div className="text-[11px] font-extrabold tracking-[.14em] text-[#f7cd60]">{eyebrow}</div>
          <strong className="mt-1 block text-xl">{title}</strong>
        </div>
        <audio ref={audioRef} controls preload="metadata" className="h-12 w-full flex-1" src={src} />
        <div className="flex shrink-0 gap-2">
          {[0.75, 1, 1.25].map(value => (
            <button key={value} type="button" onClick={() => changeRate(value)} className={`rounded-xl px-4 py-3 text-sm font-extrabold transition ${rate === value ? "bg-[#f7cd60] text-[#4c3a00]" : "bg-white/10 text-white hover:bg-white/20"}`}>
              {value}×
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 border-t border-white/15 pt-3 text-sm text-white/60">随页面固定 · 可随时暂停、拖动进度或调整播放速度</div>
    </section>
  );
}

function AudioPlayer({ script, tts, label = "播放录音" }) {
  const { playing, playCount, charIndex, canPlay, stop } = tts;
  const maxPlays = 2;
  const remaining = maxPlays - playCount;
  const [speed, setSpeed] = useState(1);
  const isDragging = useRef(false);

  const scriptLen = script?.length || 1;
  const progress = playing
    ? Math.min(99, (charIndex / scriptLen) * 100)
    : playCount > 0
      ? 100
      : 0;

  function handlePlay() {
    if (playing) stop();
    else tts.play(script, speed * 0.88);
  }

  function handleSpeedChange(s) {
    setSpeed(s);
    if (playing) tts.seek(script, s * 0.88, (charIndex / scriptLen) * 100);
  }

  function handleSeekChange(e) {
    isDragging.current = true;
    tts.seek(script, speed * 0.88, Number(e.target.value));
  }

  function handleSeekEnd() {
    isDragging.current = false;
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 mb-6">
      <div className="flex items-center gap-4">
        {/* Play / Stop button */}
        <button
          onClick={handlePlay}
          disabled={!canPlay && !playing}
          className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
            playing
              ? "bg-red-500 hover:bg-red-600 shadow-md"
              : canPlay
                ? "bg-[#064e3b] hover:bg-[#065f46] shadow-md hover:shadow-lg"
                : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          {playing ? (
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Middle: label + progress bar + controls row */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-700 truncate flex-1">
              {label}
            </span>
            {/* Speed buttons */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {PLAYER_SPEEDS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSpeedChange(s)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all ${
                    speed === s
                      ? "bg-[#064e3b] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                remaining === 0
                  ? "bg-gray-100 text-gray-400"
                  : "bg-[#064e3b]/10 text-[#064e3b]"
              }`}
            >
              {remaining === 0 ? "已达上限" : `×${remaining}`}
            </span>
          </div>
          {/* Seekable progress bar */}
          <div className="relative h-4 flex items-center">
            {/* Track */}
            <div className="absolute w-full h-1.5 bg-gray-100 rounded-full overflow-hidden pointer-events-none">
              <div
                className="h-full bg-[#064e3b] rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Thumb */}
            {progress > 0 && (
              <div
                className="absolute h-3 w-3 rounded-full bg-[#064e3b] shadow pointer-events-none z-10"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            )}
            {/* Invisible range input on top for interaction */}
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={Math.round(progress)}
              onChange={handleSeekChange}
              onMouseUp={handleSeekEnd}
              onTouchEnd={handleSeekEnd}
              disabled={playCount === 0 && !playing}
              className="absolute w-full h-4 opacity-0 cursor-pointer disabled:cursor-default"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   Sequential MCQ (Parts 1 & 4)
══════════════════════════════ */
const LABELS = ["A", "B", "C"];

function SequentialMCQ({ data, onDone }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [results, setResults] = useState([]);
  const tts = useTTS(2);

  const items = data.items;
  const item = items[index];
  const total = items.length;

  // Reset TTS when moving to next question
  useEffect(() => {
    tts.reset();
  }, [index]); // eslint-disable-line

  function confirm() {
    if (selected !== null) setConfirmed(true);
  }

  function next() {
    const isRight = selected === item.ans;
    const updated = [...results, isRight];
    if (index + 1 >= total) {
      onDone(updated);
    } else {
      setResults(updated);
      setIndex((i) => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }

  return (
    <div>
      {/* Progress dots */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-gray-400">
          题目 {index + 1} / {total}
        </span>
        <div className="flex gap-1">
          {items.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < index
                  ? results[i]
                    ? "bg-emerald-400"
                    : "bg-red-400"
                  : i === index
                    ? "bg-[#064e3b]"
                    : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-[#064e3b] rounded-full"
          animate={{ width: `${(index / total) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.18 }}
        >
          {/* TTS Player */}
          <AudioPlayer
            script={item.script}
            tts={tts}
            label={`对话 ${item.n} · 点击收听`}
          />

          {/* Question */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
            <p className="text-base font-semibold text-gray-900 mb-5 leading-relaxed">
              {item.question}
            </p>
            <div className="space-y-2.5">
              {item.opts.map((opt, oi) => {
                let style =
                  "border-gray-200 bg-white hover:border-[#064e3b]/40 hover:bg-gray-50 cursor-pointer";
                if (confirmed) {
                  if (oi === item.ans)
                    style = "border-emerald-400 bg-emerald-50 cursor-default";
                  else if (oi === selected)
                    style = "border-red-300 bg-red-50 cursor-default";
                  else style = "border-gray-100 opacity-50 cursor-default";
                } else if (oi === selected) {
                  style = "border-[#064e3b] bg-[#064e3b]/5 cursor-pointer";
                }
                return (
                  <button
                    key={oi}
                    onClick={() => !confirmed && setSelected(oi)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${style}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                        confirmed && oi === item.ans
                          ? "bg-emerald-500 text-white"
                          : confirmed && oi === selected && oi !== item.ans
                            ? "bg-red-400 text-white"
                            : oi === selected
                              ? "bg-[#064e3b] text-white"
                              : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {LABELS[oi]}
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      {opt}
                    </span>
                    {confirmed && oi === item.ans && (
                      <span className="ml-auto text-emerald-500">✓</span>
                    )}
                    {confirmed && oi === selected && oi !== item.ans && (
                      <span className="ml-auto text-red-400">✗</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {confirmed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`rounded-2xl px-5 py-4 mb-4 border text-sm leading-relaxed overflow-hidden ${
                  selected === item.ans
                    ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                    : "bg-red-50 border-red-100 text-red-800"
                }`}
              >
                <span className="font-bold mr-1">
                  {selected === item.ans ? "✓ 正确！" : "✗ 解析："}
                </span>
                {item.exp}
              </motion.div>
            )}
          </AnimatePresence>

          {!confirmed ? (
            <button
              onClick={confirm}
              disabled={selected === null}
              className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base"
            >
              确认答案
            </button>
          ) : (
            <button
              onClick={next}
              className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base"
            >
              {index + 1 < total ? "下一题 →" : "查看结果 →"}
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════
   Matching (Parts 2 & 5)
══════════════════════════════ */
function MatchingSection({ data, onDone }) {
  const [selections, setSelections] = useState(
    Array(data.items.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);
  const tts = useTTS(2);

  const allSelected = selections.every((s) => s !== null);

  function select(itemIdx, optIdx) {
    if (submitted) return;
    setSelections((prev) => prev.map((v, i) => (i === itemIdx ? optIdx : v)));
  }

  function submit() {
    if (allSelected) setSubmitted(true);
  }

  function handleDone() {
    const results = selections.map((sel, i) => sel === data.ans[i]);
    onDone(results);
  }

  return (
    <div>
      <AudioPlayer
        script={data.script}
        tts={tts}
        label="点击收听 — 仔细听每个人说什么"
      />

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
        {/* Options legend */}
        <div className="mb-5">
          <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">
            选项
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {data.options.map((opt, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg"
              >
                <span className="text-xs font-extrabold text-[#064e3b] w-4">
                  {opt.letter}
                </span>
                <span className="text-sm text-gray-700">{opt.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Matching items */}
        <div className="space-y-2.5">
          {data.items.map((person, i) => {
            const sel = selections[i];
            const isRight = submitted && sel === data.ans[i];
            const isWrong = submitted && sel !== data.ans[i];
            return (
              <div key={i}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold text-gray-400 w-4 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-gray-800 w-20 flex-shrink-0">
                    {person}
                  </span>
                  <div className="flex-1 flex gap-1.5 flex-wrap">
                    {data.options.map((opt, oi) => (
                      <button
                        key={oi}
                        onClick={() => select(i, oi)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all ${
                          submitted
                            ? oi === data.ans[i]
                              ? "bg-emerald-500 text-white border-emerald-500"
                              : oi === sel && isWrong
                                ? "bg-red-400 text-white border-red-400"
                                : "bg-gray-50 border-gray-100 text-gray-300"
                            : oi === sel
                              ? "bg-[#064e3b] text-white border-[#064e3b]"
                              : "bg-white border-gray-200 text-gray-500 hover:border-[#064e3b]/40"
                        }`}
                      >
                        {opt.letter}
                      </button>
                    ))}
                  </div>
                  {submitted && (
                    <span
                      className={`text-base flex-shrink-0 ${isRight ? "text-emerald-500" : "text-red-400"}`}
                    >
                      {isRight ? "✓" : "✗"}
                    </span>
                  )}
                </div>
                {submitted && isWrong && (
                  <div className="text-xs text-red-600 ml-7 mt-1 leading-snug">
                    {data.exps[i]}
                  </div>
                )}
                {submitted && isRight && (
                  <div className="text-xs text-emerald-700 ml-7 mt-1 leading-snug">
                    {data.exps[i]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {!submitted ? (
        <button
          onClick={submit}
          disabled={!allSelected}
          className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base"
        >
          提交答案
        </button>
      ) : (
        <button
          onClick={handleDone}
          className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base"
        >
          查看结果 →
        </button>
      )}
    </div>
  );
}

/* ══════════════════════════════
   Blanks — Part 3
══════════════════════════════ */
function BlanksSection({ data, onDone }) {
  const [inputs, setInputs] = useState(Array(data.items.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const tts = useTTS(2);

  const allFilled = inputs.every((v) => v.trim());

  function check(val, ans) {
    return ans.some((a) => a.trim().toLowerCase() === val.trim().toLowerCase());
  }

  function submit() {
    if (allFilled) setSubmitted(true);
  }

  function handleDone() {
    const results = inputs.map((v, i) => check(v, data.items[i].ans));
    onDone(results);
  }

  return (
    <div>
      <AudioPlayer
        script={data.script}
        tts={tts}
        label="点击收听 — 注意关键信息"
      />

      {/* Form context */}
      <div className="text-center text-sm font-bold text-gray-700 mb-3">
        {data.context}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4 space-y-3">
        {data.items.map((item, i) => {
          const isRight = submitted && check(inputs[i], item.ans);
          const isWrong = submitted && !check(inputs[i], item.ans);
          return (
            <div key={i}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold text-gray-400 w-4 flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-600 w-36 flex-shrink-0">
                  {item.label}
                </span>
                <input
                  value={inputs[i]}
                  onChange={(e) =>
                    !submitted &&
                    setInputs((prev) =>
                      prev.map((v, j) => (j === i ? e.target.value : v)),
                    )
                  }
                  disabled={submitted}
                  placeholder="填写答案…"
                  className={`flex-1 px-3 py-2 rounded-xl border text-sm font-medium outline-none transition-all ${
                    submitted
                      ? isRight
                        ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                        : "border-red-300 bg-red-50 text-red-700"
                      : "border-gray-200 bg-gray-50 focus:border-[#064e3b] focus:bg-white"
                  }`}
                />
                {submitted && (
                  <span
                    className={`text-base flex-shrink-0 ${isRight ? "text-emerald-500" : "text-red-400"}`}
                  >
                    {isRight ? "✓" : "✗"}
                  </span>
                )}
              </div>
              {submitted && isWrong && (
                <div className="text-xs ml-7 mt-1 text-red-600">
                  正确答案：<span className="font-bold">{item.ans[0]}</span>{" "}
                  <span className="ml-2">{item.exp}</span>
                </div>
              )}
              {submitted && isRight && (
                <div className="text-xs ml-7 mt-1 text-emerald-700">
                  {item.exp}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={submit}
          disabled={!allFilled}
          className="w-full py-4 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] disabled:opacity-30 transition-all text-base"
        >
          提交答案
        </button>
      ) : (
        <button
          onClick={handleDone}
          className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base"
        >
          查看结果 →
        </button>
      )}
    </div>
  );
}

/* ══════════════════════════════
   Result Screen
══════════════════════════════ */
function ResultScreen({ part, results, onRestart, onBack }) {
  const total = results.length;
  const correct = results.filter(Boolean).length;
  const pct = Math.round((correct / total) * 100);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center mb-5">
        <div className="text-5xl mb-3">
          {pct === 100 ? "🏆" : pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "💪"}
        </div>
        <div className="text-6xl font-extrabold text-gray-900 mb-1">
          {correct}
          <span className="text-3xl text-gray-300 font-normal"> / {total}</span>
        </div>
        <div
          className={`text-xl font-bold mt-2 ${pct === 100 ? "text-emerald-600" : pct >= 60 ? "text-[#064e3b]" : "text-orange-500"}`}
        >
          正确率 {pct}%
        </div>
        <div className="text-xs text-gray-400 mt-1">KET 听力 · Part {part}</div>
      </div>

      {/* Per-question result dots */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
        <div className="text-xs font-bold text-gray-400 mb-3">逐题情况</div>
        <div className="flex gap-2 flex-wrap">
          {results.map((r, i) => (
            <div
              key={i}
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold ${
                r
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 py-3.5 bg-[#064e3b] text-white font-bold rounded-2xl hover:bg-[#065f46] text-sm transition-colors"
        >
          再练一次 →
        </button>
        <button
          onClick={onBack}
          className="flex-1 py-3.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-2xl hover:border-gray-300 text-sm transition-colors"
        >
          换一个 Part
        </button>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════
   Main Page
══════════════════════════════ */
const LISTENING_ENTRIES = [
  {
    id: "common",
    number: "01",
    mark: "Aa",
    title: "听力常见考点",
    desc: "集中掌握时间、日期、数字、价格、电话号码和拼写等高频信息。",
    meta: "基础听辨 · 信息识别",
    featured: true,
  },
  {
    id: "dictation",
    number: "02",
    mark: "⌁",
    title: "听力挖空练习",
    desc: "按句播放录音，补全缺失内容并检查拼写和中文理解。",
    meta: "精听填空 · 拼写巩固",
  },
  {
    id: "part-1",
    number: "03",
    mark: "1",
    title: "Part 1 图片选择题",
    desc: "听短对话，从三幅图片中选择与关键信息相符的一项。",
    meta: "图片信息 · 5 题",
  },
  {
    id: "part-2",
    number: "04",
    mark: "2",
    title: "Part 2 填空题",
    desc: "听一段较长对话或独白，填写姓名、地点、日期和数字等信息。",
    meta: "信息填空 · 5 题",
  },
  {
    id: "part-3",
    number: "05",
    mark: "3",
    title: "Part 3 长篇听力题",
    desc: "理解较长对话的主旨、细节、人物意图和观点。",
    meta: "长对话理解 · 5 题",
  },
  {
    id: "part-4",
    number: "06",
    mark: "4",
    title: "Part 4 短篇听力题",
    desc: "听五段独立短对话，快速辨认每段的重点信息。",
    meta: "短对话听辨 · 5 题",
  },
  {
    id: "part-5",
    number: "07",
    mark: "5",
    title: "Part 5 信息匹配题",
    desc: "根据人物、地点、活动或物品信息完成对应关系。",
    meta: "信息匹配 · 5 题",
  },
];

function ListeningCentre({ level, setLevel }) {
  const navigate = useNavigate();
  function openEntry(id) {
    if (id === "dictation") navigate("/cambridge/dictation");
    else if (id === "common") navigate("/cambridge/listening?view=common");
    else navigate(`/cambridge/listening?part=${id.slice(-1)}`);
  }
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <main className="mx-auto min-h-full max-w-7xl px-6 py-6 lg:px-9">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">
              KET LISTENING
            </div>
            <div className="mt-1 flex items-baseline gap-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-950">
                我的听力中心
              </h1>
              <p className="hidden text-base text-gray-500 md:block">
                先练关键信息，再按 Part 熟悉完整题型。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:w-[350px]">
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
              <span className="text-xs text-gray-500">本周练习</span>
              <strong className="float-right text-xl text-gray-950">0</strong>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
              <span className="text-xs text-gray-500">最近正确率</span>
              <strong className="float-right text-xl text-gray-950">—</strong>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {LISTENING_ENTRIES.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => openEntry(item.id)}
              className={`relative flex min-h-[215px] flex-col overflow-hidden rounded-[22px] border p-6 text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${item.featured ? "border-emerald-500 bg-emerald-50/50" : item.id === "dictation" ? "border-[#e7c65f] bg-[#fff9e9]" : "border-gray-200 bg-white hover:border-emerald-300"}`}
            >
              {item.featured && (
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[#064e3b]" />
              )}
              <div className="flex items-start justify-between">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl text-lg font-extrabold ${item.featured ? "bg-[#064e3b] text-white" : item.id === "dictation" ? "bg-[#f4c95d] text-[#604800]" : "bg-emerald-50 text-emerald-700"}`}
                >
                  {item.mark}
                </span>
                <span
                  className={`text-[11px] font-extrabold tracking-[.14em] ${item.id === "dictation" ? "text-[#b78a19]" : "text-gray-300"}`}
                >
                  {item.number}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-extrabold text-gray-950">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {item.desc}
              </p>
              <div className="mt-auto flex items-center justify-between pt-5 text-sm">
                <span className="font-medium text-gray-500">{item.meta}</span>
                <span
                  className={`font-extrabold ${item.id === "dictation" ? "text-[#8a6500]" : "text-emerald-700"}`}
                >
                  进入 →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </CambridgeLayout>
  );
}

function ListeningCommonPoints({ level, setLevel }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const topics = [
    ["专用名词听写", "姓名、地点、机构和网站等专用名词听写"],
    ["价格", "英镑、便士及常见金额表达"],
    ["数字", "基数词、teen/ty 辨音和连续数字"],
    ["时间", "整点、半点及 past/to 等时刻表达"],
    ["日期", "月份、序数词和英式日期表达"],
    ["星期", "星期名称及相关时间信息辨听"],
  ];
  if (searchParams.get("topic") === "spelling")
    return <SpellingPointPractice level={level} setLevel={setLevel} />;
  if (COMMON_POINT_DATA[searchParams.get("topic")])
    return (
      <CommonPointPractice
        topic={searchParams.get("topic")}
        level={level}
        setLevel={setLevel}
      />
    );
  const topicIds = ["spelling", "price", "number", "time", "date", "weekday"];
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <nav className="flex items-center gap-3 border-b border-gray-100 bg-white px-6 py-4 text-sm">
        <Link
          to="/cambridge/listening"
          className="rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 font-extrabold text-[#735500]"
        >
          ← 我的听力中心
        </Link>
        <span className="text-gray-300">›</span>
        <span className="font-extrabold text-gray-700">听力常见考点</span>
      </nav>
      <main className="mx-auto max-w-6xl px-6 py-7">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">
          LISTENING BASICS
        </div>
        <h1 className="mt-1 text-4xl font-extrabold text-gray-950">
          听力常见考点
        </h1>
        <p className="mt-2 text-gray-500">
          先掌握 KET 听力中最容易听错、写错的关键信息。
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(([title, desc], i) => (
            <button
              onClick={() =>
                navigate(
                  `/cambridge/listening?view=common&topic=${topicIds[i]}`,
                )
              }
              key={title}
              className="min-h-[190px] rounded-[22px] border border-emerald-300 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-xs font-extrabold text-emerald-600">
                0{i + 1}
              </div>
              <h2 className="mt-5 text-xl font-extrabold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {desc}
              </p>
              <div className="mt-5 text-sm font-bold text-emerald-700">
                开始练习 →
              </div>
            </button>
          ))}
        </div>
      </main>
    </CambridgeLayout>
  );
}

const COMMON_POINT_DATA = {
  price: {
    title: "价格",
    audio: "price-practice.mp3",
    tip: "重点听 pound、pence，以及省略单位的 four fifty 等口语表达。",
    lessons: [
      {
        title: "先找价格关键词",
        body: "听到 How much、cost、ticket price，或 £、$、¥ 对应的货币名称时，要立刻准备记录价格。",
        q: "哪一个问题是在询问价格？",
        opts: [
          "Where is the ticket?",
          "How much is the ticket?",
          "When is the film?",
        ],
        ans: 1,
        explain: "How much is…? 用来询问价格。",
      },
      {
        title: "排除干扰价格",
        body: "录音可能同时出现成人票、儿童票、会员价或原价。先确认题目问的是哪一种价格，再选择。",
        q: "题目问 student ticket，录音说 adult £8, student £5。答案是？",
        opts: ["£8", "£5", "£13"],
        ans: 1,
        explain: "题目限定 student，所以应选择学生票 £5。",
      },
      {
        title: "听懂口语价格",
        body: "英式口语中 £3.50 可说 three pounds fifty，也常直接说 three fifty；50p 读作 fifty pence。",
        q: "“four fifty” 在票价语境中通常表示：",
        opts: ["£4.15", "£4.50", "£40.50"],
        ans: 1,
        explain: "价格语境中的 four fifty 通常表示 £4.50。",
      },
    ],
    items: [
      {
        q: "每张优惠票价格",
        a: ["4.50", "£4.50", "4 pounds 50"],
        show: "£4.50",
        why: "four fifty 在价格语境中表示 £4.50。",
      },
      {
        q: "一等奖奖金",
        a: ["175", "£175"],
        show: "£175",
        why: "a hundred and seventy-five pounds。",
      },
      {
        q: "男孩的足球衫价格",
        a: ["20.50", "£20.50"],
        show: "£20.50",
        why: "£35 是奶奶给的钱；£11.75 是女孩 T-shirt 的价格。",
      },
    ],
  },
  number: {
    title: "数字",
    audio: "number-practice.mp3",
    tip: "先判断信息类型，再按数字分组记录；double 表示连续两个相同数字。",
    lessons: [
      {
        title: "判断数字的用途",
        body: "先看题目需要电话号码、公交车号、房间号还是人数。相同数字在不同语境中的记录方式不同。",
        q: "题目写 Phone number，最可能需要记录：",
        opts: ["连续号码", "价格", "日期"],
        ans: 0,
        explain: "Phone number 要记录连续数字。",
      },
      {
        title: "听懂 double",
        body: "double seven 表示 77，triple five 表示 555。电话号码常按小组停顿。",
        q: "zero-double seven-nine 应写成：",
        opts: ["0079", "0779", "07779"],
        ans: 1,
        explain: "zero + double seven + nine = 0779。",
      },
      {
        title: "区分 teen 与 ty",
        body: "-teen 的重音通常更靠后，如 thirteen；-ty 的重音通常在前，如 thirty。",
        q: "“thirty”表示：",
        opts: ["13", "30", "33"],
        ans: 1,
        explain: "thirteen 是 13，thirty 是 30。",
      },
    ],
    items: [
      {
        q: "Teacher’s phone number",
        a: ["0779386521", "0779 386 521"],
        show: "0779 386 521",
        why: "zero-double seven-nine, three-eight-six, five-two-one。",
      },
      {
        q: "应乘坐的公交车编号",
        a: ["395"],
        show: "395",
        why: "274 每 30 分钟一班，建议乘坐每 10 分钟一班的 395。",
      },
    ],
  },
  time: {
    title: "时间",
    audio: "time-practice.mp3",
    tip: "注意干扰时间与最终决定；quarter、half、past 和 to 都是高频表达。",
    lessons: [
      {
        title: "整点与数字读法",
        body: (
          <>
            <span>
              3:00 可读作 three o’clock；3:10 也可以直接读 three ten。听到
              o’clock 时，分钟一定是 00。
            </span>
            <ClockVisual time="3:00" />
          </>
        ),
        q: "five o’clock 是：",
        opts: ["5:00", "5:05", "4:55"],
        ans: 0,
        explain: "o’clock 表示整点，所以是 5:00。",
      },
      {
        title: "past 表示“过”",
        body: (
          <>
            <span>
              分钟在 1—30 之间时常用 past。ten past three 是 3:10，twenty past
              three 是 3:20。
            </span>
            <ClockVisual time="3:10" />
          </>
        ),
        q: "twenty past four 是：",
        opts: ["4:20", "4:40", "3:20"],
        ans: 0,
        explain: "past four 表示四点之后，twenty past four 是 4:20。",
      },
      {
        title: "quarter past 是一刻钟后",
        body: (
          <>
            <span>
              quarter 是 15 分钟。a quarter past three
              表示三点过十五分钟，也就是 3:15。
            </span>
            <ClockVisual time="3:15" />
          </>
        ),
        q: "a quarter past six 是：",
        opts: ["6:15", "6:30", "5:45"],
        ans: 0,
        explain: "quarter past 是当前小时之后 15 分钟。",
      },
      {
        title: "half past 是半点",
        body: (
          <>
            <span>
              half past three 表示三点过三十分钟，即
              3:30。英式口语中也可能直接说 half three。
            </span>
            <ClockVisual time="3:30" />
          </>
        ),
        q: "half past seven 是：",
        opts: ["7:15", "7:30", "8:30"],
        ans: 1,
        explain: "half past 表示过了 30 分钟。",
      },
      {
        title: "to 表示“差”",
        body: (
          <>
            <span>
              分钟超过 30 时常用 to，小时指向即将到达的下一小时。ten to six 是
              5:50。
            </span>
            <ClockVisual time="3:50" />
          </>
        ),
        q: "twenty to five 是：",
        opts: ["5:20", "4:40", "5:40"],
        ans: 1,
        explain: "距离五点还有 20 分钟，即 4:40。",
      },
      {
        title: "quarter to 是差一刻",
        body: (
          <>
            <span>
              a quarter to four 表示距离四点还有十五分钟，即
              3:45。注意小时要写前一个小时。
            </span>
            <ClockVisual time="3:45" />
          </>
        ),
        q: "a quarter to nine 是：",
        opts: ["9:15", "8:45", "9:45"],
        ans: 1,
        explain: "距离九点还有 15 分钟，所以是 8:45。",
      },
      {
        title: "上午、下午与 24 小时制",
        body: (
          <>
            <span>
              a.m. 表示中午前，p.m. 表示中午后。19:45 可读作 nineteen
              forty-five，也等于 7:45 p.m.。
            </span>
            <ClockVisual time="7:45" />
          </>
        ),
        q: "15:20 对应：",
        opts: ["3:20 a.m.", "3:20 p.m.", "5:20 p.m."],
        ans: 1,
        explain: "15:20 减去 12 小时，是下午 3:20。",
      },
      {
        title: "听最后确定的时间",
        body: (
          <>
            <span>
              对话常先提出一个时间，再用 but、instead、actually
              等词修改。答案通常是最后确认的时间。
            </span>
            <ClockVisual time="6:30" />
          </>
        ),
        q: "“Seven is too late. Let’s meet at half past six instead.”答案是：",
        opts: ["7:00", "6:30", "6:00"],
        ans: 1,
        explain: "instead 后给出最终决定 6:30。",
      },
    ],
    items: [
      {
        q: "朋友最终约定的见面时间",
        a: ["4:10", "4.10", "four ten", "ten past four"],
        show: "4:10",
        why: "4:00 和 4:15 都被否定，最终确定 ten past four。",
      },
      {
        q: "活动新的开始时间",
        a: ["6:30", "6.30", "half past six"],
        show: "6:30",
        why: "原定 7:00，后来改为 half past six。",
      },
      {
        q: "活动新的结束时间",
        a: ["10:30", "10.30", "half past ten"],
        show: "10:30",
        why: "原定 11:00，后来改为 ten thirty。",
      },
    ],
  },
  date: {
    title: "日期",
    audio: "date-practice.mp3",
    tip: "月份和序数词要一起记录；英式英语常说 the twenty-ninth of August。",
    lessons: [
      {
        title: "日期使用序数词",
        body: "1st first、2nd second、3rd third；其余多数使用 -th。日期中的 5th 读 fifth，不读 five。",
        q: "21st 应读作：",
        opts: ["twenty-one", "twenty-first", "twentieth-one"],
        ans: 1,
        explain: "21st 是 twenty-first。",
      },
      {
        title: "英式日期表达",
        body: "15 July 可读作 the fifteenth of July；也可能听到 July the fifteenth。两种顺序都要会识别。",
        q: "the third of May 是：",
        opts: ["May 3", "March 5", "May 30"],
        ans: 0,
        explain: "third 是 3，月份是 May。",
      },
      {
        title: "留意日期修正",
        body: "录音可能先说 around the middle of May，再查证为 the fourteenth。应记录最终的明确日期。",
        q: "“Maybe May 15… let me check. It’s May 14.”答案是：",
        opts: ["May 15", "May 14", "May 4"],
        ans: 1,
        explain: "let me check 后的 May 14 是最终确认。",
      },
    ],
    items: [
      {
        q: "Date the phone was bought",
        a: ["August 29", "29 August", "29th August", "August 29th"],
        show: "August 29",
        why: "the twenty-ninth of August。",
      },
      {
        q: "His birthday",
        a: ["July 3", "3 July", "3rd July", "July 3rd"],
        show: "July 3",
        why: "the third of July。",
      },
      {
        q: "Date of the exam",
        a: ["May 14", "14 May", "14th May", "May 14th"],
        show: "May 14",
        why: "the fourteenth of May。",
      },
      {
        q: "Date of return from holiday",
        a: ["September 30", "30 September", "30th September", "September 30th"],
        show: "September 30",
        why: "September the thirtieth。",
      },
      {
        q: "New class starts",
        a: ["February 5", "5 February", "5th February", "February 5th"],
        show: "February 5",
        why: "the fifth of February。",
      },
    ],
  },
  weekday: {
    title: "星期",
    audio: "weekday-practice.mp3",
    tip: "留意题目问的是考试、旅行、比赛或活动真正发生的星期，而不是句中所有星期。",
    lessons: [
      {
        title: "熟悉七天的顺序",
        body: "Monday 到 Sunday 要能快速反应；注意 Tuesday/Thursday、Saturday/Sunday 的辨音。",
        q: "Thursday 后面一天是：",
        opts: ["Tuesday", "Friday", "Sunday"],
        ans: 1,
        explain: "Thursday 后是 Friday。",
      },
      {
        title: "分清活动日和截止日",
        body: "题目可能问 trip 的日期，但录音还会出现交钱日期。要紧扣题目中的活动名称。",
        q: "“Pay by Tuesday. The trip is on Friday.”旅行在：",
        opts: ["Tuesday", "Friday", "Thursday"],
        ans: 1,
        explain: "Tuesday 是交钱截止日，Friday 才是旅行日。",
      },
      {
        title: "识别否定与修正",
        body: "not Sunday、not Monday 等表达会否定干扰项；真正答案通常紧邻其前后。",
        q: "“The test is on Saturday, not Sunday.”答案是：",
        opts: ["Saturday", "Sunday", "Monday"],
        ans: 0,
        explain: "not Sunday 排除了 Sunday，考试在 Saturday。",
      },
    ],
    items: [
      {
        q: "The speaking test is on",
        a: ["Saturday"],
        show: "Saturday",
        why: "Monday 是上课日，Sunday 是其他学生的安排。",
      },
      {
        q: "The trip to the zoo is on",
        a: ["Friday"],
        show: "Friday",
        why: "Tuesday 是交钱截止日，旅行在 next Friday。",
      },
      {
        q: "The football match is on",
        a: ["Sunday"],
        show: "Sunday",
        why: "Monday、Tuesday、Thursday 是训练日。",
      },
      {
        q: "The concert is on",
        a: ["Tuesday"],
        show: "Tuesday",
        why: "说话人修正了自己：tickets for Tuesday, not Monday。",
      },
      {
        q: "The party is on",
        a: ["Thursday"],
        show: "Thursday",
        why: "Wednesday 是报名截止日，聚会在 Thursday evening。",
      },
      {
        q: "They are going to play tennis on",
        a: ["Saturday"],
        show: "Saturday",
        why: "女孩 Sunday 要探望祖母，因此最终选择 Saturday 并早点到。",
      },
    ],
  },
};

function ClockVisual({ time }) {
  const [hour, minute] = time.split(":").map(Number);
  const hourAngle = (hour % 12) * 30 + minute * 0.5;
  const minuteAngle = minute * 6;
  return (
    <div className="mt-5 flex items-center gap-5 rounded-2xl border border-[#ead891] bg-[#fffdf5] p-4">
      <div className="relative h-32 w-32 shrink-0 rounded-full border-[5px] border-[#064e3b] bg-white shadow-inner">
        <span className="absolute left-1/2 top-1 -translate-x-1/2 text-xs font-extrabold text-[#064e3b]">
          12
        </span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-extrabold text-[#064e3b]">
          3
        </span>
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-extrabold text-[#064e3b]">
          6
        </span>
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-extrabold text-[#064e3b]">
          9
        </span>
        <span
          className="absolute bottom-1/2 left-1/2 h-9 w-1.5 origin-bottom rounded-full bg-[#064e3b]"
          style={{ transform: `translateX(-50%) rotate(${hourAngle}deg)` }}
        />
        <span
          className="absolute bottom-1/2 left-1/2 h-12 w-1 origin-bottom rounded-full bg-[#e2ad25]"
          style={{ transform: `translateX(-50%) rotate(${minuteAngle}deg)` }}
        />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#064e3b]" />
      </div>
      <div>
        <div className="text-xs font-extrabold tracking-[.14em] text-[#8b6a10]">
          看钟认时间
        </div>
        <div className="mt-1 text-3xl font-black text-[#064e3b]">{time}</div>
        <div className="mt-1 text-sm text-gray-500">短针看小时，长针看分钟</div>
      </div>
    </div>
  );
}

function CommonPointPractice({ topic, level, setLevel }) {
  const data = COMMON_POINT_DATA[topic];
  const [lessonAnswers, setLessonAnswers] = useState(
    Array(data.lessons.length).fill(null),
  );
  const [answers, setAnswers] = useState(Array(data.items.length).fill(""));
  const [checked, setChecked] = useState(Array(data.items.length).fill(false));
  const normalise = (value) =>
    String(value)
      .toLowerCase()
      .replace(/[£$,.\-\s]/g, "")
      .replace(/(st|nd|rd|th)$/, "");
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <nav className="flex items-center gap-3 border-b border-gray-100 bg-white px-6 py-4 text-sm">
        <Link
          to="/cambridge/listening?view=common"
          className="rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 font-extrabold text-[#735500]"
        >
          ← 听力常见考点
        </Link>
        <span className="text-gray-300">›</span>
        <span className="font-extrabold text-gray-700">{data.title}</span>
      </nav>
      <main className="mx-auto max-w-5xl px-6 py-7">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">
          LISTENING POINT
        </div>
        <h1 className="mt-1 text-4xl font-extrabold">{data.title}</h1>
        <p className="mt-2 text-gray-500">
          先学习三个关键知识点，每学一个立即完成一道小题，再进入音频综合练习。
        </p>
        <section className="mt-6 rounded-[20px] bg-[#064e3b] p-5 text-white">
          <div className="text-xs font-bold text-[#f7cd60]">本节目标</div>
          <p className="mt-2 leading-relaxed text-white/80">{data.tip}</p>
        </section>
        <h2 className="mt-7 text-2xl font-extrabold">第一步 · 学习知识点</h2>
        <div className="mt-4 space-y-4">
          {data.lessons.map((lesson, i) => {
            const selected = lessonAnswers[i],
              done = selected !== null,
              right = selected === lesson.ans;
            return (
              <article
                key={lesson.title}
                className="overflow-hidden rounded-[22px] border border-gray-200 bg-white"
              >
                <div className="grid gap-5 p-6 lg:grid-cols-[1fr_1.2fr]">
                  <div>
                    <div className="text-xs font-extrabold tracking-wider text-emerald-600">
                      知识点 0{i + 1}
                    </div>
                    <h3 className="mt-2 text-2xl font-extrabold">
                      {lesson.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {lesson.body}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#fff9e9] p-5">
                    <div className="text-sm font-extrabold text-[#7a5900]">
                      学完马上练
                    </div>
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {lesson.q}
                    </p>
                    <div className="mt-4 grid gap-2">
                      {lesson.opts.map((opt, n) => (
                        <button
                          key={opt}
                          onClick={() =>
                            setLessonAnswers((v) =>
                              v.map((x, k) => (k === i ? n : x)),
                            )
                          }
                          className={`rounded-xl border px-4 py-3 text-left font-bold transition ${selected === n ? (right ? "border-emerald-400 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-700") : "border-gray-200 bg-white text-gray-700 hover:border-[#e4b83f]"}`}
                        >
                          {String.fromCharCode(65 + n)}. {opt}
                        </button>
                      ))}
                    </div>
                    {done && (
                      <div
                        className={`mt-3 rounded-xl px-4 py-3 text-sm font-medium ${right ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-700"}`}
                      >
                        {right ? "✓ 回答正确！" : "再想一想。"} {lesson.explain}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <h2 className="mt-8 text-2xl font-extrabold">第二步 · 音频综合练习</h2>
        <p className="mt-1 text-sm text-gray-500">
          完成知识点后，播放整组录音并按顺序填写关键信息。
        </p>
        <div className="mt-4"><SpeedAudioPlayer src={`/audio/listening-points/${data.audio}`} /></div>
        <div className="mt-5 space-y-3">
          {data.items.map((item, i) => {
            const done = checked[i],
              right = item.a.some(
                (a) => normalise(a) === normalise(answers[i]),
              );
            return (
              <article
                key={item.q}
                className={`rounded-[20px] border bg-white p-5 ${done ? (right ? "border-emerald-400" : "border-rose-300") : "border-gray-200"}`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f7cd60] font-extrabold">
                    {i + 1}
                  </span>
                  <strong className="min-w-[260px] flex-1 text-lg">
                    {item.q}
                  </strong>
                  <input
                    value={answers[i]}
                    onChange={(e) => {
                      setAnswers((v) =>
                        v.map((x, n) => (n === i ? e.target.value : x)),
                      );
                      setChecked((v) => v.map((x, n) => (n === i ? false : x)));
                    }}
                    placeholder="输入听到的信息"
                    className="h-12 min-w-0 flex-1 rounded-xl border border-gray-200 px-4 text-lg font-bold outline-none focus:border-emerald-500"
                  />
                  <button
                    disabled={!answers[i].trim()}
                    onClick={() =>
                      setChecked((v) => v.map((x, n) => (n === i ? true : x)))
                    }
                    className="rounded-xl bg-[#064e3b] px-5 py-3 font-extrabold text-white disabled:bg-gray-200"
                  >
                    检查
                  </button>
                </div>
                {done && (
                  <div
                    className={`mt-4 rounded-xl px-4 py-3 text-sm ${right ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}
                  >
                    <strong>{right ? "✓ 正确！" : "再检查一下。"}</strong>
                    <span className="ml-2">
                      正确答案：{item.show}。{item.why}
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <div className="mt-5 rounded-[20px] border border-gray-200 bg-white p-5">
          <div className="flex justify-between">
            <strong>综合练习进度</strong>
            <strong className="text-2xl text-emerald-700">
              {checked.filter(Boolean).length} / {data.items.length}
            </strong>
          </div>
          <div className="mt-3 h-2 rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{
                width: `${(checked.filter(Boolean).length / data.items.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </main>
    </CambridgeLayout>
  );
}

const SPELLING_JUDGEMENTS = [
  {
    shown: "Brookdale Street",
    correct: true,
    answer:
      "录音说 B-R-double O-K-D-A-L-E，double O 表示连续两个 O，与 Brookdale 一致。",
  },
  {
    shown: "The Penridge Room",
    correct: true,
    answer:
      "录音中 Room 拼作 R-double O-M，double O 表示连续两个 O，与屏幕一致。",
  },
  {
    shown: "Montclaire",
    correct: false,
    answer: "录音拼作 Montclair：M-O-N-T-C-L-A-I-R，没有结尾 e。",
  },
  {
    shown: "Simone Jordan",
    correct: true,
    answer: "录音拼作 S-I-M-O-N-E J-O-R-D-A-N，与屏幕一致。",
  },
  {
    shown: "www.tourseylon.com",
    correct: false,
    answer:
      "录音拼作 www.tourceylon.com：T-O-U-R-C-E-Y-L-O-N；屏幕中的 S 应为 C。",
  },
];
const SPELLING_WRITES = [
  { prompt: "Teacher’s name: Mr", answer: "Taylor", hint: "姓氏首字母大写。" },
  {
    prompt: "Name of stadium",
    answer: "Bridge",
    hint: "Bridge 拼作 B-R-I-D-G-E。",
  },
  {
    prompt: "Website address: www.",
    answer: "jittersea",
    suffix: ".com",
    hint: "网址关键词使用小写；录音说 J-I-double T-E-R-S-E-A，double T 表示两个 T。",
  },
];
const SPELLING_LESSONS = [
  {
    title: "先判断信息类型",
    body: "KET 听力常要求记录人名、街道、房间、体育场或网站。听到 name、called、address、website 等词时，要准备记录专用名词。",
    q: "听到 “The hotel is called …” 时，接下来最可能出现：",
    opts: ["酒店名称", "价格", "日期"],
    ans: 0,
    explain: "called 后通常给出名称。",
  },
  {
    title: "听懂 double",
    body: "double O 表示 OO，double T 表示 TT。不要把 double 后的字母只写一次。",
    q: "R-double O-M 应写成：",
    opts: ["Rom", "Room", "Rooom"],
    ans: 1,
    explain: "double O 是两个 O，所以是 Room。",
  },
  {
    title: "检查专用名词格式",
    body: "姓名、地名、机构名称通常首字母大写；网址关键词通常写小写。拼完后还要检查容易混淆的字母和重复字母。",
    q: "哪种写法更适合作为姓氏答案？",
    opts: ["taylor", "Taylor", "TAY LOR"],
    ans: 1,
    explain: "姓氏首字母应大写，并写成一个完整单词。",
  },
];

function SpellingPointPractice({ level, setLevel }) {
  const [lessonAnswers, setLessonAnswers] = useState(
    Array(SPELLING_LESSONS.length).fill(null),
  );
  const [judgements, setJudgements] = useState(
    Array(SPELLING_JUDGEMENTS.length).fill(null),
  );
  const [answers, setAnswers] = useState(
    Array(SPELLING_WRITES.length).fill(""),
  );
  const [checked, setChecked] = useState(
    Array(SPELLING_WRITES.length).fill(false),
  );
  function normalise(value) {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z]/g, "");
  }
  const completed =
    judgements.filter((value) => value !== null).length +
    checked.filter(Boolean).length;
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <nav className="flex items-center gap-3 border-b border-gray-100 bg-white px-6 py-4 text-sm">
        <Link
          to="/cambridge/listening?view=common"
          className="rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 font-extrabold text-[#735500]"
        >
          ← 听力常见考点
        </Link>
        <span className="text-gray-300">›</span>
        <span className="font-extrabold text-gray-700">专用名词听写</span>
      </nav>
      <main className="mx-auto max-w-5xl px-6 py-7">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">
          PROPER NOUN DICTATION
        </div>
        <h1 className="mt-1 text-4xl font-extrabold text-gray-950">
          专用名词听写
        </h1>
        <p className="mt-2 text-gray-500">
          先学习专用名词听写方法，每学一个知识点立即练习，再完成整组音频题。
        </p>
        <section className="mt-6 rounded-[22px] bg-[#064e3b] p-6 text-white">
          <div className="text-xs font-extrabold tracking-wider text-[#f7cd60]">
            本节目标
          </div>
          <p className="mt-2 leading-relaxed text-white/80">
            识别姓名、地点、机构和网站等专用名词，听懂逐字拼写与 double
            表达，并正确记录格式。
          </p>
        </section>
        <h2 className="mt-7 text-2xl font-extrabold">第一步 · 学习知识点</h2>
        <div className="mt-4 space-y-4">
          {SPELLING_LESSONS.map((lesson, i) => {
            const selected = lessonAnswers[i],
              done = selected !== null,
              right = selected === lesson.ans;
            return (
              <article
                key={lesson.title}
                className="overflow-hidden rounded-[22px] border border-gray-200 bg-white"
              >
                <div className="grid gap-5 p-6 lg:grid-cols-[1fr_1.2fr]">
                  <div>
                    <div className="text-xs font-extrabold tracking-wider text-emerald-600">
                      知识点 0{i + 1}
                    </div>
                    <h3 className="mt-2 text-2xl font-extrabold">
                      {lesson.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {lesson.body}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#fff9e9] p-5">
                    <div className="text-sm font-extrabold text-[#7a5900]">
                      学完马上练
                    </div>
                    <p className="mt-2 text-lg font-bold">{lesson.q}</p>
                    <div className="mt-4 grid gap-2">
                      {lesson.opts.map((opt, n) => (
                        <button
                          key={opt}
                          onClick={() =>
                            setLessonAnswers((v) =>
                              v.map((x, k) => (k === i ? n : x)),
                            )
                          }
                          className={`rounded-xl border px-4 py-3 text-left font-bold ${selected === n ? (right ? "border-emerald-400 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-700") : "border-gray-200 bg-white text-gray-700"}`}
                        >
                          {String.fromCharCode(65 + n)}. {opt}
                        </button>
                      ))}
                    </div>
                    {done && (
                      <div
                        className={`mt-3 rounded-xl px-4 py-3 text-sm ${right ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-700"}`}
                      >
                        {right ? "✓ 回答正确！" : "再想一想。"} {lesson.explain}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <h2 className="mt-8 text-2xl font-extrabold">第二步 · 音频综合练习</h2>
        <p className="mt-1 text-sm text-gray-500">
          播放整组录音，先完成拼写判断，再填写听到的专用名词。
        </p>
        <div className="mt-5"><SpeedAudioPlayer src="/audio/listening-points/spelling-practice.mp3" /></div>
        <h2 className="mt-6 text-2xl font-extrabold text-gray-950">
          第一部分 · 拼写判断
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          听录音，判断屏幕上的单词或短语是否拼写正确。
        </p>
        <div className="mt-4 space-y-3">
          {SPELLING_JUDGEMENTS.map((item, index) => {
            const chosen = judgements[index];
            const done = chosen !== null;
            const right = chosen === item.correct;
            return (
              <article
                key={item.shown}
                className={`rounded-[20px] border bg-white p-5 ${done ? (right ? "border-emerald-400" : "border-rose-300") : "border-gray-200"}`}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f7cd60] font-extrabold">
                    {index + 1}
                  </span>
                  <strong className="min-w-[240px] flex-1 text-xl text-gray-900">
                    {item.shown}
                  </strong>
                  <button
                    onClick={() =>
                      setJudgements((v) =>
                        v.map((x, i) => (i === index ? true : x)),
                      )
                    }
                    className="rounded-xl border border-gray-200 px-5 py-3 font-extrabold text-gray-700 hover:border-emerald-400"
                  >
                    ✓ 正确
                  </button>
                  <button
                    onClick={() =>
                      setJudgements((v) =>
                        v.map((x, i) => (i === index ? false : x)),
                      )
                    }
                    className="rounded-xl border border-gray-200 px-5 py-3 font-extrabold text-gray-700 hover:border-rose-400"
                  >
                    ✕ 错误
                  </button>
                </div>
                {done && (
                  <div
                    className={`mt-4 rounded-xl px-4 py-3 text-sm ${right ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}
                  >
                    <strong>{right ? "✓ 判断正确！" : "判断不正确。"}</strong>
                    <span className="ml-2">{item.answer}</span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <h2 className="mt-8 text-2xl font-extrabold text-gray-950">
          第二部分 · 信息填写
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          继续播放录音，在空格中填写听到的拼写信息。
        </p>
        <div className="mt-4 space-y-3">
          {SPELLING_WRITES.map((item, index) => {
            const done = checked[index];
            const right = normalise(answers[index]) === normalise(item.answer);
            return (
              <article
                key={item.answer}
                className={`rounded-[20px] border bg-white p-5 ${done ? (right ? "border-emerald-400" : "border-rose-300") : "border-gray-200"}`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f7cd60] font-extrabold">
                    {index + 1}
                  </span>
                  <strong className="min-w-[220px] text-lg text-gray-900">
                    {item.prompt}
                  </strong>
                  <div className="flex min-w-0 flex-1 items-center gap-2">
                    <input
                      value={answers[index]}
                      onChange={(e) => {
                        setAnswers((a) =>
                          a.map((v, i) => (i === index ? e.target.value : v)),
                        );
                        setChecked((c) =>
                          c.map((v, i) => (i === index ? false : v)),
                        );
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && answers[index].trim())
                          setChecked((c) =>
                            c.map((v, i) => (i === index ? true : v)),
                          );
                      }}
                      placeholder="输入答案"
                      className="h-12 min-w-0 flex-1 rounded-xl border border-gray-200 px-4 text-lg font-bold outline-none focus:border-emerald-500"
                    />
                    {item.suffix && (
                      <span className="font-bold text-gray-600">
                        {item.suffix}
                      </span>
                    )}
                  </div>
                  <button
                    disabled={!answers[index].trim()}
                    onClick={() =>
                      setChecked((c) =>
                        c.map((v, i) => (i === index ? true : v)),
                      )
                    }
                    className="rounded-xl bg-[#064e3b] px-5 py-3 font-extrabold text-white disabled:bg-gray-200"
                  >
                    检查
                  </button>
                </div>
                {done && (
                  <div
                    className={`mt-4 rounded-xl px-4 py-3 text-sm ${right ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}
                  >
                    <strong>{right ? "✓ 拼写正确！" : "再检查一下。"}</strong>
                    <span className="ml-2">
                      {right
                        ? item.hint
                        : `正确答案：${item.answer}。${item.hint}`}
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <div className="mt-5 rounded-[20px] border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-gray-800">练习进度</span>
            <strong className="text-2xl text-emerald-700">
              {completed} / 8
            </strong>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full bg-emerald-500 transition-all"
              style={{ width: `${(completed / 8) * 100}%` }}
            />
          </div>
        </div>
      </main>
    </CambridgeLayout>
  );
}

function ListeningPractice({ initialPart = 1 }) {
  const navigate = useNavigate();
  const [level, setLevel] = useState(() => {
    try {
      return localStorage.getItem("cambridge_level") || "KET";
    } catch {
      return "KET";
    }
  });
  const [activePart, setActivePart] = useState(initialPart);
  const [results, setResults] = useState(null);
  const [key, setKey] = useState(0); // force remount to reset

  const data = KET_LISTENING_DATA[activePart];

  function handlePartChange(part) {
    setActivePart(part);
    setResults(null);
    setKey((k) => k + 1);
  }

  function handleDone(res) {
    setResults(res);
  }

  function handleRestart() {
    setResults(null);
    setKey((k) => k + 1);
  }

  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <nav className="flex items-center gap-3 border-b border-gray-100 bg-white px-6 py-3 text-sm">
        <button
          onClick={() => navigate("/cambridge/listening")}
          className="rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 font-extrabold text-[#735500]"
        >
          ← 我的听力中心
        </button>
        <span className="text-gray-300">›</span>
        <span className="font-extrabold text-gray-700">Part {activePart}</span>
      </nav>

      {/* Part Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-xl mx-auto px-6">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                onClick={() => handlePartChange(p)}
                className={`flex-1 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activePart === p
                    ? "border-[#064e3b] text-[#064e3b]"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                Part {p}
              </button>
            ))}
            <button
              onClick={() => navigate("/cambridge/dictation")}
              className="flex-1 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-400 hover:text-gray-600 transition-colors"
            >
              听写专项
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 py-6">
        {/* Part header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`w-9 h-9 rounded-xl ${PART_COLORS[activePart]} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-white font-extrabold text-sm">
              {activePart}
            </span>
          </div>
          <div>
            <div className="font-bold text-gray-900">{data.title}</div>
            <div className="text-xs text-gray-400">{data.items.length} 题</div>
          </div>
          <div className="ml-auto">
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
              A2 KET
            </span>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-[#064e3b]/5 border border-[#064e3b]/10 rounded-2xl px-5 py-4 mb-6">
          <div className="text-[10px] font-bold text-[#064e3b] uppercase tracking-widest mb-1">
            题目说明
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            {data.instructions}
          </p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {results ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <ResultScreen
                part={activePart}
                results={results}
                onRestart={handleRestart}
                onBack={() => {
                  setResults(null);
                  setKey((k) => k + 1);
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`part-${activePart}-${key}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {data.type === "sequential_mcq" && (
                <SequentialMCQ key={key} data={data} onDone={handleDone} />
              )}
              {data.type === "matching" && (
                <MatchingSection key={key} data={data} onDone={handleDone} />
              )}
              {data.type === "blanks" && (
                <BlanksSection key={key} data={data} onDone={handleDone} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CambridgeLayout>
  );
}

export default function CambridgeListening() {
  const [searchParams] = useSearchParams();
  const [level, setLevel] = useState(() => {
    try {
      return localStorage.getItem("cambridge_level") || "KET";
    } catch {
      return "KET";
    }
  });
  if (searchParams.get("view") === "common")
    return <ListeningCommonPoints level={level} setLevel={setLevel} />;
  const part = Number(searchParams.get("part"));
  if (part >= 1 && part <= 5) return <ListeningPractice initialPart={part} />;
  return <ListeningCentre level={level} setLevel={setLevel} />;
}
