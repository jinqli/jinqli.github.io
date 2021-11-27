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
        text: "组件",
        children: [
          {
            text: "uniapp-vue2",
            link: "/pages/component.md",
          },
        ],
      },
      // NavbarGroup
      {
        text: "文档",
        children: [
          {
            text: "mini-ui",
            link: "/pages/mini-ui/",
          },
        ],
      },
      {
        text: "关于",
        link: "/pages/about.md",
      },
      // 字符串 - 页面文件路径
      // "/bar/README.md",
    ],
  },
};
