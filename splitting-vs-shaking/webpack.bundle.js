const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: { filename: 'bundle.js', path: 'dist-bundle' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            [ 'es2015', { modules: false } ],
            'react',
          ] 
        }
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({ title: 'bundle' }),
  ],
}