# FCE 语法板块（B2）实施计划

## Context

语法中心目前只支持 KET（翠绿主题，纯数字单元号）和 PET（紫色主题，p1–p21 前缀）。当用户切换 level=FCE 时，语法页会回落到 KET 内容。本次按 PET 架构新增 FCE（B2）语法板块：内容为原创教学编排（同 FCE 词汇模式），不含官方真题、不标注"官方"。每单元三题型（选择/挖空/改错各 ≥15 题）+ 中英双语 + 中文解析，上架门槛由 `grammarUnitReadyFor` 强制校验。

**规模决策（用户已确认）**：本轮建全目录骨架（5 组 20 单元）+ 前 2 组（f1–f8）题库完整上架；其余单元 `available: false` 显示"制作中"，后续会话补。

## FCE 语法目录（原创编排，避开与 PET 21 单元重复，突出 B2 进阶考点）

| 组 | 单元 |
|---|---|
| 01 进阶时态与将来 | f1 将来完成时 · f2 叙事时态综合 · f3 现在完成进阶辨析 · f4 将来表达法综合 |
| 02 情态与虚拟 | f5 情态动词+完成式 · f6 推测情态综合 · f7 used to / be used to / get used to · f8 wish / if only / It's time |
| 03 条件与让步（后续批） | f9 混合条件句 · f10 unless / in case / as long as · f11 despite / although 让步 · f12 目的与结果 |
| 04 从句与间接语（后续批） | f13 介词+关系代词 · f14 缩略定语从句 · f15 报告动词句型 · f16 分裂句与强调 |
| 05 被动与强调（后续批） | f17 使役被动 have sth done · f18 被动报告句型 · f19 动词模式进阶 · f20 比较结构 |

## 数据层（新增，照抄 PET 模式）

- `src/data/fceGrammarSets.js` — `FCE_GRAMMAR_POINTS` + `FCE_GRAMMAR_GROUPS`，字段结构与 [petGrammarSets.js](file:///d:/workspace_sunny/mars-cambridge/src/data/petGrammarSets.js) 完全一致（id/number/title/desc/unitNums/icon/featured；points 含 color/light 主题类，用 sky 蓝系）。f1–f8 `available: true`，f9–f20 `available: false`
- `src/data/fceGrammarTensesQuestions.js` — f1–f4 题库，导出 `FCE_GRAMMAR_TENSES_QUESTIONS`
- `src/data/fceGrammarModalQuestions.js` — f5–f8 题库，导出 `FCE_GRAMMAR_MODAL_QUESTIONS`
- `src/data/fceGrammarQuestions.js` — 聚合导出 `FCE_GRAMMAR_QUESTIONS`

**单元内容 schema**（与 [petGrammarTensesQuestions.js](file:///d:/workspace_sunny/mars-cambridge/src/data/petGrammarTensesQuestions.js) 一致）：
- `title` / `intro`（中文讲解）/ `guide: { uses[], structures[], signals[], warning }`
- `questions`: `Q(q, qZh, opts[4], ans, expZh)` — ans 为索引或数组（多选）
- `blanks`: `B(sentence, sentenceZh, ans: string[]（可接受答案）, expZh)` — 句中 `___` 带提示词
- `corrections`: `F(sentence, sentenceZh, error, correct, expZh)`
- 每类型 ≥15 题，所有 qZh/sentenceZh/expZh 必须有中文（`grammarUnitReadyFor` 会拦截）

## 工具层改造（KET/PET 二分支 → 支持三级别）

- [grammarProgress.js](file:///d:/workspace_sunny/mars-cambridge/src/utils/grammarProgress.js) — `KEYS` 加 `FCE: 'mars_grammar_progress_fce_v1'`，`storageKey` 改 map 查找
- [grammarMistakes.js](file:///d:/workspace_sunny/mars-cambridge/src/utils/grammarMistakes.js) — 加 `mars_grammar_mistakes_fce_v1`
- [grammarUnitReady.js](file:///d:/workspace_sunny/mars-cambridge/src/utils/grammarUnitReady.js) — 加 `isFceGrammarUnitReady`

## 页面改造

- [CambridgeGrammar.jsx](file:///d:/workspace_sunny/mars-cambridge/src/pages/CambridgeGrammar.jsx) — `THEMES` 加 FCE（sky 蓝系）；主组件与 `GrammarTabBar` 的 `isPet ? X : Y` 改为按 level 取 groups/points/readyCheck/theme（level==='FCE' 时用 FCE 数据组）
- [CambridgeGrammarCategory.jsx](file:///d:/workspace_sunny/mars-cambridge/src/pages/CambridgeGrammarCategory.jsx) — 同上，FCE 分支
- [CambridgeGrammarUnit.jsx](file:///d:/workspace_sunny/mars-cambridge/src/pages/CambridgeGrammarUnit.jsx) — 单元号解析：`/^f/i` → FCE（`FCE_GRAMMAR_QUESTIONS[unitNum]` + `FCE_GRAMMAR_GROUPS` + levelCode='FCE'），与 `/^p/i`（PET）、纯数字（KET）互斥；`GRAMMAR_VARS` 加 FCE 蓝色 CSS 变量
- [CambridgeGrammarMistakes.jsx](file:///d:/workspace_sunny/mars-cambridge/src/pages/CambridgeGrammarMistakes.jsx) — 确认按 level 读写（readGrammarMistakes 已支持），仅核对无需大改
- App.jsx 无需新路由（复用 `/cambridge/grammar/:unit` 的 fN 前缀与 category 路由）

## 验收

1. `npm.cmd run lint` 零错误、`npm.cmd run build` 通过
2. 浏览器：level=FCE → /cambridge/grammar 显示 5 组入口，f1–f8 "已可练"、f9–f20 显示制作中；进入 f1 三种模式各做对/错若干题 → 错题本收录、连续答对 2 次移出；f9 单元页显示"暂未开放"
3. 回归：KET（数字单元）与 PET（pN）语法页、错题本、进度不受影响（localStorage key 独立）
4. f1–f8 每单元通过 `isFceGrammarUnitReady`（三题型 ≥15 且中文完整）

## 边界与注意

- 内容全部原创教学编排（B2 考点），不使用"官方"字样，不声称出自真题
- 单元号前缀约定：KET=`1`…、PET=`p1`…、FCE=`f1`…，链接统一小写
- `available: false` 单元依赖现有"暂未开放"占位逻辑，无需额外处理
- 组 03/04/05 题库留待后续会话：只建目录骨架 + Questions 文件占位不建（聚合文件只引用已存在的两个文件）
