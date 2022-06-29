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
    historyApiFallback: true,
    //allowedHosts: ['limitless-hamlet.herokuapp.com/'],
    host:'localhost',
    port:8888,
    open:true,
    https:false, 
    proxy:{
      '/': {
        ws: false,
        //target: 'http://localhost:8080',
        target: 'https://limitless-hamlet.herokuapp.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/screen'
        }
    }
    }
  }
})
