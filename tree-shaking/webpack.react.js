const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index-react.js',
  output: { filename: 'react.bundle.js', path: 'dist' },
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
  plugins: [ new HtmlWebpackPlugin({ title: 'Tree-shaking' }) ]
}