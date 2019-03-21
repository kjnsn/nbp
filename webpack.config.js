const path = require('path');

module.exports = {
  entry: './src/nbp.js',
  output: {
    filename: 'nbp.js',
    path: path.resolve(__dirname, 'build'),
    library: 'nist-bp',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
  
};