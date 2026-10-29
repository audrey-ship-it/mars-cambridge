// 一次性补丁：把 Trainer 1 阅读/写作/口语接入 CambridgeExam.jsx。
import fs from 'node:fs';

const file = 'src/pages/CambridgeExam.jsx';
let src = fs.readFileSync(file, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';

// 1) 补齐 import
const importAnchor = "import { KET_STANDARD_WRITING } from '../data/ketStandardWritingData'";
if (!src.includes("import { KET_TRAINER1_WRITING }")) {
  if (!src.includes(importAnchor)) throw new Error('import anchor missing');
  src = src.replace(
    importAnchor,
    [
      importAnchor,
      "import { KET_TRAINER1_WRITING } from '../data/ketWritingTrainer1'",
      "import { KET_TRAINER1_SPEAKING } from '../data/ketSpeakingTrainer1'",
    ].join(eol),
  );
}

// 2) 替换 TRAINER_READY_EXAMS 定义
const tStart = src.indexOf('const TRAINER_READY_EXAMS');
const tEnd = src.indexOf('const EXAM_COLLECTIONS');
if (tStart < 0 || tEnd < 0) throw new Error('trainer block markers missing');
if (!src.slice(tStart, tEnd).includes('KET_TRAINER1_WRITING')) {
  const block = [
    '// 《A2 Key for Schools Trainer 1》Second Edition 的 Exam Practice 卷。',
    '// 听力从 officialListeningManifest 取；阅读/写作/口语从对应 Trainer 数据文件取，',
    '// 只有逐题核对完成的套卷才挂载对应模块（未录入的模块保持入口关闭）。',
    'const TRAINER_READY_EXAMS = OFFICIAL_LISTENING_SETS',
    "  .filter(set => set.book === 'trainer-1' && set.readyParts?.length === 5)",
    '  .map(set => {',
    '    const testId = `ket-trainer1-test${set.test}`',
    '    const reading = getKetReadingTest(testId)',
    '    const writing = KET_TRAINER1_WRITING[testId]',
    '    const speaking = KET_TRAINER1_SPEAKING[testId]',
    '    return {',
    '      id: `trainer-1-${set.test}`,',
    "      kind: 'trainer',",
    "      title: 'A2 Key for Schools Trainer 1（Second Edition）',",
    '      label: `Trainer 1 · Test ${set.test}`,',
    '      listening: {},',
    '      ...(hasCompleteKetReadingPaper(reading) && writing?.length === 2',
    '        ? { reading: { parts: adaptReadingTest(reading), writing } }',
    '        : {}),',
    '      ...(speaking?.parts?.length ? { speaking } : {}),',
    '    }',
    '  })',
    '',
    '',
  ].join(eol);
  src = src.slice(0, tStart) + block + src.slice(tEnd);
}

// 3) 重写 ExamOverview 的 sections
const sStart = src.indexOf('const sections = [', src.indexOf('function ExamOverview'));
const sEnd = src.indexOf('  ]' + eol, sStart) + 4;
if (sStart < 0 || sEnd < 4) throw new Error('sections markers missing');
const sectionsBlock = [
  '  const readingReady = Boolean(exam.reading?.parts?.length && exam.reading?.writing?.length)',
  '  const speakingReady = Boolean(exam.speaking?.parts?.length)',
  '  const sections = [',
  "    { icon: '🎧', title: '听力', en: 'Listening', detail: listeningReady ? '30分钟 · 5个 Part · 25道题' : '题目与音频正在逐题核对，暂不开放整套模考', href: listeningReady ? `/cambridge/listening?mode=mock&exam=${exam.id}&part=1&set=${setNumber}` : null },",
  "    { icon: '📖', title: '阅读与写作', en: 'Reading & Writing', detail: (readingReady || !isTrainer) ? '60分钟 · 7个 Part · 阅读30题 + 写作2题' : 'Trainer 1 阅读与写作正在逐题核对，暂未开放', href: readingReady ? `/cambridge/exams/${exam.id}?tab=reading` : isTrainer ? null : exam.reading?.parts?.length ? `/cambridge/exams/${exam.id}?tab=reading` : `/cambridge/reading?part=1&set=${setNumber}` },",
  "    { icon: '🎙️', title: '口语', en: 'Speaking', detail: speakingReady ? '8–10分钟 · Part 1 个人问答 · Part 2 图片讨论' : isStandard ? '原卷口语材料核对中' : 'Trainer 1 口语材料正在整理，暂未开放', href: speakingReady ? `/cambridge/exams/${exam.id}?tab=speaking` : isStandard ? null : `/cambridge/speaking?part=2&set=${setNumber}` },",
  '  ]',
  '',
].join(eol);
src = src.slice(0, sStart) + sectionsBlock + src.slice(sEnd);

fs.writeFileSync(file, src, 'utf8');
console.log('patched CambridgeExam.jsx');
