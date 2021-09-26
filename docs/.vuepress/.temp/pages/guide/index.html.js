export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "This is guide",
      "slug": "this-is-guide",
      "children": [
        {
          "level": 3,
          "title": "title3",
          "slug": "title3",
          "children": []
        },
        {
          "level": 3,
          "title": "title3-01",
          "slug": "title3-01",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "small title",
      "slug": "small-title",
      "children": []
    }
  ],
  "filePathRelative": "guide/README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
