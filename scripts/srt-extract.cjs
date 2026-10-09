// 从 SRT 提取 Trainer1 考试实战(exam practice)各 Part 文字稿
// 用法: node scripts/srt-extract.cjs <srt文件> <输出文件> [test编号，默认1]
const fs = require("fs");
const testNo = ["one", "two", "three", "four", "five", "six"][(Number(process.argv[4] || 1) - 1)] || "one";
const raw = fs.readFileSync(process.argv[2], "utf8");
const blocks = raw.split(/\r?\n\r?\n/);
const cues = [];
for (const b of blocks) {
  const lines = b.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) continue;
  const m = lines[1].match(/(\d+):(\d+):(\d+)[,.](\d+)\s*-->\s*(\d+):(\d+):(\d+)[,.](\d+)/);
  if (!m) continue;
  const s = +m[1] * 3600 + +m[2] * 60 + +m[3];
  cues.push({ s, text: lines.slice(2).join(" ") });
}
// 拼接全文，定位 exam practice 起点
const full = cues.map((c) => c.text).join(" ");
const marks = [];
for (const part of ["one", "two", "three", "four"]) {
  const re = new RegExp(`exam practice test ${testNo} listening part ${part}`, "i");
  // 找到含该短语的 cue
  let acc = 0;
  for (const c of cues) {
    const before = full.slice(0, acc);
    if (re.test(full.slice(acc, acc + c.text.length + 30))) {
      marks.push({ part, s: c.s, idx: before.length });
      break;
    }
    acc += c.text.length + 1;
  }
}
console.log("=== part start times (s) ===");
marks.forEach((m) => console.log(m.part, Math.floor(m.s / 60) + ":" + String(Math.floor(m.s % 60)).padStart(2, "0")));
const startIdx = marks.length ? marks[0].idx : 0;
const script = full.slice(startIdx);
fs.writeFileSync(process.argv[3], script.replace(/(\S) (\S)/g, "$1 $2"));
console.log("saved", process.argv[3], script.length, "chars");
