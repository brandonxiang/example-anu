var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../config/index');
var webpackConfig = require('./webpack.dev.conf');

var app = express();
var compiler = webpack(webpackConfig);
//通过localhost可以访问项目文件夹下的所有文件，等于动态为每个静态文件创建了路由
// app.use(express.static(path.join(__dirname, '/dist')))
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  quiet: true,
  publicPath: webpackConfig.output.publicPath
});

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});

app.use(devMiddleware);

app.use(hotMiddleware);

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

app.listen(3002);