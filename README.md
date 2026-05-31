# 优米Leo看世界

Jeson爸爸陪优米和Leo讲故事、读绘本、玩音乐、看世界。每天15分钟，记录亲子日常，也记录孩子慢慢长大。

## 技术栈

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- 部署: Vercel

## 快速开始

```bash
npm install
npm run dev
```

打开 http://localhost:3000 查看网站。

`npm run dev` 会先自动运行 `generate:stories` 扫描 PDF 目录，生成故事数据，然后启动开发服务器。

## 构建部署

```bash
npm run build
```

直接部署到 Vercel，Vercel 原生支持 Next.js 的 SSG 模式。

## Vercel 部署步骤

1. 将项目推送到 GitHub
2. 登录 [Vercel](https://vercel.com)
3. 点击 "Add New..." → "Project" → "Import Git Repository"
4. 选择本项目的 GitHub 仓库
5. Framework Preset 选择 **Next.js**
6. Build Command 使用默认的 `npm run build`（已包含 `generate:stories`）
7. Output Directory 保持默认（由 Next.js 管理）
8. 点击 "Deploy"

部署完成后，Vercel 会自动监听 `main` 分支。每次 push 到 main，Vercel 自动重新部署。

## GitHub Actions

项目配置了 `.github/workflows/validate-build.yml`，用于在 push 或 PR 时提前验证构建是否成功。

作用：
- 每次 push 到 `main` 或发起 Pull Request 时自动运行
- 执行 `npm run generate:stories` + `npm run build`
- 提前发现 PDF 扫描或构建错误

GitHub Actions **不负责部署**，部署由 Vercel 自动完成。

## 新增 PDF 后自动上线流程

```
1. 把 PDF 放入 public/pdfs/stories/
2. 文件名使用 YYYY-MM-DD-slug.pdf
3.（可选）把封面图放入 public/images/covers/
4. git add .
5. git commit -m "add new story: slug-name"
6. git push origin main
7. GitHub Actions 自动验证 build ✅
8. Vercel 自动重新部署 🚀
9. 前台出现新故事 🎉
```

整个过程无需手动触发任何部署，推送即上线。

## PDF 绘本工作流

### 放置 PDF

将绘本 PDF 文件放入：

```
public/pdfs/stories/
```

### 文件命名规则

格式：`YYYY-MM-DD-slug-name.pdf`

示例：
```
2026-06-01-a-little-trip-to-america.pdf
2026-06-02-my-first-airport.pdf
2026-06-03-the-very-hungry-caterpillar.pdf
```

- 前 10 位为日期（`YYYY-MM-DD`）
- 第 11 位为连字符分隔
- 之后为 slug（英文小写、连字符分隔）
- 扩展名为 `.pdf`

### 封面图（可选）

将封面图放入 `public/images/covers/`，文件名与 PDF 对应：

```
public/images/covers/2026-06-01-a-little-trip-to-america.png
```

如果没有对应封面，会自动使用 `public/images/covers/default-cover.png`。

### 运行生成脚本

```bash
npm run generate:stories
```

脚本会：
1. 扫描 `public/pdfs/stories/` 下所有 `.pdf` 文件
2. 按日期倒序排列（最新在前）
3. 解析文件名生成标题、日期、slug 等
4. 自动匹配封面图
5. 输出到 `src/data/generated-stories.ts`

### 为什么 Vercel 构建时会自动更新

`package.json` 中配置了：

```json
"build": "npm run generate:stories && next build"
```

每次 Vercel 执行 `npm run build` 时，都会先运行生成脚本，扫描最新的 PDF 列表，重新生成故事数据，然后构建网站。所以只要把 PDF 推送到 Git 仓库，下次部署就会自动展示新故事。

## 目录结构

```
├── app/                    # 页面 (App Router)
│   ├── layout.tsx          # 全局布局
│   ├── page.tsx            # 首页
│   ├── stories/            # 每日故事列表
│   ├── stories/[slug]/     # 故事详情页
│   ├── books/              # 绘本馆
│   ├── music/              # 音乐小剧场
│   ├── timeline/           # 成长记录
│   └── about/              # 关于我们
├── components/             # 共享组件
├── data/                   # 静态示例数据（首页用）
├── src/data/               # 自动生成的数据（gitignore）
├── scripts/                # 构建脚本
│   └── generate-pdf-index.ts
├── public/
│   ├── pdfs/stories/       # PDF 绘本文件
│   └── images/covers/      # 绘本封面图
└── tailwind.config.ts      # Tailwind 配置
```

## 图片占位说明

`public/images/` 目录需要放入以下图片：

- `hero-family.png` — 首页主图
- `story-1.png` ~ `story-5.png` — 故事封面（首页演示用）
- `book-1.png` ~ `book-5.png` — 绘本封面
- `music-1.png` ~ `music-3.png` — 音乐封面
- `covers/default-cover.png` — PDF 故事默认封面

目前使用 emoji 占位显示，替换为真实图片后即可自动展示。
