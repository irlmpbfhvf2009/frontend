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
  publicPath:'./',
  outputDir:'dist',
  assetsDir:'static',
  indexPath:'index.html',
  devServer:{
    open:true,
    host:'localhost',
    port:8080,
    https:false,
    proxy:{
      '/': {
        ws: false,
        target: 'http://localhost:9090',
        changeOrigin: true,
        pathRewrite: {
            '^/': ''
        }
    }
    }
  }
})
