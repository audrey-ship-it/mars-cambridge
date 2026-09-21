# Mars Cambridge

Mars Cambridge 是面向中国剑桥英语学习者的练习与模考网站。当前产品范围：

- A2 Key / KET：现有基准版本
- B1 Preliminary / PET：下一阶段
- B2 First / FCE：PET 完成后的下一阶段
- C1 Advanced / CAE 与 C2 Proficiency / CPE：不在本项目范围内

## 当前状态

KET 已形成词汇、语法、听力、阅读、写作、口语、模考、错题与个人学习中心的完整交互框架，可作为 PET/FCE 的产品和开发基准。

当前仍是前端单机版本，学习记录保存在浏览器 `localStorage`。它不是完整的生产系统：还没有正式用户账号、云端同步、后台管理、支付、运营分析、服务端数据库和生产级监控。

题库状态不是“20 套全部完整”：

- 青少版真题：12 套，完成度较高；
- 标准版真题：8 套，目前阅读写作可练，听力与口语仍处于核对/补录阶段。

## 本地运行

```bash
npm install
npm run dev
```

质量检查：

```bash
npm run audit:reading
npm run audit:words
npm run lint
npm run build
```

## 项目文档

- [产品与功能完整说明](docs/PRODUCT_SPEC_AND_HANDOFF.md)
- [PET/FCE 开发与验收标准](docs/PET_FCE_DELIVERY_STANDARD.md)
- [协作与交接流程](docs/COLLABORATION_AND_HANDOFF.md)
- [Partner 首次任务提示词](docs/PARTNER_START_PROMPT.md)
- [备份与恢复方案](docs/BACKUP_AND_RECOVERY.md)
- [中国上线准备清单](docs/CHINA_LAUNCH_READINESS.md)
- [已知限制与技术债](docs/KNOWN_LIMITATIONS.md)

每位开发者和每个 ChatGPT/Codex 任务开始前，还必须阅读根目录的 [AGENTS.md](AGENTS.md)。

## 技术栈

- React 19 + Vite
- React Router
- Tailwind CSS
- Framer Motion
- 静态题库与媒体资源
- 浏览器本地存储（当前阶段）

## 版权提醒

仓库包含考试题目、扫描图、音频及衍生内容。将仓库、媒体或网站公开、商业化或在中国大陆上线前，必须先完成逐项版权与商标授权审查。代码可交接不等于其中所有内容都获得了公开传播许可。
