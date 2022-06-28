const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack:config=>{
    config.plugin('html')
    .tap(args=>{
      args[0].title="隨便玩玩";
      return args;
    })
  },
  publicPath:'/static/',
  outputDir:'dist',
  devServer:{
    allowedHosts: ['limitless-hamlet.herokuapp.com/'],
    open:true,
    host:'localhost',
    port:8080,
    https:true,
    proxy:{
      '/': {
        ws: false,
        target: 'https://limitless-hamlet.herokuapp.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/': ''
        }
    }
    }
  }
})
