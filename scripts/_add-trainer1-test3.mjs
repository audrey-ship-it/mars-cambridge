// 将 Test 3 的阅读/写作/口语数据插入三个数据文件，并做结构校验。
import fs from 'node:fs';
import util from 'node:util';
import { pathToFileURL } from 'node:url';
import { readingTest3, writingTest3, speakingTest3 } from './_trainer1-test3.mjs';

const opts = { depth: null, compact: false, breakLength: 110, maxArrayLength: null, maxStringLength: null };

function fmt(value) {
  return util.inspect(value, opts);
}

const readPath = 'src/data/ketReadingTrainer1.js';
const writePath = 'src/data/ketWritingTrainer1.js';
const speakPath = 'src/data/ketSpeakingTrainer1.js';

// ---- reading ----
let readSrc = fs.readFileSync(readPath, 'utf8');
if (!readSrc.includes("id: 'ket-trainer1-test3'")) {
  const marker = '\n\n];';
  const idx = readSrc.lastIndexOf(marker);
  if (idx < 0) throw new Error('reading: closing marker not found');
  const block = fmt(readingTest3).split('\n').map((line) => '  ' + line).join('\n');
  readSrc = readSrc.slice(0, idx) + '\n' + block + ',\n];';
  fs.writeFileSync(readPath, readSrc, 'utf8');
  console.log('reading inserted');
} else {
  console.log('reading already contains test3, skipped');
}

// ---- writing ----
let writeSrc = fs.readFileSync(writePath, 'utf8');
if (!writeSrc.includes("'ket-trainer1-test3'")) {
  const marker = '\n};';
  const idx = writeSrc.lastIndexOf(marker);
  if (idx < 0) throw new Error('writing: closing marker not found');
  const block = fmt(writingTest3['ket-trainer1-test3']);
  writeSrc = writeSrc.slice(0, idx) + "\n  'ket-trainer1-test3': " + block + ',\n};';
  fs.writeFileSync(writePath, writeSrc, 'utf8');
  console.log('writing inserted');
} else {
  console.log('writing already contains test3, skipped');
}

// ---- speaking ----
let speakSrc = fs.readFileSync(speakPath, 'utf8');
if (!speakSrc.includes("'ket-trainer1-test3'")) {
  const marker = '\n};';
  const idx = speakSrc.lastIndexOf(marker);
  if (idx < 0) throw new Error('speaking: closing marker not found');
  const block = fmt(speakingTest3['ket-trainer1-test3']);
  speakSrc = speakSrc.slice(0, idx) + "\n  'ket-trainer1-test3': " + block + ',\n};';
  fs.writeFileSync(speakPath, speakSrc, 'utf8');
  console.log('speaking inserted');
} else {
  console.log('speaking already contains test3, skipped');
}

// ---- validate ----
const readingMod = await import(pathToFileURL(readPath).href + '?v=' + Date.now());
const writingMod = await import(pathToFileURL(writePath).href + '?v=' + Date.now());
const speakingMod = await import(pathToFileURL(speakPath).href + '?v=' + Date.now());

const tests = readingMod.ketReadingTrainer1Tests;
if (tests.length !== 3) throw new Error('reading length=' + tests.length);
const t3 = tests.find((t) => t.id === 'ket-trainer1-test3');
if (!t3) throw new Error('test3 not found');
const counts = {
  p1: t3.part1.questions.length,
  p2: t3.part2.questions.length,
  p3: t3.part3.questions.length,
  p4: t3.part4.questions.length,
  p5: t3.part5.questions.length,
  seg: t3.part4.passage_segments.length,
};
console.log('reading counts', counts);
if (JSON.stringify(counts) !== JSON.stringify({ p1: 6, p2: 7, p3: 5, p4: 6, p5: 6, seg: 7 })) {
  throw new Error('unexpected reading counts');
}
if (t3.part1.questions.some((q) => !q.options || !q.answer)) throw new Error('part1 incomplete');
if (t3.part2.people.length !== 3) throw new Error('part2 people');
if (t3.part4.questions.some((q) => !q.options || !q.answer)) throw new Error('part4 incomplete');

const w3 = writingMod.KET_TRAINER1_WRITING['ket-trainer1-test3'];
if (!w3 || w3.length !== 2) throw new Error('writing test3 missing');
console.log('writing parts', w3.map((w) => w.part));

const s3 = speakingMod.KET_TRAINER1_SPEAKING['ket-trainer1-test3'];
if (!s3 || s3.parts[0].topics.length !== 1) throw new Error('speaking test3 missing');
console.log('speaking topics', s3.parts[0].topics.length, 'prompts', s3.parts[0].topics[0].cardPrompts.length);

console.log('ALL OK');
