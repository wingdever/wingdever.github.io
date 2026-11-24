---
title: 开始使用这个博客
description: 一篇示例文章，展示 Markdown 写作和标签的用法。把这篇替换成你自己的内容即可。
pubDate: 2026-11-24
tags: [notes, astro]
---

欢迎来到这个博客。这是一篇示例文章，说明怎么写文章。

## 新建文章

在 `src/content/blog/` 下新建一个 `.md` 文件，开头写上这些元信息：

```yaml
---
title: 文章标题
description: 一句话摘要，会显示在列表页和分享卡片上。
pubDate: 2026-11-24
tags: [notes, astro]
---
```

`pubDate` 决定排序，`tags` 决定归属哪些标签页。保存后本地热更新，发布时 `git push` 即可。

## 正文用 Markdown

正文就是普通 Markdown：

- **加粗**、*斜体*、`行内代码`
- 列表、链接、引用
- 代码块和标题

> 写文章只需要关心内容，样式由站点统一处理。

需要更多语法参考时，可以再写一篇自己的「写作指南」。
