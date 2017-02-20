const { resolve } = require('path');
const webpack = require('webpack');

const dist = resolve(__dirname, 'dist');
const src = resolve(__dirname, 'src');
const rootDir = '/';

module.exports = {
  devServer: {
    hot: true, //enable HMR
    contentBase: dist, //assume we use ./dist for output folder
    publicPath: rootDir,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devtool: 'inline-source-map',

  context: src,

  entry: [
    'react-hot-loader/patch', //active react-hot-loader
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js',
  ],

  output: {
    filename: 'app.bundle.js',
    path: dist,
    publicPath: rootDir,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
}