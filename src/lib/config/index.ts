import type { Link } from "../types";

export const SITE = {
  title: "3x-Alpha",
  description: "3倍杠杆ETF与期权策略分享博客",
  author: "3x-Alpha Team",
  url: "https://3x-alpha.com",
  github: "https://github.com/johhhhnny/3x-Alpha",
  locale: "zh-CN",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/etf",
    text: "杠杆 ETF",
  },
  {
    href: "/categories/options",
    text: "期权策略",
  },
  {
    href: "/categories/market",
    text: "市场分析",
  },
  {
    href: "/categories/portfolio",
    text: "组合展示",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "关于我们",
  },
  {
    href: "/authors",
    text: "作者列表",
  },
  {
    href: "/contact",
    text: "联系我们",
  },
  {
    href: "/privacy",
    text: "隐私政策",
  },
  {
    href: "/terms",
    text: "服务条款",
  },
  {
    href: "/cookie-policy",
    text: "Cookie 政策",
  },
  {
    href: "https://3x-alpha.com/rss.xml",
    text: "RSS 订阅",
  },
  {
    href: "https://3x-alpha.com/sitemap-index.xml",
    text: "站点地图",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "https://t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com",
    text: "Twitter (X)",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
