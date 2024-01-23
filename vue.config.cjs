module.exports = {
  chainWebpack(config) {
    config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
      args[0].rootDirectoryLevel = 1;
      return args;
    });
  },
  configureWebpack: {
    externals: [/^@rc-ses\/.+/],
    output: {
      libraryTarget: 'system',
      filename: "rc-ses-self-service-provider-demo-vue-ui.js"
    },
  },
  devServer: {
    host: "localhost"
  }
}