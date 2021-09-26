export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "前端运维 ",
  "description": "linux、nginx、docker、持续集成、k8s",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://vuejs.org/images/logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
