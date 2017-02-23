module.exports = {
  entry: './index-ref.js',
  output: { filename: 'ref.bundle.js', path: './' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            [ 'es2015', { modules: false } ]
          ] 
        }
      }
    ]
  },
}