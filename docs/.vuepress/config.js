module.exports = {
  title: 'Super X Coder',
  description: 'Just playing around',
  serviceWorker: true,
  themeConfig: {
    docsDir: 'source',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About US', link: '/AboutUS' },
      { text: 'Join US', link: '/JoinUS' },
    ],
    sidebar: {
      '/': [
        {
          title: 'node',
          collapsable: false,
          children: [
            '/node/Test'
          ]
        }
      ],
      '/node/': [
        {
          title: 'NodeJs',
          collapsable: false,
          children: [
            'Test'
          ]
        }
      ]
    }
  },
  configureWebpack: {
    output: {
      publicPath: '/'
    }
  }
}