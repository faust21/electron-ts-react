const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    render: path.resolve(__dirname, '..', 'src/ui/App.tsx'),
  },
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      '@ui': path.resolve(__dirname, '..', 'src/ui/'),
    },
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'assets/index.html'),
      favicon: path.resolve(__dirname, '..', 'assets/favicon.ico'),
    }),
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        reacts: {
          test: /[\\/]node_modules[\\/].*react.*[\\/]/,
          name(module, chunks, cacheGroupsKey) {
            return `vendors-${cacheGroupsKey}`;
          },
          priority: 10,
        },
        others: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupsKey) {
            return `vendors-${cacheGroupsKey}`;
          },
          priority: 0,
        },
      },
    },
  },
};
