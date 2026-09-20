import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { KET_LISTENING_DATA } from "../data/ketListeningData";
import {
  OFFICIAL_LISTENING_SETS,
  officialListeningAudio,
} from "../data/officialListeningManifest";
import { CambridgeLayout } from "./CambridgeApp";

const PART_COLORS = {
  1: "bg-cyan-500",
  2: "bg-indigo-500",
  3: "bg-violet-500",
  4: "bg-teal-500",
  5: "bg-rose-500",
};

const LISTENING_PROGRESS_PREFIX = "mars_ket_listening_progress_v1";
const LISTENING_LAST_KEY = `${LISTENING_PROGRESS_PREFIX}:last`;

function listeningProgressKey(setId, part) {
  return `${LISTENING_PROGRESS_PREFIX}:set-${setId}:part-${part}`;
}

function readListeningProgress(setId, part) {
  try {
    return JSON.parse(localStorage.getItem(listeningProgressKey(setId, part)) || "null");
  } catch {
    return null;
  }
}

function saveListeningProgress(setId, part, payload) {
  try {
    const updatedAt = new Date().toISOString();
    localStorage.setItem(
      listeningProgressKey(setId, part),
      JSON.stringify({ ...payload, updatedAt }),
    );
    localStorage.setItem(
      LISTENING_LAST_KEY,
      JSON.stringify({ setId, part, updatedAt }),
    );
  } catch {
    // Learning can continue when storage is unavailable.
  }
}

function clearListeningProgress(setId, part) {
  try {
    localStorage.removeItem(listeningProgressKey(setId, part));
  } catch {
    // Ignore storage failures.
  }
}

function ResetListeningButton({ onReset }) {
  return (
    <button
      type="button"
      onClick={onReset}
      className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-extrabold text-gray-500 transition hover:border-rose-200 hover:text-rose-600"
    >
      重新开始本练习
    </button>
  );
}

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

function SpeedAudioPlayer({
  src,
  title = "整组练习音频",
  eyebrow = "LISTENING",
}) {
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
          <div className="text-[11px] font-extrabold tracking-[.14em] text-[#f7cd60]">
            {eyebrow}
          </div>
          <strong className="mt-1 block text-xl">{title}</strong>
        </div>
        <audio
          ref={audioRef}
          controls
          preload="metadata"
          className="h-12 w-full flex-1"
          src={src}
        />
        <div className="flex shrink-0 gap-2">
          {[0.75, 1, 1.25].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => changeRate(value)}
              className={`rounded-xl px-4 py-3 text-sm font-extrabold transition ${rate === value ? "bg-[#f7cd60] text-[#4c3a00]" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              {value}×
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 border-t border-white/15 pt-3 text-sm text-white/60">
        随页面固定 · 可随时暂停、拖动进度或调整播放速度
      </div>
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

const KET3_TEST1_PART1 = [
  {
    question: "What will they have for lunch?",
    image: "/images/listening/ket3-test1-part1/q1.jpg",
    answer: 0,
    explanation: "对话最后同意了妈妈提出的 barbecue，因此选择 A。",
  },
  {
    question: "Which sport is the girl going to play this term?",
    image: "/images/listening/ket3-test1-part1/q2.jpg",
    answer: 1,
    explanation: "女孩说老师已经把她列入 hockey 名单，因此选择 B。",
  },
  {
    question: "Where will the friends go first?",
    image: "/images/listening/ket3-test1-part1/q3.jpg",
    answer: 0,
    explanation: "录音最终确认先去眼镜店，因此选择 A。",
  },
  {
    question: "How does the girl get to school now?",
    image: "/images/listening/ket3-test1-part1/q4.jpg",
    answer: 2,
    explanation: "录音说明她现在步行上学，因此选择 C。",
  },
  {
    question: "What do they decide to buy for their mother?",
    image: "/images/listening/ket3-test1-part1/q5.jpg",
    answer: 1,
    explanation: "两人最后决定购买耳环，因此选择 B。",
  },
];

const OFFICIAL_PART1_SETS = {
  20: [
    {question:'What has Paul bought Timothy for his birthday?',image:'/images/listening/standard-book2-test4/q1.jpg',answer:0},{question:'Where did John go last weekend?',image:'/images/listening/standard-book2-test4/q2.jpg',answer:0},{question:'Where’s Sally now?',image:'/images/listening/standard-book2-test4/q3.jpg',answer:2},{question:'Which sport is the woman going to do at the sports centre?',image:'/images/listening/standard-book2-test4/q4.jpg',answer:1},{question:'What has the woman bought for her new apartment?',image:'/images/listening/standard-book2-test4/q5.jpg',answer:2},
  ],
  19: [
    {question:'Where will the friends meet tonight?',image:'/images/listening/standard-book2-test3/q1.jpg',answer:1},{question:'What did Sally eat at the restaurant?',image:'/images/listening/standard-book2-test3/q2.jpg',answer:1},{question:'What job is Tom’s sister doing this summer?',image:'/images/listening/standard-book2-test3/q3.jpg',answer:0},{question:'What exercise is the woman going to do now?',image:'/images/listening/standard-book2-test3/q4.jpg',answer:0},{question:'What’s Philip wearing?',image:'/images/listening/standard-book2-test3/q5.jpg',answer:1},
  ],
  18: [
    {question:'How did Richard travel from the airport?',image:'/images/listening/standard-book2-test2/q1.jpg',answer:2},{question:'What is next to the woman’s new flat?',image:'/images/listening/standard-book2-test2/q2.jpg',answer:2},{question:'What job does the man do?',image:'/images/listening/standard-book2-test2/q3.jpg',answer:1},{question:'Which T-shirt does the girl decide to buy?',image:'/images/listening/standard-book2-test2/q4.jpg',answer:1},{question:'Where are the car keys?',image:'/images/listening/standard-book2-test2/q5.jpg',answer:0},
  ],
  17: [
    {question:'What temperature will the woman use to cook the cake?',image:'/images/listening/standard-book2-test1/q1.jpg',answer:1},{question:'What did Clara hurt when she played tennis?',image:'/images/listening/standard-book2-test1/q2.jpg',answer:0},{question:'Which photo did the man take?',image:'/images/listening/standard-book2-test1/q3.jpg',answer:1},{question:'Which was the woman’s favourite present?',image:'/images/listening/standard-book2-test1/q4.jpg',answer:0},{question:'What did Tom lose?',image:'/images/listening/standard-book2-test1/q5.jpg',answer:2},
  ],
  16: [
    {question:'What was the weather like for the football match?',image:'/images/listening/standard-book1-test4/q1.jpg',answer:1},{question:'What sport is the woman going to start doing soon?',image:'/images/listening/standard-book1-test4/q2.jpg',answer:2},{question:'Why was the man late for work?',image:'/images/listening/standard-book1-test4/q3.jpg',answer:2},{question:'Which food is the man eating?',image:'/images/listening/standard-book1-test4/q4.jpg',answer:0},{question:'What has the man had problems with?',image:'/images/listening/standard-book1-test4/q5.jpg',answer:0},
  ],
  15: [
    {question:'Where will they go if it rains tomorrow?',image:'/images/listening/standard-book1-test3/q1.jpg',answer:0},{question:'Why didn’t the woman buy the book?',image:'/images/listening/standard-book1-test3/q2.jpg',answer:2},{question:'Where does the man work now?',image:'/images/listening/standard-book1-test3/q3.jpg',answer:1},{question:'Where does the man want to go?',image:'/images/listening/standard-book1-test3/q4.jpg',answer:1},{question:'What’s the man making?',image:'/images/listening/standard-book1-test3/q5.jpg',answer:1},
  ],
  14: [
    { question: "Where is the cup now?", image: "/images/listening/standard-book1-test2/q1.jpg", answer: 1, explanation: "杯子不在橱柜或旁边的架子上，而是在水槽旁，因此选择 B。" },
    { question: "Who will Sally meet at the station?", image: "/images/listening/standard-book1-test2/q2.jpg", answer: 0, explanation: "Sally 要接的是年长、短头发的姐姐，因此选择 A。" },
    { question: "What did the man learn to do at the beach?", image: "/images/listening/standard-book1-test2/q3.jpg", answer: 0, explanation: "男士在海滩学会的是沙滩排球，因此选择 A。" },
    { question: "Where are they going to meet?", image: "/images/listening/standard-book1-test2/q4.jpg", answer: 0, explanation: "两人约在书店见面，因此选择 A。" },
    { question: "What didn’t the man buy?", image: "/images/listening/standard-book1-test2/q5.jpg", answer: 2, explanation: "他买了护目镜和手套，但没有买围巾，因此选择 C。" },
  ],
  13: [
    { question: "How did the woman travel to work this morning?", image: "/images/listening/standard-book1-test1/q1.jpg", answer: 2, explanation: "汽车在修理厂，她原本要坐火车，却上错公交车，最后仍乘公交车到达，因此选择 C。" },
    { question: "What will the man eat first at the restaurant?", image: "/images/listening/standard-book1-test1/q2.jpg", answer: 2, explanation: "男士主菜想吃烤鸡，但第一道菜会先喝蘑菇汤，因此选择 C。" },
    { question: "Which was the view from the woman’s hotel room?", image: "/images/listening/standard-book1-test1/q3.jpg", answer: 1, explanation: "酒店临海且有花园，但她的房间在另一侧、正对游泳池，因此选择 B。" },
    { question: "Why will the man miss the concert tonight?", image: "/images/listening/standard-book1-test1/q4.jpg", answer: 1, explanation: "男士不是头痛或胃痛，而是牙齿疼，因此选择 B。" },
    { question: "What will the woman wear for the party?", image: "/images/listening/standard-book1-test1/q5.jpg", answer: 0, explanation: "她最终接受建议，决定穿自己最喜欢的连衣裙，因此选择 A。" },
  ],
  1: [
    { question: "How did Stan and his dad get home from the concert?", image: "/images/listening/set-01-part1/q1.jpg", answer: 2, explanation: "火车已经错过，出租车又太贵；两人最后乘公交车回家，因此选择 C。" },
    { question: "What’s the girl forgotten?", image: "/images/listening/set-01-part1/q2.jpg", answer: 2, explanation: "女孩去游泳时带了毛巾，却忘了带 swimming costume（游泳衣），因此选择 C。" },
    { question: "What will the boy do first after he gets home from school?", image: "/images/listening/set-01-part1/q3.jpg", answer: 2, explanation: "男孩说一回家就要帮忙做旅途用的三明治，因此选择 C。" },
    { question: "Where did the girl find her phone?", image: "/images/listening/set-01-part1/q4.jpg", answer: 0, explanation: "她最后在爸爸汽车的后座找到了手机，因此选择 A。" },
    { question: "Where are the two friends going to go first today?", image: "/images/listening/set-01-part1/q5.jpg", answer: 2, explanation: "他们决定先参观博物馆，之后再使用剧院票，因此选择 C。" },
  ],
  2: [
    { question: "Which photo is the boy showing his mother?", image: "/images/listening/set-02-part1/q1.jpg", answer: 1, explanation: "男孩拍到了月光下、覆盖着雪的树；兔子跑掉了没有拍到，因此选择 B。" },
    { question: "Where does the girl’s mother work?", image: "/images/listening/set-02-part1/q2.jpg", answer: 1, explanation: "她妈妈已经换工作，现在在一家大酒店做接待员，因此选择 B。" },
    { question: "What did Helena’s class do in their history lesson?", image: "/images/listening/set-02-part1/q3.jpg", answer: 2, explanation: "历史课上他们看了一部关于城堡生活的电影，画画是在美术课，因此选择 C。" },
    { question: "Which new sport is the girl going to do today?", image: "/images/listening/set-02-part1/q4.jpg", answer: 0, explanation: "女孩说今天第一次尝试滑雪；冲浪只是她想学但不能借哥哥的板，因此选择 A。" },
    { question: "What did the boy eat for breakfast?", image: "/images/listening/set-02-part1/q5.jpg", answer: 2, explanation: "男孩早饭已经吃了最后一块甜瓜，午餐可以带梨或葡萄，因此选择 C。" },
  ],
  3: [
    { question: "What does the boy’s mother need to buy for him?", image: "/images/listening/set-03-part1/q1.jpg", answer: 0, explanation: "男孩说裤子够穿、外套也没问题，只有鞋子太小，因此选择 A。" },
    { question: "What’s the girl trying to make?", image: "/images/listening/set-03-part1/q2.jpg", answer: 0, explanation: "女孩说模型的脖子太长，看起来更像骆驼而不是绵羊，因此选择 A。" },
    { question: "What was the weather like at the weekend?", image: "/images/listening/set-03-part1/q3.jpg", answer: 1, explanation: "根据录音中的天气描述，正确图片为 B。" },
    { question: "What will the boy have for lunch?", image: "/images/listening/set-03-part1/q4.jpg", answer: 0, explanation: "根据录音中的最终安排，正确图片为 A。" },
    { question: "Which subject won’t they study next year?", image: "/images/listening/set-03-part1/q5.jpg", answer: 2, explanation: "根据录音中的课程安排，明年不再学习的科目对应图片 C。" },
  ],
  4: [
    { question: "Who is the boy’s sister?", image: "/images/listening/set-04-part1/q1.jpg", answer: 1, explanation: "录音中描述的是长黑发女孩，因此选择 B。" },
    { question: "Why didn’t the girl go to the school dance?", image: "/images/listening/set-04-part1/q2.jpg", answer: 1, explanation: "妈妈开车送她去学校时发动机突然熄火，无法再启动，因此选择 B。" },
    { question: "Where’s the girl going first?", image: "/images/listening/set-04-part1/q3.jpg", answer: 1, explanation: "她们会先去镇上吃汉堡，然后再去电影院，因此选择 B。" },
    { question: "Which programme will the two friends watch together?", image: "/images/listening/set-04-part1/q4.jpg", answer: 0, explanation: "两人决定看烘焙节目；女孩已看过熊的节目，也不想看音乐频道，因此选择 A。" },
    { question: "Where will the girl go tomorrow?", image: "/images/listening/set-04-part1/q5.jpg", answer: 0, explanation: "她明天要为生物作业收集不同种类的树叶，地点是公园，因此选择 A。" },
  ],
  5: [
    { question: "When is the party?", image: "/images/listening/set-05-part1/q1.jpg", answer: 2, explanation: "男孩原本想在 16 日举办，生日实际在 20 日；但爸爸出差，所以最后改在下周六 23 日，因此选择 C。" },
    { question: "What time does the football match begin?", image: "/images/listening/set-05-part1/q2.jpg", answer: 2, explanation: "两点半是现在的时间，三点一刻是老师能到的时间；比赛开始时间是三点半，因此选择 C。" },
    { question: "Which T-shirt would the boy like?", image: "/images/listening/set-05-part1/q3.jpg", answer: 1, explanation: "男孩不是要狮子图案，而是指带滑板的那件；月亮图案只是用来说明位置，因此选择 B。" },
    { question: "How much has the girl paid for each ticket?", image: "/images/listening/set-05-part1/q4.jpg", answer: 1, explanation: "女孩的爸爸提前在网上订票，每张票是 £6.50；演出当天购买才是 £8.75，因此选择 B。" },
    { question: "Who did they have dinner with yesterday evening?", image: "/images/listening/set-05-part1/q5.jpg", answer: 2, explanation: "他们和同学 Ben 一起吃晚饭；之后来接 Ben 的是他的爷爷，不是一起用餐的人，因此选择 C。" },
  ],
  6: [
    { question: "What’s the subject of the girl’s geography project?", image: "/images/listening/set-06-part1/q1.jpg", answer: 1, explanation: "女孩起初想研究海洋，后来决定研究世界上一些最大的沙漠，因此选择 B。" },
    { question: "Where do the two friends decide to go first?", image: "/images/listening/set-06-part1/q2.jpg", answer: 0, explanation: "Nathan 先提到餐厅，之后才有化学课；但 Janine 要先去图书馆拿书，因此选择 A。" },
    { question: "Why has the girl come home late?", image: "/images/listening/set-06-part1/q3.jpg", answer: 2, explanation: "篮球训练是明天；女孩今天放学后留下来向老师请教历史作业，因此选择 C。" },
    { question: "Where has the boy already found some useful information about elephants?", image: "/images/listening/set-06-part1/q4.jpg", answer: 0, explanation: "他正在网上找但还没有找到可用资料，书也还没查；爷爷给的杂志文章已经提供了一些资料，因此选择 A。" },
    { question: "What will the girl do for her friend’s birthday party?", image: "/images/listening/set-06-part1/q5.jpg", answer: 0, explanation: "别人会做蛋糕和弹吉他，女孩负责为博客拍所有人的照片，因此选择 A。" },
  ],
  7: [
    { question: "How did the girl get to school this morning?", image: "/images/listening/set-07-part1/q1.jpg", answer: 0, explanation: "公交车晚点只是常见问题，汽车又无法发动；女孩最后坐哥哥的摩托车到学校，因此选择 A。" },
    { question: "What time will the friends meet tomorrow?", image: "/images/listening/set-07-part1/q2.jpg", answer: 0, explanation: "男孩提议最后一节课后，也就是一点十分见面；三点零五是他要赶的公交车时间，因此选择 A。" },
    { question: "What did the boy enjoy most at the meal last night?", image: "/images/listening/set-07-part1/q3.jpg", answer: 2, explanation: "没有面包，甜点又太甜；男孩说披萨很好吃，因此选择 C。" },
    { question: "What does the girl need to buy?", image: "/images/listening/set-07-part1/q4.jpg", answer: 2, explanation: "她已经收好了牙刷，却没有足够的肥皂；梳子只是她去商店时忘记买的东西，因此选择 C。" },
    { question: "Where’s the girl now?", image: "/images/listening/set-07-part1/q5.jpg", answer: 0, explanation: "女孩提前放学后和朋友走到公交站，并乘上了公交车；她不是在车里或步行路上，因此选择 A。" },
  ],
  8: [
    { question: "What do they want to buy in the department store?", image: "/images/listening/set-08-part1/q1.jpg", answer: 1, explanation: "数学书准备在网上买，学校鞋已买好；女孩还需要一件外套，因此选择 B。" },
    { question: "Where did the boy go this morning?", image: "/images/listening/set-08-part1/q2.jpg", answer: 1, explanation: "他通常去公园踢球，但朋友这周有别的安排，所以改去游泳池；电影院是之后的计划，因此选择 B。" },
    { question: "Who is the girl going to meet?", image: "/images/listening/set-08-part1/q3.jpg", answer: 0, explanation: "Amelia 是长发、深色头发且不戴眼镜的女孩，因此选择 A。" },
    { question: "How will the boy help his mum?", image: "/images/listening/set-08-part1/q4.jpg", answer: 2, explanation: "妈妈要去超市，蔬菜已切好；她请男孩把刀叉等摆到桌上，因此选择 C。" },
    { question: "Where did the girl spend the day with her family?", image: "/images/listening/set-08-part1/q5.jpg", answer: 1, explanation: "他们常去海边小村庄，但这次想换个地方，最后去了山里，因此选择 B。" },
  ],
  9: KET3_TEST1_PART1,
  10: [
    { question: "How much did the girl pay for her trainers?", image: "/images/listening/set-10-part1/q1.jpg", answer: 0, explanation: "女孩实际支付了 £47.99，因此选择 A。" },
    { question: "Which picture does the boy choose for his grandmother?", image: "/images/listening/set-10-part1/q2.jpg", answer: 0, explanation: "男孩选择了祖母喜欢的花朵照片，因此选择 A。" },
    { question: "What are they going to do first this afternoon?", image: "/images/listening/set-10-part1/q3.jpg", answer: 2, explanation: "两人决定先骑自行车，因此选择 C。" },
    { question: "What did the girl put on the pizza yesterday?", image: "/images/listening/set-10-part1/q4.jpg", answer: 2, explanation: "女孩在披萨上放了洋葱和西红柿，因此选择 C。" },
    { question: "Which girl is the boy’s sister?", image: "/images/listening/set-10-part1/q5.jpg", answer: 1, explanation: "男孩的姐姐是黑发并戴眼镜的女孩，因此选择 B。" },
  ],
  11: [
    { question: "What has the girl lost?", image: "/images/listening/set-11-part1/q1.jpg", answer: 1, explanation: "女孩找不到自己的围巾，因此选择 B。" },
    { question: "What can the boy see from his bedroom window?", image: "/images/listening/set-11-part1/q2.jpg", answer: 1, explanation: "男孩卧室的窗户可以看到一个大型停车场，因此选择 B。" },
    { question: "What do they decide to eat?", image: "/images/listening/set-11-part1/q3.jpg", answer: 0, explanation: "两人最后决定吃披萨，因此选择 A。" },
    { question: "Where will Calum’s birthday party be?", image: "/images/listening/set-11-part1/q4.jpg", answer: 0, explanation: "生日聚会将在带烧烤架的家中举行，因此选择 A。" },
    { question: "Where will the friends meet tomorrow?", image: "/images/listening/set-11-part1/q5.jpg", answer: 2, explanation: "朋友们约在电车站见面，因此选择 C。" },
  ],
  12: [
    { question: "What did the girl buy today?", image: "/images/listening/set-12-part1/q1.jpg", answer: 2, explanation: "女孩今天买了一条很酷的连衣裙，因此选择 C。" },
    { question: "What will the weather be like this afternoon?", image: "/images/listening/set-12-part1/q2.jpg", answer: 1, explanation: "对话说明下午会刮很大的风，因此选择 B。" },
    { question: "Where did the girl stay on her holiday?", image: "/images/listening/set-12-part1/q3.jpg", answer: 0, explanation: "他们最后预订了带花园的家庭旅馆，因此选择 A。" },
    { question: "Which homework has the boy finished?", image: "/images/listening/set-12-part1/q4.jpg", answer: 2, explanation: "男孩已经完成了历史作业，因此选择 C。" },
    { question: "What did the girl do at the weekend?", image: "/images/listening/set-12-part1/q5.jpg", answer: 0, explanation: "女孩周末和姐姐打羽毛球并赢了比赛，因此选择 A。" },
  ],
};

function ListeningSetTabs({ part, activeSet }) {
  return (
    <section className="mt-6 rounded-[22px] border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <strong className="text-sm text-gray-800">选择练习</strong>
        <span className="text-xs text-gray-400">
          共 12 套 · 当前为练习{activeSet}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
        {OFFICIAL_LISTENING_SETS.map((set) => {
          const active = set.id === activeSet;
          const ready = set.readyParts?.includes(part);
          return (
            <Link
              key={set.id}
              to={`/cambridge/listening?part=${part}&set=${set.id}`}
              className={`relative rounded-xl border px-2 py-3 text-center text-sm font-extrabold transition ${active ? "border-[#d9a921] bg-[#f7cd60] text-[#4c3a00] shadow-sm" : ready ? "border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-400" : "border-gray-200 bg-gray-50 text-gray-500 hover:border-[#e7c65f] hover:bg-[#fff9e9]"}`}
            >
              {set.label.replace("练习", "")}
              {!ready && (
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-gray-300" />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function ListeningPartNav({ activePart, setId }) {
  const parts = [
    activePart,
    ...[1, 2, 3, 4, 5].filter((part) => part !== activePart),
  ];
  return (
    <nav className="border-b border-gray-100 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
        <Link
          to="/cambridge/listening"
          className="mr-1 rounded-xl border border-[#e7c65f] bg-[#fff8e7] px-4 py-2.5 text-sm font-extrabold text-[#735500]"
        >
          ← 我的听力中心
        </Link>
        <span className="mr-1 text-gray-300">›</span>
        {parts.map((part) => (
          <Link
            key={part}
            to={`/cambridge/listening?part=${part}&set=${setId}`}
            aria-current={part === activePart ? "page" : undefined}
            className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${part === activePart ? "border-[#d9a921] bg-[#f7cd60] text-[#4c3a00] shadow-sm" : "border-gray-200 bg-white text-gray-500 hover:border-emerald-300 hover:text-emerald-800"}`}
          >
            Part {part}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function ListeningSetChecking({ part, setId, level, setLevel }) {
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <ListeningPartNav activePart={part} setId={setId} />
      <main className="mx-auto max-w-6xl px-6 py-7">
        <h1 className="text-4xl font-extrabold">
          Part {part} · 练习{setId}
        </h1>
        <ListeningSetTabs part={part} activeSet={setId} />
        <section className="mt-6 rounded-[26px] border border-[#ead58f] bg-[#fff9e9] px-7 py-12 text-center">
          <div className="text-4xl">✓</div>
          <h2 className="mt-4 text-2xl font-extrabold text-gray-950">
            正在逐题校对
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            对应音频已经完成整理。题干、图片和答案会与原 PDF
            逐项核对后开放，避免使用不准确的自动识别结果。
          </p>
        </section>
      </main>
    </CambridgeLayout>
  );
}

function OfficialPartOneSample({ level, setLevel, setId = 9 }) {
  const questions = OFFICIAL_PART1_SETS[setId] || KET3_TEST1_PART1;
  const saved = readListeningProgress(setId, 1);
  const [answers, setAnswers] = useState(() =>
    saved?.answers?.length === questions.length
      ? saved.answers
      : Array(questions.length).fill(null),
  );
  useEffect(() => {
    saveListeningProgress(setId, 1, {
      answers,
      completed: answers.every((value) => value !== null),
      wrongCount: answers.reduce((count, value, index) => count + (value !== null && value !== questions[index].answer ? 1 : 0), 0),
    });
  }, [answers, setId]);
  function resetProgress() {
    clearListeningProgress(setId, 1);
    setAnswers(Array(questions.length).fill(null));
  }
  const completed = answers.filter((value) => value !== null).length;
  const correct = answers.reduce(
    (total, value, index) =>
      total + (value === questions[index].answer ? 1 : 0),
    0,
  );
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <ListeningPartNav activePart={1} setId={setId} />
      <main className="mx-auto max-w-6xl px-6 py-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">
              INTERNAL REVIEW SAMPLE
            </div>
            <h1 className="mt-1 text-4xl font-extrabold">Part 1 图片选择题</h1>
            <p className="mt-2 text-gray-500">
              练习{setId} · 听五段短对话，从 A、B、C 三幅图片中选择正确答案。
            </p>
          </div>
          <div className="rounded-2xl border border-[#e7c65f] bg-[#fff9e9] px-5 py-3 text-sm text-[#735500]">
            <strong>内部原型素材</strong>
            <div className="mt-1 text-xs">
              用于页面结构与交互审核，不作为官方授权声明
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1">
            <ListeningSetTabs part={1} activeSet={setId} />
          </div>
          <ResetListeningButton onReset={resetProgress} />
        </div>
        <div className="mt-6">
          <SpeedAudioPlayer
            src={officialListeningAudio(setId, 1)}
            title={`练习${setId} · Part 1 音频`}
          />
        </div>
        <div className="mt-6 space-y-5">
          {questions.map((item, index) => {
            const selected = answers[index],
              done = selected !== null,
              right = selected === item.answer;
            return (
              <article
                key={item.question}
                className={`rounded-[24px] border bg-white p-5 md:p-7 ${done ? (right ? "border-emerald-400" : "border-rose-300") : "border-gray-200"}`}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f7cd60] font-extrabold text-[#4c3a00]">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-extrabold text-gray-950">
                      {item.question}
                    </h2>
                    <div className="relative mx-auto mt-5 max-w-[720px] overflow-hidden rounded-2xl border border-gray-200 bg-[#fafafa] p-2">
                      <img
                        src={item.image}
                        alt={`Question ${index + 1} options A, B and C`}
                        className="w-full"
                      />
                      <div className="absolute inset-0 grid grid-cols-3">
                        {[0, 1, 2].map((option) => (
                          <button
                            key={option}
                            type="button"
                            aria-label={`选择 ${String.fromCharCode(65 + option)}`}
                            onClick={() =>
                              setAnswers((values) =>
                                values.map((value, i) =>
                                  i === index ? option : value,
                                ),
                              )
                            }
                            className={`m-1 rounded-xl border-2 transition ${selected === option ? (right ? "border-emerald-500 bg-emerald-400/10" : "border-rose-500 bg-rose-400/10") : "border-transparent hover:border-[#f7cd60]"}`}
                          >
                            <span
                              className={`absolute mt-2 ml-2 grid h-8 w-8 place-items-center rounded-full text-sm font-extrabold ${selected === option ? "bg-[#064e3b] text-white" : "bg-white/90 text-gray-700 shadow"}`}
                            >
                              {String.fromCharCode(65 + option)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                    {done && (
                      <div
                        className={`mt-4 rounded-xl px-4 py-3 text-sm ${right ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}
                      >
                        <strong>
                          {right
                            ? "✓ 回答正确！"
                            : `再听一次。正确答案是 ${String.fromCharCode(65 + item.answer)}。`}
                        </strong>
                        <span className="ml-2">{item.explanation}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <section className="mt-6 rounded-[22px] bg-[#064e3b] p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white/60">完成进度</div>
              <strong className="text-2xl">{completed} / 5</strong>
            </div>
            {completed === 5 && (
              <div className="text-right">
                <div className="text-sm text-white/60">本次正确</div>
                <strong className="text-3xl text-[#f7cd60]">
                  {correct} / 5
                </strong>
              </div>
            )}
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#f7cd60] transition-all"
              style={{ width: `${completed * 20}%` }}
            />
          </div>
        </section>
      </main>
    </CambridgeLayout>
  );
}

const OFFICIAL_TEST1_PARTS = {
  2: {
    title: "Part 2 信息填空题",
    instruction: "听一段电话留言，在每个空格中填写一个单词、数字或时间。",
    type: "blanks",
    items: [
      { q: "Take:", answer: ["kite"], show: "kite" },
      { q: "Place for lunch:", answer: ["park"], show: "park" },
      { q: "Sport we’ll play:", answer: ["volleyball"], show: "volleyball" },
      {
        q: "Cost of boat trip on Sunday: £ ___ each",
        answer: [
          "3.75",
          "three pounds seventy five",
          "three pounds seventy-five",
        ],
        show: "£3.75",
      },
      {
        q: "Arrive at Mandy’s home at: ___ p.m.",
        answer: ["6.30", "6:30", "18:30", "six thirty"],
        show: "6:30 p.m.",
      },
    ],
  },
  3: {
    title: "Part 3 长篇听力题",
    instruction: "听 Ned 和 Aisha 谈论在新学校的第一周，选择正确答案。",
    type: "mcq",
    items: [
      {
        q: "When did they meet each other for the first time?",
        opts: ["on the way to school", "in a lesson", "in the lunch break"],
        answer: 1,
      },
      {
        q: "How did Ned feel before he started the new school?",
        opts: ["scared", "excited", "lucky"],
        answer: 1,
      },
      {
        q: "Ned and Aisha agree that",
        opts: [
          "the teachers are very kind.",
          "their classmates are all very nice.",
          "the school building is very attractive.",
        ],
        answer: 0,
      },
      {
        q: "Which lesson doesn’t Aisha like much?",
        opts: ["geography", "maths", "history"],
        answer: 2,
      },
      {
        q: "What do they both say about homework at the new school?",
        opts: [
          "They got less in their old schools.",
          "It takes a long time to do.",
          "Some of it is quite easy.",
        ],
        answer: 0,
      },
    ],
  },
  4: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      {
        q: "How did the boy get the book?",
        opts: [
          "He borrowed it from a family member.",
          "He won it in a sports event.",
          "He bought it in a shop.",
        ],
        answer: 1,
      },
      {
        q: "What type of lesson did the girl have?",
        opts: ["a guitar lesson", "a tennis lesson", "a dance lesson"],
        answer: 0,
      },
      {
        q: "Where will the boy stay on holiday?",
        opts: ["in a house", "in a hotel", "in a tent"],
        answer: 2,
      },
      {
        q: "What does the teacher want his class to do now?",
        opts: [
          "start some maths problems",
          "talk about their new textbook",
          "check an exercise in pairs",
        ],
        answer: 2,
      },
      {
        q: "What are the friends going to do together on Saturday?",
        opts: ["have a cycle ride", "cook some special food", "go for a walk"],
        answer: 2,
      },
    ],
  },
  5: {
    title: "Part 5 信息匹配题",
    instruction: "听男孩介绍朋友们未来想做的工作，为每个人选择对应职业。",
    type: "match",
    options: [
      "actor",
      "chef",
      "dentist",
      "doctor",
      "farmer",
      "musician",
      "teacher",
      "tour guide",
    ],
    items: [
      { q: "Sally", answer: 7 },
      { q: "Peter", answer: 4 },
      { q: "Amy", answer: 6 },
      { q: "Tom", answer: 1 },
      { q: "Jane", answer: 2 },
    ],
  },
  3: {
    title: "Part 3 长篇听力题",
    instruction: "听 Teresa 和 Daniel 讨论学校写作比赛，选择正确答案。",
    type: "mcq",
    items: [
      { q: "What has Teresa decided to write about?", opts: ["a place she visited", "a film she watched", "a person she knows"], answer: 2 },
      { q: "How many words do students have to write for the competition?", opts: ["500 or less", "between 500 and 1000", "as many as they want"], answer: 0 },
      { q: "How did Daniel feel after he finished his writing?", opts: ["worried", "excited", "tired"], answer: 0 },
      { q: "What’s the prize for winning the competition?", opts: ["a laptop", "a tablet", "some books"], answer: 1 },
      { q: "Teresa thinks she is good at", opts: ["spelling.", "writing stories.", "describing places."], answer: 1 },
    ],
  },
  4: {
    title: "Part 3 长篇听力题",
    instruction: "听 Maria 和 Alex 讨论参观科学博物馆，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Maria went to the museum", opts: ["on Sunday.", "on Monday.", "on Tuesday."], answer: 1 },
      { q: "Alex usually goes to the museum with his", opts: ["class.", "friends.", "family."], answer: 2 },
      { q: "Alex usually travels to the museum", opts: ["by bike.", "by bus.", "on foot."], answer: 0 },
      { q: "What did Maria prefer at the museum?", opts: ["talking to the guide", "watching a video", "making a model"], answer: 1 },
      { q: "In the café, Maria had", opts: ["a cake.", "an ice cream.", "a drink."], answer: 2 },
    ],
  },
  3: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "Who is the boy meeting?", opts: ["his brother", "his uncle", "his cousin"], answer: 2 },
      { q: "What’s the girl surprised about?", opts: ["how warm the weather is", "what the boy is wearing", "how kind her teachers were"], answer: 0 },
      { q: "What does she want Adam to do?", opts: ["lend her something", "explain something to her", "give someone a message"], answer: 1 },
      { q: "What activity are they going to do?", opts: ["walking", "fishing", "cycling"], answer: 2 },
      { q: "What did the girl think about the film?", opts: ["The music was too loud.", "The story was difficult to understand.", "The actors didn’t speak clearly enough."], answer: 0 },
    ],
  },
  4: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "What does the teacher tell them?", opts: ["They’ve got less work to do.", "They should do more exercise.", "They’ve got more time to study."], answer: 2 },
      { q: "What’s Emily’s mum doing?", opts: ["making a shopping list", "explaining how to cook a dish", "deciding what they’re going to eat"], answer: 2 },
      { q: "What job does Dan’s mum do?", opts: ["She’s a guide.", "She’s a receptionist.", "She’s a shop assistant."], answer: 0 },
      { q: "What will they do today?", opts: ["visit the hospital", "go to the train station", "buy some stamps"], answer: 2 },
      { q: "What did they do together?", opts: ["visit the countryside", "do a sport", "have a meal"], answer: 1 },
    ],
  },
  3: {
    options: ["basketball", "cycling", "golf", "hockey", "snowboarding", "swimming", "tennis", "volleyball"],
    items: [
      { q: "Vicky", answer: 5 },
      { q: "Oliver", answer: 2 },
      { q: "Karen", answer: 7 },
      { q: "Mike", answer: 6 },
      { q: "Ellie", answer: 4 },
    ],
  },
  4: {
    options: ["backpack", "basketball", "book", "bracelet", "poster", "scarf", "tablet", "tent"],
    items: [
      { q: "mum", answer: 7 },
      { q: "brother", answer: 4 },
      { q: "grandma", answer: 0 },
      { q: "sister", answer: 5 },
      { q: "uncle", answer: 3 },
    ],
  },
};

const OFFICIAL_PART2_SETS = {
  20:{title:'Part 2 信息填空题',instruction:'听旅游巴士司机介绍动物园参观安排，填写一个单词、数字或时间。',type:'blanks',items:[
    {q:'Langate Animal Park — Famous for:',answer:['monkey','monkeys'],show:'monkeys'},{q:'Langate Animal Park — Good place to take photos:',answer:['river','the river'],show:'river'},{q:'Langate Animal Park — Start time of guide’s talk: ___ a.m.',answer:['10.15','10:15','ten fifteen','quarter past ten'],show:'10:15'},{q:'Langate Animal Park — Cost of lunch: €',answer:['8.99','€8.99'],show:'8.99'},{q:'Langate Animal Park — Wait for coach at entrance called:',answer:['Chepstow','chepstow'],show:'Chepstow'}]},
  19:{title:'Part 2 信息填空题',instruction:'听 Maria 留给 Bill 的生日派对留言，填写一个单词、数字或时间。',type:'blanks',items:[
    {q:'Tom’s birthday party — Time guests arrive: ___ p.m.',answer:['8','eight','8.00','8:00'],show:'8:00'},{q:'Tom’s birthday party — Address: 26 ___ Road',answer:['Ludlow','ludlow'],show:'Ludlow'},{q:'Tom’s birthday party — Food: ___ and cake',answer:['snacks','snack'],show:'snacks'},{q:'Tom’s birthday party — Type of music:',answer:['pop'],show:'pop'},{q:'Tom’s birthday party — Maria’s phone number:',answer:['07712657315','07712 657315'],show:'07712 657315'}]},
  18:{title:'Part 2 信息填空题',instruction:'听广播中的短篇故事比赛介绍，填写一个单词、数字或日期。',type:'blanks',items:[
    {q:'Short story competition — First prize:',answer:['computer','a computer'],show:'computer'},{q:'Short story competition — Number of words:',answer:['750','seven hundred and fifty'],show:'750'},{q:'Short story competition — Story must include the word:',answer:['snow'],show:'snow'},{q:'Short story competition — Last date to send story:',answer:['19 June','19th June','June 19','June 19th'],show:'19 June'},{q:'Short story competition — Upload to: ___ .com',answer:['CARROW','carrow'],show:'CARROW'}]},
  17:{title:'Part 2 信息填空题',instruction:'听一段关于参加曲棍球比赛的电话留言，填写一个单词、数字、日期或时间。',type:'blanks',items:[
    {q:'Hockey match — Day:',answer:['Friday','friday'],show:'Friday'},{q:'Hockey match — Name of village:',answer:['Ledbury','ledbury'],show:'Ledbury'},{q:'Hockey match — Travel to village by:',answer:['car','a car'],show:'car'},{q:'Hockey match — Take:',answer:['drinks','drink'],show:'drinks'},{q:'Hockey match — Time match begins:',answer:['8.45','8:45','20.45','20:45','eight forty-five','quarter to nine'],show:'8:45'}]},
  16:{title:'Part 2 信息填空题',instruction:'听当地学院介绍音乐课程，填写一个单词、数字、日期或时间。',type:'blanks',items:[
    {q:'Music classes — Day of class:',answer:['Wednesday','wednesday'],show:'Wednesday'},{q:'Music classes — Time class starts: ___ p.m.',answer:['6.15','6:15','six fifteen','quarter past six'],show:'6:15'},{q:'Music classes — Room for beginners’ class:',answer:['E29','E-29','e29','e-29'],show:'E29'},{q:'Music classes — Teacher’s name: Mrs ___',answer:['Halliday','halliday'],show:'Halliday'},{q:'Music classes — Month of rock concert:',answer:['December','december'],show:'December'}]},
  15:{title:'Part 2 信息填空题',instruction:'听本地广播介绍一部新电影，填写一个单词、数字、日期或时间。',type:'blanks',items:[
    {q:'New film Runner — Subject of film:',answer:['doctor','a doctor'],show:'doctor'},{q:'New film Runner — Name of cinema:',answer:['Caratopia','caratopia'],show:'Caratopia'},{q:'New film Runner — Start date:',answer:['24 July','24th July','July 24','July 24th'],show:'24 July'},{q:'New film Runner — Start time: ___ p.m.',answer:['8.15','8:15','eight fifteen','quarter past eight'],show:'8:15'},{q:'New film Runner — Cost of student ticket: £',answer:['10.50','£10.50'],show:'10.50'}]},
  14: {
    title: "Part 2 信息填空题",
    instruction: "听帆船俱乐部旅行通知，填写一个单词、数字、姓名或时间。",
    type: "blanks",
    items: [
      { q: "Sailing club trip — Time to arrive back at club: ___ p.m.", answer: ["6.30", "6:30", "six thirty", "half past six", "half past 6"], show: "6:30" },
      { q: "Sailing club trip — Name of café for lunch:", answer: ["Sky", "sky"], show: "Sky" },
      { q: "Sailing club trip — Bring:", answer: ["swimsuit", "a swimsuit"], show: "swimsuit" },
      { q: "Sailing club trip — Number of people:", answer: ["18", "eighteen"], show: "18" },
      { q: "Sailing club trip — Secretary’s name: Ms ___", answer: ["Harcourt", "harcourt"], show: "Harcourt" },
    ],
  },
  13: {
    title: "Part 2 信息填空题",
    instruction: "听城市观光巴士的介绍，填写一个单词、数字或时间。",
    type: "blanks",
    items: [
      { q: "City Bus Tours — Time last tour starts: ___ p.m.", answer: ["4.20", "4:20", "twenty past four", "four twenty"], show: "4:20" },
      { q: "City Bus Tours — Colour of tour bus stop:", answer: ["blue"], show: "blue" },
      { q: "City Bus Tours — Length of tour: ___ minutes", answer: ["90", "ninety"], show: "90" },
      { q: "City Bus Tours — Where to use ticket for discount:", answer: ["museum", "the museum"], show: "museum" },
      { q: "City Bus Tours — Place tour ends:", answer: ["theatre", "theater", "the theatre", "the theater"], show: "theatre" },
    ],
  },
  1: {
    title: "Part 2 信息填空题",
    instruction: "听一段关于青少年广播营的介绍，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "Date first course starts:", answer: ["25 June", "June 25", "25th June", "June 25th"], show: "25 June" },
      { q: "Learn to write:", answer: ["plays", "play"], show: "plays" },
      { q: "Meet world famous:", answer: ["band", "a band"], show: "band" },
      { q: "Each person receives:", answer: ["T-shirt", "t shirt", "tshirt"], show: "T-shirt" },
      { q: "Discount price: $", answer: ["238", "$238"], show: "238" },
    ],
  },
  2: {
    title: "Part 2 信息填空题",
    instruction: "听老师布置家庭作业，填写一个单词或数字。",
    type: "blanks",
    items: [
      { q: "Find out about:", answer: ["bees", "bee"], show: "bees" },
      { q: "Textbook page:", answer: ["67"], show: "67" },
      { q: "Website address: www. ______ .com", answer: ["nature"], show: "nature" },
      { q: "Number of words to write:", answer: ["275"], show: "275" },
      { q: "Include:", answer: ["drawing", "a drawing"], show: "drawing" },
    ],
  },
  3: {
    title: "Part 2 信息填空题",
    instruction: "听学校测验的通知，填写一个单词、数字、姓名或时间。",
    type: "blanks",
    items: [
      { q: "Questions about:", answer: ["history"], show: "history" },
      { q: "Number of people in each team:", answer: ["5", "five"], show: "5" },
      { q: "Prize:", answer: ["cup", "a cup"], show: "cup" },
      { q: "Give names to:", answer: ["Hartley", "Mr Hartley"], show: "Mr Hartley" },
      { q: "Time to arrive:", answer: ["6.10", "6:10", "ten past six"], show: "6:10" },
    ],
  },
  4: {
    title: "Part 2 信息填空题",
    instruction: "听 Sophia 留给朋友的度假留言，填写一个单词或电话号码。",
    type: "blanks",
    items: [
      { q: "Name of hotel: The", answer: ["Stafford"], show: "The Stafford" },
      { q: "Not available at hotel:", answer: ["bikes", "bike"], show: "bikes" },
      { q: "For journey, bring:", answer: ["book", "a book"], show: "book" },
      { q: "Weather will be:", answer: ["clouds", "cloudy"], show: "cloudy" },
      { q: "Sophia’s sister’s phone number:", answer: ["0776 3214", "07763214"], show: "0776 3214" },
    ],
  },
  5: {
    title: "Part 2 信息填空题",
    instruction: "听老师介绍学校自然之旅，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "School nature trip — Nature trip to:", answer: ["forest", "the forest"], show: "forest" },
      { q: "School nature trip — Time to arrive at school by: ___ a.m.", answer: ["8:35", "8.35", "eight thirty-five", "eight thirty five"], show: "8:35" },
      { q: "School nature trip — Should wear:", answer: ["coat", "a coat"], show: "coat" },
      { q: "School nature trip — Name of guide: Dan ___", answer: ["Pilsey"], show: "Pilsey" },
      { q: "School nature trip — Animal to look for:", answer: ["horse", "horses"], show: "horse(s)" },
    ],
  },
  6: {
    title: "Part 2 信息填空题",
    instruction: "听老师介绍体育场参观活动，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "Stadium tour — Name of tour guide: Jacob ___", answer: ["Jackster"], show: "Jackster" },
      { q: "Stadium tour — Colour of guide’s T-shirt:", answer: ["yellow"], show: "yellow" },
      { q: "Stadium tour — Length of tour: ___ minutes", answer: ["45", "forty-five", "forty five"], show: "45" },
      { q: "Stadium tour — Free gift:", answer: ["scarf", "a scarf"], show: "scarf" },
      { q: "Stadium tour — Type of art at exhibition:", answer: ["drawings", "drawing"], show: "drawings" },
    ],
  },
  7: {
    title: "Part 2 信息填空题",
    instruction: "听老师介绍国家公园徒步活动，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "School walking trip — Time to be at school: ___ a.m.", answer: ["7:45", "7.45", "seven forty-five", "seven forty five", "a quarter to eight"], show: "7:45" },
      { q: "School walking trip — Bring:", answer: ["sandwiches", "sandwich", "some sandwiches"], show: "sandwiches" },
      { q: "At the National Park, students receive:", answer: ["map", "a map"], show: "map" },
      { q: "School walking trip — Should wear:", answer: ["T-shirt", "t shirt", "tshirt", "a T-shirt", "a t shirt"], show: "T-shirt" },
      { q: "School walking trip — Total cost: £", answer: ["6.30", "6:30", "six pounds thirty", "six thirty"], show: "6.30" },
    ],
  },
  8: {
    title: "Part 2 信息填空题",
    instruction: "听老师介绍学校图书馆的新变化，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "School library — Get library cards from: ___ desk", answer: ["front", "the front"], show: "front" },
      { q: "School library — On Tuesdays, library closes at: ___ p.m.", answer: ["7:45", "7.45", "seven forty-five", "seven forty five", "a quarter to eight"], show: "7:45" },
      { q: "School library — Name of library manager: Mrs ___", answer: ["Carter"], show: "Carter" },
      { q: "School library — Can use own:", answer: ["tablet", "tablets", "a tablet"], show: "tablet" },
      { q: "School library — Subject of first exhibition:", answer: ["fashion"], show: "fashion" },
    ],
  },
  9: {
    title: "Part 2 信息填空题",
    instruction: "听 Mandy 留给朋友的语音留言，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "Sunday at the beach — Take:", answer: ["kite", "a kite"], show: "kite" },
      { q: "Sunday at the beach — Place for lunch:", answer: ["park", "a park", "the park"], show: "park" },
      { q: "Sunday at the beach — Sport we'll play:", answer: ["volleyball"], show: "volleyball" },
      { q: "Sunday at the beach — Cost of boat trip on Sunday: £ ___ each", answer: ["3.75", "3.75p", "three seventy-five", "three seventy five"], show: "3.75" },
      { q: "Sunday at the beach — Arrive at Mandy's home at: ___ p.m.", answer: ["6.30", "6:30", "six thirty", "half past six"], show: "6.30" },
    ],
  },
  10: {
    title: "Part 2 信息填空题",
    instruction: "听 Jake 留给朋友的语音留言，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "Computer game afternoon at Jake's house — Jake's address: 51 ___ Street", answer: ["Sherby"], show: "Sherby" },
      { q: "Computer game afternoon at Jake's house — Travel to Jake's house by:", answer: ["tram", "the tram"], show: "tram" },
      { q: "Computer game afternoon at Jake's house — Time to arrive: ___ p.m.", answer: ["1.45", "1:45", "quarter to two", "a quarter to two"], show: "1.45" },
      { q: "Computer game afternoon at Jake's house — Bring: Jake's ___", answer: ["gloves", "glove"], show: "gloves" },
      { q: "Computer game afternoon at Jake's house — Jake's mum's phone number:", answer: ["05568129437", "05568 129437"], show: "05568 129437" },
    ],
  },
  11: {
    title: "Part 2 信息填空题",
    instruction: "听老师介绍艺术比赛，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "Art Competition — Title of painting:", answer: ["Buildings", "building"], show: "Buildings" },
      { q: "Art Competition — Final date to enter competition:", answer: ["18 May", "May 18", "18th May", "May 18th"], show: "18 May" },
      { q: "Art Competition — Person who will choose the winner: Jacob ___", answer: ["Fossley"], show: "Fossley" },
      { q: "Art Competition — Jacob's job:", answer: ["photographer", "a photographer"], show: "photographer" },
      { q: "Art Competition — Prize:", answer: ["skateboard", "a skateboard"], show: "skateboard" },
    ],
  },
  12: {
    title: "Part 2 信息填空题",
    instruction: "听老师介绍参观玻璃工厂的活动，填写一个单词、数字、日期或时间。",
    type: "blanks",
    items: [
      { q: "Glass Factory Trip — Factory famous for: ___ made of glass", answer: ["bowls", "bowl"], show: "bowls" },
      { q: "Glass Factory Trip — Factory advert shows drawing of:", answer: ["dolphin", "a dolphin"], show: "dolphin" },
      { q: "Glass Factory Trip — Leave school at: ___ a.m.", answer: ["8.30", "8:30", "eight thirty", "half past eight"], show: "8.30" },
      { q: "Glass Factory Trip — Take:", answer: ["notebooks", "notebook", "your notebooks"], show: "notebooks" },
      { q: "Glass Factory Trip — Surname of teacher to contact:", answer: ["Stapely"], show: "Stapely" },
    ],
  },
};

const OFFICIAL_PART3_SETS = {
  20:{title:'Part 3 长篇听力题',instruction:'听 Sophie 和 John 讨论一年一度的邻里野餐，选择正确答案。',type:'mcq',items:[
    {q:'What does Sophie like most about the picnic?',opts:['eating great food','spending time outdoors','becoming better friends with people'],answer:2},{q:'Where is the picnic going to be this year?',opts:['a park','a lake','a garden'],answer:0},{q:'What happened at last year’s picnic?',opts:['The weather wasn’t very good.','Some people didn’t enjoy themselves.','Some people didn’t know where to go.'],answer:2},{q:'What does Sophie want guests to bring?',opts:['something to do','something to eat with','something to barbecue'],answer:0},{q:'Which job does John say he’ll do?',opts:['speak to people','put signs in the area','send a group email'],answer:1}]},
  19:{title:'Part 3 长篇听力题',instruction:'听 Andy 和 Sara 讨论一次徒步活动，选择正确答案。',type:'mcq',items:[
    {q:'Where do they agree to meet?',opts:['at a car park','at a playground','at a bus stop'],answer:1},{q:'What will the weather be like for the walk?',opts:['sunny','windy','rainy'],answer:0},{q:'What will Sara bring?',opts:['a map','a backpack','a drink'],answer:2},{q:'What does Andy think about the Bridge Café?',opts:['The prices are low.','Its food is good.','It’s easy to get to.'],answer:1},{q:'How does Sara feel about going on the walk?',opts:['pleased to get lots of exercise','interested to see the lovely views','happy to spend time with her friend'],answer:2}]},
  18:{title:'Part 3 长篇听力题',instruction:'听 Ben 和 Lily 讨论母亲的生日安排，选择正确答案。',type:'mcq',items:[
    {q:'When will they go shopping for a present?',opts:['tomorrow morning','tomorrow afternoon','tomorrow evening'],answer:2},{q:'Where do they decide to go for some earrings?',opts:['a department store','the market','a jewellery shop'],answer:0},{q:'What should they do on their mum’s birthday?',opts:['have a party for her','take her out for a meal','go to the park for a barbecue'],answer:1},{q:'How does Lily feel about inviting their mum’s best friend?',opts:['excited about seeing her','worried she will not come','sure their mum will like the idea'],answer:2},{q:'What sort of drink will Ben make?',opts:['banana and cream','lemon and orange','melon and honey'],answer:0}]},
  17:{title:'Part 3 长篇听力题',instruction:'听 Sue 和 Peter 谈论一家餐厅，选择正确答案。',type:'mcq',items:[
    {q:'Why didn’t Peter go to the restaurant with Sue?',opts:['He had to do some work.','He was too ill.','He forgot to go.'],answer:0},{q:'How long has the restaurant been open?',opts:['one year','two years','five years'],answer:2},{q:'What did Sue and her friends eat at the restaurant?',opts:['steak','pizza','pasta'],answer:1},{q:'What nationality is the chef at the restaurant?',opts:['American','Spanish','Italian'],answer:0},{q:'What does Peter say about his plans to go to the restaurant?',opts:['It doesn’t matter which day he goes.','He’s afraid the restaurant will be too crowded.','He’d like Sue’s advice about the dishes.'],answer:2}]},
  16:{title:'Part 3 长篇听力题',instruction:'听 Ben 和 Emma 谈论 Ben 的新公寓，选择正确答案。',type:'mcq',items:[
    {q:'When did Ben go to live in his new flat?',opts:['two days ago','two weeks ago','two months ago'],answer:1},{q:'How is Ben’s new flat different from his old one?',opts:['It is nearer to his job.','It has better views.','It is larger.'],answer:0},{q:'Which room in the new flat does Ben like best?',opts:['the bathroom','the living room','the bedroom'],answer:1},{q:'What has Emma given Ben for his new flat?',opts:['shelves','carpets','curtains'],answer:0},{q:'Who lives in the flat next to Ben’s?',opts:['a mechanic','a journalist','a police officer'],answer:1}]},
  15:{title:'Part 3 长篇听力题',instruction:'听 Phil 和 Jess 谈论一家新体育中心，选择正确答案。',type:'mcq',items:[
    {q:'How did Jess find out about the new sports centre?',opts:['She saw a poster.','A friend of hers works there.','She heard about it on the radio.'],answer:0},{q:'What doesn’t Phil like about the sports centre?',opts:['It’s too noisy.','It’s very expensive.','It’s not big enough.'],answer:1},{q:'Phil prefers to go to the sports centre',opts:['early in the morning.','at the weekend.','during working hours.'],answer:0},{q:'Why is the new swimming pool closed at the moment?',opts:['They are cleaning it.','There’s a competition.','The water’s cold.'],answer:2},{q:'Members of the sports centre',opts:['should buy special shoes.','can get a discount in the café.','needn’t pay for exercise classes.'],answer:1}]},
  14: {
    title: "Part 3 长篇听力题",
    instruction: "听 Victoria 和 Daniel 谈论公司的新办公楼，选择正确答案。",
    type: "mcq",
    items: [
      { q: "How will staff find out about the new building?", opts: ["in an email", "at a meeting", "at a company meal"], answer: 1 },
      { q: "Why is the company moving to a new building?", opts: ["to save money", "to be in the town centre", "to have larger offices"], answer: 0 },
      { q: "When will staff start working in the new building?", opts: ["the end of May", "the beginning of July", "the middle of August"], answer: 2 },
      { q: "What does Daniel think the staff will enjoy most about the new area?", opts: ["the restaurants", "the shops", "the gym"], answer: 2 },
      { q: "What does Daniel need to order next?", opts: ["keys", "signs", "furniture"], answer: 0 },
    ],
  },
  13: {
    title: "Part 3 长篇听力题",
    instruction: "听 Richard 和 Barbara 谈论一家新超市，选择正确答案。",
    type: "mcq",
    items: [
      { q: "What surprised Richard when he went to the supermarket?", opts: ["its size", "the time it opens", "the number of people there"], answer: 0, explanation: "Richard 没想到超市里面这么大。" },
      { q: "This week, there are discounts on", opts: ["meat.", "fruit.", "vegetables."], answer: 1, explanation: "每周优惠品类不同，本周是水果。" },
      { q: "What did Richard like most about the supermarket?", opts: ["the café", "the staff", "the music"], answer: 2, explanation: "他没时间去咖啡厅，但很喜欢超市里的音乐。" },
      { q: "What problem did Richard have at the supermarket?", opts: ["He didn’t have any cash.", "He had to wait before he could pay.", "He couldn’t use his credit card."], answer: 2, explanation: "他只能付现金，无法使用自己更习惯的信用卡。" },
      { q: "What does Barbara say about the car park?", opts: ["It’s only for customers.", "It’s quite far from the entrance.", "It’s difficult to find."], answer: 1, explanation: "Barbara 说停车场离入口有一段距离。" },
    ],
  },
  12: {
    title: "Part 3 长篇听力题",
    instruction: "听 Mark 和 Jessica 谈论他们参加的音乐节，选择正确答案。",
    type: "mcq",
    items: [
      { q: "How did they get to the festival?", opts: ["by coach", "by car", "by train"], answer: 1, explanation: "他们很高兴妈妈能开车送他们去；火车站距离很远、公交车很慢。" },
      { q: "Where did they stay at the festival?", opts: ["on a campsite", "in a small hotel", "in a family member's home"], answer: 2, explanation: "Mark 提过下次想带帐篷露营，但这次他们住在 Uncle Jim 的公寓里。" },
      { q: "What didn't Mark like about the festival?", opts: ["There were too many people.", "It was very expensive.", "The weather was bad."], answer: 0, explanation: "天气很好，费用也比大多数音乐节低；Mark 唯一觉得不好的是现场过于拥挤。" },
      { q: "What do they agree about the singer called Amelia?", opts: ["Her songs were unusual.", "She looked wonderful.", "She was their favourite musician."], answer: 1, explanation: "两人都认为 Amelia 很漂亮；Jessica 最喜欢她，而 Mark 最喜欢最后那个乐队，所以不能选 C。" },
      { q: "What did Jessica buy from the festival shop?", opts: ["something to eat", "something to read", "something to wear"], answer: 2, explanation: "Jessica 也买了一条围巾，是可以穿戴的物品；巧克力是 Mark 买给妈妈的。" },
    ],
  },
  11: {
    title: "Part 3 长篇听力题",
    instruction: "听 Martha 和 Dan 谈论他们参加的班级旅行，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Where did Dan and Martha go on their school trip this year?", opts: ["a river", "the sea", "a lake"], answer: 2, explanation: "Dan 明确说今年的学校旅行去了 lake；海边是去年的地点，河边是另一班去的地方。" },
      { q: "Which activity did Martha enjoy the most?", opts: ["cycling", "horse riding", "windsurfing"], answer: 0, explanation: "Martha 虽然想将来学习帆板，但这次最喜欢的是在小路上骑自行车。" },
      { q: "What was hard for Dan during the sailing lesson?", opts: ["remembering the instructions", "working with his classmates", "understanding the teacher"], answer: 0, explanation: "老师讲得很清楚、同学也互相帮助；Dan 困难的是不断忘记下一步该做什么。" },
      { q: "Why didn't Martha go swimming?", opts: ["She doesn't like deep water.", "The weather wasn't warm enough.", "She didn't take a swimsuit with her."], answer: 1, explanation: "Martha 带了游泳用品，也不怕深水；她认为当天太冷。" },
      { q: "What do Martha and Dan agree about the barbecue?", opts: ["It was in a good place.", "It finished too soon.", "It was quite boring."], answer: 1, explanation: "Martha 说他们不得不很早离开，Dan 也表示同意；两人都不认为活动无聊。" },
    ],
  },
  10: {
    title: "Part 3 长篇听力题",
    instruction: "听 Emma 和 Jamie 计划去市场，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Who can take Emma and Jamie to the market?", opts: ["Emma's mum", "Emma's neighbour", "Emma's cousin"], answer: 1, explanation: "Emma 的妈妈要去看表姐；住在隔壁的 Annie 可以带他们去市场。" },
      { q: "When will they pick Jamie up?", opts: ["10.15", "10.30", "10.45"], answer: 2, explanation: "Emma 说会在 quarter to eleven 到 Jamie 家，即 10:45。" },
      { q: "What does Emma want to buy?", opts: ["jewellery", "clothes", "toys"], answer: 0, explanation: "Emma 已借到连衣裙，需要买项链和耳环搭配，所以选 jewellery。" },
      { q: "Why does Jamie like the computer games on the market?", opts: ["They're cheap.", "They're new.", "They're unusual."], answer: 2, explanation: "Jamie 说这些游戏在其他地方买不到，新游戏到处都有，因此它们很特别。" },
      { q: "Emma and Jamie agree that the Moon Café", opts: ["has friendly staff.", "serves great food.", "is very noisy."], answer: 1, explanation: "两人都认可那里的汉堡很好吃；对服务员和音乐的看法并不完全一致。" },
    ],
  },
  9: {
    title: "Part 3 长篇听力题",
    instruction: "听 Ned 和 Aisha 谈论他们在新学校的第一周，选择正确答案。",
    type: "mcq",
    items: [
      { q: "When did they meet each other for the first time?", opts: ["on the way to school", "in a lesson", "in the lunch break"], answer: 1, explanation: "两人说在第一节课时坐在一起，因此是在一节课上第一次见面。" },
      { q: "How did Ned feel before he started the new school?", opts: ["scared", "excited", "lucky"], answer: 1, explanation: "Ned 说自己一点也不害怕，并同意 Aisha 说的 excited。" },
      { q: "Ned and Aisha agree that", opts: ["the teachers are very kind.", "their classmates are all very nice.", "the school building is very attractive."], answer: 0, explanation: "两人都认为老师很乐于帮助他们；同学并非每一个都很好，校舍也不漂亮。" },
      { q: "Which lesson doesn't Aisha like much?", opts: ["geography", "maths", "history"], answer: 2, explanation: "Aisha 说 geography 现在是她最喜欢的科目，而 history 是她唯一不太喜欢的科目。" },
      { q: "What do they both say about homework at the new school?", opts: ["They got less in their old schools.", "It takes a long time to do.", "Some of it is quite easy."], answer: 0, explanation: "两人都说旧学校的作业没有这么多，因此选 A。" },
    ],
  },
  1: {
    title: "Part 3 长篇听力题",
    instruction: "听 Edward 和 Michaela 谈论舞蹈课，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Where does Edward go for his dance classes?", opts: ["a college", "a dance school", "a sports centre"], answer: 0 },
      { q: "Michaela started going to classes", opts: ["one week ago.", "four weeks ago.", "eight weeks ago."], answer: 1 },
      { q: "Why does Edward like his teacher?", opts: ["She’s very funny.", "She gives students presents.", "She explains things clearly."], answer: 1 },
      { q: "What does Michaela wear to her dance classes?", opts: ["trousers and a shirt", "shorts and a T-shirt", "trainers and a sweater"], answer: 0 },
      { q: "What does Edward enjoy most about the classes?", opts: ["learning new dances", "listening to the music", "meeting his friends"], answer: 2 },
    ],
  },
  2: {
    title: "Part 3 长篇听力题",
    instruction: "听 Connie 和 Tom 讨论学校假期活动俱乐部，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Connie thinks that the club is best for children aged", opts: ["over 13.", "from 11 to 13.", "as young as 9."], answer: 1 },
      { q: "What does Connie say about the club?", opts: ["All the coaches are friendly.", "The activities can be hard.", "She knows everyone there."], answer: 1 },
      { q: "Which activity is Tom interested in trying?", opts: ["swimming", "playing football", "sailing"], answer: 2 },
      { q: "Connie says Tom needs to take", opts: ["some money.", "a towel.", "his own lunch."], answer: 1 },
      { q: "The shop that sells sports clothes is opposite", opts: ["the cinema.", "the hospital.", "the bank."], answer: 0 },
    ],
  },
  5: {
    title: "Part 3 长篇听力题",
    instruction: "听两位朋友谈论他们的国际象棋俱乐部，选择正确答案。",
    type: "mcq",
    items: [
      { q: "How did the boy find out about the chess club?", opts: ["His father told him about it.", "He saw an advert in a magazine.", "A teacher gave him information about it."], answer: 0, explanation: "爸爸在杂志上看到广告后告诉了男孩；男孩是从爸爸那里得知的。" },
      { q: "What do they both like most about the club?", opts: ["playing in club competitions", "learning from the club’s coach", "being with club members"], answer: 2, explanation: "教练和比赛都被提到，但两人都认同和其他成员在一起最好。" },
      { q: "Why didn’t the girl go to the club last week?", opts: ["She had too much homework.", "She had to visit someone.", "She had a headache."], answer: 1, explanation: "头痛的是她的奶奶；女孩上周是去医院探望奶奶。" },
      { q: "How did the boy feel at the club last week?", opts: ["sorry that he couldn’t take photos", "angry because he lost a match", "tired because he walked there"], answer: 0, explanation: "男孩输了比赛却觉得比赛不错；他遗憾的是忘带手机，没能拍队伍照片。" },
      { q: "What do they decide to do together after the club next week?", opts: ["go to the cinema", "have a snack", "go shopping"], answer: 1, explanation: "女孩要去看电影，男孩那时要踢足球；他们约好之前在购物中心的咖啡馆吃三明治。" },
    ],
  },
  6: {
    title: "Part 3 长篇听力题",
    instruction: "听 Miriam 询问爵士舞课程的信息，选择正确答案。",
    type: "mcq",
    items: [
      { q: "When can Miriam join a class?", opts: ["during the holiday", "next term", "at the weekend"], answer: 0, explanation: "学期即将结束，周末课程已满；她能参加的是从 15 日周一开始的假期课程。" },
      { q: "What kind of dance has Miriam done a lot of before?", opts: ["hip hop", "modern", "disco"], answer: 1, explanation: "Miriam 是现代舞高级水平；嘻哈只略有经验，迪斯科是她曾想学但没找到班。" },
      { q: "What shouldn’t Miriam wear for classes?", opts: ["trainers", "jewellery", "a sweater"], answer: 1, explanation: "运动鞋可以穿，入学会收到毛衣；耳环和手镯有危险，应留在家里。" },
      { q: "What will Miriam do in class?", opts: ["choose music to dance to", "watch videos of famous dancers", "work with a partner"], answer: 0, explanation: "有时会拍摄学生帮助进步，但不是观看视频；学生会决定使用哪些歌曲跳舞。" },
      { q: "Why does Miriam want to learn jazz dance?", opts: ["to become a teacher", "to do competitions", "to be in shows"], answer: 2, explanation: "她明确说对比赛不感兴趣，想参加学校演出。" },
    ],
  },
  7: {
    title: "Part 3 长篇听力题",
    instruction: "听 Zac 和 Kirsty 谈论参加羽毛球比赛的出行安排，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Where will they catch the bus?", opts: ["in front of the school", "near some shops", "at the petrol station"], answer: 1, explanation: "他们不在学校门口，而在加油站对面、购物中心外乘车，因此是商店附近。" },
      { q: "What can Kirsty get for Zac?", opts: ["some trainers", "a T-shirt", "some shorts"], answer: 0, explanation: "两人的 T 恤和短裤都需要白色；Zac 的黑色运动鞋可借 Kirsty 哥哥的，因此是运动鞋。" },
      { q: "Zac and Kirsty agree that their new sports teacher is", opts: ["nicer than some teachers.", "easy to understand.", "fun to be with."], answer: 1, explanation: "Zac 说新老师不如其他老师有趣，但他的指示总是清楚，Kirsty 同意。" },
      { q: "What does Zac tell Kirsty to take on the bus?", opts: ["something to listen to", "something to drink", "something to eat"], answer: 1, explanation: "Zac 自己会带音乐，但提醒 Kirsty 车上很热，要带水。" },
      { q: "How does Zac feel about the match?", opts: ["worried his team will play badly", "happy everyone is friendly", "surprised he’s in the team"], answer: 2, explanation: "他认为队伍很强、会赢；令他意外的是自己原本并不觉得够资格参赛。" },
    ],
  },
  8: {
    title: "Part 3 长篇听力题",
    instruction: "听 Johnny 和 Lily 谈论学校博物馆参观，选择正确答案。",
    type: "mcq",
    items: [
      { q: "How did Lily feel when she was at the museum?", opts: ["tired", "bored", "hungry"], answer: 2, explanation: "她原以为科学博物馆可能无聊，但觉得还可以；因为起晚没吃早餐，她一直想着食物。" },
      { q: "The friends travelled to the museum", opts: ["by bus", "by train", "on foot"], answer: 0, explanation: "老师为这次参观订了公交车；Johnny 姐姐的班级才是从火车站一路步行。" },
      { q: "What did Lily enjoy learning about most at the museum?", opts: ["the sky", "electricity", "health"], answer: 2, explanation: "月亮和星星很有趣，电学她已经知道；她最喜欢的是医生如何帮助人们保持健康。" },
      { q: "What did Johnny buy in the museum shop?", opts: ["a book", "a game", "a picture"], answer: 1, explanation: "他觉得图片不错但钱不够；原本看的书也没买，最后选择了游戏。" },
      { q: "What does Lily want to visit on the next school trip?", opts: ["an art exhibition", "a castle", "a farm"], answer: 2, explanation: "Lily 对艺术不感兴趣，也觉得城堡不如乡村有趣；她想了解食物如何种植、动物如何被照顾。" },
    ],
  },
};

const OFFICIAL_PART4_SETS = {
  20:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'What’s the woman’s job?',opts:['engineer','farmer','painter'],answer:0},{q:'Where did the man meet his new friend?',opts:['at work','at a party','at a sports match'],answer:0},{q:'Why do they decide to walk to the cinema?',opts:['There are no buses today.','They want some exercise.','The car isn’t working.'],answer:1},{q:'What problem did the man have on holiday?',opts:['The weather was bad.','The beach was dirty.','The hotel was noisy.'],answer:2},{q:'What did the girl like about her first Chinese lesson?',opts:['the other students','the teacher','the length of the lesson'],answer:1}]},
  19:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'What do the friends agree about exercise?',opts:['Running’s hard.','Walking’s boring.','Cycling’s dangerous.'],answer:1},{q:'What did the woman want to be when she was younger?',opts:['an artist','a journalist','a cook'],answer:0},{q:'Where do the friends agree to go?',opts:['to a concert','to an exhibition','to a film'],answer:0},{q:'Why does the woman want the job?',opts:['The work is interesting.','The people are nice.','The office is near her home.'],answer:1},{q:'Why is the woman happy?',opts:['She met an old friend.','She got an exciting job.','She found a new place to live.'],answer:2}]},
  18:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'What was the only thing the woman liked about her holiday?',opts:['where she stayed','a place she ate at','an activity she did'],answer:0},{q:'Why is the woman upset?',opts:['Her car needs repairing.','She has lost some money.','Someone stole her bicycle.'],answer:0},{q:'What’s the main reason for the radio advertisement?',opts:['to give details about a sale','to give information about a special day','to tell people about new equipment'],answer:1},{q:'What doesn’t the boy like about his painting?',opts:['its size','its colours','its subject'],answer:0},{q:'Why does the girl like the sports blog?',opts:['the sports advice','the online competitions','the information about sports stars'],answer:2}]},
  17:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'What will the man and woman buy?',opts:['something to eat','something to wear','something to read'],answer:2},{q:'Why is the woman phoning her friend?',opts:['to change their plans','to ask to borrow something','to invite her for a meal'],answer:0},{q:'Who did the man see in town?',opts:['a colleague','a neighbour','an old school friend'],answer:2},{q:'Where do the friends decide to go?',opts:['to the forest','to the river','to the beach'],answer:2},{q:'Why is the museum closed now?',opts:['A special guest is visiting it.','Today is a national holiday.','They are painting it.'],answer:0}]},
  16:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'What’s the problem with the man’s computer?',opts:['The computer won’t turn off.','The keyboard isn’t working.','The screen isn’t bright enough.'],answer:2},{q:'Where are they planning to meet the woman’s brother?',opts:['at the railway station','at the airport','at their home'],answer:1},{q:'What was the last place that the explorer visited?',opts:['a mountain','a desert','an island'],answer:0},{q:'Why did the man choose this phone?',opts:['because it’s really light','because it looks modern','because it has a good camera'],answer:2},{q:'How do the colleagues feel after the meeting?',opts:['pleased','worried','tired'],answer:0}]},
  15:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'Why did the woman arrive at the office late?',opts:['The road was closed.','There was a problem with her car.','She couldn’t find her car keys.'],answer:1},{q:'Where will Peter be this Saturday?',opts:['at a party','in another country','on a boat'],answer:1},{q:'What’s different about the music festival this year?',opts:['how long it is','where it is','when it is'],answer:1},{q:'Which subject did they both enjoy at school?',opts:['history','geography','science'],answer:0},{q:"What’s cheaper in the supermarket this week?",opts:['desserts','soft drinks','fruit'],answer:2}]},
  14: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "You will hear Jen telling her friend about her favourite singer, Mikey. What’s just happened?", opts: ["Jen’s seen him on stage.", "Jen’s taken a photo of him.", "Jen’s had a conversation with him."], answer: 1 },
      { q: "Why didn’t Alex do well in the tennis competition?", opts: ["He was thirsty.", "He was hungry.", "He was tired."], answer: 2 },
      { q: "What advice does the man give the woman at the tourist information centre?", opts: ["Don’t miss a special exhibition.", "Don’t visit the museum today.", "Don’t buy tickets too late."], answer: 1 },
      { q: "What didn’t the woman do at the weekend?", opts: ["watch TV", "play sport", "go shopping"], answer: 1 },
      { q: "The man is talking about his new flat. What’s he going to do now?", opts: ["paint the flat", "turn the heating on", "move some furniture"], answer: 1 },
    ],
  },
  13: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "You will hear a woman talking on the radio about her job. What’s her job?", opts: ["engineer", "mechanic", "pilot"], answer: 0 },
      { q: "You will hear a woman talking to a friend about a film. What does she say about the film?", opts: ["It was funny.", "It was true.", "It was scary."], answer: 2 },
      { q: "You will hear a sports coach talking to some footballers. What would the coach like them to become better at?", opts: ["running with the ball", "getting goals", "working as a team"], answer: 0 },
      { q: "You will hear two friends talking about a website. Why does Julia prefer to buy clothes from the website?", opts: ["It offers the latest fashions.", "The discounts are excellent.", "Orders always arrive quickly."], answer: 1 },
      { q: "You will hear two colleagues talking together. Why was the man not at the meeting this morning?", opts: ["He had to go to the dentist.", "He had other work to do.", "He wasn’t feeling well."], answer: 1 },
    ],
  },
  12: {
    title: "Part 4 短篇听力题",
    instruction: "听五段简短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "What is the visitor's job?", opts: ["a tour guide", "a musician", "a photographer"], answer: 0, explanation: "说话者提到摄影师和小提琴手都是干扰信息；来访者的工作是带不同的人参观有趣的地方，因此是导游。" },
      { q: "What is the girl reading about?", opts: ["an unusual animal", "a famous musician", "an exciting journey"], answer: 2, explanation: "书讲的是一位少女骑摩托车穿越非洲的经历；狮子和歌曲都只是故事中的细节。" },
      { q: "What does the teacher want them to do?", opts: ["tidy the classroom", "copy something into their books", "get ready to go home"], answer: 1, explanation: "整理书本、笔和纸张只是开始写作文前的安排；老师要大家坐下开始写作，所以选 B。" },
      { q: "How does the girl feel about her homework?", opts: ["pleased with the information she got", "worried that she hasn't written enough", "sure that her teacher will like it"], answer: 0, explanation: "女孩说她从网上视频中找到了有用信息；她只是希望老师会喜欢，并没有确定，也没有担心篇幅不够。" },
      { q: "Why is he talking to his class about the book?", opts: ["One of them has lost it.", "They're going to read it together.", "The writer is someone they probably know."], answer: 2, explanation: "书并不属于任何学生，也不是全班共读；作者 Mrs Lam 曾在学校任教，学生可能认识她。" },
    ],
  },
  11: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "What kind of present does she decide to buy?", opts: ["clothes", "food", "jewellery"], answer: 2, explanation: "巧克力和 T 恤都只是被提到；女孩最后决定买耳环，因此是 jewellery。" },
      { q: "What does he want her to do for him?", opts: ["buy something", "repair something", "return something"], answer: 2, explanation: "男孩自行车爆胎，来不及步行去图书馆；他请妈妈帮忙归还图书。" },
      { q: "What did he enjoy most?", opts: ["taking part in a sports event", "watching a film", "playing music"], answer: 0, explanation: "历史纪录片让他觉得有点无聊，下午也没带吉他；午间乒乓球比赛才是他最喜欢的部分。" },
      { q: "What kind of club do they both enjoy going to?", opts: ["a sports club", "an art club", "a music club"], answer: 0, explanation: "两人都参加篮球活动；绘画、合唱和爵士乐团只有其中一人参加或已停止。" },
      { q: "What didn't they like about the film?", opts: ["its length", "one of its stars", "the way it ended"], answer: 1, explanation: "他们认为电影不长、结局也有趣；两人不喜欢的是男主角。" },
    ],
  },
  10: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "Why couldn't the girl go to the party?", opts: ["She was feeling ill.", "She needed to do her homework.", "She had to look after her sister."], answer: 2, explanation: "女孩缺席不是因为生病或作业，而是妈妈加班，她必须照顾妹妹 Annie。" },
      { q: "What does he want Danielle to do?", opts: ["make her project longer than it is", "try to finish her project earlier", "change the subject of her project"], answer: 2, explanation: "老师认为她选的主题没有足够内容可写，希望她换一个主题。" },
      { q: "Why does he like his new bag?", opts: ["It's made of leather.", "It's a good size.", "It's a bright colour."], answer: 1, explanation: "新书包的大小更适合放笔记本电脑；颜色很亮但不是他喜欢它的原因。" },
      { q: "Why is he phoning his daughter?", opts: ["to offer her a lift", "to explain a problem to her", "to ask her about some directions"], answer: 1, explanation: "爸爸需要去接走错火车的弟弟，因此不能接女儿，打电话是说明这个问题。" },
      { q: "How is she feeling about it?", opts: ["upset that the weather might be bad", "worried she won't be very good", "sorry that her friend can't go"], answer: 1, explanation: "她不担心天气，朋友不来她也不介意；她担心其他人会比自己好，自己会尴尬。" },
    ],
  },
  9: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "How did the boy get the book?", opts: ["He borrowed it from a family member.", "He won it in a sports event.", "He bought it in a shop."], answer: 1, explanation: "男孩原本在书店看见它但钱不够，后来因跑步比赛第一名而得到这本书作为奖品。" },
      { q: "What type of lesson did she have?", opts: ["a guitar lesson", "a tennis lesson", "a dance lesson"], answer: 0, explanation: "女孩谈到手指的位置会影响声音，这说明她上的是吉他课。" },
      { q: "Where will the boy stay on holiday?", opts: ["in a house", "in a hotel", "in a tent"], answer: 2, explanation: "祖母有房子，但来访的人太多，男孩说自己得在她花园里露营。" },
      { q: "What does he want his class to do now?", opts: ["start some maths problems", "talk about their new textbook", "check an exercise in pairs"], answer: 2, explanation: "数学题已完成；老师要求大家两人合作比较答案，因此选 C。" },
      { q: "What are they going to do together on Saturday?", opts: ["have a cycle ride", "cook some special food", "go for a walk"], answer: 2, explanation: "女孩骑车过去只是为了会合；他们一起进行的活动是在森林里散步。" },
    ],
  },
  1: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "Why did the girl choose the bag?", opts: ["It was the right price.", "It was the right size.", "It will be very useful."], answer: 2 },
      { q: "Why doesn’t he buy the computer game now?", opts: ["He’s played it before.", "He thinks it’s too expensive.", "He can borrow it from his friend."], answer: 1 },
      { q: "Where are they?", opts: ["at a farm", "in a forest", "on a mountain"], answer: 2 },
      { q: "What’s Kate’s father going to do?", opts: ["book a holiday", "enter a competition", "buy a magazine"], answer: 1 },
      { q: "What did the boy do?", opts: ["He went shopping.", "He stayed at home.", "He visited a classmate."], answer: 1 },
    ],
  },
  2: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "Why doesn’t the girl want to go swimming?", opts: ["She’s too busy.", "She feels ill.", "She’s got no money."], answer: 1 },
      { q: "Where are they going to go on the school trip?", opts: ["to a farm", "to a museum", "to a stadium"], answer: 0 },
      { q: "What’s the teacher talking to them about?", opts: ["changes to their timetable", "a new teacher at the school", "a problem with a classroom"], answer: 0 },
      { q: "How does Oscar feel now?", opts: ["tired", "bored", "worried"], answer: 0 },
      { q: "Why didn’t Alex buy the blue and white T-shirt?", opts: ["It was the wrong size.", "It was too expensive.", "It was the wrong colour."], answer: 1 },
    ],
  },
  5: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "What does the girl want the boy to do?", opts: ["make a phone call", "get her something to drink", "help her with her homework"], answer: 1, explanation: "女孩不需要帮忙做作业，也自己拿了电话；她最后委婉地表示想喝果汁。" },
      { q: "What should the girl try to do in the future?", opts: ["always complete her homework", "work more quickly", "say more in class"], answer: 1, explanation: "女孩的作业总是准时完成、课上也经常发言；老师指出的是她完成练习花的时间太长。" },
      { q: "Why did she choose this bag?", opts: ["for the colour", "for the size", "for the price"], answer: 2, explanation: "她觉得颜色还不错、包也有点小；真正的原因是折扣很好。" },
      { q: "Why does the girl want to give her jacket to her cousin?", opts: ["It isn’t big enough.", "There aren’t enough pockets.", "She doesn’t like the colour."], answer: 0, explanation: "小口袋和颜色都被提到，但女孩说自己长高了，外套很快会像借妹妹的一样小。" },
      { q: "What did he enjoy most about the lesson?", opts: ["watching a video", "drawing a map", "using the internet"], answer: 1, explanation: "看视频只是“还可以”，上网的是其他同学；男孩自己画的地图很好看，因此最喜欢画地图。" },
    ],
  },
  6: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "What does the girl hope to do this summer?", opts: ["visit a new country", "stay with a family member", "learn a new sport"], answer: 2, explanation: "她会再次去西班牙，并没有去新国家；她一直梦想学习骑马，因此答案是学习一项新运动。" },
      { q: "Where does she want them to go now?", opts: ["the school café", "the library", "the park"], answer: 2, explanation: "老师原本计划去图书馆，后来因为天气好改为去公园；咖啡馆是在返回教室前再去。" },
      { q: "What is the problem with their food?", opts: ["It cost more than they expected.", "It’s not what they asked for.", "It’s badly cooked."], answer: 2, explanation: "披萨很干，男孩认为店员忘了及时从烤箱拿出来；它并不贵。" },
      { q: "Why is she going to be late?", opts: ["She has to meet a neighbour.", "She has to meet a classmate.", "She has to meet a family member."], answer: 0, explanation: "妈妈让她帮助住在隔壁、丢了钥匙的女士进门；这是邻居，不是家人或同学。" },
      { q: "What do they still need to do?", opts: ["buy some food", "find some sports equipment", "get some drinks"], answer: 1, explanation: "食物和气泡水都已准备好；他们还需要找排球网和球。" },
    ],
  },
  7: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "What’s she doing?", opts: ["giving them some homework", "telling them about a school trip", "asking them to do a classroom activity"], answer: 2, explanation: "老师让学生立刻两人一组制作博物馆海报，并说不需要带回家完成。" },
      { q: "What does the boy say about the book he’s just read?", opts: ["It’s funny.", "It’s long.", "It’s useful."], answer: 2, explanation: "书页不多，也不是小丑故事；它能让人了解许多音乐知识。" },
      { q: "What was the worst problem with the boy’s holiday?", opts: ["the bad weather", "the length of the holiday", "the noise on the campsite"], answer: 1, explanation: "下雨和营地噪音都提到，但他最讨厌的是脚受伤后不得不很早结束假期。" },
      { q: "How did he prepare for the match?", opts: ["He ate a lot.", "He slept a lot.", "He practised a lot."], answer: 1, explanation: "他没有特别注意饮食，也没增加练习；为有精力比赛，他上周每晚都早睡。" },
      { q: "Why did Louisa miss the game?", opts: ["She arrived too late.", "She wasn’t feeling well.", "She didn’t know about the game."], answer: 2, explanation: "她没有生病；手机没电，看到朋友的短信时已经太晚，因此此前并不知道比赛。" },
    ],
  },
  8: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话，选择每段对话的重点信息。",
    type: "mcq",
    items: [
      { q: "Why can’t Gemma play hockey today?", opts: ["She has hurt herself.", "She has a dentist’s appointment.", "She has forgotten her sports kit."], answer: 0, explanation: "她看完牙医后下车时，曲棍球杆从包里掉出来砸到脚，疼得无法跑步。" },
      { q: "What did he do at school last week?", opts: ["He won a race.", "He wrote a story.", "He acted in a play."], answer: 1, explanation: "他赢得了英文写作比赛，作品是一篇 500 词的故事；跑步比赛只是故事内容。" },
      { q: "Why do they like going there?", opts: ["They meet friends there.", "The prices are low.", "It has nice things to eat."], answer: 2, explanation: "这家咖啡馆适合做作业且有桌位，但价格有点贵；他们特别喜欢那里的饼干和蛋糕。" },
      { q: "What was the weather like on her holiday?", opts: ["It snowed every day.", "It was cloudy most of the time.", "It was cold and sunny."], answer: 2, explanation: "整个星期都很晴朗、需要戴太阳镜；最后两晚才下很多雪，所以总体是寒冷且晴朗。" },
      { q: "What are they deciding?", opts: ["when to meet", "which shops to visit", "how to get home afterwards"], answer: 0, explanation: "他们已经约在电影院外购物，也谈到想去的店；最后确定的是 quarter past 的见面时间。" },
    ],
  },
};

const OFFICIAL_PART5_SETS = {
  20:{options:['beach umbrella','blanket','football','games','photos','picnic','sunglasses','towels'],items:[{q:'Katy',answer:1},{q:'Jacob',answer:6},{q:'Suzana',answer:4},{q:'Martin',answer:5},{q:'Carla',answer:3}]},
  19:{options:['armchair','bookcase','cupboard','desk','lamp','mirror','picture','shelf'],items:[{q:'kitchen',answer:2},{q:'living room',answer:3},{q:'bedroom',answer:4},{q:'bathroom',answer:6},{q:'garage',answer:7}]},
  18:{options:['bathroom','bedroom','dining room','garden','hall','kitchen','living room','stairs'],items:[{q:'bowl',answer:0},{q:'lamp',answer:3},{q:'box',answer:5},{q:'clock',answer:1},{q:'chair',answer:4}]},
  17:{options:['badminton','fishing','football','golf','skateboarding','swimming','tennis','volleyball'],items:[{q:'Daniel',answer:1},{q:'Amira',answer:5},{q:'Kelly',answer:4},{q:'Ryan',answer:3},{q:'Valerie',answer:0}]},
  16:{options:['art equipment','bag','book','chocolate','concert ticket','jewellery','perfume','picture'],items:[{q:'Anthea',answer:5},{q:'Larry',answer:7},{q:'Kerry',answer:2},{q:'Tony',answer:3},{q:'Hannah',answer:1}]},
  15:{options:['comfortable beds','expensive','friendly staff','good food','hard to find','large bedrooms','no parking','noisy'],items:[{q:'City Hotel',answer:1},{q:'The Bridge Hotel',answer:3},{q:'Lemontree Hotel',answer:5},{q:'Greenleaf Hotel',answer:7},{q:'The International Hotel',answer:2}]},
  14: {
    options: ["acting", "art", "cycling", "making music", "photography", "reading", "travelling", "watching sport"],
    items: [
      { q: "Jane", answer: 4 },
      { q: "Derek", answer: 3 },
      { q: "Mary", answer: 6 },
      { q: "Tony", answer: 0 },
      { q: "Sarah", answer: 7 },
    ],
  },
  13: {
    options: ["bookcase", "clock", "cupboard", "curtains", "lamp", "mirror", "seat", "table"],
    items: [
      { q: "dining room", answer: 4 },
      { q: "bathroom", answer: 6 },
      { q: "bedroom", answer: 2 },
      { q: "living room", answer: 0 },
      { q: "kitchen", answer: 5 },
    ],
  },
  12: {
    options: ["beautiful", "big", "cold", "comfortable", "dark", "modern", "tidy", "unusual"],
    items: [
      { q: "Sophie's bedroom", answer: 6 },
      { q: "Leo's bedroom", answer: 1 },
      { q: "kitchen", answer: 2 },
      { q: "living room", answer: 3 },
      { q: "bathroom", answer: 7 },
    ],
  },
  11: {
    options: ["be the photographer", "do the make-up", "make clothes", "make posters", "prepare the room", "sell tickets", "serve drinks", "tidy up afterwards"],
    items: [
      { q: "Jake", answer: 7 },
      { q: "Suzy", answer: 1 },
      { q: "Dan", answer: 0 },
      { q: "Lauren", answer: 3 },
      { q: "George", answer: 4 },
    ],
  },
  10: {
    options: ["baseball", "basketball", "cycling", "football", "hockey", "swimming", "tennis", "volleyball"],
    items: [
      { q: "Sofia", answer: 1 },
      { q: "Aidan", answer: 6 },
      { q: "Tina", answer: 5 },
      { q: "Nick", answer: 7 },
      { q: "Katrina", answer: 2 },
    ],
  },
  9: {
    options: ["actor", "chef", "dentist", "doctor", "farmer", "musician", "teacher", "tour guide"],
    items: [
      { q: "Sally", answer: 7 },
      { q: "Peter", answer: 4 },
      { q: "Amy", answer: 6 },
      { q: "Tom", answer: 1 },
      { q: "Jane", answer: 2 },
    ],
  },
  1: {
    options: ["board game", "camera", "drum", "guitar", "pencils and paints", "picnic bag", "quiz", "sports equipment"],
    items: [
      { q: "Edward", answer: 5 },
      { q: "Beth", answer: 2 },
      { q: "Dan", answer: 7 },
      { q: "Yolanda", answer: 4 },
      { q: "Gordon", answer: 6 },
    ],
  },
  2: {
    options: ["apartment building", "café", "large store", "library", "museum", "post office", "sports centre", "station"],
    items: [
      { q: "Claire", answer: 5 },
      { q: "Paul", answer: 6 },
      { q: "James", answer: 2 },
      { q: "Joe", answer: 3 },
      { q: "Karen", answer: 0 },
    ],
  },
  5: {
    options: ["cooking", "doing school work", "going to see an old building", "playing a board game", "playing music", "shopping", "swimming", "visiting grandparents"],
    items: [
      { q: "Angela", answer: 4 },
      { q: "Marvin", answer: 7 },
      { q: "Diane", answer: 5 },
      { q: "Gavin", answer: 2 },
      { q: "Lucy", answer: 3 },
    ],
  },
  6: {
    options: ["camera", "computer", "drinks", "magazines", "paints", "paper", "scissors", "snacks"],
    items: [
      { q: "Paul", answer: 4 },
      { q: "Anna", answer: 3 },
      { q: "Tom", answer: 1 },
      { q: "Jenny", answer: 2 },
      { q: "Sara", answer: 6 },
    ],
  },
  7: {
    options: ["boring", "crowded", "exciting", "expensive", "funny", "noisy", "scary", "useful"],
    items: [
      { q: "restaurant", answer: 3 },
      { q: "museum", answer: 7 },
      { q: "swimming pool", answer: 5 },
      { q: "forest", answer: 2 },
      { q: "market", answer: 4 },
    ],
  },
  8: {
    options: ["baseball", "football", "hockey", "rugby", "running", "swimming", "tennis", "volleyball"],
    items: [
      { q: "Alex", answer: 1 },
      { q: "John", answer: 2 },
      { q: "Sally", answer: 5 },
      { q: "Ben", answer: 4 },
      { q: "Mary", answer: 6 },
    ],
  },
};

function OfficialPartFiveBoard({ level, setLevel, setId = 9 }) {
  const data = OFFICIAL_PART5_SETS[setId] || OFFICIAL_TEST1_PARTS[5];
  const saved = readListeningProgress(setId, 5);
  const [answers, setAnswers] = useState(() =>
    saved?.answers?.length === data.items.length
      ? saved.answers
      : Array(data.items.length).fill(null),
  );
  const [active, setActive] = useState(() =>
    Number.isInteger(saved?.active) ? saved.active : 0,
  );
  useEffect(() => {
    saveListeningProgress(setId, 5, {
      answers,
      active,
      completed: answers.every((value) => value !== null),
      wrongCount: answers.reduce((count, value, index) => count + (value !== null && value !== data.items[index].answer ? 1 : 0), 0),
    });
  }, [active, answers, setId]);
  const used = new Set(answers.filter((value) => value !== null));
  const completed = answers.filter((value) => value !== null).length;
  const score = answers.reduce(
    (sum, value, index) => sum + (value === data.items[index].answer ? 1 : 0),
    0,
  );
  function choose(job) {
    setAnswers((values) =>
      values.map((value, index) => (index === active ? job : value)),
    );
    const next = answers.findIndex(
      (value, index) => index > active && value === null,
    );
    if (next !== -1) setActive(next);
  }
  function resetProgress() {
    clearListeningProgress(setId, 5);
    setAnswers(Array(data.items.length).fill(null));
    setActive(0);
  }
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <ListeningPartNav activePart={5} setId={setId} />
      <main className="mx-auto max-w-6xl px-6 py-7">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">
          INTERNAL REVIEW SAMPLE
        </div>
        <h1 className="mt-1 text-4xl font-extrabold">Part 5 信息匹配题</h1>
        <p className="mt-2 text-gray-500">
          先选择人物，再从职业板中选择对应职业。已完成的匹配可以随时修改。
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1">
            <ListeningSetTabs part={5} activeSet={setId} />
          </div>
          <ResetListeningButton onReset={resetProgress} />
        </div>
        <div className="mt-6">
          <SpeedAudioPlayer
            src={officialListeningAudio(setId, 5)}
            title={`练习${setId} · Part 5 音频`}
          />
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <section className="rounded-[24px] border border-gray-200 bg-white p-5">
            <div className="mb-4 text-xs font-extrabold tracking-[.14em] text-emerald-700">
              第一步 · 选择人物
            </div>
            <div className="space-y-3">
              {data.items.map((item, index) => {
                const selected = active === index,
                  value = answers[index],
                  done = value !== null,
                  right = value === item.answer;
                return (
                  <button
                    key={item.q}
                    onClick={() => setActive(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${selected ? "border-[#e1b33a] bg-[#fff9e9] shadow-sm" : done ? (right ? "border-emerald-300 bg-emerald-50" : "border-rose-200 bg-rose-50") : "border-gray-200 hover:border-emerald-300"}`}
                  >
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-full font-extrabold ${selected ? "bg-[#f7cd60]" : "bg-gray-100 text-gray-500"}`}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <strong className="text-lg">{item.q}</strong>
                      <div
                        className={`mt-1 text-sm ${done ? "font-bold text-gray-700" : "text-gray-400"}`}
                      >
                        {done
                          ? `${String.fromCharCode(65 + value)}. ${data.options[value]}`
                          : "等待匹配"}
                      </div>
                    </div>
                    <span>
                      {selected ? "→" : done ? (right ? "✓" : "!") : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
          <section className="rounded-[24px] border border-gray-200 bg-[#f8faf9] p-5">
            <div className="mb-2 text-xs font-extrabold tracking-[.14em] text-emerald-700">
              第二步 · 选择职业
            </div>
            <p className="mb-4 text-sm text-gray-500">
              正在为{" "}
              <strong className="text-gray-900">{data.items[active].q}</strong>{" "}
              匹配职业
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.options.map((job, index) => {
                const chosen = answers[active] === index,
                  isUsed = used.has(index);
                return (
                  <button
                    key={job}
                    onClick={() => choose(index)}
                    className={`flex min-h-[104px] items-center gap-3 rounded-2xl border p-5 text-left transition ${chosen ? "border-[#dfad2d] bg-[#fff3c9] text-[#5b4300]" : isUsed ? "border-gray-200 bg-gray-100 text-gray-400" : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-[#e1b33a] hover:shadow-sm"}`}
                  >
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl font-extrabold ${chosen ? "bg-[#f7cd60]" : "bg-emerald-50 text-emerald-700"}`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <strong>{job}</strong>
                    {isUsed && !chosen && (
                      <span className="ml-auto text-xs">已使用</span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
        <section className="mt-6 rounded-[22px] bg-[#064e3b] p-5 text-white">
          <div className="flex justify-between">
            <strong>完成 {completed} / 5</strong>
            {completed === 5 && (
              <strong className="text-2xl text-[#f7cd60]">
                正确 {score} / 5
              </strong>
            )}
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#f7cd60]"
              style={{ width: `${completed * 20}%` }}
            />
          </div>
        </section>
      </main>
    </CambridgeLayout>
  );
}

function OfficialListeningPartSample({ part, level, setLevel, setId = 9 }) {
  const data =
    (part === 2 && OFFICIAL_PART2_SETS[setId]) ||
    (part === 3 && OFFICIAL_PART3_SETS[setId]) ||
    (part === 4 && OFFICIAL_PART4_SETS[setId]) ||
    OFFICIAL_TEST1_PARTS[part];
  const saved = readListeningProgress(setId, part);
  const [answers, setAnswers] = useState(() =>
    saved?.answers?.length === data.items.length
      ? saved.answers
      : Array(data.items.length).fill(""),
  );
  const [checked, setChecked] = useState(() =>
    saved?.checked?.length === data.items.length
      ? saved.checked
      : Array(data.items.length).fill(false),
  );
  useEffect(() => {
    saveListeningProgress(setId, part, {
      answers,
      checked,
      completed: checked.every(Boolean),
      wrongCount: data.items.reduce((count, item, index) => count + (checked[index] && !isRight(item, answers[index]) ? 1 : 0), 0),
    });
  }, [answers, checked, part, setId]);
  const normalise = (value) =>
    String(value)
      .toLowerCase()
      .replace(/[£,\s-]/g, "");
  const isRight = (item, value) =>
    data.type === "blanks"
      ? item.answer.some((answer) => normalise(answer) === normalise(value))
      : Number(value) === item.answer;
  const completed = checked.filter(Boolean).length;
  const score = data.items.reduce(
    (sum, item, index) =>
      sum + (checked[index] && isRight(item, answers[index]) ? 1 : 0),
    0,
  );
  function resetProgress() {
    clearListeningProgress(setId, part);
    setAnswers(Array(data.items.length).fill(""));
    setChecked(Array(data.items.length).fill(false));
  }
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <ListeningPartNav activePart={part} setId={setId} />
      <main className="mx-auto max-w-5xl px-6 py-7">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">
          INTERNAL REVIEW SAMPLE
        </div>
        <h1 className="mt-1 text-4xl font-extrabold">{data.title}</h1>
        <p className="mt-2 text-gray-500">
          练习{setId} · {data.instruction}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1">
            <ListeningSetTabs part={part} activeSet={setId} />
          </div>
          <ResetListeningButton onReset={resetProgress} />
        </div>
        <div className="mt-6">
          <SpeedAudioPlayer
            src={officialListeningAudio(setId, part)}
            title={`练习${setId} · Part ${part} 音频`}
          />
        </div>
        <div className="mt-6 space-y-4">
          {data.items.map((item, index) => {
            const done = checked[index],
              right = done && isRight(item, answers[index]);
            return (
              <article
                key={item.q}
                className={`rounded-[22px] border bg-white p-5 md:p-6 ${done ? (right ? "border-emerald-400" : "border-rose-300") : "border-gray-200"}`}
              >
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f7cd60] font-extrabold">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold">{item.q}</h2>
                    {data.type === "blanks" ? (
                      <div className="mt-4 flex gap-3">
                        <input
                          value={answers[index]}
                          onChange={(e) => {
                            setAnswers((v) =>
                              v.map((x, i) =>
                                i === index ? e.target.value : x,
                              ),
                            );
                            setChecked((v) =>
                              v.map((x, i) => (i === index ? false : x)),
                            );
                          }}
                          className="h-12 min-w-0 flex-1 rounded-xl border border-gray-200 px-4 text-lg font-bold outline-none focus:border-emerald-500"
                          placeholder="输入听到的信息"
                        />
                        <button
                          disabled={!answers[index].trim()}
                          onClick={() =>
                            setChecked((v) =>
                              v.map((x, i) => (i === index ? true : x)),
                            )
                          }
                          className="rounded-xl bg-[#064e3b] px-5 font-extrabold text-white disabled:bg-gray-200"
                        >
                          检查
                        </button>
                      </div>
                    ) : (
                      <div className="mt-4 grid gap-2">
                        {(data.type === "match" ? data.options : item.opts).map(
                          (option, optionIndex) => (
                            <button
                              key={option}
                              onClick={() => {
                                setAnswers((v) =>
                                  v.map((x, i) =>
                                    i === index ? optionIndex : x,
                                  ),
                                );
                                setChecked((v) =>
                                  v.map((x, i) => (i === index ? true : x)),
                                );
                              }}
                              className={`rounded-xl border px-4 py-3 text-left font-bold ${answers[index] === optionIndex ? (right ? "border-emerald-400 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-700") : "border-gray-200 hover:border-[#f7cd60]"}`}
                            >
                              {String.fromCharCode(65 + optionIndex)}. {option}
                            </button>
                          ),
                        )}
                      </div>
                    )}
                    {done && (
                      <div
                        className={`mt-4 rounded-xl px-4 py-3 text-sm ${right ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}
                      >
                        <strong>{right ? "✓ 回答正确！" : "再听一次。"}</strong>
                        {!right && (
                          <span className="ml-2">
                            正确答案：
                            {data.type === "blanks"
                              ? item.show
                              : data.type === "match"
                                ? data.options[item.answer]
                                : item.opts[item.answer]}
                          </span>
                        )}
                        {item.explanation && (
                          <p className="mt-2 leading-6">{item.explanation}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <section className="mt-6 rounded-[22px] bg-[#064e3b] p-5 text-white">
          <div className="flex justify-between">
            <strong>完成 {completed} / 5</strong>
            {completed === 5 && (
              <strong className="text-2xl text-[#f7cd60]">
                正确 {score} / 5
              </strong>
            )}
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#f7cd60]"
              style={{ width: `${completed * 20}%` }}
            />
          </div>
        </section>
      </main>
    </CambridgeLayout>
  );
}

function ListeningCentre({ level, setLevel }) {
  const navigate = useNavigate();
  const [lastPractice] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(LISTENING_LAST_KEY) || "null");
    } catch {
      return null;
    }
  });
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
        {lastPractice?.setId && lastPractice?.part && (
          <button
            type="button"
            onClick={() =>
              navigate(`/cambridge/listening?part=${lastPractice.part}&set=${lastPractice.setId}`)
            }
            className="mt-5 flex w-full items-center justify-between rounded-[20px] border border-[#e1b33a] bg-[#fff8df] px-5 py-4 text-left transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <span>
              <span className="block text-xs font-extrabold tracking-[.12em] text-[#9a7308]">
                继续上次练习
              </span>
              <strong className="mt-1 block text-lg text-gray-950">
                练习{lastPractice.setId} · Part {lastPractice.part}
              </strong>
            </span>
            <span className="font-extrabold text-[#735500]">继续学习 →</span>
          </button>
        )}
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
        <div className="mt-4">
          <SpeedAudioPlayer src={`/audio/listening-points/${data.audio}`} />
        </div>
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
        <div className="mt-5">
          <SpeedAudioPlayer src="/audio/listening-points/spelling-practice.mp3" />
        </div>
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

const MOCK_LISTENING_PREFIX = "mars_ket_mock_listening_v2";

function mockListeningData(setId, part) {
  if (part === 1) return OFFICIAL_PART1_SETS[setId] ? { title: "Part 1 图片选择题", type: "picture", items: OFFICIAL_PART1_SETS[setId] } : null;
  if (part === 2) return OFFICIAL_PART2_SETS[setId] || null;
  if (part === 3) return OFFICIAL_PART3_SETS[setId] || null;
  if (part === 4) return OFFICIAL_PART4_SETS[setId] || null;
  return OFFICIAL_PART5_SETS[setId] ? { title: "Part 5 配对题", instruction: "听对话，将每个人与正确选项配对。", type: "match", ...OFFICIAL_PART5_SETS[setId] } : null;
}

function normaliseMockAnswer(value) {
  return String(value ?? "").toLowerCase().replace(/[£,\s-]/g, "");
}

function isMockAnswerRight(data, item, value) {
  if (data.type === "blanks") return item.answer.some(answer => normaliseMockAnswer(answer) === normaliseMockAnswer(value));
  return Number(value) === item.answer;
}

function mockAnswerLabel(data, item, value) {
  if (value === null || value === undefined || String(value).trim() === "") return "未作答";
  if (data.type === "blanks") return String(value);
  const letter = String.fromCharCode(65 + Number(value));
  if (data.type === "picture") return letter;
  const option = data.type === "match" ? data.options?.[value] : item.opts?.[value];
  return option ? `${letter}. ${option}` : letter;
}

function mockCorrectAnswerLabel(data, item) {
  if (data.type === "blanks") return item.answer.join(" / ");
  return mockAnswerLabel(data, item, item.answer);
}

function mockDurationLabel(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function ListeningMockExam({ level, setLevel, setId, part, examId }) {
  const navigate = useNavigate();
  const data = mockListeningData(setId, part);
  const storageKey = `${MOCK_LISTENING_PREFIX}:set-${setId}`;
  const [attempt, setAttempt] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '{"parts":{}}'); } catch { return { parts: {} }; }
  });
  const [startedAt] = useState(() => attempt.startedAt || Date.now());
  const [paused, setPaused] = useState(() => Boolean(attempt.pausedAt));
  const [pausedAt, setPausedAt] = useState(() => attempt.pausedAt || null);
  const [totalPausedMs, setTotalPausedMs] = useState(() => attempt.totalPausedMs || 0);
  const [elapsed, setElapsed] = useState(() => Math.max(0, Math.floor(((attempt.pausedAt || Date.now()) - startedAt - (attempt.totalPausedMs || 0)) / 1000)));
  const [finalElapsed, setFinalElapsed] = useState(() => attempt.finishedAt ? Math.max(0, Math.floor((attempt.finishedAt - startedAt - (attempt.totalPausedMs || 0)) / 1000)) : null);
  const emptyValue = data.type === "blanks" ? "" : null;
  const [answers, setAnswers] = useState(() => {
    const saved = attempt.parts?.[part];
    return saved?.length === data.items.length ? saved : Array(data.items.length).fill(emptyValue);
  });
  const [submitted, setSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [activeMatch, setActiveMatch] = useState(() => {
    const firstEmpty = answers.findIndex(value => value === null);
    return firstEmpty === -1 ? 0 : firstEmpty;
  });

  useEffect(() => {
    const next = { ...attempt, startedAt, pausedAt, totalPausedMs, parts: { ...(attempt.parts || {}), [part]: answers } };
    setAttempt(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  useEffect(() => {
    if (submitted || paused) return undefined;
    const timer = window.setInterval(() => setElapsed(Math.max(0, Math.floor((Date.now() - startedAt - totalPausedMs) / 1000))), 1000);
    return () => window.clearInterval(timer);
  }, [paused, startedAt, submitted, totalPausedMs]);

  const answered = answers.filter(value => value !== null && String(value).trim() !== "").length;
  const complete = answered === data.items.length;
  const allData = [1, 2, 3, 4, 5].map(partId => mockListeningData(setId, partId));
  const scoringAttempt = { ...attempt, parts: { ...(attempt.parts || {}), [part]: answers } };
  const breakdown = allData.map((partData, index) => {
    const values = scoringAttempt.parts?.[index + 1] || [];
    return values.reduce((score, value, itemIndex) => score + (isMockAnswerRight(partData, partData.items[itemIndex], value) ? 1 : 0), 0);
  });
  const totalScore = breakdown.reduce((sum, value) => sum + value, 0);
  const wrongAnswers = allData.flatMap((partData, partIndex) => {
    const values = scoringAttempt.parts?.[partIndex + 1] || [];
    return partData.items.map((item, itemIndex) => ({
      part: partIndex + 1,
      number: partIndex * 5 + itemIndex + 1,
      data: partData,
      item,
      value: values[itemIndex],
    })).filter(entry => !isMockAnswerRight(entry.data, entry.item, entry.value));
  });

  function choose(itemIndex, value) {
    setAnswers(current => current.map((answer, index) => {
      if (index === itemIndex) return value;
      if (data.type === "match" && answer === value) return null;
      return answer;
    }));
  }

  function chooseMatch(value) {
    choose(activeMatch, value);
    const next = answers.findIndex((answer, index) => index > activeMatch && answer === null);
    if (next !== -1) setActiveMatch(next);
  }

  function resetMock() {
    try { localStorage.removeItem(storageKey); } catch {}
    navigate(`/cambridge/listening?mode=mock&exam=${examId}&part=1&set=${setId}`);
  }

  function finishMock() {
    const finishedAt = Date.now();
    const finalPausedMs = totalPausedMs + (paused && pausedAt ? finishedAt - pausedAt : 0);
    const next = { ...scoringAttempt, startedAt, finishedAt, pausedAt: null, totalPausedMs: finalPausedMs, completed: true, wrongCount: wrongAnswers.length, level: 'KET', examId };
    setAttempt(next);
    setFinalElapsed(Math.max(0, Math.floor((finishedAt - startedAt - finalPausedMs) / 1000)));
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
    setSubmitted(true);
  }

  function toggleTimer() {
    const now = Date.now();
    if (paused) {
      const nextTotal = totalPausedMs + (pausedAt ? now - pausedAt : 0);
      const next = { ...attempt, startedAt, pausedAt: null, totalPausedMs: nextTotal };
      setPaused(false);
      setPausedAt(null);
      setTotalPausedMs(nextTotal);
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      setAttempt(next);
    } else {
      const next = { ...attempt, startedAt, pausedAt: now, totalPausedMs };
      setPaused(true);
      setPausedAt(now);
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      setAttempt(next);
    }
  }

  function redoWrongAnswers() {
    if (!wrongAnswers.length) return;
    const parts = Object.fromEntries([1, 2, 3, 4, 5].map(partId => [partId, [...(scoringAttempt.parts?.[partId] || [])]]));
    wrongAnswers.forEach(entry => {
      parts[entry.part][entry.number - ((entry.part - 1) * 5) - 1] = entry.data.type === 'blanks' ? '' : null;
    });
    const next = { parts, startedAt: Date.now(), redo: true };
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
    navigate(`/cambridge/listening?mode=mock&exam=${examId}&part=${wrongAnswers[0].part}&set=${setId}&redo=${Date.now()}`);
  }

  if (submitted) return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-[28px] border border-emerald-200 bg-white p-7 text-center shadow-sm sm:p-10">
          <div className="text-5xl">🎧</div>
          <div className="mt-4 text-xs font-extrabold tracking-[.18em] text-emerald-700">LISTENING RESULT</div>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-950">听力模考完成</h1>
          <div className="mt-3 text-sm font-bold text-slate-500">用时 {mockDurationLabel(finalElapsed ?? elapsed)}</div>
          <div className="mt-6 text-6xl font-black text-emerald-700">{totalScore}<span className="text-2xl text-slate-400"> / 25</span></div>
          <div className="mx-auto mt-7 grid max-w-2xl grid-cols-5 gap-2">
            {breakdown.map((score, index) => <div key={index} className="rounded-xl bg-slate-50 px-2 py-3"><div className="text-xs text-slate-400">Part {index + 1}</div><strong className="mt-1 block text-lg text-slate-800">{score}/5</strong></div>)}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => setShowReview(value => !value)} className="rounded-xl bg-[#f7cd60] px-5 py-3 font-extrabold text-[#4c3a00]">{showReview ? '收起错题解析' : `查看错题与答案（${wrongAnswers.length}）`}</button>
            {wrongAnswers.length > 0 && <button type="button" onClick={redoWrongAnswers} className="rounded-xl border border-emerald-600 bg-emerald-50 px-5 py-3 font-extrabold text-emerald-800">重做错题（{wrongAnswers.length}）</button>}
            <button type="button" onClick={resetMock} className="rounded-xl border border-slate-200 px-5 py-3 font-extrabold text-slate-600">重新作答</button>
            <Link to={`/cambridge/exams/${examId}`} className="rounded-xl bg-emerald-700 px-5 py-3 font-extrabold text-white">返回真题总览</Link>
          </div>
        </div>
        {showReview && (
          <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="text-xs font-extrabold tracking-[.16em] text-emerald-700">WRONG ANSWER REVIEW</div>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-950">错题与正确答案</h2>
            <p className="mt-2 text-sm text-slate-500">共 {wrongAnswers.length} 道错题，按照 Part 和题号排列。</p>
            <div className="mt-6 space-y-4">
              {wrongAnswers.map(entry => (
                <article key={`${entry.part}-${entry.number}`} className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-extrabold text-rose-700">Part {entry.part} · 第 {entry.number} 题</span>
                    <strong className="text-lg text-slate-900">{entry.item.q || entry.item.question}</strong>
                  </div>
                  {entry.data.type === 'picture' && <img src={entry.item.image} alt={`Question ${entry.number}`} className="mx-auto mt-4 max-h-[320px] w-full rounded-xl border border-slate-200 bg-white object-contain" />}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-rose-200 bg-white p-4"><div className="text-xs font-bold text-slate-400">你的答案</div><strong className="mt-1 block text-rose-700">{mockAnswerLabel(entry.data, entry.item, entry.value)}</strong></div>
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"><div className="text-xs font-bold text-emerald-600">正确答案</div><strong className="mt-1 block text-emerald-800">{mockCorrectAnswerLabel(entry.data, entry.item)}</strong></div>
                  </div>
                </article>
              ))}
              {wrongAnswers.length === 0 && <div className="rounded-2xl bg-emerald-50 p-6 text-center font-extrabold text-emerald-700">全部答对，没有错题 🎉</div>}
            </div>
          </section>
        )}
      </main>
    </CambridgeLayout>
  );

  return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <nav className="border-b border-slate-100 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <Link to={`/cambridge/exams/${examId}`} className="mr-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-extrabold text-emerald-800">← 真题总览</Link>
          <span className="mr-2 rounded-xl bg-[#064e3b] px-4 py-2.5 text-sm font-extrabold text-white">🎧 听力模考</span>
          {[1, 2, 3, 4, 5].map(partId => {
            const saved = attempt.parts?.[partId] || [];
            const done = saved.length === 5 && saved.every(value => value !== null && String(value).trim() !== "");
            return <span key={partId} className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold ${partId === part ? 'border-emerald-700 bg-emerald-700 text-white' : done ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-400'}`}>Part {partId}{done ? ' ✓' : ''}</span>;
          })}
          <div className="ml-auto flex items-center gap-2">
            <span className={`rounded-xl px-4 py-2.5 font-mono text-sm font-extrabold ${paused ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>⏱ {mockDurationLabel(elapsed)}</span>
            <button type="button" onClick={toggleTimer} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-600 hover:border-emerald-300 hover:text-emerald-700">{paused ? '▶ 继续计时' : 'Ⅱ 暂停计时'}</button>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-5xl px-6 py-7">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">LISTENING MOCK TEST · 真题 {setId}</div>
        <h1 className="mt-1 text-4xl font-extrabold text-slate-950">{data.title}</h1>
        <p className="mt-2 text-slate-500">{part === 1 ? '听五段短对话，从 A、B、C 三幅图片中选择正确答案。' : data.instruction}</p>
        <div className="h-6" aria-hidden="true" />
        <SpeedAudioPlayer src={officialListeningAudio(setId, part)} title={`真题${setId} · Part ${part} 音频`} />

        {data.type === 'match' ? (
          <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(280px,.65fr)_minmax(0,1.35fr)]">
            <section className="rounded-[24px] border border-slate-200 bg-white p-5">
              <div className="mb-4 text-xs font-extrabold tracking-[.14em] text-emerald-700">第一步 · 选择人物</div>
              <div className="space-y-3">
                {data.items.map((item, index) => {
                  const selected = activeMatch === index;
                  const value = answers[index];
                  return (
                    <button key={item.q} type="button" onClick={() => setActiveMatch(index)} className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${selected ? 'border-[#e1b33a] bg-[#fff9e9] shadow-sm' : value !== null ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300'}`}>
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-extrabold ${selected ? 'bg-[#f7cd60]' : 'bg-slate-100 text-slate-500'}`}>{21 + index}</span>
                      <div className="min-w-0 flex-1">
                        <strong className="text-lg text-slate-900">{item.q}</strong>
                        <div className={`mt-1 text-sm ${value !== null ? 'font-bold text-slate-700' : 'text-slate-400'}`}>{value !== null ? `${String.fromCharCode(65 + value)}. ${data.options[value]}` : '等待匹配'}</div>
                      </div>
                      <span>{selected ? '→' : value !== null ? '✓' : ''}</span>
                    </button>
                  );
                })}
              </div>
            </section>
            <section className="flex flex-col rounded-[24px] border border-slate-200 bg-[#f8faf9] p-5">
              <div className="mb-2 text-xs font-extrabold tracking-[.14em] text-emerald-700">第二步 · 选择选项</div>
              <p className="mb-4 text-sm text-slate-500">正在为 <strong className="text-slate-900">{data.items[activeMatch].q}</strong> 选择答案</p>
              <div className="grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {data.options.map((option, optionIndex) => {
                  const chosen = answers[activeMatch] === optionIndex;
                  const used = answers.some((answer, index) => index !== activeMatch && answer === optionIndex);
                  return (
                    <button key={option} type="button" onClick={() => chooseMatch(optionIndex)} className={`flex min-h-[96px] items-center gap-3 rounded-2xl border p-4 text-left transition ${chosen ? 'border-[#dfad2d] bg-[#fff3c9] text-[#5b4300]' : used ? 'border-slate-200 bg-slate-100 text-slate-500 hover:border-[#e1b33a] hover:bg-[#fff9e9]' : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-[#e1b33a] hover:shadow-sm'}`}>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl font-extrabold ${chosen ? 'bg-[#f7cd60]' : 'bg-emerald-50 text-emerald-700'}`}>{String.fromCharCode(65 + optionIndex)}</span>
                      <strong>{option}</strong>
                      {used && <span className="ml-auto text-xs">已使用 · 可改选</span>}
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
        <div className="mt-6 space-y-4">
          {data.items.map((item, index) => (
            <article key={item.q || item.question} className="rounded-[22px] border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f7cd60] font-extrabold">{((part - 1) * 5) + index + 1}</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold text-slate-900">{item.q || item.question}</h2>
                  {data.type === 'picture' && <img src={item.image} alt={`Question ${index + 1}`} className="mx-auto mt-4 max-h-[420px] w-full rounded-xl border border-slate-200 object-contain" />}
                  {data.type === 'blanks' ? (
                    <input value={answers[index]} onChange={event => choose(index, event.target.value)} placeholder="输入听到的信息" className="mt-4 h-12 w-full rounded-xl border border-slate-200 px-4 text-lg font-bold outline-none focus:border-emerald-500" />
                  ) : (
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {(data.type === 'picture' ? ['A', 'B', 'C'] : item.opts).map((option, optionIndex) => (
                        <button key={option} type="button" onClick={() => choose(index, optionIndex)} className={`rounded-xl border px-4 py-3 text-left font-bold transition ${answers[index] === optionIndex ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 hover:border-emerald-300'}`}>
                          {String.fromCharCode(65 + optionIndex)}{data.type === 'picture' ? '' : `. ${option}`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        )}

        <section className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-[#064e3b] p-5 text-white">
          <strong>已完成 {answered} / 5</strong>
          <button type="button" disabled={!complete} onClick={() => part < 5 ? navigate(`/cambridge/listening?mode=mock&exam=${examId}&part=${part + 1}&set=${setId}`) : finishMock()} className="rounded-xl bg-[#f7cd60] px-5 py-3 font-extrabold text-[#4c3a00] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/50">
            {part < 5 ? `完成并进入 Part ${part + 1} →` : '提交听力模考并评分'}
          </button>
        </section>
      </main>
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
  const requestedSet = Number(searchParams.get("set"));
  const setId = OFFICIAL_LISTENING_SETS.some((set) => set.id === requestedSet)
    ? requestedSet
    : 9;
  const selectedSet = OFFICIAL_LISTENING_SETS.find((set) => set.id === setId);
  if (searchParams.get("mode") === "mock" && part >= 1 && part <= 5) {
    if ([1, 2, 3, 4, 5].some(partId => !mockListeningData(setId, partId)))
      return <ListeningSetChecking part={part} setId={setId} level={level} setLevel={setLevel} />;
    return <ListeningMockExam key={`mock-${setId}-${part}-${searchParams.get("redo") || "main"}`} level={level} setLevel={setLevel} setId={setId} part={part} examId={searchParams.get("exam") || `ket-${Math.ceil(setId / 4)}-test${((setId - 1) % 4) + 1}`} />;
  }
  if (part >= 1 && part <= 5 && !selectedSet?.readyParts?.includes(part))
    return (
      <ListeningSetChecking
        part={part}
        setId={setId}
        level={level}
        setLevel={setLevel}
      />
    );
  if (part === 1)
    return (
      <OfficialPartOneSample key={`set-${setId}-part-1`} level={level} setLevel={setLevel} setId={setId} />
    );
  if (part === 5)
    return (
      <OfficialPartFiveBoard key={`set-${setId}-part-5`} level={level} setLevel={setLevel} setId={setId} />
    );
  if (part >= 2 && part <= 5)
    return (
      <OfficialListeningPartSample
        key={`set-${setId}-part-${part}`}
        part={part}
        level={level}
        setLevel={setLevel}
        setId={setId}
      />
    );
  if (part >= 1 && part <= 5) return <ListeningPractice initialPart={part} />;
  return <ListeningCentre level={level} setLevel={setLevel} />;
}
