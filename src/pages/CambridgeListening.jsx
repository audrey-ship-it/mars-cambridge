import { Component, useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { KET_LISTENING_DATA } from "../data/ketListeningData";
import { petListeningTests as PET_LISTENING } from "../data/petListeningData";
import { PET_LISTENING_SAMPLES } from "../data/petListeningSamples";
import { PET_LISTENING_STANDARD } from "../data/petListeningStandard";
import { PET_TRAINER1_LISTENING } from "../data/petTrainer1Listening";
import { PET_TRAINER2_LISTENING } from "../data/petTrainer2Listening";
import {
  OFFICIAL_LISTENING_SETS,
  officialListeningAudio,
} from "../data/officialListeningManifest";
import { BOOSTER_PART1_SETS, BOOSTER_PART2_SETS, BOOSTER_PART3_SETS, BOOSTER_PART4_SETS, BOOSTER_PART5_SETS } from '../data/ketListeningBooster';
import { extractQuotes, renderTranscriptWithHighlights, TranscriptBox } from '../utils/transcriptHighlight';
import { applyKetOfficialEnrich } from '../data/ketOfficialListeningTranscripts';
import { CambridgeLayout } from "./CambridgeApp";
import { setMockWrongBatch } from "../data/mockWrongBook";

// 扁平化听力试卷选择器：把 5 个来源（全真模考/官方样题/标准版真题/Trainer 1/Trainer 2）
// 合并为连续编号 1..43，供 byPart 视图的纯数字网格使用（与阅读专项练习样式一致）
const PET_LISTENING_FLAT = [
  { source: "pet",         label: "全真模考", list: PET_LISTENING },
  { source: "pet-sample",  label: "官方样题", list: PET_LISTENING_SAMPLES },
  { source: "pet-standard",label: "标准版真题", list: PET_LISTENING_STANDARD },
  { source: "pet-trainer", label: "Trainer 1", list: PET_TRAINER1_LISTENING },
  { source: "pet-trainer2",label: "Trainer 2", list: PET_TRAINER2_LISTENING },
].flatMap((g) => g.list.map((_, i) => ({ source: g.source, testN: i + 1, label: g.label })));

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
  tone = "ket",
}) {
  const audioRef = useRef(null);
  const [rate, setRate] = useState(1);

  function changeRate(value) {
    setRate(value);
    if (audioRef.current) audioRef.current.playbackRate = value;
  }

  useEffect(() => () => { if (audioRef.current) audioRef.current.pause(); }, []);

  const isPet = tone === "pet";
  const barBg = isPet ? "bg-[#5b21b6]" : "bg-[#075741]";

  return (
    <section className={`sticky top-3 z-40 rounded-[22px] ${barBg} p-4 text-white shadow-xl md:p-5`}>
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
          preload="auto"
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

const OFFICIAL_PART1_BASE = {
  21: [
    { question: "Where's the girl going this afternoon?", image: "/images/listening/trainer1-test1/q1.jpg", answer: 1, explanation: "爸爸约她去商店买滑板、妈妈想去 Bridge Street 的新咖啡馆，但女孩下午要和同学 Susan 去看新上映的日本动画片，即去电影院，因此选择 B。" },
    { question: "Which is the boy's new desk?", image: "/images/listening/trainer1-test1/q2.jpg", answer: 0, explanation: "Aunt Barbara 在网上看的是带四个抽屉的款式，但男孩的新书桌是左边两个抽屉、右边三层书架，因此选择 A。" },
    { question: "How will they get to their tennis class?", image: "/images/listening/trainer1-test1/q3.jpg", answer: 2, explanation: "男孩的自行车后轮出了问题，他原本想坐公交车，但对方提议路不远可以走路，男孩表示同意，因此选择 C。" },
    { question: "Which woman is Laura's new English teacher?", image: "/images/listening/trainer1-test1/q4.jpg", answer: 2, explanation: "书店外长黑发的女士并不是老师（那是金发的 Susanna 阿姨），Laura 的新英语老师是另一位留黑色短发、戴眼镜的女士，因此选择 C。" },
    { question: "What might Harry do if it rains on Saturday?", image: "/images/listening/trainer1-test1/q5.jpg", answer: 0, explanation: "跑步是户外计划，下雨就不能进行；羽毛球 Harry 喜欢但朋友们不喜欢，而排球大家都喜欢又能在室内进行，所以他可能去打排球，因此选择 A。" },
  ],
  22: [
    { question: "What are they going to have for lunch?", image: "/images/listening/trainer1-test2/q1.jpg", answer: 2, explanation: "妈妈提议做意面，也可以拌沙拉，还说昨晚剩了披萨；Pete 回答吃和昨晚一样的就行，而昨晚吃的正是披萨，因此选择 C。" },
    { question: "Which family are Emily's new neighbours?", image: "/images/listening/trainer1-test2/q2.jpg", answer: 2, explanation: "Emily 说新邻居家有一位很友好的奶奶，两个和她年龄相仿的孩子，而且“just girls”（都是女孩）；图 A 是老爷爷、图 B 是一男一女两个孩子，只有图 C 是奶奶加两个女儿，因此选择 C。" },
    { question: "What was Oscar doing when Isabel phoned him?", image: "/images/listening/trainer1-test2/q3.jpg", answer: 0, explanation: "Oscar 说他正在帮爸爸搬卧室里的家具，搬完之后才打算刷墙；吃饭也不是此刻在做的事，因此选择 A。" },
    { question: "Why didn’t Niesha go to the party?", image: "/images/listening/trainer1-test2/q4.jpg", answer: 0, explanation: "Niesha 生病卧床是她之前错过学校运动会的原因；这次错过派对是因为全家正开车从度假地返回，因此选择 A。" },
    { question: "Where’s Oliver’s phone now?", image: "/images/listening/trainer1-test2/q5.jpg", answer: 1, explanation: "手机早些时候在厨房餐桌上，之后用过；朋友提醒他常忘在沙发上，但最后发现手机在书桌上、被书遮住了所以没看到，因此选择 B。" },
  ],
  23: [
    { question: "What time does the nature programme start?", image: "/images/listening/trainer1-test3/q1.jpg", answer: 1, explanation: "Catherine 以为七点半开始，爸爸查看后说自然节目排在六点半的体育节目之后，即七点十分（ten past seven）开始，因此选择 B。" },
    { question: "Who is Diana talking to on her mobile?", image: "/images/listening/trainer1-test3/q2.jpg", answer: 2, explanation: "Diana 是在给朋友 Sarah（邻居家的女儿）打电话问数学作业；Aunt Christine 是儿子猜测的对象，David 是来一起做项目的男孩，因此选择 C。" },
    { question: "Where will Henry put his mum’s watch?", image: "/images/listening/trainer1-test3/q3.jpg", answer: 0, explanation: "手表原本在灶台旁，妈妈让 Henry 放到她卧室床边的小桌上；沙发是她之前寻找的地方，因此选择 A。" },
    { question: "Why is the girl tired?", image: "/images/listening/trainer1-test3/q4.jpg", answer: 2, explanation: "打网球的是 Jane 和别人，整理房间是哥哥请她帮忙做的事；女孩累是因为公交车晚点，她一路走回家花了一个小时，因此选择 C。" },
    { question: "What will the weather be like on Sunday?", image: "/images/listening/trainer1-test3/q5.jpg", answer: 0, explanation: "对方问周日是不是多云，女孩说没关系、气温约 25 度，即周日多云；下雨是她度假时的经历，25 度说的是温度而非晴天，因此选择 A。" },
  ],
  24: [
    { question: "How much did the boy’s football shirt cost?", image: "/images/listening/trainer1-test4/q1.jpg", answer: 1, explanation: "奶奶给了他 35 英镑，但球衣在市中心的运动用品店只花了 20.50 英镑；11.75 英镑是对方 T 恤的价格，因此选择 B。" },
    { question: "What did Sophie enjoy doing most at the weekend?", image: "/images/listening/trainer1-test4/q2.jpg", answer: 2, explanation: "打排球脚疼打得不好，和弟弟游泳觉得一般；爸爸教她钓鱼，她说“真的很酷”，即最喜欢钓鱼，因此选择 C。" },
    { question: "Where did Paul stay on holiday this year?", image: "/images/listening/trainer1-test4/q3.jpg", answer: 0, explanation: "去年他们住在船上，今年妈妈想住带大泳池的酒店，但其他人都想去露营，最后就去露营了，因此选择 A。" },
    { question: "Which subject will they study first today?", image: "/images/listening/trainer1-test4/q4.jpg", answer: 1, explanation: "周二通常先上数学，但今天数学是第三节，在地理之后，所以地理之前的化学是第一节课，因此选择 B。" },
    { question: "Why was Tina late for school today?", image: "/images/listening/trainer1-test4/q5.jpg", answer: 2, explanation: "她 7 点正常起床，公交车来了却因为客满没停，这是她迟到的原因；之后回家让妈妈开车送她，但堵车不严重，因此选择 C。" },
  ],
  25: [
    { question: "How will Luciana invite her friends to her birthday party?", image: "/images/listening/trainer1-test5/q1.jpg", answer: 2, explanation: "图片 A 是打电话、B 是寄请帖、C 是在电脑前发邮件。妈妈最先建议用邮件邀请朋友，Luciana 说“你的第一个主意最好”就照做；姐姐当年寄请帖只是随口提起、打电话又太费时间，因此选择 C（用电脑发邮件）。" },
    { question: "What does Charlie want to borrow from his brother, James?", image: "/images/listening/trainer1-test5/q2.jpg", answer: 1, explanation: "图片 A 是运动鞋、B 是太阳镜、C 是牛仔裤。James 先提议借运动鞋，Charlie 说牛仔裤自己会穿（不是借的），最后说“其实我需要一副太阳镜”，因此选择 B。" },
    { question: "How will Carol get to her dance class?", image: "/images/listening/trainer1-test5/q3.jpg", answer: 0, explanation: "图片 A 是和同伴步行、B 是坐小汽车、C 是坐公交车。爸爸没法开车送她，妈妈提到公交站离 Tessa 家很远，Carol 说“别担心，路不远”，决定和 Tessa 一起走过去，因此选择 A。" },
    { question: "Which film do they decide to watch first?", image: "/images/listening/trainer1-test5/q4.jpg", answer: 0, explanation: "图片 A 是舞蹈比赛影片、B 是攀登山峰的影片、C 是讲未来生活的《Zooter》。他们说《Zooter》留到下周末表兄弟来时再看，现在先看关于舞蹈比赛的那部，因此选择 A。" },
    { question: "Which T-shirt does the girl like best?", image: "/images/listening/trainer1-test5/q5.jpg", answer: 2, explanation: "图片 A 印着棕榈树小岛、B 印着冲浪板、C 印着海豚。她说网站上印小岛的那件很棒、店里见过印冲浪板的，但最喜欢的是杂志上看到的那件（海豚图案），因此选择 C。" },
  ],
  26: [
    { question: "How did Carrie hurt her leg?", image: "/images/listening/trainer1-test6/q1.jpg", answer: 2, explanation: "图片 A 是骑自行车摔倒、B 是跑步比赛、C 是下楼梯。Carrie 说昨天赛跑时只是差点摔倒，腿其实是昨晚在家下楼时弄伤的；骑车摔倒是听话同学自己的经历，因此选择 C。" },
    { question: "Which backpack has the boy bought?", image: "/images/listening/trainer1-test6/q2.jpg", answer: 1, explanation: "图片 A 是一个大外袋、B 是两个小前袋、C 是一个大前袋（三款都有星星图案）。男孩说网上看中的款是一个大口袋，而他在市场买的这个有两个小口袋，因此选择 B。" },
    { question: "Where will Daisy have her birthday party?", image: "/images/listening/trainer1-test6/q3.jpg", answer: 0, explanation: "图片 A 是带花园的房子、B 是餐厅内部、C 是体育俱乐部。体育俱乐部是妈妈的建议、那里没有餐厅，最后妈妈同意像去年一样在自家花园办，因此选择 A。" },
    { question: "Which job does Dylan's dad do now?", image: "/images/listening/trainer1-test6/q4.jpg", answer: 2, explanation: "图片 A 是办公室职员、B 是医生、C 是救护车司机。Dylan 说爸爸在医院工作但不是医生，而是开救护车；办公室工作是他以前做了很久的旧工作，因此选择 C。" },
    { question: "What did they both do yesterday?", image: "/images/listening/trainer1-test6/q5.jpg", answer: 0, explanation: "图片 A 是冲浪、B 是帆船、C 是沙滩排球。两人都说冲浪最棒（一个说 I loved going surfing，另一个说 that was the best thing for me too）；帆船没去成、排球是下次的约定，因此选择 A。" },
  ],
  27: [
    { question: "What do they still need to buy in the shop?", image: "/images/listening/trainer2-test1/q1.jpg", answer: 2, explanation: "爸爸问东西是否都买齐了，女孩说买了蘑菇和不少别的蔬菜、胡萝卜不用买，然后想起妈妈叮嘱要买的鱼还没拿，爸爸说这就去取，因此选择 C。" },
    { question: "What has just happened?", image: "/images/listening/trainer2-test1/q2.jpg", answer: 2, explanation: "男孩说那名球员带着球突然摔倒，周围并没有人碰他，现在还躺在草地上起不来，应该是受伤了需要帮助，因此选择 C。" },
    { question: "Which is the woman’s suitcase?", image: "/images/listening/trainer2-test1/q3.jpg", answer: 0, explanation: "女士的行李箱有轮子、带黑白条纹，但上面没有任何照片或人脸图案，因此选择 A。" },
    { question: "What is the girl going to have?", image: "/images/listening/trainer2-test1/q4.jpg", answer: 0, explanation: "女孩想点茶再加一块柠檬蛋糕，但蛋糕已经卖完，她又说自己今天已经吃过一个冰淇淋，最后只要了茶，因此选择 A。" },
    { question: "What have they just watched?", image: "/images/listening/trainer2-test1/q5.jpg", answer: 1, explanation: "男孩说很喜欢小提琴，女孩说她全程都在看舞蹈演员、他们穿特制的鞋子立起脚尖，还庆幸今天没有演唱，舞者的动作很优美，因此选择 B。" },
  ],
  28: [
    { question: "Where are the boy’s jeans now?", image: "/images/listening/trainer2-test2/q1.jpg", answer: 0, explanation: "妈妈说正在洗，牛仔裤还在洗衣机里——是厨房里那台洗衣机，不是浴室里那台，因此选择 A。" },
    { question: "Where is the girl’s phone?", image: "/images/listening/trainer2-test2/q2.jpg", answer: 0, explanation: "女孩说手机被窗帘挡住了一部分所以没看见，它就在窗户边、窗帘后面，因此选择 A。" },
    { question: "What did the boy do for his neighbour?", image: "/images/listening/trainer2-test2/q3.jpg", answer: 0, explanation: "男孩说邻居家的门旧了，她想找人刷漆就请他帮忙，他已经把门漆好了，因此选择 A。" },
    { question: "What did the girl break?", image: "/images/listening/trainer2-test2/q4.jpg", answer: 1, explanation: "女孩说妈妈把几个盘子放在花园的桌子上，她踢球时球撞到桌子，盘子全都摔碎了，因此选择 B。" },
    { question: "What will be the pupils’ first lesson tomorrow?", image: "/images/listening/trainer2-test2/q5.jpg", answer: 2, explanation: "老师说地理是化学之后的第二节课，所以明天第一节课是化学，因此选择 C。" },
  ],
  29: [
    { question: "Which man is the girl’s French teacher?", image: "/images/listening/trainer2-test3/q1.jpg", answer: 2, explanation: "女孩说法语老师没有胡子，但戴一副很小的眼镜；留胡子的是数学老师 Hamswell，因此选择 C。" },
    { question: "What is the boy going to do?", image: "/images/listening/trainer2-test3/q2.jpg", answer: 1, explanation: "妈妈说不能穿足球衫去打网球，男孩又让妈妈等他拿球拍，说明他要去打网球，因此选择 B。" },
    { question: "Which bike was the woman riding?", image: "/images/listening/trainer2-test3/q3.jpg", answer: 1, explanation: "女孩说前轮比后轮大得多，座位高高装在前轮上方，与 B 图老式自行车一致，因此选择 B。" },
    { question: "Which game is the boy playing?", image: "/images/listening/trainer2-test3/q4.jpg", answer: 0, explanation: "男孩说他在玩叫 Yesterday 的游戏，要捉住恐龙、和它成为朋友并骑恐龙赛跑；赛车游戏是明天才玩，因此选择 A。" },
    { question: "How are the people going to travel?", image: "/images/listening/trainer2-test3/q5.jpg", answer: 0, explanation: "女孩说出租车太贵，男孩说坐公交要换车太费时，最后提议干脆步行，女孩同意，因此选择 A。（官方 Key 误印为 B，但 B 图是出租车，与文稿明确矛盾，按文稿取 A。）" },
  ],
  30: [
    { question: "Which is the girl’s mother?", image: "/images/listening/trainer2-test4/q1.jpg", answer: 1, explanation: "女孩说妈妈的外套有花、围巾不是条纹的，平时戴眼镜但今天没戴；A 是条纹围巾、C 戴着眼镜，因此选择 B。" },
    { question: "What is in the girl’s pencil case?", image: "/images/listening/trainer2-test4/q2.jpg", answer: 1, explanation: "女孩说铅笔盒里有钢笔、老师要求带的尺子和从不忘记带的铅笔，但没有橡皮，因此选择 B。" },
    { question: "What job does the boy’s father do?", image: "/images/listening/trainer2-test4/q3.jpg", answer: 2, explanation: "爸爸常接送人们去机场、赛后从体育场接人，还载过著名球星，是出租车司机，因此选择 C。" },
    { question: "What was the problem in the bathroom?", image: "/images/listening/trainer2-test4/q4.jpg", answer: 0, explanation: "洗衣机在浴室里，昨天水从洗衣机里流出来，漫过地板流进楼下的厨房，因此选择 A。" },
    { question: "Where are the people?", image: "/images/listening/trainer2-test4/q5.jpg", answer: 2, explanation: "妈妈让孩子在蔬菜区等着，自己去那边拿肉，还提到自己做薯条，说明他们在超市，因此选择 C。" },
  ],
  31: [
    { question: "Which is the boy’s bedroom?", image: "/images/listening/trainer2-test5/q1.jpg", answer: 0, explanation: "男孩说床沿着左墙、对面是书桌和椅子，房间太小放不下书柜，衣柜在门外走廊里；B 有衣柜、C 有书架，因此选择 A。" },
    { question: "What does the girl want to buy?", image: "/images/listening/trainer2-test5/q2.jpg", answer: 2, explanation: "女孩要为音乐节买帐篷，要完全防水、不透光，晴天也能在里面睡，因此选择 C。" },
    { question: "What did the man do on his holiday?", image: "/images/listening/trainer2-test5/q3.jpg", answer: 1, explanation: "男士说这是他第一次玩单板滑雪，觉得比滑雪容易，因此选择 B。" },
    { question: "What does the boy’s mother do?", image: "/images/listening/trainer2-test5/q4.jpg", answer: 0, explanation: "妈妈是摄影师，本周拍过工程师的加油站和音乐人的吉他照片，因此选择 A。" },
    { question: "What does the girl want to do with her friends?", image: "/images/listening/trainer2-test5/q5.jpg", answer: 1, explanation: "女孩说不想像 11 岁时那样去滑冰，只想邀请朋友们来家里看音乐视频，因此选择 B。" },
  ],
  32: [
    { question: "Which is Jonas’s band?", image: "/images/listening/trainer2-test6/q1.jpg", answer: 0, explanation: "Nick 是主唱兼吉他手，乐队里有两台键盘——一台代替钢琴、另一台代替鼓，没有真钢琴也没有鼓手；B 有鼓组、C 有钢琴，因此选择 A。（题目页印 Jonas、文稿说 Nick，为同一乐队。）" },
    { question: "What is in the fridge?", image: "/images/listening/trainer2-test6/q2.jpg", answer: 2, explanation: "女孩说冰箱里有蘑菇，牛奶也快喝完了，但鸡蛋一个都不剩，因此选择 C。" },
    { question: "How does the boy’s mother want him to travel home?", image: "/images/listening/trainer2-test6/q3.jpg", answer: 0, explanation: "妈妈说不会付双程出租车费，提议他干脆走路回家；男孩最后坐公交，但问题问妈妈的建议，因此选择 A。" },
    { question: "Which platform does the train to London leave from?", image: "/images/listening/trainer2-test6/q4.jpg", answer: 0, explanation: "开往伦敦的火车通常从 11 号站台发车，但那个站台正在维修，现在改从 1 号站台发车，因此选择 A。" },
    { question: "Where is the boy’s pencil case now?", image: "/images/listening/trainer2-test6/q5.jpg", answer: 0, explanation: "男孩说可能在车里从外套口袋掉出来了，妈妈确认看见它在汽车后座上，因此选择 A。（官方 Key 误印为 C，C 图是厨房，只对应妈妈放车钥匙的位置，与文稿明确矛盾，按文稿取 A。）" },
  ],
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
  const [searchParams, setSearchParams] = useSearchParams();
  function setSet(newSet) {
    const next = new URLSearchParams(searchParams);
    next.set("set", newSet);
    next.set("part", part);
    setSearchParams(next, { replace: true });
  }
  return (
    <section className="mt-6 rounded-[22px] border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <strong className="text-sm text-gray-800">选择练习</strong>
        <span className="text-xs text-gray-400">
          共 {OFFICIAL_LISTENING_SETS.length} 套 · 当前为练习{activeSet}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
        {OFFICIAL_LISTENING_SETS.map((set) => {
          const active = set.id === activeSet;
          return (
            <button
              key={set.id}
              type="button"
              onClick={() => setSet(set.id)}
              aria-current={active ? "page" : undefined}
              className={`rounded-xl border px-2 py-3 text-center text-sm font-extrabold transition ${
                active
                  ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                  : "border-emerald-100 bg-emerald-50 text-emerald-800 hover:border-emerald-300"
              }`}
            >
              {set.id}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ListeningTabBar({ active, isPet = false, setId, onSelect }) {
  const navigate = useNavigate();
  const activeStyle = isPet
    ? "border-violet-600 bg-violet-600 text-white shadow-sm"
    : "border-emerald-600 bg-emerald-600 text-white shadow-sm";
  const tabStyle = isPet
    ? "border-violet-200 bg-violet-50 text-violet-800 hover:bg-violet-100"
    : "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100";
  const neutralStyle = "border-gray-200 bg-white text-gray-500 hover:border-gray-300";
  const partCount = isPet ? 4 : 5;
  function go(target) {
    if (onSelect) return onSelect(target);
    if (target === "centre")
      navigate(
        isPet
          ? "/cambridge/listening?view=pet-centre"
          : "/cambridge/listening?view=ket-centre",
      );
    else if (target === "common")
      navigate("/cambridge/listening?view=common");
    else if (target === "dictation") navigate("/cambridge/dictation");
    else if (isPet)
      navigate(
        `/cambridge/listening?view=pet-bypart&petPart=${target}&source=pet&petTest=1`,
      );
    else navigate(`/cambridge/listening?part=${target}&set=${setId || 9}`);
  }
  const pill = (target, label) => (
    <button
      key={String(target)}
      type="button"
      onClick={() => go(target)}
      className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold transition ${
        active === target
          ? activeStyle
          : target === "centre"
            ? neutralStyle
            : tabStyle
      }`}
    >
      {label}
    </button>
  );
  return (
    <nav className="border-b border-gray-100 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2.5">
        {pill("centre", "我的听力中心")}
        {/* 听力常见考点 / 听力挖空练习目前只有 KET 内容，PET 不显示入口 */}
        {!isPet && pill("common", "听力常见考点")}
        {!isPet && pill("dictation", "听力挖空练习")}
        {Array.from({ length: partCount }, (_, i) => i + 1).map((p) =>
          pill(p, `Part ${p}`),
        )}
      </div>
    </nav>
  );
}

function ListeningPartNav({ activePart, setId }) {
  return <ListeningTabBar active={activePart} setId={setId} />;
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
  const questions = PART1_SETS_ALL[setId] || KET3_TEST1_PART1;
  const saved = readListeningProgress(setId, 1);
  const [answers, setAnswers] = useState(() =>
    saved?.answers?.length === questions.length
      ? saved.answers
      : Array(questions.length).fill(null),
  );
  const [localSubmitted, setLocalSubmitted] = useState(() => Boolean(saved?.submitted));
  const [revealExplanation, setRevealExplanation] = useState({});
  useEffect(() => {
    saveListeningProgress(setId, 1, {
      answers,
      submitted: localSubmitted,
      completed: localSubmitted,
      wrongCount: localSubmitted ? answers.reduce((count, value, index) => count + (value !== null && value !== questions[index].answer ? 1 : 0), 0) : 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, localSubmitted, setId]);
  function resetProgress() {
    clearListeningProgress(setId, 1);
    setAnswers(Array(questions.length).fill(null));
    setLocalSubmitted(false);
  }
  function submitAll() {
    setLocalSubmitted(true);
  }
  const answeredCount = answers.filter((value) => value !== null).length;
  const correct = localSubmitted ? answers.reduce(
    (total, value, index) =>
      total + (value === questions[index].answer ? 1 : 0),
    0,
  ) : 0;
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <ListeningPartNav activePart={1} setId={setId} />
      <main className="mx-auto max-w-6xl px-6 py-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">
              A2 KEY · LISTENING
            </div>
            <h1 className="mt-1 text-4xl font-extrabold">Part 1 图片选择题</h1>
            <p className="mt-2 text-gray-500">
              练习{setId} · 听五段短对话，从 A、B、C 三幅图片中选择正确答案。
            </p>
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
            const selected = answers[index];
            const done = localSubmitted && selected !== null;
            const right = localSubmitted && selected === item.answer;
            return (
              <article
                key={item.question}
                className={`rounded-[24px] border bg-white p-5 md:p-7 ${
                  localSubmitted
                    ? right
                      ? "border-emerald-400"
                      : "border-rose-300"
                    : selected !== null
                      ? "border-emerald-200"
                      : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-100 font-extrabold text-emerald-700">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-extrabold text-gray-950">
                      {item.question}
                    </h2>
                    <div className="mt-5">
                      <img
                        src={item.image}
                        alt={`Question ${index + 1} options A, B and C`}
                        className="w-full rounded-xl border border-gray-200 bg-white"
                      />
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[0, 1, 2].map((option) => {
                          const sel = selected === option;
                          return (
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
                              className={`h-11 rounded-xl border-2 text-base font-extrabold transition ${
                                sel
                                  ? localSubmitted
                                    ? right
                                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                      : "border-rose-500 bg-rose-50 text-rose-700"
                                    : "border-emerald-500 bg-emerald-50 text-emerald-700"
                                  : "border-gray-200 text-gray-500 hover:border-emerald-300 hover:text-emerald-700"
                              }`}
                            >
                              {String.fromCharCode(65 + option)}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {done && (
                      <div
                        className={`mt-4 rounded-xl px-4 py-3 text-sm ${right ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}
                      >
                        <div className="flex flex-wrap items-center gap-x-2">
                          <strong>
                            {right
                              ? "✓ 回答正确！"
                              : `再听一次。正确答案是 ${String.fromCharCode(65 + item.answer)}。`}
                          </strong>
                          <button
                            type="button"
                            onClick={() =>
                              setRevealExplanation((v) => ({
                                ...v,
                                [index]: !v[index],
                              }))
                            }
                            className="text-xs font-extrabold text-emerald-700 hover:underline"
                          >
                            {revealExplanation[index] ? "收起解析" : "查看解析"}
                          </button>
                        </div>
                        {revealExplanation[index] && item.explanation && (
                          <p className="mt-1.5 leading-6">{item.explanation}</p>
                        )}
                        <TranscriptBox
                          transcript={item.transcript}
                          highlights={extractQuotes(item.explanation || item.exp || '')}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <section className="mt-6 rounded-[22px] bg-[#064e3b] p-5 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              {localSubmitted ? (
                <strong className="text-2xl text-[#f7cd60]">
                  正确 {correct} / {questions.length}
                </strong>
              ) : (
                <strong>
                  已作答 {answeredCount} / {questions.length}
                </strong>
              )}
            </div>
            {!localSubmitted ? (
              <button
                disabled={answeredCount < questions.length}
                onClick={submitAll}
                className="rounded-xl bg-[#f7cd60] px-6 py-2.5 text-sm font-extrabold text-[#064e3b] transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/50"
              >
                提交答案
              </button>
            ) : (
              <button
                onClick={resetProgress}
                className="rounded-xl bg-white/20 px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-white/30"
              >
                重做本题
              </button>
            )}
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#f7cd60] transition-all"
              style={{
                width: `${
                  ((localSubmitted ? correct : answeredCount) / questions.length) * 100
                }%`,
              }}
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
};

const OFFICIAL_PART2_BASE = {
  21:{title:'Part 2 信息填空题',instruction:'听老师向全班介绍一个新的音乐俱乐部，填写一个单词、数字或时间。',type:'blanks',items:[
    {q:'New music club — Day club will meet:',answer:['Thursday','Thursdays','thursday','thursdays'],show:'Thursday'},
    {q:'New music club — Time: from ___ to 5 p.m.',answer:['4.20','4:20','16.20','16:20','twenty past four','four twenty'],show:'4:20'},
    {q:'New music club — Teacher’s name: Mr ___',answer:['Taylor','taylor'],show:'Taylor'},
    {q:'New music club — Teacher’s phone number:',answer:['0779386521','07793 86521'],show:'0779386521'},
    {q:'New music club — Place:',answer:['library','the library'],show:'library'}]},
  22:{title:'Part 2 信息填空题',instruction:'听一位女士向学生介绍动物园参观活动，填写一个单词、数字或时间。',type:'blanks',items:[
    {q:'Zoo visit — Animal to draw:',answer:['tiger','a tiger','the tiger'],show:'tiger'},
    {q:'Zoo visit — Time to give animals water: ___ a.m.',answer:['10.45','10:45','ten forty-five','quarter to eleven'],show:'10:45'},
    {q:'Zoo visit — Name of baby lion:',answer:['Sohatu','sohatu'],show:'Sohatu'},
    {q:'Zoo visit — Age of oldest dolphin:',answer:['37','thirty-seven','thirty seven'],show:'37'},
    {q:'Zoo visit — Get free:',answer:['poster','a poster','the poster'],show:'poster'}]},
  23:{title:'Part 2 信息填空题',instruction:'听男孩给朋友留言介绍一场足球比赛的安排，填写一个单词或数字。',type:'blanks',items:[
    {q:'Football match — Name of stadium:',answer:['Bridge','bridge','the Bridge'],show:'Bridge'},
    {q:'Football match — Bus number:',answer:['395','three nine five','three ninety-five'],show:'395'},
    {q:'Football match — Cost of ticket: £',answer:['4.50','4:50','4.5','four fifty','four pounds fifty'],show:'4.50'},
    {q:'Football match — Wear:',answer:['coat','a coat'],show:'coat'},
    {q:'Football match — Bring:',answer:['snack','a snack','snacks'],show:'snack'}]},
  24:{title:'Part 2 信息填空题',instruction:'听 Rosie 的姑姑介绍一场舞蹈比赛，填写一个单词或数字。',type:'blanks',items:[
    {q:'Dance competition — Date to enter by:',answer:['12th July','12 July','July 12','12/07','07/12','twelfth July','12 jul'],show:'12th July'},
    {q:'Dance competition — Send:',answer:['video','a video'],show:'video'},
    {q:'Dance competition — Website address: www.',answer:['jittersea','jittersea.com'],show:'jittersea'},
    {q:'Dance competition — Place:',answer:['college','the college'],show:'college'},
    {q:'Dance competition — First prize: £',answer:['175','175.00','one hundred and seventy-five'],show:'175'}]},
  25:{title:'Part 2 信息填空题',instruction:'听男孩给朋友留言介绍英语作业的安排，填写一个单词或数字/日期。',type:'blanks',items:[
    {q:'Homework — What to write:',answer:['story','a story'],show:'story'},
    {q:'Homework — Number of words:',answer:['250','two hundred and fifty'],show:'250'},
    {q:'Homework — Remember to add:',answer:['photo','a photo','photograph','a photograph'],show:'photo'},
    {q:'Homework — Get ideas from: www.___.com',answer:['collatra','collatra.com'],show:'collatra'},
    {q:'Homework — Date to give to teacher:',answer:['22nd May','22 May','May 22','22/05','05/22','twenty-second May','the 22nd of May'],show:'22nd May'}]},
  26:{title:'Part 2 信息填空题',instruction:'听老师向学生介绍去城堡的班级旅行安排，填写一个单词或数字/时间。',type:'blanks',items:[
    {q:'Class trip — Cost: £',answer:['5.60','5,60','five pounds sixty','5 pounds 60'],show:'5.60'},
    {q:'Class trip — Day of trip:',answer:['Saturday','saturday','Sat'],show:'Saturday'},
    {q:'Class trip — Time bus leaves school: ___ a.m.',answer:['9:10','9.10','ten past nine','910'],show:'9:10'},
    {q:'Class trip — Bring:',answer:['camera','a camera'],show:'camera'},
    {q:'Class trip — Name of special exhibition:',answer:['Modana','modana'],show:'Modana'}]},
  27:{title:'Part 2 信息填空题',instruction:'听一位导游介绍布里斯托尔的街头艺术徒步游览，填写一个单词、数字或日期。',type:'blanks',items:[
    {q:'Street art tour — Where Bristol’s best street art is: next to a',answer:['motorway'],show:'motorway'},
    {q:'Street art tour — Bristol’s biggest piece of street art: a picture of a',answer:['baby'],show:'baby'},
    {q:'Street art tour — Artist whose art you’ll see:',answer:['inkie'],show:'Inkie'},
    {q:'Street art tour — Date of next available tour:',answer:['25 april','april 25','april 25th','25th april','25th of april','the 25th of april','april the twenty-fifth','25/04','04/25'],show:'25 April'},
    {q:'Street art tour — What visitors usually enjoy: the guide’s',answer:['stories','the stories'],show:'stories'}]},
  28:{title:'Part 2 信息填空题',instruction:'听 Rosie 给 Freddie 留的语音留言，填写一个单词、数字或日期。',type:'blanks',items:[
    {q:'Bike ride — Time to meet:',answer:['10:30','10.30','ten thirty','half past ten','1030'],show:'10:30'},
    {q:'Bike ride — Where we’ll cycle to: the',answer:['lake'],show:'lake'},
    {q:'Bike ride — Where to meet: in the park on',answer:['hartley'],show:'Hartley'},
    {q:'Bike ride — What Rosie wants to take photos of: the',answer:['bees','the bees'],show:'bees'},
    {q:'Bike ride — Rosie’s new phone number:',answer:['0766823901','0766 823901','0766-823901'],show:'0766 823901'}]},
  29:{title:'Part 2 信息填空题',instruction:'听 Jemima 给 Lisa 留的语音留言，填写一个单词、数字、日期或时间。',type:'blanks',items:[
    {q:'Visit to Jemima — Time to meet:',answer:['3:15','3.15','three fifteen','quarter past three','1515'],show:'3:15'},
    {q:'Visit to Jemima — Place to meet (by the ___ near the park):',answer:['chemist'],show:'chemist'},
    {q:'Visit to Jemima — Phone number for Jemima’s mother:',answer:['07905965433'],show:'07905965433'},
    {q:'Visit to Jemima — What to bring (a ___):',answer:['toothbrush'],show:'toothbrush'},
    {q:'Visit to Jemima — Possible film to watch:',answer:['Kazoom'],show:'Kazoom'}]},
  30:{title:'Part 2 信息填空题',instruction:'听妈妈留的语音留言，了解爷爷生日派对的安排，填写一个单词、数字或时间。',type:'blanks',items:[
    {q:'Grandad’s birthday party — Name of hotel (the ___):',answer:['Yeovil','yeovil'],show:'Yeovil'},
    {q:'Grandad’s birthday party — Address of hotel (57 ___ Road):',answer:['Airport','airport'],show:'Airport'},
    {q:'Grandad’s birthday party — Time to meet there:',answer:['4:15','4.15','quarter past four','four fifteen','1615'],show:'4:15'},
    {q:'Grandad’s birthday party — Which bus to get:',answer:['84','the 84','bus 84'],show:'84'},
    {q:'Grandad’s birthday party — Mum’s work phone number:',answer:['01172387922','0117 238 7922','0117-238-7922'],show:'0117 238 7922'}]},
  31:{title:'Part 2 信息填空题',instruction:'听活动中心经理 Mark 的语音留言，填写一个单词、数字或时间。',type:'blanks',items:[
    {q:'Longnor Activity Centre — Manager’s phone number:',answer:['07302874266','07302 874 266','07302-874-266'],show:'07302 874 266'},
    {q:'Longnor Activity Centre — Time to meet after lunch:',answer:['1:45','1.45','quarter to two','one forty-five','1345'],show:'1:45'},
    {q:'Longnor Activity Centre — First activity:',answer:['climbing'],show:'climbing'},
    {q:'Longnor Activity Centre — Place for supper (___ Lake):',answer:['Fairbourne'],show:'Fairbourne'},
    {q:'Longnor Activity Centre — What to take (a ___):',answer:['towel'],show:'towel'}]},
  32:{title:'Part 2 信息填空题',instruction:'听女孩给朋友留的语音留言，了解看电影的安排，填写一个单词、数字、日期或时间。',type:'blanks',items:[
    {q:'Trip to the cinema — Date:',answer:['June 5','5 June','June 5th','5th June','jun 5'],show:'June 5'},
    {q:'Trip to the cinema — Cinema (The ___ Cinema):',answer:['Mercia'],show:'Mercia'},
    {q:'Trip to the cinema — Address (___ Street):',answer:['Green'],show:'Green'},
    {q:'Trip to the cinema — Time to meet:',answer:['3:10','3.10','ten past three','1510'],show:'3:10'},
    {q:'Trip to the cinema — Length of film (___ minutes):',answer:['75'],show:'75'}]},
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

const OFFICIAL_PART3_BASE = {
  21: {
    title: "Part 3 长篇听力题",
    instruction: "听 Luis 和朋友 Charlotte 谈论一款电脑游戏，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Where did Luis first find out about the game?", opts: ["from a game website", "from a school friend", "from a magazine advertisement"], answer: 2, explanation: "Luis 借了同学的杂志，在上面看到游戏广告；网站是妈妈购买游戏的渠道，同学只是借给他杂志，因此选择 C。" },
      { q: "Charlotte likes the game because", opts: ["it’s funny.", "it’s hard.", "it’s new."], answer: 1, explanation: "Charlotte 说游戏并不新、也完全不好笑，但并不简单（isn’t easy），这正是她最喜欢的地方，因此选择 B。" },
      { q: "Who does Luis want to play the game with?", opts: ["his brother", "his granddad", "his cousin"], answer: 1, explanation: "哥哥忙于学习、表（堂）妹 Amy 只喜欢棋盘游戏，而爷爷时间充裕，所以 Luis 想和爷爷一起玩，因此选择 B。" },
      { q: "How long did Charlotte play the game for last Saturday?", opts: ["forty-five minutes", "one hour", "one hour and thirty minutes"], answer: 0, explanation: "上周三她玩了一个半小时、周五玩了一小时，而上周六玩了四分之三小时，即 45 分钟，因此选择 A。" },
      { q: "Which part of the game does Luis like best?", opts: ["finding food", "building a hut", "crossing the river"], answer: 0, explanation: "过河很不错，但 Luis 最喜欢的环节是寻找食物，搭建小屋反而是他最不喜欢的，因此选择 A。" },
    ],
  },
  22: {
    title: "Part 3 长篇听力题",
    instruction: "听 Jasmine 和阿姨谈论一次露营旅行，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Where did Jasmine and her aunt go swimming?", opts: ["in the sea", "in the river", "in the lake"], answer: 2, explanation: "海上风太大无法游泳，在河里游只是她们“下次可以试试”的计划；她们这次是在湖里游得很开心，因此选择 C。" },
      { q: "How did Jasmine feel about sleeping in a tent to start with?", opts: ["excited", "afraid", "unhappy"], answer: 1, explanation: "Jasmine 说第一晚她很担心（worried），很快才发现睡帐篷很刺激；unhappy 是没能同行的哥哥的感受，属于干扰项，因此选择 B。" },
      { q: "What did Jasmine’s aunt like cooking?", opts: ["omelette", "steak", "pasta"], answer: 1, explanation: "煎蛋卷很难做，而阿姨说自己喜欢在烧烤架上烤牛排；意面是 Jasmine 亲手做的，不是阿姨做的，因此选择 B。" },
      { q: "Jasmine’s aunt thought the campsite", opts: ["needed a shop.", "had good showers.", "was too small."], answer: 0, explanation: "阿姨说营地相当大（排除 C），遗憾的是没有地方可买食物和用品，即需要一家商店；淋浴只是“有点脏但还可以”（排除 B），因此选择 A。" },
      { q: "Which activity did Jasmine like best?", opts: ["cycling", "fishing", "running"], answer: 1, explanation: "Jasmine 说在森林里跑步还行但很累，而钓鱼太棒了，甚至比骑自行车还有趣，因此她最喜欢的是钓鱼，选择 B。" },
    ],
  },
  23: {
    title: "Part 3 长篇听力题",
    instruction: "听 Hitomi 和朋友 Freddie 谈论她参观 Hardin Castle 的经历，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Who did Hitomi go to Hardin Castle with?", opts: ["her classmates", "her family", "her neighbours"], answer: 2, explanation: "Hitomi 的班级去的是工厂，她和住在隔壁的一家人去的城堡，即邻居，因此选择 C。" },
      { q: "What was the weather like?", opts: ["cold", "wet", "windy"], answer: 1, explanation: "周六下了雨，即 wet；又冷又刮风的是“今天”，不是参观当天，因此选择 B。" },
      { q: "What do Hitomi and Freddie both like best at Hardin Castle?", opts: ["the Queen’s bathroom", "the yellow bedroom", "the dining room"], answer: 0, explanation: "Freddie 说最喜欢楼上的女王浴室，Hitomi 说“me too”；餐厅只是看过，黄色卧室则让她觉得奇怪，因此选择 A。" },
      { q: "Freddie went to the castle because he wanted", opts: ["to learn about history.", "to take photos.", "to find out about birds."], answer: 2, explanation: "拍照只是 Freddie 的爱好、并非此行目的；他在那里碰巧见到历史老师，而真正目的是了解野生鸟类，因此选择 C。" },
      { q: "What’s on at the castle next month?", opts: ["a running race", "an exhibition of old cars", "a painting course"], answer: 1, explanation: "五公里赛跑是下周、绘画课程要到明年夏天；下个月展出的是 50 多年车龄的老爷车，因此选择 B。" },
    ],
  },
  24: {
    title: "Part 3 长篇听力题",
    instruction: "听 Tommy 和朋友 Olga 谈论班级聚会，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Which date is the class party?", opts: ["25th June", "28th June", "1st July"], answer: 1, explanation: "Olga 的生日在 7 月 1 日；班级聚会定在 6 月底，28 号是周五比 25 号更好，因此聚会日期是 6 月 28 日，选择 B。" },
      { q: "What does Olga think Tommy should wear to the party?", opts: ["his black jeans", "his blue shorts", "his green T-shirt"], answer: 1, explanation: "Tommy 在黑色牛仔裤和蓝色短裤之间犹豫，Olga 让他穿新的黑色 T 恤配蓝色短裤，因此推荐的是蓝色短裤，选择 B。" },
      { q: "What’s Olga worried about?", opts: ["singing at the party", "playing the guitar", "helping tidy up"], answer: 2, explanation: "Tommy 让她像学校音乐会那样唱歌或像去年那样弹吉他，Olga 担心的是聚会后帮忙收拾打扫会花很长时间，因此选择 C。" },
      { q: "Why will Tommy arrive at the party late?", opts: ["He’ll have to wait for a lift.", "There aren’t many buses.", "He wants to play tennis first."], answer: 2, explanation: "Tommy 要先参加体育俱乐部的网球比赛，没时间坐公交，之后妈妈开车送他，所以会迟到，原因是先打网球，选择 C。" },
      { q: "What’s Olga going to take to the party?", opts: ["some balloons", "some paper plates", "some food"], answer: 0, explanation: "Olga 的妈妈会做食物、他们带纸盘；Tommy 问她有没有气球，Olga 说有，因此她要带的是气球，选择 A。" },
    ],
  },
  25: {
    title: "Part 3 长篇听力题",
    instruction: "听 Dan 在运动用品店和店员谈论买滑板的事，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Dan thinks plastic skateboards are", opts: ["cheap.", "popular.", "light."], answer: 1, explanation: "Dan 说塑料滑板并不总是便宜，但朋友们都用塑料的，所以他认为塑料滑板受欢迎；“heavy wheels”是他哥哥那块板的轮子，因此选择 B。" },
      { q: "What colour skateboard does Dan prefer?", opts: ["purple", "yellow", "grey"], answer: 2, explanation: "Dan 说紫色好看、黄色有趣，但“灰色对我来说是更好的颜色”，因此他更喜欢灰色，选择 C。" },
      { q: "The shop assistant says the best skateboard for Dan is about", opts: ["16 cm wide.", "18 cm wide.", "20 cm wide."], answer: 0, explanation: "店员说 20 厘米最适合进阶玩家、18 厘米次之，而 Dan 是初学者，所以 16 厘米的最好，因此选择 A。" },
      { q: "What free gift can Dan get from the shop?", opts: ["a backpack", "some gloves", "a scarf"], answer: 1, explanation: "海报挂背包旁、本月赠送一副手套；围巾是 Dan 觉得好看但并非赠品，因此选择 B。" },
      { q: "When will Dan buy a skateboard?", opts: ["on Wednesday", "on Friday", "on Saturday"], answer: 1, explanation: "店员提醒周三店不开门，Dan 的爸爸周六很忙，于是他们决定周五来买，因此选择 B。" },
    ],
  },
  26: {
    title: "Part 3 长篇听力题",
    instruction: "听 Nadia 和 Tom 谈论他们的新学校，选择正确答案。",
    type: "mcq",
    items: [
      { q: "How will Nadia get to their new school?", opts: ["by bike", "by bus", "on foot"], answer: 0, explanation: "Nadia 说学校不远不用坐公交，但书太重走路去不了，所以骑车去，因此选择 A。" },
      { q: "What doesn't Tom like about the school uniform?", opts: ["the jacket", "the shirt", "the trousers"], answer: 2, explanation: "对话说外套很棒、蓝衬衫最好，而裤子很无聊（not boring like the trousers），即 Tom 不喜欢的是裤子，因此选择 C。" },
      { q: "How many students are there in the new school?", opts: ["under 500", "about 800", "more than 1000"], answer: 2, explanation: "Tom 说妈妈告诉他新学校有 1055 人；800 是旧学校、475 是小学的人数，因此选择 C。" },
      { q: "Which subject does Nadia like?", opts: ["chemistry", "maths", "biology"], answer: 1, explanation: "化学是没人上过的新课、Nadia 不确定会不会喜欢，但她喜欢数学、所以觉得自己会喜欢化学；生物在哪上还不确定，因此选择 B。" },
      { q: "What will they do on the first day?", opts: ["have a class quiz", "visit the school library", "meet all their teachers"], answer: 2, explanation: "第一天他们要和所有老师见面谈话；图书馆参观和关于图书馆的小测验都在第二周，因此选择 C。" },
    ],
  },
  27: {
    title: "Part 3 长篇听力题",
    instruction: "听 Ben 和朋友 Gabby 谈论镇上新开的滑板公园，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Who told Ben about the new skate park?", opts: ["his brother", "his girlfriend", "his sister"], answer: 0, explanation: "Gabby 猜是 Ben 的姐姐告诉他的，Ben 说姐姐从来什么都不告诉他，其实是哥哥告诉他的，因此选择 A。" },
      { q: "How does Gabby feel about the new skate park?", opts: ["excited that it is near her home", "pleased that it is so big", "surprised that it is already open"], answer: 0, explanation: "Gabby 说滑板公园就在她家附近，一开放她就迫不及待想去试试，即因为离家近而兴奋，因此选择 A。" },
      { q: "When will Ben go to the skate park?", opts: ["today", "tomorrow", "at the weekend"], answer: 2, explanation: "有朋友今天约他但他放学后没空，明天他有空朋友却没空，Gabby 建议周末去，Ben 说这正是他们的计划，因此选择 C。" },
      { q: "They think the skate park will be popular if", opts: ["skateboard lessons are offered there.", "skateboarding videos are made there.", "skateboards are available to rent there."], answer: 1, explanation: "Ben 建议大家在公园里自己拍视频再分享出去，Gabby 说大家看到视频就会更想去，因此选择 B。" },
      { q: "What new activity would Ben and Gabby like at the park?", opts: ["golf", "climbing", "tennis"], answer: 1, explanation: "公园已经有网球，场地也放不下高尔夫，Ben 希望建一面攀岩墙，Gabby 说她也想要，因此选择 B。" },
    ],
  },
  28: {
    title: "Part 3 长篇听力题",
    instruction: "听同学 Emily 和 Joe 谈论学校正在学习的剧本《暴风雨》（Thunderstorm），选择正确答案。",
    type: "mcq",
    items: [
      { q: "Why did Emily miss the English lesson?", opts: ["she forgot about it", "she was at the doctor’s", "she had a music lesson"], answer: 2, explanation: "Emily 说自己正在学小提琴，小提琴课和英语课时间冲突，因此选择 C。" },
      { q: "Where does the action in the play happen?", opts: ["on a boat", "in a castle", "on an island"], answer: 2, explanation: "Emily 说剧中人们乘船来到一座岛上，Joe 说对，整部戏都发生在那座岛上，因此选择 C。" },
      { q: "How does Joe feel about the play?", opts: ["surprised at how interesting it is", "pleased that it is on a new topic", "bored because it is difficult"], answer: 0, explanation: "Joe 原以为老剧本会又无聊又难，结果发现自己完全想错了，还很想接着看，因此选择 A。" },
      { q: "Emily and Joe agree they’d like to", opts: ["act in Thunderstorm", "watch Thunderstorm at the local theatre", "see another play by the same writer"], answer: 0, explanation: "Joe 提议全班自己来演这部剧，Emily 说他们来演、Joe 演国王，两人都觉得会很有趣，因此选择 A。" },
      { q: "How will Emily know what the homework is?", opts: ["it will be on the class webpage", "her classmates will email her", "the teacher will phone her"], answer: 1, explanation: "老师把作业分给小组，Joe 说其他组员会发邮件告诉 Emily 作业内容，因此选择 B。" },
    ],
  },
  29:{title:'Part 3 长篇听力题',instruction:'听 Olivia 和爸爸讨论学校组织的汽车厂参观，选择正确答案。',type:'mcq',items:[
    {q:'What date is the visit?',opts:['November 2','November 3','November 4'],answer:2,explanation:'Olivia 说 2 日是周六、3 日是周日，参观定在 4 日那个上学日，因此选择 C。'},
    {q:'What does Olivia’s dad want to know?',opts:['if the visit is free','how long the visit lasts','which car factory they are visiting'],answer:0,explanation:'爸爸说邮件里没提到参观是否要付费（if we pay for it or not），因此选择 A。'},
    {q:'Olivia was surprised when she heard the school trip was to a car factory',opts:['because her teacher thinks visiting factories is boring.','because the school usually only takes pupils to museums.','because cars are not this term’s subject.'],answer:1,explanation:'Olivia 说老师最喜欢博物馆，平时出游都去博物馆，所以这次去工厂让她很意外，因此选择 B。'},
    {q:'What is Olivia excited about seeing at the factory?',opts:['some racing cars and motorbikes','the most modern cars','a car that was used in a film'],answer:2,explanation:'Olivia 说迫不及待想看在那部动作片里出现过的那辆车（爸爸补充它还和摩托车比赛过），因此选择 C。'},
    {q:'What does Olivia’s dad say she should do at the factory?',opts:['ask questions','take photos','listen quietly'],answer:0,explanation:'爸爸说如果厂里的人问“有没有问题”，一定要开口提问，因此选择 A。'}]},
  30:{title:'Part 3 长篇听力题',instruction:'听两个同学讨论一场关于生活中数学的演讲，选择正确答案。',type:'mcq',items:[
    {q:'How does the girl feel about the talk?',opts:['pleased that she went to it','surprised by what the teacher said','happy that her friends told her about it'],answer:0,explanation:'朋友们决定不去，但女孩说自己很高兴去了（I’m glad I did），因此选择 A。'},
    {q:'What does the boy say is difficult to know?',opts:['how fast he is going','how far he has travelled','how long a journey will take'],answer:2,explanation:'男孩说全家开车去 90 公里外时喜欢猜几点能到，但有的路快有的路慢，总是很难猜准，因此选择 C。'},
    {q:'The girl didn’t know that maths can be useful for',opts:['buying paint.','playing a sport.','shopping for food.'],answer:1,explanation:'女孩说大家都知道数学能在买食物时核对价格，涂料是男孩说的；她不知道的是数学能帮网球运动员判断击球位置，因此选择 B。'},
    {q:'Tomorrow, maths will help the boy to decide',opts:['what temperature to use.','how much food he needs.','how long to cook the cake.'],answer:1,explanation:'男孩明天要做更大的蛋糕，所有配料都要翻倍（黄油从 175 克变 350 克），烘烤时间和温度都不变，因此选择 B。'},
    {q:'What does the girl say about going to university in the future?',opts:['It’s too early to think about it.','She’d like to do a degree in maths.','Her parents would like her to study maths.'],answer:0,explanation:'女孩说自己才 13 岁，18 岁才可能上大学，还早得很，以后再和父母谈，因此选择 A。'}]},
  31:{title:'Part 3 长篇听力题',instruction:'听校长和 Isabel 谈论她本学期的学习情况，选择正确答案。',type:'mcq',items:[
    {q:'The man says Isabel’s teachers are pleased that she',opts:['works so hard in lessons.','always does her homework.','often answers their questions in class.'],answer:2,explanation:'老师们说有她在课堂上很棒：常在提问时给出好的回答，即使是很难的作业问题，因此选择 C。'},
    {q:'Isabel says that she enjoys learning physics because she',opts:['likes the teacher.','is getting better at it.','thinks the subject is interesting.'],answer:1,explanation:'Isabel 说自己的物理成绩进步了很多（marks have improved so much），这正是她喜欢物理的原因，因此选择 B。'},
    {q:'Which activity did Isabel choose on her theatre studies course?',opts:['writing the play','acting in the play','making clothes for the actors'],answer:2,explanation:'Isabel 说有一组人写剧本，她的任务是给演员做服装（costumes），因此选择 C。'},
    {q:'Why does the headteacher say Isabel should study chemistry?',opts:['She’s very good at chemistry.','Chemistry might help her in the future.','She might do a chemistry course at university.'],answer:1,explanation:'校长说 Isabel 想当兽医，需要了解动物药品的知识，学校化学课对此有帮助，因此选择 B。'},
    {q:'How does Isabel feel about her Italian classes?',opts:['pleased she will still have the same teacher','surprised that she did well in the exam','interested what she will learn next term'],answer:1,explanation:'校长夸她意大利语考试考得好，Isabel 说自己简直不敢相信（I couldn’t believe it），因此选择 B。'}]},
  32:{title:'Part 3 长篇听力题',instruction:'听 Marina 给弟弟讲朋友 Jack 的派对，选择正确答案。',type:'mcq',items:[
    {q:'Why did Jack have the party?',opts:['It was his birthday.','He received some good news.','The school year has just finished.'],answer:1,explanation:'Jack 听说自己入选同龄组国家冰球队才办派对，不是学年末，生日也在八月，因此选择 B。'},
    {q:'Which activity happened at the party?',opts:['dancing','watching a film','listening to music'],answer:2,explanation:'朋友的乐队在派对上演奏了电影歌曲；大家想跳舞但房间太小没跳成，因此选择 C。'},
    {q:'What did the guests eat?',opts:['food that they took with them','a meal that Jack’s parents made','pizzas that they ordered'],answer:0,explanation:'Jack 的父母提出做饭但人太多做不了，Jack 让每人带零食来分享，因此选择 A。'},
    {q:'How did Marina feel at the end of the party?',opts:['worried about getting home','angry about losing her jacket','surprised it was finished already'],answer:2,explanation:'派对 11 点就结束了，Marina 说简直不敢相信这么快就到回家时间，因此选择 C。'},
    {q:'What did Marina enjoy most at the party?',opts:['meeting lots of new people','hearing some funny stories','knowing that a friend was having fun'],answer:2,explanation:'同学 Zara 因姐姐搬去澳大利亚一直很难过，派对结束时她看起来很开心，Marina 说自己确实为她高兴，因此选择 C。'}]},
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

const OFFICIAL_PART4_BASE = {
  21: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "What did the boy buy yesterday?", opts: ["something to wear", "something to eat", "something to read"], answer: 0, explanation: "两个朋友谈论购物：课本和杂志是妈妈之前就买好的，T恤太贵没买，零食是打算现在去买的；男孩昨天真正买到的是大家都夸很酷的手套，属于穿戴之物，因此选择 A。" },
      { q: "Why didn’t Lyn come to school yesterday?", opts: ["She was sick.", "She was in a competition.", "She arrived back late from holiday."], answer: 2, explanation: "老师以为 Lyn 病了，但她解释说全家在瑞士露营一周，周日航班被取消、周一才飞回，所以没能赶上昨天的课，因此选择 C。" },
      { q: "How did he learn to surf?", opts: ["by doing a course", "by watching videos", "by practising by himself"], answer: 1, explanation: "他起初自己反复练习却没有进步，冲浪课程又恰好安排在他踢足球的周五；最终是一个网站上著名冲浪者的教学视频真正帮到了他，因此选择 B。" },
      { q: "Which subject did she like best?", opts: ["geography", "English", "biology"], answer: 2, explanation: "海洋与水温的地理课在前，但她说最有趣的是关于蜜蜂如何群居、如何从卵发育为成虫的课，这属于生物，因此选择 C。" },
      { q: "Why did they both sleep badly?", opts: ["Their bedroom was hot.", "There were noises in the street.", "They were excited about going on holiday."], answer: 0, explanation: "兄弟俩一致认为要让爸爸把房间暖气调小，并说“那就是问题所在”，即卧室太热；楼下的音乐和外面装车的声音不是主要原因，因此选择 A。" },
    ],
  },
  22: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "Who’s Teresa waiting for?", opts: ["a classmate", "a member of her family", "a teacher"], answer: 1, explanation: "Teresa 在校门口等阿姨开车来接她一起去市中心买生日礼物，阿姨是家庭成员；在那边和体育老师说话的是她的弟弟，因此选择 B。" },
      { q: "Why is he phoning her?", opts: ["to ask about something", "to give her some news", "to say sorry for something"], answer: 0, explanation: "男孩打电话问妈妈是否同意他放学后去 Frank 家一起做科学项目、并留在那里吃晚饭，是在征求许可，因此选择 A。" },
      { q: "How will they find out where the new café is?", opts: ["They’ll ask another friend.", "They’ll check on the internet.", "They’ll look at a poster."], answer: 2, explanation: "他本想上网查，但 Wi-Fi 连不上；同学 Sophia 虽去过但不在场，最后两人决定去看图书馆墙上那张大大的告示，即海报，因此选择 C。" },
      { q: "Why do they decide to go on the boat tour today?", opts: ["It’s cheap today.", "The weather’s good.", "They know the guide."], answer: 2, explanation: "天气有点多云（排除 B），网上订票并不便宜、只是方便（排除 A）；真正吸引她们的是 Pablo 叔叔今天在船上当讲解，想去听他讲，因此选择 C。" },
      { q: "What must Hugo do first?", opts: ["Help another teacher.", "Help the school secretary.", "Help another student."], answer: 1, explanation: "Hugo 主动提出帮老师把书送到图书馆，但老师说在办公室工作的 Spencer 女士更需要人把箱子搬到电脑室，即先帮学校秘书；给六年级学生演示上传作业是老师自己要做的事，因此选择 B。" },
    ],
  },
  23: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "You will hear a girl talking about a video. Which part of the video didn’t she understand?", opts: ["the beginning", "the middle", "the end"], answer: 1, explanation: "开头介绍动物栖息地的部分很清楚，结尾她也能看懂；只有中间那段难到要妈妈解释，即视频的中间部分，因此选择 B。" },
      { q: "You will hear two friends talking about a concert. What’s the boy’s opinion of the concert?", opts: ["It was boring.", "It was terrible.", "It was unusual."], answer: 2, explanation: "女孩觉得乐手练习不足、很糟糕；男孩却说他从没听过这样的音乐、也没见过那些乐器，演奏新东西一定很有趣，即他觉得音乐会很不寻常，因此选择 C。" },
      { q: "You will hear a boy talking to his dad about going to the city centre. Why are they going to the city centre?", opts: ["to meet someone", "to buy something", "to watch something"], answer: 0, explanation: "父子俩看完球赛就去市中心，和妈妈约在大广场的咖啡馆碰面，即去见一个人；买报纸是请妈妈帮忙做的事，看球赛是在家里，因此选择 A。" },
      { q: "You will hear a teacher talking to his class. What information is he giving his students?", opts: ["They’re going to start a new project.", "They’re going to have their lesson outside.", "They’re going to have a longer lesson."], answer: 1, explanation: "老师说同学们的地理项目还需要照片，今天获准去公园上课、十点回教室收拾，即要到户外上课；项目不是新开的，课时也没有变长，因此选择 B。" },
      { q: "You will hear a boy talking about his sister, Emma. Who has Emma married?", opts: ["an artist", "a tour guide", "a cook"], answer: 1, explanation: "画画是 Emma 自己的工作，餐厅只是她公寓楼下的店面；她丈夫的工作是带游客游览不同的城市，即导游，因此选择 B。" },
    ],
  },
  24: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "You will hear two classmates talking together. How did the girl come to school today?", opts: ["by car", "by train", "on foot"], answer: 1, explanation: "同学猜她爸爸开车送她，但女孩说今天地铁没问题、很幸运，7:45 那班车还准时到，说明她是乘地铁/火车来的，因此选择 B。" },
      { q: "You will hear a girl talking to a man who works at a museum. What’s the girl looking for?", opts: ["her bag", "her coat", "her folder"], answer: 2, explanation: "工作人员提醒她不要背着包在馆内走动，女孩说她把装着学校论文的蓝色塑料文件夹弄丢了，因此她在找文件夹，选择 C。" },
      { q: "You will hear a boy talking about learning French. How did he improve his French?", opts: ["by visiting France", "by watching French cartoons", "by emailing his French penpal"], answer: 1, explanation: "去法国时他几乎不会说法语；老师让和法国学校的孩子通信，但几周后大家都放弃了；真正有效的是找法语搞笑动画片，他喜欢有会说话动物的那种，因此选择 B。" },
      { q: "You will hear a girl talking to her aunt about her hobbies. Which hobby does the girl like doing now?", opts: ["looking after animals", "taking photos of animals", "collecting toy animals"], answer: 0, explanation: "塑料恐龙玩具已送给邻居小男孩；她现在一有空就去骑术学校刷马喂马，即照顾动物；相机是生日礼物、将来去动物园拍照用，不是现在的爱好，因此选择 A。" },
      { q: "You will hear a headteacher talking to the whole school. What’s new at the school this year?", opts: ["a cafeteria", "a sports hall", "a music room"], answer: 0, explanation: "校长先祝贺排球队赢得夏季锦标赛（这不是新设施），然后说现在大家有了买午餐和吃饭的好地方，在图书馆旁边，即新开了食堂，因此选择 A。" },
    ],
  },
  25: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "You will hear two friends talking about eating healthy food. Why are they talking about eating healthy food?", opts: ["They’ve just read about it.", "They’ve just watched a video about it.", "They’ve just listened to a talk about it."], answer: 2, explanation: "女孩说有位医生来到生物课上讲解心脏的知识，之后她就决定多吃沙拉；看烹饪视频是下节课原本要做、后换成课本单元的事，因此选择 C。" },
      { q: "You will hear a boy talking about his history project. Who gave him some information about it?", opts: ["a person who works as a guide", "a woman who lives near him", "a teacher he knows"], answer: 0, explanation: "男孩本想问 80 岁的邻居 Ashton 太太，但她去美国看孙子了，于是他参加博物馆参观团、向带队讲解员问了很多问题，即导游/讲解员给了他信息，因此选择 A。" },
      { q: "You will hear a girl talking about her clothes. Why does she want to buy some new clothes?", opts: ["to look nice at a party", "to go on holiday", "to play a new sport"], answer: 2, explanation: "女孩在酒店旁的滑板公园爱上了滑板、想把它当爱好，需要新手套保护自己不受伤，即为了玩一项新运动，因此选择 C。" },
      { q: "You will hear a teacher talking about a problem. Where is there a problem?", opts: ["in the playground", "in the sports hall", "in the cafeteria"], answer: 1, explanation: "老师说水管破了、水漫到球场上，今天的排球赛不能在场馆内进行、只能到户外打，即问题出在体育馆/运动馆，因此选择 B。" },
      { q: "You will hear a brother and sister talking about their pet rabbit. What don’t they like about having pets?", opts: ["talking to them", "brushing them", "giving them food"], answer: 1, explanation: "妹妹说给兔子梳毛清理毛里的脏东西后到处是兔毛、很可怕，哥哥也说“我也讨厌那样”，因此他们不喜欢的是给兔子梳毛，选择 B。" },
    ],
  },
  26: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "You will hear a teacher talking about a trip. What has changed?", opts: ["the cost", "the time", "the transport"], answer: 0, explanation: "老师原来说要交 10 英镑，但团体票更便宜，现在只需交 8 英镑，即费用变了；到校时间和乘巴士前往都没变，因此选择 A。" },
      { q: "You will hear two students talking about a problem. Where's the boy's phone?", opts: ["in the teacher's desk", "in his brother's bag", "in his house"], answer: 0, explanation: "男孩在化学课上偷看手机被 Clemens 老师发现，手机被收进她的抽屉、午饭时间才能拿回，即在老师的桌子里，因此选择 A。" },
      { q: "You will hear a boy talking about buying some boots. Why did he buy the boots?", opts: ["They're comfortable.", "He likes the colour.", "They're in fashion."], answer: 2, explanation: "靴子和歌手 Jason 在最新视频里穿的同一款，男孩觉得特别酷，即因为流行；皮革还有点硬、棕色是妈妈选的，因此选择 C。" },
      { q: "You will hear a girl talking about playing tennis. How does she feel after playing?", opts: ["angry", "hungry", "tired"], answer: 0, explanation: "双打搭档一直不让她接球，她非常生气（so mad），气得晚上睡不着、连饭都不想吃，因此选择 A。" },
      { q: "You will hear two friends talking about a new teacher. What do they like about the new teacher?", opts: ["He's clever.", "He's friendly.", "He's famous."], answer: 1, explanation: "新音乐老师 Martinez 总是微笑、乐于帮助学生，即很友好；长得像曼联球员只是长相、40 岁才当老师与是否聪明无关，因此选择 B。" },
    ],
  },
  27: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "You will hear two friends talking about a film. What was the problem with the film?", opts: ["The acting was bad.", "The music was terrible.", "The story was hard to understand."], answer: 2, explanation: "男孩说一半时间都在想“到底在演什么”，女孩也承认电影并不总是看得很明白，即故事难懂；配乐虽然奇怪但男孩并不介意，因此选择 C。" },
      { q: "You will hear the beginning of a talk for school pupils about nature. What is the woman going to talk about?", opts: ["why it is important to help nature", "how nature can make people feel", "ways to learn more about nature"], answer: 1, explanation: "她说大家已经听惯了保护自然有多重要，今天要讲的是自然如何对我们有益、如何帮助我们放松，身处树林能让人停止焦虑，因此选择 B。" },
      { q: "You will hear two classmates talking about the guide on a school trip to the countryside. What do they say about the guide?", opts: ["She knew a lot.", "She was very funny.", "She asked some interesting questions."], answer: 0, explanation: "女孩说她在想“还有什么问题是她答不上来的”，男孩说这位导游确实非常在行、显然很懂植物，因此选择 A。" },
      { q: "You will hear a man talking to his daughter about playing tennis after school. What does the girl want to know?", opts: ["who else might play", "how long the game will be", "which day she can play"], answer: 0, explanation: "女儿说哪天上课都无所谓，她想先确认有没有同学也报名参加，有的话她再去，因此选择 A。" },
      { q: "You will hear two friends planning a trip to the beach. What are they trying to decide?", opts: ["which part of the beach to go to", "what to do on the beach", "how to get to the beach"], answer: 0, explanation: "上次野餐、离火车站近的那片沙滩太挤不适合打排球，女孩建议往大停车场方向再远一点、空间更大的区域，他们在商量去海滩哪一段，因此选择 A。" },
    ],
  },
  28: {
    title: "Part 4 短篇听力题",
    instruction: "听五段独立短对话或独白，选择正确答案。",
    type: "mcq",
    items: [
      { q: "You will hear a boy leaving a message for his sister. Why is he sorry?", opts: ["he can’t meet her", "he will arrive late", "he gave her some wrong information"], answer: 2, explanation: "男孩说他之前把电影开始时间 6:30 说错了，其实是 5:30，他为给出了错误信息而道歉，因此选择 C。" },
      { q: "You will hear a woman phoning a department store. Why is she phoning?", opts: ["to explain what is wrong with the clock", "to return the clock", "to ask if she paid the correct price"], answer: 1, explanation: "女士说闹钟的闹铃坏了，28 天内可以退回，她想把钟退掉，因此选择 B。" },
      { q: "You will hear a boy in a clothes shop. What does he want the assistant to do?", opts: ["find a larger size", "give a better price", "give an opinion of the jacket"], answer: 1, explanation: "男孩问能不能给他打个折，即想要更便宜的价格，因此选择 B。" },
      { q: "You will hear a girl talking about a party. What is she surprised about?", opts: ["how many people were there", "how much she enjoyed it", "how good the music was"], answer: 0, explanation: "她原以为只有家人和几个朋友会来，结果客人特别多，让她非常吃惊，因此选择 A。" },
      { q: "You will hear a hotel guest phoning the receptionist. What is the problem?", opts: ["The bed is too small.", "The heating doesn’t work.", "The room is not quiet enough."], answer: 2, explanation: "他说暖气一直发出水声、吵得他睡不着，即房间不够安静，因此选择 C。" },
    ],
  },
  29:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话，选择正确答案。',type:'mcq',items:[
    {q:'You will hear a girl and her father talking about what’s on TV. What have they forgotten?',opts:['the name of the main actor','how the film ends','when they last saw the film'],answer:0,explanation:'爸爸说女孩大概是在别的片子里见过这位演员，暗示她把别的片的演员错当成本片主演——两人其实记不清这部片主演的名字；对话没提结局和上次观看时间，因此选择 A。'},
    {q:'You will hear a boy talking to his mother about his homework. What does she think he should do?',opts:['rest before starting it','finish some of it as soon as possible','check when the teacher wants it'],answer:1,explanation:'妈妈说先立刻完成要交给老师的那部分作业，做完之后再休息，因此选择 B。'},
    {q:'You will hear a girl telling her classmate about a cake she made. What was the problem with the cake?',opts:['The cake tasted horrible.','It was hard to work the cooker.','She cooked the cake for too long.'],answer:2,explanation:'女孩说蛋糕没有及时从烤箱里取出来，看起来有点糊（didn’t take it out soon enough），不过味道还好，因此选择 C。'},
    {q:'You will hear a boy who has just watched a video of himself. What was he surprised about?',opts:['how different he looked','how fast he was speaking','how clearly he explained things'],answer:1,explanation:'男孩说完全没想到自己说话那么快（I had no idea I was talking so quickly），老师还建议他以后讲慢一点、清楚一点，因此选择 B。'},
    {q:'You will hear two classmates talking about a school play. Why doesn’t the boy want to be in the play?',opts:['His friends aren’t in it.','He isn’t interested in acting.','He doesn’t have enough time.'],answer:0,explanation:'男孩说朋友们兴趣各不相同、都不会参演，这才是他不参加的原因；“太花时间”是女孩的理由，男孩说一周才一次，因此选择 A。'}]},
  30:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'You will hear a boy and his mother talking about a drink. What does the boy’s mother want to know?',opts:['what the drink tastes like','how much sugar is in the drink','why the boy likes it so much'],answer:1,explanation:'妈妈问这种柠檬水每 100 毫升含多少克糖，想知道饮料的含糖量，因此选择 B。'},
    {q:'You will hear two classmates talking about a friend called Maria. What are they interested in?',opts:['which hairdresser cuts Maria’s hair','how short Maria’s hair is at the moment','why Maria changes her hair so often'],answer:2,explanation:'两人讨论 Maria 一周内又换了新发型：她的理发师收费便宜所以她常去，她也喜欢不断变换发型，因此选择 C。'},
    {q:'You will hear a boy talking about the gym he goes to. What does he say about it?',opts:['Using the exercise machines is boring.','His favourite exercise machine is too popular.','Some exercise machines are more useful than others.'],answer:0,explanation:'男孩说坐在机器前看着镜子反复做同样的动作，时间过得很慢，5 分钟就停下来，承认用机器有点无聊，因此选择 A。'},
    {q:'You will hear a girl telling her father about a school trip. What was the problem on the trip?',opts:['The coach was late.','She got lost at the beach.','Someone was ill during the journey.'],answer:2,explanation:'Rosa 在去海边的路上晕车，大巴不得不中途停了几分钟，因此选择 C。'},
    {q:'You will hear a school teacher talking to her class. What subject is the lesson?',opts:['maths','history','geography'],answer:2,explanation:'老师讲伊斯坦布尔的人口、地处欧洲和亚洲两大洲等城市地理知识，因此选择 C。'}]},
  31:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'You will hear two classmates talking. What are they doing?',opts:['giving each other their email addresses','choosing which email address they want to have','discussing unusual email addresses'],answer:2,explanation:'两人聊哥哥的 bananaface@、表妹的 chocolatebiscuit@ 和 bigfootballfan@ 等奇怪的邮箱地址，因此选择 C。'},
    {q:'You will hear a teacher talking to a boy who is late for a lesson. What is the teacher talking about?',opts:['the boy’s reasons for being late today','how people can make sure they aren’t late','why it’s important to arrive at the right time'],answer:2,explanation:'老师说不想听迟到的原因，重要的是必须准点到、课才能准点开始，一人迟到全班都得停下来，因此选择 C。'},
    {q:'You will hear a boy telling his classmate about a book he is reading. How did he get the book?',opts:['He bought it.','A friend lent it to him.','He borrowed it from the library.'],answer:0,explanation:'图书馆那本已被借走，朋友愿意借但要等两周，最后他从书店自己买了一本，因此选择 A。'},
    {q:'You will hear two friends discussing videos they have just watched. What are they talking about?',opts:['how to make a funny cat video','which cat videos were the funniest','why cats can be funnier than other animals'],answer:1,explanation:'两人比较几段猫视频——猫跳起来、猫狗共舞、猫看小兔子——讨论哪段最好笑，因此选择 B。'},
    {q:'You will hear a girl telling her parents about a lesson. What is she doing?',opts:['explaining why she had to say ‘sorry’ to the teacher','saying how she feels about the biology exam','telling a story about a mistake that the teacher made'],answer:2,explanation:'生物老师误把真正的考卷当复习卷发下来，之后又收回并向全班道歉，女孩在讲老师的这次失误，因此选择 C。'}]},
  32:{title:'Part 4 短篇听力题',instruction:'听五段独立短对话或独白，选择正确答案。',type:'mcq',items:[
    {q:'You will hear a girl talking to her father about studying French. What does she want him to do?',opts:['watch a film with her in French','ask her some questions in French','explain what some French words mean'],answer:1,explanation:'女孩下周有法语口语考试，需要有人用法语向她提问来练习，因此选择 B。'},
    {q:'You will hear two friends talking at a swimming pool. What are they talking about?',opts:['why the water in the pool is so cold','what kind of weather is best for swimming','how the water temperature makes them feel'],answer:2,explanation:'两人抱怨水太冷很难受，又提到水太热会很快累得游不动，讨论水温带来的感受，因此选择 C。'},
    {q:'You will hear a maths teacher talking to two pupils. What does she want to know?',opts:['why the pupils made so many mistakes','how the pupils knew what the answers were','if one pupil copied the other one’s homework'],answer:2,explanation:'两人连错题都完全一样，老师问是不是一个看了另一个的作业抄答案，要求听真话，因此选择 C。'},
    {q:'You will hear a girl talking about the school play that she has been in. What is she surprised about?',opts:['how tired it made her','how much fun she had','how many people came to watch'],answer:0,explanation:'演出很长，她完全没想到表演这么辛苦，每场结束都只想睡觉，因此选择 A。'},
    {q:'You will hear a boy called Adam talking to a teacher. What is he explaining?',opts:['what he’s worried about','how he’s studying for his exams','which subjects are the most difficult'],answer:0,explanation:'Adam 担心下周考试考不好，比如忘掉历史日期、在物理里写错单位，他在说明自己的担心，因此选择 A。'}]},
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

const OFFICIAL_PART5_BASE = {
  21:{options:['actor','coach','dentist','journalist','mechanic','pilot','receptionist','tour guide'],items:[{q:'Tyler',answer:2},{q:'Ava',answer:7},{q:'Mark',answer:4},{q:'Victoria',answer:3},{q:'Bobby',answer:0}]},
  22:{options:['acting','being in a band','building models','climbing','learning languages','photography','swimming','watching movies'],items:[
    {q:'Hannah',answer:1,explanation:'Hannah 在一个摇滚乐队里弹吉他，即参加乐队；“我上周给他们拍了照”是说话者的行为，不要误选摄影。'},
    {q:'Christopher',answer:4,explanation:'他去西班牙参加了一次攀岩假期后，现在正在学西班牙语、还上阿拉伯语会话课，爱好是学语言；攀岩只是那次旅行的活动。'},
    {q:'Samantha',answer:6,explanation:'她已经把飞机模型都送给了弟弟，现在去游泳池的专门俱乐部，还能从两米跳台跳下，爱好是游泳。'},
    {q:'Andrew',answer:0,explanation:'他总在学校的戏剧里演出，而且喜欢扮演坏人，爱好是表演。'},
    {q:'Grace',answer:5,explanation:'下周学校大厅将展出她拍摄的照片，她最好的作品是爸爸爬山的照片；爬山的是她爸爸，Grace 的爱好是摄影。'}]},
  23:{options:['crowded','noisy','not clean','not modern','not useful','too far','too small','too warm'],items:[
    {q:'cafeteria',answer:1,explanation:'餐厅里总能听到外面街道上的车声和等公交的人群声，问题是吵闹；排队拥挤并未提及。'},
    {q:'library',answer:2,explanation:'图书馆并不小，只是脏、也不够暖和；不够暖说明偏冷而非 too warm，脏对应 not clean。'},
    {q:'classrooms',answer:3,explanation:'教室在二楼的那些没有最新的设备，即设备不够现代化，对应 not modern。'},
    {q:'lift',answer:4,explanation:'电梯慢到走路都比它快，Angela 说“不知道我们为什么要有它们”，即没什么用，对应 not useful。'},
    {q:'office',answer:6,explanation:'办公室里放不下两张办公桌和书架，空间不足，问题是太小；秘书喜欢书架不代表拥挤。'}]},
  24:{options:['backpack','calendar','dictionary','guidebook','kite','mug','photo album','postcards'],items:[
    {q:'Poland',answer:6,explanation:'在波兰给姑姑买的生日礼物是相册，用来放她用新相机拍的照片；明信片是湖景、只作为附赠品。'},
    {q:'Switzerland',answer:1,explanation:'表妹喜欢把每天做的事记在日期上，所以从瑞士给她买的是日历，可以贴在厨房墙上。'},
    {q:'Italy',answer:2,explanation:'叔叔在学意大利语，从意大利给他买的是词典，方便他查单词。'},
    {q:'Spain',answer:5,explanation:'邻居总喝茶但杯子不够，从西班牙给她买的是印有她名字的马克杯。'},
    {q:'Portugal',answer:0,explanation:'葡萄牙买的其实是给自己的礼物，可以装课本和其他东西，即背包。'}]},
  26:{options:['boring','funny','good beginning','hard to understand','sad','scary','too short','useful'],items:[
    {q:'Crunch',answer:6,explanation:'Crunch 读“一小时就读完了、本想读四天”，即觉得太短，选 G（too short）。'},
    {q:'My Island',answer:1,explanation:'My Island“让我笑了很多、一点也不无聊”，即有趣好笑，选 B（funny）。'},
    {q:'Dangerous Animals',answer:3,explanation:'Dangerous Animals“不吓人，但很多生词、读起来难”，即难以理解，选 D（hard to understand）。'},
    {q:'The Invitation',answer:4,explanation:'The Invitation 读时哭了、尤其开头部分，即让人难过，选 E（sad）。'},
    {q:'Skating Star',answer:2,explanation:'Skating Star“开头最好、后面也不错”，即开头很精彩，选 C（good beginning）。'}]},
  25:{options:['finish a school project','go on a trip','go to a party','help a neighbour','make a meal','send emails','take money to school','visit the city library'],items:[
    {q:'Tuesday',answer:6,explanation:'周二要记得带 55 英镑去学校，用来支付周末旅行的费用，即带钱去学校。'},
    {q:'weekend',answer:1,explanation:'周末要去旅行，那 55 英镑就是为这次旅行交的钱。'},
    {q:'Wednesday',answer:0,explanation:'周三不用去市图书馆，因为恐龙课题的资料已找齐，要在家里把课题剩余的做完。'},
    {q:'Thursday',answer:3,explanation:'周四隔壁的 Brown 太太请他到花园帮忙干活，即帮助邻居。'},
    {q:'Friday',answer:4,explanation:'周五他要给妈妈和自己做晚饭，爸爸则去打网球，即做饭。'}]},
  27:{options:['baseball','cycling','golf','hockey','horse riding','sailing','surfboarding','swimming'],items:[
    {q:'Katherine',answer:3,explanation:'她本想打高尔夫但没有名额，最后选了曲棍球；骑自行车她想过但最终放弃。'},
    {q:'Ruben',answer:2,explanation:'滑板冲浪是初学者项目、他的水平太高，高尔夫他从来没试过，所以选了高尔夫。'},
    {q:'Elsa',answer:1,explanation:'她最想做的帆船太贵了，最后去骑了自行车。'},
    {q:'Celia',answer:4,explanation:'她原本在骑马和网球之间犹豫，看到动物的照片后决定一定要去骑马。'},
    {q:'Andy',answer:7,explanation:'曲棍球没有名额，他去了游泳池，即游泳；他说下次想试滑板冲浪。'}]},
  28:{options:['cloudy','cold','fog','snow','sunny','warm','wet','windy'],items:[
    {q:'Monday',answer:4,explanation:'女孩说周一太阳会回来，会是很棒的一天，即晴天。'},
    {q:'Tuesday',answer:7,explanation:'女孩说周二风会很大，朋友的风筝比赛正需要风，即刮风。'},
    {q:'Wednesday',answer:2,explanation:'女孩说周三一整天都会有雾，爸爸担心影响骑行，即有雾。'},
    {q:'Thursday',answer:1,explanation:'女孩说周四不会下雨，但气温会很低，感觉会很冷，即寒冷。'},
    {q:'Friday',answer:6,explanation:'爸爸猜周五会下雨，女孩说他猜对了、会下雨而且雨很大，即潮湿多雨。'}]},
  29:{options:['write an email','prepare for a test','choose a place to visit','draw a picture','study how something changes','finish an exercise','write some questions','learn about a person'],items:[
    {q:'Geography',answer:4,explanation:'河流一直在变化，Katie 要查明河流如何变宽、变深，即研究事物如何变化。'},
    {q:'Maths',answer:5,explanation:'课上发了一张十道题的练习，没做完的要课后完成，即完成练习。'},
    {q:'Spanish',answer:0,explanation:'西班牙语老师要求用西语给她写邮件，介绍一个著名的地方，即写一封电子邮件。'},
    {q:'Biology',answer:3,explanation:'生物课现在学花，Katie 要画出一朵花的内部结构并展示细节，即画一幅画。'},
    {q:'Art',answer:7,explanation:'美术作业不是画画，而是了解一位著名画家，下学期还要去博物馆看她的画，即了解一个人物。'}]},
  30:{options:['bike lights','book','chess set','concert ticket','jewellery','rugby ball','sports shoes','tennis equipment'],items:[
    {q:'Amelia',answer:1,explanation:'Amelia 送了她最喜欢的作家的新书，讲一个人骑车环游世界的故事，即一本书。'},
    {q:'Rajiv',answer:7,explanation:'Rajiv 没送运动鞋，而是送了网球，因为晚点要一起打比赛，即网球装备。'},
    {q:'Daisy',answer:4,explanation:'Daisy 送了手链和项链，和她喜欢的歌手演唱会上戴的一样，即首饰。'},
    {q:'Uncle Rick',answer:6,explanation:'Uncle Rick 去年送了橄榄球，今年送了打橄榄球穿的球鞋，即运动鞋。'},
    {q:'Grandma',answer:0,explanation:'奶奶担心她骑车时的安全，送了车灯，即自行车灯。'}]},
  31:{options:['build a home for an animal','learn about trains','make a film','make a model','speak to a doctor','study insects','visit a park','write an article'],items:[
    {q:'Tom',answer:0,explanation:'Tom 养宠物鼠，要做一个里面有它所需要的一切的家，即给动物建一个家。'},
    {q:'Emma',answer:6,explanation:'Emma 读了一篇网上文章，打算去公园看那里的不寻常植物，即参观公园。'},
    {q:'Jack',answer:2,explanation:'Jack 要拍一段自己的视频，解释为什么想当医生，即拍一部影片。'},
    {q:'Louisa',answer:3,explanation:'Louisa 要用木头做一个不能飞的小飞机模型，只用来展示它的样子，即做模型。'},
    {q:'Alfredo',answer:1,explanation:'Alfredo 找到一篇讲老式火车引擎如何工作的文章，要了解火车。'}]},
  32:{options:['boring','clever','funny','sad','scary','strange','too old','useful'],items:[
    {q:'Dancer',answer:2,explanation:'舞者在商店里起舞时，旁观的人看起来吓了一跳，但女孩自己笑得特别厉害，即好笑的。'},
    {q:'Tiger',answer:4,explanation:'女孩看的时候有点害怕，担心他醒来，自己也觉得 scared，即吓人的。'},
    {q:'Waterwoman',answer:7,explanation:'老太太用一杯水演示各种现象，讲解非常好，对科学课有帮助，即有用的。'},
    {q:'Sleeping baby',answer:0,explanation:'宝宝虽然可爱，但看几秒就觉得够了，男孩直言没意思，即无聊的。'},
    {q:'Mirrorman',answer:3,explanation:'他总是看起来不开心，看着视频的女孩也产生了同样的感觉，即悲伤的。'}]},
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


// Exam Booster 《Cambridge Exam Booster for A2 Key》听力合并层：setId 33-35
const PART1_SETS_ALL = applyKetOfficialEnrich(1, { ...OFFICIAL_PART1_BASE, ...BOOSTER_PART1_SETS });
const PART2_SETS_ALL = applyKetOfficialEnrich(2, { ...OFFICIAL_PART2_BASE, ...BOOSTER_PART2_SETS });
const PART3_SETS_ALL = applyKetOfficialEnrich(3, { ...OFFICIAL_PART3_BASE, ...BOOSTER_PART3_SETS });
const PART4_SETS_ALL = applyKetOfficialEnrich(4, { ...OFFICIAL_PART4_BASE, ...BOOSTER_PART4_SETS });
const PART5_SETS_ALL = applyKetOfficialEnrich(5, { ...OFFICIAL_PART5_BASE, ...BOOSTER_PART5_SETS });

function OfficialPartFiveBoard({ level, setLevel, setId = 9 }) {
  const data = PART5_SETS_ALL[setId] || OFFICIAL_TEST1_PARTS[5];
  const saved = readListeningProgress(setId, 5);
  const [answers, setAnswers] = useState(() =>
    saved?.answers?.length === data.items.length
      ? saved.answers
      : Array(data.items.length).fill(null),
  );
  const [active, setActive] = useState(() =>
    Number.isInteger(saved?.active) ? saved.active : 0,
  );
  const [localSubmitted, setLocalSubmitted] = useState(() => Boolean(saved?.submitted));
  useEffect(() => {
    saveListeningProgress(setId, 5, {
      answers,
      active,
      submitted: localSubmitted,
      completed: localSubmitted,
      wrongCount: localSubmitted ? answers.reduce((count, value, index) => count + (value !== null && value !== data.items[index].answer ? 1 : 0), 0) : 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, answers, localSubmitted, setId]);
  const used = new Set(answers.filter((value) => value !== null));
  const answeredCount = answers.filter((value) => value !== null).length;
  const score = localSubmitted
    ? answers.reduce(
        (sum, value, index) =>
          sum + (value !== null && value === data.items[index].answer ? 1 : 0),
        0,
      )
    : 0;
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
    setLocalSubmitted(false);
  }
  function submitAll() {
    setLocalSubmitted(true);
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
                  right = localSubmitted && value === item.answer;
                return (
                  <button
                    key={item.q}
                    onClick={() => setActive(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      selected
                        ? "border-[#e1b33a] bg-[#fff9e9] shadow-sm"
                        : localSubmitted
                          ? done
                            ? right
                              ? "border-emerald-300 bg-emerald-50"
                              : "border-rose-200 bg-rose-50"
                            : "border-gray-200 hover:border-emerald-300"
                          : done
                            ? "border-emerald-200 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                    }`}
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
                      {selected ? "→" : localSubmitted && done ? (right ? "✓" : "!") : ""}
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
        {data.transcript && <PartTranscriptBlock data={data} />}
        <section className="mt-6 rounded-[22px] bg-[#064e3b] p-5 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              {localSubmitted ? (
                <strong className="text-2xl text-[#f7cd60]">
                  正确 {score} / {data.items.length}
                </strong>
              ) : (
                <strong>
                  已作答 {answeredCount} / {data.items.length}
                </strong>
              )}
            </div>
            {!localSubmitted ? (
              <button
                disabled={answeredCount < data.items.length}
                onClick={submitAll}
                className="rounded-xl bg-[#f7cd60] px-6 py-2.5 text-sm font-extrabold text-[#064e3b] transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/50"
              >
                提交答案
              </button>
            ) : (
              <button
                onClick={resetProgress}
                className="rounded-xl bg-white/20 px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-white/30"
              >
                重做本题
              </button>
            )}
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#f7cd60]"
              style={{
                width: `${
                  ((localSubmitted ? score : answeredCount) / data.items.length) * 100
                }%`,
              }}
            />
          </div>
        </section>
      </main>
    </CambridgeLayout>
  );
}

// 专项练习：整 Part 听力原文（黄色荧光标出答案句）
function PartTranscriptBlock({ data }) {
  const [open, setOpen] = useState(false);
  const items = data.items || [];
  const quotes = data.type === "blanks"
    ? items.flatMap(item => (item.answer || []).map(a => String(a))).filter(Boolean)
    : items.flatMap(item => extractQuotes(item.explanation || item.exp || ""));
  return (
    <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/40 p-4">
      <button type="button" onClick={() => setOpen(v => !v)} className="w-full text-left">
        <div className="text-xs font-extrabold tracking-[.16em] text-amber-700">AUDIOSCRIPT</div>
        <h3 className="mt-1 text-lg font-extrabold text-slate-900">听力原文{open ? " ▾" : " ▸"}</h3>
        <p className="mt-1 text-xs text-slate-500">官方文稿全文，黄色荧光标出与答案对应的原文句。</p>
      </button>
      {open && (
        <div className="mt-3 whitespace-pre-line rounded-xl bg-white p-3 text-xs leading-6 text-slate-600">
          {renderTranscriptWithHighlights(data.transcript, quotes)}
        </div>
      )}
    </section>
  );
}

function OfficialListeningPartSample({ part, level, setLevel, setId = 9 }) {
  const data =
    (part === 2 && PART2_SETS_ALL[setId]) ||
    (part === 3 && PART3_SETS_ALL[setId]) ||
    (part === 4 && PART4_SETS_ALL[setId]) ||
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
  const [revealExplanation, setRevealExplanation] = useState({});
  const normalise = (value) =>
    String(value)
      .toLowerCase()
      .replace(/[£,\s-]/g, "");
  const isRight = (item, value) =>
    data.type === "blanks"
      ? item.answer.some((answer) => normalise(answer) === normalise(value))
      : Number(value) === item.answer;
  useEffect(() => {
    saveListeningProgress(setId, part, {
      answers,
      checked,
      completed: checked.every(Boolean),
      wrongCount: data.items.reduce((count, item, index) => count + (checked[index] && !isRight(item, answers[index]) ? 1 : 0), 0),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, checked, part, setId]);
  const completed = checked.every(Boolean) && data.items.length > 0;
  const answeredCount = answers.filter(
    (a) => (data.type === "blanks" ? String(a ?? "").trim() !== "" : a !== null && a !== undefined),
  ).length;
  const submitted = completed;
  const score = submitted
    ? data.items.reduce(
        (sum, item, index) =>
          sum + (isRight(item, answers[index]) ? 1 : 0),
        0,
      )
    : 0;
  function submitAll() {
    setChecked(Array(data.items.length).fill(true));
  }
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
            const answered =
              data.type === "blanks"
                ? String(answers[index] ?? "").trim() !== ""
                : answers[index] !== null && answers[index] !== undefined;
            const right = submitted && isRight(item, answers[index]);
            return (
              <article
                key={item.q}
                className={`rounded-[22px] border bg-white p-5 md:p-6 ${
                  submitted
                    ? right
                      ? "border-emerald-400"
                      : "border-rose-300"
                    : answered
                      ? "border-emerald-200"
                      : "border-gray-200"
                }`}
              >
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f7cd60] font-extrabold">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold">{item.q}</h2>
                    {data.type === "blanks" ? (
                      <div className="mt-4">
                        <input
                          value={answers[index]}
                          onChange={(e) => {
                            setAnswers((v) =>
                              v.map((x, i) =>
                                i === index ? e.target.value : x,
                              ),
                            );
                          }}
                          className="h-12 w-full rounded-xl border border-gray-200 px-4 text-lg font-bold outline-none focus:border-emerald-500"
                          placeholder="输入听到的信息"
                        />
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
                              }}
                              className={`rounded-xl border px-4 py-3 text-left font-bold ${
                                answers[index] === optionIndex
                                  ? right
                                    ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                                    : submitted
                                      ? "border-rose-300 bg-rose-50 text-rose-700"
                                      : "border-emerald-500 bg-emerald-50 text-emerald-800"
                                  : "border-gray-200 hover:border-[#f7cd60]"
                              }`}
                            >
                              {String.fromCharCode(65 + optionIndex)}. {option}
                            </button>
                          ),
                        )}
                      </div>
                    )}
                    {submitted && (
                      <div
                        className={`mt-4 rounded-xl px-4 py-3 text-sm ${right ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}
                      >
                        <div className="flex flex-wrap items-center gap-x-2">
                          <strong>{right ? "✓ 回答正确！" : "再听一次。"}</strong>
                          {!right && (
                            <span>
                              正确答案：
                              {data.type === "blanks"
                                ? item.show
                                : data.type === "match"
                                  ? data.options[item.answer]
                                  : item.opts[item.answer]}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              setRevealExplanation((v) => ({
                                ...v,
                                [index]: !v[index],
                              }))
                            }
                            className="text-xs font-extrabold text-emerald-700 hover:underline"
                          >
                            {revealExplanation[index] ? "收起解析" : "查看解析"}
                          </button>
                        </div>
                        {revealExplanation[index] && item.explanation && (
                          <p className="mt-2 leading-6">{item.explanation}</p>
                        )}
                        <TranscriptBox
                          transcript={item.transcript}
                          highlights={extractQuotes(item.explanation || item.exp || '')}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {data.transcript && <PartTranscriptBlock data={data} part={part} />}
        <section className="mt-6 rounded-[22px] bg-[#064e3b] p-5 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              {submitted ? (
                <strong className="text-2xl text-[#f7cd60]">
                  正确 {score} / {data.items.length}
                </strong>
              ) : (
                <strong>
                  已作答 {answeredCount} / {data.items.length}
                </strong>
              )}
            </div>
            {!submitted ? (
              <button
                disabled={answeredCount < data.items.length}
                onClick={submitAll}
                className="rounded-xl bg-[#f7cd60] px-6 py-2.5 text-sm font-extrabold text-[#064e3b] transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/50"
              >
                提交答案
              </button>
            ) : (
              <button
                onClick={resetProgress}
                className="rounded-xl bg-white/20 px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-white/30"
              >
                重做本题
              </button>
            )}
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#f7cd60]"
              style={{
                width: `${
                  ((submitted ? score : answeredCount) / data.items.length) * 100
                }%`,
              }}
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
      <ListeningTabBar active="centre" />
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
      <ListeningTabBar active="common" />
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
  const [level, setLevel] = useState(() => {
    try {
      return localStorage.getItem("cambridge_level") || "KET";
    } catch {
      return "KET";
    }
  });
  const [activePart] = useState(initialPart);
  const [results, setResults] = useState(null);
  const [key, setKey] = useState(0); // force remount to reset

  const data = KET_LISTENING_DATA[activePart];

  function handleDone(res) {
    setResults(res);
  }

  function handleRestart() {
    setResults(null);
    setKey((k) => k + 1);
  }

  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <ListeningTabBar active={activePart} />

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

// KET 听力模考原文面板：官方文稿全文，荧光笔标注答案句（transcript 逐字取自官方 Key 区 Track 灰框；缺页 Part 显示未收录）
function ListeningMockTranscriptPanel({ setId }) {
  const [open, setOpen] = useState(false);
  const blocks = useMemo(() => [1, 2, 3, 4, 5].map(partNo => {
    const partData = mockListeningData(setId, partNo);
    if (!partData) return { partNo, missing: true };
    if (partNo === 1 || partNo === 3) {
      const items = (partData.items || []).map((item, index) => ({
        label: `第 ${index + 1} 题`,
        transcript: item.transcript,
        quotes: extractQuotes(item.explanation || item.exp || ""),
      }));
      return { partNo, items, missing: items.every(entry => !entry.transcript) };
    }
    const items = partData.items || [];
    const quotes = partNo === 2
      ? items.flatMap(item => (item.answer || []).map(a => String(a))).filter(Boolean)
      : items.flatMap(item => extractQuotes(item.explanation || item.exp || ""));
    return {
      partNo,
      transcript: partData.transcript,
      quotes,
      missing: !partData.transcript,
    };
  }), [setId]);
  if (!blocks.some(block => !block.missing)) return null;
  return (
    <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <button type="button" onClick={() => setOpen(value => !value)} className="w-full text-left">
        <div className="text-xs font-extrabold tracking-[.16em] text-emerald-700">AUDIOSCRIPT</div>
        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">听力原文{open ? " ▾" : " ▸"}</h2>
        <p className="mt-2 text-sm text-slate-500">官方文稿全文，黄色荧光标出与答案对应的原文句。</p>
      </button>
      {open && (
        <div className="mt-5 space-y-5">
          {blocks.map(block => (
            <article key={block.partNo} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
              <h3 className="text-sm font-extrabold text-slate-700">Part {block.partNo}</h3>
              {block.missing ? (
                <p className="mt-2 text-xs text-slate-400">官方原文随书 127-128 页缺失，暂未收录。</p>
              ) : block.items && !block.transcript ? (
                <div className="mt-3 space-y-3">
                  {block.items.map((entry, index) => (
                    <div key={index} className="whitespace-pre-line rounded-xl bg-white p-3 text-xs leading-6 text-slate-600">
                      <div className="mb-1 text-[11px] font-extrabold text-emerald-700">{entry.label}</div>
                      {renderTranscriptWithHighlights(entry.transcript, entry.quotes)}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-3 whitespace-pre-line rounded-xl bg-white p-3 text-xs leading-6 text-slate-600">
                  {renderTranscriptWithHighlights(block.transcript, block.quotes)}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- 供其他页面复用的数据装配函数
export function mockListeningData(setId, part) {
  if (part === 1) { const raw = PART1_SETS_ALL[setId]; if (!raw) return null; return Array.isArray(raw) ? { title: "Part 1 图片选择题", type: "picture", items: raw } : { title: "Part 1 图片选择题", type: "picture", ...raw, items: raw.items }; }
  if (part === 2) return PART2_SETS_ALL[setId] || null;
  if (part === 3) return PART3_SETS_ALL[setId] || null;
  if (part === 4) return PART4_SETS_ALL[setId] || null;
  return PART5_SETS_ALL[setId] ? { title: "Part 5 配对题", instruction: "听对话，将每个人与正确选项配对。", ...PART5_SETS_ALL[setId], type: "match" } : null;
}

function normaliseMockAnswer(value) {
  return String(value ?? "").toLowerCase().replace(/[£,\s-]/g, "");
}

// eslint-disable-next-line react-refresh/only-export-components -- 供其他页面复用的判定函数
export function isMockAnswerRight(data, item, value) {
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

// 模考渲染兜底：出现异常时显示报错与恢复入口，避免整页白屏
class ListeningMockErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (!this.state.error) return this.props.children;
    const { setId, examId, level, setLevel } = this.props;
    return (
      <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
        <main className="mx-auto max-w-3xl px-6 py-16">
          <div className="rounded-[24px] border border-rose-200 bg-white p-8 text-center shadow-sm">
            <div className="text-5xl">⚠️</div>
            <h1 className="mt-4 text-2xl font-extrabold text-slate-950">页面渲染出错了</h1>
            <p className="mt-2 text-sm text-slate-500">听力模考加载时发生异常，可以重置本次模考后重新开始，或返回真题总览。把下方错误信息发给开发者有助于定位问题。</p>
            <pre className="mt-4 max-h-40 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-left text-xs text-rose-700">{String((this.state.error && (this.state.error.stack || this.state.error.message)) || this.state.error)}</pre>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  try { localStorage.removeItem(`${MOCK_LISTENING_PREFIX}:set-${setId}`); } catch { /* ignore */ }
                  window.location.reload();
                }}
                className="rounded-xl bg-[#064e3b] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#0d7656]"
              >
                重置本次模考并重新开始
              </button>
              <Link to={`/cambridge/exams/${examId}`} className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700">返回真题总览</Link>
            </div>
          </div>
        </main>
      </CambridgeLayout>
    );
  }
}

function ListeningMockExam({ level, setLevel, setId, part, examId }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const data = mockListeningData(setId, part);
  const storageKey = `${MOCK_LISTENING_PREFIX}:set-${setId}`;
  const [attempt, setAttempt] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '{"parts":{}}'); } catch { return { parts: {} }; }
  });
  const [startedAt, setStartedAt] = useState(() => attempt.startedAt || null);
  const [paused, setPaused] = useState(() => Boolean(attempt.pausedAt));
  const [pausedAt, setPausedAt] = useState(() => attempt.pausedAt || null);
  const [totalPausedMs, setTotalPausedMs] = useState(() => attempt.totalPausedMs || 0);
  const [elapsed, setElapsed] = useState(() => startedAt ? Math.max(0, Math.floor(((attempt.pausedAt || Date.now()) - startedAt - (attempt.totalPausedMs || 0)) / 1000)) : 0);
  const [finalElapsed, setFinalElapsed] = useState(() => attempt.finishedAt && startedAt ? Math.max(0, Math.floor((attempt.finishedAt - startedAt - (attempt.totalPausedMs || 0)) / 1000)) : null);
  const emptyValue = data.type === "blanks" ? "" : null;
  const [answers, setAnswers] = useState(() => {
    const saved = attempt.parts?.[part];
    return saved?.length === data.items.length ? saved : Array(data.items.length).fill(emptyValue);
  });
  const redoTargets = Array.isArray(attempt.redoTargets) ? attempt.redoTargets : null;
  const visibleIndexes = data.items.map((_, index) => index).filter(index => !redoTargets || redoTargets.some(target => target.part === part && target.index === index));
  const redoParts = redoTargets ? [...new Set(redoTargets.map(target => target.part))].sort((left, right) => left - right) : [1, 2, 3, 4, 5];
  const nextPart = redoParts.find(partId => partId > part);
  const [submitted, setSubmitted] = useState(() => attempt.completed === true);
  const [showReview, setShowReview] = useState(() => searchParams.get('review') === '1');
  const [activeMatch, setActiveMatch] = useState(() => {
    const firstEmpty = visibleIndexes.find(index => answers[index] === null);
    return firstEmpty ?? visibleIndexes[0] ?? 0;
  });

  useEffect(() => {
    const next = { ...attempt, startedAt, pausedAt, totalPausedMs, parts: { ...(attempt.parts || {}), [part]: answers } };
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 与既有进度恢复逻辑耦合，保持原行为
    setAttempt(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* ignore */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  useEffect(() => {
    if (submitted || paused || startedAt === null) return undefined;
    const timer = window.setInterval(() => setElapsed(Math.max(0, Math.floor((Date.now() - startedAt - totalPausedMs) / 1000))), 1000);
    return () => window.clearInterval(timer);
  }, [paused, startedAt, submitted, totalPausedMs]);

  const answered = visibleIndexes.filter(index => answers[index] !== null && String(answers[index]).trim() !== "").length;
  const complete = answered === visibleIndexes.length;
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
    })).filter((entry, itemIndex) => (!redoTargets || redoTargets.some(target => target.part === partIndex + 1 && target.index === itemIndex)) && !isMockAnswerRight(entry.data, entry.item, entry.value));
  });
  const redoScore = redoTargets ? redoTargets.length - wrongAnswers.length : null;

  function choose(itemIndex, value) {
    setAnswers(current => current.map((answer, index) => {
      if (index === itemIndex) return value;
      if (data.type === "match" && answer === value) return null;
      return answer;
    }));
  }

  function chooseMatch(value) {
    if (redoTargets && answers.some((answer, index) => index !== activeMatch && answer === value)) return;
    choose(activeMatch, value);
    const next = visibleIndexes.find(index => index > activeMatch && answers[index] === null);
    if (next !== undefined) setActiveMatch(next);
  }

  function resetMock() {
    if (!window.confirm('确定要重置本次听力模考吗？所有作答和计时将清空。')) return;
    try { localStorage.removeItem(storageKey); } catch { /* ignore */ }
    navigate(`/cambridge/listening?mode=mock&exam=${examId}&part=1&set=${setId}&redo=${Date.now()}`);
  }

  function finishMock() {
    const finishedAt = Date.now();
    const finalPausedMs = totalPausedMs + (paused && pausedAt ? finishedAt - pausedAt : 0);
    const next = { ...scoringAttempt, startedAt, finishedAt, pausedAt: null, totalPausedMs: finalPausedMs, completed: true, wrongCount: wrongAnswers.length, level: 'KET', examId };
    setAttempt(next);
    setFinalElapsed(Math.max(0, Math.floor((finishedAt - (startedAt ?? finishedAt) - finalPausedMs) / 1000)));
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* ignore */ }
    // 交卷同步错题本（覆盖式：本次答对的旧错题自动移出；key = 题在 Part 内的序号）
    allData.forEach((partData, partIndex) => {
      const values = scoringAttempt.parts?.[partIndex + 1] || [];
      const wrong = {};
      partData.items.forEach((item, itemIndex) => {
        if (isMockAnswerRight(partData, item, values[itemIndex])) return;
        wrong[String(itemIndex)] = mockAnswerLabel(partData, item, values[itemIndex]);
      });
      setMockWrongBatch('ket', 'listening', examId, String(partIndex + 1), wrong);
    });
    setSubmitted(true);
  }

  function toggleTimer() {
    const now = Date.now();
    if (startedAt === null) {
      const next = { ...attempt, startedAt: now, pausedAt: null, totalPausedMs };
      setStartedAt(now);
      setPaused(false);
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* ignore */ }
      setAttempt(next);
      return;
    }
    if (paused) {
      const nextTotal = totalPausedMs + (pausedAt ? now - pausedAt : 0);
      const next = { ...attempt, startedAt, pausedAt: null, totalPausedMs: nextTotal };
      setPaused(false);
      setPausedAt(null);
      setTotalPausedMs(nextTotal);
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* ignore */ }
      setAttempt(next);
    } else {
      const next = { ...attempt, startedAt, pausedAt: now, totalPausedMs };
      setPaused(true);
      setPausedAt(now);
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* ignore */ }
      setAttempt(next);
    }
  }

  function redoWrongAnswers() {
    if (!wrongAnswers.length) return;
    const parts = Object.fromEntries([1, 2, 3, 4, 5].map(partId => [partId, [...(scoringAttempt.parts?.[partId] || [])]]));
    wrongAnswers.forEach(entry => {
      parts[entry.part][entry.number - ((entry.part - 1) * 5) - 1] = entry.data.type === 'blanks' ? '' : null;
    });
    const next = {
      parts,
      startedAt: Date.now(),
      redoTargets: wrongAnswers.map(entry => ({ part: entry.part, index: entry.number - ((entry.part - 1) * 5) - 1 })),
      originalResult: scoringAttempt.originalResult || {
        parts: scoringAttempt.parts,
        startedAt: scoringAttempt.startedAt,
        finishedAt: scoringAttempt.finishedAt,
        totalPausedMs: scoringAttempt.totalPausedMs,
        score: totalScore,
      },
    };
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* ignore */ }
    navigate(`/cambridge/listening?mode=mock&exam=${examId}&part=${wrongAnswers[0].part}&set=${setId}&redo=${Date.now()}`);
  }

  if (submitted) return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-[28px] border border-emerald-200 bg-white p-7 text-center shadow-sm sm:p-10">
          <div className="text-5xl">🎧</div>
          <div className="mt-4 text-xs font-extrabold tracking-[.18em] text-emerald-700">LISTENING RESULT</div>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-950">{redoTargets ? '错题重做完成' : '听力模考完成'}</h1>
          <div className="mt-3 text-sm font-bold text-slate-500">用时 {mockDurationLabel(finalElapsed ?? elapsed)}</div>
          <div className="mt-6 text-6xl font-black text-emerald-700">{redoTargets ? redoScore : totalScore}<span className="text-2xl text-slate-400"> / {redoTargets ? redoTargets.length : 25}</span></div>
          {redoTargets && <p className="mt-3 text-sm text-slate-500">原整套成绩 {scoringAttempt.originalResult?.score ?? '—'}/25 已保留</p>}
          <div className="mx-auto mt-7 grid max-w-2xl grid-cols-5 gap-2">
            {breakdown.map((score, index) => <div key={index} className="rounded-xl bg-slate-50 px-2 py-3"><div className="text-xs text-slate-400">Part {index + 1}</div><strong className="mt-1 block text-lg text-slate-800">{redoTargets ? `${redoTargets.filter(target => target.part === index + 1).length - wrongAnswers.filter(entry => entry.part === index + 1).length}/${redoTargets.filter(target => target.part === index + 1).length}` : `${score}/5`}</strong></div>)}
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
                  {(entry.item.transcript || entry.data.transcript) && (
                    <TranscriptBox
                      transcript={entry.item.transcript || entry.data.transcript}
                      highlights={extractQuotes(entry.item.explanation || entry.item.exp || "")}
                    />
                  )}
                </article>
              ))}
              {wrongAnswers.length === 0 && <div className="rounded-2xl bg-emerald-50 p-6 text-center font-extrabold text-emerald-700">全部答对，没有错题 🎉</div>}
            </div>
          </section>
        )}
        <ListeningMockTranscriptPanel setId={setId} />
      </main>
    </CambridgeLayout>
  );

  return (
    <CambridgeLayout activeModule="exams" level={level} setLevel={setLevel}>
      <nav className="border-b border-slate-100 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <Link to={`/cambridge/exams/${examId}`} className="mr-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-extrabold text-emerald-800">← 真题总览</Link>
          <span className="mr-2 rounded-xl bg-[#064e3b] px-4 py-2.5 text-sm font-extrabold text-white">🎧 听力模考</span>
          {redoParts.map(partId => {
            const saved = attempt.parts?.[partId] || [];
            const indexes = redoTargets ? redoTargets.filter(target => target.part === partId).map(target => target.index) : [0, 1, 2, 3, 4];
            const done = indexes.every(index => saved[index] !== null && saved[index] !== undefined && String(saved[index]).trim() !== "");
            const tone = partId === part ? 'border-emerald-700 bg-emerald-700 text-white' : done ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-400';
            const cursor = partId === part ? '' : ' cursor-pointer hover:border-emerald-300 hover:text-emerald-700';
            return <button key={partId} type="button" title={`跳到 Part ${partId} 作答`} onClick={() => navigate(`/cambridge/listening?mode=mock&exam=${examId}&part=${partId}&set=${setId}`)} className={`rounded-xl border px-4 py-2.5 text-sm font-extrabold ${tone}${cursor}`}>Part {partId}{done ? ' ✓' : ''}</button>;
          })}
          <div className="ml-auto flex items-center gap-2">
            <span className={`rounded-xl px-4 py-2.5 font-mono text-sm font-extrabold ${paused ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>⏱ {mockDurationLabel(elapsed)}</span>
            <button type="button" onClick={toggleTimer} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-600 hover:border-emerald-300 hover:text-emerald-700">{startedAt === null ? '▶ 开始计时' : paused ? '▶ 继续计时' : 'Ⅱ 暂停计时'}</button>
            <button type="button" onClick={resetMock} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-600 hover:border-rose-300 hover:text-rose-600">↺ 重置模考</button>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-5xl px-6 py-7">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-emerald-700">{redoTargets ? 'WRONG ANSWER REDO' : 'LISTENING MOCK TEST'} · 真题 {setId}</div>
        <h1 className="mt-1 text-4xl font-extrabold text-slate-950">{data.title}</h1>
        <p className="mt-2 text-slate-500">{part === 1 ? '听五段短对话，从 A、B、C 三幅图片中选择正确答案。' : data.instruction}</p>
        <div className="h-6" aria-hidden="true" />
        <SpeedAudioPlayer src={officialListeningAudio(setId, part)} title={`真题${setId} · Part ${part} 音频`} />

        {data.type === 'match' ? (
          <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(280px,.65fr)_minmax(0,1.35fr)]">
            <section className="rounded-[24px] border border-slate-200 bg-white p-5">
              <div className="mb-4 text-xs font-extrabold tracking-[.14em] text-emerald-700">第一步 · 选择人物</div>
              <div className="space-y-3">
                {visibleIndexes.map(index => {
                  const item = data.items[index];
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
                    <button key={option} type="button" disabled={Boolean(redoTargets && used)} onClick={() => chooseMatch(optionIndex)} className={`flex min-h-[96px] items-center gap-3 rounded-2xl border p-4 text-left transition ${chosen ? 'border-[#dfad2d] bg-[#fff3c9] text-[#5b4300]' : used ? 'border-slate-200 bg-slate-100 text-slate-500 hover:border-[#e1b33a] hover:bg-[#fff9e9]' : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-[#e1b33a] hover:shadow-sm'}`}>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl font-extrabold ${chosen ? 'bg-[#f7cd60]' : 'bg-emerald-50 text-emerald-700'}`}>{String.fromCharCode(65 + optionIndex)}</span>
                      <strong>{option}</strong>
                      {used && <span className="ml-auto text-xs">{redoTargets ? '已用于其他题' : '已使用 · 可改选'}</span>}
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
        <div className="mt-6 space-y-4">
          {visibleIndexes.map(index => {
            const item = data.items[index];
            return (
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
          );
          })}
        </div>
        )}

        <section className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-[#064e3b] p-5 text-white">
          <strong>已完成 {answered} / {visibleIndexes.length}</strong>
          <button type="button" disabled={!complete} onClick={() => nextPart ? navigate(`/cambridge/listening?mode=mock&exam=${examId}&part=${nextPart}&set=${setId}`) : finishMock()} className="rounded-xl bg-[#f7cd60] px-5 py-3 font-extrabold text-[#4c3a00] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/50">
            {nextPart ? `完成并进入 Part ${nextPart} →` : redoTargets ? '提交错题重做并评分' : '提交听力模考并评分'}
          </button>
        </section>
      </main>
    </CambridgeLayout>
  );
}

const PET_PART_START = { 1: 1, 2: 8, 3: 14, 4: 20 };
const PET_PREFIX = "mars_pet_listening_v1";
const PET_SAMPLE_PREFIX = "mars_pet_sample_listening_v1";
const PET_STANDARD_PREFIX = "mars_pet_standard_listening_v1";
const PET_TRAINER_PREFIX = "mars_pet_trainer1_listening_v1";

const PET_LISTENING_LAST_KEY = "mars_pet_listening_v1:last";

const PET_LISTENING_ENTRIES = [
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
    id: "pet-bypart-1",
    number: "03",
    mark: "1",
    title: "Part 1 图片选择题",
    desc: "听短对话，从三幅图片中选择与关键信息相符的一项。",
    meta: "图片信息 · 7 题",
  },
  {
    id: "pet-bypart-2",
    number: "04",
    mark: "2",
    title: "Part 2 单项选择题",
    desc: "听多段短录音，理解细节、态度与观点，选出正确答案。",
    meta: "单项选择 · 6 题",
  },
  {
    id: "pet-bypart-3",
    number: "05",
    mark: "3",
    title: "Part 3 信息填空题",
    desc: "听一段独白，补全缺失的事实性信息，注意单词拼写。",
    meta: "信息填空 · 6 题",
  },
  {
    id: "pet-bypart-4",
    number: "06",
    mark: "4",
    title: "Part 4 访谈理解题",
    desc: "听一段访谈，理解主旨大意、关键细节与说话人观点。",
    meta: "访谈理解 · 6 题",
  },
];

function PetListeningCentre({ level, setLevel }) {
  const navigate = useNavigate();
  const [lastPractice] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(PET_LISTENING_LAST_KEY) || "null");
    } catch {
      return null;
    }
  });
  function openEntry(id) {
    if (id === "common") navigate("/cambridge/listening?view=common");
    else if (id === "dictation") navigate("/cambridge/dictation");
    else {
      const part = id.slice(-1);
      navigate(
        `/cambridge/listening?view=pet-bypart&petPart=${part}&source=pet&petTest=1`,
      );
    }
  }
  const lastSourceLabel = (source) =>
    source === "pet-sample"
      ? "官方样题"
      : source === "pet-standard"
        ? "标准版真题"
        : source === "pet-trainer"
          ? "Trainer 1"
          : "Test";
  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <ListeningTabBar active="centre" isPet />
      <main className="mx-auto min-h-full max-w-7xl px-6 py-6 lg:px-9">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] font-extrabold tracking-[.18em] text-violet-700">
              B1 PET LISTENING
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
        {lastPractice?.source && lastPractice?.testN && lastPractice?.part && (
          <button
            type="button"
            onClick={() =>
              navigate(
                `/cambridge/listening?view=${lastPractice.source}&petTest=${lastPractice.testN}&petPart=${lastPractice.part}`,
              )
            }
            className="mt-5 flex w-full items-center justify-between rounded-[20px] border border-[#e1b33a] bg-[#fff8df] px-5 py-4 text-left transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <span>
              <span className="block text-xs font-extrabold tracking-[.12em] text-[#9a7308]">
                继续上次练习
              </span>
              <strong className="mt-1 block text-lg text-gray-950">
                {lastSourceLabel(lastPractice.source)} {lastPractice.testN} · Part {lastPractice.part}
              </strong>
            </span>
            <span className="font-extrabold text-[#735500]">继续学习 →</span>
          </button>
        )}
        <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {PET_LISTENING_ENTRIES.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => openEntry(item.id)}
              className={`relative flex min-h-[215px] flex-col overflow-hidden rounded-[22px] border p-6 text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${item.featured ? "border-violet-500 bg-violet-50/50" : item.id === "dictation" ? "border-[#e7c65f] bg-[#fff9e9]" : "border-gray-200 bg-white hover:border-violet-300"}`}
            >
              {item.featured && (
                <div className="absolute inset-x-0 top-0 h-1.5 bg-violet-700" />
              )}
              <div className="flex items-start justify-between">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl text-lg font-extrabold ${item.featured ? "bg-violet-700 text-white" : item.id === "dictation" ? "bg-[#f4c95d] text-[#604800]" : "bg-violet-50 text-violet-700"}`}
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
                  className={`font-extrabold ${item.id === "dictation" ? "text-[#8a6500]" : "text-violet-700"}`}
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

function PetListeningPractice({ level, setLevel }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const rawView = searchParams.get("view");
  const byPart = rawView === "pet-bypart";
  const view = byPart ? searchParams.get("source") || "pet" : rawView;
  const activeList =
    view === "pet-sample"
      ? PET_LISTENING_SAMPLES
      : view === "pet-standard"
        ? PET_LISTENING_STANDARD
        : view === "pet-trainer"
          ? PET_TRAINER1_LISTENING
          : PET_LISTENING;
  const activePrefix =
    view === "pet-sample"
      ? PET_SAMPLE_PREFIX
      : view === "pet-standard"
        ? PET_STANDARD_PREFIX
        : view === "pet-trainer"
          ? PET_TRAINER_PREFIX
          : PET_PREFIX;
  const testLabel =
    view === "pet-sample"
      ? "官方样题"
      : view === "pet-standard"
        ? "标准版真题"
        : view === "pet-trainer"
          ? "Trainer 1"
          : "Test";
  const eyebrow =
    view === "pet-sample"
      ? "B1 PET · OFFICIAL SAMPLE"
      : view === "pet-standard"
        ? "B1 PET · OFFICIAL STANDARD"
        : view === "pet-trainer"
          ? "B1 PET · TRAINER TEST"
          : "B1 PET · MOCK TEST";
  const maxTest = activeList.length;
  const testN = Math.min(maxTest, Math.max(1, Number(searchParams.get("petTest")) || 1));
  const part = Math.min(4, Math.max(1, Number(searchParams.get("petPart")) || 1));
  const test = activeList[testN - 1];
  const data = test.parts[part];
  const count = data.items.length;

  const storageKey = `${activePrefix}:test${testN}:part${part}`;
  const emptyValue = data.type === "blanks" ? "" : null;
  const [answers, setAnswers] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
      if (saved?.answers?.length === count) return saved.answers;
    } catch {
      /* localStorage unavailable */
    }
    return Array(count).fill(emptyValue);
  });
  const [checked, setChecked] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
      if (saved?.checked?.length === count) return saved.checked;
    } catch {
      /* localStorage unavailable */
    }
    return Array(count).fill(false);
  });
  const [revealExplanation, setRevealExplanation] = useState({});
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ answers, checked }));
    } catch {
      /* localStorage unavailable */
    }
  }, [answers, checked, storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(
        PET_LISTENING_LAST_KEY,
        JSON.stringify({ source: view, testN, part }),
      );
    } catch {
      /* localStorage unavailable */
    }
  }, [view, testN, part]);

  const normalise = (v) =>
    String(v).toLowerCase().replace(/[£,\s-/.]/g, "");
  const isRight = (item, v) =>
    data.type === "blanks"
      ? item.answer.some((a) => normalise(a) === normalise(v))
      : Number(v) === item.answer;

  function choose(index, value) {
    setAnswers((v) => v.map((x, i) => (i === index ? value : x)));
  }
  function resetPart() {
    setAnswers(Array(count).fill(emptyValue));
    setChecked(Array(count).fill(false));
  }
  function submitAll() {
    setChecked(Array(count).fill(true));
  }
  // 已作答数（答案非空）
  const answeredCount = answers.filter(
    (a) => (data.type === "blanks" ? String(a ?? "").trim() !== "" : a !== null && a !== undefined),
  ).length;
  const submitted = checked.every(Boolean) && count > 0;
  const score = submitted
    ? data.items.reduce(
        (s, item, i) => s + (isRight(item, answers[i]) ? 1 : 0),
        0,
      )
    : 0;

  function setParam(key, value) {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next, { replace: true });
  }

  // byPart 纯数字网格：定位当前 (source, testN) 在扁平序列中的全局序号
  const flatIdx = PET_LISTENING_FLAT.findIndex(
    (f) => f.source === view && f.testN === testN,
  );
  const currentN = flatIdx >= 0 ? flatIdx + 1 : 1;
  const currentLabel = flatIdx >= 0 ? PET_LISTENING_FLAT[flatIdx].label : "";

  return (
    <CambridgeLayout activeModule="listening" level={level} setLevel={setLevel}>
      <ListeningTabBar
        active={part}
        isPet
        onSelect={(target) => {
          if (target === "centre")
            navigate("/cambridge/listening?view=pet-centre");
          else if (target === "common")
            navigate("/cambridge/listening?view=common");
          else if (target === "dictation") navigate("/cambridge/dictation");
          else setParam("petPart", target);
        }}
      />

      {/* Test selector */}
      <div className="bg-white border-b border-gray-100">
        {byPart ? (
          <div className="mx-auto max-w-5xl px-6 py-3.5">
            <div className="mb-2 flex items-center justify-between gap-3">
              <strong className="text-sm text-slate-700">选择练习</strong>
              <span className="text-xs text-slate-400">
                共 {PET_LISTENING_FLAT.length} 套 · 当前为练习{currentN}
                {currentLabel ? ` · ${currentLabel}` : ""}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
              {PET_LISTENING_FLAT.map((item, i) => {
                const n = i + 1;
                const active = item.source === view && item.testN === testN;
                return (
                  <button
                    key={n}
                    onClick={() => {
                      const next = new URLSearchParams(searchParams);
                      next.set("source", item.source);
                      next.set("petTest", item.testN);
                      setSearchParams(next, { replace: true });
                    }}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-xl border px-3 py-3 text-sm font-extrabold transition ${
                      active
                        ? "border-violet-600 bg-violet-600 text-white shadow-sm"
                        : "border-violet-100 bg-violet-50 text-violet-800 hover:border-violet-300"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-5xl px-6 py-3">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: maxTest }, (_, i) => i + 1).map((t) => (
                <button
                  key={t}
                  onClick={() => setParam("petTest", t)}
                  className={`h-9 w-9 rounded-lg text-sm font-extrabold transition ${
                    t === testN
                      ? "bg-violet-600 text-white"
                      : "bg-violet-50 text-violet-500 hover:bg-violet-100"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <main className="mx-auto max-w-5xl px-6 py-7">
        <div className="text-[11px] font-extrabold tracking-[.18em] text-violet-700">
          {eyebrow}
        </div>
        <div className="mt-1 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold">{data.title}</h1>
            <p className="mt-1 text-gray-500">{data.instruction}</p>
          </div>
          <button
            onClick={resetPart}
            className="shrink-0 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-500 hover:border-violet-300 hover:text-violet-600"
          >
            重置本 Part
          </button>
        </div>

        <div className="mt-6">
          <SpeedAudioPlayer
            src={data.audio}
            title={`${testLabel} ${testN} · Part ${part}`}
            eyebrow="PET LISTENING"
            tone="pet"
          />
        </div>

        <div className="mt-6 space-y-4">
          {data.items.map((item, index) => {
            const answered =
              data.type === "blanks"
                ? String(answers[index] ?? "").trim() !== ""
                : answers[index] !== null && answers[index] !== undefined;
            const right = submitted && isRight(item, answers[index]);
            const qNo = PET_PART_START[part] + index;
            return (
              <article
                key={qNo}
                className={`rounded-[22px] border bg-white p-5 md:p-6 ${
                  submitted
                    ? right
                      ? "border-emerald-400"
                      : "border-rose-300"
                    : answered
                      ? "border-violet-200"
                      : "border-gray-200"
                }`}
              >
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100 font-extrabold text-violet-700">
                    {qNo}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold leading-7">{item.q}</h2>

                    {data.type === "blanks" && (
                      <div className="mt-4 flex gap-3">
                        <input
                          value={answers[index] ?? ""}
                          onChange={(e) => {
                            setAnswers((v) =>
                              v.map((x, i) => (i === index ? e.target.value : x)),
                            );
                          }}
                          className="h-12 min-w-0 flex-1 rounded-xl border border-gray-200 px-4 text-lg font-bold outline-none focus:border-violet-500"
                          placeholder="输入听到的信息（1-2 个词或数字）"
                        />
                      </div>
                    )}

                    {data.type === "image_mcq" && (
                      <div className="mt-4">
                        <img
                          src={item.image}
                          alt={`Q${qNo} options`}
                          className="w-full rounded-xl border border-gray-200 bg-white"
                        />
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {[0, 1, 2].map((oi) => {
                            const sel = answers[index] === oi;
                            return (
                              <button
                                key={oi}
                                onClick={() => choose(index, oi)}
                                className={`h-11 rounded-xl border-2 text-base font-extrabold transition ${
                                  sel
                                    ? right
                                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                      : "border-violet-600 bg-violet-50 text-violet-700"
                                    : "border-gray-200 text-gray-500 hover:border-violet-300 hover:text-violet-600"
                                }`}
                              >
                                {LABELS[oi]}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {data.type === "mcq" && (
                      <div className="mt-4 grid gap-2">
                        {item.opts.map((opt, oi) => {
                          const sel = answers[index] === oi;
                          let cls =
                            "border-gray-200 bg-white hover:border-violet-300 hover:bg-violet-50/60";
                          if (sel)
                            cls = right
                              ? "border-emerald-400 bg-emerald-50"
                              : "border-violet-500 bg-violet-50";
                          return (
                            <button
                              key={oi}
                              onClick={() => choose(index, oi)}
                              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left font-bold transition ${cls}`}
                            >
                              <span
                                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${
                                  sel
                                    ? right
                                      ? "bg-emerald-500 text-white"
                                      : "bg-violet-600 text-white"
                                    : "bg-gray-100 text-gray-500"
                                }`}
                              >
                                {LABELS[oi]}
                              </span>
                              <span className="text-sm font-medium text-gray-800">
                                {opt}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {submitted && (
                      <div
                        className={`mt-4 rounded-xl px-4 py-3 text-sm leading-6 ${
                          right
                            ? "bg-emerald-50 text-emerald-800"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-x-2">
                          <strong>{right ? "✓ 回答正确！" : "再听一次。"}</strong>
                          {!right && (
                            <span>
                              正确答案：
                              {data.type === "blanks"
                                ? item.show
                                : `${LABELS[item.answer]}`}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              setRevealExplanation((v) => ({
                                ...v,
                                [index]: !v[index],
                              }))
                            }
                            className="text-xs font-extrabold text-violet-700 hover:underline"
                          >
                            {revealExplanation[index] ? "收起解析" : "查看解析"}
                          </button>
                        </div>
                        {revealExplanation[index] && item.explanation && (
                          <p className="mt-1 leading-6">{item.explanation}</p>
                        )}
                        <TranscriptBox
                          transcript={data.transcript}
                          highlights={extractQuotes(item.explanation || item.exp || "")}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {data.transcript && <PartTranscriptBlock data={data} />}

        <section className="mt-6 rounded-[22px] bg-violet-700 p-5 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              {submitted ? (
                <strong className="text-2xl text-amber-200">
                  正确 {score} / {count}
                </strong>
              ) : (
                <strong>
                  已作答 {answeredCount} / {count}
                </strong>
              )}
            </div>
            {!submitted ? (
              <button
                disabled={answeredCount < count}
                onClick={submitAll}
                className="rounded-xl bg-amber-400 px-6 py-2.5 text-sm font-extrabold text-violet-900 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-white/50"
              >
                提交答案
              </button>
            ) : (
              <button
                onClick={resetPart}
                className="rounded-xl bg-white/20 px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-white/30"
              >
                重做本题
              </button>
            )}
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-amber-300 transition-all"
              style={{
                width: `${((submitted ? score : answeredCount) / count) * 100}%`,
              }}
            />
          </div>
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
  const view = searchParams.get("view");
  if (
    view === "pet" ||
    view === "pet-sample" ||
    view === "pet-standard" ||
    view === "pet-trainer" ||
    view === "pet-bypart"
  )
    return <PetListeningPractice level={level} setLevel={setLevel} />;
  if (view === "pet-centre")
    return <PetListeningCentre level={level} setLevel={setLevel} />;
  if (view === "ket-centre")
    return <ListeningCentre level={level} setLevel={setLevel} />;
  if (level === "PET")
    return (
      <Navigate
        to="/cambridge/listening?view=pet-bypart&petPart=1&source=pet&petTest=1"
        replace
      />
    );
  const part = Number(searchParams.get("part"));
  const requestedSet = Number(searchParams.get("set"));
  const setId = OFFICIAL_LISTENING_SETS.some((set) => set.id === requestedSet)
    ? requestedSet
    : 9;
  const selectedSet = OFFICIAL_LISTENING_SETS.find((set) => set.id === setId);
  if (searchParams.get("mode") === "mock" && part >= 1 && part <= 5) {
    if ([1, 2, 3, 4, 5].some(partId => !mockListeningData(setId, partId)))
      return <ListeningSetChecking part={part} setId={setId} level={level} setLevel={setLevel} />;
    return (
      <ListeningMockErrorBoundary key={`mock-${setId}-${part}-${searchParams.get("redo") || "main"}`} level={level} setLevel={setLevel} setId={setId} examId={searchParams.get("exam") || `ket-${Math.ceil(setId / 4)}-test${((setId - 1) % 4) + 1}`}>
        <ListeningMockExam level={level} setLevel={setLevel} setId={setId} part={part} examId={searchParams.get("exam") || `ket-${Math.ceil(setId / 4)}-test${((setId - 1) % 4) + 1}`} />
      </ListeningMockErrorBoundary>
    );
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
  return <Navigate to="/cambridge/listening?part=1&set=9" replace />;
}
