var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var es3ifyPlugin = require('es3ify-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');


module.exports = merge(baseWebpackConfig, {
  plugins: [
    new es3ifyPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      filename: 'index.html',
      inject: true
    }),
    new TransferWebpackPlugin([
      { from: 'services/polyfill', to: '/js' }
    ], path.join(__dirname, '../src')),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        properties: false,
        warnings: false
      },
      output: {
        beautify: true,
        quote_keys: true
      },
      mangle: {
        screw_ie8: false
      },
      sourceMap: false
    })
  ],
});