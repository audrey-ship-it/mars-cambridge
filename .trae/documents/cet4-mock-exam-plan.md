# CET-4 模考运行器 + 错题本 + 真题中心 实现计划

## Context

mars-cet 已有阅读/听力/翻译/写作/语法/单词六大专项 + SaaS 首页 + 深绿侧边栏，但**模考缺位**：侧边栏模考项 `ready:false` 置灰、Home 模考卡 `link:null`、无模考路由。用户要求把 mars-cambridge 的 KET 模考框架（真题中心 + 按 Paper/Part 顺序运行的模考运行器 + 覆盖式错题本）套用到 CET-4，并在模考里补齐 KET 没有的「翻译」Part（写作 KET 已有，CET-4 模考需 写作+听力+阅读+翻译 四 Section）。

用户已确认：① 按 CET-4 真实顺序 + 各 Section 独立计时（写作 30→听力 25→阅读 40→翻译 30 分钟，到点自动交该 Section，严格顺序不可跳过未完成的后一 Section）；② 保留现有 SaaS 首页，仅激活模考入口。

预期结果：从首页/侧边栏进 `/mock` 真题中心 → 选首套 `cet4-2024-06-s1` 进 `/mock/:setId` 模考运行器 → 按真实顺序四 Section 独立计时作答 → 交卷后阅读/听力自动判分并写错题本、写作/翻译展示参考范文译文 → 错题本 `/mock/wrong` 可只重做错题、答对移出。

## 文件清单

### 新建
| 文件 | 职责 |
|---|---|
| `src/data/mockExamCatalog.js` | 18 套真题目录（首套 verified，其余 17 套 `{verified:false}` 占位）；`getMockExam(id)` 聚合现有 readingSets/听力数据/translation/writing 为 `{writing,listening,reading,translation,meta}`；`listMockExams()` 列表用 |
| `src/data/mockExamWrongBook.js` | 仿 [mockWrongBook.js](file:///d:/workspace_sunny/mars-cambridge/src/data/mockWrongBook.js)，key `mars_cet4_mock_wrong_book`；导出 `setMockWrongBatch(examRef, paper, partId, wrongMap)` / `listMockWrong()` / `resolveMockWrong(examRef, paper, partId, key)` / `clearMockWrong()` |
| `src/pages/MockExamList.jsx` | 真题中心（路由 `/mock`）；仿 KET `ExamList`：18 套分组卡片，读 `mars_cet4_mock_progress_{id}` 显示「开始/继续/已完成」，未录入显示「整理中」 |
| `src/pages/MockExam.jsx` | 模考运行器（路由 `/mock/:setId`）；按写作→听力→阅读→翻译顺序 + 四独立计时器 + 进度恢复 + 交卷 + 结果页 |
| `src/pages/MockWrongBook.jsx` | 模考错题本（路由 `/mock/wrong`）；仿 [CambridgeWrongBookMock.jsx](file:///d:/workspace_sunny/mars-cambridge/src/pages/CambridgeWrongBookMock.jsx)，回查原题、重做答对移出、全部/阅读/听力过滤、清空 |
| `src/components/mockExam/SectionTimer.jsx` | props `{seconds, running, onTimeout, onPause, onResume}`；仅 active section 跑 interval，切 section 回写剩余秒 |

### 修改
| 文件 | 改动 |
|---|---|
| `src/App.jsx` | +3 路由：`/mock`、`/mock/:setId`、`/mock/wrong`（按 HashRouter 既有写法，包在 Layout+ErrorBoundary 内） |
| `src/components/Sidebar.jsx` | L12 删模考项的 `ready: false`（激活） |
| `src/pages/Home.jsx` | MODULES 里「模拟考试」卡 `link:null` → `link:'/mock'`、`ready:true` |
| `src/components/reading/BankedCloze.jsx`、`ParagraphMatching.jsx`、`CarefulReading.jsx` | 加可选 `submitted` prop：为 true 时按答案高亮对/错（复用于专项页交卷后与模考结果页；专项页 [ReadingPractice.jsx](file:///d:/workspace_sunny/mars-cet/src/pages/ReadingPractice.jsx) 当前只有总额分，加单题高亮是同步增强） |

## 模考运行器设计（MockExam.jsx）

**顺序**：固定 `['writing','listening','reading','translation']`；后一 Section 须前一 `submitted:true` 才解锁（顶部 Section tab，未解锁的置灰）。

**进度持久化**（key `mars_cet4_mock_progress_${setId}`，结构仿 KET，格式不兼容整份丢弃）：
```
{ activeIndex, timers:{writing:1800,listening:1500,reading:2400,translation:1800},  // 剩余秒
  answers:{ reading:{banked,matching,careful}, listening:{n:v} },
  drafts:{ writing, translation },
  submitted:{writing,listening,reading,translation}, startedAt, finishedAt }
```
`key={setId}` 重挂 + `useState(()=>loadJSON(...))` 惰性恢复（仿 [ReadingPractice.jsx](file:///d:/workspace_sunny/mars-cet/src/pages/ReadingPractice.jsx) L41/L45 模式）。

**计时器**：仅 active section 跑 `setInterval(1s)`；可暂停/继续；到点先 flush textarea 草稿再 `submitted[section]=true`、推进 `activeIndex`、调对应交卷逻辑；切 section 时回写剩余秒防漂移。顶部 sticky 栏：剩余倒计时 + 暂停/继续 + 「↺ 重置模考」（仿 KET 听力，弹确认 → `removeKey` + 时间戳 `key` 重挂）。

**各 Section 渲染（复用现有组件）**：
- 写作：复用 [WritingPractice.jsx](file:///d:/workspace_sunny/mars-cet/src/pages/WritingPractice.jsx) 的草稿 + 字数统计 + 范文展示内核；草稿走原 key `mars_cet4_writing_draft:{setId}`，专项与模考互通。submitted 后展示范文+译文（参考内容默认遮挡，按钮展开）。
- 听力：复用 `SectionAudio` 播放器 + 题号卡片作答；模考模式 Transcript 默认隐藏直至该 section submitted（先听后核）。
- 阅读：复用 `BankedCloze/ParagraphMatching/CarefulReading`（加 `submitted` prop 高亮对错）；作答 key 同专项页。
- 翻译：复用 [TranslationPractice.jsx](file:///d:/workspace_sunny/mars-cet/src/pages/TranslationPractice.jsx) 草稿 + 参考译文；草稿走 `mars_cet4_translation_draft:{setId}`。submitted 后展示参考译文 + 译点。

**交卷流程**：
- 阅读/听力交卷：调 `setMockWrongBatch(examRef, paper, wrongMap)` 覆盖式写错题本（本次答对的旧错题自动移出）；算分（阅读 X/30、听力 X/25）。
- 写作/翻译交卷：只存草稿、不判分、不进错题本（同 KET 主观题范式）。
- 整卷完成（四 Section 均 submitted）→ 结果页：分 Section 得分（阅读/听力数字、写作/翻译「已交—查看参考」）+ 底部「只重做错题 →」链 `/mock/wrong`。

**错误边界**：用现有 `components/ErrorBoundary.jsx` 包裹运行器；错误卡片含「清除本套进度并重新开始」（`removeKey` + 重挂）+「返回真题中心」。

## partId / key 约定（key 均 0 起、按题在该 Part 内相对序号）

- 阅读：`r1`选词(key0-9→Q26-35) / `r2`长篇匹配(key0-9→Q36-45) / `r3`仔细(key0-9→Q46-55，跨两篇连续编号)
- 听力：`l1`新闻(key0-6→Q1-7) / `l2`长对话(key0-7→Q8-15) / `l3`篇章(key0-9→Q16-25)

## 真题中心（MockExamList.jsx）

仿 KET `ExamList`：18 套真题（2019.06–2026.06）卡片列表，首套 `cet4-2024-06-s1` 可点击进 `/mock/cet4-2024-06-s1`，读进度显示「开始/继续/已完成」；其余 17 套 `verified:false`，卡片不可点击，显示「整理中」。`mockExamCatalog.js` 注释逐套写明 `source/answerSource/verified:false`，避免后续录入遗漏 meta。

## 错题本（MockWrongBook.jsx）

仿 [CambridgeWrongBookMock.jsx](file:///d:/workspace_sunny/mars-cambridge/src/pages/CambridgeWrongBookMock.jsx) 的 `WrongCard/isRedoCorrect/submitRedo` 模式：
- `listMockWrong()` 加载错题，按 `examRef/paper/partId/key` 回查原题：阅读 `r1/r2/r3` 分别回查 `banked/matching/careful` 第 key 题；听力按 `l1/l2/l3` 索引 `sections.news/conversations/passages` 平铺后取第 key 题。
- 重做答对调 `resolveMockWrong` 移出（错题只在重新答对后进「已掌握」）。
- 支持全部/阅读/听力过滤、清空。写作/翻译不进错题本。回查失败（partId 重命名导致孤儿）走 ref-not-found 兜底分支。

## 路由与入口

- `App.jsx`：`/mock` → MockExamList、`/mock/:setId` → MockExam、`/mock/wrong` → MockWrongBook（均在 Layout+ErrorBoundary 内）。
- `Sidebar.jsx` L12：删 `ready: false`。
- `Home.jsx` MODULES「模拟考试」：`link:'/mock', ready:true`。

## 风险点

1. 进度格式不兼容 → 整份丢弃（缺 `submitted`/`timers`/`activeIndex` 任一字段即弃，仿 KET）。
2. 时间到自动交卷时用户正输 textarea → 须先 flush 再交。
3. 写作/翻译草稿跨专项/模考共享：旧专项草稿会被读到（预期，结果页提示「已读取你的专项草稿」）。
4. 多 timer 并行 setInterval 会漂移 → 仅 active section 跑 interval，切 section 回写剩余秒。
5. 得分按题数显示（阅读 30、听力 25），不引入 CET 真实分值加权，避免误导。
6. 18 套占位 `verified:false` 不可点击，显示「整理中」。
7. 中文文本引号必须全角「」不能用 ASCII "（会截断 JS 字符串，项目记忆强约束）。

## 验证

1. `cd d:\workspace_sunny\mars-cet; npm run lint` 通过；`npm run build` 通过。
2. dev server（5173）+ 浏览器逐项验证：
   - 首页模考卡 + 侧边栏模考项可点 → 进真题中心，首套可点、其余 17 套「整理中」。
   - 进首套模考：写作 tab 计时跑 30min、可暂停/继续；切听力 tab 被解锁需先交写作；交写作后展示范文。
   - 听力/阅读交卷后单题对错高亮、得分显示；写作/翻译展示参考。
   - 刷新页面：进度恢复（当前 section/答案/剩余时间/已交 section）。
   - 重置模考：确认框 → 清空进度回到写作 tab。
   - 错题本 `/mock/wrong`：列出阅读/听力错题，重做答对后移出；过滤/清空可用。
   - 控制台无红色 JS 错误（各路由切换）。
3. 错误边界：人为构造不兼容旧进度 → 整份丢弃从头开始，不白屏。
