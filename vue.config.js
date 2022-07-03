const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack:config=>{
    config.plugin('html')
    .tap(args=>{
      args[0].title="TOI 1338 b";
      return args;
    })
  },
  /* publicPath:'/src/main/resources/templates/', */
  publicPath:'/static/',
  //outputDir:'dist',
  outputDir:'../backend/src/main/resources/static',
/*   server: {
    host: true,
    port: 5278,
  }, */
})