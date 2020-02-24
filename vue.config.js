/* eslint-disable no-dupe-keys */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line quote-props
        'assets': '@/assets',
        // eslint-disable-next-line quote-props
        'common': '@/common',
        // eslint-disable-next-line quote-props
        'components': '@/components',
        // eslint-disable-next-line quote-props
        'network': '@/network',
        // eslint-disable-next-line quote-props
        'views': '@/views',
        // eslint-disable-next-line quote-props
        'network': '@/network',
        // eslint-disable-next-line quote-props
        'plugins': '@/plugins'
      }
    }
  }
}
