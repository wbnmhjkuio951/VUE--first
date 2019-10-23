module.exports = {
  configureWebpack:{

  },
  devServer: {
    public: '10.7.153.54:8080',
    hot: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://www.duzhe.com/home/reader/magazine/list',
        //target:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5527151',
        ws: false,
        changeOrigin: true,
        pathRewrite:{
          '/api':''
        }
      },
    }
  },};
