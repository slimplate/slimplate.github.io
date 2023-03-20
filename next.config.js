const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  defaultShowCopyCode: true,
  images: {
    unoptimized: true
  },
  rewrites: async () => {
    return [
      {
        source: '/admin',
        destination: '/admin.html'
      }
    ]
  }
})
