const webpackMerge = require('webpack-merge');

const mainConfig = require('./webpack.main');
const renderBase = require('./webpack.render');

const renderConfig = webpackMerge.merge(renderBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

module.exports = [mainConfig, renderConfig];
