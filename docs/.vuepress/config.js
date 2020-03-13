module.exports = {
    port: 8085,
    base: '/Note-docs/',
    evergreen: true,
    description: '测试文档',

    theme: 'reco',
    themeConfig: {
      author: 'liduapong',
      logo: '/gangan.gif',//首页左上角侧头像
      authorAvatar: '/22.jpeg',//首页右侧头像
      sidebar: 'auto',
      sidebarDepth: 3,//在所有页面中启用自动生成侧栏,
      type: 'blog',
      nav: [
        { text: 'Home', link: '/', icon: 'reco-home' },
        { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
        {
          text: 'Contact',
          icon: 'reco-message',
          items: [
            {
              text: 'GitHub',
              link: 'https://github.com/liduapong',
              icon: 'reco-github',
            }
          ],
        },
      ],
     // 博客配置
     blogConfig: {
       category: {
         location: 2,     // 在导航栏菜单中所占的位置，默认2
         text: 'Category' // 默认文案 “分类”
       },
       tag: {
         location: 3,     // 在导航栏菜单中所占的位置，默认3
         text: 'Tag'      // 默认文案 “标签”
       }
     }
   },
   friendLink: [
    {
      title: '午后南杂',
      desc: 'Enjoy when you can, and endure when you must.',
      email: 'recoluan@qq.com',
      link: 'https://www.recoluan.com',
    },
    {
      title: '有梦想的咸鱼',
      desc: '我不能克制我记几',
      link: 'https://blog.liudongyang.top',
      email: '',
      logo: 'https://blog.liudongyang.top/blog-logo.jpg',
    },
  ],
   head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true,
  },
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '文档',
      }
    },
  }
  