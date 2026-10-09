# FCE 整套模考运行器（对齐 PET 模考体验）

## Context

用户进入 FCE 模考界面（`/cambridge/exams/fce-xxx-testN`）时只看到四张试卷入口卡片，点进去是**专项练习页**（即时判分、无整套流程）。PET 的对应路由则提供完整的模考体验：按 Part 顺序作答、可暂停计时、交卷后统一出分、分 Part 得分、错题查看、只重做错题、刷新恢复。需求：为 FCE 新建同样的模考运行器，入口与 PET 一致（总览卡片 → `?tab=xxx` → 运行器）。

## 现状（已探明）

- `CambridgeExam.jsx:596-611` fceMatch 分支无条件渲染 `FceExamOverview`（src/pages/FceExam.jsx）
- `FceExam.jsx:25-30` sections 四卡片 href 指向专项页 `/cambridge/{paper}/fce?exam=...&part=1`
- PET 模板在 `src/pages/PetExam.jsx`：`PetExamShell`(:56)、`PetReadingExam`(:1133，进度持久化+计时+redoOnly)、`PetListeningExam`(:286，音频驱动不计时)、`PetWritingExam`(:435)、`PetSpeakingExam`(:511)、FinalResult(:322/:1277)。PetExam.jsx 与 CambridgeExam.jsx 存在循环引用先例（PetExam 从 CambridgeExam 导入 useTTS/WritingCard，运行时使用，安全）
- 数据：`fceExamPapers(examId)`（src/data/fceTestRegistry.js）返回四卷 `{meta, parts}`，三版本（mock 1-8 / standard 1-4 / schools 1-4）通用
- 写入 API：`recordFcePart(paper, examRef, partId, done, total)`（fce-exam-progress，供总览页百分比）、`setFceWrongBatch(paper, examRef, partId, wrongMap)`（错题本，覆盖式，重做全对自动移出）

## FCE 数据 shape（判分依据）

- Reading：P1 `mcq_cloze`（passage 含 `(N) ..........`，items[{q,opts[4],answer(index)}]）；P2 `open_cloze` / P3 `word_formation`（items[{q,answer[](变体,大写),show}]）；P4 `key_word_transformation`（items[{q,stem,key,answer[](整句变体),show}]）；P5 `reading_mcq`（passage，items[{q,q_text,opts[4],answer(index)}]）；P6 `paragraph_matching`（passage，options[{label,text}]，items[{q,answer(字母)}]）；P7 `multiple_matching`（sections[{label,name,text}]，items[{q,q_text,answer(字母)}]）
- Listening：P1 `mcq_situation`（items[{scenario,q,opts[3],answer(index)}]）；P2 `blanks`（items[{q,answer[](变体),show}]）；P3 `matching`（字母匹配，字段用法照抄 CambridgeListeningFCE.jsx Part3Panel）；P4 `mcq`（items[{q,opts[3],answer(index)}]）；各 part 有 `audio` 路径
- Writing：P1 `essay`{context,prompt,notes,wordRange}；P2 `choice`{tasks[{q,genre,context,boxTitle,boxHeading,prompt,taskLine,mustInclude}]}；范文字段读法照 CambridgeWritingFCE.jsx
- Speaking：P1 `categories[{name,questions[]}]`；P2 `images[]`；P3 `mindmap{centre,branches}`；P4 `questions[]`

## 方案

### 新文件 `src/pages/FceMockExam.jsx`（sky 主题，唯一新文件）

- `FceExamShell({examId, section, parts, partIndex, allAnswers, onReset, timerSeconds, timerPaused, onToggleTimer, totalMinutes, children})` — 照 PetExamShell：返回总览链接 + section 徽章 + Part 进度 chips（✓ 标记）+ 可暂停计时器 + 重新开始
- `FceReadingExam({examId})` — 7 Part 顺序作答，**75 分钟可暂停计时**，进度持久化，交卷出分，支持只重做错题
- `FceListeningExam({examId})` — 4 Part 顺序（每 Part 顶部音频播放器），不计时、不持久化（照 PET），交卷出分
- `FceWritingExam({examId})` — 2 Part 顺序，**80 分钟计时**，TaskBrief 题面 + 草稿编辑器（照 CambridgeWritingFCE.jsx 的 WritingEditor 模式，**草稿 key 与专项共用** `fce-writing-draft:{metaId}:p1` / `:p2q{q}`），无自动分，结果页给范文对照入口与自评提示
- `FceSpeakingExam({examId})` — 4 Part 顺序展示（P1 面试问题、P2 看图、P3 mindmap 讨论提纲、P4 深入讨论），带参考答案/TTS（useTTS 从 CambridgeExam.jsx 导入，同 PetExam 先例），练习模式不出分
- Part 组件（作答中只记录不评分，禁用即时反馈）：FcePart1McqCloze / FcePart2Cloze / FcePart3Cloze / FcePart4Transformation / FcePart5Mcq / FcePart6GappedText / FcePart7MultiMatch + 听力 FceListenSituation / FceListenBlanks / FceListenMatch / FceListenMcq + 路由器
- `FceFinalResult({examId, section, parts, allAnswers, elapsed, onRestart, onRedoWrong})` — 总分/正确率、各 Part 得分条、错题 review 列表（含正确答案与解析）、重新作答/重做错题（阅读）/返回总览
- 纯判分函数（文件底部）：`normalizeFceAnswer(v)`（trim + 空格折叠 + 大小写不敏感）、`scoreFceReadingPart(part, answers)`、`scoreFceListeningPart(part, answers)`、`wrongMapOf(part, answers)`

### 状态与持久化

- 进度 key：`mars_fce_mock_progress_v1:{examId}:reading`（仅阅读持久化，对齐 PET），字段 `{partIndex, allAnswers:{[partIndex]:[...]}, done, redo, startedAt, pausedAt, totalPausedMs, finishedAt}`；恢复逻辑照 PetReadingExam(:1146-1168)：刷新续作、计时按 startedAt/totalPausedMs 重算、redo=true 进错题重做
- 交卷时把最终进度写入并置 done=true；"重新作答"清 key 重来

### 判分与写入

- index 类（P1/P5、听力 P1/P4）：`answers[i] === item.answer`
- 变体类（P2/P3/P4、听力 P2）：`normalizeFceAnswer(user) === normalizeFceAnswer(v)` 对 `item.answer[]` 任一变体
- 字母类（P6/P7、听力 P3）：字母比对（大小写不敏感）
- 出分时逐 Part：`setFceWrongBatch(paper, examId, partId, wrongMap)` + `recordFcePart(paper, examId, partId, done, total)` — 同步错题本与总览页进度条

### 修改点（2 处）

- `CambridgeExam.jsx` fceMatch 分支（:596-611）：用已有 `searchParams`（:593）读 `?tab=`，`fceTest && tab in {listening,reading,writing,speaking}` 时返回对应运行器（先经 fceExamPapers 校验该卷存在，缺卷回落 Overview）；fce-mock-N 同样支持。注意 hooks 规则：fceMatch 分支提前 return，不得新增条件 hook
- `FceExam.jsx` sections（:25-30）：四卡片 href 改为 `/cambridge/exams/${examId}?tab={listening|reading|writing|speaking}`，口语徽章"练习模式"改"模考模式"

## 实施顺序

1. FceMockExam.jsx：Shell + 判分函数 + Reading 运行器（7 Part 组件 + 结果页 + redoOnly）+ 路由分流 + Overview href 修改 → 浏览器验证阅读全流程
2. Listening 运行器（照抄 CambridgeListeningFCE.jsx Part3Panel 字段用法）+ 音频播放器 + 结果页
3. Writing 运行器（WritingEditor 模式 + 范文对照）
4. Speaking 运行器（TTS + 参考答案）

## 验证

- `npm.cmd run lint`（零错误）、`npm.cmd run build`（通过）
- 浏览器抽查（dev server http://localhost:5173/#/）：
  - `/#/cambridge/exams/fce-schools-4-test1` → 四卡片跳 `?tab=xxx` 运行器
  - reading：7 Part 顺序作答、计时暂停/继续、刷新恢复、交卷出分、分 Part 得分、错题 review、只重做错题、重做全对后错题本移出
  - listening：音频播放、4 Part、交卷出分
  - writing：草稿与专项页互通（同一 key）、范文对照
  - speaking：4 Part 展示 + TTS
  - `fce-standard-1-test1` 与 `fce-mock-1` 各抽查 reading；窄屏（~375px）无阻断布局
  - `/#/cambridge/wrong/fce` 错题本能看到模考错题
  - 专项练习入口（模块菜单）不受影响

## 风险与对策

- **循环引用**：FceMockExam → CambridgeExam（useTTS 等）且 CambridgeExam → FceMockExam，与 PetExam.jsx 现状同模式（运行时取值安全）；若 lint/运行时报错，把 useTTS 提到共享文件
- **旧 mock 数据差异**：判分用防御式访问（`item.answer ?? []`、`opts ?? []`）
- **数据缺口**：schools-4 听力 T3 P2 仅 9 题、部分 Speaking images/mindmap 缺失 → 按实际 items 计分，缺图显示"图片待录入"占位，不崩溃
- **校园版4 未全核对（verified=false）**：运行器不展示"官方已完成"承诺，总览页保持现有"数据来自官方真题原件，逐题人工核对后录入"文案
