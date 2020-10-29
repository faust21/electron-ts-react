const webpackMerge = require('webpack-merge');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const mainConfig = require('./webpack.main');
const renderBase = require('./webpack.render');

const renderConfig = webpackMerge.merge(renderBase, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
});

module.exports = [mainConfig, renderConfig];
