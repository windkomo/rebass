
var webpack = require('webpack')

var configuration = {
  browsers: [
    // 'Firefox',
    // 'Safari',
    'Chrome'
  ],

  singleRun: true,

  files: [
    'index.js'
  ],

  frameworks: [
    'mocha'
  ],

  plugins: [
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-safari-launcher',
    'karma-mocha',
    'karma-mocha-reporter',
    'karma-webpack'
  ],

  preprocessors: {
    'index.js': [ 'webpack' ]
  },

  reporters: [ 'mocha' ],

  webpack: {
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    plugins: [
      new webpack.IgnorePlugin(/react\/lib\/ReactContext/)
    ]
  },

  webpackMiddleware: {
    noInfo: true
  },

  client: {
    mocha: {
      reporter: 'html',
      ui: 'bdd'
    }
  }
}

if (process.env.TRAVIS) {
  configuration.browsers = [
    'Firefox'
  ]
}

module.exports = function (config) {
  config.set(configuration)
}

