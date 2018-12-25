var utils = require('./utils')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      favicon: 'src/favicon.ico'
    }),
   /*
    // https://github.com/ampedandwired/html-webpack-plugin
   new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pages/cart/cart.html',
      inject: true,
      favicon: 'src/favicon.ico'
    }),
   */
    new FriendlyErrorsPlugin()
  ]
})

function pack (entries, module) {
  for (const path in entries) {
    const conf = {
      filename: `${path}.html`,
      template: entries[path],   // 模板路径
      inject: true,
      chunks: ['manifest', 'vendor', path]   // 必须先引入公共依赖
    }
    module.plugins.push(new HtmlWebpackPlugin(conf))
  }
}
const glob = require('glob')
function getEntries(globPath)  {
 const entries = glob.sync(globPath).reduce((result, entry) => {
   const moduleName = path.basename(path.dirname(entry)) // 获取模块名称
   result[moduleName] = entry
   return result
 }, {})
 return entries
}
const entries = getEntries('src/pages/**/*.html');

//pack(entries, webpackConfig)
module.exports = webpackConfig