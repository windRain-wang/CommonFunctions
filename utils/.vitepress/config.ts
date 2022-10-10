import { defineConfig } from "vitepress";
// import { version } from "../../package.json";

export default defineConfig({
  lang: "en-US",
  title: "Common Function",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  // markdown: {
  //   headers: {
  //     level: [0, 0],
  //   },
  // },

  themeConfig: {
    nav: [{ text: "测试", link: "/test/index" }],

    sidebar: sidebarConfig(),

    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],

    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "Copyright © 2019-present Evan You",
    // },

    // algolia: {
    //   appId: "8J64VVRP8K",
    //   apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //   indexName: "vitepress",
    // },

    // carbonAds: {
    //   code: "CEBDT27Y",
    //   placement: "vuejsorg",
    // },
  },
});

// function nav() {
//   return [
//     { text: "Guide", link: "/guide/what-is-vitepress", activeMatch: "/guide/" },
//     { text: "Configs", link: "/config/introduction", activeMatch: "/config/" },
//     {
//       text: version,
//       items: [
//         {
//           text: "Changelog",
//           link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
//         },
//         {
//           text: "Contributing",
//           link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
//         },
//       ],
//     },
//   ];
// }

// function sidebarGuide() {
//   return [
//     {
//       text: "Introduction",
//       collapsible: true,
//       items: [
//         { text: "What is VitePress?", link: "/guide/what-is-vitepress" },
//         { text: "Getting Started", link: "/guide/getting-started" },
//         { text: "Configuration", link: "/guide/configuration" },
//         { text: "Deploying", link: "/guide/deploying" },
//       ],
//     },
//     {
//       text: "Writing",
//       collapsible: true,
//       items: [
//         { text: "Markdown", link: "/guide/markdown" },
//         { text: "Asset Handling", link: "/guide/asset-handling" },
//         { text: "Frontmatter", link: "/guide/frontmatter" },
//         { text: "Using Vue in Markdown", link: "/guide/using-vue" },
//         { text: "API Reference", link: "/guide/api" },
//       ],
//     },
//     {
//       text: "Theme",
//       collapsible: true,
//       items: [
//         { text: "Introduction", link: "/guide/theme-introduction" },
//         { text: "Nav", link: "/guide/theme-nav" },
//         { text: "Sidebar", link: "/guide/theme-sidebar" },
//         { text: "Prev Next Link", link: "/guide/theme-prev-next-link" },
//         { text: "Edit Link", link: "/guide/theme-edit-link" },
//         { text: "Last Updated", link: "/guide/theme-last-updated" },
//         { text: "Layout", link: "/guide/theme-layout" },
//         { text: "Home Page", link: "/guide/theme-home-page" },
//         { text: "Team Page", link: "/guide/theme-team-page" },
//         { text: "Footer", link: "/guide/theme-footer" },
//         { text: "Search", link: "/guide/theme-search" },
//         { text: "Carbon Ads", link: "/guide/theme-carbon-ads" },
//       ],
//     },
//     {
//       text: "Migrations",
//       collapsible: true,
//       items: [
//         {
//           text: "Migration from VuePress",
//           link: "/guide/migration-from-vuepress",
//         },
//         {
//           text: "Migration from VitePress 0.x",
//           link: "/guide/migration-from-vitepress-0",
//         },
//       ],
//     },
//   ];
// }

function sidebarConfig() {
  return [
    {
      text: "工具函数",
      items: [
        { text: "千分位处理", link: "/test/thousandNumber/index" },
        { text: "UUID生成", link: "/test/create-uuid/index" }
      ],
    },
  ];
}