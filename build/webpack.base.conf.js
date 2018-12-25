var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
// var webpack = require("webpack")

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
/**
  * 获取多页面入口文件
  * @globPath 文件路径
  */
const glob = require('glob')
function getEntries(globPath)  {
 const entries = glob.sync(globPath).reduce((result, entry) => {
   const moduleName = path.basename(path.dirname(entry)) // 获取模块名称
   result[moduleName] = entry
   return result
 }, {})
 return entries
}


/**
 * 打包时使用多入口文件
 */
const entries = getEntries('src/pages/**/*.js');
/**
 * 开发时使用单入口
 */
const entry = {
    app: 'src/main.js'
}
module.exports = {
  entry: process.env.NODE_ENV === 'production'
      ? entries
      : entry,
 /* entry: {
    app: './src/pages/index/index.js'
  },*/
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'common': resolve('src/common'),
      'store': resolve('src/store'),
      'pages': resolve('src/pages'),
      'plugins': resolve('src/plugins'),
      'components': resolve('src/components'),
      // 'jquery': 'jquery'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        exclude: resolve('node_modules')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: utils.assetsPath('images/[hash:8].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: utils.assetsPath('fonts/[hash:8].[ext]')
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       jquery: "jquery",
  //       "window.jQuery": "jquery"
  //   })
  // ]
}
