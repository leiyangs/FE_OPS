module.exports = {
  lang: 'zh-CN',
  title: '前端运维 ',
  description: 'linux、nginx、docker、持续集成、k8s',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: './docs/.vuepress/dist',
  evergreen: true,
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    nav: [ // 导航栏配置
      { text: 'Home', link: '/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Nginx', link: '/nginx/' },
      { text: 'Docker', link: '/docker/' },
      { text: 'CICD', link: '/cicd/' },
      { text: 'K8s', link: '/k8s/' },
      {
        text: 'github',
        link: 'https://github.com/leiyangs',
           target: '_blank'
      }
    ],
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: [
      '/',
      // {
      //   title: 'Guide',
      //   collapsable: false,
      //   children: ['/guide/']
      // },
      {
        title: 'Linux',
        children: ['/linux/']
      },
      {
        title: 'Nginx',
        children: ['/nginx/']
      },
      {
        title: 'Docker',
        children: ['/docker/']
      },
      {
        title: 'CICD',
        children: ['/cicd/']
      },
      {
        title: 'K8s',
        collapsable: false,
        children: ['/k8s/']
      },
    ]
  }
}