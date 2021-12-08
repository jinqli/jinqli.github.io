module.exports = {
  title: "mini-ui",
  description: "描述",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  themeConfig: {
    lastUpdated: "最后更新时间",
    sidebar: {
      "pages/mini-ui/": ["layout", "button", "menu"],
    },
    navbar: [
      // NavbarItem
      {
        text: "首页",
        link: "/",
      },
      {
        text: "环境",
        children: [
          {
            text: "android",
            link: "/environment/Android模拟器.md",
          },
          {
            text: "nginx.conf",
            link: "/environment/Nginx使用.md",
          },
        ],
      },
      {
        text: "代码",
        children: [
          {
            text: "JavaScript",
            link: "/code/JavaScript/",
          },
        ],
      },
      {
        text: "Kali",
        children: [
          {
            text: "U盘启动",
            link: "/kali/把kali装进U盘.md/",
          },
        ],
      },
      {
        text: "文档",
        children: [
          {
            text: "mini-ui",
            link: "/ui/mini-ui/",
          },
        ],
      },
      {
        text: "关于",
        link: "/about.md",
      },
      // 字符串 - 页面文件路径
      // "/bar/README.md",
    ],
  },
};
