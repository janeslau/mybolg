module.exports = {
    port: 8083,
    base: '/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: '前端之路', link: '/baseComponents/' },
        { text: 'one-monent', link: '/life/' },
        { text: 'Github', link: 'https://github.com/arieltlm/' },
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: [
            '/baseComponents/base/page1',
            'baseComponents/base/page2',
            'baseComponents/base/page3'
          ]
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ]
    }
    }
  }