// webpack.config.js
var path = require('path');
var libraryName = 'mavenGeo';
var plugins = [];
var outputFile = 'mavenGeography.js';

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
    },
    {
      test: /\.(png|jp(e*)g|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8000 // Convert images < 8kb to base64 strings
        }
      }]
    }
  ]
},
  resolve: {
    extensions: ['.js']
  }
};

module.exports = config;
