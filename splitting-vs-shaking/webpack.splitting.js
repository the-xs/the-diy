const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    react: ['react', 'react-dom', 'material-ui'],
  },
  output: { filename: '[name].js', path: 'dist-splitting' },
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
    new HtmlWebpackPlugin({ title: 'splitting' }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react'
    }),
  ],
}