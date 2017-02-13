
const path = require('path')

module.exports = {
  entry: './docs/entry.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'rebass': path.join(__dirname, 'src/index.js')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devtool: 'cheap-source-map',

  devServer: {
    contentBase: 'docs'
  }
}

