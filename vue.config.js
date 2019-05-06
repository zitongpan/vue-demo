module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  devServer: {
    port: 4141,
    proxy: {
      '/api': {
        target: 'http://gank.io',
        changeOrigin: true,
      },
    },
  },
};
