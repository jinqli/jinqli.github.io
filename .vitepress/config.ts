import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "jinqli.bit",
  titleTemplate: "Custom Suffix",
  description: "躺平、摆烂、无所谓",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    siteTitle: "My Custom Title",
  },
});
