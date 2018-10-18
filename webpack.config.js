// webpack.config.js
var path = require('path');
var libraryName = 'mavenGeography';
var plugins = [];
var outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    globalObject: 'this',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
    },
  module: {
  rules: [
    {
      test: /(\.js)$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/
    }
  ]
},
  resolve: {
    extensions: ['.js']
  }
};

module.exports = config;
