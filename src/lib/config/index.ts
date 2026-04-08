import type { Link } from "../types";

export const SITE = {
  title: "TslaDaily",
  description: "A news website built with Astro for TslaDaily",
  author: "TslaDaily Team",
  url: "https://tsladaily.com",
  github: "https://github.com/Tsladaily/tsladaily",
  locale: "zh-CN",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/daily",
    text: "每日特报",
  },
  {
    href: "/categories/story",
    text: "特有故事",
  },
  {
    href: "/categories/value",
    text: "投资价值",
  },
  {
    href: "/categories/tech",
    text: "科技前沿",
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
    href: "https://tsladaily.com/rss.xml",
    text: "RSS 订阅",
  },
  {
    href: "https://tsladaily.com/sitemap-index.xml",
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
