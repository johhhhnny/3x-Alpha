# 3x-Alpha 📈

3x-Alpha 是一个面向杠杆 ETF、期权策略与市场洞察的中文财经内容站点。

网站地址：https://3x-alpha.com/

本项目基于 Astro 构建，并结合 Keystatic CMS 提供内容管理能力，适合用于个人品牌、知识分享站点或专业内容发布平台。

## ✨ 项目特点

- 📝 通过 Keystatic 管理文章、作者与分类内容
- 🎨 提供响应式布局，适配桌面、平板与移动设备
- 🔍 支持站内文章搜索
- 📱 提供分页浏览与文章列表展示
- 🌙 支持浅色/深色主题切换
- 📡 支持 RSS 订阅
- ⚡ 内置 SEO 相关优化与站点地图生成
- 📚 支持 Markdown 与 MDX 混合内容编写

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone <your-repo-url>
cd 3x-alpha
```

### 2. 安装依赖

推荐使用 Bun 进行安装。如果你尚未安装 Bun，请先访问 [Bun 官网](https://bun.sh) 完成安装。

```bash
bun install
# 或使用 npm
npm install
```

### 3. 启动开发服务器

```bash
bun run dev
```

启动后，可在浏览器中访问：

- 前台页面：http://localhost:4321
- Keystatic 管理后台：http://localhost:4321/keystatic

## 🛠️ 常用命令

```bash
bun run dev          # 启动开发服务器
bun run dev:astro    # 仅启动 Astro 开发服务器
bun run build        # 构建生产版本
bun run preview      # 本地预览构建结果
bun run clean        # 清理缓存目录
bun run clean:dev    # 清理缓存后重新启动开发服务器
```

## ⚙️ Keystatic 配置

如需启用内容管理后台，请在项目根目录创建或修改 `.env` 文件，并加入：

```env
RUN_KEYSTATIC=true
```

随后重新启动开发服务器即可使用 Keystatic CMS。

## 💻 技术栈

- [Astro](https://astro.build) - 静态站点生成框架
- [Keystatic](https://keystatic.com) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com) - 样式框架
- [DaisyUI](https://daisyui.com) - Tailwind 组件库
- [React](https://react.dev) - UI 组件支持
- [TypeScript](https://www.typescriptlang.org/) - 类型安全开发
- [MDX](https://mdxjs.com/) - Markdown 与 JSX 混合内容
- [Pagefind](https://pagefind.app/) - 静态搜索引擎

## 📄 许可证

本项目采用 [MIT License](LICENSE.md) 开源协议。
