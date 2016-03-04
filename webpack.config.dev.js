var path = require('path');
var webpack = require('webpack');

var host = process.env.HOST || 'localhost';
var port = parseInt(process.env.PORT) + 1 || 3001;

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
    './src/client',
  ],
  output: {
    path: path.join(__dirname, 'static/dist'),
    filename: '[name].js',
    publicPath: 'http://' + host + ':' + port + '/dist/',
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
      query: {
        plugins: [
          ['react-transform', {
            transforms: [{
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            }]
          }]
        ]
      }
    }]
  }
}
