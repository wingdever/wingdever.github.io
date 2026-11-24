# wingdever.github.io

个人主页与博客，基于 Astro，部署在 GitHub Pages。

## 本地开发

需要 Node.js 22.23.4 及以上。

```bash
npm ci
npm run dev
```

浏览器打开 `http://localhost:4321`，按 `q` 停止服务。

## 改主页信息

编辑 `src/consts.ts`：站点名、简介、所在城市、项目列表、社交链接。这个文件集中了所有需要替换的占位内容。

站点地址在 `astro.config.mjs` 的 `site` 字段，当前为 `https://wingdever.github.io`。

## 写文章

在 `src/content/blog/` 下新建 `.md` 文件：

```markdown
---
title: 文章标题
description: 一句话摘要，显示在列表页和分享卡片上。
pubDate: 2026-11-24
tags: [notes, astro]
---

正文写在这里，使用 Markdown。
```

`pubDate` 决定排序，`tags` 决定出现在哪些标签页。保存后本地实时预览。

## 发布

```bash
git add .
git commit -m "更新内容"
git push
```

推送后 GitHub Actions 自动构建并部署。首次使用需在仓库 **Settings → Pages → Build and deployment** 里把 Source 设为 **GitHub Actions**。

## 目录结构

```text
src/
  consts.ts              站点信息（你要改的主要文件）
  content/blog/          博客文章（Markdown）
  pages/                 页面：主页、博客、关于、标签
  components/            页头、页脚、SEO 等组件
  layouts/BlogPost.astro 文章页布局
  styles/global.css      极简主题样式
.github/workflows/       自动部署配置
```
