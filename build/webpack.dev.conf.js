var webpack = require('webpack');
var path = require('path');
var baseWebpackConfig = require('./webpack.base.conf');
var merge = require('webpack-merge')
var es3ifyPlugin = require('es3ify-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');


module.exports = merge(baseWebpackConfig, {
  debug: true,
  devtool: 'source-map',
  plugins: [
    // new es3ifyPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      filename: 'index.html',
      inject: true
    }),
    new TransferWebpackPlugin([
      { from: 'services/polyfill', to: '/js' }
    ], path.join(__dirname, '../src')),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

