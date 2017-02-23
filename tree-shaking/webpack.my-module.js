module.exports = {
  entry: './src/index-my-module.js',
  output: { filename: 'my-module-test.bundle.js', path: 'dist' },
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