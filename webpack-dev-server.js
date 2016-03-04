var express = require('express');
var webpack = require('webpack');

var config = require('./src/config');
var webpackConfig = require('./webpack.config.dev');
var compiler = webpack(webpackConfig);

var host = config.host || 'localhost';
var port = (config.port + 1) || 3001;
var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

var app = express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function(err) {
  if(err) {
    return console.error(err);
  }

  console.info('==> 🚧  Webpack development server listening on port %s', port);
});
