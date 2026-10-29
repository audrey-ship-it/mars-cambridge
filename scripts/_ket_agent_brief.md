# KET 听力转录子代理简报（必读）

你负责一套 KET 听力题的：①逐字转录官方录音稿 ②抄录官方答案 Key ③为每题撰写/补全中文解析（内嵌英文依据引句）。产出单个 JSON 文件。禁止改任何其他文件。

## 产出文件与 JSON 规约

写到指定路径（如 `d:/workspace_sunny/mars-cambridge/scripts/_ket_out/ket-set-01.json`），UTF-8 无 BOM：

```json
{
  "setId": 1,
  "source": { "book": "KET青少版官方真题1（扫描版）", "pages": "PDF 100-107" },
  "officialAnswers": {
    "p1": ["C", "A", "B", "C", "B"],
    "p2": ["Thursday", "4:20", "Taylor", "0779386521", "library"],
    "p3": ["C", "B", "A", "B", "C"],
    "p4": ["B", "A", "C", "B", "A"],
    "p5": ["B", "E", "G", "A", "F"]
  },
  "parts": { "1": "整段 Part 1 录音稿…", "2": "…", "3": "…", "4": "…", "5": "…" },
  "explanations": { "p1q1": "中文解析…", "p1q2": "…", "p2q1": "…", "p5q5": "…" }
}
```

- officialAnswers：官方 Key 抄录。P1/P3/P4/P5 用字母 A/B/C/…；P2 用 Key 印刷的单词/数字/短语（保留官方写法，如 "10:45"、"£5.60" 去掉货币符号只留数字时按官方原样）。某 Part 数据不存在（official-data.json 为 null）时该 part 三个字段都置 null。
- parts.N：该 Part 的完整录音稿逐字转录。换行用 \n。角色行保持原样（"Narrator:"/"Woman:"/"Man:"/"Girl:"/"Boy:" 等，按书上大小写）。题号引导行（如 "Narrator: One. Where did …?" 或 "1" 行）照抄。跨页拼接时直接续接（不要加多余空行/空格）。若文本源里有 "---- page break ----" 分隔线，删除它。
- explanations：25 条（存在的 Part 每题 1 条），键 p1q1..p5q5。

## 转录硬规则

1. 逐字：不加词、不漏句、不用 "…" 代替任何文字——省略号只允许出现在官方原文确实印了 "..." 的位置（逐字抄）。
2. 只转「考试录音」的 scripts：Trainer 系（Trainer1/2）原文页里混排 Training 与 Exam Practice 两种脚本——只转标题含 Exam Practice（或对应 track 号为考试 track）的段；Training 段一律不转。真题书（青少版/标准版/真题3）整个 transcripts 区都是考试录音，全转。
3. Narrator 的 "Now listen again." 段落是考试录音一部分，照转。
4. 不确定的词：结合音频常识与上下文判读后填写，并在 JSON 顶层加 "uncertain": ["p3: 某词存疑"] 说明。
5. 自检后再写盘：JSON.parse 通过；5 个 part transcript 非空（或与 official-data.json 缺失 Part 对应置 null）；explanations 数 = 存在 Part 的题数（通常 25）；officialAnswers 数组长度正确。

## 解析规则（中文 + 内嵌英文引句）

- 先读现有数据 `d:/workspace_sunny/mars-cambridge/scripts/_ket_out/official-data.json`（key=setId → part → items[].q/opts/answer/explanation）。
  - 有 explanation：**保留其全部中文叙述**（可微调衔接词），并在叙述中合适位置内嵌 1-3 条英文依据句，用 ASCII 双引号包裹，例如：女士说邮局在 "School Street"，还强调 "next to the café"，因此选 B。依据句必须从你转录的 parts 原文里逐字摘取（≥3 个词，标点可按原文）。若现有解析的结论与官方 Key 矛盾，以官方 Key 为准改写结论并在 JSON 顶层 "conflicts" 里说明。
  - 无 explanation（P2 全部、部分 P1/P3/P4/P5）：新写 2-4 句中文解析：直接点明正确答案 + 引 1-2 条英文依据句（ASCII 双引号，逐字摘自原文）+ 简述主要干扰项为何不对（图选题要说明另两幅图对应什么）。风格参照 src/data/ketListeningBooster.js 的 explanation 字段。
  - 引句必须是原文连续片段（归一化后能在 transcript 中 indexOf 命中）；跨句拼接用 "..." 分隔（转录中省略号对应处须真实存在），否则拆成两条引句。

## 答案核对

- 你抄的 officialAnswers 是官方 Key 原文；official-data.json 里的 answer 是站内数据。两者可能不一致——**不要改站内数据的判断**，只在 JSON 顶层 "conflicts" 里列出（如 "p1q3: 数据C vs 官方A"）。主会话会统一处理。

## 各来源类型的读法

- **扫描版真题书 PNG**（青少版1/2、标准版1/2）：用 Read 逐页看指定 PNG（一次 2-4 页），先找到本套 Test 的 Answer key 页抄 Key（含 Listening Part 1-5 答案行），再逐页转录 Listening transcripts（Part 1-5）。
- **Trainer1 PNG**：同上，但只转 Exam Practice 段；Key 优先用任务提示里给出的官方 Key（来自 Teacher's Notes），仍可在指定 Notes 页复核。
- **Trainer2 txt**：读 `scripts/_ket_out/t2ts-testN.txt`（纯文本层，比 PNG 更准）。只转 Exam Practice 段；Training 段不转。Key 已在录入时官方验证，任务提示会给站内数据答案做对照，你不必另找 Key，officialAnswers 填站内 answer 对应字母/词（P5 选项字母按 opts 顺序 A-E）。
- **真题3 小 PDF PNG**（sch3_t1..t4）：目录里全部页（约 9-10 页）都属本套：前面是参考答案页（抄 Listening 答案），后面是音频文稿（全转）。

## 禁止

- 只写你负责的那一个 JSON 文件；不写/不改任何 .jsx/.js/.md；不跑 npm；不 git。
